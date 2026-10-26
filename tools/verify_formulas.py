# Kiểm tra độc lập các công thức đóng mà bộ sinh đề dùng (chạy: python tools/verify_formulas.py).
# Mỗi dòng so sánh công thức trong g_an.py / g_la.py với kết quả sympy tính trực tiếp.
import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
import sympy as sp
from sympy import Rational as R, symbols, Function, exp, log, sin, cos, sqrt, cbrt, pi, oo, integrate, diff, limit, summation, simplify, Matrix, dsolve, Eq, E

x, y, z, t, n = symbols('x y z t n')
r, ph, th, rho = symbols('r varphi theta rho', positive=True)
f = Function('f')
bad = []


def chk(name, got, want):
    d = simplify(sp.nsimplify(got) - sp.nsimplify(want)) if not isinstance(got, float) else got - float(want)
    if (abs(d) > 1e-9) if isinstance(got, float) else d != 0:
        bad.append(name)
        print('SAI', name, got, want)


# Câu 9, 26: giới hạn chứa tham số
for c in (2, 4, 6, 8):
    chk('s9a', limit((exp(c * x) - 1) / x, x, 0), c)
    chk('s9a2', limit((1 - cos(sqrt(2 * c) * x)) / x ** 2, x, 0), c)
for a in (3, 6, 9, 12):
    for b in (1, 2, 4):
        chk('s9c', limit((cbrt(1 + a * x) - sqrt(1 + b * x)) / x, x, 0), R(a, 3) - R(b, 2))
for rr in (1, 2, 3, -1, -2):
    for L in (1, 3, 5, -2, 7):
        a = L - 2 * rr
        chk('s9b', limit((x ** 2 + a * x - rr * rr - a * rr) / (x - rr), x, rr), L)
for c in (2, 4, 6, -2):
    chk('s26a', limit((exp(c * x) - 1 - c * x) / x ** 2, x, 0), R(c * c, 2))
for b in (2, 4, 6):
    for L in (2, 3, 4, 5):
        chk('s26b', limit(sqrt(x ** 2 + (2 * L - b) * x + 1) - sqrt(x ** 2 - b * x), x, oo), L)
for (rr, s) in [(1, 2), (2, 1), (1, 3), (2, 3), (3, 1), (1, -1), (2, -1)]:
    for L in (2, 3, 5, -2, 4):
        a = L * (rr - s) - 2 * rr
        chk('s26c', limit((x ** 2 + a * x - rr * rr - a * rr) / ((x - rr) * (x - s)), x, rr), L)
for c in (2, 3, 4, 6):
    chk('s26d', limit((log(1 + c * x) - sin(c * x)) / x ** 2, x, 0), -R(c * c, 2))

# Câu 10, 11: đạo hàm
for a in (2, 3, -2):
    for nn in (6, 8, 10):
        chk('s10a', diff(x ** 2 * exp(a * x), x, nn).subs(x, 0), nn * (nn - 1) * a ** (nn - 2))
for c in (1, -1, 3):
    for p in (1, 2, 3):
        for q in (1, 2, 3):
            if c * p + 2 * q:
                chk('s10b', sp.idiff(x ** 2 + c * x * y + y ** 2 - (p * p + c * p * q + q * q), y, x).subs({x: p, y: q}), R(-(2 * p + c * q), c * p + 2 * q))
for a in (1, 2, 3):
    for b in (1, 2):
        for x0 in (1, 2):
            for z0 in (1, 2):
                chk('s11b', sp.idiff(z ** 3 + a * x * z - b * y, z, x).subs({x: x0, z: z0}), R(-a * z0, 3 * z0 * z0 + a * x0))

# Câu 17, 18: phương trình cấp một
for p in (2, 3):
    for c in (1, 2, 3):
        for y0 in (2, 5):
            sol = dsolve(f(x).diff(x) - p * f(x) / x - c * x ** p, f(x), ics={f(1): y0}).rhs
            chk('s17a', sol.subs(x, 2), 2 ** p * (c + y0))
for a in (1, 2, 3):
    for y0 in (1, 4):
        sol = dsolve(x * f(x).diff(x) - f(x) - a * x, f(x), ics={f(1): y0}).rhs
        chk('s17b', sol.subs(x, E), (a + y0) * E)
        sol = dsolve((x ** 2 + 1) * f(x).diff(x) + 2 * x * f(x) - 4 * a * x ** 3, f(x), ics={f(0): y0}).rhs
        chk('s17c', sol.subs(x, 1), R(a + y0, 2))
for a in (1, 5):
    for b in (1, 3):
        u = x ** 2 * y + a * x + b * y ** 2
        chk('s17d-P', diff(u, x), 2 * x * y + a)
        chk('s17d-Q', diff(u, y), x ** 2 + 2 * b * y)
