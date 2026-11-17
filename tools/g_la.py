# Các vị trí thuộc Đại số tuyến tính trong ma trận đề CA1.
from itertools import combinations
from g_core import *

a_, b_, c_ = symbols('a b c')
p1, p2, p3 = symbols('p_1 p_2 p_3')
I2, I3 = sp.eye(2), sp.eye(3)


def rmat(rng, r, c, lo=-2, hi=4):
    return Matrix(r, c, [rng.randint(lo, hi) for _ in range(r * c)])


def unimod(rng):
    p, q = rint(rng, -2, 3, (0,)), rint(rng, -2, 3, (0,))
    A = Matrix([[1, p], [q, 1 + p * q]])
    return A if rng.random() < .5 else A.T * Matrix([[0, 1], [-1, 0]])


def gauss_steps(A, b):
    """Return row-operation steps reducing the augmented system [A|b] to RREF."""
    M = Matrix.hstack(Matrix(A), Matrix(b))
    lines = [T(r'Ma trận bổ sung ban đầu: $$<M>$$', M=augmented_latex(M))]
    pivot_row = 0
    for col in range(M.cols - 1):
        source = next((r for r in range(pivot_row, M.rows) if M[r, col] != 0), None)
        if source is None:
            continue
        if source != pivot_row:
            M.row_swap(source, pivot_row)
            lines.append(T(r'$R_<a> \leftrightarrow R_<b>$: $$<M>$$',
                           a=source + 1, b=pivot_row + 1, M=augmented_latex(M)))
        pivot = M[pivot_row, col]
        if pivot != 1:
            M.row_op(pivot_row, lambda value, j: value / pivot)
            lines.append(T(r'$R_<r> \leftarrow \dfrac{1}{<p>}R_<r>$: $$<M>$$',
                           r=pivot_row + 1, p=tx(pivot), M=augmented_latex(M)))
        for target in range(M.rows):
            factor = M[target, col]
            if target == pivot_row or factor == 0:
                continue
            M.row_op(target, lambda value, j: value - factor * M[pivot_row, j])
            lines.append(T(r'$R_<t> \leftarrow R_<t> - (<f>)R_<p>$: $$<M>$$',
                           t=target + 1, f=tx(factor), p=pivot_row + 1, M=augmented_latex(M)))
        pivot_row += 1
        if pivot_row == M.rows:
            break
    return lines


def augmented_latex(M):
    columns = 'r' * (M.cols - 1) + '|r'
    rows = [r' & '.join(tx(M[i, j]) for j in range(M.cols)) for i in range(M.rows)]
    return r'\left(\begin{array}{' + columns + '}' + r'\\ '.join(rows) + r'\end{array}\right)'


def det3_expansion(A):
    a, b, c = A[0, 0], A[0, 1], A[0, 2]
    d, e, f = A[1, 0], A[1, 1], A[1, 2]
    g, h, i = A[2, 0], A[2, 1], A[2, 2]
    terms = [a * (e * i - f * h), -b * (d * i - f * g), c * (d * h - e * g)]
    expansion = T(r'$$A=<A>,\quad \det A=(<a>)\big((<e>)(<i>)-(<f>)(<h>)\big)-(<b>)\big((<d>)(<i>)-(<f>)(<g>)\big)+(<c>)\big((<d>)(<h>)-(<e>)(<g>)\big)$$',
                  A=pmat(A), a=a, b=b, c=c, d=d, e=e, f=f, g=g, h=h, i=i)
    if any(term.free_symbols for term in terms):
        return steps(expansion, T(r'$\det A=<det>$.', det=A.det()))
    return steps(
        expansion,
        T(r'$=<t1><op2><t2><op3><t3>=<det>$.',
          t1=terms[0], op2=' + ' if terms[1] >= 0 else ' - ', t2=abs(terms[1]),
          op3=' + ' if terms[2] >= 0 else ' - ', t3=abs(terms[2]), det=A.det()))


def det2_expansion(A):
    a, b, c, d = A[0, 0], A[0, 1], A[1, 0], A[1, 1]
    return steps(T(r'$\det <A>=(<a>)(<d>)-(<b>)(<c>)=<det>$.',
                   A=pmat(A), a=a, b=b, c=c, d=d, det=A.det()),
                 T(r'$=<factor>$.', factor=sp.factor(A.det())))


# ---------- Câu 1: tổ hợp tuyến tính ----------
def s1(rng, k):
    if k % 2 == 0:
        U = rmat(rng, 3, 3, 1, 5)
        if U.det() == 0:
            raise Retry
        coef = [rng.randint(1, 4) for _ in range(3)]
        v = coef[0] * U.row(0) + coef[1] * U.row(1) + coef[2] * U.row(2)
        w = rng.choice([(1, 2, 3), (3, 2, 1), (2, 1, 3), (1, 3, 2), (2, 3, 1)])
        ok = sum(i * j for i, j in zip(coef, w))
        ctx = rng.choice([
            ('Một xưởng có ba loại thức ăn chăn nuôi I, II, III. Hàm lượng (đạm; béo; xơ), tính bằng đơn vị dinh dưỡng trong mỗi kg của từng loại,',
             'Xưởng trộn $a$ kg loại I, $b$ kg loại II và $c$ kg loại III để được một mẻ thức ăn có tổng hàm lượng dinh dưỡng là'),
            ('Một cửa hàng bán ba loại giỏ quà I, II, III. Số (hộp bánh; gói trà; lọ mứt) trong mỗi giỏ của từng loại',
             'Cửa hàng đóng $a$ giỏ loại I, $b$ giỏ loại II và $c$ giỏ loại III thì dùng hết tổng cộng số (hộp bánh; gói trà; lọ mứt) là'),
            ('Một phòng thí nghiệm có ba dung dịch gốc I, II, III. Lượng (muối; đường; axit), tính bằng gam trong mỗi lít của từng dung dịch,',
             'Pha $a$ lít dung dịch I, $b$ lít dung dịch II và $c$ lít dung dịch III thì hỗn hợp thu được chứa tổng lượng (muối; đường; axit) là'),
        ])
        q = T(ctx[0] + r' lần lượt được cho bởi các véc tơ $u_1 = <u1>,\ u_2 = <u2>,\ u_3 = <u3>$ trong $\mathbb{R}^3$. ' + ctx[1] +
              r' $v = <v>$, tức là $v = au_1 + bu_2 + cu_3$. Giá trị của $<e>$ bằng',
              u1=vec(U.row(0)), u2=vec(U.row(1)), u3=vec(U.row(2)), v=vec(v), e=w[0] * a_ + w[1] * b_ + w[2] * c_)
        equations = r'$$v = au_1 + bu_2 + cu_3 \Leftrightarrow \begin{cases}' + r'\\ '.join(
            tx(sp.Eq(U[0, i] * a_ + U[1, i] * b_ + U[2, i] * c_, v[i])) for i in range(3)) + r'\end{cases}$$'
        calculation = gauss_steps(U.T, Matrix(v).T)
        expression = T(r'$<w1>\cdot<a> + <w2>\cdot<b> + <w3>\cdot<c> = <ok>$.',
                       w1=w[0], w2=w[1], w3=w[2], a=coef[0], b=coef[1], c=coef[2], ok=ok)
        ex = steps(equations, *calculation, T(r'$\begin{cases}a=<a>\\b=<b>\\c=<c>\end{cases}$',
                                               a=coef[0], b=coef[1], c=coef[2]), expression)
        return NQ(q, ok, [sum(coef), sum(i * j for i, j in zip(coef, w[::-1])), ok + coef[0]], ex)
    al, be = rng.choice([(2, 3), (3, 4), (3, 2), (4, 3), (1, 2), (2, 1)])
    U = rmat(rng, 3, 3, -3, 4)
    xv = (U.row(2) - al * U.row(0) - be * U.row(1)) / (be - al)
    q = T(r'Trong không gian véc tơ $\mathbb{R}^3$, cho $u_1 = <u1>,\ u_2 = <u2>,\ u_3 = <u3>$. Gọi $x = (x_1;x_2;x_3)$ là véc tơ thỏa mãn $<al>(u_1 - x) + <be>(u_2 + x) = u_3$. Giá trị của $x_1 + x_2 + x_3$ bằng',
          u1=vec(U.row(0)), u2=vec(U.row(1)), u3=vec(U.row(2)), al=al, be=be)
    ex = steps(T(r'$<al>u_1 - <al>x + <be>u_2 + <be>x = u_3 \Leftrightarrow (<be>-<al>)x = u_3 - <al>u_1 - <be>u_2$.',
                 al=al, be=be),
               T(r'$u_3 - <al>u_1 - <be>u_2 = <w>$.', al=al, be=be,
                 w=vec(U.row(2) - al * U.row(0) - be * U.row(1))),
               T(r'$x = \dfrac{1}{<d>}<w> = <x>$.', d=be - al,
                 w=vec(U.row(2) - al * U.row(0) - be * U.row(1)), x=vec(xv)),
               T(r'$x_1+x_2+x_3 = (<x1>) + (<x2>) + (<x3>) = <ok>$.',
                 x1=xv[0], x2=xv[1], x3=xv[2], ok=sum(xv)))
    wrong = (U.row(2) - al * U.row(0) - be * U.row(1)) / (be + al)
    return NQ(q, sum(xv), [-sum(xv), sum(U.row(2) - U.row(0) - U.row(1)), sum(wrong) if sum(wrong).is_integer else sum(xv) + 4], ex)


