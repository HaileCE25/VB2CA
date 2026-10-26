// ĐỀ SỐ 02 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-02",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 02",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản lĩnh và phẩm chất chính trị",
  "prompt": "Từ ngày 01/3/2026, Luật Trí tuệ nhân tạo của Việt Nam có hiệu lực, với nguyên tắc lấy con người làm trung tâm: trí tuệ nhân tạo phục vụ con người, không thay thế thẩm quyền và trách nhiệm của con người. Cùng thời gian đó, một sinh viên năm cuối chia sẻ trên mạng xã hội rằng mình đã dùng công cụ trí tuệ nhân tạo để viết gần như toàn bộ khóa luận tốt nghiệp và lập luận: “Công cụ nào giúp xong việc nhanh hơn thì dùng, miễn kết quả tốt là được; ai không dùng thì tự chịu thiệt.” Bài viết nhận được hàng nghìn lượt đồng tình lẫn phản đối.",
  "source": "(Tình huống giả định; thông tin về Luật Trí tuệ nhân tạo theo báo chí, 2026)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày quan điểm của mình về lập luận của sinh viên trên, từ đó bàn về bản lĩnh, sự trung thực và trách nhiệm cá nhân khi sử dụng trí tuệ nhân tạo trong học tập và công việc.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (4;7;-4)$ và $v = (-6;-7;-6)$. Gọi $\\alpha$ là góc giữa $u$ và $v$, giá trị của $\\cos\\alpha$ bằng",
   "options": [
    "$- \\dfrac{49}{99}$.",
    "$\\dfrac{49}{99}$.",
    "$- \\dfrac{49}{81}$.",
    "$- \\dfrac{49}{20}$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = -49$<br>$|u| = \\sqrt{81} = 9,\\quad |v| = \\sqrt{121} = 11$<br>$\\cos\\alpha = \\dfrac{\\langle u, v\\rangle}{|u|\\,|v|} = - \\dfrac{49}{99}$",
   "note": "$\\cos\\alpha = \\dfrac{\\langle u, v\\rangle}{|u|\\,|v|}$; dấu của $\\cos\\alpha$ là dấu của tích vô hướng."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho cơ sở $B = \\{b_1(0;-2),\\ b_2(2;1)\\}$ và véc tơ $v = (2;-7)$. Tọa độ của $v$ đối với cơ sở $B$ (tức cặp số $(x;y)$ sao cho $v = xb_1 + yb_2$) là",
   "options": [
    "$(4;1)$.",
    "$(1;4)$.",
    "$(2;-7)$.",
    "$(4;-1)$."
   ],
   "answer": 0,
   "explain": "$v = xb_1 + yb_2 \\Leftrightarrow \\begin{cases}2 y = 2\\\\ - 2 x + y = -7\\end{cases}$<br>Giải hệ: $x = 4,\\ y = 1$<br>Tọa độ của $v$ đối với $B$: $(4;1)$",
   "note": "Tọa độ đối với cơ sở $B$ là nghiệm của hệ $xb_1 + yb_2 = v$, không phải tọa độ thông thường của $v$."
  },
  {
   "q": "Hạng của ma trận $A = \\begin{pmatrix}1 & 1 & 1 & -1 \\\\ -1 & -2 & 0 & 3 \\\\ -1 & -3 & 1 & 5\\end{pmatrix}$ bằng",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng đưa $A$ về dạng bậc thang: $\\begin{pmatrix}1 & 1 & 1 & -1 \\\\ 0 & -1 & 1 & 2 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Số hàng khác không của dạng bậc thang: $2$<br>$\\operatorname{rank}A = 2$",
   "note": "Chỉ dùng biến đổi sơ cấp trên hàng; hạng không vượt quá số hàng và số cột."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 3 \\\\ 0 & 1\\end{pmatrix}$. Tổng tất cả các phần tử của ma trận $A^{20}$ bằng",
   "options": [
    "$62$.",
    "$29$.",
    "$5$.",
    "$60$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}1 & 6 \\\\ 0 & 1\\end{pmatrix},\\ A^3 = \\begin{pmatrix}1 & 9 \\\\ 0 & 1\\end{pmatrix}$; quy nạp: $A^n = \\begin{pmatrix}1 & 3 n \\\\ 0 & 1\\end{pmatrix}$<br>$A^{20} = \\begin{pmatrix}1 & 60 \\\\ 0 & 1\\end{pmatrix}$, tổng các phần tử: $62$",
   "note": "Tính $A^2, A^3$ để thấy quy luật; với $A = cI + N$, $N^2 = 0$ thì $A^n = c^nI + nc^{n-1}N$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 \\\\ 4 & m + 3\\end{pmatrix}$ với $m$ là tham số. Gọi $S$ là tập hợp tất cả các giá trị của $m$ để $A$ không khả nghịch. Giá trị của tổng bình phương các phần tử của $S$ bằng",
   "options": [
    "$17$.",
    "$-3$.",
    "$-4$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "$\\det A = m^{2} + 3 m - 4$<br>$A$ không khả nghịch $\\Leftrightarrow \\det A = 0 \\Leftrightarrow \\left(m - 1\\right) \\left(m + 4\\right) = 0 \\Leftrightarrow m = -4$ hoặc $m = 1$<br>Giá trị cần tìm: $17$",
   "note": "Không khả nghịch $\\Leftrightarrow \\det A = 0$; tổng và tích các nghiệm có thể lấy từ định lí Viète."
  },
  {
   "q": "Cho $A$ là ma trận cấp $3\\times4$ có hạng bằng 3. Phát biểu nào sau đây là đúng?",
   "options": [
    "Hệ thuần nhất $AX = 0$ có vô số nghiệm.",
    "Hệ thuần nhất $AX = 0$ chỉ có nghiệm tầm thường.",
    "Tồn tại $B$ để hệ $AX = B$ vô nghiệm.",
    "Hệ $AX = B$ có nghiệm duy nhất với mọi $B$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Hệ thuần nhất $AX = 0$ có vô số nghiệm. Hệ có 4 ẩn, hạng bằng 3 nên có $4 - 3 = 1$ ẩn tự do.<br><b>Sai:</b> Hệ thuần nhất $AX = 0$ chỉ có nghiệm tầm thường. Điều này chỉ xảy ra khi hạng bằng số ẩn (bằng 4), ở đây hạng là 3.<br><b>Sai:</b> Tồn tại $B$ để hệ $AX = B$ vô nghiệm. Hạng của $A$ bằng 3, bằng số phương trình, nên hạng ma trận bổ sung cũng bằng 3 với mọi $B$: hệ luôn có nghiệm.<br><b>Sai:</b> Hệ $AX = B$ có nghiệm duy nhất với mọi $B$. Hệ luôn có nghiệm nhưng còn 1 ẩn tự do nên có vô số nghiệm."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp 4 có $\\det A = 3$ và $\\det B = 5$. Giá trị của $\\det\\left(\\dfrac{1}{2}A^{-1}B^2\\right)$ bằng<span class=\"q-hint\">Lưu ý: nhớ rằng $\\det(kA) = k^n\\det A$ với $A$ vuông cấp $n$.</span>",
   "options": [
    "$\\dfrac{25}{48}$.",
    "$\\dfrac{25}{6}$.",
    "$\\dfrac{75}{16}$.",
    "$\\dfrac{5}{24}$."
   ],
   "answer": 0,
   "explain": "$\\left(\\dfrac{1}{2}\\right)^{4}\\cdot\\dfrac{1}{\\det A}\\cdot(\\det B)^2 = \\dfrac{25}{48}$<br>Kết quả: $\\dfrac{25}{48}$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{3x} - 1 - 3x}{1 - \\cos 2x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$\\dfrac{9}{4}$.",
    "$\\dfrac{3}{2}$.",
    "$\\dfrac{9}{8}$.",
    "$\\dfrac{9}{2}$."
   ],
   "answer": 0,
   "explain": "$e^{u} - 1 - u \\sim \\dfrac{u^2}{2} \\Rightarrow$ tử số $\\sim \\dfrac{(3x)^2}{2}$<br>$1 - \\cos v \\sim \\dfrac{v^2}{2} \\Rightarrow$ mẫu số $\\sim \\dfrac{(2x)^2}{2}$<br>$\\lim = \\dfrac{9}{4} = \\dfrac{9}{4}$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\dfrac{x^2 + ax + b}{x - 3} & \\text{khi } x \\ne 3\\\\[2mm] 7 & \\text{khi } x = 3\\end{cases}$ liên tục trên $\\mathbb{R}$. Giá trị của $a - b$ bằng",
   "options": [
    "$13$.",
    "$-11$.",
    "$1$.",
    "$-12$."
   ],
   "answer": 0,
   "explain": "Giới hạn tại $x = 3$ hữu hạn nên tử số bằng 0 tại đó: $9 + (3)a + b = 0$<br>Khi đó $x^2 + ax + b = (x - 3)(x + a + (3))$ nên $\\lim\\limits_{x\\to3} f(x) = 2\\cdot(3) + a$<br>$2\\cdot(3) + a = 7 \\Rightarrow a = 1,\\ b = -12$<br>$a - b = 13$",
   "note": "Liên tục tại $x_0$ $\\Leftrightarrow$ giới hạn trái = giới hạn phải = $f(x_0)$; giới hạn hữu hạn mà mẫu tiến về 0 thì tử cũng phải tiến về 0."
  },
  {
   "q": "Cho hàm số $f$ có đạo hàm trên khoảng $(a;b)$ và $x_0 \\in (a;b)$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f$ đạt cực trị tại $x_0$ thì $f'(x_0) = 0$.",
    "Nếu $f'(x_0) = 0$ thì $f$ đạt cực trị tại $x_0$.",
    "Nếu $f'(x_0) = 0$ và $f''(x_0) = 0$ thì $f$ không đạt cực trị tại $x_0$.",
    "Nếu $f'(x) > 0$ với mọi $x \\in (a;b)$ thì $f$ nghịch biến trên $(a;b)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f$ đạt cực trị tại $x_0$ thì $f'(x_0) = 0$. Đây là định lí Fermat (điều kiện cần của cực trị).<br><b>Sai:</b> Nếu $f'(x_0) = 0$ thì $f$ đạt cực trị tại $x_0$. $f(x) = x^3$ có $f'(0) = 0$ nhưng đồng biến, không có cực trị.<br><b>Sai:</b> Nếu $f'(x_0) = 0$ và $f''(x_0) = 0$ thì $f$ không đạt cực trị tại $x_0$. $f(x) = x^4$ có $f'(0) = f''(0) = 0$ nhưng vẫn đạt cực tiểu tại $0$.<br><b>Sai:</b> Nếu $f'(x) > 0$ với mọi $x \\in (a;b)$ thì $f$ nghịch biến trên $(a;b)$. Khi đó $f$ đồng biến trên $(a;b)$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} y^{2} - x y + x$. Giá trị của đạo hàm riêng hỗn hợp $f''_{xy}$ tại điểm $(2;-1)$ bằng",
   "options": [
    "$-25$.",
    "$12$.",
    "$16$.",
    "$14$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} y^{2} - y + 1$<br>$f''_{xy} = \\left(f'_x\\right)'_y = 6 x^{2} y - 1$<br>$f''_{xy}(2;-1) = -25$",
   "note": "Tính $f'_x$ trước rồi đạo hàm tiếp theo $y$; với hàm đa thức, $f''_{xy} = f''_{yx}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = \\ln(x^2 + y^2)$. Vi phân toàn phần của hàm số tại điểm $(1;2)$ là",
   "options": [
    "$\\dfrac{2}{5}dx + \\dfrac{4}{5}dy$.",
    "$\\dfrac{1}{5}dx + \\dfrac{2}{5}dy$.",
    "$2dx + 4dy$.",
    "$\\dfrac{4}{5}dx + \\dfrac{2}{5}dy$."
   ],
   "answer": 0,
   "explain": "$f'_x = \\dfrac{2x}{x^2 + y^2},\\quad f'_y = \\dfrac{2y}{x^2 + y^2}$<br>Tại $(1;2)$: $f'_x = \\dfrac{2}{5},\\ f'_y = \\dfrac{4}{5}$<br>$df = \\dfrac{2}{5}dx + \\dfrac{4}{5}dy$",
   "note": "$df = f'_xdx + f'_ydy$; khi tính gần đúng, $\\Delta x$ và $\\Delta y$ có thể mang dấu âm."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} - 3 x y + y^{3}$. Số điểm cực trị của hàm số bằng<span class=\"q-hint\">Lưu ý: điểm dừng là điểm mà $f'_x = f'_y = 0$. Tại điểm dừng, đặt $A = f''_{xx},\\ B = f''_{xy},\\ C = f''_{yy}$: nếu $AC - B^2 > 0$ thì đó là điểm cực trị, nếu $AC - B^2 < 0$ thì không phải.</span>",
   "options": [
    "$1$.",
    "$2$.",
    "$0$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} - 3 y,\\quad f'_y = - 3 x + 3 y^{2}$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(0;0)$, $(1;1)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $-9$, $27$<br>Số điểm dừng: $2$; số điểm cực trị (có $AC - B^2 > 0$): $1$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Trong bốn chuỗi số dương dưới đây, chuỗi nào phân kỳ?",
   "options": [
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\sin\\dfrac1n$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\arctan n}{n^2}$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(n!)^2}{(2n)!}$.",
    "$\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\sin\\dfrac1n$ — $u_n \\sim \\dfrac1n$ nên chuỗi phân kỳ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\arctan n}{n^2}$ — $u_n \\le \\dfrac{\\pi}{2n^2}$ nên chuỗi hội tụ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(n!)^2}{(2n)!}$ — $\\dfrac{u_{n+1}}{u_n} = \\dfrac{(n+1)^2}{(2n+1)(2n+2)} \\to \\dfrac14 < 1$ nên chuỗi hội tụ<br><b>Sai:</b> $\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$ — $u_n \\sim \\dfrac{1}{n^2}$ nên chuỗi hội tụ"
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt[3]{n}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt{n+1}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n^2}{n^2+1}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2+1}$. Có bao nhiêu chuỗi hội tụ tuyệt đối trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$3$.",
    "$2$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\frac{1}{\\sqrt[3]{n}} \\downarrow 0$ (Leibniz), $\\sum\\frac{1}{n^{1/3}}$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 2: $\\frac{1}{\\sqrt{n+1}} \\downarrow 0$ (Leibniz), $\\sum\\frac{1}{\\sqrt{n+1}}$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 3: $|u_n| \\to 1 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 4: $|u_n| \\le \\frac{1}{n^2}$ $\\Rightarrow$ hội tụ tuyệt đối<br>Số chuỗi hội tụ tuyệt đối: $1$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình Bernoulli (với $\\alpha \\ne 0,\\ \\alpha \\ne 1$)?",
   "options": [
    "$y' - y = xy^2$.",
    "$xy' = y + \\sqrt{x^2 + y^2}$.",
    "$xy' - 2y = x^3$.",
    "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' - y = xy^2$ — Dạng $y' + p(x)y = q(x)y^{\\alpha}$<br><b>Sai:</b> $xy' = y + \\sqrt{x^2 + y^2}$ — là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không thuộc dạng đang hỏi<br><b>Sai:</b> $xy' - 2y = x^3$ — là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không thuộc dạng đang hỏi<br><b>Sai:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + y\\cot x = 2\\cos x$ trên khoảng $(0;\\pi)$ thỏa mãn $y\\left(\\dfrac{\\pi}{2}\\right) = 1$. Giá trị của $y\\left(\\dfrac{\\pi}{6}\\right)$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{1}{4}$.",
    "$2$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $\\sin x$: $(y\\sin x)' = 2\\sin x\\cos x = \\sin 2x$<br>$y\\sin x = \\sin^2x + C$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 1 + C = 1 \\Rightarrow C = 0$<br>$y\\left(\\dfrac{\\pi}{6}\\right) = \\dfrac{\\frac14 + 0}{\\frac12} = \\dfrac{1}{2}$",
   "note": "Sau khi nhân thừa số tích phân, vế trái phải là đạo hàm của một tích: $(y\\sin x)'$."
  },
  {
   "q": "Một chi tiết kim loại có nhiệt độ $60^\\circ C$ được đưa vào lò có nhiệt độ không đổi $220^\\circ C$. Nhiệt độ $y(t)$ của chi tiết sau $t$ phút thỏa mãn phương trình $y' = k(220 - y)$ với $k = \\dfrac{\\ln 2}{5}$. Nhiệt độ của chi tiết sau 5 phút bằng",
   "options": [
    "$140$ °C.",
    "$180$ °C.",
    "$70$ °C.",
    "$110$ °C."
   ],
   "answer": 0,
   "explain": "$y' + ky = 220k$ (tuyến tính cấp một) $\\Rightarrow y = 220 + Ce^{-kt}$<br>$y(0) = 60 \\Rightarrow C = -160$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{5}\\cdot5} = 2^{-1} = \\dfrac{1}{2}$<br>$y(5) = 220 + \\dfrac{-160}{2} = 140$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Phương trình vi phân tuyến tính thuần nhất hệ số hằng nào sau đây có nghiệm tổng quát là $y = C_1e^{-2x} + C_2e^{-3x}$?",
   "options": [
    "$y'' + 5y' + 6y = 0$.",
    "$y'' - 5y' + 6y = 0$.",
    "$y'' + 5y' - 6y = 0$.",
    "$y'' + 6y' + 5y = 0$."
   ],
   "answer": 0,
   "explain": "Nghiệm $k = -2,\\ k = -3$ của phương trình đặc trưng: $\\left(k + 2\\right) \\left(k + 3\\right) = k^{2} + 5 k + 6$<br>Phương trình đặc trưng $k^{2} + 5 k + 6 = 0$ ứng với phương trình vi phân $y'' + 5y' + 6y = 0$",
   "note": "Đi ngược: từ nghiệm suy ra nghiệm đặc trưng, rồi $k^2 - (k_1 + k_2)k + k_1k_2 = 0$; chú ý dấu của hệ số $y'$."
  },
  {
   "q": "Cho $D$ là miền tam giác giới hạn bởi các đường thẳng $y = x,\\ y = 2x$ và $x = 3$. Giá trị của tích phân $\\displaystyle\\iint_D y\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{27}{2}$.",
    "$18$.",
    "$\\dfrac{9}{2}$.",
    "$27$."
   ],
   "answer": 0,
   "explain": "Miền $D$: $0 \\le x \\le 3,\\ x \\le y \\le 2x$<br>$I = \\displaystyle\\int_0^{3}dx\\int_x^{2x}y\\,dy = \\int_0^{3}\\dfrac{3 x^{2}}{2}\\,dx$<br>$= \\left[\\dfrac{x^{3}}{2}\\right]_0^{3} = \\dfrac{27}{2}$",
   "note": "Tích phân trong lấy theo $y$ với cận phụ thuộc $x$; kết quả là hàm của $x$ rồi mới lấy tích phân ngoài."
  },
  {
   "q": "Cho $V = \\{(x,y,z): x^2 + y^2 + z^2 \\le 1,\\ z \\ge 0\\}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/2}d\\theta\\int_0^{1} f\\,\\rho^2\\sin\\theta\\,d\\rho$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}d\\theta\\int_0^{1} f\\,\\rho^2\\sin\\theta\\,d\\rho$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/2}d\\theta\\int_0^{1} f\\,\\rho\\,d\\rho$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/2}d\\theta\\int_0^{1} f\\,\\rho^2\\,d\\rho$."
   ],
   "answer": 0,
   "explain": "Nửa hình cầu phía trên: $0 \\le \\theta \\le \\dfrac{\\pi}{2}$, $0 \\le \\rho \\le 1$; Jacobian bằng $\\rho^2\\sin\\theta$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Một xưởng dùng 3 loại nguyên liệu để làm 2 loại linh kiện, rồi dùng linh kiện để lắp 3 loại sản phẩm. Ma trận $R = \\begin{pmatrix}1 & 3 \\\\ 2 & 2 \\\\ 1 & 3\\end{pmatrix}$ cho số đơn vị nguyên liệu loại $i$ cần cho 1 linh kiện loại $j$; ma trận $C = \\begin{pmatrix}1 & 2 & 2 \\\\ 4 & 3 & 2\\end{pmatrix}$ cho số linh kiện loại $i$ cần cho 1 sản phẩm loại $j$. Xưởng nhận đơn hàng gồm $5, 5, 20$ sản phẩm các loại 1, 2, 3. Tổng số đơn vị nguyên liệu (cả ba loại) cần dùng cho đơn hàng bằng",
   "options": [
    "$820$.",
    "$130$.",
    "$360$.",
    "$540$."
   ],
   "answer": 0,
   "explain": "Số linh kiện: $C\\cdot(5;5;20)^T = (55;75)^T$; nguyên liệu: $R\\cdot(55;75)^T = (280;260;280)^T$, tổng bằng $820$<br>Kết quả: $820$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (0;1;2),\\ u_2 = (2;1;0)$ và $v = (4;3;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$2$.",
    "$-2$.",
    "$3$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = 4 - 2 m$<br>$4 - 2 m = 0 \\Leftrightarrow m = 2$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 2 \\\\ 3 & 3\\end{pmatrix}$ và $B = \\begin{pmatrix}5 & -5 \\\\ -6 & 1\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $2X - A = B^T$. Phần tử thuộc hàng 1 và cột 1 của $X$ bằng",
   "options": [
    "$3$.",
    "$6$.",
    "$-3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$B^T = \\begin{pmatrix}5 & -6 \\\\ -5 & 1\\end{pmatrix}$ (chuyển vị: hàng thành cột)<br>$2X = B^T + A = \\begin{pmatrix}6 & -4 \\\\ -2 & 4\\end{pmatrix}$<br>$X = \\begin{pmatrix}3 & -2 \\\\ -1 & 2\\end{pmatrix}$; phần tử hàng 1, cột 1: $3$",
   "note": "Giải như phương trình số nhưng phải chuyển vị $B$ trước; chia ma trận cho một số là chia từng phần tử."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}- 3 x + 2 y = -1\\\\ 2 x - y = 1\\\\ - x - 3 y = m - 3\\end{cases}$ (với $x, y$ là ẩn, $m$ là tham số). Hệ có nghiệm khi và chỉ khi",
   "options": [
    "$m = -1$.",
    "$m \\ne -1$.",
    "$m = -3$.",
    "với mọi giá trị của $m$."
   ],
   "answer": 0,
   "explain": "Hai phương trình đầu có nghiệm duy nhất: $x = 1,\\ y = 1$<br>Thay vào phương trình thứ ba: $-4 = m - 3$<br>$m = -1$",
   "note": "Số phương trình nhiều hơn số ẩn: giải hai phương trình rồi buộc phương trình còn lại nghiệm đúng."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to +\\infty}\\left(\\dfrac{3 x^{2} - x + 5}{x + 3} - ax - b\\right) = 0$ (tức đường thẳng $y = ax + b$ là tiệm cận xiên của đồ thị). Giá trị của $a + b$ bằng",
   "options": [
    "$-7$.",
    "$2$.",
    "$3$.",
    "$-10$."
   ],
   "answer": 0,
   "explain": "Chia đa thức: $\\dfrac{3 x^{2} - x + 5}{x + 3} = 3 x - 10 + \\dfrac{35}{x + 3}$<br>Phân thức $\\dfrac{35}{x + 3} \\to 0$ khi $x \\to +\\infty$ nên $a = 3,\\ b = -10$<br>$a + b = -7$",
   "note": "Tiệm cận xiên: $a = \\lim\\dfrac{f(x)}{x}$, $b = \\lim\\left(f(x) - ax\\right)$; với phân thức, chia đa thức là nhanh nhất."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{4x} & \\text{khi } x \\le 0\\\\ a\\sin x + b & \\text{khi } x > 0\\end{cases}$ có đạo hàm tại $x = 0$. Giá trị của $a + 2b$ bằng",
   "options": [
    "$6$.",
    "$4$.",
    "$5$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Liên tục tại 0: $e^{0} = a\\sin 0 + b \\Rightarrow b = 1$<br>Đạo hàm trái tại 0: $4e^{0} = 4$; đạo hàm phải: $a\\cos 0 = a$, nên $a = 4$<br>$a + 2b = 6$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một bể chứa có dạng hình nón tròn xoay với đỉnh ở phía dưới, bán kính miệng bể 3 mét, chiều cao 6 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước ra khỏi bể qua miệng bể (làm tròn đến hàng phần chục) bằng",
   "options": [
    "831,3 <i>kJ</i>.",
    "2493,8 <i>kJ</i>.",
    "1662,5 <i>kJ</i>.",
    "3325,1 <i>kJ</i>."
   ],
   "answer": 0,
   "explain": "Lớp nước ở độ cao $y$ (tính từ đỉnh) có bán kính $\\dfrac{3y}{6}$, phải nâng lên $6 - y$ mét<br>$W = \\displaystyle\\int_0^{6} 9800\\pi\\left(\\dfrac{3y}{6}\\right)^2(6 - y)\\,dy = 9800\\pi\\cdot\\dfrac{9}{36}\\left[\\dfrac{6y^3}{3} - \\dfrac{y^4}{4}\\right]_0^{6}$<br>$= 9800\\pi\\cdot\\dfrac{9\\cdot36}{12} \\approx 831{,}3\\ kJ$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $1, 1, 3$ đơn vị nguyên liệu I; $2, 1, 1$ đơn vị nguyên liệu II và $3, 3, 1$ đơn vị nguyên liệu III. Kho hiện có $150$, $130$ và $210$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$90$.",
    "$100$.",
    "$80$.",
    "$49$."
   ],
   "answer": 0,
   "explain": "Gọi $x, y, z$ là số sản phẩm mỗi loại; giải hệ ba phương trình được $(40;20;30)$<br>Kết quả: $90$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Gọi $S_N$ là tổng riêng thứ $N$ (tổng của $N$ số hạng đầu tiên) của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n(n+1)}$. Giá trị của $S_{19}$ bằng",
   "options": [
    "$\\dfrac{19}{20}$.",
    "$1$.",
    "$\\dfrac{18}{19}$.",
    "$\\dfrac{1}{20}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{n(n+1)} = \\dfrac1n - \\dfrac{1}{n+1}$<br>Cộng $N$ số hạng đầu, các số hạng ở giữa triệt tiêu: $S_N = 1 - \\dfrac{1}{N+1}$<br>$S_{19} = \\dfrac{19}{20}$",
   "note": "$S_N$ là tổng hữu hạn, chưa lấy giới hạn: đừng nhầm với tổng của cả chuỗi."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}2818181\\ldots$ (phần tuần hoàn là 81) bằng $\\dfrac{2}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{81}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$141$.",
    "$79$.",
    "$142$.",
    "$1281$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{81}{10\\cdot100^n} = \\dfrac{81}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{81}{990}$<br>$\\dfrac{2}{10} + \\dfrac{81}{990} = \\dfrac{31}{110} \\Rightarrow a + b = 141$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{x^n}{n}$ bằng",
   "options": [
    "$-\\ln(1-x)$.",
    "$\\ln(1-x)$.",
    "$\\ln(1+x)$.",
    "$-\\ln(1+x)$."
   ],
   "answer": 0,
   "explain": "Tích phân từng số hạng chuỗi $\\sum_{n\\ge0} x^n = \\dfrac{1}{1-x}$ từ $0$ đến $x$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $(1 + x^2)dy - xy\\,dx = 0$ là",
   "options": [
    "$y = C\\sqrt{1 + x^2}$.",
    "$y = C(1 + x^2)$.",
    "$y = \\sqrt{1 + x^2} + C$.",
    "$y = \\dfrac{C}{\\sqrt{1 + x^2}}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{dy}{y} = \\dfrac{x\\,dx}{1+x^2}$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = \\dfrac{x + y}{x}$ là",
   "options": [
    "$y = x\\ln|x| + Cx$.",
    "$y = \\ln|x| + Cx$.",
    "$y = x\\ln|x| + C$.",
    "$y = Cx\\ln|x|$."
   ],
   "answer": 0,
   "explain": "Đặt $y = ux$: $u'x = 1$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Một bể chứa 100 lít nước có hòa tan 25 kg muối. Người ta bơm vào bể nước muối nồng độ 0,1 kg/lít với tốc độ 9 lít/phút, đồng thời rút hỗn hợp (luôn được khuấy đều) ra khỏi bể với tốc độ 6 lít/phút, nên thể tích nước trong bể tăng dần. Lượng muối trong bể sau 25 phút là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "22,4.",
    "17,5.",
    "47,5.",
    "26,1."
   ],
   "answer": 0,
   "explain": "$V(t) = 100 + 3t$; $S' + \\dfrac{6}{100 + 3t}S = 0{,}9,\\quad S(0) = 25$<br>Nhân với thừa số tích phân $(100 + 3t)^2$: $\\left[S(100 + 3t)^2\\right]' = 0{,}9(100 + 3t)^2$<br>$S(100 + 3t)^2 = 0{,}1(100 + 3t)^3 + C$; $S(0) = 25 \\Rightarrow C = 150000$<br>$S(25) = 0{,}1\\cdot175 + \\dfrac{150000}{175^2} \\approx 22{,}4$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là hình tròn $x^2 + y^2 \\le \\ln 4$. Giá trị của tích phân $\\displaystyle\\iint_D e^{x^2 + y^2}\\,dxdy$ bằng",
   "options": [
    "$3 \\pi$.",
    "$6 \\pi$.",
    "$\\dfrac{3 \\pi}{2}$.",
    "$4 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le \\varphi \\le 2\\pi,\\ 0 \\le r \\le \\sqrt{\\ln 4}$, $dxdy = r\\,dr\\,d\\varphi$<br>$\\displaystyle\\int_0^{\\sqrt{\\ln 4}} e^{r^2}\\,r\\,dr = \\left[\\dfrac{e^{r^2}}{2}\\right]_0^{\\sqrt{\\ln 4}} = \\dfrac{4 - 1}{2}$<br>$I = 2\\pi\\cdot\\dfrac{3}{2} = 3 \\pi$",
   "note": "Đổi sang tọa độ cực để có thừa số $r$; khi đó $re^{\\pm r^2}$ tính được nguyên hàm."
  },
  {
   "q": "Cho $V = \\{(x,y,z): x^2 + y^2 + z^2 \\le 1,\\ z \\ge 0\\}$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{\\pi}{4}$.",
    "$\\dfrac{\\pi}{2}$.",
    "$\\dfrac{\\pi}{8}$.",
    "$\\dfrac{2 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/2}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^1\\rho^3\\,d\\rho = 2\\pi\\cdot\\dfrac12\\cdot\\dfrac{1^4}{4}$<br>Kết quả: $\\dfrac{\\pi}{4}$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Cho $L$ là một cung trơn nối điểm $A$ với điểm $B$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Tích phân đường loại một $\\displaystyle\\int_L f\\,ds$ không phụ thuộc chiều đi trên $L$, còn tích phân đường loại hai đổi dấu khi đổi chiều.",
    "Cả hai loại tích phân đường đều đổi dấu khi đổi chiều đi trên $L$.",
    "Cả hai loại tích phân đường đều không phụ thuộc chiều đi trên $L$.",
    "Nếu $L$ là đường cong kín thì $\\displaystyle\\int_L 1\\,ds = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Tích phân đường loại một $\\displaystyle\\int_L f\\,ds$ không phụ thuộc chiều đi trên $L$, còn tích phân đường loại hai đổi dấu khi đổi chiều. $ds > 0$ theo cả hai chiều, còn $dx, dy$ đổi dấu khi đổi chiều.<br><b>Sai:</b> Cả hai loại tích phân đường đều đổi dấu khi đổi chiều đi trên $L$. Tích phân loại một không đổi vì $ds$ là độ dài, luôn dương.<br><b>Sai:</b> Cả hai loại tích phân đường đều không phụ thuộc chiều đi trên $L$. Tích phân loại hai đổi dấu vì $dx, dy$ đổi dấu.<br><b>Sai:</b> Nếu $L$ là đường cong kín thì $\\displaystyle\\int_L 1\\,ds = 0$. $\\displaystyle\\int_L 1\\,ds$ bằng độ dài của $L$, luôn dương."
  },
  {
   "q": "Cho $L$ là đoạn thẳng nối điểm $A(2;-2)$ với điểm $B(-1;2)$. Giá trị của tích phân đường loại một $\\displaystyle\\int_L (2 x + y + 2)\\,ds$ bằng",
   "options": [
    "$15$.",
    "$3$.",
    "$21$.",
    "$30$."
   ],
   "answer": 0,
   "explain": "Tham số hóa: $x = 2 - 3 t,\\ y = 4 t - 2,\\ 0 \\le t \\le 1$<br>$ds = \\sqrt{x'^2 + y'^2}\\,dt = \\sqrt{25}\\,dt = 5\\,dt$<br>$I = 5\\displaystyle\\int_0^1\\left(4 - 2 t\\right)dt = 5\\cdot3 = 15$",
   "note": "Trên đoạn thẳng, $ds = |AB|\\,dt$ với $0 \\le t \\le 1$; kết quả không phụ thuộc chiều đi."
  }
 ],
 "groups": [
  {
   "stem": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho các véc tơ $u_1 = (-1;3;-2),\\ u_2 = (-1;2;1),\\ u_3 = (1;0;0)$ và $v = (1;-1;3)$.",
   "questions": [
    {
     "q": "Giá trị của $\\langle u_1, u_2\\rangle + \\langle u_2, u_3\\rangle$ bằng",
     "options": [
      "$4$.",
      "$6$.",
      "$5$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "$\\langle u_1, u_2\\rangle = 5,\\quad \\langle u_2, u_3\\rangle = -1$<br>Tổng: $4$"
    },
    {
     "q": "Định thức của ma trận có các hàng lần lượt là $u_1, u_2, u_3$ bằng",
     "options": [
      "$7$.",
      "$-7$.",
      "$8$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "$\\begin{vmatrix}-1 & 3 & -2 \\\\ -1 & 2 & 1 \\\\ 1 & 0 & 0\\end{vmatrix} = 7$<br>Định thức khác 0 nên $\\{u_1, u_2, u_3\\}$ là một cơ sở của $\\mathbb{R}^3$"
    },
    {
     "q": "Biết $v = au_1 + bu_2 + cu_3$, giá trị của $a + b + c$ bằng",
     "options": [
      "$1$.",
      "$2$.",
      "$-1$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$v = au_1 + bu_2 + cu_3$: viết theo từng tọa độ được hệ ba phương trình ba ẩn $a, b, c$<br>Giải hệ: $a = -1,\\ b = 1,\\ c = 1$<br>$a + b + c = 1$",
     "note": "Định thức khác 0 thì ba véc tơ là một cơ sở, nên biểu diễn của $v$ qua chúng là duy nhất."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - x y - 5 x + y^{2} + y$.",
   "questions": [
    {
     "q": "Giá trị của $f'_x(1;1)$ bằng",
     "options": [
      "$-4$.",
      "$2$.",
      "$4$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x - y - 5$<br>$f'_x(1;1) = -4$"
    },
    {
     "q": "Gọi $(x_0;y_0)$ là điểm dừng của hàm số, giá trị của $x_0 + 2y_0$ bằng",
     "options": [
      "$5$.",
      "$7$.",
      "$4$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x - y - 5 = 0,\\quad f'_y = - x + 2 y + 1 = 0$<br>Giải hệ: $x_0 = 3,\\ y_0 = 1$<br>$x_0 + 2y_0 = 5$"
    },
    {
     "q": "Giá trị cực tiểu của hàm số bằng",
     "options": [
      "$-7$.",
      "$7$.",
      "$-6$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "$A = f''_{xx} = 2,\\ B = f''_{xy} = -1,\\ C = f''_{yy} = 2$<br>$AC - B^2 = 3 > 0$ và $A > 0$ nên điểm dừng là điểm cực tiểu<br>$f(3;1) = -7$",
     "note": "$AC - B^2 > 0$ và $A > 0$ tại mọi điểm nên điểm dừng duy nhất là điểm cực tiểu."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Tính định thức Vandermonde $D = \\begin{vmatrix}1 & 1 & 1 \\\\ 1 & 3 & 4 \\\\ 1 & 9 & 16\\end{vmatrix}$.",
   "answer": [
    "6"
   ],
   "explain": "Với các số $a, b, c$ ở hàng hai: $D = (b - a)(c - a)(c - b)$<br>$D = (2)(3)(1) = 6$",
   "note": "Định thức Vandermonde bằng tích các hiệu (số đứng sau trừ số đứng trước)."
  },
  {
   "q": "Tìm giá trị cực tiểu của hàm số $f(x,y) = x^{3} - 9 x y + y^{3} + 20$.",
   "answer": [
    "-7"
   ],
   "explain": "Điểm dừng $(0;0)$ (không là cực trị) và $(3;3)$ (cực tiểu), $f(3;3) = -7$<br>Đáp số: $-7$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Tìm bán kính hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2x^{2n}}{4^n}$.",
   "answer": [
    "2"
   ],
   "explain": "Đặt $t = x^2$: $\\sum\\dfrac{n^2t^n}{4^n}$ có bán kính hội tụ 4 theo $t$, tức $x^2 < 4$<br>$R = 2$",
   "note": "Chuỗi theo $x^k$: đặt $t = x^k$; bán kính theo $x$ là căn bậc $k$ của bán kính theo $t$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y'' - y = 0$ thỏa mãn $y(0) = 3$ và bị chặn khi $x \\to +\\infty$. Tính $100\\cdot y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "110"
   ],
   "explain": "Nghiệm tổng quát: $y = C_1e^{x} + C_2e^{-x}$<br>$e^{x} \\to +\\infty$ khi $x \\to +\\infty$ nên nghiệm bị chặn buộc $C_1 = 0$<br>$y(0) = C_2 = 3 \\Rightarrow y = 3e^{-x}$<br>$100\\cdot y(1) = 300\\cdot e^{-1} \\approx 110{,}36$<br>Đáp số: $110$",
   "note": "Nghiệm bị chặn khi $x \\to +\\infty$ nên hệ số của số hạng có mũ dương phải bằng 0."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi các mặt $x = 0,\\ y = 0,\\ z = 0,\\ x + y = 3$ và $z = x^2 + y^2$. Tính thể tích của $V$ <i>(viết kết quả dưới dạng số thập phân nếu không nguyên)</i>.",
   "answer": [
    "13.5",
    "27/2"
   ],
   "explain": "$V = \\displaystyle\\int_0^3 dx\\int_0^{3-x}(x^2 + y^2)\\,dy = \\dfrac{27}{2}$<br>Đáp số: $13{,}5$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