k_, L_, y0_ = symbols('k L y0')
sol = dsolve(f(t).diff(t) - k_ * (L_ - f(t)), f(t), ics={f(0): y0_}).rhs
chk('s18', sol, L_ + (y0_ - L_) * exp(-k_ * t))

# Câu 19: nghiệm riêng phương trình cấp hai
A_ = symbols('A')
for (r1, r2) in [(1, 2), (2, 1), (1, 3), (3, 1), (2, 3), (-1, 2), (1, -2), (2, -1)]:
    yp = A_ * x * exp(r1 * x)
    chk('s19b', simplify(diff(yp, x, 2) - (r1 + r2) * diff(yp, x) + r1 * r2 * yp - A_ * (r1 - r2) * exp(r1 * x)), 0)
for w in (1, 2, 3):
    yp = A_ * x * sin(w * x)
    chk('s19c', simplify(diff(yp, x, 2) + w * w * yp - 2 * w * A_ * cos(w * x)), 0)
for rr in (1, 2, -1, 3):
    yp = A_ * x ** 3 * exp(rr * x)
    chk('s19d', simplify(diff(yp, x, 2) - 2 * rr * diff(yp, x) + rr * rr * yp - 6 * A_ * x * exp(rr * x)), 0)
for (p, q) in [(1, 2), (2, 1), (3, 2), (-1, 2), (-2, 1)]:
    yh = exp(-p * x) * cos(q * x)
    chk('s19a', simplify(diff(yh, x, 2) + 2 * p * diff(yh, x) + (p * p + q * q) * yh), 0)

# Câu 28: công cơ học (hệ số của ρg)
Rr, H, d = symbols('R H d', positive=True)
chk('s28-tru', integrate(pi * Rr ** 2 * (y + d), (y, 0, H)), pi * Rr ** 2 * (H ** 2 / 2 + d * H))
chk('s28-non', integrate(pi * (Rr * y / H) ** 2 * (H - y), (y, 0, H)), pi * Rr ** 2 * H ** 2 / 12)

# Câu 30, 31: tổng chuỗi
for j in (2, 3, 4):
    chk('s30a', summation(1 / (n * (n + j)), (n, 1, oo)), sum(R(1, i) for i in range(1, j + 1)) / j)
for q in (2, 3, 4, 5):
    chk('s30b', summation(n ** 2 / q ** n, (n, 1, oo)), R(q * (q + 1), (q - 1) ** 3))
    chk('s30c', summation((n + 1) / q ** n, (n, 0, oo)), R(q * q, (q - 1) ** 2))
    chk('s30e', summation(n / q ** n, (n, 1, oo)), R(q, (q - 1) ** 2))
chk('s30d1', summation(1 / ((2 * n - 1) * (2 * n + 1)), (n, 1, oo)), R(1, 2))
chk('s30d2', summation(1 / ((3 * n - 2) * (3 * n + 1)), (n, 1, oo)), R(1, 3))
chk('s30d3', summation(1 / (n * (n + 1) * (n + 2)), (n, 1, oo)), R(1, 4))
chk('s30d4', summation((2 * n + 1) / (n ** 2 * (n + 1) ** 2), (n, 1, oo)), 1)
for (p, q, rr) in [(2, 3, 5), (3, 4, 6)]:
    for n0 in (1, 2):
        chk('s31a', summation((p ** (n + 1) + q ** n) / rr ** n, (n, n0, oo)), p * R(p, rr) ** n0 / (1 - R(p, rr)) + R(q, rr) ** n0 / (1 - R(q, rr)))

# Câu 35: bể có thể tích thay đổi
S = Function('S')
for (rin, rout) in [(6, 4), (3, 2), (9, 6)]:
    dd = rin - rout
    sol = dsolve(S(t).diff(t) - R(1, 10) * rin + rout * S(t) / (100 + dd * t), S(t), ics={S(0): 20}).rhs
    chk('s35b', simplify(sol - (R(1, 10) * (100 + dd * t) + (20 - 10) * 100 ** 2 / (100 + dd * t) ** 2)), 0)