# ---------- Câu 2: đếm hệ con độc lập tuyến tính ----------
def s2(rng, k):
    d = 2 if k % 3 != 2 else 3
    base = []
    while len(base) < d:
        v = [rng.randint(-1, 3) for _ in range(d)]
        if any(v) and Matrix(base + [v]).rank() == len(base) + 1:
            base.append(v)
    vs = list(base)
    nvec = rng.choice([4, 5])
    while len(vs) < nvec:
        if rng.random() < .5:
            c = rng.choice([2, 3, -1])
            v = [c * t_ for t_ in rng.choice(vs)]
        else:
            i, j = rng.sample(range(len(base)), 2)
            v = [base[i][t_] + base[j][t_] for t_ in range(d)]
        if any(v) and v not in vs:
            vs.append(v)
    rng.shuffle(vs)
    def cnt(sizes):
        return sum(1 for s in sizes for c in combinations(vs, s) if Matrix(c).rank() == s)
    def pair_determinants():
        out = []
        for i, j in combinations(range(nvec), 2):
            minors = [Matrix([[vs[i][a], vs[i][b_]], [vs[j][a], vs[j][b_]]]).det()
                      for a, b_ in combinations(range(d), 2)]
            labels = [r'\Delta_{%d%d}' % (a + 1, b_ + 1) for a, b_ in combinations(range(d), 2)]
            out.append(T(r'$(u_<i>,u_<j>):\ (<ds>)=(<vals>)$.',
                         i=i + 1, j=j + 1, ds=','.join(labels), vals=','.join(tx(v_) for v_ in minors)))
        return out
    def d_tuple_determinants(size):
        out = []
        for indices in combinations(range(nvec), size):
            subset = Matrix([vs[i] for i in indices])
            out.append(T(r'$\det\begin{pmatrix}<rows>\end{pmatrix}=<det>$.',
                         rows=r'\\'.join(' & '.join(tx(value) for value in vs[i]) for i in indices),
                         det=subset.det()))
        return out
    names = r',\ '.join('u_%d%s' % (i + 1, vec(v)) for i, v in enumerate(vs))
    head = T(r'Trong không gian véc tơ $\mathbb{R}^<d>$, cho hệ véc tơ $S = \{<ns>\}$. ', d=d, ns=names)
    hint = ' (Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.)'
    if k % 3 == 0:
        ok = cnt(range(1, d + 1))
        q = head + 'Có bao nhiêu hệ con khác rỗng của $S$ độc lập tuyến tính?' + hint
        detail = [T(r'Cả <n> véc tơ đều khác véc tơ không nên có <n> hệ một véc tơ độc lập.',
                    n=nvec)]
        detail.extend(pair_determinants())
        if d == 3:
            detail.extend(d_tuple_determinants(3))
        detail.append(T(r'Tổng số hệ con độc lập tuyến tính: $<singles>+<pairs>+<triples>=<ok>$.',
                        singles=cnt([1]), pairs=cnt([2]),
                        triples=cnt([3]) if d == 3 else 0, ok=ok))
        ex = steps(*detail)
        cands = [2 ** nvec - 1, ok + 1, ok - 1, cnt([2])]
    else:
        ok = cnt([d])
        q = head + T(r'Có bao nhiêu hệ con gồm đúng <d> véc tơ của $S$ là cơ sở của $\mathbb{R}^<d>$?', d=d) + hint
        tot = len(list(combinations(vs, d)))
        ex = steps(T(r'Số hệ con cần xét: $C_<n>^<d>=<t>$.', n=nvec, d=d, t=tot),
                   *d_tuple_determinants(d),
                   T(r'Hệ là cơ sở khi định thức khác 0; có <ok> định thức khác 0 nên có <ok> cơ sở.',
                     ok=ok))
        cands = [tot, ok + 1, ok - 1, tot - ok]
    if not 3 <= ok <= 20:
        raise Retry
    return NQ(q, ok, cands, ex)


# ---------- Câu 3: hạng của hệ véc tơ ----------
def s3(rng, k):
    r = rng.choice([2, 3])
    base = [[rng.randint(-2, 3) for _ in range(4)] for _ in range(r)]
    vs, notes = list(base), []
    while len(vs) < 5:
        i, j = rng.sample(range(r), 2)
        al, be = rint(rng, -2, 3, (0,)), rint(rng, -2, 2, (0,))
        v = [al * base[i][t_] + be * base[j][t_] for t_ in range(4)]
        if v in vs or not any(v):
            continue
        vs.append(v)
        notes.append(T('$u_<n> = <e>$', n=len(vs), e=al * symbols('u_%d' % (i + 1)) + be * symbols('u_%d' % (j + 1))))
    if Matrix(vs).rank() != r:
        raise Retry
    names = r',\ '.join('u_%d = %s' % (i + 1, vec(v)) for i, v in enumerate(vs))
    cols = next(c for c in combinations(range(4), r)
                if Matrix([[base[i][j] for j in c] for i in range(r)]).det() != 0)
    minor = Matrix([[base[i][j] for j in cols] for i in range(r)])
    rank_steps = [
        *notes,
        T(r'Với các cột <cols>, $\det <M>=<det>\ne 0$ nên hệ véc tơ $<base>$ độc lập tuyến tính.',
          cols=','.join(str(j + 1) for j in cols), M=pmat(minor), det=minor.det(),
          base=', '.join('u_%d' % (i + 1) for i in range(r))),
        T(r'Các véc tơ còn lại là tổ hợp tuyến tính đã nêu; do đó hạng không vượt quá <r>.',
          r=r),
        T(r'Vậy $\operatorname{rank}(S)=<r>$.', r=r),
    ]
    if k % 2:
        rank_steps.append(T(r'Cần bỏ ít nhất $5-<r>=<deleted>$ véc tơ để còn hệ độc lập tuyến tính.',
                            r=r, deleted=5-r))
    ex = steps(*rank_steps)
    if k % 2 == 0:
        q = T(r'Một trạm quan trắc ghi lại 5 bộ số liệu, mỗi bộ gồm 4 chỉ số và được xem như một véc tơ trong $\mathbb{R}^4$: $<ns>$. Một bộ số liệu là “thừa” nếu nó là tổ hợp tuyến tính của các bộ còn lại được giữ. Số lớn nhất các bộ số liệu có thể giữ lại sao cho chúng độc lập tuyến tính (tức là hạng của hệ véc tơ đã cho) bằng', ns=names)
        return NQ(q, r, [r + 1, 5, r - 1, 4], ex)
    q = T(r'Trong không gian véc tơ $\mathbb{R}^4$, cho hệ véc tơ $S$ gồm $<ns>$. Cần bỏ đi ít nhất bao nhiêu véc tơ của $S$ để hệ còn lại độc lập tuyến tính? (Gợi ý: số véc tơ giữ lại được nhiều nhất bằng hạng của $S$.)', ns=names)
    return NQ(q, 5 - r, [r, 5 - r + 1, 5 - r - 1, 0], ex)


# ---------- Câu 4: phép toán ma trận ----------
def s4(rng, k):
    v = k % 4
    if v == 0:
        A, B = rmat(rng, 2, 2), rmat(rng, 2, 2)
        C = (A + B) * (A - B) - (A * A - B * B)
        if C == sp.zeros(2, 2):
            raise Retry
        i, j = rng.randint(1, 2), rng.randint(1, 2)
        q = T(r'Cho hai ma trận $A = <A>$ và $B = <B>$. Một học viên viết $(A + B)(A - B) = A^2 - B^2$. Để kiểm tra, xét ma trận $C = (A + B)(A - B) - (A^2 - B^2)$. Phần tử thuộc hàng <i> và cột <j> của $C$ bằng',
              A=pmat(A), B=pmat(B), i=i, j=j)
        ex = steps(r'$(A + B)(A - B) = A^2 - AB + BA - B^2 \Rightarrow C = BA - AB$', T(r'$BA = <BA>,\quad AB = <AB>$', BA=pmat(B * A), AB=pmat(A * B)),
                   T(r'$C = <C>$; phần tử hàng <i>, cột <j>: $<ok>$', C=pmat(C), i=i, j=j, ok=C[i - 1, j - 1]))
        return NQ(q, C[i - 1, j - 1], [0, -C[i - 1, j - 1], (A * B)[i - 1, j - 1], (B * A)[i - 1, j - 1]], ex)
    if v == 1:
        A, B = rmat(rng, 2, 2), rmat(rng, 2, 2)
        c = rng.choice([2, 3])
        C = A * A * B - c * B.T
        i, j = rng.choice([(1, 2), (2, 1)])
        q = T(r'Cho hai ma trận $A = <A>$ và $B = <B>$. Gọi $B^T$ là ma trận chuyển vị của $B$. Phần tử thuộc hàng <i> và cột <j> của ma trận $A^2B - <c>B^T$ bằng', A=pmat(A), B=pmat(B), i=i, j=j, c=c)
        ex = steps(T(r'$A^2 = <A2>$', A2=pmat(A * A)), T(r'$A^2B = <A2B>$', A2B=pmat(A * A * B)), T(r'$<c>B^T = <cB>$', c=c, cB=pmat(c * B.T)),
                   T(r'$A^2B - <c>B^T = <C>$; phần tử hàng <i>, cột <j>: $<ok>$', c=c, C=pmat(C), i=i, j=j, ok=C[i - 1, j - 1]))
        W = A * A * B - c * B
        return NQ(q, C[i - 1, j - 1], [W[i - 1, j - 1], C[j - 1, i - 1], (A * A * B)[i - 1, j - 1]], ex)
    if v == 2:
        a, e = rng.choice([2, 3, -2]), rng.choice([4, 5, 6])
        A = Matrix([[a, 1], [0, a]])
        ok = e * a ** (e - 1)
        q = T(r'Cho ma trận $A = <A>$. Biết rằng $A = <a>I + N$ với $N = <N>$ và $N^2 = 0$. Phần tử thuộc hàng một và cột hai của ma trận $A^{<e>}$ bằng', A=pmat(A), a=a, N=pmat([[0, 1], [0, 0]]), e=e)
        ex = steps(T(r'$I$ và $N$ giao hoán, $N^2 = 0$ nên khai triển nhị thức chỉ còn hai số hạng: $A^{<e>} = (<a>)^{<e>}I + <e>\cdot(<a>)^{<e1>}N$', a=a, e=e, e1=e - 1),
                   T(r'Phần tử hàng 1, cột 2: $<e>\cdot(<a>)^{<e1>} = <ok>$', e=e, a=a, e1=e - 1, ok=ok))
        return NQ(q, ok, [a ** e, e * a ** e, a ** (e - 1), e], ex)
    A, c = rmat(rng, 2, 3), rng.choice([2, 3, 4])
    C = A * A.T - c * I2
    q = T(r'Cho ma trận $A = <A>$, $A^T$ là ma trận chuyển vị của $A$ và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $AA^T - <c>I$ bằng', A=pmat(A), c=c)
    ex = steps(T(r'$AA^T = <A><At> = <P>$', A=pmat(A), At=pmat(A.T), P=pmat(A * A.T)), T(r'$AA^T - <c>I = <C>$', c=c, C=pmat(C)),
               T(r'Tổng các phần tử: $<ok>$', ok=sum(C)))
    return NQ(q, sum(C), [sum(A * A.T), sum(A.T * A) - 3 * c, sum(C) + c], ex)


