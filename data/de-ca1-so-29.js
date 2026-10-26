// ĐỀ SỐ 29 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-29",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 29",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Phát triển bền vững",
  "prompt": "Một xã ven biển có hai phương án sử dụng 50 héc-ta rừng ngập mặn: giữ nguyên rừng để chắn sóng, nuôi thủy sản dưới tán rừng với thu nhập vừa phải nhưng ổn định; hoặc phá rừng làm đầm nuôi tôm công nghiệp, thu nhập cao gấp nhiều lần trong vài năm đầu. Trong cuộc họp dân, có người nói: “Con cháu thì còn xa, cái nghèo thì ngay trước mắt.”",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày quan điểm của mình về lựa chọn mà xã nên theo và về trách nhiệm của thế hệ hôm nay đối với các thế hệ sau.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-3;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
   "options": [
    "$7$.",
    "$4$.",
    "$9$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = m^{2} - 3 m = m \\left(m - 3\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < 0 \\text{ hoặc } m > 3$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $7$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ $S = \\{u_1(-1;0;1),\\ u_2(0;1;1),\\ u_3(3;3;m)\\}$ với $m$ là tham số. Hệ $S$ là một cơ sở của $\\mathbb{R}^3$ khi và chỉ khi",
   "options": [
    "$m \\ne 0$.",
    "$m = 0$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 2$."
   ],
   "answer": 0,
   "explain": "Ba véc tơ trong $\\mathbb{R}^3$ là cơ sở $\\Leftrightarrow$ chúng độc lập tuyến tính $\\Leftrightarrow$ định thức của chúng khác 0<br>$\\det(u_1, u_2, u_3) = - m$<br>$- m \\ne 0 \\Leftrightarrow m \\ne 0$",
   "note": "Số véc tơ đã bằng số chiều nên chỉ cần định thức khác 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 0 \\\\ 3 & 3 \\\\ 1 & 3\\end{pmatrix}$ và $B = \\begin{pmatrix}1 & 3 & -1 \\\\ 0 & -2 & 2\\end{pmatrix}$. Biết hạng của một tích không vượt quá hạng của mỗi thừa số, hạng của ma trận $AB$ (cấp $3\\times3$) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\operatorname{rank}A = 2,\\ \\operatorname{rank}B = 2$ nên $\\operatorname{rank}(AB) \\le 2$<br>$AB = \\begin{pmatrix}1 & 3 & -1 \\\\ 3 & 3 & 3 \\\\ 1 & -3 & 5\\end{pmatrix}$, dạng bậc thang: $\\begin{pmatrix}1 & 3 & -1 \\\\ 0 & -6 & 6 \\\\ 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}(AB) = 2$",
   "note": "$\\operatorname{rank}(AB) \\le \\min\\{\\operatorname{rank}A, \\operatorname{rank}B\\}$, nên tích của ma trận $3\\times2$ với $2\\times3$ không thể có hạng 3."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-1 & 1 \\\\ -2 & 2\\end{pmatrix}$ thỏa mãn $A^2 = A$, và $I$ là ma trận đơn vị cấp 2. Tổng tất cả các phần tử của ma trận $(I + A)^{6}$ bằng<span class=\"q-hint\">Gợi ý: dùng $A^k = A$ với mọi $k \\ge 1$ và khai triển nhị thức để có $(I + A)^n = I + (2^n - 1)A$.</span>",
   "options": [
    "$2$.",
    "$128$.",
    "$65$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$(I + A)^n = I + \\displaystyle\\sum_{k=1}^{n}C_n^kA^k = I + (2^n - 1)A$<br>$(I + A)^{6} = I + 63A = \\begin{pmatrix}-62 & 63 \\\\ -126 & 127\\end{pmatrix}$<br>Tổng các phần tử: $2$",
   "note": "Khi $A^2 = A$ thì mọi lũy thừa của $A$ đều bằng $A$; và $C_n^1 + \\dots + C_n^n = 2^n - 1$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = -3$. Giá trị của $\\det\\left(3A^T\\right)$ bằng",
   "options": [
    "$-81$.",
    "$-9$.",
    "$81$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(3A^T\\right) = 3^3\\cdot\\det A$<br>Thay $\\det A = -3$: kết quả $-81$",
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
   "explain": "<b>Đúng:</b> Nếu $\\det A \\ne 0$ thì hệ có nghiệm duy nhất $X = A^{-1}B$. Nhân $A^{-1}$ vào bên trái hai vế của $AX = B$.<br><b>Sai:</b> Nếu $\\det A = 0$ thì hệ vô nghiệm. Với $A = 0$, $B = 0$ thì $\\det A = 0$ mà mọi $X$ đều là nghiệm.<br><b>Sai:</b> Nếu $\\det A = 0$ thì hệ có vô số nghiệm. Hệ $x + y = 1$, $x + y = 2$ có $\\det A = 0$ nhưng vô nghiệm.<br><b>Sai:</b> Nếu hệ có nghiệm thì $\\det A \\ne 0$. Hệ $x + y = 1$, $2x + 2y = 2$ có nghiệm mà $\\det A = 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}5 & 3 & 3 & 3 \\\\ 3 & 5 & 3 & 3 \\\\ 3 & 3 & 5 & 3 \\\\ 3 & 3 & 3 & 5\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$112$.",
    "$16$.",
    "$28$.",
    "$544$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1 + h_2 + h_3 + h_4$: hàng 1 trở thành $(14;14;14;14)$, rút $14$ ra ngoài định thức<br>$h_i \\to h_i - (3)h_1\\ (i = 2,3,4)$: được ma trận tam giác có đường chéo $1;\\ 2;\\ 2;\\ 2$<br>$\\det A = (14)\\cdot(2)^3 = 112$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\sin 2x - 2x\\cos 2x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{8}{3}$.",
    "$\\dfrac{4}{3}$.",
    "$4$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 2x$: $\\sin u = u - \\dfrac{u^3}{6} + o(u^3),\\quad \\cos u = 1 - \\dfrac{u^2}{2} + o(u^2)$<br>$\\sin u - u\\cos u = \\left(u - \\dfrac{u^3}{6}\\right) - \\left(u - \\dfrac{u^3}{2}\\right) + o(u^3) = \\dfrac{u^3}{3} + o(u^3)$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(2x)^3}{3x^3} = \\dfrac{8}{3} = \\dfrac{8}{3}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} - 5 x + 6}{x^{2} - 4}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$y = \\dfrac{\\left(x - 3\\right) \\left(x - 2\\right)}{\\left(x - 2\\right) \\left(x + 2\\right)}$<br>Có tiệm cận đứng $x = -2$, tiệm cận ngang $y = 1$ (tại $x = 2$ giới hạn hữu hạn nên không có tiệm cận)<br>Tổng cộng: $2$ đường tiệm cận",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = (1 + x)\\sqrt{1 + 3x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$\\dfrac{9}{16}$.",
    "$\\dfrac{3}{8}$.",
    "$\\dfrac{27}{8}$.",
    "$- \\dfrac{9}{16}$."
   ],
   "answer": 0,
   "explain": "$x + 1 = 1 + x + o(x^{3})$<br>$\\sqrt{3 x + 1} = 1 + \\dfrac{3}{2}x - \\dfrac{9}{8}x^{2} + \\dfrac{27}{16}x^{3} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + \\dfrac{5}{2}x + \\dfrac{3}{8}x^{2} + \\dfrac{9}{16}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{9}{16}$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm số $f(x,y,z) = x y z + z^{2}$. Đạo hàm của $f$ tại điểm $M(1;1;2)$ theo hướng của véc tơ $\\vec l = (2;3;6)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{40}{7}$.",
    "$40$.",
    "$9$.",
    "$- \\dfrac{40}{7}$."
   ],
   "answer": 0,
   "explain": "$f'_x = y z,\\quad f'_y = x z,\\quad f'_z = x y + 2 z$<br>$\\nabla f(M) = (2;2;5)$<br>$|\\vec l| = \\sqrt{49} = 7$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{40}{7} = \\dfrac{40}{7}$",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Người ta tính thể tích $V = \\pi r^2h$ của một bồn chứa hình trụ từ hai đại lượng đo được. Biết bán kính đáy $r$ được đo với sai số tương đối không quá 1% và chiều cao $h$ với sai số tương đối không quá 0,5%. Dùng vi phân toàn phần của $\\ln V$, sai số tương đối lớn nhất của $V$ xấp xỉ bằng",
   "options": [
    "2,5%.",
    "1,5%.",
    "1%.",
    "5%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln V = \\pm2\\ln u \\pm 1\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta V}{V} \\le 2\\cdot\\dfrac{\\Delta u}{u} + 1\\cdot\\dfrac{\\Delta v}{v}$<br>$= 2\\cdot1\\% + 1\\cdot0{,}5\\% = 2{,}5\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị lớn nhất của hàm số $f(x,y) = 8 x + 15 y$ với điều kiện $x^2 + y^2 = 4$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$34$.",
    "$17$.",
    "$46$.",
    "$68$."
   ],
   "answer": 0,
   "explain": "$L = 8 x + 15 y - \\lambda(x^2 + y^2 - 4)$<br>$L'_x = 8 - 2\\lambda x = 0,\\quad L'_y = 15 - 2\\lambda y = 0 \\Rightarrow x = \\dfrac{8}{2\\lambda},\\ y = \\dfrac{15}{2\\lambda}$<br>Thay vào ràng buộc: $\\dfrac{289}{4\\lambda^2} = 4 \\Rightarrow \\lambda = \\pm\\dfrac{17}{4}$<br>$\\lambda > 0$: $(x;y) = \\left(\\dfrac{16}{17};\\dfrac{30}{17}\\right)$, $f_{\\max} = 34$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(n!)^2}{(2n)!}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\sqrt[n]{n}}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\sin\\dfrac1n$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\dfrac{u_{n+1}}{u_n} = \\dfrac{(n+1)^2}{(2n+1)(2n+2)} \\to \\dfrac14 < 1$ $\\Rightarrow$ hội tụ<br>Chuỗi thứ 2: $u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 3: $\\sqrt[n]{n} \\to 1 \\Rightarrow u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 4: $u_n \\sim \\dfrac1n$ $\\Rightarrow$ phân kỳ<br>Số chuỗi phân kỳ: $3$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{2n+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n(n+1)}{3n-1}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$. Có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\frac{1}{2n+1} \\downarrow 0$ (Leibniz), $\\frac{1}{2n+1} \\sim \\frac{1}{2n}$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 2: $\\frac1n \\downarrow 0$ (Leibniz), $\\sum\\frac1n$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 3: $|u_n| \\to \\frac13 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 4: $|u_n| \\sim \\frac{1}{2n^2}$ $\\Rightarrow$ hội tụ tuyệt đối<br>Số chuỗi hội tụ: $3$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân toàn phần?",
   "options": [
    "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$.",
    "$(x^2 + y)dx + (y - x)dy = 0$.",
    "$(x + y)dx + (y - x)dy = 0$.",
    "$y\\,dx - x\\,dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — Điều kiện $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$ đối với $P\\,dx + Q\\,dy = 0$: $\\dfrac{\\partial P}{\\partial y} = 2x$, $\\dfrac{\\partial Q}{\\partial x} = 2x$<br><b>Sai:</b> $(x^2 + y)dx + (y - x)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau<br><b>Sai:</b> $(x + y)dx + (y - x)dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau<br><b>Sai:</b> $y\\,dx - x\\,dy = 0$ — $\\dfrac{\\partial P}{\\partial y} = 1$, $\\dfrac{\\partial Q}{\\partial x} = -1$, hai đạo hàm riêng khác nhau"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình Bernoulli $y' + \\dfrac{y}{x} = xy^2$ $(x > 0)$ thỏa mãn $y(1) = \\dfrac{1}{2}$. Bằng phép đặt $z = \\dfrac1y$ để đưa về phương trình tuyến tính, giá trị của $y(2)$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{1}{4}$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Đặt $z = \\dfrac1y \\Rightarrow z' = -\\dfrac{y'}{y^2}$; chia phương trình cho $-y^2$:<br>$z' - \\dfrac{z}{x} = - x$<br>$\\left(\\dfrac{z}{x}\\right)' = -1 \\Rightarrow z = x(C - x)$<br>$y(1) = \\dfrac{1}{C - 1} = \\dfrac{1}{2} \\Rightarrow C = 3$<br>$y(2) = \\dfrac{1}{2(3 - 2)} = \\dfrac{1}{2}$",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một hồ nuôi có sức chứa tối đa 900 con cá. Số cá $P(t)$ trong hồ sau $t$ tháng thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{900}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 100$. Biết nghiệm có dạng $P(t) = \\dfrac{900}{1 + Ae^{-kt}}$. Số cá trong hồ sau 6 tháng bằng",
   "options": [
    "$450$.",
    "$800$.",
    "$300$.",
    "$451$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{900}{1 + A} = 100 \\Rightarrow A = 8$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{2}\\cdot6} = 2^{-3} = \\dfrac{1}{8}$<br>$P(6) = \\dfrac{900}{1 + \\frac{8}{8}} = 450$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 4e^{-x}$ với điều kiện $y(0) = 1;\\ y'(0) = 0$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{4}{e}$.",
    "$\\dfrac{2}{e}$.",
    "$\\dfrac{6}{e}$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{-x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = - C_{1} + C_2 = 0 \\Rightarrow C_2 = 1$<br>$y(1) = (1 + (1) + 2)e^{-1} = \\dfrac{4}{e}$",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 4,\\ y \\ge x,\\ x \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{1}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>Điều kiện $y \\ge x,\\ x \\ge 0$ ứng với $\\pi/4 \\le \\varphi \\le \\pi/2$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $D$ là miền phẳng đóng, bị chặn, có diện tích $S > 0$ và $f$ là hàm liên tục trên $D$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\displaystyle\\iint_D 1\\,dxdy = S$.",
    "Nếu $\\displaystyle\\iint_D f\\,dxdy = 0$ thì $f = 0$ trên $D$.",
    "$\\displaystyle\\iint_D f\\,dxdy \\ge 0$ với mọi $f$.",
    "Nếu $D$ đối xứng qua trục $Oy$ thì $\\displaystyle\\iint_D f\\,dxdy = 0$ với mọi $f$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\displaystyle\\iint_D 1\\,dxdy = S$. Tích phân hai lớp của hàm hằng $1$ chính là diện tích của miền.<br><b>Sai:</b> Nếu $\\displaystyle\\iint_D f\\,dxdy = 0$ thì $f = 0$ trên $D$. $f = x$ trên hình tròn tâm $O$ có tích phân bằng $0$ mà không đồng nhất bằng $0$.<br><b>Sai:</b> $\\displaystyle\\iint_D f\\,dxdy \\ge 0$ với mọi $f$. $f = -1$ cho kết quả $-S < 0$.<br><b>Sai:</b> Nếu $D$ đối xứng qua trục $Oy$ thì $\\displaystyle\\iint_D f\\,dxdy = 0$ với mọi $f$. Chỉ đúng khi $f$ lẻ theo biến $x$; $f = 1$ cho kết quả $S$."
  },
  {
   "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1500 khách, tổng số không đổi. Mỗi tháng có 40% khách quen của X chuyển sang Y và 20% khách quen của Y chuyển sang X. Hiện tại X có 750 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$500$.",
    "$1000$.",
    "$750$.",
    "$600$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 20\\%\\cdot(1500 - x)$<br>$60x = 30000 \\Rightarrow x = 500$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 3 & 3 \\\\ 3 & m & 3 \\\\ 3 & 3 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = -6$.",
    "$m = 3$.",
    "$m \\ne 3$ và $m \\ne -6$.",
    "$m = -6$ hoặc $m = 3$."
   ],
   "answer": 0,
   "explain": "$\\det A = \\left(m - 3\\right)^{2} \\left(m + 6\\right)$ nên $\\operatorname{rank}A = 3 \\Leftrightarrow m \\ne 3$ và $m \\ne -6$<br>Với $m = 3$: ba hàng của $A$ bằng nhau và khác không nên $\\operatorname{rank}A = 1$<br>Với $m = -6$: tổng ba hàng bằng véc tơ không, hai hàng đầu không tỉ lệ nên $\\operatorname{rank}A = 2$<br>Vậy hạng của $A$ bằng 2 $\\Leftrightarrow m = -6$",
   "note": "$\\det A = 0$ mới cho biết hạng nhỏ hơn 3; phải thay từng giá trị $m$ để biết hạng bằng 1 hay 2."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}2 & 1 \\\\ 3 & 2\\end{pmatrix}$ và $B = \\begin{pmatrix}-4 & -2 \\\\ -1 & -1\\end{pmatrix}$. Ma trận $X$ thỏa mãn $X.A = B$ là",
   "options": [
    "$\\begin{pmatrix}-2 & 0 \\\\ 1 & -1\\end{pmatrix}$.",
    "$\\begin{pmatrix}-7 & -3 \\\\ 10 & 4\\end{pmatrix}$.",
    "$\\begin{pmatrix}-5 & 2 \\\\ -1 & 0\\end{pmatrix}$.",
    "$\\begin{pmatrix}-2 & 1 \\\\ 0 & -1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$X = BA^{-1}$ (nhân $A^{-1}$ về bên phải); kết quả $X = \\begin{pmatrix}-2 & 0 \\\\ 1 & -1\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y + z = 0\\\\ 2x + my + 2z = 0\\\\ x + 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$5$.",
    "$-1$.",
    "$-2$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + m - 2 = \\left(m - 1\\right) \\left(m + 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -2$ hoặc $m = 1$<br>Giá trị cần tìm: $5$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to -2}\\dfrac{x^3 + ax + b}{\\left(x + 2\\right)^{2}} = L$ với $L$ là một số hữu hạn. Giá trị của $b - a$ bằng",
   "options": [
    "$-4$.",
    "$-28$.",
    "$-6$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Mẫu số có nghiệm kép $x = -2$ nên tử số $g(x) = x^3 + ax + b$ phải thỏa mãn $g(-2) = 0$ và $g'(-2) = 0$<br>$g'(x) = 3x^2 + a \\Rightarrow a = -12$; $g(-2) = 0 \\Rightarrow b = -16$<br>$x^3 - 12 x - 16 = \\left(x - 4\\right) \\left(x + 2\\right)^{2}$ nên $L = -6$<br>$b - a = -4$",
   "note": "Mẫu có nghiệm kép nên tử cũng phải có nghiệm kép tại đó: $g(x_0) = g'(x_0) = 0$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}e^{4x} & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$5$.",
    "$8$.",
    "$21$.",
    "$12$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x) = e^{4 x}$: $g(0) = 1,\\ g'(0) = 4,\\ g''(0) = 16$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 1,\\ b = 4,\\ 2a = 16 \\Rightarrow a = 8$<br>$a - b + d = 5$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Một đoạn đường ống uốn theo đường cong $y = \\dfrac23x^{3/2}$ với $0 \\le x \\le 8$ (đơn vị: mét). Dùng công thức độ dài cung $L = \\displaystyle\\int_a^b\\sqrt{1 + (y')^2}\\,dx$, độ dài đoạn ống bằng",
   "options": [
    "$\\dfrac{52}{3}$ m.",
    "$18$ m.",
    "$8$ m.",
    "$\\dfrac{26}{3}$ m."
   ],
   "answer": 0,
   "explain": "$y' = \\sqrt{x} \\Rightarrow 1 + (y')^2 = 1 + x$<br>$L = \\displaystyle\\int_0^{8}\\sqrt{1 + x}\\,dx = \\left[\\dfrac23(1 + x)^{3/2}\\right]_0^{8}$<br>$= \\dfrac23\\left(9^{3/2} - 1\\right) = \\dfrac{52}{3}$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = 3 p_{1} - p_{2} + 35\\\\ s_2 = - p_{1} + 3 p_{2} - p_{3} + 10\\\\ s_3 = p_{2} + 2 p_{3} - 5\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = - p_{1} + p_{2} + p_{3} + 30\\\\ d_2 = p_{1} - p_{2} + p_{3} + 20\\\\ d_3 = 70 - 2 p_{3}\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Gọi $p_1^*, p_2^*, p_3^*$ là các mức giá cân bằng, giá trị của $p_1^* + p_2^* + p_3^*$ bằng",
   "options": [
    "$40$.",
    "$120$.",
    "$45$.",
    "$35$."
   ],
   "answer": 0,
   "explain": "Giải hệ $s_i = d_i$ được giá cân bằng $(10;15;15)$, lượng cung (cầu) tương ứng $(50;30;40)$<br>Kết quả: $40$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{n+1}{2^n}$ bằng<span class=\"q-hint\">Gợi ý: đạo hàm từng số hạng chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty} x^{n+1}$.</span>",
   "options": [
    "$4$.",
    "$2$.",
    "$8$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}x^{n+1} = \\dfrac{x}{1-x} \\Rightarrow \\sum_{n\\ge0}(n+1)x^n = \\left(\\dfrac{x}{1-x}\\right)' = \\dfrac{1}{(1-x)^2}$<br>$x = \\dfrac{1}{2}$: $\\dfrac{1}{\\left(\\frac{1}{2}\\right)^2} = 4$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{2^{n+1} + 3^n}{4^n} = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$). Chú ý chỉ số bắt đầu của chuỗi, giá trị của $a + b$ bằng",
   "options": [
    "$17$.",
    "$9$.",
    "$15$.",
    "$19$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{2^{n+1}}{4^n} = 2\\sum_{n=2}^{+\\infty}\\left(\\dfrac{2}{4}\\right)^n = 2\\cdot\\dfrac{\\left(\\frac{2}{4}\\right)^{2}}{1 - \\frac{2}{4}} = 1$<br>$\\displaystyle\\sum_{n=2}^{+\\infty}\\left(\\dfrac{3}{4}\\right)^n = \\dfrac{\\left(\\frac{3}{4}\\right)^{2}}{1 - \\frac{3}{4}} = \\dfrac{9}{4}$<br>Tổng: $1 + \\dfrac{9}{4} = \\dfrac{13}{4} \\Rightarrow a + b = 17$",
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
   "explain": "$\\displaystyle\\sum_{n\\ge1}\\dfrac{x^n}{n} = -\\ln(1 - x)$ tại $x = \\dfrac15$<br>Vậy tổng của chuỗi bằng $\\ln\\left(\\dfrac{5}{4}\\right)$",
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
   "explain": "Tách biến: $\\dfrac{dy}{y^2} = \\dfrac{dx}{x^2} \\Rightarrow -\\dfrac1y = -\\dfrac1x + C$<br>$y(1) = \\dfrac{1}{2} \\Rightarrow y = \\dfrac{x}{x + 1}$<br>$y\\left(3\\right) = \\dfrac{3}{4}$",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + 3y = 2e^{-3x}$ thỏa mãn $y(0) = 3$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{5}{e^{3}}$.",
    "$\\dfrac{3}{e^{3}}$.",
    "$\\dfrac{2}{e^{3}}$.",
    "$5 e^{3}$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{3x}$: $\\left(ye^{3x}\\right)' = 2$<br>$ye^{3x} = 2x + C \\Rightarrow y = (2x + C)e^{-3x}$<br>$y(0) = C = 3 \\Rightarrow y(1) = (2 + 3)e^{-3} = \\dfrac{5}{e^{3}}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một vật khối lượng 5 kg rơi từ trạng thái nghỉ, chịu lực cản không khí tỉ lệ với vận tốc với hệ số $k = 0{,}5\\,kg/s$, tức vận tốc $v(t)$ thỏa mãn $5v' = 5g - 0{,}5v$ (lấy $g = 9{,}8\\,m/s^2$). Vận tốc của vật sau 10 giây (làm tròn đến hàng phần chục, đơn vị m/s) là",
   "options": [
    "61,9.",
    "98,0.",
    "36,1.",
    "31,0."
   ],
   "answer": 0,
   "explain": "$v' + \\dfrac{0{,}5}{5}v = 9{,}8$ (tuyến tính cấp một), $v(0) = 0$<br>$v(t) = \\dfrac{mg}{k}\\left(1 - e^{-kt/m}\\right) = 98\\left(1 - e^{-0{,}1t}\\right)$<br>$v(10) = 98\\left(1 - e^{-1}\\right) \\approx 61{,}9$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Thể tích của vật thể giới hạn bởi mặt nón $z = 3 - \\sqrt{x^2 + y^2}$ và mặt phẳng $z = 0$ được tính bằng $V = \\displaystyle\\iint_D z\\,dxdy$, với $D$ là hình chiếu của vật thể lên mặt phẳng $Oxy$. Giá trị của $V$ bằng",
   "options": [
    "$9 \\pi$.",
    "$18 \\pi$.",
    "$\\dfrac{9 \\pi}{2}$.",
    "$\\dfrac{27 \\pi}{2}$."
   ],
   "answer": 0,
   "explain": "$z \\ge 0 \\Leftrightarrow x^2 + y^2 \\le 9$ nên $D$ là hình tròn bán kính $3$<br>$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{3}\\left(3 - r\\right)r\\,dr = 2\\pi\\left[- \\dfrac{r^{3}}{3} + \\dfrac{3 r^{2}}{2}\\right]_0^{3}$<br>$V = 2\\pi\\cdot\\dfrac{9}{2} = 9 \\pi$",
   "note": "Miền $D$ là hình chiếu của vật thể: nơi mặt cong cắt mặt phẳng $z = 0$."
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
   "q": "Cho $L$ là cung parabol $y = \\dfrac{x^2}{2}$ đi từ $O(0;0)$ đến $A\\left(\\sqrt{35};\\dfrac{35}{2}\\right)$. Giá trị của tích phân $\\displaystyle\\int_L x\\,ds$ bằng",
   "options": [
    "$\\dfrac{215}{3}$.",
    "$72$.",
    "$\\dfrac{215}{6}$.",
    "$\\dfrac{215}{2}$."
   ],
   "answer": 0,
   "explain": "$ds = \\sqrt{1 + x^2}\\,dx$; $\\displaystyle\\int_0^{\\sqrt{35}} x\\sqrt{1 + x^2}\\,dx = \\dfrac{(1 + x^2)^{3/2}}{3}\\Big|_0^{\\sqrt{35}}$<br>Kết quả: $\\dfrac{215}{3}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(2;0),\\ B(0;3)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
   "options": [
    "$2$.",
    "$-2$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{3 - \\dfrac{3 x}{2}}\\left(x\\right)dy$<br>$I = 2$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ -2 & -1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 2$. Kí hiệu $f(A) = A^2 - A + 2I$.",
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
      "$3$.",
      "$-1$.",
      "$5$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$A^2 = \\begin{pmatrix}-1 & 0 \\\\ 0 & -1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}0 & -1 \\\\ 2 & 2\\end{pmatrix}$<br>Tổng các phần tử: $3$"
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
     "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}-1 & -1 \\\\ 2 & 1\\end{pmatrix}$<br>Tổng các phần tử: $1$",
     "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$."
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
   "q": "Cho ma trận $A = \\begin{pmatrix}0 & 4 & -1 \\\\ 1 & 3 & 2 \\\\ 1 & 3 & 2\\end{pmatrix}$ và $A^T$ là ma trận chuyển vị của $A$. Tính $\\det\\left(A + A^T\\right)$.",
   "answer": [
    "-100"
   ],
   "explain": "$A + A^T = \\begin{pmatrix}0 & 5 & 0 \\\\ 5 & 6 & 5 \\\\ 0 & 5 & 4\\end{pmatrix}$<br>$\\det\\left(A + A^T\\right) = -100$",
   "note": "$A + A^T$ đối xứng; $A - A^T$ phản đối xứng, và ma trận phản đối xứng cấp lẻ luôn có định thức bằng 0."
  },
  {
   "q": "Tìm giá trị nhỏ nhất của hàm số $f(x,y,z) = x^2 + y^2 + z^2$ với điều kiện $2 x + 3 y + 6 z = 49$.",
   "answer": [
    "49"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, $(x;y;z) = t(2;3;6)$ với $t = \\dfrac{49}{49}$; $f_{\\min} = \\dfrac{49^2}{49} = 49$<br>Đáp số: $49$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Biết chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(2^n + 7^n)x^n}{n^2}$ có bán kính hội tụ bằng $\\dfrac{a}{b}$, với $\\dfrac{a}{b}$ là phân số tối giản, $a, b \\in \\mathbb{N}^*$. Tính $a + b$.",
   "answer": [
    "8"
   ],
   "explain": "$\\sqrt[n]{|a_n|} \\to 7$ nên $R = \\dfrac{1}{7}$<br>Đáp số: $8$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -8x - 4$ với điều kiện $y(0) = 3;\\ y'(0) = 6$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "18"
   ],
   "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -8x - 4 \\Rightarrow y^* = 2x + 1$<br>$y = 2x + 1 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 3,\\ y'(0) = 6 \\Rightarrow C_1 = 2,\\ C_2 = 0$<br>$y(1) = 3 + 2e^{2} \\approx 17{,}78$<br>Đáp số: $18$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ."
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
