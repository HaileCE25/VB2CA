// ĐỀ SỐ 17 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-17",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 17",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lao động và nghề nghiệp",
  "prompt": "Trong ba năm sau khi ra trường, Hùng đã đổi việc năm lần, lần nào cũng với lý do “chỗ mới lương cao hơn, đỡ áp lực hơn”. Bạn học của Hùng là Lan vẫn làm ở một xưởng cơ khí nhỏ từ ngày đầu, lương tăng chậm nhưng nay đã là tổ trưởng kỹ thuật. Hùng cho rằng Lan “không biết nắm cơ hội”; Lan lại nghĩ Hùng “chưa kịp giỏi việc gì đã bỏ”.",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày quan điểm của mình về hai cách làm việc trên và về mối quan hệ giữa sự kiên trì, tinh thần học nghề với thành công trong nghề nghiệp.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;0;1)$ và $v = (m;m;-9)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
   "options": [
    "$4$.",
    "$7$.",
    "$6$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = m^{2} - 9 = \\left(m - 3\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -3 \\text{ hoặc } m > 3$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $4$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ $S = \\{u_1(2;1;2),\\ u_2(-1;-1;1),\\ u_3(0;1;m)\\}$ với $m$ là tham số. Hệ $S$ là một cơ sở của $\\mathbb{R}^3$ khi và chỉ khi",
   "options": [
    "$m \\ne -4$.",
    "$m = -4$.",
    "với mọi giá trị của $m$.",
    "$m \\ne -3$."
   ],
   "answer": 0,
   "explain": "Ba véc tơ trong $\\mathbb{R}^3$ là cơ sở $\\Leftrightarrow$ chúng độc lập tuyến tính $\\Leftrightarrow$ định thức của chúng khác 0<br>$\\det(u_1, u_2, u_3) = - m - 4$<br>$- m - 4 \\ne 0 \\Leftrightarrow m \\ne -4$",
   "note": "Số véc tơ đã bằng số chiều nên chỉ cần định thức khác 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}3 & -2 \\\\ 0 & -2 \\\\ 3 & 1\\end{pmatrix}$ và $B = \\begin{pmatrix}3 & 2 & 0 \\\\ 0 & 2 & 0\\end{pmatrix}$. Biết hạng của một tích không vượt quá hạng của mỗi thừa số, hạng của ma trận $AB$ (cấp $3\\times3$) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\operatorname{rank}A = 2,\\ \\operatorname{rank}B = 2$ nên $\\operatorname{rank}(AB) \\le 2$<br>$AB = \\begin{pmatrix}9 & 2 & 0 \\\\ 0 & -4 & 0 \\\\ 9 & 8 & 0\\end{pmatrix}$, dạng bậc thang: $\\begin{pmatrix}9 & 2 & 0 \\\\ 0 & -4 & 0 \\\\ 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}(AB) = 2$",
   "note": "$\\operatorname{rank}(AB) \\le \\min\\{\\operatorname{rank}A, \\operatorname{rank}B\\}$, nên tích của ma trận $3\\times2$ với $2\\times3$ không thể có hạng 3."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 2 \\\\ -3 & -2\\end{pmatrix}$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{3}$ bằng<span class=\"q-hint\">Gợi ý: dùng $A^k = A$ với mọi $k \\ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$.</span>",
   "options": [
    "$2$.",
    "$16$.",
    "$9$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$(I + A)^n = I + \\displaystyle\\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$<br>$(I + A)^{3} = I + 7A = \\begin{pmatrix}22 & 14 \\\\ -21 & -13\\end{pmatrix}$<br>Tổng các phần tử: $2$",
   "note": "Khi $A^2 = A$ thì mọi lũy thừa của $A$ đều bằng $A$; và $C_n^1 + \\dots + C_n^n = 2^n - 1$."
  },
  {
   "q": "Định thức của ma trận $M = \\begin{pmatrix}1 & -1 & -3 & 1 \\\\ -1 & -2 & -3 & -1 \\\\ 0 & 0 & 0 & -2 \\\\ 0 & 0 & -1 & 2\\end{pmatrix}$ bằng<span class=\"q-hint\">Gợi ý: $M$ có dạng tam giác khối nên $\\det M$ bằng tích định thức của hai khối vuông cấp 2 nằm trên đường chéo.</span>",
   "options": [
    "$6$.",
    "$-5$.",
    "$0$.",
    "$-6$."
   ],
   "answer": 0,
   "explain": "Khối trên đường chéo: $M_1 = \\begin{pmatrix}1 & -1 \\\\ -1 & -2\\end{pmatrix},\\ M_2 = \\begin{pmatrix}0 & -2 \\\\ -1 & 2\\end{pmatrix}$<br>$\\det M_1 = -3,\\quad \\det M_2 = -2$<br>$\\det M = -3\\cdot(-2) = 6$",
   "note": "Chỉ áp dụng khi một khối ngoài đường chéo toàn số 0; khối còn lại không ảnh hưởng tới định thức."
  },
  {
   "q": "Xét hệ phương trình tuyến tính $AX = B$ gồm $m$ phương trình, $n$ ẩn với $m < n$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu hệ có nghiệm thì hệ có vô số nghiệm.",
    "Hệ luôn có nghiệm.",
    "Hệ có thể có nghiệm duy nhất.",
    "Hệ luôn vô nghiệm."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu hệ có nghiệm thì hệ có vô số nghiệm. Hạng của $A$ không vượt quá $m < n$ nên luôn có ít nhất $n - m$ ẩn tự do.<br><b>Sai:</b> Hệ luôn có nghiệm. Hệ $x + y + z = 1$, $x + y + z = 2$ vô nghiệm.<br><b>Sai:</b> Hệ có thể có nghiệm duy nhất. Nghiệm duy nhất đòi hỏi hạng bằng $n$, nhưng hạng không vượt quá $m < n$.<br><b>Sai:</b> Hệ luôn vô nghiệm. Hệ thuần nhất $AX = 0$ luôn có nghiệm $X = 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}-2 & -1 & -1 & -1 \\\\ -1 & -2 & -1 & -1 \\\\ -1 & -1 & -2 & -1 \\\\ -1 & -1 & -1 & -2\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$5$.",
    "$1$.",
    "$15$.",
    "$-5$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1 + h_2 + h_3 + h_4$: hàng 1 trở thành $(-5;-5;-5;-5)$, rút $-5$ ra ngoài định thức<br>$h_i \\to h_i - (-1)h_1\\ (i = 2,3,4)$: được ma trận tam giác có đường chéo $1;\\ -1;\\ -1;\\ -1$<br>$\\det A = (-5)\\cdot(-1)^3 = 5$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{(1 + 3x)^{\\frac1x} - e^{3}}{x}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$- \\dfrac{9 e^{3}}{2}$.",
    "$- \\dfrac{3 e^{3}}{2}$.",
    "$\\dfrac{9 e^{3}}{2}$.",
    "$- \\dfrac{9}{2}$."
   ],
   "answer": 0,
   "explain": "$(1 + 3x)^{\\frac1x} = e^{\\frac{\\ln(1 + 3x)}{x}}$ và $\\dfrac{\\ln(1 + 3x)}{x} = 3 - \\dfrac{9x}{2} + o(x)$<br>$(1 + 3x)^{\\frac1x} = e^{3}\\cdot e^{-\\frac{9x}{2} + o(x)} = e^{3}\\left(1 - \\dfrac{9x}{2} + o(x)\\right)$<br>$\\lim = -\\dfrac{9}{2}e^{3} = - \\dfrac{9 e^{3}}{2}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} - 4}{x^{2} + x - 6}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$y = \\dfrac{\\left(x - 2\\right) \\left(x + 2\\right)}{\\left(x - 2\\right) \\left(x + 3\\right)}$<br>Có tiệm cận đứng $x = -3$, tiệm cận ngang $y = 1$ (tại $x = 2$ giới hạn hữu hạn nên không có tiệm cận)<br>Tổng cộng: $2$ đường tiệm cận",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{4}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{x}{- 2 x^{2} - x + 1}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$5$.",
    "$3$.",
    "$120$.",
    "$-5$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{- 2 x^{2} - x + 1} = 1 + x + 3x^{2} + 5x^{3} + 11x^{4} + o(x^{4})$<br>Nhân lại, gom theo bậc: $f(x) = x + x^{2} + 3x^{3} + 5x^{4} + o(x^{4})$<br>Hệ số của $x^{4}$: $5$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} y$. Tại điểm $M(3;2)$, hàm số tăng nhanh nhất theo hướng của véc tơ gradient $\\nabla f(M) = (f'_x(M); f'_y(M))$ và tốc độ tăng lớn nhất bằng $|\\nabla f(M)|$. Giá trị của $|\\nabla f(M)|$ bằng",
   "options": [
    "$15$.",
    "$225$.",
    "$21$.",
    "$16$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x y,\\quad f'_y = x^{2}$<br>$\\nabla f(M) = (12;9)$<br>$|\\nabla f(M)| = \\sqrt{(12)^2 + (9)^2} = \\sqrt{225} = 15$",
   "note": "Tốc độ tăng lớn nhất là độ dài của gradient, không phải tổng hai đạo hàm riêng."
  },
  {
   "q": "Người ta tính lực hấp dẫn $F = G\\dfrac{m_1m_2}{d^2}$ giữa hai vật (các khối lượng đo chính xác, $G$ là hằng số) từ hai đại lượng đo được. Biết khoảng cách $d$ được đo với sai số tương đối không quá 3% và hằng số tỉ lệ dùng để hiệu chỉnh thiết bị (coi như một thừa số bậc nhất) với sai số tương đối không quá 2%. Dùng vi phân toàn phần của $\\ln F$, sai số tương đối lớn nhất của $F$ xấp xỉ bằng",
   "options": [
    "8%.",
    "5%.",
    "4%.",
    "12%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln F = \\pm2\\ln u \\pm 1\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta F}{F} \\le 2\\cdot\\dfrac{\\Delta u}{u} + 1\\cdot\\dfrac{\\Delta v}{v}$<br>$= 2\\cdot3\\% + 1\\cdot2\\% = 8\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị lớn nhất của hàm số $f(x,y) = 3 x + 4 y$ với điều kiện $x^2 + y^2 = 4$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$10$.",
    "$5$.",
    "$14$.",
    "$20$."
   ],
   "answer": 0,
   "explain": "$L = 3 x + 4 y - \\lambda(x^2 + y^2 - 4)$<br>$L'_x = 3 - 2\\lambda x = 0,\\quad L'_y = 4 - 2\\lambda y = 0 \\Rightarrow x = \\dfrac{3}{2\\lambda},\\ y = \\dfrac{4}{2\\lambda}$<br>Thay vào ràng buộc: $\\dfrac{25}{4\\lambda^2} = 4 \\Rightarrow \\lambda = \\pm\\dfrac{5}{4}$<br>$\\lambda > 0$: $(x;y) = \\left(\\dfrac{6}{5};\\dfrac{8}{5}\\right)$, $f_{\\max} = 10$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{2n + 1}{3n + 2}\\right)^{n}$. Đặt $C = \\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}$, khi đó:",
   "options": [
    "$C = \\dfrac{2}{3}$ và chuỗi hội tụ.",
    "$C = \\dfrac{2}{3}$ và chuỗi phân kỳ.",
    "$C = \\dfrac{4}{9}$ và chuỗi hội tụ.",
    "$C = 1$ và chuỗi hội tụ."
   ],
   "answer": 0,
   "explain": "$\\sqrt[n]{u_n} = \\dfrac{2n + 1}{3n + 2} \\to \\dfrac{2}{3}$<br>$C < 1$ nên theo tiêu chuẩn Cauchy chuỗi hội tụ",
   "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương."
  },
  {
   "q": "Cho chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}u_n$ có $D = \\lim\\limits_{n\\to\\infty}\\dfrac{u_{n+1}}{u_n}$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $D < 1$ thì chuỗi hội tụ.",
    "Nếu $D = 1$ thì chuỗi hội tụ.",
    "Nếu $D = 1$ thì chuỗi phân kỳ.",
    "Nếu $D > 1$ thì chuỗi hội tụ."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $D < 1$ thì chuỗi hội tụ. Đây là tiêu chuẩn D’Alembert.<br><b>Sai:</b> Nếu $D = 1$ thì chuỗi hội tụ. $\\sum\\dfrac1n$ có $D = 1$ nhưng phân kỳ.<br><b>Sai:</b> Nếu $D = 1$ thì chuỗi phân kỳ. $\\sum\\dfrac{1}{n^2}$ có $D = 1$ nhưng hội tụ; khi $D = 1$ tiêu chuẩn không kết luận được.<br><b>Sai:</b> Nếu $D > 1$ thì chuỗi hội tụ. Khi $D > 1$ thì $u_n$ tăng từ một lúc nào đó, không tiến về $0$, nên chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân đẳng cấp (thuần nhất) cấp một?",
   "options": [
    "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$.",
    "$xy' + y = y^2\\ln x$.",
    "$y' = \\dfrac{1 + y^2}{1 + x^2}$.",
    "$y' + y\\tan x = \\cos x$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — Vế phải viết được thành hàm của $\\dfrac{y}{x}$, tức dạng $y' = f\\left(\\dfrac{y}{x}\\right)$<br><b>Sai:</b> $xy' + y = y^2\\ln x$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = \\dfrac{1 + y^2}{1 + x^2}$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' + y\\tan x = \\cos x$ — là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không thuộc dạng đang hỏi"
  },
  {
   "q": "Đường cong tích phân của phương trình vi phân toàn phần $(4 x - y)\\,dx + (- x + 2 y)\\,dy = 0$ đi qua điểm $M(-1;-1)$ là một đường elip. Elip này cắt tia $Ox$ (phần $x > 0$ của trục hoành) tại điểm có hoành độ bằng",
   "options": [
    "$1$.",
    "$2$.",
    "$3$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial P}{\\partial y} = -1 = \\dfrac{\\partial Q}{\\partial x}$ nên vế trái là $du$ với $u = 2 x^{2} - x y + y^{2}$<br>Nghiệm tổng quát: $2 x^{2} - x y + y^{2} = C$; qua $M(-1;-1)$: $C = 2$<br>Cho $y = 0$: $2 x^{2} = 2 \\Rightarrow x = 1$ (lấy $x > 0$)",
   "note": "Kiểm tra $P'_y = Q'_x$ trước; nghiệm tổng quát là $u(x,y) = C$ với $u'_x = P$, $u'_y = Q$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 4500 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{3}$ và $P(0) = 1500$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số cá trong hồ sau 3 tháng bằng",
   "options": [
    "$2250$.",
    "$3000$.",
    "$1500$.",
    "$2251$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{4500}{1 + A} = 1500 \\Rightarrow A = 2$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{3}\\cdot3} = 2^{-1} = \\dfrac{1}{2}$<br>$P(3) = \\dfrac{4500}{1 + \\frac{2}{2}} = 2250$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Theo phương pháp hệ số bất định, một nghiệm riêng của phương trình $y'' - 2y' + y = 5e^{x}$ được tìm dưới dạng nào sau đây ($A, B, C$ là các hằng số cần xác định)?",
   "options": [
    "$y^* = Ax^2e^{x}$.",
    "$y^* = Ae^{x}$.",
    "$y^* = Axe^{x}$.",
    "$y^* = (Ax + B)e^{x}$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng có nghiệm kép $1$, trùng với số mũ của vế phải nên nhân thêm $x^2$<br>Dạng cần tìm: $y^* = Ax^2e^{x}$",
   "note": "Bội của số mũ (hoặc của $\\alpha \\pm i\\beta$) trong phương trình đặc trưng quyết định nhân thêm $1$, $x$ hay $x^2$."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ x \\ge 0,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>Điều kiện $x \\ge 0,\\ y \\ge 0$ ứng với $0 \\le \\varphi \\le \\pi/2$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt nón $z = \\sqrt{3(x^2 + y^2)}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 3,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{6},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$9 \\pi \\left(2 - \\sqrt{3}\\right)$.",
    "$3 \\pi^{2}$.",
    "$36 \\pi$.",
    "$\\dfrac{9 \\pi \\left(2 - \\sqrt{3}\\right)}{2}$."
   ],
   "answer": 0,
   "explain": "$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^2\\,d\\rho$<br>$= 2\\pi\\cdot\\left(1 - \\cos\\dfrac{\\pi}{6}\\right)\\cdot\\dfrac{27}{3} = 9 \\pi \\left(2 - \\sqrt{3}\\right)$",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
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
   "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 30\\%\\cdot(2100 - x)$<br>$70x = 63000 \\Rightarrow x = 900$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (-1;1;2),\\ u_2 = (3;2;3)$ và $v = (1;4;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$7$.",
    "$-7$.",
    "$8$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = 35 - 5 m$<br>$35 - 5 m = 0 \\Leftrightarrow m = 7$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$. Mọi ma trận vuông cấp 2 giao hoán với $A$ (tức thỏa mãn $AX = XA$) đều có dạng nào sau đây, với $a, b$ là các số thực tùy ý?",
   "options": [
    "$\\begin{pmatrix}a & b \\\\ 0 & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & 0 \\\\ b & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & 0 \\\\ 0 & b\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ b & a\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "Đặt $X = \\begin{pmatrix}x & y \\\\ z & t\\end{pmatrix}$<br>$AX = \\begin{pmatrix}x + z & t + y \\\\ z & t\\end{pmatrix},\\quad XA = \\begin{pmatrix}x & x + y \\\\ z & t + z\\end{pmatrix}$<br>So sánh từng phần tử: $z = 0$ và $x = t$<br>Vậy $X = \\begin{pmatrix}a & b \\\\ 0 & a\\end{pmatrix}$",
   "note": "Đặt $X$ với bốn ẩn, tính $AX$ và $XA$ rồi so sánh từng phần tử."
  },
  {
   "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y + 2z = 0\\\\ x - 2y - 2z + t = 0\\\\ -x + y + 2t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
   "options": [
    "$1$.",
    "$3$.",
    "$4$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & 2 & 2 & 0 \\\\ 0 & -4 & -4 & 1 \\\\ 0 & 0 & 4 & -11\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 3$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 3 = 1$",
   "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 2}\\dfrac{x^3 + ax + b}{\\left(x - 2\\right)^{2}} = L$ với $L$ là một số hữu hạn. Giá trị của $b - a$ bằng",
   "options": [
    "$28$.",
    "$4$.",
    "$6$.",
    "$-28$."
   ],
   "answer": 0,
   "explain": "Mẫu số có nghiệm kép $x = 2$ nên tử số $g(x) = x^3 + ax + b$ phải thỏa mãn $g(2) = 0$ và $g'(2) = 0$<br>$g'(x) = 3x^2 + a \\Rightarrow a = -12$; $g(2) = 0 \\Rightarrow b = 16$<br>$x^3 - 12 x + 16 = \\left(x - 2\\right)^{2} \\left(x + 4\\right)$ nên $L = 6$<br>$b - a = 28$",
   "note": "Mẫu có nghiệm kép nên tử cũng phải có nghiệm kép tại đó: $g(x_0) = g'(x_0) = 0$."
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
   "explain": "Nhánh trái $g(x) = e^{4 x}$: $g(0) = 1,\\ g'(0) = 4,\\ g''(0) = 16$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 1,\\ b = 4,\\ 2a = 16 \\Rightarrow a = 8$<br>$a + b + d = 13$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Một đoạn đường ống uốn theo đường cong $y = \\dfrac23x^{3/2}$ với $0 \\le x \\le 15$ (đơn vị: mét). Dùng công thức độ dài cung $L = \\displaystyle\\int_a^b\\sqrt{1 + (y')^2}\\,dx$, độ dài đoạn ống bằng",
   "options": [
    "$42$ m.",
    "$\\dfrac{128}{3}$ m.",
    "$15$ m.",
    "$21$ m."
   ],
   "answer": 0,
   "explain": "$y' = \\sqrt{x} \\Rightarrow 1 + (y')^2 = 1 + x$<br>$L = \\displaystyle\\int_0^{15}\\sqrt{1 + x}\\,dx = \\left[\\dfrac23(1 + x)^{3/2}\\right]_0^{15}$<br>$= \\dfrac23\\left(16^{3/2} - 1\\right) = 42$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = p_{1} - p_{2} + p_{3} + 40\\\\ s_2 = p_{1} + 3 p_{2} - 75\\\\ s_3 = - p_{1} + p_{3} + 35\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = - 2 p_{1} + p_{2} + 75\\\\ d_2 = - 2 p_{2} + p_{3} + 115\\\\ d_3 = 35 - p_{3}\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Tổng lượng cung của cả ba loại hàng hóa tại trạng thái cân bằng bằng",
   "options": [
    "$130$.",
    "$80$.",
    "$135$.",
    "$125$."
   ],
   "answer": 0,
   "explain": "Giải hệ $s_i = d_i$ được giá cân bằng $(30;35;15)$, lượng cung (cầu) tương ứng $(50;60;20)$<br>Kết quả: $130$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=3}^{+\\infty}\\ln\\left(1 - \\dfrac{1}{n^2}\\right)$ bằng",
   "options": [
    "$\\ln\\dfrac{2}{3}$.",
    "$\\ln\\dfrac{3}{2}$.",
    "$\\ln\\dfrac{3}{4}$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\ln\\left(1 - \\dfrac{1}{n^2}\\right) = \\ln\\dfrac{(n-1)(n+1)}{n^2} = \\ln\\dfrac{n-1}{n} - \\ln\\dfrac{n}{n+1}$<br>Tổng riêng thu gọn: $S_N = \\ln\\dfrac{2}{3} - \\ln\\dfrac{N}{N+1}$<br>$N \\to +\\infty$: $S = \\ln\\dfrac{2}{3}$",
   "note": "Lôgarit của tích thành tổng: tách $\\ln\\dfrac{(n-1)(n+1)}{n^2}$ thành hiệu để các số hạng triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2^{n+1} + 3^n}{5^n} = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng",
   "options": [
    "$23$.",
    "$11$.",
    "$19$.",
    "$25$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2^{n+1}}{5^n} = 2\\sum_{n=1}^{+\\infty}\\left(\\dfrac{2}{5}\\right)^n = 2\\cdot\\dfrac{\\left(\\frac{2}{5}\\right)^{1}}{1 - \\frac{2}{5}} = \\dfrac{4}{3}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{3}{5}\\right)^n = \\dfrac{\\left(\\frac{3}{5}\\right)^{1}}{1 - \\frac{3}{5}} = \\dfrac{3}{2}$<br>Tổng: $\\dfrac{4}{3} + \\dfrac{3}{2} = \\dfrac{17}{6} \\Rightarrow a + b = 23$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\cdot2^n}$ bằng",
   "options": [
    "$\\ln 2$.",
    "$\\ln\\left(\\sqrt{2}\\right)$.",
    "$\\ln 4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge1}\\dfrac{x^n}{n} = -\\ln(1 - x)$ tại $x = \\dfrac12$<br>Vậy tổng của chuỗi bằng $\\ln 2$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = xy^2$ thỏa mãn $y(0) = 1$. Giá trị của $y\\left(1\\right)$ bằng",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{y^2} = x\\,dx \\Rightarrow -\\dfrac1y = \\dfrac{x^2}{2} + C$<br>$y(0) = 1 \\Rightarrow y = \\dfrac{2}{2 - x^{2}}$<br>$y\\left(1\\right) = 2$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + y = e^{-x}$ thỏa mãn $y(0) = -1$. Giá trị của $y(1)$ bằng",
   "options": [
    "$0$.",
    "$- \\dfrac{1}{e}$.",
    "$e^{-1}$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{x}$: $\\left(ye^{x}\\right)' = 1$<br>$ye^{x} = 1x + C \\Rightarrow y = (1x + C)e^{-x}$<br>$y(0) = C = -1 \\Rightarrow y(1) = (1 - 1)e^{-1} = 0$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một tách cà phê có nhiệt độ $95^\\circ C$ được đặt trong phòng có nhiệt độ không đổi $20^\\circ C$. Sau 10 phút, nhiệt độ cà phê là $70^\\circ C$. Theo định luật Newton, tốc độ nguội tỉ lệ với hiệu nhiệt độ giữa cà phê và phòng. Nhiệt độ của cà phê sau 30 phút kể từ lúc đầu (làm tròn đến hàng phần chục, đơn vị $^\\circ C$) là",
   "options": [
    "42,2.",
    "20,0.",
    "36,7.",
    "45,0."
   ],
   "answer": 0,
   "explain": "$T' = -k(T - 20) \\Rightarrow T(t) = 20 + 75e^{-kt}$ (vì $T(0) = 95$)<br>$T(10) = 70 \\Rightarrow e^{-10k} = \\dfrac{50}{75}$<br>$T(30) = 20 + 75\\left(\\dfrac{50}{75}\\right)^{3} \\approx 42{,}2$",
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
   "explain": "Tọa độ cực: $0 \\le r \\le 2,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{4}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{2}\\left(r^{2} \\cos^{2}\\varphi\\right)r\\,dr = \\int 4 \\cos^{2}\\varphi\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = 1 + \\dfrac{\\pi}{2}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là miền nằm giữa hai mặt cầu $x^2 + y^2 + z^2 = 9$ và $x^2 + y^2 + z^2 = 25$. Giá trị của tích phân $\\displaystyle\\iiint_V \\dfrac{dxdydz}{x^2 + y^2 + z^2}$ bằng",
   "options": [
    "$8 \\pi$.",
    "$4 \\pi$.",
    "$64 \\pi$.",
    "$\\dfrac{392 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_{3}^{5}\\dfrac{\\rho^2}{\\rho^2}\\,d\\rho$<br>$= 2\\pi\\cdot2\\cdot(5 - 3) = 8 \\pi$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là một vòng của đường xoắn ốc $x = 4\\cos t,\\ y = 4\\sin t,\\ z = 3t$ với $0 \\le t \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\int_L z\\,ds$ bằng",
   "options": [
    "$30 \\pi^{2}$.",
    "$6 \\pi^{2}$.",
    "$15 \\pi^{2}$.",
    "$60 \\pi^{2}$."
   ],
   "answer": 0,
   "explain": "$ds = \\sqrt{4^2 + 3^2}\\,dt = 5\\,dt$; $\\displaystyle\\int_0^{2\\pi} 3t\\cdot5\\,dt$<br>Kết quả: $30 \\pi^{2}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 1,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C y\\,dx + (x^{2} + x)\\,dy$ bằng",
   "options": [
    "$2$.",
    "$-2$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = 2 x$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{2}\\left(2 x\\right)dy$<br>$I = 2$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}2 & 1 \\\\ 3 & 2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 2 x + 1$. Kí hiệu $f(A) = A^2 - 2A + I$.",
   "questions": [
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
     "options": [
      "$14$.",
      "$16$.",
      "$8$.",
      "$30$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}7 & 4 \\\\ 12 & 7\\end{pmatrix}$<br>Vết của $A^2$: $14$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
     "options": [
      "$16$.",
      "$14$.",
      "$17$.",
      "$8$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}7 & 4 \\\\ 12 & 7\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}4 & 2 \\\\ 6 & 4\\end{pmatrix}$<br>Tổng các phần tử: $16$"
    },
    {
     "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
     "options": [
      "$0$.",
      "$8$.",
      "$2$.",
      "$1$."
     ],
     "answer": 0,
     "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}2 & -1 \\\\ -3 & 2\\end{pmatrix}$<br>Tổng các phần tử: $0$",
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
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & -1 & 4 \\\\ 4 & 1 & -2 \\\\ -2 & -1 & -2\\end{pmatrix}$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\\det\\left(A + A^T\\right)$.",
   "answer": [
    "-42"
   ],
   "explain": "$A + A^T = \\begin{pmatrix}2 & 3 & 2 \\\\ 3 & 2 & -3 \\\\ 2 & -3 & -4\\end{pmatrix}$<br>$\\det\\left(A + A^T\\right) = -42$",
   "note": "$A + A^T$ đối xứng; $A - A^T$ phản đối xứng, và ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0."
  },
  {
   "q": "Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $2 x + 3 y + 6 z = 98$.",
   "answer": [
    "196"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(2;3;6)$ với $t = \\dfrac{98}{49}$; $f_{\\min} = \\dfrac{98^2}{49} = 196$<br>Đáp số: $196$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(x - 2)^{n}}{n^2\\cdot4^n}$?<span class=\"q-hint\">Chú ý: xét riêng hai đầu mút của khoảng hội tụ.</span>",
   "answer": [
    "9"
   ],
   "explain": "Bán kính hội tụ $R = 4$; tại hai đầu mút chuỗi hội tụ tuyệt đối (so sánh với $\\sum\\dfrac{1}{n^2}$). Miền hội tụ: $[-2;6]$<br>Đáp số: $9$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -3x - 2$ với điều kiện $y(0) = 3;\\ y'(0) = 4$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "8"
   ],
   "explain": "Phương trình đặc trưng: $k^2 - 1 = 0 \\Rightarrow k = \\pm1$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-1(Ax + B) = -3x - 2 \\Rightarrow y^* = 3x + 2$<br>$y = 3x + 2 + C_1e^{x} + C_2e^{-x}$<br>$y(0) = 3,\\ y'(0) = 4 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 5 + e \\approx 7{,}72$<br>Đáp số: $8$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt paraboloid $z = 12 - x^2 - y^2$. Biết thể tích của $V$ bằng $k\\pi$, tính $2k$.",
   "answer": [
    "99"
   ],
   "explain": "Hai mặt cắt nhau khi $r = 12 - r^2$, tức $r = 3$: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{3}(12 - r^2 - r)\\,r\\,dr = \\dfrac{99}{2}\\pi$<br>Đáp số: $99$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
