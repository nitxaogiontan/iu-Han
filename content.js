/*
  NỘI DUNG WEBSITE — MỞ FILE NÀY ĐỂ CHỈNH LỜI NHẮN, ẢNH VÀ NHẠC.
  Ảnh và bài nhạc đã được đặt sẵn trong thư mục assets/.
  Không cần sửa script.js hay styles.css nếu chỉ muốn đổi nội dung.
*/

window.LOVE_CONTENT = {
  recipient: "Hân",
  heroLead: "Chị Hân,",
  heroSubline: "em có cái này muốn gửi chị.",
  intro: "Em gom mấy tấm hình của tụi mình, một bài nhạc em thích với vài điều muốn nói vào đây. Chị cứ xem từ từ nha.",

  letter: [
    "Chị Hân à,",
    " Em code cái web nhỏ này để gửi chị mấy tấm hình em thích, bài nhạc em muốn chị nghe, với vài câu bình thường mà em vẫn muốn nói.",
    "Có những tấm ảnh nhìn lại thấy buồn cười, có tấm thì tối thui, có tấm chẳng ai nhìn vào camera. Nhưng em vẫn muốn giữ, vì đó là những lúc tụi mình ở cạnh nhau. Với em, vậy là đủ đáng nhớ rồi.",
    "Em thích những khoảnh khắc rất bình thường như vậy. Không cần phải đi đâu thật xa hay làm gì thật đặc biệt; đôi khi chỉ cần có thêm một chuyện để kể nhau nghe, một tấm hình để lưu lại, là một ngày đã vui hơn rồi.",
    "Em cũng biết chẳng phải lúc nào mọi thứ cũng dễ dàng. Nên em không mong tụi mình phải lúc nào cũng vui hay lúc nào cũng hiểu nhau ngay. Chỉ mong khi có chuyện, mình chịu nói thật, chịu nghe nhau ròi giải quyết cùng nhau là được.",
    "Thế thôi. Chị nghe nhạc, xem ảnh rồi đọc mấy dòng này nha. Em làm trang này vì muốn dành cho chị một điều nho nhỏ, chứ không cần dịp gì cả."
  ],

  reasons: [
    { number: "01", icon: "♡", title: "Mấy tấm ảnh để xem lại", text: "Ảnh có thể hơi tối hay chụp vội, nhưng mỗi lần xem lại em vẫn nhớ lúc đó tụi mình đang ở cạnh nhau." },
    { number: "02", icon: "✳", title: "Những chuyện linh tinh", text: "Có những chuyện chẳng đầu chẳng cuối, vậy mà kể cho nhau nghe cũng thành một phần vui trong ngày." },
    { number: "03", icon: "☁", title: "Những lúc ở cạnh nhau", text: "Không cần lúc nào cũng phải nghĩ ra điều gì đặc biệt. Có mặt trong một khoảnh khắc bình thường cũng đã đáng quý rồi." },
    { number: "04", icon: "✿", title: "Chị cứ là chị thôi", text: "Chị không cần phải lúc nào cũng vui hay tỏ ra ổn. Em mong chị có thể thoải mái là chính mình." }
  ],

  moments: [
    {
      date: "TẤM ẢNH 01",
      title: "Bóng hai đứa trên đường",
      text: "Tấm này chẳng thấy rõ mặt ai, mà nhìn lại vẫn nhớ cảm giác có người đi bên cạnh.",
      image: "assets/01-bong-hai-dua.webp",
      imageAlt: "Bóng hai người trên mặt đường buổi tối",
      shape: "square"
    },
    {
      date: "TẤM ẢNH 02",
      title: "Một kiểu tạo dáng quen thuộc=)",
      text: "Chụp vội một tấm, giơ tay tạo dáng. Nhìn đơn giản mà em vẫn muốn giữ.",
      image: "assets/02-tao-dang.webp",
      imageAlt: "Hai người đứng cạnh nhau và tạo dáng bằng tay",
      shape: "portrait"
    },
    {
      date: "TẤM ẢNH 03",
      title: "Ngồi xem lại ảnh",
      text: "Một tấm ảnh nằm trong điện thoại, rồi lại thành một tấm ảnh khác để cất ở đây.",
      image: "assets/03-xem-lai-anh.webp",
      imageAlt: "Một người đang cầm điện thoại xem ảnh hai người",
      shape: "square"
    },
    {
      date: "TẤM ẢNH 04",
      title: "Chỉ là nắm tay thôi",
      text: "Không cần thấy mặt hay có lời chú thích gì nhiều. Em nhìn tấm này là hiểu vì sao mình muốn giữ nó.",
      image: "assets/04-nam-tay.webp",
      imageAlt: "Khoảnh khắc hai bàn tay đang nắm lấy nhau",
      shape: "square"
    },
    {
      date: "TẤM ẢNH 05",
      title: "Một tấm hơi tối",
      text: "Ảnh chụp buổi tối nên không rõ lắm, em còn bị lọt mất nửa mặt. Nhưng chị vẫn đang cười trong ảnh.",
      image: "assets/05-mot-tam-toi.webp",
      imageAlt: "Một bức ảnh chụp gần hai người vào buổi tối",
      shape: "portrait"
    },
    {
      date: "TẤM ẢNH 06",
      title: "Tấm em muốn để ở cuối",
      text: "Tấm này nhìn rõ cả hai đứa hơn một chút. Em để ở cuối để chị kéo xuống là thấy ngay nha",
      image: "assets/06-tam-anh-chung-minh.webp",
      imageAlt: "Hai người chụp ảnh chung và cùng tạo dáng",
      shape: "landscape"
    }
  ],

  midQuote: "Mấy tấm ảnh có thể hơi mờ, nhưng cảm giác của lúc chụp thì em vẫn muốn giữ.",
  surprise: "Hết bí mật rồi đó đóa. Cảm ơn chị vì đã cùng em có những khoảnh khắc mà em muốn cất lại. Mong chị luôn có những ngày vui vẻ, thoải mái và thật dễ chịu ạ",
  finalMessage: "Cảm ơn chị vì đã xuất hiện trong những ngày tháng của em. Em thật sự mong rằng dù có thể nào đi nữa thì mình vẫn sẽ luôn đi cùng nhau.",

  music: {
    title: "Vườn Mây Vừa Hay",
    artist: "Ân Ngờ, MYLINA",
    duration: "4:05",
    src: "assets/vuon-may-vua-hay.mp3"
  }
};
