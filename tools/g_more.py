# Các DẠNG BỔ SUNG cho từng vị trí trong ma trận đề (ngoài dạng gốc ở g_la.py, g_an.py, g_hard.py),
# để các đề không lặp lại cùng một khuôn câu hỏi chỉ khác số. Mỗi hàm là một dạng; tham số j dùng để đổi biến thể.
import math
from sympy import pi, E, exp, log, sin, cos, tan, sqrt, atan, oo, integrate, diff, limit, simplify, Symbol
from g_core import *
from g_la import rmat, unimod, I2, I3
from g_an import form, term, ex_, tr, ode2, P14, R14

a_, b_ = symbols('a b')
As, Bs = symbols('A B')
kS = symbols('k')
rr, ph = symbols('r varphi', positive=True)
fmv = lambda v: '$%s$.' % vec(v)
fmm = lambda Z: '$' + pmat(Z) + '$.'


def pick3(ok, cands, fmt):
    """Chọn 3 phương án sai khác nhau và khác đáp án."""
    out, seen = [], {fmt(ok)}
    for c in cands:
        s = fmt(c)
        if s not in seen:
            seen.add(s)
            out.append(s)
        if len(out) == 3:
            return out
    raise Retry


# =============== Câu 2: độc lập tuyến tính, cơ sở, tọa độ ===============
def n2a(rng, j):
    u1, u2 = Matrix([[rng.randint(-2, 3) for _ in range(3)]]), Matrix([[rng.randint(-2, 3) for _ in range(3)]])
    if Matrix([u1, u2]).rank() < 2:
        raise Retry
    w = Matrix([[rng.randint(-2, 3) for _ in range(3)]])
    d = Matrix([u1, u2, w]).det()
    if d == 0:
        raise Retry
    combos = rng.sample([(1, 1), (1, -1), (2, 1), (1, 2), (-1, 2), (2, -1)], 3)
    wrongs = [(a * u1 + b * u2, a, b) for a, b in combos]
    q = T(r'Trong không gian véc tơ $\mathbb{R}^3$, cho hai véc tơ $u_1 = <a>,\ u_2 = <b>$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\mathbb{R}^3$?', a=vec(u1), b=vec(u2))
    ex = steps(T(r'<b>Đúng:</b> $<w>$ — định thức của ba véc tơ $u_1, u_2$ và véc tơ này bằng $<d> \ne 0$ nên ba véc tơ độc lập tuyến tính', w=vec(w), d=d),
               *[T(r'<b>Sai:</b> $<w> = <e>$ là tổ hợp tuyến tính của $u_1, u_2$', w=vec(v), e=a * symbols('u_1') + b * symbols('u_2')) for v, a, b in wrongs])
    return Q(q, fmv(w), [fmv(v) for v, _, _ in wrongs], ex)


def n2b(rng, j):
    B = rmat(rng, 2, 2, -2, 4)
    if B.det() == 0:
        raise Retry
    a, b = rint(rng, -3, 4, (0,)), rint(rng, -3, 4, (0,))
    v = a * B.row(0) + b * B.row(1)
    q = T(r'Trong không gian véc tơ $\mathbb{R}^2$, cho cơ sở $B = \{b_1<p>,\ b_2<q>\}$ và véc tơ $v = <v>$. Tọa độ của $v$ đối với cơ sở $B$ (tức cặp số $(x;y)$ sao cho $v = xb_1 + yb_2$) là', p=vec(B.row(0)), q=vec(B.row(1)), v=vec(v))
    ex = steps(r'$v = xb_1 + yb_2 \Leftrightarrow \begin{cases}' + tx(sp.Eq(B[0, 0] * x + B[1, 0] * y, v[0])) + r'\\ ' + tx(sp.Eq(B[0, 1] * x + B[1, 1] * y, v[1])) + r'\end{cases}$',
               T(r'Giải hệ: $x = <a>,\ y = <b>$', a=a, b=b), T(r'Tọa độ của $v$ đối với $B$: $(<a>;<b>)$', a=a, b=b))
    f = lambda c: '$(%s;%s)$.' % (tx(c[0]), tx(c[1]))
    return Q(q, f((a, b)), pick3((a, b), [(b, a), (v[0], v[1]), (a, -b), (-a, b), (a + 1, b)], f), ex)


def n2d(rng, j):
    u1, u2 = [rng.randint(-2, 3) for _ in range(3)], [rng.randint(-2, 3) for _ in range(3)]
    p, qq = rng.randint(-2, 3), rng.randint(-2, 3)
    d = sp.expand(Matrix([u1, u2, [p, qq, m_]]).det())
    if diff(d, m_) == 0:
        raise Retry
    m0 = sp.solve(d, m_)[0]
    if not m0.is_integer:
        raise Retry
    o = m0 + rng.choice([1, -1, 2])
    q = T(r'Trong không gian véc tơ $\mathbb{R}^3$, cho hệ $S = \{u_1<a>,\ u_2<b>,\ u_3<c>\}$ với $m$ là tham số. Hệ $S$ là một cơ sở của $\mathbb{R}^3$ khi và chỉ khi', a=vec(u1), b=vec(u2), c=vec([p, qq, m_]))
    ex = steps(r'Ba véc tơ trong $\mathbb{R}^3$ là cơ sở $\Leftrightarrow$ chúng độc lập tuyến tính $\Leftrightarrow$ định thức của chúng khác 0',
               T(r'$\det(u_1, u_2, u_3) = <d>$', d=d), T(r'$<d> \ne 0 \Leftrightarrow m \ne <m0>$', d=d, m0=m0))
    return Q(q, T(r'$m \ne <m0>$.', m0=m0), [T('$m = <m0>$.', m0=m0), 'với mọi giá trị của $m$.', T(r'$m \ne <o>$.', o=o)], ex)


def n2e(rng, j):
    u1, u2 = Matrix([[rng.randint(-2, 3) for _ in range(3)]]), Matrix([[rng.randint(-2, 3) for _ in range(3)]])
    if Matrix([u1, u2]).rank() < 2:
        raise Retry
    a, b = rint(rng, -3, 3, (0,)), rint(rng, -3, 3, (0,))
    u3 = a * u1 + b * u2
    ask = rng.choice([('x + y', -a - b), ('x - y', b - a), (r'x\cdot y', a * b)])
    q = T(r'Trong không gian véc tơ $\mathbb{R}^3$, hệ $\{u_1<p>,\ u_2<q>,\ u_3<r>\}$ phụ thuộc tuyến tính, tức tồn tại các số $x, y$ sao cho $xu_1 + yu_2 + u_3 = 0$. Giá trị của $<e>$ bằng', p=vec(u1), q=vec(u2), r=vec(u3), e=ask[0])
    ex = steps(r'$xu_1 + yu_2 = -u_3$; viết theo từng tọa độ được hệ ba phương trình hai ẩn', T(r'Giải hai phương trình đầu (phương trình thứ ba nghiệm đúng): $x = <x>,\ y = <y>$', x=-a, y=-b), T(r'$<e> = <ok>$', e=ask[0], ok=ask[1]))
    return NQ(q, ask[1], [a + b, a - b, -a * b, ask[1] + 1], ex)


# =============== Câu 3: hạng ===============
def n3a(rng, j):
    r1, r2 = [rng.randint(-2, 3) for _ in range(4)], [rng.randint(-2, 3) for _ in range(4)]
    r1[0] = 1
    if rng.random() < .5:
        al, be = rint(rng, -2, 3, (0,)), rint(rng, -2, 2, (0,))
        r3 = [al * r1[i] + be * r2[i] for i in range(4)]
    else:
        r3 = [rng.randint(-2, 3) for _ in range(4)]
    A = Matrix([r1, r2, r3])
    r = A.rank()
    if r < 2:
        raise Retry
    q = T(r'Hạng của ma trận $A = <A>$ bằng', A=pmat(A))
    ex = steps(T(r'Biến đổi sơ cấp trên hàng đưa $A$ về dạng bậc thang: $<E>$', E=pmat(A.echelon_form())), T(r'Số hàng khác không của dạng bậc thang: $<r>$', r=r), T(r'$\operatorname{rank}A = <r>$', r=r))
    return NQ(q, r, [w for w in (1, 2, 3, 4) if w != r], ex)


def n3b(rng, j):
    r = rng.choice([2, 3])
    base = [[rng.randint(-2, 3) for _ in range(4)] for _ in range(r)]
    if Matrix(base).rank() != r:
        raise Retry
    vs = list(base)
    while len(vs) < 4:
        i, i2 = rng.sample(range(r), 2)
        al, be = rint(rng, -2, 2, (0,)), rint(rng, -2, 2, (0,))
        v = [al * base[i][t_] + be * base[i2][t_] for t_ in range(4)]
        if any(v) and v not in vs:
            vs.append(v)
    rng.shuffle(vs)
    if Matrix(vs).rank() != r:
        raise Retry
    names = r',\ '.join('u_%d = %s' % (i + 1, vec(v)) for i, v in enumerate(vs))
    q = T(r'Trong không gian véc tơ $\mathbb{R}^4$, cho hệ $S$ gồm $<ns>$. Cần bổ sung vào $S$ ít nhất bao nhiêu véc tơ để hệ mới sinh ra toàn bộ $\mathbb{R}^4$?', ns=names)
    ex = steps(T(r'Xếp các véc tơ thành hàng và đưa về dạng bậc thang: $<E>$', E=pmat(Matrix(vs).echelon_form())), T(r'Hạng của $S$ bằng $<r>$, tức $S$ sinh ra một không gian con $<r>$ chiều', r=r),
               T(r'Cần thêm ít nhất $4 - <r> = <ok>$ véc tơ', r=r, ok=4 - r))
    return NQ(q, 4 - r, [r, 0, 4, 4 - r + 1, 4 - r - 1], ex)


def n3d(rng, j):
    A, B = rmat(rng, 3, 2, -2, 3), rmat(rng, 2, 3, -2, 3)
    P = A * B
    r = P.rank()
    if r == 0:
        raise Retry
    q = T(r'Cho hai ma trận $A = <A>$ và $B = <B>$. Biết hạng của một tích không vượt quá hạng của mỗi thừa số, hạng của ma trận $AB$ (cấp $3\times3$) bằng', A=pmat(A), B=pmat(B))
    ex = steps(T(r'$\operatorname{rank}A = <ra>,\ \operatorname{rank}B = <rb>$ nên $\operatorname{rank}(AB) \le <mn>$', ra=A.rank(), rb=B.rank(), mn=min(A.rank(), B.rank())),
               T(r'$AB = <P>$, dạng bậc thang: $<E>$', P=pmat(P), E=pmat(P.echelon_form())), T(r'$\operatorname{rank}(AB) = <r>$', r=r))
    return NQ(q, r, [w for w in (3, 1, 2, 0) if w != r], ex)


# =============== Câu 11: đạo hàm riêng ===============
u_, v_s = symbols('u v')


def n11a(rng, j):
    zf, zs = rng.choice([(u_ ** 2 * v_s, 'u^2v'), (u_ * v_s ** 2, 'uv^2'), (u_ ** 2 + u_ * v_s, 'u^2 + uv'), (u_ * exp(v_s), 'ue^{v}')])
    uf, vf = rng.choice([(x * y, x - y), (x + y, x * y), (x ** 2 + y, x - 2 * y), (2 * x - y, x * y)])
    p0 = {x: rng.choice([1, 2]), y: rng.choice([1, -1, 2])}
    wrt = rng.choice([x, y])
    u0, v0 = uf.subs(p0), vf.subs(p0)
    zu, zv = diff(zf, u_).subs({u_: u0, v_s: v0}), diff(zf, v_s).subs({u_: u0, v_s: v0})
    ux, vx = diff(uf, wrt).subs(p0), diff(vf, wrt).subs(p0)
    ok = sp.simplify(zu * ux + zv * vx)
    assert sp.simplify(diff(zf.subs({u_: uf, v_s: vf}), wrt).subs(p0) - ok) == 0
    w = tx(wrt)
    q = T(r'Cho hàm hợp $z = <z>$ với $u = <u>,\ v = <v>$. Dùng quy tắc đạo hàm hàm hợp $z\'_<w> = z\'_u\cdot u\'_<w> + z\'_v\cdot v\'_<w>$, giá trị của $z\'_<w>$ tại điểm $(x;y) = (<a>;<b>)$ bằng', z=zs, u=uf, v=vf, w=w, a=p0[x], b=p0[y])
    ex = steps(T(r'Tại điểm đã cho: $u = <u0>,\ v = <v0>$', u0=u0, v0=v0), T(r"$z'_u = <a> \to <zu>,\quad z'_v = <b> \to <zv>$", a=diff(zf, u_), zu=zu, b=diff(zf, v_s), zv=zv),
               T(r"$u'_<w> = <c> \to <ux>,\quad v'_<w> = <d> \to <vx>$", w=w, c=diff(uf, wrt), ux=ux, d=diff(vf, wrt), vx=vx),
               T(r"$z'_<w> = (<zu>)\cdot(<ux>) + (<zv>)\cdot(<vx>) = <ok>$", w=w, zu=zu, ux=ux, zv=zv, vx=vx, ok=ok))
    return NQ(q, ok, [zu * ux, zu + zv, zu * vx + zv * ux, -ok, ok + 1], ex)


def n11b(rng, j):
    c = rng.choice([1, 2, 3, -1])
    f = rng.choice([x ** 3 - 3 * x * y ** 2 + c * x ** 2, x ** 4 - 6 * x ** 2 * y ** 2 + y ** 4 + c * y ** 2, x ** 2 * y - y ** 3 / 3 + c * x * y ** 2, x ** 3 + y ** 3 + c * x * y, x ** 2 * y ** 2 + c * x ** 2])
    p0 = {x: rng.choice([1, 2, -1]), y: rng.choice([1, 2, -1])}
    fxx, fyy = diff(f, x, 2), diff(f, y, 2)
    ok = (fxx + fyy).subs(p0)
    q = T(r'Cho hàm số $f(x,y) = <f>$. Giá trị của biểu thức $\Delta f = f\'\'_{xx} + f\'\'_{yy}$ tại điểm $(<a>;<b>)$ bằng', f=f, a=p0[x], b=p0[y])
    ex = steps(T(r"$f'_x = <fx> \Rightarrow f''_{xx} = <fxx>$", fx=diff(f, x), fxx=fxx), T(r"$f'_y = <fy> \Rightarrow f''_{yy} = <fyy>$", fy=diff(f, y), fyy=fyy),
               T(r"Tại $(<a>;<b>)$: $f''_{xx} + f''_{yy} = (<p>) + (<q>) = <ok>$", a=p0[x], b=p0[y], p=fxx.subs(p0), q=fyy.subs(p0), ok=ok))
    return NQ(q, ok, [fxx.subs(p0), fyy.subs(p0), (fxx - fyy).subs(p0), diff(f, x, y).subs(p0), ok + 2], ex)


def n11c(rng, j):
    f = rng.choice([x ** 2 * y, x * y ** 2 + x, x ** 2 + 2 * y ** 2, x ** 3 - y ** 2, x * y + y ** 2, x ** 2 - x * y])
    p0 = {x: rng.choice([1, 2, 3, -1]), y: rng.choice([1, 2, -2])}
    gx, gy = diff(f, x).subs(p0), diff(f, y).subs(p0)
    n2 = gx ** 2 + gy ** 2
    if n2 == 0 or not sp.sqrt(n2).is_integer:
        raise Retry
    ok = sp.sqrt(n2)
    q = T(r'Cho hàm số $f(x,y) = <f>$. Tại điểm $M(<a>;<b>)$, hàm số tăng nhanh nhất theo hướng của véc tơ gradient $\nabla f(M) = (f\'_x(M); f\'_y(M))$ và tốc độ tăng lớn nhất bằng $|\nabla f(M)|$. Giá trị của $|\nabla f(M)|$ bằng', f=f, a=p0[x], b=p0[y])
    ex = steps(T(r"$f'_x = <fx>,\quad f'_y = <fy>$", fx=diff(f, x), fy=diff(f, y)), T(r'$\nabla f(M) = (<gx>;<gy>)$', gx=gx, gy=gy),
               T(r'$|\nabla f(M)| = \sqrt{(<gx>)^2 + (<gy>)^2} = \sqrt{<n>} = <ok>$', gx=gx, gy=gy, n=n2, ok=ok))
    return NQ(q, ok, [n2, abs(gx) + abs(gy), gx + gy, ok + 1, ok * 2], ex)


