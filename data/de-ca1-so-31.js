// ĐỀ SỐ 31 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-31",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 31",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lao động và nghề nghiệp",
  "prompt": "Theo số liệu thống kê lao động, quý III năm 2026 cả nước có khoảng 1,6 triệu thanh niên từ 15 đến 24 tuổi không có việc làm, không đi học và không tham gia đào tạo (thường gọi là thanh niên “3 không”), chiếm 11,2% tổng số thanh niên. Tỷ lệ thất nghiệp của thanh niên cũng luôn cao gấp nhiều lần mức chung: 8,67% trong quý II năm 2026, so với tỷ lệ thất nghiệp chung của lực lượng lao động năm 2025 là 2,22%. Trong khi đó, không ít doanh nghiệp cho biết họ vẫn khó tuyển được lao động có kỹ năng phù hợp.",
  "source": "(Tổng hợp từ số liệu của Cục Thống kê về thị trường lao động, 2025 – 2026)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về nghịch lý “người trẻ thiếu việc, doanh nghiệp thiếu người” được nêu ở trên và trách nhiệm của mỗi người trẻ trong việc chuẩn bị cho nghề nghiệp của chính mình.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (2;m;-3)$ và $v = (m;-3;2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
   "options": [
    "$98$.",
    "$2$.",
    "$135$.",
    "$26$."
   ],
   "answer": 0,
   "explain": "$\\langle u, v\\rangle = (2)m + m(-3) + (-3)(2) = (-1)m + (-3)(2) = 0$<br>$(-1)m = -(-3)(2) \\Rightarrow m = \\dfrac{- (-3)(2)}{-1} = -6$<br>$u + v = ((2) + (-6);\\ (-6) + (-3);\\ (-3) + (2)) = (-4;-9;-1)$<br>$|u + v|^2 = (-4)^2 + (-9)^2 + (-1)^2 = 16 + 81 + 1 = 98$",
   "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^2$, cho hệ véc tơ $S = \\{u_1(3;-1),\\ u_2(2;-1),\\ u_3(3;0),\\ u_4(1;0)\\}$. Có bao nhiêu hệ con khác rỗng của $S$ độc lập tuyến tính?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
   "options": [
    "$9$.",
    "$15$.",
    "$10$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Cả 4 véc tơ đều khác véc tơ không nên có 4 hệ một véc tơ độc lập.<br>$(u_1,u_2):\\ (\\Delta_{12})=(-1)$.<br>$(u_1,u_3):\\ (\\Delta_{12})=(3)$.<br>$(u_1,u_4):\\ (\\Delta_{12})=(1)$.<br>$(u_2,u_3):\\ (\\Delta_{12})=(3)$.<br>$(u_2,u_4):\\ (\\Delta_{12})=(1)$.<br>$(u_3,u_4):\\ (\\Delta_{12})=(0)$.<br>Tổng số hệ con độc lập tuyến tính: $4+5+0=9$.",
   "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & -2 & 1 & -2 & -1 \\\\ -1 & 3 & 0 & 1 & 0 \\\\ -5 & 8 & -1 & 4 & 1 \\\\ 8 & -10 & 2 & -6 & -2\\end{pmatrix}$. Tập nghiệm của hệ phương trình thuần nhất $AX = 0$ (5 ẩn) là một không gian con của $\\mathbb{R}^5$. Biết số chiều của không gian nghiệm bằng số ẩn trừ đi hạng của $A$, số chiều đó bằng",
   "options": [
    "$3$.",
    "$2$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Khử Gauss cho dạng bậc thang: $A \\to \\begin{pmatrix}3 & -2 & 1 & -2 & -1 \\\\ 0 & 7 & 1 & 1 & -1 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0\\end{pmatrix}$; có 2 hàng khác không nên hạng là 2.<br>Với $5$ ẩn và hạng 2, số ẩn tự do (số chiều hạt nhân) $= 5 - 2 = 3$.",
   "note": "Số chiều không gian nghiệm của $AX = 0$ bằng số ẩn trừ hạng của $A$."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}3 & -2 \\\\ 3 & 0\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x + y$ bằng",
   "options": [
    "$-3$.",
    "$9$.",
    "$18$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}3 & -6 \\\\ 9 & -6\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = 3$<br>So sánh phần tử hàng 1, cột 1: $3 = 3\\cdot(3) + y \\Rightarrow y = -6$<br>$x + y = -3$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = -2$. Giá trị của $\\det\\left(-2A\\right)$ bằng",
   "options": [
    "$16$.",
    "$4$.",
    "$-16$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det(-2A) = (-2)^3\\cdot\\det A$<br>Thay $\\det A = -2$: kết quả $16$",
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
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}7 & 3 & 3 & 3 \\\\ 3 & 7 & 3 & 3 \\\\ 3 & 3 & 7 & 3 \\\\ 3 & 3 & 3 & 7\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$1024$.",
    "$256$.",
    "$64$.",
    "$2320$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1+h_2+h_3+h_4$: mỗi phần tử hàng 1 bằng $a+4b=16$. Rút $16$ khỏi hàng này để hàng đầu thành $(1,1,1,1)$, đồng thời nhân định thức với thừa số $16$.<br>Với hàng đầu $(1,1,1,1)$, thực hiện $h_i\\to h_i-(3)h_1$ với $i=2,3,4$: các phần tử ngoài đường chéo thành $b-b=0$, còn mỗi phần tử đường chéo dưới bằng $(a+b)-b=a$. Đường chéo là $1,4,4,4$.<br>$\\det A = (16)\\cdot(4)^3 = 1024$",
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
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{3 x + 12}{x^{2} - 4 x + 3}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{3 \\left(x + 4\\right)}{\\left(x - 3\\right) \\left(x - 1\\right)}=\\dfrac{3 \\left(x + 4\\right)}{\\left(x - 3\\right) \\left(x - 1\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=3$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=3$.; Tại $x=1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=1$..<br>Chia đa thức: $\\dfrac{3 x + 12}{x^{2} - 4 x + 3}=0+\\dfrac{3 x + 12}{x^{2} - 4 x + 3}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Hệ số của $x^{4}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{x}{- 4 x^{2} - 3 x + 1}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
   "options": [
    "$51$.",
    "$13$.",
    "$1224$.",
    "$-51$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{1}{- 4 x^{2} - 3 x + 1} = 1 + 3x + 13x^{2} + 51x^{3} + 205x^{4} + o(x^{4})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 4: $f(x)=x + 3x^{2} + 13x^{3} + 51x^{4}+o(x^{4})$.<br>Đọc hệ số của $x^{4}$ từ tổng các tích cùng bậc vừa thu được: $51$.",
   "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$."
  },
  {
   "q": "Cho hàm hợp $z = u^2v$ với $u = x + y,\\ v = x y$. Dùng quy tắc đạo hàm hàm hợp $z'_x = z'_u\\cdot u'_x + z'_v\\cdot v'_x$, giá trị của $z'_x$ tại điểm $(x;y) = (1;1)$ bằng",
   "options": [
    "$8$.",
    "$4$.",
    "$-8$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "Tại điểm đã cho: $u = 2,\\ v = 1$<br>$z'_u = 2 u v \\to 4,\\quad z'_v = u^{2} \\to 4$<br>$u'_x = 1 \\to 1,\\quad v'_x = y \\to 1$<br>$z'_x = (4)\\cdot(1) + (4)\\cdot(1) = 8$",
   "note": "Tính $u, v$ tại điểm đã cho trước rồi mới thay vào các đạo hàm riêng; phải cộng đủ hai nhánh qua $u$ và qua $v$."
  },
  {
   "q": "Người ta tính công suất $P = \\dfrac{U^2}{R}$ của một điện trở từ hai đại lượng đo được. Biết hiệu điện thế $U$ được đo với sai số tương đối không quá 1% và điện trở $R$ với sai số tương đối không quá 0,5%. Dùng vi phân toàn phần của $\\ln P$, sai số tương đối lớn nhất của $P$ xấp xỉ bằng",
   "options": [
    "2,5%.",
    "1,5%.",
    "1%.",
    "5%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln P=C+2\\ln u-1\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dP}{P}=+2\\dfrac{du}{u}-1\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Delta P|}{|P|}\\le 2\\dfrac{|\\Delta u|}{u}+1\\dfrac{|\\Delta v|}{v}$.<br>$= 2\\cdot1\\% + 1\\cdot0{,}5\\% = 2{,}5\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
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
   "explain": "$L=xy-\\lambda(2x+y-12)$. $L_x=y-2\\lambda=0$ và $L_y=x-1\\lambda=0$, vì thế $y=2\\lambda$, $x=1\\lambda$.<br>Thay vào ràng buộc: $2\\lambda+2\\lambda=2(2)(1)\\lambda=12$, nên $\\lambda=\\dfrac{12}{2(2)(1)}$.<br>$x=\\dfrac{12}{22}$, $y=\\dfrac{12}{21}$. Vậy $S_{\\max}=xy=\\dfrac{12}{22}\\cdot\\dfrac{12}{21}=\\dfrac{144}{421}=18$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{4n + 1}{3n + 2}\\right)^{2n}$. Đặt $C = \\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}$, khi đó:",
   "options": [
    "$C = \\dfrac{16}{9}$ và chuỗi phân kỳ.",
    "$C = \\dfrac{16}{9}$ và chuỗi hội tụ.",
    "$C = \\dfrac{4}{3}$ và chuỗi phân kỳ.",
    "$C = 1$ và chuỗi phân kỳ."
   ],
   "answer": 0,
   "explain": "$u_n=\\left(\\dfrac{4n+1}{3n+2}\\right)^{2n}$; do đó $\\sqrt[n]{u_n}=\\left(\\dfrac{4n+1}{3n+2}\\right)^2\\to\\left(\\dfrac{4}{3}\\right)^2=\\dfrac{16}{9}$<br>$C > 1$ nên theo tiêu chuẩn Cauchy chuỗi phân kỳ",
   "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{n+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\sin\\dfrac1n$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n^2}{n^2+1}$. Có bao nhiêu chuỗi bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối) trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$2$.",
    "$0$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $0<1-\\cos(1/n)\\sim1/(2n^2)$; so sánh với $\\sum1/n^2$ cho hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 2: $|u_n|=n/(n+1)\\to1\\ne0$, điều kiện cần không thỏa; phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $a_n=\\sin(1/n)\\downarrow0$ nên Leibniz hội tụ; $\\sin(1/n)\\sim1/n$ khiến chuỗi trị tuyệt đối phân kỳ: bán hội tụ. Kết luận: bán hội tụ.<br>Chuỗi thứ 4: $|u_n|=n^2/(n^2+1)\\to1\\ne0$, nên phân kỳ. Kết luận: phân kỳ.<br>Số chuỗi bán hội tụ: $1$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình Bernoulli (với $\\alpha \\ne 0,\\ \\alpha \\ne 1$)?",
   "options": [
    "$xy' + y = y^2\\ln x$.",
    "$y' = \\dfrac{x + y}{x - y}$.",
    "$y' = e^{x - y}$.",
    "$(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $xy' + y = y^2\\ln x$ — Dạng $y' + p(x)y = q(x)y^{\\alpha}$; Chia cho $x\\ne0$: $y'+\\dfracx y=\\dfrac{\\ln x}{x}y^2$, Bernoulli với $\\alpha=2$.<br><b>Sai:</b> $y' = \\dfrac{x + y}{x - y}$ — $\\dfrac{x+y}{x-y}=\\dfrac{1+y/x}{1-y/x}$, nên vế phải chỉ phụ thuộc $y/x$.; đây là là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không phải dạng đang hỏi.<br><b>Sai:</b> $y' = e^{x - y}$ — $e^{x-y}=e^x e^{-y}$ nên $e^y\\,dy=e^x\\,dx$.; đây là là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không phải dạng đang hỏi.<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — $P=(y\\cos x + 2x),\\ Q=\\sin x - 2y$: $\\frac{\\partial P}{\\partial y}=\\cos x$ và $\\frac{\\partial Q}{\\partial x}=\\cos x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi."
  },
  {
   "q": "Đường cong tích phân của phương trình vi phân toàn phần $(4 x - 2 y)\\,dx + (- 2 x + 6 y)\\,dy = 0$ đi qua điểm $M(-1;2)$ là một đường elip. Elip này cắt tia $Ox$ (phần $x > 0$ của trục hoành) tại điểm có hoành độ bằng",
   "options": [
    "$3$.",
    "$18$.",
    "$4$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial P}{\\partial y} = -2 = \\dfrac{\\partial Q}{\\partial x}$ nên vế trái là $du$ với $u = 2 x^{2} - 2 x y + 3 y^{2}$<br>Nghiệm tổng quát: $2 x^{2} - 2 x y + 3 y^{2} = C$; qua $M(-1;2)$: $C = 18$<br>Cho $y = 0$: $2 x^{2} = 18 \\Rightarrow x = 3$ (lấy $x > 0$)",
   "note": "Kiểm tra $P'_y = Q'_x$ trước; nghiệm tổng quát là $u(x,y) = C$ với $u'_x = P$, $u'_y = Q$."
  },
  {
   "q": "Một tin đồn lan truyền trong một khu dân cư có 1800 người. Số người đã biết tin $P(t)$ sau $t$ ngày thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{1800}\\right)$ với $k = \\dfrac{\\ln 2}{3}$ và $P(0) = 200$. Biết nghiệm có dạng $P(t) = \\dfrac{1800}{1 + Ae^{-kt}}$. Số người biết tin sau 6 ngày bằng",
   "options": [
    "$600$.",
    "$800$.",
    "$900$.",
    "$360$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=8$.<br>$kt=\\dfrac{\\ln2}{3}(6)=2\\ln2$, vì thế $e^{-kt}=e^{-2\\ln2}=2^{-2}=\\dfrac1{4}$.<br>$P(6)=\\dfrac{1800}{1+\\frac{8}{4}}=\\dfrac{1800\\cdot4}{4+8}=\\dfrac{7200}{12}=600$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 48\\cos 2x$ với điều kiện $y(0) = 1;\\ y'(0) = -4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
   "options": [
    "$3 \\pi - 2$.",
    "$-2$.",
    "$3 \\pi$.",
    "$- 3 \\pi - 2$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $48\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=12$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 12x\\sin 2x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=-4$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $12\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=-2+3 \\pi=3 \\pi - 2$.",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Tích phân $I = \\displaystyle\\int_{0}^{1} dx\\int_{x}^{1} \\dfrac{\\sin y}{y}\\,dy$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
   "options": [
    "$1 - \\cos{\\left(1 \\right)}$.",
    "$2 - 2 \\cos{\\left(1 \\right)}$.",
    "$\\dfrac{1}{2} - \\dfrac{\\cos{\\left(1 \\right)}}{2}$.",
    "$2 - \\cos{\\left(1 \\right)}$."
   ],
   "answer": 0,
   "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le x\\le1,\\ x\\le y\\le1$ becomes $0\\le y\\le1,\\ 0\\le x\\le y$.<br>Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{1}\\sin{\\left(y \\right)}\\,dy$.<br>Tính nguyên hàm: $I=\\left[- \\cos{\\left(y \\right)}\\right]_{0}^{1}=- \\cos{\\left(1 \\right)}--1=1 - \\cos{\\left(1 \\right)}$.",
   "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt nón $z = \\sqrt{x^2 + y^2}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 3,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{4},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$9 \\pi \\left(2 - \\sqrt{2}\\right)$.",
    "$\\dfrac{9 \\pi^{2}}{2}$.",
    "$36 \\pi$.",
    "$\\dfrac{9 \\pi \\left(2 - \\sqrt{2}\\right)}{2}$."
   ],
   "answer": 0,
   "explain": "$V=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{4}}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^2\\,d\\rho$. Các tích phân lần lượt bằng $2\\pi$, $[-\\cos\\theta]_0^{\\dfrac{\\pi}{4}}=1-\\cos\\dfrac{\\pi}{4}$ và $[\\rh\\frac{o^3}{3}]_0^{3}=27/3$.<br>$V=2\\pi(1-\\cos\\dfrac{\\pi}{4})\\dfrac{27}{3}=9 \\pi \\left(2 - \\sqrt{2}\\right)$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 20% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 1400 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$700$.",
    "$1400$.",
    "$1050$.",
    "$1190$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(2100-x)$.<br>Nhân với $100$: $20x=10(2100-x)=21000-10x$, nên $(30)x=21000$ và $x=\\dfrac{21000}{30}=700$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (0;-2;0),\\ u_2 = (1;-2;0)$ và $v = (3;-3;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$0$.",
    "$2$.",
    "$1$.",
    "$-2$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = 2 m$<br>$2 m = 0 \\Leftrightarrow m = 0$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}-3 & 1 \\\\ -7 & 2\\end{pmatrix}$, $B = \\begin{pmatrix}1 & -2 \\\\ 1 & -1\\end{pmatrix}$ và $C = \\begin{pmatrix}-14 & 22 \\\\ -32 & 50\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X.B = C$ là",
   "options": [
    "$\\begin{pmatrix}2 & 2 \\\\ -2 & 0\\end{pmatrix}$.",
    "$\\begin{pmatrix}446 & -184 \\\\ 160 & -66\\end{pmatrix}$.",
    "$\\begin{pmatrix}-2 & -2 \\\\ 2 & 0\\end{pmatrix}$.",
    "$\\begin{pmatrix}2 & -2 \\\\ 2 & 0\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$AXB=C \\Rightarrow X=A^{-1}CB^{-1}$ (nhân bên trái $A^{-1}$, bên phải $B^{-1}$).<br>$A^{-1}=\\begin{pmatrix}2 & -1 \\\\ 7 & -3\\end{pmatrix},\\quad B^{-1}=\\begin{pmatrix}-1 & 2 \\\\ -1 & 1\\end{pmatrix}$.<br>$X=A^{-1}CB^{-1}=\\begin{pmatrix}2 & 2 \\\\ -2 & 0\\end{pmatrix}$.<br>Kiểm tra: $A\\begin{pmatrix}2 & 2 \\\\ -2 & 0\\end{pmatrix}B=\\begin{pmatrix}-14 & 22 \\\\ -32 & 50\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y + 3z = 0\\\\ 2x + my - z = 0\\\\ 3x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$7$.",
    "$10$.",
    "$29$.",
    "$-7$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 7 m + 10 = \\left(m - 5\\right) \\left(m - 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 2$ hoặc $m = 5$<br>Giá trị cần tìm: $7$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + x) - ax - bx^2}{x^3} = L$ với $L$ là một số hữu hạn. Giá trị của $a - 2b + 3L$ bằng",
   "options": [
    "$3$.",
    "$\\dfrac{5}{6}$.",
    "$1$.",
    "$\\dfrac{8}{3}$."
   ],
   "answer": 0,
   "explain": "$\\ln(1 + u) = u - \\dfrac{u^2}{2} + \\dfrac{u^3}{3} + o(u^3)$, với $u=x$, ta có $u^2=x^2$ và $u^3=x^3$.<br>Tử số sau khai triển là $(1-a)x+(- \\dfrac{1}{2}-b)x^2+(\\dfrac{1}{3})x^3+o(x^3)$. Chia cho $x^3$: $\\dfrac{1-a}{x^2}+\\dfrac{- \\dfrac{1}{2}-b}{x}+\\dfrac{1}{3}+o(1)$.<br>Để giới hạn hữu hạn, các hệ số phân kỳ triệt tiêu: $a=1$ và $b=- \\dfrac{1}{2}$; hệ số còn lại cho $L=\\dfrac{1}{3}$.<br>$1-2(- \\dfrac{1}{2})+3(\\dfrac{1}{3})=1+1+1=3$",
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
   "explain": "Nhánh trái $g(x)=\\cos{\\left(2 x \\right)}$ có $g(0)=1$, $g^\\prime(0)=0$, $g^{\\prime\\prime}(0)=-4$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=0,\\ 2a=-4$, do đó $a=-2$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $a - b + d=-1$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} xe^{-x}\\,dx$ bằng",
   "options": [
    "$1$.",
    "$2$.",
    "$0$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Từng phần trên $[0,R]$ với $u=x$, $dv=e^{-x}dx$, $v=-e^{-x}/1$: $\\int_0^Rxe^{-x}dx=[-xe^{-x}/1]_0^R+\\frac1{1}\\int_0^Re^{-x}dx$.<br>Cho $R\\to\\infty$, $Re^{-1R}\\to0$; tích phân còn lại là $[-e^{-x}/1]_0^\\infty=1/1$. Vậy $I=0+\\dfrac1{1}\\cdot\\dfrac1{1}=1$.",
   "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$."
  },
  {
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 40 + 0{,}9(Y - T)$; $T = \\dfrac13Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 150$ và chi tiêu chính phủ $G_0 = 200$. Giá trị của mức thu nhập cân bằng $Y^*$ bằng",
   "options": [
    "$975$.",
    "$625$.",
    "$325$.",
    "$390$."
   ],
   "answer": 0,
   "explain": "$T=tY\\Rightarrow C=c_0+b(Y-tY)=40+\\dfrac{9}{10}(1-\\dfrac{1}{3})Y$.<br>$Y=C+I_0+G_0\\Rightarrow [1-\\dfrac{9}{10}(1-\\dfrac{1}{3})]Y=40+150+200$.<br>$Y=\\dfrac{390}{1-\\dfrac{9}{10}(1-\\dfrac{1}{3})}=975$.<br>$T=tY=\\dfrac{1}{3}\\cdot975=325,\\qquad C=c_0+b(Y-T)=40+\\dfrac{9}{10}(975-325)=625$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n}{2^n}$ bằng<span class=\"q-hint\">Gợi ý: $\\displaystyle\\sum_{n=1}^{+\\infty} nx^n = \\dfrac{x}{(1-x)^2}$ với $|x| < 1$.</span>",
   "options": [
    "$2$.",
    "$1$.",
    "$4$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$x = \\dfrac{1}{2}$: $\\dfrac{x}{(1-x)^2} = \\dfrac{\\frac{1}{2}}{\\left(\\frac{1}{2}\\right)^2} = 2$<br>Kết quả: $2$",
   "note": "Tổng dạng sai phân: viết vài số hạng đầu để thấy những số hạng nào còn lại sau khi triệt tiêu."
  },
  {
   "q": "Một quả bóng được thả rơi từ độ cao 9 mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\\dfrac{2}{3}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng",
   "options": [
    "$45$.",
    "$27$.",
    "$54$.",
    "$18$."
   ],
   "answer": 0,
   "explain": "$9 + 2\\displaystyle\\sum_{n=1}^{+\\infty}9\\left(\\dfrac{2}{3}\\right)^n = 9 + 2\\cdot\\dfrac{9\\cdot\\frac{2}{3}}{1 - \\frac{2}{3}} = 45$<br>Kết quả: $45$",
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
   "explain": "Tách biến rồi tích phân hai vế: $e^y\\,dy = x\\,dx \\Rightarrow e^y = \\dfrac{x^2}{2} + C$<br>$x=0,y=0$: $e^y=\\frac{x^2}{2}+C$ gives $1=0+C$, so $C=1$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=\\ln\\left(\\dfrac{x^{2}}{2} + 1\\right)$.<br>Thay $x=2$ vào nghiệm: $y(2)=\\ln 3=\\ln 3$.",
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
   "q": "Một bể chứa 100 lít nước có hòa tan 30 kg muối. Người ta bơm vào bể nước muối nồng độ 0,1 kg/lít với tốc độ 9 lít/phút, đồng thời rút hỗn hợp (luôn được khuấy đều) ra khỏi bể với tốc độ 6 lít/phút, nên thể tích nước trong bể tăng dần. Lượng muối trong bể sau 100 phút là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "41,2.",
    "40,0.",
    "120,0.",
    "45,0."
   ],
   "answer": 0,
   "explain": "$V(t) = 100 + 3t$; $S' + \\dfrac{6}{100 + 3t}S = 0{,}9,\\quad S(0) = 30$<br>Nhân với thừa số tích phân $(100 + 3t)^2$: $\\left[S(100 + 3t)^2\\right]' = 0{,}9(100 + 3t)^2$<br>$S(100 + 3t)^2 = 0{,}1(100 + 3t)^3 + C$; $S(0) = 30 \\Rightarrow C = 200000$<br>$S(100) = 0{,}1\\cdot400 + \\dfrac{200000}{400^2} \\approx 41{,}2$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 1,\\ 0 \\le x \\le y\\}$. Giá trị của tích phân $\\displaystyle\\iint_D y\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{\\sqrt{2}}{6}$.",
    "$\\dfrac{\\sqrt{2}}{4}$.",
    "$\\dfrac{\\sqrt{2}}{3}$.",
    "$\\dfrac{1}{3}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 1,\\ \\dfrac{\\pi}{4} \\le \\varphi \\le \\dfrac{\\pi}{2}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{1}\\left(r \\sin\\varphi\\right)r\\,dr = \\displaystyle \\int \\dfrac{\\sin\\varphi}{3}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = \\dfrac{\\sqrt{2}}{6}$",
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
   "explain": "$x^2+y^2+z^2=\\rho^2$ and $dV=\\rho^2\\sin\\theta\\,d\\rho d\\theta d\\varphi$, so $I=\\int_0^{2\\pi}d\\varphi\\int_0^\\pi\\sin\\theta\\,d\\theta\\int_0^{5}\\rho^4\\,d\\rho$.<br>Tích phân theo góc: $2\\pi\\cdot2$; theo bán kính: $[\\rh\\frac{o^5}{5}]_0^{5}=3125/5$. Hence $I=2\\pi\\cdot2\\cdot\\dfrac{3125}{5}=2500 \\pi$.",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $L$ là một cung trơn nối điểm $A$ với điểm $B$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Tích phân đường loại một $\\displaystyle\\int_L f\\,ds$ không phụ thuộc chiều đi trên $L$, còn tích phân đường loại hai đổi dấu khi đổi chiều.",
    "Cả hai loại tích phân đường đều đổi dấu khi đổi chiều đi trên $L$.",
    "Cả hai loại tích phân đường đều không phụ thuộc chiều đi trên $L$.",
    "Nếu $L$ là đường cong kín thì $\\displaystyle\\int_L 1\\,ds = 0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Tích phân đường loại một $\\displaystyle\\int_L f\\,ds$ không phụ thuộc chiều đi trên $L$, còn tích phân đường loại hai đổi dấu khi đổi chiều. $ds > 0$ theo cả hai chiều, còn $dx, dy$ đổi dấu khi đổi chiều.<br><b>Sai:</b> Cả hai loại tích phân đường đều đổi dấu khi đổi chiều đi trên $L$. Tích phân loại một không đổi vì $ds$ là độ dài, luôn dương.<br><b>Sai:</b> Cả hai loại tích phân đường đều không phụ thuộc chiều đi trên $L$. Tích phân loại hai đổi dấu vì $dx, dy$ đổi dấu.<br><b>Sai:</b> Nếu $L$ là đường cong kín thì $\\displaystyle\\int_L 1\\,ds = 0$. $\\displaystyle\\int_L 1\\,ds$ bằng độ dài của $L$, luôn dương."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 2 - y^{2})\\,dx + (- 2 x^{2} - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$-4$.",
    "$4$.",
    "$-2$.",
    "$-1$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx - 2 y,\\quad Q'_x = - 4 x - 2 y$<br>Đồng nhất hệ số: $m = -4$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + z = 4\\\\ -x + 2y + 2z = 14\\\\ -2x + 2y + mz = 13\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = 1$, định thức của ma trận $A$ bằng",
     "options": [
      "$-3$.",
      "$-6$.",
      "$3$.",
      "$-1$."
     ],
     "answer": 0,
     "explain": "$\\det A = 3 m - 6$<br>Với $m = 1$: $\\det A = -3$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$2$.",
      "$1$.",
      "$-2$.",
      "$5$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 3 m - 6 = 0 \\Leftrightarrow m = 2$"
    },
    {
     "q": "Khi $m = 1$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$4$.",
      "$5$.",
      "$-4$.",
      "$-2$."
     ],
     "answer": 0,
     "explain": "Với $m = 1$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = -3$)<br>$(x_0;y_0;z_0) = (-2;3;3)$<br>$x_0 + y_0 + z_0 = 4$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} y + y^{2}$ và điểm $M(2;-1)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$-2$.",
      "$-6$.",
      "$-8$.",
      "$-4$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x y,\\quad f'_y = x^{2} + 2 y$<br>$\\nabla f(M) = (-4;2) \\Rightarrow p + q = -2$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (4;3)$ bằng",
     "options": [
      "$-2$.",
      "$-10$.",
      "$- \\dfrac{4}{5}$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(-4)\\cdot(4) + (2)\\cdot(3)}{5} = -2$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$7$.",
      "$-3$.",
      "$-7$.",
      "$-13$."
     ],
     "answer": 0,
     "explain": "$z = -3 + (-4)(x - 2) + (2)(y + 1)$<br>Cho $x = y = 0$: $z = 7$",
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
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 6xy$ với điều kiện $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$.",
   "answer": [
    "18"
   ],
   "explain": "Đặt $x = 3\\cos t,\\ y = 2\\sin t$: $f = 6\\cdot3\\cdot2\\sin t\\cos t$, lớn nhất bằng $\\dfrac{6\\cdot3\\cdot2}{2} = 18$<br>Đáp số: $18$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(4 x + 1)^{n}}{n^2\\cdot2^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "1"
   ],
   "explain": "Đặt $t = 4 x + 1$: chuỗi $\\displaystyle \\sum\\dfrac{t^n}{n^2\\cdot2^n}$ hội tụ khi và chỉ khi $|t| \\le 2$ (tại hai đầu mút là chuỗi $\\displaystyle \\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-2 \\le 4 x + 1 \\le 2 \\Leftrightarrow - \\dfrac{3}{4} \\le x \\le \\dfrac{1}{4}$<br>$\\beta - \\alpha = 1$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = -3e^{x}$ với điều kiện $y(0) = 1;\\ y'(0) = 4$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "11"
   ],
   "explain": "$k = 1$ là nghiệm đơn của phương trình đặc trưng nên $y^* = 3xe^{x}$; $y = e^{x} + 3xe^{x}$; $y(1) \\approx 10{,}87$<br>Đáp số: $11$",
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
