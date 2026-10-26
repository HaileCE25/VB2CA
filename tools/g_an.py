# Các vị trí thuộc Giải tích trong ma trận đề CA1.
import math
from sympy import pi, E, exp, log, sin, cos, tan, sqrt, cbrt, atan, oo, integrate, diff, limit, Symbol
from g_core import *

phi, rr = symbols('varphi r', positive=True)
xp = Symbol('x', positive=True)
G = 9.8


def ex_(c):
    """e^{cx} dạng LaTeX"""
    return 'e^{%sx}' % ('' if c == 1 else '-' if c == -1 else tx(c))


def tr(fn, c):
    return r'\%s %sx' % (fn, '' if c == 1 else tx(c))


def term(c, body, first=False):
    """Số hạng có dấu: ' + 2y', ' - y', ..."""
    c = sp.nsimplify(c)
    if c == 0:
        return ''
    mag = '' if abs(c) == 1 and body else tx(abs(c))
    return ('-' if c < 0 else '') + mag + body if first else (' - ' if c < 0 else ' + ') + mag + body


def form(*terms):
    s, first = '', True
    for c, body in terms:
        piece = term(c, body, first)
        if piece:
            s, first = s + piece, False
    return s or '0'


def dnum(v, nd):
    return '$' + vn(v, nd).replace(',', '{,}') + '$'


# ---------- Câu 8: giới hạn ----------
def s8(rng, k):
    v, a, b = k % 8, rng.choice([2, 3, 4]), rng.choice([2, 3])
    if v == 0:
        e, pt, s = (tan(a * x) - sin(a * x)) / x ** 3, 0, T(r'\lim\limits_{x\to 0}\dfrac{\tan <a>x - \sin <a>x}{x^3}', a=a)
        cands, ex = [R(a ** 3, 6), R(a, 2), a ** 3], steps(T(r'Đặt $u = <a>x$: $\tan u - \sin u = \tan u\,(1 - \cos u) \sim u\cdot\dfrac{u^2}{2} = \dfrac{u^3}{2}$', a=a), T(r'$\lim = \lim\limits_{x\to0}\dfrac{(<a>x)^3}{2x^3} = \dfrac{<a3>}{2} = <v>$', a=a, a3=a ** 3, v=R(a ** 3, 2)))
    elif v == 1:
        e, pt, s = (exp(a * x) - 1 - a * x) / (1 - cos(b * x)), 0, T(r'\lim\limits_{x\to 0}\dfrac{e^{<a>x} - 1 - <a>x}{1 - \cos <b>x}', a=a, b=b)
        cands, ex = [R(a, b), R(a * a, 2 * b * b), R(a * a, b)], steps(T(r'$e^{u} - 1 - u \sim \dfrac{u^2}{2} \Rightarrow$ tử số $\sim \dfrac{(<a>x)^2}{2}$', a=a), T(r'$1 - \cos v \sim \dfrac{v^2}{2} \Rightarrow$ mẫu số $\sim \dfrac{(<b>x)^2}{2}$', b=b), T(r'$\lim = \dfrac{<a2>}{<b2>} = <v>$', a2=a * a, b2=b * b, v=R(a * a, b * b)))
    elif v == 2:
        e, pt, s = cos(x) ** (a / x ** 2), 0, T(r'\lim\limits_{x\to 0}(\cos x)^{\frac{<a>}{x^2}}', a=a)
        cands, ex = [1, exp(-a), exp(R(a, 2))], steps(T(r'$(\cos x)^{\frac{<a>}{x^2}} = e^{\frac{<a>\ln\cos x}{x^2}}$', a=a), r'$\ln\cos x = \ln\left(1 - \dfrac{x^2}{2} + o(x^2)\right) \sim -\dfrac{x^2}{2}$', T(r'$\lim\limits_{x\to0}\dfrac{<a>\ln\cos x}{x^2} = -\dfrac{<a>}{2} \Rightarrow \lim = e^{-\frac{<a>}{2}}$', a=a))
    elif v == 3:
        e, pt, s = x * (sqrt(x ** 2 + 2 * a * x) - x - a), oo, T(r'\lim\limits_{x\to +\infty} x\left(\sqrt{x^2 + <c>x} - x - <a>\right)', c=2 * a, a=a)
        cands, ex = [R(a * a, 2), 0, -a], steps(T(r'Nhân liên hợp: $\sqrt{x^2 + <c>x} - (x + <a>) = \dfrac{(x^2 + <c>x) - (x + <a>)^2}{\sqrt{x^2 + <c>x} + x + <a>} = \dfrac{-<a2>}{\sqrt{x^2 + <c>x} + x + <a>}$', c=2 * a, a=a, a2=a * a), T(r'$\lim = \lim\limits_{x\to+\infty}\dfrac{-<a2>x}{\sqrt{x^2 + <c>x} + x + <a>} = \dfrac{-<a2>}{1 + 1} = <v>$', a2=a * a, c=2 * a, a=a, v=-R(a * a, 2)))
    elif v == 4:
        e, pt, s = (log(1 + a * x) - a * x) / x ** 2, 0, T(r'\lim\limits_{x\to 0}\dfrac{\ln(1 + <a>x) - <a>x}{x^2}', a=a)
        cands, ex = [R(a * a, 2), -a, -R(a, 2)], steps(T(r'$\ln(1 + u) = u - \dfrac{u^2}{2} + o(u^2)$, $u = <a>x$', a=a), T(r'$\ln(1 + <a>x) - <a>x = -\dfrac{<a2>x^2}{2} + o(x^2)$', a=a, a2=a * a), T(r'$\lim = -\dfrac{<a2>}{2} = <v>$', a2=a * a, v=-R(a * a, 2)))
    elif v == 5:
        a, b = rng.choice([(4, 3), (2, 6), (6, 3), (4, 9), (8, 3)])
        e, pt, s = (sqrt(1 + a * x) - cbrt(1 + b * x)) / x, 0, T(r'\lim\limits_{x\to 0}\dfrac{\sqrt{1 + <a>x} - \sqrt[3]{1 + <b>x}}{x}', a=a, b=b)
        cands, ex = [R(a, 2) + R(b, 3), a - b, R(a, 2) - b], steps(T(r'$\sqrt{1 + <a>x} = 1 + \dfrac{<a>}{2}x + o(x)$', a=a), T(r'$\sqrt[3]{1 + <b>x} = 1 + \dfrac{<b>}{3}x + o(x)$', b=b), T(r'$\lim = \dfrac{<a>}{2} - \dfrac{<b>}{3} = <v>$', a=a, b=b, v=R(a, 2) - R(b, 3)))
    elif v == 6:
        e, pt, s = (exp(a * x) - exp(-a * x) - 2 * a * x) / (x - sin(x)), 0, T(r'\lim\limits_{x\to 0}\dfrac{e^{<a>x} - e^{-<a>x} - <c>x}{x - \sin x}', a=a, c=2 * a)
        cands, ex = [a ** 3, 2 * a, R(a ** 3, 3)], steps(T(r'$e^{u} - e^{-u} - 2u = 2\left(u + \dfrac{u^3}{6}\right) - 2u + o(u^3) = \dfrac{u^3}{3} + o(u^3)$, $u = <a>x$', a=a), r'$x - \sin x = \dfrac{x^3}{6} + o(x^3)$', T(r'$\lim = \dfrac{<a3>/3}{1/6} = <v>$', a3=a ** 3, v=2 * a ** 3))
    else:
        e, pt, s = (1 + a * x) ** (1 / sin(b * x)), 0, T(r'\lim\limits_{x\to 0}(1 + <a>x)^{\frac{1}{\sin <b>x}}', a=a, b=b)
        cands, ex = [exp(a), exp(R(b, a)), exp(a * b)], steps(T(r'$(1 + <a>x)^{\frac{1}{\sin <b>x}} = e^{\frac{\ln(1 + <a>x)}{\sin <b>x}}$', a=a, b=b), T(r'$\ln(1 + <a>x) \sim <a>x,\ \sin <b>x \sim <b>x \Rightarrow \dfrac{\ln(1 + <a>x)}{\sin <b>x} \to \dfrac{<a>}{<b>}$', a=a, b=b), T(r'$\lim = e^{<v>}$', v=R(a, b)))
    ok = limit(e, x, pt)
    return NQ('Giới hạn $' + s + r'$ bằng (có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital)', ok, cands + [-ok, 0, 1], ex)


# ---------- Câu 9: tính liên tục chứa tham số ----------
def s9(rng, k):
    v = k % 3
    if v == 0:
        c = rng.choice([2, 4, 6, 8])
        q = T(r'Cho hàm số $f(x) = \begin{cases}\dfrac{1 - \cos ax}{x^2} & \text{khi } x < 0\\[2mm] b & \text{khi } x = 0\\[1mm] \dfrac{e^{<c>x} - 1}{x} & \text{khi } x > 0\end{cases}$ liên tục trên $\mathbb{R}$. Giá trị của $a^2 + b$ bằng', c=c)
        return NQ(q, 3 * c, [2 * c, c + sp.sqrt(2 * c) if sp.sqrt(2 * c).is_integer else c + 1, c * c], steps(T(r'$\lim\limits_{x\to0^+}\dfrac{e^{<c>x} - 1}{x} = <c>$', c=c), r'$\lim\limits_{x\to0^-}\dfrac{1 - \cos ax}{x^2} = \dfrac{a^2}{2}$', T(r'Liên tục tại 0: $\dfrac{a^2}{2} = b = <c> \Rightarrow a^2 = <d>,\ b = <c>$', c=c, d=2 * c), T(r'$a^2 + b = <ok>$', ok=3 * c)))
    if v == 1:
        r, L = rng.choice([1, 2, 3, -1, -2]), rng.choice([1, 3, 5, -2, 7])
        a = L - 2 * r
        b = -r * r - a * r
        ask_sum = rng.random() < .5
        q = T(r'Biết hàm số $f(x) = \begin{cases}\dfrac{x^2 + ax + b}{<d>} & \text{khi } x \ne <r>\\[2mm] <L> & \text{khi } x = <r>\end{cases}$ liên tục trên $\mathbb{R}$. Giá trị của $<e>$ bằng',
              d=x - r, r=r, L=L, e='a + b' if ask_sum else 'a - b')
        ex = steps(T(r'Giới hạn tại $x = <r>$ hữu hạn nên tử số bằng 0 tại đó: $<r2> + (<r>)a + b = 0$', r=r, r2=r * r),
                   T(r'Khi đó $x^2 + ax + b = (<d>)(x + a + (<r>))$ nên $\lim\limits_{x\to<r>} f(x) = 2\cdot(<r>) + a$', d=x - r, r=r),
                   T(r'$2\cdot(<r>) + a = <L> \Rightarrow a = <a>,\ b = <b>$', r=r, L=L, a=a, b=b), T(r'$<e> = <ok>$', e='a + b' if ask_sum else 'a - b', ok=a + b if ask_sum else a - b))
        return NQ(q, a + b if ask_sum else a - b, [a - b if ask_sum else a + b, a, b, L], ex)
    b = rng.choice([1, 2, 4])
    a = rng.choice([3, 6, 9, 12])
    L = R(a, 3) - R(b, 2)
    q = T(r'Biết hàm số $f(x) = \begin{cases}\dfrac{\sqrt[3]{1 + ax} - \sqrt{1 + <b>x}}{x} & \text{khi } x \ne 0\\[2mm] <L> & \text{khi } x = 0\end{cases}$ liên tục tại $x = 0$. Giá trị của $a$ bằng', b='' if b == 1 else b, L=L)
    return NQ(q, a, [3 * L, a + 3, R(a, 3), 2 * a], steps(r'$\sqrt[3]{1 + ax} = 1 + \dfrac{a}{3}x + o(x)$', T(r'$\sqrt{1 + <B>x} = 1 + \dfrac{<b>}{2}x + o(x)$', B='' if b == 1 else b, b=b), T(r'$\lim\limits_{x\to0} f(x) = \dfrac{a}{3} - \dfrac{<b>}{2} = <L> \Rightarrow a = <a>$', b=b, L=L, a=a)))


