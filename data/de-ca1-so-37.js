// ĐỀ SỐ 37 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-37",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 37",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Tiêu dùng và tài chính",
  "prompt": "Minh, 24 tuổi, đi làm được hai năm với thu nhập 12 triệu đồng mỗi tháng. Minh dùng dịch vụ “mua trước, trả sau” để đổi điện thoại đời mới, thanh toán trả góp một chuyến du lịch “cho bằng bạn bằng bè” và thường xuyên đặt hàng trong các đợt giảm giá lúc nửa đêm. Đến khi mẹ ốm cần một khoản tiền gấp, Minh nhận ra tài khoản tiết kiệm của mình bằng không, còn các khoản phải trả hằng tháng đã chiếm hơn nửa thu nhập. Minh nói: “Mình có tiêu gì to tát đâu, toàn những khoản nhỏ.”",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về câu chuyện trên và về thói quen tiêu dùng, kỷ luật tài chính cá nhân của người trẻ hiện nay.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;4;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
   "options": [
    "$6$.",
    "$5$.",
    "$8$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$\\langle u,v\\rangle=(m)(m)+(4)(m)+(1)(0)=m^{2} + 4 m=m \\left(m + 4\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -4 \\text{ hoặc } m > 0$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, 1, 2, 3, 4, 5\\}$; có $6$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ $S = \\{u_1(0;-1;0),\\ u_2(2;3;-1),\\ u_3(-2;3;m)\\}$ với $m$ là tham số. Hệ $S$ là một cơ sở của $\\mathbb{R}^3$ khi và chỉ khi",
   "options": [
    "$m \\ne 1$.",
    "$m = 1$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 3$."
   ],
   "answer": 0,
   "explain": "Ba véc tơ trong $\\mathbb{R}^3$ là cơ sở khi và chỉ khi định thức của ma trận có ba hàng là các véc tơ khác 0.<br>Khai triển định thức: $\\det(u_1,u_2,u_3)=2 m - 2=2 \\left(m - 1\\right)$<br>Giải $2 m - 2=0$: $m=1$; do đó định thức khác 0 khi và chỉ khi $m\\ne1$",
   "note": "Số véc tơ đã bằng số chiều nên chỉ cần định thức khác 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}-1 & 3 \\\\ 0 & -2 \\\\ 1 & 2\\end{pmatrix}$ và $B = \\begin{pmatrix}-1 & 0 & 2 \\\\ -1 & 3 & 2\\end{pmatrix}$. Biết hạng của một tích không vượt quá hạng của mỗi thừa số, hạng của ma trận $AB$ (cấp $3\\times3$) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\operatorname{rank}A = 2,\\ \\operatorname{rank}B = 2$ nên $\\operatorname{rank}(AB) \\le 2$<br>$AB = \\begin{pmatrix}-2 & 9 & 4 \\\\ 2 & -6 & -4 \\\\ -3 & 6 & 6\\end{pmatrix}$, dạng bậc thang: $\\begin{pmatrix}-2 & 9 & 4 \\\\ 0 & -6 & 0 \\\\ 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}(AB) = 2$",
   "note": "$\\operatorname{rank}(AB) \\le \\min\\{\\operatorname{rank}A, \\operatorname{rank}B\\}$, nên tích của ma trận $3\\times2$ với $2\\times3$ không thể có hạng 3."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}4 & -2 \\\\ 4 & 3\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x + y$ bằng",
   "options": [
    "$-13$.",
    "$27$.",
    "$140$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}8 & -14 \\\\ 28 & 1\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = 7$<br>So sánh phần tử hàng 1, cột 1: $8 = 7\\cdot(4) + y \\Rightarrow y = -20$<br>$x + y = -13$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}0 & -1 & 0 \\\\ 3 & 2 & -2 \\\\ -1 & -2 & 0\\end{pmatrix}$. Biết $A^{-1} = \\dfrac{1}{\\det A}\\left(A_{ji}\\right)$, trong đó $A_{ji}$ là phần bù đại số của phần tử $a_{ji}$ (chú ý thứ tự chỉ số). Phần tử thuộc hàng 3 và cột 2 của ma trận $A^{-1}$ bằng",
   "options": [
    "$- \\dfrac{1}{2}$.",
    "$0$.",
    "$\\dfrac{1}{2}$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$\\det A = -2$. To find entry $(3,2)$ of $A^{-1}$, use the cofactor with reversed indices $(2,3)$.<br>Remove row 2 and column 3: $M_{23}=\\det(\\begin{pmatrix}0 & -1 \\\\ -1 & -2\\end{pmatrix})=-1$, hence $A_{23}=(-1)^{2+3}(-1)=1$.<br>$\\left(A^{-1}\\right)_{32}=\\dfrac{A_{23}}{\\det A}=\\dfrac{1}{-2}=- \\dfrac{1}{2}$.",
   "note": "Phần tử hàng $i$, cột $j$ của $A^{-1}$ là $\\dfrac{A_{ji}}{\\det A}$: chỉ số bị đảo, và nhớ dấu $(-1)^{i+j}$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$ thỏa mãn $A^2 = 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$I - A$ khả nghịch và $(I - A)^{-1} = I + A$.",
    "$A$ là ma trận không.",
    "$A$ khả nghịch.",
    "$I + A$ không khả nghịch."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $I - A$ khả nghịch và $(I - A)^{-1} = I + A$. Nhân trực tiếp: $(I-A)(I+A)=I+A-A-A^2=I-A^2=I$, và $(I+A)(I-A)=I-A^2=I$. Hai tích đều là $I$, vậy nghịch đảo của $I-A$ là $I+A$.<br><b>Sai:</b> $A$ là ma trận không. $A = \\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$ khác ma trận không nhưng $A^2 = 0$.<br><b>Sai:</b> $A$ khả nghịch. $(\\det A)^2 = \\det(A^2) = 0$ nên $\\det A = 0$.<br><b>Sai:</b> $I + A$ không khả nghịch. $(I + A)(I - A) = I$ nên $I + A$ khả nghịch."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}1 & -1 & -1 & -1 \\\\ -1 & 1 & -1 & -1 \\\\ -1 & -1 & 1 & -1 \\\\ -1 & -1 & -1 & 1\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$-16$.",
    "$16$.",
    "$-4$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1+h_2+h_3+h_4$: mỗi phần tử hàng 1 bằng $a+4b=-2$. Rút $-2$ khỏi hàng này để hàng đầu thành $(1,1,1,1)$, đồng thời nhân định thức với thừa số $-2$.<br>Với hàng đầu $(1,1,1,1)$, thực hiện $h_i\\to h_i-(-1)h_1$ với $i=2,3,4$: các phần tử ngoài đường chéo thành $b-b=0$, còn mỗi phần tử đường chéo dưới bằng $(a+b)-b=a$. Đường chéo là $1,2,2,2$.<br>$\\det A = (-2)\\cdot(2)^3 = -16$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\sin 3x - 3x\\cos 3x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$9$.",
    "$\\dfrac{9}{2}$.",
    "$\\dfrac{27}{2}$.",
    "$27$."
   ],
   "answer": 0,
   "explain": "Đặt $u=3x$.<br>Khi đó $\\sin u=u-\\dfrac{u^3}{6}+o(u^3)$ và $u\\cos u=u-\\dfrac{u^3}{2}+o(u^3)$.<br>$\\sin u-u\\cos u=(u-\\dfrac{u^3}{6})-(u-\\dfrac{u^3}{2})+o(u^3)=(\\dfrac12-\\dfrac16)u^3+o(u^3)=\\dfrac{u^3}{3}+o(u^3)$.<br>$\\dfrac{\\sin(Ax)-Ax\\cos(Ax)}{x^3}=\\dfrac{A^3\\frac{x^3}{3}+o(x^3)}{x^3}\\to\\dfrac{27}{3}=9$.",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} - 4}{x^{2} - x - 6}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 2\\right) \\left(x + 2\\right)}{\\left(x - 3\\right) \\left(x + 2\\right)}=\\dfrac{x - 2}{x - 3}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-2$, tử cũng bằng $0$ nên nhân tử $(x--2)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=3$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=3$..<br>Chia đa thức: $\\dfrac{x - 2}{x - 3}=1+\\dfrac{1}{x - 3}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 2.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Cho hàm số $f(x) = \\ln(x^2 + 4x + 10)$. Giá trị của $f'(2)$ bằng",
   "options": [
    "$\\dfrac{4}{11}$.",
    "$\\dfrac{2}{11}$.",
    "$\\dfrac{4}{7}$.",
    "$- \\dfrac{4}{11}$."
   ],
   "answer": 0,
   "explain": "$f'(x) = \\dfrac{2x + 4}{x^2 + 4x + 10}$<br>$f'(2) = \\dfrac{8}{22} = \\dfrac{4}{11}$"
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} y$. Tại điểm $M(3;-2)$, hàm số tăng nhanh nhất theo hướng của véc tơ gradient $\\nabla f(M) = (f'_x(M); f'_y(M))$ và tốc độ tăng lớn nhất bằng $|\\nabla f(M)|$. Giá trị của $|\\nabla f(M)|$ bằng",
   "options": [
    "$15$.",
    "$225$.",
    "$21$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x y,\\quad f'_y = x^{2}$<br>$\\nabla f(M) = (-12;9)$<br>$|\\nabla f(M)| = \\sqrt{(-12)^2 + (9)^2} = \\sqrt{225} = 15$",
   "note": "Tốc độ tăng lớn nhất là độ dài của gradient, không phải tổng hai đạo hàm riêng."
  },
  {
   "q": "Người ta tính thể tích $V = \\dfrac13\\pi r^2h$ của một khối nón từ hai đại lượng đo được. Biết bán kính đáy $r$ được đo với sai số tương đối không quá 2% và chiều cao $h$ với sai số tương đối không quá 2%. Dùng vi phân toàn phần của $\\ln V$, sai số tương đối lớn nhất của $V$ xấp xỉ bằng",
   "options": [
    "6%.",
    "4%.",
    "2%.",
    "8%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln V=C+2\\ln u+1\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dV}{V}=+2\\dfrac{du}{u}+1\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Delta V|}{|V|}\\le 2\\dfrac{|\\Delta u|}{u}+1\\dfrac{|\\Delta v|}{v}$.<br>$= 2\\cdot2\\% + 1\\cdot2\\% = 6\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Một mảnh vườn hình chữ nhật có hai kích thước $x > 0,\\ y > 0$ (mét) thỏa mãn ràng buộc về vật liệu rào $2 x + y = 8$. Diện tích $S = xy$ lớn nhất của mảnh vườn bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$8$.",
    "$16$.",
    "$32$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$L=xy-\\lambda(2x+y-8)$. $L_x=y-2\\lambda=0$ và $L_y=x-1\\lambda=0$, vì thế $y=2\\lambda$, $x=1\\lambda$.<br>Thay vào ràng buộc: $2\\lambda+2\\lambda=2(2)(1)\\lambda=8$, nên $\\lambda=\\dfrac{8}{2(2)(1)}$.<br>$x=\\dfrac{8}{22}$, $y=\\dfrac{8}{21}$. Vậy $S_{\\max}=xy=\\dfrac{8}{22}\\cdot\\dfrac{8}{21}=\\dfrac{64}{421}=8$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n + 1}{3n + 2}\\right)^{n}$. Đặt $C = \\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}$, khi đó:",
   "options": [
    "$C = \\dfrac{1}{3}$ và chuỗi hội tụ.",
    "$C = \\dfrac{1}{3}$ và chuỗi phân kỳ.",
    "$C = \\dfrac{1}{9}$ và chuỗi hội tụ.",
    "$C = 1$ và chuỗi hội tụ."
   ],
   "answer": 0,
   "explain": "$u_n=\\left(\\dfrac{n+1}{3n+2}\\right)^n$; do đó $\\sqrt[n]{u_n}=\\dfrac{n+1}{3n+2}\\to\\dfrac{1}{3}$<br>$C < 1$ nên theo tiêu chuẩn Cauchy chuỗi hội tụ",
   "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\sin\\dfrac1n$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt{n+1}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{2^n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$. Có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$4$.",
    "$1$.",
    "$3$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $a_n=\\sin(1/n)\\downarrow0$ nên Leibniz hội tụ; $\\sin(1/n)\\sim1/n$ khiến chuỗi trị tuyệt đối phân kỳ: bán hội tụ. Kết luận: bán hội tụ.<br>Chuỗi thứ 2: $a_n=1/\\sqrt{n+1}\\downarrow0$ nên Leibniz hội tụ; trị tuyệt đối là $p$-series $p=1/2\\le1$, nên chỉ hội tụ có điều kiện. Kết luận: bán hội tụ.<br>Chuỗi thứ 3: $\\dfrac{|u_{n+1}|}{|u_n|}=\\dfrac{n+1}{2^{n+1}}\\dfrac{2^n}{n}=\\dfrac{n+1}{2n}\\to1/2<1$, nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 4: $a_n=1/n\\downarrow0$ nên Leibniz cho hội tụ; $\\displaystyle \\sum|u_n|=\\sum1/n$ phân kỳ, do đó bán hội tụ. Kết luận: bán hội tụ.<br>Số chuỗi hội tụ: $4$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân đẳng cấp (thuần nhất) cấp một?",
   "options": [
    "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$.",
    "$y' - y = xy^2$.",
    "$y' = e^{x - y}$.",
    "$xy' - 2y = x^3$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — Vế phải viết được thành hàm của $\\dfrac{y}{x}$, tức dạng $y' = f\\left(\\dfrac{y}{x}\\right)$; $\\dfrac yx+\\tan(y/x)$ chỉ phụ thuộc tỉ số $y/x$.<br><b>Sai:</b> $y' - y = xy^2$ — $y'-y=xy^2$: dạng Bernoulli với $\\alpha=2$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $y' = e^{x - y}$ — $e^{x-y}=e^x e^{-y}$ nên $e^y\\,dy=e^x\\,dx$.; đây là là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không phải dạng đang hỏi.<br><b>Sai:</b> $xy' - 2y = x^3$ — Chia cho $x\\ne0$: $y'-\\dfrac2x y=x^2$, đúng dạng $y'+p(x)y=q(x)$.; đây là là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không phải dạng đang hỏi."
  },
  {
   "q": "Đường cong tích phân của phương trình vi phân toàn phần $(2 x - y)\\,dx + (- x + 2 y)\\,dy = 0$ đi qua điểm $M(1;1)$ là một đường elip. Elip này cắt tia $Ox$ (phần $x > 0$ của trục hoành) tại điểm có hoành độ bằng",
   "options": [
    "$1$.",
    "$2$.",
    "$3$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial P}{\\partial y} = -1 = \\dfrac{\\partial Q}{\\partial x}$ nên vế trái là $du$ với $u = x^{2} - x y + y^{2}$<br>Nghiệm tổng quát: $x^{2} - x y + y^{2} = C$; qua $M(1;1)$: $C = 1$<br>Cho $y = 0$: $x^{2} = 1 \\Rightarrow x = 1$ (lấy $x > 0$)",
   "note": "Kiểm tra $P'_y = Q'_x$ trước; nghiệm tổng quát là $u(x,y) = C$ với $u'_x = P$, $u'_y = Q$."
  },
  {
   "q": "Một ứng dụng mới được giới thiệu cho 900 học viên của một trường. Số người đã cài đặt $P(t)$ sau $t$ tuần thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{900}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 100$. Biết nghiệm có dạng $P(t) = \\dfrac{900}{1 + Ae^{-kt}}$. Số người đã cài đặt sau 4 tuần bằng",
   "options": [
    "$300$.",
    "$400$.",
    "$450$.",
    "$180$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=8$.<br>$kt=\\dfrac{\\ln2}{2}(4)=2\\ln2$, vì thế $e^{-kt}=e^{-2\\ln2}=2^{-2}=\\dfrac1{4}$.<br>$P(4)=\\dfrac{900}{1+\\frac{8}{4}}=\\dfrac{900\\cdot4}{4+8}=\\dfrac{3600}{12}=300$.",
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
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ y \\ge x,\\ x \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>$x\\ge0,\\ y\\ge x\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge\\cos\\varphi\\Rightarrow\\pi/4\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{3(x^2 + y^2)}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{6},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$\\dfrac{\\pi \\left(2 - \\sqrt{3}\\right)}{3}$.",
    "$\\dfrac{\\pi^{2}}{9}$.",
    "$\\dfrac{4 \\pi}{3}$.",
    "$\\dfrac{\\pi \\left(2 - \\sqrt{3}\\right)}{6}$."
   ],
   "answer": 0,
   "explain": "$V=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^2\\,d\\rho$. Các tích phân lần lượt bằng $2\\pi$, $[-\\cos\\theta]_0^{\\dfrac{\\pi}{6}}=1-\\cos\\dfrac{\\pi}{6}$ và $[\\rh\\frac{o^3}{3}]_0^{1}=1/3$.<br>$V=2\\pi(1-\\cos\\dfrac{\\pi}{6})\\dfrac{1}{3}=\\dfrac{\\pi \\left(2 - \\sqrt{3}\\right)}{3}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 700 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$1260$.",
    "$840$.",
    "$1050$.",
    "$980$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $20x=30(2100-x)=63000-30x$, nên $(50)x=63000$ và $x=\\dfrac{63000}{50}=1260$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (1;2;1),\\ u_2 = (1;3;1)$ và $v = (3;4;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$3$.",
    "$-3$.",
    "$4$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = m - 3$<br>$m - 3 = 0 \\Leftrightarrow m = 3$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}-3 & 1 \\\\ 5 & -2\\end{pmatrix}$ và $B = \\begin{pmatrix}5 & -2 \\\\ 3 & -1\\end{pmatrix}$. Ma trận $X$ thỏa mãn $X.A = B$ là",
   "options": [
    "$\\begin{pmatrix}0 & 1 \\\\ -1 & 0\\end{pmatrix}$.",
    "$\\begin{pmatrix}-13 & 5 \\\\ -34 & 13\\end{pmatrix}$.",
    "$\\begin{pmatrix}-25 & -14 \\\\ 9 & 5\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & -1 \\\\ 1 & 0\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$XA=B \\Rightarrow X=BA^{-1}$ (nhân $A^{-1}$ bên phải).<br>$A^{-1}=\\begin{pmatrix}-2 & -1 \\\\ -5 & -3\\end{pmatrix},\\qquad BA^{-1}=\\begin{pmatrix}0 & 1 \\\\ -1 & 0\\end{pmatrix}$.<br>Kiểm tra: $\\begin{pmatrix}0 & 1 \\\\ -1 & 0\\end{pmatrix}A=\\begin{pmatrix}5 & -2 \\\\ 3 & -1\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + y + 3z + 3t = 0\\\\ -x - y + 3z - t = 0\\\\ 6z + 2t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$4$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & 1 & 3 & 3 \\\\ 0 & 0 & 6 & 2 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 2$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 2 = 2$",
   "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 3}\\dfrac{x^3 + ax + b}{\\left(x - 3\\right)^{2}} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b + L$ bằng",
   "options": [
    "$36$.",
    "$27$.",
    "$9$.",
    "$-81$."
   ],
   "answer": 0,
   "explain": "Mẫu số có nghiệm kép $x = 3$ nên tử số $g(x) = x^3 + ax + b$ phải thỏa mãn $g(3) = 0$ và $g'(3) = 0$<br>$g'(x) = 3x^2 + a \\Rightarrow a = -27$; $g(3) = 0 \\Rightarrow b = 54$<br>$x^3 - 27 x + 54 = \\left(x - 3\\right)^{2} \\left(x + 6\\right)$ nên $L = 9$<br>$a + b + L = 36$",
   "note": "Mẫu có nghiệm kép nên tử cũng phải có nghiệm kép tại đó: $g(x_0) = g'(x_0) = 0$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\cos 2x & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$-1$.",
    "$-2$.",
    "$1$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=\\cos{\\left(2 x \\right)}$ có $g(0)=1$, $g^\\prime(0)=0$, $g^{\\prime\\prime}(0)=-4$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=0,\\ 2a=-4$, do đó $a=-2$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $a - b + d=-1$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 16$ và trục $Ox$ xung quanh trục $Ox$.",
   "options": [
    "$128 \\pi$.",
    "$64 \\pi$.",
    "$256 \\pi$.",
    "$16 \\pi$."
   ],
   "answer": 0,
   "explain": "$V = \\pi\\displaystyle\\int_0^{16} y^2\\,dx = \\pi\\int_0^{16} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{16} = 128 \\pi$<br>Kết quả: $128 \\pi$"
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = 3 p_{1} - p_{2} - 40\\\\ s_2 = p_{1} + 3 p_{2} + p_{3} - 110\\\\ s_3 = - p_{1} + p_{3} + 35\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = 75 - p_{1}\\\\ d_2 = 90 - 2 p_{2}\\\\ d_3 = 80 - p_{3}\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Gọi $p_1^*, p_2^*, p_3^*$ là các mức giá cân bằng, giá trị của $p_1^* + p_2^* + p_3^*$ bằng",
   "options": [
    "$100$.",
    "$120$.",
    "$105$.",
    "$95$."
   ],
   "answer": 0,
   "explain": "Tại cân bằng, $s_i=d_i$. Trừ lượng cầu khỏi lượng cung theo từng loại: $(S-D)P=(S-D)(35;25;40)^T$.<br>$S-D=\\begin{pmatrix}4 & -1 & 0 \\\\ 1 & 5 & 1 \\\\ -1 & 0 & 2\\end{pmatrix}$, nên hệ giá là $\\begin{pmatrix}4 & -1 & 0 \\\\ 1 & 5 & 1 \\\\ -1 & 0 & 2\\end{pmatrix}P=(115;200;45)^T$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}4 & -1 & 0 & 115\\\\ 1 & 5 & 1 & 200\\\\ -1 & 0 & 2 & 45\\end{array}\\right)$$<br>$R_1 \\leftarrow \\dfrac{1}{4}R_1$: $$\\left(\\begin{array}{rrr|r}1 & - \\dfrac{1}{4} & 0 & \\dfrac{115}{4}\\\\ 1 & 5 & 1 & 200\\\\ -1 & 0 & 2 & 45\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & - \\dfrac{1}{4} & 0 & \\dfrac{115}{4}\\\\ 0 & \\dfrac{21}{4} & 1 & \\dfrac{685}{4}\\\\ -1 & 0 & 2 & 45\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (-1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & - \\dfrac{1}{4} & 0 & \\dfrac{115}{4}\\\\ 0 & \\dfrac{21}{4} & 1 & \\dfrac{685}{4}\\\\ 0 & - \\dfrac{1}{4} & 2 & \\dfrac{295}{4}\\end{array}\\right)$$<br>$R_2 \\leftarrow \\dfrac{1}{\\dfrac{21}{4}}R_2$: $$\\left(\\begin{array}{rrr|r}1 & - \\dfrac{1}{4} & 0 & \\dfrac{115}{4}\\\\ 0 & 1 & \\dfrac{4}{21} & \\dfrac{685}{21}\\\\ 0 & - \\dfrac{1}{4} & 2 & \\dfrac{295}{4}\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (- \\dfrac{1}{4})R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{21} & \\dfrac{775}{21}\\\\ 0 & 1 & \\dfrac{4}{21} & \\dfrac{685}{21}\\\\ 0 & - \\dfrac{1}{4} & 2 & \\dfrac{295}{4}\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (- \\dfrac{1}{4})R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{21} & \\dfrac{775}{21}\\\\ 0 & 1 & \\dfrac{4}{21} & \\dfrac{685}{21}\\\\ 0 & 0 & \\dfrac{43}{21} & \\dfrac{1720}{21}\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{\\dfrac{43}{21}}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{21} & \\dfrac{775}{21}\\\\ 0 & 1 & \\dfrac{4}{21} & \\dfrac{685}{21}\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (\\dfrac{1}{21})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 35\\\\ 0 & 1 & \\dfrac{4}{21} & \\dfrac{685}{21}\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (\\dfrac{4}{21})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 35\\\\ 0 & 1 & 0 & 25\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$P=(35;25;40)^T$; thay vào hàm cung hoặc cầu được $Q=(40;40;40)^T$.<br>Tổng lượng cung/cầu: $40+40+40=120$; tổng giá: $35+25+40=100$.",
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
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{3^{n+1} - 4^n}{5^n} = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng",
   "options": [
    "$3$.",
    "$1$.",
    "$7$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{3^{n+1}}{5^n} = 3\\sum_{n=1}^{+\\infty}\\left(\\dfrac{3}{5}\\right)^n = 3\\cdot\\dfrac{\\left(\\frac{3}{5}\\right)^{1}}{1 - \\frac{3}{5}} = \\dfrac{9}{2}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{4}{5}\\right)^n = \\dfrac{\\left(\\frac{4}{5}\\right)^{1}}{1 - \\frac{4}{5}} = 4$<br>Tổng: $\\dfrac{9}{2} - 4 = \\dfrac{1}{2} \\Rightarrow a + b = 3$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\cdot4^n}$ bằng",
   "options": [
    "$\\ln\\left(\\dfrac{4}{3}\\right)$.",
    "$\\ln 4$.",
    "$- \\ln\\left(\\dfrac{4}{3}\\right)$.",
    "$\\dfrac{1}{3}$."
   ],
   "answer": 0,
   "explain": "$x=\\frac14$: $\\sum_{n\\ge1}\\frac{(1/4)^n}{n}=-\\ln(1-\\frac14)=-\\ln\\frac34=\\ln\\frac43$.<br>Vậy tổng của chuỗi bằng $\\ln\\left(\\dfrac{4}{3}\\right)$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = xe^{-y}$ thỏa mãn $y(0) = 0$. Giá trị của $y\\left(2\\right)$ bằng",
   "options": [
    "$\\ln 3$.",
    "$0$.",
    "$1 + \\ln 3$.",
    "$\\ln\\left(\\sqrt{3}\\right)$."
   ],
   "answer": 0,
   "explain": "Tách biến rồi tích phân hai vế: $e^y\\,dy = x\\,dx \\Rightarrow e^y = \\dfrac{x^2}{2} + C$<br>$x=0,y=0$: $e^y=\\frac{x^2}{2}+C$ gives $1=0+C$, so $C=1$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=\\ln\\left(\\dfrac{x^{2}}{2} + 1\\right)$.<br>Thay $x=2$ vào nghiệm: $y(2)=\\ln 3=\\ln 3$.",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + 3y = 2e^{-3x}$ thỏa mãn $y(0) = 2$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{4}{e^{3}}$.",
    "$\\dfrac{2}{e^{3}}$.",
    "$4 e^{3}$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{3x}$: $\\left(ye^{3x}\\right)' = 2$<br>$ye^{3x} = 2x + C \\Rightarrow y = (2x + C)e^{-3x}$<br>$y(0) = C = 2 \\Rightarrow y(1) = (2 + 2)e^{-3} = \\dfrac{4}{e^{3}}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một tách cà phê có nhiệt độ $80^\\circ C$ được đặt trong phòng có nhiệt độ không đổi $20^\\circ C$. Sau 5 phút, nhiệt độ cà phê là $60^\\circ C$. Theo định luật Newton, tốc độ nguội tỉ lệ với hiệu nhiệt độ giữa cà phê và phòng. Nhiệt độ của cà phê sau 15 phút kể từ lúc đầu (làm tròn đến hàng phần chục, đơn vị $^\\circ C$) là",
   "options": [
    "37,8.",
    "20,0.",
    "33,3.",
    "40,0."
   ],
   "answer": 0,
   "explain": "$T' = -k(T - 20) \\Rightarrow T(t) = 20 + 60e^{-kt}$ (vì $T(0) = 80$)<br>$T(5) = 60 \\Rightarrow e^{-5k} = \\dfrac{40}{60}$<br>$T(15) = 20 + 60\\left(\\dfrac{40}{60}\\right)^{3} \\approx 37{,}8$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 1,\\ 0 \\le y \\le \\sqrt{3}\\,x\\}$. Giá trị của tích phân $\\displaystyle\\iint_D x\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{\\sqrt{3}}{6}$.",
    "$\\dfrac{\\sqrt{3}}{4}$.",
    "$\\dfrac{\\sqrt{3}}{3}$.",
    "$\\dfrac{1}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 1,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{3}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{1}\\left(r \\cos\\varphi\\right)r\\,dr = \\displaystyle \\int \\dfrac{\\cos\\varphi}{3}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{\\sqrt{3}}{6}$",
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
   "q": "Cho $L$ là một vòng của đường xoắn ốc $x = 3\\cos t,\\ y = 3\\sin t,\\ z = 4t$ với $0 \\le t \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\int_L z\\,ds$ bằng",
   "options": [
    "$40 \\pi^{2}$.",
    "$8 \\pi^{2}$.",
    "$20 \\pi^{2}$.",
    "$80 \\pi^{2}$."
   ],
   "answer": 0,
   "explain": "$x^\\prime=-3\\sin t,\\ y^\\prime=3\\cos t,\\ z^\\prime=4$; hence $ds=\\sqrt{(-3\\sin t)^2+(3\\cos t)^2+4^2}\\,dt=5\\,dt$.<br>$\\displaystyle I=\\int_0^{2\\pi}4t\\cdot5\\,dt=45\\left[\\frac{t^2}{2}\\right]_0^{2\\pi}=2\\pi^245=40 \\pi^{2}$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 3,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- y^{2})\\,dx + x y\\,dy$ bằng",
   "options": [
    "$18$.",
    "$-18$.",
    "$6$.",
    "$36$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = 3 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{2}\\left(3 y\\right)dy$<br>$I = 18$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + 2z = -2\\\\ x + 3y = 4\\\\ -2x - y + mz = 6\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = -4$, định thức của ma trận $A$ bằng",
     "options": [
      "$2$.",
      "$10$.",
      "$-2$.",
      "$4$."
     ],
     "answer": 0,
     "explain": "$\\det A = 2 m + 10$<br>Với $m = -4$: $\\det A = 2$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$-5$.",
      "$-4$.",
      "$5$.",
      "$-2$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 2 m + 10 = 0 \\Leftrightarrow m = -5$"
    },
    {
     "q": "Khi $m = -4$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$-1$.",
      "$0$.",
      "$1$.",
      "$-2$."
     ],
     "answer": 0,
     "explain": "Với $m = -4$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 2$)<br>$(x_0;y_0;z_0) = (-2;2;-1)$<br>$x_0 + y_0 + z_0 = -1$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{3} + x y^{2}$ và điểm $M(2;-1)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$9$.",
      "$17$.",
      "$-52$.",
      "$13$."
     ],
     "answer": 0,
     "explain": "$f'_x = 3 x^{2} + y^{2},\\quad f'_y = 2 x y$<br>$\\nabla f(M) = (13;-4) \\Rightarrow p + q = 9$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (4;3)$ bằng",
     "options": [
      "$8$.",
      "$40$.",
      "$\\dfrac{23}{5}$.",
      "$-8$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(13)\\cdot(4) + (-4)\\cdot(3)}{5} = 8$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$-20$.",
      "$10$.",
      "$20$.",
      "$40$."
     ],
     "answer": 0,
     "explain": "$z = 10 + (13)(x - 2) + (-4)(y + 1)$<br>Cho $x = y = 0$: $z = -20$",
     "note": "Gradient, đạo hàm theo hướng và mặt phẳng tiếp xúc đều dùng chung hai giá trị $f'_x(M)$, $f'_y(M)$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m\\end{pmatrix}$ với $m$ là số nguyên dương. Biết $\\det A = 54$, tìm $m$.",
   "answer": [
    "4"
   ],
   "explain": "Khai triển định thức: $\\det A=m^{3} - 3 m + 2=\\left(m - 1\\right)^{2} \\left(m + 2\\right)$<br>Đặt $\\det A=54$: $\\left(m - 4\\right) \\left(m^{2} + 4 m + 13\\right)=0$, có nghiệm $m=4,\\ -2 - 3 i,\\ 3 i - 2$<br>Lọc nghiệm nguyên dương trong tập trên: $m=4$",
   "note": "Lập $\\det A$ theo $m$ rồi giải phương trình; chỉ nhận nghiệm nguyên dương."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 4xy$ với điều kiện $\\dfrac{x^2}{9} + \\dfrac{y^2}{16} = 1$.",
   "answer": [
    "24"
   ],
   "explain": "Đặt $x = 3\\cos t,\\ y = 4\\sin t$: $f = 4\\cdot3\\cdot4\\sin t\\cos t$, lớn nhất bằng $\\dfrac{4\\cdot3\\cdot4}{2} = 24$<br>Đáp số: $24$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(4 x + 3)^{n}}{n^2\\cdot6^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "3"
   ],
   "explain": "Đặt $t = 4 x + 3$: chuỗi $\\displaystyle \\sum\\dfrac{t^n}{n^2\\cdot6^n}$ hội tụ khi và chỉ khi $|t| \\le 6$ (tại hai đầu mút là chuỗi $\\displaystyle \\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-6 \\le 4 x + 3 \\le 6 \\Leftrightarrow - \\dfrac{9}{4} \\le x \\le \\dfrac{3}{4}$<br>$\\beta - \\alpha = 3$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -8x - 8$ với điều kiện $y(0) = 4;\\ y'(0) = 6$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "19"
   ],
   "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -8x - 8 \\Rightarrow y^* = 2x + 2$<br>$y = 2x + 2 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 4,\\ y'(0) = 6 \\Rightarrow C_1 = 2,\\ C_2 = 0$<br>$y(1) = 4 + 2e^{2} \\approx 18{,}78$<br>Đáp số: $19$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt $z = 0$. Biết thể tích của $V$ bằng $k\\pi$, tính $3k$.",
   "answer": [
    "2"
   ],
   "explain": "Tọa độ cầu: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{2}}\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^2\\,d\\rho = \\dfrac{2}{3}\\pi$<br>Đáp số: $2$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
