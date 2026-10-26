// ĐỀ SỐ 08 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-08",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 08",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Phát triển bền vững",
  "prompt": "Việt Nam đặt mục tiêu tăng trưởng kinh tế bình quân từ 10%/năm trở lên trong giai đoạn 2026 – 2030 để trở thành nước có thu nhập trung bình cao vào năm 2030. Cũng trong năm 2025, thiên tai gây thiệt hại kinh tế gần 100.000 tỷ đồng, mức cao nhất từ trước đến nay. Có ý kiến cho rằng một nước còn đang phát triển thì phải ưu tiên tăng trưởng trước, môi trường tính sau; ý kiến khác lại cho rằng tăng trưởng bằng mọi giá chính là vay mượn của tương lai với lãi suất rất cao.",
  "source": "(Tổng hợp từ báo chí về Đại hội XIV của Đảng và số liệu thiên tai năm 2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày quan điểm của mình về hai ý kiến trên và về con đường phát triển nhanh nhưng bền vững của đất nước.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-2;3;-6)$ và $v = (4;1;8)$. Gọi $\\alpha$ là góc giữa $u$ và $v$, giá trị của $\\cos\\alpha$ bằng",
   "options": [
    "$- \\dfrac{53}{63}$.",
    "$\\dfrac{53}{63}$.",
    "$- \\dfrac{53}{49}$.",
    "$- \\dfrac{53}{16}$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = -53$<br>$|u| = \\sqrt{49} = 7,\\quad |v| = \\sqrt{81} = 9$<br>$\\cos\\alpha = \\dfrac{\\langle u, v\\rangle}{|u|\\,|v|} = - \\dfrac{53}{63}$",
   "note": "$\\cos\\alpha = \\dfrac{\\langle u, v\\rangle}{|u|\\,|v|}$; dấu của $\\cos\\alpha$ là dấu của tích vô hướng."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(-1;3),\\ u_2(6;6),\\ u_3(-6;-6),\\ u_4(3;3)\\}$. Có bao nhiêu hệ con khác rỗng của $S$ độc lập tuyến tính?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$7$.",
    "$15$.",
    "$8$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Có 4 hệ một véc tơ và 3 hệ hai véc tơ độc lập tuyến tính<br>Kết quả: $7$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Hạng của ma trận $A = \\begin{pmatrix}1 & 2 & 0 & 3 \\\\ 3 & -1 & -1 & 2 \\\\ 0 & 2 & 2 & 0\\end{pmatrix}$ bằng",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng đưa $A$ về dạng bậc thang: $\\begin{pmatrix}1 & 2 & 0 & 3 \\\\ 0 & -7 & -1 & -7 \\\\ 0 & 0 & -12 & 14\\end{pmatrix}$<br>Số hàng khác không của dạng bậc thang: $3$<br>$\\operatorname{rank}A = 3$",
   "note": "Chỉ dùng biến đổi sơ cấp trên hàng; hạng không vượt quá số hàng và số cột."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}-1 & -2 & 0 \\\\ 3 & -1 & 1\\end{pmatrix}$ và $B = \\begin{pmatrix}-2 & -2 \\\\ 1 & -1 \\\\ 3 & 2\\end{pmatrix}$. Xét ma trận $C = (AB)^T - B^TA^T + AA^T$. Tổng các phần tử trên đường chéo chính của $C$ bằng",
   "options": [
    "$16$.",
    "$17$.",
    "$-3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tính chất của phép chuyển vị: $(AB)^T = B^TA^T$ nên $C = AA^T$<br>$AA^T = \\begin{pmatrix}5 & -1 \\\\ -1 & 11\\end{pmatrix}$<br>Tổng các phần tử trên đường chéo chính: $16$",
   "note": "$(AB)^T = B^TA^T$ (đảo thứ tự) nên hai số hạng đầu triệt tiêu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & -4 \\\\ -5 & m - 1\\end{pmatrix}$ với $m$ là tham số. Gọi $S$ là tập hợp tất cả các giá trị của $m$ để $A$ không khả nghịch. Giá trị của tổng bình phương các phần tử của $S$ bằng",
   "options": [
    "$41$.",
    "$1$.",
    "$-20$.",
    "$-41$."
   ],
   "answer": 0,
   "explain": "$\\det A = m^{2} - m - 20$<br>$A$ không khả nghịch $\\Leftrightarrow \\det A = 0 \\Leftrightarrow \\left(m - 5\\right) \\left(m + 4\\right) = 0 \\Leftrightarrow m = -4$ hoặc $m = 5$<br>Giá trị cần tìm: $41$",
   "note": "Không khả nghịch $\\Leftrightarrow \\det A = 0$; tổng và tích các nghiệm có thể lấy từ định lí Viète."
  },
  {
   "q": "Cho $A$ là ma trận vuông khả nghịch và $\\lambda$ là một trị riêng của $A$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\dfrac{1}{\\lambda}$ là một trị riêng của $A^{-1}$.",
    "$\\lambda$ là một trị riêng của $A^{-1}$.",
    "$\\lambda$ là một trị riêng của $2A$.",
    "$-\\lambda$ là một trị riêng của $A^T$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\dfrac{1}{\\lambda}$ là một trị riêng của $A^{-1}$. Từ $AX = \\lambda X$ nhân $A^{-1}$ vào bên trái: $X = \\lambda A^{-1}X$, tức $A^{-1}X = \\dfrac{1}{\\lambda}X$ ($\\lambda \\ne 0$ vì $A$ khả nghịch).<br><b>Sai:</b> $\\lambda$ là một trị riêng của $A^{-1}$. Trị riêng tương ứng của $A^{-1}$ là $\\dfrac{1}{\\lambda}$, chỉ trùng $\\lambda$ khi $\\lambda = \\pm1$.<br><b>Sai:</b> $\\lambda$ là một trị riêng của $2A$. $(2A)X = 2\\lambda X$ nên trị riêng tương ứng của $2A$ là $2\\lambda$.<br><b>Sai:</b> $-\\lambda$ là một trị riêng của $A^T$. $\\det(A^T - tI) = \\det(A - tI)$ nên $A^T$ có đúng các trị riêng của $A$."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp 4 có $\\det A = -2$ và $\\det B = 5$. Giá trị của $\\det\\left(3A^TB^{-1}A\\right)$ bằng<span class=\"q-hint\">Lưu ý: nhớ rằng $\\det(kA) = k^n\\det A$ với $A$ vuông cấp $n$.</span>",
   "options": [
    "$64.8$.",
    "$2.4$.",
    "$-32.4$.",
    "$1620$."
   ],
   "answer": 0,
   "explain": "$\\left(3\\right)^{4}\\cdot\\det A\\cdot\\dfrac{1}{\\det B}\\cdot\\det A = \\dfrac{324}{5}$<br>Kết quả: $64.8$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}(1 + 2x)^{\\frac{1}{\\sin 3x}}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$e^{\\dfrac{2}{3}}$.",
    "$e^{2}$.",
    "$e^{\\dfrac{3}{2}}$.",
    "$e^{6}$."
   ],
   "answer": 0,
   "explain": "$(1 + 2x)^{\\frac{1}{\\sin 3x}} = e^{\\frac{\\ln(1 + 2x)}{\\sin 3x}}$<br>$\\ln(1 + 2x) \\sim 2x,\\ \\sin 3x \\sim 3x \\Rightarrow \\dfrac{\\ln(1 + 2x)}{\\sin 3x} \\to \\dfrac{2}{3}$<br>$\\lim = e^{\\dfrac{2}{3}}$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\dfrac{x^2 + ax + b}{x - 2} & \\text{khi } x \\ne 2\\\\[2mm] 5 & \\text{khi } x = 2\\end{cases}$ liên tục trên $\\mathbb{R}$. Giá trị của $a - b$ bằng",
   "options": [
    "$7$.",
    "$-5$.",
    "$1$.",
    "$-6$."
   ],
   "answer": 0,
   "explain": "Giới hạn tại $x = 2$ hữu hạn nên tử số bằng 0 tại đó: $4 + (2)a + b = 0$<br>Khi đó $x^2 + ax + b = (x - 2)(x + a + (2))$ nên $\\lim\\limits_{x\\to2} f(x) = 2\\cdot(2) + a$<br>$2\\cdot(2) + a = 5 \\Rightarrow a = 1,\\ b = -6$<br>$a - b = 7$",
   "note": "Liên tục tại $x_0$ $\\Leftrightarrow$ giới hạn trái = giới hạn phải = $f(x_0)$; giới hạn hữu hạn mà mẫu tiến về 0 thì tử cũng phải tiến về 0."
  },
  {
   "q": "Một chất điểm chuyển động trong mặt phẳng $Oxy$ theo quỹ đạo có phương trình tham số $x = t^2 + 3t,\\ y = t^3 - 6t$ ($t$ là thời gian). Hệ số góc $\\dfrac{dy}{dx}$ của tiếp tuyến với quỹ đạo tại thời điểm $t = 1$ bằng",
   "options": [
    "$- \\dfrac{3}{5}$.",
    "$- \\dfrac{5}{3}$.",
    "$-3$.",
    "$\\dfrac{3}{2}$."
   ],
   "answer": 0,
   "explain": "$x'(t) = 2t + 3,\\quad y'(t) = 3t^2 - 6$<br>$\\dfrac{dy}{dx} = \\dfrac{y'(t)}{x'(t)} = \\dfrac{3t^2 - 6}{2t + 3}$<br>Tại $t = 1$: $\\dfrac{-3}{5} = - \\dfrac{3}{5}$",
   "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số."
  },
  {
   "q": "Cho hàm số $z = (x^2 - y^2)e^{xy}$. Giá trị của $z'_x(2;2)$ bằng",
   "options": [
    "$4 e^{4}$.",
    "$- 4 e^{4}$.",
    "$5 e^{4}$.",
    "$1 + 4 e^{4}$."
   ],
   "answer": 0,
   "explain": "$z'_x = \\left[2x + (x^2 - y^2)y\\right]e^{xy},\\quad z'_y = \\left[-2y + (x^2 - y^2)x\\right]e^{xy}$<br>Tại $(2;2)$: $z'_x = 4 e^{4}$",
   "note": "Đạo hàm riêng theo một biến thì coi biến kia là hằng số; với hàm ẩn $F(x,y,z) = 0$: $z'_x = -\\dfrac{F'_x}{F'_z}$."
  },
  {
   "q": "Cho hàm số $f(x,y)$ có các đạo hàm riêng đến cấp hai trong miền $D$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f''_{xy}$ và $f''_{yx}$ liên tục trong $D$ thì $f''_{xy} = f''_{yx}$ trong $D$.",
    "$f''_{xy} = f'_x\\cdot f'_y$.",
    "$f''_{xx} = \\left(f'_x\\right)^2$.",
    "$f''_{xy} = f''_{xx} + f''_{yy}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f''_{xy}$ và $f''_{yx}$ liên tục trong $D$ thì $f''_{xy} = f''_{yx}$ trong $D$. Đây là định lí Schwarz.<br><b>Sai:</b> $f''_{xy} = f'_x\\cdot f'_y$. $f = xy$ có $f''_{xy} = 1$ còn $f'_x\\cdot f'_y = xy$.<br><b>Sai:</b> $f''_{xx} = \\left(f'_x\\right)^2$. $f = x$ có $f''_{xx} = 0$ còn $\\left(f'_x\\right)^2 = 1$.<br><b>Sai:</b> $f''_{xy} = f''_{xx} + f''_{yy}$. $f = x^2$ có $f''_{xy} = 0$ còn $f''_{xx} + f''_{yy} = 2$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} - 6 x y - 39 x + y^{2} + 18 y + 20$. Số điểm cực trị của hàm số bằng<span class=\"q-hint\">Lưu ý: điểm dừng là điểm mà $f'_x = f'_y = 0$. Tại điểm dừng, đặt $A = f''_{xx},\\ B = f''_{xy},\\ C = f''_{yy}$: nếu $AC - B^2 > 0$ thì đó là điểm cực trị, nếu $AC - B^2 < 0$ thì không phải.</span>",
   "options": [
    "$1$.",
    "$2$.",
    "$0$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} - 6 y - 39,\\quad f'_y = - 6 x + 2 y + 18$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(1;-6)$, $(5;6)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $-24$, $24$<br>Số điểm dừng: $2$; số điểm cực trị (có $AC - B^2 > 0$): $1$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Trong bốn chuỗi số dương dưới đây, chuỗi nào phân kỳ?",
   "options": [
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\sin\\dfrac1n$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\arctan n}{n^2}$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2n+1}{n\\cdot 3^n}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\sin\\dfrac1n$ — $u_n \\sim \\dfrac1n$ nên chuỗi phân kỳ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$ — $u_n \\sim \\dfrac{1}{n^2}$ nên chuỗi hội tụ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\arctan n}{n^2}$ — $u_n \\le \\dfrac{\\pi}{2n^2}$ nên chuỗi hội tụ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2n+1}{n\\cdot 3^n}$ — $\\dfrac{u_{n+1}}{u_n} \\to \\dfrac13 < 1$ nên chuỗi hội tụ"
  },
  {
   "q": "Xét chuỗi đan dấu $S = \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n+1}}{n^{3}}$ và gọi $S_n$ là tổng riêng thứ $n$. Theo đánh giá sai số của chuỗi Leibniz, $|S - S_n| \\le a_{n+1}$ với $a_n = \\dfrac{1}{n^{3}}$. Số $n$ nhỏ nhất để đánh giá này bảo đảm $|S - S_n| \\le 0{,}001$ là",
   "options": [
    "$9$.",
    "$10$.",
    "$8$.",
    "$99$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{(n+1)^{3}} \\le 0{,}001 \\Leftrightarrow n + 1 \\ge 10$<br>Kết quả: $9$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân đẳng cấp (thuần nhất) cấp một?",
   "options": [
    "$y' = \\dfrac{x + y}{x - y}$.",
    "$y' = e^{x - y}$.",
    "$y' + \\dfrac{y}{x} = xy^3$.",
    "$(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = \\dfrac{x + y}{x - y}$ — Vế phải viết được thành hàm của $\\dfrac{y}{x}$, tức dạng $y' = f\\left(\\dfrac{y}{x}\\right)$<br><b>Sai:</b> $y' = e^{x - y}$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' + \\dfrac{y}{x} = xy^3$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + y\\cot x = 2\\cos x$ trên khoảng $(0;\\pi)$ thỏa mãn $y\\left(\\dfrac{\\pi}{2}\\right) = 4$. Giá trị của $y\\left(\\dfrac{\\pi}{6}\\right)$ bằng",
   "options": [
    "$\\dfrac{13}{2}$.",
    "$\\dfrac{13}{4}$.",
    "$8$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $\\sin x$: $(y\\sin x)' = 2\\sin x\\cos x = \\sin 2x$<br>$y\\sin x = \\sin^2x + C$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 1 + C = 4 \\Rightarrow C = 3$<br>$y\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\frac14 + 3}{\\frac12} = \\dfrac{13}{2}$",
   "note": "Sau khi nhân thừa số tích phân, vế trái phải là đạo hàm của một tích: $(y\\sin x)'$."
  },
  {
   "q": "Một chi tiết kim loại có nhiệt độ $60^\\circ C$ được đưa vào lò có nhiệt độ không đổi $220^\\circ C$. Nhiệt độ $y(t)$ của chi tiết sau $t$ phút thỏa mãn phương trình $y' = k(220 - y)$ với $k = \\dfrac{\\ln 2}{6}$. Nhiệt độ của chi tiết sau 6 phút bằng",
   "options": [
    "$140$ °C.",
    "$180$ °C.",
    "$70$ °C.",
    "$110$ °C."
   ],
   "answer": 0,
   "explain": "$y' + ky = 220k$ (tuyến tính cấp một) $\\Rightarrow y = 220 + Ce^{-kt}$<br>$y(0) = 60 \\Rightarrow C = -160$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{6}\\cdot6} = 2^{-1} = \\dfrac{1}{2}$<br>$y(6) = 220 + \\dfrac{-160}{2} = 140$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Phương trình vi phân tuyến tính thuần nhất hệ số hằng nào sau đây có nghiệm tổng quát là $y = e^{x}(C_1\\cos x + C_2\\sin x)$?",
   "options": [
    "$y'' - 2y' + 2y = 0$.",
    "$y'' + 2y' + 2y = 0$.",
    "$y'' - 2y' - 2y = 0$.",
    "$y'' + 2y' - 2y = 0$."
   ],
   "answer": 0,
   "explain": "Nghiệm phức $k = 1 \\pm i$ của phương trình đặc trưng: $\\left(k - 1\\right)^{2} + 1 = k^{2} - 2 k + 2$<br>Phương trình đặc trưng $k^{2} - 2 k + 2 = 0$ ứng với phương trình vi phân $y'' - 2y' + 2y = 0$",
   "note": "Đi ngược: từ nghiệm suy ra nghiệm đặc trưng, rồi $k^2 - (k_1 + k_2)k + k_1k_2 = 0$; chú ý dấu của hệ số $y'$."
  },
  {
   "q": "Một bản mỏng phẳng chiếm miền tam giác $D = \\{(x,y): x \\ge 0,\\ y \\ge 0,\\ x + y \\le 3\\}$ và có mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = 2x + 1$. Khối lượng của bản, tức $\\displaystyle\\iint_D \\rho\\,dxdy$, bằng",
   "options": [
    "$\\dfrac{27}{2}$.",
    "$36$.",
    "$\\dfrac{9}{2}$.",
    "$27$."
   ],
   "answer": 0,
   "explain": "$m = \\displaystyle\\int_0^{3}dx\\int_0^{3-x}(2x + 1)\\,dy = \\int_0^{3}\\left(- 2 x^{2} + 5 x + 3\\right)dx$<br>$= \\left[- \\dfrac{2 x^{3}}{3} + \\dfrac{5 x^{2}}{2} + 3 x\\right]_0^{3} = \\dfrac{27}{2}$",
   "note": "Tích phân trong lấy theo $y$ với cận phụ thuộc $x$; kết quả là hàm của $x$ rồi mới lấy tích phân ngoài."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt phẳng $z = 3$. Trong tọa độ trụ $x = r\\cos\\varphi,\\ y = r\\sin\\varphi,\\ z = z$, tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{3}r\\,dr\\int_{r}^{3} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{3}r\\,dr\\int_{0}^{r} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{3}dr\\int_{r}^{3} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{3}r\\,dr\\int_{r^2}^{3} f\\,dz$."
   ],
   "answer": 0,
   "explain": "Mặt nón là $z = r$; miền nằm trên mặt nón và dưới mặt phẳng: $r \\le z \\le 3$, $0 \\le r \\le 3$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Một hãng dùng 2 loại vật liệu để sản xuất 3 loại sản phẩm với ma trận định mức $A = \\begin{pmatrix}4 & 1 & 3 \\\\ 3 & 4 & 2\\end{pmatrix}$ ($a_{ij}$ là số đơn vị vật liệu loại $i$ cần cho 1 đơn vị sản phẩm loại $j$). Hãng sản xuất và bán hết lần lượt $10, 20, 20$ đơn vị sản phẩm các loại; giá mỗi đơn vị vật liệu loại 1, 2 là $6 và 8$; giá bán mỗi đơn vị sản phẩm loại 1, 2, 3 là $40, 40, 50$ (cùng đơn vị tiền). Lợi nhuận (doanh thu trừ chi phí vật liệu) của hãng bằng",
   "options": [
    "$280$.",
    "$2200$.",
    "$1920$.",
    "$1930$."
   ],
   "answer": 0,
   "explain": "Vật liệu cần dùng $AX = (120;150)^T$, chi phí $1920$; doanh thu $2200$; lợi nhuận $280$<br>Kết quả: $280$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (1;0;2),\\ u_2 = (2;1;2)$ và $v = (1;-1;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$4$.",
    "$-4$.",
    "$5$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = m - 4$<br>$m - 4 = 0 \\Leftrightarrow m = 4$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & -2 \\\\ 1 & 0\\end{pmatrix}$ và $B = \\begin{pmatrix}0 & 4 \\\\ 1 & -1\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A.X = B$. Không cần tìm $X$, hãy cho biết định thức của $X$ bằng",
   "options": [
    "$-2$.",
    "$- \\dfrac{1}{2}$.",
    "$-8$.",
    "$-6$."
   ],
   "answer": 0,
   "explain": "$\\det A = 2,\\quad \\det B = -4$<br>Lấy định thức hai vế: $\\det A\\cdot\\det X = \\det B$<br>$\\det X = \\dfrac{-4}{2} = -2$",
   "note": "Không cần tìm $X$: lấy định thức hai vế, $\\det(AX) = \\det A\\cdot\\det X$."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}2 x - 2 y = 0\\\\ 2 x + 2 y = -8\\\\ 2 x - y = m - 4\\end{cases}$ (với $x, y$ là ẩn, $m$ là tham số). Hệ có nghiệm khi và chỉ khi",
   "options": [
    "$m = 2$.",
    "$m \\ne 2$.",
    "$m = 4$.",
    "với mọi giá trị của $m$."
   ],
   "answer": 0,
   "explain": "Hai phương trình đầu có nghiệm duy nhất: $x = -2,\\ y = -2$<br>Thay vào phương trình thứ ba: $-2 = m - 4$<br>$m = 2$",
   "note": "Số phương trình nhiều hơn số ẩn: giải hai phương trình rồi buộc phương trình còn lại nghiệm đúng."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to +\\infty}\\left(\\dfrac{2 x^{2} - x + 1}{x + 2} - ax - b\\right) = 0$ (tức đường thẳng $y = ax + b$ là tiệm cận xiên của đồ thị). Giá trị của $a + b$ bằng",
   "options": [
    "$-3$.",
    "$1$.",
    "$2$.",
    "$-5$."
   ],
   "answer": 0,
   "explain": "Chia đa thức: $\\dfrac{2 x^{2} - x + 1}{x + 2} = 2 x - 5 + \\dfrac{11}{x + 2}$<br>Phân thức $\\dfrac{11}{x + 2} \\to 0$ khi $x \\to +\\infty$ nên $a = 2,\\ b = -5$<br>$a + b = -3$",
   "note": "Tiệm cận xiên: $a = \\lim\\dfrac{f(x)}{x}$, $b = \\lim\\left(f(x) - ax\\right)$; với phân thức, chia đa thức là nhanh nhất."
  },
  {
   "q": "Cho hàm số $f(x) = \\begin{cases}x^{a}\\sin\\dfrac1x & \\text{khi } x \\ne 0\\\\ 0 & \\text{khi } x = 0\\end{cases}$ với $a$ là số nguyên dương. Giá trị nhỏ nhất của $a$ để hàm số có đạo hàm tại $x = 0$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{f(x) - f(0)}{x} = x^{a-1}\\sin\\dfrac1x$ có giới hạn khi $x \\to 0$ khi và chỉ khi $a - 1 > 0$<br>Kết quả: $2$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Cho hàm số $f$ liên tục trên $[a;b]$ và đặt $F(x) = \\displaystyle\\int_a^x f(t)\\,dt$ với $x \\in [a;b]$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$F'(x) = f(x)$ với mọi $x \\in (a;b)$.",
    "$F'(x) = f(x) - f(a)$.",
    "$F(b) = f(b) - f(a)$.",
    "$F$ có thể gián đoạn tại một điểm thuộc $(a;b)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $F'(x) = f(x)$ với mọi $x \\in (a;b)$. Đây là định lí về đạo hàm của tích phân theo cận trên.<br><b>Sai:</b> $F'(x) = f(x) - f(a)$. Nếu $G$ là một nguyên hàm của $f$ thì $F(x) = G(x) - G(a)$, mà $G(a)$ là hằng số nên $F' = G' = f$.<br><b>Sai:</b> $F(b) = f(b) - f(a)$. $F(b) = \\displaystyle\\int_a^b f(t)\\,dt = G(b) - G(a)$ với $G$ là nguyên hàm của $f$, không phải chính $f$.<br><b>Sai:</b> $F$ có thể gián đoạn tại một điểm thuộc $(a;b)$. $F$ có đạo hàm tại mọi điểm thuộc $(a;b)$ nên liên tục tại đó."
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 60 nghìn đồng, hạng trung giá 90 nghìn đồng và hạng VIP giá 150 nghìn đồng. Ban tổ chức bán được tổng cộng 170 vé, thu về 14100 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là 30 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$30$.",
    "$40$.",
    "$25$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "Hệ: $x + y + z = 170$; $60x + 90y + 150z = 14100$; $x - y - z = 30$. Giải được $(100;40;30)$<br>Kết quả: $30$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}x^n = \\dfrac{x}{1-x}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}nx^n = \\dfrac{x}{(1-x)^2}$ với $|x| < 1$. Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n + 1}{2^n}$ bằng",
   "options": [
    "$3$.",
    "$2$.",
    "$4$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Tách: $\\displaystyle\\sum_{n\\ge1}\\dfrac{n}{2^n} +\\sum_{n\\ge1}\\dfrac{1}{2^n}$<br>Với $x = \\dfrac{1}{2}$: $\\displaystyle\\sum\\dfrac{n}{2^n} = 2,\\quad \\sum\\dfrac{1}{2^n} = 1$<br>Tổng: $1\\cdot2 + 1\\cdot1 = 3$",
   "note": "Tách thành hai chuỗi quen thuộc rồi thay $x = \\dfrac1q$."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\left[(-1)^{n-1}\\left(\\dfrac{2}{3}\\right)^n + \\dfrac{1}{2^{2n}}\\right] = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$), giá trị của $a + b$ bằng",
   "options": [
    "$26$.",
    "$4$.",
    "$10$.",
    "$29$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^{n-1}\\left(\\dfrac{2}{3}\\right)^n = \\dfrac{\\frac{2}{3}}{1 + \\frac{2}{3}} = \\dfrac{2}{5}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{4^n} = \\dfrac{\\frac{1}{4}}{1 - \\frac{1}{4}} = \\dfrac{1}{3}$<br>Tổng: $\\dfrac{11}{15} \\Rightarrow a + b = 26$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{x^{2n+1}}{2n+1}$ bằng",
   "options": [
    "$\\dfrac12\\ln\\dfrac{1+x}{1-x}$.",
    "$\\arctan x$.",
    "$\\ln\\dfrac{1+x}{1-x}$.",
    "$\\dfrac{x}{1-x^2}$."
   ],
   "answer": 0,
   "explain": "Tích phân từng số hạng chuỗi $\\sum x^{2n} = \\dfrac{1}{1-x^2} = \\dfrac12\\left(\\dfrac{1}{1-x} + \\dfrac{1}{1+x}\\right)$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $(1 + e^x)yy' = e^x$ là",
   "options": [
    "$y^2 = 2\\ln(1 + e^x) + C$.",
    "$y^2 = \\ln(1 + e^x) + C$.",
    "$y = 2\\ln(1 + e^x) + C$.",
    "$y^2 = 2e^x + C$."
   ],
   "answer": 0,
   "explain": "$y\\,dy = \\dfrac{e^x\\,dx}{1 + e^x}$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' - y\\tan x = \\dfrac{1}{\\cos x}$ là",
   "options": [
    "$y = \\dfrac{x + C}{\\cos x}$.",
    "$y = (x + C)\\cos x$.",
    "$y = \\dfrac{C}{\\cos x} + x$.",
    "$y = \\dfrac{x + C}{\\sin x}$."
   ],
   "answer": 0,
   "explain": "$\\left(y\\cos x\\right)' = 1$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Một tách cà phê có nhiệt độ $95^\\circ C$ được đặt trong phòng có nhiệt độ không đổi $20^\\circ C$. Sau 15 phút, nhiệt độ cà phê là $70^\\circ C$. Theo định luật Newton, tốc độ nguội tỉ lệ với hiệu nhiệt độ giữa cà phê và phòng. Nhiệt độ của cà phê sau 45 phút kể từ lúc đầu (làm tròn đến hàng phần chục, đơn vị $^\\circ C$) là",
   "options": [
    "42,2.",
    "20,0.",
    "36,7.",
    "45,0."
   ],
   "answer": 0,
   "explain": "$T' = -k(T - 20) \\Rightarrow T(t) = 20 + 75e^{-kt}$ (vì $T(0) = 95$)<br>$T(15) = 70 \\Rightarrow e^{-15k} = \\dfrac{50}{75}$<br>$T(45) = 20 + 75\\left(\\dfrac{50}{75}\\right)^{3} \\approx 42{,}2$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là hình tròn $x^2 + y^2 \\le \\ln 6$. Giá trị của tích phân $\\displaystyle\\iint_D e^{x^2 + y^2}\\,dxdy$ bằng",
   "options": [
    "$5 \\pi$.",
    "$10 \\pi$.",
    "$\\dfrac{5 \\pi}{2}$.",
    "$6 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le \\varphi \\le 2\\pi,\\ 0 \\le r \\le \\sqrt{\\ln 6}$, $dxdy = r\\,dr\\,d\\varphi$<br>$\\displaystyle\\int_0^{\\sqrt{\\ln 6}} e^{r^2}\\,r\\,dr = \\left[\\dfrac{e^{r^2}}{2}\\right]_0^{\\sqrt{\\ln 6}} = \\dfrac{6 - 1}{2}$<br>$I = 2\\pi\\cdot\\dfrac{5}{2} = 5 \\pi$",
   "note": "Đổi sang tọa độ cực để có thừa số $r$; khi đó $re^{\\pm r^2}$ tính được nguyên hàm."
  },
  {
   "q": "Cho $V$ là tứ diện giới hạn bởi các mặt phẳng $x = 0,\\ y = 0,\\ z = 0$ và $x + y + z = 2$. Giá trị của tích phân $\\displaystyle\\iiint_V x\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{2}{3}$.",
    "$\\dfrac{8}{3}$.",
    "$\\dfrac{4}{3}$.",
    "$\\dfrac{2}{15}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\int_0^2 x\\cdot\\dfrac{(2 - x)^2}{2}\\,dx = \\dfrac{2^4}{24}$<br>Kết quả: $\\dfrac{2}{3}$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Cho $L$ là một vòng của đường xoắn ốc $x = 3\\cos t,\\ y = 3\\sin t,\\ z = 4t$ với $0 \\le t \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\int_L z\\,ds$ bằng",
   "options": [
    "$40 \\pi^{2}$.",
    "$8 \\pi^{2}$.",
    "$20 \\pi^{2}$.",
    "$80 \\pi^{2}$."
   ],
   "answer": 0,
   "explain": "$ds = \\sqrt{3^2 + 4^2}\\,dt = 5\\,dt$; $\\displaystyle\\int_0^{2\\pi} 4t\\cdot5\\,dt$<br>Kết quả: $40 \\pi^{2}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $L$ là đoạn thẳng nối điểm $A(0;-1)$ với điểm $B(12;4)$. Giá trị của tích phân đường loại một $\\displaystyle\\int_L (3 x + 2 y + 2)\\,ds$ bằng",
   "options": [
    "$299$.",
    "$23$.",
    "$391$.",
    "$598$."
   ],
   "answer": 0,
   "explain": "Tham số hóa: $x = 12 t,\\ y = 5 t - 1,\\ 0 \\le t \\le 1$<br>$ds = \\sqrt{x'^2 + y'^2}\\,dt = \\sqrt{169}\\,dt = 13\\,dt$<br>$I = 13\\displaystyle\\int_0^1\\left(46 t\\right)dt = 13\\cdot23 = 299$",
   "note": "Trên đoạn thẳng, $ds = |AB|\\,dt$ với $0 \\le t \\le 1$; kết quả không phụ thuộc chiều đi."
  }
 ],
 "groups": [
  {
   "stem": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho các véc tơ $u_1 = (-2;-2;1),\\ u_2 = (3;-2;2),\\ u_3 = (3;-1;2)$ và $v = (8;-3;3)$.",
   "questions": [
    {
     "q": "Giá trị của $\\langle u_1, u_2\\rangle + \\langle u_2, u_3\\rangle$ bằng",
     "options": [
      "$15$.",
      "$-15$.",
      "$0$.",
      "$-2$."
     ],
     "answer": 0,
     "explain": "$\\langle u_1, u_2\\rangle = 0,\\quad \\langle u_2, u_3\\rangle = 15$<br>Tổng: $15$"
    },
    {
     "q": "Định thức của ma trận có các hàng lần lượt là $u_1, u_2, u_3$ bằng",
     "options": [
      "$7$.",
      "$-7$.",
      "$8$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "$\\begin{vmatrix}-2 & -2 & 1 \\\\ 3 & -2 & 2 \\\\ 3 & -1 & 2\\end{vmatrix} = 7$<br>Định thức khác 0 nên $\\{u_1, u_2, u_3\\}$ là một cơ sở của $\\mathbb{R}^3$"
    },
    {
     "q": "Biết $v = au_1 + bu_2 + cu_3$, giá trị của $a + b + c$ bằng",
     "options": [
      "$1$.",
      "$2$.",
      "$-5$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "$v = au_1 + bu_2 + cu_3$: viết theo từng tọa độ được hệ ba phương trình ba ẩn $a, b, c$<br>Giải hệ: $a = -1,\\ b = 3,\\ c = -1$<br>$a + b + c = 1$",
     "note": "Định thức khác 0 thì ba véc tơ là một cơ sở, nên biểu diễn của $v$ qua chúng là duy nhất."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = (x^2 + y^2)e^{-4x}$.",
   "questions": [
    {
     "q": "Giá trị của $f'_y(2;1)$ bằng",
     "options": [
      "$\\dfrac{2}{e^{8}}$.",
      "$- \\dfrac{16}{e^{8}}$.",
      "$2$.",
      "$e^{-8}$."
     ],
     "answer": 0,
     "explain": "$f'_y = 2ye^{-4x}$<br>Kết quả: $\\dfrac{2}{e^{8}}$"
    },
    {
     "q": "Số điểm dừng của hàm số đã cho bằng",
     "options": [
      "$2$.",
      "$1$.",
      "$3$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$f'_y = 0 \\Rightarrow y = 0$; $f'_x = e^{-4x}(2x - 4x^2 - 4y^2) = 0 \\Rightarrow x = 0$ hoặc $x = \\dfrac{2}{4}$<br>Kết quả: $2$"
    },
    {
     "q": "Giá trị cực tiểu của hàm số đã cho bằng",
     "options": [
      "$0$.",
      "$\\dfrac{1}{4 e^{2}}$.",
      "$- \\dfrac{1}{4 e^{2}}$.",
      "$1$."
     ],
     "answer": 0,
     "explain": "$(0;0)$ là cực tiểu với $f = 0$ (vì $f \\ge 0$); điểm dừng còn lại có $AC - B^2 < 0$ nên không là cực trị<br>Kết quả: $0$",
     "note": "Điểm dừng: $f'_x = f'_y = 0$; phân loại bằng dấu của $AC - B^2$ và của $A$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 3 với $a_{ij} = \\max\\{i,j\\} + i\\cdot j$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(\\dfrac12A^TA\\right)$.",
   "answer": [
    "4.5",
    "9/2"
   ],
   "explain": "$A = \\begin{pmatrix}2 & 4 & 6 \\\\ 4 & 6 & 9 \\\\ 6 & 9 & 12\\end{pmatrix}$, $\\det A = 6$; kết quả bằng $\\dfrac{(\\det A)^2}{2^3}$ $= \\dfrac{9}{2}$<br>Đáp số: $4{,}5$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, rồi dùng $\\det\\left(A^T\\right) = \\det A$ và $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị cực tiểu của hàm số $f(x,y) = x^{3} - 12 x y + y^{3} + 20$.",
   "answer": [
    "-44"
   ],
   "explain": "Điểm dừng $(0;0)$ (không là cực trị) và $(4;4)$ (cực tiểu), $f(4;4) = -44$<br>Đáp số: $-44$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Tìm số nguyên nhỏ nhất thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(x - 1)^{n}}{n\\cdot5^n}$.",
   "answer": [
    "-4"
   ],
   "explain": "Bán kính hội tụ $R = 5$, khoảng hội tụ $(-4;6)$<br>Tại $x = 6$: $\\sum\\dfrac1n$ phân kỳ; tại $x = -4$: $\\sum\\dfrac{(-1)^n}{n}$ hội tụ<br>Miền hội tụ $[-4;6)$; số nguyên nhỏ nhất: $-4$",
   "note": "Bên trong khoảng hội tụ chuỗi luôn hội tụ; hai đầu mút phải xét riêng (một đầu là chuỗi điều hòa, đầu kia là chuỗi đan dấu)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y'' - 4y = 0$ thỏa mãn $y(0) = 8$ và bị chặn khi $x \\to +\\infty$. Tính $100\\cdot y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "108"
   ],
   "explain": "Nghiệm tổng quát: $y = C_1e^{2x} + C_2e^{-2x}$<br>$e^{2x} \\to +\\infty$ khi $x \\to +\\infty$ nên nghiệm bị chặn buộc $C_1 = 0$<br>$y(0) = C_2 = 8 \\Rightarrow y = 8e^{-2x}$<br>$100\\cdot y(1) = 800\\cdot e^{-2} \\approx 108{,}27$<br>Đáp số: $108$",
   "note": "Nghiệm bị chặn khi $x \\to +\\infty$ nên hệ số của số hạng có mũ dương phải bằng 0."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi hai mặt $z = x^2 + y^2$ và $z = 18 - x^2 - y^2$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "81"
   ],
   "explain": "Hai mặt cắt nhau trên đường tròn $r = 3$: $\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^3 (18 - 2r^2)\\,r\\,dr = 81\\pi$<br>Đáp số: $81$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
