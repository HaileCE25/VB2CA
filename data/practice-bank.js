// Generated from tools/gen_practice_bank.py and tools/gen_applied_questions.py
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
  "explain": "$\\langle u, v\\rangle = (2)m + m(-3) + (-3)(2) = (-1)m + (-3)(2) = 0$<br>$(-1)m = -(-3)(2) \\Rightarrow m = \\dfrac{- (-3)(2)}{-1} = -6$<br>$u + v = ((2) + (-6);\\ (-6) + (-3);\\ (-3) + (2)) = (-4;-9;-1)$<br>$|u + v|^2 = (-4)^2 + (-9)^2 + (-1)^2 = 16 + 81 + 1 = 98$",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(0)(m)+(1)(-4)=m^{2} - 4=\\left(m - 2\\right) \\left(m + 2\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -2 \\text{ hoặc } m > 2$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, 3, 4, 5\\}$; có $6$ giá trị",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-1)(m)+(1)(-12)=m^{2} - m - 12=\\left(m - 4\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -3 < m < 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-2, -1, 0, 1, 2, 3\\}$; có $6$ giá trị",
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
  "explain": "$\\langle u, v\\rangle = (-1)m + m(-1) + (2)(4) = (-2)m + (2)(4) = 0$<br>$(-2)m = -(2)(4) \\Rightarrow m = \\dfrac{- (2)(4)}{-2} = 4$<br>$u + v = ((-1) + (4);\\ (4) + (-1);\\ (2) + (4)) = (3;3;6)$<br>$|u + v|^2 = (3)^2 + (3)^2 + (6)^2 = 9 + 9 + 36 = 54$",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(4)(m)+(1)(0)=m^{2} + 4 m=m \\left(m + 4\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -4 \\text{ hoặc } m > 0$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, 1, 2, 3, 4, 5\\}$; có $6$ giá trị",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-4)(m)+(1)(0)=m^{2} - 4 m=m \\left(m - 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 0 < m < 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{1, 2, 3\\}$; có $3$ giá trị",
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
  "explain": "$\\langle u, v\\rangle = (-3)m + m(2) + (-2)(-2) = (-1)m + (-2)(-2) = 0$<br>$(-1)m = -(-2)(-2) \\Rightarrow m = \\dfrac{- (-2)(-2)}{-1} = 4$<br>$u + v = ((-3) + (4);\\ (4) + (2);\\ (-2) + (-2)) = (1;6;-4)$<br>$|u + v|^2 = (1)^2 + (6)^2 + (-4)^2 = 1 + 36 + 16 = 53$",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-3)(m)+(1)(-4)=m^{2} - 3 m - 4=\\left(m - 4\\right) \\left(m + 1\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -1 \\text{ hoặc } m > 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, -2, 5\\}$; có $5$ giá trị",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-5)(m)+(1)(4)=m^{2} - 5 m + 4=\\left(m - 4\\right) \\left(m - 1\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 1 < m < 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{2, 3\\}$; có $2$ giá trị",
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
  "explain": "$\\langle u, v\\rangle = (4)m + m(-1) + (3)(-2) = (3)m + (3)(-2) = 0$<br>$(3)m = -(3)(-2) \\Rightarrow m = \\dfrac{- (3)(-2)}{3} = 2$<br>$u + v = ((4) + (2);\\ (2) + (-1);\\ (3) + (-2)) = (6;1;1)$<br>$|u + v|^2 = (6)^2 + (1)^2 + (1)^2 = 36 + 1 + 1 = 38$",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-4)(m)+(1)(0)=m^{2} - 4 m=m \\left(m - 4\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < 0 \\text{ hoặc } m > 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, -2, -1, 5\\}$; có $6$ giá trị",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-6)(m)+(1)(8)=m^{2} - 6 m + 8=\\left(m - 4\\right) \\left(m - 2\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 2 < m < 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{3\\}$; có $1$ giá trị",
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
  "explain": "$\\langle u, v\\rangle = (-1)m + m(-2) + (-2)(-3) = (-3)m + (-2)(-3) = 0$<br>$(-3)m = -(-2)(-3) \\Rightarrow m = \\dfrac{- (-2)(-3)}{-3} = 2$<br>$u + v = ((-1) + (2);\\ (2) + (-2);\\ (-2) + (-3)) = (1;0;-5)$<br>$|u + v|^2 = (1)^2 + (0)^2 + (-5)^2 = 1 + 0 + 25 = 26$",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(1)(m)+(1)(-6)=m^{2} + m - 6=\\left(m - 2\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -3 \\text{ hoặc } m > 2$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, 3, 4, 5\\}$; có $5$ giá trị",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-1)(m)+(1)(-6)=m^{2} - m - 6=\\left(m - 3\\right) \\left(m + 2\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -2 < m < 3$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-1, 0, 1, 2\\}$; có $4$ giá trị",
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
  "explain": "$\\langle u, v\\rangle = (-1)m + m(3) + (-1)(-2) = (2)m + (-1)(-2) = 0$<br>$(2)m = -(-1)(-2) \\Rightarrow m = \\dfrac{- (-1)(-2)}{2} = -1$<br>$u + v = ((-1) + (-1);\\ (-1) + (3);\\ (-1) + (-2)) = (-2;2;-3)$<br>$|u + v|^2 = (-2)^2 + (2)^2 + (-3)^2 = 4 + 4 + 9 = 17$",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(3)(m)+(1)(-4)=m^{2} + 3 m - 4=\\left(m - 1\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -4 \\text{ hoặc } m > 1$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, 2, 3, 4, 5\\}$; có $5$ giá trị",
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
  "explain": "$\\langle u,v\\rangle=(m)(m)+(6)(m)+(1)(8)=m^{2} + 6 m + 8=\\left(m + 2\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -4 < m < -2$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-3\\}$; có $1$ giá trị",
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
  "explain": "$\\langle u, v\\rangle = (2)m + m(-3) + (-3)(1) = (-1)m + (-3)(1) = 0$<br>$(-1)m = -(-3)(1) \\Rightarrow m = \\dfrac{- (-3)(1)}{-1} = -3$<br>$u + v = ((2) + (-3);\\ (-3) + (-3);\\ (-3) + (1)) = (-1;-6;-2)$<br>$|u + v|^2 = (-1)^2 + (-6)^2 + (-2)^2 = 1 + 36 + 4 = 41$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-025"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (0;-2;-4)$ và $v = (-1;1;-2)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$-2$.",
   "$6$.",
   "$1$.",
   "$-6$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 6,\\quad \\langle v, v\\rangle = 6 \\Rightarrow t = 1$<br>$p = v = (-1;1;-2)$, tổng các tọa độ: $-2$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-026"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-2;1)$ và $v = (m;m;-8)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$4$.",
   "$7$.",
   "$6$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-2)(m)+(1)(-8)=m^{2} - 2 m - 8=\\left(m - 4\\right) \\left(m + 2\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -2 \\text{ hoặc } m > 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, 5\\}$; có $4$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-027"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;1;1)$ và $v = (m;m;-12)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$6$.",
   "$5$.",
   "$8$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(1)(m)+(1)(-12)=m^{2} + m - 12=\\left(m - 3\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -4 < m < 3$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-3, -2, -1, 0, 1, 2\\}$; có $6$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-028"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-1;m;2)$ và $v = (m;2;4)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$153$.",
   "$37$.",
   "$218$.",
   "$25$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-1)m + m(2) + (2)(4) = (1)m + (2)(4) = 0$<br>$(1)m = -(2)(4) \\Rightarrow m = \\dfrac{- (2)(4)}{1} = -8$<br>$u + v = ((-1) + (-8);\\ (-8) + (2);\\ (2) + (4)) = (-9;-6;6)$<br>$|u + v|^2 = (-9)^2 + (-6)^2 + (6)^2 = 81 + 36 + 36 = 153$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-029"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (5;-1;-1)$ và $v = (2;2;-1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$3$.",
   "$9$.",
   "$1$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 9,\\quad \\langle v, v\\rangle = 9 \\Rightarrow t = 1$<br>$p = v = (2;2;-1)$, tổng các tọa độ: $3$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-030"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-5;1)$ và $v = (m;m;4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$7$.",
   "$4$.",
   "$9$.",
   "$8$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-5)(m)+(1)(4)=m^{2} - 5 m + 4=\\left(m - 4\\right) \\left(m - 1\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < 1 \\text{ hoặc } m > 4$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, -2, -1, 0, 5\\}$; có $7$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-031"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-2;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$1$.",
   "$10$.",
   "$3$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-2)(m)+(1)(0)=m^{2} - 2 m=m \\left(m - 2\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 0 < m < 2$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{1\\}$; có $1$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-032"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-3;m;2)$ và $v = (m;4;2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$65$.",
   "$17$.",
   "$82$.",
   "$33$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-3)m + m(4) + (2)(2) = (1)m + (2)(2) = 0$<br>$(1)m = -(2)(2) \\Rightarrow m = \\dfrac{- (2)(2)}{1} = -4$<br>$u + v = ((-3) + (-4);\\ (-4) + (4);\\ (2) + (2)) = (-7;0;4)$<br>$|u + v|^2 = (-7)^2 + (0)^2 + (4)^2 = 49 + 0 + 16 = 65$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-033"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (0;-2;1)$ và $v = (-1;1;-1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$1$.",
   "$-3$.",
   "$-1$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -3,\\quad \\langle v, v\\rangle = 3 \\Rightarrow t = -1$<br>$p = -v = (1;-1;1)$, tổng các tọa độ: $1$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-034"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-4;1)$ và $v = (m;m;3)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$8$.",
   "$3$.",
   "$10$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-4)(m)+(1)(3)=m^{2} - 4 m + 3=\\left(m - 3\\right) \\left(m - 1\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < 1 \\text{ hoặc } m > 3$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, -2, -1, 0, 4, 5\\}$; có $8$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-035"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-3;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$2$.",
   "$9$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-3)(m)+(1)(0)=m^{2} - 3 m=m \\left(m - 3\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 0 < m < 3$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{1, 2\\}$; có $2$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-036"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-2;m;4)$ và $v = (m;1;-3)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$318$.",
   "$2$.",
   "$463$.",
   "$30$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-2)m + m(1) + (4)(-3) = (-1)m + (4)(-3) = 0$<br>$(-1)m = -(4)(-3) \\Rightarrow m = \\dfrac{- (4)(-3)}{-1} = -12$<br>$u + v = ((-2) + (-12);\\ (-12) + (1);\\ (4) + (-3)) = (-14;-11;1)$<br>$|u + v|^2 = (-14)^2 + (-11)^2 + (1)^2 = 196 + 121 + 1 = 318$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-037"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-4;-2;-2)$ và $v = (2;1;0)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$-6$.",
   "$-10$.",
   "$-2$.",
   "$-8$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -10,\\quad \\langle v, v\\rangle = 5 \\Rightarrow t = -2$<br>$p = -2v = (-4;-2;0)$, tổng các tọa độ: $-6$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-038"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-1;1)$ và $v = (m;m;-6)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$5$.",
   "$6$.",
   "$7$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-1)(m)+(1)(-6)=m^{2} - m - 6=\\left(m - 3\\right) \\left(m + 2\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -2 \\text{ hoặc } m > 3$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, 4, 5\\}$; có $5$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-039"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;3;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$2$.",
   "$9$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(3)(m)+(1)(0)=m^{2} + 3 m=m \\left(m + 3\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -3 < m < 0$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-2, -1\\}$; có $2$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-040"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-2;m;2)$ và $v = (m;1;3)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$90$.",
   "$26$.",
   "$127$.",
   "$18$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-2)m + m(1) + (2)(3) = (-1)m + (2)(3) = 0$<br>$(-1)m = -(2)(3) \\Rightarrow m = \\dfrac{- (2)(3)}{-1} = 6$<br>$u + v = ((-2) + (6);\\ (6) + (1);\\ (2) + (3)) = (4;7;5)$<br>$|u + v|^2 = (4)^2 + (7)^2 + (5)^2 = 16 + 49 + 25 = 90$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-041"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (0;5;1)$ và $v = (1;1;1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$6$.",
   "$2$.",
   "$3$.",
   "$-6$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 6,\\quad \\langle v, v\\rangle = 3 \\Rightarrow t = 2$<br>$p = 2v = (2;2;2)$, tổng các tọa độ: $6$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-042"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-2;1)$ và $v = (m;m;-3)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$6$.",
   "$5$.",
   "$8$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-2)(m)+(1)(-3)=m^{2} - 2 m - 3=\\left(m - 3\\right) \\left(m + 1\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -1 \\text{ hoặc } m > 3$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, -2, 4, 5\\}$; có $6$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-043"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;2;1)$ và $v = (m;m;-3)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$3$.",
   "$8$.",
   "$5$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(2)(m)+(1)(-3)=m^{2} + 2 m - 3=\\left(m - 1\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -3 < m < 1$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-2, -1, 0\\}$; có $3$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-044"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-3;m;-3)$ và $v = (m;1;4)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$107$.",
   "$5$.",
   "$144$.",
   "$35$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-3)m + m(1) + (-3)(4) = (-2)m + (-3)(4) = 0$<br>$(-2)m = -(-3)(4) \\Rightarrow m = \\dfrac{- (-3)(4)}{-2} = -6$<br>$u + v = ((-3) + (-6);\\ (-6) + (1);\\ (-3) + (4)) = (-9;-5;1)$<br>$|u + v|^2 = (-9)^2 + (-5)^2 + (1)^2 = 81 + 25 + 1 = 107$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-045"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (4;1;4)$ và $v = (1;1;1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$9$.",
   "$3$.",
   "$-9$.",
   "$10$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 9,\\quad \\langle v, v\\rangle = 3 \\Rightarrow t = 3$<br>$p = 3v = (3;3;3)$, tổng các tọa độ: $9$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-046"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-1;1)$ và $v = (m;m;-2)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$7$.",
   "$4$.",
   "$9$.",
   "$8$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-1)(m)+(1)(-2)=m^{2} - m - 2=\\left(m - 2\\right) \\left(m + 1\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -1 \\text{ hoặc } m > 2$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, -2, 3, 4, 5\\}$; có $7$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-047"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-4;1)$ và $v = (m;m;3)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$1$.",
   "$10$.",
   "$3$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-4)(m)+(1)(3)=m^{2} - 4 m + 3=\\left(m - 3\\right) \\left(m - 1\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow 1 < m < 3$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{2\\}$; có $1$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-048"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-2;m;3)$ và $v = (m;1;-1)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$33$.",
   "$5$.",
   "$43$.",
   "$15$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-2)m + m(1) + (3)(-1) = (-1)m + (3)(-1) = 0$<br>$(-1)m = -(3)(-1) \\Rightarrow m = \\dfrac{- (3)(-1)}{-1} = -3$<br>$u + v = ((-2) + (-3);\\ (-3) + (1);\\ (3) + (-1)) = (-5;-2;2)$<br>$|u + v|^2 = (-5)^2 + (-2)^2 + (2)^2 = 25 + 4 + 4 = 33$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-049"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-2;-4;4)$ và $v = (1;-1;-2)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$2$.",
   "$-6$.",
   "$-1$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -6,\\quad \\langle v, v\\rangle = 6 \\Rightarrow t = -1$<br>$p = -v = (-1;1;2)$, tổng các tọa độ: $2$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-050"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;0;1)$ và $v = (m;m;-9)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$4$.",
   "$7$.",
   "$6$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(0)(m)+(1)(-9)=m^{2} - 9=\\left(m - 3\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -3 \\text{ hoặc } m > 3$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, 4, 5\\}$; có $4$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-051"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;5;1)$ và $v = (m;m;4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$2$.",
   "$9$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(5)(m)+(1)(4)=m^{2} + 5 m + 4=\\left(m + 1\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -4 < m < -1$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-3, -2\\}$; có $2$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-052"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (4;m;-2)$ và $v = (m;-3;-3)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$110$.",
   "$26$.",
   "$147$.",
   "$38$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (4)m + m(-3) + (-2)(-3) = (1)m + (-2)(-3) = 0$<br>$(1)m = -(-2)(-3) \\Rightarrow m = \\dfrac{- (-2)(-3)}{1} = -6$<br>$u + v = ((4) + (-6);\\ (-6) + (-3);\\ (-2) + (-3)) = (-2;-9;-5)$<br>$|u + v|^2 = (-2)^2 + (-9)^2 + (-5)^2 = 4 + 81 + 25 = 110$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-053"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-3;0;3)$ và $v = (1;-1;-1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$2$.",
   "$-6$.",
   "$-2$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = -6,\\quad \\langle v, v\\rangle = 3 \\Rightarrow t = -2$<br>$p = -2v = (-2;2;2)$, tổng các tọa độ: $2$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-054"
 },
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
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-055"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-1;1)$ và $v = (m;m;-2)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$2$.",
   "$9$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-1)(m)+(1)(-2)=m^{2} - m - 2=\\left(m - 2\\right) \\left(m + 1\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -1 < m < 2$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{0, 1\\}$; có $2$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-056"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-3;m;-2)$ và $v = (m;2;-1)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$26$.",
   "$10$.",
   "$31$.",
   "$18$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-3)m + m(2) + (-2)(-1) = (-1)m + (-2)(-1) = 0$<br>$(-1)m = -(-2)(-1) \\Rightarrow m = \\dfrac{- (-2)(-1)}{-1} = 2$<br>$u + v = ((-3) + (2);\\ (2) + (2);\\ (-2) + (-1)) = (-1;4;-3)$<br>$|u + v|^2 = (-1)^2 + (4)^2 + (-3)^2 = 1 + 16 + 9 = 26$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-057"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-1;-4;-2)$ và $v = (0;-1;-1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$-6$.",
   "$6$.",
   "$3$.",
   "$-7$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 6,\\quad \\langle v, v\\rangle = 2 \\Rightarrow t = 3$<br>$p = 3v = (0;-3;-3)$, tổng các tọa độ: $-6$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-058"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;-2;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$8$.",
   "$3$.",
   "$10$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(-2)(m)+(1)(0)=m^{2} - 2 m=m \\left(m - 2\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < 0 \\text{ hoặc } m > 2$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, -2, -1, 3, 4, 5\\}$; có $8$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-059"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;1;1)$ và $v = (m;m;-2)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$2$.",
   "$9$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(1)(m)+(1)(-2)=m^{2} + m - 2=\\left(m - 1\\right) \\left(m + 2\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -2 < m < 1$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-1, 0\\}$; có $2$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-060"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (4;m;3)$ và $v = (m;2;2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$35$.",
   "$61$.",
   "$37$.",
   "$33$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (4)m + m(2) + (3)(2) = (6)m + (3)(2) = 0$<br>$(6)m = -(3)(2) \\Rightarrow m = \\dfrac{- (3)(2)}{6} = -1$<br>$u + v = ((4) + (-1);\\ (-1) + (2);\\ (3) + (2)) = (3;1;5)$<br>$|u + v|^2 = (3)^2 + (1)^2 + (5)^2 = 9 + 1 + 25 = 35$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-061"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (3;4;0)$ và $v = (0;1;1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$4$.",
   "$2$.",
   "$7$.",
   "$-4$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 4,\\quad \\langle v, v\\rangle = 2 \\Rightarrow t = 2$<br>$p = 2v = (0;2;2)$, tổng các tọa độ: $4$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-062"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;2;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$8$.",
   "$3$.",
   "$10$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(2)(m)+(1)(0)=m^{2} + 2 m=m \\left(m + 2\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -2 \\text{ hoặc } m > 0$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, -3, 1, 2, 3, 4, 5\\}$; có $8$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-063"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;3;1)$ và $v = (m;m;-4)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$4$.",
   "$7$.",
   "$6$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(3)(m)+(1)(-4)=m^{2} + 3 m - 4=\\left(m - 1\\right) \\left(m + 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -4 < m < 1$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-3, -2, -1, 0\\}$; có $4$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-064"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường $\\langle u, v\\rangle = u_1v_1 + u_2v_2 + u_3v_3$, cho hai véc tơ $u = (-2;m;-1)$ và $v = (m;3;-2)$ với $m$ là tham số. Biết $u$ vuông góc với $v$, giá trị của $|u + v|^2$ bằng",
  "options": [
   "$26$.",
   "$10$.",
   "$31$.",
   "$18$."
  ],
  "answer": 0,
  "explain": "$\\langle u, v\\rangle = (-2)m + m(3) + (-1)(-2) = (1)m + (-1)(-2) = 0$<br>$(1)m = -(-1)(-2) \\Rightarrow m = \\dfrac{- (-1)(-2)}{1} = -2$<br>$u + v = ((-2) + (-2);\\ (-2) + (3);\\ (-1) + (-2)) = (-4;1;-3)$<br>$|u + v|^2 = (-4)^2 + (1)^2 + (-3)^2 = 16 + 1 + 9 = 26$",
  "note": "$u \\perp v \\Leftrightarrow \\langle u, v\\rangle = 0$; khi đó $|u + v|^2 = |u|^2 + |v|^2$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-065"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (-3;1;1)$ và $v = (0;1;1)$. Hình chiếu vuông góc của $u$ lên phương của $v$ là véc tơ $p = tv$ ($t \\in \\mathbb{R}$) sao cho $u - p$ vuông góc với $v$. Tổng các tọa độ của $p$ bằng",
  "options": [
   "$2$.",
   "$1$.",
   "$-1$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "$\\langle u - tv, v\\rangle = 0 \\Leftrightarrow t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$<br>$\\langle u, v\\rangle = 2,\\quad \\langle v, v\\rangle = 2 \\Rightarrow t = 1$<br>$p = v = (0;1;1)$, tổng các tọa độ: $2$",
  "note": "Hệ số chiếu $t = \\dfrac{\\langle u, v\\rangle}{\\langle v, v\\rangle}$: chia cho $|v|^2$, không phải $|v|$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-066"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;2;1)$ và $v = (m;m;-3)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc nhọn (tức $\\langle u, v\\rangle > 0$)?",
  "options": [
   "$6$.",
   "$5$.",
   "$8$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(2)(m)+(1)(-3)=m^{2} + 2 m - 3=\\left(m - 1\\right) \\left(m + 3\\right)$<br>$\\langle u, v\\rangle > 0 \\Leftrightarrow m < -3 \\text{ hoặc } m > 1$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-5, -4, 2, 3, 4, 5\\}$; có $6$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-067"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng thông thường, cho hai véc tơ $u = (m;4;1)$ và $v = (m;m;0)$ với $m$ là tham số. Có bao nhiêu giá trị nguyên của $m$ thuộc đoạn $[-5;5]$ để góc giữa $u$ và $v$ là góc tù (tức $\\langle u, v\\rangle < 0$)?",
  "options": [
   "$3$.",
   "$8$.",
   "$5$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\langle u,v\\rangle=(m)(m)+(4)(m)+(1)(0)=m^{2} + 4 m=m \\left(m + 4\\right)$<br>$\\langle u, v\\rangle < 0 \\Leftrightarrow -4 < m < 0$<br>Giao điều kiện với các số nguyên $m\\in[-5;5]$ là $\\{-3, -2, -1\\}$; có $3$ giá trị",
  "note": "Góc nhọn $\\Leftrightarrow \\langle u, v\\rangle > 0$, góc tù $\\Leftrightarrow \\langle u, v\\rangle < 0$; các giá trị làm tích vô hướng bằng 0 (góc vuông) bị loại.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-068"
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
  "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-069"
 },
 {
  "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (3;0;-2),\\ u_2 = (-2;1;0)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
  "options": [
   "$(-2;1;-1)$.",
   "$(1;1;-2)$.",
   "$(5;-1;-2)$.",
   "$(8;-1;-4)$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> Với $w=(-2;1;-1)$, tính định thức theo hàng đầu: $\\det\\begin{pmatrix}3 & 0 & -2\\\\ -2 & 1 & 0\\\\ -2 & 1 & -1\\end{pmatrix}= 3(1\\cdot-1-0\\cdot1)-0(-2\\cdot-1-0\\cdot-2)+-2(-2\\cdot1-1\\cdot-2)=-3\\ne0$, nên ba véc tơ độc lập tuyến tính và tạo thành cơ sở<br><b>Sai:</b> $(1;1;-2) = u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(5;-1;-2) = u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(8;-1;-4) = 2 u_{1} - u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-070"
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
  "note": "Số véc tơ đã bằng số chiều nên chỉ cần định thức khác 0.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-071"
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
  "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-072"
 },
 {
  "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1(0;0;-3),\\ u_2(9;3;-3),\\ u_3(2;2;1),\\ u_4(3;1;-1),\\ u_5(0;0;3)\\}$. Có bao nhiêu hệ con gồm đúng 3 véc tơ của $S$ là cơ sở của $\\mathbb{R}^3$?<span class=\"q-hint\">Lưu ý: hai véc tơ cùng phương thì phụ thuộc tuyến tính; hệ có số véc tơ lớn hơn số chiều của không gian luôn phụ thuộc tuyến tính.</span>",
  "options": [
   "$4$.",
   "$10$.",
   "$5$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Số hệ con cần xét: $C_5^3=10$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\9 & 3 & -3\\\\2 & 2 & 1\\end{pmatrix}=-36$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\9 & 3 & -3\\\\3 & 1 & -1\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\9 & 3 & -3\\\\0 & 0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\2 & 2 & 1\\\\3 & 1 & -1\\end{pmatrix}=12$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\2 & 2 & 1\\\\0 & 0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}0 & 0 & -3\\\\3 & 1 & -1\\\\0 & 0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}9 & 3 & -3\\\\2 & 2 & 1\\\\3 & 1 & -1\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}9 & 3 & -3\\\\2 & 2 & 1\\\\0 & 0 & 3\\end{pmatrix}=36$.<br>$\\det\\begin{pmatrix}9 & 3 & -3\\\\3 & 1 & -1\\\\0 & 0 & 3\\end{pmatrix}=0$.<br>$\\det\\begin{pmatrix}2 & 2 & 1\\\\3 & 1 & -1\\\\0 & 0 & 3\\end{pmatrix}=-12$.<br>Hệ là cơ sở khi định thức khác 0; có 4 định thức khác 0 nên có 4 cơ sở.",
  "note": "Một véc tơ khác không luôn độc lập tuyến tính; hai véc tơ độc lập khi không cùng phương; trong $\\mathbb{R}^n$ không có hệ độc lập nào nhiều hơn $n$ véc tơ.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-073"
 },
 {
  "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hai véc tơ $u_1 = (0;0;3),\\ u_2 = (-1;0;2)$. Véc tơ nào sau đây cùng với $u_1, u_2$ tạo thành một cơ sở của $\\mathbb{R}^3$?",
  "options": [
   "$(-1;3;3)$.",
   "$(-2;0;7)$.",
   "$(-1;0;5)$.",
   "$(-2;0;1)$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> Với $w=(-1;3;3)$, tính định thức theo hàng đầu: $\\det\\begin{pmatrix}0 & 0 & 3\\\\ -1 & 0 & 2\\\\ -1 & 3 & 3\\end{pmatrix}= 0(0\\cdot3-2\\cdot3)-0(-1\\cdot3-2\\cdot-1)+3(-1\\cdot3-0\\cdot-1)=-9\\ne0$, nên ba véc tơ độc lập tuyến tính và tạo thành cơ sở<br><b>Sai:</b> $(-2;0;7) = u_{1} + 2 u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(-1;0;5) = u_{1} + u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$<br><b>Sai:</b> $(-2;0;1) = - u_{1} + 2 u_{2}$ là tổ hợp tuyến tính của $u_1, u_2$",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-074"
 },
 {
  "q": "Trong không gian véc tơ $\\mathbb{R}^3$, cho hệ $S = \\{u_1(0;-1;0),\\ u_2(2;3;-1),\\ u_3(-2;3;m)\\}$ với $m$ là tham số. Hệ $S$ là một cơ sở của $\\mathbb{R}^3$ khi và chỉ khi",
  "options": [
   "$m \\ne 1$.",
   "$m = 1$.",
   "với mọi giá trị của $m$.",
   "$m \\ne 3$."
  ],
  "answer": 0,
  "explain": "Ba véc tơ trong $\\mathbb{R}^3$ là cơ sở khi và chỉ khi định thức của ma trận có ba hàng là các véc tơ khác 0.<br>Khai triển định thức: $\\det(u_1,u_2,u_3)=2 m - 2=2 \\left(m - 1\\right)$<br>Giải $2 m - 2=0$: $m=1$; do đó định thức khác 0 khi và chỉ khi $m\\ne1$",
  "note": "Số véc tơ đã bằng số chiều nên chỉ cần định thức khác 0.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-075"
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
  "explain": "$\\cos u=1-\\dfrac{u^2}{2}+o(u^2)$; với $w\\to0$, $\\ln(1+w)=w+o(w)$ nên $\\ln(\\cos u)=-\\dfrac{u^2}{2}+o(u^2)$.<br>Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\\dfrac{\\ln(\\cos Ax)}{\\ln(\\cos bx)}=\\dfrac{-A^2x^2/2+o(x^2)}{-b^2x^2/2+o(x^2)}\\to\\dfrac{4}{9}=\\dfrac{4}{9}$.",
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
  "explain": "Đặt $u=Ax$: $e^u-1=u+\\dfrac{u^2}{2}+o(u^2)$ và $\\sin u=u+o(u^2)$.<br>$(e^u-1)-\\sin u=(u+\\dfrac{u^2}{2}+o(u^2))-(u+o(u^2))=\\dfrac{u^2}{2}+o(u^2)=\\dfrac{A^2x^2}{2}+o(x^2)$.<br>Chia cả tử và mẫu cho $x^2$: $\\lim=\\dfrac{A^2/2+o(1)}{1}=\\dfrac{4}{2}=2$.",
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
  "explain": "Đặt $u=Ax$. Quy đồng: $\\dfrac1{\\sin^2u}-\\dfrac1{u^2}=\\dfrac{u^2-\\sin^2u}{u^2\\sin^2u}$.<br>$\\sin^2u=(u-\\dfrac{u^3}{6}+o(u^3))^2=u^2-\\dfrac{u^4}{3}+o(u^4)$; do đó $u^2-\\sin^2u=\\dfrac{u^4}{3}+o(u^4)$ và $u^2\\sin^2u=u^4+o(u^4)$.<br>$\\lim_{u\\to0}\\dfrac{u^4/3+o(u^4)}{u^4+o(u^4)}=\\dfrac13=\\dfrac{1}{3}$.",
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
  "explain": "Đặt $u=3x$. Khi đó $\\sin u=u-\\dfrac{u^3}{6}+o(u^3)$ và $u\\cos u=u-\\dfrac{u^3}{2}+o(u^3)$.<br>$\\sin u-u\\cos u=(u-\\dfrac{u^3}{6})-(u-\\dfrac{u^3}{2})+o(u^3)=(\\dfrac12-\\dfrac16)u^3+o(u^3)=\\dfrac{u^3}{3}+o(u^3)$.<br>$\\dfrac{\\sin(Ax)-Ax\\cos(Ax)}{x^3}=\\dfrac{A^3x^3/3+o(x^3)}{x^3}\\to\\dfrac{27}{3}=9$.",
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
  "explain": "$\\cos u=1-\\dfrac{u^2}{2}+o(u^2)$; với $w\\to0$, $\\ln(1+w)=w+o(w)$ nên $\\ln(\\cos u)=-\\dfrac{u^2}{2}+o(u^2)$.<br>Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\\dfrac{\\ln(\\cos Ax)}{\\ln(\\cos bx)}=\\dfrac{-A^2x^2/2+o(x^2)}{-b^2x^2/2+o(x^2)}\\to\\dfrac{9}{4}=\\dfrac{9}{4}$.",
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
  "explain": "Đặt $u=Ax$: $e^u-1=u+\\dfrac{u^2}{2}+o(u^2)$ và $\\sin u=u+o(u^2)$.<br>$(e^u-1)-\\sin u=(u+\\dfrac{u^2}{2}+o(u^2))-(u+o(u^2))=\\dfrac{u^2}{2}+o(u^2)=\\dfrac{A^2x^2}{2}+o(x^2)$.<br>Chia cả tử và mẫu cho $x^2$: $\\lim=\\dfrac{A^2/2+o(1)}{1}=\\dfrac{9}{2}=\\dfrac{9}{2}$.",
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
  "explain": "Đặt $u=Ax$. Quy đồng: $\\dfrac1{\\sin^2u}-\\dfrac1{u^2}=\\dfrac{u^2-\\sin^2u}{u^2\\sin^2u}$.<br>$\\sin^2u=(u-\\dfrac{u^3}{6}+o(u^3))^2=u^2-\\dfrac{u^4}{3}+o(u^4)$; do đó $u^2-\\sin^2u=\\dfrac{u^4}{3}+o(u^4)$ và $u^2\\sin^2u=u^4+o(u^4)$.<br>$\\lim_{u\\to0}\\dfrac{u^4/3+o(u^4)}{u^4+o(u^4)}=\\dfrac13=\\dfrac{1}{3}$.",
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
  "explain": "Đặt $u=x$. Khi đó $\\sin u=u-\\dfrac{u^3}{6}+o(u^3)$ và $u\\cos u=u-\\dfrac{u^3}{2}+o(u^3)$.<br>$\\sin u-u\\cos u=(u-\\dfrac{u^3}{6})-(u-\\dfrac{u^3}{2})+o(u^3)=(\\dfrac12-\\dfrac16)u^3+o(u^3)=\\dfrac{u^3}{3}+o(u^3)$.<br>$\\dfrac{\\sin(Ax)-Ax\\cos(Ax)}{x^3}=\\dfrac{A^3x^3/3+o(x^3)}{x^3}\\to\\dfrac{1}{3}=\\dfrac{1}{3}$.",
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
  "explain": "$\\cos u=1-\\dfrac{u^2}{2}+o(u^2)$; với $w\\to0$, $\\ln(1+w)=w+o(w)$ nên $\\ln(\\cos u)=-\\dfrac{u^2}{2}+o(u^2)$.<br>Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\\dfrac{\\ln(\\cos Ax)}{\\ln(\\cos bx)}=\\dfrac{-A^2x^2/2+o(x^2)}{-b^2x^2/2+o(x^2)}\\to\\dfrac{1}{4}=\\dfrac{1}{4}$.",
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
  "explain": "Đặt $u=Ax$: $e^u-1=u+\\dfrac{u^2}{2}+o(u^2)$ và $\\sin u=u+o(u^2)$.<br>$(e^u-1)-\\sin u=(u+\\dfrac{u^2}{2}+o(u^2))-(u+o(u^2))=\\dfrac{u^2}{2}+o(u^2)=\\dfrac{A^2x^2}{2}+o(x^2)$.<br>Chia cả tử và mẫu cho $x^2$: $\\lim=\\dfrac{A^2/2+o(1)}{1}=\\dfrac{1}{2}=\\dfrac{1}{2}$.",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-021"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\left(\\dfrac{1}{\\sin^2 2x} - \\dfrac{1}{4x^2}\\right)$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{3}$.",
   "$0$.",
   "$\\dfrac{1}{6}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Đặt $u=Ax$. Quy đồng: $\\dfrac1{\\sin^2u}-\\dfrac1{u^2}=\\dfrac{u^2-\\sin^2u}{u^2\\sin^2u}$.<br>$\\sin^2u=(u-\\dfrac{u^3}{6}+o(u^3))^2=u^2-\\dfrac{u^4}{3}+o(u^4)$; do đó $u^2-\\sin^2u=\\dfrac{u^4}{3}+o(u^4)$ và $u^2\\sin^2u=u^4+o(u^4)$.<br>$\\lim_{u\\to0}\\dfrac{u^4/3+o(u^4)}{u^4+o(u^4)}=\\dfrac13=\\dfrac{1}{3}$.",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-022"
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
  "explain": "Đặt $u=2x$. Khi đó $\\sin u=u-\\dfrac{u^3}{6}+o(u^3)$ và $u\\cos u=u-\\dfrac{u^3}{2}+o(u^3)$.<br>$\\sin u-u\\cos u=(u-\\dfrac{u^3}{6})-(u-\\dfrac{u^3}{2})+o(u^3)=(\\dfrac12-\\dfrac16)u^3+o(u^3)=\\dfrac{u^3}{3}+o(u^3)$.<br>$\\dfrac{\\sin(Ax)-Ax\\cos(Ax)}{x^3}=\\dfrac{A^3x^3/3+o(x^3)}{x^3}\\to\\dfrac{8}{3}=\\dfrac{8}{3}$.",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-023"
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
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-024"
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
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-025"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty} x\\left(\\sqrt{x^2 + 6x} - x - 3\\right)$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$- \\dfrac{9}{2}$.",
   "$\\dfrac{9}{2}$.",
   "$0$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "Nhân liên hợp: $\\sqrt{x^2 + 6x} - (x + 3) = \\dfrac{(x^2 + 6x) - (x + 3)^2}{\\sqrt{x^2 + 6x} + x + 3} = \\dfrac{-9}{\\sqrt{x^2 + 6x} + x + 3}$<br>$\\lim = \\lim\\limits_{x\\to+\\infty}\\dfrac{-9x}{\\sqrt{x^2 + 6x} + x + 3} = \\dfrac{-9}{1 + 1} = - \\dfrac{9}{2}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-026"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + 4x) - 4x}{x^2}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$-8$.",
   "$8$.",
   "$-4$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "$\\ln(1 + u) = u - \\dfrac{u^2}{2} + o(u^2)$, $u = 4x$<br>$\\ln(1 + 4x) - 4x = -\\dfrac{16x^2}{2} + o(x^2)$<br>$\\lim = -\\dfrac{16}{2} = -8$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-027"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(\\cos 3x)}{\\ln(\\cos 3x)}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$1$.",
   "$2$.",
   "$-1$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$\\cos u=1-\\dfrac{u^2}{2}+o(u^2)$; với $w\\to0$, $\\ln(1+w)=w+o(w)$ nên $\\ln(\\cos u)=-\\dfrac{u^2}{2}+o(u^2)$.<br>Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\\dfrac{\\ln(\\cos Ax)}{\\ln(\\cos bx)}=\\dfrac{-A^2x^2/2+o(x^2)}{-b^2x^2/2+o(x^2)}\\to\\dfrac{9}{9}=1$.",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-028"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{3x} - e^{-3x} - 6x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$54$.",
   "$27$.",
   "$6$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "$e^{u} - e^{-u} - 2u = 2\\left(u + \\dfrac{u^3}{6}\\right) - 2u + o(u^3) = \\dfrac{u^3}{3} + o(u^3)$, $u = 3x$<br>$x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{27/3}{1/6} = 54$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-029"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}(1 + 3x)^{\\frac{1}{\\sin 2x}}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$e^{\\dfrac{3}{2}}$.",
   "$e^{3}$.",
   "$e^{\\dfrac{2}{3}}$.",
   "$e^{6}$."
  ],
  "answer": 0,
  "explain": "$(1 + 3x)^{\\frac{1}{\\sin 2x}} = e^{\\frac{\\ln(1 + 3x)}{\\sin 2x}}$<br>$\\ln(1 + 3x) \\sim 3x,\\ \\sin 2x \\sim 2x \\Rightarrow \\dfrac{\\ln(1 + 3x)}{\\sin 2x} \\to \\dfrac{3}{2}$<br>$\\lim = e^{\\dfrac{3}{2}}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-030"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 4x - \\sin 4x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$32$.",
   "$\\dfrac{32}{3}$.",
   "$2$.",
   "$64$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 4x$: $\\tan u - \\sin u = \\tan u\\,(1 - \\cos u) \\sim u\\cdot\\dfrac{u^2}{2} = \\dfrac{u^3}{2}$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(4x)^3}{2x^3} = \\dfrac{64}{2} = 32$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-031"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{3x} - 1 - 3x}{1 - \\cos 3x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$1$.",
   "$\\dfrac{1}{2}$.",
   "$3$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$e^{u} - 1 - u \\sim \\dfrac{u^2}{2} \\Rightarrow$ tử số $\\sim \\dfrac{(3x)^2}{2}$<br>$1 - \\cos v \\sim \\dfrac{v^2}{2} \\Rightarrow$ mẫu số $\\sim \\dfrac{(3x)^2}{2}$<br>$\\lim = \\dfrac{9}{9} = 1$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-032"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}(\\cos x)^{\\frac{3}{x^2}}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$e^{- \\dfrac{3}{2}}$.",
   "$1$.",
   "$e^{-3}$.",
   "$e^{\\dfrac{3}{2}}$."
  ],
  "answer": 0,
  "explain": "$(\\cos x)^{\\frac{3}{x^2}} = e^{\\frac{3\\ln\\cos x}{x^2}}$<br>$\\ln\\cos x = \\ln\\left(1 - \\dfrac{x^2}{2} + o(x^2)\\right) \\sim -\\dfrac{x^2}{2}$<br>$\\lim\\limits_{x\\to0}\\dfrac{3\\ln\\cos x}{x^2} = -\\dfrac{3}{2} \\Rightarrow \\lim = e^{-\\frac{3}{2}}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-033"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty} x\\left(\\sqrt{x^2 + 8x} - x - 4\\right)$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$-8$.",
   "$8$.",
   "$0$.",
   "$-4$."
  ],
  "answer": 0,
  "explain": "Nhân liên hợp: $\\sqrt{x^2 + 8x} - (x + 4) = \\dfrac{(x^2 + 8x) - (x + 4)^2}{\\sqrt{x^2 + 8x} + x + 4} = \\dfrac{-16}{\\sqrt{x^2 + 8x} + x + 4}$<br>$\\lim = \\lim\\limits_{x\\to+\\infty}\\dfrac{-16x}{\\sqrt{x^2 + 8x} + x + 4} = \\dfrac{-16}{1 + 1} = -8$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-034"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + 3x) - 3x}{x^2}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$- \\dfrac{9}{2}$.",
   "$\\dfrac{9}{2}$.",
   "$-3$.",
   "$- \\dfrac{3}{2}$."
  ],
  "answer": 0,
  "explain": "$\\ln(1 + u) = u - \\dfrac{u^2}{2} + o(u^2)$, $u = 3x$<br>$\\ln(1 + 3x) - 3x = -\\dfrac{9x^2}{2} + o(x^2)$<br>$\\lim = -\\dfrac{9}{2} = - \\dfrac{9}{2}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-035"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(\\cos 2x)}{\\ln(\\cos 2x)}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$1$.",
   "$2$.",
   "$-1$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$\\cos u=1-\\dfrac{u^2}{2}+o(u^2)$; với $w\\to0$, $\\ln(1+w)=w+o(w)$ nên $\\ln(\\cos u)=-\\dfrac{u^2}{2}+o(u^2)$.<br>Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\\dfrac{\\ln(\\cos Ax)}{\\ln(\\cos bx)}=\\dfrac{-A^2x^2/2+o(x^2)}{-b^2x^2/2+o(x^2)}\\to\\dfrac{4}{4}=1$.",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-036"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{2x} - e^{-2x} - 4x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$16$.",
   "$8$.",
   "$4$.",
   "$\\dfrac{8}{3}$."
  ],
  "answer": 0,
  "explain": "$e^{u} - e^{-u} - 2u = 2\\left(u + \\dfrac{u^3}{6}\\right) - 2u + o(u^3) = \\dfrac{u^3}{3} + o(u^3)$, $u = 2x$<br>$x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{8/3}{1/6} = 16$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-037"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}(1 + 2x)^{\\frac{1}{\\sin 2x}}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$e$.",
   "$e^{2}$.",
   "$e^{4}$.",
   "$- e$."
  ],
  "answer": 0,
  "explain": "$(1 + 2x)^{\\frac{1}{\\sin 2x}} = e^{\\frac{\\ln(1 + 2x)}{\\sin 2x}}$<br>$\\ln(1 + 2x) \\sim 2x,\\ \\sin 2x \\sim 2x \\Rightarrow \\dfrac{\\ln(1 + 2x)}{\\sin 2x} \\to \\dfrac{2}{2}$<br>$\\lim = e^{1}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-038"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 2x - \\sin 2x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$4$.",
   "$\\dfrac{4}{3}$.",
   "$1$.",
   "$8$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 2x$: $\\tan u - \\sin u = \\tan u\\,(1 - \\cos u) \\sim u\\cdot\\dfrac{u^2}{2} = \\dfrac{u^3}{2}$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(2x)^3}{2x^3} = \\dfrac{8}{2} = 4$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-039"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{2x} - 1 - 2x}{1 - \\cos 2x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$1$.",
   "$\\dfrac{1}{2}$.",
   "$2$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$e^{u} - 1 - u \\sim \\dfrac{u^2}{2} \\Rightarrow$ tử số $\\sim \\dfrac{(2x)^2}{2}$<br>$1 - \\cos v \\sim \\dfrac{v^2}{2} \\Rightarrow$ mẫu số $\\sim \\dfrac{(2x)^2}{2}$<br>$\\lim = \\dfrac{4}{4} = 1$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-040"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}(\\cos x)^{\\frac{2}{x^2}}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$e^{-1}$.",
   "$1$.",
   "$e^{-2}$.",
   "$e$."
  ],
  "answer": 0,
  "explain": "$(\\cos x)^{\\frac{2}{x^2}} = e^{\\frac{2\\ln\\cos x}{x^2}}$<br>$\\ln\\cos x = \\ln\\left(1 - \\dfrac{x^2}{2} + o(x^2)\\right) \\sim -\\dfrac{x^2}{2}$<br>$\\lim\\limits_{x\\to0}\\dfrac{2\\ln\\cos x}{x^2} = -\\dfrac{2}{2} \\Rightarrow \\lim = e^{-\\frac{2}{2}}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-041"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to +\\infty} x\\left(\\sqrt{x^2 + 4x} - x - 2\\right)$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$-2$.",
   "$2$.",
   "$0$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Nhân liên hợp: $\\sqrt{x^2 + 4x} - (x + 2) = \\dfrac{(x^2 + 4x) - (x + 2)^2}{\\sqrt{x^2 + 4x} + x + 2} = \\dfrac{-4}{\\sqrt{x^2 + 4x} + x + 2}$<br>$\\lim = \\lim\\limits_{x\\to+\\infty}\\dfrac{-4x}{\\sqrt{x^2 + 4x} + x + 2} = \\dfrac{-4}{1 + 1} = -2$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-042"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(1 + 2x) - 2x}{x^2}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$-2$.",
   "$2$.",
   "$-1$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$\\ln(1 + u) = u - \\dfrac{u^2}{2} + o(u^2)$, $u = 2x$<br>$\\ln(1 + 2x) - 2x = -\\dfrac{4x^2}{2} + o(x^2)$<br>$\\lim = -\\dfrac{4}{2} = -2$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-043"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\ln(\\cos x)}{\\ln(\\cos 3x)}$ bằng<span class=\"q-hint\">Gợi ý: dạng vô định này cần khai triển Maclaurin đến bậc đủ cao hoặc dùng quy tắc L’Hôpital nhiều lần.</span>",
  "options": [
   "$\\dfrac{1}{9}$.",
   "$\\dfrac{1}{3}$.",
   "$1$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "$\\cos u=1-\\dfrac{u^2}{2}+o(u^2)$; với $w\\to0$, $\\ln(1+w)=w+o(w)$ nên $\\ln(\\cos u)=-\\dfrac{u^2}{2}+o(u^2)$.<br>Đặt $u=Ax$ ở tử và $v=bx$ ở mẫu: $\\dfrac{\\ln(\\cos Ax)}{\\ln(\\cos bx)}=\\dfrac{-A^2x^2/2+o(x^2)}{-b^2x^2/2+o(x^2)}\\to\\dfrac{1}{9}=\\dfrac{1}{9}$.",
  "note": "Khai triển tử và mẫu đến bậc đầu tiên khác 0; dừng sớm sẽ lại gặp dạng $\\dfrac00$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-044"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{4x} - e^{-4x} - 8x}{x - \\sin x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$128$.",
   "$64$.",
   "$8$.",
   "$\\dfrac{64}{3}$."
  ],
  "answer": 0,
  "explain": "$e^{u} - e^{-u} - 2u = 2\\left(u + \\dfrac{u^3}{6}\\right) - 2u + o(u^3) = \\dfrac{u^3}{3} + o(u^3)$, $u = 4x$<br>$x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$<br>$\\lim = \\dfrac{64/3}{1/6} = 128$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-045"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}(1 + 4x)^{\\frac{1}{\\sin 2x}}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$e^{2}$.",
   "$e^{4}$.",
   "$e^{\\dfrac{1}{2}}$.",
   "$e^{8}$."
  ],
  "answer": 0,
  "explain": "$(1 + 4x)^{\\frac{1}{\\sin 2x}} = e^{\\frac{\\ln(1 + 4x)}{\\sin 2x}}$<br>$\\ln(1 + 4x) \\sim 4x,\\ \\sin 2x \\sim 2x \\Rightarrow \\dfrac{\\ln(1 + 4x)}{\\sin 2x} \\to \\dfrac{4}{2}$<br>$\\lim = e^{2}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-046"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{\\tan 3x - \\sin 3x}{x^3}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$\\dfrac{27}{2}$.",
   "$\\dfrac{9}{2}$.",
   "$\\dfrac{3}{2}$.",
   "$27$."
  ],
  "answer": 0,
  "explain": "Đặt $u = 3x$: $\\tan u - \\sin u = \\tan u\\,(1 - \\cos u) \\sim u\\cdot\\dfrac{u^2}{2} = \\dfrac{u^3}{2}$<br>$\\lim = \\lim\\limits_{x\\to0}\\dfrac{(3x)^3}{2x^3} = \\dfrac{27}{2} = \\dfrac{27}{2}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-047"
 },
 {
  "q": "Giới hạn $\\lim\\limits_{x\\to 0}\\dfrac{e^{4x} - 1 - 4x}{1 - \\cos 3x}$ bằng<span class=\"q-hint\">Gợi ý: có thể dùng vô cùng bé tương đương, khai triển Maclaurin hoặc quy tắc L’Hôpital.</span>",
  "options": [
   "$\\dfrac{16}{9}$.",
   "$\\dfrac{4}{3}$.",
   "$\\dfrac{8}{9}$.",
   "$\\dfrac{16}{3}$."
  ],
  "answer": 0,
  "explain": "$e^{u} - 1 - u \\sim \\dfrac{u^2}{2} \\Rightarrow$ tử số $\\sim \\dfrac{(4x)^2}{2}$<br>$1 - \\cos v \\sim \\dfrac{v^2}{2} \\Rightarrow$ mẫu số $\\sim \\dfrac{(3x)^2}{2}$<br>$\\lim = \\dfrac{16}{9} = \\dfrac{16}{9}$",
  "note": "Thay vô cùng bé tương đương chỉ dùng được trong tích và thương; với hiệu hai vô cùng bé cùng bậc phải khai triển Maclaurin đến bậc cao hơn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-048"
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
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-049"
 },
 {
  "q": "Cho hàm số $f$ liên tục trên đoạn $[a;b]$. Phát biểu nào sau đây là đúng?",
  "options": [
   "Nếu $f(a)\\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc $(a;b)$.",
   "Nếu $f(a)\\cdot f(b) > 0$ thì phương trình $f(x) = 0$ vô nghiệm trên $(a;b)$.",
   "$f$ có đạo hàm tại mọi điểm thuộc $(a;b)$.",
   "$f$ có thể không bị chặn trên $[a;b]$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> Nếu $f(a)\\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc $(a;b)$. Đây là định lí giá trị trung gian (Bolzano – Cauchy).<br><b>Sai:</b> Nếu $f(a)\\cdot f(b) > 0$ thì phương trình $f(x) = 0$ vô nghiệm trên $(a;b)$. $f(x) = x^2 - 1$ trên $[-2;2]$ có $f(-2)f(2) > 0$ nhưng vẫn có nghiệm $x = \\pm1$.<br><b>Sai:</b> $f$ có đạo hàm tại mọi điểm thuộc $(a;b)$. $f(x) = |x|$ liên tục trên $[-1;1]$ nhưng không có đạo hàm tại $0$.<br><b>Sai:</b> $f$ có thể không bị chặn trên $[a;b]$. Hàm liên tục trên một đoạn thì bị chặn và đạt giá trị lớn nhất, nhỏ nhất (định lí Weierstrass).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-050"
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
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-051"
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
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-052"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{2 x - 8}{x^{2} + x - 2}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{2 \\left(x - 4\\right)}{\\left(x - 1\\right) \\left(x + 2\\right)}=\\dfrac{2 \\left(x - 4\\right)}{\\left(x - 1\\right) \\left(x + 2\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-2$.; Tại $x=1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=1$..<br>Chia đa thức: $\\dfrac{2 x - 8}{x^{2} + x - 2}=0+\\dfrac{2 x - 8}{x^{2} + x - 2}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-053"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 2}}{x + 2}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Khi $x\\to-2$, tử số $\\sqrt{x^2+c}\\to\\sqrt{r^2+c}>0$ còn $x-r\\to0$, nên $x=-2$ là tiệm cận đứng. Khi $x\\to+\\infty$, $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{\\sqrt{1+c/x^2}}{1-r/x}\\to1$; khi $x\\to-\\infty$, viết $|x|=-x$ được $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{-\\sqrt{1+c/x^2}}{1-r/x}\\to-1$. Vậy có hai tiệm cận ngang $y=1$ và $y=-1$; tổng cộng $3$<br>Kết quả: $3$",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-054"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} - 4}{x^{2} - x - 6}$ là",
  "options": [
   "$2$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 2\\right) \\left(x + 2\\right)}{\\left(x - 3\\right) \\left(x + 2\\right)}=\\dfrac{x - 2}{x - 3}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-2$, tử cũng bằng $0$ nên nhân tử $(x--2)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=3$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=3$..<br>Chia đa thức: $\\dfrac{x - 2}{x - 3}=1+\\dfrac{1}{x - 3}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 2.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-055"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} - 3 x^{2} - 4 x + 12}{x^{2} - 2 x - 3}$ là",
  "options": [
   "$2$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 3\\right) \\left(x - 2\\right) \\left(x + 2\\right)}{\\left(x - 3\\right) \\left(x + 1\\right)}=\\dfrac{\\left(x - 2\\right) \\left(x + 2\\right)}{x + 1}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=3$, tử cũng bằng $0$ nên nhân tử $(x-3)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$..<br>Chia đa thức: $\\dfrac{x^{2} - 4}{x + 1}=x - 1+\\dfrac{-3}{x + 1}$. Vì thương có bậc 1, đường thẳng $y=<q>$ là tiệm cận xiên.<br>Số đường tiệm cận: 2.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-056"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{2 x + 6}{x^{2} + 3 x + 2}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{2 \\left(x + 3\\right)}{\\left(x + 1\\right) \\left(x + 2\\right)}=\\dfrac{2 \\left(x + 3\\right)}{\\left(x + 1\\right) \\left(x + 2\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$.; Tại $x=-2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-2$..<br>Chia đa thức: $\\dfrac{2 x + 6}{x^{2} + 3 x + 2}=0+\\dfrac{2 x + 6}{x^{2} + 3 x + 2}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-057"
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
  "explain": "Khi $x\\to1$, tử số $\\sqrt{x^2+c}\\to\\sqrt{r^2+c}>0$ còn $x-r\\to0$, nên $x=1$ là tiệm cận đứng. Khi $x\\to+\\infty$, $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{\\sqrt{1+c/x^2}}{1-r/x}\\to1$; khi $x\\to-\\infty$, viết $|x|=-x$ được $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{-\\sqrt{1+c/x^2}}{1-r/x}\\to-1$. Vậy có hai tiệm cận ngang $y=1$ và $y=-1$; tổng cộng $3$<br>Kết quả: $3$",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-058"
 },
 {
  "q": "Xét việc dùng quy tắc L’Hôpital để tính $\\lim\\limits_{x\\to x_0}\\dfrac{f(x)}{g(x)}$. Phát biểu nào sau đây là đúng?",
  "options": [
   "Quy tắc chỉ áp dụng trực tiếp cho các dạng vô định $\\dfrac00$ và $\\dfrac{\\infty}{\\infty}$.",
   "Với mọi $f, g$ khả vi luôn có $\\lim\\dfrac{f(x)}{g(x)} = \\lim\\dfrac{f'(x)}{g'(x)}$.",
   "$\\lim\\dfrac{f(x)}{g(x)} = \\lim\\left(\\dfrac{f(x)}{g(x)}\\right)'$.",
   "Nếu $\\lim\\dfrac{f'(x)}{g'(x)}$ không tồn tại thì $\\lim\\dfrac{f(x)}{g(x)}$ cũng không tồn tại."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> Quy tắc chỉ áp dụng trực tiếp cho các dạng vô định $\\dfrac00$ và $\\dfrac{\\infty}{\\infty}$. Đó là giả thiết của định lí; các dạng vô định khác phải được biến đổi về một trong hai dạng này.<br><b>Sai:</b> Với mọi $f, g$ khả vi luôn có $\\lim\\dfrac{f(x)}{g(x)} = \\lim\\dfrac{f'(x)}{g'(x)}$. $\\lim\\limits_{x\\to0}\\dfrac{x + 1}{x + 2} = \\dfrac12$, trong khi $\\dfrac{f'}{g'} = 1$.<br><b>Sai:</b> $\\lim\\dfrac{f(x)}{g(x)} = \\lim\\left(\\dfrac{f(x)}{g(x)}\\right)'$. Phải lấy đạo hàm riêng tử và riêng mẫu, không phải đạo hàm của thương.<br><b>Sai:</b> Nếu $\\lim\\dfrac{f'(x)}{g'(x)}$ không tồn tại thì $\\lim\\dfrac{f(x)}{g(x)}$ cũng không tồn tại. $\\lim\\limits_{x\\to+\\infty}\\dfrac{x + \\sin x}{x} = 1$ dù $\\dfrac{1 + \\cos x}{1}$ không có giới hạn.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-059"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} - 2 x^{2} - 16 x + 32}{x^{2} - 4}$ là",
  "options": [
   "$2$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 4\\right) \\left(x - 2\\right) \\left(x + 4\\right)}{\\left(x - 2\\right) \\left(x + 2\\right)}=\\dfrac{\\left(x - 4\\right) \\left(x + 4\\right)}{x + 2}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=2$, tử cũng bằng $0$ nên nhân tử $(x-2)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=-2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-2$..<br>Chia đa thức: $\\dfrac{x^{2} - 16}{x + 2}=x - 2+\\dfrac{-12}{x + 2}$. Vì thương có bậc 1, đường thẳng $y=<q>$ là tiệm cận xiên.<br>Số đường tiệm cận: 2.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-060"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{3 x - 6}{x^{2} + 3 x + 2}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{3 \\left(x - 2\\right)}{\\left(x + 1\\right) \\left(x + 2\\right)}=\\dfrac{3 \\left(x - 2\\right)}{\\left(x + 1\\right) \\left(x + 2\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$.; Tại $x=-2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-2$..<br>Chia đa thức: $\\dfrac{3 x - 6}{x^{2} + 3 x + 2}=0+\\dfrac{3 x - 6}{x^{2} + 3 x + 2}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-061"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 1}}{x - 1}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Khi $x\\to1$, tử số $\\sqrt{x^2+c}\\to\\sqrt{r^2+c}>0$ còn $x-r\\to0$, nên $x=1$ là tiệm cận đứng. Khi $x\\to+\\infty$, $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{\\sqrt{1+c/x^2}}{1-r/x}\\to1$; khi $x\\to-\\infty$, viết $|x|=-x$ được $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{-\\sqrt{1+c/x^2}}{1-r/x}\\to-1$. Vậy có hai tiệm cận ngang $y=1$ và $y=-1$; tổng cộng $3$<br>Kết quả: $3$",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-062"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} - 4 x + 3}{x^{2} - 5 x + 6}$ là",
  "options": [
   "$2$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 3\\right) \\left(x - 1\\right)}{\\left(x - 3\\right) \\left(x - 2\\right)}=\\dfrac{x - 1}{x - 2}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=3$, tử cũng bằng $0$ nên nhân tử $(x-3)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=2$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=2$..<br>Chia đa thức: $\\dfrac{x - 1}{x - 2}=1+\\dfrac{1}{x - 2}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 2.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-063"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} - 2 x^{2} - 11 x + 12}{x^{2} - 4 x + 3}$ là",
  "options": [
   "$2$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 4\\right) \\left(x - 1\\right) \\left(x + 3\\right)}{\\left(x - 3\\right) \\left(x - 1\\right)}=\\dfrac{\\left(x - 4\\right) \\left(x + 3\\right)}{x - 3}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=1$, tử cũng bằng $0$ nên nhân tử $(x-1)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=3$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=3$..<br>Chia đa thức: $\\dfrac{x^{2} - x - 12}{x - 3}=x + 2+\\dfrac{-6}{x - 3}$. Vì thương có bậc 1, đường thẳng $y=<q>$ là tiệm cận xiên.<br>Số đường tiệm cận: 2.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-064"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{2 x - 2}{x^{2} - 2 x - 3}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{2 \\left(x - 1\\right)}{\\left(x - 3\\right) \\left(x + 1\\right)}=\\dfrac{2 \\left(x - 1\\right)}{\\left(x - 3\\right) \\left(x + 1\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=3$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=3$.; Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$..<br>Chia đa thức: $\\dfrac{2 x - 2}{x^{2} - 2 x - 3}=0+\\dfrac{2 x - 2}{x^{2} - 2 x - 3}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-065"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 4}}{x + 1}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Khi $x\\to-1$, tử số $\\sqrt{x^2+c}\\to\\sqrt{r^2+c}>0$ còn $x-r\\to0$, nên $x=-1$ là tiệm cận đứng. Khi $x\\to+\\infty$, $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{\\sqrt{1+c/x^2}}{1-r/x}\\to1$; khi $x\\to-\\infty$, viết $|x|=-x$ được $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{-\\sqrt{1+c/x^2}}{1-r/x}\\to-1$. Vậy có hai tiệm cận ngang $y=1$ và $y=-1$; tổng cộng $3$<br>Kết quả: $3$",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-066"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} - x - 12}{x^{2} + 4 x + 3}$ là",
  "options": [
   "$2$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 4\\right) \\left(x + 3\\right)}{\\left(x + 1\\right) \\left(x + 3\\right)}=\\dfrac{x - 4}{x + 1}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-3$, tử cũng bằng $0$ nên nhân tử $(x--3)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$..<br>Chia đa thức: $\\dfrac{x - 4}{x + 1}=1+\\dfrac{-5}{x + 1}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 2.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-067"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{3} + 11 x^{2} + 40 x + 48}{x^{2} + 4 x + 3}$ là",
  "options": [
   "$2$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x + 3\\right) \\left(x + 4\\right)^{2}}{\\left(x + 1\\right) \\left(x + 3\\right)}=\\dfrac{\\left(x + 4\\right)^{2}}{x + 1}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-3$, tử cũng bằng $0$ nên nhân tử $(x--3)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$..<br>Chia đa thức: $\\dfrac{x^{2} + 8 x + 16}{x + 1}=x + 7+\\dfrac{9}{x + 1}$. Vì thương có bậc 1, đường thẳng $y=<q>$ là tiệm cận xiên.<br>Số đường tiệm cận: 2.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-068"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{2 x + 6}{x^{2} - 2 x - 3}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{2 \\left(x + 3\\right)}{\\left(x - 3\\right) \\left(x + 1\\right)}=\\dfrac{2 \\left(x + 3\\right)}{\\left(x - 3\\right) \\left(x + 1\\right)}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=-1$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-1$.; Tại $x=3$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=3$..<br>Chia đa thức: $\\dfrac{2 x + 6}{x^{2} - 2 x - 3}=0+\\dfrac{2 x + 6}{x^{2} - 2 x - 3}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 3.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-069"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng và ngang) của đồ thị hàm số $y = \\dfrac{\\sqrt{x^2 + 4}}{x + 3}$ là",
  "options": [
   "$3$.",
   "$1$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Khi $x\\to-3$, tử số $\\sqrt{x^2+c}\\to\\sqrt{r^2+c}>0$ còn $x-r\\to0$, nên $x=-3$ là tiệm cận đứng. Khi $x\\to+\\infty$, $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{\\sqrt{1+c/x^2}}{1-r/x}\\to1$; khi $x\\to-\\infty$, viết $|x|=-x$ được $\\dfrac{\\sqrt{x^2+c}}{x-r}=\\dfrac{-\\sqrt{1+c/x^2}}{1-r/x}\\to-1$. Vậy có hai tiệm cận ngang $y=1$ và $y=-1$; tổng cộng $3$<br>Kết quả: $3$",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-070"
 },
 {
  "q": "Tổng số đường tiệm cận (đứng, ngang và xiên) của đồ thị hàm số $y = \\dfrac{x^{2} - 5 x + 6}{x^{2} - 9}$ là",
  "options": [
   "$2$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phân tích rồi khử nhân tử chung: $y=\\dfrac{\\left(x - 3\\right) \\left(x - 2\\right)}{\\left(x - 3\\right) \\left(x + 3\\right)}=\\dfrac{x - 2}{x + 3}$.<br>Kiểm tra điểm làm mẫu bằng $0$: Tại $x=3$, tử cũng bằng $0$ nên nhân tử $(x-3)$ bị khử; giới hạn hữu hạn, không là TCĐ.; Tại $x=-3$, tử khác $0$; mẫu tiến về $0$ nên có TCĐ $x=-3$..<br>Chia đa thức: $\\dfrac{x - 2}{x + 3}=1+\\dfrac{-5}{x + 3}$. Vì số hạng dư tiến về $0$, tiệm cận ngang là $y=<q>$.<br>Số đường tiệm cận: 2.",
  "note": "Tiệm cận đứng: nghiệm của mẫu không bị rút gọn với tử; tiệm cận ngang: xét riêng $x \\to +\\infty$ và $x \\to -\\infty$ (với căn thức, hai phía có thể khác nhau).",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-071"
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
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-001"
 },
 {
  "q": "Cho hàm số $f(x) = x^{2}e^{2x}$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$4 e^{2}$.",
   "$1 + 4 e^{2}$.",
   "$8 e^{2}$.",
   "$- 4 e^{2}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 2x^{1}e^{2x} + 2x^{2}e^{2x}$<br>$f'(1) = 4 e^{2}$",
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
  "q": "Cho đường cong $y = x^{2} + x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 2$ cắt trục $Oy$ tại điểm có tung độ bằng",
  "options": [
   "$-4$.",
   "$4$.",
   "$6$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "$y(2) = 6$, $y'(x) = 2 x + 1$, $y'(2) = 5$<br>Tiếp tuyến: $y = 5(x - 2) + 6$<br>Tại $x = 0$: $y = -4$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-004"
 },
 {
  "q": "Cho hàm số $f(x) = \\sin(2x^2 + 1)$. Giá trị của $f'(0)$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$4 \\cos{\\left(1 \\right)}$.",
   "$\\cos{\\left(1 \\right)}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos(2x^2 + 1)\\cdot 4x$<br>$f'(0) = \\cos(1)\\cdot0 = 0$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-005"
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
  "explain": "$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=x - \\dfrac{2}{3}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $- \\dfrac{2}{3}$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-006"
 },
 {
  "q": "Cho hàm số $f(x) = \\ln(x^2 + 4x + 10)$. Giá trị của $f'(2)$ bằng",
  "options": [
   "$\\dfrac{4}{11}$.",
   "$\\dfrac{2}{11}$.",
   "$\\dfrac{4}{7}$.",
   "$- \\dfrac{4}{11}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2x + 4}{x^2 + 4x + 10}$<br>$f'(2) = \\dfrac{8}{22} = \\dfrac{4}{11}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-007"
 },
 {
  "q": "Cho hàm số $f(x) = x^{4} + x$. Vi phân $dy$ tại $x_0 = 1$ với $dx = \\dfrac{1}{100}$ bằng",
  "options": [
   "$\\dfrac{1}{20}$.",
   "$- \\dfrac{1}{20}$.",
   "$\\dfrac{1}{10}$.",
   "$\\dfrac{5060401}{100000000}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 4 x^{3} + 1$<br>$dy = f'(1)\\\\cdot dx = 5\\\\cdot\\dfrac{1}{100} = \\dfrac{1}{20}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-008"
 },
 {
  "q": "Cho hàm số $f(x) = \\arcsin(2x)$. Giá trị của $f'(x_0)$ tại $x_0 = \\dfrac{3}{10}$ bằng",
  "options": [
   "$\\dfrac{5}{2}$.",
   "$- \\dfrac{5}{2}$.",
   "$5$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2}{\\sqrt{1 - 4\\cdotx^2}}$<br>Tại $x_0 = \\dfrac{3}{10}$: $\\sqrt{1 - 4\\cdotx_0^2} = \\dfrac{4}{5}$; $f'(x_0) = \\dfrac{5}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-009"
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
  "explain": "$V = \\dfrac{4}{3}\\pi r^3 \\Rightarrow dV = 4\\pi r^2\\\\,dr$<br>$\\dfrac{|dV|}{V} = \\dfrac{4\\pi r^2\\\\,|dr|}{\\frac{4}{3}\\pi r^3} = \\dfrac{3|dr|}{r} = \\dfrac{3\\cdot\\dfrac{1}{2}}{20} = \\dfrac{3}{40}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-010"
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
  "explain": "$e^{- 2 x^{2}} = 1 - 2x^{2} + 2x^{4} + o(x^{5})$<br>$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + \\dfrac{1}{120}x^{5} + o(x^{5})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 5: $f(x)=x - \\dfrac{13}{6}x^{3} + \\dfrac{281}{120}x^{5}+o(x^{5})$.<br>Đọc hệ số của $x^{5}$ từ tổng các tích cùng bậc vừa thu được: $\\dfrac{281}{120}$.",
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
  "q": "Cho hàm số $f(x) = x^{3}e^{x}$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$4 e$.",
   "$1 + 4 e$.",
   "$8 e$.",
   "$- 4 e$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 3x^{2}e^{x} + x^{3}e^{x}$<br>$f'(1) = 4 e$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-013"
 },
 {
  "q": "Cho đường cong $y = 2 x^{2} + x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 1$ cắt trục $Oy$ tại điểm có tung độ bằng",
  "options": [
   "$-2$.",
   "$2$.",
   "$3$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "$y(1) = 3$, $y'(x) = 4 x + 1$, $y'(1) = 5$<br>Tiếp tuyến: $y = 5(x - 1) + 3$<br>Tại $x = 0$: $y = -2$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-014"
 },
 {
  "q": "Cho hàm số $f(x) = \\sin(2x^2 + 3)$. Giá trị của $f'(0)$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$4 \\cos{\\left(3 \\right)}$.",
   "$\\cos{\\left(3 \\right)}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos(2x^2 + 3)\\cdot 4x$<br>$f'(0) = \\cos(3)\\cdot0 = 0$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-015"
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
  "explain": "Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=4x - 4x^{2} + \\dfrac{28}{3}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $\\dfrac{28}{3}$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-016"
 },
 {
  "q": "Cho hàm số $f(x) = \\ln(x^2 + 2x + 5)$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$\\dfrac{1}{4}$.",
   "$\\dfrac{2}{3}$.",
   "$- \\dfrac{1}{2}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2x + 2}{x^2 + 2x + 5}$<br>$f'(1) = \\dfrac{4}{8} = \\dfrac{1}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-017"
 },
 {
  "q": "Cho hàm số $f(x) = x + \\sin{\\left(x \\right)}$. Vi phân $dy$ tại $x_0 = 0$ với $dx = \\dfrac{1}{10}$ bằng",
  "options": [
   "$\\dfrac{1}{5}$.",
   "$- \\dfrac{1}{5}$.",
   "$\\dfrac{2}{5}$.",
   "$\\sin{\\left(\\dfrac{1}{10} \\right)} + \\dfrac{1}{10}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos{\\left(x \\right)} + 1$<br>$dy = f'(0)\\\\cdot dx = 2\\\\cdot\\dfrac{1}{10} = \\dfrac{1}{5}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-018"
 },
 {
  "q": "Cho hàm số $f(x) = \\arcsin(x)$. Giá trị của $f'(x_0)$ tại $x_0 = \\dfrac{4}{5}$ bằng",
  "options": [
   "$\\dfrac{5}{3}$.",
   "$- \\dfrac{5}{3}$.",
   "$\\dfrac{10}{3}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{1}{\\sqrt{1 - x^2}}$<br>Tại $x_0 = \\dfrac{4}{5}$: $\\sqrt{1 - x_0^2} = \\dfrac{3}{5}$; $f'(x_0) = \\dfrac{5}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-019"
 },
 {
  "q": "Dùng vi phân để ước tính sai số tương đối $\\dfrac{|\\Delta V|}{V}$ của thể tích hình cầu bán kính $r = 10$ cm khi sai số đo bán kính là $|\\Delta r| \\le \\dfrac{1}{2}$ cm",
  "options": [
   "$\\dfrac{3}{20}$.",
   "$\\dfrac{3}{40}$.",
   "$\\dfrac{3}{10}$.",
   "$\\dfrac{1}{20}$."
  ],
  "answer": 0,
  "explain": "$V = \\dfrac{4}{3}\\pi r^3 \\Rightarrow dV = 4\\pi r^2\\\\,dr$<br>$\\dfrac{|dV|}{V} = \\dfrac{4\\pi r^2\\\\,|dr|}{\\frac{4}{3}\\pi r^3} = \\dfrac{3|dr|}{r} = \\dfrac{3\\cdot\\dfrac{1}{2}}{10} = \\dfrac{3}{20}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-020"
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
  "explain": "$e^{- x^{2}} = 1 - x^{2} + \\dfrac{1}{2}x^{4} + o(x^{5})$<br>$\\sin{\\left(x \\right)} = x - \\dfrac{1}{6}x^{3} + \\dfrac{1}{120}x^{5} + o(x^{5})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 5: $f(x)=x - \\dfrac{7}{6}x^{3} + \\dfrac{27}{40}x^{5}+o(x^{5})$.<br>Đọc hệ số của $x^{5}$ từ tổng các tích cùng bậc vừa thu được: $\\dfrac{27}{40}$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-021"
 },
 {
  "q": "Cho hàm số $f(x) = x^{3}e^{-x}$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$\\dfrac{2}{e}$.",
   "$\\dfrac{2}{e} + 1$.",
   "$\\dfrac{4}{e}$.",
   "$- \\dfrac{2}{e}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 3x^{2}e^{-x} - x^{3}e^{-x}$<br>$f'(1) = \\dfrac{2}{e}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-022"
 },
 {
  "q": "Cho đường cong $y = x^{2} - x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 2$ cắt trục $Oy$ tại điểm có tung độ bằng",
  "options": [
   "$-4$.",
   "$4$.",
   "$2$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$y(2) = 2$, $y'(x) = 2 x - 1$, $y'(2) = 3$<br>Tiếp tuyến: $y = 3(x - 2) + 2$<br>Tại $x = 0$: $y = -4$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-023"
 },
 {
  "q": "Cho hàm số $f(x) = \\sin(3x^2 + 1)$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$6 \\cos{\\left(4 \\right)}$.",
   "$- 6 \\cos{\\left(4 \\right)}$.",
   "$6 \\cos{\\left(4 \\right)} + 1$.",
   "$6 \\cos{\\left(4 \\right)} - 36 \\sin{\\left(4 \\right)}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos(3x^2 + 1)\\cdot 6x$<br>$f'(1) = \\cos(4)\\cdot6 = 6 \\cos{\\left(4 \\right)}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-024"
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
  "explain": "$\\dfrac{1}{1 - 3 x} = 1 + 3x + 9x^{2} + 27x^{3} + 81x^{4} + o(x^{4})$<br>$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + x^{4} + o(x^{4})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 4: $f(x)=1 + 4x + 13x^{2} + 40x^{3} + 121x^{4}+o(x^{4})$.<br>Đọc hệ số của $x^{4}$ từ tổng các tích cùng bậc vừa thu được: $121$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-025"
 },
 {
  "q": "Cho hàm số $f(x) = \\ln(x^2 + 2x + 13)$. Giá trị của $f'(3)$ bằng",
  "options": [
   "$\\dfrac{2}{7}$.",
   "$\\dfrac{3}{14}$.",
   "$\\dfrac{4}{11}$.",
   "$- \\dfrac{2}{7}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2x + 2}{x^2 + 2x + 13}$<br>$f'(3) = \\dfrac{8}{28} = \\dfrac{2}{7}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-026"
 },
 {
  "q": "Cho hàm số $f(x) = x^{3} - 2 x$. Vi phân $dy$ tại $x_0 = 1$ với $dx = \\dfrac{1}{2}$ bằng",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$- \\dfrac{1}{2}$.",
   "$1$.",
   "$\\dfrac{11}{8}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 3 x^{2} - 2$<br>$dy = f'(1)\\\\cdot dx = 1\\\\cdot\\dfrac{1}{2} = \\dfrac{1}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-027"
 },
 {
  "q": "Cho hàm số $f(x) = \\arcsin(x)$. Giá trị của $f'(x_0)$ tại $x_0 = \\dfrac{12}{13}$ bằng",
  "options": [
   "$\\dfrac{13}{5}$.",
   "$- \\dfrac{13}{5}$.",
   "$\\dfrac{26}{5}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{1}{\\sqrt{1 - x^2}}$<br>Tại $x_0 = \\dfrac{12}{13}$: $\\sqrt{1 - x_0^2} = \\dfrac{5}{13}$; $f'(x_0) = \\dfrac{13}{5}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-028"
 },
 {
  "q": "Dùng vi phân để ước tính sai số tương đối $\\dfrac{|\\Delta V|}{V}$ của thể tích hình cầu bán kính $r = 20$ cm khi sai số đo bán kính là $|\\Delta r| \\le \\dfrac{1}{10}$ cm",
  "options": [
   "$\\dfrac{3}{200}$.",
   "$\\dfrac{3}{400}$.",
   "$\\dfrac{3}{100}$.",
   "$\\dfrac{1}{200}$."
  ],
  "answer": 0,
  "explain": "$V = \\dfrac{4}{3}\\pi r^3 \\Rightarrow dV = 4\\pi r^2\\\\,dr$<br>$\\dfrac{|dV|}{V} = \\dfrac{4\\pi r^2\\\\,|dr|}{\\frac{4}{3}\\pi r^3} = \\dfrac{3|dr|}{r} = \\dfrac{3\\cdot\\dfrac{1}{10}}{20} = \\dfrac{3}{200}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-029"
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
  "explain": "$\\dfrac{1}{1 - 4 x} = 1 + 4x + 16x^{2} + 64x^{3} + 256x^{4} + o(x^{4})$<br>$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + x^{4} + o(x^{4})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 4: $f(x)=1 + 5x + 21x^{2} + 85x^{3} + 341x^{4}+o(x^{4})$.<br>Đọc hệ số của $x^{4}$ từ tổng các tích cùng bậc vừa thu được: $341$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-030"
 },
 {
  "q": "Cho hàm số $f(x) = x^{2}e^{x}$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$3 e$.",
   "$1 + 3 e$.",
   "$6 e$.",
   "$- 3 e$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 2x^{1}e^{x} + x^{2}e^{x}$<br>$f'(1) = 3 e$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-031"
 },
 {
  "q": "Cho đường cong $y = 3 x^{2} + 2 x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 1$ cắt trục $Oy$ tại điểm có tung độ bằng",
  "options": [
   "$-3$.",
   "$3$.",
   "$5$.",
   "$8$."
  ],
  "answer": 0,
  "explain": "$y(1) = 5$, $y'(x) = 6 x + 2$, $y'(1) = 8$<br>Tiếp tuyến: $y = 8(x - 1) + 5$<br>Tại $x = 0$: $y = -3$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-032"
 },
 {
  "q": "Cho hàm số $f(x) = \\sin(4x^2 + 2)$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$8 \\cos{\\left(6 \\right)}$.",
   "$- 8 \\cos{\\left(6 \\right)}$.",
   "$\\dfrac{36 \\cdot 2^{\\dfrac{54}{97}} \\cdot 3^{\\dfrac{19}{194}} \\cdot 5^{\\dfrac{41}{194}} \\cdot 7^{\\dfrac{48}{97}}}{25}$.",
   "$8 \\cos{\\left(6 \\right)} - 64 \\sin{\\left(6 \\right)}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos(4x^2 + 2)\\cdot 8x$<br>$f'(1) = \\cos(6)\\cdot8 = 8 \\cos{\\left(6 \\right)}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-033"
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
  "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\ln\\left(3 x + 1\\right) = 3x - \\dfrac{9}{2}x^{2} + 9x^{3} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=3x - \\dfrac{3}{2}x^{2} + 6x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $6$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-034"
 },
 {
  "q": "Cho hàm số $f(x) = \\ln(x^2 + 2x + 5)$. Giá trị của $f'(2)$ bằng",
  "options": [
   "$\\dfrac{6}{13}$.",
   "$\\dfrac{4}{13}$.",
   "$\\dfrac{2}{3}$.",
   "$- \\dfrac{6}{13}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2x + 2}{x^2 + 2x + 5}$<br>$f'(2) = \\dfrac{6}{13} = \\dfrac{6}{13}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-035"
 },
 {
  "q": "Cho hàm số $f(x) = x + \\sin{\\left(x \\right)}$. Vi phân $dy$ tại $x_0 = 0$ với $dx = \\dfrac{1}{100}$ bằng",
  "options": [
   "$\\dfrac{1}{50}$.",
   "$- \\dfrac{1}{50}$.",
   "$\\dfrac{1}{25}$.",
   "$\\sin{\\left(\\dfrac{1}{100} \\right)} + \\dfrac{1}{100}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos{\\left(x \\right)} + 1$<br>$dy = f'(0)\\\\cdot dx = 2\\\\cdot\\dfrac{1}{100} = \\dfrac{1}{50}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-036"
 },
 {
  "q": "Cho hàm số $f(x) = \\arcsin(x)$. Giá trị của $f'(x_0)$ tại $x_0 = \\dfrac{5}{13}$ bằng",
  "options": [
   "$\\dfrac{13}{12}$.",
   "$- \\dfrac{13}{12}$.",
   "$\\dfrac{13}{6}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{1}{\\sqrt{1 - x^2}}$<br>Tại $x_0 = \\dfrac{5}{13}$: $\\sqrt{1 - x_0^2} = \\dfrac{12}{13}$; $f'(x_0) = \\dfrac{13}{12}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-037"
 },
 {
  "q": "Dùng vi phân để ước tính sai số tương đối $\\dfrac{|\\Delta V|}{V}$ của thể tích hình cầu bán kính $r = 5$ cm khi sai số đo bán kính là $|\\Delta r| \\le \\dfrac{1}{2}$ cm",
  "options": [
   "$\\dfrac{3}{10}$.",
   "$\\dfrac{3}{20}$.",
   "$\\dfrac{3}{5}$.",
   "$\\dfrac{1}{10}$."
  ],
  "answer": 0,
  "explain": "$V = \\dfrac{4}{3}\\pi r^3 \\Rightarrow dV = 4\\pi r^2\\\\,dr$<br>$\\dfrac{|dV|}{V} = \\dfrac{4\\pi r^2\\\\,|dr|}{\\frac{4}{3}\\pi r^3} = \\dfrac{3|dr|}{r} = \\dfrac{3\\cdot\\dfrac{1}{2}}{5} = \\dfrac{3}{10}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-038"
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
  "explain": "$\\dfrac{1}{1 - x} = 1 + x + x^{2} + x^{3} + o(x^{3})$<br>$e^{3 x} = 1 + 3x + \\dfrac{9}{2}x^{2} + \\dfrac{9}{2}x^{3} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=1 + 4x + \\dfrac{17}{2}x^{2} + 13x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $13$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-039"
 },
 {
  "q": "Cho hàm số $f(x) = x^{2}e^{2x}$. Giá trị của $f'(0)$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$2$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 2x^{1}e^{2x} + 2x^{2}e^{2x}$<br>$f'(0) = 0$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-040"
 },
 {
  "q": "Cho đường cong $y = 2 x^{2} + 2 x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 2$ cắt trục $Oy$ tại điểm có tung độ bằng",
  "options": [
   "$-8$.",
   "$8$.",
   "$12$.",
   "$10$."
  ],
  "answer": 0,
  "explain": "$y(2) = 12$, $y'(x) = 4 x + 2$, $y'(2) = 10$<br>Tiếp tuyến: $y = 10(x - 2) + 12$<br>Tại $x = 0$: $y = -8$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-041"
 },
 {
  "q": "Cho hàm số $f(x) = \\sin(4x^2 + 1)$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$8 \\cos{\\left(5 \\right)}$.",
   "$- 8 \\cos{\\left(5 \\right)}$.",
   "$1 + 8 \\cos{\\left(5 \\right)}$.",
   "$\\dfrac{875 \\cdot 2^{\\dfrac{19}{55}} \\cdot 3^{\\dfrac{34}{55}} \\cdot 5^{\\dfrac{12}{55}} \\cdot 7^{\\dfrac{61}{110}}}{144}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos(4x^2 + 1)\\cdot 8x$<br>$f'(1) = \\cos(5)\\cdot8 = 8 \\cos{\\left(5 \\right)}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-042"
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
  "explain": "$e^{x} = 1 + x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{6}x^{3} + o(x^{3})$<br>$\\ln\\left(x + 1\\right) = x - \\dfrac{1}{2}x^{2} + \\dfrac{1}{3}x^{3} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=x + \\dfrac{1}{2}x^{2} + \\dfrac{1}{3}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $\\dfrac{1}{3}$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-043"
 },
 {
  "q": "Cho hàm số $f(x) = \\ln(x^2 + 4x + 5)$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$\\dfrac{3}{5}$.",
   "$\\dfrac{1}{5}$.",
   "$1$.",
   "$- \\dfrac{3}{5}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2x + 4}{x^2 + 4x + 5}$<br>$f'(1) = \\dfrac{6}{10} = \\dfrac{3}{5}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-044"
 },
 {
  "q": "Cho hàm số $f(x) = x^{4} + x$. Vi phân $dy$ tại $x_0 = 1$ với $dx = \\dfrac{1}{2}$ bằng",
  "options": [
   "$\\dfrac{5}{2}$.",
   "$- \\dfrac{5}{2}$.",
   "$5$.",
   "$\\dfrac{73}{16}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 4 x^{3} + 1$<br>$dy = f'(1)\\\\cdot dx = 5\\\\cdot\\dfrac{1}{2} = \\dfrac{5}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-045"
 },
 {
  "q": "Cho hàm số $f(x) = \\arcsin(2x)$. Giá trị của $f'(x_0)$ tại $x_0 = \\dfrac{2}{5}$ bằng",
  "options": [
   "$\\dfrac{10}{3}$.",
   "$- \\dfrac{10}{3}$.",
   "$\\dfrac{20}{3}$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2}{\\sqrt{1 - 4\\cdotx^2}}$<br>Tại $x_0 = \\dfrac{2}{5}$: $\\sqrt{1 - 4\\cdotx_0^2} = \\dfrac{3}{5}$; $f'(x_0) = \\dfrac{10}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-046"
 },
 {
  "q": "Dùng vi phân để ước tính sai số tương đối $\\dfrac{|\\Delta V|}{V}$ của thể tích hình cầu bán kính $r = 5$ cm khi sai số đo bán kính là $|\\Delta r| \\le \\dfrac{1}{10}$ cm",
  "options": [
   "$\\dfrac{3}{50}$.",
   "$\\dfrac{3}{100}$.",
   "$\\dfrac{3}{25}$.",
   "$\\dfrac{1}{50}$."
  ],
  "answer": 0,
  "explain": "$V = \\dfrac{4}{3}\\pi r^3 \\Rightarrow dV = 4\\pi r^2\\\\,dr$<br>$\\dfrac{|dV|}{V} = \\dfrac{4\\pi r^2\\\\,|dr|}{\\frac{4}{3}\\pi r^3} = \\dfrac{3|dr|}{r} = \\dfrac{3\\cdot\\dfrac{1}{10}}{5} = \\dfrac{3}{50}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-047"
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
  "explain": "$\\sin{\\left(3 x \\right)} = 3x - \\dfrac{9}{2}x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=3x - 6x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $-6$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-048"
 },
 {
  "q": "Cho hàm số $f(x) = x^{2}e^{-x}$. Giá trị của $f'(0)$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$2$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 2x^{1}e^{-x} - x^{2}e^{-x}$<br>$f'(0) = 0$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-049"
 },
 {
  "q": "Cho đường cong $y = 3 x^{2} + x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 2$ cắt trục $Oy$ tại điểm có tung độ bằng",
  "options": [
   "$-12$.",
   "$12$.",
   "$14$.",
   "$13$."
  ],
  "answer": 0,
  "explain": "$y(2) = 14$, $y'(x) = 6 x + 1$, $y'(2) = 13$<br>Tiếp tuyến: $y = 13(x - 2) + 14$<br>Tại $x = 0$: $y = -12$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-050"
 },
 {
  "q": "Cho hàm số $f(x) = \\sin(3x^2 + 2)$. Giá trị của $f'(0)$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$6 \\cos{\\left(2 \\right)}$.",
   "$\\cos{\\left(2 \\right)}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos(3x^2 + 2)\\cdot 6x$<br>$f'(0) = \\cos(2)\\cdot0 = 0$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-051"
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
  "explain": "Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=2x + \\dfrac{2}{3}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $\\dfrac{2}{3}$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-052"
 },
 {
  "q": "Cho hàm số $f(x) = \\ln(x^2 + 4x + 5)$. Giá trị của $f'(2)$ bằng",
  "options": [
   "$\\dfrac{8}{17}$.",
   "$\\dfrac{4}{17}$.",
   "$\\dfrac{8}{9}$.",
   "$- \\dfrac{8}{17}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2x + 4}{x^2 + 4x + 5}$<br>$f'(2) = \\dfrac{8}{17} = \\dfrac{8}{17}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-053"
 },
 {
  "q": "Cho hàm số $f(x) = x^{3} - 2 x$. Vi phân $dy$ tại $x_0 = 1$ với $dx = \\dfrac{1}{100}$ bằng",
  "options": [
   "$\\dfrac{1}{100}$.",
   "$- \\dfrac{1}{100}$.",
   "$\\dfrac{1}{50}$.",
   "$\\dfrac{10301}{1000000}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 3 x^{2} - 2$<br>$dy = f'(1)\\\\cdot dx = 1\\\\cdot\\dfrac{1}{100} = \\dfrac{1}{100}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-054"
 },
 {
  "q": "Cho hàm số $f(x) = \\arcsin(x)$. Giá trị của $f'(x_0)$ tại $x_0 = \\dfrac{3}{5}$ bằng",
  "options": [
   "$\\dfrac{5}{4}$.",
   "$- \\dfrac{5}{4}$.",
   "$\\dfrac{5}{2}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{1}{\\sqrt{1 - x^2}}$<br>Tại $x_0 = \\dfrac{3}{5}$: $\\sqrt{1 - x_0^2} = \\dfrac{4}{5}$; $f'(x_0) = \\dfrac{5}{4}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-055"
 },
 {
  "q": "Dùng vi phân để ước tính sai số tương đối $\\dfrac{|\\Delta V|}{V}$ của thể tích hình cầu bán kính $r = 10$ cm khi sai số đo bán kính là $|\\Delta r| \\le \\dfrac{1}{10}$ cm",
  "options": [
   "$\\dfrac{3}{100}$.",
   "$\\dfrac{3}{200}$.",
   "$\\dfrac{3}{50}$.",
   "$\\dfrac{1}{100}$."
  ],
  "answer": 0,
  "explain": "$V = \\dfrac{4}{3}\\pi r^3 \\Rightarrow dV = 4\\pi r^2\\\\,dr$<br>$\\dfrac{|dV|}{V} = \\dfrac{4\\pi r^2\\\\,|dr|}{\\frac{4}{3}\\pi r^3} = \\dfrac{3|dr|}{r} = \\dfrac{3\\cdot\\dfrac{1}{10}}{10} = \\dfrac{3}{100}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-056"
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
  "explain": "$x + 1 = 1 + x + o(x^{3})$<br>$\\sqrt{3 x + 1} = 1 + \\dfrac{3}{2}x - \\dfrac{9}{8}x^{2} + \\dfrac{27}{16}x^{3} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=1 + \\dfrac{5}{2}x + \\dfrac{3}{8}x^{2} + \\dfrac{9}{16}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $\\dfrac{9}{16}$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-057"
 },
 {
  "q": "Cho hàm số $f(x) = x^{3}e^{x}$. Giá trị của $f'(0)$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$-1$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 3x^{2}e^{x} + x^{3}e^{x}$<br>$f'(0) = 0$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-058"
 },
 {
  "q": "Cho đường cong $y = 3 x^{2} + 2 x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 2$ cắt trục $Oy$ tại điểm có tung độ bằng",
  "options": [
   "$-12$.",
   "$12$.",
   "$16$.",
   "$14$."
  ],
  "answer": 0,
  "explain": "$y(2) = 16$, $y'(x) = 6 x + 2$, $y'(2) = 14$<br>Tiếp tuyến: $y = 14(x - 2) + 16$<br>Tại $x = 0$: $y = -12$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-059"
 },
 {
  "q": "Cho hàm số $f(x) = \\sin(3x^2 + 3)$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$6 \\cos{\\left(6 \\right)}$.",
   "$- 6 \\cos{\\left(6 \\right)}$.",
   "$1 + 6 \\cos{\\left(6 \\right)}$.",
   "$6 \\cos{\\left(6 \\right)} - 36 \\sin{\\left(6 \\right)}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\cos(3x^2 + 3)\\cdot 6x$<br>$f'(1) = \\cos(6)\\cdot6 = 6 \\cos{\\left(6 \\right)}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-060"
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
  "explain": "Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=1 + \\dfrac{3}{2}x + \\dfrac{3}{8}x^{2} - \\dfrac{1}{16}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $- \\dfrac{1}{16}$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-061"
 },
 {
  "q": "Cho hàm số $f(x) = \\ln(x^2 + 4x + 10)$. Giá trị của $f'(1)$ bằng",
  "options": [
   "$\\dfrac{2}{5}$.",
   "$\\dfrac{2}{15}$.",
   "$\\dfrac{6}{11}$.",
   "$- \\dfrac{2}{5}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2x + 4}{x^2 + 4x + 10}$<br>$f'(1) = \\dfrac{6}{15} = \\dfrac{2}{5}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-062"
 },
 {
  "q": "Cho hàm số $f(x) = x^{3} - 2 x$. Vi phân $dy$ tại $x_0 = 1$ với $dx = \\dfrac{1}{10}$ bằng",
  "options": [
   "$\\dfrac{1}{10}$.",
   "$- \\dfrac{1}{10}$.",
   "$\\dfrac{1}{5}$.",
   "$\\dfrac{131}{1000}$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 3 x^{2} - 2$<br>$dy = f'(1)\\\\cdot dx = 1\\\\cdot\\dfrac{1}{10} = \\dfrac{1}{10}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-063"
 },
 {
  "q": "Cho hàm số $f(x) = \\arcsin(2x)$. Giá trị của $f'(x_0)$ tại $x_0 = \\dfrac{6}{13}$ bằng",
  "options": [
   "$\\dfrac{26}{5}$.",
   "$- \\dfrac{26}{5}$.",
   "$\\dfrac{52}{5}$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$f'(x) = \\dfrac{2}{\\sqrt{1 - 4\\cdotx^2}}$<br>Tại $x_0 = \\dfrac{6}{13}$: $\\sqrt{1 - 4\\cdotx_0^2} = \\dfrac{5}{13}$; $f'(x_0) = \\dfrac{26}{5}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-064"
 },
 {
  "q": "Cho hàm số $f(x) = x^{x}$ $(x > 0)$. Bằng cách lấy lôgarit hai vế rồi đạo hàm, giá trị của $f'(e)$ bằng",
  "options": [
   "$2 e^{e}$.",
   "$e^{e}$.",
   "$\\left(1 + e\\right) e^{e}$.",
   "$1 + 2 e^{e}$."
  ],
  "answer": 0,
  "explain": "$\\ln f = x\\ln x \\Rightarrow \\dfrac{f'}{f} = (\\ln x + 1)$<br>$f'(x) = x^{x}(\\ln x + 1)$<br>$f'(e) = e^{e}\\cdot2 = 2 e^{e}$",
  "note": "Chọn đúng công cụ: Leibniz cho đạo hàm cấp cao của tích; đạo hàm hai vế cho hàm ẩn; lấy lôgarit cho $u^v$; $\\dfrac{dy}{dx} = \\dfrac{y'_t}{x'_t}$ cho đường cong tham số.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-065"
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
  "explain": "$\\dfrac{1}{x + 1} = 1 - x + x^{2} - x^{3} + o(x^{3})$<br>$\\cos{\\left(x \\right)} = 1 - \\dfrac{1}{2}x^{2} + o(x^{3})$<br>Nhân các đa thức đã khai triển và giữ các tích có tổng số mũ bằng 3: $f(x)=1 - x + \\dfrac{1}{2}x^{2} - \\dfrac{1}{2}x^{3}+o(x^{3})$.<br>Đọc hệ số của $x^{3}$ từ tổng các tích cùng bậc vừa thu được: $- \\dfrac{1}{2}$.",
  "note": "Hệ số của $x^n$ trong tích hai khai triển là tổng các tích hệ số có tổng bậc bằng $n$; hệ số Maclaurin bậc $n$ bằng $\\dfrac{f^{(n)}(0)}{n!}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-066"
 },
 {
  "q": "Cho hàm số $f(x) = x^{2}e^{x}$. Giá trị của $f'(0)$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$2$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$f'(x) = 2x^{1}e^{x} + x^{2}e^{x}$<br>$f'(0) = 0$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-067"
 },
 {
  "q": "Cho đường cong $y = x^{2} + 2 x$. Tiếp tuyến với đường cong tại điểm có hoành độ $x_0 = 1$ cắt trục $Oy$ tại điểm có tung độ bằng",
  "options": [
   "$-1$.",
   "$1$.",
   "$3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$y(1) = 3$, $y'(x) = 2 x + 2$, $y'(1) = 4$<br>Tiếp tuyến: $y = 4(x - 1) + 3$<br>Tại $x = 0$: $y = -1$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-068"
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
  "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-001"
 },
 {
  "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2n+1}{n\\cdot 3^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{2^n}{n!}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{\\sqrt n}{n+1}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\tan\\dfrac{1}{n^2}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
  "options": [
   "$1$.",
   "$0$.",
   "$2$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Chuỗi thứ 1: $\\dfrac{u_{n+1}}{u_n}=\\dfrac{2n+3}{3(2n+1)}\\to1/3<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 2: $\\dfrac{u_{n+1}}{u_n}=\\dfrac{2^{n+1}/(n+1)!}{2^n/n!}=\\dfrac2{n+1}\\to0<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 3: $\\sqrt n/(n+1)\\sim1/\\sqrt n$; chuỗi $p$ với $p=1/2$ phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $\\tan(1/n^2)\\sim1/n^2$; chuỗi hội tụ theo so sánh giới hạn. Kết luận: hội tụ.<br>Số chuỗi phân kỳ: $1$",
  "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-002"
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
  "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-003"
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
  "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-004"
 },
 {
  "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{5^n}{n\\cdot 4^n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+2}{2n^2+1}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n}{2n+1}\\right)^n$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n^3+1}}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
  "options": [
   "$2$.",
   "$0$.",
   "$1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Chuỗi thứ 1: $u_n=5^n/(n4^n)=(5/4)^n/n\\not\\to0$; chuỗi phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 2: $(n+2)/(2n^2+1)\\sim1/(2n)$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $\\sqrt[n]{u_n}=\\sqrt[n]{(n/(2n+1))^n}=n/(2n+1)\\to1/2<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Chuỗi thứ 4: $u_n=1/\\sqrt{n^3+1}\\sim1/n^{3/2}$; so sánh giới hạn với chuỗi $p$-series $p=3/2>1$ cho hội tụ. Kết luận: hội tụ.<br>Số chuỗi phân kỳ: $2$",
  "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-005"
 },
 {
  "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{n\\sqrt[n]{n}}$, $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1}{n\\ln n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n(n+1)}}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{n+1}{n^3+2}$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi hội tụ trong bốn chuỗi trên?",
  "options": [
   "$1$.",
   "$0$.",
   "$2$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Chuỗi thứ 1: $\\sqrt[n]{n}\\to1$, do đó $u_n=1/(n\\sqrt[n]n)\\sim1/n$; phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 2: $f(x)=1/(x\\ln x)$ giảm dương trên $[2,\\infty)$ và $\\int_2^B\\frac{dx}{x\\ln x}=\\ln\\ln B-\\ln\\ln2\\to\\infty$; chuỗi phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $u_n=1/\\sqrt{n(n+1)}\\sim1/n$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $u_n=\\dfrac{n+1}{n^3+2}\\sim\\dfrac{n}{n^3}=\\dfrac1{n^2}$; so sánh giới hạn với $\\sum 1/n^2$ cho hội tụ. Kết luận: hội tụ.<br>Số chuỗi hội tụ: $1$",
  "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-006"
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
  "note": "Tiêu chuẩn Cauchy: lấy căn bậc $n$ làm mất số mũ $n$; số mũ $2n$ thì còn lại bình phương.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-007"
 },
 {
  "q": "Xét bốn chuỗi số dương $\\displaystyle\\sum_{n=2}^{+\\infty}\\dfrac{1}{n\\ln n}$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\ln\\left(1 + \\dfrac1n\\right)$, $\\displaystyle\\sum_{n=1}^{+\\infty}\\dfrac{1}{\\sqrt{n(n+1)}}$ và $\\displaystyle\\sum_{n=1}^{+\\infty}\\left(\\dfrac{n}{2n+1}\\right)^n$. Dùng các tiêu chuẩn so sánh, D’Alembert, Cauchy hoặc tiêu chuẩn tích phân, hãy cho biết có bao nhiêu chuỗi phân kỳ trong bốn chuỗi trên?",
  "options": [
   "$3$.",
   "$0$.",
   "$1$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Chuỗi thứ 1: $f(x)=1/(x\\ln x)$ giảm dương trên $[2,\\infty)$ và $\\int_2^B\\frac{dx}{x\\ln x}=\\ln\\ln B-\\ln\\ln2\\to\\infty$; chuỗi phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 2: $\\ln(1+1/n)\\sim1/n$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 3: $u_n=1/\\sqrt{n(n+1)}\\sim1/n$; so sánh giới hạn với chuỗi điều hòa cho phân kỳ. Kết luận: phân kỳ.<br>Chuỗi thứ 4: $\\sqrt[n]{u_n}=\\sqrt[n]{(n/(2n+1))^n}=n/(2n+1)\\to1/2<1$; chuỗi hội tụ. Kết luận: hội tụ.<br>Số chuỗi phân kỳ: $3$",
  "note": "So sánh với $\\sum\\dfrac{1}{n^\\alpha}$ (hội tụ khi $\\alpha > 1$); có $n!$ hoặc $a^n$ thì dùng D’Alembert; có lũy thừa bậc $n$ thì dùng Cauchy.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-008"
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
  "explain": "<b>Đúng:</b> $xy' + y = y^2\\ln x$ — Dạng $y' + p(x)y = q(x)y^{\\alpha}$; Chia cho $x\\ne0$: $y'+\\dfrac1x y=\\dfrac{\\ln x}{x}y^2$, Bernoulli với $\\alpha=2$.<br><b>Sai:</b> $y' = \\dfrac{x + y}{x - y}$ — $\\dfrac{x+y}{x-y}=\\dfrac{1+y/x}{1-y/x}$, nên vế phải chỉ phụ thuộc $y/x$.; đây là là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không phải dạng đang hỏi.<br><b>Sai:</b> $y' = e^{x - y}$ — $e^{x-y}=e^x e^{-y}$ nên $e^y\\,dy=e^x\\,dx$.; đây là là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không phải dạng đang hỏi.<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — $P=(y\\cos x + 2x),\\ Q=\\sin x - 2y$: $\\partial P/\\partial y=\\cos x$ và $\\partial Q/\\partial x=\\cos x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-001"
 },
 {
  "q": "Phương trình nào sau đây là phương trình vi phân đẳng cấp (thuần nhất) cấp một?",
  "options": [
   "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$.",
   "$xy' + y = y^2\\ln x$.",
   "$y' + x^2y = \\sin x$.",
   "$(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — Vế phải viết được thành hàm của $\\dfrac{y}{x}$, tức dạng $y' = f\\left(\\dfrac{y}{x}\\right)$; $\\dfrac yx+\\tan(y/x)$ chỉ phụ thuộc tỉ số $y/x$.<br><b>Sai:</b> $xy' + y = y^2\\ln x$ — Chia cho $x\\ne0$: $y'+\\dfrac1x y=\\dfrac{\\ln x}{x}y^2$, Bernoulli với $\\alpha=2$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $y' + x^2y = \\sin x$ — Đã ở dạng $y'+x^2y=\\sin x$: $p(x)=x^2,\\ q(x)=\\sin x$.; đây là là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không phải dạng đang hỏi.<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — $P=(y\\cos x + 2x),\\ Q=\\sin x - 2y$: $\\partial P/\\partial y=\\cos x$ và $\\partial Q/\\partial x=\\cos x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-002"
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
  "explain": "<b>Đúng:</b> $y' = (1 + x)(1 + y^2)$ — Viết được dưới dạng $g(y)\\,dy = h(x)\\,dx$; $\\dfrac{dy}{1+y^2}=(1+x)\\,dx$, tách được biến.<br><b>Sai:</b> $(y\\cos x + 2x)dx + (\\sin x - 2y)dy = 0$ — $P=(y\\cos x + 2x),\\ Q=\\sin x - 2y$: $\\partial P/\\partial y=\\cos x$ và $\\partial Q/\\partial x=\\cos x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi.<br><b>Sai:</b> $y' + \\dfrac{y}{x} = xy^3$ — $y'+\\dfrac1x y=xy^3$: dạng Bernoulli với $\\alpha=3$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $y' + y\\tan x = \\cos x$ — Đã ở dạng $y'+(\\tan x)y=\\cos x$, bậc nhất tuyến tính theo $y,y'$.; đây là là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không phải dạng đang hỏi.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-003"
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
  "explain": "<b>Đúng:</b> $(3x^2 + 2xy^2)dx + (2x^2y + 4y^3)dy = 0$ — Điều kiện $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$ đối với $P\\,dx + Q\\,dy = 0$; $P=(3x^2 + 2xy^2),\\ Q=2x^2y + 4y^3$: $\\partial P/\\partial y=4xy$ và $\\partial Q/\\partial x=4xy$; bằng nhau, nên toàn phần.<br><b>Sai:</b> $(x^2 + y)dx + (y - x)dy = 0$ — $P=(x^2 + y),\\ Q=y - x$: $\\partial P/\\partial y=1$ và $\\partial Q/\\partial x=-1$; khác nhau, nên không toàn phần.<br><b>Sai:</b> $2xy\\,dx + (y^2 - x^2)dy = 0$ — $P=2xy\\,,\\ Q=y^2 - x^2$: $\\partial P/\\partial y=2x$ và $\\partial Q/\\partial x=-2x$; khác nhau, nên không toàn phần.<br><b>Sai:</b> $y\\,dx - x\\,dy = 0$ — $P=y\\,,\\ Q=y\\,dx - x\\,dy = 0$: $\\partial P/\\partial y=1$ và $\\partial Q/\\partial x=-1$; khác nhau, nên không toàn phần.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-004"
 },
 {
  "q": "Phương trình nào sau đây là phương trình vi phân tuyến tính cấp một?",
  "options": [
   "$y' + x^2y = \\sin x$.",
   "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$.",
   "$xy' + y = y^2\\ln x$.",
   "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> $y' + x^2y = \\sin x$ — Dạng $y' + p(x)y = q(x)$: bậc nhất đối với $y$ và $y'$; Đã ở dạng $y'+x^2y=\\sin x$: $p(x)=x^2,\\ q(x)=\\sin x$.<br><b>Sai:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — $\\dfrac yx+\\tan(y/x)$ chỉ phụ thuộc tỉ số $y/x$.; đây là là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không phải dạng đang hỏi.<br><b>Sai:</b> $xy' + y = y^2\\ln x$ — Chia cho $x\\ne0$: $y'+\\dfrac1x y=\\dfrac{\\ln x}{x}y^2$, Bernoulli với $\\alpha=2$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — $P=(2xy + 1),\\ Q=x^2 + 3y^2$: $\\partial P/\\partial y=2x$ và $\\partial Q/\\partial x=2x$; bằng nhau, nên toàn phần.; đây là là phương trình vi phân toàn phần, không phải dạng đang hỏi.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-005"
 },
 {
  "q": "Xét bài toán Cauchy $y' = f(x,y),\\ y(x_0) = y_0$, trong đó $f$ và $f'_y$ liên tục trong một lân cận của điểm $(x_0;y_0)$. Phát biểu nào sau đây là đúng?",
  "options": [
   "Trong một lân cận của $x_0$, bài toán có đúng một nghiệm.",
   "Bài toán có vô số nghiệm, phụ thuộc một hằng số tùy ý.",
   "Bài toán có thể vô nghiệm.",
   "Nghiệm của bài toán luôn xác định với mọi $x \\in \\mathbb{R}$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> Trong một lân cận của $x_0$, bài toán có đúng một nghiệm. Đây là định lí tồn tại và duy nhất nghiệm.<br><b>Sai:</b> Bài toán có vô số nghiệm, phụ thuộc một hằng số tùy ý. Nghiệm tổng quát của phương trình mới phụ thuộc hằng số $C$; điều kiện đầu đã xác định $C$.<br><b>Sai:</b> Bài toán có thể vô nghiệm. Với giả thiết $f$ liên tục, nghiệm luôn tồn tại trong một lân cận của $x_0$.<br><b>Sai:</b> Nghiệm của bài toán luôn xác định với mọi $x \\in \\mathbb{R}$. $y' = y^2,\\ y(0) = 1$ có nghiệm $y = \\dfrac{1}{1 - x}$, chỉ xác định khi $x < 1$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-006"
 },
 {
  "q": "Phương trình nào sau đây là phương trình vi phân đẳng cấp (thuần nhất) cấp một?",
  "options": [
   "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$.",
   "$y' - y = xy^2$.",
   "$y' = e^{x - y}$.",
   "$xy' - 2y = x^3$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — Vế phải viết được thành hàm của $\\dfrac{y}{x}$, tức dạng $y' = f\\left(\\dfrac{y}{x}\\right)$; $\\dfrac yx+\\tan(y/x)$ chỉ phụ thuộc tỉ số $y/x$.<br><b>Sai:</b> $y' - y = xy^2$ — $y'-y=xy^2$: dạng Bernoulli với $\\alpha=2$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $y' = e^{x - y}$ — $e^{x-y}=e^x e^{-y}$ nên $e^y\\,dy=e^x\\,dx$.; đây là là phương trình có biến số phân ly (tách được $x$ và $y$ về hai vế), không phải dạng đang hỏi.<br><b>Sai:</b> $xy' - 2y = x^3$ — Chia cho $x\\ne0$: $y'-\\dfrac2x y=x^2$, đúng dạng $y'+p(x)y=q(x)$.; đây là là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không phải dạng đang hỏi.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-007"
 },
 {
  "q": "Phương trình nào sau đây là phương trình vi phân có biến số phân ly?",
  "options": [
   "$y' = \\dfrac{1 + y^2}{1 + x^2}$.",
   "$xy' - 2y = x^3$.",
   "$y' + \\dfrac{y}{x} = xy^3$.",
   "$y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> $y' = \\dfrac{1 + y^2}{1 + x^2}$ — Viết được dưới dạng $g(y)\\,dy = h(x)\\,dx$; $\\dfrac{dy}{1+y^2}=\\dfrac{dx}{1+x^2}$, tách được biến.<br><b>Sai:</b> $xy' - 2y = x^3$ — Chia cho $x\\ne0$: $y'-\\dfrac2x y=x^2$, đúng dạng $y'+p(x)y=q(x)$.; đây là là phương trình tuyến tính cấp một (bậc nhất đối với $y$ và $y'$), không phải dạng đang hỏi.<br><b>Sai:</b> $y' + \\dfrac{y}{x} = xy^3$ — $y'+\\dfrac1x y=xy^3$: dạng Bernoulli với $\\alpha=3$.; đây là là phương trình Bernoulli (có số hạng $y^{\\alpha}$ với $\\alpha \\ne 0, 1$ ở vế phải), không phải dạng đang hỏi.<br><b>Sai:</b> $y' = \\dfrac{y}{x} + \\tan\\dfrac{y}{x}$ — $\\dfrac yx+\\tan(y/x)$ chỉ phụ thuộc tỉ số $y/x$.; đây là là phương trình đẳng cấp (vế phải chỉ phụ thuộc $\\dfrac{y}{x}$), không phải dạng đang hỏi.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-008"
 },
 {
  "q": "Phương trình nào sau đây là phương trình vi phân toàn phần?",
  "options": [
   "$(2xy + 1)dx + (x^2 + 3y^2)dy = 0$.",
   "$y\\,dx - x\\,dy = 0$.",
   "$(x + y)dx + (y - x)dy = 0$.",
   "$2xy\\,dx + (y^2 - x^2)dy = 0$."
  ],
  "answer": 0,
  "explain": "<b>Đúng:</b> $(2xy + 1)dx + (x^2 + 3y^2)dy = 0$ — Điều kiện $\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x}$ đối với $P\\,dx + Q\\,dy = 0$; $P=(2xy + 1),\\ Q=x^2 + 3y^2$: $\\partial P/\\partial y=2x$ và $\\partial Q/\\partial x=2x$; bằng nhau, nên toàn phần.<br><b>Sai:</b> $y\\,dx - x\\,dy = 0$ — $P=y\\,,\\ Q=y\\,dx - x\\,dy = 0$: $\\partial P/\\partial y=1$ và $\\partial Q/\\partial x=-1$; khác nhau, nên không toàn phần.<br><b>Sai:</b> $(x + y)dx + (y - x)dy = 0$ — $P=(x + y),\\ Q=y - x$: $\\partial P/\\partial y=1$ và $\\partial Q/\\partial x=-1$; khác nhau, nên không toàn phần.<br><b>Sai:</b> $2xy\\,dx + (y^2 - x^2)dy = 0$ — $P=2xy\\,,\\ Q=y^2 - x^2$: $\\partial P/\\partial y=2x$ và $\\partial Q/\\partial x=-2x$; khác nhau, nên không toàn phần.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-009"
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $12\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=6$.<br>$y = C_1\\cos x + C_2\\sin x + 6x\\sin x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=2$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $6\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=2+3 \\pi=2 + 3 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=6$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=3+2 \\pi=3 + 2 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $48\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=12$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 12x\\sin 2x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=6$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $12\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=3+3 \\pi=3 + 3 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $4\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=2$.<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=-2$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $2\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=-2+\\pi=\\pi - 2$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=-4$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=-2+\\pi=\\pi - 2$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $4\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=2$.<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=3$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $2\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=3+\\pi=3 + \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $12\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=6$.<br>$y = C_1\\cos x + C_2\\sin x + 6x\\sin x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=-2$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $6\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=-2+3 \\pi=3 \\pi - 2$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=-4$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=-2+2 \\pi=2 \\pi - 2$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=4$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=2+\\pi=2 + \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=6$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=3+\\pi=3 + \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=2$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=1+\\pi=1 + \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $8\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=2$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=2+2 \\pi=2 + 2 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $8\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=1$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=1+2 \\pi=1 + 2 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $8\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=2$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=2+2 \\pi=2 + 2 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=-4$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=-2+\\pi=\\pi - 2$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $48\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=12$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 12x\\sin 2x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=4$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $12\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=2+3 \\pi=2 + 3 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $8\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=1$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=1+2 \\pi=1 + 2 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=2$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=1+2 \\pi=1 + 2 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=2$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=1+2 \\pi=1 + 2 \\pi$.",
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
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=6$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=3+\\pi=3 + \\pi$.",
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
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 32\\cos 2x$ với điều kiện $y(0) = 1;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$1 + 2 \\pi$.",
   "$1$.",
   "$2 \\pi$.",
   "$1 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=2$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=1+2 \\pi=1 + 2 \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-044"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 4e^{2x}$ với điều kiện $y(0) = 2;\\ y'(0) = 5$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$5 e^{2}$.",
   "$3 e^{2}$.",
   "$7 e^{2}$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{2x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = 2 C_{1} + C_2 = 5 \\Rightarrow C_2 = 1$<br>$y(1) = (2 + (1) + 2)e^{2} = 5 e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-045"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 8\\cos x$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$3 + 2 \\pi$.",
   "$3$.",
   "$2 \\pi$.",
   "$3 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $8\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos x + C_2\\sin x + 4x\\sin x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=3$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=3+2 \\pi=3 + 2 \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-046"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 4e^{2x}$ với điều kiện $y(0) = 0;\\ y'(0) = -1$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$e^{2}$.",
   "$- e^{2}$.",
   "$3 e^{2}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{2x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = 2 C_{1} + C_2 = -1 \\Rightarrow C_2 = -1$<br>$y(1) = (0 + (-1) + 2)e^{2} = e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-047"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 32\\cos 2x$ với điều kiện $y(0) = 2;\\ y'(0) = -4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$2 \\pi - 2$.",
   "$-2$.",
   "$2 \\pi$.",
   "$- 2 \\pi - 2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=-4$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=-2+2 \\pi=2 \\pi - 2$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-048"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 2e^{-x}$ với điều kiện $y(0) = 1;\\ y'(0) = 0$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{3}{e}$.",
   "$\\dfrac{2}{e}$.",
   "$\\dfrac{4}{e}$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{-x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = - C_{1} + C_2 = 0 \\Rightarrow C_2 = 1$<br>$y(1) = (1 + (1) + 1)e^{-1} = \\dfrac{3}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-049"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 4\\cos x$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$3 + \\pi$.",
   "$3$.",
   "$\\pi$.",
   "$3 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $4\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=2$.<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0)=C_1=1$. Also $y^\\prime(0)=wC_2=3$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $2\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=3+\\pi=3 + \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-050"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 6e^{2x}$ với điều kiện $y(0) = 1;\\ y'(0) = 1$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$3 e^{2}$.",
   "$0$.",
   "$6 e^{2}$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{2x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = 2 C_{1} + C_2 = 1 \\Rightarrow C_2 = -1$<br>$y(1) = (1 + (-1) + 3)e^{2} = 3 e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-051"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = 3;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$1 + \\pi$.",
   "$1$.",
   "$\\pi$.",
   "$1 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=2$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=1+\\pi=1 + \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-052"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 4e^{x}$ với điều kiện $y(0) = 1;\\ y'(0) = 0$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$2 e$.",
   "$0$.",
   "$4 e$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{x}$<br>$y(0) = C_1 = 1;\\quad y'(0) = C_{1} + C_2 = 0 \\Rightarrow C_2 = -1$<br>$y(1) = (1 + (-1) + 2)e = 2 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-053"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 4\\cos x$ với điều kiện $y(0) = 2;\\ y'(0) = 2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$2 + \\pi$.",
   "$2$.",
   "$\\pi$.",
   "$2 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $4\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=2$.<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=2$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $2\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=2+\\pi=2 + \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-054"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 2e^{2x}$ với điều kiện $y(0) = 2;\\ y'(0) = 6$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$5 e^{2}$.",
   "$4 e^{2}$.",
   "$6 e^{2}$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{2x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = 2 C_{1} + C_2 = 6 \\Rightarrow C_2 = 2$<br>$y(1) = (2 + (2) + 1)e^{2} = 5 e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-055"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 32\\cos 2x$ với điều kiện $y(0) = 2;\\ y'(0) = 6$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$3 + 2 \\pi$.",
   "$3$.",
   "$2 \\pi$.",
   "$3 - 2 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=6$, so $C_2=3$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $3$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=3+2 \\pi=3 + 2 \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-056"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 4e^{2x}$ với điều kiện $y(0) = 0;\\ y'(0) = 1$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$3 e^{2}$.",
   "$e^{2}$.",
   "$5 e^{2}$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{2x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = 2 C_{1} + C_2 = 1 \\Rightarrow C_2 = 1$<br>$y(1) = (0 + (1) + 2)e^{2} = 3 e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-057"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 12\\cos x$ với điều kiện $y(0) = 2;\\ y'(0) = -2$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$3 \\pi - 2$.",
   "$-2$.",
   "$3 \\pi$.",
   "$- 3 \\pi - 2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $12\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=6$.<br>$y = C_1\\cos x + C_2\\sin x + 6x\\sin x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=-2$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $6\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=-2+3 \\pi=3 \\pi - 2$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-058"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 2e^{2x}$ với điều kiện $y(0) = 2;\\ y'(0) = 5$. Chú ý $k = 2$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$4 e^{2}$.",
   "$3 e^{2}$.",
   "$5 e^{2}$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 4 k + 4 = 0$, nghiệm kép $k = 2$<br>$y^* = ax^2e^{2x}$; đặt $y^* = ue^{2x}$ thì vế trái bằng $u^{\\prime\\prime}e^{2x} = 2ae^{2x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{2x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = 2 C_{1} + C_2 = 5 \\Rightarrow C_2 = 1$<br>$y(1) = (2 + (1) + 1)e^{2} = 4 e^{2}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-059"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 32\\cos 2x$ với điều kiện $y(0) = -1;\\ y'(0) = -4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$2 \\pi - 2$.",
   "$-2$.",
   "$2 \\pi$.",
   "$- 2 \\pi - 2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $32\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=8$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 8x\\sin 2x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=-4$, so $C_2=-2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $-2$ and the particular part is $8\\cdot\\dfrac{\\pi}{2w}=2 \\pi$; hence $y(x_0)=-2+2 \\pi=2 \\pi - 2$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-060"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 6e^{x}$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$6 e$.",
   "$3 e$.",
   "$9 e$.",
   "$6$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = C_{1} + C_2 = 3 \\Rightarrow C_2 = 1$<br>$y(1) = (2 + (1) + 3)e = 6 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-061"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 16\\cos 2x$ với điều kiện $y(0) = 3;\\ y'(0) = 4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$2 + \\pi$.",
   "$2$.",
   "$\\pi$.",
   "$2 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $16\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=4$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 4x\\sin 2x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=4$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $4\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=2+\\pi=2 + \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-062"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 2y' + y = 6e^{-x}$ với điều kiện $y(0) = 0;\\ y'(0) = 1$. Chú ý $k = -1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$\\dfrac{4}{e}$.",
   "$e^{-1}$.",
   "$\\dfrac{7}{e}$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} + 2 k + 1 = 0$, nghiệm kép $k = -1$<br>$y^* = ax^2e^{-x}$; đặt $y^* = ue^{-x}$ thì vế trái bằng $u^{\\prime\\prime}e^{-x} = 2ae^{-x}$; so với vế phải: $2a = 6 \\Rightarrow a = 3$<br>$y = (C_1 + C_2x + 3x^2)e^{-x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = - C_{1} + C_2 = 1 \\Rightarrow C_2 = 1$<br>$y(1) = (0 + (1) + 3)e^{-1} = \\dfrac{4}{e}$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-063"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 4\\cos x$ với điều kiện $y(0) = 3;\\ y'(0) = 1$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$1 + \\pi$.",
   "$1$.",
   "$\\pi$.",
   "$1 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $4\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=2$.<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0)=C_1=3$. Also $y^\\prime(0)=wC_2=1$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $2\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=1+\\pi=1 + \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-064"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 2e^{x}$ với điều kiện $y(0) = 2;\\ y'(0) = 1$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$2 e$.",
   "$e$.",
   "$3 e$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 2 \\Rightarrow a = 1$<br>$y = (C_1 + C_2x + x^2)e^{x}$<br>$y(0) = C_1 = 2;\\quad y'(0) = C_{1} + C_2 = 1 \\Rightarrow C_2 = -1$<br>$y(1) = (2 + (-1) + 1)e = 2 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-065"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + y = 4\\cos x$ với điều kiện $y(0) = 2;\\ y'(0) = 1$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{2}\\right)$ bằng",
  "options": [
   "$1 + \\pi$.",
   "$1$.",
   "$\\pi$.",
   "$1 - \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 1 = 0 \\Rightarrow k = \\pm i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos x + b\\sin x)$. Tính đạo hàm hai lần và cộng $y^*$: $y^{*\\prime\\prime}+y^*=-2a\\sin x + 2b\\cos x$.<br>Đối chiếu hệ số với vế phải $4\\cos x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=2$.<br>$y = C_1\\cos x + C_2\\sin x + 2x\\sin x$<br>$y(0)=C_1=2$. Also $y^\\prime(0)=wC_2=1$, so $C_2=1$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $1$ and the particular part is $2\\cdot\\dfrac{\\pi}{2w}=\\pi$; hence $y(x_0)=1+\\pi=1 + \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-066"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 2y' + y = 4e^{x}$ với điều kiện $y(0) = 0;\\ y'(0) = 2$. Chú ý $k = 1$ là nghiệm kép của phương trình đặc trưng, giá trị của $y(1)$ bằng",
  "options": [
   "$4 e$.",
   "$2 e$.",
   "$6 e$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^{2} - 2 k + 1 = 0$, nghiệm kép $k = 1$<br>$y^* = ax^2e^{x}$; đặt $y^* = ue^{x}$ thì vế trái bằng $u^{\\prime\\prime}e^{x} = 2ae^{x}$; so với vế phải: $2a = 4 \\Rightarrow a = 2$<br>$y = (C_1 + C_2x + 2x^2)e^{x}$<br>$y(0) = C_1 = 0;\\quad y'(0) = C_{1} + C_2 = 2 \\Rightarrow C_2 = 2$<br>$y(1) = (0 + (2) + 2)e = 4 e$",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-067"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 48\\cos 2x$ với điều kiện $y(0) = -1;\\ y'(0) = 4$. Chú ý vế phải cộng hưởng với nghiệm của phương trình thuần nhất, giá trị của $y\\left(\\dfrac{\\pi}{4}\\right)$ bằng",
  "options": [
   "$2 + 3 \\pi$.",
   "$2$.",
   "$3 \\pi$.",
   "$2 - 3 \\pi$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $k^2 + 4 = 0 \\Rightarrow k = \\pm 2i$ (trùng tần số của vế phải)<br>$y^*=x(a\\cos 2x + b\\sin 2x)$. Tính đạo hàm hai lần và cộng $4y^*$: $y^{*\\prime\\prime}+4y^*=-4a\\sin 2x + 4b\\cos 2x$.<br>Đối chiếu hệ số với vế phải $48\\cos 2x$: hệ số của $\\sin(wx)$ bằng $-2wa=0$ nên $a=0$; hệ số của $\\cos(wx)$ là $2wb=c$, do đó $b=\\dfrac{c}{2w}=12$.<br>$y = C_1\\cos 2x + C_2\\sin 2x + 12x\\sin 2x$<br>$y(0)=C_1=-1$. Also $y^\\prime(0)=wC_2=4$, so $C_2=2$.<br>At $x_0=\\dfrac{\\pi}{2w}$, $\\cos(wx_0)=0$ and $\\sin(wx_0)=1$. Thus the homogeneous part is $2$ and the particular part is $12\\cdot\\dfrac{\\pi}{2w}=3 \\pi$; hence $y(x_0)=2+3 \\pi=2 + 3 \\pi$.",
  "note": "Cộng hưởng: khi số mũ (hoặc tần số) của vế phải trùng nghiệm đặc trưng, nghiệm riêng phải nhân thêm $x$ (nghiệm kép: $x^2$).",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-068"
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
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le x\\le1,\\ x\\le y\\le1$ becomes $0\\le y\\le1,\\ 0\\le x\\le y$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{1}\\sin{\\left(y \\right)}\\,dy$.<br>Tính nguyên hàm: $I=\\left[- \\cos{\\left(y \\right)}\\right]_{0}^{1}=- \\cos{\\left(1 \\right)}--1=1 - \\cos{\\left(1 \\right)}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-001"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>$y\\ge0\\Leftrightarrow r\\sin\\varphi\\ge0\\Rightarrow\\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-002"
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
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-003"
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
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-004"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{1} dy\\int_{y}^{1} e^{-x^2}\\,dx$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$- \\dfrac{1 - e}{2 e}$.",
   "$- \\dfrac{1 - e}{e}$.",
   "$- \\dfrac{1 - e}{4 e}$.",
   "$- \\dfrac{1 - e}{2 e} + 1$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le y\\le1,\\ y\\le x\\le1$ becomes $0\\le x\\le1,\\ 0\\le y\\le x$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{1}x e^{- x^{2}}\\,dx$.<br>Tính nguyên hàm: $I=\\left[- \\dfrac{e^{- x^{2}}}{2}\\right]_{0}^{1}=- \\dfrac{1}{2 e}-- \\dfrac{1}{2}=- \\dfrac{1 - e}{2 e}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-005"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 4,\\ x \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>$x\\le0\\Leftrightarrow\\cos\\varphi\\le0\\Rightarrow\\pi/2\\le\\varphi\\le3\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{2}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-006"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ y \\ge x,\\ x \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>$x\\ge0,\\ y\\ge x\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge\\cos\\varphi\\Rightarrow\\pi/4\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-007"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ y \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>$y\\le0\\Leftrightarrow\\sin\\varphi\\le0\\Rightarrow\\pi\\le\\varphi\\le2\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{4}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-008"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{\\pi} dx\\int_{x}^{\\pi} \\dfrac{\\sin y}{y}\\,dy$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$2$.",
   "$4$.",
   "$1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le x\\le\\pi,\\ x\\le y\\le\\pi$ becomes $0\\le y\\le\\pi,\\ 0\\le x\\le y$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{\\pi}\\sin{\\left(y \\right)}\\,dy$.<br>Tính nguyên hàm: $I=\\left[- \\cos{\\left(y \\right)}\\right]_{0}^{\\pi}=1--1=2$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-009"
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
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-010"
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
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-011"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 4,\\ y \\ge |x|\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>$y\\ge|x|\\Leftrightarrow\\sin\\varphi\\ge|\\cos\\varphi|\\Rightarrow\\pi/4\\le\\varphi\\le3\\pi/4$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{2}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-012"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{4} dy\\int_{\\sqrt{y}}^{2} \\dfrac{1}{1 + x^3}\\,dx$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$\\dfrac{2 \\ln 3}{3}$.",
   "$\\dfrac{4 \\ln 3}{3}$.",
   "$\\dfrac{\\ln 3}{3}$.",
   "$\\dfrac{2 \\ln 3}{3} + 1$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le y\\le4,\\ \\sqrt y\\le x\\le2$ becomes $0\\le x\\le2,\\ 0\\le y\\le x^2$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{2}\\dfrac{x^{2}}{x^{3} + 1}\\,dx$.<br>Tính nguyên hàm: $I=\\left[\\dfrac{\\ln\\left(x^{3} + 1\\right)}{3}\\right]_{0}^{2}=\\dfrac{\\ln 9}{3}-0=\\dfrac{2 \\ln 3}{3}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-013"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ x \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>$x\\le0\\Leftrightarrow\\cos\\varphi\\le0\\Rightarrow\\pi/2\\le\\varphi\\le3\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{2}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-014"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ y \\ge x,\\ x \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>$x\\ge0,\\ y\\ge x\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge\\cos\\varphi\\Rightarrow\\pi/4\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{1}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-015"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 4,\\ y \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{1}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>$y\\le0\\Leftrightarrow\\sin\\varphi\\le0\\Rightarrow\\pi\\le\\varphi\\le2\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{1}^{2}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-016"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{1} dx\\int_{x}^{1} \\cos(y^2)\\,dy$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$\\dfrac{\\sin{\\left(1 \\right)}}{2}$.",
   "$\\sin{\\left(1 \\right)}$.",
   "$\\dfrac{\\sin{\\left(1 \\right)}}{4}$.",
   "$\\dfrac{\\sin{\\left(1 \\right)}}{2} + 1$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le x\\le1,\\ x\\le y\\le1$ becomes $0\\le y\\le1,\\ 0\\le x\\le y$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{1}y \\cos{\\left(y^{2} \\right)}\\,dy$.<br>Tính nguyên hàm: $I=\\left[\\dfrac{\\sin{\\left(y^{2} \\right)}}{2}\\right]_{0}^{1}=\\dfrac{\\sin{\\left(1 \\right)}}{2}-0=\\dfrac{\\sin{\\left(1 \\right)}}{2}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-017"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>$y\\ge0\\Leftrightarrow r\\sin\\varphi\\ge0\\Rightarrow\\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{2}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-018"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ x \\ge 0,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>$x\\ge0,\\ y\\ge0\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{1}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-019"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ y \\ge |x|\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>$y\\ge|x|\\Leftrightarrow\\sin\\varphi\\ge|\\cos\\varphi|\\Rightarrow\\pi/4\\le\\varphi\\le3\\pi/4$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{2}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-020"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{3} dx\\int_{x}^{3} e^{y^2}\\,dy$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$- \\dfrac{1}{2} + \\dfrac{e^{9}}{2}$.",
   "$e^{9} - 1$.",
   "$- \\dfrac{1}{4} + \\dfrac{e^{9}}{4}$.",
   "$\\dfrac{1}{2} + \\dfrac{e^{9}}{2}$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le x\\le3,\\ x\\le y\\le3$ becomes $0\\le y\\le3,\\ 0\\le x\\le y$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{3}y e^{y^{2}}\\,dy$.<br>Tính nguyên hàm: $I=\\left[\\dfrac{e^{y^{2}}}{2}\\right]_{0}^{3}=\\dfrac{e^{9}}{2}-\\dfrac{1}{2}=- \\dfrac{1}{2} + \\dfrac{e^{9}}{2}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-021"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ x \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>$x\\le0\\Leftrightarrow\\cos\\varphi\\le0\\Rightarrow\\pi/2\\le\\varphi\\le3\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{2}^{4}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-022"
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
  "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>$x\\ge0,\\ y\\ge x\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge\\cos\\varphi\\Rightarrow\\pi/4\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{1}^{2}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-023"
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
  "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>$y\\le0\\Leftrightarrow\\sin\\varphi\\le0\\Rightarrow\\pi\\le\\varphi\\le2\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{1}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-024"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{9} dy\\int_{\\sqrt{y}}^{3} \\sin(x^3)\\,dx$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$\\dfrac{1}{3} - \\dfrac{\\cos{\\left(27 \\right)}}{3}$.",
   "$\\dfrac{2}{3} - \\dfrac{2 \\cos{\\left(27 \\right)}}{3}$.",
   "$\\dfrac{1}{6} - \\dfrac{\\cos{\\left(27 \\right)}}{6}$.",
   "$\\dfrac{4}{3} - \\dfrac{\\cos{\\left(27 \\right)}}{3}$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le y\\le9,\\ \\sqrt y\\le x\\le3$ becomes $0\\le x\\le3,\\ 0\\le y\\le x^2$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{3}x^{2} \\sin{\\left(x^{3} \\right)}\\,dx$.<br>Tính nguyên hàm: $I=\\left[- \\dfrac{\\cos{\\left(x^{3} \\right)}}{3}\\right]_{0}^{3}=- \\dfrac{\\cos{\\left(27 \\right)}}{3}-- \\dfrac{1}{3}=\\dfrac{1}{3} - \\dfrac{\\cos{\\left(27 \\right)}}{3}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-025"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 4,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>$y\\ge0\\Leftrightarrow r\\sin\\varphi\\ge0\\Rightarrow\\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi}d\\varphi\\int_{1}^{2}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-026"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 4,\\ x \\ge 0,\\ y \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{1}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{2} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 4 \\Leftrightarrow 1 \\le r \\le 2$<br>$x\\ge0,\\ y\\ge0\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge0\\Rightarrow0\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{0}^{\\pi/2}d\\varphi\\int_{1}^{2}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-027"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ y \\ge |x|\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>$y\\ge|x|\\Leftrightarrow\\sin\\varphi\\ge|\\cos\\varphi|\\Rightarrow\\pi/4\\le\\varphi\\le3\\pi/4$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{3\\pi/4}d\\varphi\\int_{1}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-028"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{2} dx\\int_{x}^{2} e^{-y^2}\\,dy$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$- \\dfrac{1 - e^{4}}{2 e^{4}}$.",
   "$- \\dfrac{1 - e^{4}}{e^{4}}$.",
   "$- \\dfrac{1 - e^{4}}{4 e^{4}}$.",
   "$- \\dfrac{1 - e^{4}}{2 e^{4}} + 1$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le x\\le2,\\ x\\le y\\le2$ becomes $0\\le y\\le2,\\ 0\\le x\\le y$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{2}y e^{- y^{2}}\\,dy$.<br>Tính nguyên hàm: $I=\\left[- \\dfrac{e^{- y^{2}}}{2}\\right]_{0}^{2}=- \\dfrac{1}{2 e^{4}}-- \\dfrac{1}{2}=- \\dfrac{1 - e^{4}}{2 e^{4}}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-029"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 1 \\le x^2 + y^2 \\le 9,\\ x \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{1}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$1 \\le r^2 \\le 9 \\Leftrightarrow 1 \\le r \\le 3$<br>$x\\le0\\Leftrightarrow\\cos\\varphi\\le0\\Rightarrow\\pi/2\\le\\varphi\\le3\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/2}^{3\\pi/2}d\\varphi\\int_{1}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-030"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 16,\\ y \\ge x,\\ x \\ge 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{4}^{16} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{4} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$4 \\le r^2 \\le 16 \\Leftrightarrow 2 \\le r \\le 4$<br>$x\\ge0,\\ y\\ge x\\Leftrightarrow\\cos\\varphi\\ge0,\\ \\sin\\varphi\\ge\\cos\\varphi\\Rightarrow\\pi/4\\le\\varphi\\le\\pi/2$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi/4}^{\\pi/2}d\\varphi\\int_{2}^{4}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-031"
 },
 {
  "q": "Cho miền $D = \\{(x,y): 4 \\le x^2 + y^2 \\le 9,\\ y \\le 0\\}$. Khi chuyển sang tọa độ cực $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$, tích phân $\\displaystyle\\iint_D f(x,y)\\,dxdy$ được viết là",
  "options": [
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,dr$.",
   "$\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{4}^{9} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$.",
   "$\\displaystyle\\int_{0}^{2\\pi}d\\varphi\\int_{2}^{3} f(r\\cos\\varphi, r\\sin\\varphi)\\,r\\,dr$."
  ],
  "answer": 0,
  "explain": "$4 \\le r^2 \\le 9 \\Leftrightarrow 2 \\le r \\le 3$<br>$y\\le0\\Leftrightarrow\\sin\\varphi\\le0\\Rightarrow\\pi\\le\\varphi\\le2\\pi$<br>$dxdy=\\left|\\dfrac{\\partial(x,y)}{\\partial(r,\\varphi)}\\right|dr\\,d\\varphi=r\\,dr\\,d\\varphi$<br>Vậy tích phân được viết: $\\displaystyle\\int_{\\pi}^{2\\pi}d\\varphi\\int_{2}^{3}f(r\\cos\\varphi,r\\sin\\varphi)\\,r\\,dr$",
  "note": "Cận của $r$ là căn bậc hai của các số ở hai vế; không quên định thức Jacobi $r$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-032"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{\\sqrt{\\pi/2}} dx\\int_{x}^{\\sqrt{\\pi/2}} \\cos(y^2)\\,dy$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$1$.",
   "$\\dfrac{1}{4}$.",
   "$\\dfrac{3}{2}$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le x\\le\\sqrt{\\pi/2},\\ x\\le y\\le\\sqrt{\\pi/2}$ becomes $0\\le y\\le\\sqrt{\\pi/2},\\ 0\\le x\\le y$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{\\dfrac{\\sqrt{2} \\sqrt{\\pi}}{2}}y \\cos{\\left(y^{2} \\right)}\\,dy$.<br>Tính nguyên hàm: $I=\\left[\\dfrac{\\sin{\\left(y^{2} \\right)}}{2}\\right]_{0}^{\\dfrac{\\sqrt{2} \\sqrt{\\pi}}{2}}=\\dfrac{1}{2}-0=\\dfrac{1}{2}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-033"
 },
 {
  "q": "Cho $I = \\displaystyle\\int_{0}^{9} dy\\int_{\\sqrt{y}}^{3} f(x,y)\\,dx$. Vẽ miền lấy tích phân rồi đổi thứ tự lấy tích phân, ta được",
  "options": [
   "$I = \\displaystyle\\int_{0}^{3} dx\\int_{0}^{x^2} f(x,y)\\,dy$.",
   "$I = \\displaystyle\\int_{0}^{3} dx\\int_{x^2}^{9} f(x,y)\\,dy$.",
   "$I = \\displaystyle\\int_{0}^{9} dx\\int_{0}^{\\sqrt{x}} f(x,y)\\,dy$.",
   "$I = \\displaystyle\\int_{0}^{3} dx\\int_{0}^{\\sqrt{x}} f(x,y)\\,dy$."
  ],
  "answer": 0,
  "explain": "Miền $\\sqrt{y} \\le x \\le 3$, $0 \\le y \\le 9$ nằm dưới parabol $y = x^2$: $0 \\le y \\le x^2$, $0 \\le x \\le 3$.",
  "note": "Vẽ miền $D$ trước khi đổi thứ tự; cận của tích phân ngoài phải là hằng số.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-034"
 },
 {
  "q": "Cho $I = \\displaystyle\\int_{0}^{3} dx\\int_{\\frac{x^2}{3}}^{x} f(x,y)\\,dy$. Vẽ miền lấy tích phân rồi đổi thứ tự lấy tích phân, ta được",
  "options": [
   "$I = \\displaystyle\\int_{0}^{3} dy\\int_{y}^{\\sqrt{3y}} f(x,y)\\,dx$.",
   "$I = \\displaystyle\\int_{0}^{3} dy\\int_{\\sqrt{3y}}^{y} f(x,y)\\,dx$.",
   "$I = \\displaystyle\\int_{0}^{3} dy\\int_{0}^{\\sqrt{3y}} f(x,y)\\,dx$.",
   "$I = \\displaystyle\\int_{0}^{9} dy\\int_{y}^{\\sqrt{3y}} f(x,y)\\,dx$."
  ],
  "answer": 0,
  "explain": "Miền lấy tích phân: $\\frac{x^2}{3} \\le y \\le x$, $0 \\le x \\le 3$, tương đương $y \\le x \\le \\sqrt{3y}$, $0 \\le y \\le 3$.",
  "note": "Vẽ miền $D$ trước khi đổi thứ tự; cận của tích phân ngoài phải là hằng số.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-035"
 },
 {
  "q": "Cho $I = \\displaystyle\\int_{0}^{3} dy\\int_{\\frac{y}{3}}^{1} f(x,y)\\,dx$. Vẽ miền lấy tích phân rồi đổi thứ tự lấy tích phân, ta được",
  "options": [
   "$I = \\displaystyle\\int_{0}^{1} dx\\int_{0}^{3x} f(x,y)\\,dy$.",
   "$I = \\displaystyle\\int_{0}^{1} dx\\int_{3x}^{3} f(x,y)\\,dy$.",
   "$I = \\displaystyle\\int_{0}^{3} dx\\int_{0}^{\\frac{x}{3}} f(x,y)\\,dy$.",
   "$I = \\displaystyle\\int_{0}^{1} dx\\int_{0}^{\\frac{x}{3}} f(x,y)\\,dy$."
  ],
  "answer": 0,
  "explain": "Miền $\\dfrac{y}{3} \\le x \\le 1$, $0 \\le y \\le 3$ là tam giác $0 \\le x \\le 1$, $0 \\le y \\le 3x$.",
  "note": "Vẽ miền $D$ trước khi đổi thứ tự; cận của tích phân ngoài phải là hằng số.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-036"
 },
 {
  "q": "Tích phân $I = \\displaystyle\\int_{0}^{1} dx\\int_{x}^{1} \\sqrt{1 + y^2}\\,dy$ không tính được theo thứ tự đã cho bằng các hàm sơ cấp. Sau khi đổi thứ tự lấy tích phân, giá trị của $I$ bằng",
  "options": [
   "$- \\dfrac{1}{3} + \\dfrac{2 \\sqrt{2}}{3}$.",
   "$- \\dfrac{2}{3} + \\dfrac{4 \\sqrt{2}}{3}$.",
   "$- \\dfrac{1}{6} + \\dfrac{\\sqrt{2}}{3}$.",
   "$\\dfrac{2}{3} + \\dfrac{2 \\sqrt{2}}{3}$."
  ],
  "answer": 0,
  "explain": "Miền ban đầu được mô tả rồi đảo cận như sau: $0\\le x\\le1,\\ x\\le y\\le1$ becomes $0\\le y\\le1,\\ 0\\le x\\le y$. Khi đó tích phân trong theo biến còn lại cho $I=\\displaystyle\\int_{0}^{1}y \\sqrt{y^{2} + 1}\\,dy$.<br>Tính nguyên hàm: $I=\\left[\\dfrac{y^{2} \\sqrt{y^{2} + 1}}{3} + \\dfrac{\\sqrt{y^{2} + 1}}{3}\\right]_{0}^{1}=\\dfrac{2 \\sqrt{2}}{3}-\\dfrac{1}{3}=- \\dfrac{1}{3} + \\dfrac{2 \\sqrt{2}}{3}$.",
  "note": "Sau khi đổi thứ tự, tích phân trong tạo ra đúng thừa số cần thiết để tích phân còn lại tính được bằng đổi biến.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-037"
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $40x=30(2100-x)=63000-30x$, nên $(70)x=63000$ và $x=\\dfrac{63000}{70}=900$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $1500-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(1500-x)$.<br>Nhân với $100$: $20x=40(1500-x)=60000-40x$, nên $(60)x=60000$ và $x=\\dfrac{60000}{60}=1000$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 30% của $600-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{30}{100}(600-x)$.<br>Nhân với $100$: $20x=30(600-x)=18000-30x$, nên $(50)x=18000$ và $x=\\dfrac{18000}{50}=360$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(2100-x)$.<br>Nhân với $100$: $20x=10(2100-x)=21000-10x$, nên $(30)x=21000$ và $x=\\dfrac{21000}{30}=700$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $1400-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(1400-x)$.<br>Nhân với $100$: $40x=30(1400-x)=42000-30x$, nên $(70)x=42000$ và $x=\\dfrac{42000}{70}=600$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $20x=30(2100-x)=63000-30x$, nên $(50)x=63000$ và $x=\\dfrac{63000}{50}=1260$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $40x=30(2100-x)=63000-30x$, nên $(70)x=63000$ và $x=\\dfrac{63000}{70}=900$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $1500-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(1500-x)$.<br>Nhân với $100$: $40x=20(1500-x)=30000-20x$, nên $(60)x=30000$ và $x=\\dfrac{30000}{60}=500$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $40x=30(2100-x)=63000-30x$, nên $(70)x=63000$ và $x=\\dfrac{63000}{70}=900$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 40% của $1400-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{40}{100}(1400-x)$.<br>Nhân với $100$: $10x=40(1400-x)=56000-40x$, nên $(50)x=56000$ và $x=\\dfrac{56000}{50}=1120$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $900-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(900-x)$.<br>Nhân với $100$: $40x=20(900-x)=18000-20x$, nên $(60)x=18000$ và $x=\\dfrac{18000}{60}=300$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $1200-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(1200-x)$.<br>Nhân với $100$: $40x=20(1200-x)=24000-20x$, nên $(60)x=24000$ và $x=\\dfrac{24000}{60}=400$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(2100-x)$.<br>Nhân với $100$: $20x=10(2100-x)=21000-10x$, nên $(30)x=21000$ và $x=\\dfrac{21000}{30}=700$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $900-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(900-x)$.<br>Nhân với $100$: $40x=20(900-x)=18000-20x$, nên $(60)x=18000$ và $x=\\dfrac{18000}{60}=300$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 10% của $1500-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{10}{100}(1500-x)$.<br>Nhân với $100$: $40x=10(1500-x)=15000-10x$, nên $(50)x=15000$ và $x=\\dfrac{15000}{50}=300$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 20% của $900-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{20}{100}(900-x)$.<br>Nhân với $100$: $10x=20(900-x)=18000-20x$, nên $(30)x=18000$ và $x=\\dfrac{18000}{30}=600$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 10% của $1500-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{10}{100}(1500-x)$.<br>Nhân với $100$: $30x=10(1500-x)=15000-10x$, nên $(40)x=15000$ và $x=\\dfrac{15000}{40}=375$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $20x=30(2100-x)=63000-30x$, nên $(50)x=63000$ và $x=\\dfrac{63000}{50}=1260$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $1200-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(1200-x)$.<br>Nhân với $100$: $40x=20(1200-x)=24000-20x$, nên $(60)x=24000$ và $x=\\dfrac{24000}{60}=400$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(2100-x)$.<br>Nhân với $100$: $20x=40(2100-x)=84000-40x$, nên $(60)x=84000$ và $x=\\dfrac{84000}{60}=1400$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 10% của $1200-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{10}{100}(1200-x)$.<br>Nhân với $100$: $30x=10(1200-x)=12000-10x$, nên $(40)x=12000$ và $x=\\dfrac{12000}{40}=300$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 20% của $1500-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{20}{100}(1500-x)$.<br>Nhân với $100$: $10x=20(1500-x)=30000-20x$, nên $(30)x=30000$ và $x=\\dfrac{30000}{30}=1000$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 30% của $600-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{30}{100}(600-x)$.<br>Nhân với $100$: $10x=30(600-x)=18000-30x$, nên $(40)x=18000$ và $x=\\dfrac{18000}{40}=450$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 40% của $1400-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{40}{100}(1400-x)$.<br>Nhân với $100$: $30x=40(1400-x)=56000-40x$, nên $(70)x=56000$ và $x=\\dfrac{56000}{70}=800$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $600-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(600-x)$.<br>Nhân với $100$: $20x=40(600-x)=24000-40x$, nên $(60)x=24000$ và $x=\\dfrac{24000}{60}=400$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 20% của $1500-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{20}{100}(1500-x)$.<br>Nhân với $100$: $10x=20(1500-x)=30000-20x$, nên $(30)x=30000$ và $x=\\dfrac{30000}{30}=1000$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(2100-x)$.<br>Nhân với $100$: $40x=20(2100-x)=42000-20x$, nên $(60)x=42000$ và $x=\\dfrac{42000}{60}=700$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 40% của $600-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{40}{100}(600-x)$.<br>Nhân với $100$: $10x=40(600-x)=24000-40x$, nên $(50)x=24000$ và $x=\\dfrac{24000}{50}=480$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 40% của $1400-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{40}{100}(1400-x)$.<br>Nhân với $100$: $30x=40(1400-x)=56000-40x$, nên $(70)x=56000$ và $x=\\dfrac{56000}{70}=800$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 20% của $1500-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{20}{100}(1500-x)$.<br>Nhân với $100$: $10x=20(1500-x)=30000-20x$, nên $(30)x=30000$ và $x=\\dfrac{30000}{30}=1000$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $1400-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(1400-x)$.<br>Nhân với $100$: $40x=30(1400-x)=42000-30x$, nên $(70)x=42000$ và $x=\\dfrac{42000}{70}=600$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 10% của $600-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{10}{100}(600-x)$.<br>Nhân với $100$: $40x=10(600-x)=6000-10x$, nên $(50)x=6000$ và $x=\\dfrac{6000}{50}=120$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 40% của $1400-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{40}{100}(1400-x)$.<br>Nhân với $100$: $30x=40(1400-x)=56000-40x$, nên $(70)x=56000$ và $x=\\dfrac{56000}{70}=800$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 40% của $1400-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{40}{100}(1400-x)$.<br>Nhân với $100$: $30x=40(1400-x)=56000-40x$, nên $(70)x=56000$ và $x=\\dfrac{56000}{70}=800$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 10% của $1500-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{10}{100}(1500-x)$.<br>Nhân với $100$: $30x=10(1500-x)=15000-10x$, nên $(40)x=15000$ và $x=\\dfrac{15000}{40}=375$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $1500-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(1500-x)$.<br>Nhân với $100$: $40x=20(1500-x)=30000-20x$, nên $(60)x=30000$ và $x=\\dfrac{30000}{60}=500$.",
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
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $900-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(900-x)$.<br>Nhân với $100$: $20x=40(900-x)=36000-40x$, nên $(60)x=36000$ và $x=\\dfrac{36000}{60}=600$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 30% của $1500-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{30}{100}(1500-x)$.<br>Nhân với $100$: $20x=30(1500-x)=45000-30x$, nên $(50)x=45000$ và $x=\\dfrac{45000}{50}=900$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 40% của $2100-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{40}{100}(2100-x)$.<br>Nhân với $100$: $10x=40(2100-x)=84000-40x$, nên $(50)x=84000$ và $x=\\dfrac{84000}{50}=1680$.",
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
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 10% của $1400-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{10}{100}(1400-x)$.<br>Nhân với $100$: $40x=10(1400-x)=14000-10x$, nên $(50)x=14000$ và $x=\\dfrac{14000}{50}=280$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $40x=30(2100-x)=63000-30x$, nên $(70)x=63000$ và $x=\\dfrac{63000}{70}=900$.",
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $40x=30(2100-x)=63000-30x$, nên $(70)x=63000$ và $x=\\dfrac{63000}{70}=900$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-043"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1200 nghìn người dùng, tổng số không đổi. Mỗi tháng có 20% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 600 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$400$.",
   "$800$.",
   "$600$.",
   "$540$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $1200-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(1200-x)$.<br>Nhân với $100$: $20x=10(1200-x)=12000-10x$, nên $(30)x=12000$ và $x=\\dfrac{12000}{30}=400$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-044"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1200 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 800 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$800$.",
   "$400$.",
   "$600$.",
   "$801$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $1200-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(1200-x)$.<br>Nhân với $100$: $20x=40(1200-x)=48000-40x$, nên $(60)x=48000$ và $x=\\dfrac{48000}{60}=800$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-045"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1400 khách, tổng số không đổi. Mỗi tháng có 30% khách quen của X chuyển sang Y và 10% khách quen của Y chuyển sang X. Hiện tại X có 933 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$350$.",
   "$1050$.",
   "$700$.",
   "$699$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 10% của $1400-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{10}{100}(1400-x)$.<br>Nhân với $100$: $30x=10(1400-x)=14000-10x$, nên $(40)x=14000$ và $x=\\dfrac{14000}{40}=350$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-046"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1200 nghìn người dùng, tổng số không đổi. Mỗi tháng có 10% người dùng của X chuyển sang Y và 40% người dùng của Y chuyển sang X. Hiện tại X có 800 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$960$.",
   "$240$.",
   "$600$.",
   "$880$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 40% của $1200-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{40}{100}(1200-x)$.<br>Nhân với $100$: $10x=40(1200-x)=48000-40x$, nên $(50)x=48000$ và $x=\\dfrac{48000}{50}=960$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-047"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1200 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 800 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$240$.",
   "$960$.",
   "$600$.",
   "$520$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 10% của $1200-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{10}{100}(1200-x)$.<br>Nhân với $100$: $40x=10(1200-x)=12000-10x$, nên $(50)x=12000$ và $x=\\dfrac{12000}{50}=240$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-048"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1200 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 20% người dùng của Y chuyển sang X. Hiện tại X có 800 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$400$.",
   "$800$.",
   "$600$.",
   "$560$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 20% của $1200-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{20}{100}(1200-x)$.<br>Nhân với $100$: $40x=20(1200-x)=24000-20x$, nên $(60)x=24000$ và $x=\\dfrac{24000}{60}=400$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-049"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1200 nghìn khách, tổng số không đổi. Mỗi tháng có 20% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 600 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$400$.",
   "$800$.",
   "$600$.",
   "$540$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $1200-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(1200-x)$.<br>Nhân với $100$: $20x=10(1200-x)=12000-10x$, nên $(30)x=12000$ và $x=\\dfrac{12000}{30}=400$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-050"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1400 khách, tổng số không đổi. Mỗi tháng có 40% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 466 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$600$.",
   "$800$.",
   "$700$.",
   "$559$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $1400-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(1400-x)$.<br>Nhân với $100$: $40x=30(1400-x)=42000-30x$, nên $(70)x=42000$ và $x=\\dfrac{42000}{70}=600$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-051"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 10% người dùng của X chuyển sang Y và 20% người dùng của Y chuyển sang X. Hiện tại X có 700 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1400$.",
   "$700$.",
   "$1050$.",
   "$910$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 20% của $2100-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{20}{100}(2100-x)$.<br>Nhân với $100$: $10x=20(2100-x)=42000-20x$, nên $(30)x=42000$ và $x=\\dfrac{42000}{30}=1400$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-052"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 1500 nghìn khách, tổng số không đổi. Mỗi tháng có 20% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 500 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$500$.",
   "$1000$.",
   "$750$.",
   "$501$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $1500-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(1500-x)$.<br>Nhân với $100$: $20x=10(1500-x)=15000-10x$, nên $(30)x=15000$ và $x=\\dfrac{15000}{30}=500$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-053"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 900 nghìn người dùng, tổng số không đổi. Mỗi tháng có 30% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 600 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$225$.",
   "$675$.",
   "$450$.",
   "$600$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 10% của $900-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{10}{100}(900-x)$.<br>Nhân với $100$: $30x=10(900-x)=9000-10x$, nên $(40)x=9000$ và $x=\\dfrac{9000}{40}=225$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-054"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 10% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 1400 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1575$.",
   "$525$.",
   "$1050$.",
   "$1470$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $10x=30(2100-x)=63000-30x$, nên $(40)x=63000$ và $x=\\dfrac{63000}{40}=1575$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-055"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 2100 nghìn khách, tổng số không đổi. Mỗi tháng có 20% khách hàng của X chuyển sang Y và 40% khách hàng của Y chuyển sang X. Hiện tại X có 1400 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1400$.",
   "$700$.",
   "$1050$.",
   "$1401$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(2100-x)$.<br>Nhân với $100$: $20x=40(2100-x)=84000-40x$, nên $(60)x=84000$ và $x=\\dfrac{84000}{60}=1400$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-056"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 10% khách quen của Y chuyển sang X. Hiện tại X có 700 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$700$.",
   "$1400$.",
   "$1050$.",
   "$701$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(2100-x)$.<br>Nhân với $100$: $20x=10(2100-x)=21000-10x$, nên $(30)x=21000$ và $x=\\dfrac{21000}{30}=700$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-057"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1200 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 600 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$800$.",
   "$400$.",
   "$600$.",
   "$720$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $1200-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(1200-x)$.<br>Nhân với $100$: $20x=40(1200-x)=48000-40x$, nên $(60)x=48000$ và $x=\\dfrac{48000}{60}=800$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-058"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 900 nghìn khách, tổng số không đổi. Mỗi tháng có 40% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 600 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$180$.",
   "$720$.",
   "$450$.",
   "$390$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 10% của $900-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{10}{100}(900-x)$.<br>Nhân với $100$: $40x=10(900-x)=9000-10x$, nên $(50)x=9000$ và $x=\\dfrac{9000}{50}=180$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-059"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1500 nghìn người dùng, tổng số không đổi. Mỗi tháng có 30% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 500 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$375$.",
   "$1125$.",
   "$750$.",
   "$450$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 10% của $1500-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{10}{100}(1500-x)$.<br>Nhân với $100$: $30x=10(1500-x)=15000-10x$, nên $(40)x=15000$ và $x=\\dfrac{15000}{40}=375$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-060"
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
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 30% của $x$; lượng chuyển từ Y sang X là 40% của $2100-x$. Cân bằng cho $\\dfrac{30}{100}x=\\dfrac{40}{100}(2100-x)$.<br>Nhân với $100$: $30x=40(2100-x)=84000-40x$, nên $(70)x=84000$ và $x=\\dfrac{84000}{70}=1200$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-061"
 },
 {
  "q": "Một thị trường chỉ có hai nhà mạng X và Y với tổng cộng 600 nghìn khách, tổng số không đổi. Mỗi tháng có 20% khách hàng của X chuyển sang Y và 10% khách hàng của Y chuyển sang X. Hiện tại X có 300 nghìn khách. Nếu quy luật này duy trì lâu dài thì số khách hàng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$200$.",
   "$400$.",
   "$300$.",
   "$270$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách hàng của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 10% của $600-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{10}{100}(600-x)$.<br>Nhân với $100$: $20x=10(600-x)=6000-10x$, nên $(30)x=6000$ và $x=\\dfrac{6000}{30}=200$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-062"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 700 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1400$.",
   "$700$.",
   "$1050$.",
   "$1120$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(2100-x)$.<br>Nhân với $100$: $20x=40(2100-x)=84000-40x$, nên $(60)x=84000$ và $x=\\dfrac{84000}{60}=1400$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-063"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 10% người dùng của Y chuyển sang X. Hiện tại X có 700 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$420$.",
   "$1680$.",
   "$1050$.",
   "$560$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 10% của $2100-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{10}{100}(2100-x)$.<br>Nhân với $100$: $40x=10(2100-x)=21000-10x$, nên $(50)x=21000$ và $x=\\dfrac{21000}{50}=420$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-064"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 1200 khách, tổng số không đổi. Mỗi tháng có 10% khách quen của X chuyển sang Y và 30% khách quen của Y chuyển sang X. Hiện tại X có 600 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$900$.",
   "$300$.",
   "$600$.",
   "$720$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 30% của $1200-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{30}{100}(1200-x)$.<br>Nhân với $100$: $10x=30(1200-x)=36000-30x$, nên $(40)x=36000$ và $x=\\dfrac{36000}{40}=900$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-065"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 1400 nghìn người dùng, tổng số không đổi. Mỗi tháng có 40% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 933 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$600$.",
   "$800$.",
   "$700$.",
   "$699$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 40% của $x$; lượng chuyển từ Y sang X là 30% của $1400-x$. Cân bằng cho $\\dfrac{40}{100}x=\\dfrac{30}{100}(1400-x)$.<br>Nhân với $100$: $40x=30(1400-x)=42000-30x$, nên $(70)x=42000$ và $x=\\dfrac{42000}{70}=600$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-066"
 },
 {
  "q": "Một thị trường chỉ có hai siêu thị X và Y với tổng cộng 2100 khách, tổng số không đổi. Mỗi tháng có 20% khách quen của X chuyển sang Y và 40% khách quen của Y chuyển sang X. Hiện tại X có 1050 khách. Nếu quy luật này duy trì lâu dài thì số khách quen của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1400$.",
   "$700$.",
   "$1050$.",
   "$1260$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số khách quen của X ở trạng thái ổn định. Lượng rời X là 20% của $x$; lượng chuyển từ Y sang X là 40% của $2100-x$. Cân bằng cho $\\dfrac{20}{100}x=\\dfrac{40}{100}(2100-x)$.<br>Nhân với $100$: $20x=40(2100-x)=84000-40x$, nên $(60)x=84000$ và $x=\\dfrac{84000}{60}=1400$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-067"
 },
 {
  "q": "Một thị trường chỉ có hai ứng dụng gọi xe X và Y với tổng cộng 2100 nghìn người dùng, tổng số không đổi. Mỗi tháng có 10% người dùng của X chuyển sang Y và 30% người dùng của Y chuyển sang X. Hiện tại X có 1050 nghìn người dùng. Nếu quy luật này duy trì lâu dài thì số người dùng của X sẽ ổn định (tức là không đổi từ tháng này sang tháng sau) ở mức",
  "options": [
   "$1575$.",
   "$525$.",
   "$1050$.",
   "$1260$."
  ],
  "answer": 0,
  "explain": "Gọi $x$ là số người dùng của X ở trạng thái ổn định. Lượng rời X là 10% của $x$; lượng chuyển từ Y sang X là 30% của $2100-x$. Cân bằng cho $\\dfrac{10}{100}x=\\dfrac{30}{100}(2100-x)$.<br>Nhân với $100$: $10x=30(2100-x)=63000-30x$, nên $(40)x=63000$ và $x=\\dfrac{63000}{40}=1575$.",
  "note": "Ở trạng thái ổn định, lượng khách rời X mỗi tháng bằng lượng khách chuyển đến X; kết quả không phụ thuộc số khách ban đầu.",
  "topic": "he",
  "type": "mcq",
  "id": "he-068"
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
  "id": "he-069"
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
  "id": "he-070"
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
  "id": "he-071"
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
  "id": "he-072"
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
  "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+1=\\lambda$, $16=\\lambda a$, $a^2 - 8=\\lambda2$.<br>Với $(a,b)=(4,3)$: $b+1=4=4$; $16=4\\cdot4=16$; $a^2 - 8=8=4\\cdot2=8$. Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=4$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
  "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-073"
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
  "id": "he-074"
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
  "id": "he-075"
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
  "id": "he-076"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 3y + 2z = 0\\\\ x + my + 2z = 0\\\\ 2x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$25$.",
   "$7$.",
   "$12$.",
   "$-7$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 7 m + 12 = \\left(m - 4\\right) \\left(m - 3\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 3$ hoặc $m = 4$<br>Giá trị cần tìm: $25$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-077"
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
  "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+1=\\lambda$, $16=\\lambda a$, $a^2 - 4=\\lambda3$.<br>Với $(a,b)=(4,3)$: $b+1=4=4$; $16=4\\cdot4=16$; $a^2 - 4=12=4\\cdot3=12$. Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=4$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
  "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-078"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + 2z = 0\\\\ 3x + my + 3z = 0\\\\ 2x + 3y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$-2$.",
   "$-3$.",
   "$10$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 2 m - 3 = \\left(m - 1\\right) \\left(m + 3\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -3$ hoặc $m = 1$<br>Giá trị cần tìm: $-2$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-079"
 },
 {
  "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + y + 3z + 2t = 0\\\\ -y + z + t = 0\\\\ x + 3y + 3z + 3t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
  "options": [
   "$1$.",
   "$3$.",
   "$4$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & 1 & 3 & 2 \\\\ 0 & -1 & 1 & 1 \\\\ 0 & 0 & -2 & -3\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 3$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 3 = 1$",
  "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số.",
  "topic": "he",
  "type": "mcq",
  "id": "he-080"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y - 2z = 0\\\\ 2x + my - z = 0\\\\ -x + 3y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$-7$.",
   "$6$.",
   "$50$.",
   "$-6$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 6 m - 7 = \\left(m - 7\\right) \\left(m + 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -1$ hoặc $m = 7$<br>Giá trị cần tìm: $-7$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-081"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + y + 2z = 0\\\\ -2x + my + 2z = 0\\\\ 2x + 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$20$.",
   "$2$.",
   "$-8$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 2 m - 8 = \\left(m - 4\\right) \\left(m + 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -2$ hoặc $m = 4$<br>Giá trị cần tìm: $20$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-082"
 },
 {
  "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b - 1)x + 8y = a^2 + 8\\\\ x + ay = 3\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
  "options": [
   "$(a;b) = (2;5)$.",
   "$(a;b) = (-2;5)$.",
   "$(a;b) = (2;-5)$.",
   "$(a;b) = (-2;-5)$."
  ],
  "answer": 0,
  "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+-1=\\lambda$, $8=\\lambda a$, $a^2 + 8=\\lambda3$.<br>Với $(a,b)=(2,5)$: $b+-1=4=4$; $8=4\\cdot2=8$; $a^2 + 8=12=4\\cdot3=12$. Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=4$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
  "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-083"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + y - 2z = 0\\\\ x + my - 2z = 0\\\\ 3x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$-5$.",
   "$-6$.",
   "$37$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 5 m - 6 = \\left(m - 1\\right) \\left(m + 6\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -6$ hoặc $m = 1$<br>Giá trị cần tìm: $-5$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-084"
 },
 {
  "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y - 2z - 2t = 0\\\\ y = 0\\\\ -x + 4y + 2z + 2t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
  "options": [
   "$2$.",
   "$3$.",
   "$4$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & -2 & -2 & -2 \\\\ 0 & 1 & 0 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 2$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 2 = 2$",
  "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số.",
  "topic": "he",
  "type": "mcq",
  "id": "he-085"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - z = 0\\\\ 2x + my - z = 0\\\\ 2x + 3y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$-3$.",
   "$-2$.",
   "$10$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 2 m - 3 = \\left(m - 1\\right) \\left(m + 3\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -3$ hoặc $m = 1$<br>Giá trị cần tìm: $-3$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-086"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + 3z = 0\\\\ 2x + my + z = 0\\\\ -2x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$82$.",
   "$-10$.",
   "$9$.",
   "$10$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 10 m + 9 = \\left(m + 1\\right) \\left(m + 9\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -9$ hoặc $m = -1$<br>Giá trị cần tìm: $82$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-087"
 },
 {
  "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b + 2)x - 8y = a^2\\\\ x + ay = 1\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
  "options": [
   "$(a;b) = (-2;2)$.",
   "$(a;b) = (2;2)$.",
   "$(a;b) = (-2;-2)$.",
   "$(a;b) = (2;-2)$."
  ],
  "answer": 0,
  "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+2=\\lambda$, $-8=\\lambda a$, $a^2=\\lambda1$.<br>Với $(a,b)=(-2,2)$: $b+2=4=4$; $-8=4\\cdot-2=-8$; $a^2=4=4\\cdot1=4$. Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=4$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
  "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-088"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y + 3z = 0\\\\ my - 2z = 0\\\\ -x - y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$-3$.",
   "$-4$.",
   "$17$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 3 m - 4 = \\left(m - 1\\right) \\left(m + 4\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -4$ hoặc $m = 1$<br>Giá trị cần tìm: $-3$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-089"
 },
 {
  "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y - z + t = 0\\\\ -2x + y - 2z - 2t = 0\\\\ 2x - z - t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
  "options": [
   "$1$.",
   "$3$.",
   "$4$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & -1 & -1 & 1 \\\\ 0 & -1 & -4 & 0 \\\\ 0 & 0 & 7 & 3\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 3$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 3 = 1$",
  "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số.",
  "topic": "he",
  "type": "mcq",
  "id": "he-090"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 2y - z = 0\\\\ -x + my = 0\\\\ -x - 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$-2$.",
   "$-1$.",
   "$5$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + m - 2 = \\left(m - 1\\right) \\left(m + 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -2$ hoặc $m = 1$<br>Giá trị cần tìm: $-2$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-091"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + y + 3z = 0\\\\ 2x + my = 0\\\\ -x - y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$13$.",
   "$-1$.",
   "$-6$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + m - 6 = \\left(m - 2\\right) \\left(m + 3\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -3$ hoặc $m = 2$<br>Giá trị cần tìm: $13$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-092"
 },
 {
  "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b - 1)x + 12y = a^2 - 7\\\\ x + ay = 3\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
  "options": [
   "$(a;b) = (4;4)$.",
   "$(a;b) = (-4;4)$.",
   "$(a;b) = (4;-4)$.",
   "$(a;b) = (-4;-4)$."
  ],
  "answer": 0,
  "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+-1=\\lambda$, $12=\\lambda a$, $a^2 - 7=\\lambda3$.<br>Với $(a,b)=(4,4)$: $b+-1=3=3$; $12=3\\cdot4=12$; $a^2 - 7=9=3\\cdot3=9$. Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=3$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
  "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-093"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + z = 0\\\\ 3x + my + 3z = 0\\\\ 3x + 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$-3$.",
   "$-18$.",
   "$45$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 3 m - 18 = \\left(m - 3\\right) \\left(m + 6\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -6$ hoặc $m = 3$<br>Giá trị cần tìm: $-3$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-094"
 },
 {
  "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y + 2z = 0\\\\ x + z + 2t = 0\\\\ x - 3y + 4z - 4t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
  "options": [
   "$2$.",
   "$3$.",
   "$4$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & -1 & 2 & 0 \\\\ 0 & 1 & -1 & 2 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 2$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 2 = 2$",
  "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số.",
  "topic": "he",
  "type": "mcq",
  "id": "he-095"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - y = 0\\\\ 3x + my - 2z = 0\\\\ -2x + 3y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$2$.",
   "$-3$.",
   "$5$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} + 3 m + 2 = \\left(m + 1\\right) \\left(m + 2\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -2$ hoặc $m = -1$<br>Giá trị cần tìm: $2$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-096"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + 3z = 0\\\\ my + z = 0\\\\ 2x + 3y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng bình phương tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$50$.",
   "$6$.",
   "$-7$.",
   "$-6$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 6 m - 7 = \\left(m - 7\\right) \\left(m + 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -1$ hoặc $m = 7$<br>Giá trị cần tìm: $50$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-097"
 },
 {
  "q": "Cho hệ phương trình tuyến tính $\\begin{cases}(b - 1)x - 6y = a^2 - 1\\\\ x + ay = 1\\end{cases}$ (với $x, y$ là ẩn; $a, b$ là tham số). Cặp giá trị nào sau đây làm cho hệ có vô số nghiệm?",
  "options": [
   "$(a;b) = (-2;4)$.",
   "$(a;b) = (2;4)$.",
   "$(a;b) = (-2;-4)$.",
   "$(a;b) = (2;-4)$."
  ],
  "answer": 0,
  "explain": "Để vô số nghiệm, ba hệ số của phương trình đầu phải cùng tỉ lệ với $(1,a,c_0)$ của phương trình sau: $b+-1=\\lambda$, $-6=\\lambda a$, $a^2 - 1=\\lambda1$.<br>Với $(a,b)=(-2,4)$: $b+-1=3=3$; $-6=3\\cdot-2=-6$; $a^2 - 1=3=3\\cdot1=3$. Do đó hai phương trình tỉ lệ đúng cùng hệ số $\\lambda=3$.<br>Kiểm tra các cặp còn lại bằng cùng ba phép thế trên; ít nhất một hệ số không đúng tỉ lệ (do các cặp đã lọc bằng điều kiện works), nên không tạo cùng một phương trình.",
  "note": "Hệ hai phương trình hai ẩn có vô số nghiệm khi các hệ số và vế phải tỉ lệ: $\\dfrac{a_1}{a_2} = \\dfrac{b_1}{b_2} = \\dfrac{c_1}{c_2}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-098"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + y - z = 0\\\\ 2x + my + z = 0\\\\ -2x + y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tổng tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$4$.",
   "$-5$.",
   "$26$.",
   "$-4$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 4 m - 5 = \\left(m - 5\\right) \\left(m + 1\\right)$<br>$\\det A = 0 \\Leftrightarrow m = -1$ hoặc $m = 5$<br>Giá trị cần tìm: $4$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-099"
 },
 {
  "q": "Tập nghiệm của hệ phương trình tuyến tính thuần nhất $\\begin{cases}x + 3z - 2t = 0\\\\ -x + 3y + 2z + 2t = 0\\\\ 3x - 6y - z - 6t = 0\\end{cases}$ (bốn ẩn $x, y, z, t$) là một không gian con của $\\mathbb{R}^4$. Số chiều của không gian nghiệm đó bằng",
  "options": [
   "$2$.",
   "$3$.",
   "$4$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Đưa ma trận hệ số về dạng bậc thang: $\\begin{pmatrix}1 & 0 & 3 & -2 \\\\ 0 & 3 & 5 & 0 \\\\ 0 & 0 & 0 & 0\\end{pmatrix}$<br>Hạng của ma trận hệ số: $r = 2$<br>Số chiều không gian nghiệm = số ẩn $-$ hạng $= 4 - 2 = 2$",
  "note": "Số chiều không gian nghiệm = số ẩn $-$ hạng của ma trận hệ số.",
  "topic": "he",
  "type": "mcq",
  "id": "he-100"
 },
 {
  "q": "Cho hệ phương trình tuyến tính thuần nhất $\\begin{cases}x - 2y + 3z = 0\\\\ -2x + my + 3z = 0\\\\ x - 2y + mz = 0\\end{cases}$ (với $x, y, z$ là ẩn, $m$ là tham số). Giá trị của tích tất cả các giá trị của $m$ để hệ có nghiệm khác nghiệm tầm thường $(0;0;0)$ bằng",
  "options": [
   "$12$.",
   "$7$.",
   "$25$.",
   "$-7$."
  ],
  "answer": 0,
  "explain": "Hệ thuần nhất 3 phương trình, 3 ẩn có nghiệm không tầm thường $\\Leftrightarrow$ định thức của ma trận hệ số bằng 0<br>$\\det A = m^{2} - 7 m + 12 = \\left(m - 4\\right) \\left(m - 3\\right)$<br>$\\det A = 0 \\Leftrightarrow m = 3$ hoặc $m = 4$<br>Giá trị cần tìm: $12$",
  "note": "Hệ thuần nhất vuông có nghiệm khác không $\\Leftrightarrow \\det A = 0$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-101"
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
  "explain": "Từng phần trên $[0,R]$ với $u=x$, $dv=e^{-x}dx$, $v=-e^{-x}/1$: $\\int_0^Rxe^{-x}dx=[-xe^{-x}/1]_0^R+\\frac1{1}\\int_0^Re^{-x}dx$.<br>Cho $R\\to\\infty$, $Re^{-1R}\\to0$; tích phân còn lại là $[-e^{-1x}/1]_0^\\infty=1/1$. Vậy $I=0+\\dfrac1{1}\\cdot\\dfrac1{1}=1$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-069"
 },
 {
  "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 1$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
  "options": [
   "$\\dfrac{\\ln\\left(1 + \\sqrt{2}\\right)}{2} + \\dfrac{\\sqrt{2}}{2}$.",
   "$\\dfrac{\\ln\\left(1 + \\sqrt{2}\\right)}{4} + \\dfrac{\\sqrt{2}}{4}$.",
   "$\\ln\\left(1 + \\sqrt{2}\\right) + \\sqrt{2}$.",
   "$\\dfrac{\\ln\\left(1 + \\sqrt{2}\\right)}{2} + \\dfrac{\\sqrt{2}}{2} + 1$."
  ],
  "answer": 0,
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{1}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{1} = \\dfrac{\\ln\\left(1 + \\sqrt{2}\\right)}{2} + \\dfrac{\\sqrt{2}}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-070"
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
  "explain": "Dải ngang ở độ sâu $(0 + y)$ m, diện tích $2\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (0 + y) \\cdot 2\\,dy$<br>$F = \\displaystyle\\int_0^{1} 9800 \\cdot 2 \\cdot (0 + y)\\,dy = 98002\\left[0y + \\dfrac{y^2}{2}\\right]_0^{1} = 9800\\,N = \\dfrac{49}{5}\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-071"
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
  "explain": "Giao điểm: $x^2 = 8x \\Rightarrow x = 0$ và $x = 8$<br>$S = \\displaystyle\\int_0^{8}(8x - x^2)\\,dx = \\left[\\dfrac{8x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{8} = \\dfrac{256}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-072"
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
  "explain": "Đặt $x=4t$, $dx=4dt$, $x^2+16=16(1+t^2)$: $\\int_0^\\infty\\dfrac{dx}{x^2+16}=\\dfrac1{4}\\int_0^\\infty\\dfrac{dt}{1+t^2}$.<br>$=\\dfrac1{4}[\\arctan t]_0^\\infty=\\dfrac1{4}(\\dfrac\\pi2-0)=\\dfrac{\\pi}{8}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-073"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 7$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$\\dfrac{14}{3}$.",
   "$\\dfrac{7}{2}$.",
   "$\\dfrac{7}{3}$.",
   "$\\dfrac{21}{4}$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 7^2 = \\dfrac{49}{2}$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{7} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{7} = \\dfrac{343}{3}$<br>$\\bar{x} = \\dfrac{\\dfrac{343}{3}}{\\dfrac{49}{2}} = \\dfrac{14}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-074"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 16$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$128 \\pi$.",
   "$64 \\pi$.",
   "$256 \\pi$.",
   "$16 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{16} y^2\\,dx = \\pi\\int_0^{16} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{16} = 128 \\pi$<br>Kết quả: $128 \\pi$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-075"
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
  "explain": "Phân tích phân thức: $\\dfrac1{x(x+1)}=\\dfrac1{1}\\left(\\dfrac1x-\\dfrac1{x+1}\\right)$ vì $\\dfrac{(x+1)-x}{1x(x+1)}=\\dfrac1{x(x+1)}$.<br>$I_R=\\dfrac1{1}\\left[\\ln x-\\ln(x+1)\\right]_1^R=\\dfrac1{1}\\ln\\dfrac{2R}{R+1}\\to\\dfrac1{1}\\ln2=\\ln 2$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-076"
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
  "id": "dh-077"
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
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{6}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{6} = \\dfrac{\\operatorname{asinh}{\\left(6 \\right)}}{2} + 3 \\sqrt{37}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-078"
 },
 {
  "q": "Một tấm phẳng hình chữ nhật chiều rộng 4 m, chiều cao 1 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 0 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
  "options": [
   "19600 <i>N</i>.",
   "9800 <i>N</i>.",
   "39200 <i>N</i>.",
   "-19600 <i>N</i>."
  ],
  "answer": 0,
  "explain": "Dải ngang ở độ sâu $(0 + y)$ m, diện tích $4\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (0 + y) \\cdot 4\\,dy$<br>$F = \\displaystyle\\int_0^{1} 9800 \\cdot 4 \\cdot (0 + y)\\,dy = 98004\\left[0y + \\dfrac{y^2}{2}\\right]_0^{1} = 19600\\,N = \\dfrac{98}{5}\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-079"
 },
 {
  "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 3x$.",
  "options": [
   "$\\dfrac{9}{2}$.",
   "$\\dfrac{9}{4}$.",
   "$9$.",
   "$\\dfrac{11}{2}$."
  ],
  "answer": 0,
  "explain": "Giao điểm: $x^2 = 3x \\Rightarrow x = 0$ và $x = 3$<br>$S = \\displaystyle\\int_0^{3}(3x - x^2)\\,dx = \\left[\\dfrac{3x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{3} = \\dfrac{9}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-080"
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
  "explain": "Đặt $I=\\int_0^\\infty e^{-ax}\\sin bx\\,dx$, $J=\\int_0^\\infty e^{-ax}\\cos bx\\,dx$. Từng phần cho $I=[-e^{-ax}\\cos bx/b]_0^\\infty-(a/b)J=1/b-(a/b)J$.<br>Từng phần với $J$: $J=[e^{-ax}\\sin bx/b]_0^\\infty+(a/b)I=(a/b)I$. Thế vào phương trình đầu: $I=1/b-(a^2/b^2)I$, nên $I(1+a^2/b^2)=1/b$ và $I=b/(a^2+b^2)=\\dfrac{4}{25}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-081"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 6$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$4$.",
   "$3$.",
   "$2$.",
   "$\\dfrac{9}{2}$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 6^2 = 18$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{6} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{6} = 72$<br>$\\bar{x} = \\dfrac{72}{18} = 4$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-082"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 25$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$\\dfrac{625 \\pi}{2}$.",
   "$\\dfrac{625 \\pi}{4}$.",
   "$625 \\pi$.",
   "$25 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{25} y^2\\,dx = \\pi\\int_0^{25} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{25} = \\dfrac{625 \\pi}{2}$<br>Kết quả: $\\dfrac{625 \\pi}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-083"
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
  "id": "dh-084"
 },
 {
  "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 9$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
  "options": [
   "$\\dfrac{\\operatorname{asinh}{\\left(9 \\right)}}{2} + \\dfrac{9 \\sqrt{82}}{2}$.",
   "$\\dfrac{\\operatorname{asinh}{\\left(9 \\right)}}{4} + \\dfrac{9 \\sqrt{82}}{4}$.",
   "$\\operatorname{asinh}{\\left(9 \\right)} + 9 \\sqrt{82}$.",
   "$1 + \\dfrac{\\operatorname{asinh}{\\left(9 \\right)}}{2} + \\dfrac{9 \\sqrt{82}}{2}$."
  ],
  "answer": 0,
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{9}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{9} = \\dfrac{\\operatorname{asinh}{\\left(9 \\right)}}{2} + \\dfrac{9 \\sqrt{82}}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-085"
 },
 {
  "q": "Một tấm phẳng hình chữ nhật chiều rộng 4 m, chiều cao 1 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 1 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
  "options": [
   "58800 <i>N</i>.",
   "29400 <i>N</i>.",
   "117600 <i>N</i>.",
   "78400 <i>N</i>."
  ],
  "answer": 0,
  "explain": "Dải ngang ở độ sâu $(1 + y)$ m, diện tích $4\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (1 + y) \\cdot 4\\,dy$<br>$F = \\displaystyle\\int_0^{1} 9800 \\cdot 4 \\cdot (1 + y)\\,dy = 98004\\left[1y + \\dfrac{y^2}{2}\\right]_0^{1} = 58800\\,N = \\dfrac{294}{5}\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-086"
 },
 {
  "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 9x$.",
  "options": [
   "$\\dfrac{243}{2}$.",
   "$\\dfrac{243}{4}$.",
   "$243$.",
   "$\\dfrac{245}{2}$."
  ],
  "answer": 0,
  "explain": "Giao điểm: $x^2 = 9x \\Rightarrow x = 0$ và $x = 9$<br>$S = \\displaystyle\\int_0^{9}(9x - x^2)\\,dx = \\left[\\dfrac{9x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{9} = \\dfrac{243}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-087"
 },
 {
  "q": "Thể tích của khối tròn xoay tạo thành khi quay quanh trục $Ox$ hình phẳng giới hạn bởi các đường $y = e^x$, $y = 0$, $x = 0$ và $x = 3$ bằng",
  "options": [
   "$- \\dfrac{\\pi \\left(1 - e^{6}\\right)}{2}$.",
   "$- \\dfrac{1}{2} + \\dfrac{e^{6}}{2}$.",
   "$- \\pi \\left(1 - e^{3}\\right)$.",
   "$- \\pi \\left(1 - e^{6}\\right)$."
  ],
  "answer": 0,
  "explain": "$V=\\pi\\int_0^{3}y^2dx=\\pi\\int_0^{3}e^{2 x}dx$; bình phương hàm số cho biểu thức dưới dấu tích phân như trên.<br>Nguyên hàm là $\\dfrac{e^{2 x}}{2}$. Thế cận: $V=\\pi(\\dfrac{e^{6}}{2}-\\dfrac{1}{2})=- \\dfrac{\\pi \\left(1 - e^{6}\\right)}{2}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-088"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 9$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$6$.",
   "$\\dfrac{9}{2}$.",
   "$3$.",
   "$\\dfrac{27}{4}$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 9^2 = \\dfrac{81}{2}$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{9} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{9} = 243$<br>$\\bar{x} = \\dfrac{243}{\\dfrac{81}{2}} = 6$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-089"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 100$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$5000 \\pi$.",
   "$2500 \\pi$.",
   "$10000 \\pi$.",
   "$100 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{100} y^2\\,dx = \\pi\\int_0^{100} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{100} = 5000 \\pi$<br>Kết quả: $5000 \\pi$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-090"
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
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-091"
 },
 {
  "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 5$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
  "options": [
   "$\\dfrac{\\operatorname{asinh}{\\left(5 \\right)}}{2} + \\dfrac{5 \\sqrt{26}}{2}$.",
   "$\\dfrac{\\operatorname{asinh}{\\left(5 \\right)}}{4} + \\dfrac{5 \\sqrt{26}}{4}$.",
   "$\\operatorname{asinh}{\\left(5 \\right)} + 5 \\sqrt{26}$.",
   "$1 + \\dfrac{\\operatorname{asinh}{\\left(5 \\right)}}{2} + \\dfrac{5 \\sqrt{26}}{2}$."
  ],
  "answer": 0,
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{5}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{5} = \\dfrac{\\operatorname{asinh}{\\left(5 \\right)}}{2} + \\dfrac{5 \\sqrt{26}}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-092"
 },
 {
  "q": "Một tấm phẳng hình chữ nhật chiều rộng 3 m, chiều cao 1 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 2 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
  "options": [
   "73500 <i>N</i>.",
   "36750 <i>N</i>.",
   "147000 <i>N</i>.",
   "88200 <i>N</i>."
  ],
  "answer": 0,
  "explain": "Dải ngang ở độ sâu $(2 + y)$ m, diện tích $3\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (2 + y) \\cdot 3\\,dy$<br>$F = \\displaystyle\\int_0^{1} 9800 \\cdot 3 \\cdot (2 + y)\\,dy = 98003\\left[2y + \\dfrac{y^2}{2}\\right]_0^{1} = 73500\\,N = \\dfrac{147}{2}\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-093"
 },
 {
  "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 2x$.",
  "options": [
   "$\\dfrac{4}{3}$.",
   "$\\dfrac{2}{3}$.",
   "$\\dfrac{8}{3}$.",
   "$\\dfrac{7}{3}$."
  ],
  "answer": 0,
  "explain": "Giao điểm: $x^2 = 2x \\Rightarrow x = 0$ và $x = 2$<br>$S = \\displaystyle\\int_0^{2}(2x - x^2)\\,dx = \\left[\\dfrac{2x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{2} = \\dfrac{4}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-094"
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
  "explain": "Đặt $x=1t$, $dx=1dt$, $x^2+1=1(1+t^2)$: $\\int_0^\\infty\\dfrac{dx}{x^2+1}=\\dfrac1{1}\\int_0^\\infty\\dfrac{dt}{1+t^2}$.<br>$=\\dfrac1{1}[\\arctan t]_0^\\infty=\\dfrac1{1}(\\dfrac\\pi2-0)=\\dfrac{\\pi}{2}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-095"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 3$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$2$.",
   "$\\dfrac{3}{2}$.",
   "$1$.",
   "$\\dfrac{9}{4}$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 3^2 = \\dfrac{9}{2}$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{3} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{3} = 9$<br>$\\bar{x} = \\dfrac{9}{\\dfrac{9}{2}} = 2$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-096"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 36$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$648 \\pi$.",
   "$324 \\pi$.",
   "$1296 \\pi$.",
   "$36 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{36} y^2\\,dx = \\pi\\int_0^{36} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{36} = 648 \\pi$<br>Kết quả: $648 \\pi$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-097"
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
  "explain": "Phân tích phân thức: $\\dfrac1{x(x+2)}=\\dfrac1{2}\\left(\\dfrac1x-\\dfrac1{x+2}\\right)$ vì $\\dfrac{(x+2)-x}{2x(x+2)}=\\dfrac1{x(x+2)}$.<br>$I_R=\\dfrac1{2}\\left[\\ln x-\\ln(x+2)\\right]_1^R=\\dfrac1{2}\\ln\\dfrac{3R}{R+2}\\to\\dfrac1{2}\\ln3=\\dfrac{\\ln 3}{2}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-098"
 },
 {
  "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 4$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
  "options": [
   "$\\dfrac{\\operatorname{asinh}{\\left(4 \\right)}}{2} + 2 \\sqrt{17}$.",
   "$\\dfrac{\\operatorname{asinh}{\\left(4 \\right)}}{4} + \\sqrt{17}$.",
   "$\\operatorname{asinh}{\\left(4 \\right)} + 4 \\sqrt{17}$.",
   "$1 + \\dfrac{\\operatorname{asinh}{\\left(4 \\right)}}{2} + 2 \\sqrt{17}$."
  ],
  "answer": 0,
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{4}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{4} = \\dfrac{\\operatorname{asinh}{\\left(4 \\right)}}{2} + 2 \\sqrt{17}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-099"
 },
 {
  "q": "Một tấm phẳng hình chữ nhật chiều rộng 2 m, chiều cao 1 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 1 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
  "options": [
   "29400 <i>N</i>.",
   "14700 <i>N</i>.",
   "58800 <i>N</i>.",
   "39200 <i>N</i>."
  ],
  "answer": 0,
  "explain": "Dải ngang ở độ sâu $(1 + y)$ m, diện tích $2\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (1 + y) \\cdot 2\\,dy$<br>$F = \\displaystyle\\int_0^{1} 9800 \\cdot 2 \\cdot (1 + y)\\,dy = 98002\\left[1y + \\dfrac{y^2}{2}\\right]_0^{1} = 29400\\,N = \\dfrac{147}{5}\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-100"
 },
 {
  "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 1x$.",
  "options": [
   "$\\dfrac{1}{6}$.",
   "$\\dfrac{1}{12}$.",
   "$\\dfrac{1}{3}$.",
   "$\\dfrac{7}{6}$."
  ],
  "answer": 0,
  "explain": "Giao điểm: $x^2 = 1x \\Rightarrow x = 0$ và $x = 1$<br>$S = \\displaystyle\\int_0^{1}(1x - x^2)\\,dx = \\left[\\dfrac{1x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{1} = \\dfrac{1}{6}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-101"
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
  "explain": "Đặt $I=\\int_0^\\infty e^{-ax}\\sin bx\\,dx$, $J=\\int_0^\\infty e^{-ax}\\cos bx\\,dx$. Từng phần cho $I=[-e^{-ax}\\cos bx/b]_0^\\infty-(a/b)J=1/b-(a/b)J$.<br>Từng phần với $J$: $J=[e^{-ax}\\sin bx/b]_0^\\infty+(a/b)I=(a/b)I$. Thế vào phương trình đầu: $I=1/b-(a^2/b^2)I$, nên $I(1+a^2/b^2)=1/b$ và $I=b/(a^2+b^2)=\\dfrac{3}{25}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-102"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 2$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$\\dfrac{4}{3}$.",
   "$1$.",
   "$\\dfrac{2}{3}$.",
   "$\\dfrac{3}{2}$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 2^2 = 2$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{2} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{2} = \\dfrac{8}{3}$<br>$\\bar{x} = \\dfrac{\\dfrac{8}{3}}{2} = \\dfrac{4}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-103"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 49$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$\\dfrac{2401 \\pi}{2}$.",
   "$\\dfrac{2401 \\pi}{4}$.",
   "$2401 \\pi$.",
   "$49 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{49} y^2\\,dx = \\pi\\int_0^{49} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{49} = \\dfrac{2401 \\pi}{2}$<br>Kết quả: $\\dfrac{2401 \\pi}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-104"
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
  "id": "dh-105"
 },
 {
  "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 8$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
  "options": [
   "$\\dfrac{\\operatorname{asinh}{\\left(8 \\right)}}{2} + 4 \\sqrt{65}$.",
   "$\\dfrac{\\operatorname{asinh}{\\left(8 \\right)}}{4} + 2 \\sqrt{65}$.",
   "$\\operatorname{asinh}{\\left(8 \\right)} + 8 \\sqrt{65}$.",
   "$1 + \\dfrac{\\operatorname{asinh}{\\left(8 \\right)}}{2} + 4 \\sqrt{65}$."
  ],
  "answer": 0,
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{8}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{8} = \\dfrac{\\operatorname{asinh}{\\left(8 \\right)}}{2} + 4 \\sqrt{65}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-106"
 },
 {
  "q": "Một tấm phẳng hình chữ nhật chiều rộng 2 m, chiều cao 2 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 1 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
  "options": [
   "78400 <i>N</i>.",
   "39200 <i>N</i>.",
   "156800 <i>N</i>.",
   "117600 <i>N</i>."
  ],
  "answer": 0,
  "explain": "Dải ngang ở độ sâu $(1 + y)$ m, diện tích $2\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (1 + y) \\cdot 2\\,dy$<br>$F = \\displaystyle\\int_0^{2} 9800 \\cdot 2 \\cdot (1 + y)\\,dy = 98002\\left[1y + \\dfrac{y^2}{2}\\right]_0^{2} = 78400\\,N = \\dfrac{392}{5}\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-107"
 },
 {
  "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 4x$.",
  "options": [
   "$\\dfrac{32}{3}$.",
   "$\\dfrac{16}{3}$.",
   "$\\dfrac{64}{3}$.",
   "$\\dfrac{35}{3}$."
  ],
  "answer": 0,
  "explain": "Giao điểm: $x^2 = 4x \\Rightarrow x = 0$ và $x = 4$<br>$S = \\displaystyle\\int_0^{4}(4x - x^2)\\,dx = \\left[\\dfrac{4x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{4} = \\dfrac{32}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-108"
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
  "explain": "$V=\\pi\\int_0^{2}y^2dx=\\pi\\int_0^{2}x^{3}dx$; bình phương hàm số cho biểu thức dưới dấu tích phân như trên.<br>Nguyên hàm là $\\dfrac{x^{4}}{4}$. Thế cận: $V=\\pi(4-0)=4 \\pi$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-109"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 8$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$\\dfrac{16}{3}$.",
   "$4$.",
   "$\\dfrac{8}{3}$.",
   "$6$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 8^2 = 32$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{8} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{8} = \\dfrac{512}{3}$<br>$\\bar{x} = \\dfrac{\\dfrac{512}{3}}{32} = \\dfrac{16}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-110"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 4$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$8 \\pi$.",
   "$4 \\pi$.",
   "$16 \\pi$.",
   "$1 + 8 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{4} y^2\\,dx = \\pi\\int_0^{4} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{4} = 8 \\pi$<br>Kết quả: $8 \\pi$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-111"
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
  "explain": "Từng phần trên $[0,R]$ với $u=x$, $dv=e^{-2x}dx$, $v=-e^{-2x}/2$: $\\int_0^Rxe^{-2x}dx=[-xe^{-2x}/2]_0^R+\\frac1{2}\\int_0^Re^{-2x}dx$.<br>Cho $R\\to\\infty$, $Re^{-2R}\\to0$; tích phân còn lại là $[-e^{-2x}/2]_0^\\infty=1/2$. Vậy $I=0+\\dfrac1{2}\\cdot\\dfrac1{2}=\\dfrac{1}{4}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-112"
 },
 {
  "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 7$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
  "options": [
   "$\\dfrac{\\operatorname{asinh}{\\left(7 \\right)}}{2} + \\dfrac{35 \\sqrt{2}}{2}$.",
   "$\\dfrac{\\operatorname{asinh}{\\left(7 \\right)}}{4} + \\dfrac{35 \\sqrt{2}}{4}$.",
   "$\\operatorname{asinh}{\\left(7 \\right)} + 35 \\sqrt{2}$.",
   "$1 + \\dfrac{\\operatorname{asinh}{\\left(7 \\right)}}{2} + \\dfrac{35 \\sqrt{2}}{2}$."
  ],
  "answer": 0,
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{7}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{7} = \\dfrac{\\operatorname{asinh}{\\left(7 \\right)}}{2} + \\dfrac{35 \\sqrt{2}}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-113"
 },
 {
  "q": "Một tấm phẳng hình chữ nhật chiều rộng 3 m, chiều cao 1 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 1 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
  "options": [
   "44100 <i>N</i>.",
   "22050 <i>N</i>.",
   "88200 <i>N</i>.",
   "58800 <i>N</i>."
  ],
  "answer": 0,
  "explain": "Dải ngang ở độ sâu $(1 + y)$ m, diện tích $3\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (1 + y) \\cdot 3\\,dy$<br>$F = \\displaystyle\\int_0^{1} 9800 \\cdot 3 \\cdot (1 + y)\\,dy = 98003\\left[1y + \\dfrac{y^2}{2}\\right]_0^{1} = 44100\\,N = \\dfrac{441}{10}\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-114"
 },
 {
  "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 10x$.",
  "options": [
   "$\\dfrac{500}{3}$.",
   "$\\dfrac{250}{3}$.",
   "$\\dfrac{1000}{3}$.",
   "$\\dfrac{503}{3}$."
  ],
  "answer": 0,
  "explain": "Giao điểm: $x^2 = 10x \\Rightarrow x = 0$ và $x = 10$<br>$S = \\displaystyle\\int_0^{10}(10x - x^2)\\,dx = \\left[\\dfrac{10x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{10} = \\dfrac{500}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-115"
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
  "explain": "Đặt $x=3t$, $dx=3dt$, $x^2+9=9(1+t^2)$: $\\int_0^\\infty\\dfrac{dx}{x^2+9}=\\dfrac1{3}\\int_0^\\infty\\dfrac{dt}{1+t^2}$.<br>$=\\dfrac1{3}[\\arctan t]_0^\\infty=\\dfrac1{3}(\\dfrac\\pi2-0)=\\dfrac{\\pi}{6}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-116"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 5$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$\\dfrac{10}{3}$.",
   "$\\dfrac{5}{2}$.",
   "$\\dfrac{5}{3}$.",
   "$\\dfrac{15}{4}$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 5^2 = \\dfrac{25}{2}$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{5} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{5} = \\dfrac{125}{3}$<br>$\\bar{x} = \\dfrac{\\dfrac{125}{3}}{\\dfrac{25}{2}} = \\dfrac{10}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-117"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 81$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$\\dfrac{6561 \\pi}{2}$.",
   "$\\dfrac{6561 \\pi}{4}$.",
   "$6561 \\pi$.",
   "$81 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{81} y^2\\,dx = \\pi\\int_0^{81} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{81} = \\dfrac{6561 \\pi}{2}$<br>Kết quả: $\\dfrac{6561 \\pi}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-118"
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
  "explain": "Phân tích phân thức: $\\dfrac1{x(x+3)}=\\dfrac1{3}\\left(\\dfrac1x-\\dfrac1{x+3}\\right)$ vì $\\dfrac{(x+3)-x}{3x(x+3)}=\\dfrac1{x(x+3)}$.<br>$I_R=\\dfrac1{3}\\left[\\ln x-\\ln(x+3)\\right]_1^R=\\dfrac1{3}\\ln\\dfrac{4R}{R+3}\\to\\dfrac1{3}\\ln4=\\dfrac{2 \\ln 2}{3}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-119"
 },
 {
  "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 2$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
  "options": [
   "$\\dfrac{\\operatorname{asinh}{\\left(2 \\right)}}{2} + \\sqrt{5}$.",
   "$\\dfrac{\\operatorname{asinh}{\\left(2 \\right)}}{4} + \\dfrac{\\sqrt{5}}{2}$.",
   "$\\operatorname{asinh}{\\left(2 \\right)} + 2 \\sqrt{5}$.",
   "$\\dfrac{\\operatorname{asinh}{\\left(2 \\right)}}{2} + 1 + \\sqrt{5}$."
  ],
  "answer": 0,
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{2}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{2} = \\dfrac{\\operatorname{asinh}{\\left(2 \\right)}}{2} + \\sqrt{5}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-120"
 },
 {
  "q": "Một tấm phẳng hình chữ nhật chiều rộng 2 m, chiều cao 1 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 2 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
  "options": [
   "49000 <i>N</i>.",
   "24500 <i>N</i>.",
   "98000 <i>N</i>.",
   "58800 <i>N</i>."
  ],
  "answer": 0,
  "explain": "Dải ngang ở độ sâu $(2 + y)$ m, diện tích $2\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (2 + y) \\cdot 2\\,dy$<br>$F = \\displaystyle\\int_0^{1} 9800 \\cdot 2 \\cdot (2 + y)\\,dy = 98002\\left[2y + \\dfrac{y^2}{2}\\right]_0^{1} = 49000\\,N = 49\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-121"
 },
 {
  "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 7x$.",
  "options": [
   "$\\dfrac{343}{6}$.",
   "$\\dfrac{343}{12}$.",
   "$\\dfrac{343}{3}$.",
   "$\\dfrac{349}{6}$."
  ],
  "answer": 0,
  "explain": "Giao điểm: $x^2 = 7x \\Rightarrow x = 0$ và $x = 7$<br>$S = \\displaystyle\\int_0^{7}(7x - x^2)\\,dx = \\left[\\dfrac{7x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{7} = \\dfrac{343}{6}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-122"
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
  "explain": "Đặt $I=\\int_0^\\infty e^{-ax}\\sin bx\\,dx$, $J=\\int_0^\\infty e^{-ax}\\cos bx\\,dx$. Từng phần cho $I=[-e^{-ax}\\cos bx/b]_0^\\infty-(a/b)J=1/b-(a/b)J$.<br>Từng phần với $J$: $J=[e^{-ax}\\sin bx/b]_0^\\infty+(a/b)I=(a/b)I$. Thế vào phương trình đầu: $I=1/b-(a^2/b^2)I$, nên $I(1+a^2/b^2)=1/b$ và $I=b/(a^2+b^2)=\\dfrac{1}{4}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-123"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 10$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$\\dfrac{20}{3}$.",
   "$5$.",
   "$\\dfrac{10}{3}$.",
   "$\\dfrac{15}{2}$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 10^2 = 50$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{10} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{10} = \\dfrac{1000}{3}$<br>$\\bar{x} = \\dfrac{\\dfrac{1000}{3}}{50} = \\dfrac{20}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-124"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 64$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$2048 \\pi$.",
   "$1024 \\pi$.",
   "$4096 \\pi$.",
   "$64 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{64} y^2\\,dx = \\pi\\int_0^{64} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{64} = 2048 \\pi$<br>Kết quả: $2048 \\pi$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-125"
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
  "id": "dh-126"
 },
 {
  "q": "Tính độ dài cung của đường cong $y = \\dfrac{x^2}{2}$ từ $x = 0$ đến $x = 10$. Biết $\\int\\sqrt{1+x^2}\\,dx = \\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2} + C$.",
  "options": [
   "$\\dfrac{\\operatorname{asinh}{\\left(10 \\right)}}{2} + 5 \\sqrt{101}$.",
   "$\\dfrac{\\operatorname{asinh}{\\left(10 \\right)}}{4} + \\dfrac{5 \\sqrt{101}}{2}$.",
   "$\\operatorname{asinh}{\\left(10 \\right)} + 10 \\sqrt{101}$.",
   "$1 + \\dfrac{\\operatorname{asinh}{\\left(10 \\right)}}{2} + 5 \\sqrt{101}$."
  ],
  "answer": 0,
  "explain": "$y' = x$, $L = \\displaystyle\\int_0^{10}\\sqrt{1 + x^2}\\,dx$<br>$L = \\left[\\dfrac{x\\sqrt{1+x^2}}{2} + \\dfrac{\\ln(x+\\sqrt{1+x^2})}{2}\\right]_0^{10} = \\dfrac{\\operatorname{asinh}{\\left(10 \\right)}}{2} + 5 \\sqrt{101}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-127"
 },
 {
  "q": "Một tấm phẳng hình chữ nhật chiều rộng 3 m, chiều cao 3 m được nhúng thẳng đứng vào nước sao cho cạnh trên ở độ sâu 0 m. Lấy $g = 9{,}8\\,m/s^2$. Áp lực của nước lên tấm bằng",
  "options": [
   "132300 <i>N</i>.",
   "66150 <i>N</i>.",
   "264600 <i>N</i>.",
   "44100 <i>N</i>."
  ],
  "answer": 0,
  "explain": "Dải ngang ở độ sâu $(0 + y)$ m, diện tích $3\\,dy$, áp lực $1000 \\cdot 9{,}8 \\cdot (0 + y) \\cdot 3\\,dy$<br>$F = \\displaystyle\\int_0^{3} 9800 \\cdot 3 \\cdot (0 + y)\\,dy = 98003\\left[0y + \\dfrac{y^2}{2}\\right]_0^{3} = 132300\\,N = \\dfrac{1323}{10}\\,kN$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-128"
 },
 {
  "q": "Tính diện tích hình phẳng giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 5x$.",
  "options": [
   "$\\dfrac{125}{6}$.",
   "$\\dfrac{125}{12}$.",
   "$\\dfrac{125}{3}$.",
   "$\\dfrac{131}{6}$."
  ],
  "answer": 0,
  "explain": "Giao điểm: $x^2 = 5x \\Rightarrow x = 0$ và $x = 5$<br>$S = \\displaystyle\\int_0^{5}(5x - x^2)\\,dx = \\left[\\dfrac{5x^2}{2} - \\dfrac{x^3}{3}\\right]_0^{5} = \\dfrac{125}{6}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-129"
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
  "explain": "$V=\\pi\\int_0^{3}y^2dx=\\pi\\int_0^{3}x^{4}dx$; bình phương hàm số cho biểu thức dưới dấu tích phân như trên.<br>Nguyên hàm là $\\dfrac{x^{5}}{5}$. Thế cận: $V=\\pi(\\dfrac{243}{5}-0)=\\dfrac{243 \\pi}{5}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-130"
 },
 {
  "q": "Tìm hoành độ trọng tâm $\\bar{x}$ của hình phẳng giới hạn bởi $y = x$, $y = 0$ và $x = 4$ (tam giác vuông). Biết $\\bar{x} = \\dfrac{\\iint_D x\\,dA}{\\iint_D dA}$, giá trị $\\bar{x}$ bằng",
  "options": [
   "$\\dfrac{8}{3}$.",
   "$2$.",
   "$\\dfrac{4}{3}$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Diện tích $S = \\dfrac{1}{2} \\cdot 4^2 = 8$<br>$\\iint_D x\\,dA = \\displaystyle\\int_0^{4} x \\cdot x\\,dx = \\left[\\dfrac{x^3}{3}\\right]_0^{4} = \\dfrac{64}{3}$<br>$\\bar{x} = \\dfrac{\\dfrac{64}{3}}{8} = \\dfrac{8}{3}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-131"
 },
 {
  "q": "Tính thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi $y = \\sqrt{x}$, $x = 9$ và trục $Ox$ xung quanh trục $Ox$.",
  "options": [
   "$\\dfrac{81 \\pi}{2}$.",
   "$\\dfrac{81 \\pi}{4}$.",
   "$81 \\pi$.",
   "$9 \\pi$."
  ],
  "answer": 0,
  "explain": "$V = \\pi\\displaystyle\\int_0^{9} y^2\\,dx = \\pi\\int_0^{9} x\\,dx = \\pi\\left[\\dfrac{x^2}{2}\\right]_0^{9} = \\dfrac{81 \\pi}{2}$<br>Kết quả: $\\dfrac{81 \\pi}{2}$",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-132"
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
  "explain": "Từng phần trên $[0,R]$ với $u=x$, $dv=e^{-3x}dx$, $v=-e^{-3x}/3$: $\\int_0^Rxe^{-3x}dx=[-xe^{-3x}/3]_0^R+\\frac1{3}\\int_0^Re^{-3x}dx$.<br>Cho $R\\to\\infty$, $Re^{-3R}\\to0$; tích phân còn lại là $[-e^{-3x}/3]_0^\\infty=1/3$. Vậy $I=0+\\dfrac1{3}\\cdot\\dfrac1{3}=\\dfrac{1}{9}$.",
  "note": "Tích phân suy rộng: tính $\\displaystyle\\int_a^b$ rồi cho $b \\to +\\infty$; độ dài cung: $L = \\displaystyle\\int\\sqrt{1 + y'^2}\\,dx$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-133"
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
  "explain": "$x^\\prime=-1\\sin t,\\ y^\\prime=1\\cos t,\\ z^\\prime=1$; hence $ds=\\sqrt{(-1\\sin t)^2+(1\\cos t)^2+1^2}\\,dt=\\sqrt{2}\\,dt$.<br>$\\displaystyle I=\\int_0^{2\\pi}1t\\cdot\\sqrt{2}\\,dt=1\\sqrt{2}\\left[\\frac{t^2}{2}\\right]_0^{2\\pi}=2\\pi^21\\sqrt{2}=2 \\sqrt{2} \\pi^{2}$.",
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
  "explain": "Trên $L$, $x^2+y^2=4$ nên $\\rho=4+3$ không đổi. Tham số hóa $x=2\\cos t$, $y=2\\sin t$, $0\\le t\\le2\\pi$, cho $ds=2\\,dt$.<br>$\\displaystyle M=\\int_0^{2\\pi}(4+3)2\\,dt=2\\pi2(4+3)=28 \\pi$.",
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
  "explain": "Đặt $x=t,\\ y=t^2/2$ với $0\\le t\\le2\\sqrt6$; $ds=\\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt=\\sqrt{1+t^2}\\,dt$, nên $x\\,ds=t\\sqrt{1+t^2}\\,dt$.<br>Đặt $u=1+t^2$, $du=2t\\,dt$: $\\displaystyle I=\\frac12\\int_1^{1+2\\sqrt6^2}u^{1/2}\\,du=\\frac13[u^{3/2}]_1^{1+2\\sqrt6^2}$.<br>$I=\\dfrac{(1+2\\sqrt6^2)^{3/2}-1}{3}=\\dfrac{124}{3}$.",
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
  "explain": "$x=a\\cos t,\\ y=a\\sin t$, $0\\le t\\le\\pi/2$; $ds=\\sqrt{(-a\\sin t)^2+(a\\cos t)^2}\\,dt=8\\,dt$ and $xy=64\\sin t\\cos t$.<br>$\\displaystyle I=512\\int_0^{\\pi/2}\\sin t\\cos t\\,dt=512\\left[\\frac{\\sin^2t}{2}\\right]_0^{\\pi/2}=\\frac{512}{2}=256$.",
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
  "explain": "Tham số hóa $x=0+6t,\\ y=1+8t$, $0\\le t\\le1$; $ds=\\sqrt{6^2+8^2}\\,dt=10\\,dt$.<br>$px+qy=p(<x1>+<dx>t)+q(<y1>+<dy>t)=1+26t$. Do đó $\\displaystyle I=10\\int_0^1(1+26t)\\,dt=10(1+26/2)=140$.",
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
  "explain": "$x^\\prime=-3\\sin t,\\ y^\\prime=3\\cos t,\\ z^\\prime=4$; hence $ds=\\sqrt{(-3\\sin t)^2+(3\\cos t)^2+4^2}\\,dt=5\\,dt$.<br>$\\displaystyle I=\\int_0^{2\\pi}4t\\cdot5\\,dt=45\\left[\\frac{t^2}{2}\\right]_0^{2\\pi}=2\\pi^245=40 \\pi^{2}$.",
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
  "explain": "Trên $L$, $x^2+y^2=1$ nên $\\rho=1+1$ không đổi. Tham số hóa $x=1\\cos t$, $y=1\\sin t$, $0\\le t\\le2\\pi$, cho $ds=1\\,dt$.<br>$\\displaystyle M=\\int_0^{2\\pi}(1+1)1\\,dt=2\\pi1(1+1)=4 \\pi$.",
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
  "explain": "Đặt $x=t,\\ y=t^2/2$ với $0\\le t\\le\\sqrt{35}$; $ds=\\sqrt{(dx/dt)^2+(dy/dt)^2}\\,dt=\\sqrt{1+t^2}\\,dt$, nên $x\\,ds=t\\sqrt{1+t^2}\\,dt$.<br>Đặt $u=1+t^2$, $du=2t\\,dt$: $\\displaystyle I=\\frac12\\int_1^{1+\\sqrt{35}^2}u^{1/2}\\,du=\\frac13[u^{3/2}]_1^{1+\\sqrt{35}^2}$.<br>$I=\\dfrac{(1+\\sqrt{35}^2)^{3/2}-1}{3}=\\dfrac{215}{3}$.",
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
  "explain": "Tham số hóa $x=0+4t,\\ y=0+3t$, $0\\le t\\le1$; $ds=\\sqrt{4^2+3^2}\\,dt=5\\,dt$.<br>$px+qy=p(<x1>+<dx>t)+q(<y1>+<dy>t)=0+15t$. Do đó $\\displaystyle I=5\\int_0^1(0+15t)\\,dt=5(0+15/2)=\\dfrac{75}{2}$.",
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
  "explain": "$x^\\prime=-5\\sin t,\\ y^\\prime=5\\cos t,\\ z^\\prime=12$; hence $ds=\\sqrt{(-5\\sin t)^2+(5\\cos t)^2+12^2}\\,dt=13\\,dt$.<br>$\\displaystyle I=\\int_0^{2\\pi}12t\\cdot13\\,dt=1213\\left[\\frac{t^2}{2}\\right]_0^{2\\pi}=2\\pi^21213=312 \\pi^{2}$.",
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
  "explain": "Trên $L$, $x^2+y^2=1$ nên $\\rho=1+3$ không đổi. Tham số hóa $x=1\\cos t$, $y=1\\sin t$, $0\\le t\\le2\\pi$, cho $ds=1\\,dt$.<br>$\\displaystyle M=\\int_0^{2\\pi}(1+3)1\\,dt=2\\pi1(1+3)=8 \\pi$.",
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
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(3;0),\\ B(0;3)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$18$.",
   "$-18$.",
   "$\\dfrac{9}{2}$.",
   "$36$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{3 - x}\\left(4 y\\right)dy$<br>$I = 18$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-057"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 3 y)\\,dx + 3 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{7}{10}$.",
   "$- \\dfrac{3}{10}$.",
   "$- \\dfrac{7}{10}$.",
   "$\\dfrac{7}{5}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 3 y + 3$<br>$I = \\displaystyle\\int_0^{1}dx\\int_{x^2}^{x}(3 y + 3)\\,dy = \\int_0^{1}\\left(- \\dfrac{3 x^{4}}{2} - \\dfrac{3 x^{2}}{2} + 3 x\\right)dx$<br>$= \\left[- \\dfrac{3 x^{5}}{10} - \\dfrac{x^{3}}{2} + \\dfrac{3 x^{2}}{2}\\right]_0^{1} = \\dfrac{7}{10}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-058"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 2 y^{2} + 1)\\,dx + (3 x^{2} + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$6$.",
   "$-6$.",
   "$3$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 4 y,\\quad Q'_x = 6 x + 4 y$<br>Đồng nhất hệ số: $m = 6$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-059"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 2,\\ 0 \\le y \\le 2$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- x y)\\,dx + x y\\,dy$ bằng",
  "options": [
   "$8$.",
   "$-8$.",
   "$4$.",
   "$16$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x + y$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{2}\\left(x + y\\right)dy$<br>$I = 8$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-060"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 2 x y + 2 y^{2} + 2)\\,dx + (mx^2 + 4 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
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
  "id": "td-061"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(3;0),\\ B(0;3)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (- y^{2})\\,dx + x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{27}{2}$.",
   "$- \\dfrac{27}{2}$.",
   "$\\dfrac{9}{2}$.",
   "$27$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 3 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{3 - x}\\left(3 y\\right)dy$<br>$I = \\dfrac{27}{2}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-062"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 2 y)\\,dx + x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{2}{5}$.",
   "$- \\dfrac{4}{15}$.",
   "$- \\dfrac{2}{5}$.",
   "$\\dfrac{4}{5}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = y + 2$<br>$I = \\displaystyle\\int_0^{1}dx\\int_{x^2}^{x}(y + 2)\\,dy = \\int_0^{1}\\left(- \\dfrac{x^{4}}{2} - \\dfrac{3 x^{2}}{2} + 2 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{10} - \\dfrac{x^{3}}{2} + x^{2}\\right]_0^{1} = \\dfrac{2}{5}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-063"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 3 y^{2} + 1)\\,dx + (3 x^{2} + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$6$.",
   "$-6$.",
   "$3$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx + 6 y,\\quad Q'_x = 6 x + 6 y$<br>Đồng nhất hệ số: $m = 6$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-064"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 2,\\ 0 \\le y \\le 1$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$2$.",
   "$-2$.",
   "$4$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{1}\\left(x\\right)dy$<br>$I = 2$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-065"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (4 x y + 3 y^{2} + 2)\\,dx + (mx^2 + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$2$.",
   "$-2$.",
   "$4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 4 x + 6 y,\\quad Q'_x = 2mx + 6 y$<br>Đồng nhất hệ số: $m = 2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-066"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(1;0),\\ B(0;3)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$- \\dfrac{1}{2}$.",
   "$\\dfrac{3}{2}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{3 - 3 x}\\left(x\\right)dy$<br>$I = \\dfrac{1}{2}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-067"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y)\\,dx + 3 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{11}{30}$.",
   "$\\dfrac{1}{30}$.",
   "$- \\dfrac{11}{30}$.",
   "$\\dfrac{11}{15}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 3 y + 1$<br>$I = \\displaystyle\\int_0^{1}dx\\int_{x^2}^{x}(3 y + 1)\\,dy = \\int_0^{1}\\left(- \\dfrac{3 x^{4}}{2} + \\dfrac{x^{2}}{2} + x\\right)dx$<br>$= \\left[- \\dfrac{3 x^{5}}{10} + \\dfrac{x^{3}}{6} + \\dfrac{x^{2}}{2}\\right]_0^{1} = \\dfrac{11}{30}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-068"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 2 - y^{2})\\,dx + (2 x^{2} - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$4$.",
   "$-4$.",
   "$2$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx - 2 y,\\quad Q'_x = 4 x - 2 y$<br>Đồng nhất hệ số: $m = 4$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-069"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 1,\\ 0 \\le y \\le 1$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C y\\,dx + (x^{2} + x)\\,dy$ bằng",
  "options": [
   "$1$.",
   "$-1$.",
   "$2$.",
   "$\\dfrac{1}{2}$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 2 x$<br>Công thức Green: $I = \\displaystyle\\int_0^{1}dx\\int_0^{1}\\left(2 x\\right)dy$<br>$I = 1$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-070"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 2 x y + y^{2} + 2)\\,dx + (mx^2 + 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-1$.",
   "$1$.",
   "$-2$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = - 2 x + 2 y,\\quad Q'_x = 2mx + 2 y$<br>Đồng nhất hệ số: $m = -1$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-071"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(2;0),\\ B(0;2)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C x y\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$\\dfrac{4}{3}$.",
   "$- \\dfrac{4}{3}$.",
   "$2$.",
   "$\\dfrac{8}{3}$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = x$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{2 - x}\\left(x\\right)dy$<br>$I = \\dfrac{4}{3}$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-072"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 3 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 2 y)\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{207}{5}$.",
   "$\\dfrac{117}{5}$.",
   "$- \\dfrac{207}{5}$.",
   "$\\dfrac{414}{5}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 2 y + 2$<br>$I = \\displaystyle\\int_0^{3}dx\\int_{x^2}^{3 x}(2 y + 2)\\,dy = \\int_0^{3}\\left(- x^{4} + 7 x^{2} + 6 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{5} + \\dfrac{7 x^{3}}{3} + 3 x^{2}\\right]_0^{3} = \\dfrac{207}{5}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-073"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 3 y^{2} + 2)\\,dx + (x^{2} + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
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
  "id": "td-074"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 2,\\ 0 \\le y \\le 1$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C y^{2}\\,dx + x^{2}\\,dy$ bằng",
  "options": [
   "$2$.",
   "$-2$.",
   "$4$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 2 x - 2 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{2}dx\\int_0^{1}\\left(2 x - 2 y\\right)dy$<br>$I = 2$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-075"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (- 4 x y + y^{2} + 1)\\,dx + (mx^2 + 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-2$.",
   "$2$.",
   "$-4$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = - 4 x + 2 y,\\quad Q'_x = 2mx + 2 y$<br>Đồng nhất hệ số: $m = -2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-076"
 },
 {
  "q": "Cho $C$ là biên của tam giác có ba đỉnh $O(0;0),\\ A(3;0),\\ B(0;1)$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - y^{2})\\,dx + 2 x y\\,dy$ bằng",
  "options": [
   "$2$.",
   "$-2$.",
   "$\\dfrac{3}{2}$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 4 y$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{1 - \\dfrac{x}{3}}\\left(4 y\\right)dy$<br>$I = 2$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-077"
 },
 {
  "q": "Cho $C$ là biên của miền $D$ giới hạn bởi parabol $y = x^2$ và đường thẳng $y = 3 x$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C (x - 2 y)\\,dx + x y\\,dy$ bằng",
  "options": [
   "$\\dfrac{126}{5}$.",
   "$\\dfrac{36}{5}$.",
   "$- \\dfrac{126}{5}$.",
   "$\\dfrac{252}{5}$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = y + 2$<br>$I = \\displaystyle\\int_0^{3}dx\\int_{x^2}^{3 x}(y + 2)\\,dy = \\int_0^{3}\\left(- \\dfrac{x^{4}}{2} + \\dfrac{5 x^{2}}{2} + 6 x\\right)dx$<br>$= \\left[- \\dfrac{x^{5}}{10} + \\dfrac{5 x^{3}}{6} + 3 x^{2}\\right]_0^{3} = \\dfrac{126}{5}$",
  "note": "Green: $\\displaystyle\\oint_C P\\,dx + Q\\,dy = \\iint_D\\left(Q'_x - P'_y\\right)dxdy$, với chiều dương là ngược chiều kim đồng hồ.",
  "topic": "td",
  "type": "mcq",
  "id": "td-078"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (mxy + 2 - y^{2})\\,dx + (- x^{2} - 2 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$-2$.",
   "$2$.",
   "$-1$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = mx - 2 y,\\quad Q'_x = - 2 x - 2 y$<br>Đồng nhất hệ số: $m = -2$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-079"
 },
 {
  "q": "Cho $C$ là biên của hình chữ nhật $0 \\le x \\le 3,\\ 0 \\le y \\le 1$, lấy theo chiều ngược chiều kim đồng hồ. Dùng công thức Green, giá trị của tích phân $\\displaystyle\\oint_C y\\,dx + (x^{2} + x)\\,dy$ bằng",
  "options": [
   "$9$.",
   "$-9$.",
   "$3$.",
   "$18$."
  ],
  "answer": 0,
  "explain": "$Q'_x - P'_y = 2 x$<br>Công thức Green: $I = \\displaystyle\\int_0^{3}dx\\int_0^{1}\\left(2 x\\right)dy$<br>$I = 9$",
  "note": "Công thức Green đổi tích phân trên biên thành tích phân hai lớp trên miền; chú ý thứ tự $Q'_x - P'_y$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-080"
 },
 {
  "q": "Tìm giá trị của tham số $m$ để tích phân đường $\\displaystyle\\int_L (6 x y + 3 y^{2} + 2)\\,dx + (mx^2 + 6 x y)\\,dy$ không phụ thuộc vào đường cong $L$ nối hai điểm cho trước trong mặt phẳng.",
  "options": [
   "$3$.",
   "$-3$.",
   "$6$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Tích phân không phụ thuộc đường đi $\\Leftrightarrow P'_y = Q'_x$ với mọi $(x;y)$<br>$P'_y = 6 x + 6 y,\\quad Q'_x = 2mx + 6 y$<br>Đồng nhất hệ số: $m = 3$",
  "note": "Điều kiện không phụ thuộc đường đi là hai đạo hàm chéo bằng nhau: $P'_y = Q'_x$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-081"
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
  "q": "Định thức của ma trận $A^2 - 3A$ bằng",
  "options": [
   "$0$.",
   "$18$.",
   "$4$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $0$ và $4$; định thức bằng tích của chúng<br>Kết quả: $0$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & -8 \\\\ 40 & 19\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-054"
 },
 {
  "q": "Khi $m = -3$, định thức của ma trận $A$ bằng",
  "options": [
   "$-1$.",
   "$-4$.",
   "$1$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$\\det A = - m - 4$<br>Với $m = -3$: $\\det A = -1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + 2z = -5\\\\ 2x + y = -4\\\\ -y + mz = 5\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-055"
 },
 {
  "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
  "options": [
   "$-4$.",
   "$-3$.",
   "$4$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = - m - 4 = 0 \\Leftrightarrow m = -4$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + 2z = -5\\\\ 2x + y = -4\\\\ -y + mz = 5\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-056"
 },
 {
  "q": "Khi $m = -3$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$-4$.",
   "$-3$.",
   "$4$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "Với $m = -3$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = -1$)<br>$(x_0;y_0;z_0) = (-1;-2;-1)$<br>$x_0 + y_0 + z_0 = -4$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + 2z = -5\\\\ 2x + y = -4\\\\ -y + mz = 5\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-057"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$-1$.",
   "$1$.",
   "$2$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>Vết của $A^2$: $-1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-1 & 1 \\\\ -3 & 2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 2$. Kí hiệu $f(A) = A^2 - 3A - 2I$."
  },
  "first": true,
  "id": "tr-058"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$-4$.",
   "$0$.",
   "$-6$.",
   "$-8$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-1 & -2 \\\\ 6 & -7\\end{pmatrix}$<br>Tổng các phần tử: $-4$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-1 & 1 \\\\ -3 & 2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 2$. Kí hiệu $f(A) = A^2 - 3A - 2I$."
  },
  "first": true,
  "id": "tr-059"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
  "options": [
   "$3$.",
   "$-1$.",
   "$-3$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}2 & -1 \\\\ 3 & -1\\end{pmatrix}$<br>Tổng các phần tử: $3$",
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-1 & 1 \\\\ -3 & 2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 2$. Kí hiệu $f(A) = A^2 - 3A - 2I$."
  },
  "first": true,
  "id": "tr-060"
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
   "stem": "Cho ma trận $A = \\begin{pmatrix}0 & -1 \\\\ 2 & -3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-061"
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
   "stem": "Cho ma trận $A = \\begin{pmatrix}0 & -1 \\\\ 2 & -3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-062"
 },
 {
  "q": "Định thức của ma trận $A^2 - 2A$ bằng",
  "options": [
   "$24$.",
   "$0$.",
   "$11$.",
   "$-24$."
  ],
  "answer": 0,
  "explain": "$A^2 - 2A$ có các trị riêng $\\lambda^2 - 2\\lambda$: $3$ và $8$; định thức bằng tích của chúng<br>Kết quả: $24$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}0 & -1 \\\\ 2 & -3\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-063"
 },
 {
  "q": "Khi $m = 1$, định thức của ma trận $A$ bằng",
  "options": [
   "$1$.",
   "$2$.",
   "$-1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$\\det A = 2 - m$<br>Với $m = 1$: $\\det A = 1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + z = 5\\\\ 2x + y = 1\\\\ -2x + mz = 5\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-064"
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
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 2 - m = 0 \\Leftrightarrow m = 2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + z = 5\\\\ 2x + y = 1\\\\ -2x + mz = 5\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-065"
 },
 {
  "q": "Khi $m = 1$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$5$.",
   "$6$.",
   "$-5$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "Với $m = 1$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 1$)<br>$(x_0;y_0;z_0) = (-1;3;3)$<br>$x_0 + y_0 + z_0 = 5$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + y + z = 5\\\\ 2x + y = 1\\\\ -2x + mz = 5\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-066"
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
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 2$. Kí hiệu $f(A) = A^2 - A + 2I$."
  },
  "first": true,
  "id": "tr-067"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$0$.",
   "$-4$.",
   "$2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-2 & 1 \\\\ -3 & 1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-1 & 2 \\\\ -6 & 5\\end{pmatrix}$<br>Tổng các phần tử: $0$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 2$. Kí hiệu $f(A) = A^2 - A + 2I$."
  },
  "first": true,
  "id": "tr-068"
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
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -1 \\\\ 3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 2$. Kí hiệu $f(A) = A^2 - A + 2I$."
  },
  "first": true,
  "id": "tr-069"
 },
 {
  "q": "Tổng bình phương các trị riêng của $A$ bằng",
  "options": [
   "$17$.",
   "$25$.",
   "$4$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng $\\lambda^2 - (5)\\lambda + (4) = 0$ có nghiệm $4$ và $1$<br>Kết quả: $17$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & 6 \\\\ -63 & 22\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-070"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
  "options": [
   "$257$.",
   "$625$.",
   "$256$.",
   "$20$."
  ],
  "answer": 0,
  "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(4)^{4} + (1)^{4}$<br>Kết quả: $257$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & 6 \\\\ -63 & 22\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-071"
 },
 {
  "q": "Định thức của ma trận $A^2 - 2A$ bằng",
  "options": [
   "$-8$.",
   "$8$.",
   "$7$.",
   "$16$."
  ],
  "answer": 0,
  "explain": "$A^2 - 2A$ có các trị riêng $\\lambda^2 - 2\\lambda$: $8$ và $-1$; định thức bằng tích của chúng<br>Kết quả: $-8$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & 6 \\\\ -63 & 22\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-072"
 },
 {
  "q": "Khi $m = -1$, định thức của ma trận $A$ bằng",
  "options": [
   "$4$.",
   "$6$.",
   "$-4$.",
   "$-1$."
  ],
  "answer": 0,
  "explain": "$\\det A = 2 m + 6$<br>Với $m = -1$: $\\det A = 4$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2z = -2\\\\ x + 2y = 8\\\\ -x + y + mz = 3\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-073"
 },
 {
  "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
  "options": [
   "$-3$.",
   "$-1$.",
   "$3$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 2 m + 6 = 0 \\Leftrightarrow m = -3$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2z = -2\\\\ x + 2y = 8\\\\ -x + y + mz = 3\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-074"
 },
 {
  "q": "Khi $m = -1$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$3$.",
   "$4$.",
   "$-3$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Với $m = -1$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 4$)<br>$(x_0;y_0;z_0) = (2;3;-2)$<br>$x_0 + y_0 + z_0 = 3$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2z = -2\\\\ x + 2y = 8\\\\ -x + y + mz = 3\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-075"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$2$.",
   "$4$.",
   "$-4$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-3 & 4 \\\\ -4 & 5\\end{pmatrix}$<br>Vết của $A^2$: $2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -2 \\\\ 2 & -3\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 2$. Kí hiệu $f(A) = A^2 - 3A - 2I$."
  },
  "first": true,
  "id": "tr-076"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$4$.",
   "$8$.",
   "$2$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-3 & 4 \\\\ -4 & 5\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-8 & 10 \\\\ -10 & 12\\end{pmatrix}$<br>Tổng các phần tử: $4$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -2 \\\\ 2 & -3\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 2$. Kí hiệu $f(A) = A^2 - 3A - 2I$."
  },
  "first": true,
  "id": "tr-077"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
  "options": [
   "$-2$.",
   "$2$.",
   "$-1$.",
   "$-3$."
  ],
  "answer": 0,
  "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}-3 & 2 \\\\ -2 & 1\\end{pmatrix}$<br>Tổng các phần tử: $-2$",
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & -2 \\\\ 2 & -3\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - 3 x - 2$. Kí hiệu $f(A) = A^2 - 3A - 2I$."
  },
  "first": true,
  "id": "tr-078"
 },
 {
  "q": "Tổng bình phương các trị riêng của $A$ bằng",
  "options": [
   "$13$.",
   "$1$.",
   "$-6$.",
   "$7$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng $\\lambda^2 - (1)\\lambda + (-6) = 0$ có nghiệm $3$ và $-2$<br>Kết quả: $13$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & 5 \\\\ -60 & 18\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-079"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^{4}$ bằng",
  "options": [
   "$97$.",
   "$1$.",
   "$1296$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(3)^{4} + (-2)^{4}$<br>Kết quả: $97$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & 5 \\\\ -60 & 18\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-080"
 },
 {
  "q": "Định thức của ma trận $A^2 - A$ bằng",
  "options": [
   "$36$.",
   "$42$.",
   "$12$.",
   "$-36$."
  ],
  "answer": 0,
  "explain": "$A^2 - 1A$ có các trị riêng $\\lambda^2 - 1\\lambda$: $6$ và $6$; định thức bằng tích của chúng<br>Kết quả: $36$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-17 & 5 \\\\ -60 & 18\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-081"
 },
 {
  "q": "Khi $m = 3$, định thức của ma trận $A$ bằng",
  "options": [
   "$2$.",
   "$-4$.",
   "$-2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\det A = 2 m - 4$<br>Với $m = 3$: $\\det A = 2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x - y - z = -5\\\\ -x + 3y + z = 7\\\\ -2x + y + mz = 11\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-082"
 },
 {
  "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
  "options": [
   "$2$.",
   "$3$.",
   "$-2$.",
   "$5$."
  ],
  "answer": 0,
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = 2 m - 4 = 0 \\Leftrightarrow m = 2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x - y - z = -5\\\\ -x + 3y + z = 7\\\\ -2x + y + mz = 11\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-083"
 },
 {
  "q": "Khi $m = 3$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$1$.",
   "$2$.",
   "$-1$.",
   "$-2$."
  ],
  "answer": 0,
  "explain": "Với $m = 3$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 2$)<br>$(x_0;y_0;z_0) = (-2;1;2)$<br>$x_0 + y_0 + z_0 = 1$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x - y - z = -5\\\\ -x + 3y + z = 7\\\\ -2x + y + mz = 11\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-084"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$14$.",
   "$16$.",
   "$8$.",
   "$26$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}3 & 4 \\\\ 8 & 11\\end{pmatrix}$<br>Vết của $A^2$: $14$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 2 & 3\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-085"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$21$.",
   "$19$.",
   "$22$.",
   "$12$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}3 & 4 \\\\ 8 & 11\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}3 & 3 \\\\ 6 & 9\\end{pmatrix}$<br>Tổng các phần tử: $21$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 2 & 3\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-086"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
  "options": [
   "$1$.",
   "$7$.",
   "$-1$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}3 & -1 \\\\ -2 & 1\\end{pmatrix}$<br>Tổng các phần tử: $1$",
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ 2 & 3\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-087"
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
   "stem": "Cho ma trận $A = \\begin{pmatrix}7 & -6 \\\\ 9 & -8\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-088"
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
   "stem": "Cho ma trận $A = \\begin{pmatrix}7 & -6 \\\\ 9 & -8\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-089"
 },
 {
  "q": "Định thức của ma trận $A^2 - A$ bằng",
  "options": [
   "$0$.",
   "$6$.",
   "$4$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "$A^2 - 1A$ có các trị riêng $\\lambda^2 - 1\\lambda$: $6$ và $0$; định thức bằng tích của chúng<br>Kết quả: $0$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}7 & -6 \\\\ 9 & -8\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-090"
 },
 {
  "q": "Khi $m = -2$, định thức của ma trận $A$ bằng",
  "options": [
   "$-1$.",
   "$1$.",
   "$-2$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$\\det A = m + 1$<br>Với $m = -2$: $\\det A = -1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + z = 0\\\\ 2x + y + z = 1\\\\ -x + mz = 2\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-091"
 },
 {
  "q": "Hệ không có nghiệm duy nhất khi $m$ bằng",
  "options": [
   "$-1$.",
   "$-2$.",
   "$1$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = m + 1 = 0 \\Leftrightarrow m = -1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + z = 0\\\\ 2x + y + z = 1\\\\ -x + mz = 2\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-092"
 },
 {
  "q": "Khi $m = -2$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$-1$.",
   "$0$.",
   "$1$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Với $m = -2$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = -1$)<br>$(x_0;y_0;z_0) = (2;-1;-2)$<br>$x_0 + y_0 + z_0 = -1$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + z = 0\\\\ 2x + y + z = 1\\\\ -x + mz = 2\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-093"
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
   "stem": "Cho ma trận $A = \\begin{pmatrix}2 & 1 \\\\ -5 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-094"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận $f(A)$ bằng",
  "options": [
   "$4$.",
   "$2$.",
   "$5$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-1 & 0 \\\\ 0 & -1\\end{pmatrix}$<br>$f(A) = \\begin{pmatrix}-2 & -1 \\\\ 5 & 2\\end{pmatrix}$<br>Tổng các phần tử: $4$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}2 & 1 \\\\ -5 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-095"
 },
 {
  "q": "Tổng tất cả các phần tử của ma trận nghịch đảo $A^{-1}$ bằng",
  "options": [
   "$4$.",
   "$-4$.",
   "$5$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$\\det A = 1$<br>$A^{-1} = \\begin{pmatrix}-2 & -1 \\\\ 5 & 2\\end{pmatrix}$<br>Tổng các phần tử: $4$",
  "note": "Tính $f(A)$: thay $x$ bằng $A$ và hằng số $c$ bằng $cI$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}2 & 1 \\\\ -5 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-096"
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
  "explain": "Phương trình đặc trưng $\\lambda^2 - (2)\\lambda + (-8) = 0$ có nghiệm $4$ và $-2$<br>Kết quả: $20$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-14 & -12 \\\\ 18 & 16\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-097"
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
  "explain": "$A^{4} = PD^{4}P^{-1}$ có cùng vết với $D^{4}$: $(4)^{4} + (-2)^{4}$<br>Kết quả: $272$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-14 & -12 \\\\ 18 & 16\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-098"
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
  "explain": "$A^2 - 3A$ có các trị riêng $\\lambda^2 - 3\\lambda$: $4$ và $10$; định thức bằng tích của chúng<br>Kết quả: $40$",
  "note": "Nếu $A = PDP^{-1}$ thì $A^n = PD^nP^{-1}$: vết của $A^n$ bằng tổng lũy thừa bậc $n$ của các trị riêng.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}-14 & -12 \\\\ 18 & 16\\end{pmatrix}$. Biết $A$ chéo hóa được, tức tồn tại ma trận khả nghịch $P$ sao cho $P^{-1}AP = D$ là ma trận đường chéo với các phần tử trên đường chéo là các trị riêng của $A$."
  },
  "first": true,
  "id": "tr-099"
 },
 {
  "q": "Khi $m = 5$, định thức của ma trận $A$ bằng",
  "options": [
   "$2$.",
   "$-3$.",
   "$-2$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "$\\det A = m - 3$<br>Với $m = 5$: $\\det A = 2$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y = 7\\\\ x + 3y - z = 9\\\\ 2x + y + mz = 10\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-100"
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
  "explain": "Hệ 3 phương trình, 3 ẩn có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$<br>$\\det A = m - 3 = 0 \\Leftrightarrow m = 3$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y = 7\\\\ x + 3y - z = 9\\\\ 2x + y + mz = 10\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-101"
 },
 {
  "q": "Khi $m = 5$, hệ có nghiệm duy nhất $(x_0;y_0;z_0)$. Giá trị của $x_0 + y_0 + z_0$ bằng",
  "options": [
   "$5$.",
   "$6$.",
   "$-5$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Với $m = 5$, khử ẩn (hoặc dùng quy tắc Cramer với $\\det A = 2$)<br>$(x_0;y_0;z_0) = (1;3;1)$<br>$x_0 + y_0 + z_0 = 5$",
  "note": "Hệ vuông có nghiệm duy nhất $\\Leftrightarrow \\det A \\ne 0$.",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho hệ phương trình tuyến tính $\\begin{cases}x + 2y = 7\\\\ x + 3y - z = 9\\\\ 2x + y + mz = 10\\end{cases}$ với $x, y, z$ là ẩn và $m$ là tham số. Gọi $A$ là ma trận hệ số của hệ."
  },
  "first": true,
  "id": "tr-102"
 },
 {
  "q": "Vết (tổng các phần tử trên đường chéo chính) của ma trận $A^2$ bằng",
  "options": [
   "$-1$.",
   "$1$.",
   "$-2$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "$A^2 = \\begin{pmatrix}-2 & -1 \\\\ 3 & 1\\end{pmatrix}$<br>Vết của $A^2$: $-1$",
  "topic": "tr",
  "type": "mcq",
  "group": {
   "stem": "Cho ma trận $A = \\begin{pmatrix}1 & 1 \\\\ -3 & -2\\end{pmatrix}$, ma trận đơn vị $I$ cấp 2 và đa thức $f(x) = x^{2} - x + 1$. Kí hiệu $f(A) = A^2 - A + I$."
  },
  "first": true,
  "id": "tr-103"
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
  "id": "v2-069"
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
  "id": "v2-070"
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
  "id": "v2-071"
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
  "id": "v2-072"
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
  "id": "v2-073"
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
  "id": "v2-074"
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
  "id": "v2-075"
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
  "id": "v2-076"
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
  "id": "v2-077"
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
  "id": "v2-078"
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
  "id": "v2-079"
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
  "id": "v2-080"
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
  "id": "v2-081"
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
  "id": "v2-082"
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
  "id": "v2-083"
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
  "id": "v2-084"
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
  "id": "v2-085"
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
  "id": "v2-086"
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
  "id": "v2-087"
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
  "id": "v2-088"
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
  "id": "v2-089"
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
  "id": "v2-090"
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
  "id": "v2-091"
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
  "id": "v2-092"
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
  "id": "v2-093"
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
  "id": "v2-094"
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
  "id": "v2-095"
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
  "id": "v2-096"
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
  "id": "v2-097"
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
  "id": "v2-098"
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
  "id": "v2-099"
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
  "id": "v2-100"
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
  "id": "v2-101"
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
  "id": "v2-102"
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
  "id": "v2-103"
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
  "id": "v2-104"
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
  "id": "v2-105"
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
  "id": "v2-106"
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
  "id": "v2-107"
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
  "id": "v2-108"
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
  "id": "v2-109"
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
  "id": "v2-110"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -8x - 4$ với điều kiện $y(0) = 3;\\ y'(0) = 6$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "18"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -8x - 4 \\Rightarrow y^* = 2x + 1$<br>$y = 2x + 1 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 3,\\ y'(0) = 6 \\Rightarrow C_1 = 2,\\ C_2 = 0$<br>$y(1) = 3 + 2e^{2} \\approx 17{,}78$<br>Đáp số: $18$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-111"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = 6$ với điều kiện $y(0) = 4;\\ y'(0) = 2$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "58"
  ],
  "explain": "Nghiệm riêng hằng $y^* = 3$; $y = 3 + C_1e^{x} + C_2e^{2x}$ với $C_1 = 0,\\ C_2 = 1$; $y(2) \\approx 57{,}60$<br>Đáp số: $58$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-112"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y' - 2y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "15"
  ],
  "explain": "$y = C_1e^{2x} + C_2e^{-x}$ với $C_1 = 2,\\ C_2 = 1$; $y(1) \\approx 15{,}15$<br>Đáp số: $15$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-113"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y' + 3y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 0$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "4"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -3$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 4\\left[y\\right]_0^{+\\infty} + 3\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(0) - 4\\cdot3 + 3I = 0 \\Rightarrow I = \\dfrac{12}{3} = 4$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-114"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -4x - 8$ với điều kiện $y(0) = 3;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "10"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -4x - 8 \\Rightarrow y^* = x + 2$<br>$y = x + 2 + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 3,\\ y'(0) = 3 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 3 + e^{2} \\approx 10{,}39$<br>Đáp số: $10$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-115"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 8$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "37"
  ],
  "explain": "Nghiệm kép $k = 2$: $y = (3 + 2x)e^{2x}$; $y(1) \\approx 36{,}945$<br>Đáp số: $37$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-116"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 8$. Tính $y\\left(\\dfrac{\\pi}{2}\\right)$.",
  "answer": [
   "-1"
  ],
  "explain": "$y = 1\\cos 2x + 4\\sin 2x$<br>Đáp số: $-1$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-117"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 6y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "1"
  ],
  "explain": "Nghiệm đặc trưng $k = -2,\\ k = -3$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 6\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(1) - 5\\cdot1 + 6I = 0 \\Rightarrow I = \\dfrac{6}{6} = 1$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-118"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -2x - 1$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "6"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 1 = 0 \\Rightarrow k = \\pm1$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-1(Ax + B) = -2x - 1 \\Rightarrow y^* = 2x + 1$<br>$y = 2x + 1 + C_1e^{x} + C_2e^{-x}$<br>$y(0) = 2,\\ y'(0) = 3 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 3 + e \\approx 5{,}72$<br>Đáp số: $6$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-119"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = 4$ với điều kiện $y(0) = 4;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "12"
  ],
  "explain": "Nghiệm riêng hằng $y^* = 2$; $y = 2 + C_1e^{x} + C_2e^{2x}$ với $C_1 = 1,\\ C_2 = 1$; $y(1) \\approx 12{,}11$<br>Đáp số: $12$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-120"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 3y' + 2y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "10"
  ],
  "explain": "$y = C_1e^{x} + C_2e^{2x}$ với $C_1 = 1,\\ C_2 = 1$; $y(1) \\approx 10{,}11$<br>Đáp số: $10$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-121"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 4;\\ y'(0) = -2$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "5"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(-2) - 3\\cdot4 + 2I = 0 \\Rightarrow I = \\dfrac{10}{2} = 5$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-122"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y = -4x$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "8"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 4 = 0 \\Rightarrow k = \\pm2$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-4(Ax + B) = -4x \\Rightarrow y^* = x$<br>$y = x + C_1e^{2x} + C_2e^{-2x}$<br>$y(0) = 1,\\ y'(0) = 3 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 1 + e^{2} \\approx 8{,}39$<br>Đáp số: $8$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-123"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 1$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "-55"
  ],
  "explain": "Nghiệm kép $k = 2$: $y = (1 + (-1)x)e^{2x}$; $y(2) \\approx -54{,}598$<br>Đáp số: $-55$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-124"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 4y = 0$ với điều kiện $y(0) = -2;\\ y'(0) = 2$. Tính $y\\left(\\dfrac{\\pi}{2}\\right)$.",
  "answer": [
   "2"
  ],
  "explain": "$y = -2\\cos 2x + 1\\sin 2x$<br>Đáp số: $2$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-125"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "5"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(1) - 3\\cdot3 + 2I = 0 \\Rightarrow I = \\dfrac{10}{2} = 5$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-126"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -x - 1$ với điều kiện $y(0) = 2;\\ y'(0) = 2$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "5"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 1 = 0 \\Rightarrow k = \\pm1$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-1(Ax + B) = -x - 1 \\Rightarrow y^* = x + 1$<br>$y = x + 1 + C_1e^{x} + C_2e^{-x}$<br>$y(0) = 2,\\ y'(0) = 2 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 2 + e \\approx 4{,}72$<br>Đáp số: $5$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-127"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 5y' + 6y = 18$ với điều kiện $y(0) = 4;\\ y'(0) = 3$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "406"
  ],
  "explain": "Nghiệm riêng hằng $y^* = 3$; $y = 3 + C_1e^{2x} + C_2e^{3x}$ với $C_1 = 0,\\ C_2 = 1$; $y(2) \\approx 406{,}43$<br>Đáp số: $406$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-128"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y' - 2y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 1$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "55"
  ],
  "explain": "$y = C_1e^{-x} + C_2e^{2x}$ với $C_1 = 1,\\ C_2 = 1$; $y(2) \\approx 54{,}73$<br>Đáp số: $55$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-129"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 5y' + 4y = 0$ với điều kiện $y(0) = 3;\\ y'(0) = 1$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "4"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -4$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 5\\left[y\\right]_0^{+\\infty} + 4\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(1) - 5\\cdot3 + 4I = 0 \\Rightarrow I = \\dfrac{16}{4} = 4$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-130"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -2x - 2$ với điều kiện $y(0) = 3;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "7"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 1 = 0 \\Rightarrow k = \\pm1$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-1(Ax + B) = -2x - 2 \\Rightarrow y^* = 2x + 2$<br>$y = 2x + 2 + C_1e^{x} + C_2e^{-x}$<br>$y(0) = 3,\\ y'(0) = 3 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 4 + e \\approx 6{,}72$<br>Đáp số: $7$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-131"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - 4y' + 4y = 0$ với điều kiện $y(0) = 2;\\ y'(0) = 6$. Tính $y(2)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "328"
  ],
  "explain": "Nghiệm kép $k = 2$: $y = (2 + 2x)e^{2x}$; $y(2) \\approx 327{,}589$<br>Đáp số: $328$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-132"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 9y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 12$. Tính $y\\left(\\dfrac{\\pi}{6}\\right)$.",
  "answer": [
   "4"
  ],
  "explain": "$y = 1\\cos 3x + 4\\sin 3x$<br>Đáp số: $4$",
  "note": "Tìm nghiệm tổng quát, dùng hai điều kiện đầu để tìm $C_1, C_2$, rồi mới thay số.",
  "topic": "v2",
  "type": "short",
  "id": "v2-133"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' + 3y' + 2y = 0$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Tính $\\displaystyle\\int_0^{+\\infty} y(x)\\,dx$.<span class=\"q-hint\">Gợi ý: lấy tích phân hai vế của phương trình từ $0$ đến $+\\infty$ và chú ý rằng $y,\\ y' \\to 0$ khi $x \\to +\\infty$.</span>",
  "answer": [
   "3"
  ],
  "explain": "Nghiệm đặc trưng $k = -1,\\ k = -2$ đều âm nên $y,\\ y' \\to 0$ khi $x \\to +\\infty$<br>Tích phân hai vế: $\\left[y'\\right]_0^{+\\infty} + 3\\left[y\\right]_0^{+\\infty} + 2\\displaystyle\\int_0^{+\\infty}y\\,dx = 0$<br>$-(3) - 3\\cdot1 + 2I = 0 \\Rightarrow I = \\dfrac{6}{2} = 3$",
  "note": "Không cần tìm $y$: lấy tích phân trực tiếp hai vế của phương trình.",
  "topic": "v2",
  "type": "short",
  "id": "v2-134"
 },
 {
  "q": "Gọi $y = y(x)$ là nghiệm của bài toán $y'' - y = -2x$ với điều kiện $y(0) = 1;\\ y'(0) = 3$. Tính $y(1)$ <i>(kết quả làm tròn đến hàng đơn vị)</i>.",
  "answer": [
   "5"
  ],
  "explain": "Phương trình đặc trưng: $k^2 - 1 = 0 \\Rightarrow k = \\pm1$<br>Nghiệm riêng dạng $y^* = Ax + B$: $-1(Ax + B) = -2x \\Rightarrow y^* = 2x$<br>$y = 2x + C_1e^{x} + C_2e^{-x}$<br>$y(0) = 1,\\ y'(0) = 3 \\Rightarrow C_1 = 1,\\ C_2 = 0$<br>$y(1) = 2 + e \\approx 4{,}72$<br>Đáp số: $5$",
  "note": "Nghiệm = nghiệm thuần nhất + nghiệm riêng; điều kiện đầu áp cho nghiệm đầy đủ.",
  "topic": "v2",
  "type": "short",
  "id": "v2-135"
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
  "id": "td-082"
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
  "id": "td-083"
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
  "id": "td-084"
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
  "id": "td-085"
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
  "id": "td-086"
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
  "id": "td-087"
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
  "id": "td-088"
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
  "id": "td-089"
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
  "id": "td-090"
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
  "id": "td-091"
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
  "id": "td-092"
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
  "id": "td-093"
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
  "id": "td-094"
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
  "id": "td-095"
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
  "id": "td-096"
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
  "id": "td-097"
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
  "id": "td-098"
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
  "id": "td-099"
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
  "id": "td-100"
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
  "id": "td-101"
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
  "id": "td-102"
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
  "id": "td-103"
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
  "id": "td-104"
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
  "id": "td-105"
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
  "id": "td-106"
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
  "id": "td-107"
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
  "id": "td-108"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-1y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$80 \\pi$.",
   "$48 \\pi$.",
   "$40 \\pi$.",
   "$- 80 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-1)=5$.<br>Theo Green, tích phân bằng $(5)\\cdot\\pi\\cdot16=80 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-109"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-2y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$6 \\pi$.",
   "$2 \\pi$.",
   "$12 \\pi$.",
   "$3 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-2)=6$.<br>Theo Green, tích phân bằng $(6)\\cdot\\pi\\cdot1=6 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-110"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-3y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$28 \\pi$.",
   "$4 \\pi$.",
   "$14 \\pi$.",
   "$- 28 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-3)=7$.<br>Theo Green, tích phân bằng $(7)\\cdot\\pi\\cdot4=28 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-111"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-4y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$72 \\pi$.",
   "$0$.",
   "$48 \\pi$.",
   "$36 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-4)=8$.<br>Theo Green, tích phân bằng $(8)\\cdot\\pi\\cdot9=72 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-112"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-5y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$144 \\pi$.",
   "$- 16 \\pi$.",
   "$72 \\pi$.",
   "$- 144 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-5)=9$.<br>Theo Green, tích phân bằng $(9)\\cdot\\pi\\cdot16=144 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-113"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-6y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$10 \\pi$.",
   "$- 2 \\pi$.",
   "$20 \\pi$.",
   "$5 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-6)=10$.<br>Theo Green, tích phân bằng $(10)\\cdot\\pi\\cdot1=10 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-114"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-7y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$44 \\pi$.",
   "$- 12 \\pi$.",
   "$22 \\pi$.",
   "$- 44 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-7)=11$.<br>Theo Green, tích phân bằng $(11)\\cdot\\pi\\cdot4=44 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-115"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-8y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$108 \\pi$.",
   "$- 36 \\pi$.",
   "$72 \\pi$.",
   "$54 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-8)=12$.<br>Theo Green, tích phân bằng $(12)\\cdot\\pi\\cdot9=108 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-116"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-9y)\\,dx + (4x)\\,dy$.",
  "options": [
   "$208 \\pi$.",
   "$- 80 \\pi$.",
   "$104 \\pi$.",
   "$- 208 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=4-(-9)=13$.<br>Theo Green, tích phân bằng $(13)\\cdot\\pi\\cdot16=208 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-117"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-1y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$6 \\pi$.",
   "$4 \\pi$.",
   "$12 \\pi$.",
   "$3 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-1)=6$.<br>Theo Green, tích phân bằng $(6)\\cdot\\pi\\cdot1=6 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-118"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-2y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$28 \\pi$.",
   "$12 \\pi$.",
   "$14 \\pi$.",
   "$- 28 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-2)=7$.<br>Theo Green, tích phân bằng $(7)\\cdot\\pi\\cdot4=28 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-119"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-3y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$72 \\pi$.",
   "$18 \\pi$.",
   "$48 \\pi$.",
   "$36 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-3)=8$.<br>Theo Green, tích phân bằng $(8)\\cdot\\pi\\cdot9=72 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-120"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-4y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$144 \\pi$.",
   "$16 \\pi$.",
   "$72 \\pi$.",
   "$- 144 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-4)=9$.<br>Theo Green, tích phân bằng $(9)\\cdot\\pi\\cdot16=144 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-121"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-5y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$10 \\pi$.",
   "$0$.",
   "$20 \\pi$.",
   "$5 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-5)=10$.<br>Theo Green, tích phân bằng $(10)\\cdot\\pi\\cdot1=10 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-122"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-6y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$44 \\pi$.",
   "$- 4 \\pi$.",
   "$22 \\pi$.",
   "$- 44 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-6)=11$.<br>Theo Green, tích phân bằng $(11)\\cdot\\pi\\cdot4=44 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-123"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-7y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$108 \\pi$.",
   "$- 18 \\pi$.",
   "$72 \\pi$.",
   "$54 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-7)=12$.<br>Theo Green, tích phân bằng $(12)\\cdot\\pi\\cdot9=108 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-124"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-8y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$208 \\pi$.",
   "$- 48 \\pi$.",
   "$104 \\pi$.",
   "$- 208 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-8)=13$.<br>Theo Green, tích phân bằng $(13)\\cdot\\pi\\cdot16=208 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-125"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-9y)\\,dx + (5x)\\,dy$.",
  "options": [
   "$14 \\pi$.",
   "$- 4 \\pi$.",
   "$28 \\pi$.",
   "$7 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=5-(-9)=14$.<br>Theo Green, tích phân bằng $(14)\\cdot\\pi\\cdot1=14 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-126"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-1y)\\,dx + (6x)\\,dy$.",
  "options": [
   "$28 \\pi$.",
   "$20 \\pi$.",
   "$14 \\pi$.",
   "$- 28 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=6-(-1)=7$.<br>Theo Green, tích phân bằng $(7)\\cdot\\pi\\cdot4=28 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-127"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-2y)\\,dx + (6x)\\,dy$.",
  "options": [
   "$72 \\pi$.",
   "$36 \\pi$.",
   "$48 \\pi$.",
   "$- 72 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=6-(-2)=8$.<br>Theo Green, tích phân bằng $(8)\\cdot\\pi\\cdot9=72 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-128"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-3y)\\,dx + (6x)\\,dy$.",
  "options": [
   "$144 \\pi$.",
   "$48 \\pi$.",
   "$72 \\pi$.",
   "$- 144 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=6-(-3)=9$.<br>Theo Green, tích phân bằng $(9)\\cdot\\pi\\cdot16=144 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-129"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=1$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-4y)\\,dx + (6x)\\,dy$.",
  "options": [
   "$10 \\pi$.",
   "$2 \\pi$.",
   "$20 \\pi$.",
   "$5 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=6-(-4)=10$.<br>Theo Green, tích phân bằng $(10)\\cdot\\pi\\cdot1=10 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-130"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=4$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-5y)\\,dx + (6x)\\,dy$.",
  "options": [
   "$44 \\pi$.",
   "$4 \\pi$.",
   "$22 \\pi$.",
   "$- 44 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=6-(-5)=11$.<br>Theo Green, tích phân bằng $(11)\\cdot\\pi\\cdot4=44 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-131"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=9$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-6y)\\,dx + (6x)\\,dy$.",
  "options": [
   "$108 \\pi$.",
   "$0$.",
   "$72 \\pi$.",
   "$54 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=6-(-6)=12$.<br>Theo Green, tích phân bằng $(12)\\cdot\\pi\\cdot9=108 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-132"
 },
 {
  "q": "Cho $C$ là đường tròn $x^2+y^2=16$ lấy theo chiều ngược chiều kim đồng hồ. Dùng định lý Green, tính $\\displaystyle\\oint_C (-7y)\\,dx + (6x)\\,dy$.",
  "options": [
   "$208 \\pi$.",
   "$- 16 \\pi$.",
   "$104 \\pi$.",
   "$- 208 \\pi$."
  ],
  "answer": 0,
  "explain": "$\\dfrac{\\partial Q}{\\partial x}-\\dfrac{\\partial P}{\\partial y}=6-(-7)=13$.<br>Theo Green, tích phân bằng $(13)\\cdot\\pi\\cdot16=208 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-133"
 },
 {
  "q": "Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật $A = \\begin{pmatrix}\\dfrac{1}{5} & \\dfrac{2}{5} \\\\ \\dfrac{1}{4} & \\dfrac{1}{4}\\end{pmatrix}$ và vectơ cầu cuối cùng của thị trường $D = \\begin{pmatrix}60 \\\\ 40\\end{pmatrix}$. Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng",
  "options": [
   "$216$.",
   "$196$.",
   "$241$.",
   "$\\dfrac{864}{5}$."
  ],
  "answer": 0,
  "explain": "Ma trận Leontief: $I - A = \\begin{pmatrix}\\dfrac{4}{5} & - \\dfrac{2}{5} \\\\ - \\dfrac{1}{4} & \\dfrac{3}{4}\\end{pmatrix}$, $\\det(I-A) = \\dfrac{1}{2}$.<br>Ma trận nghịch đảo: $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{3}{2} & \\dfrac{4}{5} \\\\ \\dfrac{1}{2} & \\dfrac{8}{5}\\end{pmatrix}$.<br>Vectơ sản lượng: $X = (I - A)^{-1}D = \\begin{pmatrix}122 \\\\ 94\\end{pmatrix} \\Rightarrow x_1 = 122,\\; x_2 = 94$.<br>Tổng mức sản lượng: $x_1 + x_2 = 216$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-001"
 },
 {
  "q": "Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = \\begin{pmatrix}\\dfrac{1}{5} & \\dfrac{2}{5} \\\\ \\dfrac{1}{4} & \\dfrac{1}{4}\\end{pmatrix}$ và nhu cầu tiêu dùng cuối $D = \\begin{pmatrix}60 \\\\ 40\\end{pmatrix}$. Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng",
  "options": [
   "$122$.",
   "$94$.",
   "$137$.",
   "$102$."
  ],
  "answer": 0,
  "explain": "Phương trình cân đối: $(I - A)X = D \\Leftrightarrow X = (I - A)^{-1}D$.<br>Ta có $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{3}{2} & \\dfrac{4}{5} \\\\ \\dfrac{1}{2} & \\dfrac{8}{5}\\end{pmatrix}$.<br>Nhân với $D$: $x_1 = \\dfrac{3}{2}\\cdot 60 + \\dfrac{4}{5}\\cdot 40 = 122$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-002"
 },
 {
  "q": "Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật $A = \\begin{pmatrix}\\dfrac{1}{4} & \\dfrac{1}{2} \\\\ \\dfrac{1}{3} & \\dfrac{1}{6}\\end{pmatrix}$ và vectơ cầu cuối cùng của thị trường $D = \\begin{pmatrix}90 \\\\ 60\\end{pmatrix}$. Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng",
  "options": [
   "$\\dfrac{4320}{11}$.",
   "$\\dfrac{4100}{11}$.",
   "$\\dfrac{4595}{11}$.",
   "$\\dfrac{3456}{11}$."
  ],
  "answer": 0,
  "explain": "Ma trận Leontief: $I - A = \\begin{pmatrix}\\dfrac{3}{4} & - \\dfrac{1}{2} \\\\ - \\dfrac{1}{3} & \\dfrac{5}{6}\\end{pmatrix}$, $\\det(I-A) = \\dfrac{11}{24}$.<br>Ma trận nghịch đảo: $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{20}{11} & \\dfrac{12}{11} \\\\ \\dfrac{8}{11} & \\dfrac{18}{11}\\end{pmatrix}$.<br>Vectơ sản lượng: $X = (I - A)^{-1}D = \\begin{pmatrix}\\dfrac{2520}{11} \\\\ \\dfrac{1800}{11}\\end{pmatrix} \\Rightarrow x_1 = \\dfrac{2520}{11},\\; x_2 = \\dfrac{1800}{11}$.<br>Tổng mức sản lượng: $x_1 + x_2 = \\dfrac{4320}{11}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-003"
 },
 {
  "q": "Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = \\begin{pmatrix}\\dfrac{1}{4} & \\dfrac{1}{2} \\\\ \\dfrac{1}{3} & \\dfrac{1}{6}\\end{pmatrix}$ và nhu cầu tiêu dùng cuối $D = \\begin{pmatrix}90 \\\\ 60\\end{pmatrix}$. Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng",
  "options": [
   "$\\dfrac{2520}{11}$.",
   "$\\dfrac{1800}{11}$.",
   "$\\dfrac{2685}{11}$.",
   "$\\dfrac{2300}{11}$."
  ],
  "answer": 0,
  "explain": "Phương trình cân đối: $(I - A)X = D \\Leftrightarrow X = (I - A)^{-1}D$.<br>Ta có $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{20}{11} & \\dfrac{12}{11} \\\\ \\dfrac{8}{11} & \\dfrac{18}{11}\\end{pmatrix}$.<br>Nhân với $D$: $x_1 = \\dfrac{20}{11}\\cdot 90 + \\dfrac{12}{11}\\cdot 60 = \\dfrac{2520}{11}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-004"
 },
 {
  "q": "Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật $A = \\begin{pmatrix}\\dfrac{1}{5} & \\dfrac{3}{10} \\\\ \\dfrac{2}{5} & \\dfrac{1}{10}\\end{pmatrix}$ và vectơ cầu cuối cùng của thị trường $D = \\begin{pmatrix}100 \\\\ 50\\end{pmatrix}$. Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng",
  "options": [
   "$\\dfrac{925}{3}$.",
   "$\\dfrac{865}{3}$.",
   "$\\dfrac{1000}{3}$.",
   "$\\dfrac{740}{3}$."
  ],
  "answer": 0,
  "explain": "Ma trận Leontief: $I - A = \\begin{pmatrix}\\dfrac{4}{5} & - \\dfrac{3}{10} \\\\ - \\dfrac{2}{5} & \\dfrac{9}{10}\\end{pmatrix}$, $\\det(I-A) = \\dfrac{3}{5}$.<br>Ma trận nghịch đảo: $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{3}{2} & \\dfrac{1}{2} \\\\ \\dfrac{2}{3} & \\dfrac{4}{3}\\end{pmatrix}$.<br>Vectơ sản lượng: $X = (I - A)^{-1}D = \\begin{pmatrix}175 \\\\ \\dfrac{400}{3}\\end{pmatrix} \\Rightarrow x_1 = 175,\\; x_2 = \\dfrac{400}{3}$.<br>Tổng mức sản lượng: $x_1 + x_2 = \\dfrac{925}{3}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-005"
 },
 {
  "q": "Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = \\begin{pmatrix}\\dfrac{1}{5} & \\dfrac{3}{10} \\\\ \\dfrac{2}{5} & \\dfrac{1}{10}\\end{pmatrix}$ và nhu cầu tiêu dùng cuối $D = \\begin{pmatrix}100 \\\\ 50\\end{pmatrix}$. Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng",
  "options": [
   "$175$.",
   "$\\dfrac{400}{3}$.",
   "$190$.",
   "$155$."
  ],
  "answer": 0,
  "explain": "Phương trình cân đối: $(I - A)X = D \\Leftrightarrow X = (I - A)^{-1}D$.<br>Ta có $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{3}{2} & \\dfrac{1}{2} \\\\ \\dfrac{2}{3} & \\dfrac{4}{3}\\end{pmatrix}$.<br>Nhân với $D$: $x_1 = \\dfrac{3}{2}\\cdot 100 + \\dfrac{1}{2}\\cdot 50 = 175$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-006"
 },
 {
  "q": "Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật $A = \\begin{pmatrix}\\dfrac{1}{6} & \\dfrac{1}{3} \\\\ \\dfrac{1}{2} & \\dfrac{1}{4}\\end{pmatrix}$ và vectơ cầu cuối cùng của thị trường $D = \\begin{pmatrix}70 \\\\ 80\\end{pmatrix}$. Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng",
  "options": [
   "$\\dfrac{4340}{11}$.",
   "$\\dfrac{4120}{11}$.",
   "$\\dfrac{4615}{11}$.",
   "$\\dfrac{3472}{11}$."
  ],
  "answer": 0,
  "explain": "Ma trận Leontief: $I - A = \\begin{pmatrix}\\dfrac{5}{6} & - \\dfrac{1}{3} \\\\ - \\dfrac{1}{2} & \\dfrac{3}{4}\\end{pmatrix}$, $\\det(I-A) = \\dfrac{11}{24}$.<br>Ma trận nghịch đảo: $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{18}{11} & \\dfrac{8}{11} \\\\ \\dfrac{12}{11} & \\dfrac{20}{11}\\end{pmatrix}$.<br>Vectơ sản lượng: $X = (I - A)^{-1}D = \\begin{pmatrix}\\dfrac{1900}{11} \\\\ \\dfrac{2440}{11}\\end{pmatrix} \\Rightarrow x_1 = \\dfrac{1900}{11},\\; x_2 = \\dfrac{2440}{11}$.<br>Tổng mức sản lượng: $x_1 + x_2 = \\dfrac{4340}{11}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-007"
 },
 {
  "q": "Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = \\begin{pmatrix}\\dfrac{1}{6} & \\dfrac{1}{3} \\\\ \\dfrac{1}{2} & \\dfrac{1}{4}\\end{pmatrix}$ và nhu cầu tiêu dùng cuối $D = \\begin{pmatrix}70 \\\\ 80\\end{pmatrix}$. Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng",
  "options": [
   "$\\dfrac{1900}{11}$.",
   "$\\dfrac{2440}{11}$.",
   "$\\dfrac{2065}{11}$.",
   "$\\dfrac{1680}{11}$."
  ],
  "answer": 0,
  "explain": "Phương trình cân đối: $(I - A)X = D \\Leftrightarrow X = (I - A)^{-1}D$.<br>Ta có $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{18}{11} & \\dfrac{8}{11} \\\\ \\dfrac{12}{11} & \\dfrac{20}{11}\\end{pmatrix}$.<br>Nhân với $D$: $x_1 = \\dfrac{18}{11}\\cdot 70 + \\dfrac{8}{11}\\cdot 80 = \\dfrac{1900}{11}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-008"
 },
 {
  "q": "Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật $A = \\begin{pmatrix}\\dfrac{1}{5} & \\dfrac{3}{10} \\\\ \\dfrac{2}{5} & \\dfrac{1}{5}\\end{pmatrix}$ và vectơ cầu cuối cùng của thị trường $D = \\begin{pmatrix}45 \\\\ 55\\end{pmatrix}$. Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng",
  "options": [
   "$\\dfrac{5725}{26}$.",
   "$\\dfrac{5205}{26}$.",
   "$\\dfrac{6375}{26}$.",
   "$\\dfrac{2290}{13}$."
  ],
  "answer": 0,
  "explain": "Ma trận Leontief: $I - A = \\begin{pmatrix}\\dfrac{4}{5} & - \\dfrac{3}{10} \\\\ - \\dfrac{2}{5} & \\dfrac{4}{5}\\end{pmatrix}$, $\\det(I-A) = \\dfrac{13}{25}$.<br>Ma trận nghịch đảo: $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{20}{13} & \\dfrac{15}{26} \\\\ \\dfrac{10}{13} & \\dfrac{20}{13}\\end{pmatrix}$.<br>Vectơ sản lượng: $X = (I - A)^{-1}D = \\begin{pmatrix}\\dfrac{2625}{26} \\\\ \\dfrac{1550}{13}\\end{pmatrix} \\Rightarrow x_1 = \\dfrac{2625}{26},\\; x_2 = \\dfrac{1550}{13}$.<br>Tổng mức sản lượng: $x_1 + x_2 = \\dfrac{5725}{26}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-009"
 },
 {
  "q": "Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = \\begin{pmatrix}\\dfrac{1}{5} & \\dfrac{3}{10} \\\\ \\dfrac{2}{5} & \\dfrac{1}{5}\\end{pmatrix}$ và nhu cầu tiêu dùng cuối $D = \\begin{pmatrix}45 \\\\ 55\\end{pmatrix}$. Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng",
  "options": [
   "$\\dfrac{2625}{26}$.",
   "$\\dfrac{1550}{13}$.",
   "$\\dfrac{3015}{26}$.",
   "$\\dfrac{2105}{26}$."
  ],
  "answer": 0,
  "explain": "Phương trình cân đối: $(I - A)X = D \\Leftrightarrow X = (I - A)^{-1}D$.<br>Ta có $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{20}{13} & \\dfrac{15}{26} \\\\ \\dfrac{10}{13} & \\dfrac{20}{13}\\end{pmatrix}$.<br>Nhân với $D$: $x_1 = \\dfrac{20}{13}\\cdot 45 + \\dfrac{15}{26}\\cdot 55 = \\dfrac{2625}{26}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-010"
 },
 {
  "q": "Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật $A = \\begin{pmatrix}\\dfrac{3}{10} & \\dfrac{1}{5} \\\\ \\dfrac{1}{5} & \\dfrac{2}{5}\\end{pmatrix}$ và vectơ cầu cuối cùng của thị trường $D = \\begin{pmatrix}80 \\\\ 120\\end{pmatrix}$. Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng",
  "options": [
   "$\\dfrac{8600}{19}$.",
   "$\\dfrac{8220}{19}$.",
   "$\\dfrac{9075}{19}$.",
   "$\\dfrac{6880}{19}$."
  ],
  "answer": 0,
  "explain": "Ma trận Leontief: $I - A = \\begin{pmatrix}\\dfrac{7}{10} & - \\dfrac{1}{5} \\\\ - \\dfrac{1}{5} & \\dfrac{3}{5}\\end{pmatrix}$, $\\det(I-A) = \\dfrac{19}{50}$.<br>Ma trận nghịch đảo: $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{30}{19} & \\dfrac{10}{19} \\\\ \\dfrac{10}{19} & \\dfrac{35}{19}\\end{pmatrix}$.<br>Vectơ sản lượng: $X = (I - A)^{-1}D = \\begin{pmatrix}\\dfrac{3600}{19} \\\\ \\dfrac{5000}{19}\\end{pmatrix} \\Rightarrow x_1 = \\dfrac{3600}{19},\\; x_2 = \\dfrac{5000}{19}$.<br>Tổng mức sản lượng: $x_1 + x_2 = \\dfrac{8600}{19}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-011"
 },
 {
  "q": "Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = \\begin{pmatrix}\\dfrac{3}{10} & \\dfrac{1}{5} \\\\ \\dfrac{1}{5} & \\dfrac{2}{5}\\end{pmatrix}$ và nhu cầu tiêu dùng cuối $D = \\begin{pmatrix}80 \\\\ 120\\end{pmatrix}$. Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng",
  "options": [
   "$\\dfrac{3600}{19}$.",
   "$\\dfrac{5000}{19}$.",
   "$\\dfrac{3885}{19}$.",
   "$\\dfrac{3220}{19}$."
  ],
  "answer": 0,
  "explain": "Phương trình cân đối: $(I - A)X = D \\Leftrightarrow X = (I - A)^{-1}D$.<br>Ta có $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{30}{19} & \\dfrac{10}{19} \\\\ \\dfrac{10}{19} & \\dfrac{35}{19}\\end{pmatrix}$.<br>Nhân với $D$: $x_1 = \\dfrac{30}{19}\\cdot 80 + \\dfrac{10}{19}\\cdot 120 = \\dfrac{3600}{19}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-012"
 },
 {
  "q": "Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật $A = \\begin{pmatrix}\\dfrac{1}{4} & \\dfrac{3}{8} \\\\ \\dfrac{1}{2} & \\dfrac{1}{8}\\end{pmatrix}$ và vectơ cầu cuối cùng của thị trường $D = \\begin{pmatrix}110 \\\\ 70\\end{pmatrix}$. Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng",
  "options": [
   "$\\dfrac{1472}{3}$.",
   "$\\dfrac{1412}{3}$.",
   "$\\dfrac{1547}{3}$.",
   "$\\dfrac{5888}{15}$."
  ],
  "answer": 0,
  "explain": "Ma trận Leontief: $I - A = \\begin{pmatrix}\\dfrac{3}{4} & - \\dfrac{3}{8} \\\\ - \\dfrac{1}{2} & \\dfrac{7}{8}\\end{pmatrix}$, $\\det(I-A) = \\dfrac{15}{32}$.<br>Ma trận nghịch đảo: $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{28}{15} & \\dfrac{4}{5} \\\\ \\dfrac{16}{15} & \\dfrac{8}{5}\\end{pmatrix}$.<br>Vectơ sản lượng: $X = (I - A)^{-1}D = \\begin{pmatrix}\\dfrac{784}{3} \\\\ \\dfrac{688}{3}\\end{pmatrix} \\Rightarrow x_1 = \\dfrac{784}{3},\\; x_2 = \\dfrac{688}{3}$.<br>Tổng mức sản lượng: $x_1 + x_2 = \\dfrac{1472}{3}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-013"
 },
 {
  "q": "Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = \\begin{pmatrix}\\dfrac{1}{4} & \\dfrac{3}{8} \\\\ \\dfrac{1}{2} & \\dfrac{1}{8}\\end{pmatrix}$ và nhu cầu tiêu dùng cuối $D = \\begin{pmatrix}110 \\\\ 70\\end{pmatrix}$. Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng",
  "options": [
   "$\\dfrac{784}{3}$.",
   "$\\dfrac{688}{3}$.",
   "$\\dfrac{829}{3}$.",
   "$\\dfrac{724}{3}$."
  ],
  "answer": 0,
  "explain": "Phương trình cân đối: $(I - A)X = D \\Leftrightarrow X = (I - A)^{-1}D$.<br>Ta có $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{28}{15} & \\dfrac{4}{5} \\\\ \\dfrac{16}{15} & \\dfrac{8}{5}\\end{pmatrix}$.<br>Nhân với $D$: $x_1 = \\dfrac{28}{15}\\cdot 110 + \\dfrac{4}{5}\\cdot 70 = \\dfrac{784}{3}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-014"
 },
 {
  "q": "Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật $A = \\begin{pmatrix}\\dfrac{1}{3} & \\dfrac{1}{4} \\\\ \\dfrac{2}{5} & \\dfrac{1}{5}\\end{pmatrix}$ và vectơ cầu cuối cùng của thị trường $D = \\begin{pmatrix}85 \\\\ 95\\end{pmatrix}$. Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng",
  "options": [
   "$\\dfrac{11345}{26}$.",
   "$\\dfrac{10825}{26}$.",
   "$\\dfrac{11995}{26}$.",
   "$\\dfrac{4538}{13}$."
  ],
  "answer": 0,
  "explain": "Ma trận Leontief: $I - A = \\begin{pmatrix}\\dfrac{2}{3} & - \\dfrac{1}{4} \\\\ - \\dfrac{2}{5} & \\dfrac{4}{5}\\end{pmatrix}$, $\\det(I-A) = \\dfrac{13}{30}$.<br>Ma trận nghịch đảo: $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{24}{13} & \\dfrac{15}{26} \\\\ \\dfrac{12}{13} & \\dfrac{20}{13}\\end{pmatrix}$.<br>Vectơ sản lượng: $X = (I - A)^{-1}D = \\begin{pmatrix}\\dfrac{5505}{26} \\\\ \\dfrac{2920}{13}\\end{pmatrix} \\Rightarrow x_1 = \\dfrac{5505}{26},\\; x_2 = \\dfrac{2920}{13}$.<br>Tổng mức sản lượng: $x_1 + x_2 = \\dfrac{11345}{26}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-015"
 },
 {
  "q": "Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = \\begin{pmatrix}\\dfrac{1}{3} & \\dfrac{1}{4} \\\\ \\dfrac{2}{5} & \\dfrac{1}{5}\\end{pmatrix}$ và nhu cầu tiêu dùng cuối $D = \\begin{pmatrix}85 \\\\ 95\\end{pmatrix}$. Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng",
  "options": [
   "$\\dfrac{5505}{26}$.",
   "$\\dfrac{2920}{13}$.",
   "$\\dfrac{5895}{26}$.",
   "$\\dfrac{4985}{26}$."
  ],
  "answer": 0,
  "explain": "Phương trình cân đối: $(I - A)X = D \\Leftrightarrow X = (I - A)^{-1}D$.<br>Ta có $(I - A)^{-1} = \\begin{pmatrix}\\dfrac{24}{13} & \\dfrac{15}{26} \\\\ \\dfrac{12}{13} & \\dfrac{20}{13}\\end{pmatrix}$.<br>Nhân với $D$: $x_1 = \\dfrac{24}{13}\\cdot 85 + \\dfrac{15}{26}\\cdot 95 = \\dfrac{5505}{26}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-016"
 },
 {
  "q": "Một thị trường viễn thông có 2 nhà mạng $A$ và $B$. Ma trận chuyển dịch khách hàng hàng tháng là $P = \\begin{pmatrix}\\dfrac{4}{5} & \\dfrac{1}{5} \\\\ \\dfrac{3}{10} & \\dfrac{7}{10}\\end{pmatrix}$ (với phần tử $p_{ij}$ là xác suất khách hàng chuyển từ mạng $i$ sang mạng $j$). Về lâu dài, thị phần ổn định của nhà mạng $A$ đạt tỉ lệ bằng",
  "options": [
   "$\\dfrac{3}{5}$.",
   "$\\dfrac{2}{5}$.",
   "$\\dfrac{27}{50}$.",
   "$\\dfrac{7}{10}$."
  ],
  "answer": 0,
  "explain": "Gọi $\\pi = (x;\\; y)$ là vectơ phân phối dừng thỏa $\\pi P = \\pi$ và $x + y = 1$.<br>Hệ phương trình: $\\begin{cases} \\dfrac{4}{5}x + \\dfrac{3}{10}y = x \\\\ x + y = 1 \\end{cases} \\Leftrightarrow \\dfrac{1}{5}x = \\dfrac{3}{10}y$.<br>Thay $y = 1 - x$: $(\\dfrac{1}{5} + \\dfrac{3}{10})x = \\dfrac{3}{10} \\Rightarrow x = \\dfrac{3}{5}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-017"
 },
 {
  "q": "Một thị trường viễn thông có 2 nhà mạng $A$ và $B$. Ma trận chuyển dịch khách hàng hàng tháng là $P = \\begin{pmatrix}\\dfrac{7}{10} & \\dfrac{3}{10} \\\\ \\dfrac{2}{5} & \\dfrac{3}{5}\\end{pmatrix}$ (với phần tử $p_{ij}$ là xác suất khách hàng chuyển từ mạng $i$ sang mạng $j$). Về lâu dài, thị phần ổn định của nhà mạng $A$ đạt tỉ lệ bằng",
  "options": [
   "$\\dfrac{4}{7}$.",
   "$\\dfrac{3}{7}$.",
   "$\\dfrac{18}{35}$.",
   "$\\dfrac{47}{70}$."
  ],
  "answer": 0,
  "explain": "Gọi $\\pi = (x;\\; y)$ là vectơ phân phối dừng thỏa $\\pi P = \\pi$ và $x + y = 1$.<br>Hệ phương trình: $\\begin{cases} \\dfrac{7}{10}x + \\dfrac{2}{5}y = x \\\\ x + y = 1 \\end{cases} \\Leftrightarrow \\dfrac{3}{10}x = \\dfrac{2}{5}y$.<br>Thay $y = 1 - x$: $(\\dfrac{3}{10} + \\dfrac{2}{5})x = \\dfrac{2}{5} \\Rightarrow x = \\dfrac{4}{7}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-018"
 },
 {
  "q": "Một thị trường viễn thông có 2 nhà mạng $A$ và $B$. Ma trận chuyển dịch khách hàng hàng tháng là $P = \\begin{pmatrix}\\dfrac{9}{10} & \\dfrac{1}{10} \\\\ \\dfrac{1}{5} & \\dfrac{4}{5}\\end{pmatrix}$ (với phần tử $p_{ij}$ là xác suất khách hàng chuyển từ mạng $i$ sang mạng $j$). Về lâu dài, thị phần ổn định của nhà mạng $A$ đạt tỉ lệ bằng",
  "options": [
   "$\\dfrac{2}{3}$.",
   "$\\dfrac{1}{3}$.",
   "$\\dfrac{3}{5}$.",
   "$\\dfrac{23}{30}$."
  ],
  "answer": 0,
  "explain": "Gọi $\\pi = (x;\\; y)$ là vectơ phân phối dừng thỏa $\\pi P = \\pi$ và $x + y = 1$.<br>Hệ phương trình: $\\begin{cases} \\dfrac{9}{10}x + \\dfrac{1}{5}y = x \\\\ x + y = 1 \\end{cases} \\Leftrightarrow \\dfrac{1}{10}x = \\dfrac{1}{5}y$.<br>Thay $y = 1 - x$: $(\\dfrac{1}{10} + \\dfrac{1}{5})x = \\dfrac{1}{5} \\Rightarrow x = \\dfrac{2}{3}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-019"
 },
 {
  "q": "Một thị trường viễn thông có 2 nhà mạng $A$ và $B$. Ma trận chuyển dịch khách hàng hàng tháng là $P = \\begin{pmatrix}\\dfrac{3}{4} & \\dfrac{1}{4} \\\\ \\dfrac{1}{3} & \\dfrac{2}{3}\\end{pmatrix}$ (với phần tử $p_{ij}$ là xác suất khách hàng chuyển từ mạng $i$ sang mạng $j$). Về lâu dài, thị phần ổn định của nhà mạng $A$ đạt tỉ lệ bằng",
  "options": [
   "$\\dfrac{4}{7}$.",
   "$\\dfrac{3}{7}$.",
   "$\\dfrac{18}{35}$.",
   "$\\dfrac{47}{70}$."
  ],
  "answer": 0,
  "explain": "Gọi $\\pi = (x;\\; y)$ là vectơ phân phối dừng thỏa $\\pi P = \\pi$ và $x + y = 1$.<br>Hệ phương trình: $\\begin{cases} \\dfrac{3}{4}x + \\dfrac{1}{3}y = x \\\\ x + y = 1 \\end{cases} \\Leftrightarrow \\dfrac{1}{4}x = \\dfrac{1}{3}y$.<br>Thay $y = 1 - x$: $(\\dfrac{1}{4} + \\dfrac{1}{3})x = \\dfrac{1}{3} \\Rightarrow x = \\dfrac{4}{7}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-020"
 },
 {
  "q": "Một thị trường viễn thông có 2 nhà mạng $A$ và $B$. Ma trận chuyển dịch khách hàng hàng tháng là $P = \\begin{pmatrix}\\dfrac{5}{6} & \\dfrac{1}{6} \\\\ \\dfrac{1}{4} & \\dfrac{3}{4}\\end{pmatrix}$ (với phần tử $p_{ij}$ là xác suất khách hàng chuyển từ mạng $i$ sang mạng $j$). Về lâu dài, thị phần ổn định của nhà mạng $A$ đạt tỉ lệ bằng",
  "options": [
   "$\\dfrac{3}{5}$.",
   "$\\dfrac{2}{5}$.",
   "$\\dfrac{27}{50}$.",
   "$\\dfrac{7}{10}$."
  ],
  "answer": 0,
  "explain": "Gọi $\\pi = (x;\\; y)$ là vectơ phân phối dừng thỏa $\\pi P = \\pi$ và $x + y = 1$.<br>Hệ phương trình: $\\begin{cases} \\dfrac{5}{6}x + \\dfrac{1}{4}y = x \\\\ x + y = 1 \\end{cases} \\Leftrightarrow \\dfrac{1}{6}x = \\dfrac{1}{4}y$.<br>Thay $y = 1 - x$: $(\\dfrac{1}{6} + \\dfrac{1}{4})x = \\dfrac{1}{4} \\Rightarrow x = \\dfrac{3}{5}$.",
  "topic": "mt",
  "type": "mcq",
  "id": "mt-021"
 },
 {
  "q": "Cho mạch điện hai mắt lưới có hai nguồn suất điện động $E_1 = 24\\,\\text{V}$, $E_2 = 12\\,\\text{V}$ và ba điện trở $R_1 = 4\\,\\Omega$, $R_2 = 2\\,\\Omega$, $R_3 = 6\\,\\Omega$. Theo định luật Kirchhoff, cường độ dòng điện $I_3$ chạy qua điện trở chung $R_3$ (biết $I_3 = I_1 + I_2$) bằng",
  "options": [
   "$\\dfrac{24}{11}\\,\\text{A}$.",
   "$\\dfrac{30}{11}\\,\\text{A}$.",
   "$- \\dfrac{6}{11}\\,\\text{A}$.",
   "$\\dfrac{35}{11}\\,\\text{A}$."
  ],
  "answer": 0,
  "explain": "Áp dụng định luật 2 Kirchhoff cho hai vòng mắt lưới: $\\begin{cases} (4 + 6)I_1 + 6I_2 = 24 \\\\ 6I_1 + (2 + 6)I_2 = 12\\end{cases}$<br>Ta được hệ: $\\begin{cases} 10I_1 + 6I_2 = 24 \\\\ 6I_1 + 8I_2 = 12\\end{cases}$<br>Giải hệ Cramer hoặc khử Gauss được: $I_1 = \\dfrac{30}{11}\\,\\text{A},\\; I_2 = - \\dfrac{6}{11}\\,\\text{A}$.<br>Dòng điện qua nhánh chung: $I_3 = I_1 + I_2 = \\dfrac{24}{11}\\,\\text{A}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-102"
 },
 {
  "q": "Cho mạch điện hai mắt lưới có hai nguồn suất điện động $E_1 = 36\\,\\text{V}$, $E_2 = 18\\,\\text{V}$ và ba điện trở $R_1 = 6\\,\\Omega$, $R_2 = 3\\,\\Omega$, $R_3 = 9\\,\\Omega$. Theo định luật Kirchhoff, cường độ dòng điện $I_3$ chạy qua điện trở chung $R_3$ (biết $I_3 = I_1 + I_2$) bằng",
  "options": [
   "$\\dfrac{24}{11}\\,\\text{A}$.",
   "$\\dfrac{30}{11}\\,\\text{A}$.",
   "$- \\dfrac{6}{11}\\,\\text{A}$.",
   "$\\dfrac{35}{11}\\,\\text{A}$."
  ],
  "answer": 0,
  "explain": "Áp dụng định luật 2 Kirchhoff cho hai vòng mắt lưới: $\\begin{cases} (6 + 9)I_1 + 9I_2 = 36 \\\\ 9I_1 + (3 + 9)I_2 = 18\\end{cases}$<br>Ta được hệ: $\\begin{cases} 15I_1 + 9I_2 = 36 \\\\ 9I_1 + 12I_2 = 18\\end{cases}$<br>Giải hệ Cramer hoặc khử Gauss được: $I_1 = \\dfrac{30}{11}\\,\\text{A},\\; I_2 = - \\dfrac{6}{11}\\,\\text{A}$.<br>Dòng điện qua nhánh chung: $I_3 = I_1 + I_2 = \\dfrac{24}{11}\\,\\text{A}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-103"
 },
 {
  "q": "Cho mạch điện hai mắt lưới có hai nguồn suất điện động $E_1 = 20\\,\\text{V}$, $E_2 = 10\\,\\text{V}$ và ba điện trở $R_1 = 5\\,\\Omega$, $R_2 = 2\\,\\Omega$, $R_3 = 4\\,\\Omega$. Theo định luật Kirchhoff, cường độ dòng điện $I_3$ chạy qua điện trở chung $R_3$ (biết $I_3 = I_1 + I_2$) bằng",
  "options": [
   "$\\dfrac{45}{19}\\,\\text{A}$.",
   "$\\dfrac{40}{19}\\,\\text{A}$.",
   "$\\dfrac{5}{19}\\,\\text{A}$.",
   "$\\dfrac{64}{19}\\,\\text{A}$."
  ],
  "answer": 0,
  "explain": "Áp dụng định luật 2 Kirchhoff cho hai vòng mắt lưới: $\\begin{cases} (5 + 4)I_1 + 4I_2 = 20 \\\\ 4I_1 + (2 + 4)I_2 = 10\\end{cases}$<br>Ta được hệ: $\\begin{cases} 9I_1 + 4I_2 = 20 \\\\ 4I_1 + 6I_2 = 10\\end{cases}$<br>Giải hệ Cramer hoặc khử Gauss được: $I_1 = \\dfrac{40}{19}\\,\\text{A},\\; I_2 = \\dfrac{5}{19}\\,\\text{A}$.<br>Dòng điện qua nhánh chung: $I_3 = I_1 + I_2 = \\dfrac{45}{19}\\,\\text{A}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-104"
 },
 {
  "q": "Cho mạch điện hai mắt lưới có hai nguồn suất điện động $E_1 = 30\\,\\text{V}$, $E_2 = 15\\,\\text{V}$ và ba điện trở $R_1 = 3\\,\\Omega$, $R_2 = 3\\,\\Omega$, $R_3 = 6\\,\\Omega$. Theo định luật Kirchhoff, cường độ dòng điện $I_3$ chạy qua điện trở chung $R_3$ (biết $I_3 = I_1 + I_2$) bằng",
  "options": [
   "$3\\,\\text{A}$.",
   "$4\\,\\text{A}$.",
   "$-1\\,\\text{A}$.",
   "$\\dfrac{3}{2}\\,\\text{A}$."
  ],
  "answer": 0,
  "explain": "Áp dụng định luật 2 Kirchhoff cho hai vòng mắt lưới: $\\begin{cases} (3 + 6)I_1 + 6I_2 = 30 \\\\ 6I_1 + (3 + 6)I_2 = 15\\end{cases}$<br>Ta được hệ: $\\begin{cases} 9I_1 + 6I_2 = 30 \\\\ 6I_1 + 9I_2 = 15\\end{cases}$<br>Giải hệ Cramer hoặc khử Gauss được: $I_1 = 4\\,\\text{A},\\; I_2 = -1\\,\\text{A}$.<br>Dòng điện qua nhánh chung: $I_3 = I_1 + I_2 = 3\\,\\text{A}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-105"
 },
 {
  "q": "Cho mạch điện hai mắt lưới có hai nguồn suất điện động $E_1 = 48\\,\\text{V}$, $E_2 = 24\\,\\text{V}$ và ba điện trở $R_1 = 8\\,\\Omega$, $R_2 = 4\\,\\Omega$, $R_3 = 12\\,\\Omega$. Theo định luật Kirchhoff, cường độ dòng điện $I_3$ chạy qua điện trở chung $R_3$ (biết $I_3 = I_1 + I_2$) bằng",
  "options": [
   "$\\dfrac{24}{11}\\,\\text{A}$.",
   "$\\dfrac{30}{11}\\,\\text{A}$.",
   "$- \\dfrac{6}{11}\\,\\text{A}$.",
   "$\\dfrac{35}{11}\\,\\text{A}$."
  ],
  "answer": 0,
  "explain": "Áp dụng định luật 2 Kirchhoff cho hai vòng mắt lưới: $\\begin{cases} (8 + 12)I_1 + 12I_2 = 48 \\\\ 12I_1 + (4 + 12)I_2 = 24\\end{cases}$<br>Ta được hệ: $\\begin{cases} 20I_1 + 12I_2 = 48 \\\\ 12I_1 + 16I_2 = 24\\end{cases}$<br>Giải hệ Cramer hoặc khử Gauss được: $I_1 = \\dfrac{30}{11}\\,\\text{A},\\; I_2 = - \\dfrac{6}{11}\\,\\text{A}$.<br>Dòng điện qua nhánh chung: $I_3 = I_1 + I_2 = \\dfrac{24}{11}\\,\\text{A}$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-106"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng chính tắc, cho vectơ $v = (1;\\,2;\\,2)$ và không gian con $W = \\operatorname{span}\\{v\\}$. Cho $u = (2;\\,-2;\\,6)$. Khoảng cách từ điểm $u$ đến đường thẳng $W$, kí hiệu $d(u, W) = |u - \\operatorname{pr}_W(u)|$, có bình phương bằng",
  "options": [
   "$\\dfrac{296}{9}$.",
   "$\\dfrac{100}{9}$.",
   "$\\dfrac{386}{9}$.",
   "$\\dfrac{251}{9}$."
  ],
  "answer": 0,
  "explain": "Tích vô hướng $\\langle u, v\\rangle = (2)(1) + (-2)(2) + (6)(2) = 10$.<br>Độ dài $|v|^2 = 9 = 9$.<br>Độ dài hình chiếu: $|\\operatorname{pr}_W(u)|^2 = \\dfrac{\\langle u, v\\rangle^2}{|v|^2} = \\dfrac{100}{9} = \\dfrac{100}{9}$.<br>Theo định lý Pythagore: $d^2(u, W) = |u|^2 - |\\operatorname{pr}_W(u)|^2 = 44 - \\dfrac{100}{9} = \\dfrac{296}{9}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-076"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng chính tắc, cho vectơ $v = (2;\\,3;\\,6)$ và không gian con $W = \\operatorname{span}\\{v\\}$. Cho $u = (4;\\,-3;\\,18)$. Khoảng cách từ điểm $u$ đến đường thẳng $W$, kí hiệu $d(u, W) = |u - \\operatorname{pr}_W(u)|$, có bình phương bằng",
  "options": [
   "$\\dfrac{5652}{49}$.",
   "$\\dfrac{11449}{49}$.",
   "$\\dfrac{6142}{49}$.",
   "$\\dfrac{5407}{49}$."
  ],
  "answer": 0,
  "explain": "Tích vô hướng $\\langle u, v\\rangle = (4)(2) + (-3)(3) + (18)(6) = 107$.<br>Độ dài $|v|^2 = 49 = 49$.<br>Độ dài hình chiếu: $|\\operatorname{pr}_W(u)|^2 = \\dfrac{\\langle u, v\\rangle^2}{|v|^2} = \\dfrac{11449}{49} = \\dfrac{11449}{49}$.<br>Theo định lý Pythagore: $d^2(u, W) = |u|^2 - |\\operatorname{pr}_W(u)|^2 = 349 - \\dfrac{11449}{49} = \\dfrac{5652}{49}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-077"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng chính tắc, cho vectơ $v = (1;\\,4;\\,8)$ và không gian con $W = \\operatorname{span}\\{v\\}$. Cho $u = (2;\\,-4;\\,24)$. Khoảng cách từ điểm $u$ đến đường thẳng $W$, kí hiệu $d(u, W) = |u - \\operatorname{pr}_W(u)|$, có bình phương bằng",
  "options": [
   "$\\dfrac{16592}{81}$.",
   "$\\dfrac{31684}{81}$.",
   "$\\dfrac{17402}{81}$.",
   "$\\dfrac{16187}{81}$."
  ],
  "answer": 0,
  "explain": "Tích vô hướng $\\langle u, v\\rangle = (2)(1) + (-4)(4) + (24)(8) = 178$.<br>Độ dài $|v|^2 = 81 = 81$.<br>Độ dài hình chiếu: $|\\operatorname{pr}_W(u)|^2 = \\dfrac{\\langle u, v\\rangle^2}{|v|^2} = \\dfrac{31684}{81} = \\dfrac{31684}{81}$.<br>Theo định lý Pythagore: $d^2(u, W) = |u|^2 - |\\operatorname{pr}_W(u)|^2 = 596 - \\dfrac{31684}{81} = \\dfrac{16592}{81}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-078"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng chính tắc, cho vectơ $v = (4;\\,4;\\,7)$ và không gian con $W = \\operatorname{span}\\{v\\}$. Cho $u = (8;\\,-4;\\,21)$. Khoảng cách từ điểm $u$ đến đường thẳng $W$, kí hiệu $d(u, W) = |u - \\operatorname{pr}_W(u)|$, có bình phương bằng",
  "options": [
   "$\\dfrac{15632}{81}$.",
   "$\\dfrac{26569}{81}$.",
   "$\\dfrac{16442}{81}$.",
   "$\\dfrac{15227}{81}$."
  ],
  "answer": 0,
  "explain": "Tích vô hướng $\\langle u, v\\rangle = (8)(4) + (-4)(4) + (21)(7) = 163$.<br>Độ dài $|v|^2 = 81 = 81$.<br>Độ dài hình chiếu: $|\\operatorname{pr}_W(u)|^2 = \\dfrac{\\langle u, v\\rangle^2}{|v|^2} = \\dfrac{26569}{81} = \\dfrac{26569}{81}$.<br>Theo định lý Pythagore: $d^2(u, W) = |u|^2 - |\\operatorname{pr}_W(u)|^2 = 521 - \\dfrac{26569}{81} = \\dfrac{15632}{81}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-079"
 },
 {
  "q": "Trong không gian $\\mathbb{R}^3$ với tích vô hướng chính tắc, cho vectơ $v = (2;\\,6;\\,9)$ và không gian con $W = \\operatorname{span}\\{v\\}$. Cho $u = (4;\\,-6;\\,27)$. Khoảng cách từ điểm $u$ đến đường thẳng $W$, kí hiệu $d(u, W) = |u - \\operatorname{pr}_W(u)|$, có bình phương bằng",
  "options": [
   "$\\dfrac{48276}{121}$.",
   "$\\dfrac{46225}{121}$.",
   "$\\dfrac{49486}{121}$.",
   "$\\dfrac{47671}{121}$."
  ],
  "answer": 0,
  "explain": "Tích vô hướng $\\langle u, v\\rangle = (4)(2) + (-6)(6) + (27)(9) = 215$.<br>Độ dài $|v|^2 = 121 = 121$.<br>Độ dài hình chiếu: $|\\operatorname{pr}_W(u)|^2 = \\dfrac{\\langle u, v\\rangle^2}{|v|^2} = \\dfrac{46225}{121} = \\dfrac{46225}{121}$.<br>Theo định lý Pythagore: $d^2(u, W) = |u|^2 - |\\operatorname{pr}_W(u)|^2 = 781 - \\dfrac{46225}{121} = \\dfrac{48276}{121}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-080"
 },
 {
  "q": "Một bể nước hình nón tròn xoay đỉnh ở dưới, có bán kính miệng $R = 3\\,\\text{m}$ và chiều cao $H = 6\\,\\text{m}$. Nước được bơm vào bể với lưu lượng không đổi $c = 2\\,\\text{m}^3/\\text{phút}$. Tại thời điểm mực nước trong bể sâu $h = 4\\,\\text{m}$, tốc độ dâng lên của mực nước có dạng $\\dfrac{k}{\\pi}\\,(\\text{m}/\\text{phút})$. Giá trị của hệ số $k$ bằng",
  "options": [
   "$\\dfrac{1}{2}$.",
   "$1$.",
   "$\\dfrac{1}{4}$.",
   "$\\dfrac{3}{2}$."
  ],
  "answer": 0,
  "explain": "Bán kính mặt nước tại độ sâu $h$: $r = \\dfrac{R}{H}h = \\dfrac{1}{2}h$.<br>Thể tích khối nước: $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi \\left(\\dfrac{1}{2}h\\right)^2 h = \\dfrac{\\pi}{12} h^3$.<br>Đạo hàm theo thời gian: $\\dfrac{dV}{dt} = \\pi \\left(\\dfrac{1}{2}\\right)^2 h^2 \\dfrac{dh}{dt}$.<br>Thay $h = 4$ và $\\dfrac{dV}{dt} = 2$: $2 = \\pi \\cdot 4 \\cdot \\dfrac{dh}{dt} \\Rightarrow \\dfrac{dh}{dt} = \\dfrac{\\dfrac{1}{2}}{\\pi}$.<br>Do đó hệ số $k = \\dfrac{1}{2}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-134"
 },
 {
  "q": "Một bể nước hình nón tròn xoay đỉnh ở dưới, có bán kính miệng $R = 4\\,\\text{m}$ và chiều cao $H = 8\\,\\text{m}$. Nước được bơm vào bể với lưu lượng không đổi $c = 3\\,\\text{m}^3/\\text{phút}$. Tại thời điểm mực nước trong bể sâu $h = 4\\,\\text{m}$, tốc độ dâng lên của mực nước có dạng $\\dfrac{k}{\\pi}\\,(\\text{m}/\\text{phút})$. Giá trị của hệ số $k$ bằng",
  "options": [
   "$\\dfrac{3}{4}$.",
   "$\\dfrac{3}{2}$.",
   "$\\dfrac{3}{8}$.",
   "$\\dfrac{7}{4}$."
  ],
  "answer": 0,
  "explain": "Bán kính mặt nước tại độ sâu $h$: $r = \\dfrac{R}{H}h = \\dfrac{1}{2}h$.<br>Thể tích khối nước: $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi \\left(\\dfrac{1}{2}h\\right)^2 h = \\dfrac{\\pi}{12} h^3$.<br>Đạo hàm theo thời gian: $\\dfrac{dV}{dt} = \\pi \\left(\\dfrac{1}{2}\\right)^2 h^2 \\dfrac{dh}{dt}$.<br>Thay $h = 4$ và $\\dfrac{dV}{dt} = 3$: $3 = \\pi \\cdot 4 \\cdot \\dfrac{dh}{dt} \\Rightarrow \\dfrac{dh}{dt} = \\dfrac{\\dfrac{3}{4}}{\\pi}$.<br>Do đó hệ số $k = \\dfrac{3}{4}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-135"
 },
 {
  "q": "Một bể nước hình nón tròn xoay đỉnh ở dưới, có bán kính miệng $R = 2\\,\\text{m}$ và chiều cao $H = 4\\,\\text{m}$. Nước được bơm vào bể với lưu lượng không đổi $c = 1\\,\\text{m}^3/\\text{phút}$. Tại thời điểm mực nước trong bể sâu $h = 2\\,\\text{m}$, tốc độ dâng lên của mực nước có dạng $\\dfrac{k}{\\pi}\\,(\\text{m}/\\text{phút})$. Giá trị của hệ số $k$ bằng",
  "options": [
   "$1$.",
   "$2$.",
   "$\\dfrac{1}{2}$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Bán kính mặt nước tại độ sâu $h$: $r = \\dfrac{R}{H}h = \\dfrac{1}{2}h$.<br>Thể tích khối nước: $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi \\left(\\dfrac{1}{2}h\\right)^2 h = \\dfrac{\\pi}{12} h^3$.<br>Đạo hàm theo thời gian: $\\dfrac{dV}{dt} = \\pi \\left(\\dfrac{1}{2}\\right)^2 h^2 \\dfrac{dh}{dt}$.<br>Thay $h = 2$ và $\\dfrac{dV}{dt} = 1$: $1 = \\pi \\cdot 1 \\cdot \\dfrac{dh}{dt} \\Rightarrow \\dfrac{dh}{dt} = \\dfrac{1}{\\pi}$.<br>Do đó hệ số $k = 1$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-136"
 },
 {
  "q": "Một bể nước hình nón tròn xoay đỉnh ở dưới, có bán kính miệng $R = 5\\,\\text{m}$ và chiều cao $H = 10\\,\\text{m}$. Nước được bơm vào bể với lưu lượng không đổi $c = 4\\,\\text{m}^3/\\text{phút}$. Tại thời điểm mực nước trong bể sâu $h = 5\\,\\text{m}$, tốc độ dâng lên của mực nước có dạng $\\dfrac{k}{\\pi}\\,(\\text{m}/\\text{phút})$. Giá trị của hệ số $k$ bằng",
  "options": [
   "$\\dfrac{16}{25}$.",
   "$\\dfrac{32}{25}$.",
   "$\\dfrac{8}{25}$.",
   "$\\dfrac{41}{25}$."
  ],
  "answer": 0,
  "explain": "Bán kính mặt nước tại độ sâu $h$: $r = \\dfrac{R}{H}h = \\dfrac{1}{2}h$.<br>Thể tích khối nước: $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi \\left(\\dfrac{1}{2}h\\right)^2 h = \\dfrac{\\pi}{12} h^3$.<br>Đạo hàm theo thời gian: $\\dfrac{dV}{dt} = \\pi \\left(\\dfrac{1}{2}\\right)^2 h^2 \\dfrac{dh}{dt}$.<br>Thay $h = 5$ và $\\dfrac{dV}{dt} = 4$: $4 = \\pi \\cdot \\dfrac{25}{4} \\cdot \\dfrac{dh}{dt} \\Rightarrow \\dfrac{dh}{dt} = \\dfrac{\\dfrac{16}{25}}{\\pi}$.<br>Do đó hệ số $k = \\dfrac{16}{25}$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-137"
 },
 {
  "q": "Một bể nước hình nón tròn xoay đỉnh ở dưới, có bán kính miệng $R = 3\\,\\text{m}$ và chiều cao $H = 9\\,\\text{m}$. Nước được bơm vào bể với lưu lượng không đổi $c = 2\\,\\text{m}^3/\\text{phút}$. Tại thời điểm mực nước trong bể sâu $h = 3\\,\\text{m}$, tốc độ dâng lên của mực nước có dạng $\\dfrac{k}{\\pi}\\,(\\text{m}/\\text{phút})$. Giá trị của hệ số $k$ bằng",
  "options": [
   "$2$.",
   "$4$.",
   "$1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Bán kính mặt nước tại độ sâu $h$: $r = \\dfrac{R}{H}h = \\dfrac{1}{3}h$.<br>Thể tích khối nước: $V = \\dfrac{1}{3}\\pi r^2 h = \\dfrac{1}{3}\\pi \\left(\\dfrac{1}{3}h\\right)^2 h = \\dfrac{\\pi}{27} h^3$.<br>Đạo hàm theo thời gian: $\\dfrac{dV}{dt} = \\pi \\left(\\dfrac{1}{3}\\right)^2 h^2 \\dfrac{dh}{dt}$.<br>Thay $h = 3$ và $\\dfrac{dV}{dt} = 2$: $2 = \\pi \\cdot 1 \\cdot \\dfrac{dh}{dt} \\Rightarrow \\dfrac{dh}{dt} = \\dfrac{2}{\\pi}$.<br>Do đó hệ số $k = 2$.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-138"
 },
 {
  "q": "Một doanh nghiệp sản xuất có hàm sản lượng Cobb-Douglas $Q(K, L) = K^{\\dfrac{1}{3}} L^{\\dfrac{2}{3}}$, trong đó $K$ là vốn, $L$ là lao động. Giá thuê một đơn vị vốn là $p_K = 4$, giá thuê một đơn vị lao động là $p_L = 2$, và ngân sách sản xuất cố định $B = 120$. Để tối đa hóa sản lượng, lượng vốn $K^*$ doanh nghiệp cần đầu tư là",
  "options": [
   "$10$.",
   "$40$.",
   "$15$.",
   "$20$."
  ],
  "answer": 0,
  "explain": "Bài toán cực trị có điều kiện: cực đại $Q = K^{\\dfrac{1}{3}} L^{\\dfrac{2}{3}}$ với ràng buộc $4K + 2L = 120$.<br>Lập hàm Lagrange: $\\mathcal{L}(K, L, \\lambda) = K^{\\dfrac{1}{3}} L^{\\dfrac{2}{3}} - \\lambda(4K + 2L - 120)$.<br>Điều kiện cần: $\\dfrac{Q'_K}{Q'_L} = \\dfrac{p_K}{p_L} \\Leftrightarrow \\dfrac{\\dfrac{1}{3} / K}{\\dfrac{2}{3} / L} = \\dfrac{4}{2} \\Leftrightarrow 4K = \\dfrac{\\dfrac{1}{3}}{\\dfrac{2}{3}}2L$.<br>Thay vào ràng buộc ngân sách ta được: $K^* = \\dfrac{\\alpha}{\\alpha + \\beta}\\cdot\\dfrac{B}{p_K} = 10.0$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-001"
 },
 {
  "q": "Một doanh nghiệp sản xuất có hàm sản lượng Cobb-Douglas $Q(K, L) = K^{\\dfrac{1}{2}} L^{\\dfrac{1}{2}}$, trong đó $K$ là vốn, $L$ là lao động. Giá thuê một đơn vị vốn là $p_K = 5$, giá thuê một đơn vị lao động là $p_L = 10$, và ngân sách sản xuất cố định $B = 300$. Để tối đa hóa sản lượng, lượng vốn $K^*$ doanh nghiệp cần đầu tư là",
  "options": [
   "$30$.",
   "$15$.",
   "$35$.",
   "$60$."
  ],
  "answer": 0,
  "explain": "Bài toán cực trị có điều kiện: cực đại $Q = K^{\\dfrac{1}{2}} L^{\\dfrac{1}{2}}$ với ràng buộc $5K + 10L = 300$.<br>Lập hàm Lagrange: $\\mathcal{L}(K, L, \\lambda) = K^{\\dfrac{1}{2}} L^{\\dfrac{1}{2}} - \\lambda(5K + 10L - 300)$.<br>Điều kiện cần: $\\dfrac{Q'_K}{Q'_L} = \\dfrac{p_K}{p_L} \\Leftrightarrow \\dfrac{\\dfrac{1}{2} / K}{\\dfrac{1}{2} / L} = \\dfrac{5}{10} \\Leftrightarrow 5K = \\dfrac{\\dfrac{1}{2}}{\\dfrac{1}{2}}10L$.<br>Thay vào ràng buộc ngân sách ta được: $K^* = \\dfrac{\\alpha}{\\alpha + \\beta}\\cdot\\dfrac{B}{p_K} = 30.0$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-002"
 },
 {
  "q": "Một doanh nghiệp sản xuất có hàm sản lượng Cobb-Douglas $Q(K, L) = K^{\\dfrac{2}{3}} L^{\\dfrac{1}{3}}$, trong đó $K$ là vốn, $L$ là lao động. Giá thuê một đơn vị vốn là $p_K = 3$, giá thuê một đơn vị lao động là $p_L = 6$, và ngân sách sản xuất cố định $B = 180$. Để tối đa hóa sản lượng, lượng vốn $K^*$ doanh nghiệp cần đầu tư là",
  "options": [
   "$40$.",
   "$10$.",
   "$45$.",
   "$80$."
  ],
  "answer": 0,
  "explain": "Bài toán cực trị có điều kiện: cực đại $Q = K^{\\dfrac{2}{3}} L^{\\dfrac{1}{3}}$ với ràng buộc $3K + 6L = 180$.<br>Lập hàm Lagrange: $\\mathcal{L}(K, L, \\lambda) = K^{\\dfrac{2}{3}} L^{\\dfrac{1}{3}} - \\lambda(3K + 6L - 180)$.<br>Điều kiện cần: $\\dfrac{Q'_K}{Q'_L} = \\dfrac{p_K}{p_L} \\Leftrightarrow \\dfrac{\\dfrac{2}{3} / K}{\\dfrac{1}{3} / L} = \\dfrac{3}{6} \\Leftrightarrow 3K = \\dfrac{\\dfrac{2}{3}}{\\dfrac{1}{3}}6L$.<br>Thay vào ràng buộc ngân sách ta được: $K^* = \\dfrac{\\alpha}{\\alpha + \\beta}\\cdot\\dfrac{B}{p_K} = 40.0$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-003"
 },
 {
  "q": "Một doanh nghiệp sản xuất có hàm sản lượng Cobb-Douglas $Q(K, L) = K^{\\dfrac{1}{4}} L^{\\dfrac{3}{4}}$, trong đó $K$ là vốn, $L$ là lao động. Giá thuê một đơn vị vốn là $p_K = 2$, giá thuê một đơn vị lao động là $p_L = 4$, và ngân sách sản xuất cố định $B = 160$. Để tối đa hóa sản lượng, lượng vốn $K^*$ doanh nghiệp cần đầu tư là",
  "options": [
   "$20$.",
   "$30$.",
   "$25$.",
   "$40$."
  ],
  "answer": 0,
  "explain": "Bài toán cực trị có điều kiện: cực đại $Q = K^{\\dfrac{1}{4}} L^{\\dfrac{3}{4}}$ với ràng buộc $2K + 4L = 160$.<br>Lập hàm Lagrange: $\\mathcal{L}(K, L, \\lambda) = K^{\\dfrac{1}{4}} L^{\\dfrac{3}{4}} - \\lambda(2K + 4L - 160)$.<br>Điều kiện cần: $\\dfrac{Q'_K}{Q'_L} = \\dfrac{p_K}{p_L} \\Leftrightarrow \\dfrac{\\dfrac{1}{4} / K}{\\dfrac{3}{4} / L} = \\dfrac{2}{4} \\Leftrightarrow 2K = \\dfrac{\\dfrac{1}{4}}{\\dfrac{3}{4}}4L$.<br>Thay vào ràng buộc ngân sách ta được: $K^* = \\dfrac{\\alpha}{\\alpha + \\beta}\\cdot\\dfrac{B}{p_K} = 20.0$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-004"
 },
 {
  "q": "Theo định luật làm nguội của Newton, tốc độ giảm nhiệt độ của một vật tỷ lệ với hiệu số giữa nhiệt độ của vật và môi trường xung quanh: $\\dfrac{dT}{dt} = -k(T - T_m)$. Một chiếc bánh mì lấy từ lò nướng ra ở $T_0 = 100^\\circ\\text{C}$ đặt trong phòng có nhiệt độ không đổi $T_m = 20^\\circ\\text{C}$. Sau $10$ phút, nhiệt độ của bánh giảm còn $60^\\circ\\text{C}$. Nhiệt độ của bánh sau $20$ phút kể từ khi lấy ra khỏi lò bằng",
  "options": [
   "$40^\\circ\\text{C}$.",
   "$35^\\circ\\text{C}$.",
   "$50^\\circ\\text{C}$.",
   "$20^\\circ\\text{C}$."
  ],
  "answer": 0,
  "explain": "Nghiệm của phương trình vi phân: $T(t) = T_m + (T_0 - T_m)e^{-kt} = 20 + 80e^{-kt}$.<br>Tại $t = 10$: $60 = 20 + 80e^{-10k} \\Rightarrow e^{-10k} = \\dfrac{40}{80} = \\dfrac{1}{2}$.<br>Tại $t = 20 = 2\\cdot 10$: $e^{-20k} = \\left(e^{-10k}\\right)^2 = \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$.<br>Nhiệt độ sau $20$ phút: $T(20) = 20 + 80\\cdot \\dfrac{1}{4} = 40^\\circ\\text{C}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-010"
 },
 {
  "q": "Theo định luật làm nguội của Newton, tốc độ giảm nhiệt độ của một vật tỷ lệ với hiệu số giữa nhiệt độ của vật và môi trường xung quanh: $\\dfrac{dT}{dt} = -k(T - T_m)$. Một chiếc bánh mì lấy từ lò nướng ra ở $T_0 = 90^\\circ\\text{C}$ đặt trong phòng có nhiệt độ không đổi $T_m = 30^\\circ\\text{C}$. Sau $15$ phút, nhiệt độ của bánh giảm còn $60^\\circ\\text{C}$. Nhiệt độ của bánh sau $30$ phút kể từ khi lấy ra khỏi lò bằng",
  "options": [
   "$45^\\circ\\text{C}$.",
   "$40^\\circ\\text{C}$.",
   "$55^\\circ\\text{C}$.",
   "$30^\\circ\\text{C}$."
  ],
  "answer": 0,
  "explain": "Nghiệm của phương trình vi phân: $T(t) = T_m + (T_0 - T_m)e^{-kt} = 30 + 60e^{-kt}$.<br>Tại $t = 15$: $60 = 30 + 60e^{-15k} \\Rightarrow e^{-15k} = \\dfrac{30}{60} = \\dfrac{1}{2}$.<br>Tại $t = 30 = 2\\cdot 15$: $e^{-30k} = \\left(e^{-15k}\\right)^2 = \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$.<br>Nhiệt độ sau $30$ phút: $T(30) = 30 + 60\\cdot \\dfrac{1}{4} = 45^\\circ\\text{C}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-011"
 },
 {
  "q": "Theo định luật làm nguội của Newton, tốc độ giảm nhiệt độ của một vật tỷ lệ với hiệu số giữa nhiệt độ của vật và môi trường xung quanh: $\\dfrac{dT}{dt} = -k(T - T_m)$. Một chiếc bánh mì lấy từ lò nướng ra ở $T_0 = 80^\\circ\\text{C}$ đặt trong phòng có nhiệt độ không đổi $T_m = 20^\\circ\\text{C}$. Sau $12$ phút, nhiệt độ của bánh giảm còn $50^\\circ\\text{C}$. Nhiệt độ của bánh sau $24$ phút kể từ khi lấy ra khỏi lò bằng",
  "options": [
   "$35^\\circ\\text{C}$.",
   "$30^\\circ\\text{C}$.",
   "$45^\\circ\\text{C}$.",
   "$20^\\circ\\text{C}$."
  ],
  "answer": 0,
  "explain": "Nghiệm của phương trình vi phân: $T(t) = T_m + (T_0 - T_m)e^{-kt} = 20 + 60e^{-kt}$.<br>Tại $t = 12$: $50 = 20 + 60e^{-12k} \\Rightarrow e^{-12k} = \\dfrac{30}{60} = \\dfrac{1}{2}$.<br>Tại $t = 24 = 2\\cdot 12$: $e^{-24k} = \\left(e^{-12k}\\right)^2 = \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$.<br>Nhiệt độ sau $24$ phút: $T(24) = 20 + 60\\cdot \\dfrac{1}{4} = 35^\\circ\\text{C}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-012"
 },
 {
  "q": "Theo định luật làm nguội của Newton, tốc độ giảm nhiệt độ của một vật tỷ lệ với hiệu số giữa nhiệt độ của vật và môi trường xung quanh: $\\dfrac{dT}{dt} = -k(T - T_m)$. Một chiếc bánh mì lấy từ lò nướng ra ở $T_0 = 100^\\circ\\text{C}$ đặt trong phòng có nhiệt độ không đổi $T_m = 25^\\circ\\text{C}$. Sau $8$ phút, nhiệt độ của bánh giảm còn $55^\\circ\\text{C}$. Nhiệt độ của bánh sau $16$ phút kể từ khi lấy ra khỏi lò bằng",
  "options": [
   "$37^\\circ\\text{C}$.",
   "$32^\\circ\\text{C}$.",
   "$47^\\circ\\text{C}$.",
   "$10^\\circ\\text{C}$."
  ],
  "answer": 0,
  "explain": "Nghiệm của phương trình vi phân: $T(t) = T_m + (T_0 - T_m)e^{-kt} = 25 + 75e^{-kt}$.<br>Tại $t = 8$: $55 = 25 + 75e^{-8k} \\Rightarrow e^{-8k} = \\dfrac{30}{75} = \\dfrac{2}{5}$.<br>Tại $t = 16 = 2\\cdot 8$: $e^{-16k} = \\left(e^{-8k}\\right)^2 = \\left(\\dfrac{2}{5}\\right)^2 = \\dfrac{4}{25}$.<br>Nhiệt độ sau $16$ phút: $T(16) = 25 + 75\\cdot \\dfrac{4}{25} = 37^\\circ\\text{C}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-013"
 },
 {
  "q": "Một bản kim loại phẳng mỏng chiếm miền hình vuông $D = [0;\\, 2] \\times [0;\\, 2]$ có mật độ khối lượng diện tích biến thiên $\\rho(x, y) = x$. Hoành độ trọng tâm $\\bar{x} = \\dfrac{1}{M}\\displaystyle\\iint_D x\\rho(x,y)\\,dxdy$ của bản kim loại này bằng",
  "options": [
   "$\\dfrac{4}{3}$.",
   "$1$.",
   "$\\dfrac{2}{3}$.",
   "$\\dfrac{3}{2}$."
  ],
  "answer": 0,
  "explain": "Khối lượng tổng cộng của bản mỏng: $M = \\displaystyle\\int_0^{2} dy \\int_0^{2} x\\,dx = 2\\left[\\dfrac{x^2}{2}\\right]_0^{2} = 4$.<br>Mômen tĩnh đối với trục $Oy$: $M_y = \\displaystyle\\iint_D x^2\\,dxdy = \\int_0^{2} dy \\int_0^{2} x^2\\,dx = 2\\cdot\\dfrac{2^3}{3} = \\dfrac{16}{3}$.<br>Hoành độ trọng tâm: $\\bar{x} = \\dfrac{M_y}{M} = \\dfrac{\\dfrac{16}{3}}{4} = \\dfrac{2\\cdot 2}{3} = \\dfrac{4}{3}$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-038"
 },
 {
  "q": "Một bản kim loại phẳng mỏng chiếm miền hình vuông $D = [0;\\, 3] \\times [0;\\, 3]$ có mật độ khối lượng diện tích biến thiên $\\rho(x, y) = x$. Hoành độ trọng tâm $\\bar{x} = \\dfrac{1}{M}\\displaystyle\\iint_D x\\rho(x,y)\\,dxdy$ của bản kim loại này bằng",
  "options": [
   "$2$.",
   "$\\dfrac{3}{2}$.",
   "$1$.",
   "$\\dfrac{9}{4}$."
  ],
  "answer": 0,
  "explain": "Khối lượng tổng cộng của bản mỏng: $M = \\displaystyle\\int_0^{3} dy \\int_0^{3} x\\,dx = 3\\left[\\dfrac{x^2}{2}\\right]_0^{3} = \\dfrac{27}{2}$.<br>Mômen tĩnh đối với trục $Oy$: $M_y = \\displaystyle\\iint_D x^2\\,dxdy = \\int_0^{3} dy \\int_0^{3} x^2\\,dx = 3\\cdot\\dfrac{3^3}{3} = 27$.<br>Hoành độ trọng tâm: $\\bar{x} = \\dfrac{M_y}{M} = \\dfrac{27}{\\dfrac{27}{2}} = \\dfrac{2\\cdot 3}{3} = 2$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-039"
 },
 {
  "q": "Một bản kim loại phẳng mỏng chiếm miền hình vuông $D = [0;\\, 4] \\times [0;\\, 4]$ có mật độ khối lượng diện tích biến thiên $\\rho(x, y) = x$. Hoành độ trọng tâm $\\bar{x} = \\dfrac{1}{M}\\displaystyle\\iint_D x\\rho(x,y)\\,dxdy$ của bản kim loại này bằng",
  "options": [
   "$\\dfrac{8}{3}$.",
   "$2$.",
   "$\\dfrac{4}{3}$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Khối lượng tổng cộng của bản mỏng: $M = \\displaystyle\\int_0^{4} dy \\int_0^{4} x\\,dx = 4\\left[\\dfrac{x^2}{2}\\right]_0^{4} = 32$.<br>Mômen tĩnh đối với trục $Oy$: $M_y = \\displaystyle\\iint_D x^2\\,dxdy = \\int_0^{4} dy \\int_0^{4} x^2\\,dx = 4\\cdot\\dfrac{4^3}{3} = \\dfrac{256}{3}$.<br>Hoành độ trọng tâm: $\\bar{x} = \\dfrac{M_y}{M} = \\dfrac{\\dfrac{256}{3}}{32} = \\dfrac{2\\cdot 4}{3} = \\dfrac{8}{3}$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-040"
 },
 {
  "q": "Một bản kim loại phẳng mỏng chiếm miền hình vuông $D = [0;\\, 6] \\times [0;\\, 6]$ có mật độ khối lượng diện tích biến thiên $\\rho(x, y) = x$. Hoành độ trọng tâm $\\bar{x} = \\dfrac{1}{M}\\displaystyle\\iint_D x\\rho(x,y)\\,dxdy$ của bản kim loại này bằng",
  "options": [
   "$4$.",
   "$3$.",
   "$2$.",
   "$\\dfrac{9}{2}$."
  ],
  "answer": 0,
  "explain": "Khối lượng tổng cộng của bản mỏng: $M = \\displaystyle\\int_0^{6} dy \\int_0^{6} x\\,dx = 6\\left[\\dfrac{x^2}{2}\\right]_0^{6} = 108$.<br>Mômen tĩnh đối với trục $Oy$: $M_y = \\displaystyle\\iint_D x^2\\,dxdy = \\int_0^{6} dy \\int_0^{6} x^2\\,dx = 6\\cdot\\dfrac{6^3}{3} = 432$.<br>Hoành độ trọng tâm: $\\bar{x} = \\dfrac{M_y}{M} = \\dfrac{432}{108} = \\dfrac{2\\cdot 6}{3} = 4$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-041"
 },
 {
  "q": "Một bản kim loại phẳng mỏng chiếm miền hình vuông $D = [0;\\, 8] \\times [0;\\, 8]$ có mật độ khối lượng diện tích biến thiên $\\rho(x, y) = x$. Hoành độ trọng tâm $\\bar{x} = \\dfrac{1}{M}\\displaystyle\\iint_D x\\rho(x,y)\\,dxdy$ của bản kim loại này bằng",
  "options": [
   "$\\dfrac{16}{3}$.",
   "$4$.",
   "$\\dfrac{8}{3}$.",
   "$6$."
  ],
  "answer": 0,
  "explain": "Khối lượng tổng cộng của bản mỏng: $M = \\displaystyle\\int_0^{8} dy \\int_0^{8} x\\,dx = 8\\left[\\dfrac{x^2}{2}\\right]_0^{8} = 256$.<br>Mômen tĩnh đối với trục $Oy$: $M_y = \\displaystyle\\iint_D x^2\\,dxdy = \\int_0^{8} dy \\int_0^{8} x^2\\,dx = 8\\cdot\\dfrac{8^3}{3} = \\dfrac{4096}{3}$.<br>Hoành độ trọng tâm: $\\bar{x} = \\dfrac{M_y}{M} = \\dfrac{\\dfrac{4096}{3}}{256} = \\dfrac{2\\cdot 8}{3} = \\dfrac{16}{3}$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-042"
 },
 {
  "q": "Cho $C$ là đường elip $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$ được định hướng ngược chiều kim đồng hồ. Dùng định lý Green, tính tích phân đường $I = \\displaystyle\\oint_C (-y)\\,dx + x\\,dy$.",
  "options": [
   "$12 \\pi$.",
   "$6 \\pi$.",
   "$24 \\pi$.",
   "$- 12 \\pi$."
  ],
  "answer": 0,
  "explain": "Đặt $P(x,y) = -y,\\; Q(x,y) = x$. Ta có $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 1 - (-1) = 2$.<br>Theo định lý Green: $I = \\displaystyle\\iint_D \\left(\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}\\right)dxdy = 2\\iint_D dxdy = 2\\cdot S_{\\text{elip}}$.<br>Diện tích hình elip là $S_{\\text{elip}} = \\pi \\cdot 3 \\cdot 2 = 6\\pi$.<br>Vậy tích phân bằng $I = 2 \\cdot (6\\pi) = 12 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-134"
 },
 {
  "q": "Cho $C$ là đường elip $\\dfrac{x^2}{16} + \\dfrac{y^2}{9} = 1$ được định hướng ngược chiều kim đồng hồ. Dùng định lý Green, tính tích phân đường $I = \\displaystyle\\oint_C (-y)\\,dx + x\\,dy$.",
  "options": [
   "$24 \\pi$.",
   "$12 \\pi$.",
   "$48 \\pi$.",
   "$- 24 \\pi$."
  ],
  "answer": 0,
  "explain": "Đặt $P(x,y) = -y,\\; Q(x,y) = x$. Ta có $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 1 - (-1) = 2$.<br>Theo định lý Green: $I = \\displaystyle\\iint_D \\left(\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}\\right)dxdy = 2\\iint_D dxdy = 2\\cdot S_{\\text{elip}}$.<br>Diện tích hình elip là $S_{\\text{elip}} = \\pi \\cdot 4 \\cdot 3 = 12\\pi$.<br>Vậy tích phân bằng $I = 2 \\cdot (12\\pi) = 24 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-135"
 },
 {
  "q": "Cho $C$ là đường elip $\\dfrac{x^2}{25} + \\dfrac{y^2}{4} = 1$ được định hướng ngược chiều kim đồng hồ. Dùng định lý Green, tính tích phân đường $I = \\displaystyle\\oint_C (-y)\\,dx + x\\,dy$.",
  "options": [
   "$20 \\pi$.",
   "$10 \\pi$.",
   "$40 \\pi$.",
   "$- 20 \\pi$."
  ],
  "answer": 0,
  "explain": "Đặt $P(x,y) = -y,\\; Q(x,y) = x$. Ta có $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 1 - (-1) = 2$.<br>Theo định lý Green: $I = \\displaystyle\\iint_D \\left(\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}\\right)dxdy = 2\\iint_D dxdy = 2\\cdot S_{\\text{elip}}$.<br>Diện tích hình elip là $S_{\\text{elip}} = \\pi \\cdot 5 \\cdot 2 = 10\\pi$.<br>Vậy tích phân bằng $I = 2 \\cdot (10\\pi) = 20 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-136"
 },
 {
  "q": "Cho $C$ là đường elip $\\dfrac{x^2}{4} + \\dfrac{y^2}{1} = 1$ được định hướng ngược chiều kim đồng hồ. Dùng định lý Green, tính tích phân đường $I = \\displaystyle\\oint_C (-y)\\,dx + x\\,dy$.",
  "options": [
   "$4 \\pi$.",
   "$2 \\pi$.",
   "$8 \\pi$.",
   "$- 4 \\pi$."
  ],
  "answer": 0,
  "explain": "Đặt $P(x,y) = -y,\\; Q(x,y) = x$. Ta có $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 1 - (-1) = 2$.<br>Theo định lý Green: $I = \\displaystyle\\iint_D \\left(\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}\\right)dxdy = 2\\iint_D dxdy = 2\\cdot S_{\\text{elip}}$.<br>Diện tích hình elip là $S_{\\text{elip}} = \\pi \\cdot 2 \\cdot 1 = 2\\pi$.<br>Vậy tích phân bằng $I = 2 \\cdot (2\\pi) = 4 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-137"
 },
 {
  "q": "Cho $C$ là đường elip $\\dfrac{x^2}{36} + \\dfrac{y^2}{16} = 1$ được định hướng ngược chiều kim đồng hồ. Dùng định lý Green, tính tích phân đường $I = \\displaystyle\\oint_C (-y)\\,dx + x\\,dy$.",
  "options": [
   "$48 \\pi$.",
   "$24 \\pi$.",
   "$96 \\pi$.",
   "$- 48 \\pi$."
  ],
  "answer": 0,
  "explain": "Đặt $P(x,y) = -y,\\; Q(x,y) = x$. Ta có $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 1 - (-1) = 2$.<br>Theo định lý Green: $I = \\displaystyle\\iint_D \\left(\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}\\right)dxdy = 2\\iint_D dxdy = 2\\cdot S_{\\text{elip}}$.<br>Diện tích hình elip là $S_{\\text{elip}} = \\pi \\cdot 6 \\cdot 4 = 24\\pi$.<br>Vậy tích phân bằng $I = 2 \\cdot (24\\pi) = 48 \\pi$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-138"
 },
 {
  "q": "Xét chuỗi đan dấu Leibniz $S = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{(-1)^{n-1}}{n^{2}}$. Theo định lý ước lượng phần dư chuỗi đan dấu $|R_N| \\le a_{N+1}$, để tổng riêng thứ $N$ xấp xỉ tổng chuỗi với sai số $|S - S_N| \\le \\dfrac{1}{121}$, số số hạng $N$ tối thiểu cần lấy bằng",
  "options": [
   "$10$.",
   "$11$.",
   "$9$.",
   "$20$."
  ],
  "answer": 0,
  "explain": "Chuỗi đan dấu thỏa mãn điều kiện Leibniz với $a_n = \\dfrac{1}{n^{2}}$ giảm dần về $0$.<br>Phần dư thỏa mãn bất đẳng thức: $|R_N| = |S - S_N| \\le a_{N+1} = \\dfrac{1}{(N + 1)^{2}}$.<br>Yêu cầu $\\dfrac{1}{(N + 1)^{2}} \\le \\dfrac{1}{121} \\Leftrightarrow (N + 1)^{2} \\ge 121 \\Leftrightarrow N + 1 \\ge 11 \\Rightarrow N \\ge 10$.<br>Vậy số số hạng tối thiểu cần lấy là $N = 10$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-009"
 },
 {
  "q": "Xét chuỗi đan dấu Leibniz $S = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{(-1)^{n-1}}{n^{3}}$. Theo định lý ước lượng phần dư chuỗi đan dấu $|R_N| \\le a_{N+1}$, để tổng riêng thứ $N$ xấp xỉ tổng chuỗi với sai số $|S - S_N| \\le \\dfrac{1}{216}$, số số hạng $N$ tối thiểu cần lấy bằng",
  "options": [
   "$5$.",
   "$6$.",
   "$4$.",
   "$10$."
  ],
  "answer": 0,
  "explain": "Chuỗi đan dấu thỏa mãn điều kiện Leibniz với $a_n = \\dfrac{1}{n^{3}}$ giảm dần về $0$.<br>Phần dư thỏa mãn bất đẳng thức: $|R_N| = |S - S_N| \\le a_{N+1} = \\dfrac{1}{(N + 1)^{3}}$.<br>Yêu cầu $\\dfrac{1}{(N + 1)^{3}} \\le \\dfrac{1}{216} \\Leftrightarrow (N + 1)^{3} \\ge 216 \\Leftrightarrow N + 1 \\ge 6 \\Rightarrow N \\ge 5$.<br>Vậy số số hạng tối thiểu cần lấy là $N = 5$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-010"
 },
 {
  "q": "Xét chuỗi đan dấu Leibniz $S = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{(-1)^{n-1}}{n^{4}}$. Theo định lý ước lượng phần dư chuỗi đan dấu $|R_N| \\le a_{N+1}$, để tổng riêng thứ $N$ xấp xỉ tổng chuỗi với sai số $|S - S_N| \\le \\dfrac{1}{625}$, số số hạng $N$ tối thiểu cần lấy bằng",
  "options": [
   "$4$.",
   "$5$.",
   "$3$.",
   "$8$."
  ],
  "answer": 0,
  "explain": "Chuỗi đan dấu thỏa mãn điều kiện Leibniz với $a_n = \\dfrac{1}{n^{4}}$ giảm dần về $0$.<br>Phần dư thỏa mãn bất đẳng thức: $|R_N| = |S - S_N| \\le a_{N+1} = \\dfrac{1}{(N + 1)^{4}}$.<br>Yêu cầu $\\dfrac{1}{(N + 1)^{4}} \\le \\dfrac{1}{625} \\Leftrightarrow (N + 1)^{4} \\ge 625 \\Leftrightarrow N + 1 \\ge 5 \\Rightarrow N \\ge 4$.<br>Vậy số số hạng tối thiểu cần lấy là $N = 4$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-011"
 },
 {
  "q": "Xét chuỗi đan dấu Leibniz $S = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{(-1)^{n-1}}{n^{1}}$. Theo định lý ước lượng phần dư chuỗi đan dấu $|R_N| \\le a_{N+1}$, để tổng riêng thứ $N$ xấp xỉ tổng chuỗi với sai số $|S - S_N| \\le \\dfrac{1}{21}$, số số hạng $N$ tối thiểu cần lấy bằng",
  "options": [
   "$20$.",
   "$21$.",
   "$19$.",
   "$40$."
  ],
  "answer": 0,
  "explain": "Chuỗi đan dấu thỏa mãn điều kiện Leibniz với $a_n = \\dfrac{1}{n^{1}}$ giảm dần về $0$.<br>Phần dư thỏa mãn bất đẳng thức: $|R_N| = |S - S_N| \\le a_{N+1} = \\dfrac{1}{(N + 1)^{1}}$.<br>Yêu cầu $\\dfrac{1}{(N + 1)^{1}} \\le \\dfrac{1}{21} \\Leftrightarrow (N + 1)^{1} \\ge 21 \\Leftrightarrow N + 1 \\ge 21 \\Rightarrow N \\ge 20$.<br>Vậy số số hạng tối thiểu cần lấy là $N = 20$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-012"
 },
 {
  "q": "Một khoản tiền gửi tiết kiệm $P_0 = 100\\,\\text{triệu đồng}$ được tính lãi kép liên tục với lãi suất danh nghĩa $r = 6\\,\\%/\\text{năm}$. Công thức số tiền nhận được sau $t$ năm là $P(t) = \\lim\\limits_{n\\to\\infty} P_0\\left(1 + \\dfrac{r}{n}\\right)^{nt} = P_0 e^{rt}$. Thời gian cần thiết để số tiền ban đầu tăng gấp đôi (làm tròn đến hàng phần mười) bằng",
  "options": [
   "11,6 năm.",
   "12,8 năm.",
   "10,1 năm.",
   "23,2 năm."
  ],
  "answer": 0,
  "explain": "Phương trình tăng gấp đôi: $P(t) = 2P_0 \\Leftrightarrow P_0 e^{\\dfrac{3}{50}t} = 2P_0 \\Leftrightarrow e^{\\dfrac{3}{50}t} = 2$.<br>Lấy lôgarit tự nhiên hai vế: $\\dfrac{3}{50}t = \\ln 2 \\Rightarrow t = \\dfrac{\\ln 2}{\\dfrac{3}{50}} = \\dfrac{100\\ln 2}{6}$.<br>Với $\\ln 2 \\approx 0{,}69315$, ta tính được: $t \\approx \\dfrac{69.315}{6} \\approx 11,6\\,\\text{năm}$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-072"
 },
 {
  "q": "Một khoản tiền gửi tiết kiệm $P_0 = 200\\,\\text{triệu đồng}$ được tính lãi kép liên tục với lãi suất danh nghĩa $r = 8\\,\\%/\\text{năm}$. Công thức số tiền nhận được sau $t$ năm là $P(t) = \\lim\\limits_{n\\to\\infty} P_0\\left(1 + \\dfrac{r}{n}\\right)^{nt} = P_0 e^{rt}$. Thời gian cần thiết để số tiền ban đầu tăng gấp đôi (làm tròn đến hàng phần mười) bằng",
  "options": [
   "8,7 năm.",
   "9,9 năm.",
   "7,2 năm.",
   "17,4 năm."
  ],
  "answer": 0,
  "explain": "Phương trình tăng gấp đôi: $P(t) = 2P_0 \\Leftrightarrow P_0 e^{\\dfrac{2}{25}t} = 2P_0 \\Leftrightarrow e^{\\dfrac{2}{25}t} = 2$.<br>Lấy lôgarit tự nhiên hai vế: $\\dfrac{2}{25}t = \\ln 2 \\Rightarrow t = \\dfrac{\\ln 2}{\\dfrac{2}{25}} = \\dfrac{100\\ln 2}{8}$.<br>Với $\\ln 2 \\approx 0{,}69315$, ta tính được: $t \\approx \\dfrac{69.315}{8} \\approx 8,7\\,\\text{năm}$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-073"
 },
 {
  "q": "Một khoản tiền gửi tiết kiệm $P_0 = 50\\,\\text{triệu đồng}$ được tính lãi kép liên tục với lãi suất danh nghĩa $r = 5\\,\\%/\\text{năm}$. Công thức số tiền nhận được sau $t$ năm là $P(t) = \\lim\\limits_{n\\to\\infty} P_0\\left(1 + \\dfrac{r}{n}\\right)^{nt} = P_0 e^{rt}$. Thời gian cần thiết để số tiền ban đầu tăng gấp đôi (làm tròn đến hàng phần mười) bằng",
  "options": [
   "13,9 năm.",
   "15,1 năm.",
   "12,4 năm.",
   "27,8 năm."
  ],
  "answer": 0,
  "explain": "Phương trình tăng gấp đôi: $P(t) = 2P_0 \\Leftrightarrow P_0 e^{\\dfrac{1}{20}t} = 2P_0 \\Leftrightarrow e^{\\dfrac{1}{20}t} = 2$.<br>Lấy lôgarit tự nhiên hai vế: $\\dfrac{1}{20}t = \\ln 2 \\Rightarrow t = \\dfrac{\\ln 2}{\\dfrac{1}{20}} = \\dfrac{100\\ln 2}{5}$.<br>Với $\\ln 2 \\approx 0{,}69315$, ta tính được: $t \\approx \\dfrac{69.315}{5} \\approx 13,9\\,\\text{năm}$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-074"
 },
 {
  "q": "Một khoản tiền gửi tiết kiệm $P_0 = 1000\\,\\text{triệu đồng}$ được tính lãi kép liên tục với lãi suất danh nghĩa $r = 10\\,\\%/\\text{năm}$. Công thức số tiền nhận được sau $t$ năm là $P(t) = \\lim\\limits_{n\\to\\infty} P_0\\left(1 + \\dfrac{r}{n}\\right)^{nt} = P_0 e^{rt}$. Thời gian cần thiết để số tiền ban đầu tăng gấp đôi (làm tròn đến hàng phần mười) bằng",
  "options": [
   "6,9 năm.",
   "8,1 năm.",
   "5,4 năm.",
   "13,8 năm."
  ],
  "answer": 0,
  "explain": "Phương trình tăng gấp đôi: $P(t) = 2P_0 \\Leftrightarrow P_0 e^{\\dfrac{1}{10}t} = 2P_0 \\Leftrightarrow e^{\\dfrac{1}{10}t} = 2$.<br>Lấy lôgarit tự nhiên hai vế: $\\dfrac{1}{10}t = \\ln 2 \\Rightarrow t = \\dfrac{\\ln 2}{\\dfrac{1}{10}} = \\dfrac{100\\ln 2}{10}$.<br>Với $\\ln 2 \\approx 0{,}69315$, ta tính được: $t \\approx \\dfrac{69.315}{10} \\approx 6,9\\,\\text{năm}$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-075"
 },
 {
  "q": "Quá trình sinh sản của một quần thể sinh vật được mô tả bởi hệ phương trình sai phân $\\begin{pmatrix} x_{n+1} \\\\ y_{n+1} \\end{pmatrix} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x_n \\\\ y_n \\end{pmatrix}$. Tốc độ tăng trưởng dài hạn của quần thể được xác định bởi trị riêng lớn nhất (trị riêng trội) của ma trận chuyển dịch. Trị riêng đó có giá trị bằng",
  "options": [
   "$\\dfrac{1 + \\sqrt{5}}{2}$.",
   "$\\dfrac{1 - \\sqrt{5}}{2}$.",
   "$\\dfrac{1 + \\sqrt{3}}{2}$.",
   "$\\sqrt{5}$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng của ma trận $A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}$: $\\det(A - \\lambda I) = \\begin{vmatrix} 1 - \\lambda & 1 \\\\ 1 & -\\lambda \\end{vmatrix} = \\lambda^2 - \\lambda - 1 = 0$.<br>Giải phương trình bậc hai: $\\Delta = (-1)^2 - 4(1)(-1) = 5 > 0$.<br>Hai trị riêng là $\\lambda_1 = \\dfrac{1 + \\sqrt{5}}{2}$ và $\\lambda_2 = \\dfrac{1 - \\sqrt{5}}{2}$.<br>Trị riêng trội quyết định tốc độ tăng trưởng dài hạn (tỉ lệ vàng $\\varphi$) là $\\lambda_1 = \\dfrac{1 + \\sqrt{5}}{2}$.",
  "topic": "tr",
  "type": "mcq",
  "id": "tr-104"
 },
 {
  "q": "Một bể chứa ban đầu có $100\\,\\text{lít}$ nước tinh khiết. Người ta bơm vào bể dung dịch nước muối có nồng độ $c_{\\text{vào}} = 2\\,\\text{g/L}$ với lưu lượng $r = 5\\,\\text{lít/phút}$. Dung dịch trong bể được khuấy đều liên tục và chảy ra ngoài với cùng lưu lượng $r = 5\\,\\text{lít/phút}$. Lập phương trình vi phân $\\dfrac{dy}{dt} = c_{\\text{vào}}r - \\dfrac{r}{V_0}y$, lượng muối tối đa trong bể khi thời gian $t \\to +\\infty$ đạt giá trị bằng",
  "options": [
   "$200\\,\\text{g}$.",
   "$100.0\\,\\text{g}$.",
   "$400\\,\\text{g}$.",
   "$150\\,\\text{g}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân mô tả lượng muối $y(t)$: $\\dfrac{dy}{dt} + \\dfrac{5}{100}y = 10$.<br>Nghiệm tổng quát: $y(t) = 200\\left(1 - e^{-\\frac{5}{100}t}\\right)\\,\\text{g}$.<br>Khi $t \\to +\\infty$, số hạng $e^{-\\frac{5}{100}t} \\to 0$, lượng muối tiến tới trạng thái bão hòa: $\\lim\\limits_{t\\to+\\infty} y(t) = 200\\,\\text{g}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-014"
 },
 {
  "q": "Một bể chứa ban đầu có $200\\,\\text{lít}$ nước tinh khiết. Người ta bơm vào bể dung dịch nước muối có nồng độ $c_{\\text{vào}} = 3\\,\\text{g/L}$ với lưu lượng $r = 10\\,\\text{lít/phút}$. Dung dịch trong bể được khuấy đều liên tục và chảy ra ngoài với cùng lưu lượng $r = 10\\,\\text{lít/phút}$. Lập phương trình vi phân $\\dfrac{dy}{dt} = c_{\\text{vào}}r - \\dfrac{r}{V_0}y$, lượng muối tối đa trong bể khi thời gian $t \\to +\\infty$ đạt giá trị bằng",
  "options": [
   "$600\\,\\text{g}$.",
   "$300.0\\,\\text{g}$.",
   "$1200\\,\\text{g}$.",
   "$550\\,\\text{g}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân mô tả lượng muối $y(t)$: $\\dfrac{dy}{dt} + \\dfrac{10}{200}y = 30$.<br>Nghiệm tổng quát: $y(t) = 600\\left(1 - e^{-\\frac{10}{200}t}\\right)\\,\\text{g}$.<br>Khi $t \\to +\\infty$, số hạng $e^{-\\frac{10}{200}t} \\to 0$, lượng muối tiến tới trạng thái bão hòa: $\\lim\\limits_{t\\to+\\infty} y(t) = 600\\,\\text{g}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-015"
 },
 {
  "q": "Một bể chứa ban đầu có $50\\,\\text{lít}$ nước tinh khiết. Người ta bơm vào bể dung dịch nước muối có nồng độ $c_{\\text{vào}} = 4\\,\\text{g/L}$ với lưu lượng $r = 2\\,\\text{lít/phút}$. Dung dịch trong bể được khuấy đều liên tục và chảy ra ngoài với cùng lưu lượng $r = 2\\,\\text{lít/phút}$. Lập phương trình vi phân $\\dfrac{dy}{dt} = c_{\\text{vào}}r - \\dfrac{r}{V_0}y$, lượng muối tối đa trong bể khi thời gian $t \\to +\\infty$ đạt giá trị bằng",
  "options": [
   "$200\\,\\text{g}$.",
   "$100.0\\,\\text{g}$.",
   "$400\\,\\text{g}$.",
   "$150\\,\\text{g}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân mô tả lượng muối $y(t)$: $\\dfrac{dy}{dt} + \\dfrac{2}{50}y = 8$.<br>Nghiệm tổng quát: $y(t) = 200\\left(1 - e^{-\\frac{2}{50}t}\\right)\\,\\text{g}$.<br>Khi $t \\to +\\infty$, số hạng $e^{-\\frac{2}{50}t} \\to 0$, lượng muối tiến tới trạng thái bão hòa: $\\lim\\limits_{t\\to+\\infty} y(t) = 200\\,\\text{g}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-016"
 },
 {
  "q": "Một bể chứa ban đầu có $150\\,\\text{lít}$ nước tinh khiết. Người ta bơm vào bể dung dịch nước muối có nồng độ $c_{\\text{vào}} = 2\\,\\text{g/L}$ với lưu lượng $r = 5\\,\\text{lít/phút}$. Dung dịch trong bể được khuấy đều liên tục và chảy ra ngoài với cùng lưu lượng $r = 5\\,\\text{lít/phút}$. Lập phương trình vi phân $\\dfrac{dy}{dt} = c_{\\text{vào}}r - \\dfrac{r}{V_0}y$, lượng muối tối đa trong bể khi thời gian $t \\to +\\infty$ đạt giá trị bằng",
  "options": [
   "$300\\,\\text{g}$.",
   "$150.0\\,\\text{g}$.",
   "$600\\,\\text{g}$.",
   "$250\\,\\text{g}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân mô tả lượng muối $y(t)$: $\\dfrac{dy}{dt} + \\dfrac{5}{150}y = 10$.<br>Nghiệm tổng quát: $y(t) = 300\\left(1 - e^{-\\frac{5}{150}t}\\right)\\,\\text{g}$.<br>Khi $t \\to +\\infty$, số hạng $e^{-\\frac{5}{150}t} \\to 0$, lượng muối tiến tới trạng thái bão hòa: $\\lim\\limits_{t\\to+\\infty} y(t) = 300\\,\\text{g}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-017"
 },
 {
  "q": "Một bể chứa ban đầu có $300\\,\\text{lít}$ nước tinh khiết. Người ta bơm vào bể dung dịch nước muối có nồng độ $c_{\\text{vào}} = 1\\,\\text{g/L}$ với lưu lượng $r = 10\\,\\text{lít/phút}$. Dung dịch trong bể được khuấy đều liên tục và chảy ra ngoài với cùng lưu lượng $r = 10\\,\\text{lít/phút}$. Lập phương trình vi phân $\\dfrac{dy}{dt} = c_{\\text{vào}}r - \\dfrac{r}{V_0}y$, lượng muối tối đa trong bể khi thời gian $t \\to +\\infty$ đạt giá trị bằng",
  "options": [
   "$300\\,\\text{g}$.",
   "$150.0\\,\\text{g}$.",
   "$600\\,\\text{g}$.",
   "$250\\,\\text{g}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân mô tả lượng muối $y(t)$: $\\dfrac{dy}{dt} + \\dfrac{10}{300}y = 10$.<br>Nghiệm tổng quát: $y(t) = 300\\left(1 - e^{-\\frac{10}{300}t}\\right)\\,\\text{g}$.<br>Khi $t \\to +\\infty$, số hạng $e^{-\\frac{10}{300}t} \\to 0$, lượng muối tiến tới trạng thái bão hòa: $\\lim\\limits_{t\\to+\\infty} y(t) = 300\\,\\text{g}$.",
  "topic": "v1",
  "type": "mcq",
  "id": "v1-018"
 },
 {
  "q": "Người ta cần thiết kế một bồn chứa nước bằng kim loại có dạng hình hộp chữ nhật không nắp, đáy hình vuông cạnh $x$, chiều cao $y$, có thể tích cố định $V = 32\\,\\text{m}^3$. Để tiết kiệm chi phí vật liệu nhất (diện tích toàn phần $S(x, y) = x^2 + 4xy$ đạt giá trị nhỏ nhất), cạnh đáy $x$ của bồn nước cần bằng",
  "options": [
   "$4\\,\\text{m}$.",
   "$6\\,\\text{m}$.",
   "$3\\,\\text{m}$.",
   "$2\\,\\text{m}$."
  ],
  "answer": 0,
  "explain": "Rút $y$ theo $x$: $V = x^2 y = 32 \\Rightarrow y = \\dfrac{32}{x^2}$.<br>Diện tích vật liệu cần dùng: $S(x) = x^2 + 4x\\left(\\dfrac{32}{x^2}\\right) = x^2 + \\dfrac{128}{x}$.<br>Đạo hàm tìm cực trị: $S^\\prime(x) = 2x - \\dfrac{128}{x^2} = 0 \\Leftrightarrow 2x^3 = 128 \\Leftrightarrow x^3 = 64$.<br>Suy ra kích thước đáy tối ưu: $x = \\sqrt[3]{64} = 4\\,\\text{m}$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-005"
 },
 {
  "q": "Người ta cần thiết kế một bồn chứa nước bằng kim loại có dạng hình hộp chữ nhật không nắp, đáy hình vuông cạnh $x$, chiều cao $y$, có thể tích cố định $V = 108\\,\\text{m}^3$. Để tiết kiệm chi phí vật liệu nhất (diện tích toàn phần $S(x, y) = x^2 + 4xy$ đạt giá trị nhỏ nhất), cạnh đáy $x$ của bồn nước cần bằng",
  "options": [
   "$6\\,\\text{m}$.",
   "$8\\,\\text{m}$.",
   "$5\\,\\text{m}$.",
   "$3\\,\\text{m}$."
  ],
  "answer": 0,
  "explain": "Rút $y$ theo $x$: $V = x^2 y = 108 \\Rightarrow y = \\dfrac{108}{x^2}$.<br>Diện tích vật liệu cần dùng: $S(x) = x^2 + 4x\\left(\\dfrac{108}{x^2}\\right) = x^2 + \\dfrac{432}{x}$.<br>Đạo hàm tìm cực trị: $S^\\prime(x) = 2x - \\dfrac{432}{x^2} = 0 \\Leftrightarrow 2x^3 = 432 \\Leftrightarrow x^3 = 216$.<br>Suy ra kích thước đáy tối ưu: $x = \\sqrt[3]{216} = 6\\,\\text{m}$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-006"
 },
 {
  "q": "Người ta cần thiết kế một bồn chứa nước bằng kim loại có dạng hình hộp chữ nhật không nắp, đáy hình vuông cạnh $x$, chiều cao $y$, có thể tích cố định $V = 256\\,\\text{m}^3$. Để tiết kiệm chi phí vật liệu nhất (diện tích toàn phần $S(x, y) = x^2 + 4xy$ đạt giá trị nhỏ nhất), cạnh đáy $x$ của bồn nước cần bằng",
  "options": [
   "$8\\,\\text{m}$.",
   "$10\\,\\text{m}$.",
   "$7\\,\\text{m}$.",
   "$4\\,\\text{m}$."
  ],
  "answer": 0,
  "explain": "Rút $y$ theo $x$: $V = x^2 y = 256 \\Rightarrow y = \\dfrac{256}{x^2}$.<br>Diện tích vật liệu cần dùng: $S(x) = x^2 + 4x\\left(\\dfrac{256}{x^2}\\right) = x^2 + \\dfrac{1024}{x}$.<br>Đạo hàm tìm cực trị: $S^\\prime(x) = 2x - \\dfrac{1024}{x^2} = 0 \\Leftrightarrow 2x^3 = 1024 \\Leftrightarrow x^3 = 512$.<br>Suy ra kích thước đáy tối ưu: $x = \\sqrt[3]{512} = 8\\,\\text{m}$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-007"
 },
 {
  "q": "Người ta cần thiết kế một bồn chứa nước bằng kim loại có dạng hình hộp chữ nhật không nắp, đáy hình vuông cạnh $x$, chiều cao $y$, có thể tích cố định $V = 500\\,\\text{m}^3$. Để tiết kiệm chi phí vật liệu nhất (diện tích toàn phần $S(x, y) = x^2 + 4xy$ đạt giá trị nhỏ nhất), cạnh đáy $x$ của bồn nước cần bằng",
  "options": [
   "$10\\,\\text{m}$.",
   "$12\\,\\text{m}$.",
   "$9\\,\\text{m}$.",
   "$5\\,\\text{m}$."
  ],
  "answer": 0,
  "explain": "Rút $y$ theo $x$: $V = x^2 y = 500 \\Rightarrow y = \\dfrac{500}{x^2}$.<br>Diện tích vật liệu cần dùng: $S(x) = x^2 + 4x\\left(\\dfrac{500}{x^2}\\right) = x^2 + \\dfrac{2000}{x}$.<br>Đạo hàm tìm cực trị: $S^\\prime(x) = 2x - \\dfrac{2000}{x^2} = 0 \\Leftrightarrow 2x^3 = 2000 \\Leftrightarrow x^3 = 1000$.<br>Suy ra kích thước đáy tối ưu: $x = \\sqrt[3]{1000} = 10\\,\\text{m}$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-008"
 },
 {
  "q": "Người ta cần thiết kế một bồn chứa nước bằng kim loại có dạng hình hộp chữ nhật không nắp, đáy hình vuông cạnh $x$, chiều cao $y$, có thể tích cố định $V = 4\\,\\text{m}^3$. Để tiết kiệm chi phí vật liệu nhất (diện tích toàn phần $S(x, y) = x^2 + 4xy$ đạt giá trị nhỏ nhất), cạnh đáy $x$ của bồn nước cần bằng",
  "options": [
   "$2\\,\\text{m}$.",
   "$4\\,\\text{m}$.",
   "$1\\,\\text{m}$.",
   "$3\\,\\text{m}$."
  ],
  "answer": 0,
  "explain": "Rút $y$ theo $x$: $V = x^2 y = 4 \\Rightarrow y = \\dfrac{4}{x^2}$.<br>Diện tích vật liệu cần dùng: $S(x) = x^2 + 4x\\left(\\dfrac{4}{x^2}\\right) = x^2 + \\dfrac{16}{x}$.<br>Đạo hàm tìm cực trị: $S^\\prime(x) = 2x - \\dfrac{16}{x^2} = 0 \\Leftrightarrow 2x^3 = 16 \\Leftrightarrow x^3 = 8$.<br>Suy ra kích thước đáy tối ưu: $x = \\sqrt[3]{8} = 2\\,\\text{m}$.",
  "topic": "nb",
  "type": "mcq",
  "id": "nb-009"
 },
 {
  "q": "Trong mô hình cân bằng thị trường hai loại hàng hóa thay thế, giá cân bằng $(P_1;\\, P_2)$ thỏa mãn hệ phương trình cung cầu: $\\begin{cases} 3P_1 - P_2 = 13 \\\\ -P_1 + 4P_2 = 14\\end{cases}$. Tổng mức giá cân bằng của hai mặt hàng $(P_1 + P_2)$ bằng",
  "options": [
   "$11$.",
   "$10$.",
   "$12$.",
   "$13$."
  ],
  "answer": 0,
  "explain": "Ma trận hệ số của hệ: $A = \\begin{pmatrix}3 & -1 \\\\ -1 & 4\\end{pmatrix}$, $\\det A = 3(4) - (-1)(-1) = 11 \\ne 0$.<br>Áp dụng quy tắc Cramer: $D_{P_1} = \\begin{vmatrix} 13 & -1 \\\\ 14 & 4 \\end{vmatrix} = 4(13) - (-1)(14) = 66$.<br>Giá mặt hàng 1: $P_1 = \\dfrac{66}{11} = 6$.<br>Thay vào phương trình đầu: $P_2 = 3(6) - 13 = 5$.<br>Tổng mức giá: $P_1 + P_2 = 6 + 5 = 11$.",
  "topic": "he",
  "type": "mcq",
  "id": "he-107"
 },
 {
  "q": "Một lực $\\vec{F}(x,y) = (4xy + 3)\\vec{i} + (2x^2 + 2y)\\vec{j}$ tác dụng lên một chất điểm di chuyển từ gốc tọa độ $O(0;\\,0)$ đến điểm $M(2;\\,1)$. Biết $\\vec{F}$ là trường lực thế, công do lực $\\vec{F}$ sinh ra bằng",
  "options": [
   "$15\\,\\text{J}$.",
   "$11\\,\\text{J}$.",
   "$21\\,\\text{J}$.",
   "$30\\,\\text{J}$."
  ],
  "answer": 0,
  "explain": "Kiểm tra điều kiện trường thế: $\\dfrac{\\partial Q}{\\partial x} = 2(2)x = 4x = \\dfrac{\\partial P}{\\partial y}$, do đó lực $\\vec{F}$ là lực bảo toàn (lực thế).<br>Hàm thế vị $U(x,y) = \\displaystyle\\int (4xy + 3)\\,dx = 2x^2y + 3x + C(y)$.<br>Đạo hàm theo $y$: $U^\\prime_y = 2x^2 + C^\\prime(y) = 2x^2 + 2y \\Rightarrow C(y) = y^2$.<br>Hàm thế vị: $U(x,y) = 2x^2y + 3x + y^2$.<br>Công sinh ra: $W = U(M) - U(O) = 2(2)^2(1) + 3(2) + (1)^2 = 15\\,\\text{J}$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-139"
 },
 {
  "q": "Một lực $\\vec{F}(x,y) = (2xy + 2)\\vec{i} + (1x^2 + 2y)\\vec{j}$ tác dụng lên một chất điểm di chuyển từ gốc tọa độ $O(0;\\,0)$ đến điểm $M(3;\\,2)$. Biết $\\vec{F}$ là trường lực thế, công do lực $\\vec{F}$ sinh ra bằng",
  "options": [
   "$28\\,\\text{J}$.",
   "$24\\,\\text{J}$.",
   "$34\\,\\text{J}$.",
   "$56\\,\\text{J}$."
  ],
  "answer": 0,
  "explain": "Kiểm tra điều kiện trường thế: $\\dfrac{\\partial Q}{\\partial x} = 2(1)x = 2x = \\dfrac{\\partial P}{\\partial y}$, do đó lực $\\vec{F}$ là lực bảo toàn (lực thế).<br>Hàm thế vị $U(x,y) = \\displaystyle\\int (2xy + 2)\\,dx = 1x^2y + 2x + C(y)$.<br>Đạo hàm theo $y$: $U^\\prime_y = 1x^2 + C^\\prime(y) = 1x^2 + 2y \\Rightarrow C(y) = y^2$.<br>Hàm thế vị: $U(x,y) = 1x^2y + 2x + y^2$.<br>Công sinh ra: $W = U(M) - U(O) = 1(3)^2(2) + 2(3) + (2)^2 = 28\\,\\text{J}$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-140"
 },
 {
  "q": "Một lực $\\vec{F}(x,y) = (6xy + 1)\\vec{i} + (3x^2 + 2y)\\vec{j}$ tác dụng lên một chất điểm di chuyển từ gốc tọa độ $O(0;\\,0)$ đến điểm $M(1;\\,2)$. Biết $\\vec{F}$ là trường lực thế, công do lực $\\vec{F}$ sinh ra bằng",
  "options": [
   "$11\\,\\text{J}$.",
   "$7\\,\\text{J}$.",
   "$17\\,\\text{J}$.",
   "$22\\,\\text{J}$."
  ],
  "answer": 0,
  "explain": "Kiểm tra điều kiện trường thế: $\\dfrac{\\partial Q}{\\partial x} = 2(3)x = 6x = \\dfrac{\\partial P}{\\partial y}$, do đó lực $\\vec{F}$ là lực bảo toàn (lực thế).<br>Hàm thế vị $U(x,y) = \\displaystyle\\int (6xy + 1)\\,dx = 3x^2y + 1x + C(y)$.<br>Đạo hàm theo $y$: $U^\\prime_y = 3x^2 + C^\\prime(y) = 3x^2 + 2y \\Rightarrow C(y) = y^2$.<br>Hàm thế vị: $U(x,y) = 3x^2y + 1x + y^2$.<br>Công sinh ra: $W = U(M) - U(O) = 3(1)^2(2) + 1(1) + (2)^2 = 11\\,\\text{J}$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-141"
 },
 {
  "q": "Một lực $\\vec{F}(x,y) = (4xy + 2)\\vec{i} + (2x^2 + 2y)\\vec{j}$ tác dụng lên một chất điểm di chuyển từ gốc tọa độ $O(0;\\,0)$ đến điểm $M(2;\\,3)$. Biết $\\vec{F}$ là trường lực thế, công do lực $\\vec{F}$ sinh ra bằng",
  "options": [
   "$37\\,\\text{J}$.",
   "$33\\,\\text{J}$.",
   "$43\\,\\text{J}$.",
   "$74\\,\\text{J}$."
  ],
  "answer": 0,
  "explain": "Kiểm tra điều kiện trường thế: $\\dfrac{\\partial Q}{\\partial x} = 2(2)x = 4x = \\dfrac{\\partial P}{\\partial y}$, do đó lực $\\vec{F}$ là lực bảo toàn (lực thế).<br>Hàm thế vị $U(x,y) = \\displaystyle\\int (4xy + 2)\\,dx = 2x^2y + 2x + C(y)$.<br>Đạo hàm theo $y$: $U^\\prime_y = 2x^2 + C^\\prime(y) = 2x^2 + 2y \\Rightarrow C(y) = y^2$.<br>Hàm thế vị: $U(x,y) = 2x^2y + 2x + y^2$.<br>Công sinh ra: $W = U(M) - U(O) = 2(2)^2(3) + 2(2) + (3)^2 = 37\\,\\text{J}$.",
  "topic": "td",
  "type": "mcq",
  "id": "td-142"
 },
 {
  "q": "Một công ty độc quyền sản xuất có hàm doanh thu $R(x) = 100x - 2x^2$ và hàm chi phí tổng cộng $C(x) = 20x + 50$ (với $x$ là số lượng sản phẩm, đơn vị tính: triệu đồng). Mức sản lượng $x$ để công ty đạt lợi nhuận tối đa bằng",
  "options": [
   "$20$.",
   "$22$.",
   "$17$.",
   "$40$."
  ],
  "answer": 0,
  "explain": "Hàm lợi nhuận: $\\Pi(x) = R(x) - C(x) = (100x - 2x^2) - (20x + 50) = 80x - 2x^2 - 50$.<br>Doanh thu cận biên bằng chi phí cận biên $MR = MC \\Leftrightarrow R^\\prime(x) = C^\\prime(x) \\Leftrightarrow 100 - 4x = 20$.<br>Giải phương trình: $4x = 80 \\Rightarrow x = 20$.<br>Vì $\\Pi^{\\prime\\prime}(x) = -4 < 0$ nên mức sản lượng $x = 20$ tối đa hóa lợi nhuận.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-139"
 },
 {
  "q": "Một công ty độc quyền sản xuất có hàm doanh thu $R(x) = 120x - 3x^2$ và hàm chi phí tổng cộng $C(x) = 30x + 50$ (với $x$ là số lượng sản phẩm, đơn vị tính: triệu đồng). Mức sản lượng $x$ để công ty đạt lợi nhuận tối đa bằng",
  "options": [
   "$15$.",
   "$17$.",
   "$12$.",
   "$30$."
  ],
  "answer": 0,
  "explain": "Hàm lợi nhuận: $\\Pi(x) = R(x) - C(x) = (120x - 3x^2) - (30x + 50) = 90x - 3x^2 - 50$.<br>Doanh thu cận biên bằng chi phí cận biên $MR = MC \\Leftrightarrow R^\\prime(x) = C^\\prime(x) \\Leftrightarrow 120 - 6x = 30$.<br>Giải phương trình: $6x = 90 \\Rightarrow x = 15$.<br>Vì $\\Pi^{\\prime\\prime}(x) = -6 < 0$ nên mức sản lượng $x = 15$ tối đa hóa lợi nhuận.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-140"
 },
 {
  "q": "Một công ty độc quyền sản xuất có hàm doanh thu $R(x) = 80x - 1x^2$ và hàm chi phí tổng cộng $C(x) = 20x + 50$ (với $x$ là số lượng sản phẩm, đơn vị tính: triệu đồng). Mức sản lượng $x$ để công ty đạt lợi nhuận tối đa bằng",
  "options": [
   "$30$.",
   "$32$.",
   "$27$.",
   "$60$."
  ],
  "answer": 0,
  "explain": "Hàm lợi nhuận: $\\Pi(x) = R(x) - C(x) = (80x - 1x^2) - (20x + 50) = 60x - 1x^2 - 50$.<br>Doanh thu cận biên bằng chi phí cận biên $MR = MC \\Leftrightarrow R^\\prime(x) = C^\\prime(x) \\Leftrightarrow 80 - 2x = 20$.<br>Giải phương trình: $2x = 60 \\Rightarrow x = 30$.<br>Vì $\\Pi^{\\prime\\prime}(x) = -2 < 0$ nên mức sản lượng $x = 30$ tối đa hóa lợi nhuận.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-141"
 },
 {
  "q": "Một công ty độc quyền sản xuất có hàm doanh thu $R(x) = 150x - 5x^2$ và hàm chi phí tổng cộng $C(x) = 25x + 50$ (với $x$ là số lượng sản phẩm, đơn vị tính: triệu đồng). Mức sản lượng $x$ để công ty đạt lợi nhuận tối đa bằng",
  "options": [
   "$\\dfrac{25}{2}$.",
   "$\\dfrac{29}{2}$.",
   "$\\dfrac{19}{2}$.",
   "$25$."
  ],
  "answer": 0,
  "explain": "Hàm lợi nhuận: $\\Pi(x) = R(x) - C(x) = (150x - 5x^2) - (25x + 50) = 125x - 5x^2 - 50$.<br>Doanh thu cận biên bằng chi phí cận biên $MR = MC \\Leftrightarrow R^\\prime(x) = C^\\prime(x) \\Leftrightarrow 150 - 10x = 25$.<br>Giải phương trình: $10x = 125 \\Rightarrow x = \\dfrac{25}{2}$.<br>Vì $\\Pi^{\\prime\\prime}(x) = -10 < 0$ nên mức sản lượng $x = \\dfrac{25}{2}$ tối đa hóa lợi nhuận.",
  "topic": "dh",
  "type": "mcq",
  "id": "dh-142"
 },
 {
  "q": "Trong thực nghiệm phân tích số liệu điều tra, người ta thu được 4 điểm dữ liệu: $(0;\\,1),\\; (1;\\,3),\\; (2;\\,4),\\; (3;\\,6)$. Áp dụng phương pháp bình phương tối thiểu (hình chiếu trực giao giải hệ phương trình chuẩn $A^T A \\hat{x} = A^T b$), hệ số góc $a$ của đường hồi quy tuyến tính thực nghiệm $y = ax + b$ bằng",
  "options": [
   "$\\dfrac{8}{5}$.",
   "$\\dfrac{13}{5}$.",
   "$\\dfrac{11}{10}$.",
   "$\\dfrac{16}{5}$."
  ],
  "answer": 0,
  "explain": "Lập hệ phương trình không tương thích: $Ax = b$ với $A = \\begin{pmatrix}0 & 1 \\\\ 1 & 1 \\\\ 2 & 1 \\\\ 3 & 1\\end{pmatrix},\\; b = \\begin{pmatrix}1 \\\\ 3 \\\\ 4 \\\\ 6\\end{pmatrix}$.<br>Phương trình chuẩn: $A^T A \\begin{pmatrix} a \\\\ b \\end{pmatrix} = A^T b \\Leftrightarrow \\begin{pmatrix} 14 & 6 \\\\ 6 & 4\\end{pmatrix} \\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} 29 \\\\ 14\\end{pmatrix}$.<br>Hệ số góc của đường xu hướng: $a = \\dfrac{4(29) - (6)(14)}{4(14) - (6)^2} = \\dfrac{8}{5}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-081"
 },
 {
  "q": "Trong thực nghiệm phân tích số liệu điều tra, người ta thu được 4 điểm dữ liệu: $(1;\\,2),\\; (2;\\,3),\\; (3;\\,5),\\; (4;\\,6)$. Áp dụng phương pháp bình phương tối thiểu (hình chiếu trực giao giải hệ phương trình chuẩn $A^T A \\hat{x} = A^T b$), hệ số góc $a$ của đường hồi quy tuyến tính thực nghiệm $y = ax + b$ bằng",
  "options": [
   "$\\dfrac{7}{5}$.",
   "$\\dfrac{12}{5}$.",
   "$\\dfrac{9}{10}$.",
   "$\\dfrac{14}{5}$."
  ],
  "answer": 0,
  "explain": "Lập hệ phương trình không tương thích: $Ax = b$ với $A = \\begin{pmatrix}1 & 1 \\\\ 2 & 1 \\\\ 3 & 1 \\\\ 4 & 1\\end{pmatrix},\\; b = \\begin{pmatrix}2 \\\\ 3 \\\\ 5 \\\\ 6\\end{pmatrix}$.<br>Phương trình chuẩn: $A^T A \\begin{pmatrix} a \\\\ b \\end{pmatrix} = A^T b \\Leftrightarrow \\begin{pmatrix} 30 & 10 \\\\ 10 & 4\\end{pmatrix} \\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} 47 \\\\ 16\\end{pmatrix}$.<br>Hệ số góc của đường xu hướng: $a = \\dfrac{4(47) - (10)(16)}{4(30) - (10)^2} = \\dfrac{7}{5}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-082"
 },
 {
  "q": "Trong thực nghiệm phân tích số liệu điều tra, người ta thu được 4 điểm dữ liệu: $(0;\\,2),\\; (1;\\,4),\\; (2;\\,5),\\; (3;\\,7)$. Áp dụng phương pháp bình phương tối thiểu (hình chiếu trực giao giải hệ phương trình chuẩn $A^T A \\hat{x} = A^T b$), hệ số góc $a$ của đường hồi quy tuyến tính thực nghiệm $y = ax + b$ bằng",
  "options": [
   "$\\dfrac{8}{5}$.",
   "$\\dfrac{13}{5}$.",
   "$\\dfrac{11}{10}$.",
   "$\\dfrac{16}{5}$."
  ],
  "answer": 0,
  "explain": "Lập hệ phương trình không tương thích: $Ax = b$ với $A = \\begin{pmatrix}0 & 1 \\\\ 1 & 1 \\\\ 2 & 1 \\\\ 3 & 1\\end{pmatrix},\\; b = \\begin{pmatrix}2 \\\\ 4 \\\\ 5 \\\\ 7\\end{pmatrix}$.<br>Phương trình chuẩn: $A^T A \\begin{pmatrix} a \\\\ b \\end{pmatrix} = A^T b \\Leftrightarrow \\begin{pmatrix} 14 & 6 \\\\ 6 & 4\\end{pmatrix} \\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} 35 \\\\ 18\\end{pmatrix}$.<br>Hệ số góc của đường xu hướng: $a = \\dfrac{4(35) - (6)(18)}{4(14) - (6)^2} = \\dfrac{8}{5}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-083"
 },
 {
  "q": "Trong thực nghiệm phân tích số liệu điều tra, người ta thu được 4 điểm dữ liệu: $(1;\\,1),\\; (2;\\,2),\\; (3;\\,4),\\; (4;\\,5)$. Áp dụng phương pháp bình phương tối thiểu (hình chiếu trực giao giải hệ phương trình chuẩn $A^T A \\hat{x} = A^T b$), hệ số góc $a$ của đường hồi quy tuyến tính thực nghiệm $y = ax + b$ bằng",
  "options": [
   "$\\dfrac{7}{5}$.",
   "$\\dfrac{12}{5}$.",
   "$\\dfrac{9}{10}$.",
   "$\\dfrac{14}{5}$."
  ],
  "answer": 0,
  "explain": "Lập hệ phương trình không tương thích: $Ax = b$ với $A = \\begin{pmatrix}1 & 1 \\\\ 2 & 1 \\\\ 3 & 1 \\\\ 4 & 1\\end{pmatrix},\\; b = \\begin{pmatrix}1 \\\\ 2 \\\\ 4 \\\\ 5\\end{pmatrix}$.<br>Phương trình chuẩn: $A^T A \\begin{pmatrix} a \\\\ b \\end{pmatrix} = A^T b \\Leftrightarrow \\begin{pmatrix} 30 & 10 \\\\ 10 & 4\\end{pmatrix} \\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\begin{pmatrix} 37 \\\\ 12\\end{pmatrix}$.<br>Hệ số góc của đường xu hướng: $a = \\dfrac{4(37) - (10)(12)}{4(30) - (10)^2} = \\dfrac{7}{5}$.",
  "topic": "vt",
  "type": "mcq",
  "id": "vt-084"
 },
 {
  "q": "Một mạch dao động điện từ $RLC$ nối tiếp gồm điện trở $R = 4\\,\\Omega$, cuộn cảm thuần $L = 1\\,\\text{H}$ và tụ điện có điện dung $C = \\dfrac{1}{13}\\,\\text{F}$. Điện tích $q(t)$ trên bản tụ thỏa mãn phương trình vi phân $L q^{\\prime\\prime} + R q^\\prime + \\dfrac{1}{C}q = 0$. Tần số góc dao động tắt dần của mạch $\\omega_d = \\sqrt{\\dfrac{1}{LC} - \\left(\\dfrac{R}{2L}\\right)^2}$ bằng",
  "options": [
   "$3\\,\\text{rad/s}$.",
   "$4\\,\\text{rad/s}$.",
   "$2\\,\\text{rad/s}$.",
   "$6\\,\\text{rad/s}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân: $q^{\\prime\\prime} + 4q^\\prime + 13q = 0$.<br>Phương trình đặc trưng: $k^2 + 4k + 13 = 0$.<br>Biệt thức: $\\Delta = 4^2 - 4(13) = -36 < 0$.<br>Nghiệm phức đặc trưng: $k = -\\dfrac{4}{2} \\pm i \\sqrt{13 - \\left(\\dfrac{4}{2}\\right)^2} = -2 \\pm 3i$.<br>Tần số góc dao động tắt dần: $\\omega_d = 3\\,\\text{rad/s}$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-136"
 },
 {
  "q": "Một mạch dao động điện từ $RLC$ nối tiếp gồm điện trở $R = 6\\,\\Omega$, cuộn cảm thuần $L = 1\\,\\text{H}$ và tụ điện có điện dung $C = \\dfrac{1}{25}\\,\\text{F}$. Điện tích $q(t)$ trên bản tụ thỏa mãn phương trình vi phân $L q^{\\prime\\prime} + R q^\\prime + \\dfrac{1}{C}q = 0$. Tần số góc dao động tắt dần của mạch $\\omega_d = \\sqrt{\\dfrac{1}{LC} - \\left(\\dfrac{R}{2L}\\right)^2}$ bằng",
  "options": [
   "$4\\,\\text{rad/s}$.",
   "$5\\,\\text{rad/s}$.",
   "$3\\,\\text{rad/s}$.",
   "$8\\,\\text{rad/s}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân: $q^{\\prime\\prime} + 6q^\\prime + 25q = 0$.<br>Phương trình đặc trưng: $k^2 + 6k + 25 = 0$.<br>Biệt thức: $\\Delta = 6^2 - 4(25) = -64 < 0$.<br>Nghiệm phức đặc trưng: $k = -\\dfrac{6}{2} \\pm i \\sqrt{25 - \\left(\\dfrac{6}{2}\\right)^2} = -3 \\pm 4i$.<br>Tần số góc dao động tắt dần: $\\omega_d = 4\\,\\text{rad/s}$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-137"
 },
 {
  "q": "Một mạch dao động điện từ $RLC$ nối tiếp gồm điện trở $R = 2\\,\\Omega$, cuộn cảm thuần $L = 1\\,\\text{H}$ và tụ điện có điện dung $C = \\dfrac{1}{10}\\,\\text{F}$. Điện tích $q(t)$ trên bản tụ thỏa mãn phương trình vi phân $L q^{\\prime\\prime} + R q^\\prime + \\dfrac{1}{C}q = 0$. Tần số góc dao động tắt dần của mạch $\\omega_d = \\sqrt{\\dfrac{1}{LC} - \\left(\\dfrac{R}{2L}\\right)^2}$ bằng",
  "options": [
   "$3\\,\\text{rad/s}$.",
   "$4\\,\\text{rad/s}$.",
   "$2\\,\\text{rad/s}$.",
   "$6\\,\\text{rad/s}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân: $q^{\\prime\\prime} + 2q^\\prime + 10q = 0$.<br>Phương trình đặc trưng: $k^2 + 2k + 10 = 0$.<br>Biệt thức: $\\Delta = 2^2 - 4(10) = -36 < 0$.<br>Nghiệm phức đặc trưng: $k = -\\dfrac{2}{2} \\pm i \\sqrt{10 - \\left(\\dfrac{2}{2}\\right)^2} = -1 \\pm 3i$.<br>Tần số góc dao động tắt dần: $\\omega_d = 3\\,\\text{rad/s}$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-138"
 },
 {
  "q": "Một mạch dao động điện từ $RLC$ nối tiếp gồm điện trở $R = 8\\,\\Omega$, cuộn cảm thuần $L = 1\\,\\text{H}$ và tụ điện có điện dung $C = \\dfrac{1}{25}\\,\\text{F}$. Điện tích $q(t)$ trên bản tụ thỏa mãn phương trình vi phân $L q^{\\prime\\prime} + R q^\\prime + \\dfrac{1}{C}q = 0$. Tần số góc dao động tắt dần của mạch $\\omega_d = \\sqrt{\\dfrac{1}{LC} - \\left(\\dfrac{R}{2L}\\right)^2}$ bằng",
  "options": [
   "$3\\,\\text{rad/s}$.",
   "$4\\,\\text{rad/s}$.",
   "$2\\,\\text{rad/s}$.",
   "$6\\,\\text{rad/s}$."
  ],
  "answer": 0,
  "explain": "Phương trình vi phân: $q^{\\prime\\prime} + 8q^\\prime + 25q = 0$.<br>Phương trình đặc trưng: $k^2 + 8k + 25 = 0$.<br>Biệt thức: $\\Delta = 8^2 - 4(25) = -36 < 0$.<br>Nghiệm phức đặc trưng: $k = -\\dfrac{8}{2} \\pm i \\sqrt{25 - \\left(\\dfrac{8}{2}\\right)^2} = -4 \\pm 3i$.<br>Tần số góc dao động tắt dần: $\\omega_d = 3\\,\\text{rad/s}$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-139"
 },
 {
  "q": "Trong tài chính định giá dự án, một khoản đầu tư mang lại dòng tiền đều đặn vĩnh viễn $C = 100\\,\\text{triệu đồng}$ vào cuối mỗi năm, bắt đầu từ năm thứ nhất với lãi suất chiết khấu thị trường $r = 5\\,\\%/\\text{năm}$. Giá trị hiện tại ròng của dòng tiền vĩnh viễn $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{C}{(1+r)^n} = \\dfrac{C}{r}$ bằng",
  "options": [
   "$2000\\,\\text{triệu đồng}$.",
   "$2200\\,\\text{triệu đồng}$.",
   "$1700\\,\\text{triệu đồng}$.",
   "$4000\\,\\text{triệu đồng}$."
  ],
  "answer": 0,
  "explain": "Chuỗi giá trị hiện tại là một chuỗi cấp số nhân lùi vô hạn: $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{100}{(1 + \\dfrac{1}{20})^n}$.<br>Số hạng đầu: $u_1 = \\dfrac{100}{1 + \\dfrac{1}{20}}$, công bội $q = \\dfrac{1}{1 + \\dfrac{1}{20}} < 1$.<br>Tổng cấp số nhân: $NPV = \\dfrac{u_1}{1 - q} = \\dfrac{\\frac{100}{1 + \\dfrac{1}{20}}}{1 - \\frac{1}{1 + \\dfrac{1}{20}}} = \\dfrac{100}{\\dfrac{1}{20}} = 2000\\,\\text{triệu đồng}$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-013"
 },
 {
  "q": "Trong tài chính định giá dự án, một khoản đầu tư mang lại dòng tiền đều đặn vĩnh viễn $C = 60\\,\\text{triệu đồng}$ vào cuối mỗi năm, bắt đầu từ năm thứ nhất với lãi suất chiết khấu thị trường $r = 4\\,\\%/\\text{năm}$. Giá trị hiện tại ròng của dòng tiền vĩnh viễn $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{C}{(1+r)^n} = \\dfrac{C}{r}$ bằng",
  "options": [
   "$1500\\,\\text{triệu đồng}$.",
   "$1700\\,\\text{triệu đồng}$.",
   "$1200\\,\\text{triệu đồng}$.",
   "$3000\\,\\text{triệu đồng}$."
  ],
  "answer": 0,
  "explain": "Chuỗi giá trị hiện tại là một chuỗi cấp số nhân lùi vô hạn: $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{60}{(1 + \\dfrac{1}{25})^n}$.<br>Số hạng đầu: $u_1 = \\dfrac{60}{1 + \\dfrac{1}{25}}$, công bội $q = \\dfrac{1}{1 + \\dfrac{1}{25}} < 1$.<br>Tổng cấp số nhân: $NPV = \\dfrac{u_1}{1 - q} = \\dfrac{\\frac{60}{1 + \\dfrac{1}{25}}}{1 - \\frac{1}{1 + \\dfrac{1}{25}}} = \\dfrac{60}{\\dfrac{1}{25}} = 1500\\,\\text{triệu đồng}$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-014"
 },
 {
  "q": "Trong tài chính định giá dự án, một khoản đầu tư mang lại dòng tiền đều đặn vĩnh viễn $C = 120\\,\\text{triệu đồng}$ vào cuối mỗi năm, bắt đầu từ năm thứ nhất với lãi suất chiết khấu thị trường $r = 6\\,\\%/\\text{năm}$. Giá trị hiện tại ròng của dòng tiền vĩnh viễn $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{C}{(1+r)^n} = \\dfrac{C}{r}$ bằng",
  "options": [
   "$2000\\,\\text{triệu đồng}$.",
   "$2200\\,\\text{triệu đồng}$.",
   "$1700\\,\\text{triệu đồng}$.",
   "$4000\\,\\text{triệu đồng}$."
  ],
  "answer": 0,
  "explain": "Chuỗi giá trị hiện tại là một chuỗi cấp số nhân lùi vô hạn: $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{120}{(1 + \\dfrac{3}{50})^n}$.<br>Số hạng đầu: $u_1 = \\dfrac{120}{1 + \\dfrac{3}{50}}$, công bội $q = \\dfrac{1}{1 + \\dfrac{3}{50}} < 1$.<br>Tổng cấp số nhân: $NPV = \\dfrac{u_1}{1 - q} = \\dfrac{\\frac{120}{1 + \\dfrac{3}{50}}}{1 - \\frac{1}{1 + \\dfrac{3}{50}}} = \\dfrac{120}{\\dfrac{3}{50}} = 2000\\,\\text{triệu đồng}$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-015"
 },
 {
  "q": "Trong tài chính định giá dự án, một khoản đầu tư mang lại dòng tiền đều đặn vĩnh viễn $C = 200\\,\\text{triệu đồng}$ vào cuối mỗi năm, bắt đầu từ năm thứ nhất với lãi suất chiết khấu thị trường $r = 8\\,\\%/\\text{năm}$. Giá trị hiện tại ròng của dòng tiền vĩnh viễn $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{C}{(1+r)^n} = \\dfrac{C}{r}$ bằng",
  "options": [
   "$2500\\,\\text{triệu đồng}$.",
   "$2700\\,\\text{triệu đồng}$.",
   "$2200\\,\\text{triệu đồng}$.",
   "$5000\\,\\text{triệu đồng}$."
  ],
  "answer": 0,
  "explain": "Chuỗi giá trị hiện tại là một chuỗi cấp số nhân lùi vô hạn: $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{200}{(1 + \\dfrac{2}{25})^n}$.<br>Số hạng đầu: $u_1 = \\dfrac{200}{1 + \\dfrac{2}{25}}$, công bội $q = \\dfrac{1}{1 + \\dfrac{2}{25}} < 1$.<br>Tổng cấp số nhân: $NPV = \\dfrac{u_1}{1 - q} = \\dfrac{\\frac{200}{1 + \\dfrac{2}{25}}}{1 - \\frac{1}{1 + \\dfrac{2}{25}}} = \\dfrac{200}{\\dfrac{2}{25}} = 2500\\,\\text{triệu đồng}$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-016"
 },
 {
  "q": "Trong tài chính định giá dự án, một khoản đầu tư mang lại dòng tiền đều đặn vĩnh viễn $C = 50\\,\\text{triệu đồng}$ vào cuối mỗi năm, bắt đầu từ năm thứ nhất với lãi suất chiết khấu thị trường $r = 2\\,\\%/\\text{năm}$. Giá trị hiện tại ròng của dòng tiền vĩnh viễn $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{C}{(1+r)^n} = \\dfrac{C}{r}$ bằng",
  "options": [
   "$2500\\,\\text{triệu đồng}$.",
   "$2700\\,\\text{triệu đồng}$.",
   "$2200\\,\\text{triệu đồng}$.",
   "$5000\\,\\text{triệu đồng}$."
  ],
  "answer": 0,
  "explain": "Chuỗi giá trị hiện tại là một chuỗi cấp số nhân lùi vô hạn: $NPV = \\displaystyle\\sum_{n=1}^{+\\infty} \\dfrac{50}{(1 + \\dfrac{1}{50})^n}$.<br>Số hạng đầu: $u_1 = \\dfrac{50}{1 + \\dfrac{1}{50}}$, công bội $q = \\dfrac{1}{1 + \\dfrac{1}{50}} < 1$.<br>Tổng cấp số nhân: $NPV = \\dfrac{u_1}{1 - q} = \\dfrac{\\frac{50}{1 + \\dfrac{1}{50}}}{1 - \\frac{1}{1 + \\dfrac{1}{50}}} = \\dfrac{50}{\\dfrac{1}{50}} = 2500\\,\\text{triệu đồng}$.",
  "topic": "ch",
  "type": "mcq",
  "id": "ch-017"
 },
 {
  "q": "Một bồn chứa nhiên liệu có dạng khối tròn xoay tạo bởi mặt paraboloid $z = \\dfrac{4}{4}(x^2 + y^2)$ và mặt phẳng nắp trên $z = 4$ (đơn vị: mét). Thể tích của bồn chứa nhiên liệu có dạng $k\\pi\\,\\text{m}^3$. Hệ số $k$ bằng",
  "options": [
   "$8$.",
   "$16$.",
   "$4$.",
   "$9$."
  ],
  "answer": 0,
  "explain": "Chuyển sang tọa độ trụ: $x = r\\cos\\varphi,\\; y = r\\sin\\varphi,\\; z = z$ với $0 \\le r \\le 2$, $0 \\le \\varphi \\le 2\\pi$.<br>Miền giới hạn theo $z$: $\\dfrac{4}{4}r^2 \\le z \\le 4$.<br>Thể tích: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi \\int_0^{2} r\\,dr \\int_{\\frac{4}{4}r^2}^{4} dz = 2\\pi \\int_0^{2} \\left(4r - \\dfrac{4}{4}r^3\\right)dr$.<br>Tính tích phân: $V = 2\\pi \\left[\\dfrac{4r^2}{2} - \\dfrac{4r^4}{16}\\right]_0^{2} = 2\\pi\\cdot \\dfrac{16}{4} = 8\\pi\\,\\text{m}^3$.<br>Hệ số $k = 8$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-043"
 },
 {
  "q": "Một bồn chứa nhiên liệu có dạng khối tròn xoay tạo bởi mặt paraboloid $z = \\dfrac{9}{9}(x^2 + y^2)$ và mặt phẳng nắp trên $z = 9$ (đơn vị: mét). Thể tích của bồn chứa nhiên liệu có dạng $k\\pi\\,\\text{m}^3$. Hệ số $k$ bằng",
  "options": [
   "$\\dfrac{81}{2}$.",
   "$81$.",
   "$\\dfrac{81}{4}$.",
   "$\\dfrac{83}{2}$."
  ],
  "answer": 0,
  "explain": "Chuyển sang tọa độ trụ: $x = r\\cos\\varphi,\\; y = r\\sin\\varphi,\\; z = z$ với $0 \\le r \\le 3$, $0 \\le \\varphi \\le 2\\pi$.<br>Miền giới hạn theo $z$: $\\dfrac{9}{9}r^2 \\le z \\le 9$.<br>Thể tích: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi \\int_0^{3} r\\,dr \\int_{\\frac{9}{9}r^2}^{9} dz = 2\\pi \\int_0^{3} \\left(9r - \\dfrac{9}{9}r^3\\right)dr$.<br>Tính tích phân: $V = 2\\pi \\left[\\dfrac{9r^2}{2} - \\dfrac{9r^4}{36}\\right]_0^{3} = 2\\pi\\cdot \\dfrac{81}{4} = \\dfrac{81}{2}\\pi\\,\\text{m}^3$.<br>Hệ số $k = \\dfrac{81}{2}$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-044"
 },
 {
  "q": "Một bồn chứa nhiên liệu có dạng khối tròn xoay tạo bởi mặt paraboloid $z = \\dfrac{8}{16}(x^2 + y^2)$ và mặt phẳng nắp trên $z = 8$ (đơn vị: mét). Thể tích của bồn chứa nhiên liệu có dạng $k\\pi\\,\\text{m}^3$. Hệ số $k$ bằng",
  "options": [
   "$64$.",
   "$128$.",
   "$32$.",
   "$65$."
  ],
  "answer": 0,
  "explain": "Chuyển sang tọa độ trụ: $x = r\\cos\\varphi,\\; y = r\\sin\\varphi,\\; z = z$ với $0 \\le r \\le 4$, $0 \\le \\varphi \\le 2\\pi$.<br>Miền giới hạn theo $z$: $\\dfrac{8}{16}r^2 \\le z \\le 8$.<br>Thể tích: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi \\int_0^{4} r\\,dr \\int_{\\frac{8}{16}r^2}^{8} dz = 2\\pi \\int_0^{4} \\left(8r - \\dfrac{8}{16}r^3\\right)dr$.<br>Tính tích phân: $V = 2\\pi \\left[\\dfrac{8r^2}{2} - \\dfrac{8r^4}{64}\\right]_0^{4} = 2\\pi\\cdot \\dfrac{128}{4} = 64\\pi\\,\\text{m}^3$.<br>Hệ số $k = 64$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-045"
 },
 {
  "q": "Một bồn chứa nhiên liệu có dạng khối tròn xoay tạo bởi mặt paraboloid $z = \\dfrac{2}{1}(x^2 + y^2)$ và mặt phẳng nắp trên $z = 2$ (đơn vị: mét). Thể tích của bồn chứa nhiên liệu có dạng $k\\pi\\,\\text{m}^3$. Hệ số $k$ bằng",
  "options": [
   "$1$.",
   "$2$.",
   "$\\dfrac{1}{2}$.",
   "$0$."
  ],
  "answer": 0,
  "explain": "Chuyển sang tọa độ trụ: $x = r\\cos\\varphi,\\; y = r\\sin\\varphi,\\; z = z$ với $0 \\le r \\le 1$, $0 \\le \\varphi \\le 2\\pi$.<br>Miền giới hạn theo $z$: $\\dfrac{2}{1}r^2 \\le z \\le 2$.<br>Thể tích: $V = \\displaystyle\\int_0^{2\\pi}d\\varphi \\int_0^{1} r\\,dr \\int_{\\frac{2}{1}r^2}^{2} dz = 2\\pi \\int_0^{1} \\left(2r - \\dfrac{2}{1}r^3\\right)dr$.<br>Tính tích phân: $V = 2\\pi \\left[\\dfrac{2r^2}{2} - \\dfrac{2r^4}{4}\\right]_0^{1} = 2\\pi\\cdot \\dfrac{2}{4} = 1\\pi\\,\\text{m}^3$.<br>Hệ số $k = 1$.",
  "topic": "tb",
  "type": "mcq",
  "id": "tb-046"
 },
 {
  "q": "Trong sinh thái học bảo tồn, cấu trúc tuổi của một quần thể động vật được mô hình hóa bằng ma trận Leslie $L = \\begin{pmatrix} 0 & 4 \\\\ \\dfrac{1}{2} & 0 \\end{pmatrix}$, trong đó hàng đầu thể hiện mức sinh sản của từng nhóm tuổi và $s_1$ là tỷ lệ sống sót chuyển giai đoạn. Tốc độ tăng trưởng dài hạn của quần thể (trị riêng dương trội $\\lambda_1$) bằng",
  "options": [
   "$\\sqrt{2}$.",
   "$1 + \\sqrt{2}$.",
   "$2 \\sqrt{2}$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $\\det(L - \\lambda I) = \\begin{vmatrix} 0 - \\lambda & 4 \\\\ \\dfrac{1}{2} & -\\lambda \\end{vmatrix} = \\lambda^2 - 0\\lambda - 2 = 0$.<br>Biệt thức: $\\Delta = (0)^2 - 4(1)(-2) = 0 + 8 = 8$.<br>Trị riêng dương trội: $\\lambda_1 = \\dfrac{0 + \\sqrt{8}}{2} = \\sqrt{2}$.",
  "topic": "tr",
  "type": "mcq",
  "id": "tr-105"
 },
 {
  "q": "Trong sinh thái học bảo tồn, cấu trúc tuổi của một quần thể động vật được mô hình hóa bằng ma trận Leslie $L = \\begin{pmatrix} 0 & 6 \\\\ \\dfrac{1}{3} & 0 \\end{pmatrix}$, trong đó hàng đầu thể hiện mức sinh sản của từng nhóm tuổi và $s_1$ là tỷ lệ sống sót chuyển giai đoạn. Tốc độ tăng trưởng dài hạn của quần thể (trị riêng dương trội $\\lambda_1$) bằng",
  "options": [
   "$\\sqrt{2}$.",
   "$1 + \\sqrt{2}$.",
   "$2 \\sqrt{2}$.",
   "$2$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $\\det(L - \\lambda I) = \\begin{vmatrix} 0 - \\lambda & 6 \\\\ \\dfrac{1}{3} & -\\lambda \\end{vmatrix} = \\lambda^2 - 0\\lambda - 2 = 0$.<br>Biệt thức: $\\Delta = (0)^2 - 4(1)(-2) = 0 + 8 = 8$.<br>Trị riêng dương trội: $\\lambda_1 = \\dfrac{0 + \\sqrt{8}}{2} = \\sqrt{2}$.",
  "topic": "tr",
  "type": "mcq",
  "id": "tr-106"
 },
 {
  "q": "Trong sinh thái học bảo tồn, cấu trúc tuổi của một quần thể động vật được mô hình hóa bằng ma trận Leslie $L = \\begin{pmatrix} 0 & 8 \\\\ \\dfrac{1}{2} & 0 \\end{pmatrix}$, trong đó hàng đầu thể hiện mức sinh sản của từng nhóm tuổi và $s_1$ là tỷ lệ sống sót chuyển giai đoạn. Tốc độ tăng trưởng dài hạn của quần thể (trị riêng dương trội $\\lambda_1$) bằng",
  "options": [
   "$2$.",
   "$3$.",
   "$4$.",
   "$\\dfrac{1}{2}$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $\\det(L - \\lambda I) = \\begin{vmatrix} 0 - \\lambda & 8 \\\\ \\dfrac{1}{2} & -\\lambda \\end{vmatrix} = \\lambda^2 - 0\\lambda - 4 = 0$.<br>Biệt thức: $\\Delta = (0)^2 - 4(1)(-4) = 0 + 16 = 16$.<br>Trị riêng dương trội: $\\lambda_1 = \\dfrac{0 + \\sqrt{16}}{2} = 2$.",
  "topic": "tr",
  "type": "mcq",
  "id": "tr-107"
 },
 {
  "q": "Trong sinh thái học bảo tồn, cấu trúc tuổi của một quần thể động vật được mô hình hóa bằng ma trận Leslie $L = \\begin{pmatrix} 1 & 2 \\\\ \\dfrac{1}{2} & 0 \\end{pmatrix}$, trong đó hàng đầu thể hiện mức sinh sản của từng nhóm tuổi và $s_1$ là tỷ lệ sống sót chuyển giai đoạn. Tốc độ tăng trưởng dài hạn của quần thể (trị riêng dương trội $\\lambda_1$) bằng",
  "options": [
   "$\\dfrac{1}{2} + \\dfrac{\\sqrt{5}}{2}$.",
   "$\\dfrac{\\sqrt{5}}{2} + \\dfrac{3}{2}$.",
   "$1 + \\sqrt{5}$.",
   "$1$."
  ],
  "answer": 0,
  "explain": "Phương trình đặc trưng: $\\det(L - \\lambda I) = \\begin{vmatrix} 1 - \\lambda & 2 \\\\ \\dfrac{1}{2} & -\\lambda \\end{vmatrix} = \\lambda^2 - 1\\lambda - 1 = 0$.<br>Biệt thức: $\\Delta = (1)^2 - 4(1)(-1) = 1 + 4 = 5$.<br>Trị riêng dương trội: $\\lambda_1 = \\dfrac{1 + \\sqrt{5}}{2} = \\dfrac{1}{2} + \\dfrac{\\sqrt{5}}{2}$.",
  "topic": "tr",
  "type": "mcq",
  "id": "tr-108"
 },
 {
  "q": "Trong phân tích độ phức tạp thuật toán, xét hai thuật toán $A_1$ có thời gian chạy $f(n) = n^2$ và $A_2$ có thời gian chạy hàm mũ $g(n) = 2^n$ khi kích thước đầu vào $n \\to +\\infty$. Giới hạn tỷ số thời gian chạy $L = \\lim\\limits_{n\\to +\\infty} \\dfrac{n^2}{2^n}$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$2$.",
   "$\\infty$."
  ],
  "answer": 0,
  "explain": "Áp dụng quy tắc L'Hôpital liên tiếp $2$ lần đối với dạng vô định $\\left[\\dfrac{\\infty}{\\infty}\\right]$:<br>Đạo hàm tử số $2$ lần thu được: $(n^2)^{(2)} = 2!$.<br>Đạo hàm mẫu số $2$ lần: $(2^n)^{(2)} = 2^n (\\ln 2)^2$.<br>Do đó: $L = \\lim\\limits_{n\\to +\\infty} \\dfrac{2!}{2^n (\\ln 2)^2} = 0$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-076"
 },
 {
  "q": "Trong phân tích độ phức tạp thuật toán, xét hai thuật toán $A_1$ có thời gian chạy $f(n) = n^3$ và $A_2$ có thời gian chạy hàm mũ $g(n) = 3^n$ khi kích thước đầu vào $n \\to +\\infty$. Giới hạn tỷ số thời gian chạy $L = \\lim\\limits_{n\\to +\\infty} \\dfrac{n^3}{3^n}$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$3$.",
   "$\\infty$."
  ],
  "answer": 0,
  "explain": "Áp dụng quy tắc L'Hôpital liên tiếp $3$ lần đối với dạng vô định $\\left[\\dfrac{\\infty}{\\infty}\\right]$:<br>Đạo hàm tử số $3$ lần thu được: $(n^3)^{(3)} = 3!$.<br>Đạo hàm mẫu số $3$ lần: $(3^n)^{(3)} = 3^n (\\ln 3)^3$.<br>Do đó: $L = \\lim\\limits_{n\\to +\\infty} \\dfrac{3!}{3^n (\\ln 3)^3} = 0$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-077"
 },
 {
  "q": "Trong phân tích độ phức tạp thuật toán, xét hai thuật toán $A_1$ có thời gian chạy $f(n) = n^5$ và $A_2$ có thời gian chạy hàm mũ $g(n) = 5^n$ khi kích thước đầu vào $n \\to +\\infty$. Giới hạn tỷ số thời gian chạy $L = \\lim\\limits_{n\\to +\\infty} \\dfrac{n^5}{5^n}$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$5$.",
   "$\\infty$."
  ],
  "answer": 0,
  "explain": "Áp dụng quy tắc L'Hôpital liên tiếp $5$ lần đối với dạng vô định $\\left[\\dfrac{\\infty}{\\infty}\\right]$:<br>Đạo hàm tử số $5$ lần thu được: $(n^5)^{(5)} = 5!$.<br>Đạo hàm mẫu số $5$ lần: $(5^n)^{(5)} = 5^n (\\ln 5)^5$.<br>Do đó: $L = \\lim\\limits_{n\\to +\\infty} \\dfrac{5!}{5^n (\\ln 5)^5} = 0$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-078"
 },
 {
  "q": "Trong phân tích độ phức tạp thuật toán, xét hai thuật toán $A_1$ có thời gian chạy $f(n) = n^10$ và $A_2$ có thời gian chạy hàm mũ $g(n) = 10^n$ khi kích thước đầu vào $n \\to +\\infty$. Giới hạn tỷ số thời gian chạy $L = \\lim\\limits_{n\\to +\\infty} \\dfrac{n^10}{10^n}$ bằng",
  "options": [
   "$0$.",
   "$1$.",
   "$10$.",
   "$\\infty$."
  ],
  "answer": 0,
  "explain": "Áp dụng quy tắc L'Hôpital liên tiếp $10$ lần đối với dạng vô định $\\left[\\dfrac{\\infty}{\\infty}\\right]$:<br>Đạo hàm tử số $10$ lần thu được: $(n^10)^{(10)} = 10!$.<br>Đạo hàm mẫu số $10$ lần: $(10^n)^{(10)} = 10^n (\\ln 10)^10$.<br>Do đó: $L = \\lim\\limits_{n\\to +\\infty} \\dfrac{10!}{10^n (\\ln 10)^10} = 0$.",
  "topic": "gh",
  "type": "mcq",
  "id": "gh-079"
 },
 {
  "q": "Một hệ dao động cơ học không cản chịu ngoại lực kích thích tuần hoàn điều hòa đúng bằng tần số riêng (hiện tượng cộng hưởng cơ học): $y'' + 4y = 12\\cos(2t)$. Biết nghiệm riêng của bài toán có dạng dao động biên độ tăng dần theo thời gian $y^*(t) = A\\,t\\sin(2t)$, giá trị của hệ số biên độ $A$ bằng",
  "options": [
   "$3$.",
   "$6$.",
   "$\\dfrac{3}{2}$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình thuần nhất có nghiệm đặc trưng $k = \\pm 2i$.<br>Vì vế phải có dạng $\\cos(2t)$ nên xảy ra hiện tượng cộng hưởng, nghiệm riêng có dạng $y^* = A\\,t\\sin(2t)$.<br>Đạo hàm cấp 1: $(y^*)^\\prime = A\\sin(2t) + 2At\\cos(2t)$.<br>Đạo hàm cấp 2: $(y^*)^{\\prime\\prime} = 4A\\cos(2t) - 4At\\sin(2t)$.<br>Thế vào phương trình: $(y^*)^{\\prime\\prime} + 4y^* = 4A\\cos(2t) = 12\\cos(2t)$.<br>Suy ra: $4A = 12 \\Rightarrow A = \\dfrac{12}{4} = 3$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-140"
 },
 {
  "q": "Một hệ dao động cơ học không cản chịu ngoại lực kích thích tuần hoàn điều hòa đúng bằng tần số riêng (hiện tượng cộng hưởng cơ học): $y'' + 9y = 18\\cos(3t)$. Biết nghiệm riêng của bài toán có dạng dao động biên độ tăng dần theo thời gian $y^*(t) = A\\,t\\sin(3t)$, giá trị của hệ số biên độ $A$ bằng",
  "options": [
   "$3$.",
   "$6$.",
   "$\\dfrac{3}{2}$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình thuần nhất có nghiệm đặc trưng $k = \\pm 3i$.<br>Vì vế phải có dạng $\\cos(3t)$ nên xảy ra hiện tượng cộng hưởng, nghiệm riêng có dạng $y^* = A\\,t\\sin(3t)$.<br>Đạo hàm cấp 1: $(y^*)^\\prime = A\\sin(3t) + 3At\\cos(3t)$.<br>Đạo hàm cấp 2: $(y^*)^{\\prime\\prime} = 6A\\cos(3t) - 9At\\sin(3t)$.<br>Thế vào phương trình: $(y^*)^{\\prime\\prime} + 9y^* = 6A\\cos(3t) = 18\\cos(3t)$.<br>Suy ra: $6A = 18 \\Rightarrow A = \\dfrac{18}{6} = 3$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-141"
 },
 {
  "q": "Một hệ dao động cơ học không cản chịu ngoại lực kích thích tuần hoàn điều hòa đúng bằng tần số riêng (hiện tượng cộng hưởng cơ học): $y'' + 16y = 16\\cos(4t)$. Biết nghiệm riêng của bài toán có dạng dao động biên độ tăng dần theo thời gian $y^*(t) = A\\,t\\sin(4t)$, giá trị của hệ số biên độ $A$ bằng",
  "options": [
   "$2$.",
   "$4$.",
   "$1$.",
   "$3$."
  ],
  "answer": 0,
  "explain": "Phương trình thuần nhất có nghiệm đặc trưng $k = \\pm 4i$.<br>Vì vế phải có dạng $\\cos(4t)$ nên xảy ra hiện tượng cộng hưởng, nghiệm riêng có dạng $y^* = A\\,t\\sin(4t)$.<br>Đạo hàm cấp 1: $(y^*)^\\prime = A\\sin(4t) + 4At\\cos(4t)$.<br>Đạo hàm cấp 2: $(y^*)^{\\prime\\prime} = 8A\\cos(4t) - 16At\\sin(4t)$.<br>Thế vào phương trình: $(y^*)^{\\prime\\prime} + 16y^* = 8A\\cos(4t) = 16\\cos(4t)$.<br>Suy ra: $8A = 16 \\Rightarrow A = \\dfrac{16}{8} = 2$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-142"
 },
 {
  "q": "Một hệ dao động cơ học không cản chịu ngoại lực kích thích tuần hoàn điều hòa đúng bằng tần số riêng (hiện tượng cộng hưởng cơ học): $y'' + 25y = 25\\cos(5t)$. Biết nghiệm riêng của bài toán có dạng dao động biên độ tăng dần theo thời gian $y^*(t) = A\\,t\\sin(5t)$, giá trị của hệ số biên độ $A$ bằng",
  "options": [
   "$\\dfrac{5}{2}$.",
   "$5$.",
   "$\\dfrac{5}{4}$.",
   "$\\dfrac{7}{2}$."
  ],
  "answer": 0,
  "explain": "Phương trình thuần nhất có nghiệm đặc trưng $k = \\pm 5i$.<br>Vì vế phải có dạng $\\cos(5t)$ nên xảy ra hiện tượng cộng hưởng, nghiệm riêng có dạng $y^* = A\\,t\\sin(5t)$.<br>Đạo hàm cấp 1: $(y^*)^\\prime = A\\sin(5t) + 5At\\cos(5t)$.<br>Đạo hàm cấp 2: $(y^*)^{\\prime\\prime} = 10A\\cos(5t) - 25At\\sin(5t)$.<br>Thế vào phương trình: $(y^*)^{\\prime\\prime} + 25y^* = 10A\\cos(5t) = 25\\cos(5t)$.<br>Suy ra: $10A = 25 \\Rightarrow A = \\dfrac{25}{10} = \\dfrac{5}{2}$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-143"
 },
 {
  "q": "Một hệ dao động cơ học không cản chịu ngoại lực kích thích tuần hoàn điều hòa đúng bằng tần số riêng (hiện tượng cộng hưởng cơ học): $y'' + 1y = 6\\cos(1t)$. Biết nghiệm riêng của bài toán có dạng dao động biên độ tăng dần theo thời gian $y^*(t) = A\\,t\\sin(1t)$, giá trị của hệ số biên độ $A$ bằng",
  "options": [
   "$3$.",
   "$6$.",
   "$\\dfrac{3}{2}$.",
   "$4$."
  ],
  "answer": 0,
  "explain": "Phương trình thuần nhất có nghiệm đặc trưng $k = \\pm 1i$.<br>Vì vế phải có dạng $\\cos(1t)$ nên xảy ra hiện tượng cộng hưởng, nghiệm riêng có dạng $y^* = A\\,t\\sin(1t)$.<br>Đạo hàm cấp 1: $(y^*)^\\prime = A\\sin(1t) + 1At\\cos(1t)$.<br>Đạo hàm cấp 2: $(y^*)^{\\prime\\prime} = 2A\\cos(1t) - 1At\\sin(1t)$.<br>Thế vào phương trình: $(y^*)^{\\prime\\prime} + 1y^* = 2A\\cos(1t) = 6\\cos(1t)$.<br>Suy ra: $2A = 6 \\Rightarrow A = \\dfrac{6}{2} = 3$.",
  "topic": "v2",
  "type": "mcq",
  "id": "v2-144"
 }
];