# ---------- Câu 10: đạo hàm hàm một biến ----------
def s10(rng, k):
    v = k % 4
    if v == 0:
        a, nn = rng.choice([2, 3, -2]), rng.choice([6, 8, 10])
        ok = nn * (nn - 1) * a ** (nn - 2)
        names = {6: 'sáu', 8: 'tám', 10: 'mười'}
        q = T(r'Cho hàm số $f(x) = x^2e^{<a>x}$. Dùng công thức Leibniz $(uv)^{(n)} = \sum_{k=0}^{n} C_n^k u^{(k)}v^{(n-k)}$, giá trị của đạo hàm cấp <w> $f^{(<n>)}(0)$ bằng', a=a, w=names[nn], n=nn)
        ex = steps(T(r"$u = x^2$: $u(0) = 0,\ u'(0) = 0,\ u''(0) = 2,\ u^{(k)} = 0\ (k \ge 3)$; $v = e^{<a>x}$: $v^{(m)}(0) = (<a>)^m$", a=a),
                   T(r"$f^{(<n>)}(0) = C_{<n>}^2\cdot u''(0)\cdot v^{(<m>)}(0) = <c>\cdot2\cdot(<a>)^{<m>} = <ok>$", n=nn, m=nn - 2, c=nn * (nn - 1) // 2, a=a, ok=ok))
        return NQ(q, ok, [ok // 2, 2 * ok, a ** nn, nn * a ** (nn - 1)], ex)
    if v == 1:
        c, p, qq = rng.choice([1, -1, 3]), rint(rng, 1, 3), rint(rng, 1, 3)
        K = p * p + c * p * qq + qq * qq
        den = c * p + 2 * qq
        if den == 0:
            raise Retry
        ok = R(-(2 * p + c * qq), den)
        q = T(r'Cho hàm ẩn $y = y(x)$ xác định bởi phương trình $<e> = <K>$. Hệ số góc của tiếp tuyến với đường cong tại điểm $(<p>;<q>)$, tức giá trị $y\'(<p>)$, bằng', e=x ** 2 + c * x * y + y ** 2, K=K, p=p, q=qq)
        ex = steps(T(r"Đạo hàm hai vế theo $x$: $2x + <c>(y + xy') + 2yy' = 0$", c='(%d)' % c if c < 0 else c), T(r"$y' = -\dfrac{2x + <c>y}{<c>x + 2y}$", c='(%d)' % c if c < 0 else c),
                   T(r"Tại $(<p>;<q>)$: $y' = -\dfrac{<n>}{<d>} = <ok>$", p=p, q=qq, n=2 * p + c * qq, d=den, ok=ok))
        return NQ(q, ok, [-ok, R(2 * p + c * qq, 2 * qq), 1 / ok if ok != 0 else 1], ex)
    if v == 2:
        a = rng.choice([1, 2, 3])
        f = xp ** (a * xp)
        ok = sp.simplify(diff(f, xp).subs(xp, E))
        q = T(r'Cho hàm số $f(x) = x^{<a>x}$ $(x > 0)$. Bằng cách lấy lôgarit hai vế rồi đạo hàm, giá trị của $f\'(e)$ bằng', a='' if a == 1 else a)
        ex = steps(T(r"$\ln f = <a>x\ln x \Rightarrow \dfrac{f'}{f} = <a>(\ln x + 1)$", a='' if a == 1 else a), T(r"$f'(x) = <a>x^{<a>x}(\ln x + 1)$", a='' if a == 1 else a),
                   T(r"$f'(e) = <a>e^{<a>e}\cdot2 = <ok>$", a='' if a == 1 else a, ok=ok))
        return NQ(q, ok, [ok / 2, exp(a * E), a * exp(a * E) * (E + 1)], ex)
    p, qq, t0 = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, 6]), rng.choice([1, 2, 3])
    ok = R(3 * t0 * t0 - qq, 2 * t0 + p)
    q = T(r'Một chất điểm chuyển động trong mặt phẳng $Oxy$ theo quỹ đạo có phương trình tham số $x = t^2 + <p>t,\ y = t^3 - <q>t$ ($t$ là thời gian). Hệ số góc $\dfrac{dy}{dx}$ của tiếp tuyến với quỹ đạo tại thời điểm $t = <t>$ bằng', p='' if p == 1 else p, q='' if qq == 1 else qq, t=t0)
    ex = steps(T(r"$x'(t) = 2t + <p>,\quad y'(t) = 3t^2 - <q>$", p=p, q=qq), T(r"$\dfrac{dy}{dx} = \dfrac{y'(t)}{x'(t)} = \dfrac{3t^2 - <q>}{2t + <p>}$", p=p, q=qq),
               T(r'Tại $t = <t>$: $\dfrac{<n>}{<d>} = <ok>$', t=t0, n=3 * t0 * t0 - qq, d=2 * t0 + p, ok=ok))
    return NQ(q, ok, [1 / ok if ok != 0 else 2, 3 * t0 * t0 - qq, R(3 * t0 * t0, 2 * t0)], ex)


# ---------- Câu 11: đạo hàm riêng ----------
def s11(rng, k):
    v = k % 4
    if v == 0:
        p, qq = rng.choice([(1, 1), (1, 2), (2, 1), (1, 3), (3, 1), (2, 2)])
        f = atan(y / x)
        ok = diff(f, x, 2).subs({x: p, y: qq})
        q = T(r'Cho hàm số $f(x,y) = \arctan\dfrac{y}{x}$. Giá trị của $f\'\'_{xx}(<p>;<q>)$ bằng', p=p, q=qq)
        return NQ(q, ok, [-ok, diff(f, x).subs({x: p, y: qq}), diff(f, x, y).subs({x: p, y: qq}), ok / 2], steps(r"$f'_x = \dfrac{1}{1 + \frac{y^2}{x^2}}\cdot\left(-\dfrac{y}{x^2}\right) = -\dfrac{y}{x^2 + y^2}$", r"$f''_{xx} = \dfrac{2xy}{(x^2 + y^2)^2}$", T(r"$f''_{xx}(<p>;<q>) = \dfrac{<n>}{<d>} = <ok>$", p=p, q=qq, n=2 * p * qq, d=(p * p + qq * qq) ** 2, ok=ok)))
    if v == 1:
        a, b, x0, z0 = rng.choice([1, 2, 3]), rng.choice([1, 2]), rng.choice([1, 2]), rng.choice([1, 2])
        num = z0 ** 3 + a * x0 * z0
        if num % b:
            raise Retry
        y0 = num // b
        ok = R(-a * z0, 3 * z0 * z0 + a * x0)
        q = T(r'Cho hàm ẩn $z = z(x,y)$ xác định bởi phương trình $<e> = 0$. Biết tại $(x;y) = (<x0>;<y0>)$ thì $z = <z0>$, giá trị của $z\'_x(<x0>;<y0>)$ bằng', e=z ** 3 + a * x * z - b * y, x0=x0, y0=y0, z0=z0)
        ex = steps(T(r"$F(x,y,z) = <e>$: $F'_x = <fx>,\quad F'_z = <fz>$", e=z ** 3 + a * x * z - b * y, fx=a * z, fz=3 * z ** 2 + a * x), T(r"$z'_x = -\dfrac{F'_x}{F'_z} = -\dfrac{<fx>}{<fz>}$", fx=a * z, fz=3 * z ** 2 + a * x),
                   T(r"Tại $x = <x0>,\ z = <z0>$: $z'_x = -\dfrac{<n>}{<d>} = <ok>$", x0=x0, z0=z0, n=a * z0, d=3 * z0 * z0 + a * x0, ok=ok))
        return NQ(q, ok, [-ok, R(b, 3 * z0 * z0 + a * x0), R(-a * z0, 3 * z0 * z0)], ex)
    if v == 2:
        x0, y0 = rng.choice([1, 2]), rng.choice([1, 2, 3])
        f = x * exp(y * z) + y * log(x * z)
        ok = diff(f, z).subs({x: x0, y: y0, z: 1})
        q = T(r'Cho hàm số $f(x,y,z) = xe^{yz} + y\ln(xz)$. Giá trị của $f\'_z(<x0>;<y0>;1)$ bằng', x0=x0, y0=y0)
        return NQ(q, ok, [x0 * y0 * exp(y0), diff(f, y).subs({x: x0, y: y0, z: 1}), x0 * exp(y0) + y0, ok + 1], steps(r"$f'_z = xye^{yz} + \dfrac{y}{z}$", T(r"$f'_z(<x0>;<y0>;1) = <x0>\cdot<y0>\cdot e^{<y0>} + <y0> = <ok>$", x0=x0, y0=y0, ok=ok)))
    p, qq = rng.choice([(2, 1), (1, 2), (3, 1), (2, 2), (1, 1)])
    f = (x ** 2 - y ** 2) * exp(x * y)
    which = rng.choice([x, y])
    ok = sp.simplify(diff(f, which).subs({x: p, y: qq}))
    other = sp.simplify(diff(f, y if which == x else x).subs({x: p, y: qq}))
    q = T(r'Cho hàm số $z = (x^2 - y^2)e^{xy}$. Giá trị của $z\'_<w>(<p>;<q>)$ bằng', w=tx(which), p=p, q=qq)
    return NQ(q, ok, [other, 2 * p * exp(p * qq), -ok, ok + exp(p * qq)], steps(r"$z'_x = \left[2x + (x^2 - y^2)y\right]e^{xy},\quad z'_y = \left[-2y + (x^2 - y^2)x\right]e^{xy}$", T(r"Tại $(<p>;<q>)$: $z'_<w> = <ok>$", p=p, q=qq, w=tx(which), ok=ok)))


# ---------- Câu 12: vi phân ----------
def s12(rng, k):
    v = k % 4
    if v == 0:
        a, b, c = rng.choice([(3, 4, 5), (6, 8, 10), (4, 3, 5), (8, 6, 10)])
        dx, dy = rng.choice([1, 2, 3, -1, -2]) * R(1, 100), rng.choice([2, 3, 4, -3, -4]) * R(1, 100)
        ok = c + (a * dx + b * dy) / c
        f = lambda v_: vn(v_, 4).rstrip('0') if '%.4f' % float(v_) != '%.3f0' % float(v_) else vn(v_, 3)
        q = T(r'Dùng vi phân toàn phần của hàm $f(x,y) = \sqrt{x^2 + y^2}$ tại điểm $(<a>;<b>)$, tức là $f(x_0 + \Delta x;\ y_0 + \Delta y) \approx f(x_0;y_0) + f\'_x\Delta x + f\'_y\Delta y$, giá trị gần đúng của $\sqrt{(<p>)^2 + (<q>)^2}$ là',
              a=a, b=b, p=vn(a + dx, 2).replace(',', '{,}'), q=vn(b + dy, 2).replace(',', '{,}'))
        dxs, dys = vn(dx, 2).replace(',', '{,}'), vn(dy, 2).replace(',', '{,}')
        ex = steps(r"$f'_x = \dfrac{x}{\sqrt{x^2+y^2}},\quad f'_y = \dfrac{y}{\sqrt{x^2+y^2}}$",
                   T(r"Tại $(<a>;<b>)$: $f = <c>,\ f'_x = \dfrac{<a>}{<c>},\ f'_y = \dfrac{<b>}{<c>}$; $\Delta x = <dx>,\ \Delta y = <dy>$", a=a, b=b, c=c, dx=dxs, dy=dys),
                   T(r'$f \approx <c> + \dfrac{<a>\cdot(<dx>) + <b>\cdot(<dy>)}{<c>} = <ok>$', a=a, b=b, c=c, dx=dxs, dy=dys, ok=vn(ok, 4).rstrip('0').replace(',', '{,}')))
        return NQ(q, ok, [c - (a * dx + b * dy) / c, c + dx + dy, c + (a * dx + b * dy), c + (b * dx + a * dy) / c], ex, fmt=lambda v_: vn(v_, 4).rstrip('0').rstrip(','))
    if v == 1:
        p, qq = rng.choice([(1, 2), (2, 1), (1, 3), (3, 1), (2, 3), (1, 1)])
        s_ = p * p + qq * qq
        mk = lambda c1, c2: '$' + form((c1, 'dx'), (c2, 'dy')) + '$.'
        q = T(r'Cho hàm số $f(x,y) = \ln(x^2 + y^2)$. Vi phân toàn phần của hàm số tại điểm $(<p>;<q>)$ là', p=p, q=qq)
        return Q(q, mk(R(2 * p, s_), R(2 * qq, s_)), [mk(R(p, s_), R(qq, s_)), mk(2 * p, 2 * qq), mk(R(2 * qq, s_), R(2 * p, s_)) if p != qq else mk(R(1, s_), R(1, s_))], steps(r"$f'_x = \dfrac{2x}{x^2 + y^2},\quad f'_y = \dfrac{2y}{x^2 + y^2}$", T(r"Tại $(<p>;<q>)$: $f'_x = <a>,\ f'_y = <b>$", p=p, q=qq, a=R(2 * p, s_), b=R(2 * qq, s_)), '$df = ' + form((R(2 * p, s_), 'dx'), (R(2 * qq, s_), 'dy')) + '$'))
    if v == 2:
        p, qq = rng.choice([(1, 1), (1, 2), (2, 1), (2, 3), (3, 1)])
        mk = lambda c1, c2, c3: '$' + form((c1, 'dx^2'), (c2, 'dxdy'), (c3, 'dy^2')) + '$.'
        q = T(r'Cho hàm số $f(x,y) = x^2y + xy^2$. Vi phân cấp hai $d^2f = f\'\'_{xx}dx^2 + 2f\'\'_{xy}dxdy + f\'\'_{yy}dy^2$ của hàm số tại điểm $(<p>;<q>)$ là', p=p, q=qq)
        A_, B_, C_ = 2 * qq, 2 * p + 2 * qq, 2 * p
        return Q(q, mk(A_, 2 * B_, C_), [mk(A_, B_, C_), mk(C_, 2 * B_, A_) if p != qq else mk(A_, 4 * B_, C_), mk(A_, 2 * B_, 0)], steps(r"$f''_{xx} = 2y,\quad f''_{xy} = 2x + 2y,\quad f''_{yy} = 2x$", T(r"Tại $(<p>;<q>)$: $f''_{xx} = <A>,\ f''_{xy} = <B>,\ f''_{yy} = <C>$", p=p, q=qq, A=A_, B=B_, C=C_), '$d^2f = ' + form((A_, 'dx^2'), (2 * B_, 'dxdy'), (C_, 'dy^2')) + '$'))
    a = rng.choice([2, 3, 4, 5])
    mk = lambda c1, c2: '$' + form((c1, 'dx'), (1, c2 + r'\,dy')) + '$.'
    q = T(r'Cho hàm số $f(x,y) = x^y$ $(x > 0)$. Vi phân toàn phần của hàm số tại điểm $(<a>;1)$ là', a=a)
    return Q(q, mk(1, r'%d\ln %d' % (a, a)), [mk(a, r'\ln %d' % a), mk(1, r'\ln %d' % a), mk(1, str(a))], steps(r"$f'_x = yx^{y-1},\quad f'_y = x^y\ln x$", T(r"Tại $(<a>;1)$: $f'_x = 1,\ f'_y = <a>\ln <a>$", a=a), T(r'$df = dx + <a>\ln <a>\,dy$', a=a)))


# ---------- Câu 13: điểm dừng, cực trị ----------
F13 = [x ** 3 + y ** 3 - 3 * x - 12 * y, x ** 4 + y ** 4 - 4 * x * y, x * y * (1 - x - y), x ** 3 + 3 * x * y ** 2 - 15 * x - 12 * y,
       x ** 3 + y ** 3 - 3 * x * y, 2 * x ** 3 + x * y ** 2 + 5 * x ** 2 + y ** 2, x ** 3 - 12 * x * y + 8 * y ** 3,
       3 * x - x ** 3 - 2 * y ** 2 + y ** 4, x ** 3 + y ** 2 - 6 * x * y - 39 * x + 18 * y + 20, (x ** 2 + y ** 2) * exp(-x),
       x ** 3 + y ** 3 - 12 * x - 3 * y + 5, x * y * (2 - x - y) * 1, x ** 4 + y ** 4 - 2 * (x - y) ** 2 + 1, x ** 2 * y + y ** 3 - 3 * y, y ** 3 + 3 * x ** 2 * y - 6 * x ** 2 - 6 * y ** 2 + 2]


def crit(f):
    sols = sp.solve([diff(f, x), diff(f, y)], [x, y], dict=True)
    pts = [(s[x], s[y]) for s in sols if s[x].is_real and s[y].is_real]
    H = diff(f, x, 2) * diff(f, y, 2) - diff(f, x, y) ** 2
    cls = [sp.simplify(H.subs({x: a, y: b})) for a, b in pts]
    return pts, cls


def s13(rng, k):
    f = F13[(k * 3 + rng.randint(0, 2)) % len(F13)]
    pts, cls = crit(f)
    if any(c == 0 for c in cls) or not pts:
        raise Retry
    n_all, n_ext = len(pts), sum(1 for c in cls if c > 0)
    hint = r" (Điểm dừng là điểm mà $f'_x = f'_y = 0$. Tại điểm dừng, đặt $A = f''_{xx},\ B = f''_{xy},\ C = f''_{yy}$: nếu $AC - B^2 > 0$ thì đó là điểm cực trị, nếu $AC - B^2 < 0$ thì không phải.)"
    poly = f.is_polynomial()
    ex = steps(T(r"$f'_x = <fx>,\quad f'_y = <fy>$", fx=sp.expand(diff(f, x)) if poly else sp.factor(diff(f, x)), fy=sp.expand(diff(f, y)) if poly else sp.factor(diff(f, y))),
               "Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: " + ', '.join('$%s$' % vec(p) for p in pts),
               'Giá trị $AC - B^2$ tại các điểm đó lần lượt: ' + ', '.join('$%s$' % tx(c) for c in cls),
               T('Số điểm dừng: $<n>$; số điểm cực trị (có $AC - B^2 > 0$): $<e>$', n=n_all, e=n_ext))
    v = k % 3
    head = T(r'Cho hàm số $f(x,y) = <f>$. ', f=sp.expand(f) if f.is_polynomial() else f)
    if v == 0:
        return NQ(head + 'Hàm số có bao nhiêu điểm dừng?', n_all, [n_ext, n_all + 1, n_all - 1, n_all + 2], ex)
    if v == 1:
        return NQ(head + 'Số điểm cực trị của hàm số bằng' + hint, n_ext, [n_all, n_all - n_ext, n_ext + 1, 0], ex)
    return NQ(head + 'Hàm số có bao nhiêu điểm dừng không phải là điểm cực trị?' + hint, n_all - n_ext, [n_all, n_ext, n_all - n_ext + 1, 0], ex)


# ---------- Câu 14, 15: chuỗi số ----------
S = lambda body, n0=1: r'\displaystyle\sum_{n=%d}^{+\infty}%s' % (n0, body)
P14 = [(S(r'\dfrac{n+1}{n^3+2}'), 1), (S(r'\dfrac{2^n}{n!}'), 1), (S(r'\dfrac{1}{n\ln n}', 2), 0), (S(r'\sin\dfrac1n'), 0),
       (S(r'\left(\dfrac{n}{2n+1}\right)^n'), 1), (S(r'\dfrac{1}{\sqrt{n(n+1)}}'), 0), (S(r'\dfrac{n^2}{3^n}'), 1), (S(r'\dfrac{\ln n}{n^2}'), 1),
       (S(r'\dfrac{(n!)^2}{(2n)!}'), 1), (S(r'\left(1 - \cos\dfrac1n\right)'), 1), (S(r'\dfrac{1}{n\sqrt[n]{n}}'), 0), (S(r'\dfrac{n}{n^2+1}'), 0),
       (S(r'\dfrac{1}{\sqrt{n^3+1}}'), 1), (S(r'\dfrac{n!}{n^n}'), 1), (S(r'\dfrac{3^n}{2^n+n}'), 0), (S(r'\dfrac{\arctan n}{n^2}'), 1),
       (S(r'\ln\left(1 + \dfrac1n\right)'), 0), (S(r'\dfrac{1}{n\ln^2 n}', 2), 1), (S(r'\dfrac{\sqrt n}{n+1}'), 0), (S(r'\left(\dfrac{2n+1}{3n+2}\right)^n'), 1),
       (S(r'\dfrac{n+2}{2n^2+1}'), 0), (S(r'\dfrac{5^n}{n\cdot 4^n}'), 0), (S(r'\tan\dfrac{1}{n^2}'), 1), (S(r'\dfrac{2n+1}{n\cdot 3^n}'), 1)]
P15 = [(S(r'\dfrac{(-1)^n}{n}'), 1, 0), (S(r'\dfrac{(-1)^n}{n\sqrt n}'), 1, 1), (S(r'\dfrac{(-1)^n n}{n+1}'), 0, 0), (S(r'\dfrac{(-1)^n}{\ln(n+1)}'), 1, 0),
       (S(r'\dfrac{(-1)^n\ln n}{n}', 2), 1, 0), (S(r'(-1)^n\sin\dfrac1n'), 1, 0), (S(r'\dfrac{(-1)^n}{\sqrt[3]{n}}'), 1, 0), (S(r'\dfrac{(-1)^n}{n^2}'), 1, 1),
       (S(r'\dfrac{(-1)^n n}{2^n}'), 1, 1), (S(r'\dfrac{(-1)^n(n+1)}{3n-1}'), 0, 0), (S(r'\dfrac{(-1)^n}{n^2+1}'), 1, 1), (S(r'\dfrac{(-1)^n}{\sqrt{n+1}}'), 1, 0),
       (S(r'\dfrac{(-1)^n n^2}{n^2+1}'), 0, 0), (S(r'\dfrac{(-1)^n}{n!}'), 1, 1), (S(r'\dfrac{(-1)^n}{2n+1}'), 1, 0), (S(r'(-1)^n\left(1 - \cos\dfrac1n\right)'), 1, 1)]


R14 = [r'u_n \sim \dfrac{1}{n^2}', r'\dfrac{u_{n+1}}{u_n} = \dfrac{2}{n+1} \to 0 < 1', r'\displaystyle\int_2^{+\infty}\dfrac{dx}{x\ln x} = \left[\ln\ln x\right]_2^{+\infty} = +\infty', r'u_n \sim \dfrac1n',
       r'\sqrt[n]{u_n} = \dfrac{n}{2n+1} \to \dfrac12 < 1', r'u_n \sim \dfrac1n', r'\dfrac{u_{n+1}}{u_n} \to \dfrac13 < 1', r'u_n \le \dfrac{1}{n^{3/2}}\ (n \text{ đủ lớn})',
       r'\dfrac{u_{n+1}}{u_n} = \dfrac{(n+1)^2}{(2n+1)(2n+2)} \to \dfrac14 < 1', r'u_n \sim \dfrac{1}{2n^2}', r'\sqrt[n]{n} \to 1 \Rightarrow u_n \sim \dfrac1n', r'u_n \sim \dfrac1n',
       r'u_n \sim \dfrac{1}{n^{3/2}}', r'\dfrac{u_{n+1}}{u_n} = \left(\dfrac{n}{n+1}\right)^n \to \dfrac1e < 1', r'u_n \sim \left(\dfrac32\right)^n \not\to 0', r'u_n \le \dfrac{\pi}{2n^2}',
       r'u_n \sim \dfrac1n', r'\displaystyle\int_2^{+\infty}\dfrac{dx}{x\ln^2x} = \left[-\dfrac{1}{\ln x}\right]_2^{+\infty} = \dfrac{1}{\ln 2}', r'u_n \sim \dfrac{1}{\sqrt n}', r'\sqrt[n]{u_n} \to \dfrac23 < 1',
       r'u_n \sim \dfrac{1}{2n}', r'u_n = \dfrac1n\left(\dfrac54\right)^n \not\to 0', r'u_n \sim \dfrac{1}{n^2}', r'\dfrac{u_{n+1}}{u_n} \to \dfrac13 < 1']
R15 = [r'$\frac1n \downarrow 0$ (Leibniz), $\sum\frac1n$ phân kỳ', r'$\sum\frac{1}{n^{3/2}}$ hội tụ', r'$|u_n| \to 1 \ne 0$', r'$\frac{1}{\ln(n+1)} \downarrow 0$ (Leibniz), $\frac{1}{\ln(n+1)} > \frac1n$',
       r'$\frac{\ln n}{n} \downarrow 0$ khi $n \ge 3$ (Leibniz), $\frac{\ln n}{n} \ge \frac1n$', r'$\sin\frac1n \downarrow 0$ (Leibniz), $\sin\frac1n \sim \frac1n$', r'$\frac{1}{\sqrt[3]{n}} \downarrow 0$ (Leibniz), $\sum\frac{1}{n^{1/3}}$ phân kỳ', r'$\sum\frac{1}{n^2}$ hội tụ',
       r'$\frac{|u_{n+1}|}{|u_n|} \to \frac12 < 1$', r'$|u_n| \to \frac13 \ne 0$', r'$|u_n| \le \frac{1}{n^2}$', r'$\frac{1}{\sqrt{n+1}} \downarrow 0$ (Leibniz), $\sum\frac{1}{\sqrt{n+1}}$ phân kỳ',
       r'$|u_n| \to 1 \ne 0$', r'$\frac{|u_{n+1}|}{|u_n|} = \frac{1}{n+1} \to 0$', r'$\frac{1}{2n+1} \downarrow 0$ (Leibniz), $\frac{1}{2n+1} \sim \frac{1}{2n}$', r'$|u_n| \sim \frac{1}{2n^2}$']


def listing(items):
    return ', '.join('$%s$' % i for i in items[:-1]) + ' và $%s$' % items[-1]


def s14(rng, k):
    pick = rng.sample(P14, 4)
    conv = sum(f for _, f in pick)
    if conv in (0, 4):
        raise Retry
    want_conv = k % 2 == 0
    ok = conv if want_conv else 4 - conv
    q = 'Xét bốn chuỗi số dương ' + listing([s for s, _ in pick]) + '. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi ' + ('hội tụ' if want_conv else 'phân kỳ') + ' trong bốn chuỗi trên?'
    ex = steps(*['Chuỗi thứ %d: $%s$ $\\Rightarrow$ %s' % (i + 1, R14[P14.index(it_)], 'hội tụ' if it_[1] else 'phân kỳ') for i, it_ in enumerate(pick)],
               'Số chuỗi %s: $%d$' % ('hội tụ' if want_conv else 'phân kỳ', ok))
    return NQ(q, ok, [v_ for v_ in (0, 1, 2, 3, 4) if v_ != ok], ex)


def s15(rng, k):
    v = k % 4
    if v == 3:
        p, eps, e_s = rng.choice([(2, R(1, 100), '0{,}01'), (1, R(1, 1000), '0{,}001'), (3, R(1, 1000), '0{,}001'), (2, R(1, 10000), '0{,}0001'), (3, R(1, 125), '0{,}008'), (1, R(1, 100), '0{,}01')])
        ok = math.ceil(float(eps) ** (-1.0 / p) - 1e-9) - 1
        q = T(r'Xét chuỗi đan dấu $S = \displaystyle\sum_{n=1}^{+\infty}\dfrac{(-1)^{n+1}}{<np>}$ và gọi $S_n$ là tổng riêng thứ $n$. Theo đánh giá sai số của chuỗi Leibniz, $|S - S_n| \le a_{n+1}$ với $a_n = \dfrac{1}{<np>}$. Số $n$ nhỏ nhất để đánh giá này bảo đảm $|S - S_n| \le <e>$ là', np='n' if p == 1 else 'n^{%d}' % p, e=e_s)
        ex = T(r'$\dfrac{1}{<d>} \le <e> \Leftrightarrow n + 1 \ge <m>$.', d='n+1' if p == 1 else '(n+1)^{%d}' % p, e=e_s, m=ok + 1)
        return NQ(q, ok, [ok + 1, ok - 1, 10 * ok + 9, ok + 2], ex)
    pick = rng.sample(P15, 4)
    conv, absc = sum(c for _, c, _ in pick), sum(a for _, _, a in pick)
    kind, ok = [('hội tụ', conv), ('hội tụ tuyệt đối', absc), ('bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối)', conv - absc)][v]
    q = 'Xét bốn chuỗi đan dấu ' + listing([s for s, _, _ in pick]) + '. Có bao nhiêu chuỗi ' + kind + ' trong bốn chuỗi trên?'
    ex = steps(*['Chuỗi thứ %d: %s $\\Rightarrow$ %s' % (i + 1, R15[P15.index(it_)], 'hội tụ tuyệt đối' if it_[2] else 'bán hội tụ' if it_[1] else 'phân kỳ') for i, it_ in enumerate(pick)],
               'Số chuỗi %s: $%d$' % (kind.split(' (')[0], ok))
    return NQ(q, ok, [v_ for v_ in (conv, absc, conv - absc, 4 - conv, 0, 1, 2, 3, 4) if v_ != ok], ex)


# ---------- Câu 16: nhận dạng phương trình vi phân ----------
ODE = {
    'lin': [r"y' + x^2y = \sin x", r"xy' - 2y = x^3", r"y' + y\tan x = \cos x"],
    'ber': [r"y' + \dfrac{y}{x} = xy^3", r"y' - y = xy^2", r"xy' + y = y^2\ln x"],
    'hom': [r"y' = \dfrac{x + y}{x - y}", r"y' = \dfrac{y}{x} + \tan\dfrac{y}{x}", r"xy' = y + \sqrt{x^2 + y^2}"],
    'sep': [r"y' = e^{x - y}", r"y' = \dfrac{1 + y^2}{1 + x^2}", r"y' = (1 + x)(1 + y^2)"],
    'exa': [r'(2xy + 1)dx + (x^2 + 3y^2)dy = 0', r'(y\cos x + 2x)dx + (\sin x - 2y)dy = 0', r'(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0'],
    'nex': [r'y\,dx - x\,dy = 0', r'2xy\,dx + (y^2 - x^2)dy = 0', r'(x^2 + y)dx + (y - x)dy = 0', r'(x + y)dx + (y - x)dy = 0'],
}
ODE_Q = {
    'lin': ('phương trình vi phân tuyến tính cấp một', r"Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$."),
    'ber': (r'phương trình Bernoulli (với $\alpha \ne 0,\ \alpha \ne 1$)', r"Dạng $y' + p(x)y = q(x)y^{\alpha}$."),
    'hom': ('phương trình vi phân đẳng cấp (thuần nhất) cấp một', r"Vế phải viết được thành hàm của $\dfrac{y}{x}$, tức dạng $y' = f\left(\dfrac{y}{x}\right)$."),
    'sep': ('phương trình vi phân có biến số phân ly', r"Viết được dưới dạng $g(y)\,dy = h(x)\,dx$."),
    'exa': ('phương trình vi phân toàn phần', r"Điều kiện $\dfrac{\partial P}{\partial y} = \dfrac{\partial Q}{\partial x}$ đối với $P\,dx + Q\,dy = 0$."),
}


TYPE_WHY = {
    'lin': r"là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$)",
    'ber': r"là phương trình Bernoulli (có số hạng $y^{\alpha}$ với $\alpha \ne 0, 1$ ở vế phải)",
    'hom': r"là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\dfrac{y}{x}$)",
    'sep': r'là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế)',
    'exa': r'là phương trình vi phân toàn phần',
}
PART = {   # (dP/dy, dQ/dx) của các phương trình dạng P dx + Q dy = 0
    r'(2xy + 1)dx + (x^2 + 3y^2)dy = 0': ('2x', '2x'), r'(y\cos x + 2x)dx + (\sin x - 2y)dy = 0': (r'\cos x', r'\cos x'),
    r'(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0': ('4xy', '4xy'), r'y\,dx - x\,dy = 0': ('1', '-1'),
    r'2xy\,dx + (y^2 - x^2)dy = 0': ('2x', '-2x'), r'(x^2 + y)dx + (y - x)dy = 0': ('1', '-1'), r'(x + y)dx + (y - x)dy = 0': ('1', '-1'),
}


def s16(rng, k):
    target = ['lin', 'ber', 'hom', 'sep', 'exa'][k % 5]
    ok = rng.choice(ODE[target])
    if target == 'exa':
        wrongs = [(w, 'nex') for w in rng.sample(ODE['nex'], 3)]
    else:
        others = [t_ for t_ in ('lin', 'ber', 'hom', 'sep') if t_ != target] + ['exa']
        wrongs = [(rng.choice(ODE[t_]), t_) for t_ in rng.sample(others, 3)]
    name, ex = ODE_Q[target]
    part = lambda e: r'$\dfrac{\partial P}{\partial y} = %s$, $\dfrac{\partial Q}{\partial x} = %s$' % PART[e]
    lines = ['<b>Đúng:</b> $%s$ — %s' % (ok, ex.rstrip('.') + ((': ' + part(ok)) if target == 'exa' else ''))]
    for w, t_ in wrongs:
        if t_ == 'nex':
            lines.append('<b>Sai:</b> $%s$ — %s, hai đạo hàm riêng khác nhau' % (w, part(w)))
        else:
            lines.append('<b>Sai:</b> $%s$ — %s, không thuộc dạng đang hỏi' % (w, TYPE_WHY[t_]))
    return Q('Phương trình nào sau đây là ' + name + '?', '$%s$.' % ok, ['$%s$.' % w for w, _ in wrongs], steps(*lines))


# ---------- Câu 17: nghiệm riêng phương trình cấp một ----------
def s17(rng, k):
    v = k % 4
    if v == 0:
        p, c, y0 = rng.choice([2, 3]), rng.choice([1, 2, 3]), rng.choice([2, 3, 4, 5])
        ok = 2 ** p * (c + y0)
        q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình $y\' - \dfrac{<p>y}{x} = <c>x^{<p>}$ $(x > 0)$ thỏa mãn $y(1) = <y0>$. Giá trị của $y(2)$ bằng', p=p, c='' if c == 1 else c, y0=y0)
        ex = steps(T(r"Chia hai vế cho $x^{<p>}$: $\left(\dfrac{y}{x^{<p>}}\right)' = <c>$", p=p, c=c), T(r'$\dfrac{y}{x^{<p>}} = <cx> + C \Rightarrow y = x^{<p>}(<cx> + C)$', p=p, cx=c * x),
                   T(r'$y(1) = <c> + C = <y0> \Rightarrow C = <C>$', c=c, y0=y0, C=y0 - c), T(r'$y(2) = <q>\cdot(<t> + <C>) = <ok>$', q=2 ** p, t=2 * c, C=y0 - c, ok=ok))
        return NQ(q, ok, [2 ** p * y0, 2 * c + y0, 2 ** p * (2 * c + y0), ok // 2], ex)
    if v == 1:
        a, y0 = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, 4])
        q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình $xy\' = y + <a>x$ $(x > 0)$ thỏa mãn $y(1) = <y0>$. Giá trị của $y(e)$ bằng', a='' if a == 1 else a, y0=y0)
        ex = steps(T(r"Chia hai vế cho $x^2$: $\dfrac{xy' - y}{x^2} = \dfrac{<a>}{x} \Leftrightarrow \left(\dfrac{y}{x}\right)' = \dfrac{<a>}{x}$", a=a), T(r'$\dfrac{y}{x} = <al> + C \Rightarrow y = x(<al> + C)$', al=a * sp.log(x)),
                   T(r'$y(1) = C = <y0>$', y0=y0), T(r'$y(e) = e(<a> + <y0>) = <ok>$', a=a, y0=y0, ok=(a + y0) * E))
        return NQ(q, (a + y0) * E, [y0 * E, a * E + y0, E + a + y0, a + y0], ex)
    if v == 2:
        a, y0 = rng.choice([1, 2, 3, 4]), rng.choice([1, 2, 3, 5])
        q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình $(x^2 + 1)y\' + 2xy = <c>x^3$ thỏa mãn $y(0) = <y0>$. Giá trị của $y(1)$ bằng', c=4 * a, y0=y0)
        ex = steps(r"Vế trái là $\left[(x^2 + 1)y\right]'$", T(r"$\left[(x^2 + 1)y\right]' = <c>x^3 \Rightarrow (x^2 + 1)y = <ax4> + C$", c=4 * a, ax4=a * x ** 4),
                   T(r'$y(0) = C = <y0>$', y0=y0), T(r'$y(1) = \dfrac{<a> + <y0>}{2} = <ok>$', a=a, y0=y0, ok=R(a + y0, 2)))
        return NQ(q, R(a + y0, 2), [a + y0, R(4 * a + y0, 2), R(a, 2) + y0, R(y0, 2)], ex)
    a, b = rng.choice([1, 2, 3, 5]), rng.choice([1, 2, 3])
    Cn = 1 + a + b
    lhs = lambda cy, cb: tx(cy * x ** 2 * y + a * x + cb * y ** 2)
    q = T(r'Nghiệm riêng của phương trình $(2xy + <a>)dx + (x^2 + <b>y)dy = 0$ thỏa mãn $y(1) = 1$ là', a=a, b=2 * b)
    ex = steps(r'$\dfrac{\partial P}{\partial y} = 2x = \dfrac{\partial Q}{\partial x}$: phương trình vi phân toàn phần', T(r"$u'_x = 2xy + <a> \Rightarrow u = x^2y + <ax> + \varphi(y)$", a=a, ax=a * x),
               T(r"$u'_y = x^2 + \varphi'(y) = x^2 + <b>y \Rightarrow \varphi(y) = <by2>$", b=2 * b, by2=b * y ** 2), T(r'$<u> = C$; thay $x = y = 1$: $C = <C>$', u=lhs(1, b), C=Cn))
    return Q(q, '$%s = %d$.' % (lhs(1, b), Cn), ['$%s = %d$.' % (lhs(1, b), Cn - 1), '$%s = %d$.' % (lhs(1, 2 * b), Cn + b), '$%s = %d$.' % (lhs(2, b), Cn + 1)], ex)


