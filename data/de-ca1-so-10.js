// ĐỀ SỐ 10 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-10",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 10",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lí tưởng và trách nhiệm xã hội",
  "prompt": "Trong các đợt bão lũ lịch sử năm 2025, khi 468 người chết và mất tích, gần 350.000 ngôi nhà bị hư hỏng, hình ảnh được chia sẻ nhiều nhất không phải là sự tàn phá mà là những người đi ngược dòng lũ: chiến sĩ công an, bộ đội dầm mình trong nước đưa người già, trẻ nhỏ ra khỏi vùng nguy hiểm; những đoàn xe tình nguyện chở hàng cứu trợ xuyên đêm. Với lực lượng Công an nhân dân, đó là sự hiện thực hóa phương châm “Vì nước quên thân, vì dân phục vụ”.",
  "source": "(Số liệu thiên tai theo cơ quan phòng, chống thiên tai, tháng 12/2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về lí tưởng “vì dân phục vụ” được gợi ra từ những hình ảnh trên và liên hệ với lựa chọn nghề nghiệp, lẽ sống của bản thân.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (1;-2;4),\\ u_2 = (1;2;4),\\ u_3 = (3;2;1)$. Gọi $x = (x_1;x_2;x_3)$ là véc tơ thỏa mãn $1(u_1 - x) + 2(u_2 + x) = u_3$. Giá trị của $x_1 + x_2 + x_3$ bằng",
   "options": [
    "$-11$.",
    "$11$.",
    "$-4$.",
    "$-7$."
   ],
   "answer": 0,
   "explain": "$1u_1 - 1x + 2u_2 + 2x = u_3 \\Leftrightarrow x = u_3 - 1u_1 - 2u_2$<br>$u_3 - 1u_1 - 2u_2 = (0;0;-11)$<br>$x = (0;0;-11) \\Rightarrow x_1 + x_2 + x_3 = -11$",
   "note": "Viết đẳng thức véc tơ theo từng tọa độ để được hệ phương trình tuyến tính; với phương trình véc tơ, chuyển vế như phương trình số."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho cơ sở $B = \\{b_1(1;-2),\\ b_2(1;3)\\}$ và véc tơ $v = (-1;-13)$. Tọa độ của $v$ đối với cơ sở $B$ (tức cặp số $(x;y)$ sao cho $v = xb_1 + yb_2$) là",
   "options": [
    "$(2;-3)$.",
    "$(-3;2)$.",
    "$(-1;-13)$.",
    "$(2;3)$."
   ],
   "answer": 0,
   "explain": "$v = xb_1 + yb_2 \\Leftrightarrow \\begin{cases}x + y = -1\\\\ - 2 x + 3 y = -13\\end{cases}$<br>Giải hệ: $x = 2,\\ y = -3$<br>Tọa độ của $v$ đối với $B$: $(2;-3)$",
   "note": "Tọa độ đối với cơ sở $B$ là nghiệm của hệ $xb_1 + yb_2 = v$, không phải tọa độ thông thường của $v$."
  },
  {
   "q": "Một trạm quan trắc ghi lại 5 bộ số liệu, mỗi bộ gồm 4 chỉ số và được xem như một véc tơ trong $\\mathbb{R}^4$: $u_1 = (3;0;1;0),\\ u_2 = (1;-1;-2;1),\\ u_3 = (-4;1;1;-1),\\ u_4 = (-1;-2;-5;2),\\ u_5 = (5;1;4;-1)$. Một bộ số liệu là “thừa” nếu nó là tổ hợp tuyến tính của các bộ còn lại được giữ. Số lớn nhất các bộ số liệu có thể giữ lại sao cho chúng độc lập tuyến tính (tức là hạng của hệ véc tơ đã cho) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$5$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$u_3 = - u_{1} - u_{2}$; $u_4 = - u_{1} + 2 u_{2}$; $u_5 = 2 u_{1} - u_{2}$; còn $u_1, u_2$ độc lập tuyến tính nên hạng bằng 2<br>Kết quả: $2$",
   "note": "Hạng = số hàng khác không của dạng bậc thang; số véc tơ thừa = số véc tơ $-$ hạng."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 3 & 3 \\\\ -2 & 2 & 3\\end{pmatrix}$ và $B = \\begin{pmatrix}1 & 1 \\\\ -1 & 2 \\\\ -1 & 3\\end{pmatrix}$. Xét ma trận $C = (AB)^T - B^TA^T + AA^T$. Phần tử thuộc hàng 1 và cột 2 của $C$ bằng",
   "options": [
    "$13$.",
    "$-1$.",
    "$6$.",
    "$16$."
   ],
   "answer": 0,
   "explain": "Tính chất của phép chuyển vị: $(AB)^T = B^TA^T$ nên $C = AA^T$<br>$AA^T = \\begin{pmatrix}19 & 13 \\\\ 13 & 17\\end{pmatrix}$<br>Phần tử thuộc hàng 1 và cột 2: $13$",
   "note": "$(AB)^T = B^TA^T$ (đảo thứ tự) nên hai số hạng đầu triệt tiêu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & -2 \\\\ 2 & m + 5\\end{pmatrix}$ với $m$ là tham số. Gọi $S$ là tập hợp tất cả các giá trị của $m$ để $A$ không khả nghịch. Giá trị của tích các phần tử của $S$ bằng",
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
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$. Phát biểu nào sau đây về các phép biến đổi sơ cấp trên hàng là đúng?",
   "options": [
    "Đổi chỗ hai hàng của $A$ thì định thức đổi dấu.",
    "Nhân một hàng của $A$ với số $k$ thì định thức không đổi.",
    "Cộng vào một hàng một bội của hàng khác thì định thức đổi dấu.",
    "Đổi chỗ hai hàng của $A$ thì định thức không đổi."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Đổi chỗ hai hàng của $A$ thì định thức đổi dấu. Đây là tính chất phản đối xứng của định thức đối với các hàng.<br><b>Sai:</b> Nhân một hàng của $A$ với số $k$ thì định thức không đổi. Định thức được nhân với $k$.<br><b>Sai:</b> Cộng vào một hàng một bội của hàng khác thì định thức đổi dấu. Phép biến đổi này không làm thay đổi định thức.<br><b>Sai:</b> Đổi chỗ hai hàng của $A$ thì định thức không đổi. Định thức đổi dấu."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp 3 có $\\det A = 2$ và $\\det B = 2$. Giá trị của $\\det\\left(-2A^{-1}B^2\\right)$ bằng<span class=\"q-hint\">Lưu ý: nhớ rằng $\\det(kA) = k^n\\det A$ với $A$ vuông cấp $n$.</span>",
   "options": [
    "$-16.0$.",
    "$-4.0$.",
    "$-64$.",
    "$16.0$."
   ],
   "answer": 0,
   "explain": "$\\left(-2\\right)^{3}\\cdot\\dfrac{1}{\\det A}\\cdot(\\det B)^2 = -16$<br>Kết quả: $-16.0$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{2x} - 1 - 2x}{1 - \\cos 3x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$\\dfrac{4}{9}$.",
    "$\\dfrac{2}{3}$.",
    "$\\dfrac{2}{9}$.",
    "$\\dfrac{4}{3}$."
   ],
   "answer": 0,
   "explain": "$e^{u} - 1 - u \\sim \\dfrac{u^2}{2} \\Rightarrow$ tử số $\\sim \\dfrac{(2x)^2}{2}$<br>$1 - \\cos v \\sim \\dfrac{v^2}{2} \\Rightarrow$ mẫu số $\\sim \\dfrac{(3x)^2}{2}$<br>$\\lim = \\dfrac{4}{9} = \\dfrac{4}{9}$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Cho hai hàm số $f, g$ xác định trong một lân cận của $x_0$ (có thể trừ điểm $x_0$). Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $\\lim\\limits_{x\\to x_0}f(x) = 0$ và $g$ bị chặn trong lân cận đó thì $\\lim\\limits_{x\\to x_0}f(x)g(x) = 0$.",
    "Nếu $\\lim\\limits_{x\\to x_0}f(x) = 0$ và $\\lim\\limits_{x\\to x_0}g(x) = +\\infty$ thì $\\lim\\limits_{x\\to x_0}f(x)g(x) = 0$.",
    "Nếu $f$ và $g$ đều không có giới hạn khi $x \\to x_0$ thì $f + g$ cũng không có giới hạn.",
    "Nếu $f(x) < g(x)$ với mọi $x$ và hai giới hạn tồn tại thì $\\lim f(x) < \\lim g(x)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $\\lim\\limits_{x\\to x_0}f(x) = 0$ và $g$ bị chặn trong lân cận đó thì $\\lim\\limits_{x\\to x_0}f(x)g(x) = 0$. $|f(x)g(x)| \\le M|f(x)| \\to 0$ (nguyên lí kẹp).<br><b>Sai:</b> Nếu $\\lim\\limits_{x\\to x_0}f(x) = 0$ và $\\lim\\limits_{x\\to x_0}g(x) = +\\infty$ thì $\\lim\\limits_{x\\to x_0}f(x)g(x) = 0$. Đây là dạng vô định $0\\cdot\\infty$: với $f = x^2$, $g = \\dfrac{1}{x^4}$ khi $x \\to 0$ thì $fg \\to +\\infty$.<br><b>Sai:</b> Nếu $f$ và $g$ đều không có giới hạn khi $x \\to x_0$ thì $f + g$ cũng không có giới hạn. $f = \\sin\\dfrac1x$, $g = -\\sin\\dfrac1x$ đều không có giới hạn khi $x \\to 0$ nhưng $f + g = 0$.<br><b>Sai:</b> Nếu $f(x) < g(x)$ với mọi $x$ và hai giới hạn tồn tại thì $\\lim f(x) < \\lim g(x)$. Chỉ suy ra được dấu $\\le$: $f = 0$, $g = x^2$ khi $x \\to 0$ có hai giới hạn bằng nhau."
  },
  {
   "q": "Cho hàm ẩn $y = y(x)$ xác định bởi phương trình $x^{2} + 3 x y + y^{2} = 31$. Hệ số góc của tiếp tuyến với đường cong tại điểm $(3;2)$, tức giá trị $y'(3)$, bằng",
   "options": [
    "$- \\dfrac{12}{13}$.",
    "$\\dfrac{12}{13}$.",
    "$3$.",
    "$- \\dfrac{13}{12}$."
   ],
   "answer": 0,
   "explain": "Đạo hàm hai vế theo $x$: $2x + 3(y + xy') + 2yy' = 0$<br>$y' = -\\dfrac{2x + 3y}{3x + 2y}$<br>Tại $(3;2)$: $y' = -\\dfrac{12}{13} = - \\dfrac{12}{13}$",
   "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} y^{3} + 3 x y + y^{2}$. Giá trị của đạo hàm riêng hỗn hợp $f''_{xy}$ tại điểm $(-1;2)$ bằng",
   "options": [
    "$39$.",
    "$-48$.",
    "$-10$.",
    "$30$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} y^{3} + 3 y$<br>$f''_{xy} = \\left(f'_x\\right)'_y = 3 \\left(3 x^{2} y^{2} + 1\\right)$<br>$f''_{xy}(-1;2) = 39$",
   "note": "Tính $f'_x$ trước rồi đạo hàm tiếp theo $y$; với hàm đa thức, $f''_{xy} = f''_{yx}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = \\ln(x^2 + y^2)$. Vi phân toàn phần của hàm số tại điểm $(1;3)$ là",
   "options": [
    "$\\dfrac{1}{5}dx + \\dfrac{3}{5}dy$.",
    "$\\dfrac{1}{10}dx + \\dfrac{3}{10}dy$.",
    "$2dx + 6dy$.",
    "$\\dfrac{3}{5}dx + \\dfrac{1}{5}dy$."
   ],
   "answer": 0,
   "explain": "$f'_x = \\dfrac{2x}{x^2 + y^2},\\quad f'_y = \\dfrac{2y}{x^2 + y^2}$<br>Tại $(1;3)$: $f'_x = \\dfrac{1}{5},\\ f'_y = \\dfrac{3}{5}$<br>$df = \\dfrac{1}{5}dx + \\dfrac{3}{5}dy$",
   "note": "$df = f'_xdx + f'_ydy$; khi tính gần đúng, $\\Delta x$ và $\\Delta y$ có thể mang dấu âm."
  },
  {
   "q": "Cho hàm số $f(x,y) = 3 x^{2} y - 6 x^{2} + y^{3} - 6 y^{2} + 2$. Hàm số có bao nhiêu điểm dừng?",
   "options": [
    "$4$.",
    "$2$.",
    "$5$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$f'_x = 6 x y - 12 x,\\quad f'_y = 3 x^{2} + 3 y^{2} - 12 y$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(-2;2)$, $(0;0)$, $(0;4)$, $(2;2)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $-144$, $144$, $144$, $-144$<br>Số điểm dừng: $4$; số điểm cực trị (có $AC - B^2 > 0$): $2$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n}{2n+1}\\right)^n$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+2}{2n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2^n}{n!}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\ln n}{n^2}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\sqrt[n]{u_n} = \\dfrac{n}{2n+1} \\to \\dfrac12 < 1$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 2: $u_n \\sim \\dfrac{1}{2n}$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 3: $\\dfrac{u_{n+1}}{u_n} = \\dfrac{2}{n+1} \\to 0 < 1$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 4: $u_n \\le \\dfrac{1}{n^{3/2}}\\ (n \\text{ đủ lớn})$ $\\Rightarrow$ hội tụ<br>Số chuỗi phân kỳ: $1$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Cho chuỗi lũy thừa $\\displaystyle\\sum_{n=0}^{+\\infty}a_nx^n$ có bán kính hội tụ $R$ với $0 < R < +\\infty$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Chuỗi hội tụ tuyệt đối tại mọi $x$ thỏa mãn $|x| < R$.",
    "Chuỗi luôn hội tụ tại $x = R$ và $x = -R$.",
    "Chuỗi luôn phân kỳ tại $x = R$ và $x = -R$.",
    "Chuỗi có thể hội tụ tại một điểm $x$ với $|x| > R$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Chuỗi hội tụ tuyệt đối tại mọi $x$ thỏa mãn $|x| < R$. Đây là nội dung của định lí Abel.<br><b>Sai:</b> Chuỗi luôn hội tụ tại $x = R$ và $x = -R$. Tại hai đầu mút phải xét riêng: $\\sum x^n$ có $R = 1$ và phân kỳ tại $x = \\pm1$.<br><b>Sai:</b> Chuỗi luôn phân kỳ tại $x = R$ và $x = -R$. $\\sum\\dfrac{x^n}{n^2}$ có $R = 1$ và hội tụ tại $x = \\pm1$.<br><b>Sai:</b> Chuỗi có thể hội tụ tại một điểm $x$ với $|x| > R$. Theo định nghĩa của bán kính hội tụ, chuỗi phân kỳ tại mọi $x$ có $|x| > R$."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân toàn phần?",
   "options": [
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$.",
    "$y\\,dx - x\\,dy = 0$.",
    "$(x^2 + y)dx + (y - x)dy = 0$.",
    "$2xy\\,dx + (y^2 - x^2)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — Điều kiện $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$ đối với $P\\,dx + Q\\,dy = 0$: $\\dfrac{\\partial P}{\\partial y} = 4xy$, $\\dfrac{\\partial Q}{\\partial x} = 4xy$<br><b>Sai:</b> $y\\,dx - x\\,dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau<br><b>Sai:</b> $(x^2 + y)dx + (y - x)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau<br><b>Sai:</b> $2xy\\,dx + (y^2 - x^2)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 2x$, $\\dfrac{\\partial Q}{\\partial x} = -2x$, hai đạo hàm riêng khác nhau"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $(x^2 + 1)y' + 2xy = 8x^3$ thỏa mãn $y(0) = 1$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{3}{2}$.",
    "$3$.",
    "$\\dfrac{9}{2}$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Vế trái là $\\left[(x^2 + 1)y\\right]'$<br>$\\left[(x^2 + 1)y\\right]' = 8x^3 \\Rightarrow (x^2 + 1)y = 2 x^{4} + C$<br>$y(0) = C = 1$<br>$y(1) = \\dfrac{2 + 1}{2} = \\dfrac{3}{2}$",
   "note": "Đưa về dạng chuẩn rồi mới tìm thừa số tích phân $e^{\\int p\\,dx}$ (hoặc kiểm tra $P'_y = Q'_x$); hằng số $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bệnh nhân được truyền thuốc liên tục qua đường tĩnh mạch. Nồng độ thuốc trong máu $y(t)$ (mg/lít) sau $t$ giờ thỏa mãn phương trình $y' = k(40 - y)$ với $k = \\dfrac{\\ln 2}{4}$ và $y(0) = 0$. Nồng độ thuốc trong máu sau 12 giờ bằng",
   "options": [
    "$35$ mg/lít.",
    "$37{,}5$ mg/lít.",
    "$5$ mg/lít.",
    "$40$ mg/lít."
   ],
   "answer": 0,
   "explain": "$y' + ky = 40k$ (tuyến tính cấp một) $\\Rightarrow y = 40 + Ce^{-kt}$<br>$y(0) = 0 \\Rightarrow C = -40$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{4}\\cdot12} = 2^{-3} = \\dfrac{1}{8}$<br>$y(12) = 40 + \\dfrac{-40}{8} = 35$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Phương trình vi phân tuyến tính thuần nhất hệ số hằng nào sau đây có nghiệm tổng quát là $y = C_1e^{-x} + C_2e^{-2x}$?",
   "options": [
    "$y'' + 3y' + 2y = 0$.",
    "$y'' - 3y' + 2y = 0$.",
    "$y'' + 3y' - 2y = 0$.",
    "$y'' + 2y' + 3y = 0$."
   ],
   "answer": 0,
   "explain": "Nghiệm $k = -1,\\ k = -2$ của phương trình đặc trưng: $\\left(k + 1\\right) \\left(k + 2\\right) = k^{2} + 3 k + 2$<br>Phương trình đặc trưng $k^{2} + 3 k + 2 = 0$ ứng với phương trình vi phân $y'' + 3y' + 2y = 0$",
   "note": "Đi ngược: từ nghiệm suy ra nghiệm đặc trưng, rồi $k^2 - (k_1 + k_2)k + k_1k_2 = 0$; chú ý dấu của hệ số $y'$."
  },
  {
   "q": "Cho $I = \\displaystyle\\int_{1}^{e^{3}} dx\\int_{0}^{\\ln x} f(x,y)\\,dy$. Vẽ miền lấy tích phân rồi đổi thứ tự lấy tích phân, ta được",
   "options": [
    "$I = \\displaystyle\\int_{0}^{3} dy\\int_{e^y}^{e^{3}} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{3} dy\\int_{1}^{e^y} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{e^{3}} dy\\int_{e^y}^{e^{3}} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{3} dy\\int_{\\ln y}^{e^{3}} f(x,y)\\,dx$."
   ],
   "answer": 0,
   "explain": "Miền $0 \\le y \\le \\ln x$, $1 \\le x \\le e^{3}$ tương đương $e^y \\le x \\le e^{3}$, $0 \\le y \\le 3$.",
   "note": "Vẽ miền $D$ trước khi đổi thứ tự; cận của tích phân ngoài phải là hằng số."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi hai mặt paraboloid $z = x^2 + y^2$ và $z = 2 - x^2 - y^2$. Trong tọa độ trụ $x = r\\cos\\varphi,\\ y = r\\sin\\varphi,\\ z = z$, tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}r\\,dr\\int_{r^2}^{2-r^2} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}r\\,dr\\int_{r^2}^{2-r^2} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}dr\\int_{r^2}^{2-r^2} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}r\\,dr\\int_{0}^{2-r^2} f\\,dz$."
   ],
   "answer": 0,
   "explain": "Hai mặt cắt nhau khi $r^2 = 2 - r^2$, tức $r = 1$; $r^2 \\le z \\le 2 - r^2$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Thị trường viễn thông ở một địa phương có hai nhà mạng X và Y. Mỗi tháng có 20% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X; tổng số khách hàng không đổi. Hiện tại X có 400 nghìn khách, Y có 700 nghìn khách. Gọi $P = \\begin{pmatrix}0{,}8 & 0{,}1 \\\\ 0{,}2 & 0{,}9\\end{pmatrix}$ là ma trận chuyển, khi đó số khách sau mỗi tháng được tính bằng cách nhân $P$ với véc tơ số khách tháng trước. Số khách hàng (nghìn người) của nhà mạng X sau 2 tháng bằng",
   "options": [
    "$383$.",
    "$390$.",
    "$717$.",
    "$400$."
   ],
   "answer": 0,
   "explain": "Sau 1 tháng: $(390;710)$; sau 2 tháng: $(383;717)$ (nghìn khách của X và Y)<br>Kết quả: $383$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & -1 & 0 & 1 \\\\ -1 & -1 & 2 & 3 \\\\ -1 & -3 & 4 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 7$.",
    "$m = 8$.",
    "$m = -7$.",
    "$m = 6$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $1$ lần hàng 1 cộng $2$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = 7$; ngược lại hạng bằng 3<br>Kết quả: $m = 7$",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}-2 & 0 \\\\ 4 & 2\\end{pmatrix}$ và $B = \\begin{pmatrix}4 & 2 \\\\ 3 & -2\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $X.A = B$. Không cần tìm $X$, hãy cho biết định thức của $X$ bằng",
   "options": [
    "$\\dfrac{7}{2}$.",
    "$\\dfrac{2}{7}$.",
    "$56$.",
    "$-10$."
   ],
   "answer": 0,
   "explain": "$\\det A = -4,\\quad \\det B = -14$<br>Lấy định thức hai vế: $\\det A\\cdot\\det X = \\det B$<br>$\\det X = \\dfrac{-14}{-4} = \\dfrac{7}{2}$",
   "note": "Không cần tìm $X$: lấy định thức hai vế, $\\det(AX) = \\det A\\cdot\\det X$."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}2 x + 2 y = 6\\\\ - 2 x + 4 y = 6\\\\ - 3 x - 2 y = m + 4\\end{cases}$ (với $x, y$ là ẩn, $m$ là tham số). Hệ có nghiệm khi và chỉ khi",
   "options": [
    "$m = -11$.",
    "$m \\ne -11$.",
    "$m = -13$.",
    "với mọi giá trị của $m$."
   ],
   "answer": 0,
   "explain": "Hai phương trình đầu có nghiệm duy nhất: $x = 1,\\ y = 2$<br>Thay vào phương trình thứ ba: $-7 = m + 4$<br>$m = -11$",
   "note": "Số phương trình nhiều hơn số ẩn: giải hai phương trình rồi buộc phương trình còn lại nghiệm đúng."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 2}\\dfrac{x^2 + ax + b}{x^{2} - 3 x + 2} = -2$. Giá trị của $b - a$ bằng",
   "options": [
    "$14$.",
    "$-14$.",
    "$2$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Mẫu số bằng 0 tại $x = 2$, giới hạn hữu hạn nên tử số cũng bằng 0: $4 + (2)a + b = 0$<br>$\\dfrac{x^2 + ax + b}{x^{2} - 3 x + 2} = \\dfrac{(x - 2)(x + a + (2))}{(x - 2)(x - 1)} \\to \\dfrac{2\\cdot(2) + a}{1}$<br>$\\dfrac{4 + a}{1} = -2 \\Rightarrow a = -6,\\ b = 8$<br>$b - a = 14$",
   "note": "Giới hạn hữu hạn buộc các số hạng bậc thấp ở tử triệt tiêu; với hiệu hai căn thì nhân lượng liên hợp."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{-2x} & \\text{khi } x \\le 0\\\\ a\\sin x + b & \\text{khi } x > 0\\end{cases}$ có đạo hàm tại $x = 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$-3$.",
    "$-2$.",
    "$-1$.",
    "$-4$."
   ],
   "answer": 0,
   "explain": "Liên tục tại 0: $e^{0} = a\\sin 0 + b \\Rightarrow b = 1$<br>Đạo hàm trái tại 0: $-2e^{0} = -2$; đạo hàm phải: $a\\cos 0 = a$, nên $a = -2$<br>$2a + b = -3$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một bể chứa nước hình hộp chữ nhật có chiều dài, chiều rộng và chiều cao lần lượt là 2 mét, 1,5 mét và 2 mét được chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm nửa lượng nước phía trên ra khỏi bể qua mặt trên của bể bằng",
   "options": [
    "14,7 <i>kJ</i>.",
    "58,8 <i>kJ</i>.",
    "29,4 <i>kJ</i>.",
    "117,6 <i>kJ</i>."
   ],
   "answer": 0,
   "explain": "Lớp nước dày $dy$ ở độ sâu $y$ có khối lượng $1000\\cdot2\\cdot1{,}5\\,dy$, phải nâng lên $y$ mét<br>$W = \\displaystyle\\int_0^{1} 9800\\cdot2\\cdot1{,}5\\cdot y\\,dy = 29400\\cdot\\dfrac{1^2}{2}$<br>$= 14700\\ J = 14{,}7\\ kJ$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $3, 2, 3$ đơn vị nguyên liệu I; $1, 1, 1$ đơn vị nguyên liệu II và $3, 3, 1$ đơn vị nguyên liệu III. Kho hiện có $80$, $30$ và $70$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$30$.",
    "$40$.",
    "$20$.",
    "$18$."
   ],
   "answer": 0,
   "explain": "Gọi $x, y, z$ là số sản phẩm mỗi loại; giải hệ ba phương trình được $(10;10;10)$<br>Kết quả: $30$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Gọi $S_N$ là tổng riêng thứ $N$ (tổng của $N$ số hạng đầu tiên) của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{(2n-1)(2n+1)}$. Giá trị của $S_{19}$ bằng",
   "options": [
    "$\\dfrac{19}{39}$.",
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{18}{19}$.",
    "$\\dfrac{1}{20}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{(2n-1)(2n+1)} = \\dfrac12\\left(\\dfrac{1}{2n-1} - \\dfrac{1}{2n+1}\\right)$<br>Cộng $N$ số hạng đầu, các số hạng ở giữa triệt tiêu: $S_N = \\dfrac12\\left(1 - \\dfrac{1}{2N+1}\\right)$<br>$S_{19} = \\dfrac{19}{39}$",
   "note": "$S_N$ là tổng hữu hạn, chưa lấy giới hạn: đừng nhầm với tổng của cả chuỗi."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}7545454\\ldots$ (phần tuần hoàn là 54) bằng $\\dfrac{7}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{54}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$193$.",
    "$27$.",
    "$194$.",
    "$1754$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{54}{10\\cdot100^n} = \\dfrac{54}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{54}{990}$<br>$\\dfrac{7}{10} + \\dfrac{54}{990} = \\dfrac{83}{110} \\Rightarrow a + b = 193$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{x^{n+1}}{n(n+1)}$ bằng",
   "options": [
    "$x + (1-x)\\ln(1-x)$.",
    "$-\\ln(1-x)$.",
    "$x - (1-x)\\ln(1-x)$.",
    "$(1-x)\\ln(1-x)$."
   ],
   "answer": 0,
   "explain": "Tích phân từng số hạng chuỗi $\\sum_{n\\ge1}\\dfrac{x^n}{n} = -\\ln(1-x)$ từ $0$ đến $x$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = \\dfrac{2xy}{1 + x^2}$ là",
   "options": [
    "$y = C(1 + x^2)$.",
    "$y = C\\sqrt{1 + x^2}$.",
    "$y = 1 + x^2 + C$.",
    "$y = Ce^{x^2}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{dy}{y} = \\dfrac{2x\\,dx}{1+x^2}$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' - \\dfrac{3y}{x} = x^3$ là $(x > 0)$",
   "options": [
    "$y = x^3(\\ln x + C)$.",
    "$y = x^3\\ln x + C$.",
    "$y = x^4 + Cx^3$.",
    "$y = x^3(x + C)$."
   ],
   "answer": 0,
   "explain": "$\\left(\\dfrac{y}{x^3}\\right)' = \\dfrac1x$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Một vật khối lượng 10 kg rơi từ trạng thái nghỉ, chịu lực cản không khí tỉ lệ với vận tốc với hệ số $k = 1\\,kg/s$, tức vận tốc $v(t)$ thỏa mãn $10v' = 10g - 1v$ (lấy $g = 9{,}8\\,m/s^2$). Vận tốc của vật sau 4 giây (làm tròn đến hàng phần chục, đơn vị m/s) là",
   "options": [
    "32,3.",
    "98,0.",
    "39,2.",
    "65,7."
   ],
   "answer": 0,
   "explain": "$v' + \\dfrac{1}{10}v = 9{,}8$ (tuyến tính cấp một), $v(0) = 0$<br>$v(t) = \\dfrac{mg}{k}\\left(1 - e^{-kt/m}\\right) = 98\\left(1 - e^{-0{,}1t}\\right)$<br>$v(4) = 98\\left(1 - e^{-0{,}4}\\right) \\approx 32{,}3$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\left\\{(x,y): \\dfrac{x^2}{9} + \\dfrac{y^2}{1} \\le 1\\right\\}$. Dùng phép đổi biến $x = 3r\\cos\\varphi,\\ y = r\\sin\\varphi$ (Jacobian bằng $3r$), giá trị của tích phân $\\displaystyle\\iint_D (x^2 + y^2)\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{15 \\pi}{2}$.",
    "$\\dfrac{5 \\pi}{2}$.",
    "$15 \\pi$.",
    "$5 \\pi$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\int_0^{2\\pi}\\!\\!\\int_0^1 (9\\cos^2\\varphi + 1\\sin^2\\varphi)\\,3r^3\\,dr\\,d\\varphi = \\dfrac{3}{4}\\cdot\\pi(9 + 1)$<br>Kết quả: $\\dfrac{15 \\pi}{2}$",
   "note": "Trong tọa độ cực $dxdy = r\\,dr\\,d\\varphi$; đường tròn $x^2 + y^2 = 2ax$ là $r = 2a\\cos\\varphi$ với $-\\dfrac{\\pi}{2} \\le \\varphi \\le \\dfrac{\\pi}{2}$."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho miền $V = \\{(x,y,z): 0 \\le x \\le 1;\\ 0 \\le y \\le 1;\\ 0 \\le z \\le 2\\}$. Giá trị của tích phân $\\displaystyle\\iiint_V (x + yz)\\,dxdydz$ bằng",
   "options": [
    "$2$.",
    "$1$.",
    "$4$.",
    "$\\dfrac{3}{2}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1^2}{2}\\cdot1\\cdot2 + 1\\cdot\\dfrac{1^2}{2}\\cdot\\dfrac{2^2}{2} = 2$<br>Kết quả: $2$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Cho $L$ là cung parabol $y = \\dfrac{x^2}{2}$ đi từ $O(0;0)$ đến $A\\left(2\\sqrt2;4\\right)$. Giá trị của tích phân $\\displaystyle\\int_L x\\,ds$ bằng",
   "options": [
    "$\\dfrac{26}{3}$.",
    "$9$.",
    "$\\dfrac{13}{3}$.",
    "$13$."
   ],
   "answer": 0,
   "explain": "$ds = \\sqrt{1 + x^2}\\,dx$; $\\displaystyle\\int_0^{2\\sqrt2} x\\sqrt{1 + x^2}\\,dx = \\dfrac{(1 + x^2)^{3/2}}{3}\\Big|_0^{2\\sqrt2}$<br>Kết quả: $\\dfrac{26}{3}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là đường tròn $x^2 + y^2 = 4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x^{2} - 2 y^{3})\\,dx + (3 x^{3} + y^{2})\\,dy$ bằng",
   "options": [
    "$60 \\pi$.",
    "$120 \\pi$.",
    "$30 \\pi$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\iint_{x^2+y^2\\le4}(9 x^{2} + 6 y^{2})\\,dxdy = (15)\\cdot\\dfrac{\\pi\\cdot2^4}{4}$<br>Kết quả: $60 \\pi$",
   "note": "Tích phân đường loại hai: thay $y = y(x)$, $dy = y'dx$; với đường cong kín thì dùng công thức Green."
  }
 ],
 "groups": [
  {
   "stem": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho các véc tơ $u_1 = (1;1;-2),\\ u_2 = (3;-1;3),\\ u_3 = (3;0;2)$ và $v = (17;0;8)$.",
   "questions": [
    {
     "q": "Giá trị của $\\langle u_1, u_2\\rangle + \\langle u_2, u_3\\rangle$ bằng",
     "options": [
      "$11$.",
      "$-19$.",
      "$-4$.",
      "$15$."
     ],
     "answer": 0,
     "explain": "$\\langle u_1, u_2\\rangle = -4,\\quad \\langle u_2, u_3\\rangle = 15$<br>Tổng: $11$"
    },
    {
     "q": "Định thức của ma trận có các hàng lần lượt là $u_1, u_2, u_3$ bằng",
     "options": [
      "$-5$.",
      "$5$.",
      "$-4$.",
      "$-7$."
     ],
     "answer": 0,
     "explain": "$\\begin{vmatrix}1 & 1 & -2 \\\\ 3 & -1 & 3 \\\\ 3 & 0 & 2\\end{vmatrix} = -5$<br>Định thức khác 0 nên $\\{u_1, u_2, u_3\\}$ là một cơ sở của $\\mathbb{R}^3$"
    },
    {
     "q": "Biết $v = au_1 + bu_2 + cu_3$, giá trị của $a + b + c$ bằng",
     "options": [
      "$7$.",
      "$8$.",
      "$3$.",
      "$-7$."
     ],
     "answer": 0,
     "explain": "$v = au_1 + bu_2 + cu_3$: viết theo từng tọa độ được hệ ba phương trình ba ẩn $a, b, c$<br>Giải hệ: $a = 2,\\ b = 2,\\ c = 3$<br>$a + b + c = 7$",
     "note": "Định thức khác 0 thì ba véc tơ là một cơ sở, nên biểu diễn của $v$ qua chúng là duy nhất."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - x y + y^{2} - 3 y$.",
   "questions": [
    {
     "q": "Giá trị của $f'_x(1;1)$ bằng",
     "options": [
      "$1$.",
      "$-2$.",
      "$-1$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x - y$<br>$f'_x(1;1) = 1$"
    },
    {
     "q": "Gọi $(x_0;y_0)$ là điểm dừng của hàm số, giá trị của $x_0 + 2y_0$ bằng",
     "options": [
      "$5$.",
      "$4$.",
      "$3$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x - y = 0,\\quad f'_y = - x + 2 y - 3 = 0$<br>Giải hệ: $x_0 = 1,\\ y_0 = 2$<br>$x_0 + 2y_0 = 5$"
    },
    {
     "q": "Giá trị cực tiểu của hàm số bằng",
     "options": [
      "$-3$.",
      "$3$.",
      "$-2$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$A = f''_{xx} = 2,\\ B = f''_{xy} = -1,\\ C = f''_{yy} = 2$<br>$AC - B^2 = 3 > 0$ và $A > 0$ nên điểm dừng là điểm cực tiểu<br>$f(1;2) = -3$",
     "note": "$AC - B^2 > 0$ và $A > 0$ tại mọi điểm nên điểm dừng duy nhất là điểm cực tiểu."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Tính định thức Vandermonde $D = \\begin{vmatrix}1 & 1 & 1 \\\\ -1 & 1 & 2 \\\\ 1 & 1 & 4\\end{vmatrix}$.",
   "answer": [
    "6"
   ],
   "explain": "Với các số $a, b, c$ ở hàng hai: $D = (b - a)(c - a)(c - b)$<br>$D = (2)(3)(1) = 6$",
   "note": "Định thức Vandermonde bằng tích các hiệu (số đứng sau trừ số đứng trước)."
  },
  {
   "q": "Gọi $M(a;b;c)$ là điểm cực trị của hàm số $f(x,y,z) = x^{2} - 2 x y + 2 y^{2} - 2 y + z^{2} - 4 z + 50$. Tính $a + 2b + 3c$.",
   "answer": [
    "9"
   ],
   "explain": "Giải $f'_x = f'_y = f'_z = 0$ được $M(1;1;2)$<br>Đáp số: $9$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Tìm bán kính hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{x^{3n}}{27^n\\sqrt n}$.",
   "answer": [
    "3"
   ],
   "explain": "Đặt $t = x^3$: bán kính hội tụ theo $t$ bằng 27, tức $|x|^3 < 27$<br>$R = 3$",
   "note": "Chuỗi theo $x^k$: đặt $t = x^k$; bán kính theo $x$ là căn bậc $k$ của bán kính theo $t$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 0$ với điều kiện $y(0) = -2;\\ y'(0) = 3$. Tính $y\\left(\\pi\\right)$.",
   "answer": [
    "2"
   ],
   "explain": "$y = -2\\cos x + 3\\sin x$<br>Đáp số: $2$",
   "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt trụ $x^2 + y^2 = 4$ và hai mặt phẳng $z = 0$, $x + y + z = 5$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "20"
   ],
   "explain": "$\\displaystyle\\iint_{x^2+y^2\\le4}(5 - x - y)\\,dxdy = 5\\cdot\\pi\\cdot4$ (tích phân của $x$ và $y$ trên hình tròn bằng 0 do đối xứng)<br>Đáp số: $20$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
