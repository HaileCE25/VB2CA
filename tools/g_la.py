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
        ex = steps(r'$v = au_1 + bu_2 + cu_3 \Leftrightarrow \begin{cases}' + r'\\ '.join(tx(sp.Eq(U[0, i] * a_ + U[1, i] * b_ + U[2, i] * c_, v[i])) for i in range(3)) + r'\end{cases}$',
                   T(r'Giải hệ bằng phép khử Gauss: $a = <a>,\ b = <b>,\ c = <c>$', a=coef[0], b=coef[1], c=coef[2]), T(r'$<e> = <ok>$', e=w[0] * a_ + w[1] * b_ + w[2] * c_, ok=ok))
        return NQ(q, ok, [sum(coef), sum(i * j for i, j in zip(coef, w[::-1])), ok + coef[0]], ex)
    al, be = rng.choice([(2, 3), (3, 4), (3, 2), (4, 3), (1, 2), (2, 1)])
    U = rmat(rng, 3, 3, -3, 4)
    xv = (U.row(2) - al * U.row(0) - be * U.row(1)) / (be - al)
    q = T(r'Trong không gian véc tơ $\mathbb{R}^3$, cho $u_1 = <u1>,\ u_2 = <u2>,\ u_3 = <u3>$. Gọi $x = (x_1;x_2;x_3)$ là véc tơ thỏa mãn $<al>(u_1 - x) + <be>(u_2 + x) = u_3$. Giá trị của $x_1 + x_2 + x_3$ bằng',
          u1=vec(U.row(0)), u2=vec(U.row(1)), u3=vec(U.row(2)), al=al, be=be)
    ex = steps(T(r'$<al>u_1 - <al>x + <be>u_2 + <be>x = u_3 \Leftrightarrow <d> = u_3 - <al>u_1 - <be>u_2$', al=al, be=be, d=(be - al) * symbols('x')),
               T(r'$u_3 - <al>u_1 - <be>u_2 = <w>$', al=al, be=be, w=vec(U.row(2) - al * U.row(0) - be * U.row(1))), T(r'$x = <x> \Rightarrow x_1 + x_2 + x_3 = <ok>$', x=vec(xv), ok=sum(xv)))
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
    names = r',\ '.join('u_%d%s' % (i + 1, vec(v)) for i, v in enumerate(vs))
    head = T(r'Trong không gian véc tơ $\mathbb{R}^<d>$, cho hệ véc tơ $S = \{<ns>\}$. ', d=d, ns=names)
    hint = ' (Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.)'
    if k % 3 == 0:
        ok = cnt(range(1, d + 1))
        q = head + 'Có bao nhiêu hệ con khác rỗng của $S$ độc lập tuyến tính?' + hint
        ex = T('Có <a> hệ một véc tơ và <b> hệ hai véc tơ độc lập tuyến tính.', a=cnt([1]), b=cnt([2]))
        cands = [2 ** nvec - 1, ok + 1, ok - 1, cnt([2])]
    else:
        ok = cnt([d])
        q = head + T(r'Có bao nhiêu hệ con gồm đúng <d> véc tơ của $S$ là cơ sở của $\mathbb{R}^<d>$?', d=d) + hint
        tot = len(list(combinations(vs, d)))
        ex = T(r'Có $C_<n>^<d> = <t>$ hệ con gồm <d> véc tơ, trong đó <b> hệ phụ thuộc tuyến tính.', n=nvec, d=d, t=tot, b=tot - ok)
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
    ex = '; '.join(notes) + T(r'; còn $<b>$ độc lập tuyến tính nên hạng bằng <r>.', b=', '.join('u_%d' % (i + 1) for i in range(r)), r=r)
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
    ex = steps(T(r'$\det <N> = <d>$', N=name, d=sp.factor(det)), T(r'$\det <N> = 0 \Leftrightarrow m \in \{<r>\}$', N=name, r=';'.join(str(r) for r in roots)),
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
        ex = T(r'$\left(<c>\right)^{<n>}\cdot(\det A)^{<p>}\cdot\dfrac{1}{\det B} = <ok>$.', c=c, n=nn, p=p, ok=ok)
        cands = [c * d ** p / e, c ** nn * d ** p * e, c ** nn * d * p / e, -ok]
    elif v == 1:
        ok = c ** nn * e ** 2 / d
        q = T(r'Cho $A$, $B$ là hai ma trận vuông cấp <n> có $\det A = <d>$ và $\det B = <e>$. Giá trị của $\det\left(<c>A^{-1}B^2\right)$ bằng', n=nn, d=d, e=e, c=c) + hint
        ex = T(r'$\left(<c>\right)^{<n>}\cdot\dfrac{1}{\det A}\cdot(\det B)^2 = <ok>$.', c=c, n=nn, ok=ok)
        cands = [c * e ** 2 / d, c ** nn * e ** 2 * d, c ** nn * 2 * e / d, -ok]
    elif v == 2:
        c = rng.choice([2, 3, -2])
        ok = c ** nn
        q = T(r'Cho $A$ là ma trận vuông cấp <n> khả nghịch thỏa mãn $A^2 = <c>A$. Định thức của ma trận $A$ bằng', n=nn, c=c)
        ex = T(r'Nhân hai vế với $A^{-1}$ được $A = <c>I$, nên $\det A = \left(<c>\right)^{<n>}$.', c=c, n=nn)
        cands = [c, c * nn, c ** 2, 0]
    else:
        ok = c ** nn * d ** 2 / e
        q = T(r'Cho $A$, $B$ là hai ma trận vuông cấp <n> có $\det A = <d>$ và $\det B = <e>$. Giá trị của $\det\left(<c>A^TB^{-1}A\right)$ bằng', n=nn, d=d, e=e, c=c) + hint
        ex = T(r'$\left(<c>\right)^{<n>}\cdot\det A\cdot\dfrac{1}{\det B}\cdot\det A = <ok>$.', c=c, n=nn, ok=ok)
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
        ex = T(r'Nhu cầu vật liệu $AX = <n>^T$; chi phí bằng tích vô hướng với véc tơ giá: $<ok>$.', n=vec(need), ok=ok)
        return NQ(q, ok, [sum(need), ok + c[0] * X[0], ok - need[2]], ex)
    if v == 1:
        Rm, Cm = rmat(rng, 3, 2, 1, 4), rmat(rng, 2, 3, 1, 4)
        O = Matrix([rng.choice([5, 10, 20]) for _ in range(3)])
        comp = Cm * O
        raw = Rm * comp
        q = T(r'Một xưởng dùng 3 loại nguyên liệu để làm 2 loại linh kiện, rồi dùng linh kiện để lắp 3 loại sản phẩm. Ma trận $R = <R>$ cho số đơn vị nguyên liệu loại $i$ cần cho 1 linh kiện loại $j$; ma trận $C = <C>$ cho số linh kiện loại $i$ cần cho 1 sản phẩm loại $j$. Xưởng nhận đơn hàng gồm $<o>$ sản phẩm các loại 1, 2, 3. Tổng số đơn vị nguyên liệu (cả ba loại) cần dùng cho đơn hàng bằng',
              R=pmat(Rm), C=pmat(Cm), o=', '.join(str(i) for i in O))
        ex = T(r'Số linh kiện: $C\cdot<o>^T = <c>^T$; nguyên liệu: $R\cdot<c>^T = <r>^T$, tổng bằng $<ok>$.', o=vec(O), c=vec(comp), r=vec(raw), ok=sum(raw))
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
        ex = T(r'Vật liệu cần dùng $AX = <n>^T$, chi phí $<c>$; doanh thu $<r>$; lợi nhuận $<ok>$.', n=vec(need), c=cst, r=rev, ok=rev - cst)
        return NQ(q, rev - cst, [rev, cst, rev - sum(need)], ex)
    if v == 3:
        A = Matrix([[R(rng.choice([1, 2, 3]), 10), R(rng.choice([2, 3, 4]), 10)], [R(rng.choice([2, 3, 4]), 10), R(rng.choice([1, 2]), 10)]])
        X = Matrix([rng.choice([100, 150, 200, 250, 300]), rng.choice([100, 200, 300, 400])])
        D = (I2 - A) * X
        if not all(d_.is_integer and d_ > 0 for d_ in D):
            raise Retry
        q = T(r'Một nền kinh tế gồm 2 ngành có ma trận hệ số chi phí trực tiếp (mô hình cân đối liên ngành Leontief) $A = <A>$, trong đó $a_{ij}$ là giá trị sản phẩm ngành $i$ mà ngành $j$ cần dùng để làm ra 1 đơn vị giá trị sản phẩm của mình. Yêu cầu về sản phẩm cuối cùng của hai ngành lần lượt là $<d1>$ và $<d2>$. Biết véc tơ tổng sản lượng $X$ thỏa mãn $(I - A)X = D$, tổng giá trị sản lượng $x_1 + x_2$ của hai ngành bằng',
              A=r'\begin{pmatrix}%s & %s \\ %s & %s\end{pmatrix}' % tuple(vn(a, 1).replace(',', '{,}') for a in A), d1=D[0], d2=D[1])
        ex = T(r'Giải hệ $(I - A)X = D$ được $x_1 = <a>,\ x_2 = <b>$.', a=X[0], b=X[1])
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
    ex = T(r'Sau 1 tháng: $<x1>$; sau 2 tháng: $<x2>$ (nghìn khách của X và Y).', x1=vec(x1), x2=vec(x2))
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
    ex = T(r'Ba tọa độ đầu của hàng 3 bằng $<al>$ lần hàng 1 cộng $<be>$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = <m0>$; ngược lại hạng bằng 3.', al=al, be=be, m0=m0)
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
    return Q(q, fm(X), [fm(w) for w in wrongs[:3]], sol + T('; kết quả $X = <X>$.', X=pmat(X)))


# ---------- Câu 25: hệ phương trình chứa tham số ----------
def s25(rng, k):
    if k % 4 == 3:
        a = rng.choice([3, 4, 5, -1, -2])
        A = Matrix([[1, 1, 1], [1, m_, a], [1, a, m_]])
        roots = sp.solve(A.det(), m_)
        q = T(r'Hệ phương trình thuần nhất $\begin{cases}x + y + z = 0\\ x + my <a>z = 0\\ x <a>y + mz = 0\end{cases}$ (với $x, y, z$ là ẩn) luôn có nghiệm tầm thường $(0;0;0)$. Tích tất cả các giá trị của $m$ để hệ có nghiệm không tầm thường bằng', a=('+ ' if a > 0 else '- ') + ('' if abs(a) == 1 else str(abs(a))))
        ex = T(r'Hệ thuần nhất có nghiệm không tầm thường khi định thức hệ số bằng 0: $<d> = 0 \Leftrightarrow m \in \{<r>\}$.', d=sp.factor(A.det()), r=';'.join(str(r) for r in roots))
        return NQ(q, roots[0] * roots[1], [roots[0] + roots[1], a, -roots[0] * roots[1], a * a], ex)
    p, qq, s, c = rng.randint(1, 3), rng.randint(-2, 2), rng.randint(1, 3), rng.choice([1, 2, 3])
    b1, b2 = rng.randint(1, 3), rng.randint(2, 6)
    co = qq + s - c * c
    e1 = sp.Eq(x + p * y + qq * z, b1)
    e2 = sp.Eq(2 * x + (2 * p + 1) * y + (2 * qq + s) * z, b2)
    lhs3 = tx(x + (p + 1) * y) + ' + ' + ('(m^2 %s %d)z' % ('+' if co >= 0 else '-', abs(co)) if co else 'm^2z')
    rhs3 = tx(m_ + (b2 - b1 - c))
    sysm = r'\begin{cases}%s\\ %s\\ %s = %s\end{cases}' % (tx(e1), tx(e2), lhs3, rhs3)
    ex = T(r'Khử Gauss ($h_2 - 2h_1$ và $h_3 - h_1$, rồi trừ hai phương trình mới cho nhau) được $(m^2 - <c2>)z = m - <c>$: với $m = <c>$ hệ có vô số nghiệm, với $m = -<c>$ hệ vô nghiệm, các trường hợp còn lại hệ có nghiệm duy nhất.', c2=c * c, c=c)
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
        ex = T(r'Giải hệ $s_i = d_i$ được giá cân bằng $<p>$, lượng cung (cầu) tương ứng $<q>$.', p=vec(ps), q=vec(qty))
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
        ex = T(r'Gọi $x, y, z$ là số sản phẩm mỗi loại; giải hệ ba phương trình được $<X>$.', X=vec(X))
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
        ex = T(r'Thế $T$ vào $C$ rồi vào phương trình đầu: $Y^* = <Y>,\ T^* = <T>,\ C^* = <C>$.', Y=Y, T=Tx, C=C)
        return NQ(q, ok, [v_ for v_ in (Y, C, Tx, c0 + I0 + G0) if v_ != ok], ex)
    pr = rng.choice([(50, 80, 120), (40, 60, 100), (30, 50, 90), (60, 90, 150)])
    xs = [rng.choice([80, 100, 120, 150]), rng.choice([40, 50, 60, 70]), rng.choice([10, 20, 30])]
    N, rev, dd = sum(xs), sum(a * b for a, b in zip(pr, xs)), xs[0] - xs[1] - xs[2]
    q = T(r'Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá <a> nghìn đồng, hạng trung giá <b> nghìn đồng và hạng VIP giá <c> nghìn đồng. Ban tổ chức bán được tổng cộng <N> vé, thu về <rev> nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là <dd> vé. Số vé hạng VIP đã bán bằng',
          a=pr[0], b=pr[1], c=pr[2], N=N, rev=rev, dd=dd)
    ex = T(r'Hệ: $x + y + z = <N>$; $<a>x + <b>y + <c>z = <rev>$; $x - y - z = <dd>$. Giải được $<X>$.', N=N, a=pr[0], b=pr[1], c=pr[2], rev=rev, dd=dd, X=vec(xs))
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
        qs = [NQ('Định thức của ma trận $A$ bằng', A.det(), [a ** 3, a + 3 * b, 0, a * a * (a + b)], note),
              NQ('Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng', sum(A.inv()), [R(3, a), R(1, a + 3 * b), 3 * (a + 3 * b)], T(r'Véc tơ $(1;1;1)$ là véc tơ riêng ứng với trị riêng $<l>$ nên tổng mỗi hàng của $A^{-1}$ bằng $\dfrac{1}{<l>}$; tổng tất cả bằng $<s>$.', l=a + 3 * b, s=sum(A.inv())))]
        if (k // 3) % 2 == 0:
            qs.append(NQ('Gọi $X$ là tập hợp các trị riêng của $A$, tổng bình phương các phần tử của $X$ bằng', a * a + (a + 3 * b) ** 2, [2 * a * a + (a + 3 * b) ** 2, (2 * a + 3 * b) ** 2, a * a + (a + 3 * b)], note + ' Tập hợp không kể bội.'))
        else:
            qs.append(NQ(T(r'Số chiều của không gian nghiệm của hệ $(A - <a>I)X = 0$ (không gian riêng ứng với trị riêng $\lambda = <a>$) bằng', a=a), 2, [1, 3, 0], T(r'$A - <a>I$ có hạng 1 nên số chiều bằng $3 - 1 = 2$.', a=a)))
        return {'stem': stem, 'questions': qs}
    if v == 1:
        p, q_ = rng.choice([(1, 2), (3, 1), (2, 1), (4, 1), (1, 3), (3, 2)])
        r = rng.choice([v_ for v_ in (p - q_, 2, 3, 5, -1) if v_ not in (0, p + q_)])
        A = Matrix([[p, q_, 0], [q_, p, 0], [0, 0, r]])
        stem = T(r'Cho ma trận $A = <A>$ và gọi $I$ là ma trận đơn vị cấp 3.', A=pmat(A))
        eig = sorted(set([p + q_, p - q_, r]))
        note = T(r'Các trị riêng của $A$ là $<a>$, $<b>$ và $<r>$.', a=p + q_, b=p - q_, r=r)
        qs = [NQ('Định thức của ma trận $A$ bằng', A.det(), [r * (p * p + q_ * q_), p * p * r, -A.det(), p * p - q_ * q_], T(r'$\det A = <r>\cdot(<p>^2 - <q>^2)$.', r=r, p=p, q=q_))]
        if (k // 3) % 2 == 0:
            rk = (A - r * I3).rank()
            qs.append(NQ(T(r'Hạng của ma trận $A - <r>I$ bằng', r='(%d)' % r if r < 0 else r), rk, [v_ for v_ in (1, 2, 3, 0) if v_ != rk], T(r'$A - <r>I = <B>$.', r='(%d)' % r if r < 0 else r, B=pmat(A - r * I3))))
        else:
            qs.append(NQ('Tổng các phần tử trên đường chéo chính của ma trận $A^{-1}$ bằng', A.inv().trace(), [R(1, p) * 2 + R(1, r), A.trace(), R(1, A.det())], T(r'$A^{-1}$ có các trị riêng là nghịch đảo các trị riêng của $A$; tổng bằng $<s>$.', s=A.inv().trace())))
        if (k // 3) % 2 == 0:
            qs.append(Q(T(r'Véc tơ nào sau đây là véc tơ riêng của $A$ ứng với trị riêng $\lambda = <l>$?', l=p + q_), '$(1;1;0)$.', ['$(1;-1;0)$.', '$(0;0;1)$.', '$(1;1;1)$.'], T(r'$A(1;1;0)^T = (<l>;<l>;0)^T$.', l=p + q_)))
        else:
            qs.append(NQ('Gọi $X$ là tập hợp các trị riêng của $A$, tổng bình phương các phần tử của $X$ bằng', sum(e * e for e in eig), [(p + q_) ** 2 + (p - q_) ** 2 + 2 * r * r, sum(eig) ** 2, sum(eig)], note + ' Tập hợp không kể bội.'))
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
    qs = [NQ('Hệ $S$ phụ thuộc tuyến tính khi và chỉ khi', m0, [m1, -m0, m0 + 3, 0], T(r'$\det A = <d>$.', d=sp.factor(d)), fmt=fm),
          NQ(T(r'Với $m = <m1>$, giá trị của $\det\left(<c>A^{-1}\right)$ bằng', m1=m1, c=c), R(c ** 3, d1), [R(c, d1), c ** 3 * d1, R(1, d1), -R(c ** 3, d1)], T(r'$\det A = <d1>$ nên $\det(<c>A^{-1}) = \dfrac{<c>^3}{<d1>}$.', d1=d1, c=c)),
          NQ(T(r'Với $m = <m0>$, biết $u_3 = au_1 + bu_2$. Giá trị của $a\cdot b$ bằng', m0=m0), al * be, [al + be, -al * be, al - be, al * be + 1], T(r'Từ hai tọa độ đầu giải được $a = <a>,\ b = <b>$ (tọa độ thứ ba cũng thỏa mãn).', a=al, b=be))]
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
    return SQ(q, short_num(ok), T(r'$A = <A>$, $\det A = <d>$; kết quả bằng ', A=pmat(A), d=d) + how + T(' $= <ok>$.', ok=ok))
