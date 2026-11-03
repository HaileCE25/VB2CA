// ĐỀ SỐ 27 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-27",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 27",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lao động và nghề nghiệp",
  "prompt": "Một công ty thay toàn bộ bộ phận nhập liệu bằng phần mềm trí tuệ nhân tạo. Chị Mai, 38 tuổi, mười lăm năm làm nhập liệu, được đề nghị học lại để chuyển sang kiểm tra và vận hành hệ thống mới. Chị phân vân: “Ở tuổi này học lại từ đầu thì quá muộn, mà không học thì không còn chỗ đứng.”",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về nỗi phân vân của chị Mai và về việc học suốt đời của người lao động trong thời đại công nghệ thay đổi nhanh.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-1;m;-2)$ và $v = (m;-1;1)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
   "options": [
    "$9$.",
    "$5$.",
    "$11$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = (-1)m + m(-1) + (-2)(1) = (-2)m + (-2)(1) = 0$<br>$(-2)m = -(-2)(1) \\Rightarrow m = \\dfrac{- (-2)(1)}{-2} = -1$<br>$u + v = ((-1) + (-1);\\ (-1) + (-1);\\ (-2) + (1)) = (-2;-2;-1)$<br>$|u + v|^2 = (-2)^2 + (-2)^2 + (-1)^2 = 4 + 4 + 1 = 9$",
   "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(0;1),\\ u_2(-3;3),\\ u_3(-1;1),\\ u_4(-1;2),\\ u_5(-6;6)\\}$. Có bao nhiêu hệ con gồm đúng 2 véc tơ của $S$ là cơ sở của $\\mathbb{R}^2$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$7$.",
    "$10$.",
    "$8$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Số hệ con cần xét: $C_5^2=10$.<br>$\\det\\begin{pmatrix}0 & 1\\\\-3 & 3\\end{pmatrix}=3$.<br>$\\det\\begin{pmatrix}0 & 1\\\\-1 & 1\\end{pmatrix}=1$.<br>$\\det\\begin{pmatrix}0 & 1\\\\-1 & 2\\end{pmatrix}=1$.<br>$\\det\\begin{pmatrix}0 & 1\\\\-6 & 6\\end{pmatrix}=6$.<br>$\\det\\begin{pmatrix}-3 & 3\\\\-1 & 1\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}-3 & 3\\\\-1 & 2\\end{pmatrix}=-3$.<br>$\\det\\begin{pmatrix}-3 & 3\\\\-6 & 6\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}-1 & 1\\\\-1 & 2\\end{pmatrix}=-1$.<br>$\\det\\begin{pmatrix}-1 & 1\\\\-6 & 6\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}-1 & 2\\\\-6 & 6\\end{pmatrix}=6$.<br>Hệ là cơ sở khi định thức khác 0; có 7 định thức khác 0 nên có 7 cơ sở.",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}0 & 3 & 2 & -1 & 3 \\\\ 1 & -4 & -1 & -1 & -4 \\\\ 1 & -1 & 1 & -2 & -1 \\\\ -1 & -1 & 1 & -2 & 3\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Khử Gauss cho dạng bậc thang: $A \\to \\begin{pmatrix}1 & -4 & -1 & -1 & -4 \\\\ 0 & 3 & 2 & -1 & 3 \\\\ 0 & 0 & 10 & -14 & 12 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$; có 3 hàng khác không nên hạng là 3.<br>Với $5$ ẩn và hạng 3, số ẩn tự do (số chiều hạt nhân) $= 5 - 3 = 2$.",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & 2 \\\\ -1 & 1\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = 3A - 4I$. Phần tử thuộc hàng 1 và cột 2 của ma trận $A^{3}$ bằng",
   "options": [
    "$10$.",
    "$-5$.",
    "$6$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Với $\\operatorname{tr}A=3$ và $\\det A=4$, Cayley–Hamilton cho $A^2-(3)A+(4)I=0$, tức $A^2=3A-4I=\\begin{pmatrix}2 & 6 \\\\ -3 & -1\\end{pmatrix}$<br>Nhân đẳng thức $A^2=\\begin{pmatrix}2 & 6 \\\\ -3 & -1\\end{pmatrix}$ với $A$: $A^3=A^2A=\\begin{pmatrix}-2 & 10 \\\\ -5 & -7\\end{pmatrix}$; do đó phần tử $(1,2)$ của $A^3$ là 10.<br>Phần tử hàng 1, cột 2 của $A^3$ là $10$.",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 3$. Giá trị của $\\det\\left(2A^{-1}\\right)$ bằng",
   "options": [
    "$\\dfrac{8}{3}$.",
    "$\\dfrac{2}{3}$.",
    "$- \\dfrac{8}{3}$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(2A^{-1}\\right) = 2^3\\cdot\\dfrac{1}{\\det A}$<br>Thay $\\det A = 3$: kết quả $\\dfrac{8}{3}$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^n$, cho hệ $S = \\{u_1, u_2, \\dots, u_k\\}$ độc lập tuyến tính. Phát biểu nào sau đây là đúng?",
   "options": [
    "Mọi hệ con khác rỗng của $S$ đều độc lập tuyến tính.",
    "Thêm một véc tơ bất kỳ vào $S$ thì hệ mới vẫn độc lập tuyến tính.",
    "$k = n$.",
    "Hệ $S$ là một cơ sở của $\\mathbb{R}^n$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Mọi hệ con khác rỗng của $S$ đều độc lập tuyến tính. Giả sử một hệ con có $\\sum_{i\\in J}c_i u_i=0$. Gán $c_i=0$ cho mọi chỉ số không thuộc $J$; ta được hệ thức $\\sum_{i=1}^k c_i u_i=0$ trong $S$. Vì $S$ độc lập nên mọi $c_i=0$, do đó hệ con cũng độc lập.<br><b>Sai:</b> Thêm một véc tơ bất kỳ vào $S$ thì hệ mới vẫn độc lập tuyến tính. Thêm chính véc tơ $u_1 + u_2$ (hoặc véc tơ không) thì hệ mới phụ thuộc tuyến tính.<br><b>Sai:</b> $k = n$. Chỉ có $k \\le n$; chẳng hạn một véc tơ khác không trong $\\mathbb{R}^3$ là hệ độc lập tuyến tính với $k = 1$.<br><b>Sai:</b> Hệ $S$ là một cơ sở của $\\mathbb{R}^n$. Chỉ đúng khi $k = n$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}6 & 3 & 3 & 3 \\\\ 3 & 6 & 3 & 3 \\\\ 3 & 3 & 6 & 3 \\\\ 3 & 3 & 3 & 6\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$405$.",
    "$81$.",
    "$45$.",
    "$1215$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1+h_2+h_3+h_4$: mỗi phần tử hàng 1 bằng $a+4b=15$. Rút $15$ khỏi hàng này để hàng đầu thành $(1,1,1,1)$, đồng thời nhân định thức với thừa số $15$.<br>Với hàng đầu $(1,1,1,1)$, thực hiện $h_i\\to h_i-(3)h_1$ với $i=2,3,4$: các phần tử ngoài đường chéo thành $b-b=0$, còn mỗi phần tử đường chéo dưới bằng $(a+b)-b=a$. Đường chéo là $1,3,3,3$.<br>$\\det A = (15)\\cdot(3)^3 = 405$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{2x} - 1 - \\sin 2x}{x^2}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$2$.",
    "$4$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Đặt $u=Ax$: $e^u-1=u+\\dfrac{u^2}{2}+o(u^2)$ và $\\sin u=u+o(u^2)$.<br>$(e^u-1)-\\sin u=(u+\\dfrac{u^2}{2}+o(u^2))-(u+o(u^2))=\\dfrac{u^2}{2}+o(u^2)=\\dfrac{A^2x^2}{2}+o(x^2)$.<br>Chia cả tử và mẫu cho $x^2$: $\\lim=\\dfrac{A^2/2+o(1)}{1}=\\dfrac{4}{2}=2$.",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{2 x - 8}{x^{2} - 1}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{2 \\left(x - 4\\right)}{\\left(x - 1\\right) \\left(x + 1\\right)}=\\dfrac{2 \\left(x - 4\\right)}{\\left(x - 1\\right) \\left(x + 1\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$.; Tại $x=1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=1$..<br>Chia đa thức: $\\dfrac{2 x - 8}{x^{2} - 1}=0+\\dfrac{2 x - 8}{x^{2} - 1}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\sin 3x\\cos x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$-6$.",
    "$0$.",
    "$-36$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\sin{\\left(3 x \\right)} = 3x - \\dfrac{9}{2}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=3x - 6x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $-6$.",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} - y^{2}$. Tại điểm $M(-1;-2)$, hàm số tăng nhanh nhất theo hướng của véc tơ gradient $\\nabla f(M) = (f'_x(M); f'_y(M))$ và tốc độ tăng lớn nhất bằng $|\\nabla f(M)|$. Giá trị của $|\\nabla f(M)|$ bằng",
   "options": [
    "$5$.",
    "$25$.",
    "$7$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2},\\quad f'_y = - 2 y$<br>$\\nabla f(M) = (3;4)$<br>$|\\nabla f(M)| = \\sqrt{(3)^2 + (4)^2} = \\sqrt{25} = 5$",
   "note": "Tốc độ tăng lớn nhất là độ dài của gradient, không phải tổng hai đạo hàm riêng."
  },
  {
   "q": "Người ta tính thể tích $V = \\dfrac43\\pi r^3$ của một quả cầu, sau đó nhân với khối lượng riêng $\\rho$ để được khối lượng $m = \\rho V$ từ hai đại lượng đo được. Biết bán kính $r$ được đo với sai số tương đối không quá 0,5% và khối lượng riêng $\\rho$ với sai số tương đối không quá 2%. Dùng vi phân toàn phần của $\\ln m$, sai số tương đối lớn nhất của $m$ xấp xỉ bằng",
   "options": [
    "3,5%.",
    "2,5%.",
    "0,5%.",
    "3%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln m=C+3\\ln u+1\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dm}{m}=+3\\dfrac{du}{u}+1\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Deltam|}{|m|}\\le 3\\dfrac{|\\Delta u|}{u}+1\\dfrac{|\\Delta v|}{v}$.<br>$= 3\\cdot0{,}5\\% + 1\\cdot2\\% = 3{,}5\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $3 x + 4 y = 25$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$25$.",
    "$50$.",
    "$1$.",
    "$625$."
   ],
   "answer": 0,
   "explain": "$L=x^2+y^2-\\lambda(3x+4y-25)$. Từ $L_x=2x-3\\lambda=0$ và $L_y=2y-4\\lambda=0$, ta có $x=\\dfrac{3\\lambda}{2}$, $y=\\dfrac{4\\lambda}{2}$.<br>Thay vào ràng buộc: $\\dfrac{9\\lambda}{2}+\\dfrac{16\\lambda}{2}=\\dfrac{(9+16)\\lambda}{2}=25$, nên $\\lambda=\\dfrac{225}{25}$.<br>$(x,y)=(\\dfrac{325}{25},\\dfrac{425}{25})$. Khi đó $x^2+y^2=\\dfrac{9625+16625}{625}=\\dfrac{625(9+16)}{625}=\\dfrac{625}{25}=25$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\arctan n}{n^2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n}{2n+1}\\right)^n$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{3^n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{n^2+1}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $0<\\arctan n<\\pi/2$, nên $0<\\arctan(n)/n^2<\\pi/(2n^2)$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 2: $\\sqrt[n]{u_n}=\\sqrt[n]{(n/(2n+1))^n}=n/(2n+1)\\to1/2<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 3: $\\dfrac{u_{n+1}}{u_n}=\\dfrac{(n+1)^2/3^{n+1}}{n^2/3^n}=\\dfrac{(n+1)^2}{3n^2}\\to1/3<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 4: $u_n=n/(n^2+1)\\sim1/n$; so sánh giới hạn với $1/n$ cho phân kỳ. Kết luận: phân kỳ.<br>Số chuỗi hội tụ: $3$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n(n+1)}{3n-1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{2^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{2n+1}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\ln(n+1)}$. Có bao nhiêu chuỗi bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối) trong bốn chuỗi trên?",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $|u_n|=(n+1)/(3n-1)\\to1/3\\ne0$, nên phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 2: $\\dfrac{|u_{n+1}|}{|u_n|}=\\dfrac{n+1}{2^{n+1}}\\dfrac{2^n}{n}=\\dfrac{n+1}{2n}\\to1/2<1$, nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 3: $a_n=1/(2n+1)\\downarrow0$ nên Leibniz hội tụ; $a_n\\sim1/(2n)$ nên trị tuyệt đối phân kỳ, do đó bán hội tụ. Kết luận: bán hội tụ.<br>Chuỗi thứ 4: $a_n=1/\\ln(n+1)\\downarrow0$ nên Leibniz hội tụ; $\\ln(n+1)<n$ nên $a_n>1/n$, vì vậy chuỗi trị tuyệt đối phân kỳ: bán hội tụ. Kết luận: bán hội tụ.<br>Số chuỗi bán hội tụ: $2$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Cho phương trình Bernoulli $y' + p(x)y = q(x)y^{\\alpha}$ với $\\alpha \\ne 0$ và $\\alpha \\ne 1$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Phép đặt $z = y^{1-\\alpha}$ đưa phương trình về phương trình tuyến tính cấp một đối với $z$.",
    "Phép đặt $z = y^{\\alpha}$ đưa phương trình về phương trình tuyến tính cấp một đối với $z$.",
    "Phép đặt $y = ux$ đưa phương trình về phương trình tách biến.",
    "Đây là phương trình tuyến tính nên giải trực tiếp bằng thừa số tích phân."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Phép đặt $z = y^{1-\\alpha}$ đưa phương trình về phương trình tuyến tính cấp một đối với $z$. Chia hai vế cho $y^{\\alpha}$: $y^{-\\alpha}y' + p\\,y^{1-\\alpha} = q$, mà $z' = (1 - \\alpha)y^{-\\alpha}y'$.<br><b>Sai:</b> Phép đặt $z = y^{\\alpha}$ đưa phương trình về phương trình tuyến tính cấp một đối với $z$. Phải đặt $z = y^{1-\\alpha}$; chẳng hạn $\\alpha = 2$ thì $z = \\dfrac1y$.<br><b>Sai:</b> Phép đặt $y = ux$ đưa phương trình về phương trình tách biến. Phép đặt $y = ux$ dùng cho phương trình đẳng cấp $y' = \\varphi\\left(\\dfrac{y}{x}\\right)$.<br><b>Sai:</b> Đây là phương trình tuyến tính nên giải trực tiếp bằng thừa số tích phân. Vế phải chứa $y^{\\alpha}$ nên phương trình không tuyến tính đối với $y$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{5}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{8}$.",
    "$\\dfrac{1}{10}$.",
    "$\\dfrac{1}{4}$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Đặt $z=1/y$, do đó $y^\\prime=-z^\\prime/z^2$. Thay vào $y^\\prime+y/x=1xy^2$ rồi nhân với $-1$: $z^\\prime-z/x=-1x$.<br>Chia cho $x$: $(z/x)^\\prime=(xz^\\prime-z)/x^2=-1$. Tích phân hai vế: $z/x=-1x+C$, tức $z=x(C-1x)$.<br>$y(1)=1/z(1)=1/(C-1)=\\dfrac{1}{5}$ nên $C-1=1/\\dfrac{1}{5}=5$ và $C=6$.<br>$z(2)=2(C-21)=2(6-2)=8$; vậy $y(2)=1/z(2)=\\dfrac{1}{8}$.",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 1800 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{1800}\\right)$ với $k = \\dfrac{\\ln 2}{3}$ và $P(0) = 200$. Biết nghiệm có dạng $P(t) = \\dfrac{1800}{1 + Ae^{-kt}}$. Số cá trong hồ sau 9 tháng bằng",
   "options": [
    "$900$.",
    "$1600$.",
    "$600$.",
    "$901$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=8$.<br>$kt=\\dfrac{\\ln2}{3}(9)=3\\ln2$, vì thế $e^{-kt}=e^{-3\\ln2}=2^{-3}=\\dfrac1{8}$.<br>$P(9)=\\dfrac{1800}{1+\\frac{8}{8}}=\\dfrac{1800\\cdot8}{8+8}=\\dfrac{14400}{16}=900$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = 1;\\ y'(0) = 6$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
   "options": [
    "$3 + \\pi$.",
    "$3$.",
    "$\\pi$.",
    "$3 - \\pi$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=6$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=3+\\pi=3 + \\pi$.",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Tích phân $I = \\displaystyle\\int_{0}^{1} dy\\int_{y}^{1} e^{-x^2}\\,dx$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
   "options": [
    "$- \\dfrac{1 - e}{2 e}$.",
    "$- \\dfrac{1 - e}{e}$.",
    "$- \\dfrac{1 - e}{4 e}$.",
    "$- \\dfrac{1 - e}{2 e} + 1$."
   ],
   "answer": 0,
   "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le y\\le1,\\ y\\le x\\le1$ becomes $0\\le x\\le1,\\ 0\\le y\\le x$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{1}x e^{- x^{2}}\\,dx$.<br>Tính nguyên hàm: $I=\\left[- \\dfrac{e^{- x^{2}}}{2}\\right]_{0}^{1}=- \\dfrac{1}{2 e}-- \\dfrac{1}{2}=- \\dfrac{1 - e}{2 e}$.",
   "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt nón $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 3,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{3},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$9 \\pi$.",
    "$6 \\pi^{2}$.",
    "$36 \\pi$.",
    "$\\dfrac{9 \\pi}{2}$."
   ],
   "answer": 0,
   "explain": "$V=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^2\\,d\\rho$. Các tích phân lần lượt bằng $2\\pi$, $[-\\cos\\theta]_0^{\\dfrac{\\pi}{3}}=1-\\cos\\dfrac{\\pi}{3}$ và $[\\rho^3/3]_0^{3}=27/3$.<br>$V=2\\pi(1-\\cos\\dfrac{\\pi}{3})\\dfrac{27}{3}=9 \\pi$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1200 nghìn người dùng, tổng số không đổi. Mỗi tháng có 20% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 400 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$720$.",
    "$480$.",
    "$600$.",
    "$560$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 30% của $1200-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{30}{100}(1200-x)$.<br>Nhân với $100$: $20x=30(1200-x)=36000-30x$, nên $(50)x=36000$ và $x=\\dfrac{36000}{50}=720$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (-1;-2;0),\\ u_2 = (-1;1;1)$ và $v = (-2;-1;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$1$.",
    "$-1$.",
    "$2$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = 3 - 3 m$<br>$3 - 3 m = 0 \\Leftrightarrow m = 1$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 3 \\\\ 2 & 7\\end{pmatrix}$ và $B = \\begin{pmatrix}65 & -14 \\\\ 149 & -32\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A^2.X = B$. Tổng tất cả các phần tử của $X$ bằng",
   "options": [
    "$0$.",
    "$21$.",
    "$168$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$A^{-1} = \\begin{pmatrix}7 & -3 \\\\ -2 & 1\\end{pmatrix}$<br>$A.X = A^{-1}B = \\begin{pmatrix}8 & -2 \\\\ 19 & -4\\end{pmatrix}$<br>$X = A^{-1}(A^{-1}B) = \\begin{pmatrix}-1 & -2 \\\\ 3 & 0\\end{pmatrix}$<br>Tổng các phần tử: $0$",
   "note": "$A^2X = B \\Rightarrow X = A^{-1}A^{-1}B$: nhân $A^{-1}$ vào bên trái hai lần."
  },
  {
   "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y - z + 3t = 0\\\\ x + 2z + 3t = 0\\\\ 2x + 2y + z + 6t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$4$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & 2 & -1 & 3 \\\\ 0 & -2 & 3 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 2$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 2 = 2$",
   "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{e^{x} - 1 - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + 2b + 6L$ bằng",
   "options": [
    "$3$.",
    "$\\dfrac{5}{3}$.",
    "$1$.",
    "$\\dfrac{17}{6}$."
   ],
   "answer": 0,
   "explain": "$e^{u} = 1 + u + \\dfrac{u^2}{2} + \\dfrac{u^3}{6} + o(u^3)$, với $u=x$, ta có $u^2=1x^2$ và $u^3=1x^3$.<br>Tử số sau khai triển là $(1-a)x+(\\dfrac{1}{2}-b)x^2+(\\dfrac{1}{6})x^3+o(x^3)$. Chia cho $x^3$: $\\dfrac{1-a}{x^2}+\\dfrac{\\dfrac{1}{2}-b}{x}+\\dfrac{1}{6}+o(1)$.<br>Để giới hạn hữu hạn, các hệ số phân kỳ triệt tiêu: $a=1$ và $b=\\dfrac{1}{2}$; hệ số còn lại cho $L=\\dfrac{1}{6}$.<br>1+2(\\dfrac{1}{2})+6(\\dfrac{1}{6})=1+1+1=3",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\ln(1 + 2x) & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ (xét trong lân cận của điểm $0$) có đạo hàm cấp hai tại $x = 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$-2$.",
    "$2$.",
    "$0$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=\\ln\\left(2 x + 1\\right)$ có $g(0)=0$, $g^\\prime(0)=2$, $g^{\\prime\\prime}(0)=-4$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$. Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=0,\\ b=2,\\ 2a=-4$, do đó $a=-2$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $2a + b=-2$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x(x + 3)}$ bằng",
   "options": [
    "$\\dfrac{2 \\ln 2}{3}$.",
    "$\\ln 4$.",
    "$\\ln 16$.",
    "$\\dfrac{1}{3}$."
   ],
   "answer": 0,
   "explain": "Phân tích phân thức: $\\dfrac1{x(x+3)}=\\dfrac1{3}\\left(\\dfrac1x-\\dfrac1{x+3}\\right)$ vì $\\dfrac{(x+3)-x}{3x(x+3)}=\\dfrac1{x(x+3)}$.<br>$I_R=\\dfrac1{3}\\left[\\ln x-\\ln(x+3)\\right]_1^R=\\dfrac1{3}\\ln\\dfrac{4R}{R+3}\\to\\dfrac1{3}\\ln4=\\dfrac{2 \\ln 2}{3}$.",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 60 + 0{,}75(Y - T)$; $T = 0{,}2Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 100$ và chi tiêu chính phủ $G_0 = 100$. Giá trị của số thuế $T^*$ tại trạng thái cân bằng bằng",
   "options": [
    "$130$.",
    "$650$.",
    "$450$.",
    "$260$."
   ],
   "answer": 0,
   "explain": "$T=tY\\Rightarrow C=c_0+b(Y-tY)=60+\\dfrac{3}{4}(1-\\dfrac{1}{5})Y$.<br>$Y=C+I_0+G_0\\Rightarrow [1-\\dfrac{3}{4}(1-\\dfrac{1}{5})]Y=60+100+100$.<br>$Y=\\dfrac{260}{1-\\dfrac{3}{4}(1-\\dfrac{1}{5})}=650$.<br>$T=tY=\\dfrac{1}{5}\\cdot650=130,\\qquad C=c_0+b(Y-T)=60+\\dfrac{3}{4}(650-130)=450$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Biết với $|x| < 1$ thì $\\displaystyle\\sum_{n=1}^{+\\infty} n^2x^n = \\dfrac{x(1 + x)}{(1 - x)^3}$. Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{5^n}$ bằng",
   "options": [
    "$\\dfrac{15}{32}$.",
    "$\\dfrac{5}{16}$.",
    "$\\dfrac{3}{32}$.",
    "$\\dfrac{15}{64}$."
   ],
   "answer": 0,
   "explain": "$x = \\dfrac{1}{5}$: $\\dfrac{x(1 + x)}{(1 - x)^3} = \\dfrac{\\frac{1}{5}\\cdot\\frac{6}{5}}{\\left(\\frac{4}{5}\\right)^3} = \\dfrac{15}{32}$<br>Kết quả: $\\dfrac{15}{32}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Một quả bóng được thả rơi từ độ cao 9 mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\\dfrac{1}{2}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng",
   "options": [
    "$27$.",
    "$18$.",
    "$36$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "$9 + 2\\displaystyle\\sum_{n=1}^{+\\infty}9\\left(\\dfrac{1}{2}\\right)^n = 9 + 2\\cdot\\dfrac{9\\cdot\\frac{1}{2}}{1 - \\frac{1}{2}} = 27$<br>Kết quả: $27$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{(-1)^n\\pi^{2n}}{9^n\\,(2n)!}$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{1}{3}$.",
    "$\\dfrac{\\sqrt{3}}{2}$.",
    "$- \\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$\\sum_{n\\ge0}\\frac{(-1)^n(\\pi/3)^{2n}}{(2n)!}=\\cos(\\pi/3)=\\frac12$.<br>Vậy tổng của chuỗi bằng $\\dfrac{1}{2}$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $xy' = 2y$ thỏa mãn $y(1) = 3$. Giá trị của $y\\left(2\\right)$ bằng",
   "options": [
    "$12$.",
    "$3$.",
    "$13$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Tách biến rồi tích phân hai vế: $\\dfrac{dy}{y} = \\dfrac{2\\,dx}{x} \\Rightarrow \\ln|y| = 2\\ln x + C$<br>$x=1,y=3$: $\\ln y=2\\ln x+C$ gives $\\ln3=0+C$, so $C=\\ln3$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=3 x^{2}$.<br>Thay $x=2$ vào nghiệm: $y(2)=12=12$.",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + 2y = 4e^{-2x}$ thỏa mãn $y(0) = 2$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{6}{e^{2}}$.",
    "$\\dfrac{2}{e^{2}}$.",
    "$\\dfrac{4}{e^{2}}$.",
    "$6 e^{2}$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{2x}$: $\\left(ye^{2x}\\right)' = 4$<br>$ye^{2x} = 4x + C \\Rightarrow y = (4x + C)e^{-2x}$<br>$y(0) = C = 2 \\Rightarrow y(1) = (4 + 2)e^{-2} = \\dfrac{6}{e^{2}}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một tách cà phê có nhiệt độ $90^\\circ C$ được đặt trong phòng có nhiệt độ không đổi $25^\\circ C$. Sau 5 phút, nhiệt độ cà phê là $65^\\circ C$. Theo định luật Newton, tốc độ nguội tỉ lệ với hiệu nhiệt độ giữa cà phê và phòng. Nhiệt độ của cà phê sau 15 phút kể từ lúc đầu (làm tròn đến hàng phần chục, đơn vị $^\\circ C$) là",
   "options": [
    "40,1.",
    "15,0.",
    "38,3.",
    "45,0."
   ],
   "answer": 0,
   "explain": "$T' = -k(T - 25) \\Rightarrow T(t) = 25 + 65e^{-kt}$ (vì $T(0) = 90$)<br>$T(5) = 65 \\Rightarrow e^{-5k} = \\dfrac{40}{65}$<br>$T(15) = 25 + 65\\left(\\dfrac{40}{65}\\right)^{3} \\approx 40{,}1$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 4,\\ y \\ge |x|\\}$. Giá trị của tích phân $\\displaystyle\\iint_D y^2\\,dxdy$ bằng",
   "options": [
    "$2 + \\pi$.",
    "$\\dfrac{4}{3} + \\dfrac{2 \\pi}{3}$.",
    "$4 + 2 \\pi$.",
    "$\\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 2,\\ \\dfrac{\\pi}{4} \\le \\varphi \\le \\dfrac{3\\pi}{4}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{2}\\left(r^{2} \\sin^{2}\\varphi\\right)r\\,dr = \\int 4 \\sin^{2}\\varphi\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = 2 + \\pi$",
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
   "q": "Cho $L$ là một vòng của đường xoắn ốc $x = 5\\cos t,\\ y = 5\\sin t,\\ z = 12t$ với $0 \\le t \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\int_L z\\,ds$ bằng",
   "options": [
    "$312 \\pi^{2}$.",
    "$24 \\pi^{2}$.",
    "$156 \\pi^{2}$.",
    "$624 \\pi^{2}$."
   ],
   "answer": 0,
   "explain": "$x^\\prime=-5\\sin t,\\ y^\\prime=5\\cos t,\\ z^\\prime=12$; hence $ds=\\sqrt{(-5\\sin t)^2+(5\\cos t)^2+12^2}\\,dt=13\\,dt$.<br>$\\displaystyle I=\\int_0^{2\\pi}12t\\cdot13\\,dt=1213\\left[\\frac{t^2}{2}\\right]_0^{2\\pi}=2\\pi^21213=312 \\pi^{2}$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 1,\\ 0 \\le y \\le 1$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- x y)\\,dx + x y\\,dy$ bằng",
   "options": [
    "$1$.",
    "$-1$.",
    "$2$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = x + y$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{1}\\left(x + y\\right)dy$<br>$I = 1$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-7 & 5 \\\\ -10 & 8\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$13$.",
      "$1$.",
      "$-6$.",
      "$7$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (1)\\lambda + (-6) = 0$ có nghiệm $-2$ và $3$<br>Kết quả: $13$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{5}$ bằng",
     "options": [
      "$211$.",
      "$1$.",
      "$-7776$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "$A^{5} = PD^{5}P^{-1}$ có cùng vết với $D^{5}$: $(-2)^{5} + (3)^{5}$<br>Kết quả: $211$"
    },
    {
     "q": "Định thức của ma trận $A^2 - 2A$ bằng",
     "options": [
      "$24$.",
      "$48$.",
      "$11$.",
      "$-24$."
     ],
     "answer": 0,
     "explain": "$A^2 - 2A$ có các trị riêng $\\lambda^2 - 2\\lambda$: $8$ và $3$; định thức bằng tích của chúng<br>Kết quả: $24$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 12 x + y^{2} - 16 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 1600\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 1600$.",
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
     "explain": "Điểm dừng $(6;8)$ nằm trong $D$ và $f = (x - 6)^2 + (y - 8)^2 - 100$<br>Kết quả: $-100$"
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
     "explain": "Trên biên $f = 1600 - 2(6 x + 8 y)$, lớn nhất khi $6 x + 8 y$ nhỏ nhất, tức bằng $-40\\cdot10$<br>Kết quả: $2400$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-24$.",
      "$24$.",
      "$6$.",
      "$-32$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(6;8)$: $\\left(-24;-32\\right)$<br>Kết quả: $-24$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = \\max\\{i,j\\} - |i - j|^2$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(2A\\right)$.",
   "answer": [
    "528"
   ],
   "explain": "$A = \\begin{pmatrix}1 & 1 & -1 & -5 \\\\ 1 & 2 & 2 & 0 \\\\ -1 & 2 & 3 & 3 \\\\ -5 & 0 & 3 & 4\\end{pmatrix}$, $\\det A = 33$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\left(2\\right)^4\\cdot\\det A$ $= 528$<br>Đáp số: $528$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, khử về dạng tam giác; $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y,z) = 2 x + 2 y + z$ trên mặt cầu $x^2 + y^2 + z^2 = 1$.",
   "answer": [
    "3"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(2;2;1)$; $f_{\\max} = 1\\sqrt{2^2 + 2^2 + 1^2} = 3$<br>Đáp số: $3$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{7^n x^n}{n + 3^n}$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $a + 4 b$.",
   "answer": [
    "31"
   ],
   "explain": "$\\sqrt[n]{|a_n|} \\to \\dfrac{7}{3}$ nên $R = \\dfrac{3}{7}$<br>Đáp số: $31$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y' - 2y = -3e^{2x}$ với điều kiện $y(0) = 2;\\ y'(0) = 0$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "-54"
   ],
   "explain": "$k = 2$ là nghiệm đơn của phương trình đặc trưng nên $y^* = -xe^{2x}$; $y = e^{2x} + e^{-x} - xe^{2x}$; $y(2) \\approx -54{,}46$<br>Đáp số: $-54$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt elipxoit $\\dfrac{x^2}{1} + \\dfrac{y^2}{4} + \\dfrac{z^2}{9} = 1$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "8"
   ],
   "explain": "Đổi biến $x = 1u,\\ y = 2v,\\ z = 3w$ (Jacobian $6$) đưa về hình cầu đơn vị: $V = 6\\cdot\\dfrac{4\\pi}{3} = 8\\pi$<br>Đáp số: $8$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