# ---------- Câu 18: phương trình tuyến tính cấp một (bài toán thực tế) ----------
def s18(rng, k):
    v, mm, h = k % 3, rng.choice([1, 2, 3]), rng.choice([2, 3, 4, 5, 6])
    if v == 0:
        L, y0 = rng.choice([40, 48, 64, 80]), 0
        ctx = T(r'Một bệnh nhân được truyền thuốc liên tục qua đường tĩnh mạch. Nồng độ thuốc trong máu $y(t)$ (mg/lít) sau $t$ giờ thỏa mãn phương trình $y\' = k(<L> - y)$ với $k = \dfrac{\ln 2}{<h>}$ và $y(0) = 0$', L=L, h=h)
        ask, unit = T('Nồng độ thuốc trong máu sau <t> giờ bằng', t=mm * h), ' mg/lít'
    elif v == 1:
        L, y0 = rng.choice([200, 220, 180]), rng.choice([20, 40, 60])
        if (y0 - L) % 8:
            raise Retry
        ctx = T(r'Một chi tiết kim loại có nhiệt độ $<y0>^\circ C$ được đưa vào lò có nhiệt độ không đổi $<L>^\circ C$. Nhiệt độ $y(t)$ của chi tiết sau $t$ phút thỏa mãn phương trình $y\' = k(<L> - y)$ với $k = \dfrac{\ln 2}{<h>}$', L=L, y0=y0, h=h)
        ask, unit = T('Nhiệt độ của chi tiết sau <t> phút bằng', t=mm * h), ' °C'
    else:
        L, y0 = rng.choice([8, 16, 24, 4]), 0
        ctx = T(r'Trong một mạch điện RL, cường độ dòng điện $y(t)$ (ampe) sau $t$ mili giây kể từ khi đóng mạch thỏa mãn phương trình $y\' = k(<L> - y)$ với $k = \dfrac{\ln 2}{<h>}$ và $y(0) = 0$', L=L, h=h)
        ask, unit = T('Cường độ dòng điện sau <t> mili giây bằng', t=mm * h), ' A'
    ok = L + R(y0 - L, 2 ** mm)
    ex = steps(T(r"$y' + ky = <L>k$ (tuyến tính cấp một) $\Rightarrow y = <L> + Ce^{-kt}$", L=L), T(r'$y(0) = <y0> \Rightarrow C = <C>$', y0=y0, C=y0 - L),
               T(r'$e^{-kt} = e^{-\frac{\ln 2}{<h>}\cdot<t>} = 2^{-<m>} = \dfrac{1}{<p>}$', h=h, t=mm * h, m=mm, p=2 ** mm), T(r'$y(<t>) = <L> + \dfrac{<C>}{<p>} = <ok>$', t=mm * h, L=L, C=y0 - L, p=2 ** mm, ok=ok))
    f = lambda v_: ('$' + vn(v_, 2).rstrip('0').rstrip(',').replace(',', '{,}') + '$')
    return NQ(ctx + '. ' + ask, ok, [L + R(y0 - L, 2 ** (mm + 1)), L - R(L - y0, 2 ** mm) / 2 if mm > 1 else R(L + y0, 4), R(L, 2 ** mm), L, R(L + y0, 2) + 1], ex, fmt=f, unit=unit)


# ---------- Câu 19: phương trình tuyến tính cấp hai ----------
def ode2(c1, c0, rhs):
    return "y''" + term(c1, "y'") + term(c0, 'y') + ' = ' + rhs


def s19(rng, k):
    v = k % 4
    if v == 0:
        p, qq = rng.choice([(1, 2), (2, 1), (1, 3), (2, 3), (3, 2), (3, 1), (-1, 2), (-2, 1)])
        mk = lambda e, c: '$y = %s(C_1%s + C_2%s)$.' % (ex_(e), tr('cos', c), tr('sin', c))
        q = 'Nghiệm tổng quát của phương trình $' + ode2(2 * p, p * p + qq * qq, '0') + '$ là'
        ex = steps(T(r'Phương trình đặc trưng: $<e> = 0$', e=symbols('k') ** 2 + 2 * p * symbols('k') + p * p + qq * qq), T(r"$\Delta' = <p2> - <c> = -<q2> \Rightarrow k = <a> \pm <b>i$", p2=p * p, c=p * p + qq * qq, q2=qq * qq, a=-p, b='' if qq == 1 else qq),
                   '$y = %s(C_1%s + C_2%s)$' % (ex_(-p), tr('cos', qq), tr('sin', qq)))
        return Q(q, mk(-p, qq), [mk(p, qq), mk(-qq, abs(p)), '$y = C_1%s + C_2%s$.' % (ex_(-p), ex_(-(p * p + qq * qq)))], ex)
    if v == 1:
        r1, r2 = rng.choice([(1, 2), (2, 1), (1, 3), (3, 1), (2, 3), (-1, 2), (1, -2), (2, -1)])
        A_ = rng.choice([1, 2, -1, 3])
        c = A_ * (r1 - r2)
        base = 'y = C_1%s + C_2%s' % (ex_(r1), ex_(r2))
        q = 'Nghiệm tổng quát của phương trình $' + ode2(-(r1 + r2), r1 * r2, term(c, ex_(r1), True)) + '$ là'
        ex = steps(T(r'Phương trình đặc trưng: $<e> = 0 \Rightarrow k = <r1>,\ k = <r2>$', e=sp.expand((symbols('k') - r1) * (symbols('k') - r2)), r1=r1, r2=r2), '$\\overline{y} = C_1%s + C_2%s$' % (ex_(r1), ex_(r2)),
                   T(r'Vế phải chứa $<e>$ và $k = <r1>$ là nghiệm đơn: $y^* = Ax<e>$', e=ex_(r1), r1=r1),
                   T(r'Thay vào: $A\cdot(<m>)<e> = <rhs> \Rightarrow A = <A>$', m=r1 - r2, e=ex_(r1), rhs=term(c, ex_(r1), True), A=A_), '$%s%s$' % (base, term(A_, 'x' + ex_(r1))))
        return Q(q, '$%s%s$.' % (base, term(A_, 'x' + ex_(r1))), ['$%s%s$.' % (base, term(-A_, 'x' + ex_(r1))), '$%s%s$.' % (base, term(c, ex_(r1))), '$%s%s$.' % (base, term(A_, 'x' + ex_(r2)))], ex)
    if v == 2:
        w, A_ = rng.choice([1, 2, 3]), rng.choice([1, 2, 3])
        c = 2 * w * A_
        base = 'y = C_1%s + C_2%s' % (tr('cos', w), tr('sin', w))
        q = 'Nghiệm tổng quát của phương trình $' + ode2(0, w * w, term(c, tr('cos', w), True)) + '$ là'
        ex = steps(T(r'Phương trình đặc trưng: $k^2 + <w2> = 0 \Rightarrow k = \pm <w>i$', w2=w * w, w='' if w == 1 else w), '$\\overline{y} = C_1%s + C_2%s$' % (tr('cos', w), tr('sin', w)),
                   '$y^* = x(A%s + B%s)$ vì $\\pm %si$ là nghiệm đặc trưng' % (tr('cos', w), tr('sin', w), '' if w == 1 else w),
                   '$y^{*\\prime\\prime} + %sy^* = %s = %s \\Rightarrow A = 0,\\ B = %s$' % ('' if w == 1 else w * w, form((-2 * w, 'A' + tr('sin', w)), (2 * w, 'B' + tr('cos', w))), term(c, tr('cos', w), True), tx(A_)),
                   '$%s%s$' % (base, term(A_, 'x' + tr('sin', w))))
        return Q(q, '$%s%s$.' % (base, term(A_, 'x' + tr('sin', w))), ['$%s%s$.' % (base, term(A_, 'x' + tr('cos', w))), '$%s%s$.' % (base, term(A_, tr('sin', w))), '$%s%s$.' % (base, term(c, 'x' + tr('sin', w)))], ex)
    r, A_ = rng.choice([1, 2, -1, 3]), rng.choice([1, 2, 3])
    c = 6 * A_
    base = 'y = (C_1 + C_2x)%s' % ex_(r)
    q = 'Nghiệm tổng quát của phương trình $' + ode2(-2 * r, r * r, term(c, 'x' + ex_(r), True)) + '$ là'
    ex = steps(T(r'Phương trình đặc trưng: $<pe> = 0$, nghiệm kép $k = <r>$', pe=sp.expand((symbols('k') - r) ** 2), r=r), '$\\overline{y} = (C_1 + C_2x)%s$' % ex_(r),
               T(r'$y^* = x^2(Ax + B)<e>$; đặt $y^* = u<e>$ thì vế trái bằng $u^{\prime\prime}<e> = (6Ax + 2B)<e>$', e=ex_(r)), T(r'$6Ax + 2B = <c>x \Rightarrow A = <A>,\ B = 0$', c=c, A=A_),
               '$%s%s$' % (base, term(A_, 'x^3' + ex_(r))))
    return Q(q, '$%s%s$.' % (base, term(A_, 'x^3' + ex_(r))), ['$%s%s$.' % (base, term(A_, 'x^2' + ex_(r))), '$%s%s$.' % (base, term(c, 'x' + ex_(r))), '$%s%s$.' % (base, term(3 * A_, 'x^3' + ex_(r)))], ex)


# ---------- Câu 20, 21: thiết lập tích phân bội ----------
def dbl(o, a, b, i, c, d):
    return r'\displaystyle\int_{%s}^{%s} d%s\int_{%s}^{%s} f(x,y)\,d%s' % (a, b, o, c, d, i)


