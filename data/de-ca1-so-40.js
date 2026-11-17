// ĐỀ SỐ 40 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-40",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 40",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Lí tưởng và trách nhiệm xã hội",
  "prompt": "Trong các đợt bão lũ lịch sử năm 2025, khi 468 người chết và mất tích, gần 350.000 ngôi nhà bị hư hỏng, hình ảnh được chia sẻ nhiều nhất không phải là sự tàn phá mà là những người đi ngược dòng lũ: chiến sĩ công an, bộ đội dầm mình trong nước đưa người già, trẻ nhỏ ra khỏi vùng nguy hiểm; những đoàn xe tình nguyện chở hàng cứu trợ xuyên đêm. Với lực lượng Công an nhân dân, đó là sự hiện thực hóa phương châm “Vì nước quên thân, vì dân phục vụ”.",
  "source": "(Số liệu thiên tai theo cơ quan phòng, chống thiên tai, tháng 12/2025)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về lí tưởng “vì dân phục vụ” được gợi ra từ những hình ảnh trên và liên hệ với lựa chọn nghề nghiệp, lẽ sống của bản thân.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-3;5;2)$ và $v = (1;-2;2)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
   "options": [
    "$-1$.",
    "$-9$.",
    "$4$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -9,\\quad \\langle v, v\\rangle = 9 \\Rightarrow t = -1$<br>$p = -v = (-1;2;-2)$, tổng các tọa độ: $-1$",
   "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (0;-2;2),\\ u_2 = (-1;2;-2)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
   "options": [
    "$(1;3;0)$.",
    "$(-2;6;-6)$.",
    "$(-2;2;-2)$.",
    "$(-1;0;0)$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Với $w=(1;3;0)$, tính định thức theo hàng đầu: $\\det\\begin{pmatrix}0 & -2 & 2\\\\ -1 & 2 & -2\\\\ 1 & 3 & 0\\end{pmatrix}= 0(2\\cdot0--2\\cdot3)--2(-1\\cdot0--2\\cdot1)+2(-1\\cdot3-2\\cdot1)=-6\\ne0$, nên ba véc tơ độc lập tuyến tính và tạo thành cơ sở<br><b>Sai:</b> $(-2;6;-6) = - u_{1} + 2 u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(-2;2;-2) = u_{1} + 2 u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(-1;0;0) = u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$"
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ $S$ gồm $u_1 = (-3;3;-4;1),\\ u_2 = (-1;3;-2;3),\\ u_3 = (0;6;-2;8),\\ u_4 = (-1;0;-1;-1)$. Cần bổ sung vào $S$ ít nhất bao nhiêu véc tơ để hệ mới sinh ra toàn bộ $\\mathbb{R}^4$?",
   "options": [
    "$2$.",
    "$0$.",
    "$4$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Xếp các véc tơ thành hàng và đưa về dạng bậc thang: $\\begin{pmatrix}-3 & 3 & -4 & 1 \\\\ 0 & -6 & 2 & -8 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của $S$ bằng $2$, tức $S$ sinh ra một không gian con $2$ chiều<br>Cần thêm ít nhất $4 - 2 = 2$ véc tơ",
   "note": "Hệ sinh ra $\\mathbb{R}^4$ khi hạng bằng 4, nên cần thêm ít nhất $4 -$ hạng véc tơ."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}-1 & -2 \\\\ -3 & 3\\end{pmatrix}$ và $I$ là ma trận đơn vị cấp 2. Biết tồn tại hai số thực $x, y$ sao cho $A^2 = xA + yI$. Giá trị của $x + y$ bằng",
   "options": [
    "$11$.",
    "$-7$.",
    "$-18$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$A^2 = \\begin{pmatrix}7 & -4 \\\\ -6 & 15\\end{pmatrix}$<br>So sánh các phần tử ngoài đường chéo của $A^2$ và $xA + yI$: $x = 2$<br>So sánh phần tử hàng 1, cột 1: $7 = 2\\cdot(-1) + y \\Rightarrow y = 9$<br>$x + y = 11$",
   "note": "Với ma trận cấp 2: $A^2 = (\\operatorname{tr}A)A - (\\det A)I$, nên $x$ là vết và $y = -\\det A$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 3 có $\\det A = 4$. Giá trị của $\\det\\left(3A^T\\right)$ bằng",
   "options": [
    "$108$.",
    "$12$.",
    "$-108$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Với ma trận cấp 3: $\\det(kA) = k^3\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$<br>$\\det\\left(3A^T\\right) = 3^3\\cdot\\det A$<br>Thay $\\det A = 4$: kết quả $108$",
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
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}-2 & 1 & 0 & 1 \\\\ 3 & 1 & -2 & 0 \\\\ 0 & 0 & -2 & 1 \\\\ 0 & 0 & 3 & 1\\end{pmatrix}$. Nhận xét rằng $A$ có dạng khối tam giác $\\begin{pmatrix}P & Q\\\\ 0 & R\\end{pmatrix}$ với $P, R$ là các ma trận vuông cấp 2, định thức của $A$ bằng",
   "options": [
    "$25$.",
    "$-10$.",
    "$23$.",
    "$-25$."
   ],
   "answer": 0,
   "explain": "$P=\\begin{pmatrix}-2 & 1 \\\\ 3 & 1\\end{pmatrix}$, khử hàng được $\\det P=-5$; $R=\\begin{pmatrix}-2 & 1 \\\\ 3 & 1\\end{pmatrix}$, khử hàng được $\\det R=-5$.<br>Khai triển theo cấu trúc khối tam giác: $\\det A=\\det P\\det R=(-5)(-5)=25$.",
   "note": "Cộng bội của một hàng vào hàng khác không làm đổi định thức; đưa về dạng tam giác (hoặc tam giác khối) rồi nhân các phần tử (khối) trên đường chéo."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty}\\left[x^2\\left(e^{\\frac{2}{x}} - 1\\right) - 2x\\right]$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
   "options": [
    "$2$.",
    "$4$.",
    "$0$.",
    "$1$."
   ],
   "answer": 0,
   "explain": "Đặt $t = \\dfrac{2}{x} \\to 0$: $e^{t} - 1 = t + \\dfrac{t^2}{2} + o(t^2)$<br>$x^2\\left(e^{t} - 1\\right) = x^2\\left(\\dfrac{2}{x} + \\dfrac{4}{2x^2} + o\\left(\\dfrac{1}{x^2}\\right)\\right) = 2x + \\dfrac{4}{2} + o(1)$<br>$\\displaystyle \\lim = \\dfrac{4}{2} = 2$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 2}}{x - 1}$ là",
   "options": [
    "$3$.",
    "$1$.",
    "$2$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Khi $x\\to1$, tử số $\\sqrt{x^2+c}\\to\\sqrt{r^2+c}>0$ còn $x-r\\to0$, nên $x=1$ là tiệm cận đứng. Khi $x\\to+\\infty$, $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{\\sqrt{1+c/x^2}}{1-r/x}\\to1$; khi $x\\to-\\infty$, viết $|x|=-x$ được $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{-\\sqrt{1+c/x^2}}{1-r/x}\\to-1$.<br>Vậy có hai tiệm cận ngang $y=1$ và $y=-1$; tổng cộng $3$<br>Kết quả: $3$",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Dùng vi phân để ước tính sai số tương đối $\\dfrac{|\\Delta V|}{V}$ của thể tích hình cầu bán kính $r = 20$ cm khi sai số đo bán kính là $|\\Delta r| \\le \\dfrac{1}{2}$ cm",
   "options": [
    "$\\dfrac{3}{40}$.",
    "$\\dfrac{3}{80}$.",
    "$\\dfrac{3}{20}$.",
    "$\\dfrac{1}{40}$."
   ],
   "answer": 0,
   "explain": "$V = \\dfrac{4}{3}\\pi r^3 \\Rightarrow dV = 4\\pi r^2\\\\,dr$<br>$\\dfrac{|dV|}{V} = \\dfrac{4\\pi r^2\\\\,|dr|}{\\frac{4}{3}\\pi r^3} = \\dfrac{3|dr|}{r} = \\dfrac{3\\cdot\\dfrac{1}{2}}{20} = \\dfrac{3}{40}$"
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} y + y^{3}$. Đạo hàm của $f$ tại điểm $M(2;-1)$ theo hướng của véc tơ $\\vec l = (4;-3)$, tính bởi $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f(M)\\cdot\\dfrac{\\vec l}{|\\vec l|}$, bằng",
   "options": [
    "$- \\dfrac{37}{5}$.",
    "$-37$.",
    "$8$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x y,\\quad f'_y = x^{2} + 3 y^{2}$<br>$\\nabla f(M) = (-4;7)$<br>$|\\vec l| = \\sqrt{(4)^2 + (-3)^2} = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l}=\\dfrac{(-4)(4)+(7)(-3)}{5}=\\dfrac{-16+-21}{5}=\\dfrac{-37}{5}=- \\dfrac{37}{5}$.",
   "note": "Phải chia cho độ dài $|\\vec l|$: đạo hàm theo hướng dùng véc tơ đơn vị."
  },
  {
   "q": "Người ta tính chu kỳ $T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ của con lắc đơn từ hai đại lượng đo được. Biết chiều dài $l$ được đo với sai số tương đối không quá 2% và gia tốc trọng trường $g$ với sai số tương đối không quá 1%. Dùng vi phân toàn phần của $\\ln T$, sai số tương đối lớn nhất của $T$ xấp xỉ bằng",
   "options": [
    "1,5%.",
    "3%.",
    "0,5%.",
    "2%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln T=C+\\dfrac{1}{2}\\ln u-\\dfrac{1}{2}\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dT}{T}=+\\dfrac{1}{2}\\dfrac{du}{u}-\\dfrac{1}{2}\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Delta T|}{|T|}\\le \\dfrac{1}{2}\\dfrac{|\\Delta u|}{u}+\\dfrac{1}{2}\\dfrac{|\\Delta v|}{v}$.<br>$= \\dfrac{1}{2}\\cdot2\\% + \\dfrac{1}{2}\\cdot1\\% = 1{,}5\\%$.",
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
   "explain": "$L=xy-\\lambda(x+4y-8)$. $L_x=y-1\\lambda=0$ và $L_y=x-4\\lambda=0$, vì thế $y=1\\lambda$, $x=4\\lambda$.<br>Thay vào ràng buộc: $4\\lambda+4\\lambda=2(1)(4)\\lambda=8$, nên $\\lambda=\\dfrac{8}{2(1)(4)}$.<br>$x=\\dfrac{8}{21}$, $y=\\dfrac{8}{24}$. Vậy $S_{\\max}=xy=\\dfrac{8}{21}\\cdot\\dfrac{8}{24}=\\dfrac{64}{414}=4$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Cho chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n + 1}{3n + 2}\\right)^{n}$. Đặt $C = \\lim\\limits_{n\\to\\infty}\\sqrt[n]{u_n}$, khi đó:",
   "options": [
    "$C = \\dfrac{1}{3}$ và chuỗi hội tụ.",
    "$C = \\dfrac{1}{3}$ và chuỗi phân kỳ.",
    "$C = \\dfrac{1}{9}$ và chuỗi hội tụ.",
    "$C = 1$ và chuỗi hội tụ."
   ],
   "answer": 0,
   "explain": "$u_n=\\left(\\dfrac{n+1}{3n+2}\\right)^n$; do đó $\\sqrt[n]{u_n}=\\dfrac{n+1}{3n+2}\\to\\dfrac{1}{3}$<br>$C < 1$ nên theo tiêu chuẩn Cauchy chuỗi hội tụ",
   "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương."
  },
  {
   "q": "Xét chuỗi đan dấu $S = \\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^{n+1}}{n}$ và gọi $S_n$ là tổng riêng thứ $n$. Theo đánh giá sai số của chuỗi Leibniz, $|S - S_n| \\le a_{n+1}$ với $a_n = \\dfrac{1}{n}$. Số $n$ nhỏ nhất để đánh giá này bảo đảm $|S - S_n| \\le 0{,}01$ là",
   "options": [
    "$99$.",
    "$100$.",
    "$98$.",
    "$999$."
   ],
   "answer": 0,
   "explain": "Leibniz: $|S-S_n|\\le a_{n+1}=\\dfrac1{(n+1)^{1}}$. Muốn sai số không quá $\\varepsilon=0{,}01$, cần $\\dfrac1{(n+1)^{1}}\\le0{,}01$.<br>Biến đổi bất đẳng thức: $(n+1)^{1}\\ge100 \\Rightarrow n+1\\ge100\\approx100$.<br>$n$ nguyên nên $n\\ge99$; số nguyên nhỏ nhất là $n=99$.",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
   "options": [
    "$y' + y\\tan x = \\cos x$.",
    "$y' = (1 + x)(1 + y^2)$.",
    "$y' - y = xy^2$.",
    "$xy' = y + \\sqrt{x^2 + y^2}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' + y\\tan x = \\cos x$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$; Đã ở dạng $y'+(\\tan x)y=\\cos x$, bậc nhất tuyến tính theo $y,y'$.<br><b>Sai:</b> $y' = (1 + x)(1 + y^2)$ — $\\dfrac{dy}{1+y^2}=(1+x)\\,dx$, tách được biến.; đây là là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không phải dạng đang hỏi.<br><b>Sai:</b> $y' - y = xy^2$ — $y'-y=xy^2$: dạng Bernoulli với $\\alpha=2$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $xy' = y + \\sqrt{x^2 + y^2}$ — Chia cho $x$: $y'=y/x+\\sqrt{1+(y/x)^2}$; phụ thuộc duy nhất vào $y/x$.; đây là là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không phải dạng đang hỏi."
  },
  {
   "q": "Đường cong tích phân của phương trình vi phân toàn phần $(2 x + 2 y)\\,dx + (2 x + 6 y)\\,dy = 0$ đi qua điểm $M(-1;2)$ là một đường elip. Elip này cắt tia $Ox$ (phần $x > 0$ của trục hoành) tại điểm có hoành độ bằng",
   "options": [
    "$3$.",
    "$9$.",
    "$4$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial P}{\\partial y} = 2 = \\dfrac{\\partial Q}{\\partial x}$ nên vế trái là $du$ với $u = x^{2} + 2 x y + 3 y^{2}$<br>Nghiệm tổng quát: $x^{2} + 2 x y + 3 y^{2} = C$; qua $M(-1;2)$: $C = 9$<br>Cho $y = 0$: $x^{2} = 9 \\Rightarrow x = 3$ (lấy $x > 0$)",
   "note": "Kiểm tra $P'_y = Q'_x$ trước; nghiệm tổng quát là $u(x,y) = C$ với $u'_x = P$, $u'_y = Q$."
  },
  {
   "q": "Một ứng dụng mới được giới thiệu cho 4500 học viên của một trường. Số người đã cài đặt $P(t)$ sau $t$ tuần thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{4500}\\right)$ với $k = \\dfrac{\\ln 2}{2}$ và $P(0) = 900$. Biết nghiệm có dạng $P(t) = \\dfrac{4500}{1 + Ae^{-kt}}$. Số người đã cài đặt sau 4 tuần bằng",
   "options": [
    "$2250$.",
    "$3600$.",
    "$1500$.",
    "$2251$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=4$.<br>$kt=\\dfrac{\\ln2}{2}(4)=2\\ln2$, vì thế $e^{-kt}=e^{-2\\ln2}=2^{-2}=\\dfrac1{4}$.<br>$P(4)=\\dfrac{4500}{1+\\frac{4}{4}}=\\dfrac{4500\\cdot4}{4+4}=\\dfrac{18000}{8}=2250$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 4\\cos x$ với điều kiện $y(0) = 1;\\ y'(0) = -2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
   "options": [
    "$\\pi - 2$.",
    "$-2$.",
    "$\\pi$.",
    "$- \\pi - 2$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $4\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=2$.<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=-2$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $2\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=-2+\\pi=\\pi - 2$.",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
  },
  {
   "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
   "options": [
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
    "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
    "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
   ],
   "answer": 0,
   "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>$y\\ge0\\Leftrightarrow r\\sin\\varphi\\ge0\\Rightarrow\\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{2}^{4}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 1$ và phía trên mặt nón $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 1,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{3},\\ 0 \\le \\varphi \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\iiint_V z\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{3 \\pi}{16}$.",
    "$\\dfrac{3 \\pi}{8}$.",
    "$\\dfrac{3 \\pi}{32}$.",
    "$\\dfrac{\\pi}{4}$."
   ],
   "answer": 0,
   "explain": "Vì $z=\\rho\\cos\\theta$ và $dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$, $I=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\cos\\theta\\sin\\theta\\,d\\theta\\int_0^{1}\\rho^3\\,d\\rho$.<br>Các tích phân bằng $2\\pi$, $[\\sin^2\\theta/2]_0^{\\dfrac{\\pi}{3}}=\\sin^2\\dfrac{\\pi}{3}/2$, và $[\\rh\\frac{o^4}{4}]_0^{1}=1/4$. Vậy $I=2\\pi\\cdot\\dfrac{\\sin^2\\dfrac{\\pi}{3}}{2}\\cdot\\dfrac{1}{4}=\\dfrac{3 \\pi}{16}$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 2100 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 30% khách hàng của Y chuyển sang X. Hiện tại X có 1050 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$900$.",
    "$1200$.",
    "$1050$.",
    "$945$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $40x=30(2100-x)=63000-30x$, nên $(70)x=63000$ và $x=\\dfrac{63000}{70}=900$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho $u_1 = (1;-2;-1),\\ u_2 = (2;3;-2)$ và $v = (1;2;m)$ với $m$ là tham số. Véc tơ $v$ thuộc không gian con sinh bởi $u_1, u_2$ (tức $v$ biểu diễn tuyến tính được qua $u_1, u_2$) khi và chỉ khi $m$ bằng",
   "options": [
    "$-1$.",
    "$1$.",
    "$0$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$u_1, u_2$ độc lập tuyến tính nên $v \\in \\operatorname{span}\\{u_1, u_2\\} \\Leftrightarrow$ hệ $\\{u_1, u_2, v\\}$ phụ thuộc tuyến tính $\\Leftrightarrow \\det(u_1, u_2, v) = 0$<br>$\\det(u_1, u_2, v) = 7 m + 7$<br>$7 m + 7 = 0 \\Leftrightarrow m = -1$",
   "note": "$v$ thuộc không gian sinh bởi $u_1, u_2$ khi ba véc tơ phụ thuộc tuyến tính, tức định thức bằng 0."
  },
  {
   "q": "Cho các ma trận $A = \\begin{pmatrix}2 & -2 \\\\ -2 & 6\\end{pmatrix}$ và $B = \\begin{pmatrix}-4 & 1 \\\\ 10 & -1\\end{pmatrix}$. Ma trận $X$ thỏa mãn $A.X = X + B$ là",
   "options": [
    "$\\begin{pmatrix}0 & 3 \\\\ 2 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}-18 & -7 \\\\ 48 & 19\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & 2 \\\\ 3 & 1\\end{pmatrix}$.",
    "$\\begin{pmatrix}0 & -3 \\\\ -2 & -1\\end{pmatrix}$."
   ],
   "answer": 0,
   "explain": "$AX=X+B \\Rightarrow (A-I)X=B$.<br>$A-I=\\begin{pmatrix}1 & -2 \\\\ -2 & 5\\end{pmatrix},\\qquad B=\\begin{pmatrix}-4 & 1 \\\\ 10 & -1\\end{pmatrix}$.<br>$X=(A-I)^{-1}B=\\begin{pmatrix}5 & 2 \\\\ 2 & 1\\end{pmatrix}\\begin{pmatrix}-4 & 1 \\\\ 10 & -1\\end{pmatrix}=\\begin{pmatrix}0 & 3 \\\\ 2 & 1\\end{pmatrix}$.<br>Kiểm tra: $\\begin{pmatrix}2 & -2 \\\\ -2 & 6\\end{pmatrix}\\begin{pmatrix}0 & 3 \\\\ 2 & 1\\end{pmatrix}=\\begin{pmatrix}0 & 3 \\\\ 2 & 1\\end{pmatrix}+\\begin{pmatrix}-4 & 1 \\\\ 10 & -1\\end{pmatrix}$.",
   "note": "$AX = B \\Rightarrow X = A^{-1}B$ (nhân bên trái); $XA = B \\Rightarrow X = BA^{-1}$ (nhân bên phải); không được đổi thứ tự."
  },
  {
   "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b + 1)x + 16y = a^2 - 4\\\\ x + ay = 3\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
   "options": [
    "$(a;b) = (4;3)$.",
    "$(a;b) = (-4;3)$.",
    "$(a;b) = (4;-3)$.",
    "$(a;b) = (-4;-3)$."
   ],
   "answer": 0,
   "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+1=\\lambda$, $16=\\lambda a$, $a^2 - 4=\\lambda3$.<br>Với $(a,b)=(4,3)$: $b+1=4=4$; $16=4\\cdot4=16$; $a^2 - 4=12=4\\cdot3=12$.<br>Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=4$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
   "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 0}\\dfrac{a - \\cos bx}{x^2} = \\dfrac{1}{2}$ với $b > 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$3$.",
    "$\\dfrac{3}{2}$.",
    "$1$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Mẫu số tiến về 0 và giới hạn hữu hạn nên tử số cũng tiến về 0: $a - 1 = 0 \\Rightarrow a = 1$<br>$1 - \\cos bx \\sim \\dfrac{b^2x^2}{2}$ nên giới hạn bằng $\\dfrac{b^2}{2}$<br>$\\dfrac{b^2}{2} = \\dfrac{1}{2} \\Rightarrow b = 1$ (vì $b > 0$)<br>$2a + b = 3$",
   "note": "Mẫu tiến về 0 mà giới hạn hữu hạn thì tử cũng phải tiến về 0: điều kiện này cho $a$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\cos 4x & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ có đạo hàm cấp hai tại $x = 0$. Giá trị của $2a + b$ bằng",
   "options": [
    "$-16$.",
    "$-8$.",
    "$1$.",
    "$-15$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=\\cos{\\left(4 x \\right)}$ có $g(0)=1$, $g^\\prime(0)=0$, $g^{\\prime\\prime}(0)=-16$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=1,\\ b=0,\\ 2a=-16$, do đó $a=-8$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $2a + b=-16$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 6$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
   "options": [
    "$\\dfrac{\\operatorname{asinh}{\\left(6 \\right)}}{2} + 3 \\sqrt{37}$.",
    "$\\dfrac{\\operatorname{asinh}{\\left(6 \\right)}}{4} + \\dfrac{3 \\sqrt{37}}{2}$.",
    "$\\operatorname{asinh}{\\left(6 \\right)} + 6 \\sqrt{37}$.",
    "$1 + \\dfrac{\\operatorname{asinh}{\\left(6 \\right)}}{2} + 3 \\sqrt{37}$."
   ],
   "answer": 0,
   "explain": "$y' = x$, $L = \\displaystyle\\int_0^{6}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{6} = \\dfrac{\\operatorname{asinh}{\\left(6 \\right)}}{2} + 3 \\sqrt{37}$"
  },
  {
   "q": "Một đêm nhạc gây quỹ bán ba hạng vé: hạng thường giá 60 nghìn đồng, hạng trung giá 90 nghìn đồng và hạng VIP giá 150 nghìn đồng. Ban tổ chức bán được tổng cộng 150 vé, thu về 11100 nghìn đồng; số vé hạng thường nhiều hơn tổng số vé hai hạng còn lại là 50 vé. Số vé hạng VIP đã bán bằng",
   "options": [
    "$10$.",
    "$40$.",
    "$20$.",
    "$5$."
   ],
   "answer": 0,
   "explain": "Hệ phương trình: $\\begin{cases}x+y+z=150\\\\60x+90y+150z=11100\\\\x-y-z=50\\end{cases}$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 150\\\\ 60 & 90 & 150 & 11100\\\\ 1 & -1 & -1 & 50\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (60)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 150\\\\ 0 & 30 & 90 & 2100\\\\ 1 & -1 & -1 & 50\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 150\\\\ 0 & 30 & 90 & 2100\\\\ 0 & -2 & -2 & -100\\end{array}\\right)$$<br>$R_2 \\leftarrow \\dfrac{1}{30}R_2$: $$\\left(\\begin{array}{rrr|r}1 & 1 & 1 & 150\\\\ 0 & 1 & 3 & 70\\\\ 0 & -2 & -2 & -100\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (1)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 80\\\\ 0 & 1 & 3 & 70\\\\ 0 & -2 & -2 & -100\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (-2)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 80\\\\ 0 & 1 & 3 & 70\\\\ 0 & 0 & 4 & 40\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{4}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & -2 & 80\\\\ 0 & 1 & 3 & 70\\\\ 0 & 0 & 1 & 10\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (-2)R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 100\\\\ 0 & 1 & 3 & 70\\\\ 0 & 0 & 1 & 10\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (3)R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 100\\\\ 0 & 1 & 0 & 40\\\\ 0 & 0 & 1 & 10\\end{array}\\right)$$<br>$(x,y,z)=(100,40,10)$; số vé VIP đã bán: $z=10$.",
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
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}\\left[(-1)^{n-1}\\left(\\dfrac{2}{3}\\right)^n + \\dfrac{1}{3^{2n}}\\right] = \\dfrac{a}{b}$ (trong đó $\\dfrac{a}{b}$ là phân số tối giản và $a, b \\in \\mathbb{N}^*$), giá trị của $a + b$ bằng",
   "options": [
    "$61$.",
    "$19$.",
    "$25$.",
    "$64$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^{n-1}\\left(\\dfrac{2}{3}\\right)^n = \\dfrac{\\frac{2}{3}}{1 + \\frac{2}{3}} = \\dfrac{2}{5}$<br>$\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{9^n} = \\dfrac{\\frac{1}{9}}{1 - \\frac{1}{9}} = \\dfrac{1}{8}$<br>Tổng: $\\dfrac{21}{40} \\Rightarrow a + b = 61$",
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
   "q": "Một bể có 500 lít nước muối với nồng độ muối là 0,05 kg/lít. Người ta bơm nước muối với nồng độ 0,01 kg/lít vào bể với tốc độ 20 lít/phút, đồng thời rút nước khỏi bể với cùng tốc độ để thể tích không đổi. Giả sử tại mọi thời điểm nồng độ muối tại mọi vị trí trong bể là như nhau. Sau 50 phút, lượng muối trong bể là bao nhiêu kg (kết quả làm tròn đến hàng phần chục)?",
   "options": [
    "7,7.",
    "3,4.",
    "5,0.",
    "2,7."
   ],
   "answer": 0,
   "explain": "Gọi $S(t)$ là lượng muối (kg): $S' = 0{,}01\\cdot20 - \\dfrac{S}{500}\\cdot20 = 0{,}2 - \\dfrac{20S}{500},\\quad S(0) = 25$<br>Nghiệm: $S(t) = 5 + Ce^{-20t/500}$; $S(0) = 25 \\Rightarrow C = 20$<br>$S(50) = 5 + 20e^{-2} \\approx 7{,}7$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho miền $D = \\{(x,y): x^2 + y^2 \\le 9,\\ 0 \\le x \\le y\\}$. Giá trị của tích phân $\\displaystyle\\iint_D x^2\\,dxdy$ bằng",
   "options": [
    "$- \\dfrac{81}{16} + \\dfrac{81 \\pi}{32}$.",
    "$- \\dfrac{9}{4} + \\dfrac{9 \\pi}{8}$.",
    "$- \\dfrac{81}{8} + \\dfrac{81 \\pi}{16}$.",
    "$\\dfrac{81 \\pi}{16}$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le r \\le 3,\\ \\dfrac{\\pi}{4} \\le \\varphi \\le \\dfrac{\\pi}{2}$<br>$I = \\displaystyle\\int d\\varphi\\int_0^{3}\\left(r^{2} \\cos^{2}\\varphi\\right)r\\,dr = \\displaystyle \\int \\dfrac{81 \\cos^{2}\\varphi}{4}\\,d\\varphi$ (cận của $\\varphi$ như trên)<br>$I = - \\dfrac{81}{16} + \\dfrac{81 \\pi}{32}$",
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
   "explain": "Tọa độ cầu cho $\\sqrt{x^2+y^2+z^2}=\\rho$ và $dV=\\rho^2\\sin\\theta\\,d\\rho d\\theta d\\varphi$, nên $I=\\int_0^{2\\pi}d\\varphi\\int_0^\\pi\\sin\\theta\\,d\\theta\\int_0^{5}\\rho^3\\,d\\rho$.<br>$\\int_0^{2\\pi}d\\varphi=2\\pi$, $[-\\cos\\theta]_0^\\pi=2$, và $[\\rh\\frac{o^4}{4}]_0^{5}=625/4$. Nhân lại: $I=2\\pi\\cdot2\\cdot\\dfrac{625}{4}=625 \\pi$.",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Cho $C$ là đường cong kín, trơn từng khúc, lấy theo chiều dương và bao quanh miền $D$ có diện tích $S$. Phát biểu nào sau đây là đúng?",
   "options": [
    "$S = \\dfrac12\\displaystyle\\oint_C x\\,dy - y\\,dx$.",
    "$S = \\displaystyle\\oint_C x\\,dx + y\\,dy$.",
    "$S = \\displaystyle\\oint_C y\\,dx$.",
    "$S = \\displaystyle\\oint_C x\\,dy - y\\,dx$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $S = \\dfrac12\\displaystyle\\oint_C x\\,dy - y\\,dx$. Theo công thức Green: $\\displaystyle\\oint_C x\\,dy - y\\,dx = \\iint_D(1 + 1)\\,dxdy = 2S$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C x\\,dx + y\\,dy$. $x\\,dx + y\\,dy = d\\left(\\dfrac{x^2 + y^2}{2}\\right)$ nên tích phân theo đường kín bằng $0$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C y\\,dx$. Theo công thức Green: $\\displaystyle\\oint_C y\\,dx = \\iint_D(0 - 1)\\,dxdy = -S$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C x\\,dy - y\\,dx$. Tích phân này bằng $2S$."
  },
  {
   "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y)\\,dx + x y\\,dy$ bằng",
   "options": [
    "$\\dfrac{7}{30}$.",
    "$- \\dfrac{1}{10}$.",
    "$- \\dfrac{7}{30}$.",
    "$\\dfrac{7}{15}$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = y + 1$<br>$I = \\displaystyle\\int_0^{1}dx\\int_{x^2}^{x}(y + 1)\\,dy = \\int_0^{1}\\left(- \\dfrac{x^{4}}{2} - \\dfrac{x^{2}}{2} + x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{10} - \\dfrac{x^{3}}{6} + \\dfrac{x^{2}}{2}\\right]_0^{1} = \\dfrac{7}{30}$",
   "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ."
  }
 ],
 "groups": [
  {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y + z = 6\\\\ 2x + 3y + z = 11\\\\ 2x - y + mz = 6\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ.",
   "questions": [
    {
     "q": "Khi $m = -2$, định thức của ma trận $A$ bằng",
     "options": [
      "$-1$.",
      "$-3$.",
      "$1$.",
      "$-2$."
     ],
     "answer": 0,
     "explain": "$\\det A = - m - 3$<br>Với $m = -2$: $\\det A = -1$"
    },
    {
     "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
     "options": [
      "$-3$.",
      "$-2$.",
      "$3$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = - m - 3 = 0 \\Leftrightarrow m = -3$"
    },
    {
     "q": "Khi $m = -2$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
     "options": [
      "$4$.",
      "$5$.",
      "$-4$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "Với $m = -2$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = -1$)<br>$(x_0;y_0;z_0) = (3;2;-1)$<br>$x_0 + y_0 + z_0 = 4$",
     "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} + x y + y^{2}$ và điểm $M(1;2)$.",
   "questions": [
    {
     "q": "Gọi $\\nabla f(M) = (p;q)$ là véc tơ gradient của $f$ tại $M$, giá trị của $p + q$ bằng",
     "options": [
      "$9$.",
      "$-1$.",
      "$20$.",
      "$4$."
     ],
     "answer": 0,
     "explain": "$f'_x = 2 x + y,\\quad f'_y = x + 2 y$<br>$\\nabla f(M) = (4;5) \\Rightarrow p + q = 9$"
    },
    {
     "q": "Đạo hàm của $f$ tại $M$ theo hướng của véc tơ $\\vec l = (4;-3)$ bằng",
     "options": [
      "$\\dfrac{1}{5}$.",
      "$1$.",
      "$\\dfrac{8}{5}$.",
      "$- \\dfrac{1}{5}$."
     ],
     "answer": 0,
     "explain": "$|\\vec l| = 5$<br>$\\dfrac{\\partial f}{\\partial \\vec l} = \\dfrac{(4)\\cdot(4) + (5)\\cdot(-3)}{5} = \\dfrac{1}{5}$"
    },
    {
     "q": "Mặt phẳng tiếp xúc với mặt cong $z = f(x,y)$ tại điểm ứng với $M$ cắt trục $Oz$ tại điểm có cao độ bằng",
     "options": [
      "$-7$.",
      "$7$.",
      "$21$.",
      "$9$."
     ],
     "answer": 0,
     "explain": "$z = 7 + (4)(x - 1) + (5)(y - 2)$<br>Cho $x = y = 0$: $z = -7$",
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
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y) = 6xy$ với điều kiện $\\dfrac{x^2}{9} + \\dfrac{y^2}{16} = 1$.",
   "answer": [
    "36"
   ],
   "explain": "Đặt $x = 3\\cos t,\\ y = 4\\sin t$: $f = 6\\cdot3\\cdot4\\sin t\\cos t$, lớn nhất bằng $\\dfrac{6\\cdot3\\cdot4}{2} = 36$<br>Đáp số: $36$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(3 x + 2)^{n}}{n^2\\cdot6^n}$ là một đoạn $[\\alpha;\\beta]$. Tính độ dài $\\beta - \\alpha$ của đoạn đó.",
   "answer": [
    "4"
   ],
   "explain": "Đặt $t = 3 x + 2$: chuỗi $\\displaystyle \\sum\\dfrac{t^n}{n^2\\cdot6^n}$ hội tụ khi và chỉ khi $|t| \\le 6$ (tại hai đầu mút là chuỗi $\\displaystyle \\sum\\dfrac{(\\pm1)^n}{n^2}$ hội tụ)<br>$-6 \\le 3 x + 2 \\le 6 \\Leftrightarrow - \\dfrac{8}{3} \\le x \\le \\dfrac{4}{3}$<br>$\\beta - \\alpha = 4$",
   "note": "Giải bất phương trình theo $x$: độ dài miền hội tụ bằng $2R$ chia cho hệ số của $x$ trong ngoặc."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 4y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
   "answer": [
    "3"
   ],
   "explain": "Nghiệm đặc trưng $k = -1,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 4\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(2) - 5\\cdot2 + 4I = 0 \\Rightarrow I = \\dfrac{12}{4} = 3$",
   "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình."
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
