// ĐỀ SỐ 39 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-39",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 39",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản sắc và hội nhập",
  "prompt": "Việt Nam đang thực hiện chủ trương từng bước đưa tiếng Anh trở thành ngôn ngữ thứ hai trong trường học, coi ngoại ngữ là chìa khóa để hội nhập. Cùng lúc đó, trên mạng xã hội và trong giao tiếp hằng ngày của một bộ phận giới trẻ, những câu nói nửa Việt nửa Anh, những từ viết tắt và tiếng lóng thay thế dần cách diễn đạt quen thuộc. Có người coi đó là sự sáng tạo tự nhiên của ngôn ngữ; có người lo rằng nếu không còn nói và viết tiếng Việt cho đúng, cho hay thì hội nhập sẽ thành hòa tan.",
  "source": "",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về việc giữ gìn sự trong sáng của tiếng Việt trong bối cảnh hội nhập và trách nhiệm của thế hệ trẻ đối với tiếng mẹ đẻ.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-3;m;-2)$ và $v = (m;2;-2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
   "options": [
    "$53$.",
    "$17$.",
    "$70$.",
    "$21$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = (-3)m + m(2) + (-2)(-2) = (-1)m + (-2)(-2) = 0$<br>$(-1)m = -(-2)(-2) \\Rightarrow m = \\dfrac{- (-2)(-2)}{-1} = 4$<br>$u + v = ((-3) + (4);\\ (4) + (2);\\ (-2) + (-2)) = (1;6;-4)$<br>$|u + v|^2 = (1)^2 + (6)^2 + (-4)^2 = 1 + 36 + 16 = 53$",
   "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(1;0),\\ u_2(2;-1),\\ u_3(-1;1),\\ u_4(-3;0),\\ u_5(-1;0)\\}$. Có bao nhiêu hệ con gồm đúng 2 véc tơ của $S$ là cơ sở của $\\mathbb{R}^2$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$7$.",
    "$10$.",
    "$8$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Số hệ con cần xét: $C_5^2=10$.<br>$\\det\\begin{pmatrix}1 & 0\\\\2 & -1\\end{pmatrix}=-1$.<br>$\\det\\begin{pmatrix}1 & 0\\\\-1 & 1\\end{pmatrix}=1$.<br>$\\det\\begin{pmatrix}1 & 0\\\\-3 & 0\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}1 & 0\\\\-1 & 0\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}2 & -1\\\\-1 & 1\\end{pmatrix}=1$.<br>$\\det\\begin{pmatrix}2 & -1\\\\-3 & 0\\end{pmatrix}=-3$.<br>$\\det\\begin{pmatrix}2 & -1\\\\-1 & 0\\end{pmatrix}=-1$.<br>$\\det\\begin{pmatrix}-1 & 1\\\\-3 & 0\\end{pmatrix}=3$.<br>$\\det\\begin{pmatrix}-1 & 1\\\\-1 & 0\\end{pmatrix}=1$.<br>$\\det\\begin{pmatrix}-3 & 0\\\\-1 & 0\\end{pmatrix}=0$.<br>Hệ là cơ sở khi định thức khác 0; có 7 định thức khác 0 nên có 7 cơ sở.",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 0 & 1 & 2 & -1 \\\\ -2 & -2 & 1 & -1 & 1 \\\\ 1 & 3 & 2 & 2 & 3 \\\\ -1 & 6 & 3 & 2 & 7\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Khử Gauss cho dạng bậc thang: $A \\to \\begin{pmatrix}3 & 0 & 1 & 2 & -1 \\\\ 0 & -6 & 5 & 1 & 1 \\\\ 0 & 0 & -75 & -33 & -69 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$; có 3 hàng khác không nên hạng là 3.<br>Với $5$ ẩn và hạng 3, số ẩn tự do (số chiều hạt nhân) $= 5 - 3 = 2$.",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & -2 \\\\ 3 & 1\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = 3A - 8I$. Phần tử thuộc hàng 2 và cột 2 của ma trận $A^{4}$ bằng",
   "options": [
    "$-29$.",
    "$-23$.",
    "$1$.",
    "$29$."
   ],
   "answer": 0,
   "explain": "Với $\\operatorname{tr}A=3$ và $\\det A=8$, Cayley–Hamilton cho $A^2-(3)A+(8)I=0$, tức $A^2=3A-8I=\\begin{pmatrix}-2 & -6 \\\\ 9 & -5\\end{pmatrix}$<br>Nhân đẳng thức $A^2=\\begin{pmatrix}-2 & -6 \\\\ 9 & -5\\end{pmatrix}$ với $A$: $A^3=A^2A=\\begin{pmatrix}-22 & -2 \\\\ 3 & -23\\end{pmatrix}$; do đó phần tử $(2,2)$ của $A^3$ là -23.<br>$A^4=A^2A^2=\\begin{pmatrix}-50 & 42 \\\\ -63 & -29\\end{pmatrix}$; phần tử hàng 2, cột 2 của $A^{4}$ bằng -29.",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Định thức của ma trận $M = \\begin{pmatrix}-1 & -2 & 0 & -1 \\\\ 3 & 1 & -2 & 4 \\\\ 0 & 0 & 0 & 3 \\\\ 0 & 0 & 2 & 3\\end{pmatrix}$ bằng<span class=\"q-hint\">Gợi ý: $M$ có dạng tam giác khối nên $\\det M$ bằng tích định thức của hai khối vuông cấp 2 nằm trên đường chéo.</span>",
   "options": [
    "$-30$.",
    "$-1$.",
    "$-28$.",
    "$30$."
   ],
   "answer": 0,
   "explain": "Khối trên đường chéo: $M_1 = \\begin{pmatrix}-1 & -2 \\\\ 3 & 1\\end{pmatrix},\\ M_2 = \\begin{pmatrix}0 & 3 \\\\ 2 & 3\\end{pmatrix}$<br>$\\det M_1 = 5,\\quad \\det M_2 = -6$<br>$\\det M = 5\\cdot(-6) = -30$",
   "note": "Chỉ áp dụng khi một khối ngoài đường chéo toàn số 0; khối còn lại không ảnh hưởng tới định thức."
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
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}0 & -1 & -1 & -1 \\\\ -1 & 0 & -1 & -1 \\\\ -1 & -1 & 0 & -1 \\\\ -1 & -1 & -1 & 0\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$-3$.",
    "$1$.",
    "$-1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1+h_2+h_3+h_4$: mỗi phần tử hàng 1 bằng $a+4b=-3$. Rút $-3$ khỏi hàng này để hàng đầu thành $(1,1,1,1)$, đồng thời nhân định thức với thừa số $-3$.<br>Với hàng đầu $(1,1,1,1)$, thực hiện $h_i\\to h_i-(-1)h_1$ với $i=2,3,4$: các phần tử ngoài đường chéo thành $b-b=0$, còn mỗi phần tử đường chéo dưới bằng $(a+b)-b=a$. Đường chéo là $1,1,1,1$.<br>$\\det A = (-3)\\cdot(1)^3 = -3$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan x - x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$2$.",
    "$1$.",
    "$\\dfrac{1}{2}$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "Đặt $u = x$: $\\tan u = u + \\dfrac{u^3}{3} + o(u^3) \\Rightarrow \\tan u - u = \\dfrac{x^3}{3} + o(x^3)$<br>$\\sin x = x - \\dfrac{x^3}{6} + o(x^3) \\Rightarrow x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\displaystyle \\lim = \\dfrac{1/3}{1/6} = 2$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{2 x + 6}{x^{2} + 3 x + 2}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{2 \\left(x + 3\\right)}{\\left(x + 1\\right) \\left(x + 2\\right)}=\\dfrac{2 \\left(x + 3\\right)}{\\left(x + 1\\right) \\left(x + 2\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$.; Tại $x=-2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-2$..<br>Chia đa thức: $\\dfrac{2 x + 6}{x^{2} + 3 x + 2}=0+\\dfrac{2 x + 6}{x^{2} + 3 x + 2}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Cho hàm số $f(x) = \\arcsin(2x)$. Giá trị của $f'(x_0)$ tại $x_0 = \\dfrac{3}{10}$ bằng",
   "options": [
    "$\\dfrac{5}{2}$.",
    "$- \\dfrac{5}{2}$.",
    "$5$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$f'(x) = \\dfrac{2}{\\sqrt{1 - 4\\cdotx^2}}$<br>Tại $x_0 = \\dfrac{3}{10}$: $\\sqrt{1 - 4\\cdotx_0^2} = \\dfrac{4}{5}$; $f'(x_0) = \\dfrac{5}{2}$"
  },
  {
   "q": "Cho hàm số $f(x,y,z) = x y z + z^{2}$. Đạo hàm của $f$ tại điểm $M(2;-1;2)$ theo hướng của véc tơ $\\vec l = (1;-2;2)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$-2$.",
    "$-6$.",
    "$4$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$f'_x = y z,\\quad f'_y = x z,\\quad f'_z = x y + 2 z$<br>$\\nabla f(M) = (-2;4;2)$<br>$|\\vec l| = \\sqrt{9} = 3$<br>$\\dfrac{\\partial f}{\\partial \\vec l}=\\dfrac{(-2)(1)+(4)(-2)+(2)(2)}{3}=\\dfrac{-2+-8+4}{3}=\\dfrac{-6}{3}=-2$.",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
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
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $2 x + y = 10$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$20$.",
    "$10$.",
    "$40$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$L=x^2+y^2-\\lambda(2x+y-10)$. Từ $L_x=2x-2\\lambda=0$ và $L_y=2y-1\\lambda=0$, ta có $x=\\dfrac{2\\lambda}{2}$, $y=\\dfrac{1\\lambda}{2}$.<br>Thay vào ràng buộc: $\\dfrac{4\\lambda}{2}+\\dfrac{1\\lambda}{2}=\\dfrac{(4+1)\\lambda}{2}=10$, nên $\\lambda=\\dfrac{210}{5}$.<br>$(x,y)=(\\dfrac{210}{5},\\dfrac{110}{5})$.<br>Khi đó $x^2+y^2=\\dfrac{4100+1100}{25}=\\dfrac{100(4+1)}{25}=\\dfrac{100}{5}=20$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1}{n\\ln^2 n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+2}{2n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2^n}{n!}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{2n+1}{3n+2}\\right)^n$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\int_2^B\\frac{dx}{x\\ln^2x}=[-1/\\ln x]_2^B\\to1/\\ln2<\\infty$; theo tiêu chuẩn tích phân chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 2: $(n+2)/(2n^2+1)\\sim1/(2n)$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $\\dfrac{u_{n+1}}{u_n}=\\dfrac{2^{n+1}/(n+1)!}{2^n/n!}=\\dfrac2{n+1}\\to0<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 4: $\\sqrt[n]{u_n}=(2n+1)/(3n+2)\\to2/3<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Số chuỗi hội tụ: $3$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n!}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n\\sqrt n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$. Có bao nhiêu chuỗi bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối) trong bốn chuỗi trên?",
   "options": [
    "$0$.",
    "$4$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $0<1/(n^2+1)\\le1/n^2$; so sánh với $\\sum1/n^2$ chứng minh hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 2: $\\displaystyle \\sum|u_n|=\\sum1/n!$; tỉ số $|u_{n+1}|/|u_n|=1/(n+1)\\to0<1$, nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 3: $a_n=n^{-3/2}\\downarrow0$ và $\\displaystyle \\sum|u_n|=\\displaystyle \\sum n^{-3/2}$ hội tụ ($p=3/2>1$), nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 4: $0<1-\\cos(1/n)\\sim1/(2n^2)$; so sánh với $\\sum1/n^2$ cho hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Số chuỗi bán hội tụ: $0$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân toàn phần?",
   "options": [
    "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$.",
    "$y\\,dx - x\\,dy = 0$.",
    "$(x + y)dx + (y - x)dy = 0$.",
    "$2xy\\,dx + (y^2 - x^2)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — Điều kiện $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$ đối với $P\\,dx + Q\\,dy = 0$; $P=(2xy + 1),\\ Q=x^2 + 3y^2$: $\\frac{\\partial P}{\\partial y}=2x$ và $\\frac{\\partial Q}{\\partial x}=2x$; bằng nhau, nên toàn phần.<br><b>Sai:</b> $y\\,dx - x\\,dy = 0$ — $P=y\\,,\\ Q=y\\,dx - x\\,dy = 0$: $\\frac{\\partial P}{\\partial y}=1$ và $\\frac{\\partial Q}{\\partial x}=-1$; khác nhau, nên không toàn phần.<br><b>Sai:</b> $(x + y)dx + (y - x)dy = 0$ — $P=(x + y),\\ Q=y - x$: $\\frac{\\partial P}{\\partial y}=1$ và $\\frac{\\partial Q}{\\partial x}=-1$; khác nhau, nên không toàn phần.<br><b>Sai:</b> $2xy\\,dx + (y^2 - x^2)dy = 0$ — $P=2xy\\,,\\ Q=y^2 - x^2$: $\\frac{\\partial P}{\\partial y}=2x$ và $\\frac{\\partial Q}{\\partial x}=-2x$; khác nhau, nên không toàn phần."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = 2xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{7}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{10}$.",
    "$\\dfrac{1}{14}$.",
    "$\\dfrac{1}{5}$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "Đặt $z=1/y$, do đó $y^\\prime=-z^\\prime/z^2$.<br>Thay vào $y^\\prime+y/x=2xy^2$ rồi nhân với $-1$: $z^\\prime-z/x=-2x$.<br>Chia cho $x$: $(z/x)^\\prime=(xz^\\prime-z)/x^2=-2$. Tích phân hai vế: $z/x=-2x+C$, tức $z=x(C-2x)$.<br>$y(1)=1/z(1)=1/(C-2)=\\dfrac{1}{7}$ nên $C-2=1/\\dfrac{1}{7}=7$ và $C=9$.<br>$z(2)=2(C-22)=2(9-4)=10$; vậy $y(2)=1/z(2)=\\dfrac{1}{10}$.",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một ứng dụng mới được giới thiệu cho 900 học viên của một trường. Số người đã cài đặt $P(t)$ sau $t$ tuần thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{900}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 100$. Biết nghiệm có dạng $P(t) = \\dfrac{900}{1 + Ae^{-kt}}$. Số người đã cài đặt sau 6 tuần bằng",
   "options": [
    "$450$.",
    "$800$.",
    "$300$.",
    "$451$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=8$.<br>$kt=\\dfrac{\\ln2}{2}(6)=3\\ln2$, vì thế $e^{-kt}=e^{-3\\ln2}=2^{-3}=\\dfrac1{8}$.<br>$P(6)=\\dfrac{900}{1+\\frac{8}{8}}=\\dfrac{900\\cdot8}{8+8}=\\dfrac{7200}{16}=450$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 6e^{x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
   "options": [
    "$5 e$.",
    "$2 e$.",
    "$8 e$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = C_{1} + C_2 = 2 \\Rightarrow C_2 = 2$<br>$y(1) = (0 + (2) + 3)e = 5 e$",
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
   "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le y\\le1,\\ y\\le x\\le1$ becomes $0\\le x\\le1,\\ 0\\le y\\le x$.<br>Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{1}x e^{- x^{2}}\\,dx$.<br>Tính nguyên hàm: $I=\\left[- \\dfrac{e^{- x^{2}}}{2}\\right]_{0}^{1}=- \\dfrac{1}{2 e}-- \\dfrac{1}{2}=- \\dfrac{1 - e}{2 e}$.",
   "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 4$ và phía trên mặt nón $z = \\sqrt{3(x^2 + y^2)}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 2,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{6},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$\\dfrac{8 \\pi \\left(2 - \\sqrt{3}\\right)}{3}$.",
    "$\\dfrac{8 \\pi^{2}}{9}$.",
    "$\\dfrac{32 \\pi}{3}$.",
    "$\\dfrac{4 \\pi \\left(2 - \\sqrt{3}\\right)}{3}$."
   ],
   "answer": 0,
   "explain": "$V=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\sin\\theta\\,d\\theta\\int_0^{2}\\rho^2\\,d\\rho$. Các tích phân lần lượt bằng $2\\pi$, $[-\\cos\\theta]_0^{\\dfrac{\\pi}{6}}=1-\\cos\\dfrac{\\pi}{6}$ và $[\\rh\\frac{o^3}{3}]_0^{2}=8/3$.<br>$V=2\\pi(1-\\cos\\dfrac{\\pi}{6})\\dfrac{8}{3}=\\dfrac{8 \\pi \\left(2 - \\sqrt{3}\\right)}{3}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1500 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 20% khách hàng của Y chuyển sang X. Hiện tại X có 500 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$500$.",
    "$1000$.",
    "$750$.",
    "$501$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $1500-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(1500-x)$.<br>Nhân với $100$: $40x=20(1500-x)=30000-20x$, nên $(60)x=30000$ và $x=\\dfrac{30000}{60}=500$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 3 & 2 & 2 \\\\ 0 & -1 & -2 & 3 \\\\ 3 & 8 & 4 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 9$.",
    "$m = 10$.",
    "$m = -9$.",
    "$m = 8$."
   ],
   "answer": 0,
   "explain": "$R_3 \\leftarrow R_3 - 3R_1 - R_2$.<br>$A = \\begin{pmatrix}1 & 3 & 2 & 2 \\\\ 0 & -1 & -2 & 3 \\\\ 3 & 8 & 4 & m\\end{pmatrix} \\xrightarrow{R_3 \\leftarrow R_3 - 3R_1 - R_2} \\begin{pmatrix}1 & 3 & 2 & 2 \\\\ 0 & -1 & -2 & 3 \\\\ 0 & 0 & 0 & m - 9\\end{pmatrix}$.<br>$\\det \\begin{pmatrix}1 & 3 \\\\ 0 & -1\\end{pmatrix} = -1 \\ne 0$, nên hai hàng đầu độc lập tuyến tính.<br>$m = 9 \\Rightarrow R_3 = (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=2$.<br>$m \\ne 9 \\Rightarrow R_3 = (0,0,0,m - 9) \\ne (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=3$.<br><b>Kết quả:</b> $m = 9$.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$ và $B = \\begin{pmatrix}-3 & -1 \\\\ -7 & -1\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A^2.X = B$. Tổng tất cả các phần tử của $X$ bằng",
   "options": [
    "$4$.",
    "$8$.",
    "$-12$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$A^{-1} = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$<br>$A.X = A^{-1}B = \\begin{pmatrix}4 & 0 \\\\ 5 & -1\\end{pmatrix}$<br>$X = A^{-1}(A^{-1}B) = \\begin{pmatrix}-1 & 1 \\\\ 2 & 2\\end{pmatrix}$<br>Tổng các phần tử: $4$",
   "note": "$A^2X = B \\Rightarrow X = A^{-1}A^{-1}B$: nhân $A^{-1}$ vào bên trái hai lần."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 3y + 2z = 0\\\\ x + my + 2z = 0\\\\ 2x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$25$.",
    "$7$.",
    "$12$.",
    "$-7$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 7 m + 12 = \\left(m - 4\\right) \\left(m - 3\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 3$ hoặc $m = 4$<br>Giá trị cần tìm: $25$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{e^{5x} - 1 - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + 2b + 6L$ bằng",
   "options": [
    "$155$.",
    "$\\dfrac{115}{3}$.",
    "$5$.",
    "$\\dfrac{805}{6}$."
   ],
   "answer": 0,
   "explain": "$e^{u} = 1 + u + \\dfrac{u^2}{2} + \\dfrac{u^3}{6} + o(u^3)$, với $u=5x$, ta có $u^2=25x^2$ và $u^3=125x^3$.<br>Tử số sau khai triển là $(5-a)x+(\\dfrac{25}{2}-b)x^2+(\\dfrac{125}{6})x^3+o(x^3)$. Chia cho $x^3$: $\\dfrac{5-a}{x^2}+\\dfrac{\\dfrac{25}{2}-b}{x}+\\dfrac{125}{6}+o(1)$.<br>Để giới hạn hữu hạn, các hệ số phân kỳ triệt tiêu: $a=5$ và $b=\\dfrac{25}{2}$; hệ số còn lại cho $L=\\dfrac{125}{6}$.<br>$5+2(\\dfrac{25}{2})+6(\\dfrac{125}{6})=5+25+125=155$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\ln(1 + 6x) & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ (xét trong lân cận của điểm $0$) có đạo hàm cấp hai tại $x = 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$-30$.",
    "$-18$.",
    "$6$.",
    "$-12$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=\\ln\\left(6 x + 1\\right)$ có $g(0)=0$, $g^\\prime(0)=6$, $g^{\\prime\\prime}(0)=-36$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=0,\\ b=6,\\ 2a=-36$, do đó $a=-18$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $2a + b=-30$.",
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
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 100 + 0{,}8(Y - T)$; $T = 0{,}25Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 100$ và chi tiêu chính phủ $G_0 = 200$. Giá trị của số thuế $T^*$ tại trạng thái cân bằng bằng",
   "options": [
    "$250$.",
    "$1000$.",
    "$700$.",
    "$400$."
   ],
   "answer": 0,
   "explain": "$T=tY\\Rightarrow C=c_0+b(Y-tY)=100+\\dfrac{4}{5}(1-\\dfrac{1}{4})Y$.<br>$Y=C+I_0+G_0\\Rightarrow [1-\\dfrac{4}{5}(1-\\dfrac{1}{4})]Y=100+100+200$.<br>$Y=\\dfrac{400}{1-\\dfrac{4}{5}(1-\\dfrac{1}{4})}=1000$.<br>$T=tY=\\dfrac{1}{4}\\cdot1000=250,\\qquad C=c_0+b(Y-T)=100+\\dfrac{4}{5}(1000-250)=700$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{n+1}{3^n}$ bằng<span class=\"q-hint\">Gợi ý: đạo hàm từng số hạng chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty} x^{n+1}$.</span>",
   "options": [
    "$\\dfrac{9}{4}$.",
    "$\\dfrac{3}{2}$.",
    "$\\dfrac{3}{4}$.",
    "$\\dfrac{9}{2}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}x^{n+1} = \\dfrac{x}{1-x} \\Rightarrow \\sum_{n\\ge0}(n+1)x^n = \\left(\\dfrac{x}{1-x}\\right)' = \\dfrac{1}{(1-x)^2}$<br>$x = \\dfrac{1}{3}$: $\\dfrac{1}{\\left(\\frac{2}{3}\\right)^2} = \\dfrac{9}{4}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Một quả bóng được thả rơi từ độ cao 20 mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\\dfrac{1}{3}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng",
   "options": [
    "$40$.",
    "$30$.",
    "$60$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "$20 + 2\\displaystyle\\sum_{n=1}^{+\\infty}20\\left(\\dfrac{1}{3}\\right)^n = 20 + 2\\cdot\\dfrac{20\\cdot\\frac{1}{3}}{1 - \\frac{1}{3}} = 40$<br>Kết quả: $40$",
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
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + y = 4e^{-x}$ thỏa mãn $y(0) = 2$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{6}{e}$.",
    "$\\dfrac{2}{e}$.",
    "$\\dfrac{4}{e}$.",
    "$6 e$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{x}$: $\\left(ye^{x}\\right)' = 4$<br>$ye^{x} = 4x + C \\Rightarrow y = (4x + C)e^{-x}$<br>$y(0) = C = 2 \\Rightarrow y(1) = (4 + 2)e^{-1} = \\dfrac{6}{e}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một vật khối lượng 10 kg rơi từ trạng thái nghỉ, chịu lực cản không khí tỉ lệ với vận tốc với hệ số $k = 0{,}5\\,kg/s$, tức vận tốc $v(t)$ thỏa mãn $10v' = 10g - 0{,}5v$ (lấy $g = 9{,}8\\,m/s^2$). Vận tốc của vật sau 5 giây (làm tròn đến hàng phần chục, đơn vị m/s) là",
   "options": [
    "43,4.",
    "196,0.",
    "49,0.",
    "152,6."
   ],
   "answer": 0,
   "explain": "$v' + \\dfrac{0{,}5}{10}v = 9{,}8$ (tuyến tính cấp một), $v(0) = 0$<br>$v(t) = \\dfrac{mg}{k}\\left(1 - e^{-kt/m}\\right) = 196\\left(1 - e^{-0{,}05t}\\right)$<br>$v(5) = 196\\left(1 - e^{-0{,}25}\\right) \\approx 43{,}4$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 1,\\ x \\le 0,\\ y \\ge 0\\}$. Giá trị của tích phân $\\displaystyle\\iint_D (x^2 + y^2)\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{\\pi}{8}$.",
    "$\\dfrac{\\pi}{6}$.",
    "$\\dfrac{\\pi}{4}$.",
    "$\\dfrac{\\pi}{16}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 1,\\ \\dfrac{\\pi}{2} \\le \\varphi \\le \\pi$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{1}\\left(r^{2}\\right)r\\,dr = \\displaystyle \\int \\dfrac{1}{4}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{\\pi}{8}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 25$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{625 \\pi}{8}$.",
    "$\\dfrac{625 \\pi}{4}$.",
    "$\\dfrac{625 \\pi}{16}$.",
    "$\\dfrac{625 \\pi}{2}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu, $0 \\le \\theta \\le \\dfrac{\\pi}{4}$: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/4}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{5}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac14\\cdot\\dfrac{625}{4} = \\dfrac{625 \\pi}{8}$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là cung parabol $y = \\dfrac{x^2}{2}$ đi từ $O(0;0)$ đến $A\\left(2\\sqrt6;12\\right)$. Giá trị của tích phân $\\displaystyle\\int_L x\\,ds$ bằng",
   "options": [
    "$\\dfrac{124}{3}$.",
    "$\\dfrac{125}{3}$.",
    "$\\dfrac{62}{3}$.",
    "$62$."
   ],
   "answer": 0,
   "explain": "Đặt $x=t,\\ y=\\frac{t^2}{2}$ với $0\\le t\\le2\\sqrt6$; $ds=\\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt=\\sqrt{1+t^2}\\,dt$, nên $x\\,ds=t\\sqrt{1+t^2}\\,dt$.<br>Đặt $u=1+t^2$, $du=2t\\,dt$: $\\displaystyle I=\\frac12\\int_1^{1+2\\sqrt6^2}u^{1/2}\\,du=\\frac13[u^{3/2}]_1^{1+2\\sqrt6^2}$.<br>$I=\\dfrac{(1+2\\sqrt6^2)^{3/2}-1}{3}=\\dfrac{124}{3}$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(1;0),\\ B(0;2)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
   "options": [
    "$\\dfrac{1}{3}$.",
    "$- \\dfrac{1}{3}$.",
    "$1$.",
    "$\\dfrac{2}{3}$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{2 - 2 x}\\left(x\\right)dy$<br>$I = \\dfrac{1}{3}$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-5 & -3 \\\\ 6 & 4\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$5$.",
      "$1$.",
      "$-2$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (-1)\\lambda + (-2) = 0$ có nghiệm $1$ và $-2$<br>Kết quả: $5$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
     "options": [
      "$17$.",
      "$1$.",
      "$16$.",
      "$-4$."
     ],
     "answer": 0,
     "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(1)^{4} + (-2)^{4}$<br>Kết quả: $17$"
    },
    {
     "q": "Định thức của ma trận $A^2 - 3A$ bằng",
     "options": [
      "$-20$.",
      "$10$.",
      "$8$.",
      "$20$."
     ],
     "answer": 0,
     "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $-2$ và $10$; định thức bằng tích của chúng<br>Kết quả: $-20$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 16 x + y^{2} + 12 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 900\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 900$.",
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
     "explain": "Điểm dừng $(8;-6)$ nằm trong $D$ và $f = (x - 8)^2 + (y + 6)^2 - 100$<br>Kết quả: $-100$"
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
     "explain": "Trên biên $f = 900 - 2(8 x - 6 y)$, lớn nhất khi $8 x - 6 y$ nhỏ nhất, tức bằng $-30\\cdot10$<br>Kết quả: $1500$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-24$.",
      "$24$.",
      "$8$.",
      "$18$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(8;-6)$: $\\left(-24;18\\right)$<br>Kết quả: $-24$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = \\max\\{i,j\\}$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(-1A\\right)$.",
   "answer": [
    "-4"
   ],
   "explain": "$A = \\begin{pmatrix}1 & 2 & 3 & 4 \\\\ 2 & 2 & 3 & 4 \\\\ 3 & 3 & 3 & 4 \\\\ 4 & 4 & 4 & 4\\end{pmatrix}$, $\\det A = -4$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\left(-1\\right)^4\\cdot\\det A$ $= -4$<br>Đáp số: $-4$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, khử về dạng tam giác; $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y,z) = 2 x + y + 2 z$ trên mặt cầu $x^2 + y^2 + z^2 = 25$.",
   "answer": [
    "15"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(2;1;2)$; $f_{\\max} = 5\\sqrt{2^2 + 1^2 + 2^2} = 15$<br>Đáp số: $15$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(2n)!}{(n!)^2\\,5^n}x^n$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $a + b$.",
   "answer": [
    "9"
   ],
   "explain": "$\\dfrac{a_{n+1}}{a_n} = \\dfrac{(2n+1)(2n+2)}{5(n+1)^2} \\to \\dfrac45$ nên $R = \\dfrac{5}{4}$<br>Đáp số: $9$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = -e^{2x}$ với điều kiện $y(0) = 3;\\ y'(0) = 4$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "7"
   ],
   "explain": "$k = 2$ là nghiệm đơn của phương trình đặc trưng nên $y^* = -xe^{2x}$; $y = 2e^{2x} + e^{x} - xe^{2x}$; $y(2) \\approx 7{,}39$<br>Đáp số: $7$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt elipxoit $\\dfrac{x^2}{1} + \\dfrac{y^2}{4} + \\dfrac{z^2}{36} = 1$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "16"
   ],
   "explain": "Đổi biến $x = u,\\ y = 2v,\\ z = 6w$ (Jacobian $12$) đưa về hình cầu đơn vị: $V = 12\\cdot\\dfrac{4\\pi}{3} = 16\\pi$<br>Đáp số: $16$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
