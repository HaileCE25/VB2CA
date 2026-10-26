// ĐỀ SỐ 21 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-21",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 21",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lí tưởng và trách nhiệm xã hội",
  "prompt": "Trên mạng xã hội, một bộ phận người trẻ cổ vũ lối sống “nằm yên”: làm vừa đủ sống, không đặt mục tiêu, không cạnh tranh, tránh mọi áp lực. Trong khi đó, tại Đại hội đại biểu toàn quốc Đoàn Thanh niên Cộng sản Hồ Chí Minh lần thứ XIII (tháng 6/2026), thanh niên được kêu gọi trở thành lực lượng kiến tạo tương lai của dân tộc với “bản lĩnh, sáng tạo và khát vọng làm chủ tương lai”.",
  "source": "(Tổng hợp từ báo chí về Đại hội Đoàn toàn quốc lần thứ XIII, tháng 6/2026)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về lối sống “nằm yên” và về khát vọng, lí tưởng của tuổi trẻ trong giai đoạn hiện nay.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;4;1)$ và $v = (m;m;3)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
   "options": [
    "$8$.",
    "$3$.",
    "$10$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = m^{2} + 4 m + 3 = \\left(m + 1\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -3 \\text{ hoặc } m > -1$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $8$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ $S = \\{u_1(2;-1;1),\\ u_2(0;2;1),\\ u_3(-2;-1;m)\\}$ với $m$ là tham số. Hệ $S$ là một cơ sở của $\\mathbb{R}^3$ khi và chỉ khi",
   "options": [
    "$m \\ne -2$.",
    "$m = -2$.",
    "với mọi giá trị của $m$.",
    "$m \\ne -1$."
   ],
   "answer": 0,
   "explain": "Ba véc tơ trong $\\mathbb{R}^3$ là cơ sở $\\Leftrightarrow$ chúng độc lập tuyến tính $\\Leftrightarrow$ định thức của chúng khác 0<br>$\\det(u_1, u_2, u_3) = 4 m + 8$<br>$4 m + 8 \\ne 0 \\Leftrightarrow m \\ne -2$",
   "note": "Số véc tơ đã bằng số chiều nên chỉ cần định thức khác 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}3 & 2 \\\\ 3 & -1 \\\\ -2 & -2\\end{pmatrix}$ và $B = \\begin{pmatrix}-1 & 0 & -1 \\\\ 0 & 3 & 2\\end{pmatrix}$. Biết hạng của một tích không vượt quá hạng của mỗi thừa số, hạng của ma trận $AB$ (cấp $3\\times3$) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\operatorname{rank}A = 2,\\ \\operatorname{rank}B = 2$ nên $\\operatorname{rank}(AB) \\le 2$<br>$AB = \\begin{pmatrix}-3 & 6 & 1 \\\\ -3 & -3 & -5 \\\\ 2 & -6 & -2\\end{pmatrix}$, dạng bậc thang: $\\begin{pmatrix}-3 & 6 & 1 \\\\ 0 & 27 & 18 \\\\ 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}(AB) = 2$",
   "note": "$\\operatorname{rank}(AB) \\le \\min\\{\\operatorname{rank}A, \\operatorname{rank}B\\}$, nên tích của ma trận $3\\times2$ với $2\\times3$ không thể có hạng 3."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 2 \\\\ -1 & 2\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = 5A - 8I$. Phần tử thuộc hàng 1 và cột 2 của ma trận $A^{4}$ bằng",
   "options": [
    "$90$.",
    "$-45$.",
    "$34$.",
    "$16$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}7 & 10 \\\\ -5 & 2\\end{pmatrix}$<br>$A^3 = A^2\\cdot A = \\begin{pmatrix}11 & 34 \\\\ -17 & -6\\end{pmatrix}$<br>$A^4 = A^2\\cdot A^2 = \\begin{pmatrix}-1 & 90 \\\\ -45 & -46\\end{pmatrix}$<br>Phần tử hàng 1, cột 2 của $A^{4}$: $90$",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 4$. Giá trị của $\\det\\left((2A)^{-1}\\right)$ bằng",
   "options": [
    "$\\dfrac{1}{32}$.",
    "$\\dfrac{1}{8}$.",
    "$- \\dfrac{1}{32}$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left((2A)^{-1}\\right) = \\dfrac{1}{2^3\\cdot\\det A}$<br>Thay $\\det A = 4$: kết quả $\\dfrac{1}{32}$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$. Phát biểu nào sau đây về việc chéo hóa $A$ là đúng?",
   "options": [
    "Nếu $A$ có $n$ trị riêng đôi một khác nhau thì $A$ chéo hóa được.",
    "Mọi ma trận vuông đều chéo hóa được.",
    "Nếu $A$ có trị riêng bội thì $A$ không chéo hóa được.",
    "Nếu $A$ khả nghịch thì $A$ chéo hóa được."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $A$ có $n$ trị riêng đôi một khác nhau thì $A$ chéo hóa được. $n$ véc tơ riêng ứng với $n$ trị riêng khác nhau độc lập tuyến tính, xếp thành ma trận $P$ khả nghịch.<br><b>Sai:</b> Mọi ma trận vuông đều chéo hóa được. $A = \\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ chỉ có một phương véc tơ riêng nên không chéo hóa được.<br><b>Sai:</b> Nếu $A$ có trị riêng bội thì $A$ không chéo hóa được. Ma trận đơn vị có trị riêng bội mà vốn đã là ma trận đường chéo.<br><b>Sai:</b> Nếu $A$ khả nghịch thì $A$ chéo hóa được. $A = \\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ khả nghịch nhưng không chéo hóa được."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}3 & -1 & -1 & -1 \\\\ -1 & 3 & -1 & -1 \\\\ -1 & -1 & 3 & -1 \\\\ -1 & -1 & -1 & 3\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$0$.",
    "$256$.",
    "$80$.",
    "$192$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1 + h_2 + h_3 + h_4$: hàng 1 trở thành $(0;0;0;0)$, rút $0$ ra ngoài định thức<br>$h_i \\to h_i - (-1)h_1\\ (i = 2,3,4)$: được ma trận tam giác có đường chéo $1;\\ 4;\\ 4;\\ 4$<br>$\\det A = (0)\\cdot(4)^3 = 0$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\sin 3x - 3x\\cos 3x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$9$.",
    "$\\dfrac{9}{2}$.",
    "$\\dfrac{27}{2}$.",
    "$27$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 3x$: $\\sin u = u - \\dfrac{u^3}{6} + o(u^3),\\quad \\cos u = 1 - \\dfrac{u^2}{2} + o(u^2)$<br>$\\sin u - u\\cos u = \\left(u - \\dfrac{u^3}{6}\\right) - \\left(u - \\dfrac{u^3}{2}\\right) + o(u^3) = \\dfrac{u^3}{3} + o(u^3)$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(3x)^3}{3x^3} = \\dfrac{27}{3} = 9$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} + x - 6}{x^{2} + 4 x + 3}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$y = \\dfrac{\\left(x - 2\\right) \\left(x + 3\\right)}{\\left(x + 1\\right) \\left(x + 3\\right)}$<br>Có tiệm cận đứng $x = -1$, tiệm cận ngang $y = 1$ (tại $x = -3$ giới hạn hữu hạn nên không có tiệm cận)<br>Tổng cộng: $2$ đường tiệm cận",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{\\cos 3x}{1 + x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$\\dfrac{7}{2}$.",
    "$- \\dfrac{7}{2}$.",
    "$21$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{x + 1} = 1 - x + x^{2} - x^{3} + o(x^{3})$<br>$\\cos{\\left(3 x \\right)} = 1 - \\dfrac{9}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 - x - \\dfrac{7}{2}x^{2} + \\dfrac{7}{2}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{7}{2}$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm hợp $z = u^2 + uv$ với $u = x^{2} + y,\\ v = x - 2 y$. Dùng quy tắc đạo hàm hàm hợp $z'_x = z'_u\\cdot u'_x + z'_v\\cdot v'_x$, giá trị của $z'_x$ tại điểm $(x;y) = (1;2)$ bằng",
   "options": [
    "$9$.",
    "$6$.",
    "$-9$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "Tại điểm đã cho: $u = 3,\\ v = -3$<br>$z'_u = 2 u + v \\to 3,\\quad z'_v = u \\to 3$<br>$u'_x = 2 x \\to 2,\\quad v'_x = 1 \\to 1$<br>$z'_x = (3)\\cdot(2) + (3)\\cdot(1) = 9$",
   "note": "Tính $u, v$ tại điểm đã cho trước rồi mới thay vào các đạo hàm riêng; phải cộng đủ hai nhánh qua $u$ và qua $v$."
  },
  {
   "q": "Người ta tính thể tích $V = \\dfrac13\\pi r^2h$ của một khối nón từ hai đại lượng đo được. Biết bán kính đáy $r$ được đo với sai số tương đối không quá 2% và chiều cao $h$ với sai số tương đối không quá 1%. Dùng vi phân toàn phần của $\\ln V$, sai số tương đối lớn nhất của $V$ xấp xỉ bằng",
   "options": [
    "5%.",
    "3%.",
    "4%.",
    "2%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln V = \\pm2\\ln u \\pm 1\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta V}{V} \\le 2\\cdot\\dfrac{\\Delta u}{u} + 1\\cdot\\dfrac{\\Delta v}{v}$<br>$= 2\\cdot2\\% + 1\\cdot1\\% = 5\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $x + 2 y = 15$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$45$.",
    "$15$.",
    "$90$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$L = x^2 + y^2 - \\lambda(x + 2 y - 15)$<br>$L'_x = 2x - \\lambda = 0,\\quad L'_y = 2y - 2 \\lambda = 0 \\Rightarrow x = \\dfrac{\\lambda}{2},\\ y = \\lambda$<br>Thay vào ràng buộc: $\\dfrac{5 \\lambda}{2} = 15 \\Rightarrow \\lambda = 6$<br>$(x;y) = \\left(3;6\\right)$, $f_{\\min} = 45$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho $c$ là số nguyên dương. Giá trị lớn nhất của $c$ để chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{c^n}{n\\cdot3^n}$ hội tụ là",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\sqrt[n]{u_n} \\to \\dfrac{c}{3}$<br>Hội tụ khi $c < 3$; với $c = 3$ được chuỗi điều hòa $\\sum\\dfrac1n$ phân kỳ<br>Giá trị nguyên dương lớn nhất: $2$",
   "note": "Khi tỉ số D’Alembert bằng đúng 1 thì tiêu chuẩn không kết luận được: phải xét riêng giá trị biên của $c$."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n^2}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\ln(n+1)}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$. Có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\frac1n \\downarrow 0$ (Leibniz), $\\sum\\frac1n$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 2: $|u_n| \\to 1 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 3: $\\frac{1}{\\ln(n+1)} \\downarrow 0$ (Leibniz), $\\frac{1}{\\ln(n+1)} > \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 4: $\\sum\\frac{1}{n^2}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Số chuỗi hội tụ: $3$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình Bernoulli (với $\\alpha \\ne 0,\\ \\alpha \\ne 1$)?",
   "options": [
    "$y' + \\dfrac{y}{x} = xy^3$.",
    "$y' = \\dfrac{1 + y^2}{1 + x^2}$.",
    "$(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$.",
    "$xy' - 2y = x^3$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' + \\dfrac{y}{x} = xy^3$ — Dạng $y' + p(x)y = q(x)y^{\\alpha}$<br><b>Sai:</b> $y' = \\dfrac{1 + y^2}{1 + x^2}$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi<br><b>Sai:</b> $xy' - 2y = x^3$ — là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' = (x + y + 1)^2$ thỏa mãn $y(0) = 0$. Bằng phép đổi biến $u = x + y + 1$ để đưa về phương trình tách biến, giá trị của $y\\left(\\dfrac{\\pi}{12}\\right)$ bằng",
   "options": [
    "$\\sqrt{3} - 1 - \\dfrac{\\pi}{12}$.",
    "$\\sqrt{3} - 1$.",
    "$\\sqrt{3} - \\dfrac{\\pi}{12}$.",
    "$\\sqrt{3} + 1 - \\dfrac{\\pi}{12}$."
   ],
   "answer": 0,
   "explain": "$u = x + y + 1 \\Rightarrow u' = 1 + y' = 1 + u^2$<br>$\\dfrac{du}{1 + u^2} = dx \\Rightarrow \\arctan u = x + C$<br>Từ $y(0) = 0$: $C = \\dfrac{\\pi}{4}$, nên $y = \\tan\\left(x + \\dfrac{\\pi}{4}\\right) - x - 1$<br>$y\\left(\\dfrac{\\pi}{12}\\right) = \\sqrt{3} - 1 - \\dfrac{\\pi}{12}$",
   "note": "Với $y' = f(ax + by + c)$, đặt $u = ax + by + c$ sẽ được phương trình tách biến."
  },
  {
   "q": "Một tin đồn lan truyền trong một khu dân cư có 1800 người. Số người đã biết tin $P(t)$ sau $t$ ngày thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{1800}\\right)$ với $k = \\dfrac{\\ln 2}{3}$ và $P(0) = 200$. Biết nghiệm có dạng $P(t) = \\dfrac{1800}{1 + Ae^{-kt}}$. Số người biết tin sau 6 ngày bằng",
   "options": [
    "$600$.",
    "$800$.",
    "$900$.",
    "$360$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{1800}{1 + A} = 200 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{3}\\cdot6} = 2^{-2} = \\dfrac{1}{4}$<br>$P(6) = \\dfrac{1800}{1 + \\frac{8}{4}} = 600$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $y'' + 9y = \\sin 3x$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?",
   "options": [
    "$y^* = x(A\\cos 3x + B\\sin 3x)$.",
    "$y^* = A\\sin 3x$.",
    "$y^* = A\\cos 3x + B\\sin 3x$.",
    "$y^* = Ax\\sin 3x$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng có nghiệm $\\pm 3i$, trùng với tần số của vế phải nên nhân thêm $x$; phải có cả $\\cos 3x$ và $\\sin 3x$<br>Dạng cần tìm: $y^* = x(A\\cos 3x + B\\sin 3x)$",
   "note": "Bội của số mũ (hoặc của $\\alpha \\pm i\\beta$) trong phương trình đặc trưng quyết định nhân thêm $1$, $x$ hay $x^2$."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ y \\ge x,\\ x \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>Điều kiện $y \\ge x,\\ x \\ge 0$ ứng với $\\pi/4 \\le \\varphi \\le \\pi/2$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{4},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$\\dfrac{\\pi \\left(2 - \\sqrt{2}\\right)}{3}$.",
    "$\\dfrac{\\pi^{2}}{6}$.",
    "$\\dfrac{4 \\pi}{3}$.",
    "$\\dfrac{\\pi \\left(2 - \\sqrt{2}\\right)}{6}$."
   ],
   "answer": 0,
   "explain": "$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{4}}\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot\\left(1 - \\cos\\dfrac{\\pi}{4}\\right)\\cdot\\dfrac{1}{3} = \\dfrac{\\pi \\left(2 - \\sqrt{2}\\right)}{3}$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1500 nghìn người dùng, tổng số không đổi. Mỗi tháng có 30% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 500 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$375$.",
    "$1125$.",
    "$750$.",
    "$450$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 10\\%\\cdot(1500 - x)$<br>$40x = 15000 \\Rightarrow x = 375$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & -2 & -2 \\\\ -2 & m & -2 \\\\ -2 & -2 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 1 khi và chỉ khi",
   "options": [
    "$m = -2$.",
    "$m = 4$.",
    "$m \\ne -2$ và $m \\ne 4$.",
    "$m = -2$ hoặc $m = 4$."
   ],
   "answer": 0,
   "explain": "$\\det A = \\left(m - 4\\right) \\left(m + 2\\right)^{2}$ nên $\\operatorname{rank}A = 3 \\Leftrightarrow m \\ne -2$ và $m \\ne 4$<br>Với $m = -2$: ba hàng của $A$ bằng nhau và khác không nên $\\operatorname{rank}A = 1$<br>Với $m = 4$: tổng ba hàng bằng véc tơ không, hai hàng đầu không tỉ lệ nên $\\operatorname{rank}A = 2$<br>Vậy hạng của $A$ bằng 1 $\\Leftrightarrow m = -2$",
   "note": "$\\det A = 0$ mới cho biết hạng nhỏ hơn 3; phải thay từng giá trị $m$ để biết hạng bằng 1 hay 2."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}0 & 1 \\\\ 1 & 0\\end{pmatrix}$. Mọi ma trận vuông cấp 2 giao hoán với $A$ (tức thỏa mãn $AX = XA$) đều có dạng nào sau đây, với $a, b$ là các số thực tùy ý?",
   "options": [
    "$\\begin{pmatrix}a & b \\\\ b & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ 0 & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & 0 \\\\ 0 & b\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ -b & a\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "Đặt $X = \\begin{pmatrix}x & y \\\\ z & t\\end{pmatrix}$<br>$AX = \\begin{pmatrix}z & t \\\\ x & y\\end{pmatrix},\\quad XA = \\begin{pmatrix}y & x \\\\ t & z\\end{pmatrix}$<br>So sánh từng phần tử: $x = t$ và $y = z$<br>Vậy $X = \\begin{pmatrix}a & b \\\\ b & a\\end{pmatrix}$",
   "note": "Đặt $X$ với bốn ẩn, tính $AX$ và $XA$ rồi so sánh từng phần tử."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y + z = 0\\\\ -x + my = 0\\\\ x + 3y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$2$.",
    "$-3$.",
    "$10$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 2 m - 3 = \\left(m - 3\\right) \\left(m + 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -1$ hoặc $m = 3$<br>Giá trị cần tìm: $2$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to -1}\\dfrac{x^3 + ax + b}{\\left(x + 1\\right)^{2}} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b + L$ bằng",
   "options": [
    "$-8$.",
    "$-5$.",
    "$-3$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "Mẫu số có nghiệm kép $x = -1$ nên tử số $g(x) = x^3 + ax + b$ phải thỏa mãn $g(-1) = 0$ và $g'(-1) = 0$<br>$g'(x) = 3x^2 + a \\Rightarrow a = -3$; $g(-1) = 0 \\Rightarrow b = -2$<br>$x^3 - 3 x - 2 = \\left(x - 2\\right) \\left(x + 1\\right)^{2}$ nên $L = -3$<br>$a + b + L = -8$",
   "note": "Mẫu có nghiệm kép nên tử cũng phải có nghiệm kép tại đó: $g(x_0) = g'(x_0) = 0$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\ln(1 + 4x) & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ (xét trong lân cận của điểm $0$) có đạo hàm cấp hai tại $x = 0$. Giá trị của $a + b + d$ bằng",
   "options": [
    "$-4$.",
    "$-8$.",
    "$4$.",
    "$-12$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = \\ln\\left(4 x + 1\\right)$: $g(0) = 0,\\ g'(0) = 4,\\ g''(0) = -16$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 0,\\ b = 4,\\ 2a = -16 \\Rightarrow a = -8$<br>$a + b + d = -4$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Cho số thực $\\alpha > 0$ và xét hai tích phân suy rộng $I_1 = \\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x^\\alpha}$, $I_2 = \\displaystyle\\int_0^1\\dfrac{dx}{x^\\alpha}$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$I_1$ hội tụ khi và chỉ khi $\\alpha > 1$.",
    "$I_2$ hội tụ khi và chỉ khi $\\alpha > 1$.",
    "Khi $\\alpha = 1$ cả $I_1$ và $I_2$ đều hội tụ.",
    "$I_1$ hội tụ với mọi $\\alpha > 0$ vì $\\dfrac{1}{x^\\alpha} \\to 0$ khi $x \\to +\\infty$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $I_1$ hội tụ khi và chỉ khi $\\alpha > 1$. Với $\\alpha \\ne 1$: $\\displaystyle\\int_1^b\\dfrac{dx}{x^\\alpha} = \\dfrac{b^{1-\\alpha} - 1}{1 - \\alpha}$, có giới hạn hữu hạn khi $b \\to +\\infty$ đúng khi $\\alpha > 1$.<br><b>Sai:</b> $I_2$ hội tụ khi và chỉ khi $\\alpha > 1$. Ngược lại: $I_2$ hội tụ khi và chỉ khi $\\alpha < 1$.<br><b>Sai:</b> Khi $\\alpha = 1$ cả $I_1$ và $I_2$ đều hội tụ. Nguyên hàm là $\\ln x$, tiến ra vô cùng ở cả hai phía nên cả hai tích phân phân kỳ.<br><b>Sai:</b> $I_1$ hội tụ với mọi $\\alpha > 0$ vì $\\dfrac{1}{x^\\alpha} \\to 0$ khi $x \\to +\\infty$. Hàm dưới dấu tích phân tiến về $0$ là chưa đủ: với $\\alpha = \\dfrac12$, $\\displaystyle\\int_1^b\\dfrac{dx}{\\sqrt x} = 2\\sqrt b - 2 \\to +\\infty$."
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = 2 p_{1} - p_{2} + 30\\\\ s_2 = 2 p_{2} - p_{3} - 25\\\\ s_3 = 2 p_{3} + 30\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = - p_{1} + p_{2} + p_{3} + 10\\\\ d_2 = - p_{2} + p_{3} + 65\\\\ d_3 = p_{1} - p_{3} + 50\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Gọi $p_1^*, p_2^*, p_3^*$ là các mức giá cân bằng, giá trị của $p_1^* + p_2^* + p_3^*$ bằng",
   "options": [
    "$80$.",
    "$140$.",
    "$85$.",
    "$75$."
   ],
   "answer": 0,
   "explain": "Giải hệ $s_i = d_i$ được giá cân bằng $(25;40;15)$, lượng cung (cầu) tương ứng $(40;40;60)$<br>Kết quả: $80$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=4}^{+\\infty}\\ln\\left(1 - \\dfrac{1}{n^2}\\right)$ bằng",
   "options": [
    "$\\ln\\dfrac{3}{4}$.",
    "$\\ln\\dfrac{4}{3}$.",
    "$\\ln\\dfrac{4}{5}$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\ln\\left(1 - \\dfrac{1}{n^2}\\right) = \\ln\\dfrac{(n-1)(n+1)}{n^2} = \\ln\\dfrac{n-1}{n} - \\ln\\dfrac{n}{n+1}$<br>Tổng riêng thu gọn: $S_N = \\ln\\dfrac{3}{4} - \\ln\\dfrac{N}{N+1}$<br>$N \\to +\\infty$: $S = \\ln\\dfrac{3}{4}$",
   "note": "Lôgarit của tích thành tổng: tách $\\ln\\dfrac{(n-1)(n+1)}{n^2}$ thành hiệu để các số hạng triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{2^{n+1} + 3^n}{5^n} = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng",
   "options": [
    "$73$.",
    "$13$.",
    "$75$.",
    "$1290$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{2^{n+1}}{5^n} = 2\\sum_{n=2}^{+\\infty}\\left(\\dfrac{2}{5}\\right)^n = 2\\cdot\\dfrac{\\left(\\frac{2}{5}\\right)^{2}}{1 - \\frac{2}{5}} = \\dfrac{8}{15}$<br>$\\displaystyle\\sum_{n=2}^{+\\infty}\\left(\\dfrac{3}{5}\\right)^n = \\dfrac{\\left(\\frac{3}{5}\\right)^{2}}{1 - \\frac{3}{5}} = \\dfrac{9}{10}$<br>Tổng: $\\dfrac{8}{15} + \\dfrac{9}{10} = \\dfrac{43}{30} \\Rightarrow a + b = 73$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{2^n}{n!}$ bằng",
   "options": [
    "$e^{2}$.",
    "$e^{2} - 1$.",
    "$2 e$.",
    "$e^{\\dfrac{1}{2}}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}\\dfrac{x^n}{n!} = e^x$ tại $x = 2$<br>Vậy tổng của chuỗi bằng $e^{2}$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = 2x(1 + y^2)$ thỏa mãn $y(0) = 0$. Giá trị của $y\\left(\\dfrac{\\sqrt{\\pi}}{2}\\right)$ bằng",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{1+y^2} = 2x\\,dx \\Rightarrow \\arctan y = x^2 + C$<br>$y(0) = 0 \\Rightarrow y = \\tan{\\left(x^{2} \\right)}$<br>$y\\left(\\dfrac{\\sqrt{\\pi}}{2}\\right) = 1$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + 2y = 2e^{-2x}$ thỏa mãn $y(0) = 1$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{3}{e^{2}}$.",
    "$e^{-2}$.",
    "$\\dfrac{2}{e^{2}}$.",
    "$3 e^{2}$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{2x}$: $\\left(ye^{2x}\\right)' = 2$<br>$ye^{2x} = 2x + C \\Rightarrow y = (2x + C)e^{-2x}$<br>$y(0) = C = 1 \\Rightarrow y(1) = (2 + 1)e^{-2} = \\dfrac{3}{e^{2}}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bể chứa 100 lít nước có hòa tan 30 kg muối. Người ta bơm vào bể nước muối nồng độ 0,1 kg/lít với tốc độ 6 lít/phút, đồng thời rút hỗn hợp (luôn được khuấy đều) ra khỏi bể với tốc độ 4 lít/phút, nên thể tích nước trong bể tăng dần. Lượng muối trong bể sau 100 phút là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "32,2.",
    "30,0.",
    "90,0.",
    "36,7."
   ],
   "answer": 0,
   "explain": "$V(t) = 100 + 2t$; $S' + \\dfrac{4}{100 + 2t}S = 0{,}6,\\quad S(0) = 30$<br>Nhân với thừa số tích phân $(100 + 2t)^2$: $\\left[S(100 + 2t)^2\\right]' = 0{,}6(100 + 2t)^2$<br>$S(100 + 2t)^2 = 0{,}1(100 + 2t)^3 + C$; $S(0) = 30 \\Rightarrow C = 200000$<br>$S(100) = 0{,}1\\cdot300 + \\dfrac{200000}{300^2} \\approx 32{,}2$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 4,\\ x \\le 0,\\ y \\ge 0\\}$. Giá trị của tích phân $\\displaystyle\\iint_D x^2\\,dxdy$ bằng",
   "options": [
    "$\\pi$.",
    "$\\dfrac{2 \\pi}{3}$.",
    "$2 \\pi$.",
    "$\\dfrac{\\pi}{2}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 2,\\ \\dfrac{\\pi}{2} \\le \\varphi \\le \\pi$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{2}\\left(r^{2} \\cos^{2}\\varphi\\right)r\\,dr = \\int 4 \\cos^{2}\\varphi\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\pi$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là hình cầu $x^2 + y^2 + z^2 \\le 1$. Giá trị của tích phân $\\displaystyle\\iiint_V (x^2 + y^2 + z^2)\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{4 \\pi}{5}$.",
    "$\\dfrac{2 \\pi}{5}$.",
    "$\\dfrac{\\pi}{5}$.",
    "$\\dfrac{4 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^2\\cdot\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot2\\cdot\\dfrac{1}{5} = \\dfrac{4 \\pi}{5}$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Trong mặt phẳng $Oxy$, cho $L$ là đoạn thẳng nối từ $A(0;0)$ đến $B(3;4)$. Giá trị của tích phân $\\displaystyle\\int_L (x + 2 y)\\,ds$ bằng",
   "options": [
    "$\\dfrac{55}{2}$.",
    "$\\dfrac{11}{2}$.",
    "$55$.",
    "$\\dfrac{55}{4}$."
   ],
   "answer": 0,
   "explain": "Tham số hóa $x = 0 + 3t,\\ y = 0 + 4t$, $0 \\le t \\le 1$, $ds = 5\\,dt$; hàm dưới dấu tích phân bậc nhất nên tích phân bằng độ dài đoạn thẳng nhân giá trị tại trung điểm<br>Kết quả: $\\dfrac{55}{2}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 3 y^{2} + 2)\\,dx + (x^{2} + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$2$.",
    "$-2$.",
    "$1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 6 y,\\quad Q'_x = 2 x + 6 y$<br>Đồng nhất hệ số: $m = 2$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}7 & 3 \\\\ -6 & -2\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$17$.",
      "$25$.",
      "$4$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (5)\\lambda + (4) = 0$ có nghiệm $1$ và $4$<br>Kết quả: $17$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{5}$ bằng",
     "options": [
      "$1025$.",
      "$3125$.",
      "$1024$.",
      "$25$."
     ],
     "answer": 0,
     "explain": "$A^{5} = PD^{5}P^{-1}$ có cùng vết với $D^{5}$: $(1)^{5} + (4)^{5}$<br>Kết quả: $1025$"
    },
    {
     "q": "Định thức của ma trận $A^2 - 3A$ bằng",
     "options": [
      "$-8$.",
      "$4$.",
      "$2$.",
      "$8$."
     ],
     "answer": 0,
     "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $-2$ và $4$; định thức bằng tích của chúng<br>Kết quả: $-8$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 16 x + y^{2} + 12 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 1600\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 1600$.",
   "questions": [
    {
     "q": "Giá trị nhỏ nhất của $f$ trên $D$ bằng",
     "options": [
      "$-100$.",
      "$800$.",
      "$0$.",
      "$100$."
     ],
     "answer": 0,
     "explain": "Điểm dừng $(8;-6)$ nằm trong $D$ và $f = (x - 8)^2 + (y + 6)^2 - 100$<br>Kết quả: $-100$"
    },
    {
     "q": "Giá trị lớn nhất của $f$ trên $D$ bằng",
     "options": [
      "$2400$.",
      "$1600$.",
      "$800$.",
      "$2720$."
     ],
     "answer": 0,
     "explain": "Trên biên $f = 1600 - 2(8 x - 6 y)$, lớn nhất khi $8 x - 6 y$ nhỏ nhất, tức bằng $-40\\cdot10$<br>Kết quả: $2400$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-32$.",
      "$32$.",
      "$8$.",
      "$24$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(8;-6)$: $\\left(-32;24\\right)$<br>Kết quả: $-32$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = i + j - \\min\\{i,j\\}\\cdot\\min\\{i,j\\}$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(\\dfrac{1}{2}A\\right)$.",
   "answer": [
    "-11"
   ],
   "explain": "$A = \\begin{pmatrix}1 & 2 & 3 & 4 \\\\ 2 & 0 & 1 & 2 \\\\ 3 & 1 & -3 & -2 \\\\ 4 & 2 & -2 & -8\\end{pmatrix}$, $\\det A = -176$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\left(\\dfrac{1}{2}\\right)^4\\cdot\\det A$ $= -11$<br>Đáp số: $-11$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, khử về dạng tam giác; $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y,z) = 2 x + 3 y + 6 z$ trên mặt cầu $x^2 + y^2 + z^2 = 25$.",
   "answer": [
    "35"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(2;3;6)$; $f_{\\max} = 5\\sqrt{2^2 + 3^2 + 6^2} = 35$<br>Đáp số: $35$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(n!)^2}{(2n)!}3^nx^n$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $a + b$.",
   "answer": [
    "7"
   ],
   "explain": "$\\dfrac{a_{n+1}}{a_n} = \\dfrac{3(n+1)^2}{(2n+1)(2n+2)} \\to \\dfrac34$ nên $R = \\dfrac{4}{3}$<br>Đáp số: $7$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -12x - 4$ với điều kiện $y(0) = 2;\\ y'(0) = 5$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "11"
   ],
   "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -12x - 4 \\Rightarrow y^* = 3x + 1$<br>$y = 3x + 1 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 2,\\ y'(0) = 5 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 4 + e^{2} \\approx 11{,}39$<br>Đáp số: $11$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt elipxoit $\\dfrac{x^2}{4} + \\dfrac{y^2}{9} + \\dfrac{z^2}{9} = 1$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "24"
   ],
   "explain": "Đổi biến $x = 2u,\\ y = 3v,\\ z = 3w$ (Jacobian $18$) đưa về hình cầu đơn vị: $V = 18\\cdot\\dfrac{4\\pi}{3} = 24\\pi$<br>Đáp số: $24$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
