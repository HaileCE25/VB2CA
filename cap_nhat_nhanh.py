import os

# Đường dẫn tới file cấu hình hoặc gen_practice_bank.py (điều chỉnh tên file nếu cần)
# Ví dụ tự động tìm và thay thế trong thư mục tools/gen_practice_bank.py
target_file = "tools/gen_practice_bank.py"

if os.path.exists(target_file):
    with open(target_file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Cập nhật thông số
    content = content.replace("MIN_PER_TOPIC = 200", "MIN_PER_TOPIC = 350")
    content = content.replace("N_EXAMS = 32", "N_EXAMS = 36")
    
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("Đã cập nhật thành công MIN_PER_TOPIC = 350 và N_EXAMS = 36!")
else:
    print(f"Không tìm thấy file {target_file}, vui lòng kiểm tra lại đường dẫn.")