def s20(rng, k):
    v = k % 5
    if v == 0:
        a = rng.choice([1, 2, 3, 4])
        lo = 'x^2' if a == 1 else r'\frac{x^2}{%d}' % a
        up = r'\sqrt{y}' if a == 1 else r'\sqrt{%dy}' % a
        I, ok = dbl('x', 0, a, 'y', lo, 'x'), dbl('y', 0, a, 'x', 'y', up)
        W = [dbl('y', 0, a, 'x', up, 'y'), dbl('y', 0, a, 'x', 0, up), dbl('y', 0, a * a, 'x', 'y', up)]
        ex = T(r'Miền lấy tích phân: $<lo> \le y \le x$, $0 \le x \le <a>$, tương đương $y \le x \le <up>$, $0 \le y \le <a>$.', lo=lo, a=a, up=up)
    elif v == 1:
        b, c = rng.choice([1, 2, 3]), rng.choice([2, 3])
        I, ok = dbl('y', 0, b * c, 'x', r'\frac{y}{%d}' % c, b), dbl('x', 0, b, 'y', 0, '%dx' % c)
        W = [dbl('x', 0, b, 'y', '%dx' % c, b * c), dbl('x', 0, b * c, 'y', 0, r'\frac{x}{%d}' % c), dbl('x', 0, b, 'y', 0, r'\frac{x}{%d}' % c)]
        ex = T(r'Miền $\dfrac{y}{<c>} \le x \le <b>$, $0 \le y \le <bc>$ là tam giác $0 \le x \le <b>$, $0 \le y \le <c>x$.', c=c, b=b, bc=b * c)
    elif v == 2:
        a = rng.choice([1, 2, 3])
        I = dbl('x', 0, a, 'y', 0, 'x') + ' + ' + dbl('x', a, 2 * a, 'y', 0, '%d - x' % (2 * a)).replace(r'\displaystyle', '')
        ok = dbl('y', 0, a, 'x', 'y', '%d - y' % (2 * a))
        W = [dbl('y', 0, a, 'x', 0, '%d - y' % (2 * a)), dbl('y', 0, 2 * a, 'x', 'y', '%d - y' % (2 * a)), dbl('y', 0, a, 'x', 'y', 2 * a)]
        ex = T(r'Miền lấy tích phân là tam giác có các đỉnh $(0;0),\ (<b>;0),\ (<a>;<a>)$.', a=a, b=2 * a)
    elif v == 3:
        a = rng.choice([1, 2, 3])
        top = 'e' if a == 1 else 'e^{%d}' % a
        I, ok = dbl('x', 1, top, 'y', 0, r'\ln x'), dbl('y', 0, a, 'x', 'e^y', top)
        W = [dbl('y', 0, a, 'x', 1, 'e^y'), dbl('y', 0, top, 'x', 'e^y', top), dbl('y', 0, a, 'x', r'\ln y', top)]
        ex = T(r'Miền $0 \le y \le \ln x$, $1 \le x \le <t>$ tương đương $e^y \le x \le <t>$, $0 \le y \le <a>$.', t=top, a=a)
    else:
        a = rng.choice([1, 2, 3])
        I, ok = dbl('y', 0, a * a, 'x', r'\sqrt{y}', a), dbl('x', 0, a, 'y', 0, 'x^2')
        W = [dbl('x', 0, a, 'y', 'x^2', a * a), dbl('x', 0, a * a, 'y', 0, r'\sqrt{x}'), dbl('x', 0, a, 'y', 0, r'\sqrt{x}')]
        ex = T(r'Miền $\sqrt{y} \le x \le <a>$, $0 \le y \le <b>$ nằm dưới parabol $y = x^2$: $0 \le y \le x^2$, $0 \le x \le <a>$.', a=a, b=a * a)
    q = 'Cho $I = ' + I + '$. Vẽ miền lấy tích phân rồi đổi thứ tự lấy tích phân, ta được'
    return Q(q, '$I = %s$.' % ok, ['$I = %s$.' % w for w in W], ex)


def trip(mid, a, b, c, d, jac=''):
    return r'\displaystyle\int_0^{2\pi}d\varphi\int_0^{%s}%s\int_{%s}^{%s} f\,%s' % (a, mid, c, d, jac)


def s21(rng, k):
    v, a = k % 5, rng.choice([1, 2, 3])
    a2 = a * a
    if v == 0:
        q = T(r'Cho $V$ là miền giới hạn bởi mặt paraboloid $z = x^2 + y^2$ và mặt phẳng $z = <a2>$. Trong tọa độ trụ $x = r\cos\varphi,\ y = r\sin\varphi,\ z = z$, tích phân $I = \displaystyle\iiint_V f(x,y,z)\,dxdydz$ được viết là', a2=a2)
        f = lambda up, lo, hi, jac='r\\,dr': r'$\displaystyle\int_0^{2\pi}d\varphi\int_0^{%s}%s\int_{%s}^{%s} f\,dz$.' % (up, jac, lo, hi)
        return Q(q, f(a, 'r^2', a2), [f(a, 'r^2', a2, 'dr'), f(a2, 'r^2', a2) if a > 1 else f(a, 'r', a2), f(a, 0, 'r^2')], T(r'Hình chiếu của $V$ lên $Oxy$ là hình tròn $r \le <a>$; $r^2 \le z \le <a2>$; Jacobian bằng $r$.', a=a, a2=a2))
    if v == 1:
        q = T(r'Cho $V = \{(x,y,z): x^2 + y^2 + z^2 \le <a2>,\ z \ge 0\}$. Trong tọa độ cầu $x = \rho\sin\theta\cos\varphi,\ y = \rho\sin\theta\sin\varphi,\ z = \rho\cos\theta$, tích phân $I = \displaystyle\iiint_V f(x,y,z)\,dxdydz$ được viết là', a2=a2)
        f = lambda th, up, jac=r'\rho^2\sin\theta': r'$\displaystyle\int_0^{2\pi}d\varphi\int_0^{%s}d\theta\int_0^{%s} f\,%s\,d\rho$.' % (th, up, jac)
        return Q(q, f(r'\pi/2', a), [f(r'\pi', a), f(r'\pi/2', a, r'\rho'), f(r'\pi/2', a2) if a > 1 else f(r'\pi/2', a, r'\rho^2')], T(r'Nửa hình cầu phía trên: $0 \le \theta \le \dfrac{\pi}{2}$, $0 \le \rho \le <a>$; Jacobian bằng $\rho^2\sin\theta$.', a=a))
    if v == 2:
        q = T(r'Cho $V$ là miền giới hạn bởi mặt nón $z = \sqrt{x^2 + y^2}$ và mặt phẳng $z = <a>$. Trong tọa độ trụ $x = r\cos\varphi,\ y = r\sin\varphi,\ z = z$, tích phân $I = \displaystyle\iiint_V f(x,y,z)\,dxdydz$ được viết là', a=a)
        f = lambda lo, hi, jac='r\\,dr': r'$\displaystyle\int_0^{2\pi}d\varphi\int_0^{%s}%s\int_{%s}^{%s} f\,dz$.' % (a, jac, lo, hi)
        return Q(q, f('r', a), [f(0, 'r'), f('r', a, 'dr'), f('r^2', a)], T(r'Mặt nón là $z = r$; miền nằm trên mặt nón và dưới mặt phẳng: $r \le z \le <a>$, $0 \le r \le <a>$.', a=a))
    if v == 3:
        q = T(r'Cho $V$ là tứ diện giới hạn bởi các mặt phẳng $x = 0,\ y = 0,\ z = 0$ và $x + y + z = <a>$. Tích phân $I = \displaystyle\iiint_V f(x,y,z)\,dxdydz$ được viết là', a=a)
        f = lambda u1, u2: r'$\displaystyle\int_0^{%s} dx\int_0^{%s} dy\int_0^{%s} f\,dz$.' % (a, u1, u2)
        return Q(q, f('%d-x' % a, '%d-x-y' % a), [f(a, a), f('%d-x' % a, '%d-x' % a), f('x', '%d-x-y' % a)], T(r'Hình chiếu lên $Oxy$ là tam giác $0 \le x \le <a>,\ 0 \le y \le <a> - x$; $0 \le z \le <a> - x - y$.', a=a))
    q = T(r'Cho $V$ là miền giới hạn bởi hai mặt paraboloid $z = x^2 + y^2$ và $z = <b> - x^2 - y^2$. Trong tọa độ trụ $x = r\cos\varphi,\ y = r\sin\varphi,\ z = z$, tích phân $I = \displaystyle\iiint_V f(x,y,z)\,dxdydz$ được viết là', b=2 * a2)
    f = lambda up, lo, hi, jac='r\\,dr': r'$\displaystyle\int_0^{2\pi}d\varphi\int_0^{%s}%s\int_{%s}^{%s} f\,dz$.' % (up, jac, lo, hi)
    return Q(q, f(a, 'r^2', '%d-r^2' % (2 * a2)), [f(2 * a2, 'r^2', '%d-r^2' % (2 * a2)), f(a, 'r^2', '%d-r^2' % (2 * a2), 'dr'), f(a, 0, '%d-r^2' % (2 * a2))], T(r'Hai mặt cắt nhau khi $r^2 = <b> - r^2$, tức $r = <a>$; $r^2 \le z \le <b> - r^2$.', a=a, b=2 * a2))


# ---------- Câu 26: giới hạn chứa tham số ----------
def s26(rng, k):
    v = k % 4
    if v == 0:
        c = rng.choice([2, 4, 6, -2])
        L = R(c * c, 2)
        q = T(r'Biết $\lim\limits_{x\to 0}\dfrac{e^{ax} - b - <c>x}{x^2} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b + L$ bằng', c=c).replace('- -', '+ ')
        return NQ(q, c + 1 + L, [c + L, c + 1, c + 1 + c * c, 1 + L], steps(r'$e^{ax} = 1 + ax + \dfrac{a^2x^2}{2} + o(x^2)$', T(r'Tử số $= (1 - b) + (a - <c>)x + \dfrac{a^2}{2}x^2 + o(x^2)$', c=c).replace('- -', '+ '), T(r'Giới hạn hữu hạn $\Leftrightarrow b = 1,\ a = <c>$; khi đó $L = \dfrac{a^2}{2} = <L>$', c=c, L=L), T(r'$a + b + L = <ok>$', ok=c + 1 + L)))
    if v == 1:
        b, L = rng.choice([2, 4, 6]), rng.choice([2, 3, 4, 5])
        a = 2 * L - b
        q = T(r'Biết $\lim\limits_{x\to +\infty}\left(\sqrt{x^2 + ax + 1} - \sqrt{x^2 - <b>x}\right) = <L>$. Giá trị của $a$ bằng', b=b, L=L)
        return NQ(q, a, [2 * L + b, L - b, 2 * L, L + b], steps(T(r'Nhân liên hợp: $\dfrac{(x^2 + ax + 1) - (x^2 - <b>x)}{\sqrt{x^2 + ax + 1} + \sqrt{x^2 - <b>x}} = \dfrac{(a + <b>)x + 1}{\sqrt{x^2 + ax + 1} + \sqrt{x^2 - <b>x}}$', b=b), T(r'$\lim\limits_{x\to+\infty} = \dfrac{a + <b>}{2} = <L> \Rightarrow a = <a>$', b=b, L=L, a=a)))
    if v == 2:
        r, s = rng.choice([(1, 2), (2, 1), (1, 3), (2, 3), (3, 1), (1, -1), (2, -1)])
        L = rng.choice([2, 3, 5, -2, 4])
        a = L * (r - s) - 2 * r
        b = -r * r - a * r
        den = sp.expand((x - r) * (x - s))
        q = T(r'Biết $\lim\limits_{x\to <r>}\dfrac{x^2 + ax + b}{<d>} = <L>$. Giá trị của $b - a$ bằng', r=r, d=den, L=L)
        ex = steps(T(r'Mẫu số bằng 0 tại $x = <r>$, giới hạn hữu hạn nên tử số cũng bằng 0: $<r2> + (<r>)a + b = 0$', r=r, r2=r * r),
                   T(r'$\dfrac{x^2 + ax + b}{<d>} = \dfrac{(<u>)(x + a + (<r>))}{(<u>)(<w>)} \to \dfrac{2\cdot(<r>) + a}{<m>}$', d=den, u=x - r, w=x - s, r=r, m=r - s),
                   T(r'$\dfrac{<t> + a}{<m>} = <L> \Rightarrow a = <a>,\ b = <b>$', t=2 * r, m=r - s, L=L, a=a, b=b), T(r'$b - a = <ok>$', ok=b - a))
        return NQ(q, b - a, [a - b, a + b, b, a], ex)
    c = rng.choice([2, 3, 4, 6])
    b = -R(c * c, 2)
    q = T(r'Biết $\lim\limits_{x\to 0}\dfrac{\ln(1 + ax) - \sin <c>x}{x^2} = b$ với $b$ là một số hữu hạn. Giá trị của $a\cdot b$ bằng', c=c)
    return NQ(q, c * b, [-c * b, b, c + b, c * b / 2], steps(r'$\ln(1 + ax) = ax - \dfrac{a^2x^2}{2} + o(x^2)$', T(r'$\sin <c>x = <c>x + o(x^2)$', c=c), T(r'Tử số $= (a - <c>)x - \dfrac{a^2}{2}x^2 + o(x^2)$; giới hạn hữu hạn $\Leftrightarrow a = <c>$', c=c), T(r'$b = -\dfrac{<c2>}{2} = <b>,\quad a\cdot b = <ok>$', c2=c * c, b=b, ok=c * b)))


# ---------- Câu 27: liên tục / khả vi ----------
def s27(rng, k):
    v = k % 4
    if v == 0:
        r, p = rng.choice([1, 2, 3, -1]), rng.choice([0, 1, 2, -2])
        a, b = 2 * r + p, -r * r
        ask = rng.choice([('a - b', a - b), ('a + b', a + b), ('2a + b', 2 * a + b)])
        q = T(r'Biết hàm số $f(x) = \begin{cases}<g> & \text{khi } x \le <r>\\ ax + b & \text{khi } x > <r>\end{cases}$ có đạo hàm tại $x = <r>$. Giá trị của $<e>$ bằng', g=x ** 2 + p * x, r=r, e=ask[0])
        ex = steps(T(r'Liên tục tại $x = <r>$: $<v> = (<r>)a + b$', r=r, v=r * r + p * r), T(r"Đạo hàm trái tại $x = <r>$: $(<g>)' = <d> \to <a>$; đạo hàm phải bằng $a$, nên $a = <a>$", g=x ** 2 + p * x, d=2 * x + p, r=r, a=a),
                   T(r'$b = <v> - (<r>)\cdot(<a>) = <b>$', v=r * r + p * r, r=r, a=a, b=b), T(r'$<e> = <ok>$', e=ask[0], ok=ask[1]))
        return NQ(q, ask[1], [a, b, a * b, a - b if ask[0] != 'a - b' else a + b], ex)
    if v == 1:
        c = rng.choice([2, 3, 4, -2])
        ask = rng.choice([('2a + b', 2 * c + 1), ('a - b', c - 1), ('a + 2b', c + 2)])
        q = T(r'Biết hàm số $f(x) = \begin{cases}e^{<c>x} & \text{khi } x \le 0\\ a\sin x + b & \text{khi } x > 0\end{cases}$ có đạo hàm tại $x = 0$. Giá trị của $<e>$ bằng', c=c, e=ask[0])
        return NQ(q, ask[1], [c, c + 1, 2 * c, 1], steps(r'Liên tục tại 0: $e^{0} = a\sin 0 + b \Rightarrow b = 1$', T(r'Đạo hàm trái tại 0: $<c>e^{0} = <c>$; đạo hàm phải: $a\cos 0 = a$, nên $a = <c>$', c=c), T(r'$<e> = <ok>$', e=ask[0], ok=ask[1])))
    if v == 2:
        r, c0 = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, 4, 5])
        a, b = symbols('a b')
        sol = sp.solve([a * r * r - b * r + c0 - 2 * r, a * (r + 1) ** 2 - b * (r + 1) + c0 - (2 * (r + 1) - a + b)], [a, b])
        if not sol:
            raise Retry
        av, bv = nice(sol[a], 6), nice(sol[b], 6)
        q = T(r'Biết hàm số $f(x) = \begin{cases}\dfrac{x^2 - <r2>}{x - <r>} & \text{khi } x < <r>\\[2mm] ax^2 - bx + <c> & \text{khi } <r> \le x < <s>\\[1mm] 2x - a + b & \text{khi } x \ge <s>\end{cases}$ liên tục trên $\mathbb{R}$. Giá trị của $a + b$ bằng', r2=r * r, r=r, c=c0, s=r + 1)
        ex = T(r'Tại $x = <r>$: $<r2>a - <r>b + <c> = <t>$; tại $x = <s>$: $<s2>a - <s>b + <c> = <u> - a + b$. Giải được $a = <a>,\ b = <b>$.', r=r, r2=r * r, c=c0, t=2 * r, s=r + 1, s2=(r + 1) ** 2, u=2 * (r + 1), a=av, b=bv)
        return NQ(q, av + bv, [av - bv, av, bv, 2 * (av + bv)], ex)
    kind, ok, why = rng.choice([
        ('liên tục tại $x = 0$', 1, r'$\left|x^a\sin\dfrac1x\right| \le |x|^a \to 0$ khi $a > 0$.'),
        ('có đạo hàm tại $x = 0$', 2, r'$\dfrac{f(x) - f(0)}{x} = x^{a-1}\sin\dfrac1x$ có giới hạn khi $x \to 0$ khi và chỉ khi $a - 1 > 0$.'),
        ('có đạo hàm liên tục tại $x = 0$', 3, r"$f'(x) = ax^{a-1}\sin\dfrac1x - x^{a-2}\cos\dfrac1x \to 0 = f'(0)$ khi và chỉ khi $a - 2 > 0$."),
    ])
    q = r'Cho hàm số $f(x) = \begin{cases}x^{a}\sin\dfrac1x & \text{khi } x \ne 0\\ 0 & \text{khi } x = 0\end{cases}$ với $a$ là số nguyên dương. Giá trị nhỏ nhất của $a$ để hàm số ' + kind + ' là'
    return NQ(q, ok, [v_ for v_ in (1, 2, 3, 4) if v_ != ok], why)


# ---------- Câu 28: ứng dụng tích phân (công cơ học) ----------
def kj(q, W, cands, ex):
    return NQ(q, W / 1000, [c / 1000 for c in cands], ex, fmt=lambda v_: vn(v_, 1), unit=' <i>kJ</i>')


