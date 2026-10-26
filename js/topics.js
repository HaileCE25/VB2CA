// Chủ đề của từng vị trí câu trong ma trận đề CA1 năm 2026 (50 câu), dùng cho thống kê và luyện theo chủ đề.
// Đề có cấu trúc khác (ví dụ đề tham khảo 2025) khai báo riêng mảng "topics" trong file đề.
window.TOPICS = {
  names: {
    vt: 'Véc tơ, độc lập tuyến tính, hạng',
    mt: 'Ma trận, định thức, ma trận nghịch đảo',
    he: 'Hệ phương trình tuyến tính và bài toán ứng dụng',
    tr: 'Trị riêng, chéo hóa (nhóm câu đại số tuyến tính)',
    gh: 'Giới hạn, liên tục, khả vi',
    dh: 'Đạo hàm, vi phân và tích phân hàm một biến',
    nb: 'Hàm nhiều biến: đạo hàm riêng, vi phân, cực trị',
    ch: 'Chuỗi số, chuỗi lũy thừa',
    v1: 'Phương trình vi phân cấp một',
    v2: 'Phương trình vi phân tuyến tính cấp hai',
    tb: 'Tích phân hai lớp, ba lớp',
    td: 'Tích phân đường'
  },
  order: ['vt', 'mt', 'he', 'tr', 'gh', 'dh', 'nb', 'ch', 'v1', 'v2', 'tb', 'td'],
  slots: ['vt', 'vt', 'vt', 'mt', 'mt', 'mt', 'mt', 'gh', 'gh', 'dh', 'nb', 'nb', 'nb', 'ch', 'ch', 'v1', 'v1', 'v1', 'v2', 'tb',
          'tb', 'he', 'vt', 'mt', 'he', 'gh', 'gh', 'dh', 'he', 'ch', 'ch', 'ch', 'v1', 'v1', 'v1', 'tb', 'tb', 'td', 'td', 'tr',
          'tr', 'tr', 'nb', 'nb', 'nb', 'mt', 'nb', 'ch', 'v2', 'tb']
};