def n11d(rng, j):
    f = rng.choice([x ** 2 + y ** 2, x ** 2 * y, x * y + x ** 2, x ** 2 - y ** 2 + x * y, x ** 3 + y ** 2, 2 * x ** 2 + x * y ** 2])
    x0, y0 = rng.choice([1, 2, -1]), rng.choice([1, 2, -1])
    A, B, z0 = diff(f, x).subs({x: x0, y: y0}), diff(f, y).subs({x: x0, y: y0}), f.subs({x: x0, y: y0})
    ok = z0 - A * x0 - B * y0
    q = T(r'Cho mặt cong $z = <f>$. Mặt phẳng tiếp xúc với mặt cong tại điểm $M(<a>;<b>;<c>)$ có phương trình $z = z_0 + f\'_x(M)(x - x_0) + f\'_y(M)(y - y_0)$. Mặt phẳng này cắt trục $Oz$ tại điểm có cao độ bằng', f=f, a=x0, b=y0, c=z0)
    ex = steps(T(r"$f'_x = <fx> \to <A>,\quad f'_y = <fy> \to <B>$ tại $(<a>;<b>)$", fx=diff(f, x), A=A, fy=diff(f, y), B=B, a=x0, b=y0),
               T(r'Mặt phẳng tiếp xúc: $z = <z0> + (<A>)(<u>) + (<B>)(<w>)$', z0=z0, A=A, u=x - x0, B=B, w=y - y0), T(r'Cho $x = y = 0$: $z = <ok>$', ok=ok))
    return NQ(q, ok, [z0, z0 + A * x0 + B * y0, -ok, A + B, ok + 1], ex)


def n11e(rng, j):
    a, b, c = rng.choice([2, 3]), rng.choice([2, 3]), rng.choice([1, 2, -1, 3])
    f = x ** a * y ** b + c * x * y + rng.choice([x ** 2, y ** 2, x])
    p0 = {x: rng.choice([1, 2, -1]), y: rng.choice([1, 2, -1])}
    ok = diff(f, x, y).subs(p0)
    q = T(r'Cho hàm số $f(x,y) = <f>$. Giá trị của đạo hàm riêng hỗn hợp $f\'\'_{xy}$ tại điểm $(<a>;<b>)$ bằng', f=f, a=p0[x], b=p0[y])
    ex = steps(T(r"$f'_x = <fx>$", fx=diff(f, x)), T(r"$f''_{xy} = \left(f'_x\right)'_y = <fxy>$", fxy=diff(f, x, y)), T(r"$f''_{xy}(<a>;<b>) = <ok>$", a=p0[x], b=p0[y], ok=ok))
    return NQ(q, ok, [diff(f, x, 2).subs(p0), diff(f, y, 2).subs(p0), diff(f, x).subs(p0), ok - c, -ok], ex)


# =============== Câu 14: chuỗi số dương ===============
def n14a(rng, j):
    p = rng.choice([1, 2, 3])
    q = T(r'Cho $q$ là số nguyên dương. Chuỗi số dương $\displaystyle\sum_{n=1}^{+\infty}\dfrac{n^{<p>}}{n^{q} + 1}$ hội tụ khi và chỉ khi', p='' if p == 1 else p).replace('^{}', '')
    ex = steps(T(r'$u_n \sim \dfrac{<np>}{n^q} = \dfrac{1}{n^{q - <p>}}$', np='n' if p == 1 else 'n^{%d}' % p, p=p), T(r'Chuỗi $\sum\dfrac{1}{n^{s}}$ hội tụ $\Leftrightarrow s > 1$, tức $q - <p> > 1$', p=p), T(r'$q$ nguyên nên $q \ge <ok>$', ok=p + 2))
    f = lambda v: r'$q \ge %d$.' % v
    return Q(q, f(p + 2), [f(p + 1), f(p + 3), 'với mọi số nguyên dương $q$.'], ex)


P14B = [
    (r'\dfrac{(n!)^2c^n}{(2n)!}', 3, r'\dfrac{u_{n+1}}{u_n} = \dfrac{c(n+1)^2}{(2n+1)(2n+2)} \to \dfrac{c}{4}', r'Hội tụ khi $\dfrac{c}{4} < 1$; với $c = 4$ có $\dfrac{u_{n+1}}{u_n} = \dfrac{2n+2}{2n+1} > 1$ nên $u_n \not\to 0$'),
    (r'\dfrac{c^n\,n!}{n^n}', 2, r'\dfrac{u_{n+1}}{u_n} = c\left(\dfrac{n}{n+1}\right)^n \to \dfrac{c}{e}', r'Hội tụ khi $c < e \approx 2{,}72$'),
    (r'\dfrac{n^2c^n}{5^n}', 4, r'\dfrac{u_{n+1}}{u_n} \to \dfrac{c}{5}', r'Hội tụ khi $c < 5$; với $c = 5$ thì $u_n = n^2 \not\to 0$'),
    (r'\dfrac{c^n}{n\cdot3^n}', 2, r'\sqrt[n]{u_n} \to \dfrac{c}{3}', r'Hội tụ khi $c < 3$; với $c = 3$ được chuỗi điều hòa $\sum\dfrac1n$ phân kỳ'),
    (r'\dfrac{c^n}{n^2\cdot3^n}', 3, r'\sqrt[n]{u_n} \to \dfrac{c}{3}', r'Hội tụ khi $c < 3$; với $c = 3$ được chuỗi $\sum\dfrac{1}{n^2}$ vẫn hội tụ'),
    (r'\dfrac{(2n)!\,c^n}{(n!)^2\cdot20^n}', 4, r'\dfrac{u_{n+1}}{u_n} = \dfrac{c(2n+1)(2n+2)}{20(n+1)^2} \to \dfrac{c}{5}', r'Hội tụ khi $c < 5$; với $c = 5$ có $\dfrac{u_{n+1}}{u_n} = \dfrac{2n+1}{2n+2}$ và $u_n \sim \dfrac{1}{\sqrt{\pi n}}$ nên chuỗi phân kỳ'),
]


def n14b(rng, j):
    body, ok, lim_, why = P14B[j % len(P14B)]
    q = T(r'Cho $c$ là số nguyên dương. Giá trị lớn nhất của $c$ để chuỗi số dương $\displaystyle\sum_{n=1}^{+\infty}<b>$ hội tụ là', b=body)
    return NQ(q, ok, [ok + 1, ok - 1, ok + 2, 1 if ok != 1 else 5], steps('$' + lim_ + '$', why, T('Giá trị nguyên dương lớn nhất: $<ok>$', ok=ok)))


def n14c(rng, j):
    a, b = rng.choice([(1, 2), (2, 3), (3, 2), (2, 1), (1, 3), (3, 4), (4, 3)])
    e2 = rng.random() < .5
    C = R(a, b) ** (2 if e2 else 1)
    conv = C < 1
    q = T(r'Cho chuỗi số dương $\displaystyle\sum_{n=1}^{+\infty}\left(\dfrac{<a>n + 1}{<b>n + 2}\right)^{<e>}$. Đặt $C = \lim\limits_{n\to\infty}\sqrt[n]{u_n}$, khi đó:', a='' if a == 1 else a, b='' if b == 1 else b, e='2n' if e2 else 'n')
    f = lambda c, k_: T(r'$C = <c>$ và chuỗi <k>.', c=c, k='hội tụ' if k_ else 'phân kỳ')
    ex = steps(T(r'$\sqrt[n]{u_n} = <l>\dfrac{<a>n + 1}{<b>n + 2}<r> \to <l>\dfrac{<a0>}{<b0>}<r> = <C>$' if e2 else r'$\sqrt[n]{u_n} = \dfrac{<a>n + 1}{<b>n + 2} \to <C>$',
                 l=r'\left(', r=r'\right)^{2}', a='' if a == 1 else a, b='' if b == 1 else b, a0=a, b0=b, C=C),
               T(r'$C <s> 1$ nên theo tiêu chuẩn Cauchy chuỗi <k>', s='<' if conv else '>', k='hội tụ' if conv else 'phân kỳ'))
    other = R(a, b) if e2 else R(a, b) ** 2
    return Q(q, f(C, conv), [f(C, not conv), f(other, other < 1), f(1, conv)], ex)


def n14d(rng, j):
    want_div = j % 2 == 0
    conv, div = [p for p in P14 if p[1]], [p for p in P14 if not p[1]]
    ok = rng.choice(div if want_div else conv)
    wrongs = rng.sample(conv if want_div else div, 3)
    q = 'Trong bốn chuỗi số dương dưới đây, chuỗi nào ' + ('phân kỳ' if want_div else 'hội tụ') + '?'
    line = lambda p, lab: '<b>%s:</b> $%s$ — $%s$ nên chuỗi %s' % (lab, p[0], R14[P14.index(p)], 'hội tụ' if p[1] else 'phân kỳ')
    return Q(q, '$%s$.' % ok[0], ['$%s$.' % w[0] for w in wrongs], steps(line(ok, 'Đúng'), *[line(w, 'Sai') for w in wrongs]))


def n14e(rng, j):
    s = r'\dfrac{1}{n\ln^{p}n}'
    q = T(r'Cho $p$ là số thực. Dùng tiêu chuẩn tích phân, chuỗi số dương $\displaystyle\sum_{n=2}^{+\infty}<s>$ hội tụ khi và chỉ khi', s=s)
    ex = steps(r'Xét $\displaystyle\int_2^{+\infty}\dfrac{dx}{x\ln^{p}x}$, đặt $t = \ln x$: $\displaystyle\int_{\ln 2}^{+\infty}\dfrac{dt}{t^{p}}$', r'Tích phân này hội tụ $\Leftrightarrow p > 1$',
               r'Với $p = 1$: $\displaystyle\int\dfrac{dt}{t} = \ln t \to +\infty$ nên chuỗi phân kỳ')
    return Q(q, '$p > 1$.', [r'$p \ge 1$.', '$p > 0$.', 'với mọi $p$.'], ex)


# =============== Câu 17: phương trình vi phân cấp một (bài toán Cauchy) ===============
def n17a(rng, j):
    a = rng.choice([1, 2])
    xs = Symbol('x', positive=True)
    sol = xs / (1 - a * log(xs))
    assert simplify(diff(sol, xs) - sol / xs - a * (sol / xs) ** 2) == 0
    x1, x1s = [(exp(R(1, 2 * a)), r'\sqrt{e}' if a == 1 else r'\sqrt[4]{e}'), (exp(-R(1, a)), r'\dfrac1e' if a == 1 else r'\dfrac{1}{\sqrt e}')][j % 2]
    ok = simplify(sol.subs(xs, x1))
    root = r'\sqrt{e}' if (a == 1) == (j % 2 == 0) else (r'\sqrt[4]{e}' if j % 2 == 0 else 'e')
    if j % 2 == 0:   # đáp án 2·x1
        assert simplify(ok - 2 * x1) == 0
        okS, wr = '$2%s$.' % root, ['$%s$.' % root, '$4%s$.' % root, r'$\dfrac{%s}{2}$.' % root]
    else:            # đáp án x1/2
        assert simplify(ok - x1 / 2) == 0
        okS, wr = r'$\dfrac{1}{2%s}$.' % root, [r'$\dfrac{1}{%s}$.' % root, r'$\dfrac{2}{%s}$.' % root, r'$\dfrac{1}{3%s}$.' % root]
    q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình đẳng cấp $y\' = \dfrac{y}{x} + <a>\dfrac{y^2}{x^2}$ $(x > 0)$ thỏa mãn $y(1) = 1$. Bằng phép đặt $y = ux$, giá trị của $y\left(<x1>\right)$ bằng', a='' if a == 1 else a, x1=x1s)
    ex = steps(T(r"$y = ux \Rightarrow y' = u'x + u$; thay vào: $u'x = <a>u^2$", a='' if a == 1 else a), T(r'$\dfrac{du}{u^2} = \dfrac{<a>dx}{x} \Rightarrow -\dfrac1u = <al> + C$', a='' if a == 1 else r'%d\,' % a, al=a * log(x)),
               T(r'$y(1) = 1 \Rightarrow u(1) = 1 \Rightarrow C = -1 \Rightarrow y = \dfrac{x}{1 - <al>}$', al=a * log(x)), T(r'$y\left(<x1>\right) = <ok>$', x1=x1s, ok=okS[1:-2]))
    return Q(q, okS, wr, ex)


def n17b(rng, j):
    a, b, c = rng.choice([1, 2, 3]), rng.choice([1, 2, -1, -2]), rng.choice([1, 2, 3])
    p, qq = rng.choice([1, 2, -1]), rng.choice([1, 2, -1, 3])
    if b * b >= 4 * a * c:
        raise Retry
    C = a * p * p + b * p * qq + c * qq * qq
    x0 = sp.sqrt(R(C, a))
    if not x0.is_integer:
        raise Retry
    u = a * x ** 2 + b * x * y + c * y ** 2
    q = T(r'Đường cong tích phân của phương trình vi phân toàn phần $(<P>)\,dx + (<Q>)\,dy = 0$ đi qua điểm $M(<p>;<q>)$ là một đường elip. Elip này cắt tia $Ox$ (phần $x > 0$ của trục hoành) tại điểm có hoành độ bằng', P=diff(u, x), Q=diff(u, y), p=p, q=qq)
    ex = steps(T(r'$\dfrac{\partial P}{\partial y} = <b> = \dfrac{\partial Q}{\partial x}$ nên vế trái là $du$ với $u = <u>$', b=b, u=u), T(r'Nghiệm tổng quát: $<u> = C$; qua $M(<p>;<q>)$: $C = <C>$', u=u, p=p, q=qq, C=C),
               T(r'Cho $y = 0$: $<ax2> = <C> \Rightarrow x = <ok>$ (lấy $x > 0$)', ax2=a * x ** 2, C=C, ok=x0))
    return NQ(q, x0, [C, sp.sqrt(R(C, c)) if sp.sqrt(R(C, c)).is_integer and sp.sqrt(R(C, c)) != x0 else x0 + 1, x0 * 2, abs(p), x0 + 2], ex)


def n17c(rng, j):
    b = rng.choice([1, 2, 3, 4])
    sol = (sin(x) ** 2 + b - 1) / sin(x)
    assert simplify(diff(sol, x) + sol * cos(x) / sin(x) - 2 * cos(x)) == 0
    ok = sol.subs(x, pi / 6)
    q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình $y\' + y\cot x = 2\cos x$ trên khoảng $(0;\pi)$ thỏa mãn $y\left(\dfrac{\pi}{2}\right) = <b>$. Giá trị của $y\left(\dfrac{\pi}{6}\right)$ bằng', b=b)
    ex = steps(r"Nhân hai vế với $\sin x$: $(y\sin x)' = 2\sin x\cos x = \sin 2x$", r'$y\sin x = \sin^2x + C$', T(r'$y\left(\dfrac{\pi}{2}\right) = 1 + C = <b> \Rightarrow C = <C>$', b=b, C=b - 1),
               T(r'$y\left(\dfrac{\pi}{6}\right) = \dfrac{\frac14 + <C>}{\frac12} = <ok>$', C=b - 1, ok=ok))
    return NQ(q, ok, [R(1, 4) + b - 1, 2 * b, ok / 2, sp.Integer(b)], ex)


def n17e(rng, j):
    if j % 2 == 0:
        sol, ode, ic, x1, x1s, sub, c_s = tan(x) - x, r"y' = (x + y)^2", 'y(0) = 0', pi / 4, r'\dfrac{\pi}{4}', 'u = x + y', '0'
        solS, okS, okV = r'\tan x - x', r'1 - \dfrac{\pi}{4}', 1 - pi / 4
        wr = ['1', r'1 + \dfrac{\pi}{4}', r'\dfrac{\pi}{4} - 1']
    else:
        sol, ode, ic, x1, x1s, sub, c_s = tan(x + pi / 4) - x - 1, r"y' = (x + y + 1)^2", 'y(0) = 0', pi / 12, r'\dfrac{\pi}{12}', 'u = x + y + 1', r'\dfrac{\pi}{4}'
        solS, okS, okV = r'\tan\left(x + \dfrac{\pi}{4}\right) - x - 1', r'\sqrt{3} - 1 - \dfrac{\pi}{12}', sqrt(3) - 1 - pi / 12
        wr = [r'\sqrt{3} - 1', r'\sqrt{3} - \dfrac{\pi}{12}', r'\sqrt{3} + 1 - \dfrac{\pi}{12}']
    inner = (x + sol) if j % 2 == 0 else (x + sol + 1)
    assert simplify(diff(sol, x) - inner ** 2) == 0 and sol.subs(x, 0) == 0
    assert simplify(sol.subs(x, x1) - okV) == 0
    q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình $<o>$ thỏa mãn $<ic>$. Bằng phép đổi biến $<s>$ để đưa về phương trình tách biến, giá trị của $y\left(<x1>\right)$ bằng', o=ode, ic=ic, s=sub, x1=x1s)
    ex = steps(T(r"$<s> \Rightarrow u' = 1 + y' = 1 + u^2$", s=sub), r'$\dfrac{du}{1 + u^2} = dx \Rightarrow \arctan u = x + C$', T(r'Từ $<ic>$: $C = <c>$, nên $y = <sol>$', ic=ic, c=c_s, sol=solS), T(r'$y\left(<x1>\right) = <ok>$', x1=x1s, ok=okS))
    return Q(q, '$%s$.' % okS, ['$%s$.' % w for w in wr], ex)


