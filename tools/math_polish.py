import re

def polish_math(s):
    if not isinstance(s, str): return s
    s = re.sub(r'\\Delta([A-Za-z])', r'\\Delta \1', s)
    s = s.replace('+ -', '- ').replace('= +', '= ')
    out = []
    for ln in s.split('<br>'):
        st = ln.strip()
        if st and '$' not in st and any(k in st for k in ['\\dfrac', '\\frac', '\\int', '\\sum', '\\lim', '\\sqrt', '\\partial']):
            ln = '$' + st + '$'
        out.append(ln)
    s = '<br>'.join(out)
    def fb(m):
        x = m.group(1)
        x = re.sub(r'(?<![0-9.\\])1([xyzuvwt])(?![a-zA-Z])', r'\1', x)
        x = re.sub(r'\\partial\s*([a-zA-Z0-9_{}^]+)\s*/\s*\\partial\s*([a-zA-Z0-9_{}^]+)', r'\\frac{\\partial \1}{\\partial \2}', x)
        x = re.sub(r'([0-9]+\^[0-9]+|[a-zA-Z]\^[0-9]+)\s*/\s*([0-9]+|[a-zA-Z])', r'\\frac{\1}{\2}', x)
        x = re.sub(r'(?<!\\displaystyle\s)(?<!\\displaystyle)(\\(?:i{1,3}nt|oint|sum|lim)\b)', r'\\displaystyle \1', x)
        return '$' + x + '$'
    s = re.sub(r'\$([^$]+)\$', fb, s)
    s = re.sub(r'\.\s+(?=(?:Suy ra|Do đó|Khi đó|Từ đó|Thay |Để |Vậy |Ta có|Mặt khác)\b)', '.<br>', s)
    s = s.replace("$f''_{xx} = \\frac{100}{x^3}$.", "Tính đạo hàm riêng cấp một theo $x$ (coi $y$ là hằng số): $f'_x(x,y) = y - \\frac{50}{x^2}$.<br>Đạo hàm riêng cấp hai theo $x$: $f''_{xx}(x,y) = \\frac{100}{x^3}$.<br>Thay $x = 5, y = 2$ ta được: $f''_{xx}(5;2) = \\frac{100}{5^3} = \\frac{4}{5}$.")
    s = s.replace("$1 \\cdot \\displaystyle \\int_0^3 y\\,dy \\cdot 1 = \\frac{9}{2}$.", "Áp dụng định lý Fubini trên miền hộp chữ nhật $V = [1,2] \\times [0,3] \\times [0,1]$:<br>$I = \\displaystyle\\int_1^2 dx \\cdot \\displaystyle\\int_0^3 y\\,dy \\cdot \\displaystyle\\int_0^1 dz = 1 \\cdot \\left.\\frac{y^2}{2}\\right|_0^3 \\cdot 1 = \\frac{9}{2}$.")
    s = s.replace('độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc', 'bán kính hội tụ $R = \\displaystyle\\lim_{n\\to\\infty}\\left|\\frac{a_n}{a_{n+1}}\\right|$; với |kx + b| < R thì độ dài miền hội tụ là $L = \\frac{2R}{|k|}$')
    s = s.replace('với đường cong kín thì dùng công thức Green', 'với đường cong kín $C$ hướng dương bao quanh miền $D$: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\displaystyle\\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right)dA$')
    return s
