// ĐỀ SỐ 19 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-19",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 19",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Phát triển bền vững",
  "prompt": "Mỗi ngày Mai đều mang theo bình nước và túi vải khi đi làm, phân loại rác tại nhà dù khu phố của cô chưa thu gom riêng từng loại. Một đồng nghiệp nói: “Cả thế giới xả rác, một mình em thì thay đổi được gì? Chuyện môi trường là việc của Nhà nước và các nhà máy.” Mai trả lời: “Nếu ai cũng đợi người khác làm trước thì sẽ không ai bắt đầu.”",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày quan điểm của mình về cuộc đối thoại trên và về vai trò của những hành động nhỏ của mỗi cá nhân đối với mục tiêu phát triển bền vững.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (1;m;3)$ và $v = (m;-2;4)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
   "options": [
    "$318$.",
    "$50$.",
    "$463$.",
    "$30$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = (1)\\cdot m + m\\cdot(-2) + (3)\\cdot(4) = 12 - m$<br>$u \\perp v \\Leftrightarrow 12 - m = 0 \\Leftrightarrow m = 12$<br>$u + v = (13;10;7)$<br>$|u + v|^2 = (13)^2 + (10)^2 + (7)^2 = 318$",
   "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(2;0),\\ u_2(3;3),\\ u_3(1;1),\\ u_4(-1;1)\\}$. Có bao nhiêu hệ con khác rỗng của $S$ độc lập tuyến tính?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$9$.",
    "$15$.",
    "$10$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Có 4 hệ một véc tơ và 5 hệ hai véc tơ độc lập tuyến tính<br>Kết quả: $9$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & -2 & 1 & 0 & 1 \\\\ 3 & 0 & 0 & -1 & 2 \\\\ 4 & -2 & 1 & -1 & 3 \\\\ -2 & -2 & 1 & 1 & -1\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$3$.",
    "$2$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng: $A \\to \\begin{pmatrix}1 & -2 & 1 & 0 & 1 \\\\ 0 & 6 & -3 & -1 & -1 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}A = 2$<br>Số chiều không gian nghiệm $= 5 - 2 = 3$",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-2 & 0 \\\\ 3 & 1\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x - y$ bằng",
   "options": [
    "$-3$.",
    "$1$.",
    "$2$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}4 & 0 \\\\ -3 & 1\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = -1$<br>So sánh phần tử hàng 1, cột 1: $4 = -1\\cdot(-2) + y \\Rightarrow y = 2$<br>$x - y = -3$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = -2$. Giá trị của $\\det\\left(A^2A^T\\right)$ bằng",
   "options": [
    "$-8$.",
    "$4$.",
    "$8$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(A^2A^T\\right) = (\\det A)^2\\cdot\\det A$<br>Thay $\\det A = -2$: kết quả $-8$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông khả nghịch cùng cấp $n \\ge 2$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$AB$ khả nghịch và $(AB)^{-1} = B^{-1}A^{-1}$.",
    "$A + B$ khả nghịch.",
    "$(A + B)^{-1} = A^{-1} + B^{-1}$.",
    "$(AB)^{-1} = A^{-1}B^{-1}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $AB$ khả nghịch và $(AB)^{-1} = B^{-1}A^{-1}$. $(AB)(B^{-1}A^{-1}) = AIA^{-1} = I$.<br><b>Sai:</b> $A + B$ khả nghịch. $A = I$, $B = -I$ đều khả nghịch nhưng $A + B = 0$.<br><b>Sai:</b> $(A + B)^{-1} = A^{-1} + B^{-1}$. Với $A = B = I$: $(A + B)^{-1} = \\dfrac12I$ còn $A^{-1} + B^{-1} = 2I$.<br><b>Sai:</b> $(AB)^{-1} = A^{-1}B^{-1}$. Phải đảo thứ tự: $A^{-1}B^{-1} = (BA)^{-1}$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}3 & 2 & 2 & 2 \\\\ 2 & 3 & 2 & 2 \\\\ 2 & 2 & 3 & 2 \\\\ 2 & 2 & 2 & 3\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$9$.",
    "$1$.",
    "$65$.",
    "$-9$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1 + h_2 + h_3 + h_4$: hàng 1 trở thành $(9;9;9;9)$, rút $9$ ra ngoài định thức<br>$h_i \\to h_i - (2)h_1\\ (i = 2,3,4)$: được ma trận tam giác có đường chéo $1;\\ 1;\\ 1;\\ 1$<br>$\\det A = (9)\\cdot(1)^3 = 9$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{x} - 1 - \\sin x}{x^2}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$1$.",
    "$0$.",
    "$- \\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "Đặt $u = x$: $e^{u} - 1 = u + \\dfrac{u^2}{2} + o(u^2),\\quad \\sin u = u + o(u^2)$<br>$e^{u} - 1 - \\sin u = \\dfrac{u^2}{2} + o(u^2) = \\dfrac{1x^2}{2} + o(x^2)$<br>$\\lim = \\dfrac{1}{2} = \\dfrac{1}{2}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{2 x + 2}{x^{2} + x - 2}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$y = \\dfrac{2 \\left(x + 1\\right)}{\\left(x - 1\\right) \\left(x + 2\\right)}$<br>Có hai tiệm cận đứng $x = -2,\\ x = 1$, tiệm cận ngang $y = 0$<br>Tổng cộng: $3$ đường tiệm cận",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = (1 + x)\\sqrt{1 + x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$- \\dfrac{1}{16}$.",
    "$\\dfrac{3}{8}$.",
    "$- \\dfrac{3}{8}$.",
    "$\\dfrac{1}{16}$."
   ],
   "answer": 0,
   "explain": "Nhân lại, gom theo bậc: $f(x) = 1 + \\dfrac{3}{2}x + \\dfrac{3}{8}x^{2} - \\dfrac{1}{16}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{1}{16}$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm số $f(x,y,z) = x y + x z + y z$. Đạo hàm của $f$ tại điểm $M(2;-1;2)$ theo hướng của véc tơ $\\vec l = (2;1;2)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{8}{3}$.",
    "$8$.",
    "$6$.",
    "$- \\dfrac{8}{3}$."
   ],
   "answer": 0,
   "explain": "$f'_x = y + z,\\quad f'_y = x + z,\\quad f'_z = x + y$<br>$\\nabla f(M) = (1;4;1)$<br>$|\\vec l| = \\sqrt{9} = 3$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{8}{3} = \\dfrac{8}{3}$",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Người ta tính lực hấp dẫn $F = G\\dfrac{m_1m_2}{d^2}$ giữa hai vật (các khối lượng đo chính xác, $G$ là hằng số) từ hai đại lượng đo được. Biết khoảng cách $d$ được đo với sai số tương đối không quá 2% và hằng số tỉ lệ dùng để hiệu chỉnh thiết bị (coi như một thừa số bậc nhất) với sai số tương đối không quá 2%. Dùng vi phân toàn phần của $\\ln F$, sai số tương đối lớn nhất của $F$ xấp xỉ bằng",
   "options": [
    "6%.",
    "4%.",
    "2%.",
    "8%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln F = \\pm2\\ln u \\pm 1\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta F}{F} \\le 2\\cdot\\dfrac{\\Delta u}{u} + 1\\cdot\\dfrac{\\Delta v}{v}$<br>$= 2\\cdot2\\% + 1\\cdot2\\% = 6\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Một mảnh vườn hình chữ nhật có hai kích thước $x > 0,\\ y > 0$ (mét) thỏa mãn ràng buộc về vật liệu rào $2 x + 3 y = 24$. Diện tích $S = xy$ lớn nhất của mảnh vườn bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$24$.",
    "$48$.",
    "$96$.",
    "$144$."
   ],
   "answer": 0,
   "explain": "$L = xy - \\lambda(2 x + 3 y - 24)$<br>$L'_x = y - 2 \\lambda = 0,\\quad L'_y = x - 3 \\lambda = 0 \\Rightarrow y = 2 \\lambda,\\ x = 3 \\lambda$<br>Thay vào ràng buộc: $12 \\lambda = 24 \\Rightarrow \\lambda = 2$<br>$x = 6,\\ y = 4$, $S_{\\max} = 24$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho $c$ là số nguyên dương. Giá trị lớn nhất của $c$ để chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2c^n}{5^n}$ hội tụ là",
   "options": [
    "$4$.",
    "$5$.",
    "$3$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{u_{n+1}}{u_n} \\to \\dfrac{c}{5}$<br>Hội tụ khi $c < 5$; với $c = 5$ thì $u_n = n^2 \\not\\to 0$<br>Giá trị nguyên dương lớn nhất: $4$",
   "note": "Khi tỉ số D’Alembert bằng đúng 1 thì tiêu chuẩn không kết luận được: phải xét riêng giá trị biên của $c$."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n!}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\ln(n+1)}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\sin\\dfrac1n$. Có bao nhiêu chuỗi bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối) trong bốn chuỗi trên?",
   "options": [
    "$2$.",
    "$4$.",
    "$0$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\sum\\frac{1}{n^2}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 2: $\\frac{|u_{n+1}|}{|u_n|} = \\frac{1}{n+1} \\to 0$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 3: $\\frac{1}{\\ln(n+1)} \\downarrow 0$ (Leibniz), $\\frac{1}{\\ln(n+1)} > \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 4: $\\sin\\frac1n \\downarrow 0$ (Leibniz), $\\sin\\frac1n \\sim \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Số chuỗi bán hội tụ: $2$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân toàn phần?",
   "options": [
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$.",
    "$(x + y)dx + (y - x)dy = 0$.",
    "$2xy\\,dx + (y^2 - x^2)dy = 0$.",
    "$(x^2 + y)dx + (y - x)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — Điều kiện $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$ đối với $P\\,dx + Q\\,dy = 0$: $\\dfrac{\\partial P}{\\partial y} = 4xy$, $\\dfrac{\\partial Q}{\\partial x} = 4xy$<br><b>Sai:</b> $(x + y)dx + (y - x)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau<br><b>Sai:</b> $2xy\\,dx + (y^2 - x^2)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 2x$, $\\dfrac{\\partial Q}{\\partial x} = -2x$, hai đạo hàm riêng khác nhau<br><b>Sai:</b> $(x^2 + y)dx + (y - x)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = 2xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{3}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{1}{6}$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Đặt $z = \\dfrac1y \\Rightarrow z' = -\\dfrac{y'}{y^2}$; chia phương trình cho $-y^2$:<br>$z' - \\dfrac{z}{x} = - 2 x$<br>$\\left(\\dfrac{z}{x}\\right)' = -2 \\Rightarrow z = x(C - 2 x)$<br>$y(1) = \\dfrac{1}{C - 2} = \\dfrac{1}{3} \\Rightarrow C = 5$<br>$y(2) = \\dfrac{1}{2(5 - 4)} = \\dfrac{1}{2}$",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 4500 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 500$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số cá trong hồ sau 6 tháng bằng",
   "options": [
    "$2250$.",
    "$4000$.",
    "$1500$.",
    "$2251$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{4500}{1 + A} = 500 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{2}\\cdot6} = 2^{-3} = \\dfrac{1}{8}$<br>$P(6) = \\dfrac{4500}{1 + \\frac{8}{8}} = 2250$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Cho $y_1, y_2$ là hai nghiệm của phương trình tuyến tính thuần nhất $y'' + p(x)y' + q(x)y = 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$C_1y_1 + C_2y_2$ là nghiệm của phương trình với mọi hằng số $C_1, C_2$.",
    "$y_1\\cdot y_2$ là nghiệm của phương trình.",
    "$y = C_1y_1 + C_2y_2$ luôn là nghiệm tổng quát của phương trình.",
    "$y_1 + 1$ là nghiệm của phương trình."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $C_1y_1 + C_2y_2$ là nghiệm của phương trình với mọi hằng số $C_1, C_2$. Vế trái tuyến tính theo $y$ nên tổ hợp tuyến tính của các nghiệm vẫn là nghiệm (nguyên lí chồng chất).<br><b>Sai:</b> $y_1\\cdot y_2$ là nghiệm của phương trình. Với $y'' = 0$: $y_1 = y_2 = x$ là nghiệm nhưng $x^2$ không là nghiệm.<br><b>Sai:</b> $y = C_1y_1 + C_2y_2$ luôn là nghiệm tổng quát của phương trình. Chỉ đúng khi $y_1, y_2$ độc lập tuyến tính; nếu $y_2 = 2y_1$ thì thực chất chỉ có một hằng số.<br><b>Sai:</b> $y_1 + 1$ là nghiệm của phương trình. Với $y'' + y = 0$: $\\sin x$ là nghiệm nhưng $\\sin x + 1$ cho vế trái bằng $1$."
  },
  {
   "q": "Tích phân $I = \\displaystyle\\int_{0}^{8} dy\\int_{\\sqrt[3]{y}}^{2} \\sqrt{1 + x^4}\\,dx$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
   "options": [
    "$- \\dfrac{1}{6} + \\dfrac{17 \\sqrt{17}}{6}$.",
    "$- \\dfrac{1}{3} + \\dfrac{17 \\sqrt{17}}{3}$.",
    "$- \\dfrac{1}{12} + \\dfrac{17 \\sqrt{17}}{12}$.",
    "$\\dfrac{5}{6} + \\dfrac{17 \\sqrt{17}}{6}$."
   ],
   "answer": 0,
   "explain": "Đổi thứ tự lấy tích phân; tích phân trong tính được ngay, còn lại: $I = \\displaystyle\\int_{0}^{2} x^{3} \\sqrt{x^{4} + 1}\\,dx$<br>$= \\left[\\dfrac{x^{4} \\sqrt{x^{4} + 1}}{6} + \\dfrac{\\sqrt{x^{4} + 1}}{6}\\right]_{0}^{2} = - \\dfrac{1}{6} + \\dfrac{17 \\sqrt{17}}{6}$",
   "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 4$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 2,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{4},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$\\dfrac{8 \\pi \\left(2 - \\sqrt{2}\\right)}{3}$.",
    "$\\dfrac{4 \\pi^{2}}{3}$.",
    "$\\dfrac{32 \\pi}{3}$.",
    "$\\dfrac{4 \\pi \\left(2 - \\sqrt{2}\\right)}{3}$."
   ],
   "answer": 0,
   "explain": "$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{4}}\\sin\\theta\\,d\\theta\\int_0^{2}\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot\\left(1 - \\cos\\dfrac{\\pi}{4}\\right)\\cdot\\dfrac{8}{3} = \\dfrac{8 \\pi \\left(2 - \\sqrt{2}\\right)}{3}$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1400 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 466 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$280$.",
    "$1120$.",
    "$700$.",
    "$373$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 10\\%\\cdot(1400 - x)$<br>$50x = 14000 \\Rightarrow x = 280$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = -2$.",
    "$m = 1$.",
    "$m \\ne 1$ và $m \\ne -2$.",
    "$m = -2$ hoặc $m = 1$."
   ],
   "answer": 0,
   "explain": "$\\det A = \\left(m - 1\\right)^{2} \\left(m + 2\\right)$ nên $\\operatorname{rank}A = 3 \\Leftrightarrow m \\ne 1$ và $m \\ne -2$<br>Với $m = 1$: ba hàng của $A$ bằng nhau và khác không nên $\\operatorname{rank}A = 1$<br>Với $m = -2$: tổng ba hàng bằng véc tơ không, hai hàng đầu không tỉ lệ nên $\\operatorname{rank}A = 2$<br>Vậy hạng của $A$ bằng 2 $\\Leftrightarrow m = -2$",
   "note": "$\\det A = 0$ mới cho biết hạng nhỏ hơn 3; phải thay từng giá trị $m$ để biết hạng bằng 1 hay 2."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 0 \\\\ 0 & 2\\end{pmatrix}$. Mọi ma trận vuông cấp 2 giao hoán với $A$ (tức thỏa mãn $AX = XA$) đều có dạng nào sau đây, với $a, b$ là các số thực tùy ý?",
   "options": [
    "$\\begin{pmatrix}a & 0 \\\\ 0 & b\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ 0 & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ b & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & 0 \\\\ b & a\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "Đặt $X = \\begin{pmatrix}x & y \\\\ z & t\\end{pmatrix}$<br>$AX = \\begin{pmatrix}x & y \\\\ 2 z & 2 t\\end{pmatrix},\\quad XA = \\begin{pmatrix}x & 2 y \\\\ z & 2 t\\end{pmatrix}$<br>So sánh từng phần tử: $y = 0$ và $z = 0$<br>Vậy $X = \\begin{pmatrix}a & 0 \\\\ 0 & b\\end{pmatrix}$",
   "note": "Đặt $X$ với bốn ẩn, tính $AX$ và $XA$ rồi so sánh từng phần tử."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y = 0\\\\ -2x + my + 3z = 0\\\\ x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$10$.",
    "$-4$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 4 m + 3 = \\left(m + 1\\right) \\left(m + 3\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -3$ hoặc $m = -1$<br>Giá trị cần tìm: $10$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + x) - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a - 2b + 3L$ bằng",
   "options": [
    "$3$.",
    "$\\dfrac{5}{6}$.",
    "$1$.",
    "$\\dfrac{8}{3}$."
   ],
   "answer": 0,
   "explain": "$\\ln(1 + u) = u - \\dfrac{u^2}{2} + \\dfrac{u^3}{3} + o(u^3)$, $u = x$<br>Tử số $= (1 - a)x + (- \\dfrac{1}{2} - b)x^2 + \\dfrac{1}{3}x^3 + o(x^3)$<br>Giới hạn hữu hạn $\\Leftrightarrow a = 1,\\ b = - \\dfrac{1}{2}$; khi đó $L = \\dfrac{1}{3}$<br>Giá trị cần tính: $3$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\cos 2x & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$-4$.",
    "$-2$.",
    "$1$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = \\cos{\\left(2 x \\right)}$: $g(0) = 1,\\ g'(0) = 0,\\ g''(0) = -4$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 1,\\ b = 0,\\ 2a = -4 \\Rightarrow a = -2$<br>$2a + b = -4$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} xe^{-3x}\\,dx$ bằng",
   "options": [
    "$\\dfrac{1}{9}$.",
    "$\\dfrac{1}{3}$.",
    "$3$.",
    "$\\dfrac{2}{9}$."
   ],
   "answer": 0,
   "explain": "Từng phần với $u = x,\\ dv = e^{-3x}dx$: $\\displaystyle\\int_0^{+\\infty}xe^{-3x}dx = \\left[-\\dfrac{x}{3}e^{-3x}\\right]_0^{+\\infty} + \\dfrac{1}{3}\\int_0^{+\\infty}e^{-3x}dx$<br>$= 0 + \\dfrac{1}{3}\\cdot\\dfrac{1}{3} = \\dfrac{1}{9}$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 100 + 0{,}75(Y - T)$; $T = 0{,}2Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 100$ và chi tiêu chính phủ $G_0 = 200$. Giá trị của mức thu nhập cân bằng $Y^*$ bằng",
   "options": [
    "$1000$.",
    "$700$.",
    "$200$.",
    "$400$."
   ],
   "answer": 0,
   "explain": "Thế $T$ vào $C$ rồi vào phương trình đầu: $Y^* = 1000,\\ T^* = 200,\\ C^* = 700$<br>Kết quả: $1000$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{n+1}{4^n}$ bằng<span class=\"q-hint\">Gợi ý: đạo hàm từng số hạng chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty} x^{n+1}$.</span>",
   "options": [
    "$\\dfrac{16}{9}$.",
    "$\\dfrac{4}{3}$.",
    "$\\dfrac{4}{9}$.",
    "$\\dfrac{32}{9}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}x^{n+1} = \\dfrac{x}{1-x} \\Rightarrow \\sum_{n\\ge0}(n+1)x^n = \\left(\\dfrac{x}{1-x}\\right)' = \\dfrac{1}{(1-x)^2}$<br>$x = \\dfrac{1}{4}$: $\\dfrac{1}{\\left(\\frac{3}{4}\\right)^2} = \\dfrac{16}{9}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Một quả bóng được thả rơi từ độ cao 10 mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\\dfrac{1}{2}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng",
   "options": [
    "$30$.",
    "$20$.",
    "$40$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "$10 + 2\\displaystyle\\sum_{n=1}^{+\\infty}10\\left(\\dfrac{1}{2}\\right)^n = 10 + 2\\cdot\\dfrac{10\\cdot\\frac{1}{2}}{1 - \\frac{1}{2}} = 30$<br>Kết quả: $30$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n-1}}{n\\cdot3^n}$ bằng",
   "options": [
    "$\\ln\\left(\\dfrac{4}{3}\\right)$.",
    "$\\ln\\left(\\dfrac{3}{2}\\right)$.",
    "$- \\ln\\left(\\dfrac{4}{3}\\right)$.",
    "$\\dfrac{1}{4}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge1}\\dfrac{(-1)^{n-1}x^n}{n} = \\ln(1 + x)$ tại $x = \\dfrac13$<br>Vậy tổng của chuỗi bằng $\\ln\\left(\\dfrac{4}{3}\\right)$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = e^{x - y}$ thỏa mãn $y(0) = \\ln 2$. Giá trị của $y\\left(\\ln 3\\right)$ bằng",
   "options": [
    "$\\ln 4$.",
    "$\\ln 2$.",
    "$1 + \\ln 4$.",
    "$\\ln 16$."
   ],
   "answer": 0,
   "explain": "Tách biến: $e^y\\,dy = e^x\\,dx \\Rightarrow e^y = e^x + C$<br>$y(0) = \\ln 2 \\Rightarrow y = \\ln\\left(e^{x} + 1\\right)$<br>$y\\left(\\ln 3\\right) = \\ln 4$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + y = e^{-x}$ thỏa mãn $y(0) = 1$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{2}{e}$.",
    "$e^{-1}$.",
    "$2 e$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{x}$: $\\left(ye^{x}\\right)' = 1$<br>$ye^{x} = 1x + C \\Rightarrow y = (1x + C)e^{-x}$<br>$y(0) = C = 1 \\Rightarrow y(1) = (1 + 1)e^{-1} = \\dfrac{2}{e}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một vật khối lượng 5 kg rơi từ trạng thái nghỉ, chịu lực cản không khí tỉ lệ với vận tốc với hệ số $k = 1\\,kg/s$, tức vận tốc $v(t)$ thỏa mãn $5v' = 5g - 1v$ (lấy $g = 9{,}8\\,m/s^2$). Vận tốc của vật sau 2 giây (làm tròn đến hàng phần chục, đơn vị m/s) là",
   "options": [
    "16,2.",
    "49,0.",
    "19,6.",
    "32,8."
   ],
   "answer": 0,
   "explain": "$v' + \\dfrac{1}{5}v = 9{,}8$ (tuyến tính cấp một), $v(0) = 0$<br>$v(t) = \\dfrac{mg}{k}\\left(1 - e^{-kt/m}\\right) = 49\\left(1 - e^{-0{,}2t}\\right)$<br>$v(2) = 49\\left(1 - e^{-0{,}4}\\right) \\approx 16{,}2$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 9,\\ 0 \\le y \\le \\sqrt{3}\\,x\\}$. Giá trị của tích phân $\\displaystyle\\iint_D (x^2 + y^2)\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{27 \\pi}{4}$.",
    "$3 \\pi$.",
    "$\\dfrac{27 \\pi}{2}$.",
    "$\\dfrac{81 \\pi}{8}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 3,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{3}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{3}\\left(r^{2}\\right)r\\,dr = \\int \\dfrac{81}{4}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{27 \\pi}{4}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 4$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$2 \\pi$.",
    "$4 \\pi$.",
    "$\\pi$.",
    "$8 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu, $0 \\le \\theta \\le \\dfrac{\\pi}{4}$: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/4}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{2}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac14\\cdot\\dfrac{16}{4} = 2 \\pi$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là cung parabol $y = \\dfrac{x^2}{2}$ đi từ $O(0;0)$ đến $A\\left(\\sqrt{15};\\dfrac{15}{2}\\right)$. Giá trị của tích phân $\\displaystyle\\int_L x\\,ds$ bằng",
   "options": [
    "$21$.",
    "$\\dfrac{64}{3}$.",
    "$\\dfrac{21}{2}$.",
    "$\\dfrac{63}{2}$."
   ],
   "answer": 0,
   "explain": "$ds = \\sqrt{1 + x^2}\\,dx$; $\\displaystyle\\int_0^{\\sqrt{15}} x\\sqrt{1 + x^2}\\,dx = \\dfrac{(1 + x^2)^{3/2}}{3}\\Big|_0^{\\sqrt{15}}$<br>Kết quả: $21$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(3;0),\\ B(0;2)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C y\\,dx + (x^{2} + x)\\,dy$ bằng",
   "options": [
    "$6$.",
    "$-6$.",
    "$3$.",
    "$12$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = 2 x$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{2 - \\dfrac{2 x}{3}}\\left(2 x\\right)dy$<br>$I = 6$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y - z = 0\\\\ y - 2z = -3\\\\ 2y + mz = -2\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = -2$, định thức của ma trận $A$ bằng",
     "options": [
      "$2$.",
      "$4$.",
      "$-2$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$\\det A = m + 4$<br>Với $m = -2$: $\\det A = 2$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$-4$.",
      "$-2$.",
      "$4$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = m + 4 = 0 \\Leftrightarrow m = -4$"
    },
    {
     "q": "Khi $m = -2$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$4$.",
      "$5$.",
      "$-4$.",
      "$1$."
     ],
     "answer": 0,
     "explain": "Với $m = -2$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 2$)<br>$(x_0;y_0;z_0) = (1;1;2)$<br>$x_0 + y_0 + z_0 = 4$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} + x y + y^{2}$ và điểm $M(2;2)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$12$.",
      "$0$.",
      "$36$.",
      "$6$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x + y,\\quad f'_y = x + 2 y$<br>$\\nabla f(M) = (6;6) \\Rightarrow p + q = 12$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (-3;4)$ bằng",
     "options": [
      "$\\dfrac{6}{5}$.",
      "$6$.",
      "$- \\dfrac{6}{5}$.",
      "$\\dfrac{12}{5}$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(6)\\cdot(-3) + (6)\\cdot(4)}{5} = \\dfrac{6}{5}$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$-12$.",
      "$12$.",
      "$36$.",
      "$-11$."
     ],
     "answer": 0,
     "explain": "$z = 12 + (6)(x - 2) + (6)(y - 2)$<br>Cho $x = y = 0$: $z = -12$",
     "note": "Gradient, đạo hàm theo hướng và mặt phẳng tiếp xúc đều dùng chung hai giá trị $f'_x(M)$, $f'_y(M)$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m\\end{pmatrix}$ với $m$ là số nguyên dương. Biết $\\det A = 4$, tìm $m$.",
   "answer": [
    "2"
   ],
   "explain": "$\\det A = m^{3} - 3 m + 2 = \\left(m - 1\\right)^{2} \\left(m + 2\\right)$<br>$m^{3} - 3 m + 2 = 4 \\Leftrightarrow \\left(m - 2\\right) \\left(m + 1\\right)^{2} = 0$<br>Nghiệm nguyên dương duy nhất: $m = 2$",
   "note": "Lập $\\det A$ theo $m$ rồi giải phương trình; chỉ nhận nghiệm nguyên dương."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 4xy$ với điều kiện $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$.",
   "answer": [
    "12"
   ],
   "explain": "Đặt $x = 3\\cos t,\\ y = 2\\sin t$: $f = 4\\cdot3\\cdot2\\sin t\\cos t$, lớn nhất bằng $\\dfrac{4\\cdot3\\cdot2}{2} = 12$<br>Đáp số: $12$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(2 x + 3)^{n}}{n^2\\cdot5^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "5"
   ],
   "explain": "Đặt $t = 2 x + 3$: chuỗi $\\sum\\dfrac{t^n}{n^2\\cdot5^n}$ hội tụ khi và chỉ khi $|t| \\le 5$ (tại hai đầu mút là chuỗi $\\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-5 \\le 2 x + 3 \\le 5 \\Leftrightarrow -4 \\le x \\le 1$<br>$\\beta - \\alpha = 5$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = 2e^{x}$ với điều kiện $y(0) = -1;\\ y'(0) = 2$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "15"
   ],
   "explain": "$k = 1$ là nghiệm đơn của phương trình đặc trưng nên $y^* = xe^{x}$; $y = -e^{-x} + xe^{x}$; $y(2) \\approx 14{,}64$<br>Đáp số: $15$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt $z = 0$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "18"
   ],
   "explain": "Tọa độ cầu: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{2}}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^2\\,d\\rho = 18\\pi$<br>Đáp số: $18$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