# Câu 36 – 39: tích phân bội, tích phân đường
for a in (1, 2, 3):
    chk('s36a', integrate(integrate(r * r, (r, 0, 2 * a * cos(ph))), (ph, -pi / 2, pi / 2)), R(32 * a ** 3, 9))
    chk('s36e', integrate(integrate(r * sin(ph) * r, (r, 0, a)), (ph, 0, pi)), R(2 * a ** 3, 3))
    chk('s37a', 2 * pi * integrate(r * (a ** 4 - r ** 4) / 2, (r, 0, a)), pi * R(a ** 6, 3))
    chk('s37b', 2 * pi * integrate(cos(th) * sin(th), (th, 0, pi / 2)) * integrate(rho ** 3, (rho, 0, a)), pi * R(a ** 4, 4))
    chk('s37c', integrate(x, (z, 0, a - x - y), (y, 0, a - x), (x, 0, a)), R(a ** 4, 24))
    chk('s37d', 2 * pi * integrate(r ** 3 * (a - r), (r, 0, a)), pi * R(a ** 5, 10))
    chk('s38a', integrate(a * cos(t) * a * sin(t) * a, (t, 0, pi / 2)), R(a ** 3, 2))
    chk('s50c', 2 * pi * integrate((2 * a * a - 2 * r * r) * r, (r, 0, a)), pi * a ** 4)
for (a, b) in [(2, 3), (1, 2), (3, 1)]:
    chk('s36d', integrate(integrate((a * a * cos(ph) ** 2 + b * b * sin(ph) ** 2) * r ** 2 * a * b * r, (r, 0, 1)), (ph, 0, 2 * pi)), pi * R(a * b * (a * a + b * b), 4))
    chk('s38c', integrate(b * t * sqrt(a * a + b * b), (t, 0, 2 * pi)), 2 * pi ** 2 * b * sqrt(a * a + b * b))
for x1, want in [(sqrt(3), R(7, 3)), (2 * sqrt(2), R(26, 3)), (sqrt(15), 21)]:
    chk('s38e', integrate(x * sqrt(1 + x ** 2), (x, 0, x1)), want)
for (a, b, Rv) in [(1, 2, 1), (2, 3, 2)]:
    chk('s39d', integrate(integrate((3 * b * (r * cos(ph)) ** 2 + 3 * a * (r * sin(ph)) ** 2) * r, (r, 0, Rv)), (ph, 0, 2 * pi)), 3 * (a + b) * pi * R(Rv ** 4, 4))

# Nhóm câu 43 – 45 và câu 47: cực trị
def crit(g, vs=(x, y)):
    return [s for s in sp.solve([diff(g, v) for v in vs], vs, dict=True) if all(v.is_real for v in s.values())]
for (p, q) in [(2, 1), (3, 2), (4, 1)]:
    g = x ** 3 + 3 * x * y ** 2 - 3 * (p * p + q * q) * x - 6 * p * q * y
    pts = crit(g)
    chk('g2a-n', len(pts), 4)
    mins = [g.subs(s) for s in pts if (diff(g, x, 2) * diff(g, y, 2) - diff(g, x, y) ** 2).subs(s) > 0 and diff(g, x, 2).subs(s) > 0]
    chk('g2a-min', mins[0], g.subs({x: p, y: q}))
for (p, q) in [(2, 1), (2, 3), (5, 2)]:
    g = x * y + p * p * q / x + p * q * q / y
    chk('g2b', g.subs({x: p, y: q}), 3 * p * q)
    chk('g2b-fx', diff(g, x).subs({x: p, y: q}), 0)
    chk('g2b-fy', diff(g, y).subs({x: p, y: q}), 0)
for a in (1, 2, 3, 4):
    g = x ** 3 + y ** 3 - 3 * a * x * y
    chk('g2c', sorted(g.subs(s) for s in crit(g))[0], -a ** 3)
    g = 3 * a * x * y - x ** 3 - y ** 3
    chk('s47c', sorted(g.subs(s) for s in crit(g))[-1], a ** 3)
for (be, ga) in [(1, 2), (3, 4)]:
    g = x ** 2 + 2 * y ** 2 + z ** 2 - 2 * x * y - 2 * be * y - 2 * ga * z
    s = crit(g, (x, y, z))[0]
    chk('s47a-pt', s[x] + 2 * s[y] + 3 * s[z], 3 * be + 3 * ga)
    chk('s47a-min', g.subs(s), -be * be - ga * ga)

# Câu 25: hệ chứa tham số (họ "cài sẵn")
m = symbols('m')
for (p, q, s, c, b1, b2) in [(1, -2, 1, 2, 2, 2), (2, 1, 3, 1, 1, 5), (3, 0, 2, 3, 3, 4)]:
    A = Matrix([[1, p, q], [2, 2 * p + 1, 2 * q + s], [1, p + 1, q + s + m ** 2 - c * c]])
    B = Matrix([b1, b2, b2 - b1 + m - c])
    for mv, want in [(c, (2, 2)), (-c, (2, 3)), (c + 1, (3, 3))]:
        got = (A.subs(m, mv).rank(), A.subs(m, mv).row_join(B.subs(m, mv)).rank())
        if got != want:
            bad.append('s25')
            print('SAI s25', got, want)

