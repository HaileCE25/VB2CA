# -*- coding: utf-8 -*-
import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

with open('js/theory-formula-practice.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'window\.THEORY_FORMULA_PRACTICE\s*=\s*(\{.*\});', text, re.DOTALL)
if m:
    data = json.loads(m.group(1))
    print("Topics in practice data:", list(data.keys()))
    for top, formulas in data.items():
        print(f" - {top}: {len(formulas)} formulas with exercises")
