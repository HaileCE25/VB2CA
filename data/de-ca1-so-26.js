// ĐỀ SỐ 26 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-26",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 26",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Cá nhân và cộng đồng",
  "prompt": "Khu tập thể cũ nơi ông Tư sống có một lối đi chung chỉ rộng hơn một mét. Khi phường vận động các hộ lùi tường rào để mở rộng lối đi cho xe cứu thương, xe chữa cháy vào được, ông là người phải lùi nhiều nhất và phản đối gay gắt nhất: “Đất của tôi, tôi giữ.” Một năm sau, chính ngôi nhà cuối ngõ bị cháy và xe chữa cháy phải dừng ở đầu ngõ.",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về câu chuyện trên và về giới hạn của quyền lợi riêng khi đặt cạnh sự an toàn, lợi ích chung của cộng đồng.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;5;1)$ và $v = (m;m;4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
   "options": [
    "$2$.",
    "$9$.",
    "$4$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$\\langle u,v\\rangle=(m)(m)+(5)(m)+(1)(4)=m^{2} + 5 m + 4=\\left(m + 1\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -4 < m < -1$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-3, -2\\}$; có $2$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(1;0),\\ u_2(-2;1),\\ u_3(2;-1),\\ u_4(-1;0),\\ u_5(1;-1)\\}$. Có bao nhiêu hệ con khác rỗng của $S$ độc lập tuyến tính?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$13$.",
    "$31$.",
    "$14$.",
    "$12$."
   ],
   "answer": 0,
   "explain": "Cả 5 véc tơ đều khác véc tơ không nên có 5 hệ một véc tơ độc lập.<br>$(u_1,u_2):\\ (\\Delta_{12})=(1)$.<br>$(u_1,u_3):\\ (\\Delta_{12})=(-1)$.<br>$(u_1,u_4):\\ (\\Delta_{12})=(0)$.<br>$(u_1,u_5):\\ (\\Delta_{12})=(-1)$.<br>$(u_2,u_3):\\ (\\Delta_{12})=(0)$.<br>$(u_2,u_4):\\ (\\Delta_{12})=(1)$.<br>$(u_2,u_5):\\ (\\Delta_{12})=(1)$.<br>$(u_3,u_4):\\ (\\Delta_{12})=(-1)$.<br>$(u_3,u_5):\\ (\\Delta_{12})=(-1)$.<br>$(u_4,u_5):\\ (\\Delta_{12})=(1)$.<br>Tổng số hệ con độc lập tuyến tính: $5+8+0=13$.",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-2 & 0 & -1 & 2 & -1 \\\\ 3 & 3 & 1 & 0 & 2 \\\\ 6 & -2 & 5 & -8 & -1 \\\\ -2 & 1 & -2 & 3 & 1\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Khử Gauss cho dạng bậc thang: $A \\to \\begin{pmatrix}-2 & 0 & -1 & 2 & -1 \\\\ 0 & -6 & 1 & -6 & -1 \\\\ 0 & 0 & 20 & 0 & -44 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$; có 3 hàng khác không nên hạng là 3.<br>Với $5$ ẩn và hạng 3, số ẩn tự do (số chiều hạt nhân) $= 5 - 3 = 2$.",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 3 \\\\ -2 & -2\\end{pmatrix}$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{4}$ bằng<span class=\"q-hint\">Gợi ý: dùng $A^k = A$ với mọi $k \\ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$.</span>",
   "options": [
    "$32$.",
    "$34$.",
    "$10$.",
    "$64$."
   ],
   "answer": 0,
   "explain": "$(I + A)^n = I + \\displaystyle\\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$<br>$(I + A)^{4} = I + 15A = \\begin{pmatrix}46 & 45 \\\\ -30 & -29\\end{pmatrix}$<br>Tổng các phần tử: $32$",
   "note": "Khi $A^2 = A$ thì mọi lũy thừa của $A$ đều bằng $A$; và $C_n^1 + \\dots + C_n^n = 2^n - 1$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 0 & -2 \\\\ 0 & -1 & 1 \\\\ 2 & -2 & 0\\end{pmatrix}$. Biết $A^{-1} = \\dfrac{1}{\\det A}\\left(A_{ji}\\right)$, trong đó $A_{ji}$ là phần bù đại số của phần tử $a_{ji}$ (chú ý thứ tự chỉ số). Phần tử thuộc hàng 2 và cột 1 của ma trận $A^{-1}$ bằng",
   "options": [
    "$-1$.",
    "$-2$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$\\det A = -2$. To find entry $(2,1)$ of $A^{-1}$, use the cofactor with reversed indices $(1,2)$.<br>Remove row 1 and column 2: $M_{12}=\\det(\\begin{pmatrix}0 & 1 \\\\ 2 & 0\\end{pmatrix})=-2$, hence $A_{12}=(-1)^{1+2}(-2)=2$.<br>$\\left(A^{-1}\\right)_{21}=\\dfrac{A_{12}}{\\det A}=\\dfrac{2}{-2}=-1$.",
   "note": "Phần tử hàng $i$, cột $j$ của $A^{-1}$ là $\\dfrac{A_{ji}}{\\det A}$: chỉ số bị đảo, và nhớ dấu $(-1)^{i+j}$."
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
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}3 & 1 & 1 & -1 \\\\ 3 & 2 & -2 & -1 \\\\ 0 & 0 & 3 & 0 \\\\ 0 & 0 & 2 & 2\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$18$.",
    "$9$.",
    "$21$.",
    "$-18$."
   ],
   "answer": 0,
   "explain": "$P=\\begin{pmatrix}3 & 1 \\\\ 3 & 2\\end{pmatrix}$, khử hàng được $\\det P=3$; $R=\\begin{pmatrix}3 & 0 \\\\ 2 & 2\\end{pmatrix}$, khử hàng được $\\det R=6$.<br>Khai triển theo cấu trúc khối tam giác: $\\det A=\\det P\\det R=(3)(6)=18$.",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(\\cos 3x)}{\\ln(\\cos 2x)}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{9}{4}$.",
    "$\\dfrac{3}{2}$.",
    "$1$.",
    "$\\dfrac{4}{9}$."
   ],
   "answer": 0,
   "explain": "$\\cos u=1-\\dfrac{u^2}{2}+o(u^2)$; với $w\\to0$, $\\ln(1+w)=w+o(w)$ nên $\\ln(\\cos u)=-\\dfrac{u^2}{2}+o(u^2)$.<br>Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\\dfrac{\\ln(\\cos Ax)}{\\ln(\\cos bx)}=\\dfrac{-A^2x^2/2+o(x^2)}{-b^2x^2/2+o(x^2)}\\to\\dfrac{9}{4}=\\dfrac{9}{4}$.",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Xét việc dùng quy tắc L’Hôpital để tính $\\lim\\limits_{x\\to x_0}\\dfrac{f(x)}{g(x)}$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Quy tắc chỉ áp dụng trực tiếp cho các dạng vô định $\\dfrac00$ và $\\dfrac{\\infty}{\\infty}$.",
    "Với mọi $f, g$ khả vi luôn có $\\lim\\dfrac{f(x)}{g(x)} = \\lim\\dfrac{f'(x)}{g'(x)}$.",
    "$\\lim\\dfrac{f(x)}{g(x)} = \\lim\\left(\\dfrac{f(x)}{g(x)}\\right)'$.",
    "Nếu $\\lim\\dfrac{f'(x)}{g'(x)}$ không tồn tại thì $\\lim\\dfrac{f(x)}{g(x)}$ cũng không tồn tại."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Quy tắc chỉ áp dụng trực tiếp cho các dạng vô định $\\dfrac00$ và $\\dfrac{\\infty}{\\infty}$. Đó là giả thiết của định lí; các dạng vô định khác phải được biến đổi về một trong hai dạng này.<br><b>Sai:</b> Với mọi $f, g$ khả vi luôn có $\\lim\\dfrac{f(x)}{g(x)} = \\lim\\dfrac{f'(x)}{g'(x)}$. $\\lim\\limits_{x\\to0}\\dfrac{x + 1}{x + 2} = \\dfrac12$, trong khi $\\dfrac{f'}{g'} = 1$.<br><b>Sai:</b> $\\lim\\dfrac{f(x)}{g(x)} = \\lim\\left(\\dfrac{f(x)}{g(x)}\\right)'$. Phải lấy đạo hàm riêng tử và riêng mẫu, không phải đạo hàm của thương.<br><b>Sai:</b> Nếu $\\lim\\dfrac{f'(x)}{g'(x)}$ không tồn tại thì $\\lim\\dfrac{f(x)}{g(x)}$ cũng không tồn tại. $\\lim\\limits_{x\\to+\\infty}\\dfrac{x + \\sin x}{x} = 1$ dù $\\dfrac{1 + \\cos x}{1}$ không có giới hạn."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{x}\\ln(1 + 3x)$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$6$.",
    "$- \\dfrac{3}{2}$.",
    "$36$.",
    "$-6$."
   ],
   "answer": 0,
   "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\ln\\left(3 x + 1\\right) = 3x - \\dfrac{9}{2}x^{2} + 9x^{3} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=3x - \\dfrac{3}{2}x^{2} + 6x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $6$.",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm hợp $z = u^2v$ với $u = x y,\\ v = x - y$. Dùng quy tắc đạo hàm hàm hợp $z'_x = z'_u\\cdot u'_x + z'_v\\cdot v'_x$, giá trị của $z'_x$ tại điểm $(x;y) = (1;2)$ bằng",
   "options": [
    "$-4$.",
    "$-8$.",
    "$0$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tại điểm đã cho: $u = 2,\\ v = -1$<br>$z'_u = 2 u v \\to -4,\\quad z'_v = u^{2} \\to 4$<br>$u'_x = y \\to 2,\\quad v'_x = 1 \\to 1$<br>$z'_x = (-4)\\cdot(2) + (4)\\cdot(1) = -4$",
   "note": "Tính $u, v$ tại điểm đã cho trước rồi mới thay vào các đạo hàm riêng; phải cộng đủ hai nhánh qua $u$ và qua $v$."
  },
  {
   "q": "Người ta tính lực hấp dẫn $F = G\\dfrac{m_1m_2}{d^2}$ giữa hai vật (các khối lượng đo chính xác, $G$ là hằng số) từ hai đại lượng đo được. Biết khoảng cách $d$ được đo với sai số tương đối không quá 3% và hằng số tỉ lệ dùng để hiệu chỉnh thiết bị (coi như một thừa số bậc nhất) với sai số tương đối không quá 1%. Dùng vi phân toàn phần của $\\ln F$, sai số tương đối lớn nhất của $F$ xấp xỉ bằng",
   "options": [
    "7%.",
    "4%.",
    "5%.",
    "6%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln F=C-2\\ln u+1\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dF}{F}=-2\\dfrac{du}{u}+1\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\DeltaF|}{|F|}\\le 2\\dfrac{|\\Delta u|}{u}+1\\dfrac{|\\Delta v|}{v}$.<br>$= 2\\cdot3\\% + 1\\cdot1\\% = 7\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị lớn nhất của hàm số $f(x,y) = 4 x + 3 y$ với điều kiện $x^2 + y^2 = 4$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$10$.",
    "$5$.",
    "$14$.",
    "$20$."
   ],
   "answer": 0,
   "explain": "$L=4x+3y-\\lambda(x^2+y^2-4)$. Điều kiện dừng: $4-2\\lambda x=0,\\ 3-2\\lambda y=0$, nên $x=\\dfrac{4}{2\\lambda}$, $y=\\dfrac{3}{2\\lambda}$.<br>Ràng buộc cho $\\dfrac{25}{4\\lambda^2}=4$, tức $\\lambda^2=\\dfrac{25}{4r^2}=\\dfrac{h^2}{4r^2}$; hai dấu cho hai điểm đối nhau, dấu dương cho cực đại.<br>Với $\\lambda=\\dfrac{h}{2r}$: $(x,y)=(\\dfrac{4r}{h},\\dfrac{3r}{h})$. Khi đó $f_{\\max}=\\dfrac{16r}{h}+\\dfrac{9r}{h}=\\dfrac{(16+9)r}{h}=rh=10$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+2}{2n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\arctan n}{n^2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\sqrt[n]{n}}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{5^n}{n\\cdot 4^n}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $(n+2)/(2n^2+1)\\sim1/(2n)$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 2: $0<\\arctan n<\\pi/2$, nên $0<\\arctan(n)/n^2<\\pi/(2n^2)$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 3: $\\sqrt[n]{n}\\to1$, do đó $u_n=1/(n\\sqrt[n]n)\\sim1/n$; phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $u_n=5^n/(n4^n)=(5/4)^n/n\\not\\to0$; chuỗi phân kỳ. Kết luận: phân kỳ.<br>Số chuỗi phân kỳ: $3$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Phát biểu nào sau đây về hội tụ tuyệt đối và bán hội tụ là đúng?",
   "options": [
    "Nếu $\\sum|u_n|$ hội tụ thì $\\sum u_n$ hội tụ.",
    "Nếu $\\sum u_n$ hội tụ thì $\\sum|u_n|$ hội tụ.",
    "Chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$ hội tụ tuyệt đối.",
    "Chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$ bán hội tụ."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $\\sum|u_n|$ hội tụ thì $\\sum u_n$ hội tụ. $0 \\le u_n + |u_n| \\le 2|u_n|$ nên $\\sum(u_n + |u_n|)$ hội tụ, suy ra $\\sum u_n$ hội tụ.<br><b>Sai:</b> Nếu $\\sum u_n$ hội tụ thì $\\sum|u_n|$ hội tụ. $\\sum\\dfrac{(-1)^n}{n}$ hội tụ (Leibniz) nhưng $\\sum\\dfrac1n$ phân kỳ.<br><b>Sai:</b> Chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$ hội tụ tuyệt đối. Chuỗi các trị tuyệt đối là chuỗi điều hòa, phân kỳ; chuỗi này chỉ bán hội tụ.<br><b>Sai:</b> Chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$ bán hội tụ. $\\sum\\dfrac{1}{n^2}$ hội tụ nên chuỗi hội tụ tuyệt đối."
  },
  {
   "q": "Phương trình nào sau đây là phương trình Bernoulli (với $\\alpha \\ne 0,\\ \\alpha \\ne 1$)?",
   "options": [
    "$xy' + y = y^2\\ln x$.",
    "$y' = e^{x - y}$.",
    "$y' = \\dfrac{x + y}{x - y}$.",
    "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $xy' + y = y^2\\ln x$ — Dạng $y' + p(x)y = q(x)y^{\\alpha}$; Chia cho $x\\ne0$: $y'+\\dfrac1x y=\\dfrac{\\ln x}{x}y^2$, Bernoulli với $\\alpha=2$.<br><b>Sai:</b> $y' = e^{x - y}$ — $e^{x-y}=e^x e^{-y}$ nên $e^y\\,dy=e^x\\,dx$.; đây là là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không phải dạng đang hỏi.<br><b>Sai:</b> $y' = \\dfrac{x + y}{x - y}$ — $\\dfrac{x+y}{x-y}=\\dfrac{1+y/x}{1-y/x}$, nên vế phải chỉ phụ thuộc $y/x$.; đây là là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không phải dạng đang hỏi.<br><b>Sai:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — $P=(2xy + 1),\\ Q=x^2 + 3y^2$: $\\partial P/\\partial y=2x$ và $\\partial Q/\\partial x=2x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình đẳng cấp $y' = \\dfrac{y}{x} + 2\\dfrac{y^2}{x^2}$ $(x > 0)$ thỏa mãn $y(1) = 1$. Bằng phép đặt $y = ux$, giá trị của $y\\left(\\dfrac{1}{\\sqrt e}\\right)$ bằng",
   "options": [
    "$\\dfrac{1}{2\\sqrt{e}}$.",
    "$\\dfrac{1}{\\sqrt{e}}$.",
    "$\\dfrac{2}{\\sqrt{e}}$.",
    "$\\dfrac{1}{3\\sqrt{e}}$."
   ],
   "answer": 0,
   "explain": "$y = ux \\Rightarrow y' = u'x + u$; thay vào: $u'x = 2u^2$<br>$\\dfrac{du}{u^2} = \\dfrac{2\\,dx}{x} \\Rightarrow -\\dfrac1u = 2 \\ln x + C$<br>$y(1) = 1 \\Rightarrow u(1) = 1 \\Rightarrow C = -1 \\Rightarrow y = \\dfrac{x}{1 - 2 \\ln x}$<br>$y\\left(\\dfrac{1}{\\sqrt e}\\right) = \\dfrac{1}{2\\sqrt{e}}$",
   "note": "Phương trình đẳng cấp: đặt $y = ux$ thì $y' = u'x + u$; giải xong nhớ đổi lại $u = \\dfrac{y}{x}$."
  },
  {
   "q": "Một tin đồn lan truyền trong một khu dân cư có 3000 người. Số người đã biết tin $P(t)$ sau $t$ ngày thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{3000}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 1000$. Biết nghiệm có dạng $P(t) = \\dfrac{3000}{1 + Ae^{-kt}}$. Số người biết tin sau 2 ngày bằng",
   "options": [
    "$1500$.",
    "$2000$.",
    "$1000$.",
    "$1501$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=2$.<br>$kt=\\dfrac{\\ln2}{2}(2)=1\\ln2$, vì thế $e^{-kt}=e^{-1\\ln2}=2^{-1}=\\dfrac1{2}$.<br>$P(2)=\\dfrac{3000}{1+\\frac{2}{2}}=\\dfrac{3000\\cdot2}{2+2}=\\dfrac{6000}{4}=1500$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $y'' + 2y' + 5y = e^{-x}\\cos 2x$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?",
   "options": [
    "$y^* = xe^{-x}(A\\cos 2x + B\\sin 2x)$.",
    "$y^* = e^{-x}(A\\cos 2x + B\\sin 2x)$.",
    "$y^* = Axe^{-x}\\cos 2x$.",
    "$y^* = x^2e^{-x}(A\\cos 2x + B\\sin 2x)$."
   ],
   "answer": 0,
   "explain": "$k^2+2k+5=0\\Rightarrow k=-1\\pm2i$, đúng bằng cặp số mũ phức của $e^{-x}\\cos2x$. Dạng $e^{-x}(A\\cos2x+B\\sin2x)$ cộng hưởng bậc 1 nên nhân thêm $x$.<br>Dạng cần tìm: $y^* = xe^{-x}(A\\cos 2x + B\\sin 2x)$",
   "note": "Bội của số mũ (hoặc của $\\alpha \\pm i\\beta$) trong phương trình đặc trưng quyết định nhân thêm $1$, $x$ hay $x^2$."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ y \\ge |x|\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>$y\\ge|x|\\Leftrightarrow\\sin\\varphi\\ge|\\cos\\varphi|\\Rightarrow\\pi/4\\le\\varphi\\le3\\pi/4$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{3(x^2 + y^2)}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{6},\\ 0 \\le \\varphi \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{\\pi}{16}$.",
    "$\\dfrac{\\pi}{8}$.",
    "$\\dfrac{\\pi}{32}$.",
    "$\\dfrac{\\pi}{4}$."
   ],
   "answer": 0,
   "explain": "Vì $z=\\rho\\cos\\theta$ và $dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$, $I=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^3\\,d\\rho$.<br>Các tích phân bằng $2\\pi$, $[\\sin^2\\theta/2]_0^{\\dfrac{\\pi}{6}}=\\sin^2\\dfrac{\\pi}{6}/2$, và $[\\rho^4/4]_0^{1}=1/4$. Vậy $I=2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{6}}{2}\\cdot\\dfrac{1}{4}=\\dfrac{\\pi}{16}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 900 nghìn người dùng, tổng số không đổi. Mỗi tháng có 30% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 600 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$225$.",
    "$675$.",
    "$450$.",
    "$600$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 10% của $900-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{10}{100}(900-x)$.<br>Nhân với $100$: $30x=10(900-x)=9000-10x$, nên $(40)x=9000$ và $x=\\dfrac{9000}{40}=225$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 2 & 2 \\\\ 2 & m & 2 \\\\ 2 & 2 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 1 khi và chỉ khi",
   "options": [
    "$m = 2$.",
    "$m = -4$.",
    "$m \\ne 2$ và $m \\ne -4$.",
    "$m = -4$ hoặc $m = 2$."
   ],
   "answer": 0,
   "explain": "$\\det A = \\left(m - 2\\right)^{2} \\left(m + 4\\right)$ nên $\\operatorname{rank}A = 3 \\Leftrightarrow m \\ne 2$ và $m \\ne -4$<br>Với $m = 2$: ba hàng của $A$ bằng nhau và khác không nên $\\operatorname{rank}A = 1$<br>Với $m = -4$: tổng ba hàng bằng véc tơ không, hai hàng đầu không tỉ lệ nên $\\operatorname{rank}A = 2$<br>Vậy hạng của $A$ bằng 1 $\\Leftrightarrow m = 2$",
   "note": "$\\det A = 0$ mới cho biết hạng nhỏ hơn 3; phải thay từng giá trị $m$ để biết hạng bằng 1 hay 2."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}-1 & -1 \\\\ 1 & -2\\end{pmatrix}$ và $B = \\begin{pmatrix}0 & 4 \\\\ 0 & 2\\end{pmatrix}$. Ma trận $X$ thỏa mãn $2X + A.X = B$ là",
   "options": [
    "$\\begin{pmatrix}0 & 2 \\\\ 0 & -2\\end{pmatrix}$.",
    "$\\begin{pmatrix}-4 & 4 \\\\ -2 & 2\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & 2 \\\\ 0 & 4\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & 0 \\\\ 2 & -2\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$2X+AX=B \\Rightarrow (2I+A)X=B$.<br>$2I+A=\\begin{pmatrix}1 & -1 \\\\ 1 & 0\\end{pmatrix},\\qquad B=\\begin{pmatrix}0 & 4 \\\\ 0 & 2\\end{pmatrix}$.<br>$X=(2I+A)^{-1}B=\\begin{pmatrix}0 & 1 \\\\ -1 & 1\\end{pmatrix}\\begin{pmatrix}0 & 4 \\\\ 0 & 2\\end{pmatrix}=\\begin{pmatrix}0 & 2 \\\\ 0 & -2\\end{pmatrix}$.<br>Kiểm tra: $(2I+A)\\begin{pmatrix}0 & 2 \\\\ 0 & -2\\end{pmatrix}=\\begin{pmatrix}0 & 4 \\\\ 0 & 2\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + 2z = 0\\\\ x + my + z = 0\\\\ x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$0$.",
    "$-1$.",
    "$2$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 1 = \\left(m - 1\\right) \\left(m + 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -1$ hoặc $m = 1$<br>Giá trị cần tìm: $0$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + 2x) - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a - 2b + 3L$ bằng",
   "options": [
    "$14$.",
    "$\\dfrac{8}{3}$.",
    "$2$.",
    "$\\dfrac{34}{3}$."
   ],
   "answer": 0,
   "explain": "$\\ln(1 + u) = u - \\dfrac{u^2}{2} + \\dfrac{u^3}{3} + o(u^3)$, với $u=2x$, ta có $u^2=4x^2$ và $u^3=8x^3$.<br>Tử số sau khai triển là $(2-a)x+(-2-b)x^2+(\\dfrac{8}{3})x^3+o(x^3)$. Chia cho $x^3$: $\\dfrac{2-a}{x^2}+\\dfrac{-2-b}{x}+\\dfrac{8}{3}+o(1)$.<br>Để giới hạn hữu hạn, các hệ số phân kỳ triệt tiêu: $a=2$ và $b=-2$; hệ số còn lại cho $L=\\dfrac{8}{3}$.<br>2-2(-2)+3(\\dfrac{8}{3})=2+4+8=14",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{4x} & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$20$.",
    "$8$.",
    "$5$.",
    "$21$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=e^{4 x}$ có $g(0)=1$, $g^\\prime(0)=4$, $g^{\\prime\\prime}(0)=16$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$. Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=4,\\ 2a=16$, do đó $a=8$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $2a + b=20$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 4}$ bằng",
   "options": [
    "$\\dfrac{\\pi}{4}$.",
    "$\\dfrac{\\pi}{2}$.",
    "$\\dfrac{\\pi}{8}$.",
    "$\\dfrac{\\pi}{4} + 1$."
   ],
   "answer": 0,
   "explain": "Đặt $x=2t$, $dx=2dt$, $x^2+4=4(1+t^2)$: $\\int_0^\\infty\\dfrac{dx}{x^2+4}=\\dfrac1{2}\\int_0^\\infty\\dfrac{dt}{1+t^2}$.<br>$=\\dfrac1{2}[\\arctan t]_0^\\infty=\\dfrac1{2}(\\dfrac\\pi2-0)=\\dfrac{\\pi}{4}$.",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $2, 1, 1$ đơn vị nguyên liệu I; $2, 2, 1$ đơn vị nguyên liệu II và $3, 2, 2$ đơn vị nguyên liệu III. Kho hiện có $120$, $140$ và $210$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$90$.",
    "$100$.",
    "$80$.",
    "$47$."
   ],
   "answer": 0,
   "explain": "Gọi $x,y,z$ lần lượt là số sản phẩm loại 1, 2, 3.<br>Hệ nguyên liệu: $\\begin{pmatrix}2 & 1 & 1 \\\\ 2 & 2 & 1 \\\\ 3 & 2 & 2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=(120;140;210)^T$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}2 & 1 & 1 & 120\\\\ 2 & 2 & 1 & 140\\\\ 3 & 2 & 2 & 210\\end{array}\\right)$$<br>$R_1 \\leftarrow \\dfrac{1}{2}R_1$: $$\\left(\\begin{array}{rrr|r}1 & \\dfrac{1}{2} & \\dfrac{1}{2} & 60\\\\ 2 & 2 & 1 & 140\\\\ 3 & 2 & 2 & 210\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (2)R_1$: $$\\left(\\begin{array}{rrr|r}1 & \\dfrac{1}{2} & \\dfrac{1}{2} & 60\\\\ 0 & 1 & 0 & 20\\\\ 3 & 2 & 2 & 210\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (3)R_1$: $$\\left(\\begin{array}{rrr|r}1 & \\dfrac{1}{2} & \\dfrac{1}{2} & 60\\\\ 0 & 1 & 0 & 20\\\\ 0 & \\dfrac{1}{2} & \\dfrac{1}{2} & 30\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (\\dfrac{1}{2})R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{2} & 50\\\\ 0 & 1 & 0 & 20\\\\ 0 & \\dfrac{1}{2} & \\dfrac{1}{2} & 30\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (\\dfrac{1}{2})R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{2} & 50\\\\ 0 & 1 & 0 & 20\\\\ 0 & 0 & \\dfrac{1}{2} & 20\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{\\dfrac{1}{2}}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{2} & 50\\\\ 0 & 1 & 0 & 20\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (\\dfrac{1}{2})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 30\\\\ 0 & 1 & 0 & 20\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$(x,y,z)^T=(30;20;40)^T$; tổng sản phẩm: $30+20+40=90$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Bằng cách tách $\\dfrac{1}{n(n+6)} = \\dfrac{1}{6}\\left(\\dfrac1n - \\dfrac{1}{n+6}\\right)$, tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n(n+6)}$ bằng",
   "options": [
    "$\\dfrac{49}{120}$.",
    "$\\dfrac{1}{6}$.",
    "$\\dfrac{49}{20}$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$S_N = \\dfrac{1}{6}\\displaystyle\\sum_{n=1}^{N}\\left(\\dfrac1n - \\dfrac{1}{n+6}\\right) = \\dfrac{1}{6}\\left(1 + \\dfrac12 + \\dfrac13 + \\dfrac14 + \\dfrac15 + \\dfrac16 - \\sum_{n=N+1}^{N+6}\\dfrac1n\\right)$<br>$N \\to +\\infty$: $S = \\dfrac{1}{6}\\cdot\\dfrac{49}{20} = \\dfrac{49}{120}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}4363636\\ldots$ (phần tuần hoàn là 36) bằng $\\dfrac{4}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{36}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$79$.",
    "$31$.",
    "$80$.",
    "$1436$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{36}{10\\cdot100^n} = \\dfrac{36}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{36}{990}$<br>$\\dfrac{4}{10} + \\dfrac{36}{990} = \\dfrac{24}{55} \\Rightarrow a + b = 79$",
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
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - 2y = x^{3}e^x$ $(x > 0)$ thỏa mãn $y(1) = e - 1$. Giá trị của $y(2)$ bằng",
   "options": [
    "$4 e^{2} - 4$.",
    "$4 e^{2}$.",
    "$e^{2} - 1$.",
    "$4 + 4 e^{2}$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{3}$: $\\left(\\dfrac{y}{x^{2}}\\right)' = e^x \\Rightarrow y = x^{2}(e^x + C)$<br>$y(1) = e + C = e - 1 \\Rightarrow C = -1$<br>$y(2) = 4\\left(e^2 - 1\\right) = 4 e^{2} - 4$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bể chứa 100 lít nước có hòa tan 30 kg muối. Người ta bơm vào bể nước muối nồng độ 0,1 kg/lít với tốc độ 9 lít/phút, đồng thời rút hỗn hợp (luôn được khuấy đều) ra khỏi bể với tốc độ 6 lít/phút, nên thể tích nước trong bể tăng dần. Lượng muối trong bể sau 25 phút là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "24,0.",
    "17,5.",
    "52,5.",
    "28,9."
   ],
   "answer": 0,
   "explain": "$V(t) = 100 + 3t$; $S' + \\dfrac{6}{100 + 3t}S = 0{,}9,\\quad S(0) = 30$<br>Nhân với thừa số tích phân $(100 + 3t)^2$: $\\left[S(100 + 3t)^2\\right]' = 0{,}9(100 + 3t)^2$<br>$S(100 + 3t)^2 = 0{,}1(100 + 3t)^3 + C$; $S(0) = 30 \\Rightarrow C = 200000$<br>$S(25) = 0{,}1\\cdot175 + \\dfrac{200000}{175^2} \\approx 24{,}0$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 1,\\ 0 \\le y \\le x\\}$. Giá trị của tích phân $\\displaystyle\\iint_D (x^2 + y^2)\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{\\pi}{16}$.",
    "$\\dfrac{\\pi}{12}$.",
    "$\\dfrac{\\pi}{8}$.",
    "$\\dfrac{\\pi}{32}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 1,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{4}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{1}\\left(r^{2}\\right)r\\,dr = \\int \\dfrac{1}{4}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{\\pi}{16}$",
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
   "explain": "$x^2+y^2+z^2=\\rho^2$ and $dV=\\rho^2\\sin\\theta\\,d\\rho d\\theta d\\varphi$, so $I=\\int_0^{2\\pi}d\\varphi\\int_0^\\pi\\sin\\theta\\,d\\theta\\int_0^{5}\\rho^4\\,d\\rho$.<br>Tích phân theo góc: $2\\pi\\cdot2$; theo bán kính: $[\\rho^5/5]_0^{5}=3125/5$. Hence $I=2\\pi\\cdot2\\cdot\\dfrac{3125}{5}=2500 \\pi$.",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Trong mặt phẳng $Oxy$, cho $L$ là đoạn thẳng nối từ $A(1;0)$ đến $B(5;3)$. Giá trị của tích phân $\\displaystyle\\int_L (x + 2 y)\\,ds$ bằng",
   "options": [
    "$30$.",
    "$6$.",
    "$60$.",
    "$55$."
   ],
   "answer": 0,
   "explain": "Tham số hóa $x=1+4t,\\ y=0+3t$, $0\\le t\\le1$; $ds=\\sqrt{4^2+3^2}\\,dt=5\\,dt$.<br>$px+qy=p(<x1>+<dx>t)+q(<y1>+<dy>t)=1+10t$. Do đó $\\displaystyle I=5\\int_0^1(1+10t)\\,dt=5(1+10/2)=30$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 2 y^{2} + 1)\\,dx + (- x^{2} + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$-2$.",
    "$2$.",
    "$-1$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 4 y,\\quad Q'_x = - 2 x + 4 y$<br>Đồng nhất hệ số: $m = -2$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 1 & 2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 1$. Kí hiệu $f(A) = A^2 - 3A - I$.",
   "questions": [
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
     "options": [
      "$7$.",
      "$9$.",
      "$6$.",
      "$13$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}2 & 3 \\\\ 3 & 5\\end{pmatrix}$<br>Vết của $A^2$: $7$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
     "options": [
      "$-4$.",
      "$-2$.",
      "$-5$.",
      "$-3$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}2 & 3 \\\\ 3 & 5\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-2 & 0 \\\\ 0 & -2\\end{pmatrix}$<br>Tổng các phần tử: $-4$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
     "options": [
      "$1$.",
      "$5$.",
      "$-1$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}2 & -1 \\\\ -1 & 1\\end{pmatrix}$<br>Tổng các phần tử: $1$",
     "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} + 8 x + y^{2} + 6 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 400\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 400$.",
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
     "explain": "Điểm dừng $(-4;-3)$ nằm trong $D$ và $f = (x + 4)^2 + (y + 3)^2 - 25$<br>Kết quả: $-25$"
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
     "explain": "Trên biên $f = 400 - 2(- 4 x - 3 y)$, lớn nhất khi $- 4 x - 3 y$ nhỏ nhất, tức bằng $-20\\cdot5$<br>Kết quả: $600$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$16$.",
      "$-16$.",
      "$-4$.",
      "$12$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(-4;-3)$: $\\left(16;12\\right)$<br>Kết quả: $16$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-2 & 1 & -2 \\\\ -1 & 0 & 2 \\\\ 3 & 0 & 2\\end{pmatrix}$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\\det\\left(A - A^T\\right)$.",
   "answer": [
    "0"
   ],
   "explain": "$S=A-A^T=\\begin{pmatrix}0 & 2 & -5 \\\\ -2 & 0 & 2 \\\\ 5 & -2 & 0\\end{pmatrix}$, nên $S^T=-S$. Do đó $\\det S=\\det(S^T)=\\det(-S)=(-1)^3\\det S=-\\det S$, suy ra $2\\det S=0$ và $\\det S=0$<br>Đáp số: $0$",
   "note": "$A + A^T$ đối xứng; $A - A^T$ phản đối xứng, và ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0."
  },
  {
   "q": "Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $x + 4 y + 8 z = 162$.",
   "answer": [
    "324"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(1;4;8)$ với $t = \\dfrac{162}{81}$; $f_{\\min} = \\dfrac{162^2}{81} = 324$<br>Đáp số: $324$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(x - 1)^{n}}{n^2\\cdot4^n}$?<span class=\"q-hint\">Chú ý: xét riêng hai đầu mút của khoảng hội tụ.</span>",
   "answer": [
    "9"
   ],
   "explain": "Bán kính hội tụ $R = 4$; tại hai đầu mút chuỗi hội tụ tuyệt đối (so sánh với $\\sum\\dfrac{1}{n^2}$). Miền hội tụ: $[-3;5]$<br>Đáp số: $9$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y' - 2y = 6e^{2x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "15"
   ],
   "explain": "$k = 2$ là nghiệm đơn của phương trình đặc trưng nên $y^* = 2xe^{2x}$; $y = 2xe^{2x}$; $y(1) \\approx 14{,}78$<br>Đáp số: $15$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
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