def s28(rng, k):
    v = k % 5
    tail = r' Biết khối lượng riêng của nước là $1000\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\,m/s^2$. '
    if v == 0:
        Rr, H, d = rng.choice([1, 2]), rng.choice([2, 3, 4, 5]), rng.choice([1, 2, 3])
        c = 1000 * G * math.pi * Rr * Rr
        q = T(r'Một bể chứa hình trụ đứng có bán kính đáy <R> mét, chiều cao <H> mét, chứa đầy nước.' + tail + 'Công cần thiết để bơm hết nước trong bể lên một bồn chứa đặt cao hơn miệng bể <d> mét (làm tròn đến hàng phần chục) bằng', R=Rr, H=H, d=d)
        Wv = c * (H * H / 2 + d * H)
        ex = steps(T(r'Lớp nước dày $dh$ ở độ sâu $h$ có khối lượng $1000\cdot\pi\cdot<R2>\,dh$, phải nâng lên $h + <d>$ mét', R2=Rr * Rr, d=d),
                   T(r'$W = \displaystyle\int_0^{<H>} 9800\pi\cdot<R2>\,(h + <d>)\,dh = <k>\pi\left[\dfrac{h^2}{2} + <d>h\right]_0^{<H>}$', H=H, R2=Rr * Rr, d=d, k=9800 * Rr * Rr),
                   T(r'$= <k>\pi\cdot<v> \approx <J>\ J = <kJ>\ kJ$', k=9800 * Rr * Rr, v=sp.nsimplify(H * H / 2 + d * H), J=vn(Wv, 0), kJ=vn(Wv / 1000, 1).replace(',', '{,}')))
        return kj(q, c * (H * H / 2 + d * H), [c * H * H / 2, c * (H * H + d * H), c * H * (H + d) / 2 + c, c * d * H], ex)
    if v == 1:
        Rr, H = rng.choice([1, 2, 3]), rng.choice([3, 4, 6])
        c = 1000 * G * math.pi * Rr * Rr * H * H
        q = T(r'Một bể chứa có dạng hình nón tròn xoay với đỉnh ở phía dưới, bán kính miệng bể <R> mét, chiều cao <H> mét, chứa đầy nước.' + tail + 'Công cần thiết để bơm hết nước ra khỏi bể qua miệng bể (làm tròn đến hàng phần chục) bằng', R=Rr, H=H)
        ex = steps(T(r'Lớp nước ở độ cao $y$ (tính từ đỉnh) có bán kính $\dfrac{<R>y}{<H>}$, phải nâng lên $<H> - y$ mét', R=Rr, H=H),
                   T(r'$W = \displaystyle\int_0^{<H>} 9800\pi\left(\dfrac{<R>y}{<H>}\right)^2(<H> - y)\,dy = 9800\pi\cdot\dfrac{<R2>}{<H2>}\left[\dfrac{<H>y^3}{3} - \dfrac{y^4}{4}\right]_0^{<H>}$', R=Rr, H=H, R2=Rr * Rr, H2=H * H),
                   T(r'$= 9800\pi\cdot\dfrac{<R2>\cdot<H2>}{12} \approx <kJ>\ kJ$', R2=Rr * Rr, H2=H * H, kJ=vn(c / 12 / 1000, 1).replace(',', '{,}')))
        return kj(q, c / 12, [c / 4, c / 6, c / 3, c / 24], ex)
    if v == 2:
        F0, x0 = rng.choice([10, 20, 30, 40]), rng.choice([5, 10, 4])
        a, b = rng.choice([(10, 30), (0, 20), (10, 20), (20, 40), (5, 25)])
        kk = F0 / (x0 / 100)
        W = kk * ((b / 100) ** 2 - (a / 100) ** 2) / 2
        q = T(r'Một lò xo tuân theo định luật Hooke $F = kx$ bị giãn <x0> cm khi chịu lực kéo <F0> N. Công cần thiết để kéo lò xo từ độ giãn <a> cm đến độ giãn <b> cm bằng', x0=x0, F0=F0, a=a, b=b)
        am, bm = vn(a / 100, 2).replace(',', '{,}'), vn(b / 100, 2).replace(',', '{,}')
        ex = steps(T(r'$F = kx \Rightarrow k = \dfrac{<F0>}{<x0m>} = <k>\ N/m$', F0=F0, x0m=vn(x0 / 100, 2).replace(',', '{,}'), k=int(kk)),
                   T(r'$W = \displaystyle\int_{<a>}^{<b>} <k>x\,dx = <h>\left(<b>^2 - <a>^2\right) = <W>\ J$', a=am, b=bm, k=int(kk), h=int(kk) // 2, W=vn(W, 2).rstrip('0').rstrip(',').replace(',', '{,}')))
        f = lambda v_: vn(v_, 2).rstrip('0').rstrip(',')
        return NQ(q, W, [kk * ((b - a) / 100) ** 2 / 2 if a else W * 2, kk * (b / 100) ** 2 if a else W / 2, F0 * (b - a) / 100, W * 100], ex, fmt=f, unit=' <i>J</i>')
    if v == 3:
        L, lam, mm = rng.choice([20, 30, 40, 50]), rng.choice([2, 3, 4]), rng.choice([0, 10, 20, 50])
        W = G * (lam * L * L / 2 + mm * L)
        load = T(', đầu dưới có gắn một vật nặng <m> kg', m=mm) if mm else ''
        q = T(r'Một sợi cáp dài <L> mét, nặng <lam> kg mỗi mét, được treo thẳng đứng từ nóc một tòa nhà cao<load>. Lấy $g = 9{,}8\,m/s^2$. Công cần thiết để kéo toàn bộ sợi cáp<w> lên nóc tòa nhà (làm tròn đến hàng phần chục) bằng', L=L, lam=lam, load=load, w=' cùng vật nặng' if mm else '')
        ex = steps(T(r'Đoạn cáp dài $dx$ ở độ sâu $x$ nặng $<lam>\,dx$ kg, phải nâng lên $x$ mét', lam=lam),
                   T(r'$W = \displaystyle\int_0^{<L>} <lam>\cdot9{,}8\cdot x\,dx<e> = <c>\cdot\dfrac{<L>^2}{2}<e2>$', L=L, lam=lam, c=vn(lam * G, 1).replace(',', '{,}'), e=T(r' + <m>\cdot9{,}8\cdot<L>', m=mm, L=L) if mm else '', e2=T(r' + <v>', v=vn(mm * G * L, 0)) if mm else ''),
                   T(r'$= <J>\ J = <kJ>\ kJ$', J=vn(W, 0), kJ=vn(W / 1000, 1).replace(',', '{,}')))
        return kj(q, W, [G * lam * L * L + G * mm * L, G * lam * L * L / 2, G * (lam * L + mm) * L, W / 2], ex)
    a, b, h = rng.choice([2, 3, 4]), rng.choice([1.5, 2, 3]), rng.choice([2, 3, 4])
    half = rng.random() < .5
    c = 1000 * G * a * b
    W = c * (h / 2) ** 2 / 2 if half else c * h * h / 2
    q = T(r'Một bể chứa nước hình hộp chữ nhật có chiều dài, chiều rộng và chiều cao lần lượt là <a> mét, <b> mét và <h> mét được chứa đầy nước.' + tail + 'Công cần thiết để bơm <w> ra khỏi bể qua mặt trên của bể bằng', a=a, b=vn(b, 1).rstrip('0').rstrip(','), h=h, w='nửa lượng nước phía trên' if half else 'hết nước')
    us = vn(h / 2, 1).rstrip('0').rstrip(',').replace(',', '{,}') if half else str(h)
    bs = vn(b, 1).rstrip('0').rstrip(',').replace(',', '{,}')
    ex = steps(T(r'Lớp nước dày $dy$ ở độ sâu $y$ có khối lượng $1000\cdot<a>\cdot<b>\,dy$, phải nâng lên $y$ mét', a=a, b=bs),
               T(r'$W = \displaystyle\int_0^{<u>} 9800\cdot<a>\cdot<b>\cdot y\,dy = <k>\cdot\dfrac{<u>^2}{2}$', u=us, a=a, b=bs, k=vn(c, 0)), T(r'$= <J>\ J = <kJ>\ kJ$', J=vn(W, 0), kJ=vn(W / 1000, 1).replace(',', '{,}')))
    return kj(q, W, [c * h * h / 2 if half else c * h * h / 8, c * h * h / 4, c * h * h, c * h / 2], ex)


# ---------- Câu 30, 31: tổng của chuỗi ----------
def s30(rng, k):
    v = k % 5
    if v == 0:
        j = rng.choice([2, 3, 4, 5, 6] if k < 20 else [7, 8])
        ok = sum(R(1, i) for i in range(1, j + 1)) / j
        q = T(r'Bằng cách tách $\dfrac{1}{n(n+<j>)} = \dfrac{1}{<j>}\left(\dfrac1n - \dfrac{1}{n+<j>}\right)$, tổng của chuỗi $\displaystyle\sum_{n=1}^{+\infty}\dfrac{1}{n(n+<j>)}$ bằng', j=j)
        return NQ(q, ok, [R(1, j), ok * j, R(1, 2), 1], steps(T(r'$S_N = \dfrac{1}{<j>}\displaystyle\sum_{n=1}^{N}\left(\dfrac1n - \dfrac{1}{n+<j>}\right) = \dfrac{1}{<j>}\left(<h> - \sum_{n=N+1}^{N+<j>}\dfrac1n\right)$', j=j, h=' + '.join(['1'] + [r'\dfrac1%d' % i for i in range(2, j + 1)])), T(r'$N \to +\infty$: $S = \dfrac{1}{<j>}\cdot<H> = <ok>$', j=j, H=sum(R(1, i) for i in range(1, j + 1)), ok=ok)))
    if v == 1:
        qq = rng.choice([2, 3, 4, 5] if k < 20 else [6, 7])
        ok = R(qq * (qq + 1), (qq - 1) ** 3)
        q = T(r'Biết với $|x| < 1$ thì $\displaystyle\sum_{n=1}^{+\infty} n^2x^n = \dfrac{x(1 + x)}{(1 - x)^3}$. Tổng của chuỗi $\displaystyle\sum_{n=1}^{+\infty}\dfrac{n^2}{<q>^n}$ bằng', q=qq)
        return NQ(q, ok, [R(qq, (qq - 1) ** 2), R(qq + 1, (qq - 1) ** 3), ok / 2], steps(T(r'$x = \dfrac{1}{<q>}$: $\dfrac{x(1 + x)}{(1 - x)^3} = \dfrac{\frac{1}{<q>}\cdot\frac{<q1>}{<q>}}{\left(\frac{<q0>}{<q>}\right)^3} = <ok>$', q=qq, q1=qq + 1, q0=qq - 1, ok=ok)))
    if v == 2:
        qq = rng.choice([2, 3, 4, 5, 6])
        ok = R(qq * qq, (qq - 1) ** 2)
        q = T(r'Tổng của chuỗi $\displaystyle\sum_{n=0}^{+\infty}\dfrac{n+1}{<q>^n}$ bằng (gợi ý: đạo hàm từng số hạng chuỗi $\displaystyle\sum_{n=0}^{+\infty} x^{n+1}$)', q=qq)
        return NQ(q, ok, [R(qq, qq - 1), R(qq, (qq - 1) ** 2), ok * 2], steps(r"$\displaystyle\sum_{n\ge0}x^{n+1} = \dfrac{x}{1-x} \Rightarrow \sum_{n\ge0}(n+1)x^n = \left(\dfrac{x}{1-x}\right)' = \dfrac{1}{(1-x)^2}$", T(r'$x = \dfrac{1}{<q>}$: $\dfrac{1}{\left(\frac{<q0>}{<q>}\right)^2} = <ok>$', q=qq, q0=qq - 1, ok=ok)))
    if v == 3:
        s, ok, ex = rng.choice([
            (r'\dfrac{1}{(2n-1)(2n+1)}', R(1, 2), r'$\dfrac{1}{(2n-1)(2n+1)} = \dfrac12\left(\dfrac{1}{2n-1} - \dfrac{1}{2n+1}\right)$.'),
            (r'\dfrac{1}{(3n-2)(3n+1)}', R(1, 3), r'$\dfrac{1}{(3n-2)(3n+1)} = \dfrac13\left(\dfrac{1}{3n-2} - \dfrac{1}{3n+1}\right)$.'),
            (r'\dfrac{1}{n(n+1)(n+2)}', R(1, 4), r'$\dfrac{1}{n(n+1)(n+2)} = \dfrac12\left(\dfrac{1}{n(n+1)} - \dfrac{1}{(n+1)(n+2)}\right)$.'),
            (r'\dfrac{2n+1}{n^2(n+1)^2}', R(1), r'$\dfrac{2n+1}{n^2(n+1)^2} = \dfrac{1}{n^2} - \dfrac{1}{(n+1)^2}$.'),
            (r'\dfrac{1}{4n^2 - 1}', R(1, 2), r'$\dfrac{1}{4n^2-1} = \dfrac12\left(\dfrac{1}{2n-1} - \dfrac{1}{2n+1}\right)$.'),
        ])
        return NQ(T(r'Tổng của chuỗi $\displaystyle\sum_{n=1}^{+\infty}<s>$ bằng (gợi ý: phân tích số hạng tổng quát thành hiệu để thu gọn tổng riêng)', s=s), ok, [2 * ok, ok / 2, R(3, 4), 1, R(1, 6)], steps(ex.rstrip('.'), T(r'Tổng riêng thu gọn; cho $N \to +\infty$: $S = <ok>$', ok=ok)))
    qq = rng.choice([2, 3, 4, 5, 6])
    ok = R(qq, (qq - 1) ** 2)
    q = T(r'Tổng của chuỗi $\displaystyle\sum_{n=1}^{+\infty}\dfrac{n}{<q>^n}$ bằng (gợi ý: $\displaystyle\sum_{n=1}^{+\infty} nx^n = \dfrac{x}{(1-x)^2}$ với $|x| < 1$)', q=qq)
    return NQ(q, ok, [R(1, qq - 1), R(qq * qq, (qq - 1) ** 2), R(1, (qq - 1) ** 2)], steps(T(r'$x = \dfrac{1}{<q>}$: $\dfrac{x}{(1-x)^2} = \dfrac{\frac{1}{<q>}}{\left(\frac{<q0>}{<q>}\right)^2} = <ok>$', q=qq, q0=qq - 1, ok=ok)))


def s31(rng, k):
    v = k % 4
    if v == 0:
        p, qq, r = rng.choice([(2, 3, 5), (2, 3, 4), (3, 4, 5), (2, 5, 6), (1, 2, 3), (3, 4, 6)])
        n0, s = rng.choice([1, 2]), rng.choice([1, -1])
        geo = lambda ratio: ratio ** n0 / (1 - ratio)
        ok = geo(R(p, r)) * p + s * geo(R(qq, r))
        sign = '+' if s > 0 else '-'
        if ok <= 0 or ok.q == 1:
            raise Retry
        q = T(r'Biết $\displaystyle\sum_{n=<n0>}^{+\infty}\dfrac{<p>^{n+1} <sg> <q>^n}{<r>^n} = \dfrac{a}{b}$ (trong đó $\dfrac{a}{b}$ là phân số tối giản và $a, b \in \mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng', n0=n0, p=p, sg=sign, q=qq, r=r)
        g1, g2 = geo(R(p, r)), geo(R(qq, r))
        ex = steps(T(r'$\displaystyle\sum_{n=<n0>}^{+\infty}\dfrac{<p>^{n+1}}{<r>^n} = <p>\sum_{n=<n0>}^{+\infty}\left(\dfrac{<p>}{<r>}\right)^n = <p>\cdot\dfrac{\left(\frac{<p>}{<r>}\right)^{<n0>}}{1 - \frac{<p>}{<r>}} = <v1>$', n0=n0, p=p, r=r, v1=p * g1),
                   T(r'$\displaystyle\sum_{n=<n0>}^{+\infty}\left(\dfrac{<q>}{<r>}\right)^n = \dfrac{\left(\frac{<q>}{<r>}\right)^{<n0>}}{1 - \frac{<q>}{<r>}} = <v2>$', n0=n0, q=qq, r=r, v2=g2),
                   T(r'Tổng: $<v1> <sg> <v2> = <ok> \Rightarrow a + b = <s>$', v1=p * g1, sg=sign, v2=g2, ok=ok, s=ok.p + ok.q))
        alt = geo(R(p, r)) + s * geo(R(qq, r))
        return NQ(q, ok.p + ok.q, [abs(ok.p - ok.q), abs(alt.p) + alt.q, ok.p + ok.q + 2, ok.p * ok.q], ex)
    if v == 1:
        d, per = rng.randint(1, 9), rng.choice([18, 27, 36, 45, 54, 63, 72, 81, 12, 15, 24])
        ok = R(d, 10) + R(per, 990)
        q = T(r'Số thập phân vô hạn tuần hoàn $0{,}<d><per><per><per>\ldots$ (phần tuần hoàn là <per>) bằng $\dfrac{<d>}{10} + \displaystyle\sum_{n=1}^{+\infty}\dfrac{<per>}{10\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\dfrac{a}{b}$ với $a, b \in \mathbb{N}^*$, giá trị của $a + b$ bằng', d=d, per=per)
        ex = steps(T(r'$\displaystyle\sum_{n=1}^{+\infty}\dfrac{<per>}{10\cdot100^n} = \dfrac{<per>}{10}\cdot\dfrac{\frac{1}{100}}{1 - \frac{1}{100}} = \dfrac{<per>}{990}$', per=per),
                   T(r'$\dfrac{<d>}{10} + \dfrac{<per>}{990} = <ok> \Rightarrow a + b = <s>$', d=d, per=per, ok=ok, s=ok.p + ok.q))
        return NQ(q, ok.p + ok.q, [ok.q - ok.p, ok.p + ok.q + 1, d * 100 + per + 1000, ok.p + ok.q - 2], ex)
    if v == 2:
        h, (pn, pd) = rng.choice([10, 12, 6, 9, 20]), rng.choice([(3, 5), (1, 2), (2, 3), (3, 4), (1, 3)])
        rho = R(pn, pd)
        ok = h * (1 + rho) / (1 - rho)
        q = T(r'Một quả bóng được thả rơi từ độ cao <h> mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\dfrac{<a>}{<b>}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng', h=h, a=pn, b=pd)
        ex = T(r'$<h> + 2\displaystyle\sum_{n=1}^{+\infty}<h>\left(\dfrac{<a>}{<b>}\right)^n = <h> + 2\cdot\dfrac{<h>\cdot\frac{<a>}{<b>}}{1 - \frac{<a>}{<b>}} = <ok>$.', h=h, a=pn, b=pd, ok=ok)
        return NQ(q, ok, [h / (1 - rho), 2 * h / (1 - rho), h * rho / (1 - rho), ok + h], ex)
    (pn, pd), qq = rng.choice([(2, 3), (1, 2), (3, 4), (1, 3)]), rng.choice([2, 3, 4])
    ok = R(pn, pd) / (1 + R(pn, pd)) + R(1, qq * qq) / (1 - R(1, qq * qq))
    q = T(r'Biết $\displaystyle\sum_{n=1}^{+\infty}\left[(-1)^{n-1}\left(\dfrac{<a>}{<b>}\right)^n + \dfrac{1}{<q>^{2n}}\right] = \dfrac{a}{b}$ (trong đó $\dfrac{a}{b}$ là phân số tối giản và $a, b \in \mathbb{N}^*$), giá trị của $a + b$ bằng', a=pn, b=pd, q=qq)
    ex = steps(T(r'$\displaystyle\sum_{n=1}^{+\infty}(-1)^{n-1}\left(\dfrac{<a>}{<b>}\right)^n = \dfrac{\frac{<a>}{<b>}}{1 + \frac{<a>}{<b>}} = <v1>$', a=pn, b=pd, v1=R(pn, pd) / (1 + R(pn, pd))),
               T(r'$\displaystyle\sum_{n=1}^{+\infty}\dfrac{1}{<q2>^n} = \dfrac{\frac{1}{<q2>}}{1 - \frac{1}{<q2>}} = <v2>$', q2=qq * qq, v2=R(1, qq * qq - 1)),
               T(r'Tổng: $<ok> \Rightarrow a + b = <s>$', ok=ok, s=ok.p + ok.q))
    alt = R(pn, pd) / (1 - R(pn, pd)) + R(1, qq * qq) / (1 - R(1, qq * qq))
    return NQ(q, ok.p + ok.q, [abs(ok.q - ok.p), alt.p + alt.q, ok.p + ok.q + 3, ok.p + ok.q - 1], ex)


# ---------- Câu 32, 33, 34: ngân hàng câu viết sẵn ----------
PS = lambda body, n0: r'Với $|x| < 1$, tổng của chuỗi lũy thừa $\displaystyle\sum_{n=%d}^{+\infty}%s$ bằng' % (n0, body)
S32 = [
    (PS('nx^n', 1), r'$\dfrac{x}{(1-x)^2}$.', [r'$\dfrac{1}{(1-x)^2}$.', r'$\dfrac{x}{1-x}$.', r'$\dfrac{x}{(1+x)^2}$.'], r'Đạo hàm từng số hạng $\sum x^n = \dfrac{1}{1-x}$ rồi nhân với $x$.'),
    (PS(r'\dfrac{x^n}{n}', 1), r'$-\ln(1-x)$.', [r'$\ln(1-x)$.', r'$\ln(1+x)$.', r'$-\ln(1+x)$.'], r'Tích phân từng số hạng chuỗi $\sum_{n\ge0} x^n = \dfrac{1}{1-x}$ từ $0$ đến $x$.'),
    (PS(r'\dfrac{(-1)^nx^{2n+1}}{2n+1}', 0), r'$\arctan x$.', [r'$\dfrac{x}{1+x^2}$.', r'$\ln(1+x)$.', r'$\dfrac{1}{1+x^2}$.'], r'Tích phân từng số hạng chuỗi $\sum (-1)^nx^{2n} = \dfrac{1}{1+x^2}$.'),
    (PS('n^2x^n', 1), r'$\dfrac{x(1+x)}{(1-x)^3}$.', [r'$\dfrac{x}{(1-x)^3}$.', r'$\dfrac{x(1+x)}{(1-x)^2}$.', r'$\dfrac{2x}{(1-x)^3}$.'], r'Áp dụng toán tử $x\dfrac{d}{dx}$ hai lần cho $\dfrac{1}{1-x}$.'),
    (PS('(n+1)x^n', 0), r'$\dfrac{1}{(1-x)^2}$.', [r'$\dfrac{x}{(1-x)^2}$.', r'$\dfrac{1}{1-x}$.', r'$\dfrac{1}{(1+x)^2}$.'], r'Đạo hàm từng số hạng chuỗi $\sum_{n\ge0} x^{n+1} = \dfrac{x}{1-x}$.'),
    (PS(r'\dfrac{(-1)^{n-1}x^n}{n}', 1), r'$\ln(1+x)$.', [r'$-\ln(1+x)$.', r'$-\ln(1-x)$.', r'$\dfrac{x}{1+x}$.'], r'Tích phân từng số hạng chuỗi $\sum_{n\ge0}(-1)^nx^n = \dfrac{1}{1+x}$.'),
    (PS('n(n-1)x^n', 2), r'$\dfrac{2x^2}{(1-x)^3}$.', [r'$\dfrac{2}{(1-x)^3}$.', r'$\dfrac{x^2}{(1-x)^3}$.', r'$\dfrac{2x^2}{(1-x)^2}$.'], r'Đạo hàm hai lần $\sum x^n = \dfrac{1}{1-x}$ được $\sum n(n-1)x^{n-2} = \dfrac{2}{(1-x)^3}$, rồi nhân với $x^2$.'),
    (PS(r'\dfrac{x^{2n+1}}{2n+1}', 0), r'$\dfrac12\ln\dfrac{1+x}{1-x}$.', [r'$\arctan x$.', r'$\ln\dfrac{1+x}{1-x}$.', r'$\dfrac{x}{1-x^2}$.'], r'Tích phân từng số hạng chuỗi $\sum x^{2n} = \dfrac{1}{1-x^2} = \dfrac12\left(\dfrac{1}{1-x} + \dfrac{1}{1+x}\right)$.'),
    (PS(r'(-1)^n(n+1)x^n', 0), r'$\dfrac{1}{(1+x)^2}$.', [r'$\dfrac{1}{(1-x)^2}$.', r'$\dfrac{1}{1+x}$.', r'$-\dfrac{1}{(1+x)^2}$.'], r'Thay $x$ bởi $-x$ trong $\sum (n+1)x^n = \dfrac{1}{(1-x)^2}$.'),
    (PS(r'\dfrac{x^{n+1}}{n(n+1)}', 1), r'$x + (1-x)\ln(1-x)$.', [r'$-\ln(1-x)$.', r'$x - (1-x)\ln(1-x)$.', r'$(1-x)\ln(1-x)$.'], r'Tích phân từng số hạng chuỗi $\sum_{n\ge1}\dfrac{x^n}{n} = -\ln(1-x)$ từ $0$ đến $x$.'),
]
GS = 'Nghiệm tổng quát của phương trình $%s$ là'
S33 = [
    (GS % r"y' = e^{x-y}", r'$e^y = e^x + C$.', [r'$y = x + C$.', r'$e^y = Ce^x$.', r'$e^{-y} = e^{-x} + C$.'], r'$e^y\,dy = e^x\,dx$.'),
    (GS % r'(1 + x^2)dy - xy\,dx = 0', r'$y = C\sqrt{1 + x^2}$.', [r'$y = C(1 + x^2)$.', r'$y = \sqrt{1 + x^2} + C$.', r'$y = \dfrac{C}{\sqrt{1 + x^2}}$.'], r'$\dfrac{dy}{y} = \dfrac{x\,dx}{1+x^2}$.'),
    (GS % r"y' = \dfrac{1 + y^2}{1 + x^2}", r'$\arctan y = \arctan x + C$.', [r'$\arctan y = x + C$.', r'$y = x + C$.', r'$y = Cx$.'], r'$\dfrac{dy}{1+y^2} = \dfrac{dx}{1+x^2}$.'),
    (GS % r"xy' = y\ln y" + ' $(x > 0,\\ y > 0)$', r'$y = e^{Cx}$.', [r'$y = Ce^{x}$.', r'$y = x^{C}$.', r'$y = Cx$.'], r'$\dfrac{dy}{y\ln y} = \dfrac{dx}{x} \Rightarrow \ln y = Cx$.'),
    (GS % r"y' = 2x(1 + y^2)", r'$y = \tan(x^2 + C)$.', [r'$y = \tan x^2 + C$.', r'$y = C\tan x^2$.', r'$y = \arctan(x^2 + C)$.'], r'$\dfrac{dy}{1+y^2} = 2x\,dx \Rightarrow \arctan y = x^2 + C$.'),
    (GS % r"y' = y^2\cos x", r'$y = -\dfrac{1}{\sin x + C}$.', [r'$y = \dfrac{1}{\sin x + C}$.', r'$y = -\dfrac{1}{\sin x} + C$.', r'$y = Ce^{\sin x}$.'], r'$\dfrac{dy}{y^2} = \cos x\,dx \Rightarrow -\dfrac1y = \sin x + C$ (ngoài ra còn nghiệm $y = 0$).'),
    (GS % r"y' = xe^{-y}", r'$e^y = \dfrac{x^2}{2} + C$.', [r'$e^y = x^2 + C$.', r'$e^{-y} = \dfrac{x^2}{2} + C$.', r'$y = \dfrac{x^2}{2} + C$.'], r'$e^y\,dy = x\,dx$.'),
    (GS % r"(1 + e^x)yy' = e^x", r'$y^2 = 2\ln(1 + e^x) + C$.', [r'$y^2 = \ln(1 + e^x) + C$.', r'$y = 2\ln(1 + e^x) + C$.', r'$y^2 = 2e^x + C$.'], r'$y\,dy = \dfrac{e^x\,dx}{1 + e^x}$.'),
    (GS % r"y'\tan x = y", r'$y = C\sin x$.', [r'$y = C\cos x$.', r'$y = \sin x + C$.', r'$y = C\tan x$.'], r'$\dfrac{dy}{y} = \dfrac{\cos x}{\sin x}dx$.'),
    (GS % r"y' = \dfrac{2xy}{1 + x^2}", r'$y = C(1 + x^2)$.', [r'$y = C\sqrt{1 + x^2}$.', r'$y = 1 + x^2 + C$.', r'$y = Ce^{x^2}$.'], r'$\dfrac{dy}{y} = \dfrac{2x\,dx}{1+x^2}$.'),
]
S34 = [
    (GS % r"y' = \dfrac{y}{x} + x" + ' $(x > 0)$', r'$y = x^2 + Cx$.', [r'$y = x^2 + C$.', r'$y = \dfrac{x^2}{2} + Cx$.', r'$y = Cx^2 + x$.'], r"$\left(\dfrac{y}{x}\right)' = 1$."),
    (GS % r"y' = \dfrac{x + y}{x}", r'$y = x\ln|x| + Cx$.', [r'$y = \ln|x| + Cx$.', r'$y = x\ln|x| + C$.', r'$y = Cx\ln|x|$.'], r"Đặt $y = ux$: $u'x = 1$."),
    (GS % r"y' - y = e^x", r'$y = (x + C)e^x$.', [r'$y = Ce^x + x$.', r'$y = (Cx + 1)e^x$.', r'$y = Ce^x + e^{2x}$.'], r"$\left(ye^{-x}\right)' = 1$."),
    (GS % r"y'\cos x + y\sin x = 1", r'$y = \sin x + C\cos x$.', [r'$y = \cos x + C\sin x$.', r'$y = \sin x + C$.', r'$y = (x + C)\cos x$.'], r"$\left(\dfrac{y}{\cos x}\right)' = \dfrac{1}{\cos^2x}$."),
    (GS % r"y' + 2xy = 2x", r'$y = 1 + Ce^{-x^2}$.', [r'$y = 1 + Ce^{x^2}$.', r'$y = x + Ce^{-x^2}$.', r'$y = Ce^{-x^2}$.'], r"$\left(ye^{x^2}\right)' = 2xe^{x^2}$."),
    (GS % r"xy' + 2y = 4x^2" + ' $(x > 0)$', r'$y = x^2 + \dfrac{C}{x^2}$.', [r'$y = x^2 + Cx^2$.', r'$y = 2x^2 + \dfrac{C}{x^2}$.', r'$y = x^2 + \dfrac{C}{x}$.'], r"$\left(x^2y\right)' = 4x^3$."),
    (GS % r"y' + y = x", r'$y = x - 1 + Ce^{-x}$.', [r'$y = x + 1 + Ce^{-x}$.', r'$y = x - 1 + Ce^{x}$.', r'$y = x + Ce^{-x}$.'], r"$\left(ye^{x}\right)' = xe^x$."),
    (GS % r"y' - y\tan x = \dfrac{1}{\cos x}", r'$y = \dfrac{x + C}{\cos x}$.', [r'$y = (x + C)\cos x$.', r'$y = \dfrac{C}{\cos x} + x$.', r'$y = \dfrac{x + C}{\sin x}$.'], r"$\left(y\cos x\right)' = 1$."),
    (GS % r"y' = \dfrac{y}{x} + \dfrac{y^2}{x^2}" + ' $(x > 0)$', r'$y = -\dfrac{x}{\ln x + C}$.', [r'$y = \dfrac{x}{\ln x + C}$.', r'$y = -x\ln x + Cx$.', r'$y = -\dfrac{1}{\ln x + C}$.'], r"Đặt $y = ux$: $u'x = u^2 \Rightarrow -\dfrac1u = \ln x + C$."),
    (GS % r"y' - \dfrac{3y}{x} = x^3" + ' $(x > 0)$', r'$y = x^3(\ln x + C)$.', [r'$y = x^3\ln x + C$.', r'$y = x^4 + Cx^3$.', r'$y = x^3(x + C)$.'], r"$\left(\dfrac{y}{x^3}\right)' = \dfrac1x$."),
]


def pool(P):
    return lambda rng, k: Q(*P[k % len(P)])


s32, s33, s34 = pool(S32), pool(S33), pool(S34)


# ---------- Câu 35: bài toán thực tế dùng phương trình vi phân ----------
def s35(rng, k):
    v = k % 5
    f1 = lambda v_: vn(v_, 1)
    if v == 0:
        V, c0, cin, rate, tt = rng.choice([500, 1000, 2000]), rng.choice([0.02, 0.03, 0.05]), 0.01, rng.choice([10, 20]), rng.choice([30, 40, 50, 60])
        ok = cin * V + (c0 - cin) * V * math.exp(-rate * tt / V)
        q = T(r'Một bể có <V> lít nước muối với nồng độ muối là <c0> kg/lít. Người ta bơm nước muối với nồng độ <cin> kg/lít vào bể với tốc độ <r> lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau <t> phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?',
              V=V, c0=vn(c0, 2), cin=vn(cin, 2), r=rate, t=tt)
        ex = steps(T(r"Gọi $S(t)$ là lượng muối (kg): $S' = <cin>\cdot<r> - \dfrac{S}{<V>}\cdot<r> = <a> - \dfrac{<r>S}{<V>},\quad S(0) = <s0>$", cin=vn(cin, 2).replace(',', '{,}'), r=rate, V=V, a=vn(cin * rate, 1).replace(',', '{,}'), s0=int(round(c0 * V))),
                   T(r'Nghiệm: $S(t) = <e> + Ce^{-<r>t/<V>}$; $S(0) = <s0> \Rightarrow C = <d>$', e=int(round(cin * V)), r=rate, V=V, s0=int(round(c0 * V)), d=int(round((c0 - cin) * V))),
                   T(r'$S(<t>) = <e> + <d>e^{-<x>} \approx <ok>$', t=tt, e=int(round(cin * V)), d=int(round((c0 - cin) * V)), x=vn(rate * tt / V, 2).rstrip('0').rstrip(',').replace(',', '{,}'), ok=vn(ok, 1).replace(',', '{,}')))
        return NQ(q, ok, [c0 * V * math.exp(-rate * tt / V), cin * V, (c0 - cin) * V * math.exp(-rate * tt / V), ok + 1.5], ex, fmt=f1)
    if v == 1:
        V0, S0, cin = 100, rng.choice([15, 20, 25, 30]), 0.1
        rin, rout = rng.choice([(6, 4), (3, 2), (9, 6)])
        d, tt = rin - rout, rng.choice([25, 50, 100])
        Vt = V0 + d * tt
        ok = cin * Vt + (S0 - cin * V0) * V0 ** 2 / Vt ** 2
        q = T(r'Một bể chứa 100 lít nước có hòa tan <S0> kg muối. Người ta bơm vào bể nước muối nồng độ 0,1 kg/lít với tốc độ <rin> lít/phút, đồng thời rút hỗn hợp (luôn được khuấy đều) ra khỏi bể với tốc độ <rout> lít/phút, nên thể tích nước trong bể tăng dần. Lượng muối trong bể sau <t> phút là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?', S0=S0, rin=rin, rout=rout, t=tt)
        ex = steps(T(r"$V(t) = 100 + <d>t$; $S' + \dfrac{<rout>}{100 + <d>t}S = <a>,\quad S(0) = <S0>$", d=d, rout=rout, a=vn(cin * rin, 1).replace(',', '{,}'), S0=S0),
                   T(r"Nhân với thừa số tích phân $(100 + <d>t)^2$: $\left[S(100 + <d>t)^2\right]' = <a>(100 + <d>t)^2$", d=d, a=vn(cin * rin, 1).replace(',', '{,}')),
                   T(r'$S(100 + <d>t)^2 = 0{,}1(100 + <d>t)^3 + C$; $S(0) = <S0> \Rightarrow C = <C>$', d=d, S0=S0, C=int((S0 - 10) * 10 ** 4)),
                   T(r'$S(<t>) = 0{,}1\cdot<V> + \dfrac{<C>}{<V>^2} \approx <ok>$', t=tt, V=Vt, C=int((S0 - 10) * 10 ** 4), ok=vn(ok, 1).replace(',', '{,}')))
        return NQ(q, ok, [cin * Vt, S0 + cin * rin * tt, cin * Vt + (S0 - cin * V0) * V0 / Vt, S0], ex, fmt=f1)
    if v == 2:
        T0, Mr, T1, t1 = rng.choice([90, 95, 100, 80]), rng.choice([20, 25]), rng.choice([60, 65, 70]), rng.choice([5, 10, 15])
        mult = rng.choice([2, 3])
        ok = Mr + (T0 - Mr) * ((T1 - Mr) / (T0 - Mr)) ** mult
        q = T(r'Một tách cà phê có nhiệt độ $<T0>^\circ C$ được đặt trong phòng có nhiệt độ không đổi $<M>^\circ C$. Sau <t1> phút, nhiệt độ cà phê là $<T1>^\circ C$. Theo định luật Newton, tốc độ nguội tỉ lệ với hiệu nhiệt độ giữa cà phê và phòng. Nhiệt độ của cà phê sau <t2> phút kể từ lúc đầu (làm tròn đến hàng phần chục, đơn vị $^\circ C$) là', T0=T0, M=Mr, t1=t1, T1=T1, t2=mult * t1)
        ex = steps(T(r"$T' = -k(T - <M>) \Rightarrow T(t) = <M> + <d>e^{-kt}$ (vì $T(0) = <T0>$)", M=Mr, d=T0 - Mr, T0=T0), T(r'$T(<t1>) = <T1> \Rightarrow e^{-<t1>k} = \dfrac{<a>}{<d>}$', t1=t1, T1=T1, a=T1 - Mr, d=T0 - Mr),
                   T(r'$T(<t2>) = <M> + <d>\left(\dfrac{<a>}{<d>}\right)^{<m>} \approx <ok>$', t2=mult * t1, M=Mr, d=T0 - Mr, a=T1 - Mr, m=mult, ok=vn(ok, 1).replace(',', '{,}')))
        return NQ(q, ok, [T0 - mult * (T0 - T1), Mr + (T1 - Mr) / mult, (T1 + Mr) / 2, ok + 3.2], ex, fmt=f1)
    if v == 3:
        H, name = rng.choice([(5730, r'cacbon $^{14}C$'), (1600, r'rađi $^{226}Ra$'), (30, r'xêsi $^{137}Cs$')])
        pc = rng.choice([80, 70, 60, 90, 75])
        ok = H * math.log(100 / pc) / math.log(2)
        q = T(r'Chất phóng xạ <name> có chu kỳ bán rã <H> năm và phân rã với tốc độ tỉ lệ với lượng hiện có, tức $m\' = -km$ với $k = \dfrac{\ln 2}{<H>}$. Thời gian (năm) để một mẫu chất này còn lại <pc>% khối lượng ban đầu (làm tròn đến hàng phần chục) là', name=name, H=H, pc=pc)
        ex = steps(T(r"$m' = -km \Rightarrow m(t) = m_0e^{-kt} = m_0\cdot2^{-t/<H>}$", H=H), T(r'$2^{-t/<H>} = \dfrac{<pc>}{100} \Rightarrow \dfrac{t}{<H>} = \log_2\dfrac{100}{<pc>}$', H=H, pc=pc),
                   T(r'$t = <H>\cdot\dfrac{\ln(100/<pc>)}{\ln 2} \approx <ok>$', H=H, pc=pc, ok=vn(ok, 1).replace(',', '{,}')))
        return NQ(q, ok, [H * (100 - pc) / 100, H * (100 - pc) / 50, H * pc / 100, ok * 1.2], ex, fmt=f1)
    mm, kk, tt = rng.choice([2, 4, 5, 10]), rng.choice([0.5, 1, 2]), rng.choice([2, 4, 5, 10])
    vmax = mm * G / kk
    ok = vmax * (1 - math.exp(-kk * tt / mm))
    q = T(r'Một vật khối lượng <m> kg rơi từ trạng thái nghỉ, chịu lực cản không khí tỉ lệ với vận tốc với hệ số $k = <k>\,kg/s$, tức vận tốc $v(t)$ thỏa mãn $<m>v\' = <m>g - <k>v$ (lấy $g = 9{,}8\,m/s^2$). Vận tốc của vật sau <t> giây (làm tròn đến hàng phần chục, đơn vị m/s) là', m=mm, k=vn(kk, 1).rstrip('0').rstrip(',').replace(',', '{,}'), t=tt)
    ks, vms = vn(kk, 1).rstrip('0').rstrip(',').replace(',', '{,}'), vn(vmax, 1).rstrip('0').rstrip(',').replace(',', '{,}')
    ex = steps(T(r"$v' + \dfrac{<k>}{<m>}v = 9{,}8$ (tuyến tính cấp một), $v(0) = 0$", k=ks, m=mm), T(r'$v(t) = \dfrac{mg}{k}\left(1 - e^{-kt/m}\right) = <vm>\left(1 - e^{-<c>t}\right)$', vm=vms, c='' if kk == mm else vn(kk / mm, 3).rstrip('0').rstrip(',').replace(',', '{,}')),
               T(r'$v(<t>) = <vm>\left(1 - e^{-<x>}\right) \approx <ok>$', t=tt, vm=vms, x=vn(kk * tt / mm, 2).rstrip('0').rstrip(',').replace(',', '{,}'), ok=vn(ok, 1).replace(',', '{,}')))
    return NQ(q, ok, [vmax, G * tt, vmax * math.exp(-kk * tt / mm), ok / 2], ex, fmt=f1)


# ---------- Câu 36 – 39: tích phân bội, tích phân đường ----------
def s36(rng, k):
    v, a = k % 5, rng.choice([1, 2, 3])
    if v == 0:
        ok = R(32 * a ** 3, 9)
        q = T(r'Trong mặt phẳng $Oxy$, cho miền $D = \{(x,y): x^2 + y^2 \le <c>x\}$. Chuyển sang tọa độ cực (khi đó biên của $D$ là $r = <c>\cos\varphi$), giá trị của tích phân $\displaystyle\iint_D \sqrt{x^2 + y^2}\,dxdy$ bằng', c=2 * a)
        return NQ(q, ok, [ok / 2, R(8 * a ** 3, 3), ok * 3, R(16 * a ** 3, 3)], T(r'$\displaystyle\int_{-\pi/2}^{\pi/2}d\varphi\int_0^{<c>\cos\varphi} r^2\,dr = \dfrac{<e>}{3}\int_{-\pi/2}^{\pi/2}\cos^3\varphi\,d\varphi$ và $\displaystyle\int_{-\pi/2}^{\pi/2}\cos^3\varphi\,d\varphi = \dfrac43$.', c=2 * a, e=8 * a ** 3))
    if v == 1:
        b = a + rng.choice([1, 2])
        ok = R(b ** 4 - a ** 4, 8)
        q = T(r'Cho miền $D = \{(x,y): <a2> \le x^2 + y^2 \le <b2>,\ x \ge 0,\ y \ge 0\}$. Giá trị của tích phân $\displaystyle\iint_D xy\,dxdy$ bằng', a2=a * a, b2=b * b)
        return NQ(q, ok, [ok * 2, ok / 2, R(b ** 4, 8), R(b ** 2 - a ** 2, 4)], T(r'$\displaystyle\int_0^{\pi/2}\sin\varphi\cos\varphi\,d\varphi\int_<a>^<b> r^3\,dr = \dfrac12\cdot\dfrac{<b>^4 - <a>^4}{4}$.', a=a, b=b))
    if v == 2:
        c = rng.choice([1, 2, 3, 4])
        ok = pi * (exp(c) - 1)
        q = T(r'Cho miền $D = \{(x,y): x^2 + y^2 \le <c>\}$. Giá trị của tích phân $\displaystyle\iint_D e^{x^2 + y^2}\,dxdy$ bằng', c=c)
        return NQ(q, ok, [pi * exp(c), 2 * ok, ok / 2, pi * (exp(c) + 1)], T(r'$\displaystyle\int_0^{2\pi}d\varphi\int_0^{\sqrt{<c>}} re^{r^2}\,dr = 2\pi\cdot\dfrac{e^{<c>} - 1}{2}$.', c=c))
    if v == 3:
        a, b = rng.choice([(2, 3), (1, 2), (3, 1), (2, 1), (1, 3), (3, 2)])
        ok = pi * R(a * b * (a * a + b * b), 4)
        q = T(r'Cho miền $D = \left\{(x,y): \dfrac{x^2}{<a2>} + \dfrac{y^2}{<b2>} \le 1\right\}$. Dùng phép đổi biến $x = <a>r\cos\varphi,\ y = <b>r\sin\varphi$ (Jacobian bằng $<j>r$), giá trị của tích phân $\displaystyle\iint_D (x^2 + y^2)\,dxdy$ bằng',
              a2=a * a, b2=b * b, a='' if a == 1 else a, b='' if b == 1 else b, j=a * b)
        return NQ(q, ok, [ok / (a * b) if a * b > 1 else ok * 2, ok * 2 if a * b > 1 else ok / 2, pi * R(a * a + b * b, 2), pi * a * b], T(r'$\displaystyle\int_0^{2\pi}\!\!\int_0^1 (<a2>\cos^2\varphi + <b2>\sin^2\varphi)\,<j>r^3\,dr\,d\varphi = \dfrac{<j>}{4}\cdot\pi(<a2> + <b2>)$.', a2=a * a, b2=b * b, j=a * b))
    ok = R(2 * a ** 3, 3)
    q = T(r'Cho $D$ là nửa hình tròn $\{(x,y): x^2 + y^2 \le <a2>,\ y \ge 0\}$. Giá trị của tích phân $\displaystyle\iint_D y\,dxdy$ bằng', a2=a * a)
    return NQ(q, ok, [ok * 2, R(a ** 3, 3), pi * R(a ** 3, 3), pi * R(a * a, 2)], T(r'$\displaystyle\int_0^{\pi}\sin\varphi\,d\varphi\int_0^<a> r^2\,dr = 2\cdot\dfrac{<a>^3}{3}$.', a=a))


def s37(rng, k):
    v, a = k % 5, rng.choice([1, 2, 3])
    if v == 0:
        ok = pi * R(a ** 6, 3)
        q = T(r'Cho $V$ là miền giới hạn bởi mặt $z = x^2 + y^2$ và mặt phẳng $z = <a2>$. Giá trị của tích phân $\displaystyle\iiint_V z\,dxdydz$ bằng', a2=a * a)
        return NQ(q, ok, [ok / 2, pi * R(a ** 6, 4), ok * 2, pi * R(a ** 6, 2)], T(r'Tọa độ trụ: $\displaystyle\int_0^{2\pi}d\varphi\int_0^<a> r\cdot\dfrac{<a4> - r^4}{2}\,dr$.', a=a, a4=a ** 4))
    if v == 1:
        ok = pi * R(a ** 4, 4)
        q = T(r'Cho $V = \{(x,y,z): x^2 + y^2 + z^2 \le <a2>,\ z \ge 0\}$. Giá trị của tích phân $\displaystyle\iiint_V z\,dxdydz$ bằng', a2=a * a)
        return NQ(q, ok, [ok * 2, ok / 2, pi * R(2 * a ** 3, 3), pi * R(a ** 4, 3)], T(r'Tọa độ cầu: $\displaystyle\int_0^{2\pi}d\varphi\int_0^{\pi/2}\cos\theta\sin\theta\,d\theta\int_0^<a>\rho^3\,d\rho = 2\pi\cdot\dfrac12\cdot\dfrac{<a>^4}{4}$.', a=a))
    if v == 2:
        a = rng.choice([1, 2, 3, 4])
        ok = R(a ** 4, 24)
        q = T(r'Cho $V$ là tứ diện giới hạn bởi các mặt phẳng $x = 0,\ y = 0,\ z = 0$ và $x + y + z = <a>$. Giá trị của tích phân $\displaystyle\iiint_V x\,dxdydz$ bằng', a=a)
        return NQ(q, ok, [R(a ** 4, 6), R(a ** 4, 12), R(a ** 3, 6), R(a ** 4, 120)], T(r'$\displaystyle\int_0^<a> x\cdot\dfrac{(<a> - x)^2}{2}\,dx = \dfrac{<a>^4}{24}$.', a=a))
    if v == 3:
        ok = pi * R(a ** 5, 10)
        q = T(r'Cho $V$ là miền giới hạn bởi mặt nón $z = \sqrt{x^2 + y^2}$ và mặt phẳng $z = <a>$. Giá trị của tích phân $\displaystyle\iiint_V (x^2 + y^2)\,dxdydz$ bằng', a=a)
        return NQ(q, ok, [ok / 2, ok * 2, pi * R(a ** 5, 6), pi * R(a ** 5, 5) * 2], T(r'Tọa độ trụ: $\displaystyle\int_0^{2\pi}d\varphi\int_0^<a> r^3(<a> - r)\,dr = 2\pi\cdot\dfrac{<a>^5}{20}$.', a=a))
    a, b, c = rng.choice([(1, 2, 3), (2, 1, 2), (2, 3, 1), (1, 1, 2), (3, 2, 2), (2, 2, 1)])
    ok = integrate(x + y * z, (x, 0, a), (y, 0, b), (z, 0, c))
    q = T(r'Trong hệ trục tọa độ $Oxyz$, cho miền $V = \{(x,y,z): 0 \le x \le <a>;\ 0 \le y \le <b>;\ 0 \le z \le <c>\}$. Giá trị của tích phân $\displaystyle\iiint_V (x + yz)\,dxdydz$ bằng', a=a, b=b, c=c)
    return NQ(q, ok, [R(a * a * b * c, 2), R(a * b * b * c * c, 4), ok * 2, R(a * a, 2) + R(b * b * c * c, 4)], T(r'$\dfrac{<a>^2}{2}\cdot<b>\cdot<c> + <a>\cdot\dfrac{<b>^2}{2}\cdot\dfrac{<c>^2}{2} = <ok>$.', a=a, b=b, c=c, ok=ok))


def s38(rng, k):
    v = k % 5
    if v == 0:
        a = rng.choice([1, 2, 3, 4, 5] if k < 20 else [6, 7, 8])
        ok = R(a ** 3, 2)
        q = T(r'Cho $L$ là cung tròn $x^2 + y^2 = <a2>$ nằm trong góc phần tư thứ nhất. Dùng tham số hóa $x = <a>\cos t,\ y = <a>\sin t$, giá trị của tích phân $\displaystyle\int_L xy\,ds$ bằng', a2=a * a, a='' if a == 1 else a)
        return NQ(q, ok, [R(a * a, 2), a ** 3, R(a ** 3, 4), pi * R(a ** 3, 4)], T(r'$ds = <a>\,dt$: $\displaystyle\int_0^{\pi/2} <a>^3\sin t\cos t\,dt = \dfrac{<a>^3}{2}$.', a=a))
    if v == 1:
        (x1, y1), (dx, dy) = rng.choice([(0, 0), (1, 0), (0, 1), (1, 1)]), rng.choice([(3, 4), (4, 3), (6, 8), (5, 12)])
        p, qq = rng.choice([(1, 1), (2, 1), (1, 2), (3, 1)])
        ln = sp.sqrt(dx * dx + dy * dy)
        ok = ln * (p * (x1 + R(dx, 2)) + qq * (y1 + R(dy, 2)))
        q = T(r'Trong mặt phẳng $Oxy$, cho $L$ là đoạn thẳng nối từ $A(<x1>;<y1>)$ đến $B(<x2>;<y2>)$. Giá trị của tích phân $\displaystyle\int_L (<e>)\,ds$ bằng', x1=x1, y1=y1, x2=x1 + dx, y2=y1 + dy, e=p * x + qq * y)
        ex = T(r'Tham số hóa $x = <x1> + <dx>t,\ y = <y1> + <dy>t$, $0 \le t \le 1$, $ds = <l>\,dt$; hàm dưới dấu tích phân bậc nhất nên tích phân bằng độ dài đoạn thẳng nhân giá trị tại trung điểm.', x1=x1, dx=dx, y1=y1, dy=dy, l=ln)
        return NQ(q, ok, [ok / ln, ok * 2, ln * (p * (x1 + dx) + qq * (y1 + dy)), ok / 2], ex)
    if v == 2:
        a, b = rng.choice([(3, 4), (4, 3), (1, 1), (6, 8), (5, 12)])
        ln = sp.sqrt(a * a + b * b)
        ok = 2 * pi ** 2 * b * ln
        q = T(r'Cho $L$ là một vòng của đường xoắn ốc $x = <a>\cos t,\ y = <a>\sin t,\ z = <b>t$ với $0 \le t \le 2\pi$. Giá trị của tích phân $\displaystyle\int_L z\,ds$ bằng', a='' if a == 1 else a, b='' if b == 1 else b)
        ex = T(r'$ds = \sqrt{<a>^2 + <b>^2}\,dt = <l>\,dt$; $\displaystyle\int_0^{2\pi} <b>t\cdot<l>\,dt$.', a=a, b=b, l=ln)
        return NQ(q, ok, [2 * pi ** 2 * b, ok / 2, ok * 2, 2 * pi * b * ln], ex)
    if v == 3:
        a, c = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, 5])
        ok = 2 * pi * a * (a * a + c)
        q = T(r'Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = <a2>$ với mật độ khối lượng tại mỗi điểm là $\rho(x,y) = x^2 + y^2 + <c>$. Khối lượng của sợi dây, tức $\displaystyle\oint_L \rho\,ds$, bằng', a2=a * a, c=c)
        return NQ(q, ok, [pi * a * a * (a * a + c), 2 * pi * (a * a + c), ok / 2, 2 * pi * a * c], T(r'Trên $L$, $\rho = <a2> + <c>$ là hằng số nên khối lượng bằng $(<a2> + <c>)\cdot2\pi\cdot<a>$.', a2=a * a, c=c, a=a))
    x1, yv, ok = rng.choice([(r'\sqrt3', r'\dfrac32', R(7, 3)), (r'2\sqrt2', '4', R(26, 3)), (r'\sqrt8', '4', R(26, 3)), (r'\sqrt{15}', r'\dfrac{15}{2}', R(63, 3))] if k < 20 else [(r'2\sqrt6', '12', R(124, 3)), (r'\sqrt{35}', r'\dfrac{35}{2}', R(215, 3))])
    q = T(r'Cho $L$ là cung parabol $y = \dfrac{x^2}{2}$ đi từ $O(0;0)$ đến $A\left(<x1>;<y>\right)$. Giá trị của tích phân $\displaystyle\int_L x\,ds$ bằng', x1=x1, y=yv)
    return NQ(q, ok, [ok + R(1, 3), ok / 2, ok * R(3, 2), ok - 1], T(r'$ds = \sqrt{1 + x^2}\,dx$; $\displaystyle\int_0^{<x1>} x\sqrt{1 + x^2}\,dx = \dfrac{(1 + x^2)^{3/2}}{3}\Big|_0^{<x1>}$.', x1=x1))