# ---------- Các dạng khó hơn (g_hard.py) ----------
from sympy import atan, tan
M_, A0, kk = symbols('M A k', positive=True)
Pl = M_ / (1 + A0 * exp(-kk * t))
chk('h18-logistic', simplify(diff(Pl, t) - kk * Pl * (1 - Pl / M_)), 0)
for w in (1, 2):
    for (Av, Bv, j) in [(1, 2, 1), (-1, 3, 2)]:
        c = 4 * w * w * j
        sol = dsolve(f(x).diff(x, 2) + w * w * f(x) - c * cos(w * x), f(x), ics={f(0): Av, f(x).diff(x).subs(x, 0): Bv * w}).rhs
        chk('h19a', simplify(sol.subs(x, pi / (2 * w))), Bv + j * pi)
for rr_ in (1, 2, -1):
    for (Av, Bv, j) in [(1, 2, 1), (0, -1, 3)]:
        sol = dsolve(f(x).diff(x, 2) - 2 * rr_ * f(x).diff(x) + rr_ * rr_ * f(x) - 2 * j * exp(rr_ * x), f(x), ics={f(0): Av, f(x).diff(x).subs(x, 0): Av * rr_ + Bv}).rhs
        chk('h19b', simplify(sol.subs(x, 1)), (Av + Bv + j) * exp(rr_))
for p in (1, 2, 3, 4):
    chk('h26a', limit((log(1 + p * x) - p * x + R(p * p, 2) * x ** 2) / x ** 3, x, 0), R(p ** 3, 3))
    chk('h26b', limit((exp(p * x) - 1 - p * x - R(p * p, 2) * x ** 2) / x ** 3, x, 0), R(p ** 3, 6))
    chk('h26c', limit((sin(p * x) - p * x) / x ** 3, x, 0), -R(p ** 3, 6))
for a in (3, 8, 15, 24):
    chk('h28-arc', integrate(sqrt(1 + x), (x, 0, a)), R(2, 3) * (sp.Integer(1 + a) ** R(3, 2) - 1))
for a in (1, 2, 3, 4):
    chk('h28-imp1', integrate(x * exp(-a * x), (x, 0, oo)), R(1, a * a))
for (a, b) in [(1, 1), (1, 2), (3, 4)]:
    chk('h28-imp2', integrate(exp(-a * x) * sin(b * x), (x, 0, oo)), R(b, a * a + b * b))
for a in (1, 2, 3):
    chk('h37a', 4 * pi * integrate(rho ** 3, (rho, 0, a)), pi * a ** 4)
    chk('h37b', 4 * pi * integrate(rho ** 4, (rho, 0, a)), pi * R(4 * a ** 5, 5))
    chk('h37d', integrate(cos(ph) * sin(ph), (ph, 0, pi / 2)) * integrate(sin(th) ** 3 * cos(th), (th, 0, pi / 2)) * integrate(rho ** 5, (rho, 0, a)), R(a ** 6, 48))
    chk('h37e', 2 * pi * integrate(cos(th) * sin(th), (th, 0, pi / 4)) * integrate(rho ** 3, (rho, 0, a)), pi * R(a ** 4, 8))
lam = symbols('lambda')
for (a, b, c) in [(1, 2, 5), (3, 4, 50), (2, 3, 26)]:
    s = sp.solve([2 * x - lam * a, 2 * y - lam * b, a * x + b * y - c], [x, y, lam], dict=True)[0]
    chk('h13b', (x ** 2 + y ** 2).subs(s), R(c * c, a * a + b * b))
    s = sp.solve([y - lam * a, x - lam * b, a * x + b * y - c], [x, y, lam], dict=True)[0]
    chk('h13c', (x * y).subs(s), R(c * c, 4 * a * b))
for (a, b, h, Rv) in [(3, 4, 5, 10), (-4, -3, 5, 15), (6, 8, 10, 20)]:
    g = (x ** 2 + y ** 2 - 2 * a * x - 2 * b * y).subs({x: Rv * cos(t), y: Rv * sin(t)})
    vals = [g.subs(t, sp.atan2(-b, -a)), g.subs(t, sp.atan2(b, a))]
    chk('hg2-max', simplify(vals[0]), Rv * Rv + 2 * Rv * h)
    chk('hg2-bmin', simplify(vals[1]), Rv * Rv - 2 * Rv * h)
for r0 in (1, 2, 3, 4):
    c = r0 * r0 + r0
    chk('h50a', sp.solve(rr2 := symbols('r', positive=True) - (c - symbols('r', positive=True) ** 2), symbols('r', positive=True))[0], r0)

print('KẾT QUẢ:', 'tất cả công thức khớp' if not bad else 'có %d chỗ sai: %s' % (len(bad), sorted(set(bad))))
