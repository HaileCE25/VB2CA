// CẨM NANG LÝ THUYẾT & CÔNG THỨC TOÀN DIỆN VB2 CA1 (TOÁN CAO CẤP)
// Bao quát đầy đủ: Lý thuyết nền tảng, Định lý, Công thức, Ví dụ minh họa có giải từng bước, Bẫy đề thi.
window.THEORY_DATA = {
  "categories": [
    {
      "id": "al",
      "name": "Đại số tuyến tính",
      "desc": "Véc tơ, Ma trận, Định thức, Hệ PTTT, Trị riêng, Chéo hóa & Dạng toàn phương",
      "topics": [
        "vt",
        "mt",
        "he",
        "tr"
      ]
    },
    {
      "id": "an1",
      "name": "Giải tích 1 biến & Chuỗi",
      "desc": "Giới hạn, Đạo hàm, Maclaurin, Ứng dụng tích phân, Chuỗi số & Chuỗi lũy thừa",
      "topics": [
        "gh",
        "dh",
        "ch"
      ]
    },
    {
      "id": "an2",
      "name": "Giải tích nhiều biến & Vi phân",
      "desc": "Hàm nhiều biến, Cực trị (có điều kiện), PTPB cấp 1 & 2, Tích phân kép & Tích phân đường",
      "topics": [
        "nb",
        "v1",
        "v2",
        "tb",
        "td"
      ]
    }
  ],
  "topics": {
    "vt": {
      "title": "Véc tơ, Không gian con, Cơ sở & Hạng",
      "badge": "Đại số tuyến tính",
      "theory": [
        {
          "title": "Không gian véc tơ & Không gian con",
          "text": "• Không gian véc tơ $\\mathbb{R}^n$ là tập hợp tất cả các bộ $n$ số thực $(x_1, x_2, \\dots, x_n)$ cùng với hai phép toán cộng véc tơ và nhân véc tơ với một số thực.<br>• Tập con $W \\subset \\mathbb{R}^n$ ($W \\ne \\emptyset$) là một <b>không gian con</b> khi và chỉ khi $W$ đóng kín đối với phép cộng và phép nhân vô hướng: $\\forall u, v \\in W, \\forall k \\in \\mathbb{R} \\implies u + v \\in W$ và $k u \\in W$."
        },
        {
          "title": "Độc lập tuyến tính, Cơ sở & Số chiều",
          "text": "• Hệ $\\{u_1, \\dots, u_m\\}$ gọi là <b>độc lập tuyến tính (ĐLTT)</b> nếu đẳng thức $c_1 u_1 + \\dots + c_m u_m = \\vec 0$ chỉ xảy ra khi $c_1 = \\dots = c_m = 0$. Ngược lại, nếu tồn tại ít nhất một $c_i \\ne 0$ thì hệ gọi là <b>phụ thuộc tuyến tính (PTTT)</b>.<br>• Hệ $B = \\{e_1, \\dots, e_n\\}$ là một <b>cơ sở</b> của không gian $V$ nếu $B$ ĐLTT và sinh ra $V$. Khi đó số lượng véc tơ $n$ được gọi là <b>số chiều</b> của $V$, ký hiệu $\\dim V = n$.<br>• Mọi véc tơ $x \\in V$ đều biểu diễn duy nhất dưới dạng $x = x_1 e_1 + \\dots + x_n e_n$. Bộ $(x_1, \\dots, x_n)$ gọi là tọa độ của $x$ đối với cơ sở $B$."
        },
        {
          "title": "Hạng của hệ véc tơ",
          "text": "Hạng của hệ véc tơ là số lượng véc tơ độc lập tuyến tính tối đại trong hệ đó. Trong thực hành, ta xếp các véc tơ thành các hàng của ma trận và dùng phép biến đổi sơ cấp đưa về dạng bậc thang: <b>hạng bằng số hàng khác 0</b>."
        }
      ],
      "formulas": [
        {
          "name": "Tích vô hướng, độ dài & góc trong $\\mathbb{R}^n$",
          "content": "Cho $u = (u_1,\\dots,u_n),\\ v = (v_1,\\dots,v_n)$:<br>• Tích vô hướng: $\\langle u, v \\rangle = u_1 v_1 + \\dots + u_n v_n$<br>• Chuẩn (độ dài): $|u| = \\sqrt{\\langle u, u \\rangle} = \\sqrt{u_1^2 + \\dots + u_n^2}$<br>• Góc giữa 2 véc tơ: $\\cos(u, v) = \\dfrac{\\langle u, v \\rangle}{|u|\\cdot|v|}$ (với $u, v \\ne \\vec 0$)<br>• Điều kiện trực giao: $u \\perp v \\iff \\langle u, v \\rangle = 0$"
        },
        {
          "name": "Hình chiếu vuông góc",
          "content": "Hình chiếu vuông góc của véc tơ $u$ lên phương của véc tơ $v$ ($v \\ne \\vec 0$) là:<br>$$\\operatorname{pr}_v(u) = \\dfrac{\\langle u, v \\rangle}{|v|^2}\\cdot v$$"
        },
        {
          "name": "Ma trận chuyển cơ sở",
          "content": "Nếu chuyển từ cơ sở $B$ sang cơ sở $B'$ với ma trận chuyển $P = P_{B \\to B'}$, thì tọa độ vector $x$ biến đổi theo công thức:<br>$$[x]_B = P \\cdot [x]_{B'} \\iff [x]_{B'} = P^{-1} [x]_B$$"
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Tìm tọa độ của véc tơ đối với cơ sở",
          "problem": "Trong $\\mathbb{R}^3$, cho cơ sở $B = \\{u_1=(1;1;0),\\ u_2=(0;1;1),\\ u_3=(1;0;1)\\}$. Tìm tọa độ của véc tơ $v = (3;7;2)$ đối với cơ sở $B$.",
          "solution": "<b>Bước 1:</b> Giả sử $[v]_B = (c_1; c_2; c_3)$, tức là $v = c_1 u_1 + c_2 u_2 + c_3 u_3$.<br><b>Bước 2:</b> Viết dưới dạng hệ phương trình tọa độ:<br>$$\\begin{cases} c_1 + c_3 = 3 \\\\ c_1 + c_2 = 7 \\\\ c_2 + c_3 = 2 \\end{cases}$$<br><b>Bước 3:</b> Cộng cả 3 phương trình: $2(c_1 + c_2 + c_3) = 12 \\implies c_1 + c_2 + c_3 = 6$.<br>• $c_1 = 6 - (c_2 + c_3) = 6 - 2 = 4$<br>• $c_2 = 6 - (c_1 + c_3) = 6 - 3 = 3$<br>• $c_3 = 6 - (c_1 + c_2) = 6 - 7 = -1$<br><b>Kết luận:</b> Tọa độ cần tìm là $[v]_B = (4; 3; -1)$."
        },
        {
          "title": "Ví dụ 2: Tìm tham số $m$ để hệ véc tơ độc lập tuyến tính",
          "problem": "Trong $\\mathbb{R}^3$, cho hệ véc tơ $S = \\{u_1=(1;2;1),\\ u_2=(2;5;3),\\ u_3=(1;1;m)\\}$. Tìm $m$ để hệ $S$ là một cơ sở của $\\mathbb{R}^3$.",
          "solution": "<b>Bước 1:</b> Hệ 3 véc tơ trong không gian 3 chiều $\\mathbb{R}^3$ là cơ sở khi và chỉ khi chúng độc lập tuyến tính, tương đương định thức lập bởi 3 véc tơ khác 0.<br><b>Bước 2:</b> Tính định thức ma trận $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 5 & 3 \\\\ 1 & 1 & m \\end{pmatrix}$:<br>$$\\det A = 1(5m - 3) - 2(2m - 3) + 1(2 - 5) = 5m - 3 - 4m + 6 - 3 = m$$<br><b>Bước 3:</b> Hệ $S$ là cơ sở $\\iff \\det A \\ne 0 \\iff m \\ne 0$."
        }
      ],
      "traps": [
        "Hệ có nhiều hơn $n$ véc tơ trong không gian $\\mathbb{R}^n$ luôn PHỤ THUỘC tuyến tính (ví dụ 4 véc tơ trong $\\mathbb{R}^3$ luôn PTTT).",
        "Hệ véc tơ chứa véc tơ $\\vec 0$ luôn luôn phụ thuộc tuyến tính.",
        "Công thức hệ số chiếu $t = \\dfrac{\\langle u, v \\rangle}{|v|^2}$: mẫu số là bình phương độ dài $|v|^2$ (tức $\\langle v, v \\rangle$), rất nhiều bạn hay nhầm chia cho $|v|$.",
        "Tọa độ của véc tơ đối với cơ sở $B$ không phải là tọa độ thông thường, mà là các hệ số phân tích theo các véc tơ cơ sở."
      ]
    },
    "mt": {
      "title": "Ma trận, Định thức & Ma trận nghịch đảo",
      "badge": "Đại số tuyến tính",
      "theory": [
        {
          "title": "Bản chất của Ma trận & Phép nhân ma trận",
          "text": "• Ma trận kích thước $m \\times n$ đại diện cho một ánh xạ tuyến tính từ $\\mathbb{R}^n$ vào $\\mathbb{R}^m$.<br>• Phép nhân ma trận $A_{m \\times k} \\cdot B_{k \\times n} = C_{m \\times n}$ chỉ thực hiện được khi số cột của $A$ bằng số hàng của $B$.<br>• Phép nhân KHÔNG có tính chất giao hoán: nói chung $AB \\ne BA$. Do đó thứ tự nhân cực kỳ quan trọng."
        },
        {
          "title": "Ý nghĩa định thức (Determinant)",
          "text": "• Định thức $\\det A$ của ma trận vuông cấp $n$ thể hiện hệ số co giãn thể tích của phép biến đổi tuyến tính tương ứng. Nếu $\\det A = 0$, phép biến đổi làm xẹp không gian (không khả nghịch).<br>• Các phép biến đổi sơ cấp trên định thức:<br>  - Đổi chỗ 2 hàng (hoặc 2 cột): định thức ĐỔI DẤU.<br>  - Nhân một hàng (hoặc cột) với số $k$: định thức NHÂN THÊM $k$.<br>  - Cộng một bội số của hàng này vào hàng khác: định thức KHÔNG ĐỔI."
        },
        {
          "title": "Điều kiện khả nghịch & Ma trận phụ hợp",
          "text": "Ma trận vuông $A$ khả nghịch khi và chỉ khi $\\det A \\ne 0$. Khi đó tồn tại duy nhất ma trận nghịch đảo $A^{-1}$ thỏa $A A^{-1} = A^{-1} A = I$."
        }
      ],
      "formulas": [
        {
          "name": "Các tính chất vàng của định thức ma trận vuông cấp $n$",
          "content": "• $\\det(kA) = k^n \\det A$ (lũy thừa bậc $n$ của $k$).<br>• $\\det(AB) = \\det A \\cdot \\det B$.<br>• $\\det(A^T) = \\det A$.<br>• $\\det(A^{-1}) = \\dfrac{1}{\\det A}$.<br>• $\\det(A^k) = (\\det A)^k$."
        },
        {
          "name": "Công thức ma trận nghịch đảo",
          "content": "$$A^{-1} = \\dfrac{1}{\\det A} \\operatorname{adj}(A) = \\dfrac{1}{\\det A} \\begin{pmatrix} C_{11} & C_{21} & \\dots & C_{n1} \\\\ C_{12} & C_{22} & \\dots & C_{n2} \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ C_{1n} & C_{2n} & \\dots & C_{nn} \\end{pmatrix}$$<br>với phần bù đại số $C_{ij} = (-1)^{i+j} M_{ij}$ ($M_{ij}$ là định thức con bỏ hàng $i$ cột $j$)."
        },
        {
          "name": "Phương trình ma trận",
          "content": "• $AX = B \\iff X = A^{-1}B$ (nhân $A^{-1}$ vào BÊN TRÁI).<br>• $XA = B \\iff X = B A^{-1}$ (nhân $A^{-1}$ vào BÊN PHẢI).<br>• $AXB = C \\iff X = A^{-1} C B^{-1}$."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Tính định thức bằng tính chất",
          "problem": "Cho ma trận vuông $A$ cấp 3 có $\\det A = 5$. Tính $\\det(2A^T \\cdot A^{-1})$ và $\\det(3A)$.",
          "solution": "<b>Bước 1:</b> Với ma trận cấp 3 ($n=3$):<br>$$\\det(3A) = 3^3 \\cdot \\det A = 27 \\times 5 = 135$$<br><b>Bước 2:</b> Tính $\\det(2A^T \\cdot A^{-1})$:<br>Ma trận $B = A^T A^{-1}$ cũng là ma trận cấp 3. Do đó:<br>$$\\det(2 B) = 2^3 \\cdot \\det B = 8 \\cdot \\det(A^T) \\cdot \\det(A^{-1}) = 8 \\cdot (\\det A) \\cdot \\dfrac{1}{\\det A} = 8 \\cdot 1 = 8$$."
        },
        {
          "title": "Ví dụ 2: Giải phương trình ma trận",
          "problem": "Tìm ma trận $X$ thỏa mãn $AX = B$ với $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix},\\ B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$.",
          "solution": "<b>Bước 1:</b> Tính $\\det A = 1\\cdot 4 - 2\\cdot 3 = -2 \\ne 0 \\implies A$ khả nghịch.<br><b>Bước 2:</b> Tìm ma trận nghịch đảo cấp 2:<br>$$A^{-1} = \\dfrac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}$$<br><b>Bước 3:</b> Vì $AX = B \\implies X = A^{-1} B$:<br>$$X = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix} \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix} = \\begin{pmatrix} -2\\cdot 5 + 1\\cdot 7 & -2\\cdot 6 + 1\\cdot 8 \\\\ 1.5\\cdot 5 - 0.5\\cdot 7 & 1.5\\cdot 6 - 0.5\\cdot 8 \\end{pmatrix} = \\begin{pmatrix} -3 & -4 \\\\ 4 & 5 \\end{pmatrix}$$."
        }
      ],
      "traps": [
        "Lỗi kinh điển: Quên số mũ cấp $n$ trong công thức $\\det(kA) = k^n \\det A$. Ví dụ cấp 3 thì đưa 2 ra ngoài phải là $2^3 = 8$.",
        "$(A + B)^2 = A^2 + AB + BA + B^2$. Không được viết thành $A^2 + 2AB + B^2$ trừ khi đề bài cho trước $AB = BA$.",
        "Trong công thức $A^{-1} = \\dfrac{1}{\\det A} \\operatorname{adj}(A)$, ma trận phụ hợp bị CHUYỂN VỊ: phần tử ở hàng $i$ cột $j$ là $C_{ji}$, nhớ đảo chỉ số.",
        "Ma trận phản đối xứng cấp lẻ ($A^T = -A$ với $n$ lẻ) luôn có $\\det A = 0$ vì $\\det A = \\det(A^T) = \\det(-A) = (-1)^n \\det A = -\\det A$."
      ]
    },
    "he": {
      "title": "Hệ phương trình tuyến tính & Bài toán ứng dụng",
      "badge": "Đại số tuyến tính",
      "theory": [
        {
          "title": "Định lý Kronecker – Capelli (Điều kiện có nghiệm)",
          "text": "Xét hệ $AX = B$ gồm $m$ phương trình $n$ ẩn. Ký hiệu ma trận hệ số mở rộng $\\bar{A} = [A | B]$.<br>• <b>Vô nghiệm:</b> $\\operatorname{rank}(A) < \\operatorname{rank}(\\bar{A})$ (khi khử Gauss xuất hiện hàng dạng $[0 \\dots 0 | b]$ với $b \\ne 0$).<br>• <b>Nghiệm duy nhất:</b> $\\operatorname{rank}(A) = \\operatorname{rank}(\\bar{A}) = n$ (bằng đúng số ẩn).<br>• <b>Vô số nghiệm:</b> $\\operatorname{rank}(A) = \\operatorname{rank}(\\bar{A}) = r < n$. Khi đó hệ có $n - r$ ẩn tự do."
        },
        {
          "title": "Cấu trúc nghiệm của hệ phương trình",
          "text": "• Hệ thuần nhất $AX = \\vec 0$ luôn có nghiệm tầm thường $X = \\vec 0$. Tập nghiệm của nó là một không gian con có số chiều bằng $n - \\operatorname{rank}(A)$.<br>• Nghiệm tổng quát của hệ không thuần nhất $AX = B$ có dạng: $X = X_0 + X_{\\text{thuần nhất}}$, trong đó $X_0$ là một nghiệm riêng bất kỳ và $X_{\\text{thuần nhất}}$ là nghiệm tổng quát của hệ thuần nhất liên kết."
        }
      ],
      "formulas": [
        {
          "name": "Quy tắc Cramer (hệ vuông $n \\times n$ có $\\det A \\ne 0$)",
          "content": "Nghiệm duy nhất của hệ là:<br>$$x_1 = \\dfrac{\\det A_1}{\\det A},\\ x_2 = \\dfrac{\\det A_2}{\\det A},\\ \\dots,\\ x_n = \\dfrac{\\det A_n}{\\det A}$$<br>với $A_j$ là ma trận nhận được từ $A$ bằng cách thay cột thứ $j$ bằng cột hệ số tự do $B$."
        },
        {
          "name": "Mô hình cân bằng Leontief Input-Output (I-O)",
          "content": "Gọi $A$ là ma trận hệ số chi phí đầu vào, $X$ là vector tổng sản lượng, $D$ là vector cầu cuối.<br>• Phương trình cân bằng: $X = AX + D \\iff (I - A)X = D$.<br>• Nếu ma trận công nghệ $(I - A)$ khả nghịch thì nghiệm là: $X = (I - A)^{-1} D$."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Giải hệ bằng phương pháp khử Gauss",
          "problem": "Giải hệ phương trình sau:<br>$$\\begin{cases} x + 2y - z = 3 \\\\ 2x + 5y + z = 11 \\\\ x + 3y + 2z = 8 \\end{cases}$$",
          "solution": "<b>Bước 1:</b> Lập ma trận mở rộng $\\bar{A} = \\begin{pmatrix} 1 & 2 & -1 & | & 3 \\\\ 2 & 5 & 1 & | & 11 \\\\ 1 & 3 & 2 & | & 8 \\end{pmatrix}$.<br><b>Bước 2:</b> Biến đổi sơ cấp đưa về bậc thang:<br>• $H_2 \\leftarrow H_2 - 2H_1$: $[0 \\quad 1 \\quad 3 \\quad | \\quad 5]$<br>• $H_3 \\leftarrow H_3 - H_1$: $[0 \\quad 1 \\quad 3 \\quad | \\quad 5]$<br>• $H_3 \\leftarrow H_3 - H_2$: $[0 \\quad 0 \\quad 0 \\quad | \\quad 0]$<br><b>Bước 3:</b> Nhận xét: $\\operatorname{rank}(A) = \\operatorname{rank}(\\bar{A}) = 2 < 3$ (số ẩn) $\\implies$ Hệ có vô số nghiệm phụ thuộc 1 ẩn tự do.<br>Từ hàng 2: $y + 3z = 5 \\implies y = 5 - 3z$.<br>Từ hàng 1: $x = 3 - 2y + z = 3 - 2(5 - 3z) + z = 7z - 7$.<br><b>Kết luận:</b> Nghiệm tổng quát $(x, y, z) = (7t - 7, 5 - 3t, t)$ với $t \\in \\mathbb{R}$."
        },
        {
          "title": "Ví dụ 2: Ứng dụng mô hình Leontief mở",
          "problem": "Cho ma trận chi phí đầu vào $A = \\begin{pmatrix} 0.1 & 0.2 \\\\ 0.3 & 0.2 \\end{pmatrix}$ và nhu cầu cuối của nền kinh tế là $D = \\begin{pmatrix} 140 \\\\ 220 \\end{pmatrix}$. Tìm tổng sản lượng $X$.",
          "solution": "<b>Bước 1:</b> Tính ma trận $I - A$:<br>$$I - A = \\begin{pmatrix} 1 - 0.1 & -0.2 \\\\ -0.3 & 1 - 0.2 \\end{pmatrix} = \\begin{pmatrix} 0.9 & -0.2 \\\\ -0.3 & 0.8 \\end{pmatrix}$$<br><b>Bước 2:</b> Tính định thức: $\\det(I - A) = 0.9\\cdot 0.8 - (-0.2)\\cdot(-0.3) = 0.72 - 0.06 = 0.66$.<br><b>Bước 3:</b> Tìm nghịch đảo $(I - A)^{-1}$:<br>$$(I - A)^{-1} = \\dfrac{1}{0.66} \\begin{pmatrix} 0.8 & 0.2 \\\\ 0.3 & 0.9 \\end{pmatrix}$$<br><b>Bước 4:</b> Tính vector tổng sản lượng $X = (I - A)^{-1} D$:<br>$$X = \\dfrac{1}{0.66} \\begin{pmatrix} 0.8\\cdot 140 + 0.2\\cdot 220 \\\\ 0.3\\cdot 140 + 0.9\\cdot 220 \\end{pmatrix} = \\dfrac{1}{0.66} \\begin{pmatrix} 112 + 44 \\\\ 42 + 198 \\end{pmatrix} = \\dfrac{1}{0.66} \\begin{pmatrix} 156 \\\\ 240 \\end{pmatrix} = \\begin{pmatrix} 236.36 \\\\ 363.64 \\end{pmatrix}$$."
        }
      ],
      "traps": [
        "Hệ phương trình thuần nhất vuông có nghiệm KHÔNG tầm thường khi và chỉ khi $\\det A = 0$.",
        "Trong bài toán cân bằng thị trường hai mặt hàng: nhớ giải hệ phương trình đồng thời $Q_{s1} = Q_{d1}$ và $Q_{s2} = Q_{d2}$, không được giải rời rạc.",
        "Khi số phương trình nhiều hơn số ẩn ($m > n$): hệ vẫn có thể có nghiệm duy nhất nếu các phương trình dư thừa là hệ quả tuyến tính."
      ]
    },
    "tr": {
      "title": "Trị riêng, Véc tơ riêng & Chéo hóa, Dạng toàn phương",
      "badge": "Đại số tuyến tính",
      "theory": [
        {
          "title": "Định nghĩa Trị riêng & Véc tơ riêng",
          "text": "Số $\\lambda$ là <b>trị riêng</b> của ma trận vuông $A$ nếu tồn tại véc tơ $v \\ne \\vec 0$ sao cho $A v = \\lambda v$. Véc tơ $v$ khi đó gọi là <b>véc tơ riêng</b> ứng với trị riêng $\\lambda$.<br>Phương trình đặc trưng: $P(\\lambda) = \\det(A - \\lambda I) = 0$. Các nghiệm của phương trình này chính là các trị riêng của $A$."
        },
        {
          "title": "Điều kiện ma trận chéo hóa được",
          "text": "Ma trận $A$ cấp $n$ chéo hóa được khi và chỉ khi $A$ có đủ $n$ véc tơ riêng độc lập tuyến tính.<br>• <b>Điều kiện đủ:</b> Nếu $A$ có $n$ trị riêng THỰC PHÂN BIỆT thì $A$ chắc chắn chéo hóa được.<br>• <b>Ma trận đối xứng thực ($A^T = A$):</b> Luôn luôn chéo hóa được bởi một ma trận trực giao."
        },
        {
          "title": "Dạng toàn phương & Tiêu chuẩn Sylvester",
          "text": "Dạng toàn phương là đa thức thuần nhất bậc 2: $\\omega(x) = X^T A X$.<br>• $\\omega$ <b>xác định dương</b> khi $\\omega(x) > 0,\\ \\forall x \\ne 0$. Theo tiêu chuẩn Sylvester: tất cả các định thức con chính góc $\\Delta_1, \\Delta_2, \\dots, \\Delta_n > 0$.<br>• $\\omega$ <b>xác định âm</b> khi $\\omega(x) < 0,\\ \\forall x \\ne 0$. Tiêu chuẩn Sylvester: các định thức con chính góc đan dấu bắt đầu từ âm: $\\Delta_1 < 0,\\ \\Delta_2 > 0,\\ \\Delta_3 < 0, \\dots$"
        }
      ],
      "formulas": [
        {
          "name": "Hai hệ thức Viète cực mạnh cho trị riêng",
          "content": "• Tổng các trị riêng bằng vết của ma trận: $\\sum_{i=1}^n \\lambda_i = \\operatorname{tr}(A) = \\sum a_{ii}$.<br>• Tích các trị riêng bằng định thức: $\\prod_{i=1}^n \\lambda_i = \\det A$."
        },
        {
          "name": "Lũy thừa ma trận qua chéo hóa",
          "content": "Nếu $A = P D P^{-1}$ với $D = \\operatorname{diag}(\\lambda_1, \\dots, \\lambda_n)$, thì:<br>$$A^m = P D^m P^{-1} = P \\operatorname{diag}(\\lambda_1^m, \\dots, \\lambda_n^m) P^{-1}$$<br>và $\\operatorname{tr}(A^m) = \\sum_{i=1}^n \\lambda_i^m$."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Tìm trị riêng và véc tơ riêng",
          "problem": "Tìm các trị riêng và véc tơ riêng của ma trận $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$.",
          "solution": "<b>Bước 1:</b> Lập phương trình đặc trưng:<br>$$\\det(A - \\lambda I) = \\det\\begin{pmatrix} 3-\\lambda & 1 \\\\ 1 & 3-\\lambda \\end{pmatrix} = (3-\\lambda)^2 - 1 = \\lambda^2 - 6\\lambda + 8 = 0$$<br>$\\implies \\lambda_1 = 4,\\ \\lambda_2 = 2$.<br><b>Bước 2:</b> Tìm véc tơ riêng ứng với $\\lambda_1 = 4$:<br>$$(A - 4I)v = \\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies -x + y = 0 \\implies v_1 = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$$<br><b>Bước 3:</b> Tìm véc tơ riêng ứng với $\\lambda_2 = 2$:<br>$$(A - 2I)v = \\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\implies x + y = 0 \\implies v_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}$$."
        },
        {
          "title": "Ví dụ 2: Xét dấu dạng toàn phương bằng tiêu chuẩn Sylvester",
          "problem": "Xét dấu dạng toàn phương: $\\omega(x_1, x_2, x_3) = 2x_1^2 + x_2^2 + 3x_3^2 + 2x_1 x_2$.",
          "solution": "<b>Bước 1:</b> Viết ma trận của dạng toàn phương:<br>$$A = \\begin{pmatrix} 2 & 1 & 0 \\\\ 1 & 1 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$$<br><b>Bước 2:</b> Tính các định thức con chính góc:<br>• $\\Delta_1 = 2 > 0$<br>• $\\Delta_2 = \\det\\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix} = 2 - 1 = 1 > 0$<br>• $\\Delta_3 = \\det A = 3 \\cdot \\Delta_2 = 3 \\cdot 1 = 3 > 0$<br><b>Kết luận:</b> Vì tất cả $\\Delta_1, \\Delta_2, \\Delta_3 > 0$, dạng toàn phương <b>xác định dương</b>."
        }
      ],
      "traps": [
        "Nếu ma trận có trị riêng bội $k$, chưa thể vội kết luận nó không chéo hóa được! Phải kiểm tra số chiều không gian véc tơ riêng $n - \\operatorname{rank}(A - \\lambda I)$ xem có đủ bằng $k$ hay không.",
        "Dạng toàn phương xác định âm thì các định thức con chính góc phải ĐAN DẤU: $\\Delta_1 < 0, \\Delta_2 > 0, \\Delta_3 < 0$, KHÔNG PHẢI tất cả đều âm!"
      ]
    },
    "gh": {
      "title": "Giới hạn, Vô cùng bé & Tính liên tục",
      "badge": "Giải tích 1 biến",
      "theory": [
        {
          "title": "Khái niệm Vô cùng bé (VCB) & So sánh VCB",
          "text": "• Hàm số $\\alpha(x)$ gọi là VCB khi $x \\to x_0$ nếu $\\lim\\limits_{x \\to x_0} \\alpha(x) = 0$.<br>• Cho hai VCB $\\alpha(x)$ và $\\beta(x)$. Giả sử $\\lim\\limits_{x \\to x_0} \\dfrac{\\alpha(x)}{\\beta(x)} = k$:<br>  - Nếu $k = 0$: $\\alpha$ là VCB bậc cao hơn $\\beta$, viết $\\alpha = o(\\beta)$.<br>  - Nếu $k \\ne 0, \\infty$: $\\alpha$ và $\\beta$ là hai VCB cùng bậc.<br>  - Nếu $k = 1$: $\\alpha$ và $\\beta$ là hai <b>VCB tương đương</b>, ký hiệu $\\alpha \\sim \\beta$."
        },
        {
          "title": "Các định lý then chốt về hàm liên tục",
          "text": "• <b>Định lý Bolzano – Cauchy (Giá trị trung gian):</b> Nếu $f$ liên tục trên $[a, b]$ và $f(a)\\cdot f(b) < 0$ thì phương trình $f(x) = 0$ có ít nhất một nghiệm thuộc khoảng $(a, b)$.<br>• <b>Định lý Weierstrass:</b> Hàm liên tục trên một đoạn đóng $[a, b]$ thì bị chặn và luôn đạt được giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) trên đoạn đó."
        }
      ],
      "formulas": [
        {
          "name": "Bảng vô cùng bé tương đương chuẩn (khi $u \\to 0$)",
          "content": "• $\\sin u \\sim u,\\ \\tan u \\sim u,\\ \\arcsin u \\sim u,\\ \\arctan u \\sim u$<br>• $\\ln(1 + u) \\sim u$<br>• $e^u - 1 \\sim u$<br>• $a^u - 1 \\sim u \\ln a$<br>• $1 - \\cos u \\sim \\dfrac{u^2}{2}$<br>• $(1 + u)^\\alpha - 1 \\sim \\alpha u,\\ \\sqrt{1 + u} - 1 \\sim \\dfrac{u}{2}$"
        },
        {
          "name": "Quy tắc L’Hôpital & Khử dạng mũ vô định",
          "content": "• Áp dụng trực tiếp cho dạng $\\dfrac{0}{0}$ hoặc $\\dfrac{\\infty}{\\infty}$: $\\lim \\dfrac{f(x)}{g(x)} = \\lim \\dfrac{f'(x)}{g'(x)}$.<br>• Dạng mũ vô định $1^\\infty,\\ 0^0,\\ \\infty^0$: đặt $y = [f(x)]^{g(x)} = e^{g(x) \\ln f(x)}$, sau đó tính giới hạn của số mũ $L = \\lim [g(x) \\ln f(x)]$, kết quả giới hạn ban đầu là $e^L$."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Tính giới hạn bằng vô cùng bé tương đương",
          "problem": "Tính giới hạn: $L = \\lim\\limits_{x \\to 0} \\dfrac{\\ln(1 + 3x) \\cdot (1 - \\cos 2x)}{x \\cdot \\sin^2(4x)}$.",
          "solution": "<b>Bước 1:</b> Nhận xét khi $x \\to 0$, các biểu thức đều là VCB:<br>• $\\ln(1 + 3x) \\sim 3x$<br>• $1 - \\cos 2x \\sim \\dfrac{(2x)^2}{2} = 2x^2$<br>• $\\sin(4x) \\sim 4x \\implies \\sin^2(4x) \\sim (4x)^2 = 16x^2$<br><b>Bước 2:</b> Thay thế vào giới hạn (do toàn phép nhân/chia):<br>$$L = \\lim\\limits_{x \\to 0} \\dfrac{(3x) \\cdot (2x^2)}{x \\cdot (16x^2)} = \\lim\\limits_{x \\to 0} \\dfrac{6x^3}{16x^3} = \\dfrac{6}{16} = \\dfrac{3}{8}$$."
        },
        {
          "title": "Ví dụ 2: Giới hạn dạng $1^\\infty$",
          "problem": "Tính giới hạn: $L = \\lim\\limits_{x \\to 0} (\\cos 2x)^{\\frac{1}{x^2}}$.",
          "solution": "<b>Bước 1:</b> Nhận dạng: khi $x \\to 0$, $\\cos 0 = 1$ và $\\frac{1}{x^2} \\to \\infty$, đây là dạng vô định $1^\\infty$.<br><b>Bước 2:</b> Đưa về số mũ cơ số $e$: $(\\cos 2x)^{\\frac{1}{x^2}} = e^{\\frac{\\ln(\\cos 2x)}{x^2}}$.<br><b>Bước 3:</b> Tính giới hạn số mũ: $K = \\lim\\limits_{x \\to 0} \\dfrac{\\ln(\\cos 2x)}{x^2}$.<br>Biến đổi: $\\ln(\\cos 2x) = \\ln(1 + [\\cos 2x - 1]) \\sim \\cos 2x - 1 \\sim -\\dfrac{(2x)^2}{2} = -2x^2$.<br>Do đó: $K = \\lim\\limits_{x \\to 0} \\dfrac{-2x^2}{x^2} = -2$.<br><b>Kết luận:</b> $L = e^K = e^{-2} = \\dfrac{1}{e^2}$."
        }
      ],
      "traps": [
        "TUYỆT ĐỐI KHÔNG thay VCB tương đương trong phép trừ nếu hai VCB cùng bậc bị triệt tiêu! Ví dụ $\\lim\\limits_{x\\to 0}\\dfrac{\\tan x - \\sin x}{x^3}$ nếu thay $\\tan x \\sim x, \\sin x \\sim x$ thì tử số thành $x - x = 0$ là HOÀN TOÀN SAI.",
        "Quy tắc L’Hôpital chỉ lấy đạo hàm riêng tử số chia riêng đạo hàm mẫu số, không phải đạo hàm của thương số.",
        "Hàm số liên tục tại điểm $x_0$ thì chưa chắc có đạo hàm tại $x_0$ (ví dụ kinh điển $f(x) = |x|$ liên tục tại 0 nhưng không có đạo hàm tại 0)."
      ]
    },
    "dh": {
      "title": "Đạo hàm, Maclaurin, Ứng dụng tích phân một biến",
      "badge": "Giải tích 1 biến",
      "theory": [
        {
          "title": "Ý nghĩa đạo hàm & Ứng dụng trong kinh tế",
          "text": "• <b>Giá trị cận biên (Marginal):</b> Đạo hàm biểu diễn tốc độ thay đổi tức thời. Chi phí cận biên $MC = C'(Q)$, Doanh thu cận biên $MR = R'(Q)$.<br>• <b>Hệ số co giãn (Elasticity):</b> Hệ số co giãn của $y$ theo $x$ đo lường % thay đổi của $y$ khi $x$ tăng 1%:<br>  $$\\varepsilon_{yx} = \\lim_{\\Delta x \\to 0} \\dfrac{\\Delta y / y}{\\Delta x / x} = \\dfrac{x}{y} \\cdot y' = \\dfrac{d(\\ln y)}{d(\\ln x)}$$"
        },
        {
          "title": "Đạo hàm hàm ẩn & hàm tham số",
          "text": "• Hàm ẩn $F(x, y) = 0$: $y'_x = -\\dfrac{F'_x}{F'_y}$.<br>• Đường cong tham số $\\begin{cases} x = x(t) \\\\ y = y(t) \\end{cases}$: $y'_x = \\dfrac{y'(t)}{x'(t)}$ và $y''_{xx} = \\dfrac{(y'_x)'_t}{x'(t)}$."
        },
        {
          "title": "Tích phân suy rộng loại 1 & loại 2",
          "text": "• <b>Loại 1 (khoảng lấy tích phân vô hạn):</b> $\\displaystyle\\int_a^{+\\infty} f(x)dx = \\lim_{b \\to +\\infty} \\int_a^b f(x)dx$.<br>• <b>Loại 2 (hàm không bị chặn tại điểm kỳ dị $c$):</b> $\\displaystyle\\int_a^b f(x)dx = \\lim_{\\varepsilon \\to 0^+} \\int_a^{b-\\varepsilon} f(x)dx$."
        }
      ],
      "formulas": [
        {
          "name": "Công thức Leibniz đạo hàm cấp $n$ của tích",
          "content": "$$(u\\cdot v)^{(n)} = \\sum_{k=0}^n C_n^k u^{(n-k)} v^{(k)}$$"
        },
        {
          "name": "Khai triển Maclaurin của 5 hàm cơ bản ($x \\to 0$)",
          "content": "• $e^x = 1 + x + \\dfrac{x^2}{2!} + \\dots + \\dfrac{x^n}{n!} + o(x^n)$<br>• $\\sin x = x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\dots + (-1)^k \\dfrac{x^{2k+1}}{(2k+1)!} + o(x^{2k+2})$<br>• $\\cos x = 1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\dots + (-1)^k \\dfrac{x^{2k}}{(2k)!} + o(x^{2k+1})$<br>• $\\ln(1 + x) = x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\dots + (-1)^{n-1}\\dfrac{x^n}{n} + o(x^n)$<br>• $\\dfrac{1}{1 - x} = 1 + x + x^2 + \\dots + x^n + o(x^n)$"
        },
        {
          "name": "Quy tắc hội tụ tích phân suy rộng mẫu",
          "content": "• $I_1 = \\displaystyle\\int_1^{+\\infty} \\dfrac{dx}{x^\\alpha}$ HỘI TỤ $\\iff \\alpha > 1$ (Phân kỳ khi $\\alpha \\le 1$).<br>• $I_2 = \\displaystyle\\int_0^1 \\dfrac{dx}{x^\\alpha}$ HỘI TỤ $\\iff \\alpha < 1$ (Phân kỳ khi $\\alpha \\ge 1$)."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Tính đạo hàm cấp cao bằng Leibniz",
          "problem": "Tính đạo hàm cấp 10 của hàm số $f(x) = (x^2 + 1) e^{2x}$.",
          "solution": "<b>Bước 1:</b> Áp dụng công thức Leibniz $(uv)^{(10)} = \\sum_{k=0}^{10} C_{10}^k u^{(k)} v^{(10-k)}$.<br>Đặt $u = x^2 + 1$ và $v = e^{2x}$.<br><b>Bước 2:</b> Nhận xét các đạo hàm của $u$:<br>• $u' = 2x,\\ u'' = 2,\\ u''' = 0$ (mọi đạo hàm cấp $\\ge 3$ đều bằng 0).<br>Do đó tổng chỉ còn lại 3 số hạng đầu ($k = 0, 1, 2$):<br><b>Bước 3:</b> Với $v = e^{2x} \\implies v^{(m)} = 2^m e^{2x}$:<br>$$f^{(10)}(x) = C_{10}^0 (x^2 + 1) 2^{10} e^{2x} + C_{10}^1 (2x) 2^9 e^{2x} + C_{10}^2 (2) 2^8 e^{2x}$$<br>$$= 2^8 e^{2x} [4(x^2 + 1) + 10\\cdot 2x \\cdot 2 + 45 \\cdot 2]$$<br>$$= 256 e^{2x} (4x^2 + 40x + 94) = 512 e^{2x} (2x^2 + 20x + 47)$$"
        },
        {
          "title": "Ví dụ 2: Tính hệ số co giãn kinh tế",
          "problem": "Cho hàm cầu của một loại hàng hóa là $Q = 200 - 4P$. Tính hệ số co giãn của cầu theo giá tại mức giá $P = 25$ và nêu ý nghĩa.",
          "solution": "<b>Bước 1:</b> Tính lượng cầu tại $P = 25$: $Q = 200 - 4(25) = 100$.<br><b>Bước 2:</b> Đạo hàm hàm cầu theo giá: $Q' = -4$.<br><b>Bước 3:</b> Áp dụng công thức hệ số co giãn:<br>$$\\varepsilon_{QP} = \\dfrac{P}{Q} \\cdot Q' = \\dfrac{25}{100} \\cdot (-4) = -1$$<br><b>Ý nghĩa:</b> Tại mức giá $P = 25$, nếu giá tăng 1% thì lượng cầu sẽ giảm 1% (cầu co giãn đơn vị)."
        }
      ],
      "traps": [
        "Trong khai triển Maclaurin, hệ số đứng trước $x^n$ là $\\dfrac{f^{(n)}(0)}{n!}$, vì vậy để tìm đạo hàm $f^{(n)}(0)$ ta phải lấy hệ số của $x^n$ NHÂN VỚI $n!$.",
        "Khi xét tích phân $\\int_1^{+\\infty} \\dfrac{dx}{x}$ và $\\int_0^1 \\dfrac{dx}{x}$ (trường hợp $\\alpha = 1$), cả hai đều PHÂN KỲ.",
        "Tích phân hàm lẻ trên đoạn đối xứng $[-a, a]$ bằng 0 CHỈ ĐÚNG khi hàm số liên tục và tích phân tồn tại hữu hạn."
      ]
    },
    "ch": {
      "title": "Chuỗi số & Chuỗi lũy thừa",
      "badge": "Giải tích 1 biến",
      "theory": [
        {
          "title": "Khái niệm Chuỗi số & Điều kiện hội tụ",
          "text": "• Cho dãy số $(a_n)$. Biểu thức $a_1 + a_2 + \\dots + a_n + \\dots = \\sum\\limits_{n=1}^\\infty a_n$ gọi là một chuỗi số.<br>• Tổng riêng thứ $n$: $S_n = \\sum_{k=1}^n a_k$. Nếu tồn tại giới hạn hữu hạn $S = \\lim_{n \\to \\infty} S_n$ thì chuỗi <b>hội tụ</b> và có tổng là $S$. Nếu không, chuỗi <b>phân kỳ</b>.<br>• <b>ĐIỀU KIỆN CẦN:</b> Nếu chuỗi $\\sum a_n$ hội tụ thì $\\lim\\limits_{n \\to \\infty} a_n = 0$. Nếu $\\lim a_n \\ne 0$ thì chuỗi CHẮC CHẮN PHÂN KỲ."
        },
        {
          "title": "Hội tụ tuyệt đối & Bán hội tụ",
          "text": "• Chuỗi $\\sum a_n$ gọi là <b>hội tụ tuyệt đối</b> nếu chuỗi các trị tuyệt đối $\\sum |a_n|$ hội tụ. (Hội tụ tuyệt đối $\\implies$ Hội tụ).<br>• Nếu chuỗi $\\sum a_n$ hội tụ nhưng chuỗi $\\sum |a_n|$ phân kỳ thì chuỗi gọi là <b>bán hội tụ</b> (hội tụ có điều kiện)."
        }
      ],
      "formulas": [
        {
          "name": "Chuỗi chuẩn làm mốc so sánh",
          "content": "• Chuỗi hình học: $\\sum\\limits_{n=0}^\\infty q^n$ hội tụ $\\iff |q| < 1$, khi đó tổng $S = \\dfrac{1}{1 - q}$.<br>• Chuỗi Riemann: $\\sum\\limits_{n=1}^\\infty \\dfrac{1}{n^p}$ hội tụ $\\iff p > 1$, phân kỳ $\\iff p \\le 1$."
        },
        {
          "name": "Các tiêu chuẩn hội tụ cho chuỗi số dương ($a_n > 0$)",
          "content": "• <b>Tiêu chuẩn D'Alembert:</b> $D = \\lim\\limits_{n \\to \\infty} \\dfrac{a_{n+1}}{a_n}$. ($D < 1$: hội tụ; $D > 1$: phân kỳ; $D = 1$: chưa biết).<br>• <b>Tiêu chuẩn Căn Cauchy:</b> $C = \\lim\\limits_{n \\to \\infty} \\sqrt[n]{a_n}$. ($C < 1$: hội tụ; $C > 1$: phân kỳ; $C = 1$: chưa biết).<br>• <b>Tiêu chuẩn so sánh giới hạn:</b> Nếu $\\lim \\dfrac{a_n}{b_n} = k \\in (0, +\\infty)$ thì $\\sum a_n$ và $\\sum b_n$ cùng hội tụ hoặc cùng phân kỳ."
        },
        {
          "name": "Bán kính hội tụ chuỗi lũy thừa $\\sum a_n (x - x_0)^n$",
          "content": "Công thức tổng quát Cauchy–Hadamard: $$\\dfrac{1}{R} = \\limsup_{n \\to \\infty} \\sqrt[n]{|a_n|}$$ (quy ước $1/0 = +\\infty$, $1/(+\\infty)=0$). Nếu giới hạn tỉ số tồn tại thì có thể dùng $R = \\lim_{n \\to \\infty}\\left|\\dfrac{a_n}{a_{n+1}}\\right|$.<br>• Chuỗi hội tụ tuyệt đối khi $|x-x_0|<R$ và phân kỳ khi $|x-x_0|>R$. Tại hai đầu mút $x=x_0\\pm R$ phải xét riêng."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Xét sự hội tụ bằng D'Alembert",
          "problem": "Xét sự hội tụ của chuỗi số: $\\sum\\limits_{n=1}^\\infty \\dfrac{3^n \\cdot (n!)^2}{(2n)!}$.",
          "solution": "<b>Bước 1:</b> Nhận dạng chuỗi có chứa giai thừa và lũy thừa $\\implies$ dùng D'Alembert.<br>Số hạng tổng quát: $a_n = \\dfrac{3^n (n!)^2}{(2n)!}$.<br><b>Bước 2:</b> Lập tỉ số $\\dfrac{a_{n+1}}{a_n}$:<br>$$\\dfrac{a_{n+1}}{a_n} = \\dfrac{3^{n+1} [(n+1)!]^2}{(2n+2)!} \\cdot \\dfrac{(2n)!}{3^n (n!)^2} = \\dfrac{3 \\cdot (n+1)^2}{(2n+2)(2n+1)} = \\dfrac{3(n+1)^2}{2(n+1)(2n+1)} = \\dfrac{3(n+1)}{2(2n+1)}$$<br><b>Bước 3:</b> Tính giới hạn:<br>$$D = \\lim_{n \\to \\infty} \\dfrac{3n + 3}{4n + 2} = \\dfrac{3}{4}$$<br>Vì $D = \\dfrac{3}{4} < 1$, theo tiêu chuẩn D'Alembert, chuỗi số <b>HỘI TỤ</b>."
        },
        {
          "title": "Ví dụ 2: Tìm miền hội tụ của chuỗi lũy thừa",
          "problem": "Tìm miền hội tụ của chuỗi lũy thừa: $\\sum\\limits_{n=1}^\\infty \\dfrac{(x - 2)^n}{n \\cdot 4^n}$.",
          "solution": "<b>Bước 1:</b> Hệ số $a_n = \\dfrac{1}{n \\cdot 4^n}$.<br>Tính bán kính hội tụ $R$:<br>$$R = \\lim_{n \\to \\infty} \\left|\\dfrac{a_n}{a_{n+1}}\\right| = \\lim_{n \\to \\infty} \\dfrac{(n+1)\\cdot 4^{n+1}}{n \\cdot 4^n} = \\lim_{n \\to \\infty} 4 \\cdot \\dfrac{n+1}{n} = 4$$<br>Khoảng hội tụ: $|x - 2| < 4 \\iff -4 < x - 2 < 4 \\iff -2 < x < 6$.<br><b>Bước 2:</b> Xét hai đầu mút:<br>• Tại $x = 6$: Chuỗi trở thành $\\sum\\limits_{n=1}^\\infty \\dfrac{4^n}{n \\cdot 4^n} = \\sum\\limits_{n=1}^\\infty \\dfrac{1}{n}$ (chuỗi điều hòa $p=1$ $\\implies$ PHÂN KỲ).<br>• Tại $x = -2$: Chuỗi trở thành $\\sum\\limits_{n=1}^\\infty \\dfrac{(-4)^n}{n \\cdot 4^n} = \\sum\\limits_{n=1}^\\infty \\dfrac{(-1)^n}{n}$ (chuỗi đan dấu theo Leibniz $\\implies$ HỘI TỤ).<br><b>Kết luận:</b> Miền hội tụ của chuỗi là nửa khoảng $[-2, 6)$."
        }
      ],
      "traps": [
        "$\\lim a_n = 0$ KHÔNG ĐỒNG NGHĨA chuỗi hội tụ! Chuỗi điều hòa $\\sum \\frac{1}{n}$ có $\\lim \\frac{1}{n} = 0$ nhưng phân kỳ ra $+\\infty$.",
        "Khi tìm miền hội tụ của chuỗi lũy thừa, RẤT HAY QUÊN kiểm tra sự hội tụ tại 2 điểm đầu mút biên $x = x_0 \\pm R$."
      ]
    },
    "nb": {
      "title": "Hàm nhiều biến, Vi phân & Cực trị (có điều kiện)",
      "badge": "Giải tích nhiều biến",
      "theory": [
        {
          "title": "Khái niệm Khả vi & Đạo hàm riêng",
          "text": "• Đạo hàm riêng $f'_x(x_0, y_0)$ là đạo hàm của hàm theo biến $x$ khi coi $y = y_0$ là hằng số.<br>• <b>Định lý Schwarz:</b> Nếu các đạo hàm riêng cấp hai hỗn hợp $f''_{xy}$ và $f''_{yx}$ liên tục trong một lân cận thì chúng bằng nhau: $f''_{xy} = f''_{yx}$.<br>• Tồn tại các đạo hàm riêng $f'_x, f'_y$ CHƯA ĐỦ để hàm liên tục hay khả vi. Điều kiện đủ để hàm khả vi là các đạo hàm riêng liên tục."
        },
        {
          "title": "Cực trị tự do (không điều kiện)",
          "text": "• <b>Điều kiện cần (Fermat):</b> Nếu $f(x, y)$ đạt cực trị tại $M_0$ và có các đạo hàm riêng tại đó thì $\\nabla f(M_0) = \\vec 0$, tức $\\begin{cases} f'_x(M_0) = 0 \\\\ f'_y(M_0) = 0 \\end{cases}$. Điểm $M_0$ gọi là <b>điểm dừng</b>.<br>• <b>Điều kiện đủ (Hessian):</b> Đặt $A = f''_{xx}(M_0),\\ B = f''_{xy}(M_0),\\ C = f''_{yy}(M_0)$ và xét $\\Delta = AC - B^2$."
        },
        {
          "title": "Cực trị có điều kiện & Phương pháp nhân tử Lagrange",
          "text": "Bài toán: Tìm cực trị của $z = f(x, y)$ thỏa mãn điều kiện ràng buộc $g(x, y) = 0$.<br>Lập hàm Lagrange: $L(x, y, \\lambda) = f(x, y) + \\lambda g(x, y)$.<br>Tìm điểm dừng từ hệ: $\\begin{cases} L'_x = f'_x + \\lambda g'_x = 0 \\\\ L'_y = f'_y + \\lambda g'_y = 0 \\\\ L'_\\lambda = g(x, y) = 0 \\end{cases}$."
        }
      ],
      "formulas": [
        {
          "name": "Vi phân toàn phần & Đạo hàm theo hướng",
          "content": "• Vi phân cấp 1: $df = f'_x dx + f'_y dy$.<br>• Vi phân cấp 2: $d^2f = f''_{xx} dx^2 + 2 f''_{xy} dxdy + f''_{yy} dy^2$.<br>• Đạo hàm theo hướng vector đơn vị $\\vec l = (\\cos\\alpha, \\sin\\alpha)$:<br>  $$\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f \\cdot \\vec l = f'_x \\cos\\alpha + f'_y \\sin\\alpha$$<br>• Đạt giá trị lớn nhất theo hướng của Gradient $\\nabla f$, với giá trị lớn nhất bằng $|\\nabla f| = \\sqrt{(f'_x)^2 + (f'_y)^2}$."
        },
        {
          "name": "Quy tắc xét dấu cực trị tự do qua Hessian $\\Delta = AC - B^2$",
          "content": "• $\\Delta > 0$ và $A > 0 \\implies$ Điểm CỰC TIỂU.<br>• $\\Delta > 0$ và $A < 0 \\implies$ Điểm CỰC ĐẠI.<br>• $\\Delta < 0 \\implies$ KHÔNG PHẢI cực trị (điểm yên ngựa).<br>• $\\Delta = 0 \\implies$ Chưa có kết luận (phải dùng định nghĩa khảo sát lân cận)."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Tìm cực trị tự do của hàm 2 biến",
          "problem": "Tìm cực trị của hàm số: $f(x, y) = x^3 + y^3 - 3xy$.",
          "solution": "<b>Bước 1:</b> Tìm các đạo hàm riêng cấp 1:<br>$$f'_x = 3x^2 - 3y,\\quad f'_y = 3y^2 - 3x$$<br><b>Bước 2:</b> Giải hệ tìm điểm dừng:<br>$$\\begin{cases} 3x^2 - 3y = 0 \\\\ 3y^2 - 3x = 0 \\end{cases} \\iff \\begin{cases} y = x^2 \\\\ x^4 - x = 0 \\end{cases} \\iff \\begin{cases} x(x^3 - 1) = 0 \\\\ y = x^2 \\end{cases}$$<br>Ta có 2 điểm dừng: $M_1(0; 0)$ và $M_2(1; 1)$.<br><b>Bước 3:</b> Tính đạo hàm riêng cấp 2:<br>$$A = f''_{xx} = 6x,\\quad B = f''_{xy} = -3,\\quad C = f''_{yy} = 6y$$<br>• <b>Tại $M_1(0; 0)$:</b> $A = 0, B = -3, C = 0 \\implies \\Delta = AC - B^2 = 0 - (-3)^2 = -9 < 0$.<br>$\\implies M_1$ là điểm yên ngựa, không phải cực trị.<br>• <b>Tại $M_2(1; 1)$:</b> $A = 6 > 0, B = -3, C = 6 \\implies \\Delta = 6\\cdot 6 - (-3)^2 = 36 - 9 = 27 > 0$.<br>Vì $\\Delta > 0$ và $A > 0 \\implies M_2(1; 1)$ là điểm <b>CỰC TIỂU</b>, giá trị cực tiểu là $f(1, 1) = 1 + 1 - 3 = -1$."
        },
        {
          "title": "Ví dụ 2: Cực trị có điều kiện bằng Lagrange",
          "problem": "Tìm cực trị của hàm $f(x, y) = x + 2y$ với điều kiện ràng buộc $x^2 + y^2 = 5$.",
          "solution": "<b>Bước 1:</b> Lập hàm Lagrange: $L(x, y, \\lambda) = x + 2y + \\lambda (5 - x^2 - y^2)$.<br><b>Bước 2:</b> Tìm điểm dừng từ hệ đạo hàm bằng 0:<br>$$\\begin{cases} L'_x = 1 - 2\\lambda x = 0 \\\\ L'_y = 2 - 2\\lambda y = 0 \\\\ x^2 + y^2 = 5 \\end{cases} \\implies \\begin{cases} x = \\dfrac{1}{2\\lambda} \\\\ y = \\dfrac{1}{\\lambda} = 2x \\end{cases}$$<br>Thế vào điều kiện: $x^2 + (2x)^2 = 5 \\implies 5x^2 = 5 \\implies x = \\pm 1$.<br>• Với $x = 1 \\implies y = 2, \\lambda = 1/2 \\implies f(1, 2) = 5$.<br>• Với $x = -1 \\implies y = -2, \\lambda = -1/2 \\implies f(-1, -2) = -5$.<br><b>Kết luận:</b> Điểm cực đại là $(1; 2)$ với $f_{\\max} = 5$; điểm cực tiểu là $(-1; -2)$ với $f_{\\min} = -5$."
        }
      ],
      "traps": [
        "Khi xét điều kiện đủ cực trị, $\\Delta = AC - B^2 > 0$ thì mới có cực trị; nếu $A > 0$ là CỰC TIỂU, còn $A < 0$ là CỰC ĐẠI (ngược lại với suy nghĩ trực giác thông thường).",
        "Đạo hàm theo hướng chỉ đạt giá trị lớn nhất theo đúng hướng của vector Gradient $\\nabla f$, và đạt giá trị bằng 0 theo hướng vuông góc với Gradient."
      ]
    },
    "v1": {
      "title": "Phương trình vi phân cấp một",
      "badge": "Giải tích nhiều biến",
      "theory": [
        {
          "title": "Khái niệm PTPB cấp 1 & Bài toán Cauchy",
          "text": "• Phương trình vi phân cấp 1 là hệ thức liên hệ giữa biến độc lập $x$, hàm phải tìm $y$ và đạo hàm cấp một $y'$: $F(x, y, y') = 0$.<br>• Nghiệm tổng quát chứa 1 hằng số tự do $C$: $y = \\phi(x, C)$.<br>• <b>Bài toán Cauchy:</b> Tìm nghiệm riêng $y = y(x)$ thỏa mãn điều kiện ban đầu $y(x_0) = y_0$."
        },
        {
          "title": "4 Dạng phương trình vi phân cấp một cơ bản",
          "text": "1. <b>Tách biến (Phân ly biến số):</b> $g(y)dy = f(x)dx$.<br>2. <b>Thuần nhất cấp 1:</b> $y' = f(y/x)$ (đặt $u = y/x \\implies y = ux, y' = u + xu'$).<br>3. <b>Tuyến tính cấp 1:</b> $y' + P(x)y = Q(x)$.<br>4. <b>Phương trình Bernoulli:</b> $y' + P(x)y = Q(x)y^n$ ($n \\ne 0, 1$)."
        }
      ],
      "formulas": [
        {
          "name": "Công thức nghiệm PTPB tuyến tính cấp 1: $y' + P(x)y = Q(x)$",
          "content": "$$y = e^{-\\int P(x)dx} \\left( \\int Q(x) e^{\\int P(x)dx} dx + C \\right)$$"
        },
        {
          "name": "Phương pháp giải phương trình Bernoulli: $y' + P(x)y = Q(x)y^n$",
          "content": "• Chia hai vế cho $y^n$: $y^{-n}y' + P(x)y^{1-n} = Q(x)$.<br>• Đặt ẩn phụ $z = y^{1-n} \\implies z' = (1 - n)y^{-n}y'$.<br>• Đưa về PTPB tuyến tính theo $z$: $\\dfrac{z'}{1-n} + P(x)z = Q(x)$."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Giải PTPB tuyến tính cấp 1 (Bài toán Cauchy)",
          "problem": "Giải phương trình vi phân: $y' - \\dfrac{2}{x}y = x^3$ thỏa mãn điều kiện $y(1) = 2$.",
          "solution": "<b>Bước 1:</b> Nhận dạng tuyến tính cấp 1 với $P(x) = -\\dfrac{2}{x},\\ Q(x) = x^3$.<br><b>Bước 2:</b> Tính các tích phân mũ:<br>• $\\int P(x)dx = -2\\ln|x| = \\ln(x^{-2}) \\implies e^{\\int P dx} = \\dfrac{1}{x^2}$.<br>• $e^{-\\int P dx} = x^2$.<br><b>Bước 3:</b> Áp dụng công thức nghiệm tổng quát:<br>$$y = x^2 \\left( \\int x^3 \\cdot \\dfrac{1}{x^2} dx + C \\right) = x^2 \\left( \\int x dx + C \\right) = x^2 \\left( \\dfrac{x^2}{2} + C \\right) = \\dfrac{x^4}{2} + C x^2$$<br><b>Bước 4:</b> Áp dụng điều kiện ban đầu $y(1) = 2$:<br>$$2 = \\dfrac{1^4}{2} + C(1^2) \\implies 2 = \\dfrac{1}{2} + C \\implies C = \\dfrac{3}{2}$$<br><b>Kết luận:</b> Nghiệm bài toán Cauchy là $y = \\dfrac{x^4 + 3x^2}{2}$."
        },
        {
          "title": "Ví dụ 2: Phương trình Bernoulli",
          "problem": "Giải phương trình: $y' + \\dfrac{y}{x} = x y^2$.",
          "solution": "<b>Bước 1:</b> Nhận dạng Bernoulli với $n = 2$. Chia cả 2 vế cho $y^2$ ($y \\ne 0$):<br>$$y^{-2}y' + \\dfrac{1}{x} y^{-1} = x$$<br><b>Bước 2:</b> Đặt $z = y^{-1} \\implies z' = -y^{-2}y' \\implies y^{-2}y' = -z'$. Phương trình thành:<br>$$-z' + \\dfrac{1}{x}z = x \\iff z' - \\dfrac{1}{x}z = -x$$<br><b>Bước 3:</b> Giải phương trình tuyến tính theo $z$: $P(x) = -1/x, Q(x) = -x$.<br>$$z = e^{\\ln x} \\left( \\int -x e^{-\\ln x} dx + C \\right) = x \\left( \\int -x \\cdot \\dfrac{1}{x} dx + C \\right) = x (-x + C) = Cx - x^2$$<br><b>Bước 4:</b> Đổi biến về $y$: $\\dfrac{1}{y} = Cx - x^2 \\implies y = \\dfrac{1}{Cx - x^2}$ (và nghiệm kỳ dị $y = 0$)."
        }
      ],
      "traps": [
        "Trong công thức tuyến tính cấp 1: dấu trừ ở số mũ ngoài cùng $e^{-\\int P dx}$, còn bên trong tích phân là dấu cộng $e^{+\\int P dx}$, chớ đảo ngược dấu.",
        "Phương trình Bernoulli sau khi giải tìm $z$ xong NHỚ PHẢI ĐỔI BIẾN ngược lại tìm $y = z^{\\frac{1}{1-n}}$ và bổ sung nghiệm $y = 0$."
      ]
    },
    "v2": {
      "title": "Phương trình vi phân tuyến tính cấp hai",
      "badge": "Giải tích nhiều biến",
      "theory": [
        {
          "title": "Cấu trúc nghiệm của PTPB cấp 2",
          "text": "Xét phương trình tuyến tính hệ số hằng: $y'' + py' + qy = f(x)$.<br>• <b>Định lý cấu trúc:</b> Nghiệm tổng quát của phương trình không thuần nhất bằng tổng của nghiệm tổng quát thuần nhất ($y_0$) và một nghiệm riêng bất kỳ ($y^*$):<br>  $$y = y_0 + y^*$$<br>• Phương trình đặc trưng tương ứng của phần thuần nhất: $k^2 + pk + q = 0$."
        },
        {
          "title": "3 Trường hợp nghiệm của phần thuần nhất",
          "text": "Tùy thuộc vào biệt thức $\\Delta = p^2 - 4q$ của phương trình đặc trưng:<br>1. $\\Delta > 0$: có 2 nghiệm thực phân biệt $k_1 \\ne k_2 \\implies y_0 = C_1 e^{k_1 x} + C_2 e^{k_2 x}$.<br>2. $\\Delta = 0$: có nghiệm kép $k_1 = k_2 = k_0 \\implies y_0 = (C_1 + C_2 x) e^{k_0 x}$.<br>3. $\\Delta < 0$: có 2 nghiệm phức liên hợp $k = \\alpha \\pm i\\beta$ (với $\\alpha = -p/2, \\beta = \\sqrt{4q - p^2}/2$) $\\implies y_0 = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$."
        }
      ],
      "formulas": [
        {
          "name": "Phương pháp hệ số bất định tìm nghiệm riêng $y^*$ khi $f(x) = e^{\\alpha x} P_m(x)$",
          "content": "• Nếu $\\alpha$ <b>không phải</b> là nghiệm của phương trình đặc trưng: $y^* = e^{\\alpha x} Q_m(x)$.<br>• Nếu $\\alpha$ là <b>nghiệm đơn</b> của phương trình đặc trưng: $y^* = x e^{\\alpha x} Q_m(x)$.<br>• Nếu $\\alpha$ là <b>nghiệm kép</b> của phương trình đặc trưng: $y^* = x^2 e^{\\alpha x} Q_m(x)$.<br>(trong đó $Q_m(x)$ là đa thức cùng bậc $m$ với $P_m(x)$ có các hệ số cần xác định)."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Tìm nghiệm tổng quát có nghiệm đặc trưng thực",
          "problem": "Giải phương trình vi phân: $y'' - 5y' + 6y = 0$.",
          "solution": "<b>Bước 1:</b> Phương trình đặc trưng: $k^2 - 5k + 6 = 0$.<br>$\\iff (k - 2)(k - 3) = 0 \\implies k_1 = 2,\\ k_2 = 3$.<br><b>Bước 2:</b> Vì phương trình có 2 nghiệm thực phân biệt, nghiệm tổng quát là:<br>$$y = C_1 e^{2x} + C_2 e^{3x}\\quad (C_1, C_2 \\in \\mathbb{R})$$."
        },
        {
          "title": "Ví dụ 2: Tìm nghiệm riêng khi trùng nghiệm đặc trưng",
          "problem": "Tìm một nghiệm riêng của phương trình: $y'' - 4y' + 4y = e^{2x}$.",
          "solution": "<b>Bước 1:</b> Phương trình đặc trưng: $k^2 - 4k + 4 = 0 \\iff (k - 2)^2 = 0 \\implies k_1 = k_2 = 2$ (nghiệm kép).<br><b>Bước 2:</b> Vế phải $f(x) = e^{2x}$ có $\\alpha = 2, P_0(x) = 1$.<br>Vì $\\alpha = 2$ trùng với <b>nghiệm kép</b> của phương trình đặc trưng, ta chọn dạng nghiệm riêng nhân thêm $x^2$:<br>$$y^* = A x^2 e^{2x}$$<br><b>Bước 3:</b> Tính đạo hàm:<br>• $(y^*)' = A (2x e^{2x} + 2x^2 e^{2x}) = 2A e^{2x} (x + x^2)$<br>• $(y^*)'' = 2A e^{2x} (1 + 2x) + 4A e^{2x} (x + x^2) = 2A e^{2x} (2x^2 + 4x + 1)$<br>Thế vào phương trình $y'' - 4y' + 4y = e^{2x}$:<br>$$2A e^{2x}(2x^2 + 4x + 1) - 4[2A e^{2x}(x^2 + x)] + 4[A x^2 e^{2x}] = e^{2x}$$<br>$$A e^{2x} [4x^2 + 8x + 2 - 8x^2 - 8x + 4x^2] = e^{2x} \\implies 2A e^{2x} = e^{2x} \\implies A = \\dfrac{1}{2}$$<br><b>Kết luận:</b> Nghiệm riêng là $y^* = \\dfrac{1}{2} x^2 e^{2x}$."
        }
      ],
      "traps": [
        "Trường hợp nghiệm kép: Nghiệm thuần nhất phải có nhân tử $(C_1 + C_2 x) e^{kx}$, rất nhiều bạn hay quên nhân $x$.",
        "Khi tìm nghiệm riêng: nếu số mũ $\\alpha$ ở vế phải trùng với nghiệm đặc trưng thì phải nhân thêm $x$ (nếu là nghiệm đơn) hoặc nhân $x^2$ (nếu là nghiệm kép)."
      ]
    },
    "tb": {
      "title": "Tích phân hai lớp, ba lớp & Tọa độ cực",
      "badge": "Giải tích nhiều biến",
      "theory": [
        {
          "title": "Ý nghĩa tích phân hai lớp & Định lý Fubini",
          "text": "• <b>Ý nghĩa hình học:</b> $\\iint_D f(x, y) dxdy$ biểu thị thể tích hình trụ cong có đáy là miền $D$ và mặt trên là $z = f(x, y) \\ge 0$. Khi $f(x, y) = 1$, tích phân cho diện tích của miền phẳng $D$.<br>• <b>Định lý Fubini (Đổi thứ tự lấy tích phân):</b> Cho phép đưa tích phân hai lớp về hai tích phân đơn liên tiếp:<br>  - Chiếu lên trục $Ox$: $I = \\displaystyle\\int_a^b dx \\int_{y_1(x)}^{y_2(x)} f(x, y) dy$<br>  - Chiếu lên trục $Oy$: $I = \\displaystyle\\int_c^d dy \\int_{x_1(y)}^{x_2(y)} f(x, y) dx$"
        },
        {
          "title": "Phương pháp đổi biến trong tích phân kép",
          "text": "Cho phép đổi từ $(x, y)$ sang $(u, v)$ qua hệ thức $x = x(u, v), y = y(u, v)$:<br>$$\\iint_D f(x, y) dxdy = \\iint_{D'} f(x(u, v), y(u, v)) \\cdot |J| \\, du dv$$<br>với định thức Jacobi $J = \\dfrac{D(x, y)}{D(u, v)} = \\det\\begin{pmatrix} x'_u & x'_v \\\\ y'_u & y'_v \\end{pmatrix}$."
        }
      ],
      "formulas": [
        {
          "name": "Đổi biến sang tọa độ cực",
          "content": "Đặt $x = r \\cos\\varphi,\\ y = r \\sin\\varphi$. Khi đó $|J| = r$, ta có:<br>$$dxdy = r\\,dr\\,d\\varphi$$<br>$$\\iint_D f(x, y) dxdy = \\iint_{D'} f(r\\cos\\varphi, r\\sin\\varphi) \\cdot r\\,dr\\,d\\varphi$$"
        },
        {
          "name": "Các phương trình đường cong đặc biệt trong tọa độ cực",
          "content": "• Đường tròn tâm $O(0,0)$ bán kính $R$: $r = R,\\ 0 \\le \\varphi \\le 2\\pi$.<br>• Đường tròn qua gốc $x^2 + y^2 = 2ax$: $r = 2a\\cos\\varphi,\\ -\\pi/2 \\le \\varphi \\le \\pi/2$.<br>• Đường tròn qua gốc $x^2 + y^2 = 2by$: $r = 2b\\sin\\varphi,\\ 0 \\le \\varphi \\le \\pi$."
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Đổi thứ tự lấy tích phân",
          "problem": "Đổi thứ tự lấy tích phân của $I = \\displaystyle\\int_0^1 dy \\int_y^{\\sqrt{y}} f(x, y) dx$.",
          "solution": "<b>Bước 1:</b> Xác định miền $D$ từ các cận đã cho:<br>$$0 \\le y \\le 1 \\quad \\text{và} \\quad y \\le x \\le \\sqrt{y}$$<br>Các đường biên gồm: đường thẳng $x = y$ và parabol $x = \\sqrt{y} \\iff y = x^2$.<br><b>Bước 2:</b> Chiếu miền $D$ lên trục $Ox$: giao điểm tại $x = 0$ và $x = 1 \\implies 0 \\le x \\le 1$.<br>Với mỗi $x$ cố định, $y$ biến thiên từ đường parabol phía dưới $y = x^2$ lên đường thẳng phía trên $y = x$:<br>$$x^2 \\le y \\le x$$<br><b>Kết luận:</b> $I = \\displaystyle\\int_0^1 dx \\int_{x^2}^x f(x, y) dy$."
        },
        {
          "title": "Ví dụ 2: Tính tích phân bằng tọa độ cực",
          "problem": "Tính tích phân $\\iint_D (x^2 + y^2) dxdy$ với $D$ là hình tròn $x^2 + y^2 \\le 4$ trong góc phần tư thứ nhất ($x \\ge 0, y \\ge 0$).",
          "solution": "<b>Bước 1:</b> Chuyển sang tọa độ cực: $x = r\\cos\\varphi, y = r\\sin\\varphi$. Khi đó $x^2 + y^2 = r^2$.<br><b>Bước 2:</b> Xác định cận trong tọa độ cực:<br>• Góc phần tư thứ nhất: $0 \\le \\varphi \\le \\dfrac{\\pi}{2}$.<br>• Bán kính $r$ chạy từ gốc đến biên hình tròn: $0 \\le r \\le 2$.<br><b>Bước 3:</b> Nhớ nhân thêm Jacobi $r$: $dxdy = r dr d\\varphi$.<br>$$I = \\int_0^{\\pi/2} d\\varphi \\int_0^2 (r^2) \\cdot r dr = \\left(\\int_0^{\\pi/2} d\\varphi\\right) \\cdot \\left(\\int_0^2 r^3 dr\\right) = \\dfrac{\\pi}{2} \\cdot \\left[ \\dfrac{r^4}{4} \\right]_0^2 = \\dfrac{\\pi}{2} \\cdot 4 = 2\\pi$$."
        }
      ],
      "traps": [
        "LỖI SỐNG CÒN: Quên nhân thêm $r$ khi đổi biến tọa độ cực ($dxdy = r dr d\\varphi$). Cực kỳ nhiều thí sinh quên số hạng này dẫn đến tính sai tích phân.",
        "Khi vẽ miền $D$ để đổi thứ tự tích phân: luôn xác định đường nào nằm trên, đường nào nằm dưới (hoặc đường nào bên phải, bên trái) để đặt cận đúng."
      ]
    },
    "td": {
      "title": "Tích phân đường & Định lý Green",
      "badge": "Giải tích nhiều biến",
      "theory": [
        {
          "title": "Phân biệt Tích phân đường loại 1 & loại 2",
          "text": "• <b>Loại 1 (theo độ dài cung):</b> $\\int_C f(x, y) ds$. Ứng dụng tính khối lượng dây kim loại không đồng chất. KHÔNG PHỤ THUỘC vào chiều đi của đường cong: $\\int_{AB} = \\int_{BA}$.<br>• <b>Loại 2 (theo tọa độ):</b> $\\int_C P dx + Q dy$. Ứng dụng tính công của lực dọc theo quỹ đạo. PHỤ THUỘC vào chiều đi: khi đảo chiều đường cong thì tích phân ĐỔI DẤU: $\\int_{BA} = -\\int_{AB}$."
        },
        {
          "title": "Định lý Green (Liên hệ giữa đường kín và miền phẳng)",
          "text": "Cho miền đóng $D$ được bao quanh bởi đường cong kín trơn từng khúc $C$. Chiều dương của $C$ là chiều ngược chiều kim đồng hồ (miền $D$ luôn nằm bên tay trái khi di chuyển):<br>$$\\oint_C P dx + Q dy = \\iint_D \\left( \\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} \\right) dxdy$$"
        },
        {
          "title": "Điều kiện tích phân không phụ thuộc đường đi",
          "text": "Trong miền đơn liên $D$, các mệnh đề sau là tương đương:<br>1. $\\int_A^B P dx + Q dy$ không phụ thuộc đường đi nối $A$ và $B$.<br>2. $\\oint_C P dx + Q dy = 0$ với mọi đường cong kín $C \\subset D$.<br>3. Biểu thức $P dx + Q dy$ là vi phân toàn phần của một hàm $U(x, y)$ nào đó: $dU = P dx + Q dy$.<br>4. Thỏa mãn điều kiện: $\\dfrac{\\partial Q}{\\partial x} = \\dfrac{\\partial P}{\\partial y}$."
        }
      ],
      "formulas": [
        {
          "name": "Cách tính tích phân đường qua tham số $t$",
          "content": "Nếu đường cong $C$ cho bởi tham số $x = x(t), y = y(t)$ với $t$ chạy từ $t_1$ đến $t_2$:<br>• Loại 1: $\\displaystyle\\int_C f(x, y) ds = \\int_{t_1}^{t_2} f(x(t), y(t)) \\sqrt{[x'(t)]^2 + [y'(t)]^2} dt$<br>• Loại 2: $\\displaystyle\\int_C P dx + Q dy = \\int_{t_1}^{t_2} [P(x(t), y(t)) x'(t) + Q(x(t), y(t)) y'(t)] dt$"
        },
        {
          "name": "Công thức tính diện tích miền $D$ bằng tích phân đường",
          "content": "$$S = \\iint_D dxdy = \\dfrac{1}{2} \\oint_C x dy - y dx = \\oint_C x dy = -\\oint_C y dx$$"
        }
      ],
      "examples": [
        {
          "title": "Ví dụ 1: Áp dụng công thức Green",
          "problem": "Tính tích phân $I = \\oint_C (x^2 - 2y) dx + (x + 3y^2) dy$ với $C$ là đường tròn $x^2 + y^2 = 4$ định hướng ngược chiều kim đồng hồ.",
          "solution": "<b>Bước 1:</b> Nhận dạng tích phân đường loại 2 trên đường cong kín $\\implies$ dùng công thức Green.<br>Đặt $P(x, y) = x^2 - 2y \\implies \\dfrac{\\partial P}{\\partial y} = -2$.<br>Đặt $Q(x, y) = x + 3y^2 \\implies \\dfrac{\\partial Q}{\\partial x} = 1$.<br><b>Bước 2:</b> Áp dụng công thức Green:<br>$$I = \\iint_D \\left( \\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} \\right) dxdy = \\iint_D [1 - (-2)] dxdy = \\iint_D 3 \\, dxdy$$<br><b>Bước 3:</b> Vì $\\iint_D dxdy$ chính là diện tích hình tròn bán kính $R = 2$:<br>$$S = \\pi R^2 = \\pi (2^2) = 4\\pi \\implies I = 3 \\cdot (4\\pi) = 12\\pi$$."
        },
        {
          "title": "Ví dụ 2: Tích phân không phụ thuộc đường đi",
          "problem": "Tính tích phân $I = \\int_{(0, 1)}^{(2, 3)} (2x + y) dx + (x + 2y) dy$.",
          "solution": "<b>Bước 1:</b> Kiểm tra điều kiện thế vị:<br>$$P = 2x + y \\implies P'_y = 1,\\quad Q = x + 2y \\implies Q'_x = 1$$<br>Vì $P'_y = Q'_x = 1$, tích phân không phụ thuộc vào đường đi mà chỉ phụ thuộc vào điểm đầu $A(0; 1)$ và điểm cuối $B(2; 3)$.<br><b>Bước 2:</b> Tìm hàm thế vị $U(x, y)$ thỏa $dU = P dx + Q dy$:<br>• $U(x, y) = \\int (2x + y) dx = x^2 + xy + C(y)$.<br>• $U'_y = x + C'(y) = Q(x, y) = x + 2y \\implies C'(y) = 2y \\implies C(y) = y^2$.<br>Vậy hàm thế vị là $U(x, y) = x^2 + xy + y^2$.<br><b>Bước 3:</b> Áp dụng công thức Newton - Leibniz cho tích phân đường:<br>$$I = U(2, 3) - U(0, 1) = (2^2 + 2\\cdot 3 + 3^2) - (0^2 + 0\\cdot 1 + 1^2) = (4 + 6 + 9) - 1 = 18$$."
        }
      ],
      "traps": [
        "Trong công thức Green: thứ tự trừ là $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}$, tuyệt đối không viết nhầm thành $P'_y - Q'_x$.",
        "Nếu đề bài cho chiều của đường cong kín $C$ CÙNG CHIỀU kim đồng hồ thì phải đổi dấu công thức Green (thêm dấu âm trước tích phân kép)."
      ]
    }
  }
};
