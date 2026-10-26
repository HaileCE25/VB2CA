// CẨM NANG LÝ THUYẾT & CÔNG THỨC TRỌNG TÂM VB2 CA1 (TOÁN CAO CẤP)
// Phân loại theo 12 chuyên đề chuẩn ma trận đề thi tuyển sinh Bộ Công An.
window.THEORY_DATA = {
  categories: [
    {
      id: 'al',
      name: 'Đại số tuyến tính',
      desc: 'Véc tơ, Ma trận, Định thức, Hệ phương trình, Trị riêng & Chéo hóa',
      topics: ['vt', 'mt', 'he', 'tr']
    },
    {
      id: 'an1',
      name: 'Giải tích 1 biến & Chuỗi',
      desc: 'Giới hạn, Đạo hàm, Maclaurin, Tích phân suy rộng, Chuỗi số & Chuỗi lũy thừa',
      topics: ['gh', 'dh', 'ch']
    },
    {
      id: 'an2',
      name: 'Giải tích nhiều biến & Vi phân',
      desc: 'Hàm nhiều biến, Cực trị, PTPB cấp 1, PTPB cấp 2, Tích phân bội & Tích phân đường',
      topics: ['nb', 'v1', 'v2', 'tb', 'td']
    }
  ],

  topics: {
    vt: {
      title: 'Véc tơ, Độc lập tuyến tính & Hạng',
      badge: 'Đại số tuyến tính',
      formulas: [
        {
          name: 'Tích vô hướng và góc trong $\\mathbb{R}^n$',
          content: 'Cho $u = (u_1,\\dots,u_n),\\ v = (v_1,\\dots,v_n)$:<br>' +
            '• Tích vô hướng: $\\langle u, v \\rangle = u_1 v_1 + u_2 v_2 + \\dots + u_n v_n$<br>' +
            '• Độ dài (chuẩn): $|u| = \\sqrt{\\langle u, u \\rangle} = \\sqrt{u_1^2 + \\dots + u_n^2}$<br>' +
            '• Góc giữa 2 véc tơ: $\\cos\\alpha = \\dfrac{\\langle u, v \\rangle}{|u|\\cdot|v|}$ (với $u, v \\ne \\vec 0$)<br>' +
            '• Hai véc tơ vuông góc: $u \\perp v \\iff \\langle u, v \\rangle = 0$'
        },
        {
          name: 'Hình chiếu vuông góc',
          content: 'Hình chiếu vuông góc của véc tơ $u$ lên phương của véc tơ $v$ là:<br>' +
            '$$\\operatorname{pr}_v(u) = t\\cdot v = \\dfrac{\\langle u, v \\rangle}{|v|^2}\\cdot v$$'
        },
        {
          name: 'Độc lập tuyến tính & Phụ thuộc tuyến tính',
          content: 'Hệ $\\{u_1, u_2, \\dots, u_m\\}$ độc lập tuyến tính (ĐLTT) nếu:<br>' +
            '$$c_1 u_1 + c_2 u_2 + \\dots + c_m u_m = \\vec 0 \\implies c_1 = c_2 = \\dots = c_m = 0$$<br>' +
            'Nếu tồn tại ít nhất một $c_i \\ne 0$ thỏa mãn đẳng thức trên thì hệ phụ thuộc tuyến tính (PTTT).'
        },
        {
          name: 'Hạng của hệ véc tơ & Ma trận',
          content: '• Hạng của ma trận $A$, ký hiệu $\\operatorname{rank}(A)$, là số hàng khác 0 của ma trận bậc thang sau phép khử Gauss.<br>' +
            '• Trong $\\mathbb{R}^n$, hệ $n$ véc tơ độc lập tuyến tính $\\iff \\det(u_1,\\dots,u_n) \\ne 0$.'
        }
      ],
      traps: [
        'Hệ có nhiều hơn $n$ véc tơ trong không gian $\\mathbb{R}^n$ luôn PHỤ THUỘC tuyến tính.',
        'Hệ véc tơ có chứa véc tơ $\\vec 0$ luôn phụ thuộc tuyến tính.',
        'Hai véc tơ phụ thuộc tuyến tính khi và chỉ khi chúng cùng phương (tỉ lệ tọa độ).',
        'Công thức hệ số chiếu $t = \\dfrac{\\langle u, v \\rangle}{|v|^2}$: mẫu số là $|v|^2$ (tức $\\langle v, v \\rangle$), không phải $|v|$.',
        'Số chiều không gian nghiệm của hệ thuần nhất $AX = \\vec 0$ bằng $n - \\operatorname{rank}(A)$ (với $n$ là số ẩn).'
      ]
    },

    mt: {
      title: 'Ma trận, Định thức & Ma trận nghịch đảo',
      badge: 'Đại số tuyến tính',
      formulas: [
        {
          name: 'Các tính chất của phép nhân ma trận',
          content: '• Phép nhân KHÔNG có tính giao hoán: nói chung $AB \\ne BA$.<br>' +
            '• Chuyển vị của tích: $(AB)^T = B^T A^T$ (đảo thứ tự).<br>' +
            '• Nghịch đảo của tích: $(AB)^{-1} = B^{-1} A^{-1}$ (khi $A, B$ khả nghịch).'
        },
        {
          name: 'Các tính chất quan trọng của định thức (cấp $n$)',
          content: '• $\\det(kA) = k^n \\det A$ (lũy thừa $k$ bậc $n$).<br>' +
            '• $\\det(AB) = \\det A \\cdot \\det B$.<br>' +
            '• $\\det(A^T) = \\det A$.<br>' +
            '• $\\det(A^{-1}) = \\dfrac{1}{\\det A}$.<br>' +
            '• Ma trận tam giác (trên/dưới): định thức bằng tích các phần tử trên đường chéo chính.'
        },
        {
          name: 'Ma trận nghịch đảo',
          content: 'Ma trận vuông $A$ khả nghịch $\\iff \\det A \\ne 0$. Khi đó:<br>' +
            '$$A^{-1} = \\dfrac{1}{\\det A}\\operatorname{adj}(A)$$<br>' +
            'trong đó $\\operatorname{adj}(A) = [C_{ij}]^T$ là ma trận phụ hợp, với $C_{ij} = (-1)^{i+j} M_{ij}$.'
        },
        {
          name: 'Giải phương trình ma trận',
          content: '• $AX = B \\implies X = A^{-1} B$ (nhân $A^{-1}$ vào BÊN TRÁI).<br>' +
            '• $XA = B \\implies X = B A^{-1}$ (nhân $A^{-1}$ vào BÊN PHẢI).'
        }
      ],
      traps: [
        'Lỗi hay gặp nhất: quên số mũ $n$ khi đưa hằng số ra ngoài định thức: $\\det(2A) = 2^n \\det A$. Với ma trận cấp 3 thì $\\det(2A) = 8\\det A$.',
        '$(A + B)(A - B) = A^2 - AB + BA - B^2$, chỉ bằng $A^2 - B^2$ khi $AB = BA$.',
        'Trong ma trận phụ hợp $\\operatorname{adj}(A)$, phần tử ở hàng $i$ cột $j$ là phần bù đại số $C_{ji}$ của phần tử hàng $j$ cột $i$ (chỉ số bị đổi chỗ do chuyển vị).',
        'Ma trận phản đối xứng cấp lẻ ($A^T = -A$ với cấp $n$ lẻ) luôn có $\\det A = 0$.'
      ]
    },

    he: {
      title: 'Hệ phương trình tuyến tính & Ứng dụng',
      badge: 'Đại số tuyến tính',
      formulas: [
        {
          name: 'Định lý Kronecker – Capelli',
          content: 'Xét hệ $m$ phương trình $n$ ẩn: $AX = B$, ma trận bổ sung $\\bar{A} = [A | B]$.<br>' +
            '• Hệ vô nghiệm $\\iff \\operatorname{rank}(A) < \\operatorname{rank}(\\bar{A})$.<br>' +
            '• Hệ có nghiệm duy nhất $\\iff \\operatorname{rank}(A) = \\operatorname{rank}(\\bar{A}) = n$ (bằng số ẩn).<br>' +
            '• Hệ có vô số nghiệm $\\iff \\operatorname{rank}(A) = \\operatorname{rank}(\\bar{A}) = r < n$ (có $n - r$ ẩn tự do).'
        },
        {
          name: 'Quy tắc Cramer (hệ vuông $\\det A \\ne 0$)',
          content: 'Nghiệm duy nhất được tính bởi:<br>' +
            '$$x_j = \\dfrac{\\det A_j}{\\det A}\\quad (j = 1,\\dots,n)$$<br>' +
            'với $A_j$ là ma trận thay cột thứ $j$ của $A$ bằng cột vế phải $B$.'
        },
        {
          name: 'Mô hình cân bằng Leontief (I-O)',
          content: 'Phương trình cân bằng sản lượng: $X = AX + D \\iff (I - A)X = D$.<br>' +
            'Nếu ma trận Leontief $I - A$ khả nghịch thì vector tổng cầu sản lượng là: $X = (I - A)^{-1} D$.'
        }
      ],
      traps: [
        'Hệ thuần nhất $AX = \\vec 0$ luôn có ít nhất một nghiệm là nghiệm tầm thường $X = \\vec 0$.',
        'Hệ thuần nhất vuông có nghiệm KHÔNG tầm thường $\\iff \\det A = 0$.',
        'Ở mô hình thị trường 2 mặt hàng: điều kiện cân bằng đồng thời là $Q_{s1} = Q_{d1}$ và $Q_{s2} = Q_{d2}$.'
      ]
    },

    tr: {
      title: 'Trị riêng, Véc tơ riêng & Chéo hóa',
      badge: 'Đại số tuyến tính',
      formulas: [
        {
          name: 'Định nghĩa & Phương trình đặc trưng',
          content: 'Số $\\lambda$ là trị riêng của ma trận vuông $A$ nếu tồn tại vector $v \\ne \\vec 0$ sao cho $Av = \\lambda v$.<br>' +
            'Phương trình đặc trưng: $P(\\lambda) = \\det(A - \\lambda I) = 0$.'
        },
        {
          name: 'Hai tính chất vàng của trị riêng',
          content: '• Tổng các trị riêng bằng vết của ma trận: $\\sum_{i=1}^n \\lambda_i = \\operatorname{tr}(A) = \\sum a_{ii}$.<br>' +
            '• Tích các trị riêng bằng định thức của ma trận: $\\prod_{i=1}^n \\lambda_i = \\det A$.'
        },
        {
          name: 'Lũy thừa ma trận & Chéo hóa',
          content: '• Nếu $\\lambda$ là trị riêng của $A$ thì $\\lambda^m$ là trị riêng của $A^m$.<br>' +
            '• Vết của $A^m$: $\\operatorname{tr}(A^m) = \\sum_{i=1}^n \\lambda_i^m$.<br>' +
            '• Nếu ma trận $A$ chéo hóa được: $A = PDP^{-1}$ với $D = \\operatorname{diag}(\\lambda_1,\\dots,\\lambda_n)$, thì $A^m = P D^m P^{-1}$.'
        }
      ],
      traps: [
        'Ma trận cấp $n$ có $n$ trị riêng phân biệt thì CHẮC CHẮN chéo hóa được.',
        'Nếu ma trận có trị riêng bội $k$, nó chỉ chéo hóa được khi số chiều không gian vector riêng tương ứng đúng bằng $k$ (tức $n - \\operatorname{rank}(A - \\lambda I) = k$).',
        'Ma trận đối xứng thực ($A^T = A$) luôn luôn chéo hóa được bằng ma trận trực giao.'
      ]
    },

    gh: {
      title: 'Giới hạn, Vô cùng bé & Tính liên tục',
      badge: 'Giải tích 1 biến',
      formulas: [
        {
          name: 'Bảng vô cùng bé tương đương chuẩn (khi $x \\to 0$)',
          content: '• $\\sin x \\sim x$<br>' +
            '• $\\tan x \\sim x$<br>' +
            '• $\\arcsin x \\sim x,\\ \\arctan x \\sim x$<br>' +
            '• $\\ln(1 + x) \\sim x$<br>' +
            '• $e^x - 1 \\sim x$<br>' +
            '• $1 - \\cos x \\sim \\dfrac{x^2}{2}$<br>' +
            '• $(1 + x)^\\alpha - 1 \\sim \\alpha x$'
        },
        {
          name: 'Quy tắc L’Hôpital',
          content: 'Nếu $\\lim\\limits_{x \\to x_0} \\dfrac{f(x)}{g(x)}$ có dạng vô định $\\dfrac{0}{0}$ hoặc $\\dfrac{\\infty}{\\infty}$, và tồn tại $\\lim\\limits_{x \\to x_0} \\dfrac{f\'(x)}{g\'(x)}$ thì:<br>' +
            '$$\\lim\\limits_{x \\to x_0} \\dfrac{f(x)}{g(x)} = \\lim\\limits_{x \\to x_0} \\dfrac{f\'(x)}{g\'(x)}$$'
        },
        {
          name: 'Tính liên tục & Tiệm cận',
          content: '• $f$ liên tục tại $x_0 \\iff \\lim\\limits_{x \\to x_0^-} f(x) = \\lim\\limits_{x \\to x_0^+} f(x) = f(x_0)$.<br>' +
            '• Tiệm cận ngang: $y = b$ nếu $\\lim\\limits_{x \\to \\pm\\infty} f(x) = b$.<br>' +
            '• Tiệm cận đứng: $x = x_0$ nếu $\\lim\\limits_{x \\to x_0^\\pm} f(x) = \\pm\\infty$.<br>' +
            '• Tiệm cận xiên: $y = ax + b$ với $a = \\lim\\limits_{x \\to \\pm\\infty} \\dfrac{f(x)}{x},\\ b = \\lim\\limits_{x \\to \\pm\\infty} [f(x) - ax]$.'
        }
      ],
      traps: [
        'CHỈ ĐƯỢC thay vô cùng bé tương đương trong PHÉP NHÂN và PHÉP CHIA. Tuyệt đối không thay trong phép cộng, trừ nếu hai VCB cùng bậc triệt tiêu nhau.',
        'L’Hôpital là lấy đạo hàm riêng của tử chia cho đạo hàm riêng của mẫu, KHÔNG phải đạo hàm của thương $\\left(\\dfrac{f}{g}\\right)\'$.',
        'Hàm có đạo hàm tại $x_0$ thì chắc chắn liên tục tại $x_0$. Nhưng chiều ngược lại KHÔNG đúng (ví dụ $f(x) = |x|$ liên tục tại $0$ nhưng không có đạo hàm tại $0$).'
      ]
    },

    dh: {
      title: 'Đạo hàm, Maclaurin & Tích phân một biến',
      badge: 'Giải tích 1 biến',
      formulas: [
        {
          name: 'Công thức Leibniz cho đạo hàm cấp $n$ của tích',
          content: '$$(uv)^{(n)} = \\sum_{k=0}^n C_n^k u^{(n-k)} v^{(k)}$$'
        },
        {
          name: 'Khai triển Maclaurin chuẩn (khi $x \\to 0$)',
          content: '• $e^x = 1 + x + \\dfrac{x^2}{2!} + \\dots + \\dfrac{x^n}{n!} + o(x^n)$<br>' +
            '• $\\sin x = x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\dots$<br>' +
            '• $\\cos x = 1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\dots$<br>' +
            '• $\\ln(1 + x) = x - \\dfrac{x^2}{2} + \\dfrac{x^3}{3} - \\dots + (-1)^{n-1}\\dfrac{x^n}{n} + o(x^n)$<br>' +
            '• $\\dfrac{1}{1 - x} = 1 + x + x^2 + \\dots + x^n + o(x^n)$'
        },
        {
          name: 'Hội tụ của tích phân suy rộng loại 1 & loại 2',
          content: '• Loại 1: $I_1 = \\displaystyle\\int_1^{+\\infty} \\dfrac{dx}{x^\\alpha}$ hội tụ $\\iff \\alpha > 1$. Phân kỳ khi $\\alpha \\le 1$.<br>' +
            '• Loại 2: $I_2 = \\displaystyle\\int_0^1 \\dfrac{dx}{x^\\alpha}$ hội tụ $\\iff \\alpha < 1$. Phân kỳ khi $\\alpha \\ge 1$.'
        },
        {
          name: 'Tích phân hàm chẵn, lẻ trên đoạn đối xứng $[-a, a]$',
          content: '• Nếu $f(x)$ lẻ: $\\displaystyle\\int_{-a}^a f(x)dx = 0$.<br>' +
            '• Nếu $f(x)$ chẵn: $\\displaystyle\\int_{-a}^a f(x)dx = 2\\int_0^a f(x)dx$.'
        }
      ],
      traps: [
        'Hệ số của $x^n$ trong khai triển Maclaurin bằng $\\dfrac{f^{(n)}(0)}{n!}$, nên $f^{(n)}(0) = n! \\times (\\text{hệ số của } x^n)$.',
        'Tích phân $\\int_1^{+\\infty} \\dfrac{dx}{x}$ và $\\int_0^1 \\dfrac{dx}{x}$ (trường hợp $\\alpha = 1$) đều PHÂN KỲ ra vô cùng (nguyên hàm là $\\ln x$).',
        'Đạo hàm của tích phân theo cận trên: $\\dfrac{d}{dx}\\left(\\int_a^x f(t)dt\\right) = f(x)$.'
      ]
    },

    ch: {
      title: 'Chuỗi số & Chuỗi lũy thừa',
      badge: 'Giải tích 1 biến',
      formulas: [
        {
          name: 'Điều kiện cần để chuỗi số hội tụ',
          content: 'Nếu chuỗi $\\sum\\limits_{n=1}^\\infty a_n$ hội tụ thì $\\lim\\limits_{n \\to \\infty} a_n = 0$.<br>' +
            'Đảo lại: Nếu $\\lim a_n \\ne 0$ (hoặc không tồn tại) thì chuỗi CHẮC CHẮN PHÂN KỲ.'
        },
        {
          name: 'Chuỗi Riemann (chuỗi Dirichlet)',
          content: '$$\\sum_{n=1}^\\infty \\dfrac{1}{n^p} \\quad \\text{hội tụ } \\iff p > 1, \\quad \\text{phân kỳ } \\iff p \\le 1$$<br>' +
            '(Với $p=1$ là chuỗi điều hòa $\\sum \\frac{1}{n}$ phân kỳ).'
        },
        {
          name: 'Các tiêu chuẩn hội tụ chuỗi số dương ($a_n > 0$)',
          content: '• Tiêu chuẩn D\'Alembert: xét $D = \\lim\\limits_{n \\to \\infty} \\dfrac{a_{n+1}}{a_n}$.<br>' +
            '• Tiêu chuẩn Căn Cauchy: xét $C = \\lim\\limits_{n \\to \\infty} \\sqrt[n]{a_n}$.<br>' +
            '→ Nếu $D < 1$ (hoặc $C < 1$): chuỗi HỘI TỤ.<br>' +
            '→ Nếu $D > 1$ (hoặc $C > 1$): chuỗi PHÂN KỲ.<br>' +
            '→ Nếu $D = 1$ (hoặc $C = 1$): chưa kết luận được.'
        },
        {
          name: 'Bán kính hội tụ của chuỗi lũy thừa $\\sum a_n (x - x_0)^n$',
          content: 'Bán kính hội tụ $R$ được tính bởi công thức Cauchy – Hadamard:<br>' +
            '$$R = \\lim_{n \\to \\infty} \\left|\\dfrac{a_n}{a_{n+1}}\\right| = \\dfrac{1}{\\lim\\limits_{n \\to \\infty} \\sqrt[n]{|a_n|}}$$<br>' +
            '• Khoảng hội tụ là $(x_0 - R, x_0 + R)$. Tại 2 đầu mút cần xét riêng.'
        }
      ],
      traps: [
        '$\\lim a_n = 0$ KHÔNG ĐỒNG NGHĨA chuỗi hội tụ. Ví dụ kinh điển: $\\lim \\frac{1}{n} = 0$ nhưng $\\sum \\frac{1}{n}$ phân kỳ.',
        'Chuỗi đan dấu $\\sum (-1)^n a_n$ theo Leibniz hội tụ khi dãy $a_n$ giảm và $\\lim a_n = 0$.',
        'Khi tính bán kính hội tụ của $\\sum a_n x^{2n}$ (khuyết bậc lẻ), cần cẩn thận đặt $t = x^2$ để tìm bán kính theo $t$ trước: $R_x = \\sqrt{R_t}$.'
      ]
    },

    nb: {
      title: 'Hàm nhiều biến & Cực trị',
      badge: 'Giải tích nhiều biến',
      formulas: [
        {
          name: 'Đạo hàm riêng & Vi phân toàn phần',
          content: 'Cho hàm $z = f(x, y)$:<br>' +
            '• Vi phân toàn phần cấp 1: $df = f\'_x dx + f\'_y dy$.<br>' +
            '• Vi phân toàn phần cấp 2: $d^2f = f\'\'_{xx} dx^2 + 2 f\'\'_{xy} dxdy + f\'\'_{yy} dy^2$.'
        },
        {
          name: 'Đạo hàm theo hướng & Gradient',
          content: '• Vector Gradient: $\\nabla f(M_0) = (f\'_x(M_0), f\'_y(M_0))$.<br>' +
            '• Đạo hàm theo hướng vector $\\vec l$: $\\dfrac{\\partial f}{\\partial \\vec l} = \\nabla f \\cdot \\dfrac{\\vec l}{|\\vec l|}$.<br>' +
            '• Tốc độ tăng nhanh nhất theo đúng hướng của $\\nabla f$, với giá trị lớn nhất bằng $|\\nabla f|$.'
        },
        {
          name: 'Cực trị không điều kiện của hàm 2 biến',
          content: 'Bước 1: Tìm điểm dừng $M_0$ thỏa hệ: $\\begin{cases} f\'_x = 0 \\\\ f\'_y = 0 \\end{cases}$<br>' +
            'Bước 2: Tính ma trận Hessian tại $M_0$: $A = f\'\'_{xx},\\ B = f\'\'_{xy},\\ C = f\'\'_{yy}$, xét $\\Delta = AC - B^2$:<br>' +
            '• $\\Delta > 0$ và $A > 0 \\implies M_0$ là điểm CỰC TIỂU.<br>' +
            '• $\\Delta > 0$ và $A < 0 \\implies M_0$ là điểm CỰC ĐẠI.<br>' +
            '• $\\Delta < 0 \\implies M_0$ KHÔNG PHẢI cực trị (điểm yên ngựa).<br>' +
            '• $\\Delta = 0 \\implies$ Chưa kết luận được (phải khảo sát riêng).'
        }
      ],
      traps: [
        'Tồn tại các đạo hàm riêng $f\'_x, f\'_y$ CHƯA ĐỦ để hàm liên tục hay khả vi.',
        'Điều kiện đủ để hàm khả vi là các đạo hàm riêng liên tục.',
        'Định lý Schwarz: nếu các đạo hàm riêng hỗn hợp $f\'\'_{xy}, f\'\'_{yx}$ liên tục thì chúng bằng nhau: $f\'\'_{xy} = f\'\'_{yx}$.'
      ]
    },

    v1: {
      title: 'Phương trình vi phân cấp một',
      badge: 'Giải tích nhiều biến',
      formulas: [
        {
          name: '1. Phương trình phân ly biến số',
          content: 'Dạng: $g(y)dy = f(x)dx \\implies \\displaystyle\\int g(y)dy = \\int f(x)dx + C$.'
        },
        {
          name: '2. Phương trình thuần nhất cấp một',
          content: 'Dạng: $y\' = f\\left(\\dfrac{y}{x}\\right)$.<br>' +
            'Phương pháp: Đặt $u = \\dfrac{y}{x} \\implies y = ux \\implies y\' = u + x u\'$.<br>' +
            'Đưa về dạng phân ly: $\\dfrac{du}{f(u) - u} = \\dfrac{dx}{x}$.'
        },
        {
          name: '3. Phương trình tuyến tính cấp một',
          content: 'Dạng: $y\' + P(x)y = Q(x)$.<br>' +
            'Công thức nghiệm tổng quát:<br>' +
            '$$y = e^{-\\int P(x)dx} \\left( \\int Q(x) e^{\\int P(x)dx} dx + C \\right)$$'
        },
        {
          name: '4. Phương trình Bernoulli',
          content: 'Dạng: $y\' + P(x)y = Q(x)y^n$ ($n \\ne 0, 1$).<br>' +
            'Phương pháp: Chia hai vế cho $y^n$: $y^{-n}y\' + P(x)y^{1-n} = Q(x)$.<br>' +
            'Đặt $z = y^{1-n} \\implies z\' = (1 - n)y^{-n}y\'$, đưa về tuyến tính theo $z$.'
        }
      ],
      traps: [
        'Trong công thức nghiệm tuyến tính cấp 1: dấu trừ ở số mũ ngoài cùng: $e^{-\\int P dx}$, còn số mũ bên trong ngoặc là dấu cộng $e^{+\\int P dx}$.',
        'Khi chia cho biểu thức chứa $y$ (trong phân ly biến số hoặc Bernoulli), nhớ kiểm tra nghiệm kỳ dị $y = 0$.'
      ]
    },

    v2: {
      title: 'Phương trình vi phân cấp hai',
      badge: 'Giải tích nhiều biến',
      formulas: [
        {
          name: 'PTPB tuyến tính thuần nhất hệ số hằng: $y\'\' + py\' + qy = 0$',
          content: 'Phương trình đặc trưng: $k^2 + pk + q = 0$, có $\\Delta = p^2 - 4q$:<br>' +
            '• $\\Delta > 0$ (2 nghiệm thực $k_1 \\ne k_2$): $y = C_1 e^{k_1 x} + C_2 e^{k_2 x}$<br>' +
            '• $\\Delta = 0$ (nghiệm kép $k_1 = k_2 = k_0$): $y = (C_1 + C_2 x)e^{k_0 x}$<br>' +
            '• $\\Delta < 0$ (nghiệm phức $k = \\alpha \\pm i\\beta$): $y = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)$'
        },
        {
          name: 'PTPB không thuần nhất: $y\'\' + py\' + qy = f(x)$',
          content: 'Nghiệm tổng quát: $y = y_{\\text{thuần nhất}} + y^*$ (với $y^*$ là một nghiệm riêng).<br>' +
            '• Dạng $f(x) = e^{\\alpha x} P_m(x)$:<br>' +
            '  - Nếu $\\alpha$ không là nghiệm đặc trưng: $y^* = e^{\\alpha x} Q_m(x)$.<br>' +
            '  - Nếu $\\alpha$ là nghiệm đơn: $y^* = x e^{\\alpha x} Q_m(x)$.<br>' +
            '  - Nếu $\\alpha$ là nghiệm kép: $y^* = x^2 e^{\\alpha x} Q_m(x)$.'
        }
      ],
      traps: [
        'Khi phương trình đặc trưng có nghiệm kép, nghiệm tổng quát phải có thừa số $(C_1 + C_2 x)$, thí sinh thường quên nhân $x$.',
        'Với nghiệm phức $\\alpha \\pm i\\beta$, hệ số mũ là phần thực $\\alpha = -p/2$, góc trong hàm lượng giác là $\\beta = \\sqrt{4q - p^2}/2$.'
      ]
    },

    tb: {
      title: 'Tích phân hai lớp & ba lớp',
      badge: 'Giải tích nhiều biến',
      formulas: [
        {
          name: 'Đổi thứ tự lấy tích phân hai lớp',
          content: '• Chiếu theo $x$: $I = \\displaystyle\\int_a^b dx \\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x, y) dy$<br>' +
            '• Đổi sang chiếu theo $y$: xác định lại miền $c \\le y \\le d$ và $\\psi_1(y) \\le x \\le \\psi_2(y)$.<br>' +
            '(Mẹo: luôn phác thảo hình dạng miền $D$ để không bị nhầm cận).'
        },
        {
          name: 'Đổi biến sang tọa độ cực',
          content: 'Đặt $x = r\\cos\\varphi,\\ y = r\\sin\\varphi$. Khi đó định thức Jacobi là $J = r$:<br>' +
            '$$dxdy = r\\,dr\\,d\\varphi$$<br>' +
            '$$\\iint_D f(x, y) dxdy = \\iint_{D\'} f(r\\cos\\varphi, r\\sin\\varphi) \\cdot r\\,dr\\,d\\varphi$$'
        },
        {
          name: 'Ứng dụng hình học',
          content: '• Diện tích miền phẳng $D$: $S = \\displaystyle\\iint_D dxdy$.<br>' +
            '• Thể tích vật thể giới hạn bởi mặt trên $z_2(x, y)$ và mặt dưới $z_1(x, y)$ trên miền $D$:<br>' +
            '  $$V = \\iint_D [z_2(x, y) - z_1(x, y)] dxdy$$'
        }
      ],
      traps: [
        'Lỗi phổ biến nhất khi đổi sang tọa độ cực: QUÊN NHÂN THÊM $r$ vào vi phân ($dxdy = r dr d\\varphi$).',
        'Phương trình đường tròn lệch tâm qua gốc: $x^2 + y^2 = 2ax \\iff r = 2a\\cos\\varphi$, với $-\\pi/2 \\le \\varphi \\le \\pi/2$.'
      ]
    },

    td: {
      title: 'Tích phân đường & Định lý Green',
      badge: 'Giải tích nhiều biến',
      formulas: [
        {
          name: 'Tích phân đường loại 1 (theo độ dài cung)',
          content: 'Đường cong $C: x = x(t), y = y(t)$ với $t \\in [a, b]$:<br>' +
            '$$\\int_C f(x, y) ds = \\int_a^b f(x(t), y(t)) \\sqrt{[x\'(t)]^2 + [y\'(t)]^2} dt$$'
        },
        {
          name: 'Tích phân đường loại 2',
          content: '$$\\int_C P dx + Q dy = \\int_a^b [P(x(t), y(t)) x\'(t) + Q(x(t), y(t)) y\'(t)] dt$$'
        },
        {
          name: 'Công thức Green (cho đường cong kín $C$)',
          content: 'Cho miền kín $D$ được bao bởi đường cong kín trơn từng khúc $C$, lấy theo chiều dương (ngược chiều kim đồng hồ):<br>' +
            '$$\\oint_C P dx + Q dy = \\iint_D \\left( \\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y} \\right) dxdy$$'
        },
        {
          name: 'Điều kiện tích phân không phụ thuộc đường đi',
          content: 'Trong miền đơn liên, tích phân $\\int_A^B P dx + Q dy$ không phụ thuộc đường đi $\\iff \\dfrac{\\partial Q}{\\partial x} = \\dfrac{\\partial P}{\\partial y}$.'
        }
      ],
      traps: [
        'Chiều dương trong công thức Green là chiều mà khi đi dọc theo biên, miền $D$ luôn nằm ở BÊN TAY TRÁI (thông thường là ngược chiều kim đồng hồ). Nếu đề bài cho chiều cùng chiều kim đồng hồ thì phải đổi dấu (thêm dấu trừ).',
        'Thứ tự trừ trong công thức Green là $\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}$, tuyệt đối không đảo ngược thành $P\'_y - Q\'_x$.'
      ]
    }
  }
};