# ---------- Câu 5: điều kiện khả nghịch ----------
def s5(rng, k):
    v, L = k % 3, rng.choice([4, 5, 6])
    if v == 0:
        r1, r2 = rng.sample([-3, -2, -1, 1, 2, 3, 4], 2)
        A = Matrix([[1, 1, 1], [r1, r2, m_], [r1 ** 2, r2 ** 2, m_ ** 2]])
        desc = T('$A = <A>$', A=pmat(A))
        det = A.det()
    elif v == 1:
        a = rng.choice([1, 2, -1, -2])
        A = Matrix(3, 3, lambda i, j: m_ if i == j else a)
        desc = T('$A = <A>$', A=pmat(A))
        det = A.det()
    else:
        r1, r2, r3 = rng.choice([2, 3, 4]), rng.choice([-2, 3, 1]), rng.choice([-1, 2, -3])
        A = Matrix([[m_, r1], [r1, m_]])
        B = Matrix([[m_ - r2 - r3, 1], [-r2 * r3, m_]])
        desc = T('$C = AB$ với $A = <A>$ và $B = <B>$', A=pmat(A), B=pmat(B))
        det = A.det() * B.det()
    roots = sorted(set(sp.solve(det, m_)))
    if not all(r.is_integer for r in roots):
        raise Retry
    inside = [r for r in roots if -L <= r <= L]
    ok = 2 * L + 1 - len(inside)
    name = 'C' if v == 2 else 'A'
    q = T(r'Cho ma trận <desc> ($m$ là tham số). Biết rằng một ma trận vuông khả nghịch khi và chỉ khi định thức của nó khác 0. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[<a>;<b>]$ để $<N>$ khả nghịch?', desc=desc, a=-L, b=L, N=name)
    if v == 0:
        det_steps = [det3_expansion(A),
                     T(r'$\det A=<factor>$.', factor=sp.factor(det))]
    elif v == 1:
        det_steps = [det3_expansion(A),
                     T(r'$\det A=<factor>$.', factor=sp.factor(det))]
    else:
        det_steps = [
            T(r'$\det C=\det A\det B$.',),
            det2_expansion(A),
            det2_expansion(B),
            T(r'$\det C=<factor>$.', factor=sp.factor(det)),
        ]
    ex = steps(*det_steps,
               T(r'$\det <N>=0 \Leftrightarrow m \in \{<r>\}$.', N=name, r=';'.join(str(r) for r in roots)),
               T(r'Đoạn $[<a>;<b>]$ có $<t>$ số nguyên, trong đó $<c>$ số làm định thức bằng 0', a=-L, b=L, t=2 * L + 1, c=len(inside)), T(r'Số giá trị cần tìm: $<t> - <c> = <ok>$', t=2 * L + 1, c=len(inside), ok=ok))
    return NQ(q, ok, [2 * L + 1, 2 * L + 1 - len(roots) - 1, 2 * L - len(inside), len(inside)], ex)


# ---------- Câu 6: lí thuyết ----------
S6 = [
    (r'Cho $A$, $B$ là hai ma trận vuông cùng cấp $n \ge 2$ và $k$ là một số thực. Phát biểu nào sau đây là đúng?',
     r'$\det(AB) = \det A\cdot\det B$.', r'Đây là tính chất nhân của định thức.',
     [(r'$\det(A + B) = \det A + \det B$.', r'Với $A = B = I$ cấp 2: $\det(A + B) = 4$ còn $\det A + \det B = 2$.'),
      (r'$\det(kA) = k\det A$.', r'Mỗi hàng trong $n$ hàng đều được nhân với $k$ nên $\det(kA) = k^n\det A$.'),
      (r'$AB = BA$.', r'Phép nhân ma trận không giao hoán, ví dụ $A = \begin{pmatrix}0&1\\0&0\end{pmatrix}$, $B = \begin{pmatrix}0&0\\1&0\end{pmatrix}$ có $AB \ne BA$.')]),
    (r'Cho $A$ là ma trận cấp $3\times4$ có hạng bằng 3. Phát biểu nào sau đây là đúng?',
     r'Hệ thuần nhất $AX = 0$ có vô số nghiệm.', r'Hệ có 4 ẩn, hạng bằng 3 nên có $4 - 3 = 1$ ẩn tự do.',
     [(r'Hệ thuần nhất $AX = 0$ chỉ có nghiệm tầm thường.', r'Điều này chỉ xảy ra khi hạng bằng số ẩn (bằng 4), ở đây hạng là 3.'),
      (r'Tồn tại $B$ để hệ $AX = B$ vô nghiệm.', r'Hạng của $A$ bằng 3, bằng số phương trình, nên hạng ma trận bổ sung cũng bằng 3 với mọi $B$: hệ luôn có nghiệm.'),
      (r'Hệ $AX = B$ có nghiệm duy nhất với mọi $B$.', r'Hệ luôn có nghiệm nhưng còn 1 ẩn tự do nên có vô số nghiệm.')]),
    (r'Cho $A$, $B$ là hai ma trận vuông cấp $n \ge 2$ khả nghịch. Phát biểu nào sau đây là đúng?',
     r'$(A^T)^{-1} = (A^{-1})^T$.', r'Vì $A^T(A^{-1})^T = (A^{-1}A)^T = I$.',
     [(r'$(AB)^{-1} = A^{-1}B^{-1}$.', r'$(AB)(B^{-1}A^{-1}) = I$ nên $(AB)^{-1} = B^{-1}A^{-1}$ (phải đảo thứ tự).'),
      (r'$\det(A^{-1}) = \det A$.', r'$\det A\cdot\det(A^{-1}) = \det I = 1$ nên $\det(A^{-1}) = \dfrac{1}{\det A}$.'),
      (r'$(2A)^{-1} = 2A^{-1}$.', r'$(2A)\left(\dfrac12A^{-1}\right) = I$ nên $(2A)^{-1} = \dfrac12A^{-1}$.')]),
    (r'Cho $A$ là ma trận vuông cấp 4 có hạng bằng 2. Phát biểu nào sau đây là đúng?',
     r'Mọi định thức con cấp 3 của $A$ đều bằng 0.', r'Hạng là cấp cao nhất của định thức con khác 0; hạng bằng 2 nên mọi định thức con cấp 3 và cấp 4 đều bằng 0.',
     [(r'$\det A \ne 0$.', r'Nếu $\det A \ne 0$ thì hạng bằng 4.'),
      (r'Tồn tại một định thức con cấp 3 của $A$ khác 0.', r'Khi đó hạng ít nhất bằng 3.'),
      (r'Mọi định thức con cấp 2 của $A$ đều bằng 0.', r'Khi đó hạng nhỏ hơn 2.')]),
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$ có $\det A = 0$. Phát biểu nào sau đây là đúng?',
     r'Các véc tơ cột của $A$ phụ thuộc tuyến tính.', r'$\det A = 0 \Leftrightarrow$ hạng của $A$ nhỏ hơn $n \Leftrightarrow$ $n$ véc tơ cột phụ thuộc tuyến tính.',
     [(r'Hệ thuần nhất $AX = 0$ chỉ có nghiệm tầm thường.', r'Hạng nhỏ hơn $n$ nên hệ có ẩn tự do, tức có nghiệm không tầm thường.'),
      (r'Ma trận $A$ khả nghịch.', r'$A$ khả nghịch khi và chỉ khi $\det A \ne 0$.'),
      (r'Hạng của $A$ bằng $n$.', r'Hạng bằng $n$ khi và chỉ khi $\det A \ne 0$.')]),
    (r'Xét hệ phương trình tuyến tính $AX = B$ gồm $m$ phương trình, $n$ ẩn, với $\overline{A}$ là ma trận bổ sung. Phát biểu nào sau đây là đúng?',
     r'Hệ có nghiệm khi và chỉ khi hạng của $A$ bằng hạng của $\overline{A}$.', r'Đây là định lí Kronecker – Capelli.',
     [(r'Hệ có nghiệm duy nhất khi hạng của $A$ nhỏ hơn $n$.', r'Nghiệm duy nhất khi hai hạng cùng bằng $n$; nếu hạng nhỏ hơn $n$ mà hệ có nghiệm thì có vô số nghiệm.'),
      (r'Hệ vô nghiệm khi hạng của $A$ và hạng của $\overline{A}$ cùng bằng $n$.', r'Khi đó hệ có nghiệm duy nhất.'),
      (r'Hệ luôn có nghiệm khi $m < n$.', r'Ví dụ hệ $x + y + z = 1$, $x + y + z = 2$ có $m = 2 < n = 3$ nhưng vô nghiệm.')]),
    (r'Cho $A$, $B$ là hai ma trận vuông cùng cấp $n \ge 2$. Phát biểu nào sau đây là đúng?',
     r'$(AB)^T = B^TA^T$.', r'Phần tử hàng $i$, cột $j$ của cả hai vế đều bằng $\sum_k a_{jk}b_{ki}$.',
     [(r'$(AB)^T = A^TB^T$.', r'Phải đảo thứ tự: $A^TB^T = (BA)^T$, nói chung khác $(AB)^T$.'),
      (r'$(A + B)^2 = A^2 + 2AB + B^2$.', r'$(A + B)^2 = A^2 + AB + BA + B^2$, chỉ bằng vế phải khi $AB = BA$.'),
      (r'Nếu $AB = 0$ thì $A = 0$ hoặc $B = 0$.', r'$A = \begin{pmatrix}1&0\\0&0\end{pmatrix}$, $B = \begin{pmatrix}0&0\\0&1\end{pmatrix}$ đều khác ma trận không nhưng $AB = 0$.')]),
    (r'Cho $A$ là ma trận vuông khả nghịch và $\lambda$ là một trị riêng của $A$. Phát biểu nào sau đây là đúng?',
     r'$\dfrac{1}{\lambda}$ là một trị riêng của $A^{-1}$.', r'Từ $AX = \lambda X$ nhân $A^{-1}$ vào bên trái: $X = \lambda A^{-1}X$, tức $A^{-1}X = \dfrac{1}{\lambda}X$ ($\lambda \ne 0$ vì $A$ khả nghịch).',
     [(r'$\lambda$ là một trị riêng của $A^{-1}$.', r'Trị riêng tương ứng của $A^{-1}$ là $\dfrac{1}{\lambda}$, chỉ trùng $\lambda$ khi $\lambda = \pm1$.'),
      (r'$\lambda$ là một trị riêng của $2A$.', r'$(2A)X = 2\lambda X$ nên trị riêng tương ứng của $2A$ là $2\lambda$.'),
      (r'$-\lambda$ là một trị riêng của $A^T$.', r'$\det(A^T - tI) = \det(A - tI)$ nên $A^T$ có đúng các trị riêng của $A$.')]),
    (r'Trong không gian véc tơ $\mathbb{R}^n$, cho hệ $S$ gồm $n + 1$ véc tơ. Phát biểu nào sau đây là đúng?',
     r'Hệ $S$ luôn phụ thuộc tuyến tính.', r'Hạng của hệ không vượt quá số chiều $n$, nhỏ hơn số véc tơ $n + 1$.',
     [(r'Hệ $S$ luôn độc lập tuyến tính.', r'Trong $\mathbb{R}^n$ không có quá $n$ véc tơ độc lập tuyến tính.'),
      (r'Hạng của hệ $S$ bằng $n + 1$.', r'Hạng không vượt quá số chiều $n$ của không gian.'),
      (r'Hệ $S$ luôn là một cơ sở của $\mathbb{R}^n$.', r'Cơ sở của $\mathbb{R}^n$ gồm đúng $n$ véc tơ độc lập tuyến tính.')]),
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$. Phát biểu nào sau đây về các phép biến đổi sơ cấp trên hàng là đúng?',
     r'Đổi chỗ hai hàng của $A$ thì định thức đổi dấu.', r'Đây là tính chất phản đối xứng của định thức đối với các hàng.',
     [(r'Nhân một hàng của $A$ với số $k$ thì định thức không đổi.', r'Định thức được nhân với $k$.'),
      (r'Cộng vào một hàng một bội của hàng khác thì định thức đổi dấu.', r'Phép biến đổi này không làm thay đổi định thức.'),
      (r'Đổi chỗ hai hàng của $A$ thì định thức không đổi.', r'Định thức đổi dấu.')]),
]


