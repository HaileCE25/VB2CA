// ĐỀ SỐ 07 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-07",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 07",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Tiêu dùng và tài chính",
  "prompt": "Minh, 24 tuổi, đi làm được hai năm với thu nhập 12 triệu đồng mỗi tháng. Minh dùng dịch vụ “mua trước, trả sau” để đổi điện thoại đời mới, thanh toán trả góp một chuyến du lịch “cho bằng bạn bằng bè” và thường xuyên đặt hàng trong các đợt giảm giá lúc nửa đêm. Đến khi mẹ ốm cần một khoản tiền gấp, Minh nhận ra tài khoản tiết kiệm của mình bằng không, còn các khoản phải trả hằng tháng đã chiếm hơn nửa thu nhập. Minh nói: “Mình có tiêu gì to tát đâu, toàn những khoản nhỏ.”",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về câu chuyện trên và về thói quen tiêu dùng, kỷ luật tài chính cá nhân của người trẻ hiện nay.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Một xưởng có ba loại thức ăn chăn nuôi I, II, III. Hàm lượng (đạm; béo; xơ), tính bằng đơn vị dinh dưỡng trong mỗi kg của từng loại, lần lượt được cho bởi các véc tơ $u_1 = (2;2;3),\\ u_2 = (1;2;3),\\ u_3 = (4;1;4)$ trong $\\mathbb{R}^3$. Xưởng trộn $a$ kg loại I, $b$ kg loại II và $c$ kg loại III để được một mẻ thức ăn có tổng hàm lượng dinh dưỡng là $v = (19;8;22)$, tức là $v = au_1 + bu_2 + cu_3$. Giá trị của $a + 3 b + 2 c$ bằng",
   "options": [
    "$12$.",
    "$6$.",
    "$9$.",
    "$13$."
   ],
   "answer": 0,
   "explain": "$v = au_1 + bu_2 + cu_3 \\Leftrightarrow \\begin{cases}2 a + b + 4 c = 19\\\\ 2 a + 2 b + c = 8\\\\ 3 a + 3 b + 4 c = 22\\end{cases}$<br>Giải hệ bằng phép khử Gauss: $a = 1,\\ b = 1,\\ c = 4$<br>$a + 3 b + 2 c = 12$",
   "note": "Viết đẳng thức véc tơ theo từng tọa độ để được hệ phương trình tuyến tính; với phương trình véc tơ, chuyển vế như phương trình số."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, hệ $\\{u_1(-2;-1;2),\\ u_2(-1;-2;-2),\\ u_3(-3;3;12)\\}$ phụ thuộc tuyến tính, tức tồn tại các số $x, y$ sao cho $xu_1 + yu_2 + u_3 = 0$. Giá trị của $x\\cdot y$ bằng",
   "options": [
    "$-9$.",
    "$0$.",
    "$6$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "$xu_1 + yu_2 = -u_3$; viết theo từng tọa độ được hệ ba phương trình hai ẩn<br>Giải hai phương trình đầu (phương trình thứ ba nghiệm đúng): $x = -3,\\ y = 3$<br>$x\\cdot y = -9$",
   "note": "Chuyển $u_3$ sang vế phải thì đổi dấu: $xu_1 + yu_2 = -u_3$."
  },
  {
   "q": "Một trạm quan trắc ghi lại 5 bộ số liệu, mỗi bộ gồm 4 chỉ số và được xem như một véc tơ trong $\\mathbb{R}^4$: $u_1 = (-2;-1;0;0),\\ u_2 = (1;-2;3;-2),\\ u_3 = (-5;0;-3;2),\\ u_4 = (5;0;3;-2),\\ u_5 = (-3;-4;3;-2)$. Một bộ số liệu là “thừa” nếu nó là tổ hợp tuyến tính của các bộ còn lại được giữ. Số lớn nhất các bộ số liệu có thể giữ lại sao cho chúng độc lập tuyến tính (tức là hạng của hệ véc tơ đã cho) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$5$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$u_3 = 2 u_{1} - u_{2}$; $u_4 = - 2 u_{1} + u_{2}$; $u_5 = 2 u_{1} + u_{2}$; còn $u_1, u_2$ độc lập tuyến tính nên hạng bằng 2<br>Kết quả: $2$",
   "note": "Hạng = số hàng khác không của dạng bậc thang; số véc tơ thừa = số véc tơ $-$ hạng."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 0 \\\\ 1 & 1\\end{pmatrix}$. Tổng tất cả các phần tử của ma trận $A^{10}$ bằng",
   "options": [
    "$12$.",
    "$3$.",
    "$10$.",
    "$21$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}1 & 0 \\\\ 2 & 1\\end{pmatrix},\\ A^3 = \\begin{pmatrix}1 & 0 \\\\ 3 & 1\\end{pmatrix}$; quy nạp: $A^n = \\begin{pmatrix}1 & 0 \\\\ n & 1\\end{pmatrix}$<br>$A^{10} = \\begin{pmatrix}1 & 0 \\\\ 10 & 1\\end{pmatrix}$, tổng các phần tử: $12$",
   "note": "Tính $A^2, A^3$ để thấy quy luật; với $A = cI + N$, $N^2 = 0$ thì $A^n = c^nI + nc^{n-1}N$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & -2 & -2 \\\\ -2 & m & -2 \\\\ -2 & -2 & m\\end{pmatrix}$ ($m$ là tham số). Biết rằng một ma trận vuông khả nghịch khi và chỉ khi định thức của nó khác 0. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-6;6]$ để $A$ khả nghịch?",
   "options": [
    "$11$.",
    "$13$.",
    "$10$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$\\det A = \\left(m - 4\\right) \\left(m + 2\\right)^{2}$<br>$\\det A = 0 \\Leftrightarrow m \\in \\{-2;4\\}$<br>Đoạn $[-6;6]$ có $13$ số nguyên, trong đó $2$ số làm định thức bằng 0<br>Số giá trị cần tìm: $13 - 2 = 11$",
   "note": "$A$ khả nghịch $\\Leftrightarrow \\det A \\ne 0$: đếm các số nguyên trong đoạn rồi trừ các nghiệm của $\\det A = 0$ nằm trong đoạn."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cùng cấp $n \\ge 2$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$(AB)^T = B^TA^T$.",
    "$(AB)^T = A^TB^T$.",
    "$(A + B)^2 = A^2 + 2AB + B^2$.",
    "Nếu $AB = 0$ thì $A = 0$ hoặc $B = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(AB)^T = B^TA^T$. Phần tử hàng $i$, cột $j$ của cả hai vế đều bằng $\\sum_k a_{jk}b_{ki}$.<br><b>Sai:</b> $(AB)^T = A^TB^T$. Phải đảo thứ tự: $A^TB^T = (BA)^T$, nói chung khác $(AB)^T$.<br><b>Sai:</b> $(A + B)^2 = A^2 + 2AB + B^2$. $(A + B)^2 = A^2 + AB + BA + B^2$, chỉ bằng vế phải khi $AB = BA$.<br><b>Sai:</b> Nếu $AB = 0$ thì $A = 0$ hoặc $B = 0$. $A = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$, $B = \\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$ đều khác ma trận không nhưng $AB = 0$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 khả nghịch thỏa mãn $A^2 = 2A$. Định thức của ma trận $A$ bằng",
   "options": [
    "$8$.",
    "$2$.",
    "$6$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $A^{-1}$ được $A = 2I$, nên $\\det A = \\left(2\\right)^{3}$<br>Kết quả: $8$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{4x} - e^{-4x} - 8x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$128$.",
    "$64$.",
    "$8$.",
    "$\\dfrac{64}{3}$."
   ],
   "answer": 0,
   "explain": "$e^{u} - e^{-u} - 2u = 2\\left(u + \\dfrac{u^3}{6}\\right) - 2u + o(u^3) = \\dfrac{u^3}{3} + o(u^3)$, $u = 4x$<br>$x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{64/3}{1/6} = 128$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Cho hàm số $f(x) = \\begin{cases}\\dfrac{1 - \\cos ax}{x^2} & \\text{khi } x < 0\\\\[2mm] b & \\text{khi } x = 0\\\\[1mm] \\dfrac{e^{8x} - 1}{x} & \\text{khi } x > 0\\end{cases}$ liên tục trên $\\mathbb{R}$. Giá trị của $a^2 + b$ bằng",
   "options": [
    "$24$.",
    "$16$.",
    "$12$.",
    "$64$."
   ],
   "answer": 0,
   "explain": "$\\lim\\limits_{x\\to0^+}\\dfrac{e^{8x} - 1}{x} = 8$<br>$\\lim\\limits_{x\\to0^-}\\dfrac{1 - \\cos ax}{x^2} = \\dfrac{a^2}{2}$<br>Liên tục tại 0: $\\dfrac{a^2}{2} = b = 8 \\Rightarrow a^2 = 16,\\ b = 8$<br>$a^2 + b = 24$",
   "note": "Liên tục tại $x_0$ $\\Leftrightarrow$ giới hạn trái = giới hạn phải = $f(x_0)$; giới hạn hữu hạn mà mẫu tiến về 0 thì tử cũng phải tiến về 0."
  },
  {
   "q": "Cho hàm số $f(x) = x^{x}$ $(x > 0)$. Bằng cách lấy lôgarit hai vế rồi đạo hàm, giá trị của $f'(e)$ bằng",
   "options": [
    "$2 e^{e}$.",
    "$e^{e}$.",
    "$\\left(1 + e\\right) e^{e}$.",
    "$1 + 2 e^{e}$."
   ],
   "answer": 0,
   "explain": "$\\ln f = x\\ln x \\Rightarrow \\dfrac{f'}{f} = (\\ln x + 1)$<br>$f'(x) = x^{x}(\\ln x + 1)$<br>$f'(e) = e^{e}\\cdot2 = 2 e^{e}$",
   "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} y^{2} - x^{2}$. Giá trị của biểu thức $\\Delta f = f''_{xx} + f''_{yy}$ tại điểm $(2;2)$ bằng",
   "options": [
    "$14$.",
    "$6$.",
    "$8$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x y^{2} - 2 x \\Rightarrow f''_{xx} = 2 \\left(y^{2} - 1\\right)$<br>$f'_y = 2 x^{2} y \\Rightarrow f''_{yy} = 2 x^{2}$<br>Tại $(2;2)$: $f''_{xx} + f''_{yy} = (6) + (8) = 14$",
   "note": "$\\Delta f$ chỉ gồm $f''_{xx}$ và $f''_{yy}$, không có đạo hàm hỗn hợp."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^2y + xy^2$. Vi phân cấp hai $d^2f = f''_{xx}dx^2 + 2f''_{xy}dxdy + f''_{yy}dy^2$ của hàm số tại điểm $(2;1)$ là",
   "options": [
    "$2dx^2 + 12dxdy + 4dy^2$.",
    "$2dx^2 + 6dxdy + 4dy^2$.",
    "$4dx^2 + 12dxdy + 2dy^2$.",
    "$2dx^2 + 12dxdy$."
   ],
   "answer": 0,
   "explain": "$f''_{xx} = 2y,\\quad f''_{xy} = 2x + 2y,\\quad f''_{yy} = 2x$<br>Tại $(2;1)$: $f''_{xx} = 2,\\ f''_{xy} = 6,\\ f''_{yy} = 4$<br>$d^2f = 2dx^2 + 12dxdy + 4dy^2$",
   "note": "$df = f'_xdx + f'_ydy$; khi tính gần đúng, $\\Delta x$ và $\\Delta y$ có thể mang dấu âm."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} + 3 x y^{2} - 15 x - 12 y$. Hàm số có bao nhiêu điểm dừng?",
   "options": [
    "$4$.",
    "$2$.",
    "$5$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} + 3 y^{2} - 15,\\quad f'_y = 6 x y - 12$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(-2;-1)$, $(-1;-2)$, $(1;2)$, $(2;1)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $108$, $-108$, $-108$, $108$<br>Số điểm dừng: $4$; số điểm cực trị (có $AC - B^2 > 0$): $2$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1}{n\\ln n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+1}{n^3+2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(1 - \\cos\\dfrac1n\\right)$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{5^n}{n\\cdot 4^n}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$2$.",
    "$0$.",
    "$1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\displaystyle\\int_2^{+\\infty}\\dfrac{dx}{x\\ln x} = \\left[\\ln\\ln x\\right]_2^{+\\infty} = +\\infty$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 2: $u_n \\sim \\dfrac{1}{n^2}$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 3: $u_n \\sim \\dfrac{1}{2n^2}$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 4: $u_n = \\dfrac1n\\left(\\dfrac54\\right)^n \\not\\to 0$ $\\Rightarrow$ phân kỳ<br>Số chuỗi hội tụ: $2$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{2^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n\\sqrt n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\sin\\dfrac1n$. Có bao nhiêu chuỗi bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối) trong bốn chuỗi trên?",
   "options": [
    "$2$.",
    "$4$.",
    "$0$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\frac{|u_{n+1}|}{|u_n|} \\to \\frac12 < 1$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 2: $\\sum\\frac{1}{n^{3/2}}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 3: $\\frac1n \\downarrow 0$ (Leibniz), $\\sum\\frac1n$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 4: $\\sin\\frac1n \\downarrow 0$ (Leibniz), $\\sin\\frac1n \\sim \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Số chuỗi bán hội tụ: $2$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình Bernoulli (với $\\alpha \\ne 0,\\ \\alpha \\ne 1$)?",
   "options": [
    "$xy' + y = y^2\\ln x$.",
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$.",
    "$y' = e^{x - y}$.",
    "$y' = \\dfrac{x + y}{x - y}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $xy' + y = y^2\\ln x$ — Dạng $y' + p(x)y = q(x)y^{\\alpha}$<br><b>Sai:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = e^{x - y}$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = \\dfrac{x + y}{x - y}$ — là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' - \\dfrac{3y}{x} = 2x^{3}$ $(x > 0)$ thỏa mãn $y(1) = 2$. Giá trị của $y(2)$ bằng",
   "options": [
    "$32$.",
    "$16$.",
    "$6$.",
    "$48$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{3}$: $\\left(\\dfrac{y}{x^{3}}\\right)' = 2$<br>$\\dfrac{y}{x^{3}} = 2 x + C \\Rightarrow y = x^{3}(2 x + C)$<br>$y(1) = 2 + C = 2 \\Rightarrow C = 0$<br>$y(2) = 8\\cdot(4 + 0) = 32$",
   "note": "Đưa về dạng chuẩn rồi mới tìm thừa số tích phân $e^{\\int p\\,dx}$ (hoặc kiểm tra $P'_y = Q'_x$); hằng số $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bệnh nhân được truyền thuốc liên tục qua đường tĩnh mạch. Nồng độ thuốc trong máu $y(t)$ (mg/lít) sau $t$ giờ thỏa mãn phương trình $y' = k(80 - y)$ với $k = \\dfrac{\\ln 2}{4}$ và $y(0) = 0$. Nồng độ thuốc trong máu sau 8 giờ bằng",
   "options": [
    "$60$ mg/lít.",
    "$70$ mg/lít.",
    "$20$ mg/lít.",
    "$80$ mg/lít."
   ],
   "answer": 0,
   "explain": "$y' + ky = 80k$ (tuyến tính cấp một) $\\Rightarrow y = 80 + Ce^{-kt}$<br>$y(0) = 0 \\Rightarrow C = -80$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{4}\\cdot8} = 2^{-2} = \\dfrac{1}{4}$<br>$y(8) = 80 + \\dfrac{-80}{4} = 60$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y'' - 3y' + 2y = -e^{2x}$ là",
   "options": [
    "$y = C_1e^{2x} + C_2e^{x} - xe^{2x}$.",
    "$y = C_1e^{2x} + C_2e^{x} + xe^{2x}$.",
    "$y = C_1e^{2x} + C_2e^{x} - e^{2x}$.",
    "$y = C_1e^{2x} + C_2e^{x} - xe^{x}$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} - 3 k + 2 = 0 \\Rightarrow k = 2,\\ k = 1$<br>$\\overline{y} = C_1e^{2x} + C_2e^{x}$<br>Vế phải chứa $e^{2x}$ và $k = 2$ là nghiệm đơn: $y^* = Axe^{2x}$<br>Thay vào: $A\\cdot(1)e^{2x} = -e^{2x} \\Rightarrow A = -1$<br>$y = C_1e^{2x} + C_2e^{x} - xe^{2x}$",
   "note": "Hai nghiệm thực phân biệt: $C_1e^{k_1x} + C_2e^{k_2x}$; nghiệm kép: $(C_1 + C_2x)e^{kx}$; nghiệm phức $\\alpha \\pm i\\beta$: $e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$."
  },
  {
   "q": "Cho $D$ là miền tam giác giới hạn bởi các đường thẳng $y = x,\\ y = 2x$ và $x = 1$. Giá trị của tích phân $\\displaystyle\\iint_D xy\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{3}{8}$.",
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{1}{8}$.",
    "$\\dfrac{3}{4}$."
   ],
   "answer": 0,
   "explain": "Miền $D$: $0 \\le x \\le 1,\\ x \\le y \\le 2x$<br>$I = \\displaystyle\\int_0^{1}dx\\int_x^{2x}xy\\,dy = \\int_0^{1}\\dfrac{3 x^{3}}{2}\\,dx$<br>$= \\left[\\dfrac{3 x^{4}}{8}\\right]_0^{1} = \\dfrac{3}{8}$",
   "note": "Tích phân trong lấy theo $y$ với cận phụ thuộc $x$; kết quả là hàm của $x$ rồi mới lấy tích phân ngoài."
  },
  {
   "q": "Cho hàm số $f(x,y)$ liên tục trên hình chữ nhật $D = [a;b]\\times[c;d]$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\displaystyle\\iint_D f\\,dxdy = \\int_a^b dx\\int_c^d f(x,y)\\,dy = \\int_c^d dy\\int_a^b f(x,y)\\,dx$.",
    "$\\displaystyle\\iint_D f\\,dxdy = \\int_a^b f(x,y)\\,dx\\cdot\\int_c^d f(x,y)\\,dy$.",
    "$\\displaystyle\\iint_D f\\,dxdy = \\int_a^b dy\\int_c^d f(x,y)\\,dx$.",
    "Đổi thứ tự lấy tích phân làm kết quả đổi dấu."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\displaystyle\\iint_D f\\,dxdy = \\int_a^b dx\\int_c^d f(x,y)\\,dy = \\int_c^d dy\\int_a^b f(x,y)\\,dx$. Đây là định lí Fubini: với hàm liên tục trên hình chữ nhật, hai thứ tự lấy tích phân cho cùng kết quả.<br><b>Sai:</b> $\\displaystyle\\iint_D f\\,dxdy = \\int_a^b f(x,y)\\,dx\\cdot\\int_c^d f(x,y)\\,dy$. Chỉ tách được thành tích khi $f(x,y) = g(x)h(y)$, và khi đó tích là $\\displaystyle\\int_a^b g(x)\\,dx\\cdot\\int_c^d h(y)\\,dy$.<br><b>Sai:</b> $\\displaystyle\\iint_D f\\,dxdy = \\int_a^b dy\\int_c^d f(x,y)\\,dx$. Cận $a, b$ là của biến $x$ và cận $c, d$ là của biến $y$.<br><b>Sai:</b> Đổi thứ tự lấy tích phân làm kết quả đổi dấu. Kết quả không đổi (định lí Fubini)."
  },
  {
   "q": "Một xưởng dùng 3 loại nguyên liệu để làm 2 loại linh kiện, rồi dùng linh kiện để lắp 3 loại sản phẩm. Ma trận $R = \\begin{pmatrix}3 & 1 \\\\ 1 & 3 \\\\ 4 & 1\\end{pmatrix}$ cho số đơn vị nguyên liệu loại $i$ cần cho 1 linh kiện loại $j$; ma trận $C = \\begin{pmatrix}4 & 4 & 1 \\\\ 1 & 3 & 2\\end{pmatrix}$ cho số linh kiện loại $i$ cần cho 1 sản phẩm loại $j$. Xưởng nhận đơn hàng gồm $20, 20, 10$ sản phẩm các loại 1, 2, 3. Tổng số đơn vị nguyên liệu (cả ba loại) cần dùng cho đơn hàng bằng",
   "options": [
    "$1860$.",
    "$270$.",
    "$650$.",
    "$1250$."
   ],
   "answer": 0,
   "explain": "Số linh kiện: $C\\cdot(20;20;10)^T = (170;100)^T$; nguyên liệu: $R\\cdot(170;100)^T = (610;470;780)^T$, tổng bằng $1860$<br>Kết quả: $1860$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & -1 & 3 & 1 \\\\ 3 & -1 & 3 & -1 \\\\ 8 & -4 & 12 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 0$.",
    "$m = 1$.",
    "$m = -1$.",
    "$m = 2$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $2$ lần hàng 1 cộng $2$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = 0$; ngược lại hạng bằng 3<br>Kết quả: $m = 0$",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}-1 & -1 \\\\ 2 & 0\\end{pmatrix}$ và $B = \\begin{pmatrix}0 & -6 \\\\ 4 & -4\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $2X - 2A = B^T$. Phần tử thuộc hàng 2 và cột 1 của $X$ bằng",
   "options": [
    "$-1$.",
    "$4$.",
    "$1$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "$B^T = \\begin{pmatrix}0 & 4 \\\\ -6 & -4\\end{pmatrix}$ (chuyển vị: hàng thành cột)<br>$2X = B^T + 2A = \\begin{pmatrix}-2 & 2 \\\\ -2 & -4\\end{pmatrix}$<br>$X = \\begin{pmatrix}-1 & 1 \\\\ -1 & -2\\end{pmatrix}$; phần tử hàng 2, cột 1: $-1$",
   "note": "Giải như phương trình số nhưng phải chuyển vị $B$ trước; chia ma trận cho một số là chia từng phần tử."
  },
  {
   "q": "Hệ phương trình thuần nhất $\\begin{cases}x + y + z = 0\\\\ x + my - 2z = 0\\\\ x - 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn) luôn có nghiệm tầm thường $(0;0;0)$. Tích tất cả các giá trị của $m$ để hệ có nghiệm không tầm thường bằng",
   "options": [
    "$-8$.",
    "$2$.",
    "$-2$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất có nghiệm không tầm thường khi định thức hệ số bằng 0: $\\left(m - 4\\right) \\left(m + 2\\right) = 0 \\Leftrightarrow m \\in \\{-2;4\\}$<br>Kết quả: $-8$",
   "note": "Xét hàng cuối sau khi khử: hệ số bằng 0 mà vế phải khác 0 thì vô nghiệm; cả hai bằng 0 thì vô số nghiệm; hệ số khác 0 thì nghiệm duy nhất."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{e^{ax} - b + 2x}{x^2} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b + L$ bằng",
   "options": [
    "$1$.",
    "$0$.",
    "$-1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$e^{ax} = 1 + ax + \\dfrac{a^2x^2}{2} + o(x^2)$<br>Tử số $= (1 - b) + (a + 2)x + \\dfrac{a^2}{2}x^2 + o(x^2)$<br>Giới hạn hữu hạn $\\Leftrightarrow b = 1,\\ a = -2$; khi đó $L = \\dfrac{a^2}{2} = 2$<br>$a + b + L = 1$",
   "note": "Giới hạn hữu hạn buộc các số hạng bậc thấp ở tử triệt tiêu; với hiệu hai căn thì nhân lượng liên hợp."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\dfrac{x^2 - 1}{x - 1} & \\text{khi } x < 1\\\\[2mm] ax^2 - bx + 3 & \\text{khi } 1 \\le x < 2\\\\[1mm] 2x - a + b & \\text{khi } x \\ge 2\\end{cases}$ liên tục trên $\\mathbb{R}$. Giá trị của $a + b$ bằng",
   "options": [
    "$5$.",
    "$-1$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Tại $x = 1$: $1a - 1b + 3 = 2$; tại $x = 2$: $4a - 2b + 3 = 4 - a + b$. Giải được $a = 2,\\ b = 3$<br>Kết quả: $5$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một bể chứa có dạng hình nón tròn xoay với đỉnh ở phía dưới, bán kính miệng bể 3 mét, chiều cao 4 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước ra khỏi bể qua miệng bể (làm tròn đến hàng phần chục) bằng",
   "options": [
    "369,5 <i>kJ</i>.",
    "1108,4 <i>kJ</i>.",
    "738,9 <i>kJ</i>.",
    "1477,8 <i>kJ</i>."
   ],
   "answer": 0,
   "explain": "Lớp nước ở độ cao $y$ (tính từ đỉnh) có bán kính $\\dfrac{3y}{4}$, phải nâng lên $4 - y$ mét<br>$W = \\displaystyle\\int_0^{4} 9800\\pi\\left(\\dfrac{3y}{4}\\right)^2(4 - y)\\,dy = 9800\\pi\\cdot\\dfrac{9}{16}\\left[\\dfrac{4y^3}{3} - \\dfrac{y^4}{4}\\right]_0^{4}$<br>$= 9800\\pi\\cdot\\dfrac{9\\cdot16}{12} \\approx 369{,}5\\ kJ$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 100 + 0{,}75(Y - T)$; $T = 0{,}2Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 150$ và chi tiêu chính phủ $G_0 = 160$. Giá trị của mức tiêu dùng $C^*$ tại trạng thái cân bằng bằng",
   "options": [
    "$715$.",
    "$1025$.",
    "$205$.",
    "$410$."
   ],
   "answer": 0,
   "explain": "Thế $T$ vào $C$ rồi vào phương trình đầu: $Y^* = 1025,\\ T^* = 205,\\ C^* = 715$<br>Kết quả: $715$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Gọi $S_N$ là tổng riêng thứ $N$ (tổng của $N$ số hạng đầu tiên) của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n(n+1)}$. Giá trị của $S_{9}$ bằng",
   "options": [
    "$\\dfrac{9}{10}$.",
    "$1$.",
    "$\\dfrac{8}{9}$.",
    "$\\dfrac{1}{10}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{n(n+1)} = \\dfrac1n - \\dfrac{1}{n+1}$<br>Cộng $N$ số hạng đầu, các số hạng ở giữa triệt tiêu: $S_N = 1 - \\dfrac{1}{N+1}$<br>$S_{9} = \\dfrac{9}{10}$",
   "note": "$S_N$ là tổng hữu hạn, chưa lấy giới hạn: đừng nhầm với tổng của cả chuỗi."
  },
  {
   "q": "Một quả bóng được thả rơi từ độ cao 6 mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\\dfrac{2}{3}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng",
   "options": [
    "$30$.",
    "$18$.",
    "$36$.",
    "$12$."
   ],
   "answer": 0,
   "explain": "$6 + 2\\displaystyle\\sum_{n=1}^{+\\infty}6\\left(\\dfrac{2}{3}\\right)^n = 6 + 2\\cdot\\dfrac{6\\cdot\\frac{2}{3}}{1 - \\frac{2}{3}} = 30$<br>Kết quả: $30$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=2}^{+\\infty}n(n-1)x^n$ bằng",
   "options": [
    "$\\dfrac{2x^2}{(1-x)^3}$.",
    "$\\dfrac{2}{(1-x)^3}$.",
    "$\\dfrac{x^2}{(1-x)^3}$.",
    "$\\dfrac{2x^2}{(1-x)^2}$."
   ],
   "answer": 0,
   "explain": "Đạo hàm hai lần $\\sum x^n = \\dfrac{1}{1-x}$ được $\\sum n(n-1)x^{n-2} = \\dfrac{2}{(1-x)^3}$, rồi nhân với $x^2$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = xe^{-y}$ là",
   "options": [
    "$e^y = \\dfrac{x^2}{2} + C$.",
    "$e^y = x^2 + C$.",
    "$e^{-y} = \\dfrac{x^2}{2} + C$.",
    "$y = \\dfrac{x^2}{2} + C$."
   ],
   "answer": 0,
   "explain": "$e^y\\,dy = x\\,dx$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' + y = x$ là",
   "options": [
    "$y = x - 1 + Ce^{-x}$.",
    "$y = x + 1 + Ce^{-x}$.",
    "$y = x - 1 + Ce^{x}$.",
    "$y = x + Ce^{-x}$."
   ],
   "answer": 0,
   "explain": "$\\left(ye^{x}\\right)' = xe^x$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Một bể chứa 100 lít nước có hòa tan 15 kg muối. Người ta bơm vào bể nước muối nồng độ 0,1 kg/lít với tốc độ 6 lít/phút, đồng thời rút hỗn hợp (luôn được khuấy đều) ra khỏi bể với tốc độ 4 lít/phút, nên thể tích nước trong bể tăng dần. Lượng muối trong bể sau 50 phút là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "21,2.",
    "20,0.",
    "45,0.",
    "22,5."
   ],
   "answer": 0,
   "explain": "$V(t) = 100 + 2t$; $S' + \\dfrac{4}{100 + 2t}S = 0{,}6,\\quad S(0) = 15$<br>Nhân với thừa số tích phân $(100 + 2t)^2$: $\\left[S(100 + 2t)^2\\right]' = 0{,}6(100 + 2t)^2$<br>$S(100 + 2t)^2 = 0{,}1(100 + 2t)^3 + C$; $S(0) = 15 \\Rightarrow C = 50000$<br>$S(50) = 0{,}1\\cdot200 + \\dfrac{50000}{200^2} \\approx 21{,}2$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 1\\}$. Giá trị của tích phân $\\displaystyle\\iint_D e^{x^2 + y^2}\\,dxdy$ bằng",
   "options": [
    "$\\pi \\left(e - 1\\right)$.",
    "$e \\pi$.",
    "$2 \\pi \\left(e - 1\\right)$.",
    "$\\dfrac{\\pi \\left(e - 1\\right)}{2}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\sqrt{1}} re^{r^2}\\,dr = 2\\pi\\cdot\\dfrac{e^{1} - 1}{2}$<br>Kết quả: $\\pi \\left(e - 1\\right)$",
   "note": "Trong tọa độ cực $dxdy = r\\,dr\\,d\\varphi$; đường tròn $x^2 + y^2 = 2ax$ là $r = 2a\\cos\\varphi$ với $-\\dfrac{\\pi}{2} \\le \\varphi \\le \\dfrac{\\pi}{2}$."
  },
  {
   "q": "Cho $V = \\{(x,y,z): x^2 + y^2 + z^2 \\le 4,\\ z \\ge 0\\}$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$4 \\pi$.",
    "$8 \\pi$.",
    "$2 \\pi$.",
    "$\\dfrac{16 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/2}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^2\\rho^3\\,d\\rho = 2\\pi\\cdot\\dfrac12\\cdot\\dfrac{2^4}{4}$<br>Kết quả: $4 \\pi$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Trong mặt phẳng $Oxy$, cho $L$ là đoạn thẳng nối từ $A(0;1)$ đến $B(4;4)$. Giá trị của tích phân $\\displaystyle\\int_L (x + 2 y)\\,ds$ bằng",
   "options": [
    "$35$.",
    "$7$.",
    "$70$.",
    "$60$."
   ],
   "answer": 0,
   "explain": "Tham số hóa $x = 0 + 4t,\\ y = 1 + 3t$, $0 \\le t \\le 1$, $ds = 5\\,dt$; hàm dưới dấu tích phân bậc nhất nên tích phân bằng độ dài đoạn thẳng nhân giá trị tại trung điểm<br>Kết quả: $35$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $L$ là một đường cong trơn bất kỳ đi từ $O(0;0)$ đến $A(1;2)$. Biết biểu thức dưới dấu tích phân là vi phân toàn phần của một hàm $u(x,y)$, giá trị của tích phân $\\displaystyle\\int_L (2 x y + 2)\\,dx + (x^{2} + 6 y^{2})\\,dy$ bằng",
   "options": [
    "$20$.",
    "$18$.",
    "$21$.",
    "$40$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi; $u = x^{2} y + 2 x + 2 y^{3}$ và kết quả bằng $u(1;2) - u(0;0)$<br>Kết quả: $20$",
   "note": "Tích phân đường loại hai: thay $y = y(x)$, $dy = y'dx$; với đường cong kín thì dùng công thức Green."
  }
 ],
 "groups": [
  {
   "stem": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(1;-2;-2);\\ u_2(-2;1;-2);\\ u_3(-2;-2;1)\\}$. Gọi $A$ là ma trận có các dòng theo thứ tự là các véc tơ trong $S$ và $I$ là ma trận đơn vị cấp 3.",
   "questions": [
    {
     "q": "Định thức của ma trận $A$ bằng",
     "options": [
      "$-27$.",
      "$27$.",
      "$-3$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$A = 3I + (-2)J$ ($J$ là ma trận toàn số 1) có các trị riêng $3$ (bội 2) và $-3$<br>Kết quả: $-27$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
     "options": [
      "$-1$.",
      "$1$.",
      "$- \\dfrac{1}{3}$.",
      "$-9$."
     ],
     "answer": 0,
     "explain": "Véc tơ $(1;1;1)$ là véc tơ riêng ứng với trị riêng $-3$ nên tổng mỗi hàng của $A^{-1}$ bằng $\\dfrac{1}{-3}$; tổng tất cả bằng $-1$<br>Kết quả: $-1$"
    },
    {
     "q": "Số chiều của không gian nghiệm của hệ $(A - 3I)X = 0$ (không gian riêng ứng với trị riêng $\\lambda = 3$) bằng",
     "options": [
      "$2$.",
      "$1$.",
      "$3$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$A - 3I$ có hạng 1 nên số chiều bằng $3 - 1 = 2$<br>Kết quả: $2$",
     "note": "Tổng các trị riêng bằng vết, tích các trị riêng bằng định thức của ma trận."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{3} - 3 x + y^{2}$.",
   "questions": [
    {
     "q": "Giá trị của $f''_{xx}(1;1) + f''_{yy}(1;1)$ bằng",
     "options": [
      "$8$.",
      "$6$.",
      "$4$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$f''_{xx} = 6x,\\quad f''_{yy} = 2$<br>Tổng tại điểm đã cho: $8$"
    },
    {
     "q": "Số điểm cực trị của hàm số bằng",
     "options": [
      "$1$.",
      "$2$.",
      "$0$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$f'_x = 3x^2 - 3 = 0,\\ f'_y = 2y = 0 \\Rightarrow$ điểm dừng $(1;0)$ và $(-1;0)$<br>$AC - B^2 = 12x$: tại $(1;0)$ dương (cực tiểu vì $A > 0$), tại $(-1;0)$ âm (không là cực trị)<br>Có đúng $1$ điểm cực trị"
    },
    {
     "q": "Giá trị cực tiểu của hàm số bằng",
     "options": [
      "$-2$.",
      "$2$.",
      "$0$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "Điểm cực tiểu $(1;0)$<br>$f(1;0) = 1^3 - 3\\cdot1^3 + 0 = -2$",
     "note": "Không phải điểm dừng nào cũng là cực trị: $AC - B^2 < 0$ là điểm yên ngựa."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}-2 & 0 \\\\ -2 & -1\\end{pmatrix}$ và $B = \\begin{pmatrix}1 & 0 \\\\ -2 & 2\\end{pmatrix}$. Tính $\\det\\left(AB^{-1}\\right)$.",
   "answer": [
    "1"
   ],
   "explain": "$\\det A = 2,\\quad \\det B = 2$<br>$\\det\\left(AB^{-1}\\right) = \\dfrac{\\det A}{\\det B} = 1$",
   "note": "$\\det\\left(A^{-1}B\\right) = \\dfrac{\\det B}{\\det A}$: không cần tìm ma trận nghịch đảo."
  },
  {
   "q": "Tìm giá trị cực tiểu của hàm số $f(x,y,z) = x^{2} - 2 x y + 2 y^{2} - 6 y + z^{2} - 4 z + 30$.",
   "answer": [
    "17"
   ],
   "explain": "Điểm dừng $(3;3;2)$; dạng toàn phương xác định dương nên đó là điểm cực tiểu, $f = 17$<br>Đáp số: $17$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Tìm bán kính hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n\\,x^{2n}}{25^n}$.",
   "answer": [
    "5"
   ],
   "explain": "Đặt $t = x^2$: bán kính hội tụ theo $t$ bằng 25, tức $x^2 < 25$<br>$R = 5$",
   "note": "Chuỗi theo $x^k$: đặt $t = x^k$; bán kính theo $x$ là căn bậc $k$ của bán kính theo $t$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 3y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "23"
   ],
   "explain": "$y = C_1e^{x} + C_2e^{3x}$ với $C_1 = 1,\\ C_2 = 1$; $y(1) \\approx 22{,}80$<br>Đáp số: $23$",
   "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi các mặt $x = 0,\\ y = 0,\\ z = 0,\\ x + y = 1$ và $z = x^2 + y^2$. Gọi $T$ là thể tích của $V$, tính $6T$.",
   "answer": [
    "1"
   ],
   "explain": "$V = \\displaystyle\\int_0^1 dx\\int_0^{1-x}(x^2 + y^2)\\,dy = \\dfrac{1}{6}$<br>Đáp số: $1$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
