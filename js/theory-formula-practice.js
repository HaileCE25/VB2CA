// Hai bài tập phân hóa cho từng mục công thức hiện có trong THEORY_DATA.
window.THEORY_FORMULA_PRACTICE = {
  vt: {
    "Tích vô hướng, độ dài & góc trong $\\mathbb{R}^n$": [
      { level: "Vận dụng", problem: "Cho $u=(1,2,-2)$, $v=(2,0,1)$. Tính $\\langle u,v\\rangle$, $|u|$ và cosin góc giữa hai véc tơ.", solution: "$\\langle u,v\\rangle=0$, $|u|=3$. Vì tích vô hướng bằng $0$, hai véc tơ vuông góc và cosin góc bằng $0$." },
      { level: "Vận dụng cao", problem: "Tìm $m$ để $u=(m,1,2)$ vuông góc với $v=(2,-3,1)$, rồi tính độ dài $u$.", solution: "$u\\cdot v=2m-3+2=0$, nên $m=\\frac12$. Khi đó $|u|=\\sqrt{\\frac14+1+4}=\\frac{\\sqrt{21}}2$." }
    ],
    "Hình chiếu vuông góc": [
      { level: "Vận dụng", problem: "Tìm hình chiếu của $u=(3,1)$ lên $v=(1,2)$.", solution: "$u\\cdot v=5$, $|v|^2=5$, nên $\\operatorname{pr}_v(u)=v=(1,2)$." },
      { level: "Vận dụng cao", problem: "Phân tích $u=(2,3)$ thành thành phần song song và vuông góc với $v=(1,1)$.", solution: "Thành phần song song là $\\frac{u\\cdot v}{|v|^2}v=\\frac52(1,1)=(\\frac52,\\frac52)$. Thành phần vuông góc là $(-\\frac12,\\frac12)$." }
    ],
    "Ma trận chuyển cơ sở": [
      { level: "Vận dụng", problem: "Cơ sở $B'$ có các véc tơ cột $(1,1)$, $(1,-1)$. Tìm tọa độ của $x=(4,2)$ trong $B'$.", solution: "Giải $a+b=4$, $a-b=2$ được $a=3,b=1$. Vậy $[x]_{B'}=(3,1)$." },
      { level: "Vận dụng cao", problem: "Với cơ sở $B'=((1,1),(1,-1))$, một véc tơ có tọa độ $[x]_{B'}=(2,-1)$. Tìm tọa độ chuẩn của $x$.", solution: "$x=2(1,1)-(1,-1)=(1,3)$." }
    ]
  },
  mt: {
    "Các tính chất vàng của định thức ma trận vuông cấp $n$": [
      { level: "Vận dụng", problem: "Biết $\\det A=3$ với $A$ cấp $2$. Tính $\\det(2A)$ và $\\det(A^T)$.", solution: "$\\det(2A)=2^2\\det A=12$; $\\det(A^T)=\\det A=3$." },
      { level: "Vận dụng cao", problem: "Ma trận $A$ cấp $3$ có $\\det A=-2$. Tính $\\det(3A^{-1})$.", solution: "$\\det(3A^{-1})=3^3\\det(A^{-1})=27/(-2)=-27/2$." }
    ],
    "Công thức ma trận nghịch đảo": [
      { level: "Vận dụng", problem: "Tìm nghịch đảo của $A=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$.", solution: "$\\det A=1$, nên $A^{-1}=\\begin{pmatrix}1&-1\\\\-1&2\\end{pmatrix}$." },
      { level: "Vận dụng cao", problem: "Giải $AX=b$ với $A=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$, $b=(4,2)^T$.", solution: "Cộng hai phương trình cho $2x=6$, nên $x=3$; suy ra $y=1$. Vậy $X=(3,1)^T$." }
    ],
    "Phương trình ma trận": [
      { level: "Vận dụng", problem: "Giải $AX=B$ với $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, $B=\\begin{pmatrix}3\\\\2\\end{pmatrix}$.", solution: "$x+2y=3$, $y=2$, nên $X=(-1,2)^T$." },
      { level: "Vận dụng cao", problem: "Giải $XA=B$ với $A=\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}$, $B=\\begin{pmatrix}2&4\\\\1&0\\end{pmatrix}$.", solution: "Đặt $X=\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}$, so sánh $XA$ với $B$: $a=2,b=1,c=1,d=-\\frac12$. Vậy $X=\\begin{pmatrix}2&1\\\\1&-\\frac12\\end{pmatrix}$." }
    ]
  },
  he: {
    "Quy tắc Cramer (hệ vuông $n \\times n$ có $\\det A \\ne 0$)": [
      { level: "Vận dụng", problem: "Giải hệ $2x+y=5$, $x-y=1$ bằng Cramer.", solution: "$\\Delta=-3$, $\\Delta_x=-6$, $\\Delta_y=-3$, nên $(x,y)=(2,1)$." },
      { level: "Vận dụng cao", problem: "Tìm $m$ để hệ $x+y=1$, $x+my=2$ có nghiệm duy nhất.", solution: "Định thức hệ số là $m-1$. Nghiệm duy nhất khi $m\\ne1$." }
    ],
    "Mô hình cân bằng Leontief Input-Output (I-O)": [
      { level: "Vận dụng", problem: "Với ma trận hệ số $A=\\begin{pmatrix}0.2&0\\\\0&0.5\\end{pmatrix}$ và nhu cầu cuối $d=(80,50)^T$, tìm sản lượng cân bằng.", solution: "$(I-A)x=d$, nên $0.8x_1=80$, $0.5x_2=50$. Suy ra $x=(100,100)^T$." },
      { level: "Vận dụng cao", problem: "Với $A=\\begin{pmatrix}0&0.2\\\\0.1&0\\end{pmatrix}$ và $d=(80,90)^T$, tìm sản lượng tổng.", solution: "Hệ là $x_1-0.2x_2=80$, $-0.1x_1+x_2=90$. Nghiệm là $x_1=x_2=100$." }
    ]
  },
  tr: {
    "Hai hệ thức Viète cực mạnh cho trị riêng": [
      { level: "Vận dụng", problem: "Ma trận cấp $2$ có vết $5$ và định thức $6$. Tìm hai trị riêng.", solution: "Hai trị riêng có tổng $5$, tích $6$, nên là nghiệm $\\lambda^2-5\\lambda+6=0$: $2$ và $3$." },
      { level: "Vận dụng cao", problem: "Ma trận cấp $3$ có các trị riêng $1,2,4$. Tính vết và định thức.", solution: "$\\operatorname{tr}A=1+2+4=7$, $\\det A=1\\cdot2\\cdot4=8$." }
    ],
    "Lũy thừa ma trận qua chéo hóa": [
      { level: "Vận dụng", problem: "Nếu $A=PDP^{-1}$ với $D=\\operatorname{diag}(2,3)$, hãy nêu $D^5$.", solution: "$D^5=\\operatorname{diag}(2^5,3^5)=\\operatorname{diag}(32,243)$." },
      { level: "Vận dụng cao", problem: "Cho $A=P\\operatorname{diag}(1,2)P^{-1}$. Tính $\\det(A^n)$.", solution: "$\\det(A^n)=(\\det A)^n=(1\\cdot2)^n=2^n$." }
    ]
  },
  gh: {
    "Bảng vô cùng bé tương đương chuẩn (khi $u \\to 0$)": [
      { level: "Vận dụng", problem: "Tính $\\lim_{x\\to0}\\frac{\\sin 2x}{\\tan 3x}$.", solution: "$\\sin2x\\sim2x$, $\\tan3x\\sim3x$, nên giới hạn bằng $2/3$." },
      { level: "Vận dụng cao", problem: "Tính $\\lim_{x\\to0}\\frac{e^{2x}-1-2x}{x^2}$.", solution: "Khai triển $e^{2x}=1+2x+2x^2+o(x^2)$, nên giới hạn bằng $2$." }
    ],
    "Quy tắc L’Hôpital & Khử dạng mũ vô định": [
      { level: "Vận dụng", problem: "Tính $\\lim_{x\\to0}\\frac{e^x-1}{x}$.", solution: "Dạng $0/0$. L’Hôpital cho giới hạn $\\lim e^x=1$." },
      { level: "Vận dụng cao", problem: "Tính $\\lim_{x\\to0^+}x\\ln x$.", solution: "Viết thành $\\frac{\\ln x}{1/x}$, dạng $\\frac{-\\infty}{+\\infty}$. L’Hôpital: $\\frac{1/x}{-1/x^2}=-x\\to0$." }
    ]
  },
  dh: {
    "Công thức Leibniz đạo hàm cấp $n$ của tích": [
      { level: "Vận dụng", problem: "Tính đạo hàm cấp hai của $x e^x$.", solution: "$(xe^x)'=e^x(x+1)$; đạo hàm lần hai là $e^x(x+2)$." },
      { level: "Vận dụng cao", problem: "Tính đạo hàm cấp $n$ của $x e^{2x}$.", solution: "Theo Leibniz, chỉ có hai số hạng khác $0$: $f^{(n)}=xe^{2x}2^n+n e^{2x}2^{n-1}=2^{n-1}e^{2x}(2x+n)$." }
    ],
    "Khai triển Maclaurin của 5 hàm cơ bản ($x \\to 0$)": [
      { level: "Vận dụng", problem: "Tìm hệ số của $x^4$ trong khai triển Maclaurin của $e^x$.", solution: "Từ $e^x=\\sum_{n\\ge0}x^n/n!$, hệ số là $1/4!=1/24$." },
      { level: "Vận dụng cao", problem: "Tìm hệ số của $x^5$ trong $\\sin x\\,e^x$.", solution: "Tổng các tích bậc bằng $5$: $x^5/5!-(x^3/3!)x^2/2!+(x)x^4/4!=1/120-1/12+1/24=-1/30$." }
    ],
    "Quy tắc hội tụ tích phân suy rộng mẫu": [
      { level: "Vận dụng", problem: "Xét hội tụ của $\\int_1^\\infty\\frac{dx}{x^{3/2}}$.", solution: "Dạng $\\int_1^\\infty x^{-p}dx$ hội tụ khi $p>1$. Ở đây $p=3/2$, tích phân hội tụ và bằng $2$." },
      { level: "Vận dụng cao", problem: "Tìm $p$ để $\\int_0^1x^{-p}dx$ hội tụ.", solution: "Tích phân suy rộng tại $0$ hội tụ khi $-p>-1$, tức $p<1$." }
    ]
  },
  ch: {
    "Chuỗi chuẩn làm mốc so sánh": [
      { level: "Vận dụng", problem: "Xét $\\sum_{n=1}^\\infty\\frac1{n^2}$.", solution: "Đây là chuỗi Riemann với $p=2>1$, nên hội tụ." },
      { level: "Vận dụng cao", problem: "Tìm $x$ để $\\sum_{n=0}^\\infty(2x-1)^n$ hội tụ.", solution: "Chuỗi hình học hội tụ khi $|2x-1|<1$, tương đương $0<x<1$." }
    ],
    "Các tiêu chuẩn hội tụ cho chuỗi số dương ($a_n > 0$)": [
      { level: "Vận dụng", problem: "Xét hội tụ của $\\sum_{n=1}^\\infty\\frac{2^n}{n!}$.", solution: "$a_{n+1}/a_n=2/(n+1)\\to0<1$, chuỗi hội tụ theo D’Alembert." },
      { level: "Vận dụng cao", problem: "Xét $\\sum_{n=1}^\\infty\\frac{3n+1}{n^3+2}$.", solution: "$\\frac{(3n+1)/(n^3+2)}{1/n^2}\\to3$. Chuỗi cùng tính hội tụ với $\\sum1/n^2$." }
    ],
    "Bán kính hội tụ chuỗi lũy thừa $\\sum a_n (x - x_0)^n$": [
      { level: "Vận dụng", problem: "Tìm bán kính hội tụ của $\\sum_{n=0}^\\infty\\frac{x^n}{3^n}$.", solution: "Điều kiện tỉ số cho $|x|/3<1$, nên bán kính hội tụ $R=3$." },
      { level: "Vận dụng cao", problem: "Tìm miền hội tụ của $\\sum_{n=1}^\\infty\\frac{(x-1)^n}{n2^n}$.", solution: "$R=2$. Tại $x=3$ được chuỗi điều hòa phân kỳ; tại $x=-1$ được chuỗi điều hòa luân phiên hội tụ. Miền hội tụ $[-1,3)$." }
    ]
  },
  nb: {
    "Vi phân toàn phần & Đạo hàm theo hướng": [
      { level: "Vận dụng", problem: "Cho $f=x^2y+3y$. Tính $df$ tại $(1,2)$.", solution: "$f_x=2xy=4$, $f_y=x^2+3=4$. Do đó $df=4dx+4dy$." },
      { level: "Vận dụng cao", problem: "Với $f=x^2+y^2$, tìm hướng tăng nhanh nhất và tốc độ tăng tại $(1,2)$.", solution: "$\\nabla f=(2,4)$; hướng đơn vị là $(1,2)/\\sqrt5$, tốc độ tăng lớn nhất là $|\\nabla f|=2\\sqrt5$." }
    ],
    "Quy tắc xét dấu cực trị tự do qua Hessian $\\Delta = AC - B^2$": [
      { level: "Vận dụng", problem: "Phân loại điểm dừng $(0,0)$ của $f=x^2+2y^2$.", solution: "$A=f_{xx}=2$, $B=0$, $C=4$, $\\Delta=8>0$ và $A>0$, nên là cực tiểu." },
      { level: "Vận dụng cao", problem: "Phân loại điểm dừng của $f=x^2-y^2$ tại gốc.", solution: "$\\Delta=(2)(-2)-0=-4<0$, nên gốc là điểm yên ngựa." }
    ]
  },
  v1: {
    "Công thức nghiệm PTPB tuyến tính cấp 1: $y' + P(x)y = Q(x)$": [
      { level: "Vận dụng", problem: "Giải $y'+y=e^x$.", solution: "Nhân tử tích phân $e^x$: $(e^xy)'=e^{2x}$. Suy ra $y=\\frac12e^x+Ce^{-x}$." },
      { level: "Vận dụng cao", problem: "Giải bài toán Cauchy $y'-2y=x$, $y(0)=1$.", solution: "Nhân tử $e^{-2x}$: $(e^{-2x}y)'=xe^{-2x}$. Tích phân và áp điều kiện đầu được $y=\\frac54e^{2x}-\\frac{x}{2}-\\frac14$." }
    ],
    "Phương pháp giải phương trình Bernoulli: $y' + P(x)y = Q(x)y^n$": [
      { level: "Vận dụng", problem: "Giải $y'+y=y^2$ với $y\\ne0$.", solution: "Đặt $z=y^{-1}$, được $z'-z=-1$. Nghiệm $z=1+Ce^x$, nên $y=1/(1+Ce^x)$; cần xét thêm nghiệm $y=0$." },
      { level: "Vận dụng cao", problem: "Giải $y'+\\frac1x y=xy^3$ trên $x>0$.", solution: "Đặt $z=y^{-2}$, suy ra $z'-\\frac2x z=-2x$. Nhân tử $x^{-2}$: $(z/x^2)'=-2/x$, nên $z=x^2(C-2\\ln x)$ và $y=\\pm[x^2(C-2\\ln x)]^{-1/2}$ trên miền biểu thức dương; xét thêm $y=0$." }
    ]
  },
  v2: {
    "Phương pháp hệ số bất định tìm nghiệm riêng $y^*$ khi $f(x) = e^{\\alpha x} P_m(x)$": [
      { level: "Vận dụng", problem: "Tìm một nghiệm riêng của $y''-y=e^{2x}$.", solution: "Thử $y_p=Ae^{2x}$. Thay vào: $3Ae^{2x}=e^{2x}$, nên $y_p=\\frac13e^{2x}$." },
      { level: "Vận dụng cao", problem: "Tìm nghiệm tổng quát của $y''-3y'+2y=e^x$.", solution: "Nghiệm thuần nhất gồm $e^x,e^{2x}$. Do cộng hưởng với $e^x$, thử $y_p=Axe^x$, thế vào được $A=-1$. Vậy $y=C_1e^x+C_2e^{2x}-xe^x$." }
    ]
  },
  tb: {
    "Đổi biến sang tọa độ cực": [
      { level: "Vận dụng", problem: "Tính $\\iint_D(x^2+y^2)dxdy$ trên đĩa $x^2+y^2\\le1$.", solution: "$\\int_0^{2\\pi}\\int_0^1r^3drd\\theta=\\pi/2$." },
      { level: "Vận dụng cao", problem: "Tính $\\iint_D e^{x^2+y^2}dxdy$ trên vành khăn $1\\le x^2+y^2\\le4$.", solution: "$2\\pi\\int_1^2re^{r^2}dr=\\pi(e^4-e)$." }
    ],
    "Các phương trình đường cong đặc biệt trong tọa độ cực": [
      { level: "Vận dụng", problem: "Mô tả miền $0\\le r\\le2$, $0\\le\\theta\\le\\pi/2$ trong hệ Descartes.", solution: "Đây là một phần tư hình tròn bán kính $2$ ở góc phần tư thứ nhất." },
      { level: "Vận dụng cao", problem: "Tính diện tích miền bên trong đường tròn $r=2\\cos\\theta$.", solution: "$-\\pi/2\\le\\theta\\le\\pi/2$, $0\\le r\\le2\\cos\\theta$. Diện tích $\\frac12\\int_{-\\pi/2}^{\\pi/2}4\\cos^2\\theta d\\theta=\\pi$." }
    ]
  },
  td: {
    "Cách tính tích phân đường qua tham số $t$": [
      { level: "Vận dụng", problem: "Tính $\\int_C x\\,dx+y\\,dy$ trên đoạn từ $(0,0)$ đến $(1,2)$.", solution: "Đặt $x=t,y=2t$, $0\\le t\\le1$. Tích phân $\\int_0^1( t+4t)dt=5/2$." },
      { level: "Vận dụng cao", problem: "Tính $\\int_C y\\,dx+x\\,dy$ trên đường $x=t^2,y=t^3$, $0\\le t\\le1$.", solution: "$y x'+x y'=2t^4+3t^4=5t^4$. Tích phân bằng $1$." }
    ],
    "Công thức tính diện tích miền $D$ bằng tích phân đường": [
      { level: "Vận dụng", problem: "Dùng tích phân đường tính diện tích hình tròn bán kính $R$.", solution: "$S=\\frac12\\oint_C(x\\,dy-y\\,dx)$. Tham số hóa đường tròn ngược chiều kim đồng hồ cho $S=\\pi R^2$." },
      { level: "Vận dụng cao", problem: "Tính diện tích miền ellipse $x=a\\cos t$, $y=b\\sin t$, $0\\le t\\le2\\pi$.", solution: "$S=\\frac12\\int_0^{2\\pi}(xy'-yx')dt=\\frac12\\int_0^{2\\pi}ab\\,dt=\\pi ab$." }
    ]
  }
};
