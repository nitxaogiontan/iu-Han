# Gửi chị Hân ♡

Một website nhỏ dùng ảnh và bài nhạc bạn đã gửi. Website chạy độc lập, không cần Node.js hay cài framework.

## Mở website

1. Giải nén `for-chi-han.zip`.
2. Mở thư mục `for-chi-han`.
3. Nhấp đúp `index.html` để mở bằng Chrome hoặc Edge.
4. Nhạc không tự phát. Bấm nút tròn ở góc dưới bên trái hoặc nút **nghe thử nha** trong phần bài nhạc.

## Chỉnh nội dung

Mở `content.js` bằng VS Code hoặc Notepad. Đây là nơi chỉnh:

- Lời mở đầu và bức thư.
- Những điều em quý ở chị.
- Tên và chú thích của 6 tấm ảnh.
- Lời nhắn trong hộp quà.
- Lời kết.
- Tên bài nhạc và đường dẫn tệp.

Không cần sửa `script.js` hay `styles.css` nếu chỉ muốn đổi lời.

## Ảnh và nhạc đã được thêm sẵn

Tất cả ảnh đã được tối ưu sang WebP để trang tải nhẹ hơn. Bấm vào ảnh trong bộ sưu tập để xem ảnh lớn.

```text
assets/
├── 01-bong-hai-dua.webp
├── 02-tao-dang.webp
├── 03-xem-lai-anh.webp
├── 04-nam-tay.webp
├── 05-mot-tam-toi.webp
├── 06-tam-anh-chung-minh.webp
└── vuon-may-vua-hay.mp3
```

Nếu thay ảnh, hãy chép ảnh mới vào `assets/` rồi sửa trường `image` tương ứng trong `content.js`. Nếu thay nhạc, sửa `music.src` và `music.title` trong cùng file.

## Đưa website lên mạng

Có thể tải nguyên thư mục `for-chi-han` lên GitHub Pages, Netlify hoặc một dịch vụ host website tĩnh. Giữ nguyên cấu trúc thư mục và tên các tệp trong `assets/` để ảnh và nhạc không bị mất đường dẫn.

## Cấu trúc dự án

```text
for-chi-han/
├── index.html       # nội dung và cấu trúc trang
├── styles.css       # màu sắc, bố cục, responsive, hiệu ứng
├── script.js        # thư, hộp quà, xem ảnh lớn, trình phát nhạc
├── content.js       # nội dung dễ chỉnh sửa
├── README.md        # hướng dẫn
└── assets/          # 6 ảnh và bài nhạc đã thêm
```

Font có thể được tải từ Google Fonts khi có Internet; nếu không, website tự dùng font dự phòng.