# =============== Câu 19: phương trình tuyến tính cấp hai ===============
def n19a(rng, j):
    v = j % 3
    if v == 0:
        r1, r2 = rng.sample([-3, -2, -1, 1, 2, 3], 2)
        ysol, p, qv = 'C_1%s + C_2%s' % (ex_(r1), ex_(r2)), -(r1 + r2), r1 * r2
        why = T(r'Nghiệm $k = <a>,\ k = <b>$ của phương trình đặc trưng: $<f> = <e>$', a=r1, b=r2, f=(kS - r1) * (kS - r2), e=sp.expand((kS - r1) * (kS - r2)))
    elif v == 1:
        r = rng.choice([-3, -2, -1, 1, 2, 3])
        ysol, p, qv = '(C_1 + C_2x)%s' % ex_(r), -2 * r, r * r
        why = T(r'Nghiệm kép $k = <a>$ của phương trình đặc trưng: $<f> = <e>$', a=r, f=(kS - r) ** 2, e=sp.expand((kS - r) ** 2))
    else:
        al, be = rng.choice([-2, -1, 1, 2]), rng.choice([1, 2, 3])
        ysol, p, qv = '%s(C_1%s + C_2%s)' % (ex_(al), tr('cos', be), tr('sin', be)), -2 * al, al * al + be * be
        why = T(r'Nghiệm phức $k = <a> \pm <b>i$ của phương trình đặc trưng: $<f> + <b2> = <e>$', a=al, b='' if be == 1 else be, f=(kS - al) ** 2, b2=be * be, e=sp.expand((kS - al) ** 2 + be * be))
    f = lambda p_, q_: '$' + ode2(p_, q_, '0') + '$.'
    q = T(r'Phương trình vi phân tuyến tính thuần nhất hệ số hằng nào sau đây có nghiệm tổng quát là $y = <y>$?', y=ysol)
    ex = steps(why, T(r'Phương trình đặc trưng $<e> = 0$ ứng với phương trình vi phân $<o>$', e=kS ** 2 + p * kS + qv, o=ode2(p, qv, '0')))
    return Q(q, f(p, qv), pick3((p, qv), [(-p, qv), (p, -qv), (qv, p), (-p, -qv), (p, qv + 1)], lambda c: f(*c)), ex)


P19B = [
    ("y'' - 3y' + 2y = xe^{x}", r'y^* = x(Ax + B)e^{x}', [r'y^* = (Ax + B)e^{x}', r'y^* = Axe^{x}', r'y^* = x^2(Ax + B)e^{x}'], r'Phương trình đặc trưng có nghiệm $1$ và $2$; số $1$ (ứng với $e^{x}$) là nghiệm đơn nên nhân thêm $x$ vào dạng $(Ax + B)e^{x}$'),
    ("y'' - 2y' + y = 5e^{x}", r'y^* = Ax^2e^{x}', [r'y^* = Ae^{x}', r'y^* = Axe^{x}', r'y^* = (Ax + B)e^{x}'], r'Phương trình đặc trưng có nghiệm kép $1$, trùng với số mũ của vế phải nên nhân thêm $x^2$'),
    ("y'' + y' = x^2", r'y^* = x(Ax^2 + Bx + C)', [r'y^* = Ax^2 + Bx + C', r'y^* = x^2(Ax^2 + Bx + C)', r'y^* = Ax^2'], r'Phương trình đặc trưng có nghiệm $0$ và $-1$; số $0$ (ứng với vế phải là đa thức) là nghiệm đơn nên nhân thêm $x$'),
    ("y'' + 9y = \\sin 3x", r'y^* = x(A\cos 3x + B\sin 3x)', [r'y^* = A\sin 3x', r'y^* = A\cos 3x + B\sin 3x', r'y^* = Ax\sin 3x'], r'Phương trình đặc trưng có nghiệm $\pm 3i$, trùng với tần số của vế phải nên nhân thêm $x$; phải có cả $\cos 3x$ và $\sin 3x$'),
    ("y'' - y = e^{2x}\\sin x", r'y^* = e^{2x}(A\cos x + B\sin x)', [r'y^* = xe^{2x}(A\cos x + B\sin x)', r'y^* = Ae^{2x}\sin x', r'y^* = Ae^{2x}\cos x'], r'$2 \pm i$ không là nghiệm của phương trình đặc trưng ($k = \pm1$) nên không nhân thêm $x$; phải có cả $\cos x$ và $\sin x$'),
    ("y'' + 4y' + 4y = x + e^{-2x}", r'y^* = Ax + B + Cx^2e^{-2x}', [r'y^* = Ax + B + Ce^{-2x}', r'y^* = Ax + B + Cxe^{-2x}', r'y^* = x(Ax + B) + Ce^{-2x}'], r'Chồng chất nghiệm: với vế phải $x$, số $0$ không là nghiệm đặc trưng nên $Ax + B$; với $e^{-2x}$, số $-2$ là nghiệm kép nên $Cx^2e^{-2x}$'),
    ("y'' - 4y = e^{2x} + 1", r'y^* = Axe^{2x} + B', [r'y^* = Ae^{2x} + B', r'y^* = Axe^{2x} + Bx', r'y^* = Ax^2e^{2x} + B'], r'Nghiệm đặc trưng $\pm2$: số $2$ là nghiệm đơn nên $Axe^{2x}$; số $0$ không là nghiệm nên hằng số $B$'),
    ("y'' + 2y' + 5y = e^{-x}\\cos 2x", r'y^* = xe^{-x}(A\cos 2x + B\sin 2x)', [r'y^* = e^{-x}(A\cos 2x + B\sin 2x)', r'y^* = Axe^{-x}\cos 2x', r'y^* = x^2e^{-x}(A\cos 2x + B\sin 2x)'], r'Phương trình đặc trưng có nghiệm $-1 \pm 2i$, trùng với $-1 \pm 2i$ của vế phải nên nhân thêm $x$'),
]


def n19b(rng, j):
    ode, ok, wrongs, why = P19B[j % len(P19B)]
    q = T(r'Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $<o>$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?', o=ode)
    return Q(q, '$%s$.' % ok, ['$%s$.' % w for w in wrongs], steps(why, 'Dạng cần tìm: $%s$' % ok))


def n19c(rng, j):
    r1, r2 = rng.sample([-2, -1, 1, 2, 3], 2)
    A, B = rint(rng, -2, 3, (0,)), rint(rng, -2, 3)
    p, qv = -(r1 + r2), r1 * r2
    a, b = qv * A, p * A + qv * B
    base = 'y = C_1%s + C_2%s' % (ex_(r1), ex_(r2))
    yp = lambda A_, B_: form((A_, 'x'), (B_, ''))
    q = 'Nghiệm tổng quát của phương trình $' + ode2(p, qv, form((a, 'x'), (b, ''))) + '$ là'
    ex = steps(T(r'Phương trình đặc trưng: $<e> = 0 \Rightarrow k = <r1>,\ k = <r2>$', e=kS ** 2 + p * kS + qv, r1=r1, r2=r2), r'Vế phải là đa thức bậc nhất, số $0$ không là nghiệm đặc trưng: $y^* = Ax + B$',
               T(r"Thay $y^* = Ax + B$ vào phương trình: $<lhs> = <rhs>$", lhs=sp.expand(p * As + qv * (As * x + Bs)), rhs=form((a, 'x'), (b, ''))),
               T(r'Đồng nhất hệ số: $<e1> = <a>,\ <e2> = <b> \Rightarrow A = <A>,\ B = <B>$', e1=qv * As, a=a, e2=p * As + qv * Bs, b=b, A=A, B=B),
               '$%s + %s$' % (base, yp(A, B)) if not yp(A, B).startswith('-') else '$%s %s$' % (base, yp(A, B).replace('-', '- ', 1)))
    mk = lambda c: '$' + base + ((' + ' + yp(*c)) if not yp(*c).startswith('-') else (' - ' + yp(*c)[1:])) + '$.'
    return Q(q, mk((A, B)), pick3((A, B), [(A, 0), (A, -B), (a, b), (-A, B), (A, B + 1)], mk), ex)


def n19d(rng, j):
    r1, r2 = rng.sample([-2, -1, 1, 2, 3], 2)
    c = rng.choice([v_ for v_ in (-3, -2, -1, 1, 2, 3, 4) if v_ not in (r1, r2)])
    A = rint(rng, -2, 3, (0,))
    K = A * (c - r1) * (c - r2)
    p, qv = -(r1 + r2), r1 * r2
    base = 'y = C_1%s + C_2%s' % (ex_(r1), ex_(r2))
    mk = lambda coef, body: '$%s%s$.' % (base, term(coef, body))
    q = 'Nghiệm tổng quát của phương trình $' + ode2(p, qv, term(K, ex_(c), True)) + '$ là'
    ex = steps(T(r'Phương trình đặc trưng: $<e> = 0 \Rightarrow k = <r1>,\ k = <r2>$', e=kS ** 2 + p * kS + qv, r1=r1, r2=r2), T(r'Số $<c>$ không là nghiệm đặc trưng: $y^* = A<e>$', c=c, e=ex_(c)),
               T(r'Thay vào: $A\left(<c2><pc> <q>\right)<e> = <rhs> \Rightarrow <d>A = <K> \Rightarrow A = <A>$', c2=c * c, pc=' ' + sgn_(p * c) if p else '', q=sgn_(qv), e=ex_(c), rhs=term(K, ex_(c), True), d=(c - r1) * (c - r2), K=K, A=A),
               mk(A, ex_(c))[:-1])
    return Q(q, mk(A, ex_(c)), pick3(None, [mk(A, 'x' + ex_(c)), mk(K, ex_(c)), mk(-A, ex_(c)), mk(A, ex_(r1))], lambda s_: s_ if s_ else ''), ex)


def sgn_(v):
    return '+ %s' % tx(v) if v >= 0 else '- %s' % tx(-v)


# =============== Câu 20: tích phân hai lớp ===============
def n20a(rng, j):
    a = rng.choice([1, 2, 3])
    f, fs = rng.choice([(x + 2 * y, 'x + 2y'), (x * y, 'xy'), (y, 'y'), (2 * x + y, '2x + y'), (x ** 2, 'x^2')])
    inner = sp.expand(integrate(f, (y, x, 2 * x)))
    ok = integrate(inner, (x, 0, a))
    fs = '(%s)' % fs if '+' in fs else fs
    q = T(r'Cho $D$ là miền tam giác giới hạn bởi các đường thẳng $y = x,\ y = 2x$ và $x = <a>$. Giá trị của tích phân $\displaystyle\iint_D <f>\,dxdy$ bằng', a=a, f=fs)
    ex = steps(T(r'Miền $D$: $0 \le x \le <a>,\ x \le y \le 2x$', a=a), T(r'$I = \displaystyle\int_0^{<a>}dx\int_x^{2x}<f>\,dy = \int_0^{<a>}<i>\,dx$', a=a, f=fs, i=inner), T(r'$= \left[<F>\right]_0^{<a>} = <ok>$', F=integrate(inner, x), a=a, ok=ok))
    return NQ(q, ok, [integrate(integrate(f, (y, 0, 2 * x)), (x, 0, a)), integrate(integrate(f, (y, 0, x)), (x, 0, a)), ok * 2, ok / 2], ex)


def n20b(rng, j):
    p, d = rng.choice([-2, -1, 0, 1]), rng.choice([1, 2, 3, 4, 6])
    qv = p + d
    line = sp.expand((p + qv) * x - p * qv)
    ok = R(d ** 3, 6)
    assert integrate(line - x ** 2, (x, p, qv)) == ok
    q = T(r'Diện tích $S = \displaystyle\iint_D dxdy$ của miền phẳng $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = <l>$ bằng', l=line)
    ex = steps(T(r'Hoành độ giao điểm: $x^2 = <l> \Leftrightarrow x = <p>,\ x = <q>$', l=line, p=p, q=qv), T(r'$S = \displaystyle\int_{<p>}^{<q>}dx\int_{x^2}^{<l>}dy = \int_{<p>}^{<q>}\left(<e>\right)dx$', p=p, q=qv, l=line, e=line - x ** 2),
               T(r'$= \left[<F>\right]_{<p>}^{<q>} = <ok>$', F=integrate(line - x ** 2, x), p=p, q=qv, ok=ok))
    return NQ(q, ok, [R(d ** 3, 3), R(d ** 3, 2), R(d ** 2, 2), ok * 2, sp.Integer(d)], ex)


def n20c(rng, j):
    a = rng.choice([1, 2])
    b = a + rng.choice([1, 2])
    cond, lo, hi = [(r'y \ge 0', '0', r'\pi'), (r'x \ge 0,\ y \ge 0', '0', r'\pi/2'), (r'y \ge |x|', r'\pi/4', r'3\pi/4'), (r'x \le 0', r'\pi/2', r'3\pi/2'), (r'y \ge x,\ x \ge 0', r'\pi/4', r'\pi/2'), (r'y \le 0', r'\pi', r'2\pi')][j % 6]
    f = lambda lo_, hi_, r1, r2, jac=r'r\,dr': r'$\displaystyle\int_{%s}^{%s}d\varphi\int_{%s}^{%s} f(r\cos\varphi, r\sin\varphi)\,%s$.' % (lo_, hi_, r1, r2, jac)
    q = T(r'Cho miền $D = \{(x,y): <a2> \le x^2 + y^2 \le <b2>,\ <c>\}$. Khi chuyển sang tọa độ cực $x = r\cos\varphi,\ y = r\sin\varphi$, tích phân $\displaystyle\iint_D f(x,y)\,dxdy$ được viết là', a2=a * a, b2=b * b, c=cond)
    ex = steps(T(r'$<a2> \le r^2 \le <b2> \Leftrightarrow <a> \le r \le <b>$', a2=a * a, b2=b * b, a=a, b=b), T(r'Điều kiện $<c>$ ứng với $<lo> \le \varphi \le <hi>$', c=cond, lo=lo, hi=hi), r'Jacobian của phép đổi biến bằng $r$: $dxdy = r\,dr\,d\varphi$')
    wrong_th = ('0', r'2\pi')
    return Q(q, f(lo, hi, a, b), [f(lo, hi, a, b, 'dr'), f(lo, hi, a * a, b * b), f(wrong_th[0], wrong_th[1], a, b)], ex)


def n20d(rng, j):
    a = rng.choice([1, 2, 3, 6])
    rho, rs = rng.choice([(x, 'x'), (y, 'y'), (x + y, 'x + y'), (x * y, 'xy'), (2 * x + 1, '2x + 1')])
    inner = sp.expand(integrate(rho, (y, 0, a - x)))
    ok = integrate(inner, (x, 0, a))
    q = T(r'Một bản mỏng phẳng chiếm miền tam giác $D = \{(x,y): x \ge 0,\ y \ge 0,\ x + y \le <a>\}$ và có mật độ khối lượng tại mỗi điểm là $\rho(x,y) = <r>$. Khối lượng của bản, tức $\displaystyle\iint_D \rho\,dxdy$, bằng', a=a, r=rs)
    ex = steps(T(r'$m = \displaystyle\int_0^{<a>}dx\int_0^{<a>-x}<r>\,dy = \int_0^{<a>}\left(<i>\right)dx$', a=a, r='(%s)' % rs if '+' in rs else rs, i=inner), T(r'$= \left[<F>\right]_0^{<a>} = <ok>$', F=integrate(inner, x), a=a, ok=ok))
    return NQ(q, ok, [integrate(integrate(rho, (y, 0, a)), (x, 0, a)), R(a * a, 2), ok * 2, ok / 2, ok * 3], ex)


# =============== Câu 24: phương trình ma trận ===============
def n24a(rng, j):
    A, B = rmat(rng, 2, 2, -2, 4), rmat(rng, 2, 2, -3, 4)
    da, db = A.det(), B.det()
    if abs(da) not in (2, 3, 4) or db == 0 or abs(db) == abs(da):
        raise Retry
    left = j % 2 == 0
    ok = R(db, da)
    q = T(r'Cho hai ma trận $A = <A>$ và $B = <B>$. Gọi $X$ là ma trận thỏa mãn $<e>$. Không cần tìm $X$, hãy cho biết định thức của $X$ bằng', A=pmat(A), B=pmat(B), e='A.X = B' if left else 'X.A = B')
    ex = steps(T(r'$\det A = <a>,\quad \det B = <b>$', a=da, b=db), r'Lấy định thức hai vế: $\det A\cdot\det X = \det B$', T(r'$\det X = \dfrac{<b>}{<a>} = <ok>$', b=db, a=da, ok=ok))
    return NQ(q, ok, [R(da, db), db * da, db - da, -ok], ex)


def n24c(rng, j):
    A = unimod(rng)
    X = rmat(rng, 2, 2, -2, 3)
    B = A * A * X
    q = T(r'Cho hai ma trận $A = <A>$ và $B = <B>$. Gọi $X$ là ma trận thỏa mãn $A^2.X = B$. Tổng tất cả các phần tử của $X$ bằng', A=pmat(A), B=pmat(B))
    ex = steps(T(r'$A^{-1} = <I>$', I=pmat(A.inv())), T(r'$A.X = A^{-1}B = <Y>$', Y=pmat(A.inv() * B)), T(r'$X = A^{-1}(A^{-1}B) = <X>$', X=pmat(X)), T(r'Tổng các phần tử: $<ok>$', ok=sum(X)))
    return NQ(q, sum(X), [sum(A.inv() * B), sum(B), sum(X) + 1, -sum(X), sum(B * A.inv() * A.inv())], ex)


