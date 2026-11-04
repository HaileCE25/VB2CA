# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('js/theory-formula-additions.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()[:40]

print(''.join(lines))
