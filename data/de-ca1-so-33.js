// ĐỀ SỐ 33 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-33",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 33",
 "essayMinutes": 60,
 "testMinutes": 90,
 "testPoints": 70,
 "essayPoints": 30,
 "essay": {
  "theme": "Cá nhân và cộng đồng",
  "prompt": "Mức sinh của Việt Nam đã giảm từ 2,1 con/phụ nữ năm 2021 xuống 1,93 con/phụ nữ năm 2025, thấp hơn mức sinh thay thế; cơ quan dân số dự báo thời kỳ “dân số vàng” sẽ kết thúc trong khoảng một thập kỷ tới. Luật Dân số có hiệu lực từ ngày 01/7/2026 chuyển trọng tâm từ kế hoạch hóa gia đình sang bảo đảm quyền sinh sản, đồng thời có các chính sách khuyến khích sinh đủ hai con. Trước thực tế đó, có người cho rằng kết hôn và sinh con hoàn toàn là chuyện riêng của mỗi người; người khác lại cho rằng mỗi lựa chọn cá nhân đều góp phần định hình tương lai chung của cả cộng đồng.",
  "source": "(Tổng hợp từ số liệu của Cục Thống kê, Cục Dân số và báo chí, 2025 – 2026)",
  "task": "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày suy nghĩ của mình về mối quan hệ giữa quyền lựa chọn của cá nhân và trách nhiệm đối với cộng đồng được gợi ra từ đoạn văn bản trên.",
  "minWords": 500
 },
 "mcq": [
  {
   "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;0;1)$ và $v = (m;m;-4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
   "options": [
    "$6$.",
    "$5$.",
    "$8$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "$\\langle u,v\\rangle=(m)(m)+(0)(m)+(1)(-4)=m^{2} - 4=\\left(m - 2\\right) \\left(m + 2\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -2 \\text{ hoặc } m > 2$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, 3, 4, 5\\}$; có $6$ giá trị",
   "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ $S = \\{u_1(3;2;-2),\\ u_2(0;-1;-2),\\ u_3(0;3;m)\\}$ với $m$ là tham số. Hệ $S$ là một cơ sở của $\\mathbb{R}^3$ khi và chỉ khi",
   "options": [
    "$m \\ne 6$.",
    "$m = 6$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 8$."
   ],
   "answer": 0,
   "explain": "Ba véc tơ trong $\\mathbb{R}^3$ là cơ sở khi và chỉ khi định thức của ma trận có ba hàng là các véc tơ khác 0.<br>Khai triển định thức: $\\det(u_1,u_2,u_3)=18 - 3 m=- 3 \\left(m - 6\\right)$<br>Giải $18 - 3 m=0$: $m=6$; do đó định thức khác 0 khi và chỉ khi $m\\ne6$",
   "note": "Số véc tơ đã bằng số chiều nên chỉ cần định thức khác 0."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 2 & 2 \\\\ 0 & -2\\end{pmatrix}$ và $B = \\begin{pmatrix}-1 & -1 & 0 \\\\ 0 & 0 & 1\\end{pmatrix}$. Biết hạng của một tích không vượt quá hạng của mỗi thừa số, hạng của ma trận $AB$ (cấp $3\\times3$) bằng",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$\\operatorname{rank}A = 2,\\ \\operatorname{rank}B = 2$ nên $\\operatorname{rank}(AB) \\le 2$<br>$AB = \\begin{pmatrix}-1 & -1 & 1 \\\\ -2 & -2 & 2 \\\\ 0 & 0 & -2\\end{pmatrix}$, dạng bậc thang: $\\begin{pmatrix}-1 & -1 & 1 \\\\ 0 & 0 & -2 \\\\ 0 & 0 & 0\\end{pmatrix}$<br>$\\operatorname{rank}(AB) = 2$",
   "note": "$\\operatorname{rank}(AB) \\le \\min\\{\\operatorname{rank}A, \\operatorname{rank}B\\}$, nên tích của ma trận $3\\times2$ với $2\\times3$ không thể có hạng 3."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}2 & -2 \\\\ 1 & 0\\end{pmatrix}$. Biết $A$ thỏa mãn phương trình đặc trưng của chính nó (định lí Cayley – Hamilton): $A^2 = 2A - 2I$. Phần tử thuộc hàng 1 và cột 2 của ma trận $A^{3}$ bằng",
   "options": [
    "$-4$.",
    "$2$.",
    "$-8$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Với $\\operatorname{tr}A=2$ và $\\det A=2$, Cayley–Hamilton cho $A^2-(2)A+(2)I=0$, tức $A^2=2A-2I=\\begin{pmatrix}2 & -4 \\\\ 2 & -2\\end{pmatrix}$<br>Nhân đẳng thức $A^2=\\begin{pmatrix}2 & -4 \\\\ 2 & -2\\end{pmatrix}$ với $A$: $A^3=A^2A=\\begin{pmatrix}0 & -4 \\\\ 2 & -4\\end{pmatrix}$; do đó phần tử $(1,2)$ của $A^3$ là -4.<br>Phần tử hàng 1, cột 2 của $A^3$ là $-4$.",
   "note": "Dùng hệ thức $A^2 = pA + qI$ để hạ bậc dần ($A^3 = A\\cdot A^2$), không cần nhân ma trận nhiều lần."
  },
  {
   "q": "Định thức của ma trận $M = \\begin{pmatrix}-1 & 3 & 0 & 0 \\\\ -2 & 4 & 0 & 0 \\\\ 3 & -2 & -1 & -2 \\\\ 4 & 4 & 0 & 1\\end{pmatrix}$ bằng<span class=\"q-hint\">Gợi ý: $M$ có dạng tam giác khối nên $\\det M$ bằng tích định thức của hai khối vuông cấp 2 nằm trên đường chéo.</span>",
   "options": [
    "$-2$.",
    "$1$.",
    "$-22$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "Khối trên đường chéo: $M_1 = \\begin{pmatrix}-1 & 3 \\\\ -2 & 4\\end{pmatrix},\\ M_2 = \\begin{pmatrix}-1 & -2 \\\\ 0 & 1\\end{pmatrix}$<br>$\\det M_1 = 2,\\quad \\det M_2 = -1$<br>$\\det M = 2\\cdot(-1) = -2$",
   "note": "Chỉ áp dụng khi một khối ngoài đường chéo toàn số 0; khối còn lại không ảnh hưởng tới định thức."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^n$, cho hệ $S = \\{u_1, u_2, \\dots, u_k\\}$ độc lập tuyến tính. Phát biểu nào sau đây là đúng?",
   "options": [
    "Mọi hệ con khác rỗng của $S$ đều độc lập tuyến tính.",
    "Thêm một véc tơ bất kỳ vào $S$ thì hệ mới vẫn độc lập tuyến tính.",
    "$k = n$.",
    "Hệ $S$ là một cơ sở của $\\mathbb{R}^n$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Mọi hệ con khác rỗng của $S$ đều độc lập tuyến tính. Giả sử một hệ con có $\\sum_{i\\in J}c_i u_i=0$. Gán $c_i=0$ cho mọi chỉ số không thuộc $J$; ta được hệ thức $\\sum_{i=1}^k c_i u_i=0$ trong $S$. Vì $S$ độc lập nên mọi $c_i=0$, do đó hệ con cũng độc lập.<br><b>Sai:</b> Thêm một véc tơ bất kỳ vào $S$ thì hệ mới vẫn độc lập tuyến tính. Thêm chính véc tơ $u_1 + u_2$ (hoặc véc tơ không) thì hệ mới phụ thuộc tuyến tính.<br><b>Sai:</b> $k = n$. Chỉ có $k \\le n$; chẳng hạn một véc tơ khác không trong $\\mathbb{R}^3$ là hệ độc lập tuyến tính với $k = 1$.<br><b>Sai:</b> Hệ $S$ là một cơ sở của $\\mathbb{R}^n$. Chỉ đúng khi $k = n$."
  },
  {
   "q": "Cho ma trận vuông cấp 4: $A = \\begin{pmatrix}5 & 1 & 1 & 1 \\\\ 1 & 5 & 1 & 1 \\\\ 1 & 1 & 5 & 1 \\\\ 1 & 1 & 1 & 5\\end{pmatrix}$. Bằng cách cộng tất cả các hàng vào hàng thứ nhất rồi khử, định thức của $A$ bằng",
   "options": [
    "$512$.",
    "$256$.",
    "$32$.",
    "$624$."
   ],
   "answer": 0,
   "explain": "$h_1 \\to h_1+h_2+h_3+h_4$: mỗi phần tử hàng 1 bằng $a+4b=8$. Rút $8$ khỏi hàng này để hàng đầu thành $(1,1,1,1)$, đồng thời nhân định thức với thừa số $8$.<br>Với hàng đầu $(1,1,1,1)$, thực hiện $h_i\\to h_i-(1)h_1$ với $i=2,3,4$: các phần tử ngoài đường chéo thành $b-b=0$, còn mỗi phần tử đường chéo dưới bằng $(a+b)-b=a$. Đường chéo là $1,4,4,4$.<br>$\\det A = (8)\\cdot(4)^3 = 512$",
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
   "explain": "$(1 + 3x)^{\\fracx} = e^{\\frac{\\ln(1 + 3x)}{x}}$ và $\\dfrac{\\ln(1 + 3x)}{x} = 3 - \\dfrac{9x}{2} + o(x)$<br>$(1 + 3x)^{\\fracx} = e^{3}\\cdot e^{-\\frac{9x}{2} + o(x)} = e^{3}\\left(1 - \\dfrac{9x}{2} + o(x)\\right)$<br>$\\displaystyle \\lim = -\\dfrac{9}{2}e^{3} = - \\dfrac{9 e^{3}}{2}$",
   "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$."
  },
  {
   "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} - 7 x + 12}{x^{2} - 9}$ là",
   "options": [
    "$2$.",
    "$1$.",
    "$3$.",
    "$4$."
   ],
   "answer": 0,
   "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 4\\right) \\left(x - 3\\right)}{\\left(x - 3\\right) \\left(x + 3\\right)}=\\dfrac{x - 4}{x + 3}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=3$, tử cũng bằng $0$ nên nhân tử $(x-3)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=-3$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-3$..<br>Chia đa thức: $\\dfrac{x - 4}{x + 3}=1+\\dfrac{-7}{x + 3}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 2.",
   "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau)."
  },
  {
   "q": "Cho $u = u(x)$, $v = v(x)$ là hai hàm khả vi. Phát biểu nào sau đây về vi phân là đúng?",
   "options": [
    "$d(uv) = v\\,du + u\\,dv$.",
    "$d(uv) = du\\cdot dv$.",
    "$d\\left(\\dfrac{u}{v}\\right) = \\dfrac{du}{dv}$.",
    "$d(u^2) = 2u$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $d(uv) = v\\,du + u\\,dv$. $(uv)' = u'v + uv'$, nhân hai vế với $dx$.<br><b>Sai:</b> $d(uv) = du\\cdot dv$. Với $u = v = x$: $d(x^2) = 2x\\,dx$, khác $dx\\cdot dx$.<br><b>Sai:</b> $d\\left(\\dfrac{u}{v}\\right) = \\dfrac{du}{dv}$. $d\\left(\\dfrac{u}{v}\\right) = \\dfrac{v\\,du - u\\,dv}{v^2}$.<br><b>Sai:</b> $d(u^2) = 2u$. Thiếu vi phân của $u$: $d(u^2) = 2u\\,du$."
  },
  {
   "q": "Cho mặt cong $z = x^{3} + y^{2}$. Mặt phẳng tiếp xúc với mặt cong tại điểm $M(2;-1;9)$ có phương trình $z = z_0 + f'_x(M)(x - x_0) + f'_y(M)(y - y_0)$. Mặt phẳng này cắt trục $Oz$ tại điểm có cao độ bằng",
   "options": [
    "$-17$.",
    "$9$.",
    "$35$.",
    "$17$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 x^{2} \\to 12,\\quad f'_y = 2 y \\to -2$ tại $(2;-1)$<br>Mặt phẳng tiếp xúc: $z = 9 + (12)(x - 2) + (-2)(y + 1)$<br>Cho $x = y = 0$: $z = -17$",
   "note": "Mặt phẳng tiếp xúc dùng giá trị các đạo hàm riêng tại tiếp điểm; cho $x = y = 0$ để tìm giao điểm với trục $Oz$."
  },
  {
   "q": "Người ta tính chu kỳ $T = 2\\pi\\sqrt{\\dfrac{l}{g}}$ của con lắc đơn từ hai đại lượng đo được. Biết chiều dài $l$ được đo với sai số tương đối không quá 1% và gia tốc trọng trường $g$ với sai số tương đối không quá 1%. Dùng vi phân toàn phần của $\\ln T$, sai số tương đối lớn nhất của $T$ xấp xỉ bằng",
   "options": [
    "1%.",
    "2%.",
    "0%.",
    "0,25%."
   ],
   "answer": 0,
   "explain": "Từ công thức đã cho, viết dạng lũy thừa theo hai đại lượng đo: $\\ln T=C+\\dfrac{1}{2}\\ln u-\\dfrac{1}{2}\\ln v$ (hằng số $C$ không đổi).<br>Vi phân: $\\dfrac{dT}{T}=+\\dfrac{1}{2}\\dfrac{du}{u}-\\dfrac{1}{2}\\dfrac{dv}{v}$. Lấy trị tuyệt đối và dùng các cận đo: $\\dfrac{|\\Delta T|}{|T|}\\le \\dfrac{1}{2}\\dfrac{|\\Delta u|}{u}+\\dfrac{1}{2}\\dfrac{|\\Delta v|}{v}$.<br>$= \\dfrac{1}{2}\\cdot1\\% + \\dfrac{1}{2}\\cdot1\\% = 1\\%$.",
   "note": "Lấy lôgarit rồi vi phân: sai số tương đối của tích, thương bằng tổng các sai số tương đối nhân với trị tuyệt đối của số mũ."
  },
  {
   "q": "Giá trị nhỏ nhất của hàm số $f(x,y) = x^2 + y^2$ với điều kiện $2 x + y = 15$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng phương pháp nhân tử Lagrange.</span>",
   "options": [
    "$45$.",
    "$15$.",
    "$90$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "$L=x^2+y^2-\\lambda(2x+y-15)$. Từ $L_x=2x-2\\lambda=0$ và $L_y=2y-1\\lambda=0$, ta có $x=\\dfrac{2\\lambda}{2}$, $y=\\dfrac{1\\lambda}{2}$.<br>Thay vào ràng buộc: $\\dfrac{4\\lambda}{2}+\\dfrac{1\\lambda}{2}=\\dfrac{(4+1)\\lambda}{2}=15$, nên $\\lambda=\\dfrac{215}{5}$.<br>$(x,y)=(\\dfrac{215}{5},\\dfrac{115}{5})$.<br>Khi đó $x^2+y^2=\\dfrac{4225+1225}{25}=\\dfrac{225(4+1)}{25}=\\dfrac{225}{5}=45$.",
   "note": "Rút một biến từ điều kiện, hoặc dùng $\\nabla f = \\lambda\\nabla g$; nhớ kiểm tra đó là giá trị lớn nhất hay nhỏ nhất."
  },
  {
   "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{2n+1}{3n+2}\\right)^n$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\sqrt[n]{n}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n(n+1)}}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\ln\\left(1 + \\dfrac1n\\right)$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$1$.",
    "$0$.",
    "$2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\sqrt[n]{u_n}=(2n+1)/(3n+2)\\to2/3<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 2: $\\sqrt[n]{n}\\to1$, do đó $u_n=1/(n\\sqrt[n]n)\\sim1/n$; phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $u_n=1/\\sqrt{n(n+1)}\\sim1/n$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $\\ln(1+1/n)\\sim1/n$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Số chuỗi hội tụ: $1$",
   "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n\\sqrt n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n(n+1)}{3n-1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n n}{n+1}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\left(1 - \\cos\\dfrac1n\\right)$. Có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
   "options": [
    "$2$.",
    "$0$.",
    "$1$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $a_n=n^{-3/2}\\downarrow0$ và $\\displaystyle \\sum|u_n|=\\displaystyle \\sum n^{-3/2}$ hội tụ ($p=3/2>1$), nên hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Chuỗi thứ 2: $|u_n|=(n+1)/(3n-1)\\to1/3\\ne0$, nên phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $|u_n|=n/(n+1)\\to1\\ne0$, điều kiện cần không thỏa; phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $0<1-\\cos(1/n)\\sim1/(2n^2)$; so sánh với $\\sum1/n^2$ cho hội tụ tuyệt đối. Kết luận: hội tụ tuyệt đối.<br>Số chuỗi hội tụ: $2$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân có biến số phân ly?",
   "options": [
    "$y' = (1 + x)(1 + y^2)$.",
    "$(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$.",
    "$y' + \\dfrac{y}{x} = xy^3$.",
    "$y' + y\\tan x = \\cos x$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = (1 + x)(1 + y^2)$ — Viết được dưới dạng $g(y)\\,dy = h(x)\\,dx$; $\\dfrac{dy}{1+y^2}=(1+x)\\,dx$, tách được biến.<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — $P=(y\\cos x + 2x),\\ Q=\\sin x - 2y$: $\\frac{\\partial P}{\\partial y}=\\cos x$ và $\\frac{\\partial Q}{\\partial x}=\\cos x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi.<br><b>Sai:</b> $y' + \\dfrac{y}{x} = xy^3$ — $y'+\\dfracx y=xy^3$: dạng Bernoulli với $\\alpha=3$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $y' + y\\tan x = \\cos x$ — Đã ở dạng $y'+(\\tan x)y=\\cos x$, bậc nhất tuyến tính theo $y,y'$.; đây là là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không phải dạng đang hỏi."
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
   "explain": "Đặt $z=1/y$, do đó $y^\\prime=-z^\\prime/z^2$.<br>Thay vào $y^\\prime+y/x=1xy^2$ rồi nhân với $-1$: $z^\\prime-z/x=-x$.<br>Chia cho $x$: $(z/x)^\\prime=(xz^\\prime-z)/x^2=-1$. Tích phân hai vế: $z/x=-x+C$, tức $z=x(C-x)$.<br>$y(1)=1/z(1)=1/(C-1)=\\dfrac{1}{2}$ nên $C-1=1/\\dfrac{1}{2}=2$ và $C=3$.<br>$z(2)=2(C-21)=2(3-2)=2$; vậy $y(2)=1/z(2)=\\dfrac{1}{2}$.",
   "note": "Bernoulli: đặt $z = y^{1-\\alpha}$; với $\\alpha = 2$ là $z = \\dfrac1y$, khi đó $z' = -\\dfrac{y'}{y^2}$."
  },
  {
   "q": "Một tin đồn lan truyền trong một khu dân cư có 1800 người. Số người đã biết tin $P(t)$ sau $t$ ngày thỏa mãn phương trình logistic $P' = kP\\left(1 - \\dfrac{P}{1800}\\right)$ với $k = \\dfrac{\\ln 2}{3}$ và $P(0) = 600$. Biết nghiệm có dạng $P(t) = \\dfrac{1800}{1 + Ae^{-kt}}$. Số người biết tin sau 3 ngày bằng",
   "options": [
    "$900$.",
    "$1200$.",
    "$600$.",
    "$901$."
   ],
   "answer": 0,
   "explain": "$P(0)=\\dfrac{M}{1+A}=P_0$; nhân chéo $M=P_0(1+A)$ nên $A=\\dfrac{M}{P_0}-1=2$.<br>$kt=\\dfrac{\\ln2}{3}(3)=1\\ln2$, vì thế $e^{-kt}=e^{-1\\ln2}=2^{-1}=\\dfrac1{2}$.<br>$P(3)=\\dfrac{1800}{1+\\frac{2}{2}}=\\dfrac{1800\\cdot2}{2+2}=\\dfrac{3600}{4}=900$.",
   "note": "Thay $t = 0$ để tìm hằng số trong công thức nghiệm; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 12\\cos x$ với điều kiện $y(0) = 3;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
   "options": [
    "$2 + 3 \\pi$.",
    "$2$.",
    "$3 \\pi$.",
    "$2 - 3 \\pi$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $12\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=6$.<br>$y = C_1\\cos x + C_2\\sin x + 6x\\sin x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=2$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $6\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=2+3 \\pi=2 + 3 \\pi$.",
   "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$)."
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
   "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>$x\\ge0,\\ y\\ge0\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{2}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
   "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$."
  },
  {
   "q": "Cho $V$ là vật thể nằm trong hình cầu $x^2 + y^2 + z^2 \\le 9$ và phía trên mặt nón $z = \\sqrt{\\dfrac{x^2 + y^2}{3}}$. Trong tọa độ cầu $x = \\rho\\sin\\theta\\cos\\varphi,\\ y = \\rho\\sin\\theta\\sin\\varphi,\\ z = \\rho\\cos\\theta$, miền $V$ ứng với $0 \\le \\rho \\le 3,\\ 0 \\le \\theta \\le \\dfrac{\\pi}{3},\\ 0 \\le \\varphi \\le 2\\pi$. Thể tích của $V$ bằng",
   "options": [
    "$9 \\pi$.",
    "$6 \\pi^{2}$.",
    "$36 \\pi$.",
    "$\\dfrac{9 \\pi}{2}$."
   ],
   "answer": 0,
   "explain": "$V=\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{\\dfrac{\\pi}{3}}\\sin\\theta\\,d\\theta\\int_0^{3}\\rho^2\\,d\\rho$. Các tích phân lần lượt bằng $2\\pi$, $[-\\cos\\theta]_0^{\\dfrac{\\pi}{3}}=1-\\cos\\dfrac{\\pi}{3}$ và $[\\rh\\frac{o^3}{3}]_0^{3}=27/3$.<br>$V=2\\pi(1-\\cos\\dfrac{\\pi}{3})\\dfrac{27}{3}=9 \\pi$.",
   "note": "Góc $\\theta$ tính từ trục $Oz$: mặt nón $z = c\\sqrt{x^2 + y^2}$ ứng với $\\tan\\theta = \\dfrac1c$."
  },
  {
   "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1500 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 500 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
   "options": [
    "$1000$.",
    "$500$.",
    "$750$.",
    "$800$."
   ],
   "answer": 0,
   "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $1500-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(1500-x)$.<br>Nhân với $100$: $20x=40(1500-x)=60000-40x$, nên $(60)x=60000$ và $x=\\dfrac{60000}{60}=1000$.",
   "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu."
  },
  {
   "q": "Cho ma trận $A = \\begin{pmatrix}1 & 0 & -2 & 2 \\\\ 1 & 2 & 1 & 1 \\\\ 3 & 4 & 0 & m\\end{pmatrix}$ với $m$ là tham số. Hạng của $A$ bằng 2 khi và chỉ khi",
   "options": [
    "$m = 4$.",
    "$m = 5$.",
    "$m = -4$.",
    "$m = 3$."
   ],
   "answer": 0,
   "explain": "$R_3 \\leftarrow R_3 - R_1 - 2R_2$.<br>$A = \\begin{pmatrix}1 & 0 & -2 & 2 \\\\ 1 & 2 & 1 & 1 \\\\ 3 & 4 & 0 & m\\end{pmatrix} \\xrightarrow{R_3 \\leftarrow R_3 - R_1 - 2R_2} \\begin{pmatrix}1 & 0 & -2 & 2 \\\\ 1 & 2 & 1 & 1 \\\\ 0 & 0 & 0 & m - 4\\end{pmatrix}$.<br>$\\det \\begin{pmatrix}1 & 0 \\\\ 1 & 2\\end{pmatrix} = 2 \\ne 0$, nên hai hàng đầu độc lập tuyến tính.<br>$m = 4 \\Rightarrow R_3 = (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=2$.<br>$m \\ne 4 \\Rightarrow R_3 = (0,0,0,m - 4) \\ne (0,0,0,0) \\Rightarrow \\operatorname{rank}(A)=3$.<br><b>Kết quả:</b> $m = 4$.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & -1 \\\\ -1 & 2\\end{pmatrix}$ và $B = \\begin{pmatrix}-10 & 1 \\\\ 16 & -1\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A^2.X = B$. Tổng tất cả các phần tử của $X$ bằng",
   "options": [
    "$3$.",
    "$6$.",
    "$4$.",
    "$-3$."
   ],
   "answer": 0,
   "explain": "$A^{-1} = \\begin{pmatrix}2 & 1 \\\\ 1 & 1\\end{pmatrix}$<br>$A.X = A^{-1}B = \\begin{pmatrix}-4 & 1 \\\\ 6 & 0\\end{pmatrix}$<br>$X = A^{-1}(A^{-1}B) = \\begin{pmatrix}-2 & 2 \\\\ 2 & 1\\end{pmatrix}$<br>Tổng các phần tử: $3$",
   "note": "$A^2X = B \\Rightarrow X = A^{-1}A^{-1}B$: nhân $A^{-1}$ vào bên trái hai lần."
  },
  {
   "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y + 3z = 0\\\\ 2x + my + 2z = 0\\\\ 3x + 3y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
   "options": [
    "$6$.",
    "$7$.",
    "$37$.",
    "$-7$."
   ],
   "answer": 0,
   "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 7 m + 6 = \\left(m - 6\\right) \\left(m - 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 1$ hoặc $m = 6$<br>Giá trị cần tìm: $6$",
   "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to 1}\\dfrac{x^3 + ax + b}{\\left(x - 1\\right)^{2}} = L$ với $L$ là một số hữu hạn. Giá trị của $b - a$ bằng",
   "options": [
    "$5$.",
    "$-1$.",
    "$3$.",
    "$-5$."
   ],
   "answer": 0,
   "explain": "Mẫu số có nghiệm kép $x = 1$ nên tử số $g(x) = x^3 + ax + b$ phải thỏa mãn $g(1) = 0$ và $g'(1) = 0$<br>$g'(x) = 3x^2 + a \\Rightarrow a = -3$; $g(1) = 0 \\Rightarrow b = 2$<br>$x^3 - 3 x + 2 = \\left(x - 1\\right)^{2} \\left(x + 2\\right)$ nên $L = 3$<br>$b - a = 5$",
   "note": "Mẫu có nghiệm kép nên tử cũng phải có nghiệm kép tại đó: $g(x_0) = g'(x_0) = 0$."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\ln(1 + 4x) & \\text{khi } x \\le 0\\\\ ax^2 + bx + d & \\text{khi } x > 0\\end{cases}$ (xét trong lân cận của điểm $0$) có đạo hàm cấp hai tại $x = 0$. Giá trị của $a - b + d$ bằng",
   "options": [
    "$-12$.",
    "$-8$.",
    "$4$.",
    "$-4$."
   ],
   "answer": 0,
   "explain": "Nhánh trái $g(x)=\\ln\\left(4 x + 1\\right)$ có $g(0)=0$, $g^\\prime(0)=4$, $g^{\\prime\\prime}(0)=-16$ (tính đạo hàm rồi thế $x=0$).<br>Nhánh phải $h(x)=ax^2+bx+d$: $h(0)=d$, $h^\\prime(x)=2ax+b$ nên $h^\\prime(0)=b$, $h^{\\prime\\prime}(x)=2a$ nên $h^{\\prime\\prime}(0)=2a$.<br>Để ghép khả vi cấp hai, đặt lần lượt $h(0)=g(0)$, $h^\\prime(0)=g^\\prime(0)$, $h^{\\prime\\prime}(0)=g^{\\prime\\prime}(0)$.<br>$d=0,\\ b=4,\\ 2a=-16$, do đó $a=-8$.<br>Thay các hệ số đã tìm vào biểu thức cần tính: $a - b + d=-12$.",
   "note": "Có đạo hàm cấp hai tại điểm nối: giá trị, đạo hàm cấp một và đạo hàm cấp hai ở hai phía đều phải khớp nhau."
  },
  {
   "q": "Một tấm phẳng hình chữ nhật chiều rộng 2 m, chiều cao 1 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 0 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
   "options": [
    "9800 <i>N</i>.",
    "4900 <i>N</i>.",
    "19600 <i>N</i>.",
    "-9800 <i>N</i>."
   ],
   "answer": 0,
   "explain": "Dải ngang ở độ sâu $(0 + y)$ m, diện tích $2\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (0 + y) \\cdot 2\\,dy$<br>$F = \\displaystyle\\int_0^{1} 9800 \\cdot 2 \\cdot (0 + y)\\,dy = 98002\\left[0y + \\dfrac{y^2}{2}\\right]_0^{1} = 9800\\,N = \\dfrac{49}{5}\\,kN$"
  },
  {
   "q": "Khảo sát thị trường của 3 loại hàng hóa có liên quan được đánh số 1, 2, 3. Lượng cung $s_i$ và lượng cầu $d_i$ của hàng hóa thứ $i$ phụ thuộc vào giá $p_1, p_2, p_3$ của cả ba loại theo các hệ thức: $$\\begin{cases}s_1 = p_{1} + p_{2} + p_{3} - 5\\\\ s_2 = - p_{1} + p_{2} - p_{3} + 15\\\\ s_3 = p_{2} + 2 p_{3} - 30\\end{cases}\\ \\text{và}\\ \\begin{cases}d_1 = - 2 p_{1} + p_{2} + 50\\\\ d_2 = 70 - p_{2}\\\\ d_3 = p_{1} - p_{3} + 25\\end{cases}.$$ Thị trường cân bằng khi $s_i = d_i$ với mọi $i = \\overline{1,3}$. Tổng lượng cung của cả ba loại hàng hóa tại trạng thái cân bằng bằng",
   "options": [
    "$120$.",
    "$65$.",
    "$125$.",
    "$115$."
   ],
   "answer": 0,
   "explain": "Tại cân bằng, $s_i=d_i$. Trừ lượng cầu khỏi lượng cung theo từng loại: $(S-D)P=(S-D)(15;40;10)^T$.<br>$S-D=\\begin{pmatrix}3 & 0 & 1 \\\\ -1 & 2 & -1 \\\\ -1 & 1 & 3\\end{pmatrix}$, nên hệ giá là $\\begin{pmatrix}3 & 0 & 1 \\\\ -1 & 2 & -1 \\\\ -1 & 1 & 3\\end{pmatrix}P=(55;55;55)^T$.<br>Ma trận bổ sung ban đầu: $$\\left(\\begin{array}{rrr|r}3 & 0 & 1 & 55\\\\ -1 & 2 & -1 & 55\\\\ -1 & 1 & 3 & 55\\end{array}\\right)$$<br>$R_1 \\leftarrow \\dfrac{1}{3}R_1$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{3} & \\dfrac{55}{3}\\\\ -1 & 2 & -1 & 55\\\\ -1 & 1 & 3 & 55\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (-1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{3} & \\dfrac{55}{3}\\\\ 0 & 2 & - \\dfrac{2}{3} & \\dfrac{220}{3}\\\\ -1 & 1 & 3 & 55\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (-1)R_1$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{3} & \\dfrac{55}{3}\\\\ 0 & 2 & - \\dfrac{2}{3} & \\dfrac{220}{3}\\\\ 0 & 1 & \\dfrac{10}{3} & \\dfrac{220}{3}\\end{array}\\right)$$<br>$R_2 \\leftarrow \\dfrac{1}{2}R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{3} & \\dfrac{55}{3}\\\\ 0 & 1 & - \\dfrac{1}{3} & \\dfrac{110}{3}\\\\ 0 & 1 & \\dfrac{10}{3} & \\dfrac{220}{3}\\end{array}\\right)$$<br>$R_3 \\leftarrow R_3 - (1)R_2$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{3} & \\dfrac{55}{3}\\\\ 0 & 1 & - \\dfrac{1}{3} & \\dfrac{110}{3}\\\\ 0 & 0 & \\dfrac{11}{3} & \\dfrac{110}{3}\\end{array}\\right)$$<br>$R_3 \\leftarrow \\dfrac{1}{\\dfrac{11}{3}}R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & \\dfrac{1}{3} & \\dfrac{55}{3}\\\\ 0 & 1 & - \\dfrac{1}{3} & \\dfrac{110}{3}\\\\ 0 & 0 & 1 & 10\\end{array}\\right)$$<br>$R_1 \\leftarrow R_1 - (\\dfrac{1}{3})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 15\\\\ 0 & 1 & - \\dfrac{1}{3} & \\dfrac{110}{3}\\\\ 0 & 0 & 1 & 10\\end{array}\\right)$$<br>$R_2 \\leftarrow R_2 - (- \\dfrac{1}{3})R_3$: $$\\left(\\begin{array}{rrr|r}1 & 0 & 0 & 15\\\\ 0 & 1 & 0 & 40\\\\ 0 & 0 & 1 & 10\\end{array}\\right)$$<br>$P=(15;40;10)^T$; thay vào hàm cung hoặc cầu được $Q=(60;30;30)^T$.<br>Tổng lượng cung/cầu: $60+30+30=120$; tổng giá: $15+40+10=65$.",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Biết với $|x| < 1$ thì $\\displaystyle\\sum_{n=1}^{+\\infty} n^2x^n = \\dfrac{x(1 + x)}{(1 - x)^3}$. Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n^2}{6^n}$ bằng",
   "options": [
    "$\\dfrac{42}{125}$.",
    "$\\dfrac{6}{25}$.",
    "$\\dfrac{7}{125}$.",
    "$\\dfrac{21}{125}$."
   ],
   "answer": 0,
   "explain": "$x = \\dfrac{1}{6}$: $\\dfrac{x(1 + x)}{(1 - x)^3} = \\dfrac{\\frac{1}{6}\\cdot\\frac{7}{6}}{\\left(\\frac{5}{6}\\right)^3} = \\dfrac{42}{125}$<br>Kết quả: $\\dfrac{42}{125}$",
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
   "q": "Dùng tổng của một chuỗi lũy thừa quen thuộc tại một giá trị thích hợp của $x$, tổng của chuỗi số $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{(-1)^n\\pi^{2n}}{9^n\\,(2n)!}$ bằng",
   "options": [
    "$\\dfrac{1}{2}$.",
    "$\\dfrac{1}{3}$.",
    "$\\dfrac{\\sqrt{3}}{2}$.",
    "$- \\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$\\sum_{n\\ge0}\\frac{(-1)^n(\\pi/3)^{2n}}{(2n)!}=\\cos(\\pi/3)=\\frac12$.<br>Vậy tổng của chuỗi bằng $\\dfrac{1}{2}$",
   "note": "Nhận ra chuỗi quen thuộc ($e^x$, $\\ln(1 + x)$, $\\arctan x$, ...) rồi thay giá trị $x$ thích hợp."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình tách biến $xy' = 2y$ thỏa mãn $y(1) = 3$. Giá trị của $y\\left(2\\right)$ bằng",
   "options": [
    "$12$.",
    "$3$.",
    "$13$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "Tách biến rồi tích phân hai vế: $\\dfrac{dy}{y} = \\dfrac{2\\,dx}{x} \\Rightarrow \\ln|y| = 2\\ln x + C$<br>$x=1,y=3$: $\\ln y=2\\ln x+C$ gives $\\ln3=0+C$, so $C=\\ln3$.<br>Từ $C$ vừa tìm và điều kiện đầu, nghiệm tường minh là $y=3 x^{2}$.<br>Thay $x=2$ vào nghiệm: $y(2)=12=12$.",
   "note": "Tìm nghiệm tổng quát trước, rồi dùng điều kiện đầu để xác định $C$ (và dấu của căn nếu có)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $y' + 2y = 2e^{-2x}$ thỏa mãn $y(0) = 3$. Giá trị của $y(1)$ bằng",
   "options": [
    "$\\dfrac{5}{e^{2}}$.",
    "$\\dfrac{3}{e^{2}}$.",
    "$\\dfrac{2}{e^{2}}$.",
    "$5 e^{2}$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $e^{2x}$: $\\left(ye^{2x}\\right)' = 2$<br>$ye^{2x} = 2x + C \\Rightarrow y = (2x + C)e^{-2x}$<br>$y(0) = C = 3 \\Rightarrow y(1) = (2 + 3)e^{-2} = \\dfrac{5}{e^{2}}$",
   "note": "Đưa về dạng $y' + p(x)y = q(x)$ rồi nhân thừa số tích phân $e^{\\int p\\,dx}$; $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Chất phóng xạ cacbon $^{14}C$ có chu kỳ bán rã 5730 năm và phân rã với tốc độ tỉ lệ với lượng hiện có, tức $m' = -km$ với $k = \\dfrac{\\ln 2}{5730}$. Thời gian (năm) để một mẫu chất này còn lại 90% khối lượng ban đầu (làm tròn đến hàng phần chục) là",
   "options": [
    "871,0.",
    "573,0.",
    "1146,0.",
    "5157,0."
   ],
   "answer": 0,
   "explain": "$m' = -km \\Rightarrow m(t) = m_0e^{-kt} = m_0\\cdot2^{-t/5730}$<br>$2^{-t/5730} = \\dfrac{90}{100} \\Rightarrow \\dfrac{t}{5730} = \\log_2\\dfrac{100}{90}$<br>$t = 5730\\cdot\\dfrac{\\ln(100/90)}{\\ln 2} \\approx 871{,}0$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là miền nằm trong góc phần tư thứ nhất, nằm trong đường tròn $x^2 + y^2 = 6x$ và nằm ngoài đường tròn $x^2 + y^2 = 9$. Trong tọa độ cực, $D$ ứng với $3 \\le r \\le 6\\cos\\varphi,\\ 0 \\le \\varphi \\le \\dfrac{\\pi}{3}$. Giá trị của tích phân $\\displaystyle\\iint_D \\,dxdy$ bằng",
   "options": [
    "$\\dfrac{9 \\sqrt{3}}{4} + \\dfrac{3 \\pi}{2}$.",
    "$- \\pi + 3 \\sqrt{3}$.",
    "$\\dfrac{9 \\sqrt{3}}{2} + 3 \\pi$.",
    "$\\dfrac{9 \\sqrt{3}}{8} + \\dfrac{3 \\pi}{4}$."
   ],
   "answer": 0,
   "explain": "$I=\\int_0^{\\pi/3}d\\varphi\\int_{3}^{6\\cos\\varphi}r\\,dr$; $r$ đã gồm Jacobian $r$.<br>Tính tích phân theo $r$: $\\int_{3}^{6\\cos\\varphi}r\\,dr=\\dfrac{27}{2} - 18 \\sin^{2}{\\left(\\varphi \\right)}$, bằng cách thế hai cận vào nguyên hàm theo $r$.<br>Nguyên hàm theo $\\varphi$ của biểu thức trên là $\\dfrac{9 \\varphi}{2} + 9 \\sin{\\left(\\varphi \\right)} \\cos{\\left(\\varphi \\right)}$.<br>Do đó $I=[\\dfrac{9 \\varphi}{2} + 9 \\sin{\\left(\\varphi \\right)} \\cos{\\left(\\varphi \\right)}]_{0}^{\\pi/3}=\\dfrac{9 \\sqrt{3}}{4} + \\dfrac{3 \\pi}{2}-0=\\dfrac{9 \\sqrt{3}}{4} + \\dfrac{3 \\pi}{2}$.",
   "note": "Cận của $r$ phụ thuộc $\\varphi$ nên phải lấy tích phân theo $r$ trước, rồi mới theo $\\varphi$."
  },
  {
   "q": "Cho $V$ là phần của hình cầu $x^2 + y^2 + z^2 \\le 25$ nằm trong góc phần tám thứ nhất ($x \\ge 0,\\ y \\ge 0,\\ z \\ge 0$). Giá trị của tích phân $\\displaystyle\\iiint_V xyz\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{15625}{48}$.",
    "$\\dfrac{15625}{6}$.",
    "$\\dfrac{15625}{24}$.",
    "$\\dfrac{15625}{8}$."
   ],
   "answer": 0,
   "explain": "$xyz = \\rho^3\\sin^2\\theta\\cos\\theta\\sin\\varphi\\cos\\varphi$, $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$<br>$I = \\displaystyle\\int_0^{\\pi/2}\\sin\\varphi\\cos\\varphi\\,d\\varphi\\int_0^{\\pi/2}\\sin^3\\theta\\cos\\theta\\,d\\theta\\int_0^{5}\\rho^5\\,d\\rho$<br>$= \\dfrac12\\cdot\\dfrac14\\cdot\\dfrac{15625}{6} = \\dfrac{15625}{48}$",
   "note": "Trong tọa độ cầu $\\sqrt{x^2 + y^2 + z^2} = \\rho$ và $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$."
  },
  {
   "q": "Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = 4$ với mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = x^2 + y^2 + 3$. Khối lượng của sợi dây, tức $\\displaystyle\\oint_L \\rho\\,ds$, bằng",
   "options": [
    "$28 \\pi$.",
    "$14 \\pi$.",
    "$12 \\pi$.",
    "$1 + 28 \\pi$."
   ],
   "answer": 0,
   "explain": "Trên $L$, $x^2+y^2=4$ nên $\\rho=4+3$ không đổi. Tham số hóa $x=2\\cos t$, $y=2\\sin t$, $0\\le t\\le2\\pi$, cho $ds=2\\,dt$.<br>$\\displaystyle M=\\int_0^{2\\pi}(4+3)2\\,dt=2\\pi2(4+3)=28 \\pi$.",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 2 x y + 3 y^{2} + 2)\\,dx + (mx^2 + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
   "options": [
    "$-1$.",
    "$1$.",
    "$-2$.",
    "$3$."
   ],
   "answer": 0,
   "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = - 2 x + 6 y,\\quad Q'_x = 2mx + 6 y$<br>Đồng nhất hệ số: $m = -1$",
   "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-8 & -12 \\\\ 6 & 10\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$.",
   "questions": [
    {
     "q": "Tổng bình phương các trị riêng của $A$ bằng",
     "options": [
      "$20$.",
      "$4$.",
      "$-8$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "Phương trình đặc trưng $\\lambda^2 - (2)\\lambda + (-8) = 0$ có nghiệm $-2$ và $4$<br>Kết quả: $20$"
    },
    {
     "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
     "options": [
      "$272$.",
      "$16$.",
      "$4096$.",
      "$8$."
     ],
     "answer": 0,
     "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(-2)^{4} + (4)^{4}$<br>Kết quả: $272$"
    },
    {
     "q": "Định thức của ma trận $A^2 - 3A$ bằng",
     "options": [
      "$40$.",
      "$88$.",
      "$14$.",
      "$-40$."
     ],
     "answer": 0,
     "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $10$ và $4$; định thức bằng tích của chúng<br>Kết quả: $40$",
     "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{2} - 8 x + y^{2} - 6 y$ xét trên hình tròn đóng $D = \\{(x,y): x^2 + y^2 \\le 225\\}$. Để tìm giá trị lớn nhất và nhỏ nhất của $f$ trên $D$, ta so sánh giá trị của $f$ tại các điểm dừng nằm trong $D$ và giá trị lớn nhất, nhỏ nhất của $f$ trên biên $x^2 + y^2 = 225$.",
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
     "explain": "Điểm dừng $(4;3)$ nằm trong $D$ và $f = (x - 4)^2 + (y - 3)^2 - 25$<br>Kết quả: $-25$"
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
     "explain": "Trên biên $f = 225 - 2(4 x + 3 y)$, lớn nhất khi $4 x + 3 y$ nhỏ nhất, tức bằng $-15\\cdot5$<br>Kết quả: $375$"
    },
    {
     "q": "Hoành độ của điểm mà tại đó $f$ đạt giá trị lớn nhất trên $D$ bằng",
     "options": [
      "$-12$.",
      "$12$.",
      "$4$.",
      "$-9$."
     ],
     "answer": 0,
     "explain": "Điểm đó nằm trên biên, ngược hướng với véc tơ $(4;3)$: $\\left(-12;-9\\right)$<br>Kết quả: $-12$",
     "note": "Giá trị lớn nhất, nhỏ nhất trên miền đóng: so sánh giá trị tại điểm dừng bên trong với giá trị trên biên."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho $A = (a_{ij})$ là ma trận vuông cấp 4 với $a_{ij} = \\max\\{i,j\\}$. Gọi $A^T$ là ma trận chuyển vị của $A$, tính $\\det\\left(A^{-1}A^TA\\right)$.",
   "answer": [
    "-4"
   ],
   "explain": "$A = \\begin{pmatrix}1 & 2 & 3 & 4 \\\\ 2 & 2 & 3 & 4 \\\\ 3 & 3 & 3 & 4 \\\\ 4 & 4 & 4 & 4\\end{pmatrix}$, $\\det A = -4$ (khử bằng cách lấy hàng sau trừ hàng trước); kết quả bằng $\\dfrac{1}{\\det A}\\cdot\\det A\\cdot\\det A$ $= -4$<br>Đáp số: $-4$",
   "note": "Viết ma trận ra từ công thức của $a_{ij}$, khử về dạng tam giác; $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Tìm giá trị lớn nhất của hàm số $f(x,y,z) = 2 x + y + 2 z$ trên mặt cầu $x^2 + y^2 + z^2 = 9$.",
   "answer": [
    "9"
   ],
   "explain": "Theo phương pháp nhân tử Lagrange, điểm đạt giá trị lớn nhất cùng hướng với $(2;1;2)$; $f_{\\max} = 3\\sqrt{2^2 + 1^2 + 2^2} = 9$<br>Đáp số: $9$",
   "note": "Tại cực trị có điều kiện $\\nabla f$ cùng phương với $\\nabla g$; với hàm bậc nhất trên mặt cầu có thể dùng bất đẳng thức Cauchy – Schwarz."
  },
  {
   "q": "Có bao nhiêu số nguyên $x$ thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(x - 3)^{n}}{n\\cdot4^n}$?<span class=\"q-hint\">Chú ý: xét riêng hai đầu mút của khoảng hội tụ.</span>",
   "answer": [
    "8"
   ],
   "explain": "Bán kính hội tụ $R = 4$. Tại $x = 7$ chuỗi là $\\displaystyle \\sum\\dfrac1n$ phân kỳ; tại $x = -1$ chuỗi là $\\displaystyle \\sum\\dfrac{(-1)^n}{n}$ hội tụ. Miền hội tụ: $[-1;7)$<br>Đáp số: $8$",
   "note": "$R = \\lim\\left|\\dfrac{a_n}{a_{n+1}}\\right|$; tại hai đầu mút của khoảng hội tụ phải xét riêng."
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
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi mặt elipxoit $\\dfrac{x^2}{9} + \\dfrac{y^2}{9} + \\dfrac{z^2}{4} = 1$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "24"
   ],
   "explain": "Đổi biến $x = 3u,\\ y = 3v,\\ z = 2w$ (Jacobian $18$) đưa về hình cầu đơn vị: $V = 18\\cdot\\dfrac{4\\pi}{3} = 24\\pi$<br>Đáp số: $24$",
   "note": "Elipxoit: đổi biến $x = au,\\ y = bv,\\ z = cw$ đưa về hình cầu đơn vị, định thức Jacobi bằng $abc$."
  }
 ]
});
