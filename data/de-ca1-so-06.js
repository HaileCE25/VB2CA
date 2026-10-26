// ĐỀ SỐ 06 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-06",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 06",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản lĩnh và phẩm chất chính trị",
  "prompt": "Trong một đợt mưa lũ lớn, một đoạn video “vỡ đập, nước cuốn trôi cả khu dân cư” lan truyền với tốc độ chóng mặt trên mạng xã hội; hàng chục nghìn người bấm chia sẻ kèm lời kêu gọi khẩn cấp. Vài giờ sau, cơ quan chức năng xác định đoạn video được tạo bằng trí tuệ nhân tạo, sự việc không có thật; nhưng khi đó nhiều người dân trong vùng đã hoảng loạn, lực lượng cứu hộ phải phân tán để kiểm tra thông tin. Một người từng chia sẻ đoạn video nói: “Tôi chỉ muốn giúp, thà tin nhầm còn hơn bỏ sót.”",
  "source": "(Tình huống giả định, xây dựng từ thực tế tin giả trên không gian mạng những năm gần đây)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về câu nói của người chia sẻ video và về bản lĩnh, trách nhiệm của mỗi công dân trước thông tin chưa được kiểm chứng trên không gian mạng.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^n$ với tích vô hướng thông thường, cho hai véc tơ $u, v$ thỏa mãn $|u| = 3,\\ |v| = 2$ và $\\langle u, v\\rangle = 2$. Giá trị của $|3u - 2v|^2$ bằng",
   "options": [
    "$73$.",
    "$97$.",
    "$85$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "$|3u - 2v|^2 = \\langle 3u - 2v, 3u - 2v\\rangle = 9|u|^2 - 12 \\langle u, v\\rangle + 4|v|^2$<br>$= 9\\cdot9 - 12\\cdot(2) + 4\\cdot4 = 73$",
   "note": "Khai triển như hằng đẳng thức với $\\langle u, u\\rangle = |u|^2$; đừng quên số hạng chéo $2pq\\langle u, v\\rangle$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho cơ sở $B = \\{b_1(4;2),\\ b_2(-1;2)\\}$ và véc tơ $v = (8;14)$. Tọa độ của $v$ đối với cơ sở $B$ (tức cặp số $(x;y)$ sao cho $v = xb_1 + yb_2$) là",
   "options": [
    "$(3;4)$.",
    "$(4;3)$.",
    "$(8;14)$.",
    "$(3;-4)$."
   ],
   "answer": 0,
   "explain": "$v = xb_1 + yb_2 \\Leftrightarrow \\begin{cases}4 x - y = 8\\\\ 2 x + 2 y = 14\\end{cases}$<br>Giải hệ: $x = 3,\\ y = 4$<br>Tọa độ của $v$ đối với $B$: $(3;4)$",
   "note": "Tọa độ đối với cơ sở $B$ là nghiệm của hệ $xb_1 + yb_2 = v$, không phải tọa độ thông thường của $v$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S$ gồm $u_1 = (3;-1;-2;0),\\ u_2 = (-1;2;1;1),\\ u_3 = (3;0;2;-1),\\ u_4 = (8;-6;-6;-2),\\ u_5 = (-9;1;-2;2)$. Cần bỏ đi ít nhất bao nhiêu véc tơ của $S$ để hệ còn lại độc lập tuyến tính?<span class=\"q-hint\">Gợi ý: số véc tơ giữ lại được nhiều nhất bằng hạng của $S$.</span>",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$u_4 = 2 u_{1} - 2 u_{2}$; $u_5 = - u_{1} - 2 u_{3}$; còn $u_1, u_2, u_3$ độc lập tuyến tính nên hạng bằng 3<br>Kết quả: $2$",
   "note": "Hạng = số hàng khác không của dạng bậc thang; số véc tơ thừa = số véc tơ $-$ hạng."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 1 & 3\\end{pmatrix}$ và $B = \\begin{pmatrix}1 & 4 \\\\ 0 & -1\\end{pmatrix}$. Gọi $B^T$ là ma trận chuyển vị của $B$. Phần tử thuộc hàng 2 và cột 1 của ma trận $A^2B - 3B^T$ bằng",
   "options": [
    "$-8$.",
    "$4$.",
    "$-7$.",
    "$-9$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}2 & 4 \\\\ 4 & 10\\end{pmatrix}$<br>$A^2B = \\begin{pmatrix}2 & 4 \\\\ 4 & 6\\end{pmatrix}$<br>$3B^T = \\begin{pmatrix}3 & 0 \\\\ 12 & -3\\end{pmatrix}$<br>$A^2B - 3B^T = \\begin{pmatrix}-1 & 4 \\\\ -8 & 9\\end{pmatrix}$; phần tử hàng 2, cột 1: $-8$",
   "note": "Phép nhân ma trận không giao hoán: $(A + B)(A - B) = A^2 - AB + BA - B^2$; luôn giữ đúng thứ tự các thừa số."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & -1 \\\\ -8 & m - 2\\end{pmatrix}$ với $m$ là tham số. Gọi $S$ là tập hợp tất cả các giá trị của $m$ để $A$ không khả nghịch. Giá trị của tổng các phần tử của $S$ bằng",
   "options": [
    "$2$.",
    "$-8$.",
    "$20$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\det A = m^{2} - 2 m - 8$<br>$A$ không khả nghịch $\\Leftrightarrow \\det A = 0 \\Leftrightarrow \\left(m - 4\\right) \\left(m + 2\\right) = 0 \\Leftrightarrow m = -2$ hoặc $m = 4$<br>Giá trị cần tìm: $2$",
   "note": "Không khả nghịch $\\Leftrightarrow \\det A = 0$; tổng và tích các nghiệm có thể lấy từ định lí Viète."
  },
  {
   "q": "Xét hệ phương trình tuyến tính $AX = B$ gồm $m$ phương trình, $n$ ẩn, với $\\overline{A}$ là ma trận bổ sung. Phát biểu nào sau đây là đúng?",
   "options": [
    "Hệ có nghiệm khi và chỉ khi hạng của $A$ bằng hạng của $\\overline{A}$.",
    "Hệ có nghiệm duy nhất khi hạng của $A$ nhỏ hơn $n$.",
    "Hệ vô nghiệm khi hạng của $A$ và hạng của $\\overline{A}$ cùng bằng $n$.",
    "Hệ luôn có nghiệm khi $m < n$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Hệ có nghiệm khi và chỉ khi hạng của $A$ bằng hạng của $\\overline{A}$. Đây là định lí Kronecker – Capelli.<br><b>Sai:</b> Hệ có nghiệm duy nhất khi hạng của $A$ nhỏ hơn $n$. Nghiệm duy nhất khi hai hạng cùng bằng $n$; nếu hạng nhỏ hơn $n$ mà hệ có nghiệm thì có vô số nghiệm.<br><b>Sai:</b> Hệ vô nghiệm khi hạng của $A$ và hạng của $\\overline{A}$ cùng bằng $n$. Khi đó hệ có nghiệm duy nhất.<br><b>Sai:</b> Hệ luôn có nghiệm khi $m < n$. Ví dụ hệ $x + y + z = 1$, $x + y + z = 2$ có $m = 2 < n = 3$ nhưng vô nghiệm."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp 3 có $\\det A = 3$ và $\\det B = -3$. Giá trị của $\\det\\left(\\dfrac{1}{2}A^{-1}B^2\\right)$ bằng<span class=\"q-hint\">Lưu ý: nhớ rằng $\\det(kA) = k^n\\det A$ với $A$ vuông cấp $n$.</span>",
   "options": [
    "$\\dfrac{3}{8}$.",
    "$\\dfrac{3}{2}$.",
    "$\\dfrac{27}{8}$.",
    "$- \\dfrac{1}{4}$."
   ],
   "answer": 0,
   "explain": "$\\left(\\dfrac{1}{2}\\right)^{3}\\cdot\\dfrac{1}{\\det A}\\cdot(\\det B)^2 = \\dfrac{3}{8}$<br>Kết quả: $\\dfrac{3}{8}$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\sqrt{1 + 4x} - \\sqrt[3]{1 + 9x}}{x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$-1$.",
    "$5$.",
    "$-5$.",
    "$-7$."
   ],
   "answer": 0,
   "explain": "$\\sqrt{1 + 4x} = 1 + \\dfrac{4}{2}x + o(x)$<br>$\\sqrt[3]{1 + 9x} = 1 + \\dfrac{9}{3}x + o(x)$<br>$\\lim = \\dfrac{4}{2} - \\dfrac{9}{3} = -1$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\dfrac{\\sqrt[3]{1 + ax} - \\sqrt{1 + x}}{x} & \\text{khi } x \\ne 0\\\\[2mm] \\dfrac{1}{2} & \\text{khi } x = 0\\end{cases}$ liên tục tại $x = 0$. Giá trị của $a$ bằng",
   "options": [
    "$3$.",
    "$\\dfrac{3}{2}$.",
    "$6$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$\\sqrt[3]{1 + ax} = 1 + \\dfrac{a}{3}x + o(x)$<br>$\\sqrt{1 + x} = 1 + \\dfrac{1}{2}x + o(x)$<br>$\\lim\\limits_{x\\to0} f(x) = \\dfrac{a}{3} - \\dfrac{1}{2} = \\dfrac{1}{2} \\Rightarrow a = 3$",
   "note": "Liên tục tại $x_0$ $\\Leftrightarrow$ giới hạn trái = giới hạn phải = $f(x_0)$; giới hạn hữu hạn mà mẫu tiến về 0 thì tử cũng phải tiến về 0."
  },
  {
   "q": "Cho $u = u(x)$, $v = v(x)$ là hai hàm khả vi. Phát biểu nào sau đây về vi phân là đúng?",
   "options": [
    "$d(uv) = v\\,du + u\\,dv$.",
    "$d(uv) = du\\cdot dv$.",
    "$d\\left(\\dfrac{u}{v}\\right) = \\dfrac{du}{dv}$.",
    "$d(u^2) = 2u$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $d(uv) = v\\,du + u\\,dv$. $(uv)' = u'v + uv'$, nhân hai vế với $dx$.<br><b>Sai:</b> $d(uv) = du\\cdot dv$. Với $u = v = x$: $d(x^2) = 2x\\,dx$, khác $dx\\cdot dx$.<br><b>Sai:</b> $d\\left(\\dfrac{u}{v}\\right) = \\dfrac{du}{dv}$. $d\\left(\\dfrac{u}{v}\\right) = \\dfrac{v\\,du - u\\,dv}{v^2}$.<br><b>Sai:</b> $d(u^2) = 2u$. Thiếu vi phân của $u$: $d(u^2) = 2u\\,du$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} y^{2} + 3 x y + y^{2}$. Giá trị của đạo hàm riêng hỗn hợp $f''_{xy}$ tại điểm $(2;2)$ bằng",
   "options": [
    "$51$.",
    "$48$.",
    "$18$.",
    "$54$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} y^{2} + 3 y$<br>$f''_{xy} = \\left(f'_x\\right)'_y = 3 \\left(2 x^{2} y + 1\\right)$<br>$f''_{xy}(2;2) = 51$",
   "note": "Tính $f'_x$ trước rồi đạo hàm tiếp theo $y$; với hàm đa thức, $f''_{xy} = f''_{yx}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = \\ln(x^2 + y^2)$. Vi phân toàn phần của hàm số tại điểm $(2;1)$ là",
   "options": [
    "$\\dfrac{4}{5}dx + \\dfrac{2}{5}dy$.",
    "$\\dfrac{2}{5}dx + \\dfrac{1}{5}dy$.",
    "$4dx + 2dy$.",
    "$\\dfrac{2}{5}dx + \\dfrac{4}{5}dy$."
   ],
   "answer": 0,
   "explain": "$f'_x = \\dfrac{2x}{x^2 + y^2},\\quad f'_y = \\dfrac{2y}{x^2 + y^2}$<br>Tại $(2;1)$: $f'_x = \\dfrac{4}{5},\\ f'_y = \\dfrac{2}{5}$<br>$df = \\dfrac{4}{5}dx + \\dfrac{2}{5}dy$",
   "note": "$df = f'_xdx + f'_ydy$; khi tính gần đúng, $\\Delta x$ và $\\Delta y$ có thể mang dấu âm."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} - 3 x + y^{3} - 12 y$. Hàm số có bao nhiêu điểm dừng không phải là điểm cực trị?<span class=\"q-hint\">Lưu ý: điểm dừng là điểm mà $f'_x = f'_y = 0$. Tại điểm dừng, đặt $A = f''_{xx},\\ B = f''_{xy},\\ C = f''_{yy}$: nếu $AC - B^2 > 0$ thì đó là điểm cực trị, nếu $AC - B^2 < 0$ thì không phải.</span>",
   "options": [
    "$2$.",
    "$4$.",
    "$3$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} - 3,\\quad f'_y = 3 y^{2} - 12$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(-1;-2)$, $(-1;2)$, $(1;-2)$, $(1;2)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $72$, $-72$, $-72$, $72$<br>Số điểm dừng: $4$; số điểm cực trị (có $AC - B^2 > 0$): $2$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Trong bốn chuỗi số dương dưới đây, chuỗi nào hội tụ?",
   "options": [
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\sqrt n}{n+1}$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\sin\\dfrac1n$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\ln\\left(1 + \\dfrac1n\\right)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$ — $u_n \\sim \\dfrac{1}{n^2}$ nên chuỗi hội tụ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\sqrt n}{n+1}$ — $u_n \\sim \\dfrac{1}{\\sqrt n}$ nên chuỗi phân kỳ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\sin\\dfrac1n$ — $u_n \\sim \\dfrac1n$ nên chuỗi phân kỳ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\ln\\left(1 + \\dfrac1n\\right)$ — $u_n \\sim \\dfrac1n$ nên chuỗi phân kỳ"
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt{n+1}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\ln(n+1)}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n!}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n^2}{n^2+1}$. Có bao nhiêu chuỗi hội tụ tuyệt đối trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$3$.",
    "$2$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\frac{1}{\\sqrt{n+1}} \\downarrow 0$ (Leibniz), $\\sum\\frac{1}{\\sqrt{n+1}}$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 2: $\\frac{1}{\\ln(n+1)} \\downarrow 0$ (Leibniz), $\\frac{1}{\\ln(n+1)} > \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 3: $\\frac{|u_{n+1}|}{|u_n|} = \\frac{1}{n+1} \\to 0$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 4: $|u_n| \\to 1 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Số chuỗi hội tụ tuyệt đối: $1$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
   "options": [
    "$y' + y\\tan x = \\cos x$.",
    "$xy' + y = y^2\\ln x$.",
    "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$.",
    "$y' = (1 + x)(1 + y^2)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' + y\\tan x = \\cos x$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$<br><b>Sai:</b> $xy' + y = y^2\\ln x$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi<br><b>Sai:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = (1 + x)(1 + y^2)$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi"
  },
  {
   "q": "Nghiệm riêng của phương trình $(2xy + 2)dx + (x^2 + 6y)dy = 0$ thỏa mãn $y(1) = 1$ là",
   "options": [
    "$x^{2} y + 2 x + 3 y^{2} = 6$.",
    "$x^{2} y + 2 x + 3 y^{2} = 5$.",
    "$x^{2} y + 2 x + 6 y^{2} = 9$.",
    "$2 x^{2} y + 2 x + 3 y^{2} = 7$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial P}{\\partial y} = 2x = \\dfrac{\\partial Q}{\\partial x}$: phương trình vi phân toàn phần<br>$u'_x = 2xy + 2 \\Rightarrow u = x^2y + 2 x + \\varphi(y)$<br>$u'_y = x^2 + \\varphi'(y) = x^2 + 6y \\Rightarrow \\varphi(y) = 3 y^{2}$<br>$x^{2} y + 2 x + 3 y^{2} = C$; thay $x = y = 1$: $C = 6$",
   "note": "Đưa về dạng chuẩn rồi mới tìm thừa số tích phân $e^{\\int p\\,dx}$ (hoặc kiểm tra $P'_y = Q'_x$); hằng số $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Trong một mạch điện RL, cường độ dòng điện $y(t)$ (ampe) sau $t$ mili giây kể từ khi đóng mạch thỏa mãn phương trình $y' = k(4 - y)$ với $k = \\dfrac{\\ln 2}{2}$ và $y(0) = 0$. Cường độ dòng điện sau 6 mili giây bằng",
   "options": [
    "$3{,}5$ A.",
    "$3{,}75$ A.",
    "$0{,}5$ A.",
    "$4$ A."
   ],
   "answer": 0,
   "explain": "$y' + ky = 4k$ (tuyến tính cấp một) $\\Rightarrow y = 4 + Ce^{-kt}$<br>$y(0) = 0 \\Rightarrow C = -4$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{2}\\cdot6} = 2^{-3} = \\dfrac{1}{8}$<br>$y(6) = 4 + \\dfrac{-4}{8} = \\dfrac{7}{2}$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Xét phương trình $y'' + py' + qy = 0$ ($p, q$ là hằng số) có phương trình đặc trưng $k^2 + pk + q = 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu phương trình đặc trưng có nghiệm kép $k_0$ thì nghiệm tổng quát là $y = (C_1 + C_2x)e^{k_0x}$.",
    "Nếu phương trình đặc trưng có hai nghiệm thực phân biệt $k_1, k_2$ thì nghiệm tổng quát là $y = (C_1 + C_2x)e^{k_1x}$.",
    "Nếu phương trình đặc trưng có nghiệm phức $\\alpha \\pm i\\beta$ thì nghiệm tổng quát là $y = C_1e^{\\alpha x} + C_2e^{\\beta x}$.",
    "Nếu phương trình đặc trưng có nghiệm kép $k_0$ thì nghiệm tổng quát là $y = C_1e^{k_0x} + C_2e^{k_0x}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu phương trình đặc trưng có nghiệm kép $k_0$ thì nghiệm tổng quát là $y = (C_1 + C_2x)e^{k_0x}$. $e^{k_0x}$ và $xe^{k_0x}$ là hai nghiệm độc lập tuyến tính.<br><b>Sai:</b> Nếu phương trình đặc trưng có hai nghiệm thực phân biệt $k_1, k_2$ thì nghiệm tổng quát là $y = (C_1 + C_2x)e^{k_1x}$. Khi đó $y = C_1e^{k_1x} + C_2e^{k_2x}$.<br><b>Sai:</b> Nếu phương trình đặc trưng có nghiệm phức $\\alpha \\pm i\\beta$ thì nghiệm tổng quát là $y = C_1e^{\\alpha x} + C_2e^{\\beta x}$. Khi đó $y = e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)$.<br><b>Sai:</b> Nếu phương trình đặc trưng có nghiệm kép $k_0$ thì nghiệm tổng quát là $y = C_1e^{k_0x} + C_2e^{k_0x}$. Biểu thức đó bằng $(C_1 + C_2)e^{k_0x}$, thực chất chỉ có một hằng số tùy ý."
  },
  {
   "q": "Cho $I = \\displaystyle\\int_{0}^{1} dx\\int_{0}^{x} f(x,y)\\,dy + \\int_{1}^{2} dx\\int_{0}^{2 - x} f(x,y)\\,dy$. Vẽ miền lấy tích phân rồi đổi thứ tự lấy tích phân, ta được",
   "options": [
    "$I = \\displaystyle\\int_{0}^{1} dy\\int_{y}^{2 - y} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{1} dy\\int_{0}^{2 - y} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{2} dy\\int_{y}^{2 - y} f(x,y)\\,dx$.",
    "$I = \\displaystyle\\int_{0}^{1} dy\\int_{y}^{2} f(x,y)\\,dx$."
   ],
   "answer": 0,
   "explain": "Miền lấy tích phân là tam giác có các đỉnh $(0;0),\\ (2;0),\\ (1;1)$.",
   "note": "Vẽ miền $D$ trước khi đổi thứ tự; cận của tích phân ngoài phải là hằng số."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi mặt paraboloid $z = x^2 + y^2$ và mặt phẳng $z = 1$. Trong tọa độ trụ $x = r\\cos\\varphi,\\ y = r\\sin\\varphi,\\ z = z$, tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}r\\,dr\\int_{r^2}^{1} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}dr\\int_{r^2}^{1} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}r\\,dr\\int_{r}^{1} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}r\\,dr\\int_{0}^{r^2} f\\,dz$."
   ],
   "answer": 0,
   "explain": "Hình chiếu của $V$ lên $Oxy$ là hình tròn $r \\le 1$; $r^2 \\le z \\le 1$; Jacobian bằng $r$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Một hãng dùng 3 loại vật liệu để sản xuất 4 loại sản phẩm với ma trận định mức $A = \\begin{pmatrix}4 & 2 & 4 & 1 \\\\ 3 & 5 & 2 & 5 \\\\ 4 & 5 & 2 & 1\\end{pmatrix}$, trong đó $a_{ij}$ là số đơn vị vật liệu loại $i$ cần để sản xuất 1 đơn vị sản phẩm loại $j$. Hãng dự định sản xuất lần lượt $10, 5, 15, 10$ đơn vị sản phẩm các loại 1, 2, 3, 4. Biết giá mỗi đơn vị vật liệu loại 1, 2, 3 lần lượt là $6, 4, 4$ (đơn vị tiền), tổng chi phí vật liệu để thực hiện kế hoạch trên bằng",
   "options": [
    "$1680$.",
    "$360$.",
    "$1740$.",
    "$1575$."
   ],
   "answer": 0,
   "explain": "Nhu cầu vật liệu $AX = (120;135;105)^T$; chi phí bằng tích vô hướng với véc tơ giá: $1680$<br>Kết quả: $1680$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;3;0;1),\\ u_2(1;2;-2;-1),\\ u_3(2;5;-2;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne 0$.",
    "$m = 0$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 2$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $1$ lần hàng 1 cộng $1$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = 0$; ngược lại hạng bằng 3.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 1 & 0\\end{pmatrix}$, $B = \\begin{pmatrix}1 & -2 \\\\ 2 & -3\\end{pmatrix}$ và $C = \\begin{pmatrix}0 & 0 \\\\ -3 & 4\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X.B = C$ là",
   "options": [
    "$\\begin{pmatrix}1 & -2 \\\\ 1 & -2\\end{pmatrix}$.",
    "$\\begin{pmatrix}-8 & 2 \\\\ -4 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}5 & -6 \\\\ 5 & -6\\end{pmatrix}$.",
    "$\\begin{pmatrix}1 & 1 \\\\ -2 & -2\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$X = A^{-1}CB^{-1}$; kết quả $X = \\begin{pmatrix}1 & -2 \\\\ 1 & -2\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}3 x - 2 y = 8\\\\ x + 3 y = -1\\\\ x + 2 y = m + 1\\end{cases}$ (với $x, y$ là ẩn, $m$ là tham số). Hệ có nghiệm khi và chỉ khi",
   "options": [
    "$m = -1$.",
    "$m \\ne -1$.",
    "$m = -2$.",
    "với mọi giá trị của $m$."
   ],
   "answer": 0,
   "explain": "Hai phương trình đầu có nghiệm duy nhất: $x = 2,\\ y = -1$<br>Thay vào phương trình thứ ba: $0 = m + 1$<br>$m = -1$",
   "note": "Số phương trình nhiều hơn số ẩn: giải hai phương trình rồi buộc phương trình còn lại nghiệm đúng."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + ax) - \\sin 2x}{x^2} = b$ với $b$ là một số hữu hạn. Giá trị của $a\\cdot b$ bằng",
   "options": [
    "$-4$.",
    "$4$.",
    "$-2$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\ln(1 + ax) = ax - \\dfrac{a^2x^2}{2} + o(x^2)$<br>$\\sin 2x = 2x + o(x^2)$<br>Tử số $= (a - 2)x - \\dfrac{a^2}{2}x^2 + o(x^2)$; giới hạn hữu hạn $\\Leftrightarrow a = 2$<br>$b = -\\dfrac{4}{2} = -2,\\quad a\\cdot b = -4$",
   "note": "Giới hạn hữu hạn buộc các số hạng bậc thấp ở tử triệt tiêu; với hiệu hai căn thì nhân lượng liên hợp."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{2x} & \\text{khi } x \\le 0\\\\ a\\sin x + b & \\text{khi } x > 0\\end{cases}$ có đạo hàm tại $x = 0$. Giá trị của $a + 2b$ bằng",
   "options": [
    "$4$.",
    "$2$.",
    "$3$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Liên tục tại 0: $e^{0} = a\\sin 0 + b \\Rightarrow b = 1$<br>Đạo hàm trái tại 0: $2e^{0} = 2$; đạo hàm phải: $a\\cos 0 = a$, nên $a = 2$<br>$a + 2b = 4$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một bể chứa hình trụ đứng có bán kính đáy 2 mét, chiều cao 4 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước trong bể lên một bồn chứa đặt cao hơn miệng bể 2 mét (làm tròn đến hàng phần chục) bằng",
   "options": [
    "1970,4 <i>kJ</i>.",
    "985,2 <i>kJ</i>.",
    "2955,6 <i>kJ</i>.",
    "1601,0 <i>kJ</i>."
   ],
   "answer": 0,
   "explain": "Lớp nước dày $dh$ ở độ sâu $h$ có khối lượng $1000\\cdot\\pi\\cdot4\\,dh$, phải nâng lên $h + 2$ mét<br>$W = \\displaystyle\\int_0^{4} 9800\\pi\\cdot4\\,(h + 2)\\,dh = 39200\\pi\\left[\\dfrac{h^2}{2} + 2h\\right]_0^{4}$<br>$= 39200\\pi\\cdot16 \\approx 1970407\\ J = 1970{,}4\\ kJ$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $1, 1, 3$ đơn vị nguyên liệu I; $1, 2, 1$ đơn vị nguyên liệu II và $3, 1, 2$ đơn vị nguyên liệu III. Kho hiện có $110$, $60$ và $100$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$50$.",
    "$60$.",
    "$40$.",
    "$27$."
   ],
   "answer": 0,
   "explain": "Gọi $x, y, z$ là số sản phẩm mỗi loại; giải hệ ba phương trình được $(10;10;30)$<br>Kết quả: $50$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{n+1}{6^n}$ bằng<span class=\"q-hint\">Gợi ý: đạo hàm từng số hạng chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty} x^{n+1}$.</span>",
   "options": [
    "$\\dfrac{36}{25}$.",
    "$\\dfrac{6}{5}$.",
    "$\\dfrac{6}{25}$.",
    "$\\dfrac{72}{25}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}x^{n+1} = \\dfrac{x}{1-x} \\Rightarrow \\sum_{n\\ge0}(n+1)x^n = \\left(\\dfrac{x}{1-x}\\right)' = \\dfrac{1}{(1-x)^2}$<br>$x = \\dfrac{1}{6}$: $\\dfrac{1}{\\left(\\frac{5}{6}\\right)^2} = \\dfrac{36}{25}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}6242424\\ldots$ (phần tuần hoàn là 24) bằng $\\dfrac{6}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{24}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$268$.",
    "$62$.",
    "$269$.",
    "$1624$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{24}{10\\cdot100^n} = \\dfrac{24}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{24}{990}$<br>$\\dfrac{6}{10} + \\dfrac{24}{990} = \\dfrac{103}{165} \\Rightarrow a + b = 268$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n-1}x^n}{n}$ bằng",
   "options": [
    "$\\ln(1+x)$.",
    "$-\\ln(1+x)$.",
    "$-\\ln(1-x)$.",
    "$\\dfrac{x}{1+x}$."
   ],
   "answer": 0,
   "explain": "Tích phân từng số hạng chuỗi $\\sum_{n\\ge0}(-1)^nx^n = \\dfrac{1}{1+x}$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = y^2\\cos x$ là",
   "options": [
    "$y = -\\dfrac{1}{\\sin x + C}$.",
    "$y = \\dfrac{1}{\\sin x + C}$.",
    "$y = -\\dfrac{1}{\\sin x} + C$.",
    "$y = Ce^{\\sin x}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{dy}{y^2} = \\cos x\\,dx \\Rightarrow -\\dfrac1y = \\sin x + C$ (ngoài ra còn nghiệm $y = 0$).",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $xy' + 2y = 4x^2$ là $(x > 0)$",
   "options": [
    "$y = x^2 + \\dfrac{C}{x^2}$.",
    "$y = x^2 + Cx^2$.",
    "$y = 2x^2 + \\dfrac{C}{x^2}$.",
    "$y = x^2 + \\dfrac{C}{x}$."
   ],
   "answer": 0,
   "explain": "$\\left(x^2y\\right)' = 4x^3$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Một bể có 500 lít nước muối với nồng độ muối là 0,02 kg/lít. Người ta bơm nước muối với nồng độ 0,01 kg/lít vào bể với tốc độ 20 lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau 30 phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "6,5.",
    "3,0.",
    "5,0.",
    "1,5."
   ],
   "answer": 0,
   "explain": "Gọi $S(t)$ là lượng muối (kg): $S' = 0{,}01\\cdot20 - \\dfrac{S}{500}\\cdot20 = 0{,}2 - \\dfrac{20S}{500},\\quad S(0) = 10$<br>Nghiệm: $S(t) = 5 + Ce^{-20t/500}$; $S(0) = 10 \\Rightarrow C = 5$<br>$S(30) = 5 + 5e^{-1{,}2} \\approx 6{,}5$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là hình tròn $x^2 + y^2 \\le \\ln 3$. Giá trị của tích phân $\\displaystyle\\iint_D e^{-x^2 - y^2}\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{2 \\pi}{3}$.",
    "$\\dfrac{4 \\pi}{3}$.",
    "$\\dfrac{\\pi}{3}$.",
    "$3 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le \\varphi \\le 2\\pi,\\ 0 \\le r \\le \\sqrt{\\ln 3}$, $dxdy = r\\,dr\\,d\\varphi$<br>$\\displaystyle\\int_0^{\\sqrt{\\ln 3}} e^{-r^2}\\,r\\,dr = \\left[-\\dfrac{e^{-r^2}}{2}\\right]_0^{\\sqrt{\\ln 3}} = \\dfrac12\\left(1 - \\dfrac{1}{3}\\right)$<br>$I = 2\\pi\\cdot\\dfrac{1}{3} = \\dfrac{2 \\pi}{3}$",
   "note": "Đổi sang tọa độ cực để có thừa số $r$; khi đó $re^{\\pm r^2}$ tính được nguyên hàm."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi mặt $z = x^2 + y^2$ và mặt phẳng $z = 9$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$243 \\pi$.",
    "$\\dfrac{243 \\pi}{2}$.",
    "$\\dfrac{729 \\pi}{4}$.",
    "$486 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ trụ: $\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^3 r\\cdot\\dfrac{81 - r^4}{2}\\,dr$<br>Kết quả: $243 \\pi$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Cho $L$ là cung tròn $x^2 + y^2 = 9$ nằm trong góc phần tư thứ nhất. Dùng tham số hóa $x = 3\\cos t,\\ y = 3\\sin t$, giá trị của tích phân $\\displaystyle\\int_L xy\\,ds$ bằng",
   "options": [
    "$\\dfrac{27}{2}$.",
    "$\\dfrac{9}{2}$.",
    "$27$.",
    "$\\dfrac{27}{4}$."
   ],
   "answer": 0,
   "explain": "$ds = 3\\,dt$: $\\displaystyle\\int_0^{\\pi/2} 3^3\\sin t\\cos t\\,dt = \\dfrac{3^3}{2}$<br>Kết quả: $\\dfrac{27}{2}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Biết biểu thức $2 x y\\,dx + (x^{2} + 6 y)\\,dy$ là vi phân toàn phần của một hàm số $u(x,y)$ nên tích phân đường của nó không phụ thuộc đường lấy tích phân. Với $L$ là một đường cong trơn bất kì đi từ $A(1;-1)$ đến $B(2;2)$, giá trị của $\\displaystyle\\int_L 2 x y\\,dx + (x^{2} + 6 y)\\,dy$ bằng",
   "options": [
    "$18$.",
    "$20$.",
    "$-18$.",
    "$22$."
   ],
   "answer": 0,
   "explain": "$u'_x = 2 x y \\Rightarrow u = x^{2} y + g(y)$<br>$u'_y = x^{2} + 6 y \\Rightarrow u = x^{2} y + 3 y^{2}$<br>$I = u(B) - u(A) = (20) - (2) = 18$",
   "note": "Khi tích phân không phụ thuộc đường đi, chỉ cần tìm hàm thế $u$: kết quả là $u(B) - u(A)$."
  }
 ],
 "groups": [
  {
   "stem": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho các véc tơ $u_1 = (0;-2;-1),\\ u_2 = (1;-1;3),\\ u_3 = (-1;-2;-2)$ và $v = (-5;-2;-11)$.",
   "questions": [
    {
     "q": "Giá trị của $\\langle u_1, u_2\\rangle + \\langle u_2, u_3\\rangle$ bằng",
     "options": [
      "$-6$.",
      "$4$.",
      "$-1$.",
      "$-5$."
     ],
     "answer": 0,
     "explain": "$\\langle u_1, u_2\\rangle = -1,\\quad \\langle u_2, u_3\\rangle = -5$<br>Tổng: $-6$"
    },
    {
     "q": "Định thức của ma trận có các hàng lần lượt là $u_1, u_2, u_3$ bằng",
     "options": [
      "$5$.",
      "$-5$.",
      "$6$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$\\begin{vmatrix}0 & -2 & -1 \\\\ 1 & -1 & 3 \\\\ -1 & -2 & -2\\end{vmatrix} = 5$<br>Định thức khác 0 nên $\\{u_1, u_2, u_3\\}$ là một cơ sở của $\\mathbb{R}^3$"
    },
    {
     "q": "Biết $v = au_1 + bu_2 + cu_3$, giá trị của $a + b + c$ bằng",
     "options": [
      "$0$.",
      "$1$.",
      "$4$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$v = au_1 + bu_2 + cu_3$: viết theo từng tọa độ được hệ ba phương trình ba ẩn $a, b, c$<br>Giải hệ: $a = -1,\\ b = -2,\\ c = 3$<br>$a + b + c = 0$",
     "note": "Định thức khác 0 thì ba véc tơ là một cơ sở, nên biểu diễn của $v$ qua chúng là duy nhất."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - x y - 3 x + y^{2}$.",
   "questions": [
    {
     "q": "Giá trị của $f'_x(1;1)$ bằng",
     "options": [
      "$-2$.",
      "$1$.",
      "$2$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x - y - 3$<br>$f'_x(1;1) = -2$"
    },
    {
     "q": "Gọi $(x_0;y_0)$ là điểm dừng của hàm số, giá trị của $x_0 + 2y_0$ bằng",
     "options": [
      "$4$.",
      "$5$.",
      "$3$.",
      "$1$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x - y - 3 = 0,\\quad f'_y = - x + 2 y = 0$<br>Giải hệ: $x_0 = 2,\\ y_0 = 1$<br>$x_0 + 2y_0 = 4$"
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
     "explain": "$A = f''_{xx} = 2,\\ B = f''_{xy} = -1,\\ C = f''_{yy} = 2$<br>$AC - B^2 = 3 > 0$ và $A > 0$ nên điểm dừng là điểm cực tiểu<br>$f(2;1) = -3$",
     "note": "$AC - B^2 > 0$ và $A > 0$ tại mọi điểm nên điểm dừng duy nhất là điểm cực tiểu."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Tính định thức Vandermonde $D = \\begin{vmatrix}1 & 1 & 1 \\\\ -1 & 1 & 4 \\\\ 1 & 1 & 16\\end{vmatrix}$.",
   "answer": [
    "30"
   ],
   "explain": "Với các số $a, b, c$ ở hàng hai: $D = (b - a)(c - a)(c - b)$<br>$D = (2)(5)(3) = 30$",
   "note": "Định thức Vandermonde bằng tích các hiệu (số đứng sau trừ số đứng trước)."
  },
  {
   "q": "Tìm giá trị cực đại của hàm số $f(x,y) = - x^{3} + 3 x y - y^{3} + 10$.",
   "answer": [
    "11"
   ],
   "explain": "Điểm dừng $(0;0)$ (không là cực trị) và $(1;1)$ (cực đại vì $A = -6 < 0,\\ AC - B^2 > 0$), $f(1;1) = 11$<br>Đáp số: $11$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(3^n + 5^n)x^n}{n^2}$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $a + b$.",
   "answer": [
    "6"
   ],
   "explain": "$\\sqrt[n]{|a_n|} \\to 5$ nên $R = \\dfrac{1}{5}$<br>Đáp số: $6$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -4$ với điều kiện $y(0) = 5;\\ y'(0) = -1$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "4"
   ],
   "explain": "Nghiệm riêng hằng $y^* = 4$; $y = 4 + C_1e^{x} + C_2e^{-x}$ với $C_1 = 0,\\ C_2 = 1$; $y(2) \\approx 4{,}14$<br>Đáp số: $4$",
   "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể nằm trong góc phần tám thứ nhất, được giới hạn bởi các mặt phẳng $x = 6,\\ y = 0,\\ y = x,\\ z = 0,\\ z = x + y$. Tính thể tích của $V$ <i>(viết kết quả dưới dạng số thập phân nếu không nguyên)</i>.",
   "answer": [
    "108"
   ],
   "explain": "$V = \\displaystyle\\int_0^6 dx\\int_0^x (x + y)\\,dy = 108$<br>Đáp số: $108$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