def n24d(rng, j):
    cases = [
        (Matrix([[1, 1], [0, 1]]), r'\begin{pmatrix}a & b \\ 0 & a\end{pmatrix}', [r'\begin{pmatrix}a & 0 \\ b & a\end{pmatrix}', r'\begin{pmatrix}a & 0 \\ 0 & b\end{pmatrix}', r'\begin{pmatrix}a & b \\ b & a\end{pmatrix}'], r'$z = 0$ và $x = t$'),
        (Matrix([[1, 0], [1, 1]]), r'\begin{pmatrix}a & 0 \\ b & a\end{pmatrix}', [r'\begin{pmatrix}a & b \\ 0 & a\end{pmatrix}', r'\begin{pmatrix}a & 0 \\ 0 & b\end{pmatrix}', r'\begin{pmatrix}a & b \\ b & a\end{pmatrix}'], r'$y = 0$ và $x = t$'),
        (Matrix([[1, 0], [0, 2]]), r'\begin{pmatrix}a & 0 \\ 0 & b\end{pmatrix}', [r'\begin{pmatrix}a & b \\ 0 & a\end{pmatrix}', r'\begin{pmatrix}a & b \\ b & a\end{pmatrix}', r'\begin{pmatrix}a & 0 \\ b & a\end{pmatrix}'], r'$y = 0$ và $z = 0$'),
        (Matrix([[0, 1], [1, 0]]), r'\begin{pmatrix}a & b \\ b & a\end{pmatrix}', [r'\begin{pmatrix}a & b \\ 0 & a\end{pmatrix}', r'\begin{pmatrix}a & 0 \\ 0 & b\end{pmatrix}', r'\begin{pmatrix}a & b \\ -b & a\end{pmatrix}'], r'$x = t$ và $y = z$'),
        (Matrix([[0, 1], [-1, 0]]), r'\begin{pmatrix}a & b \\ -b & a\end{pmatrix}', [r'\begin{pmatrix}a & b \\ b & a\end{pmatrix}', r'\begin{pmatrix}a & 0 \\ 0 & b\end{pmatrix}', r'\begin{pmatrix}a & b \\ 0 & a\end{pmatrix}'], r'$x = t$ và $z = -y$'),
    ]
    A, ok, wrongs, why = cases[j % len(cases)]
    xs, ys, zs, ts = symbols('x y z t')
    X = Matrix([[xs, ys], [zs, ts]])
    q = T(r'Cho ma trận $A = <A>$. Mọi ma trận vuông cấp 2 giao hoán với $A$ (tức thỏa mãn $AX = XA$) đều có dạng nào sau đây, với $a, b$ là các số thực tùy ý?', A=pmat(A))
    ex = steps(r'Đặt $X = \begin{pmatrix}x & y \\ z & t\end{pmatrix}$', T(r'$AX = <P>,\quad XA = <Q>$', P=pmat(A * X), Q=pmat(X * A)), 'So sánh từng phần tử: ' + why, 'Vậy $X = %s$' % ok)
    return Q(q, '$%s$.' % ok, ['$%s$.' % w for w in wrongs], ex)


def n24e(rng, j):
    A, X = rmat(rng, 2, 2, -2, 3), rmat(rng, 2, 2, -2, 3)
    c, d = rng.choice([2, 3]), rng.choice([1, 2, 3])
    Bt = c * X - d * A
    B = Bt.T
    i, i2 = rng.randint(1, 2), rng.randint(1, 2)
    q = T(r'Cho hai ma trận $A = <A>$ và $B = <B>$. Gọi $X$ là ma trận thỏa mãn $<c>X - <d>A = B^T$. Phần tử thuộc hàng <i> và cột <k> của $X$ bằng', A=pmat(A), B=pmat(B), c=c, d='' if d == 1 else d, i=i, k=i2)
    ex = steps(T(r'$B^T = <Bt>$ (chuyển vị: hàng thành cột)', Bt=pmat(Bt)), T(r'$<c>X = B^T + <d>A = <S>$', c=c, d='' if d == 1 else d, S=pmat(Bt + d * A)), T(r'$X = <X>$; phần tử hàng <i>, cột <k>: $<ok>$', X=pmat(X), i=i, k=i2, ok=X[i - 1, i2 - 1]))
    Xw = (B + d * A) / c
    return NQ(q, X[i - 1, i2 - 1], [Xw[i - 1, i2 - 1], X[i2 - 1, i - 1], (Bt + d * A)[i - 1, i2 - 1], -X[i - 1, i2 - 1]], ex)


# =============== Câu 26: giới hạn chứa tham số ===============
def n26a(rng, j):
    p, qq, r, s = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, -1, 4]), rng.choice([1, 2, 5]), rng.choice([1, 2, -1, 3])
    a, b = p, qq - p * s
    f = (p * x ** 2 + qq * x + r) / (x + s)
    assert sp.cancel(f - a * x - b - (r - b * s) / (x + s)) == 0
    ask = rng.choice([('a + b', a + b), ('a - b', a - b), (r'a\cdot b', a * b)])
    q = T(r'Biết $\lim\limits_{x\to +\infty}\left(\dfrac{<n>}{<d>} - ax - b\right) = 0$ (tức đường thẳng $y = ax + b$ là tiệm cận xiên của đồ thị). Giá trị của $<e>$ bằng', n=p * x ** 2 + qq * x + r, d=x + s, e=ask[0])
    rem = r - b * s
    if rem == 0 or b == 0:
        raise Retry
    ex = steps(T(r'Chia đa thức: $\dfrac{<n>}{<d>} = <l> <sg> \dfrac{<rem>}{<d>}$', n=p * x ** 2 + qq * x + r, d=x + s, l=a * x + b, sg='+' if rem > 0 else '-', rem=abs(rem)),
               T(r'Phân thức $\dfrac{<rem>}{<d>} \to 0$ khi $x \to +\infty$ nên $a = <a>,\ b = <b>$', rem=abs(rem), d=x + s, a=a, b=b), T(r'$<e> = <ok>$', e=ask[0], ok=ask[1]))
    return NQ(q, ask[1], [p + qq, a, b, ask[1] + s, -ask[1]], ex)


def n26c(rng, j):
    L, b = rng.choice([(2, 2), (8, 4), (18, 6), (R(1, 2), 1), (R(9, 2), 3)])
    assert limit((1 - cos(b * x)) / x ** 2, x, 0) == L
    ask = rng.choice([('a + b', 1 + b), ('2a + b', 2 + b), (r'a\cdot b', b)])
    q = T(r'Biết $\lim\limits_{x\to 0}\dfrac{a - \cos bx}{x^2} = <L>$ với $b > 0$. Giá trị của $<e>$ bằng', L=L, e=ask[0])
    ex = steps(r'Mẫu số tiến về 0 và giới hạn hữu hạn nên tử số cũng tiến về 0: $a - 1 = 0 \Rightarrow a = 1$', r'$1 - \cos bx \sim \dfrac{b^2x^2}{2}$ nên giới hạn bằng $\dfrac{b^2}{2}$',
               T(r'$\dfrac{b^2}{2} = <L> \Rightarrow b = <b>$ (vì $b > 0$)', L=L, b=b), T(r'$<e> = <ok>$', e=ask[0], ok=ask[1]))
    return NQ(q, ask[1], [1 + L, b, 2 * L, ask[1] + 1, 1 + b * b], ex)


def n26d(rng, j):
    r = rng.choice([1, 2, -1, 3, -2])
    a, b, L = -3 * r * r, 2 * r ** 3, 3 * r
    assert sp.cancel((x ** 3 + a * x + b) / (x - r) ** 2).subs(x, r) == L
    ask = rng.choice([('a + b + L', a + b + L), ('a + b', a + b), ('b - a', b - a)])
    q = T(r'Biết $\lim\limits_{x\to <r>}\dfrac{x^3 + ax + b}{<d>} = L$ với $L$ là một số hữu hạn. Giá trị của $<e>$ bằng', r=r, d=sp.factor((x - r) ** 2), e=ask[0])
    ex = steps(T(r'Mẫu số có nghiệm kép $x = <r>$ nên tử số $g(x) = x^3 + ax + b$ phải thỏa mãn $g(<r>) = 0$ và $g\'(<r>) = 0$', r=r),
               T(r"$g'(x) = 3x^2 + a \Rightarrow a = <a>$; $g(<r>) = 0 \Rightarrow b = <b>$", r=r, a=a, b=b), T(r'$x^3 <ax> <bb> = <f>$ nên $L = <L>$', ax=tx(a * x), bb=sgn_(b), f=sp.factor(x ** 3 + a * x + b), L=L),
               T(r'$<e> = <ok>$', e=ask[0], ok=ask[1]))
    return NQ(q, ask[1], [a + b, L, a - b, ask[1] + r, -ask[1]], ex)


# =============== Câu 30: tổng của chuỗi ===============
def n30a(rng, j):
    m = rng.choice([1, 2, 3])
    ok = R(1, math.factorial(m))
    assert abs(sum(n_ / math.factorial(n_ + 1) for n_ in range(m, 40)) - float(ok)) < 1e-12
    q = T(r'Tổng của chuỗi $\displaystyle\sum_{n=<m>}^{+\infty}\dfrac{n}{(n+1)!}$ bằng', m=m)
    ex = steps(r'$\dfrac{n}{(n+1)!} = \dfrac{(n+1) - 1}{(n+1)!} = \dfrac{1}{n!} - \dfrac{1}{(n+1)!}$', T(r'Tổng riêng thu gọn: $S_N = \dfrac{1}{<m>!} - \dfrac{1}{(N+1)!}$', m=m), T(r'$N \to +\infty$: $S = \dfrac{1}{<m>!} = <ok>$', m=m, ok=ok))
    return NQ(q, ok, [E - 1, sp.Integer(1) if m != 1 else R(1, 2), ok / 2, E - 2, ok * 2], ex)


def n30b(rng, j):
    m = rng.choice([2, 3, 4, 5])
    ok = log(R(m - 1, m))
    assert abs(sum(math.log(1 - 1.0 / n_ ** 2) for n_ in range(m, 200000)) - float(ok)) < 1e-4
    q = T(r'Tổng của chuỗi $\displaystyle\sum_{n=<m>}^{+\infty}\ln\left(1 - \dfrac{1}{n^2}\right)$ bằng', m=m)
    ex = steps(r'$\ln\left(1 - \dfrac{1}{n^2}\right) = \ln\dfrac{(n-1)(n+1)}{n^2} = \ln\dfrac{n-1}{n} - \ln\dfrac{n}{n+1}$', T(r'Tổng riêng thu gọn: $S_N = \ln\dfrac{<a>}{<m>} - \ln\dfrac{N}{N+1}$', a=m - 1, m=m),
               T(r'$N \to +\infty$: $S = \ln\dfrac{<a>}{<m>}$', a=m - 1, m=m))
    f = lambda p_, q_: r'$\ln\dfrac{%d}{%d}$.' % (p_, q_)
    return Q(q, f(m - 1, m), [f(m, m - 1) if m > 2 else r'$\ln 2$.', f(m, m + 1), '$0$.'], ex)


def n30c(rng, j):
    N = rng.choice([9, 19, 24, 49, 99])
    if j % 2 == 0:
        body, ok, dec, SN = r'\dfrac{1}{n(n+1)}', R(N, N + 1), r'\dfrac1n - \dfrac{1}{n+1}', r'1 - \dfrac{1}{N+1}'
    else:
        body, ok, dec, SN = r'\dfrac{1}{(2n-1)(2n+1)}', R(N, 2 * N + 1), r'\dfrac12\left(\dfrac{1}{2n-1} - \dfrac{1}{2n+1}\right)', r'\dfrac12\left(1 - \dfrac{1}{2N+1}\right)'
    q = T(r'Gọi $S_N$ là tổng riêng thứ $N$ (tổng của $N$ số hạng đầu tiên) của chuỗi $\displaystyle\sum_{n=1}^{+\infty}<b>$. Giá trị của $S_{<N>}$ bằng', b=body, N=N)
    ex = steps(T(r'$<b> = <d>$', b=body, d=dec), T(r'Cộng $N$ số hạng đầu, các số hạng ở giữa triệt tiêu: $S_N = <S>$', S=SN), T(r'$S_{<N>} = <ok>$', N=N, ok=ok))
    return NQ(q, ok, [sp.Integer(1) if j % 2 == 0 else R(1, 2), R(N - 1, N), R(1, N + 1), R(N, N + 2), R(N + 1, N + 2)], ex)


def n30d(rng, j):
    a, b, qq = rng.choice([1, 2, 3]), rng.choice([1, 2, -1, 3]), rng.choice([2, 3, 4, 5])
    ok = a * R(qq, (qq - 1) ** 2) + R(b, qq - 1)
    assert abs(sum((a * n_ + b) / qq ** n_ for n_ in range(1, 200)) - float(ok)) < 1e-9
    q = T(r'Biết $\displaystyle\sum_{n=1}^{+\infty}x^n = \dfrac{x}{1-x}$ và $\displaystyle\sum_{n=1}^{+\infty}nx^n = \dfrac{x}{(1-x)^2}$ với $|x| < 1$. Tổng của chuỗi $\displaystyle\sum_{n=1}^{+\infty}\dfrac{<e>}{<q>^n}$ bằng', e=a * n + b, q=qq)
    ex = steps(T(r'Tách: $<a>\displaystyle\sum_{n\ge1}\dfrac{n}{<q>^n} <sb>\sum_{n\ge1}\dfrac{1}{<q>^n}$', a='' if a == 1 else a, q=qq, sb=('+' if b > 0 else '-') + ('' if abs(b) == 1 else ' %d' % abs(b))), T(r'Với $x = \dfrac{1}{<q>}$: $\displaystyle\sum\dfrac{n}{<q>^n} = <s1>,\quad \sum\dfrac{1}{<q>^n} = <s2>$', q=qq, s1=R(qq, (qq - 1) ** 2), s2=R(1, qq - 1)),
               T(r'Tổng: $<a>\cdot<s1> <sb>\cdot<s2> = <ok>$', a=a, s1=R(qq, (qq - 1) ** 2), sb=sgn_(b), s2=R(1, qq - 1), ok=ok))
    return NQ(q, ok, [a * R(qq, (qq - 1) ** 2), a * R(1, qq - 1) + R(b, qq - 1), ok + R(b, 1), ok * 2, R(a + b, qq - 1)], ex)


# =============== Câu 43–45: nhóm câu hỏi hàm nhiều biến ===============
def ngB(rng, j):
    p, qq = rng.choice([(1, 2), (2, 1), (3, 1), (1, 3), (2, 3), (3, 2), (-1, 2), (2, -1)])
    a, b = 2 * p - qq, 2 * qq - p
    f = x ** 2 - x * y + y ** 2 - a * x - b * y
    fmin = f.subs({x: p, y: qq})
    stem = T(r'Cho hàm số $f(x,y) = <f>$.', f=f)
    qs = [NQ(r"Giá trị của $f'_x(1;1)$ bằng", 1 - a, [1 - b if a != b else 2 - a, a - 1, 2 - a, -a], steps(T(r"$f'_x = <fx>$", fx=diff(f, x)), T(r"$f'_x(1;1) = <ok>$", ok=1 - a))),
          NQ(r'Gọi $(x_0;y_0)$ là điểm dừng của hàm số, giá trị của $x_0 + 2y_0$ bằng', p + 2 * qq, [2 * p + qq, p + qq, p - qq, p * qq],
             steps(T(r"$f'_x = <fx> = 0,\quad f'_y = <fy> = 0$", fx=diff(f, x), fy=diff(f, y)), T(r'Giải hệ: $x_0 = <p>,\ y_0 = <q>$', p=p, q=qq), T(r'$x_0 + 2y_0 = <ok>$', ok=p + 2 * qq))),
          NQ('Giá trị cực tiểu của hàm số bằng', fmin, [-fmin, fmin + 1, f.subs({x: qq, y: p}) if f.subs({x: qq, y: p}) != fmin else fmin - 1, sp.Integer(0)],
             steps(r"$A = f''_{xx} = 2,\ B = f''_{xy} = -1,\ C = f''_{yy} = 2$", r'$AC - B^2 = 3 > 0$ và $A > 0$ nên điểm dừng là điểm cực tiểu', T(r'$f(<p>;<q>) = <ok>$', p=p, q=qq, ok=fmin)))]
    return {'stem': stem, 'questions': qs}


