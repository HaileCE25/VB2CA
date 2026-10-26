// ĐỀ SỐ 28 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-28",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 28",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Tiêu dùng và tài chính",
  "prompt": "Để “không thua kém ai” trong đám cưới, một đôi bạn trẻ vay gần 300 triệu đồng để tổ chức tiệc lớn, chụp ảnh ở nước ngoài và mua sắm lễ vật. Hai năm sau, họ vẫn đang trả nợ và phải hoãn kế hoạch sinh con, mua nhà. Người chồng nói: “Cả đời chỉ có một lần.” Người vợ nói: “Nhưng cả đời còn dài hơn một ngày.”",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về hai câu nói trên và về cách cân bằng giữa mong muốn trước mắt với kế hoạch tài chính lâu dài.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (0;4;-2)$ và $v = (2;1;-1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
   "options": [
    "$2$.",
    "$6$.",
    "$1$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 6,\\quad \\langle v, v\\rangle = 6 \\Rightarrow t = 1$<br>$p = v = (2;1;-1)$, tổng các tọa độ: $2$",
   "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (2;0;0),\\ u_2 = (0;2;2)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
   "options": [
    "$(0;-1;3)$.",
    "$(2;-2;-2)$.",
    "$(2;4;4)$.",
    "$(2;2;2)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(0;-1;3)$ — định thức của ba véc tơ $u_1, u_2$ và véc tơ này bằng $16 \\ne 0$ nên ba véc tơ độc lập tuyến tính<br><b>Sai:</b> $(2;-2;-2) = u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(2;4;4) = u_{1} + 2 u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(2;2;2) = u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$"
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ $S$ gồm $u_1 = (-1;1;-1;2),\\ u_2 = (-4;-8;6;-2),\\ u_3 = (3;3;-2;-1),\\ u_4 = (4;8;-6;2)$. Cần bổ sung vào $S$ ít nhất bao nhiêu véc tơ để hệ mới sinh ra toàn bộ $\\mathbb{R}^4$?",
   "options": [
    "$2$.",
    "$0$.",
    "$4$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Xếp các véc tơ thành hàng và đưa về dạng bậc thang: $\\begin{pmatrix}-1 & 1 & -1 & 2 \\\\ 0 & 12 & -10 & 10 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của $S$ bằng $2$, tức $S$ sinh ra một không gian con $2$ chiều<br>Cần thêm ít nhất $4 - 2 = 2$ véc tơ",
   "note": "Hệ sinh ra $\\mathbb{R}^4$ khi hạng bằng 4, nên cần thêm ít nhất $4 -$ hạng véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & -2 \\\\ -2 & 4\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x - y$ bằng",
   "options": [
    "$10$.",
    "$2$.",
    "$24$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}8 & -12 \\\\ -12 & 20\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = 6$<br>So sánh phần tử hàng 1, cột 1: $8 = 6\\cdot(2) + y \\Rightarrow y = -4$<br>$x - y = 10$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Định thức của ma trận $M = \\begin{pmatrix}-1 & -1 & -3 & 2 \\\\ -1 & 2 & 0 & 3 \\\\ 0 & 0 & 1 & 4 \\\\ 0 & 0 & 4 & -2\\end{pmatrix}$ bằng<span class=\"q-hint\">Gợi ý: $M$ có dạng tam giác khối nên $\\det M$ bằng tích định thức của hai khối vuông cấp 2 nằm trên đường chéo.</span>",
   "options": [
    "$54$.",
    "$-21$.",
    "$63$.",
    "$-54$."
   ],
   "answer": 0,
   "explain": "Khối trên đường chéo: $M_1 = \\begin{pmatrix}-1 & -1 \\\\ -1 & 2\\end{pmatrix},\\ M_2 = \\begin{pmatrix}1 & 4 \\\\ 4 & -2\\end{pmatrix}$<br>$\\det M_1 = -3,\\quad \\det M_2 = -18$<br>$\\det M = -3\\cdot(-18) = 54$",
   "note": "Chỉ áp dụng khi một khối ngoài đường chéo toàn số 0; khối còn lại không ảnh hưởng tới định thức."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$ khả nghịch và $B$ là ma trận nhận được từ $A$ bằng cách nhân hàng thứ nhất với số $k \\ne 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\det B = k\\det A$ và $B$ khả nghịch.",
    "$\\det B = k^n\\det A$.",
    "$\\det B = \\det A$.",
    "$B$ không khả nghịch."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\det B = k\\det A$ và $B$ khả nghịch. Nhân một hàng với $k$ thì định thức nhân với $k$; $k\\det A \\ne 0$ nên $B$ khả nghịch.<br><b>Sai:</b> $\\det B = k^n\\det A$. Hệ số $k^n$ chỉ xuất hiện khi nhân cả $n$ hàng với $k$, tức là xét $\\det(kA)$.<br><b>Sai:</b> $\\det B = \\det A$. Chỉ phép cộng bội của hàng khác vào một hàng mới giữ nguyên định thức.<br><b>Sai:</b> $B$ không khả nghịch. $\\det B = k\\det A \\ne 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}0 & -1 & -3 & 3 \\\\ 3 & -1 & 3 & -1 \\\\ 0 & 0 & 3 & 4 \\\\ 0 & 0 & 0 & 2\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$18$.",
    "$9$.",
    "$24$.",
    "$-18$."
   ],
   "answer": 0,
   "explain": "$\\det P = 3,\\quad \\det R = 6$<br>$\\det A = \\det P\\cdot\\det R = (3)\\cdot(6) = 18$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\left(\\dfrac{1}{\\sin^2 3x} - \\dfrac{1}{9x^2}\\right)$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{1}{3}$.",
    "$0$.",
    "$\\dfrac{1}{6}$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 3x$: $\\dfrac{1}{\\sin^2u} - \\dfrac{1}{u^2} = \\dfrac{u^2 - \\sin^2u}{u^2\\sin^2u}$<br>$\\sin^2u = \\left(u - \\dfrac{u^3}{6} + o(u^3)\\right)^2 = u^2 - \\dfrac{u^4}{3} + o(u^4)$<br>$\\lim = \\lim\\limits_{u\\to0}\\dfrac{u^4/3}{u^4} = \\dfrac{1}{3}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 1}}{x + 2}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tiệm cận đứng $x = -2$; khi $x \\to +\\infty$ thì $y \\to 1$, khi $x \\to -\\infty$ thì $y \\to -1$ nên có hai tiệm cận ngang $y = \\pm1$<br>Kết quả: $3$",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Cho hàm số $f$ có đạo hàm cấp hai liên tục trên khoảng $(a;b)$ và $x_0 \\in (a;b)$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $f$ đạt cực tiểu tại $x_0$.",
    "Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $f$ đạt cực đại tại $x_0$.",
    "Nếu $f''(x_0) = 0$ thì $x_0$ là hoành độ điểm uốn của đồ thị.",
    "Nếu $f$ đạt cực tiểu tại $x_0$ thì $f''(x_0) > 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $f$ đạt cực tiểu tại $x_0$. Đây là điều kiện đủ của cực trị theo đạo hàm cấp hai.<br><b>Sai:</b> Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $f$ đạt cực đại tại $x_0$. $f(x) = x^2$ có $f'(0) = 0$, $f''(0) = 2 > 0$ và đạt cực tiểu tại $0$.<br><b>Sai:</b> Nếu $f''(x_0) = 0$ thì $x_0$ là hoành độ điểm uốn của đồ thị. $f(x) = x^4$ có $f''(0) = 0$ nhưng $f'' = 12x^2$ không đổi dấu khi qua $0$.<br><b>Sai:</b> Nếu $f$ đạt cực tiểu tại $x_0$ thì $f''(x_0) > 0$. $f(x) = x^4$ đạt cực tiểu tại $0$ mà $f''(0) = 0$."
  },
  {
   "q": "Cho mặt cong $z = x^{2} y$. Mặt phẳng tiếp xúc với mặt cong tại điểm $M(2;1;4)$ có phương trình $z = z_0 + f'_x(M)(x - x_0) + f'_y(M)(y - y_0)$. Mặt phẳng này cắt trục $Oz$ tại điểm có cao độ bằng",
   "options": [
    "$-8$.",
    "$4$.",
    "$16$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x y \\to 4,\\quad f'_y = x^{2} \\to 4$ tại $(2;1)$<br>Mặt phẳng tiếp xúc: $z = 4 + (4)(x - 2) + (4)(y - 1)$<br>Cho $x = y = 0$: $z = -8$",
   "note": "Mặt phẳng tiếp xúc dùng giá trị các đạo hàm riêng tại tiếp điểm; cho $x = y = 0$ để tìm giao điểm với trục $Oz$."
  },
  {
   "q": "Người ta tính thể tích $V = \\pi r^2h$ của một bồn chứa hình trụ từ hai đại lượng đo được. Biết bán kính đáy $r$ được đo với sai số tương đối không quá 3% và chiều cao $h$ với sai số tương đối không quá 0,5%. Dùng vi phân toàn phần của $\\ln V$, sai số tương đối lớn nhất của $V$ xấp xỉ bằng",
   "options": [
    "6,5%.",
    "3,5%.",
    "5,5%.",
    "3%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln V = \\pm2\\ln u \\pm 1\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta V}{V} \\le 2\\cdot\\dfrac{\\Delta u}{u} + 1\\cdot\\dfrac{\\Delta v}{v}$<br>$= 2\\cdot3\\% + 1\\cdot0{,}5\\% = 6{,}5\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Một mảnh vườn hình chữ nhật có hai kích thước $x > 0,\\ y > 0$ (mét) thỏa mãn ràng buộc về vật liệu rào $3 x + y = 18$. Diện tích $S = xy$ lớn nhất của mảnh vườn bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$27$.",
    "$54$.",
    "$108$.",
    "$81$."
   ],
   "answer": 0,
   "explain": "$L = xy - \\lambda(3 x + y - 18)$<br>$L'_x = y - 3 \\lambda = 0,\\quad L'_y = x - \\lambda = 0 \\Rightarrow y = 3 \\lambda,\\ x = \\lambda$<br>Thay vào ràng buộc: $6 \\lambda = 18 \\Rightarrow \\lambda = 3$<br>$x = 3,\\ y = 9$, $S_{\\max} = 27$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{4n + 1}{3n + 2}\\right)^{n}$. Đặt $C = \\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}$, khi đó:",
   "options": [
    "$C = \\dfrac{4}{3}$ và chuỗi phân kỳ.",
    "$C = \\dfrac{4}{3}$ và chuỗi hội tụ.",
    "$C = \\dfrac{16}{9}$ và chuỗi phân kỳ.",
    "$C = 1$ và chuỗi phân kỳ."
   ],
   "answer": 0,
   "explain": "$\\sqrt[n]{u_n} = \\dfrac{4n + 1}{3n + 2} \\to \\dfrac{4}{3}$<br>$C > 1$ nên theo tiêu chuẩn Cauchy chuỗi phân kỳ",
   "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương."
  },
  {
   "q": "Xét chuỗi đan dấu $S = \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n+1}}{n}$ và gọi $S_n$ là tổng riêng thứ $n$. Theo đánh giá sai số của chuỗi Leibniz, $|S - S_n| \\le a_{n+1}$ với $a_n = \\dfrac{1}{n}$. Số $n$ nhỏ nhất để đánh giá này bảo đảm $|S - S_n| \\le 0{,}01$ là",
   "options": [
    "$99$.",
    "$100$.",
    "$98$.",
    "$999$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{n+1} \\le 0{,}01 \\Leftrightarrow n + 1 \\ge 100$<br>Kết quả: $99$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân có biến số phân ly?",
   "options": [
    "$y' = e^{x - y}$.",
    "$y' - y = xy^2$.",
    "$xy' - 2y = x^3$.",
    "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = e^{x - y}$ — Viết được dưới dạng $g(y)\\,dy = h(x)\\,dx$<br><b>Sai:</b> $y' - y = xy^2$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi<br><b>Sai:</b> $xy' - 2y = x^3$ — là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không thuộc dạng đang hỏi"
  },
  {
   "q": "Đường cong tích phân của phương trình vi phân toàn phần $(4 x + y)\\,dx + (x + 4 y)\\,dy = 0$ đi qua điểm $M(-1;2)$ là một đường elip. Elip này cắt tia $Ox$ (phần $x > 0$ của trục hoành) tại điểm có hoành độ bằng",
   "options": [
    "$2$.",
    "$8$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial P}{\\partial y} = 1 = \\dfrac{\\partial Q}{\\partial x}$ nên vế trái là $du$ với $u = 2 x^{2} + x y + 2 y^{2}$<br>Nghiệm tổng quát: $2 x^{2} + x y + 2 y^{2} = C$; qua $M(-1;2)$: $C = 8$<br>Cho $y = 0$: $2 x^{2} = 8 \\Rightarrow x = 2$ (lấy $x > 0$)",
   "note": "Kiểm tra $P'_y = Q'_x$ trước; nghiệm tổng quát là $u(x,y) = C$ với $u'_x = P$, $u'_y = Q$."
  },
  {
   "q": "Một tin đồn lan truyền trong một khu dân cư có 4500 người. Số người đã biết tin $P(t)$ sau $t$ ngày thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{3}$ và $P(0) = 500$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số người biết tin sau 9 ngày bằng",
   "options": [
    "$2250$.",
    "$4000$.",
    "$1500$.",
    "$2251$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{4500}{1 + A} = 500 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{3}\\cdot9} = 2^{-3} = \\dfrac{1}{8}$<br>$P(9) = \\dfrac{4500}{1 + \\frac{8}{8}} = 2250$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Xét phương trình $y'' + py' + qy = f(x)$ với $p, q$ là hằng số. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $y_1$ là nghiệm ứng với vế phải $f_1(x)$ và $y_2$ là nghiệm ứng với vế phải $f_2(x)$ thì $y_1 + y_2$ là nghiệm ứng với vế phải $f_1(x) + f_2(x)$.",
    "Nếu $f(x) = e^{ax}$ thì luôn có một nghiệm riêng dạng $y^* = Ae^{ax}$.",
    "Với $f \\not\\equiv 0$, tổng của hai nghiệm của phương trình cũng là nghiệm của phương trình.",
    "Nghiệm tổng quát của phương trình phụ thuộc một hằng số tùy ý."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $y_1$ là nghiệm ứng với vế phải $f_1(x)$ và $y_2$ là nghiệm ứng với vế phải $f_2(x)$ thì $y_1 + y_2$ là nghiệm ứng với vế phải $f_1(x) + f_2(x)$. Đây là nguyên lí chồng chất nghiệm, do vế trái tuyến tính theo $y$.<br><b>Sai:</b> Nếu $f(x) = e^{ax}$ thì luôn có một nghiệm riêng dạng $y^* = Ae^{ax}$. Khi $a$ là nghiệm của phương trình đặc trưng phải nhân thêm $x$ (nghiệm kép: $x^2$); ví dụ $y'' - y = e^x$.<br><b>Sai:</b> Với $f \\not\\equiv 0$, tổng của hai nghiệm của phương trình cũng là nghiệm của phương trình. Tổng hai nghiệm cho vế phải bằng $2f(x)$.<br><b>Sai:</b> Nghiệm tổng quát của phương trình phụ thuộc một hằng số tùy ý. Phương trình cấp hai nên nghiệm tổng quát phụ thuộc hai hằng số tùy ý."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ x \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>Điều kiện $x \\le 0$ ứng với $\\pi/2 \\le \\varphi \\le 3\\pi/2$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt nón $z = \\sqrt{3(x^2 + y^2)}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 3,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{6},\\ 0 \\le \\varphi \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{81 \\pi}{16}$.",
    "$\\dfrac{81 \\pi}{8}$.",
    "$\\dfrac{81 \\pi}{32}$.",
    "$\\dfrac{81 \\pi}{4}$."
   ],
   "answer": 0,
   "explain": "$I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{6}}{2}\\cdot\\dfrac{81}{4} = \\dfrac{81 \\pi}{16}$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 30% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 700 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$1200$.",
    "$900$.",
    "$1050$.",
    "$700$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 40\\%\\cdot(2100 - x)$<br>$70x = 84000 \\Rightarrow x = 1200$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;2;3;2),\\ u_2(3;-1;3;3),\\ u_3(5;3;9;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne 7$.",
    "$m = 7$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 8$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $2$ lần hàng 1 cộng $1$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = 7$; ngược lại hạng bằng 3.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}1 & 1 \\\\ -2 & -1\\end{pmatrix}$ và $B = \\begin{pmatrix}6 & 6 \\\\ -9 & -9\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X = B$ là",
   "options": [
    "$\\begin{pmatrix}3 & 3 \\\\ 3 & 3\\end{pmatrix}$.",
    "$\\begin{pmatrix}6 & 0 \\\\ -9 & 0\\end{pmatrix}$.",
    "$\\begin{pmatrix}-12 & 18 \\\\ 18 & -27\\end{pmatrix}$.",
    "$\\begin{pmatrix}-3 & -3 \\\\ -3 & -3\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$X = A^{-1}B$; kết quả $X = \\begin{pmatrix}3 & 3 \\\\ 3 & 3\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + y - 2z = 0\\\\ -2x + my + 2z = 0\\\\ 3x + 3y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$12$.",
    "$-8$.",
    "$40$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 8 m + 12 = \\left(m + 2\\right) \\left(m + 6\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -6$ hoặc $m = -2$<br>Giá trị cần tìm: $12$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{a - \\cos bx}{x^2} = \\dfrac{9}{2}$ với $b > 0$. Giá trị của $a + b$ bằng",
   "options": [
    "$4$.",
    "$\\dfrac{11}{2}$.",
    "$3$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "Mẫu số tiến về 0 và giới hạn hữu hạn nên tử số cũng tiến về 0: $a - 1 = 0 \\Rightarrow a = 1$<br>$1 - \\cos bx \\sim \\dfrac{b^2x^2}{2}$ nên giới hạn bằng $\\dfrac{b^2}{2}$<br>$\\dfrac{b^2}{2} = \\dfrac{9}{2} \\Rightarrow b = 3$ (vì $b > 0$)<br>$a + b = 4$",
   "note": "Mẫu tiến về 0 mà giới hạn hữu hạn thì tử cũng phải tiến về 0: điều kiện này cho $a$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\cos 2x & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a + b + d$ bằng",
   "options": [
    "$-1$.",
    "$-2$.",
    "$1$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = \\cos{\\left(2 x \\right)}$: $g(0) = 1,\\ g'(0) = 0,\\ g''(0) = -4$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 1,\\ b = 0,\\ 2a = -4 \\Rightarrow a = -2$<br>$a + b + d = -1$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} e^{-3x}\\sin 4x\\,dx$ bằng",
   "options": [
    "$\\dfrac{4}{25}$.",
    "$\\dfrac{3}{25}$.",
    "$\\dfrac{1}{25}$.",
    "$\\dfrac{4}{3}$."
   ],
   "answer": 0,
   "explain": "Từng phần hai lần: $I = \\left[-\\dfrac{1}{4}e^{-3x}\\cos 4x\\right]_0^{+\\infty} - \\dfrac{3}{4}\\displaystyle\\int_0^{+\\infty}e^{-3x}\\cos 4x\\,dx = \\dfrac{1}{4} - \\dfrac{9}{16}I$<br>$I\\left(1 + \\dfrac{9}{16}\\right) = \\dfrac{1}{4} \\Rightarrow I = \\dfrac{4}{25}$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 40 nghìn đồng, hạng trung giá 60 nghìn đồng và hạng VIP giá 100 nghìn đồng. Ban tổ chức bán được tổng cộng 160 vé, thu về 8000 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là 40 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$10$.",
    "$50$.",
    "$20$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Hệ: $x + y + z = 160$; $40x + 60y + 100z = 8000$; $x - y - z = 40$. Giải được $(100;50;10)$<br>Kết quả: $10$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=2}^{+\\infty}\\ln\\left(1 - \\dfrac{1}{n^2}\\right)$ bằng",
   "options": [
    "$\\ln\\dfrac{1}{2}$.",
    "$\\ln 2$.",
    "$\\ln\\dfrac{2}{3}$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\ln\\left(1 - \\dfrac{1}{n^2}\\right) = \\ln\\dfrac{(n-1)(n+1)}{n^2} = \\ln\\dfrac{n-1}{n} - \\ln\\dfrac{n}{n+1}$<br>Tổng riêng thu gọn: $S_N = \\ln\\dfrac{1}{2} - \\ln\\dfrac{N}{N+1}$<br>$N \\to +\\infty$: $S = \\ln\\dfrac{1}{2}$",
   "note": "Lôgarit của tích thành tổng: tách $\\ln\\dfrac{(n-1)(n+1)}{n^2}$ thành hiệu để các số hạng triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\left[(-1)^{n-1}\\left(\\dfrac{1}{2}\\right)^n + \\dfrac{1}{4^{2n}}\\right] = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$), giá trị của $a + b$ bằng",
   "options": [
    "$7$.",
    "$3$.",
    "$31$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^{n-1}\\left(\\dfrac{1}{2}\\right)^n = \\dfrac{\\frac{1}{2}}{1 + \\frac{1}{2}} = \\dfrac{1}{3}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{16^n} = \\dfrac{\\frac{1}{16}}{1 - \\frac{1}{16}} = \\dfrac{1}{15}$<br>Tổng: $\\dfrac{2}{5} \\Rightarrow a + b = 7$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{(-3)^n}{n!}$ bằng",
   "options": [
    "$e^{-3}$.",
    "$e^{3}$.",
    "$- e^{3}$.",
    "$e^{- \\dfrac{1}{3}}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}\\dfrac{x^n}{n!} = e^x$ tại $x = -3$<br>Vậy tổng của chuỗi bằng $e^{-3}$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = (1 + y)\\cos x$ thỏa mãn $y(0) = 1$. Giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
   "options": [
    "$2 e - 1$.",
    "$1$.",
    "$2 e$.",
    "$- \\dfrac{1}{2} + e$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{1+y} = \\cos x\\,dx \\Rightarrow \\ln|1+y| = \\sin x + C$<br>$y(0) = 1 \\Rightarrow y = 2 e^{\\sin{\\left(x \\right)}} - 1$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 2 e - 1$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - 3y = x^{4}e^x$ $(x > 0)$ thỏa mãn $y(1) = e - 1$. Giá trị của $y(2)$ bằng",
   "options": [
    "$8 e^{2} - 8$.",
    "$8 e^{2}$.",
    "$e^{2} - 1$.",
    "$8 + 8 e^{2}$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{4}$: $\\left(\\dfrac{y}{x^{3}}\\right)' = e^x \\Rightarrow y = x^{3}(e^x + C)$<br>$y(1) = e + C = e - 1 \\Rightarrow C = -1$<br>$y(2) = 8\\left(e^2 - 1\\right) = 8 e^{2} - 8$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Chất phóng xạ xêsi $^{137}Cs$ có chu kỳ bán rã 30 năm và phân rã với tốc độ tỉ lệ với lượng hiện có, tức $m' = -km$ với $k = \\dfrac{\\ln 2}{30}$. Thời gian (năm) để một mẫu chất này còn lại 70% khối lượng ban đầu (làm tròn đến hàng phần chục) là",
   "options": [
    "15,4.",
    "9,0.",
    "18,0.",
    "21,0."
   ],
   "answer": 0,
   "explain": "$m' = -km \\Rightarrow m(t) = m_0e^{-kt} = m_0\\cdot2^{-t/30}$<br>$2^{-t/30} = \\dfrac{70}{100} \\Rightarrow \\dfrac{t}{30} = \\log_2\\dfrac{100}{70}$<br>$t = 30\\cdot\\dfrac{\\ln(100/70)}{\\ln 2} \\approx 15{,}4$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 9,\\ 0 \\le y \\le \\sqrt{3}\\,x\\}$. Giá trị của tích phân $\\displaystyle\\iint_D x^2\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{81 \\sqrt{3}}{32} + \\dfrac{27 \\pi}{8}$.",
    "$\\dfrac{9 \\sqrt{3}}{8} + \\dfrac{3 \\pi}{2}$.",
    "$\\dfrac{81 \\sqrt{3}}{16} + \\dfrac{27 \\pi}{4}$.",
    "$\\dfrac{81 \\pi}{16}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 3,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{3}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{3}\\left(r^{2} \\cos^{2}\\varphi\\right)r\\,dr = \\int \\dfrac{81 \\cos^{2}\\varphi}{4}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{81 \\sqrt{3}}{32} + \\dfrac{27 \\pi}{8}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là phần của hình cầu $x^2 + y^2 + z^2 \\le 25$ nằm trong góc phần tám thứ nhất ($x \\ge 0,\\ y \\ge 0,\\ z \\ge 0$). Giá trị của tích phân $\\displaystyle\\iiint_V xyz\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{15625}{48}$.",
    "$\\dfrac{15625}{6}$.",
    "$\\dfrac{15625}{24}$.",
    "$\\dfrac{15625}{8}$."
   ],
   "answer": 0,
   "explain": "$xyz = \\rho^3\\sin^2\\theta\\cos\\theta\\sin\\varphi\\cos\\varphi$, $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$<br>$I = \\displaystyle\\int_0^{\\pi/2}\\sin\\varphi\\cos\\varphi\\,d\\varphi\\int_0^{\\pi/2}\\sin^3\\theta\\cos\\theta\\,d\\theta\\int_0^{5}\\rho^5\\,d\\rho$<br>$= \\dfrac12\\cdot\\dfrac14\\cdot\\dfrac{15625}{6} = \\dfrac{15625}{48}$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = 4$ với mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = x^2 + y^2 + 1$. Khối lượng của sợi dây, tức $\\displaystyle\\oint_L \\rho\\,ds$, bằng",
   "options": [
    "$20 \\pi$.",
    "$10 \\pi$.",
    "$4 \\pi$.",
    "$1 + 20 \\pi$."
   ],
   "answer": 0,
   "explain": "Trên $L$, $\\rho = 4 + 1$ là hằng số nên khối lượng bằng $(4 + 1)\\cdot2\\pi\\cdot2$<br>Kết quả: $20 \\pi$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (4 x y + 2 y^{2} + 1)\\,dx + (mx^2 + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$2$.",
    "$-2$.",
    "$4$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 4 x + 4 y,\\quad Q'_x = 2mx + 4 y$<br>Đồng nhất hệ số: $m = 2$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y + 2z = 1\\\\ 2y + z = 2\\\\ 2x + mz = 0\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = 1$, định thức của ma trận $A$ bằng",
     "options": [
      "$-2$.",
      "$-4$.",
      "$2$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$\\det A = 2 m - 4$<br>Với $m = 1$: $\\det A = -2$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$2$.",
      "$1$.",
      "$-2$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 2 m - 4 = 0 \\Leftrightarrow m = 2$"
    },
    {
     "q": "Khi $m = 1$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$1$.",
      "$2$.",
      "$-1$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "Với $m = 1$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = -2$)<br>$(x_0;y_0;z_0) = (1;2;-2)$<br>$x_0 + y_0 + z_0 = 1$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} y + y^{2}$ và điểm $M(2;1)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$10$.",
      "$-2$.",
      "$24$.",
      "$4$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x y,\\quad f'_y = x^{2} + 2 y$<br>$\\nabla f(M) = (4;6) \\Rightarrow p + q = 10$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (4;3)$ bằng",
     "options": [
      "$\\dfrac{34}{5}$.",
      "$34$.",
      "$\\dfrac{36}{5}$.",
      "$- \\dfrac{34}{5}$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(4)\\cdot(4) + (6)\\cdot(3)}{5} = \\dfrac{34}{5}$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$-9$.",
      "$5$.",
      "$9$.",
      "$19$."
     ],
     "answer": 0,
     "explain": "$z = 5 + (4)(x - 2) + (6)(y - 1)$<br>Cho $x = y = 0$: $z = -9$",
     "note": "Gradient, đạo hàm theo hướng và mặt phẳng tiếp xúc đều dùng chung hai giá trị $f'_x(M)$, $f'_y(M)$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 0 \\\\ 1 & m & 1 \\\\ 0 & 1 & m\\end{pmatrix}$ với $m$ là số nguyên dương. Biết $\\det A = 56$, tìm $m$.",
   "answer": [
    "4"
   ],
   "explain": "$\\det A = m^{3} - 2 m = m \\left(m^{2} - 2\\right)$<br>$m^{3} - 2 m = 56 \\Leftrightarrow \\left(m - 4\\right) \\left(m^{2} + 4 m + 14\\right) = 0$<br>Nghiệm nguyên dương duy nhất: $m = 4$",
   "note": "Lập $\\det A$ theo $m$ rồi giải phương trình; chỉ nhận nghiệm nguyên dương."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 2xy$ với điều kiện $\\dfrac{x^2}{4} + \\dfrac{y^2}{1} = 1$.",
   "answer": [
    "2"
   ],
   "explain": "Đặt $x = 2\\cos t,\\ y = 1\\sin t$: $f = 2\\cdot2\\cdot1\\sin t\\cos t$, lớn nhất bằng $\\dfrac{2\\cdot2\\cdot1}{2} = 2$<br>Đáp số: $2$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(4 x + 3)^{n}}{n^2\\cdot2^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "1"
   ],
   "explain": "Đặt $t = 4 x + 3$: chuỗi $\\sum\\dfrac{t^n}{n^2\\cdot2^n}$ hội tụ khi và chỉ khi $|t| \\le 2$ (tại hai đầu mút là chuỗi $\\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-2 \\le 4 x + 3 \\le 2 \\Leftrightarrow - \\dfrac{5}{4} \\le x \\le - \\dfrac{1}{4}$<br>$\\beta - \\alpha = 1$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 6y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
   "answer": [
    "1"
   ],
   "explain": "Nghiệm đặc trưng $k = -2,\\ k = -3$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 6\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(1) - 5\\cdot1 + 6I = 0 \\Rightarrow I = \\dfrac{6}{6} = 1$",
   "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "9"
   ],
   "explain": "Tọa độ cầu: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^2\\,d\\rho = 9\\pi$<br>Đáp số: $9$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
