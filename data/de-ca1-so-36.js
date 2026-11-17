// ĐỀ SỐ 36 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-36",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 36",
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
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (3;-1;4)$ và $v = (1;1;0)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
   "options": [
    "$2$.",
    "$1$.",
    "$6$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 2,\\quad \\langle v, v\\rangle = 2 \\Rightarrow t = 1$<br>$p = v = (1;1;0)$, tổng các tọa độ: $2$",
   "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (0;0;3),\\ u_2 = (-1;0;2)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
   "options": [
    "$(-1;3;3)$.",
    "$(-2;0;7)$.",
    "$(-1;0;5)$.",
    "$(-2;0;1)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Với $w=(-1;3;3)$, tính định thức theo hàng đầu: $\\det\\begin{pmatrix}0 & 0 & 3\\\\ -1 & 0 & 2\\\\ -1 & 3 & 3\\end{pmatrix}= 0(0\\cdot3-2\\cdot3)-0(-1\\cdot3-2\\cdot-1)+3(-1\\cdot3-0\\cdot-1)=-9\\ne0$, nên ba véc tơ độc lập tuyến tính và tạo thành cơ sở<br><b>Sai:</b> $(-2;0;7) = u_{1} + 2 u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(-1;0;5) = u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(-2;0;1) = - u_{1} + 2 u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$"
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ $S$ gồm $u_1 = (-2;3;0;-2),\\ u_2 = (1;-3;0;0),\\ u_3 = (0;1;0;2),\\ u_4 = (1;0;0;2)$. Cần bổ sung vào $S$ ít nhất bao nhiêu véc tơ để hệ mới sinh ra toàn bộ $\\mathbb{R}^4$?",
   "options": [
    "$1$.",
    "$3$.",
    "$0$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Xếp các véc tơ thành hàng và đưa về dạng bậc thang: $\\begin{pmatrix}-2 & 3 & 0 & -2 \\\\ 0 & 3 & 0 & 2 \\\\ 0 & 0 & 0 & 4 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của $S$ bằng $3$, tức $S$ sinh ra một không gian con $3$ chiều<br>Cần thêm ít nhất $4 - 3 = 1$ véc tơ",
   "note": "Hệ sinh ra $\\mathbb{R}^4$ khi hạng bằng 4, nên cần thêm ít nhất $4 -$ hạng véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & -1 \\\\ -1 & 1\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = 4A - 2I$. Phần tử thuộc hàng 2 và cột 1 của ma trận $A^{4}$ bằng",
   "options": [
    "$-48$.",
    "$-14$.",
    "$1$.",
    "$48$."
   ],
   "answer": 0,
   "explain": "Với $\\operatorname{tr}A=4$ và $\\det A=2$, Cayley–Hamilton cho $A^2-(4)A+(2)I=0$, tức $A^2=4A-2I=\\begin{pmatrix}10 & -4 \\\\ -4 & 2\\end{pmatrix}$<br>Nhân đẳng thức $A^2=\\begin{pmatrix}10 & -4 \\\\ -4 & 2\\end{pmatrix}$ với $A$: $A^3=A^2A=\\begin{pmatrix}34 & -14 \\\\ -14 & 6\\end{pmatrix}$; do đó phần tử $(2,1)$ của $A^3$ là -14.<br>$A^4=A^2A^2=\\begin{pmatrix}116 & -48 \\\\ -48 & 20\\end{pmatrix}$; phần tử hàng 2, cột 1 của $A^{4}$ bằng -48.",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = -3$. Giá trị của $\\det\\left((-A)^3\\right)$ bằng",
   "options": [
    "$27$.",
    "$-27$.",
    "$-3$.",
    "$- \\dfrac{1}{3}$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left((-A)^3\\right) = \\left((-1)^3\\det A\\right)^3$<br>Thay $\\det A = -3$: kết quả $27$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cùng cấp $n \\ge 2$, kí hiệu $\\operatorname{tr}(M)$ là vết (tổng các phần tử trên đường chéo chính) của $M$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$.",
    "$\\operatorname{tr}(AB) = \\operatorname{tr}(A)\\cdot\\operatorname{tr}(B)$.",
    "$\\operatorname{tr}(A^2) = (\\operatorname{tr}A)^2$.",
    "Nếu $\\operatorname{tr}(A) = 0$ thì $A$ không khả nghịch."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$. $\\operatorname{tr}(AB)=\\sum_i(AB)_{ii}=\\sum_i\\sum_j a_{ij}b_{ji}$. Đổi thứ tự tổng hữu hạn: $\\sum_j\\sum_i b_{ji}a_{ij}=\\sum_j(BA)_{jj}=\\operatorname{tr}(BA)$.<br><b>Sai:</b> $\\operatorname{tr}(AB) = \\operatorname{tr}(A)\\cdot\\operatorname{tr}(B)$. Với $A = B = I$ cấp 2: $\\operatorname{tr}(AB) = 2$ còn $\\operatorname{tr}(A)\\cdot\\operatorname{tr}(B) = 4$.<br><b>Sai:</b> $\\operatorname{tr}(A^2) = (\\operatorname{tr}A)^2$. Với $A = I$ cấp 2: $\\operatorname{tr}(A^2) = 2$ còn $(\\operatorname{tr}A)^2 = 4$.<br><b>Sai:</b> Nếu $\\operatorname{tr}(A) = 0$ thì $A$ không khả nghịch. $A = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$ có vết bằng 0 nhưng $\\det A = -1 \\ne 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}-1 & -1 & -1 & 1 \\\\ -2 & -1 & -1 & -3 \\\\ 0 & 0 & 3 & 4 \\\\ 0 & 0 & 3 & -1\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$15$.",
    "$-16$.",
    "$11$.",
    "$-15$."
   ],
   "answer": 0,
   "explain": "$P=\\begin{pmatrix}-1 & -1 \\\\ -2 & -1\\end{pmatrix}$, khử hàng được $\\det P=-1$; $R=\\begin{pmatrix}3 & 4 \\\\ 3 & -1\\end{pmatrix}$, khử hàng được $\\det R=-15$.<br>Khai triển theo cấu trúc khối tam giác: $\\det A=\\det P\\det R=(-1)(-15)=15$.",
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
   "explain": "Đặt $u=Ax$. Quy đồng: $\\dfrac1{\\sin^2u}-\\dfrac1{u^2}=\\dfrac{u^2-\\sin^2u}{u^2\\sin^2u}$.<br>$\\sin^2u=(u-\\dfrac{u^3}{6}+o(u^3))^2=u^2-\\dfrac{u^4}{3}+o(u^4)$; do đó $u^2-\\sin^2u=\\dfrac{u^4}{3}+o(u^4)$ và $u^2\\sin^2u=u^4+o(u^4)$.<br>$\\lim_{u\\to0}\\dfrac{\\frac{u^4}{3}+o(u^4)}{u^4+o(u^4)}=\\dfrac13=\\dfrac{1}{3}$.",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 2}}{x + 2}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Khi $x\\to-2$, tử số $\\sqrt{x^2+c}\\to\\sqrt{r^2+c}>0$ còn $x-r\\to0$, nên $x=-2$ là tiệm cận đứng. Khi $x\\to+\\infty$, $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{\\sqrt{1+c/x^2}}{1-r/x}\\to1$; khi $x\\to-\\infty$, viết $|x|=-x$ được $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{-\\sqrt{1+c/x^2}}{1-r/x}\\to-1$.<br>Vậy có hai tiệm cận ngang $y=1$ và $y=-1$; tổng cộng $3$<br>Kết quả: $3$",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\sin x\\cos x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$- \\dfrac{2}{3}$.",
    "$0$.",
    "$-4$.",
    "$\\dfrac{2}{3}$."
   ],
   "answer": 0,
   "explain": "$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=x - \\dfrac{2}{3}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $- \\dfrac{2}{3}$.",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm hợp $z = u^2 + uv$ với $u = x y,\\ v = x - y$. Dùng quy tắc đạo hàm hàm hợp $z'_x = z'_u\\cdot u'_x + z'_v\\cdot v'_x$, giá trị của $z'_x$ tại điểm $(x;y) = (1;2)$ bằng",
   "options": [
    "$8$.",
    "$6$.",
    "$5$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "Tại điểm đã cho: $u = 2,\\ v = -1$<br>$z'_u = 2 u + v \\to 3,\\quad z'_v = u \\to 2$<br>$u'_x = y \\to 2,\\quad v'_x = 1 \\to 1$<br>$z'_x = (3)\\cdot(2) + (2)\\cdot(1) = 8$",
   "note": "Tính $u, v$ tại điểm đã cho trước rồi mới thay vào các đạo hàm riêng; phải cộng đủ hai nhánh qua $u$ và qua $v$."
  },
  {
   "q": "Người ta tính thể tích $V = \\dfrac13\\pi r^2h$ của một khối nón từ hai đại lượng đo được. Biết bán kính đáy $r$ được đo với sai số tương đối không quá 1% và chiều cao $h$ với sai số tương đối không quá 2%. Dùng vi phân toàn phần của $\\ln V$, sai số tương đối lớn nhất của $V$ xấp xỉ bằng",
   "options": [
    "4%.",
    "3%.",
    "0%.",
    "2%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln V=C+2\\ln u+1\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dV}{V}=+2\\dfrac{du}{u}+1\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Delta V|}{|V|}\\le 2\\dfrac{|\\Delta u|}{u}+1\\dfrac{|\\Delta v|}{v}$.<br>$= 2\\cdot1\\% + 1\\cdot2\\% = 4\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $2 x + 3 y = 39$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$117$.",
    "$39$.",
    "$234$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$L=x^2+y^2-\\lambda(2x+3y-39)$. Từ $L_x=2x-2\\lambda=0$ và $L_y=2y-3\\lambda=0$, ta có $x=\\dfrac{2\\lambda}{2}$, $y=\\dfrac{3\\lambda}{2}$.<br>Thay vào ràng buộc: $\\dfrac{4\\lambda}{2}+\\dfrac{9\\lambda}{2}=\\dfrac{(4+9)\\lambda}{2}=39$, nên $\\lambda=\\dfrac{239}{13}$.<br>$(x,y)=(\\dfrac{239}{13},\\dfrac{339}{13})$.<br>Khi đó $x^2+y^2=\\dfrac{41521+91521}{169}=\\dfrac{1521(4+9)}{169}=\\dfrac{1521}{13}=117$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\sqrt[n]{n}}$, $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1}{n\\ln n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n(n+1)}}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+1}{n^3+2}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\sqrt[n]{n}\\to1$, do đó $u_n=1/(n\\sqrt[n]n)\\sim1/n$; phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 2: $f(x)=1/(x\\ln x)$ giảm dương trên $[2,\\infty)$ và $\\int_2^B\\frac{dx}{x\\ln x}=\\ln\\ln B-\\ln\\ln2\\to\\infty$; chuỗi phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $u_n=1/\\sqrt{n(n+1)}\\sim1/n$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $u_n=\\dfrac{n+1}{n^3+2}\\sim\\dfrac{n}{n^3}=\\dfrac1{n^2}$; so sánh giới hạn với $\\displaystyle \\sum 1/n^2$ cho hội tụ. Kết luận: hội tụ.<br>Số chuỗi hội tụ: $1$",
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
   "explain": "Leibniz: $|S-S_n|\\le a_{n+1}=\\dfrac1{(n+1)^{2}}$. Muốn sai số không quá $\\varepsilon=0{,}01$, cần $\\dfrac1{(n+1)^{2}}\\le0{,}01$.<br>Biến đổi bất đẳng thức: $(n+1)^{2}\\ge100 \\Rightarrow n+1\\ge10\\approx10$.<br>$n$ nguyên nên $n\\ge9$; số nguyên nhỏ nhất là $n=9$.",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Xét bài toán Cauchy $y' = f(x,y),\\ y(x_0) = y_0$, trong đó $f$ và $f'_y$ liên tục trong một lân cận của điểm $(x_0;y_0)$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Trong một lân cận của $x_0$, bài toán có đúng một nghiệm.",
    "Bài toán có vô số nghiệm, phụ thuộc một hằng số tùy ý.",
    "Bài toán có thể vô nghiệm.",
    "Nghiệm của bài toán luôn xác định với mọi $x \\in \\mathbb{R}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Trong một lân cận của $x_0$, bài toán có đúng một nghiệm. Đây là định lí tồn tại và duy nhất nghiệm.<br><b>Sai:</b> Bài toán có vô số nghiệm, phụ thuộc một hằng số tùy ý. Nghiệm tổng quát của phương trình mới phụ thuộc hằng số $C$; điều kiện đầu đã xác định $C$.<br><b>Sai:</b> Bài toán có thể vô nghiệm. Với giả thiết $f$ liên tục, nghiệm luôn tồn tại trong một lân cận của $x_0$.<br><b>Sai:</b> Nghiệm của bài toán luôn xác định với mọi $x \\in \\mathbb{R}$. $y' = y^2,\\ y(0) = 1$ có nghiệm $y = \\dfrac{1}{1 - x}$, chỉ xác định khi $x < 1$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = 3xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{9}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{12}$.",
    "$\\dfrac{1}{18}$.",
    "$\\dfrac{1}{6}$.",
    "$12$."
   ],
   "answer": 0,
   "explain": "Đặt $z=1/y$, do đó $y^\\prime=-z^\\prime/z^2$.<br>Thay vào $y^\\prime+y/x=3xy^2$ rồi nhân với $-1$: $z^\\prime-z/x=-3x$.<br>Chia cho $x$: $(z/x)^\\prime=(xz^\\prime-z)/x^2=-3$. Tích phân hai vế: $z/x=-3x+C$, tức $z=x(C-3x)$.<br>$y(1)=1/z(1)=1/(C-3)=\\dfrac{1}{9}$ nên $C-3=1/\\dfrac{1}{9}=9$ và $C=12$.<br>$z(2)=2(C-23)=2(12-6)=12$; vậy $y(2)=1/z(2)=\\dfrac{1}{12}$.",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 4500 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 900$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số cá trong hồ sau 2 tháng bằng",
   "options": [
    "$1500$.",
    "$1800$.",
    "$2250$.",
    "$900$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=4$.<br>$kt=\\dfrac{\\ln2}{2}(2)=1\\ln2$, vì thế $e^{-kt}=e^{-1\\ln2}=2^{-1}=\\dfrac1{2}$.<br>$P(2)=\\dfrac{4500}{1+\\frac{4}{2}}=\\dfrac{4500\\cdot2}{2+4}=\\dfrac{9000}{6}=1500$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 4e^{x}$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
   "options": [
    "$6 e$.",
    "$4 e$.",
    "$8 e$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = C_{1} + C_2 = 4 \\Rightarrow C_2 = 2$<br>$y(1) = (2 + (2) + 2)e = 6 e$",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 4,\\ x \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>$x\\le0\\Leftrightarrow\\cos\\varphi\\le0\\Rightarrow\\pi/2\\le\\varphi\\le3\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{2}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
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
   "explain": "Vì $z=\\rho\\cos\\theta$ và $dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$, $I=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^3\\,d\\rho$.<br>Các tích phân bằng $2\\pi$, $[\\sin^2\\theta/2]_0^{\\dfrac{\\pi}{6}}=\\sin^2\\dfrac{\\pi}{6}/2$, và $[\\rh\\frac{o^4}{4}]_0^{3}=81/4$. Vậy $I=2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{6}}{2}\\cdot\\dfrac{81}{4}=\\dfrac{81 \\pi}{16}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1400 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 30% khách hàng của Y chuyển sang X. Hiện tại X có 700 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$600$.",
    "$800$.",
    "$700$.",
    "$630$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $1400-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(1400-x)$.<br>Nhân với $100$: $40x=30(1400-x)=42000-30x$, nên $(70)x=42000$ và $x=\\dfrac{42000}{70}=600$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 1 & -2 & 1 \\\\ 0 & 1 & 3 & 2 \\\\ 1 & 2 & 1 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 3$.",
    "$m = 4$.",
    "$m = -3$.",
    "$m = 2$."
   ],
   "answer": 0,
   "explain": "$R_3 \\leftarrow R_3 - R_1 - R_2$.<br>$A = \\begin{pmatrix}1 & 1 & -2 & 1 \\\\ 0 & 1 & 3 & 2 \\\\ 1 & 2 & 1 & m\\end{pmatrix} \\xrightarrow{R_3 \\leftarrow R_3 - R_1 - R_2} \\begin{pmatrix}1 & 1 & -2 & 1 \\\\ 0 & 1 & 3 & 2 \\\\ 0 & 0 & 0 & m - 3\\end{pmatrix}$.<br>$\\det \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix} = 1 \\ne 0$, nên hai hàng đầu độc lập tuyến tính.<br>$m = 3 \\Rightarrow R_3 = (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=2$.<br>$m \\ne 3 \\Rightarrow R_3 = (0,0,0,m - 3) \\ne (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=3$.<br><b>Kết quả:</b> $m = 3$.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 3 \\\\ 3 & 10\\end{pmatrix}$ và $B = \\begin{pmatrix}96 & 119 \\\\ 317 & 393\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A^2.X = B$. Tổng tất cả các phần tử của $X$ bằng",
   "options": [
    "$10$.",
    "$85$.",
    "$925$.",
    "$11$."
   ],
   "answer": 0,
   "explain": "$A^{-1} = \\begin{pmatrix}10 & -3 \\\\ -3 & 1\\end{pmatrix}$<br>$A.X = A^{-1}B = \\begin{pmatrix}9 & 11 \\\\ 29 & 36\\end{pmatrix}$<br>$X = A^{-1}(A^{-1}B) = \\begin{pmatrix}3 & 2 \\\\ 2 & 3\\end{pmatrix}$<br>Tổng các phần tử: $10$",
   "note": "$A^2X = B \\Rightarrow X = A^{-1}A^{-1}B$: nhân $A^{-1}$ vào bên trái hai lần."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y + z = 0\\\\ 3x + my + 3z = 0\\\\ -2x + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$4$.",
    "$-12$.",
    "$40$.",
    "$-4$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 4 m - 12 = \\left(m - 6\\right) \\left(m + 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -2$ hoặc $m = 6$<br>Giá trị cần tìm: $4$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{a - \\cos bx}{x^2} = 8$ với $b > 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$6$.",
    "$9$.",
    "$4$.",
    "$16$."
   ],
   "answer": 0,
   "explain": "Mẫu số tiến về 0 và giới hạn hữu hạn nên tử số cũng tiến về 0: $a - 1 = 0 \\Rightarrow a = 1$<br>$1 - \\cos bx \\sim \\dfrac{b^2x^2}{2}$ nên giới hạn bằng $\\dfrac{b^2}{2}$<br>$\\dfrac{b^2}{2} = 8 \\Rightarrow b = 4$ (vì $b > 0$)<br>$2a + b = 6$",
   "note": "Mẫu tiến về 0 mà giới hạn hữu hạn thì tử cũng phải tiến về 0: điều kiện này cho $a$."
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
   "explain": "Nhánh trái $g(x)=\\ln\\left(2 x + 1\\right)$ có $g(0)=0$, $g^\\prime(0)=2$, $g^{\\prime\\prime}(0)=-4$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=0,\\ b=2,\\ 2a=-4$, do đó $a=-2$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $2a + b=-2$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 7$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
   "options": [
    "$\\dfrac{14}{3}$.",
    "$\\dfrac{7}{2}$.",
    "$\\dfrac{7}{3}$.",
    "$\\dfrac{21}{4}$."
   ],
   "answer": 0,
   "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 7^2 = \\dfrac{49}{2}$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{7} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{7} = \\dfrac{343}{3}$<br>$\\bar{x} = \\dfrac{\\dfrac{343}{3}}{\\dfrac{49}{2}} = \\dfrac{14}{3}$"
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 40 nghìn đồng, hạng trung giá 60 nghìn đồng và hạng VIP giá 100 nghìn đồng. Ban tổ chức bán được tổng cộng 220 vé, thu về 12000 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là 20 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$30$.",
    "$70$.",
    "$40$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "Hệ phương trình: $\\begin{cases}x+y+z=220\\\\40x+60y+100z=12000\\\\x-y-z=20\\end{cases}$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 220\\\\ 40 & 60 & 100 & 12000\\\\ 1 & -1 & -1 & 20\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (40)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 220\\\\ 0 & 20 & 60 & 3200\\\\ 1 & -1 & -1 & 20\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 220\\\\ 0 & 20 & 60 & 3200\\\\ 0 & -2 & -2 & -200\\end{array}\\right)$$<br>$R_2 \\leftarrow \\dfrac{1}{20}R_2$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 220\\\\ 0 & 1 & 3 & 160\\\\ 0 & -2 & -2 & -200\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (1)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 60\\\\ 0 & 1 & 3 & 160\\\\ 0 & -2 & -2 & -200\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (-2)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 60\\\\ 0 & 1 & 3 & 160\\\\ 0 & 0 & 4 & 120\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{4}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 60\\\\ 0 & 1 & 3 & 160\\\\ 0 & 0 & 1 & 30\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (-2)R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 120\\\\ 0 & 1 & 3 & 160\\\\ 0 & 0 & 1 & 30\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (3)R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 120\\\\ 0 & 1 & 0 & 70\\\\ 0 & 0 & 1 & 30\\end{array}\\right)$$<br>$(x,y,z)=(120,70,30)$; số vé VIP đã bán: $z=30$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{5^n}$ bằng<span class=\"q-hint\">Gợi ý: $\\displaystyle\\sum_{n=1}^{+\\infty} nx^n = \\dfrac{x}{(1-x)^2}$ với $|x| < 1$.</span>",
   "options": [
    "$\\dfrac{5}{16}$.",
    "$\\dfrac{1}{4}$.",
    "$\\dfrac{25}{16}$.",
    "$\\dfrac{1}{16}$."
   ],
   "answer": 0,
   "explain": "$x = \\dfrac{1}{5}$: $\\dfrac{x}{(1-x)^2} = \\dfrac{\\frac{1}{5}}{\\left(\\frac{4}{5}\\right)^2} = \\dfrac{5}{16}$<br>Kết quả: $\\dfrac{5}{16}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\left[(-1)^{n-1}\\left(\\dfrac{3}{4}\\right)^n + \\dfrac{1}{4^{2n}}\\right] = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$), giá trị của $a + b$ bằng",
   "options": [
    "$157$.",
    "$53$.",
    "$61$.",
    "$160$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^{n-1}\\left(\\dfrac{3}{4}\\right)^n = \\dfrac{\\frac{3}{4}}{1 + \\frac{3}{4}} = \\dfrac{3}{7}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{16^n} = \\dfrac{\\frac{1}{16}}{1 - \\frac{1}{16}} = \\dfrac{1}{15}$<br>Tổng: $\\dfrac{52}{105} \\Rightarrow a + b = 157$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{1}{(2n+1)\\cdot4^n}$ bằng",
   "options": [
    "$\\ln 3$.",
    "$\\ln\\left(\\sqrt{3}\\right)$.",
    "$\\ln 2$.",
    "$\\ln 9$."
   ],
   "answer": 0,
   "explain": "$x=\\frac12$: $\\sum_{n\\ge0}\\frac{x^{2n+1}}{2n+1}=\\frac12\\ln\\frac{1+x}{1-x}=\\frac12\\ln3$. Mỗi $x^{2n+1}=1/(2\\cdot4^n)$, nên chuỗi cần tính bằng $2\\cdot\\frac12\\ln3=\\ln3$.<br>Vậy tổng của chuỗi bằng $\\ln 3$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = 2xe^{y}$ thỏa mãn $y(0) = 0$. Giá trị của $y\\left(\\dfrac12\\right)$ bằng",
   "options": [
    "$\\ln\\left(\\dfrac{4}{3}\\right)$.",
    "$0$.",
    "$1 - \\ln\\left(\\dfrac{3}{4}\\right)$.",
    "$\\ln\\left(\\dfrac{2 \\sqrt{3}}{3}\\right)$."
   ],
   "answer": 0,
   "explain": "Tách biến rồi tích phân hai vế: $e^{-y}\\,dy = 2x\\,dx \\Rightarrow -e^{-y} = x^2 + C$<br>$x=0,y=0$: $-e^{-y}=x^2+C$ gives $-1=0+C$, so $C=-1$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=- \\ln\\left(1 - x^{2}\\right)$.<br>Thay $x=\\dfrac12$ vào nghiệm: $y(\\dfrac12)=- \\ln\\left(\\dfrac{3}{4}\\right)=- \\ln\\left(\\dfrac{3}{4}\\right)$.",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - y = x^{2}e^x$ $(x > 0)$ thỏa mãn $y(1) = 1 + e$. Giá trị của $y(2)$ bằng",
   "options": [
    "$2 + 2 e^{2}$.",
    "$2 e^{2}$.",
    "$1 + e^{2}$.",
    "$2 e^{2} - 2$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{2}$: $\\left(\\dfrac{y}{x}\\right)' = e^x \\Rightarrow y = x(e^x + C)$<br>$y(1) = e + C = 1 + e \\Rightarrow C = 1$<br>$y(2) = 2\\left(e^2 + 1\\right) = 2 + 2 e^{2}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bể chứa 100 lít nước có hòa tan 30 kg muối. Người ta bơm vào bể nước muối nồng độ 0,1 kg/lít với tốc độ 3 lít/phút, đồng thời rút hỗn hợp (luôn được khuấy đều) ra khỏi bể với tốc độ 2 lít/phút, nên thể tích nước trong bể tăng dần. Lượng muối trong bể sau 50 phút là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "23,9.",
    "15,0.",
    "45,0.",
    "28,3."
   ],
   "answer": 0,
   "explain": "$V(t) = 100 + t$; $S' + \\dfrac{2}{100 + t}S = 0{,}3,\\quad S(0) = 30$<br>Nhân với thừa số tích phân $(100 + t)^2$: $\\left[S(100 + t)^2\\right]' = 0{,}3(100 + t)^2$<br>$S(100 + t)^2 = 0{,}1(100 + t)^3 + C$; $S(0) = 30 \\Rightarrow C = 200000$<br>$S(50) = 0{,}1\\cdot150 + \\dfrac{200000}{150^2} \\approx 23{,}9$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 9,\\ y \\ge |x|\\}$. Giá trị của tích phân $\\displaystyle\\iint_D y\\,dxdy$ bằng",
   "options": [
    "$9 \\sqrt{2}$.",
    "$\\dfrac{9 \\sqrt{2}}{2}$.",
    "$18 \\sqrt{2}$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 3,\\ \\dfrac{\\pi}{4} \\le \\varphi \\le \\dfrac{3\\pi}{4}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{3}\\left(r \\sin\\varphi\\right)r\\,dr = \\displaystyle \\int 9 \\sin\\varphi\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = 9 \\sqrt{2}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là hình cầu $x^2 + y^2 + z^2 \\le 25$. Giá trị của tích phân $\\displaystyle\\iiint_V (x^2 + y^2 + z^2)\\,dxdydz$ bằng",
   "options": [
    "$2500 \\pi$.",
    "$1250 \\pi$.",
    "$625 \\pi$.",
    "$\\dfrac{12500 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "$x^2+y^2+z^2=\\rho^2$ and $dV=\\rho^2\\sin\\theta\\,d\\rho d\\theta d\\varphi$, so $I=\\int_0^{2\\pi}d\\varphi\\int_0^\\pi\\sin\\theta\\,d\\theta\\int_0^{5}\\rho^4\\,d\\rho$.<br>Tích phân theo góc: $2\\pi\\cdot2$; theo bán kính: $[\\rh\\frac{o^5}{5}]_0^{5}=3125/5$. Hence $I=2\\pi\\cdot2\\cdot\\dfrac{3125}{5}=2500 \\pi$.",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Trong mặt phẳng $Oxy$, cho $L$ là đoạn thẳng nối từ $A(0;1)$ đến $B(6;9)$. Giá trị của tích phân $\\displaystyle\\int_L (3 x + y)\\,ds$ bằng",
   "options": [
    "$140$.",
    "$14$.",
    "$280$.",
    "$270$."
   ],
   "answer": 0,
   "explain": "Tham số hóa $x=0+6t,\\ y=1+8t$, $0\\le t\\le1$; $ds=\\sqrt{6^2+8^2}\\,dt=10\\,dt$.<br>$px+qy=p(<x1>+<dx>t)+q(<y1>+<dy>t)=1+26t$.<br>Do đó $\\displaystyle I=10\\int_0^1(1+26t)\\,dt=10(1+26/2)=140$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 3 y^{2} + 3)\\,dx + (x^{2} + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
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
   "stem": "Cho ma trận $A = \\begin{pmatrix}-3 & -2 \\\\ 4 & 3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$2$.",
      "$0$.",
      "$-1$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (0)\\lambda + (-1) = 0$ có nghiệm $-1$ và $1$<br>Kết quả: $2$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
     "options": [
      "$2$.",
      "$0$.",
      "$1$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(-1)^{4} + (1)^{4}$<br>Kết quả: $2$"
    },
    {
     "q": "Định thức của ma trận $A^2 - A$ bằng",
     "options": [
      "$0$.",
      "$2$.",
      "$1$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "$A^2 - 1A$ có các trị riêng $\\lambda^2 - 1\\lambda$: $2$ và $0$; định thức bằng tích của chúng<br>Kết quả: $0$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 6 x + y^{2} - 8 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 225\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 225$.",
   "questions": [
    {
     "q": "Giá trị nhỏ nhất của $f$ trên $D$ bằng",
     "options": [
      "$-25$.",
      "$75$.",
      "$0$.",
      "$25$."
     ],
     "answer": 0,
     "explain": "Điểm dừng $(3;4)$ nằm trong $D$ và $f = (x - 3)^2 + (y - 4)^2 - 25$<br>Kết quả: $-25$"
    },
    {
     "q": "Giá trị lớn nhất của $f$ trên $D$ bằng",
     "options": [
      "$375$.",
      "$225$.",
      "$75$.",
      "$435$."
     ],
     "answer": 0,
     "explain": "Trên biên $f = 225 - 2(3 x + 4 y)$, lớn nhất khi $3 x + 4 y$ nhỏ nhất, tức bằng $-15\\cdot5$<br>Kết quả: $375$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-9$.",
      "$9$.",
      "$3$.",
      "$-12$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(3;4)$: $\\left(-9;-12\\right)$<br>Kết quả: $-9$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = \\min\\{i,j\\}$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(A^{-1}A^TA\\right)$.",
   "answer": [
    "1"
   ],
   "explain": "$A = \\begin{pmatrix}1 & 1 & 1 & 1 \\\\ 1 & 2 & 2 & 2 \\\\ 1 & 2 & 3 & 3 \\\\ 1 & 2 & 3 & 4\\end{pmatrix}$, $\\det A = 1$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\dfrac{1}{\\det A}\\cdot\\det A\\cdot\\det A$ $= 1$<br>Đáp số: $1$",
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
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{5^n x^n}{n + 2^n}$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $3 a + 2 b$.",
   "answer": [
    "16"
   ],
   "explain": "$\\sqrt[n]{|a_n|} \\to \\dfrac{5}{2}$ nên $R = \\dfrac{2}{5}$<br>Đáp số: $16$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 4;\\ y'(0) = 0$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
   "answer": [
    "6"
   ],
   "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(0) - 3\\cdot4 + 2I = 0 \\Rightarrow I = \\dfrac{12}{2} = 6$",
   "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình."
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
