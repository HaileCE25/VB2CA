// ĐỀ SỐ 04 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-04",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 04",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lao động và nghề nghiệp",
  "prompt": "Nghị quyết số 68-NQ/TW (tháng 5/2025) của Bộ Chính trị xác định kinh tế tư nhân là một động lực quan trọng nhất của nền kinh tế quốc gia, với mục tiêu đến năm 2030 cả nước có 2 triệu doanh nghiệp hoạt động. Hai người bạn vừa tốt nghiệp đại học có hai lựa chọn khác nhau: An quyết thi vào một vị trí ổn định, với lý do “an cư rồi mới lạc nghiệp”; Bình vay vốn mở một xưởng nhỏ ở quê, chấp nhận khả năng thất bại, với lý do “tuổi trẻ không thử thì bao giờ mới thử”.",
  "source": "(Tình huống giả định; thông tin về Nghị quyết 68-NQ/TW theo báo chí, 2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về hai lựa chọn trên và quan niệm của bản thân về sự “ổn định” trong lao động, nghề nghiệp hiện nay.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (0;4;2),\\ u_2 = (3;-2;3),\\ u_3 = (-2;4;0)$. Gọi $x = (x_1;x_2;x_3)$ là véc tơ thỏa mãn $2(u_1 - x) + 3(u_2 + x) = u_3$. Giá trị của $x_1 + x_2 + x_3$ bằng",
   "options": [
    "$-22$.",
    "$22$.",
    "$-8$.",
    "$-18$."
   ],
   "answer": 0,
   "explain": "$2u_1 - 2x + 3u_2 + 3x = u_3 \\Leftrightarrow x = u_3 - 2u_1 - 3u_2$<br>$u_3 - 2u_1 - 3u_2 = (-11;2;-13)$<br>$x = (-11;2;-13) \\Rightarrow x_1 + x_2 + x_3 = -22$",
   "note": "Viết đẳng thức véc tơ theo từng tọa độ để được hệ phương trình tuyến tính; với phương trình véc tơ, chuyển vế như phương trình số."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(3;9),\\ u_2(2;4),\\ u_3(1;3),\\ u_4(1;1)\\}$. Có bao nhiêu hệ con gồm đúng 2 véc tơ của $S$ là cơ sở của $\\mathbb{R}^2$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
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
   "q": "Một trạm quan trắc ghi lại 5 bộ số liệu, mỗi bộ gồm 4 chỉ số và được xem như một véc tơ trong $\\mathbb{R}^4$: $u_1 = (-2;3;-2;1),\\ u_2 = (0;-1;3;3),\\ u_3 = (-2;5;-8;-5),\\ u_4 = (4;-4;-2;-8),\\ u_5 = (-6;8;-3;6)$. Một bộ số liệu là “thừa” nếu nó là tổ hợp tuyến tính của các bộ còn lại được giữ. Số lớn nhất các bộ số liệu có thể giữ lại sao cho chúng độc lập tuyến tính (tức là hạng của hệ véc tơ đã cho) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$5$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$u_3 = u_{1} - 2 u_{2}$; $u_4 = - 2 u_{1} - 2 u_{2}$; $u_5 = 3 u_{1} + u_{2}$; còn $u_1, u_2$ độc lập tuyến tính nên hạng bằng 2<br>Kết quả: $2$",
   "note": "Hạng = số hàng khác không của dạng bậc thang; số véc tơ thừa = số véc tơ $-$ hạng."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & 3 \\\\ 0 & 2\\end{pmatrix}$. Viết $A = 2I + N$ với $N = \\begin{pmatrix}0 & 3 \\\\ 0 & 0\\end{pmatrix}$ và chú ý $N^2 = 0$, phần tử thuộc hàng 1 và cột 2 của ma trận $A^{4}$ bằng",
   "options": [
    "$96$.",
    "$81$.",
    "$48$.",
    "$12$."
   ],
   "answer": 0,
   "explain": "$I$ và $N$ giao hoán, $N^2 = 0$ nên $(2I + N)^n = 2^nI + n\\cdot2^{n-1}N$<br>$A^{4} = 16I + 32N = \\begin{pmatrix}16 & 96 \\\\ 0 & 16\\end{pmatrix}$<br>Phần tử hàng 1, cột 2: $96$",
   "note": "Tính $A^2, A^3$ để thấy quy luật; với $A = cI + N$, $N^2 = 0$ thì $A^n = c^nI + nc^{n-1}N$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 4 \\\\ -1 & m + 5\\end{pmatrix}$ với $m$ là tham số. Gọi $S$ là tập hợp tất cả các giá trị của $m$ để $A$ không khả nghịch. Giá trị của tích các phần tử của $S$ bằng",
   "options": [
    "$4$.",
    "$-5$.",
    "$17$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "$\\det A = m^{2} + 5 m + 4$<br>$A$ không khả nghịch $\\Leftrightarrow \\det A = 0 \\Leftrightarrow \\left(m + 1\\right) \\left(m + 4\\right) = 0 \\Leftrightarrow m = -4$ hoặc $m = -1$<br>Giá trị cần tìm: $4$",
   "note": "Không khả nghịch $\\Leftrightarrow \\det A = 0$; tổng và tích các nghiệm có thể lấy từ định lí Viète."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 4 có hạng bằng 2. Phát biểu nào sau đây là đúng?",
   "options": [
    "Mọi định thức con cấp 3 của $A$ đều bằng 0.",
    "$\\det A \\ne 0$.",
    "Tồn tại một định thức con cấp 3 của $A$ khác 0.",
    "Mọi định thức con cấp 2 của $A$ đều bằng 0."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Mọi định thức con cấp 3 của $A$ đều bằng 0. Hạng là cấp cao nhất của định thức con khác 0; hạng bằng 2 nên mọi định thức con cấp 3 và cấp 4 đều bằng 0.<br><b>Sai:</b> $\\det A \\ne 0$. Nếu $\\det A \\ne 0$ thì hạng bằng 4.<br><b>Sai:</b> Tồn tại một định thức con cấp 3 của $A$ khác 0. Khi đó hạng ít nhất bằng 3.<br><b>Sai:</b> Mọi định thức con cấp 2 của $A$ đều bằng 0. Khi đó hạng nhỏ hơn 2."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp 4 có $\\det A = 4$ và $\\det B = 2$. Giá trị của $\\det\\left(\\dfrac{1}{2}A^TB^{-1}A\\right)$ bằng<span class=\"q-hint\">Lưu ý: nhớ rằng $\\det(kA) = k^n\\det A$ với $A$ vuông cấp $n$.</span>",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$4$.",
    "$\\dfrac{1}{8}$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$\\left(\\dfrac{1}{2}\\right)^{4}\\cdot\\det A\\cdot\\dfrac{1}{\\det B}\\cdot\\det A = \\dfrac{1}{2}$<br>Kết quả: $\\dfrac{1}{2}$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty} x\\left(\\sqrt{x^2 + 6x} - x - 3\\right)$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$- \\dfrac{9}{2}$.",
    "$\\dfrac{9}{2}$.",
    "$0$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "Nhân liên hợp: $\\sqrt{x^2 + 6x} - (x + 3) = \\dfrac{(x^2 + 6x) - (x + 3)^2}{\\sqrt{x^2 + 6x} + x + 3} = \\dfrac{-9}{\\sqrt{x^2 + 6x} + x + 3}$<br>$\\lim = \\lim\\limits_{x\\to+\\infty}\\dfrac{-9x}{\\sqrt{x^2 + 6x} + x + 3} = \\dfrac{-9}{1 + 1} = - \\dfrac{9}{2}$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Cho hàm số $f$ liên tục trên đoạn $[a;b]$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f(a)\\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc $(a;b)$.",
    "Nếu $f(a)\\cdot f(b) > 0$ thì phương trình $f(x) = 0$ vô nghiệm trên $(a;b)$.",
    "$f$ có đạo hàm tại mọi điểm thuộc $(a;b)$.",
    "$f$ có thể không bị chặn trên $[a;b]$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f(a)\\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc $(a;b)$. Đây là định lí giá trị trung gian (Bolzano – Cauchy).<br><b>Sai:</b> Nếu $f(a)\\cdot f(b) > 0$ thì phương trình $f(x) = 0$ vô nghiệm trên $(a;b)$. $f(x) = x^2 - 1$ trên $[-2;2]$ có $f(-2)f(2) > 0$ nhưng vẫn có nghiệm $x = \\pm1$.<br><b>Sai:</b> $f$ có đạo hàm tại mọi điểm thuộc $(a;b)$. $f(x) = |x|$ liên tục trên $[-1;1]$ nhưng không có đạo hàm tại $0$.<br><b>Sai:</b> $f$ có thể không bị chặn trên $[a;b]$. Hàm liên tục trên một đoạn thì bị chặn và đạt giá trị lớn nhất, nhỏ nhất (định lí Weierstrass)."
  },
  {
   "q": "Một chất điểm chuyển động trong mặt phẳng $Oxy$ theo quỹ đạo có phương trình tham số $x = t^2 + 2t,\\ y = t^3 - 3t$ ($t$ là thời gian). Hệ số góc $\\dfrac{dy}{dx}$ của tiếp tuyến với quỹ đạo tại thời điểm $t = 1$ bằng",
   "options": [
    "$0$.",
    "$2$.",
    "$\\dfrac{3}{2}$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$x'(t) = 2t + 2,\\quad y'(t) = 3t^2 - 3$<br>$\\dfrac{dy}{dx} = \\dfrac{y'(t)}{x'(t)} = \\dfrac{3t^2 - 3}{2t + 2}$<br>Tại $t = 1$: $\\dfrac{0}{4} = 0$",
   "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số."
  },
  {
   "q": "Cho hàm ẩn $z = z(x,y)$ xác định bởi phương trình $2 x z - y + z^{3} = 0$. Biết tại $(x;y) = (2;5)$ thì $z = 1$, giá trị của $z'_x(2;5)$ bằng",
   "options": [
    "$- \\dfrac{2}{7}$.",
    "$\\dfrac{2}{7}$.",
    "$\\dfrac{1}{7}$.",
    "$- \\dfrac{2}{3}$."
   ],
   "answer": 0,
   "explain": "$F(x,y,z) = 2 x z - y + z^{3}$: $F'_x = 2 z,\\quad F'_z = 2 x + 3 z^{2}$<br>$z'_x = -\\dfrac{F'_x}{F'_z} = -\\dfrac{2 z}{2 x + 3 z^{2}}$<br>Tại $x = 2,\\ z = 1$: $z'_x = -\\dfrac{2}{7} = - \\dfrac{2}{7}$",
   "note": "Đạo hàm riêng theo một biến thì coi biến kia là hằng số; với hàm ẩn $F(x,y,z) = 0$: $z'_x = -\\dfrac{F'_x}{F'_z}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^y$ $(x > 0)$. Vi phân toàn phần của hàm số tại điểm $(4;1)$ là",
   "options": [
    "$dx + 4\\ln 4\\,dy$.",
    "$4dx + \\ln 4\\,dy$.",
    "$dx + \\ln 4\\,dy$.",
    "$dx + 4\\,dy$."
   ],
   "answer": 0,
   "explain": "$f'_x = yx^{y-1},\\quad f'_y = x^y\\ln x$<br>Tại $(4;1)$: $f'_x = 1,\\ f'_y = 4\\ln 4$<br>$df = dx + 4\\ln 4\\,dy$",
   "note": "$df = f'_xdx + f'_ydy$; khi tính gần đúng, $\\Delta x$ và $\\Delta y$ có thể mang dấu âm."
  },
  {
   "q": "Cho hàm số $f(x,y) = - x^{2} y - x y^{2} + 2 x y$. Hàm số có bao nhiêu điểm dừng?",
   "options": [
    "$4$.",
    "$1$.",
    "$5$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$f'_x = - 2 x y - y^{2} + 2 y,\\quad f'_y = - x^{2} - 2 x y + 2 x$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(0;0)$, $(0;2)$, $(\\dfrac{2}{3};\\dfrac{2}{3})$, $(2;0)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $-4$, $-4$, $\\dfrac{4}{3}$, $-4$<br>Số điểm dừng: $4$; số điểm cực trị (có $AC - B^2 > 0$): $1$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Cho $q$ là số nguyên dương. Chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^{2}}{n^{q} + 1}$ hội tụ khi và chỉ khi",
   "options": [
    "$q \\ge 4$.",
    "$q \\ge 3$.",
    "$q \\ge 5$.",
    "với mọi số nguyên dương $q$."
   ],
   "answer": 0,
   "explain": "$u_n \\sim \\dfrac{n^{2}}{n^q} = \\dfrac{1}{n^{q - 2}}$<br>Chuỗi $\\sum\\dfrac{1}{n^{s}}$ hội tụ $\\Leftrightarrow s > 1$, tức $q - 2 > 1$<br>$q$ nguyên nên $q \\ge 4$",
   "note": "Chỉ so bậc của tử và mẫu: cần (bậc mẫu $-$ bậc tử) $> 1$; bằng đúng 1 thì vẫn phân kỳ."
  },
  {
   "q": "Cho chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}u_n$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu chuỗi hội tụ thì $\\lim\\limits_{n\\to\\infty}u_n = 0$.",
    "Nếu $\\lim\\limits_{n\\to\\infty}u_n = 0$ thì chuỗi hội tụ.",
    "Nếu chuỗi phân kỳ thì $\\lim\\limits_{n\\to\\infty}u_n \\ne 0$.",
    "Nếu dãy tổng riêng $S_n$ bị chặn thì chuỗi hội tụ."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu chuỗi hội tụ thì $\\lim\\limits_{n\\to\\infty}u_n = 0$. $u_n = S_n - S_{n-1} \\to S - S = 0$.<br><b>Sai:</b> Nếu $\\lim\\limits_{n\\to\\infty}u_n = 0$ thì chuỗi hội tụ. Chuỗi điều hòa $\\sum\\dfrac1n$ có $u_n \\to 0$ nhưng phân kỳ.<br><b>Sai:</b> Nếu chuỗi phân kỳ thì $\\lim\\limits_{n\\to\\infty}u_n \\ne 0$. Chuỗi điều hòa $\\sum\\dfrac1n$ phân kỳ dù $u_n \\to 0$.<br><b>Sai:</b> Nếu dãy tổng riêng $S_n$ bị chặn thì chuỗi hội tụ. $\\sum(-1)^n$ có $S_n \\in \\{-1; 0\\}$ bị chặn nhưng không có giới hạn."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân có biến số phân ly?",
   "options": [
    "$y' = e^{x - y}$.",
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$.",
    "$y' + y\\tan x = \\cos x$.",
    "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = e^{x - y}$ — Viết được dưới dạng $g(y)\\,dy = h(x)\\,dx$<br><b>Sai:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi<br><b>Sai:</b> $y' + y\\tan x = \\cos x$ — là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $(x^2 + 1)y' + 2xy = 4x^3$ thỏa mãn $y(0) = 1$. Giá trị của $y(1)$ bằng",
   "options": [
    "$1$.",
    "$2$.",
    "$\\dfrac{5}{2}$.",
    "$\\dfrac{3}{2}$."
   ],
   "answer": 0,
   "explain": "Vế trái là $\\left[(x^2 + 1)y\\right]'$<br>$\\left[(x^2 + 1)y\\right]' = 4x^3 \\Rightarrow (x^2 + 1)y = x^{4} + C$<br>$y(0) = C = 1$<br>$y(1) = \\dfrac{1 + 1}{2} = 1$",
   "note": "Đưa về dạng chuẩn rồi mới tìm thừa số tích phân $e^{\\int p\\,dx}$ (hoặc kiểm tra $P'_y = Q'_x$); hằng số $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bệnh nhân được truyền thuốc liên tục qua đường tĩnh mạch. Nồng độ thuốc trong máu $y(t)$ (mg/lít) sau $t$ giờ thỏa mãn phương trình $y' = k(48 - y)$ với $k = \\dfrac{\\ln 2}{2}$ và $y(0) = 0$. Nồng độ thuốc trong máu sau 4 giờ bằng",
   "options": [
    "$36$ mg/lít.",
    "$42$ mg/lít.",
    "$12$ mg/lít.",
    "$48$ mg/lít."
   ],
   "answer": 0,
   "explain": "$y' + ky = 48k$ (tuyến tính cấp một) $\\Rightarrow y = 48 + Ce^{-kt}$<br>$y(0) = 0 \\Rightarrow C = -48$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{2}\\cdot4} = 2^{-2} = \\dfrac{1}{4}$<br>$y(4) = 48 + \\dfrac{-48}{4} = 36$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y'' - 2y' - 3y = 6e^{2x}$ là",
   "options": [
    "$y = C_1e^{3x} + C_2e^{-x} - 2e^{2x}$.",
    "$y = C_1e^{3x} + C_2e^{-x} - 2xe^{2x}$.",
    "$y = C_1e^{3x} + C_2e^{-x} + 6e^{2x}$.",
    "$y = C_1e^{3x} + C_2e^{-x} + 2e^{2x}$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} - 2 k - 3 = 0 \\Rightarrow k = 3,\\ k = -1$<br>Số $2$ không là nghiệm đặc trưng: $y^* = Ae^{2x}$<br>Thay vào: $A\\left(4 - 4 - 3\\right)e^{2x} = 6e^{2x} \\Rightarrow -3A = 6 \\Rightarrow A = -2$<br>$y = C_1e^{3x} + C_2e^{-x} - 2e^{2x}$",
   "note": "Trước khi chọn dạng $Ae^{cx}$, kiểm tra $c$ có trùng nghiệm đặc trưng không."
  },
  {
   "q": "Diện tích $S = \\displaystyle\\iint_D dxdy$ của miền phẳng $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 8 x - 7$ bằng",
   "options": [
    "$36$.",
    "$72$.",
    "$108$.",
    "$18$."
   ],
   "answer": 0,
   "explain": "Hoành độ giao điểm: $x^2 = 8 x - 7 \\Leftrightarrow x = 1,\\ x = 7$<br>$S = \\displaystyle\\int_{1}^{7}dx\\int_{x^2}^{8 x - 7}dy = \\int_{1}^{7}\\left(- x^{2} + 8 x - 7\\right)dx$<br>$= \\left[- \\dfrac{x^{3}}{3} + 4 x^{2} - 7 x\\right]_{1}^{7} = 36$",
   "note": "Diện tích = $\\displaystyle\\int$ (đường trên $-$ đường dưới)$\\,dx$; cận là hoành độ các giao điểm."
  },
  {
   "q": "Cho $V$ là tứ diện giới hạn bởi các mặt phẳng $x = 0,\\ y = 0,\\ z = 0$ và $x + y + z = 3$. Tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{3} dx\\int_0^{3-x} dy\\int_0^{3-x-y} f\\,dz$.",
    "$\\displaystyle\\int_0^{3} dx\\int_0^{3} dy\\int_0^{3} f\\,dz$.",
    "$\\displaystyle\\int_0^{3} dx\\int_0^{3-x} dy\\int_0^{3-x} f\\,dz$.",
    "$\\displaystyle\\int_0^{3} dx\\int_0^{x} dy\\int_0^{3-x-y} f\\,dz$."
   ],
   "answer": 0,
   "explain": "Hình chiếu lên $Oxy$ là tam giác $0 \\le x \\le 3,\\ 0 \\le y \\le 3 - x$; $0 \\le z \\le 3 - x - y$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Một nền kinh tế gồm 2 ngành có ma trận hệ số chi phí trực tiếp (mô hình cân đối liên ngành Leontief) $A = \\begin{pmatrix}0{,}3 & 0{,}3 \\\\ 0{,}4 & 0{,}1\\end{pmatrix}$, trong đó $a_{ij}$ là giá trị sản phẩm ngành $i$ mà ngành $j$ cần dùng để làm ra 1 đơn vị giá trị sản phẩm của mình. Yêu cầu về sản phẩm cuối cùng của hai ngành lần lượt là $55$ và $260$. Biết véc tơ tổng sản lượng $X$ thỏa mãn $(I - A)X = D$, tổng giá trị sản lượng $x_1 + x_2$ của hai ngành bằng",
   "options": [
    "$650$.",
    "$315$.",
    "$250$.",
    "$400$."
   ],
   "answer": 0,
   "explain": "Giải hệ $(I - A)X = D$ được $x_1 = 250,\\ x_2 = 400$<br>Kết quả: $650$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & -1 & 1 & 0 \\\\ -1 & 2 & 3 & -1 \\\\ 0 & 2 & 8 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = -2$.",
    "$m = -1$.",
    "$m = 2$.",
    "$m = -3$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $2$ lần hàng 1 cộng $2$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = -2$; ngược lại hạng bằng 3<br>Kết quả: $m = -2$",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 1 & 2\\end{pmatrix}$ và $B = \\begin{pmatrix}4 & 7 \\\\ 3 & 3\\end{pmatrix}$. Ma trận $X$ thỏa mãn $X.A = B$ là",
   "options": [
    "$\\begin{pmatrix}1 & 3 \\\\ 3 & 0\\end{pmatrix}$.",
    "$\\begin{pmatrix}5 & 11 \\\\ -1 & -4\\end{pmatrix}$.",
    "$\\begin{pmatrix}5 & -1 \\\\ 11 & -4\\end{pmatrix}$.",
    "$\\begin{pmatrix}-1 & -3 \\\\ -3 & 0\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$X = BA^{-1}$ (nhân $A^{-1}$ về bên phải); kết quả $X = \\begin{pmatrix}1 & 3 \\\\ 3 & 0\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}- 2 x - 3 y = 7\\\\ 3 x + 3 y = -6\\\\ - 3 x - 3 y = m + 2\\end{cases}$ (với $x, y$ là ẩn, $m$ là tham số). Hệ có nghiệm khi và chỉ khi",
   "options": [
    "$m = 4$.",
    "$m \\ne 4$.",
    "$m = 5$.",
    "với mọi giá trị của $m$."
   ],
   "answer": 0,
   "explain": "Hai phương trình đầu có nghiệm duy nhất: $x = 1,\\ y = -3$<br>Thay vào phương trình thứ ba: $6 = m + 2$<br>$m = 4$",
   "note": "Số phương trình nhiều hơn số ẩn: giải hai phương trình rồi buộc phương trình còn lại nghiệm đúng."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 1}\\dfrac{x^2 + ax + b}{x^{2} - 3 x + 2} = 2$. Giá trị của $b - a$ bằng",
   "options": [
    "$7$.",
    "$-7$.",
    "$-1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Mẫu số bằng 0 tại $x = 1$, giới hạn hữu hạn nên tử số cũng bằng 0: $1 + (1)a + b = 0$<br>$\\dfrac{x^2 + ax + b}{x^{2} - 3 x + 2} = \\dfrac{(x - 1)(x + a + (1))}{(x - 1)(x - 2)} \\to \\dfrac{2\\cdot(1) + a}{-1}$<br>$\\dfrac{2 + a}{-1} = 2 \\Rightarrow a = -4,\\ b = 3$<br>$b - a = 7$",
   "note": "Giới hạn hữu hạn buộc các số hạng bậc thấp ở tử triệt tiêu; với hiệu hai căn thì nhân lượng liên hợp."
  },
  {
   "q": "Cho hàm số $f(x) = \\begin{cases}x^{a}\\sin\\dfrac1x & \\text{khi } x \\ne 0\\\\ 0 & \\text{khi } x = 0\\end{cases}$ với $a$ là số nguyên dương. Giá trị nhỏ nhất của $a$ để hàm số liên tục tại $x = 0$ là",
   "options": [
    "$1$.",
    "$2$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\left|x^a\\sin\\dfrac1x\\right| \\le |x|^a \\to 0$ khi $a > 0$<br>Kết quả: $1$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một sợi cáp dài 20 mét, nặng 3 kg mỗi mét, được treo thẳng đứng từ nóc một tòa nhà cao. Lấy $g = 9{,}8\\,m/s^2$. Công cần thiết để kéo toàn bộ sợi cáp lên nóc tòa nhà (làm tròn đến hàng phần chục) bằng",
   "options": [
    "5,9 <i>kJ</i>.",
    "11,8 <i>kJ</i>.",
    "2,9 <i>kJ</i>.",
    "6,9 <i>kJ</i>."
   ],
   "answer": 0,
   "explain": "Đoạn cáp dài $dx$ ở độ sâu $x$ nặng $3\\,dx$ kg, phải nâng lên $x$ mét<br>$W = \\displaystyle\\int_0^{20} 3\\cdot9{,}8\\cdot x\\,dx = 29{,}4\\cdot\\dfrac{20^2}{2}$<br>$= 5880\\ J = 5{,}9\\ kJ$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 30 nghìn đồng, hạng trung giá 50 nghìn đồng và hạng VIP giá 90 nghìn đồng. Ban tổ chức bán được tổng cộng 210 vé, thu về 9300 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là 30 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$30$.",
    "$60$.",
    "$40$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "Hệ: $x + y + z = 210$; $30x + 50y + 90z = 9300$; $x - y - z = 30$. Giải được $(120;60;30)$<br>Kết quả: $30$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Biết với $|x| < 1$ thì $\\displaystyle\\sum_{n=1}^{+\\infty} n^2x^n = \\dfrac{x(1 + x)}{(1 - x)^3}$. Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{2^n}$ bằng",
   "options": [
    "$6$.",
    "$2$.",
    "$3$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$x = \\dfrac{1}{2}$: $\\dfrac{x(1 + x)}{(1 - x)^3} = \\dfrac{\\frac{1}{2}\\cdot\\frac{3}{2}}{\\left(\\frac{1}{2}\\right)^3} = 6$<br>Kết quả: $6$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\left[(-1)^{n-1}\\left(\\dfrac{1}{3}\\right)^n + \\dfrac{1}{4^{2n}}\\right] = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$), giá trị của $a + b$ bằng",
   "options": [
    "$79$.",
    "$41$.",
    "$47$.",
    "$82$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^{n-1}\\left(\\dfrac{1}{3}\\right)^n = \\dfrac{\\frac{1}{3}}{1 + \\frac{1}{3}} = \\dfrac{1}{4}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{16^n} = \\dfrac{\\frac{1}{16}}{1 - \\frac{1}{16}} = \\dfrac{1}{15}$<br>Tổng: $\\dfrac{19}{60} \\Rightarrow a + b = 79$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}n^2x^n$ bằng",
   "options": [
    "$\\dfrac{x(1+x)}{(1-x)^3}$.",
    "$\\dfrac{x}{(1-x)^3}$.",
    "$\\dfrac{x(1+x)}{(1-x)^2}$.",
    "$\\dfrac{2x}{(1-x)^3}$."
   ],
   "answer": 0,
   "explain": "Áp dụng toán tử $x\\dfrac{d}{dx}$ hai lần cho $\\dfrac{1}{1-x}$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $xy' = y\\ln y$ là $(x > 0,\\ y > 0)$",
   "options": [
    "$y = e^{Cx}$.",
    "$y = Ce^{x}$.",
    "$y = x^{C}$.",
    "$y = Cx$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{dy}{y\\ln y} = \\dfrac{dx}{x} \\Rightarrow \\ln y = Cx$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y'\\cos x + y\\sin x = 1$ là",
   "options": [
    "$y = \\sin x + C\\cos x$.",
    "$y = \\cos x + C\\sin x$.",
    "$y = \\sin x + C$.",
    "$y = (x + C)\\cos x$."
   ],
   "answer": 0,
   "explain": "$\\left(\\dfrac{y}{\\cos x}\\right)' = \\dfrac{1}{\\cos^2x}$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Chất phóng xạ rađi $^{226}Ra$ có chu kỳ bán rã 1600 năm và phân rã với tốc độ tỉ lệ với lượng hiện có, tức $m' = -km$ với $k = \\dfrac{\\ln 2}{1600}$. Thời gian (năm) để một mẫu chất này còn lại 90% khối lượng ban đầu (làm tròn đến hàng phần chục) là",
   "options": [
    "243,2.",
    "160,0.",
    "320,0.",
    "1440,0."
   ],
   "answer": 0,
   "explain": "$m' = -km \\Rightarrow m(t) = m_0e^{-kt} = m_0\\cdot2^{-t/1600}$<br>$2^{-t/1600} = \\dfrac{90}{100} \\Rightarrow \\dfrac{t}{1600} = \\log_2\\dfrac{100}{90}$<br>$t = 1600\\cdot\\dfrac{\\ln(100/90)}{\\ln 2} \\approx 243{,}2$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ x \\ge 0,\\ y \\ge 0\\}$. Giá trị của tích phân $\\displaystyle\\iint_D xy\\,dxdy$ bằng",
   "options": [
    "$30$.",
    "$60$.",
    "$15$.",
    "$32$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\int_0^{\\pi/2}\\sin\\varphi\\cos\\varphi\\,d\\varphi\\int_2^4 r^3\\,dr = \\dfrac12\\cdot\\dfrac{4^4 - 2^4}{4}$<br>Kết quả: $30$",
   "note": "Trong tọa độ cực $dxdy = r\\,dr\\,d\\varphi$; đường tròn $x^2 + y^2 = 2ax$ là $r = 2a\\cos\\varphi$ với $-\\dfrac{\\pi}{2} \\le \\varphi \\le \\dfrac{\\pi}{2}$."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt phẳng $z = 3$. Giá trị của tích phân $\\displaystyle\\iiint_V (x^2 + y^2)\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{243 \\pi}{10}$.",
    "$\\dfrac{243 \\pi}{20}$.",
    "$\\dfrac{243 \\pi}{5}$.",
    "$\\dfrac{81 \\pi}{2}$."
   ],
   "answer": 0,
   "explain": "Tọa độ trụ: $\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^3 r^3(3 - r)\\,dr = 2\\pi\\cdot\\dfrac{3^5}{20}$<br>Kết quả: $\\dfrac{243 \\pi}{10}$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = 9$ với mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = x^2 + y^2 + 1$. Khối lượng của sợi dây, tức $\\displaystyle\\oint_L \\rho\\,ds$, bằng",
   "options": [
    "$60 \\pi$.",
    "$90 \\pi$.",
    "$20 \\pi$.",
    "$30 \\pi$."
   ],
   "answer": 0,
   "explain": "Trên $L$, $\\rho = 9 + 1$ là hằng số nên khối lượng bằng $(9 + 1)\\cdot2\\pi\\cdot3$<br>Kết quả: $60 \\pi$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $L$ là cung parabol $y = x^2$ đi từ $O(0;0)$ đến $A(1;1)$. Giá trị của tích phân $\\displaystyle\\int_L (x^{2} - 3 y)\\,dx + (3 x + y^{2})\\,dy$ bằng",
   "options": [
    "$\\dfrac{5}{3}$.",
    "$\\dfrac{2}{3}$.",
    "$2$.",
    "$\\dfrac{4}{3}$."
   ],
   "answer": 0,
   "explain": "Thay $y = x^2,\\ dy = 2x\\,dx$: $\\displaystyle\\int_0^1\\left[2 x^{5} + 4 x^{2}\\right]dx = \\dfrac{5}{3}$<br>Kết quả: $\\dfrac{5}{3}$",
   "note": "Tích phân đường loại hai: thay $y = y(x)$, $dy = y'dx$; với đường cong kín thì dùng công thức Green."
  }
 ],
 "groups": [
  {
   "stem": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho các véc tơ $u_1 = (3;-1;0),\\ u_2 = (3;0;3),\\ u_3 = (0;-1;-1)$ và $v = (3;-4;-5)$.",
   "questions": [
    {
     "q": "Giá trị của $\\langle u_1, u_2\\rangle + \\langle u_2, u_3\\rangle$ bằng",
     "options": [
      "$6$.",
      "$12$.",
      "$9$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "$\\langle u_1, u_2\\rangle = 9,\\quad \\langle u_2, u_3\\rangle = -3$<br>Tổng: $6$"
    },
    {
     "q": "Định thức của ma trận có các hàng lần lượt là $u_1, u_2, u_3$ bằng",
     "options": [
      "$6$.",
      "$-6$.",
      "$7$.",
      "$4$."
     ],
     "answer": 0,
     "explain": "$\\begin{vmatrix}3 & -1 & 0 \\\\ 3 & 0 & 3 \\\\ 0 & -1 & -1\\end{vmatrix} = 6$<br>Định thức khác 0 nên $\\{u_1, u_2, u_3\\}$ là một cơ sở của $\\mathbb{R}^3$"
    },
    {
     "q": "Biết $v = au_1 + bu_2 + cu_3$, giá trị của $a + b + c$ bằng",
     "options": [
      "$3$.",
      "$4$.",
      "$5$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "$v = au_1 + bu_2 + cu_3$: viết theo từng tọa độ được hệ ba phương trình ba ẩn $a, b, c$<br>Giải hệ: $a = 2,\\ b = -1,\\ c = 2$<br>$a + b + c = 3$",
     "note": "Định thức khác 0 thì ba véc tơ là một cơ sở, nên biểu diễn của $v$ qua chúng là duy nhất."
    }
   ]
  },
  {
   "stem": "Một xưởng cần làm một thùng chứa hình hộp chữ nhật; sau khi rút gọn, chi phí vật liệu (đơn vị tiền) theo hai kích thước đáy $x > 0,\\ y > 0$ (mét) là $f(x,y) = xy + \\dfrac{50}{x} + \\dfrac{20}{y}$.",
   "questions": [
    {
     "q": "Giá trị của $f'_x(1;1)$ bằng",
     "options": [
      "$-49$.",
      "$49$.",
      "$-50$.",
      "$51$."
     ],
     "answer": 0,
     "explain": "$f'_x = y - \\dfrac{50}{x^2}$<br>Kết quả: $-49$"
    },
    {
     "q": "Giá trị của $f''_{xx}(5;2)$ bằng",
     "options": [
      "$\\dfrac{4}{5}$.",
      "$\\dfrac{2}{5}$.",
      "$- \\dfrac{4}{5}$.",
      "$4$."
     ],
     "answer": 0,
     "explain": "$f''_{xx} = \\dfrac{100}{x^3}$<br>Kết quả: $\\dfrac{4}{5}$"
    },
    {
     "q": "Chi phí vật liệu nhỏ nhất (giá trị cực tiểu của $f$) bằng",
     "options": [
      "$30$.",
      "$20$.",
      "$10$.",
      "$35$."
     ],
     "answer": 0,
     "explain": "$f'_x = f'_y = 0 \\Rightarrow y = \\dfrac{50}{x^2},\\ x = \\dfrac{20}{y^2} \\Rightarrow x = 5,\\ y = 2$; $f(5;2) = 30$<br>Kết quả: $30$",
     "note": "Điểm dừng: $f'_x = f'_y = 0$; phân loại bằng dấu của $AC - B^2$ và của $A$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 3 với $a_{ij} = ij + \\min\\{i,j\\}$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(\\dfrac12A^TA\\right)$.",
   "answer": [
    "2"
   ],
   "explain": "$A = \\begin{pmatrix}2 & 3 & 4 \\\\ 3 & 6 & 8 \\\\ 4 & 8 & 12\\end{pmatrix}$, $\\det A = 4$; kết quả bằng $\\dfrac{(\\det A)^2}{2^3}$ $= 2$<br>Đáp số: $2$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, rồi dùng $\\det\\left(A^T\\right) = \\det A$ và $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Gọi $M(a;b;c)$ là điểm cực trị của hàm số $f(x,y,z) = x^{2} - 2 x y + 2 y^{2} - 2 y + z^{2} - 4 z + 20$. Tính $a + 2b + 3c$.",
   "answer": [
    "9"
   ],
   "explain": "Giải $f'_x = f'_y = f'_z = 0$ được $M(1;1;2)$<br>Đáp số: $9$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Tìm bán kính hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{x^{3n}}{n\\cdot8^n}$.",
   "answer": [
    "2"
   ],
   "explain": "Đặt $t = x^3$: $\\sum\\dfrac{t^n}{n\\cdot8^n}$ có bán kính hội tụ 8 theo $t$, tức $|x|^3 < 8$<br>$R = 2$",
   "note": "Chuỗi theo $x^k$: đặt $t = x^k$; bán kính theo $x$ là căn bậc $k$ của bán kính theo $t$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 1$. Tính $y\\left(\\dfrac{\\pi}{2}\\right)$.",
   "answer": [
    "1"
   ],
   "explain": "$y = 3\\cos x + 1\\sin x$<br>Đáp số: $1$",
   "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi các mặt $y = x^2,\\ y = 9,\\ z = 0$ và $z = y$. Tính thể tích của $V$ <i>(viết kết quả dưới dạng số thập phân nếu không nguyên)</i>.",
   "answer": [
    "194.4",
    "972/5"
   ],
   "explain": "$V = \\displaystyle\\int_{-3}^{3}dx\\int_{x^2}^{9} y\\,dy = \\dfrac{972}{5}$<br>Đáp số: $194{,}4$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
