// =========================================================================================
// CẨM NANG ÔN THI NGHỊ LUẬN XÃ HỘI (TỐI THIỂU 500 TỪ)
// TÀI LIỆU ÔN THI ĐẶC QUYỀN TUYỂN SINH VĂN BẰNG 2 BỘ CÔNG AN (MÃ BÀI THI CA1, CA2...)
// =========================================================================================

// 1. MẪU MỞ BÀI, KẾT BÀI & TỪ NỐI
window.ESSAY_METHODOLOGY = {
  examFormat: {
    title: "Quy chuẩn Đề thi Phần 1 - Nghị luận Xã hội (Bộ Công An)",
    timeMinutes: 45,
    maxTimeMinutes: 60,
    minWords: 500,
    idealWords: "550 - 700 từ",
    points: 30, // 30/100 điểm tổng bài thi
    type: "Tự luận chính luận xã hội trên máy tính hoặc viết giấy",
    summary: "Phần thi tự luận chiếm 30% tổng điểm toàn bài (3.0/10 hoặc 30/100). Thí sinh bắt buộc viết tối thiểu 500 từ. Đề thi đánh giá toàn diện năng lực lập luận logic, kiến thức thời sự xã hội, sự am hiểu đường lối chính sách của Đảng, pháp luật của Nhà nước và tư tưởng phẩm chất chính trị của người chiến sĩ CAND tương lai."
  },

  scoringMatrix: [
    {
      criteria: "1. Bố cục & Hình thức (4.0 điểm)",
      detail: "Có đủ 3 phần: Mở bài (1 đoạn), Thân bài (4-5 đoạn mạch lạc), Kết bài (1 đoạn). Đạt chuẩn dung lượng tối thiểu 500 từ (dưới 500 từ bị trừ nặng từ 2.0 đến 4.0 điểm). Trình bày sạch sẽ, ngắt đoạn logic, không gạch đầu dòng tùy tiện."
    },
    {
      criteria: "2. Giải thích & Xác định vấn đề (5.0 điểm)",
      detail: "Cắt nghĩa chính xác các từ ngữ, hình ảnh hoặc khái niệm then chốt trong ngữ liệu đề bài. Rút ra thông điệp bao quát và bản chất cốt lõi của vấn đề nghị luận một cách tường minh, ngắn gọn."
    },
    {
      criteria: "3. Lập luận, Bàn luận & Chứng minh (9.0 điểm)",
      detail: "Trả lời sâu sắc câu hỏi: 'Vì sao vấn đề này đúng/quan trọng?', 'Tác động tích cực ra sao đối với cá nhân, cộng đồng và sự phát triển của đất nước?'. Lập luận có chiều sâu lý luận, tư tưởng chính trị cách mạng kiên định, chuẩn mực."
    },
    {
      criteria: "4. Dẫn chứng thực tế Thời sự (5.0 điểm)",
      detail: "Đưa ra từ 1 đến 2 dẫn chứng 'đắt giá' mang tính thời sự mới nhất (2024 - 2026), người thật việc thật, có số liệu hoặc sự kiện tiêu biểu gắn liền với đất nước và lực lượng CAND. Phân tích rõ ý nghĩa dẫn chứng thay vì chỉ liệt kê sự việc."
    },
    {
      criteria: "5. Mở rộng, Phản đề & Liên hệ CAND (5.0 điểm)",
      detail: "Lật ngược vấn đề đa chiều: phê phán các nhận thức sai lệch, tư tưởng lệch lạc, lối sống vô cảm, ích kỷ hoặc vi phạm pháp luật. Rút ra bài học nhận thức và hành động cụ thể; liên hệ sâu sắc với lý tưởng, bản lĩnh và trách nhiệm của người chiến sĩ CAND trong kỷ nguyên mới."
    },
    {
      criteria: "6. Diễn đạt & Phong cách Chính luận (2.0 điểm)",
      detail: "Văn phong trang trọng, chuẩn mực ngôn ngữ hành chính chính luận, giàu cảm xúc cách mạng và tính chiến đấu. Không mắc lỗi chính tả, dùng từ chuẩn xác, không dùng tiếng lóng."
    }
  ],

  fiveSteps: [
    {
      step: "Bước 1 (2 - 3 phút)",
      name: "Giải mã đề bài & Xác định từ khóa",
      action: "Đọc đề thật kỹ 2 lần. Gạch chân các 'từ khóa vàng' (Keywords). Xác định rõ: Luận đề chính là gì? Đề yêu cầu giải thích câu nói hay phân tích hiện tượng đời sống? Liên hệ thực tiễn với đối tượng nào?"
    },
    {
      step: "Bước 2 (5 phút)",
      name: "Lập dàn ý nhanh theo mô hình '5 ngón tay'",
      action: "Ghi nhanh ra nháp 5 ý cốt lõi: 1. Mở bài (vấn đề); 2. Giải thích (bản chất); 3. Bình luận (2 luận điểm vì sao); 4. Dẫn chứng thời sự tiêu biểu nhất; 5. Phản đề + Bài học hành động & Liên hệ người chiến sĩ CAND."
    },
    {
      step: "Bước 3 (32 phút)",
      name: "Viết bài thực chiến tốc độ cao",
      action: "Tập trung viết liên tục, phân bổ rõ 5-6 đoạn văn độc lập. Sử dụng linh hoạt các từ nối câu, chuyển đoạn. Đưa dẫn chứng vào mượt mà, phân tích gắn với luận điểm. Tuyệt đối không dừng lại quá lâu ở một từ ngữ."
    },
    {
      step: "Bước 4 (3 phút)",
      name: "Kiểm tra dung lượng từ & Bổ sung ý",
      action: "Kiểm tra số từ trực tiếp trên thanh đếm từ. Nếu chưa đạt 500 từ, khẩn trương mở rộng phân tích dẫn chứng hoặc viết sâu hơn phần bài học hành động và liên hệ người chiến sĩ Công an bảo vệ Đảng, Nhà nước và nhân dân."
    },
    {
      step: "Bước 5 (2 phút)",
      name: "Soát lỗi chính tả & dấu câu",
      action: "Rà soát lại toàn bài: chú ý các danh từ riêng, thuật ngữ chính trị (Tổng Bí thư, Công an nhân dân, Đề án 06, kỷ nguyên vươn mình...). Sửa các câu cụt, câu thiếu vị ngữ, hoàn thiện dấu chấm, phẩy."
    }
  ],

  goldenStructure: [
    {
      part: "Đoạn 1: Mở bài trực tiếp",
      words: "Khoảng 60 - 80 từ",
      content: "Dẫn dắt trực diện từ bối cảnh đất nước bước vào kỷ nguyên mới, giới thiệu ngữ liệu hoặc câu nói trong đề bài và khẳng định tầm vóc của vấn đề nghị luận."
    },
    {
      part: "Đoạn 2: Giải thích bản chất",
      words: "Khoảng 70 - 90 từ",
      content: "Cắt nghĩa ngắn gọn các từ ngữ then chốt, thâu tóm nội dung thông điệp mà tác giả/đề bài muốn truyền tải. Rút ra cốt lõi: Vấn đề này thực chất là gì?"
    },
    {
      part: "Đoạn 3: Bàn luận & Phân tích nguyên nhân, ý nghĩa",
      words: "Khoảng 140 - 160 từ",
      content: "Triển khai 2 luận điểm logic: Vì sao điều này là tất yếu? Nó mang lại giá trị gì cho sự phát triển của xã hội, sự vững mạnh của thể chế và cuộc sống của mỗi con người?"
    },
    {
      part: "Đoạn 4: Dẫn chứng thời sự & Chứng minh sâu sắc",
      words: "Khoảng 120 - 150 từ",
      content: "Nêu 1 - 2 sự kiện hoặc tấm gương người thật việc thật đắt giá trong giai đoạn 2024 - 2026 (chiến sĩ CAND dũng cảm trong bão lũ, phòng chống tội phạm, chuyển đổi số Đề án 06...). Phân tích tác động lan tỏa của dẫn chứng."
    },
    {
      part: "Đoạn 5: Mở rộng vấn đề & Phản đề đa chiều",
      words: "Khoảng 60 - 80 từ",
      content: "Lật ngược góc nhìn: Phê phán những biểu hiện lệch lạc, thụ động, vô cảm, thiếu ý thức pháp luật hoặc lợi dụng công nghệ vì mục đích tiêu cực. Nhấn mạnh tính hai mặt cần kiểm soát."
    },
    {
      part: "Đoạn 6: Bài học nhận thức, hành động & Liên hệ CAND",
      words: "Khoảng 90 - 120 từ",
      content: "Rút ra bài học cho bản thân: Nhận thức đúng đắn -> Hành động thiết thực. Khẳng định quyết tâm rèn đức luyện tài, trau dồi bản lĩnh chính trị để sẵn sàng cống hiến cho sự nghiệp bảo vệ an ninh Tổ quốc và phục vụ nhân dân."
    }
  ],

  // KỸ THUẬT PHỐI HỢP NHIỀU DẪN CHỨNG TRONG 1 BÀI VĂN
  multiEvidenceTechniques: [
    {
      name: "Kỹ thuật 1: Cặp Dẫn chứng 'Tầm vóc Chủ trương + Hành động Cơ sở'",
      desc: "Phối hợp 1 dẫn chứng ở cấp vĩ mô (Nghị quyết, thông điệp của Đảng, Đề án 06, Luật mới) với 1 dẫn chứng ở cấp vi mô (chiến sĩ công an cơ sở 'đi từng ngõ, gõ từng nhà', tấm gương cứu nạn). Giúp bài viết vừa có tầm nhìn chiến lược, vừa có hơi thở thực tế đời sống.",
      example: "Ví dụ: Khi bàn về chuyển đổi số, dẫn chứng chủ trương Đề án 06 của Chính phủ kết hợp với hình ảnh công an xã ngày đêm hỗ trợ bà con vùng cao kích hoạt định danh VNeID."
    },
    {
      name: "Kỹ thuật 2: Cặp Dẫn chứng 'Chính diện Tôn vinh + Phản diện Cảnh báo'",
      desc: "Đưa ra 1 tấm gương sáng ngời về lòng quả cảm, đức hy sinh để làm điểm tựa bàn luận, sau đó đưa ra 1 vụ việc vi phạm pháp luật hoặc hiện tượng tiêu cực để làm dẫn chứng phản đề, phê phán. Tạo độ tương phản mạnh mẽ và chiều sâu phản biện cho bài viết.",
      example: "Ví dụ: Khi bàn về ý thức pháp luật và lòng trắc ẩn, nêu gương cán bộ CAND hy sinh trong bão lũ Yagi đối lập với những đối tượng trục lợi từ thiện hoặc tung tin giả câu view trên mạng xã hội."
    },
    {
      name: "Kỹ thuật 3: Cặp Dẫn chứng 'Thời chiến lịch sử + Thời bình xây dựng'",
      desc: "Nhắc lại một giá trị truyền thống yêu nước hào hùng trong lịch sử cách mạng, sau đó nối tiếp ngay bằng những chiến công thầm lặng bảo vệ an ninh trật tự, phòng chống tội phạm ma túy, tội phạm công nghệ cao giữa thời bình.",
      example: "Ví dụ: Khi bàn về bản lĩnh người chiến sĩ, nhắc đến tinh thần 'Quyết tử để Tổ quốc quyết sinh' năm 1946 nối tiếp đến tinh thần dấn thân vào những chuyên án ma túy sinh tử của các chiến sĩ C04 hôm nay."
    }
  ],

  // BỘ MẪU MỞ BÀI & KẾT BÀI THEO 10 CHỦ ĐỀ ĐÃ RA VÀ NÓNG NHẤT
  topicTemplates: [
    {
      topic: "1. Kỷ nguyên mới – Kỷ nguyên vươn mình của dân tộc (Tổng Bí thư Tô Lâm)",
      opening: "Đất nước ta đang bước vào một thời khắc lịch sử mang tính bước ngoặt — kỷ nguyên mới, kỷ nguyên vươn mình của dân tộc Việt Nam dưới sự lãnh đạo của Đảng. Trên hành trình hiện thực hóa mục tiêu đến năm 2030 trở thành nước đang phát triển có công nghiệp hiện đại và đến năm 2045 trở thành nước phát triển thu nhập cao, vấn đề bồi đắp bản lĩnh, khát vọng và tinh thần tự lực tự cường của thế hệ trẻ càng trở nên cấp thiết hơn bao giờ hết. Đúng như thông điệp sâu sắc đã được khẳng định: [Trích dẫn luận đề]. Nhận định trên chính là hồi kèn xung trận thúc giục mỗi người trẻ phải tự biến mình thành hạt nhân kiến tạo cho tương lai đất nước.",
      ending: "Tóm lại, kỷ nguyên vươn mình của dân tộc không tự nhiên đến mà được dựng xây từ mồ hôi, trí tuệ và khát vọng cống hiến của từng công dân. Là một người trẻ mang trong mình lý tưởng phụng sự Tổ quốc trong hàng ngũ Công an nhân dân, tôi tự hứa sẽ không ngừng tu dưỡng đạo đức cách mạng, làm chủ khoa học công nghệ và rèn luyện bản lĩnh 'vừa hồng vừa chuyên'. Tôi nguyện đem ngọn lửa nhiệt huyết của tuổi trẻ góp phần giữ vững bình yên cho Tổ quốc, xứng đáng là lực lượng tiên phong bảo vệ Đảng, Nhà nước và nhân dân trong kỷ nguyên mới."
    },
    {
      topic: "2. Lý tưởng thanh niên theo tư tưởng Hồ Chí Minh (Đề minh họa CA1)",
      opening: "Sinh thời, Chủ tịch Hồ Chí Minh vĩ đại luôn dành sự quan tâm đặc biệt và niềm tin son sắt cho thế hệ trẻ — những chủ nhân tương lai của nước nhà. Người từng căn dặn: “Tương lai thuộc về thanh niên. Tương lai là cách mạng luôn tiến lên. Là chủ của tương lai, thanh niên không thể không có lý tưởng cao cả. Vì vậy thanh niên phải có cuộc sống chính trị tích cực và cách mạng”. Lời dạy bất hủ ấy không chỉ là kim chỉ nam cho các thế hệ đi trước mà hôm nay vẫn vẹn nguyên tính thời sự nóng hổi, soi rọi trách nhiệm và sứ mệnh thiêng liêng của thanh niên trong giai đoạn cách mạng mới.",
      ending: "Thấm nhuần sâu sắc lời dạy của Bác, tôi hiểu rằng người không có lý tưởng giống như con thuyền lênh đênh giữa biển khơi không có la bàn định hướng. Đối với những người đang phấn đấu đứng vào hàng ngũ Công an nhân dân anh hùng, lý tưởng ấy càng được khắc sâu qua 6 điều Bác Hồ dạy: 'Đối với tự mình, phải cần, kiệm, liêm, chính; Đối với công việc, phải tận tụy; Đối với nhân dân, phải kính trọng, lễ phép'. Tôi nguyện sẽ lấy lý tưởng cao cả ấy làm ngọn hải đăng soi sáng nhận thức và dẫn đường cho mọi hành động, sẵn sàng đi bất cứ đâu, làm bất cứ việc gì khi Tổ quốc và nhân dân cần đến."
    },
    {
      topic: "3. Chuyển đổi số, Đề án 06 và Trí tuệ Nhân tạo (AI)",
      opening: "Cuộc Cách mạng công nghiệp lần thứ tư với trọng tâm là trí tuệ nhân tạo (AI) và chuyển đổi số đang tái định hình căn bản mọi lĩnh vực của đời sống xã hội. Trong bối cảnh đất nước đẩy mạnh xây dựng Chính phủ số, kinh tế số và xã hội số, công nghệ không chỉ là công cụ gia tăng năng suất mà còn là thước đo năng lực cạnh tranh quốc gia. Đúng như thông điệp thời đại đã đặt ra: [Trích dẫn luận đề]. Vấn đề này đặt ra yêu cầu sống còn: con người phải làm chủ công nghệ bằng tư duy độc lập và đạo đức liêm chính, biến công nghệ thành công cụ phụng sự nhân sinh thay vì biến mình thành nô lệ của thuật toán.",
      ending: "Công nghệ dù thông minh đến đâu cũng chỉ là phương tiện; chỉ có tư duy độc lập, lương tri và trái tim nhân ái của con người mới là ngọn đuốc dẫn đường cho tương lai. Là một cán bộ chiến sĩ CAND tương lai trong kỷ nguyên số, tôi nhận thức rằng việc làm chủ công nghệ cao, dữ liệu số gắn liền với trách nhiệm bảo vệ an ninh quốc gia và sự an toàn thông tin của nhân dân. Tôi quyết tâm sẽ tích cực học tập, trau dồi kỹ năng số và nâng cao nhãn quan chính trị sắc bén, sẵn sàng làm chủ vũ khí công nghệ để đấu tranh hiệu quả với mọi loại tội phạm mới."
    },
    {
      topic: "4. Thượng tôn pháp luật & 'Danh dự là điều thiêng liêng nhất'",
      opening: "Trong một nhà nước pháp quyền xã hội chủ nghĩa, pháp luật là kỷ cương tối thượng, là nền tảng bảo đảm sự ổn định và phát triển văn minh của xã hội. Song hành với sự nghiêm minh của luật pháp chính là đạo đức công vụ và lòng tự trọng của mỗi con người. Nhắc nhở về giá trị cốt tử ấy, thông điệp: [Trích dẫn đề bài / Di huấn cố Tổng Bí thư Nguyễn Phú Trọng: 'Danh dự là điều thiêng liêng và cao quý nhất'] đã chạm tới tầng sâu nhất của nhân cách con người. Nhận định này là lời hiệu triệu về tinh thần liêm chính, thượng tôn pháp luật mà mỗi công dân, đặc biệt là người chiến sĩ CAND, phải khắc cốt ghi tâm.",
      ending: "Kỷ cương của một quốc gia và danh dự của một người chiến sĩ công an không thể đo bằng lời nói đầu môi mà phải được tôi rèn qua từng hành động cụ thể mỗi ngày. Lời nhắc nhở 'Danh dự là điều thiêng liêng và cao quý nhất' sẽ mãi là chiếc phanh hãm đạo đức giúp tôi kiên định trước mọi cám dỗ vật chất tầm thường. Tôi nguyện sẽ giữ trọn lời thề trung thành với Đảng, tận tụy với dân, giữ gìn thanh danh người chiến sĩ Công an nhân dân luôn trong sáng như gương, xứng đáng với niềm tin yêu trọn vẹn của nhân dân."
    },
    {
      topic: "5. Lòng nhân ái, Đại đoàn kết và Tình đồng bào trước bão lũ",
      opening: "Trải qua hàng ngàn năm dựng nước và giữ nước, sức mạnh vĩ đại nhất giúp dân tộc Việt Nam vượt qua muôn vàn thiên tai, giặc giã chính là tình đồng bào ruột thịt và tinh thần đại đoàn kết toàn dân tộc. Đúng như truyền thống đạo lý nghìn đời: 'Nhiễu điều phủ lấy giá gương / Người trong một nước phải thương nhau cùng', thông điệp: [Trích dẫn luận đề] vang lên như một bản hòa ca lay động hàng triệu trái tim. Luận đề này khẳng định rằng lòng nhân ái không chỉ là một phẩm chất đạo đức cao quý mà còn là cội nguồn sức mạnh nội sinh bảo đảm sự trường tồn của dân tộc.",
      ending: "Lòng nhân ái chân chính không dừng lại ở những giọt nước mắt xót thương hay lời nói hoa mỹ trên mạng xã hội, mà phải được hiện thực hóa bằng những hành động sẻ chia thiết thực. Khắc ghi lời thề thiêng liêng 'Vì nước quên thân, vì dân phục vụ', bản thân tôi luôn nhắc nhở mình phải nuôi dưỡng một trái tim nóng ấm tình người, biết trăn trở trước nỗi đau của nhân dân. Tôi nguyện sẽ đem hết sức mình, sẵn sàng xả thân nơi tuyến đầu hiểm nguy nhất để bảo vệ cuộc sống bình yên và hạnh phúc của đồng bào."
    },
    {
      topic: "6. Thích ứng nghề nghiệp, tự học & Thanh niên '3 không' (Đề số 01)",
      opening: "Thực trạng đáng báo động về hàng triệu thanh niên rơi vào tình trạng '3 không' — không việc làm, không đi học và không được đào tạo — đang gióng lên hồi chuông cảnh tỉnh về nguy cơ lãng phí nguồn lực trẻ trong kỷ nguyên mới. Khi làn sóng tự động hóa và trí tuệ nhân tạo đang làm biến mất hàng triệu việc làm truyền thống, sự thụ động đồng nghĩa với tự đào thải. Đúng như lời khẳng định: [Trích dẫn luận đề]. Nhận định trên đặt ra một đòi hỏi bức thiết: Tự học và thích ứng linh hoạt chính là chiếc chìa khóa duy nhất để người trẻ làm chủ vận mệnh và khẳng định giá trị bản thân.",
      ending: "Tấm bằng đại học không còn là bảo chứng suốt đời, chỉ có tinh thần tự học không ngừng nghỉ mới là động cơ vĩnh cửu giúp con người tiến bước. Là một thanh niên đang nỗ lực rèn luyện để bước vào hàng ngũ Công an nhân dân, tôi tự nhủ phải kiên quyết rời bỏ vùng an toàn, không ngừng cập nhật tri thức pháp luật, nghiệp vụ và công nghệ. Chỉ khi tự nâng tầm bản thân, tôi mới có thể hoàn thành xuất sắc mọi trọng trách được giao phó trong kỷ nguyên số."
    },
    {
      topic: "7. Mục tiêu 2030 - 2045 & Trách nhiệm của từng cá nhân (Đề số 02)",
      opening: "Đại hội lần thứ XIV của Đảng đã thắp sáng con đường tương lai của đất nước bằng những mục tiêu chiến lược mang tầm vóc lịch sử: Đến năm 2030 Việt Nam trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao; và đến năm 2045 trở thành nước phát triển, thu nhập cao. Khát vọng phồn vinh ấy không phải là một khẩu hiệu xa vời nằm trên trang giấy, mà là mệnh lệnh phát triển bắt nguồn từ chính ý thức và hành động của từng người dân. Đúng như ý kiến sâu sắc: [Trích dẫn luận đề]. Vấn đề này làm sáng tỏ mối quan hệ biện chứng giữa vận mệnh quốc gia và trách nhiệm công dân.",
      ending: "Một dân tộc hùng cường chỉ có thể được tạo nên từ những con người biết nuôi dưỡng ước mơ lớn và hành động mỗi ngày vì ước mơ ấy. Thay vì đứng ngoài quan sát hay trông chờ thụ động, mỗi thanh niên hãy đóng góp một phần việc cụ thể cho quê hương. Với khát vọng trở thành người chiến sĩ bảo vệ bình yên đất nước, tôi sẽ biến lòng yêu nước thành kỷ luật trong học tập, kiên định trong tư tưởng, sẵn sàng cống hiến trọn vẹn sức trẻ cho sự nghiệp công nghiệp hóa, hiện đại hóa và hội nhập quốc tế của Tổ quốc."
    },
    {
      topic: "8. Tinh gọn bộ máy & Hy sinh quyền lợi riêng vì đại cục (Đề số 03)",
      opening: "Cuộc cách mạng tinh gọn tổ chức bộ máy của hệ thống chính trị theo hướng 'Tinh - Gọn - Mạnh - Hiệu năng - Hiệu lực - Hiệu quả' đang diễn ra mạnh mẽ, đánh dấu bước chuyển mình quyết liệt của đất nước. Việc sắp xếp lại đơn vị hành chính và tinh giản biên chế tất yếu chạm đến vị trí, quyền lợi của nhiều cán bộ, đảng viên. Trong bối cảnh đó, thông điệp: [Trích dẫn luận đề] đặt ra một phép thử nghiêm túc về đức hy sinh và tinh thần đặt lợi ích chung lên trên hết. Nhận định này khơi dậy bài học đạo đức cách mạng sâu sắc: Sự phát triển của tập thể luôn cần đến bản lĩnh dấn thân và tinh thần vì đại cục của mỗi cá nhân.",
      ending: "Lịch sử dân tộc đã chứng minh, một đất nước muốn cất cánh phải có một bộ máy tinh gọn, liêm chính và những con người dám đặt lợi ích quốc gia lên trên quyền lợi cá nhân. Thấm nhuần lời căn dặn của Bác Hồ về đức tính chí công vô tư, tôi luôn xác định rằng người chiến sĩ Công an nhân dân phải tuyệt đối phục tùng sự phân công của Đảng và Tổ quốc. Dù ở bất cứ cương vị nào, nơi đô thị thuận lợi hay vùng biên ải xa xôi, tôi cũng sẵn sàng đón nhận và hoàn thành xuất sắc nhiệm vụ vì sự bình yên của nhân dân."
    },
    {
      topic: "9. Phòng chống tội phạm công nghệ cao & Bảo vệ an ninh mạng (Đề số 04)",
      opening: "Không gian mạng đang mở ra những cánh cửa tri thức vô tận nhưng cũng tiềm ẩn vô số cạm bẫy khôn lường từ tội phạm công nghệ cao, các chiêu trò thao túng tâm lý, lừa đảo xuyên biên giới và bắt cóc online. Sự thông thạo thiết bị của người trẻ không đồng nghĩa với việc đã có đủ 'kháng thể' trước những thủ đoạn tinh vi. Đúng như lời cảnh tỉnh: [Trích dẫn luận đề]. Vấn đề này đặt ra bài toán cấp bách: Bảo vệ an ninh mạng không chỉ là nhiệm vụ của lực lượng chuyên trách, mà phải bắt đầu từ văn hóa cảnh giác và ý thức trách nhiệm của từng công dân trên không gian số.",
      ending: "Trên không gian mạng, chiếc khiên chắn vững chắc nhất trước tội phạm không nằm ở bức tường lửa kỹ thuật mà nằm ở sự tỉnh táo, hiểu biết pháp luật và bản lĩnh của con người. Là một công dân trẻ mang khát vọng khoác lên màu áo Công an nhân dân, tôi nguyện sẽ chủ động trang bị kiến thức an toàn thông tin, tích cực tuyên truyền pháp luật và cảnh báo cạm bẫy cho người thân, góp phần cùng toàn lực lượng giữ vững chủ quyền số và bình yên trên không gian mạng."
    },
    {
      topic: "10. Cuộc chiến phòng chống ma túy & Giữ gìn lối sống lành mạnh",
      opening: "Trong dòng chảy phát triển của xã hội, ma túy vẫn luôn là một hiểm họa tàn độc nhất đối với nòi giống, hủy hoại nhân cách con người, tan vỡ hạnh phúc gia đình và làm phát sinh muôn vàn loại tội phạm nghiêm trọng. Đáng lo ngại hơn, ma túy thế hệ mới đang tìm mọi cách len lỏi vào học đường dưới những lớp vỏ bọc tinh vi. Nhận thức rõ tính chất cam go của cuộc chiến này, thông điệp: [Trích dẫn luận đề] vang lên như một lời hiệu triệu đanh thép: Ngăn chặn ma túy là trách nhiệm thiêng liêng bảo vệ tương lai giống nòi và bình yên xã hội.",
      ending: "Mỗi chiến công của lực lượng Cảnh sát điều tra tội phạm về ma túy giữa thời bình đều phải đánh đổi bằng mồ hôi, nước mắt và cả sự hy sinh xương máu của các chiến sĩ công an. Sự hy sinh cao cả ấy nhắc nhở chúng ta về giá trị vô giá của cuộc sống bình yên hôm nay. Tôi nguyện sẽ luôn giữ vững lối sống trong sạch, lành mạnh, kiên quyết nói không với ma túy dưới mọi hình thức, đồng thời sẵn sàng trở thành một tuyên truyền viên tích cực chung tay đẩy lùi 'cái chết trắng' ra khỏi cộng đồng."
    }
  ],

  transitionPhrases: [
    {
      useFor: "Chuyển từ Mở bài sang Giải thích",
      examples: [
        "Để nhận thức thấu đáo giá trị của vấn đề, trước hết chúng ta cần hiểu rõ bản chất cốt lõi của...",
        "Trước hết, xét về mặt nội hàm khái niệm, có thể hiểu...",
        "Thông điệp trên được kết tinh từ các khía cạnh nhận thức cơ bản, trong đó..."
      ]
    },
    {
      useFor: "Chuyển từ Giải thích sang Bàn luận",
      examples: [
        "Từ việc cắt nghĩa trên, câu hỏi đặt ra là: Vì sao [...] lại giữ vai trò mang tính quyết định như vậy?",
        "Không phải ngẫu nhiên mà vấn đề này lại nhận được sự quan tâm sâu sắc của toàn xã hội, bởi lẽ...",
        "Xét trên cả phương diện lý luận và thực tiễn đời sống, luận điểm này hoàn toàn xác đáng bởi những lý do cốt tử sau."
      ]
    },
    {
      useFor: "Dẫn dắt vào Dẫn chứng Thực tế",
      examples: [
        "Nhìn vào dòng chảy thời sự của đất nước những năm 2024 - 2026, chúng ta bắt gặp những minh chứng sống động cho nhận định trên...",
        "Thực tiễn sinh động của đời sống xã hội và công cuộc bảo vệ an ninh trật tự chính là thước đo kiểm chứng rõ nhất cho chân lý ấy...",
        "Một minh chứng tiêu biểu, giàu sức thuyết phục và mang tính thời sự sâu sắc chính là..."
      ]
    },
    {
      useFor: "Chuyển sang Phản đề & Mở rộng",
      examples: [
        "Tuy nhiên, nhìn nhận vấn đề một cách biện chứng và khách quan, chúng ta cũng không khỏi trăn trở khi...",
        "Bên cạnh những mặt tích cực đầy tự hào, một thực tế đáng báo động đang đặt ra là...",
        "Dẫu vậy, việc đề cao [...] không đồng nghĩa với thái độ cực đoan hay cứng nhắc..."
      ]
    },
    {
      useFor: "Chuyển sang Liên hệ Người chiến sĩ CAND",
      examples: [
        "Đặc biệt, đối với những người đang phấn đấu đứng vào hàng ngũ của lực lượng Công an nhân dân anh hùng, bài học này càng mang ý nghĩa sống còn...",
        "Là một người trẻ mang ước vọng phụng sự Tổ quốc trong hàng ngũ Công an nhân dân, tôi thấu hiểu rằng...",
        "Thấm nhuần tinh thần 'Danh dự là điều thiêng liêng và cao quý nhất', bản thân tôi nhận thấy trách nhiệm trước hết là..."
      ]
    }
  ],

  deadlyMistakes: [
    {
      name: "1. Viết dưới 500 chữ (Lỗi hình thức bị trừ điểm nặng nhất)",
      consequence: "Bị trừ từ 30% đến 50% điểm số phần tự luận vì vi phạm quy chế bài thi tối thiểu 500 từ.",
      solution: "Triển khai đủ mô hình 6 đoạn văn. Nếu thấy bài còn ngắn, hãy phân tích kỹ hơn nguyên nhân vì sao, mở rộng dẫn chứng thời sự và làm sâu sắc thêm phần liên hệ đặc thù ngành CAND."
    },
    {
      name: "2. Lạc đề sang Nghị luận Văn học hoặc Kể lể cá nhân",
      consequence: "Mất điểm tiêu chí 2 và 3, bài viết trở nên sướt mướt, thiếu chất chính luận và tư tưởng của một người chiến sĩ công an.",
      solution: "Luôn bám chắc luận đề chính luận. Dùng lý lẽ logic, ngôn ngữ chính xác, lập luận nguyên nhân - kết quả, không sa đà vào cảm xúc cá nhân vụn vặt."
    },
    {
      name: "3. Dẫn chứng chung chung, sáo mòn, sai thông tin thời sự",
      consequence: "Mất trọn điểm dẫn chứng (5.0 điểm), tạo cảm giác học vẹt, xa rời thực tế đời sống.",
      solution: "Tuyệt đối tránh các dẫn chứng cổ như Edison, Bill Gates... Hãy dùng dẫn chứng thời sự 2024 - 2026 của đất nước, các sự kiện lớn của Bộ Công An, Báo CAND, tấm gương cứu hộ bão lũ, chuyển đổi số VNeID."
    },
    {
      name: "4. Thiếu liên hệ bản thân gắn với trách nhiệm CAND",
      consequence: "Bài viết thiếu đi bản sắc của bài thi tuyển sinh Bộ Công An, điểm phần kết bài chỉ đạt mức trung bình.",
      solution: "Đoạn kết luôn phải có ít nhất 3-4 câu khẳng định lý tưởng chính trị, tinh thần thượng tôn pháp luật, sẵn sàng rèn luyện phẩm chất người chiến sĩ CAND vì bình yên cuộc sống."
    }
  ]
};

