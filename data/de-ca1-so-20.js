// ĐỀ SỐ 20 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-20",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 20",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản sắc và hội nhập",
  "prompt": "Sau năm năm du học và làm việc ở nước ngoài, một kỹ sư trẻ nhận được hai lời mời: tiếp tục ở lại với mức lương cao và điều kiện nghiên cứu hiện đại, hoặc trở về làm việc tại một viện nghiên cứu trong nước, thu nhập thấp hơn nhiều nhưng “được làm việc cho quê hương”. Có người nói với anh: “Ở đâu cũng có thể đóng góp cho đất nước”; người khác lại nói: “Không trở về thì lấy ai xây dựng đất nước?”",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về hai ý kiến trên và về cách người trẻ giữ gìn cội nguồn, cống hiến cho đất nước trong thời kỳ hội nhập.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (5;5;-2)$ và $v = (-2;-2;-1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
   "options": [
    "$10$.",
    "$-18$.",
    "$-2$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -18,\\quad \\langle v, v\\rangle = 9 \\Rightarrow t = -2$<br>$p = -2v = (4;4;2)$, tổng các tọa độ: $10$",
   "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (3;2;0),\\ u_2 = (-1;0;-1)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
   "options": [
    "$(1;-1;-2)$.",
    "$(7;4;1)$.",
    "$(4;2;1)$.",
    "$(5;4;-1)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(1;-1;-2)$ — định thức của ba véc tơ $u_1, u_2$ và véc tơ này bằng $-9 \\ne 0$ nên ba véc tơ độc lập tuyến tính<br><b>Sai:</b> $(7;4;1) = 2 u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(4;2;1) = u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(5;4;-1) = 2 u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$"
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ $S$ gồm $u_1 = (-1;3;3;2),\\ u_2 = (-3;4;8;3),\\ u_3 = (1;7;-1;4),\\ u_4 = (1;2;-2;1)$. Cần bổ sung vào $S$ ít nhất bao nhiêu véc tơ để hệ mới sinh ra toàn bộ $\\mathbb{R}^4$?",
   "options": [
    "$2$.",
    "$0$.",
    "$4$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Xếp các véc tơ thành hàng và đưa về dạng bậc thang: $\\begin{pmatrix}-1 & 3 & 3 & 2 \\\\ 0 & 5 & 1 & 3 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của $S$ bằng $2$, tức $S$ sinh ra một không gian con $2$ chiều<br>Cần thêm ít nhất $4 - 2 = 2$ véc tơ",
   "note": "Hệ sinh ra $\\mathbb{R}^4$ khi hạng bằng 4, nên cần thêm ít nhất $4 -$ hạng véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & -1 \\\\ 2 & -1\\end{pmatrix}$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{5}$ bằng<span class=\"q-hint\">Gợi ý: dùng $A^k = A$ với mọi $k \\ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$.</span>",
   "options": [
    "$64$.",
    "$66$.",
    "$12$.",
    "$128$."
   ],
   "answer": 0,
   "explain": "$(I + A)^n = I + \\displaystyle\\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$<br>$(I + A)^{5} = I + 31A = \\begin{pmatrix}63 & -31 \\\\ 62 & -30\\end{pmatrix}$<br>Tổng các phần tử: $64$",
   "note": "Khi $A^2 = A$ thì mọi lũy thừa của $A$ đều bằng $A$; và $C_n^1 + \\dots + C_n^n = 2^n - 1$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 2$. Giá trị của $\\det\\left(-2A\\right)$ bằng",
   "options": [
    "$-16$.",
    "$-4$.",
    "$16$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det(-2A) = (-2)^3\\cdot\\det A$<br>Thay $\\det A = 2$: kết quả $-16$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận sao cho tích $AB$ xác định, kí hiệu $r(M)$ là hạng của ma trận $M$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$r(AB) \\le \\min\\{r(A), r(B)\\}$.",
    "$r(AB) = r(A)\\cdot r(B)$.",
    "$r(AB) = r(A) + r(B)$.",
    "$r(AB) \\ge \\max\\{r(A), r(B)\\}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $r(AB) \\le \\min\\{r(A), r(B)\\}$. Các cột của $AB$ là tổ hợp tuyến tính các cột của $A$, các hàng của $AB$ là tổ hợp tuyến tính các hàng của $B$.<br><b>Sai:</b> $r(AB) = r(A)\\cdot r(B)$. Với $A = B = I$ cấp 2: $r(AB) = 2$ còn $r(A)\\cdot r(B) = 4$.<br><b>Sai:</b> $r(AB) = r(A) + r(B)$. Với $A = B = I$ cấp 2: $r(AB) = 2$ còn $r(A) + r(B) = 4$.<br><b>Sai:</b> $r(AB) \\ge \\max\\{r(A), r(B)\\}$. $A = \\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$, $B = \\begin{pmatrix}0&0\\\\0&1\\end{pmatrix}$ có $AB = 0$ nên $r(AB) = 0 < 1$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}0 & 3 & -1 & -1 \\\\ 1 & -2 & -2 & -1 \\\\ 0 & 0 & -1 & 3 \\\\ 0 & 0 & 4 & 0\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$36$.",
    "$-15$.",
    "$37$.",
    "$-36$."
   ],
   "answer": 0,
   "explain": "$\\det P = -3,\\quad \\det R = -12$<br>$\\det A = \\det P\\cdot\\det R = (-3)\\cdot(-12) = 36$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\left(\\dfrac{1}{\\sin^2 2x} - \\dfrac{1}{4x^2}\\right)$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{1}{3}$.",
    "$0$.",
    "$\\dfrac{1}{6}$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 2x$: $\\dfrac{1}{\\sin^2u} - \\dfrac{1}{u^2} = \\dfrac{u^2 - \\sin^2u}{u^2\\sin^2u}$<br>$\\sin^2u = \\left(u - \\dfrac{u^3}{6} + o(u^3)\\right)^2 = u^2 - \\dfrac{u^4}{3} + o(u^4)$<br>$\\lim = \\lim\\limits_{u\\to0}\\dfrac{u^4/3}{u^4} = \\dfrac{1}{3}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 1}}{x - 2}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tiệm cận đứng $x = 2$; khi $x \\to +\\infty$ thì $y \\to 1$, khi $x \\to -\\infty$ thì $y \\to -1$ nên có hai tiệm cận ngang $y = \\pm1$<br>Kết quả: $3$",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\ln\\dfrac{1 + 2x}{1 - x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$3$.",
    "$- \\dfrac{3}{2}$.",
    "$18$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "Nhân lại, gom theo bậc: $f(x) = 3x - \\dfrac{3}{2}x^{2} + 3x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $3$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} - 3 x y + y^{2}$. Đạo hàm của $f$ tại điểm $M(2;1)$ theo hướng của véc tơ $\\vec l = (4;-3)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{48}{5}$.",
    "$48$.",
    "$- \\dfrac{43}{5}$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} - 3 y,\\quad f'_y = - 3 x + 2 y$<br>$\\nabla f(M) = (9;-4)$<br>$|\\vec l| = \\sqrt{(4)^2 + (-3)^2} = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(9)\\cdot(4) + (-4)\\cdot(-3)}{5} = \\dfrac{48}{5}$",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Người ta tính thể tích $V = \\pi r^2h$ của một bồn chứa hình trụ từ hai đại lượng đo được. Biết bán kính đáy $r$ được đo với sai số tương đối không quá 3% và chiều cao $h$ với sai số tương đối không quá 2%. Dùng vi phân toàn phần của $\\ln V$, sai số tương đối lớn nhất của $V$ xấp xỉ bằng",
   "options": [
    "8%.",
    "5%.",
    "4%.",
    "12%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln V = \\pm2\\ln u \\pm 1\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta V}{V} \\le 2\\cdot\\dfrac{\\Delta u}{u} + 1\\cdot\\dfrac{\\Delta v}{v}$<br>$= 2\\cdot3\\% + 1\\cdot2\\% = 8\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị lớn nhất của hàm số $f(x,y) = 12 x + 5 y$ với điều kiện $x^2 + y^2 = 9$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$39$.",
    "$13$.",
    "$51$.",
    "$117$."
   ],
   "answer": 0,
   "explain": "$L = 12 x + 5 y - \\lambda(x^2 + y^2 - 9)$<br>$L'_x = 12 - 2\\lambda x = 0,\\quad L'_y = 5 - 2\\lambda y = 0 \\Rightarrow x = \\dfrac{12}{2\\lambda},\\ y = \\dfrac{5}{2\\lambda}$<br>Thay vào ràng buộc: $\\dfrac{169}{4\\lambda^2} = 9 \\Rightarrow \\lambda = \\pm\\dfrac{13}{6}$<br>$\\lambda > 0$: $(x;y) = \\left(\\dfrac{36}{13};\\dfrac{15}{13}\\right)$, $f_{\\max} = 39$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+1}{n^3+2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\sqrt[n]{n}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2n+1}{n\\cdot 3^n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n^3+1}}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $u_n \\sim \\dfrac{1}{n^2}$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 2: $\\sqrt[n]{n} \\to 1 \\Rightarrow u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 3: $\\dfrac{u_{n+1}}{u_n} \\to \\dfrac13 < 1$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 4: $u_n \\sim \\dfrac{1}{n^{3/2}}$ $\\Rightarrow$ hội tụ<br>Số chuỗi phân kỳ: $1$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét chuỗi đan dấu $S = \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n+1}}{n^{2}}$ và gọi $S_n$ là tổng riêng thứ $n$. Theo đánh giá sai số của chuỗi Leibniz, $|S - S_n| \\le a_{n+1}$ với $a_n = \\dfrac{1}{n^{2}}$. Số $n$ nhỏ nhất để đánh giá này bảo đảm $|S - S_n| \\le 0{,}0001$ là",
   "options": [
    "$99$.",
    "$100$.",
    "$98$.",
    "$999$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{(n+1)^{2}} \\le 0{,}0001 \\Leftrightarrow n + 1 \\ge 100$<br>Kết quả: $99$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
   "options": [
    "$xy' - 2y = x^3$.",
    "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$.",
    "$y' = \\dfrac{x + y}{x - y}$.",
    "$y' = e^{x - y}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $xy' - 2y = x^3$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$<br><b>Sai:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = \\dfrac{x + y}{x - y}$ — là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = e^{x - y}$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình đẳng cấp $y' = \\dfrac{y}{x} + \\dfrac{y^2}{x^2}$ $(x > 0)$ thỏa mãn $y(1) = 1$. Bằng phép đặt $y = ux$, giá trị của $y\\left(\\dfrac1e\\right)$ bằng",
   "options": [
    "$\\dfrac{1}{2e}$.",
    "$\\dfrac{1}{e}$.",
    "$\\dfrac{2}{e}$.",
    "$\\dfrac{1}{3e}$."
   ],
   "answer": 0,
   "explain": "$y = ux \\Rightarrow y' = u'x + u$; thay vào: $u'x = u^2$<br>$\\dfrac{du}{u^2} = \\dfrac{dx}{x} \\Rightarrow -\\dfrac1u = \\ln x + C$<br>$y(1) = 1 \\Rightarrow u(1) = 1 \\Rightarrow C = -1 \\Rightarrow y = \\dfrac{x}{1 - \\ln x}$<br>$y\\left(\\dfrac1e\\right) = \\dfrac{1}{2e}$",
   "note": "Phương trình đẳng cấp: đặt $y = ux$ thì $y' = u'x + u$; giải xong nhớ đổi lại $u = \\dfrac{y}{x}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 1800 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{1800}\\right)$ với $k = \\dfrac{\\ln 2}{5}$ và $P(0) = 200$. Biết nghiệm có dạng $P(t) = \\dfrac{1800}{1 + Ae^{-kt}}$. Số cá trong hồ sau 5 tháng bằng",
   "options": [
    "$360$.",
    "$400$.",
    "$900$.",
    "$200$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{1800}{1 + A} = 200 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{5}\\cdot5} = 2^{-1} = \\dfrac{1}{2}$<br>$P(5) = \\dfrac{1800}{1 + \\frac{8}{2}} = 360$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $y'' + y' = x^2$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?",
   "options": [
    "$y^* = x(Ax^2 + Bx + C)$.",
    "$y^* = Ax^2 + Bx + C$.",
    "$y^* = x^2(Ax^2 + Bx + C)$.",
    "$y^* = Ax^2$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng có nghiệm $0$ và $-1$; số $0$ (ứng với vế phải là đa thức) là nghiệm đơn nên nhân thêm $x$<br>Dạng cần tìm: $y^* = x(Ax^2 + Bx + C)$",
   "note": "Bội của số mũ (hoặc của $\\alpha \\pm i\\beta$) trong phương trình đặc trưng quyết định nhân thêm $1$, $x$ hay $x^2$."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ x \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>Điều kiện $x \\le 0$ ứng với $\\pi/2 \\le \\varphi \\le 3\\pi/2$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Khi đổi biến sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$ trong tích phân hai lớp, phát biểu nào sau đây là đúng?",
   "options": [
    "$dxdy$ được thay bằng $r\\,dr\\,d\\varphi$.",
    "$dxdy$ được thay bằng $dr\\,d\\varphi$.",
    "$dxdy$ được thay bằng $r^2\\,dr\\,d\\varphi$.",
    "Biểu thức $x^2 + y^2$ được thay bằng $r$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $dxdy$ được thay bằng $r\\,dr\\,d\\varphi$. Định thức Jacobi của phép đổi biến bằng $r$.<br><b>Sai:</b> $dxdy$ được thay bằng $dr\\,d\\varphi$. Thiếu định thức Jacobi $r$.<br><b>Sai:</b> $dxdy$ được thay bằng $r^2\\,dr\\,d\\varphi$. Thừa số $r^2$ (kèm $\\sin\\theta$) là của tọa độ cầu trong không gian.<br><b>Sai:</b> Biểu thức $x^2 + y^2$ được thay bằng $r$. $x^2 + y^2 = r^2$."
  },
  {
   "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 1050 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$1400$.",
    "$700$.",
    "$1050$.",
    "$1260$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 40\\%\\cdot(2100 - x)$<br>$60x = 84000 \\Rightarrow x = 1400$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & -1 & -1 & 3 \\\\ -1 & 0 & 0 & -1 \\\\ -3 & 2 & 2 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = -7$.",
    "$m = -6$.",
    "$m = 7$.",
    "$m = -8$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $-2$ lần hàng 1 cộng $1$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = -7$; ngược lại hạng bằng 3<br>Kết quả: $m = -7$",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}2 & 1 \\\\ 1 & 1\\end{pmatrix}$ và $B = \\begin{pmatrix}7 & 5 \\\\ 3 & 1\\end{pmatrix}$. Ma trận $X$ thỏa mãn $X.A = B$ là",
   "options": [
    "$\\begin{pmatrix}2 & 3 \\\\ 2 & -1\\end{pmatrix}$.",
    "$\\begin{pmatrix}4 & 4 \\\\ -1 & -3\\end{pmatrix}$.",
    "$\\begin{pmatrix}4 & -1 \\\\ 4 & -3\\end{pmatrix}$.",
    "$\\begin{pmatrix}2 & 2 \\\\ 3 & -1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$X = BA^{-1}$ (nhân $A^{-1}$ về bên phải); kết quả $X = \\begin{pmatrix}2 & 3 \\\\ 2 & -1\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b - 1)x + 4y = a^2 - 2\\\\ x + ay = 1\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
   "options": [
    "$(a;b) = (2;3)$.",
    "$(a;b) = (-2;3)$.",
    "$(a;b) = (2;-3)$.",
    "$(a;b) = (-2;-3)$."
   ],
   "answer": 0,
   "explain": "Vô số nghiệm $\\Leftrightarrow \\dfrac{b - 1}{1} = \\dfrac{4}{a} = \\dfrac{a^2 - 2}{1}$<br>Với $(a;b) = (2;3)$: $\\dfrac{2}{1} = 2;\\quad \\dfrac{4}{2} = 2;\\quad \\dfrac{2}{1} = 2$ (thỏa mãn)<br>Mỗi cặp còn lại làm ít nhất một tỉ số khác đi nên không cho vô số nghiệm",
   "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{a - \\cos bx}{x^2} = 18$ với $b > 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$8$.",
    "$19$.",
    "$6$.",
    "$36$."
   ],
   "answer": 0,
   "explain": "Mẫu số tiến về 0 và giới hạn hữu hạn nên tử số cũng tiến về 0: $a - 1 = 0 \\Rightarrow a = 1$<br>$1 - \\cos bx \\sim \\dfrac{b^2x^2}{2}$ nên giới hạn bằng $\\dfrac{b^2}{2}$<br>$\\dfrac{b^2}{2} = 18 \\Rightarrow b = 6$ (vì $b > 0$)<br>$2a + b = 8$",
   "note": "Mẫu tiến về 0 mà giới hạn hữu hạn thì tử cũng phải tiến về 0: điều kiện này cho $a$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{-4x} & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$12$.",
    "$8$.",
    "$-3$.",
    "$13$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = e^{- 4 x}$: $g(0) = 1,\\ g'(0) = -4,\\ g''(0) = 16$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 1,\\ b = -4,\\ 2a = 16 \\Rightarrow a = 8$<br>$2a + b = 12$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Cho hai hàm số $f, g$ liên tục trên $[a;b]$ với $a < b$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f(x) \\le g(x)$ với mọi $x \\in [a;b]$ thì $\\displaystyle\\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx$.",
    "$\\displaystyle\\int_a^b f(x)g(x)\\,dx = \\int_a^b f(x)\\,dx\\cdot\\int_a^b g(x)\\,dx$.",
    "Nếu $\\displaystyle\\int_a^b f(x)\\,dx \\ge 0$ thì $f(x) \\ge 0$ với mọi $x \\in [a;b]$.",
    "$\\left|\\displaystyle\\int_a^b f(x)\\,dx\\right| \\ge \\int_a^b |f(x)|\\,dx$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f(x) \\le g(x)$ với mọi $x \\in [a;b]$ thì $\\displaystyle\\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx$. $g - f \\ge 0$ nên $\\displaystyle\\int_a^b (g - f)\\,dx \\ge 0$.<br><b>Sai:</b> $\\displaystyle\\int_a^b f(x)g(x)\\,dx = \\int_a^b f(x)\\,dx\\cdot\\int_a^b g(x)\\,dx$. $f = g = x$ trên $[0;1]$: vế trái bằng $\\dfrac13$, vế phải bằng $\\dfrac14$.<br><b>Sai:</b> Nếu $\\displaystyle\\int_a^b f(x)\\,dx \\ge 0$ thì $f(x) \\ge 0$ với mọi $x \\in [a;b]$. $f(x) = x$ trên $[-1;2]$ có tích phân bằng $\\dfrac32$ nhưng $f(-1) < 0$.<br><b>Sai:</b> $\\left|\\displaystyle\\int_a^b f(x)\\,dx\\right| \\ge \\int_a^b |f(x)|\\,dx$. Bất đẳng thức đúng có chiều ngược lại; $f(x) = x$ trên $[-1;1]$: vế trái bằng $0$, vế phải bằng $1$."
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 30 nghìn đồng, hạng trung giá 50 nghìn đồng và hạng VIP giá 90 nghìn đồng. Ban tổ chức bán được tổng cộng 200 vé, thu về 9200 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là 0 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$30$.",
    "$70$.",
    "$40$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "Hệ: $x + y + z = 200$; $30x + 50y + 90z = 9200$; $x - y - z = 0$. Giải được $(100;70;30)$<br>Kết quả: $30$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{(n+1)!}$ bằng",
   "options": [
    "$1$.",
    "$e - 1$.",
    "$\\dfrac{1}{2}$.",
    "$e - 2$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{n}{(n+1)!} = \\dfrac{(n+1) - 1}{(n+1)!} = \\dfrac{1}{n!} - \\dfrac{1}{(n+1)!}$<br>Tổng riêng thu gọn: $S_N = \\dfrac{1}{1!} - \\dfrac{1}{(N+1)!}$<br>$N \\to +\\infty$: $S = \\dfrac{1}{1!} = 1$",
   "note": "Tách $n = (n + 1) - 1$ để được hiệu của hai số hạng liên tiếp."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\left[(-1)^{n-1}\\left(\\dfrac{1}{3}\\right)^n + \\dfrac{1}{2^{2n}}\\right] = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$), giá trị của $a + b$ bằng",
   "options": [
    "$19$.",
    "$5$.",
    "$11$.",
    "$22$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^{n-1}\\left(\\dfrac{1}{3}\\right)^n = \\dfrac{\\frac{1}{3}}{1 + \\frac{1}{3}} = \\dfrac{1}{4}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{4^n} = \\dfrac{\\frac{1}{4}}{1 - \\frac{1}{4}} = \\dfrac{1}{3}$<br>Tổng: $\\dfrac{7}{12} \\Rightarrow a + b = 19$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{(-1)^n}{(2n+1)\\cdot3^n}$ bằng",
   "options": [
    "$\\dfrac{\\sqrt{3} \\pi}{6}$.",
    "$\\dfrac{\\pi}{6}$.",
    "$\\dfrac{\\pi}{4}$.",
    "$\\dfrac{\\sqrt{3} \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}\\dfrac{(-1)^nx^{2n+1}}{2n+1} = \\arctan x$ tại $x = \\dfrac{1}{\\sqrt3}$, rồi nhân với $\\sqrt3$<br>Vậy tổng của chuỗi bằng $\\dfrac{\\sqrt{3} \\pi}{6}$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = y^2\\cos x$ thỏa mãn $y(0) = 1$. Giá trị của $y\\left(\\dfrac{\\pi}{6}\\right)$ bằng",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{y^2} = \\cos x\\,dx \\Rightarrow -\\dfrac1y = \\sin x + C$<br>$y(0) = 1 \\Rightarrow y = \\dfrac{1}{1 - \\sin{\\left(x \\right)}}$<br>$y\\left(\\dfrac{\\pi}{6}\\right) = 2$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - y = x^{2}e^x$ $(x > 0)$ thỏa mãn $y(1) = 2 + e$. Giá trị của $y(2)$ bằng",
   "options": [
    "$4 + 2 e^{2}$.",
    "$2 e^{2}$.",
    "$2 + e^{2}$.",
    "$2 e^{2} - 4$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{2}$: $\\left(\\dfrac{y}{x}\\right)' = e^x \\Rightarrow y = x(e^x + C)$<br>$y(1) = e + C = 2 + e \\Rightarrow C = 2$<br>$y(2) = 2\\left(e^2 + 2\\right) = 4 + 2 e^{2}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bể có 1000 lít nước muối với nồng độ muối là 0,02 kg/lít. Người ta bơm nước muối với nồng độ 0,01 kg/lít vào bể với tốc độ 20 lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau 40 phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "14,5.",
    "9,0.",
    "10,0.",
    "4,5."
   ],
   "answer": 0,
   "explain": "Gọi $S(t)$ là lượng muối (kg): $S' = 0{,}01\\cdot20 - \\dfrac{S}{1000}\\cdot20 = 0{,}2 - \\dfrac{20S}{1000},\\quad S(0) = 20$<br>Nghiệm: $S(t) = 10 + Ce^{-20t/1000}$; $S(0) = 20 \\Rightarrow C = 10$<br>$S(40) = 10 + 10e^{-0{,}8} \\approx 14{,}5$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Thể tích của vật thể giới hạn bởi mặt nón $z = 2 - \\sqrt{x^2 + y^2}$ và mặt phẳng $z = 0$ được tính bằng $V = \\displaystyle\\iint_D z\\,dxdy$, với $D$ là hình chiếu của vật thể lên mặt phẳng $Oxy$. Giá trị của $V$ bằng",
   "options": [
    "$\\dfrac{8 \\pi}{3}$.",
    "$\\dfrac{16 \\pi}{3}$.",
    "$\\dfrac{4 \\pi}{3}$.",
    "$4 \\pi$."
   ],
   "answer": 0,
   "explain": "$z \\ge 0 \\Leftrightarrow x^2 + y^2 \\le 4$ nên $D$ là hình tròn bán kính $2$<br>$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}\\left(2 - r\\right)r\\,dr = 2\\pi\\left[- \\dfrac{r^{3}}{3} + r^{2}\\right]_0^{2}$<br>$V = 2\\pi\\cdot\\dfrac{4}{3} = \\dfrac{8 \\pi}{3}$",
   "note": "Miền $D$ là hình chiếu của vật thể: nơi mặt cong cắt mặt phẳng $z = 0$."
  },
  {
   "q": "Cho $V$ là hình cầu $x^2 + y^2 + z^2 \\le 9$. Giá trị của tích phân $\\displaystyle\\iiint_V \\sqrt{x^2 + y^2 + z^2}\\,dxdydz$ bằng",
   "options": [
    "$81 \\pi$.",
    "$108 \\pi$.",
    "$\\dfrac{81 \\pi}{2}$.",
    "$162 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho\\cdot\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot2\\cdot\\dfrac{81}{4} = 81 \\pi$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là cung tròn $x^2 + y^2 = 25$ nằm trong góc phần tư thứ nhất. Dùng tham số hóa $x = 5\\cos t,\\ y = 5\\sin t$, giá trị của tích phân $\\displaystyle\\int_L xy\\,ds$ bằng",
   "options": [
    "$\\dfrac{125}{2}$.",
    "$\\dfrac{25}{2}$.",
    "$125$.",
    "$\\dfrac{125}{4}$."
   ],
   "answer": 0,
   "explain": "$ds = 5\\,dt$: $\\displaystyle\\int_0^{\\pi/2} 5^3\\sin t\\cos t\\,dt = \\dfrac{5^3}{2}$<br>Kết quả: $\\dfrac{125}{2}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y)\\,dx + 2 x y\\,dy$ bằng",
   "options": [
    "$\\dfrac{28}{5}$.",
    "$\\dfrac{44}{15}$.",
    "$- \\dfrac{28}{5}$.",
    "$\\dfrac{56}{5}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 2 y + 1$<br>$I = \\displaystyle\\int_0^{2}dx\\int_{x^2}^{2 x}(2 y + 1)\\,dy = \\int_0^{2}\\left(- x^{4} + 3 x^{2} + 2 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{5} + x^{3} + x^{2}\\right]_0^{2} = \\dfrac{28}{5}$",
   "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 2 & 3\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x - 2$. Kí hiệu $f(A) = A^2 - A - 2I$.",
   "questions": [
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
     "options": [
      "$14$.",
      "$16$.",
      "$8$.",
      "$26$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}3 & 4 \\\\ 8 & 11\\end{pmatrix}$<br>Vết của $A^2$: $14$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
     "options": [
      "$15$.",
      "$19$.",
      "$13$.",
      "$6$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}3 & 4 \\\\ 8 & 11\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}0 & 3 \\\\ 6 & 6\\end{pmatrix}$<br>Tổng các phần tử: $15$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
     "options": [
      "$1$.",
      "$7$.",
      "$-1$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}3 & -1 \\\\ -2 & 1\\end{pmatrix}$<br>Tổng các phần tử: $1$",
     "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} + 6 x + y^{2} - 8 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 400\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 400$.",
   "questions": [
    {
     "q": "Giá trị nhỏ nhất của $f$ trên $D$ bằng",
     "options": [
      "$-25$.",
      "$200$.",
      "$0$.",
      "$25$."
     ],
     "answer": 0,
     "explain": "Điểm dừng $(-3;4)$ nằm trong $D$ và $f = (x + 3)^2 + (y - 4)^2 - 25$<br>Kết quả: $-25$"
    },
    {
     "q": "Giá trị lớn nhất của $f$ trên $D$ bằng",
     "options": [
      "$600$.",
      "$400$.",
      "$200$.",
      "$680$."
     ],
     "answer": 0,
     "explain": "Trên biên $f = 400 - 2(- 3 x + 4 y)$, lớn nhất khi $- 3 x + 4 y$ nhỏ nhất, tức bằng $-20\\cdot5$<br>Kết quả: $600$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$12$.",
      "$-12$.",
      "$-3$.",
      "$-16$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(-3;4)$: $\\left(12;-16\\right)$<br>Kết quả: $12$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & -2 & 4 \\\\ -1 & 2 & 0 \\\\ -1 & 1 & -1\\end{pmatrix}$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\\det\\left(A - A^T\\right)$.",
   "answer": [
    "0"
   ],
   "explain": "$A - A^T = \\begin{pmatrix}0 & -1 & 5 \\\\ 1 & 0 & -1 \\\\ -5 & 1 & 0\\end{pmatrix}$<br>$\\det\\left(A - A^T\\right) = 0$ (ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0, vì $\\det(-M) = -\\det M$ và $M^T = -M$)",
   "note": "$A + A^T$ đối xứng; $A - A^T$ phản đối xứng, và ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0."
  },
  {
   "q": "Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $2 x + 2 y + z = 36$.",
   "answer": [
    "144"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(2;2;1)$ với $t = \\dfrac{36}{9}$; $f_{\\min} = \\dfrac{36^2}{9} = 144$<br>Đáp số: $144$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(3^n + 4^n)x^n}{n^2}$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $a + b$.",
   "answer": [
    "5"
   ],
   "explain": "$\\sqrt[n]{|a_n|} \\to 4$ nên $R = \\dfrac{1}{4}$<br>Đáp số: $5$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
   "answer": [
    "2"
   ],
   "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(1) - 3\\cdot1 + 2I = 0 \\Rightarrow I = \\dfrac{4}{2} = 2$",
   "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt paraboloid $z = 6 - x^2 - y^2$. Biết thể tích của $V$ bằng $k\\pi$, tính $3k$.",
   "answer": [
    "32"
   ],
   "explain": "Hai mặt cắt nhau khi $r = 6 - r^2$, tức $r = 2$: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}(6 - r^2 - r)\\,r\\,dr = \\dfrac{32}{3}\\pi$<br>Đáp số: $32$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
