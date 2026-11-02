// Generated from tools/gen_practice_bank.py using the existing CA1 question matrix.
window.PRACTICE_BANK = [
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (2;m;-3)$ và $v = (m;-3;2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$98$.",
   "$2$.",
   "$135$.",
   "$26$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (2)\\cdot m + m\\cdot(-3) + (-3)\\cdot(2) = - m - 6$<br>$u \\perp v \\Leftrightarrow - m - 6 = 0 \\Leftrightarrow m = -6$<br>$u + v = (-4;-9;-1)$<br>$|u + v|^2 = (-4)^2 + (-9)^2 + (-1)^2 = 98$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-001"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-2;3;-2)$ và $v = (-1;2;1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$2$.",
   "$6$.",
   "$1$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 6,\\quad \\langle v, v\\rangle = 6 \\Rightarrow t = 1$<br>$p = v = (-1;2;1)$, tổng các tọa độ: $2$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-002"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;0;1)$ và $v = (m;m;-4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$6$.",
   "$5$.",
   "$8$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} - 4 = \\left(m - 2\\right) \\left(m + 2\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -2 \\text{ hoặc } m > 2$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $6$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-003"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-1;1)$ và $v = (m;m;-12)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$6$.",
   "$5$.",
   "$8$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} - m - 12 = \\left(m - 4\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -3 < m < 4$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $6$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-004"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-1;m;2)$ và $v = (m;-1;4)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$54$.",
   "$40$.",
   "$71$.",
   "$22$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-1)\\cdot m + m\\cdot(-1) + (2)\\cdot(4) = 8 - 2 m$<br>$u \\perp v \\Leftrightarrow 8 - 2 m = 0 \\Leftrightarrow m = 4$<br>$u + v = (3;3;6)$<br>$|u + v|^2 = (3)^2 + (3)^2 + (6)^2 = 54$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-005"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (3;-1;4)$ và $v = (1;1;0)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$2$.",
   "$1$.",
   "$6$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 2,\\quad \\langle v, v\\rangle = 2 \\Rightarrow t = 1$<br>$p = v = (1;1;0)$, tổng các tọa độ: $2$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-006"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;4;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$6$.",
   "$5$.",
   "$8$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} + 4 m = m \\left(m + 4\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -4 \\text{ hoặc } m > 0$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $6$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-007"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-4;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$3$.",
   "$8$.",
   "$5$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} - 4 m = m \\left(m - 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 0 < m < 4$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $3$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-008"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-3;m;-2)$ và $v = (m;2;-2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$53$.",
   "$17$.",
   "$70$.",
   "$21$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-3)\\cdot m + m\\cdot(2) + (-2)\\cdot(-2) = 4 - m$<br>$u \\perp v \\Leftrightarrow 4 - m = 0 \\Leftrightarrow m = 4$<br>$u + v = (1;6;-4)$<br>$|u + v|^2 = (1)^2 + (6)^2 + (-4)^2 = 53$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-009"
 },
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
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-010"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-3;1)$ và $v = (m;m;-4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$5$.",
   "$6$.",
   "$7$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} - 3 m - 4 = \\left(m - 4\\right) \\left(m + 1\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -1 \\text{ hoặc } m > 4$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $5$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-011"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-5;1)$ và $v = (m;m;4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$2$.",
   "$9$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} - 5 m + 4 = \\left(m - 4\\right) \\left(m - 1\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 1 < m < 4$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $2$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-012"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (4;m;3)$ và $v = (m;-1;-2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$38$.",
   "$10$.",
   "$43$.",
   "$30$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (4)\\cdot m + m\\cdot(-1) + (3)\\cdot(-2) = 3 m - 6$<br>$u \\perp v \\Leftrightarrow 3 m - 6 = 0 \\Leftrightarrow m = 2$<br>$u + v = (6;1;1)$<br>$|u + v|^2 = (6)^2 + (1)^2 + (1)^2 = 38$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-013"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (3;1;1)$ và $v = (1;0;2)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$3$.",
   "$5$.",
   "$1$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 5,\\quad \\langle v, v\\rangle = 5 \\Rightarrow t = 1$<br>$p = v = (1;0;2)$, tổng các tọa độ: $3$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-014"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-4;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$6$.",
   "$5$.",
   "$8$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} - 4 m = m \\left(m - 4\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < 0 \\text{ hoặc } m > 4$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $6$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-015"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-6;1)$ và $v = (m;m;8)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$1$.",
   "$10$.",
   "$3$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} - 6 m + 8 = \\left(m - 4\\right) \\left(m - 2\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 2 < m < 4$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $1$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-016"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-1;m;-2)$ và $v = (m;-2;-3)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$26$.",
   "$34$.",
   "$31$.",
   "$18$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-1)\\cdot m + m\\cdot(-2) + (-2)\\cdot(-3) = 6 - 3 m$<br>$u \\perp v \\Leftrightarrow 6 - 3 m = 0 \\Leftrightarrow m = 2$<br>$u + v = (1;0;-5)$<br>$|u + v|^2 = (1)^2 + (0)^2 + (-5)^2 = 26$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-017"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-1;-1;-3)$ và $v = (1;2;2)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$-5$.",
   "$-9$.",
   "$-1$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -9,\\quad \\langle v, v\\rangle = 9 \\Rightarrow t = -1$<br>$p = -v = (-1;-2;-2)$, tổng các tọa độ: $-5$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-018"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;1;1)$ và $v = (m;m;-6)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$5$.",
   "$6$.",
   "$7$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} + m - 6 = \\left(m - 2\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -3 \\text{ hoặc } m > 2$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $5$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-019"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-1;1)$ và $v = (m;m;-6)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$4$.",
   "$7$.",
   "$6$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} - m - 6 = \\left(m - 3\\right) \\left(m + 2\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -2 < m < 3$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $4$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-020"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-1;m;-1)$ và $v = (m;3;-2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$17$.",
   "$13$.",
   "$19$.",
   "$15$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-1)\\cdot m + m\\cdot(3) + (-1)\\cdot(-2) = 2 m + 2$<br>$u \\perp v \\Leftrightarrow 2 m + 2 = 0 \\Leftrightarrow m = -1$<br>$u + v = (-2;2;-3)$<br>$|u + v|^2 = (-2)^2 + (2)^2 + (-3)^2 = 17$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-021"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-1;0;5)$ và $v = (-1;2;-2)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$1$.",
   "$-9$.",
   "$-1$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -9,\\quad \\langle v, v\\rangle = 9 \\Rightarrow t = -1$<br>$p = -v = (1;-2;2)$, tổng các tọa độ: $1$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-022"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;3;1)$ và $v = (m;m;-4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$5$.",
   "$6$.",
   "$7$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} + 3 m - 4 = \\left(m - 1\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -4 \\text{ hoặc } m > 1$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $5$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-023"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;6;1)$ và $v = (m;m;8)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$1$.",
   "$10$.",
   "$3$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = m^{2} + 6 m + 8 = \\left(m + 2\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -4 < m < -2$<br>Các số nguyên thuộc $[-5;5]$ thỏa mãn: $1$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-024"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (2;m;-3)$ và $v = (m;-3;1)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$41$.",
   "$5$.",
   "$51$.",
   "$23$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (2)\\cdot m + m\\cdot(-3) + (-3)\\cdot(1) = - m - 3$<br>$u \\perp v \\Leftrightarrow - m - 3 = 0 \\Leftrightarrow m = -3$<br>$u + v = (-1;-6;-2)$<br>$|u + v|^2 = (-1)^2 + (-6)^2 + (-2)^2 = 41$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-025"
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
  "explain": "Đặt $u = x$: $\\tan u = u + \\dfrac{u^3}{3} + o(u^3) \\Rightarrow \\tan u - u = \\dfrac{1x^3}{3} + o(x^3)$<br>$\\sin x = x - \\dfrac{x^3}{6} + o(x^3) \\Rightarrow x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{1/3}{1/6} = 2$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-001"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty}\\left[x^2\\left(e^{\\frac{3}{x}} - 1\\right) - 3x\\right]$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{9}{2}$.",
   "$9$.",
   "$0$.",
   "$\\dfrac{3}{2}$."
  ],
  "answer": 0,
  "explain": "Đặt $t = \\dfrac{3}{x} \\to 0$: $e^{t} - 1 = t + \\dfrac{t^2}{2} + o(t^2)$<br>$x^2\\left(e^{t} - 1\\right) = x^2\\left(\\dfrac{3}{x} + \\dfrac{9}{2x^2} + o\\left(\\dfrac{1}{x^2}\\right)\\right) = 3x + \\dfrac{9}{2} + o(1)$<br>$\\lim = \\dfrac{9}{2} = \\dfrac{9}{2}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-002"
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
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-003"
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
  "explain": "$\\ln(\\cos u) = \\ln\\left(1 - \\dfrac{u^2}{2} + o(u^2)\\right) = -\\dfrac{u^2}{2} + o(u^2)$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{-(2x)^2/2}{-(3x)^2/2} = \\dfrac{4}{9} = \\dfrac{4}{9}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-004"
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
  "explain": "Đặt $u = 2x$: $e^{u} - 1 = u + \\dfrac{u^2}{2} + o(u^2),\\quad \\sin u = u + o(u^2)$<br>$e^{u} - 1 - \\sin u = \\dfrac{u^2}{2} + o(u^2) = \\dfrac{4x^2}{2} + o(x^2)$<br>$\\lim = \\dfrac{4}{2} = 2$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-005"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\left(\\dfrac{1}{\\sin^2 3x} - \\dfrac{1}{9x^2}\\right)$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{3}$.",
   "$0$.",
   "$\\dfrac{1}{6}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 3x$: $\\dfrac{1}{\\sin^2u} - \\dfrac{1}{u^2} = \\dfrac{u^2 - \\sin^2u}{u^2\\sin^2u}$<br>$\\sin^2u = \\left(u - \\dfrac{u^3}{6} + o(u^3)\\right)^2 = u^2 - \\dfrac{u^4}{3} + o(u^4)$<br>$\\lim = \\lim\\limits_{u\\to0}\\dfrac{u^4/3}{u^4} = \\dfrac{1}{3}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-006"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\sin 3x - 3x\\cos 3x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$9$.",
   "$\\dfrac{9}{2}$.",
   "$\\dfrac{27}{2}$.",
   "$27$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 3x$: $\\sin u = u - \\dfrac{u^3}{6} + o(u^3),\\quad \\cos u = 1 - \\dfrac{u^2}{2} + o(u^2)$<br>$\\sin u - u\\cos u = \\left(u - \\dfrac{u^3}{6}\\right) - \\left(u - \\dfrac{u^3}{2}\\right) + o(u^3) = \\dfrac{u^3}{3} + o(u^3)$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(3x)^3}{3x^3} = \\dfrac{27}{3} = 9$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-007"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{x - \\arctan x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{3}$.",
   "$\\dfrac{1}{6}$.",
   "$1$.",
   "$- \\dfrac{1}{3}$."
  ],
  "answer": 0,
  "explain": "Đặt $u = x$: $\\arctan u = u - \\dfrac{u^3}{3} + o(u^3)$<br>$u - \\arctan u = \\dfrac{u^3}{3} + o(u^3) = \\dfrac{1x^3}{3} + o(x^3)$<br>$\\lim = \\dfrac{1}{3} = \\dfrac{1}{3}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-008"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 2x - 2x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$16$.",
   "$8$.",
   "$4$.",
   "$-16$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 2x$: $\\tan u = u + \\dfrac{u^3}{3} + o(u^3) \\Rightarrow \\tan u - u = \\dfrac{8x^3}{3} + o(x^3)$<br>$\\sin x = x - \\dfrac{x^3}{6} + o(x^3) \\Rightarrow x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{8/3}{1/6} = 16$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-009"
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
  "explain": "Đặt $t = \\dfrac{2}{x} \\to 0$: $e^{t} - 1 = t + \\dfrac{t^2}{2} + o(t^2)$<br>$x^2\\left(e^{t} - 1\\right) = x^2\\left(\\dfrac{2}{x} + \\dfrac{4}{2x^2} + o\\left(\\dfrac{1}{x^2}\\right)\\right) = 2x + \\dfrac{4}{2} + o(1)$<br>$\\lim = \\dfrac{4}{2} = 2$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-010"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{(1 + 2x)^{\\frac1x} - e^{2}}{x}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$- 2 e^{2}$.",
   "$- e^{2}$.",
   "$2 e^{2}$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "$(1 + 2x)^{\\frac1x} = e^{\\frac{\\ln(1 + 2x)}{x}}$ và $\\dfrac{\\ln(1 + 2x)}{x} = 2 - \\dfrac{4x}{2} + o(x)$<br>$(1 + 2x)^{\\frac1x} = e^{2}\\cdot e^{-\\frac{4x}{2} + o(x)} = e^{2}\\left(1 - \\dfrac{4x}{2} + o(x)\\right)$<br>$\\lim = -\\dfrac{4}{2}e^{2} = - 2 e^{2}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-011"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(\\cos 3x)}{\\ln(\\cos 2x)}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{9}{4}$.",
   "$\\dfrac{3}{2}$.",
   "$1$.",
   "$\\dfrac{4}{9}$."
  ],
  "answer": 0,
  "explain": "$\\ln(\\cos u) = \\ln\\left(1 - \\dfrac{u^2}{2} + o(u^2)\\right) = -\\dfrac{u^2}{2} + o(u^2)$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{-(3x)^2/2}{-(2x)^2/2} = \\dfrac{9}{4} = \\dfrac{9}{4}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-012"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{3x} - 1 - \\sin 3x}{x^2}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{9}{2}$.",
   "$9$.",
   "$\\dfrac{3}{2}$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 3x$: $e^{u} - 1 = u + \\dfrac{u^2}{2} + o(u^2),\\quad \\sin u = u + o(u^2)$<br>$e^{u} - 1 - \\sin u = \\dfrac{u^2}{2} + o(u^2) = \\dfrac{9x^2}{2} + o(x^2)$<br>$\\lim = \\dfrac{9}{2} = \\dfrac{9}{2}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-013"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\left(\\dfrac{1}{\\sin^2 x} - \\dfrac{1}{x^2}\\right)$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{3}$.",
   "$0$.",
   "$\\dfrac{1}{6}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Đặt $u = x$: $\\dfrac{1}{\\sin^2u} - \\dfrac{1}{u^2} = \\dfrac{u^2 - \\sin^2u}{u^2\\sin^2u}$<br>$\\sin^2u = \\left(u - \\dfrac{u^3}{6} + o(u^3)\\right)^2 = u^2 - \\dfrac{u^4}{3} + o(u^4)$<br>$\\lim = \\lim\\limits_{u\\to0}\\dfrac{u^4/3}{u^4} = \\dfrac{1}{3}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-014"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\sin x - x\\cos x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{3}$.",
   "$\\dfrac{1}{6}$.",
   "$\\dfrac{1}{2}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Đặt $u = x$: $\\sin u = u - \\dfrac{u^3}{6} + o(u^3),\\quad \\cos u = 1 - \\dfrac{u^2}{2} + o(u^2)$<br>$\\sin u - u\\cos u = \\left(u - \\dfrac{u^3}{6}\\right) - \\left(u - \\dfrac{u^3}{2}\\right) + o(u^3) = \\dfrac{u^3}{3} + o(u^3)$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(x)^3}{3x^3} = \\dfrac{1}{3} = \\dfrac{1}{3}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-015"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{2x - \\arctan 2x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{8}{3}$.",
   "$\\dfrac{4}{3}$.",
   "$8$.",
   "$- \\dfrac{8}{3}$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 2x$: $\\arctan u = u - \\dfrac{u^3}{3} + o(u^3)$<br>$u - \\arctan u = \\dfrac{u^3}{3} + o(u^3) = \\dfrac{8x^3}{3} + o(x^3)$<br>$\\lim = \\dfrac{8}{3} = \\dfrac{8}{3}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-016"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 3x - 3x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$54$.",
   "$27$.",
   "$6$.",
   "$\\dfrac{27}{2}$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 3x$: $\\tan u = u + \\dfrac{u^3}{3} + o(u^3) \\Rightarrow \\tan u - u = \\dfrac{27x^3}{3} + o(x^3)$<br>$\\sin x = x - \\dfrac{x^3}{6} + o(x^3) \\Rightarrow x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{27/3}{1/6} = 54$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-017"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty}\\left[x^2\\left(e^{\\frac{1}{x}} - 1\\right) - x\\right]$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$1$.",
   "$0$.",
   "$- \\dfrac{1}{2}$."
  ],
  "answer": 0,
  "explain": "Đặt $t = \\dfrac{1}{x} \\to 0$: $e^{t} - 1 = t + \\dfrac{t^2}{2} + o(t^2)$<br>$x^2\\left(e^{t} - 1\\right) = x^2\\left(\\dfrac{1}{x} + \\dfrac{1}{2x^2} + o\\left(\\dfrac{1}{x^2}\\right)\\right) = x + \\dfrac{1}{2} + o(1)$<br>$\\lim = \\dfrac{1}{2} = \\dfrac{1}{2}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-018"
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
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-019"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(\\cos x)}{\\ln(\\cos 2x)}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{4}$.",
   "$\\dfrac{1}{2}$.",
   "$1$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\ln(\\cos u) = \\ln\\left(1 - \\dfrac{u^2}{2} + o(u^2)\\right) = -\\dfrac{u^2}{2} + o(u^2)$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{-(x)^2/2}{-(2x)^2/2} = \\dfrac{1}{4} = \\dfrac{1}{4}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-020"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{x} - 1 - \\sin x}{x^2}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$1$.",
   "$0$.",
   "$- \\dfrac{1}{2}$."
  ],
  "answer": 0,
  "explain": "Đặt $u = x$: $e^{u} - 1 = u + \\dfrac{u^2}{2} + o(u^2),\\quad \\sin u = u + o(u^2)$<br>$e^{u} - 1 - \\sin u = \\dfrac{u^2}{2} + o(u^2) = \\dfrac{1x^2}{2} + o(x^2)$<br>$\\lim = \\dfrac{1}{2} = \\dfrac{1}{2}$",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-021"
 },
 {
  "q": "Hệ số của $x^{5}$ trong khai triển Maclaurin của hàm số $f(x) = e^{-3x^2}\\sin x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{601}{120}$.",
   "$0$.",
   "$601$.",
   "$- \\dfrac{601}{120}$."
  ],
  "answer": 0,
  "explain": "$e^{- 3 x^{2}} = 1 - 3x^{2} + \\dfrac{9}{2}x^{4} + o(x^{5})$<br>$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + \\dfrac{1}{120}x^{5} + o(x^{5})$<br>Nhân lại, gom theo bậc: $f(x) = x - \\dfrac{19}{6}x^{3} + \\dfrac{601}{120}x^{5} + o(x^{5})$<br>Hệ số của $x^{5}$: $\\dfrac{601}{120}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-001"
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
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-002"
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
  "explain": "<b>Đúng:</b> $d(uv) = v\\,du + u\\,dv$. $(uv)' = u'v + uv'$, nhân hai vế với $dx$.<br><b>Sai:</b> $d(uv) = du\\cdot dv$. Với $u = v = x$: $d(x^2) = 2x\\,dx$, khác $dx\\cdot dx$.<br><b>Sai:</b> $d\\left(\\dfrac{u}{v}\\right) = \\dfrac{du}{dv}$. $d\\left(\\dfrac{u}{v}\\right) = \\dfrac{v\\,du - u\\,dv}{v^2}$.<br><b>Sai:</b> $d(u^2) = 2u$. Thiếu vi phân của $u$: $d(u^2) = 2u\\,du$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-003"
 },
 {
  "q": "Hệ số của $x^{4}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{1}{(1 - x)(1 - 2x)}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$31$.",
   "$15$.",
   "$744$.",
   "$-31$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{1 - 2 x} = 1 + 2x + 4x^{2} + 8x^{3} + 16x^{4} + o(x^{4})$<br>$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + x^{4} + o(x^{4})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 3x + 7x^{2} + 15x^{3} + 31x^{4} + o(x^{4})$<br>Hệ số của $x^{4}$: $31$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-004"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{x}\\cos x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$- \\dfrac{1}{3}$.",
   "$0$.",
   "$-2$.",
   "$\\dfrac{1}{3}$."
  ],
  "answer": 0,
  "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + x - \\dfrac{1}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{1}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-005"
 },
 {
  "q": "Hệ số của $x^{4}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{1}{(1 - x)(1 - 3x)}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$121$.",
   "$40$.",
   "$2904$.",
   "$-121$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{1 - 3 x} = 1 + 3x + 9x^{2} + 27x^{3} + 81x^{4} + o(x^{4})$<br>$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + x^{4} + o(x^{4})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 4x + 13x^{2} + 40x^{3} + 121x^{4} + o(x^{4})$<br>Hệ số của $x^{4}$: $121$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-006"
 },
 {
  "q": "Hệ số của $x^{4}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{x}{- 3 x^{2} - 2 x + 1}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$20$.",
   "$7$.",
   "$480$.",
   "$-20$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{- 3 x^{2} - 2 x + 1} = 1 + 2x + 7x^{2} + 20x^{3} + 61x^{4} + o(x^{4})$<br>Nhân lại, gom theo bậc: $f(x) = x + 2x^{2} + 7x^{3} + 20x^{4} + o(x^{4})$<br>Hệ số của $x^{4}$: $20$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-007"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = (1 + x)\\sqrt{1 + 2x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$0$.",
   "$\\dfrac{1}{2}$.",
   "$1$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$x + 1 = 1 + x + o(x^{3})$<br>$\\sqrt{2 x + 1} = 1 + x - \\dfrac{1}{2}x^{2} + \\dfrac{1}{2}x^{3} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 2x + \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Hệ số của $x^{3}$: $0$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-008"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\sin 3x\\cos x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$-6$.",
   "$0$.",
   "$-36$.",
   "$6$."
  ],
  "answer": 0,
  "explain": "$\\sin{\\left(3 x \\right)} = 3x - \\dfrac{9}{2}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 3x - 6x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $-6$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-009"
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
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-010"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{\\cos 2x}{1 + x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$1$.",
   "$-1$.",
   "$6$.",
   "$\\dfrac{3}{2}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{x + 1} = 1 - x + x^{2} - x^{3} + o(x^{3})$<br>$\\cos{\\left(2 x \\right)} = 1 - 2x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 - x - x^{2} + x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $1$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-011"
 },
 {
  "q": "Cho hàm số $f$ có đạo hàm cấp hai liên tục trên khoảng $(a;b)$ và $x_0 \\in (a;b)$. Phát biểu nào sau đây là đúng?",
  "options": [
   "Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $f$ đạt cực tiểu tại $x_0$.",
   "Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $f$ đạt cực đại tại $x_0$.",
   "Nếu $f''(x_0) = 0$ thì $x_0$ là hoành độ điểm uốn của đồ thị.",
   "Nếu $f$ đạt cực tiểu tại $x_0$ thì $f''(x_0) > 0$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $f$ đạt cực tiểu tại $x_0$. Đây là điều kiện đủ của cực trị theo đạo hàm cấp hai.<br><b>Sai:</b> Nếu $f'(x_0) = 0$ và $f''(x_0) > 0$ thì $f$ đạt cực đại tại $x_0$. $f(x) = x^2$ có $f'(0) = 0$, $f''(0) = 2 > 0$ và đạt cực tiểu tại $0$.<br><b>Sai:</b> Nếu $f''(x_0) = 0$ thì $x_0$ là hoành độ điểm uốn của đồ thị. $f(x) = x^4$ có $f''(0) = 0$ nhưng $f'' = 12x^2$ không đổi dấu khi qua $0$.<br><b>Sai:</b> Nếu $f$ đạt cực tiểu tại $x_0$ thì $f''(x_0) > 0$. $f(x) = x^4$ đạt cực tiểu tại $0$ mà $f''(0) = 0$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-012"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{2x}\\cos x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{1}{3}$.",
   "$\\dfrac{3}{2}$.",
   "$2$.",
   "$- \\dfrac{1}{3}$."
  ],
  "answer": 0,
  "explain": "$e^{2 x} = 1 + 2x + 2x^{2} + \\dfrac{4}{3}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 2x + \\dfrac{3}{2}x^{2} + \\dfrac{1}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{1}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-013"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{e^{x}}{1 - x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{8}{3}$.",
   "$\\dfrac{5}{2}$.",
   "$16$.",
   "$- \\dfrac{8}{3}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + o(x^{3})$<br>$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 2x + \\dfrac{5}{2}x^{2} + \\dfrac{8}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{8}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-014"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{3x}\\cos 2x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$- \\dfrac{3}{2}$.",
   "$\\dfrac{5}{2}$.",
   "$-9$.",
   "$\\dfrac{3}{2}$."
  ],
  "answer": 0,
  "explain": "$e^{3 x} = 1 + 3x + \\dfrac{9}{2}x^{2} + \\dfrac{9}{2}x^{3} + o(x^{3})$<br>$\\cos{\\left(2 x \\right)} = 1 - 2x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 3x + \\dfrac{5}{2}x^{2} - \\dfrac{3}{2}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{3}{2}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-015"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{e^{3x}}{1 - x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$13$.",
   "$\\dfrac{17}{2}$.",
   "$78$.",
   "$-13$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + o(x^{3})$<br>$e^{3 x} = 1 + 3x + \\dfrac{9}{2}x^{2} + \\dfrac{9}{2}x^{3} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 4x + \\dfrac{17}{2}x^{2} + 13x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $13$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-016"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\sin 2x\\cos x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$- \\dfrac{7}{3}$.",
   "$0$.",
   "$-14$.",
   "$\\dfrac{7}{3}$."
  ],
  "answer": 0,
  "explain": "$\\sin{\\left(2 x \\right)} = 2x - \\dfrac{4}{3}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 2x - \\dfrac{7}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{7}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-017"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{x}\\ln(1 + 3x)$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$6$.",
   "$- \\dfrac{3}{2}$.",
   "$36$.",
   "$-6$."
  ],
  "answer": 0,
  "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\ln\\left(3 x + 1\\right) = 3x - \\dfrac{9}{2}x^{2} + 9x^{3} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 3x - \\dfrac{3}{2}x^{2} + 6x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $6$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-018"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\ln\\dfrac{1 + x}{1 - x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{2}{3}$.",
   "$0$.",
   "$4$.",
   "$- \\dfrac{2}{3}$."
  ],
  "answer": 0,
  "explain": "Nhân lại, gom theo bậc: $f(x) = 2x + \\dfrac{2}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{2}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-019"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\ln\\dfrac{1 + 2x}{1 - x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$3$.",
   "$- \\dfrac{3}{2}$.",
   "$18$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "Nhân lại, gom theo bậc: $f(x) = 3x - \\dfrac{3}{2}x^{2} + 3x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $3$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-020"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{\\cos x}{1 + x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$- \\dfrac{1}{2}$.",
   "$\\dfrac{1}{2}$.",
   "$-3$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{x + 1} = 1 - x + x^{2} - x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 - x + \\dfrac{1}{2}x^{2} - \\dfrac{1}{2}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{1}{2}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-021"
 },
 {
  "q": "Hệ số của $x^{5}$ trong khai triển Maclaurin của hàm số $f(x) = e^{-2x^2}\\sin x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{281}{120}$.",
   "$0$.",
   "$281$.",
   "$- \\dfrac{281}{120}$."
  ],
  "answer": 0,
  "explain": "$e^{- 2 x^{2}} = 1 - 2x^{2} + 2x^{4} + o(x^{5})$<br>$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + \\dfrac{1}{120}x^{5} + o(x^{5})$<br>Nhân lại, gom theo bậc: $f(x) = x - \\dfrac{13}{6}x^{3} + \\dfrac{281}{120}x^{5} + o(x^{5})$<br>Hệ số của $x^{5}$: $\\dfrac{281}{120}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-022"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{3x}\\cos x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$3$.",
   "$4$.",
   "$18$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$e^{3 x} = 1 + 3x + \\dfrac{9}{2}x^{2} + \\dfrac{9}{2}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 3x + 4x^{2} + 3x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $3$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-023"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{e^{2x}}{1 - x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{19}{3}$.",
   "$5$.",
   "$38$.",
   "$- \\dfrac{19}{3}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + o(x^{3})$<br>$e^{2 x} = 1 + 2x + 2x^{2} + \\dfrac{4}{3}x^{3} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 3x + 5x^{2} + \\dfrac{19}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{19}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-024"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{2x}\\cos 2x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$- \\dfrac{8}{3}$.",
   "$0$.",
   "$-16$.",
   "$\\dfrac{8}{3}$."
  ],
  "answer": 0,
  "explain": "$e^{2 x} = 1 + 2x + 2x^{2} + \\dfrac{4}{3}x^{3} + o(x^{3})$<br>$\\cos{\\left(2 x \\right)} = 1 - 2x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 2x - \\dfrac{8}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{8}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-025"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\sin x\\cos x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$- \\dfrac{2}{3}$.",
   "$0$.",
   "$-4$.",
   "$\\dfrac{2}{3}$."
  ],
  "answer": 0,
  "explain": "$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = x - \\dfrac{2}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{2}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-026"
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
  "explain": "$\\dfrac{1}{- 4 x^{2} - 3 x + 1} = 1 + 3x + 13x^{2} + 51x^{3} + 205x^{4} + o(x^{4})$<br>Nhân lại, gom theo bậc: $f(x) = x + 3x^{2} + 13x^{3} + 51x^{4} + o(x^{4})$<br>Hệ số của $x^{4}$: $51$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-027"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = e^{x}\\ln(1 + x)$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{1}{3}$.",
   "$\\dfrac{1}{2}$.",
   "$2$.",
   "$- \\dfrac{1}{3}$."
  ],
  "answer": 0,
  "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\ln\\left(x + 1\\right) = x - \\dfrac{1}{2}x^{2} + \\dfrac{1}{3}x^{3} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{1}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-028"
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
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-029"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\ln\\dfrac{1 + 3x}{1 - x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{28}{3}$.",
   "$-4$.",
   "$56$.",
   "$- \\dfrac{28}{3}$."
  ],
  "answer": 0,
  "explain": "Nhân lại, gom theo bậc: $f(x) = 4x - 4x^{2} + \\dfrac{28}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{28}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-030"
 },
 {
  "q": "Hệ số của $x^{5}$ trong khai triển Maclaurin của hàm số $f(x) = e^{-x^2}\\sin x$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{27}{40}$.",
   "$0$.",
   "$81$.",
   "$- \\dfrac{27}{40}$."
  ],
  "answer": 0,
  "explain": "$e^{- x^{2}} = 1 - x^{2} + \\dfrac{1}{2}x^{4} + o(x^{5})$<br>$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + \\dfrac{1}{120}x^{5} + o(x^{5})$<br>Nhân lại, gom theo bậc: $f(x) = x - \\dfrac{7}{6}x^{3} + \\dfrac{27}{40}x^{5} + o(x^{5})$<br>Hệ số của $x^{5}$: $\\dfrac{27}{40}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-031"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{\\cos 3x}{1 + x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$\\dfrac{7}{2}$.",
   "$- \\dfrac{7}{2}$.",
   "$21$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{x + 1} = 1 - x + x^{2} - x^{3} + o(x^{3})$<br>$\\cos{\\left(3 x \\right)} = 1 - \\dfrac{9}{2}x^{2} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 1 - x - \\dfrac{7}{2}x^{2} + \\dfrac{7}{2}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{7}{2}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-032"
 },
 {
  "q": "Hệ số của $x^{4}$ trong khai triển Maclaurin của hàm số $f(x) = \\dfrac{1}{(1 - x)(1 - 4x)}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$341$.",
   "$85$.",
   "$8184$.",
   "$-341$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{1 - 4 x} = 1 + 4x + 16x^{2} + 64x^{3} + 256x^{4} + o(x^{4})$<br>$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + x^{4} + o(x^{4})$<br>Nhân lại, gom theo bậc: $f(x) = 1 + 5x + 21x^{2} + 85x^{3} + 341x^{4} + o(x^{4})$<br>Hệ số của $x^{4}$: $341$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-033"
 },
 {
  "q": "Một chất điểm chuyển động trong mặt phẳng $Oxy$ theo quỹ đạo có phương trình tham số $x = t^2 + 3t,\\ y = t^3 - t$ ($t$ là thời gian). Hệ số góc $\\dfrac{dy}{dx}$ của tiếp tuyến với quỹ đạo tại thời điểm $t = 3$ bằng",
  "options": [
   "$\\dfrac{26}{9}$.",
   "$\\dfrac{9}{26}$.",
   "$26$.",
   "$\\dfrac{9}{2}$."
  ],
  "answer": 0,
  "explain": "$x'(t) = 2t + 3,\\quad y'(t) = 3t^2 - 1$<br>$\\dfrac{dy}{dx} = \\dfrac{y'(t)}{x'(t)} = \\dfrac{3t^2 - 1}{2t + 3}$<br>Tại $t = 3$: $\\dfrac{26}{9} = \\dfrac{26}{9}$",
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-034"
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
  "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\ln\\left(2 x + 1\\right) = 2x - 2x^{2} + \\dfrac{8}{3}x^{3} + o(x^{3})$<br>Nhân lại, gom theo bậc: $f(x) = 2x + \\dfrac{5}{3}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $\\dfrac{5}{3}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-035"
 },
 {
  "q": "Cho hàm ẩn $y = y(x)$ xác định bởi phương trình $x^{2} + 3 x y + y^{2} = 11$. Hệ số góc của tiếp tuyến với đường cong tại điểm $(2;1)$, tức giá trị $y'(2)$, bằng",
  "options": [
   "$- \\dfrac{7}{8}$.",
   "$\\dfrac{7}{8}$.",
   "$\\dfrac{7}{2}$.",
   "$- \\dfrac{8}{7}$."
  ],
  "answer": 0,
  "explain": "Đạo hàm hai vế theo $x$: $2x + 3(y + xy') + 2yy' = 0$<br>$y' = -\\dfrac{2x + 3y}{3x + 2y}$<br>Tại $(2;1)$: $y' = -\\dfrac{7}{8} = - \\dfrac{7}{8}$",
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-036"
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
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-037"
 },
 {
  "q": "Hệ số của $x^{3}$ trong khai triển Maclaurin của hàm số $f(x) = (1 + x)\\sqrt{1 + x}$ bằng<span class=\"q-hint\">Gợi ý: nhân hai khai triển cơ bản rồi gom các số hạng cùng bậc.</span>",
  "options": [
   "$- \\dfrac{1}{16}$.",
   "$\\dfrac{3}{8}$.",
   "$- \\dfrac{3}{8}$.",
   "$\\dfrac{1}{16}$."
  ],
  "answer": 0,
  "explain": "Nhân lại, gom theo bậc: $f(x) = 1 + \\dfrac{3}{2}x + \\dfrac{3}{8}x^{2} - \\dfrac{1}{16}x^{3} + o(x^{3})$<br>Hệ số của $x^{3}$: $- \\dfrac{1}{16}$",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-038"
 },
 {
  "q": "Cho hàm số $f(x) = x^2e^{-2x}$. Dùng công thức Leibniz $(uv)^{(n)} = \\sum_{k=0}^{n} C_n^k u^{(k)}v^{(n-k)}$, giá trị của đạo hàm cấp mười $f^{(10)}(0)$ bằng",
  "options": [
   "$23040$.",
   "$11520$.",
   "$46080$.",
   "$1024$."
  ],
  "answer": 0,
  "explain": "$u = x^2$: $u(0) = 0,\\ u'(0) = 0,\\ u''(0) = 2,\\ u^{(k)} = 0\\ (k \\ge 3)$; $v = e^{-2x}$: $v^{(m)}(0) = (-2)^m$<br>$f^{(10)}(0) = C_{10}^2\\cdot u''(0)\\cdot v^{(8)}(0) = 45\\cdot2\\cdot(-2)^{8} = 23040$",
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-039"
 },
 {
  "q": "Cho hàm ẩn $y = y(x)$ xác định bởi phương trình $x^{2} + 3 x y + y^{2} = 19$. Hệ số góc của tiếp tuyến với đường cong tại điểm $(1;3)$, tức giá trị $y'(1)$, bằng",
  "options": [
   "$- \\dfrac{11}{9}$.",
   "$\\dfrac{11}{9}$.",
   "$\\dfrac{11}{6}$.",
   "$- \\dfrac{9}{11}$."
  ],
  "answer": 0,
  "explain": "Đạo hàm hai vế theo $x$: $2x + 3(y + xy') + 2yy' = 0$<br>$y' = -\\dfrac{2x + 3y}{3x + 2y}$<br>Tại $(1;3)$: $y' = -\\dfrac{11}{9} = - \\dfrac{11}{9}$",
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-040"
 },
 {
  "q": "Cho hàm số $f(x) = x^{2x}$ $(x > 0)$. Bằng cách lấy lôgarit hai vế rồi đạo hàm, giá trị của $f'(e)$ bằng",
  "options": [
   "$4 e^{2 e}$.",
   "$2 e^{2 e}$.",
   "$e^{2 e}$.",
   "$2 \\left(1 + e\\right) e^{2 e}$."
  ],
  "answer": 0,
  "explain": "$\\ln f = 2x\\ln x \\Rightarrow \\dfrac{f'}{f} = 2(\\ln x + 1)$<br>$f'(x) = 2x^{2x}(\\ln x + 1)$<br>$f'(e) = 2e^{2e}\\cdot2 = 4 e^{2 e}$",
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-041"
 },
 {
  "q": "Một chất điểm chuyển động trong mặt phẳng $Oxy$ theo quỹ đạo có phương trình tham số $x = t^2 + 3t,\\ y = t^3 - t$ ($t$ là thời gian). Hệ số góc $\\dfrac{dy}{dx}$ của tiếp tuyến với quỹ đạo tại thời điểm $t = 2$ bằng",
  "options": [
   "$\\dfrac{11}{7}$.",
   "$\\dfrac{7}{11}$.",
   "$11$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$x'(t) = 2t + 3,\\quad y'(t) = 3t^2 - 1$<br>$\\dfrac{dy}{dx} = \\dfrac{y'(t)}{x'(t)} = \\dfrac{3t^2 - 1}{2t + 3}$<br>Tại $t = 2$: $\\dfrac{11}{7} = \\dfrac{11}{7}$",
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-042"
 },
 {
  "q": "Cho hàm số $f(x) = x^2e^{2x}$. Dùng công thức Leibniz $(uv)^{(n)} = \\sum_{k=0}^{n} C_n^k u^{(k)}v^{(n-k)}$, giá trị của đạo hàm cấp tám $f^{(8)}(0)$ bằng",
  "options": [
   "$3584$.",
   "$1792$.",
   "$7168$.",
   "$256$."
  ],
  "answer": 0,
  "explain": "$u = x^2$: $u(0) = 0,\\ u'(0) = 0,\\ u''(0) = 2,\\ u^{(k)} = 0\\ (k \\ge 3)$; $v = e^{2x}$: $v^{(m)}(0) = (2)^m$<br>$f^{(8)}(0) = C_{8}^2\\cdot u''(0)\\cdot v^{(6)}(0) = 28\\cdot2\\cdot(2)^{6} = 3584$",
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-043"
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $48\\cos 2x$: $a = 0,\\ b = 12$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 12x\\sin 2x$<br>$y(0) = C_1 = 1;\\quad y'(0) = 2 C_{2} = -4 \\Rightarrow C_2 = -2$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = -2 + 12\\cdot\\dfrac{\\pi}{4} = 3 \\pi - 2$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-001"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 2e^{-x}$ với điều kiện $y(0) = 2;\\ y'(0) = 0$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{5}{e}$.",
   "$\\dfrac{4}{e}$.",
   "$\\dfrac{6}{e}$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{-x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = - C_{1} + C_2 = 0 \\Rightarrow C_2 = 2$<br>$y(1) = (2 + (2) + 1)e^{-1} = \\dfrac{5}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-002"
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $12\\cos x$: $a = 0,\\ b = 6$<br>$y = C_1\\cos x + C_2\\sin x + 6x\\sin x$<br>$y(0) = C_1 = 3;\\quad y'(0) = C_{2} = 2 \\Rightarrow C_2 = 2$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 2 + 6\\cdot\\dfrac{\\pi}{2} = 2 + 3 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-003"
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
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-004"
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $32\\cos 2x$: $a = 0,\\ b = 8$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0) = C_1 = -1;\\quad y'(0) = 2 C_{2} = 6 \\Rightarrow C_2 = 3$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 3 + 8\\cdot\\dfrac{\\pi}{4} = 3 + 2 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-005"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 4e^{x}$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$6 e$.",
   "$4 e$.",
   "$8 e$.",
   "$6$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = C_{1} + C_2 = 4 \\Rightarrow C_2 = 2$<br>$y(1) = (2 + (2) + 2)e = 6 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-006"
 },
 {
  "q": "Cho phương trình $y'' + \\omega^2y = 0$ với $\\omega > 0$. Phát biểu nào sau đây là đúng?",
  "options": [
   "Mọi nghiệm của phương trình đều có dạng $y = C_1\\cos\\omega x + C_2\\sin\\omega x$.",
   "Nghiệm tổng quát là $y = C_1e^{\\omega x} + C_2e^{-\\omega x}$.",
   "Mọi nghiệm khác không đều tiến về $0$ khi $x \\to +\\infty$.",
   "Phương trình đặc trưng có hai nghiệm thực phân biệt."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> Mọi nghiệm của phương trình đều có dạng $y = C_1\\cos\\omega x + C_2\\sin\\omega x$. Phương trình đặc trưng $k^2 + \\omega^2 = 0$ có nghiệm $k = \\pm i\\omega$.<br><b>Sai:</b> Nghiệm tổng quát là $y = C_1e^{\\omega x} + C_2e^{-\\omega x}$. Đó là nghiệm tổng quát của $y'' - \\omega^2y = 0$.<br><b>Sai:</b> Mọi nghiệm khác không đều tiến về $0$ khi $x \\to +\\infty$. Nghiệm dao động với biên độ $\\sqrt{C_1^2 + C_2^2}$ không đổi.<br><b>Sai:</b> Phương trình đặc trưng có hai nghiệm thực phân biệt. $k^2 = -\\omega^2 < 0$ nên hai nghiệm là số phức $\\pm i\\omega$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-007"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 48\\cos 2x$ với điều kiện $y(0) = 2;\\ y'(0) = 6$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$3 + 3 \\pi$.",
   "$3$.",
   "$3 \\pi$.",
   "$3 - 3 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $48\\cos 2x$: $a = 0,\\ b = 12$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 12x\\sin 2x$<br>$y(0) = C_1 = 2;\\quad y'(0) = 2 C_{2} = 6 \\Rightarrow C_2 = 3$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 3 + 12\\cdot\\dfrac{\\pi}{4} = 3 + 3 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-008"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 6e^{x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$5 e$.",
   "$2 e$.",
   "$8 e$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = C_{1} + C_2 = 2 \\Rightarrow C_2 = 2$<br>$y(1) = (0 + (2) + 3)e = 5 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-009"
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $4\\cos x$: $a = 0,\\ b = 2$<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0) = C_1 = 1;\\quad y'(0) = C_{2} = -2 \\Rightarrow C_2 = -2$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = -2 + 2\\cdot\\dfrac{\\pi}{2} = \\pi - 2$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-010"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 2e^{-x}$ với điều kiện $y(0) = 0;\\ y'(0) = -1$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$0$.",
   "$- \\dfrac{1}{e}$.",
   "$e^{-1}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{-x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = - C_{1} + C_2 = -1 \\Rightarrow C_2 = -1$<br>$y(1) = (0 + (-1) + 1)e^{-1} = 0$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-011"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = 3;\\ y'(0) = -4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$\\pi - 2$.",
   "$-2$.",
   "$\\pi$.",
   "$- \\pi - 2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $16\\cos 2x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0) = C_1 = 3;\\quad y'(0) = 2 C_{2} = -4 \\Rightarrow C_2 = -2$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = -2 + 4\\cdot\\dfrac{\\pi}{4} = \\pi - 2$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-012"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 4e^{x}$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$5 e$.",
   "$3 e$.",
   "$7 e$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = C_{1} + C_2 = 3 \\Rightarrow C_2 = 2$<br>$y(1) = (1 + (2) + 2)e = 5 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-013"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 4\\cos x$ với điều kiện $y(0) = -1;\\ y'(0) = 3$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$3 + \\pi$.",
   "$3$.",
   "$\\pi$.",
   "$3 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $4\\cos x$: $a = 0,\\ b = 2$<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0) = C_1 = -1;\\quad y'(0) = C_{2} = 3 \\Rightarrow C_2 = 3$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 3 + 2\\cdot\\dfrac{\\pi}{2} = 3 + \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-014"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 4e^{-x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{4}{e}$.",
   "$\\dfrac{2}{e}$.",
   "$\\dfrac{6}{e}$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{-x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = - C_{1} + C_2 = 2 \\Rightarrow C_2 = 2$<br>$y(1) = (0 + (2) + 2)e^{-1} = \\dfrac{4}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-015"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 12\\cos x$ với điều kiện $y(0) = -1;\\ y'(0) = -2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$3 \\pi - 2$.",
   "$-2$.",
   "$3 \\pi$.",
   "$- 3 \\pi - 2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $12\\cos x$: $a = 0,\\ b = 6$<br>$y = C_1\\cos x + C_2\\sin x + 6x\\sin x$<br>$y(0) = C_1 = -1;\\quad y'(0) = C_{2} = -2 \\Rightarrow C_2 = -2$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = -2 + 6\\cdot\\dfrac{\\pi}{2} = 3 \\pi - 2$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-016"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 6e^{-x}$ với điều kiện $y(0) = 1;\\ y'(0) = 0$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{5}{e}$.",
   "$\\dfrac{2}{e}$.",
   "$\\dfrac{8}{e}$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{-x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = - C_{1} + C_2 = 0 \\Rightarrow C_2 = 1$<br>$y(1) = (1 + (1) + 3)e^{-1} = \\dfrac{5}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-017"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 32\\cos 2x$ với điều kiện $y(0) = 3;\\ y'(0) = -4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$2 \\pi - 2$.",
   "$-2$.",
   "$2 \\pi$.",
   "$- 2 \\pi - 2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $32\\cos 2x$: $a = 0,\\ b = 8$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0) = C_1 = 3;\\quad y'(0) = 2 C_{2} = -4 \\Rightarrow C_2 = -2$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = -2 + 8\\cdot\\dfrac{\\pi}{4} = 2 \\pi - 2$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-018"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 6e^{-x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{5}{e}$.",
   "$\\dfrac{2}{e}$.",
   "$\\dfrac{8}{e}$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{-x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = - C_{1} + C_2 = 2 \\Rightarrow C_2 = 2$<br>$y(1) = (0 + (2) + 3)e^{-1} = \\dfrac{5}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-019"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$2 + \\pi$.",
   "$2$.",
   "$\\pi$.",
   "$2 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $16\\cos 2x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0) = C_1 = 2;\\quad y'(0) = 2 C_{2} = 4 \\Rightarrow C_2 = 2$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 2 + 4\\cdot\\dfrac{\\pi}{4} = 2 + \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-020"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 2e^{-x}$ với điều kiện $y(0) = 0;\\ y'(0) = 1$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{2}{e}$.",
   "$e^{-1}$.",
   "$\\dfrac{3}{e}$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{-x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = - C_{1} + C_2 = 1 \\Rightarrow C_2 = 1$<br>$y(1) = (0 + (1) + 1)e^{-1} = \\dfrac{2}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-021"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = -1;\\ y'(0) = 6$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$3 + \\pi$.",
   "$3$.",
   "$\\pi$.",
   "$3 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $16\\cos 2x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0) = C_1 = -1;\\quad y'(0) = 2 C_{2} = 6 \\Rightarrow C_2 = 3$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 3 + 4\\cdot\\dfrac{\\pi}{4} = 3 + \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-022"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 4e^{x}$ với điều kiện $y(0) = 0;\\ y'(0) = 1$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$3 e$.",
   "$e$.",
   "$5 e$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = C_{1} + C_2 = 1 \\Rightarrow C_2 = 1$<br>$y(1) = (0 + (1) + 2)e = 3 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-023"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = 2;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$1 + \\pi$.",
   "$1$.",
   "$\\pi$.",
   "$1 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $16\\cos 2x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0) = C_1 = 2;\\quad y'(0) = 2 C_{2} = 2 \\Rightarrow C_2 = 1$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 1 + 4\\cdot\\dfrac{\\pi}{4} = 1 + \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-024"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 2e^{x}$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$5 e$.",
   "$4 e$.",
   "$6 e$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = C_{1} + C_2 = 4 \\Rightarrow C_2 = 2$<br>$y(1) = (2 + (2) + 1)e = 5 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-025"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 8\\cos x$ với điều kiện $y(0) = -1;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$2 + 2 \\pi$.",
   "$2$.",
   "$2 \\pi$.",
   "$2 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $8\\cos x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0) = C_1 = -1;\\quad y'(0) = C_{2} = 2 \\Rightarrow C_2 = 2$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 2 + 4\\cdot\\dfrac{\\pi}{2} = 2 + 2 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-026"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 2e^{x}$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$4 e$.",
   "$3 e$.",
   "$5 e$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = C_{1} + C_2 = 3 \\Rightarrow C_2 = 1$<br>$y(1) = (2 + (1) + 1)e = 4 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-027"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 8\\cos x$ với điều kiện $y(0) = -1;\\ y'(0) = 1$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$1 + 2 \\pi$.",
   "$1$.",
   "$2 \\pi$.",
   "$1 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $8\\cos x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0) = C_1 = -1;\\quad y'(0) = C_{2} = 1 \\Rightarrow C_2 = 1$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 1 + 4\\cdot\\dfrac{\\pi}{2} = 1 + 2 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-028"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 6e^{x}$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$6 e$.",
   "$3 e$.",
   "$9 e$.",
   "$6$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = C_{1} + C_2 = 3 \\Rightarrow C_2 = 2$<br>$y(1) = (1 + (2) + 3)e = 6 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-029"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 8\\cos x$ với điều kiện $y(0) = 3;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$2 + 2 \\pi$.",
   "$2$.",
   "$2 \\pi$.",
   "$2 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $8\\cos x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0) = C_1 = 3;\\quad y'(0) = C_{2} = 2 \\Rightarrow C_2 = 2$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 2 + 4\\cdot\\dfrac{\\pi}{2} = 2 + 2 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-030"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 4e^{-x}$ với điều kiện $y(0) = 1;\\ y'(0) = 1$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{5}{e}$.",
   "$\\dfrac{3}{e}$.",
   "$\\dfrac{7}{e}$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{-x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = - C_{1} + C_2 = 1 \\Rightarrow C_2 = 2$<br>$y(1) = (1 + (2) + 2)e^{-1} = \\dfrac{5}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-031"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = 1;\\ y'(0) = -4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$\\pi - 2$.",
   "$-2$.",
   "$\\pi$.",
   "$- \\pi - 2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $16\\cos 2x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0) = C_1 = 1;\\quad y'(0) = 2 C_{2} = -4 \\Rightarrow C_2 = -2$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = -2 + 4\\cdot\\dfrac{\\pi}{4} = \\pi - 2$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-032"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 6e^{-x}$ với điều kiện $y(0) = 1;\\ y'(0) = -2$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{3}{e}$.",
   "$0$.",
   "$\\dfrac{6}{e}$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{-x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = - C_{1} + C_2 = -2 \\Rightarrow C_2 = -1$<br>$y(1) = (1 + (-1) + 3)e^{-1} = \\dfrac{3}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-033"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 48\\cos 2x$ với điều kiện $y(0) = 3;\\ y'(0) = 4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$2 + 3 \\pi$.",
   "$2$.",
   "$3 \\pi$.",
   "$2 - 3 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $48\\cos 2x$: $a = 0,\\ b = 12$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 12x\\sin 2x$<br>$y(0) = C_1 = 3;\\quad y'(0) = 2 C_{2} = 4 \\Rightarrow C_2 = 2$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 2 + 12\\cdot\\dfrac{\\pi}{4} = 2 + 3 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-034"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 4e^{2x}$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$3 e^{2}$.",
   "$e^{2}$.",
   "$5 e^{2}$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{2x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = 2 C_{1} + C_2 = 3 \\Rightarrow C_2 = -1$<br>$y(1) = (2 + (-1) + 2)e^{2} = 3 e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-035"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 8\\cos x$ với điều kiện $y(0) = 1;\\ y'(0) = 1$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$1 + 2 \\pi$.",
   "$1$.",
   "$2 \\pi$.",
   "$1 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos x + b\\sin x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + y^* = -2a\\sin x + 2b\\cos x$<br>So sánh với vế phải $8\\cos x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0) = C_1 = 1;\\quad y'(0) = C_{2} = 1 \\Rightarrow C_2 = 1$<br>$y\\left(\\dfrac{\\pi}{2}\\right) = 1 + 4\\cdot\\dfrac{\\pi}{2} = 1 + 2 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-036"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 6e^{-x}$ với điều kiện $y(0) = 2;\\ y'(0) = -3$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{4}{e}$.",
   "$e^{-1}$.",
   "$\\dfrac{7}{e}$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{-x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = - C_{1} + C_2 = -3 \\Rightarrow C_2 = -1$<br>$y(1) = (2 + (-1) + 3)e^{-1} = \\dfrac{4}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-037"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 32\\cos 2x$ với điều kiện $y(0) = 3;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$1 + 2 \\pi$.",
   "$1$.",
   "$2 \\pi$.",
   "$1 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $32\\cos 2x$: $a = 0,\\ b = 8$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0) = C_1 = 3;\\quad y'(0) = 2 C_{2} = 2 \\Rightarrow C_2 = 1$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 1 + 8\\cdot\\dfrac{\\pi}{4} = 1 + 2 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-038"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 6e^{2x}$ với điều kiện $y(0) = 0;\\ y'(0) = -1$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$2 e^{2}$.",
   "$- e^{2}$.",
   "$5 e^{2}$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{2x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = 2 C_{1} + C_2 = -1 \\Rightarrow C_2 = -1$<br>$y(1) = (0 + (-1) + 3)e^{2} = 2 e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-039"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 32\\cos 2x$ với điều kiện $y(0) = -1;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$1 + 2 \\pi$.",
   "$1$.",
   "$2 \\pi$.",
   "$1 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $32\\cos 2x$: $a = 0,\\ b = 8$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0) = C_1 = -1;\\quad y'(0) = 2 C_{2} = 2 \\Rightarrow C_2 = 1$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 1 + 8\\cdot\\dfrac{\\pi}{4} = 1 + 2 \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-040"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 6e^{x}$ với điều kiện $y(0) = 1;\\ y'(0) = 2$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$5 e$.",
   "$2 e$.",
   "$8 e$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = C_{1} + C_2 = 2 \\Rightarrow C_2 = 1$<br>$y(1) = (1 + (1) + 3)e = 5 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-041"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = 3;\\ y'(0) = 6$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$3 + \\pi$.",
   "$3$.",
   "$\\pi$.",
   "$3 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^* = x(a\\cos 2x + b\\sin 2x)\\ \\Rightarrow\\ y^{*\\prime\\prime} + 4y^* = -4a\\sin 2x + 4b\\cos 2x$<br>So sánh với vế phải $16\\cos 2x$: $a = 0,\\ b = 4$<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0) = C_1 = 3;\\quad y'(0) = 2 C_{2} = 6 \\Rightarrow C_2 = 3$<br>$y\\left(\\dfrac{\\pi}{4}\\right) = 3 + 4\\cdot\\dfrac{\\pi}{4} = 3 + \\pi$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-042"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 6e^{2x}$ với điều kiện $y(0) = 2;\\ y'(0) = 5$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$6 e^{2}$.",
   "$3 e^{2}$.",
   "$9 e^{2}$.",
   "$6$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{2x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = 2 C_{1} + C_2 = 5 \\Rightarrow C_2 = 1$<br>$y(1) = (2 + (1) + 3)e^{2} = 6 e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-043"
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
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 10\\%\\cdot(2100 - x)$<br>$30x = 21000 \\Rightarrow x = 700$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-001"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 40% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 700 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$900$.",
   "$1200$.",
   "$1050$.",
   "$840$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 30\\%\\cdot(2100 - x)$<br>$70x = 63000 \\Rightarrow x = 900$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-002"
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
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 40\\%\\cdot(1500 - x)$<br>$60x = 60000 \\Rightarrow x = 1000$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-003"
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
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 30\\%\\cdot(600 - x)$<br>$50x = 18000 \\Rightarrow x = 360$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-004"
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
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 10\\%\\cdot(2100 - x)$<br>$30x = 21000 \\Rightarrow x = 700$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-005"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1400 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 30% khách hàng của Y chuyển sang X. Hiện tại X có 700 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$600$.",
   "$800$.",
   "$700$.",
   "$630$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 30\\%\\cdot(1400 - x)$<br>$70x = 42000 \\Rightarrow x = 600$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-006"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 700 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1260$.",
   "$840$.",
   "$1050$.",
   "$980$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 30\\%\\cdot(2100 - x)$<br>$50x = 63000 \\Rightarrow x = 1260$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-007"
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
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-008"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1500 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 20% khách hàng của Y chuyển sang X. Hiện tại X có 500 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$500$.",
   "$1000$.",
   "$750$.",
   "$501$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 20\\%\\cdot(1500 - x)$<br>$60x = 30000 \\Rightarrow x = 500$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-009"
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
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 30\\%\\cdot(2100 - x)$<br>$70x = 63000 \\Rightarrow x = 900$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-010"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1400 khách, tổng số không đổi. Mỗi tháng có 10% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 933 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1120$.",
   "$280$.",
   "$700$.",
   "$1026$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 40\\%\\cdot(1400 - x)$<br>$50x = 56000 \\Rightarrow x = 1120$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-011"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 900 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 20% khách hàng của Y chuyển sang X. Hiện tại X có 600 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$300$.",
   "$600$.",
   "$450$.",
   "$420$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 20\\%\\cdot(900 - x)$<br>$60x = 18000 \\Rightarrow x = 300$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-012"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1200 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 20% người dùng của Y chuyển sang X. Hiện tại X có 600 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$400$.",
   "$800$.",
   "$600$.",
   "$480$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 20\\%\\cdot(1200 - x)$<br>$60x = 24000 \\Rightarrow x = 400$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-013"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 10% khách quen của Y chuyển sang X. Hiện tại X có 1050 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$700$.",
   "$1400$.",
   "$1050$.",
   "$945$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 10\\%\\cdot(2100 - x)$<br>$30x = 21000 \\Rightarrow x = 700$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-014"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 900 khách, tổng số không đổi. Mỗi tháng có 40% khách quen của X chuyển sang Y và 20% khách quen của Y chuyển sang X. Hiện tại X có 600 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$300$.",
   "$600$.",
   "$450$.",
   "$420$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 20\\%\\cdot(900 - x)$<br>$60x = 18000 \\Rightarrow x = 300$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-015"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1500 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 1000 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$300$.",
   "$1200$.",
   "$750$.",
   "$650$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 10\\%\\cdot(1500 - x)$<br>$50x = 15000 \\Rightarrow x = 300$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-016"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 900 khách, tổng số không đổi. Mỗi tháng có 10% khách quen của X chuyển sang Y và 20% khách quen của Y chuyển sang X. Hiện tại X có 300 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$600$.",
   "$300$.",
   "$450$.",
   "$390$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 20\\%\\cdot(900 - x)$<br>$30x = 18000 \\Rightarrow x = 600$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-017"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1500 nghìn khách, tổng số không đổi. Mỗi tháng có 30% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 500 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$375$.",
   "$1125$.",
   "$750$.",
   "$450$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 10\\%\\cdot(1500 - x)$<br>$40x = 15000 \\Rightarrow x = 375$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-018"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 1400 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1260$.",
   "$840$.",
   "$1050$.",
   "$1330$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 30\\%\\cdot(2100 - x)$<br>$50x = 63000 \\Rightarrow x = 1260$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-019"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1200 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 20% khách hàng của Y chuyển sang X. Hiện tại X có 800 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$400$.",
   "$800$.",
   "$600$.",
   "$560$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 20\\%\\cdot(1200 - x)$<br>$60x = 24000 \\Rightarrow x = 400$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-020"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 20% người dùng của X chuyển sang Y và 40% người dùng của Y chuyển sang X. Hiện tại X có 1050 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1400$.",
   "$700$.",
   "$1050$.",
   "$1260$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 40\\%\\cdot(2100 - x)$<br>$60x = 84000 \\Rightarrow x = 1400$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-021"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1200 khách, tổng số không đổi. Mỗi tháng có 30% khách quen của X chuyển sang Y và 10% khách quen của Y chuyển sang X. Hiện tại X có 400 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$300$.",
   "$900$.",
   "$600$.",
   "$360$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 10\\%\\cdot(1200 - x)$<br>$40x = 12000 \\Rightarrow x = 300$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-022"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1500 nghìn khách, tổng số không đổi. Mỗi tháng có 10% khách hàng của X chuyển sang Y và 20% khách hàng của Y chuyển sang X. Hiện tại X có 750 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1000$.",
   "$500$.",
   "$750$.",
   "$825$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 20\\%\\cdot(1500 - x)$<br>$30x = 30000 \\Rightarrow x = 1000$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-023"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 600 nghìn người dùng, tổng số không đổi. Mỗi tháng có 10% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 300 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$450$.",
   "$150$.",
   "$300$.",
   "$360$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 30\\%\\cdot(600 - x)$<br>$40x = 18000 \\Rightarrow x = 450$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-024"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1400 nghìn người dùng, tổng số không đổi. Mỗi tháng có 30% người dùng của X chuyển sang Y và 40% người dùng của Y chuyển sang X. Hiện tại X có 466 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$800$.",
   "$600$.",
   "$700$.",
   "$699$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 40\\%\\cdot(1400 - x)$<br>$70x = 56000 \\Rightarrow x = 800$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-025"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 600 nghìn người dùng, tổng số không đổi. Mỗi tháng có 20% người dùng của X chuyển sang Y và 40% người dùng của Y chuyển sang X. Hiện tại X có 300 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$400$.",
   "$200$.",
   "$300$.",
   "$360$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 40\\%\\cdot(600 - x)$<br>$60x = 24000 \\Rightarrow x = 400$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-026"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1500 nghìn người dùng, tổng số không đổi. Mỗi tháng có 10% người dùng của X chuyển sang Y và 20% người dùng của Y chuyển sang X. Hiện tại X có 750 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1000$.",
   "$500$.",
   "$750$.",
   "$825$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 20\\%\\cdot(1500 - x)$<br>$30x = 30000 \\Rightarrow x = 1000$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-027"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 40% khách quen của X chuyển sang Y và 20% khách quen của Y chuyển sang X. Hiện tại X có 700 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$700$.",
   "$1400$.",
   "$1050$.",
   "$701$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 20\\%\\cdot(2100 - x)$<br>$60x = 42000 \\Rightarrow x = 700$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-028"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 600 nghìn khách, tổng số không đổi. Mỗi tháng có 10% khách hàng của X chuyển sang Y và 40% khách hàng của Y chuyển sang X. Hiện tại X có 300 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$480$.",
   "$120$.",
   "$300$.",
   "$390$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 40\\%\\cdot(600 - x)$<br>$50x = 24000 \\Rightarrow x = 480$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-029"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1400 nghìn khách, tổng số không đổi. Mỗi tháng có 30% khách hàng của X chuyển sang Y và 40% khách hàng của Y chuyển sang X. Hiện tại X có 466 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$800$.",
   "$600$.",
   "$700$.",
   "$699$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 40\\%\\cdot(1400 - x)$<br>$70x = 56000 \\Rightarrow x = 800$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-030"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1500 nghìn người dùng, tổng số không đổi. Mỗi tháng có 10% người dùng của X chuyển sang Y và 20% người dùng của Y chuyển sang X. Hiện tại X có 1000 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1000$.",
   "$500$.",
   "$750$.",
   "$1001$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 20\\%\\cdot(1500 - x)$<br>$30x = 30000 \\Rightarrow x = 1000$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-031"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1400 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 700 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$600$.",
   "$800$.",
   "$700$.",
   "$630$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 30\\%\\cdot(1400 - x)$<br>$70x = 42000 \\Rightarrow x = 600$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-032"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 600 khách, tổng số không đổi. Mỗi tháng có 40% khách quen của X chuyển sang Y và 10% khách quen của Y chuyển sang X. Hiện tại X có 200 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$120$.",
   "$480$.",
   "$300$.",
   "$160$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 10\\%\\cdot(600 - x)$<br>$50x = 6000 \\Rightarrow x = 120$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-033"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1400 khách, tổng số không đổi. Mỗi tháng có 30% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 933 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$800$.",
   "$600$.",
   "$700$.",
   "$839$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 40\\%\\cdot(1400 - x)$<br>$70x = 56000 \\Rightarrow x = 800$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-034"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1400 khách, tổng số không đổi. Mỗi tháng có 30% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 466 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$800$.",
   "$600$.",
   "$700$.",
   "$699$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 40\\%\\cdot(1400 - x)$<br>$70x = 56000 \\Rightarrow x = 800$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-035"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1500 nghìn khách, tổng số không đổi. Mỗi tháng có 30% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 750 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$375$.",
   "$1125$.",
   "$750$.",
   "$600$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $30\\%\\cdot x = 10\\%\\cdot(1500 - x)$<br>$40x = 15000 \\Rightarrow x = 375$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-036"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1500 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 20% người dùng của Y chuyển sang X. Hiện tại X có 1000 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$500$.",
   "$1000$.",
   "$750$.",
   "$700$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 20\\%\\cdot(1500 - x)$<br>$60x = 30000 \\Rightarrow x = 500$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-037"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 900 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 450 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$600$.",
   "$300$.",
   "$450$.",
   "$540$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 40\\%\\cdot(900 - x)$<br>$60x = 36000 \\Rightarrow x = 600$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-038"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1500 nghìn người dùng, tổng số không đổi. Mỗi tháng có 20% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 1000 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$900$.",
   "$600$.",
   "$750$.",
   "$950$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $20\\%\\cdot x = 30\\%\\cdot(1500 - x)$<br>$50x = 45000 \\Rightarrow x = 900$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-039"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 10% người dùng của X chuyển sang Y và 40% người dùng của Y chuyển sang X. Hiện tại X có 1050 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1680$.",
   "$420$.",
   "$1050$.",
   "$1365$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $10\\%\\cdot x = 40\\%\\cdot(2100 - x)$<br>$50x = 84000 \\Rightarrow x = 1680$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-040"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1400 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 933 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$280$.",
   "$1120$.",
   "$700$.",
   "$606$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 10\\%\\cdot(1400 - x)$<br>$50x = 14000 \\Rightarrow x = 280$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-041"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 700 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$900$.",
   "$1200$.",
   "$1050$.",
   "$840$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 30\\%\\cdot(2100 - x)$<br>$70x = 63000 \\Rightarrow x = 900$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-042"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 1050 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$900$.",
   "$1200$.",
   "$1050$.",
   "$945$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X khi ổn định; lượng rời X bằng lượng đến X: $40\\%\\cdot x = 30\\%\\cdot(2100 - x)$<br>$70x = 63000 \\Rightarrow x = 900$",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-043"
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
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-044"
 },
 {
  "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + z + 2t = 0\\\\ -x - y + z = 0\\\\ 2x - z - 2t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
  "options": [
   "$1$.",
   "$3$.",
   "$4$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & -2 & 1 & 2 \\\\ 0 & -3 & 2 & 2 \\\\ 0 & 0 & 1 & 10\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 3$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 3 = 1$",
  "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số.",
  "topic": "he",
  "type": "mcq",
  "id": "he-045"
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
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-046"
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
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-047"
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
  "explain": "Vô số nghiệm $\\Leftrightarrow \\dfrac{b + 1}{1} = \\dfrac{16}{a} = \\dfrac{a^2 - 8}{2}$<br>Với $(a;b) = (4;3)$: $\\dfrac{4}{1} = 4;\\quad \\dfrac{16}{4} = 4;\\quad \\dfrac{8}{2} = 4$ (thỏa mãn)<br>Mỗi cặp còn lại làm ít nhất một tỉ số khác đi nên không cho vô số nghiệm",
  "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-048"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y + z = 0\\\\ 3x + my + 3z = 0\\\\ -2x + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$4$.",
   "$-12$.",
   "$40$.",
   "$-4$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 4 m - 12 = \\left(m - 6\\right) \\left(m + 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -2$ hoặc $m = 6$<br>Giá trị cần tìm: $4$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-049"
 },
 {
  "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + y + 3z + 3t = 0\\\\ -x - y + 3z - t = 0\\\\ 6z + 2t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
  "options": [
   "$2$.",
   "$3$.",
   "$4$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & 1 & 3 & 3 \\\\ 0 & 0 & 6 & 2 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 2$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 2 = 2$",
  "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số.",
  "topic": "he",
  "type": "mcq",
  "id": "he-050"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y - 2z = 0\\\\ -2x + my + z = 0\\\\ -2x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$5$.",
   "$6$.",
   "$26$.",
   "$-6$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 6 m + 5 = \\left(m - 5\\right) \\left(m - 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 1$ hoặc $m = 5$<br>Giá trị cần tìm: $5$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-051"
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
  "explain": "Từng phần với $u = x,\\ dv = e^{-x}dx$: $\\displaystyle\\int_0^{+\\infty}xe^{-x}dx = \\left[-\\dfrac{x}{1}e^{-x}\\right]_0^{+\\infty} + \\dfrac{1}{1}\\int_0^{+\\infty}e^{-x}dx$<br>$= 0 + \\dfrac{1}{1}\\cdot\\dfrac{1}{1} = 1$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-044"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 1}$ bằng",
  "options": [
   "$\\dfrac{\\pi}{2}$.",
   "$\\pi$.",
   "$\\dfrac{\\pi}{4}$.",
   "$1 + \\dfrac{\\pi}{2}$."
  ],
  "answer": 0,
  "explain": "$\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 1} = \\left[\\dfrac{1}{1}\\arctan\\dfrac{x}{1}\\right]_0^{+\\infty}$<br>$= \\dfrac{1}{1}\\cdot\\dfrac{\\pi}{2} = \\dfrac{\\pi}{2}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-045"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x(x + 1)}$ bằng",
  "options": [
   "$\\ln 2$.",
   "$\\ln\\left(\\sqrt{2}\\right)$.",
   "$1$.",
   "$\\ln 2 + 1$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{x(x + 1)} = \\dfrac{1}{1}\\left(\\dfrac1x - \\dfrac{1}{x + 1}\\right)$<br>$I = \\dfrac{1}{1}\\left[\\ln\\dfrac{x}{x + 1}\\right]_1^{+\\infty} = \\dfrac{1}{1}\\left(0 - \\ln\\dfrac{1}{2}\\right) = \\ln 2$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-046"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} e^{-3x}\\sin 4x\\,dx$ bằng",
  "options": [
   "$\\dfrac{4}{25}$.",
   "$\\dfrac{3}{25}$.",
   "$\\dfrac{1}{25}$.",
   "$\\dfrac{4}{3}$."
  ],
  "answer": 0,
  "explain": "Từng phần hai lần: $I = \\left[-\\dfrac{1}{4}e^{-3x}\\cos 4x\\right]_0^{+\\infty} - \\dfrac{3}{4}\\displaystyle\\int_0^{+\\infty}e^{-3x}\\cos 4x\\,dx = \\dfrac{1}{4} - \\dfrac{9}{16}I$<br>$I\\left(1 + \\dfrac{9}{16}\\right) = \\dfrac{1}{4} \\Rightarrow I = \\dfrac{4}{25}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-047"
 },
 {
  "q": "Một đoạn đường ống uốn theo đường cong $y = \\dfrac23x^{3/2}$ với $0 \\le x \\le 24$ (đơn vị: mét). Dùng công thức độ dài cung $L = \\displaystyle\\int_a^b\\sqrt{1 + (y')^2}\\,dx$, độ dài đoạn ống bằng",
  "options": [
   "$\\dfrac{248}{3}$ m.",
   "$\\dfrac{250}{3}$ m.",
   "$24$ m.",
   "$\\dfrac{124}{3}$ m."
  ],
  "answer": 0,
  "explain": "$y' = \\sqrt{x} \\Rightarrow 1 + (y')^2 = 1 + x$<br>$L = \\displaystyle\\int_0^{24}\\sqrt{1 + x}\\,dx = \\left[\\dfrac23(1 + x)^{3/2}\\right]_0^{24}$<br>$= \\dfrac23\\left(25^{3/2} - 1\\right) = \\dfrac{248}{3}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-048"
 },
 {
  "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = e^x$, $y = 0$, $x = 0$ và $x = 2$ bằng",
  "options": [
   "$- \\dfrac{\\pi \\left(1 - e^{4}\\right)}{2}$.",
   "$- \\dfrac{1}{2} + \\dfrac{e^{4}}{2}$.",
   "$- \\pi \\left(1 - e^{2}\\right)$.",
   "$- \\pi \\left(1 - e^{4}\\right)$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{2} y^2\\,dx = \\pi\\int_0^{2} e^{2 x}\\,dx$<br>$= \\pi\\left[\\dfrac{e^{2 x}}{2}\\right]_0^{2} = - \\dfrac{\\pi \\left(1 - e^{4}\\right)}{2}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-049"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} xe^{-2x}\\,dx$ bằng",
  "options": [
   "$\\dfrac{1}{4}$.",
   "$\\dfrac{1}{2}$.",
   "$2$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Từng phần với $u = x,\\ dv = e^{-2x}dx$: $\\displaystyle\\int_0^{+\\infty}xe^{-2x}dx = \\left[-\\dfrac{x}{2}e^{-2x}\\right]_0^{+\\infty} + \\dfrac{1}{2}\\int_0^{+\\infty}e^{-2x}dx$<br>$= 0 + \\dfrac{1}{2}\\cdot\\dfrac{1}{2} = \\dfrac{1}{4}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-050"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 4}$ bằng",
  "options": [
   "$\\dfrac{\\pi}{4}$.",
   "$\\dfrac{\\pi}{2}$.",
   "$\\dfrac{\\pi}{8}$.",
   "$\\dfrac{\\pi}{4} + 1$."
  ],
  "answer": 0,
  "explain": "$\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 4} = \\left[\\dfrac{1}{2}\\arctan\\dfrac{x}{2}\\right]_0^{+\\infty}$<br>$= \\dfrac{1}{2}\\cdot\\dfrac{\\pi}{2} = \\dfrac{\\pi}{4}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-051"
 },
 {
  "q": "Cho hai hàm số $f, g$ liên tục trên $[a;b]$ với $a < b$. Phát biểu nào sau đây là đúng?",
  "options": [
   "Nếu $f(x) \\le g(x)$ với mọi $x \\in [a;b]$ thì $\\displaystyle\\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx$.",
   "$\\displaystyle\\int_a^b f(x)g(x)\\,dx = \\int_a^b f(x)\\,dx\\cdot\\int_a^b g(x)\\,dx$.",
   "Nếu $\\displaystyle\\int_a^b f(x)\\,dx \\ge 0$ thì $f(x) \\ge 0$ với mọi $x \\in [a;b]$.",
   "$\\left|\\displaystyle\\int_a^b f(x)\\,dx\\right| \\ge \\int_a^b |f(x)|\\,dx$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> Nếu $f(x) \\le g(x)$ với mọi $x \\in [a;b]$ thì $\\displaystyle\\int_a^b f(x)\\,dx \\le \\int_a^b g(x)\\,dx$. $g - f \\ge 0$ nên $\\displaystyle\\int_a^b (g - f)\\,dx \\ge 0$.<br><b>Sai:</b> $\\displaystyle\\int_a^b f(x)g(x)\\,dx = \\int_a^b f(x)\\,dx\\cdot\\int_a^b g(x)\\,dx$. $f = g = x$ trên $[0;1]$: vế trái bằng $\\dfrac13$, vế phải bằng $\\dfrac14$.<br><b>Sai:</b> Nếu $\\displaystyle\\int_a^b f(x)\\,dx \\ge 0$ thì $f(x) \\ge 0$ với mọi $x \\in [a;b]$. $f(x) = x$ trên $[-1;2]$ có tích phân bằng $\\dfrac32$ nhưng $f(-1) < 0$.<br><b>Sai:</b> $\\left|\\displaystyle\\int_a^b f(x)\\,dx\\right| \\ge \\int_a^b |f(x)|\\,dx$. Bất đẳng thức đúng có chiều ngược lại; $f(x) = x$ trên $[-1;1]$: vế trái bằng $0$, vế phải bằng $1$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-052"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} e^{-2x}\\sin x\\,dx$ bằng",
  "options": [
   "$\\dfrac{1}{5}$.",
   "$\\dfrac{2}{5}$.",
   "$\\dfrac{1}{2}$.",
   "$\\dfrac{1}{3}$."
  ],
  "answer": 0,
  "explain": "Từng phần hai lần: $I = \\left[-\\dfrac{1}{1}e^{-2x}\\cos x\\right]_0^{+\\infty} - \\dfrac{2}{1}\\displaystyle\\int_0^{+\\infty}e^{-2x}\\cos x\\,dx = \\dfrac{1}{1} - \\dfrac{4}{1}I$<br>$I\\left(1 + \\dfrac{4}{1}\\right) = \\dfrac{1}{1} \\Rightarrow I = \\dfrac{1}{5}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-053"
 },
 {
  "q": "Một đoạn đường ống uốn theo đường cong $y = \\dfrac23x^{3/2}$ với $0 \\le x \\le 3$ (đơn vị: mét). Dùng công thức độ dài cung $L = \\displaystyle\\int_a^b\\sqrt{1 + (y')^2}\\,dx$, độ dài đoạn ống bằng",
  "options": [
   "$\\dfrac{14}{3}$ m.",
   "$\\dfrac{16}{3}$ m.",
   "$3$ m.",
   "$\\dfrac{7}{3}$ m."
  ],
  "answer": 0,
  "explain": "$y' = \\sqrt{x} \\Rightarrow 1 + (y')^2 = 1 + x$<br>$L = \\displaystyle\\int_0^{3}\\sqrt{1 + x}\\,dx = \\left[\\dfrac23(1 + x)^{3/2}\\right]_0^{3}$<br>$= \\dfrac23\\left(4^{3/2} - 1\\right) = \\dfrac{14}{3}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-054"
 },
 {
  "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = x\\sqrt{x}$, $y = 0$, $x = 0$ và $x = 1$ bằng",
  "options": [
   "$\\dfrac{\\pi}{4}$.",
   "$\\dfrac{1}{4}$.",
   "$\\dfrac{2 \\pi}{5}$.",
   "$\\dfrac{\\pi}{2}$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{1} y^2\\,dx = \\pi\\int_0^{1} x^{3}\\,dx$<br>$= \\pi\\left[\\dfrac{x^{4}}{4}\\right]_0^{1} = \\dfrac{\\pi}{4}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-055"
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
  "explain": "Từng phần với $u = x,\\ dv = e^{-4x}dx$: $\\displaystyle\\int_0^{+\\infty}xe^{-4x}dx = \\left[-\\dfrac{x}{4}e^{-4x}\\right]_0^{+\\infty} + \\dfrac{1}{4}\\int_0^{+\\infty}e^{-4x}dx$<br>$= 0 + \\dfrac{1}{4}\\cdot\\dfrac{1}{4} = \\dfrac{1}{16}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-056"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 9}$ bằng",
  "options": [
   "$\\dfrac{\\pi}{6}$.",
   "$\\dfrac{\\pi}{3}$.",
   "$\\dfrac{\\pi}{2}$.",
   "$\\dfrac{\\pi}{18}$."
  ],
  "answer": 0,
  "explain": "$\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 9} = \\left[\\dfrac{1}{3}\\arctan\\dfrac{x}{3}\\right]_0^{+\\infty}$<br>$= \\dfrac{1}{3}\\cdot\\dfrac{\\pi}{2} = \\dfrac{\\pi}{6}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-057"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x(x + 2)}$ bằng",
  "options": [
   "$\\ln\\left(\\sqrt{3}\\right)$.",
   "$\\ln 3$.",
   "$\\ln 9$.",
   "$\\dfrac{1}{2}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{x(x + 2)} = \\dfrac{1}{2}\\left(\\dfrac1x - \\dfrac{1}{x + 2}\\right)$<br>$I = \\dfrac{1}{2}\\left[\\ln\\dfrac{x}{x + 2}\\right]_1^{+\\infty} = \\dfrac{1}{2}\\left(0 - \\ln\\dfrac{1}{3}\\right) = \\dfrac{\\ln 3}{2}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-058"
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
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-059"
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
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-060"
 },
 {
  "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = x^2$, $y = 0$, $x = 0$ và $x = 3$ bằng",
  "options": [
   "$\\dfrac{243 \\pi}{5}$.",
   "$\\dfrac{243}{5}$.",
   "$9 \\pi$.",
   "$\\dfrac{486 \\pi}{5}$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{3} y^2\\,dx = \\pi\\int_0^{3} x^{4}\\,dx$<br>$= \\pi\\left[\\dfrac{x^{5}}{5}\\right]_0^{3} = \\dfrac{243 \\pi}{5}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-061"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} xe^{-3x}\\,dx$ bằng",
  "options": [
   "$\\dfrac{1}{9}$.",
   "$\\dfrac{1}{3}$.",
   "$3$.",
   "$\\dfrac{2}{9}$."
  ],
  "answer": 0,
  "explain": "Từng phần với $u = x,\\ dv = e^{-3x}dx$: $\\displaystyle\\int_0^{+\\infty}xe^{-3x}dx = \\left[-\\dfrac{x}{3}e^{-3x}\\right]_0^{+\\infty} + \\dfrac{1}{3}\\int_0^{+\\infty}e^{-3x}dx$<br>$= 0 + \\dfrac{1}{3}\\cdot\\dfrac{1}{3} = \\dfrac{1}{9}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-062"
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
  "explain": "$\\displaystyle\\int_0^{+\\infty}\\dfrac{dx}{x^2 + 16} = \\left[\\dfrac{1}{4}\\arctan\\dfrac{x}{4}\\right]_0^{+\\infty}$<br>$= \\dfrac{1}{4}\\cdot\\dfrac{\\pi}{2} = \\dfrac{\\pi}{8}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-063"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_1^{+\\infty}\\dfrac{dx}{x(x + 3)}$ bằng",
  "options": [
   "$\\dfrac{2 \\ln 2}{3}$.",
   "$\\ln 4$.",
   "$\\ln 16$.",
   "$\\dfrac{1}{3}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{1}{x(x + 3)} = \\dfrac{1}{3}\\left(\\dfrac1x - \\dfrac{1}{x + 3}\\right)$<br>$I = \\dfrac{1}{3}\\left[\\ln\\dfrac{x}{x + 3}\\right]_1^{+\\infty} = \\dfrac{1}{3}\\left(0 - \\ln\\dfrac{1}{4}\\right) = \\dfrac{2 \\ln 2}{3}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-064"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} e^{-4x}\\sin 3x\\,dx$ bằng",
  "options": [
   "$\\dfrac{3}{25}$.",
   "$\\dfrac{4}{25}$.",
   "$\\dfrac{1}{25}$.",
   "$\\dfrac{3}{4}$."
  ],
  "answer": 0,
  "explain": "Từng phần hai lần: $I = \\left[-\\dfrac{1}{3}e^{-4x}\\cos 3x\\right]_0^{+\\infty} - \\dfrac{4}{3}\\displaystyle\\int_0^{+\\infty}e^{-4x}\\cos 3x\\,dx = \\dfrac{1}{3} - \\dfrac{16}{9}I$<br>$I\\left(1 + \\dfrac{16}{9}\\right) = \\dfrac{1}{3} \\Rightarrow I = \\dfrac{3}{25}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-065"
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
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-066"
 },
 {
  "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = x^2$, $y = 0$, $x = 0$ và $x = 1$ bằng",
  "options": [
   "$\\dfrac{\\pi}{5}$.",
   "$\\dfrac{1}{5}$.",
   "$\\dfrac{\\pi}{3}$.",
   "$\\dfrac{2 \\pi}{5}$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{1} y^2\\,dx = \\pi\\int_0^{1} x^{4}\\,dx$<br>$= \\pi\\left[\\dfrac{x^{5}}{5}\\right]_0^{1} = \\dfrac{\\pi}{5}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-067"
 },
 {
  "q": "Một bể chứa hình trụ đứng có bán kính đáy 2 mét, chiều cao 3 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước trong bể lên một bồn chứa đặt cao hơn miệng bể 3 mét (làm tròn đến hàng phần chục) bằng",
  "options": [
   "1662,5 <i>kJ</i>.",
   "554,2 <i>kJ</i>.",
   "2216,7 <i>kJ</i>.",
   "1231,5 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Lớp nước dày $dh$ ở độ sâu $h$ có khối lượng $1000\\cdot\\pi\\cdot4\\,dh$, phải nâng lên $h + 3$ mét<br>$W = \\displaystyle\\int_0^{3} 9800\\pi\\cdot4\\,(h + 3)\\,dh = 39200\\pi\\left[\\dfrac{h^2}{2} + 3h\\right]_0^{3}$<br>$= 39200\\pi\\cdot\\dfrac{27}{2} \\approx 1662531\\ J = 1662{,}5\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-068"
 },
 {
  "q": "Một bể chứa có dạng hình nón tròn xoay với đỉnh ở phía dưới, bán kính miệng bể 3 mét, chiều cao 3 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước ra khỏi bể qua miệng bể (làm tròn đến hàng phần chục) bằng",
  "options": [
   "207,8 <i>kJ</i>.",
   "623,4 <i>kJ</i>.",
   "415,6 <i>kJ</i>.",
   "831,3 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Lớp nước ở độ cao $y$ (tính từ đỉnh) có bán kính $\\dfrac{3y}{3}$, phải nâng lên $3 - y$ mét<br>$W = \\displaystyle\\int_0^{3} 9800\\pi\\left(\\dfrac{3y}{3}\\right)^2(3 - y)\\,dy = 9800\\pi\\cdot\\dfrac{9}{9}\\left[\\dfrac{3y^3}{3} - \\dfrac{y^4}{4}\\right]_0^{3}$<br>$= 9800\\pi\\cdot\\dfrac{9\\cdot9}{12} \\approx 207{,}8\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-069"
 },
 {
  "q": "Một lò xo tuân theo định luật Hooke $F = kx$ bị giãn 5 cm khi chịu lực kéo 10 N. Công cần thiết để kéo lò xo từ độ giãn 0 cm đến độ giãn 20 cm bằng",
  "options": [
   "4 <i>J</i>.",
   "8 <i>J</i>.",
   "2 <i>J</i>.",
   "400 <i>J</i>."
  ],
  "answer": 0,
  "explain": "$F = kx \\Rightarrow k = \\dfrac{10}{0{,}05} = 200\\ N/m$<br>$W = \\displaystyle\\int_{0{,}00}^{0{,}20} 200x\\,dx = 100\\left(0{,}20^2 - 0{,}00^2\\right) = 4\\ J$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-070"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} e^{-2x}\\sin 2x\\,dx$ bằng",
  "options": [
   "$\\dfrac{1}{4}$.",
   "$\\dfrac{1}{8}$.",
   "$1$.",
   "$\\dfrac{5}{4}$."
  ],
  "answer": 0,
  "explain": "Từng phần hai lần: $I = \\left[-\\dfrac{1}{2}e^{-2x}\\cos 2x\\right]_0^{+\\infty} - \\dfrac{2}{2}\\displaystyle\\int_0^{+\\infty}e^{-2x}\\cos 2x\\,dx = \\dfrac{1}{2} - \\dfrac{4}{4}I$<br>$I\\left(1 + \\dfrac{4}{4}\\right) = \\dfrac{1}{2} \\Rightarrow I = \\dfrac{1}{4}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-071"
 },
 {
  "q": "Một bể chứa nước hình hộp chữ nhật có chiều dài, chiều rộng và chiều cao lần lượt là 3 mét, 3 mét và 2 mét được chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước ra khỏi bể qua mặt trên của bể bằng",
  "options": [
   "176,4 <i>kJ</i>.",
   "44,1 <i>kJ</i>.",
   "88,2 <i>kJ</i>.",
   "352,8 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Lớp nước dày $dy$ ở độ sâu $y$ có khối lượng $1000\\cdot3\\cdot3\\,dy$, phải nâng lên $y$ mét<br>$W = \\displaystyle\\int_0^{2} 9800\\cdot3\\cdot3\\cdot y\\,dy = 88200\\cdot\\dfrac{2^2}{2}$<br>$= 176400\\ J = 176{,}4\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-072"
 },
 {
  "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = x\\sqrt{x}$, $y = 0$, $x = 0$ và $x = 2$ bằng",
  "options": [
   "$4 \\pi$.",
   "$4$.",
   "$\\dfrac{8 \\sqrt{2} \\pi}{5}$.",
   "$8 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{2} y^2\\,dx = \\pi\\int_0^{2} x^{3}\\,dx$<br>$= \\pi\\left[\\dfrac{x^{4}}{4}\\right]_0^{2} = 4 \\pi$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-073"
 },
 {
  "q": "Một bể chứa có dạng hình nón tròn xoay với đỉnh ở phía dưới, bán kính miệng bể 1 mét, chiều cao 6 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước ra khỏi bể qua miệng bể (làm tròn đến hàng phần chục) bằng",
  "options": [
   "92,4 <i>kJ</i>.",
   "277,1 <i>kJ</i>.",
   "184,7 <i>kJ</i>.",
   "369,5 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Lớp nước ở độ cao $y$ (tính từ đỉnh) có bán kính $\\dfrac{1y}{6}$, phải nâng lên $6 - y$ mét<br>$W = \\displaystyle\\int_0^{6} 9800\\pi\\left(\\dfrac{1y}{6}\\right)^2(6 - y)\\,dy = 9800\\pi\\cdot\\dfrac{1}{36}\\left[\\dfrac{6y^3}{3} - \\dfrac{y^4}{4}\\right]_0^{6}$<br>$= 9800\\pi\\cdot\\dfrac{1\\cdot36}{12} \\approx 92{,}4\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-074"
 },
 {
  "q": "Một lò xo tuân theo định luật Hooke $F = kx$ bị giãn 5 cm khi chịu lực kéo 20 N. Công cần thiết để kéo lò xo từ độ giãn 20 cm đến độ giãn 40 cm bằng",
  "options": [
   "24 <i>J</i>.",
   "8 <i>J</i>.",
   "64 <i>J</i>.",
   "4 <i>J</i>."
  ],
  "answer": 0,
  "explain": "$F = kx \\Rightarrow k = \\dfrac{20}{0{,}05} = 400\\ N/m$<br>$W = \\displaystyle\\int_{0{,}20}^{0{,}40} 400x\\,dx = 200\\left(0{,}40^2 - 0{,}20^2\\right) = 24\\ J$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-075"
 },
 {
  "q": "Một sợi cáp dài 20 mét, nặng 3 kg mỗi mét, được treo thẳng đứng từ nóc một tòa nhà cao, đầu dưới có gắn một vật nặng 50 kg. Lấy $g = 9{,}8\\,m/s^2$. Công cần thiết để kéo toàn bộ sợi cáp cùng vật nặng lên nóc tòa nhà (làm tròn đến hàng phần chục) bằng",
  "options": [
   "15,7 <i>kJ</i>.",
   "21,6 <i>kJ</i>.",
   "5,9 <i>kJ</i>.",
   "7,8 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Đoạn cáp dài $dx$ ở độ sâu $x$ nặng $3\\,dx$ kg, phải nâng lên $x$ mét<br>$W = \\displaystyle\\int_0^{20} 3\\cdot9{,}8\\cdot x\\,dx + 50\\cdot9{,}8\\cdot20 = 29{,}4\\cdot\\dfrac{20^2}{2} + 9800$<br>$= 15680\\ J = 15{,}7\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-076"
 },
 {
  "q": "Giá trị của tích phân suy rộng $\\displaystyle\\int_0^{+\\infty} e^{-x}\\sin x\\,dx$ bằng",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$1$.",
   "$\\dfrac{3}{2}$.",
   "$- \\dfrac{1}{2}$."
  ],
  "answer": 0,
  "explain": "Từng phần hai lần: $I = \\left[-\\dfrac{1}{1}e^{-x}\\cos x\\right]_0^{+\\infty} - \\dfrac{1}{1}\\displaystyle\\int_0^{+\\infty}e^{-x}\\cos x\\,dx = \\dfrac{1}{1} - \\dfrac{1}{1}I$<br>$I\\left(1 + \\dfrac{1}{1}\\right) = \\dfrac{1}{1} \\Rightarrow I = \\dfrac{1}{2}$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-077"
 },
 {
  "q": "Một bể chứa hình trụ đứng có bán kính đáy 1 mét, chiều cao 2 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước trong bể lên một bồn chứa đặt cao hơn miệng bể 2 mét (làm tròn đến hàng phần chục) bằng",
  "options": [
   "184,7 <i>kJ</i>.",
   "61,6 <i>kJ</i>.",
   "246,3 <i>kJ</i>.",
   "153,9 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Lớp nước dày $dh$ ở độ sâu $h$ có khối lượng $1000\\cdot\\pi\\cdot1\\,dh$, phải nâng lên $h + 2$ mét<br>$W = \\displaystyle\\int_0^{2} 9800\\pi\\cdot1\\,(h + 2)\\,dh = 9800\\pi\\left[\\dfrac{h^2}{2} + 2h\\right]_0^{2}$<br>$= 9800\\pi\\cdot6 \\approx 184726\\ J = 184{,}7\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-078"
 },
 {
  "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = \\sqrt{x}$, $y = 0$, $x = 0$ và $x = 2$ bằng",
  "options": [
   "$2 \\pi$.",
   "$2$.",
   "$\\dfrac{4 \\sqrt{2} \\pi}{3}$.",
   "$4 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{2} y^2\\,dx = \\pi\\int_0^{2} x\\,dx$<br>$= \\pi\\left[\\dfrac{x^{2}}{2}\\right]_0^{2} = 2 \\pi$",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-079"
 },
 {
  "q": "Một lò xo tuân theo định luật Hooke $F = kx$ bị giãn 5 cm khi chịu lực kéo 10 N. Công cần thiết để kéo lò xo từ độ giãn 5 cm đến độ giãn 25 cm bằng",
  "options": [
   "6 <i>J</i>.",
   "4 <i>J</i>.",
   "12,5 <i>J</i>.",
   "2 <i>J</i>."
  ],
  "answer": 0,
  "explain": "$F = kx \\Rightarrow k = \\dfrac{10}{0{,}05} = 200\\ N/m$<br>$W = \\displaystyle\\int_{0{,}05}^{0{,}25} 200x\\,dx = 100\\left(0{,}25^2 - 0{,}05^2\\right) = 6\\ J$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-080"
 },
 {
  "q": "Một sợi cáp dài 20 mét, nặng 2 kg mỗi mét, được treo thẳng đứng từ nóc một tòa nhà cao, đầu dưới có gắn một vật nặng 10 kg. Lấy $g = 9{,}8\\,m/s^2$. Công cần thiết để kéo toàn bộ sợi cáp cùng vật nặng lên nóc tòa nhà (làm tròn đến hàng phần chục) bằng",
  "options": [
   "5,9 <i>kJ</i>.",
   "9,8 <i>kJ</i>.",
   "3,9 <i>kJ</i>.",
   "2,9 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Đoạn cáp dài $dx$ ở độ sâu $x$ nặng $2\\,dx$ kg, phải nâng lên $x$ mét<br>$W = \\displaystyle\\int_0^{20} 2\\cdot9{,}8\\cdot x\\,dx + 10\\cdot9{,}8\\cdot20 = 19{,}6\\cdot\\dfrac{20^2}{2} + 1960$<br>$= 5880\\ J = 5{,}9\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-081"
 },
 {
  "q": "Một bể chứa nước hình hộp chữ nhật có chiều dài, chiều rộng và chiều cao lần lượt là 2 mét, 2 mét và 3 mét được chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước ra khỏi bể qua mặt trên của bể bằng",
  "options": [
   "176,4 <i>kJ</i>.",
   "44,1 <i>kJ</i>.",
   "88,2 <i>kJ</i>.",
   "352,8 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Lớp nước dày $dy$ ở độ sâu $y$ có khối lượng $1000\\cdot2\\cdot2\\,dy$, phải nâng lên $y$ mét<br>$W = \\displaystyle\\int_0^{3} 9800\\cdot2\\cdot2\\cdot y\\,dy = 39200\\cdot\\dfrac{3^2}{2}$<br>$= 176400\\ J = 176{,}4\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-082"
 },
 {
  "q": "Một bể chứa hình trụ đứng có bán kính đáy 1 mét, chiều cao 4 mét, chứa đầy nước. Biết khối lượng riêng của nước là $1000\\,kg/m^3$ và gia tốc trọng trường $g = 9{,}8\\,m/s^2$. Công cần thiết để bơm hết nước trong bể lên một bồn chứa đặt cao hơn miệng bể 2 mét (làm tròn đến hàng phần chục) bằng",
  "options": [
   "492,6 <i>kJ</i>.",
   "246,3 <i>kJ</i>.",
   "738,9 <i>kJ</i>.",
   "400,2 <i>kJ</i>."
  ],
  "answer": 0,
  "explain": "Lớp nước dày $dh$ ở độ sâu $h$ có khối lượng $1000\\cdot\\pi\\cdot1\\,dh$, phải nâng lên $h + 2$ mét<br>$W = \\displaystyle\\int_0^{4} 9800\\pi\\cdot1\\,(h + 2)\\,dh = 9800\\pi\\left[\\dfrac{h^2}{2} + 2h\\right]_0^{4}$<br>$= 9800\\pi\\cdot16 \\approx 492602\\ J = 492{,}6\\ kJ$",
  "note": "Công = $\\displaystyle\\int$ (trọng lượng một lớp nước) $\\times$ (quãng đường nâng lớp đó); các lớp ở độ sâu khác nhau đi quãng đường khác nhau.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-083"
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
  "explain": "<b>Đúng:</b> Tích phân đường loại một $\\displaystyle\\int_L f\\,ds$ không phụ thuộc chiều đi trên $L$, còn tích phân đường loại hai đổi dấu khi đổi chiều. $ds > 0$ theo cả hai chiều, còn $dx, dy$ đổi dấu khi đổi chiều.<br><b>Sai:</b> Cả hai loại tích phân đường đều đổi dấu khi đổi chiều đi trên $L$. Tích phân loại một không đổi vì $ds$ là độ dài, luôn dương.<br><b>Sai:</b> Cả hai loại tích phân đường đều không phụ thuộc chiều đi trên $L$. Tích phân loại hai đổi dấu vì $dx, dy$ đổi dấu.<br><b>Sai:</b> Nếu $L$ là đường cong kín thì $\\displaystyle\\int_L 1\\,ds = 0$. $\\displaystyle\\int_L 1\\,ds$ bằng độ dài của $L$, luôn dương.",
  "topic": "td",
  "type": "mcq",
  "id": "td-001"
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
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-002"
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
  "explain": "Trên $L$, $\\rho = 4 + 3$ là hằng số nên khối lượng bằng $(4 + 3)\\cdot2\\pi\\cdot2$<br>Kết quả: $28 \\pi$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-003"
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
  "explain": "$ds = \\sqrt{1 + x^2}\\,dx$; $\\displaystyle\\int_0^{2\\sqrt6} x\\sqrt{1 + x^2}\\,dx = \\dfrac{(1 + x^2)^{3/2}}{3}\\Big|_0^{2\\sqrt6}$<br>Kết quả: $\\dfrac{124}{3}$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-004"
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
  "explain": "$ds = 8\\,dt$: $\\displaystyle\\int_0^{\\pi/2} 8^3\\sin t\\cos t\\,dt = \\dfrac{8^3}{2}$<br>Kết quả: $256$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-005"
 },
 {
  "q": "Trong mặt phẳng $Oxy$, cho $L$ là đoạn thẳng nối từ $A(0;1)$ đến $B(6;9)$. Giá trị của tích phân $\\displaystyle\\int_L (3 x + y)\\,ds$ bằng",
  "options": [
   "$140$.",
   "$14$.",
   "$280$.",
   "$270$."
  ],
  "answer": 0,
  "explain": "Tham số hóa $x = 0 + 6t,\\ y = 1 + 8t$, $0 \\le t \\le 1$, $ds = 10\\,dt$; hàm dưới dấu tích phân bậc nhất nên tích phân bằng độ dài đoạn thẳng nhân giá trị tại trung điểm<br>Kết quả: $140$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-006"
 },
 {
  "q": "Cho $L$ là một vòng của đường xoắn ốc $x = 3\\cos t,\\ y = 3\\sin t,\\ z = 4t$ với $0 \\le t \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\int_L z\\,ds$ bằng",
  "options": [
   "$40 \\pi^{2}$.",
   "$8 \\pi^{2}$.",
   "$20 \\pi^{2}$.",
   "$80 \\pi^{2}$."
  ],
  "answer": 0,
  "explain": "$ds = \\sqrt{3^2 + 4^2}\\,dt = 5\\,dt$; $\\displaystyle\\int_0^{2\\pi} 4t\\cdot5\\,dt$<br>Kết quả: $40 \\pi^{2}$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-007"
 },
 {
  "q": "Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = 1$ với mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = x^2 + y^2 + 1$. Khối lượng của sợi dây, tức $\\displaystyle\\oint_L \\rho\\,ds$, bằng",
  "options": [
   "$4 \\pi$.",
   "$2 \\pi$.",
   "$1 + 4 \\pi$.",
   "$4 \\pi - 1$."
  ],
  "answer": 0,
  "explain": "Trên $L$, $\\rho = 1 + 1$ là hằng số nên khối lượng bằng $(1 + 1)\\cdot2\\pi\\cdot1$<br>Kết quả: $4 \\pi$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-008"
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
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-009"
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
  "explain": "<b>Đúng:</b> $S = \\dfrac12\\displaystyle\\oint_C x\\,dy - y\\,dx$. Theo công thức Green: $\\displaystyle\\oint_C x\\,dy - y\\,dx = \\iint_D(1 + 1)\\,dxdy = 2S$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C x\\,dx + y\\,dy$. $x\\,dx + y\\,dy = d\\left(\\dfrac{x^2 + y^2}{2}\\right)$ nên tích phân theo đường kín bằng $0$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C y\\,dx$. Theo công thức Green: $\\displaystyle\\oint_C y\\,dx = \\iint_D(0 - 1)\\,dxdy = -S$.<br><b>Sai:</b> $S = \\displaystyle\\oint_C x\\,dy - y\\,dx$. Tích phân này bằng $2S$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-010"
 },
 {
  "q": "Trong mặt phẳng $Oxy$, cho $L$ là đoạn thẳng nối từ $A(0;0)$ đến $B(4;3)$. Giá trị của tích phân $\\displaystyle\\int_L (3 x + y)\\,ds$ bằng",
  "options": [
   "$\\dfrac{75}{2}$.",
   "$\\dfrac{15}{2}$.",
   "$75$.",
   "$\\dfrac{75}{4}$."
  ],
  "answer": 0,
  "explain": "Tham số hóa $x = 0 + 4t,\\ y = 0 + 3t$, $0 \\le t \\le 1$, $ds = 5\\,dt$; hàm dưới dấu tích phân bậc nhất nên tích phân bằng độ dài đoạn thẳng nhân giá trị tại trung điểm<br>Kết quả: $\\dfrac{75}{2}$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-011"
 },
 {
  "q": "Cho $L$ là một vòng của đường xoắn ốc $x = 5\\cos t,\\ y = 5\\sin t,\\ z = 12t$ với $0 \\le t \\le 2\\pi$. Giá trị của tích phân $\\displaystyle\\int_L z\\,ds$ bằng",
  "options": [
   "$312 \\pi^{2}$.",
   "$24 \\pi^{2}$.",
   "$156 \\pi^{2}$.",
   "$624 \\pi^{2}$."
  ],
  "answer": 0,
  "explain": "$ds = \\sqrt{5^2 + 12^2}\\,dt = 13\\,dt$; $\\displaystyle\\int_0^{2\\pi} 12t\\cdot13\\,dt$<br>Kết quả: $312 \\pi^{2}$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-012"
 },
 {
  "q": "Một sợi dây mảnh có dạng đường tròn $L: x^2 + y^2 = 1$ với mật độ khối lượng tại mỗi điểm là $\\rho(x,y) = x^2 + y^2 + 3$. Khối lượng của sợi dây, tức $\\displaystyle\\oint_L \\rho\\,ds$, bằng",
  "options": [
   "$8 \\pi$.",
   "$4 \\pi$.",
   "$6 \\pi$.",
   "$1 + 8 \\pi$."
  ],
  "answer": 0,
  "explain": "Trên $L$, $\\rho = 1 + 3$ là hằng số nên khối lượng bằng $(1 + 3)\\cdot2\\pi\\cdot1$<br>Kết quả: $8 \\pi$",
  "note": "Tích phân đường loại một: $ds = \\sqrt{x'^2 + y'^2}\\,dt$, không phụ thuộc chiều đi trên đường cong.",
  "topic": "td",
  "type": "mcq",
  "id": "td-013"
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
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-014"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 1,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$8$.",
   "$-8$.",
   "$2$.",
   "$16$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{2}\\left(4 y\\right)dy$<br>$I = 8$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-015"
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
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-016"
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
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-017"
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
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-018"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 3 y^{2} + 3)\\,dx + (x^{2} + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$2$.",
   "$-2$.",
   "$1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 6 y,\\quad Q'_x = 2 x + 6 y$<br>Đồng nhất hệ số: $m = 2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-019"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 3,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- y^{2})\\,dx + x y\\,dy$ bằng",
  "options": [
   "$18$.",
   "$-18$.",
   "$6$.",
   "$36$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 3 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{2}\\left(3 y\\right)dy$<br>$I = 18$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-020"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (4 x y - y^{2} + 3)\\,dx + (mx^2 - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$2$.",
   "$-2$.",
   "$4$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 4 x - 2 y,\\quad Q'_x = 2mx - 2 y$<br>Đồng nhất hệ số: $m = 2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-021"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(1;0),\\ B(0;2)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$\\dfrac{1}{3}$.",
   "$- \\dfrac{1}{3}$.",
   "$1$.",
   "$\\dfrac{2}{3}$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{2 - 2 x}\\left(x\\right)dy$<br>$I = \\dfrac{1}{3}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-022"
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
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-023"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 3 y^{2} + 1)\\,dx + (2 x^{2} + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$4$.",
   "$-4$.",
   "$2$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 6 y,\\quad Q'_x = 4 x + 6 y$<br>Đồng nhất hệ số: $m = 4$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-024"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 3,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C y^{2}\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$6$.",
   "$-6$.",
   "$12$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 2 x - 2 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{2}\\left(2 x - 2 y\\right)dy$<br>$I = 6$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-025"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (4 x y + 2 y^{2} + 1)\\,dx + (mx^2 + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$2$.",
   "$-2$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 4 x + 4 y,\\quad Q'_x = 2mx + 4 y$<br>Đồng nhất hệ số: $m = 2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-026"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(1;0),\\ B(0;2)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{8}{3}$.",
   "$- \\dfrac{8}{3}$.",
   "$1$.",
   "$\\dfrac{16}{3}$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{2 - 2 x}\\left(4 y\\right)dy$<br>$I = \\dfrac{8}{3}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-027"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y)\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{28}{5}$.",
   "$\\dfrac{44}{15}$.",
   "$- \\dfrac{28}{5}$.",
   "$\\dfrac{56}{5}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 2 y + 1$<br>$I = \\displaystyle\\int_0^{2}dx\\int_{x^2}^{2 x}(2 y + 1)\\,dy = \\int_0^{2}\\left(- x^{4} + 3 x^{2} + 2 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{5} + x^{3} + x^{2}\\right]_0^{2} = \\dfrac{28}{5}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-028"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 3 - y^{2})\\,dx + (x^{2} - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$2$.",
   "$-2$.",
   "$1$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx - 2 y,\\quad Q'_x = 2 x - 2 y$<br>Đồng nhất hệ số: $m = 2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-029"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 3,\\ 0 \\le y \\le 1$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$\\dfrac{9}{2}$.",
   "$- \\dfrac{9}{2}$.",
   "$3$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{1}\\left(x\\right)dy$<br>$I = \\dfrac{9}{2}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-030"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 4 x y + 2 y^{2} + 1)\\,dx + (mx^2 + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-2$.",
   "$2$.",
   "$-4$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = - 4 x + 4 y,\\quad Q'_x = 2mx + 4 y$<br>Đồng nhất hệ số: $m = -2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-031"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(1;0),\\ B(0;2)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- y^{2})\\,dx + x y\\,dy$ bằng",
  "options": [
   "$2$.",
   "$-2$.",
   "$1$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 3 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{2 - 2 x}\\left(3 y\\right)dy$<br>$I = 2$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-032"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 2 y)\\,dx + 3 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{136}{15}$.",
   "$\\dfrac{56}{15}$.",
   "$- \\dfrac{136}{15}$.",
   "$\\dfrac{272}{15}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 3 y + 2$<br>$I = \\displaystyle\\int_0^{2}dx\\int_{x^2}^{2 x}(3 y + 2)\\,dy = \\int_0^{2}\\left(- \\dfrac{3 x^{4}}{2} + 4 x^{2} + 4 x\\right)dx$<br>$= \\left[- \\dfrac{3 x^{5}}{10} + \\dfrac{4 x^{3}}{3} + 2 x^{2}\\right]_0^{2} = \\dfrac{136}{15}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-033"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 2 y^{2} + 1)\\,dx + (x^{2} + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$2$.",
   "$-2$.",
   "$1$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 4 y,\\quad Q'_x = 2 x + 4 y$<br>Đồng nhất hệ số: $m = 2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-034"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 3,\\ 0 \\le y \\le 1$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$6$.",
   "$-6$.",
   "$3$.",
   "$12$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{1}\\left(4 y\\right)dy$<br>$I = 6$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-035"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (4 x y + 2 y^{2} + 2)\\,dx + (mx^2 + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$2$.",
   "$-2$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 4 x + 4 y,\\quad Q'_x = 2mx + 4 y$<br>Đồng nhất hệ số: $m = 2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-036"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(3;0),\\ B(0;2)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- x y)\\,dx + x y\\,dy$ bằng",
  "options": [
   "$5$.",
   "$-5$.",
   "$3$.",
   "$10$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x + y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{2 - \\dfrac{2 x}{3}}\\left(x + y\\right)dy$<br>$I = 5$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-037"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 3 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 3 y)\\,dx + 3 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{621}{10}$.",
   "$\\dfrac{351}{10}$.",
   "$- \\dfrac{621}{10}$.",
   "$\\dfrac{621}{5}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 3 y + 3$<br>$I = \\displaystyle\\int_0^{3}dx\\int_{x^2}^{3 x}(3 y + 3)\\,dy = \\int_0^{3}\\left(- \\dfrac{3 x^{4}}{2} + \\dfrac{21 x^{2}}{2} + 9 x\\right)dx$<br>$= \\left[- \\dfrac{3 x^{5}}{10} + \\dfrac{7 x^{3}}{2} + \\dfrac{9 x^{2}}{2}\\right]_0^{3} = \\dfrac{621}{10}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-038"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + y^{2} + 1)\\,dx + (- 2 x^{2} + 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-4$.",
   "$4$.",
   "$-2$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 2 y,\\quad Q'_x = - 4 x + 2 y$<br>Đồng nhất hệ số: $m = -4$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-039"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 1,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- y^{2})\\,dx + x y\\,dy$ bằng",
  "options": [
   "$6$.",
   "$-6$.",
   "$2$.",
   "$12$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 3 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{2}\\left(3 y\\right)dy$<br>$I = 6$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-040"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (2 x y - y^{2} + 3)\\,dx + (mx^2 - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$1$.",
   "$-1$.",
   "$2$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 2 x - 2 y,\\quad Q'_x = 2mx - 2 y$<br>Đồng nhất hệ số: $m = 1$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-041"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(2;0),\\ B(0;1)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C y^{2}\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$\\dfrac{2}{3}$.",
   "$- \\dfrac{2}{3}$.",
   "$1$.",
   "$\\dfrac{4}{3}$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 2 x - 2 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{1 - \\dfrac{x}{2}}\\left(2 x - 2 y\\right)dy$<br>$I = \\dfrac{2}{3}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-042"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 3 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y)\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{369}{10}$.",
   "$\\dfrac{279}{10}$.",
   "$- \\dfrac{369}{10}$.",
   "$\\dfrac{369}{5}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 2 y + 1$<br>$I = \\displaystyle\\int_0^{3}dx\\int_{x^2}^{3 x}(2 y + 1)\\,dy = \\int_0^{3}\\left(- x^{4} + 8 x^{2} + 3 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{5} + \\dfrac{8 x^{3}}{3} + \\dfrac{3 x^{2}}{2}\\right]_0^{3} = \\dfrac{369}{10}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-043"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + y^{2} + 1)\\,dx + (- x^{2} + 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-2$.",
   "$2$.",
   "$-1$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 2 y,\\quad Q'_x = - 2 x + 2 y$<br>Đồng nhất hệ số: $m = -2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-044"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 1,\\ 0 \\le y \\le 3$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- x y)\\,dx + x y\\,dy$ bằng",
  "options": [
   "$6$.",
   "$-6$.",
   "$3$.",
   "$12$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x + y$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{3}\\left(x + y\\right)dy$<br>$I = 6$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-045"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 2 x y + 2 y^{2} + 1)\\,dx + (mx^2 + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-1$.",
   "$1$.",
   "$-2$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = - 2 x + 4 y,\\quad Q'_x = 2mx + 4 y$<br>Đồng nhất hệ số: $m = -1$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-046"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(1;0),\\ B(0;1)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- y^{2})\\,dx + x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$- \\dfrac{1}{2}$.",
   "$1$.",
   "$\\dfrac{1}{4}$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 3 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{1 - x}\\left(3 y\\right)dy$<br>$I = \\dfrac{1}{2}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-047"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 3 y)\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{124}{15}$.",
   "$\\dfrac{4}{15}$.",
   "$- \\dfrac{124}{15}$.",
   "$\\dfrac{248}{15}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 2 y + 3$<br>$I = \\displaystyle\\int_0^{2}dx\\int_{x^2}^{2 x}(2 y + 3)\\,dy = \\int_0^{2}\\left(- x^{4} + x^{2} + 6 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{5} + \\dfrac{x^{3}}{3} + 3 x^{2}\\right]_0^{2} = \\dfrac{124}{15}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-048"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + y^{2} + 3)\\,dx + (2 x^{2} + 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$4$.",
   "$-4$.",
   "$2$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 2 y,\\quad Q'_x = 4 x + 2 y$<br>Đồng nhất hệ số: $m = 4$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-049"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 1,\\ 0 \\le y \\le 1$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$- \\dfrac{1}{2}$.",
   "$1$.",
   "$\\dfrac{1}{4}$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{1}\\left(x\\right)dy$<br>$I = \\dfrac{1}{2}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-050"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 4 x y + 3 y^{2} + 1)\\,dx + (mx^2 + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-2$.",
   "$2$.",
   "$-4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = - 4 x + 6 y,\\quad Q'_x = 2mx + 6 y$<br>Đồng nhất hệ số: $m = -2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-051"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(2;0),\\ B(0;1)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{4}{3}$.",
   "$- \\dfrac{4}{3}$.",
   "$1$.",
   "$\\dfrac{8}{3}$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{1 - \\dfrac{x}{2}}\\left(4 y\\right)dy$<br>$I = \\dfrac{4}{3}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-052"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 3 y)\\,dx + 3 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{52}{5}$.",
   "$\\dfrac{12}{5}$.",
   "$- \\dfrac{52}{5}$.",
   "$\\dfrac{104}{5}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 3 y + 3$<br>$I = \\displaystyle\\int_0^{2}dx\\int_{x^2}^{2 x}(3 y + 3)\\,dy = \\int_0^{2}\\left(- \\dfrac{3 x^{4}}{2} + 3 x^{2} + 6 x\\right)dx$<br>$= \\left[- \\dfrac{3 x^{5}}{10} + x^{3} + 3 x^{2}\\right]_0^{2} = \\dfrac{52}{5}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-053"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 2 y^{2} + 2)\\,dx + (x^{2} + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$2$.",
   "$-2$.",
   "$1$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 4 y,\\quad Q'_x = 2 x + 4 y$<br>Đồng nhất hệ số: $m = 2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-054"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 3,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$24$.",
   "$-24$.",
   "$6$.",
   "$48$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{2}\\left(4 y\\right)dy$<br>$I = 24$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-055"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 2 x y + 2 y^{2} + 3)\\,dx + (mx^2 + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-1$.",
   "$1$.",
   "$-2$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = - 2 x + 4 y,\\quad Q'_x = 2mx + 4 y$<br>Đồng nhất hệ số: $m = -1$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-056"
 },
 {
  "q": "Khi $m = 1$, định thức của ma trận $A$ bằng",
  "options": [
   "$-3$.",
   "$-6$.",
   "$3$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$\\det A = 3 m - 6$<br>Với $m = 1$: $\\det A = -3$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + z = 4\\\\ -x + 2y + 2z = 14\\\\ -2x + 2y + mz = 13\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-001"
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
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 3 m - 6 = 0 \\Leftrightarrow m = 2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + z = 4\\\\ -x + 2y + 2z = 14\\\\ -2x + 2y + mz = 13\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-002"
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
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + z = 4\\\\ -x + 2y + 2z = 14\\\\ -2x + 2y + mz = 13\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-003"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$-1$.",
   "$1$.",
   "$-2$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>Vết của $A^2$: $-1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-004"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$-2$.",
   "$-4$.",
   "$-1$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-2 & 2 \\\\ -6 & 4\\end{pmatrix}$<br>Tổng các phần tử: $-2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-005"
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
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-006"
 },
 {
  "q": "Tổng bình phương các trị riêng của $A$ bằng",
  "options": [
   "$20$.",
   "$4$.",
   "$-8$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng $\\lambda^2 - (2)\\lambda + (-8) = 0$ có nghiệm $-2$ và $4$<br>Kết quả: $20$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-8 & -12 \\\\ 6 & 10\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-007"
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
  "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(-2)^{4} + (4)^{4}$<br>Kết quả: $272$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-8 & -12 \\\\ 6 & 10\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-008"
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
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-8 & -12 \\\\ 6 & 10\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-009"
 },
 {
  "q": "Khi $m = -2$, định thức của ma trận $A$ bằng",
  "options": [
   "$6$.",
   "$12$.",
   "$-6$.",
   "$8$."
  ],
  "answer": 0,
  "explain": "$\\det A = 3 m + 12$<br>Với $m = -2$: $\\det A = 6$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2z = 7\\\\ 2x + 3y + 2z = 2\\\\ -2x + mz = -8\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-010"
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
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 3 m + 12 = 0 \\Leftrightarrow m = -4$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2z = 7\\\\ 2x + 3y + 2z = 2\\\\ -2x + mz = -8\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-011"
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
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2z = 7\\\\ 2x + 3y + 2z = 2\\\\ -2x + mz = -8\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-012"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$-1$.",
   "$1$.",
   "$-2$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>Vết của $A^2$: $-1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 1$. Kí hiệu $f(A) = A^2 - 3A - I$."
  },
  "first": true,
  "id": "tr-013"
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
  "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-6 & 4 \\\\ -12 & 6\\end{pmatrix}$<br>Tổng các phần tử: $-8$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 1$. Kí hiệu $f(A) = A^2 - 3A - I$."
  },
  "first": true,
  "id": "tr-014"
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
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 1$. Kí hiệu $f(A) = A^2 - 3A - I$."
  },
  "first": true,
  "id": "tr-015"
 },
 {
  "q": "Tổng bình phương các trị riêng của $A$ bằng",
  "options": [
   "$2$.",
   "$0$.",
   "$-1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng $\\lambda^2 - (0)\\lambda + (-1) = 0$ có nghiệm $-1$ và $1$<br>Kết quả: $2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-3 & -2 \\\\ 4 & 3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-016"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
  "options": [
   "$2$.",
   "$0$.",
   "$1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(-1)^{4} + (1)^{4}$<br>Kết quả: $2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-3 & -2 \\\\ 4 & 3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-017"
 },
 {
  "q": "Định thức của ma trận $A^2 - A$ bằng",
  "options": [
   "$0$.",
   "$2$.",
   "$1$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$A^2 - 1A$ có các trị riêng $\\lambda^2 - 1\\lambda$: $2$ và $0$; định thức bằng tích của chúng<br>Kết quả: $0$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-3 & -2 \\\\ 4 & 3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-018"
 },
 {
  "q": "Khi $m = -4$, định thức của ma trận $A$ bằng",
  "options": [
   "$2$.",
   "$10$.",
   "$-2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\det A = 2 m + 10$<br>Với $m = -4$: $\\det A = 2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + 2z = -2\\\\ x + 3y = 4\\\\ -2x - y + mz = 6\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-019"
 },
 {
  "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
  "options": [
   "$-5$.",
   "$-4$.",
   "$5$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 2 m + 10 = 0 \\Leftrightarrow m = -5$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + 2z = -2\\\\ x + 3y = 4\\\\ -2x - y + mz = 6\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-020"
 },
 {
  "q": "Khi $m = -4$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$-1$.",
   "$0$.",
   "$1$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "Với $m = -4$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 2$)<br>$(x_0;y_0;z_0) = (-2;2;-1)$<br>$x_0 + y_0 + z_0 = -1$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + 2z = -2\\\\ x + 3y = 4\\\\ -2x - y + mz = 6\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-021"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$-2$.",
   "$0$.",
   "$-1$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-1 & 0 \\\\ 0 & -1\\end{pmatrix}$<br>Vết của $A^2$: $-2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -2 \\\\ 1 & -1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x - 2$. Kí hiệu $f(A) = A^2 - A - 2I$."
  },
  "first": true,
  "id": "tr-022"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$-5$.",
   "$-1$.",
   "$-7$.",
   "$-6$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-1 & 0 \\\\ 0 & -1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-4 & 2 \\\\ -1 & -2\\end{pmatrix}$<br>Tổng các phần tử: $-5$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -2 \\\\ 1 & -1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x - 2$. Kí hiệu $f(A) = A^2 - A - 2I$."
  },
  "first": true,
  "id": "tr-023"
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
  "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}-1 & 2 \\\\ -1 & 1\\end{pmatrix}$<br>Tổng các phần tử: $1$",
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -2 \\\\ 1 & -1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x - 2$. Kí hiệu $f(A) = A^2 - A - 2I$."
  },
  "first": true,
  "id": "tr-024"
 },
 {
  "q": "Tổng bình phương các trị riêng của $A$ bằng",
  "options": [
   "$5$.",
   "$1$.",
   "$-2$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng $\\lambda^2 - (-1)\\lambda + (-2) = 0$ có nghiệm $1$ và $-2$<br>Kết quả: $5$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-5 & -3 \\\\ 6 & 4\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-025"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
  "options": [
   "$17$.",
   "$1$.",
   "$16$.",
   "$-4$."
  ],
  "answer": 0,
  "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(1)^{4} + (-2)^{4}$<br>Kết quả: $17$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-5 & -3 \\\\ 6 & 4\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-026"
 },
 {
  "q": "Định thức của ma trận $A^2 - 3A$ bằng",
  "options": [
   "$-20$.",
   "$10$.",
   "$8$.",
   "$20$."
  ],
  "answer": 0,
  "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $-2$ và $10$; định thức bằng tích của chúng<br>Kết quả: $-20$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-5 & -3 \\\\ 6 & 4\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-027"
 },
 {
  "q": "Khi $m = -2$, định thức của ma trận $A$ bằng",
  "options": [
   "$-1$.",
   "$-3$.",
   "$1$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "$\\det A = - m - 3$<br>Với $m = -2$: $\\det A = -1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y + z = 6\\\\ 2x + 3y + z = 11\\\\ 2x - y + mz = 6\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-028"
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
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = - m - 3 = 0 \\Leftrightarrow m = -3$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y + z = 6\\\\ 2x + 3y + z = 11\\\\ 2x - y + mz = 6\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-029"
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
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y + z = 6\\\\ 2x + 3y + z = 11\\\\ 2x - y + mz = 6\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-030"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$2$.",
   "$4$.",
   "$3$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$<br>Vết của $A^2$: $2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 2 x + 1$. Kí hiệu $f(A) = A^2 - 2A + I$."
  },
  "first": true,
  "id": "tr-031"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$0$.",
   "$-2$.",
   "$1$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}1 & 2 \\\\ 0 & 1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}0 & 0 \\\\ 0 & 0\\end{pmatrix}$<br>Tổng các phần tử: $0$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 2 x + 1$. Kí hiệu $f(A) = A^2 - 2A + I$."
  },
  "first": true,
  "id": "tr-032"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
  "options": [
   "$1$.",
   "$3$.",
   "$-1$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}1 & -1 \\\\ 0 & 1\\end{pmatrix}$<br>Tổng các phần tử: $1$",
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 0 & 1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 2 x + 1$. Kí hiệu $f(A) = A^2 - 2A + I$."
  },
  "first": true,
  "id": "tr-033"
 },
 {
  "q": "Tổng bình phương các trị riêng của $A$ bằng",
  "options": [
   "$5$.",
   "$1$.",
   "$-2$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng $\\lambda^2 - (-1)\\lambda + (-2) = 0$ có nghiệm $-2$ và $1$<br>Kết quả: $5$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}13 & -6 \\\\ 30 & -14\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-034"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{5}$ bằng",
  "options": [
   "$-31$.",
   "$-1$.",
   "$-32$.",
   "$-5$."
  ],
  "answer": 0,
  "explain": "$A^{5} = PD^{5}P^{-1}$ có cùng vết với $D^{5}$: $(-2)^{5} + (1)^{5}$<br>Kết quả: $-31$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}13 & -6 \\\\ 30 & -14\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-035"
 },
 {
  "q": "Định thức của ma trận $A^2 - 2A$ bằng",
  "options": [
   "$-8$.",
   "$8$.",
   "$7$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$A^2 - 2A$ có các trị riêng $\\lambda^2 - 2\\lambda$: $8$ và $-1$; định thức bằng tích của chúng<br>Kết quả: $-8$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}13 & -6 \\\\ 30 & -14\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-036"
 },
 {
  "q": "Khi $m = 7$, định thức của ma trận $A$ bằng",
  "options": [
   "$2$.",
   "$-12$.",
   "$-2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\det A = 2 m - 12$<br>Với $m = 7$: $\\det A = 2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y - z = 3\\\\ 2y + 2z = -8\\\\ -2x + 2y + mz = -24\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-037"
 },
 {
  "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
  "options": [
   "$6$.",
   "$7$.",
   "$-6$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 2 m - 12 = 0 \\Leftrightarrow m = 6$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y - z = 3\\\\ 2y + 2z = -8\\\\ -2x + 2y + mz = -24\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-038"
 },
 {
  "q": "Khi $m = 7$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$-1$.",
   "$0$.",
   "$1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Với $m = 7$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 2$)<br>$(x_0;y_0;z_0) = (3;-2;-2)$<br>$x_0 + y_0 + z_0 = -1$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y - z = 3\\\\ 2y + 2z = -8\\\\ -2x + 2y + mz = -24\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-039"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$34$.",
   "$36$.",
   "$12$.",
   "$58$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}5 & 12 \\\\ 12 & 29\\end{pmatrix}$<br>Vết của $A^2$: $34$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 2 \\\\ 2 & 5\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x + 1$. Kí hiệu $f(A) = A^2 - 3A + I$."
  },
  "first": true,
  "id": "tr-040"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$30$.",
   "$28$.",
   "$31$.",
   "$18$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}5 & 12 \\\\ 12 & 29\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}3 & 6 \\\\ 6 & 15\\end{pmatrix}$<br>Tổng các phần tử: $30$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 2 \\\\ 2 & 5\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x + 1$. Kí hiệu $f(A) = A^2 - 3A + I$."
  },
  "first": true,
  "id": "tr-041"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
  "options": [
   "$2$.",
   "$10$.",
   "$-2$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}5 & -2 \\\\ -2 & 1\\end{pmatrix}$<br>Tổng các phần tử: $2$",
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 2 \\\\ 2 & 5\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x + 1$. Kí hiệu $f(A) = A^2 - 3A + I$."
  },
  "first": true,
  "id": "tr-042"
 },
 {
  "q": "Tổng bình phương các trị riêng của $A$ bằng",
  "options": [
   "$5$.",
   "$9$.",
   "$2$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng $\\lambda^2 - (-3)\\lambda + (2) = 0$ có nghiệm $-1$ và $-2$<br>Kết quả: $5$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}0 & 1 \\\\ -2 & -3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-043"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{5}$ bằng",
  "options": [
   "$-33$.",
   "$-243$.",
   "$32$.",
   "$-15$."
  ],
  "answer": 0,
  "explain": "$A^{5} = PD^{5}P^{-1}$ có cùng vết với $D^{5}$: $(-1)^{5} + (-2)^{5}$<br>Kết quả: $-33$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}0 & 1 \\\\ -2 & -3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-044"
 },
 {
  "q": "Định thức của ma trận $A^2 - 3A$ bằng",
  "options": [
   "$40$.",
   "$-2$.",
   "$14$.",
   "$-40$."
  ],
  "answer": 0,
  "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $4$ và $10$; định thức bằng tích của chúng<br>Kết quả: $40$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}0 & 1 \\\\ -2 & -3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-045"
 },
 {
  "q": "Khi $m = 3$, định thức của ma trận $A$ bằng",
  "options": [
   "$-3$.",
   "$-12$.",
   "$3$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$\\det A = 3 m - 12$<br>Với $m = 3$: $\\det A = -3$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x - y + 2z = 4\\\\ 3y + 2z = 5\\\\ x + 2y + mz = 8\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-046"
 },
 {
  "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
  "options": [
   "$4$.",
   "$3$.",
   "$-4$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 3 m - 12 = 0 \\Leftrightarrow m = 4$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x - y + 2z = 4\\\\ 3y + 2z = 5\\\\ x + 2y + mz = 8\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-047"
 },
 {
  "q": "Khi $m = 3$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$5$.",
   "$6$.",
   "$-5$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Với $m = 3$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = -3$)<br>$(x_0;y_0;z_0) = (3;1;1)$<br>$x_0 + y_0 + z_0 = 5$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x - y + 2z = 4\\\\ 3y + 2z = 5\\\\ x + 2y + mz = 8\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-048"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$7$.",
   "$9$.",
   "$-6$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}5 & -3 \\\\ -3 & 2\\end{pmatrix}$<br>Vết của $A^2$: $7$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-2 & 1 \\\\ 1 & -1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 2 x - 2$. Kí hiệu $f(A) = A^2 - 2A - 2I$."
  },
  "first": true,
  "id": "tr-049"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$-1$.",
   "$3$.",
   "$-3$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}5 & -3 \\\\ -3 & 2\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}7 & -5 \\\\ -5 & 2\\end{pmatrix}$<br>Tổng các phần tử: $-1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-2 & 1 \\\\ 1 & -1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 2 x - 2$. Kí hiệu $f(A) = A^2 - 2A - 2I$."
  },
  "first": true,
  "id": "tr-050"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
  "options": [
   "$-5$.",
   "$-1$.",
   "$5$.",
   "$-4$."
  ],
  "answer": 0,
  "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}-1 & -1 \\\\ -1 & -2\\end{pmatrix}$<br>Tổng các phần tử: $-5$",
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-2 & 1 \\\\ 1 & -1\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 2 x - 2$. Kí hiệu $f(A) = A^2 - 2A - 2I$."
  },
  "first": true,
  "id": "tr-051"
 },
 {
  "q": "Tổng bình phương các trị riêng của $A$ bằng",
  "options": [
   "$10$.",
   "$4$.",
   "$-3$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng $\\lambda^2 - (2)\\lambda + (-3) = 0$ có nghiệm $3$ và $-1$<br>Kết quả: $10$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & -8 \\\\ 40 & 19\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-052"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
  "options": [
   "$82$.",
   "$16$.",
   "$81$.",
   "$8$."
  ],
  "answer": 0,
  "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(3)^{4} + (-1)^{4}$<br>Kết quả: $82$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & -8 \\\\ 40 & 19\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-053"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 8$. Tính $y\\left(\\dfrac{\\pi}{2}\\right)$.",
  "answer": [
   "-2"
  ],
  "explain": "$y = 2\\cos 2x + 4\\sin 2x$<br>Đáp số: $-2$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-044"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 6y' + 8y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "1"
  ],
  "explain": "Nghiệm đặc trưng $k = -2,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 6\\left[y\\right]_0^{+\\infty} + 8\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(2) - 6\\cdot1 + 8I = 0 \\Rightarrow I = \\dfrac{8}{8} = 1$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-045"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -8x - 4$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "10"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -8x - 4 \\Rightarrow y^* = 2x + 1$<br>$y = 2x + 1 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 2,\\ y'(0) = 4 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 3 + e^{2} \\approx 10{,}39$<br>Đáp số: $10$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-046"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = 4$ với điều kiện $y(0) = 4;\\ y'(0) = 3$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "64"
  ],
  "explain": "Nghiệm riêng hằng $y^* = 2$; $y = 2 + C_1e^{x} + C_2e^{2x}$ với $C_1 = 1,\\ C_2 = 1$; $y(2) \\approx 63{,}99$<br>Đáp số: $64$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-047"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 3y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = -1$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "-389"
  ],
  "explain": "$y = C_1e^{x} + C_2e^{3x}$ với $C_1 = 2,\\ C_2 = -1$; $y(2) \\approx -388{,}65$<br>Đáp số: $-389$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-048"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 4;\\ y'(0) = 0$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "6"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(0) - 3\\cdot4 + 2I = 0 \\Rightarrow I = \\dfrac{12}{2} = 6$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-049"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -8x - 8$ với điều kiện $y(0) = 4;\\ y'(0) = 6$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "19"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -8x - 8 \\Rightarrow y^* = 2x + 2$<br>$y = 2x + 2 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 4,\\ y'(0) = 6 \\Rightarrow C_1 = 2,\\ C_2 = 0$<br>$y(1) = 4 + 2e^{2} \\approx 18{,}78$<br>Đáp số: $19$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-050"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "8"
  ],
  "explain": "Nghiệm kép $k = 1$: $y = (2 + 1x)e^{x}$; $y(1) \\approx 8{,}155$<br>Đáp số: $8$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-051"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 0$ với điều kiện $y(0) = -2;\\ y'(0) = 4$. Tính $y\\left(\\pi\\right)$.",
  "answer": [
   "2"
  ],
  "explain": "$y = -2\\cos x + 4\\sin x$<br>Đáp số: $2$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-052"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 4y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "3"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 4\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(2) - 5\\cdot2 + 4I = 0 \\Rightarrow I = \\dfrac{12}{4} = 3$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-053"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -3x - 1$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "7"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 1 = 0 \\Rightarrow k = \\pm1$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-1(Ax + B) = -3x - 1 \\Rightarrow y^* = 3x + 1$<br>$y = 3x + 1 + C_1e^{x} + C_2e^{-x}$<br>$y(0) = 2,\\ y'(0) = 4 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 4 + e \\approx 6{,}72$<br>Đáp số: $7$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-054"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -4$ với điều kiện $y(0) = 5;\\ y'(0) = 1$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "7"
  ],
  "explain": "Nghiệm riêng hằng $y^* = 4$; $y = 4 + C_1e^{x} + C_2e^{-x}$ với $C_1 = 1,\\ C_2 = 0$; $y(1) \\approx 6{,}72$<br>Đáp số: $7$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-055"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 1$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "6"
  ],
  "explain": "$y = C_1e^{x} + C_2e^{-x}$ với $C_1 = 2,\\ C_2 = 1$; $y(1) \\approx 5{,}80$<br>Đáp số: $6$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-056"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = -1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "1"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(-1) - 3\\cdot1 + 2I = 0 \\Rightarrow I = \\dfrac{2}{2} = 1$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-057"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -3x$ với điều kiện $y(0) = 1;\\ y'(0) = 4$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "6"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 1 = 0 \\Rightarrow k = \\pm1$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-1(Ax + B) = -3x \\Rightarrow y^* = 3x$<br>$y = 3x + C_1e^{x} + C_2e^{-x}$<br>$y(0) = 1,\\ y'(0) = 4 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 3 + e \\approx 5{,}72$<br>Đáp số: $6$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-058"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 5$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "30"
  ],
  "explain": "Nghiệm kép $k = 2$: $y = (1 + 3x)e^{2x}$; $y(1) \\approx 29{,}556$<br>Đáp số: $30$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-059"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 3$. Tính $y\\left(\\pi\\right)$.",
  "answer": [
   "-3"
  ],
  "explain": "$y = 3\\cos x + 3\\sin x$<br>Đáp số: $-3$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-060"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "4"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(2) - 3\\cdot2 + 2I = 0 \\Rightarrow I = \\dfrac{8}{2} = 4$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-061"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -12x$ với điều kiện $y(0) = 1;\\ y'(0) = 5$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "10"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -12x \\Rightarrow y^* = 3x$<br>$y = 3x + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 1,\\ y'(0) = 5 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 3 + e^{2} \\approx 10{,}39$<br>Đáp số: $10$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-062"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 5y' + 6y = 18$ với điều kiện $y(0) = 4;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "23"
  ],
  "explain": "Nghiệm riêng hằng $y^* = 3$; $y = 3 + C_1e^{2x} + C_2e^{3x}$ với $C_1 = 0,\\ C_2 = 1$; $y(1) \\approx 23{,}09$<br>Đáp số: $23$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-063"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 5y' + 6y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 2$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "55"
  ],
  "explain": "$y = C_1e^{2x} + C_2e^{3x}$ với $C_1 = 1,\\ C_2 = 0$; $y(2) \\approx 54{,}60$<br>Đáp số: $55$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-064"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 4y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "2"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 4\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(3) - 5\\cdot1 + 4I = 0 \\Rightarrow I = \\dfrac{8}{4} = 2$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-065"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -8x$ với điều kiện $y(0) = 2;\\ y'(0) = 6$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "17"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -8x \\Rightarrow y^* = 2x$<br>$y = 2x + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 2,\\ y'(0) = 6 \\Rightarrow C_1 = 2,\\ C_2 = 0$<br>$y(1) = 2 + 2e^{2} \\approx 16{,}78$<br>Đáp số: $17$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-066"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Tính $y(3)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "161"
  ],
  "explain": "Nghiệm kép $k = 1$: $y = (2 + 2x)e^{x}$; $y(3) \\approx 160{,}684$<br>Đáp số: $161$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-067"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 9y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 9$. Tính $y\\left(\\dfrac{\\pi}{6}\\right)$.",
  "answer": [
   "3"
  ],
  "explain": "$y = 2\\cos 3x + 3\\sin 3x$<br>Đáp số: $3$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-068"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y' + 3y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = -1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "1"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -3$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 4\\left[y\\right]_0^{+\\infty} + 3\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(-1) - 4\\cdot1 + 3I = 0 \\Rightarrow I = \\dfrac{3}{3} = 1$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-069"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -12x - 8$ với điều kiện $y(0) = 3;\\ y'(0) = 5$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "12"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -12x - 8 \\Rightarrow y^* = 3x + 2$<br>$y = 3x + 2 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 3,\\ y'(0) = 5 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 5 + e^{2} \\approx 12{,}39$<br>Đáp số: $12$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-070"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = 4$ với điều kiện $y(0) = 3;\\ y'(0) = 1$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "5"
  ],
  "explain": "Nghiệm riêng hằng $y^* = 2$; $y = 2 + C_1e^{x} + C_2e^{2x}$ với $C_1 = 1,\\ C_2 = 0$; $y(1) \\approx 4{,}72$<br>Đáp số: $5$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-071"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y' - 2y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 3$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "109"
  ],
  "explain": "$y = C_1e^{2x} + C_2e^{-x}$ với $C_1 = 2,\\ C_2 = 1$; $y(2) \\approx 109{,}33$<br>Đáp số: $109$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-072"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 4y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = -2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "2"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 4\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(-2) - 5\\cdot2 + 4I = 0 \\Rightarrow I = \\dfrac{8}{4} = 2$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-073"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -12x - 8$ với điều kiện $y(0) = 4;\\ y'(0) = 7$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "20"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -12x - 8 \\Rightarrow y^* = 3x + 2$<br>$y = 3x + 2 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 4,\\ y'(0) = 7 \\Rightarrow C_1 = 2,\\ C_2 = 0$<br>$y(1) = 5 + 2e^{2} \\approx 19{,}78$<br>Đáp số: $20$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-074"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Tính $y(3)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "-403"
  ],
  "explain": "Nghiệm kép $k = 2$: $y = (2 + (-1)x)e^{2x}$; $y(3) \\approx -403{,}429$<br>Đáp số: $-403$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-075"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 9y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 6$. Tính $y\\left(\\dfrac{\\pi}{3}\\right)$.",
  "answer": [
   "-1"
  ],
  "explain": "$y = 1\\cos 3x + 2\\sin 3x$<br>Đáp số: $-1$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-076"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = -1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "4"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(-1) - 3\\cdot3 + 2I = 0 \\Rightarrow I = \\dfrac{8}{2} = 4$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-077"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -x - 2$ với điều kiện $y(0) = 3;\\ y'(0) = 2$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "6"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 1 = 0 \\Rightarrow k = \\pm1$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-1(Ax + B) = -x - 2 \\Rightarrow y^* = x + 2$<br>$y = x + 2 + C_1e^{x} + C_2e^{-x}$<br>$y(0) = 3,\\ y'(0) = 2 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 3 + e \\approx 5{,}72$<br>Đáp số: $6$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-078"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = 4$ với điều kiện $y(0) = 3;\\ y'(0) = 1$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "9"
  ],
  "explain": "Nghiệm riêng hằng $y^* = 2$; $y = 2 + C_1e^{x} + C_2e^{2x}$ với $C_1 = 1,\\ C_2 = 0$; $y(2) \\approx 9{,}39$<br>Đáp số: $9$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-079"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 1$. Tính $y(3)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "20"
  ],
  "explain": "$y = C_1e^{x} + C_2e^{2x}$ với $C_1 = 1,\\ C_2 = 0$; $y(3) \\approx 20{,}09$<br>Đáp số: $20$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-080"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 6y' + 8y = 0$ với điều kiện $y(0) = 4;\\ y'(0) = 0$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "3"
  ],
  "explain": "Nghiệm đặc trưng $k = -2,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 6\\left[y\\right]_0^{+\\infty} + 8\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(0) - 6\\cdot4 + 8I = 0 \\Rightarrow I = \\dfrac{24}{8} = 3$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-081"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -12x$ với điều kiện $y(0) = 2;\\ y'(0) = 7$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "18"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -12x \\Rightarrow y^* = 3x$<br>$y = 3x + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 2,\\ y'(0) = 7 \\Rightarrow C_1 = 2,\\ C_2 = 0$<br>$y(1) = 3 + 2e^{2} \\approx 17{,}78$<br>Đáp số: $18$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-082"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 4$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "44"
  ],
  "explain": "Nghiệm kép $k = 1$: $y = (2 + 2x)e^{x}$; $y(2) \\approx 44{,}334$<br>Đáp số: $44$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-083"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Tính $y\\left(\\pi\\right)$.",
  "answer": [
   "-1"
  ],
  "explain": "$y = 1\\cos x + 3\\sin x$<br>Đáp số: $-1$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-084"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 6y = 0$ với điều kiện $y(0) = 4;\\ y'(0) = -2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "3"
  ],
  "explain": "Nghiệm đặc trưng $k = -2,\\ k = -3$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 6\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(-2) - 5\\cdot4 + 6I = 0 \\Rightarrow I = \\dfrac{18}{6} = 3$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-085"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-1y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$2 \\pi$.",
   "$0$.",
   "$4 \\pi$.",
   "$\\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-1)=2$.<br>Theo Green, tích phân bằng $(2)\\cdot\\pi\\cdot1=2 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-057"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-2y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$12 \\pi$.",
   "$- 4 \\pi$.",
   "$6 \\pi$.",
   "$- 12 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-2)=3$.<br>Theo Green, tích phân bằng $(3)\\cdot\\pi\\cdot4=12 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-058"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-3y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$36 \\pi$.",
   "$- 18 \\pi$.",
   "$24 \\pi$.",
   "$18 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-3)=4$.<br>Theo Green, tích phân bằng $(4)\\cdot\\pi\\cdot9=36 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-059"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-4y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$80 \\pi$.",
   "$- 48 \\pi$.",
   "$40 \\pi$.",
   "$- 80 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-4)=5$.<br>Theo Green, tích phân bằng $(5)\\cdot\\pi\\cdot16=80 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-060"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-5y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$6 \\pi$.",
   "$- 4 \\pi$.",
   "$12 \\pi$.",
   "$3 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-5)=6$.<br>Theo Green, tích phân bằng $(6)\\cdot\\pi\\cdot1=6 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-061"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-6y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$28 \\pi$.",
   "$- 20 \\pi$.",
   "$14 \\pi$.",
   "$- 28 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-6)=7$.<br>Theo Green, tích phân bằng $(7)\\cdot\\pi\\cdot4=28 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-062"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-7y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$72 \\pi$.",
   "$- 54 \\pi$.",
   "$48 \\pi$.",
   "$36 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-7)=8$.<br>Theo Green, tích phân bằng $(8)\\cdot\\pi\\cdot9=72 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-063"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-8y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$144 \\pi$.",
   "$- 112 \\pi$.",
   "$72 \\pi$.",
   "$- 144 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-8)=9$.<br>Theo Green, tích phân bằng $(9)\\cdot\\pi\\cdot16=144 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-064"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-9y)\\,dx + (1x)\\,dy$.",
  "options": [
   "$10 \\pi$.",
   "$- 8 \\pi$.",
   "$20 \\pi$.",
   "$5 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=1-(-9)=10$.<br>Theo Green, tích phân bằng $(10)\\cdot\\pi\\cdot1=10 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-065"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-1y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$12 \\pi$.",
   "$4 \\pi$.",
   "$6 \\pi$.",
   "$- 12 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-1)=3$.<br>Theo Green, tích phân bằng $(3)\\cdot\\pi\\cdot4=12 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-066"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-2y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$36 \\pi$.",
   "$0$.",
   "$24 \\pi$.",
   "$18 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-2)=4$.<br>Theo Green, tích phân bằng $(4)\\cdot\\pi\\cdot9=36 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-067"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-3y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$80 \\pi$.",
   "$- 16 \\pi$.",
   "$40 \\pi$.",
   "$- 80 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-3)=5$.<br>Theo Green, tích phân bằng $(5)\\cdot\\pi\\cdot16=80 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-068"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-4y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$6 \\pi$.",
   "$- 2 \\pi$.",
   "$12 \\pi$.",
   "$3 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-4)=6$.<br>Theo Green, tích phân bằng $(6)\\cdot\\pi\\cdot1=6 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-069"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-5y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$28 \\pi$.",
   "$- 12 \\pi$.",
   "$14 \\pi$.",
   "$- 28 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-5)=7$.<br>Theo Green, tích phân bằng $(7)\\cdot\\pi\\cdot4=28 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-070"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-6y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$72 \\pi$.",
   "$- 36 \\pi$.",
   "$48 \\pi$.",
   "$36 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-6)=8$.<br>Theo Green, tích phân bằng $(8)\\cdot\\pi\\cdot9=72 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-071"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-7y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$144 \\pi$.",
   "$- 80 \\pi$.",
   "$72 \\pi$.",
   "$- 144 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-7)=9$.<br>Theo Green, tích phân bằng $(9)\\cdot\\pi\\cdot16=144 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-072"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-8y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$10 \\pi$.",
   "$- 6 \\pi$.",
   "$20 \\pi$.",
   "$5 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-8)=10$.<br>Theo Green, tích phân bằng $(10)\\cdot\\pi\\cdot1=10 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-073"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-9y)\\,dx + (2x)\\,dy$.",
  "options": [
   "$44 \\pi$.",
   "$- 28 \\pi$.",
   "$22 \\pi$.",
   "$- 44 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=2-(-9)=11$.<br>Theo Green, tích phân bằng $(11)\\cdot\\pi\\cdot4=44 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-074"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-1y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$36 \\pi$.",
   "$18 \\pi$.",
   "$24 \\pi$.",
   "$- 36 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-1)=4$.<br>Theo Green, tích phân bằng $(4)\\cdot\\pi\\cdot9=36 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-075"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-2y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$80 \\pi$.",
   "$16 \\pi$.",
   "$40 \\pi$.",
   "$- 80 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-2)=5$.<br>Theo Green, tích phân bằng $(5)\\cdot\\pi\\cdot16=80 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-076"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-3y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$6 \\pi$.",
   "$0$.",
   "$12 \\pi$.",
   "$3 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-3)=6$.<br>Theo Green, tích phân bằng $(6)\\cdot\\pi\\cdot1=6 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-077"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-4y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$28 \\pi$.",
   "$- 4 \\pi$.",
   "$14 \\pi$.",
   "$- 28 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-4)=7$.<br>Theo Green, tích phân bằng $(7)\\cdot\\pi\\cdot4=28 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-078"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-5y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$72 \\pi$.",
   "$- 18 \\pi$.",
   "$48 \\pi$.",
   "$36 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-5)=8$.<br>Theo Green, tích phân bằng $(8)\\cdot\\pi\\cdot9=72 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-079"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-6y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$144 \\pi$.",
   "$- 48 \\pi$.",
   "$72 \\pi$.",
   "$- 144 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-6)=9$.<br>Theo Green, tích phân bằng $(9)\\cdot\\pi\\cdot16=144 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-080"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-7y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$10 \\pi$.",
   "$- 4 \\pi$.",
   "$20 \\pi$.",
   "$5 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-7)=10$.<br>Theo Green, tích phân bằng $(10)\\cdot\\pi\\cdot1=10 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-081"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-8y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$44 \\pi$.",
   "$- 20 \\pi$.",
   "$22 \\pi$.",
   "$- 44 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-8)=11$.<br>Theo Green, tích phân bằng $(11)\\cdot\\pi\\cdot4=44 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-082"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-9y)\\,dx + (3x)\\,dy$.",
  "options": [
   "$108 \\pi$.",
   "$- 54 \\pi$.",
   "$72 \\pi$.",
   "$54 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=3-(-9)=12$.<br>Theo Green, tích phân bằng $(12)\\cdot\\pi\\cdot9=108 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-083"
 }
];
