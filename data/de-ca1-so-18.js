// ĐỀ SỐ 18 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-18",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 18",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Tiêu dùng và tài chính",
  "prompt": "Theo số liệu của Bộ Công an, lừa đảo trực tuyến gây thiệt hại hơn 12.000 tỷ đồng trong năm 2024, trong đó các lời mời “đầu tư lợi nhuận cao” luôn nằm trong nhóm thủ đoạn phổ biến nhất. Nhiều nạn nhân là người trẻ có học vấn, bị thuyết phục bởi những lời hứa như “lãi 30% mỗi tháng, cam kết hoàn vốn”. Có người cho rằng họ thiếu hiểu biết về tài chính; cũng có người cho rằng gốc rễ là mong muốn làm giàu nhanh mà không cần lao động.",
  "source": "(Số liệu theo Bộ Công an, 2024 – 2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về hai cách lí giải trên và về thái độ đúng đắn của người trẻ đối với việc kiếm tiền, tích lũy và đầu tư.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;2;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
   "options": [
    "$1$.",
    "$10$.",
    "$3$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = m^{2} + 2 m = m \\left(m + 2\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -2 < m < 0$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $1$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(0;-2;-1),\\ u_2(-1;3;0),\\ u_3(-1;0;2),\\ u_4(0;2;1),\\ u_5(1;2;-1)\\}$. Có bao nhiêu hệ con gồm đúng 3 véc tơ của $S$ là cơ sở của $\\mathbb{R}^3$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$5$.",
    "$10$.",
    "$6$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Có $C_5^3 = 10$ hệ con gồm 3 véc tơ, trong đó 5 hệ phụ thuộc tuyến tính<br>Kết quả: $5$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 5 & 1 & -1 & -2 \\\\ 0 & 2 & -1 & 0 & -1 \\\\ 3 & 1 & 3 & -1 & 0 \\\\ 1 & -2 & 3 & -2 & -1\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng: $A \\to \\begin{pmatrix}3 & 5 & 1 & -1 & -2 \\\\ 0 & 2 & -1 & 0 & -1 \\\\ 0 & 0 & 5 & -10 & -13 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}A = 3$<br>Số chiều không gian nghiệm $= 5 - 3 = 2$",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & 1 \\\\ -1 & 2\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = 4A - 5I$. Phần tử thuộc hàng 1 và cột 1 của ma trận $A^{3}$ bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$8$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}3 & 4 \\\\ -4 & 3\\end{pmatrix}$<br>$A^3 = A^2\\cdot A = \\begin{pmatrix}2 & 11 \\\\ -11 & 2\\end{pmatrix}$<br>Phần tử hàng 1, cột 1 của $A^{3}$: $2$",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 2$. Giá trị của $\\det\\left(3A^T\\right)$ bằng",
   "options": [
    "$54$.",
    "$6$.",
    "$-54$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(3A^T\\right) = 3^3\\cdot\\det A$<br>Thay $\\det A = 2$: kết quả $54$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$ thỏa mãn $A^2 = A$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\det A = 0$ hoặc $\\det A = 1$.",
    "$\\det A = 1$.",
    "$A$ là ma trận đơn vị.",
    "$A$ khả nghịch."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\det A = 0$ hoặc $\\det A = 1$. $(\\det A)^2 = \\det A$ nên $\\det A\\,(\\det A - 1) = 0$.<br><b>Sai:</b> $\\det A = 1$. Ma trận không thỏa mãn $A^2 = A$ và có định thức bằng 0.<br><b>Sai:</b> $A$ là ma trận đơn vị. $A = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ thỏa mãn $A^2 = A$ nhưng khác $I$.<br><b>Sai:</b> $A$ khả nghịch. $A = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ thỏa mãn $A^2 = A$ và có $\\det A = 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}1 & 1 & -1 & 2 \\\\ -1 & 2 & 3 & 1 \\\\ 0 & 0 & 1 & -1 \\\\ 0 & 0 & 2 & 3\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$15$.",
    "$8$.",
    "$22$.",
    "$-15$."
   ],
   "answer": 0,
   "explain": "$\\det P = 3,\\quad \\det R = 5$<br>$\\det A = \\det P\\cdot\\det R = (3)\\cdot(5) = 15$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(\\cos 3x)}{\\ln(\\cos 3x)}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$1$.",
    "$2$.",
    "$-1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\ln(\\cos u) = \\ln\\left(1 - \\dfrac{u^2}{2} + o(u^2)\\right) = -\\dfrac{u^2}{2} + o(u^2)$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{-(3x)^2/2}{-(3x)^2/2} = \\dfrac{9}{9} = 1$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} - 6 x^{2} + 5 x + 12}{x^{2} + 4 x + 3}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$y = \\dfrac{\\left(x - 4\\right) \\left(x - 3\\right) \\left(x + 1\\right)}{\\left(x + 1\\right) \\left(x + 3\\right)}$<br>Có tiệm cận đứng $x = -3$, một tiệm cận xiên (tại $x = -1$ giới hạn hữu hạn; bậc tử hơn bậc mẫu 1 đơn vị nên có tiệm cận xiên, không có tiệm cận ngang)<br>Tổng cộng: $2$ đường tiệm cận",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{4}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{x}{- 3 x^{2} - 2 x + 1}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$20$.",
    "$7$.",
    "$480$.",
    "$-20$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{- 3 x^{2} - 2 x + 1} = 1 + 2x + 7x^{2} + 20x^{3} + 61x^{4} + o(x^{4})$<br>Nhân lại, gom theo bậc: $f(x) = x + 2x^{2} + 7x^{3} + 20x^{4} + o(x^{4})$<br>Hệ số của $x^{4}$: $20$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho mặt cong $z = x^{2} + y^{2}$. Mặt phẳng tiếp xúc với mặt cong tại điểm $M(-1;-1;2)$ có phương trình $z = z_0 + f'_x(M)(x - x_0) + f'_y(M)(y - y_0)$. Mặt phẳng này cắt trục $Oz$ tại điểm có cao độ bằng",
   "options": [
    "$-2$.",
    "$2$.",
    "$6$.",
    "$-4$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x \\to -2,\\quad f'_y = 2 y \\to -2$ tại $(-1;-1)$<br>Mặt phẳng tiếp xúc: $z = 2 + (-2)(x + 1) + (-2)(y + 1)$<br>Cho $x = y = 0$: $z = -2$",
   "note": "Mặt phẳng tiếp xúc dùng giá trị các đạo hàm riêng tại tiếp điểm; cho $x = y = 0$ để tìm giao điểm với trục $Oz$."
  },
  {
   "q": "Người ta tính diện tích $S = \\dfrac12ab\\sin C$ của một mảnh đất hình tam giác (góc $C$ đo chính xác) từ hai đại lượng đo được. Biết cạnh $a$ được đo với sai số tương đối không quá 0,5% và cạnh $b$ với sai số tương đối không quá 2%. Dùng vi phân toàn phần của $\\ln S$, sai số tương đối lớn nhất của $S$ xấp xỉ bằng",
   "options": [
    "2,5%.",
    "1,5%.",
    "1%.",
    "2%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln S = \\pm1\\ln u \\pm 1\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta S}{S} \\le 1\\cdot\\dfrac{\\Delta u}{u} + 1\\cdot\\dfrac{\\Delta v}{v}$<br>$= 1\\cdot0{,}5\\% + 1\\cdot2\\% = 2{,}5\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $x + 3 y = 10$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$10$.",
    "$20$.",
    "$1$.",
    "$100$."
   ],
   "answer": 0,
   "explain": "$L = x^2 + y^2 - \\lambda(x + 3 y - 10)$<br>$L'_x = 2x - \\lambda = 0,\\quad L'_y = 2y - 3 \\lambda = 0 \\Rightarrow x = \\dfrac{\\lambda}{2},\\ y = \\dfrac{3 \\lambda}{2}$<br>Thay vào ràng buộc: $5 \\lambda = 10 \\Rightarrow \\lambda = 2$<br>$(x;y) = \\left(1;3\\right)$, $f_{\\min} = 10$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho $c$ là số nguyên dương. Giá trị lớn nhất của $c$ để chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{c^n\\,n!}{n^n}$ hội tụ là",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{u_{n+1}}{u_n} = c\\left(\\dfrac{n}{n+1}\\right)^n \\to \\dfrac{c}{e}$<br>Hội tụ khi $c < e \\approx 2{,}72$<br>Giá trị nguyên dương lớn nhất: $2$",
   "note": "Khi tỉ số D’Alembert bằng đúng 1 thì tiêu chuẩn không kết luận được: phải xét riêng giá trị biên của $c$."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{n+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\sin\\dfrac1n$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n^2}{n^2+1}$. Có bao nhiêu chuỗi hội tụ tuyệt đối trong bốn chuỗi trên?",
   "options": [
    "$0$.",
    "$2$.",
    "$1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $|u_n| \\to 1 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 2: $\\sin\\frac1n \\downarrow 0$ (Leibniz), $\\sin\\frac1n \\sim \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 3: $\\frac1n \\downarrow 0$ (Leibniz), $\\sum\\frac1n$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 4: $|u_n| \\to 1 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Số chuỗi hội tụ tuyệt đối: $0$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Xét phương trình $P(x,y)\\,dx + Q(x,y)\\,dy = 0$, trong đó $P, Q$ có các đạo hàm riêng liên tục trên toàn mặt phẳng. Phát biểu nào sau đây là đúng?",
   "options": [
    "Phương trình là phương trình vi phân toàn phần khi và chỉ khi $P'_y = Q'_x$.",
    "Phương trình là phương trình vi phân toàn phần khi và chỉ khi $P'_x = Q'_y$.",
    "Phương trình là phương trình vi phân toàn phần khi và chỉ khi $P'_y = -Q'_x$.",
    "Mọi phương trình có dạng này đều là phương trình vi phân toàn phần."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Phương trình là phương trình vi phân toàn phần khi và chỉ khi $P'_y = Q'_x$. Nếu $P = u'_x$, $Q = u'_y$ thì $P'_y = u''_{xy} = u''_{yx} = Q'_x$; chiều ngược lại đúng trên miền đơn liên.<br><b>Sai:</b> Phương trình là phương trình vi phân toàn phần khi và chỉ khi $P'_x = Q'_y$. $y\\,dx + x\\,dy = d(xy)$ là vi phân toàn phần với $P'_y = Q'_x = 1$; điều kiện là hai đạo hàm chéo.<br><b>Sai:</b> Phương trình là phương trình vi phân toàn phần khi và chỉ khi $P'_y = -Q'_x$. $y\\,dx - x\\,dy = 0$ có $P'_y = 1 = -Q'_x$ nhưng không là vi phân toàn phần.<br><b>Sai:</b> Mọi phương trình có dạng này đều là phương trình vi phân toàn phần. $y\\,dx - x\\,dy = 0$ có $P'_y = 1 \\ne Q'_x = -1$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' = (x + y)^2$ thỏa mãn $y(0) = 0$. Bằng phép đổi biến $u = x + y$ để đưa về phương trình tách biến, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
   "options": [
    "$1 - \\dfrac{\\pi}{4}$.",
    "$1$.",
    "$1 + \\dfrac{\\pi}{4}$.",
    "$\\dfrac{\\pi}{4} - 1$."
   ],
   "answer": 0,
   "explain": "$u = x + y \\Rightarrow u' = 1 + y' = 1 + u^2$<br>$\\dfrac{du}{1 + u^2} = dx \\Rightarrow \\arctan u = x + C$<br>Từ $y(0) = 0$: $C = 0$, nên $y = \\tan x - x$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 1 - \\dfrac{\\pi}{4}$",
   "note": "Với $y' = f(ax + by + c)$, đặt $u = ax + by + c$ sẽ được phương trình tách biến."
  },
  {
   "q": "Một ứng dụng mới được giới thiệu cho 4500 học viên của một trường. Số người đã cài đặt $P(t)$ sau $t$ tuần thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{5}$ và $P(0) = 500$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số người đã cài đặt sau 10 tuần bằng",
   "options": [
    "$1500$.",
    "$2000$.",
    "$2250$.",
    "$900$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{4500}{1 + A} = 500 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{5}\\cdot10} = 2^{-2} = \\dfrac{1}{4}$<br>$P(10) = \\dfrac{4500}{1 + \\frac{8}{4}} = 1500$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Cho phương trình $y'' + \\omega^2y = 0$ với $\\omega > 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Mọi nghiệm của phương trình đều có dạng $y = C_1\\cos\\omega x + C_2\\sin\\omega x$.",
    "Nghiệm tổng quát là $y = C_1e^{\\omega x} + C_2e^{-\\omega x}$.",
    "Mọi nghiệm khác không đều tiến về $0$ khi $x \\to +\\infty$.",
    "Phương trình đặc trưng có hai nghiệm thực phân biệt."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Mọi nghiệm của phương trình đều có dạng $y = C_1\\cos\\omega x + C_2\\sin\\omega x$. Phương trình đặc trưng $k^2 + \\omega^2 = 0$ có nghiệm $k = \\pm i\\omega$.<br><b>Sai:</b> Nghiệm tổng quát là $y = C_1e^{\\omega x} + C_2e^{-\\omega x}$. Đó là nghiệm tổng quát của $y'' - \\omega^2y = 0$.<br><b>Sai:</b> Mọi nghiệm khác không đều tiến về $0$ khi $x \\to +\\infty$. Nghiệm dao động với biên độ $\\sqrt{C_1^2 + C_2^2}$ không đổi.<br><b>Sai:</b> Phương trình đặc trưng có hai nghiệm thực phân biệt. $k^2 = -\\omega^2 < 0$ nên hai nghiệm là số phức $\\pm i\\omega$."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 4,\\ y \\ge |x|\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>Điều kiện $y \\ge |x|$ ứng với $\\pi/4 \\le \\varphi \\le 3\\pi/4$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{3},\\ 0 \\le \\varphi \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{3 \\pi}{16}$.",
    "$\\dfrac{3 \\pi}{8}$.",
    "$\\dfrac{3 \\pi}{32}$.",
    "$\\dfrac{\\pi}{4}$."
   ],
   "answer": 0,
   "explain": "$I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{3}}{2}\\cdot\\dfrac{1}{4} = \\dfrac{3 \\pi}{16}$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 600 nghìn người dùng, tổng số không đổi. Mỗi tháng có 20% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 200 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$200$.",
    "$400$.",
    "$300$.",
    "$201$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 10\\%\\cdot(600 - x)$<br>$30x = 6000 \\Rightarrow x = 200$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;-1;-1;0),\\ u_2(1;2;1;-2),\\ u_3(1;5;3;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne -4$.",
    "$m = -4$.",
    "với mọi giá trị của $m$.",
    "$m \\ne -5$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $-1$ lần hàng 1 cộng $2$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = -4$; ngược lại hạng bằng 3.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 0 \\\\ 1 & 1\\end{pmatrix}$. Mọi ma trận vuông cấp 2 giao hoán với $A$ (tức thỏa mãn $AX = XA$) đều có dạng nào sau đây, với $a, b$ là các số thực tùy ý?",
   "options": [
    "$\\begin{pmatrix}a & 0 \\\\ b & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ 0 & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & 0 \\\\ 0 & b\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ b & a\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "Đặt $X = \\begin{pmatrix}x & y \\\\ z & t\\end{pmatrix}$<br>$AX = \\begin{pmatrix}x & y \\\\ x + z & t + y\\end{pmatrix},\\quad XA = \\begin{pmatrix}x + y & y \\\\ t + z & t\\end{pmatrix}$<br>So sánh từng phần tử: $y = 0$ và $x = t$<br>Vậy $X = \\begin{pmatrix}a & 0 \\\\ b & a\\end{pmatrix}$",
   "note": "Đặt $X$ với bốn ẩn, tính $AX$ và $XA$ rồi so sánh từng phần tử."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + z = 0\\\\ -x + my - z = 0\\\\ 3x - 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$6$.",
    "$5$.",
    "$13$.",
    "$-5$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 5 m + 6 = \\left(m - 3\\right) \\left(m - 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 2$ hoặc $m = 3$<br>Giá trị cần tìm: $6$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\sin 4x - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b - 6L$ bằng",
   "options": [
    "$68$.",
    "$- \\dfrac{20}{3}$.",
    "$4$.",
    "$\\dfrac{236}{3}$."
   ],
   "answer": 0,
   "explain": "$\\sin u = u - \\dfrac{u^3}{6} + o(u^3)$, $u = 4x$<br>Tử số $= (4 - a)x + (0 - b)x^2 - \\dfrac{32}{3}x^3 + o(x^3)$<br>Giới hạn hữu hạn $\\Leftrightarrow a = 4,\\ b = 0$; khi đó $L = - \\dfrac{32}{3}$<br>Giá trị cần tính: $68$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\ln(1 + 4x) & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ (xét trong lân cận của điểm $0$) có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$-12$.",
    "$-8$.",
    "$4$.",
    "$-4$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = \\ln\\left(4 x + 1\\right)$: $g(0) = 0,\\ g'(0) = 4,\\ g''(0) = -16$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 0,\\ b = 4,\\ 2a = -16 \\Rightarrow a = -8$<br>$a - b + d = -12$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = x\\sqrt{x}$, $y = 0$, $x = 0$ và $x = 2$ bằng",
   "options": [
    "$4 \\pi$.",
    "$4$.",
    "$\\dfrac{8 \\sqrt{2} \\pi}{5}$.",
    "$8 \\pi$."
   ],
   "answer": 0,
   "explain": "$V = \\pi\\displaystyle\\int_0^{2} y^2\\,dx = \\pi\\int_0^{2} x^{3}\\,dx$<br>$= \\pi\\left[\\dfrac{x^{4}}{4}\\right]_0^{2} = 4 \\pi$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $1, 1, 3$ đơn vị nguyên liệu I; $2, 3, 1$ đơn vị nguyên liệu II và $3, 3, 1$ đơn vị nguyên liệu III. Kho hiện có $130$, $130$ và $150$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$70$.",
    "$80$.",
    "$60$.",
    "$41$."
   ],
   "answer": 0,
   "explain": "Gọi $x, y, z$ là số sản phẩm mỗi loại; giải hệ ba phương trình được $(20;20;30)$<br>Kết quả: $70$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Biết với $|x| < 1$ thì $\\displaystyle\\sum_{n=1}^{+\\infty} n^2x^n = \\dfrac{x(1 + x)}{(1 - x)^3}$. Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{4^n}$ bằng",
   "options": [
    "$\\dfrac{20}{27}$.",
    "$\\dfrac{4}{9}$.",
    "$\\dfrac{5}{27}$.",
    "$\\dfrac{10}{27}$."
   ],
   "answer": 0,
   "explain": "$x = \\dfrac{1}{4}$: $\\dfrac{x(1 + x)}{(1 - x)^3} = \\dfrac{\\frac{1}{4}\\cdot\\frac{5}{4}}{\\left(\\frac{3}{4}\\right)^3} = \\dfrac{20}{27}$<br>Kết quả: $\\dfrac{20}{27}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}2272727\\ldots$ (phần tuần hoàn là 27) bằng $\\dfrac{2}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{27}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$27$.",
    "$17$.",
    "$28$.",
    "$1227$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{27}{10\\cdot100^n} = \\dfrac{27}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{27}{990}$<br>$\\dfrac{2}{10} + \\dfrac{27}{990} = \\dfrac{5}{22} \\Rightarrow a + b = 27$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\cdot3^n}$ bằng",
   "options": [
    "$\\ln\\left(\\dfrac{3}{2}\\right)$.",
    "$\\ln 3$.",
    "$- \\ln\\left(\\dfrac{3}{2}\\right)$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$-\\ln(1 - x)$ tại $x = \\dfrac13$<br>Vậy tổng của chuỗi bằng $\\ln\\left(\\dfrac{3}{2}\\right)$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $(1 + x^2)y' = xy$ thỏa mãn $y(0) = 2$. Giá trị của $y\\left(\\sqrt3\\right)$ bằng",
   "options": [
    "$4$.",
    "$2$.",
    "$5$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{y} = \\dfrac{x\\,dx}{1+x^2} \\Rightarrow \\ln|y| = \\dfrac12\\ln(1+x^2) + C$<br>$y(0) = 2 \\Rightarrow y = 2 \\sqrt{x^{2} + 1}$<br>$y\\left(\\sqrt3\\right) = 4$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - 3y = x^{4}e^x$ $(x > 0)$ thỏa mãn $y(1) = 1 + e$. Giá trị của $y(2)$ bằng",
   "options": [
    "$8 + 8 e^{2}$.",
    "$8 e^{2}$.",
    "$1 + e^{2}$.",
    "$8 e^{2} - 8$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{4}$: $\\left(\\dfrac{y}{x^{3}}\\right)' = e^x \\Rightarrow y = x^{3}(e^x + C)$<br>$y(1) = e + C = 1 + e \\Rightarrow C = 1$<br>$y(2) = 8\\left(e^2 + 1\\right) = 8 + 8 e^{2}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Chất phóng xạ rađi $^{226}Ra$ có chu kỳ bán rã 1600 năm và phân rã với tốc độ tỉ lệ với lượng hiện có, tức $m' = -km$ với $k = \\dfrac{\\ln 2}{1600}$. Thời gian (năm) để một mẫu chất này còn lại 75% khối lượng ban đầu (làm tròn đến hàng phần chục) là",
   "options": [
    "664,1.",
    "400,0.",
    "800,0.",
    "1200,0."
   ],
   "answer": 0,
   "explain": "$m' = -km \\Rightarrow m(t) = m_0e^{-kt} = m_0\\cdot2^{-t/1600}$<br>$2^{-t/1600} = \\dfrac{75}{100} \\Rightarrow \\dfrac{t}{1600} = \\log_2\\dfrac{100}{75}$<br>$t = 1600\\cdot\\dfrac{\\ln(100/75)}{\\ln 2} \\approx 664{,}1$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 4,\\ y \\ge |x|\\}$. Giá trị của tích phân $\\displaystyle\\iint_D (x^2 + y^2)\\,dxdy$ bằng",
   "options": [
    "$2 \\pi$.",
    "$\\dfrac{4 \\pi}{3}$.",
    "$4 \\pi$.",
    "$\\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 2,\\ \\dfrac{\\pi}{4} \\le \\varphi \\le \\dfrac{3\\pi}{4}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{2}\\left(r^{2}\\right)r\\,dr = \\int 4\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = 2 \\pi$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là phần của hình cầu $x^2 + y^2 + z^2 \\le 9$ nằm trong góc phần tám thứ nhất ($x \\ge 0,\\ y \\ge 0,\\ z \\ge 0$). Giá trị của tích phân $\\displaystyle\\iiint_V xyz\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{243}{16}$.",
    "$\\dfrac{243}{2}$.",
    "$\\dfrac{243}{8}$.",
    "$\\dfrac{729}{8}$."
   ],
   "answer": 0,
   "explain": "$xyz = \\rho^3\\sin^2\\theta\\cos\\theta\\sin\\varphi\\cos\\varphi$, $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$<br>$I = \\displaystyle\\int_0^{\\pi/2}\\sin\\varphi\\cos\\varphi\\,d\\varphi\\int_0^{\\pi/2}\\sin^3\\theta\\cos\\theta\\,d\\theta\\int_0^{3}\\rho^5\\,d\\rho$<br>$= \\dfrac12\\cdot\\dfrac14\\cdot\\dfrac{729}{6} = \\dfrac{243}{16}$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = 9$ với mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = x^2 + y^2 + 5$. Khối lượng của sợi dây, tức $\\displaystyle\\oint_L \\rho\\,ds$, bằng",
   "options": [
    "$84 \\pi$.",
    "$126 \\pi$.",
    "$28 \\pi$.",
    "$42 \\pi$."
   ],
   "answer": 0,
   "explain": "Trên $L$, $\\rho = 9 + 5$ là hằng số nên khối lượng bằng $(9 + 5)\\cdot2\\pi\\cdot3$<br>Kết quả: $84 \\pi$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (6 x y + 2 y^{2} + 1)\\,dx + (mx^2 + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$3$.",
    "$-3$.",
    "$6$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 6 x + 4 y,\\quad Q'_x = 2mx + 4 y$<br>Đồng nhất hệ số: $m = 3$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-31 & 15 \\\\ -70 & 34\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$17$.",
      "$9$.",
      "$-4$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (3)\\lambda + (-4) = 0$ có nghiệm $4$ và $-1$<br>Kết quả: $17$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{5}$ bằng",
     "options": [
      "$1023$.",
      "$243$.",
      "$-1024$.",
      "$15$."
     ],
     "answer": 0,
     "explain": "$A^{5} = PD^{5}P^{-1}$ có cùng vết với $D^{5}$: $(4)^{5} + (-1)^{5}$<br>Kết quả: $1023$"
    },
    {
     "q": "Định thức của ma trận $A^2 - A$ bằng",
     "options": [
      "$24$.",
      "$20$.",
      "$14$.",
      "$-24$."
     ],
     "answer": 0,
     "explain": "$A^2 - 1A$ có các trị riêng $\\lambda^2 - 1\\lambda$: $12$ và $2$; định thức bằng tích của chúng<br>Kết quả: $24$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 8 x + y^{2} - 6 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 100\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 100$.",
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
     "explain": "Điểm dừng $(4;3)$ nằm trong $D$ và $f = (x - 4)^2 + (y - 3)^2 - 25$<br>Kết quả: $-25$"
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
     "explain": "Trên biên $f = 100 - 2(4 x + 3 y)$, lớn nhất khi $4 x + 3 y$ nhỏ nhất, tức bằng $-10\\cdot5$<br>Kết quả: $200$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-8$.",
      "$8$.",
      "$4$.",
      "$-6$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(4;3)$: $\\left(-8;-6\\right)$<br>Kết quả: $-8$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = |i - j|$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(A^{-1}A^TA\\right)$.",
   "answer": [
    "-12"
   ],
   "explain": "$A = \\begin{pmatrix}0 & 1 & 2 & 3 \\\\ 1 & 0 & 1 & 2 \\\\ 2 & 1 & 0 & 1 \\\\ 3 & 2 & 1 & 0\\end{pmatrix}$, $\\det A = -12$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\dfrac{1}{\\det A}\\cdot\\det A\\cdot\\det A$ $= -12$<br>Đáp số: $-12$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, khử về dạng tam giác; $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y,z) = x + 4 y + 8 z$ trên mặt cầu $x^2 + y^2 + z^2 = 16$.",
   "answer": [
    "36"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(1;4;8)$; $f_{\\max} = 4\\sqrt{1^2 + 4^2 + 8^2} = 36$<br>Đáp số: $36$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{7^n x^n}{n + 2^n}$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $2 a + 3 b$.",
   "answer": [
    "25"
   ],
   "explain": "$\\sqrt[n]{|a_n|} \\to \\dfrac{7}{2}$ nên $R = \\dfrac{2}{7}$<br>Đáp số: $25$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 3y = 2e^{x}$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "20"
   ],
   "explain": "$k = 1$ là nghiệm đơn của phương trình đặc trưng nên $y^* = -xe^{x}$; $y = e^{x} + e^{3x} - xe^{x}$; $y(1) \\approx 20{,}09$<br>Đáp số: $20$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt elipxoit $\\dfrac{x^2}{9} + \\dfrac{y^2}{16} + \\dfrac{z^2}{4} = 1$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "32"
   ],
   "explain": "Đổi biến $x = 3u,\\ y = 4v,\\ z = 2w$ (Jacobian $24$) đưa về hình cầu đơn vị: $V = 24\\cdot\\dfrac{4\\pi}{3} = 32\\pi$<br>Đáp số: $32$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
