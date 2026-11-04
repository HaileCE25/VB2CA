"""Generate topic-practice questions from the existing CA1 exam matrix."""
import io
import json
import os
import random
import re
import sys
import faulthandler
from sympy import pi

import gen_exams as G
import g_theory as TH
from g_core import NQ, steps, tx

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MIN_PER_TOPIC = 200
FIRST_EXTRA_EXAM = G.N_EXAMS
GROUP_QUESTION_COUNTS = [3] * len(G.GROUPS)
BASE_COUNTS = {
    'vt': 125, 'mt': 200, 'he': 99, 'tr': 97, 'gh': 129, 'dh': 67,
    'nb': 225, 'ch': 192, 'v1': 191, 'v2': 65, 'tb': 163, 'td': 67,
}


def matrix_slots():
    source = io.open(os.path.join(ROOT, 'js', 'topics.js'), encoding='utf-8').read()
    match = re.search(r'slots:\s*\[([^\]]*)\]', source)
    if not match:
        raise RuntimeError('Could not read TOPICS.slots from js/topics.js')
    return re.findall(r"'([a-z0-9]+)'", match.group(1))


def task_slot_indices(task):
    kind, index = task
    mcq_count = len(G.MCQ)
    group_count = sum(GROUP_QUESTION_COUNTS)
    if kind == 'c':
        return [index]
    if kind == 'g':
        start = mcq_count + sum(GROUP_QUESTION_COUNTS[:index])
        return list(range(start, start + GROUP_QUESTION_COUNTS[index]))
    return [mcq_count + group_count + index]


def bank_items(task, generated, slots, remaining):
    kind, _ = task
    out = []
    for exam_index in range(FIRST_EXTRA_EXAM, G.N_EXAMS):
        source = generated[exam_index]
        if source is None:
            continue
        if kind == 'g':
            for offset, question in enumerate(source['questions']):
                topic = slots[task_slot_indices(task)[offset]]
                if remaining.get(topic, 0) <= 0:
                    continue
                item = dict(question)
                item.update(topic=topic, type='mcq', group={'stem': source['stem']}, first=True)
                out.append(item)
                remaining[topic] -= 1
        else:
            topic = slots[task_slot_indices(task)[0]]
            if remaining.get(topic, 0) <= 0:
                continue
            item = dict(source)
            item.update(topic=topic, type='mcq' if 'options' in item else 'short')
            out.append(item)
            remaining[topic] -= 1
    return out


def task_config(task):
    kind, index = task
    if kind == 'c':
        number = index + 1
        return kind, G.MCQ[index], G.HD.HARD_MCQ, G.GM.NEW.get(number), 'c%d' % number, number
    if kind == 'g':
        return kind, G.GROUPS[index], G.HD.HARD_GROUPS, G.GM.NEW_GROUPS.get(index), 'g%d' % index, index
    number = 46 + index
    return kind, G.SHORT[index], G.HD.HARD_SHORT, G.GM.NEW.get(number), 's%d' % index, number


def make_practice_item(fn, slot, variant, seen, exam_index, max_attempts=60):
    for attempt in range(max_attempts):
        rng = random.Random('%d-%s-%d-%d' % (G.SEED, slot, exam_index, attempt))
        faulthandler.dump_traceback_later(G.SLOW, exit=True)
        try:
            item = fn(rng, variant)
        except G.Retry:
            continue
        finally:
            faulthandler.cancel_dump_traceback_later()
        item = G.finish(G.clean(item), fn.__name__, slot)
        signature = item.get('stem', '') + item.get('q', '') + '|'.join(sorted(item.get('options', [])))
        if signature in seen[slot]:
            continue
        issues = G.problems(item)
        if issues:
            raise G.GenError('Câu lỗi ở vị trí %s, đề thứ %d (%s): %s' %
                             (slot, exam_index + 1, fn.__name__, '; '.join(issues)))
        seen[slot].add(signature)
        return item
    return None


def practice_slot_items(task, slots, remaining):
    kind, base, hard_map, new_forms, slot, number = task_config(task)
    indices = task_slot_indices(task)
    needed = {slots[index] for index in indices}
    seen = {slot: set()}
    generated = [None] * G.N_EXAMS
    produced = {}

    def has_quota():
        return any(remaining.get(topic, 0) > produced.get(topic, 0) for topic in needed)

    for exam_index in range(G.N_EXAMS):
        hard = exam_index >= G.N_BASE
        theory_items = dict(G.PLAN.get(exam_index, [])) if kind == 'c' else {}
        if number in theory_items:
            if exam_index < FIRST_EXTRA_EXAM or not has_quota():
                continue
            question, answer, why, wrongs = theory_items[number]
            item = G.finish(G.theory(question, answer, why, wrongs), 'theory', '')
            issues = G.problems(item)
            if issues:
                raise G.GenError('Câu lí thuyết lỗi ở vị trí %s: %s' % (slot, '; '.join(issues)))
            signature = item.get('stem', '') + item.get('q', '') + '|'.join(sorted(item.get('options', [])))
            if signature not in seen[slot]:
                seen[slot].add(signature)
                generated[exam_index] = item
                produced[slots[indices[0]]] = produced.get(slots[indices[0]], 0) + 1
            continue

        fn = hard_map.get(number, base) if hard else base
        fn, variant = G.choose(slot, fn, new_forms, hard, exam_index)
        if exam_index < FIRST_EXTRA_EXAM or not has_quota():
            continue
        item = make_practice_item(fn, slot, variant, seen, exam_index)
        if item is None:
            item = make_practice_item(base, slot, exam_index + 1000, seen, exam_index)
        if item is None:
            break
        generated[exam_index] = item
        if kind == 'g':
            for index in indices:
                topic = slots[index]
                if remaining.get(topic, 0) > produced.get(topic, 0):
                    produced[topic] = produced.get(topic, 0) + 1
        else:
            topic = slots[indices[0]]
            produced[topic] = produced.get(topic, 0) + 1
    return generated