def ngC(rng, j):
    a, c = rng.choice([1, 2, 3]), rng.choice([0, 5, 10, 20])
    f = x ** 3 - 3 * a * a * x + y ** 2 + c
    p0 = {x: rng.choice([1, 2, -1]), y: rng.choice([1, 2])}
    stem = T(r'Cho hàm số $f(x,y) = <f>$.', f=f)
    fmin = f.subs({x: a, y: 0})
    qs = [NQ(T(r"Giá trị của $f''_{xx}(<a>;<b>) + f''_{yy}(<a>;<b>)$ bằng", a=p0[x], b=p0[y]), 6 * p0[x] + 2, [6 * p0[x], 6 * p0[x] - 2, 2, 3 * p0[x] ** 2 + 2],
             steps(r"$f''_{xx} = 6x,\quad f''_{yy} = 2$", T(r'Tổng tại điểm đã cho: $<ok>$', ok=6 * p0[x] + 2))),
          NQ('Số điểm cực trị của hàm số bằng', 1, [2, 0, 3],
             steps(T(r"$f'_x = 3x^2 - <t> = 0,\ f'_y = 2y = 0 \Rightarrow$ điểm dừng $(<a>;0)$ và $(-<a>;0)$", t=3 * a * a, a=a), T(r'$AC - B^2 = 12x$: tại $(<a>;0)$ dương (cực tiểu vì $A > 0$), tại $(-<a>;0)$ âm (không là cực trị)', a=a), 'Có đúng $1$ điểm cực trị')),
          NQ('Giá trị cực tiểu của hàm số bằng', fmin, [f.subs({x: -a, y: 0}), sp.Integer(c), fmin - 1, -fmin if fmin != 0 else 1],
             steps(T(r'Điểm cực tiểu $(<a>;0)$', a=a), T(r'$f(<a>;0) = <a>^3 - 3\cdot<a>^3 + <c> = <ok>$', a=a, c=c, ok=fmin)))]
    return {'stem': stem, 'questions': qs}


def ngD(rng, j):
    f = rng.choice([x ** 2 * y + y ** 2, x ** 2 + x * y + y ** 2, x ** 3 + x * y ** 2, x * y ** 2 + 2 * x])
    x0, y0 = rng.choice([1, 2]), rng.choice([1, 2, -1])
    p0 = {x: x0, y: y0}
    gx, gy, z0 = diff(f, x).subs(p0), diff(f, y).subs(p0), f.subs(p0)
    l1, l2, ln = rng.choice([(3, 4, 5), (4, 3, 5), (-3, 4, 5), (4, -3, 5)])
    dd = R(gx * l1 + gy * l2, ln)
    zc = z0 - gx * x0 - gy * y0
    stem = T(r'Cho hàm số $f(x,y) = <f>$ và điểm $M(<a>;<b>)$.', f=f, a=x0, b=y0)
    qs = [NQ(r'Gọi $\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng', gx + gy, [gx - gy, gx * gy, gx, gy, gx + gy + 1],
             steps(T(r"$f'_x = <fx>,\quad f'_y = <fy>$", fx=diff(f, x), fy=diff(f, y)), T(r'$\nabla f(M) = (<gx>;<gy>) \Rightarrow p + q = <ok>$', gx=gx, gy=gy, ok=gx + gy))),
          NQ(T(r'Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\vec l = (<a>;<b>)$ bằng', a=l1, b=l2), dd, [gx * l1 + gy * l2, R(gx * l2 + gy * l1, ln), -dd, R(gx + gy, ln)],
             steps(T(r'$|\vec l| = <ln>$', ln=ln), T(r'$\dfrac{\partial f}{\partial \vec l} = \dfrac{(<gx>)\cdot(<a>) + (<gy>)\cdot(<b>)}{<ln>} = <ok>$', gx=gx, a=l1, gy=gy, b=l2, ln=ln, ok=dd))),
          NQ(r'Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng', zc, [z0, -zc if zc != 0 else 1, z0 + gx * x0 + gy * y0, gx + gy],
             steps(T(r'$z = <z0> + (<gx>)(<u>) + (<gy>)(<w>)$', z0=z0, gx=gx, u=x - x0, gy=gy, w=y - y0), T(r'Cho $x = y = 0$: $z = <ok>$', ok=zc)))]
    return {'stem': stem, 'questions': qs}


# =============== Câu 46: định thức (trả lời ngắn) ===============
def n46a(rng, j):
    m0 = rng.choice([2, 3, 4])
    if j % 2 == 0:
        A = Matrix([[m_, 1, 0], [1, m_, 1], [0, 1, m_]])
    else:
        A = Matrix([[m_, 1, 1], [1, m_, 1], [1, 1, m_]])
    d = sp.expand(A.det())
    val = d.subs(m_, m0)
    roots = [r for r in sp.solve(d - val, m_) if r.is_real and r > 0 and r.is_integer]
    if roots != [m0]:
        raise Retry
    q = T(r'Cho ma trận $A = <A>$ với $m$ là số nguyên dương. Biết $\det A = <v>$, tìm $m$.', A=pmat(A), v=val)
    return SQ(q, str(m0), steps(T(r'$\det A = <d> = <f>$', d=d, f=sp.factor(d)), T(r'$<d> = <v> \Leftrightarrow <g> = 0$', d=d, v=val, g=sp.factor(d - val)), T(r'Nghiệm nguyên dương duy nhất: $m = <m>$', m=m0)))


def n46b(rng, j):
    A, B = rmat(rng, 2, 2, -3, 4), rmat(rng, 2, 2, -3, 4)
    da, db = A.det(), B.det()
    if da == 0 or db == 0:
        raise Retry
    inv_a = j % 2 == 0
    ok = R(db, da) if inv_a else R(da, db)
    if ok.q > 4:
        raise Retry
    q = T(r'Cho hai ma trận $A = <A>$ và $B = <B>$. Tính $\det\left(<e>\right)$.', A=pmat(A), B=pmat(B), e='A^{-1}B' if inv_a else 'AB^{-1}')
    return SQ(q, short_num(ok), steps(T(r'$\det A = <a>,\quad \det B = <b>$', a=da, b=db), T(r'$\det\left(<e>\right) = <f> = <ok>$', e='A^{-1}B' if inv_a else 'AB^{-1}', f=r'\dfrac{\det B}{\det A}' if inv_a else r'\dfrac{\det A}{\det B}', ok=ok)))


def n46c(rng, j):
    a, b, c = sorted(rng.sample([-2, -1, 1, 2, 3, 4, 5], 3))
    A = Matrix([[1, 1, 1], [a, b, c], [a * a, b * b, c * c]])
    ok = (b - a) * (c - a) * (c - b)
    assert A.det() == ok
    q = T(r'Tính định thức Vandermonde $D = \begin{vmatrix}1 & 1 & 1 \\ <a> & <b> & <c> \\ <a2> & <b2> & <c2>\end{vmatrix}$.', a=a, b=b, c=c, a2=a * a, b2=b * b, c2=c * c)
    return SQ(q, str(ok), steps(r'Với các số $a, b, c$ ở hàng hai: $D = (b - a)(c - a)(c - b)$', T(r'$D = (<p>)(<q>)(<r>) = <ok>$', p=b - a, q=c - a, r=c - b, ok=ok)))


def n46d(rng, j):
    A = rmat(rng, 3, 3, -2, 4)
    if j % 2 == 0:
        S, e, note = A + A.T, 'A + A^T', ''
    else:
        S, e, note = A - A.T, 'A - A^T', r' (ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0, vì $\det(-M) = -\det M$ và $M^T = -M$)'
    ok = S.det()
    q = T(r'Cho ma trận $A = <A>$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\det\left(<e>\right)$.', A=pmat(A), e=e)
    return SQ(q, str(ok), steps(T(r'$<e> = <S>$', e=e, S=pmat(S)), T(r'$\det\left(<e>\right) = <ok>$', e=e, ok=ok) + note))


# =============== Câu 48: chuỗi lũy thừa (trả lời ngắn) ===============
def n48b(rng, j):
    c, p = rng.choice([1, 2, -1, 3, -2]), rng.choice([2, 3, 4, 5])
    big = j % 2 == 0
    body = r'\dfrac{%s^{n}}{n\cdot%d^n}' % ('x' if c == 0 else '(%s)' % tx(x - c), p)
    q = T(r'Tìm số nguyên <w> thuộc miền hội tụ của chuỗi lũy thừa $\displaystyle\sum_{n=1}^{+\infty}<b>$.', w='lớn nhất' if big else 'nhỏ nhất', b=body)
    ex = steps(T(r'Bán kính hội tụ $R = <p>$, khoảng hội tụ $(<a>;<b>)$', p=p, a=c - p, b=c + p), T(r'Tại $x = <b>$: $\sum\dfrac1n$ phân kỳ; tại $x = <a>$: $\sum\dfrac{(-1)^n}{n}$ hội tụ', a=c - p, b=c + p),
               T(r'Miền hội tụ $[<a>;<b>)$; số nguyên <w>: $<ok>$', a=c - p, b=c + p, w='lớn nhất' if big else 'nhỏ nhất', ok=c + p - 1 if big else c - p))
    return SQ(q, str(c + p - 1 if big else c - p), ex)


def n48c(rng, j):
    a, p = rng.choice([(2, 3), (2, 5), (3, 6), (2, 4), (4, 6), (3, 3), (4, 2)])
    b = rng.choice([1, -1, 3, 2])
    ok = R(2 * p, a)
    body = r'\dfrac{(%s)^{n}}{n^2\cdot%d^n}' % (tx(a * x + b), p)
    q = T(r'Miền hội tụ của chuỗi lũy thừa $\displaystyle\sum_{n=1}^{+\infty}<b>$ là một đoạn $[\alpha;\beta]$. Tính độ dài $\beta - \alpha$ của đoạn đó.', b=body)
    ex = steps(T(r'Đặt $t = <e>$: chuỗi $\sum\dfrac{t^n}{n^2\cdot<p>^n}$ hội tụ khi và chỉ khi $|t| \le <p>$ (tại hai đầu mút là chuỗi $\sum\dfrac{(\pm1)^n}{n^2}$ hội tụ)', e=a * x + b, p=p),
               T(r'$-<p> \le <e> \le <p> \Leftrightarrow <lo> \le x \le <hi>$', p=p, e=a * x + b, lo=R(-p - b, a), hi=R(p - b, a)), T(r'$\beta - \alpha = <ok>$', ok=ok))
    return SQ(q, short_num(ok), ex)


def n48d(rng, j):
    body, Rr, how = [(r'\dfrac{n^2x^{2n}}{4^n}', 2, r'Đặt $t = x^2$: $\sum\dfrac{n^2t^n}{4^n}$ có bán kính hội tụ 4 theo $t$, tức $x^2 < 4$'),
                     (r'\dfrac{x^{3n}}{n\cdot8^n}', 2, r'Đặt $t = x^3$: $\sum\dfrac{t^n}{n\cdot8^n}$ có bán kính hội tụ 8 theo $t$, tức $|x|^3 < 8$'),
                     (r'\dfrac{x^{2n}}{n\cdot9^n}', 3, r'Đặt $t = x^2$: bán kính hội tụ theo $t$ bằng 9, tức $x^2 < 9$'),
                     (r'\dfrac{n\,x^{2n}}{25^n}', 5, r'Đặt $t = x^2$: bán kính hội tụ theo $t$ bằng 25, tức $x^2 < 25$'),
                     (r'\dfrac{x^{4n}}{16^n}', 2, r'Chuỗi hình học công bội $\dfrac{x^4}{16}$, hội tụ khi $x^4 < 16$'),
                     (r'\dfrac{x^{3n}}{27^n\sqrt n}', 3, r'Đặt $t = x^3$: bán kính hội tụ theo $t$ bằng 27, tức $|x|^3 < 27$')][j % 6]
    q = T(r'Tìm bán kính hội tụ của chuỗi lũy thừa $\displaystyle\sum_{n=1}^{+\infty}<b>$.', b=body)
    return SQ(q, str(Rr), steps(how, T('$R = <R>$', R=Rr)))


# =============== Câu 49: phương trình cấp hai (trả lời ngắn) ===============
def n49a(rng, j):
    r1, r2 = rng.choice([(1, 2), (1, 3), (2, 3), (1, 4), (2, 4)])
    y0, y1 = rng.choice([1, 2, 3, 4]), rng.choice([-2, -1, 0, 1, 2, 3])
    ok = R(y1 + (r1 + r2) * y0, r1 * r2)
    if ok.q != 1:
        raise Retry
    C1, C2 = symbols('C1 C2')
    s = sp.solve([C1 + C2 - y0, -r1 * C1 - r2 * C2 - y1], [C1, C2])
    assert simplify(integrate(s[C1] * exp(-r1 * x) + s[C2] * exp(-r2 * x), (x, 0, oo)) - ok) == 0
    q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <y0>;\ y\'(0) = <y1>$. Tính $\displaystyle\int_0^{+\infty} y(x)\,dx$.<span class="q-hint">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\infty$ và chú ý rằng $y,\ y\' \to 0$ khi $x \to +\infty$.</span>', o=ode2(r1 + r2, r1 * r2, '0'), y0=y0, y1=y1)
    ex = steps(T(r'Nghiệm đặc trưng $k = -<r1>,\ k = -<r2>$ đều âm nên $y,\ y\' \to 0$ khi $x \to +\infty$', r1=r1, r2=r2),
               T(r"Tích phân hai vế: $\left[y'\right]_0^{+\infty} + <p>\left[y\right]_0^{+\infty} + <q>\displaystyle\int_0^{+\infty}y\,dx = 0$", p=r1 + r2, q=r1 * r2),
               T(r'$-(<y1>) - <p>\cdot<y0> + <q>I = 0 \Rightarrow I = \dfrac{<n>}{<q>} = <ok>$', y1=y1, p=r1 + r2, y0=y0, q=r1 * r2, n=y1 + (r1 + r2) * y0, ok=ok))
    return SQ(q, str(ok), ex)


def n49b(rng, j):
    r, a, b = rng.choice([1, 2]), rng.choice([1, 2, 3]), rng.choice([0, 1, 2])
    c1 = rng.choice([1, 2])
    val = a + b + c1 * math.exp(r)
    if abs(val - round(val)) > 0.4:
        raise Retry
    q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <y0>;\ y\'(0) = <y1>$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.', o=ode2(0, -r * r, form((-r * r * a, 'x'), (-r * r * b, ''))), y0=b + c1, y1=a + r * c1)
    ex = steps(T(r'Phương trình đặc trưng: $k^2 - <r2> = 0 \Rightarrow k = \pm<r>$', r2=r * r, r=r), T(r'Nghiệm riêng dạng $y^* = Ax + B$: $-<r2>(Ax + B) = <rhs> \Rightarrow y^* = <yp>$', r2=r * r, rhs=form((-r * r * a, 'x'), (-r * r * b, '')), yp=form((a, 'x'), (b, ''))),
               '$y = %s + C_1%s + C_2%s$' % (form((a, 'x'), (b, '')), ex_(r), ex_(-r)), T(r"$y(0) = <y0>,\ y'(0) = <y1> \Rightarrow C_1 = <c1>,\ C_2 = 0$", y0=b + c1, y1=a + r * c1, c1=c1),
               T(r'$y(1) = <s> + <c1><e> \approx <v>$', s=a + b, c1='' if c1 == 1 else c1, e='e' if r == 1 else 'e^{%d}' % r, v=vn(val, 2).replace(',', '{,}')), 'Đáp số: $%d$' % round(val))
    return SQ(q, str(int(round(val))), ex)


def n49c(rng, j):
    r, y0 = rng.choice([1, 2]), rng.choice([2, 3, 4, 5, 6, 8])
    val = 100 * y0 * math.exp(-r)
    if abs(val - round(val)) > 0.4:
        raise Retry
    q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình $<o>$ thỏa mãn $y(0) = <y0>$ và bị chặn khi $x \to +\infty$. Tính $100\cdot y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.', o=ode2(0, -r * r, '0'), y0=y0)
    ex = steps(T(r'Nghiệm tổng quát: $y = C_1<e1> + C_2<e2>$', e1=ex_(r), e2=ex_(-r)), T(r'$<e1> \to +\infty$ khi $x \to +\infty$ nên nghiệm bị chặn buộc $C_1 = 0$', e1=ex_(r)),
               T(r'$y(0) = C_2 = <y0> \Rightarrow y = <y0><e2>$', y0=y0, e2=ex_(-r)), T(r'$100\cdot y(1) = <c>\cdot <e> \approx <v>$', c=100 * y0, e='e^{-1}' if r == 1 else 'e^{-%d}' % r, v=vn(val, 2).replace(',', '{,}')), 'Đáp số: $%d$' % round(val))
    return SQ(q, str(int(round(val))), ex)


