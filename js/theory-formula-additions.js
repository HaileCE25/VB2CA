// Công thức bổ sung theo các chuyên đề CA1; mỗi mục có bài vận dụng và vận dụng cao.
window.THEORY_FORMULA_ADDITIONS = {
  vt: [
    {
      name: "Tích có hướng, diện tích & khoảng cách trong $\\mathbb{R}^3$",
      content: "Với $u=(u_1,u_2,u_3)$, $v=(v_1,v_2,v_3)$: $u\\times v=(u_2v_3-u_3v_2,\\ u_3v_1-u_1v_3,\\ u_1v_2-u_2v_1)$. Khi đó $|u\\times v|$ là diện tích hình bình hành; diện tích tam giác là $\\frac12|u\\times v|$. Khoảng cách từ $p$ đến đường thẳng $a+t v$ là $\\frac{|(p-a)\\times v|}{|v|}$.",
      examples: [
        { level: "Vận dụng", problem: "Tính diện tích tam giác có các đỉnh $A=(0,0,0)$, $B=(1,2,0)$, $C=(2,0,2)$.", solution: "$\\overrightarrow{AB}\\times\\overrightarrow{AC}=(4,-2,-4)$, có độ dài $6$. Diện tích tam giác bằng $\\frac12\\cdot6=3$." },
        { level: "Vận dụng cao", problem: "Tính khoảng cách từ $P=(1,2,3)$ đến đường thẳng $d:(x,y,z)=(0,0,0)+t(1,1,0)$.", solution: "$P\\times(1,1,0)=(-3,3,-1)$ nên $d(P,d)=\\frac{\\sqrt{19}}{\\sqrt2}=\\frac{\\sqrt{38}}2$." }
      ]
    }
  ],
  mt: [
    {
      name: "Định thức cấp 2, cấp 3 & khai triển Laplace",
      content: "$\\det\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}=ad-bc$. Với ma trận cấp 3 có thể dùng quy tắc Sarrus. Tổng quát, khai triển theo hàng $i$: $\\det A=\\sum_{j=1}^n a_{ij}C_{ij}$, trong đó $C_{ij}=(-1)^{i+j}M_{ij}$ là phần bù đại số.",
      examples: [
        { level: "Vận dụng", problem: "Tính $\\det\\begin{pmatrix}2&3\\\\1&4\\end{pmatrix}$.", solution: "$2\\cdot4-3\\cdot1=5$." },
        { level: "Vận dụng cao", problem: "Tìm $m$ để $\\det\\begin{pmatrix}1&2&0\\\\0&m&1\\\\2&1&3\\end{pmatrix}=0$.", solution: "Khai triển hàng đầu: $3m-1-2(0-2)=3m+3$. Vậy định thức bằng $0$ khi $m=-1$." }
      ]
    }
  ],
  he: [
    {
      name: "Khử Gauss & hệ thuần nhất",
      content: "Khử Gauss trên ma trận mở rộng $[A|b]$ để đưa về bậc thang. Hệ tương thích khi $\\operatorname{rank}(A)=\\operatorname{rank}([A|b])$. Với hệ thuần nhất $Ax=0$, số chiều không gian nghiệm là $n-\\operatorname{rank}(A)$; luôn có nghiệm không.",
      examples: [
        { level: "Vận dụng", problem: "Giải hệ $x+y=3$, $2x-y=0$.", solution: "Từ phương trình hai, $y=2x$. Thế vào phương trình đầu: $3x=3$, suy ra $(x,y)=(1,2)$." },
        { level: "Vận dụng cao", problem: "Xét số chiều không gian nghiệm của hệ thuần nhất $x+y+z=0$, $2x+2y+2z=0$.", solution: "Hai phương trình phụ thuộc, hạng bằng $1$. Có $3-1=2$ ẩn tự do nên không gian nghiệm có số chiều $2$; đặt $y=s,z=t$ thì $x=-s-t$." }
      ]
    }
  ],
  tr: [
    {
      name: "Đa thức đặc trưng & tiêu chuẩn chéo hóa",
      content: "Trị riêng là nghiệm của $p_A(\\lambda)=\\det(A-\\lambda I)=0$. Ma trận cấp $n$ chéo hóa được nếu tổng số chiều các không gian riêng bằng $n$; đặc biệt, ma trận có $n$ trị riêng phân biệt thì chéo hóa được. Khi $A=PDP^{-1}$, $A^k=PD^kP^{-1}$.",
      examples: [
        { level: "Vận dụng", problem: "Tìm trị riêng của $A=\\begin{pmatrix}2&0\\\\0&-1\\end{pmatrix}$.", solution: "$p_A(\\lambda)=(2-\\lambda)(-1-\\lambda)$ nên các trị riêng là $2$ và $-1$." },
        { level: "Vận dụng cao", problem: "Tính $A^{10}$ với $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$.", solution: "$A=I+N$, với $N^2=0$. Do đó $(I+N)^{10}=I+10N$, suy ra $A^{10}=\\begin{pmatrix}1&10\\\\0&1\\end{pmatrix}$." }
      ]
    }
  ],
  gh: [
    {
      name: "Các giới hạn cơ bản và vô cùng bé tương đương",
      content: "Khi $x\\to0$: $\\frac{\\sin x}{x}\\to1$, $\\frac{\\tan x}{x}\\to1$, $\\frac{1-\\cos x}{x^2}\\to\\frac12$, $\\frac{e^x-1}{x}\\to1$, $\\frac{\\ln(1+x)}x\\to1$, $(1+x)^{1/x}\\to e$. Có thể thay các vô cùng bé tương đương trong tích/thương, nhưng cần thận trọng với hiệu.",
      examples: [
        { level: "Vận dụng", problem: "Tính $\\lim_{x\\to0}\\frac{\\sin 3x}{x}$.", solution: "$\\frac{\\sin3x}{x}=3\\frac{\\sin3x}{3x}\\to3$." },
        { level: "Vận dụng cao", problem: "Tính $\\lim_{x\\to0}\\frac{1-\\cos 2x}{x\\sin x}$.", solution: "$1-\\cos2x\\sim2x^2$ và $\\sin x\\sim x$, nên giới hạn bằng $2$." }
      ]
    }
  ],
  dh: [
    {
      name: "Quy tắc đạo hàm và công thức Newton–Leibniz",
      content: "$(uv)'=u'v+uv'$, $\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}$, $(f(g(x)))'=f'(g(x))g'(x)$. Nếu $F'=f$ trên $[a,b]$ thì $\\int_a^b f(x)\\,dx=F(b)-F(a)$. Đổi biến $u=g(x)$ cần đổi cả cận; tích phân từng phần: $\\int u\\,dv=uv-\\int v\\,du$.",
      examples: [
        { level: "Vận dụng", problem: "Tính $\\frac{d}{dx}(x^2e^x)$.", solution: "Theo quy tắc tích: $2xe^x+x^2e^x=e^x(x^2+2x)$." },
        { level: "Vận dụng cao", problem: "Tính $\\int_0^1 xe^{x^2}\\,dx$.", solution: "Đặt $u=x^2$, $du=2x\\,dx$. Tích phân bằng $\\frac12\\int_0^1e^u du=\\frac{e-1}{2}$." }
      ]
    }
  ],
  ch: [
    {
      name: "Chuỗi đan dấu, tiêu chuẩn Leibniz & chuỗi Taylor",
      content: "Chuỗi đan dấu $\\sum(-1)^{n-1}b_n$ hội tụ nếu $b_n\\ge0$, giảm dần và $b_n\\to0$; sai số sau $N$ số hạng không vượt quá $b_{N+1}$. Chuỗi Taylor tại $x_0$: $f(x)=\\sum_{n=0}^\\infty\\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$ khi chuỗi hội tụ về hàm.",
      examples: [
        { level: "Vận dụng", problem: "Chuỗi $\\sum_{n=1}^\\infty(-1)^{n-1}/n$ hội tụ tuyệt đối hay có điều kiện?", solution: "$1/n$ giảm về $0$ nên chuỗi hội tụ theo Leibniz; chuỗi trị tuyệt đối là chuỗi điều hòa phân kỳ. Vậy chuỗi hội tụ có điều kiện." },
        { level: "Vận dụng cao", problem: "Cần lấy ít nhất bao nhiêu số hạng đầu của chuỗi Leibniz để sai số nhỏ hơn $0{,}01$, nếu $b_n=1/n$?", solution: "Sai số không quá số hạng kế tiếp $1/(N+1)$. Cần $1/(N+1)<0{,}01$, do đó $N\\ge100$." }
      ]
    }
  ],
  nb: [
    {
      name: "Gradient, đạo hàm theo hướng & xấp xỉ tuyến tính",
      content: "$\\nabla f=(f_x,f_y,\\ldots)$. Đạo hàm theo hướng đơn vị $u$ là $D_uf=\\nabla f\\cdot u$. Vi phân toàn phần $df=\\sum_i f_{x_i}dx_i$ và xấp xỉ tuyến tính gần $a$: $f(a+h)\\approx f(a)+\\nabla f(a)\\cdot h$.",
      examples: [
        { level: "Vận dụng", problem: "Cho $f(x,y)=x^2+y^2$. Tính đạo hàm theo hướng $u=(3/5,4/5)$ tại $(1,0)$.", solution: "$\\nabla f(1,0)=(2,0)$ nên $D_uf=(2,0)\\cdot(3/5,4/5)=6/5$." },
        { level: "Vận dụng cao", problem: "Ước lượng $\\sqrt{(4{,}02)^2+(2{,}97)^2}$ bằng vi phân.", solution: "Với $f(x,y)=\\sqrt{x^2+y^2}$, tại $(4,3)$ có $f=5$, $\\nabla f=(4/5,3/5)$. Với $(dx,dy)=(0{,}02,-0{,}03)$, $df=0{,}016-0{,}018=-0{,}002$. Ước lượng $4{,}998$." }
      ]
    }
  ],
  v1: [
    {
      name: "Phương trình vi phân tách biến & phương trình thuần nhất",
      content: "Nếu $y'=g(x)h(y)$ thì tách biến $\\frac{dy}{h(y)}=g(x)dx$ rồi tích phân, đồng thời xét nghiệm hằng bị mất khi chia cho $h(y)$. Với phương trình thuần nhất $y'=F(y/x)$, đặt $y=ux$ để đưa về phương trình tách biến theo $u$ và $x$.",
      examples: [
        { level: "Vận dụng", problem: "Giải $y'=xy$.", solution: "Tách biến $dy/y=x\\,dx$, suy ra $\\ln|y|=x^2/2+C$, nên $y=Ce^{x^2/2}$ (bao gồm nghiệm $y=0$)." },
        { level: "Vận dụng cao", problem: "Giải $y'=1+y/x$ trên miền $x\\ne0$.", solution: "Đặt $y=ux$, $y'=u+xu'$. Suy ra $xu'=1$, nên $u=\\ln|x|+C$. Vậy $y=x(\\ln|x|+C)$." }
      ]
    }
  ],
  v2: [
    {
      name: "Phương trình thuần nhất cấp hai & nghiệm cộng hưởng",
      content: "Với $ay''+by'+cy=0$, phương trình đặc trưng $ar^2+br+c=0$: hai nghiệm thực phân biệt $r_1,r_2$ cho $C_1e^{r_1x}+C_2e^{r_2x}$; nghiệm kép $r$ cho $(C_1+C_2x)e^{rx}$; nghiệm phức $\\alpha\\pm i\\beta$ cho $e^{\\alpha x}(C_1\\cos\\beta x+C_2\\sin\\beta x)$. Nếu dạng đoán nghiệm riêng trùng nghiệm thuần nhất, nhân thêm $x$ (hoặc lũy thừa cần thiết).",
      examples: [
        { level: "Vận dụng", problem: "Giải $y''-3y'+2y=0$.", solution: "Phương trình đặc trưng $(r-1)(r-2)=0$, nên $y=C_1e^x+C_2e^{2x}$." },
        { level: "Vận dụng cao", problem: "Tìm nghiệm tổng quát của $y''-2y'+y=e^x$.", solution: "Nghiệm thuần nhất là $(C_1+C_2x)e^x$. Do cộng hưởng bậc 2, đặt $y_p=\\frac{x^2}{2}e^x$. Vậy $y=e^x(C_1+C_2x+x^2/2)$." }
      ]
    }
  ],
  tb: [
    {
      name: "Đổi biến tổng quát, Jacobian & thể tích",
      content: "Với phép đổi biến $x=x(u,v),y=y(u,v)$: $dxdy=\\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|dudv$. Trong tọa độ trụ $dV=r\\,dr\\,d\\theta\\,dz$; tọa độ cầu $dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$ (với $\\varphi$ đo từ trục $Oz$).",
      examples: [
        { level: "Vận dụng", problem: "Đổi tích phân trên hình tròn đơn vị sang tọa độ cực: $\\iint_D1\\,dxdy$.", solution: "$0\\le r\\le1$, $0\\le\\theta\\le2\\pi$, nên tích phân bằng $\\int_0^{2\\pi}\\int_0^1r\\,drd\\theta=\\pi$." },
        { level: "Vận dụng cao", problem: "Tính thể tích khối cầu bán kính $R$ bằng tọa độ cầu.", solution: "$V=\\int_0^{2\\pi}\\int_0^\\pi\\int_0^R\\rho^2\\sin\\varphi\\,d\\rho d\\varphi d\\theta=2\\pi\\cdot2\\cdot R^3/3=4\\pi R^3/3$." }
      ]
    }
  ],
  td: [
    {
      name: "Độ dài đường cong & tích phân đường loại một",
      content: "Với đường cong tham số $r(t)=(x(t),y(t),z(t))$, $a\\le t\\le b$: $ds=|r'(t)|dt=\\sqrt{x'^2+y'^2+z'^2}\\,dt$. Do đó $\\int_C f\\,ds=\\int_a^b f(r(t))|r'(t)|dt$; không phụ thuộc chiều đi.",
      examples: [
        { level: "Vận dụng", problem: "Tính độ dài cung $y=x$, $0\\le x\\le1$.", solution: "Tham số $r(t)=(t,t)$, $|r'(t)|=\\sqrt2$. Độ dài là $\\int_0^1\\sqrt2dt=\\sqrt2$." },
        { level: "Vận dụng cao", problem: "Tính $\\int_C(x+y)ds$ trên đoạn thẳng từ $(0,0)$ đến $(1,1)$.", solution: "Đặt $r(t)=(t,t)$, $0\\le t\\le1$, $ds=\\sqrt2dt$. Tích phân bằng $\\int_0^1 2t\\sqrt2dt=\\sqrt2$." }
      ]
    }
  ]
};
