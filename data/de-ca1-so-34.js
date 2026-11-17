// ĐỀ SỐ 34 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-34",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 34",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lao động và nghề nghiệp",
  "prompt": "Nghị quyết số 68-NQ/TW (tháng 5/2025) của Bộ Chính trị xác định kinh tế tư nhân là một động lực quan trọng nhất của nền kinh tế quốc gia, với mục tiêu đến năm 2030 cả nước có 2 triệu doanh nghiệp hoạt động. Hai người bạn vừa tốt nghiệp đại học có hai lựa chọn khác nhau: An quyết thi vào một vị trí ổn định, với lý do “an cư rồi mới lạc nghiệp”; Bình vay vốn mở một xưởng nhỏ ở quê, chấp nhận khả năng thất bại, với lý do “tuổi trẻ không thử thì bao giờ mới thử”.",
  "source": "(Tình huống giả định; thông tin về Nghị quyết 68-NQ/TW theo báo chí, 2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về hai lựa chọn trên và quan niệm của bản thân về sự “ổn định” trong lao động, nghề nghiệp hiện nay.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-1;1)$ và $v = (m;m;-12)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
   "options": [
    "$6$.",
    "$5$.",
    "$8$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$\\langle u,v\\rangle=(m)(m)+(-1)(m)+(1)(-12)=m^{2} - m - 12=\\left(m - 4\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -3 < m < 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-2, -1, 0, 1, 2, 3\\}$; có $6$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(-1;2),\\ u_2(0;1),\\ u_3(-1;3),\\ u_4(0;3),\\ u_5(-3;6)\\}$. Có bao nhiêu hệ con gồm đúng 2 véc tơ của $S$ là cơ sở của $\\mathbb{R}^2$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$8$.",
    "$10$.",
    "$9$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "Số hệ con cần xét: $C_5^2=10$.<br>$\\det\\begin{pmatrix}-1 & 2\\\\0 & 1\\end{pmatrix}=-1$.<br>$\\det\\begin{pmatrix}-1 & 2\\\\-1 & 3\\end{pmatrix}=-1$.<br>$\\det\\begin{pmatrix}-1 & 2\\\\0 & 3\\end{pmatrix}=-3$.<br>$\\det\\begin{pmatrix}-1 & 2\\\\-3 & 6\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}0 & 1\\\\-1 & 3\\end{pmatrix}=1$.<br>$\\det\\begin{pmatrix}0 & 1\\\\0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}0 & 1\\\\-3 & 6\\end{pmatrix}=3$.<br>$\\det\\begin{pmatrix}-1 & 3\\\\0 & 3\\end{pmatrix}=-3$.<br>$\\det\\begin{pmatrix}-1 & 3\\\\-3 & 6\\end{pmatrix}=3$.<br>$\\det\\begin{pmatrix}0 & 3\\\\-3 & 6\\end{pmatrix}=9$.<br>Hệ là cơ sở khi định thức khác 0; có 8 định thức khác 0 nên có 8 cơ sở.",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 2 & 1 & 3 & -2 \\\\ 0 & 1 & 3 & 0 & 2 \\\\ 0 & 1 & 0 & 0 & 3 \\\\ 3 & 3 & 4 & 3 & 0\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Khử Gauss cho dạng bậc thang: $A \\to \\begin{pmatrix}3 & 2 & 1 & 3 & -2 \\\\ 0 & 1 & 3 & 0 & 2 \\\\ 0 & 0 & -3 & 0 & 1 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$; có 3 hàng khác không nên hạng là 3.<br>Với $5$ ẩn và hạng 3, số ẩn tự do (số chiều hạt nhân) $= 5 - 3 = 2$.",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & 2 \\\\ 3 & 0\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x - y$ bằng",
   "options": [
    "$-3$.",
    "$9$.",
    "$-18$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}15 & 6 \\\\ 9 & 6\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = 3$<br>So sánh phần tử hàng 1, cột 1: $15 = 3\\cdot(3) + y \\Rightarrow y = 6$<br>$x - y = -3$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 2$. Giá trị của $\\det\\left(2A^{-1}A^TA^2\\right)$ bằng",
   "options": [
    "$32$.",
    "$8$.",
    "$-32$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(2A^{-1}A^TA^2\\right) = 2^3\\cdot\\dfrac{1}{\\det A}\\cdot\\det A\\cdot(\\det A)^2$<br>Thay $\\det A = 2$: kết quả $32$",
   "note": "Lỗi hay gặp: quên lũy thừa $k^3$ khi đưa hằng số ra ngoài định thức cấp 3."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp $n \\ge 2$ khả nghịch và $B$ là ma trận nhận được từ $A$ bằng cách nhân hàng thứ nhất với số $k \\ne 0$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$\\det B = k\\det A$ và $B$ khả nghịch.",
    "$\\det B = k^n\\det A$.",
    "$\\det B = \\det A$.",
    "$B$ không khả nghịch."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $\\det B = k\\det A$ và $B$ khả nghịch. Khai triển định thức theo hàng thứ nhất, mỗi số hạng của hàng đó được nhân $k$, nên $\\det B=k\\det A$. Do $k\\ne0$ và $\\det A\\ne0$, tích $k\\det A\\ne0$; vì vậy $B$ khả nghịch.<br><b>Sai:</b> $\\det B = k^n\\det A$. Hệ số $k^n$ chỉ xuất hiện khi nhân cả $n$ hàng với $k$, tức là xét $\\det(kA)$.<br><b>Sai:</b> $\\det B = \\det A$. Chỉ phép cộng bội của hàng khác vào một hàng mới giữ nguyên định thức.<br><b>Sai:</b> $B$ không khả nghịch. $\\det B = k\\det A \\ne 0$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}1 & 1 & -2 & -1 \\\\ 2 & 4 & -1 & -1 \\\\ 0 & 0 & 2 & -2 \\\\ 0 & 0 & 4 & 2\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$24$.",
    "$14$.",
    "$23$.",
    "$-24$."
   ],
   "answer": 0,
   "explain": "$P=\\begin{pmatrix}1 & 1 \\\\ 2 & 4\\end{pmatrix}$, khử hàng được $\\det P=2$; $R=\\begin{pmatrix}2 & -2 \\\\ 4 & 2\\end{pmatrix}$, khử hàng được $\\det R=12$.<br>Khai triển theo cấu trúc khối tam giác: $\\det A=\\det P\\det R=(2)(12)=24$.",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(\\cos 2x)}{\\ln(\\cos 3x)}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$\\dfrac{4}{9}$.",
    "$\\dfrac{2}{3}$.",
    "$1$.",
    "$\\dfrac{9}{4}$."
   ],
   "answer": 0,
   "explain": "$\\cos u=1-\\dfrac{u^2}{2}+o(u^2)$; với $w\\to0$, $\\ln(1+w)=w+o(w)$ nên $\\ln(\\cos u)=-\\dfrac{u^2}{2}+o(u^2)$.<br>Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\\dfrac{\\ln(\\cos Ax)}{\\ln(\\cos bx)}=\\dfrac{-A^2\\frac{x^2}{2}+o(x^2)}{-b^2\\frac{x^2}{2}+o(x^2)}\\to\\dfrac{4}{9}=\\dfrac{4}{9}$.",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} - 13 x - 12}{x^{2} + x - 6}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 4\\right) \\left(x + 1\\right) \\left(x + 3\\right)}{\\left(x - 2\\right) \\left(x + 3\\right)}=\\dfrac{\\left(x - 4\\right) \\left(x + 1\\right)}{x - 2}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-3$, tử cũng bằng $0$ nên nhân tử $(x--3)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=2$..<br>Chia đa thức: $\\dfrac{x^{2} - 3 x - 4}{x - 2}=x - 1+\\dfrac{-6}{x - 2}$. Vì thương có bậc 1, đường thẳng $y=<q>$ là tiệm cận xiên.<br>Số đường tiệm cận: 2.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Cho đường cong $y = x^{2} + x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 2$ cắt trục $Oy$ tại điểm có tung độ bằng",
   "options": [
    "$-4$.",
    "$4$.",
    "$6$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "$y(2) = 6$, $y'(x) = 2 x + 1$, $y'(2) = 5$<br>Tiếp tuyến: $y = 5(x - 2) + 6$<br>Tại $x = 0$: $y = -4$"
  },
  {
   "q": "Cho hàm số $f(x,y,z) = x y + x z + y z$. Đạo hàm của $f$ tại điểm $M(1;2;1)$ theo hướng của véc tơ $\\vec l = (2;-1;2)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$\\dfrac{10}{3}$.",
    "$10$.",
    "$8$.",
    "$- \\dfrac{10}{3}$."
   ],
   "answer": 0,
   "explain": "$f'_x = y + z,\\quad f'_y = x + z,\\quad f'_z = x + y$<br>$\\nabla f(M) = (3;2;3)$<br>$|\\vec l| = \\sqrt{9} = 3$<br>$\\dfrac{\\partial f}{\\partial \\vec l}=\\dfrac{(3)(2)+(2)(-1)+(3)(2)}{3}=\\dfrac{6+-2+6}{3}=\\dfrac{10}{3}=\\dfrac{10}{3}$.",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Cho hàm số $f(x,y)$ có các đạo hàm riêng đến cấp hai trong miền $D$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f''_{xy}$ và $f''_{yx}$ liên tục trong $D$ thì $f''_{xy} = f''_{yx}$ trong $D$.",
    "$f''_{xy} = f'_x\\cdot f'_y$.",
    "$f''_{xx} = \\left(f'_x\\right)^2$.",
    "$f''_{xy} = f''_{xx} + f''_{yy}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f''_{xy}$ và $f''_{yx}$ liên tục trong $D$ thì $f''_{xy} = f''_{yx}$ trong $D$. Đây là định lí Schwarz.<br><b>Sai:</b> $f''_{xy} = f'_x\\cdot f'_y$. $f = xy$ có $f''_{xy} = 1$ còn $f'_x\\cdot f'_y = xy$.<br><b>Sai:</b> $f''_{xx} = \\left(f'_x\\right)^2$. $f = x$ có $f''_{xx} = 0$ còn $\\left(f'_x\\right)^2 = 1$.<br><b>Sai:</b> $f''_{xy} = f''_{xx} + f''_{yy}$. $f = x^2$ có $f''_{xy} = 0$ còn $f''_{xx} + f''_{yy} = 2$."
  },
  {
   "q": "Một mảnh vườn hình chữ nhật có hai kích thước $x > 0,\\ y > 0$ (mét) thỏa mãn ràng buộc về vật liệu rào $2 x + 3 y = 36$. Diện tích $S = xy$ lớn nhất của mảnh vườn bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$54$.",
    "$108$.",
    "$216$.",
    "$324$."
   ],
   "answer": 0,
   "explain": "$L=xy-\\lambda(2x+3y-36)$. $L_x=y-2\\lambda=0$ và $L_y=x-3\\lambda=0$, vì thế $y=2\\lambda$, $x=3\\lambda$.<br>Thay vào ràng buộc: $6\\lambda+6\\lambda=2(2)(3)\\lambda=36$, nên $\\lambda=\\dfrac{36}{2(2)(3)}$.<br>$x=\\dfrac{36}{22}$, $y=\\dfrac{36}{23}$. Vậy $S_{\\max}=xy=\\dfrac{36}{22}\\cdot\\dfrac{36}{23}=\\dfrac{1296}{423}=54$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{3n + 1}{4n + 2}\\right)^{2n}$. Đặt $C = \\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}$, khi đó:",
   "options": [
    "$C = \\dfrac{9}{16}$ và chuỗi hội tụ.",
    "$C = \\dfrac{9}{16}$ và chuỗi phân kỳ.",
    "$C = \\dfrac{3}{4}$ và chuỗi hội tụ.",
    "$C = 1$ và chuỗi hội tụ."
   ],
   "answer": 0,
   "explain": "$u_n=\\left(\\dfrac{3n+1}{4n+2}\\right)^{2n}$; do đó $\\sqrt[n]{u_n}=\\left(\\dfrac{3n+1}{4n+2}\\right)^2\\to\\left(\\dfrac{3}{4}\\right)^2=\\dfrac{9}{16}$<br>$C < 1$ nên theo tiêu chuẩn Cauchy chuỗi hội tụ",
   "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n^2}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n^2}{n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{2^n}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$. Có bao nhiêu chuỗi hội tụ tuyệt đối trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$0$.",
    "$1$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\displaystyle \\sum|u_n|=\\sum1/n^2$ hội tụ ($p=2>1$), nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 2: $|u_n|=n^2/(n^2+1)\\to1\\ne0$, nên phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $\\dfrac{|u_{n+1}|}{|u_n|}=\\dfrac{n+1}{2^{n+1}}\\dfrac{2^n}{n}=\\dfrac{n+1}{2n}\\to1/2<1$, nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 4: $0<1-\\cos(1/n)\\sim1/(2n^2)$; so sánh với $\\sum1/n^2$ cho hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Số chuỗi hội tụ tuyệt đối: $3$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân toàn phần?",
   "options": [
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$.",
    "$(x^2 + y)dx + (y - x)dy = 0$.",
    "$2xy\\,dx + (y^2 - x^2)dy = 0$.",
    "$y\\,dx - x\\,dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — Điều kiện $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$ đối với $P\\,dx + Q\\,dy = 0$; $P=(3x^2 + 2xy^2),\\ Q=2x^2y + 4y^3$: $\\frac{\\partial P}{\\partial y}=4xy$ và $\\frac{\\partial Q}{\\partial x}=4xy$; bằng nhau, nên toàn phần.<br><b>Sai:</b> $(x^2 + y)dx + (y - x)dy = 0$ — $P=(x^2 + y),\\ Q=y - x$: $\\frac{\\partial P}{\\partial y}=1$ và $\\frac{\\partial Q}{\\partial x}=-1$; khác nhau, nên không toàn phần.<br><b>Sai:</b> $2xy\\,dx + (y^2 - x^2)dy = 0$ — $P=2xy\\,,\\ Q=y^2 - x^2$: $\\frac{\\partial P}{\\partial y}=2x$ và $\\frac{\\partial Q}{\\partial x}=-2x$; khác nhau, nên không toàn phần.<br><b>Sai:</b> $y\\,dx - x\\,dy = 0$ — $P=y\\,,\\ Q=y\\,dx - x\\,dy = 0$: $\\frac{\\partial P}{\\partial y}=1$ và $\\frac{\\partial Q}{\\partial x}=-1$; khác nhau, nên không toàn phần."
  },
  {
   "q": "Đường cong tích phân của phương trình vi phân toàn phần $(6 x + y)\\,dx + (x + 6 y)\\,dy = 0$ đi qua điểm $M(-1;3)$ là một đường elip. Elip này cắt tia $Ox$ (phần $x > 0$ của trục hoành) tại điểm có hoành độ bằng",
   "options": [
    "$3$.",
    "$27$.",
    "$4$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial P}{\\partial y} = 1 = \\dfrac{\\partial Q}{\\partial x}$ nên vế trái là $du$ với $u = 3 x^{2} + x y + 3 y^{2}$<br>Nghiệm tổng quát: $3 x^{2} + x y + 3 y^{2} = C$; qua $M(-1;3)$: $C = 27$<br>Cho $y = 0$: $3 x^{2} = 27 \\Rightarrow x = 3$ (lấy $x > 0$)",
   "note": "Kiểm tra $P'_y = Q'_x$ trước; nghiệm tổng quát là $u(x,y) = C$ với $u'_x = P$, $u'_y = Q$."
  },
  {
   "q": "Một tin đồn lan truyền trong một khu dân cư có 1800 người. Số người đã biết tin $P(t)$ sau $t$ ngày thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{1800}\\right)$ với $k = \\dfrac{\\ln 2}{4}$ và $P(0) = 200$. Biết nghiệm có dạng $P(t) = \\dfrac{1800}{1 + Ae^{-kt}}$. Số người biết tin sau 8 ngày bằng",
   "options": [
    "$600$.",
    "$800$.",
    "$900$.",
    "$360$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=8$.<br>$kt=\\dfrac{\\ln2}{4}(8)=2\\ln2$, vì thế $e^{-kt}=e^{-2\\ln2}=2^{-2}=\\dfrac1{4}$.<br>$P(8)=\\dfrac{1800}{1+\\frac{8}{4}}=\\dfrac{1800\\cdot4}{4+8}=\\dfrac{7200}{12}=600$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 2e^{2x}$ với điều kiện $y(0) = 1;\\ y'(0) = 4$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
   "options": [
    "$4 e^{2}$.",
    "$3 e^{2}$.",
    "$5 e^{2}$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{2x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = 2 C_{1} + C_2 = 4 \\Rightarrow C_2 = 2$<br>$y(1) = (1 + (2) + 1)e^{2} = 4 e^{2}$",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ y \\ge |x|\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>$y\\ge|x|\\Leftrightarrow\\sin\\varphi\\ge|\\cos\\varphi|\\Rightarrow\\pi/4\\le\\varphi\\le3\\pi/4$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{4}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
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
   "explain": "Vì $z=\\rho\\cos\\theta$ và $dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$, $I=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{6}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^3\\,d\\rho$.<br>Các tích phân bằng $2\\pi$, $[\\sin^2\\theta/2]_0^{\\dfrac{\\pi}{6}}=\\sin^2\\dfrac{\\pi}{6}/2$, và $[\\rh\\frac{o^4}{4}]_0^{1}=1/4$. Vậy $I=2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{6}}{2}\\cdot\\dfrac{1}{4}=\\dfrac{\\pi}{16}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 600 nghìn người dùng, tổng số không đổi. Mỗi tháng có 20% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 200 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$360$.",
    "$240$.",
    "$300$.",
    "$280$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 30% của $600-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{30}{100}(600-x)$.<br>Nhân với $100$: $20x=30(600-x)=18000-30x$, nên $(50)x=18000$ và $x=\\dfrac{18000}{50}=360$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (0;2;-1),\\ u_2 = (2;-2;-2)$ và $v = (4;4;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$-8$.",
    "$8$.",
    "$-7$.",
    "$-10$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = - 4 m - 32$<br>$- 4 m - 32 = 0 \\Leftrightarrow m = -8$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}-1 & -1 \\\\ 2 & -3\\end{pmatrix}$ và $B = \\begin{pmatrix}-3 & 3 \\\\ -3 & 6\\end{pmatrix}$. Ma trận $X$ thỏa mãn $2X + A.X = B$ là",
   "options": [
    "$\\begin{pmatrix}0 & 3 \\\\ 3 & 0\\end{pmatrix}$.",
    "$\\begin{pmatrix}-3 & 0 \\\\ -9 & 3\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & -3 \\\\ -3 & 0\\end{pmatrix}$.",
    "$\\begin{pmatrix}1 & 3 \\\\ 3 & 1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$2X+AX=B \\Rightarrow (2I+A)X=B$.<br>$2I+A=\\begin{pmatrix}1 & -1 \\\\ 2 & -1\\end{pmatrix},\\qquad B=\\begin{pmatrix}-3 & 3 \\\\ -3 & 6\\end{pmatrix}$.<br>$X=(2I+A)^{-1}B=\\begin{pmatrix}-1 & 1 \\\\ -2 & 1\\end{pmatrix}\\begin{pmatrix}-3 & 3 \\\\ -3 & 6\\end{pmatrix}=\\begin{pmatrix}0 & 3 \\\\ 3 & 0\\end{pmatrix}$.<br>Kiểm tra: $(2I+A)\\begin{pmatrix}0 & 3 \\\\ 3 & 0\\end{pmatrix}=\\begin{pmatrix}-3 & 3 \\\\ -3 & 6\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 3y + z = 0\\\\ 3x + my + 3z = 0\\\\ 2x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$85$.",
    "$11$.",
    "$18$.",
    "$-11$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 11 m + 18 = \\left(m - 9\\right) \\left(m - 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 2$ hoặc $m = 9$<br>Giá trị cần tìm: $85$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
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
   "explain": "$e^{u} = 1 + u + \\dfrac{u^2}{2} + \\dfrac{u^3}{6} + o(u^3)$, với $u=4x$, ta có $u^2=16x^2$ và $u^3=64x^3$.<br>Tử số sau khai triển là $(4-a)x+(8-b)x^2+(\\dfrac{32}{3})x^3+o(x^3)$. Chia cho $x^3$: $\\dfrac{4-a}{x^2}+\\dfrac{8-b}{x}+\\dfrac{32}{3}+o(1)$.<br>Để giới hạn hữu hạn, các hệ số phân kỳ triệt tiêu: $a=4$ và $b=8$; hệ số còn lại cho $L=\\dfrac{32}{3}$.<br>$4+2(8)+6(\\dfrac{32}{3})=4+16+64=84$",
   "note": "Trong khai triển Maclaurin của tử, mọi hệ số có bậc thấp hơn bậc của mẫu phải bằng 0; hệ số cùng bậc với mẫu cho giá trị $L$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\cos 4x & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$-7$.",
    "$-8$.",
    "$1$.",
    "$-15$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=\\cos{\\left(4 x \\right)}$ có $g(0)=1$, $g^\\prime(0)=0$, $g^{\\prime\\prime}(0)=-16$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=0,\\ 2a=-16$, do đó $a=-8$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $a - b + d=-7$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 8x$.",
   "options": [
    "$\\dfrac{256}{3}$.",
    "$\\dfrac{128}{3}$.",
    "$\\dfrac{512}{3}$.",
    "$\\dfrac{259}{3}$."
   ],
   "answer": 0,
   "explain": "Giao điểm: $x^2 = 8x \\Rightarrow x = 0$ và $x = 8$<br>$S = \\displaystyle\\int_0^{8}(8x - x^2)\\,dx = \\left[\\dfrac{8x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{8} = \\dfrac{256}{3}$"
  },
  {
   "q": "Một xưởng sản xuất 3 loại sản phẩm từ 3 loại nguyên liệu I, II, III. Mỗi đơn vị sản phẩm loại 1, 2, 3 cần lần lượt $1, 3, 2$ đơn vị nguyên liệu I; $3, 1, 1$ đơn vị nguyên liệu II và $1, 2, 2$ đơn vị nguyên liệu III. Kho hiện có $100$, $120$ và $90$ đơn vị nguyên liệu I, II, III. Nếu xưởng lập kế hoạch dùng vừa hết cả ba loại nguyên liệu thì tổng số sản phẩm làm ra bằng",
   "options": [
    "$60$.",
    "$70$.",
    "$50$.",
    "$31$."
   ],
   "answer": 0,
   "explain": "Gọi $x,y,z$ lần lượt là số sản phẩm loại 1, 2, 3.<br>Hệ nguyên liệu: $\\begin{pmatrix}1 & 3 & 2 \\\\ 3 & 1 & 1 \\\\ 1 & 2 & 2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}=(100;120;90)^T$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}1 & 3 & 2 & 100\\\\ 3 & 1 & 1 & 120\\\\ 1 & 2 & 2 & 90\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (3)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 3 & 2 & 100\\\\ 0 & -8 & -5 & -180\\\\ 1 & 2 & 2 & 90\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 3 & 2 & 100\\\\ 0 & -8 & -5 & -180\\\\ 0 & -1 & 0 & -10\\end{array}\\right)$$<br>$R_2 \\leftarrow \\dfrac{1}{-8}R_2$: $$\\left(\\begin{array}{rrr|r}1 & 3 & 2 & 100\\\\ 0 & 1 & \\dfrac{5}{8} & \\dfrac{45}{2}\\\\ 0 & -1 & 0 & -10\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (3)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{8} & \\dfrac{65}{2}\\\\ 0 & 1 & \\dfrac{5}{8} & \\dfrac{45}{2}\\\\ 0 & -1 & 0 & -10\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (-1)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{8} & \\dfrac{65}{2}\\\\ 0 & 1 & \\dfrac{5}{8} & \\dfrac{45}{2}\\\\ 0 & 0 & \\dfrac{5}{8} & \\dfrac{25}{2}\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{\\dfrac{5}{8}}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{8} & \\dfrac{65}{2}\\\\ 0 & 1 & \\dfrac{5}{8} & \\dfrac{45}{2}\\\\ 0 & 0 & 1 & 20\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (\\dfrac{1}{8})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 30\\\\ 0 & 1 & \\dfrac{5}{8} & \\dfrac{45}{2}\\\\ 0 & 0 & 1 & 20\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (\\dfrac{5}{8})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 30\\\\ 0 & 1 & 0 & 10\\\\ 0 & 0 & 1 & 20\\end{array}\\right)$$<br>$(x,y,z)^T=(30;10;20)^T$; tổng sản phẩm: $30+10+20=60$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{n+1}{4^n}$ bằng<span class=\"q-hint\">Gợi ý: đạo hàm từng số hạng chuỗi $\\displaystyle\\sum_{n=0}^{+\\infty} x^{n+1}$.</span>",
   "options": [
    "$\\dfrac{16}{9}$.",
    "$\\dfrac{4}{3}$.",
    "$\\dfrac{4}{9}$.",
    "$\\dfrac{32}{9}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n\\ge0}x^{n+1} = \\dfrac{x}{1-x} \\Rightarrow \\sum_{n\\ge0}(n+1)x^n = \\left(\\dfrac{x}{1-x}\\right)' = \\dfrac{1}{(1-x)^2}$<br>$x = \\dfrac{1}{4}$: $\\dfrac{1}{\\left(\\frac{3}{4}\\right)^2} = \\dfrac{16}{9}$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Số thập phân vô hạn tuần hoàn $0{,}3545454\\ldots$ (phần tuần hoàn là 54) bằng $\\dfrac{3}{10} + \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{54}{10\\cdot100^n}$. Viết số này dưới dạng phân số tối giản $\\dfrac{a}{b}$ với $a, b \\in \\mathbb{N}^*$, giá trị của $a + b$ bằng",
   "options": [
    "$149$.",
    "$71$.",
    "$150$.",
    "$1354$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{54}{10\\cdot100^n} = \\dfrac{54}{10}\\cdot\\dfrac{\\frac{1}{100}}{1 - \\frac{1}{100}} = \\dfrac{54}{990}$<br>$\\dfrac{3}{10} + \\dfrac{54}{990} = \\dfrac{39}{110} \\Rightarrow a + b = 149$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{(-3)^n}{n!}$ bằng",
   "options": [
    "$e^{-3}$.",
    "$e^{3}$.",
    "$- e^{3}$.",
    "$e^{- \\dfrac{1}{3}}$."
   ],
   "answer": 0,
   "explain": "$\\sum_{n\\ge0}\\frac{(-3)^n}{n!}=e^{-3}$ (thay $x=-3$ vào $\\displaystyle \\sum x^n/n!$).<br>Vậy tổng của chuỗi bằng $e^{-3}$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $y' = (1 + y)\\cos x$ thỏa mãn $y(0) = 1$. Giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
   "options": [
    "$2 e - 1$.",
    "$1$.",
    "$2 e$.",
    "$- \\dfrac{1}{2} + e$."
   ],
   "answer": 0,
   "explain": "Tách biến rồi tích phân hai vế: $\\dfrac{dy}{1+y} = \\cos x\\,dx \\Rightarrow \\ln|1+y| = \\sin x + C$<br>$x=0,y=1$: $\\ln(1+y)=\\sin x+C$ gives $\\ln2=0+C$, so $C=\\ln2$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=2 e^{\\sin{\\left(x \\right)}} - 1$.<br>Thay $x=\\dfrac{\\pi}{2}$ vào nghiệm: $y(\\dfrac{\\pi}{2})=2 e - 1=2 e - 1$.",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' - y = x^{2}e^x$ $(x > 0)$ thỏa mãn $y(1) = e$. Giá trị của $y(2)$ bằng",
   "options": [
    "$2 e^{2}$.",
    "$e^{2}$.",
    "$4 e^{2}$.",
    "$1 + 2 e^{2}$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^{2}$: $\\left(\\dfrac{y}{x}\\right)' = e^x \\Rightarrow y = x(e^x + C)$<br>$y(1) = e + C = e \\Rightarrow C = 0$<br>$y(2) = 2\\left(e^2\\right) = 2 e^{2}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Một vật khối lượng 5 kg rơi từ trạng thái nghỉ, chịu lực cản không khí tỉ lệ với vận tốc với hệ số $k = 1\\,kg/s$, tức vận tốc $v(t)$ thỏa mãn $5v' = 5g - 1v$ (lấy $g = 9{,}8\\,m/s^2$). Vận tốc của vật sau 2 giây (làm tròn đến hàng phần chục, đơn vị m/s) là",
   "options": [
    "16,2.",
    "49,0.",
    "19,6.",
    "32,8."
   ],
   "answer": 0,
   "explain": "$v' + \\dfrac{1}{5}v = 9{,}8$ (tuyến tính cấp một), $v(0) = 0$<br>$v(t) = \\dfrac{mg}{k}\\left(1 - e^{-kt/m}\\right) = 49\\left(1 - e^{-0{,}2t}\\right)$<br>$v(2) = 49\\left(1 - e^{-0{,}4}\\right) \\approx 16{,}2$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Thể tích của vật thể giới hạn bởi paraboloid $z = 4 - x^2 - y^2$ và mặt phẳng $z = 0$ được tính bằng $V = \\displaystyle\\iint_D z\\,dxdy$, với $D$ là hình chiếu của vật thể lên mặt phẳng $Oxy$. Giá trị của $V$ bằng",
   "options": [
    "$8 \\pi$.",
    "$16 \\pi$.",
    "$4 \\pi$.",
    "$\\dfrac{32 \\pi}{3}$."
   ],
   "answer": 0,
   "explain": "$z \\ge 0 \\Leftrightarrow x^2 + y^2 \\le 4$ nên $D$ là hình tròn bán kính $2$<br>$V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{2}\\left(4 - r^{2}\\right)r\\,dr = 2\\pi\\left[- \\dfrac{r^{4}}{4} + 2 r^{2}\\right]_0^{2}$<br>$V = 2\\pi\\cdot4 = 8 \\pi$",
   "note": "Miền $D$ là hình chiếu của vật thể: nơi mặt cong cắt mặt phẳng $z = 0$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 16$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$32 \\pi$.",
    "$64 \\pi$.",
    "$16 \\pi$.",
    "$128 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cầu, $0 \\le \\theta \\le \\dfrac{\\pi}{4}$: $I = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\pi/4}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{4}\\rho^3\\,d\\rho$<br>$= 2\\pi\\cdot\\dfrac14\\cdot\\dfrac{256}{4} = 32 \\pi$",
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
   "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(2;0),\\ B(0;3)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
   "options": [
    "$12$.",
    "$-12$.",
    "$3$.",
    "$24$."
   ],
   "answer": 0,
   "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{3 - \\dfrac{3 x}{2}}\\left(4 y\\right)dy$<br>$I = 12$",
   "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2z = 7\\\\ 2x + 3y + 2z = 2\\\\ -2x + mz = -8\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = -2$, định thức của ma trận $A$ bằng",
     "options": [
      "$6$.",
      "$12$.",
      "$-6$.",
      "$8$."
     ],
     "answer": 0,
     "explain": "$\\det A = 3 m + 12$<br>Với $m = -2$: $\\det A = 6$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$-4$.",
      "$-2$.",
      "$4$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 3 m + 12 = 0 \\Leftrightarrow m = -4$"
    },
    {
     "q": "Khi $m = -2$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$2$.",
      "$3$.",
      "$-2$.",
      "$1$."
     ],
     "answer": 0,
     "explain": "Với $m = -2$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 6$)<br>$(x_0;y_0;z_0) = (1;-2;3)$<br>$x_0 + y_0 + z_0 = 2$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} y + y^{2}$ và điểm $M(2;2)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$16$.",
      "$0$.",
      "$64$.",
      "$8$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x y,\\quad f'_y = x^{2} + 2 y$<br>$\\nabla f(M) = (8;8) \\Rightarrow p + q = 16$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (4;-3)$ bằng",
     "options": [
      "$\\dfrac{8}{5}$.",
      "$8$.",
      "$- \\dfrac{8}{5}$.",
      "$\\dfrac{16}{5}$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(8)\\cdot(4) + (8)\\cdot(-3)}{5} = \\dfrac{8}{5}$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$-20$.",
      "$12$.",
      "$20$.",
      "$44$."
     ],
     "answer": 0,
     "explain": "$z = 12 + (8)(x - 2) + (8)(y - 2)$<br>Cho $x = y = 0$: $z = -20$",
     "note": "Gradient, đạo hàm theo hướng và mặt phẳng tiếp xúc đều dùng chung hai giá trị $f'_x(M)$, $f'_y(M)$."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}m & 1 & 0 \\\\ 1 & m & 1 \\\\ 0 & 1 & m\\end{pmatrix}$ với $m$ là số nguyên dương. Biết $\\det A = 56$, tìm $m$.",
   "answer": [
    "4"
   ],
   "explain": "Khai triển định thức: $\\det A=m^{3} - 2 m=m \\left(m^{2} - 2\\right)$<br>Đặt $\\det A=56$: $\\left(m - 4\\right) \\left(m^{2} + 4 m + 14\\right)=0$, có nghiệm $m=4,\\ -2 - \\sqrt{10} i,\\ \\sqrt{10} i - 2$<br>Lọc nghiệm nguyên dương trong tập trên: $m=4$",
   "note": "Lập $\\det A$ theo $m$ rồi giải phương trình; chỉ nhận nghiệm nguyên dương."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 2xy$ với điều kiện $\\dfrac{x^2}{1} + \\dfrac{y^2}{16} = 1$.",
   "answer": [
    "4"
   ],
   "explain": "Đặt $x = 1\\cos t,\\ y = 4\\sin t$: $f = 2\\cdot1\\cdot4\\sin t\\cos t$, lớn nhất bằng $\\dfrac{2\\cdot1\\cdot4}{2} = 4$<br>Đáp số: $4$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(2 x - 1)^{n}}{n^2\\cdot3^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "3"
   ],
   "explain": "Đặt $t = 2 x - 1$: chuỗi $\\displaystyle \\sum\\dfrac{t^n}{n^2\\cdot3^n}$ hội tụ khi và chỉ khi $|t| \\le 3$ (tại hai đầu mút là chuỗi $\\displaystyle \\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-3 \\le 2 x - 1 \\le 3 \\Leftrightarrow -1 \\le x \\le 2$<br>$\\beta - \\alpha = 3$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = 2e^{x}$ với điều kiện $y(0) = 1;\\ y'(0) = 4$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "29"
   ],
   "explain": "$k = 1$ là nghiệm đơn của phương trình đặc trưng nên $y^* = xe^{x}$; $y = 2e^{x} - e^{-x} + xe^{x}$; $y(2) \\approx 29{,}42$<br>Đáp số: $29$",
   "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ, không phải cho riêng phần thuần nhất."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "9"
   ],
   "explain": "Tọa độ cầu: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^2\\,d\\rho = 9\\pi$<br>Đáp số: $9$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
