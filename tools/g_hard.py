# Các dạng bài mức khó hơn (dùng cho nửa sau của bộ đề sinh tự động), bám theo đề cương chi tiết:
# trực giao, không gian nghiệm, Cayley – Hamilton, ma trận nghịch đảo, chéo hóa, tiệm cận, Maclaurin,
# đạo hàm theo hướng, sai số, nhân tử Lagrange, Bernoulli, logistic, đổi thứ tự rồi tính, tọa độ cầu,
# tích phân suy rộng, độ dài cung, thể tích tròn xoay, công thức Green trên miền cong...
import math
from sympy import pi, E, exp, log, sin, cos, tan, sqrt, atan, oo, integrate, diff, limit, series, Symbol, simplify, sinh
from g_core import *
from g_la import rmat, unimod, I2, I3
from g_an import form, term, ex_, tr, ode2

a_, b_ = symbols('a b')
LAM = symbols('lambda')
th, rho, rr, ph = symbols('theta rho r varphi', positive=True)


def sgn(v):
    """' + 3' / ' - 3' (bỏ qua nếu bằng 0)"""
    return '' if v == 0 else (' + %s' % tx(v) if v > 0 else ' - %s' % tx(-v))


# ---------- Câu 1: trực giao và độ dài ----------
def h1(rng, k):
    a, b, c, d = rint(rng, -3, 4, (0,)), rint(rng, -3, 4, (0,)), rint(rng, -3, 4, (0,)), rint(rng, -3, 4, (0,))
    if a + c == 0 or (b * d) % (a + c):
        raise Retry
    m0 = -b * d // (a + c)
    ok = (a + m0) ** 2 + (m0 + c) ** 2 + (b + d) ** 2
    q = T(r'Trong không gian $\mathbb{R}^3$ với tích vô hướng thông thường $\langle u, v\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (<a>;m;<b>)$ và $v = (m;<c>;<d>)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng', a=a, b=b, c=c, d=d)
    ex = steps(T(r'$\langle u, v\rangle = (<a>)m + m(<c>) + (<b>)(<d>) = (<coef>)m + (<b>)(<d>) = 0$', a=a, c=c, b=b, d=d, coef=a + c),
               T(r'$(<coef>)m = -(<b>)(<d>) \Rightarrow m = \dfrac{- (<b>)(<d>)}{<coef>} = <m>$', coef=a + c, b=b, d=d, m=m0),
               T(r'$u + v = ((<a>) + (<m>);\ (<m>) + (<c>);\ (<b>) + (<d>)) = <s>$', a=a, b=b, c=c, d=d, m=m0, s=vec([a + m0, m0 + c, b + d])),
               T(r'$|u + v|^2 = (<p>)^2 + (<q>)^2 + (<r>)^2 = <p2> + <q2> + <r2> = <ok>$', p=a + m0, q=m0 + c, r=b + d, p2=(a + m0) ** 2, q2=(m0 + c) ** 2, r2=(b + d) ** 2, ok=ok))
    return NQ(q, ok, [(a - m0) ** 2 + (m0 - c) ** 2 + (b - d) ** 2, (a + c) ** 2 + (b + d) ** 2, ok + m0 * m0 + 1, a * a + b * b + c * c + d * d], ex)


# ---------- Câu 3: số chiều không gian nghiệm ----------
def h3(rng, k):
    r = rng.choice([2, 3])
    base = [[rng.randint(-2, 3) for _ in range(5)] for _ in range(r)]
    rows = list(base)
    while len(rows) < 4:
        i, j = rng.sample(range(r), 2)
        al, be = rint(rng, -2, 2, (0,)), rint(rng, -1, 2, (0,))
        rows.append([al * base[i][t_] + be * base[j][t_] for t_ in range(5)])
    rng.shuffle(rows)
    A = Matrix(rows)
    if A.rank() != r:
        raise Retry
    q = T(r'Cho ma trận $A = <A>$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng', A=pmat(A))
    return NQ(q, 5 - r, [r, 5 - r + 1, 5 - r - 1, 1, 5], steps(T(r'Khử Gauss cho dạng bậc thang: $A \to <E>$; có <r> hàng khác không nên hạng là <r>.', E=pmat(A.echelon_form()), r=r), T(r'Với $5$ ẩn và hạng <r>, số ẩn tự do (số chiều hạt nhân) $= 5 - <r> = <d>$.', r=r, d=5 - r)))


# ---------- Câu 4: Cayley – Hamilton ----------
def h4(rng, k):
    A = rmat(rng, 2, 2, -2, 3)
    t_, d = A.trace(), A.det()
    if d == 0 or t_ == 0 or A[0, 1] == 0 or A[1, 0] == 0:   # tránh ma trận chéo / tam giác (bài quá dễ)
        raise Retry
    e = rng.choice([3, 4])
    i, j = rng.randint(1, 2), rng.randint(1, 2)
    P = A ** e
    q = T(r'Cho ma trận $A = <A>$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = <t>A<s>I$. Phần tử thuộc hàng <i> và cột <j> của ma trận $A^{<e>}$ bằng', A=pmat(A), t='' if t_ == 1 else '-' if t_ == -1 else t_, s=sgn(-d), i=i, j=j, e=e)
    ex = steps(T(r'Với $\operatorname{tr}A=<t>$ và $\det A=<d>$, Cayley–Hamilton cho $A^2-(<t>)A+(<d>)I=0$, tức $A^2=<t>A-<d>I=<B>$', t=t_, d=d, B=pmat(A * A)),
               T(r'Nhân đẳng thức $A^2=<B>$ với $A$: $A^3=A^2A=<C>$; do đó phần tử $(<i>,<j>)$ của $A^3$ là <c>.', B=pmat(A * A), C=pmat(A ** 3), i=i, j=j, c=(A ** 3)[i - 1, j - 1]),
               T(r'$A^4=A^2A^2=<P>$; phần tử hàng <i>, cột <j> của $A^{<e>}$ bằng <ok>.', P=pmat(A ** 4), i=i, j=j, e=e, ok=P[i - 1, j - 1]) if e == 4 else
               T(r'Phần tử hàng <i>, cột <j> của $A^3$ là $<ok>$.', i=i, j=j, ok=P[i - 1, j - 1]))
    return NQ(q, P[i - 1, j - 1], [P[j - 1, i - 1], (A ** (e - 1))[i - 1, j - 1], A[i - 1, j - 1] ** e, -P[i - 1, j - 1]], ex)


# ---------- Câu 5: phần tử của ma trận nghịch đảo ----------
def h5(rng, k):
    A = rmat(rng, 3, 3, -2, 3)
    d = A.det()
    if d not in (1, -1, 2, -2):
        raise Retry
    i, j = rng.randint(1, 3), rng.randint(1, 3)
    if i == j:
        raise Retry
    inv = A.inv()
    ok = inv[i - 1, j - 1]
    q = T(r'Cho ma trận $A = <A>$. Biết $A^{-1} = \dfrac{1}{\det A}\left(A_{ji}\right)$, trong đó $A_{ji}$ là phần bù đại số của phần tử $a_{ji}$ (chú ý thứ tự chỉ số). Phần tử thuộc hàng <i> và cột <j> của ma trận $A^{-1}$ bằng', A=pmat(A), i=i, j=j)
    cof = A.cofactor(j - 1, i - 1)
    minor = A.minor_submatrix(j - 1, i - 1).det()
    ex = steps(T(r'$\det A = <d>$. To find entry $(<i>,<j>)$ of $A^{-1}$, use the cofactor with reversed indices $(<j>,<i>)$.', d=d, i=i, j=j),
               T(r'Remove row <j> and column <i>: $M_{<j><i>}=\det(<minor>)=<m>$, hence $A_{<j><i>}=(-1)^{<j>+<i>}(<m>)=<c>$.', j=j, i=i, minor=pmat(A.minor_submatrix(j - 1, i - 1)), m=minor, c=cof),
               T(r'$\left(A^{-1}\right)_{<i><j>}=\dfrac{A_{<j><i>}}{\det A}=\dfrac{<c>}{<d>}=<ok>$.', i=i, j=j, c=cof, d=d, ok=ok))
    return NQ(q, ok, [inv[j - 1, i - 1], -ok, ok * d, R(1, A[i - 1, j - 1]) if A[i - 1, j - 1] else ok + 1], ex)