def s39(rng, k):
    v = k % 5
    if v == 0:
        c, d, Rr = rng.choice([1, 2, 3]), rng.choice([1, 2, 3]), rng.choice([1, 2, 3])
        ok = (c + d) * pi * Rr * Rr
        q = T(r'Một chất điểm chuyển động đúng một vòng theo chiều ngược kim đồng hồ trên đường tròn $x^2 + y^2 = <R2>$ (đơn vị: mét) dưới tác dụng của lực $\vec F = (<P>;\ <Q>)$ (đơn vị: Niu tơn). Công của lực sinh ra, tức $\displaystyle\oint P\,dx + Q\,dy$, bằng', R2=Rr * Rr, P=-c * y, Q=d * x)
        ex = T(r'Công thức Green: $\displaystyle\iint_{x^2+y^2\le<R2>}\left(\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y}\right)dxdy = <s>\cdot\pi\cdot<R2>$.', R2=Rr * Rr, s=c + d)
        return NQ(q, ok, [abs(d - c) * pi * Rr * Rr if c != d else 0, (c + d) * 2 * pi * Rr, ok * 2, ok / 2], ex)
    if v == 1:
        a, b = rng.choice([1, 2, 3]), rng.choice([1, 2, 3])
        P, Qf = x ** 2 - a * y, b * x + y ** 2
        ok = integrate(P.subs(y, x ** 2) + Qf.subs(y, x ** 2) * 2 * x, (x, 0, 1))
        q = T(r'Cho $L$ là cung parabol $y = x^2$ đi từ $O(0;0)$ đến $A(1;1)$. Giá trị của tích phân $\displaystyle\int_L (<P>)\,dx + (<Q>)\,dy$ bằng', P=P, Q=Qf)
        line = integrate(P.subs(y, x) + Qf.subs(y, x), (x, 0, 1))
        return NQ(q, ok, [line, ok + R(1, 3), ok - R(1, 3), ok * 2], T(r'Thay $y = x^2,\ dy = 2x\,dx$: $\displaystyle\int_0^1\left[<e>\right]dx = <ok>$.', e=sp.expand(P.subs(y, x ** 2) + Qf.subs(y, x ** 2) * 2 * x), ok=ok))
    if v == 2:
        a, b, (p, qq) = rng.choice([1, 2, 3]), rng.choice([1, 2]), rng.choice([(1, 2), (2, 1), (2, 2), (1, 1), (3, 1)])
        u = x ** 2 * y + a * x + b * y ** 3
        ok = u.subs({x: p, y: qq})
        q = T(r'Cho $L$ là một đường cong trơn bất kỳ đi từ $O(0;0)$ đến $A(<p>;<q>)$. Biết biểu thức dưới dấu tích phân là vi phân toàn phần của một hàm $u(x,y)$, giá trị của tích phân $\displaystyle\int_L (<P>)\,dx + (<Q>)\,dy$ bằng', p=p, q=qq, P=diff(u, x), Q=diff(u, y))
        return NQ(q, ok, [ok - a * p, p * p * qq + b * qq ** 3 + a, ok + p, 2 * ok], T(r'Tích phân không phụ thuộc đường đi; $u = <u>$ và kết quả bằng $u(<p>;<q>) - u(0;0)$.', u=u, p=p, q=qq))
    if v == 3:
        a, b, Rr = rng.choice([1, 2]), rng.choice([1, 2, 3]), rng.choice([1, 2])
        ok = 3 * (a + b) * pi * R(Rr ** 4, 4)
        q = T(r'Cho $C$ là đường tròn $x^2 + y^2 = <R2>$ lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\displaystyle\oint_C (<P>)\,dx + (<Q>)\,dy$ bằng', R2=Rr * Rr, P=x ** 2 - a * y ** 3, Q=b * x ** 3 + y ** 2)
        ex = T(r'$\displaystyle\iint_{x^2+y^2\le<R2>}(<e>)\,dxdy = (<s>)\cdot\dfrac{\pi\cdot<R>^4}{4}$.', R2=Rr * Rr, e=3 * b * x ** 2 + 3 * a * y ** 2, s=3 * a + 3 * b, R=Rr)
        return NQ(q, ok, [ok * 2, ok / 2, 3 * (a + b) * pi * Rr * Rr, 0], ex)
    (x1, y1), (x2, y2) = rng.choice([((0, 0), (2, 1)), ((1, 0), (3, 2)), ((0, 1), (2, 3)), ((1, 1), (3, 2)), ((0, 0), (3, 1))])
    u = x ** 2 / 2 + x * y - y ** 2 / 2
    ok = u.subs({x: x2, y: y2}) - u.subs({x: x1, y: y1})
    q = T(r'Một chất điểm di chuyển theo đoạn thẳng từ $A(<x1>;<y1>)$ đến $B(<x2>;<y2>)$ (đơn vị: mét) dưới tác dụng của lực $\vec F = (x + y;\ x - y)$ (đơn vị: Niu tơn). Công của lực, tức $\displaystyle\int_{AB} (x + y)\,dx + (x - y)\,dy$, bằng', x1=x1, y1=y1, x2=x2, y2=y2)
    return NQ(q, ok, [-ok, u.subs({x: x2, y: y2}), ok + 1, ok * 2], r'$\dfrac{\partial P}{\partial y} = \dfrac{\partial Q}{\partial x} = 1$ nên trường lực có thế $u = \dfrac{x^2}{2} + xy - \dfrac{y^2}{2}$; công bằng $u(B) - u(A)$.')