def s6(rng, k):
    return theory(*S6[k % len(S6)])


# ---------- Câu 7: tính chất định thức ----------
def s7(rng, k):
    v, nn = k % 4, rng.choice([3, 4])
    d, e = rng.choice([2, 3, -2, 4]), rng.choice([-3, 2, -1, 5])
    c = rng.choice([2, -2, 3, R(1, 2)])
    hint = T(r' (Nhớ rằng $\det(kA) = k^n\det A$ với $A$ vuông cấp $n$.)')
    if v == 0:
        p = rng.choice([2, 3])
        ok = c ** nn * d ** p / e
        q = T(r'Cho $A$, $B$ là hai ma trận vuông cấp <n> có $\det A = <d>$ và $\det B = <e>$. Giá trị của $\det\left(<c>A^{<p>}(B^T)^{-1}\right)$ bằng', n=nn, d=d, e=e, c=c, p=p) + hint
        ex = steps(T(r'$\det\left(<c>A^{<p>}(B^T)^{-1}\right)=(<c>)^{<n>}(\det A)^{<p>}\dfrac{1}{\det(B^T)}$.',
                     c=c, n=nn, p=p),
                   T(r'$=(<c>)^{<n>}\cdot(<d>)^{<p>}\cdot\dfrac{1}{<e>}$.',
                     c=c, n=nn, d=d, p=p, e=e),
                   T(r'$=<ok>$.', ok=ok))
        cands = [c * d ** p / e, c ** nn * d ** p * e, c ** nn * d * p / e, -ok]
    elif v == 1:
        ok = c ** nn * e ** 2 / d
        q = T(r'Cho $A$, $B$ là hai ma trận vuông cấp <n> có $\det A = <d>$ và $\det B = <e>$. Giá trị của $\det\left(<c>A^{-1}B^2\right)$ bằng', n=nn, d=d, e=e, c=c) + hint
        ex = steps(T(r'$\det(<c>A^{-1}B^2)=(<c>)^{<n>}\det(A^{-1})(\det B)^2$.', c=c, n=nn),
                   T(r'$=(<c>)^{<n>}\cdot\dfrac{1}{<d>}\cdot(<e>)^2$.',
                     c=c, n=nn, d=d, e=e),
                   T(r'$=<ok>$.', ok=ok))
        cands = [c * e ** 2 / d, c ** nn * e ** 2 * d, c ** nn * 2 * e / d, -ok]
    elif v == 2:
        c = rng.choice([2, 3, -2])
        ok = c ** nn
        q = T(r'Cho $A$ là ma trận vuông cấp <n> khả nghịch thỏa mãn $A^2 = <c>A$. Định thức của ma trận $A$ bằng', n=nn, c=c)
        ex = steps(T(r'$A^2=<c>A \Rightarrow A^2-<c>A=0 \Rightarrow A(A-<c>I)=0$.', c=c),
                   r'$A$ khả nghịch nên nhân bên trái với $A^{-1}$:',
                   T(r'$A-<c>I=0 \Rightarrow A=<c>I$.', c=c),
                   T(r'$\det A=\det(<c>I)=(<c>)^{<n>}\det I=(<c>)^{<n>}$.',
                     c=c, n=nn),
                   T(r'$=<ok>$.', ok=ok))
        cands = [c, c * nn, c ** 2, 0]
    else:
        ok = c ** nn * d ** 2 / e
        q = T(r'Cho $A$, $B$ là hai ma trận vuông cấp <n> có $\det A = <d>$ và $\det B = <e>$. Giá trị của $\det\left(<c>A^TB^{-1}A\right)$ bằng', n=nn, d=d, e=e, c=c) + hint
        ex = steps(T(r'$\det(<c>A^TB^{-1}A)=(<c>)^{<n>}\det(A^T)\det(B^{-1})\det(A)$.',
                     c=c, n=nn),
                   T(r'$=(<c>)^{<n>}\cdot<d>\cdot\dfrac{1}{<e>}\cdot<d>$.',
                     c=c, n=nn, d=d, e=e),
                   T(r'$=<ok>$.', ok=ok))
        cands = [c * d ** 2 / e, c ** nn * d / e, c ** nn * d ** 2 * e, -ok]
    return NQ(q, ok, cands, ex)


# ---------- Câu 22: bài toán thực tế dùng ma trận ----------
def s22(rng, k):
    v = k % 5
    if v == 0:
        A, X = rmat(rng, 3, 4, 1, 5), Matrix([rng.choice([5, 10, 15, 20]) for _ in range(4)])
        c = Matrix([[rng.randint(2, 6) for _ in range(3)]])
        need = A * X
        ok = (c * need)[0]
        q = T(r'Một hãng dùng 3 loại vật liệu để sản xuất 4 loại sản phẩm với ma trận định mức $A = <A>$, trong đó $a_{ij}$ là số đơn vị vật liệu loại $i$ cần để sản xuất 1 đơn vị sản phẩm loại $j$. Hãng dự định sản xuất lần lượt $<x>$ đơn vị sản phẩm các loại 1, 2, 3, 4. Biết giá mỗi đơn vị vật liệu loại 1, 2, 3 lần lượt là $<c>$ (đơn vị tiền), tổng chi phí vật liệu để thực hiện kế hoạch trên bằng',
              A=pmat(A), x=', '.join(str(i) for i in X), c=', '.join(str(i) for i in c))
        ex = steps(T(r'Sản lượng viết thành véc tơ cột: $X=<X>^T$.', X=vec(X)),
                   T(r'Nhu cầu từng loại vật liệu: $AX=<A><X>^T=<n>^T$.', A=pmat(A), X=vec(X), n=vec(need)),
                   T(r'Chi phí: $<c_1>\cdot<n_1>+<c_2>\cdot<n_2>+<c_3>\cdot<n_3>=<ok>$.',
                     c_1=c[0], c_2=c[1], c_3=c[2],
                     n_1=need[0], n_2=need[1], n_3=need[2], ok=ok))
        return NQ(q, ok, [sum(need), ok + c[0] * X[0], ok - need[2]], ex)
    if v == 1:
        Rm, Cm = rmat(rng, 3, 2, 1, 4), rmat(rng, 2, 3, 1, 4)
        O = Matrix([rng.choice([5, 10, 20]) for _ in range(3)])
        comp = Cm * O
        raw = Rm * comp
        q = T(r'Một xưởng dùng 3 loại nguyên liệu để làm 2 loại linh kiện, rồi dùng linh kiện để lắp 3 loại sản phẩm. Ma trận $R = <R>$ cho số đơn vị nguyên liệu loại $i$ cần cho 1 linh kiện loại $j$; ma trận $C = <C>$ cho số linh kiện loại $i$ cần cho 1 sản phẩm loại $j$. Xưởng nhận đơn hàng gồm $<o>$ sản phẩm các loại 1, 2, 3. Tổng số đơn vị nguyên liệu (cả ba loại) cần dùng cho đơn hàng bằng',
              R=pmat(Rm), C=pmat(Cm), o=', '.join(str(i) for i in O))
        ex = steps(T(r'Số linh kiện cần: $C<o>^T=<C><o>^T=<c>^T$.',
                     C=pmat(Cm), o=vec(O), c=vec(comp)),
                   T(r'Số nguyên liệu cần: $R<c>^T=<R><c>^T=<r>^T$.',
                     R=pmat(Rm), c=vec(comp), r=vec(raw)),
                   T(r'Tổng lượng nguyên liệu: $<r1>+<r2>+<r3>=<ok>$.',
                     r1=raw[0], r2=raw[1], r3=raw[2], ok=sum(raw)))
        return NQ(q, sum(raw), [sum(comp), sum(Rm) * sum(O), sum(raw) - raw[0]], ex)
    if v == 2:
        A, X = rmat(rng, 2, 3, 1, 4), Matrix([rng.choice([10, 20, 30, 40]) for _ in range(3)])
        cost, price = Matrix([[rng.randint(3, 8), rng.randint(3, 8)]]), Matrix([[rng.choice([40, 45, 50, 60]) for _ in range(3)]])
        need = A * X
        rev, cst = (price * X)[0], (cost * need)[0]
        if rev <= cst:
            raise Retry
        q = T(r'Một hãng dùng 2 loại vật liệu để sản xuất 3 loại sản phẩm với ma trận định mức $A = <A>$ ($a_{ij}$ là số đơn vị vật liệu loại $i$ cần cho 1 đơn vị sản phẩm loại $j$). Hãng sản xuất và bán hết lần lượt $<x>$ đơn vị sản phẩm các loại; giá mỗi đơn vị vật liệu loại 1, 2 là $<c>$; giá bán mỗi đơn vị sản phẩm loại 1, 2, 3 là $<p>$ (cùng đơn vị tiền). Lợi nhuận (doanh thu trừ chi phí vật liệu) của hãng bằng',
              A=pmat(A), x=', '.join(str(i) for i in X), c=' và '.join(str(i) for i in cost), p=', '.join(str(i) for i in price))
        ex = steps(T(r'Vật liệu cần dùng: $AX=<A><X>^T=<n>^T$.', A=pmat(A), X=vec(X), n=vec(need)),
                   T(r'Chi phí vật liệu: $<c1>\cdot<n1>+<c2>\cdot<n2>=<cst>$.',
                     c1=cost[0], c2=cost[1], n1=need[0], n2=need[1], cst=cst),
                   T(r'Doanh thu: $<p1>\cdot<x1>+<p2>\cdot<x2>+<p3>\cdot<x3>=<rev>$.',
                     p1=price[0], p2=price[1], p3=price[2],
                     x1=X[0], x2=X[1], x3=X[2], rev=rev),
                   T(r'Lợi nhuận: $<rev>-<cst>=<ok>$.', rev=rev, cst=cst, ok=rev - cst))
        return NQ(q, rev - cst, [rev, cst, rev - sum(need)], ex)
    if v == 3:
        A = Matrix([[R(rng.choice([1, 2, 3]), 10), R(rng.choice([2, 3, 4]), 10)], [R(rng.choice([2, 3, 4]), 10), R(rng.choice([1, 2]), 10)]])
        X = Matrix([rng.choice([100, 150, 200, 250, 300]), rng.choice([100, 200, 300, 400])])
        D = (I2 - A) * X
        if not all(d_.is_integer and d_ > 0 for d_ in D):
            raise Retry
        q = T(r'Một nền kinh tế gồm 2 ngành có ma trận hệ số chi phí trực tiếp (mô hình cân đối liên ngành Leontief) $A = <A>$, trong đó $a_{ij}$ là giá trị sản phẩm ngành $i$ mà ngành $j$ cần dùng để làm ra 1 đơn vị giá trị sản phẩm của mình. Yêu cầu về sản phẩm cuối cùng của hai ngành lần lượt là $<d1>$ và $<d2>$. Biết véc tơ tổng sản lượng $X$ thỏa mãn $(I - A)X = D$, tổng giá trị sản lượng $x_1 + x_2$ của hai ngành bằng',
              A=r'\begin{pmatrix}%s & %s \\ %s & %s\end{pmatrix}' % tuple(vn(a, 1).replace(',', '{,}') for a in A), d1=D[0], d2=D[1])
        coef = I2 - A
        ex = steps(T(r'$I-A=<M>$; do đó $\begin{pmatrix}<a11>&<a12>\\<a21>&<a22>\end{pmatrix}\begin{pmatrix}x_1\\x_2\end{pmatrix}=\begin{pmatrix}<d1>\\<d2>\end{pmatrix}$.',
                     M=pmat(coef), a11=coef[0, 0], a12=coef[0, 1],
                     a21=coef[1, 0], a22=coef[1, 1], d1=D[0], d2=D[1]),
                   *gauss_steps(coef, D),
                   T(r'$x_1=<a>,\quad x_2=<b>\Rightarrow x_1+x_2=<sum>$.',
                     a=X[0], b=X[1], sum=sum(X)))
        return NQ(q, sum(X), [sum(D), X[0], X[1], sum(X) + sum(D)], ex)
    pa, pb = rng.choice([10, 20, 30]), rng.choice([10, 20, 40])
    a0, b0 = rng.choice([400, 500, 600, 800]), rng.choice([300, 400, 500, 700])
    P = Matrix([[1 - R(pa, 100), R(pb, 100)], [R(pa, 100), 1 - R(pb, 100)]])
    x1 = P * Matrix([a0, b0])
    x2 = P * x1
    if not x2[0].is_integer:
        raise Retry
    q = T(r'Thị trường viễn thông ở một địa phương có hai nhà mạng X và Y. Mỗi tháng có <pa>% khách hàng của X chuyển sang Y và <pb>% khách hàng của Y chuyển sang X; tổng số khách hàng không đổi. Hiện tại X có <a0> nghìn khách, Y có <b0> nghìn khách. Gọi $P = <P>$ là ma trận chuyển, khi đó số khách sau mỗi tháng được tính bằng cách nhân $P$ với véc tơ số khách tháng trước. Số khách hàng (nghìn người) của nhà mạng X sau 2 tháng bằng',
          pa=pa, pb=pb, a0=a0, b0=b0, P=r'\begin{pmatrix}%s & %s \\ %s & %s\end{pmatrix}' % tuple(vn(a, 1).replace(',', '{,}') for a in P))
    ex = steps(T(r'Sau tháng thứ nhất: $P\begin{pmatrix}<a>\\<b>\end{pmatrix}=<P><x1>^T=<r1>^T$ (nghìn khách).',
                 a=a0, b=b0, P=pmat(P), x1=vec([a0, b0]), r1=vec(x1)),
               T(r'Sau tháng thứ hai: $P<r1>^T=<P><x1>^T=<r2>^T$ (nghìn khách).',
                 P=pmat(P), r1=vec(x1), x1=vec(x1), r2=vec(x2)),
               T(r'Nhà mạng X có <x> nghìn khách.', x=x2[0]))
    return NQ(q, x2[0], [x1[0], x2[1], a0, x1[1]], ex)