# ---------- Câu 6: lí thuyết (mức khó hơn) ----------
H6 = [
    (r'Cho $A$, $B$ là hai ma trận vuông cấp $n \ge 2$ thỏa mãn $AB = 0$ và $A$ khả nghịch. Phát biểu nào sau đây là đúng?',
     r'$B$ là ma trận không.', r'$AB=0$. Nhân bên trái với $A^{-1}$: $A^{-1}(AB)=(A^{-1}A)B=IB=B$, còn $A^{-1}0=0$; vậy $B=0$.',
     [(r'$A$ là ma trận không.', r'$A$ khả nghịch nên $\det A \ne 0$, không thể là ma trận không.'),
      (r'$\det B \ne 0$.', r'$B = 0$ nên $\det B = 0$.'),
      (r'$BA \ne 0$.', r'$B = 0$ nên $BA = 0$.')]),
    (r'Cho $A$ là ma trận thực đối xứng cấp $n \ge 2$. Phát biểu nào sau đây là đúng?',
     r'Hai véc tơ riêng ứng với hai trị riêng khác nhau của $A$ thì trực giao với nhau.', r'$AX=\lambda X$, $AY=\mu Y$ và $A^T=A$: $\lambda\langle X,Y\rangle=\langle\lambda X,Y\rangle=\langle AX,Y\rangle=\langle X,A^TY\rangle=\langle X,AY\rangle=\mu\langle X,Y\rangle$. Suy ra $(\lambda-\mu)\langle X,Y\rangle=0$; vì $\lambda-\mu\ne0$, $\langle X,Y\rangle=0$.',
     [(r'Mọi trị riêng của $A$ đều dương.', r'$A = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$ đối xứng và có trị riêng $-1$.'),
      (r'$A$ luôn khả nghịch.', r'Ma trận không là ma trận đối xứng nhưng không khả nghịch.'),
      (r'$A$ luôn có $n$ trị riêng đôi một khác nhau.', r'Ma trận đơn vị đối xứng, chỉ có một trị riêng là 1 (bội $n$).')]),
    (r'Xét hệ phương trình tuyến tính $AX = B$ gồm $m$ phương trình, $n$ ẩn với $m < n$. Phát biểu nào sau đây là đúng?',
     r'Nếu hệ có nghiệm thì hệ có vô số nghiệm.', r'Có nghiệm $X_0$ thì mọi nghiệm có dạng $X=X_0+Z$, trong đó $AZ=0$. Vì $\operatorname{rank}A\le m<n$, định lý hạng–không gian nghiệm cho $\dim\ker A=n-\operatorname{rank}A\ge n-m>0$; chọn $Z\ne0$ cho vô số nghiệm $X_0+tZ$.',
     [(r'Hệ luôn có nghiệm.', r'Hệ $x + y + z = 1$, $x + y + z = 2$ vô nghiệm.'),
      (r'Hệ có thể có nghiệm duy nhất.', r'Nghiệm duy nhất đòi hỏi hạng bằng $n$, nhưng hạng không vượt quá $m < n$.'),
      (r'Hệ luôn vô nghiệm.', r'Hệ thuần nhất $AX = 0$ luôn có nghiệm $X = 0$.')]),
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$ thỏa mãn $A^2 = A$. Phát biểu nào sau đây là đúng?',
     r'$\det A = 0$ hoặc $\det A = 1$.', r'Lấy định thức hai vế $A^2=A$: $(\det A)^2=\det(A^2)=\det A$. Đặt $d=\det A$, ta có $d^2-d=d(d-1)=0$, nên $d=0$ hoặc $d=1$.',
     [(r'$\det A = 1$.', r'Ma trận không thỏa mãn $A^2 = A$ và có định thức bằng 0.'),
      (r'$A$ là ma trận đơn vị.', r'$A = \begin{pmatrix}1&0\\0&0\end{pmatrix}$ thỏa mãn $A^2 = A$ nhưng khác $I$.'),
      (r'$A$ khả nghịch.', r'$A = \begin{pmatrix}1&0\\0&0\end{pmatrix}$ thỏa mãn $A^2 = A$ và có $\det A = 0$.')]),
    (r'Cho $A$, $B$ là hai ma trận vuông khả nghịch cùng cấp $n \ge 2$. Phát biểu nào sau đây là đúng?',
     r'$AB$ khả nghịch và $(AB)^{-1} = B^{-1}A^{-1}$.', r'Kiểm tra cả hai phía: $(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AIA^{-1}=I$ và $(B^{-1}A^{-1})(AB)=B^{-1}(A^{-1}A)B=B^{-1}IB=I$.',
     [(r'$A + B$ khả nghịch.', r'$A = I$, $B = -I$ đều khả nghịch nhưng $A + B = 0$.'),
      (r'$(A + B)^{-1} = A^{-1} + B^{-1}$.', r'Với $A = B = I$: $(A + B)^{-1} = \dfrac12I$ còn $A^{-1} + B^{-1} = 2I$.'),
      (r'$(AB)^{-1} = A^{-1}B^{-1}$.', r'Phải đảo thứ tự: $A^{-1}B^{-1} = (BA)^{-1}$.')]),
    (r'Cho $A$, $B$ là hai ma trận sao cho tích $AB$ xác định, kí hiệu $r(M)$ là hạng của ma trận $M$. Phát biểu nào sau đây là đúng?',
     r'$r(AB) \le \min\{r(A), r(B)\}$.', r'Với mọi cột $v$ của $B$, cột tương ứng của $AB$ là $Av$, nên $\operatorname{Col}(AB)\subseteq\operatorname{Col}(A)$ và $r(AB)\le r(A)$. Tương tự, các hàng của $AB$ là tổ hợp các hàng của $B$, nên $r(AB)\le r(B)$. Do đó $r(AB)\le\min(r(A),r(B))$.',
     [(r'$r(AB) = r(A)\cdot r(B)$.', r'Với $A = B = I$ cấp 2: $r(AB) = 2$ còn $r(A)\cdot r(B) = 4$.'),
      (r'$r(AB) = r(A) + r(B)$.', r'Với $A = B = I$ cấp 2: $r(AB) = 2$ còn $r(A) + r(B) = 4$.'),
      (r'$r(AB) \ge \max\{r(A), r(B)\}$.', r'$A = \begin{pmatrix}1&0\\0&0\end{pmatrix}$, $B = \begin{pmatrix}0&0\\0&1\end{pmatrix}$ có $AB = 0$ nên $r(AB) = 0 < 1$.')]),
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$. Phát biểu nào sau đây về việc chéo hóa $A$ là đúng?',
     r'Nếu $A$ có $n$ trị riêng đôi một khác nhau thì $A$ chéo hóa được.', r'Chọn véc tơ riêng khác không $v_i$ sao cho $Av_i=\lambda_i v_i$ với $\lambda_i\ne\lambda_j$ khi $i\ne j$. Các véc tơ này độc lập tuyến tính; đặt $P=[v_1\ \cdots\ v_n]$ thì $\det P\ne0$ và $AP=P\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$, nên $P^{-1}AP=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$.',
     [(r'Mọi ma trận vuông đều chéo hóa được.', r'$A = \begin{pmatrix}1&1\\0&1\end{pmatrix}$ chỉ có một phương véc tơ riêng nên không chéo hóa được.'),
      (r'Nếu $A$ có trị riêng bội thì $A$ không chéo hóa được.', r'Ma trận đơn vị có trị riêng bội mà vốn đã là ma trận đường chéo.'),
      (r'Nếu $A$ khả nghịch thì $A$ chéo hóa được.', r'$A = \begin{pmatrix}1&1\\0&1\end{pmatrix}$ khả nghịch nhưng không chéo hóa được.')]),
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$. Phát biểu nào sau đây là đúng?',
     r'Nếu $A$ có hai hàng tỉ lệ với nhau thì $\det A = 0$.', r'Nếu $h_i=c\,h_j$, phép biến đổi $h_i\leftarrow h_i-c\,h_j$ tạo một hàng không. Định thức của ma trận có hàng không bằng $0$, vậy $\det A=0$.',
     [(r'$\det(-A) = -\det A$ với mọi $n$.', r'$\det(-A) = (-1)^n\det A$, bằng $\det A$ khi $n$ chẵn.'),
      (r'$\det(A^T) = -\det A$.', r'$\det(A^T) = \det A$.'),
      (r'Nếu $\det A = 0$ thì $A$ có một hàng bằng không.', r'$A = \begin{pmatrix}1&1\\1&1\end{pmatrix}$ có $\det A = 0$ mà không có hàng nào bằng không.')]),
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$ có các trị riêng $\lambda_1, \dots, \lambda_n$ (kể cả bội). Phát biểu nào sau đây là đúng?',
     r'$\det A = \lambda_1\lambda_2\cdots\lambda_n$.', r'Đa thức đặc trưng phân tích thành $\det(A-tI)=\prod_{i=1}^{n}(\lambda_i-t)$. Thay $t=0$: $\det A=\prod_{i=1}^{n}(\lambda_i-0)=\lambda_1\lambda_2\cdots\lambda_n$.',
     [(r'$\det A = \lambda_1 + \lambda_2 + \dots + \lambda_n$.', r'Tổng các trị riêng bằng vết của $A$, không phải định thức.'),
      (r'Vết của $A$ bằng $\lambda_1\lambda_2\cdots\lambda_n$.', r'Vết bằng tổng các trị riêng; tích các trị riêng là định thức.'),
      (r'$A$ khả nghịch khi và chỉ khi $A$ có một trị riêng bằng 0.', r'$A$ khả nghịch $\Leftrightarrow \det A \ne 0 \Leftrightarrow$ không có trị riêng nào bằng 0.')]),
    (r'Cho $A$ là ma trận cỡ $m\times n$ có hạng $r$. Phát biểu nào sau đây là đúng?',
     r'Tập nghiệm của hệ $AX = 0$ là không gian con của $\mathbb{R}^n$ có số chiều $n - r$.', r'Khử Gauss cho $r$ cột trụ trong $n$ ẩn, nên còn $n-r$ ẩn tự do. Mỗi ẩn tự do độc lập tạo một vectơ nghiệm cơ bản; vì vậy $\dim\ker A=n-r$.',
     [(r'Tập nghiệm của hệ $AX = 0$ là không gian con có số chiều $r$.', r'$r$ là số ẩn cơ sở; số chiều của không gian nghiệm là $n - r$.'),
      (r'Với $B \ne 0$, tập nghiệm của hệ $AX = B$ là không gian con của $\mathbb{R}^n$.', r'Tập đó không chứa véc tơ không, vì $A\cdot0 = 0 \ne B$.'),
      (r'Tập nghiệm của hệ $AX = 0$ luôn có số chiều $n$.', r'Chỉ đúng khi $r = 0$, tức $A$ là ma trận không.')]),
    # --- sáu câu dùng cho các đề từ số 25 trở đi ---
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$ thỏa mãn $A^2 = 0$. Phát biểu nào sau đây là đúng?',
     r'$I - A$ khả nghịch và $(I - A)^{-1} = I + A$.', r'Nhân trực tiếp: $(I-A)(I+A)=I+A-A-A^2=I-A^2=I$, và $(I+A)(I-A)=I-A^2=I$. Hai tích đều là $I$, vậy nghịch đảo của $I-A$ là $I+A$.',
     [(r'$A$ là ma trận không.', r'$A = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ khác ma trận không nhưng $A^2 = 0$.'),
      (r'$A$ khả nghịch.', r'$(\det A)^2 = \det(A^2) = 0$ nên $\det A = 0$.'),
      (r'$I + A$ không khả nghịch.', r'$(I + A)(I - A) = I$ nên $I + A$ khả nghịch.')]),
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$ và $\lambda$ là một trị riêng của $A$ với véc tơ riêng $X$. Phát biểu nào sau đây là đúng?',
     r'$\lambda^2$ là một trị riêng của $A^2$ với cùng véc tơ riêng $X$.', r'Từ $AX=\lambda X$, suy ra $A^2X=A(AX)=A(\lambda X)=\lambda AX=\lambda(\lambda X)=\lambda^2X$; $X\ne0$ vẫn là véc tơ riêng, với trị riêng $\lambda^2$.',
     [(r'$2X$ là véc tơ riêng của $A$ ứng với trị riêng $2\lambda$.', r'$A(2X) = 2\lambda X = \lambda(2X)$ nên $2X$ vẫn ứng với trị riêng $\lambda$.'),
      (r'$\lambda + 1$ là một trị riêng của $A$.', r'$(A + I)X = (\lambda + 1)X$ nên $\lambda + 1$ là trị riêng của $A + I$, không phải của $A$.'),
      (r'$X$ là véc tơ riêng của mọi ma trận vuông cấp $n$.', r'Véc tơ riêng phụ thuộc vào ma trận; chẳng hạn $(1;0)^T$ là véc tơ riêng của $\begin{pmatrix}1&0\\0&2\end{pmatrix}$ nhưng không là véc tơ riêng của $\begin{pmatrix}0&1\\1&0\end{pmatrix}$.')]),
    (r'Trong không gian véc tơ $\mathbb{R}^n$, cho hệ $S = \{u_1, u_2, \dots, u_k\}$ độc lập tuyến tính. Phát biểu nào sau đây là đúng?',
     r'Mọi hệ con khác rỗng của $S$ đều độc lập tuyến tính.', r'Giả sử một hệ con có $\sum_{i\in J}c_i u_i=0$. Gán $c_i=0$ cho mọi chỉ số không thuộc $J$; ta được hệ thức $\sum_{i=1}^k c_i u_i=0$ trong $S$. Vì $S$ độc lập nên mọi $c_i=0$, do đó hệ con cũng độc lập.',
     [(r'Thêm một véc tơ bất kỳ vào $S$ thì hệ mới vẫn độc lập tuyến tính.', r'Thêm chính véc tơ $u_1 + u_2$ (hoặc véc tơ không) thì hệ mới phụ thuộc tuyến tính.'),
      (r'$k = n$.', r'Chỉ có $k \le n$; chẳng hạn một véc tơ khác không trong $\mathbb{R}^3$ là hệ độc lập tuyến tính với $k = 1$.'),
      (r'Hệ $S$ là một cơ sở của $\mathbb{R}^n$.', r'Chỉ đúng khi $k = n$.')]),
    (r'Cho $A$ là ma trận vuông cấp $n \ge 2$ khả nghịch và $B$ là ma trận nhận được từ $A$ bằng cách nhân hàng thứ nhất với số $k \ne 0$. Phát biểu nào sau đây là đúng?',
     r'$\det B = k\det A$ và $B$ khả nghịch.', r'Khai triển định thức theo hàng thứ nhất, mỗi số hạng của hàng đó được nhân $k$, nên $\det B=k\det A$. Do $k\ne0$ và $\det A\ne0$, tích $k\det A\ne0$; vì vậy $B$ khả nghịch.',
     [(r'$\det B = k^n\det A$.', r'Hệ số $k^n$ chỉ xuất hiện khi nhân cả $n$ hàng với $k$, tức là xét $\det(kA)$.'),
      (r'$\det B = \det A$.', r'Chỉ phép cộng bội của hàng khác vào một hàng mới giữ nguyên định thức.'),
      (r'$B$ không khả nghịch.', r'$\det B = k\det A \ne 0$.')]),
    (r'Xét hệ phương trình tuyến tính $AX = B$ với $A$ là ma trận vuông cấp $n \ge 2$. Phát biểu nào sau đây là đúng?',
     r'Nếu $\det A \ne 0$ thì hệ có nghiệm duy nhất $X = A^{-1}B$.', r'$\det A\ne0$ cho $A^{-1}$ tồn tại. Nhân trái hai vế $AX=B$: $A^{-1}AX=A^{-1}B$, tức $IX=A^{-1}B$ nên $X=A^{-1}B$. Nếu $X_1,X_2$ đều nghiệm thì $A(X_1-X_2)=0$; nhân $A^{-1}$ suy ra $X_1-X_2=0$, nên nghiệm duy nhất.',
     [(r'Nếu $\det A = 0$ thì hệ vô nghiệm.', r'Với $A = 0$, $B = 0$ thì $\det A = 0$ mà mọi $X$ đều là nghiệm.'),
      (r'Nếu $\det A = 0$ thì hệ có vô số nghiệm.', r'Hệ $x + y = 1$, $x + y = 2$ có $\det A = 0$ nhưng vô nghiệm.'),
      (r'Nếu hệ có nghiệm thì $\det A \ne 0$.', r'Hệ $x + y = 1$, $2x + 2y = 2$ có nghiệm mà $\det A = 0$.')]),
    (r'Cho $A$, $B$ là hai ma trận vuông cùng cấp $n \ge 2$, kí hiệu $\operatorname{tr}(M)$ là vết (tổng các phần tử trên đường chéo chính) của $M$. Phát biểu nào sau đây là đúng?',
     r'$\operatorname{tr}(AB) = \operatorname{tr}(BA)$.', r'$\operatorname{tr}(AB)=\sum_i(AB)_{ii}=\sum_i\sum_j a_{ij}b_{ji}$. Đổi thứ tự tổng hữu hạn: $\sum_j\sum_i b_{ji}a_{ij}=\sum_j(BA)_{jj}=\operatorname{tr}(BA)$.',
     [(r'$\operatorname{tr}(AB) = \operatorname{tr}(A)\cdot\operatorname{tr}(B)$.', r'Với $A = B = I$ cấp 2: $\operatorname{tr}(AB) = 2$ còn $\operatorname{tr}(A)\cdot\operatorname{tr}(B) = 4$.'),
      (r'$\operatorname{tr}(A^2) = (\operatorname{tr}A)^2$.', r'Với $A = I$ cấp 2: $\operatorname{tr}(A^2) = 2$ còn $(\operatorname{tr}A)^2 = 4$.'),
      (r'Nếu $\operatorname{tr}(A) = 0$ thì $A$ không khả nghịch.', r'$A = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$ có vết bằng 0 nhưng $\det A = -1 \ne 0$.')]),
]


def h6(rng, k):
    return theory(*H6[k % 10 if k < 20 else 10 + (k - 20) % (len(H6) - 10)])


# ---------- Câu 7: định thức cấp 4 ----------
def h7(rng, k):
    if k % 2 == 0:
        a, b = rint(rng, -2, 4, (0,)), rint(rng, -2, 3, (0,))
        A = a * sp.eye(4) + b * sp.ones(4, 4)
        ok = A.det()
        q = T(r'Cho ma trận vuông cấp 4: $A = <A>$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng', A=pmat(A))
        ex = steps(T(r'$h_1 \to h_1+h_2+h_3+h_4$: mỗi phần tử hàng 1 bằng $a+4b=<s>$. Rút $<s>$ khỏi hàng này để hàng đầu thành $(1,1,1,1)$, đồng thời nhân định thức với thừa số $<s>$.', s=a + 4 * b),
                   T(r'Với hàng đầu $(1,1,1,1)$, thực hiện $h_i\to h_i-(<b>)h_1$ với $i=2,3,4$: các phần tử ngoài đường chéo thành $b-b=0$, còn mỗi phần tử đường chéo dưới bằng $(a+b)-b=a$. Đường chéo là $1,<a>,<a>,<a>$.', b=b, a=a),
                   T(r'$\det A = (<s>)\cdot(<a>)^3 = <ok>$', s=a + 4 * b, a=a, ok=ok))
        return NQ(q, ok, [a ** 4, (a + 4 * b) * a, (a + b) ** 4 - b ** 4, -ok, a ** 3 * (a + b)], ex)
    P, Qm, Rm = rmat(rng, 2, 2, -2, 4), rmat(rng, 2, 2, -3, 3), rmat(rng, 2, 2, -2, 4)
    A = sp.Matrix(sp.BlockMatrix([[P, Qm], [sp.zeros(2, 2), Rm]]))
    ok = A.det()
    if P.det() == 0 or Rm.det() == 0:
        raise Retry
    q = T(r'Cho ma trận vuông cấp 4: $A = <A>$. Nhận xét rằng $A$ có dạng khối tam giác $\begin{pmatrix}P & Q\\ 0 & R\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng', A=pmat(A))
    ex = steps(T(r'$P=<P>$, khử hàng được $\det P=<p>$; $R=<R>$, khử hàng được $\det R=<r>$.', P=pmat(P), R=pmat(Rm), p=P.det(), r=Rm.det()),
               T(r'Khai triển theo cấu trúc khối tam giác: $\det A=\det P\det R=(<p>)(<r>)=<ok>$.', p=P.det(), r=Rm.det(), ok=ok))
    return NQ(q, ok, [P.det() + Rm.det(), P.det() * Rm.det() - Qm.det(), -ok, P.det() * Qm.det()], ex)


# ---------- Câu 8: giới hạn cần khai triển bậc cao ----------
H8S = [
    [r'Đặt $u=<A>x$. Khi đó $\sin u=u-\dfrac{u^3}{6}+o(u^3)$ và $u\cos u=u-\dfrac{u^3}{2}+o(u^3)$.',
     r'$\sin u-u\cos u=(u-\dfrac{u^3}{6})-(u-\dfrac{u^3}{2})+o(u^3)=(\dfrac12-\dfrac16)u^3+o(u^3)=\dfrac{u^3}{3}+o(u^3)$.',
     r'$\dfrac{\sin(Ax)-Ax\cos(Ax)}{x^3}=\dfrac{A^3x^3/3+o(x^3)}{x^3}\to\dfrac{<a3>}{3}=<ok>$.'],
    [r'Đặt $u = <A>x$: $\arctan u = u - \dfrac{u^3}{3} + o(u^3)$',
     r'$u - \arctan u = \dfrac{u^3}{3} + o(u^3) = \dfrac{<a3>x^3}{3} + o(x^3)$',
     r'$\lim = \dfrac{<a3>}{3} = <ok>$'],
    [r'Đặt $u = <A>x$: $\tan u = u + \dfrac{u^3}{3} + o(u^3) \Rightarrow \tan u - u = \dfrac{<a3>x^3}{3} + o(x^3)$',
     r'$\sin x = x - \dfrac{x^3}{6} + o(x^3) \Rightarrow x - \sin x = \dfrac{x^3}{6} + o(x^3)$',
     r'$\lim = \dfrac{<a3>/3}{1/6} = <ok>$'],
    [r'Đặt $t = \dfrac{<a>}{x} \to 0$: $e^{t} - 1 = t + \dfrac{t^2}{2} + o(t^2)$',
     r'$x^2\left(e^{t} - 1\right) = x^2\left(\dfrac{<a>}{x} + \dfrac{<a2>}{2x^2} + o\left(\dfrac{1}{x^2}\right)\right) = <A>x + \dfrac{<a2>}{2} + o(1)$',
     r'$\lim = \dfrac{<a2>}{2} = <ok>$'],
    [r'$(1 + <A>x)^{\frac1x} = e^{\frac{\ln(1 + <A>x)}{x}}$ và $\dfrac{\ln(1 + <A>x)}{x} = <a> - \dfrac{<a2>x}{2} + o(x)$',
     r'$(1 + <A>x)^{\frac1x} = e^{<a>}\cdot e^{-\frac{<a2>x}{2} + o(x)} = e^{<a>}\left(1 - \dfrac{<a2>x}{2} + o(x)\right)$',
     r'$\lim = -\dfrac{<a2>}{2}e^{<a>} = <ok>$'],
    [r'$\cos u=1-\dfrac{u^2}{2}+o(u^2)$; với $w\to0$, $\ln(1+w)=w+o(w)$ nên $\ln(\cos u)=-\dfrac{u^2}{2}+o(u^2)$.',
     r'Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\dfrac{\ln(\cos Ax)}{\ln(\cos bx)}=\dfrac{-A^2x^2/2+o(x^2)}{-b^2x^2/2+o(x^2)}\to\dfrac{<a2>}{<b2>}=<ok>$.'],
    [r'Đặt $u=Ax$: $e^u-1=u+\dfrac{u^2}{2}+o(u^2)$ và $\sin u=u+o(u^2)$.',
     r'$(e^u-1)-\sin u=(u+\dfrac{u^2}{2}+o(u^2))-(u+o(u^2))=\dfrac{u^2}{2}+o(u^2)=\dfrac{A^2x^2}{2}+o(x^2)$.',
     r'Chia cả tử và mẫu cho $x^2$: $\lim=\dfrac{A^2/2+o(1)}{1}=\dfrac{<a2>}{2}=<ok>$.'],
    [r'Đặt $u=Ax$. Quy đồng: $\dfrac1{\sin^2u}-\dfrac1{u^2}=\dfrac{u^2-\sin^2u}{u^2\sin^2u}$.',
     r'$\sin^2u=(u-\dfrac{u^3}{6}+o(u^3))^2=u^2-\dfrac{u^4}{3}+o(u^4)$; do đó $u^2-\sin^2u=\dfrac{u^4}{3}+o(u^4)$ và $u^2\sin^2u=u^4+o(u^4)$.',
     r'$\lim_{u\to0}\dfrac{u^4/3+o(u^4)}{u^4+o(u^4)}=\dfrac13=<ok>$.'],
]


