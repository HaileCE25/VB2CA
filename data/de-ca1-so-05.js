// ĐỀ SỐ 05 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-05",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 05",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lí tưởng và trách nhiệm xã hội",
  "prompt": "Tháng 8/2025, Bộ Chính trị ban hành Nghị quyết số 71-NQ/TW về đột phá phát triển giáo dục và đào tạo, đặt ra các mục tiêu cụ thể cho từng giai đoạn đến năm 2030, 2035 và tầm nhìn đến năm 2045. Trong khi Nhà nước coi giáo dục là quốc sách hàng đầu và dành nhiều nguồn lực cho người học, vẫn có không ít người trẻ xem việc học chỉ là để “có tấm bằng”, học đối phó, học vì kỳ vọng của người khác mà chưa tự trả lời được câu hỏi: mình học để làm gì, cho ai?",
  "source": "(Tổng hợp từ báo chí về Nghị quyết 71-NQ/TW, 2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về mục đích của việc học và trách nhiệm của người học đối với bản thân, gia đình và đất nước trong giai đoạn hiện nay.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-4;4;-7)$ và $v = (-6;-7;6)$. Gọi $\\alpha$ là góc giữa $u$ và $v$, giá trị của $\\cos\\alpha$ bằng",
   "options": [
    "$- \\dfrac{46}{99}$.",
    "$\\dfrac{46}{99}$.",
    "$- \\dfrac{46}{81}$.",
    "$- \\dfrac{23}{10}$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = -46$<br>$|u| = \\sqrt{81} = 9,\\quad |v| = \\sqrt{121} = 11$<br>$\\cos\\alpha = \\dfrac{\\langle u, v\\rangle}{|u|\\,|v|} = - \\dfrac{46}{99}$",
   "note": "$\\cos\\alpha = \\dfrac{\\langle u, v\\rangle}{|u|\\,|v|}$; dấu của $\\cos\\alpha$ là dấu của tích vô hướng."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(2;1;2),\\ u_2(5;1;2),\\ u_3(2;-1;0),\\ u_4(3;0;0)\\}$. Có bao nhiêu hệ con gồm đúng 3 véc tơ của $S$ là cơ sở của $\\mathbb{R}^3$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$3$.",
    "$4$.",
    "$2$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Có $C_4^3 = 4$ hệ con gồm 3 véc tơ, trong đó 1 hệ phụ thuộc tuyến tính<br>Kết quả: $3$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Hạng của ma trận $A = \\begin{pmatrix}1 & -1 & -2 & -2 \\\\ 2 & 1 & -2 & 3 \\\\ 0 & 3 & 2 & 7\\end{pmatrix}$ bằng",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng đưa $A$ về dạng bậc thang: $\\begin{pmatrix}1 & -1 & -2 & -2 \\\\ 0 & 3 & 2 & 7 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Số hàng khác không của dạng bậc thang: $2$<br>$\\operatorname{rank}A = 2$",
   "note": "Chỉ dùng biến đổi sơ cấp trên hàng; hạng không vượt quá số hàng và số cột."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}0 & 1 & 0 \\\\ -1 & 1 & -1\\end{pmatrix}$ và $B = \\begin{pmatrix}-2 & -2 \\\\ 3 & 1 \\\\ -2 & -1\\end{pmatrix}$. Xét ma trận $C = (AB)^T - B^TA^T + AA^T$. Phần tử thuộc hàng 1 và cột 2 của $C$ bằng",
   "options": [
    "$1$.",
    "$-1$.",
    "$7$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Tính chất của phép chuyển vị: $(AB)^T = B^TA^T$ nên $C = AA^T$<br>$AA^T = \\begin{pmatrix}1 & 1 \\\\ 1 & 3\\end{pmatrix}$<br>Phần tử thuộc hàng 1 và cột 2: $1$",
   "note": "$(AB)^T = B^TA^T$ (đảo thứ tự) nên hai số hạng đầu triệt tiêu."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 2 khả nghịch có ma trận nghịch đảo $A^{-1} = \\begin{pmatrix}-2 & 1 \\\\ -1 & 1\\end{pmatrix}$. Phần tử thuộc hàng 2 và cột 1 của ma trận $A$ bằng",
   "options": [
    "$-1$.",
    "$1$.",
    "$0$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "$A = \\left(A^{-1}\\right)^{-1}$<br>$\\det\\left(A^{-1}\\right) = -1$ nên $A = -\\begin{pmatrix}1 & -1 \\\\ 1 & -2\\end{pmatrix} = \\begin{pmatrix}-1 & 1 \\\\ -1 & 2\\end{pmatrix}$<br>Phần tử hàng 2, cột 1: $-1$",
   "note": "$\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$ và $\\det(kA) = k^n\\det A$ với $n$ là cấp của ma trận."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$ có $\\det A = 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Các véc tơ cột của $A$ phụ thuộc tuyến tính.",
    "Hệ thuần nhất $AX = 0$ chỉ có nghiệm tầm thường.",
    "Ma trận $A$ khả nghịch.",
    "Hạng của $A$ bằng $n$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Các véc tơ cột của $A$ phụ thuộc tuyến tính. $\\det A = 0 \\Leftrightarrow$ hạng của $A$ nhỏ hơn $n \\Leftrightarrow$ $n$ véc tơ cột phụ thuộc tuyến tính.<br><b>Sai:</b> Hệ thuần nhất $AX = 0$ chỉ có nghiệm tầm thường. Hạng nhỏ hơn $n$ nên hệ có ẩn tự do, tức có nghiệm không tầm thường.<br><b>Sai:</b> Ma trận $A$ khả nghịch. $A$ khả nghịch khi và chỉ khi $\\det A \\ne 0$.<br><b>Sai:</b> Hạng của $A$ bằng $n$. Hạng bằng $n$ khi và chỉ khi $\\det A \\ne 0$."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp 3 có $\\det A = -2$ và $\\det B = 2$. Giá trị của $\\det\\left(3A^{3}(B^T)^{-1}\\right)$ bằng<span class=\"q-hint\">Lưu ý: nhớ rằng $\\det(kA) = k^n\\det A$ với $A$ vuông cấp $n$.</span>",
   "options": [
    "$-108.0$.",
    "$-12.0$.",
    "$-432$.",
    "$-81.0$."
   ],
   "answer": 0,
   "explain": "$\\left(3\\right)^{3}\\cdot(\\det A)^{3}\\cdot\\dfrac{1}{\\det B} = -108$<br>Kết quả: $-108.0$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + 3x) - 3x}{x^2}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$- \\dfrac{9}{2}$.",
    "$\\dfrac{9}{2}$.",
    "$-3$.",
    "$- \\dfrac{3}{2}$."
   ],
   "answer": 0,
   "explain": "$\\ln(1 + u) = u - \\dfrac{u^2}{2} + o(u^2)$, $u = 3x$<br>$\\ln(1 + 3x) - 3x = -\\dfrac{9x^2}{2} + o(x^2)$<br>$\\lim = -\\dfrac{9}{2} = - \\dfrac{9}{2}$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\dfrac{x^2 + ax + b}{x - 3} & \\text{khi } x \\ne 3\\\\[2mm] 5 & \\text{khi } x = 3\\end{cases}$ liên tục trên $\\mathbb{R}$. Giá trị của $a - b$ bằng",
   "options": [
    "$5$.",
    "$-7$.",
    "$-1$.",
    "$-6$."
   ],
   "answer": 0,
   "explain": "Giới hạn tại $x = 3$ hữu hạn nên tử số bằng 0 tại đó: $9 + (3)a + b = 0$<br>Khi đó $x^2 + ax + b = (x - 3)(x + a + (3))$ nên $\\lim\\limits_{x\\to3} f(x) = 2\\cdot(3) + a$<br>$2\\cdot(3) + a = 5 \\Rightarrow a = -1,\\ b = -6$<br>$a - b = 5$",
   "note": "Liên tục tại $x_0$ $\\Leftrightarrow$ giới hạn trái = giới hạn phải = $f(x_0)$; giới hạn hữu hạn mà mẫu tiến về 0 thì tử cũng phải tiến về 0."
  },
  {
   "q": "Cho hàm số $f(x) = x^2e^{3x}$. Dùng công thức Leibniz $(uv)^{(n)} = \\sum_{k=0}^{n} C_n^k u^{(k)}v^{(n-k)}$, giá trị của đạo hàm cấp sáu $f^{(6)}(0)$ bằng",
   "options": [
    "$2430$.",
    "$1215$.",
    "$4860$.",
    "$729$."
   ],
   "answer": 0,
   "explain": "$u = x^2$: $u(0) = 0,\\ u'(0) = 0,\\ u''(0) = 2,\\ u^{(k)} = 0\\ (k \\ge 3)$; $v = e^{3x}$: $v^{(m)}(0) = (3)^m$<br>$f^{(6)}(0) = C_{6}^2\\cdot u''(0)\\cdot v^{(4)}(0) = 15\\cdot2\\cdot(3)^{4} = 2430$",
   "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số."
  },
  {
   "q": "Cho hàm số $f(x,y,z) = xe^{yz} + y\\ln(xz)$. Giá trị của $f'_z(1;1;1)$ bằng",
   "options": [
    "$1 + e$.",
    "$e$.",
    "$2 + e$.",
    "$e + 3$."
   ],
   "answer": 0,
   "explain": "$f'_z = xye^{yz} + \\dfrac{y}{z}$<br>$f'_z(1;1;1) = 1\\cdot1\\cdot e^{1} + 1 = 1 + e$",
   "note": "Đạo hàm riêng theo một biến thì coi biến kia là hằng số; với hàm ẩn $F(x,y,z) = 0$: $z'_x = -\\dfrac{F'_x}{F'_z}$."
  },
  {
   "q": "Dùng vi phân toàn phần của hàm $f(x,y) = \\sqrt{x^2 + y^2}$ tại điểm $(6;8)$, tức là $f(x_0 + \\Delta x;\\ y_0 + \\Delta y) \\approx f(x_0;y_0) + f'_x\\Delta x + f'_y\\Delta y$, giá trị gần đúng của $\\sqrt{(5{,}98)^2 + (7{,}97)^2}$ là",
   "options": [
    "9,964.",
    "10,036.",
    "9,95.",
    "9,64."
   ],
   "answer": 0,
   "explain": "$f'_x = \\dfrac{x}{\\sqrt{x^2+y^2}},\\quad f'_y = \\dfrac{y}{\\sqrt{x^2+y^2}}$<br>Tại $(6;8)$: $f = 10,\\ f'_x = \\dfrac{6}{10},\\ f'_y = \\dfrac{8}{10}$; $\\Delta x = -0{,}02,\\ \\Delta y = -0{,}03$<br>$f \\approx 10 + \\dfrac{6\\cdot(-0{,}02) + 8\\cdot(-0{,}03)}{10} = 9{,}964$",
   "note": "$df = f'_xdx + f'_ydy$; khi tính gần đúng, $\\Delta x$ và $\\Delta y$ có thể mang dấu âm."
  },
  {
   "q": "Cho hàm số $f(x,y) = 3 x^{2} y - 6 x^{2} + y^{3} - 6 y^{2} + 2$. Số điểm cực trị của hàm số bằng<span class=\"q-hint\">Lưu ý: điểm dừng là điểm mà $f'_x = f'_y = 0$. Tại điểm dừng, đặt $A = f''_{xx},\\ B = f''_{xy},\\ C = f''_{yy}$: nếu $AC - B^2 > 0$ thì đó là điểm cực trị, nếu $AC - B^2 < 0$ thì không phải.</span>",
   "options": [
    "$2$.",
    "$4$.",
    "$3$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$f'_x = 6 x y - 12 x,\\quad f'_y = 3 x^{2} + 3 y^{2} - 12 y$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(-2;2)$, $(0;0)$, $(0;4)$, $(2;2)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $-144$, $144$, $144$, $-144$<br>Số điểm dừng: $4$; số điểm cực trị (có $AC - B^2 > 0$): $2$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2n+1}{n\\cdot 3^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{2n+1}{3n+2}\\right)^n$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 2: $\\dfrac{u_{n+1}}{u_n} \\to \\dfrac13 < 1$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 3: $\\sqrt[n]{u_n} \\to \\dfrac23 < 1$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 4: $u_n \\sim \\dfrac{1}{n^2}$ $\\Rightarrow$ hội tụ<br>Số chuỗi phân kỳ: $1$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{n+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\ln(n+1)}$. Có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $|u_n| \\to 1 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 2: $\\sum\\frac{1}{n^2}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 3: $\\frac1n \\downarrow 0$ (Leibniz), $\\sum\\frac1n$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 4: $\\frac{1}{\\ln(n+1)} \\downarrow 0$ (Leibniz), $\\frac{1}{\\ln(n+1)} > \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Số chuỗi hội tụ: $3$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Xét phương trình vi phân tuyến tính cấp một $y' + p(x)y = q(x)$ với $p, q$ liên tục và $q$ không đồng nhất bằng $0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nghiệm tổng quát bằng nghiệm tổng quát của phương trình thuần nhất $y' + p(x)y = 0$ cộng với một nghiệm riêng của phương trình đã cho.",
    "Tổng của hai nghiệm của phương trình cũng là một nghiệm của phương trình.",
    "Thừa số tích phân của phương trình là $e^{-\\int p(x)\\,dx}$.",
    "Hiệu của hai nghiệm của phương trình cũng là một nghiệm của phương trình."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nghiệm tổng quát bằng nghiệm tổng quát của phương trình thuần nhất $y' + p(x)y = 0$ cộng với một nghiệm riêng của phương trình đã cho. Nếu $y^*$ là một nghiệm riêng thì $y - y^*$ thỏa mãn phương trình thuần nhất.<br><b>Sai:</b> Tổng của hai nghiệm của phương trình cũng là một nghiệm của phương trình. $(y_1 + y_2)' + p(y_1 + y_2) = 2q \\ne q$.<br><b>Sai:</b> Thừa số tích phân của phương trình là $e^{-\\int p(x)\\,dx}$. Thừa số tích phân là $e^{\\int p(x)\\,dx}$, để vế trái thành $\\left(y\\,e^{\\int p\\,dx}\\right)'$.<br><b>Sai:</b> Hiệu của hai nghiệm của phương trình cũng là một nghiệm của phương trình. Hiệu hai nghiệm thỏa mãn phương trình thuần nhất $y' + p(x)y = 0$, không phải phương trình đã cho."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + y\\cot x = 2\\cos x$ trên khoảng $(0;\\pi)$ thỏa mãn $y\\left(\\dfrac{\\pi}{2}\\right) = 2$. Giá trị của $y\\left(\\dfrac{\\pi}{6}\\right)$ bằng",
   "options": [
    "$\\dfrac{5}{2}$.",
    "$\\dfrac{5}{4}$.",
    "$4$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $\\sin x$: $(y\\sin x)' = 2\\sin x\\cos x = \\sin 2x$<br>$y\\sin x = \\sin^2x + C$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 1 + C = 2 \\Rightarrow C = 1$<br>$y\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\frac14 + 1}{\\frac12} = \\dfrac{5}{2}$",
   "note": "Sau khi nhân thừa số tích phân, vế trái phải là đạo hàm của một tích: $(y\\sin x)'$."
  },
  {
   "q": "Một chi tiết kim loại có nhiệt độ $40^\\circ C$ được đưa vào lò có nhiệt độ không đổi $200^\\circ C$. Nhiệt độ $y(t)$ của chi tiết sau $t$ phút thỏa mãn phương trình $y' = k(200 - y)$ với $k = \\dfrac{\\ln 2}{6}$. Nhiệt độ của chi tiết sau 6 phút bằng",
   "options": [
    "$120$ °C.",
    "$160$ °C.",
    "$60$ °C.",
    "$100$ °C."
   ],
   "answer": 0,
   "explain": "$y' + ky = 200k$ (tuyến tính cấp một) $\\Rightarrow y = 200 + Ce^{-kt}$<br>$y(0) = 40 \\Rightarrow C = -160$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{6}\\cdot6} = 2^{-1} = \\dfrac{1}{2}$<br>$y(6) = 200 + \\dfrac{-160}{2} = 120$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Phương trình vi phân tuyến tính thuần nhất hệ số hằng nào sau đây có nghiệm tổng quát là $y = (C_1 + C_2x)e^{x}$?",
   "options": [
    "$y'' - 2y' + y = 0$.",
    "$y'' + 2y' + y = 0$.",
    "$y'' - 2y' - y = 0$.",
    "$y'' + y' - 2y = 0$."
   ],
   "answer": 0,
   "explain": "Nghiệm kép $k = 1$ của phương trình đặc trưng: $\\left(k - 1\\right)^{2} = k^{2} - 2 k + 1$<br>Phương trình đặc trưng $k^{2} - 2 k + 1 = 0$ ứng với phương trình vi phân $y'' - 2y' + y = 0$",
   "note": "Đi ngược: từ nghiệm suy ra nghiệm đặc trưng, rồi $k^2 - (k_1 + k_2)k + k_1k_2 = 0$; chú ý dấu của hệ số $y'$."
  },
  {
   "q": "Cho $I = \\displaystyle\\int_{0}^{6} dy\\int_{\\frac{y}{3}}^{2} f(x,y)\\,dx$. Vẽ miền lấy tích phân rồi đổi thứ tự lấy tích phân, ta được",
   "options": [
    "$I = \\displaystyle\\int_{0}^{2} dx\\int_{0}^{3x} f(x,y)\\,dy$.",
    "$I = \\displaystyle\\int_{0}^{2} dx\\int_{3x}^{6} f(x,y)\\,dy$.",
    "$I = \\displaystyle\\int_{0}^{6} dx\\int_{0}^{\\frac{x}{3}} f(x,y)\\,dy$.",
    "$I = \\displaystyle\\int_{0}^{2} dx\\int_{0}^{\\frac{x}{3}} f(x,y)\\,dy$."
   ],
   "answer": 0,
   "explain": "Miền $\\dfrac{y}{3} \\le x \\le 2$, $0 \\le y \\le 6$ là tam giác $0 \\le x \\le 2$, $0 \\le y \\le 3x$.",
   "note": "Vẽ miền $D$ trước khi đổi thứ tự; cận của tích phân ngoài phải là hằng số."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi hai mặt paraboloid $z = x^2 + y^2$ và $z = 8 - x^2 - y^2$. Trong tọa độ trụ $x = r\\cos\\varphi,\\ y = r\\sin\\varphi,\\ z = z$, tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}r\\,dr\\int_{r^2}^{8-r^2} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{8}r\\,dr\\int_{r^2}^{8-r^2} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}dr\\int_{r^2}^{8-r^2} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}r\\,dr\\int_{0}^{8-r^2} f\\,dz$."
   ],
   "answer": 0,
   "explain": "Hai mặt cắt nhau khi $r^2 = 8 - r^2$, tức $r = 2$; $r^2 \\le z \\le 8 - r^2$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Thị trường viễn thông ở một địa phương có hai nhà mạng X và Y. Mỗi tháng có 10% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X; tổng số khách hàng không đổi. Hiện tại X có 800 nghìn khách, Y có 500 nghìn khách. Gọi $P = \\begin{pmatrix}0{,}9 & 0{,}1 \\\\ 0{,}1 & 0{,}9\\end{pmatrix}$ là ma trận chuyển, khi đó số khách sau mỗi tháng được tính bằng cách nhân $P$ với véc tơ số khách tháng trước. Số khách hàng (nghìn người) của nhà mạng X sau 2 tháng bằng",
   "options": [
    "$746$.",
    "$770$.",
    "$554$.",
    "$800$."
   ],
   "answer": 0,
   "explain": "Sau 1 tháng: $(770;530)$; sau 2 tháng: $(746;554)$ (nghìn khách của X và Y)<br>Kết quả: $746$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (-1;3;0),\\ u_2 = (-2;2;2)$ và $v = (-2;-2;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$4$.",
    "$-4$.",
    "$5$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = 4 m - 16$<br>$4 m - 16 = 0 \\Leftrightarrow m = 4$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}2 & 2 \\\\ 1 & 2\\end{pmatrix}$ và $B = \\begin{pmatrix}3 & 1 \\\\ 2 & -1\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $X.A = B$. Không cần tìm $X$, hãy cho biết định thức của $X$ bằng",
   "options": [
    "$- \\dfrac{5}{2}$.",
    "$- \\dfrac{2}{5}$.",
    "$-10$.",
    "$-7$."
   ],
   "answer": 0,
   "explain": "$\\det A = 2,\\quad \\det B = -5$<br>Lấy định thức hai vế: $\\det A\\cdot\\det X = \\det B$<br>$\\det X = \\dfrac{-5}{2} = - \\dfrac{5}{2}$",
   "note": "Không cần tìm $X$: lấy định thức hai vế, $\\det(AX) = \\det A\\cdot\\det X$."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}x + y + z = 3\\\\ 2 x + 3 y + 4 z = 4\\\\ x + 2 y + (m^2 - 6)z = m - 2\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Hệ có nghiệm duy nhất khi và chỉ khi",
   "options": [
    "$m \\ne \\pm 3$.",
    "$m \\ne 3$.",
    "$m \\ne -3$.",
    "$m \\ne 0$."
   ],
   "answer": 0,
   "explain": "Khử Gauss ($h_2 - 2h_1$ và $h_3 - h_1$, rồi trừ hai phương trình mới cho nhau) được $(m^2 - 9)z = m - 3$: với $m = 3$ hệ có vô số nghiệm, với $m = -3$ hệ vô nghiệm, các trường hợp còn lại hệ có nghiệm duy nhất.",
   "note": "Xét hàng cuối sau khi khử: hệ số bằng 0 mà vế phải khác 0 thì vô nghiệm; cả hai bằng 0 thì vô số nghiệm; hệ số khác 0 thì nghiệm duy nhất."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to +\\infty}\\left(\\dfrac{2 x^{2} - x + 5}{x + 2} - ax - b\\right) = 0$ (tức đường thẳng $y = ax + b$ là tiệm cận xiên của đồ thị). Giá trị của $a\\cdot b$ bằng",
   "options": [
    "$-10$.",
    "$1$.",
    "$2$.",
    "$-5$."
   ],
   "answer": 0,
   "explain": "Chia đa thức: $\\dfrac{2 x^{2} - x + 5}{x + 2} = 2 x - 5 + \\dfrac{15}{x + 2}$<br>Phân thức $\\dfrac{15}{x + 2} \\to 0$ khi $x \\to +\\infty$ nên $a = 2,\\ b = -5$<br>$a\\cdot b = -10$",
   "note": "Tiệm cận xiên: $a = \\lim\\dfrac{f(x)}{x}$, $b = \\lim\\left(f(x) - ax\\right)$; với phân thức, chia đa thức là nhanh nhất."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}x^{2} + 2 x & \\text{khi } x \\le 1\\\\ ax + b & \\text{khi } x > 1\\end{cases}$ có đạo hàm tại $x = 1$. Giá trị của $a - b$ bằng",
   "options": [
    "$5$.",
    "$4$.",
    "$-1$.",
    "$-4$."
   ],
   "answer": 0,
   "explain": "Liên tục tại $x = 1$: $3 = (1)a + b$<br>Đạo hàm trái tại $x = 1$: $(x^{2} + 2 x)' = 2 x + 2 \\to 4$; đạo hàm phải bằng $a$, nên $a = 4$<br>$b = 3 - (1)\\cdot(4) = -1$<br>$a - b = 5$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một bể chứa nước hình hộp chữ nhật có chiều dài, chiều rộng và chiều cao lần lượt là 2 mét, 1,5 mét và 4 mét được chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước ra khỏi bể qua mặt trên của bể bằng",
   "options": [
    "235,2 <i>kJ</i>.",
    "58,8 <i>kJ</i>.",
    "117,6 <i>kJ</i>.",
    "470,4 <i>kJ</i>."
   ],
   "answer": 0,
   "explain": "Lớp nước dày $dy$ ở độ sâu $y$ có khối lượng $1000\\cdot2\\cdot1{,}5\\,dy$, phải nâng lên $y$ mét<br>$W = \\displaystyle\\int_0^{4} 9800\\cdot2\\cdot1{,}5\\cdot y\\,dy = 29400\\cdot\\dfrac{4^2}{2}$<br>$= 235200\\ J = 235{,}2\\ kJ$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = 3 p_{1} + p_{2} - p_{3} - 20\\\\ s_2 = 3 p_{2} + p_{3} - 80\\\\ s_3 = p_{1} + p_{2} + 3 p_{3} - 120\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = 80 - 2 p_{1}\\\\ d_2 = - 2 p_{2} + p_{3} + 70\\\\ d_3 = p_{1} - p_{3} + 30\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Tổng lượng cung của cả ba loại hàng hóa tại trạng thái cân bằng bằng",
   "options": [
    "$100$.",
    "$80$.",
    "$105$.",
    "$95$."
   ],
   "answer": 0,
   "explain": "Giải hệ $s_i = d_i$ được giá cân bằng $(20;30;30)$, lượng cung (cầu) tương ứng $(40;40;20)$<br>Kết quả: $100$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Gọi $S_N$ là tổng riêng thứ $N$ (tổng của $N$ số hạng đầu tiên) của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{(2n-1)(2n+1)}$. Giá trị của $S_{9}$ bằng",
   "options": [
    "$\\dfrac{9}{19}$.",
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{8}{9}$.",
    "$\\dfrac{1}{10}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{(2n-1)(2n+1)} = \\dfrac12\\left(\\dfrac{1}{2n-1} - \\dfrac{1}{2n+1}\\right)$<br>Cộng $N$ số hạng đầu, các số hạng ở giữa triệt tiêu: $S_N = \\dfrac12\\left(1 - \\dfrac{1}{2N+1}\\right)$<br>$S_{9} = \\dfrac{9}{19}$",
   "note": "$S_N$ là tổng hữu hạn, chưa lấy giới hạn: đừng nhầm với tổng của cả chuỗi."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{3^{n+1} + 4^n}{6^n} = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng",
   "options": [
    "$23$.",
    "$11$.",
    "$17$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{3^{n+1}}{6^n} = 3\\sum_{n=2}^{+\\infty}\\left(\\dfrac{3}{6}\\right)^n = 3\\cdot\\dfrac{\\left(\\frac{3}{6}\\right)^{2}}{1 - \\frac{3}{6}} = \\dfrac{3}{2}$<br>$\\displaystyle\\sum_{n=2}^{+\\infty}\\left(\\dfrac{4}{6}\\right)^n = \\dfrac{\\left(\\frac{4}{6}\\right)^{2}}{1 - \\frac{4}{6}} = \\dfrac{4}{3}$<br>Tổng: $\\dfrac{3}{2} + \\dfrac{4}{3} = \\dfrac{17}{6} \\Rightarrow a + b = 23$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=0}^{+\\infty}(n+1)x^n$ bằng",
   "options": [
    "$\\dfrac{1}{(1-x)^2}$.",
    "$\\dfrac{x}{(1-x)^2}$.",
    "$\\dfrac{1}{1-x}$.",
    "$\\dfrac{1}{(1+x)^2}$."
   ],
   "answer": 0,
   "explain": "Đạo hàm từng số hạng chuỗi $\\sum_{n\\ge0} x^{n+1} = \\dfrac{x}{1-x}$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = 2x(1 + y^2)$ là",
   "options": [
    "$y = \\tan(x^2 + C)$.",
    "$y = \\tan x^2 + C$.",
    "$y = C\\tan x^2$.",
    "$y = \\arctan(x^2 + C)$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{dy}{1+y^2} = 2x\\,dx \\Rightarrow \\arctan y = x^2 + C$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' + 2xy = 2x$ là",
   "options": [
    "$y = 1 + Ce^{-x^2}$.",
    "$y = 1 + Ce^{x^2}$.",
    "$y = x + Ce^{-x^2}$.",
    "$y = Ce^{-x^2}$."
   ],
   "answer": 0,
   "explain": "$\\left(ye^{x^2}\\right)' = 2xe^{x^2}$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Một vật khối lượng 2 kg rơi từ trạng thái nghỉ, chịu lực cản không khí tỉ lệ với vận tốc với hệ số $k = 2\\,kg/s$, tức vận tốc $v(t)$ thỏa mãn $2v' = 2g - 2v$ (lấy $g = 9{,}8\\,m/s^2$). Vận tốc của vật sau 2 giây (làm tròn đến hàng phần chục, đơn vị m/s) là",
   "options": [
    "8,5.",
    "9,8.",
    "19,6.",
    "1,3."
   ],
   "answer": 0,
   "explain": "$v' + \\dfrac{2}{2}v = 9{,}8$ (tuyến tính cấp một), $v(0) = 0$<br>$v(t) = \\dfrac{mg}{k}\\left(1 - e^{-kt/m}\\right) = 9{,}8\\left(1 - e^{-t}\\right)$<br>$v(2) = 9{,}8\\left(1 - e^{-2}\\right) \\approx 8{,}5$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là hình tròn $x^2 + y^2 \\le \\ln 3$. Giá trị của tích phân $\\displaystyle\\iint_D e^{x^2 + y^2}\\,dxdy$ bằng",
   "options": [
    "$2 \\pi$.",
    "$4 \\pi$.",
    "$\\pi$.",
    "$3 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le \\varphi \\le 2\\pi,\\ 0 \\le r \\le \\sqrt{\\ln 3}$, $dxdy = r\\,dr\\,d\\varphi$<br>$\\displaystyle\\int_0^{\\sqrt{\\ln 3}} e^{r^2}\\,r\\,dr = \\left[\\dfrac{e^{r^2}}{2}\\right]_0^{\\sqrt{\\ln 3}} = \\dfrac{3 - 1}{2}$<br>$I = 2\\pi\\cdot1 = 2 \\pi$",
   "note": "Đổi sang tọa độ cực để có thừa số $r$; khi đó $re^{\\pm r^2}$ tính được nguyên hàm."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho miền $V = \\{(x,y,z): 0 \\le x \\le 2;\\ 0 \\le y \\le 1;\\ 0 \\le z \\le 2\\}$. Giá trị của tích phân $\\displaystyle\\iiint_V (x + yz)\\,dxdydz$ bằng",
   "options": [
    "$6$.",
    "$4$.",
    "$2$.",
    "$12$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{2^2}{2}\\cdot1\\cdot2 + 2\\cdot\\dfrac{1^2}{2}\\cdot\\dfrac{2^2}{2} = 6$<br>Kết quả: $6$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Cho $L$ là cung parabol $y = \\dfrac{x^2}{2}$ đi từ $O(0;0)$ đến $A\\left(\\sqrt8;4\\right)$. Giá trị của tích phân $\\displaystyle\\int_L x\\,ds$ bằng",
   "options": [
    "$\\dfrac{26}{3}$.",
    "$9$.",
    "$\\dfrac{13}{3}$.",
    "$13$."
   ],
   "answer": 0,
   "explain": "$ds = \\sqrt{1 + x^2}\\,dx$; $\\displaystyle\\int_0^{\\sqrt8} x\\sqrt{1 + x^2}\\,dx = \\dfrac{(1 + x^2)^{3/2}}{3}\\Big|_0^{\\sqrt8}$<br>Kết quả: $\\dfrac{26}{3}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $L$ là đoạn thẳng nối điểm $A(2;2)$ với điểm $B(5;6)$. Giá trị của tích phân đường loại một $\\displaystyle\\int_L (3 x - y)\\,ds$ bằng",
   "options": [
    "$\\dfrac{65}{2}$.",
    "$\\dfrac{13}{2}$.",
    "$\\dfrac{91}{2}$.",
    "$65$."
   ],
   "answer": 0,
   "explain": "Tham số hóa: $x = 3 t + 2,\\ y = 4 t + 2,\\ 0 \\le t \\le 1$<br>$ds = \\sqrt{x'^2 + y'^2}\\,dt = \\sqrt{25}\\,dt = 5\\,dt$<br>$I = 5\\displaystyle\\int_0^1\\left(5 t + 4\\right)dt = 5\\cdot\\dfrac{13}{2} = \\dfrac{65}{2}$",
   "note": "Trên đoạn thẳng, $ds = |AB|\\,dt$ với $0 \\le t \\le 1$; kết quả không phụ thuộc chiều đi."
  }
 ],
 "groups": [
  {
   "stem": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(-1;3;-1);\\ u_2(-1;-1;3);\\ u_3(0;8;m)\\}$ với $m$ là tham số. Gọi $A$ là ma trận có các dòng theo thứ tự là các véc tơ trong $S$.",
   "questions": [
    {
     "q": "Hệ $S$ phụ thuộc tuyến tính khi và chỉ khi",
     "options": [
      "$m = -8$.",
      "$m = -7$.",
      "$m = 8$.",
      "$m = -5$."
     ],
     "answer": 0,
     "explain": "$\\det A = 4 \\left(m + 8\\right)$<br>Kết quả: $m = -8$"
    },
    {
     "q": "Với $m = -7$, giá trị của $\\det\\left(2A^{-1}\\right)$ bằng",
     "options": [
      "$2$.",
      "$\\dfrac{1}{2}$.",
      "$32$.",
      "$\\dfrac{1}{4}$."
     ],
     "answer": 0,
     "explain": "$\\det A = 4$ nên $\\det(2A^{-1}) = \\dfrac{2^3}{4}$<br>Kết quả: $2$"
    },
    {
     "q": "Với $m = -8$, biết $u_3 = au_1 + bu_2$. Giá trị của $a\\cdot b$ bằng",
     "options": [
      "$-4$.",
      "$0$.",
      "$4$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "Từ hai tọa độ đầu giải được $a = 2,\\ b = -2$ (tọa độ thứ ba cũng thỏa mãn)<br>Kết quả: $-4$",
     "note": "Tổng các trị riêng bằng vết, tích các trị riêng bằng định thức của ma trận."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{3} - 6 x y + y^{3} + 2$.",
   "questions": [
    {
     "q": "Giá trị của $f'_y(1;3)$ bằng",
     "options": [
      "$21$.",
      "$-15$.",
      "$27$.",
      "$28$."
     ],
     "answer": 0,
     "explain": "$f'_y = 3y^2 - 6x$<br>Kết quả: $21$"
    },
    {
     "q": "Số điểm cực trị của hàm số đã cho bằng",
     "options": [
      "$1$.",
      "$2$.",
      "$0$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "Điểm dừng: $(0;0)$ (không là cực trị vì $AC - B^2 = -36 < 0$) và $(2;2)$ (cực tiểu)<br>Kết quả: $1$"
    },
    {
     "q": "Giá trị cực tiểu của hàm số đã cho bằng",
     "options": [
      "$-6$.",
      "$2$.",
      "$10$.",
      "$-22$."
     ],
     "answer": 0,
     "explain": "$f(2;2) = 2^3 + 2^3 - 3\\cdot2^3 + 2$<br>Kết quả: $-6$",
     "note": "Điểm dừng: $f'_x = f'_y = 0$; phân loại bằng dấu của $AC - B^2$ và của $A$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 3 với $a_{ij} = (i + j)^2$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(2A^T\\right)$.",
   "answer": [
    "-64"
   ],
   "explain": "$A = \\begin{pmatrix}4 & 9 & 16 \\\\ 9 & 16 & 25 \\\\ 16 & 25 & 36\\end{pmatrix}$, $\\det A = -8$; kết quả bằng $2^3\\cdot\\det A$ $= -64$<br>Đáp số: $-64$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, rồi dùng $\\det\\left(A^T\\right) = \\det A$ và $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị cực tiểu của hàm số $f(x,y) = x^{3} - 6 x y + y^{3} + 30$.",
   "answer": [
    "22"
   ],
   "explain": "Điểm dừng $(0;0)$ (không là cực trị) và $(2;2)$ (cực tiểu), $f(2;2) = 22$<br>Đáp số: $22$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Tìm bán kính hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{x^{2n}}{n\\cdot9^n}$.",
   "answer": [
    "3"
   ],
   "explain": "Đặt $t = x^2$: bán kính hội tụ theo $t$ bằng 9, tức $x^2 < 9$<br>$R = 3$",
   "note": "Chuỗi theo $x^k$: đặt $t = x^k$; bán kính theo $x$ là căn bậc $k$ của bán kính theo $t$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y'' - 4y = 0$ thỏa mãn $y(0) = 4$ và bị chặn khi $x \\to +\\infty$. Tính $100\\cdot y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "54"
   ],
   "explain": "Nghiệm tổng quát: $y = C_1e^{2x} + C_2e^{-2x}$<br>$e^{2x} \\to +\\infty$ khi $x \\to +\\infty$ nên nghiệm bị chặn buộc $C_1 = 0$<br>$y(0) = C_2 = 4 \\Rightarrow y = 4e^{-2x}$<br>$100\\cdot y(1) = 400\\cdot e^{-2} \\approx 54{,}13$<br>Đáp số: $54$",
   "note": "Nghiệm bị chặn khi $x \\to +\\infty$ nên hệ số của số hạng có mũ dương phải bằng 0."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt trụ $x^2 + y^2 = 4$ và hai mặt phẳng $z = 0$, $x + y + z = 4$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "16"
   ],
   "explain": "$\\displaystyle\\iint_{x^2+y^2\\le4}(4 - x - y)\\,dxdy = 4\\cdot\\pi\\cdot4$ (tích phân của $x$ và $y$ trên hình tròn bằng 0 do đối xứng)<br>Đáp số: $16$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