# ---------- Câu 23: hạng phụ thuộc tham số ----------
def s23(rng, k):
    r1, r2 = [rng.randint(-2, 3) for _ in range(4)], [rng.randint(-2, 3) for _ in range(4)]
    r1[0] = 1
    al, be = rint(rng, -2, 3, (0,)), rint(rng, 1, 2)
    r3 = [al * r1[i] + be * r2[i] for i in range(4)]
    m0 = r3[3]
    A = Matrix([r1, r2, r3[:3] + [m_]])
    if A.subs(m_, m0).rank() != 2 or A.subs(m_, m0 + 1).rank() != 3 or Matrix([r1[:3], r2[:3]]).rank() != 2:
        raise Retry
    minor_cols = next((i, j) for i, j in combinations(range(3), 2)
                      if Matrix([[r1[i], r1[j]], [r2[i], r2[j]]]).det() != 0)
    i, j = minor_cols
    minor = Matrix([[r1[i], r1[j]], [r2[i], r2[j]]])
    reduced = Matrix([r1, r2, [0, 0, 0, m_ - m0]])
    operation = r'R_3 \leftarrow R_3' + ''.join(
        (' + ' if coefficient > 0 else ' - ') +
        ('' if abs(coefficient) == 1 else tx(abs(coefficient))) + 'R_%d' % row
        for row, coefficient in ((1, -al), (2, -be)) if coefficient
    )
    last_entry = tx(m_ - m0)
    ex = steps(
        '$%s$.' % operation,
        T(r'$A = <A> \xrightarrow{<op>} <B>$.',
          A=pmat(A), B=pmat(reduced), op=operation),
        T(r'$\det <M> = <d> \ne 0$, nên hai hàng đầu độc lập tuyến tính.',
          M=pmat(minor), d=minor.det()),
        T(r'$m = <m0> \Rightarrow R_3 = (0,0,0,0) \Rightarrow \operatorname{rank}(A)=2$.',
          m0=m0),
        T(r'$m \ne <m0> \Rightarrow R_3 = (0,0,0,<last>) \ne (0,0,0,0) \Rightarrow \operatorname{rank}(A)=3$.',
          m0=m0, last=last_entry),
        T(r'<b>Kết quả:</b> $m = <m0>$.', m0=m0))
    if k % 2 == 0:
        q = T(r'Cho ma trận $A = <A>$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi', A=pmat(A))
        return NQ(q, m0, [m0 + 1, -m0, m0 - 1, r1[3] + r2[3]], ex, fmt=lambda v_: '$m = %s$' % tx(v_))
    q = T(r'Trong không gian véc tơ $\mathbb{R}^4$, cho hệ véc tơ $S = \{u_1<a>,\ u_2<b>,\ u_3<c>\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi', a=vec(r1), b=vec(r2), c=vec(r3[:3] + [m_]))
    o = rng.choice([m0 + 1, m0 - 1, -m0 if m0 else 2])
    return Q(q, T(r'$m \ne <m0>$.', m0=m0), [T('$m = <m0>$.', m0=m0), r'với mọi giá trị của $m$.', T(r'$m \ne <o>$.', o=o)], ex)