# vị trí (số thứ tự câu trong đề) -> danh sách dạng mới; 'A' = dùng cho các đề mức cơ bản, 'B' = các đề mức khó hơn
NEW = {
    2: {'A': [n2b, n2e], 'B': [n2a, n2d]},
    3: {'A': [n3a], 'B': [n3b, n3d]},
    11: {'A': [n11e, n11b], 'B': [n11a, n11c, n11d]},
    14: {'A': [n14d, n14e, n14a], 'B': [n14b, n14c]},
    17: {'A': [n17c], 'B': [n17a, n17b, n17e]},
    19: {'A': [n19a, n19c, n19d], 'B': [n19b]},
    20: {'A': [n20a, n20d, n20b], 'B': [n20c]},
    24: {'A': [n24e, n24a], 'B': [n24c, n24d]},
    26: {'A': [n26a], 'B': [n26c, n26d]},
    30: {'A': [n30c, n30d], 'B': [n30a, n30b]},
    46: {'A': [n46c, n46b], 'B': [n46a, n46d]},
    48: {'A': [n48d, n48b], 'B': [n48c]},
    49: {'A': [n49c], 'B': [n49a, n49b]},
}
NEW_GROUPS = {1: {'A': [ngB, ngC], 'B': [ngD]}}
# số biến thể bên trong của từng dạng mới (các biến thể khác nhau về nội dung chứ không chỉ khác số)
VARIANTS = {n14b: 6, n19a: 3, n19b: 8, n20c: 6, n24d: 5, n48d: 6, n17e: 2, n14d: 2, n30c: 2, n46a: 2, n46d: 2, n48b: 2, n24a: 2, n17a: 2}
# số lần tối đa một dạng được dùng (dạng có nội dung cố định hoặc chỉ có vài bộ số khác nhau)
LIMIT = {n14e: 1, n14a: 3, n17c: 4, n17a: 4, n17e: 2, n30a: 3, n30b: 4, n19b: 8, n14b: 6, n24d: 5, n48d: 6}


# ====================================================================================
# Đợt hai: câu 1, 4, 5, 23, 25, 36, 39 và nhóm câu 40–42
# ====================================================================================
TRIPLES = [(1, 2, 2), (2, 3, 6), (1, 4, 8), (4, 4, 7), (2, 6, 9), (6, 6, 7)]
dot = lambda u, v: sum(a * b for a, b in zip(u, v))


def tvec(rng):
    """Véc tơ nguyên có độ dài nguyên."""
    t = list(rng.choice(TRIPLES))
    rng.shuffle(t)
    v = [c * rng.choice([1, -1]) for c in t]
    return v, math.isqrt(dot(v, v))


# =============== Câu 1: véc tơ, tích vô hướng ===============
def n1a(rng, j):
    (u, nu), (v, nv) = tvec(rng), tvec(rng)
    d = dot(u, v)
    if d == 0 or abs(d) == nu * nv:
        raise Retry
    ok = R(d, nu * nv)
    q = T(r'Trong không gian $\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = <u>$ và $v = <v>$. Gọi $\alpha$ là góc giữa $u$ và $v$, giá trị của $\cos\alpha$ bằng', u=vec(u), v=vec(v))
    ex = steps(T(r'$\langle u, v\rangle = <d>$', d=d), T(r'$|u| = \sqrt{<a>} = <nu>,\quad |v| = \sqrt{<b>} = <nv>$', a=nu * nu, nu=nu, b=nv * nv, nv=nv),
               T(r'$\cos\alpha = \dfrac{\langle u, v\rangle}{|u|\,|v|} = <ok>$', ok=ok))
    return NQ(q, ok, [-ok, R(d, nu * nu), R(d, nu + nv), R(d, nu * nu * nv * nv), R(d, nv * nv)], ex)


def n1b(rng, j):
    v = [rng.randint(-2, 2) for _ in range(3)]
    u = [rng.randint(-4, 5) for _ in range(3)]
    n2, d = dot(v, v), dot(u, v)
    if n2 not in (2, 3, 5, 6, 9) or d == 0 or d % n2:
        raise Retry
    t_ = d // n2
    p = [t_ * c for c in v]
    if p == u or sum(p) == 0:
        raise Retry
    q = T(r'Trong không gian $\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = <u>$ và $v = <v>$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \in \mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng', u=vec(u), v=vec(v))
    ex = steps(r'$\langle u - tv, v\rangle = 0 \Leftrightarrow t = \dfrac{\langle u, v\rangle}{\langle v, v\rangle}$', T(r'$\langle u, v\rangle = <d>,\quad \langle v, v\rangle = <n> \Rightarrow t = <t>$', d=d, n=n2, t=t_),
               T(r'$p = <t>v = <p>$, tổng các tọa độ: $<ok>$', t='' if t_ == 1 else '-' if t_ == -1 else t_, p=vec(p), ok=sum(p)))
    return NQ(q, sum(p), [d, t_, sum(u), sum(v), -sum(p)], ex)


def n1c(rng, j):
    a, b = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, 4])
    c = rint(rng, -3, 3, (0,))
    if abs(c) >= a * b:
        raise Retry
    p, qq = rng.choice([(2, -1), (1, -2), (2, -3), (3, -2), (1, 2), (2, 1), (3, 1), (1, -1)])
    ok = p * p * a * a + 2 * p * qq * c + qq * qq * b * b
    e = form((p, 'u'), (qq, 'v'))
    q = T(r'Trong không gian $\mathbb{R}^n$ với tích vô hướng thông thường, cho hai véc tơ $u, v$ thỏa mãn $|u| = <a>,\ |v| = <b>$ và $\langle u, v\rangle = <c>$. Giá trị của $|<e>|^2$ bằng', a=a, b=b, c=c, e=e)
    ex = steps(T(r'$|<e>|^2 = \langle <e>, <e>\rangle = <p2>|u|^2 <m> \langle u, v\rangle + <q2>|v|^2$', e=e, p2='' if p * p == 1 else p * p, m=sgn_(2 * p * qq), q2='' if qq * qq == 1 else qq * qq),
               T(r'$= <p2>\cdot<a2> <m>\cdot(<c>) + <q2>\cdot<b2> = <ok>$', p2=p * p, a2=a * a, m=sgn_(2 * p * qq), c=c, q2=qq * qq, b2=b * b, ok=ok))
    return NQ(q, ok, [p * p * a * a + qq * qq * b * b, p * p * a * a + p * qq * c + qq * qq * b * b, (p * a + qq * b) ** 2, p * p * a * a - 2 * p * qq * c + qq * qq * b * b], ex)


def n1d(rng, j):
    r1, r2 = sorted(rng.sample(range(-4, 5), 2))
    p, qq = -(r1 + r2), r1 * r2
    acute = j % 2 == 0
    ms = [m for m in range(-5, 6) if ((m - r1) * (m - r2) > 0) == acute and (m - r1) * (m - r2) != 0]
    for m in ms:   # loại trường hợp hai véc tơ cùng phương (góc 0 hoặc góc bẹt)
        if Matrix([[m, p, 1], [m, m, qq]]).rank() < 2:
            raise Retry
    if not ms or r2 - r1 < 2:
        raise Retry
    q = T(r'Trong không gian $\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;<p>;1)$ và $v = (m;m;<q>)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc <k> (tức $\langle u, v\rangle <s> 0$)?',
          p=p, q=qq, k='nhọn' if acute else 'tù', s='>' if acute else '<')
    ex = steps(T(r'$\langle u, v\rangle = <e> = <f>$', e=m_ ** 2 + p * m_ + qq, f=sp.factor(m_ ** 2 + p * m_ + qq)),
               T(r'$\langle u, v\rangle <s> 0 \Leftrightarrow <c>$', s='>' if acute else '<', c=(r'm < %d \text{ hoặc } m > %d' % (r1, r2)) if acute else '%d < m < %d' % (r1, r2)),
               T(r'Các số nguyên thuộc $[-5;5]$ thỏa mãn: $<n>$ giá trị', n=len(ms)))
    return NQ(q, len(ms), [11 - len(ms), len(ms) + 2, len(ms) + 1, len(ms) - 1, 11], ex)


# =============== Câu 4: phép toán ma trận ===============
def n4a(rng, j):
    if j % 2 == 0:
        a, nn = rint(rng, -3, 4, (0,)), rng.choice([6, 8, 10, 12, 15, 20])
        low = rng.random() < .5
        A = Matrix([[1, 0], [a, 1]]) if low else Matrix([[1, a], [0, 1]])
        ok = 2 + nn * a
        q = T(r'Cho ma trận $A = <A>$. Tổng tất cả các phần tử của ma trận $A^{<n>}$ bằng', A=pmat(A), n=nn)
        ex = steps(T(r'$A^2 = <A2>,\ A^3 = <A3>$; quy nạp: $A^n = <An>$', A2=pmat(A ** 2), A3=pmat(A ** 3), An=pmat(Matrix([[1, 0], [a * n, 1]]) if low else Matrix([[1, a * n], [0, 1]]))),
                   T(r'$A^{<n>} = <P>$, tổng các phần tử: $<ok>$', n=nn, P=pmat(A ** nn), ok=ok))
        return NQ(q, ok, [2 + a ** min(nn, 3), 2 + a, nn * a, 2 * nn + a, 1 + nn * a], ex)
    c, b, nn = rng.choice([2, 3]), rint(rng, -2, 3, (0,)), rng.choice([3, 4, 5])
    A = Matrix([[c, b], [0, c]])
    ok = (A ** nn)[0, 1]
    assert ok == nn * c ** (nn - 1) * b
    q = T(r'Cho ma trận $A = <A>$. Viết $A = <c>I + N$ với $N = <N>$ và chú ý $N^2 = 0$, phần tử thuộc hàng 1 và cột 2 của ma trận $A^{<n>}$ bằng', A=pmat(A), c=c, N=pmat(Matrix([[0, b], [0, 0]])), n=nn)
    ex = steps(T(r'$I$ và $N$ giao hoán, $N^2 = 0$ nên $(<c>I + N)^n = <c>^nI + n\cdot<c>^{n-1}N$', c=c), T(r'$A^{<n>} = <cn>I + <k>N = <P>$', n=nn, cn=c ** nn, k=nn * c ** (nn - 1), P=pmat(A ** nn)),
               T(r'Phần tử hàng 1, cột 2: $<ok>$', ok=ok))
    return NQ(q, ok, [b ** nn, c ** nn * b, nn * b, c ** (nn - 1) * b, nn * c ** nn * b], ex)


def n4b(rng, j):
    A = rmat(rng, 2, 2, -3, 4)
    tr_, d = A.trace(), A.det()
    if (A[0, 1] == 0 and A[1, 0] == 0) or d == 0 or tr_ == 0:
        raise Retry
    ask = rng.choice([('x + y', tr_ - d), ('x - y', tr_ + d), (r'x\cdot y', -tr_ * d)])
    q = T(r'Cho ma trận $A = <A>$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $<e>$ bằng', A=pmat(A), e=ask[0])
    ex = steps(T(r'$A^2 = <A2>$', A2=pmat(A * A)), T(r'So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = <x>$', x=tr_),
               T(r'So sánh phần tử hàng 1, cột 1: $<p> = <x>\cdot(<a>) + y \Rightarrow y = <y>$', p=(A * A)[0, 0], x=tr_, a=A[0, 0], y=-d), T(r'$<e> = <ok>$', e=ask[0], ok=ask[1]))
    assert A * A == tr_ * A - d * sp.eye(2)
    return NQ(q, ask[1], [tr_ + d if ask[1] != tr_ + d else tr_ - d, tr_ * d, tr_, -d, ask[1] + 1], ex)


def n4c(rng, j):
    A, B = rmat(rng, 2, 3, -2, 3), rmat(rng, 3, 2, -2, 3)
    G = A * A.T
    diag_ = j % 2 == 0
    ok = G.trace() if diag_ else G[0, 1]
    assert ((A * B).T - B.T * A.T + G) == G
    what = 'Tổng các phần tử trên đường chéo chính' if diag_ else 'Phần tử thuộc hàng 1 và cột 2'
    q = T(r'Cho hai ma trận $A = <A>$ và $B = <B>$. Xét ma trận $C = (AB)^T - B^TA^T + AA^T$. <w> của $C$ bằng', A=pmat(A), B=pmat(B), w=what)
    ex = steps(r'Tính chất của phép chuyển vị: $(AB)^T = B^TA^T$ nên $C = AA^T$', T(r'$AA^T = <G>$', G=pmat(G)), T(r'<w>: $<ok>$', w=what, ok=ok))
    w1 = (A.T * A).trace() + 1 if diag_ else (A.T * A)[0, 1]
    return NQ(q, ok, [w1, (A * B).trace(), (A * B)[0, 1], ok + 2, -ok], ex)


IDEM = [(2, -1, 2), (2, 1, -2), (2, 2, -1), (2, -2, 1), (3, 2, -3), (3, -2, 3), (3, 3, -2), (3, -3, 2), (-1, 1, -2), (-1, -1, 2), (-1, 2, -1), (-2, 2, -3), (-2, 3, -2), (-2, -3, 2), (3, 1, -6), (3, -6, 1)]


def n4d(rng, j):
    a, b, c = rng.choice(IDEM)
    A = Matrix([[a, b], [c, 1 - a]])
    assert A * A == A
    nn = rng.choice([3, 4, 5, 6])
    Pn = (sp.eye(2) + A) ** nn
    assert Pn == sp.eye(2) + (2 ** nn - 1) * A
    ok = sum(Pn)
    q = T(r'Cho ma trận $A = <A>$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{<n>}$ bằng (gợi ý: dùng $A^k = A$ với mọi $k \ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$)', A=pmat(A), n=nn)
    ex = steps(r'$(I + A)^n = I + \displaystyle\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$', T(r'$(I + A)^{<n>} = I + <c>A = <P>$', n=nn, c=2 ** nn - 1, P=pmat(Pn)), T(r'Tổng các phần tử: $<ok>$', ok=ok))
    return NQ(q, ok, [2 + 2 ** nn * sum(A), 2 + nn * sum(A), 2 ** nn * (2 + sum(A)), 2 + (2 ** nn - 1), ok + 2], ex)


# =============== Câu 5: định thức, ma trận nghịch đảo ===============
P5 = [(r'2A^{-1}', lambda d: R(8, d), lambda d: R(2, d), r'\det\left(2A^{-1}\right) = 2^3\cdot\dfrac{1}{\det A}'),
      (r'3A^T', lambda d: 27 * d, lambda d: 3 * d, r'\det\left(3A^T\right) = 3^3\cdot\det A'),
      (r'A^2A^T', lambda d: d ** 3, lambda d: d ** 2, r'\det\left(A^2A^T\right) = (\det A)^2\cdot\det A'),
      (r'-2A', lambda d: -8 * d, lambda d: -2 * d, r'\det(-2A) = (-2)^3\cdot\det A'),
      (r'(2A)^{-1}', lambda d: R(1, 8 * d), lambda d: R(1, 2 * d), r'\det\left((2A)^{-1}\right) = \dfrac{1}{2^3\cdot\det A}'),
      (r'2A^{-1}A^TA^2', lambda d: 8 * d ** 2, lambda d: 2 * d ** 2, r'\det\left(2A^{-1}A^TA^2\right) = 2^3\cdot\dfrac{1}{\det A}\cdot\det A\cdot(\det A)^2'),
      (r'A\cdot(3A)^{-1}', lambda d: R(1, 27), lambda d: R(1, 3), r'\det\left(A(3A)^{-1}\right) = \det A\cdot\dfrac{1}{3^3\cdot\det A}'),
      (r'(-A)^3', lambda d: -d ** 3, lambda d: d ** 3, r'\det\left((-A)^3\right) = \left((-1)^3\det A\right)^3')]


def n5a(rng, j):
    e, f, g, why = P5[j % len(P5)]
    d = rng.choice([2, 3, 4, -2, -3, 5])
    ok = f(d)
    q = T(r'Cho $A$ là ma trận vuông cấp 3 có $\det A = <d>$. Giá trị của $\det\left(<e>\right)$ bằng', d=d, e=e)
    ex = steps(r'Với ma trận cấp 3: $\det(kA) = k^3\det A$, $\det\left(A^{-1}\right) = \dfrac{1}{\det A}$, $\det\left(A^T\right) = \det A$, $\det(AB) = \det A\cdot\det B$', '$' + why + '$', T(r'Thay $\det A = <d>$: kết quả $<ok>$', d=d, ok=ok))
    return NQ(q, ok, [g(d), -ok, d, R(1, d), ok * 2], ex)


def n5b(rng, j):
    r1, r2 = rng.sample([-4, -3, -2, -1, 1, 2, 3, 4, 5], 2)
    prod = -r1 * r2
    a = rng.choice([v for v in (1, -1, 2, -2, 3, -3, 4, -4, 5, 6, -6) if prod % v == 0])
    b, c = prod // a, -(r1 + r2)
    A = Matrix([[m_, a], [b, m_ + c]])
    assert sp.expand(A.det() - (m_ - r1) * (m_ - r2)) == 0
    ask = [('tổng bình phương', r1 * r1 + r2 * r2), ('tích', r1 * r2), ('tổng', r1 + r2)][j % 3]
    q = T(r'Cho ma trận $A = <A>$ với $m$ là tham số. Gọi $S$ là tập hợp tất cả các giá trị của $m$ để $A$ không khả nghịch. Giá trị của <w> các phần tử của $S$ bằng', A=pmat(A), w=ask[0])
    ex = steps(T(r'$\det A = <d>$', d=sp.expand(A.det())), T(r'$A$ không khả nghịch $\Leftrightarrow \det A = 0 \Leftrightarrow <f> = 0 \Leftrightarrow m = <a>$ hoặc $m = <b>$', f=sp.factor(A.det()), a=min(r1, r2), b=max(r1, r2)),
               T(r'Giá trị cần tìm: $<ok>$', ok=ask[1]))
    return NQ(q, ask[1], [r1 + r2, r1 * r2, r1 * r1 + r2 * r2, (r1 + r2) ** 2, -ask[1]], ex)


