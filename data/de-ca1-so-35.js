// ĐỀ SỐ 35 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-35",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 35",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lí tưởng và trách nhiệm xã hội",
  "prompt": "Tháng 8/2025, Bộ Chính trị ban hành Nghị quyết số 71-NQ/TW về đột phá phát triển giáo dục và đào tạo, đặt ra các mục tiêu cụ thể cho từng giai đoạn đến năm 2030, 2035 và tầm nhìn đến năm 2045. Trong khi Nhà nước coi giáo dục là quốc sách hàng đầu và dành nhiều nguồn lực cho người học, vẫn có không ít người trẻ xem việc học chỉ là để “có tấm bằng”, học đối phó, học vì kỳ vọng của người khác mà chưa tự trả lời được câu hỏi: mình học để làm gì, cho ai?",
  "source": "(Tổng hợp từ báo chí về Nghị quyết 71-NQ/TW, 2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về mục đích của việc học và trách nhiệm của người học đối với bản thân, gia đình và đất nước trong giai đoạn hiện nay.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-1;m;2)$ và $v = (m;-1;4)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
   "options": [
    "$54$.",
    "$40$.",
    "$71$.",
    "$22$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = (-1)m + m(-1) + (2)(4) = (-2)m + (2)(4) = 0$<br>$(-2)m = -(2)(4) \\Rightarrow m = \\dfrac{- (2)(4)}{-2} = 4$<br>$u + v = ((-1) + (4);\\ (4) + (-1);\\ (2) + (4)) = (3;3;6)$<br>$|u + v|^2 = (3)^2 + (3)^2 + (6)^2 = 9 + 9 + 36 = 54$",
   "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(0;0;-3),\\ u_2(9;3;-3),\\ u_3(2;2;1),\\ u_4(3;1;-1),\\ u_5(0;0;3)\\}$. Có bao nhiêu hệ con gồm đúng 3 véc tơ của $S$ là cơ sở của $\\mathbb{R}^3$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$4$.",
    "$10$.",
    "$5$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Số hệ con cần xét: $C_5^3=10$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\9 & 3 & -3\\\\2 & 2 & 1\\end{pmatrix}=-36$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\9 & 3 & -3\\\\3 & 1 & -1\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\9 & 3 & -3\\\\0 & 0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\2 & 2 & 1\\\\3 & 1 & -1\\end{pmatrix}=12$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\2 & 2 & 1\\\\0 & 0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\3 & 1 & -1\\\\0 & 0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}9 & 3 & -3\\\\2 & 2 & 1\\\\3 & 1 & -1\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}9 & 3 & -3\\\\2 & 2 & 1\\\\0 & 0 & 3\\end{pmatrix}=36$.<br>$\\det\\begin{pmatrix}9 & 3 & -3\\\\3 & 1 & -1\\\\0 & 0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}2 & 2 & 1\\\\3 & 1 & -1\\\\0 & 0 & 3\\end{pmatrix}=-12$.<br>Hệ là cơ sở khi định thức khác 0; có 4 định thức khác 0 nên có 4 cơ sở.",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-7 & -3 & 4 & 6 & 0 \\\\ 3 & 2 & -1 & -2 & 1 \\\\ -7 & -3 & 4 & 6 & 0 \\\\ -1 & 1 & 2 & 2 & 2\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$3$.",
    "$2$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Khử Gauss cho dạng bậc thang: $A \\to \\begin{pmatrix}-7 & -3 & 4 & 6 & 0 \\\\ 0 & -5 & -5 & -4 & -7 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$; có 2 hàng khác không nên hạng là 2.<br>Với $5$ ẩn và hạng 2, số ẩn tự do (số chiều hạt nhân) $= 5 - 2 = 3$.",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-2 & 2 \\\\ -3 & 3\\end{pmatrix}$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{3}$ bằng<span class=\"q-hint\">Gợi ý: dùng $A^k = A$ với mọi $k \\ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$.</span>",
   "options": [
    "$2$.",
    "$16$.",
    "$9$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$(I + A)^n = I + \\displaystyle\\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$<br>$(I + A)^{3} = I + 7A = \\begin{pmatrix}-13 & 14 \\\\ -21 & 22\\end{pmatrix}$<br>Tổng các phần tử: $2$",
   "note": "Khi $A^2 = A$ thì mọi lũy thừa của $A$ đều bằng $A$; và $C_n^1 + \\dots + C_n^n = 2^n - 1$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 3$. Giá trị của $\\det\\left(A\\cdot(3A)^{-1}\\right)$ bằng",
   "options": [
    "$\\dfrac{1}{27}$.",
    "$\\dfrac{1}{3}$.",
    "$- \\dfrac{1}{27}$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(A(3A)^{-1}\\right) = \\det A\\cdot\\dfrac{1}{3^3\\cdot\\det A}$<br>Thay $\\det A = 3$: kết quả $\\dfrac{1}{27}$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Xét hệ phương trình tuyến tính $AX = B$ với $A$ là ma trận vuông cấp $n \\ge 2$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $\\det A \\ne 0$ thì hệ có nghiệm duy nhất $X = A^{-1}B$.",
    "Nếu $\\det A = 0$ thì hệ vô nghiệm.",
    "Nếu $\\det A = 0$ thì hệ có vô số nghiệm.",
    "Nếu hệ có nghiệm thì $\\det A \\ne 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $\\det A \\ne 0$ thì hệ có nghiệm duy nhất $X = A^{-1}B$. $\\det A\\ne0$ cho $A^{-1}$ tồn tại. Nhân trái hai vế $AX=B$: $A^{-1}AX=A^{-1}B$, tức $IX=A^{-1}B$ nên $X=A^{-1}B$. Nếu $X_1,X_2$ đều nghiệm thì $A(X_1-X_2)=0$; nhân $A^{-1}$ suy ra $X_1-X_2=0$, nên nghiệm duy nhất.<br><b>Sai:</b> Nếu $\\det A = 0$ thì hệ vô nghiệm. Với $A = 0$, $B = 0$ thì $\\det A = 0$ mà mọi $X$ đều là nghiệm.<br><b>Sai:</b> Nếu $\\det A = 0$ thì hệ có vô số nghiệm. Hệ $x + y = 1$, $x + y = 2$ có $\\det A = 0$ nhưng vô nghiệm.<br><b>Sai:</b> Nếu hệ có nghiệm thì $\\det A \\ne 0$. Hệ $x + y = 1$, $2x + 2y = 2$ có nghiệm mà $\\det A = 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}2 & 1 & 1 & 1 \\\\ 1 & 2 & 1 & 1 \\\\ 1 & 1 & 2 & 1 \\\\ 1 & 1 & 1 & 2\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$5$.",
    "$1$.",
    "$15$.",
    "$-5$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1+h_2+h_3+h_4$: mỗi phần tử hàng 1 bằng $a+4b=5$. Rút $5$ khỏi hàng này để hàng đầu thành $(1,1,1,1)$, đồng thời nhân định thức với thừa số $5$.<br>Với hàng đầu $(1,1,1,1)$, thực hiện $h_i\\to h_i-(1)h_1$ với $i=2,3,4$: các phần tử ngoài đường chéo thành $b-b=0$, còn mỗi phần tử đường chéo dưới bằng $(a+b)-b=a$. Đường chéo là $1,1,1,1$.<br>$\\det A = (5)\\cdot(1)^3 = 5$",
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
   "explain": "Đặt $u=Ax$: $e^u-1=u+\\dfrac{u^2}{2}+o(u^2)$ và $\\sin u=u+o(u^2)$.<br>$(e^u-1)-\\sin u=(u+\\dfrac{u^2}{2}+o(u^2))-(u+o(u^2))=\\dfrac{u^2}{2}+o(u^2)=\\dfrac{A^2x^2}{2}+o(x^2)$.<br>Chia cả tử và mẫu cho $x^2$: $\\displaystyle \\lim=\\dfrac{\\frac{A^2}{2}+o(1)}{1}=\\dfrac{4}{2}=2$.",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{2 x - 8}{x^{2} + x - 2}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{2 \\left(x - 4\\right)}{\\left(x - 1\\right) \\left(x + 2\\right)}=\\dfrac{2 \\left(x - 4\\right)}{\\left(x - 1\\right) \\left(x + 2\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-2$.; Tại $x=1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=1$..<br>Chia đa thức: $\\dfrac{2 x - 8}{x^{2} + x - 2}=0+\\dfrac{2 x - 8}{x^{2} + x - 2}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Cho hàm số $f(x) = \\sin(2x^2 + 1)$. Giá trị của $f'(0)$ bằng",
   "options": [
    "$0$.",
    "$1$.",
    "$4 \\cos{\\left(1 \\right)}$.",
    "$\\cos{\\left(1 \\right)}$."
   ],
   "answer": 0,
   "explain": "$f'(x) = \\cos(2x^2 + 1)\\cdot 4x$<br>$f'(0) = \\cos(1)\\cdot0 = 0$"
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} + x y^{2}$. Đạo hàm của $f$ tại điểm $M(1;1)$ theo hướng của véc tơ $\\vec l = (4;3)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{18}{5}$.",
    "$18$.",
    "$\\dfrac{17}{5}$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x + y^{2},\\quad f'_y = 2 x y$<br>$\\nabla f(M) = (3;2)$<br>$|\\vec l| = \\sqrt{(4)^2 + (3)^2} = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l}=\\dfrac{(3)(4)+(2)(3)}{5}=\\dfrac{12+6}{5}=\\dfrac{18}{5}=\\dfrac{18}{5}$.",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Người ta tính lực hấp dẫn $F = G\\dfrac{m_1m_2}{d^2}$ giữa hai vật (các khối lượng đo chính xác, $G$ là hằng số) từ hai đại lượng đo được. Biết khoảng cách $d$ được đo với sai số tương đối không quá 3% và hằng số tỉ lệ dùng để hiệu chỉnh thiết bị (coi như một thừa số bậc nhất) với sai số tương đối không quá 0,5%. Dùng vi phân toàn phần của $\\ln F$, sai số tương đối lớn nhất của $F$ xấp xỉ bằng",
   "options": [
    "6,5%.",
    "3,5%.",
    "5,5%.",
    "3%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln F=C-2\\ln u+1\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dF}{F}=-2\\dfrac{du}{u}+1\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Delta F|}{|F|}\\le 2\\dfrac{|\\Delta u|}{u}+1\\dfrac{|\\Delta v|}{v}$.<br>$= 2\\cdot3\\% + 1\\cdot0{,}5\\% = 6{,}5\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị lớn nhất của hàm số $f(x,y) = 5 x + 12 y$ với điều kiện $x^2 + y^2 = 1$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$13$.",
    "$17$.",
    "$-13$.",
    "$14$."
   ],
   "answer": 0,
   "explain": "$L=5x+12y-\\lambda(x^2+y^2-1)$. Điều kiện dừng: $5-2\\lambda x=0,\\ 12-2\\lambda y=0$, nên $x=\\dfrac{5}{2\\lambda}$, $y=\\dfrac{12}{2\\lambda}$.<br>Ràng buộc cho $\\dfrac{169}{4\\lambda^2}=1$, tức $\\lambda^2=\\dfrac{169}{4r^2}=\\dfrac{h^2}{4r^2}$; hai dấu cho hai điểm đối nhau, dấu dương cho cực đại.<br>Với $\\lambda=\\dfrac{h}{2r}$: $(x,y)=(\\dfrac{5r}{h},\\dfrac{12r}{h})$.<br>Khi đó $f_{\\max}=\\dfrac{25r}{h}+\\dfrac{144r}{h}=\\dfrac{(25+144)r}{h}=rh=13$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{5^n}{n\\cdot 4^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+2}{2n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n}{2n+1}\\right)^n$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n^3+1}}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
   "options": [
    "$2$.",
    "$0$.",
    "$1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $u_n=5^n/(n4^n)=(5/4)^n/n\\not\\to0$; chuỗi phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 2: $(n+2)/(2n^2+1)\\sim1/(2n)$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $\\sqrt[n]{u_n}=\\sqrt[n]{(n/(2n+1))^n}=n/(2n+1)\\to1/2<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 4: $u_n=1/\\sqrt{n^3+1}\\sim1/n^{3/2}$; so sánh giới hạn với chuỗi $p$-series $p=3/2>1$ cho hội tụ. Kết luận: hội tụ.<br>Số chuỗi phân kỳ: $2$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Cho chuỗi lũy thừa $\\displaystyle\\sum_{n=0}^{+\\infty}a_nx^n$ có bán kính hội tụ $R$ với $0 < R < +\\infty$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Chuỗi hội tụ tuyệt đối tại mọi $x$ thỏa mãn $|x| < R$.",
    "Chuỗi luôn hội tụ tại $x = R$ và $x = -R$.",
    "Chuỗi luôn phân kỳ tại $x = R$ và $x = -R$.",
    "Chuỗi có thể hội tụ tại một điểm $x$ với $|x| > R$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Chuỗi hội tụ tuyệt đối tại mọi $x$ thỏa mãn $|x| < R$. Đây là nội dung của định lí Abel.<br><b>Sai:</b> Chuỗi luôn hội tụ tại $x = R$ và $x = -R$. Tại hai đầu mút phải xét riêng: $\\displaystyle \\sum x^n$ có $R = 1$ và phân kỳ tại $x = \\pm1$.<br><b>Sai:</b> Chuỗi luôn phân kỳ tại $x = R$ và $x = -R$. $\\displaystyle \\sum\\dfrac{x^n}{n^2}$ có $R = 1$ và hội tụ tại $x = \\pm1$.<br><b>Sai:</b> Chuỗi có thể hội tụ tại một điểm $x$ với $|x| > R$. Theo định nghĩa của bán kính hội tụ, chuỗi phân kỳ tại mọi $x$ có $|x| > R$."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
   "options": [
    "$y' + x^2y = \\sin x$.",
    "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$.",
    "$xy' + y = y^2\\ln x$.",
    "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' + x^2y = \\sin x$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$; Đã ở dạng $y'+x^2y=\\sin x$: $p(x)=x^2,\\ q(x)=\\sin x$.<br><b>Sai:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — $\\dfrac yx+\\tan(y/x)$ chỉ phụ thuộc tỉ số $y/x$.; đây là là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không phải dạng đang hỏi.<br><b>Sai:</b> $xy' + y = y^2\\ln x$ — Chia cho $x\\ne0$: $y'+\\dfracx y=\\dfrac{\\ln x}{x}y^2$, Bernoulli với $\\alpha=2$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — $P=(2xy + 1),\\ Q=x^2 + 3y^2$: $\\frac{\\partial P}{\\partial y}=2x$ và $\\frac{\\partial Q}{\\partial x}=2x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = 3xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{5}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{4}$.",
    "$\\dfrac{1}{10}$.",
    "$\\dfrac{1}{2}$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Đặt $z=1/y$, do đó $y^\\prime=-z^\\prime/z^2$.<br>Thay vào $y^\\prime+y/x=3xy^2$ rồi nhân với $-1$: $z^\\prime-z/x=-3x$.<br>Chia cho $x$: $(z/x)^\\prime=(xz^\\prime-z)/x^2=-3$. Tích phân hai vế: $z/x=-3x+C$, tức $z=x(C-3x)$.<br>$y(1)=1/z(1)=1/(C-3)=\\dfrac{1}{5}$ nên $C-3=1/\\dfrac{1}{5}=5$ và $C=8$.<br>$z(2)=2(C-23)=2(8-6)=4$; vậy $y(2)=1/z(2)=\\dfrac{1}{4}$.",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 900 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{900}\\right)$ với $k = \\dfrac{\\ln 2}{4}$ và $P(0) = 300$. Biết nghiệm có dạng $P(t) = \\dfrac{900}{1 + Ae^{-kt}}$. Số cá trong hồ sau 4 tháng bằng",
   "options": [
    "$450$.",
    "$600$.",
    "$300$.",
    "$451$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=2$.<br>$kt=\\dfrac{\\ln2}{4}(4)=1\\ln2$, vì thế $e^{-kt}=e^{-1\\ln2}=2^{-1}=\\dfrac1{2}$.<br>$P(4)=\\dfrac{900}{1+\\frac{2}{2}}=\\dfrac{900\\cdot2}{2+2}=\\dfrac{1800}{4}=450$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 32\\cos 2x$ với điều kiện $y(0) = -1;\\ y'(0) = 6$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
   "options": [
    "$3 + 2 \\pi$.",
    "$3$.",
    "$2 \\pi$.",
    "$3 - 2 \\pi$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=6$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=3+2 \\pi=3 + 2 \\pi$.",
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
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{3},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$\\dfrac{\\pi}{3}$.",
    "$\\dfrac{2 \\pi^{2}}{9}$.",
    "$\\dfrac{4 \\pi}{3}$.",
    "$\\dfrac{\\pi}{6}$."
   ],
   "answer": 0,
   "explain": "$V=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^2\\,d\\rho$. Các tích phân lần lượt bằng $2\\pi$, $[-\\cos\\theta]_0^{\\dfrac{\\pi}{3}}=1-\\cos\\dfrac{\\pi}{3}$ và $[\\rh\\frac{o^3}{3}]_0^{1}=1/3$.<br>$V=2\\pi(1-\\cos\\dfrac{\\pi}{3})\\dfrac{1}{3}=\\dfrac{\\pi}{3}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 2100 nghìn khách, tổng số không đổi. Mỗi tháng có 20% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 1050 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$700$.",
    "$1400$.",
    "$1050$.",
    "$945$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(2100-x)$.<br>Nhân với $100$: $20x=10(2100-x)=21000-10x$, nên $(30)x=21000$ và $x=\\dfrac{21000}{30}=700$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;1;3;1),\\ u_2(-1;1;0;-1),\\ u_3(1;5;9;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne 1$.",
    "$m = 1$.",
    "với mọi giá trị của $m$.",
    "$m \\ne -1$."
   ],
   "answer": 0,
   "explain": "$R_3 \\leftarrow R_3 - 3R_1 - 2R_2$.<br>$A = \\begin{pmatrix}1 & 1 & 3 & 1 \\\\ -1 & 1 & 0 & -1 \\\\ 1 & 5 & 9 & m\\end{pmatrix} \\xrightarrow{R_3 \\leftarrow R_3 - 3R_1 - 2R_2} \\begin{pmatrix}1 & 1 & 3 & 1 \\\\ -1 & 1 & 0 & -1 \\\\ 0 & 0 & 0 & m - 1\\end{pmatrix}$.<br>$\\det \\begin{pmatrix}1 & 1 \\\\ -1 & 1\\end{pmatrix} = 2 \\ne 0$, nên hai hàng đầu độc lập tuyến tính.<br>$m = 1 \\Rightarrow R_3 = (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=2$.<br>$m \\ne 1 \\Rightarrow R_3 = (0,0,0,m - 1) \\ne (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=3$.<br><b>Kết quả:</b> $m = 1$.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}-1 & 1 \\\\ 0 & -1\\end{pmatrix}$ và $B = \\begin{pmatrix}1 & 0 \\\\ -2 & -1\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X = B$ là",
   "options": [
    "$\\begin{pmatrix}1 & 1 \\\\ 2 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}-1 & -1 \\\\ 2 & 3\\end{pmatrix}$.",
    "$\\begin{pmatrix}-1 & 3 \\\\ 0 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}1 & 2 \\\\ 1 & 1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$AX=B \\Rightarrow X=A^{-1}B$.<br>$A^{-1}=\\begin{pmatrix}-1 & -1 \\\\ 0 & -1\\end{pmatrix},\\qquad A^{-1}B=\\begin{pmatrix}1 & 1 \\\\ 2 & 1\\end{pmatrix}$.<br>Kiểm tra: $A\\begin{pmatrix}1 & 1 \\\\ 2 & 1\\end{pmatrix}=\\begin{pmatrix}1 & 0 \\\\ -2 & -1\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b + 1)x + 16y = a^2 - 8\\\\ x + ay = 2\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
   "options": [
    "$(a;b) = (4;3)$.",
    "$(a;b) = (-4;3)$.",
    "$(a;b) = (4;-3)$.",
    "$(a;b) = (-4;-3)$."
   ],
   "answer": 0,
   "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+1=\\lambda$, $16=\\lambda a$, $a^2 - 8=\\lambda2$.<br>Với $(a,b)=(4,3)$: $b+1=4=4$; $16=4\\cdot4=16$; $a^2 - 8=8=4\\cdot2=8$.<br>Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=4$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
   "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\sin 6x - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + b - 6L$ bằng",
   "options": [
    "$222$.",
    "$-30$.",
    "$6$.",
    "$258$."
   ],
   "answer": 0,
   "explain": "$\\sin u = u - \\dfrac{u^3}{6} + o(u^3)$, với $u=6x$, ta có $u^2=36x^2$ và $u^3=216x^3$.<br>Tử số sau khai triển là $(6-a)x+(0-b)x^2+(-36)x^3+o(x^3)$. Chia cho $x^3$: $\\dfrac{6-a}{x^2}+\\dfrac{0-b}{x}+-36+o(1)$.<br>Để giới hạn hữu hạn, các hệ số phân kỳ triệt tiêu: $a=6$ và $b=0$; hệ số còn lại cho $L=-36$.<br>6+0-6(-36)=6+0+216=222",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{6x} & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$13$.",
    "$18$.",
    "$7$.",
    "$43$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=e^{6 x}$ có $g(0)=1$, $g^\\prime(0)=6$, $g^{\\prime\\prime}(0)=36$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=6,\\ 2a=36$, do đó $a=18$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $a - b + d=13$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 16}$ bằng",
   "options": [
    "$\\dfrac{\\pi}{8}$.",
    "$\\dfrac{\\pi}{4}$.",
    "$\\dfrac{\\pi}{2}$.",
    "$\\dfrac{\\pi}{32}$."
   ],
   "answer": 0,
   "explain": "Đặt $x=4t$, $dx=4dt$, $x^2+16=16(1+t^2)$: $\\int_0^\\infty\\dfrac{dx}{x^2+16}=\\dfrac1{4}\\int_0^\\infty\\dfrac{dt}{1+t^2}$.<br>$=\\dfrac1{4}[\\arctan t]_0^\\infty=\\dfrac1{4}(\\dfrac\\pi2-0)=\\dfrac{\\pi}{8}$.",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 80 + 0{,}75(Y - T)$; $T = 0{,}2Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 120$ và chi tiêu chính phủ $G_0 = 160$. Giá trị của mức tiêu dùng $C^*$ tại trạng thái cân bằng bằng",
   "options": [
    "$620$.",
    "$900$.",
    "$180$.",
    "$360$."
   ],
   "answer": 0,
   "explain": "$T=tY\\Rightarrow C=c_0+b(Y-tY)=80+\\dfrac{3}{4}(1-\\dfrac{1}{5})Y$.<br>$Y=C+I_0+G_0\\Rightarrow [1-\\dfrac{3}{4}(1-\\dfrac{1}{5})]Y=80+120+160$.<br>$Y=\\dfrac{360}{1-\\dfrac{3}{4}(1-\\dfrac{1}{5})}=900$.<br>$T=tY=\\dfrac{1}{5}\\cdot900=180,\\qquad C=c_0+b(Y-T)=80+\\dfrac{3}{4}(900-180)=620$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2n+1}{n^2(n+1)^2}$ bằng<span class=\"q-hint\">Gợi ý: phân tích số hạng tổng quát thành hiệu để thu gọn tổng riêng.</span>",
   "options": [
    "$1$.",
    "$2$.",
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{3}{4}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{2n+1}{n^2(n+1)^2} = \\dfrac{1}{n^2} - \\dfrac{1}{(n+1)^2}$<br>Tổng riêng thu gọn; cho $N \\to +\\infty$: $S = 1$",
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
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\cdot5^n}$ bằng",
   "options": [
    "$\\ln\\left(\\dfrac{5}{4}\\right)$.",
    "$\\ln 5$.",
    "$- \\ln\\left(\\dfrac{5}{4}\\right)$.",
    "$\\dfrac{1}{4}$."
   ],
   "answer": 0,
   "explain": "$x=\\frac15$: $\\sum_{n\\ge1}\\frac{(1/5)^n}{n}=-\\ln(1-\\frac15)=-\\ln\\frac45=\\ln\\frac54$.<br>Vậy tổng của chuỗi bằng $\\ln\\left(\\dfrac{5}{4}\\right)$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $x^2y' = y^2$ thỏa mãn $y(1) = \\dfrac{1}{2}$. Giá trị của $y\\left(3\\right)$ bằng",
   "options": [
    "$\\dfrac{3}{4}$.",
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{7}{4}$.",
    "$\\dfrac{3}{8}$."
   ],
   "answer": 0,
   "explain": "Tách biến rồi tích phân hai vế: $\\dfrac{dy}{y^2} = \\dfrac{dx}{x^2} \\Rightarrow -\\dfracy = -\\dfracx + C$<br>$x=1,y=1/2$: $-1/y=-1/x+C$ gives $-2=-1+C$, so $C=-1$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=\\dfrac{x}{x + 1}$.<br>Thay $x=3$ vào nghiệm: $y(3)=\\dfrac{3}{4}=\\dfrac{3}{4}$.",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + 3y = 2e^{-3x}$ thỏa mãn $y(0) = 1$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{3}{e^{3}}$.",
    "$e^{-3}$.",
    "$\\dfrac{2}{e^{3}}$.",
    "$3 e^{3}$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{3x}$: $\\left(ye^{3x}\\right)' = 2$<br>$ye^{3x} = 2x + C \\Rightarrow y = (2x + C)e^{-3x}$<br>$y(0) = C = 1 \\Rightarrow y(1) = (2 + 1)e^{-3} = \\dfrac{3}{e^{3}}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một bể có 500 lít nước muối với nồng độ muối là 0,05 kg/lít. Người ta bơm nước muối với nồng độ 0,01 kg/lít vào bể với tốc độ 20 lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau 30 phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "11,0.",
    "7,5.",
    "5,0.",
    "6,0."
   ],
   "answer": 0,
   "explain": "Gọi $S(t)$ là lượng muối (kg): $S' = 0{,}01\\cdot20 - \\dfrac{S}{500}\\cdot20 = 0{,}2 - \\dfrac{20S}{500},\\quad S(0) = 25$<br>Nghiệm: $S(t) = 5 + Ce^{-20t/500}$; $S(0) = 25 \\Rightarrow C = 20$<br>$S(30) = 5 + 20e^{-1{,}2} \\approx 11{,}0$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 4,\\ 0 \\le y \\le x\\}$. Giá trị của tích phân $\\displaystyle\\iint_D x^2\\,dxdy$ bằng",
   "options": [
    "$1 + \\dfrac{\\pi}{2}$.",
    "$\\dfrac{2}{3} + \\dfrac{\\pi}{3}$.",
    "$2 + \\pi$.",
    "$\\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 2,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{4}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{2}\\left(r^{2} \\cos^{2}\\varphi\\right)r\\,dr = \\displaystyle \\int 4 \\cos^{2}\\varphi\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = 1 + \\dfrac{\\pi}{2}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là hình cầu $x^2 + y^2 + z^2 \\le 16$. Giá trị của tích phân $\\displaystyle\\iiint_V \\sqrt{x^2 + y^2 + z^2}\\,dxdydz$ bằng",
   "options": [
    "$256 \\pi$.",
    "$\\dfrac{1024 \\pi}{3}$.",
    "$128 \\pi$.",
    "$512 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu cho $\\sqrt{x^2+y^2+z^2}=\\rho$ và $dV=\\rho^2\\sin\\theta\\,d\\rho d\\theta d\\varphi$, nên $I=\\int_0^{2\\pi}d\\varphi\\int_0^\\pi\\sin\\theta\\,d\\theta\\int_0^{4}\\rho^3\\,d\\rho$.<br>$\\int_0^{2\\pi}d\\varphi=2\\pi$, $[-\\cos\\theta]_0^\\pi=2$, và $[\\rh\\frac{o^4}{4}]_0^{4}=256/4$. Nhân lại: $I=2\\pi\\cdot2\\cdot\\dfrac{256}{4}=256 \\pi$.",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là cung tròn $x^2 + y^2 = 64$ nằm trong góc phần tư thứ nhất. Dùng tham số hóa $x = 8\\cos t,\\ y = 8\\sin t$, giá trị của tích phân $\\displaystyle\\int_L xy\\,ds$ bằng",
   "options": [
    "$256$.",
    "$32$.",
    "$512$.",
    "$128$."
   ],
   "answer": 0,
   "explain": "$x=a\\cos t,\\ y=a\\sin t$, $0\\le t\\le\\pi/2$; $ds=\\sqrt{(-a\\sin t)^2+(a\\cos t)^2}\\,dt=8\\,dt$ and $xy=64\\sin t\\cos t$.<br>$\\displaystyle I=512\\int_0^{\\pi/2}\\sin t\\cos t\\,dt=512\\left[\\frac{\\sin^2t}{2}\\right]_0^{\\pi/2}=\\frac{512}{2}=256$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y)\\,dx + 2 x y\\,dy$ bằng",
   "options": [
    "$\\dfrac{3}{10}$.",
    "$- \\dfrac{1}{30}$.",
    "$- \\dfrac{3}{10}$.",
    "$\\dfrac{3}{5}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 2 y + 1$<br>$I = \\displaystyle\\int_0^{1}dx\\int_{x^2}^{x}(2 y + 1)\\,dy = \\int_0^{1}\\left(- x^{4} + x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{5} + \\dfrac{x^{2}}{2}\\right]_0^{1} = \\dfrac{3}{10}$",
   "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 1$. Kí hiệu $f(A) = A^2 - 3A - I$.",
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
      "$-8$.",
      "$-6$.",
      "$-9$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-6 & 4 \\\\ -12 & 6\\end{pmatrix}$<br>Tổng các phần tử: $-8$"
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
   "stem": "Cho hàm số $f(x,y) = x^{2} + 6 x + y^{2} - 8 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 225\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 225$.",
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
     "explain": "Điểm dừng $(-3;4)$ nằm trong $D$ và $f = (x + 3)^2 + (y - 4)^2 - 25$<br>Kết quả: $-25$"
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
     "explain": "Trên biên $f = 225 - 2(- 3 x + 4 y)$, lớn nhất khi $- 3 x + 4 y$ nhỏ nhất, tức bằng $-15\\cdot5$<br>Kết quả: $375$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$9$.",
      "$-9$.",
      "$-3$.",
      "$-12$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(-3;4)$: $\\left(9;-12\\right)$<br>Kết quả: $9$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-1 & 0 & 4 \\\\ -1 & 4 & -1 \\\\ 4 & 3 & -1\\end{pmatrix}$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\\det\\left(A + A^T\\right)$.",
   "answer": [
    "-502"
   ],
   "explain": "$S=A+A^T=\\begin{pmatrix}-2 & -1 & 8 \\\\ -1 & 8 & 2 \\\\ 8 & 2 & -2\\end{pmatrix}$; khai triển định thức cấp 3 của ma trận này cho $\\det S=-502=-502$<br>Đáp số: $-502$",
   "note": "$A + A^T$ đối xứng; $A - A^T$ phản đối xứng, và ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0."
  },
  {
   "q": "Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $2 x + y + 2 z = 27$.",
   "answer": [
    "81"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(2;1;2)$ với $t = \\dfrac{27}{9}$; $f_{\\min} = \\dfrac{27^2}{9} = 81$<br>Đáp số: $81$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{x^{n}}{n^2\\cdot3^n}$?<span class=\"q-hint\">Chú ý: xét riêng hai đầu mút của khoảng hội tụ.</span>",
   "answer": [
    "7"
   ],
   "explain": "Bán kính hội tụ $R = 3$; tại hai đầu mút chuỗi hội tụ tuyệt đối (so sánh với $\\displaystyle \\sum\\dfrac{1}{n^2}$). Miền hội tụ: $[-3;3]$<br>Đáp số: $7$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = -2e^{x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "30"
   ],
   "explain": "$k = 1$ là nghiệm đơn của phương trình đặc trưng nên $y^* = 2xe^{x}$; $y = 2xe^{x}$; $y(2) \\approx 29{,}56$<br>Đáp số: $30$",
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
