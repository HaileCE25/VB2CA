// Phần học sâu bổ sung cho cẩm nang CA1: nền tảng, định lý, phương pháp và ví dụ.
window.THEORY_DEEP_DATA = {
  vt: [
    {
      title: "Tiên đề không gian véc tơ và tiêu chuẩn không gian con",
      content: "Một không gian véc tơ trên $\\mathbb R$ thỏa các tiên đề: (1) phép cộng giao hoán; (2) phép cộng kết hợp; (3) tồn tại véc tơ không; (4) mỗi véc tơ có véc tơ đối; (5) $a(bu)=(ab)u$; (6) $1u=u$; (7) $a(u+v)=au+av$; (8) $(a+b)u=au+bu$.<br><b>Tiêu chuẩn không gian con:</b> $W\\ne\\varnothing$ là không gian con khi và chỉ khi $au+bv\\in W$ với mọi $u,v\\in W$ và $a,b\\in\\mathbb R$. Tiêu chuẩn gộp này thường nhanh hơn kiểm tra riêng đóng với cộng và nhân vô hướng.<br><b>Không gian sinh:</b> $\\operatorname{span}(S)$ gồm mọi tổ hợp tuyến tính hữu hạn của các véc tơ trong $S$; đây là không gian con nhỏ nhất chứa $S$."
    },
    {
      title: "Định lý cơ sở, hạng và số chiều",
      content: "Trong không gian hữu hạn chiều, mọi cơ sở có cùng số véc tơ. Với ma trận $A$ kích thước $m\\times n$, định lý hạng–không gian-kernel cho $\\dim\\ker A+\\operatorname{rank}(A)=n$.<br>• Hệ gồm hơn $n$ véc tơ trong $\\mathbb R^n$ phụ thuộc tuyến tính; hệ gồm ít hơn $n$ véc tơ không thể sinh toàn bộ $\\mathbb R^n$.<br>• Các cột của $A$ độc lập tuyến tính khi và chỉ khi $Ax=0$ chỉ có nghiệm $x=0$; chúng sinh $\\mathbb R^m$ khi và chỉ khi $\\operatorname{rank}(A)=m$.<br>• Hạng hàng bằng hạng cột; phép biến đổi sơ cấp không làm đổi hạng."
    },
    {
      title: "Quy trình tìm cơ sở, tọa độ và trực giao",
      content: "<b>Khử Gauss:</b> xếp véc tơ làm cột (hoặc hàng), đưa ma trận về bậc thang; các cột trụ của ma trận ban đầu tạo cơ sở cho không gian cột. Giải $Ac=b$ để kiểm tra $b$ có thuộc không gian sinh hay không và tìm tọa độ theo hệ sinh độc lập.<br><b>Gram–Schmidt:</b> từ hệ độc lập $v_1,\\ldots,v_k$, lần lượt đặt $u_1=v_1$, $u_j=v_j-\\sum_{i<j}\\dfrac{\\langle v_j,u_i\\rangle}{\\langle u_i,u_i\\rangle}u_i$; chuẩn hóa $e_j=u_j/\\|u_j\\|$ để được hệ trực chuẩn.<br><b>Ví dụ:</b> Với $v_1=(1,1),v_2=(1,-1)$, tích vô hướng bằng $0$ và mỗi véc tơ có độ dài $\\sqrt2$; do đó $(v_1/\\sqrt2,v_2/\\sqrt2)$ là cơ sở trực chuẩn."
    },
    {
      title: "Ví dụ giải tổ hợp tuyến tính bằng hai cách",
      content: "Viết $b=(5,1)$ theo $u_1=(1,1),u_2=(1,-1)$.<br><b>Cách 1 – lập hệ:</b> $c_1+c_2=5$, $c_1-c_2=1$, suy ra $c_1=3,c_2=2$.<br><b>Cách 2 – ma trận:</b> $[u_1\\ u_2]c=b$; khử Gauss ma trận mở rộng $\\left[\\begin{array}{cc|c}1&1&5\\\\1&-1&1\\end{array}\\right]$, được $c=(3,2)^T$.<br>Kiểm tra lại: $3(1,1)+2(1,-1)=(5,1)$. Cách ma trận tổng quát hơn, đặc biệt hữu ích khi có nhiều véc tơ hoặc tham số."
    }
  ],
  mt: [
    {
      title: "Ma trận như phép biến đổi tuyến tính",
      content: "Ma trận $A\\in\\mathbb R^{m\\times n}$ xác định ánh xạ $T(x)=Ax$ từ $\\mathbb R^n$ sang $\\mathbb R^m$. Cột thứ $j$ là ảnh của véc tơ cơ sở chuẩn $e_j$. Phép hợp thành ánh xạ tương ứng với phép nhân ma trận theo đúng thứ tự: $T_A\\circ T_B$ có ma trận $AB$.<br>• $A^T$ biểu diễn ánh xạ liên hợp theo tích vô hướng Euclid; $A^TA$ luôn đối xứng nửa xác định dương.<br>• Tích $AB$ chỉ có nghĩa khi số cột của $A$ bằng số hàng của $B$; dù cả $AB$ và $BA$ cùng xác định, chúng thường khác nhau."
    },
    {
      title: "Định lý định thức và các phép biến đổi hàng",
      content: "Định thức bằng $0$ khi và chỉ khi các hàng/cột phụ thuộc tuyến tính; tương đương ma trận suy biến, không khả nghịch và hạng nhỏ hơn cấp. Với ma trận tam giác, định thức là tích các phần tử đường chéo.<br>• Đổi hai hàng đổi dấu định thức; nhân một hàng với $k$ nhân định thức với $k$; cộng bội của hàng này vào hàng kia giữ nguyên định thức.<br>• $\\det(AB)=\\det A\\det B$, $\\det(A^T)=\\det A$, $\\det(A^{-1})=1/\\det A$. Với ma trận cấp $n$, $\\det(kA)=k^n\\det A$."
    },
    {
      title: "Giải hệ ma trận và tìm nghịch đảo bằng Gauss–Jordan",
      content: "<b>Khử Gauss–Jordan:</b> ghép $[A|I]$, dùng phép biến đổi hàng đưa vế trái về $I$; khi đó vế phải là $A^{-1}$. Nếu không thể đưa về $I$, $A$ không khả nghịch.<br><b>So sánh phương pháp:</b> công thức phụ hợp phù hợp ma trận cấp nhỏ và bài lý thuyết; Gauss–Jordan thường hiệu quả khi tính số. Để giải $AX=B$, nên khử trực tiếp $[A|B]$ thay vì tính $A^{-1}$ trước; chỉ dùng $X=A^{-1}B$ khi nghịch đảo đã biết hoặc được yêu cầu.<br><b>Ví dụ:</b> $A=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ có định thức $-2$ và $A^{-1}=\\frac1{-2}\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}$. Thứ tự nhân phải giữ bên trái khi giải $AX=B$."
    },
    {
      title: "Ma trận chuyển cơ sở và đổi cơ sở của ánh xạ",
      content: "Lập ma trận $S_B=[b_1\\ \\cdots\\ b_n]$ bằng cách đặt các véc tơ cơ sở làm cột trong tọa độ chuẩn. Khi đó $x=S_B[x]_B$, nên $[x]_B=S_B^{-1}x$. Từ cơ sở $B$ sang $B'$: $[x]_{B'}=S_{B'}^{-1}S_B[x]_B$.<br>Nếu $A$ là ma trận của cùng một ánh xạ trong cơ sở cũ và $P$ có các cột là véc tơ cơ sở mới biểu diễn trong cơ sở cũ, ma trận mới là $P^{-1}AP$. Đây là phép đồng dạng, bảo toàn định thức, vết và đa thức đặc trưng."
    }
  ],
  he: [
    {
      title: "Định lý Kronecker–Capelli và hình học tập nghiệm",
      content: "Hệ $Ax=b$ tương thích khi và chỉ khi $\\operatorname{rank}(A)=\\operatorname{rank}([A|b])$. Nếu tương thích và hạng chung là $r$, số ẩn tự do là $n-r$. Nghiệm duy nhất xảy ra khi $r=n$; vô số nghiệm khi $r<n$.<br>Với hệ thuần nhất, $x=0$ luôn là nghiệm và tập nghiệm là $\\ker A$, có số chiều $n-r$. Nếu $x_p$ là một nghiệm riêng của hệ không thuần nhất thì mọi nghiệm có dạng $x=x_p+z$, $z\\in\\ker A$."
    },
    {
      title: "Ba phương pháp giải hệ và khi nào nên dùng",
      content: "<b>Khử Gauss:</b> phù hợp hầu hết hệ, cho biết rõ vô nghiệm/duy nhất/vô số nghiệm; luôn khử trên ma trận mở rộng và thế ngược.<br><b>Cramer:</b> chỉ áp dụng cho hệ vuông có $\\det A\\ne0$; hữu ích để viết công thức nghiệm hoặc xử lý tham số, không kinh tế với hệ lớn.<br><b>Nghịch đảo:</b> $x=A^{-1}b$ khi $A$ vuông khả nghịch; thuận tiện về mặt lý thuyết nhưng tính nghịch đảo riêng thường tốn hơn khử Gauss.<br><b>Hệ số tham số:</b> khi định thức phụ thuộc tham số, tìm các giá trị làm định thức hoặc pivot bằng $0$, rồi xét hạng riêng từng trường hợp; không chia cho biểu thức chứa tham số trước khi xét nó có thể bằng $0$."
    },
    {
      title: "Quy trình khử Gauss có tham số",
      content: "1) Viết ma trận mở rộng. 2) Khử các phần tử dưới pivot, ghi điều kiện của mọi phép chia. 3) Tách trường hợp pivot bằng $0$ và khác $0$. 4) Đọc hàng $[0\\ \\cdots\\ 0|c]$: nếu $c\\ne0$ hệ vô nghiệm. 5) Nếu tương thích, chọn ẩn tự do và biểu diễn nghiệm.<br><b>Ví dụ:</b> $x+y=2$, $2x+2y=a$. Khử hàng hai trừ hai lần hàng một được $0=a-4$. Nếu $a\\ne4$ vô nghiệm; nếu $a=4$, có vô số nghiệm $(x,y)=(2-t,t)$."
    },
    {
      title: "Mô hình cân bằng Leontief và cân bằng thị trường",
      content: "Trong mô hình đầu vào–đầu ra mở, $x=Ax+d$ nên $(I-A)x=d$. Nghiệm đại số duy nhất tồn tại khi $I-A$ khả nghịch; để diễn giải kinh tế thông thường còn cần các hệ số kỹ thuật không âm và điều kiện sản xuất khả thi (thường kiểm tra phổ của $A$ hoặc tính khả nghịch không âm).<br>Với thị trường nhiều hàng hóa, đặt cung bằng cầu cho từng mặt hàng, thu được hệ tuyến tính $Ap=b$. Giải đồng thời cả hệ, rồi kiểm tra nghiệm có thỏa điều kiện miền kinh tế như giá và lượng không âm hay không."
    }
  ],
  tr: [
    {
      title: "Đa thức đặc trưng, bội đại số và bội hình học",
      content: "Trị riêng là nghiệm của $\\det(A-\\lambda I)=0$; không gian riêng là $E_\\lambda=\\ker(A-\\lambda I)$. Bội đại số là số lần lặp của nghiệm trong đa thức đặc trưng; bội hình học là $\\dim E_\\lambda$. Luôn có $1\\le m_g\\le m_a$.<br>Ma trận chéo hóa được khi và chỉ khi tổng số chiều các không gian riêng bằng $n$; tương đương có đủ $n$ véc tơ riêng độc lập. Trị riêng phân biệt bảo đảm các véc tơ riêng độc lập, nhưng trị riêng lặp không tự động có nghĩa là không chéo hóa được."
    },
    {
      title: "Quy trình chéo hóa và ví dụ",
      content: "1) Tìm trị riêng từ định thức đặc trưng. 2) Với từng $\\lambda$, giải $(A-\\lambda I)v=0$. 3) Đếm số véc tơ riêng độc lập. 4) Đặt chúng làm cột $P$, đặt trị riêng tương ứng trên đường chéo $D$; kiểm tra $AP=PD$, suy ra $A=PDP^{-1}$.<br><b>Ví dụ:</b> $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ có trị riêng $3,1$, véc tơ riêng tương ứng $(1,1)^T,(1,-1)^T$. Vì vậy $P=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$, $D=\\operatorname{diag}(3,1)$ và $A=PDP^{-1}$. Do $P$ đối xứng, $P^{-1}=\\frac12P$."
    },
    {
      title: "Định lý phổ và dạng toàn phương",
      content: "Mọi ma trận thực đối xứng có cơ sở trực chuẩn gồm các véc tơ riêng và phân tích được $A=QDQ^T$ với $Q^TQ=I$. Đổi biến trực giao $x=Qy$ đưa dạng toàn phương $x^TAx$ về $\\sum_i\\lambda_i y_i^2$.<br>Để viết dạng toàn phương thành $x^TAx$, hệ số của $x_ix_j$ (với $i\\ne j$) được chia đều cho hai vị trí $a_{ij},a_{ji}$. Tiêu chuẩn Sylvester chỉ áp dụng cho ma trận đối xứng: xác định dương khi mọi định thức con chính góc đầu đều dương; xác định âm khi các dấu luân phiên bắt đầu âm."
    },
    {
      title: "Chọn cách xét dấu dạng toàn phương",
      content: "<b>Sylvester:</b> nhanh khi cần kết luận xác định dương/âm và ma trận đối xứng; kiểm tra các định thức con chính góc đầu, không phải mọi định thức con chính bất kỳ.<br><b>Trị riêng:</b> dấu của toàn bộ trị riêng cho phân loại xác định dương, xác định âm, không xác định; tiện khi đã chéo hóa.<br><b>Hoàn thành bình phương:</b> trực quan với dạng thấp chiều và giúp tìm phép đổi biến; phải giữ đúng các hệ số chéo. Nếu có trị riêng bằng $0$, dạng là nửa xác định hoặc suy biến, không phải xác định."
    }
  ],
  gh: [
    {
      title: "Giới hạn, liên tục và các định lý giá trị trung bình",
      content: "Định nghĩa giới hạn $\\lim_{x\\to a}f(x)=L$: với mọi $\\varepsilon>0$ tồn tại $\\delta>0$ sao cho $0<|x-a|<\\delta$ kéo theo $|f(x)-L|<\\varepsilon$. Giới hạn tồn tại khi giới hạn trái và phải tồn tại, hữu hạn và bằng nhau.<br>$f$ liên tục tại $a$ khi $f(a)$ xác định, giới hạn tồn tại và bằng $f(a)$.<br><b>Bolzano:</b> liên tục trên $[a,b]$, $f(a)f(b)<0$ thì có nghiệm trong $(a,b)$. <b>Weierstrass:</b> liên tục trên đoạn đóng hữu hạn thì đạt GTLN và GTNN. <b>Định lý giá trị trung gian:</b> hàm liên tục nhận mọi giá trị nằm giữa $f(a)$ và $f(b)$."
    },
    {
      title: "Chọn phương pháp tính giới hạn",
      content: "<b>Phân tích nhân tử/rút gọn:</b> dùng khi có dạng đại số $0/0$; chỉ khử nhân tử chung, không được khử các số hạng trong tổng.<br><b>Nhân liên hợp:</b> phù hợp căn thức; khử hiệu căn bằng liên hợp rồi mới thế giới hạn.<br><b>Vô cùng bé tương đương:</b> dùng trong tích và thương khi các đại lượng tương đương không bị triệt tiêu. Khi hiệu triệt tiêu, phải khai triển đến số hạng đầu tiên còn lại.<br><b>L’Hôpital:</b> chỉ cho dạng $0/0$ hoặc $\\infty/\\infty$, cần điều kiện khả vi và mẫu có đạo hàm khác $0$ trong lân cận thủng; giới hạn đạo hàm nếu tồn tại (hoặc điều kiện định lý tương ứng) mới kết luận được. Không áp dụng máy móc cho mọi dạng."
    },
    {
      title: "Khai triển Taylor và giới hạn dạng mũ",
      content: "Nếu $f$ đủ trơn gần $a$, $f(a+h)=\\sum_{k=0}^{n}\\frac{f^{(k)}(a)}{k!}h^k+o(h^n)$. Maclaurin là trường hợp $a=0$. Bậc khai triển phải đủ cao để giữ số hạng đầu không triệt tiêu sau khi thay vào biểu thức.<br>Với $f(x)^{g(x)}$ dạng vô định và $f(x)>0$, đặt $y=f^g$, lấy log: $\\ln y=g\\ln f$. Tính $L=\\lim g\\ln f$ rồi $y\\to e^L$ nếu $L$ hữu hạn; nếu $L=\\pm\\infty$ hoặc giới hạn không tồn tại thì xét tương ứng."
    },
    {
      title: "Ví dụ chọn đúng bậc khai triển",
      content: "Tính $\\lim_{x\\to0}\\dfrac{\\tan x-\\sin x}{x^3}$. Dùng $\\tan x=x+\\frac{x^3}{3}+o(x^3)$ và $\\sin x=x-\\frac{x^3}{6}+o(x^3)$. Hiệu bằng $\\frac{x^3}{2}+o(x^3)$, nên giới hạn bằng $\\frac12$. Nếu thay từng hàm chỉ bằng $x$ thì hai số hạng bị triệt tiêu và mất thông tin cần thiết."
    }
  ],
  dh: [
    {
      title: "Đạo hàm: định lý Rolle, Lagrange và hệ quả",
      content: "Đạo hàm tại $a$ là giới hạn thương sai phân; nó biểu diễn tốc độ biến thiên tức thời và hệ số góc tiếp tuyến. Khả vi tại điểm kéo theo liên tục tại điểm, nhưng mệnh đề ngược lại sai.<br><b>Rolle:</b> nếu $f$ liên tục trên $[a,b]$, khả vi trên $(a,b)$ và $f(a)=f(b)$, tồn tại $c$ sao cho $f'(c)=0$. <b>Lagrange:</b> tồn tại $c$ với $f'(c)=\\frac{f(b)-f(a)}{b-a}$.<br>Hệ quả: nếu $f'=0$ trên khoảng thì $f$ hằng; nếu $f'>0$ (hoặc $<0$) thì $f$ tăng (hoặc giảm). Các định lý đều cần đúng giả thiết về liên tục và khả vi."
    },
    {
      title: "Khảo sát hàm và tối ưu một biến",
      content: "Quy trình: xác định miền; tìm điểm không khả vi; giải $f'=0$; lập bảng dấu $f'$; suy ra khoảng đơn điệu và cực trị; dùng $f''$ để xét lồi/lõm và điểm uốn khi đủ điều kiện. Trên đoạn đóng, GTLN/GTNN chỉ có thể nằm ở điểm tới hạn bên trong hoặc hai đầu mút, vì vậy phải tính tất cả các giá trị này.<br>Đối với bài toán tối ưu ứng dụng, đặt biến và miền khả thi trước, lập hàm mục tiêu, tìm các điểm tới hạn trong miền rồi so sánh biên và điểm biên. Cực trị địa phương không mặc nhiên là cực trị tuyệt đối."
    },
    {
      title: "Nguyên hàm, tích phân xác định và ứng dụng",
      content: "Nguyên hàm $F'=f$; mọi nguyên hàm trên một khoảng liên thông có dạng $F+C$. Định lý Newton–Leibniz: nếu $F'=f$ liên tục trên $[a,b]$ thì $\\int_a^b f(x)\\,dx=F(b)-F(a)$.<br><b>Đổi biến:</b> đặt $u=g(x)$ và đổi cả vi phân lẫn cận. <b>Từng phần:</b> $\\int u\\,dv=uv-\\int v\\,du$, thường chọn $u$ để đạo hàm đơn giản hơn. <b>Diện tích:</b> $\\int_a^b|f-g|dx$; thể tích quay quanh trục $Ox$ theo lát cắt đĩa: $\\pi\\int_a^b(R^2-r^2)dx$.<br>Tích phân suy rộng phải định nghĩa bằng giới hạn; hội tụ khi giới hạn hữu hạn, không chỉ vì hàm có nguyên hàm."
    },
    {
      title: "Mô hình công vi phân và hệ số co giãn",
      content: "Nếu lực $F(h)$ tác dụng theo hướng chuyển động, công vi phân là $dW=F(h)dh$ và $W=\\int F(h)dh$. Với vật thể được nâng, lực thường bằng trọng lượng của phần đang nâng, có thể thay đổi theo độ cao; cần xác định đúng hình học và đơn vị.<br>Hệ số co giãn của $y$ theo $x$ là $\\varepsilon_{yx}=\\frac{x}{y}\\frac{dy}{dx}$ (khi $x,y\\ne0$). Nó đo xấp xỉ phần trăm biến thiên của $y$ khi $x$ tăng 1%; dấu cho biết chiều biến động, trị tuyệt đối cho biết mức co giãn."
    }
  ],
  ch: [
    {
      title: "Điều kiện cần và các phép thử hội tụ",
      content: "Nếu $\\sum a_n$ hội tụ thì $a_n\\to0$; điều kiện này không đủ. Với chuỗi dương: so sánh trực tiếp; so sánh giới hạn với giới hạn tỉ số thuộc $(0,\\infty)$; tích phân khi $a_n=f(n)$ với $f$ dương, liên tục, giảm; D’Alembert hoặc căn Cauchy. Tỉ số/căn nhỏ hơn 1 cho hội tụ, lớn hơn 1 cho phân kỳ; bằng 1 thì không kết luận.<br>Chuỗi luân phiên $\\sum(-1)^n b_n$ hội tụ nếu $b_n\\downarrow0$; sai số khi lấy đến số hạng thứ $N$ không vượt quá $b_{N+1}$. Phải phân biệt hội tụ tuyệt đối ($\\sum|a_n|$ hội tụ) với hội tụ có điều kiện."
    },
    {
      title: "Chiến lược chọn tiêu chuẩn",
      content: "• Có giai thừa, tích nhiều thừa số hoặc lũy thừa: thử tỉ số D’Alembert.<br>• Số hạng dạng $[u_n]^n$: thử căn Cauchy.<br>• So sánh với $1/n^p$ hoặc chuỗi hình học: dùng so sánh/so sánh giới hạn.<br>• Có $(-1)^n$ và độ lớn giảm về 0: Leibniz; muốn biết hội tụ tuyệt đối thì xét riêng $\\sum|a_n|$.<br>• Dạng $1/[n(\\ln n)^p]$: tiêu chuẩn tích phân cho thấy hội tụ khi $p>1$.<br>Luôn kiểm tra $a_n\\to0$ trước; nếu không, dừng vì chuỗi phân kỳ."
    },
    {
      title: "Chuỗi lũy thừa: hội tụ, đạo hàm và tích phân",
      content: "Chuỗi $\\sum a_n(x-x_0)^n$ có một bán kính $R$: hội tụ tuyệt đối bên trong, phân kỳ bên ngoài; hai đầu mút phải kiểm tra như chuỗi số riêng. Bên trong khoảng hội tụ, có thể lấy đạo hàm và tích phân từng số hạng; chuỗi đạo hàm có cùng bán kính hội tụ (đầu mút có thể đổi tính hội tụ).<br><b>Ví dụ:</b> $\\sum_{n=1}^{\\infty}x^n=\\frac{x}{1-x}$ khi $|x|<1$. Lấy đạo hàm: $\\sum_{n=1}^{\\infty}nx^{n-1}=\\frac1{(1-x)^2}$; nhân $x$ được $\\sum nx^n=\\frac{x}{(1-x)^2}$. Tại đầu mút không suy luận từ công thức trong khoảng mà phải xét chuỗi."
    },
    {
      title: "Ví dụ phân biệt hội tụ tuyệt đối và có điều kiện",
      content: "Chuỗi $\\sum_{n=1}^{\\infty}\\frac{(-1)^{n-1}}n$ hội tụ theo Leibniz vì $1/n$ giảm về $0$. Nhưng chuỗi trị tuyệt đối là chuỗi điều hòa $\\sum1/n$, phân kỳ; vì vậy chuỗi ban đầu hội tụ có điều kiện, không hội tụ tuyệt đối. Ngược lại, $\\sum(-1)^{n-1}/n^2$ hội tụ tuyệt đối do chuỗi $p$ với $p=2$ hội tụ."
    }
  ],
  nb: [
    {
      title: "Giới hạn, liên tục và khả vi của hàm nhiều biến",
      content: "Để kiểm tra $\\lim_{(x,y)\\to(a,b)}f(x,y)$, mọi đường tiến đến $(a,b)$ phải cho cùng một giới hạn; tìm hai đường cho hai kết quả khác nhau đủ kết luận giới hạn không tồn tại, nhưng thử vài đường bằng nhau chưa đủ chứng minh tồn tại. Có thể dùng bất đẳng thức và tọa độ cực để chặn biểu thức.<br>Khả vi mạnh hơn việc các đạo hàm riêng tồn tại. Nếu các đạo hàm riêng tồn tại trong lân cận và liên tục tại điểm thì hàm khả vi tại điểm (điều kiện đủ). Khi khả vi, $f(a+h,b+k)=f(a,b)+f_xh+f_yk+o(\\sqrt{h^2+k^2})$."
    },
    {
      title: "Quy tắc dây chuyền, gradient và Taylor nhiều biến",
      content: "Nếu $z=f(x,y)$, $x=x(t),y=y(t)$ thì $\\frac{dz}{dt}=f_xx'(t)+f_yy'(t)$. Gradient $\\nabla f=(f_x,f_y)$ vuông góc với đường mức $f(x,y)=c$ tại điểm chính quy; đạo hàm theo hướng đơn vị $u$ bằng $\\nabla f\\cdot u$.<br>Khai triển bậc hai quanh điểm $(a,b)$ gồm $f(a,b)+f_xh+f_yk+\\frac12(f_{xx}h^2+2f_{xy}hk+f_{yy}k^2)+o(h^2+k^2)$ khi các giả thiết trơn phù hợp. Ma trận Hessian gom các đạo hàm riêng cấp hai."
    },
    {
      title: "Cực trị: điểm tới hạn, Hessian và biên",
      content: "Điểm tới hạn gồm điểm mà gradient bằng 0 và điểm trong miền mà đạo hàm cần thiết không tồn tại. Với hàm hai biến tại điểm dừng, đặt $D=f_{xx}f_{yy}-f_{xy}^2$: $D>0,f_{xx}>0$ cực tiểu; $D>0,f_{xx}<0$ cực đại; $D<0$ điểm yên ngựa; $D=0$ chưa kết luận.<br>Nếu miền đóng và bị chặn, để tìm cực trị tuyệt đối phải xét điểm dừng bên trong và biên. Trên biên thường tham số hóa hoặc dùng điều kiện ràng buộc; hệ Lagrange cho ứng viên, sau đó so sánh giá trị hàm."
    },
    {
      title: "Lagrange và ví dụ cực trị trên đường tròn",
      content: "Với ràng buộc $g(x,y)=0$, nghiệm chính quy thỏa $\\nabla f=\\lambda\\nabla g$ và $g=0$, với giả thiết $\\nabla g\\ne0$ tại điểm xét. Đây là điều kiện tìm điểm ứng viên, không tự phân loại cực đại/cực tiểu; cần so sánh giá trị hoặc xét đạo hàm bậc hai trên tiếp tuyến.<br><b>Ví dụ:</b> cực trị $f=x+2y$ trên $x^2+y^2=5$. Ta có $(1,2)=\\lambda(2x,2y)$, suy ra $y=2x$; thay ràng buộc được $(1,2)$ và $(-1,-2)$. Giá trị tương ứng $5,-5$, nên trên đường tròn điểm thứ nhất là cực đại tuyệt đối, điểm thứ hai cực tiểu tuyệt đối."
    }
  ],
  v1: [
    {
      title: "Nhận dạng và giải phương trình tách biến, thuần nhất",
      content: "<b>Tách biến:</b> đưa về $g(y)dy=f(x)dx$, tích phân hai vế; khi chia cho biểu thức theo $y$, phải xét riêng nghiệm làm biểu thức đó bằng $0$.<br><b>Thuần nhất:</b> dạng $y'=F(y/x)$; đặt $u=y/x$, $y=ux$, nên $y'=u+xu'$. Phương trình giảm về tách biến theo $u,x$. Dùng khi vế phải chỉ phụ thuộc tỉ số $y/x$; kiểm tra riêng nghiệm $x=0$ nếu miền/điểm ban đầu liên quan."
    },
    {
      title: "Phương trình tuyến tính và nhân tử tích phân",
      content: "Dạng $y'+P(x)y=Q(x)$ có nhân tử tích phân $\\mu(x)=e^{\\int P(x)dx}$. Khi đó $(\\mu y)'=\\mu Q$ và $y=\\mu^{-1}(\\int\\mu Q\\,dx+C)$. Cách này là phép nhân hai vế để biến vế trái thành đạo hàm của tích.<br><b>Ví dụ:</b> $y'+2y=e^{-x}$. Nhân $e^{2x}$ được $(e^{2x}y)'=e^x$, nên $y=e^{-x}+Ce^{-2x}$. Kiểm tra bằng thế ngược vào phương trình."
    },
    {
      title: "Phương trình vi phân toàn phần và Bernoulli",
      content: "Với $M(x,y)dx+N(x,y)dy=0$, nếu $M_y=N_x$ trên miền đơn liên thì phương trình chính xác: tìm $F$ sao cho $F_x=M,F_y=N$, nghiệm $F=C$. Nếu chưa chính xác, đôi khi tồn tại nhân tử tích phân chỉ theo $x$ hoặc chỉ theo $y$; không được giả sử luôn tồn tại.<br>Bernoulli $y'+Py=Qy^n$: với nghiệm $y\\ne0$, đặt $z=y^{1-n}$ để được $z'+(1-n)Pz=(1-n)Q$. Phải kiểm tra riêng nghiệm $y=0$ vì phép chia cho $y^n$ đã loại nghiệm này."
    },
    {
      title: "Mô hình làm nguội Newton",
      content: "Nếu nhiệt độ môi trường $T_m$ không đổi và tốc độ thay đổi nhiệt độ tỉ lệ với độ chênh nhiệt, $T'=-k(T-T_m)$ với $k>0$. Tách biến hoặc dùng công thức tuyến tính đều cho $T(t)=T_m+(T_0-T_m)e^{-kt}$. Hằng số $k$ có đơn vị nghịch đảo thời gian; điều kiện ban đầu xác định $T_0$. Mô hình chỉ phù hợp khi các giả thiết về môi trường và hệ số truyền nhiệt gần như không đổi."
    }
  ],
  v2: [
    {
      title: "Phương trình thuần nhất cấp hai và Wronskian",
      content: "Với $y''+p(x)y'+q(x)y=0$, nếu $y_1,y_2$ độc lập tuyến tính thì nghiệm tổng quát $y=C_1y_1+C_2y_2$. Wronskian $W=y_1y_2'-y_1'y_2$ giúp kiểm tra độc lập tại điểm; trong phương trình hệ số liên tục, định lý Abel cho $W(x)=W(x_0)e^{-\\int_{x_0}^x p(t)dt}$.<br>Trường hợp hệ số hằng, phương trình đặc trưng có nghiệm thực phân biệt, nghiệm kép hoặc phức liên hợp; nghiệm tương ứng lần lượt là $e^{r_1x},e^{r_2x}$; $e^{rx},xe^{rx}$; và $e^{\\alpha x}\\cos\\beta x,e^{\\alpha x}\\sin\\beta x$."
    },
    {
      title: "Hệ số bất định: phạm vi và bảng dạng nghiệm",
      content: "Phương pháp áp dụng cho phương trình hệ số hằng khi vế phải là tổng các hàm dạng đa thức, mũ, sin/cos và tích của chúng.<br>• $P_m(x)$: thử đa thức bậc $m$.<br>• $e^{\\alpha x}P_m(x)$: thử $e^{\\alpha x}Q_m(x)$.<br>• $e^{\\alpha x}(P_m\\cos\\beta x+R_m\\sin\\beta x)$: thử $e^{\\alpha x}(U_m\\cos\\beta x+V_m\\sin\\beta x)$.<br>Nếu dạng thử trùng với nghiệm thuần nhất, nhân thêm $x^s$, trong đó $s$ là bội của nghiệm đặc trưng liên quan. Sau đó thế vào phương trình để so hệ số. Với vế phải tổng nhiều loại, cộng các dạng thử."
    },
    {
      title: "Biến thiên hằng số và ví dụ cộng hưởng",
      content: "Khi hệ số biến thiên hoặc vế phải không phù hợp hệ số bất định, dùng biến thiên hằng số. Với hai nghiệm cơ sở $y_1,y_2$ của thuần nhất, một nghiệm riêng có thể viết $y_p=-y_1\\int\\frac{y_2f}{W}dx+y_2\\int\\frac{y_1f}{W}dx$, với $W=y_1y_2'-y_1'y_2\\ne0$.<br><b>Ví dụ cộng hưởng:</b> $y''-2y'+y=e^x$. Nghiệm thuần nhất $(C_1+C_2x)e^x$. Đặt $y=e^xv$ thì vế trái bằng $e^xv''$; $v''=1$ chọn $v_p=x^2/2$, nên $y_p=\\frac12x^2e^x$. Cách đổi biến giúp thấy rõ vì sao cộng hưởng phải nhân $x^2$."
    },
    {
      title: "Bài toán Cauchy cấp hai",
      content: "Phương trình cấp hai cần hai điều kiện ban đầu độc lập, thường $y(x_0)=y_0$ và $y'(x_0)=y_1$. Trước hết tìm nghiệm tổng quát, sau đó thế hai điều kiện để lập hệ xác định $C_1,C_2$. Với hệ số liên tục, định lý tồn tại–duy nhất bảo đảm nghiệm địa phương duy nhất nếu hệ số và vế phải liên tục quanh $x_0$. Không được nhầm điều kiện đầu với điều kiện biên ở hai điểm khác nhau."
    }
  ],
  tb: [
    {
      title: "Tích phân kép: Fubini và mô tả miền",
      content: "Nếu miền $D$ đơn giản và hàm khả tích, định lý Fubini cho phép tính tích phân kép bằng tích phân lặp. Miền loại I: $a\\le x\\le b$, $g_1(x)\\le y\\le g_2(x)$; miền loại II: $c\\le y\\le d$, $h_1(y)\\le x\\le h_2(y)$. Đổi thứ tự phải mô tả lại miền hình học, không chỉ đổi tên $dx,dy$. Nếu biên cắt nhau làm cận trên/dưới thay đổi, cần chia miền."
    },
    {
      title: "Đổi biến, tọa độ cực và tích phân ba lớp",
      content: "Đổi biến kép $(x,y)=(x(u,v),y(u,v))$ cần nhân $|J|=|\\partial(x,y)/\\partial(u,v)|$. Tọa độ cực: $x=r\\cos\\theta,y=r\\sin\\theta$, $dA=r\\,dr\\,d\\theta$.<br>Tích phân ba lớp: $\\iiint_V f\\,dV$; tọa độ trụ có $dV=r\\,dr\\,d\\theta\\,dz$; tọa độ cầu $(\\rho,\\theta,\\varphi)$ với $\\theta$ là góc cực và $\\varphi$ là góc phương vị có $dV=\\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi$. Luôn xác định miền mới và giới hạn góc/radial trước khi tích phân."
    },
    {
      title: "Ứng dụng: diện tích, thể tích và giá trị trung bình",
      content: "Diện tích miền phẳng $D$ là $\\iint_D1\\,dA$. Thể tích dưới mặt $z=f(x,y)\\ge0$ là $\\iint_Df\\,dA$; nếu $f$ đổi dấu, tích phân cho thể tích có dấu và phải dùng trị tuyệt đối hoặc tách miền để tính thể tích hình học.<br>Khối lượng tấm mỏng mật độ $\\delta(x,y)$ là $m=\\iint_D\\delta\\,dA$; trọng tâm có $\\bar x=\\frac1m\\iint_Dx\\delta\\,dA$, $\\bar y=\\frac1m\\iint_Dy\\delta\\,dA$. Giá trị trung bình của $f$ trên miền diện tích dương là $\\frac1{\\operatorname{Area}(D)}\\iint_Df\\,dA$."
    },
    {
      title: "Ví dụ đổi thứ tự và kiểm tra miền",
      content: "Xét $\\int_0^1dy\\int_y^{\\sqrt y}f(x,y)dx$. Miền thỏa $0\\le y\\le1$, $y\\le x\\le\\sqrt y$. Viết lại các biên theo $y$: $y=x$ và $y=x^2$. Với $0\\le x\\le1$, ta có $x^2\\le y\\le x$. Do đó tích phân bằng $\\int_0^1dx\\int_{x^2}^{x}f(x,y)dy$. Kiểm tra nhanh: miền không âm, hai biên gặp nhau tại $x=0,1$, và $x^2\\le x$ trên đoạn này."
    }
  ],
  td: [
    {
      title: "Tích phân đường loại một và loại hai",
      content: "Nếu $C:r(t)=(x(t),y(t))$, $a\\le t\\le b$, thì $ds=\\sqrt{x'^2+y'^2}\\,dt$ và $\\int_Cf\\,ds=\\int_a^bf(x(t),y(t))\\|r'(t)\\|dt$; loại một không phụ thuộc hướng đi.<br>Loại hai $\\int_CPdx+Qdy=\\int_a^b[P(x(t),y(t))x'(t)+Q(x(t),y(t))y'(t)]dt$; đảo hướng làm đổi dấu. Chọn tham số sao cho đúng điểm đầu, điểm cuối và chiều định hướng đề bài."
    },
    {
      title: "Trường thế, độc lập đường đi và điều kiện miền",
      content: "Nếu tồn tại thế năng $U$ sao cho $U_x=P,U_y=Q$, thì $Pdx+Qdy=dU$ và tích phân từ $A$ đến $B$ bằng $U(B)-U(A)$. Trên miền đơn liên, với đạo hàm riêng liên tục, điều kiện $P_y=Q_x$ bảo đảm trường bảo thủ; trên miền không đơn liên điều kiện này nói chung chỉ cần chứ chưa đủ.<br>Để tìm $U$: tích phân $P$ theo $x$, thêm hàm tùy ý $C(y)$, rồi đạo hàm theo $y$ và so với $Q$ để xác định $C(y)$."
    },
    {
      title: "Định lý Green: giả thiết, hướng và ứng dụng",
      content: "Với $C$ là biên kín, trơn từng khúc, định hướng dương ngược chiều kim đồng hồ, $P,Q$ có đạo hàm riêng liên tục trên miền thích hợp và miền nằm bên trong $C$, $\\oint_C Pdx+Qdy=\\iint_D(Q_x-P_y)dA$. Đổi hướng đường biên đổi dấu vế trái.<br>Dùng Green để đổi tích phân đường kín thành tích phân kép khi $Q_x-P_y$ đơn giản; hoặc chọn $P,Q$ phù hợp để tính diện tích. Nếu miền có lỗ, phải tính cả biên trong với định hướng dương của miền (ngược chiều kim đồng hồ quanh biên ngoài, cùng chiều kim đồng hồ quanh lỗ)."
    },
    {
      title: "Ví dụ hai cách tính tích phân đường",
      content: "Tính $\\int_{(0,1)}^{(2,3)}(2x+y)dx+(x+2y)dy$.<br><b>Cách 1 – tìm thế:</b> $P_y=1=Q_x$, miền $\\mathbb R^2$ đơn liên. Tích phân $P$ theo $x$: $U=x^2+xy+C(y)$; so $U_y=Q$ được $C(y)=y^2$. Vậy $U=x^2+xy+y^2$ và tích phân bằng $U(2,3)-U(0,1)=18$.<br><b>Cách 2 – chọn đường gấp khúc:</b> đi từ $(0,1)$ đến $(2,1)$ rồi $(2,3)$; tính tích phân trên mỗi đoạn cho lần lượt $6$ và $12$, tổng $18$. Cách này kiểm chứng kết quả; cách thế nhanh hơn vì trường bảo thủ."
    }
  ]
};

