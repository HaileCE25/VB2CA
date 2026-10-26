"""
Tạo icon PNG cho PWA từ SVG bằng Pillow (không cần cairosvg).
Chạy: python tools/make_icons.py
"""
from PIL import Image, ImageDraw, ImageFont
import os

OUT = os.path.join(os.path.dirname(__file__), '..', 'icons')
os.makedirs(OUT, exist_ok=True)

NAVY  = (31, 51, 80)     # #1f3350
BLUE  = (29, 78, 216)    # #1d4ed8
WHITE = (255, 255, 255)

def make_icon(size):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    d   = ImageDraw.Draw(img)
    r   = size // 5        # bo góc
    # Nền bo góc
    d.rounded_rectangle([0, 0, size-1, size-1], radius=r, fill=NAVY)
    # Chữ VB2
    fs = int(size * 0.38)
    try:
        font = ImageFont.truetype("arialbd.ttf", fs)
    except:
        try:
            font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", fs)
        except:
            font = ImageFont.load_default(size=fs)
    txt = "VB2"
    bbox = d.textbbox((0, 0), txt, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx = (size - tw) // 2 - bbox[0]
    ty = int(size * 0.18) - bbox[1]
    d.text((tx, ty), txt, fill=WHITE, font=font)
    # Gạch xanh phía dưới
    bar_y = int(size * 0.76)
    bar_h = max(6, size // 28)
    margin = size // 7
    d.rounded_rectangle([margin, bar_y, size-margin, bar_y+bar_h], radius=bar_h//2, fill=BLUE)
    return img

for sz in [180, 192, 512]:
    img = make_icon(sz)
    path = os.path.join(OUT, f'icon-{sz}.png')
    img.save(path)
    print(f'Saved {path}')

# apple-touch-icon = 180px copy
import shutil
src = os.path.join(OUT, 'icon-180.png')
dst = os.path.join(OUT, '..', 'apple-touch-icon.png')
shutil.copy(src, dst)
print('Saved apple-touch-icon.png')

