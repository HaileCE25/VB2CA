// ĐỀ SỐ 23 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-23",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 23",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Cá nhân và cộng đồng",
  "prompt": "Từ ngày 01/7/2025, sau khi sắp xếp lại đơn vị hành chính, cả nước còn 34 tỉnh, thành phố; nhiều tên tỉnh, tên huyện quen thuộc không còn trên bản đồ hành chính. Có người bùi ngùi: “Mất tên quê là mất một phần ký ức.” Có người lại cho rằng: “Quê hương không nằm ở một cái tên trên giấy, mà ở cách mỗi người sống và đóng góp cho mảnh đất ấy.”",
  "source": "",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về hai ý kiến trên và về mối quan hệ giữa tình cảm riêng của mỗi người với lợi ích chung của đất nước.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (1;m;4)$ và $v = (m;3;1)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
   "options": [
    "$29$.",
    "$41$.",
    "$31$.",
    "$27$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = (1)\\cdot m + m\\cdot(3) + (4)\\cdot(1) = 4 m + 4$<br>$u \\perp v \\Leftrightarrow 4 m + 4 = 0 \\Leftrightarrow m = -1$<br>$u + v = (0;2;5)$<br>$|u + v|^2 = (0)^2 + (2)^2 + (5)^2 = 29$",
   "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(-1;-1;1),\\ u_2(-1;0;0),\\ u_3(2;0;1),\\ u_4(3;1;0),\\ u_5(1;0;0)\\}$. Có bao nhiêu hệ con gồm đúng 3 véc tơ của $S$ là cơ sở của $\\mathbb{R}^3$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$6$.",
    "$10$.",
    "$7$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Có $C_5^3 = 10$ hệ con gồm 3 véc tơ, trong đó 4 hệ phụ thuộc tuyến tính<br>Kết quả: $6$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 3 & 1 & 1 & -2 \\\\ 4 & 2 & 6 & 0 & -10 \\\\ 1 & 2 & -2 & 1 & 3 \\\\ -7 & -8 & 0 & -3 & 1\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$3$.",
    "$2$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng: $A \\to \\begin{pmatrix}3 & 3 & 1 & 1 & -2 \\\\ 0 & -6 & 14 & -4 & -22 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}A = 2$<br>Số chiều không gian nghiệm $= 5 - 2 = 3$",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-2 & 2 \\\\ -3 & 3\\end{pmatrix}$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{4}$ bằng<span class=\"q-hint\">Gợi ý: dùng $A^k = A$ với mọi $k \\ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$.</span>",
   "options": [
    "$2$.",
    "$32$.",
    "$17$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$(I + A)^n = I + \\displaystyle\\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$<br>$(I + A)^{4} = I + 15A = \\begin{pmatrix}-29 & 30 \\\\ -45 & 46\\end{pmatrix}$<br>Tổng các phần tử: $2$",
   "note": "Khi $A^2 = A$ thì mọi lũy thừa của $A$ đều bằng $A$; và $C_n^1 + \\dots + C_n^n = 2^n - 1$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 5$. Giá trị của $\\det\\left(2A^{-1}A^TA^2\\right)$ bằng",
   "options": [
    "$200$.",
    "$50$.",
    "$-200$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(2A^{-1}A^TA^2\\right) = 2^3\\cdot\\dfrac{1}{\\det A}\\cdot\\det A\\cdot(\\det A)^2$<br>Thay $\\det A = 5$: kết quả $200$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$ có các trị riêng $\\lambda_1, \\dots, \\lambda_n$ (kể cả bội). Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\det A = \\lambda_1\\lambda_2\\cdots\\lambda_n$.",
    "$\\det A = \\lambda_1 + \\lambda_2 + \\dots + \\lambda_n$.",
    "Vết của $A$ bằng $\\lambda_1\\lambda_2\\cdots\\lambda_n$.",
    "$A$ khả nghịch khi và chỉ khi $A$ có một trị riêng bằng 0."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\det A = \\lambda_1\\lambda_2\\cdots\\lambda_n$. $\\det(A - tI) = (\\lambda_1 - t)\\cdots(\\lambda_n - t)$; cho $t = 0$.<br><b>Sai:</b> $\\det A = \\lambda_1 + \\lambda_2 + \\dots + \\lambda_n$. Tổng các trị riêng bằng vết của $A$, không phải định thức.<br><b>Sai:</b> Vết của $A$ bằng $\\lambda_1\\lambda_2\\cdots\\lambda_n$. Vết bằng tổng các trị riêng; tích các trị riêng là định thức.<br><b>Sai:</b> $A$ khả nghịch khi và chỉ khi $A$ có một trị riêng bằng 0. $A$ khả nghịch $\\Leftrightarrow \\det A \\ne 0 \\Leftrightarrow$ không có trị riêng nào bằng 0."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}5 & 2 & 2 & 2 \\\\ 2 & 5 & 2 & 2 \\\\ 2 & 2 & 5 & 2 \\\\ 2 & 2 & 2 & 5\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$297$.",
    "$81$.",
    "$33$.",
    "$609$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1 + h_2 + h_3 + h_4$: hàng 1 trở thành $(11;11;11;11)$, rút $11$ ra ngoài định thức<br>$h_i \\to h_i - (2)h_1\\ (i = 2,3,4)$: được ma trận tam giác có đường chéo $1;\\ 3;\\ 3;\\ 3$<br>$\\det A = (11)\\cdot(3)^3 = 297$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 3x - 3x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$54$.",
    "$27$.",
    "$6$.",
    "$\\dfrac{27}{2}$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 3x$: $\\tan u = u + \\dfrac{u^3}{3} + o(u^3) \\Rightarrow \\tan u - u = \\dfrac{27x^3}{3} + o(x^3)$<br>$\\sin x = x - \\dfrac{x^3}{6} + o(x^3) \\Rightarrow x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{27/3}{1/6} = 54$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Khi $x \\to 0$, phát biểu nào sau đây về các vô cùng bé là đúng?",
   "options": [
    "$1 - \\cos x$ là vô cùng bé bậc cao hơn $x$.",
    "$\\sin x$ là vô cùng bé bậc cao hơn $x$.",
    "$\\ln(1 + x) \\sim x^2$.",
    "$e^x - 1 \\sim \\dfrac{x^2}{2}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $1 - \\cos x$ là vô cùng bé bậc cao hơn $x$. $\\dfrac{1 - \\cos x}{x} \\sim \\dfrac{x}{2} \\to 0$.<br><b>Sai:</b> $\\sin x$ là vô cùng bé bậc cao hơn $x$. $\\dfrac{\\sin x}{x} \\to 1$ nên $\\sin x$ và $x$ tương đương (cùng bậc).<br><b>Sai:</b> $\\ln(1 + x) \\sim x^2$. $\\ln(1 + x) \\sim x$.<br><b>Sai:</b> $e^x - 1 \\sim \\dfrac{x^2}{2}$. $e^x - 1 \\sim x$; chính $e^x - 1 - x$ mới tương đương $\\dfrac{x^2}{2}$."
  },
  {
   "q": "Hệ số của $x^{5}$ trong khai triển Maclaurin của hàm số $f(x) = e^{-2x^2}\\sin x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$\\dfrac{281}{120}$.",
    "$0$.",
    "$281$.",
    "$- \\dfrac{281}{120}$."
   ],
   "answer": 0,
   "explain": "$e^{- 2 x^{2}} = 1 - 2x^{2} + 2x^{4} + o(x^{5})$<br>$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + \\dfrac{1}{120}x^{5} + o(x^{5})$<br>Nhân lại, gom theo bậc: $f(x) = x - \\dfrac{13}{6}x^{3} + \\dfrac{281}{120}x^{5} + o(x^{5})$<br>Hệ số của $x^{5}$: $\\dfrac{281}{120}$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho mặt cong $z = x^{2} + x y$. Mặt phẳng tiếp xúc với mặt cong tại điểm $M(-1;-1;2)$ có phương trình $z = z_0 + f'_x(M)(x - x_0) + f'_y(M)(y - y_0)$. Mặt phẳng này cắt trục $Oz$ tại điểm có cao độ bằng",
   "options": [
    "$-2$.",
    "$2$.",
    "$6$.",
    "$-4$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x + y \\to -3,\\quad f'_y = x \\to -1$ tại $(-1;-1)$<br>Mặt phẳng tiếp xúc: $z = 2 + (-3)(x + 1) + (-1)(y + 1)$<br>Cho $x = y = 0$: $z = -2$",
   "note": "Mặt phẳng tiếp xúc dùng giá trị các đạo hàm riêng tại tiếp điểm; cho $x = y = 0$ để tìm giao điểm với trục $Oz$."
  },
  {
   "q": "Người ta tính công suất $P = \\dfrac{U^2}{R}$ của một điện trở từ hai đại lượng đo được. Biết hiệu điện thế $U$ được đo với sai số tương đối không quá 1% và điện trở $R$ với sai số tương đối không quá 2%. Dùng vi phân toàn phần của $\\ln P$, sai số tương đối lớn nhất của $P$ xấp xỉ bằng",
   "options": [
    "4%.",
    "3%.",
    "0%.",
    "2%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln P = \\pm2\\ln u \\pm 1\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta P}{P} \\le 2\\cdot\\dfrac{\\Delta u}{u} + 1\\cdot\\dfrac{\\Delta v}{v}$<br>$= 2\\cdot1\\% + 1\\cdot2\\% = 4\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị lớn nhất của hàm số $f(x,y) = 6 x + 8 y$ với điều kiện $x^2 + y^2 = 4$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$20$.",
    "$10$.",
    "$28$.",
    "$40$."
   ],
   "answer": 0,
   "explain": "$L = 6 x + 8 y - \\lambda(x^2 + y^2 - 4)$<br>$L'_x = 6 - 2\\lambda x = 0,\\quad L'_y = 8 - 2\\lambda y = 0 \\Rightarrow x = \\dfrac{6}{2\\lambda},\\ y = \\dfrac{8}{2\\lambda}$<br>Thay vào ràng buộc: $\\dfrac{100}{4\\lambda^2} = 4 \\Rightarrow \\lambda = \\pm\\dfrac{5}{2}$<br>$\\lambda > 0$: $(x;y) = \\left(\\dfrac{6}{5};\\dfrac{8}{5}\\right)$, $f_{\\max} = 20$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho $c$ là số nguyên dương. Giá trị lớn nhất của $c$ để chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(2n)!\\,c^n}{(n!)^2\\cdot20^n}$ hội tụ là",
   "options": [
    "$4$.",
    "$5$.",
    "$3$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{u_{n+1}}{u_n} = \\dfrac{c(2n+1)(2n+2)}{20(n+1)^2} \\to \\dfrac{c}{5}$<br>Hội tụ khi $c < 5$; với $c = 5$ có $\\dfrac{u_{n+1}}{u_n} = \\dfrac{2n+1}{2n+2}$ và $u_n \\sim \\dfrac{1}{\\sqrt{\\pi n}}$ nên chuỗi phân kỳ<br>Giá trị nguyên dương lớn nhất: $4$",
   "note": "Khi tỉ số D’Alembert bằng đúng 1 thì tiêu chuẩn không kết luận được: phải xét riêng giá trị biên của $c$."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{2^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\sin\\dfrac1n$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt[3]{n}}$. Có bao nhiêu chuỗi bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối) trong bốn chuỗi trên?",
   "options": [
    "$2$.",
    "$4$.",
    "$0$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $|u_n| \\sim \\frac{1}{2n^2}$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 2: $\\frac{|u_{n+1}|}{|u_n|} \\to \\frac12 < 1$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 3: $\\sin\\frac1n \\downarrow 0$ (Leibniz), $\\sin\\frac1n \\sim \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 4: $\\frac{1}{\\sqrt[3]{n}} \\downarrow 0$ (Leibniz), $\\sum\\frac{1}{n^{1/3}}$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Số chuỗi bán hội tụ: $2$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân có biến số phân ly?",
   "options": [
    "$y' = (1 + x)(1 + y^2)$.",
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$.",
    "$y' + y\\tan x = \\cos x$.",
    "$y' = \\dfrac{x + y}{x - y}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = (1 + x)(1 + y^2)$ — Viết được dưới dạng $g(y)\\,dy = h(x)\\,dx$<br><b>Sai:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi<br><b>Sai:</b> $y' + y\\tan x = \\cos x$ — là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = \\dfrac{x + y}{x - y}$ — là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình đẳng cấp $y' = \\dfrac{y}{x} + \\dfrac{y^2}{x^2}$ $(x > 0)$ thỏa mãn $y(1) = 1$. Bằng phép đặt $y = ux$, giá trị của $y\\left(\\sqrt{e}\\right)$ bằng",
   "options": [
    "$2\\sqrt{e}$.",
    "$\\sqrt{e}$.",
    "$4\\sqrt{e}$.",
    "$\\dfrac{\\sqrt{e}}{2}$."
   ],
   "answer": 0,
   "explain": "$y = ux \\Rightarrow y' = u'x + u$; thay vào: $u'x = u^2$<br>$\\dfrac{du}{u^2} = \\dfrac{dx}{x} \\Rightarrow -\\dfrac1u = \\ln x + C$<br>$y(1) = 1 \\Rightarrow u(1) = 1 \\Rightarrow C = -1 \\Rightarrow y = \\dfrac{x}{1 - \\ln x}$<br>$y\\left(\\sqrt{e}\\right) = 2\\sqrt{e}$",
   "note": "Phương trình đẳng cấp: đặt $y = ux$ thì $y' = u'x + u$; giải xong nhớ đổi lại $u = \\dfrac{y}{x}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 4500 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{4}$ và $P(0) = 1500$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số cá trong hồ sau 4 tháng bằng",
   "options": [
    "$2250$.",
    "$3000$.",
    "$1500$.",
    "$2251$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{4500}{1 + A} = 1500 \\Rightarrow A = 2$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{4}\\cdot4} = 2^{-1} = \\dfrac{1}{2}$<br>$P(4) = \\dfrac{4500}{1 + \\frac{2}{2}} = 2250$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $y'' - y = e^{2x}\\sin x$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?",
   "options": [
    "$y^* = e^{2x}(A\\cos x + B\\sin x)$.",
    "$y^* = xe^{2x}(A\\cos x + B\\sin x)$.",
    "$y^* = Ae^{2x}\\sin x$.",
    "$y^* = Ae^{2x}\\cos x$."
   ],
   "answer": 0,
   "explain": "$2 \\pm i$ không là nghiệm của phương trình đặc trưng ($k = \\pm1$) nên không nhân thêm $x$; phải có cả $\\cos x$ và $\\sin x$<br>Dạng cần tìm: $y^* = e^{2x}(A\\cos x + B\\sin x)$",
   "note": "Bội của số mũ (hoặc của $\\alpha \\pm i\\beta$) trong phương trình đặc trưng quyết định nhân thêm $1$, $x$ hay $x^2$."
  },
  {
   "q": "Tích phân $I = \\displaystyle\\int_{0}^{1} dy\\int_{\\sqrt{y}}^{1} \\sqrt{1 + x^3}\\,dx$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
   "options": [
    "$- \\dfrac{2}{9} + \\dfrac{4 \\sqrt{2}}{9}$.",
    "$- \\dfrac{4}{9} + \\dfrac{8 \\sqrt{2}}{9}$.",
    "$- \\dfrac{1}{9} + \\dfrac{2 \\sqrt{2}}{9}$.",
    "$\\dfrac{4 \\sqrt{2}}{9} + \\dfrac{7}{9}$."
   ],
   "answer": 0,
   "explain": "Đổi thứ tự lấy tích phân; tích phân trong tính được ngay, còn lại: $I = \\displaystyle\\int_{0}^{1} x^{2} \\sqrt{x^{3} + 1}\\,dx$<br>$= \\left[\\dfrac{2 x^{3} \\sqrt{x^{3} + 1}}{9} + \\dfrac{2 \\sqrt{x^{3} + 1}}{9}\\right]_{0}^{1} = - \\dfrac{2}{9} + \\dfrac{4 \\sqrt{2}}{9}$",
   "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{3(x^2 + y^2)}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{6},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$\\dfrac{\\pi \\left(2 - \\sqrt{3}\\right)}{3}$.",
    "$\\dfrac{\\pi^{2}}{9}$.",
    "$\\dfrac{4 \\pi}{3}$.",
    "$\\dfrac{\\pi \\left(2 - \\sqrt{3}\\right)}{6}$."
   ],
   "answer": 0,
   "explain": "$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot\\left(1 - \\cos\\dfrac{\\pi}{6}\\right)\\cdot\\dfrac{1}{3} = \\dfrac{\\pi \\left(2 - \\sqrt{3}\\right)}{3}$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1200 khách, tổng số không đổi. Mỗi tháng có 40% khách quen của X chuyển sang Y và 10% khách quen của Y chuyển sang X. Hiện tại X có 400 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$240$.",
    "$960$.",
    "$600$.",
    "$320$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 10\\%\\cdot(1200 - x)$<br>$50x = 12000 \\Rightarrow x = 240$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;2;-1;0),\\ u_2(3;3;1;1),\\ u_3(2;1;2;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne 1$.",
    "$m = 1$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 2$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $-1$ lần hàng 1 cộng $1$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = 1$; ngược lại hạng bằng 3.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}1 & 1 \\\\ -3 & -2\\end{pmatrix}$, $B = \\begin{pmatrix}1 & -1 \\\\ -1 & 2\\end{pmatrix}$ và $C = \\begin{pmatrix}-2 & 3 \\\\ 2 & -2\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X.B = C$ là",
   "options": [
    "$\\begin{pmatrix}0 & -2 \\\\ -1 & 3\\end{pmatrix}$.",
    "$\\begin{pmatrix}16 & 6 \\\\ 3 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}6 & -10 \\\\ -11 & 18\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & -1 \\\\ -2 & 3\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$X = A^{-1}CB^{-1}$; kết quả $X = \\begin{pmatrix}0 & -2 \\\\ -1 & 3\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 3y = 0\\\\ -2x + my + z = 0\\\\ 2x - 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$8$.",
    "$-6$.",
    "$20$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 6 m + 8 = \\left(m + 2\\right) \\left(m + 4\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -4$ hoặc $m = -2$<br>Giá trị cần tìm: $8$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\sin 2x - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b - 6L$ bằng",
   "options": [
    "$10$.",
    "$\\dfrac{2}{3}$.",
    "$2$.",
    "$\\dfrac{34}{3}$."
   ],
   "answer": 0,
   "explain": "$\\sin u = u - \\dfrac{u^3}{6} + o(u^3)$, $u = 2x$<br>Tử số $= (2 - a)x + (0 - b)x^2 - \\dfrac{4}{3}x^3 + o(x^3)$<br>Giới hạn hữu hạn $\\Leftrightarrow a = 2,\\ b = 0$; khi đó $L = - \\dfrac{4}{3}$<br>Giá trị cần tính: $10$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{-2x} & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$5$.",
    "$2$.",
    "$-1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = e^{- 2 x}$: $g(0) = 1,\\ g'(0) = -2,\\ g''(0) = 4$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 1,\\ b = -2,\\ 2a = 4 \\Rightarrow a = 2$<br>$a - b + d = 5$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Một đoạn đường ống uốn theo đường cong $y = \\dfrac23x^{3/2}$ với $0 \\le x \\le 3$ (đơn vị: mét). Dùng công thức độ dài cung $L = \\displaystyle\\int_a^b\\sqrt{1 + (y')^2}\\,dx$, độ dài đoạn ống bằng",
   "options": [
    "$\\dfrac{14}{3}$ m.",
    "$\\dfrac{16}{3}$ m.",
    "$3$ m.",
    "$\\dfrac{7}{3}$ m."
   ],
   "answer": 0,
   "explain": "$y' = \\sqrt{x} \\Rightarrow 1 + (y')^2 = 1 + x$<br>$L = \\displaystyle\\int_0^{3}\\sqrt{1 + x}\\,dx = \\left[\\dfrac23(1 + x)^{3/2}\\right]_0^{3}$<br>$= \\dfrac23\\left(4^{3/2} - 1\\right) = \\dfrac{14}{3}$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 40 + 0{,}8(Y - T)$; $T = 0{,}5Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 150$ và chi tiêu chính phủ $G_0 = 140$. Giá trị của mức tiêu dùng $C^*$ tại trạng thái cân bằng bằng",
   "options": [
    "$260$.",
    "$550$.",
    "$275$.",
    "$330$."
   ],
   "answer": 0,
   "explain": "Thế $T$ vào $C$ rồi vào phương trình đầu: $Y^* = 550,\\ T^* = 275,\\ C^* = 260$<br>Kết quả: $260$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{5^n}$ bằng<span class=\"q-hint\">Gợi ý: $\\displaystyle\\sum_{n=1}^{+\\infty} nx^n = \\dfrac{x}{(1-x)^2}$ với $|x| < 1$.</span>",
   "options": [
    "$\\dfrac{5}{16}$.",
    "$\\dfrac{1}{4}$.",
    "$\\dfrac{25}{16}$.",
    "$\\dfrac{1}{16}$."
   ],
   "answer": 0,
   "explain": "$x = \\dfrac{1}{5}$: $\\dfrac{x}{(1-x)^2} = \\dfrac{\\frac{1}{5}}{\\left(\\frac{4}{5}\\right)^2} = \\dfrac{5}{16}$<br>Kết quả: $\\dfrac{5}{16}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Một quả bóng được thả rơi từ độ cao 12 mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\\dfrac{3}{4}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng",
   "options": [
    "$84$.",
    "$48$.",
    "$96$.",
    "$36$."
   ],
   "answer": 0,
   "explain": "$12 + 2\\displaystyle\\sum_{n=1}^{+\\infty}12\\left(\\dfrac{3}{4}\\right)^n = 12 + 2\\cdot\\dfrac{12\\cdot\\frac{3}{4}}{1 - \\frac{3}{4}} = 84$<br>Kết quả: $84$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{n+1}{n!}$ bằng",
   "options": [
    "$2 e$.",
    "$e$.",
    "$1 + e$.",
    "$3 e$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum\\dfrac{n}{n!} + \\sum\\dfrac{1}{n!} = e + e$<br>Vậy tổng của chuỗi bằng $2 e$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = \\dfrac{1 + y^2}{1 + x^2}$ thỏa mãn $y(0) = 1$. Giá trị của $y\\left(\\dfrac12\\right)$ bằng",
   "options": [
    "$3$.",
    "$1$.",
    "$4$.",
    "$\\dfrac{3}{2}$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{1+y^2} = \\dfrac{dx}{1+x^2} \\Rightarrow \\arctan y = \\arctan x + C$<br>$y(0) = 1 \\Rightarrow y = \\dfrac{x + 1}{1 - x}$<br>$y\\left(\\dfrac12\\right) = 3$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + 2y = 3e^{-2x}$ thỏa mãn $y(0) = 3$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{6}{e^{2}}$.",
    "$\\dfrac{3}{e^{2}}$.",
    "$6 e^{2}$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{2x}$: $\\left(ye^{2x}\\right)' = 3$<br>$ye^{2x} = 3x + C \\Rightarrow y = (3x + C)e^{-2x}$<br>$y(0) = C = 3 \\Rightarrow y(1) = (3 + 3)e^{-2} = \\dfrac{6}{e^{2}}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Chất phóng xạ cacbon $^{14}C$ có chu kỳ bán rã 5730 năm và phân rã với tốc độ tỉ lệ với lượng hiện có, tức $m' = -km$ với $k = \\dfrac{\\ln 2}{5730}$. Thời gian (năm) để một mẫu chất này còn lại 90% khối lượng ban đầu (làm tròn đến hàng phần chục) là",
   "options": [
    "871,0.",
    "573,0.",
    "1146,0.",
    "5157,0."
   ],
   "answer": 0,
   "explain": "$m' = -km \\Rightarrow m(t) = m_0e^{-kt} = m_0\\cdot2^{-t/5730}$<br>$2^{-t/5730} = \\dfrac{90}{100} \\Rightarrow \\dfrac{t}{5730} = \\log_2\\dfrac{100}{90}$<br>$t = 5730\\cdot\\dfrac{\\ln(100/90)}{\\ln 2} \\approx 871{,}0$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 1,\\ y \\ge \\sqrt{3}\\,|x|\\}$. Giá trị của tích phân $\\displaystyle\\iint_D y\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{1}{3}$.",
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{2}{3}$.",
    "$\\dfrac{1}{6}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 1,\\ \\dfrac{\\pi}{3} \\le \\varphi \\le \\dfrac{2\\pi}{3}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{1}\\left(r \\sin\\varphi\\right)r\\,dr = \\int \\dfrac{\\sin\\varphi}{3}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{1}{3}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là phần của hình cầu $x^2 + y^2 + z^2 \\le 1$ nằm trong góc phần tám thứ nhất ($x \\ge 0,\\ y \\ge 0,\\ z \\ge 0$). Giá trị của tích phân $\\displaystyle\\iiint_V xyz\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{1}{48}$.",
    "$\\dfrac{1}{6}$.",
    "$\\dfrac{1}{24}$.",
    "$\\dfrac{1}{8}$."
   ],
   "answer": 0,
   "explain": "$xyz = \\rho^3\\sin^2\\theta\\cos\\theta\\sin\\varphi\\cos\\varphi$, $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$<br>$I = \\displaystyle\\int_0^{\\pi/2}\\sin\\varphi\\cos\\varphi\\,d\\varphi\\int_0^{\\pi/2}\\sin^3\\theta\\cos\\theta\\,d\\theta\\int_0^{1}\\rho^5\\,d\\rho$<br>$= \\dfrac12\\cdot\\dfrac14\\cdot\\dfrac{1}{6} = \\dfrac{1}{48}$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = 1$ với mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = x^2 + y^2 + 3$. Khối lượng của sợi dây, tức $\\displaystyle\\oint_L \\rho\\,ds$, bằng",
   "options": [
    "$8 \\pi$.",
    "$4 \\pi$.",
    "$6 \\pi$.",
    "$1 + 8 \\pi$."
   ],
   "answer": 0,
   "explain": "Trên $L$, $\\rho = 1 + 3$ là hằng số nên khối lượng bằng $(1 + 3)\\cdot2\\pi\\cdot1$<br>Kết quả: $8 \\pi$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 2 x y - y^{2} + 2)\\,dx + (mx^2 - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$-1$.",
    "$1$.",
    "$-2$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = - 2 x - 2 y,\\quad Q'_x = 2mx - 2 y$<br>Đồng nhất hệ số: $m = -1$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-3 & 1 \\\\ 5 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x - 2$. Kí hiệu $f(A) = A^2 - A - 2I$.",
   "questions": [
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
     "options": [
      "$23$.",
      "$25$.",
      "$-10$.",
      "$-7$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}14 & -5 \\\\ -25 & 9\\end{pmatrix}$<br>Vết của $A^2$: $23$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
     "options": [
      "$-12$.",
      "$-8$.",
      "$-14$.",
      "$24$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}14 & -5 \\\\ -25 & 9\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}15 & -6 \\\\ -30 & 9\\end{pmatrix}$<br>Tổng các phần tử: $-12$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
     "options": [
      "$-11$.",
      "$1$.",
      "$11$.",
      "$-10$."
     ],
     "answer": 0,
     "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}-2 & -1 \\\\ -5 & -3\\end{pmatrix}$<br>Tổng các phần tử: $-11$",
     "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 6 x + y^{2} - 8 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 225\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 225$.",
   "questions": [
    {
     "q": "Giá trị nhỏ nhất của $f$ trên $D$ bằng",
     "options": [
      "$-25$.",
      "$75$.",
      "$0$.",
      "$25$."
     ],
     "answer": 0,
     "explain": "Điểm dừng $(3;4)$ nằm trong $D$ và $f = (x - 3)^2 + (y - 4)^2 - 25$<br>Kết quả: $-25$"
    },
    {
     "q": "Giá trị lớn nhất của $f$ trên $D$ bằng",
     "options": [
      "$375$.",
      "$225$.",
      "$75$.",
      "$435$."
     ],
     "answer": 0,
     "explain": "Trên biên $f = 225 - 2(3 x + 4 y)$, lớn nhất khi $3 x + 4 y$ nhỏ nhất, tức bằng $-15\\cdot5$<br>Kết quả: $375$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-9$.",
      "$9$.",
      "$3$.",
      "$-12$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(3;4)$: $\\left(-9;-12\\right)$<br>Kết quả: $-9$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-2 & 3 & -2 \\\\ 3 & 0 & 2 \\\\ 0 & 1 & 2\\end{pmatrix}$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\\det\\left(A + A^T\\right)$.",
   "answer": [
    "-180"
   ],
   "explain": "$A + A^T = \\begin{pmatrix}-4 & 6 & -2 \\\\ 6 & 0 & 3 \\\\ -2 & 3 & 4\\end{pmatrix}$<br>$\\det\\left(A + A^T\\right) = -180$",
   "note": "$A + A^T$ đối xứng; $A - A^T$ phản đối xứng, và ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0."
  },
  {
   "q": "Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $x + 2 y + 2 z = 27$.",
   "answer": [
    "81"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(1;2;2)$ với $t = \\dfrac{27}{9}$; $f_{\\min} = \\dfrac{27^2}{9} = 81$<br>Đáp số: $81$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(x - 1)^{2n}}{n\\cdot9^n}$?<span class=\"q-hint\">Chú ý: xét riêng hai đầu mút của khoảng hội tụ.</span>",
   "answer": [
    "5"
   ],
   "explain": "Hội tụ khi $(x - 1)^2 < 9$; tại hai đầu mút chuỗi trở thành $\\sum\\dfrac1n$ phân kỳ, nên miền hội tụ là khoảng $(-2;4)$<br>Đáp số: $5$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = -3e^{x}$ với điều kiện $y(0) = 0;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "8"
   ],
   "explain": "$k = 1$ là nghiệm đơn của phương trình đặc trưng nên $y^* = 3xe^{x}$; $y = 3xe^{x}$; $y(1) \\approx 8{,}15$<br>Đáp số: $8$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt paraboloid $z = 20 - x^2 - y^2$. Biết thể tích của $V$ bằng $k\\pi$, tính $3k$.",
   "answer": [
    "448"
   ],
   "explain": "Hai mặt cắt nhau khi $r = 20 - r^2$, tức $r = 4$: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{4}(20 - r^2 - r)\\,r\\,dr = \\dfrac{448}{3}\\pi$<br>Đáp số: $448$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
