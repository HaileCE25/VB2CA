// ĐỀ SỐ 09 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-09",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 09",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản sắc và hội nhập",
  "prompt": "Việt Nam đang thực hiện chủ trương từng bước đưa tiếng Anh trở thành ngôn ngữ thứ hai trong trường học, coi ngoại ngữ là chìa khóa để hội nhập. Cùng lúc đó, trên mạng xã hội và trong giao tiếp hằng ngày của một bộ phận giới trẻ, những câu nói nửa Việt nửa Anh, những từ viết tắt và tiếng lóng thay thế dần cách diễn đạt quen thuộc. Có người coi đó là sự sáng tạo tự nhiên của ngôn ngữ; có người lo rằng nếu không còn nói và viết tiếng Việt cho đúng, cho hay thì hội nhập sẽ thành hòa tan.",
  "source": "",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về việc giữ gìn sự trong sáng của tiếng Việt trong bối cảnh hội nhập và trách nhiệm của thế hệ trẻ đối với tiếng mẹ đẻ.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^n$ với tích vô hướng thông thường, cho hai véc tơ $u, v$ thỏa mãn $|u| = 3,\\ |v| = 3$ và $\\langle u, v\\rangle = 2$. Giá trị của $|2u - v|^2$ bằng",
   "options": [
    "$37$.",
    "$45$.",
    "$41$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "$|2u - v|^2 = \\langle 2u - v, 2u - v\\rangle = 4|u|^2 - 4 \\langle u, v\\rangle + |v|^2$<br>$= 4\\cdot9 - 4\\cdot(2) + 1\\cdot9 = 37$",
   "note": "Khai triển như hằng đẳng thức với $\\langle u, u\\rangle = |u|^2$; đừng quên số hạng chéo $2pq\\langle u, v\\rangle$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(2;-2),\\ u_2(0;-2),\\ u_3(0;-1),\\ u_4(2;-1)\\}$. Có bao nhiêu hệ con gồm đúng 2 véc tơ của $S$ là cơ sở của $\\mathbb{R}^2$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$5$.",
    "$6$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Có $C_4^2 = 6$ hệ con gồm 2 véc tơ, trong đó 1 hệ phụ thuộc tuyến tính<br>Kết quả: $5$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S$ gồm $u_1 = (2;-1;-1;1),\\ u_2 = (0;-1;3;-2),\\ u_3 = (-4;3;-1;0),\\ u_4 = (2;1;-7;5),\\ u_5 = (-4;0;8;-6)$. Cần bỏ đi ít nhất bao nhiêu véc tơ của $S$ để hệ còn lại độc lập tuyến tính?<span class=\"q-hint\">Gợi ý: số véc tơ giữ lại được nhiều nhất bằng hạng của $S$.</span>",
   "options": [
    "$3$.",
    "$2$.",
    "$4$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$u_3 = - 2 u_{1} - u_{2}$; $u_4 = u_{1} - 2 u_{2}$; $u_5 = - 2 u_{1} + 2 u_{2}$; còn $u_1, u_2$ độc lập tuyến tính nên hạng bằng 2<br>Kết quả: $3$",
   "note": "Hạng = số hàng khác không của dạng bậc thang; số véc tơ thừa = số véc tơ $-$ hạng."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & 2 \\\\ 0 & 2\\end{pmatrix}$. Viết $A = 2I + N$ với $N = \\begin{pmatrix}0 & 2 \\\\ 0 & 0\\end{pmatrix}$ và chú ý $N^2 = 0$, phần tử thuộc hàng 1 và cột 2 của ma trận $A^{4}$ bằng",
   "options": [
    "$64$.",
    "$16$.",
    "$32$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "$I$ và $N$ giao hoán, $N^2 = 0$ nên $(2I + N)^n = 2^nI + n\\cdot2^{n-1}N$<br>$A^{4} = 16I + 32N = \\begin{pmatrix}16 & 64 \\\\ 0 & 16\\end{pmatrix}$<br>Phần tử hàng 1, cột 2: $64$",
   "note": "Tính $A^2, A^3$ để thấy quy luật; với $A = cI + N$, $N^2 = 0$ thì $A^n = c^nI + nc^{n-1}N$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 2 khả nghịch có ma trận nghịch đảo $A^{-1} = \\begin{pmatrix}-2 & -1 \\\\ -3 & -1\\end{pmatrix}$. Giá trị của $\\det(3A)$ bằng",
   "options": [
    "$-9$.",
    "$-3$.",
    "$-1$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "$\\det\\left(A^{-1}\\right) = -1 \\Rightarrow \\det A = -1$<br>$A$ cấp 2 nên $\\det(3A) = 3^2\\cdot\\det A = -9$",
   "note": "$\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$ và $\\det(kA) = k^n\\det A$ với $n$ là cấp của ma trận."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^n$, cho hệ $S$ gồm $n + 1$ véc tơ. Phát biểu nào sau đây là đúng?",
   "options": [
    "Hệ $S$ luôn phụ thuộc tuyến tính.",
    "Hệ $S$ luôn độc lập tuyến tính.",
    "Hạng của hệ $S$ bằng $n + 1$.",
    "Hệ $S$ luôn là một cơ sở của $\\mathbb{R}^n$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Hệ $S$ luôn phụ thuộc tuyến tính. Hạng của hệ không vượt quá số chiều $n$, nhỏ hơn số véc tơ $n + 1$.<br><b>Sai:</b> Hệ $S$ luôn độc lập tuyến tính. Trong $\\mathbb{R}^n$ không có quá $n$ véc tơ độc lập tuyến tính.<br><b>Sai:</b> Hạng của hệ $S$ bằng $n + 1$. Hạng không vượt quá số chiều $n$ của không gian.<br><b>Sai:</b> Hệ $S$ luôn là một cơ sở của $\\mathbb{R}^n$. Cơ sở của $\\mathbb{R}^n$ gồm đúng $n$ véc tơ độc lập tuyến tính."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp 3 có $\\det A = -2$ và $\\det B = 5$. Giá trị của $\\det\\left(-2A^{2}(B^T)^{-1}\\right)$ bằng<span class=\"q-hint\">Lưu ý: nhớ rằng $\\det(kA) = k^n\\det A$ với $A$ vuông cấp $n$.</span>",
   "options": [
    "$-6.4$.",
    "$-1.6$.",
    "$-160$.",
    "$6.4$."
   ],
   "answer": 0,
   "explain": "$\\left(-2\\right)^{3}\\cdot(\\det A)^{2}\\cdot\\dfrac{1}{\\det B} = - \\dfrac{32}{5}$<br>Kết quả: $-6.4$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 2x - \\sin 2x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$4$.",
    "$\\dfrac{4}{3}$.",
    "$1$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 2x$: $\\tan u - \\sin u = \\tan u\\,(1 - \\cos u) \\sim u\\cdot\\dfrac{u^2}{2} = \\dfrac{u^3}{2}$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(2x)^3}{2x^3} = \\dfrac{8}{2} = 4$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\dfrac{\\sqrt[3]{1 + ax} - \\sqrt{1 + 2x}}{x} & \\text{khi } x \\ne 0\\\\[2mm] 3 & \\text{khi } x = 0\\end{cases}$ liên tục tại $x = 0$. Giá trị của $a$ bằng",
   "options": [
    "$12$.",
    "$9$.",
    "$15$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\sqrt[3]{1 + ax} = 1 + \\dfrac{a}{3}x + o(x)$<br>$\\sqrt{1 + 2x} = 1 + \\dfrac{2}{2}x + o(x)$<br>$\\lim\\limits_{x\\to0} f(x) = \\dfrac{a}{3} - \\dfrac{2}{2} = 3 \\Rightarrow a = 12$",
   "note": "Liên tục tại $x_0$ $\\Leftrightarrow$ giới hạn trái = giới hạn phải = $f(x_0)$; giới hạn hữu hạn mà mẫu tiến về 0 thì tử cũng phải tiến về 0."
  },
  {
   "q": "Cho hàm số $f(x) = x^2e^{3x}$. Dùng công thức Leibniz $(uv)^{(n)} = \\sum_{k=0}^{n} C_n^k u^{(k)}v^{(n-k)}$, giá trị của đạo hàm cấp mười $f^{(10)}(0)$ bằng",
   "options": [
    "$590490$.",
    "$295245$.",
    "$1180980$.",
    "$59049$."
   ],
   "answer": 0,
   "explain": "$u = x^2$: $u(0) = 0,\\ u'(0) = 0,\\ u''(0) = 2,\\ u^{(k)} = 0\\ (k \\ge 3)$; $v = e^{3x}$: $v^{(m)}(0) = (3)^m$<br>$f^{(10)}(0) = C_{10}^2\\cdot u''(0)\\cdot v^{(8)}(0) = 45\\cdot2\\cdot(3)^{8} = 590490$",
   "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số."
  },
  {
   "q": "Cho hàm số $f(x,y) = \\arctan\\dfrac{y}{x}$. Giá trị của $f''_{xx}(1;2)$ bằng",
   "options": [
    "$\\dfrac{4}{25}$.",
    "$- \\dfrac{4}{25}$.",
    "$- \\dfrac{2}{5}$.",
    "$\\dfrac{3}{25}$."
   ],
   "answer": 0,
   "explain": "$f'_x = \\dfrac{1}{1 + \\frac{y^2}{x^2}}\\cdot\\left(-\\dfrac{y}{x^2}\\right) = -\\dfrac{y}{x^2 + y^2}$<br>$f''_{xx} = \\dfrac{2xy}{(x^2 + y^2)^2}$<br>$f''_{xx}(1;2) = \\dfrac{4}{25} = \\dfrac{4}{25}$",
   "note": "Đạo hàm riêng theo một biến thì coi biến kia là hằng số; với hàm ẩn $F(x,y,z) = 0$: $z'_x = -\\dfrac{F'_x}{F'_z}$."
  },
  {
   "q": "Dùng vi phân toàn phần của hàm $f(x,y) = \\sqrt{x^2 + y^2}$ tại điểm $(8;6)$, tức là $f(x_0 + \\Delta x;\\ y_0 + \\Delta y) \\approx f(x_0;y_0) + f'_x\\Delta x + f'_y\\Delta y$, giá trị gần đúng của $\\sqrt{(8{,}02)^2 + (6{,}04)^2}$ là",
   "options": [
    "10,04.",
    "9,96.",
    "10,06.",
    "10,4."
   ],
   "answer": 0,
   "explain": "$f'_x = \\dfrac{x}{\\sqrt{x^2+y^2}},\\quad f'_y = \\dfrac{y}{\\sqrt{x^2+y^2}}$<br>Tại $(8;6)$: $f = 10,\\ f'_x = \\dfrac{8}{10},\\ f'_y = \\dfrac{6}{10}$; $\\Delta x = 0{,}02,\\ \\Delta y = 0{,}04$<br>$f \\approx 10 + \\dfrac{8\\cdot(0{,}02) + 6\\cdot(0{,}04)}{10} = 10{,}04$",
   "note": "$df = f'_xdx + f'_ydy$; khi tính gần đúng, $\\Delta x$ và $\\Delta y$ có thể mang dấu âm."
  },
  {
   "q": "Cho hàm số $f(x,y) = - x^{2} y - x y^{2} + 2 x y$. Hàm số có bao nhiêu điểm dừng không phải là điểm cực trị?<span class=\"q-hint\">Lưu ý: điểm dừng là điểm mà $f'_x = f'_y = 0$. Tại điểm dừng, đặt $A = f''_{xx},\\ B = f''_{xy},\\ C = f''_{yy}$: nếu $AC - B^2 > 0$ thì đó là điểm cực trị, nếu $AC - B^2 < 0$ thì không phải.</span>",
   "options": [
    "$3$.",
    "$4$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$f'_x = - 2 x y - y^{2} + 2 y,\\quad f'_y = - x^{2} - 2 x y + 2 x$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(0;0)$, $(0;2)$, $(\\dfrac{2}{3};\\dfrac{2}{3})$, $(2;0)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $-4$, $-4$, $\\dfrac{4}{3}$, $-4$<br>Số điểm dừng: $4$; số điểm cực trị (có $AC - B^2 > 0$): $1$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Cho $q$ là số nguyên dương. Chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^{3}}{n^{q} + 1}$ hội tụ khi và chỉ khi",
   "options": [
    "$q \\ge 5$.",
    "$q \\ge 4$.",
    "$q \\ge 6$.",
    "với mọi số nguyên dương $q$."
   ],
   "answer": 0,
   "explain": "$u_n \\sim \\dfrac{n^{3}}{n^q} = \\dfrac{1}{n^{q - 3}}$<br>Chuỗi $\\sum\\dfrac{1}{n^{s}}$ hội tụ $\\Leftrightarrow s > 1$, tức $q - 3 > 1$<br>$q$ nguyên nên $q \\ge 5$",
   "note": "Chỉ so bậc của tử và mẫu: cần (bậc mẫu $-$ bậc tử) $> 1$; bằng đúng 1 thì vẫn phân kỳ."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt[3]{n}}$, $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{(-1)^n\\ln n}{n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\ln(n+1)}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$. Có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$4$.",
    "$1$.",
    "$3$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\frac{1}{\\sqrt[3]{n}} \\downarrow 0$ (Leibniz), $\\sum\\frac{1}{n^{1/3}}$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 2: $\\frac{\\ln n}{n} \\downarrow 0$ khi $n \\ge 3$ (Leibniz), $\\frac{\\ln n}{n} \\ge \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 3: $\\frac{1}{\\ln(n+1)} \\downarrow 0$ (Leibniz), $\\frac{1}{\\ln(n+1)} > \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 4: $\\sum\\frac{1}{n^2}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Số chuỗi hội tụ: $4$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân có biến số phân ly?",
   "options": [
    "$y' = (1 + x)(1 + y^2)$.",
    "$y' + y\\tan x = \\cos x$.",
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$.",
    "$y' - y = xy^2$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = (1 + x)(1 + y^2)$ — Viết được dưới dạng $g(y)\\,dy = h(x)\\,dx$<br><b>Sai:</b> $y' + y\\tan x = \\cos x$ — là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không thuộc dạng đang hỏi<br><b>Sai:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi<br><b>Sai:</b> $y' - y = xy^2$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' = y + 3x$ $(x > 0)$ thỏa mãn $y(1) = 3$. Giá trị của $y(e)$ bằng",
   "options": [
    "$6 e$.",
    "$3 e$.",
    "$3 + 3 e$.",
    "$e + 6$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^2$: $\\dfrac{xy' - y}{x^2} = \\dfrac{3}{x} \\Leftrightarrow \\left(\\dfrac{y}{x}\\right)' = \\dfrac{3}{x}$<br>$\\dfrac{y}{x} = 3 \\ln x + C \\Rightarrow y = x(3 \\ln x + C)$<br>$y(1) = C = 3$<br>$y(e) = e(3 + 3) = 6 e$",
   "note": "Đưa về dạng chuẩn rồi mới tìm thừa số tích phân $e^{\\int p\\,dx}$ (hoặc kiểm tra $P'_y = Q'_x$); hằng số $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Trong một mạch điện RL, cường độ dòng điện $y(t)$ (ampe) sau $t$ mili giây kể từ khi đóng mạch thỏa mãn phương trình $y' = k(16 - y)$ với $k = \\dfrac{\\ln 2}{2}$ và $y(0) = 0$. Cường độ dòng điện sau 4 mili giây bằng",
   "options": [
    "$12$ A.",
    "$14$ A.",
    "$4$ A.",
    "$16$ A."
   ],
   "answer": 0,
   "explain": "$y' + ky = 16k$ (tuyến tính cấp một) $\\Rightarrow y = 16 + Ce^{-kt}$<br>$y(0) = 0 \\Rightarrow C = -16$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{2}\\cdot4} = 2^{-2} = \\dfrac{1}{4}$<br>$y(4) = 16 + \\dfrac{-16}{4} = 12$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y'' + y = 4\\cos x$ là",
   "options": [
    "$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$.",
    "$y = C_1\\cos x + C_2\\sin x + 2x\\cos x$.",
    "$y = C_1\\cos x + C_2\\sin x + 2\\sin x$.",
    "$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$<br>$\\overline{y} = C_1\\cos x + C_2\\sin x$<br>$y^* = x(A\\cos x + B\\sin x)$ vì $\\pm i$ là nghiệm đặc trưng<br>$y^{*\\prime\\prime} + y^* = -2A\\sin x + 2B\\cos x = 4\\cos x \\Rightarrow A = 0,\\ B = 2$<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$",
   "note": "Hai nghiệm thực phân biệt: $C_1e^{k_1x} + C_2e^{k_2x}$; nghiệm kép: $(C_1 + C_2x)e^{kx}$; nghiệm phức $\\alpha \\pm i\\beta$: $e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$."
  },
  {
   "q": "Diện tích $S = \\displaystyle\\iint_D dxdy$ của miền phẳng $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 6 x$ bằng",
   "options": [
    "$36$.",
    "$72$.",
    "$108$.",
    "$18$."
   ],
   "answer": 0,
   "explain": "Hoành độ giao điểm: $x^2 = 6 x \\Leftrightarrow x = 0,\\ x = 6$<br>$S = \\displaystyle\\int_{0}^{6}dx\\int_{x^2}^{6 x}dy = \\int_{0}^{6}\\left(- x^{2} + 6 x\\right)dx$<br>$= \\left[- \\dfrac{x^{3}}{3} + 3 x^{2}\\right]_{0}^{6} = 36$",
   "note": "Diện tích = $\\displaystyle\\int$ (đường trên $-$ đường dưới)$\\,dx$; cận là hoành độ các giao điểm."
  },
  {
   "q": "Cho $V$ là tứ diện giới hạn bởi các mặt phẳng $x = 0,\\ y = 0,\\ z = 0$ và $x + y + z = 1$. Tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{1} dx\\int_0^{1-x} dy\\int_0^{1-x-y} f\\,dz$.",
    "$\\displaystyle\\int_0^{1} dx\\int_0^{1} dy\\int_0^{1} f\\,dz$.",
    "$\\displaystyle\\int_0^{1} dx\\int_0^{1-x} dy\\int_0^{1-x} f\\,dz$.",
    "$\\displaystyle\\int_0^{1} dx\\int_0^{x} dy\\int_0^{1-x-y} f\\,dz$."
   ],
   "answer": 0,
   "explain": "Hình chiếu lên $Oxy$ là tam giác $0 \\le x \\le 1,\\ 0 \\le y \\le 1 - x$; $0 \\le z \\le 1 - x - y$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Một nền kinh tế gồm 2 ngành có ma trận hệ số chi phí trực tiếp (mô hình cân đối liên ngành Leontief) $A = \\begin{pmatrix}0{,}2 & 0{,}2 \\\\ 0{,}2 & 0{,}2\\end{pmatrix}$, trong đó $a_{ij}$ là giá trị sản phẩm ngành $i$ mà ngành $j$ cần dùng để làm ra 1 đơn vị giá trị sản phẩm của mình. Yêu cầu về sản phẩm cuối cùng của hai ngành lần lượt là $80$ và $280$. Biết véc tơ tổng sản lượng $X$ thỏa mãn $(I - A)X = D$, tổng giá trị sản lượng $x_1 + x_2$ của hai ngành bằng",
   "options": [
    "$600$.",
    "$360$.",
    "$200$.",
    "$400$."
   ],
   "answer": 0,
   "explain": "Giải hệ $(I - A)X = D$ được $x_1 = 200,\\ x_2 = 400$<br>Kết quả: $600$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;2;-1;-1),\\ u_2(1;0;1;1),\\ u_3(3;4;-1;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne -1$.",
    "$m = -1$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 0$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $2$ lần hàng 1 cộng $1$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = -1$; ngược lại hạng bằng 3.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}0 & 1 \\\\ -3 & 3\\end{pmatrix}$ và $B = \\begin{pmatrix}3 & -2 \\\\ 6 & -5\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X = X + B$ là",
   "options": [
    "$\\begin{pmatrix}0 & 1 \\\\ 3 & -1\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & -1 \\\\ -3 & -1\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & 3 \\\\ 1 & -1\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & -1 \\\\ -3 & 1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$(A - I)X = B$ với $A - I = \\begin{pmatrix}-1 & 1 \\\\ -3 & 2\\end{pmatrix}$, nên $X = (A - I)^{-1}B$; kết quả $X = \\begin{pmatrix}0 & 1 \\\\ 3 & -1\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}x + 3 y - 2 z = 3\\\\ 2 x + 7 y - 2 z = 4\\\\ x + 4 y + (m^2 - 1)z = m\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Hệ vô nghiệm khi và chỉ khi",
   "options": [
    "$m = -1$.",
    "$m = 1$.",
    "$m = \\pm 1$.",
    "$m = 0$."
   ],
   "answer": 0,
   "explain": "Khử Gauss ($h_2 - 2h_1$ và $h_3 - h_1$, rồi trừ hai phương trình mới cho nhau) được $(m^2 - 1)z = m - 1$: với $m = 1$ hệ có vô số nghiệm, với $m = -1$ hệ vô nghiệm, các trường hợp còn lại hệ có nghiệm duy nhất.",
   "note": "Xét hàng cuối sau khi khử: hệ số bằng 0 mà vế phải khác 0 thì vô nghiệm; cả hai bằng 0 thì vô số nghiệm; hệ số khác 0 thì nghiệm duy nhất."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to +\\infty}\\left(\\sqrt{x^2 + ax + 1} - \\sqrt{x^2 - 4x}\\right) = 2$. Giá trị của $a$ bằng",
   "options": [
    "$0$.",
    "$8$.",
    "$-2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Nhân liên hợp: $\\dfrac{(x^2 + ax + 1) - (x^2 - 4x)}{\\sqrt{x^2 + ax + 1} + \\sqrt{x^2 - 4x}} = \\dfrac{(a + 4)x + 1}{\\sqrt{x^2 + ax + 1} + \\sqrt{x^2 - 4x}}$<br>$\\lim\\limits_{x\\to+\\infty} = \\dfrac{a + 4}{2} = 2 \\Rightarrow a = 0$",
   "note": "Giới hạn hữu hạn buộc các số hạng bậc thấp ở tử triệt tiêu; với hiệu hai căn thì nhân lượng liên hợp."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}x^{2} & \\text{khi } x \\le 3\\\\ ax + b & \\text{khi } x > 3\\end{cases}$ có đạo hàm tại $x = 3$. Giá trị của $a - b$ bằng",
   "options": [
    "$15$.",
    "$6$.",
    "$-9$.",
    "$-54$."
   ],
   "answer": 0,
   "explain": "Liên tục tại $x = 3$: $9 = (3)a + b$<br>Đạo hàm trái tại $x = 3$: $(x^{2})' = 2 x \\to 6$; đạo hàm phải bằng $a$, nên $a = 6$<br>$b = 9 - (3)\\cdot(6) = -9$<br>$a - b = 15$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một sợi cáp dài 40 mét, nặng 2 kg mỗi mét, được treo thẳng đứng từ nóc một tòa nhà cao, đầu dưới có gắn một vật nặng 20 kg. Lấy $g = 9{,}8\\,m/s^2$. Công cần thiết để kéo toàn bộ sợi cáp cùng vật nặng lên nóc tòa nhà (làm tròn đến hàng phần chục) bằng",
   "options": [
    "23,5 <i>kJ</i>.",
    "39,2 <i>kJ</i>.",
    "15,7 <i>kJ</i>.",
    "11,8 <i>kJ</i>."
   ],
   "answer": 0,
   "explain": "Đoạn cáp dài $dx$ ở độ sâu $x$ nặng $2\\,dx$ kg, phải nâng lên $x$ mét<br>$W = \\displaystyle\\int_0^{40} 2\\cdot9{,}8\\cdot x\\,dx + 20\\cdot9{,}8\\cdot40 = 19{,}6\\cdot\\dfrac{40^2}{2} + 7840$<br>$= 23520\\ J = 23{,}5\\ kJ$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = p_{1} + p_{3} - 10\\\\ s_2 = - p_{1} + 2 p_{2} + p_{3} - 30\\\\ s_3 = p_{1} + 2 p_{3} - 30\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = - p_{1} + p_{2} + 40\\\\ d_2 = - 2 p_{2} + p_{3} + 60\\\\ d_3 = p_{1} - 2 p_{3} + 50\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Gọi $p_1^*, p_2^*, p_3^*$ là các mức giá cân bằng, giá trị của $p_1^* + p_2^* + p_3^*$ bằng",
   "options": [
    "$80$.",
    "$100$.",
    "$85$.",
    "$75$."
   ],
   "answer": 0,
   "explain": "Giải hệ $s_i = d_i$ được giá cân bằng $(30;30;20)$, lượng cung (cầu) tương ứng $(40;20;40)$<br>Kết quả: $80$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2n+1}{n^2(n+1)^2}$ bằng<span class=\"q-hint\">Gợi ý: phân tích số hạng tổng quát thành hiệu để thu gọn tổng riêng.</span>",
   "options": [
    "$1$.",
    "$2$.",
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{3}{4}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{2n+1}{n^2(n+1)^2} = \\dfrac{1}{n^2} - \\dfrac{1}{(n+1)^2}$<br>Tổng riêng thu gọn; cho $N \\to +\\infty$: $S = 1$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{3^{n+1} + 4^n}{5^n} = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng",
   "options": [
    "$19$.",
    "$15$.",
    "$13$.",
    "$21$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{3^{n+1}}{5^n} = 3\\sum_{n=1}^{+\\infty}\\left(\\dfrac{3}{5}\\right)^n = 3\\cdot\\dfrac{\\left(\\frac{3}{5}\\right)^{1}}{1 - \\frac{3}{5}} = \\dfrac{9}{2}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{4}{5}\\right)^n = \\dfrac{\\left(\\frac{4}{5}\\right)^{1}}{1 - \\frac{4}{5}} = 4$<br>Tổng: $\\dfrac{9}{2} + 4 = \\dfrac{17}{2} \\Rightarrow a + b = 19$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=0}^{+\\infty}(-1)^n(n+1)x^n$ bằng",
   "options": [
    "$\\dfrac{1}{(1+x)^2}$.",
    "$\\dfrac{1}{(1-x)^2}$.",
    "$\\dfrac{1}{1+x}$.",
    "$-\\dfrac{1}{(1+x)^2}$."
   ],
   "answer": 0,
   "explain": "Thay $x$ bởi $-x$ trong $\\sum (n+1)x^n = \\dfrac{1}{(1-x)^2}$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y'\\tan x = y$ là",
   "options": [
    "$y = C\\sin x$.",
    "$y = C\\cos x$.",
    "$y = \\sin x + C$.",
    "$y = C\\tan x$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{dy}{y} = \\dfrac{\\cos x}{\\sin x}dx$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = \\dfrac{y}{x} + \\dfrac{y^2}{x^2}$ là $(x > 0)$",
   "options": [
    "$y = -\\dfrac{x}{\\ln x + C}$.",
    "$y = \\dfrac{x}{\\ln x + C}$.",
    "$y = -x\\ln x + Cx$.",
    "$y = -\\dfrac{1}{\\ln x + C}$."
   ],
   "answer": 0,
   "explain": "Đặt $y = ux$: $u'x = u^2 \\Rightarrow -\\dfrac1u = \\ln x + C$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Chất phóng xạ xêsi $^{137}Cs$ có chu kỳ bán rã 30 năm và phân rã với tốc độ tỉ lệ với lượng hiện có, tức $m' = -km$ với $k = \\dfrac{\\ln 2}{30}$. Thời gian (năm) để một mẫu chất này còn lại 80% khối lượng ban đầu (làm tròn đến hàng phần chục) là",
   "options": [
    "9,7.",
    "6,0.",
    "12,0.",
    "24,0."
   ],
   "answer": 0,
   "explain": "$m' = -km \\Rightarrow m(t) = m_0e^{-kt} = m_0\\cdot2^{-t/30}$<br>$2^{-t/30} = \\dfrac{80}{100} \\Rightarrow \\dfrac{t}{30} = \\log_2\\dfrac{100}{80}$<br>$t = 30\\cdot\\dfrac{\\ln(100/80)}{\\ln 2} \\approx 9{,}7$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là hình tròn $x^2 + y^2 \\le \\ln 6$. Giá trị của tích phân $\\displaystyle\\iint_D e^{-x^2 - y^2}\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{5 \\pi}{6}$.",
    "$\\dfrac{5 \\pi}{3}$.",
    "$\\dfrac{5 \\pi}{12}$.",
    "$6 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le \\varphi \\le 2\\pi,\\ 0 \\le r \\le \\sqrt{\\ln 6}$, $dxdy = r\\,dr\\,d\\varphi$<br>$\\displaystyle\\int_0^{\\sqrt{\\ln 6}} e^{-r^2}\\,r\\,dr = \\left[-\\dfrac{e^{-r^2}}{2}\\right]_0^{\\sqrt{\\ln 6}} = \\dfrac12\\left(1 - \\dfrac{1}{6}\\right)$<br>$I = 2\\pi\\cdot\\dfrac{5}{12} = \\dfrac{5 \\pi}{6}$",
   "note": "Đổi sang tọa độ cực để có thừa số $r$; khi đó $re^{\\pm r^2}$ tính được nguyên hàm."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt phẳng $z = 1$. Giá trị của tích phân $\\displaystyle\\iiint_V (x^2 + y^2)\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{\\pi}{10}$.",
    "$\\dfrac{\\pi}{20}$.",
    "$\\dfrac{\\pi}{5}$.",
    "$\\dfrac{\\pi}{6}$."
   ],
   "answer": 0,
   "explain": "Tọa độ trụ: $\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^1 r^3(1 - r)\\,dr = 2\\pi\\cdot\\dfrac{1^5}{20}$<br>Kết quả: $\\dfrac{\\pi}{10}$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Cho $P(x,y), Q(x,y)$ có các đạo hàm riêng liên tục trên miền đơn liên $D$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Tích phân $\\displaystyle\\int_L P\\,dx + Q\\,dy$ không phụ thuộc đường lấy tích phân trong $D$ khi và chỉ khi $P'_y = Q'_x$ trong $D$.",
    "Tích phân $\\displaystyle\\int_L P\\,dx + Q\\,dy$ không phụ thuộc đường lấy tích phân trong $D$ khi và chỉ khi $P'_x = Q'_y$ trong $D$.",
    "Tích phân đường loại hai không bao giờ phụ thuộc đường lấy tích phân.",
    "Tích phân $\\displaystyle\\oint_C P\\,dx + Q\\,dy$ theo mọi đường cong kín $C$ trong $D$ luôn khác $0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Tích phân $\\displaystyle\\int_L P\\,dx + Q\\,dy$ không phụ thuộc đường lấy tích phân trong $D$ khi và chỉ khi $P'_y = Q'_x$ trong $D$. Đây là định lí bốn mệnh đề tương đương.<br><b>Sai:</b> Tích phân $\\displaystyle\\int_L P\\,dx + Q\\,dy$ không phụ thuộc đường lấy tích phân trong $D$ khi và chỉ khi $P'_x = Q'_y$ trong $D$. Điều kiện là hai đạo hàm chéo bằng nhau; $P = y$, $Q = x$ có $P'_y = Q'_x = 1$.<br><b>Sai:</b> Tích phân đường loại hai không bao giờ phụ thuộc đường lấy tích phân. $\\displaystyle\\int y\\,dx$ từ $O(0;0)$ đến $A(1;1)$: theo $y = x$ được $\\dfrac12$, theo $y = x^2$ được $\\dfrac13$.<br><b>Sai:</b> Tích phân $\\displaystyle\\oint_C P\\,dx + Q\\,dy$ theo mọi đường cong kín $C$ trong $D$ luôn khác $0$. Khi $P'_y = Q'_x$ thì tích phân theo mọi đường cong kín bằng $0$."
  },
  {
   "q": "Biết biểu thức $2 x y\\,dx + (x^{2} + 2 y)\\,dy$ là vi phân toàn phần của một hàm số $u(x,y)$ nên tích phân đường của nó không phụ thuộc đường lấy tích phân. Với $L$ là một đường cong trơn bất kì đi từ $A(1;0)$ đến $B(2;1)$, giá trị của $\\displaystyle\\int_L 2 x y\\,dx + (x^{2} + 2 y)\\,dy$ bằng",
   "options": [
    "$5$.",
    "$-5$.",
    "$6$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "$u'_x = 2 x y \\Rightarrow u = x^{2} y + g(y)$<br>$u'_y = x^{2} + 2 y \\Rightarrow u = x^{2} y + y^{2}$<br>$I = u(B) - u(A) = (5) - (0) = 5$",
   "note": "Khi tích phân không phụ thuộc đường đi, chỉ cần tìm hàm thế $u$: kết quả là $u(B) - u(A)$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 2 & 0 \\\\ 2 & 1 & 0 \\\\ 0 & 0 & -1\\end{pmatrix}$ và gọi $I$ là ma trận đơn vị cấp 3.",
   "questions": [
    {
     "q": "Định thức của ma trận $A$ bằng",
     "options": [
      "$3$.",
      "$-5$.",
      "$-1$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "$\\det A = -1\\cdot(1^2 - 2^2)$<br>Kết quả: $3$"
    },
    {
     "q": "Tổng các phần tử trên đường chéo chính của ma trận $A^{-1}$ bằng",
     "options": [
      "$- \\dfrac{5}{3}$.",
      "$1$.",
      "$\\dfrac{1}{3}$.",
      "$- \\dfrac{2}{3}$."
     ],
     "answer": 0,
     "explain": "$A^{-1}$ có các trị riêng là nghịch đảo các trị riêng của $A$; tổng bằng $- \\dfrac{5}{3}$<br>Kết quả: $- \\dfrac{5}{3}$"
    },
    {
     "q": "Gọi $X$ là tập hợp các trị riêng của $A$, tổng bình phương các phần tử của $X$ bằng",
     "options": [
      "$10$.",
      "$12$.",
      "$4$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "Các trị riêng của $A$ là $3$, $-1$ và $-1$. Tập hợp không kể bội<br>Kết quả: $10$",
     "note": "Tổng các trị riêng bằng vết, tích các trị riêng bằng định thức của ma trận."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{3} + 3 x y^{2} - 15 x - 12 y$.",
   "questions": [
    {
     "q": "Giá trị của $f''_{xx}(2;1) + f''_{yy}(2;1)$ bằng",
     "options": [
      "$24$.",
      "$12$.",
      "$18$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$f''_{xx} = 6x$, $f''_{yy} = 6x$<br>Kết quả: $24$"
    },
    {
     "q": "Số điểm dừng của hàm số đã cho bằng",
     "options": [
      "$4$.",
      "$2$.",
      "$3$.",
      "$1$."
     ],
     "answer": 0,
     "explain": "$x^2 + y^2 = 5$ và $xy = 2$ cho bốn điểm $(\\pm2;\\pm1),\\ (\\pm1;\\pm2)$ (cùng dấu)<br>Kết quả: $4$"
    },
    {
     "q": "Giá trị cực tiểu của hàm số đã cho bằng",
     "options": [
      "$-28$.",
      "$28$.",
      "$-26$.",
      "$-30$."
     ],
     "answer": 0,
     "explain": "Tại $(2;1)$: $AC - B^2 = 36(2^2 - 1^2) > 0$ và $A = 12 > 0$ nên là cực tiểu<br>Kết quả: $-28$",
     "note": "Điểm dừng: $f'_x = f'_y = 0$; phân loại bằng dấu của $AC - B^2$ và của $A$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 3 với $a_{ij} = 2^{i} + j - \\max\\{i,j\\}$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(2A^T\\right)$.",
   "answer": [
    "16"
   ],
   "explain": "$A = \\begin{pmatrix}2 & 2 & 2 \\\\ 3 & 4 & 4 \\\\ 6 & 7 & 8\\end{pmatrix}$, $\\det A = 2$; kết quả bằng $2^3\\cdot\\det A$ $= 16$<br>Đáp số: $16$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, rồi dùng $\\det\\left(A^T\\right) = \\det A$ và $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị cực đại của hàm số $f(x,y) = - x^{3} + 3 x y - y^{3} + 20$.",
   "answer": [
    "21"
   ],
   "explain": "Điểm dừng $(0;0)$ (không là cực trị) và $(1;1)$ (cực đại vì $A = -6 < 0,\\ AC - B^2 > 0$), $f(1;1) = 21$<br>Đáp số: $21$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Tìm bán kính hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{x^{4n}}{16^n}$.",
   "answer": [
    "2"
   ],
   "explain": "Chuỗi hình học công bội $\\dfrac{x^4}{16}$, hội tụ khi $x^4 < 16$<br>$R = 2$",
   "note": "Chuỗi theo $x^k$: đặt $t = x^k$; bán kính theo $x$ là căn bậc $k$ của bán kính theo $t$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 5$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "55"
   ],
   "explain": "Nghiệm kép $k = 2$: $y = (3 + (-1)x)e^{2x}$; $y(2) \\approx 54{,}598$<br>Đáp số: $55$",
   "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi các mặt $y = x^2,\\ y = 1,\\ z = 0$ và $z = y$. Tính thể tích của $V$ <i>(viết kết quả dưới dạng số thập phân nếu không nguyên)</i>.",
   "answer": [
    "0.8",
    "4/5"
   ],
   "explain": "$V = \\displaystyle\\int_{-1}^{1}dx\\int_{x^2}^{1} y\\,dy = \\dfrac{4}{5}$<br>Đáp số: $0{,}8$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
