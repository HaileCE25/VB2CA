// ĐỀ SỐ 01 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-01",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 01",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lao động và nghề nghiệp",
  "prompt": "Theo số liệu thống kê lao động, quý III năm 2026 cả nước có khoảng 1,6 triệu thanh niên từ 15 đến 24 tuổi không có việc làm, không đi học và không tham gia đào tạo (thường gọi là thanh niên “3 không”), chiếm 11,2% tổng số thanh niên. Tỷ lệ thất nghiệp của thanh niên cũng luôn cao gấp nhiều lần mức chung: 8,67% trong quý II năm 2026, so với tỷ lệ thất nghiệp chung của lực lượng lao động năm 2025 là 2,22%. Trong khi đó, không ít doanh nghiệp cho biết họ vẫn khó tuyển được lao động có kỹ năng phù hợp.",
  "source": "(Tổng hợp từ số liệu của Cục Thống kê về thị trường lao động, 2025 – 2026)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về nghịch lý “người trẻ thiếu việc, doanh nghiệp thiếu người” được nêu ở trên và trách nhiệm của mỗi người trẻ trong việc chuẩn bị cho nghề nghiệp của chính mình.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Một cửa hàng bán ba loại giỏ quà I, II, III. Số (hộp bánh; gói trà; lọ mứt) trong mỗi giỏ của từng loại lần lượt được cho bởi các véc tơ $u_1 = (5;2;1),\\ u_2 = (2;3;2),\\ u_3 = (4;5;3)$ trong $\\mathbb{R}^3$. Cửa hàng đóng $a$ giỏ loại I, $b$ giỏ loại II và $c$ giỏ loại III thì dùng hết tổng cộng số (hộp bánh; gói trà; lọ mứt) là $v = (35;32;19)$, tức là $v = au_1 + bu_2 + cu_3$. Giá trị của $2 a + 3 b + c$ bằng",
   "options": [
    "$16$.",
    "$9$.",
    "$17$.",
    "$19$."
   ],
   "answer": 0,
   "explain": "$v = au_1 + bu_2 + cu_3 \\Leftrightarrow \\begin{cases}5 a + 2 b + 4 c = 35\\\\ 2 a + 3 b + 5 c = 32\\\\ a + 2 b + 3 c = 19\\end{cases}$<br>Giải hệ bằng phép khử Gauss: $a = 3,\\ b = 2,\\ c = 4$<br>$2 a + 3 b + c = 16$",
   "note": "Viết đẳng thức véc tơ theo từng tọa độ để được hệ phương trình tuyến tính; với phương trình véc tơ, chuyển vế như phương trình số."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(0;-3),\\ u_2(0;1),\\ u_3(-1;1),\\ u_4(-1;0),\\ u_5(0;-1)\\}$. Có bao nhiêu hệ con khác rỗng của $S$ độc lập tuyến tính?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$12$.",
    "$31$.",
    "$13$.",
    "$11$."
   ],
   "answer": 0,
   "explain": "Có 5 hệ một véc tơ và 7 hệ hai véc tơ độc lập tuyến tính<br>Kết quả: $12$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Một trạm quan trắc ghi lại 5 bộ số liệu, mỗi bộ gồm 4 chỉ số và được xem như một véc tơ trong $\\mathbb{R}^4$: $u_1 = (-2;3;3;0),\\ u_2 = (-2;-1;-1;0),\\ u_3 = (-6;1;1;0),\\ u_4 = (0;-8;-8;0),\\ u_5 = (-4;-6;-6;0)$. Một bộ số liệu là “thừa” nếu nó là tổ hợp tuyến tính của các bộ còn lại được giữ. Số lớn nhất các bộ số liệu có thể giữ lại sao cho chúng độc lập tuyến tính (tức là hạng của hệ véc tơ đã cho) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$5$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$u_3 = u_{1} + 2 u_{2}$; $u_4 = - 2 u_{1} + 2 u_{2}$; $u_5 = - u_{1} + 3 u_{2}$; còn $u_1, u_2$ độc lập tuyến tính nên hạng bằng 2<br>Kết quả: $2$",
   "note": "Hạng = số hàng khác không của dạng bậc thang; số véc tơ thừa = số véc tơ $-$ hạng."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}0 & 2 \\\\ 1 & 0\\end{pmatrix}$ và $B = \\begin{pmatrix}3 & 3 \\\\ -1 & 0\\end{pmatrix}$. Một học viên viết $(A + B)(A - B) = A^2 - B^2$. Để kiểm tra, xét ma trận $C = (A + B)(A - B) - (A^2 - B^2)$. Phần tử thuộc hàng 1 và cột 2 của $C$ bằng",
   "options": [
    "$6$.",
    "$0$.",
    "$-6$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$(A + B)(A - B) = A^2 - AB + BA - B^2 \\Rightarrow C = BA - AB$<br>$BA = \\begin{pmatrix}3 & 6 \\\\ 0 & -2\\end{pmatrix},\\quad AB = \\begin{pmatrix}-2 & 0 \\\\ 3 & 3\\end{pmatrix}$<br>$C = \\begin{pmatrix}5 & 6 \\\\ -3 & -5\\end{pmatrix}$; phần tử hàng 1, cột 2: $6$",
   "note": "Phép nhân ma trận không giao hoán: $(A + B)(A - B) = A^2 - AB + BA - B^2$; luôn giữ đúng thứ tự các thừa số."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 1 & 1 \\\\ -1 & 4 & m \\\\ 1 & 16 & m^{2}\\end{pmatrix}$ ($m$ là tham số). Biết rằng một ma trận vuông khả nghịch khi và chỉ khi định thức của nó khác 0. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để $A$ khả nghịch?",
   "options": [
    "$9$.",
    "$11$.",
    "$8$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$\\det A = 5 \\left(m - 4\\right) \\left(m + 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m \\in \\{-1;4\\}$<br>Đoạn $[-5;5]$ có $11$ số nguyên, trong đó $2$ số làm định thức bằng 0<br>Số giá trị cần tìm: $11 - 2 = 9$",
   "note": "$A$ khả nghịch $\\Leftrightarrow \\det A \\ne 0$: đếm các số nguyên trong đoạn rồi trừ các nghiệm của $\\det A = 0$ nằm trong đoạn."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cùng cấp $n \\ge 2$ và $k$ là một số thực. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\det(AB) = \\det A\\cdot\\det B$.",
    "$\\det(A + B) = \\det A + \\det B$.",
    "$\\det(kA) = k\\det A$.",
    "$AB = BA$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\det(AB) = \\det A\\cdot\\det B$. Đây là tính chất nhân của định thức.<br><b>Sai:</b> $\\det(A + B) = \\det A + \\det B$. Với $A = B = I$ cấp 2: $\\det(A + B) = 4$ còn $\\det A + \\det B = 2$.<br><b>Sai:</b> $\\det(kA) = k\\det A$. Mỗi hàng trong $n$ hàng đều được nhân với $k$ nên $\\det(kA) = k^n\\det A$.<br><b>Sai:</b> $AB = BA$. Phép nhân ma trận không giao hoán, ví dụ $A = \\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, $B = \\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$ có $AB \\ne BA$."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp 4 có $\\det A = -2$ và $\\det B = 5$. Giá trị của $\\det\\left(3A^{2}(B^T)^{-1}\\right)$ bằng<span class=\"q-hint\">Lưu ý: nhớ rằng $\\det(kA) = k^n\\det A$ với $A$ vuông cấp $n$.</span>",
   "options": [
    "$64.8$.",
    "$2.4$.",
    "$1620$.",
    "$-64.8$."
   ],
   "answer": 0,
   "explain": "$\\left(3\\right)^{4}\\cdot(\\det A)^{2}\\cdot\\dfrac{1}{\\det B} = \\dfrac{324}{5}$<br>Kết quả: $64.8$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 4x - \\sin 4x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$32$.",
    "$\\dfrac{32}{3}$.",
    "$2$.",
    "$64$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 4x$: $\\tan u - \\sin u = \\tan u\\,(1 - \\cos u) \\sim u\\cdot\\dfrac{u^2}{2} = \\dfrac{u^3}{2}$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(4x)^3}{2x^3} = \\dfrac{64}{2} = 32$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Cho hàm số $f$ xác định trên khoảng $(a;b)$ và $x_0 \\in (a;b)$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f$ có đạo hàm tại $x_0$ thì $f$ liên tục tại $x_0$.",
    "Nếu $f$ liên tục tại $x_0$ thì $f$ có đạo hàm tại $x_0$.",
    "Nếu tồn tại $\\lim\\limits_{x\\to x_0}f(x)$ thì $f$ liên tục tại $x_0$.",
    "Nếu $f'(x_0) = 0$ thì $f$ đạt cực trị tại $x_0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f$ có đạo hàm tại $x_0$ thì $f$ liên tục tại $x_0$. $f(x) - f(x_0) = \\dfrac{f(x) - f(x_0)}{x - x_0}\\cdot(x - x_0) \\to f'(x_0)\\cdot0 = 0$.<br><b>Sai:</b> Nếu $f$ liên tục tại $x_0$ thì $f$ có đạo hàm tại $x_0$. $f(x) = |x|$ liên tục tại $0$ nhưng không có đạo hàm tại $0$.<br><b>Sai:</b> Nếu tồn tại $\\lim\\limits_{x\\to x_0}f(x)$ thì $f$ liên tục tại $x_0$. Còn cần giới hạn đó bằng đúng $f(x_0)$.<br><b>Sai:</b> Nếu $f'(x_0) = 0$ thì $f$ đạt cực trị tại $x_0$. $f(x) = x^3$ có $f'(0) = 0$ nhưng không đạt cực trị tại $0$."
  },
  {
   "q": "Cho hàm số $f(x) = x^2e^{-2x}$. Dùng công thức Leibniz $(uv)^{(n)} = \\sum_{k=0}^{n} C_n^k u^{(k)}v^{(n-k)}$, giá trị của đạo hàm cấp tám $f^{(8)}(0)$ bằng",
   "options": [
    "$3584$.",
    "$1792$.",
    "$7168$.",
    "$256$."
   ],
   "answer": 0,
   "explain": "$u = x^2$: $u(0) = 0,\\ u'(0) = 0,\\ u''(0) = 2,\\ u^{(k)} = 0\\ (k \\ge 3)$; $v = e^{-2x}$: $v^{(m)}(0) = (-2)^m$<br>$f^{(8)}(0) = C_{8}^2\\cdot u''(0)\\cdot v^{(6)}(0) = 28\\cdot2\\cdot(-2)^{6} = 3584$",
   "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số."
  },
  {
   "q": "Cho hàm số $f(x,y) = \\arctan\\dfrac{y}{x}$. Giá trị của $f''_{xx}(1;1)$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$- \\dfrac{1}{2}$.",
    "$0$.",
    "$\\dfrac{1}{4}$."
   ],
   "answer": 0,
   "explain": "$f'_x = \\dfrac{1}{1 + \\frac{y^2}{x^2}}\\cdot\\left(-\\dfrac{y}{x^2}\\right) = -\\dfrac{y}{x^2 + y^2}$<br>$f''_{xx} = \\dfrac{2xy}{(x^2 + y^2)^2}$<br>$f''_{xx}(1;1) = \\dfrac{2}{4} = \\dfrac{1}{2}$",
   "note": "Đạo hàm riêng theo một biến thì coi biến kia là hằng số; với hàm ẩn $F(x,y,z) = 0$: $z'_x = -\\dfrac{F'_x}{F'_z}$."
  },
  {
   "q": "Dùng vi phân toàn phần của hàm $f(x,y) = \\sqrt{x^2 + y^2}$ tại điểm $(6;8)$, tức là $f(x_0 + \\Delta x;\\ y_0 + \\Delta y) \\approx f(x_0;y_0) + f'_x\\Delta x + f'_y\\Delta y$, giá trị gần đúng của $\\sqrt{(5{,}98)^2 + (7{,}96)^2}$ là",
   "options": [
    "9,956.",
    "10,044.",
    "9,94.",
    "9,56."
   ],
   "answer": 0,
   "explain": "$f'_x = \\dfrac{x}{\\sqrt{x^2+y^2}},\\quad f'_y = \\dfrac{y}{\\sqrt{x^2+y^2}}$<br>Tại $(6;8)$: $f = 10,\\ f'_x = \\dfrac{6}{10},\\ f'_y = \\dfrac{8}{10}$; $\\Delta x = -0{,}02,\\ \\Delta y = -0{,}04$<br>$f \\approx 10 + \\dfrac{6\\cdot(-0{,}02) + 8\\cdot(-0{,}04)}{10} = 9{,}956$",
   "note": "$df = f'_xdx + f'_ydy$; khi tính gần đúng, $\\Delta x$ và $\\Delta y$ có thể mang dấu âm."
  },
  {
   "q": "Cho hàm số $f(x,y) = - x^{2} y - x y^{2} + x y$. Hàm số có bao nhiêu điểm dừng?",
   "options": [
    "$4$.",
    "$1$.",
    "$5$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$f'_x = - 2 x y - y^{2} + y,\\quad f'_y = - x^{2} - 2 x y + x$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(0;0)$, $(0;1)$, $(\\dfrac{1}{3};\\dfrac{1}{3})$, $(1;0)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $-1$, $-1$, $\\dfrac{1}{3}$, $-1$<br>Số điểm dừng: $4$; số điểm cực trị (có $AC - B^2 > 0$): $1$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\arctan n}{n^2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2^n}{n!}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(1 - \\cos\\dfrac1n\\right)$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{3^n}{2^n+n}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $u_n \\le \\dfrac{\\pi}{2n^2}$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 2: $\\dfrac{u_{n+1}}{u_n} = \\dfrac{2}{n+1} \\to 0 < 1$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 3: $u_n \\sim \\dfrac{1}{2n^2}$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 4: $u_n \\sim \\left(\\dfrac32\\right)^n \\not\\to 0$ $\\Rightarrow$ phân kỳ<br>Số chuỗi hội tụ: $3$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{2^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{n+1}$. Có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\frac{|u_{n+1}|}{|u_n|} \\to \\frac12 < 1$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 2: $|u_n| \\le \\frac{1}{n^2}$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 3: $\\sum\\frac{1}{n^2}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 4: $|u_n| \\to 1 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Số chuỗi hội tụ: $3$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
   "options": [
    "$y' + y\\tan x = \\cos x$.",
    "$y' = e^{x - y}$.",
    "$y' - y = xy^2$.",
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' + y\\tan x = \\cos x$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$<br><b>Sai:</b> $y' = e^{x - y}$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' - y = xy^2$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi<br><b>Sai:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' - \\dfrac{2y}{x} = x^{2}$ $(x > 0)$ thỏa mãn $y(1) = 5$. Giá trị của $y(2)$ bằng",
   "options": [
    "$24$.",
    "$20$.",
    "$7$.",
    "$28$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{2}$: $\\left(\\dfrac{y}{x^{2}}\\right)' = 1$<br>$\\dfrac{y}{x^{2}} = x + C \\Rightarrow y = x^{2}(x + C)$<br>$y(1) = 1 + C = 5 \\Rightarrow C = 4$<br>$y(2) = 4\\cdot(2 + 4) = 24$",
   "note": "Đưa về dạng chuẩn rồi mới tìm thừa số tích phân $e^{\\int p\\,dx}$ (hoặc kiểm tra $P'_y = Q'_x$); hằng số $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bệnh nhân được truyền thuốc liên tục qua đường tĩnh mạch. Nồng độ thuốc trong máu $y(t)$ (mg/lít) sau $t$ giờ thỏa mãn phương trình $y' = k(64 - y)$ với $k = \\dfrac{\\ln 2}{6}$ và $y(0) = 0$. Nồng độ thuốc trong máu sau 18 giờ bằng",
   "options": [
    "$56$ mg/lít.",
    "$60$ mg/lít.",
    "$8$ mg/lít.",
    "$64$ mg/lít."
   ],
   "answer": 0,
   "explain": "$y' + ky = 64k$ (tuyến tính cấp một) $\\Rightarrow y = 64 + Ce^{-kt}$<br>$y(0) = 0 \\Rightarrow C = -64$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{6}\\cdot18} = 2^{-3} = \\dfrac{1}{8}$<br>$y(18) = 64 + \\dfrac{-64}{8} = 56$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y'' - 4y' + 5y = 0$ là",
   "options": [
    "$y = e^{2x}(C_1\\cos x + C_2\\sin x)$.",
    "$y = e^{-2x}(C_1\\cos x + C_2\\sin x)$.",
    "$y = e^{-x}(C_1\\cos 2x + C_2\\sin 2x)$.",
    "$y = C_1e^{2x} + C_2e^{-5x}$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 5 = 0$<br>$\\Delta' = 4 - 5 = -1 \\Rightarrow k = 2 \\pm i$<br>$y = e^{2x}(C_1\\cos x + C_2\\sin x)$",
   "note": "Hai nghiệm thực phân biệt: $C_1e^{k_1x} + C_2e^{k_2x}$; nghiệm kép: $(C_1 + C_2x)e^{kx}$; nghiệm phức $\\alpha \\pm i\\beta$: $e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$."
  },
  {
   "q": "Cho $I = \\displaystyle\\int_{0}^{3} dx\\int_{\\frac{x^2}{3}}^{x} f(x,y)\\,dy$. Vẽ miền lấy tích phân rồi đổi thứ tự lấy tích phân, ta được",
   "options": [
    "$I = \\displaystyle\\int_{0}^{3} dy\\int_{y}^{\\sqrt{3y}} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{3} dy\\int_{\\sqrt{3y}}^{y} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{3} dy\\int_{0}^{\\sqrt{3y}} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{9} dy\\int_{y}^{\\sqrt{3y}} f(x,y)\\,dx$."
   ],
   "answer": 0,
   "explain": "Miền lấy tích phân: $\\frac{x^2}{3} \\le y \\le x$, $0 \\le x \\le 3$, tương đương $y \\le x \\le \\sqrt{3y}$, $0 \\le y \\le 3$.",
   "note": "Vẽ miền $D$ trước khi đổi thứ tự; cận của tích phân ngoài phải là hằng số."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi mặt paraboloid $z = x^2 + y^2$ và mặt phẳng $z = 4$. Trong tọa độ trụ $x = r\\cos\\varphi,\\ y = r\\sin\\varphi,\\ z = z$, tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}r\\,dr\\int_{r^2}^{4} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}dr\\int_{r^2}^{4} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{4}r\\,dr\\int_{r^2}^{4} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}r\\,dr\\int_{0}^{r^2} f\\,dz$."
   ],
   "answer": 0,
   "explain": "Hình chiếu của $V$ lên $Oxy$ là hình tròn $r \\le 2$; $r^2 \\le z \\le 4$; Jacobian bằng $r$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Một hãng dùng 3 loại vật liệu để sản xuất 4 loại sản phẩm với ma trận định mức $A = \\begin{pmatrix}4 & 1 & 5 & 4 \\\\ 2 & 3 & 1 & 2 \\\\ 1 & 2 & 5 & 3\\end{pmatrix}$, trong đó $a_{ij}$ là số đơn vị vật liệu loại $i$ cần để sản xuất 1 đơn vị sản phẩm loại $j$. Hãng dự định sản xuất lần lượt $20, 15, 5, 15$ đơn vị sản phẩm các loại 1, 2, 3, 4. Biết giá mỗi đơn vị vật liệu loại 1, 2, 3 lần lượt là $3, 5, 5$ (đơn vị tiền), tổng chi phí vật liệu để thực hiện kế hoạch trên bằng",
   "options": [
    "$1740$.",
    "$420$.",
    "$1800$.",
    "$1620$."
   ],
   "answer": 0,
   "explain": "Nhu cầu vật liệu $AX = (180;120;120)^T$; chi phí bằng tích vô hướng với véc tơ giá: $1740$<br>Kết quả: $1740$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 1 & 2 & 2 \\\\ 3 & -2 & -1 & 2 \\\\ 4 & -6 & -6 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 0$.",
    "$m = 1$.",
    "$m = -1$.",
    "$m = 4$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $-2$ lần hàng 1 cộng $2$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = 0$; ngược lại hạng bằng 3<br>Kết quả: $m = 0$",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}-2 & 1 \\\\ -7 & 3\\end{pmatrix}$ và $B = \\begin{pmatrix}4 & 7 \\\\ 13 & 23\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X = B$ là",
   "options": [
    "$\\begin{pmatrix}-1 & -2 \\\\ 2 & 3\\end{pmatrix}$.",
    "$\\begin{pmatrix}61 & -18 \\\\ 200 & -59\\end{pmatrix}$.",
    "$\\begin{pmatrix}5 & 16 \\\\ 14 & 45\\end{pmatrix}$.",
    "$\\begin{pmatrix}-1 & 2 \\\\ -2 & 3\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$X = A^{-1}B$; kết quả $X = \\begin{pmatrix}-1 & -2 \\\\ 2 & 3\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}x + y + 2 z = 2\\\\ 2 x + 3 y + 5 z = 2\\\\ x + 2 y + (m^2 + 2)z = m - 1\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Hệ vô nghiệm khi và chỉ khi",
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
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{e^{ax} - b - 6x}{x^2} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b + L$ bằng",
   "options": [
    "$25$.",
    "$24$.",
    "$7$.",
    "$43$."
   ],
   "answer": 0,
   "explain": "$e^{ax} = 1 + ax + \\dfrac{a^2x^2}{2} + o(x^2)$<br>Tử số $= (1 - b) + (a - 6)x + \\dfrac{a^2}{2}x^2 + o(x^2)$<br>Giới hạn hữu hạn $\\Leftrightarrow b = 1,\\ a = 6$; khi đó $L = \\dfrac{a^2}{2} = 18$<br>$a + b + L = 25$",
   "note": "Giới hạn hữu hạn buộc các số hạng bậc thấp ở tử triệt tiêu; với hiệu hai căn thì nhân lượng liên hợp."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}x^{2} & \\text{khi } x \\le 3\\\\ ax + b & \\text{khi } x > 3\\end{cases}$ có đạo hàm tại $x = 3$. Giá trị của $a + b$ bằng",
   "options": [
    "$-3$.",
    "$6$.",
    "$-9$.",
    "$-54$."
   ],
   "answer": 0,
   "explain": "Liên tục tại $x = 3$: $9 = (3)a + b$<br>Đạo hàm trái tại $x = 3$: $(x^{2})' = 2 x \\to 6$; đạo hàm phải bằng $a$, nên $a = 6$<br>$b = 9 - (3)\\cdot(6) = -9$<br>$a + b = -3$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một bể chứa hình trụ đứng có bán kính đáy 1 mét, chiều cao 4 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước trong bể lên một bồn chứa đặt cao hơn miệng bể 3 mét (làm tròn đến hàng phần chục) bằng",
   "options": [
    "615,8 <i>kJ</i>.",
    "246,3 <i>kJ</i>.",
    "862,1 <i>kJ</i>.",
    "461,8 <i>kJ</i>."
   ],
   "answer": 0,
   "explain": "Lớp nước dày $dh$ ở độ sâu $h$ có khối lượng $1000\\cdot\\pi\\cdot1\\,dh$, phải nâng lên $h + 3$ mét<br>$W = \\displaystyle\\int_0^{4} 9800\\pi\\cdot1\\,(h + 3)\\,dh = 9800\\pi\\left[\\dfrac{h^2}{2} + 3h\\right]_0^{4}$<br>$= 9800\\pi\\cdot20 \\approx 615752\\ J = 615{,}8\\ kJ$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = 2 p_{1} + p_{2} - p_{3} + 5\\\\ s_2 = 3 p_{2} - p_{3} - 45\\\\ s_3 = p_{1} - p_{2} + p_{3} + 40\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = - 2 p_{1} + p_{3} + 55\\\\ d_2 = - p_{2} + p_{3} + 65\\\\ d_3 = p_{1} + p_{2} - p_{3} + 10\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Gọi $p_1^*, p_2^*, p_3^*$ là các mức giá cân bằng, giá trị của $p_1^* + p_2^* + p_3^*$ bằng",
   "options": [
    "$80$.",
    "$140$.",
    "$85$.",
    "$75$."
   ],
   "answer": 0,
   "explain": "Giải hệ $s_i = d_i$ được giá cân bằng $(15;40;25)$, lượng cung (cầu) tương ứng $(50;50;40)$<br>Kết quả: $80$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Bằng cách tách $\\dfrac{1}{n(n+3)} = \\dfrac{1}{3}\\left(\\dfrac1n - \\dfrac{1}{n+3}\\right)$, tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n(n+3)}$ bằng",
   "options": [
    "$\\dfrac{11}{18}$.",
    "$\\dfrac{1}{3}$.",
    "$\\dfrac{11}{6}$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$S_N = \\dfrac{1}{3}\\displaystyle\\sum_{n=1}^{N}\\left(\\dfrac1n - \\dfrac{1}{n+3}\\right) = \\dfrac{1}{3}\\left(1 + \\dfrac12 + \\dfrac13 - \\sum_{n=N+1}^{N+3}\\dfrac1n\\right)$<br>$N \\to +\\infty$: $S = \\dfrac{1}{3}\\cdot\\dfrac{11}{6} = \\dfrac{11}{18}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1^{n+1} + 2^n}{3^n} = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng",
   "options": [
    "$5$.",
    "$1$.",
    "$7$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1^{n+1}}{3^n} = 1\\sum_{n=2}^{+\\infty}\\left(\\dfrac{1}{3}\\right)^n = 1\\cdot\\dfrac{\\left(\\frac{1}{3}\\right)^{2}}{1 - \\frac{1}{3}} = \\dfrac{1}{6}$<br>$\\displaystyle\\sum_{n=2}^{+\\infty}\\left(\\dfrac{2}{3}\\right)^n = \\dfrac{\\left(\\frac{2}{3}\\right)^{2}}{1 - \\frac{2}{3}} = \\dfrac{4}{3}$<br>Tổng: $\\dfrac{1}{6} + \\dfrac{4}{3} = \\dfrac{3}{2} \\Rightarrow a + b = 5$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}nx^n$ bằng",
   "options": [
    "$\\dfrac{x}{(1-x)^2}$.",
    "$\\dfrac{1}{(1-x)^2}$.",
    "$\\dfrac{x}{1-x}$.",
    "$\\dfrac{x}{(1+x)^2}$."
   ],
   "answer": 0,
   "explain": "Đạo hàm từng số hạng $\\sum x^n = \\dfrac{1}{1-x}$ rồi nhân với $x$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = e^{x-y}$ là",
   "options": [
    "$e^y = e^x + C$.",
    "$y = x + C$.",
    "$e^y = Ce^x$.",
    "$e^{-y} = e^{-x} + C$."
   ],
   "answer": 0,
   "explain": "$e^y\\,dy = e^x\\,dx$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = \\dfrac{y}{x} + x$ là $(x > 0)$",
   "options": [
    "$y = x^2 + Cx$.",
    "$y = x^2 + C$.",
    "$y = \\dfrac{x^2}{2} + Cx$.",
    "$y = Cx^2 + x$."
   ],
   "answer": 0,
   "explain": "$\\left(\\dfrac{y}{x}\\right)' = 1$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Một bể có 2000 lít nước muối với nồng độ muối là 0,05 kg/lít. Người ta bơm nước muối với nồng độ 0,01 kg/lít vào bể với tốc độ 10 lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau 30 phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "88,9.",
    "86,1.",
    "20,0.",
    "68,9."
   ],
   "answer": 0,
   "explain": "Gọi $S(t)$ là lượng muối (kg): $S' = 0{,}01\\cdot10 - \\dfrac{S}{2000}\\cdot10 = 0{,}1 - \\dfrac{10S}{2000},\\quad S(0) = 100$<br>Nghiệm: $S(t) = 20 + Ce^{-10t/2000}$; $S(0) = 100 \\Rightarrow C = 80$<br>$S(30) = 20 + 80e^{-0{,}15} \\approx 88{,}9$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Trong mặt phẳng $Oxy$, cho miền $D = \\{(x,y): x^2 + y^2 \\le 4x\\}$. Chuyển sang tọa độ cực (khi đó biên của $D$ là $r = 4\\cos\\varphi$), giá trị của tích phân $\\displaystyle\\iint_D \\sqrt{x^2 + y^2}\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{256}{9}$.",
    "$\\dfrac{128}{9}$.",
    "$\\dfrac{64}{3}$.",
    "$\\dfrac{256}{3}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\int_{-\\pi/2}^{\\pi/2}d\\varphi\\int_0^{4\\cos\\varphi} r^2\\,dr = \\dfrac{64}{3}\\int_{-\\pi/2}^{\\pi/2}\\cos^3\\varphi\\,d\\varphi$ và $\\displaystyle\\int_{-\\pi/2}^{\\pi/2}\\cos^3\\varphi\\,d\\varphi = \\dfrac43$<br>Kết quả: $\\dfrac{256}{9}$",
   "note": "Trong tọa độ cực $dxdy = r\\,dr\\,d\\varphi$; đường tròn $x^2 + y^2 = 2ax$ là $r = 2a\\cos\\varphi$ với $-\\dfrac{\\pi}{2} \\le \\varphi \\le \\dfrac{\\pi}{2}$."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi mặt $z = x^2 + y^2$ và mặt phẳng $z = 1$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{\\pi}{3}$.",
    "$\\dfrac{\\pi}{6}$.",
    "$\\dfrac{\\pi}{4}$.",
    "$\\dfrac{2 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ trụ: $\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^1 r\\cdot\\dfrac{1 - r^4}{2}\\,dr$<br>Kết quả: $\\dfrac{\\pi}{3}$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Cho $L$ là cung tròn $x^2 + y^2 = 1$ nằm trong góc phần tư thứ nhất. Dùng tham số hóa $x = \\cos t,\\ y = \\sin t$, giá trị của tích phân $\\displaystyle\\int_L xy\\,ds$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$1$.",
    "$\\dfrac{1}{4}$.",
    "$\\dfrac{\\pi}{4}$."
   ],
   "answer": 0,
   "explain": "$ds = 1\\,dt$: $\\displaystyle\\int_0^{\\pi/2} 1^3\\sin t\\cos t\\,dt = \\dfrac{1^3}{2}$<br>Kết quả: $\\dfrac{1}{2}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Một chất điểm chuyển động đúng một vòng theo chiều ngược kim đồng hồ trên đường tròn $x^2 + y^2 = 9$ (đơn vị: mét) dưới tác dụng của lực $\\vec F = (- y;\\ 2 x)$ (đơn vị: Niu tơn). Công của lực sinh ra, tức $\\displaystyle\\oint P\\,dx + Q\\,dy$, bằng",
   "options": [
    "$27 \\pi$.",
    "$9 \\pi$.",
    "$18 \\pi$.",
    "$54 \\pi$."
   ],
   "answer": 0,
   "explain": "Công thức Green: $\\displaystyle\\iint_{x^2+y^2\\le9}\\left(\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}\\right)dxdy = 3\\cdot\\pi\\cdot9$<br>Kết quả: $27 \\pi$",
   "note": "Tích phân đường loại hai: thay $y = y(x)$, $dy = y'dx$; với đường cong kín thì dùng công thức Green."
  }
 ],
 "groups": [
  {
   "stem": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(0;1;1);\\ u_2(1;0;1);\\ u_3(1;1;0)\\}$. Gọi $A$ là ma trận có các dòng theo thứ tự là các véc tơ trong $S$ và $I$ là ma trận đơn vị cấp 3.",
   "questions": [
    {
     "q": "Định thức của ma trận $A$ bằng",
     "options": [
      "$2$.",
      "$-1$.",
      "$0$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$A = -1I + 1J$ ($J$ là ma trận toàn số 1) có các trị riêng $-1$ (bội 2) và $2$<br>Kết quả: $2$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
     "options": [
      "$\\dfrac{3}{2}$.",
      "$-3$.",
      "$\\dfrac{1}{2}$.",
      "$6$."
     ],
     "answer": 0,
     "explain": "Véc tơ $(1;1;1)$ là véc tơ riêng ứng với trị riêng $2$ nên tổng mỗi hàng của $A^{-1}$ bằng $\\dfrac{1}{2}$; tổng tất cả bằng $\\dfrac{3}{2}$<br>Kết quả: $\\dfrac{3}{2}$"
    },
    {
     "q": "Gọi $X$ là tập hợp các trị riêng của $A$, tổng bình phương các phần tử của $X$ bằng",
     "options": [
      "$5$.",
      "$6$.",
      "$1$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$A = -1I + 1J$ ($J$ là ma trận toàn số 1) có các trị riêng $-1$ (bội 2) và $2$. Tập hợp không kể bội<br>Kết quả: $5$",
     "note": "Tổng các trị riêng bằng vết, tích các trị riêng bằng định thức của ma trận."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{3} + 3 x y^{2} - 30 x - 18 y$.",
   "questions": [
    {
     "q": "Giá trị của $f''_{xx}(3;1) + f''_{yy}(3;1)$ bằng",
     "options": [
      "$36$.",
      "$18$.",
      "$24$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$f''_{xx} = 6x$, $f''_{yy} = 6x$<br>Kết quả: $36$"
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
     "explain": "$x^2 + y^2 = 10$ và $xy = 3$ cho bốn điểm $(\\pm3;\\pm1),\\ (\\pm1;\\pm3)$ (cùng dấu)<br>Kết quả: $4$"
    },
    {
     "q": "Giá trị cực tiểu của hàm số đã cho bằng",
     "options": [
      "$-72$.",
      "$72$.",
      "$-56$.",
      "$-74$."
     ],
     "answer": 0,
     "explain": "Tại $(3;1)$: $AC - B^2 = 36(3^2 - 1^2) > 0$ và $A = 18 > 0$ nên là cực tiểu<br>Kết quả: $-72$",
     "note": "Điểm dừng: $f'_x = f'_y = 0$; phân loại bằng dấu của $AC - B^2$ và của $A$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 3 với $a_{ij} = |i - j| + i$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(3A^{-1}\\right)$.",
   "answer": [
    "2.25",
    "9/4"
   ],
   "explain": "$A = \\begin{pmatrix}1 & 2 & 3 \\\\ 3 & 2 & 3 \\\\ 5 & 4 & 3\\end{pmatrix}$, $\\det A = 12$; kết quả bằng $\\dfrac{3^3}{\\det A}$ $= \\dfrac{9}{4}$<br>Đáp số: $2{,}25$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, rồi dùng $\\det\\left(A^T\\right) = \\det A$ và $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị cực tiểu của hàm số $f(x,y,z) = x^{2} - 2 x y + 2 y^{2} - 4 y + z^{2} - 2 z + 30$.",
   "answer": [
    "25"
   ],
   "explain": "Điểm dừng $(2;2;1)$; dạng toàn phương xác định dương nên đó là điểm cực tiểu, $f = 25$<br>Đáp số: $25$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{5^n x^n}{n + 2^n}$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $5 a + 3 b$.",
   "answer": [
    "25"
   ],
   "explain": "$\\sqrt[n]{|a_n|} \\to \\dfrac{5}{2}$ nên $R = \\dfrac{2}{5}$<br>Đáp số: $25$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y' - 2y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 3$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "109"
   ],
   "explain": "$y = C_1e^{2x} + C_2e^{-x}$ với $C_1 = 2,\\ C_2 = 1$; $y(2) \\approx 109{,}33$<br>Đáp số: $109$",
   "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể nằm trong góc phần tám thứ nhất, được giới hạn bởi các mặt phẳng $x = 2,\\ y = 0,\\ y = x,\\ z = 0,\\ z = x + 2 y$. Gọi $T$ là thể tích của $V$, tính $3T$.",
   "answer": [
    "16"
   ],
   "explain": "$V = \\displaystyle\\int_0^2 dx\\int_0^x (x + 2 y)\\,dy = \\dfrac{16}{3}$<br>Đáp số: $16$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