# ---------- Câu 24: phương trình ma trận ----------
def s24(rng, k):
    v = k % 5
    X = rmat(rng, 2, 2, -2, 3)
    A = unimod(rng)
    if v == 0:
        B = A * X
        st, sol, W = r'$A.X = B$', r'$X = A^{-1}B$', [B * A.inv(), A.inv() * B.T]
        given = T('$A = <A>$ và $B = <B>$', A=pmat(A), B=pmat(B))
    elif v == 1:
        B = X * A
        st, sol, W = r'$X.A = B$', r'$X = BA^{-1}$ (nhân $A^{-1}$ về bên phải)', [A.inv() * B, B.T * A.inv()]
        given = T('$A = <A>$ và $B = <B>$', A=pmat(A), B=pmat(B))
    elif v == 2:
        B2 = unimod(rng)
        C = A * X * B2
        st, sol, W = r'$A.X.B = C$', r'$X = A^{-1}CB^{-1}$', [B2.inv() * C * A.inv(), A.inv() * C * B2]
        given = T('$A = <A>$, $B = <B>$ và $C = <C>$', A=pmat(A), B=pmat(B2), C=pmat(C))
    elif v == 3:
        N = A
        A = N + I2
        B = N * X
        st, sol, W = r'$A.X = X + B$', T(r'$(A - I)X = B$ với $A - I = <N>$, nên $X = (A - I)^{-1}B$', N=pmat(N)), [B * N.inv(), A.inv() * B if A.det() != 0 else -X]
        given = T('$A = <A>$ và $B = <B>$', A=pmat(A), B=pmat(B))
    else:
        c = rng.choice([2, 3])
        N = A
        A = N - c * I2
        B = N * X
        st, sol, W = T(r'$<c>X + A.X = B$', c=c), T(r'$(<c>I + A)X = B$ với $<c>I + A = <N>$, nên $X = (<c>I + A)^{-1}B$', c=c, N=pmat(N)), [B * N.inv(), N * B]
        given = T('$A = <A>$ và $B = <B>$', A=pmat(A), B=pmat(B))
    W += [X.T, -X, Matrix([[X[1, 1], X[0, 1]], [X[1, 0], X[0, 0]]]), X + I2]
    wrongs = []
    for w in W:
        if w != X and w not in wrongs and all(e.is_integer for e in w):
            wrongs.append(w)
    if len(wrongs) < 3:
        raise Retry
    q = 'Cho các ma trận ' + given + '. Ma trận $X$ thỏa mãn ' + st + ' là'
    fm = lambda Z: '$' + pmat(Z) + '$.'
    if v == 0:
        ex = steps(r'$AX=B \Rightarrow X=A^{-1}B$.',
                   T(r'$A^{-1}=<Ai>,\qquad A^{-1}B=<X>$.', Ai=pmat(A.inv()), X=pmat(A.inv() * B)),
                   T(r'Kiểm tra: $A<X>=<B>$.', X=pmat(X), B=pmat(A * X)))
    elif v == 1:
        ex = steps(r'$XA=B \Rightarrow X=BA^{-1}$ (nhân $A^{-1}$ bên phải).',
                   T(r'$A^{-1}=<Ai>,\qquad BA^{-1}=<X>$.', Ai=pmat(A.inv()), X=pmat(B * A.inv())),
                   T(r'Kiểm tra: $<X>A=<B>$.', X=pmat(X), A=pmat(A), B=pmat(X * A)))
    elif v == 2:
        ex = steps(r'$AXB=C \Rightarrow X=A^{-1}CB^{-1}$ (nhân bên trái $A^{-1}$, bên phải $B^{-1}$).',
                   T(r'$A^{-1}=<Ai>,\quad B^{-1}=<Bi>$.', Ai=pmat(A.inv()), Bi=pmat(B2.inv())),
                   T(r'$X=A^{-1}CB^{-1}=<X>$.', X=pmat(A.inv() * C * B2.inv())),
                   T(r'Kiểm tra: $A<X>B=<C>$.', X=pmat(X), B=pmat(B2), C=pmat(A * X * B2)))
    elif v == 3:
        ex = steps(r'$AX=X+B \Rightarrow (A-I)X=B$.',
                   T(r'$A-I=<N>,\qquad B=<B>$.', N=pmat(N), B=pmat(B)),
                   T(r'$X=(A-I)^{-1}B=<Ni><B>=<X>$.',
                     Ni=pmat(N.inv()), B=pmat(B), X=pmat(N.inv() * B)),
                   T(r'Kiểm tra: $<A><solx>=<rhsx>+<B>$.',
                     A=pmat(A), solx=pmat(X), rhsx=pmat(X), B=pmat(B)))
    else:
        ex = steps(T(r'$<c>X+AX=B \Rightarrow (<c>I+A)X=B$.', c=c),
                   T(r'$<c>I+A=<N>,\qquad B=<B>$.', c=c, N=pmat(N), B=pmat(B)),
                   T(r'$X=(<c>I+A)^{-1}B=<Ni><B>=<X>$.',
                     c=c, Ni=pmat(N.inv()), B=pmat(B), X=pmat(N.inv() * B)),
                   T(r'Kiểm tra: $(<c>I+A)<X>=<B>$.', c=c, A=pmat(A), X=pmat(X), B=pmat(B)))
    return Q(q, fm(X), [fm(w) for w in wrongs[:3]], ex)


# ---------- Câu 25: hệ phương trình chứa tham số ----------
def s25(rng, k):
    if k % 4 == 3:
        a = rng.choice([3, 4, 5, -1, -2])
        A = Matrix([[1, 1, 1], [1, m_, a], [1, a, m_]])
        roots = sp.solve(A.det(), m_)
        q = T(r'Hệ phương trình thuần nhất $\begin{cases}x + y + z = 0\\ x + my <a>z = 0\\ x <a>y + mz = 0\end{cases}$ (với $x, y, z$ là ẩn) luôn có nghiệm tầm thường $(0;0;0)$. Tích tất cả các giá trị của $m$ để hệ có nghiệm không tầm thường bằng', a=('+ ' if a > 0 else '- ') + ('' if abs(a) == 1 else str(abs(a))))
        ex = steps(T(r'$\det A=<det>=<factor>$.', det=A.det(), factor=sp.factor(A.det())),
                   T(r'$\det A=0 \Leftrightarrow <factor>=0 \Leftrightarrow m\in\{<roots>\}$.',
                     factor=sp.factor(A.det()), roots=';'.join(str(root) for root in roots)),
                   T(r'Các nghiệm là <r1> và <r2>; tích cần tìm: $<r1>\cdot<r2>=<ok>$.',
                     r1=roots[0], r2=roots[1], ok=roots[0] * roots[1]))
        return NQ(q, roots[0] * roots[1], [roots[0] + roots[1], a, -roots[0] * roots[1], a * a], ex)
    p, qq, s, c = rng.randint(1, 3), rng.randint(-2, 2), rng.randint(1, 3), rng.choice([1, 2, 3])
    b1, b2 = rng.randint(1, 3), rng.randint(2, 6)
    co = qq + s - c * c
    e1 = sp.Eq(x + p * y + qq * z, b1)
    e2 = sp.Eq(2 * x + (2 * p + 1) * y + (2 * qq + s) * z, b2)
    lhs3 = tx(x + (p + 1) * y) + ' + ' + ('(m^2 %s %d)z' % ('+' if co >= 0 else '-', abs(co)) if co else 'm^2z')
    rhs3 = tx(m_ + (b2 - b1 - c))
    sysm = r'\begin{cases}%s\\ %s\\ %s = %s\end{cases}' % (tx(e1), tx(e2), lhs3, rhs3)
    rhs12 = b2 - 2 * b1
    rhs3 = rhs12 - c
    x_base = sp.expand(b1 - p * rhs12)
    x_free = sp.expand(x_base + (p * s - qq) * symbols('t'))
    x_unique = sp.factor(x_base + R(p * s - qq, 1) / (m_ + c))
    y_free = sp.expand(rhs12 - s * symbols('t'))
    y_unique = sp.factor(rhs12 - R(s, 1) / (m_ + c))
    ex = steps(
        T(r'$h_2-2h_1:\quad y+<s>z=<rhs>$.', s=s, rhs=rhs12),
        T(r'$h_3-h_1:\quad y+(m^2+<s>-<c>^2)z=m<rhs3>$.',
          s=s, c=c, rhs3=(' + ' if rhs3 >= 0 else ' - ') + str(abs(rhs3))),
        T(r'Khử $y$: $(m^2-<c>^2)z=m-<c>\Leftrightarrow(m-<c>)(m+<c>)z=m-<c>$.', c=c),
        T(r'$m=<c>\Rightarrow 0=0$: đặt $z=t$, $y=<y>$ và $x=<x>$. Vậy có vô số nghiệm.',
          c=c, y=tx(y_free), x=tx(x_free)),
        T(r'$m=-<c>\Rightarrow 0=-2\cdot<c>\ne0$: hệ vô nghiệm.', c=c),
        T(r'$m\ne\pm<c>\Rightarrow z=\dfrac{1}{m+<c>},\quad y=<y>,\quad x=<x>$. Hệ có nghiệm duy nhất.',
          c=c, y=tx(y_unique), x=tx(x_unique)))
    head = 'Cho hệ phương trình $' + sysm + '$ (với $x, y, z$ là ẩn, $m$ là tham số). '
    f = lambda s_: '$' + s_ + '$.'
    if k % 4 == 0:
        return Q(head + 'Hệ vô nghiệm khi và chỉ khi', f('m = %d' % -c), [f('m = %d' % c), f(r'm = \pm %d' % c), f('m = 0')], ex)
    if k % 4 == 1:
        return Q(head + 'Hệ có vô số nghiệm khi và chỉ khi', f('m = %d' % c), [f('m = %d' % -c), f(r'm = \pm %d' % c), f(r'm \ne %d' % c)], ex)
    return Q(head + 'Hệ có nghiệm duy nhất khi và chỉ khi', f(r'm \ne \pm %d' % c), [f(r'm \ne %d' % c), f(r'm \ne %d' % -c), f(r'm \ne 0')], ex)