window.THEORY_EXTRA_EXAMPLES = {
  vt: [
    {
      title: "Tìm cơ sở của không gian nghiệm",
      problem: "Tìm cơ sở và số chiều của $W=\\{(x,y,z)\\in\\mathbb R^3:x+y+z=0\\}$.",
      solution: "Từ điều kiện, $z=-x-y$, nên $(x,y,z)=x(1,0,-1)+y(0,1,-1)$. Hai véc tơ này độc lập tuyến tính, do đó tạo thành một cơ sở của $W$ và $\\dim W=2$."
    },
    {
      title: "Chiếu vuông góc lên một véc tơ",
      problem: "Tìm hình chiếu vuông góc của $u=(3,1)$ lên phương của $v=(1,1)$.",
      solution: "$\\operatorname{proj}_v u=\\dfrac{u\\cdot v}{v\\cdot v}v=\\dfrac{4}{2}(1,1)=(2,2)$. Kiểm tra phần dư $u-(2,2)=(1,-1)$ vuông góc với $v$ vì tích vô hướng bằng $0$."
    }
  ],
  mt: [
    {
      title: "Tính định thức bằng biến đổi hàng",
      problem: "Tính $\\det\\begin{pmatrix}1&2&1\\\\2&5&3\\\\1&0&2\\end{pmatrix}$.",
      solution: "Thực hiện $H_2\\leftarrow H_2-2H_1$, $H_3\\leftarrow H_3-H_1$ (không đổi định thức), được $\\begin{pmatrix}1&2&1\\\\0&1&1\\\\0&-2&1\\end{pmatrix}$. Khai triển theo cột đầu: $\\det=1(1\\cdot1-1\\cdot(-2))=3$."
    },
    {
      title: "Giải phương trình ma trận có thứ tự nhân",
      problem: "Cho $X A=B$, với $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ và $B=\\begin{pmatrix}3&8\\\\1&3\\end{pmatrix}$. Tìm $X$.",
      solution: "$A^{-1}=\\begin{pmatrix}1&-2\\\\0&1\\end{pmatrix}$. Vì $X$ nằm bên trái của $A$, nhân nghịch đảo bên phải: $X=BA^{-1}=\\begin{pmatrix}3&2\\\\1&1\\end{pmatrix}$. Thế lại: $XA=B$."
    }
  ],
  he: [
    {
      title: "Phân loại nghiệm theo tham số",
      problem: "Xét hệ $x+y=1$, $2x+2y=m$.",
      solution: "Khử phương trình thứ hai trừ hai lần phương trình thứ nhất, được $0=m-2$. Nếu $m\\ne2$ hệ vô nghiệm. Nếu $m=2$, hệ có vô số nghiệm $(x,y)=(1-t,t)$, $t\\in\\mathbb R$."
    },
    {
      title: "Mô hình Leontief hai ngành",
      problem: "Cho $A=\\begin{pmatrix}0&1/4\\\\1/5&0\\end{pmatrix}$ và nhu cầu cuối $d=(10,8)^T$. Tìm sản lượng $x$.",
      solution: "$(I-A)x=d$, tức $\\begin{pmatrix}1&-1/4\\\\-1/5&1\\end{pmatrix}x=(10,8)^T$. Định thức bằng $1-1/20=19/20$. Dùng nghịch đảo hoặc khử Gauss được $x_1=240/19$, $x_2=200/19$. Kiểm tra: $x_1-x_2/4=10$ và $-x_1/5+x_2=8$."
    }
  ],
  tr: [
    {
      title: "Chéo hóa ma trận đối xứng",
      problem: "Tìm trị riêng của $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ và tính $A^5$ bằng chéo hóa.",
      solution: "Các véc tơ riêng trực chuẩn là $q_1=(1,1)/\\sqrt2$, $q_2=(1,-1)/\\sqrt2$, ứng với trị riêng $3,1$. Vì $A=Q\\operatorname{diag}(3,1)Q^T$, suy ra $A^5=Q\\operatorname{diag}(243,1)Q^T=\\begin{pmatrix}122&121\\\\121&122\\end{pmatrix}$."
    },
    {
      title: "Phân loại dạng toàn phương",
      problem: "Xét dấu $q(x,y)=x^2+4xy+y^2$.",
      solution: "Ma trận đối xứng là $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$. Các trị riêng là $3$ và $-1$, trái dấu nên dạng không xác định. Có thể kiểm tra nhanh: $q(1,1)=6>0$ nhưng $q(1,-1)=-2<0$."
    }
  ],
  gh: [
    {
      title: "Giới hạn dùng liên hợp",
      problem: "Tính $\\lim_{x\\to0}\\dfrac{\\sqrt{1+2x}-1}{x}$.",
      solution: "Nhân liên hợp: $\\dfrac{\\sqrt{1+2x}-1}{x}=\\dfrac{2}{\\sqrt{1+2x}+1}$. Cho $x\\to0$, giới hạn bằng $1$."
    },
    {
      title: "Dùng định lý Bolzano chứng minh có nghiệm",
      problem: "Chứng minh $x^3+x-1=0$ có nghiệm trong $(0,1)$.",
      solution: "Đặt $f(x)=x^3+x-1$, liên tục trên $[0,1]$. Ta có $f(0)=-1<0$ và $f(1)=1>0$. Theo định lý Bolzano, tồn tại ít nhất một $c\\in(0,1)$ sao cho $f(c)=0$. Hơn nữa $f'(x)=3x^2+1>0$, nên nghiệm đó là duy nhất."
    }
  ],
  dh: [
    {
      title: "Tối ưu trên đoạn đóng",
      problem: "Tìm GTLN, GTNN của $f(x)=x^3-3x$ trên $[-2,2]$.",
      solution: "$f'(x)=3(x^2-1)=0$ tại $x=\\pm1$. So sánh $f(-2)=-2$, $f(-1)=2$, $f(1)=-2$, $f(2)=2$. Vậy GTLN là $2$, GTNN là $-2$."
    },
    {
      title: "Tích phân từng phần",
      problem: "Tính $\\int x e^x\\,dx$.",
      solution: "Chọn $u=x$, $dv=e^x dx$, nên $du=dx$, $v=e^x$. Khi đó $\\int xe^x dx=xe^x-\\int e^x dx=e^x(x-1)+C$. Đạo hàm kết quả để kiểm tra."
    }
  ],
  ch: [
    {
      title: "Chuỗi luân phiên và sai số",
      problem: "Xét hội tụ của $\\sum_{n=1}^{\\infty}(-1)^{n-1}/\\sqrt n$.",
      solution: "$b_n=1/\\sqrt n$ giảm và tiến về $0$, nên chuỗi hội tụ theo Leibniz. Chuỗi trị tuyệt đối là $\\sum1/\\sqrt n$, chuỗi $p$ với $p=1/2$ phân kỳ; vậy đây là hội tụ có điều kiện. Sai số sau $N$ số hạng không vượt quá $1/\\sqrt{N+1}$."
    },
    {
      title: "Bán kính và hai đầu mút",
      problem: "Tìm miền hội tụ của $\\sum_{n=1}^{\\infty}(x-1)^n/n^2$.",
      solution: "Cauchy–Hadamard cho $R=1$. Bên trong, chuỗi hội tụ tuyệt đối khi $|x-1|<1$. Tại $x=0$, được $\\sum(-1)^n/n^2$ hội tụ tuyệt đối; tại $x=2$, được $\\sum1/n^2$ hội tụ. Miền hội tụ là $[0,2]$."
    }
  ],
  nb: [
    {
      title: "Gradient và đạo hàm theo hướng",
      problem: "Cho $f(x,y)=x^2+y^2$. Tìm đạo hàm theo hướng đơn vị $u=(3/5,4/5)$ tại $(1,2)$.",
      solution: "$\\nabla f=(2x,2y)$ nên $\\nabla f(1,2)=(2,4)$. Đạo hàm theo hướng bằng $(2,4)\\cdot(3/5,4/5)=22/5$."
    },
    {
      title: "Cực trị tự do và điểm yên ngựa",
      problem: "Phân loại điểm dừng của $f(x,y)=x^2-y^2$.",
      solution: "Gradient bằng $0$ tại $(0,0)$. Hessian có $A=f_{xx}=2$, $B=f_{xy}=0$, $C=f_{yy}=-2$, do đó $D=AC-B^2=-4<0$. Gốc tọa độ là điểm yên ngựa, không phải cực trị."
    }
  ],
  v1: [
    {
      title: "Phương trình tách biến với điều kiện đầu",
      problem: "Giải $y'=xy$, biết $y(0)=2$.",
      solution: "Tách biến $dy/y=x\,dx$, suy ra $\\ln|y|=x^2/2+C$, hay $y=Ce^{x^2/2}$. Điều kiện đầu cho $C=2$, vậy $y=2e^{x^2/2}$."
    },
    {
      title: "Mô hình tăng trưởng logistic",
      problem: "Giải mô hình $P'=P(1-P)$ với $P(0)=1/2$.",
      solution: "Tách biến $\\frac{dP}{P(1-P)}=dt$. Tích phân cho $\\ln\\left|\\frac{P}{1-P}\\right|=t+C$. Điều kiện đầu cho $C=0$, nên $P/(1-P)=e^t$ và $P(t)=1/(1+e^{-t})$. Nghiệm cân bằng $P=0$ và $P=1$ cần được xét riêng khi tách biến."
    }
  ],
  v2: [
    {
      title: "Nghiệm thuần nhất với nghiệm phức",
      problem: "Giải $y''+4y=0$.",
      solution: "Phương trình đặc trưng $r^2+4=0$ có nghiệm $r=\\pm2i$. Do đó nghiệm tổng quát là $y=C_1\\cos2x+C_2\\sin2x$."
    },
    {
      title: "Vế phải đa thức, không cộng hưởng",
      problem: "Giải $y''-y=1$.",
      solution: "Nghiệm thuần nhất có phương trình đặc trưng $r^2-1=0$, nên $y_h=C_1e^x+C_2e^{-x}$. Thử nghiệm riêng hằng $y_p=A$; thay vào được $-A=1$, vậy $A=-1$. Nghiệm tổng quát $y=C_1e^x+C_2e^{-x}-1$."
    }
  ],
  tb: [
    {
      title: "Tính tích phân kép trên hình chữ nhật",
      problem: "Tính $\\int_0^1\\int_0^2(x+2y)\\,dy\\,dx$.",
      solution: "Tích phân trong theo $y$: $xy+y^2\\big|_0^2=2x+4$. Tích phân ngoài bằng $\\int_0^1(2x+4)dx=5$."
    },
    {
      title: "Đổi sang tọa độ cực",
      problem: "Tính $\\iint_{x^2+y^2\\le1}(x^2+y^2)\\,dA$.",
      solution: "Miền là đĩa đơn vị nên $0\\le r\\le1$, $0\\le\\theta\\le2\\pi$. Vì $x^2+y^2=r^2$ và $dA=r\,dr\,d\\theta$, tích phân bằng $\\int_0^{2\\pi}\\int_0^1r^3drd\\theta=\\pi/2$."
    }
  ],
  td: [
    {
      title: "Tích phân đường loại một",
      problem: "Tính $\\int_C(x+y)ds$ trên đoạn thẳng từ $(0,0)$ đến $(1,1)$.",
      solution: "Tham số hóa $x=t,y=t$, $0\\le t\\le1$. Khi đó $ds=\\sqrt2dt$, nên tích phân bằng $\\int_0^1 2t\\sqrt2dt=\\sqrt2$. Đảo chiều đường không đổi kết quả loại một."
    },
    {
      title: "Dùng Green tính tích phân trên đường tròn",
      problem: "Tính $\\oint_C(-y\\,dx+x\\,dy)$ với $C$ là đường tròn đơn vị ngược chiều kim đồng hồ.",
      solution: "Đặt $P=-y,Q=x$, khi đó $Q_x-P_y=1-(-1)=2$. Theo Green, tích phân bằng $\\iint_D2\\,dA=2\\pi$, vì diện tích đĩa đơn vị là $\\pi$."
    }
  ]
};