def n5c(rng, j):
    A, B, C = rmat(rng, 2, 2, -2, 4), rmat(rng, 2, 2, -3, 4), rmat(rng, 2, 2, -2, 4)
    da, dc = A.det(), C.det()
    if da in (0, 1) or dc in (0, 1) or da == dc:
        raise Retry
    upper = j % 2 == 0
    Mx = Matrix(sp.BlockMatrix([[A, B], [sp.zeros(2), C]])) if upper else Matrix(sp.BlockMatrix([[A, sp.zeros(2)], [B, C]]))
    ok = da * dc
    assert Mx.det() == ok
    q = T(r'Định thức của ma trận $M = <M>$ bằng (gợi ý: $M$ có dạng tam giác khối nên $\det M$ bằng tích định thức của hai khối vuông cấp 2 nằm trên đường chéo)', M=pmat(Mx))
    ex = steps(T(r'Khối trên đường chéo: $M_1 = <A>,\ M_2 = <C>$', A=pmat(A), C=pmat(C)), T(r'$\det M_1 = <a>,\quad \det M_2 = <c>$', a=da, c=dc), T(r'$\det M = <a>\cdot(<c>) = <ok>$', a=da, c=dc, ok=ok))
    return NQ(q, ok, [da + dc, da * dc - B.det(), -ok, da * dc + B.det(), Mx.trace()], ex)


def n5d(rng, j):
    Ai = rmat(rng, 2, 2, -3, 4)
    di = Ai.det()
    if j % 2 == 0:
        if di not in (2, -2, 4, -4, 1, -1, 3, -3):
            raise Retry
        k_ = rng.choice([2, 3, 4])
        ok = R(k_ * k_, di)
        q = T(r'Cho $A$ là ma trận vuông cấp 2 khả nghịch có ma trận nghịch đảo $A^{-1} = <B>$. Giá trị của $\det(<k>A)$ bằng', B=pmat(Ai), k=k_)
        ex = steps(T(r'$\det\left(A^{-1}\right) = <d> \Rightarrow \det A = <i>$', d=di, i=R(1, di)), T(r'$A$ cấp 2 nên $\det(<k>A) = <k>^2\cdot\det A = <ok>$', k=k_, ok=ok))
        return NQ(q, ok, [R(k_, di), k_ * k_ * di, k_ * di, R(1, di), -ok], ex)
    if di not in (1, -1):
        raise Retry
    A = Ai.inv()
    i, i2 = rng.randint(1, 2), rng.randint(1, 2)
    q = T(r'Cho $A$ là ma trận vuông cấp 2 khả nghịch có ma trận nghịch đảo $A^{-1} = <B>$. Phần tử thuộc hàng <i> và cột <k> của ma trận $A$ bằng', B=pmat(Ai), i=i, k=i2)
    ex = steps(r'$A = \left(A^{-1}\right)^{-1}$', T(r'$\det\left(A^{-1}\right) = <d>$ nên $A = <k><J><A>$', d=di, k='' if di == 1 else '-', J='' if di == 1 else pmat(Ai.adjugate()) + ' = ', A=pmat(A)), T(r'Phần tử hàng <i>, cột <k>: $<ok>$', i=i, k=i2, ok=A[i - 1, i2 - 1]))
    return NQ(q, A[i - 1, i2 - 1], [Ai[i - 1, i2 - 1], A[i2 - 1, i - 1], -A[i - 1, i2 - 1], A[2 - i, 2 - i2], A[i - 1, i2 - 1] + 1], ex)


# =============== Câu 25: hệ phương trình tuyến tính có tham số ===============
def lin(coefs, names):
    """Vế trái của một phương trình tuyến tính, giữ đúng thứ tự các ẩn; hệ số có thể là tham số m."""
    out = ''
    for c, nm in zip(coefs, names):
        if c == 0:
            continue
        if c == m_:
            piece, neg = 'm' + nm, False
        else:
            piece, neg = ('' if abs(c) == 1 else str(abs(c))) + nm, c < 0
        out += (('-' if neg else '') + piece) if not out else ((' - ' if neg else ' + ') + piece)
    return out or '0'


def eqs(A, b, names):
    return r'\begin{cases}' + r'\\ '.join(lin(list(A.row(i)), names) + ' = ' + tx(b[i]) for i in range(A.rows)) + r'\end{cases}'


def par(e):
    """Đặt ngoặc quanh biểu thức nếu nó có nhiều số hạng hoặc mang dấu âm."""
    o = tx(e)
    return '(%s)' % o if ('+' in o or '-' in o) else o


def n25a(rng, j):
    A = Matrix([[1, rng.randint(-2, 3), rng.randint(-2, 3)], [rng.randint(-2, 3), m_, rng.randint(-2, 3)], [rng.randint(-2, 3), rng.randint(-2, 3), m_]])
    d = sp.expand(A.det())
    if sp.degree(d, m_) != 2 or list(A).count(0) > 1:
        raise Retry
    roots = sp.roots(d, m_)
    if len(roots) != 2 or not all(r.is_integer for r in roots) or 0 in roots:
        raise Retry
    r1, r2 = sorted(roots)
    ask = [('tổng', r1 + r2), ('tích', r1 * r2), ('tổng bình phương', r1 * r1 + r2 * r2)][j % 3]
    q = T(r'Cho hệ phương trình tuyến tính thuần nhất $<s>$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của <w> tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng', s=eqs(A, [0, 0, 0], 'xyz'), w=ask[0])
    ex = steps(r'Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\Leftrightarrow$ định thức của ma trận hệ số bằng 0', T(r'$\det A = <d> = <f>$', d=d, f=sp.factor(d)),
               T(r'$\det A = 0 \Leftrightarrow m = <a>$ hoặc $m = <b>$', a=r1, b=r2), T(r'Giá trị cần tìm: $<ok>$', ok=ask[1]))
    return NQ(q, ask[1], [r1 + r2, r1 * r2, r1 * r1 + r2 * r2, -(r1 + r2), ask[1] + 1], ex)


def n25b(rng, j):
    r1, r2 = [1] + [rng.randint(-2, 3) for _ in range(3)], [rng.randint(-2, 3) for _ in range(4)]
    if rng.random() < .55:
        al, be = rint(rng, -2, 3, (0,)), rint(rng, -2, 2, (0,))
        r3 = [al * r1[i] + be * r2[i] for i in range(4)]
    else:
        r3 = [rng.randint(-2, 3) for _ in range(4)]
    A = Matrix([r1, r2, r3])
    r = A.rank()
    if r < 2 or any(all(v == 0 for v in A.col(c)) for c in range(4)) or max(abs(v) for v in r3) > 9:
        raise Retry
    q = T(r'Tập nghiệm của hệ phương trình tuyến tính thuần nhất $<s>$ (bốn ẩn $x, y, z, t$) là một không gian con của $\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng', s=eqs(A, [0, 0, 0], 'xyzt'))
    ex = steps(T(r'Đưa ma trận hệ số về dạng bậc thang: $<E>$', E=pmat(A.echelon_form())), T(r'Hạng của ma trận hệ số: $r = <r>$', r=r), T(r'Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - <r> = <ok>$', r=r, ok=4 - r))
    return NQ(q, 4 - r, [r, 3, 4, 0, 2, 1], ex)


def n25c(rng, j):
    x0, y0 = rint(rng, -3, 4, (0,)), rint(rng, -3, 4, (0,))
    A = rmat(rng, 3, 2, -3, 4)
    if A[:2, :].det() == 0 or 0 in list(A):
        raise Retry
    s = rint(rng, -4, 5, (0,))
    b = A * Matrix([x0, y0])
    m0 = b[2] - s
    if m0 == 0:
        raise Retry
    o = m0 + rng.choice([1, -1, 2, -2])
    q = T(r'Cho hệ phương trình $\begin{cases}<e1>\\ <e2>\\ <e3> = m <s>\end{cases}$ (với $x, y$ là ẩn, $m$ là tham số). Hệ có nghiệm khi và chỉ khi',
          e1=sp.Eq(A[0, 0] * x + A[0, 1] * y, b[0]), e2=sp.Eq(A[1, 0] * x + A[1, 1] * y, b[1]), e3=A[2, 0] * x + A[2, 1] * y, s=sgn_(s))
    ex = steps(T(r'Hai phương trình đầu có nghiệm duy nhất: $x = <x>,\ y = <y>$', x=x0, y=y0), T(r'Thay vào phương trình thứ ba: $<v> = m <s>$', v=b[2], s=sgn_(s)), T(r'$m = <m>$', m=m0))
    return Q(q, T('$m = <m>$.', m=m0), [T(r'$m \ne <m>$.', m=m0), T('$m = <o>$.', o=o), 'với mọi giá trị của $m$.'], ex)


# =============== Câu 36: tích phân hai lớp trong tọa độ cực ===============
def n36a(rng, j):
    k_ = rng.choice([2, 3, 4, 5, 6, 8])
    if j % 2 == 0:
        fS, ok, inner = r'e^{x^2 + y^2}', pi * (k_ - 1), r'\left[\dfrac{e^{r^2}}{2}\right]_0^{\sqrt{\ln %d}} = \dfrac{%d - 1}{2}' % (k_, k_)
        assert simplify(2 * pi * integrate(exp(rr ** 2) * rr, (rr, 0, sqrt(log(k_)))) - ok) == 0
    else:
        fS, ok, inner = r'e^{-x^2 - y^2}', pi * R(k_ - 1, k_), r'\left[-\dfrac{e^{-r^2}}{2}\right]_0^{\sqrt{\ln %d}} = \dfrac12\left(1 - \dfrac{1}{%d}\right)' % (k_, k_)
        assert simplify(2 * pi * integrate(exp(-rr ** 2) * rr, (rr, 0, sqrt(log(k_)))) - ok) == 0
    q = T(r'Cho $D$ là hình tròn $x^2 + y^2 \le \ln <k>$. Giá trị của tích phân $\displaystyle\iint_D <f>\,dxdy$ bằng', k=k_, f=fS)
    ex = steps(T(r'Tọa độ cực: $0 \le \varphi \le 2\pi,\ 0 \le r \le \sqrt{\ln <k>}$, $dxdy = r\,dr\,d\varphi$', k=k_), T(r'$\displaystyle\int_0^{\sqrt{\ln <k>}} <g>\,r\,dr = <i>$', k=k_, g=fS.replace('x^2 + y^2', 'r^2').replace('-x^2 - y^2', '-r^2'), i=inner),
               T(r'$I = 2\pi\cdot<h> = <ok>$', h=ok / (2 * pi), ok=ok))
    return NQ(q, ok, [2 * ok, ok / 2, pi * k_, pi * log(k_), ok + pi], ex)


def n36b(rng, j):
    a = rng.choice([1, 2, 3, 4])
    if j % 2 == 0:
        ok = pi * a ** 4 / 2
        surf, f_r = T(r'paraboloid $z = <a2> - x^2 - y^2$', a2=a * a), a * a - rr ** 2
    else:
        ok = pi * a ** 3 / 3
        surf, f_r = T(r'mặt nón $z = <a> - \sqrt{x^2 + y^2}$', a=a), a - rr
    inner = integrate(sp.expand(f_r * rr), (rr, 0, a))
    assert simplify(2 * pi * inner - ok) == 0
    q = T(r'Thể tích của vật thể giới hạn bởi <s> và mặt phẳng $z = 0$ được tính bằng $V = \displaystyle\iint_D z\,dxdy$, với $D$ là hình chiếu của vật thể lên mặt phẳng $Oxy$. Giá trị của $V$ bằng', s=surf)
    ex = steps(T(r'$z \ge 0 \Leftrightarrow x^2 + y^2 \le <a2>$ nên $D$ là hình tròn bán kính $<a>$', a2=a * a, a=a), T(r'$V = \displaystyle\int_0^{2\pi}d\varphi\int_0^{<a>}\left(<f>\right)r\,dr = 2\pi\left[<F>\right]_0^{<a>}$', a=a, f=f_r, F=integrate(sp.expand(f_r * rr), rr)),
               T(r'$V = 2\pi\cdot<i> = <ok>$', i=inner, ok=ok))
    return NQ(q, ok, [2 * ok, ok / 2, 2 * pi * integrate(f_r, (rr, 0, a)), pi * a ** 3 if j % 2 == 0 else pi * a ** 3 / 2, pi * a * a], ex)


SECT = [(r'0 \le y \le x', 0, pi / 4, r'0 \le \varphi \le \dfrac{\pi}{4}'), (r'y \ge |x|', pi / 4, 3 * pi / 4, r'\dfrac{\pi}{4} \le \varphi \le \dfrac{3\pi}{4}'),
        (r'0 \le y \le \sqrt{3}\,x', 0, pi / 3, r'0 \le \varphi \le \dfrac{\pi}{3}'), (r'x \le 0,\ y \ge 0', pi / 2, pi, r'\dfrac{\pi}{2} \le \varphi \le \pi'),
        (r'0 \le x \le y', pi / 4, pi / 2, r'\dfrac{\pi}{4} \le \varphi \le \dfrac{\pi}{2}'), (r'y \ge \sqrt{3}\,|x|', pi / 3, 2 * pi / 3, r'\dfrac{\pi}{3} \le \varphi \le \dfrac{2\pi}{3}')]


def n36c(rng, j):
    cond, lo, hi, rng_s = SECT[j % len(SECT)]
    a = rng.choice([1, 2, 3])
    f, fs = rng.choice([(x, 'x'), (y, 'y'), (x ** 2 + y ** 2, '(x^2 + y^2)'), (x * y, 'xy'), (y ** 2, 'y^2'), (x ** 2, 'x^2')])
    fp = sp.simplify(f.subs({x: rr * cos(ph), y: rr * sin(ph)}))
    in_r = integrate(fp * rr, (rr, 0, a))
    ok = simplify(integrate(in_r, (ph, lo, hi)))
    if ok == 0:
        raise Retry
    q = T(r'Cho miền $D = \{(x,y): x^2 + y^2 \le <a2>,\ <c>\}$. Giá trị của tích phân $\displaystyle\iint_D <f>\,dxdy$ bằng', a2=a * a, c=cond, f=fs)
    ex = steps(T(r'Tọa độ cực: $0 \le r \le <a>,\ <s>$', a=a, s=rng_s), T(r'$I = \displaystyle\int d\varphi\int_0^{<a>}\left(<fp>\right)r\,dr = \int <i>\,d\varphi$ (cận của $\varphi$ như trên)', a=a, fp=tx(fp).replace(r'{\left(\varphi \right)}', r'\varphi'), i=tx(in_r).replace(r'{\left(\varphi \right)}', r'\varphi')), T(r'$I = <ok>$', ok=ok))
    noj = simplify(integrate(integrate(fp, (rr, 0, a)), (ph, lo, hi)))
    return NQ(q, ok, [noj, 2 * ok, simplify(integrate(in_r, (ph, 0, pi / 2))), ok / 2, -ok], ex)


# =============== Câu 39: tích phân đường ===============
def n39a(rng, j):
    c = rng.choice([1, 2, 3, -1])
    u = rng.choice([x ** 2 * y + c * y ** 2, x * y ** 2 + c * x ** 2, x ** 3 * y + c * y, x ** 2 * y ** 2 + c * x, x ** 2 * y + c * x * y, x * y ** 3 + c * x ** 2])
    A, B = rng.choice([((0, 0), (1, 2)), ((1, 0), (2, 1)), ((0, 1), (2, 2)), ((1, 1), (2, 3)), ((-1, 0), (1, 2)), ((0, 0), (2, 1)), ((1, -1), (2, 2))])
    P, Qe = diff(u, x), diff(u, y)
    ok = u.subs({x: B[0], y: B[1]}) - u.subs({x: A[0], y: A[1]})
    q = T(r'Biết biểu thức $<P>\,dx + <Q>\,dy$ là vi phân toàn phần của một hàm số $u(x,y)$ nên tích phân đường của nó không phụ thuộc đường lấy tích phân. Với $L$ là một đường cong trơn bất kì đi từ $A(<a1>;<a2>)$ đến $B(<b1>;<b2>)$, giá trị của $\displaystyle\int_L <P>\,dx + <Q>\,dy$ bằng',
          P=par(P), Q=par(Qe), a1=A[0], a2=A[1], b1=B[0], b2=B[1])
    ex = steps(T(r"$u'_x = <P> \Rightarrow u = <u0> + g(y)$", P=P, u0=integrate(P, x)), T(r"$u'_y = <Q> \Rightarrow u = <u>$", Q=Qe, u=u),
               T(r'$I = u(B) - u(A) = (<ub>) - (<ua>) = <ok>$', ub=u.subs({x: B[0], y: B[1]}), ua=u.subs({x: A[0], y: A[1]}), ok=ok))
    return NQ(q, ok, [u.subs({x: B[0], y: B[1]}), -ok, u.subs({x: B[0], y: B[1]}) + u.subs({x: A[0], y: A[1]}), ok + 1, ok * 2], ex)


