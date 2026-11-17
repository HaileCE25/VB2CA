// ĐỀ SỐ 38 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-38",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 38",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Phát triển bền vững",
  "prompt": "Việt Nam đặt mục tiêu tăng trưởng kinh tế bình quân từ 10%/năm trở lên trong giai đoạn 2026 – 2030 để trở thành nước có thu nhập trung bình cao vào năm 2030. Cũng trong năm 2025, thiên tai gây thiệt hại kinh tế gần 100.000 tỷ đồng, mức cao nhất từ trước đến nay. Có ý kiến cho rằng một nước còn đang phát triển thì phải ưu tiên tăng trưởng trước, môi trường tính sau; ý kiến khác lại cho rằng tăng trưởng bằng mọi giá chính là vay mượn của tương lai với lãi suất rất cao.",
  "source": "(Tổng hợp từ báo chí về Đại hội XIV của Đảng và số liệu thiên tai năm 2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày quan điểm của mình về hai ý kiến trên và về con đường phát triển nhanh nhưng bền vững của đất nước.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-4;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
   "options": [
    "$3$.",
    "$8$.",
    "$5$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\langle u,v\\rangle=(m)(m)+(-4)(m)+(1)(0)=m^{2} - 4 m=m \\left(m - 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 0 < m < 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{1, 2, 3\\}$; có $3$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(-3;-2),\\ u_2(0;1),\\ u_3(0;3),\\ u_4(3;3),\\ u_5(3;2)\\}$. Có bao nhiêu hệ con khác rỗng của $S$ độc lập tuyến tính?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$13$.",
    "$31$.",
    "$14$.",
    "$12$."
   ],
   "answer": 0,
   "explain": "Cả 5 véc tơ đều khác véc tơ không nên có 5 hệ một véc tơ độc lập.<br>$(u_1,u_2):\\ (\\Delta_{12})=(-3)$.<br>$(u_1,u_3):\\ (\\Delta_{12})=(-9)$.<br>$(u_1,u_4):\\ (\\Delta_{12})=(-3)$.<br>$(u_1,u_5):\\ (\\Delta_{12})=(0)$.<br>$(u_2,u_3):\\ (\\Delta_{12})=(0)$.<br>$(u_2,u_4):\\ (\\Delta_{12})=(-3)$.<br>$(u_2,u_5):\\ (\\Delta_{12})=(-3)$.<br>$(u_3,u_4):\\ (\\Delta_{12})=(-9)$.<br>$(u_3,u_5):\\ (\\Delta_{12})=(-9)$.<br>$(u_4,u_5):\\ (\\Delta_{12})=(-3)$.<br>Tổng số hệ con độc lập tuyến tính: $5+8+0=13$.",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-1 & 2 & 3 & 2 & 3 \\\\ -2 & 0 & 3 & 2 & 2 \\\\ -1 & -2 & 0 & 0 & -1 \\\\ -3 & -2 & 3 & 2 & 1\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$3$.",
    "$2$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Khử Gauss cho dạng bậc thang: $A \\to \\begin{pmatrix}-1 & 2 & 3 & 2 & 3 \\\\ 0 & 4 & 3 & 2 & 4 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$; có 2 hàng khác không nên hạng là 2.<br>Với $5$ ẩn và hạng 2, số ẩn tự do (số chiều hạt nhân) $= 5 - 2 = 3$.",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-1 & 1 \\\\ -2 & 2\\end{pmatrix}$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{4}$ bằng<span class=\"q-hint\">Gợi ý: dùng $A^k = A$ với mọi $k \\ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$.</span>",
   "options": [
    "$2$.",
    "$32$.",
    "$17$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$(I + A)^n = I + \\displaystyle\\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$<br>$(I + A)^{4} = I + 15A = \\begin{pmatrix}-14 & 15 \\\\ -30 & 31\\end{pmatrix}$<br>Tổng các phần tử: $2$",
   "note": "Khi $A^2 = A$ thì mọi lũy thừa của $A$ đều bằng $A$; và $C_n^1 + \\dots + C_n^n = 2^n - 1$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = -3$. Giá trị của $\\det\\left(2A^{-1}\\right)$ bằng",
   "options": [
    "$- \\dfrac{8}{3}$.",
    "$- \\dfrac{2}{3}$.",
    "$\\dfrac{8}{3}$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(2A^{-1}\\right) = 2^3\\cdot\\dfrac{1}{\\det A}$<br>Thay $\\det A = -3$: kết quả $- \\dfrac{8}{3}$",
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
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}1 & 1 & -1 & 0 \\\\ 3 & -2 & -1 & -3 \\\\ 0 & 0 & 0 & 2 \\\\ 0 & 0 & -2 & 0\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$-20$.",
    "$-1$.",
    "$-23$.",
    "$20$."
   ],
   "answer": 0,
   "explain": "$P=\\begin{pmatrix}1 & 1 \\\\ 3 & -2\\end{pmatrix}$, khử hàng được $\\det P=-5$; $R=\\begin{pmatrix}0 & 2 \\\\ -2 & 0\\end{pmatrix}$, khử hàng được $\\det R=4$.<br>Khai triển theo cấu trúc khối tam giác: $\\det A=\\det P\\det R=(-5)(4)=-20$.",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{x - \\arctan x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{1}{3}$.",
    "$\\dfrac{1}{6}$.",
    "$1$.",
    "$- \\dfrac{1}{3}$."
   ],
   "answer": 0,
   "explain": "Đặt $u = x$: $\\arctan u = u - \\dfrac{u^3}{3} + o(u^3)$<br>$u - \\arctan u = \\dfrac{u^3}{3} + o(u^3) = \\dfrac{x^3}{3} + o(x^3)$<br>$\\displaystyle \\lim = \\dfrac{1}{3} = \\dfrac{1}{3}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} - 3 x^{2} - 4 x + 12}{x^{2} - 2 x - 3}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 3\\right) \\left(x - 2\\right) \\left(x + 2\\right)}{\\left(x - 3\\right) \\left(x + 1\\right)}=\\dfrac{\\left(x - 2\\right) \\left(x + 2\\right)}{x + 1}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=3$, tử cũng bằng $0$ nên nhân tử $(x-3)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$..<br>Chia đa thức: $\\dfrac{x^{2} - 4}{x + 1}=x - 1+\\dfrac{-3}{x + 1}$. Vì thương có bậc 1, đường thẳng $y=<q>$ là tiệm cận xiên.<br>Số đường tiệm cận: 2.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Cho hàm số $f(x) = x^{4} + x$. Vi phân $dy$ tại $x_0 = 1$ với $dx = \\dfrac{1}{100}$ bằng",
   "options": [
    "$\\dfrac{1}{20}$.",
    "$- \\dfrac{1}{20}$.",
    "$\\dfrac{1}{10}$.",
    "$\\dfrac{5060401}{100000000}$."
   ],
   "answer": 0,
   "explain": "$f'(x) = 4 x^{3} + 1$<br>$dy = f'(1)\\\\cdot dx = 5\\\\cdot\\dfrac{1}{100} = \\dfrac{1}{20}$"
  },
  {
   "q": "Cho mặt cong $z = x^{3} + y^{2}$. Mặt phẳng tiếp xúc với mặt cong tại điểm $M(1;-1;2)$ có phương trình $z = z_0 + f'_x(M)(x - x_0) + f'_y(M)(y - y_0)$. Mặt phẳng này cắt trục $Oz$ tại điểm có cao độ bằng",
   "options": [
    "$-3$.",
    "$2$.",
    "$7$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} \\to 3,\\quad f'_y = 2 y \\to -2$ tại $(1;-1)$<br>Mặt phẳng tiếp xúc: $z = 2 + (3)(x - 1) + (-2)(y + 1)$<br>Cho $x = y = 0$: $z = -3$",
   "note": "Mặt phẳng tiếp xúc dùng giá trị các đạo hàm riêng tại tiếp điểm; cho $x = y = 0$ để tìm giao điểm với trục $Oz$."
  },
  {
   "q": "Người ta tính công suất $P = \\dfrac{U^2}{R}$ của một điện trở từ hai đại lượng đo được. Biết hiệu điện thế $U$ được đo với sai số tương đối không quá 0,5% và điện trở $R$ với sai số tương đối không quá 1%. Dùng vi phân toàn phần của $\\ln P$, sai số tương đối lớn nhất của $P$ xấp xỉ bằng",
   "options": [
    "2%.",
    "1,5%.",
    "0%.",
    "1%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln P=C+2\\ln u-1\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dP}{P}=+2\\dfrac{du}{u}-1\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Delta P|}{|P|}\\le 2\\dfrac{|\\Delta u|}{u}+1\\dfrac{|\\Delta v|}{v}$.<br>$= 2\\cdot0{,}5\\% + 1\\cdot1\\% = 2\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị lớn nhất của hàm số $f(x,y) = 5 x + 12 y$ với điều kiện $x^2 + y^2 = 4$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$26$.",
    "$13$.",
    "$34$.",
    "$52$."
   ],
   "answer": 0,
   "explain": "$L=5x+12y-\\lambda(x^2+y^2-4)$. Điều kiện dừng: $5-2\\lambda x=0,\\ 12-2\\lambda y=0$, nên $x=\\dfrac{5}{2\\lambda}$, $y=\\dfrac{12}{2\\lambda}$.<br>Ràng buộc cho $\\dfrac{169}{4\\lambda^2}=4$, tức $\\lambda^2=\\dfrac{169}{4r^2}=\\dfrac{h^2}{4r^2}$; hai dấu cho hai điểm đối nhau, dấu dương cho cực đại.<br>Với $\\lambda=\\dfrac{h}{2r}$: $(x,y)=(\\dfrac{5r}{h},\\dfrac{12r}{h})$.<br>Khi đó $f_{\\max}=\\dfrac{25r}{h}+\\dfrac{144r}{h}=\\dfrac{(25+144)r}{h}=rh=26$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1}{n\\ln n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\ln\\left(1 + \\dfrac1n\\right)$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n(n+1)}}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n}{2n+1}\\right)^n$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $f(x)=1/(x\\ln x)$ giảm dương trên $[2,\\infty)$ và $\\int_2^B\\frac{dx}{x\\ln x}=\\ln\\ln B-\\ln\\ln2\\to\\infty$; chuỗi phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 2: $\\ln(1+1/n)\\sim1/n$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $u_n=1/\\sqrt{n(n+1)}\\sim1/n$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $\\sqrt[n]{u_n}=\\sqrt[n]{(n/(2n+1))^n}=n/(2n+1)\\to1/2<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Số chuỗi phân kỳ: $3$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n\\sqrt n}$ và $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{(-1)^n\\ln n}{n}$. Có bao nhiêu chuỗi hội tụ tuyệt đối trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$4$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $0<1-\\cos(1/n)\\sim1/(2n^2)$; so sánh với $\\sum1/n^2$ cho hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 2: $\\displaystyle \\sum|u_n|=\\sum1/n^2$ hội tụ ($p=2>1$), nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 3: $a_n=n^{-3/2}\\downarrow0$ và $\\displaystyle \\sum|u_n|=\\displaystyle \\sum n^{-3/2}$ hội tụ ($p=3/2>1$), nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 4: $a_n=\\ln n/n\\downarrow0$ khi $n\\ge3$, nên Leibniz hội tụ; $\\ln n\\ge1$ khi $n\\ge3$ cho $a_n\\ge1/n$, nên không hội tụ tuyệt đối. Kết luận: bán hội tụ.<br>Số chuỗi hội tụ tuyệt đối: $3$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân có biến số phân ly?",
   "options": [
    "$y' = \\dfrac{1 + y^2}{1 + x^2}$.",
    "$xy' - 2y = x^3$.",
    "$y' + \\dfrac{y}{x} = xy^3$.",
    "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = \\dfrac{1 + y^2}{1 + x^2}$ — Viết được dưới dạng $g(y)\\,dy = h(x)\\,dx$; $\\dfrac{dy}{1+y^2}=\\dfrac{dx}{1+x^2}$, tách được biến.<br><b>Sai:</b> $xy' - 2y = x^3$ — Chia cho $x\\ne0$: $y'-\\dfrac2x y=x^2$, đúng dạng $y'+p(x)y=q(x)$.; đây là là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không phải dạng đang hỏi.<br><b>Sai:</b> $y' + \\dfrac{y}{x} = xy^3$ — $y'+\\dfracx y=xy^3$: dạng Bernoulli với $\\alpha=3$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — $\\dfrac yx+\\tan(y/x)$ chỉ phụ thuộc tỉ số $y/x$.; đây là là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không phải dạng đang hỏi."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{8}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{14}$.",
    "$\\dfrac{1}{16}$.",
    "$\\dfrac{1}{7}$.",
    "$14$."
   ],
   "answer": 0,
   "explain": "Đặt $z=1/y$, do đó $y^\\prime=-z^\\prime/z^2$.<br>Thay vào $y^\\prime+y/x=1xy^2$ rồi nhân với $-1$: $z^\\prime-z/x=-x$.<br>Chia cho $x$: $(z/x)^\\prime=(xz^\\prime-z)/x^2=-1$. Tích phân hai vế: $z/x=-x+C$, tức $z=x(C-x)$.<br>$y(1)=1/z(1)=1/(C-1)=\\dfrac{1}{8}$ nên $C-1=1/\\dfrac{1}{8}=8$ và $C=9$.<br>$z(2)=2(C-21)=2(9-2)=14$; vậy $y(2)=1/z(2)=\\dfrac{1}{14}$.",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 4500 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{5}$ và $P(0) = 500$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số cá trong hồ sau 5 tháng bằng",
   "options": [
    "$900$.",
    "$1000$.",
    "$2250$.",
    "$500$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=8$.<br>$kt=\\dfrac{\\ln2}{5}(5)=1\\ln2$, vì thế $e^{-kt}=e^{-1\\ln2}=2^{-1}=\\dfrac1{2}$.<br>$P(5)=\\dfrac{4500}{1+\\frac{8}{2}}=\\dfrac{4500\\cdot2}{2+8}=\\dfrac{9000}{10}=900$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 48\\cos 2x$ với điều kiện $y(0) = 2;\\ y'(0) = 6$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
   "options": [
    "$3 + 3 \\pi$.",
    "$3$.",
    "$3 \\pi$.",
    "$3 - 3 \\pi$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $48\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=12$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 12x\\sin 2x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=6$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $12\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=3+3 \\pi=3 + 3 \\pi$.",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ y \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>$y\\le0\\Leftrightarrow\\sin\\varphi\\le0\\Rightarrow\\pi\\le\\varphi\\le2\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{4}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, phát biểu nào sau đây là đúng?",
   "options": [
    "$dxdydz = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$.",
    "$dxdydz = \\rho\\,d\\rho\\,d\\theta\\,d\\varphi$.",
    "$dxdydz = \\rho^2\\cos\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$.",
    "Toàn bộ hình cầu tâm $O$ ứng với $0 \\le \\theta \\le 2\\pi$ và $0 \\le \\varphi \\le 2\\pi$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $dxdydz = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$. Định thức Jacobi của phép đổi biến có trị tuyệt đối bằng $\\rho^2\\sin\\theta$.<br><b>Sai:</b> $dxdydz = \\rho\\,d\\rho\\,d\\theta\\,d\\varphi$. Thừa số bậc nhất là của tọa độ trụ: $dxdydz = r\\,dr\\,d\\varphi\\,dz$.<br><b>Sai:</b> $dxdydz = \\rho^2\\cos\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$. Với $\\theta$ là góc tính từ trục $Oz$ thì thừa số là $\\sin\\theta$.<br><b>Sai:</b> Toàn bộ hình cầu tâm $O$ ứng với $0 \\le \\theta \\le 2\\pi$ và $0 \\le \\varphi \\le 2\\pi$. $\\theta$ chỉ chạy từ $0$ đến $\\pi$; nếu không mỗi điểm bị tính hai lần."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 1400 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$900$.",
    "$1200$.",
    "$1050$.",
    "$1400$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $40x=30(2100-x)=63000-30x$, nên $(70)x=63000$ và $x=\\dfrac{63000}{70}=900$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;1;0;0),\\ u_2(-2;0;-2;-1),\\ u_3(-5;-1;-4;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne -2$.",
    "$m = -2$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 2$."
   ],
   "answer": 0,
   "explain": "$R_3 \\leftarrow R_3 + R_1 - 2R_2$.<br>$A = \\begin{pmatrix}1 & 1 & 0 & 0 \\\\ -2 & 0 & -2 & -1 \\\\ -5 & -1 & -4 & m\\end{pmatrix} \\xrightarrow{R_3 \\leftarrow R_3 + R_1 - 2R_2} \\begin{pmatrix}1 & 1 & 0 & 0 \\\\ -2 & 0 & -2 & -1 \\\\ 0 & 0 & 0 & m + 2\\end{pmatrix}$.<br>$\\det \\begin{pmatrix}1 & 1 \\\\ -2 & 0\\end{pmatrix} = 2 \\ne 0$, nên hai hàng đầu độc lập tuyến tính.<br>$m = -2 \\Rightarrow R_3 = (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=2$.<br>$m \\ne -2 \\Rightarrow R_3 = (0,0,0,m + 2) \\ne (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=3$.<br><b>Kết quả:</b> $m = -2$.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}2 & 1 \\\\ -5 & -2\\end{pmatrix}$, $B = \\begin{pmatrix}-3 & 1 \\\\ -4 & 1\\end{pmatrix}$ và $C = \\begin{pmatrix}-32 & 9 \\\\ 75 & -21\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X.B = C$ là",
   "options": [
    "$\\begin{pmatrix}1 & 2 \\\\ 2 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}364 & 167 \\\\ 1201 & 551\\end{pmatrix}$.",
    "$\\begin{pmatrix}21 & -8 \\\\ 18 & -7\\end{pmatrix}$.",
    "$\\begin{pmatrix}-1 & -2 \\\\ -2 & -1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$AXB=C \\Rightarrow X=A^{-1}CB^{-1}$ (nhân bên trái $A^{-1}$, bên phải $B^{-1}$).<br>$A^{-1}=\\begin{pmatrix}-2 & -1 \\\\ 5 & 2\\end{pmatrix},\\quad B^{-1}=\\begin{pmatrix}1 & -1 \\\\ 4 & -3\\end{pmatrix}$.<br>$X=A^{-1}CB^{-1}=\\begin{pmatrix}1 & 2 \\\\ 2 & 1\\end{pmatrix}$.<br>Kiểm tra: $A\\begin{pmatrix}1 & 2 \\\\ 2 & 1\\end{pmatrix}B=\\begin{pmatrix}-32 & 9 \\\\ 75 & -21\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y - 2z = 0\\\\ -2x + my + z = 0\\\\ -2x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$5$.",
    "$6$.",
    "$26$.",
    "$-6$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 6 m + 5 = \\left(m - 5\\right) \\left(m - 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 1$ hoặc $m = 5$<br>Giá trị cần tìm: $5$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + 5x) - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a - 2b + 3L$ bằng",
   "options": [
    "$155$.",
    "$\\dfrac{205}{6}$.",
    "$5$.",
    "$\\dfrac{340}{3}$."
   ],
   "answer": 0,
   "explain": "$\\ln(1 + u) = u - \\dfrac{u^2}{2} + \\dfrac{u^3}{3} + o(u^3)$, với $u=5x$, ta có $u^2=25x^2$ và $u^3=125x^3$.<br>Tử số sau khai triển là $(5-a)x+(- \\dfrac{25}{2}-b)x^2+(\\dfrac{125}{3})x^3+o(x^3)$. Chia cho $x^3$: $\\dfrac{5-a}{x^2}+\\dfrac{- \\dfrac{25}{2}-b}{x}+\\dfrac{125}{3}+o(1)$.<br>Để giới hạn hữu hạn, các hệ số phân kỳ triệt tiêu: $a=5$ và $b=- \\dfrac{25}{2}$; hệ số còn lại cho $L=\\dfrac{125}{3}$.<br>$5-2(- \\dfrac{25}{2})+3(\\dfrac{125}{3})=5+25+125=155$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{-4x} & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a + b + d$ bằng",
   "options": [
    "$5$.",
    "$8$.",
    "$-3$.",
    "$13$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=e^{- 4 x}$ có $g(0)=1$, $g^\\prime(0)=-4$, $g^{\\prime\\prime}(0)=16$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=-4,\\ 2a=16$, do đó $a=8$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $a + b + d=5$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x(x + 1)}$ bằng",
   "options": [
    "$\\ln 2$.",
    "$\\ln\\left(\\sqrt{2}\\right)$.",
    "$1$.",
    "$\\ln 2 + 1$."
   ],
   "answer": 0,
   "explain": "Phân tích phân thức: $\\dfrac1{x(x+1)}=\\dfrac1{1}\\left(\\dfracx-\\dfrac1{x+1}\\right)$ vì $\\dfrac{(x+1)-x}{x(x+1)}=\\dfrac1{x(x+1)}$.<br>$I_R=\\dfrac1{1}\\left[\\ln x-\\ln(x+1)\\right]_1^R=\\dfrac1{1}\\ln\\dfrac{2R}{R+1}\\to\\dfrac1{1}\\ln2=\\ln 2$.",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $2, 2, 1$ đơn vị nguyên liệu I; $1, 1, 1$ đơn vị nguyên liệu II và $3, 2, 1$ đơn vị nguyên liệu III. Kho hiện có $100$, $70$ và $110$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$70$.",
    "$80$.",
    "$60$.",
    "$28$."
   ],
   "answer": 0,
   "explain": "Gọi $x,y,z$ lần lượt là số sản phẩm loại 1, 2, 3.<br>Hệ nguyên liệu: $\\begin{pmatrix}2 & 2 & 1 \\\\ 1 & 1 & 1 \\\\ 3 & 2 & 1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=(100;70;110)^T$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}2 & 2 & 1 & 100\\\\ 1 & 1 & 1 & 70\\\\ 3 & 2 & 1 & 110\\end{array}\\right)$$<br>$R_1 \\leftarrow \\dfrac{1}{2}R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & \\dfrac{1}{2} & 50\\\\ 1 & 1 & 1 & 70\\\\ 3 & 2 & 1 & 110\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & \\dfrac{1}{2} & 50\\\\ 0 & 0 & \\dfrac{1}{2} & 20\\\\ 3 & 2 & 1 & 110\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (3)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & \\dfrac{1}{2} & 50\\\\ 0 & 0 & \\dfrac{1}{2} & 20\\\\ 0 & -1 & - \\dfrac{1}{2} & -40\\end{array}\\right)$$<br>$R_3 \\leftrightarrow R_2$: $$\\left(\\begin{array}{rrr|r}1 & 1 & \\dfrac{1}{2} & 50\\\\ 0 & -1 & - \\dfrac{1}{2} & -40\\\\ 0 & 0 & \\dfrac{1}{2} & 20\\end{array}\\right)$$<br>$R_2 \\leftarrow \\dfrac{1}{-1}R_2$: $$\\left(\\begin{array}{rrr|r}1 & 1 & \\dfrac{1}{2} & 50\\\\ 0 & 1 & \\dfrac{1}{2} & 40\\\\ 0 & 0 & \\dfrac{1}{2} & 20\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (1)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 10\\\\ 0 & 1 & \\dfrac{1}{2} & 40\\\\ 0 & 0 & \\dfrac{1}{2} & 20\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{\\dfrac{1}{2}}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 10\\\\ 0 & 1 & \\dfrac{1}{2} & 40\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (\\dfrac{1}{2})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 10\\\\ 0 & 1 & 0 & 20\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$(x,y,z)^T=(10;20;40)^T$; tổng sản phẩm: $10+20+40=70$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Biết với $|x| < 1$ thì $\\displaystyle\\sum_{n=1}^{+\\infty} n^2x^n = \\dfrac{x(1 + x)}{(1 - x)^3}$. Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{6^n}$ bằng",
   "options": [
    "$\\dfrac{42}{125}$.",
    "$\\dfrac{6}{25}$.",
    "$\\dfrac{7}{125}$.",
    "$\\dfrac{21}{125}$."
   ],
   "answer": 0,
   "explain": "$x = \\dfrac{1}{6}$: $\\dfrac{x(1 + x)}{(1 - x)^3} = \\dfrac{\\frac{1}{6}\\cdot\\frac{7}{6}}{\\left(\\frac{5}{6}\\right)^3} = \\dfrac{42}{125}$<br>Kết quả: $\\dfrac{42}{125}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}8151515\\ldots$ (phần tuần hoàn là 15) bằng $\\dfrac{8}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{15}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$599$.",
    "$61$.",
    "$600$.",
    "$1815$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{15}{10\\cdot100^n} = \\dfrac{15}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{15}{990}$<br>$\\dfrac{8}{10} + \\dfrac{15}{990} = \\dfrac{269}{330} \\Rightarrow a + b = 599$",
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
   "q": "Chất phóng xạ cacbon $^{14}C$ có chu kỳ bán rã 5730 năm và phân rã với tốc độ tỉ lệ với lượng hiện có, tức $m' = -km$ với $k = \\dfrac{\\ln 2}{5730}$. Thời gian (năm) để một mẫu chất này còn lại 75% khối lượng ban đầu (làm tròn đến hàng phần chục) là",
   "options": [
    "2378,2.",
    "1432,5.",
    "2865,0.",
    "4297,5."
   ],
   "answer": 0,
   "explain": "$m' = -km \\Rightarrow m(t) = m_0e^{-kt} = m_0\\cdot2^{-t/5730}$<br>$2^{-t/5730} = \\dfrac{75}{100} \\Rightarrow \\dfrac{t}{5730} = \\log_2\\dfrac{100}{75}$<br>$t = 5730\\cdot\\dfrac{\\ln(100/75)}{\\ln 2} \\approx 2378{,}2$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Thể tích của vật thể giới hạn bởi mặt nón $z = 4 - \\sqrt{x^2 + y^2}$ và mặt phẳng $z = 0$ được tính bằng $V = \\displaystyle\\iint_D z\\,dxdy$, với $D$ là hình chiếu của vật thể lên mặt phẳng $Oxy$. Giá trị của $V$ bằng",
   "options": [
    "$\\dfrac{64 \\pi}{3}$.",
    "$\\dfrac{128 \\pi}{3}$.",
    "$\\dfrac{32 \\pi}{3}$.",
    "$16 \\pi$."
   ],
   "answer": 0,
   "explain": "$z \\ge 0 \\Leftrightarrow x^2 + y^2 \\le 16$ nên $D$ là hình tròn bán kính $4$<br>$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{4}\\left(4 - r\\right)r\\,dr = 2\\pi\\left[- \\dfrac{r^{3}}{3} + 2 r^{2}\\right]_0^{4}$<br>$V = 2\\pi\\cdot\\dfrac{32}{3} = \\dfrac{64 \\pi}{3}$",
   "note": "Miền $D$ là hình chiếu của vật thể: nơi mặt cong cắt mặt phẳng $z = 0$."
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
   "q": "Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = 1$ với mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = x^2 + y^2 + 1$. Khối lượng của sợi dây, tức $\\displaystyle\\oint_L \\rho\\,ds$, bằng",
   "options": [
    "$4 \\pi$.",
    "$2 \\pi$.",
    "$1 + 4 \\pi$.",
    "$4 \\pi - 1$."
   ],
   "answer": 0,
   "explain": "Trên $L$, $x^2+y^2=1$ nên $\\rho=1+1$ không đổi. Tham số hóa $x=1\\cos t$, $y=1\\sin t$, $0\\le t\\le2\\pi$, cho $ds=1\\,dt$.<br>$\\displaystyle M=\\int_0^{2\\pi}(1+1)1\\,dt=2\\pi1(1+1)=4 \\pi$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (4 x y - y^{2} + 3)\\,dx + (mx^2 - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$2$.",
    "$-2$.",
    "$4$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 4 x - 2 y,\\quad Q'_x = 2mx - 2 y$<br>Đồng nhất hệ số: $m = 2$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -2 \\\\ 1 & -1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x - 2$. Kí hiệu $f(A) = A^2 - A - 2I$.",
   "questions": [
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
     "options": [
      "$-2$.",
      "$0$.",
      "$-1$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}-1 & 0 \\\\ 0 & -1\\end{pmatrix}$<br>Vết của $A^2$: $-2$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
     "options": [
      "$-5$.",
      "$-1$.",
      "$-7$.",
      "$-6$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}-1 & 0 \\\\ 0 & -1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-4 & 2 \\\\ -1 & -2\\end{pmatrix}$<br>Tổng các phần tử: $-5$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
     "options": [
      "$1$.",
      "$-1$.",
      "$2$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}-1 & 2 \\\\ -1 & 1\\end{pmatrix}$<br>Tổng các phần tử: $1$",
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
   "q": "Cho ma trận $A = \\begin{pmatrix}0 & 1 & -1 \\\\ 4 & 1 & -2 \\\\ 1 & 0 & 0\\end{pmatrix}$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\\det\\left(A - A^T\\right)$.",
   "answer": [
    "0"
   ],
   "explain": "$S=A-A^T=\\begin{pmatrix}0 & -3 & -2 \\\\ 3 & 0 & -2 \\\\ 2 & 2 & 0\\end{pmatrix}$, nên $S^T=-S$.<br>Do đó $\\det S=\\det(S^T)=\\det(-S)=(-1)^3\\det S=-\\det S$, suy ra $2\\det S=0$ và $\\det S=0$.",
   "note": "$A + A^T$ đối xứng; $A - A^T$ phản đối xứng, và ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0."
  },
  {
   "q": "Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $4 x + 4 y + 7 z = 324$.",
   "answer": [
    "1296"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(4;4;7)$ với $t = \\dfrac{324}{81}$; $f_{\\min} = \\dfrac{324^2}{81} = 1296$<br>Đáp số: $1296$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
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
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = e^{2x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "12"
   ],
   "explain": "$k = 2$ là nghiệm đơn của phương trình đặc trưng nên $y^* = xe^{2x}$; $y = e^{2x} - e^{x} + xe^{2x}$; $y(1) \\approx 12{,}06$<br>Đáp số: $12$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt paraboloid $z = 42 - x^2 - y^2$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "720"
   ],
   "explain": "Hai mặt cắt nhau khi $r = 42 - r^2$, tức $r = 6$: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{6}(42 - r^2 - r)\\,r\\,dr = 720\\pi$<br>Đáp số: $720$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