def additional_green_questions(count, seen):
    extra = []
    for index in range(count):
        a, b, radius = index % 9 + 1, index // 9 + 1, index % 4 + 1
        question = (
            r'Cho $C$ là đường tròn $x^2+y^2=%d$ lấy theo chiều ngược chiều kim đồng hồ. '
            r'Dùng định lý Green, tính $\displaystyle\oint_C (-%dy)\,dx + (%dx)\,dy$.'
        ) % (radius * radius, a, b)
        value = (a + b) * pi * radius * radius
        item = NQ(question, value, [
            (b - a) * pi * radius * radius,
            (a + b) * 2 * pi * radius,
            (a + b) * pi * radius * radius / 2,
            -value,
        ], steps(
            r'$\dfrac{\partial Q}{\partial x}-\dfrac{\partial P}{\partial y}=%d-(-%d)=%d$.'
            % (b, a, a + b),
            r'Theo Green, tích phân bằng $(%d)\cdot\pi\cdot%d=%s$.'
            % (a + b, radius * radius, tx(value)),
        ))
        item = G.finish(G.clean(item), 'practice_green_circle', 'td')
        issues = G.problems(item)
        if issues:
            raise G.GenError('Câu bổ sung tích phân đường lỗi: ' + '; '.join(issues))
        signature = item['q'] + '|'.join(sorted(item.get('options', [])))
        if signature in seen:
            raise G.GenError('Câu bổ sung tích phân đường bị trùng: %s' % question)
        seen.add(signature)
        item.update(topic='td', type='mcq')
        extra.append(item)
    return extra


def build():
    slots = matrix_slots()
    expected = len(G.MCQ) + sum(GROUP_QUESTION_COUNTS) + len(G.SHORT)
    if len(slots) != expected:
        raise RuntimeError('Question matrix has %d slots; generator has %d' % (len(slots), expected))

    remaining = {topic: max(0, MIN_PER_TOPIC - count) for topic, count in BASE_COUNTS.items()}
    total_extra_exams = max(
        (amount + slots.count(topic) - 1) // slots.count(topic)
        for topic, amount in remaining.items() if amount
    )
    G.N_EXAMS = FIRST_EXTRA_EXAM + total_extra_exams
    G.PLAN = TH.plan(G.N_EXAMS)
    G.USED.clear()

    extra = []
    for task in G.TASKS:
        topics = {slots[index] for index in task_slot_indices(task)}
        if not any(remaining.get(topic, 0) > 0 for topic in topics):
            continue
        generated = practice_slot_items(task, slots, remaining)
        extra.extend(bank_items(task, generated, slots, remaining))

    if remaining.get('td', 0):
        seen = {
            item.get('q', '') + '|'.join(sorted(item.get('options', [])))
            for item in extra if item['topic'] == 'td'
        }
        added = additional_green_questions(remaining['td'], seen)
        extra.extend(added)
        remaining['td'] -= len(added)

    missing = {topic: count for topic, count in remaining.items() if count}
    if missing:
        raise RuntimeError('Generator did not fill all topic banks: %r' % missing)
    return extra


def main():
    check_only = '--check' in sys.argv
    try:
        items = build()
    except (G.GenError, RuntimeError) as error:
        raise SystemExit('ERROR: %s' % error)

    counts = {topic: 0 for topic in BASE_COUNTS}
    for item in items:
        counts[item['topic']] += 1
        item['id'] = '%s-%03d' % (item['topic'], counts[item['topic']])
    print('%d supplementary questions; bank totals: %s' % (
        len(items), ', '.join('%s=%d' % (topic, BASE_COUNTS[topic] + counts[topic]) for topic in BASE_COUNTS)
    ))
    if check_only:
        print('(check mode: no files written)')
        return

    path = os.path.join(ROOT, 'data', 'practice-bank.js')
    with io.open(path, 'w', encoding='utf-8', newline='\n') as output:
        output.write('// Generated from tools/gen_practice_bank.py using the existing CA1 question matrix.\n')
        output.write('window.PRACTICE_BANK = ')
        json.dump(items, output, ensure_ascii=False, indent=1)
        output.write(';\n')
    print('Wrote %s' % path)


if __name__ == '__main__':
    main()