# ---------- Câu 43–45: nhóm câu hỏi hàm nhiều biến ----------
def g2(rng, k):
    v = k % 4
    if v == 0:
        p, qq = rng.choice([(2, 1), (3, 1), (3, 2), (4, 1)])
        f = x ** 3 + 3 * x * y ** 2 - 3 * (p * p + qq * qq) * x - 6 * p * qq * y
        stem = T(r'Cho hàm số $f(x,y) = <f>$.', f=f)
        fmin = f.subs({x: p, y: qq})
        qs = [NQ(T(r"Giá trị của $f''_{xx}(<p>;<q>) + f''_{yy}(<p>;<q>)$ bằng", p=p, q=qq), 12 * p, [6 * p, 6 * p + 6 * qq, 0, 12 * qq], r"$f''_{xx} = 6x$, $f''_{yy} = 6x$."),
              NQ('Số điểm dừng của hàm số đã cho bằng', 4, [2, 3, 1], T(r'$x^2 + y^2 = <a>$ và $xy = <b>$ cho bốn điểm $(\pm<p>;\pm<q>),\ (\pm<q>;\pm<p>)$ (cùng dấu).', a=p * p + qq * qq, b=p * qq, p=p, q=qq)),
              NQ('Giá trị cực tiểu của hàm số đã cho bằng', fmin, [-fmin, f.subs({x: qq, y: p}), fmin - 2, fmin + 2], T(r'Tại $(<p>;<q>)$: $AC - B^2 = 36(<p>^2 - <q>^2) > 0$ và $A = <A> > 0$ nên là cực tiểu.', p=p, q=qq, A=6 * p))]
        return {'stem': stem, 'questions': qs}
    if v == 1:
        p, qq = rng.choice([(2, 1), (1, 2), (2, 3), (3, 2), (5, 2), (2, 5), (3, 1), (4, 2)])
        a, b = p * p * qq, p * qq * qq
        f = x * y + a / x + b / y
        stem = T(r'Một xưởng cần làm một thùng chứa hình hộp chữ nhật; sau khi rút gọn, chi phí vật liệu (đơn vị tiền) theo hai kích thước đáy $x > 0,\ y > 0$ (mét) là $f(x,y) = xy + \dfrac{<a>}{x} + \dfrac{<b>}{y}$.', a=a, b=b)
        qs = [NQ(r"Giá trị của $f'_x(1;1)$ bằng", 1 - a, [a - 1, -a, 1 + a, 1 - b if a != b else 2 - a], r"$f'_x = y - \dfrac{%d}{x^2}$." % a),
              NQ(T(r"Giá trị của $f''_{xx}(<p>;<q>)$ bằng", p=p, q=qq), R(2 * a, p ** 3), [R(a, p ** 3), -R(2 * a, p ** 3), R(2 * a, p * p), R(2 * b, qq ** 3) if R(2 * b, qq ** 3) != R(2 * a, p ** 3) else 7], r"$f''_{xx} = \dfrac{%d}{x^3}$." % (2 * a)),
              NQ('Chi phí vật liệu nhỏ nhất (giá trị cực tiểu của $f$) bằng', 3 * p * qq, [2 * p * qq, p * qq, 3 * p * qq + p, a + b], T(r"$f'_x = f'_y = 0 \Rightarrow y = \dfrac{<a>}{x^2},\ x = \dfrac{<b>}{y^2} \Rightarrow x = <p>,\ y = <q>$; $f(<p>;<q>) = <m>$.", a=a, b=b, p=p, q=qq, m=3 * p * qq))]
        return {'stem': stem, 'questions': qs}
    if v == 2:
        a, c = rng.choice([1, 2, 3]), rng.choice([0, 5, 10, 2])
        f = x ** 3 + y ** 3 - 3 * a * x * y + c
        stem = T(r'Cho hàm số $f(x,y) = <f>$.', f=f)
        p, qq = rng.choice([(1, 2), (2, 1), (1, 3), (2, 3)])
        fy = 3 * qq * qq - 3 * a * p
        qs = [NQ(T(r"Giá trị của $f'_y(<p>;<q>)$ bằng", p=p, q=qq), fy, [3 * p * p - 3 * a * qq, 3 * qq * qq, fy + 3 * a * p + 1, -fy], T(r"$f'_y = 3y^2 - <c>x$.", c=3 * a)),
              NQ('Số điểm cực trị của hàm số đã cho bằng', 1, [2, 0, 3], T(r'Điểm dừng: $(0;0)$ (không là cực trị vì $AC - B^2 = -<d> < 0$) và $(<a>;<a>)$ (cực tiểu).', d=9 * a * a, a=a)),
              NQ('Giá trị cực tiểu của hàm số đã cho bằng', c - a ** 3, [c, c + a ** 3, c - 3 * a ** 3, c - a ** 3 - 1], T(r'$f(<a>;<a>) = <a>^3 + <a>^3 - 3\cdot<a>^3 + <c>$.', a=a, c=c))]
        return {'stem': stem, 'questions': qs}
    a = rng.choice([1, 2, 3, 4])
    f = (x ** 2 + y ** 2) * exp(-a * x)
    stem = T(r'Cho hàm số $f(x,y) = (x^2 + y^2)e^{-<a>x}$.', a='' if a == 1 else a)
    p, qq = rng.choice([(1, 1), (1, 2), (2, 1), (0, 1)])
    ok1 = diff(f, y).subs({x: p, y: qq})
    saddle = f.subs({x: R(2, a), y: 0})
    qs = [NQ(T(r"Giá trị của $f'_y(<p>;<q>)$ bằng", p=p, q=qq), ok1, [diff(f, x).subs({x: p, y: qq}), 2 * qq, ok1 / 2, 2 * qq * exp(a * p)], T(r"$f'_y = 2ye^{-<a>x}$.", a='' if a == 1 else a)),
          NQ('Số điểm dừng của hàm số đã cho bằng', 2, [1, 3, 0], T(r"$f'_y = 0 \Rightarrow y = 0$; $f'_x = e^{-<a>x}(2x - <a>x^2 - <a>y^2) = 0 \Rightarrow x = 0$ hoặc $x = \dfrac{2}{<a>}$.", a='' if a == 1 else a)),
          NQ('Giá trị cực tiểu của hàm số đã cho bằng', 0, [saddle, -saddle, 1], T(r'$(0;0)$ là cực tiểu với $f = 0$ (vì $f \ge 0$); điểm dừng còn lại có $AC - B^2 < 0$ nên không là cực trị.'))]
    return {'stem': stem, 'questions': qs}


