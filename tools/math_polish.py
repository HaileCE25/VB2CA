import re

def polish_math(s):
    if not isinstance(s, str): return s
    s = re.sub(r'\\\\Delta([A-Za-z])', r'\\\\Delta \\1', s)
    s = s.replace('+ -', '- ').replace('= +', '= ')
    out = []
    for ln in s.split('<br>'):
        st = ln.strip()
        if st and '$' not in st and any(k in st for k in ['\\\\dfrac', '\\\\frac', '\\\\int', '\\\\sum', '\\\\lim', '\\\\sqrt', '\\\\partial']):
            ln = '$' + st + '$'
        out.append(ln)
    s = '<br>'.join(out)
    def fb(m):
        x = m.group(1)
        x = re.sub(r'(?<![0-9.\\\\])1([xyzuvwt])(?![a-zA-Z])', r'\\1', x)
        x = re.sub(r'\\\\partial\\s*([a-zA-Z0-9_{}^]+)\\s*/\\s*\\\\partial\\s*([a-zA-Z0-9_{}^]+)', r'\\\\frac{\\\\partial \\1}{\\\\partial \\2}', x)
        x = re.sub(r'([0-9]+\\^[0-9]+|[a-zA-Z]\\^[0-9]+)\\s*/\\s*([0-9]+|[a-zA-Z])', r'\\\\frac{\\1}{\\2}', x)
        x = re.sub(r'(?<!\\\\displaystyle\\s)(?<!\\\\displaystyle)(\\\\(?:i{1,3}nt|oint|sum|lim)\\b)', r'\\\\displaystyle \\1', x)
        return '$' + x + '$'
    s = re.sub(r'\\$([^$]+)\\$', fb, s)
    s = re.sub(r'\\.\\s+(?=(?:Suy ra|Do đó|Khi đó|Từ đó|Thay |Để |Vậy |Ta có|Mặt khác)\\b)', '.<br>', s)
    return s
