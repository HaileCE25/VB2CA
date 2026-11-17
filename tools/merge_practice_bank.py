# -*- coding: utf-8 -*-
"""Hợp nhất ngân hàng câu hỏi gốc và bộ câu hỏi ứng dụng thực tế chuyên sâu
vào data/practice-bank.js, đảm bảo toàn bộ câu hỏi chuẩn xác, có lời giải chi tiết.
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import gen_exams as G
from gen_applied_questions import build_applied_questions

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BANK_PATH = os.path.join(ROOT, 'data', 'practice-bank.js')

def main():
    # 1. Đọc practice bank hiện tại
    content = io.open(BANK_PATH, 'r', encoding='utf-8').read()
    prefix = 'window.PRACTICE_BANK = '
    idx = content.find(prefix)
    if idx < 0:
        raise RuntimeError('Cannot find window.PRACTICE_BANK in ' + BANK_PATH)
    json_str = content[idx + len(prefix):].rstrip().rstrip(';')
    existing = json.loads(json_str)
    print(f'Read {len(existing)} existing practice questions.')

    # 2. Sinh các câu hỏi ứng dụng thực tế
    applied = build_applied_questions()
    print(f'Generated {len(applied)} applied questions.')

    # 3. Làm sạch và kiểm tra lỗi các câu ứng dụng
    seen_q = {q['q'] for q in existing}
    added = []
    for item in applied:
        item = G.finish(G.clean(item), item.get('tag', 'applied'), item['topic'])
        item.pop('tag', None)
        if item['q'] in seen_q:
            continue
        issues = G.problems(item)
        if issues:
            print(f"Warning: Issue in item {item['q'][:40]}: {issues}")
            continue
        seen_q.add(item['q'])
        added.append(item)

    print(f'Verified and added {len(added)} unique applied questions.')

    # 4. Gộp toàn bộ danh sách và đánh số lại id theo từng topic
    all_items = existing + added
    counts = {}
    for it in all_items:
        t = it['topic']
        counts[t] = counts.get(t, 0) + 1
        it['id'] = f'{t}-{counts[t]:03d}'

    print('Total items after merge:', len(all_items))
    print('Distribution by topic:', counts)

    # 5. Ghi lại file data/practice-bank.js
    with io.open(BANK_PATH, 'w', encoding='utf-8', newline='\n') as f:
        f.write('// Generated from tools/gen_practice_bank.py and tools/gen_applied_questions.py\n')
        f.write('window.PRACTICE_BANK = ')
        json.dump(all_items, f, ensure_ascii=False, indent=1)
        f.write(';\n')

    print(f'Wrote {len(all_items)} questions to {BANK_PATH}')

if __name__ == '__main__':
    main()
