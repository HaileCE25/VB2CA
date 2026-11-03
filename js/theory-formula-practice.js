window.THEORY_FORMULA_PRACTICE = {
  "vt": {
    "Tích vô hướng, độ dài & góc trong $\\mathbb{R}^n$": [
      {
        "level": "Vận dụng",
        "problem": "Cho $u=(1,2,-2)$, $v=(2,0,1)$. Tính $\\langle u,v\\rangle$, $|u|$ và cosin góc giữa hai véc tơ.",
        "solution": "$\\langle u,v\\rangle = 1\\cdot2 + 2\\cdot0 + (-2)\\cdot1 = 0$<br>$|u| = \\sqrt{1^2+2^2+(-2)^2} = \\sqrt{9}=3$<br>$\\cos\\theta = \\frac{\\langle u,v\\rangle}{|u||v|}=\\frac{0}{3\\sqrt5}=0$<br>V? $\\langle u,v\\rangle=0$, hai v?c t? vu?ng g?c."
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm $m$ để $u=(m,1,2)$ vuông góc với $v=(2,-3,1)$, rồi tính độ dài $u$.",
        "solution": "$u\\cdot v = m\\cdot2 + 1\\cdot(-3) + 2\\cdot1 = 2m-1 = 0$<br>$2m-1=0 \\Rightarrow m=\\frac12$<br>$|u| = \\sqrt{m^2+1^2+2^2} = \\sqrt{\\frac14 +1 +4} = \\sqrt{\\frac{21}{4}} = \\frac{\\sqrt{21}}{2}$"
      }
    ],
    "Hình chiếu vuông góc": [
      {
        "level": "Vận dụng",
        "problem": "Tìm hình chiếu của $u=(3,1)$ lên $v=(1,2)$.",
        "solution": "$u\\cdot v = 3\\cdot1 + 1\\cdot2 = 5$<br>$|v|^2 = 1^2 +2^2 =5$<br>$\\operatorname{pr}_v(u) = \\frac{u\\cdot v}{|v|^2}v = \\frac55(1,2)=(1,2)$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Phân tích $u=(2,3)$ thành thành phần song song và vuông góc với $v=(1,1)$.",
        "solution": "$\\frac{u\\cdot v}{|v|^2} = \\frac{2\\cdot1+3\\cdot1}{1^2+1^2}=\\frac52$<br>Th?nh ph?n song song: $\\frac52(1,1)=(\\frac52,\\frac52)$<br>Th?nh ph?n vu?ng g?c: $(2,3) - (\\frac52,\\frac52)=(-\\frac12,\\frac12)$"
      }
    ],
    "Ma trận chuyển cơ sở": [
      {
        "level": "Vận dụng",
        "problem": "Cơ sở $B'$ có các véc tơ cột $(1,1)$, $(1,-1)$. Tìm tọa độ của $x=(4,2)$ trong $B'$.",
        "solution": "$a+b=4$<br>$a-b=2$<br>C?ng hai ph??ng tr?nh: $2a=6 \\Rightarrow a=3$<br>$3+b=4 \\Rightarrow b=1$<br>V?y $[x]_{B'}=(3,1)$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Với cơ sở $B'=((1,1),(1,-1))$, một véc tơ có tọa độ $[x]_{B'}=(2,-1)$. Tìm tọa độ chuẩn của $x$.",
        "solution": "$x = 2(1,1) + (-1)(1,-1)$<br>$= (2,2) + (-1,1)$<br>$=(1,3)$"
      }
    ]
  },
  "mt": {
    "Các tính chất vàng của định thức ma trận vuông cấp $n$": [
      {
        "level": "Vận dụng",
        "problem": "Biết $\\det A=3$ với $A$ cấp $2$. Tính $\\det(2A)$ và $\\det(A^T)$.",
        "solution": "$\\det(2A)=2^2\\det A = 4\\cdot3=12$<br>$\\det(A^T)=\\det A =3$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Ma trận $A$ cấp $3$ có $\\det A=-2$. Tính $\\det(3A^{-1})$.",
        "solution": "$\\det(A^{-1})=\\frac1{\\det A}=\\frac1{-2}$<br>$\\det(3A^{-1})=3^3\\det(A^{-1})=27\\cdot\\frac1{-2}=-\\frac{27}{2}$"
      }
    ],
    "Công thức ma trận nghịch đảo": [
      {
        "level": "Vận dụng",
        "problem": "Tìm nghịch đảo của $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$.",
        "solution": "$\\det A = 2\\cdot1 -1\\cdot1 =1$<br>$A^{-1}=\\frac1{\\det A}\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Giải $AX=b$ với $A=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$, $b=(4,2)^T$.",
        "solution": "$A X = b$ t??ng ???ng v?i $\\begin{cases}x+y=4\\\\x-y=2\\end{cases}$<br>C?ng hai ph??ng tr?nh: $2x=6 \\Rightarrow x=3$<br>$3+y=4 \\Rightarrow y=1$<br>V?y $X=(3,1)^T$"
      }
    ],
    "Phương trình ma trận": [
      {
        "level": "Vận dụng",
        "problem": "Giải $AX=B$ với $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, $B=\\begin{pmatrix}3\\\\2\\end{pmatrix}$.",
        "solution": "$A X = B$ ngh?a l? $\\begin{cases}x+2y=3\\\\y=2\\end{cases}$<br>Thay $y=2$: $x+2\\cdot2=3 \\Rightarrow x=-1$<br>V?y $X=(-1,2)^T$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Giải $XA=B$ với $A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$, $B=\\begin{pmatrix}2&4\\\\1&0\\end{pmatrix}$.",
        "solution": "$X=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$<br>$XA = \\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix} = \\begin{pmatrix}a&a+2b\\\\c&c+2d\\end{pmatrix}$<br>So s?nh v?i $B=\\begin{pmatrix}2&4\\\\1&0\\end{pmatrix}$:<br>$a=2$, $a+2b=4 \\Rightarrow b=1$, $c=1$, $c+2d=0 \\Rightarrow d=-\\frac12$<br>V?y $X=\\begin{pmatrix}2&1\\\\1&-\\frac12\\end{pmatrix}$"
      }
    ]
  },
  "he": {
    "Quy tắc Cramer (hệ vuông $n \\times n$ có $\\det A \\ne 0$)": [
      {
        "level": "Vận dụng",
        "problem": "Giải hệ $2x+y=5$, $x-y=1$ bằng Cramer.",
        "solution": "$\\Delta = \\begin{vmatrix}2&1\\\\1&-1\\end{vmatrix} = -3$<br>$\\Delta_x = \\begin{vmatrix}5&1\\\\1&-1\\end{vmatrix} = -6$<br>$\\Delta_y = \\begin{vmatrix}2&5\\\\1&1\\end{vmatrix} = -3$<br>$x=\\frac{\\Delta_x}{\\Delta}=2$, $y=\\frac{\\Delta_y}{\\Delta}=1$<br>V?y $(x,y)=(2,1)$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm $m$ để hệ $x+y=1$, $x+my=2$ có nghiệm duy nhất.",
        "solution": "$\\Delta = \\begin{vmatrix}1&1\\\\1&m\\end{vmatrix} = m-1$<br>H? c? nghi?m duy nh?t khi $\\Delta\\ne0$<br>$m-1\\ne0 \\Rightarrow m\\ne1$"
      }
    ],
    "Mô hình cân bằng Leontief Input-Output (I-O)": [
      {
        "level": "Vận dụng",
        "problem": "Với ma trận hệ số $A=\\begin{pmatrix}0.2&0\\\\0&0.5\\end{pmatrix}$ và nhu cầu cuối $d=(80,50)^T$, tìm sản lượng cân bằng.",
        "solution": "$I-A = \\begin{pmatrix}0.8&0\\\\0&0.5\\end{pmatrix}$<br>$\\begin{cases}0.8x_1=80\\\\0.5x_2=50\\end{cases}$<br>$x_1=100$, $x_2=100$<br>V?y $x=(100,100)^T$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Với $A=\\begin{pmatrix}0&0.2\\\\0.1&0\\end{pmatrix}$ và $d=(80,90)^T$, tìm sản lượng tổng.",
        "solution": "$\\begin{cases}x_1-0.2x_2=80\\\\-0.1x_1+x_2=90\\end{cases}$<br>T? ph??ng tr?nh th? nh?t: $x_1=80+0.2x_2$<br>Th? v?o ph??ng tr?nh th? hai: $-0.1(80+0.2x_2)+x_2=90$<br>$-8-0.02x_2+x_2=90 \\Rightarrow 0.98x_2=98 \\Rightarrow x_2=100$<br>Khi ?? $x_1=80+0.2(100)=100$<br>V?y $x=(100,100)^T$"
      }
    ]
  },
  "tr": {
    "Hai hệ thức Viète cực mạnh cho trị riêng": [
      {
        "level": "Vận dụng",
        "problem": "Ma trận cấp $2$ có vết $5$ và định thức $6$. Tìm hai trị riêng.",
        "solution": "$\\lambda_1+\\lambda_2=5$, $\\lambda_1\\lambda_2=6$<br>Hai s? n?y l? nghi?m c?a $t^2-5t+6=0$<br>$(t-2)(t-3)=0$<br>V?y hai tr? ri?ng l? $2$ v? $3$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Ma trận cấp $3$ có các trị riêng $1,2,4$. Tính vết và định thức.",
        "solution": "$\\operatorname{tr}A = 1+2+4 =7$<br>$\\det A = 1\\cdot2\\cdot4 =8$"
      }
    ],
    "Lũy thừa ma trận qua chéo hóa": [
      {
        "level": "Vận dụng",
        "problem": "Nếu $A=PDP^{-1}$ với $D=\\operatorname{diag}(2,3)$, hãy nêu $D^5$.",
        "solution": "$D = \\operatorname{diag}(2,3)$<br>$D^5 = \\operatorname{diag}(2^5,3^5)$<br>$=\\operatorname{diag}(32,243)$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Cho $A=P\\operatorname{diag}(1,2)P^{-1}$. Tính $\\det(A^n)$.",
        "solution": "$A = P\\operatorname{diag}(1,2)P^{-1}$ n?n $\\det A =1\\cdot2=2$<br>$\\det(A^n) = (\\det A)^n = 2^n$"
      }
    ]
  },
  "gh": {
    "Bảng vô cùng bé tương đương chuẩn (khi $u \\to 0$)": [
      {
        "level": "Vận dụng",
        "problem": "Tính $\\lim_{x\\to0}\\frac{\\sin 2x}{\\tan 3x}$.",
        "solution": "$\\sin 2x \\sim 2x$ khi $x\\to0$<br>$\\tan 3x \\sim 3x$ khi $x\\to0$<br>$\\lim_{x\\to0}\\frac{\\sin2x}{\\tan3x}=\\lim_{x\\to0}\\frac{2x}{3x}=\\frac23$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính $\\lim_{x\\to0}\\frac{e^{2x}-1-2x}{x^2}$.",
        "solution": "$e^{2x}=1+2x+2x^2+o(x^2)$<br>$e^{2x}-1-2x = 2x^2+o(x^2)$<br>$\\lim_{x\\to0}\\frac{e^{2x}-1-2x}{x^2}=\\lim_{x\\to0}\\frac{2x^2+o(x^2)}{x^2}=2$"
      }
    ],
    "Quy tắc L’Hôpital & Khử dạng mũ vô định": [
      {
        "level": "Vận dụng",
        "problem": "Tính $\\lim_{x\\to0}\\frac{e^x-1}{x}$.",
        "solution": "$\\lim_{x\\to0}\\frac{e^x-1}{x}$ c? d?ng $\\frac00$<br>L?H?pital: $\\lim_{x\\to0}\\frac{(e^x-1)'}{x'}=\\lim_{x\\to0}e^x=1$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính $\\lim_{x\\to0^+}x\\ln x$.",
        "solution": "$x\\ln x = \\frac{\\ln x}{1/x}$<br>??y l? d?ng $\\frac{-\\infty}{\\infty}$ khi $x\\to0^+$<br>L?H?pital: $\\frac{(\\ln x)'}{(1/x)'} = \\frac{1/x}{-1/x^2} = -x \\to0$<br>V?y $\\lim_{x\\to0^+}x\\ln x =0$"
      }
    ]
  },
  "dh": {
    "Công thức Leibniz đạo hàm cấp $n$ của tích": [
      {
        "level": "Vận dụng",
        "problem": "Tính đạo hàm cấp hai của $x e^x$.",
        "solution": "$(xe^x)' = e^x + xe^x = e^x(x+1)$<br>$(xe^x)'' = (e^x(x+1))' = e^x(x+1)+e^x = e^x(x+2)$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính đạo hàm cấp $n$ của $x e^{2x}$.",
        "solution": "$f(x)=x e^{2x} = u(x)v(x)$ v?i $u=x$, $v=e^{2x}$<br>Leibniz: $f^{(n)} = x e^{2x}2^n + n\\cdot1\\cdot e^{2x}2^{n-1}$<br>$=2^{n-1}e^{2x}(2x+n)$"
      }
    ],
    "Khai triển Maclaurin của 5 hàm cơ bản ($x \\to 0$)": [
      {
        "level": "Vận dụng",
        "problem": "Tìm hệ số của $x^4$ trong khai triển Maclaurin của $e^x$.",
        "solution": "$e^x = \\sum_{n=0}^{\\infty}\\frac{x^n}{n!}$<br>H? s? c?a $x^4$ l? $\\frac1{4!} = \\frac1{24}$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm hệ số của $x^5$ trong $\\sin x\\,e^x$.",
        "solution": "$\\sin x = x - \\frac{x^3}{3!}+\\frac{x^5}{5!}+\\cdots$<br>$e^x = 1 + x + \\frac{x^2}{2!}+\\frac{x^3}{3!}+\\frac{x^4}{4!}+\\cdots$<br>?? c? $x^5$, c?c c?p s? h?ng l? $\\frac{x^5}{5!}$, $-\\frac{x^3}{3!}\\cdot\\frac{x^2}{2!}$, $x\\cdot\\frac{x^4}{4!}$<br>$\\frac1{120}-\\frac1{12}+\\frac1{24} = -\\frac1{30}$"
      }
    ],
    "Quy tắc hội tụ tích phân suy rộng mẫu": [
      {
        "level": "Vận dụng",
        "problem": "Xét hội tụ của $\\int_1^\\infty\\frac{dx}{x^{3/2}}$.",
        "solution": "$\\int_1^\\infty x^{-3/2}\\,dx = \\lim_{b\\to\\infty}\\int_1^b x^{-3/2}\\,dx$<br>$=\\lim_{b\\to\\infty}\\left[-2x^{-1/2}\\right]_1^b = \\lim_{b\\to\\infty}(2-2b^{-1/2})=2$<br>V? gi?i h?n h?u h?n, t?ch ph?n h?i t?"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm $p$ để $\\int_0^1x^{-p}dx$ hội tụ.",
        "solution": "$\\int_0^1 x^{-p}\\,dx = \\lim_{a\\to0^+}\\int_a^1 x^{-p}\\,dx$<br>Tr??ng h?p $p\\ne1$: $=\\lim_{a\\to0^+}\\left[\\frac{x^{1-p}}{1-p}\\right]_a^1$<br>$=\\frac1{1-p}-\\lim_{a\\to0^+}\\frac{a^{1-p}}{1-p}$<br>H?i t? khi $1-p>0$, t?c $p<1$"
      }
    ]
  },
  "ch": {
    "Chuỗi chuẩn làm mốc so sánh": [
      {
        "level": "Vận dụng",
        "problem": "Xét $\\sum_{n=1}^\\infty\\frac1{n^2}$.",
        "solution": "$\\sum_{n=1}^{\\infty}\\frac1{n^2}$ l? chu?i Riemann v?i $p=2$<br>V? $p>1$, chu?i h?i t?"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm $x$ để $\\sum_{n=0}^\\infty(2x-1)^n$ hội tụ.",
        "solution": "$\\sum_{n=0}^{\\infty}(2x-1)^n$ l? chu?i h?nh h?c v?i c?ng b?i $r=2x-1$<br>Chu?i h?i t? khi $|r|<1$<br>$|2x-1|<1 \\iff -1<2x-1<1 \\iff 0<x<1$"
      }
    ],
    "Các tiêu chuẩn hội tụ cho chuỗi số dương ($a_n > 0$)": [
      {
        "level": "Vận dụng",
        "problem": "Xét hội tụ của $\\sum_{n=1}^\\infty\\frac{2^n}{n!}$.",
        "solution": "$a_n = \\frac{2^n}{n!}$<br>$\\frac{a_{n+1}}{a_n} = \\frac{2^{n+1}/(n+1)!}{2^n/n!} = \\frac{2}{n+1}$<br>$\\lim_{n\\to\\infty}\\frac{2}{n+1}=0<1$<br>V?y chu?i h?i t? theo ti?u chu?n D?Alembert"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Xét $\\sum_{n=1}^\\infty\\frac{3n+1}{n^3+2}$.",
        "solution": "$\\frac{(3n+1)/(n^3+2)}{1/n^2} = \\frac{n^2(3n+1)}{n^3+2} = \\frac{3n^3+n^2}{n^3+2}$<br>$\\lim_{n\\to\\infty}\\frac{3n^3+n^2}{n^3+2}=3$<br>V? gi?i h?n h?u h?n d??ng, chu?i c?ng t?nh v?i $\\sum 1/n^2$, n?n h?i t?"
      }
    ],
    "Bán kính hội tụ chuỗi lũy thừa $\\sum a_n (x - x_0)^n$": [
      {
        "level": "Vận dụng",
        "problem": "Tìm bán kính hội tụ của $\\sum_{n=0}^\\infty\\frac{x^n}{3^n}$.",
        "solution": "$a_n = 1/3^n$ v? $\\frac{|x|^{n+1}/3^{n+1}}{|x|^n/3^n} = \\frac{|x|}{3}$<br>Chu?i h?i t? khi $\\frac{|x|}{3}<1$, t?c $|x|<3$<br>V?y b?n k?nh h?i t? l? $R=3$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm miền hội tụ của $\\sum_{n=1}^\\infty\\frac{(x-1)^n}{n2^n}$.",
        "solution": "$\\sum_{n=1}^{\\infty}\\frac{(x-1)^n}{n2^n}$ c? d?ng $\\sum \\frac{(\\frac{x-1}{2})^n}{n}$<br>??y l? chu?i l?y th?a c? b?n k?nh $R=2$<br>T?i $x=3$: $\\sum 1/n$ ph?n k? (chu?i ?i?u h?a)<br>T?i $x=-1$: $\\sum (-1)^n/n$ h?i t? (chu?i ?i?u h?a lu?n phi?n)<br>V?y mi?n h?i t? l? $[-1,3)$"
      }
    ]
  },
  "nb": {
    "Vi phân toàn phần & Đạo hàm theo hướng": [
      {
        "level": "Vận dụng",
        "problem": "Cho $f=x^2y+3y$. Tính $df$ tại $(1,2)$.",
        "solution": "$f_x = 2xy$, $f_y = x^2+3$<br>T?i $(1,2)$: $f_x(1,2)=4$, $f_y(1,2)=4$<br>V?y $df = 4\\,dx +4\\,dy$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Với $f=x^2+y^2$, tìm hướng tăng nhanh nhất và tốc độ tăng tại $(1,2)$.",
        "solution": "$\\nabla f = (2x,2y)$<br>T?i $(1,2)$: $\\nabla f(1,2)=(2,4)$<br>H??ng t?ng nhanh nh?t l? $\\frac{(2,4)}{\\sqrt{20}} = \\frac{(1,2)}{\\sqrt5}$<br>T?c ?? t?ng l?n nh?t l? $\\|(2,4)\\| = 2\\sqrt5$"
      }
    ],
    "Quy tắc xét dấu cực trị tự do qua Hessian $\\Delta = AC - B^2$": [
      {
        "level": "Vận dụng",
        "problem": "Phân loại điểm dừng $(0,0)$ của $f=x^2+2y^2$.",
        "solution": "$A=f_{xx}=2$, $B=f_{xy}=0$, $C=f_{yy}=4$<br>$\\Delta = AC-B^2 = 2\\cdot4 -0=8>0$<br>$A>0$, n?n $(0,0)$ l? c?c ti?u"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Phân loại điểm dừng của $f=x^2-y^2$ tại gốc.",
        "solution": "$A=f_{xx}=2$, $B=f_{xy}=0$, $C=f_{yy}=-2$<br>$\\Delta = AC-B^2 = 2\\cdot(-2)-0=-4<0$<br>V? $\\Delta<0$, ?i?m g?c l? ?i?m y?n ng?a"
      }
    ]
  },
  "v1": {
    "Công thức nghiệm PTPB tuyến tính cấp 1: $y' + P(x)y = Q(x)$": [
      {
        "level": "Vận dụng",
        "problem": "Giải $y'+y=e^x$.",
        "solution": "Ph??ng tr?nh tuy?n t?nh c?p 1 c? nh?n t? t?ch ph?n $\\mu(x)=e^{\\int 1\\,dx}=e^x$<br>$e^x y' + e^x y = e^{2x}$<br>$(e^x y)' = e^{2x}$<br>$e^x y = \\frac12e^{2x}+C$<br>$y = \\frac12 e^x + C e^{-x}$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Giải bài toán Cauchy $y'-2y=x$, $y(0)=1$.",
        "solution": "Nh?n t? t?ch ph?n: $\\mu(x)=e^{-2x}$<br>$(e^{-2x}y)' = x e^{-2x}$<br>$e^{-2x}y = \\int x e^{-2x}dx$<br>S? d?ng t?ch ph?n t?ng ph?n: $\\int x e^{-2x}dx = -\\frac{x}{2}e^{-2x} - \\frac14 e^{-2x}+C$<br>Th? $y(0)=1$ ta ???c $C=\\frac54$<br>V?y $y=\\frac54 e^{2x} - \\frac{x}{2} - \\frac14$"
      }
    ],
    "Phương pháp giải phương trình Bernoulli: $y' + P(x)y = Q(x)y^n$": [
      {
        "level": "Vận dụng",
        "problem": "Giải $y'+y=y^2$ với $y\\ne0$.",
        "solution": "??t $z = y^{-1}$, suy ra $z' = -y^{-2}y' = -y^{-2}(y^2-y) = -1 + z$<br>V? $y\\ne0$, ta c? $z' - z = -1$<br>Nghi?m thu?n nh?t: $z_h=C e^x$; m?t nghi?m ri?ng: $z_p=1$<br>$z = 1 + C e^x$<br>$y = \\frac1{1+Ce^x}$; ri?ng bi?t $y=0$ c?ng l? nghi?m"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Giải $y'+\\frac1x y=xy^3$ trên $x>0$.",
        "solution": "??t $z=y^{-2}$, khi ?? $z' = -2y^{-3}y'$<br>V? $y'+\\frac1x y = x y^3$, nh?n v?i $-2y^{-3}$: $z' - \\frac2x z = -2x$<br>Nh?n t? t?ch ph?n $\\mu(x)=x^{-2}$: $(x^{-2}z)' = -2/x$<br>$x^{-2}z = C -2\\ln x$<br>$z = x^2(C-2\\ln x)$<br>$y = \\pm[x^2(C-2\\ln x)]^{-1/2}$; th?m nghi?m $y=0$"
      }
    ]
  },
  "v2": {
    "Phương pháp hệ số bất định tìm nghiệm riêng $y^*$ khi $f(x) = e^{\\alpha x} P_m(x)$": [
      {
        "level": "Vận dụng",
        "problem": "Tìm một nghiệm riêng của $y''-y=e^{2x}$.",
        "solution": "Gi? s? $y_p = A e^{2x}$<br>$y_p' =2A e^{2x}$, $y_p''=4A e^{2x}$<br>Thay v?o: $4A e^{2x} - A e^{2x} = 3A e^{2x}=e^{2x}$<br>$A=\\frac13$<br>V?y $y_p = \\frac13 e^{2x}$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tìm nghiệm tổng quát của $y''-3y'+2y=e^x$.",
        "solution": "Ph??ng tr?nh thu?n nh?t c? nghi?m $y_h=C_1 e^x + C_2 e^{2x}$<br>V? $e^x$ l? nghi?m thu?n nh?t, th? $y_p = A x e^x$<br>$y_p' = A(1+x)e^x$, $y_p'' = A(2+x)e^x$<br>Th? v?o: $A(2+x)e^x -3A(1+x)e^x +2Axe^x = -A e^x$<br>$-A e^x = e^x \\Rightarrow A=-1$<br>V?y $y = C_1 e^x + C_2 e^{2x} - x e^x$"
      }
    ]
  },
  "tb": {
    "Đổi biến sang tọa độ cực": [
      {
        "level": "Vận dụng",
        "problem": "Tính $\\iint_D(x^2+y^2)dxdy$ trên đĩa $x^2+y^2\\le1$.",
        "solution": "??i sang t?a ?? c?c: $x=r\\cos\\theta$, $y=r\\sin\\theta$, $dxdy=r\\,dr\\,d\\theta$<br>$x^2+y^2=r^2$<br>$\\iint_D(x^2+y^2)dxdy = \\int_0^{2\\pi}\\int_0^1 r^2\\cdot r\\,dr\\,d\\theta = \\int_0^{2\\pi}\\int_0^1 r^3\\,dr\\,d\\theta$<br>$= \\left(\\int_0^{2\\pi}d\\theta\\right)\\left(\\int_0^1 r^3dr\\right) = 2\\pi\\cdot\\frac14 = \\frac\\pi2$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính $\\iint_D e^{x^2+y^2}dxdy$ trên vành khăn $1\\le x^2+y^2\\le4$.",
        "solution": "Trong t?a ?? c?c: $x^2+y^2=r^2$, $dxdy=r\\,dr\\,d\\theta$<br>$\\iint_D e^{x^2+y^2}\\,dxdy = \\int_0^{2\\pi}\\int_1^2 e^{r^2} r\\,dr\\,d\\theta$<br>??t $u=r^2$, $du=2r\\,dr$: $\\int_1^2 re^{r^2}dr = \\frac12\\int_1^4 e^u du = \\frac12(e^4-e)$<br>V?y gi? tr? b?ng $2\\pi\\cdot\\frac12(e^4-e)=\\pi(e^4-e)$"
      }
    ],
    "Các phương trình đường cong đặc biệt trong tọa độ cực": [
      {
        "level": "Vận dụng",
        "problem": "Mô tả miền $0\\le r\\le2$, $0\\le\\theta\\le\\pi/2$ trong hệ Descartes.",
        "solution": "V?i $0\\le r\\le2$ v? $0\\le\\theta\\le\\pi/2$, ta c? b?n k?nh t?i ?a b?ng $2$<br>G?c $\\theta$ ch?y t? $0$ ??n $\\pi/2$, n?n l? g?c ph?n t? th? nh?t<br>??y l? m?t ph?n t? h?nh tr?n t?m $O$, b?n k?nh $2$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính diện tích miền bên trong đường tròn $r=2\\cos\\theta$.",
        "solution": "???ng tr?n $r=2\\cos\\theta$ c? t?m $(1,0)$, b?n k?nh $1$<br>$-\\frac\\pi2\\le\\theta\\le\\frac\\pi2$ l? gi?i h?n c?a h?nh<br>Di?n t?ch: $S=\\frac12\\int_{-\\pi/2}^{\\pi/2} (2\\cos\\theta)^2\\,d\\theta$<br>$=\\frac12\\int_{-\\pi/2}^{\\pi/2}4\\cos^2\\theta\\,d\\theta = 2\\int_{-\\pi/2}^{\\pi/2}\\cos^2\\theta\\,d\\theta = \\pi$"
      }
    ]
  },
  "td": {
    "Cách tính tích phân đường qua tham số $t$": [
      {
        "level": "Vận dụng",
        "problem": "Tính $\\int_C x\\,dx+y\\,dy$ trên đoạn từ $(0,0)$ đến $(1,2)$.",
        "solution": "Tham s? h?a ?o?n th?ng: $x=t$, $y=2t$, $0\\le t\\le1$<br>$dx=dt$, $dy=2dt$<br>$\\int_C x\\,dx + y\\,dy = \\int_0^1 (t\\cdot1 + 2t\\cdot2)\\,dt = \\int_0^1 5t\\,dt$<br>$= \\left[\\frac52 t^2\\right]_0^1 = \\frac52$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính $\\int_C y\\,dx+x\\,dy$ trên đường $x=t^2,y=t^3$, $0\\le t\\le1$.",
        "solution": "V?i $x=t^2$, $y=t^3$, ta c? $dx=2t\\,dt$, $dy=3t^2\\,dt$<br>$y\\,dx + x\\,dy = t^3(2t\\,dt) + t^2(3t^2\\,dt) = (2t^4+3t^4)\\,dt =5t^4\\,dt$<br>$\\int_C y\\,dx+x\\,dy = \\int_0^1 5t^4\\,dt = [t^5]_0^1 =1$"
      }
    ],
    "Công thức tính diện tích miền $D$ bằng tích phân đường": [
      {
        "level": "Vận dụng",
        "problem": "Dùng tích phân đường tính diện tích hình tròn bán kính $R$.",
        "solution": "$S=\\frac12\\oint_C(x\\,dy-y\\,dx)$<br>???ng tr?n b?n k?nh $R$ c? tham s? $x=R\\cos t$, $y=R\\sin t$, $0\\le t\\le2\\pi$<br>$x\\,dy-y\\,dx = R^2(\\cos^2 t +\\sin^2 t)dt =R^2dt$<br>$S = \\frac12\\int_0^{2\\pi}R^2dt = \\pi R^2$"
      },
      {
        "level": "Vận dụng cao",
        "problem": "Tính diện tích miền ellipse $x=a\\cos t$, $y=b\\sin t$, $0\\le t\\le2\\pi$.",
        "solution": "$S=\\frac12\\oint_C(x\\,dy-y\\,dx)$<br>V?i $x=a\\cos t$, $y=b\\sin t$, ta c? $x'=-a\\sin t$, $y'=b\\cos t$<br>$x\\,dy-y\\,dx = (a\\cos t)(b\\cos t\\,dt) - (b\\sin t)(-a\\sin t\\,dt) = ab(\\cos^2 t+\\sin^2 t)dt = ab\\,dt$<br>$S=\\frac12\\int_0^{2\\pi}ab\\,dt = \\pi ab$"
      }
    ]
  }
};
