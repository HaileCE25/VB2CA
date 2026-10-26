// ĐỀ SỐ 15 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-15",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 15",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản lĩnh và phẩm chất chính trị",
  "prompt": "Một chiến sĩ trẻ mới về công tác được người thân nhờ “xem giúp” địa chỉ và số điện thoại của một người trong cơ sở dữ liệu của đơn vị, với lời thuyết phục: “Có mất gì đâu, chỉ là việc nhỏ, không ai biết.” Anh từ chối và bị trách là “cứng nhắc, không biết giúp người nhà”.",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về lựa chọn của người chiến sĩ và về ý nghĩa của sự liêm chính, kỷ luật trong những “việc nhỏ”.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (4;m;-1)$ và $v = (m;-1;3)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
   "options": [
    "$29$.",
    "$13$.",
    "$31$.",
    "$27$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = (4)\\cdot m + m\\cdot(-1) + (-1)\\cdot(3) = 3 m - 3$<br>$u \\perp v \\Leftrightarrow 3 m - 3 = 0 \\Leftrightarrow m = 1$<br>$u + v = (5;0;2)$<br>$|u + v|^2 = (5)^2 + (0)^2 + (2)^2 = 29$",
   "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(0;-4),\\ u_2(3;0),\\ u_3(0;-1),\\ u_4(0;-2),\\ u_5(0;1)\\}$. Có bao nhiêu hệ con gồm đúng 2 véc tơ của $S$ là cơ sở của $\\mathbb{R}^2$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$4$.",
    "$10$.",
    "$5$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Có $C_5^2 = 10$ hệ con gồm 2 véc tơ, trong đó 6 hệ phụ thuộc tuyến tính<br>Kết quả: $4$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & -7 & 0 & 0 & 0 \\\\ 1 & 3 & -2 & -2 & 0 \\\\ 2 & -2 & -1 & -1 & 0 \\\\ 1 & -5 & 1 & 1 & 0\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$3$.",
    "$2$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng: $A \\to \\begin{pmatrix}3 & -7 & 0 & 0 & 0 \\\\ 0 & 16 & -6 & -6 & 0 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}A = 2$<br>Số chiều không gian nghiệm $= 5 - 2 = 3$",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-2 & 3 \\\\ 1 & 1\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = -A + 5I$. Phần tử thuộc hàng 2 và cột 1 của ma trận $A^{3}$ bằng",
   "options": [
    "$6$.",
    "$18$.",
    "$-1$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}7 & -3 \\\\ -1 & 4\\end{pmatrix}$<br>$A^3 = A^2\\cdot A = \\begin{pmatrix}-17 & 18 \\\\ 6 & 1\\end{pmatrix}$<br>Phần tử hàng 2, cột 1 của $A^{3}$: $6$",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & 3 & -1 \\\\ -1 & 1 & 2 \\\\ 0 & -2 & -1\\end{pmatrix}$. Biết $A^{-1} = \\dfrac{1}{\\det A}\\left(A_{ji}\\right)$, trong đó $A_{ji}$ là phần bù đại số của phần tử $a_{ji}$ (chú ý thứ tự chỉ số). Phần tử thuộc hàng 3 và cột 1 của ma trận $A^{-1}$ bằng",
   "options": [
    "$2$.",
    "$7$.",
    "$-2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$\\det A = 1$<br>$A_{13} = (-1)^{1+3}M_{13} = 2$<br>$\\left(A^{-1}\\right)_{31} = \\dfrac{A_{13}}{\\det A} = \\dfrac{2}{1} = 2$",
   "note": "Phần tử hàng $i$, cột $j$ của $A^{-1}$ là $\\dfrac{A_{ji}}{\\det A}$: chỉ số bị đảo, và nhớ dấu $(-1)^{i+j}$."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp $n \\ge 2$ thỏa mãn $AB = 0$ và $A$ khả nghịch. Phát biểu nào sau đây là đúng?",
   "options": [
    "$B$ là ma trận không.",
    "$A$ là ma trận không.",
    "$\\det B \\ne 0$.",
    "$BA \\ne 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $B$ là ma trận không. Nhân $A^{-1}$ vào bên trái: $B = A^{-1}(AB) = 0$.<br><b>Sai:</b> $A$ là ma trận không. $A$ khả nghịch nên $\\det A \\ne 0$, không thể là ma trận không.<br><b>Sai:</b> $\\det B \\ne 0$. $B = 0$ nên $\\det B = 0$.<br><b>Sai:</b> $BA \\ne 0$. $B = 0$ nên $BA = 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}4 & 1 & 1 & 1 \\\\ 1 & 4 & 1 & 1 \\\\ 1 & 1 & 4 & 1 \\\\ 1 & 1 & 1 & 4\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$189$.",
    "$81$.",
    "$21$.",
    "$255$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1 + h_2 + h_3 + h_4$: hàng 1 trở thành $(7;7;7;7)$, rút $7$ ra ngoài định thức<br>$h_i \\to h_i - (1)h_1\\ (i = 2,3,4)$: được ma trận tam giác có đường chéo $1;\\ 3;\\ 3;\\ 3$<br>$\\det A = (7)\\cdot(3)^3 = 189$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 2x - 2x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$16$.",
    "$8$.",
    "$4$.",
    "$-16$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 2x$: $\\tan u = u + \\dfrac{u^3}{3} + o(u^3) \\Rightarrow \\tan u - u = \\dfrac{8x^3}{3} + o(x^3)$<br>$\\sin x = x - \\dfrac{x^3}{6} + o(x^3) \\Rightarrow x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{8/3}{1/6} = 16$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{3 x - 12}{x^{2} + x - 6}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$y = \\dfrac{3 \\left(x - 4\\right)}{\\left(x - 2\\right) \\left(x + 3\\right)}$<br>Có hai tiệm cận đứng $x = 2,\\ x = -3$, tiệm cận ngang $y = 0$<br>Tổng cộng: $3$ đường tiệm cận",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Cho hàm số $f$ liên tục trên $[a;b]$ và có đạo hàm trên $(a;b)$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Tồn tại $c \\in (a;b)$ sao cho $f(b) - f(a) = f'(c)(b - a)$.",
    "Tồn tại $c \\in (a;b)$ sao cho $f'(c) = 0$.",
    "Đạo hàm $f'$ liên tục trên $(a;b)$.",
    "$f(b) - f(a) = f'(a)(b - a)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Tồn tại $c \\in (a;b)$ sao cho $f(b) - f(a) = f'(c)(b - a)$. Đây là định lí Lagrange (định lí giá trị trung bình).<br><b>Sai:</b> Tồn tại $c \\in (a;b)$ sao cho $f'(c) = 0$. Chỉ đúng khi có thêm $f(a) = f(b)$ (định lí Rolle); $f(x) = x$ có $f' = 1$ khắp nơi.<br><b>Sai:</b> Đạo hàm $f'$ liên tục trên $(a;b)$. $f(x) = x^2\\sin\\dfrac1x$ (với $f(0) = 0$) có đạo hàm tại mọi điểm nhưng $f'$ gián đoạn tại $0$.<br><b>Sai:</b> $f(b) - f(a) = f'(a)(b - a)$. $f(x) = x^2$ trên $[0;1]$: vế trái bằng $1$, vế phải bằng $0$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} y^{2} - x$. Đạo hàm của $f$ tại điểm $M(2;1)$ theo hướng của véc tơ $\\vec l = (4;3)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{36}{5}$.",
    "$36$.",
    "$\\dfrac{41}{5}$.",
    "$11$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x y^{2} - 1,\\quad f'_y = 2 x^{2} y$<br>$\\nabla f(M) = (3;8)$<br>$|\\vec l| = \\sqrt{(4)^2 + (3)^2} = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(3)\\cdot(4) + (8)\\cdot(3)}{5} = \\dfrac{36}{5}$",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Người ta tính chu kỳ $T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ của con lắc đơn từ hai đại lượng đo được. Biết chiều dài $l$ được đo với sai số tương đối không quá 0,5% và gia tốc trọng trường $g$ với sai số tương đối không quá 0,5%. Dùng vi phân toàn phần của $\\ln T$, sai số tương đối lớn nhất của $T$ xấp xỉ bằng",
   "options": [
    "0,5%.",
    "1%.",
    "0%.",
    "0,06%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln T = \\pm\\dfrac{1}{2}\\ln u \\pm \\dfrac{1}{2}\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta T}{T} \\le \\dfrac{1}{2}\\cdot\\dfrac{\\Delta u}{u} + \\dfrac{1}{2}\\cdot\\dfrac{\\Delta v}{v}$<br>$= \\dfrac{1}{2}\\cdot0{,}5\\% + \\dfrac{1}{2}\\cdot0{,}5\\% = 0{,}5\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $x + y = 4$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$8$.",
    "$4$.",
    "$16$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$L = x^2 + y^2 - \\lambda(x + y - 4)$<br>$L'_x = 2x - \\lambda = 0,\\quad L'_y = 2y - \\lambda = 0 \\Rightarrow x = \\dfrac{\\lambda}{2},\\ y = \\dfrac{\\lambda}{2}$<br>Thay vào ràng buộc: $\\lambda = 4 \\Rightarrow \\lambda = 4$<br>$(x;y) = \\left(2;2\\right)$, $f_{\\min} = 8$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\sqrt[n]{n}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{5^n}{n\\cdot 4^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+2}{2n^2+1}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{3^n}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\sqrt[n]{n} \\to 1 \\Rightarrow u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 2: $u_n = \\dfrac1n\\left(\\dfrac54\\right)^n \\not\\to 0$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 3: $u_n \\sim \\dfrac{1}{2n}$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 4: $\\dfrac{u_{n+1}}{u_n} \\to \\dfrac13 < 1$ $\\Rightarrow$ hội tụ<br>Số chuỗi hội tụ: $1$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{2^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt{n+1}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n\\sqrt n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$. Có bao nhiêu chuỗi bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối) trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$4$.",
    "$3$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\frac{|u_{n+1}|}{|u_n|} \\to \\frac12 < 1$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 2: $\\frac{1}{\\sqrt{n+1}} \\downarrow 0$ (Leibniz), $\\sum\\frac{1}{\\sqrt{n+1}}$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 3: $\\sum\\frac{1}{n^{3/2}}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 4: $|u_n| \\sim \\frac{1}{2n^2}$ $\\Rightarrow$ hội tụ tuyệt đối<br>Số chuỗi bán hội tụ: $1$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
   "options": [
    "$xy' - 2y = x^3$.",
    "$y' = \\dfrac{x + y}{x - y}$.",
    "$y' = (1 + x)(1 + y^2)$.",
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $xy' - 2y = x^3$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$<br><b>Sai:</b> $y' = \\dfrac{x + y}{x - y}$ — là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = (1 + x)(1 + y^2)$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi<br><b>Sai:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = 3xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{7}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{8}$.",
    "$\\dfrac{1}{14}$.",
    "$\\dfrac{1}{4}$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Đặt $z = \\dfrac1y \\Rightarrow z' = -\\dfrac{y'}{y^2}$; chia phương trình cho $-y^2$:<br>$z' - \\dfrac{z}{x} = - 3 x$<br>$\\left(\\dfrac{z}{x}\\right)' = -3 \\Rightarrow z = x(C - 3 x)$<br>$y(1) = \\dfrac{1}{C - 3} = \\dfrac{1}{7} \\Rightarrow C = 10$<br>$y(2) = \\dfrac{1}{2(10 - 6)} = \\dfrac{1}{8}$",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một ứng dụng mới được giới thiệu cho 4500 học viên của một trường. Số người đã cài đặt $P(t)$ sau $t$ tuần thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{4}$ và $P(0) = 500$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số người đã cài đặt sau 8 tuần bằng",
   "options": [
    "$1500$.",
    "$2000$.",
    "$2250$.",
    "$900$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{4500}{1 + A} = 500 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{4}\\cdot8} = 2^{-2} = \\dfrac{1}{4}$<br>$P(8) = \\dfrac{4500}{1 + \\frac{8}{4}} = 1500$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 12\\cos x$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
   "options": [
    "$3 + 3 \\pi$.",
    "$3$.",
    "$3 \\pi$.",
    "$3 - 3 \\pi$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $12\\cos x$: $a = 0,\\ b = 6$<br>$y = C_1\\cos x + C_2\\sin x + 6x\\sin x$<br>$y(0) = C_1 = 2;\\quad y'(0) = C_{2} = 3 \\Rightarrow C_2 = 3$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 3 + 6\\cdot\\dfrac{\\pi}{2} = 3 + 3 \\pi$",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Tích phân $I = \\displaystyle\\int_{0}^{\\sqrt{\\pi}} dy\\int_{y}^{\\sqrt{\\pi}} \\sin(x^2)\\,dx$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
   "options": [
    "$1$.",
    "$2$.",
    "$\\dfrac{1}{2}$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "Đổi thứ tự lấy tích phân; tích phân trong tính được ngay, còn lại: $I = \\displaystyle\\int_{0}^{\\sqrt{\\pi}} x \\sin{\\left(x^{2} \\right)}\\,dx$<br>$= \\left[- \\dfrac{\\cos{\\left(x^{2} \\right)}}{2}\\right]_{0}^{\\sqrt{\\pi}} = 1$",
   "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{3},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$\\dfrac{\\pi}{3}$.",
    "$\\dfrac{2 \\pi^{2}}{9}$.",
    "$\\dfrac{4 \\pi}{3}$.",
    "$\\dfrac{\\pi}{6}$."
   ],
   "answer": 0,
   "explain": "$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot\\left(1 - \\cos\\dfrac{\\pi}{3}\\right)\\cdot\\dfrac{1}{3} = \\dfrac{\\pi}{3}$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 30% người dùng của X chuyển sang Y và 40% người dùng của Y chuyển sang X. Hiện tại X có 700 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$1200$.",
    "$900$.",
    "$1050$.",
    "$700$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 40\\%\\cdot(2100 - x)$<br>$70x = 84000 \\Rightarrow x = 1200$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 3 & -2 & 1 \\\\ 3 & -1 & 3 & -1 \\\\ 2 & -4 & 5 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = -2$.",
    "$m = -1$.",
    "$m = 2$.",
    "$m = -3$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $-1$ lần hàng 1 cộng $1$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = -2$; ngược lại hạng bằng 3<br>Kết quả: $m = -2$",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}1 & 2 \\\\ 2 & 5\\end{pmatrix}$ và $B = \\begin{pmatrix}1 & 1 \\\\ 1 & 3\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X = B$ là",
   "options": [
    "$\\begin{pmatrix}3 & -1 \\\\ -1 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}-3 & 1 \\\\ 1 & -1\\end{pmatrix}$.",
    "$\\begin{pmatrix}1 & -1 \\\\ -1 & 3\\end{pmatrix}$.",
    "$\\begin{pmatrix}4 & -1 \\\\ -1 & 2\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$X = A^{-1}B$; kết quả $X = \\begin{pmatrix}3 & -1 \\\\ -1 & 1\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b + 1)x - 4y = a^2\\\\ x + ay = 2\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
   "options": [
    "$(a;b) = (-2;1)$.",
    "$(a;b) = (2;1)$.",
    "$(a;b) = (-2;-1)$.",
    "$(a;b) = (2;-1)$."
   ],
   "answer": 0,
   "explain": "Vô số nghiệm $\\Leftrightarrow \\dfrac{b + 1}{1} = \\dfrac{-4}{a} = \\dfrac{a^2}{2}$<br>Với $(a;b) = (-2;1)$: $\\dfrac{2}{1} = 2;\\quad \\dfrac{-4}{-2} = 2;\\quad \\dfrac{4}{2} = 2$ (thỏa mãn)<br>Mỗi cặp còn lại làm ít nhất một tỉ số khác đi nên không cho vô số nghiệm",
   "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{e^{3x} - 1 - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + 2b + 6L$ bằng",
   "options": [
    "$39$.",
    "$12$.",
    "$3$.",
    "$\\dfrac{69}{2}$."
   ],
   "answer": 0,
   "explain": "$e^{u} = 1 + u + \\dfrac{u^2}{2} + \\dfrac{u^3}{6} + o(u^3)$, $u = 3x$<br>Tử số $= (3 - a)x + (\\dfrac{9}{2} - b)x^2 + \\dfrac{9}{2}x^3 + o(x^3)$<br>Giới hạn hữu hạn $\\Leftrightarrow a = 3,\\ b = \\dfrac{9}{2}$; khi đó $L = \\dfrac{9}{2}$<br>Giá trị cần tính: $39$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\ln(1 + 2x) & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ (xét trong lân cận của điểm $0$) có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$-4$.",
    "$-2$.",
    "$2$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = \\ln\\left(2 x + 1\\right)$: $g(0) = 0,\\ g'(0) = 2,\\ g''(0) = -4$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 0,\\ b = 2,\\ 2a = -4 \\Rightarrow a = -2$<br>$a - b + d = -4$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x(x + 2)}$ bằng",
   "options": [
    "$\\ln\\left(\\sqrt{3}\\right)$.",
    "$\\ln 3$.",
    "$\\ln 9$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{x(x + 2)} = \\dfrac{1}{2}\\left(\\dfrac1x - \\dfrac{1}{x + 2}\\right)$<br>$I = \\dfrac{1}{2}\\left[\\ln\\dfrac{x}{x + 2}\\right]_1^{+\\infty} = \\dfrac{1}{2}\\left(0 - \\ln\\dfrac{1}{3}\\right) = \\dfrac{\\ln 3}{2}$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 100 + 0{,}9(Y - T)$; $T = \\dfrac13Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 100$ và chi tiêu chính phủ $G_0 = 160$. Giá trị của số thuế $T^*$ tại trạng thái cân bằng bằng",
   "options": [
    "$300$.",
    "$900$.",
    "$640$.",
    "$360$."
   ],
   "answer": 0,
   "explain": "Thế $T$ vào $C$ rồi vào phương trình đầu: $Y^* = 900,\\ T^* = 300,\\ C^* = 640$<br>Kết quả: $300$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Bằng cách tách $\\dfrac{1}{n(n+4)} = \\dfrac{1}{4}\\left(\\dfrac1n - \\dfrac{1}{n+4}\\right)$, tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n(n+4)}$ bằng",
   "options": [
    "$\\dfrac{25}{48}$.",
    "$\\dfrac{1}{4}$.",
    "$\\dfrac{25}{12}$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$S_N = \\dfrac{1}{4}\\displaystyle\\sum_{n=1}^{N}\\left(\\dfrac1n - \\dfrac{1}{n+4}\\right) = \\dfrac{1}{4}\\left(1 + \\dfrac12 + \\dfrac13 + \\dfrac14 - \\sum_{n=N+1}^{N+4}\\dfrac1n\\right)$<br>$N \\to +\\infty$: $S = \\dfrac{1}{4}\\cdot\\dfrac{25}{12} = \\dfrac{25}{48}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Một quả bóng được thả rơi từ độ cao 6 mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\\dfrac{3}{5}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng",
   "options": [
    "$24$.",
    "$15$.",
    "$30$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "$6 + 2\\displaystyle\\sum_{n=1}^{+\\infty}6\\left(\\dfrac{3}{5}\\right)^n = 6 + 2\\cdot\\dfrac{6\\cdot\\frac{3}{5}}{1 - \\frac{3}{5}} = 24$<br>Kết quả: $24$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{(-1)^n}{(2n+1)!}$ bằng",
   "options": [
    "$\\sin{\\left(1 \\right)}$.",
    "$\\cos{\\left(1 \\right)}$.",
    "$e$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}\\dfrac{(-1)^nx^{2n+1}}{(2n+1)!} = \\sin x$ tại $x = 1$<br>Vậy tổng của chuỗi bằng $\\sin{\\left(1 \\right)}$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $yy' = x$ thỏa mãn $y(0) = 3$. Giá trị của $y\\left(4\\right)$ bằng",
   "options": [
    "$5$.",
    "$3$.",
    "$6$.",
    "$\\dfrac{5}{2}$."
   ],
   "answer": 0,
   "explain": "Tách biến: $y\\,dy = x\\,dx \\Rightarrow \\dfrac{y^2}{2} = \\dfrac{x^2}{2} + C$<br>$y(0) = 3 \\Rightarrow y = \\sqrt{x^{2} + 9}$<br>$y\\left(4\\right) = 5$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + y = 2e^{-x}$ thỏa mãn $y(0) = 2$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{4}{e}$.",
    "$\\dfrac{2}{e}$.",
    "$4 e$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{x}$: $\\left(ye^{x}\\right)' = 2$<br>$ye^{x} = 2x + C \\Rightarrow y = (2x + C)e^{-x}$<br>$y(0) = C = 2 \\Rightarrow y(1) = (2 + 2)e^{-1} = \\dfrac{4}{e}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bể có 1000 lít nước muối với nồng độ muối là 0,03 kg/lít. Người ta bơm nước muối với nồng độ 0,01 kg/lít vào bể với tốc độ 20 lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau 50 phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "17,4.",
    "11,0.",
    "10,0.",
    "7,4."
   ],
   "answer": 0,
   "explain": "Gọi $S(t)$ là lượng muối (kg): $S' = 0{,}01\\cdot20 - \\dfrac{S}{1000}\\cdot20 = 0{,}2 - \\dfrac{20S}{1000},\\quad S(0) = 30$<br>Nghiệm: $S(t) = 10 + Ce^{-20t/1000}$; $S(0) = 30 \\Rightarrow C = 20$<br>$S(50) = 10 + 20e^{-1} \\approx 17{,}4$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là miền nằm trong góc phần tư thứ nhất, nằm trong đường tròn $x^2 + y^2 = 6x$ và nằm ngoài đường tròn $x^2 + y^2 = 9$. Trong tọa độ cực, $D$ ứng với $3 \\le r \\le 6\\cos\\varphi,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{3}$. Giá trị của tích phân $\\displaystyle\\iint_D \\dfrac{1}{\\sqrt{x^2 + y^2}}\\,dxdy$ bằng",
   "options": [
    "$- \\pi + 3 \\sqrt{3}$.",
    "$- \\dfrac{\\pi \\ln 3}{3} + \\int\\limits_{0}^{\\dfrac{\\pi}{3}} \\log{\\left(6 \\cos{\\left(\\varphi \\right)} \\right)}\\, d\\varphi$.",
    "$- 2 \\pi + 6 \\sqrt{3}$.",
    "$- \\dfrac{\\pi}{2} + \\dfrac{3 \\sqrt{3}}{2}$."
   ],
   "answer": 0,
   "explain": "$I = \\displaystyle\\int_0^{\\pi/3}d\\varphi\\int_{3}^{6\\cos\\varphi} 1\\,dr$ (đã nhân Jacobian $r$)<br>$= \\displaystyle\\int_0^{\\pi/3}\\left(6 \\cos{\\left(\\varphi \\right)} - 3\\right)d\\varphi = - \\pi + 3 \\sqrt{3}$",
   "note": "Cận của $r$ phụ thuộc $\\varphi$ nên phải lấy tích phân theo $r$ trước, rồi mới theo $\\varphi$."
  },
  {
   "q": "Cho $V$ là hình cầu $x^2 + y^2 + z^2 \\le 4$. Giá trị của tích phân $\\displaystyle\\iiint_V \\sqrt{x^2 + y^2 + z^2}\\,dxdydz$ bằng",
   "options": [
    "$16 \\pi$.",
    "$\\dfrac{64 \\pi}{3}$.",
    "$8 \\pi$.",
    "$32 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_0^{2}\\rho\\cdot\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot2\\cdot\\dfrac{16}{4} = 16 \\pi$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là cung tròn $x^2 + y^2 = 16$ nằm trong góc phần tư thứ nhất. Dùng tham số hóa $x = 4\\cos t,\\ y = 4\\sin t$, giá trị của tích phân $\\displaystyle\\int_L xy\\,ds$ bằng",
   "options": [
    "$32$.",
    "$8$.",
    "$64$.",
    "$16$."
   ],
   "answer": 0,
   "explain": "$ds = 4\\,dt$: $\\displaystyle\\int_0^{\\pi/2} 4^3\\sin t\\cos t\\,dt = \\dfrac{4^3}{2}$<br>Kết quả: $32$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 2 y)\\,dx + x y\\,dy$ bằng",
   "options": [
    "$\\dfrac{2}{5}$.",
    "$- \\dfrac{4}{15}$.",
    "$- \\dfrac{2}{5}$.",
    "$\\dfrac{4}{5}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = y + 2$<br>$I = \\displaystyle\\int_0^{1}dx\\int_{x^2}^{x}(y + 2)\\,dy = \\int_0^{1}\\left(- \\dfrac{x^{4}}{2} - \\dfrac{3 x^{2}}{2} + 2 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{10} - \\dfrac{x^{3}}{2} + x^{2}\\right]_0^{1} = \\dfrac{2}{5}$",
   "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-21 & -12 \\\\ 40 & 23\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$10$.",
      "$4$.",
      "$-3$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (2)\\lambda + (-3) = 0$ có nghiệm $-1$ và $3$<br>Kết quả: $10$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{5}$ bằng",
     "options": [
      "$242$.",
      "$32$.",
      "$-243$.",
      "$10$."
     ],
     "answer": 0,
     "explain": "$A^{5} = PD^{5}P^{-1}$ có cùng vết với $D^{5}$: $(-1)^{5} + (3)^{5}$<br>Kết quả: $242$"
    },
    {
     "q": "Định thức của ma trận $A^2 - 3A$ bằng",
     "options": [
      "$0$.",
      "$18$.",
      "$4$.",
      "$9$."
     ],
     "answer": 0,
     "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $4$ và $0$; định thức bằng tích của chúng<br>Kết quả: $0$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 6 x + y^{2} + 8 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 100\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 100$.",
   "questions": [
    {
     "q": "Giá trị nhỏ nhất của $f$ trên $D$ bằng",
     "options": [
      "$-25$.",
      "$0$.",
      "$25$.",
      "$-26$."
     ],
     "answer": 0,
     "explain": "Điểm dừng $(3;-4)$ nằm trong $D$ và $f = (x - 3)^2 + (y + 4)^2 - 25$<br>Kết quả: $-25$"
    },
    {
     "q": "Giá trị lớn nhất của $f$ trên $D$ bằng",
     "options": [
      "$200$.",
      "$100$.",
      "$0$.",
      "$240$."
     ],
     "answer": 0,
     "explain": "Trên biên $f = 100 - 2(3 x - 4 y)$, lớn nhất khi $3 x - 4 y$ nhỏ nhất, tức bằng $-10\\cdot5$<br>Kết quả: $200$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-6$.",
      "$6$.",
      "$3$.",
      "$8$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(3;-4)$: $\\left(-6;8\\right)$<br>Kết quả: $-6$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = i + j - \\min\\{i,j\\}\\cdot\\min\\{i,j\\}$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(A^{-1}A^TA\\right)$.",
   "answer": [
    "-176"
   ],
   "explain": "$A = \\begin{pmatrix}1 & 2 & 3 & 4 \\\\ 2 & 0 & 1 & 2 \\\\ 3 & 1 & -3 & -2 \\\\ 4 & 2 & -2 & -8\\end{pmatrix}$, $\\det A = -176$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\dfrac{1}{\\det A}\\cdot\\det A\\cdot\\det A$ $= -176$<br>Đáp số: $-176$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, khử về dạng tam giác; $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y,z) = 2 x + 2 y + z$ trên mặt cầu $x^2 + y^2 + z^2 = 16$.",
   "answer": [
    "12"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(2;2;1)$; $f_{\\max} = 4\\sqrt{2^2 + 2^2 + 1^2} = 12$<br>Đáp số: $12$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(x - 3)^{n}}{n\\cdot4^n}$?<span class=\"q-hint\">Chú ý: xét riêng hai đầu mút của khoảng hội tụ.</span>",
   "answer": [
    "8"
   ],
   "explain": "Bán kính hội tụ $R = 4$. Tại $x = 7$ chuỗi là $\\sum\\dfrac1n$ phân kỳ; tại $x = -1$ chuỗi là $\\sum\\dfrac{(-1)^n}{n}$ hội tụ. Miền hội tụ: $[-1;7)$<br>Đáp số: $8$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y' - 2y = 6e^{2x}$ với điều kiện $y(0) = 2;\\ y'(0) = 6$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "328"
   ],
   "explain": "$k = 2$ là nghiệm đơn của phương trình đặc trưng nên $y^* = 2xe^{2x}$; $y = 2e^{2x} + 2xe^{2x}$; $y(2) \\approx 327{,}59$<br>Đáp số: $328$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt elipxoit $\\dfrac{x^2}{1} + \\dfrac{y^2}{4} + \\dfrac{z^2}{36} = 1$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "16"
   ],
   "explain": "Đổi biến $x = 1u,\\ y = 2v,\\ z = 6w$ (Jacobian $12$) đưa về hình cầu đơn vị: $V = 12\\cdot\\dfrac{4\\pi}{3} = 16\\pi$<br>Đáp số: $16$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