// 2. PHÂN LOẠI 5 CHUYÊN ĐỀ TRỌNG TÂM TRONG ĐỀ THI VB2 CA1
window.ESSAY_THEMES = [
  {
    id: "theme-all",
    name: "Tất cả chuyên đề",
    icon: "📌",
    desc: "Toàn bộ tài liệu, dẫn chứng và bài mẫu nghị luận xã hội."
  },
  {
    id: "theme-era",
    name: "Kỷ nguyên mới & Khát vọng Thanh niên",
    icon: "🚀",
    desc: "Bản lĩnh, lý tưởng cách mạng, khát vọng cống hiến, tinh thần dấn thân của tuổi trẻ trong kỷ nguyên vươn mình của dân tộc."
  },
  {
    id: "theme-digital",
    name: "Chuyển đổi số, AI & An ninh mạng",
    icon: "💻",
    desc: "Đề án 06, ứng dụng VNeID, trí tuệ nhân tạo có đạo đức, phòng chống tội phạm công nghệ cao và bảo vệ dữ liệu cá nhân."
  },
  {
    id: "theme-law",
    name: "Thượng tôn Pháp luật & Đạo đức Công vụ",
    icon: "⚖️",
    desc: "Văn hóa pháp luật, kỷ cương phép nước, 'Danh dự là điều thiêng liêng nhất', phòng chống tham nhũng lãng phí, ATGT."
  },
  {
    id: "theme-humanity",
    name: "Lòng nhân ái & Tinh thần Vì Nhân Dân",
    icon: "❤️",
    desc: "Đại đoàn kết toàn dân tộc, tương thân tương ái trong bão lũ thiên tai, xóa nhà tạm, đạo đức lối sống vì cộng đồng."
  },
  {
    id: "theme-society",
    name: "Phát triển Bền vững & Phòng chống Tệ nạn",
    icon: "🌿",
    desc: "Bảo vệ môi trường, phát triển kinh tế xanh, cuộc chiến chống ma túy, bài trừ tệ nạn xã hội vì cuộc sống bình yên."
  }
];

