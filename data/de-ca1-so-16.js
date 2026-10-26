// ĐỀ SỐ 16 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-16",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 16",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Cá nhân và cộng đồng",
  "prompt": "Trên một tuyến phố đông người, một vụ va chạm giao thông xảy ra. Trong những phút đầu tiên, hơn chục người dừng lại giơ điện thoại quay phim, phát trực tiếp lên mạng xã hội; chỉ có một người bán hàng rong chạy đến sơ cứu và gọi cấp cứu. Đoạn phim sau đó thu hút hàng trăm nghìn lượt xem cùng rất nhiều bình luận thương cảm.",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về hiện tượng “đứng xem và quay phim” trong câu chuyện trên và về trách nhiệm của mỗi cá nhân đối với người khác trong cộng đồng.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (4;4;5)$ và $v = (-1;-1;1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
   "options": [
    "$1$.",
    "$-3$.",
    "$-1$.",
    "$13$."
   ],
   "answer": 0,
   "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -3,\\quad \\langle v, v\\rangle = 3 \\Rightarrow t = -1$<br>$p = -v = (1;1;-1)$, tổng các tọa độ: $1$",
   "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (-1;0;0),\\ u_2 = (1;-1;0)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
   "options": [
    "$(1;0;3)$.",
    "$(3;-2;0)$.",
    "$(0;-1;0)$.",
    "$(-2;1;0)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(1;0;3)$ — định thức của ba véc tơ $u_1, u_2$ và véc tơ này bằng $3 \\ne 0$ nên ba véc tơ độc lập tuyến tính<br><b>Sai:</b> $(3;-2;0) = - u_{1} + 2 u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(0;-1;0) = u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(-2;1;0) = u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$"
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ $S$ gồm $u_1 = (-2;-2;-2;-1),\\ u_2 = (3;-2;1;1),\\ u_3 = (-2;8;2;0),\\ u_4 = (2;1;1;-1)$. Cần bổ sung vào $S$ ít nhất bao nhiêu véc tơ để hệ mới sinh ra toàn bộ $\\mathbb{R}^4$?",
   "options": [
    "$1$.",
    "$3$.",
    "$0$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Xếp các véc tơ thành hàng và đưa về dạng bậc thang: $\\begin{pmatrix}-2 & -2 & -2 & -1 \\\\ 0 & 10 & 4 & 1 \\\\ 0 & 0 & 12 & 38 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của $S$ bằng $3$, tức $S$ sinh ra một không gian con $3$ chiều<br>Cần thêm ít nhất $4 - 3 = 1$ véc tơ",
   "note": "Hệ sinh ra $\\mathbb{R}^4$ khi hạng bằng 4, nên cần thêm ít nhất $4 -$ hạng véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-3 & 2 \\\\ 2 & 0\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x - y$ bằng",
   "options": [
    "$-7$.",
    "$1$.",
    "$12$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}13 & -6 \\\\ -6 & 4\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = -3$<br>So sánh phần tử hàng 1, cột 1: $13 = -3\\cdot(-3) + y \\Rightarrow y = 4$<br>$x - y = -7$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 2$. Giá trị của $\\det\\left(2A^{-1}\\right)$ bằng",
   "options": [
    "$4$.",
    "$1$.",
    "$-4$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(2A^{-1}\\right) = 2^3\\cdot\\dfrac{1}{\\det A}$<br>Thay $\\det A = 2$: kết quả $4$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$ là ma trận thực đối xứng cấp $n \\ge 2$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Hai véc tơ riêng ứng với hai trị riêng khác nhau của $A$ thì trực giao với nhau.",
    "Mọi trị riêng của $A$ đều dương.",
    "$A$ luôn khả nghịch.",
    "$A$ luôn có $n$ trị riêng đôi một khác nhau."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Hai véc tơ riêng ứng với hai trị riêng khác nhau của $A$ thì trực giao với nhau. Nếu $AX = \\lambda X$, $AY = \\mu Y$ thì $\\lambda\\langle X,Y\\rangle = \\langle AX,Y\\rangle = \\langle X,AY\\rangle = \\mu\\langle X,Y\\rangle$; vì $\\lambda \\ne \\mu$ nên $\\langle X,Y\\rangle = 0$.<br><b>Sai:</b> Mọi trị riêng của $A$ đều dương. $A = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$ đối xứng và có trị riêng $-1$.<br><b>Sai:</b> $A$ luôn khả nghịch. Ma trận không là ma trận đối xứng nhưng không khả nghịch.<br><b>Sai:</b> $A$ luôn có $n$ trị riêng đôi một khác nhau. Ma trận đơn vị đối xứng, chỉ có một trị riêng là 1 (bội $n$)."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}-1 & -1 & 0 & 2 \\\\ 2 & 4 & -2 & -2 \\\\ 0 & 0 & 2 & 1 \\\\ 0 & 0 & 3 & 0\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$6$.",
    "$-5$.",
    "$2$.",
    "$-6$."
   ],
   "answer": 0,
   "explain": "$\\det P = -2,\\quad \\det R = -3$<br>$\\det A = \\det P\\cdot\\det R = (-2)\\cdot(-3) = 6$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty}\\left[x^2\\left(e^{\\frac{3}{x}} - 1\\right) - 3x\\right]$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{9}{2}$.",
    "$9$.",
    "$0$.",
    "$\\dfrac{3}{2}$."
   ],
   "answer": 0,
   "explain": "Đặt $t = \\dfrac{3}{x} \\to 0$: $e^{t} - 1 = t + \\dfrac{t^2}{2} + o(t^2)$<br>$x^2\\left(e^{t} - 1\\right) = x^2\\left(\\dfrac{3}{x} + \\dfrac{9}{2x^2} + o\\left(\\dfrac{1}{x^2}\\right)\\right) = 3x + \\dfrac{9}{2} + o(1)$<br>$\\lim = \\dfrac{9}{2} = \\dfrac{9}{2}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 4}}{x + 3}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tiệm cận đứng $x = -3$; khi $x \\to +\\infty$ thì $y \\to 1$, khi $x \\to -\\infty$ thì $y \\to -1$ nên có hai tiệm cận ngang $y = \\pm1$<br>Kết quả: $3$",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{4}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{1}{(1 - x)(1 - 2x)}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$31$.",
    "$15$.",
    "$744$.",
    "$-31$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{1 - 2 x} = 1 + 2x + 4x^{2} + 8x^{3} + 16x^{4} + o(x^{4})$<br>$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + x^{4} + o(x^{4})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 3x + 7x^{2} + 15x^{3} + 31x^{4} + o(x^{4})$<br>Hệ số của $x^{4}$: $31$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm hợp $z = u^2 + uv$ với $u = x y,\\ v = x - y$. Dùng quy tắc đạo hàm hàm hợp $z'_x = z'_u\\cdot u'_x + z'_v\\cdot v'_x$, giá trị của $z'_x$ tại điểm $(x;y) = (1;1)$ bằng",
   "options": [
    "$3$.",
    "$2$.",
    "$-3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tại điểm đã cho: $u = 1,\\ v = 0$<br>$z'_u = 2 u + v \\to 2,\\quad z'_v = u \\to 1$<br>$u'_x = y \\to 1,\\quad v'_x = 1 \\to 1$<br>$z'_x = (2)\\cdot(1) + (1)\\cdot(1) = 3$",
   "note": "Tính $u, v$ tại điểm đã cho trước rồi mới thay vào các đạo hàm riêng; phải cộng đủ hai nhánh qua $u$ và qua $v$."
  },
  {
   "q": "Cho hàm số $f(x,y)$ có các đạo hàm riêng cấp hai liên tục và $M_0$ là một điểm dừng. Đặt $A = f''_{xx}(M_0),\\ B = f''_{xy}(M_0),\\ C = f''_{yy}(M_0)$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $AC - B^2 > 0$ và $A < 0$ thì $f$ đạt cực đại tại $M_0$.",
    "Nếu $AC - B^2 > 0$ và $A > 0$ thì $f$ đạt cực đại tại $M_0$.",
    "Nếu $AC - B^2 < 0$ thì $f$ đạt cực tiểu tại $M_0$.",
    "Nếu $AC - B^2 = 0$ thì $f$ không đạt cực trị tại $M_0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $AC - B^2 > 0$ và $A < 0$ thì $f$ đạt cực đại tại $M_0$. Khi đó dạng toàn phương $d^2f(M_0)$ xác định âm.<br><b>Sai:</b> Nếu $AC - B^2 > 0$ và $A > 0$ thì $f$ đạt cực đại tại $M_0$. Khi đó $f$ đạt cực tiểu; ví dụ $f = x^2 + y^2$ tại gốc.<br><b>Sai:</b> Nếu $AC - B^2 < 0$ thì $f$ đạt cực tiểu tại $M_0$. Khi đó $M_0$ không là điểm cực trị (điểm yên ngựa); ví dụ $f = x^2 - y^2$ tại gốc.<br><b>Sai:</b> Nếu $AC - B^2 = 0$ thì $f$ không đạt cực trị tại $M_0$. Trường hợp này chưa kết luận được: $f = x^4 + y^4$ có $AC - B^2 = 0$ tại gốc mà vẫn đạt cực tiểu."
  },
  {
   "q": "Một mảnh vườn hình chữ nhật có hai kích thước $x > 0,\\ y > 0$ (mét) thỏa mãn ràng buộc về vật liệu rào $x + 3 y = 6$. Diện tích $S = xy$ lớn nhất của mảnh vườn bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$3$.",
    "$6$.",
    "$12$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "$L = xy - \\lambda(x + 3 y - 6)$<br>$L'_x = y - \\lambda = 0,\\quad L'_y = x - 3 \\lambda = 0 \\Rightarrow y = \\lambda,\\ x = 3 \\lambda$<br>Thay vào ràng buộc: $6 \\lambda = 6 \\Rightarrow \\lambda = 1$<br>$x = 3,\\ y = 1$, $S_{\\max} = 3$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho $c$ là số nguyên dương. Giá trị lớn nhất của $c$ để chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(n!)^2c^n}{(2n)!}$ hội tụ là",
   "options": [
    "$3$.",
    "$4$.",
    "$2$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{u_{n+1}}{u_n} = \\dfrac{c(n+1)^2}{(2n+1)(2n+2)} \\to \\dfrac{c}{4}$<br>Hội tụ khi $\\dfrac{c}{4} < 1$; với $c = 4$ có $\\dfrac{u_{n+1}}{u_n} = \\dfrac{2n+2}{2n+1} > 1$ nên $u_n \\not\\to 0$<br>Giá trị nguyên dương lớn nhất: $3$",
   "note": "Khi tỉ số D’Alembert bằng đúng 1 thì tiêu chuẩn không kết luận được: phải xét riêng giá trị biên của $c$."
  },
  {
   "q": "Xét chuỗi đan dấu $S = \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n+1}}{n}$ và gọi $S_n$ là tổng riêng thứ $n$. Theo đánh giá sai số của chuỗi Leibniz, $|S - S_n| \\le a_{n+1}$ với $a_n = \\dfrac{1}{n}$. Số $n$ nhỏ nhất để đánh giá này bảo đảm $|S - S_n| \\le 0{,}001$ là",
   "options": [
    "$999$.",
    "$1000$.",
    "$998$.",
    "$9999$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{n+1} \\le 0{,}001 \\Leftrightarrow n + 1 \\ge 1000$<br>Kết quả: $999$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Xét bài toán Cauchy $y' = f(x,y),\\ y(x_0) = y_0$, trong đó $f$ và $f'_y$ liên tục trong một lân cận của điểm $(x_0;y_0)$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Trong một lân cận của $x_0$, bài toán có đúng một nghiệm.",
    "Bài toán có vô số nghiệm, phụ thuộc một hằng số tùy ý.",
    "Bài toán có thể vô nghiệm.",
    "Nghiệm của bài toán luôn xác định với mọi $x \\in \\mathbb{R}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Trong một lân cận của $x_0$, bài toán có đúng một nghiệm. Đây là định lí tồn tại và duy nhất nghiệm.<br><b>Sai:</b> Bài toán có vô số nghiệm, phụ thuộc một hằng số tùy ý. Nghiệm tổng quát của phương trình mới phụ thuộc hằng số $C$; điều kiện đầu đã xác định $C$.<br><b>Sai:</b> Bài toán có thể vô nghiệm. Với giả thiết $f$ liên tục, nghiệm luôn tồn tại trong một lân cận của $x_0$.<br><b>Sai:</b> Nghiệm của bài toán luôn xác định với mọi $x \\in \\mathbb{R}$. $y' = y^2,\\ y(0) = 1$ có nghiệm $y = \\dfrac{1}{1 - x}$, chỉ xác định khi $x < 1$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình đẳng cấp $y' = \\dfrac{y}{x} + 2\\dfrac{y^2}{x^2}$ $(x > 0)$ thỏa mãn $y(1) = 1$. Bằng phép đặt $y = ux$, giá trị của $y\\left(\\sqrt[4]{e}\\right)$ bằng",
   "options": [
    "$2\\sqrt[4]{e}$.",
    "$\\sqrt[4]{e}$.",
    "$4\\sqrt[4]{e}$.",
    "$\\dfrac{\\sqrt[4]{e}}{2}$."
   ],
   "answer": 0,
   "explain": "$y = ux \\Rightarrow y' = u'x + u$; thay vào: $u'x = 2u^2$<br>$\\dfrac{du}{u^2} = \\dfrac{2\\,dx}{x} \\Rightarrow -\\dfrac1u = 2 \\ln x + C$<br>$y(1) = 1 \\Rightarrow u(1) = 1 \\Rightarrow C = -1 \\Rightarrow y = \\dfrac{x}{1 - 2 \\ln x}$<br>$y\\left(\\sqrt[4]{e}\\right) = 2\\sqrt[4]{e}$",
   "note": "Phương trình đẳng cấp: đặt $y = ux$ thì $y' = u'x + u$; giải xong nhớ đổi lại $u = \\dfrac{y}{x}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 4500 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 500$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số cá trong hồ sau 4 tháng bằng",
   "options": [
    "$1500$.",
    "$2000$.",
    "$2250$.",
    "$900$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{4500}{1 + A} = 500 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{2}\\cdot4} = 2^{-2} = \\dfrac{1}{4}$<br>$P(4) = \\dfrac{4500}{1 + \\frac{8}{4}} = 1500$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $y'' - 3y' + 2y = xe^{x}$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?",
   "options": [
    "$y^* = x(Ax + B)e^{x}$.",
    "$y^* = (Ax + B)e^{x}$.",
    "$y^* = Axe^{x}$.",
    "$y^* = x^2(Ax + B)e^{x}$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng có nghiệm $1$ và $2$; số $1$ (ứng với $e^{x}$) là nghiệm đơn nên nhân thêm $x$ vào dạng $(Ax + B)e^{x}$<br>Dạng cần tìm: $y^* = x(Ax + B)e^{x}$",
   "note": "Bội của số mũ (hoặc của $\\alpha \\pm i\\beta$) trong phương trình đặc trưng quyết định nhân thêm $1$, $x$ hay $x^2$."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>Điều kiện $y \\ge 0$ ứng với $0 \\le \\varphi \\le \\pi$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{4},\\ 0 \\le \\varphi \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{\\pi}{8}$.",
    "$\\dfrac{\\pi}{4}$.",
    "$\\dfrac{\\pi}{16}$.",
    "$\\dfrac{\\sqrt{2} \\pi}{4}$."
   ],
   "answer": 0,
   "explain": "$I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{4}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{4}}{2}\\cdot\\dfrac{1}{4} = \\dfrac{\\pi}{8}$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 600 nghìn khách, tổng số không đổi. Mỗi tháng có 10% khách hàng của X chuyển sang Y và 40% khách hàng của Y chuyển sang X. Hiện tại X có 300 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$480$.",
    "$120$.",
    "$300$.",
    "$390$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 40\\%\\cdot(600 - x)$<br>$50x = 24000 \\Rightarrow x = 480$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 1 khi và chỉ khi",
   "options": [
    "$m = 1$.",
    "$m = -2$.",
    "$m \\ne 1$ và $m \\ne -2$.",
    "$m = -2$ hoặc $m = 1$."
   ],
   "answer": 0,
   "explain": "$\\det A = \\left(m - 1\\right)^{2} \\left(m + 2\\right)$ nên $\\operatorname{rank}A = 3 \\Leftrightarrow m \\ne 1$ và $m \\ne -2$<br>Với $m = 1$: ba hàng của $A$ bằng nhau và khác không nên $\\operatorname{rank}A = 1$<br>Với $m = -2$: tổng ba hàng bằng véc tơ không, hai hàng đầu không tỉ lệ nên $\\operatorname{rank}A = 2$<br>Vậy hạng của $A$ bằng 1 $\\Leftrightarrow m = 1$",
   "note": "$\\det A = 0$ mới cho biết hạng nhỏ hơn 3; phải thay từng giá trị $m$ để biết hạng bằng 1 hay 2."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}2 & 1 \\\\ 3 & 2\\end{pmatrix}$ và $B = \\begin{pmatrix}12 & 11 \\\\ 21 & 19\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A^2.X = B$. Tổng tất cả các phần tử của $X$ bằng",
   "options": [
    "$5$.",
    "$17$.",
    "$63$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$A^{-1} = \\begin{pmatrix}2 & -1 \\\\ -3 & 2\\end{pmatrix}$<br>$A.X = A^{-1}B = \\begin{pmatrix}3 & 3 \\\\ 6 & 5\\end{pmatrix}$<br>$X = A^{-1}(A^{-1}B) = \\begin{pmatrix}0 & 1 \\\\ 3 & 1\\end{pmatrix}$<br>Tổng các phần tử: $5$",
   "note": "$A^2X = B \\Rightarrow X = A^{-1}A^{-1}B$: nhân $A^{-1}$ vào bên trái hai lần."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y + z = 0\\\\ -2x + my = 0\\\\ -x - 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$-5$.",
    "$4$.",
    "$17$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 5 m + 4 = \\left(m + 1\\right) \\left(m + 4\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -4$ hoặc $m = -1$<br>Giá trị cần tìm: $-5$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{a - \\cos bx}{x^2} = 2$ với $b > 0$. Giá trị của $a\\cdot b$ bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$4$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Mẫu số tiến về 0 và giới hạn hữu hạn nên tử số cũng tiến về 0: $a - 1 = 0 \\Rightarrow a = 1$<br>$1 - \\cos bx \\sim \\dfrac{b^2x^2}{2}$ nên giới hạn bằng $\\dfrac{b^2}{2}$<br>$\\dfrac{b^2}{2} = 2 \\Rightarrow b = 2$ (vì $b > 0$)<br>$a\\cdot b = 2$",
   "note": "Mẫu tiến về 0 mà giới hạn hữu hạn thì tử cũng phải tiến về 0: điều kiện này cho $a$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\cos 4x & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$-7$.",
    "$-8$.",
    "$1$.",
    "$-15$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = \\cos{\\left(4 x \\right)}$: $g(0) = 1,\\ g'(0) = 0,\\ g''(0) = -16$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 1,\\ b = 0,\\ 2a = -16 \\Rightarrow a = -8$<br>$a - b + d = -7$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} e^{-x}\\sin x\\,dx$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$1$.",
    "$\\dfrac{3}{2}$.",
    "$- \\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "Từng phần hai lần: $I = \\left[-\\dfrac{1}{1}e^{-x}\\cos x\\right]_0^{+\\infty} - \\dfrac{1}{1}\\displaystyle\\int_0^{+\\infty}e^{-x}\\cos x\\,dx = \\dfrac{1}{1} - \\dfrac{1}{1}I$<br>$I\\left(1 + \\dfrac{1}{1}\\right) = \\dfrac{1}{1} \\Rightarrow I = \\dfrac{1}{2}$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 30 nghìn đồng, hạng trung giá 50 nghìn đồng và hạng VIP giá 90 nghìn đồng. Ban tổ chức bán được tổng cộng 220 vé, thu về 8800 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là 80 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$20$.",
    "$50$.",
    "$30$.",
    "$15$."
   ],
   "answer": 0,
   "explain": "Hệ: $x + y + z = 220$; $30x + 50y + 90z = 8800$; $x - y - z = 80$. Giải được $(150;50;20)$<br>Kết quả: $20$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{n}{(n+1)!}$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$e - 1$.",
    "$1$.",
    "$\\dfrac{1}{4}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{n}{(n+1)!} = \\dfrac{(n+1) - 1}{(n+1)!} = \\dfrac{1}{n!} - \\dfrac{1}{(n+1)!}$<br>Tổng riêng thu gọn: $S_N = \\dfrac{1}{2!} - \\dfrac{1}{(N+1)!}$<br>$N \\to +\\infty$: $S = \\dfrac{1}{2!} = \\dfrac{1}{2}$",
   "note": "Tách $n = (n + 1) - 1$ để được hiệu của hai số hạng liên tiếp."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\left[(-1)^{n-1}\\left(\\dfrac{2}{3}\\right)^n + \\dfrac{1}{4^{2n}}\\right] = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$), giá trị của $a + b$ bằng",
   "options": [
    "$22$.",
    "$8$.",
    "$46$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^{n-1}\\left(\\dfrac{2}{3}\\right)^n = \\dfrac{\\frac{2}{3}}{1 + \\frac{2}{3}} = \\dfrac{2}{5}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{16^n} = \\dfrac{\\frac{1}{16}}{1 - \\frac{1}{16}} = \\dfrac{1}{15}$<br>Tổng: $\\dfrac{7}{15} \\Rightarrow a + b = 22$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n-1}}{n\\cdot2^n}$ bằng",
   "options": [
    "$\\ln\\left(\\dfrac{3}{2}\\right)$.",
    "$\\ln 2$.",
    "$\\ln 3$.",
    "$\\dfrac{1}{3}$."
   ],
   "answer": 0,
   "explain": "$\\ln(1 + x)$ tại $x = \\dfrac12$<br>Vậy tổng của chuỗi bằng $\\ln\\left(\\dfrac{3}{2}\\right)$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = 2xy$ thỏa mãn $y(0) = 3$. Giá trị của $y\\left(1\\right)$ bằng",
   "options": [
    "$3 e$.",
    "$3$.",
    "$1 + 3 e$.",
    "$\\dfrac{3 e}{2}$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{y} = 2x\\,dx \\Rightarrow \\ln|y| = x^2 + C$<br>$y(0) = 3 \\Rightarrow y = 3 e^{x^{2}}$<br>$y\\left(1\\right) = 3 e$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - y = x^{2}e^x$ $(x > 0)$ thỏa mãn $y(1) = e - 1$. Giá trị của $y(2)$ bằng",
   "options": [
    "$2 e^{2} - 2$.",
    "$2 e^{2}$.",
    "$e^{2} - 1$.",
    "$2 + 2 e^{2}$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{2}$: $\\left(\\dfrac{y}{x}\\right)' = e^x \\Rightarrow y = x(e^x + C)$<br>$y(1) = e + C = e - 1 \\Rightarrow C = -1$<br>$y(2) = 2\\left(e^2 - 1\\right) = 2 e^{2} - 2$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bể chứa 100 lít nước có hòa tan 15 kg muối. Người ta bơm vào bể nước muối nồng độ 0,1 kg/lít với tốc độ 6 lít/phút, đồng thời rút hỗn hợp (luôn được khuấy đều) ra khỏi bể với tốc độ 4 lít/phút, nên thể tích nước trong bể tăng dần. Lượng muối trong bể sau 100 phút là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "30,6.",
    "30,0.",
    "75,0.",
    "31,7."
   ],
   "answer": 0,
   "explain": "$V(t) = 100 + 2t$; $S' + \\dfrac{4}{100 + 2t}S = 0{,}6,\\quad S(0) = 15$<br>Nhân với thừa số tích phân $(100 + 2t)^2$: $\\left[S(100 + 2t)^2\\right]' = 0{,}6(100 + 2t)^2$<br>$S(100 + 2t)^2 = 0{,}1(100 + 2t)^3 + C$; $S(0) = 15 \\Rightarrow C = 50000$<br>$S(100) = 0{,}1\\cdot300 + \\dfrac{50000}{300^2} \\approx 30{,}6$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Thể tích của vật thể giới hạn bởi paraboloid $z = 1 - x^2 - y^2$ và mặt phẳng $z = 0$ được tính bằng $V = \\displaystyle\\iint_D z\\,dxdy$, với $D$ là hình chiếu của vật thể lên mặt phẳng $Oxy$. Giá trị của $V$ bằng",
   "options": [
    "$\\dfrac{\\pi}{2}$.",
    "$\\pi$.",
    "$\\dfrac{\\pi}{4}$.",
    "$\\dfrac{4 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "$z \\ge 0 \\Leftrightarrow x^2 + y^2 \\le 1$ nên $D$ là hình tròn bán kính $1$<br>$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}\\left(1 - r^{2}\\right)r\\,dr = 2\\pi\\left[- \\dfrac{r^{4}}{4} + \\dfrac{r^{2}}{2}\\right]_0^{1}$<br>$V = 2\\pi\\cdot\\dfrac{1}{4} = \\dfrac{\\pi}{2}$",
   "note": "Miền $D$ là hình chiếu của vật thể: nơi mặt cong cắt mặt phẳng $z = 0$."
  },
  {
   "q": "Cho $V$ là hình cầu $x^2 + y^2 + z^2 \\le 9$. Giá trị của tích phân $\\displaystyle\\iiint_V (x^2 + y^2 + z^2)\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{972 \\pi}{5}$.",
    "$\\dfrac{486 \\pi}{5}$.",
    "$\\dfrac{243 \\pi}{5}$.",
    "$324 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^2\\cdot\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot2\\cdot\\dfrac{243}{5} = \\dfrac{972 \\pi}{5}$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Trong mặt phẳng $Oxy$, cho $L$ là đoạn thẳng nối từ $A(1;0)$ đến $B(6;12)$. Giá trị của tích phân $\\displaystyle\\int_L (x + 2 y)\\,ds$ bằng",
   "options": [
    "$\\dfrac{403}{2}$.",
    "$\\dfrac{31}{2}$.",
    "$403$.",
    "$390$."
   ],
   "answer": 0,
   "explain": "Tham số hóa $x = 1 + 5t,\\ y = 0 + 12t$, $0 \\le t \\le 1$, $ds = 13\\,dt$; hàm dưới dấu tích phân bậc nhất nên tích phân bằng độ dài đoạn thẳng nhân giá trị tại trung điểm<br>Kết quả: $\\dfrac{403}{2}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 2 - y^{2})\\,dx + (x^{2} - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$2$.",
    "$-2$.",
    "$1$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx - 2 y,\\quad Q'_x = 2 x - 2 y$<br>Đồng nhất hệ số: $m = 2$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y - z = 1\\\\ x + 3y - z = 2\\\\ -2x + y + mz = 9\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = 4$, định thức của ma trận $A$ bằng",
     "options": [
      "$2$.",
      "$-2$.",
      "$4$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$\\det A = m - 2$<br>Với $m = 4$: $\\det A = 2$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$2$.",
      "$4$.",
      "$-2$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = m - 2 = 0 \\Leftrightarrow m = 2$"
    },
    {
     "q": "Khi $m = 4$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$6$.",
      "$7$.",
      "$-6$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "Với $m = 4$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 2$)<br>$(x_0;y_0;z_0) = (2;1;3)$<br>$x_0 + y_0 + z_0 = 6$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} + x y + y^{2}$ và điểm $M(1;2)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$9$.",
      "$-1$.",
      "$20$.",
      "$4$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x + y,\\quad f'_y = x + 2 y$<br>$\\nabla f(M) = (4;5) \\Rightarrow p + q = 9$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (4;3)$ bằng",
     "options": [
      "$\\dfrac{31}{5}$.",
      "$31$.",
      "$\\dfrac{32}{5}$.",
      "$- \\dfrac{31}{5}$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(4)\\cdot(4) + (5)\\cdot(3)}{5} = \\dfrac{31}{5}$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$-7$.",
      "$7$.",
      "$21$.",
      "$9$."
     ],
     "answer": 0,
     "explain": "$z = 7 + (4)(x - 1) + (5)(y - 2)$<br>Cho $x = y = 0$: $z = -7$",
     "note": "Gradient, đạo hàm theo hướng và mặt phẳng tiếp xúc đều dùng chung hai giá trị $f'_x(M)$, $f'_y(M)$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 0 \\\\ 1 & m & 1 \\\\ 0 & 1 & m\\end{pmatrix}$ với $m$ là số nguyên dương. Biết $\\det A = 21$, tìm $m$.",
   "answer": [
    "3"
   ],
   "explain": "$\\det A = m^{3} - 2 m = m \\left(m^{2} - 2\\right)$<br>$m^{3} - 2 m = 21 \\Leftrightarrow \\left(m - 3\\right) \\left(m^{2} + 3 m + 7\\right) = 0$<br>Nghiệm nguyên dương duy nhất: $m = 3$",
   "note": "Lập $\\det A$ theo $m$ rồi giải phương trình; chỉ nhận nghiệm nguyên dương."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 2xy$ với điều kiện $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$.",
   "answer": [
    "6"
   ],
   "explain": "Đặt $x = 3\\cos t,\\ y = 2\\sin t$: $f = 2\\cdot3\\cdot2\\sin t\\cos t$, lớn nhất bằng $\\dfrac{2\\cdot3\\cdot2}{2} = 6$<br>Đáp số: $6$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(3 x - 1)^{n}}{n^2\\cdot3^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "2"
   ],
   "explain": "Đặt $t = 3 x - 1$: chuỗi $\\sum\\dfrac{t^n}{n^2\\cdot3^n}$ hội tụ khi và chỉ khi $|t| \\le 3$ (tại hai đầu mút là chuỗi $\\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-3 \\le 3 x - 1 \\le 3 \\Leftrightarrow - \\dfrac{2}{3} \\le x \\le \\dfrac{4}{3}$<br>$\\beta - \\alpha = 2$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 4y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = -2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
   "answer": [
    "2"
   ],
   "explain": "Nghiệm đặc trưng $k = -1,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 4\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(-2) - 5\\cdot2 + 4I = 0 \\Rightarrow I = \\dfrac{8}{4} = 2$",
   "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Biết thể tích của $V$ bằng $k\\pi$, tính $3k$.",
   "answer": [
    "1"
   ],
   "explain": "Tọa độ cầu: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^2\\,d\\rho = \\dfrac{1}{3}\\pi$<br>Đáp số: $1$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
