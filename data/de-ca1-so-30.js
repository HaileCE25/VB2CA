// ĐỀ SỐ 30 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-30",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 30",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản sắc và hội nhập",
  "prompt": "Một nhóm bạn trẻ lập kênh video giới thiệu ẩm thực và làng nghề quê mình bằng tiếng Anh, thu hút hàng trăm nghìn người xem ở nước ngoài. Để tăng lượt xem, có thành viên đề nghị “dựng thêm chi tiết cho hấp dẫn”, kể cả những phong tục vốn không có thật. Trưởng nhóm từ chối: “Khán giả có thể không biết, nhưng mình biết.”",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về lời từ chối của trưởng nhóm và về sự trung thực khi quảng bá văn hóa dân tộc ra thế giới.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;3;1)$ và $v = (m;m;-4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
   "options": [
    "$4$.",
    "$7$.",
    "$6$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = m^{2} + 3 m - 4 = \\left(m - 1\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -4 < m < 1$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $4$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(3;4;0),\\ u_2(1;1;-1),\\ u_3(2;3;1),\\ u_4(3;1;3)\\}$. Có bao nhiêu hệ con gồm đúng 3 véc tơ của $S$ là cơ sở của $\\mathbb{R}^3$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$3$.",
    "$4$.",
    "$2$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Có $C_4^3 = 4$ hệ con gồm 3 véc tơ, trong đó 1 hệ phụ thuộc tuyến tính<br>Kết quả: $3$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & -1 & 3 & 3 & -2 \\\\ 1 & 3 & 1 & -1 & 3 \\\\ 5 & 5 & 5 & 1 & 4 \\\\ 0 & 2 & 1 & -1 & 1\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng: $A \\to \\begin{pmatrix}3 & -1 & 3 & 3 & -2 \\\\ 0 & 10 & 0 & -6 & 11 \\\\ 0 & 0 & 10 & 2 & -12 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}A = 3$<br>Số chiều không gian nghiệm $= 5 - 3 = 2$",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & -2 \\\\ 3 & 3\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = 5A - 12I$. Phần tử thuộc hàng 1 và cột 2 của ma trận $A^{4}$ bằng",
   "options": [
    "$-10$.",
    "$15$.",
    "$-26$.",
    "$16$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}-2 & -10 \\\\ 15 & 3\\end{pmatrix}$<br>$A^3 = A^2\\cdot A = \\begin{pmatrix}-34 & -26 \\\\ 39 & -21\\end{pmatrix}$<br>$A^4 = A^2\\cdot A^2 = \\begin{pmatrix}-146 & -10 \\\\ 15 & -141\\end{pmatrix}$<br>Phần tử hàng 1, cột 2 của $A^{4}$: $-10$",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 2$. Giá trị của $\\det\\left(A^2A^T\\right)$ bằng",
   "options": [
    "$8$.",
    "$4$.",
    "$-8$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(A^2A^T\\right) = (\\det A)^2\\cdot\\det A$<br>Thay $\\det A = 2$: kết quả $8$",
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
   "explain": "<b>Đúng:</b> $\\operatorname{tr}(AB) = \\operatorname{tr}(BA)$. Cả hai vế đều bằng $\\sum_i\\sum_j a_{ij}b_{ji}$.<br><b>Sai:</b> $\\operatorname{tr}(AB) = \\operatorname{tr}(A)\\cdot\\operatorname{tr}(B)$. Với $A = B = I$ cấp 2: $\\operatorname{tr}(AB) = 2$ còn $\\operatorname{tr}(A)\\cdot\\operatorname{tr}(B) = 4$.<br><b>Sai:</b> $\\operatorname{tr}(A^2) = (\\operatorname{tr}A)^2$. Với $A = I$ cấp 2: $\\operatorname{tr}(A^2) = 2$ còn $(\\operatorname{tr}A)^2 = 4$.<br><b>Sai:</b> Nếu $\\operatorname{tr}(A) = 0$ thì $A$ không khả nghịch. $A = \\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$ có vết bằng 0 nhưng $\\det A = -1 \\ne 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}1 & 4 & 1 & 2 \\\\ 2 & 2 & -1 & 0 \\\\ 0 & 0 & 1 & -1 \\\\ 0 & 0 & -2 & 3\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$-6$.",
    "$-5$.",
    "$-8$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\det P = -6,\\quad \\det R = 1$<br>$\\det A = \\det P\\cdot\\det R = (-6)\\cdot(1) = -6$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{2x - \\arctan 2x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{8}{3}$.",
    "$\\dfrac{4}{3}$.",
    "$8$.",
    "$- \\dfrac{8}{3}$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 2x$: $\\arctan u = u - \\dfrac{u^3}{3} + o(u^3)$<br>$u - \\arctan u = \\dfrac{u^3}{3} + o(u^3) = \\dfrac{8x^3}{3} + o(x^3)$<br>$\\lim = \\dfrac{8}{3} = \\dfrac{8}{3}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} - 2 x^{2} - 9 x + 18}{x^{2} + 4 x + 3}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$y = \\dfrac{\\left(x - 3\\right) \\left(x - 2\\right) \\left(x + 3\\right)}{\\left(x + 1\\right) \\left(x + 3\\right)}$<br>Có tiệm cận đứng $x = -1$, một tiệm cận xiên (tại $x = -3$ giới hạn hữu hạn; bậc tử hơn bậc mẫu 1 đơn vị nên có tiệm cận xiên, không có tiệm cận ngang)<br>Tổng cộng: $2$ đường tiệm cận",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\ln\\dfrac{1 + x}{1 - x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$\\dfrac{2}{3}$.",
    "$0$.",
    "$4$.",
    "$- \\dfrac{2}{3}$."
   ],
   "answer": 0,
   "explain": "Nhân lại, gom theo bậc: $f(x) = 2x + \\dfrac{2}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{2}{3}$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} - 3 x y + y^{2}$. Đạo hàm của $f$ tại điểm $M(2;1)$ theo hướng của véc tơ $\\vec l = (3;4)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{11}{5}$.",
    "$11$.",
    "$\\dfrac{24}{5}$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} - 3 y,\\quad f'_y = - 3 x + 2 y$<br>$\\nabla f(M) = (9;-4)$<br>$|\\vec l| = \\sqrt{(3)^2 + (4)^2} = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(9)\\cdot(3) + (-4)\\cdot(4)}{5} = \\dfrac{11}{5}$",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Xét bài toán tìm cực trị của $f(x,y)$ với điều kiện $g(x,y) = 0$ (giả sử $\\nabla g \\ne \\vec 0$) bằng hàm Lagrange $L = f + \\lambda g$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Điểm cực trị có điều kiện (nếu có) phải thỏa mãn hệ $L'_x = 0,\\ L'_y = 0,\\ g = 0$.",
    "Mọi nghiệm của hệ $L'_x = 0,\\ L'_y = 0,\\ g = 0$ đều là điểm cực trị có điều kiện.",
    "Điểm cực trị có điều kiện phải là điểm dừng của $f$, tức $f'_x = f'_y = 0$.",
    "Tại điểm cực trị có điều kiện, $\\nabla f$ vuông góc với $\\nabla g$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Điểm cực trị có điều kiện (nếu có) phải thỏa mãn hệ $L'_x = 0,\\ L'_y = 0,\\ g = 0$. Đây là điều kiện cần của cực trị có điều kiện.<br><b>Sai:</b> Mọi nghiệm của hệ $L'_x = 0,\\ L'_y = 0,\\ g = 0$ đều là điểm cực trị có điều kiện. Hệ chỉ là điều kiện cần: $f = x^3$ với điều kiện $y = 0$ cho nghiệm $(0;0)$, nhưng trên đường $y = 0$ hàm $x^3$ không có cực trị.<br><b>Sai:</b> Điểm cực trị có điều kiện phải là điểm dừng của $f$, tức $f'_x = f'_y = 0$. $f = x + y$ với $x^2 + y^2 = 1$ có cực trị dù $\\nabla f = (1;1)$ không bao giờ bằng $\\vec 0$.<br><b>Sai:</b> Tại điểm cực trị có điều kiện, $\\nabla f$ vuông góc với $\\nabla g$. Hai gradient cùng phương: $\\nabla f = -\\lambda\\nabla g$."
  },
  {
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $3 x + 4 y = 75$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$225$.",
    "$75$.",
    "$450$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$L = x^2 + y^2 - \\lambda(3 x + 4 y - 75)$<br>$L'_x = 2x - 3 \\lambda = 0,\\quad L'_y = 2y - 4 \\lambda = 0 \\Rightarrow x = \\dfrac{3 \\lambda}{2},\\ y = 2 \\lambda$<br>Thay vào ràng buộc: $\\dfrac{25 \\lambda}{2} = 75 \\Rightarrow \\lambda = 6$<br>$(x;y) = \\left(9;12\\right)$, $f_{\\min} = 225$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\sqrt[n]{n}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{3^n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{5^n}{n\\cdot 4^n}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 2: $\\sqrt[n]{n} \\to 1 \\Rightarrow u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 3: $\\dfrac{u_{n+1}}{u_n} \\to \\dfrac13 < 1$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 4: $u_n = \\dfrac1n\\left(\\dfrac54\\right)^n \\not\\to 0$ $\\Rightarrow$ phân kỳ<br>Số chuỗi hội tụ: $1$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n!}$, $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n\\sqrt n}$. Có bao nhiêu chuỗi hội tụ tuyệt đối trong bốn chuỗi trên?",
   "options": [
    "$4$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $|u_n| \\le \\frac{1}{n^2}$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 2: $\\frac{|u_{n+1}|}{|u_n|} = \\frac{1}{n+1} \\to 0$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 3: $|u_n| \\sim \\frac{1}{2n^2}$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 4: $\\sum\\frac{1}{n^{3/2}}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Số chuỗi hội tụ tuyệt đối: $4$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
   "options": [
    "$y' + x^2y = \\sin x$.",
    "$y' = \\dfrac{1 + y^2}{1 + x^2}$.",
    "$xy' + y = y^2\\ln x$.",
    "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' + x^2y = \\sin x$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$<br><b>Sai:</b> $y' = \\dfrac{1 + y^2}{1 + x^2}$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi<br><b>Sai:</b> $xy' + y = y^2\\ln x$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi<br><b>Sai:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi"
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
   "explain": "Đặt $z = \\dfrac1y \\Rightarrow z' = -\\dfrac{y'}{y^2}$; chia phương trình cho $-y^2$:<br>$z' - \\dfrac{z}{x} = - 2 x$<br>$\\left(\\dfrac{z}{x}\\right)' = -2 \\Rightarrow z = x(C - 2 x)$<br>$y(1) = \\dfrac{1}{C - 2} = \\dfrac{1}{6} \\Rightarrow C = 8$<br>$y(2) = \\dfrac{1}{2(8 - 4)} = \\dfrac{1}{8}$",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một tin đồn lan truyền trong một khu dân cư có 1800 người. Số người đã biết tin $P(t)$ sau $t$ ngày thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{1800}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 200$. Biết nghiệm có dạng $P(t) = \\dfrac{1800}{1 + Ae^{-kt}}$. Số người biết tin sau 6 ngày bằng",
   "options": [
    "$900$.",
    "$1600$.",
    "$600$.",
    "$901$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{1800}{1 + A} = 200 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{2}\\cdot6} = 2^{-3} = \\dfrac{1}{8}$<br>$P(6) = \\dfrac{1800}{1 + \\frac{8}{8}} = 900$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 12\\cos x$ với điều kiện $y(0) = 3;\\ y'(0) = 3$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
   "options": [
    "$3 + 3 \\pi$.",
    "$3$.",
    "$3 \\pi$.",
    "$3 - 3 \\pi$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $12\\cos x$: $a = 0,\\ b = 6$<br>$y = C_1\\cos x + C_2\\sin x + 6x\\sin x$<br>$y(0) = C_1 = 3;\\quad y'(0) = C_{2} = 3 \\Rightarrow C_2 = 3$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 3 + 6\\cdot\\dfrac{\\pi}{2} = 3 + 3 \\pi$",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ y \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>Điều kiện $y \\le 0$ ứng với $\\pi \\le \\varphi \\le 2\\pi$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 4$ và phía trên mặt nón $z = \\sqrt{3(x^2 + y^2)}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 2,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{6},\\ 0 \\le \\varphi \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\pi$.",
    "$2 \\pi$.",
    "$\\dfrac{\\pi}{2}$.",
    "$4 \\pi$."
   ],
   "answer": 0,
   "explain": "$I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{2}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{6}}{2}\\cdot\\dfrac{16}{4} = \\pi$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 600 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 400 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$360$.",
    "$240$.",
    "$300$.",
    "$380$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 30\\%\\cdot(600 - x)$<br>$50x = 18000 \\Rightarrow x = 360$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 0 & 2 & -2 \\\\ 3 & -1 & 1 & 3 \\\\ 5 & -2 & 0 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 8$.",
    "$m = 9$.",
    "$m = -8$.",
    "$m = 7$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $-1$ lần hàng 1 cộng $2$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = 8$; ngược lại hạng bằng 3<br>Kết quả: $m = 8$",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 3 \\\\ 3 & 10\\end{pmatrix}$ và $B = \\begin{pmatrix}0 & 76 \\\\ 0 & 251\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A^2.X = B$. Tổng tất cả các phần tử của $X$ bằng",
   "options": [
    "$3$.",
    "$30$.",
    "$327$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$A^{-1} = \\begin{pmatrix}10 & -3 \\\\ -3 & 1\\end{pmatrix}$<br>$A.X = A^{-1}B = \\begin{pmatrix}0 & 7 \\\\ 0 & 23\\end{pmatrix}$<br>$X = A^{-1}(A^{-1}B) = \\begin{pmatrix}0 & 1 \\\\ 0 & 2\\end{pmatrix}$<br>Tổng các phần tử: $3$",
   "note": "$A^2X = B \\Rightarrow X = A^{-1}A^{-1}B$: nhân $A^{-1}$ vào bên trái hai lần."
  },
  {
   "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b + 1)x + 8y = a^2 - 10\\\\ x + ay = 3\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
   "options": [
    "$(a;b) = (4;1)$.",
    "$(a;b) = (-4;1)$.",
    "$(a;b) = (4;-1)$.",
    "$(a;b) = (-4;-1)$."
   ],
   "answer": 0,
   "explain": "Vô số nghiệm $\\Leftrightarrow \\dfrac{b + 1}{1} = \\dfrac{8}{a} = \\dfrac{a^2 - 10}{3}$<br>Với $(a;b) = (4;1)$: $\\dfrac{2}{1} = 2;\\quad \\dfrac{8}{4} = 2;\\quad \\dfrac{6}{3} = 2$ (thỏa mãn)<br>Mỗi cặp còn lại làm ít nhất một tỉ số khác đi nên không cho vô số nghiệm",
   "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\sin 3x - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b - 6L$ bằng",
   "options": [
    "$30$.",
    "$- \\dfrac{3}{2}$.",
    "$3$.",
    "$\\dfrac{69}{2}$."
   ],
   "answer": 0,
   "explain": "$\\sin u = u - \\dfrac{u^3}{6} + o(u^3)$, $u = 3x$<br>Tử số $= (3 - a)x + (0 - b)x^2 - \\dfrac{9}{2}x^3 + o(x^3)$<br>Giới hạn hữu hạn $\\Leftrightarrow a = 3,\\ b = 0$; khi đó $L = - \\dfrac{9}{2}$<br>Giá trị cần tính: $30$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\ln(1 + 6x) & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ (xét trong lân cận của điểm $0$) có đạo hàm cấp hai tại $x = 0$. Giá trị của $a + b + d$ bằng",
   "options": [
    "$-12$.",
    "$-18$.",
    "$6$.",
    "$-30$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = \\ln\\left(6 x + 1\\right)$: $g(0) = 0,\\ g'(0) = 6,\\ g''(0) = -36$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 0,\\ b = 6,\\ 2a = -36 \\Rightarrow a = -18$<br>$a + b + d = -12$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Cho hàm số $f$ liên tục trên đoạn $[-a;a]$ với $a > 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f$ là hàm lẻ thì $\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 0$.",
    "Nếu $f$ là hàm chẵn thì $\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 0$.",
    "Nếu $\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 0$ thì $f$ là hàm lẻ.",
    "$\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 2\\int_0^a f(x)\\,dx$ với mọi $f$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f$ là hàm lẻ thì $\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 0$. Đổi biến $x = -t$ trên $[-a;0]$: $\\displaystyle\\int_{-a}^{0}f(x)\\,dx = -\\int_0^a f(t)\\,dt$.<br><b>Sai:</b> Nếu $f$ là hàm chẵn thì $\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 0$. Với hàm chẵn: $\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 2\\int_0^a f(x)\\,dx$; ví dụ $f = 1$ cho kết quả $2a$.<br><b>Sai:</b> Nếu $\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 0$ thì $f$ là hàm lẻ. $f(x) = x^2 - \\dfrac{a^2}{3}$ là hàm chẵn nhưng có tích phân trên $[-a;a]$ bằng $0$.<br><b>Sai:</b> $\\displaystyle\\int_{-a}^{a}f(x)\\,dx = 2\\int_0^a f(x)\\,dx$ với mọi $f$. Chỉ đúng với hàm chẵn; $f(x) = x$ cho vế trái bằng $0$, vế phải bằng $a^2$."
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $2, 3, 2$ đơn vị nguyên liệu I; $2, 1, 2$ đơn vị nguyên liệu II và $2, 3, 3$ đơn vị nguyên liệu III. Kho hiện có $230$, $170$ và $270$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$100$.",
    "$110$.",
    "$90$.",
    "$80$."
   ],
   "answer": 0,
   "explain": "Gọi $x, y, z$ là số sản phẩm mỗi loại; giải hệ ba phương trình được $(30;30;40)$<br>Kết quả: $100$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{(2n-1)(2n+1)}$ bằng<span class=\"q-hint\">Gợi ý: phân tích số hạng tổng quát thành hiệu để thu gọn tổng riêng.</span>",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$1$.",
    "$\\dfrac{1}{4}$.",
    "$\\dfrac{3}{4}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{(2n-1)(2n+1)} = \\dfrac12\\left(\\dfrac{1}{2n-1} - \\dfrac{1}{2n+1}\\right)$<br>Tổng riêng thu gọn; cho $N \\to +\\infty$: $S = \\dfrac{1}{2}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}8181818\\ldots$ (phần tuần hoàn là 18) bằng $\\dfrac{8}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{18}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$20$.",
    "$2$.",
    "$21$.",
    "$1818$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{18}{10\\cdot100^n} = \\dfrac{18}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{18}{990}$<br>$\\dfrac{8}{10} + \\dfrac{18}{990} = \\dfrac{9}{11} \\Rightarrow a + b = 20$",
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
   "explain": "$\\displaystyle\\sum_{n\\ge0}\\dfrac{x^{2n+1}}{2n+1} = \\dfrac12\\ln\\dfrac{1+x}{1-x}$ tại $x = \\dfrac12$, rồi nhân với 2<br>Vậy tổng của chuỗi bằng $\\ln 3$",
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
   "explain": "Tách biến: $e^{-y}\\,dy = 2x\\,dx \\Rightarrow -e^{-y} = x^2 + C$<br>$y(0) = 0 \\Rightarrow y = - \\ln\\left(1 - x^{2}\\right)$<br>$y\\left(\\dfrac12\\right) = - \\ln\\left(\\dfrac{3}{4}\\right)$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - 3y = x^{4}e^x$ $(x > 0)$ thỏa mãn $y(1) = e$. Giá trị của $y(2)$ bằng",
   "options": [
    "$8 e^{2}$.",
    "$e^{2}$.",
    "$2 e^{2}$.",
    "$16 e^{2}$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{4}$: $\\left(\\dfrac{y}{x^{3}}\\right)' = e^x \\Rightarrow y = x^{3}(e^x + C)$<br>$y(1) = e + C = e \\Rightarrow C = 0$<br>$y(2) = 8\\left(e^2\\right) = 8 e^{2}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bể có 2000 lít nước muối với nồng độ muối là 0,02 kg/lít. Người ta bơm nước muối với nồng độ 0,01 kg/lít vào bể với tốc độ 10 lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau 60 phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "34,8.",
    "29,6.",
    "20,0.",
    "14,8."
   ],
   "answer": 0,
   "explain": "Gọi $S(t)$ là lượng muối (kg): $S' = 0{,}01\\cdot10 - \\dfrac{S}{2000}\\cdot10 = 0{,}1 - \\dfrac{10S}{2000},\\quad S(0) = 40$<br>Nghiệm: $S(t) = 20 + Ce^{-10t/2000}$; $S(0) = 40 \\Rightarrow C = 20$<br>$S(60) = 20 + 20e^{-0{,}3} \\approx 34{,}8$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 9,\\ x \\le 0,\\ y \\ge 0\\}$. Giá trị của tích phân $\\displaystyle\\iint_D xy\\,dxdy$ bằng",
   "options": [
    "$- \\dfrac{81}{8}$.",
    "$- \\dfrac{9}{2}$.",
    "$- \\dfrac{81}{4}$.",
    "$\\dfrac{81}{8}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 3,\\ \\dfrac{\\pi}{2} \\le \\varphi \\le \\pi$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{3}\\left(\\dfrac{r^{2} \\sin{\\left(2 \\varphi \\right)}}{2}\\right)r\\,dr = \\int \\dfrac{81 \\sin{\\left(2 \\varphi \\right)}}{8}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = - \\dfrac{81}{8}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là hình cầu $x^2 + y^2 + z^2 \\le 25$. Giá trị của tích phân $\\displaystyle\\iiint_V \\sqrt{x^2 + y^2 + z^2}\\,dxdydz$ bằng",
   "options": [
    "$625 \\pi$.",
    "$\\dfrac{2500 \\pi}{3}$.",
    "$\\dfrac{625 \\pi}{2}$.",
    "$1250 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_0^{5}\\rho\\cdot\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot2\\cdot\\dfrac{625}{4} = 625 \\pi$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là cung tròn $x^2 + y^2 = 36$ nằm trong góc phần tư thứ nhất. Dùng tham số hóa $x = 6\\cos t,\\ y = 6\\sin t$, giá trị của tích phân $\\displaystyle\\int_L xy\\,ds$ bằng",
   "options": [
    "$108$.",
    "$18$.",
    "$216$.",
    "$54$."
   ],
   "answer": 0,
   "explain": "$ds = 6\\,dt$: $\\displaystyle\\int_0^{\\pi/2} 6^3\\sin t\\cos t\\,dt = \\dfrac{6^3}{2}$<br>Kết quả: $108$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 3 y)\\,dx + 2 x y\\,dy$ bằng",
   "options": [
    "$\\dfrac{124}{15}$.",
    "$\\dfrac{4}{15}$.",
    "$- \\dfrac{124}{15}$.",
    "$\\dfrac{248}{15}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 2 y + 3$<br>$I = \\displaystyle\\int_0^{2}dx\\int_{x^2}^{2 x}(2 y + 3)\\,dy = \\int_0^{2}\\left(- x^{4} + x^{2} + 6 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{5} + \\dfrac{x^{3}}{3} + 3 x^{2}\\right]_0^{2} = \\dfrac{124}{15}$",
   "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-26 & 8 \\\\ -84 & 26\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$8$.",
      "$0$.",
      "$-4$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (0)\\lambda + (-4) = 0$ có nghiệm $-2$ và $2$<br>Kết quả: $8$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{5}$ bằng",
     "options": [
      "$0$.",
      "$-1024$.",
      "$-64$.",
      "$1$."
     ],
     "answer": 0,
     "explain": "$A^{5} = PD^{5}P^{-1}$ có cùng vết với $D^{5}$: $(-2)^{5} + (2)^{5}$<br>Kết quả: $0$"
    },
    {
     "q": "Định thức của ma trận $A^2 - 3A$ bằng",
     "options": [
      "$-20$.",
      "$28$.",
      "$8$.",
      "$20$."
     ],
     "answer": 0,
     "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $10$ và $-2$; định thức bằng tích của chúng<br>Kết quả: $-20$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 6 x + y^{2} - 8 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 100\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 100$.",
   "questions": [
    {
     "q": "Giá trị nhỏ nhất của $f$ trên $D$ bằng",
     "options": [
      "$-25$.",
      "$0$.",
      "$25$.",
      "$-26$."
     ],
     "answer": 0,
     "explain": "Điểm dừng $(3;4)$ nằm trong $D$ và $f = (x - 3)^2 + (y - 4)^2 - 25$<br>Kết quả: $-25$"
    },
    {
     "q": "Giá trị lớn nhất của $f$ trên $D$ bằng",
     "options": [
      "$200$.",
      "$100$.",
      "$0$.",
      "$240$."
     ],
     "answer": 0,
     "explain": "Trên biên $f = 100 - 2(3 x + 4 y)$, lớn nhất khi $3 x + 4 y$ nhỏ nhất, tức bằng $-10\\cdot5$<br>Kết quả: $200$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-6$.",
      "$6$.",
      "$3$.",
      "$-8$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(3;4)$: $\\left(-6;-8\\right)$<br>Kết quả: $-6$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = |i - j| + 1$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(A^{-1}A^TA\\right)$.",
   "answer": [
    "-20"
   ],
   "explain": "$A = \\begin{pmatrix}1 & 2 & 3 & 4 \\\\ 2 & 1 & 2 & 3 \\\\ 3 & 2 & 1 & 2 \\\\ 4 & 3 & 2 & 1\\end{pmatrix}$, $\\det A = -20$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\dfrac{1}{\\det A}\\cdot\\det A\\cdot\\det A$ $= -20$<br>Đáp số: $-20$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, khử về dạng tam giác; $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y,z) = x + 2 y + 2 z$ trên mặt cầu $x^2 + y^2 + z^2 = 1$.",
   "answer": [
    "3"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(1;2;2)$; $f_{\\max} = 1\\sqrt{1^2 + 2^2 + 2^2} = 3$<br>Đáp số: $3$",
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
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = e^{2x}$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "15"
   ],
   "explain": "$k = 2$ là nghiệm đơn của phương trình đặc trưng nên $y^* = xe^{2x}$; $y = e^{2x} + xe^{2x}$; $y(1) \\approx 14{,}78$<br>Đáp số: $15$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt elipxoit $\\dfrac{x^2}{4} + \\dfrac{y^2}{4} + \\dfrac{z^2}{9} = 1$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "16"
   ],
   "explain": "Đổi biến $x = 2u,\\ y = 2v,\\ z = 3w$ (Jacobian $12$) đưa về hình cầu đơn vị: $V = 12\\cdot\\dfrac{4\\pi}{3} = 16\\pi$<br>Đáp số: $16$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