// 3. NGÂN HÀNG DẪN CHỨNG THỜI SỰ TỪ BÁO CAND
window.ESSAY_GUIDES = [
  {
    id: "ev-01",
    themeId: "theme-era",
    theme: "Kỷ nguyên mới & Khát vọng Thanh niên",
    date: "10/2026",
    sourceTitle: "Tuổi trẻ Việt Nam trong kỷ nguyên mới: Bản lĩnh, sáng tạo và khát vọng làm chủ tương lai",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Văn kiện Đảng",
    evidence: "Tổng Bí thư Tô Lâm nhấn mạnh thông điệp lịch sử: Việt Nam đang bước vào Kỷ nguyên mới - Kỷ nguyên vươn mình của dân tộc. Trong đó, thanh niên là lực lượng rường cột, tiên phong làm chủ khoa học - công nghệ, đổi mới sáng tạo, chuyển đổi số và hội nhập quốc tế để hiện thực hóa mục tiêu đến năm 2030 là nước đang phát triển có công nghiệp hiện đại, đến năm 2045 là nước phát triển thu nhập cao.",
    issue: "Sự nghiệp lớn của đất nước đòi hỏi thanh niên không thể chỉ nói khẩu hiệu suông, mà phải biến khát vọng tự lực tự cường thành hành động cụ thể mỗi ngày.",
    angles: [
      "Bản lĩnh thanh niên là không né tránh khó khăn, dám rời bỏ 'vùng an toàn' để đối mặt với thử thách của thời đại số.",
      "Lý tưởng cách mạng gắn liền với tinh thần trách nhiệm, kỷ luật trong học tập, công tác và tuân thủ pháp luật.",
      "Đối với người chiến sĩ CAND tương lai, khát vọng làm chủ tương lai gắn liền với nhiệm vụ làm chủ công nghệ, bảo vệ bình yên Tổ quốc."
    ],
    solutions: [
      "Thế hệ trẻ: Tự nâng cao trình độ chuyên môn, ngoại ngữ, kỹ năng số; tích cực cống hiến nơi tuyến đầu gian khó.",
      "Lực lượng vũ trang: Bồi dưỡng lý tưởng chính trị kiên định, tạo môi trường rèn luyện thực chất cho cán bộ trẻ."
    ],
    sampleQuote: "Lời khẳng định của Tổng Bí thư Tô Lâm về 'Kỷ nguyên vươn mình của dân tộc' là hiệu triệu thiêng liêng đòi hỏi mỗi thanh niên hôm nay phải tự biến mình thành một hạt nhân kiến tạo, lấy tri thức và bản lĩnh để phụng sự Tổ quốc.",
    prompt: "Từ thông điệp về 'kỷ nguyên vươn mình của dân tộc', hãy viết bài nghị luận (tối thiểu 500 chữ) bàn về trách nhiệm và khát vọng của thanh niên trong giai đoạn hiện nay."
  },
  {
    id: "ev-02",
    themeId: "theme-humanity",
    theme: "Lòng nhân ái & Tinh thần Vì Nhân Dân",
    date: "09/2024 - 2026",
    sourceTitle: "Hình ảnh người chiến sĩ Công an nhân dân dầm mình trong bão lũ Yagi cứu dân",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Cổng TTĐT Bộ Công an",
    evidence: "Trong cơn siêu bão số 3 (Yagi) và trận lũ quét kinh hoàng tại Làng Nủ (Lào Cai), Yên Bái, Quảng Ninh... hàng vạn cán bộ, chiến sĩ Công an nhân dân và Quân đội đã trắng đêm cứu hộ, vượt sạt lở tiếp tế lương thực, cõng người già và trẻ nhỏ qua dòng nước xiết. Tấm gương hy sinh anh dũng của cán bộ chiến sĩ CAND khi làm nhiệm vụ cứu hộ dân đã làm xúc động hàng triệu con tim, khắc họa sâu đậm biểu tượng 'Vì nước quên thân, vì dân phục vụ'.",
    issue: "Lòng dũng cảm và tinh thần vì nhân dân phục vụ được tôi luyện từ lý tưởng cao đẹp và đạo đức cách mạng trong sáng.",
    angles: [
      "Thiên tai khốc liệt là phép thử nghiệt ngã nhất đối với bản lĩnh và tình thương yêu đồng bào của người chiến sĩ công an.",
      "Hành động cứu dân nơi hiểm nguy chứng minh danh dự và trách nhiệm của lực lượng vũ trang là gắn bó máu thịt với nhân dân.",
      "Sự quyên góp hàng ngàn tỷ đồng của nhân dân cả nước khẳng định sức mạnh trường tồn của khối đại đoàn kết dân tộc."
    ],
    solutions: [
      "Lực lượng vũ trang: Luôn duy trì tinh thần sẵn sàng ứng trực 24/7, gắn bó mật thiết với nhân dân.",
      "Mỗi người trẻ: Học tập tinh thần dấn thân, không ngại hiểm nguy vì sự bình yên của cộng đồng."
    ],
    sampleQuote: "Hình ảnh những người chiến sĩ Công an dầm mình trong dòng nước lũ cuồn cuộn để đưa từng người dân đến nơi an toàn là minh chứng bất tử cho lời thề thiêng liêng: 'Lúc dân cần, lúc dân khó, có Công an'.",
    prompt: "Viết bài văn nghị luận (tối thiểu 500 chữ) bàn về sức mạnh của lòng nhân ái và tinh thần đại đoàn kết dân tộc được thắp sáng qua những thời điểm gian nan, thử thách."
  },
  {
    id: "ev-03",
    themeId: "theme-digital",
    theme: "Chuyển đổi số, AI & An ninh mạng",
    date: "2025 - 2026",
    sourceTitle: "Đề án 06 và ứng dụng VNeID: Bước đột phá lịch sử trong phục vụ nhân dân",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân",
    evidence: "Bộ Công an đã chủ trì triển khai thành công Đề án 06 về phát triển ứng dụng dữ liệu về dân cư, định danh và xác thực điện tử. Cơ sở dữ liệu quốc gia về dân cư với hơn 100 triệu bản ghi được xây dựng 'đúng, đủ, sạch, sống'. Ứng dụng VNeID đã tích hợp hàng chục loại giấy tờ tùy thân, thủ tục hành chính tư pháp, giúp tiết kiệm hàng ngàn tỷ đồng mỗi năm cho người dân và doanh nghiệp, đẩy lùi tiêu cực nhũng nhiễu.",
    issue: "Chuyển đổi số chỉ thực sự có ý nghĩa khi lấy người dân và doanh nghiệp làm trung tâm, biến công nghệ thành công cụ minh bạch hóa và nâng cao chất lượng cuộc sống.",
    angles: [
      "Lực lượng CAND đã chứng minh tinh thần tiên phong, sáng tạo trong việc làm chủ công nghệ mũi nhọn để phục vụ đất nước.",
      "Dữ liệu dân cư là tài nguyên vô giá; bảo vệ an ninh an toàn dữ liệu cá nhân là nhiệm vụ sống còn trong kỷ nguyên số.",
      "Cải cách thủ tục hành chính thông qua số hóa giúp triệt tiêu mầm mống tiêu cực, quan liêu, xây dựng chính phủ số liêm chính."
    ],
    solutions: [
      "Người dân: Chủ động học tập kỹ năng số, sử dụng dịch vụ công trực tuyến, nâng cao cảnh giác bảo mật tài khoản cá nhân.",
      "Cán bộ chiến sĩ: Nêu cao tinh thần tận tụy, 'đi từng ngõ, gõ từng nhà' để hỗ trợ người dân tiếp cận tiện ích số."
    ],
    sampleQuote: "Đề án 06 của Bộ Công an không chỉ là một kỳ tích công nghệ mà còn là bản tuyên ngôn về tinh thần phụng sự: công nghệ hiện đại nhất phải được phục vụ lợi ích thiết thực nhất của nhân dân.",
    prompt: "Bàn về vai trò của công cuộc chuyển đổi số quốc gia trong việc xây dựng một xã hội minh bạch, hiện đại và lấy con người làm trung tâm."
  },
  {
    id: "ev-04",
    themeId: "theme-digital",
    theme: "Chuyển đổi số, AI & An ninh mạng",
    date: "11/2026",
    sourceTitle: "Đấu tranh quyết liệt với tội phạm lừa đảo công nghệ cao và 'bắt cóc online'",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Cục An ninh mạng (A05)",
    evidence: "Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao (A05) liên tiếp bóc gỡ các ổ nhóm tội phạm quốc tế lừa đảo hàng nghìn tỷ đồng; cảnh báo các thủ đoạn thao túng tâm lý như giả danh cơ quan công an, bắt cóc trực tuyến qua ứng dụng gọi video, giả mạo khuôn mặt và giọng nói (Deepfake AI). Nhiều học sinh, sinh viên thiếu kinh nghiệm đã bị cô lập và chiếm đoạt tiền tỉ.",
    issue: "Sự thông thạo thiết bị của giới trẻ không đồng nghĩa với khả năng miễn dịch trước cạm bẫy tâm lý và thủ đoạn tinh vi trên không gian mạng.",
    angles: [
      "Không gian mạng là môi trường ảo nhưng tổn thương, mất mát về tài sản và tâm lý của nạn nhân là hoàn toàn thật.",
      "Thao túng nỗi sợ hãi và sự thiếu hiểu biết pháp luật là vũ khí nguy hiểm nhất của tội phạm công nghệ cao.",
      "Bảo vệ an ninh mạng bắt đầu từ văn hóa cảnh giác và hiểu biết pháp luật của từng người dùng."
    ],
    solutions: [
      "Mỗi cá nhân: Tuyệt đối không chuyển tiền theo yêu cầu đe dọa qua điện thoại; bảo vệ mã OTP, dữ liệu sinh trắc học; xác minh qua kênh chính thống.",
      "Lực lượng Công an: Nhanh chóng phong tỏa dòng tiền lừa đảo, phối hợp quốc tế triệt phá các tụ điểm máy chủ ở nước ngoài."
    ],
    sampleQuote: "Trên không gian mạng, chiếc khiên chắn vững chắc nhất trước những thủ đoạn lừa đảo tinh vi không nằm ở cấu hình máy tính mà nằm ở bản lĩnh tỉnh táo, kiến thức pháp luật và sự bình tĩnh của chính mỗi con người.",
    prompt: "Từ thực trạng tội phạm lừa đảo công nghệ cao gia tăng, hãy viết bài nghị luận (tối thiểu 500 chữ) bàn về trách nhiệm tự bảo vệ mình và bảo vệ cộng đồng trên không gian mạng."
  },
  {
    id: "ev-05",
    themeId: "theme-digital",
    theme: "Chuyển đổi số, AI & An ninh mạng",
    date: "11/2026",
    sourceTitle: "Sử dụng trí tuệ nhân tạo (AI) có trách nhiệm, liêm chính và nhân văn",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân",
    evidence: "Tại các diễn đàn giáo dục và khoa học, các chuyên gia cảnh báo: AI mang lại sức mạnh to lớn trong việc tự động hóa và hỗ trợ học tập, nhưng việc lạm dụng AI chép bài thi, làm hộ luận văn đang bào mòn tư duy độc lập, vi phạm nghiêm trọng liêm chính học thuật và tạo ra nguy cơ lan truyền thông tin sai lệch xuyên tạc.",
    issue: "Công nghệ phát triển nhanh đến đâu thì con người càng phải giữ vững phẩm giá, tư duy độc lập và đạo đức trước sức mạnh của máy móc.",
    angles: [
      "AI là công cụ trợ lực tuyệt vời nhưng không thể thay thế trí tuệ cảm xúc, lương tri và trách nhiệm giải trình của con người.",
      "Sao chép máy móc từ AI mà không kiểm chứng là hành vi tự tước bỏ cơ hội trưởng thành và tự đánh lừa chính mình.",
      "Đạo đức và tính trung thực học thuật là ranh giới phân định giá trị con người trong kỷ nguyên số."
    ],
    solutions: [
      "Người học: Dùng AI để gợi mở góc nhìn và phản biện, nhưng tự mình nghiên cứu, kiểm chứng và chịu trách nhiệm về bài làm.",
      "Nhà trường: Xây dựng quy chuẩn sử dụng AI minh bạch, đánh giá năng lực qua quá trình tư duy thay vì chỉ nhìn vào sản phẩm."
    ],
    sampleQuote: "Công nghệ dù thông minh đến đâu cũng chỉ là phương tiện; chỉ có tư duy độc lập, sự trung thực và trái tim nhân văn của con người mới là ngọn đuốc dẫn đường cho tương lai.",
    prompt: "Trình bày suy nghĩ của anh/chị về việc sử dụng trí tuệ nhân tạo (AI) như một công cụ hỗ trợ học tập mà không đánh mất tư duy độc lập và lòng trung thực."
  },
  {
    id: "ev-06",
    themeId: "theme-law",
    theme: "Thượng tôn Pháp luật & Đạo đức Công vụ",
    date: "2025 - 2026",
    sourceTitle: "Văn hóa thượng tôn pháp luật: 'Đã uống rượu bia, không lái xe'",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Cục Cảnh sát Giao thông",
    evidence: "Việc xử lý kiên quyết vi phạm nồng độ cồn theo phương châm 'không có vùng cấm, không có ngoại lệ' đã tạo ra một sự thay đổi mang tính bước ngoặt trong nếp sống văn hóa của toàn xã hội. Số vụ tai nạn giao thông nghiêm trọng giảm sâu, cứu sống hàng ngàn sinh mạng mỗi năm và xây dựng thói quen đi xe dịch vụ sau mỗi cuộc vui.",
    issue: "Kỷ cương xã hội chỉ thực sự vững chắc khi pháp luật được thực thi nghiêm minh, không phân biệt địa vị xã hội, và mỗi người dân tự giác coi đó là chuẩn mực bảo vệ sự sống.",
    angles: [
      "Ngụy biện 'uống một chén vẫn lái được' là sự coi thường sinh mạng của chính mình và những người vô tội cùng tham gia giao thông.",
      "Sự nghiêm minh, kiên quyết của lực lượng CSGT đã giúp pháp luật đi vào đời sống, tạo niềm tin cho nhân dân.",
      "Văn hóa thượng tôn pháp luật bắt đầu từ việc từ bỏ những thói quen dễ dãi, hình thành nếp sống văn minh và trách nhiệm."
    ],
    solutions: [
      "Mỗi công dân: Luôn lên kế hoạch di chuyển an toàn; đã cầm lái thì dứt khoát không uống rượu bia.",
      "Cơ quan chức năng: Duy trì kiểm tra công khai, minh bạch, xử lý bình đẳng mọi hành vi vi phạm."
    ],
    sampleQuote: "Một xã hội văn minh không đo bằng số lượng phương tiện hiện đại trên đường, mà đo bằng ý thức thượng tôn pháp luật và sự tôn trọng tính mạng của nhau sau mỗi bánh xe lăn.",
    prompt: "Bàn về ý thức thượng tôn pháp luật và tinh thần trách nhiệm với cộng đồng qua văn hóa chấp hành quy định an toàn giao thông."
  },
  {
    id: "ev-07",
    themeId: "theme-law",
    theme: "Thượng tôn Pháp luật & Đạo đức Công vụ",
    date: "2025 - 2026",
    sourceTitle: "'Danh dự là điều thiêng liêng và cao quý nhất' - Di huấn đạo đức cách mạng",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Văn kiện Đảng",
    evidence: "Lời căn dặn tâm huyết của cố Tổng Bí thư Nguyễn Phú Trọng: 'Danh dự là điều thiêng liêng và cao quý nhất' đã trở thành kim chỉ nam cho cán bộ, đảng viên, đặc biệt là cán bộ chiến sĩ CAND. Trong công cuộc đấu tranh phòng, chống tham nhũng, lãng phí, tiêu cực và xây dựng lực lượng vũ trang trong sạch, vững mạnh, phẩm chất liêm chính và danh dự người chiến sĩ công an được đặt lên vị trí tối thượng.",
    issue: "Trước những cám dỗ vật chất và thử thách của cuộc sống, phẩm giá và danh dự trong sạch chính là thước đo giá trị cao nhất của người chiến sĩ cách mạng.",
    angles: [
      "Danh dự không phải là thứ hư danh, mà là sự kiên định bảo vệ lẽ phải, không bị mua chuộc bởi tiền tài, danh lợi bất chính.",
      "Lực lượng CAND là thanh bảo kiếm bảo vệ Đảng và nhân dân, thanh bảo kiếm ấy phải luôn sáng bóng, không được gỉ sét bởi chủ nghĩa cá nhân.",
      "Giữ gìn danh dự bắt đầu từ những việc làm liêm chính nhỏ nhất trong công tác chuyên môn và lối sống đời thường."
    ],
    solutions: [
      "Cán bộ chiến sĩ: Thường xuyên 'tự soi, tự sửa', rèn luyện 6 điều Bác Hồ dạy Công an nhân dân.",
      "Mỗi người trẻ: Nuôi dưỡng lòng tự trọng, coi trọng sự trong sạch của lương tâm hơn mọi lợi ích ngắn hạn."
    ],
    sampleQuote: "Lời nhắc nhở 'Danh dự là điều thiêng liêng và cao quý nhất' là chiếc phanh hãm đạo đức mạnh mẽ nhất, nhắc nhở người chiến sĩ công an rằng sức mạnh lớn nhất của mình chính là niềm tin yêu và sự kính trọng của nhân dân.",
    prompt: "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) bàn về ý nghĩa của việc giữ gìn danh dự và phẩm chất liêm chính đối với thế hệ trẻ hôm nay."
  },
  {
    id: "ev-08",
    themeId: "theme-society",
    theme: "Phát triển Bền vững & Phòng chống Tệ nạn",
    date: "2025 - 2026",
    sourceTitle: "Cuộc chiến không khoan nhượng với tội phạm ma túy của lực lượng CAND",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Cục CSĐT tội phạm về ma túy (C04)",
    evidence: "Cục C04 cùng lực lượng công an các tỉnh biên giới đã triệt phá hàng loạt đường dây ma túy xuyên quốc gia, thu giữ hàng tấn ma túy đá, heroin, thuốc lắc. Trong cuộc chiến cam go khốc liệt với những kẻ buôn bán 'cái chết trắng', nhiều cán bộ chiến sĩ đã đổ máu, thậm chí anh dũng hy sinh giữa thời bình để bảo vệ thanh bình cho các bản làng, ngăn chặn ma túy xâm nhập học đường.",
    issue: "Ma túy là hiểm họa của mọi gia đình và quốc gia; cuộc chiến chống ma túy đòi hỏi sự chung tay của cả hệ thống chính trị và sự cảnh giác cao độ của thế hệ trẻ.",
    angles: [
      "Hi sinh thầm lặng của các chiến sĩ cảnh sát phòng chống ma túy là minh chứng cao đẹp nhất cho lòng dũng cảm và tinh thần trách nhiệm.",
      "Ma túy thế hệ mới (thuốc lá điện tử tẩm ma túy, 'nước vui', bóng cười...) đang nhắm vào học sinh, sinh viên bằng vỏ bọc giải trí sành điệu giả tạo.",
      "Người nghiện cần cơ hội cai nghiện và hòa nhập cộng đồng, nhưng kẻ buôn bán gieo rắc ma túy phải bị trừng trị thích đáng nhất."
    ],
    solutions: [
      "Gia đình và nhà trường: Tăng cường trang bị kiến thức nhận diện ma túy mới, quản lý chặt chẽ và lắng nghe tâm tư học sinh.",
      "Thế hệ trẻ: Kiên quyết nói không với mọi lời rủ rê sử dụng chất kích thích, không tò mò thử dù chỉ một lần."
    ],
    sampleQuote: "Mỗi chiến công trên mặt trận phòng chống ma túy được đánh đổi bằng mồ hôi, nước mắt và cả máu của người chiến sĩ Công an, nhắc nhở chúng ta về cái giá vô cùng đắt của cuộc sống bình yên hôm nay.",
    prompt: "Bàn về trách nhiệm của tuổi trẻ và toàn xã hội trong cuộc chiến ngăn chặn ma túy và giữ gìn lối sống lành mạnh."
  },
  {
    id: "ev-09",
    themeId: "theme-society",
    theme: "Phát triển Bền vững & Phòng chống Tệ nạn",
    date: "2025 - 2026",
    sourceTitle: "Không đánh đổi môi trường lấy tăng trưởng kinh tế: Xử lý nghiêm vi phạm xả thải",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Cục Cảnh sát phòng chống tội phạm về môi trường",
    evidence: "Lực lượng Cảnh sát môi trường đã liên tiếp khởi tố các vụ án vi phạm pháp luật môi trường nghiêm trọng: vụ đổ 1.900 tấn chất thải bê tông gây ô nhiễm tại Phú Quốc, các vụ xả trộm nước thải công nghiệp chưa qua xử lý ra sông hồ ở Đồng Nai, Bắc Ninh... Khẳng định quan điểm nhất quán của Đảng và Nhà nước: Kiên quyết không đánh đổi môi trường lấy tăng trưởng kinh tế đơn thuần.",
    issue: "Hành vi trục lợi kinh tế trước mắt bằng cách hủy hoại tự nhiên là tội ác đối với thế hệ tương lai và làm xói mòn nền tảng phát triển bền vững.",
    angles: [
      "Môi trường là tài sản dùng chung của toàn nhân loại, ô nhiễm không chừa bất kỳ ai dù giàu hay nghèo.",
      "Doanh nghiệp phải xem việc tuân thủ pháp luật bảo vệ môi trường là đạo đức kinh doanh cốt tử chứ không phải chi phí đối phó.",
      "Cần kết hợp hài hòa giữa chế tài xử phạt nghiêm khắc của pháp luật với việc nâng cao ý thức tiêu dùng xanh của người dân."
    ],
    solutions: [
      "Doanh nghiệp: Đầu tư công nghệ xử lý tuần hoàn chất thải, công khai minh bạch trách nhiệm xã hội.",
      "Cộng đồng: Thực hành lối sống giảm rác thải nhựa, tố giác kịp thời các hành vi bức tử môi trường."
    ],
    sampleQuote: "Bảo vệ môi trường hôm nay chính là bảo vệ sinh mệnh và tương lai của đất nước ngày mai; thiên nhiên có thể tồn tại không cần con người, nhưng con người không thể tồn tại nếu hủy hoại thiên nhiên.",
    prompt: "Viết bài nghị luận (tối thiểu 500 chữ) bàn về trách nhiệm của doanh nghiệp và thế hệ trẻ trong việc bảo vệ môi trường hướng tới phát triển bền vững."
  },
  {
    id: "ev-10",
    themeId: "theme-humanity",
    theme: "Lòng nhân ái & Tinh thần Vì Nhân Dân",
    date: "2025 - 2026",
    sourceTitle: "Phong trào cả nước chung tay 'Xóa nhà tạm, nhà dột nát' đến năm 2025",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân",
    evidence: "Hưởng ứng phong trào thi đua do Thủ tướng Chính phủ và Bộ Công an phát động, toàn lực lượng CAND cùng hệ thống chính trị đã huy động nguồn lực xã hội hóa hàng nghìn tỷ đồng, trực tiếp tham gia ngày công lao động xây dựng hàng chục ngàn căn nhà mới kiên cố cho đồng bào nghèo tại Điện Biên, Sơn La, Đắk Lắk, Sóc Trăng...",
    issue: "An cư mới lạc nghiệp; sự ấm no, hạnh phúc của người dân là thước đo chân thực nhất cho tính ưu việt của chế độ xã hội chủ nghĩa.",
    angles: [
      "Những mái ấm tình nghĩa được dựng lên từ mồ hôi của các chiến sĩ công an đã thắt chặt tình quân dân keo sơn như cá với nước.",
      "Lòng nhân ái không dừng lại ở lời nói mà phải được thể hiện qua những công trình cụ thể làm thay đổi cuộc sống người nghèo.",
      "Xóa nhà tạm là bước đi căn cơ để củng cố thế trận an ninh nhân dân vững chắc từ cơ sở."
    ],
    solutions: [
      "Nhà nước & Lực lượng CAND: Tiếp tục rà soát, hỗ trợ đúng đối tượng, bảo đảm chất lượng công trình lâu dài.",
      "Mỗi người trẻ: Tích cực tham gia các chiến dịch tình nguyện Mùa hè xanh, mang tri thức và sức trẻ giúp đỡ vùng sâu, vùng xa."
    ],
    sampleQuote: "Khi người chiến sĩ công an cùng nhân dân lợp từng mái ngói, dựng từng bờ tường che mưa che nắng, đó là lúc nền tảng an ninh nhân dân được xây đắp kiên cố nhất trong lòng dân.",
    prompt: "Bàn về ý nghĩa nhân văn sâu sắc của các hoạt động chăm lo cho người yếu thế trong việc củng cố khối đại đoàn kết toàn dân tộc."
  },
  {
    id: "ev-11",
    themeId: "theme-era",
    theme: "Kỷ nguyên mới & Khát vọng Thanh niên",
    date: "2025 - 2026",
    sourceTitle: "Phong trào 'Bình dân học vụ số': Phổ cập kỹ năng số đến từng người dân",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Văn phòng Chính phủ",
    evidence: "Tại hội nghị chuyên đề chuyển đổi số, Tổng Bí thư Tô Lâm chỉ đạo phát động phong trào 'Bình dân học vụ số' sâu rộng toàn dân. Hàng triệu đoàn viên thanh niên và lực lượng Công an cơ sở đã thành lập các 'Tổ công nghệ số cộng đồng', trực tiếp hướng dẫn người cao tuổi, tiểu thương, nông dân cài đặt VNeID, thanh toán không dùng tiền mặt và phòng tránh lừa đảo trực tuyến.",
    issue: "Khoảng cách số sẽ tạo ra bất bình đẳng xã hội nếu những người yếu thế bị bỏ lại phía sau trên hành trình chuyển đổi số quốc gia.",
    angles: [
      "Phổ cập tri thức số hôm nay mang ý nghĩa lịch sử thiêng liêng như phong trào xóa mù chữ Bình dân học vụ năm 1945.",
      "Thanh niên phải là lực lượng xung kích mang tri thức công nghệ đi phụng sự cộng đồng thay vì chỉ dùng công nghệ để giải trí cá nhân.",
      "Sự kiên nhẫn hướng dẫn từng cụ già cầm điện thoại của chiến sĩ công an thể hiện tinh thần trọng dân, gần dân sâu sắc."
    ],
    solutions: [
      "Thanh niên: Chủ động tham gia các tổ công nghệ số cộng đồng, kiên nhẫn hỗ trợ người thân và hàng xóm.",
      "Chính quyền: Đầu tư hạ tầng Internet tới vùng sâu, vùng xa, bảo đảm cơ hội tiếp cận số công bằng."
    ],
    sampleQuote: "Chuyển đổi số chỉ thực sự thành công khi người nông dân nơi bản làng xa xôi nhất cũng cảm nhận được tiện ích và được bảo vệ an toàn trên môi trường số.",
    prompt: "Bàn về trách nhiệm của tuổi trẻ trong phong trào phổ cập kỹ năng số và thu hẹp khoảng cách tiếp cận công nghệ cho cộng đồng."
  },
  {
    id: "ev-12",
    themeId: "theme-law",
    theme: "Thượng tôn Pháp luật & Đạo đức Công vụ",
    date: "2025 - 2026",
    sourceTitle: "Cách mạng tinh gọn tổ chức bộ máy: 'Tinh - Gọn - Mạnh - Hiệu năng - Hiệu lực'",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Tạp chí Cộng sản",
    evidence: "Bộ Chính trị và Ban Chấp hành Trung ương Đảng đã ban hành các chủ trương chiến lược về việc tiếp tục đổi mới, sắp xếp tổ chức bộ máy của hệ thống chính trị tinh gọn, hoạt động hiệu lực, hiệu quả. Hàng loạt đơn vị hành chính cấp huyện, cấp xã được sáp nhập; nhiều cán bộ, chiến sĩ công an sẵn sàng nhận nhiệm vụ tăng cường về cơ sở, biên giới hoặc tự nguyện nghỉ công tác để nhường chỗ cho thế hệ kế cận.",
    issue: "Một bộ máy cồng kềnh, nhiều tầng nấc trung gian là rào cản lớn nhất kìm hãm sự phát triển của đất nước và gây lãng phí nguồn lực.",
    angles: [
      "Tinh gọn bộ máy đòi hỏi đức hy sinh lợi ích cá nhân vì sự phát triển bền vững và phồn vinh của quốc gia.",
      "Bộ máy hành chính không sinh ra để tạo quyền uy, mà sinh ra để phục vụ nhân dân nhanh nhất, thuận tiện nhất.",
      "Lực lượng CAND luôn đi đầu trong việc tinh giản tổ chức theo phương châm 'Bộ tinh, tỉnh toàn diện, huyện vững mạnh, xã bám cơ sở'."
    ],
    solutions: [
      "Mỗi cán bộ, đảng viên: Nêu cao tinh thần nêu gương, sẵn sàng cống hiến vì đại cục, không níu kéo quyền lợi cá nhân.",
      "Hệ thống chính trị: Đãi ngộ xứng đáng, tạo điều kiện chuyển đổi nghề nghiệp công bằng cho các nhân sự chịu tác động."
    ],
    sampleQuote: "Khi một cán bộ sẵn sàng rời khỏi chiếc ghế quen thuộc để bộ máy chung vận hành trơn tru hơn, đó chính là lúc phẩm chất của người cộng sản chân chính tỏa sáng rực rỡ nhất.",
    prompt: "Từ chủ trương tinh gọn bộ máy của Đảng, hãy bàn về tinh thần trách nhiệm và sự hy sinh lợi ích riêng vì lợi ích chung của tập thể."
  },
  {
    id: "ev-13",
    themeId: "theme-humanity",
    theme: "Lòng nhân ái & Tinh thần Vì Nhân Dân",
    date: "09/2024 - 2026",
    sourceTitle: "Minh bạch sao kê hơn 2.000 tỷ đồng cứu trợ bão lũ: Củng cố niềm tin đồng bào",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Cổng TTĐT MTTQ Việt Nam",
    evidence: "Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam đã công khai hàng ngàn trang sao kê chi tiết từng giao dịch quyên góp của người dân và tổ chức ủng hộ đồng bào bị thiệt hại do bão số 3 (Yagi). Hành động minh bạch chưa từng có này đã nhận được sự đồng thuận tuyệt đối của xã hội, đập tan mọi hoài nghi và thổi bùng làn sóng ủng hộ với tổng số tiền vượt mốc 2.000 tỷ đồng.",
    issue: "Lòng nhân ái chỉ có thể bền vững và phát huy sức mạnh to lớn nhất khi được đặt trên nền tảng của sự minh bạch, liêm chính và trách nhiệm giải trình.",
    angles: [
      "Sự minh bạch là chiếc cầu nối củng cố niềm tin giữa nhân dân với các tổ chức cứu trợ và Nhà nước.",
      "Từng đồng tiền nhỏ của các em học sinh, người lao động gửi gắm đều chứa đựng tình nghĩa đồng bào thiêng liêng cần được trân trọng tuyệt đối.",
      "Đấu tranh kiên quyết với các hành vi 'làm màu', trục lợi từ thiện để bảo vệ sự trong sạch của đạo lý nhân ái dân tộc."
    ],
    solutions: [
      "Các tổ chức từ thiện: Ứng dụng công nghệ số và tài khoản minh bạch để nhân dân giám sát trực tiếp dòng tiền cứu trợ.",
      "Công dân: Chọn lựa các kênh chính thống để đóng góp, tỉnh táo trước các tài khoản giả mạo lừa đảo từ thiện."
    ],
    sampleQuote: "Minh bạch không chỉ là trách nhiệm pháp lý mà là đạo đức cao nhất của lòng nhân ái; niềm tin của nhân dân một khi đã được thắp sáng sẽ tạo nên sức mạnh vô địch dời non lấp biển.",
    prompt: "Bàn về ý nghĩa của tính minh bạch và lòng tin trong các hoạt động nhân đạo, thiện nguyện vì cộng đồng."
  },
  {
    id: "ev-14",
    themeId: "theme-society",
    theme: "Phát triển Bền vững & Phòng chống Tệ nạn",
    date: "2025 - 2026",
    sourceTitle: "Tấm gương hy sinh dũng cảm của các cán bộ chiến sĩ CAND trong mưa lũ sạt lở",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân",
    evidence: "Trong các trận lũ quét, sạt lở kinh hoàng tại miền núi phía Bắc và Tây Nguyên, nhiều tấm gương cán bộ chiến sĩ công an đã quên mình vì dân: Trung tá Trần Văn Dũng (Trưởng Công an xã) dũng cảm hy sinh khi đi cứu hộ dân trong sạt lở đất; các chiến sĩ cảnh sát PCCC & CNCH lao mình vào tâm lũ cứu sống hàng trăm người già, trẻ nhỏ.",
    issue: "Giữa thời bình, sự bình yên và hạnh phúc của nhân dân vẫn hàng ngày được đánh đổi bằng máu, mồ hôi và sự hy sinh cao cả của người chiến sĩ lực lượng vũ trang.",
    angles: [
      "Sự hy sinh của các anh không phải là sự liều lĩnh vô nghĩa, mà là kết tinh của mệnh lệnh từ trái tim người chiến sĩ công an nhân dân.",
      "Biết ơn sự hy sinh của các anh bằng hành động: sống có trách nhiệm, chấp hành nghiêm quy định an toàn và hỗ trợ đồng bào.",
      "Hình tượng người chiến sĩ công an ngã xuống vì bình yên cuộc sống là bài học đạo đức sống động nhất cho thế hệ trẻ."
    ],
    solutions: [
      "Lực lượng CAND: Tiếp tục trang bị phương tiện cứu hộ hiện đại, huấn luyện kỹ năng sinh tồn và bảo đảm an toàn cho cán bộ chiến sĩ.",
      "Thế hệ trẻ: Tri ân sâu sắc, lấy sự hy sinh của các thế hệ đi trước làm động lực học tập và cống hiến cho Tổ quốc."
    ],
    sampleQuote: "Không có sự hy sinh nào cao quý hơn việc ngã xuống để người khác được sống; những người chiến sĩ công an anh dũng ấy đã hóa thân vào non sông đất mẹ, để lại niềm tiếc thương và lòng biết ơn vô hạn trong lòng nhân dân.",
    prompt: "Suy nghĩ của anh/chị về sự hy sinh thầm lặng của những người lính cứu hộ và trách nhiệm tri ân của tuổi trẻ hôm nay."
  },
  {
    id: "ev-15",
    themeId: "theme-society",
    theme: "Phát triển Bền vững & Phòng chống Tệ nạn",
    date: "2025 - 2026",
    sourceTitle: "Cảnh báo thuốc lá điện tử tẩm ma túy và 'nước vui' nhắm vào giới trẻ",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Bộ Y tế",
    evidence: "Cục Cảnh sát điều tra tội phạm về ma túy liên tục phát hiện và triệt phá các xưởng sản xuất, pha trộn tinh dầu thuốc lá điện tử chứa chất ma túy mới (như cần sa tổng hợp, Ketamine, bóng cười). Nhiều học sinh, sinh viên bị ngộ độc cấp tính, hoang tưởng, tổn thương não vĩnh viễn vì bị bạn bè rủ rê dùng thử thuốc lá điện tử thế hệ mới.",
    issue: "Tội phạm ma túy đang sử dụng vỏ bọc thời thượng, 'sành điệu' để đầu độc thể xác và tinh thần của thế hệ tương lai.",
    angles: [
      "Sự tò mò dại dột và tâm lý a dua theo bạn bè có thể đánh đổi bằng cả tương lai và tính mạng.",
      "Cần coi việc sử dụng các chất kích thích trá hình là mối đe dọa trực tiếp đến an ninh học đường và trật tự an toàn xã hội.",
      "Gia đình và nhà trường cần vào cuộc quyết liệt thay vì coi thuốc lá điện tử chỉ là trò đùa vô hại của con trẻ."
    ],
    solutions: [
      "Nhà nước: Sớm hoàn thiện khung pháp lý cấm hoàn toàn thuốc lá điện tử và các sản phẩm chứa ma túy trá hình.",
      "Học sinh, sinh viên: Kiên quyết từ chối mọi lời mời chào sử dụng chất lạ, dũng cảm báo cho cơ quan công an khi phát hiện."
    ],
    sampleQuote: "Một phút tò mò thử dùng chất kích thích có thể cướp đi cả cuộc đời; bản lĩnh đích thực của người trẻ không nằm ở việc chạy theo những trò tiêu khiển độc hại mà nằm ở sự kiên định nói 'KHÔNG' để bảo vệ tương lai của mình.",
    prompt: "Bàn về hiểm họa của ma túy núp bóng học đường và trách nhiệm của thanh niên trong việc xây dựng lối sống lành mạnh, bản lĩnh."
  },
  {
    id: "ev-16",
    themeId: "theme-law",
    theme: "Thượng tôn Pháp luật & Đạo đức Công vụ",
    date: "2025 - 2026",
    sourceTitle: "Chống lãng phí: Đưa thực hành tiết kiệm thành văn hóa tự giác của toàn xã hội",
    sourceUrl: "https://cand.vn/",
    sourceName: "Báo Công an Nhân dân & Văn kiện Đảng",
    evidence: "Tổng Bí thư Tô Lâm đã có bài viết chỉ đạo mang tính chiến lược về công tác phòng, chống lãng phí, nhấn mạnh: Lãng phí gây thiệt hại nghiêm trọng không kém gì tham nhũng, làm suy giảm nguồn lực đất nước và niềm tin của nhân dân. Hàng loạt dự án treo, trụ sở bỏ hoang sau sáp nhập đã được rà soát, tái sử dụng để phục vụ trường học, bệnh viện.",
    issue: "Lãng phí thời gian, nguồn lực công và tài nguyên thiên nhiên là hành vi vô trách nhiệm với tương lai đất nước.",
    angles: [
      "Tiết kiệm không phải là bủn xỉn, dè xẻn mà là sử dụng từng đồng tiền thuế của nhân dân và từng mét vuông đất một cách hiệu quả nhất.",
      "Văn hóa chống lãng phí phải bắt đầu từ cán bộ công quyền trong việc sử dụng xe công, phòng ốc và tài sản nhà nước.",
      "Đối với người trẻ, chống lãng phí thể hiện ở việc quý trọng thời gian học tập, không lãng phí sức trẻ vào những trò vô bổ."
    ],
    solutions: [
      "Cơ quan quản lý: Xử lý trách nhiệm hình sự đối với các hành vi gây lãng phí nghiêm trọng nguồn lực nhà nước.",
      "Mỗi cá nhân: Thực hành lối sống tối giản, tiết kiệm điện nước, thực phẩm và thời gian mỗi ngày."
    ],
    sampleQuote: "Tham nhũng đục khoét của công, nhưng lãng phí làm trôi tuột đi những cơ hội ngàn vàng của dân tộc; đưa thực hành tiết kiệm thành nếp sống văn hóa chính là cách thiết thực nhất để tiếp sức cho đất nước vươn mình.",
    prompt: "Bàn về ý nghĩa của thông điệp phòng chống lãng phí và tinh thần thực hành tiết kiệm của thế hệ trẻ hôm nay."
  },
  {
    id: "ev-17",
    themeId: "theme-digital",
    theme: "Chuyển đổi số, AI & An ninh mạng",
    date: "04/11/2026",
    sourceTitle: "Lấy người dân làm trung tâm trong bảo vệ an ninh dữ liệu",
    sourceUrl: "https://cand.vn/lay-nguoi-dan-lam-trung-tam-trong-bao-ve-an-ninh-du-lieu-post826740.html",
    sourceName: "Báo Công an Nhân dân, ngày 4/11/2026",
    evidence: "Ngày 4/11/2026, Quốc hội thảo luận tại hội trường về dự án Luật An ninh dữ liệu và dự án Luật Định danh, xác thực điện tử. Đại biểu Nguyễn Vũ Trung nhấn mạnh an ninh dữ liệu gắn trực tiếp với tài khoản, hồ sơ bệnh án và danh tính của người dân; đồng thời đề nghị làm rõ việc đánh giá rủi ro, trách nhiệm bảo vệ dữ liệu và cơ chế kiểm tra. Đây là nội dung góp ý đối với dự thảo luật, không phải quy định đã có hiệu lực.",
    issue: "Chuyển đổi số cần đi cùng bảo vệ quyền riêng tư, an toàn dữ liệu và trách nhiệm giải trình của tổ chức quản lý dữ liệu.",
    angles: [
      "Dữ liệu cá nhân không chỉ là thông tin kỹ thuật mà gắn với tài sản, danh tính và quyền riêng tư của mỗi người.",
      "Chính sách bảo vệ dữ liệu cần cân bằng giữa ngăn ngừa rủi ro và tạo điều kiện cho dịch vụ số phát triển.",
      "Người dùng cũng cần thận trọng khi chia sẻ thông tin cá nhân và xác minh yêu cầu cung cấp dữ liệu."
    ],
    solutions: [
      "Cơ quan, doanh nghiệp: Thu thập dữ liệu đúng mục đích, giới hạn quyền truy cập và thông báo rõ khi xảy ra sự cố.",
      "Mỗi người: Dùng mật khẩu mạnh, bật xác thực nhiều lớp và không gửi mã OTP hoặc ảnh giấy tờ cho người lạ."
    ],
    sampleQuote: "Cuộc thảo luận về dự thảo Luật An ninh dữ liệu cho thấy bảo vệ dữ liệu không phải việc riêng của cơ quan quản lý: đó còn là cách bảo vệ tài sản, danh tính và sự an tâm của từng người dân.",
    prompt: "Từ vấn đề bảo vệ an ninh dữ liệu được đặt ra trong quá trình xây dựng pháp luật, hãy bàn về trách nhiệm của tổ chức và mỗi cá nhân trong môi trường số."
  },
  {
    id: "ev-18",
    themeId: "theme-digital",
    theme: "Chuyển đổi số, AI & An ninh mạng",
    date: "04/11/2026",
    sourceTitle: "Bóc gỡ đường dây lừa đảo đầu tư tài chính, chiếm đoạt hơn 100 tỷ đồng",
    sourceUrl: "https://cand.vn/boc-go-duong-day-lua-dao-dau-tu-tai-chinh-chiem-doat-hon-100-ty-dong-post826734.html",
    sourceName: "Báo Công an Nhân dân, ngày 4/11/2026",
    evidence: "Theo thông tin điều tra ban đầu được Báo Công an Nhân dân đăng ngày 4/11/2026, Công an TP Đà Nẵng đã khởi tố vụ án và khởi tố, bắt tạm giam một số bị can liên quan đến hoạt động kêu gọi đầu tư qua ứng dụng LB-Pro. Kết quả xác minh ban đầu cho thấy hàng trăm nhà đầu tư ở nhiều địa phương bị chiếm đoạt tổng số tiền hơn 100 tỷ đồng; vụ án đang tiếp tục được điều tra mở rộng.",
    issue: "Lời mời đầu tư lợi nhuận cao trên ứng dụng hoặc mạng xã hội có thể lợi dụng lòng tin và sự thiếu kiểm chứng để chiếm đoạt tài sản.",
    angles: [
      "Giao diện chuyên nghiệp hay tên gọi giống doanh nghiệp không đủ chứng minh một dự án đầu tư là hợp pháp.",
      "Tâm lý muốn làm giàu nhanh khiến người tham gia dễ bỏ qua việc xác minh pháp nhân, giấy phép và dòng tiền.",
      "Khi dẫn chứng vụ án đang điều tra, cần dùng đúng cụm từ như 'theo thông tin ban đầu' và không kết luận thay cơ quan tố tụng."
    ],
    solutions: [
      "Người dân: Kiểm tra giấy phép và thông tin doanh nghiệp qua kênh chính thức; không chuyển tiền theo lời hứa lợi nhuận chắc chắn.",
      "Nền tảng và cơ quan chức năng: Kịp thời cảnh báo thủ đoạn, tiếp nhận trình báo và phối hợp ngăn dòng tiền bất hợp pháp."
    ],
    sampleQuote: "Vụ việc được điều tra tại Đà Nẵng là lời cảnh báo về những lời mời đầu tư trực tuyến có lợi nhuận hấp dẫn: trước khi chuyển tiền, người dân cần kiểm chứng doanh nghiệp, ứng dụng và cơ sở pháp lý của hoạt động huy động vốn.",
    prompt: "Từ một vụ việc lừa đảo đầu tư trực tuyến được báo chí phản ánh, hãy bàn về sự tỉnh táo và trách nhiệm tự bảo vệ mình trên không gian mạng."
  },
  {
    id: "ev-19",
    themeId: "theme-law",
    theme: "Thượng tôn Pháp luật & Đạo đức Công vụ",
    date: "04/11/2026",
    sourceTitle: "Cảnh sát 141 tuần tra xuyên đêm, ngăn nguy cơ thanh thiếu niên vi phạm",
    sourceUrl: "https://cand.vn/canh-sat-141-tuan-tra-xuyen-dem-ngan-nguy-co-thanh-thieu-nien-vi-pham-post826746.html",
    sourceName: "Báo Công an Nhân dân, ngày 4/11/2026",
    evidence: "Trong ca tuần tra đêm 3-4/11/2026 tại phường Từ Liêm, Hà Nội, Tổ công tác Y21/141 kiểm tra các trường hợp có dấu hiệu vi phạm, trong đó có thanh niên đi xe máy không đội mũ bảo hiểm, che biển số. Bài báo cũng ghi nhận lực lượng chức năng phối hợp với gia đình tuyên truyền, quản lý thanh thiếu niên bên cạnh việc xử lý vi phạm.",
    issue: "Giữ gìn an toàn giao thông và trật tự công cộng cần kết hợp thực thi pháp luật với giáo dục, trách nhiệm gia đình và ý thức tự giác của người trẻ.",
    angles: [
      "Tuổi trẻ không đồng nghĩa với quyền xem nhẹ quy tắc chung; một hành vi vi phạm có thể gây nguy hiểm cho chính người điều khiển và cộng đồng.",
      "Phòng ngừa hiệu quả không chỉ là xử phạt mà còn cần sự phối hợp giữa lực lượng chức năng, gia đình và địa phương.",
      "Có thể dùng dẫn chứng để phân tích trách nhiệm công dân, văn hóa giao thông hoặc vai trò của giáo dục pháp luật."
    ],
    solutions: [
      "Thanh thiếu niên: Chấp hành quy định giao thông, không cổ vũ hoặc tham gia tụ tập gây rối.",
      "Gia đình và nhà trường: Quan tâm, hướng dẫn và trao đổi với người trẻ về hậu quả pháp lý, an toàn của hành vi vi phạm."
    ],
    sampleQuote: "Ca tuần tra của Tổ Y21/141 tại Hà Nội cho thấy giữ gìn trật tự công cộng cần sự hiện diện kịp thời của lực lượng chức năng, đồng thời cần giáo dục và phối hợp với gia đình để ngăn vi phạm từ sớm.",
    prompt: "Từ câu chuyện tuần tra bảo đảm trật tự giao thông, hãy bàn về ý thức chấp hành pháp luật và trách nhiệm của thanh thiếu niên."
  },
  {
    id: "ev-20",
    themeId: "theme-humanity",
    theme: "Lòng nhân ái & Tinh thần Vì Nhân Dân",
    date: "04/11/2026",
    sourceTitle: "Kịp thời cứu nạn tài xế mắc kẹt trong cabin xe tải bị lật",
    sourceUrl: "https://cand.vn/kip-thoi-cuu-nan-tai-xe-mac-ket-trong-cabin-xe-tai-bi-lat-post826750.html",
    sourceName: "Báo Công an Nhân dân, ngày 4/11/2026",
    evidence: "Sáng 3/11/2026, một xe tải bị lật trên đường liên bản ở xã Nậm Ty, Sơn La, khiến tài xế mắc kẹt trong cabin biến dạng. Công an xã phối hợp với người dân cứu nạn ban đầu; Đội Chữa cháy và Cứu nạn, cứu hộ khu vực 6 điều 14 cán bộ, chiến sĩ cùng phương tiện chuyên dụng đến hiện trường. Nạn nhân được đưa ra ngoài và chuyển đến bệnh viện cấp cứu.",
    issue: "Tinh thần trách nhiệm và sự phối hợp giữa lực lượng chuyên môn, chính quyền cơ sở và người dân có ý nghĩa quyết định trong tình huống khẩn cấp.",
    angles: [
      "Lòng nhân ái được thể hiện bằng hành động kịp thời, thiết thực trước nguy hiểm của người khác.",
      "Cứu nạn hiệu quả đòi hỏi kỹ năng chuyên môn, phương tiện phù hợp và phối hợp nhanh giữa nhiều lực lượng.",
      "Mỗi người cần biết hỗ trợ trong khả năng an toàn của mình và gọi lực lượng cứu hộ chuyên nghiệp khi cần."
    ],
    solutions: [
      "Cơ quan chức năng: Duy trì năng lực ứng trực, huấn luyện cứu nạn và phối hợp với lực lượng tại chỗ.",
      "Cộng đồng: Trang bị kỹ năng sơ cứu, báo tin chính xác và không tụ tập cản trở hoạt động cứu hộ."
    ],
    sampleQuote: "Việc Công an xã Nậm Ty, người dân địa phương và lực lượng cứu hộ phối hợp đưa tài xế mắc kẹt đến bệnh viện là minh chứng cụ thể cho giá trị của tinh thần trách nhiệm và sự tương trợ trong hoạn nạn.",
    prompt: "Từ một vụ cứu nạn giao thông ở Sơn La, hãy bàn về tinh thần trách nhiệm và sự sẻ chia trong cộng đồng."
  }
];

