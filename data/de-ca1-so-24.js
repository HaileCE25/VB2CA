// ĐỀ SỐ 24 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-24",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 24",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lí tưởng và trách nhiệm xã hội",
  "prompt": "Hưởng ứng phong trào “Bình dân học vụ số” được phát động từ năm 2025, một nhóm sinh viên tình nguyện dành các buổi tối cuối tuần đến nhà văn hóa khu phố hướng dẫn người cao tuổi dùng dịch vụ công trực tuyến, thanh toán điện tử và nhận biết tin nhắn lừa đảo. Một bạn trong nhóm chia sẻ: “Lúc đầu em chỉ nghĩ đi cho đủ ngày công tác xã hội, nhưng khi thấy một bác 70 tuổi tự nộp được hồ sơ trên điện thoại, em hiểu vì sao việc này đáng làm.”",
  "source": "(Tình huống giả định, xây dựng từ phong trào “Bình dân học vụ số”)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về ý nghĩa của tinh thần tình nguyện trong câu chuyện trên và về trách nhiệm của người trẻ để “không ai bị bỏ lại phía sau” trong thời đại số.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (0;2;5)$ và $v = (1;0;2)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
   "options": [
    "$6$.",
    "$10$.",
    "$2$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 10,\\quad \\langle v, v\\rangle = 5 \\Rightarrow t = 2$<br>$p = 2v = (2;0;4)$, tổng các tọa độ: $6$",
   "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (2;2;0),\\ u_2 = (3;0;3)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
   "options": [
    "$(0;-2;-1)$.",
    "$(5;2;3)$.",
    "$(7;4;3)$.",
    "$(1;4;-3)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(0;-2;-1)$ — định thức của ba véc tơ $u_1, u_2$ và véc tơ này bằng $18 \\ne 0$ nên ba véc tơ độc lập tuyến tính<br><b>Sai:</b> $(5;2;3) = u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(7;4;3) = 2 u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(1;4;-3) = 2 u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$"
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ $S$ gồm $u_1 = (-4;-1;2;-2),\\ u_2 = (-1;-2;2;-1),\\ u_3 = (3;-1;0;1),\\ u_4 = (1;-5;4;-1)$. Cần bổ sung vào $S$ ít nhất bao nhiêu véc tơ để hệ mới sinh ra toàn bộ $\\mathbb{R}^4$?",
   "options": [
    "$2$.",
    "$0$.",
    "$4$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Xếp các véc tơ thành hàng và đưa về dạng bậc thang: $\\begin{pmatrix}-4 & -1 & 2 & -2 \\\\ 0 & 7 & -6 & 2 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của $S$ bằng $2$, tức $S$ sinh ra một không gian con $2$ chiều<br>Cần thêm ít nhất $4 - 2 = 2$ véc tơ",
   "note": "Hệ sinh ra $\\mathbb{R}^4$ khi hạng bằng 4, nên cần thêm ít nhất $4 -$ hạng véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 2 \\\\ -2 & -2\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = -A - 2I$. Phần tử thuộc hàng 2 và cột 2 của ma trận $A^{4}$ bằng",
   "options": [
    "$-4$.",
    "$4$.",
    "$16$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}-3 & -2 \\\\ 2 & 0\\end{pmatrix}$<br>$A^3 = A^2\\cdot A = \\begin{pmatrix}1 & -2 \\\\ 2 & 4\\end{pmatrix}$<br>$A^4 = A^2\\cdot A^2 = \\begin{pmatrix}5 & 6 \\\\ -6 & -4\\end{pmatrix}$<br>Phần tử hàng 2, cột 2 của $A^{4}$: $-4$",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 5$. Giá trị của $\\det\\left(A\\cdot(3A)^{-1}\\right)$ bằng",
   "options": [
    "$\\dfrac{1}{27}$.",
    "$\\dfrac{1}{3}$.",
    "$- \\dfrac{1}{27}$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(A(3A)^{-1}\\right) = \\det A\\cdot\\dfrac{1}{3^3\\cdot\\det A}$<br>Thay $\\det A = 5$: kết quả $\\dfrac{1}{27}$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$ là ma trận cỡ $m\\times n$ có hạng $r$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Tập nghiệm của hệ $AX = 0$ là không gian con của $\\mathbb{R}^n$ có số chiều $n - r$.",
    "Tập nghiệm của hệ $AX = 0$ là không gian con có số chiều $r$.",
    "Với $B \\ne 0$, tập nghiệm của hệ $AX = B$ là không gian con của $\\mathbb{R}^n$.",
    "Tập nghiệm của hệ $AX = 0$ luôn có số chiều $n$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Tập nghiệm của hệ $AX = 0$ là không gian con của $\\mathbb{R}^n$ có số chiều $n - r$. Hệ có $n - r$ ẩn tự do, mỗi ẩn tự do cho một véc tơ của hệ nghiệm cơ bản.<br><b>Sai:</b> Tập nghiệm của hệ $AX = 0$ là không gian con có số chiều $r$. $r$ là số ẩn cơ sở; số chiều của không gian nghiệm là $n - r$.<br><b>Sai:</b> Với $B \\ne 0$, tập nghiệm của hệ $AX = B$ là không gian con của $\\mathbb{R}^n$. Tập đó không chứa véc tơ không, vì $A\\cdot0 = 0 \\ne B$.<br><b>Sai:</b> Tập nghiệm của hệ $AX = 0$ luôn có số chiều $n$. Chỉ đúng khi $r = 0$, tức $A$ là ma trận không."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}1 & 2 & 2 & 3 \\\\ 0 & 1 & 0 & -1 \\\\ 0 & 0 & 3 & 3 \\\\ 0 & 0 & 1 & -1\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$-6$.",
    "$-5$.",
    "$-4$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\det P = 1,\\quad \\det R = -6$<br>$\\det A = \\det P\\cdot\\det R = (1)\\cdot(-6) = -6$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty}\\left[x^2\\left(e^{\\frac{1}{x}} - 1\\right) - x\\right]$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$1$.",
    "$0$.",
    "$- \\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "Đặt $t = \\dfrac{1}{x} \\to 0$: $e^{t} - 1 = t + \\dfrac{t^2}{2} + o(t^2)$<br>$x^2\\left(e^{t} - 1\\right) = x^2\\left(\\dfrac{1}{x} + \\dfrac{1}{2x^2} + o\\left(\\dfrac{1}{x^2}\\right)\\right) = x + \\dfrac{1}{2} + o(1)$<br>$\\lim = \\dfrac{1}{2} = \\dfrac{1}{2}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 3}}{x + 1}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tiệm cận đứng $x = -1$; khi $x \\to +\\infty$ thì $y \\to 1$, khi $x \\to -\\infty$ thì $y \\to -1$ nên có hai tiệm cận ngang $y = \\pm1$<br>Kết quả: $3$",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Phát biểu nào sau đây về khai triển Maclaurin (khi $x \\to 0$) là đúng?",
   "options": [
    "$\\cos x = 1 - \\dfrac{x^2}{2} + \\dfrac{x^4}{24} + o(x^4)$.",
    "$\\sin x = x - \\dfrac{x^3}{3} + o(x^3)$.",
    "$\\ln(1 + x) = x + \\dfrac{x^2}{2} + o(x^2)$.",
    "$e^x = 1 + x + x^2 + o(x^2)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\cos x = 1 - \\dfrac{x^2}{2} + \\dfrac{x^4}{24} + o(x^4)$. $\\cos x = \\displaystyle\\sum_{k\\ge0}\\dfrac{(-1)^kx^{2k}}{(2k)!}$, với $2! = 2$, $4! = 24$.<br><b>Sai:</b> $\\sin x = x - \\dfrac{x^3}{3} + o(x^3)$. Hệ số của $x^3$ là $-\\dfrac{1}{3!} = -\\dfrac16$.<br><b>Sai:</b> $\\ln(1 + x) = x + \\dfrac{x^2}{2} + o(x^2)$. $\\ln(1 + x) = x - \\dfrac{x^2}{2} + o(x^2)$ (dấu đan xen).<br><b>Sai:</b> $e^x = 1 + x + x^2 + o(x^2)$. Hệ số của $x^2$ là $\\dfrac{1}{2!} = \\dfrac12$."
  },
  {
   "q": "Cho hàm số $f(x,y,z) = x y + x z + y z$. Đạo hàm của $f$ tại điểm $M(2;2;2)$ theo hướng của véc tơ $\\vec l = (2;3;6)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{44}{7}$.",
    "$44$.",
    "$12$.",
    "$- \\dfrac{44}{7}$."
   ],
   "answer": 0,
   "explain": "$f'_x = y + z,\\quad f'_y = x + z,\\quad f'_z = x + y$<br>$\\nabla f(M) = (4;4;4)$<br>$|\\vec l| = \\sqrt{49} = 7$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{44}{7} = \\dfrac{44}{7}$",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Người ta tính chu kỳ $T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ của con lắc đơn từ hai đại lượng đo được. Biết chiều dài $l$ được đo với sai số tương đối không quá 1% và gia tốc trọng trường $g$ với sai số tương đối không quá 0,5%. Dùng vi phân toàn phần của $\\ln T$, sai số tương đối lớn nhất của $T$ xấp xỉ bằng",
   "options": [
    "0,75%.",
    "1,5%.",
    "0,25%.",
    "0,12%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln T = \\pm\\dfrac{1}{2}\\ln u \\pm \\dfrac{1}{2}\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta T}{T} \\le \\dfrac{1}{2}\\cdot\\dfrac{\\Delta u}{u} + \\dfrac{1}{2}\\cdot\\dfrac{\\Delta v}{v}$<br>$= \\dfrac{1}{2}\\cdot1\\% + \\dfrac{1}{2}\\cdot0{,}5\\% = 0{,}75\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $x + y = 2$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$2$.",
    "$4$.",
    "$1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$L = x^2 + y^2 - \\lambda(x + y - 2)$<br>$L'_x = 2x - \\lambda = 0,\\quad L'_y = 2y - \\lambda = 0 \\Rightarrow x = \\dfrac{\\lambda}{2},\\ y = \\dfrac{\\lambda}{2}$<br>Thay vào ràng buộc: $\\lambda = 2 \\Rightarrow \\lambda = 2$<br>$(x;y) = \\left(1;1\\right)$, $f_{\\min} = 2$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n(n+1)}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\ln\\left(1 + \\dfrac1n\\right)$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{3^n}{2^n+n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 2: $u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 3: $u_n \\sim \\left(\\dfrac32\\right)^n \\not\\to 0$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 4: $u_n \\sim \\dfrac{1}{n^2}$ $\\Rightarrow$ hội tụ<br>Số chuỗi hội tụ: $1$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét chuỗi đan dấu $S = \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n+1}}{n^{2}}$ và gọi $S_n$ là tổng riêng thứ $n$. Theo đánh giá sai số của chuỗi Leibniz, $|S - S_n| \\le a_{n+1}$ với $a_n = \\dfrac{1}{n^{2}}$. Số $n$ nhỏ nhất để đánh giá này bảo đảm $|S - S_n| \\le 0{,}01$ là",
   "options": [
    "$9$.",
    "$10$.",
    "$8$.",
    "$99$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{(n+1)^{2}} \\le 0{,}01 \\Leftrightarrow n + 1 \\ge 10$<br>Kết quả: $9$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân toàn phần?",
   "options": [
    "$(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$.",
    "$2xy\\,dx + (y^2 - x^2)dy = 0$.",
    "$(x + y)dx + (y - x)dy = 0$.",
    "$(x^2 + y)dx + (y - x)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — Điều kiện $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$ đối với $P\\,dx + Q\\,dy = 0$: $\\dfrac{\\partial P}{\\partial y} = \\cos x$, $\\dfrac{\\partial Q}{\\partial x} = \\cos x$<br><b>Sai:</b> $2xy\\,dx + (y^2 - x^2)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 2x$, $\\dfrac{\\partial Q}{\\partial x} = -2x$, hai đạo hàm riêng khác nhau<br><b>Sai:</b> $(x + y)dx + (y - x)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau<br><b>Sai:</b> $(x^2 + y)dx + (y - x)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau"
  },
  {
   "q": "Đường cong tích phân của phương trình vi phân toàn phần $(2 x + y)\\,dx + (x + 4 y)\\,dy = 0$ đi qua điểm $M(1;1)$ là một đường elip. Elip này cắt tia $Ox$ (phần $x > 0$ của trục hoành) tại điểm có hoành độ bằng",
   "options": [
    "$2$.",
    "$4$.",
    "$3$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial P}{\\partial y} = 1 = \\dfrac{\\partial Q}{\\partial x}$ nên vế trái là $du$ với $u = x^{2} + x y + 2 y^{2}$<br>Nghiệm tổng quát: $x^{2} + x y + 2 y^{2} = C$; qua $M(1;1)$: $C = 4$<br>Cho $y = 0$: $x^{2} = 4 \\Rightarrow x = 2$ (lấy $x > 0$)",
   "note": "Kiểm tra $P'_y = Q'_x$ trước; nghiệm tổng quát là $u(x,y) = C$ với $u'_x = P$, $u'_y = Q$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 4500 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{5}$ và $P(0) = 900$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số cá trong hồ sau 10 tháng bằng",
   "options": [
    "$2250$.",
    "$3600$.",
    "$1500$.",
    "$2251$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{4500}{1 + A} = 900 \\Rightarrow A = 4$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{5}\\cdot10} = 2^{-2} = \\dfrac{1}{4}$<br>$P(10) = \\dfrac{4500}{1 + \\frac{4}{4}} = 2250$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $y'' + 4y' + 4y = x + e^{-2x}$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?",
   "options": [
    "$y^* = Ax + B + Cx^2e^{-2x}$.",
    "$y^* = Ax + B + Ce^{-2x}$.",
    "$y^* = Ax + B + Cxe^{-2x}$.",
    "$y^* = x(Ax + B) + Ce^{-2x}$."
   ],
   "answer": 0,
   "explain": "Chồng chất nghiệm: với vế phải $x$, số $0$ không là nghiệm đặc trưng nên $Ax + B$; với $e^{-2x}$, số $-2$ là nghiệm kép nên $Cx^2e^{-2x}$<br>Dạng cần tìm: $y^* = Ax + B + Cx^2e^{-2x}$",
   "note": "Bội của số mũ (hoặc của $\\alpha \\pm i\\beta$) trong phương trình đặc trưng quyết định nhân thêm $1$, $x$ hay $x^2$."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>Điều kiện $y \\ge 0$ ứng với $0 \\le \\varphi \\le \\pi$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 4$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 2,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{4},\\ 0 \\le \\varphi \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$2 \\pi$.",
    "$4 \\pi$.",
    "$\\pi$.",
    "$4 \\sqrt{2} \\pi$."
   ],
   "answer": 0,
   "explain": "$I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{4}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{2}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{4}}{2}\\cdot\\dfrac{16}{4} = 2 \\pi$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 2100 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 30% khách hàng của Y chuyển sang X. Hiện tại X có 1050 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$900$.",
    "$1200$.",
    "$1050$.",
    "$945$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 30\\%\\cdot(2100 - x)$<br>$70x = 63000 \\Rightarrow x = 900$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & -1 & -1 \\\\ -1 & m & -1 \\\\ -1 & -1 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 2$.",
    "$m = -1$.",
    "$m \\ne -1$ và $m \\ne 2$.",
    "$m = -1$ hoặc $m = 2$."
   ],
   "answer": 0,
   "explain": "$\\det A = \\left(m - 2\\right) \\left(m + 1\\right)^{2}$ nên $\\operatorname{rank}A = 3 \\Leftrightarrow m \\ne -1$ và $m \\ne 2$<br>Với $m = -1$: ba hàng của $A$ bằng nhau và khác không nên $\\operatorname{rank}A = 1$<br>Với $m = 2$: tổng ba hàng bằng véc tơ không, hai hàng đầu không tỉ lệ nên $\\operatorname{rank}A = 2$<br>Vậy hạng của $A$ bằng 2 $\\Leftrightarrow m = 2$",
   "note": "$\\det A = 0$ mới cho biết hạng nhỏ hơn 3; phải thay từng giá trị $m$ để biết hạng bằng 1 hay 2."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}2 & 1 \\\\ 1 & 1\\end{pmatrix}$ và $B = \\begin{pmatrix}14 & 0 \\\\ 9 & 0\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A^2.X = B$. Tổng tất cả các phần tử của $X$ bằng",
   "options": [
    "$4$.",
    "$9$.",
    "$23$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$A^{-1} = \\begin{pmatrix}1 & -1 \\\\ -1 & 2\\end{pmatrix}$<br>$A.X = A^{-1}B = \\begin{pmatrix}5 & 0 \\\\ 4 & 0\\end{pmatrix}$<br>$X = A^{-1}(A^{-1}B) = \\begin{pmatrix}1 & 0 \\\\ 3 & 0\\end{pmatrix}$<br>Tổng các phần tử: $4$",
   "note": "$A^2X = B \\Rightarrow X = A^{-1}A^{-1}B$: nhân $A^{-1}$ vào bên trái hai lần."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y + 2z = 0\\\\ 3x + my + z = 0\\\\ -x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$10$.",
    "$4$.",
    "$3$.",
    "$-4$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 4 m + 3 = \\left(m - 3\\right) \\left(m - 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 1$ hoặc $m = 3$<br>Giá trị cần tìm: $10$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{a - \\cos bx}{x^2} = 8$ với $b > 0$. Giá trị của $a\\cdot b$ bằng",
   "options": [
    "$4$.",
    "$9$.",
    "$16$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Mẫu số tiến về 0 và giới hạn hữu hạn nên tử số cũng tiến về 0: $a - 1 = 0 \\Rightarrow a = 1$<br>$1 - \\cos bx \\sim \\dfrac{b^2x^2}{2}$ nên giới hạn bằng $\\dfrac{b^2}{2}$<br>$\\dfrac{b^2}{2} = 8 \\Rightarrow b = 4$ (vì $b > 0$)<br>$a\\cdot b = 4$",
   "note": "Mẫu tiến về 0 mà giới hạn hữu hạn thì tử cũng phải tiến về 0: điều kiện này cho $a$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\ln(1 + 2x) & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ (xét trong lân cận của điểm $0$) có đạo hàm cấp hai tại $x = 0$. Giá trị của $a + b + d$ bằng",
   "options": [
    "$0$.",
    "$-2$.",
    "$2$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = \\ln\\left(2 x + 1\\right)$: $g(0) = 0,\\ g'(0) = 2,\\ g''(0) = -4$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 0,\\ b = 2,\\ 2a = -4 \\Rightarrow a = -2$<br>$a + b + d = 0$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = e^x$, $y = 0$, $x = 0$ và $x = 1$ bằng",
   "options": [
    "$- \\dfrac{\\pi \\left(1 - e^{2}\\right)}{2}$.",
    "$- \\dfrac{1}{2} + \\dfrac{e^{2}}{2}$.",
    "$\\pi \\left(e - 1\\right)$.",
    "$- \\pi \\left(1 - e^{2}\\right)$."
   ],
   "answer": 0,
   "explain": "$V = \\pi\\displaystyle\\int_0^{1} y^2\\,dx = \\pi\\int_0^{1} e^{2 x}\\,dx$<br>$= \\pi\\left[\\dfrac{e^{2 x}}{2}\\right]_0^{1} = - \\dfrac{\\pi \\left(1 - e^{2}\\right)}{2}$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 60 nghìn đồng, hạng trung giá 90 nghìn đồng và hạng VIP giá 150 nghìn đồng. Ban tổ chức bán được tổng cộng 240 vé, thu về 18900 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là 60 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$30$.",
    "$60$.",
    "$40$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "Hệ: $x + y + z = 240$; $60x + 90y + 150z = 18900$; $x - y - z = 60$. Giải được $(150;60;30)$<br>Kết quả: $30$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=3}^{+\\infty}\\dfrac{n}{(n+1)!}$ bằng",
   "options": [
    "$\\dfrac{1}{6}$.",
    "$e - 1$.",
    "$1$.",
    "$\\dfrac{1}{12}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{n}{(n+1)!} = \\dfrac{(n+1) - 1}{(n+1)!} = \\dfrac{1}{n!} - \\dfrac{1}{(n+1)!}$<br>Tổng riêng thu gọn: $S_N = \\dfrac{1}{3!} - \\dfrac{1}{(N+1)!}$<br>$N \\to +\\infty$: $S = \\dfrac{1}{3!} = \\dfrac{1}{6}$",
   "note": "Tách $n = (n + 1) - 1$ để được hiệu của hai số hạng liên tiếp."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\left[(-1)^{n-1}\\left(\\dfrac{2}{3}\\right)^n + \\dfrac{1}{3^{2n}}\\right] = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$), giá trị của $a + b$ bằng",
   "options": [
    "$61$.",
    "$19$.",
    "$25$.",
    "$64$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^{n-1}\\left(\\dfrac{2}{3}\\right)^n = \\dfrac{\\frac{2}{3}}{1 + \\frac{2}{3}} = \\dfrac{2}{5}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{9^n} = \\dfrac{\\frac{1}{9}}{1 - \\frac{1}{9}} = \\dfrac{1}{8}$<br>Tổng: $\\dfrac{21}{40} \\Rightarrow a + b = 61$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{(-1)^n\\pi^{2n}}{(2n)!}$ bằng",
   "options": [
    "$-1$.",
    "$0$.",
    "$1$.",
    "$\\pi$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}\\dfrac{(-1)^nx^{2n}}{(2n)!} = \\cos x$ tại $x = \\pi$<br>Vậy tổng của chuỗi bằng $-1$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y'\\tan x = y$ thỏa mãn $y(\\dfrac{\\pi}{6}) = 1$. Giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{y} = \\dfrac{\\cos x}{\\sin x}dx \\Rightarrow \\ln|y| = \\ln|\\sin x| + C$<br>$y(\\dfrac{\\pi}{6}) = 1 \\Rightarrow y = 2 \\sin{\\left(x \\right)}$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 2$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - 3y = x^{4}e^x$ $(x > 0)$ thỏa mãn $y(1) = 2 + e$. Giá trị của $y(2)$ bằng",
   "options": [
    "$16 + 8 e^{2}$.",
    "$8 e^{2}$.",
    "$2 + e^{2}$.",
    "$8 e^{2} - 16$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{4}$: $\\left(\\dfrac{y}{x^{3}}\\right)' = e^x \\Rightarrow y = x^{3}(e^x + C)$<br>$y(1) = e + C = 2 + e \\Rightarrow C = 2$<br>$y(2) = 8\\left(e^2 + 2\\right) = 16 + 8 e^{2}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một vật khối lượng 4 kg rơi từ trạng thái nghỉ, chịu lực cản không khí tỉ lệ với vận tốc với hệ số $k = 0{,}5\\,kg/s$, tức vận tốc $v(t)$ thỏa mãn $4v' = 4g - 0{,}5v$ (lấy $g = 9{,}8\\,m/s^2$). Vận tốc của vật sau 2 giây (làm tròn đến hàng phần chục, đơn vị m/s) là",
   "options": [
    "17,3.",
    "78,4.",
    "19,6.",
    "61,1."
   ],
   "answer": 0,
   "explain": "$v' + \\dfrac{0{,}5}{4}v = 9{,}8$ (tuyến tính cấp một), $v(0) = 0$<br>$v(t) = \\dfrac{mg}{k}\\left(1 - e^{-kt/m}\\right) = 78{,}4\\left(1 - e^{-0{,}125t}\\right)$<br>$v(2) = 78{,}4\\left(1 - e^{-0{,}25}\\right) \\approx 17{,}3$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là miền nằm trong góc phần tư thứ nhất, nằm trong đường tròn $x^2 + y^2 = 4x$ và nằm ngoài đường tròn $x^2 + y^2 = 4$. Trong tọa độ cực, $D$ ứng với $2 \\le r \\le 4\\cos\\varphi,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{3}$. Giá trị của tích phân $\\displaystyle\\iint_D y\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{11}{3}$.",
    "$\\dfrac{4}{3}$.",
    "$\\dfrac{22}{3}$.",
    "$\\dfrac{11}{6}$."
   ],
   "answer": 0,
   "explain": "$I = \\displaystyle\\int_0^{\\pi/3}d\\varphi\\int_{2}^{4\\cos\\varphi} r^{2} \\sin{\\left(\\varphi \\right)}\\,dr$ (đã nhân Jacobian $r$)<br>$= \\displaystyle\\int_0^{\\pi/3}\\left(\\dfrac{64 \\sin{\\left(\\varphi \\right)} \\cos^{3}{\\left(\\varphi \\right)}}{3} - \\dfrac{8 \\sin{\\left(\\varphi \\right)}}{3}\\right)d\\varphi = \\dfrac{11}{3}$",
   "note": "Cận của $r$ phụ thuộc $\\varphi$ nên phải lấy tích phân theo $r$ trước, rồi mới theo $\\varphi$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{81 \\pi}{8}$.",
    "$\\dfrac{81 \\pi}{4}$.",
    "$\\dfrac{81 \\pi}{16}$.",
    "$\\dfrac{81 \\pi}{2}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu, $0 \\le \\theta \\le \\dfrac{\\pi}{4}$: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/4}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac14\\cdot\\dfrac{81}{4} = \\dfrac{81 \\pi}{8}$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $C$ là đường cong kín, trơn từng khúc, lấy theo chiều dương và bao quanh miền $D$ có diện tích $S$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$S = \\dfrac12\\displaystyle\\oint_C x\\,dy - y\\,dx$.",
    "$S = \\displaystyle\\oint_C x\\,dx + y\\,dy$.",
    "$S = \\displaystyle\\oint_C y\\,dx$.",
    "$S = \\displaystyle\\oint_C x\\,dy - y\\,dx$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $S = \\dfrac12\\displaystyle\\oint_C x\\,dy - y\\,dx$. Theo công thức Green: $\\displaystyle\\oint_C x\\,dy - y\\,dx = \\iint_D(1 + 1)\\,dxdy = 2S$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C x\\,dx + y\\,dy$. $x\\,dx + y\\,dy = d\\left(\\dfrac{x^2 + y^2}{2}\\right)$ nên tích phân theo đường kín bằng $0$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C y\\,dx$. Theo công thức Green: $\\displaystyle\\oint_C y\\,dx = \\iint_D(0 - 1)\\,dxdy = -S$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C x\\,dy - y\\,dx$. Tích phân này bằng $2S$."
  },
  {
   "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(3;0),\\ B(0;1)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- y^{2})\\,dx + x y\\,dy$ bằng",
   "options": [
    "$\\dfrac{3}{2}$.",
    "$- \\dfrac{3}{2}$.",
    "$3$.",
    "$\\dfrac{3}{4}$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = 3 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{1 - \\dfrac{x}{3}}\\left(3 y\\right)dy$<br>$I = \\dfrac{3}{2}$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}13 & -4 \\\\ 30 & -9\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$10$.",
      "$16$.",
      "$3$.",
      "$4$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (4)\\lambda + (3) = 0$ có nghiệm $3$ và $1$<br>Kết quả: $10$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
     "options": [
      "$82$.",
      "$256$.",
      "$81$.",
      "$16$."
     ],
     "answer": 0,
     "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(3)^{4} + (1)^{4}$<br>Kết quả: $82$"
    },
    {
     "q": "Định thức của ma trận $A^2 - 2A$ bằng",
     "options": [
      "$-3$.",
      "$3$.",
      "$2$.",
      "$9$."
     ],
     "answer": 0,
     "explain": "$A^2 - 2A$ có các trị riêng $\\lambda^2 - 2\\lambda$: $3$ và $-1$; định thức bằng tích của chúng<br>Kết quả: $-3$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 12 x + y^{2} - 16 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 900\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 900$.",
   "questions": [
    {
     "q": "Giá trị nhỏ nhất của $f$ trên $D$ bằng",
     "options": [
      "$-100$.",
      "$300$.",
      "$0$.",
      "$100$."
     ],
     "answer": 0,
     "explain": "Điểm dừng $(6;8)$ nằm trong $D$ và $f = (x - 6)^2 + (y - 8)^2 - 100$<br>Kết quả: $-100$"
    },
    {
     "q": "Giá trị lớn nhất của $f$ trên $D$ bằng",
     "options": [
      "$1500$.",
      "$900$.",
      "$300$.",
      "$1740$."
     ],
     "answer": 0,
     "explain": "Trên biên $f = 900 - 2(6 x + 8 y)$, lớn nhất khi $6 x + 8 y$ nhỏ nhất, tức bằng $-30\\cdot10$<br>Kết quả: $1500$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-18$.",
      "$18$.",
      "$6$.",
      "$-24$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(6;8)$: $\\left(-18;-24\\right)$<br>Kết quả: $-18$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = i\\cdot j + \\min\\{i,j\\}$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(A^{-1}A^TA\\right)$.",
   "answer": [
    "5"
   ],
   "explain": "$A = \\begin{pmatrix}2 & 3 & 4 & 5 \\\\ 3 & 6 & 8 & 10 \\\\ 4 & 8 & 12 & 15 \\\\ 5 & 10 & 15 & 20\\end{pmatrix}$, $\\det A = 5$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\dfrac{1}{\\det A}\\cdot\\det A\\cdot\\det A$ $= 5$<br>Đáp số: $5$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, khử về dạng tam giác; $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y,z) = 2 x + y + 2 z$ trên mặt cầu $x^2 + y^2 + z^2 = 16$.",
   "answer": [
    "12"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(2;1;2)$; $f_{\\max} = 4\\sqrt{2^2 + 1^2 + 2^2} = 12$<br>Đáp số: $12$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{x^{n}}{n\\cdot2^n}$?<span class=\"q-hint\">Chú ý: xét riêng hai đầu mút của khoảng hội tụ.</span>",
   "answer": [
    "4"
   ],
   "explain": "Bán kính hội tụ $R = 2$. Tại $x = 2$ chuỗi là $\\sum\\dfrac1n$ phân kỳ; tại $x = -2$ chuỗi là $\\sum\\dfrac{(-1)^n}{n}$ hội tụ. Miền hội tụ: $[-2;2)$<br>Đáp số: $4$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
   "answer": [
    "5"
   ],
   "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(1) - 3\\cdot3 + 2I = 0 \\Rightarrow I = \\dfrac{10}{2} = 5$",
   "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt elipxoit $\\dfrac{x^2}{1} + \\dfrac{y^2}{9} + \\dfrac{z^2}{36} = 1$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "24"
   ],
   "explain": "Đổi biến $x = 1u,\\ y = 3v,\\ z = 6w$ (Jacobian $18$) đưa về hình cầu đơn vị: $V = 18\\cdot\\dfrac{4\\pi}{3} = 24\\pi$<br>Đáp số: $24$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
