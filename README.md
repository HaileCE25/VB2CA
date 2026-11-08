# VB2CA

## Ôn nghị luận xã hội

Mục **Cẩm nang nghị luận xã hội** trên trang đăng nhập tổng hợp 15 dẫn chứng thời sự từ Báo Công an Nhân dân, gợi ý luận điểm/giải pháp và 8 bài mẫu tham khảo do dự án biên soạn. Dữ liệu nằm trong `data/essay-guides.js`; mỗi nguồn cần có ngày, tiêu đề, liên kết và phần tóm lược viết lại. Bài mẫu phải là nội dung nguyên gốc, gắn với nguồn dẫn chứng tương ứng và đạt tối thiểu 500 chữ. Khi thêm tư liệu, kiểm tra bài báo gốc, ghi đúng tình trạng vụ việc và không sao chép bài viết có bản quyền.

## Mở rộng ngân hàng đề và luyện tập

- Với đề CA1 sinh tự động, sửa bộ sinh trong `tools/`, tăng `N_EXAMS` trong `tools/gen_exams.py`, rồi chạy `python tools/gen_exams.py`. Script tạo các file `data/de-ca1-so-NN.js` và cập nhật danh sách script trong `index.html`.
- Câu của mọi đề đã nạp được đưa vào ngân hàng luyện. Đề có cấu trúc/chủ đề khác ma trận chuẩn cần khai báo `topics` cho từng vị trí câu; giữ `id` đề duy nhất.
- `data/practice-bank.js` là kho câu bổ sung do `tools/gen_practice_bank.py` tạo. Ứng dụng nạp toàn bộ câu bổ sung, không cắt ở một ngưỡng cố định.
- Trong **Thống kê và luyện theo chủ đề**, chọn 10, 20, 50, 100 hoặc toàn bộ câu cho mỗi lượt. Có thể luyện ngẫu nhiên mọi chủ đề, theo một chủ đề, hoặc chọn ngẫu nhiên trong sổ câu sai. Lượt luyện liên hoàn có đồng hồ riêng và lấy câu từ toàn bộ ngân hàng.
- Trước khi cập nhật dữ liệu, chạy `python tools/gen_exams.py --check` và `python tools/gen_practice_bank.py --check`.
