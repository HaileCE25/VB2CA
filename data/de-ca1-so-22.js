// ĐỀ SỐ 22 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-22",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 22",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Bản lĩnh và phẩm chất chính trị",
  "prompt": "Mỗi lần mở mạng xã hội, Nam lại thấy bạn bè cùng tuổi đăng ảnh mua nhà, mua xe, nhận học bổng, đi du lịch nước ngoài. Nam bắt đầu tô vẽ cuộc sống của mình trên mạng: vay tiền để chụp ảnh ở những nơi sang trọng, nói quá về công việc. Càng nhiều lượt thích, Nam càng thấy mệt mỏi và sợ bị phát hiện.",
  "source": "(Tình huống giả định)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về áp lực “phải bằng bạn bằng bè” trong câu chuyện trên và về bản lĩnh sống trung thực, sống đúng với giá trị của mình.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-2;1)$ và $v = (m;m;-3)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
   "options": [
    "$3$.",
    "$8$.",
    "$5$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = m^{2} - 2 m - 3 = \\left(m - 3\\right) \\left(m + 1\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -1 < m < 3$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $3$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(6;-2),\\ u_2(1;0),\\ u_3(-1;0),\\ u_4(2;-1),\\ u_5(3;-1)\\}$. Có bao nhiêu hệ con gồm đúng 2 véc tơ của $S$ là cơ sở của $\\mathbb{R}^2$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$8$.",
    "$10$.",
    "$9$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "Có $C_5^2 = 10$ hệ con gồm 2 véc tơ, trong đó 2 hệ phụ thuộc tuyến tính<br>Kết quả: $8$",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 0 & -1 & 1 & -2 \\\\ -1 & -1 & -1 & -1 & 3 \\\\ -1 & 2 & -1 & 3 & 1 \\\\ 5 & 2 & -3 & 5 & -3\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Biến đổi sơ cấp trên hàng: $A \\to \\begin{pmatrix}3 & 0 & -1 & 1 & -2 \\\\ 0 & -3 & -4 & -2 & 7 \\\\ 0 & 0 & 36 & -18 & -45 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}A = 3$<br>Số chiều không gian nghiệm $= 5 - 3 = 2$",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}0 & -3 \\\\ 3 & -3\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x\\cdot y$ bằng",
   "options": [
    "$27$.",
    "$6$.",
    "$-27$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}-9 & 9 \\\\ -9 & 0\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = -3$<br>So sánh phần tử hàng 1, cột 1: $-9 = -3\\cdot(0) + y \\Rightarrow y = -9$<br>$x\\cdot y = 27$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Định thức của ma trận $M = \\begin{pmatrix}3 & 3 & 0 & 0 \\\\ 0 & 1 & 0 & 0 \\\\ 4 & 3 & 3 & -2 \\\\ -3 & -2 & 2 & 3\\end{pmatrix}$ bằng<span class=\"q-hint\">Gợi ý: $M$ có dạng tam giác khối nên $\\det M$ bằng tích định thức của hai khối vuông cấp 2 nằm trên đường chéo.</span>",
   "options": [
    "$39$.",
    "$16$.",
    "$38$.",
    "$-39$."
   ],
   "answer": 0,
   "explain": "Khối trên đường chéo: $M_1 = \\begin{pmatrix}3 & 3 \\\\ 0 & 1\\end{pmatrix},\\ M_2 = \\begin{pmatrix}3 & -2 \\\\ 2 & 3\\end{pmatrix}$<br>$\\det M_1 = 3,\\quad \\det M_2 = 13$<br>$\\det M = 3\\cdot(13) = 39$",
   "note": "Chỉ áp dụng khi một khối ngoài đường chéo toàn số 0; khối còn lại không ảnh hưởng tới định thức."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $A$ có hai hàng tỉ lệ với nhau thì $\\det A = 0$.",
    "$\\det(-A) = -\\det A$ với mọi $n$.",
    "$\\det(A^T) = -\\det A$.",
    "Nếu $\\det A = 0$ thì $A$ có một hàng bằng không."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $A$ có hai hàng tỉ lệ với nhau thì $\\det A = 0$. Lấy một hàng trừ đi bội thích hợp của hàng kia thì được một hàng toàn số 0.<br><b>Sai:</b> $\\det(-A) = -\\det A$ với mọi $n$. $\\det(-A) = (-1)^n\\det A$, bằng $\\det A$ khi $n$ chẵn.<br><b>Sai:</b> $\\det(A^T) = -\\det A$. $\\det(A^T) = \\det A$.<br><b>Sai:</b> Nếu $\\det A = 0$ thì $A$ có một hàng bằng không. $A = \\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$ có $\\det A = 0$ mà không có hàng nào bằng không."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}-1 & -1 & -3 & -2 \\\\ 3 & 2 & -2 & -2 \\\\ 0 & 0 & 3 & 4 \\\\ 0 & 0 & 4 & 3\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$-7$.",
    "$-6$.",
    "$-9$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$\\det P = 1,\\quad \\det R = -7$<br>$\\det A = \\det P\\cdot\\det R = (1)\\cdot(-7) = -7$",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{3x - \\arctan 3x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$9$.",
    "$\\dfrac{9}{2}$.",
    "$27$.",
    "$-9$."
   ],
   "answer": 0,
   "explain": "Đặt $u = 3x$: $\\arctan u = u - \\dfrac{u^3}{3} + o(u^3)$<br>$u - \\arctan u = \\dfrac{u^3}{3} + o(u^3) = \\dfrac{27x^3}{3} + o(x^3)$<br>$\\lim = \\dfrac{27}{3} = 9$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} - 6 x^{2} + 8 x}{x^{2} + x - 6}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "$y = \\dfrac{x \\left(x - 4\\right) \\left(x - 2\\right)}{\\left(x - 2\\right) \\left(x + 3\\right)}$<br>Có tiệm cận đứng $x = -3$, một tiệm cận xiên (tại $x = 2$ giới hạn hữu hạn; bậc tử hơn bậc mẫu 1 đơn vị nên có tiệm cận xiên, không có tiệm cận ngang)<br>Tổng cộng: $2$ đường tiệm cận",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{x}\\cos 2x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$- \\dfrac{11}{6}$.",
    "$- \\dfrac{3}{2}$.",
    "$-11$.",
    "$\\dfrac{11}{6}$."
   ],
   "answer": 0,
   "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\cos{\\left(2 x \\right)} = 1 - 2x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + x - \\dfrac{3}{2}x^{2} - \\dfrac{11}{6}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{11}{6}$",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{3} - y^{2}$. Tại điểm $M(1;2)$, hàm số tăng nhanh nhất theo hướng của véc tơ gradient $\\nabla f(M) = (f'_x(M); f'_y(M))$ và tốc độ tăng lớn nhất bằng $|\\nabla f(M)|$. Giá trị của $|\\nabla f(M)|$ bằng",
   "options": [
    "$5$.",
    "$25$.",
    "$7$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2},\\quad f'_y = - 2 y$<br>$\\nabla f(M) = (3;-4)$<br>$|\\nabla f(M)| = \\sqrt{(3)^2 + (-4)^2} = \\sqrt{25} = 5$",
   "note": "Tốc độ tăng lớn nhất là độ dài của gradient, không phải tổng hai đạo hàm riêng."
  },
  {
   "q": "Người ta tính động năng $W = \\dfrac12mv^2$ của một vật từ hai đại lượng đo được. Biết khối lượng $m$ được đo với sai số tương đối không quá 0,5% và vận tốc $v$ với sai số tương đối không quá 0,5%. Dùng vi phân toàn phần của $\\ln W$, sai số tương đối lớn nhất của $W$ xấp xỉ bằng",
   "options": [
    "1,5%.",
    "1%.",
    "0,5%.",
    "3%."
   ],
   "answer": 0,
   "explain": "Gọi $u, v$ là hai đại lượng đo; lấy lôgarit: $\\ln W = \\pm1\\ln u \\pm 2\\ln v + \\text{hằng số}$<br>Vi phân hai vế, lấy trị tuyệt đối từng số hạng: $\\dfrac{\\Delta W}{W} \\le 1\\cdot\\dfrac{\\Delta u}{u} + 2\\cdot\\dfrac{\\Delta v}{v}$<br>$= 1\\cdot0{,}5\\% + 2\\cdot0{,}5\\% = 1{,}5\\%$",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Một mảnh vườn hình chữ nhật có hai kích thước $x > 0,\\ y > 0$ (mét) thỏa mãn ràng buộc về vật liệu rào $x + 4 y = 8$. Diện tích $S = xy$ lớn nhất của mảnh vườn bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$4$.",
    "$8$.",
    "$16$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$L = xy - \\lambda(x + 4 y - 8)$<br>$L'_x = y - \\lambda = 0,\\quad L'_y = x - 4 \\lambda = 0 \\Rightarrow y = \\lambda,\\ x = 4 \\lambda$<br>Thay vào ràng buộc: $8 \\lambda = 8 \\Rightarrow \\lambda = 1$<br>$x = 4,\\ y = 1$, $S_{\\max} = 4$",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho $c$ là số nguyên dương. Giá trị lớn nhất của $c$ để chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{c^n}{n^2\\cdot3^n}$ hội tụ là",
   "options": [
    "$3$.",
    "$4$.",
    "$2$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$\\sqrt[n]{u_n} \\to \\dfrac{c}{3}$<br>Hội tụ khi $c < 3$; với $c = 3$ được chuỗi $\\sum\\dfrac{1}{n^2}$ vẫn hội tụ<br>Giá trị nguyên dương lớn nhất: $3$",
   "note": "Khi tỉ số D’Alembert bằng đúng 1 thì tiêu chuẩn không kết luận được: phải xét riêng giá trị biên của $c$."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n^2}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\ln(n+1)}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n!}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$. Có bao nhiêu chuỗi hội tụ tuyệt đối trong bốn chuỗi trên?",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $|u_n| \\to 1 \\ne 0$ $\\Rightarrow$ phân kỳ<br>Chuỗi thứ 2: $\\frac{1}{\\ln(n+1)} \\downarrow 0$ (Leibniz), $\\frac{1}{\\ln(n+1)} > \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 3: $\\frac{|u_{n+1}|}{|u_n|} = \\frac{1}{n+1} \\to 0$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 4: $\\sum\\frac{1}{n^2}$ hội tụ $\\Rightarrow$ hội tụ tuyệt đối<br>Số chuỗi hội tụ tuyệt đối: $2$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân đẳng cấp (thuần nhất) cấp một?",
   "options": [
    "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$.",
    "$y' + y\\tan x = \\cos x$.",
    "$y' - y = xy^2$.",
    "$y' = (1 + x)(1 + y^2)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — Vế phải viết được thành hàm của $\\dfrac{y}{x}$, tức dạng $y' = f\\left(\\dfrac{y}{x}\\right)$<br><b>Sai:</b> $y' + y\\tan x = \\cos x$ — là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' - y = xy^2$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi<br><b>Sai:</b> $y' = (1 + x)(1 + y^2)$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi"
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
   "explain": "Đặt $z = \\dfrac1y \\Rightarrow z' = -\\dfrac{y'}{y^2}$; chia phương trình cho $-y^2$:<br>$z' - \\dfrac{z}{x} = - 3 x$<br>$\\left(\\dfrac{z}{x}\\right)' = -3 \\Rightarrow z = x(C - 3 x)$<br>$y(1) = \\dfrac{1}{C - 3} = \\dfrac{1}{5} \\Rightarrow C = 8$<br>$y(2) = \\dfrac{1}{2(8 - 6)} = \\dfrac{1}{4}$",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một ứng dụng mới được giới thiệu cho 900 học viên của một trường. Số người đã cài đặt $P(t)$ sau $t$ tuần thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{900}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 300$. Biết nghiệm có dạng $P(t) = \\dfrac{900}{1 + Ae^{-kt}}$. Số người đã cài đặt sau 2 tuần bằng",
   "options": [
    "$450$.",
    "$600$.",
    "$300$.",
    "$451$."
   ],
   "answer": 0,
   "explain": "$P(0) = \\dfrac{900}{1 + A} = 300 \\Rightarrow A = 2$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{2}\\cdot2} = 2^{-1} = \\dfrac{1}{2}$<br>$P(2) = \\dfrac{900}{1 + \\frac{2}{2}} = 450$",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 6e^{-x}$ với điều kiện $y(0) = 2;\\ y'(0) = 0$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{7}{e}$.",
    "$\\dfrac{4}{e}$.",
    "$\\dfrac{10}{e}$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{-x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = - C_{1} + C_2 = 0 \\Rightarrow C_2 = 2$<br>$y(1) = (2 + (2) + 3)e^{-1} = \\dfrac{7}{e}$",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ y \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>Điều kiện $y \\le 0$ ứng với $\\pi \\le \\varphi \\le 2\\pi$<br>Jacobian của phép đổi biến bằng $r$: $dxdy = r\\,dr\\,d\\varphi$",
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
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 30% người dùng của X chuyển sang Y và 40% người dùng của Y chuyển sang X. Hiện tại X có 1050 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$1200$.",
    "$900$.",
    "$1050$.",
    "$1155$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 40\\%\\cdot(2100 - x)$<br>$70x = 84000 \\Rightarrow x = 1200$",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (-1;0;3),\\ u_2 = (-1;-2;-1)$ và $v = (4;-3;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$-18$.",
    "$18$.",
    "$-17$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = 2 m + 36$<br>$2 m + 36 = 0 \\Leftrightarrow m = -18$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}0 & 1 \\\\ -1 & 0\\end{pmatrix}$. Mọi ma trận vuông cấp 2 giao hoán với $A$ (tức thỏa mãn $AX = XA$) đều có dạng nào sau đây, với $a, b$ là các số thực tùy ý?",
   "options": [
    "$\\begin{pmatrix}a & b \\\\ -b & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ b & a\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & 0 \\\\ 0 & b\\end{pmatrix}$.",
    "$\\begin{pmatrix}a & b \\\\ 0 & a\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "Đặt $X = \\begin{pmatrix}x & y \\\\ z & t\\end{pmatrix}$<br>$AX = \\begin{pmatrix}z & t \\\\ - x & - y\\end{pmatrix},\\quad XA = \\begin{pmatrix}- y & x \\\\ - t & z\\end{pmatrix}$<br>So sánh từng phần tử: $x = t$ và $z = -y$<br>Vậy $X = \\begin{pmatrix}a & b \\\\ -b & a\\end{pmatrix}$",
   "note": "Đặt $X$ với bốn ẩn, tính $AX$ và $XA$ rồi so sánh từng phần tử."
  },
  {
   "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 3y + z - t = 0\\\\ -2x + 2y - t = 0\\\\ 3x - y + 3z + 2t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
   "options": [
    "$1$.",
    "$3$.",
    "$4$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & 3 & 1 & -1 \\\\ 0 & 8 & 2 & -3 \\\\ 0 & 0 & 20 & 10\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 3$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 3 = 1$",
   "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{e^{4x} - 1 - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a + 2b + 6L$ bằng",
   "options": [
    "$84$.",
    "$\\dfrac{68}{3}$.",
    "$4$.",
    "$\\dfrac{220}{3}$."
   ],
   "answer": 0,
   "explain": "$e^{u} = 1 + u + \\dfrac{u^2}{2} + \\dfrac{u^3}{6} + o(u^3)$, $u = 4x$<br>Tử số $= (4 - a)x + (8 - b)x^2 + \\dfrac{32}{3}x^3 + o(x^3)$<br>Giới hạn hữu hạn $\\Leftrightarrow a = 4,\\ b = 8$; khi đó $L = \\dfrac{32}{3}$<br>Giá trị cần tính: $84$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
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
   "explain": "Nhánh trái $g(x) = \\cos{\\left(2 x \\right)}$: $g(0) = 1,\\ g'(0) = 0,\\ g''(0) = -4$<br>Nhánh phải $h(x) = ax^2 + bx + d$: $h(0) = d,\\ h'(0) = b,\\ h''(0) = 2a$<br>$d = 1,\\ b = 0,\\ 2a = -4 \\Rightarrow a = -2$<br>$a - b + d = -1$",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} e^{-x}\\sin 2x\\,dx$ bằng",
   "options": [
    "$\\dfrac{2}{5}$.",
    "$\\dfrac{1}{5}$.",
    "$2$.",
    "$\\dfrac{1}{3}$."
   ],
   "answer": 0,
   "explain": "Từng phần hai lần: $I = \\left[-\\dfrac{1}{2}e^{-x}\\cos 2x\\right]_0^{+\\infty} - \\dfrac{1}{2}\\displaystyle\\int_0^{+\\infty}e^{-x}\\cos 2x\\,dx = \\dfrac{1}{2} - \\dfrac{1}{4}I$<br>$I\\left(1 + \\dfrac{1}{4}\\right) = \\dfrac{1}{2} \\Rightarrow I = \\dfrac{2}{5}$",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $3, 2, 1$ đơn vị nguyên liệu I; $1, 3, 3$ đơn vị nguyên liệu II và $3, 3, 2$ đơn vị nguyên liệu III. Kho hiện có $160$, $150$ và $200$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$70$.",
    "$80$.",
    "$60$.",
    "$51$."
   ],
   "answer": 0,
   "explain": "Gọi $x, y, z$ là số sản phẩm mỗi loại; giải hệ ba phương trình được $(30;30;10)$<br>Kết quả: $70$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{4n^2 - 1}$ bằng<span class=\"q-hint\">Gợi ý: phân tích số hạng tổng quát thành hiệu để thu gọn tổng riêng.</span>",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$1$.",
    "$\\dfrac{1}{4}$.",
    "$\\dfrac{3}{4}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{4n^2-1} = \\dfrac12\\left(\\dfrac{1}{2n-1} - \\dfrac{1}{2n+1}\\right)$<br>Tổng riêng thu gọn; cho $N \\to +\\infty$: $S = \\dfrac{1}{2}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}6151515\\ldots$ (phần tuần hoàn là 15) bằng $\\dfrac{6}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{15}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$533$.",
    "$127$.",
    "$534$.",
    "$1615$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{15}{10\\cdot100^n} = \\dfrac{15}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{15}{990}$<br>$\\dfrac{6}{10} + \\dfrac{15}{990} = \\dfrac{203}{330} \\Rightarrow a + b = 533$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{n!}$ bằng",
   "options": [
    "$e$.",
    "$e - 1$.",
    "$2 e$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{n}{n!} = \\dfrac{1}{(n-1)!}$ nên tổng bằng $e$<br>Vậy tổng của chuỗi bằng $e$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $xy' = y\\ln y$ thỏa mãn $y(1) = e^{2}$. Giá trị của $y\\left(2\\right)$ bằng",
   "options": [
    "$e^{4}$.",
    "$e^{2}$.",
    "$1 + e^{4}$.",
    "$\\dfrac{e^{4}}{2}$."
   ],
   "answer": 0,
   "explain": "Tách biến: $\\dfrac{dy}{y\\ln y} = \\dfrac{dx}{x} \\Rightarrow \\ln|\\ln y| = \\ln x + C$<br>$y(1) = e^{2} \\Rightarrow y = e^{2 x}$<br>$y\\left(2\\right) = e^{4}$",
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
   "q": "Một tách cà phê có nhiệt độ $100^\\circ C$ được đặt trong phòng có nhiệt độ không đổi $20^\\circ C$. Sau 15 phút, nhiệt độ cà phê là $60^\\circ C$. Theo định luật Newton, tốc độ nguội tỉ lệ với hiệu nhiệt độ giữa cà phê và phòng. Nhiệt độ của cà phê sau 30 phút kể từ lúc đầu (làm tròn đến hàng phần chục, đơn vị $^\\circ C$) là",
   "options": [
    "40,0.",
    "20,0.",
    "43,2.",
    "41,0."
   ],
   "answer": 0,
   "explain": "$T' = -k(T - 20) \\Rightarrow T(t) = 20 + 80e^{-kt}$ (vì $T(0) = 100$)<br>$T(15) = 60 \\Rightarrow e^{-15k} = \\dfrac{40}{80}$<br>$T(30) = 20 + 80\\left(\\dfrac{40}{80}\\right)^{2} \\approx 40{,}0$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 1,\\ 0 \\le x \\le y\\}$. Giá trị của tích phân $\\displaystyle\\iint_D xy\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{1}{16}$.",
    "$\\dfrac{1}{12}$.",
    "$\\dfrac{1}{8}$.",
    "$\\dfrac{1}{32}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 1,\\ \\dfrac{\\pi}{4} \\le \\varphi \\le \\dfrac{\\pi}{2}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{1}\\left(\\dfrac{r^{2} \\sin{\\left(2 \\varphi \\right)}}{2}\\right)r\\,dr = \\int \\dfrac{\\sin{\\left(2 \\varphi \\right)}}{8}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{1}{16}$",
   "note": "Điều kiện về $x, y$ quy định cận của góc $\\varphi$; nên vẽ hình để tránh nhầm góc."
  },
  {
   "q": "Cho $V$ là miền nằm giữa hai mặt cầu $x^2 + y^2 + z^2 = 1$ và $x^2 + y^2 + z^2 = 4$. Giá trị của tích phân $\\displaystyle\\iiint_V \\dfrac{dxdydz}{x^2 + y^2 + z^2}$ bằng",
   "options": [
    "$4 \\pi$.",
    "$2 \\pi$.",
    "$12 \\pi$.",
    "$\\dfrac{28 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi}\\sin\\theta\\,d\\theta\\int_{1}^{2}\\dfrac{\\rho^2}{\\rho^2}\\,d\\rho$<br>$= 2\\pi\\cdot2\\cdot(2 - 1) = 4 \\pi$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $C$ là biên của miền phẳng $D$, lấy theo chiều dương (ngược chiều kim đồng hồ); $P, Q$ có các đạo hàm riêng liên tục. Phát biểu nào sau đây về công thức Green là đúng?",
   "options": [
    "$\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$.",
    "$\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(P'_y - Q'_x\\right)dxdy$.",
    "$\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(P'_x + Q'_y\\right)dxdy$.",
    "Công thức cho cùng một kết quả dù $C$ lấy theo chiều nào."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$. Đây là công thức Green.<br><b>Sai:</b> $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(P'_y - Q'_x\\right)dxdy$. Sai dấu: với $P = 0$, $Q = x$ vế trái bằng diện tích của $D$, còn vế phải bằng số đối của nó.<br><b>Sai:</b> $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(P'_x + Q'_y\\right)dxdy$. Với $P = x$, $Q = 0$ vế trái bằng $0$, vế phải bằng diện tích của $D$.<br><b>Sai:</b> Công thức cho cùng một kết quả dù $C$ lấy theo chiều nào. Đổi chiều lấy tích phân thì tích phân đường loại hai đổi dấu."
  },
  {
   "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 2,\\ 0 \\le y \\le 3$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
   "options": [
    "$6$.",
    "$-6$.",
    "$12$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{3}\\left(x\\right)dy$<br>$I = 6$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + z = -3\\\\ 2y + 2z = -6\\\\ x + 2y + mz = -11\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = 5$, định thức của ma trận $A$ bằng",
     "options": [
      "$4$.",
      "$-6$.",
      "$-4$.",
      "$6$."
     ],
     "answer": 0,
     "explain": "$\\det A = 2 m - 6$<br>Với $m = 5$: $\\det A = 4$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$3$.",
      "$5$.",
      "$-3$.",
      "$6$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 2 m - 6 = 0 \\Leftrightarrow m = 3$"
    },
    {
     "q": "Khi $m = 5$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$-5$.",
      "$-4$.",
      "$5$.",
      "$-2$."
     ],
     "answer": 0,
     "explain": "Với $m = 5$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 4$)<br>$(x_0;y_0;z_0) = (-2;-2;-1)$<br>$x_0 + y_0 + z_0 = -5$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x y^{2} + 2 x$ và điểm $M(2;2)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$14$.",
      "$-2$.",
      "$48$.",
      "$6$."
     ],
     "answer": 0,
     "explain": "$f'_x = y^{2} + 2,\\quad f'_y = 2 x y$<br>$\\nabla f(M) = (6;8) \\Rightarrow p + q = 14$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (4;3)$ bằng",
     "options": [
      "$\\dfrac{48}{5}$.",
      "$48$.",
      "$10$.",
      "$- \\dfrac{48}{5}$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(6)\\cdot(4) + (8)\\cdot(3)}{5} = \\dfrac{48}{5}$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$-16$.",
      "$12$.",
      "$16$.",
      "$40$."
     ],
     "answer": 0,
     "explain": "$z = 12 + (6)(x - 2) + (8)(y - 2)$<br>Cho $x = y = 0$: $z = -16$",
     "note": "Gradient, đạo hàm theo hướng và mặt phẳng tiếp xúc đều dùng chung hai giá trị $f'_x(M)$, $f'_y(M)$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 0 \\\\ 1 & m & 1 \\\\ 0 & 1 & m\\end{pmatrix}$ với $m$ là số nguyên dương. Biết $\\det A = 4$, tìm $m$.",
   "answer": [
    "2"
   ],
   "explain": "$\\det A = m^{3} - 2 m = m \\left(m^{2} - 2\\right)$<br>$m^{3} - 2 m = 4 \\Leftrightarrow \\left(m - 2\\right) \\left(m^{2} + 2 m + 2\\right) = 0$<br>Nghiệm nguyên dương duy nhất: $m = 2$",
   "note": "Lập $\\det A$ theo $m$ rồi giải phương trình; chỉ nhận nghiệm nguyên dương."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 2xy$ với điều kiện $\\dfrac{x^2}{9} + \\dfrac{y^2}{16} = 1$.",
   "answer": [
    "12"
   ],
   "explain": "Đặt $x = 3\\cos t,\\ y = 4\\sin t$: $f = 2\\cdot3\\cdot4\\sin t\\cos t$, lớn nhất bằng $\\dfrac{2\\cdot3\\cdot4}{2} = 12$<br>Đáp số: $12$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(3 x + 1)^{n}}{n^2\\cdot3^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "2"
   ],
   "explain": "Đặt $t = 3 x + 1$: chuỗi $\\sum\\dfrac{t^n}{n^2\\cdot3^n}$ hội tụ khi và chỉ khi $|t| \\le 3$ (tại hai đầu mút là chuỗi $\\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-3 \\le 3 x + 1 \\le 3 \\Leftrightarrow - \\dfrac{4}{3} \\le x \\le \\dfrac{2}{3}$<br>$\\beta - \\alpha = 2$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 5y' + 6y = -2e^{2x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "218"
   ],
   "explain": "$k = 2$ là nghiệm đơn của phương trình đặc trưng nên $y^* = 2xe^{2x}$; $y = 2xe^{2x}$; $y(2) \\approx 218{,}39$<br>Đáp số: $218$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
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