// 4. NGÂN HÀNG 6 BÀI VĂN MẪU HOÀN CHỈNH (520 - 680 TỪ)
window.ESSAY_SAMPLES = [
  {
    id: "sample-01",
    themeId: "theme-era",
    title: "Bản lĩnh và khát vọng của thanh niên trong kỷ nguyên mới",
    prompt: "Chủ tịch Hồ Chí Minh khẳng định: “Tương lai thuộc về thanh niên. Tương lai là cách mạng luôn tiến lên. Là chủ của tương lai, thanh niên không thể không có lý tưởng cao cả. Vì vậy thanh niên phải có cuộc sống chính trị tích cực và cách mạng.” (Hồ Chí Minh toàn tập). Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) trình bày cách hiểu của mình về nhận định trên và liên hệ với vai trò của thanh niên trong giai đoạn hiện nay.",
    wordCount: 585,
    evidencesUsed: "Thông điệp Tổng Bí thư Tô Lâm về Kỷ nguyên vươn mình & Hình ảnh chiến sĩ trẻ CAND trong bão lũ Yagi và Đề án 06.",
    outline: [
      "Mở bài: Dẫn dắt lời dạy của Bác Hồ và liên hệ trực tiếp với bối cảnh đất nước bước vào kỷ nguyên vươn mình của dân tộc.",
      "Giải thích: Cắt nghĩa 'tương lai', 'lý tưởng cao cả', 'cuộc sống chính trị tích cực' - bản chất là sự gắn kết vận mệnh cá nhân với Tổ quốc.",
      "Bàn luận: Vì sao thanh niên phải có lý tưởng cách mạng? Ý nghĩa của bản lĩnh chính trị trong việc chèo lái vận mệnh quốc gia.",
      "Dẫn chứng thời sự: Tinh thần xung kích của tuổi trẻ CAND trong làm chủ công nghệ Đề án 06 và xả thân cứu hộ nhân dân mùa bão lũ Yagi.",
      "Phản đề: Phê phán bộ phận sống vô cảm, nhạt Đảng, khô Đoàn, sa đà vào lối sống hưởng thụ hoặc suy thoái nhận thức.",
      "Liên hệ bản thân: Bài học rèn luyện đức - tài, lời thề phụng sự Tổ quốc trong hàng ngũ Công an nhân dân."
    ],
    text: `Đất nước ta đang bước vào một thời khắc lịch sử trọng đại — kỷ nguyên mới, kỷ nguyên vươn mình của dân tộc Việt Nam dưới sự lãnh đạo của Đảng. Trong bối cảnh ấy, lời căn dặn thiêng liêng của Chủ tịch Hồ Chí Minh: “Tương lai thuộc về thanh niên... Là chủ của tương lai, thanh niên không thể không có lý tưởng cao cả. Vì vậy thanh niên phải có cuộc sống chính trị tích cực và cách mạng” lại một lần nữa vang lên như một mệnh lệnh từ trái tim, nhắc nhở thế hệ trẻ về sứ mệnh kiến tạo vận mệnh nước nhà.

Lời dạy của Bác mang giá trị chân lý vượt thời gian. “Tương lai” không đơn thuần là sự chuyển dịch của thời gian, mà là sự phát triển không ngừng của cách mạng và xã hội. Để thực sự trở thành người làm chủ tương lai ấy, thanh niên không thể sống vô định, mà phải sở hữu “lý tưởng cao cả” — đó là khát vọng độc lập dân tộc gắn liền với chủ nghĩa xã hội, là ý chí xây dựng một Việt Nam phồn vinh, hạnh phúc. “Cuộc sống chính trị tích cực” đòi hỏi người trẻ không được thờ ơ trước vận mệnh đất nước, mà phải có bản lĩnh chính trị vững vàng, chủ động tham gia vào đời sống xã hội và sự nghiệp bảo vệ Tổ quốc.

Thực tiễn lịch sử đã chứng minh, một thế hệ thanh niên giàu lý tưởng chính là rường cột vững chắc nhất của quốc gia. Ngày nay, khi đất nước đứng trước cơ hội bứt phá nhưng cũng đối mặt với muôn vàn thách thức an ninh phi truyền thống, lý tưởng cách mạng chính là ngọn hải đăng soi đường giúp thanh niên không bị chao đảo trước những luận điệu xuyên tạc hay cám dỗ vật chất tầm thường. Có lý tưởng, người trẻ mới sẵn sàng dấn thân vào những nơi gian khó nhất, biến tri thức và lòng nhiệt huyết thành của cải vật chất và sự bình yên cho xã hội.

Minh chứng sống động nhất cho tinh thần ấy trong giai đoạn 2024 - 2026 chính là hình ảnh hàng vạn cán bộ, chiến sĩ trẻ thuộc lực lượng Công an nhân dân và Quân đội đã dũng cảm dầm mình trong dòng lũ dữ bão số 3 (Yagi) để cứu từng người dân, hay những kỹ sư trẻ miệt mài ngày đêm làm chủ công nghệ dữ liệu số trong Đề án 06. Họ chính là hiện thân sinh động cho “cuộc sống chính trị tích cực” — cống hiến thầm lặng vì sự bình yên của nhân dân và vị thế quốc gia.

Đáng tiếc thay, trong xã hội hiện đại, vẫn còn một bộ phận thanh niên mang tư tưởng thực dụng, “nhạt Đảng, khô Đoàn, xa rời chính trị”. Họ say sưa trong thế giới ảo, chỉ biết mưu cầu lợi ích cá nhân hoặc dễ dàng dao động trước các thông tin xấu độc. Lối sống ấy không chỉ làm thui chột tương lai của chính họ mà còn là nguy cơ làm suy yếu sức mạnh nội sinh của dân tộc.

Là một người trẻ mang trong mình ước vọng thiêng liêng được cống hiến trọn đời trong hàng ngũ Công an nhân dân Việt Nam, tôi thấu hiểu sâu sắc rằng danh dự và trách nhiệm của người chiến sĩ công an bắt đầu từ việc tôi luyện bản lĩnh chính trị kiên định. Bản thân tôi tự hứa sẽ không ngừng học tập, làm chủ khoa học công nghệ, rèn luyện phẩm chất “cần, kiệm, liêm, chính” theo 6 điều Bác dạy, sẵn sàng đi bất cứ đâu, làm bất cứ việc gì khi Tổ quốc và nhân dân cần đến.`
  },
  {
    id: "sample-02",
    themeId: "theme-digital",
    title: "Ứng dụng trí tuệ nhân tạo (AI) an toàn và giữ vững tư duy độc lập",
    prompt: "Trình bày suy nghĩ của anh/chị về việc sử dụng trí tuệ nhân tạo (AI) như một công cụ hỗ trợ học tập và lao động mà không đánh mất tư duy độc lập và liêm chính học thuật (Bài viết tối thiểu 500 chữ).",
    wordCount: 560,
    evidencesUsed: "Hội thảo giáo dục Báo CAND cảnh báo liêm chính số & Cuộc chiến an ninh mạng A05.",
    outline: [
      "Mở bài: Đặt vấn đề về sự bùng nổ của AI và câu hỏi cốt lõi về bản lĩnh của con người.",
      "Giải thích: AI là công cụ khuếch đại năng suất, tư duy độc lập là năng lực phân tích phản biện riêng của con người.",
      "Bàn luận: Lợi ích của AI khi dùng đúng cách và tác hại khôn lường nếu phụ thuộc, chép bài máy móc.",
      "Dẫn chứng thời sự: Báo CAND cảnh báo nguy cơ AI bào mòn năng lực sáng tạo và vấn đề bảo mật dữ liệu.",
      "Phản đề: Không nên cấm đoán cực đoan mà cần xây dựng chuẩn mực liêm chính số.",
      "Bài học & Liên hệ CAND: Người chiến sĩ công an tương lai cần làm chủ công nghệ cao nhưng phải giữ vững nhãn quan chính trị sắc bén."
    ],
    text: `Chúng ta đang chứng kiến một bước ngoặt chưa từng có trong lịch sử nhân loại với sự bùng nổ của trí tuệ nhân tạo (AI). Từ việc tìm kiếm dữ liệu, viết mã lập trình cho đến phân tích chính sách, AI đang làm thay đổi căn bản cách con người học tập và lao động. Tuy nhiên, một công cụ có khả năng trả lời trong tích tắc không đồng nghĩa với việc người sử dụng đã thực sự thấu hiểu. Vấn đề cốt lõi đặt ra cho thế hệ trẻ hôm nay là: Làm thế nào để tận dụng sức mạnh vượt trội của AI mà không đánh mất đi tư duy độc lập và phẩm chất liêm chính của chính mình?

Trí tuệ nhân tạo, xét cho cùng, là một hệ thống thuật toán được huấn luyện trên khối dữ liệu khổng lồ do nhân loại tạo ra. Nó là một trợ thủ đắc lực giúp con người xử lý thông tin, gợi mở ý tưởng và tự động hóa những thao tác lặp lại. Ngược lại, tư duy độc lập là khả năng tự mình quan sát, hoài nghi khoa học, phân tích đa chiều và đưa ra phán đoán đạo đức dựa trên lương tri. Khi biết kết hợp hài hòa, AI sẽ trở thành bệ phóng nâng cao năng suất trí tuệ; nhưng nếu lạm dụng, con người sẽ tự biến mình thành nô lệ của thuật toán.

Việc phụ thuộc mù quáng vào AI trong học tập và nghiên cứu đang gióng lên hồi chuông cảnh báo về sự suy giảm năng lực tự học. Quá trình đọc sách, mày mò thử sai và tự mình đúc kết là con đường duy nhất để kiến thức biến thành năng lực thực thụ. Nếu chỉ đơn giản là sao chép câu trả lời từ máy móc rồi nộp bài, người học có thể đạt điểm số ảo nhưng hoàn toàn rỗng tuếch về tư duy phản biện. Đáng lo ngại hơn, các mô hình AI hoàn toàn có thể tạo ra thông tin sai lệch hoặc bị thao túng để phục vụ các mục đích xuyên tạc độc hại.

Báo Công an Nhân dân trong các diễn đàn giáo dục gần đây đã nhấn mạnh: Sự tiến bộ của công nghệ luôn phải đi liền với đạo đức và trách nhiệm giải trình. Khi sinh viên dùng AI làm hộ luận văn hay giả mạo dữ liệu nghiên cứu, đó không chỉ là vi phạm liêm chính học thuật mà còn là sự gian dối nhân cách. Ngược lại, những tấm gương biết khai thác AI để rà soát lỗ hổng an ninh mạng, phòng ngừa tội phạm công nghệ cao mới là cách tiếp cận thông minh, nhân văn và bản lĩnh.

Điều đó cho thấy, giải pháp đúng đắn không phải là cấm đoán máy móc, mà là xác lập những nguyên tắc sử dụng minh bạch. Mỗi cá nhân cần dùng AI như một người bạn phản biện, hỗ trợ kiểm tra lỗi, nhưng tuyệt đối phải tự mình chắp bút và chịu trách nhiệm cao nhất về sản phẩm của mình.

Đối với một người trẻ khao khát cống hiến trong lực lượng Công an nhân dân, việc làm chủ công nghệ số và AI là yêu cầu sống còn để đấu tranh hiệu quả với tội phạm công nghệ cao. Song hành với kiến thức kỹ thuật, tôi nhận thức sâu sắc rằng nhãn quan chính trị kiên định, tư duy phản biện sắc bén và đạo đức liêm chính cách mạng mới là phẩm chất tối thượng giúp người chiến sĩ công an giữ vững an ninh quốc gia trong kỷ nguyên số.`
  },
  {
    id: "sample-03",
    themeId: "theme-law",
    title: "Thượng tôn pháp luật: Nền tảng xây dựng xã hội kỷ cương và văn minh",
    prompt: "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) bàn về thông điệp 'Thượng tôn pháp luật là nét đẹp văn hóa và là trách nhiệm công dân' từ thực tiễn thực thi pháp luật hiện nay.",
    wordCount: 575,
    evidencesUsed: "Kiểm tra nồng độ cồn không có vùng cấm của CSGT & Di huấn 'Danh dự là điều thiêng liêng nhất'.",
    outline: [
      "Mở bài: Khẳng định vị trí tối thượng của pháp luật đối với sự ổn định và phát triển của quốc gia.",
      "Giải thích: Thượng tôn pháp luật là đặt pháp luật lên trên hết, tự giác phục tùng kỷ cương phép nước.",
      "Bàn luận: Vì sao thượng tôn pháp luật là thước đo văn minh? Pháp luật bảo vệ quyền con người và sự bình đẳng.",
      "Dẫn chứng thời sự: Chuyển biến căn bản từ việc kiên quyết xử lý nồng độ cồn 'không vùng cấm' và Luật Trật tự an toàn giao thông đường bộ.",
      "Phản đề: Lên án thói quen tùy tiện, suy nghĩ 'dùng tiền hoặc quan hệ để giải quyết' vi phạm.",
      "Liên hệ CAND: Lực lượng Công an là người cầm cân nảy mực bảo vệ công lý, phải gương mẫu kỷ luật hàng đầu."
    ],
    text: `Trong một quốc gia pháp quyền xã hội chủ nghĩa, pháp luật không chỉ là công cụ quản lý nhà nước mà còn là tấm lá chắn tối thượng bảo vệ quyền con người, giữ gìn trật tự xã hội và bảo đảm công bằng. Để một đất nước phát triển bền vững và phồn vinh, điều kiện tiên quyết là kỷ cương phép nước phải được duy trì nghiêm minh. Đúng như nhận định sâu sắc: “Thượng tôn pháp luật không chỉ là trách nhiệm công dân bắt buộc mà còn là nét đẹp văn hóa chuẩn mực của một xã hội văn minh”.

“Thượng tôn pháp luật” là thái độ tôn kính, đặt pháp luật ở vị trí tối cao trong mọi ứng xử đời sống. Đó là sự tự giác tuân thủ các quy tắc xử sự chung xuất phát từ lương tâm và ý thức công dân, chứ không phải thái độ đối phó khi thấy bóng dáng của lực lượng chức năng. Khi việc tuân thủ pháp luật trở thành một nét đẹp văn hóa, con người ứng xử với nhau bằng sự tôn trọng, lòng trắc ẩn và sự công bằng.

Một xã hội thiếu đi tinh thần thượng tôn pháp luật sẽ nhanh chóng rơi vào hỗn loạn, nơi kẻ mạnh ức hiếp kẻ yếu và các giá trị đạo đức bị đảo lộn. Pháp luật sinh ra không phải để tước đoạt tự do, mà là để bảo đảm tự do cho tất cả mọi người trong một khuôn khổ an toàn. Khi mỗi cá nhân tự giác dừng xe đúng vạch đèn đỏ, từ chối điều khiển phương tiện sau khi uống rượu bia, hay trung thực trong nghĩa vụ nộp thuế, họ đang trực tiếp góp từng viên gạch xây dựng nên một quốc gia thịnh vượng, an toàn.

Thực tiễn sinh động của đất nước trong những năm 2024 - 2026 đã chứng minh sức mạnh của tinh thần thượng tôn pháp luật qua cuộc chiến xử lý vi phạm nồng độ cồn và trật tự giao thông theo phương châm “không có vùng cấm, không có ngoại lệ”. Sự kiên quyết, công tâm của lực lượng Cảnh sát giao thông đã từng bước thay đổi căn bản nhận thức của toàn xã hội, cứu sống sinh mạng của hàng ngàn con người và kiến tạo văn hóa giao thông văn minh. Minh chứng ấy khẳng định rằng, khi pháp luật được thực thi công minh, nhân dân sẽ đặt trọn niềm tin vào công lý.

Tuy nhiên, nhìn thẳng vào thực tế, vẫn còn không ít biểu hiện coi thường pháp luật đáng lên án. Đó là thói quen tùy tiện vượt đèn đỏ, tâm lý “nhờ người quen can thiệp”, hay tinh vi hơn là những hành vi vi phạm pháp luật môi trường, lừa đảo công nghệ cao. Những tư tưởng lệch lạc ấy cần phải bị pháp luật trừng trị nghiêm khắc và bị xã hội đồng thanh lên án.

Ý thức sâu sắc rằng lực lượng Công an nhân dân là thanh bảo kiếm bảo vệ công lý và trật tự kỷ cương của Đảng và Nhà nước, bản thân tôi luôn nhắc nhở mình phải gương mẫu chấp hành pháp luật từ những việc nhỏ nhất mỗi ngày. Trong tương lai, khi đứng trong hàng ngũ Công an nhân dân, tôi nguyện giữ vững phẩm chất liêm chính, thượng tôn pháp luật để phục vụ Tổ quốc và bảo vệ cuộc sống bình yên của nhân dân.`
  },
  {
    id: "sample-04",
    themeId: "theme-humanity",
    title: "Sức mạnh của lòng nhân ái và tình đồng bào trong gian nan thử thách",
    prompt: "Từ thực tiễn tinh thần đại đoàn kết và sự sẻ chia của đồng bào cả nước hướng về vùng lũ lụt, thiên tai, hãy viết bài nghị luận (tối thiểu 500 chữ) bàn về sức mạnh của lòng nhân ái trong đời sống xã hội.",
    wordCount: 570,
    evidencesUsed: "Hơn 2.000 tỷ đồng cứu trợ bão lũ sao kê minh bạch & Tấm gương cán bộ CAND tại tâm lũ Làng Nủ.",
    outline: [
      "Mở bài: Nêu lên truyền thống 'thương người như thể thương thân' qua bão lũ thiên tai.",
      "Giải thích: Lòng nhân ái là tình yêu thương, thấu cảm và hành động chia ngọt sẻ bùi.",
      "Bàn luận: Lòng nhân ái gắn kết cộng đồng, biến đau thương thành sức mạnh kiên cường vượt qua hoạn nạn.",
      "Dẫn chứng thời sự: Sự chung lòng của cả nước sau siêu bão Yagi, hàng vạn chiến sĩ CAND dầm mình cứu dân, Mặt trận Tổ quốc sao kê minh bạch.",
      "Phản đề: Phê phán những hành vi trục lợi từ thiện, đưa tin giả câu view làm tổn thương đồng bào.",
      "Bài học & Liên hệ CAND: Lòng nhân ái của người chiến sĩ công an thể hiện ở tinh thần 'thức cho dân ngủ ngon, gác cho dân vui chơi'."
    ],
    text: `Lịch sử hàng ngàn năm dựng nước và giữ nước của dân tộc Việt Nam là bản trường ca bất tận về ý chí kiên cường và lòng nhân ái bao la. Trải qua bao thăng trầm của chiến tranh và thiên tai nghiệt ngã, ngọn lửa của tình đồng bào chưa bao giờ tắt, mà trái lại càng bùng cháy rực rỡ hơn trong những thời khắc gian nan nhất. Đúng như lời khẳng định sâu sắc: Sức mạnh vĩ đại nhất giúp dân tộc ta vượt qua mọi bão giông chính là lòng nhân ái và tinh thần đại đoàn kết toàn dân tộc.

Lòng nhân ái là sự thấu cảm trước nỗi đau của đồng loại, là tình thương yêu chân thành thôi thúc con người hành động để xoa dịu mất mát của người khác. Đó là truyền thống “lá lành đùm lá rách”, là sự hy sinh lợi ích cá nhân vì sự ấm no, an toàn của cộng đồng. Lòng nhân ái không phải là lời nói hoa mỹ đầu môi, mà được cụ thể hóa bằng những bát cơm sẻ nửa, những chuyến xe chở nặng ân tình hướng về vùng tâm bão.

Khi thiên tai ập đến, sự tàn phá của tự nhiên có thể cuốn trôi nhà cửa, tài sản, nhưng không thể khuất phục được tình người. Lòng nhân ái tạo nên một chất keo vô hình gắn kết triệu con tim thành một khối thống nhất, biến sự bất an thành niềm tin và sự hy vọng. Một xã hội giàu lòng trắc ẩn là một xã hội nhân văn, nơi không ai bị bỏ lại phía sau và cái thiện luôn chiến thắng sự vị kỷ, lạnh lùng.

Bức tranh thời sự năm 2024 - 2026 đã ghi tạc vào lịch sử những khoảnh khắc xúc động đến nghẹn ngào sau cơn siêu bão Yagi. Hình ảnh hàng ngàn chuyến xe tải chở nhu yếu phẩm từ mọi miền Tổ quốc xuyên đêm hướng về đồng bào miền Bắc, hàng trăm tỷ đồng ủng hộ minh bạch qua Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam là minh chứng sáng ngời cho sức mạnh đồng bào. Đặc biệt, hình ảnh các chiến sĩ Công an nhân dân, Quân đội dầm mình trong bùn lầy Làng Nủ, nhịn đói để nhường lương khô cho dân, cõng từng cụ già vượt qua sạt lở đã khắc họa sinh động nhất bản chất cao đẹp của lòng nhân ái cách mạng.

Thế nhưng, giữa những nghĩa cử cao đẹp, chúng ta cũng không khỏi đau lòng trước một số hiện tượng xấu xí: những kẻ lợi dụng thiên tai để bán hàng giá cắt cổ, những hành vi “làm màu” trục lợi từ thiện hay tung tin giả câu view gây hoang mang dư luận. Những hành vi ấy là sự xúc phạm nghiêm trọng đến tình cảm thiêng liêng của dân tộc và cần phải bị xử lý nghiêm minh trước pháp luật.

Thấu hiểu rằng phụng sự nhân dân là mục tiêu tối thượng của lực lượng Công an nhân dân, bản thân tôi luôn tự rèn luyện cho mình một trái tim biết rung động trước nỗi đau của cộng đồng. Người chiến sĩ công an không chỉ cần một cái đầu lạnh đầy bản lĩnh thép mà còn cần một trái tim nóng ấm tình người, sẵn sàng xả thân vì bình yên và hạnh phúc của nhân dân.`
  },
  {
    id: "sample-05",
    themeId: "theme-era",
    title: "Thanh niên '3 không' và đòi hỏi bức thiết của việc tự học, thích ứng",
    prompt: "Theo thống kê, cả nước có khoảng 1,6 triệu thanh niên thuộc diện '3 không' (không việc làm, không đi học, không đào tạo). Cùng lúc đó, làn sóng tự động hóa và AI đòi hỏi người lao động phải liên tục thích ứng. Viết bài nghị luận (tối thiểu 500 chữ) bàn về yêu cầu tự học của người trẻ.",
    wordCount: 580,
    evidencesUsed: "Số liệu 1,6 triệu thanh niên '3 không' & Phong trào 'Bình dân học vụ số' của Tổng Bí thư.",
    outline: [
      "Mở bài: Nêu thực trạng thanh niên '3 không' và khẳng định tự học, thích ứng là con đường sống còn của tuổi trẻ.",
      "Giải thích: 'Tự học' là chủ động tiếp thu tri thức ngoài trường lớp; 'thích ứng' là năng lực chuyển đổi linh hoạt theo yêu cầu thời đại số.",
      "Bàn luận: Vì sao tấm bằng đại học không còn là bảo chứng suốt đời? Tác hại của sự thụ động, ỷ lại.",
      "Dẫn chứng: Các tấm gương vượt khó học tập công nghệ, phong trào 'Bình dân học vụ số' của Tổng Bí thư Tô Lâm.",
      "Phản đề & CAND: Phê phán lối sống lười nhác; người chiến sĩ CAND phải không ngừng học tập, làm chủ khoa học kỹ thuật để phá án công nghệ cao."
    ],
    text: `Con số 1,6 triệu thanh niên Việt Nam không có việc làm, không đi học và không tham gia đào tạo (thanh niên “3 không”) trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư đang diễn ra mạnh mẽ thực sự là một tiếng chuông cảnh tỉnh sâu sắc. Trong một thế giới biến đổi từng ngày dưới tác động của trí tuệ nhân tạo và tự động hóa, sự thụ động không chỉ khiến cá nhân bị bỏ lại phía sau mà còn làm chậm bước tiến của toàn dân tộc. Đúng như chân lý đã được đúc kết: Tự học và năng lực thích ứng linh hoạt chính là chiếc phao cứu sinh và là bệ phóng vững chắc nhất để thanh niên làm chủ tương lai của chính mình.

Tự học không đơn thuần là việc ngồi đọc sách, mà là tinh thần chủ động tìm kiếm tri thức, rèn luyện kỹ năng và mở rộng tầm nhìn vượt ra ngoài khuôn khổ bằng cấp truyền thống. Thích ứng là khả năng tự làm mới bản thân, sẵn sàng từ bỏ những thói quen cũ đã lỗi thời để đón nhận cái mới, chuyển biến linh hoạt trước những đòi hỏi khắt khe của thị trường lao động. Khi người trẻ có tinh thần tự học, họ sẽ không bị hoang mang trước sự thay đổi của công nghệ mà biến thách thức thành cơ hội bứt phá.

Trước đây, một tấm bằng cử nhân có thể đảm bảo cho một vị trí công việc ổn định suốt đời. Nhưng ngày nay, tri thức nhân loại nhân đôi sau mỗi chu kỳ ngắn ngủi; những gì ta học hôm nay có thể trở nên lạc hậu vào ngày mai. Nếu thanh niên chỉ trông chờ vào sự sắp đặt của gia đình, lười nhác trong rèn luyện và tự thỏa mãn với những gì mình có, họ sẽ nhanh chóng trở thành gánh nặng cho xã hội. Ngược lại, người có năng lực tự học sẽ luôn giữ được ngọn lửa sáng tạo và khả năng cạnh tranh bền bỉ.

Phong trào “Bình dân học vụ số” do Tổng Bí thư Tô Lâm phát động những năm gần đây chính là minh chứng tiêu biểu cho tinh thần học tập suốt đời. Hàng vạn đoàn viên thanh niên và chiến sĩ công an cơ sở đã miệt mài tự học công nghệ mới rồi kiên nhẫn đi từng ngõ, gõ từng nhà hướng dẫn bà con làm chủ dịch vụ công trực tuyến. Tấm gương của những người trẻ ấy đã chứng minh rằng: khi tự học gắn liền với tinh thần phụng sự, tri thức sẽ được nhân lên gấp bội và tạo ra giá trị to lớn cho cộng đồng.

Thật đáng tiếc khi vẫn còn một bộ phận thanh niên đắm chìm trong thế giới ảo, tiêu tốn thời gian vào những trào lưu vô bổ trên mạng xã hội, ỷ lại vào cha mẹ và phó mặc tương lai cho số phận. Đó là biểu hiện của sự suy thoái ý chí, làm thui chột những năm tháng thanh xuân quý giá nhất của đời người.

Nhận thức rõ sứ mệnh của một người đang rèn luyện để bước vào hàng ngũ Công an nhân dân, tôi thấu hiểu rằng tội phạm ngày càng tinh vi, sử dụng công nghệ cao để chống phá. Nếu không tự học, người chiến sĩ sẽ bị tụt hậu và không thể hoàn thành nhiệm vụ bảo vệ công lý. Tôi quyết tâm sẽ không ngừng trau dồi nghiệp vụ, học hỏi ngoại ngữ và công nghệ số, biến việc học thành nhu cầu tự thân để phụng sự Tổ quốc hiệu quả nhất.`
  },
  {
    id: "sample-06",
    themeId: "theme-law",
    title: "Tinh gọn bộ máy hệ thống chính trị và sự hy sinh quyền lợi riêng vì đại cục",
    prompt: "Chủ trương tinh gọn bộ máy của Đảng tác động trực tiếp đến hàng vạn cán bộ; nhiều người tự nguyện nghỉ sớm hoặc luân chuyển công tác xa nhà. Viết bài nghị luận (tối thiểu 500 chữ) bàn về cách ứng xử của cá nhân khi lợi ích riêng và lợi ích chung không hoàn toàn trùng nhau.",
    wordCount: 565,
    evidencesUsed: "Chủ trương cách mạng tinh gọn tổ chức bộ máy & Tấm gương cán bộ CAND tăng cường về cơ sở xã.",
    outline: [
      "Mở bài: Dẫn dắt chủ trương cách mạng về tinh gọn bộ máy và vấn đề đặt lợi ích chung lên trên hết.",
      "Giải thích: Lợi ích cá nhân là nhu cầu chính đáng, nhưng lợi ích tập thể và quốc gia là tối thượng.",
      "Bàn luận: Vì sao tinh gọn bộ máy là tất yếu để đất nước cất cánh? Ý nghĩa của sự hy sinh quyền lợi riêng.",
      "Dẫn chứng: Các tấm gương cán bộ, chiến sĩ công an tình nguyện xung phong về cơ sở, biên giới nhận nhiệm vụ.",
      "Phản đề & CAND: Phê phán thói bè phái, cục bộ, níu kéo ghế quyền lực; người chiến sĩ CAND sẵn sàng chấp hành tuyệt đối mệnh lệnh của Đảng."
    ],
    text: `Đất nước ta đang bước vào một cuộc cách mạng mang tính lịch sử: Đổi mới, sắp xếp tổ chức bộ máy của toàn hệ thống chính trị theo hướng “Tinh - Gọn - Mạnh - Hiệu năng - Hiệu lực - Hiệu quả”. Chủ trương lớn ấy đòi hỏi sự sáp nhập đơn vị hành chính, giảm đầu mối và tinh giản biên chế, tác động trực tiếp đến vị trí công tác và quyền lợi của hàng vạn cán bộ. Trước bước ngoặt này, câu hỏi về cách ứng xử của mỗi cá nhân khi lợi ích riêng không hoàn toàn trùng khớp với lợi ích chung của tập thể trở thành một vấn đề thời sự sâu sắc, soi rọi bản lĩnh và đạo đức của người cán bộ cách mạng.

Lợi ích cá nhân là những mong muốn, quyền lợi chính đáng gắn liền với cuộc sống của mỗi con người. Tuy nhiên, lợi ích chung của tập thể, của quốc gia và dân tộc mới là nền tảng quyết định sự tồn vong và phát triển bền vững của tất cả mọi người. Khi lợi ích riêng mâu thuẫn với lợi ích chung, một người có đạo đức và lòng tự trọng sẽ biết đặt lợi ích chung lên trên hết, sẵn sàng chấp nhận thiệt thòi tạm thời của bản thân để tập thể được vững mạnh và đất nước cất cánh.

Một bộ máy cồng kềnh với quá nhiều tầng nấc trung gian không chỉ gây lãng phí hàng chục ngàn tỷ đồng ngân sách mỗi năm mà còn làm chậm trễ các quyết sách phát triển, gây phiền hà cho nhân dân. Tinh gọn bộ máy là đòi hỏi tất yếu khách quan để đưa đất nước bước vào kỷ nguyên mới. Sự hy sinh vị trí quen thuộc hay quyền lợi ngắn hạn của từng cán bộ chính là sự đóng góp cao quý nhất cho sự trường tồn và phồn vinh của chế độ.

Thực tiễn sinh động của lực lượng Công an nhân dân trong những năm qua đã nêu tấm gương sáng ngời về tinh thần vì đại cục. Khi Bộ Công an tiên phong đổi mới, tinh gọn tổ chức theo hướng “Bộ tinh, tỉnh toàn diện, huyện vững mạnh, xã bám cơ sở”, hàng vạn sĩ quan, chỉ huy đã sẵn sàng gác lại sự thuận tiện của đô thị, tình nguyện xung phong về nhận nhiệm vụ tại các xã vùng sâu, biên giới. Tinh thần “nơi nào Tổ quốc cần, Công an có mặt” của các anh chính là minh chứng hùng hồn cho phẩm chất của người cộng sản chân chính.

Trái ngược với những tấm gương cao đẹp ấy, một số cá nhân vẫn mang nặng tư tưởng cục bộ, níu kéo vị trí, chạy chọt để giữ ghế hoặc tỏ thái độ bất mãn khi quyền lợi riêng bị ảnh hưởng. Lối suy nghĩ hẹp hòi, vị kỷ ấy là rào cản làm xói mòn kỷ cương và làm suy giảm niềm tin của nhân dân đối với Đảng.

Là một người trẻ mang trong mình lý tưởng phụng sự Tổ quốc trong lực lượng Công an nhân dân, tôi thấm nhuần sâu sắc rằng danh dự của người chiến sĩ gắn liền với sự cống hiến quên mình. Bản thân tôi luôn tự hứa sẽ tuyệt đối phục tùng sự phân công của tổ chức, sẵn sàng nhận và hoàn thành xuất sắc mọi nhiệm vụ dù ở bất cứ nơi đâu, lấy sự bình yên của nhân dân làm niềm vui và hạnh phúc cao nhất của đời mình.`
  }
];