def h8(rng, k):
    v, a, b = k % 8, rng.choice([1, 2, 3]), rng.choice([2, 3])
    A = '' if a == 1 else str(a)
    L8 = [
        ((sin(a * x) - a * x * cos(a * x)) / x ** 3, 0, r'\lim\limits_{x\to 0}\dfrac{\sin %sx - %sx\cos %sx}{x^3}' % (A, A, A), [R(a ** 3, 6), R(a ** 3, 2), a ** 3]),
        ((a * x - atan(a * x)) / x ** 3, 0, r'\lim\limits_{x\to 0}\dfrac{%sx - \arctan %sx}{x^3}' % (A, A), [R(a ** 3, 6), a ** 3, -R(a ** 3, 3)]),
        ((tan(a * x) - a * x) / (x - sin(x)), 0, r'\lim\limits_{x\to 0}\dfrac{\tan %sx - %sx}{x - \sin x}' % (A, A), [a ** 3, 2 * a, R(a ** 3, 2)]),
        (x ** 2 * (exp(a / x) - 1) - a * x, oo, r'\lim\limits_{x\to +\infty}\left[x^2\left(e^{\frac{%d}{x}} - 1\right) - %sx\right]' % (a, A), [a * a, 0, R(a, 2)]),
        (((1 + a * x) ** (1 / x) - exp(a)) / x, 0, r'\lim\limits_{x\to 0}\dfrac{(1 + %sx)^{\frac1x} - %s}{x}' % (A, 'e^{%s}' % A if A else 'e'), [-exp(a) * R(a, 2), exp(a) * R(a * a, 2), -R(a * a, 2)]),
        (log(cos(a * x)) / log(cos(b * x)), 0, r'\lim\limits_{x\to 0}\dfrac{\ln(\cos %sx)}{\ln(\cos %dx)}' % (A, b), [R(a, b), 1, R(b * b, a * a) if a != b else 2]),
        ((exp(a * x) - 1 - sin(a * x)) / x ** 2, 0, r'\lim\limits_{x\to 0}\dfrac{e^{%sx} - 1 - \sin %sx}{x^2}' % (A, A), [a * a, R(a, 2), 0]),
        (1 / sin(a * x) ** 2 - 1 / (a * x) ** 2, 0, r'\lim\limits_{x\to 0}\left(\dfrac{1}{\sin^2 %sx} - \dfrac{1}{%sx^2}\right)' % (A, '' if a == 1 else str(a * a)), [0, R(1, 6), 1]),
    ]
    e, pt, s, cands = L8[v]
    ok = limit(e, x, pt)
    sol = steps(*[T(l, A='' if a == 1 else a, a=a, b=b, a2=a * a, a3=a ** 3, b2=b * b, ok=ok) for l in H8S[v]])
    return NQ('Giới hạn $' + s + r'$ bằng (gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần)', ok, cands + [-ok, 2 * ok], sol)


# ---------- Câu 9: đếm tiệm cận ----------
def h9(rng, k):
    r1, r2 = rng.sample([-3, -2, -1, 1, 2, 3], 2)
    v = k % 4
    den = sp.expand((x - r1) * (x - r2))
    if v == 0:
        s_ = rint(rng, -4, 4, (r1, r2))
        num, lines = sp.expand((x - r1) * (x - s_)), [T('tiệm cận đứng $x = <r>$', r=r2), 'tiệm cận ngang $y = 1$']
        note = T(r' (tại $x = <r>$ giới hạn hữu hạn nên không có tiệm cận)', r=r1)
    elif v == 1:
        s_, t_ = rint(rng, -4, 4, (r1, r2)), rint(rng, -4, 4, (r1, r2))
        num, lines = sp.expand((x - r1) * (x - s_) * (x - t_)), [T('tiệm cận đứng $x = <r>$', r=r2), 'một tiệm cận xiên']
        note = T(r' (tại $x = <r>$ giới hạn hữu hạn; bậc tử hơn bậc mẫu 1 đơn vị nên có tiệm cận xiên, không có tiệm cận ngang)', r=r1)
    elif v == 2:
        s_ = rint(rng, -4, 4, (r1, r2))
        num, lines = sp.expand(rng.choice([2, 3]) * (x - s_)), [T(r'hai tiệm cận đứng $x = <a>,\ x = <b>$', a=r1, b=r2), 'tiệm cận ngang $y = 0$']
        note = ''
    else:
        c = rng.choice([1, 2, 3, 4])
        q = T(r'Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \dfrac{\sqrt{x^2 + <c>}}{<d>}$ là', c=c, d=x - r1)
        ex = T(r'Khi $x\to<r>$, tử số $\sqrt{x^2+c}\to\sqrt{r^2+c}>0$ còn $x-r\to0$, nên $x=<r>$ là tiệm cận đứng. Khi $x\to+\infty$, $\dfrac{\sqrt{x^2+c}}{x-r}=\dfrac{\sqrt{1+c/x^2}}{1-r/x}\to1$; khi $x\to-\infty$, viết $|x|=-x$ được $\dfrac{\sqrt{x^2+c}}{x-r}=\dfrac{-\sqrt{1+c/x^2}}{1-r/x}\to-1$. Vậy có hai tiệm cận ngang $y=1$ và $y=-1$; tổng cộng $3$.', r=r1, c=c)
        return NQ(q, 3, [1, 2, 4, 0], ex)
    count = sum(2 if 'hai' in l else 1 for l in lines)
    q = T(r'Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \dfrac{<n>}{<d>}$ là', n=num, d=den)
    reduced = sp.cancel(num / den)
    num_r, den_r = sp.fraction(reduced)
    quotient, remainder = sp.div(num_r, den_r, x)
    ex = steps(T(r'Phân tích rồi khử nhân tử chung: $y=\dfrac{<num>}{<den>}=\dfrac{<nr>}{<dr>}$.', num=sp.factor(num), den=sp.factor(den), nr=sp.factor(num_r), dr=sp.factor(den_r)),
               T(r'Kiểm tra điểm làm mẫu bằng $0$: <a>; <b>.', a=(r'Tại $x=<r1>$, tử cũng bằng $0$ nên nhân tử $(x-<r1>)$ bị khử; giới hạn hữu hạn, không là TCĐ.' if sp.simplify(num.subs(x, r1)) == 0 else r'Tại $x=<r1>$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=<r1>$.'),
                 b=(r'Tại $x=<r2>$, tử cũng bằng $0$ nên nhân tử $(x-<r2>)$ bị khử; giới hạn hữu hạn, không là TCĐ.' if sp.simplify(num.subs(x, r2)) == 0 else r'Tại $x=<r2>$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=<r2>$.'),
                 r1=r1, r2=r2),
               T(r'Chia đa thức: $\dfrac{<n>}{<d>}=<q>+\dfrac{<rem>}{<d>}$. <end>', n=num_r, d=den_r, q=quotient, rem=remainder,
                 end=('Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.' if sp.degree(num_r, x) <= sp.degree(den_r, x) else 'Vì thương có bậc 1, đường thẳng $y=<q>$ là tiệm cận xiên.')),
               T('Số đường tiệm cận: <c>.', c=count))
    return NQ(q, count, [v_ for v_ in (1, 2, 3, 4, 0) if v_ != count], ex)


# ---------- Câu 10: hệ số khai triển Maclaurin ----------
def h10(rng, k):
    a, b = rng.choice([1, 2, 3]), rng.choice([1, 2])
    P10 = [
        (exp(a * x) * cos(b * x), r'e^{%sx}\cos %sx' % ('' if a == 1 else a, '' if b == 1 else b), 3),
        (1 / ((1 - x) * (1 - (a + 1) * x)), r'\dfrac{1}{(1 - x)(1 - %dx)}' % (a + 1), 4),
        (exp(a * x) / (1 - x), r'\dfrac{e^{%sx}}{1 - x}' % ('' if a == 1 else a), 3),
        (log(1 + a * x) * exp(x), r'e^{x}\ln(1 + %sx)' % ('' if a == 1 else a), 3),
        (sin(a * x) * cos(x), r'\sin %sx\cos x' % ('' if a == 1 else a), 3),
        (x / (1 - a * x - (a + 1) * x ** 2), r'\dfrac{x}{%s}' % tx(1 - a * x - (a + 1) * x ** 2), 4),
        (sqrt(1 + a * x) * (1 + x), r'(1 + x)\sqrt{1 + %sx}' % ('' if a == 1 else a), 3),
        (log((1 + a * x) / (1 - x)), r'\ln\dfrac{1 + %sx}{1 - x}' % ('' if a == 1 else a), 3),
        (exp(-a * x ** 2) * sin(x), r'e^{-%sx^2}\sin x' % ('' if a == 1 else a), 5),
        (cos(a * x) / (1 + x), r'\dfrac{\cos %sx}{1 + x}' % ('' if a == 1 else a), 3),
    ]
    f, s, nn = P10[(k + rng.randint(0, 3)) % len(P10)]
    ser = series(f, x, 0, nn + 1).removeO()
    ok = ser.coeff(x, nn)
    q = T(r'Hệ số của $x^{<n>}$ trong khai triển Maclaurin của hàm số $f(x) = <s>$ bằng (gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc)', n=nn, s=s)
    def asc(g):
        sg = ser if g is f else series(g, x, 0, nn + 1).removeO()
        return form(*[(sg.coeff(x, i), '' if i == 0 else 'x' if i == 1 else 'x^{%d}' % i) for i in range(nn + 1)])
    parts = [g for g in f.as_ordered_factors() if g.has(x)] if f.is_Mul else []
    ex = steps(*[T(r'$<g> = <s> + o(x^{<n>})$', g=tx(g), s=asc(g), n=nn) for g in parts if g != x],
               T(r'Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng <n>: $f(x)=<s>+o(x^{<n>})$.', s=asc(f), n=nn),
               T(r'Đọc hệ số của $x^{<n>}$ từ tổng các tích cùng bậc vừa thu được: $<ok>$.', n=nn, ok=ok))
    return NQ(q, ok, [ser.coeff(x, nn - 1), ok * sp.factorial(nn), -ok, ok + R(1, 2), ok * 2], ex)


# ---------- Câu 11: đạo hàm theo hướng ----------
def h11(rng, k):
    if k % 2 == 0:
        f = rng.choice([x ** 2 * y + y ** 3, x ** 2 + 2 * x * y - y ** 2, x ** 3 - 3 * x * y + y ** 2, x * y ** 2 + x ** 2, x ** 2 * y ** 2 - x])
        p0 = {x: rng.choice([1, 2, -1]), y: rng.choice([1, 2, -1])}
        v_ = rng.choice([(3, 4), (4, 3), (-3, 4), (4, -3), (5, 12), (12, 5)])
        g = [diff(f, s).subs(p0) for s in (x, y)]
        ln = sp.sqrt(sum(i * i for i in v_))
        ok = R(g[0] * v_[0] + g[1] * v_[1], ln)
        q = T(r'Cho hàm số $f(x,y) = <f>$. Đạo hàm của $f$ tại điểm $M(<a>;<b>)$ theo hướng của véc tơ $\vec l = (<p>;<q>)$, tính bởi $\dfrac{\partial f}{\partial \vec l} = \nabla f(M)\cdot\dfrac{\vec l}{|\vec l|}$, bằng', f=f, a=p0[x], b=p0[y], p=v_[0], q=v_[1])
        ex = steps(T(r"$f'_x = <fx>,\quad f'_y = <fy>$", fx=diff(f, x), fy=diff(f, y)), T(r'$\nabla f(M) = (<g1>;<g2>)$', g1=g[0], g2=g[1]),
                   T(r'$|\vec l| = \sqrt{(<p>)^2 + (<q>)^2} = <l>$', p=v_[0], q=v_[1], l=ln),
                   T(r'$\dfrac{\partial f}{\partial \vec l}=\dfrac{(<g1>)(<p>)+(<g2>)(<q>)}{<l>}=\dfrac{<t1>+<t2>}{<l>}=\dfrac{<n>}{<l>}=<ok>$.', g1=g[0], p=v_[0], g2=g[1], q=v_[1], t1=g[0] * v_[0], t2=g[1] * v_[1], n=g[0] * v_[0] + g[1] * v_[1], l=ln, ok=ok))
        return NQ(q, ok, [g[0] * v_[0] + g[1] * v_[1], R(g[0] * v_[1] + g[1] * v_[0], ln), g[0] + g[1], -ok], ex)
    f = rng.choice([x * y * z + z ** 2, x ** 2 + y * z, x * y + y * z + z * x, x ** 2 * y - y * z ** 2])
    p0 = {x: rng.choice([1, 2]), y: rng.choice([1, -1, 2]), z: rng.choice([1, 2])}
    v_ = rng.choice([(1, 2, 2), (2, 1, 2), (2, 2, 1), (2, -1, 2), (2, 3, 6), (1, -2, 2)])
    g = [diff(f, s).subs(p0) for s in (x, y, z)]
    ln = sp.sqrt(sum(i * i for i in v_))
    ok = R(sum(i * j for i, j in zip(g, v_)), ln)
    q = T(r'Cho hàm số $f(x,y,z) = <f>$. Đạo hàm của $f$ tại điểm $M(<a>;<b>;<c>)$ theo hướng của véc tơ $\vec l = (<p>;<q>;<r>)$, tính bởi $\dfrac{\partial f}{\partial \vec l} = \nabla f(M)\cdot\dfrac{\vec l}{|\vec l|}$, bằng', f=f, a=p0[x], b=p0[y], c=p0[z], p=v_[0], q=v_[1], r=v_[2])
    ex = steps(T(r"$f'_x = <fx>,\quad f'_y = <fy>,\quad f'_z = <fz>$", fx=diff(f, x), fy=diff(f, y), fz=diff(f, z)), T(r'$\nabla f(M) = <g>$', g=vec(g)),
               T(r'$|\vec l| = \sqrt{<s>} = <l>$', s=sum(i * i for i in v_), l=ln),
               T(r'$\dfrac{\partial f}{\partial \vec l}=\dfrac{(<g1>)(<v1>)+(<g2>)(<v2>)+(<g3>)(<v3>)}{<l>}=\dfrac{<t1>+<t2>+<t3>}{<l>}=\dfrac{<n>}{<l>}=<ok>$.', g1=g[0], g2=g[1], g3=g[2], v1=v_[0], v2=v_[1], v3=v_[2], t1=g[0] * v_[0], t2=g[1] * v_[1], t3=g[2] * v_[2], n=sum(i * j for i, j in zip(g, v_)), l=ln, ok=ok))
    return NQ(q, ok, [sum(i * j for i, j in zip(g, v_)), sum(g), -ok, R(sum(g), ln)], ex)


# ---------- Câu 12: sai số tương đối bằng vi phân ----------
P12 = [
    ('thể tích $V = \\pi r^2h$ của một bồn chứa hình trụ', 'bán kính đáy $r$', 'chiều cao $h$', 2, 1, 'V'),
    ('thể tích $V = \\dfrac13\\pi r^2h$ của một khối nón', 'bán kính đáy $r$', 'chiều cao $h$', 2, 1, 'V'),
    ('động năng $W = \\dfrac12mv^2$ của một vật', 'khối lượng $m$', 'vận tốc $v$', 1, 2, 'W'),
    ('công suất $P = \\dfrac{U^2}{R}$ của một điện trở', 'hiệu điện thế $U$', 'điện trở $R$', 2, 1, 'P'),
    ('chu kỳ $T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ của con lắc đơn', 'chiều dài $l$', 'gia tốc trọng trường $g$', R(1, 2), R(1, 2), 'T'),
    ('diện tích $S = \\dfrac12ab\\sin C$ của một mảnh đất hình tam giác (góc $C$ đo chính xác)', 'cạnh $a$', 'cạnh $b$', 1, 1, 'S'),
    ('lực hấp dẫn $F = G\\dfrac{m_1m_2}{d^2}$ giữa hai vật (các khối lượng đo chính xác, $G$ là hằng số)', 'khoảng cách $d$', 'hằng số tỉ lệ dùng để hiệu chỉnh thiết bị (coi như một thừa số bậc nhất)', 2, 1, 'F'),
    ('thể tích $V = \\dfrac43\\pi r^3$ của một quả cầu, sau đó nhân với khối lượng riêng $\\rho$ để được khối lượng $m = \\rho V$', 'bán kính $r$', 'khối lượng riêng $\\rho$', 3, 1, 'm'),
]


def h12(rng, k):
    what, n1, n2, e1, e2, sym = P12[(k + rng.randint(0, 2)) % len(P12)]
    p, qq = rng.choice([R(1, 2), 1, 2, 3]), rng.choice([R(1, 2), 1, 2])
    ok = e1 * p + e2 * qq
    f = lambda v_: vn(v_, 2).rstrip('0').rstrip(',') + '%'
    q = T(r'Người ta tính <what> từ hai đại lượng đo được. Biết <n1> được đo với sai số tương đối không quá <p> và <n2> với sai số tương đối không quá <q>. Dùng vi phân toàn phần của $\ln <s>$, sai số tương đối lớn nhất của $<s>$ xấp xỉ bằng', what=what, n1=n1, n2=n2, p=f(p), q=f(qq), s=sym)
    pc = lambda v_: f(v_).replace('%', r'\%').replace(',', '{,}')
    signs = {'V': ('+', '+'), 'W': ('+', '+'), 'P': ('+', '-'), 'T': ('+', '-'),
             'S': ('+', '+'), 'F': ('-', '+'), 'm': ('+', '+')}
    s1, s2 = signs[sym]
    ex = steps(T(r'Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\ln <s>=C<sg1><e1>\ln u<sg2><e2>\ln v$ (hằng số $C$ không đổi).', s=sym, sg1=s1, e1=e1, sg2=s2, e2=e2),
               T(r'Vi phân: $\dfrac{d<s>}{<s>}=<sg1><e1>\dfrac{du}{u}<sg2><e2>\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\dfrac{|\Delta<s>|}{|<s>|}\le <e1>\dfrac{|\Delta u|}{u}+<e2>\dfrac{|\Delta v|}{v}$.', s=sym, sg1=s1, e1=e1, sg2=s2, e2=e2),
               T(r'$= <e1>\cdot<p> + <e2>\cdot<q> = <ok>$.', e1=e1, p=pc(p), e2=e2, q=pc(qq), ok=pc(ok)))
    return NQ(q, ok, [p + qq, abs(e1 * p - e2 * qq), e1 * p * e2 * qq, max(p, qq), ok * 2], ex, fmt=f)