# ---------- Câu 47 – 50: trả lời ngắn ----------
def s47(rng, k):
    v = k % 3
    if v == 0:
        be, ga, de = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, 4]), rng.choice([20, 30, 2026, 50, 100])
        f = x ** 2 + 2 * y ** 2 + z ** 2 - 2 * x * y - 2 * be * y - 2 * ga * z + de
        ask_pt = rng.random() < .5
        if ask_pt:
            q = T(r'Gọi $M(a;b;c)$ là điểm cực trị của hàm số $f(x,y,z) = <f>$. Tính $a + 2b + 3c$.', f=f)
            return SQ(q, str(3 * be + 3 * ga), T(r"Giải $f'_x = f'_y = f'_z = 0$ được $M(<b>;<b>;<g>)$.", b=be, g=ga))
        q = T(r'Tìm giá trị cực tiểu của hàm số $f(x,y,z) = <f>$.', f=f)
        return SQ(q, str(de - be * be - ga * ga), T(r'Điểm dừng $(<b>;<b>;<g>)$; dạng toàn phương xác định dương nên đó là điểm cực tiểu, $f = <m>$.', b=be, g=ga, m=de - be * be - ga * ga))
    if v == 1:
        a, c = rng.choice([1, 2, 3, 4]), rng.choice([10, 20, 30, 64, 100])
        f = x ** 3 + y ** 3 - 3 * a * x * y + c
        return SQ(T(r'Tìm giá trị cực tiểu của hàm số $f(x,y) = <f>$.', f=f), str(c - a ** 3), T(r'Điểm dừng $(0;0)$ (không là cực trị) và $(<a>;<a>)$ (cực tiểu), $f(<a>;<a>) = <m>$.', a=a, m=c - a ** 3))
    a, c = rng.choice([1, 2, 3]), rng.choice([0, 5, 10, 20])
    f = 3 * a * x * y - x ** 3 - y ** 3 + c
    return SQ(T(r'Tìm giá trị cực đại của hàm số $f(x,y) = <f>$.', f=f), str(c + a ** 3), T(r'Điểm dừng $(0;0)$ (không là cực trị) và $(<a>;<a>)$ (cực đại vì $A = -<s> < 0,\ AC - B^2 > 0$), $f(<a>;<a>) = <m>$.', a=a, s=6 * a, m=c + a ** 3))


def s48(rng, k):
    v = k % 6
    PSr = lambda body: r'\displaystyle\sum_{n=1}^{+\infty}%s' % body
    if v == 0:
        p, qq = rng.choice([(3, 2), (5, 2), (5, 3), (4, 3), (7, 2), (7, 3)])
        al, be = rng.choice([(5, 3), (2, 3), (3, 2), (1, 4)])
        q = T(r'Biết chuỗi $<s>$ có bán kính hội tụ bằng $\dfrac{a}{b}$, với $\dfrac{a}{b}$ là phân số tối giản, $a, b \in \mathbb{N}^*$. Tính $<e>$.', s=PSr(r'\dfrac{%d^n x^n}{n + %d^n}' % (p, qq)), e=al * a_s + be * b_s)
        return SQ(q, str(al * qq + be * p), T(r'$\sqrt[n]{|a_n|} \to \dfrac{<p>}{<q>}$ nên $R = \dfrac{<q>}{<p>}$.', p=p, q=qq))
    if v == 1:
        p, qq = rng.choice([(2, 5), (3, 4), (2, 7), (3, 5), (4, 9)])
        q = T(r'Biết chuỗi $<s>$ có bán kính hội tụ bằng $\dfrac{a}{b}$, với $\dfrac{a}{b}$ là phân số tối giản, $a, b \in \mathbb{N}^*$. Tính $a + b$.', s=PSr(r'\dfrac{(%d^n + %d^n)x^n}{n^2}' % (p, qq)))
        return SQ(q, str(1 + max(p, qq)), T(r'$\sqrt[n]{|a_n|} \to <m>$ nên $R = \dfrac{1}{<m>}$.', m=max(p, qq)))
    if v == 2:
        body, Rr, how = rng.choice([
            (r'\dfrac{(2n)!}{(n!)^2}x^n', R(1, 4), r'$\dfrac{a_{n+1}}{a_n} = \dfrac{(2n+1)(2n+2)}{(n+1)^2} \to 4$'),
            (r'\dfrac{(3n)!}{(n!)^3}x^n', R(1, 27), r'$\dfrac{a_{n+1}}{a_n} = \dfrac{(3n+1)(3n+2)(3n+3)}{(n+1)^3} \to 27$'),
            (r'\dfrac{n^n}{n!\,e^{2n}}x^n', None, ''),
            (r'\dfrac{(n!)^2}{(2n)!}3^nx^n', R(4, 3), r'$\dfrac{a_{n+1}}{a_n} = \dfrac{3(n+1)^2}{(2n+1)(2n+2)} \to \dfrac34$'),
            (r'\dfrac{(2n)!}{(n!)^2\,5^n}x^n', R(5, 4), r'$\dfrac{a_{n+1}}{a_n} = \dfrac{(2n+1)(2n+2)}{5(n+1)^2} \to \dfrac45$'),
        ])
        if Rr is None:
            raise Retry
        q = T(r'Biết chuỗi $<s>$ có bán kính hội tụ bằng $\dfrac{a}{b}$, với $\dfrac{a}{b}$ là phân số tối giản, $a, b \in \mathbb{N}^*$. Tính $a + b$.', s=PSr(body))
        return SQ(q, str(Rr.p + Rr.q), how + T(r' nên $R = <R>$.', R=Rr))
    if v == 3:
        c, r = rng.choice([1, 2, -1, 3]), rng.choice([2, 3, 4])
        q = T(r'Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $<s>$? (Chú ý xét riêng hai đầu mút của khoảng hội tụ.)', s=PSr(r'\dfrac{%s^{2n}}{n\cdot%d^n}' % (pw(c), r * r)))
        return SQ(q, str(2 * r - 1), T(r'Hội tụ khi $(<e>)^2 < <r2>$; tại hai đầu mút chuỗi trở thành $\sum\dfrac1n$ phân kỳ, nên miền hội tụ là khoảng $(<a>;<b>)$.', e=x - c, r2=r * r, a=c - r, b=c + r))
    if v == 4:
        c, p = rng.choice([1, 2, -2, 0, 3]), rng.choice([2, 3, 4, 5])
        q = T(r'Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $<s>$? (Chú ý xét riêng hai đầu mút của khoảng hội tụ.)', s=PSr(r'\dfrac{%s^{n}}{n\cdot%d^n}' % (pw(c), p)))
        return SQ(q, str(2 * p), T(r'Bán kính hội tụ $R = <p>$. Tại $x = <b>$ chuỗi là $\sum\dfrac1n$ phân kỳ; tại $x = <a>$ chuỗi là $\sum\dfrac{(-1)^n}{n}$ hội tụ. Miền hội tụ: $[<a>;<b>)$.', p=p, a=c - p, b=c + p))
    c, p = rng.choice([1, 2, -1, 0]), rng.choice([2, 3, 4])
    q = T(r'Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $<s>$? (Chú ý xét riêng hai đầu mút của khoảng hội tụ.)', s=PSr(r'\dfrac{%s^{n}}{n^2\cdot%d^n}' % (pw(c), p)))
    return SQ(q, str(2 * p + 1), T(r'Bán kính hội tụ $R = <p>$; tại hai đầu mút chuỗi hội tụ tuyệt đối (so sánh với $\sum\dfrac{1}{n^2}$). Miền hội tụ: $[<a>;<b>]$.', p=p, a=c - p, b=c + p))


a_s, b_s = symbols('a b')


def pw(c):
    """Cơ số của lũy thừa (x - c): viết 'x' khi c = 0, ngược lại '(x - c)'."""
    return 'x' if c == 0 else '(%s)' % tx(x - c)


def rounded(val):
    if abs(val - round(val)) > 0.47:
        raise Retry
    return str(int(round(val)))


def s49(rng, k):
    v = k % 4
    if v == 0:
        r1, r2 = rng.choice([(1, 2), (2, 3), (1, 3), (-1, 2), (1, -1), (2, -1)])
        A_, B_ = rng.choice([(1, 0), (0, 1), (1, 1), (2, -1), (2, 1)])
        x0 = rng.choice([1, 2, 3])
        val = A_ * math.exp(r1 * x0) + B_ * math.exp(r2 * x0)
        if abs(val) > 5000 or abs(val) < 3:
            raise Retry
        q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <y0>;\ y\'(0) = <y1>$. Tính $y(<x0>)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.', o=ode2(-(r1 + r2), r1 * r2, '0'), y0=A_ + B_, y1=A_ * r1 + B_ * r2, x0=x0)
        return SQ(q, rounded(val), T(r'$y = C_1<e1> + C_2<e2>$ với $C_1 = <A>,\ C_2 = <B>$; $y(<x0>) \approx <v>$.', e1=ex_(r1), e2=ex_(r2), A=A_, B=B_, x0=x0, v=vn(val, 2).replace(',', '{,}')))
    if v == 1:
        r, A_, B_, x0 = rng.choice([1, 2, -1]), rng.choice([1, 2, 3]), rng.choice([1, 2, -1, 3]), rng.choice([1, 2, 3])
        val = (A_ + B_ * x0) * math.exp(r * x0)
        if abs(val) > 5000 or abs(val) < 0.6:
            raise Retry
        mult = 100 if abs(val) < 3 else 1
        q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <y0>;\ y\'(0) = <y1>$. Tính $<m>y(<x0>)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.', o=ode2(-2 * r, r * r, '0'), y0=A_, y1=A_ * r + B_, x0=x0, m=r'100\cdot ' if mult > 1 else '')
        return SQ(q, rounded(val * mult), T(r'Nghiệm kép $k = <r>$: $y = (<A> + <B>x)<e>$; $y(<x0>) \approx <v>$.', r=r, A=A_, B='(%d)' % B_ if B_ < 0 else B_, e=ex_(r), x0=x0, v=vn(val, 3).replace(',', '{,}')))
    if v == 2:
        w, A_, B_ = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, -2]), rng.choice([1, 2, 3, 4])
        ask = rng.choice([(r'\dfrac{\pi}{%d}' % (2 * w) if w > 1 else r'\dfrac{\pi}{2}', B_), (r'\dfrac{\pi}{%d}' % w if w > 1 else r'\pi', -A_)])
        q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <y0>;\ y\'(0) = <y1>$. Tính $y\left(<x0>\right)$.', o=ode2(0, w * w, '0'), y0=A_, y1=B_ * w, x0=ask[0])
        return SQ(q, str(ask[1]), T(r'$y = <A><c> + <B><s>$.', A=A_, c=tr('cos', w), B=B_, s=tr('sin', w)))
    r1, r2 = rng.choice([(1, 2), (1, 3), (2, 3), (1, -1)])
    cc = rng.choice([2, 3, 4]) * r1 * r2
    yp = R(cc, r1 * r2)
    A_, B_, x0 = rng.choice([(0, 1), (1, 0), (1, 1)]), None, rng.choice([1, 2])
    A_, B_ = A_
    val = float(yp) + A_ * math.exp(r1 * x0) + B_ * math.exp(r2 * x0)
    if abs(val) > 5000:
        raise Retry
    q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <y0>;\ y\'(0) = <y1>$. Tính $y(<x0>)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.', o=ode2(-(r1 + r2), r1 * r2, str(cc)), y0=yp + A_ + B_, y1=A_ * r1 + B_ * r2, x0=x0)
    return SQ(q, rounded(val), T(r'Nghiệm riêng hằng $y^* = <yp>$; $y = <yp> + C_1<e1> + C_2<e2>$ với $C_1 = <A>,\ C_2 = <B>$; $y(<x0>) \approx <v>$.', yp=yp, e1=ex_(r1), e2=ex_(r2), A=A_, B=B_, x0=x0, v=vn(val, 2).replace(',', '{,}')))


def s50(rng, k):
    v, a = k % 5, rng.choice([1, 2, 3])
    if v == 0:
        a, b = rng.choice([2, 3, 4, 6]), rng.choice([1, 2, 4, 3])
        V = integrate(x + b * y, (y, 0, x), (x, 0, a))
        body = T(r'là vật thể nằm trong góc phần tám thứ nhất, được giới hạn bởi các mặt phẳng $x = <a>,\ y = 0,\ y = x,\ z = 0,\ z = <e>$', a=a, e=x + b * y)
        ex = T(r'$V = \displaystyle\int_0^<a> dx\int_0^x (<e>)\,dy = <V>$.', a=a, e=x + b * y, V=V)
    elif v == 1:
        a = rng.choice([1, 2, 3, 6])
        V = integrate(x * x + y * y, (y, 0, a - x), (x, 0, a))
        body = T(r'là vật thể giới hạn bởi các mặt $x = 0,\ y = 0,\ z = 0,\ x + y = <a>$ và $z = x^2 + y^2$', a=a)
        ex = T(r'$V = \displaystyle\int_0^<a> dx\int_0^{<a>-x}(x^2 + y^2)\,dy = <V>$.', a=a, V=V)
    elif v == 2:
        V = None
        kq = a ** 4
        q = T(r'Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi hai mặt $z = x^2 + y^2$ và $z = <b> - x^2 - y^2$. Biết thể tích của $V$ bằng $k\pi$, tính $k$.', b=2 * a * a)
        return SQ(q, str(kq), T(r'Hai mặt cắt nhau trên đường tròn $r = <a>$: $\displaystyle\int_0^{2\pi}d\varphi\int_0^<a> (<b> - 2r^2)\,r\,dr = <k>\pi$.', a=a, b=2 * a * a, k=kq))
    elif v == 3:
        a = rng.choice([1, 2, 3])
        V = integrate(y, (y, x * x, a * a), (x, -a, a))
        body = T(r'là vật thể giới hạn bởi các mặt $y = x^2,\ y = <a2>,\ z = 0$ và $z = y$', a2=a * a)
        ex = T(r'$V = \displaystyle\int_{-<a>}^{<a>}dx\int_{x^2}^{<a2>} y\,dy = <V>$.', a=a, a2=a * a, V=V)
    else:
        c = rng.choice([v_ for v_ in (3, 4, 5, 6, 8) if v_ > a * 1.5])
        q = T(r'Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt trụ $x^2 + y^2 = <a2>$ và hai mặt phẳng $z = 0$, $x + y + z = <c>$. Biết thể tích của $V$ bằng $k\pi$, tính $k$.', a2=a * a, c=c)
        return SQ(q, str(c * a * a), T(r'$\displaystyle\iint_{x^2+y^2\le<a2>}(<c> - x - y)\,dxdy = <c>\cdot\pi\cdot<a2>$ (tích phân của $x$ và $y$ trên hình tròn bằng 0 do đối xứng).', a2=a * a, c=c))
    V = sp.nsimplify(V)
    try:
        ans, lead, name = short_num(V), 'Tính thể tích của $V$ <i>(viết kết quả dưới dạng số thập phân nếu không nguyên)</i>.', ''
    except Retry:
        ans, lead = [str(V.p)], T(r'Gọi $T$ là thể tích của $V$, tính $<d>T$.', d=V.q)
    return SQ('Trong hệ trục tọa độ $Oxyz$, cho $V$ ' + body + '. ' + lead, ans, ex)
