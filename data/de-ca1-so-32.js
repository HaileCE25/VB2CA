// ĐỀ SỐ 32 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-32",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 32",
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
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-2;3;-2)$ và $v = (-1;2;1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
   "options": [
    "$2$.",
    "$6$.",
    "$1$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 6,\\quad \\langle v, v\\rangle = 6 \\Rightarrow t = 1$<br>$p = v = (-1;2;1)$, tổng các tọa độ: $2$",
   "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (3;0;-2),\\ u_2 = (-2;1;0)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
   "options": [
    "$(-2;1;-1)$.",
    "$(1;1;-2)$.",
    "$(5;-1;-2)$.",
    "$(8;-1;-4)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Với $w=(-2;1;-1)$, tính định thức theo hàng đầu: $\\det\\begin{pmatrix}3 & 0 & -2\\\\ -2 & 1 & 0\\\\ -2 & 1 & -1\\end{pmatrix}= 3(1\\cdot-1-0\\cdot1)-0(-2\\cdot-1-0\\cdot-2)+-2(-2\\cdot1-1\\cdot-2)=-3\\ne0$, nên ba véc tơ độc lập tuyến tính và tạo thành cơ sở<br><b>Sai:</b> $(1;1;-2) = u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(5;-1;-2) = u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(8;-1;-4) = 2 u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$"
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ $S$ gồm $u_1 = (1;0;3;1),\\ u_2 = (1;-1;0;1),\\ u_3 = (2;-1;3;2),\\ u_4 = (3;1;3;3)$. Cần bổ sung vào $S$ ít nhất bao nhiêu véc tơ để hệ mới sinh ra toàn bộ $\\mathbb{R}^4$?",
   "options": [
    "$1$.",
    "$3$.",
    "$0$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Xếp các véc tơ thành hàng và đưa về dạng bậc thang: $\\begin{pmatrix}1 & 0 & 3 & 1 \\\\ 0 & -1 & -3 & 0 \\\\ 0 & 0 & 9 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của $S$ bằng $3$, tức $S$ sinh ra một không gian con $3$ chiều<br>Cần thêm ít nhất $4 - 3 = 1$ véc tơ",
   "note": "Hệ sinh ra $\\mathbb{R}^4$ khi hạng bằng 4, nên cần thêm ít nhất $4 -$ hạng véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & 1 \\\\ -2 & -1\\end{pmatrix}$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{6}$ bằng<span class=\"q-hint\">Gợi ý: dùng $A^k = A$ với mọi $k \\ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$.</span>",
   "options": [
    "$2$.",
    "$128$.",
    "$65$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$(I + A)^n = I + \\displaystyle\\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$<br>$(I + A)^{6} = I + 63A = \\begin{pmatrix}127 & 63 \\\\ -126 & -62\\end{pmatrix}$<br>Tổng các phần tử: $2$",
   "note": "Khi $A^2 = A$ thì mọi lũy thừa của $A$ đều bằng $A$; và $C_n^1 + \\dots + C_n^n = 2^n - 1$."
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
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$ và $\\lambda$ là một trị riêng của $A$ với véc tơ riêng $X$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\lambda^2$ là một trị riêng của $A^2$ với cùng véc tơ riêng $X$.",
    "$2X$ là véc tơ riêng của $A$ ứng với trị riêng $2\\lambda$.",
    "$\\lambda + 1$ là một trị riêng của $A$.",
    "$X$ là véc tơ riêng của mọi ma trận vuông cấp $n$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\lambda^2$ là một trị riêng của $A^2$ với cùng véc tơ riêng $X$. Từ $AX=\\lambda X$, suy ra $A^2X=A(AX)=A(\\lambda X)=\\lambda AX=\\lambda(\\lambda X)=\\lambda^2X$; $X\\ne0$ vẫn là véc tơ riêng, với trị riêng $\\lambda^2$.<br><b>Sai:</b> $2X$ là véc tơ riêng của $A$ ứng với trị riêng $2\\lambda$. $A(2X) = 2\\lambda X = \\lambda(2X)$ nên $2X$ vẫn ứng với trị riêng $\\lambda$.<br><b>Sai:</b> $\\lambda + 1$ là một trị riêng của $A$. $(A + I)X = (\\lambda + 1)X$ nên $\\lambda + 1$ là trị riêng của $A + I$, không phải của $A$.<br><b>Sai:</b> $X$ là véc tơ riêng của mọi ma trận vuông cấp $n$. Véc tơ riêng phụ thuộc vào ma trận; chẳng hạn $(1;0)^T$ là véc tơ riêng của $\\begin{pmatrix}1&0\\\\0&2\\end{pmatrix}$ nhưng không là véc tơ riêng của $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}-2 & 1 & 3 & -2 \\\\ 0 & 3 & -3 & -1 \\\\ 0 & 0 & 3 & -1 \\\\ 0 & 0 & 1 & 0\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$-6$.",
    "$-5$.",
    "$3$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$P=\\begin{pmatrix}-2 & 1 \\\\ 0 & 3\\end{pmatrix}$, khử hàng được $\\det P=-6$; $R=\\begin{pmatrix}3 & -1 \\\\ 1 & 0\\end{pmatrix}$, khử hàng được $\\det R=1$.<br>Khai triển theo cấu trúc khối tam giác: $\\det A=\\det P\\det R=(-6)(1)=-6$.",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty}\\left[x^2\\left(e^{\\frac{3}{x}} - 1\\right) - 3x\\right]$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{9}{2}$.",
    "$9$.",
    "$0$.",
    "$\\dfrac{3}{2}$."
   ],
   "answer": 0,
   "explain": "Đặt $t = \\dfrac{3}{x} \\to 0$: $e^{t} - 1 = t + \\dfrac{t^2}{2} + o(t^2)$<br>$x^2\\left(e^{t} - 1\\right) = x^2\\left(\\dfrac{3}{x} + \\dfrac{9}{2x^2} + o\\left(\\dfrac{1}{x^2}\\right)\\right) = 3x + \\dfrac{9}{2} + o(1)$<br>$\\displaystyle \\lim = \\dfrac{9}{2} = \\dfrac{9}{2}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Cho hàm số $f$ liên tục trên đoạn $[a;b]$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f(a)\\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc $(a;b)$.",
    "Nếu $f(a)\\cdot f(b) > 0$ thì phương trình $f(x) = 0$ vô nghiệm trên $(a;b)$.",
    "$f$ có đạo hàm tại mọi điểm thuộc $(a;b)$.",
    "$f$ có thể không bị chặn trên $[a;b]$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f(a)\\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc $(a;b)$. Đây là định lí giá trị trung gian (Bolzano – Cauchy).<br><b>Sai:</b> Nếu $f(a)\\cdot f(b) > 0$ thì phương trình $f(x) = 0$ vô nghiệm trên $(a;b)$. $f(x) = x^2 - 1$ trên $[-2;2]$ có $f(-2)f(2) > 0$ nhưng vẫn có nghiệm $x = \\pm1$.<br><b>Sai:</b> $f$ có đạo hàm tại mọi điểm thuộc $(a;b)$. $f(x) = |x|$ liên tục trên $[-1;1]$ nhưng không có đạo hàm tại $0$.<br><b>Sai:</b> $f$ có thể không bị chặn trên $[a;b]$. Hàm liên tục trên một đoạn thì bị chặn và đạt giá trị lớn nhất, nhỏ nhất (định lí Weierstrass)."
  },
  {
   "q": "Cho hàm số $f(x) = x^{2}e^{2x}$. Giá trị của $f'(1)$ bằng",
   "options": [
    "$4 e^{2}$.",
    "$1 + 4 e^{2}$.",
    "$8 e^{2}$.",
    "$- 4 e^{2}$."
   ],
   "answer": 0,
   "explain": "$f'(x) = 2x^{1}e^{2x} + 2x^{2}e^{2x}$<br>$f'(1) = 4 e^{2}$"
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} - x y$. Tại điểm $M(3;2)$, hàm số tăng nhanh nhất theo hướng của véc tơ gradient $\\nabla f(M) = (f'_x(M); f'_y(M))$ và tốc độ tăng lớn nhất bằng $|\\nabla f(M)|$. Giá trị của $|\\nabla f(M)|$ bằng",
   "options": [
    "$5$.",
    "$25$.",
    "$7$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x - y,\\quad f'_y = - x$<br>$\\nabla f(M) = (4;-3)$<br>$|\\nabla f(M)| = \\sqrt{(4)^2 + (-3)^2} = \\sqrt{25} = 5$",
   "note": "Tốc độ tăng lớn nhất là độ dài của gradient, không phải tổng hai đạo hàm riêng."
  },
  {
   "q": "Người ta tính chu kỳ $T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ của con lắc đơn từ hai đại lượng đo được. Biết chiều dài $l$ được đo với sai số tương đối không quá 1% và gia tốc trọng trường $g$ với sai số tương đối không quá 1%. Dùng vi phân toàn phần của $\\ln T$, sai số tương đối lớn nhất của $T$ xấp xỉ bằng",
   "options": [
    "1%.",
    "2%.",
    "0%.",
    "0,25%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln T=C+\\dfrac{1}{2}\\ln u-\\dfrac{1}{2}\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dT}{T}=+\\dfrac{1}{2}\\dfrac{du}{u}-\\dfrac{1}{2}\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Delta T|}{|T|}\\le \\dfrac{1}{2}\\dfrac{|\\Delta u|}{u}+\\dfrac{1}{2}\\dfrac{|\\Delta v|}{v}$.<br>$= \\dfrac{1}{2}\\cdot1\\% + \\dfrac{1}{2}\\cdot1\\% = 1\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị lớn nhất của hàm số $f(x,y) = 8 x + 15 y$ với điều kiện $x^2 + y^2 = 4$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$34$.",
    "$17$.",
    "$46$.",
    "$68$."
   ],
   "answer": 0,
   "explain": "$L=8x+15y-\\lambda(x^2+y^2-4)$. Điều kiện dừng: $8-2\\lambda x=0,\\ 15-2\\lambda y=0$, nên $x=\\dfrac{8}{2\\lambda}$, $y=\\dfrac{15}{2\\lambda}$.<br>Ràng buộc cho $\\dfrac{289}{4\\lambda^2}=4$, tức $\\lambda^2=\\dfrac{289}{4r^2}=\\dfrac{h^2}{4r^2}$; hai dấu cho hai điểm đối nhau, dấu dương cho cực đại.<br>Với $\\lambda=\\dfrac{h}{2r}$: $(x,y)=(\\dfrac{8r}{h},\\dfrac{15r}{h})$.<br>Khi đó $f_{\\max}=\\dfrac{64r}{h}+\\dfrac{225r}{h}=\\dfrac{(64+225)r}{h}=rh=34$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2n+1}{n\\cdot 3^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2^n}{n!}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\sqrt n}{n+1}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\dfrac{u_{n+1}}{u_n}=\\dfrac{2n+3}{3(2n+1)}\\to1/3<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 2: $\\dfrac{u_{n+1}}{u_n}=\\dfrac{2^{n+1}/(n+1)!}{2^n/n!}=\\dfrac2{n+1}\\to0<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 3: $\\sqrt n/(n+1)\\sim1/\\sqrt n$; chuỗi $p$ với $p=1/2$ phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $\\tan(1/n^2)\\sim1/n^2$; chuỗi hội tụ theo so sánh giới hạn. Kết luận: hội tụ.<br>Số chuỗi phân kỳ: $1$",
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
   "explain": "Leibniz: $|S-S_n|\\le a_{n+1}=\\dfrac1{(n+1)^{2}}$. Muốn sai số không quá $\\varepsilon=0{,}0001$, cần $\\dfrac1{(n+1)^{2}}\\le0{,}0001$.<br>Biến đổi bất đẳng thức: $(n+1)^{2}\\ge10000 \\Rightarrow n+1\\ge100\\approx100$.<br>$n$ nguyên nên $n\\ge99$; số nguyên nhỏ nhất là $n=99$.",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân đẳng cấp (thuần nhất) cấp một?",
   "options": [
    "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$.",
    "$xy' + y = y^2\\ln x$.",
    "$y' + x^2y = \\sin x$.",
    "$(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — Vế phải viết được thành hàm của $\\dfrac{y}{x}$, tức dạng $y' = f\\left(\\dfrac{y}{x}\\right)$; $\\dfrac yx+\\tan(y/x)$ chỉ phụ thuộc tỉ số $y/x$.<br><b>Sai:</b> $xy' + y = y^2\\ln x$ — Chia cho $x\\ne0$: $y'+\\dfracx y=\\dfrac{\\ln x}{x}y^2$, Bernoulli với $\\alpha=2$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $y' + x^2y = \\sin x$ — Đã ở dạng $y'+x^2y=\\sin x$: $p(x)=x^2,\\ q(x)=\\sin x$.; đây là là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không phải dạng đang hỏi.<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — $P=(y\\cos x + 2x),\\ Q=\\sin x - 2y$: $\\frac{\\partial P}{\\partial y}=\\cos x$ và $\\frac{\\partial Q}{\\partial x}=\\cos x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = 2xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{6}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{8}$.",
    "$\\dfrac{1}{12}$.",
    "$\\dfrac{1}{4}$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Đặt $z=1/y$, do đó $y^\\prime=-z^\\prime/z^2$.<br>Thay vào $y^\\prime+y/x=2xy^2$ rồi nhân với $-1$: $z^\\prime-z/x=-2x$.<br>Chia cho $x$: $(z/x)^\\prime=(xz^\\prime-z)/x^2=-2$. Tích phân hai vế: $z/x=-2x+C$, tức $z=x(C-2x)$.<br>$y(1)=1/z(1)=1/(C-2)=\\dfrac{1}{6}$ nên $C-2=1/\\dfrac{1}{6}=6$ và $C=8$.<br>$z(2)=2(C-22)=2(8-4)=8$; vậy $y(2)=1/z(2)=\\dfrac{1}{8}$.",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
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
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=8$.<br>$kt=\\dfrac{\\ln2}{5}(10)=2\\ln2$, vì thế $e^{-kt}=e^{-2\\ln2}=2^{-2}=\\dfrac1{4}$.<br>$P(10)=\\dfrac{4500}{1+\\frac{8}{4}}=\\dfrac{4500\\cdot4}{4+8}=\\dfrac{18000}{12}=1500$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 2e^{-x}$ với điều kiện $y(0) = 2;\\ y'(0) = 0$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{5}{e}$.",
    "$\\dfrac{4}{e}$.",
    "$\\dfrac{6}{e}$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{-x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = - C_{1} + C_2 = 0 \\Rightarrow C_2 = 2$<br>$y(1) = (2 + (2) + 1)e^{-1} = \\dfrac{5}{e}$",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>$y\\ge0\\Leftrightarrow r\\sin\\varphi\\ge0\\Rightarrow\\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 3,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{4},\\ 0 \\le \\varphi \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{81 \\pi}{8}$.",
    "$\\dfrac{81 \\pi}{4}$.",
    "$\\dfrac{81 \\pi}{16}$.",
    "$\\dfrac{81 \\sqrt{2} \\pi}{4}$."
   ],
   "answer": 0,
   "explain": "Vì $z=\\rho\\cos\\theta$ và $dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$, $I=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{4}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^3\\,d\\rho$.<br>Các tích phân bằng $2\\pi$, $[\\sin^2\\theta/2]_0^{\\dfrac{\\pi}{4}}=\\sin^2\\dfrac{\\pi}{4}/2$, và $[\\rh\\frac{o^4}{4}]_0^{3}=81/4$. Vậy $I=2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{4}}{2}\\cdot\\dfrac{81}{4}=\\dfrac{81 \\pi}{8}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 40% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 700 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$900$.",
    "$1200$.",
    "$1050$.",
    "$840$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $40x=30(2100-x)=63000-30x$, nên $(70)x=63000$ và $x=\\dfrac{63000}{70}=900$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;1;0;1),\\ u_2(1;0;-2;1),\\ u_3(0;-1;-2;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne 0$.",
    "$m = 0$.",
    "với mọi giá trị của $m$.",
    "$m \\ne -1$."
   ],
   "answer": 0,
   "explain": "$R_3 \\leftarrow R_3 + R_1 - R_2$.<br>$A = \\begin{pmatrix}1 & 1 & 0 & 1 \\\\ 1 & 0 & -2 & 1 \\\\ 0 & -1 & -2 & m\\end{pmatrix} \\xrightarrow{R_3 \\leftarrow R_3 + R_1 - R_2} \\begin{pmatrix}1 & 1 & 0 & 1 \\\\ 1 & 0 & -2 & 1 \\\\ 0 & 0 & 0 & m\\end{pmatrix}$.<br>$\\det \\begin{pmatrix}1 & 1 \\\\ 1 & 0\\end{pmatrix} = -1 \\ne 0$, nên hai hàng đầu độc lập tuyến tính.<br>$m = 0 \\Rightarrow R_3 = (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=2$.<br>$m \\ne 0 \\Rightarrow R_3 = (0,0,0,m) \\ne (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=3$.<br><b>Kết quả:</b> $m = 0$.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}2 & 1 \\\\ 2 & 4\\end{pmatrix}$ và $B = \\begin{pmatrix}0 & 1 \\\\ 1 & 3\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X = X + B$ là",
   "options": [
    "$\\begin{pmatrix}-1 & 0 \\\\ 1 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}-2 & 1 \\\\ -3 & 2\\end{pmatrix}$.",
    "$\\begin{pmatrix}-1 & 1 \\\\ 0 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}1 & 0 \\\\ -1 & -1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$AX=X+B \\Rightarrow (A-I)X=B$.<br>$A-I=\\begin{pmatrix}1 & 1 \\\\ 2 & 3\\end{pmatrix},\\qquad B=\\begin{pmatrix}0 & 1 \\\\ 1 & 3\\end{pmatrix}$.<br>$X=(A-I)^{-1}B=\\begin{pmatrix}3 & -1 \\\\ -2 & 1\\end{pmatrix}\\begin{pmatrix}0 & 1 \\\\ 1 & 3\\end{pmatrix}=\\begin{pmatrix}-1 & 0 \\\\ 1 & 1\\end{pmatrix}$.<br>Kiểm tra: $\\begin{pmatrix}2 & 1 \\\\ 2 & 4\\end{pmatrix}\\begin{pmatrix}-1 & 0 \\\\ 1 & 1\\end{pmatrix}=\\begin{pmatrix}-1 & 0 \\\\ 1 & 1\\end{pmatrix}+\\begin{pmatrix}0 & 1 \\\\ 1 & 3\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + z + 2t = 0\\\\ -x - y + z = 0\\\\ 2x - z - 2t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
   "options": [
    "$1$.",
    "$3$.",
    "$4$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & -2 & 1 & 2 \\\\ 0 & -3 & 2 & 2 \\\\ 0 & 0 & 1 & 10\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 3$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 3 = 1$",
   "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{a - \\cos bx}{x^2} = \\dfrac{9}{2}$ với $b > 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$5$.",
    "$\\dfrac{11}{2}$.",
    "$3$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "Mẫu số tiến về 0 và giới hạn hữu hạn nên tử số cũng tiến về 0: $a - 1 = 0 \\Rightarrow a = 1$<br>$1 - \\cos bx \\sim \\dfrac{b^2x^2}{2}$ nên giới hạn bằng $\\dfrac{b^2}{2}$<br>$\\dfrac{b^2}{2} = \\dfrac{9}{2} \\Rightarrow b = 3$ (vì $b > 0$)<br>$2a + b = 5$",
   "note": "Mẫu tiến về 0 mà giới hạn hữu hạn thì tử cũng phải tiến về 0: điều kiện này cho $a$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{4x} & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a + b + d$ bằng",
   "options": [
    "$13$.",
    "$8$.",
    "$5$.",
    "$21$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=e^{4 x}$ có $g(0)=1$, $g^\\prime(0)=4$, $g^{\\prime\\prime}(0)=16$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=4,\\ 2a=16$, do đó $a=8$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $a + b + d=13$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 1$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
   "options": [
    "$\\dfrac{\\ln\\left(1 + \\sqrt{2}\\right)}{2} + \\dfrac{\\sqrt{2}}{2}$.",
    "$\\dfrac{\\ln\\left(1 + \\sqrt{2}\\right)}{4} + \\dfrac{\\sqrt{2}}{4}$.",
    "$\\ln\\left(1 + \\sqrt{2}\\right) + \\sqrt{2}$.",
    "$\\dfrac{\\ln\\left(1 + \\sqrt{2}\\right)}{2} + \\dfrac{\\sqrt{2}}{2} + 1$."
   ],
   "answer": 0,
   "explain": "$y' = x$, $L = \\displaystyle\\int_0^{1}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{1} = \\dfrac{\\ln\\left(1 + \\sqrt{2}\\right)}{2} + \\dfrac{\\sqrt{2}}{2}$"
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 30 nghìn đồng, hạng trung giá 50 nghìn đồng và hạng VIP giá 90 nghìn đồng. Ban tổ chức bán được tổng cộng 170 vé, thu về 7700 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là -10 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$20$.",
    "$70$.",
    "$30$.",
    "$15$."
   ],
   "answer": 0,
   "explain": "Hệ phương trình: $\\begin{cases}x+y+z=170\\\\30x+50y+90z=7700\\\\x-y-z=-10\\end{cases}$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 170\\\\ 30 & 50 & 90 & 7700\\\\ 1 & -1 & -1 & -10\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (30)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 170\\\\ 0 & 20 & 60 & 2600\\\\ 1 & -1 & -1 & -10\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 170\\\\ 0 & 20 & 60 & 2600\\\\ 0 & -2 & -2 & -180\\end{array}\\right)$$<br>$R_2 \\leftarrow \\dfrac{1}{20}R_2$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 170\\\\ 0 & 1 & 3 & 130\\\\ 0 & -2 & -2 & -180\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (1)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 40\\\\ 0 & 1 & 3 & 130\\\\ 0 & -2 & -2 & -180\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (-2)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 40\\\\ 0 & 1 & 3 & 130\\\\ 0 & 0 & 4 & 80\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{4}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 40\\\\ 0 & 1 & 3 & 130\\\\ 0 & 0 & 1 & 20\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (-2)R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 80\\\\ 0 & 1 & 3 & 130\\\\ 0 & 0 & 1 & 20\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (3)R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 80\\\\ 0 & 1 & 0 & 70\\\\ 0 & 0 & 1 & 20\\end{array}\\right)$$<br>$(x,y,z)=(80,70,20)$; số vé VIP đã bán: $z=20$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Bằng cách tách $\\dfrac{1}{n(n+7)} = \\dfrac{1}{7}\\left(\\dfrac1n - \\dfrac{1}{n+7}\\right)$, tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n(n+7)}$ bằng",
   "options": [
    "$\\dfrac{363}{980}$.",
    "$\\dfrac{1}{7}$.",
    "$\\dfrac{363}{140}$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$S_N = \\dfrac{1}{7}\\displaystyle\\sum_{n=1}^{N}\\left(\\dfrac1n - \\dfrac{1}{n+7}\\right) = \\dfrac{1}{7}\\left(1 + \\dfrac12 + \\dfrac13 + \\dfrac14 + \\dfrac15 + \\dfrac16 + \\dfrac17 - \\sum_{n=N+1}^{N+7}\\dfrac1n\\right)$<br>$N \\to +\\infty$: $S = \\dfrac{1}{7}\\cdot\\dfrac{363}{140} = \\dfrac{363}{980}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
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
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{n!}$ bằng",
   "options": [
    "$2 e$.",
    "$e$.",
    "$3 e$.",
    "$e^{2}$."
   ],
   "answer": 0,
   "explain": "Riêng $n=1$ cho $1$. Với $n\\ge2$, $\\frac{n^2}{n!}=\\frac1{(n-2)!}+\\frac1{(n-1)!}$. Tổng là $1+\\sum_{m\\ge0}1/m!+\\sum_{m\\ge1}1/m!=1+e+(e-1)=2e$.<br>Vậy tổng của chuỗi bằng $2 e$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = 3x^2(y + 1)$ thỏa mãn $y(0) = 1$. Giá trị của $y\\left(1\\right)$ bằng",
   "options": [
    "$2 e - 1$.",
    "$1$.",
    "$2 e$.",
    "$- \\dfrac{1}{2} + e$."
   ],
   "answer": 0,
   "explain": "Tách biến rồi tích phân hai vế: $\\dfrac{dy}{y+1} = 3x^2\\,dx \\Rightarrow \\ln|y+1| = x^3 + C$<br>$x=0,y=1$: $\\ln|y+1|=x^3+C$ gives $\\ln2=0+C$, so $C=\\ln2$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=2 e^{x^{3}} - 1$.<br>Thay $x=1$ vào nghiệm: $y(1)=2 e - 1=2 e - 1$.",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - y = x^{2}e^x$ $(x > 0)$ thỏa mãn $y(1) = e - 1$. Giá trị của $y(2)$ bằng",
   "options": [
    "$2 e^{2} - 2$.",
    "$2 e^{2}$.",
    "$e^{2} - 1$.",
    "$2 + 2 e^{2}$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{2}$: $\\left(\\dfrac{y}{x}\\right)' = e^x \\Rightarrow y = x(e^x + C)$<br>$y(1) = e + C = e - 1 \\Rightarrow C = -1$<br>$y(2) = 2\\left(e^2 - 1\\right) = 2 e^{2} - 2$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một tách cà phê có nhiệt độ $90^\\circ C$ được đặt trong phòng có nhiệt độ không đổi $25^\\circ C$. Sau 5 phút, nhiệt độ cà phê là $60^\\circ C$. Theo định luật Newton, tốc độ nguội tỉ lệ với hiệu nhiệt độ giữa cà phê và phòng. Nhiệt độ của cà phê sau 15 phút kể từ lúc đầu (làm tròn đến hàng phần chục, đơn vị $^\\circ C$) là",
   "options": [
    "35,1.",
    "0,0.",
    "36,7.",
    "42,5."
   ],
   "answer": 0,
   "explain": "$T' = -k(T - 25) \\Rightarrow T(t) = 25 + 65e^{-kt}$ (vì $T(0) = 90$)<br>$T(5) = 60 \\Rightarrow e^{-5k} = \\dfrac{35}{65}$<br>$T(15) = 25 + 65\\left(\\dfrac{35}{65}\\right)^{3} \\approx 35{,}1$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 4,\\ y \\ge \\sqrt{3}\\,|x|\\}$. Giá trị của tích phân $\\displaystyle\\iint_D y\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{8}{3}$.",
    "$2$.",
    "$\\dfrac{16}{3}$.",
    "$\\dfrac{4}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 2,\\ \\dfrac{\\pi}{3} \\le \\varphi \\le \\dfrac{2\\pi}{3}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{2}\\left(r \\sin\\varphi\\right)r\\,dr = \\displaystyle \\int \\dfrac{8 \\sin\\varphi}{3}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{8}{3}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là miền nằm giữa hai mặt cầu $x^2 + y^2 + z^2 = 25$ và $x^2 + y^2 + z^2 = 49$. Giá trị của tích phân $\\displaystyle\\iiint_V \\dfrac{dxdydz}{x^2 + y^2 + z^2}$ bằng",
   "options": [
    "$8 \\pi$.",
    "$4 \\pi$.",
    "$96 \\pi$.",
    "$\\dfrac{872 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "In tọa độ cầu, $\\frac1{x^2+y^2+z^2}dV=\\frac1{\\rho^2}\\rho^2\\sin\\theta\\,d\\rho d\\theta d\\varphi$, nên $I=\\int_0^{2\\pi}d\\varphi\\int_0^\\pi\\sin\\theta\\,d\\theta\\int_{5}^{7}1\\,d\\rho$.<br>Tích phân bán kính là $[\\,\\rho\\,]_{5}^{7}=7-5$; tích phân góc là $2\\pi\\cdot2$. Vậy $I=2\\pi\\cdot2\\cdot(7-5)=8 \\pi$.",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là một vòng của đường xoắn ốc $x = \\cos t,\\ y = \\sin t,\\ z = t$ với $0 \\le t \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\int_L z\\,ds$ bằng",
   "options": [
    "$2 \\sqrt{2} \\pi^{2}$.",
    "$2 \\pi^{2}$.",
    "$\\sqrt{2} \\pi^{2}$.",
    "$4 \\sqrt{2} \\pi^{2}$."
   ],
   "answer": 0,
   "explain": "$x^\\prime=-1\\sin t,\\ y^\\prime=1\\cos t,\\ z^\\prime=1$; hence $ds=\\sqrt{(-1\\sin t)^2+(1\\cos t)^2+1^2}\\,dt=\\sqrt{2}\\,dt$.<br>$\\displaystyle I=\\int_0^{2\\pi}t\\cdot\\sqrt{2}\\,dt=1\\sqrt{2}\\left[\\frac{t^2}{2}\\right]_0^{2\\pi}=2\\pi^21\\sqrt{2}=2 \\sqrt{2} \\pi^{2}$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 1,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
   "options": [
    "$8$.",
    "$-8$.",
    "$2$.",
    "$16$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{2}\\left(4 y\\right)dy$<br>$I = 8$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$.",
   "questions": [
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
     "options": [
      "$-1$.",
      "$1$.",
      "$-2$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>Vết của $A^2$: $-1$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
     "options": [
      "$-2$.",
      "$-4$.",
      "$-1$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-2 & 2 \\\\ -6 & 4\\end{pmatrix}$<br>Tổng các phần tử: $-2$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
     "options": [
      "$-3$.",
      "$1$.",
      "$3$.",
      "$-2$."
     ],
     "answer": 0,
     "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>Tổng các phần tử: $-3$",
     "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 12 x + y^{2} - 16 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 400\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 400$.",
   "questions": [
    {
     "q": "Giá trị nhỏ nhất của $f$ trên $D$ bằng",
     "options": [
      "$-100$.",
      "$0$.",
      "$100$.",
      "$-101$."
     ],
     "answer": 0,
     "explain": "Điểm dừng $(6;8)$ nằm trong $D$ và $f = (x - 6)^2 + (y - 8)^2 - 100$<br>Kết quả: $-100$"
    },
    {
     "q": "Giá trị lớn nhất của $f$ trên $D$ bằng",
     "options": [
      "$800$.",
      "$400$.",
      "$0$.",
      "$960$."
     ],
     "answer": 0,
     "explain": "Trên biên $f = 400 - 2(6 x + 8 y)$, lớn nhất khi $6 x + 8 y$ nhỏ nhất, tức bằng $-20\\cdot10$<br>Kết quả: $800$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-12$.",
      "$12$.",
      "$6$.",
      "$-16$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(6;8)$: $\\left(-12;-16\\right)$<br>Kết quả: $-12$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 4 & 4 \\\\ 0 & -2 & 1 \\\\ 0 & 0 & -2\\end{pmatrix}$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\\det\\left(A - A^T\\right)$.",
   "answer": [
    "0"
   ],
   "explain": "$S=A-A^T=\\begin{pmatrix}0 & 4 & 4 \\\\ -4 & 0 & 1 \\\\ -4 & -1 & 0\\end{pmatrix}$, nên $S^T=-S$.<br>Do đó $\\det S=\\det(S^T)=\\det(-S)=(-1)^3\\det S=-\\det S$, suy ra $2\\det S=0$ và $\\det S=0$.",
   "note": "$A + A^T$ đối xứng; $A - A^T$ phản đối xứng, và ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0."
  },
  {
   "q": "Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $x + 2 y + 2 z = 9$.",
   "answer": [
    "9"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(1;2;2)$ với $t = \\dfrac{9}{9}$; $f_{\\min} = \\dfrac{9^2}{9} = 9$<br>Đáp số: $9$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(x - 1)^{2n}}{n\\cdot16^n}$?<span class=\"q-hint\">Chú ý: xét riêng hai đầu mút của khoảng hội tụ.</span>",
   "answer": [
    "7"
   ],
   "explain": "Hội tụ khi $(x - 1)^2 < 16$; tại hai đầu mút chuỗi trở thành $\\displaystyle \\sum\\dfrac1n$ phân kỳ, nên miền hội tụ là khoảng $(-3;5)$<br>Đáp số: $7$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 6y' + 8y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
   "answer": [
    "1"
   ],
   "explain": "Nghiệm đặc trưng $k = -2,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 6\\left[y\\right]_0^{+\\infty} + 8\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(2) - 6\\cdot1 + 8I = 0 \\Rightarrow I = \\dfrac{8}{8} = 1$",
   "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt paraboloid $z = 30 - x^2 - y^2$. Biết thể tích của $V$ bằng $k\\pi$, tính $6k$.",
   "answer": [
    "2125"
   ],
   "explain": "Hai mặt cắt nhau khi $r = 30 - r^2$, tức $r = 5$: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{5}(30 - r^2 - r)\\,r\\,dr = \\dfrac{2125}{6}\\pi$<br>Đáp số: $2125$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