# ---------- Câu 13: cực trị có điều kiện ----------
def h13(rng, k):
    v = k % 3
    hint = ' (có thể dùng phương pháp nhân tử Lagrange)'
    if v == 0:
        (a, b, h), r = rng.choice([(3, 4, 5), (4, 3, 5), (5, 12, 13), (6, 8, 10), (8, 15, 17), (12, 5, 13)]), rng.choice([1, 2, 3])
        q = T(r'Giá trị lớn nhất của hàm số $f(x,y) = <f>$ với điều kiện $x^2 + y^2 = <r2>$ bằng', f=a * x + b * y, r2=r * r) + hint
        return NQ(q, r * h, [h, r * (a + b), r * r * h, -r * h], steps(T(r'$L=<a>x+<b>y-\lambda(x^2+y^2-<r2>)$. Điều kiện dừng: $<a>-2\lambda x=0,\ <b>-2\lambda y=0$, nên $x=\dfrac{<a>}{2\lambda}$, $y=\dfrac{<b>}{2\lambda}$.', f=a * x + b * y, r2=r * r, a=a, b=b),
                  T(r'Ràng buộc cho $\dfrac{<s>}{4\lambda^2}=<r2>$, tức $\lambda^2=\dfrac{<s>}{4r^2}=\dfrac{h^2}{4r^2}$; hai dấu cho hai điểm đối nhau, dấu dương cho cực đại.', s=a * a + b * b, h=h, r=r, r2=r * r),
                  T(r'Với $\lambda=\dfrac{h}{2r}$: $(x,y)=(\dfrac{<a>r}{h},\dfrac{<b>r}{h})$. Khi đó $f_{\max}=\dfrac{<a2>r}{h}+\dfrac{<b2>r}{h}=\dfrac{(<a2>+<b2>)r}{h}=rh=<ok>$.', a=a, b=b, a2=a * a, b2=b * b, r=r, h=h, ok=r * h)))
    if v == 1:
        a, b = rng.choice([(1, 2), (2, 1), (3, 4), (1, 3), (2, 3), (1, 1)])
        c = (a * a + b * b) * rng.choice([1, 2, 3])
        ok = R(c * c, a * a + b * b)
        q = T(r'Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $<e> = <c>$ bằng', e=a * x + b * y, c=c) + hint
        return NQ(q, ok, [c, ok * 2, R(c, a * a + b * b), c * c], steps(T(r'$L=x^2+y^2-\lambda(<a>x+<b>y-<c>)$. Từ $L_x=2x-<a>\lambda=0$ và $L_y=2y-<b>\lambda=0$, ta có $x=\dfrac{<a>\lambda}{2}$, $y=\dfrac{<b>\lambda}{2}$.', a=a, b=b, c=c),
                  T(r'Thay vào ràng buộc: $\dfrac{<a2>\lambda}{2}+\dfrac{<b2>\lambda}{2}=\dfrac{(<a2>+<b2>)\lambda}{2}=<c>$, nên $\lambda=\dfrac{2<c>}{<s>}$.', a2=a * a, b2=b * b, c=c, s=a * a + b * b),
                  T(r'$(x,y)=(\dfrac{<a><c>}{<s>},\dfrac{<b><c>}{<s>})$. Khi đó $x^2+y^2=\dfrac{<a2><c2>+<b2><c2>}{<s2>}=\dfrac{<c2>(<a2>+<b2>)}{<s2>}=\dfrac{<c2>}{<s>}=<ok>$.', a=a, b=b, a2=a * a, b2=b * b, c=c, c2=c * c, s=a * a + b * b, s2=(a * a + b * b) ** 2, ok=ok)))
    a, b = rng.choice([(1, 2), (2, 1), (1, 3), (3, 1), (2, 3), (1, 1), (1, 4)])
    c = 2 * a * b * rng.choice([1, 2, 3])
    ok = R(c * c, 4 * a * b)
    q = T(r'Một mảnh vườn hình chữ nhật có hai kích thước $x > 0,\ y > 0$ (mét) thỏa mãn ràng buộc về vật liệu rào $<e> = <c>$. Diện tích $S = xy$ lớn nhất của mảnh vườn bằng', e=a * x + b * y, c=c) + hint
    return NQ(q, ok, [ok * 2, R(c * c, a * b), R(c * c, 4), R(c, 2)], steps(T(r'$L=xy-\lambda(<a>x+<b>y-<c>)$. $L_x=y-<a>\lambda=0$ và $L_y=x-<b>\lambda=0$, vì thế $y=<a>\lambda$, $x=<b>\lambda$.', a=a, b=b, c=c),
                  T(r'Thay vào ràng buộc: $<ab>\lambda+<ab>\lambda=2(<a>)(<b>)\lambda=<c>$, nên $\lambda=\dfrac{<c>}{2(<a>)(<b>)}$.', a=a, b=b, ab=a * b, c=c),
                  T(r'$x=\dfrac{<c>}{2<a>}$, $y=\dfrac{<c>}{2<b>}$. Vậy $S_{\max}=xy=\dfrac{<c>}{2<a>}\cdot\dfrac{<c>}{2<b>}=\dfrac{<c2>}{4<a><b>}=<ok>$.', c=c, c2=c * c, a=a, b=b, ok=ok)))


# ---------- Câu 17: phương trình Bernoulli ----------
def h17(rng, k):
    a, j = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, 4] if k < 20 else [5, 6, 7])
    C = 2 * a + j
    sol = 1 / (x * (C - a * x))
    assert simplify(diff(sol, x) + sol / x - a * x * sol ** 2) == 0
    x1 = 2
    q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y\' + \dfrac{y}{x} = <a>xy^2$ $(x > 0)$ thỏa mãn $y(1) = <y1>$. Bằng phép đặt $z = \dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng', a='' if a == 1 else a, y1=R(1, a + j))
    ex = steps(T(r'Đặt $z=1/y$, do đó $y^\prime=-z^\prime/z^2$. Thay vào $y^\prime+y/x=<a>xy^2$ rồi nhân với $-1$: $z^\prime-z/x=-<a>x$.', a=a),
               T(r'Chia cho $x$: $(z/x)^\prime=(xz^\prime-z)/x^2=-<a>$. Tích phân hai vế: $z/x=-<a>x+C$, tức $z=x(C-<a>x)$.', a=a),
               T(r'$y(1)=1/z(1)=1/(C-<a>)=<y1>$ nên $C-<a>=1/<y1>=<den>$ và $C=<C>$.', a=a, y1=R(1, a + j), den=a + j, C=C),
               T(r'$z(2)=2(C-2<a>)=2(<C>-<b>)=<z2>$; vậy $y(2)=1/z(2)=<ok>$.', a=a, C=C, b=2 * a, z2=2 * (C - 2 * a), ok=sol.subs(x, 2)))
    return NQ(q, sol.subs(x, x1), [R(1, 2 * (C - a)), R(1, C - 2 * a), 2 * j, R(1, 2 * C)], ex)


# ---------- Câu 18: mô hình logistic ----------
def h18(rng, k):
    A, m = rng.choice([(4, 2), (8, 3), (8, 2), (8, 1), (4, 1), (2, 1), (16, 4), (16, 3), (16, 2)])
    h = rng.choice([2, 3, 4, 5])
    M = rng.choice([v_ for v_ in (900, 1200, 1500, 1800, 3000, 4500) if v_ % (A + 1) == 0 and (v_ * 2 ** m) % (2 ** m + A) == 0] or [0])
    if not M:
        raise Retry
    P0 = M // (A + 1)
    ok = R(M * 2 ** m, 2 ** m + A)
    ctx = rng.choice([
        ('Một tin đồn lan truyền trong một khu dân cư có <M> người. Số người đã biết tin $P(t)$ sau $t$ ngày', 'Số người biết tin sau <t> ngày bằng'),
        ('Một hồ nuôi có sức chứa tối đa <M> con cá. Số cá $P(t)$ trong hồ sau $t$ tháng', 'Số cá trong hồ sau <t> tháng bằng'),
        ('Một ứng dụng mới được giới thiệu cho <M> học viên của một trường. Số người đã cài đặt $P(t)$ sau $t$ tuần', 'Số người đã cài đặt sau <t> tuần bằng'),
    ])
    q = T(ctx[0] + r' thỏa mãn phương trình logistic $P\' = kP\left(1 - \dfrac{P}{<M>}\right)$ với $k = \dfrac{\ln 2}{<h>}$ và $P(0) = <P0>$. Biết nghiệm có dạng $P(t) = \dfrac{<M>}{1 + Ae^{-kt}}$. ' + ctx[1], M=M, h=h, P0=P0, t=m * h)
    ex = steps(T(r'$P(0)=\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\dfrac{M}{P_0}-1=<A>$.', M=M, P0=P0, A=A),
               T(r'$kt=\dfrac{\ln2}{<h>}(<t>)=<m>\ln2$, vì thế $e^{-kt}=e^{-<m>\ln2}=2^{-<m>}=\dfrac1{<p>}$.', h=h, t=m * h, m=m, p=2 ** m),
               T(r'$P(<t>)=\dfrac{<M>}{1+\frac{<A>}{<p>}}=\dfrac{<M>\cdot<p>}{<p>+<A>}=\dfrac{<num>}{<den>}=<ok>$.', t=m * h, M=M, A=A, p=2 ** m, num=M * 2 ** m, den=2 ** m + A, ok=ok))
    return NQ(q, ok, [P0 * 2 ** m, R(M, 2), R(M * 2 ** (m - 1), 2 ** (m - 1) + A), M - P0], ex)


# ---------- Câu 19: bài toán Cauchy cấp hai có cộng hưởng ----------
def h19(rng, k):
    if k % 2 == 0:
        w, A, B, j = rng.choice([1, 2]), rng.choice([1, 2, 3, -1]), rng.choice([1, 2, 3, -2]), rng.choice([1, 2, 3])
        c = 4 * w * w * j
        ok = B + j * pi
        x0 = r'\dfrac{\pi}{2}' if w == 1 else r'\dfrac{\pi}{4}'
        q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <A>;\ y\'(0) = <y1>$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\left(<x0>\right)$ bằng', o=ode2(0, w * w, term(c, tr('cos', w), True)), A=A, y1=B * w, x0=x0)
        Kc = R(c, 2 * w)
        ex = steps(T(r'Phương trình đặc trưng: $k^2 + <w2> = 0 \Rightarrow k = \pm <w>i$ (trùng tần số của vế phải)', w2=w * w, w='' if w == 1 else w),
                   r'$y^*=x(a' + tr('cos', w) + ' + b' + tr('sin', w) + r')$. Tính đạo hàm hai lần và cộng $' + ('' if w == 1 else str(w * w)) + 'y^*$: ' + r'$y^{*\prime\prime}+' + ('' if w == 1 else str(w * w)) + r'y^*=' + form((-2 * w, 'a' + tr('sin', w)), (2 * w, 'b' + tr('cos', w))) + '$.',
                   T(r'Đối chiếu hệ số với vế phải $<rhs>$: hệ số của $\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\cos(wx)$ là $2wb=c$, do đó $b=\dfrac{c}{2w}=<K>$.', rhs=term(c, tr('cos', w), True), w=w, c=c, K=Kc),
                   '$y = C_1' + tr('cos', w) + ' + C_2' + tr('sin', w) + term(Kc, 'x' + tr('sin', w)) + '$',
                   T(r'$y(0)=C_1=<A>$. Also $y^\prime(0)=wC_2=<y1>$, so $C_2=<B>$.', A=A, w=w, y1=B * w, B=B),
                   T(r'At $x_0=\dfrac{\pi}{2w}$, $\cos(wx_0)=0$ and $\sin(wx_0)=1$. Thus the homogeneous part is $<B>$ and the particular part is $<K>\cdot\dfrac{\pi}{2w}=<part>$; hence $y(x_0)=<B>+<part>=<ok>$.', x0=x0, B=B, K=Kc, w=w, part=j * pi, ok=ok))
        return NQ(q, ok, [B, j * pi, B - j * pi, A + j * pi, B + 2 * j * pi], ex)
    r, A, B, j = rng.choice([1, 2, -1]), rng.choice([1, 2, 0]), rng.choice([1, 2, -1]), rng.choice([1, 2, 3])
    c = 2 * j
    ok = (A + B + j) * exp(r)
    q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <A>;\ y\'(0) = <y1>$. Chú ý $k = <r>$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng', o=ode2(-2 * r, r * r, term(c, ex_(r), True)), A=A, y1=A * r + B, r=r)
    ex = steps(T(r'Phương trình đặc trưng: $<pe> = 0$, nghiệm kép $k = <r>$', pe=sp.expand((symbols('k') - r) ** 2), r=r),
               T(r'$y^* = ax^2<e>$; đặt $y^* = u<e>$ thì vế trái bằng $u^{\prime\prime}<e> = 2a<e>$; so với vế phải: $2a = <c> \Rightarrow a = <j>$', e=ex_(r), c=c, j=j),
               T(r'$y = (C_1 + C_2x + <j>x^2)<e>$', j='' if j == 1 else j, e=ex_(r)),
               T(r"$y(0) = C_1 = <A>;\quad y'(0) = <rc> + C_2 = <y1> \Rightarrow C_2 = <B>$", A=A, rc=r * symbols('C_1'), y1=A * r + B, B=B),
               T(r'$y(1) = (<A> + (<B>) + <j>)<e1> = <ok>$', A=A, B=B, j=j, e1='e' if r == 1 else 'e^{%d}' % r, ok=ok))
    return NQ(q, ok, [(A + B) * exp(r), (A + B + 2 * j) * exp(r), A + B + j, (A + j) * exp(r)], ex)


