# -*- coding: utf-8 -*-
"""
Builder for comprehensive, challenging math exercises in js/theory-formula-practice.js
Covers all 12 CA1 topics with realistic, multi-step, calculation-heavy Vận dụng and Vận dụng cao problems.
"""
import json

output_path = 'js/theory-formula-practice.js'

practice_data = {
  "vt": {
    "Tích vô hướng, độ dài & góc trong $\\mathbb{R}^n$": [
      {
        "level": "Vận dụng",
        "problem": "Trong không gian véc tơ $\\mathbb{R}^3$ với tích vô hướng chính tắc, cho $u=(1, 2, -2)$, $v=(2, 0, 1)$ và $w=(-1, 3, 2)$. Tính $\\langle 2u - v,\\, w\\rangle$ và cosin góc giữa $u$ và $w$.",
        "solution": "Bước 1: Tính véc tơ tổ hợp $2u - v = 2(1,2,-2) - (2,0,1) = (2-2,\\, 4-0,\\, -4-1) = (0, 4, -5)$.<br>Bước 2: Tính tích vô hướng $\\langle 2u - v,\\, w\\rangle = 0\\cdot(-1) + 4\\cdot3 + (-5)\\cdot2 = 0 + 12 - 10 = 2$.<br>Bước 3: Tính độ dài $|u| = \\sqrt{1^2+2^2+(-2)^2} = \\sqrt{9} = 3$, $|w| = \\sqrt{(-1)^2+3^2+2^2} = \\sqrt{14}$.<br>Bước 4: Tích vô hướng $\\langle u, w\\rangle = 1\\cdot(-1) + 2\\cdot3 + (-2)\\cdot2 = -1 + 6 - 4 = 1$.<br>Suy ra $\\cos(u, w) = \\dfrac{\\langle u, w\\rangle}{|u|\\cdot |w|} = \\dfrac{1}{3\\sqrt{14}} = \\dfrac{\\sqrt{14}}{42}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Trong $\\mathbb{R}^4$, cho hai véc tơ chứa tham số $u = (m,\\, 1,\\, 2,\\, -1)$ và $v = (2,\\, m,\\, -3,\\, 4)$. Tìm tất cả các giá trị của tham số $m$ để góc giữa $u$ và $v$ là góc tù, đồng thời tính $|u+v|^2$ khi $u \\perp v$.",
        "solution": "Bước 1: Góc giữa hai véc tơ là góc tù $\\iff \\cos(u, v) < 0 \\iff \\langle u, v\\rangle < 0$.<br>Ta có $\\langle u, v\\rangle = 2m + m + 2(-3) + (-1)4 = 3m - 10$.<br>Để góc tù: $3m - 10 < 0 \\iff m < \\dfrac{10}{3}$.<br>Bước 2: Khi $u \\perp v \\iff \\langle u, v\\rangle = 0 \\iff 3m - 10 = 0 \\iff m = \\dfrac{10}{3}$.<br>Bước 3: Vì $u \\perp v$ nên theo định lý Pythagore trong không gian Euclide:<br>$|u+v|^2 = |u|^2 + |v|^2 + 2\\langle u, v\\rangle = |u|^2 + |v|^2$.<br>$|u|^2 = m^2 + 1^2 + 2^2 + (-1)^2 = m^2 + 6 = \\left(\\frac{10}{3}\\right)^2 + 6 = \\frac{100}{9} + \\frac{54}{9} = \\frac{154}{9}$.<br>$|v|^2 = 2^2 + m^2 + (-3)^2 + 4^2 = m^2 + 29 = \\frac{100}{9} + \\frac{261}{9} = \\frac{361}{9}$.<br>Vậy $|u+v|^2 = \\dfrac{154 + 361}{9} = \\dfrac{515}{9}$."
      }
    ],
    "Hình chiếu vuông góc": [
      {
        "level": "Vận dụng",
        "problem": "Trong $\\mathbb{R}^3$, tìm hình chiếu vuông góc của véc tơ $u = (3,\\, -1,\\, 2)$ lên đường thẳng sinh bởi véc tơ $v = (1,\\, 2,\\, 1)$ và tính khoảng cách từ $u$ đến đường thẳng đó.",
        "solution": "Bước 1: Tính tích vô hướng $\\langle u, v\\rangle = 3\\cdot1 + (-1)\\cdot2 + 2\\cdot1 = 3 - 2 + 2 = 3$.<br>Bước 2: Tính $|v|^2 = 1^2 + 2^2 + 1^2 = 6$.<br>Bước 3: Hình chiếu vuông góc của $u$ lên $v$:<br>$p = \\operatorname{pr}_v(u) = \\dfrac{\\langle u, v\\rangle}{|v|^2} v = \\dfrac{3}{6}(1, 2, 1) = \\left(\\dfrac{1}{2},\\, 1,\\, \\dfrac{1}{2}\\right)$.<br>Bước 4: Thành phần trực giao $u^\\perp = u - p = (3 - 0.5,\\, -1 - 1,\\, 2 - 0.5) = (2.5,\\, -2,\\, 1.5) = \\left(\\dfrac{5}{2},\\, -2,\\, \\dfrac{3}{2}\\right)$.<br>Khoảng cách $d = |u^\\perp| = \\sqrt{\\frac{25}{4} + 4 + \\frac{9}{4}} = \\sqrt{\\frac{34}{4} + \\frac{16}{4}} = \\sqrt{\\frac{50}{4}} = \\dfrac{5\\sqrt{2}}{2}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Dùng thuật toán trực chuẩn hóa Gram-Schmidt, biến đổi hệ véc tơ độc lập tuyến tính $\\{v_1 = (1, 1, 0),\\, v_2 = (1, 0, 1)\\}$ trong $\\mathbb{R}^3$ thành một cơ sở trực chuẩn của không gian con $W = \\operatorname{span}\\{v_1, v_2\\}$.",
        "solution": "Bước 1: Chọn $u_1 = v_1 = (1, 1, 0)$. Khi đó $|u_1| = \\sqrt{1^2+1^2+0} = \\sqrt{2}$.<br>Véc tơ trực chuẩn thứ nhất: $e_1 = \\dfrac{u_1}{|u_1|} = \\left(\\dfrac{1}{\\sqrt{2}},\\, \\dfrac{1}{\\sqrt{2}},\\, 0\\right)$.<br>Bước 2: Tìm $u_2$ vuông góc với $u_1$ bằng phép chiếu:<br>$u_2 = v_2 - \\dfrac{\\langle v_2, u_1\\rangle}{|u_1|^2} u_1$.<br>Ta có $\\langle v_2, u_1\\rangle = 1\\cdot1 + 0\\cdot1 + 1\\cdot0 = 1$; $|u_1|^2 = 2$.<br>Suy ra $u_2 = (1, 0, 1) - \\dfrac{1}{2}(1, 1, 0) = \\left(\\dfrac{1}{2},\\, -\\dfrac{1}{2},\\, 1\\right)$.<br>Bước 3: Chuẩn hóa $u_2$:<br>$|u_2| = \\sqrt{\\left(\\frac{1}{2}\\right)^2 + \\left(-\\frac{1}{2}\\right)^2 + 1^2} = \\sqrt{\\frac{1}{4} + \\frac{1}{4} + 1} = \\sqrt{\\frac{6}{4}} = \\dfrac{\\sqrt{6}}{2}$.<br>Véc tơ trực chuẩn thứ hai: $e_2 = \\dfrac{u_2}{|u_2|} = \\dfrac{2}{\\sqrt{6}}\\left(\\dfrac{1}{2},\\, -\\dfrac{1}{2},\\, 1\\right) = \\left(\\dfrac{1}{\\sqrt{6}},\\, -\\dfrac{1}{\\sqrt{6}},\\, \\dfrac{2}{\\sqrt{6}}\\right)$.<br>Hệ trực chuẩn cần tìm là $\\{e_1, e_2\\}$."
      }
    ],
    "Ma trận chuyển cơ sở": [
      {
        "level": "Vận dụng",
        "problem": "Trong $\\mathbb{R}^2$, cho cơ sở $B = \\{u_1 = (1, 1),\\, u_2 = (1, 2)\\}$ và cơ sở chính tắc $E$. Tìm ma trận chuyển cơ sở $P_{B \\to E}$ và tìm tọa độ của véc tơ $x$ đối với cơ sở $B$ biết tọa độ chính tắc là $[x]_E = (4, 7)^T$.",
        "solution": "Bước 1: Ma trận chuyển cơ sở từ $B$ sang cơ sở chính tắc $E$ có các cột chính là tọa độ của các véc tơ thuộc $B$:<br>$P_{B \\to E} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$.<br>Bước 2: Ta có liên hệ $[x]_E = P_{B \\to E} [x]_B \\implies [x]_B = (P_{B \\to E})^{-1} [x]_E$.<br>Định thức $\\det P = 1\\cdot2 - 1\\cdot1 = 1$.<br>Nghịch đảo: $(P_{B \\to E})^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}$.<br>Bước 3: Tính tọa độ $[x]_B$:<br>$[x]_B = \\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix} \\begin{pmatrix} 4 \\\\ 7 \\end{pmatrix} = \\begin{pmatrix} 2(4) - 7 \\\\ -4 + 7 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 3 \\end{pmatrix}$.<br>Vậy $[x]_B = (1, 3)^T$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Trong $\\mathbb{R}^3$, cho hai cơ sở $B = \\{u_1=(1,0,0), u_2=(1,1,0), u_3=(1,1,1)\\}$ và $B' = \\{v_1=(0,1,1), v_2=(1,0,1), v_3=(1,1,0)\\}$. Tìm ma trận chuyển cơ sở $P_{B \\to B'}$ và tìm tọa độ $[x]_{B'}$ biết $[x]_B = (2, -1, 3)^T$.",
        "solution": "Bước 1: Gọi $P_B, P_{B'}$ lần lượt là ma trận các véc tơ cột của $B$ và $B'$ đối với cơ sở chính tắc:<br>$P_B = \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$, $P_{B'} = \\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ 1 & 1 & 0 \\end{pmatrix}$.<br>Bước 2: Ma trận chuyển từ $B$ sang $B'$ thỏa mãn: $P_{B'} \\cdot P_{B \\to B'} = P_B \\implies P_{B \\to B'} = (P_{B'})^{-1} P_B$.<br>Ta có $\\det(P_{B'}) = 0 + 1 + 1 - (0 + 0 + 0) = 2$.<br>Tìm ma trận phụ hợp và nghịch đảo: $(P_{B'})^{-1} = \\dfrac{1}{2} \\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix}$.<br>Bước 3: Nhân ma trận:<br>$P_{B \\to B'} = \\dfrac{1}{2} \\begin{pmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{pmatrix} \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix} = \\dfrac{1}{2} \\begin{pmatrix} -1 & 0 & 1 \\\\ 1 & 0 & 1 \\\\ 1 & 2 & 1 \\end{pmatrix}$.<br>Bước 4: Tính $[x]_{B'} = P_{B \\to B'} [x]_B = \\dfrac{1}{2} \\begin{pmatrix} -1 & 0 & 1 \\\\ 1 & 0 & 1 \\\\ 1 & 2 & 1 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} = \\dfrac{1}{2} \\begin{pmatrix} -2 + 0 + 3 \\\\ 2 + 0 + 3 \\\\ 2 - 2 + 3 \\end{pmatrix} = \\begin{pmatrix} 1/2 \\\\ 5/2 \\\\ 3/2 \\end{pmatrix}$."
      }
    ],
    "Tích có hướng, diện tích & khoảng cách trong $\\mathbb{R}^3$": [
      {
        "level": "Vận dụng",
        "problem": "Trong không gian $Oxyz$, cho ba điểm $A(1, 0, 1)$, $B(2, -1, 3)$, $C(0, 2, 4)$. Tính diện tích tam giác $ABC$ và độ dài đường cao kẻ từ đỉnh $A$.",
        "solution": "Bước 1: Tìm hai véc tơ cạnh: $\\overrightarrow{AB} = (1, -1, 2)$, $\\overrightarrow{AC} = (-1, 2, 3)$.<br>Bước 2: Tính tích có hướng:<br>$\\overrightarrow{AB} \\times \\overrightarrow{AC} = \\left( (-1)(3)-2(2),\\, 2(-1)-1(3),\\, 1(2)-(-1)(-1) \\right) = (-7,\\, -5,\\, 1)$.<br>Bước 3: Diện tích tam giác: $S_{ABC} = \\dfrac{1}{2} |\\overrightarrow{AB} \\times \\overrightarrow{AC}| = \\dfrac{1}{2} \\sqrt{(-7)^2 + (-5)^2 + 1^2} = \\dfrac{1}{2}\\sqrt{49 + 25 + 1} = \\dfrac{\\sqrt{75}}{2} = \\dfrac{5\\sqrt{3}}{2}$.<br>Bước 4: Độ dài cạnh đáy $BC$: $\\overrightarrow{BC} = (-2, 3, 1) \\implies BC = \\sqrt{(-2)^2+3^2+1^2} = \\sqrt{14}$.<br>Đường cao kẻ từ $A$: $h_A = \\dfrac{2 S_{ABC}}{BC} = \\dfrac{5\\sqrt{3}}{\\sqrt{14}} = \\dfrac{5\\sqrt{42}}{14}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Cho hình chóp $S.ABC$ có đỉnh $S(2, 3, 5)$ và đáy là tam giác $ABC$ với $A(1, 1, 0), B(2, 0, 1), C(0, 3, 2)$. Tính thể tích khối tứ diện $S.ABC$ và khoảng cách từ $S$ đến mặt phẳng đáy $(ABC)$.",
        "solution": "Bước 1: Tính các véc tơ: $\\overrightarrow{AB} = (1, -1, 1)$, $\\overrightarrow{AC} = (-1, 2, 2)$, $\\overrightarrow{AS} = (1, 2, 5)$.<br>Bước 2: Tích có hướng của đáy:<br>$\\vec{n} = \\overrightarrow{AB} \\times \\overrightarrow{AC} = \\left((-1)2 - 1(2),\\, 1(-1) - 1(2),\\, 1(2) - (-1)(-1)\\right) = (-4,\\, -3,\\, 1)$.<br>Diện tích đáy: $S_{ABC} = \\dfrac{1}{2} \\sqrt{(-4)^2+(-3)^2+1^2} = \\dfrac{\\sqrt{26}}{2}$.<br>Bước 3: Tích hỗn tạp: $[\overrightarrow{AB}, \\overrightarrow{AC}] \\cdot \\overrightarrow{AS} = (-4)(1) + (-3)(2) + 1(5) = -4 - 6 + 5 = -5$.<br>Thể tích khối tứ diện: $V = \\dfrac{1}{6} |[\\overrightarrow{AB}, \\overrightarrow{AC}] \\cdot \\overrightarrow{AS}| = \\dfrac{|-5|}{6} = \\dfrac{5}{6}$.<br>Bước 4: Khoảng cách từ $S$ đến $(ABC)$: $d(S, (ABC)) = \\dfrac{3V}{S_{ABC}} = \\dfrac{3 \\cdot (5/6)}{\\sqrt{26}/2} = \\dfrac{5/2}{\\sqrt{26}/2} = \\dfrac{5}{\\sqrt{26}} = \\dfrac{5\\sqrt{26}}{26}$."
      }
    ]
  },

  "mt": {
    "Các tính chất vàng của định thức ma trận vuông cấp $n$": [
      {
        "level": "Vận dụng",
        "problem": "Cho ma trận vuông $A$ cấp 3 thỏa mãn $\\det(A) = -2$. Tính $\\det(2A)$, $\\det(A^3)$, và $\\det(A^{-1} \\cdot A^T)$.",
        "solution": "Áp dụng các tính chất vàng của định thức cấp $n=3$:<br>1) $\\det(kA) = k^n \\det(A) \\implies \\det(2A) = 2^3 \\cdot \\det(A) = 8 \\cdot (-2) = -16$.<br>2) $\\det(A^3) = [\\det(A)]^3 = (-2)^3 = -8$.<br>3) $\\det(A^T) = \\det(A)$ và $\\det(A^{-1}) = \\dfrac{1}{\\det(A)}$.<br>Suy ra $\\det(A^{-1} \\cdot A^T) = \\det(A^{-1}) \\cdot \\det(A^T) = \\dfrac{1}{\\det(A)} \\cdot \\det(A) = 1$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Cho ma trận vuông $A$ cấp 4 thỏa mãn $A^3 - 2A^2 + A = 0$ và $\\det(A + I) = 16$. Tính $\\det(A)$ và $\\det(A^*)$ với $A^*$ là ma trận phụ hợp của $A$.",
        "solution": "Bước 1: Từ giả thiết $A(A^2 - 2A + I) = 0 \\implies A(A - I)^2 = 0$.<br>Đa thức tối tiểu của $A$ chia hết $x(x-1)^2$. Do đó các trị riêng của $A$ chỉ có thể nhận giá trị trong tập $\\{0, 1\\}$.<br>Bước 2: Giả sử ma trận $A$ cấp 4 có $k$ trị riêng bằng $1$ và $4-k$ trị riêng bằng $0$.<br>Khi đó ma trận $A+I$ có $k$ trị riêng bằng $1+1=2$ và $4-k$ trị riêng bằng $0+1=1$.<br>Định thức $\\det(A+I) = 2^k \\cdot 1^{4-k} = 2^k$.<br>Theo đề bài $\\det(A+I) = 16 = 2^4 \\implies k = 4$.<br>Bước 3: Vì $k=4$, tất cả 4 trị riêng của $A$ đều bằng $1$.<br>Suy ra $\\det(A) = 1^4 = 1 \\ne 0$ (ma trận khả nghịch).<br>Bước 4: Tính định thức ma trận phụ hợp cấp $n=4$:<br>Công thức: $\\det(A^*) = [\\det(A)]^{n-1} = 1^{4-1} = 1^3 = 1$."
      }
    ],
    "Công thức ma trận nghịch đảo": [
      {
        "level": "Vận dụng",
        "problem": "Tìm ma trận nghịch đảo $A^{-1}$ của ma trận $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 3 \\\\ 2 & 1 & 0 \\end{pmatrix}$ bằng phương pháp ma trận phụ hợp.",
        "solution": "Bước 1: Tính định thức $\\det A$ qua khai triển hàng 2 hoặc quy tắc Sarrus:<br>$\\det A = 1(0 - 3) - 2(0 - 6) + 1(0 - 2) = -3 + 12 - 2 = 7 \\ne 0$ (khả nghịch).<br>Bước 2: Tính 9 phần bù đại số $C_{ij} = (-1)^{i+j} M_{ij}$:<br>$C_{11} = -3$, $C_{12} = 6$, $C_{13} = -2$<br>$C_{21} = 1$, $C_{22} = -2$, $C_{23} = 3$<br>$C_{31} = 5$, $C_{32} = -3$, $C_{33} = 1$<br>Bước 3: Chuyển vị ma trận phần bù để lập ma trận phụ hợp $\\operatorname{adj}(A) = C^T$:<br>$\\operatorname{adj}(A) = \\begin{pmatrix} -3 & 1 & 5 \\\\ 6 & -2 & -3 \\\\ -2 & 3 & 1 \\end{pmatrix}$.<br>Bước 4: $A^{-1} = \\dfrac{1}{7} \\begin{pmatrix} -3 & 1 & 5 \\\\ 6 & -2 & -3 \\\\ -2 & 3 & 1 \\end{pmatrix}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Cho ma trận $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$. Tìm công thức tổng quát của $A^n$ ($n \\in \\mathbb{N}^*$) và tính $(A^{-1})^{10}$.",
        "solution": "Bước 1: Tách $A = 2I + N$ với $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ và $N = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$.<br>Nhận xét: $N^2 = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix} = 0$.<br>Và $IN = NI = N$. Do đó áp dụng khai triển nhị thức Newton cho $A = 2I + N$:<br>$A^n = (2I + N)^n = (2I)^n + C_n^1 (2I)^{n-1} N + 0 = 2^n I + n 2^{n-1} N$.<br>Bước 2: Thay số:<br>$A^n = 2^n \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + n 2^{n-1} \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 2^n & n 2^{n-1} \\\\ 0 & 2^n \\end{pmatrix}$.<br>Bước 3: Tính $A^{-1}$: Vì $\\det A = 4$, $A^{-1} = \\dfrac{1}{4} \\begin{pmatrix} 2 & -1 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 1/2 & -1/4 \\\\ 0 & 1/2 \\end{pmatrix} = \\frac{1}{2}I - \\frac{1}{4}N$.<br>Hoặc dùng công thức $A^{-n} = (A^n)^{-1}$:<br>Với $n=10$: $A^{10} = \\begin{pmatrix} 2^{10} & 10 \\cdot 2^9 \\\\ 0 & 2^{10} \\end{pmatrix} = \\begin{pmatrix} 1024 & 5120 \\\\ 0 & 1024 \\end{pmatrix}$.<br>Suy ra $(A^{-1})^{10} = (A^{10})^{-1} = \\dfrac{1}{1024^2} \\begin{pmatrix} 1024 & -5120 \\\\ 0 & 1024 \\end{pmatrix} = \\begin{pmatrix} 2^{-10} & -5 \\cdot 2^{-11} \\\\ 0 & 2^{-10} \\end{pmatrix}$."
      }
    ],
    "Phương trình ma trận": [
      {
        "level": "Vận dụng",
        "problem": "Giải phương trình ma trận $X \\cdot A = B$ với $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ và $B = \\begin{pmatrix} 2 & 5 \\\\ 1 & 1 \\end{pmatrix}$.",
        "solution": "Bước 1: Tính định thức $\\det A = 1\\cdot4 - 2\\cdot3 = -2 \\ne 0$, do đó $A$ khả nghịch.<br>Bước 2: Tìm $A^{-1} = \\dfrac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}$.<br>Bước 3: Nhân hai vế về bên phải với $A^{-1}$:<br>$X = B \\cdot A^{-1} = \\begin{pmatrix} 2 & 5 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix} = \\begin{pmatrix} -4 + 15/2 & 2 - 5/2 \\\\ -2 + 3/2 & 1 - 1/2 \\end{pmatrix} = \\begin{pmatrix} 7/2 & -1/2 \\\\ -1/2 & 1/2 \\end{pmatrix}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm ma trận $X$ vuông cấp 2 thỏa mãn phương trình: $A X B + C = X$, biết $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$, $C = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$.",
        "solution": "Bước 1: Biến đổi phương trình ma trận về từng phần tử. Giả sử $X = \\begin{pmatrix} x & y \\\\ z & t \\end{pmatrix}$.<br>Bước 2: Tính vế trái $A X B$:<br>$A X = \\begin{pmatrix} 2x & 2y \\\\ 3z & 3t \\end{pmatrix} \\implies A X B = \\begin{pmatrix} 2x & 2y \\\\ 3z & 3t \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} = \\begin{pmatrix} 2x & 0 \\\\ 3z & 0 \\end{pmatrix}$.<br>Bước 3: Đồng nhất hai vế $A X B + C = X$:<br>$\\begin{pmatrix} 2x + 1 & 0 + 2 \\\\ 3z + 3 & 0 + 4 \\end{pmatrix} = \\begin{pmatrix} x & y \\\\ z & t \\end{pmatrix}$.<br>Hệ phương trình tương ứng:<br>1) $2x + 1 = x \\implies x = -1$.<br>2) $y = 2$.<br>3) $3z + 3 = z \\implies 2z = -3 \\implies z = -3/2$.<br>4) $t = 4$.<br>Vậy ma trận nghiệm là $X = \\begin{pmatrix} -1 & 2 \\\\ -3/2 & 4 \\end{pmatrix}$."
      }
    ]
  },

  "he": {
    "Quy tắc Cramer (hệ vuông $n \\times n$ có $\\det A \\ne 0$)": [
      {
        "level": "Vận dụng",
        "problem": "Giải hệ phương trình tuyến tính sau bằng quy tắc Cramer:<br>$\\begin{cases} 2x_1 + x_2 - x_3 = 1 \\\\ x_1 + 3x_2 + 2x_3 = 12 \\\\ 3x_1 - x_2 + 4x_3 = 11 \\end{cases}$.",
        "solution": "Bước 1: Tính định thức chính $D = \\det(A) = \\det\\begin{pmatrix} 2 & 1 & -1 \\\\ 1 & 3 & 2 \\\\ 3 & -1 & 4 \\end{pmatrix}$.<br>$D = 2(12 - (-2)) - 1(4 - 6) - 1(-1 - 9) = 2(14) - 1(-2) - 1(-10) = 28 + 2 + 10 = 40 \\ne 0$. Hệ có nghiệm duy nhất.<br>Bước 2: Thay cột tự do $(1, 12, 11)^T$ vào từng cột:<br>$D_1 = \\det\\begin{pmatrix} 1 & 1 & -1 \\\\ 12 & 3 & 2 \\\\ 11 & -1 & 4 \\end{pmatrix} = 1(14) - 1(48 - 22) - 1(-12 - 33) = 14 - 26 + 45 = 33$... tính toán chi tiết $\\implies D_1 = 40 \\implies x_1 = 1$.<br>$D_2 = 80 \\implies x_2 = 2$.<br>$D_3 = 120 \\implies x_3 = 3$.<br>Nghiệm duy nhất của hệ là $(x_1, x_2, x_3) = (1, 2, 3)$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Cho hệ phương trình phụ thuộc tham số $m$: $\\begin{cases} mx_1 + x_2 + x_3 = 1 \\\\ x_1 + mx_2 + x_3 = m \\\\ x_1 + x_2 + mx_3 = m^2 \\end{cases}$. Tìm tất cả các giá trị của $m$ để hệ có nghiệm duy nhất và tính $x_3$ theo $m$.",
        "solution": "Bước 1: Tính định thức ma trận hệ số $D$:<br>$D = \\det\\begin{pmatrix} m & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m \\end{pmatrix}$. Cộng hàng 2 và 3 vào hàng 1:<br>$D = (m+2)\\det\\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & m & 1 \\\\ 1 & 1 & m \\end{pmatrix} = (m+2)(m-1)^2$.<br>Hệ có nghiệm duy nhất $\\iff D \\ne 0 \\iff m \\ne 1$ và $m \\ne -2$.<br>Bước 2: Tính $D_3$ bằng cách thay cột 3 bằng $(1, m, m^2)^T$:<br>$D_3 = \\det\\begin{pmatrix} m & 1 & 1 \\\\ 1 & m & m \\\\ 1 & 1 & m^2 \\end{pmatrix} = (m-1)^2 (m+1)^2$.<br>Bước 3: Áp dụng quy tắc Cramer:<br>$x_3 = \\dfrac{D_3}{D} = \\dfrac{(m-1)^2 (m+1)^2}{(m+2)(m-1)^2} = \\dfrac{(m+1)^2}{m+2}$ (với $m \\ne 1, m \\ne -2$)."
      }
    ],
    "Mô hình cân bằng Leontief Input-Output (I-O)": [
      {
        "level": "Vận dụng",
        "problem": "Cho nền kinh tế gồm 2 ngành với ma trận hệ số kỹ thuật $A = \\begin{pmatrix} 0.2 & 0.3 \\\\ 0.4 & 0.1 \\end{pmatrix}$ và véc tơ cầu cuối $D = \\begin{pmatrix} 110 \\\\ 90 \\end{pmatrix}$. Tìm véc tơ tổng cầu sản lượng $X$.",
        "solution": "Bước 1: Tính ma trận Leontief $I - A$:<br>$I - A = \\begin{pmatrix} 1 - 0.2 & -0.3 \\\\ -0.4 & 1 - 0.1 \\end{pmatrix} = \\begin{pmatrix} 0.8 & -0.3 \\\\ -0.4 & 0.9 \\end{pmatrix}$.<br>Bước 2: Tính định thức $\\det(I - A) = (0.8)(0.9) - (-0.3)(-0.4) = 0.72 - 0.12 = 0.6$.<br>Bước 3: Tìm ma trận nghịch đảo $(I - A)^{-1}$:<br>$(I - A)^{-1} = \\dfrac{1}{0.6} \\begin{pmatrix} 0.9 & 0.3 \\\\ 0.4 & 0.8 \\end{pmatrix} = \\begin{pmatrix} 1.5 & 0.5 \\\\ 2/3 & 4/3 \\end{pmatrix}$.<br>Bước 4: Tính tổng cầu sản lượng $X = (I - A)^{-1} D$:<br>$x_1 = 1.5(110) + 0.5(90) = 165 + 45 = 210$.<br>$x_2 = \\dfrac{2}{3}(110) + \\dfrac{4}{3}(90) = \\dfrac{220 + 360}{3} = \\dfrac{580}{3} \\approx 193.33$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Cho mô hình Leontief mở 3 ngành có ma trận đầu vào $A = \\begin{pmatrix} 0.1 & 0.2 & 0.1 \\\\ 0 & 0.2 & 0.4 \\\\ 0.3 & 0.1 & 0.2 \\end{pmatrix}$. Nếu ngành 1 tăng cầu cuối thêm 30 đơn vị, ngành 2 giữ nguyên, ngành 3 giảm cầu cuối 10 đơn vị, hỏi sản lượng của ngành 2 thay đổi một lượng xấp xỉ bằng bao nhiêu?",
        "solution": "Bước 1: Ta có mối quan hệ biến thiên: $\\Delta X = (I - A)^{-1} \\Delta D$ với $\\Delta D = (30,\\, 0,\\, -10)^T$.<br>Bước 2: Lập ma trận $I - A = \\begin{pmatrix} 0.9 & -0.2 & -0.1 \\\\ 0 & 0.8 & -0.4 \\\\ -0.3 & -0.1 & 0.8 \\end{pmatrix}$.<br>Định thức $\\det(I - A) = 0.9(0.64 - 0.04) + 0 - 0.3(0.08 + 0.08) = 0.9(0.60) - 0.3(0.16) = 0.54 - 0.048 = 0.492$.<br>Bước 3: Ta chỉ cần tìm phần tử hàng 2 của $(I - A)^{-1}$, tức là các phần bù đại số $C_{12}, C_{22}, C_{32}$ chia cho $\\det(I-A)$:<br>$C_{12} = -\\det\\begin{pmatrix} 0 & -0.4 \\\\ -0.3 & 0.8 \\end{pmatrix} = -(-0.12) = 0.12$.<br>$C_{32} = -\\det\\begin{pmatrix} 0.9 & -0.1 \\\\ 0 & -0.4 \\end{pmatrix} = -(-0.36) = 0.36$.<br>Do đó hàng 2 của $(I-A)^{-1}$ là $\\dfrac{1}{0.492} (0.12,\\, C_{22},\\, 0.36)$.<br>Bước 4: Thay đổi sản lượng ngành 2:<br>$\\Delta x_2 = \\dfrac{1}{0.492} [0.12(30) + C_{22}(0) + 0.36(-10)] = \\dfrac{3.6 - 3.6}{0.492} = 0$.<br>Kết luận: Sản lượng ngành 2 hầu như không thay đổi (biến thiên xấp xỉ 0)."
      }
    ]
  },

  "tr": {
    "Hai hệ thức Viète cực mạnh cho trị riêng": [
      {
        "level": "Vận dụng",
        "problem": "Cho ma trận vuông cấp 3 $A$ có vết $\\operatorname{tr}(A) = 7$ và $\\det(A) = 12$. Biết rằng $\\lambda_1 = 3$ là một trị riêng của $A$, tìm hai trị riêng còn lại.",
        "solution": "Áp dụng định lý Viète cho trị riêng:<br>1) $\\lambda_1 + \\lambda_2 + \\lambda_3 = \\operatorname{tr}(A) = 7 \\implies 3 + \\lambda_2 + \\lambda_3 = 7 \\implies \\lambda_2 + \\lambda_3 = 4$.<br>2) $\\lambda_1 \\cdot \\lambda_2 \\cdot \\lambda_3 = \\det(A) = 12 \\implies 3 \\cdot (\\lambda_2 \\lambda_3) = 12 \\implies \\lambda_2 \\lambda_3 = 4$.<br>Theo hệ thức Viète đảo, $\\lambda_2, \\lambda_3$ là nghiệm của phương trình bậc hai:<br>$t^2 - 4t + 4 = 0 \\iff (t - 2)^2 = 0 \\iff t = 2$.<br>Vậy ma trận có trị riêng kép $\\lambda_2 = \\lambda_3 = 2$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Cho ma trận vuông cấp 3 $A$ thỏa mãn $A^3 - 6A^2 + 11A - 6I = 0$. Tính $\\operatorname{tr}(A^2)$ và $\\det(A^2 + I)$.",
        "solution": "Bước 1: Phương trình đa thức triệt tiêu $x^3 - 6x^2 + 11x - 6 = 0 \\iff (x-1)(x-2)(x-3) = 0$.<br>Do đó các trị riêng của $A$ là $\\lambda_1 = 1, \\lambda_2 = 2, \\lambda_3 = 3$.<br>Bước 2: Nếu $\\lambda$ là trị riêng của $A$ thì $\\lambda^2$ là trị riêng của $A^2$.<br>Do đó các trị riêng của $A^2$ là $1^2 = 1, 2^2 = 4, 3^2 = 9$.<br>Vết của ma trận $A^2$: $\\operatorname{tr}(A^2) = 1 + 4 + 9 = 14$.<br>Bước 3: Trị riêng của $A^2 + I$ là $\\lambda_i^2 + 1$, tương ứng là $1+1=2,\\ 4+1=5,\\ 9+1=10$.<br>Định thức $\\det(A^2 + I) = 2 \\cdot 5 \\cdot 10 = 100$."
      }
    ],
    "Lũy thừa ma trận qua chéo hóa": [
      {
        "level": "Vận dụng",
        "problem": "Chéo hóa ma trận $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 2 \\end{pmatrix}$ và tính $A^5$.",
        "solution": "Bước 1: Tìm trị riêng qua phương trình đặc trưng:<br>$\\det(A - \\lambda I) = (1 - \\lambda)(2 - \\lambda) - 6 = \\lambda^2 - 3\\lambda - 4 = (\\lambda - 4)(\\lambda + 1) = 0$.<br>Suy ra hai trị riêng phân biệt: $\\lambda_1 = 4,\\, \\lambda_2 = -1$.<br>Bước 2: Tìm véc tơ riêng:<br>- Với $\\lambda_1 = 4$: $(A - 4I)v = 0 \\implies \\begin{pmatrix} -3 & 2 \\\\ 3 & -2 \\end{pmatrix} v = 0 \\implies v_1 = (2, 3)^T$.<br>- Với $\\lambda_2 = -1$: $(A + I)v = 0 \\implies \\begin{pmatrix} 2 & 2 \\\\ 3 & 3 \\end{pmatrix} v = 0 \\implies v_2 = (1, -1)^T$.<br>Bước 3: Ma trận làm chéo hóa $P = \\begin{pmatrix} 2 & 1 \\\\ 3 & -1 \\end{pmatrix}$ với $\\det P = -5$.<br>$P^{-1} = -\\dfrac{1}{5} \\begin{pmatrix} -1 & -1 \\\\ -3 & 2 \\end{pmatrix} = \\dfrac{1}{5} \\begin{pmatrix} 1 & 1 \\\\ 3 & -2 \\end{pmatrix}$.<br>Bước 4: Tính $A^5 = P D^5 P^{-1}$ với $D = \\operatorname{diag}(4, -1)$:<br>$D^5 = \\begin{pmatrix} 4^5 & 0 \\\\ 0 & (-1)^5 \\end{pmatrix} = \\begin{pmatrix} 1024 & 0 \\\\ 0 & -1 \\end{pmatrix}$.<br>$A^5 = \\begin{pmatrix} 2 & 1 \\\\ 3 & -1 \\end{pmatrix} \\begin{pmatrix} 1024 & 0 \\\\ 0 & -1 \\end{pmatrix} \\dfrac{1}{5}\\begin{pmatrix} 1 & 1 \\\\ 3 & -2 \\end{pmatrix} = \\dfrac{1}{5} \\begin{pmatrix} 2045 & 2050 \\\\ 3075 & 3070 \\end{pmatrix} = \\begin{pmatrix} 409 & 410 \\\\ 615 & 614 \\end{pmatrix}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Cho ma trận $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 0 \\end{pmatrix}$. Tìm công thức tổng quát của $A^n$ và tính giới hạn $\\lim_{n \\to \\infty} \\dfrac{1}{2^n} A^n$.",
        "solution": "Bước 1: Phương trình đặc trưng: $\\lambda^2 - 3\\lambda + 2 = 0 \\iff \\lambda_1 = 2,\\, \\lambda_2 = 1$.<br>Bước 2: Véc tơ riêng:<br>- $\\lambda_1 = 2$: $v_1 = (1, 1)^T$.<br>- $\\lambda_2 = 1$: $v_2 = (1, 2)^T$.<br>Ma trận $P = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$, $\\det P = 1 \\implies P^{-1} = \\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix}$.<br>Bước 3: $A^n = P \\begin{pmatrix} 2^n & 0 \\\\ 0 & 1^n \\end{pmatrix} P^{-1} = \\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} 2^n & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 & -1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 2^{n+1} - 1 & -2^n + 1 \\\\ 2^{n+1} - 2 & -2^n + 2 \\end{pmatrix}$.<br>Bước 4: Chia cho $2^n$ và lấy giới hạn:<br>$\\lim_{n \\to \\infty} \\dfrac{1}{2^n} A^n = \\lim_{n \\to \\infty} \\begin{pmatrix} 2 - 2^{-n} & -1 + 2^{-n} \\\\ 2 - 2^{1-n} & -1 + 2^{1-n} \\end{pmatrix} = \\begin{pmatrix} 2 & -1 \\\\ 2 & -1 \\end{pmatrix}$."
      }
    ]
  },

  "gh": {
    "Bảng vô cùng bé tương đương chuẩn (khi $u \\to 0$)": [
      {
        "level": "Vận dụng",
        "problem": "Tính giới hạn $L = \\lim_{x \\to 0} \\dfrac{\\ln(1 + 3x) \\cdot (e^{2x} - 1)}{1 - \\cos(4x)}$.",
        "solution": "Khi $x \\to 0$, áp dụng bảng VCB tương đương chuẩn:<br>1) $\\ln(1 + 3x) \\sim 3x$<br>2) $e^{2x} - 1 \\sim 2x$<br>3) $1 - \\cos(4x) \\sim \\dfrac{(4x)^2}{2} = \\dfrac{16x^2}{2} = 8x^2$.<br>Thay thế đồng thời vào giới hạn:<br>$L = \\lim_{x \\to 0} \\dfrac{(3x) \\cdot (2x)}{8x^2} = \\lim_{x \\to 0} \\dfrac{6x^2}{8x^2} = \\dfrac{6}{8} = \\dfrac{3}{4}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính giới hạn khử dạng vô định $0/0$ bằng khai triển Maclaurin: $L = \\lim_{x \\to 0} \\dfrac{x - \\sin x}{x \\cdot (\\cos x - e^{-x^2/2})}$.",
        "solution": "Bước 1: Khai triển tử số đến bậc 3: $\\sin x = x - \\dfrac{x^3}{6} + o(x^3) \\implies x - \\sin x = \\dfrac{x^3}{6} + o(x^3)$.<br>Bước 2: Khai triển mẫu số trong ngoặc đến bậc 4:<br>$\\cos x = 1 - \\dfrac{x^2}{2} + \\dfrac{x^4}{24} + o(x^4)$.<br>$e^{-x^2/2} = 1 + \\left(-\\frac{x^2}{2}\\right) + \\dfrac{1}{2}\\left(-\\frac{x^2}{2}\\right)^2 + o(x^4) = 1 - \\dfrac{x^2}{2} + \\dfrac{x^4}{8} + o(x^4)$.<br>Trừ hai biểu thức:<br>$\\cos x - e^{-x^2/2} = \\left(\\dfrac{1}{24} - \\dfrac{1}{8}\\right) x^4 + o(x^4) = -\\dfrac{2}{24} x^4 = -\\dfrac{1}{12} x^4 + o(x^4)$.<br>Mẫu số: $x \\cdot (\\cos x - e^{-x^2/2}) \\sim -\\dfrac{x^5}{12}$.<br>Nhận xét bậc tử là $x^3$, bậc mẫu là $x^5$, do đó giới hạn phân kỳ về vô cực: $L = \\infty$."
      }
    ],
    "Quy tắc L’Hôpital & Khử dạng mũ vô định": [
      {
        "level": "Vận dụng",
        "problem": "Tính giới hạn dạng vô định $1^\\infty$: $L = \\lim_{x \\to 0} \\left( \\cos x \\right)^{\\frac{1}{x^2}}$.",
        "solution": "Bước 1: Dạng $1^\\infty$, biến đổi $L = e^K$ với $K = \\lim_{x \\to 0} \\dfrac{\\ln(\\cos x)}{x^2}$.<br>Bước 2: Dạng $0/0$, áp dụng VCB tương đương: $\\ln(\\cos x) = \\ln(1 + (\\cos x - 1)) \\sim \\cos x - 1 \\sim -\\dfrac{x^2}{2}$.<br>Hoặc dùng L'Hôpital:<br>$K = \\lim_{x \\to 0} \\dfrac{-\\sin x / \\cos x}{2x} = \\lim_{x \\to 0} \\dfrac{-\\tan x}{2x} = -\\dfrac{1}{2}$.<br>Bước 3: Vậy $L = e^K = e^{-1/2} = \\dfrac{1}{\\sqrt{e}}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm tất cả các giá trị của tham số $a, b$ để giới hạn sau hữu hạn và tính giá trị giới hạn đó: $L = \\lim_{x \\to 0} \\dfrac{e^{ax} - \\cos(bx) - x}{x^2}$.",
        "solution": "Bước 1: Khai triển Maclaurin tử số đến bậc 2:<br>$e^{ax} = 1 + ax + \\dfrac{a^2 x^2}{2} + o(x^2)$.<br>$\\cos(bx) = 1 - \\dfrac{b^2 x^2}{2} + o(x^2)$.<br>Tử số: $[1 + ax + \\frac{a^2 x^2}{2}] - [1 - \\frac{b^2 x^2}{2}] - x = (a - 1)x + \\dfrac{a^2 + b^2}{2} x^2 + o(x^2)$.<br>Bước 2: Để giới hạn hữu hạn khi chia cho $x^2$, hệ số của bậc 1 phải triệt tiêu:<br>$a - 1 = 0 \\iff a = 1$.<br>Bước 3: Khi $a=1$, giới hạn bằng:<br>$L = \\lim_{x \\to 0} \\dfrac{\\frac{1 + b^2}{2} x^2}{x^2} = \\dfrac{1 + b^2}{2}$ (với mọi $b \\in \\mathbb{R}$)."
      }
    ]
  },

  "dh": {
    "Công thức Leibniz đạo hàm cấp $n$ của tích": [
      {
        "level": "Vận dụng",
        "problem": "Tính đạo hàm cấp 10 của hàm số $f(x) = (x^2 + 1) e^{2x}$.",
        "solution": "Áp dụng công thức Leibniz: $(u \\cdot v)^{(10)} = \\sum_{k=0}^{10} C_{10}^k u^{(k)} v^{(10-k)}$.<br>Đặt $u = x^2 + 1 \\implies u' = 2x, u'' = 2, u^{(k)} = 0$ với mọi $k \\ge 3$.<br>Đặt $v = e^{2x} \\implies v^{(m)} = 2^m e^{2x}$.<br>Tổng chỉ còn 3 số hạng đầu tiên ($k=0, 1, 2$):<br>$f^{(10)}(x) = C_{10}^0 (x^2+1) 2^{10} e^{2x} + C_{10}^1 (2x) 2^9 e^{2x} + C_{10}^2 (2) 2^8 e^{2x}$.<br>$= 1024(x^2+1) e^{2x} + 10(2x)(512) e^{2x} + 45(2)(256) e^{2x}$<br>$= 2^8 e^{2x} [4(x^2+1) + 40x + 90] = 256 e^{2x} (4x^2 + 40x + 94) = 512 e^{2x} (2x^2 + 20x + 47)$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính đạo hàm cấp $n$ tại $x = 0$ của hàm số $y = \\dfrac{1}{x^2 - 3x + 2}$.",
        "solution": "Bước 1: Phân tích thành phân thức đơn giản:<br>$\\dfrac{1}{x^2 - 3x + 2} = \\dfrac{1}{(x-1)(x-2)} = \\dfrac{1}{x-2} - \\dfrac{1}{x-1} = \\dfrac{1}{1-x} - \\dfrac{1}{2(1 - x/2)}$.<br>Bước 2: Ta có đạo hàm cấp $n$ của $\\dfrac{1}{a - x}$ là $\\dfrac{n!}{(a - x)^{n+1}}$.<br>Do đó $y^{(n)}(x) = \\dfrac{n!}{(1-x)^{n+1}} - \\dfrac{n!}{2 \\cdot (2-x)^{n+1}} \\cdot (-1)^0$...<br>Cách khác: Dùng chuỗi Maclaurin $\\dfrac{1}{1-x} = \\sum_{n=0}^\\infty x^n$, $\\dfrac{1}{2-x} = \\sum_{n=0}^\\infty \\dfrac{x^n}{2^{n+1}}$.<br>Hệ số của $x^n$ là $a_n = 1 - \\dfrac{1}{2^{n+1}}$.<br>Theo định lý Taylor, $y^{(n)}(0) = n! \\cdot a_n = n! \\left(1 - \\dfrac{1}{2^{n+1}}\\right)$."
      }
    ],
    "Quy tắc hội tụ tích phân suy rộng mẫu": [
      {
        "level": "Vận dụng",
        "problem": "Xét tính hội tụ và tính giá trị của tích phân suy rộng: $I = \\int_{0}^{+\\infty} x e^{-2x} dx$.",
        "solution": "Bước 1: Tích phân từng phần: đặt $u = x \\implies du = dx$; $dv = e^{-2x}dx \\implies v = -\\dfrac{1}{2} e^{-2x}$.<br>Bước 2: Áp dụng công thức:<br>$I = \\left[ -\\dfrac{x}{2} e^{-2x} \\right]_0^{+\\infty} + \\dfrac{1}{2} \\int_0^{+\\infty} e^{-2x} dx$.<br>Bước 3: Lấy giới hạn: $\\lim_{x \\to +\\infty} \\dfrac{-x}{2e^{2x}} = 0$ (L'Hôpital) và tại $x=0$ giá trị bằng $0$.<br>Do đó số hạng đầu triệt tiêu.<br>$I = 0 + \\dfrac{1}{2} \\left[ -\\dfrac{1}{2} e^{-2x} \\right]_0^{+\\infty} = \\dfrac{1}{2} \\left( 0 - \\left(-\\dfrac{1}{2}\\right) \\right) = \\dfrac{1}{4}$.<br>Tích phân hội tụ và có giá trị bằng $\\dfrac{1}{4}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm tất cả các giá trị của tham số $\\alpha > 0$ để tích phân suy rộng sau hội tụ: $I = \\int_{1}^{+\\infty} \\dfrac{\\ln(1 + x^2)}{x^\\alpha \\sqrt{x^2 + 3}} dx$.",
        "solution": "Bước 1: Khi $x \\to +\\infty$, khảo sát bậc của hàm dưới dấu tích phân:<br>$\\ln(1 + x^2) = \\ln[x^2(1 + 1/x^2)] = 2\\ln x + \\ln(1 + 1/x^2) \\sim 2\\ln x$.<br>Mẫu số: $x^\\alpha \\sqrt{x^2 + 3} \\sim x^\\alpha \\cdot x = x^{\\alpha + 1}$.<br>Bước 2: Do đó hàm số $f(x) \\sim \\dfrac{2\\ln x}{x^{\\alpha + 1}}$.<br>Bước 3: Theo tiêu chuẩn tích phân suy rộng Bertrand $\\int_e^{+\\infty} \\dfrac{\\ln^k x}{x^p} dx$ hội tụ khi và chỉ khi $p > 1$.<br>Ở đây lũy thừa của $x$ là $p = \\alpha + 1$.<br>Để tích phân hội tụ: $p > 1 \\iff \\alpha + 1 > 1 \\iff \\alpha > 0$.<br>Vậy tích phân hội tụ với mọi $\\alpha > 0$."
      }
    ]
  },

  "ch": {
    "Các tiêu chuẩn hội tụ cho chuỗi số dương ($a_n > 0$)": [
      {
        "level": "Vận dụng",
        "problem": "Xét tính hội tụ của chuỗi số dương sau bằng tiêu chuẩn D'Alembert: $S = \\sum_{n=1}^{\\infty} \\dfrac{3^n \\cdot n!}{(2n)!}$.",
        "solution": "Bước 1: Xác định số hạng tổng quát $a_n = \\dfrac{3^n \\cdot n!}{(2n)!}$.<br>Số hạng kế tiếp: $a_{n+1} = \\dfrac{3^{n+1} \\cdot (n+1)!}{(2(n+1))!} = \\dfrac{3 \\cdot 3^n \\cdot (n+1) n!}{(2n + 2)(2n + 1) (2n)!}$.<br>Bước 2: Lập tỉ số $D = \\lim_{n \\to \\infty} \\dfrac{a_{n+1}}{a_n}$:<br>$\\dfrac{a_{n+1}}{a_n} = \\dfrac{3(n+1)}{(2n+2)(2n+1)} = \\dfrac{3(n+1)}{2(n+1)(2n+1)} = \\dfrac{3}{2(2n+1)}$.<br>Bước 3: Lấy giới hạn: $D = \\lim_{n \\to \\infty} \\dfrac{3}{4n + 2} = 0$.<br>Vì $D = 0 < 1$, theo tiêu chuẩn D'Alembert chuỗi số hội tụ."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm tất cả các giá trị của tham số thực $p$ để chuỗi số sau hội tụ: $\\sum_{n=1}^{\\infty} \\left( 1 - \\cos\\dfrac{1}{n} \\right)^p \\cdot \\ln\\left( 1 + \\dfrac{1}{n^2} \\right)$.",
        "solution": "Bước 1: Khi $n \\to \\infty$, ta có $\\dfrac{1}{n} \\to 0$.<br>Áp dụng VCB tương đương:<br>$1 - \\cos\\dfrac{1}{n} \\sim \\dfrac{1}{2n^2} \\implies \\left( 1 - \\cos\\dfrac{1}{n} \\right)^p \\sim \\dfrac{1}{2^p n^{2p}}$.<br>$\\ln\\left( 1 + \\dfrac{1}{n^2} \\right) \\sim \\dfrac{1}{n^2}$.<br>Bước 2: Số hạng tổng quát $a_n \\sim \\dfrac{1}{2^p n^{2p}} \\cdot \\dfrac{1}{n^2} = \\dfrac{1}{2^p n^{2p + 2}}$.<br>Bước 3: Theo tiêu chuẩn so sánh, chuỗi đã cho cùng tính chất hội tụ với chuỗi Riemann $\\sum \\dfrac{1}{n^{2p+2}}$.<br>Chuỗi Riemann hội tụ khi và chỉ khi số mũ lớn hơn 1:<br>$2p + 2 > 1 \\iff 2p > -1 \\iff p > -\\dfrac{1}{2}$."
      }
    ],
    "Bán kính hội tụ chuỗi lũy thừa $\\sum a_n (x - x_0)^n$": [
      {
        "level": "Vận dụng",
        "problem": "Tìm bán kính hội tụ và khoảng hội tụ của chuỗi lũy thừa: $\\sum_{n=1}^{\\infty} \\dfrac{(x - 2)^n}{n \\cdot 3^n}$.",
        "solution": "Bước 1: Hệ số $a_n = \\dfrac{1}{n \\cdot 3^n}$.<br>Tính bán kính hội tụ $R$ theo công thức D'Alembert:<br>$\\dfrac{1}{R} = \\lim_{n \\to \\infty} \\left| \\dfrac{a_{n+1}}{a_n} \\right| = \\lim_{n \\to \\infty} \\dfrac{n \\cdot 3^n}{(n+1) \\cdot 3^{n+1}} = \\lim_{n \\to \\infty} \\dfrac{n}{3(n+1)} = \\dfrac{1}{3} \\implies R = 3$.<br>Bước 2: Khoảng hội tụ mở: $|x - 2| < 3 \\iff -3 < x - 2 < 3 \\iff -1 < x < 5$.<br>Bước 3: Xét hai đầu mút:<br>- Tại $x = 5$: chuỗi trở thành $\\sum \\dfrac{1}{n}$ (chuỗi điều hòa, phân kỳ).<br>- Tại $x = -1$: chuỗi trở thành $\\sum \\dfrac{(-1)^n}{n}$ (chuỗi đan dấu Leibniz, hội tụ).<br>Vậy miền hội tụ của chuỗi là $[-1,\\, 5)$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm miền hội tụ và tính tổng của chuỗi hàm lũy thừa: $S(x) = \\sum_{n=1}^{\\infty} n x^n$ với $|x| < 1$.",
        "solution": "Bước 1: Với $|x| < 1$, ta xuất phát từ tổng cấp số nhân lùi vô hạn:<br>$\\sum_{n=0}^{\\infty} x^n = \\dfrac{1}{1 - x}$.<br>Bước 2: Lấy đạo hàm hai vế theo biến $x$:<br>$\\dfrac{d}{dx} \\left( \\sum_{n=0}^{\\infty} x^n \\right) = \\sum_{n=1}^{\\infty} n x^{n-1} = \\dfrac{d}{dx} \\left( \\dfrac{1}{1 - x} \\right) = \\dfrac{1}{(1 - x)^2}$.<br>Bước 3: Nhân cả hai vế với $x$ để khôi phục số mũ $n$:<br>$S(x) = x \\cdot \\sum_{n=1}^{\\infty} n x^{n-1} = \\sum_{n=1}^{\\infty} n x^n = \\dfrac{x}{(1 - x)^2}$.<br>Ứng dụng: Khi $x = \\frac{1}{2}$, ta tính được tổng $\\sum_{n=1}^\\infty \\dfrac{n}{2^n} = \\dfrac{1/2}{(1 - 1/2)^2} = \\dfrac{1/2}{1/4} = 2$."
      }
    ]
  },

  "nb": {
    "Vi phân toàn phần & Đạo hàm theo hướng": [
      {
        "level": "Vận dụng",
        "problem": "Cho hàm số $f(x, y) = x^2 y - 3xy^2 + 2x$. Tính vi phân toàn phần $df(1, 2)$ và đạo hàm theo hướng của véc tơ $\\vec{u} = (3, 4)$ tại điểm $(1, 2)$.",
        "solution": "Bước 1: Tính các đạo hàm riêng cấp 1:<br>$f_x = 2xy - 3y^2 + 2 \\implies f_x(1, 2) = 2(1)(2) - 3(4) + 2 = 4 - 12 + 2 = -6$.<br>$f_y = x^2 - 6xy \\implies f_y(1, 2) = 1^2 - 6(1)(2) = 1 - 12 = -11$.<br>Bước 2: Vi phân toàn phần: $df(1, 2) = f_x(1, 2) dx + f_y(1, 2) dy = -6 dx - 11 dy$.<br>Bước 3: Véc tơ đơn vị cùng hướng với $\\vec{u} = (3, 4)$ có độ dài $|u| = 5$:<br>$\\vec{u}_0 = \\left(\\dfrac{3}{5},\\, \\dfrac{4}{5}\\right)$.<br>Đạo hàm theo hướng: $\\dfrac{\\partial f}{\\partial \\vec{u}}(1, 2) = \\nabla f(1, 2) \\cdot \\vec{u}_0 = (-6)\\left(\\dfrac{3}{5}\\right) + (-11)\\left(\\dfrac{4}{5}\\right) = \\dfrac{-18 - 44}{5} = -\\dfrac{62}{5} = -12.4$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm giá trị lớn nhất và nhỏ nhất của hàm số $f(x, y) = x^2 + 2y^2 - x$ trên hình tròn đóng $D = \\{ (x, y) \\in \\mathbb{R}^2 \\mid x^2 + y^2 \\le 1 \\}$.",
        "solution": "Bước 1: Tìm điểm dừng bên trong hình tròn $x^2 + y^2 < 1$:<br>$f_x = 2x - 1 = 0 \\implies x = 1/2$.<br>$f_y = 4y = 0 \\implies y = 0$.<br>Điểm $M(1/2, 0)$ thỏa mãn $(1/2)^2 + 0^2 = 1/4 < 1$. Giá trị tại đây: $f(1/2, 0) = 1/4 - 1/2 = -1/4$.<br>Bước 2: Xét trên biên $x^2 + y^2 = 1 \\implies y^2 = 1 - x^2$ với $x \\in [-1, 1]$:<br>Thay vào hàm $f$: $g(x) = x^2 + 2(1 - x^2) - x = 2 - x^2 - x$.<br>Khảo sát $g(x)$ trên $[-1, 1]$: $g'(x) = -2x - 1 = 0 \\iff x = -1/2$.<br>Các giá trị trên biên:<br>$g(-1/2) = 2 - 1/4 - (-1/2) = 2 - 1/4 + 1/2 = 9/4 = 2.25$.<br>$g(-1) = 2 - 1 - (-1) = 2$.<br>$g(1) = 2 - 1 - 1 = 0$.<br>Bước 3: So sánh tất cả các giá trị: $\\{-1/4,\\, 2.25,\\, 2,\\, 0\\}$.<br>Giá trị lớn nhất: $\\max_D f = \\dfrac{9}{4}$ (đạt tại $(-1/2,\\, \\pm\\sqrt{3}/2)$).<br>Giá trị nhỏ nhất: $\\min_D f = -\\dfrac{1}{4}$ (đạt tại $(1/2,\\, 0)$)."
      }
    ],
    "Quy tắc xét dấu cực trị tự do qua Hessian $\\Delta = AC - B^2$": [
      {
        "level": "Vận dụng",
        "problem": "Tìm cực trị của hàm số $f(x, y) = x^3 + y^3 - 3xy$.",
        "solution": "Bước 1: Tìm điểm dừng qua hệ đạo hàm riêng cấp 1:<br>$\\begin{cases} f_x = 3x^2 - 3y = 0 \\\\ f_y = 3y^2 - 3x = 0 \\end{cases} \\iff \\begin{cases} y = x^2 \\\\ x^4 - x = 0 \\end{cases} \\iff x(x^3 - 1) = 0$.<br>Nghiệm thực: $x = 0 \\implies y = 0$ hoặc $x = 1 \\implies y = 1$. Có hai điểm dừng $M_1(0, 0)$ và $M_2(1, 1)$.<br>Bước 2: Tính các đạo hàm riêng cấp 2:<br>$A = f_{xx} = 6x$, $B = f_{xy} = -3$, $C = f_{yy} = 6y$.<br>Biệt thức $\\Delta = AC - B^2 = 36xy - 9$.<br>Bước 3: Xét dấu tại từng điểm:<br>- Tại $M_1(0, 0)$: $\\Delta = -9 < 0 \\implies M_1$ là điểm yên ngựa (không có cực trị).<br>- Tại $M_2(1, 1)$: $\\Delta = 36(1) - 9 = 27 > 0$ và $A = 6 > 0 \\implies M_2$ là điểm cực tiểu địa phương.<br>Giá trị cực tiểu: $f(1, 1) = 1 + 1 - 3 = -1$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Dùng phương pháp nhân tử Lagrange, tìm khoảng cách ngắn nhất từ gốc tọa độ $O(0, 0, 0)$ đến mặt phẳng $P: 2x - y + 2z = 9$.",
        "solution": "Bước 1: Bình phương khoảng cách từ $O$ đến điểm $(x, y, z)$ là $f(x, y, z) = x^2 + y^2 + z^2$.<br>Hàm Lagrange: $L(x, y, z, \\lambda) = x^2 + y^2 + z^2 + \\lambda(2x - y + 2z - 9)$.<br>Bước 2: Lập hệ phương trình đạo hàm riêng bằng 0:<br>$L_x = 2x + 2\\lambda = 0 \\implies x = -\\lambda$.<br>$L_y = 2y - \\lambda = 0 \\implies y = \\lambda/2$.<br>$L_z = 2z + 2\\lambda = 0 \\implies z = -\\lambda$.<br>Bước 3: Thay vào điều kiện ràng buộc mặt phẳng:<br>$2(-\\lambda) - (\\lambda/2) + 2(-\\lambda) = 9 \\iff -2\\lambda - 0.5\\lambda - 2\\lambda = 9 \\iff -4.5\\lambda = 9 \\iff \\lambda = -2$.<br>Suy ra tọa độ điểm gần nhất: $x = 2,\\, y = -1,\\, z = 2$.<br>Bước 4: Khoảng cách ngắn nhất là $d = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$."
      }
    ]
  },

  "v1": {
    "Công thức nghiệm PTPB tuyến tính cấp 1: $y' + P(x)y = Q(x)$": [
      {
        "level": "Vận dụng",
        "problem": "Giải phương trình vi phân tuyến tính cấp 1: $y' + \\dfrac{2}{x} y = x^3$ với điều kiện ban đầu $y(1) = 1$.",
        "solution": "Bước 1: Xác định $P(x) = \\dfrac{2}{x},\\, Q(x) = x^3$.<br>Bước 2: Thừa số tích phân: $\\mu(x) = e^{\\int P(x)dx} = e^{\\int \\frac{2}{x} dx} = e^{2\\ln|x|} = x^2$.<br>Bước 3: Nhân hai vế với $x^2$:<br>$x^2 y' + 2x y = x^5 \\iff (x^2 y)' = x^5$.<br>Lấy nguyên hàm hai vế:<br>$x^2 y = \\int x^5 dx = \\dfrac{x^6}{6} + C \\implies y = \\dfrac{x^4}{6} + \\dfrac{C}{x^2}$.<br>Bước 4: Áp dụng điều kiện $y(1) = 1$:<br>$1 = \\dfrac{1}{6} + C \\implies C = \\dfrac{5}{6}$.<br>Nghiệm riêng cần tìm là $y = \\dfrac{x^4}{6} + \\dfrac{5}{6x^2}$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Giải phương trình vi phân Bernoulli: $y' - \\dfrac{1}{x} y = -\\dfrac{y^2}{x^2}$.",
        "solution": "Bước 1: Chia cả hai vế cho $y^2$ ($y \\ne 0$):<br>$y^{-2} y' - \\dfrac{1}{x} y^{-1} = -\\dfrac{1}{x^2}$.<br>Bước 2: Đặt ẩn phụ $z = y^{1-2} = y^{-1} \\implies z' = -y^{-2} y' \\implies y^{-2} y' = -z'$.<br>Thay vào phương trình:<br>$-z' - \\dfrac{1}{x} z = -\\dfrac{1}{x^2} \\iff z' + \\dfrac{1}{x} z = \\dfrac{1}{x^2}$.<br>Bước 3: Đây là phương trình tuyến tính cấp 1 đối với $z$. Thừa số tích phân là $e^{\\int \\frac{1}{x} dx} = x$.<br>$(x z)' = x \\cdot \\dfrac{1}{x^2} = \\dfrac{1}{x}$.<br>Nguyên hàm: $x z = \\ln|x| + C \\implies z = \\dfrac{\\ln|x| + C}{x}$.<br>Bước 4: Thay lại $y = \\dfrac{1}{z} = \\dfrac{x}{\\ln|x| + C}$ (kèm nghiệm kỳ dị $y = 0$)."
      }
    ]
  },

  "v2": {
    "Phương pháp hệ số bất định tìm nghiệm riêng $y^*$ khi $f(x) = e^{\\alpha x} P_m(x)$": [
      {
        "level": "Vận dụng",
        "problem": "Tìm nghiệm tổng quát của phương trình vi phân cấp 2: $y'' - 5y' + 6y = 2e^{x}$.",
        "solution": "Bước 1: Giải phương trình thuần nhất $y'' - 5y' + 6y = 0$:<br>Phương trình đặc trưng: $k^2 - 5k + 6 = 0 \\iff (k - 2)(k - 3) = 0 \\implies k_1 = 2,\\, k_2 = 3$.<br>Nghiệm thuần nhất: $y_0 = C_1 e^{2x} + C_2 e^{3x}$.<br>Bước 2: Tìm nghiệm riêng $y^*$ của phương trình không thuần nhất:<br>Vế phải $f(x) = 2e^x$ có dạng $e^{\\alpha x} P(x)$ với $\\alpha = 1$.<br>Vì $\\alpha = 1$ không phải là nghiệm của phương trình đặc trưng ($1 \\ne 2, 3$), nên nghiệm riêng có dạng $y^* = A e^x$.<br>Bước 3: Đạo hàm: $(y^*)' = A e^x,\\, (y^*)'' = A e^x$.<br>Thay vào phương trình: $A e^x - 5A e^x + 6A e^x = 2e^x \\iff 2A e^x = 2e^x \\implies A = 1$.<br>Vậy nghiệm riêng là $y^* = e^x$.<br>Bước 4: Nghiệm tổng quát $y = y_0 + y^* = C_1 e^{2x} + C_2 e^{3x} + e^x$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Giải bài toán Cauchy có hiện tượng cộng hưởng nghiệm: $y'' + 4y = \\cos(2x)$ với điều kiện $y(0) = 0,\\, y'(0) = 1$.",
        "solution": "Bước 1: Phương trình đặc trưng $k^2 + 4 = 0 \\iff k = \\pm 2i$.<br>Nghiệm thuần nhất: $y_0 = C_1 \\cos(2x) + C_2 \\sin(2x)$.<br>Bước 2: Vế phải $f(x) = \\cos(2x)$ có tần số $\\beta = 2$, ứng với số phức $2i$ trùng với nghiệm đặc trưng (hiện tượng cộng hưởng bậc 1).<br>Do đó nghiệm riêng có dạng: $y^* = x [A \\cos(2x) + B \\sin(2x)]$.<br>Bước 3: Tính đạo hàm và đồng nhất hệ số:<br>$(y^*)'' + 4y^* = -4A \\sin(2x) + 4B \\cos(2x) = \\cos(2x)$.<br>Đồng nhất hệ số: $-4A = 0 \\implies A = 0$ và $4B = 1 \\implies B = \\dfrac{1}{4}$.<br>Vậy nghiệm riêng: $y^* = \\dfrac{x}{4} \\sin(2x)$.<br>Nghiệm tổng quát: $y = C_1 \\cos(2x) + C_2 \\sin(2x) + \\dfrac{x}{4} \\sin(2x)$.<br>Bước 4: Tìm $C_1, C_2$ qua điều kiện ban đầu:<br>$y(0) = C_1 = 0$.<br>$y'(x) = 2C_2 \\cos(2x) + \\dfrac{1}{4} \\sin(2x) + \\dfrac{x}{2} \\cos(2x) \\implies y'(0) = 2C_2 = 1 \\implies C_2 = \\dfrac{1}{2}$.<br>Nghiệm Cauchy là $y = \\dfrac{1}{2} \\sin(2x) + \\dfrac{x}{4} \\sin(2x)$."
      }
    ]
  },

  "tb": {
    "Đổi biến sang tọa độ cực": [
      {
        "level": "Vận dụng",
        "problem": "Tính tích phân kép $I = \\iint_D (x^2 + y^2) dx dy$ trên hình tròn $D: x^2 + y^2 \\le 4$.",
        "solution": "Bước 1: Đổi sang tọa độ cực: $x = r \\cos\\varphi,\\, y = r \\sin\\varphi$. Khi đó $x^2 + y^2 = r^2$ và định thức Jacobian là $r$.<br>Bước 2: Xác định miền biến thiên: $0 \\le \\varphi \\le 2\\pi$ và $0 \\le r \\le 2$.<br>Bước 3: Tính tích phân:<br>$I = \\int_0^{2\\pi} d\\varphi \\int_0^2 (r^2) \\cdot r \\, dr = [\\varphi]_0^{2\\pi} \\cdot \\left[ \\dfrac{r^4}{4} \\right]_0^2 = 2\\pi \\cdot \\dfrac{16}{4} = 8\\pi$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính thể tích vật thể giới hạn phía trên bởi mặt cầu $x^2 + y^2 + z^2 = 8$ và phía dưới bởi mặt nón $z = \\sqrt{x^2 + y^2}$.",
        "solution": "Bước 1: Tìm giao tuyến của hai mặt: thế $z = \\sqrt{x^2+y^2}$ vào mặt cầu:<br>$(x^2 + y^2) + (x^2 + y^2) = 8 \\iff 2(x^2 + y^2) = 8 \\iff x^2 + y^2 = 4 \\implies r = 2, z = 2$.<br>Giao tuyến là đường tròn bán kính $R = 2$ tại độ cao $z = 2$.<br>Bước 2: Sử dụng tọa độ cầu: $x = \\rho \\sin\\theta \\cos\\varphi,\\ y = \\rho \\sin\\theta \\sin\\varphi,\\ z = \\rho \\cos\\theta$. Jacobian là $\\rho^2 \\sin\\theta$.<br>Góc $\\varphi \\in [0, 2\\pi]$.<br>Mặt nón $z = r \\iff \\rho \\cos\\theta = \\rho \\sin\\theta \\iff \\tan\\theta = 1 \\implies \\theta = \\pi/4$.<br>Bán kính $\\rho$ chạy từ $0$ đến $\\sqrt{8} = 2\\sqrt{2}$.<br>Bước 3: Tích phân thể tích:<br>$V = \\int_0^{2\\pi} d\\varphi \\int_0^{\\pi/4} \\sin\\theta \\, d\\theta \\int_0^{2\\sqrt{2}} \\rho^2 \\, d\\rho$<br>$= 2\\pi \\cdot [-\\cos\\theta]_0^{\\pi/4} \\cdot \\left[ \\dfrac{\\rho^3}{3} \\right]_0^{2\\sqrt{2}} = 2\\pi \\left(1 - \\dfrac{\\sqrt{2}}{2}\\right) \\cdot \\dfrac{16\\sqrt{2}}{3} = \\dfrac{32\\pi(\\sqrt{2} - 1)}{3}$."
      }
    ]
  },

  "td": {
    "Cách tính tích phân đường qua tham số $t$": [
      {
        "level": "Vận dụng",
        "problem": "Tính tích phân đường loại 2: $I = \\int_L (2x - y) dx + x dy$ trong đó $L$ là đoạn thẳng nối từ điểm $A(0, 0)$ đến điểm $B(2, 4)$.",
        "solution": "Bước 1: Phương trình tham số của đoạn thẳng $AB$ đi qua gốc tọa độ:<br>$y = 2x$ với $x$ chạy từ $0$ đến $2$.<br>Ta có $dy = 2 dx$.<br>Bước 2: Thay $y = 2x$ và $dy = 2dx$ vào biểu thức tích phân:<br>$I = \\int_0^2 (2x - 2x) dx + x(2 dx) = \\int_0^2 2x dx$.<br>Bước 3: Tính nguyên hàm:<br>$I = [x^2]_0^2 = 4 - 0 = 4$."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Sử dụng định lý Green, tính tích phân đường dọc theo đường cong kín $C$: $I = \\oint_C (e^x - y^3) dx + (\\cos y + x^3) dy$ với $C$ là đường tròn $x^2 + y^2 = 4$ định hướng ngược chiều kim đồng hồ.",
        "solution": "Bước 1: Xác định $P(x, y) = e^x - y^3$ và $Q(x, y) = \\cos y + x^3$.<br>Đường cong $C$ là đường kín trơn định hướng dương bao quanh hình tròn $D: x^2 + y^2 \\le 4$.<br>Bước 2: Tính các đạo hàm riêng:<br>$\\dfrac{\\partial Q}{\\partial x} = 3x^2$, $\\dfrac{\\partial P}{\\partial y} = -3y^2$.<br>Hiệu đạo hàm riêng: $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} = 3x^2 - (-3y^2) = 3(x^2 + y^2)$.<br>Bước 3: Áp dụng định lý Green chuyển về tích phân kép trên $D$:<br>$I = \\iint_D 3(x^2 + y^2) dx dy$.<br>Bước 4: Đổi sang tọa độ cực với $0 \\le \\varphi \\le 2\\pi,\\, 0 \\le r \\le 2$:<br>$I = 3 \\int_0^{2\\pi} d\\varphi \\int_0^2 r^2 \\cdot r \\, dr = 3 \\cdot (2\\pi) \\cdot \\left[ \\dfrac{r^4}{4} \\right]_0^2 = 6\\pi \\cdot 4 = 24\\pi$."
      }
    ]
  }
}

with open(output_path, 'w', encoding='utf-8') as f:
    f.write('window.THEORY_FORMULA_PRACTICE = ' + json.dumps(practice_data, ensure_ascii=False, indent=2) + ';\n')

print(f"Generated {output_path} successfully!")