def n39b(rng, j):
    A = (rng.randint(-2, 2), rng.randint(-2, 2))
    dx_, dy_, L = rng.choice([(3, 4, 5), (4, 3, 5), (-3, 4, 5), (4, -3, 5), (6, 8, 10), (8, 6, 10), (5, 12, 13), (12, 5, 13)])
    B = (A[0] + dx_, A[1] + dy_)
    a, b, c = rng.choice([1, 2, 3]), rng.choice([1, 2, -1]), rng.choice([0, 1, 2])
    f = a * x + b * y + c
    ft = sp.expand(f.subs({x: A[0] + dx_ * t, y: A[1] + dy_ * t}))
    ok = L * integrate(ft, (t, 0, 1))
    if ok == 0:
        raise Retry
    q = T(r'Cho $L$ là đoạn thẳng nối điểm $A(<a1>;<a2>)$ với điểm $B(<b1>;<b2>)$. Giá trị của tích phân đường loại một $\displaystyle\int_L (<f>)\,ds$ bằng', a1=A[0], a2=A[1], b1=B[0], b2=B[1], f=f)
    ex = steps(T(r'Tham số hóa: $x = <xt>,\ y = <yt>,\ 0 \le t \le 1$', xt=A[0] + dx_ * t, yt=A[1] + dy_ * t), T(r"$ds = \sqrt{x'^2 + y'^2}\,dt = \sqrt{<s>}\,dt = <L>\,dt$", s=dx_ ** 2 + dy_ ** 2, L=L),
               T(r'$I = <L>\displaystyle\int_0^1\left(<ft>\right)dt = <L>\cdot<i> = <ok>$', L=L, ft=ft, i=integrate(ft, (t, 0, 1)), ok=ok))
    return NQ(q, ok, [integrate(ft, (t, 0, 1)), ok / L * (abs(dx_) + abs(dy_)), 2 * ok, L * f.subs({x: B[0], y: B[1]}), -ok], ex)


def plus(e):
    """Viết tiếp một biểu thức sau số hạng đầu: ' + ...' hoặc ' - ...'."""
    o = tx(e)
    return ' - ' + o[1:].lstrip() if o.startswith('-') else ' + ' + o


def n39c(rng, j):
    al, be, ga = rng.choice([1, 2, 3, -1, -2]), rng.choice([1, 2, 3, -1]), rng.choice([1, 2, 3])
    u = al * x ** 2 * y + be * x * y ** 2 + ga * x
    P, Qe = sp.expand(diff(u, x)), sp.expand(diff(u, y))
    if j % 2 == 0:
        ok, Ps, Qs = 2 * al, 'mxy' + plus(sp.expand(P - 2 * al * x * y)), tx(Qe)
        why = T(r"$P'_y = mx<a>,\quad Q'_x = <b>$", a=plus(diff(P - 2 * al * x * y, y)), b=diff(Qe, x))
    else:
        ok, Ps, Qs = al, tx(P), 'mx^2' + plus(sp.expand(Qe - al * x ** 2))
        why = T(r"$P'_y = <a>,\quad Q'_x = 2mx<b>$", a=diff(P, y), b=plus(diff(Qe - al * x ** 2, x)))
    q = T(r'Tìm giá trị của tham số $m$ để tích phân đường $\displaystyle\int_L (<P>)\,dx + (<Q>)\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.', P=Ps, Q=Qs)
    ex = steps(r"Tích phân không phụ thuộc đường đi $\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$", why, T(r'Đồng nhất hệ số: $m = <ok>$', ok=ok))
    return NQ(q, ok, [-ok, 2 * al if ok == al else al, be, 2 * be, ok + 1], ex)


def n39d(rng, j):
    a, b = rng.choice([1, 2, 3]), rng.choice([1, 2, 3])
    P, Qe = rng.choice([(-y ** 2, x * y), (x * y, x ** 2), (y ** 2, x ** 2), (-x * y, x * y), (x - y ** 2, 2 * x * y), (y, x ** 2 + x)])
    g = sp.expand(diff(Qe, x) - diff(P, y))
    if j % 2 == 0:
        name, ok = T(r'hình chữ nhật $0 \le x \le <a>,\ 0 \le y \le <b>$', a=a, b=b), integrate(integrate(g, (y, 0, b)), (x, 0, a))
        setup = T(r'$I = \displaystyle\int_0^{<a>}dx\int_0^{<b>}\left(<g>\right)dy$', a=a, b=b, g=g)
    else:
        name, ok = T(r'tam giác có ba đỉnh $O(0;0),\ A(<a>;0),\ B(0;<b>)$', a=a, b=b), integrate(integrate(g, (y, 0, b - R(b, a) * x)), (x, 0, a))
        setup = T(r'$I = \displaystyle\int_0^{<a>}dx\int_0^{<l>}\left(<g>\right)dy$', a=a, l=b - R(b, a) * x, g=g)
    if ok == 0:
        raise Retry
    q = T(r'Cho $C$ là biên của <n>, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\displaystyle\oint_C <P>\,dx + <Q>\,dy$ bằng', n=name, P=par(P), Q=par(Qe))
    ex = steps(T(r"$Q'_x - P'_y = <g>$", g=g), 'Công thức Green: ' + setup, T(r'$I = <ok>$', ok=ok))
    area = a * b if j % 2 == 0 else R(a * b, 2)
    return NQ(q, ok, [-ok, area, ok * 2, ok / 2, ok + area], ex)


# =============== Câu 40–42: nhóm câu hỏi đại số tuyến tính ===============
def ngL1(rng, j):
    for _ in range(60):
        A = Matrix([[1, rng.randint(-1, 2), rng.randint(-1, 2)], [rng.randint(-1, 2), rng.randint(1, 3), rng.randint(-2, 2)], [rng.randint(-2, 2), rng.randint(-1, 2), m_]])
        d = sp.expand(A.det())
        if sp.degree(d, m_) == 1 and sp.solve(d, m_)[0].is_integer and sp.solve(d, m_)[0] != 0 and (A[2, 0] != 0 or A[2, 1] != 0) and list(A).count(0) <= 2:
            break
    else:
        raise Retry
    m0 = sp.solve(d, m_)[0]
    m1 = m0 + rng.choice([1, -1, 2])
    sol = Matrix([rint(rng, -2, 3, (0,)) for _ in range(3)])
    A1 = A.subs(m_, m1)
    b = A1 * sol
    d1 = A1.det()
    stem = T(r'Cho hệ phương trình tuyến tính $<s>$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.', s=eqs(A, list(b), 'xyz'))
    qs = [NQ(T(r'Khi $m = <m1>$, định thức của ma trận $A$ bằng', m1=m1), d1, [d.subs(m_, 0) if d.subs(m_, 0) != d1 else d1 + 1, -d1, d1 + 2, m1], steps(T(r'$\det A = <d>$', d=d), T(r'Với $m = <m1>$: $\det A = <ok>$', m1=m1, ok=d1))),
          NQ('Hệ không có nghiệm duy nhất khi $m$ bằng', m0, [m1, -m0 if m0 != 0 else 3, m0 + 3, m0 - 2], steps(r'Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\Leftrightarrow \det A \ne 0$', T(r'$\det A = <d> = 0 \Leftrightarrow m = <m0>$', d=d, m0=m0))),
          NQ(T(r'Khi $m = <m1>$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng', m1=m1), sum(sol), [sum(sol) + 1, -sum(sol) if sum(sol) != 0 else 2, sol[0], sum(sol) - 2],
             steps(T(r'Với $m = <m1>$, khử ẩn (hoặc dùng quy tắc Cramer với $\det A = <d1>$)', m1=m1, d1=d1), T(r'$(x_0;y_0;z_0) = <s>$', s=vec(sol)), T(r'$x_0 + y_0 + z_0 = <ok>$', ok=sum(sol))))]
    return {'stem': stem, 'questions': qs}


def ngL2(rng, j):
    U = rmat(rng, 3, 3, -2, 3)
    d = U.det()
    if d == 0 or abs(d) > 12:
        raise Retry
    co = [rint(rng, -2, 3, (0,)) for _ in range(3)]
    v = co[0] * U.row(0) + co[1] * U.row(1) + co[2] * U.row(2)
    g12, g23 = dot(U.row(0), U.row(1)), dot(U.row(1), U.row(2))
    stem = T(r'Trong không gian $\mathbb{R}^3$ với tích vô hướng thông thường, cho các véc tơ $u_1 = <a>,\ u_2 = <b>,\ u_3 = <c>$ và $v = <v>$.', a=vec(U.row(0)), b=vec(U.row(1)), c=vec(U.row(2)), v=vec(v))
    qs = [NQ(r'Giá trị của $\langle u_1, u_2\rangle + \langle u_2, u_3\rangle$ bằng', g12 + g23, [g12 - g23, g12, g23, dot(U.row(0), U.row(2)) + g12],
             steps(T(r'$\langle u_1, u_2\rangle = <a>,\quad \langle u_2, u_3\rangle = <b>$', a=g12, b=g23), T(r'Tổng: $<ok>$', ok=g12 + g23))),
          NQ(r'Định thức của ma trận có các hàng lần lượt là $u_1, u_2, u_3$ bằng', d, [-d, d + 1, d - 2, U.trace() if U.trace() != d else d + 3],
             steps(T(r'$\begin{vmatrix}<r1> \\ <r2> \\ <r3>\end{vmatrix} = <ok>$', r1=' & '.join(tx(c) for c in U.row(0)), r2=' & '.join(tx(c) for c in U.row(1)), r3=' & '.join(tx(c) for c in U.row(2)), ok=d), r'Định thức khác 0 nên $\{u_1, u_2, u_3\}$ là một cơ sở của $\mathbb{R}^3$')),
          NQ(r'Biết $v = au_1 + bu_2 + cu_3$, giá trị của $a + b + c$ bằng', sum(co), [sum(co) + 1, co[0] - co[1] + co[2] if co[0] - co[1] + co[2] != sum(co) else sum(co) - 1, -sum(co) if sum(co) else 3, sum(co) + 2],
             steps(r'$v = au_1 + bu_2 + cu_3$: viết theo từng tọa độ được hệ ba phương trình ba ẩn $a, b, c$', T(r'Giải hệ: $a = <a>,\ b = <b>,\ c = <c>$', a=co[0], b=co[1], c=co[2]), T(r'$a + b + c = <ok>$', ok=sum(co))))]
    return {'stem': stem, 'questions': qs}


def ngL3(rng, j):
    A = unimod(rng)
    s, p = rng.choice([1, 2, 3]), rng.choice([1, 2, -1, -2])
    fA = A * A - s * A + p * sp.eye(2)
    tr_, d = A.trace(), A.det()
    Ai = A.inv()
    stem = T(r'Cho ma trận $A = <A>$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = <f>$. Kí hiệu $f(A) = <fa>$.', A=pmat(A), f=x ** 2 - s * x + p, fa='A^2 - %sA %s' % ('' if s == 1 else s, ('+ %sI' % ('' if p == 1 else p)) if p > 0 else '- %sI' % ('' if p == -1 else -p)))
    qs = [NQ(r'Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng', (A * A).trace(), [tr_ ** 2, tr_ * 2, (A * A).trace() + 2, sum(A * A)],
             steps(T(r'$A^2 = <A2>$', A2=pmat(A * A)), T(r'Vết của $A^2$: $<ok>$', ok=(A * A).trace()))),
          NQ(r'Tổng tất cả các phần tử của ma trận $f(A)$ bằng', sum(fA), [sum(A * A - s * A), sum(fA) + p, fA.trace(), sum(fA) - 1],
             steps(T(r'$A^2 = <A2>$', A2=pmat(A * A)), T(r'$f(A) = <F>$', F=pmat(fA)), T(r'Tổng các phần tử: $<ok>$', ok=sum(fA)))),
          NQ(r'Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng', sum(Ai), [sum(A), -sum(Ai) if sum(Ai) else 2, sum(Ai) + 1, Ai.trace() if Ai.trace() != sum(Ai) else sum(Ai) - 1],
             steps(T(r'$\det A = <d>$', d=d), T(r'$A^{-1} = <I>$', I=pmat(Ai)), T(r'Tổng các phần tử: $<ok>$', ok=sum(Ai))))]
    return {'stem': stem, 'questions': qs}


# =============== Câu 23: hạng và tham số ===============
def n23a(rng, j):
    a = rng.choice([1, 2, 3, -1, -2])
    A = Matrix([[m_, a, a], [a, m_, a], [a, a, m_]])
    one = j % 2 == 0
    ok, other = (a, -2 * a) if one else (-2 * a, a)
    assert A.subs(m_, a).rank() == 1 and A.subs(m_, -2 * a).rank() == 2 and sp.expand(A.det() - (m_ - a) ** 2 * (m_ + 2 * a)) == 0
    q = T(r'Cho ma trận $A = <A>$ với $m$ là tham số. Hạng của $A$ bằng <r> khi và chỉ khi', A=pmat(A), r=1 if one else 2)
    ex = steps(T(r'$\det A = <f>$ nên $\operatorname{rank}A = 3 \Leftrightarrow m \ne <a>$ và $m \ne <b>$', f=sp.factor(A.det()), a=a, b=-2 * a),
               T(r'Với $m = <a>$: ba hàng của $A$ bằng nhau và khác không nên $\operatorname{rank}A = 1$', a=a),
               T(r'Với $m = <b>$: tổng ba hàng bằng véc tơ không, hai hàng đầu không tỉ lệ nên $\operatorname{rank}A = 2$', b=-2 * a), T(r'Vậy hạng của $A$ bằng <r> $\Leftrightarrow m = <ok>$', r=1 if one else 2, ok=ok))
    return Q(q, T('$m = <ok>$.', ok=ok), [T('$m = <o>$.', o=other), T(r'$m \ne <a>$ và $m \ne <b>$.', a=a, b=-2 * a), T('$m = <a>$ hoặc $m = <b>$.', a=min(a, -2 * a), b=max(a, -2 * a))], ex)


def n23b(rng, j):
    u1, u2 = [rng.randint(-2, 3) for _ in range(3)], [rng.randint(-2, 3) for _ in range(3)]
    p, qq = rint(rng, -3, 4, (0,)), rint(rng, -3, 4, (0,))
    d = sp.expand(Matrix([u1, u2, [p, qq, m_]]).det())
    if sp.degree(d, m_) != 1 or Matrix([u1, u2]).rank() < 2:
        raise Retry
    m0 = sp.solve(d, m_)[0]
    if not m0.is_integer:
        raise Retry
    q = T(r'Trong không gian véc tơ $\mathbb{R}^3$, cho $u_1 = <a>,\ u_2 = <b>$ và $v = <c>$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng', a=vec(u1), b=vec(u2), c=vec([p, qq, m_]))
    ex = steps(r'$u_1, u_2$ độc lập tuyến tính nên $v \in \operatorname{span}\{u_1, u_2\} \Leftrightarrow$ hệ $\{u_1, u_2, v\}$ phụ thuộc tuyến tính $\Leftrightarrow \det(u_1, u_2, v) = 0$',
               T(r'$\det(u_1, u_2, v) = <d>$', d=d), T(r'$<d> = 0 \Leftrightarrow m = <m0>$', d=d, m0=m0))
    return NQ(q, m0, [-m0 if m0 != 0 else 2, m0 + 1, p + qq, m0 - 2, d.subs(m_, 0)], ex)


NEW.update({
    1: {'A': [n1a, n1c], 'B': [n1b, n1d]},
    4: {'A': [n4a, n4c], 'B': [n4b, n4d]},
    5: {'A': [n5b, n5d], 'B': [n5a, n5c]},
    23: {'A': [n23b], 'B': [n23a, n23b]},
    25: {'A': [n25c], 'B': [n25a, n25b]},
    36: {'A': [n36a], 'B': [n36b, n36c]},
    39: {'A': [n39b, n39a], 'B': [n39c, n39d]},
})
NEW_GROUPS[0] = {'A': [ngL2], 'B': [ngL1, ngL3]}
VARIANTS.update({n5a: 8, n36c: 6, n1d: 2, n4a: 2, n4c: 2, n5b: 3, n5c: 2, n5d: 2, n25a: 3, n36a: 2, n36b: 2, n39c: 2, n39d: 2})
LIMIT.update({n36b: 8, n36a: 12, n23a: 6})
VARIANTS.update({n23a: 2})
# các vị trí mà dạng cũ chỉ là một dạng duy nhất (không có biến thể): tính ngang hàng với một dạng mới
SINGLE = {'c1', 'c4', 'c5', 'c25', 'c36', 'c39', 'g0'}