# ---------- Câu 20: đổi thứ tự rồi tính ----------
def h20(rng, k):
    it = r'\displaystyle\int_{%s}^{%s} d%s\int_{%s}^{%s} %s\,d%s'
    P20 = [
        (it % (0, 1, 'x', 'x', 1, 'e^{y^2}', 'y'), y * exp(y ** 2), (y, 0, 1)),
        (it % (0, 2, 'x', 'x', 2, 'e^{y^2}', 'y'), y * exp(y ** 2), (y, 0, 2)),
        (it % (0, 1, 'y', r'\sqrt{y}', 1, r'\sqrt{1 + x^3}', 'x'), x ** 2 * sqrt(1 + x ** 3), (x, 0, 1)),
        (it % (0, r'\sqrt{\pi}', 'y', 'y', r'\sqrt{\pi}', r'\sin(x^2)', 'x'), x * sin(x ** 2), (x, 0, sqrt(pi))),
        (it % (0, 1, 'x', 'x', 1, r'\dfrac{\sin y}{y}', 'y'), sin(y), (y, 0, 1)),
        (it % (0, 1, 'y', 'y', 1, 'e^{-x^2}', 'x'), x * exp(-x ** 2), (x, 0, 1)),
        (it % (0, 4, 'y', r'\sqrt{y}', 2, r'\dfrac{1}{1 + x^3}', 'x'), x ** 2 / (1 + x ** 3), (x, 0, 2)),
        (it % (0, r'\pi', 'x', 'x', r'\pi', r'\dfrac{\sin y}{y}', 'y'), sin(y), (y, 0, pi)),
        (it % (0, 1, 'x', 'x', 1, r'\cos(y^2)', 'y'), y * cos(y ** 2), (y, 0, 1)),
        (it % (0, 1, 'x', 'x^2', 1, 'xe^{y^2}', 'y'), y / 2 * exp(y ** 2), (y, 0, 1)),
        (it % (0, 3, 'x', 'x', 3, 'e^{y^2}', 'y'), y * exp(y ** 2), (y, 0, 3)),
        (it % (0, 8, 'y', r'\sqrt[3]{y}', 2, r'\sqrt{1 + x^4}', 'x'), x ** 3 * sqrt(1 + x ** 4), (x, 0, 2)),
    ]
    P20 += [
        (it % (0, 2, 'x', 'x', 2, 'e^{-y^2}', 'y'), y * exp(-y ** 2), (y, 0, 2)),
        (it % (0, r'\sqrt{\pi/2}', 'x', 'x', r'\sqrt{\pi/2}', r'\cos(y^2)', 'y'), y * cos(y ** 2), (y, 0, sqrt(pi / 2))),
        (it % (0, 9, 'y', r'\sqrt{y}', 3, r'\sin(x^3)', 'x'), x ** 2 * sin(x ** 3), (x, 0, 3)),
        (it % (0, 1, 'x', 'x', 1, r'\sqrt{1 + y^2}', 'y'), y * sqrt(1 + y ** 2), (y, 0, 1)),
        (it % (0, 2, 'y', 'y', 2, r'\dfrac{1}{1 + x^2}', 'x'), x / (1 + x ** 2), (x, 0, 2)),
        (it % (0, 1, 'x', 'x', 1, r'e^{y^2 + 1}', 'y'), y * exp(y ** 2 + 1), (y, 0, 1)),
    ]
    idx20 = (k + rng.randint(0, 5)) % 12 if k < 20 else 12 + rng.randrange(len(P20) - 12)
    s, g, lim = P20[idx20]
    regions20 = [
        r'$0\le x\le1,\ x\le y\le1$ becomes $0\le y\le1,\ 0\le x\le y$',
        r'$0\le x\le2,\ x\le y\le2$ becomes $0\le y\le2,\ 0\le x\le y$',
        r'$0\le y\le1,\ \sqrt y\le x\le1$ becomes $0\le x\le1,\ 0\le y\le x^2$',
        r'$0\le y\le\sqrt\pi,\ y\le x\le\sqrt\pi$ becomes $0\le x\le\sqrt\pi,\ 0\le y\le x$',
        r'$0\le x\le1,\ x\le y\le1$ becomes $0\le y\le1,\ 0\le x\le y$',
        r'$0\le y\le1,\ y\le x\le1$ becomes $0\le x\le1,\ 0\le y\le x$',
        r'$0\le y\le4,\ \sqrt y\le x\le2$ becomes $0\le x\le2,\ 0\le y\le x^2$',
        r'$0\le x\le\pi,\ x\le y\le\pi$ becomes $0\le y\le\pi,\ 0\le x\le y$',
        r'$0\le x\le1,\ x\le y\le1$ becomes $0\le y\le1,\ 0\le x\le y$',
        r'$0\le x\le1,\ x^2\le y\le1$ becomes $0\le y\le1,\ 0\le x\le\sqrt y$',
        r'$0\le x\le3,\ x\le y\le3$ becomes $0\le y\le3,\ 0\le x\le y$',
        r'$0\le y\le8,\ \sqrt[3]y\le x\le2$ becomes $0\le x\le2,\ 0\le y\le x^3$',
        r'$0\le x\le2,\ x\le y\le2$ becomes $0\le y\le2,\ 0\le x\le y$',
        r'$0\le x\le\sqrt{\pi/2},\ x\le y\le\sqrt{\pi/2}$ becomes $0\le y\le\sqrt{\pi/2},\ 0\le x\le y$',
        r'$0\le y\le9,\ \sqrt y\le x\le3$ becomes $0\le x\le3,\ 0\le y\le x^2$',
        r'$0\le x\le1,\ x\le y\le1$ becomes $0\le y\le1,\ 0\le x\le y$',
        r'$0\le y\le2,\ y\le x\le2$ becomes $0\le x\le2,\ 0\le y\le x$',
        r'$0\le x\le1,\ x\le y\le1$ becomes $0\le y\le1,\ 0\le x\le y$',
    ]
    ok = simplify(integrate(g, lim))
    q = 'Tích phân $I = ' + s + '$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng'
    Fg = integrate(g, lim[0])
    ex = steps(T(r'Miền ban đầu được mô tả rồi đảo cận như sau: <D>. Khi đó tích phân trong theo biến còn lại cho $I=\displaystyle\int_{<a>}^{<b>}<g>\,d<v>$.', D=regions20[idx20], a=lim[1], b=lim[2], g=g, v=tx(lim[0])),
               T(r'Tính nguyên hàm: $I=\left[<F>\right]_{<a>}^{<b>}=<Fb>-<Fa>=<ok>$.', F=Fg, a=lim[1], b=lim[2], Fb=Fg.subs(lim[0], lim[2]), Fa=Fg.subs(lim[0], lim[1]), ok=ok))
    return NQ(q, ok, [2 * ok, ok / 2, simplify(integrate(g / lim[0], lim)) if False else ok + 1, -ok, ok * 4], ex)


# ---------- Câu 21: tọa độ cầu ----------
def h21(rng, k):
    a = rng.choice([1, 2, 3])
    cone, ang, cs = rng.choice([(r'z = \sqrt{x^2 + y^2}', pi / 4, r'\dfrac{\pi}{4}'), (r'z = \sqrt{3(x^2 + y^2)}', pi / 6, r'\dfrac{\pi}{6}'), (r'z = \sqrt{\dfrac{x^2 + y^2}{3}}', pi / 3, r'\dfrac{\pi}{3}')])
    head = T(r'Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \le <a2>$ và phía trên mặt nón $<c>$. Trong tọa độ cầu $x = \rho\sin\theta\cos\varphi,\ y = \rho\sin\theta\sin\varphi,\ z = \rho\cos\theta$, miền $V$ ứng với $0 \le \rho \le <a>,\ 0 \le \theta \le <t>,\ 0 \le \varphi \le 2\pi$. ', a2=a * a, c=cone, a=a, t=cs)
    if k % 2 == 0:
        ok = simplify(2 * pi * integrate(sin(th), (th, 0, ang)) * integrate(rho ** 2, (rho, 0, a)))
        return NQ(head + 'Thể tích của $V$ bằng', ok, [simplify(2 * pi * ang * R(a ** 3, 3)), R(4, 3) * pi * a ** 3, ok / 2, ok * 2], steps(T(r'$V=\displaystyle\int_0^{2\pi}d\varphi\int_0^{<t>}\sin\theta\,d\theta\int_0^{<a>}\rho^2\,d\rho$. Các tích phân lần lượt bằng $2\pi$, $[-\cos\theta]_0^{<t>}=1-\cos<t>$ và $[\rho^3/3]_0^{<a>}=<a3>/3$.', t=cs, a=a, a3=a ** 3), T(r'$V=2\pi(1-\cos<t>)\dfrac{<a3>}{3}=<ok>$.', t=cs, a3=a ** 3, ok=ok)))
    ok = simplify(2 * pi * integrate(sin(th) * cos(th), (th, 0, ang)) * integrate(rho ** 3, (rho, 0, a)))
    return NQ(head + r'Giá trị của tích phân $\displaystyle\iiint_V z\,dxdydz$ bằng', ok, [ok * 2, ok / 2, pi * R(a ** 4, 4), simplify(2 * pi * integrate(cos(th), (th, 0, ang)) * R(a ** 4, 4))], steps(T(r'Vì $z=\rho\cos\theta$ và $dV=\rho^2\sin\theta\,d\rho\,d\theta\,d\varphi$, $I=\displaystyle\int_0^{2\pi}d\varphi\int_0^{<t>}\cos\theta\sin\theta\,d\theta\int_0^{<a>}\rho^3\,d\rho$.', t=cs, a=a), T(r'Các tích phân bằng $2\pi$, $[\sin^2\theta/2]_0^{<t>}=\sin^2<t>/2$, và $[\rho^4/4]_0^{<a>}=<a4>/4$. Vậy $I=2\pi\cdot\dfrac{\sin^2<t>}{2}\cdot\dfrac{<a4>}{4}=<ok>$.', t=cs, a=a, a4=a ** 4, ok=ok)))


