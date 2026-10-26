// ĐỀ SỐ 03 — sinh tự động bằng tools/gen_exams.py theo đúng ma trận đề minh họa CA1 2026.
// Không phải đề của Bộ Công an. Đáp án được máy tính ra từ chính số liệu của từng câu.
// Phương án ĐÚNG luôn đứng đầu trong file; web tự xáo trộn vị trí A–D mỗi lần vào thi.
// Không sửa tay file này: sửa bộ sinh đề trong thư mục tools/ rồi chạy lại.
(window.EXAMS = window.EXAMS || []).push({
 "id": "ca1-so-03",
 "code": "CA1",
 "subject": "Toán cao cấp",
 "title": "CA1 — Đề số 03",
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
   "q": "Trong không gian $\\mathbb{R}^n$ với tích vô hướng thông thường, cho hai véc tơ $u, v$ thỏa mãn $|u| = 1,\\ |v| = 2$ và $\\langle u, v\\rangle = 1$. Giá trị của $|2u - v|^2$ bằng",
   "options": [
    "$4$.",
    "$8$.",
    "$6$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$|2u - v|^2 = \\langle 2u - v, 2u - v\\rangle = 4|u|^2 - 4 \\langle u, v\\rangle + |v|^2$<br>$= 4\\cdot1 - 4\\cdot(1) + 1\\cdot4 = 4$",
   "note": "Khai triển như hằng đẳng thức với $\\langle u, u\\rangle = |u|^2$; đừng quên số hạng chéo $2pq\\langle u, v\\rangle$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^3$, hệ $\\{u_1(2;1;3),\\ u_2(0;3;-2),\\ u_3(4;-1;8)\\}$ phụ thuộc tuyến tính, tức tồn tại các số $x, y$ sao cho $xu_1 + yu_2 + u_3 = 0$. Giá trị của $x - y$ bằng",
   "options": [
    "$-3$.",
    "$1$.",
    "$3$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$xu_1 + yu_2 = -u_3$; viết theo từng tọa độ được hệ ba phương trình hai ẩn<br>Giải hai phương trình đầu (phương trình thứ ba nghiệm đúng): $x = -2,\\ y = 1$<br>$x - y = -3$",
   "note": "Chuyển $u_3$ sang vế phải thì đổi dấu: $xu_1 + yu_2 = -u_3$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S$ gồm $u_1 = (0;3;0;-1),\\ u_2 = (0;0;2;1),\\ u_3 = (1;-1;1;1),\\ u_4 = (-1;-5;-1;1),\\ u_5 = (3;-3;5;4)$. Cần bỏ đi ít nhất bao nhiêu véc tơ của $S$ để hệ còn lại độc lập tuyến tính?<span class=\"q-hint\">Gợi ý: số véc tơ giữ lại được nhiều nhất bằng hạng của $S$.</span>",
   "options": [
    "$2$.",
    "$3$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$u_4 = - 2 u_{1} - u_{3}$; $u_5 = u_{2} + 3 u_{3}$; còn $u_1, u_2, u_3$ độc lập tuyến tính nên hạng bằng 3<br>Kết quả: $2$",
   "note": "Hạng = số hàng khác không của dạng bậc thang; số véc tơ thừa = số véc tơ $-$ hạng."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & 1 & 0 \\\\ -1 & -1 & 1\\end{pmatrix}$ và $B = \\begin{pmatrix}3 & 2 \\\\ 0 & 3 \\\\ 3 & 2\\end{pmatrix}$. Xét ma trận $C = (AB)^T - B^TA^T + AA^T$. Tổng các phần tử trên đường chéo chính của $C$ bằng",
   "options": [
    "$5$.",
    "$6$.",
    "$0$.",
    "$7$."
   ],
   "answer": 0,
   "explain": "Tính chất của phép chuyển vị: $(AB)^T = B^TA^T$ nên $C = AA^T$<br>$AA^T = \\begin{pmatrix}2 & -2 \\\\ -2 & 3\\end{pmatrix}$<br>Tổng các phần tử trên đường chéo chính: $5$",
   "note": "$(AB)^T = B^TA^T$ (đảo thứ tự) nên hai số hạng đầu triệt tiêu."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 2 khả nghịch có ma trận nghịch đảo $A^{-1} = \\begin{pmatrix}1 & 0 \\\\ -1 & 2\\end{pmatrix}$. Giá trị của $\\det(4A)$ bằng",
   "options": [
    "$8$.",
    "$2$.",
    "$32$.",
    "$\\dfrac{1}{2}$."
   ],
   "answer": 0,
   "explain": "$\\det\\left(A^{-1}\\right) = 2 \\Rightarrow \\det A = \\dfrac{1}{2}$<br>$A$ cấp 2 nên $\\det(4A) = 4^2\\cdot\\det A = 8$",
   "note": "$\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$ và $\\det(kA) = k^n\\det A$ với $n$ là cấp của ma trận."
  },
  {
   "q": "Cho $A$, $B$ là hai ma trận vuông cấp $n \\ge 2$ khả nghịch. Phát biểu nào sau đây là đúng?",
   "options": [
    "$(A^T)^{-1} = (A^{-1})^T$.",
    "$(AB)^{-1} = A^{-1}B^{-1}$.",
    "$\\det(A^{-1}) = \\det A$.",
    "$(2A)^{-1} = 2A^{-1}$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $(A^T)^{-1} = (A^{-1})^T$. Vì $A^T(A^{-1})^T = (A^{-1}A)^T = I$.<br><b>Sai:</b> $(AB)^{-1} = A^{-1}B^{-1}$. $(AB)(B^{-1}A^{-1}) = I$ nên $(AB)^{-1} = B^{-1}A^{-1}$ (phải đảo thứ tự).<br><b>Sai:</b> $\\det(A^{-1}) = \\det A$. $\\det A\\cdot\\det(A^{-1}) = \\det I = 1$ nên $\\det(A^{-1}) = \\dfrac{1}{\\det A}$.<br><b>Sai:</b> $(2A)^{-1} = 2A^{-1}$. $(2A)\\left(\\dfrac12A^{-1}\\right) = I$ nên $(2A)^{-1} = \\dfrac12A^{-1}$."
  },
  {
   "q": "Cho $A$ là ma trận vuông cấp 4 khả nghịch thỏa mãn $A^2 = 3A$. Định thức của ma trận $A$ bằng",
   "options": [
    "$81$.",
    "$3$.",
    "$12$.",
    "$9$."
   ],
   "answer": 0,
   "explain": "Nhân hai vế với $A^{-1}$ được $A = 3I$, nên $\\det A = \\left(3\\right)^{4}$<br>Kết quả: $81$",
   "note": "$\\det(kA) = k^n\\det A$, $\\det\\left(A^{-1}\\right) = \\dfrac{1}{\\det A}$, $\\det\\left(A^T\\right) = \\det A$, $\\det(AB) = \\det A\\cdot\\det B$."
  },
  {
   "q": "Giới hạn $\\lim\\limits_{x\\to 0}(\\cos x)^{\\frac{4}{x^2}}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
   "options": [
    "$e^{-2}$.",
    "$1$.",
    "$e^{-4}$.",
    "$e^{2}$."
   ],
   "answer": 0,
   "explain": "$(\\cos x)^{\\frac{4}{x^2}} = e^{\\frac{4\\ln\\cos x}{x^2}}$<br>$\\ln\\cos x = \\ln\\left(1 - \\dfrac{x^2}{2} + o(x^2)\\right) \\sim -\\dfrac{x^2}{2}$<br>$\\lim\\limits_{x\\to0}\\dfrac{4\\ln\\cos x}{x^2} = -\\dfrac{4}{2} \\Rightarrow \\lim = e^{-\\frac{4}{2}}$",
   "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\dfrac{\\sqrt[3]{1 + ax} - \\sqrt{1 + 2x}}{x} & \\text{khi } x \\ne 0\\\\[2mm] 1 & \\text{khi } x = 0\\end{cases}$ liên tục tại $x = 0$. Giá trị của $a$ bằng",
   "options": [
    "$6$.",
    "$3$.",
    "$9$.",
    "$2$."
   ],
   "answer": 0,
   "explain": "$\\sqrt[3]{1 + ax} = 1 + \\dfrac{a}{3}x + o(x)$<br>$\\sqrt{1 + 2x} = 1 + \\dfrac{2}{2}x + o(x)$<br>$\\lim\\limits_{x\\to0} f(x) = \\dfrac{a}{3} - \\dfrac{2}{2} = 1 \\Rightarrow a = 6$",
   "note": "Liên tục tại $x_0$ $\\Leftrightarrow$ giới hạn trái = giới hạn phải = $f(x_0)$; giới hạn hữu hạn mà mẫu tiến về 0 thì tử cũng phải tiến về 0."
  },
  {
   "q": "Cho hàm số $f(x) = x^{3x}$ $(x > 0)$. Bằng cách lấy lôgarit hai vế rồi đạo hàm, giá trị của $f'(e)$ bằng",
   "options": [
    "$6 e^{3 e}$.",
    "$3 e^{3 e}$.",
    "$e^{3 e}$.",
    "$3 \\left(1 + e\\right) e^{3 e}$."
   ],
   "answer": 0,
   "explain": "$\\ln f = 3x\\ln x \\Rightarrow \\dfrac{f'}{f} = 3(\\ln x + 1)$<br>$f'(x) = 3x^{3x}(\\ln x + 1)$<br>$f'(e) = 3e^{3e}\\cdot2 = 6 e^{3 e}$",
   "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số."
  },
  {
   "q": "Cho hàm số $f(x,y) = x^{2} y - x y^{2} - \\dfrac{y^{3}}{3}$. Giá trị của biểu thức $\\Delta f = f''_{xx} + f''_{yy}$ tại điểm $(1;1)$ bằng",
   "options": [
    "$-2$.",
    "$2$.",
    "$-4$.",
    "$6$."
   ],
   "answer": 0,
   "explain": "$f'_x = 2 x y - y^{2} \\Rightarrow f''_{xx} = 2 y$<br>$f'_y = x^{2} - 2 x y - y^{2} \\Rightarrow f''_{yy} = - 2 \\left(x + y\\right)$<br>Tại $(1;1)$: $f''_{xx} + f''_{yy} = (2) + (-4) = -2$",
   "note": "$\\Delta f$ chỉ gồm $f''_{xx}$ và $f''_{yy}$, không có đạo hàm hỗn hợp."
  },
  {
   "q": "Cho hàm số $f(x,y)$ xác định trong một lân cận của điểm $M_0(x_0;y_0)$. Phát biểu nào sau đây là đúng?",
   "options": [
    "Nếu $f$ khả vi tại $M_0$ thì $f$ liên tục và có các đạo hàm riêng tại $M_0$.",
    "Nếu $f$ có các đạo hàm riêng tại $M_0$ thì $f$ liên tục tại $M_0$.",
    "Nếu $f$ có các đạo hàm riêng tại $M_0$ thì $f$ khả vi tại $M_0$.",
    "Nếu $f$ liên tục tại $M_0$ thì $f$ có các đạo hàm riêng tại $M_0$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> Nếu $f$ khả vi tại $M_0$ thì $f$ liên tục và có các đạo hàm riêng tại $M_0$. Từ $\\Delta f = A\\Delta x + B\\Delta y + o(\\rho)$ suy ra $\\Delta f \\to 0$ và $A = f'_x(M_0)$, $B = f'_y(M_0)$.<br><b>Sai:</b> Nếu $f$ có các đạo hàm riêng tại $M_0$ thì $f$ liên tục tại $M_0$. $f = \\dfrac{xy}{x^2 + y^2}$ (với $f(0;0) = 0$) có $f'_x(0;0) = f'_y(0;0) = 0$ nhưng dọc đường $y = x$ hàm bằng $\\dfrac12$, nên không liên tục tại gốc.<br><b>Sai:</b> Nếu $f$ có các đạo hàm riêng tại $M_0$ thì $f$ khả vi tại $M_0$. Hàm $\\dfrac{xy}{x^2 + y^2}$ ở trên không liên tục tại gốc nên không khả vi; cần thêm điều kiện các đạo hàm riêng liên tục.<br><b>Sai:</b> Nếu $f$ liên tục tại $M_0$ thì $f$ có các đạo hàm riêng tại $M_0$. $f = \\sqrt{x^2 + y^2}$ liên tục tại gốc nhưng $f(x;0) = |x|$ không có đạo hàm tại $0$."
  },
  {
   "q": "Cho hàm số $f(x,y) = - x^{3} + 3 x + y^{4} - 2 y^{2}$. Hàm số có bao nhiêu điểm dừng không phải là điểm cực trị?<span class=\"q-hint\">Lưu ý: điểm dừng là điểm mà $f'_x = f'_y = 0$. Tại điểm dừng, đặt $A = f''_{xx},\\ B = f''_{xy},\\ C = f''_{yy}$: nếu $AC - B^2 > 0$ thì đó là điểm cực trị, nếu $AC - B^2 < 0$ thì không phải.</span>",
   "options": [
    "$3$.",
    "$6$.",
    "$4$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "$f'_x = 3 - 3 x^{2},\\quad f'_y = 4 y^{3} - 4 y$<br>Giải hệ $f'_x = f'_y = 0$ được các điểm dừng: $(-1;-1)$, $(-1;0)$, $(-1;1)$, $(1;-1)$, $(1;0)$, $(1;1)$<br>Giá trị $AC - B^2$ tại các điểm đó lần lượt: $48$, $-24$, $48$, $-48$, $24$, $-48$<br>Số điểm dừng: $6$; số điểm cực trị (có $AC - B^2 > 0$): $3$",
   "note": "Giải đủ hệ $f'_x = f'_y = 0$ (đừng bỏ sót nghiệm), rồi xét dấu $AC - B^2$ tại từng điểm dừng."
  },
  {
   "q": "Cho $p$ là số thực. Dùng tiêu chuẩn tích phân, chuỗi số dương $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1}{n\\ln^{p}n}$ hội tụ khi và chỉ khi",
   "options": [
    "$p > 1$.",
    "$p \\ge 1$.",
    "$p > 0$.",
    "với mọi $p$."
   ],
   "answer": 0,
   "explain": "Xét $\\displaystyle\\int_2^{+\\infty}\\dfrac{dx}{x\\ln^{p}x}$, đặt $t = \\ln x$: $\\displaystyle\\int_{\\ln 2}^{+\\infty}\\dfrac{dt}{t^{p}}$<br>Tích phân này hội tụ $\\Leftrightarrow p > 1$<br>Với $p = 1$: $\\displaystyle\\int\\dfrac{dt}{t} = \\ln t \\to +\\infty$ nên chuỗi phân kỳ",
   "note": "Trường hợp biên $p = 1$ phân kỳ: $\\sum\\dfrac{1}{n\\ln n}$ phân kỳ dù số hạng nhỏ hơn $\\dfrac1n$."
  },
  {
   "q": "Xét bốn chuỗi đan dấu $\\displaystyle\\sum_{n=1}^{+\\infty}(-1)^n\\sin\\dfrac1n$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt{n+1}}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{n!}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(-1)^n}{\\sqrt[3]{n}}$. Có bao nhiêu chuỗi bán hội tụ (hội tụ nhưng không hội tụ tuyệt đối) trong bốn chuỗi trên?",
   "options": [
    "$3$.",
    "$4$.",
    "$1$.",
    "$0$."
   ],
   "answer": 0,
   "explain": "Chuỗi thứ 1: $\\sin\\frac1n \\downarrow 0$ (Leibniz), $\\sin\\frac1n \\sim \\frac1n$ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 2: $\\frac{1}{\\sqrt{n+1}} \\downarrow 0$ (Leibniz), $\\sum\\frac{1}{\\sqrt{n+1}}$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Chuỗi thứ 3: $\\frac{|u_{n+1}|}{|u_n|} = \\frac{1}{n+1} \\to 0$ $\\Rightarrow$ hội tụ tuyệt đối<br>Chuỗi thứ 4: $\\frac{1}{\\sqrt[3]{n}} \\downarrow 0$ (Leibniz), $\\sum\\frac{1}{n^{1/3}}$ phân kỳ $\\Rightarrow$ bán hội tụ<br>Số chuỗi bán hội tụ: $3$",
   "note": "Leibniz: $a_n$ giảm về 0 thì chuỗi đan dấu hội tụ; hội tụ tuyệt đối phải xét thêm $\\sum a_n$; nếu $a_n \\not\\to 0$ thì chuỗi phân kỳ."
  },
  {
   "q": "Phương trình nào sau đây là phương trình vi phân đẳng cấp (thuần nhất) cấp một?",
   "options": [
    "$y' = \\dfrac{x + y}{x - y}$.",
    "$y' = e^{x - y}$.",
    "$(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$.",
    "$xy' + y = y^2\\ln x$."
   ],
   "answer": 0,
   "explain": "<b>Đúng:</b> $y' = \\dfrac{x + y}{x - y}$ — Vế phải viết được thành hàm của $\\dfrac{y}{x}$, tức dạng $y' = f\\left(\\dfrac{y}{x}\\right)$<br><b>Sai:</b> $y' = e^{x - y}$ — là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không thuộc dạng đang hỏi<br><b>Sai:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — là phương trình vi phân toàn phần, không thuộc dạng đang hỏi<br><b>Sai:</b> $xy' + y = y^2\\ln x$ — là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không thuộc dạng đang hỏi"
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của phương trình $xy' = y + x$ $(x > 0)$ thỏa mãn $y(1) = 1$. Giá trị của $y(e)$ bằng",
   "options": [
    "$2 e$.",
    "$e$.",
    "$1 + e$.",
    "$2 + e$."
   ],
   "answer": 0,
   "explain": "Chia hai vế cho $x^2$: $\\dfrac{xy' - y}{x^2} = \\dfrac{1}{x} \\Leftrightarrow \\left(\\dfrac{y}{x}\\right)' = \\dfrac{1}{x}$<br>$\\dfrac{y}{x} = \\ln x + C \\Rightarrow y = x(\\ln x + C)$<br>$y(1) = C = 1$<br>$y(e) = e(1 + 1) = 2 e$",
   "note": "Đưa về dạng chuẩn rồi mới tìm thừa số tích phân $e^{\\int p\\,dx}$ (hoặc kiểm tra $P'_y = Q'_x$); hằng số $C$ xác định từ điều kiện đầu."
  },
  {
   "q": "Trong một mạch điện RL, cường độ dòng điện $y(t)$ (ampe) sau $t$ mili giây kể từ khi đóng mạch thỏa mãn phương trình $y' = k(16 - y)$ với $k = \\dfrac{\\ln 2}{6}$ và $y(0) = 0$. Cường độ dòng điện sau 12 mili giây bằng",
   "options": [
    "$12$ A.",
    "$14$ A.",
    "$4$ A.",
    "$16$ A."
   ],
   "answer": 0,
   "explain": "$y' + ky = 16k$ (tuyến tính cấp một) $\\Rightarrow y = 16 + Ce^{-kt}$<br>$y(0) = 0 \\Rightarrow C = -16$<br>$e^{-kt} = e^{-\\frac{\\ln 2}{6}\\cdot12} = 2^{-2} = \\dfrac{1}{4}$<br>$y(12) = 16 + \\dfrac{-16}{4} = 12$",
   "note": "Phương trình $y' = k(M - y)$ có nghiệm $y = M + (y_0 - M)e^{-kt}$; với $k = \\dfrac{\\ln 2}{T}$ thì $e^{-kT} = \\dfrac12$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y'' - 4y = -12x - 8$ là",
   "options": [
    "$y = C_1e^{-2x} + C_2e^{2x} + 3x + 2$.",
    "$y = C_1e^{-2x} + C_2e^{2x} + 3x$.",
    "$y = C_1e^{-2x} + C_2e^{2x} + 3x - 2$.",
    "$y = C_1e^{-2x} + C_2e^{2x} - 12x - 8$."
   ],
   "answer": 0,
   "explain": "Phương trình đặc trưng: $k^{2} - 4 = 0 \\Rightarrow k = -2,\\ k = 2$<br>Vế phải là đa thức bậc nhất, số $0$ không là nghiệm đặc trưng: $y^* = Ax + B$<br>Thay $y^* = Ax + B$ vào phương trình: $- 4 A x - 4 B = -12x - 8$<br>Đồng nhất hệ số: $- 4 A = -12,\\ - 4 B = -8 \\Rightarrow A = 3,\\ B = 2$<br>$y = C_1e^{-2x} + C_2e^{2x} + 3x + 2$",
   "note": "Nghiệm riêng cho vế phải bậc nhất phải lấy đủ $Ax + B$, kể cả khi vế phải không có hằng số."
  },
  {
   "q": "Một bản mỏng phẳng chiếm miền tam giác $D = \\{(x,y): x \\ge 0,\\ y \\ge 0,\\ x + y \\le 3\\}$ và có mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = xy$. Khối lượng của bản, tức $\\displaystyle\\iint_D \\rho\\,dxdy$, bằng",
   "options": [
    "$\\dfrac{27}{8}$.",
    "$\\dfrac{81}{4}$.",
    "$\\dfrac{9}{2}$.",
    "$\\dfrac{27}{4}$."
   ],
   "answer": 0,
   "explain": "$m = \\displaystyle\\int_0^{3}dx\\int_0^{3-x}xy\\,dy = \\int_0^{3}\\left(\\dfrac{x^{3}}{2} - 3 x^{2} + \\dfrac{9 x}{2}\\right)dx$<br>$= \\left[\\dfrac{x^{4}}{8} - x^{3} + \\dfrac{9 x^{2}}{4}\\right]_0^{3} = \\dfrac{27}{8}$",
   "note": "Tích phân trong lấy theo $y$ với cận phụ thuộc $x$; kết quả là hàm của $x$ rồi mới lấy tích phân ngoài."
  },
  {
   "q": "Cho $V$ là miền giới hạn bởi mặt nón $z = \\sqrt{x^2 + y^2}$ và mặt phẳng $z = 1$. Trong tọa độ trụ $x = r\\cos\\varphi,\\ y = r\\sin\\varphi,\\ z = z$, tích phân $I = \\displaystyle\\iiint_V f(x,y,z)\\,dxdydz$ được viết là",
   "options": [
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}r\\,dr\\int_{r}^{1} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}r\\,dr\\int_{0}^{r} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}dr\\int_{r}^{1} f\\,dz$.",
    "$\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^{1}r\\,dr\\int_{r^2}^{1} f\\,dz$."
   ],
   "answer": 0,
   "explain": "Mặt nón là $z = r$; miền nằm trên mặt nón và dưới mặt phẳng: $r \\le z \\le 1$, $0 \\le r \\le 1$.",
   "note": "Tọa độ trụ: $dV = r\\,dr\\,d\\varphi\\,dz$; tọa độ cầu: $dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$; cận của $z$ đi từ mặt dưới lên mặt trên."
  },
  {
   "q": "Một hãng dùng 2 loại vật liệu để sản xuất 3 loại sản phẩm với ma trận định mức $A = \\begin{pmatrix}2 & 1 & 2 \\\\ 1 & 2 & 4\\end{pmatrix}$ ($a_{ij}$ là số đơn vị vật liệu loại $i$ cần cho 1 đơn vị sản phẩm loại $j$). Hãng sản xuất và bán hết lần lượt $20, 20, 10$ đơn vị sản phẩm các loại; giá mỗi đơn vị vật liệu loại 1, 2 là $7 và 8$; giá bán mỗi đơn vị sản phẩm loại 1, 2, 3 là $40, 45, 50$ (cùng đơn vị tiền). Lợi nhuận (doanh thu trừ chi phí vật liệu) của hãng bằng",
   "options": [
    "$840$.",
    "$2200$.",
    "$1360$.",
    "$2020$."
   ],
   "answer": 0,
   "explain": "Vật liệu cần dùng $AX = (80;100)^T$, chi phí $1360$; doanh thu $2200$; lợi nhuận $840$<br>Kết quả: $840$",
   "note": "Kiểm tra cỡ ma trận trước khi nhân (số cột của ma trận trước bằng số hàng của ma trận sau); với mô hình Leontief giải $(I - A)X = D$."
  },
  {
   "q": "Trong không gian véc tơ $\\mathbb{R}^4$, cho hệ véc tơ $S = \\{u_1(1;0;3;0),\\ u_2(0;-2;0;3),\\ u_3(2;-4;6;m)\\}$ với $m$ là tham số. Hệ $S$ độc lập tuyến tính (tức là có hạng bằng 3) khi và chỉ khi",
   "options": [
    "$m \\ne 6$.",
    "$m = 6$.",
    "với mọi giá trị của $m$.",
    "$m \\ne 5$."
   ],
   "answer": 0,
   "explain": "Ba tọa độ đầu của hàng 3 bằng $2$ lần hàng 1 cộng $2$ lần hàng 2, nên hạng bằng 2 khi và chỉ khi phần tử cuối cũng thỏa mãn hệ thức đó: $m = 6$; ngược lại hạng bằng 3.",
   "note": "Đưa về dạng bậc thang; hạng giảm đúng khi hàng cuối thành hàng không, điều kiện đó cho giá trị của $m$."
  },
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}-2 & -2 \\\\ -2 & 0\\end{pmatrix}$ và $B = \\begin{pmatrix}-2 & 3 \\\\ 3 & 3\\end{pmatrix}$. Gọi $X$ là ma trận thỏa mãn $A.X = B$. Không cần tìm $X$, hãy cho biết định thức của $X$ bằng",
   "options": [
    "$\\dfrac{15}{4}$.",
    "$\\dfrac{4}{15}$.",
    "$60$.",
    "$-11$."
   ],
   "answer": 0,
   "explain": "$\\det A = -4,\\quad \\det B = -15$<br>Lấy định thức hai vế: $\\det A\\cdot\\det X = \\det B$<br>$\\det X = \\dfrac{-15}{-4} = \\dfrac{15}{4}$",
   "note": "Không cần tìm $X$: lấy định thức hai vế, $\\det(AX) = \\det A\\cdot\\det X$."
  },
  {
   "q": "Cho hệ phương trình $\\begin{cases}x + y - 2 z = 2\\\\ 2 x + 3 y - z = 2\\\\ x + 2 y + (m^2 - 3)z = m - 2\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Hệ có vô số nghiệm khi và chỉ khi",
   "options": [
    "$m = 2$.",
    "$m = -2$.",
    "$m = \\pm 2$.",
    "$m \\ne 2$."
   ],
   "answer": 0,
   "explain": "Khử Gauss ($h_2 - 2h_1$ và $h_3 - h_1$, rồi trừ hai phương trình mới cho nhau) được $(m^2 - 4)z = m - 2$: với $m = 2$ hệ có vô số nghiệm, với $m = -2$ hệ vô nghiệm, các trường hợp còn lại hệ có nghiệm duy nhất.",
   "note": "Xét hàng cuối sau khi khử: hệ số bằng 0 mà vế phải khác 0 thì vô nghiệm; cả hai bằng 0 thì vô số nghiệm; hệ số khác 0 thì nghiệm duy nhất."
  },
  {
   "q": "Biết $\\lim\\limits_{x\\to +\\infty}\\left(\\sqrt{x^2 + ax + 1} - \\sqrt{x^2 - 6x}\\right) = 4$. Giá trị của $a$ bằng",
   "options": [
    "$2$.",
    "$14$.",
    "$-2$.",
    "$8$."
   ],
   "answer": 0,
   "explain": "Nhân liên hợp: $\\dfrac{(x^2 + ax + 1) - (x^2 - 6x)}{\\sqrt{x^2 + ax + 1} + \\sqrt{x^2 - 6x}} = \\dfrac{(a + 6)x + 1}{\\sqrt{x^2 + ax + 1} + \\sqrt{x^2 - 6x}}$<br>$\\lim\\limits_{x\\to+\\infty} = \\dfrac{a + 6}{2} = 4 \\Rightarrow a = 2$",
   "note": "Giới hạn hữu hạn buộc các số hạng bậc thấp ở tử triệt tiêu; với hiệu hai căn thì nhân lượng liên hợp."
  },
  {
   "q": "Biết hàm số $f(x) = \\begin{cases}\\dfrac{x^2 - 9}{x - 3} & \\text{khi } x < 3\\\\[2mm] ax^2 - bx + 5 & \\text{khi } 3 \\le x < 4\\\\[1mm] 2x - a + b & \\text{khi } x \\ge 4\\end{cases}$ liên tục trên $\\mathbb{R}$. Giá trị của $a + b$ bằng",
   "options": [
    "$\\dfrac{7}{3}$.",
    "$-1$.",
    "$\\dfrac{2}{3}$.",
    "$\\dfrac{5}{3}$."
   ],
   "answer": 0,
   "explain": "Tại $x = 3$: $9a - 3b + 5 = 6$; tại $x = 4$: $16a - 4b + 5 = 8 - a + b$. Giải được $a = \\dfrac{2}{3},\\ b = \\dfrac{5}{3}$<br>Kết quả: $\\dfrac{7}{3}$",
   "note": "Có đạo hàm tại điểm nối cần hai điều kiện: liên tục, và đạo hàm trái bằng đạo hàm phải."
  },
  {
   "q": "Một lò xo tuân theo định luật Hooke $F = kx$ bị giãn 5 cm khi chịu lực kéo 30 N. Công cần thiết để kéo lò xo từ độ giãn 10 cm đến độ giãn 30 cm bằng",
   "options": [
    "24 <i>J</i>.",
    "12 <i>J</i>.",
    "54 <i>J</i>.",
    "6 <i>J</i>."
   ],
   "answer": 0,
   "explain": "$F = kx \\Rightarrow k = \\dfrac{30}{0{,}05} = 600\\ N/m$<br>$W = \\displaystyle\\int_{0{,}10}^{0{,}30} 600x\\,dx = 300\\left(0{,}30^2 - 0{,}10^2\\right) = 24\\ J$",
   "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau."
  },
  {
   "q": "Xét mô hình cân bằng thu nhập quốc dân: $Y = C + I_0 + G_0$; $C = 100 + 0{,}75(Y - T)$; $T = 0{,}2Y$, trong đó $Y$ là thu nhập, $C$ là tiêu dùng, $T$ là thuế, đầu tư $I_0 = 100$ và chi tiêu chính phủ $G_0 = 160$. Giá trị của mức thu nhập cân bằng $Y^*$ bằng",
   "options": [
    "$900$.",
    "$640$.",
    "$180$.",
    "$360$."
   ],
   "answer": 0,
   "explain": "Thế $T$ vào $C$ rồi vào phương trình đầu: $Y^* = 900,\\ T^* = 180,\\ C^* = 640$<br>Kết quả: $900$",
   "note": "Lập hệ phương trình từ điều kiện của bài toán (cung bằng cầu, hoặc dùng hết nguyên liệu) rồi giải bằng phép khử Gauss."
  },
  {
   "q": "Biết $\\displaystyle\\sum_{n=1}^{+\\infty}x^n = \\dfrac{x}{1-x}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}nx^n = \\dfrac{x}{(1-x)^2}$ với $|x| < 1$. Tổng của chuỗi $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2 n + 1}{4^n}$ bằng",
   "options": [
    "$\\dfrac{11}{9}$.",
    "$\\dfrac{8}{9}$.",
    "$1$.",
    "$\\dfrac{20}{9}$."
   ],
   "answer": 0,
   "explain": "Tách: $2\\displaystyle\\sum_{n\\ge1}\\dfrac{n}{4^n} +\\sum_{n\\ge1}\\dfrac{1}{4^n}$<br>Với $x = \\dfrac{1}{4}$: $\\displaystyle\\sum\\dfrac{n}{4^n} = \\dfrac{4}{9},\\quad \\sum\\dfrac{1}{4^n} = \\dfrac{1}{3}$<br>Tổng: $2\\cdot\\dfrac{4}{9} + 1\\cdot\\dfrac{1}{3} = \\dfrac{11}{9}$",
   "note": "Tách thành hai chuỗi quen thuộc rồi thay $x = \\dfrac1q$."
  },
  {
   "q": "Một quả bóng được thả rơi từ độ cao 6 mét. Sau mỗi lần chạm đất, bóng nảy lên đến độ cao bằng $\\dfrac{3}{4}$ độ cao của lần rơi ngay trước đó, và cứ tiếp tục như vậy mãi. Tổng quãng đường (mét) bóng đi được, tính cả đi lên và đi xuống, bằng",
   "options": [
    "$42$.",
    "$24$.",
    "$48$.",
    "$18$."
   ],
   "answer": 0,
   "explain": "$6 + 2\\displaystyle\\sum_{n=1}^{+\\infty}6\\left(\\dfrac{3}{4}\\right)^n = 6 + 2\\cdot\\dfrac{6\\cdot\\frac{3}{4}}{1 - \\frac{3}{4}} = 42$<br>Kết quả: $42$",
   "note": "Chuỗi hình học: $\\displaystyle\\sum_{n\\ge n_0}q^n = \\dfrac{q^{n_0}}{1 - q}$ với $|q| < 1$; chú ý chỉ số bắt đầu."
  },
  {
   "q": "Với $|x| < 1$, tổng của chuỗi lũy thừa $\\displaystyle\\sum_{n=0}^{+\\infty}\\dfrac{(-1)^nx^{2n+1}}{2n+1}$ bằng",
   "options": [
    "$\\arctan x$.",
    "$\\dfrac{x}{1+x^2}$.",
    "$\\ln(1+x)$.",
    "$\\dfrac{1}{1+x^2}$."
   ],
   "answer": 0,
   "explain": "Tích phân từng số hạng chuỗi $\\sum (-1)^nx^{2n} = \\dfrac{1}{1+x^2}$.",
   "note": "Đạo hàm hoặc tích phân từng số hạng của $\\displaystyle\\sum x^n = \\dfrac{1}{1 - x}$ để có các chuỗi liên quan; chỉ đúng khi $|x| < 1$."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' = \\dfrac{1 + y^2}{1 + x^2}$ là",
   "options": [
    "$\\arctan y = \\arctan x + C$.",
    "$\\arctan y = x + C$.",
    "$y = x + C$.",
    "$y = Cx$."
   ],
   "answer": 0,
   "explain": "$\\dfrac{dy}{1+y^2} = \\dfrac{dx}{1+x^2}$.",
   "note": "Tách biến: đưa $y$ về một vế, $x$ về một vế rồi lấy tích phân; hằng số $C$ chỉ cần viết ở một vế."
  },
  {
   "q": "Nghiệm tổng quát của phương trình $y' - y = e^x$ là",
   "options": [
    "$y = (x + C)e^x$.",
    "$y = Ce^x + x$.",
    "$y = (Cx + 1)e^x$.",
    "$y = Ce^x + e^{2x}$."
   ],
   "answer": 0,
   "explain": "$\\left(ye^{-x}\\right)' = 1$.",
   "note": "Tuyến tính: nhân thừa số tích phân $e^{\\int p\\,dx}$; đẳng cấp: đặt $y = ux$."
  },
  {
   "q": "Một tách cà phê có nhiệt độ $90^\\circ C$ được đặt trong phòng có nhiệt độ không đổi $20^\\circ C$. Sau 5 phút, nhiệt độ cà phê là $60^\\circ C$. Theo định luật Newton, tốc độ nguội tỉ lệ với hiệu nhiệt độ giữa cà phê và phòng. Nhiệt độ của cà phê sau 15 phút kể từ lúc đầu (làm tròn đến hàng phần chục, đơn vị $^\\circ C$) là",
   "options": [
    "33,1.",
    "0,0.",
    "33,3.",
    "40,0."
   ],
   "answer": 0,
   "explain": "$T' = -k(T - 20) \\Rightarrow T(t) = 20 + 70e^{-kt}$ (vì $T(0) = 90$)<br>$T(5) = 60 \\Rightarrow e^{-5k} = \\dfrac{40}{70}$<br>$T(15) = 20 + 70\\left(\\dfrac{40}{70}\\right)^{3} \\approx 33{,}1$",
   "note": "Lượng muối: $y' =$ (tốc độ vào) $-$ (tốc độ ra), với tốc độ ra = nồng độ hiện tại $\\times$ lưu lượng; chú ý thể tích trong bể có thay đổi hay không."
  },
  {
   "q": "Cho $D$ là hình tròn $x^2 + y^2 \\le \\ln 5$. Giá trị của tích phân $\\displaystyle\\iint_D e^{-x^2 - y^2}\\,dxdy$ bằng",
   "options": [
    "$\\dfrac{4 \\pi}{5}$.",
    "$\\dfrac{8 \\pi}{5}$.",
    "$\\dfrac{2 \\pi}{5}$.",
    "$5 \\pi$."
   ],
   "answer": 0,
   "explain": "Tọa độ cực: $0 \\le \\varphi \\le 2\\pi,\\ 0 \\le r \\le \\sqrt{\\ln 5}$, $dxdy = r\\,dr\\,d\\varphi$<br>$\\displaystyle\\int_0^{\\sqrt{\\ln 5}} e^{-r^2}\\,r\\,dr = \\left[-\\dfrac{e^{-r^2}}{2}\\right]_0^{\\sqrt{\\ln 5}} = \\dfrac12\\left(1 - \\dfrac{1}{5}\\right)$<br>$I = 2\\pi\\cdot\\dfrac{2}{5} = \\dfrac{4 \\pi}{5}$",
   "note": "Đổi sang tọa độ cực để có thừa số $r$; khi đó $re^{\\pm r^2}$ tính được nguyên hàm."
  },
  {
   "q": "Cho $V$ là tứ diện giới hạn bởi các mặt phẳng $x = 0,\\ y = 0,\\ z = 0$ và $x + y + z = 3$. Giá trị của tích phân $\\displaystyle\\iiint_V x\\,dxdydz$ bằng",
   "options": [
    "$\\dfrac{27}{8}$.",
    "$\\dfrac{27}{2}$.",
    "$\\dfrac{27}{4}$.",
    "$\\dfrac{9}{2}$."
   ],
   "answer": 0,
   "explain": "$\\displaystyle\\int_0^3 x\\cdot\\dfrac{(3 - x)^2}{2}\\,dx = \\dfrac{3^4}{24}$<br>Kết quả: $\\dfrac{27}{8}$",
   "note": "Tọa độ trụ hợp với paraboloid, mặt nón; tọa độ cầu hợp với hình cầu; không quên định thức Jacobi."
  },
  {
   "q": "Cho $L$ là một vòng của đường xoắn ốc $x = \\cos t,\\ y = \\sin t,\\ z = t$ với $0 \\le t \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\int_L z\\,ds$ bằng",
   "options": [
    "$2 \\sqrt{2} \\pi^{2}$.",
    "$2 \\pi^{2}$.",
    "$\\sqrt{2} \\pi^{2}$.",
    "$4 \\sqrt{2} \\pi^{2}$."
   ],
   "answer": 0,
   "explain": "$ds = \\sqrt{1^2 + 1^2}\\,dt = \\sqrt{2}\\,dt$; $\\displaystyle\\int_0^{2\\pi} 1t\\cdot\\sqrt{2}\\,dt$<br>Kết quả: $2 \\sqrt{2} \\pi^{2}$",
   "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong."
  },
  {
   "q": "Biết biểu thức $(2 x y^{2} + 2)\\,dx + 2 x^{2} y\\,dy$ là vi phân toàn phần của một hàm số $u(x,y)$ nên tích phân đường của nó không phụ thuộc đường lấy tích phân. Với $L$ là một đường cong trơn bất kì đi từ $A(1;0)$ đến $B(2;1)$, giá trị của $\\displaystyle\\int_L (2 x y^{2} + 2)\\,dx + 2 x^{2} y\\,dy$ bằng",
   "options": [
    "$6$.",
    "$8$.",
    "$-6$.",
    "$10$."
   ],
   "answer": 0,
   "explain": "$u'_x = 2 x y^{2} + 2 \\Rightarrow u = x^{2} y^{2} + 2 x + g(y)$<br>$u'_y = 2 x^{2} y \\Rightarrow u = x^{2} y^{2} + 2 x$<br>$I = u(B) - u(A) = (8) - (2) = 6$",
   "note": "Khi tích phân không phụ thuộc đường đi, chỉ cần tìm hàm thế $u$: kết quả là $u(B) - u(A)$."
  }
 ],
 "groups": [
  {
   "stem": "Cho ma trận $A = \\begin{pmatrix}4 & 1 & 0 \\\\ 1 & 4 & 0 \\\\ 0 & 0 & -1\\end{pmatrix}$ và gọi $I$ là ma trận đơn vị cấp 3.",
   "questions": [
    {
     "q": "Định thức của ma trận $A$ bằng",
     "options": [
      "$-15$.",
      "$-17$.",
      "$-16$.",
      "$15$."
     ],
     "answer": 0,
     "explain": "$\\det A = -1\\cdot(4^2 - 1^2)$<br>Kết quả: $-15$"
    },
    {
     "q": "Hạng của ma trận $A - (-1)I$ bằng",
     "options": [
      "$2$.",
      "$1$.",
      "$3$.",
      "$0$."
     ],
     "answer": 0,
     "explain": "$A - (-1)I = \\begin{pmatrix}5 & 1 & 0 \\\\ 1 & 5 & 0 \\\\ 0 & 0 & 0\\end{pmatrix}$<br>Kết quả: $2$"
    },
    {
     "q": "Véc tơ nào sau đây là véc tơ riêng của $A$ ứng với trị riêng $\\lambda = 5$?",
     "options": [
      "$(1;1;0)$.",
      "$(1;-1;0)$.",
      "$(0;0;1)$.",
      "$(1;1;1)$."
     ],
     "answer": 0,
     "explain": "$A(1;1;0)^T = (5;5;0)^T$.",
     "note": "Tổng các trị riêng bằng vết, tích các trị riêng bằng định thức của ma trận."
    }
   ]
  },
  {
   "stem": "Cho hàm số $f(x,y) = x^{3} - 27 x + y^{2}$.",
   "questions": [
    {
     "q": "Giá trị của $f''_{xx}(2;1) + f''_{yy}(2;1)$ bằng",
     "options": [
      "$14$.",
      "$12$.",
      "$10$.",
      "$2$."
     ],
     "answer": 0,
     "explain": "$f''_{xx} = 6x,\\quad f''_{yy} = 2$<br>Tổng tại điểm đã cho: $14$"
    },
    {
     "q": "Số điểm cực trị của hàm số bằng",
     "options": [
      "$1$.",
      "$2$.",
      "$0$.",
      "$3$."
     ],
     "answer": 0,
     "explain": "$f'_x = 3x^2 - 27 = 0,\\ f'_y = 2y = 0 \\Rightarrow$ điểm dừng $(3;0)$ và $(-3;0)$<br>$AC - B^2 = 12x$: tại $(3;0)$ dương (cực tiểu vì $A > 0$), tại $(-3;0)$ âm (không là cực trị)<br>Có đúng $1$ điểm cực trị"
    },
    {
     "q": "Giá trị cực tiểu của hàm số bằng",
     "options": [
      "$-54$.",
      "$54$.",
      "$0$.",
      "$-55$."
     ],
     "answer": 0,
     "explain": "Điểm cực tiểu $(3;0)$<br>$f(3;0) = 3^3 - 3\\cdot3^3 + 0 = -54$",
     "note": "Không phải điểm dừng nào cũng là cực trị: $AC - B^2 < 0$ là điểm yên ngựa."
    }
   ]
  }
 ],
 "short": [
  {
   "q": "Cho hai ma trận $A = \\begin{pmatrix}1 & -3 \\\\ 1 & -2\\end{pmatrix}$ và $B = \\begin{pmatrix}-2 & 4 \\\\ 2 & 2\\end{pmatrix}$. Tính $\\det\\left(A^{-1}B\\right)$.",
   "answer": [
    "-12"
   ],
   "explain": "$\\det A = 1,\\quad \\det B = -12$<br>$\\det\\left(A^{-1}B\\right) = \\dfrac{\\det B}{\\det A} = -12$",
   "note": "$\\det\\left(A^{-1}B\\right) = \\dfrac{\\det B}{\\det A}$: không cần tìm ma trận nghịch đảo."
  },
  {
   "q": "Tìm giá trị cực đại của hàm số $f(x,y) = - x^{3} + 6 x y - y^{3} + 10$.",
   "answer": [
    "18"
   ],
   "explain": "Điểm dừng $(0;0)$ (không là cực trị) và $(2;2)$ (cực đại vì $A = -12 < 0,\\ AC - B^2 > 0$), $f(2;2) = 18$<br>Đáp số: $18$",
   "note": "Hàm bậc hai: nhóm thành tổng các bình phương; hàm khác: tìm điểm dừng rồi xét dấu $AC - B^2$."
  },
  {
   "q": "Tìm số nguyên lớn nhất thuộc miền hội tụ của chuỗi lũy thừa $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{(x + 1)^{n}}{n\\cdot2^n}$.",
   "answer": [
    "0"
   ],
   "explain": "Bán kính hội tụ $R = 2$, khoảng hội tụ $(-3;1)$<br>Tại $x = 1$: $\\sum\\dfrac1n$ phân kỳ; tại $x = -3$: $\\sum\\dfrac{(-1)^n}{n}$ hội tụ<br>Miền hội tụ $[-3;1)$; số nguyên lớn nhất: $0$",
   "note": "Bên trong khoảng hội tụ chuỗi luôn hội tụ; hai đầu mút phải xét riêng (một đầu là chuỗi điều hòa, đầu kia là chuỗi đan dấu)."
  },
  {
   "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 6$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
   "answer": [
    "328"
   ],
   "explain": "Nghiệm kép $k = 2$: $y = (2 + 2x)e^{2x}$; $y(2) \\approx 327{,}589$<br>Đáp số: $328$",
   "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số."
  },
  {
   "q": "Trong hệ trục tọa độ $Oxyz$, cho $V$ là vật thể giới hạn bởi hai mặt $z = x^2 + y^2$ và $z = 2 - x^2 - y^2$. Biết thể tích của $V$ bằng $k\\pi$, tính $k$.",
   "answer": [
    "1"
   ],
   "explain": "Hai mặt cắt nhau trên đường tròn $r = 1$: $\\displaystyle\\int_0^{2\\pi}d\\varphi\\int_0^1 (2 - 2r^2)\\,r\\,dr = 1\\pi$<br>Đáp số: $1$",
   "note": "$V = \\displaystyle\\iint_D z\\,dxdy$ với $D$ là hình chiếu của vật thể lên $Oxy$: xác định $D$ trước."
  }
 ]
});
