# -*- coding: utf-8 -*-
"""Sinh ngân hàng câu hỏi ứng dụng thực tế & liên môn chuyên sâu (Applied Mathematics)
cho 12 chủ đề thi VB2 CA1: Mô hình kinh tế Leontief, Markov Chain, Mạch Kirchhoff,
Định luật Newton, Pha trộn nồng độ, Dao động RLC, Trọng tâm bản mỏng, Định lý Green,
Hàm Cobb-Douglas, v.v.
"""
import io
import json
import os
import random
import re
import sys
import sympy as sp
from sympy import Rational as R, Matrix, latex, symbols, pi, exp, log, sqrt, sin, cos

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.stderr.reconfigure(encoding='utf-8', errors='replace')
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from g_core import NQ, Q, SQ, steps, tx, T, pmat, vec, M, Retry
from gen_exams import clean
import gen_exams as G

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def build_applied_questions():
    questions = []
    
    # =========================================================================
    # 1. CHỦ ĐỀ mt (MA TRẬN): MÔ HÌNH LEONTIEF & CHUỖI MARKOV
    # =========================================================================
    for idx, (a11, a12, a21, a22, d1, d2) in enumerate([
        (R(1, 5), R(2, 5), R(1, 4), R(1, 4), 60, 40),
        (R(1, 4), R(1, 2), R(1, 3), R(1, 6), 90, 60),
        (R(2, 10), R(3, 10), R(4, 10), R(1, 10), 100, 50),
        (R(1, 6), R(1, 3), R(1, 2), R(1, 4), 70, 80),
        (R(1, 5), R(3, 10), R(2, 5), R(1, 5), 45, 55),
        (R(3, 10), R(1, 5), R(1, 5), R(2, 5), 80, 120),
        (R(1, 4), R(3, 8), R(1, 2), R(1, 8), 110, 70),
        (R(1, 3), R(1, 4), R(2, 5), R(1, 5), 85, 95),
    ]):
        A = Matrix([[a11, a12], [a21, a22]])
        I = sp.eye(2)
        IA = I - A
        det_IA = IA.det()
        IA_inv = IA.inv()
        D = Matrix([[d1], [d2]])
        X = IA_inv * D
        x1, x2 = X[0, 0], X[1, 0]
        total_X = x1 + x2

        # Dạng 1: Tìm tổng sản lượng toàn nền kinh tế
        q1 = (
            r'Trong mô hình cân đối liên ngành mở Leontief gồm 2 ngành kinh tế, cho ma trận hệ số kỹ thuật '
            r'$A = ' + pmat(A) + r'$ và vectơ cầu cuối cùng của thị trường $D = \begin{pmatrix}' + str(d1) + r' \\ ' + str(d2) + r'\end{pmatrix}$. '
            r'Tổng mức sản lượng của cả hai ngành $(x_1 + x_2)$ để đáp ứng hoàn toàn nhu cầu nền kinh tế bằng'
        )
        ex1 = steps(
            r'Ma trận Leontief: $I - A = ' + pmat(IA) + r'$, $\det(I-A) = ' + tx(det_IA) + r'$.',
            r'Ma trận nghịch đảo: $(I - A)^{-1} = ' + pmat(IA_inv) + r'$.',
            r'Vectơ sản lượng: $X = (I - A)^{-1}D = ' + pmat(X) + r' \Rightarrow x_1 = ' + tx(x1) + r',\; x_2 = ' + tx(x2) + r'$.',
            r'Tổng mức sản lượng: $x_1 + x_2 = ' + tx(total_X) + r'$.'
        )
        item1 = NQ(q1, total_X, [total_X - 20, total_X + 25, total_X * R(4, 5), x1 * 2], ex1)
        item1.update(topic='mt', type='mcq', tag='applied_leontief')
        questions.append(item1)

        # Dạng 2: Tìm sản lượng ngành 1
        q2 = (
            r'Trong mô hình kinh tế Input-Output Leontief với ma trận tiêu hao đầu vào $A = ' + pmat(A) + r'$ '
            r'và nhu cầu tiêu dùng cuối $D = \begin{pmatrix}' + str(d1) + r' \\ ' + str(d2) + r'\end{pmatrix}$. '
            r'Mức tổng sản lượng $x_1$ mà ngành thứ nhất cần sản xuất bằng'
        )
        ex2 = steps(
            r'Phương trình cân đối: $(I - A)X = D \Leftrightarrow X = (I - A)^{-1}D$.',
            r'Ta có $(I - A)^{-1} = ' + pmat(IA_inv) + r'$.',
            r'Nhân với $D$: $x_1 = ' + tx(IA_inv[0, 0]) + r'\cdot ' + str(d1) + r' + ' + tx(IA_inv[0, 1]) + r'\cdot ' + str(d2) + r' = ' + tx(x1) + r'$.'
        )
        item2 = NQ(q2, x1, [x2, x1 + 15, x1 - 20, x1 * R(3, 2)], ex2)
        item2.update(topic='mt', type='mcq', tag='applied_leontief_sector1')
        questions.append(item2)

    # Ứng dụng Chuỗi Markov phân phối dừng
    for p, q_prob in [(R(8, 10), R(7, 10)), (R(7, 10), R(6, 10)), (R(9, 10), R(8, 10)), (R(3, 4), R(2, 3)), (R(5, 6), R(3, 4))]:
        # P = [[p, 1-p], [1-q, q]]
        # pi * P = pi => x = x*p + y*(1-q) => x(1-p) = y(1-q)
        # x + y = 1 => x = (1-q)/((1-p)+(1-q))
        P_mat = Matrix([[p, 1 - p], [1 - q_prob, q_prob]])
        x_pi = (1 - q_prob) / ((1 - p) + (1 - q_prob))
        y_pi = 1 - x_pi
        q_mk = (
            r'Một thị trường viễn thông có 2 nhà mạng $A$ và $B$. Ma trận chuyển dịch khách hàng hàng tháng là '
            r'$P = ' + pmat(P_mat) + r'$ (với phần tử $p_{ij}$ là xác suất khách hàng chuyển từ mạng $i$ sang mạng $j$). '
            r'Về lâu dài, thị phần ổn định của nhà mạng $A$ đạt tỉ lệ bằng'
        )
        ex_mk = steps(
            r'Gọi $\pi = (x;\; y)$ là vectơ phân phối dừng thỏa $\pi P = \pi$ và $x + y = 1$.',
            r'Hệ phương trình: $\begin{cases} ' + tx(p) + r'x + ' + tx(1 - q_prob) + r'y = x \\ x + y = 1 \end{cases} '
            r'\Leftrightarrow ' + tx(1 - p) + r'x = ' + tx(1 - q_prob) + r'y$.',
            r'Thay $y = 1 - x$: $(' + tx(1 - p) + r' + ' + tx(1 - q_prob) + r')x = ' + tx(1 - q_prob) + r' \Rightarrow x = ' + tx(x_pi) + r'$.'
        )
        item_mk = NQ(q_mk, x_pi, [y_pi, x_pi * R(9, 10), x_pi + R(1, 10), R(1, 2)], ex_mk)
        item_mk.update(topic='mt', type='mcq', tag='applied_markov')
        questions.append(item_mk)

    # =========================================================================
    # 2. CHỦ ĐỀ he (HỆ PHƯƠNG TRÌNH): MẠNG ĐIỆN KIRCHHOFF & MÔ HÌNH CÂN BẰNG
    # =========================================================================
    for E1, E2, R1, R2, R3 in [(24, 12, 4, 2, 6), (36, 18, 6, 3, 9), (20, 10, 5, 2, 4), (30, 15, 3, 3, 6), (48, 24, 8, 4, 12)]:
        # I1 + I2 = I3
        # E1 - R1*I1 - R3*I3 = 0  => (R1+R3)I1 + R3*I2 = E1
        # E2 - R2*I2 - R3*I3 = 0  => R3*I1 + (R2+R3)I2 = E2
        M_cir = Matrix([[R1 + R3, R3], [R3, R2 + R3]])
        B_cir = Matrix([[E1], [E2]])
        I_sol = M_cir.inv() * B_cir
        I1_val, I2_val = I_sol[0, 0], I_sol[1, 0]
        I3_val = I1_val + I2_val
        q_kc = (
            r'Cho mạch điện hai mắt lưới có hai nguồn suất điện động $E_1 = ' + str(E1) + r'\,\text{V}$, $E_2 = ' + str(E2) + r'\,\text{V}$ '
            r'và ba điện trở $R_1 = ' + str(R1) + r'\,\Omega$, $R_2 = ' + str(R2) + r'\,\Omega$, $R_3 = ' + str(R3) + r'\,\Omega$. '
            r'Theo định luật Kirchhoff, cường độ dòng điện $I_3$ chạy qua điện trở chung $R_3$ (biết $I_3 = I_1 + I_2$) bằng'
        )
        ex_kc = steps(
            r'Áp dụng định luật 2 Kirchhoff cho hai vòng mắt lưới: $\begin{cases} (' + str(R1) + r' + ' + str(R3) + r')I_1 + ' + str(R3) + r'I_2 = ' + str(E1) + r' \\ ' + str(R3) + r'I_1 + (' + str(R2) + r' + ' + str(R3) + r')I_2 = ' + str(E2) + r'\end{cases}$',
            r'Ta được hệ: $\begin{cases} ' + str(R1 + R3) + r'I_1 + ' + str(R3) + r'I_2 = ' + str(E1) + r' \\ ' + str(R3) + r'I_1 + ' + str(R2 + R3) + r'I_2 = ' + str(E2) + r'\end{cases}$',
            r'Giải hệ Cramer hoặc khử Gauss được: $I_1 = ' + tx(I1_val) + r'\,\text{A},\; I_2 = ' + tx(I2_val) + r'\,\text{A}$.',
            r'Dòng điện qua nhánh chung: $I_3 = I_1 + I_2 = ' + tx(I3_val) + r'\,\text{A}$.'
        )
        item_kc = NQ(q_kc, I3_val, [I1_val, I2_val, I3_val + 1, I3_val / 2], ex_kc, unit=r'\,\text{A}')
        item_kc.update(topic='he', type='mcq', tag='applied_kirchhoff')
        questions.append(item_kc)

    # =========================================================================
    # 3. CHỦ ĐỀ vt (KHÔNG GIAN VECTƠ): TRỰC CHUẨN GRAM-SCHMIDT & HỒI QUY
    # =========================================================================
    for a, b, c in [(1, 2, 2), (2, 3, 6), (1, 4, 8), (4, 4, 7), (2, 6, 9)]:
        norm_v = int(sqrt(a * a + b * b + c * c))
        # Hình chiếu của u=(x,y,z) lên đường thẳng sinh bởi v=(a,b,c)
        u1, u2, u3 = 2 * a, -b, 3 * c
        dot_uv = u1 * a + u2 * b + u3 * c
        proj_len_sq = R(dot_uv ** 2, norm_v ** 2)
        dist_sq = (u1 ** 2 + u2 ** 2 + u3 ** 2) - proj_len_sq
        q_proj = (
            r'Trong không gian $\mathbb{R}^3$ với tích vô hướng chính tắc, cho vectơ $v = (' + str(a) + r';\,' + str(b) + r';\,' + str(c) + r')$ '
            r'và không gian con $W = \operatorname{span}\{v\}$. Cho $u = (' + str(u1) + r';\,' + str(u2) + r';\,' + str(u3) + r')$. '
            r'Khoảng cách từ điểm $u$ đến đường thẳng $W$, kí hiệu $d(u, W) = |u - \operatorname{pr}_W(u)|$, có bình phương bằng'
        )
        ex_proj = steps(
            r'Tích vô hướng $\langle u, v\rangle = (' + str(u1) + r')(' + str(a) + r') + (' + str(u2) + r')(' + str(b) + r') + (' + str(u3) + r')(' + str(c) + r') = ' + str(dot_uv) + r'$.',
            r'Độ dài $|v|^2 = ' + str(a * a + b * b + c * c) + r' = ' + str(norm_v ** 2) + r'$.',
            r'Độ dài hình chiếu: $|\operatorname{pr}_W(u)|^2 = \dfrac{\langle u, v\rangle^2}{|v|^2} = \dfrac{' + str(dot_uv ** 2) + r'}{' + str(norm_v ** 2) + r'} = ' + tx(proj_len_sq) + r'$.',
            r'Theo định lý Pythagore: $d^2(u, W) = |u|^2 - |\operatorname{pr}_W(u)|^2 = ' + str(u1 ** 2 + u2 ** 2 + u3 ** 2) + r' - ' + tx(proj_len_sq) + r' = ' + tx(dist_sq) + r'$.'
        )
        item_proj = NQ(q_proj, dist_sq, [proj_len_sq, dist_sq + 10, dist_sq - 5, dist_sq * 2], ex_proj)
        item_proj.update(topic='vt', type='mcq', tag='applied_projection')
        questions.append(item_proj)

    # =========================================================================
    # 4. CHỦ ĐỀ dh (ĐẠO HÀM): TỐC ĐỘ BIẾN THIÊN LIÊN QUAN & TỐI ƯU KINH TẾ
    # =========================================================================
    for R_cone, H_cone, flow_rate, h_curr in [(3, 6, 2, 4), (4, 8, 3, 4), (2, 4, 1, 2), (5, 10, 4, 5), (3, 9, 2, 3)]:
        # V = 1/3 * pi * r^2 * h; r/h = R/H => r = (R/H)*h
        # V = 1/3 * pi * (R/H)^2 * h^3
        # dV/dt = pi * (R/H)^2 * h^2 * dh/dt
        # dh/dt = (dV/dt) / (pi * (R/H)^2 * h^2)
        ratio = R(R_cone, H_cone)
        coeff = (ratio ** 2) * (h_curr ** 2)
        dh_val = R(flow_rate, coeff)  # hệ số trước 1/pi
        q_rate = (
            r'Một bể nước hình nón tròn xoay đỉnh ở dưới, có bán kính miệng $R = ' + str(R_cone) + r'\,\text{m}$ và chiều cao $H = ' + str(H_cone) + r'\,\text{m}$. '
            r'Nước được bơm vào bể với lưu lượng không đổi $c = ' + str(flow_rate) + r'\,\text{m}^3/\text{phút}$. '
            r'Tại thời điểm mực nước trong bể sâu $h = ' + str(h_curr) + r'\,\text{m}$, tốc độ dâng lên của mực nước có dạng $\dfrac{k}{\pi}\,(\text{m}/\text{phút})$. '
            r'Giá trị của hệ số $k$ bằng'
        )
        ex_rate = steps(
            r'Bán kính mặt nước tại độ sâu $h$: $r = \dfrac{R}{H}h = ' + tx(ratio) + r'h$.',
            r'Thể tích khối nước: $V = \dfrac{1}{3}\pi r^2 h = \dfrac{1}{3}\pi \left(' + tx(ratio) + r'h\right)^2 h = \dfrac{\pi}{' + str(3 * (H_cone // R_cone) ** 2) + r'} h^3$.',
            r'Đạo hàm theo thời gian: $\dfrac{dV}{dt} = \pi \left(' + tx(ratio) + r'\right)^2 h^2 \dfrac{dh}{dt}$.',
            r'Thay $h = ' + str(h_curr) + r'$ và $\dfrac{dV}{dt} = ' + str(flow_rate) + r'$: $' + str(flow_rate) + r' = \pi \cdot ' + tx(coeff) + r' \cdot \dfrac{dh}{dt} \Rightarrow \dfrac{dh}{dt} = \dfrac{' + tx(dh_val) + r'}{\pi}$.',
            r'Do đó hệ số $k = ' + tx(dh_val) + r'$.'
        )
        item_rate = NQ(q_rate, dh_val, [dh_val * 2, dh_val / 2, dh_val + 1, R(1, coeff)], ex_rate)
        item_rate.update(topic='dh', type='mcq', tag='applied_related_rates')
        questions.append(item_rate)

    # =========================================================================
    # 5. CHỦ ĐỀ nb (HÀM NHIỀU BIẾN): TỐI ƯU COBB-DOUGLAS & GRADIENT TRƯỜNG NHIỆT
    # =========================================================================
    for pK, pL, B_tot, alpha_p, beta_p in [(4, 2, 120, R(1, 3), R(2, 3)), (5, 10, 300, R(1, 2), R(1, 2)), (3, 6, 180, R(2, 3), R(1, 3)), (2, 4, 160, R(1, 4), R(3, 4))]:
        # Max Q = K^alpha * L^beta s.t. pK*K + pL*L = B
        # K = (alpha / (alpha+beta)) * (B / pK)
        # L = (beta / (alpha+beta)) * (B / pL)
        sum_ab = alpha_p + beta_p
        K_opt = (alpha_p / sum_ab) * (B_tot / pK)
        L_opt = (beta_p / sum_ab) * (B_tot / pL)
        q_cd = (
            r'Một doanh nghiệp sản xuất có hàm sản lượng Cobb-Douglas $Q(K, L) = K^{' + tx(alpha_p) + r'} L^{' + tx(beta_p) + r'}$, '
            r'trong đó $K$ là vốn, $L$ là lao động. Giá thuê một đơn vị vốn là $p_K = ' + str(pK) + r'$, giá thuê một đơn vị lao động là $p_L = ' + str(pL) + r'$, '
            r'và ngân sách sản xuất cố định $B = ' + str(B_tot) + r'$. '
            r'Để tối đa hóa sản lượng, lượng vốn $K^*$ doanh nghiệp cần đầu tư là'
        )
        ex_cd = steps(
            r'Bài toán cực trị có điều kiện: cực đại $Q = K^{' + tx(alpha_p) + r'} L^{' + tx(beta_p) + r'}$ với ràng buộc $' + str(pK) + r'K + ' + str(pL) + r'L = ' + str(B_tot) + r'$.',
            r'Lập hàm Lagrange: $\mathcal{L}(K, L, \lambda) = K^{' + tx(alpha_p) + r'} L^{' + tx(beta_p) + r'} - \lambda(' + str(pK) + r'K + ' + str(pL) + r'L - ' + str(B_tot) + r')$.',
            r"Điều kiện cần: $\dfrac{Q'_K}{Q'_L} = \dfrac{p_K}{p_L} \Leftrightarrow \dfrac{" + tx(alpha_p) + r" / K}{" + tx(beta_p) + r" / L} = \dfrac{" + str(pK) + r"}{" + str(pL) + r"} \Leftrightarrow " + str(pK) + r"K = \dfrac{" + tx(alpha_p) + r"}{" + tx(beta_p) + r"}" + str(pL) + r"L$.",
            r'Thay vào ràng buộc ngân sách ta được: $K^* = \dfrac{\alpha}{\alpha + \beta}\cdot\dfrac{B}{p_K} = ' + tx(K_opt) + r'$.'
        )
        item_cd = NQ(q_cd, K_opt, [L_opt, K_opt + 5, K_opt * 2, K_opt - 4], ex_cd)
        item_cd.update(topic='nb', type='mcq', tag='applied_cobb_douglas')
        questions.append(item_cd)

    # =========================================================================
    # 6. CHỦ ĐỀ v1 (PTPB CẤP 1): LÀM NGUỘI NEWTON & BỂ HÒA TAN
    # =========================================================================
    for T0, Tm, T1, t1_min, t2_min in [(100, 20, 60, 10, 20), (90, 30, 60, 15, 30), (80, 20, 50, 12, 24), (100, 25, 55, 8, 16)]:
        # T(t) = Tm + (T0 - Tm)*e^(-kt)
        # T1 - Tm = (T0 - Tm)*e^(-k*t1) => e^(-k*t1) = (T1 - Tm)/(T0 - Tm)
        # t2 = 2*t1 => e^(-k*t2) = [(T1 - Tm)/(T0 - Tm)]^2
        ratio_cooling = R(T1 - Tm, T0 - Tm)
        T2_val = Tm + (T0 - Tm) * (ratio_cooling ** 2)
        q_newt = (
            r'Theo định luật làm nguội của Newton, tốc độ giảm nhiệt độ của một vật tỷ lệ với hiệu số giữa nhiệt độ của vật và môi trường xung quanh: $\dfrac{dT}{dt} = -k(T - T_m)$. '
            r'Một chiếc bánh mì lấy từ lò nướng ra ở $T_0 = ' + str(T0) + r'^\circ\text{C}$ đặt trong phòng có nhiệt độ không đổi $T_m = ' + str(Tm) + r'^\circ\text{C}$. '
            r'Sau $' + str(t1_min) + r'$ phút, nhiệt độ của bánh giảm còn $' + str(T1) + r'^\circ\text{C}$. '
            r'Nhiệt độ của bánh sau $' + str(t2_min) + r'$ phút kể từ khi lấy ra khỏi lò bằng'
        )
        ex_newt = steps(
            r'Nghiệm của phương trình vi phân: $T(t) = T_m + (T_0 - T_m)e^{-kt} = ' + str(Tm) + r' + ' + str(T0 - Tm) + r'e^{-kt}$.',
            r'Tại $t = ' + str(t1_min) + r'$: $' + str(T1) + r' = ' + str(Tm) + r' + ' + str(T0 - Tm) + r'e^{-' + str(t1_min) + r'k} \Rightarrow e^{-' + str(t1_min) + r'k} = \dfrac{' + str(T1 - Tm) + r'}{' + str(T0 - Tm) + r'} = ' + tx(ratio_cooling) + r'$.',
            r'Tại $t = ' + str(t2_min) + r' = 2\cdot ' + str(t1_min) + r'$: $e^{-' + str(t2_min) + r'k} = \left(e^{-' + str(t1_min) + r'k}\right)^2 = \left(' + tx(ratio_cooling) + r'\right)^2 = ' + tx(ratio_cooling ** 2) + r'$.',
            r'Nhiệt độ sau $' + str(t2_min) + r'$ phút: $T(' + str(t2_min) + r') = ' + str(Tm) + r' + ' + str(T0 - Tm) + r'\cdot ' + tx(ratio_cooling ** 2) + r' = ' + tx(T2_val) + r'^\circ\text{C}$.'
        )
        item_newt = NQ(q_newt, T2_val, [T2_val - 5, T2_val + 10, T1 - (T0 - T1), Tm + 15], ex_newt, unit=r'^\circ\text{C}')
        item_newt.update(topic='v1', type='mcq', tag='applied_newton_cooling')
        questions.append(item_newt)

    # =========================================================================
    # 7. CHỦ ĐỀ v2 (PTPB CẤP 2): DAO ĐỘNG RLC & DAO ĐỘNG CÓ GIẢM CHẤN
    # =========================================================================
    for omega0, F0_val in [(2, 12), (3, 18), (4, 16), (5, 25), (1, 6)]:
        # y'' + omega0^2 * y = F0 * cos(omega0 * x)  (Cộng hưởng)
        # y_p = A * x * sin(omega0 * x)
        # y_p' = A*sin(omega0*x) + A*omega0*x*cos(omega0*x)
        # y_p'' = 2*A*omega0*cos(omega0*x) - A*omega0^2*x*sin(omega0*x)
        # y_p'' + omega0^2 * y_p = 2*A*omega0*cos(omega0*x) = F0*cos(omega0*x)
        # A = F0 / (2*omega0)
        A_res = R(F0_val, 2 * omega0)
        q_res = (
            r'Một hệ dao động cơ học không cản chịu ngoại lực kích thích tuần hoàn điều hòa đúng bằng tần số riêng (hiện tượng cộng hưởng cơ học): '
            r'$y\'\' + ' + str(omega0 ** 2) + r'y = ' + str(F0_val) + r'\cos(' + str(omega0) + r't)$. '
            r'Biết nghiệm riêng của bài toán có dạng dao động biên độ tăng dần theo thời gian $y^*(t) = A\,t\sin(' + str(omega0) + r't)$, '
            r'giá trị của hệ số biên độ $A$ bằng'
        )
        ex_res = steps(
            r'Phương trình thuần nhất có nghiệm đặc trưng $k = \pm ' + str(omega0) + r'i$.',
            r'Vì vế phải có dạng $\cos(' + str(omega0) + r't)$ nên xảy ra hiện tượng cộng hưởng, nghiệm riêng có dạng $y^* = A\,t\sin(' + str(omega0) + r't)$.',
            r"Đạo hàm cấp 1: $(y^*)^\prime = A\sin(" + str(omega0) + r"t) + " + str(omega0) + r"At\cos(" + str(omega0) + r"t)$.",
            r"Đạo hàm cấp 2: $(y^*)^{\prime\prime} = " + str(2 * omega0) + r"A\cos(" + str(omega0) + r"t) - " + str(omega0 ** 2) + r"At\sin(" + str(omega0) + r"t)$.",
            r"Thế vào phương trình: $(y^*)^{\prime\prime} + " + str(omega0 ** 2) + r"y^* = " + str(2 * omega0) + r"A\cos(" + str(omega0) + r"t) = " + str(F0_val) + r"\cos(" + str(omega0) + r"t)$.",
            r'Suy ra: $' + str(2 * omega0) + r'A = ' + str(F0_val) + r' \Rightarrow A = \dfrac{' + str(F0_val) + r'}{' + str(2 * omega0) + r'} = ' + tx(A_res) + r'$.'
        )
        item_res = NQ(q_res, A_res, [A_res * 2, A_res / 2, R(F0_val, omega0), A_res + 1], ex_res)
        item_res.update(topic='v2', type='mcq', tag='applied_resonance')
        questions.append(item_res)

    # =========================================================================
    # 8. CHỦ ĐỀ tb (TÍCH PHÂN BỘI): TRỌNG TÂM & MÔMEN QUÁN TÍNH BẢN MỎNG
    # =========================================================================
    for a_side in [2, 3, 4, 6, 8]:
        # Bản mỏng hình vuông [0, a] x [0, a] có khối lượng riêng rho(x,y) = x
        # M = int_0^a int_0^a x dx dy = a * (a^2 / 2) = a^3 / 2
        # M_y = int_0^a int_0^a x * x dx dy = a * (a^3 / 3) = a^4 / 3
        # x_bar = M_y / M = (a^4 / 3) / (a^3 / 2) = 2a / 3
        mass = R(a_side ** 3, 2)
        x_cg = R(2 * a_side, 3)
        q_cg = (
            r'Một bản kim loại phẳng mỏng chiếm miền hình vuông $D = [0;\, ' + str(a_side) + r'] \times [0;\, ' + str(a_side) + r']$ '
            r'có mật độ khối lượng diện tích biến thiên $\rho(x, y) = x$. '
            r'Hoành độ trọng tâm $\bar{x} = \dfrac{1}{M}\displaystyle\iint_D x\rho(x,y)\,dxdy$ của bản kim loại này bằng'
        )
        ex_cg = steps(
            r'Khối lượng tổng cộng của bản mỏng: $M = \displaystyle\int_0^{' + str(a_side) + r'} dy \int_0^{' + str(a_side) + r'} x\,dx = ' + str(a_side) + r'\left[\dfrac{x^2}{2}\right]_0^{' + str(a_side) + r'} = ' + tx(mass) + r'$.',
            r'Mômen tĩnh đối với trục $Oy$: $M_y = \displaystyle\iint_D x^2\,dxdy = \int_0^{' + str(a_side) + r'} dy \int_0^{' + str(a_side) + r'} x^2\,dx = ' + str(a_side) + r'\cdot\dfrac{' + str(a_side) + r'^3}{3} = ' + tx(R(a_side ** 4, 3)) + r'$.',
            r'Hoành độ trọng tâm: $\bar{x} = \dfrac{M_y}{M} = \dfrac{' + tx(R(a_side ** 4, 3)) + r'}{' + tx(mass) + r'} = \dfrac{2\cdot ' + str(a_side) + r'}{3} = ' + tx(x_cg) + r'$.'
        )
        item_cg = NQ(q_cg, x_cg, [R(a_side, 2), R(a_side, 3), R(3 * a_side, 4), x_cg + 1], ex_cg)
        item_cg.update(topic='tb', type='mcq', tag='applied_center_mass')
        questions.append(item_cg)

    # =========================================================================
    # 9. CHỦ ĐỀ td (TÍCH PHÂN ĐƯỜNG): ĐỊNH LÝ GREEN & DIỆN TÍCH ASTROID / ELIP
    # =========================================================================
    for a_el, b_el in [(3, 2), (4, 3), (5, 2), (2, 1), (6, 4)]:
        # S_elip = pi * a * b
        # Green: S = 1/2 * oint (x dy - y dx)
        # Tích phân I = oint_C (-y dx + x dy) = 2 * S = 2 * pi * a * b
        val_green = 2 * a_el * b_el * pi
        q_el = (
            r'Cho $C$ là đường elip $\dfrac{x^2}{' + str(a_el ** 2) + r'} + \dfrac{y^2}{' + str(b_el ** 2) + r'} = 1$ '
            r'được định hướng ngược chiều kim đồng hồ. Dùng định lý Green, tính tích phân đường '
            r'$I = \displaystyle\oint_C (-y)\,dx + x\,dy$.'
        )
        ex_el = steps(
            r'Đặt $P(x,y) = -y,\; Q(x,y) = x$. Ta có $\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y} = 1 - (-1) = 2$.',
            r'Theo định lý Green: $I = \displaystyle\iint_D \left(\dfrac{\partial Q}{\partial x} - \dfrac{\partial P}{\partial y}\right)dxdy = 2\iint_D dxdy = 2\cdot S_{\text{elip}}$.',
            r'Diện tích hình elip là $S_{\text{elip}} = \pi \cdot ' + str(a_el) + r' \cdot ' + str(b_el) + r' = ' + str(a_el * b_el) + r'\pi$.',
            r'Vậy tích phân bằng $I = 2 \cdot (' + str(a_el * b_el) + r'\pi) = ' + tx(val_green) + r'$.'
        )
        item_el = NQ(q_el, val_green, [a_el * b_el * pi, 4 * a_el * b_el * pi, -val_green, (a_el + b_el) * pi], ex_el)
        item_el.update(topic='td', type='mcq', tag='applied_green_ellipse')
        questions.append(item_el)

    # =========================================================================
    # 10. CHỦ ĐỀ ch (CHUỖI SỐ & CHUỖI HÀM): ƯỚC LƯỢNG SAI SỐ & TÍNH TÍCH PHÂN
    # =========================================================================
    for k_val, N_term in [(2, 10), (3, 5), (4, 4), (1, 20)]:
        # S = sum_{n=1}^oo (-1)^(n-1) / n^k
        # |R_n| <= a_{n+1} = 1 / (n+1)^k
        # Yêu cầu sai số < 1 / (N_term+1)^k
        err_bound = R(1, (N_term + 1) ** k_val)
        q_err = (
            r'Xét chuỗi đan dấu Leibniz $S = \displaystyle\sum_{n=1}^{+\infty} \dfrac{(-1)^{n-1}}{n^{' + str(k_val) + r'}}$. '
            r'Theo định lý ước lượng phần dư chuỗi đan dấu $|R_N| \le a_{N+1}$, để tổng riêng thứ $N$ xấp xỉ tổng chuỗi với sai số '
            r'$|S - S_N| \le ' + tx(err_bound) + r'$, số số hạng $N$ tối thiểu cần lấy bằng'
        )
        ex_err = steps(
            r'Chuỗi đan dấu thỏa mãn điều kiện Leibniz với $a_n = \dfrac{1}{n^{' + str(k_val) + r'}}$ giảm dần về $0$.',
            r'Phần dư thỏa mãn bất đẳng thức: $|R_N| = |S - S_N| \le a_{N+1} = \dfrac{1}{(N + 1)^{' + str(k_val) + r'}}$.',
            r'Yêu cầu $\dfrac{1}{(N + 1)^{' + str(k_val) + r'}} \le ' + tx(err_bound) + r' \Leftrightarrow (N + 1)^{' + str(k_val) + r'} \ge ' + str((N_term + 1) ** k_val) + r' \Leftrightarrow N + 1 \ge ' + str(N_term + 1) + r' \Rightarrow N \ge ' + str(N_term) + r'$.',
            r'Vậy số số hạng tối thiểu cần lấy là $N = ' + str(N_term) + r'$.'
        )
        item_err = NQ(q_err, N_term, [N_term + 1, N_term - 1, N_term * 2, N_term + 2], ex_err)
        item_err.update(topic='ch', type='mcq', tag='applied_leibniz_error')
        questions.append(item_err)

    # =========================================================================
    # 11. CHỦ ĐỀ gh (GIỚI HẠN): LÃI KÉP LIÊN TỤC & TĂNG TRƯỞNG
    # =========================================================================
    for P0_val, r_pct in [(100, 6), (200, 8), (50, 5), (1000, 10)]:
        # P(t) = P0 * e^(r*t)
        # Thời gian tăng gấp đôi: t_double = ln(2) / (r/100) = 100 * ln(2) / r
        # Làm tròn 1 chữ số thập phân
        r_dec = R(r_pct, 100)
        t_double = float(sp.log(2) / r_dec)
        t_double_rnd = round(t_double, 1)
        q_comp = (
            r'Một khoản tiền gửi tiết kiệm $P_0 = ' + str(P0_val) + r'\,\text{triệu đồng}$ được tính lãi kép liên tục với lãi suất danh nghĩa '
            r'$r = ' + str(r_pct) + r'\,\%/\text{năm}$. Công thức số tiền nhận được sau $t$ năm là $P(t) = \lim\limits_{n\to\infty} P_0\left(1 + \dfrac{r}{n}\right)^{nt} = P_0 e^{rt}$. '
            r'Thời gian cần thiết để số tiền ban đầu tăng gấp đôi (làm tròn đến hàng phần mười) bằng'
        )
        ex_comp = steps(
            r'Phương trình tăng gấp đôi: $P(t) = 2P_0 \Leftrightarrow P_0 e^{' + tx(r_dec) + r't} = 2P_0 \Leftrightarrow e^{' + tx(r_dec) + r't} = 2$.',
            r'Lấy lôgarit tự nhiên hai vế: $' + tx(r_dec) + r't = \ln 2 \Rightarrow t = \dfrac{\ln 2}{' + tx(r_dec) + r'} = \dfrac{100\ln 2}{' + str(r_pct) + r'}$.',
            r'Với $\ln 2 \approx 0{,}69315$, ta tính được: $t \approx \dfrac{' + str(100 * 0.69315) + r'}{' + str(r_pct) + r'} \approx ' + str(t_double_rnd).replace('.', ',') + r'\,\text{năm}$.'
        )
        item_comp = NQ(q_comp, R(int(round(t_double_rnd * 10)), 10), [
            R(int(round((t_double_rnd + 1.2) * 10)), 10),
            R(int(round((t_double_rnd - 1.5) * 10)), 10),
            R(int(round(t_double_rnd * 20)), 10)
        ], ex_comp, fmt=lambda v_: str(float(v_)).replace('.', ','), unit=r' năm')
        item_comp.update(topic='gh', type='mcq', tag='applied_compound_interest')
        questions.append(item_comp)

    # =========================================================================
    # 12. CHỦ ĐỀ tr (TRỊ RIÊNG & VECTƠ RIÊNG): DÃY FIBONACCI & TIẾN HÓA DÂN SỐ
    # =========================================================================
    for idx_tr in range(4):
        # A = [[1, 1], [1, 0]]
        # det(A - lambda*I) = lambda^2 - lambda - 1 = 0 => lambda = (1 +- sqrt(5))/2
        # Trị riêng trội (dominant eigenvalue) lambda_1 = (1 + sqrt(5))/2 (tỉ lệ vàng phi)
        q_tr = (
            r'Quá trình sinh sản của một quần thể sinh vật được mô tả bởi hệ phương trình sai phân $\begin{pmatrix} x_{n+1} \\ y_{n+1} \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} x_n \\ y_n \end{pmatrix}$. '
            r'Tốc độ tăng trưởng dài hạn của quần thể được xác định bởi trị riêng lớn nhất (trị riêng trội) của ma trận chuyển dịch. '
            r'Trị riêng đó có giá trị bằng'
        )
        ok_tr = (1 + sp.sqrt(5)) / 2
        ex_tr = steps(
            r'Phương trình đặc trưng của ma trận $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$: $\det(A - \lambda I) = \begin{vmatrix} 1 - \lambda & 1 \\ 1 & -\lambda \end{vmatrix} = \lambda^2 - \lambda - 1 = 0$.',
            r'Giải phương trình bậc hai: $\Delta = (-1)^2 - 4(1)(-1) = 5 > 0$.',
            r'Hai trị riêng là $\lambda_1 = \dfrac{1 + \sqrt{5}}{2}$ và $\lambda_2 = \dfrac{1 - \sqrt{5}}{2}$.',
            r'Trị riêng trội quyết định tốc độ tăng trưởng dài hạn (tỉ lệ vàng $\varphi$) là $\lambda_1 = \dfrac{1 + \sqrt{5}}{2}$.'
        )
        item_tr = Q(q_tr, r'$\dfrac{1 + \sqrt{5}}{2}$.', [
            r'$\dfrac{1 - \sqrt{5}}{2}$.',
            r'$\dfrac{1 + \sqrt{3}}{2}$.',
            r'$\sqrt{5}$.'
        ], ex_tr)
        item_tr.update(topic='tr', type='mcq', tag='applied_fibonacci_eigen')
        questions.append(item_tr)

    # =========================================================================
    # 13. MỞ RỘNG BỔ SUNG: BỂ PHA TRỘN (v1), HỘP TỐI ƯU (nb), THỊ TRƯỜNG (he)
    # =========================================================================
    # Pha trộn nồng độ (v1)
    for V0, c_in, r_flow, t_min in [(100, 2, 5, 20), (200, 3, 10, 20), (50, 4, 2, 25), (150, 2, 5, 30), (300, 1, 10, 30)]:
        # dy/dt = c_in * r_flow - (r_flow / V0) * y
        # y(t) = c_in * V0 * (1 - e^(-(r_flow/V0)*t))
        k_exp = R(r_flow * t_min, V0)
        max_salt = c_in * V0
        # Tính tại t_min: y = max_salt * (1 - e^(-k_exp))
        # Cho câu hỏi: "Khi t -> oo, lượng muối tối đa trong bể đạt bão hòa bằng"
        q_mix_sat = (
            r'Một bể chứa ban đầu có $' + str(V0) + r'\,\text{lít}$ nước tinh khiết. Người ta bơm vào bể dung dịch nước muối có nồng độ '
            r'$c_{\text{vào}} = ' + str(c_in) + r'\,\text{g/L}$ với lưu lượng $r = ' + str(r_flow) + r'\,\text{lít/phút}$. '
            r'Dung dịch trong bể được khuấy đều liên tục và chảy ra ngoài với cùng lưu lượng $r = ' + str(r_flow) + r'\,\text{lít/phút}$. '
            r'Lập phương trình vi phân $\dfrac{dy}{dt} = c_{\text{vào}}r - \dfrac{r}{V_0}y$, lượng muối tối đa trong bể khi thời gian $t \to +\infty$ đạt giá trị bằng'
        )
        ex_mix_sat = steps(
            r'Phương trình vi phân mô tả lượng muối $y(t)$: $\dfrac{dy}{dt} + \dfrac{' + str(r_flow) + r'}{' + str(V0) + r'}y = ' + str(c_in * r_flow) + r'$.',
            r'Nghiệm tổng quát: $y(t) = ' + str(max_salt) + r'\left(1 - e^{-\frac{' + str(r_flow) + r'}{' + str(V0) + r'}t}\right)\,\text{g}$.',
            r'Khi $t \to +\infty$, số hạng $e^{-\frac{' + str(r_flow) + r'}{' + str(V0) + r'}t} \to 0$, lượng muối tiến tới trạng thái bão hòa: $\lim\limits_{t\to+\infty} y(t) = ' + str(max_salt) + r'\,\text{g}$.'
        )
        item_mix = NQ(q_mix_sat, max_salt, [max_salt / 2, max_salt * 2, max_salt - 50, c_in * r_flow], ex_mix_sat, unit=r'\,\text{g}')
        item_mix.update(topic='v1', type='mcq', tag='applied_tank_mixing')
        questions.append(item_mix)

    # Tối ưu hóa kích thước bao bì hình hộp (nb)
    for V_target in [32, 108, 256, 500, 4]:
        # V = x^2 * y => y = V / x^2
        # S = x^2 + 4xy = x^2 + 4V/x
        # S'(x) = 2x - 4V/x^2 = 0 => x^3 = 2V => x = (2V)^(1/3)
        # 2*32 = 64 => x = 4, y = 2
        # 2*108 = 216 => x = 6, y = 3
        # 2*256 = 512 => x = 8, y = 4
        # 2*500 = 1000 => x = 10, y = 5
        # 2*4 = 8 => x = 2, y = 1
        x_val = int(round((2 * V_target) ** (1 / 3)))
        y_val = V_target // (x_val ** 2)
        S_min = x_val ** 2 + 4 * x_val * y_val
        q_box = (
            r'Người ta cần thiết kế một bồn chứa nước bằng kim loại có dạng hình hộp chữ nhật không nắp, đáy hình vuông cạnh $x$, '
            r'chiều cao $y$, có thể tích cố định $V = ' + str(V_target) + r'\,\text{m}^3$. '
            r'Để tiết kiệm chi phí vật liệu nhất (diện tích toàn phần $S(x, y) = x^2 + 4xy$ đạt giá trị nhỏ nhất), '
            r'cạnh đáy $x$ của bồn nước cần bằng'
        )
        ex_box = steps(
            r'Rút $y$ theo $x$: $V = x^2 y = ' + str(V_target) + r' \Rightarrow y = \dfrac{' + str(V_target) + r'}{x^2}$.',
            r'Diện tích vật liệu cần dùng: $S(x) = x^2 + 4x\left(\dfrac{' + str(V_target) + r'}{x^2}\right) = x^2 + \dfrac{' + str(4 * V_target) + r'}{x}$.',
            r"Đạo hàm tìm cực trị: $S^\prime(x) = 2x - \dfrac{" + str(4 * V_target) + r"}{x^2} = 0 \Leftrightarrow 2x^3 = " + str(4 * V_target) + r" \Leftrightarrow x^3 = " + str(2 * V_target) + r"$.",
            r'Suy ra kích thước đáy tối ưu: $x = \sqrt[3]{' + str(2 * V_target) + r'} = ' + str(x_val) + r'\,\text{m}$.'
        )
        item_box = NQ(q_box, x_val, [x_val + 2, x_val - 1, y_val, x_val * 2], ex_box, unit=r'\,\text{m}')
        item_box.update(topic='nb', type='mcq', tag='applied_box_optimization')
        questions.append(item_box)

    # Cân bằng thị trường 2 hàng hóa (he)
    for a1, b1, c1, d1, a2, b2, c2, d2 in [
        (10, 2, 1, 3, 15, 1, 3, 5),
        (20, 3, 1, 4, 25, 2, 4, 7),
        (12, 2, 2, 6, 18, 1, 2, 4),
        (16, 4, 1, 2, 24, 2, 5, 6),
    ]:
        # Q_d1 = a1 - b1*P1 + c1*P2; Q_s1 = -d1 + b1*P1 (đơn giản)
        # Ta dùng trực tiếp hệ tuyến tính giá cân bằng:
        # 3 P1 - P2 = 13
        # -P1 + 4 P2 = 14
        # => Giải ra P1, P2 nguyên đẹp
        # [m11, m12; m21, m22] * [P1; P2] = [R1; R2]
        M_eq = Matrix([[3, -1], [-1, 4]])
        P_target = Matrix([[6], [5]])
        R_eq = M_eq * P_target
        r1_val, r2_val = R_eq[0, 0], R_eq[1, 0]
        q_mkt = (
            r'Trong mô hình cân bằng thị trường hai loại hàng hóa thay thế, giá cân bằng $(P_1;\, P_2)$ thỏa mãn hệ phương trình cung cầu: '
            r'$\begin{cases} 3P_1 - P_2 = ' + str(r1_val) + r' \\ -P_1 + 4P_2 = ' + str(r2_val) + r'\end{cases}$. '
            r'Tổng mức giá cân bằng của hai mặt hàng $(P_1 + P_2)$ bằng'
        )
        ex_mkt = steps(
            r'Ma trận hệ số của hệ: $A = ' + pmat(M_eq) + r'$, $\det A = 3(4) - (-1)(-1) = 11 \ne 0$.',
            r'Áp dụng quy tắc Cramer: $D_{P_1} = \begin{vmatrix} ' + str(r1_val) + r' & -1 \\ ' + str(r2_val) + r' & 4 \end{vmatrix} = 4(' + str(r1_val) + r') - (-1)(' + str(r2_val) + r') = ' + str(4 * r1_val + r2_val) + r'$.',
            r'Giá mặt hàng 1: $P_1 = \dfrac{' + str(4 * r1_val + r2_val) + r'}{11} = 6$.',
            r'Thay vào phương trình đầu: $P_2 = 3(6) - ' + str(r1_val) + r' = 5$.',
            r'Tổng mức giá: $P_1 + P_2 = 6 + 5 = 11$.'
        )
        item_mkt = NQ(q_mkt, 11, [10, 12, 13, 9], ex_mkt)
        item_mkt.update(topic='he', type='mcq', tag='applied_market_equilibrium')
        questions.append(item_mkt)

    # Tích phân đường công cơ học lực thế (td)
    for a_c, b_c, x_end, y_end in [(2, 3, 2, 1), (1, 2, 3, 2), (3, 1, 1, 2), (2, 2, 2, 3)]:
        # F = (2*a_c*x*y + b_c) i + (a_c*x^2 + 2*y) j
        # U(x,y) = a_c * x^2 * y + b_c * x + y^2
        # W = U(x_end, y_end) - U(0,0) = a_c * x_end^2 * y_end + b_c * x_end + y_end^2
        W_val = a_c * (x_end ** 2) * y_end + b_c * x_end + (y_end ** 2)
        q_work = (
            r'Một lực $\vec{F}(x,y) = (' + str(2 * a_c) + r'xy + ' + str(b_c) + r')\vec{i} + (' + str(a_c) + r'x^2 + 2y)\vec{j}$ '
            r'tác dụng lên một chất điểm di chuyển từ gốc tọa độ $O(0;\,0)$ đến điểm $M(' + str(x_end) + r';\,' + str(y_end) + r')$. '
            r'Biết $\vec{F}$ là trường lực thế, công do lực $\vec{F}$ sinh ra bằng'
        )
        ex_work = steps(
            r'Kiểm tra điều kiện trường thế: $\dfrac{\partial Q}{\partial x} = 2(' + str(a_c) + r')x = ' + str(2 * a_c) + r'x = \dfrac{\partial P}{\partial y}$, do đó lực $\vec{F}$ là lực bảo toàn (lực thế).',
            r'Hàm thế vị $U(x,y) = \displaystyle\int (' + str(2 * a_c) + r'xy + ' + str(b_c) + r')\,dx = ' + str(a_c) + r'x^2y + ' + str(b_c) + r'x + C(y)$.',
            r"Đạo hàm theo $y$: $U^\prime_y = " + str(a_c) + r"x^2 + C^\prime(y) = " + str(a_c) + r"x^2 + 2y \Rightarrow C(y) = y^2$.",
            r'Hàm thế vị: $U(x,y) = ' + str(a_c) + r'x^2y + ' + str(b_c) + r'x + y^2$.',
            r'Công sinh ra: $W = U(M) - U(O) = ' + str(a_c) + r'(' + str(x_end) + r')^2(' + str(y_end) + r') + ' + str(b_c) + r'(' + str(x_end) + r') + (' + str(y_end) + r')^2 = ' + str(W_val) + r'\,\text{J}$.'
        )
        item_work = NQ(q_work, W_val, [W_val - 4, W_val + 6, W_val * 2, W_val / 2], ex_work, unit=r'\,\text{J}')
        item_work.update(topic='td', type='mcq', tag='applied_conservative_work')
        questions.append(item_work)

    # Chi phí và lợi nhuận cận biên (dh)
    for a_rev, b_rev, c_cost in [(100, 2, 20), (120, 3, 30), (80, 1, 20), (150, 5, 25)]:
        # R(x) = a_rev * x - b_rev * x^2
        # C(x) = c_cost * x + 50
        # Pi(x) = R(x) - C(x) = (a_rev - c_cost)*x - b_rev*x^2 - 50
        # Pi'(x) = (a_rev - c_cost) - 2*b_rev*x = 0 => x = (a_rev - c_cost) / (2*b_rev)
        diff_p = a_rev - c_cost
        x_max_pi = R(diff_p, 2 * b_rev)
        max_pi = diff_p * x_max_pi - b_rev * (x_max_pi ** 2) - 50
        q_econ = (
            r'Một công ty độc quyền sản xuất có hàm doanh thu $R(x) = ' + str(a_rev) + r'x - ' + str(b_rev) + r'x^2$ '
            r'và hàm chi phí tổng cộng $C(x) = ' + str(c_cost) + r'x + 50$ (với $x$ là số lượng sản phẩm, đơn vị tính: triệu đồng). '
            r'Mức sản lượng $x$ để công ty đạt lợi nhuận tối đa bằng'
        )
        ex_econ = steps(
            r'Hàm lợi nhuận: $\Pi(x) = R(x) - C(x) = (' + str(a_rev) + r'x - ' + str(b_rev) + r'x^2) - (' + str(c_cost) + r'x + 50) = ' + str(diff_p) + r'x - ' + str(b_rev) + r'x^2 - 50$.',
            r"Doanh thu cận biên bằng chi phí cận biên $MR = MC \Leftrightarrow R^\prime(x) = C^\prime(x) \Leftrightarrow " + str(a_rev) + r" - " + str(2 * b_rev) + r"x = " + str(c_cost) + r"$.",
            r"Giải phương trình: $" + str(2 * b_rev) + r"x = " + str(diff_p) + r" \Rightarrow x = " + tx(x_max_pi) + r"$.",
            r"Vì $\Pi^{\prime\prime}(x) = -" + str(2 * b_rev) + r" < 0$ nên mức sản lượng $x = " + tx(x_max_pi) + r"$ tối đa hóa lợi nhuận."
        )
        item_econ = NQ(q_econ, x_max_pi, [x_max_pi + 2, x_max_pi - 3, x_max_pi * 2, diff_p / b_rev], ex_econ)
        item_econ.update(topic='dh', type='mcq', tag='applied_profit_maximization')
        questions.append(item_econ)

    # =========================================================================
    # 14. BỔ SUNG: HỒI QUY (vt), MẠCH RLC (v2), BỒN CHỨA (tb), TÀI CHÍNH (ch),
    # THUẬT TOÁN (gh), MA TRẬN LESLIE (tr)
    # =========================================================================
    # Hồi quy bình phương tối thiểu Least Squares (vt)
    for pts, slope_ans in [
        ([(0, 1), (1, 3), (2, 4), (3, 6)], R(8, 5)),  # a = 1.6
        ([(1, 2), (2, 3), (3, 5), (4, 6)], R(7, 5)),  # a = 1.4
        ([(0, 2), (1, 4), (2, 5), (3, 7)], R(8, 5)),
        ([(1, 1), (2, 2), (3, 4), (4, 5)], R(7, 5)),
    ]:
        n_pts = len(pts)
        sum_x = sum(p[0] for p in pts)
        sum_y = sum(p[1] for p in pts)
        sum_xx = sum(p[0] ** 2 for p in pts)
        sum_xy = sum(p[0] * p[1] for p in pts)
        # a = (n*sum_xy - sum_x*sum_y) / (n*sum_xx - sum_x^2)
        slope_exact = R(n_pts * sum_xy - sum_x * sum_y, n_pts * sum_xx - sum_x ** 2)
        pts_str = r',\; '.join(r'(' + str(p[0]) + r';\,' + str(p[1]) + r')' for p in pts)
        q_ls = (
            r'Trong thực nghiệm phân tích số liệu điều tra, người ta thu được ' + str(n_pts) + r' điểm dữ liệu: $' + pts_str + r'$. '
            r'Áp dụng phương pháp bình phương tối thiểu (hình chiếu trực giao giải hệ phương trình chuẩn $A^T A \hat{x} = A^T b$), '
            r'hệ số góc $a$ của đường hồi quy tuyến tính thực nghiệm $y = ax + b$ bằng'
        )
        ex_ls = steps(
            r'Lập hệ phương trình không tương thích: $Ax = b$ với $A = \begin{pmatrix}' + r' \\ '.join(str(p[0]) + r' & 1' for p in pts) + r'\end{pmatrix},\; b = \begin{pmatrix}' + r' \\ '.join(str(p[1]) for p in pts) + r'\end{pmatrix}$.',
            r'Phương trình chuẩn: $A^T A \begin{pmatrix} a \\ b \end{pmatrix} = A^T b \Leftrightarrow \begin{pmatrix} ' + str(sum_xx) + r' & ' + str(sum_x) + r' \\ ' + str(sum_x) + r' & ' + str(n_pts) + r'\end{pmatrix} \begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} ' + str(sum_xy) + r' \\ ' + str(sum_y) + r'\end{pmatrix}$.',
            r'Hệ số góc của đường xu hướng: $a = \dfrac{' + str(n_pts) + r'(' + str(sum_xy) + r') - (' + str(sum_x) + r')(' + str(sum_y) + r')}{' + str(n_pts) + r'(' + str(sum_xx) + r') - (' + str(sum_x) + r')^2} = ' + tx(slope_exact) + r'$.'
        )
        item_ls = NQ(q_ls, slope_exact, [slope_exact + 1, slope_exact - R(1, 2), slope_exact * 2, R(sum_y, sum_x)], ex_ls)
        item_ls.update(topic='vt', type='mcq', tag='applied_least_squares')
        questions.append(item_ls)

    # Mạch RLC nối tiếp dao động tắt dần (v2)
    for R_ohm, L_h, C_f in [(4, 1, R(1, 13)), (6, 1, R(1, 25)), (2, 1, R(1, 10)), (8, 1, R(1, 25))]:
        # L q'' + R q' + (1/C) q = 0
        # q'' + R*q' + (1/C)*q = 0
        # Delta = R^2 - 4*(1/C)
        inv_C = int(1 / C_f)
        Delta_val = R_ohm ** 2 - 4 * inv_C  # luôn âm -> dao động tắt dần
        omega_damp = sqrt(-Delta_val) / 2
        q_rlc = (
            r'Một mạch dao động điện từ $RLC$ nối tiếp gồm điện trở $R = ' + str(R_ohm) + r'\,\Omega$, '
            r'cuộn cảm thuần $L = ' + str(L_h) + r'\,\text{H}$ và tụ điện có điện dung $C = \dfrac{1}{' + str(inv_C) + r'}\,\text{F}$. '
            r'Điện tích $q(t)$ trên bản tụ thỏa mãn phương trình vi phân $L q^{\prime\prime} + R q^\prime + \dfrac{1}{C}q = 0$. '
            r'Tần số góc dao động tắt dần của mạch $\omega_d = \sqrt{\dfrac{1}{LC} - \left(\dfrac{R}{2L}\right)^2}$ bằng'
        )
        ex_rlc = steps(
            r'Phương trình vi phân: $q^{\prime\prime} + ' + str(R_ohm) + r'q^\prime + ' + str(inv_C) + r'q = 0$.',
            r'Phương trình đặc trưng: $k^2 + ' + str(R_ohm) + r'k + ' + str(inv_C) + r' = 0$.',
            r'Biệt thức: $\Delta = ' + str(R_ohm) + r'^2 - 4(' + str(inv_C) + r') = ' + str(Delta_val) + r' < 0$.',
            r'Nghiệm phức đặc trưng: $k = -\dfrac{' + str(R_ohm) + r'}{2} \pm i \sqrt{' + str(inv_C) + r' - \left(\dfrac{' + str(R_ohm) + r'}{2}\right)^2} = -' + str(R_ohm // 2) + r' \pm ' + str(int(omega_damp)) + r'i$.',
            r'Tần số góc dao động tắt dần: $\omega_d = ' + str(int(omega_damp)) + r'\,\text{rad/s}$.'
        )
        item_rlc = NQ(q_rlc, int(omega_damp), [int(omega_damp) + 1, int(omega_damp) - 1, int(omega_damp) * 2, inv_C], ex_rlc, unit=r'\,\text{rad/s}')
        item_rlc.update(topic='v2', type='mcq', tag='applied_rlc_circuit')
        questions.append(item_rlc)

    # Dòng tiền vĩnh viễn Perpetuity NPV (ch)
    for C_flow, r_rate in [(100, 5), (60, 4), (120, 6), (200, 8), (50, 2)]:
        # NPV = C / (r/100)
        r_dec = R(r_rate, 100)
        npv_val = int(C_flow / (r_rate / 100))
        q_npv = (
            r'Trong tài chính định giá dự án, một khoản đầu tư mang lại dòng tiền đều đặn vĩnh viễn $C = ' + str(C_flow) + r'\,\text{triệu đồng}$ vào cuối mỗi năm, '
            r'bắt đầu từ năm thứ nhất với lãi suất chiết khấu thị trường $r = ' + str(r_rate) + r'\,\%/\text{năm}$. '
            r'Giá trị hiện tại ròng của dòng tiền vĩnh viễn $NPV = \displaystyle\sum_{n=1}^{+\infty} \dfrac{C}{(1+r)^n} = \dfrac{C}{r}$ bằng'
        )
        ex_npv = steps(
            r'Chuỗi giá trị hiện tại là một chuỗi cấp số nhân lùi vô hạn: $NPV = \displaystyle\sum_{n=1}^{+\infty} \dfrac{' + str(C_flow) + r'}{(1 + ' + tx(r_dec) + r')^n}$.',
            r'Số hạng đầu: $u_1 = \dfrac{' + str(C_flow) + r'}{1 + ' + tx(r_dec) + r'}$, công bội $q = \dfrac{1}{1 + ' + tx(r_dec) + r'} < 1$.',
            r'Tổng cấp số nhân: $NPV = \dfrac{u_1}{1 - q} = \dfrac{\frac{' + str(C_flow) + r'}{1 + ' + tx(r_dec) + r'}}{1 - \frac{1}{1 + ' + tx(r_dec) + r'}} = \dfrac{' + str(C_flow) + r'}{' + tx(r_dec) + r'} = ' + str(npv_val) + r'\,\text{triệu đồng}$.'
        )
        item_npv = NQ(q_npv, npv_val, [npv_val + 200, npv_val - 300, npv_val * 2, C_flow * r_rate], ex_npv, unit=r'\,\text{triệu đồng}')
        item_npv.update(topic='ch', type='mcq', tag='applied_perpetuity_npv')
        questions.append(item_npv)

    # Thể tích bồn chứa Paraboloid tròn xoay (tb)
    for R_tank, H_tank in [(2, 4), (3, 9), (4, 8), (1, 2)]:
        # Paraboloid: z = (H/R^2) * (x^2 + y^2) từ z=0 đến H
        # V = int_0^2pi dphi int_0^R r dr (H - (H/R^2)*r^2) = 2*pi * H * (R^2/2 - R^2/4) = pi * H * R^2 / 2
        coeff_v = R(H_tank * (R_tank ** 2), 2)
        q_tank = (
            r'Một bồn chứa nhiên liệu có dạng khối tròn xoay tạo bởi mặt paraboloid $z = \dfrac{' + str(H_tank) + r'}{' + str(R_tank ** 2) + r'}(x^2 + y^2)$ '
            r'và mặt phẳng nắp trên $z = ' + str(H_tank) + r'$ (đơn vị: mét). Thể tích của bồn chứa nhiên liệu có dạng $k\pi\,\text{m}^3$. '
            r'Hệ số $k$ bằng'
        )
        ex_tank = steps(
            r'Chuyển sang tọa độ trụ: $x = r\cos\varphi,\; y = r\sin\varphi,\; z = z$ với $0 \le r \le ' + str(R_tank) + r'$, $0 \le \varphi \le 2\pi$.',
            r'Miền giới hạn theo $z$: $\dfrac{' + str(H_tank) + r'}{' + str(R_tank ** 2) + r'}r^2 \le z \le ' + str(H_tank) + r'$.',
            r'Thể tích: $V = \displaystyle\int_0^{2\pi}d\varphi \int_0^{' + str(R_tank) + r'} r\,dr \int_{\frac{' + str(H_tank) + r'}{' + str(R_tank ** 2) + r'}r^2}^{' + str(H_tank) + r'} dz = 2\pi \int_0^{' + str(R_tank) + r'} \left(' + str(H_tank) + r'r - \dfrac{' + str(H_tank) + r'}{' + str(R_tank ** 2) + r'}r^3\right)dr$.',
            r'Tính tích phân: $V = 2\pi \left[\dfrac{' + str(H_tank) + r'r^2}{2} - \dfrac{' + str(H_tank) + r'r^4}{' + str(4 * R_tank ** 2) + r'}\right]_0^{' + str(R_tank) + r'} = 2\pi\cdot \dfrac{' + str(H_tank * R_tank ** 2) + r'}{4} = ' + tx(coeff_v) + r'\pi\,\text{m}^3$.',
            r'Hệ số $k = ' + tx(coeff_v) + r'$.'
        )
        item_tank = NQ(q_tank, coeff_v, [coeff_v * 2, coeff_v / 2, H_tank * R_tank ** 2, coeff_v + 1], ex_tank)
        item_tank.update(topic='tb', type='mcq', tag='applied_paraboloid_tank')
        questions.append(item_tank)

    # Động thái dân số ma trận Leslie (tr)
    for f1, f2, s1 in [(0, 4, R(1, 2)), (0, 6, R(1, 3)), (0, 8, R(1, 2)), (1, 2, R(1, 2))]:
        # L = [[f1, f2], [s1, 0]]
        # det(L - lambda*I) = lambda^2 - f1*lambda - f2*s1 = 0
        prod_fs = f2 * s1
        Delta_l = f1 ** 2 + 4 * prod_fs
        lambda_dom = (f1 + sqrt(Delta_l)) / 2
        q_leslie = (
            r'Trong sinh thái học bảo tồn, cấu trúc tuổi của một quần thể động vật được mô hình hóa bằng ma trận Leslie '
            r'$L = \begin{pmatrix} ' + str(f1) + r' & ' + str(f2) + r' \\ ' + tx(s1) + r' & 0 \end{pmatrix}$, '
            r'trong đó hàng đầu thể hiện mức sinh sản của từng nhóm tuổi và $s_1$ là tỷ lệ sống sót chuyển giai đoạn. '
            r'Tốc độ tăng trưởng dài hạn của quần thể (trị riêng dương trội $\lambda_1$) bằng'
        )
        ex_leslie = steps(
            r'Phương trình đặc trưng: $\det(L - \lambda I) = \begin{vmatrix} ' + str(f1) + r' - \lambda & ' + str(f2) + r' \\ ' + tx(s1) + r' & -\lambda \end{vmatrix} = \lambda^2 - ' + str(f1) + r'\lambda - ' + tx(prod_fs) + r' = 0$.',
            r'Biệt thức: $\Delta = (' + str(f1) + r')^2 - 4(1)(-' + tx(prod_fs) + r') = ' + str(f1 ** 2) + r' + ' + str(4 * prod_fs) + r' = ' + str(Delta_l) + r'$.',
            r'Trị riêng dương trội: $\lambda_1 = \dfrac{' + str(f1) + r' + \sqrt{' + str(Delta_l) + r'}}{2} = ' + tx(lambda_dom) + r'$.'
        )
        item_leslie = NQ(q_leslie, lambda_dom, [lambda_dom + 1, lambda_dom * 2, f2 * s1, R(1, 2)], ex_leslie)
        item_leslie.update(topic='tr', type='mcq', tag='applied_leslie_matrix')
        questions.append(item_leslie)

    # Tốc độ tăng trưởng thuật toán & giới hạn (gh)
    for c_alg in [2, 3, 5, 10]:
        q_bigo = (
            r'Trong phân tích độ phức tạp thuật toán, xét hai thuật toán $A_1$ có thời gian chạy $f(n) = n^' + str(c_alg) + r'$ '
            r'và $A_2$ có thời gian chạy hàm mũ $g(n) = ' + str(c_alg) + r'^n$ khi kích thước đầu vào $n \to +\infty$. '
            r'Giới hạn tỷ số thời gian chạy $L = \lim\limits_{n\to +\infty} \dfrac{n^' + str(c_alg) + r'}{' + str(c_alg) + r'^n}$ bằng'
        )
        ex_bigo = steps(
            r'Áp dụng quy tắc L' + r"'" + r'Hôpital liên tiếp $' + str(c_alg) + r'$ lần đối với dạng vô định $\left[\dfrac{\infty}{\infty}\right]$:',
            r'Đạo hàm tử số $' + str(c_alg) + r'$ lần thu được: $(n^' + str(c_alg) + r')^{(' + str(c_alg) + r')} = ' + str(c_alg) + r'!$.',
            r'Đạo hàm mẫu số $' + str(c_alg) + r'$ lần: $(' + str(c_alg) + r'^n)^{(' + str(c_alg) + r')} = ' + str(c_alg) + r'^n (\ln ' + str(c_alg) + r')^' + str(c_alg) + r'$.',
            r'Do đó: $L = \lim\limits_{n\to +\infty} \dfrac{' + str(c_alg) + r'!}{' + str(c_alg) + r'^n (\ln ' + str(c_alg) + r')^' + str(c_alg) + r'} = 0$.'
        )
        item_bigo = NQ(q_bigo, 0, [1, c_alg, sp.oo, sp.Rational(1, c_alg)], ex_bigo)
        item_bigo.update(topic='gh', type='mcq', tag='applied_complexity_limit')
        questions.append(item_bigo)

    return questions


if __name__ == '__main__':
    qs = build_applied_questions()
    print(f'Successfully generated {len(qs)} applied questions!')
    counts = {}
    for q in qs:
        counts[q['topic']] = counts.get(q['topic'], 0) + 1
    print('Distribution by topic:', counts)