# ---------- Câu 22: trạng thái ổn định của mô hình chuyển thị phần ----------
def h22(rng, k):
    pa, pb = rng.choice([10, 20, 30, 40]), rng.choice([10, 20, 30, 40])
    if pa == pb:
        raise Retry
    N = rng.choice([v_ for v_ in (600, 900, 1200, 1400, 1500, 2100) if (v_ * pb) % (pa + pb) == 0] or [0])
    if not N:
        raise Retry
    a0 = rng.choice([N // 2, N // 3, 2 * N // 3])
    ok = N * pb // (pa + pb)
    a1 = a0 * (100 - pa) / 100 + (N - a0) * pb / 100
    ctx = rng.choice([('hai nhà mạng X và Y', 'khách hàng', 'nghìn khách'), ('hai siêu thị X và Y', 'khách quen', 'khách'), ('hai ứng dụng gọi xe X và Y', 'người dùng', 'nghìn người dùng')])
    q = T(r'Một thị trường chỉ có <c0> với tổng cộng <N> <u>, tổng số không đổi. Mỗi tháng có <pa>% <c1> của X chuyển sang Y và <pb>% <c1> của Y chuyển sang X. Hiện tại X có <a0> <u>. Nếu quy luật này duy trì lâu dài thì số <c1> của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức',
          c0=ctx[0], N=N, u=ctx[2], pa=pa, pb=pb, c1=ctx[1], a0=a0)
    ex = steps(T(r'Gọi $x$ là số <c1> của X ở trạng thái ổn định. Lượng rời X là <pa>% của $x$; lượng chuyển từ Y sang X là <pb>% của $<N>-x$. Cân bằng cho $\dfrac{<pa>}{100}x=\dfrac{<pb>}{100}(<N>-x)$.', c1=ctx[1], pa=pa, pb=pb, N=N),
               T(r'Nhân với $100$: $<pa>x=<pb>(<N>-x)=<pbN>-<pb>x$, nên $(<s>)x=<pbN>$ và $x=\dfrac{<pbN>}{<s>}=<ok>$.', pa=pa, pb=pb, N=N, pbN=pb * N, s=pa + pb, ok=ok))
    return NQ(q, ok, [N * pa // (pa + pb), N // 2, int(a1), a0], ex)


# ---------- Câu 25: hệ hai tham số ----------
def h25(rng, k):
    a0, lam, c0, be = rng.choice([2, 3, -2, -3, 4]), rng.choice([2, 3, -2, 4]), rng.choice([1, 2, 3]), rng.choice([1, 2, -1, 3])
    b0, ga, de = lam - be, lam * a0, lam * c0 - a0 * a0
    def works(a, b):
        return (b + be) * a == ga and (b + be) * c0 == a * a + de
    cands = [(-a0, b0), (a0, -b0), (-a0, -b0), (b0, a0), (a0, b0 + 1)]
    wrongs = [c for c in cands if c != (a0, b0) and not works(*c)]
    wrongs = list(dict.fromkeys(wrongs))[:3]
    if len(wrongs) < 3 or b0 == 0:
        raise Retry
    f = lambda c: '$(a;b) = (%d;%d)$.' % c
    q = T(r'Cho hệ phương trình tuyến tính $\begin{cases}(b<be>)x<ga>y = a^2<de>\\ x + ay = <c0>\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?', be=sgn(be), ga=sgn(ga), de=sgn(de), c0=c0)
    ex = steps(T(r'Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+<be>=\lambda$, $<ga>=\lambda a$, $a^2<de>=\lambda<c0>$.', be=be, ga=ga, de=sgn(de), c0=c0),
               T(r'Với $(a,b)=(<a0>,<b0>)$: $b+<be>=<b1>=<l>$; $<ga>=<l>\cdot<a0>=<ga2>$; $a^2<de>=<n>=<l>\cdot<c0>=<rhs>$. Do đó hai phương trình tỉ lệ đúng cùng hệ số $\lambda=<l>$.', a0=a0, b0=b0, be=be, b1=b0 + be, l=lam, ga=ga, ga2=lam * a0, de=sgn(de), n=a0 * a0 + de, c0=c0, rhs=lam * c0),
               'Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.')
    return Q(q, f((a0, b0)), [f(w) for w in wrongs], ex)


# ---------- Câu 26: giới hạn chứa hai tham số ----------
def h26(rng, k):
    v, p = k % 3, rng.choice([1, 2, 3, 4] if k < 20 else [5, 6])
    P = '' if p == 1 else str(p)
    if v == 0:
        a, b, L = p, -R(p * p, 2), R(p ** 3, 3)
        q = T(r'Biết $\lim\limits_{x\to 0}\dfrac{\ln(1 + <P>x) - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a - 2b + 3L$ bằng', P=P)
        ok, how = a - 2 * b + 3 * L, r'$\ln(1 + u) = u - \dfrac{u^2}{2} + \dfrac{u^3}{3} + o(u^3)$'
    elif v == 1:
        a, b, L = p, R(p * p, 2), R(p ** 3, 6)
        q = T(r'Biết $\lim\limits_{x\to 0}\dfrac{e^{<P>x} - 1 - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + 2b + 6L$ bằng', P=P)
        ok, how = a + 2 * b + 6 * L, r'$e^{u} = 1 + u + \dfrac{u^2}{2} + \dfrac{u^3}{6} + o(u^3)$'
    else:
        a, b, L = p, 0, -R(p ** 3, 6)
        q = T(r'Biết $\lim\limits_{x\to 0}\dfrac{\sin <P>x - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b - 6L$ bằng', P=P)
        ok, how = a + b - 6 * L, r'$\sin u = u - \dfrac{u^3}{6} + o(u^3)$'
    c2 = [-R(p * p, 2), R(p * p, 2), 0][v]
    c3 = [R(p ** 3, 3), R(p ** 3, 6), -R(p ** 3, 6)][v]
    terms = [T(r'<a>-2(<b>)+3(<L>)=<t1>+<t2>+<t3>=<ok>', a=a, b=b, L=L, t1=a, t2=-2 * b, t3=3 * L, ok=ok),
             T(r'<a>+2(<b>)+6(<L>)=<t1>+<t2>+<t3>=<ok>', a=a, b=b, L=L, t1=a, t2=2 * b, t3=6 * L, ok=ok),
             T(r'<a>+<b>-6(<L>)=<t1>+<t2>+<t3>=<ok>', a=a, b=b, L=L, t1=a, t2=b, t3=-6 * L, ok=ok)]
    ex = steps(how + T(r', với $u=<P>x$, ta có $u^2=<p2>x^2$ và $u^3=<p3>x^3$.', P=P, p2=p * p, p3=p ** 3),
               T(r'Tử số sau khai triển là $(<p>-a)x+(<c2>-b)x^2+(<c3>)x^3+o(x^3)$. Chia cho $x^3$: $\dfrac{<p>-a}{x^2}+\dfrac{<c2>-b}{x}+<c3>+o(1)$.', p=p, c2=c2, b=b, c3=c3),
               T(r'Để giới hạn hữu hạn, các hệ số phân kỳ triệt tiêu: $a=<a>$ và $b=<b>$; hệ số còn lại cho $L=<L>$.', a=a, b=b, L=L), terms[v])
    return NQ(q, ok, [a + b + L, a, ok - L, ok + p, 2 * ok], ex)


# ---------- Câu 27: khả vi cấp hai tại điểm nối ----------
def h27(rng, k):
    v, c = k % 3, rng.choice([2, 4, -2, 6, -4])
    if v == 0:
        left, d, b, a = 'e^{%dx}' % c, 1, c, R(c * c, 2)
    elif v == 1:
        c = abs(c)
        left, d, b, a = r'\ln(1 + %dx)' % c, 0, c, -R(c * c, 2)
    else:
        left, d, b, a = r'\cos %dx' % abs(c), 1, 0, -R(c * c, 2)
    ask = rng.choice([('a + b + d', a + b + d), ('a - b + d', a - b + d), ('2a + b', 2 * a + b)])
    dom = r' (xét trong lân cận của điểm $0$)' if v == 1 else ''
    q = T(r'Biết hàm số $f(x) = \begin{cases}<l> & \text{khi } x \le 0\\ ax^2 + bx + d & \text{khi } x > 0\end{cases}$<dom> có đạo hàm cấp hai tại $x = 0$. Giá trị của $<e>$ bằng', l=left, dom=dom, e=ask[0])
    g0 = [exp(c * x), log(1 + c * x), cos(abs(c) * x)][v]
    ex = steps(T(r'Nhánh trái $g(x)=<g>$ có $g(0)=<g0>$, $g^\prime(0)=<g1>$, $g^{\prime\prime}(0)=<g2>$ (tính đạo hàm rồi thế $x=0$).', g=g0, g0=g0.subs(x, 0), g1=diff(g0, x).subs(x, 0), g2=diff(g0, x, 2).subs(x, 0)),
               r'Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\prime(x)=2ax+b$ nên $h^\prime(0)=b$, $h^{\prime\prime}(x)=2a$ nên $h^{\prime\prime}(0)=2a$. Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\prime(0)=g^\prime(0)$, $h^{\prime\prime}(0)=g^{\prime\prime}(0)$.',
               T(r'$d=<d>,\ b=<b>,\ 2a=<t>$, do đó $a=<a>$.', d=d, b=b, t=2 * a, a=a), T(r'Thay các hệ số đã tìm vào biểu thức cần tính: $<e>=<ok>$.', e=ask[0], ok=ask[1]))
    return NQ(q, ask[1], [a, b + d, 2 * a + b + d, a + b, ask[1] + 1], ex)


# ---------- Câu 28: ứng dụng tích phân một biến ----------
def h28(rng, k):
    v = k % 6
    if v == 0:
        a = rng.choice([3, 8, 15, 24])
        ok = R(2, 3) * (sp.Integer(1 + a) ** R(3, 2) - 1)
        q = T(r'Một đoạn đường ống uốn theo đường cong $y = \dfrac23x^{3/2}$ với $0 \le x \le <a>$ (đơn vị: mét). Dùng công thức độ dài cung $L = \displaystyle\int_a^b\sqrt{1 + (y\')^2}\,dx$, độ dài đoạn ống bằng', a=a)
        return NQ(q, ok, [ok + R(2, 3), a, R(2, 3) * sp.Integer(1 + a) ** R(3, 2), ok / 2], steps(r"$y' = \sqrt{x} \Rightarrow 1 + (y')^2 = 1 + x$", T(r'$L = \displaystyle\int_0^{<a>}\sqrt{1 + x}\,dx = \left[\dfrac23(1 + x)^{3/2}\right]_0^{<a>}$', a=a), T(r'$= \dfrac23\left(<b>^{3/2} - 1\right) = <ok>$', b=a + 1, ok=ok)), unit=' m')
    if v == 1:
        a = rng.choice([1, 2, 3])
        f, s = rng.choice([(x ** 2, 'y = x^2'), (sqrt(x) * (x + 1) ** 0, r'y = \sqrt{x}'), (exp(x), 'y = e^x'), (x * sqrt(x), r'y = x\sqrt{x}')])
        ok = simplify(pi * integrate(f ** 2, (x, 0, a)))
        q = T(r'Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $<s>$, $y = 0$, $x = 0$ và $x = <a>$ bằng', s=s, a=a)
        return NQ(q, ok, [ok / pi, simplify(pi * integrate(f, (x, 0, a))), ok * 2, ok / 2], steps(T(r'$V=\pi\int_0^{<a>}y^2dx=\pi\int_0^{<a>}<g>dx$; bình phương hàm số cho biểu thức dưới dấu tích phân như trên.', a=a, g=sp.powsimp(sp.expand(f ** 2))), T(r'Nguyên hàm là $<F>$. Thế cận: $V=\pi(<Fb>-<F0>)=<ok>$.', F=integrate(sp.powsimp(sp.expand(f ** 2)), x), Fb=integrate(sp.powsimp(sp.expand(f ** 2)), x).subs(x, a), F0=integrate(sp.powsimp(sp.expand(f ** 2)), x).subs(x, 0), ok=ok)))
    if v == 2:
        a = rng.choice([1, 2, 3, 4])
        ok = R(1, a * a)
        q = T(r'Giá trị của tích phân suy rộng $\displaystyle\int_0^{+\infty} xe^{-<a>x}\,dx$ bằng', a='' if a == 1 else a)
        return NQ(q, ok, [R(1, a), a, R(2, a * a), 1 if a != 1 else 2], steps(T(r'Từng phần trên $[0,R]$ với $u=x$, $dv=e^{-<A>x}dx$, $v=-e^{-<A>x}/<a>$: $\int_0^Rxe^{-<A>x}dx=[-xe^{-<A>x}/<a>]_0^R+\frac1{<a>}\int_0^Re^{-<A>x}dx$.', A='' if a == 1 else a, a=a), T(r'Cho $R\to\infty$, $Re^{-<a>R}\to0$; tích phân còn lại là $[-e^{-<a>x}/<a>]_0^\infty=1/<a>$. Vậy $I=0+\dfrac1{<a>}\cdot\dfrac1{<a>}=<ok>$.', a=a, ok=ok)))
    if v == 3:
        a = rng.choice([1, 2, 3, 4])
        ok = simplify(integrate(1 / (x ** 2 + a * a), (x, 0, oo)))
        q = T(r'Giá trị của tích phân suy rộng $\displaystyle\int_0^{+\infty}\dfrac{dx}{x^2 + <a2>}$ bằng', a2=a * a)
        return NQ(q, ok, [pi / a, pi / 2 if a != 1 else pi, pi / (2 * a * a) if a != 1 else pi / 4, pi / (4 * a)], steps(T(r'Đặt $x=<a>t$, $dx=<a>dt$, $x^2+<a2>=<a2>(1+t^2)$: $\int_0^\infty\dfrac{dx}{x^2+<a2>}=\dfrac1{<a>}\int_0^\infty\dfrac{dt}{1+t^2}$.', a=a, a2=a * a), T(r'$=\dfrac1{<a>}[\arctan t]_0^\infty=\dfrac1{<a>}(\dfrac\pi2-0)=<ok>$.', a=a, ok=ok)))
    if v == 4:
        a = rng.choice([1, 2, 3])
        ok = simplify(integrate(1 / (x * (x + a)), (x, 1, oo)))
        q = T(r'Giá trị của tích phân suy rộng $\displaystyle\int_1^{+\infty}\dfrac{dx}{x(x + <a>)}$ bằng', a=a)
        return NQ(q, ok, [log(1 + a), ok * a * 2 if a != 1 else log(2) / 2, R(1, a), ok / 2], steps(T(r'Phân tích phân thức: $\dfrac1{x(x+<a>)}=\dfrac1{<a>}\left(\dfrac1x-\dfrac1{x+<a>}\right)$ vì $\dfrac{(x+<a>)-x}{<a>x(x+<a>)}=\dfrac1{x(x+<a>)}$.', a=a), T(r'$I_R=\dfrac1{<a>}\left[\ln x-\ln(x+<a>)\right]_1^R=\dfrac1{<a>}\ln\dfrac{<b>R}{R+<a>}\to\dfrac1{<a>}\ln<b>=<ok>$.', a=a, b=a + 1, ok=ok)))
    a, b = rng.choice([(1, 1), (1, 2), (2, 1), (3, 4), (4, 3), (2, 2)])
    ok = R(b, a * a + b * b)
    q = T(r'Giá trị của tích phân suy rộng $\displaystyle\int_0^{+\infty} e^{-<a>x}\sin <b>x\,dx$ bằng', a='' if a == 1 else a, b='' if b == 1 else b)
    return NQ(q, ok, [R(a, a * a + b * b), R(1, a * a + b * b), R(b, a), R(1, a + b)], steps(T(r'Đặt $I=\int_0^\infty e^{-ax}\sin bx\,dx$, $J=\int_0^\infty e^{-ax}\cos bx\,dx$. Từng phần cho $I=[-e^{-ax}\cos bx/b]_0^\infty-(a/b)J=1/b-(a/b)J$.', a=a, b=b), T(r'Từng phần với $J$: $J=[e^{-ax}\sin bx/b]_0^\infty+(a/b)I=(a/b)I$. Thế vào phương trình đầu: $I=1/b-(a^2/b^2)I$, nên $I(1+a^2/b^2)=1/b$ và $I=b/(a^2+b^2)=<ok>$.', a=a, b=b, a2=a * a, b2=b * b, ok=ok)))


# ---------- Câu 32: tính tổng chuỗi số nhờ chuỗi lũy thừa ----------
SUMN = lambda body, n0: r'\displaystyle\sum_{n=%d}^{+\infty}%s' % (n0, body)
P32 = [
    (SUMN(r'\dfrac{1}{n\cdot2^n}', 1), log(2), lambda n: 1 / (n * 2.0 ** n), 1, r'$\displaystyle\sum_{n\ge1}\dfrac{x^n}{n} = -\ln(1 - x)$ tại $x = \dfrac12$.', [log(2) / 2, 2 * log(2), 1]),
    (SUMN(r'\dfrac{1}{n\cdot3^n}', 1), log(R(3, 2)), lambda n: 1 / (n * 3.0 ** n), 1, r'$-\ln(1 - x)$ tại $x = \dfrac13$.', [log(3), log(R(2, 3)), R(1, 2)]),
    (SUMN(r'\dfrac{(-1)^{n-1}}{n\cdot3^n}', 1), log(R(4, 3)), lambda n: (-1) ** (n - 1) / (n * 3.0 ** n), 1, r'$\displaystyle\sum_{n\ge1}\dfrac{(-1)^{n-1}x^n}{n} = \ln(1 + x)$ tại $x = \dfrac13$.', [log(R(3, 2)), log(R(3, 4)), R(1, 4)]),
    (SUMN(r'\dfrac{(-1)^n}{(2n+1)\cdot3^n}', 0), sqrt(3) * pi / 6, lambda n: (-1) ** n / ((2 * n + 1) * 3.0 ** n), 0, r'$\displaystyle\sum_{n\ge0}\dfrac{(-1)^nx^{2n+1}}{2n+1} = \arctan x$ tại $x = \dfrac{1}{\sqrt3}$, rồi nhân với $\sqrt3$.', [pi / 6, pi / 4, sqrt(3) * pi / 3]),
    (SUMN(r'\dfrac{2^n}{n!}', 0), exp(2), lambda n: 2.0 ** n / math.factorial(n), 0, r'$\displaystyle\sum_{n\ge0}\dfrac{x^n}{n!} = e^x$ tại $x = 2$.', [exp(2) - 1, 2 * E, exp(R(1, 2))]),
    (SUMN(r'\dfrac{n}{n!}', 1), E, lambda n: n / math.factorial(n), 1, r'$\dfrac{n}{n!} = \dfrac{1}{(n-1)!}$ nên tổng bằng $e$.', [E - 1, 2 * E, 1]),
    (SUMN(r'\dfrac{n+1}{n!}', 0), 2 * E, lambda n: (n + 1) / math.factorial(n), 0, r'$\displaystyle\sum\dfrac{n}{n!} + \sum\dfrac{1}{n!} = e + e$.', [E, E + 1, 3 * E]),
    (SUMN(r'\dfrac{(-1)^n\pi^{2n}}{(2n)!}', 0), sp.Integer(-1), lambda n: (-1) ** n * math.pi ** (2 * n) / math.factorial(2 * n), 0, r'$\displaystyle\sum_{n\ge0}\dfrac{(-1)^nx^{2n}}{(2n)!} = \cos x$ tại $x = \pi$.', [0, 1, pi]),
    (SUMN(r'\dfrac{1}{n\cdot4^n}', 1), log(R(4, 3)), lambda n: 1 / (n * 4.0 ** n), 1, r'$-\ln(1 - x)$ tại $x = \dfrac14$.', [log(4), log(R(3, 4)), R(1, 3)]),
    (SUMN(r'\dfrac{n^2}{n!}', 1), 2 * E, lambda n: n * n / math.factorial(n), 1, r'$\dfrac{n^2}{n!} = \dfrac{1}{(n-2)!} + \dfrac{1}{(n-1)!}$ (với $n \ge 2$) nên tổng bằng $2e$.', [E, 3 * E, E * E]),
    (SUMN(r'\dfrac{(-1)^n}{(2n+1)!}', 0), sin(1), lambda n: (-1) ** n / math.factorial(2 * n + 1), 0, r'$\displaystyle\sum_{n\ge0}\dfrac{(-1)^nx^{2n+1}}{(2n+1)!} = \sin x$ tại $x = 1$.', [cos(1), E, 1]),
    (SUMN(r'\dfrac{(-1)^{n-1}}{n\cdot2^n}', 1), log(R(3, 2)), lambda n: (-1) ** (n - 1) / (n * 2.0 ** n), 1, r'$\ln(1 + x)$ tại $x = \dfrac12$.', [log(2), log(3), R(1, 3)]),
    # --- dùng cho các đề từ số 25 trở đi ---
    (SUMN(r'\dfrac{(-1)^n\pi^{2n}}{9^n\,(2n)!}', 0), R(1, 2), lambda n: (-1) ** n * (math.pi / 3) ** (2 * n) / math.factorial(2 * n), 0, r'$\displaystyle\sum_{n\ge0}\dfrac{(-1)^nx^{2n}}{(2n)!} = \cos x$ tại $x = \dfrac{\pi}{3}$.', [R(1, 3), sqrt(3) / 2, -R(1, 2)]),
    (SUMN(r'\dfrac{(-3)^n}{n!}', 0), exp(-3), lambda n: (-3.0) ** n / math.factorial(n), 0, r'$\displaystyle\sum_{n\ge0}\dfrac{x^n}{n!} = e^x$ tại $x = -3$.', [exp(3), -exp(3), exp(R(-1, 3))]),
    (SUMN(r'\dfrac{1}{n\cdot5^n}', 1), log(R(5, 4)), lambda n: 1 / (n * 5.0 ** n), 1, r'$\displaystyle\sum_{n\ge1}\dfrac{x^n}{n} = -\ln(1 - x)$ tại $x = \dfrac15$.', [log(5), log(R(4, 5)), R(1, 4)]),
    (SUMN(r'\dfrac{1}{(2n+1)\cdot4^n}', 0), log(3), lambda n: 1 / ((2 * n + 1) * 4.0 ** n), 0, r'$\displaystyle\sum_{n\ge0}\dfrac{x^{2n+1}}{2n+1} = \dfrac12\ln\dfrac{1+x}{1-x}$ tại $x = \dfrac12$, rồi nhân với 2.', [log(3) / 2, log(2), 2 * log(3)]),
]


def h32(rng, k):
    idx32 = k % 12 if k < 20 else [8, 9, 12, 13, 14, 15][(k - 20) % 6]
    s, ok, term_, n0, ex, wrongs = P32[idx32]
    assert abs(sum(term_(n) for n in range(n0, 80)) - float(ok)) < 1e-9, s
    calculations = [
        r'$x=\frac12$: $\sum_{n\ge1}\frac{(1/2)^n}{n}=-\ln(1-\frac12)=-\ln\frac12=\ln2$.',
        r'$x=\frac13$: $\sum_{n\ge1}\frac{(1/3)^n}{n}=-\ln(1-\frac13)=-\ln\frac23=\ln\frac32$.',
        r'$x=\frac13$: $\sum_{n\ge1}\frac{(-1)^{n-1}(1/3)^n}{n}=\ln(1+\frac13)=\ln\frac43$.',
        r'$x=\frac1{\sqrt3}$: $\arctan x=\sum_{n\ge0}\frac{(-1)^nx^{2n+1}}{2n+1}$. Vì $\sqrt3\,x^{2n+1}=1/3^n$, chuỗi đã cho bằng $\sqrt3\arctan(1/\sqrt3)=\sqrt3\,\pi/6$.',
        r'$\sum_{n\ge0}\frac{2^n}{n!}=\sum_{n\ge0}\frac{2^n}{n!}=e^2$ (thay $x=2$ vào $\sum x^n/n!$).',
        r'Với $n\ge1$, $\frac n{n!}=\frac1{(n-1)!}$. Đặt $m=n-1$: $\sum_{n\ge1}\frac n{n!}=\sum_{m\ge0}\frac1{m!}=e$.',
        r'$\frac{n+1}{n!}=\frac n{n!}+\frac1{n!}$. Vì $\sum_{n\ge0}n/n!=e$ (số hạng $n=0$ bằng $0$) và $\sum_{n\ge0}1/n!=e$, tổng bằng $e+e=2e$.',
        r'$\sum_{n\ge0}\frac{(-1)^n\pi^{2n}}{(2n)!}=\cos\pi=-1$.',
        r'$x=\frac14$: $\sum_{n\ge1}\frac{(1/4)^n}{n}=-\ln(1-\frac14)=-\ln\frac34=\ln\frac43$.',
        r'Riêng $n=1$ cho $1$. Với $n\ge2$, $\frac{n^2}{n!}=\frac1{(n-2)!}+\frac1{(n-1)!}$. Tổng là $1+\sum_{m\ge0}1/m!+\sum_{m\ge1}1/m!=1+e+(e-1)=2e$.',
        r'$\sum_{n\ge0}\frac{(-1)^n}{(2n+1)!}=\sin1$ theo $\sin x=\sum_{n\ge0}(-1)^nx^{2n+1}/(2n+1)!$ tại $x=1$.',
        r'$x=\frac12$: $\sum_{n\ge1}\frac{(-1)^{n-1}(1/2)^n}{n}=\ln(1+\frac12)=\ln\frac32$.',
        r'$\sum_{n\ge0}\frac{(-1)^n(\pi/3)^{2n}}{(2n)!}=\cos(\pi/3)=\frac12$.',
        r'$\sum_{n\ge0}\frac{(-3)^n}{n!}=e^{-3}$ (thay $x=-3$ vào $\sum x^n/n!$).',
        r'$x=\frac15$: $\sum_{n\ge1}\frac{(1/5)^n}{n}=-\ln(1-\frac15)=-\ln\frac45=\ln\frac54$.',
        r'$x=\frac12$: $\sum_{n\ge0}\frac{x^{2n+1}}{2n+1}=\frac12\ln\frac{1+x}{1-x}=\frac12\ln3$. Mỗi $x^{2n+1}=1/(2\cdot4^n)$, nên chuỗi cần tính bằng $2\cdot\frac12\ln3=\ln3$.',
        r'$x=\frac12$: $\sum_{n\ge1}\frac{(-1)^{n-1}x^n}{n}=\ln(1+x)=\ln\frac32$.',
    ]
    return NQ('Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $' + s + '$ bằng', ok, wrongs, steps(calculations[idx32], T('Vậy tổng của chuỗi bằng $<ok>$', ok=ok)))


# ---------- Câu 33: bài toán Cauchy với phương trình tách biến ----------
P33 = [
    (lambda X, Y: X * Y ** 2, lambda X: 2 / (2 - X ** 2), 0, 1, 1, r"y' = xy^2", '1'),
    (lambda X, Y: X * Y / (1 + X ** 2), lambda X: 2 * sqrt(1 + X ** 2), 0, 2, sqrt(3), r"(1 + x^2)y' = xy", r'\sqrt3'),
    (lambda X, Y: exp(X - Y), lambda X: log(exp(X) + 1), 0, log(2), log(3), r"y' = e^{x - y}", r'\ln 3'),
    (lambda X, Y: Y ** 2 * cos(X), lambda X: 1 / (1 - sin(X)), 0, 1, pi / 6, r"y' = y^2\cos x", r'\dfrac{\pi}{6}'),
    (lambda X, Y: 2 * X * (1 + Y ** 2), lambda X: tan(X ** 2), 0, 0, sqrt(pi) / 2, r"y' = 2x(1 + y^2)", r'\dfrac{\sqrt{\pi}}{2}'),
    (lambda X, Y: Y * log(Y) / X, lambda X: exp(2 * X), 1, exp(2), 2, r"xy' = y\ln y", '2'),
    (lambda X, Y: (1 + Y ** 2) / (1 + X ** 2), lambda X: (1 + X) / (1 - X), 0, 1, R(1, 2), r"y' = \dfrac{1 + y^2}{1 + x^2}", r'\dfrac12'),
    (lambda X, Y: Y * cos(X) / sin(X), lambda X: 2 * sin(X), pi / 6, 1, pi / 2, r"y'\tan x = y", r'\dfrac{\pi}{2}'),
    (lambda X, Y: X * exp(-Y), lambda X: log(X ** 2 / 2 + 1), 0, 0, 2, r"y' = xe^{-y}", '2'),
    (lambda X, Y: 3 * X ** 2 * (Y + 1), lambda X: 2 * exp(X ** 3) - 1, 0, 1, 1, r"y' = 3x^2(y + 1)", '1'),
    (lambda X, Y: X / Y, lambda X: sqrt(X ** 2 + 9), 0, 3, 4, r"yy' = x", '4'),
    (lambda X, Y: 2 * X * Y, lambda X: 3 * exp(X ** 2), 0, 3, 1, r"y' = 2xy", '1'),
    # --- dùng cho các đề từ số 25 trở đi ---
    (lambda X, Y: 2 * Y / X, lambda X: 3 * X ** 2, 1, 3, 2, r"xy' = 2y", '2'),
    (lambda X, Y: (1 + Y) * cos(X), lambda X: 2 * exp(sin(X)) - 1, 0, 1, pi / 2, r"y' = (1 + y)\cos x", r'\dfrac{\pi}{2}'),
    (lambda X, Y: Y ** 2 / X ** 2, lambda X: X / (1 + X), 1, R(1, 2), 3, r"x^2y' = y^2", '3'),
    (lambda X, Y: 2 * X * exp(Y), lambda X: -log(1 - X ** 2), 0, 0, R(1, 2), r"y' = 2xe^{y}", r'\dfrac12'),
]


S33 = [
    r'\dfrac{dy}{y^2} = x\,dx \Rightarrow -\dfrac1y = \dfrac{x^2}{2} + C',
    r'\dfrac{dy}{y} = \dfrac{x\,dx}{1+x^2} \Rightarrow \ln|y| = \dfrac12\ln(1+x^2) + C',
    r'e^y\,dy = e^x\,dx \Rightarrow e^y = e^x + C',
    r'\dfrac{dy}{y^2} = \cos x\,dx \Rightarrow -\dfrac1y = \sin x + C',
    r'\dfrac{dy}{1+y^2} = 2x\,dx \Rightarrow \arctan y = x^2 + C',
    r'\dfrac{dy}{y\ln y} = \dfrac{dx}{x} \Rightarrow \ln|\ln y| = \ln x + C',
    r'\dfrac{dy}{1+y^2} = \dfrac{dx}{1+x^2} \Rightarrow \arctan y = \arctan x + C',
    r'\dfrac{dy}{y} = \dfrac{\cos x}{\sin x}dx \Rightarrow \ln|y| = \ln|\sin x| + C',
    r'e^y\,dy = x\,dx \Rightarrow e^y = \dfrac{x^2}{2} + C',
    r'\dfrac{dy}{y+1} = 3x^2\,dx \Rightarrow \ln|y+1| = x^3 + C',
    r'y\,dy = x\,dx \Rightarrow \dfrac{y^2}{2} = \dfrac{x^2}{2} + C',
    r'\dfrac{dy}{y} = 2x\,dx \Rightarrow \ln|y| = x^2 + C',
    r'\dfrac{dy}{y} = \dfrac{2\,dx}{x} \Rightarrow \ln|y| = 2\ln x + C',
    r'\dfrac{dy}{1+y} = \cos x\,dx \Rightarrow \ln|1+y| = \sin x + C',
    r'\dfrac{dy}{y^2} = \dfrac{dx}{x^2} \Rightarrow -\dfrac1y = -\dfrac1x + C',
    r'e^{-y}\,dy = 2x\,dx \Rightarrow -e^{-y} = x^2 + C',
]


def h33(rng, k):
    idx = k % 12 if k < 20 else [8, 9, 12, 13, 14, 15][(k - 20) % 6]
    rhs, sol, x0, y0, x1, eq, x1s = P33[idx]
    xs = Symbol('x', positive=True)
    x0, x1 = sp.sympify(x0), sp.sympify(x1)
    assert simplify(diff(sol(xs), xs) - rhs(xs, sol(xs))) == 0 and abs(sp.N(sol(x0) - y0)) < 1e-12, eq
    ok = simplify(sol(x1))
    q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình tách biến $<eq>$ thỏa mãn $y(<x0>) = <y0>$. Giá trị của $y\left(<x1>\right)$ bằng', eq=eq, x0=x0, y0=y0, x1=x1s)
    constants = [
        r'$x=0,y=1$: $-1/y=x^2/2+C$ gives $-1=0+C$, so $C=-1$.',
        r'$x=0,y=2$: $\ln y=\frac12\ln(1+x^2)+C$ gives $\ln2=0+C$, so $C=\ln2$.',
        r'$x=0,y=\ln2$: $e^y=e^x+C$ gives $2=1+C$, so $C=1$.',
        r'$x=0,y=1$: $-1/y=\sin x+C$ gives $-1=0+C$, so $C=-1$.',
        r'$x=0,y=0$: $\arctan y=x^2+C$ gives $0=0+C$, so $C=0$.',
        r'$x=1,y=e^2$: $\ln|\ln y|=\ln x+C$ gives $\ln2=0+C$, so $C=\ln2$.',
        r'$x=0,y=1$: $\arctan y=\arctan x+C$ gives $\pi/4=0+C$, so $C=\pi/4$.',
        r'$x=\pi/6,y=1$: $\ln y=\ln(\sin x)+C$ gives $0=\ln(1/2)+C$, so $C=\ln2$.',
        r'$x=0,y=0$: $e^y=x^2/2+C$ gives $1=0+C$, so $C=1$.',
        r'$x=0,y=1$: $\ln|y+1|=x^3+C$ gives $\ln2=0+C$, so $C=\ln2$.',
        r'$x=0,y=3$: $y^2/2=x^2/2+C$ gives $9/2=0+C$, so $C=9/2$.',
        r'$x=0,y=3$: $\ln y=x^2+C$ gives $\ln3=0+C$, so $C=\ln3$.',
        r'$x=1,y=3$: $\ln y=2\ln x+C$ gives $\ln3=0+C$, so $C=\ln3$.',
        r'$x=0,y=1$: $\ln(1+y)=\sin x+C$ gives $\ln2=0+C$, so $C=\ln2$.',
        r'$x=1,y=1/2$: $-1/y=-1/x+C$ gives $-2=-1+C$, so $C=-1$.',
        r'$x=0,y=0$: $-e^{-y}=x^2+C$ gives $-1=0+C$, so $C=-1$.',
    ]
    return NQ(q, ok, [sp.sympify(y0), ok + 1, ok / 2, 2 * ok, -ok],
              steps('Tách biến rồi tích phân hai vế: $' + S33[idx] + '$',
                    constants[idx],
                    T(r'Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=<s>$.', s=sol(x)),
                    T(r'Thay $x=<x1>$ vào nghiệm: $y(<x1>)=<value>=<ok>$.', x1=x1s, value=ok, ok=ok)))


# ---------- Câu 34: bài toán Cauchy với phương trình tuyến tính ----------
def h34(rng, k):
    if k % 2 == 0:
        p, qq, y0 = rng.choice([1, 2, 3]), rng.choice([1, 2, 3, 4]), rng.choice([1, 2, -1, 3])
        sol = (qq * x + y0) * exp(-p * x)
        assert simplify(diff(sol, x) + p * sol - qq * exp(-p * x)) == 0
        q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình $y\'<py> = <q><e>$ thỏa mãn $y(0) = <y0>$. Giá trị của $y(1)$ bằng', py=term(p, 'y'), q='' if qq == 1 else qq, e=ex_(-p), y0=y0)
        ok = sol.subs(x, 1)
        return NQ(q, ok, [y0 * exp(-p), qq * exp(-p), (qq + y0) * exp(p), sp.Integer(qq + y0)], steps(T(r"Nhân hai vế với $<e>$: $\left(y<e>\right)' = <q>$", e=ex_(p), q=qq), T(r'$y<e> = <q>x + C \Rightarrow y = (<q>x + C)<f>$', e=ex_(p), q=qq, f=ex_(-p)),
                             T(r'$y(0) = C = <y0> \Rightarrow y(1) = (<s>)<f1> = <ok>$', y0=y0, s=str(qq) + sgn(y0), f1='e^{-%d}' % p, ok=ok)))
    nn, c0 = rng.choice([1, 2, 3]), rng.choice([0, 1, 2, -1])
    sol = x ** nn * (exp(x) + c0)
    assert simplify(x * diff(sol, x) - nn * sol - x ** (nn + 1) * exp(x)) == 0
    q = T(r'Gọi $y = y(x)$ là nghiệm của phương trình $xy\' - <n>y = x^{<m>}e^x$ $(x > 0)$ thỏa mãn $y(1) = <y1>$. Giá trị của $y(2)$ bằng', n='' if nn == 1 else nn, m=nn + 1, y1=E + c0)
    ok = sol.subs(x, 2)
    return NQ(q, ok, [2 ** nn * exp(2), exp(2) + c0, 2 ** nn * (exp(2) - c0) if c0 else 2 * exp(2), 2 ** (nn + 1) * (exp(2) + c0)], steps(T(r"Chia hai vế cho $x^{<m>}$: $\left(\dfrac{y}{<xn>}\right)' = e^x \Rightarrow y = <xn>(e^x + C)$", m=nn + 1, xn=x ** nn), T(r'$y(1) = e + C = <y1> \Rightarrow C = <c>$', y1=E + c0, c=c0),
                             T(r'$y(2) = <p>\left(e^2<s>\right) = <ok>$', p=2 ** nn, s=sgn(c0), ok=ok)))


# ---------- Câu 36: miền giữa hai đường tròn ----------
def h36(rng, k):
    Rr = rng.choice([1, 2, 3] if k < 20 else [4, 5, 6])
    f, s = [(sp.Integer(1), '1'), (rr * cos(ph), 'x'), (1 / rr, r'\dfrac{1}{\sqrt{x^2 + y^2}}'), (rr * sin(ph), 'y')][k % 4]
    ok = simplify(integrate(integrate(f * rr, (rr, Rr, 2 * Rr * cos(ph))), (ph, 0, pi / 3)))
    integ = '' if s == '1' else s
    q = T(r'Cho $D$ là miền nằm trong góc phần tư thứ nhất, nằm trong đường tròn $x^2 + y^2 = <c>x$ và nằm ngoài đường tròn $x^2 + y^2 = <R2>$. Trong tọa độ cực, $D$ ứng với $<R> \le r \le <c>\cos\varphi,\ 0 \le \varphi \le \dfrac{\pi}{3}$. Giá trị của tích phân $\displaystyle\iint_D <s>\,dxdy$ bằng', c=2 * Rr, R2=Rr * Rr, R=Rr, s=integ)
    wrong = simplify(integrate(integrate(f, (rr, Rr, 2 * Rr * cos(ph))), (ph, 0, pi / 3)))
    inner = sp.simplify(integrate(f * rr, (rr, Rr, 2 * Rr * cos(ph))))
    Fphi = integrate(inner, ph)
    return NQ(q, ok, [wrong, ok * 2, ok / 2, simplify(integrate(integrate(f * rr, (rr, 0, 2 * Rr * cos(ph))), (ph, 0, pi / 3)))], steps(T(r'$I=\int_0^{\pi/3}d\varphi\int_{<R>}^{<c>\cos\varphi}<g>\,dr$; $<g>$ đã gồm Jacobian $r$.', R=Rr, c=2 * Rr, g=sp.simplify(f * rr)),
               T(r'Tính tích phân theo $r$: $\int_{<R>}^{<c>\cos\varphi}<g>\,dr=<h>$, bằng cách thế hai cận vào nguyên hàm theo $r$.', R=Rr, c=2 * Rr, g=sp.simplify(f * rr), h=inner),
               T(r'Nguyên hàm theo $\varphi$ của biểu thức trên là $<F>$. Do đó $I=[<F>]_{0}^{\pi/3}=<upper>-<lower>=<ok>$.', F=Fphi, upper=Fphi.subs(ph, pi / 3), lower=Fphi.subs(ph, 0), ok=ok)))


# ---------- Câu 37: tích phân ba lớp trong tọa độ cầu ----------
def h37(rng, k):
    v, a = k % 5, rng.choice([1, 2, 3] if k < 20 else [4, 5])
    if v == 0:
        ok = pi * a ** 4
        q = T(r'Cho $V$ là hình cầu $x^2 + y^2 + z^2 \le <a2>$. Giá trị của tích phân $\displaystyle\iiint_V \sqrt{x^2 + y^2 + z^2}\,dxdydz$ bằng', a2=a * a)
        return NQ(q, ok, [R(4, 3) * pi * a ** 4, pi * R(a ** 4, 2), 2 * pi * a ** 4, R(4, 3) * pi * a ** 3 if a != 1 else 4 * pi], steps(T(r'Tọa độ cầu cho $\sqrt{x^2+y^2+z^2}=\rho$ và $dV=\rho^2\sin\theta\,d\rho d\theta d\varphi$, nên $I=\int_0^{2\pi}d\varphi\int_0^\pi\sin\theta\,d\theta\int_0^{<a>}\rho^3\,d\rho$.', a=a), T(r'$\int_0^{2\pi}d\varphi=2\pi$, $[-\cos\theta]_0^\pi=2$, và $[\rho^4/4]_0^{<a>}=<a4>/4$. Nhân lại: $I=2\pi\cdot2\cdot\dfrac{<a4>}{4}=<ok>$.', a=a, a4=a ** 4, ok=ok)))
    if v == 1:
        ok = pi * R(4 * a ** 5, 5)
        q = T(r'Cho $V$ là hình cầu $x^2 + y^2 + z^2 \le <a2>$. Giá trị của tích phân $\displaystyle\iiint_V (x^2 + y^2 + z^2)\,dxdydz$ bằng', a2=a * a)
        return NQ(q, ok, [ok / 2, pi * R(a ** 5, 5), R(4, 3) * pi * a ** 5, ok * 2], steps(T(r'$x^2+y^2+z^2=\rho^2$ and $dV=\rho^2\sin\theta\,d\rho d\theta d\varphi$, so $I=\int_0^{2\pi}d\varphi\int_0^\pi\sin\theta\,d\theta\int_0^{<a>}\rho^4\,d\rho$.', a=a), T(r'Tích phân theo góc: $2\pi\cdot2$; theo bán kính: $[\rho^5/5]_0^{<a>}=<a5>/5$. Hence $I=2\pi\cdot2\cdot\dfrac{<a5>}{5}=<ok>$.', a=a, a5=a ** 5, ok=ok)))
    if v == 2:
        b = a + rng.choice([1, 2])
        ok = 4 * pi * (b - a)
        q = T(r'Cho $V$ là miền nằm giữa hai mặt cầu $x^2 + y^2 + z^2 = <a2>$ và $x^2 + y^2 + z^2 = <b2>$. Giá trị của tích phân $\displaystyle\iiint_V \dfrac{dxdydz}{x^2 + y^2 + z^2}$ bằng', a2=a * a, b2=b * b)
        return NQ(q, ok, [2 * pi * (b - a), 4 * pi * (b * b - a * a), R(4, 3) * pi * (b ** 3 - a ** 3), 4 * pi * b], steps(T(r'In tọa độ cầu, $\frac1{x^2+y^2+z^2}dV=\frac1{\rho^2}\rho^2\sin\theta\,d\rho d\theta d\varphi$, nên $I=\int_0^{2\pi}d\varphi\int_0^\pi\sin\theta\,d\theta\int_{<a>}^{<b>}1\,d\rho$.', a=a, b=b), T(r'Tích phân bán kính là $[\,\rho\,]_{<a>}^{<b>}=<b>-<a>$; tích phân góc là $2\pi\cdot2$. Vậy $I=2\pi\cdot2\cdot(<b>-<a>)=<ok>$.', a=a, b=b, ok=ok)))
    if v == 3:
        ok = R(a ** 6, 48)
        q = T(r'Cho $V$ là phần của hình cầu $x^2 + y^2 + z^2 \le <a2>$ nằm trong góc phần tám thứ nhất ($x \ge 0,\ y \ge 0,\ z \ge 0$). Giá trị của tích phân $\displaystyle\iiint_V xyz\,dxdydz$ bằng', a2=a * a)
        return NQ(q, ok, [R(a ** 6, 6), R(a ** 6, 24), R(a ** 6, 8), R(a ** 6, 96)], steps(r'$xyz = \rho^3\sin^2\theta\cos\theta\sin\varphi\cos\varphi$, $dV = \rho^2\sin\theta\,d\rho\,d\theta\,d\varphi$', T(r'$I = \displaystyle\int_0^{\pi/2}\sin\varphi\cos\varphi\,d\varphi\int_0^{\pi/2}\sin^3\theta\cos\theta\,d\theta\int_0^{<a>}\rho^5\,d\rho$', a=a), T(r'$= \dfrac12\cdot\dfrac14\cdot\dfrac{<a6>}{6} = <ok>$', a6=a ** 6, ok=ok)))
    ok = pi * R(a ** 4, 8)
    q = T(r'Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \le <a2>$ và phía trên mặt nón $z = \sqrt{x^2 + y^2}$. Giá trị của tích phân $\displaystyle\iiint_V z\,dxdydz$ bằng', a2=a * a)
    return NQ(q, ok, [pi * R(a ** 4, 4), pi * R(a ** 4, 16), pi * R(a ** 4, 2), pi * R(a ** 3, 8) if a != 1 else pi / 3], steps(T(r'Tọa độ cầu, $0 \le \theta \le \dfrac{\pi}{4}$: $I = \displaystyle\int_0^{2\pi}d\varphi\int_0^{\pi/4}\cos\theta\sin\theta\,d\theta\int_0^{<a>}\rho^3\,d\rho$', a=a), T(r'$= 2\pi\cdot\dfrac14\cdot\dfrac{<a4>}{4} = <ok>$', a4=a ** 4, ok=ok)))


# ---------- Câu 39: công thức Green trên miền giới hạn bởi parabol và đường thẳng ----------
def h39(rng, k):
    a, b, c = rng.choice([1, 2, 3]), rng.choice([1, 2, 3]), rng.choice([1, 2, 3])
    ok = integrate(integrate(b * y + a, (y, x ** 2, c * x)), (x, 0, c))
    q = T(r'Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = <cx>$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\displaystyle\oint_C (<P>)\,dx + <Q>\,dy$ bằng', cx=c * x, P=x - a * y, Q=b * x * y)
    wrong = integrate(integrate(b * y - a, (y, x ** 2, c * x)), (x, 0, c))
    inner = sp.expand(integrate(b * y + a, (y, x ** 2, c * x)))
    ex = steps(T(r'$\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y} = <e>$', e=b * y + a),
               T(r'$I = \displaystyle\int_0^{<c>}dx\int_{x^2}^{<cx>}(<e>)\,dy = \int_0^{<c>}\left(<i>\right)dx$', c=c, cx=c * x, e=b * y + a, i=inner),
               T(r'$= \left[<F>\right]_0^{<c>} = <ok>$', F=integrate(inner, x), c=c, ok=ok))
    return NQ(q, ok, [wrong, -ok, ok * 2, integrate(integrate(b * y + a, (y, 0, c * x)), (x, 0, c))], ex)


# ---------- Câu 40–42: nhóm câu hỏi về chéo hóa ----------
def hg1(rng, k):
    l1, l2 = rng.sample([-2, -1, 1, 2, 3, 4], 2)
    P = unimod(rng)
    A = P * sp.diag(l1, l2) * P.inv()
    if A[0, 1] == 0 or A[1, 0] == 0:
        raise Retry
    nn, c = rng.choice([4, 5]), rng.choice([1, 2, 3])
    stem = T(r'Cho ma trận $A = <A>$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.', A=pmat(A))
    pol = lambda l: l * l - c * l
    qs = [NQ('Tổng bình phương các trị riêng của $A$ bằng', l1 * l1 + l2 * l2, [(l1 + l2) ** 2, l1 * l2, l1 + l2, abs(l1 * l2) + 1], T(r'Phương trình đặc trưng $\lambda^2 - (<t>)\lambda + (<d>) = 0$ có nghiệm $<a>$ và $<b>$.', t=l1 + l2, d=l1 * l2, a=l1, b=l2)),
          NQ(T(r'Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{<n>}$ bằng', n=nn), l1 ** nn + l2 ** nn, [(l1 + l2) ** nn, (l1 * l2) ** nn, nn * (l1 + l2), l1 ** nn - l2 ** nn], T(r'$A^{<n>} = PD^{<n>}P^{-1}$ có cùng vết với $D^{<n>}$: $(<a>)^{<n>} + (<b>)^{<n>}$.', n=nn, a=l1, b=l2)),
          NQ(T(r'Định thức của ma trận $A^2 - <c>A$ bằng', c='' if c == 1 else c), pol(l1) * pol(l2), [(l1 * l2) ** 2 - c * l1 * l2, pol(l1) + pol(l2), -pol(l1) * pol(l2), (l1 * l2) ** 2], T(r'$A^2 - <c>A$ có các trị riêng $\lambda^2 - <c>\lambda$: $<p>$ và $<q>$; định thức bằng tích của chúng.', c=c, p=pol(l1), q=pol(l2)))]
    return {'stem': stem, 'questions': qs}


# ---------- Câu 43–45: giá trị lớn nhất, nhỏ nhất trên miền đóng ----------
def hg2(rng, k):
    (a, b, h), mul = rng.choice([(3, 4, 5), (4, 3, 5), (-3, 4, 5), (3, -4, 5), (-4, -3, 5), (6, 8, 10), (8, -6, 10)]), rng.choice([2, 3, 4])
    Rr = h * mul
    stem = T(r'Cho hàm số $f(x,y) = <f>$ xét trên hình tròn đóng $D = \{(x,y): x^2 + y^2 \le <R2>\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = <R2>$.', f=x ** 2 + y ** 2 - 2 * a * x - 2 * b * y, R2=Rr * Rr)
    fmin, fmax = -(a * a + b * b), Rr * Rr + 2 * Rr * h
    xmax = R(-a * Rr, h)
    qs = [NQ('Giá trị nhỏ nhất của $f$ trên $D$ bằng', fmin, [Rr * Rr - 2 * Rr * h, 0, -fmin, fmin - 1], T(r'Điểm dừng $(<a>;<b>)$ nằm trong $D$ và $f = (<u>)^2 + (<w>)^2 - <s>$.', a=a, b=b, u=x - a, w=y - b, s=a * a + b * b)),
          NQ('Giá trị lớn nhất của $f$ trên $D$ bằng', fmax, [Rr * Rr, Rr * Rr - 2 * Rr * h, Rr * Rr + 2 * (abs(a) + abs(b)) * Rr, fmax + a * a + b * b], T(r'Trên biên $f = <R2> - 2(<e>)$, lớn nhất khi $<e>$ nhỏ nhất, tức bằng $-<R>\cdot<h>$.', R2=Rr * Rr, e=a * x + b * y, R=Rr, h=h)),
          NQ('Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng', xmax, [-xmax, sp.Integer(a), R(-b * Rr, h), sp.Integer(-a)], T(r'Điểm đó nằm trên biên, ngược hướng với véc tơ $(<a>;<b>)$: $\left(<x>;<y>\right)$.', a=a, b=b, x=xmax, y=R(-b * Rr, h)))]
    return {'stem': stem, 'questions': qs}


# ---------- Câu 46: định thức cấp 4 (trả lời ngắn) ----------
H46 = [
    (r'\min\{i,j\}', lambda i, j: min(i, j)), (r'\max\{i,j\}', lambda i, j: max(i, j)), (r'|i - j|', lambda i, j: abs(i - j)),
    (r'i + j - \min\{i,j\}\cdot\min\{i,j\}', lambda i, j: i + j - min(i, j) ** 2), (r'2\min\{i,j\} - 1', lambda i, j: 2 * min(i, j) - 1),
    (r'\min\{i,j\} + \max\{i,j\}^2', lambda i, j: min(i, j) + max(i, j) ** 2), (r'|i - j| + 1', lambda i, j: abs(i - j) + 1),
    (r'i\cdot j + \min\{i,j\}', lambda i, j: i * j + min(i, j)), (r'\max\{i,j\} - |i - j|^2', lambda i, j: max(i, j) - (i - j) ** 2),
]


def h46(rng, k):
    name, fn = H46[(k + rng.randint(0, 3)) % len(H46)]
    A = Matrix(4, 4, lambda i, j: fn(i + 1, j + 1))
    d = A.det()
    if d == 0:
        raise Retry
    c = rng.choice([2, -1, R(1, 2)])
    v = rng.randint(0, 1)
    if v == 0:
        expr, ok, how = T(r'\det\left(<c>A\right)', c=c), c ** 4 * d, T(r'$\left(<c>\right)^4\cdot\det A$', c=c)
    else:
        expr, ok, how = r'\det\left(A^{-1}A^TA\right)', d, r'$\dfrac{1}{\det A}\cdot\det A\cdot\det A$'
    if sp.nsimplify(ok).q > 4 or abs(ok) > 5000:
        raise Retry
    q = T(r'Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = <f>$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $<e>$.', f=name, e=expr)
    return SQ(q, short_num(ok), T(r'$A = <A>$, $\det A = <d>$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng ', A=pmat(A), d=d) + how + T(' $= <ok>$.', ok=ok))


# ---------- Câu 47: cực trị có điều kiện (trả lời ngắn) ----------
def h47(rng, k):
    v = k % 3
    if v == 0:
        (a, b, c, h), mul = rng.choice([(1, 2, 2, 3), (2, 1, 2, 3), (2, 3, 6, 7), (2, 2, 1, 3), (1, 4, 8, 9), (4, 4, 7, 9)]), rng.choice([1, 2, 3, 4])
        cc = h * mul
        return SQ(T(r'Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $<e> = <c>$.', e=a * x + b * y + c * z, c=cc * h),
                  str(cc * cc), T(r'Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(<a>;<b>;<c>)$ với $t = \dfrac{<k>}{<s>}$; $f_{\min} = \dfrac{<k>^2}{<s>} = <ok>$.', a=a, b=b, c=c, k=cc * h, s=h * h, ok=cc * cc))
    if v == 1:
        (a, b, c, h), r = rng.choice([(1, 2, 2, 3), (2, 1, 2, 3), (2, 3, 6, 7), (2, 2, 1, 3), (1, 4, 8, 9)]), rng.choice([1, 2, 3, 4, 5])
        return SQ(T(r'Tìm giá trị lớn nhất của hàm số $f(x,y,z) = <e>$ trên mặt cầu $x^2 + y^2 + z^2 = <r2>$.', e=a * x + b * y + c * z, r2=r * r),
                  str(r * h), T(r'Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(<a>;<b>;<c>)$; $f_{\max} = <r>\sqrt{<a>^2 + <b>^2 + <c>^2} = <ok>$.', a=a, b=b, c=c, r=r, ok=r * h))
    a, b = rng.choice([(2, 3), (3, 2), (1, 2), (2, 1), (3, 4), (1, 4), (2, 5)])
    mul = rng.choice([2, 4, 6])
    return SQ(T(r'Tìm giá trị lớn nhất của hàm số $f(x,y) = <m>xy$ với điều kiện $\dfrac{x^2}{<a2>} + \dfrac{y^2}{<b2>} = 1$.', m=mul, a2=a * a, b2=b * b),
              str(mul * a * b // 2), T(r'Đặt $x = <a>\cos t,\ y = <b>\sin t$: $f = <m>\cdot<a>\cdot<b>\sin t\cos t$, lớn nhất bằng $\dfrac{<m>\cdot<a>\cdot<b>}{2} = <ok>$.', a=a, b=b, m=mul, ok=mul * a * b // 2))


# ---------- Câu 49: bài toán Cauchy có cộng hưởng (trả lời ngắn) ----------
def h49(rng, k):
    r1, r2 = rng.choice([(1, 2), (2, 1), (1, -1), (2, 3), (1, 3), (2, -1)])
    A, B, K, x0 = rng.choice([0, 1, 2]), rng.choice([0, 1, -1]), rng.choice([1, 2, 3, -1]), rng.choice([1, 2])
    c = K * (r1 - r2)
    val = A * math.exp(r1 * x0) + B * math.exp(r2 * x0) + K * x0 * math.exp(r1 * x0)
    if abs(val) > 5000 or abs(val) < 3 or abs(val - round(val)) > 0.47:
        raise Retry
    q = T(r'Gọi $y = y(x)$ là nghiệm của bài toán $<o>$ với điều kiện $y(0) = <y0>;\ y\'(0) = <y1>$. Tính $y(<x0>)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.', o=ode2(-(r1 + r2), r1 * r2, term(c, ex_(r1), True)), y0=A + B, y1=A * r1 + B * r2 + K, x0=x0)
    ex = T(r'$k = <r1>$ là nghiệm đơn của phương trình đặc trưng nên $y^* = <yp>$; $y = <yy>$; $y(<x0>) \approx <v>$.', r1=r1, yp=form((K, 'x' + ex_(r1))),
           yy=form((A, ex_(r1)), (B, ex_(r2)), (K, 'x' + ex_(r1))), x0=x0, v=vn(val, 2).replace(',', '{,}'))
    return SQ(q, str(int(round(val))), ex)


# ---------- Câu 50: thể tích bằng tọa độ trụ / cầu (trả lời ngắn) ----------
def h50(rng, k):
    v = k % 3
    if v == 0:
        r0 = rng.choice([1, 2, 3, 4] if k < 20 else [5, 6])
        c = r0 * r0 + r0
        V = sp.nsimplify(2 * integrate((c - rr ** 2 - rr) * rr, (rr, 0, r0)))
        body = T(r'là vật thể giới hạn bởi mặt nón $z = \sqrt{x^2 + y^2}$ và mặt paraboloid $z = <c> - x^2 - y^2$', c=c)
        ex = T(r'Hai mặt cắt nhau khi $r = <c> - r^2$, tức $r = <r0>$: $V = \displaystyle\int_0^{2\pi}d\varphi\int_0^{<r0>}(<c> - r^2 - r)\,r\,dr = <V>\pi$.', c=c, r0=r0, V=V)
    elif v == 1:
        a, b, c = rng.choice([(1, 2, 3), (1, 1, 3), (2, 3, 3), (1, 3, 6), (3, 3, 2), (2, 2, 3), (1, 2, 6), (3, 4, 2)])
        V = R(4 * a * b * c, 3)
        body = T(r'là vật thể giới hạn bởi mặt elipxoit $\dfrac{x^2}{<a2>} + \dfrac{y^2}{<b2>} + \dfrac{z^2}{<c2>} = 1$', a2=a * a, b2=b * b, c2=c * c)
        ex = T(r'Đổi biến $x = <a>u,\ y = <b>v,\ z = <c>w$ (Jacobian $<j>$) đưa về hình cầu đơn vị: $V = <j>\cdot\dfrac{4\pi}{3} = <V>\pi$.', a=a, b=b, c=c, j=a * b * c, V=V)
    else:
        a = rng.choice([1, 2, 3])
        ang, cone = rng.choice([(pi / 3, r'z = \sqrt{\dfrac{x^2 + y^2}{3}}'), (pi / 2, 'z = 0')])
        V = sp.nsimplify(simplify(2 * integrate(sin(th), (th, 0, ang)) * R(a ** 3, 3)))
        body = T(r'là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \le <a2>$ và phía trên mặt $<c>$', a2=a * a, c=cone)
        ex = T(r'Tọa độ cầu: $V = \displaystyle\int_0^{2\pi}d\varphi\int_0^{<t>}\sin\theta\,d\theta\int_0^{<a>}\rho^2\,d\rho = <V>\pi$.', t=ang, a=a, V=V)
    if V.q == 1:
        return SQ('Trong hệ trục tọa độ $Oxyz$, cho $V$ ' + body + r'. Biết thể tích của $V$ bằng $k\pi$, tính $k$.', str(V.p), ex)
    return SQ('Trong hệ trục tọa độ $Oxyz$, cho $V$ ' + body + T(r'. Biết thể tích của $V$ bằng $k\pi$, tính $<d>k$.', d=V.q), str(V.p), ex)


# vị trí trong ma trận đề -> dạng bài khó hơn
HARD_MCQ = {1: h1, 3: h3, 4: h4, 5: h5, 6: h6, 7: h7, 8: h8, 9: h9, 10: h10, 11: h11, 12: h12, 13: h13, 17: h17, 18: h18, 19: h19,
            20: h20, 21: h21, 22: h22, 25: h25, 26: h26, 27: h27, 28: h28, 32: h32, 33: h33, 34: h34, 36: h36, 37: h37, 39: h39}
HARD_GROUPS = {0: hg1, 1: hg2}
HARD_SHORT = {0: h46, 1: h47, 3: h49, 4: h50}