// 5. NGÂN HÀNG ĐỀ THI TỰ LUẬN TỰ LUYỆN
window.ESSAY_PRACTICE_LIST = [
  {
    id: "p-01",
    themeId: "theme-era",
    title: "Đề 01: Thanh niên '3 không' và yêu cầu tự học, thích ứng nghề nghiệp",
    prompt: "Theo số liệu thống kê lao động, quý III năm 2026 cả nước có khoảng 1,6 triệu thanh niên từ 15 đến 24 tuổi không có việc làm, không đi học và không tham gia đào tạo (thường gọi là thanh niên “3 không”), chiếm 11,2% tổng số thanh niên. Tỷ lệ thất nghiệp của thanh niên luôn cao gấp nhiều lần tỷ lệ thất nghiệp chung. Cùng lúc đó, làn sóng tự động hóa và AI đang đặt ra yêu cầu người lao động phải không ngừng thích ứng.",
    task: "Anh/chị hãy viết một bài nghị luận (tối thiểu 500 chữ) bàn về yêu cầu tự học, tự nâng cao năng lực để làm chủ tương lai của người trẻ trong bối cảnh hiện nay.",
    minWords: 500,
    outline: [
      "1. Mở bài: Nêu thực trạng thanh niên '3 không' và khẳng định tự học, thích ứng là con đường sống còn của tuổi trẻ.",
      "2. Giải thích: 'Tự học' là chủ động tiếp thu tri thức ngoài trường lớp; 'thích ứng' là năng lực chuyển đổi linh hoạt theo yêu cầu thời đại số.",
      "3. Bàn luận: Vì sao tấm bằng đại học không còn là bảo chứng suốt đời? Tác hại của sự thụ động, ỷ lại.",
      "4. Dẫn chứng: Các tấm gương vượt khó học tập công nghệ, phong trào 'Bình dân học vụ số' của Tổng Bí thư Tô Lâm.",
      "5. Phản đề & CAND: Phê phán lối sống lười nhác; người chiến sĩ CAND phải không ngừng học tập, làm chủ khoa học kỹ thuật để phá án công nghệ cao."
    ]
  },
  {
    id: "p-02",
    themeId: "theme-era",
    title: "Đề 02: Mục tiêu phát triển đất nước 2030 - 2045 và khát vọng của từng người dân",
    prompt: "Đại hội XIV của Đảng xác định mục tiêu đến năm 2030 Việt Nam trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao; đến năm 2045 trở thành nước phát triển, thu nhập cao. Có ý kiến cho rằng đó là việc vĩ mô của Nhà nước; lại có ý kiến cho rằng khát vọng dân tộc chỉ thành hiện thực khi biến thành hành động cụ thể của từng người dân.",
    task: "Anh/chị hãy viết bài nghị luận (tối thiểu 500 chữ) trình bày quan điểm của mình về mối quan hệ giữa khát vọng đất nước và trách nhiệm cá nhân.",
    minWords: 500,
    outline: [
      "1. Mở bài: Dẫn dắt mục tiêu 2030 - 2045 và khẳng định sức mạnh đất nước bắt nguồn từ từng công dân.",
      "2. Giải thích: Khát vọng dân tộc là đích đến chung; hành động cá nhân là viên gạch xây dựng nền móng.",
      "3. Bàn luận: Phân tích vì sao nếu cá nhân đứng ngoài cuộc thì chính sách vĩ mô không thể thành công.",
      "4. Dẫn chứng: Đề án 06 thành công nhờ từng cán bộ công an 'đi từng ngõ' và từng người dân cài đặt VNeID.",
      "5. Phản đề & CAND: Phê phán tâm lý ỷ lại, trông chờ; liên hệ lời thề cống hiến của người chiến sĩ CAND trong kỷ nguyên mới."
    ]
  },
  {
    id: "p-03",
    themeId: "theme-law",
    title: "Đề 03: Tinh gọn bộ máy hành chính và sự hy sinh lợi ích cá nhân vì tập thể",
    prompt: "Chủ trương sắp xếp, tinh gọn tổ chức bộ máy của hệ thống chính trị hoạt động 'Hiệu lực - Hiệu quả' đang được đẩy mạnh quyết liệt. Việc sáp nhập đơn vị hành chính, giảm đầu mối trực tiếp tác động đến vị trí, công việc của hàng vạn cán bộ công chức; nhiều người sẵn sàng nghỉ hưu sớm hoặc luân chuyển công tác xa nhà để tạo thuận lợi cho việc chung.",
    task: "Viết bài văn nghị luận (tối thiểu 500 chữ) bàn về cách ứng xử đúng đắn của cá nhân khi lợi ích riêng và lợi ích chung không hoàn toàn trùng nhau.",
    minWords: 500,
    outline: [
      "1. Mở bài: Dẫn dắt chủ trương cách mạng về tinh gọn bộ máy và vấn đề đặt lợi ích chung lên trên hết.",
      "2. Giải thích: Lợi ích cá nhân là nhu cầu chính đáng, nhưng lợi ích tập thể và quốc gia là tối thượng.",
      "3. Bàn luận: Vì sao tinh gọn bộ máy là tất yếu để đất nước cất cánh? Ý nghĩa của sự hy sinh quyền lợi riêng.",
      "4. Dẫn chứng: Các tấm gương cán bộ, chiến sĩ công an tình nguyện xung phong về cơ sở, biên giới nhận nhiệm vụ.",
      "5. Phản đề & CAND: Phê phán thói bè phái, cục bộ, níu kéo ghế quyền lực; người chiến sĩ CAND sẵn sàng chấp hành tuyệt đối mệnh lệnh của Đảng."
    ]
  },
  {
    id: "p-04",
    themeId: "theme-digital",
    title: "Đề 04: Nhận diện cạm bẫy lừa đảo và tự bảo vệ mình trên không gian mạng",
    prompt: "Thời gian gần đây, tội phạm sử dụng công nghệ cao liên tục giăng bẫy lừa đảo: thao túng tâm lý giả mạo công an, viện kiểm sát, đe dọa bắt cóc online, lừa đảo việc làm ảo khiến nhiều người trẻ sập bẫy và thiệt hại hàng tỷ đồng.",
    task: "Viết bài nghị luận (tối thiểu 500 chữ) bàn về tinh thần cảnh giác, trách nhiệm tự bảo vệ mình và bảo vệ người thân trong môi trường số.",
    minWords: 500,
    outline: [
      "1. Mở bài: Nêu thực trạng lừa đảo trực tuyến tinh vi và nhấn mạnh tầm quan trọng của kỹ năng số an toàn.",
      "2. Giải thích: Bản chất của lừa đảo công nghệ cao là đánh vào lòng tham, nỗi sợ hãi và sự thiếu hiểu biết pháp luật.",
      "3. Bàn luận: Phân tích các chiêu trò thao túng tâm lý; vì sao biết dùng điện thoại chưa chắc đã biết tự bảo vệ.",
      "4. Dẫn chứng: Cục A05 triệt phá các tổ chức tội phạm xuyên biên giới; các khuyến cáo '4 không - 2 phải'.",
      "5. Phản đề & CAND: Không đổ lỗi nạn nhân; người chiến sĩ công an tích cực tuyên truyền pháp luật và bảo vệ bình yên không gian mạng."
    ]
  }
];
