// ĐỀ SỐ 25 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-25",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 25",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản lĩnh và phẩm chất chính trị",
  "prompt": "Trong một nhóm trò chuyện của lớp, một bạn đăng ảnh chụp màn hình kèm lời khẳng định “đề thi đã bị lộ, ai cần thì nhắn riêng”. Nhiều người lập tức xin tài liệu, một số người chia sẻ tiếp sang nhóm khác. Riêng Hà lặng lẽ báo cho giáo viên phụ trách, và bị vài bạn gọi là “kẻ mách lẻo, không biết nghĩ cho tập thể”.",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về lựa chọn của Hà và về bản lĩnh giữ sự trung thực khi số đông làm khác.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;3;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
   "options": [
    "$7$.",
    "$4$.",
    "$9$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "$\\langle u,v\\rangle=(m)(m)+(3)(m)+(1)(0)=m^{2} + 3 m=m \\left(m + 3\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -3 \\text{ hoặc } m > 0$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, 1, 2, 3, 4, 5\\}$; có $7$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ $S = \\{u_1(-1;1;3),\\ u_2(-1;2;1),\\ u_3(-2;-2;m)\\}$ với $m$ là tham số. Hệ $S$ là một cơ sở của $\\mathbb{R}^3$ khi và chỉ khi",
   "options": [
    "$m \\ne 14$.",
    "$m = 14$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 16$."
   ],
   "answer": 0,
   "explain": "Ba véc tơ trong $\\mathbb{R}^3$ là cơ sở khi và chỉ khi định thức của ma trận có ba hàng là các véc tơ khác 0.<br>Khai triển định thức: $\\det(u_1,u_2,u_3)=14 - m=14 - m$<br>Giải $14 - m=0$: $m=14$; do đó định thức khác 0 khi và chỉ khi $m\\ne14$",
   "note": "Số véc tơ đã bằng số chiều nên chỉ cần định thức khác 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}-2 & -1 \\\\ 3 & -1 \\\\ 1 & 1\\end{pmatrix}$ và $B = \\begin{pmatrix}3 & -2 & 2 \\\\ 3 & 1 & -1\\end{pmatrix}$. Biết hạng của một tích không vượt quá hạng của mỗi thừa số, hạng của ma trận $AB$ (cấp $3\\times3$) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\operatorname{rank}A = 2,\\ \\operatorname{rank}B = 2$ nên $\\operatorname{rank}(AB) \\le 2$<br>$AB = \\begin{pmatrix}-9 & 3 & -3 \\\\ 6 & -7 & 7 \\\\ 6 & -1 & 1\\end{pmatrix}$, dạng bậc thang: $\\begin{pmatrix}-9 & 3 & -3 \\\\ 0 & 45 & -45 \\\\ 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}(AB) = 2$",
   "note": "$\\operatorname{rank}(AB) \\le \\min\\{\\operatorname{rank}A, \\operatorname{rank}B\\}$, nên tích của ma trận $3\\times2$ với $2\\times3$ không thể có hạng 3."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 3 \\\\ 1 & -1\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x + y$ bằng",
   "options": [
    "$8$.",
    "$-4$.",
    "$-12$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}12 & 6 \\\\ 2 & 4\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = 2$<br>So sánh phần tử hàng 1, cột 1: $12 = 2\\cdot(3) + y \\Rightarrow y = 6$<br>$x + y = 8$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = -2$. Giá trị của $\\det\\left((-A)^3\\right)$ bằng",
   "options": [
    "$8$.",
    "$-8$.",
    "$-2$.",
    "$- \\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left((-A)^3\\right) = \\left((-1)^3\\det A\\right)^3$<br>Thay $\\det A = -2$: kết quả $8$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
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
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}1 & 2 & 2 & 2 \\\\ 2 & 1 & 2 & 2 \\\\ 2 & 2 & 1 & 2 \\\\ 2 & 2 & 2 & 1\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$-7$.",
    "$1$.",
    "$-15$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1+h_2+h_3+h_4$: mỗi phần tử hàng 1 bằng $a+4b=7$. Rút $7$ khỏi hàng này để hàng đầu thành $(1,1,1,1)$, đồng thời nhân định thức với thừa số $7$.<br>Với hàng đầu $(1,1,1,1)$, thực hiện $h_i\\to h_i-(2)h_1$ với $i=2,3,4$: các phần tử ngoài đường chéo thành $b-b=0$, còn mỗi phần tử đường chéo dưới bằng $(a+b)-b=a$. Đường chéo là $1,-1,-1,-1$.<br>$\\det A = (7)\\cdot(-1)^3 = -7$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{(1 + x)^{\\frac1x} - e}{x}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$- \\dfrac{e}{2}$.",
    "$\\dfrac{e}{2}$.",
    "$- \\dfrac{1}{2}$.",
    "$- e$."
   ],
   "answer": 0,
   "explain": "$(1 + x)^{\\frac1x} = e^{\\frac{\\ln(1 + x)}{x}}$ và $\\dfrac{\\ln(1 + x)}{x} = 1 - \\dfrac{1x}{2} + o(x)$<br>$(1 + x)^{\\frac1x} = e^{1}\\cdot e^{-\\frac{1x}{2} + o(x)} = e^{1}\\left(1 - \\dfrac{1x}{2} + o(x)\\right)$<br>$\\lim = -\\dfrac{1}{2}e^{1} = - \\dfrac{e}{2}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} + 3 x - 4}{x^{2} + x - 2}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 1\\right) \\left(x + 4\\right)}{\\left(x - 1\\right) \\left(x + 2\\right)}=\\dfrac{x + 4}{x + 2}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=1$, tử cũng bằng $0$ nên nhân tử $(x-1)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=-2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-2$..<br>Chia đa thức: $\\dfrac{x + 4}{x + 2}=1+\\dfrac{2}{x + 2}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 2.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{x}\\ln(1 + 2x)$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$\\dfrac{5}{3}$.",
    "$0$.",
    "$10$.",
    "$- \\dfrac{5}{3}$."
   ],
   "answer": 0,
   "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\ln\\left(2 x + 1\\right) = 2x - 2x^{2} + \\dfrac{8}{3}x^{3} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=2x + \\dfrac{5}{3}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $\\dfrac{5}{3}$.",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} y + y^{3}$. Đạo hàm của $f$ tại điểm $M(2;2)$ theo hướng của véc tơ $\\vec l = (12;5)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{176}{13}$.",
    "$176$.",
    "$\\dfrac{232}{13}$.",
    "$24$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x y,\\quad f'_y = x^{2} + 3 y^{2}$<br>$\\nabla f(M) = (8;16)$<br>$|\\vec l| = \\sqrt{(12)^2 + (5)^2} = 13$<br>$\\dfrac{\\partial f}{\\partial \\vec l}=\\dfrac{(8)(12)+(16)(5)}{13}=\\dfrac{96+80}{13}=\\dfrac{176}{13}=\\dfrac{176}{13}$.",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Cho hàm số $f(x,y)$ khả vi tại điểm $M_0$ với $\\nabla f(M_0) \\ne \\vec 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Đạo hàm theo hướng của $f$ tại $M_0$ đạt giá trị lớn nhất theo hướng của $\\nabla f(M_0)$, và giá trị lớn nhất đó bằng $|\\nabla f(M_0)|$.",
    "Đạo hàm theo hướng của $f$ tại $M_0$ có giá trị như nhau theo mọi hướng.",
    "Theo hướng vuông góc với $\\nabla f(M_0)$, hàm số tăng nhanh nhất.",
    "Đạo hàm của $f$ tại $M_0$ theo hướng của véc tơ $\\vec l$ bằng $\\nabla f(M_0)\\cdot\\vec l$ với mọi $\\vec l \\ne \\vec 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Đạo hàm theo hướng của $f$ tại $M_0$ đạt giá trị lớn nhất theo hướng của $\\nabla f(M_0)$, và giá trị lớn nhất đó bằng $|\\nabla f(M_0)|$. $\\dfrac{\\partial f}{\\partial\\vec l} = |\\nabla f|\\cos\\theta$ với $\\theta$ là góc giữa $\\vec l$ và $\\nabla f$; lớn nhất khi $\\theta = 0$.<br><b>Sai:</b> Đạo hàm theo hướng của $f$ tại $M_0$ có giá trị như nhau theo mọi hướng. Giá trị bằng $|\\nabla f|\\cos\\theta$, phụ thuộc vào hướng.<br><b>Sai:</b> Theo hướng vuông góc với $\\nabla f(M_0)$, hàm số tăng nhanh nhất. Theo hướng đó $\\cos\\theta = 0$ nên đạo hàm theo hướng bằng $0$.<br><b>Sai:</b> Đạo hàm của $f$ tại $M_0$ theo hướng của véc tơ $\\vec l$ bằng $\\nabla f(M_0)\\cdot\\vec l$ với mọi $\\vec l \\ne \\vec 0$. Phải dùng véc tơ đơn vị: $\\dfrac{\\partial f}{\\partial\\vec l} = \\nabla f(M_0)\\cdot\\dfrac{\\vec l}{|\\vec l|}$."
  },
  {
   "q": "Một mảnh vườn hình chữ nhật có hai kích thước $x > 0,\\ y > 0$ (mét) thỏa mãn ràng buộc về vật liệu rào $2 x + y = 12$. Diện tích $S = xy$ lớn nhất của mảnh vườn bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$18$.",
    "$36$.",
    "$72$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$L=xy-\\lambda(2x+1y-12)$. $L_x=y-2\\lambda=0$ và $L_y=x-1\\lambda=0$, vì thế $y=2\\lambda$, $x=1\\lambda$.<br>Thay vào ràng buộc: $2\\lambda+2\\lambda=2(2)(1)\\lambda=12$, nên $\\lambda=\\dfrac{12}{2(2)(1)}$.<br>$x=\\dfrac{12}{22}$, $y=\\dfrac{12}{21}$. Vậy $S_{\\max}=xy=\\dfrac{12}{22}\\cdot\\dfrac{12}{21}=\\dfrac{144}{421}=18$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n + 1}{2n + 2}\\right)^{n}$. Đặt $C = \\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}$, khi đó:",
   "options": [
    "$C = \\dfrac{1}{2}$ và chuỗi hội tụ.",
    "$C = \\dfrac{1}{2}$ và chuỗi phân kỳ.",
    "$C = \\dfrac{1}{4}$ và chuỗi hội tụ.",
    "$C = 1$ và chuỗi hội tụ."
   ],
   "answer": 0,
   "explain": "$u_n=\\left(\\dfrac{n+1}{2n+2}\\right)^n$; do đó $\\sqrt[n]{u_n}=\\dfrac{n+1}{2n+2}\\to\\dfrac{1}{2}$<br>$C < 1$ nên theo tiêu chuẩn Cauchy chuỗi hội tụ",
   "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt[3]{n}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{2^n}$ và $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{(-1)^n\\ln n}{n}$. Có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$4$.",
    "$1$.",
    "$3$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $a_n=1/n\\downarrow0$ nên Leibniz cho hội tụ; $\\sum|u_n|=\\sum1/n$ phân kỳ, do đó bán hội tụ. Kết luận: bán hội tụ.<br>Chuỗi thứ 2: $a_n=n^{-1/3}\\downarrow0$ nên Leibniz hội tụ; chuỗi trị tuyệt đối là $p$-series $p=1/3\\le1$, phân kỳ: bán hội tụ. Kết luận: bán hội tụ.<br>Chuỗi thứ 3: $\\dfrac{|u_{n+1}|}{|u_n|}=\\dfrac{n+1}{2^{n+1}}\\dfrac{2^n}{n}=\\dfrac{n+1}{2n}\\to1/2<1$, nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 4: $a_n=\\ln n/n\\downarrow0$ khi $n\\ge3$, nên Leibniz hội tụ; $\\ln n\\ge1$ khi $n\\ge3$ cho $a_n\\ge1/n$, nên không hội tụ tuyệt đối. Kết luận: bán hội tụ.<br>Số chuỗi hội tụ: $4$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
   "options": [
    "$y' + y\\tan x = \\cos x$.",
    "$y' - y = xy^2$.",
    "$(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$.",
    "$y' = \\dfrac{1 + y^2}{1 + x^2}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' + y\\tan x = \\cos x$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$; Đã ở dạng $y'+(\\tan x)y=\\cos x$, bậc nhất tuyến tính theo $y,y'$.<br><b>Sai:</b> $y' - y = xy^2$ — $y'-y=xy^2$: dạng Bernoulli với $\\alpha=2$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — $P=(y\\cos x + 2x),\\ Q=\\sin x - 2y$: $\\partial P/\\partial y=\\cos x$ và $\\partial Q/\\partial x=\\cos x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi.<br><b>Sai:</b> $y' = \\dfrac{1 + y^2}{1 + x^2}$ — $\\dfrac{dy}{1+y^2}=\\dfrac{dx}{1+x^2}$, tách được biến.; đây là là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không phải dạng đang hỏi."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = 3xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{6}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{6}$.",
    "$\\dfrac{1}{12}$.",
    "$\\dfrac{1}{3}$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Đặt $z=1/y$, do đó $y^\\prime=-z^\\prime/z^2$. Thay vào $y^\\prime+y/x=3xy^2$ rồi nhân với $-1$: $z^\\prime-z/x=-3x$.<br>Chia cho $x$: $(z/x)^\\prime=(xz^\\prime-z)/x^2=-3$. Tích phân hai vế: $z/x=-3x+C$, tức $z=x(C-3x)$.<br>$y(1)=1/z(1)=1/(C-3)=\\dfrac{1}{6}$ nên $C-3=1/\\dfrac{1}{6}=6$ và $C=9$.<br>$z(2)=2(C-23)=2(9-6)=6$; vậy $y(2)=1/z(2)=\\dfrac{1}{6}$.",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 900 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{900}\\right)$ với $k = \\dfrac{\\ln 2}{3}$ và $P(0) = 100$. Biết nghiệm có dạng $P(t) = \\dfrac{900}{1 + Ae^{-kt}}$. Số cá trong hồ sau 9 tháng bằng",
   "options": [
    "$450$.",
    "$800$.",
    "$300$.",
    "$451$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=8$.<br>$kt=\\dfrac{\\ln2}{3}(9)=3\\ln2$, vì thế $e^{-kt}=e^{-3\\ln2}=2^{-3}=\\dfrac1{8}$.<br>$P(9)=\\dfrac{900}{1+\\frac{8}{8}}=\\dfrac{900\\cdot8}{8+8}=\\dfrac{7200}{16}=450$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $y'' - 4y = e^{2x} + 1$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?",
   "options": [
    "$y^* = Axe^{2x} + B$.",
    "$y^* = Ae^{2x} + B$.",
    "$y^* = Axe^{2x} + Bx$.",
    "$y^* = Ax^2e^{2x} + B$."
   ],
   "answer": 0,
   "explain": "$k^2-4=(k-2)(k+2)=0$. Hạng $e^{2x}$ cộng hưởng với nghiệm đơn $2$, nên dùng $Axe^{2x}$; hạng hằng $1$ ứng với $k=0$ không là nghiệm, nên dùng $B$.<br>Dạng cần tìm: $y^* = Axe^{2x} + B$",
   "note": "Bội của số mũ (hoặc của $\\alpha \\pm i\\beta$) trong phương trình đặc trưng quyết định nhân thêm $1$, $x$ hay $x^2$."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ x \\ge 0,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>$x\\ge0,\\ y\\ge0\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{2}^{4}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 4$ và phía trên mặt nón $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 2,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{3},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$\\dfrac{8 \\pi}{3}$.",
    "$\\dfrac{16 \\pi^{2}}{9}$.",
    "$\\dfrac{32 \\pi}{3}$.",
    "$\\dfrac{4 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "$V=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\sin\\theta\\,d\\theta\\int_0^{2}\\rho^2\\,d\\rho$. Các tích phân lần lượt bằng $2\\pi$, $[-\\cos\\theta]_0^{\\dfrac{\\pi}{3}}=1-\\cos\\dfrac{\\pi}{3}$ và $[\\rho^3/3]_0^{2}=8/3$.<br>$V=2\\pi(1-\\cos\\dfrac{\\pi}{3})\\dfrac{8}{3}=\\dfrac{8 \\pi}{3}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 600 nghìn người dùng, tổng số không đổi. Mỗi tháng có 30% người dùng của X chuyển sang Y và 20% người dùng của Y chuyển sang X. Hiện tại X có 200 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$240$.",
    "$360$.",
    "$300$.",
    "$220$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 20% của $600-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{20}{100}(600-x)$.<br>Nhân với $100$: $30x=20(600-x)=12000-20x$, nên $(50)x=12000$ và $x=\\dfrac{12000}{50}=240$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 0 & -1 & 2 \\\\ 1 & -2 & 2 & 3 \\\\ 2 & -2 & 1 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 5$.",
    "$m = 6$.",
    "$m = -5$.",
    "$m = 4$."
   ],
   "answer": 0,
   "explain": "$R_3 \\leftarrow R_3 - R_1 - R_2$.<br>$A = \\begin{pmatrix}1 & 0 & -1 & 2 \\\\ 1 & -2 & 2 & 3 \\\\ 2 & -2 & 1 & m\\end{pmatrix} \\xrightarrow{R_3 \\leftarrow R_3 - R_1 - R_2} \\begin{pmatrix}1 & 0 & -1 & 2 \\\\ 1 & -2 & 2 & 3 \\\\ 0 & 0 & 0 & m - 5\\end{pmatrix}$.<br>$\\det \\begin{pmatrix}1 & 0 \\\\ 1 & -2\\end{pmatrix} = -2 \\ne 0$, nên hai hàng đầu độc lập tuyến tính.<br>$m = 5 \\Rightarrow R_3 = (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=2$.<br>$m \\ne 5 \\Rightarrow R_3 = (0,0,0,m - 5) \\ne (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=3$.<br><b>Kết quả:</b> $m = 5$.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}2 & -2 \\\\ -2 & 6\\end{pmatrix}$ và $B = \\begin{pmatrix}-4 & 5 \\\\ 9 & -11\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X = X + B$ là",
   "options": [
    "$\\begin{pmatrix}-2 & 3 \\\\ 1 & -1\\end{pmatrix}$.",
    "$\\begin{pmatrix}-10 & -3 \\\\ 23 & 7\\end{pmatrix}$.",
    "$\\begin{pmatrix}-2 & 1 \\\\ 3 & -1\\end{pmatrix}$.",
    "$\\begin{pmatrix}2 & -3 \\\\ -1 & 1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$AX=X+B \\Rightarrow (A-I)X=B$.<br>$A-I=\\begin{pmatrix}1 & -2 \\\\ -2 & 5\\end{pmatrix},\\qquad B=\\begin{pmatrix}-4 & 5 \\\\ 9 & -11\\end{pmatrix}$.<br>$X=(A-I)^{-1}B=\\begin{pmatrix}5 & 2 \\\\ 2 & 1\\end{pmatrix}\\begin{pmatrix}-4 & 5 \\\\ 9 & -11\\end{pmatrix}=\\begin{pmatrix}-2 & 3 \\\\ 1 & -1\\end{pmatrix}$.<br>Kiểm tra: $\\begin{pmatrix}2 & -2 \\\\ -2 & 6\\end{pmatrix}\\begin{pmatrix}-2 & 3 \\\\ 1 & -1\\end{pmatrix}=\\begin{pmatrix}-2 & 3 \\\\ 1 & -1\\end{pmatrix}+\\begin{pmatrix}-4 & 5 \\\\ 9 & -11\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b + 2)x - 8y = a^2 + 4\\\\ x + ay = 2\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
   "options": [
    "$(a;b) = (-2;2)$.",
    "$(a;b) = (2;2)$.",
    "$(a;b) = (-2;-2)$.",
    "$(a;b) = (2;-2)$."
   ],
   "answer": 0,
   "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+2=\\lambda$, $-8=\\lambda a$, $a^2 + 4=\\lambda2$.<br>Với $(a,b)=(-2,2)$: $b+2=4=4$; $-8=4\\cdot-2=-8$; $a^2 + 4=8=4\\cdot2=8$. Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=4$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
   "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$."
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
   "q": "Biết hàm số $f(x) = \\begin{cases}\\cos 6x & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$-36$.",
    "$-18$.",
    "$1$.",
    "$-35$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=\\cos{\\left(6 x \\right)}$ có $g(0)=1$, $g^\\prime(0)=0$, $g^{\\prime\\prime}(0)=-36$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$. Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=0,\\ 2a=-36$, do đó $a=-18$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $2a + b=-36$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} xe^{-4x}\\,dx$ bằng",
   "options": [
    "$\\dfrac{1}{16}$.",
    "$\\dfrac{1}{4}$.",
    "$4$.",
    "$\\dfrac{1}{8}$."
   ],
   "answer": 0,
   "explain": "Từng phần trên $[0,R]$ với $u=x$, $dv=e^{-4x}dx$, $v=-e^{-4x}/4$: $\\int_0^Rxe^{-4x}dx=[-xe^{-4x}/4]_0^R+\\frac1{4}\\int_0^Re^{-4x}dx$.<br>Cho $R\\to\\infty$, $Re^{-4R}\\to0$; tích phân còn lại là $[-e^{-4x}/4]_0^\\infty=1/4$. Vậy $I=0+\\dfrac1{4}\\cdot\\dfrac1{4}=\\dfrac{1}{16}$.",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = 3 p_{1} + p_{2} - 70\\\\ s_2 = - p_{1} + 2 p_{2} - p_{3} + 75\\\\ s_3 = - p_{1} + 3 p_{3} - 45\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = - p_{1} + p_{2} + 70\\\\ d_2 = 60 - 2 p_{2}\\\\ d_3 = p_{1} - p_{3} + 45\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Tổng lượng cung của cả ba loại hàng hóa tại trạng thái cân bằng bằng",
   "options": [
    "$120$.",
    "$90$.",
    "$125$.",
    "$115$."
   ],
   "answer": 0,
   "explain": "Tại cân bằng, $s_i=d_i$. Trừ lượng cầu khỏi lượng cung theo từng loại: $(S-D)P=(S-D)(35;15;40)^T$.<br>$S-D=\\begin{pmatrix}4 & 0 & 0 \\\\ -1 & 4 & -1 \\\\ -2 & 0 & 4\\end{pmatrix}$, nên hệ giá là $\\begin{pmatrix}4 & 0 & 0 \\\\ -1 & 4 & -1 \\\\ -2 & 0 & 4\\end{pmatrix}P=(140;-15;90)^T$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}4 & 0 & 0 & 140\\\\ -1 & 4 & -1 & -15\\\\ -2 & 0 & 4 & 90\\end{array}\\right)$$<br>$R_1 \\leftarrow \\dfrac{1}{4}R_1$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 35\\\\ -1 & 4 & -1 & -15\\\\ -2 & 0 & 4 & 90\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (-1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 35\\\\ 0 & 4 & -1 & 20\\\\ -2 & 0 & 4 & 90\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (-2)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 35\\\\ 0 & 4 & -1 & 20\\\\ 0 & 0 & 4 & 160\\end{array}\\right)$$<br>$R_2 \\leftarrow \\dfrac{1}{4}R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 35\\\\ 0 & 1 & - \\dfrac{1}{4} & 5\\\\ 0 & 0 & 4 & 160\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{4}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 35\\\\ 0 & 1 & - \\dfrac{1}{4} & 5\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (- \\dfrac{1}{4})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 35\\\\ 0 & 1 & 0 & 15\\\\ 0 & 0 & 1 & 40\\end{array}\\right)$$<br>$P=(35;15;40)^T$; thay vào hàm cung hoặc cầu được $Q=(50;30;40)^T$.<br>Tổng lượng cung/cầu: $50+30+40=120$; tổng giá: $35+15+40=90$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=5}^{+\\infty}\\ln\\left(1 - \\dfrac{1}{n^2}\\right)$ bằng",
   "options": [
    "$\\ln\\dfrac{4}{5}$.",
    "$\\ln\\dfrac{5}{4}$.",
    "$\\ln\\dfrac{5}{6}$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\ln\\left(1 - \\dfrac{1}{n^2}\\right) = \\ln\\dfrac{(n-1)(n+1)}{n^2} = \\ln\\dfrac{n-1}{n} - \\ln\\dfrac{n}{n+1}$<br>Tổng riêng thu gọn: $S_N = \\ln\\dfrac{4}{5} - \\ln\\dfrac{N}{N+1}$<br>$N \\to +\\infty$: $S = \\ln\\dfrac{4}{5}$",
   "note": "Lôgarit của tích thành tổng: tách $\\ln\\dfrac{(n-1)(n+1)}{n^2}$ thành hiệu để các số hạng triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1^{n+1} + 2^n}{3^n} = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng",
   "options": [
    "$7$.",
    "$3$.",
    "$9$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1^{n+1}}{3^n} = 1\\sum_{n=1}^{+\\infty}\\left(\\dfrac{1}{3}\\right)^n = 1\\cdot\\dfrac{\\left(\\frac{1}{3}\\right)^{1}}{1 - \\frac{1}{3}} = \\dfrac{1}{2}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{2}{3}\\right)^n = \\dfrac{\\left(\\frac{2}{3}\\right)^{1}}{1 - \\frac{2}{3}} = 2$<br>Tổng: $\\dfrac{1}{2} + 2 = \\dfrac{5}{2} \\Rightarrow a + b = 7$",
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
   "explain": "Tách biến rồi tích phân hai vế: $e^y\\,dy = x\\,dx \\Rightarrow e^y = \\dfrac{x^2}{2} + C$<br>$x=0,y=0$: $e^y=x^2/2+C$ gives $1=0+C$, so $C=1$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=\\ln\\left(\\dfrac{x^{2}}{2} + 1\\right)$.<br>Thay $x=2$ vào nghiệm: $y(2)=\\ln 3=\\ln 3$.",
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
   "q": "Một bể có 500 lít nước muối với nồng độ muối là 0,02 kg/lít. Người ta bơm nước muối với nồng độ 0,01 kg/lít vào bể với tốc độ 10 lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau 30 phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "7,7.",
    "5,5.",
    "5,0.",
    "2,7."
   ],
   "answer": 0,
   "explain": "Gọi $S(t)$ là lượng muối (kg): $S' = 0{,}01\\cdot10 - \\dfrac{S}{500}\\cdot10 = 0{,}1 - \\dfrac{10S}{500},\\quad S(0) = 10$<br>Nghiệm: $S(t) = 5 + Ce^{-10t/500}$; $S(0) = 10 \\Rightarrow C = 5$<br>$S(30) = 5 + 5e^{-0{,}6} \\approx 7{,}7$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Thể tích của vật thể giới hạn bởi paraboloid $z = 16 - x^2 - y^2$ và mặt phẳng $z = 0$ được tính bằng $V = \\displaystyle\\iint_D z\\,dxdy$, với $D$ là hình chiếu của vật thể lên mặt phẳng $Oxy$. Giá trị của $V$ bằng",
   "options": [
    "$128 \\pi$.",
    "$256 \\pi$.",
    "$64 \\pi$.",
    "$\\dfrac{256 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "$z \\ge 0 \\Leftrightarrow x^2 + y^2 \\le 16$ nên $D$ là hình tròn bán kính $4$<br>$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{4}\\left(16 - r^{2}\\right)r\\,dr = 2\\pi\\left[- \\dfrac{r^{4}}{4} + 8 r^{2}\\right]_0^{4}$<br>$V = 2\\pi\\cdot64 = 128 \\pi$",
   "note": "Miền $D$ là hình chiếu của vật thể: nơi mặt cong cắt mặt phẳng $z = 0$."
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
   "explain": "Tọa độ cầu cho $\\sqrt{x^2+y^2+z^2}=\\rho$ và $dV=\\rho^2\\sin\\theta\\,d\\rho d\\theta d\\varphi$, nên $I=\\int_0^{2\\pi}d\\varphi\\int_0^\\pi\\sin\\theta\\,d\\theta\\int_0^{4}\\rho^3\\,d\\rho$.<br>$\\int_0^{2\\pi}d\\varphi=2\\pi$, $[-\\cos\\theta]_0^\\pi=2$, và $[\\rho^4/4]_0^{4}=256/4$. Nhân lại: $I=2\\pi\\cdot2\\cdot\\dfrac{256}{4}=256 \\pi$.",
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
   "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 2 y)\\,dx + 3 x y\\,dy$ bằng",
   "options": [
    "$\\dfrac{8}{15}$.",
    "$- \\dfrac{2}{15}$.",
    "$- \\dfrac{8}{15}$.",
    "$\\dfrac{16}{15}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 3 y + 2$<br>$I = \\displaystyle\\int_0^{1}dx\\int_{x^2}^{x}(3 y + 2)\\,dy = \\int_0^{1}\\left(- \\dfrac{3 x^{4}}{2} - \\dfrac{x^{2}}{2} + 2 x\\right)dx$<br>$= \\left[- \\dfrac{3 x^{5}}{10} - \\dfrac{x^{3}}{6} + x^{2}\\right]_0^{1} = \\dfrac{8}{15}$",
   "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + 2z = 7\\\\ y + z = 3\\\\ 2x + y + mz = 10\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = 2$, định thức của ma trận $A$ bằng",
     "options": [
      "$-1$.",
      "$-3$.",
      "$1$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$\\det A = m - 3$<br>Với $m = 2$: $\\det A = -1$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$3$.",
      "$2$.",
      "$-3$.",
      "$6$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = m - 3 = 0 \\Leftrightarrow m = 3$"
    },
    {
     "q": "Khi $m = 2$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$6$.",
      "$7$.",
      "$-6$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "Với $m = 2$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = -1$)<br>$(x_0;y_0;z_0) = (3;2;1)$<br>$x_0 + y_0 + z_0 = 6$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} + x y + y^{2}$ và điểm $M(2;-1)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$3$.",
      "$0$.",
      "$4$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x + y,\\quad f'_y = x + 2 y$<br>$\\nabla f(M) = (3;0) \\Rightarrow p + q = 3$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (-3;4)$ bằng",
     "options": [
      "$- \\dfrac{9}{5}$.",
      "$-9$.",
      "$\\dfrac{12}{5}$.",
      "$\\dfrac{9}{5}$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(3)\\cdot(-3) + (0)\\cdot(4)}{5} = - \\dfrac{9}{5}$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$-3$.",
      "$3$.",
      "$9$.",
      "$-2$."
     ],
     "answer": 0,
     "explain": "$z = 3 + (3)(x - 2) + (0)(y + 1)$<br>Cho $x = y = 0$: $z = -3$",
     "note": "Gradient, đạo hàm theo hướng và mặt phẳng tiếp xúc đều dùng chung hai giá trị $f'_x(M)$, $f'_y(M)$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m\\end{pmatrix}$ với $m$ là số nguyên dương. Biết $\\det A = 20$, tìm $m$.",
   "answer": [
    "3"
   ],
   "explain": "Khai triển định thức: $\\det A=m^{3} - 3 m + 2=\\left(m - 1\\right)^{2} \\left(m + 2\\right)$<br>Đặt $\\det A=20$: $\\left(m - 3\\right) \\left(m^{2} + 3 m + 6\\right)=0$, có nghiệm $m=3,\\ - \\dfrac{3}{2} - \\dfrac{\\sqrt{15} i}{2},\\ - \\dfrac{3}{2} + \\dfrac{\\sqrt{15} i}{2}$<br>Lọc nghiệm nguyên dương trong tập trên: $m=3$",
   "note": "Lập $\\det A$ theo $m$ rồi giải phương trình; chỉ nhận nghiệm nguyên dương."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 2xy$ với điều kiện $\\dfrac{x^2}{4} + \\dfrac{y^2}{25} = 1$.",
   "answer": [
    "10"
   ],
   "explain": "Đặt $x = 2\\cos t,\\ y = 5\\sin t$: $f = 2\\cdot2\\cdot5\\sin t\\cos t$, lớn nhất bằng $\\dfrac{2\\cdot2\\cdot5}{2} = 10$<br>Đáp số: $10$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(2 x + 2)^{n}}{n^2\\cdot5^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "5"
   ],
   "explain": "Đặt $t = 2 x + 2$: chuỗi $\\sum\\dfrac{t^n}{n^2\\cdot5^n}$ hội tụ khi và chỉ khi $|t| \\le 5$ (tại hai đầu mút là chuỗi $\\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-5 \\le 2 x + 2 \\le 5 \\Leftrightarrow - \\dfrac{7}{2} \\le x \\le \\dfrac{3}{2}$<br>$\\beta - \\alpha = 5$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -8x - 4$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "10"
   ],
   "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -8x - 4 \\Rightarrow y^* = 2x + 1$<br>$y = 2x + 1 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 2,\\ y'(0) = 4 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 3 + e^{2} \\approx 10{,}39$<br>Đáp số: $10$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 4$ và phía trên mặt $z = 0$. Biết thể tích của $V$ bằng $k\\pi$, tính $3k$.",
   "answer": [
    "16"
   ],
   "explain": "Tọa độ cầu: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{2}}\\sin\\theta\\,d\\theta\\int_0^{2}\\rho^2\\,d\\rho = \\dfrac{16}{3}\\pi$<br>Đáp số: $16$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