# ---------- Câu 29: bài toán thực tế dẫn về hệ phương trình ----------
def s29(rng, k):
    v = k % 4
    if v == 0:
        ps = [rng.choice([10, 15, 20, 25, 30, 35, 40]) for _ in range(3)]
        S = Matrix(3, 3, lambda i, j: rng.randint(1, 3) if i == j else rng.randint(-1, 1))
        D = Matrix(3, 3, lambda i, j: -rng.randint(1, 2) if i == j else rng.randint(0, 1))
        if (S - D).det() == 0:
            raise Retry
        qty = [rng.choice([20, 30, 40, 50, 60]) for _ in range(3)]
        P = Matrix([p1, p2, p3])
        sup = [qty[i] - (S.row(i) * Matrix(ps))[0] + (S.row(i) * P)[0] for i in range(3)]
        dem = [qty[i] - (D.row(i) * Matrix(ps))[0] + (D.row(i) * P)[0] for i in range(3)]
        syst = r'\begin{cases}' + r'\\ '.join('s_%d = %s' % (i + 1, tx(sup[i])) for i in range(3)) + r'\end{cases}\ \text{và}\ \begin{cases}' + \
               r'\\ '.join('d_%d = %s' % (i + 1, tx(dem[i])) for i in range(3)) + r'\end{cases}'
        ask_q = k % 8 == 4
        q = r'Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$' + syst + \
            r'.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \overline{1,3}$. ' + \
            ('Tổng lượng cung của cả ba loại hàng hóa tại trạng thái cân bằng bằng' if ask_q else r'Gọi $p_1^*, p_2^*, p_3^*$ là các mức giá cân bằng, giá trị của $p_1^* + p_2^* + p_3^*$ bằng')
        equilibrium = S - D
        prices = Matrix(ps)
        rhs = equilibrium * prices
        ex = steps(T(r'Tại cân bằng, $s_i=d_i$. Trừ lượng cầu khỏi lượng cung theo từng loại: $(S-D)P=(S-D)<P0>^T$.',
                     P0=vec(ps)),
                   T(r'$S-D=<M>$, nên hệ giá là $<M>P=<rhs>^T$.',
                     M=pmat(equilibrium), rhs=vec(rhs)),
                   *gauss_steps(equilibrium, rhs),
                   T(r'$P=<P>^T$; thay vào hàm cung hoặc cầu được $Q=<Q>^T$.',
                     P=vec(ps), Q=vec(qty)),
                   T(r'Tổng lượng cung/cầu: $<q1>+<q2>+<q3>=<sumq>$; tổng giá: $<p1>+<p2>+<p3>=<sump>$.',
                     q1=qty[0], q2=qty[1], q3=qty[2], sumq=sum(qty),
                     p1=ps[0], p2=ps[1], p3=ps[2], sump=sum(ps)))
        ok, other = (sum(qty), sum(ps)) if ask_q else (sum(ps), sum(qty))
        return NQ(q, ok, [other, ok + 5, ok - 5, ok + 10], ex)
    if v == 1:
        A = rmat(rng, 3, 3, 1, 3)
        if A.det() == 0:
            raise Retry
        X = Matrix([rng.choice([10, 20, 30, 40]) for _ in range(3)])
        b = A * X
        q = T(r'Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $<r1>$ đơn vị nguyên liệu I; $<r2>$ đơn vị nguyên liệu II và $<r3>$ đơn vị nguyên liệu III. Kho hiện có $<b1>$, $<b2>$ và $<b3>$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng',
              r1=', '.join(str(i) for i in A.row(0)), r2=', '.join(str(i) for i in A.row(1)), r3=', '.join(str(i) for i in A.row(2)), b1=b[0], b2=b[1], b3=b[2])
        ex = steps(r'Gọi $x,y,z$ lần lượt là số sản phẩm loại 1, 2, 3.',
                   T(r'Hệ nguyên liệu: $<A>\begin{pmatrix}x\\y\\z\end{pmatrix}=<b>^T$.',
                     A=pmat(A), b=vec(b)),
                   *gauss_steps(A, b),
                   T(r'$(x,y,z)^T=<X>^T$; tổng sản phẩm: $<x>+<y>+<z>=<sum>$.',
                     X=vec(X), x=X[0], y=X[1], z=X[2], sum=sum(X)))
        return NQ(q, sum(X), [sum(X) + 10, sum(X) - 10, max(X) * 2, sum(b) // 10], ex)
    if v == 2:
        bb, tt = rng.choice([(R(8, 10), R(1, 4)), (R(3, 4), R(1, 5)), (R(9, 10), R(1, 3)), (R(4, 5), R(1, 2))])
        c0, I0, G0 = rng.choice([40, 60, 80, 100]), rng.choice([100, 120, 150]), rng.choice([100, 140, 160, 200])
        Y = nice((c0 + I0 + G0) / (1 - bb * (1 - tt)), 1)
        Tx = tt * Y
        C = c0 + bb * (Y - Tx)
        if not (Tx.is_integer and C.is_integer):
            raise Retry
        which = (k // 4) % 3
        name, ok = [('mức thu nhập cân bằng $Y^*$', Y), ('mức tiêu dùng $C^*$ tại trạng thái cân bằng', C), ('số thuế $T^*$ tại trạng thái cân bằng', Tx)][which]
        q = T(r'Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = <c0> + <b>(Y - T)$; $T = <t>Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = <I>$ và chi tiêu chính phủ $G_0 = <G>$. Giá trị của ' + name + ' bằng',
              c0=c0, b=vn(bb, 2).rstrip('0').replace(',', '{,}'), t=vn(tt, 2).rstrip('0').replace(',', '{,}') if tt.q != 3 else r'\dfrac13', I=I0, G=G0)
        ex = steps(
            T(r'$T=tY\Rightarrow C=c_0+b(Y-tY)=<c0>+<b>(1-<t>)Y$.',
              c0=c0, b=tx(bb), t=tx(tt)),
            T(r'$Y=C+I_0+G_0\Rightarrow [1-<b>(1-<t>)]Y=<c0>+<I>+<G>$.',
              b=tx(bb), t=tx(tt), c0=c0, I=I0, G=G0),
            T(r'$Y=\dfrac{<total>}{1-<b>(1-<t>)}=<Y>$.',
              total=c0 + I0 + G0, b=tx(bb), t=tx(tt), Y=Y),
            T(r'$T=tY=<t>\cdot<Y>=<T>,\qquad C=c_0+b(Y-T)=<c0>+<b>(<Y>-<T>)=<C>$.',
              t=tx(tt), Y=Y, T=Tx, c0=c0, b=tx(bb), C=C))
        return NQ(q, ok, [v_ for v_ in (Y, C, Tx, c0 + I0 + G0) if v_ != ok], ex)
    pr = rng.choice([(50, 80, 120), (40, 60, 100), (30, 50, 90), (60, 90, 150)])
    xs = [rng.choice([80, 100, 120, 150]), rng.choice([40, 50, 60, 70]), rng.choice([10, 20, 30])]
    N, rev, dd = sum(xs), sum(a * b for a, b in zip(pr, xs)), xs[0] - xs[1] - xs[2]
    q = T(r'Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá <a> nghìn đồng, hạng trung giá <b> nghìn đồng và hạng VIP giá <c> nghìn đồng. Ban tổ chức bán được tổng cộng <N> vé, thu về <rev> nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là <dd> vé. Số vé hạng VIP đã bán bằng',
          a=pr[0], b=pr[1], c=pr[2], N=N, rev=rev, dd=dd)
    coefficient = Matrix([[1, 1, 1], list(pr), [1, -1, -1]])
    rhs = Matrix([N, rev, dd])
    ex = steps(T(r'Hệ phương trình: $\begin{cases}x+y+z=<N>\\<a>x+<b>y+<c>z=<rev>\\x-y-z=<dd>\end{cases}$.',
                 N=N, a=pr[0], b=pr[1], c=pr[2], rev=rev, dd=dd),
               *gauss_steps(coefficient, rhs),
               T(r'$(x,y,z)=(<x>,<y>,<z>)$; số vé VIP đã bán: $z=<z>$.',
                 x=xs[0], y=xs[1], z=xs[2]))
    return NQ(q, xs[2], [xs[1], xs[2] + 10, xs[2] - 5, xs[1] - xs[2]], ex)


# ---------- Câu 40–42: nhóm câu hỏi đại số tuyến tính ----------
def g1(rng, k):
    v = k % 3
    lam = symbols('lambda')
    if v == 0:
        a, b = rng.choice([1, 2, 3, -1]), rng.choice([1, 2, -2])
        if a + 3 * b == 0:
            raise Retry
        A = a * I3 + b * sp.ones(3, 3)
        stem = T(r'Trong không gian véc tơ $\mathbb{R}^3$, cho hệ véc tơ $S = \{u_1<a>;\ u_2<b>;\ u_3<c>\}$. Gọi $A$ là ma trận có các dòng theo thứ tự là các véc tơ trong $S$ và $I$ là ma trận đơn vị cấp 3.', a=vec(A.row(0)), b=vec(A.row(1)), c=vec(A.row(2)))
        note = T(r'$A = <a>I + <b>J$ ($J$ là ma trận toàn số 1) có các trị riêng $<a>$ (bội 2) và $<l>$.', a=a, b='(%d)' % b if b < 0 else b, l=a + 3 * b)
        qs = [NQ('Định thức của ma trận $A$ bằng', A.det(), [a ** 3, a + 3 * b, 0, a * a * (a + b)],
                 steps(T(r'$A=<a>I+<b>J$, trong đó $J$ có các trị riêng $0,0,3$.',
                         a=a, b=b),
                       T(r'Các trị riêng của $A$: $<a>,<a>,<a>+3(<b>)=<l>$.',
                         a=a, b=b, l=a + 3 * b),
                       T(r'$\det A=<a>\cdot<a>\cdot(<l>)=<det>$.',
                         a=a, l=a + 3 * b, det=A.det()))),
              NQ('Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng', sum(A.inv()),
                 [R(3, a), R(1, a + 3 * b), 3 * (a + 3 * b)],
                 steps(T(r'$A(1,1,1)^T=(<l>)(1,1,1)^T$, nên $A^{-1}(1,1,1)^T=\dfrac1{<l>}(1,1,1)^T$.',
                         l=a + 3 * b),
                       T(r'Mỗi hàng của $A^{-1}$ có tổng $\dfrac1{<l>}$. Có 3 hàng nên tổng mọi phần tử bằng $3\cdot\dfrac1{<l>}=\dfrac3{<l>}=<s>$.',
                         l=a + 3 * b, s=sum(A.inv()))))]
        if (k // 3) % 2 == 0:
            qs.append(NQ('Gọi $X$ là tập hợp các trị riêng của $A$, tổng bình phương các phần tử của $X$ bằng',
                         a * a + (a + 3 * b) ** 2,
                         [2 * a * a + (a + 3 * b) ** 2, (2 * a + 3 * b) ** 2, a * a + (a + 3 * b)],
                         steps(T(r'$A$ có các trị riêng $<a>$ (lặp lại), $<l>$; tập $X$ không kể bội nên $X=\{<a>,<l>\}$.',
                                 a=a, l=a + 3 * b),
                               T(r'$\sum_{\lambda\in X}\lambda^2=<a>^2+(<l>)^2=<ok>$.',
                                 a=a, l=a + 3 * b, ok=a * a + (a + 3 * b) ** 2))))
        else:
            qs.append(NQ(T(r'Số chiều của không gian nghiệm của hệ $(A - <a>I)X = 0$ (không gian riêng ứng với trị riêng $\lambda = <a>$) bằng', a=a),
                         2, [1, 3, 0],
                         steps(T(r'$A-<a>I=<b>J=<M>$.', a=a, b=b, M=pmat(b * sp.ones(3, 3))),
                               T(r'Ba hàng đều bằng $<b>(1,1,1)$ nên $\operatorname{rank}(A-<a>I)=1$.',
                                 a=a, b=b),
                               r'Theo định lý hạng–không gian nghiệm: số chiều $=3-\operatorname{rank}(A-aI)=3-1=2$.')))
        return {'stem': stem, 'questions': qs}
    if v == 1:
        p, q_ = rng.choice([(1, 2), (3, 1), (2, 1), (4, 1), (1, 3), (3, 2)])
        r = rng.choice([v_ for v_ in (p - q_, 2, 3, 5, -1) if v_ not in (0, p + q_)])
        A = Matrix([[p, q_, 0], [q_, p, 0], [0, 0, r]])
        stem = T(r'Cho ma trận $A = <A>$ và gọi $I$ là ma trận đơn vị cấp 3.', A=pmat(A))
        eig = sorted(set([p + q_, p - q_, r]))
        note = T(r'Các trị riêng của $A$ là $<a>$, $<b>$ và $<r>$.', a=p + q_, b=p - q_, r=r)
        qs = [NQ('Định thức của ma trận $A$ bằng', A.det(),
                 [r * (p * p + q_ * q_), p * p * r, -A.det(), p * p - q_ * q_],
                 steps(T(r'$\det A=<r>\det\begin{pmatrix}<p>&<q>\\<q>&<p>\end{pmatrix}$.',
                         r=r, p=p, q=q_),
                       T(r'$\det A=<r>(<p>\cdot<p>-<q>\cdot<q>)=<r>((<p>-<q>)(<p>+<q>))=<det>$.',
                         r=r, p=p, q=q_, det=A.det())))]
        if (k // 3) % 2 == 0:
            rk = (A - r * I3).rank()
            shifted = A - r * I3
            block_det = (p - r) ** 2 - q_ ** 2
            qs.append(NQ(T(r'Hạng của ma trận $A - <r>I$ bằng', r='(%d)' % r if r < 0 else r),
                         rk, [v_ for v_ in (1, 2, 3, 0) if v_ != rk],
                         steps(T(r'$A-rI=<B>$.', r='(%d)' % r if r < 0 else r, B=pmat(shifted)),
                               T(r'Khối cấp 2 có định thức $(<p>-<r>)^2-<q>^2=<d>$.',
                                 p=p, r=r, q=q_, d=block_det),
                               T(r'Khối này khác ma trận không; do đó hạng của khối là <rank>. Hàng/cột cuối bằng 0, suy ra $\operatorname{rank}(A-rI)=<rank>$.',
                                 rank=rk)) ))
        else:
            qs.append(NQ('Tổng các phần tử trên đường chéo chính của ma trận $A^{-1}$ bằng',
                         A.inv().trace(), [R(1, p) * 2 + R(1, r), A.trace(), R(1, A.det())],
                         steps(T(r'$\det\begin{pmatrix}<p>&<q>\\<q>&<p>\end{pmatrix}=<p>^2-<q>^2=(<p>-<q>)(<p>+<q>)$.',
                                 p=p, q=q_),
                               T(r'$\operatorname{tr}(A^{-1})=\dfrac1{<l1>}+\dfrac1{<l2>}+\dfrac1{<r>}=<s>$.',
                                 l1=p + q_, l2=p - q_, r=r, s=A.inv().trace()))))
        if (k // 3) % 2 == 0:
            qs.append(Q(T(r'Véc tơ nào sau đây là véc tơ riêng của $A$ ứng với trị riêng $\lambda = <l>$?', l=p + q_),
                        '$(1;1;0)$.', ['$(1;-1;0)$.', '$(0;0;1)$.', '$(1;1;1)$.'],
                        steps(T(r'$A\begin{pmatrix}1\\1\\0\end{pmatrix}=\begin{pmatrix}<p>+<q>\\<q>+<p>\\0\end{pmatrix}=\begin{pmatrix}<l>\\<l>\\0\end{pmatrix}$.',
                                p=p, q=q_, l=p + q_),
                              T(r'$\begin{pmatrix}<l>\\<l>\\0\end{pmatrix}=<l>\begin{pmatrix}1\\1\\0\end{pmatrix}$; vậy véc tơ riêng là $(1;1;0)$.',
                                l=p + q_))))
        else:
            qs.append(NQ('Gọi $X$ là tập hợp các trị riêng của $A$, tổng bình phương các phần tử của $X$ bằng',
                         sum(e * e for e in eig),
                         [(p + q_) ** 2 + (p - q_) ** 2 + 2 * r * r, sum(eig) ** 2, sum(eig)],
                         steps(T(r'Khối cấp 2 có trị riêng $<p>+<q>=<l1>$ và $<p>-<q>=<l2>$; phần tử cuối cho trị riêng $<r>$.',
                                 p=p, q=q_, l1=p + q_, l2=p - q_, r=r),
                               T(r'Tập không kể bội: $X=\{<l1>,<l2>,<r>\}$.',
                                 l1=p + q_, l2=p - q_, r=r),
                               T(r'$\sum_{\lambda\in X}\lambda^2=(<l1>)^2+(<l2>)^2+(<r>)^2=<sum>$.',
                                 l1=p + q_, l2=p - q_, r=r, sum=sum(e * e for e in eig)))))
        return {'stem': stem, 'questions': qs}
    u1, u2 = [rng.randint(-1, 3) for _ in range(3)], [rng.randint(-2, 3) for _ in range(3)]
    al, be = rint(rng, -2, 3, (0,)), rint(rng, -2, 2, (0,))
    u3 = [al * u1[i] + be * u2[i] for i in range(3)]
    m0 = u3[2]
    A = Matrix([u1, u2, u3[:2] + [m_]])
    d = sp.expand(A.det())
    if sp.diff(d, m_) == 0 or Matrix([u1[:2], u2[:2]]).det() == 0:
        raise Retry
    m1 = m0 + rng.choice([1, -1, 2])
    c = rng.choice([2, 3])
    stem = T(r'Trong không gian véc tơ $\mathbb{R}^3$, cho hệ véc tơ $S = \{u_1<a>;\ u_2<b>;\ u_3<c>\}$ với $m$ là tham số. Gọi $A$ là ma trận có các dòng theo thứ tự là các véc tơ trong $S$.', a=vec(u1), b=vec(u2), c=vec(u3[:2] + [m_]))
    fm = lambda v_: '$m = %s$' % tx(v_)
    d1 = d.subs(m_, m1)
    det_roots = sp.solve(d, m_)
    qs = [NQ('Hệ $S$ phụ thuộc tuyến tính khi và chỉ khi', m0, [m1, -m0, m0 + 3, 0],
             steps(T(r'$\det A=<det>=<factor>$.', det=d, factor=sp.factor(d)),
                   T(r'$\det A=0\Leftrightarrow<factor>=0\Leftrightarrow m=<m0>$.',
                     factor=sp.factor(d), m0=m0)), fmt=fm),
          NQ(T(r'Với $m = <m1>$, giá trị của $\det\left(<c>A^{-1}\right)$ bằng', m1=m1, c=c),
             R(c ** 3, d1), [R(c, d1), c ** 3 * d1, R(1, d1), -R(c ** 3, d1)],
             steps(T(r'$\det A|_{m=<m1>}=<d1>\ne0$, nên $A$ khả nghịch.', m1=m1, d1=d1),
                   T(r'$\det(<c>A^{-1})=<c>^3\det(A^{-1})=\dfrac{<c>^3}{\det A}=\dfrac{<c>^3}{<d1>}=<ans>$.',
                     c=c, d1=d1, ans=R(c ** 3, d1)))),
          NQ(T(r'Với $m = <m0>$, biết $u_3 = au_1 + bu_2$. Giá trị của $a\cdot b$ bằng', m0=m0),
             al * be, [al + be, -al * be, al - be, al * be + 1],
             steps(T(r'Tọa độ thứ nhất và hai của $u_3=au_1+bu_2$ cho hệ: $\begin{cases}<u11>a+<u21>b=<u31>\\<u12>a+<u22>b=<u32>\end{cases}$.',
                     u11=u1[0], u21=u2[0], u31=u3[0],
                     u12=u1[1], u22=u2[1], u32=u3[1]),
                   T(r'Định thức hệ số: $<u11>\cdot<u22>-<u21>\cdot<u12>=<minor>\ne0$.',
                     u11=u1[0], u22=u2[1], u21=u2[0], u12=u1[1],
                     minor=u1[0] * u2[1] - u2[0] * u1[1]),
                   T(r'Giải hệ được $a=<a>,\ b=<b>$. Kiểm tra tọa độ thứ ba: $<a>\cdot<u13>+<b>\cdot<u23>=<u33>$.',
                     a=al, b=be, u13=u1[2], u23=u2[2], u33=u3[2]),
                   T(r'$a\cdot b=<a>\cdot<b>=<ans>$.', a=al, b=be, ans=al * be)))]
    return {'stem': stem, 'questions': qs}


# ---------- Câu 46: định thức (trả lời ngắn) ----------
F46 = [
    (r'i^2 + j - \min\{i,j\}', lambda i, j: i * i + j - min(i, j)),
    (r'|i - j| + i', lambda i, j: abs(i - j) + i),
    (r'ij + \min\{i,j\}', lambda i, j: i * j + min(i, j)),
    (r'i + j^2 - \min\{i,j\}', lambda i, j: i + j * j - min(i, j)),
    (r'(i + j)^2', lambda i, j: (i + j) ** 2),
    (r'\max\{i,j\} + i\cdot j', lambda i, j: max(i, j) + i * j),
    (r'2^{i} + j - \max\{i,j\}', lambda i, j: 2 ** i + j - max(i, j)),
    (r'i^2 - j + \max\{i,j\}', lambda i, j: i * i - j + max(i, j)),
    (r'|i - 2j| + \min\{i,j\}', lambda i, j: abs(i - 2 * j) + min(i, j)),
    (r'i\cdot j - |i - j|', lambda i, j: i * j - abs(i - j)),
    (r'j^2 + i - \max\{i,j\}', lambda i, j: j * j + i - max(i, j)),
    (r'3\min\{i,j\} - |i - j|', lambda i, j: 3 * min(i, j) - abs(i - j)),
]


def s46(rng, k):
    name, fn = F46[(k + rng.randint(0, 2)) % len(F46)]
    A = Matrix(3, 3, lambda i, j: fn(i + 1, j + 1))
    d = A.det()
    if d == 0:
        raise Retry
    v = rng.randint(0, 2)
    c = rng.choice([2, 3])
    if v == 0:
        expr, ok, how = T(r'\det\left(<c>A^T\right)', c=c), c ** 3 * d, T(r'$<c>^3\cdot\det A$', c=c)
    elif v == 1:
        expr, ok, how = T(r'\det\left(<c>A^{-1}\right)', c=c), R(c ** 3, d), T(r'$\dfrac{<c>^3}{\det A}$', c=c)
    else:
        expr, ok, how = r'\det\left(\dfrac12A^TA\right)', R(d * d, 8), r'$\dfrac{(\det A)^2}{2^3}$'
    if sp.nsimplify(ok).q > 4 or abs(ok) > 2000:
        raise Retry
    q = T(r'Cho $A = (a_{ij})$ là ma trận vuông cấp 3 với $a_{ij} = <f>$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $<e>$.', f=name, e=expr)
    det_calculation = det3_expansion(A)
    if v == 0:
        explanation = steps(det_calculation,
                            T(r'$\det(<c>A^T)=<c>^3\det(A^T)=<c>^3\det A=<c>^3\cdot<d>=<ok>$.',
                              c=c, d=d, ok=ok))
    elif v == 1:
        explanation = steps(det_calculation,
                            T(r'$\det(<c>A^{-1})=<c>^3\det(A^{-1})=\dfrac{<c>^3}{\det A}=\dfrac{<c>^3}{<d>}=<ok>$.',
                              c=c, d=d, ok=ok))
    else:
        explanation = steps(det_calculation,
                            T(r'$\det\left(\dfrac12A^TA\right)=\dfrac{1}{2^3}\det(A^T)\det(A)=\dfrac{(\det A)^2}{8}=\dfrac{<d>^2}{8}=<ok>$.',
                              d=d, ok=ok))
    return SQ(q, short_num(ok), explanation)
