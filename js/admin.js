/* ==========================================
   UCMAS ADMIN PANEL — JavaScript
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========== DEFAULT CONFIG ==========
  const DEFAULT_CONFIG = {
    colors: {
      navy: '#001F86',
      blue: '#2383E0',
      red: '#D40F00',
      green: '#006634',
      yellow: '#FFEF62',
      cream: '#FDFCE8'
    },
    heroElements: [
      { type: 'badge', content: '🏕️ Hè 2026 - Dành cho trẻ 6-15 tuổi', color: '', fontSize: '' },
      { type: 'text', content: 'Trại Hè Bán Trú', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', style: 'uppercase' },
      { type: 'text', content: 'Mùa Hè Trải Nghiệm', color: '#FFFFFF', fontSize: 'clamp(2rem, 5vw, 3.5rem)', style: 'gradient' },
      { type: 'text', content: 'UCMAS 2026', color: '#FFEF62', fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', style: 'bold' },
      { type: 'tagline', content: 'Tăng Thể Chất | Bật Tư Duy', color: '', fontSize: '' },
      { type: 'text', content: 'Chương trình bán trú hè đặc biệt giúp con phát triển toàn diện: trí tuệ, thể chất, kỹ năng sống và sáng tạo trong môi trường an toàn, vui tươi.', color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', style: 'desc' },
      { type: 'cta', content: '🎯 Đăng Ký Ngay — Ưu Đãi Sớm', color: '', fontSize: '', style: 'primary' },
      { type: 'cta', content: 'Khám phá chương trình →', color: '', fontSize: '', style: 'outline' },
      { type: 'image', content: 'https://content.pancake.vn/1/s542x959/fwebp80/8b/48/0a/f9/09b588e7e351b0d36aeae54475168b42fff47ceb7d9073d1c118bba3-w:1730-h:3058-l:1778157-t:image/png.png', color: '', fontSize: '' },
      { type: 'image', content: 'https://content.pancake.vn/1/s541x1153/fwebp80/6d/ce/60/ec/0af44d3190d35b9ce4510cd455af267926ceb2b89fab75e3581ab0fd-w:2124-h:4523-l:958262-t:image/png.png', color: '', fontSize: '' },
      { type: 'image', content: 'https://content.pancake.vn/1/s518x966/fwebp80/51/74/44/77/c0d6b760610938c138197fe09d763c8f70b7d679e3c57ea33f5987ce-w:1648-h:3071-l:1533243-t:image/png.png', color: '', fontSize: '' }
    ],
    countdown: {
      targetDate: '2026-06-02T08:00',
      spots: 38,
      title: 'Đếm Ngược Khai Giảng'
    },
    quickBenefits: [
      { icon: '🎓', text: 'Giáo viên chuyên nghiệp' },
      { icon: '🛡️', text: 'Bảo hiểm toàn phần' },
      { icon: '🍱', text: 'Bữa ăn dinh dưỡng' },
      { icon: '🚌', text: 'Xe đưa đón tận nơi' }
    ],
    centers: [
      { value: 'q1', label: 'UCMAS Quận 1' },
      { value: 'q3', label: 'UCMAS Quận 3' },
      { value: 'q7', label: 'UCMAS Quận 7' },
      { value: 'td', label: 'UCMAS Thủ Đức' },
      { value: 'bt', label: 'UCMAS Bình Thạnh' },
      { value: 'gv', label: 'UCMAS Gò Vấp' },
      { value: 'bc', label: 'UCMAS Biên Hòa' }
    ],
    formFields: [
      { id: 'parentName', label: 'Họ tên phụ huynh', type: 'text', placeholder: 'Nhập họ tên phụ huynh', required: true, options: '' },
      { id: 'phone', label: 'Số điện thoại', type: 'tel', placeholder: 'Nhập số điện thoại', required: true, options: '' },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'Nhập email (không bắt buộc)', required: false, options: '' },
      { id: 'center', label: 'Chọn cơ sở', type: 'centers', placeholder: '-- Chọn cơ sở gần nhất --', required: true, options: '' },
      { id: 'childAge', label: 'Độ tuổi của con', type: 'select', placeholder: '-- Chọn độ tuổi --', required: false, options: '6 - 8 tuổi\n9 - 11 tuổi\n12 - 15 tuổi' },
      { id: 'message', label: 'Lời nhắn', type: 'textarea', placeholder: 'Ghi chú thêm (không bắt buộc)', required: false, options: '' }
    ],
    formSubmitText: '🚀 Đăng Ký Ngay',
    formNoteText: '* Chúng tôi sẽ liên hệ xác nhận trong 24h',
    activitiesSection: {
      tag: '🎪 Chương trình đặc sắc',
      title: 'Hoạt Động Trải Nghiệm',
      desc: 'Chương trình được thiết kế khoa học, kết hợp giữa học tập và vui chơi, giúp trẻ phát triển toàn diện'
    },
    activities: [
      {
        color: 'red',
        tag: 'Thể thao',
        title: 'Bóng Đá & Thể Thao',
        desc: 'Rèn luyện thể lực, tinh thần đồng đội qua các trò chơi vận động, bóng đá, bơi lội.',
        time: '⏰ Sáng T2-T6',
        capacity: '👥 15 học viên/lớp',
        image: 'https://content.pancake.vn/1/s564x564/fwebp80/2b/66/94/50/29ae106d62844551b6949f1095457db348f80a1f05d8be883e4a11de-w:2000-h:2000-l:6941310-t:image/png.png'
      },
      {
        color: 'green',
        tag: 'Tư duy',
        title: 'STEM & Robotics',
        desc: 'Khám phá khoa học, công nghệ, lập trình robot, thí nghiệm vui thú vị.',
        time: '⏰ Chiều T2-T6',
        capacity: '👥 12 học viên/lớp',
        image: 'https://content.pancake.vn/1/s564x564/fwebp80/6e/02/bd/c8/44d1e7015d49e77e1964d74ea9356daa850f4e05db37f0672758d8b7-w:2000-h:2000-l:2700762-t:image/png.png'
      },
      {
        color: 'blue',
        tag: 'Sáng tạo',
        title: 'Nghệ Thuật & Âm Nhạc',
        desc: 'Vẽ tranh, handmade, nhảy hiện đại, kịch sáng tạo, phát triển năng khiếu.',
        time: '⏰ Sáng T3-T5',
        capacity: '👥 15 học viên/lớp',
        image: 'https://content.pancake.vn/1/s564x564/fwebp80/b2/00/0e/a1/9f72e7ac68a4fbba2aac7a199e873cb931670220cc9466d6da5ceb21-w:2000-h:2000-l:5263718-t:image/png.png'
      },
      {
        color: 'orange',
        tag: 'Kỹ năng',
        title: 'Kỹ Năng Sống',
        desc: 'Giao tiếp, làm việc nhóm, tự lập, ứng xử văn minh, tự tin trước đám đông.',
        time: '⏰ Chiều T3-T5',
        capacity: '👥 15 học viên/lớp',
        image: 'https://content.pancake.vn/1/s564x564/fwebp80/c2/dc/74/42/f881bc21f9bc22a6b88fd51be24b7ab7ba9281ce57cda4f9d057e78e-w:2000-h:2000-l:3345288-t:image/png.png'
      },
      {
        color: 'purple',
        tag: 'Thể thao',
        title: 'Bơi Lội & Dã Ngoại',
        desc: 'Học bơi an toàn, chuyến dã ngoại ngoài trời, trải nghiệm thiên nhiên tuyệt vời.',
        time: '⏰ Thứ 7 hàng tuần',
        capacity: '👥 10 học viên/nhóm',
        image: 'https://content.pancake.vn/1/s564x564/fwebp80/e7/db/0c/22/79c7714748250bcc6ecbe27afd307febf8ce01074b77c78e6c983a4e-w:2000-h:2000-l:4309695-t:image/png.png'
      },
      {
        color: 'teal',
        tag: 'Trí tuệ',
        title: 'Toán Tư Duy UCMAS',
        desc: 'Phương pháp bàn tính UCMAS giúp trẻ tính nhanh, tư duy logic, tập trung cao.',
        time: '⏰ Sáng T2-T6',
        capacity: '👥 12 học viên/lớp',
        image: 'https://content.pancake.vn/1/s562x562/fwebp80/1f/08/9b/c9/bfaec6d41e2564f5f2b19cdb9546f9bb3a8f09aba2c4687c03d6fb8a-w:2000-h:2000-l:3274505-t:image/png.png'
      }
    ],
    scheduleSection: {
      title: 'Một Ngày Tại Trại Hè',
      desc: 'Chương trình được sắp xếp khoa học, xen kẽ giữa học tập, vui chơi và nghỉ ngơi'
    },
    schedule: [
      { time: '07:30 - 08:00', icon: '🌅', title: 'Đón trẻ & Điểm danh', desc: 'Phụ huynh gửi bé, kiểm tra sức khỏe và hoạt động khởi động buổi sáng', color: 'green' },
      { time: '08:00 - 09:30', icon: '🧠', title: 'Toán Tư Duy UCMAS', desc: 'Luyện tập bàn tính, phát triển tư duy logic và khả năng tập trung', color: 'blue' },
      { time: '09:30 - 10:00', icon: '🍎', title: 'Giải lao & Ăn nhẹ', desc: 'Thời gian nghỉ ngơi, bổ sung năng lượng với đồ ăn nhẹ dinh dưỡng', color: 'yellow' },
      { time: '10:00 - 11:30', icon: '⚽', title: 'Thể thao & Vận động', desc: 'Bóng đá, bơi lội, trò chơi vận động ngoài trời đầy thú vị', color: 'red' },
      { time: '11:30 - 13:30', icon: '🍱', title: 'Ăn trưa & Nghỉ ngơi', desc: 'Bữa trưa dinh dưỡng và thời gian nghỉ trưa phục hồi năng lượng', color: 'green' },
      { time: '13:30 - 15:00', icon: '🎨', title: 'Sáng tạo & Nghệ thuật', desc: 'Vẽ tranh, handmade, STEM, coding, kịch nghệ và âm nhạc', color: 'purple' },
      { time: '15:00 - 16:00', icon: '🤝', title: 'Kỹ năng sống', desc: 'Hoạt động teamwork, giao tiếp, tự lập và ứng xử tình huống', color: 'orange' },
      { time: '16:00 - 17:00', icon: '🏠', title: 'Trả trẻ', desc: 'Tổng kết ngày, phụ huynh đón bé. Báo cáo hoạt động qua app', color: 'blue' }
    ],
    benefitsTitle: 'Tại Sao Chọn UCMAS?',
    benefits: [
      { icon: '👨‍🏫', title: 'Đội Ngũ Giáo Viên', desc: '100% giáo viên được đào tạo chuyên sâu, giàu kinh nghiệm, yêu trẻ và tận tâm trong từng hoạt động.' },
      { icon: '🏫', title: 'Cơ Sở Vật Chất', desc: 'Trường đạt chuẩn, phòng học máy lạnh, sân thể thao rộng rãi, hồ bơi sạch đạt tiêu chuẩn.' },
      { icon: '🍽️', title: 'Dinh Dưỡng Đầy Đủ', desc: '3 bữa ăn/ngày do chuyên gia dinh dưỡng thiết kế, đảm bảo an toàn vệ sinh thực phẩm.' },
      { icon: '🛡️', title: 'An Toàn Tuyệt Đối', desc: 'Bảo hiểm 100%, camera 24/7, y tá trực thường trực, quy trình an toàn nghiêm ngặt.' }
    ],
    gallery: [
      { url: 'https://content.pancake.vn/1/s1005x671/fwebp80/af/72/e5/7f/54948a88203bbdb0bcc2fff4a31f281ec60e80d3f9e8c08e18e0bb67-w:4096-h:2731-l:7981086-t:image/jpeg.jpg', wide: true },
      { url: 'https://content.pancake.vn/1/s917x612/fwebp80/4b/cf/6f/a2/6540d7486fbb5ad1769fa2cfe8ab240f74bf8f4e5d0807cd8fdd9516-w:2048-h:1365-l:713306-t:image/jpeg.jpg', wide: false },
      { url: 'https://content.pancake.vn/1/fwebp80/41/c7/1f/12/c76753c0c244594482521b129573c62162b3f9baed82f46899c30b45-w:600-h:400-l:131666-t:image/jpeg.jpg', wide: false },
      { url: 'https://content.pancake.vn/1/s825x550/fwebp80/df/a0/a1/be/b04a15e83e8667660ca4b6375a6c7716ecbd78577413c5d36810e15a-w:1944-h:1296-l:287204-t:image/jpeg.jpg', wide: false },
      { url: 'https://content.pancake.vn/1/s825x550/fwebp80/50/0e/b1/d4/a8510ac454861a29857b3fdf63aa2b1e6ea5eb34eea4cd71ddfe9929-w:2736-h:1824-l:1402589-t:image/jpeg.JPG', wide: false },
      { url: 'https://content.pancake.vn/1/s1109x626/fwebp80/0a/a9/fe/15/b0204b902d27c149c8b0efbddfbd70f7a765451d82ea34f06c843481-w:1366-h:770-l:174466-t:image/webp.webp', wide: true },
      { url: 'https://content.pancake.vn/1/s825x551/fwebp80/d9/e4/15/29/78b5429534543c5373905d4139ba2092e0d440148e3c8c9d5918e8a1-w:4096-h:2731-l:4054787-t:image/jpeg.jpg', wide: false },
      { url: 'https://content.pancake.vn/1/s978x551/fwebp80/4c/98/6d/72/24faab754afcc7e7c736777cdd59c3ee173048ef264afbe67afa46cc-w:2048-h:1152-l:1420286-t:image/jpeg.jpg', wide: false }
    ],
    pricing: [
      {
        headerColor: 'blue',
        badge: 'Phổ biến',
        badgeHot: false,
        name: 'Gói 2 Tuần',
        duration: '10 buổi học',
        oldPrice: '3.500.000đ',
        newPrice: '2.990.000',
        features: ['✅ Toán tư duy UCMAS', '✅ Thể thao & bơi lội', '✅ Nghệ thuật sáng tạo', '✅ Kỹ năng sống', '✅ Bữa ăn dinh dưỡng', '✅ Bảo hiểm 100%'],
        featured: false
      },
      {
        headerColor: 'gradient',
        badge: '🔥 Tiết kiệm nhất',
        badgeHot: true,
        name: 'Gói Toàn Khóa',
        duration: 'Trọn hè — 8 tuần',
        oldPrice: '12.000.000đ',
        newPrice: '8.990.000',
        features: ['✅ Tất cả quyền lợi Gói 2 tuần', '✅ Dã ngoại cuối tuần (4 lần)', '✅ Bộ đồng phục trại hè', '✅ Album ảnh kỷ niệm', '✅ Chứng nhận hoàn thành', '✅ Xe đưa đón miễn phí', '✅ Quà tặng kết khóa'],
        featured: true
      },
      {
        headerColor: 'green',
        badge: 'Linh hoạt',
        badgeHot: false,
        name: 'Gói 4 Tuần',
        duration: '20 buổi học',
        oldPrice: '6.500.000đ',
        newPrice: '5.490.000',
        features: ['✅ Tất cả quyền lợi Gói 2 tuần', '✅ Dã ngoại cuối tuần (2 lần)', '✅ Bộ đồng phục trại hè', '✅ Album ảnh kỷ niệm', '✅ Chứng nhận hoàn thành'],
        featured: false
      }
    ],
    pricingNote: '💡 Giảm thêm 10% khi đăng ký nhóm từ 3 bé trở lên — Liên hệ Hotline: 1900 636 225',
    testimonial: {
      avatar: 'https://content.pancake.vn/1/s521x521/fwebp80/0e/6a/22/2a/910a8e8a9b685d9ca01bef5a839dd4c1a152127b9aa29b8087e1ed1b-w:1440-h:1440-l:128446-t:image/png.png',
      quote: 'Con tôi sau 2 mùa hè tại UCMAS đã tự tin hơn rất nhiều, biết tự lập, tính toán nhanh và yêu thích vận động. Tôi hoàn toàn yên tâm khi gửi con ở đây.',
      cite: '— Phụ huynh bé Minh Khang, 8 tuổi, UCMAS Q.3'
    },
    footer: {
      ctaTitle: 'Sẵn sàng cho một mùa hè đáng nhớ? 🌟',
      ctaDesc: 'Đăng ký ngay hôm nay để nhận ưu đãi sớm và giữ chỗ cho con!',
      company: 'UCMAS Việt Nam',
      about: 'Chương trình phát triển trí tuệ hàng đầu cho trẻ em, hiện diện tại hơn 80 quốc gia trên thế giới.',
      hotline: '1900 636 225',
      email: 'info@ucmas.vn',
      website: 'ucmas.vn',
      facebook: '#',
      youtube: '#',
      zalo: '#',
      tiktok: '#'
    }
  };

  // ========== STATE ==========
  let config = loadConfig();

  function loadConfig() {
    try {
      const saved = localStorage.getItem('ucmas_landing_config');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading config', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  }

  function saveConfig() {
    localStorage.setItem('ucmas_landing_config', JSON.stringify(config));
    showToast('✅', 'Đã lưu thành công! Refresh landing page để xem.');
  }

  // ========== NAVIGATION ==========
  const navItems = document.querySelectorAll('.nav-item');
  const panels = document.querySelectorAll('.panel');
  const titleEl = document.getElementById('currentSectionTitle');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const section = item.dataset.section;

      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      panels.forEach(p => p.style.display = 'none');
      const target = document.getElementById('section-' + section);
      if (target) {
        target.style.display = 'block';
        target.style.animation = 'none';
        target.offsetHeight; // trigger reflow
        target.style.animation = 'fadeIn 0.3s ease';
      }

      titleEl.textContent = item.textContent.trim();

      // Close sidebar on mobile
      document.getElementById('sidebar').classList.remove('open');
    });
  });

  // Sidebar toggle
  document.getElementById('sidebarToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // ========== POPULATE FORMS FROM CONFIG ==========
  function populateForms() {
    // Colors
    Object.keys(config.colors).forEach(key => {
      const colorInput = document.getElementById('color-' + key);
      const hexInput = document.getElementById('color-' + key + '-hex');
      if (colorInput && hexInput) {
        colorInput.value = config.colors[key];
        hexInput.value = config.colors[key];
      }
    });

    // Hero Elements — migrate old format if needed
    if (config.hero && !config.heroElements) {
      config.heroElements = [
        { type: 'badge', content: config.hero.badge || '', color: '', fontSize: '' },
        { type: 'text', content: config.hero.line1 || '', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', style: 'uppercase' },
        { type: 'text', content: config.hero.line2 || '', color: '#FFFFFF', fontSize: 'clamp(2rem, 5vw, 3.5rem)', style: 'gradient' },
        { type: 'text', content: config.hero.line3 || '', color: '#FFEF62', fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', style: 'bold' },
        { type: 'tagline', content: (config.hero.taglineRed || '') + ' | ' + (config.hero.taglineGreen || ''), color: '', fontSize: '' },
        { type: 'text', content: config.hero.desc || '', color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', style: 'desc' },
        { type: 'cta', content: config.hero.cta1 || '', color: '', fontSize: '', style: 'primary' },
        { type: 'cta', content: config.hero.cta2 || '', color: '', fontSize: '', style: 'outline' },
        ...((config.hero.images || []).map(url => ({ type: 'image', content: url, color: '', fontSize: '' })))
      ];
      delete config.hero;
    }

    // Countdown
    setVal('countdown-date', config.countdown.targetDate);
    setVal('countdown-spots', config.countdown.spots);
    setVal('countdown-title', config.countdown.title);

    // Centers
    setVal('centers-list', (config.centers || []).map(c => c.value + '|' + c.label).join('\n'));

    // Activities section
    setVal('activities-title', config.activitiesSection?.title || '');
    setVal('activities-tag', config.activitiesSection?.tag || '');
    setVal('activities-desc', config.activitiesSection?.desc || '');

    // Schedule section
    setVal('schedule-title', config.scheduleSection?.title || '');
    setVal('schedule-desc', config.scheduleSection?.desc || '');

    // Benefits
    setVal('benefits-title', config.benefitsTitle || '');

    // Pricing
    setVal('pricing-note', config.pricingNote || '');

    // Testimonial
    setVal('testimonial-avatar', config.testimonial?.avatar || '');
    setVal('testimonial-quote', config.testimonial?.quote || '');
    setVal('testimonial-cite', config.testimonial?.cite || '');

    // Footer
    setVal('footer-cta-title', config.footer?.ctaTitle || '');
    setVal('footer-cta-desc', config.footer?.ctaDesc || '');
    setVal('footer-company', config.footer?.company || '');
    setVal('footer-about', config.footer?.about || '');
    setVal('footer-hotline', config.footer?.hotline || '');
    setVal('footer-email', config.footer?.email || '');
    setVal('footer-website', config.footer?.website || '');
    setVal('footer-fb', config.footer?.facebook || '');
    setVal('footer-yt', config.footer?.youtube || '');
    setVal('footer-zalo', config.footer?.zalo || '');
    setVal('footer-tiktok', config.footer?.tiktok || '');

    // Form fields
    setVal('form-submit-text', config.formSubmitText || '🚀 Đăng Ký Ngay');
    setVal('form-note-text', config.formNoteText || '* Chúng tôi sẽ liên hệ xác nhận trong 24h');

    // Render dynamic lists
    renderHeroElements();
    renderQuickBenefits();
    renderFormFields();
    renderActivities();
    renderSchedule();
    renderBenefits();
    renderGallery();
    renderPricing();
  }

  function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val ?? '';
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value : '';
  }

  // ========== COLLECT FORM DATA ==========
  function collectFormData() {
    // Colors
    config.colors = {
      navy: getVal('color-navy-hex'),
      blue: getVal('color-blue-hex'),
      red: getVal('color-red-hex'),
      green: getVal('color-green-hex'),
      yellow: getVal('color-yellow-hex'),
      cream: getVal('color-cream-hex')
    };

    // Hero Elements
    config.heroElements = collectList('heroElementsEditor', '.hero-element-card', (card) => ({
      type: card.querySelector('[data-field="type"]').value,
      content: card.querySelector('[data-field="content"]').value,
      color: card.querySelector('[data-field="color"]') ? card.querySelector('[data-field="color"]').value : '',
      fontSize: card.querySelector('[data-field="fontSize"]') ? card.querySelector('[data-field="fontSize"]').value : '',
      style: card.querySelector('[data-field="style"]') ? card.querySelector('[data-field="style"]').value : ''
    }));

    // Countdown
    config.countdown = {
      targetDate: getVal('countdown-date'),
      spots: parseInt(getVal('countdown-spots')) || 0,
      title: getVal('countdown-title')
    };

    // Centers
    config.centers = getVal('centers-list').split('\n').map(line => {
      const [value, label] = line.split('|').map(s => s.trim());
      return { value: value || '', label: label || '' };
    }).filter(c => c.value && c.label);

    // Quick benefits
    config.quickBenefits = collectList('quickBenefitsEditor', '.editable-card', (card) => ({
      icon: card.querySelector('[data-field="icon"]').value,
      text: card.querySelector('[data-field="text"]').value
    }));

    // Form fields
    config.formFields = collectList('formFieldsEditor', '.editable-card', (card) => ({
      id: card.querySelector('[data-field="id"]').value,
      label: card.querySelector('[data-field="label"]').value,
      type: card.querySelector('[data-field="type"]').value,
      placeholder: card.querySelector('[data-field="placeholder"]').value,
      required: card.querySelector('[data-field="required"]').checked,
      options: card.querySelector('[data-field="options"]').value
    }));
    config.formSubmitText = getVal('form-submit-text');
    config.formNoteText = getVal('form-note-text');

    // Activities section
    config.activitiesSection = {
      tag: getVal('activities-tag'),
      title: getVal('activities-title'),
      desc: getVal('activities-desc')
    };

    // Activities
    config.activities = collectList('activitiesEditor', '.editable-card', (card) => ({
      color: card.querySelector('[data-field="color"]').value,
      tag: card.querySelector('[data-field="tag"]').value,
      title: card.querySelector('[data-field="title"]').value,
      desc: card.querySelector('[data-field="desc"]').value,
      time: card.querySelector('[data-field="time"]').value,
      capacity: card.querySelector('[data-field="capacity"]').value,
      image: card.querySelector('[data-field="image"]').value
    }));

    // Schedule section
    config.scheduleSection = {
      title: getVal('schedule-title'),
      desc: getVal('schedule-desc')
    };

    // Schedule
    config.schedule = collectList('scheduleEditor', '.editable-card', (card) => ({
      time: card.querySelector('[data-field="time"]').value,
      icon: card.querySelector('[data-field="icon"]').value,
      title: card.querySelector('[data-field="title"]').value,
      desc: card.querySelector('[data-field="desc"]').value,
      color: card.querySelector('[data-field="color"]').value
    }));

    // Benefits
    config.benefitsTitle = getVal('benefits-title');
    config.benefits = collectList('benefitsEditor', '.editable-card', (card) => ({
      icon: card.querySelector('[data-field="icon"]').value,
      title: card.querySelector('[data-field="title"]').value,
      desc: card.querySelector('[data-field="desc"]').value
    }));

    // Gallery
    config.gallery = collectList('galleryEditor', '.gallery-item-edit', (card) => ({
      url: card.querySelector('[data-field="url"]').value,
      wide: card.querySelector('[data-field="wide"]').value === 'true'
    }));

    // Pricing
    config.pricingNote = getVal('pricing-note');
    config.pricing = collectList('pricingEditor', '.editable-card', (card) => ({
      headerColor: card.querySelector('[data-field="headerColor"]').value,
      badge: card.querySelector('[data-field="badge"]').value,
      badgeHot: card.querySelector('[data-field="badgeHot"]').checked,
      name: card.querySelector('[data-field="name"]').value,
      duration: card.querySelector('[data-field="duration"]').value,
      oldPrice: card.querySelector('[data-field="oldPrice"]').value,
      newPrice: card.querySelector('[data-field="newPrice"]').value,
      features: card.querySelector('[data-field="features"]').value.split('\n').filter(Boolean),
      featured: card.querySelector('[data-field="featured"]').checked
    }));

    // Testimonial
    config.testimonial = {
      avatar: getVal('testimonial-avatar'),
      quote: getVal('testimonial-quote'),
      cite: getVal('testimonial-cite')
    };

    // Footer
    config.footer = {
      ctaTitle: getVal('footer-cta-title'),
      ctaDesc: getVal('footer-cta-desc'),
      company: getVal('footer-company'),
      about: getVal('footer-about'),
      hotline: getVal('footer-hotline'),
      email: getVal('footer-email'),
      website: getVal('footer-website'),
      facebook: getVal('footer-fb'),
      youtube: getVal('footer-yt'),
      zalo: getVal('footer-zalo'),
      tiktok: getVal('footer-tiktok')
    };
  }

  function collectList(containerId, selector, mapper) {
    const container = document.getElementById(containerId);
    if (!container) return [];
    return Array.from(container.querySelectorAll(selector)).map(mapper);
  }

  // ========== RENDER DYNAMIC EDITORS ==========

  // ---- Hero Elements ----
  const TYPE_LABELS = { badge: '🏷️ Badge', text: '📝 Dòng chữ', tagline: '💬 Tagline', cta: '🔘 Nút CTA', image: '🖼️ Ảnh' };
  const STYLE_OPTIONS = {
    text: ['normal','uppercase','gradient','bold','desc'],
    cta: ['primary','outline','gradient'],
    badge: ['default'],
    tagline: ['default'],
    image: ['default']
  };

  function renderHeroElements() {
    const container = document.getElementById('heroElementsEditor');
    container.innerHTML = '';
    const elements = config.heroElements || [];
    elements.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'hero-element-card editable-card';
      const typeLabel = TYPE_LABELS[item.type] || item.type;
      const preview = item.type === 'image' ? (item.content ? `<img src="${escapeAttr(item.content)}" style="height:40px;border-radius:6px;margin-left:8px;" onerror="this.style.display='none'">` : '') : '';
      const contentTag = item.type === 'image' ? 'input' : (item.content && item.content.length > 60 ? 'textarea' : 'input');

      // Style select options
      const styleOpts = (STYLE_OPTIONS[item.type] || ['normal']).map(s =>
        `<option value="${s}" ${s === (item.style || '') ? 'selected' : ''}>${s}</option>`
      ).join('');

      card.innerHTML = `
        <div class="editable-card__header" style="display:flex;align-items:center;gap:8px;">
          <span class="editable-card__title" style="flex:1;">${typeLabel} ${preview}</span>
          <input type="hidden" data-field="type" value="${escapeAttr(item.type)}">
          <button class="btn-icon move-up" title="Di chuyển lên" style="font-size:1rem;opacity:${i === 0 ? '0.3' : '1'};" ${i === 0 ? 'disabled' : ''}>⬆</button>
          <button class="btn-icon move-down" title="Di chuyển xuống" style="font-size:1rem;opacity:${i === elements.length - 1 ? '0.3' : '1'};" ${i === elements.length - 1 ? 'disabled' : ''}>⬇</button>
          <button class="btn-icon delete" title="Xóa">🗑</button>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Nội dung ${item.type === 'image' ? '(URL ảnh)' : item.type === 'tagline' ? '(phân cách bằng |)' : ''}</label>
            ${contentTag === 'textarea'
              ? `<textarea data-field="content" rows="2">${escapeHTML(item.content || '')}</textarea>`
              : `<input type="${item.type === 'image' ? 'url' : 'text'}" data-field="content" value="${escapeAttr(item.content || '')}" placeholder="${item.type === 'image' ? 'https://...' : 'Nhập nội dung...'}">`
            }
          </div>
        </div>
        ${item.type !== 'image' ? `
        <div class="form-row" style="display:flex;gap:8px;flex-wrap:wrap;">
          <div class="form-group" style="flex:1;min-width:120px;">
            <label>Màu sắc</label>
            <input type="text" data-field="color" value="${escapeAttr(item.color || '')}" placeholder="vd: #FFEF62, rgba(...)">
          </div>
          <div class="form-group" style="flex:1;min-width:120px;">
            <label>Cỡ chữ</label>
            <input type="text" data-field="fontSize" value="${escapeAttr(item.fontSize || '')}" placeholder="vd: 2rem, clamp(...)">
          </div>
          <div class="form-group" style="flex:0 0 130px;">
            <label>Kiểu</label>
            <select data-field="style">${styleOpts}</select>
          </div>
        </div>` : `
        <input type="hidden" data-field="color" value="">
        <input type="hidden" data-field="fontSize" value="">
        <input type="hidden" data-field="style" value="">
        `}
      `;

      // Event: move up
      card.querySelector('.move-up').addEventListener('click', () => {
        if (i > 0) { collectFormData(); [config.heroElements[i-1], config.heroElements[i]] = [config.heroElements[i], config.heroElements[i-1]]; renderHeroElements(); }
      });
      // Event: move down
      card.querySelector('.move-down').addEventListener('click', () => {
        if (i < elements.length - 1) { collectFormData(); [config.heroElements[i], config.heroElements[i+1]] = [config.heroElements[i+1], config.heroElements[i]]; renderHeroElements(); }
      });
      // Event: delete
      card.querySelector('.delete').addEventListener('click', () => {
        collectFormData(); config.heroElements.splice(i, 1); renderHeroElements();
      });

      container.appendChild(card);
    });
  }

  document.getElementById('addHeroText').addEventListener('click', () => {
    collectFormData();
    if (!config.heroElements) config.heroElements = [];
    config.heroElements.push({ type: 'text', content: 'Dòng chữ mới', color: '#FFFFFF', fontSize: '1.5rem', style: 'normal' });
    renderHeroElements();
  });

  document.getElementById('addHeroImage').addEventListener('click', () => {
    collectFormData();
    if (!config.heroElements) config.heroElements = [];
    config.heroElements.push({ type: 'image', content: '', color: '', fontSize: '' });
    renderHeroElements();
  });

  document.getElementById('addHeroCTA').addEventListener('click', () => {
    collectFormData();
    if (!config.heroElements) config.heroElements = [];
    config.heroElements.push({ type: 'cta', content: 'Nút mới', color: '', fontSize: '', style: 'primary' });
    renderHeroElements();
  });

  // Quick Benefits
  function renderQuickBenefits() {
    const container = document.getElementById('quickBenefitsEditor');
    container.innerHTML = '';
    (config.quickBenefits || []).forEach((item, i) => {
      container.appendChild(createEditableCard(`Benefit #${i + 1}`, [
        { field: 'icon', label: 'Icon (emoji)', value: item.icon, type: 'text', width: '80px' },
        { field: 'text', label: 'Nội dung', value: item.text, type: 'text' }
      ], () => { config.quickBenefits.splice(i, 1); renderQuickBenefits(); }));
    });
  }

  document.getElementById('addQuickBenefit').addEventListener('click', () => {
    collectFormData();
    config.quickBenefits.push({ icon: '⭐', text: 'Benefit mới' });
    renderQuickBenefits();
  });

  // Form Fields
  function renderFormFields() {
    const container = document.getElementById('formFieldsEditor');
    container.innerHTML = '';
    (config.formFields || []).forEach((item, i) => {
      container.appendChild(createEditableCard(`📝 ${item.label} ${item.required ? '*' : ''}`, [
        { field: 'id', label: 'ID (không dấu, không khoảng trắng)', value: item.id, type: 'text' },
        { field: 'label', label: 'Nhãn hiển thị', value: item.label, type: 'text' },
        { field: 'type', label: 'Loại trường', value: item.type, type: 'select', options: ['text','tel','email','number','textarea','select','centers'] },
        { field: 'placeholder', label: 'Placeholder', value: item.placeholder, type: 'text' },
        { field: 'required', label: 'Bắt buộc', value: item.required, type: 'checkbox' },
        { field: 'options', label: 'Options (select, mỗi dòng 1 option)', value: item.options || '', type: 'textarea' }
      ], () => { config.formFields.splice(i, 1); renderFormFields(); }));
    });
  }

  document.getElementById('addFormField').addEventListener('click', () => {
    collectFormData();
    if (!config.formFields) config.formFields = [];
    config.formFields.push({
      id: 'field_' + Date.now(), label: 'Trường mới', type: 'text',
      placeholder: 'Nhập giá trị...', required: false, options: ''
    });
    renderFormFields();
  });

  // Activities
  function renderActivities() {
    const container = document.getElementById('activitiesEditor');
    container.innerHTML = '';
    (config.activities || []).forEach((item, i) => {
      container.appendChild(createEditableCard(`Hoạt động #${i + 1}: ${item.title}`, [
        { field: 'color', label: 'Màu', value: item.color, type: 'select', options: ['red','green','blue','orange','purple','teal'] },
        { field: 'tag', label: 'Thẻ loại', value: item.tag, type: 'text' },
        { field: 'title', label: 'Tên hoạt động', value: item.title, type: 'text' },
        { field: 'desc', label: 'Mô tả', value: item.desc, type: 'textarea' },
        { field: 'time', label: 'Thời gian', value: item.time, type: 'text' },
        { field: 'capacity', label: 'Sĩ số', value: item.capacity, type: 'text' },
        { field: 'image', label: 'URL hình ảnh', value: item.image, type: 'text' }
      ], () => { config.activities.splice(i, 1); renderActivities(); }));
    });
  }

  document.getElementById('addActivity').addEventListener('click', () => {
    collectFormData();
    config.activities.push({
      color: 'blue', tag: 'Mới', title: 'Hoạt động mới',
      desc: 'Mô tả hoạt động', time: '⏰ Thời gian', capacity: '👥 Sĩ số',
      image: ''
    });
    renderActivities();
  });

  // Schedule
  function renderSchedule() {
    const container = document.getElementById('scheduleEditor');
    container.innerHTML = '';
    (config.schedule || []).forEach((item, i) => {
      container.appendChild(createEditableCard(`${item.time} — ${item.title}`, [
        { field: 'time', label: 'Thời gian', value: item.time, type: 'text' },
        { field: 'icon', label: 'Icon', value: item.icon, type: 'text', width: '60px' },
        { field: 'title', label: 'Tiêu đề', value: item.title, type: 'text' },
        { field: 'desc', label: 'Mô tả', value: item.desc, type: 'text' },
        { field: 'color', label: 'Màu', value: item.color, type: 'select', options: ['green','blue','yellow','red','purple','orange'] }
      ], () => { config.schedule.splice(i, 1); renderSchedule(); }));
    });
  }

  document.getElementById('addSchedule').addEventListener('click', () => {
    collectFormData();
    config.schedule.push({
      time: '00:00 - 00:00', icon: '📌', title: 'Mốc thời gian mới',
      desc: 'Mô tả', color: 'blue'
    });
    renderSchedule();
  });

  // Benefits
  function renderBenefits() {
    const container = document.getElementById('benefitsEditor');
    container.innerHTML = '';
    (config.benefits || []).forEach((item, i) => {
      container.appendChild(createEditableCard(`${item.icon} ${item.title}`, [
        { field: 'icon', label: 'Icon', value: item.icon, type: 'text', width: '60px' },
        { field: 'title', label: 'Tiêu đề', value: item.title, type: 'text' },
        { field: 'desc', label: 'Mô tả', value: item.desc, type: 'textarea' }
      ], () => { config.benefits.splice(i, 1); renderBenefits(); }));
    });
  }

  document.getElementById('addBenefit').addEventListener('click', () => {
    collectFormData();
    config.benefits.push({ icon: '⭐', title: 'Lợi ích mới', desc: 'Mô tả lợi ích' });
    renderBenefits();
  });

  // Gallery
  function renderGallery() {
    const container = document.getElementById('galleryEditor');
    container.innerHTML = '';
    (config.gallery || []).forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'gallery-item-edit';
      div.innerHTML = `
        <img src="${item.url}" alt="Gallery ${i + 1}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2260%22><rect fill=%22%23252836%22 width=%2280%22 height=%2260%22/><text x=%2240%22 y=%2235%22 text-anchor=%22middle%22 fill=%22%236B7280%22 font-size=%2212%22>📷</text></svg>'">
        <input data-field="url" type="text" value="${escapeAttr(item.url)}" placeholder="URL hình ảnh">
        <select data-field="wide">
          <option value="false" ${!item.wide ? 'selected' : ''}>Thường</option>
          <option value="true" ${item.wide ? 'selected' : ''}>Rộng (2 cột)</option>
        </select>
        <button class="btn-icon delete" onclick="this.parentElement.remove()">🗑</button>
      `;
      container.appendChild(div);
    });
  }

  document.getElementById('addGalleryImage').addEventListener('click', () => {
    collectFormData();
    config.gallery.push({ url: '', wide: false });
    renderGallery();
  });

  // Pricing
  function renderPricing() {
    const container = document.getElementById('pricingEditor');
    container.innerHTML = '';
    (config.pricing || []).forEach((item, i) => {
      container.appendChild(createEditableCard(`💰 ${item.name}`, [
        { field: 'headerColor', label: 'Màu header', value: item.headerColor, type: 'select', options: ['blue','gradient','green'] },
        { field: 'badge', label: 'Badge', value: item.badge, type: 'text' },
        { field: 'badgeHot', label: 'Badge nổi bật', value: item.badgeHot, type: 'checkbox' },
        { field: 'name', label: 'Tên gói', value: item.name, type: 'text' },
        { field: 'duration', label: 'Thời lượng', value: item.duration, type: 'text' },
        { field: 'oldPrice', label: 'Giá gốc', value: item.oldPrice, type: 'text' },
        { field: 'newPrice', label: 'Giá ưu đãi', value: item.newPrice, type: 'text' },
        { field: 'features', label: 'Quyền lợi (mỗi dòng 1 item)', value: (item.features || []).join('\n'), type: 'textarea' },
        { field: 'featured', label: 'Nổi bật (scale lên)', value: item.featured, type: 'checkbox' }
      ], () => { config.pricing.splice(i, 1); renderPricing(); }));
    });
  }

  document.getElementById('addPricing').addEventListener('click', () => {
    collectFormData();
    config.pricing.push({
      headerColor: 'blue', badge: 'Mới', badgeHot: false,
      name: 'Gói Mới', duration: 'X buổi học',
      oldPrice: '0đ', newPrice: '0',
      features: ['✅ Quyền lợi 1'], featured: false
    });
    renderPricing();
  });

  // ========== HELPER: Create Editable Card ==========
  function createEditableCard(title, fields, onDelete) {
    const card = document.createElement('div');
    card.className = 'editable-card';

    let headerHTML = `
      <div class="editable-card__header">
        <span class="editable-card__title">${escapeHTML(title)}</span>
        <div class="editable-card__actions">
          <button class="btn-icon delete" title="Xóa">🗑</button>
        </div>
      </div>
    `;

    let fieldsHTML = '';
    // Group fields into rows of 2 for compact layout
    for (let i = 0; i < fields.length; i++) {
      const f = fields[i];
      if (f.type === 'textarea') {
        fieldsHTML += `<div class="form-row"><div class="form-group">
          <label>${f.label}</label>
          <textarea data-field="${f.field}" rows="2">${escapeHTML(f.value || '')}</textarea>
        </div></div>`;
      } else if (f.type === 'select') {
        const opts = (f.options || []).map(o =>
          `<option value="${o}" ${o === f.value ? 'selected' : ''}>${o}</option>`
        ).join('');
        fieldsHTML += `<div class="form-row"><div class="form-group">
          <label>${f.label}</label>
          <select data-field="${f.field}">${opts}</select>
        </div></div>`;
      } else if (f.type === 'checkbox') {
        fieldsHTML += `<div class="form-row"><div class="form-group" style="display:flex;align-items:center;gap:8px;">
          <input type="checkbox" data-field="${f.field}" ${f.value ? 'checked' : ''} style="width:auto;">
          <label style="margin:0;">${f.label}</label>
        </div></div>`;
      } else {
        // Check if next field is also text (pair them)
        const next = fields[i + 1];
        if (next && next.type === 'text' && !f.width) {
          fieldsHTML += `<div class="form-row two-col">
            <div class="form-group"><label>${f.label}</label>
              <input type="text" data-field="${f.field}" value="${escapeAttr(f.value || '')}" ${f.width ? `style="max-width:${f.width}"` : ''}></div>
            <div class="form-group"><label>${next.label}</label>
              <input type="text" data-field="${next.field}" value="${escapeAttr(next.value || '')}" ${next.width ? `style="max-width:${next.width}"` : ''}></div>
          </div>`;
          i++; // skip next
        } else {
          fieldsHTML += `<div class="form-row"><div class="form-group">
            <label>${f.label}</label>
            <input type="text" data-field="${f.field}" value="${escapeAttr(f.value || '')}" ${f.width ? `style="max-width:${f.width}"` : ''}>
          </div></div>`;
        }
      }
    }

    card.innerHTML = headerHTML + fieldsHTML;
    card.querySelector('.delete').addEventListener('click', onDelete);
    return card;
  }

  // ========== COLOR SYNC ==========
  document.querySelectorAll('input[type="color"]').forEach(picker => {
    picker.addEventListener('input', () => {
      const hexId = picker.id + '-hex';
      const hexInput = document.getElementById(hexId);
      if (hexInput) hexInput.value = picker.value.toUpperCase();
    });
  });

  document.querySelectorAll('.color-hex').forEach(hex => {
    hex.addEventListener('input', () => {
      const colorId = hex.id.replace('-hex', '');
      const picker = document.getElementById(colorId);
      if (picker && /^#[0-9A-Fa-f]{6}$/.test(hex.value)) {
        picker.value = hex.value;
      }
    });
  });

  // ========== BUTTONS ==========

  // Save
  document.getElementById('btnSave').addEventListener('click', () => {
    collectFormData();
    saveConfig();
  });

  // Reset
  document.getElementById('btnReset').addEventListener('click', () => {
    if (confirm('Bạn có chắc muốn reset tất cả về mặc định? Dữ liệu hiện tại sẽ bị mất.')) {
      config = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
      saveConfig();
      populateForms();
      showToast('↺', 'Đã reset về mặc định!');
    }
  });

  // Export
  document.getElementById('btnExport').addEventListener('click', () => {
    collectFormData();
    const json = JSON.stringify(config, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ucmas-landing-config.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('📤', 'Đã xuất file cấu hình!');
  });

  // Import
  document.getElementById('btnImport').addEventListener('click', () => {
    document.getElementById('importModal').classList.add('active');
  });

  document.getElementById('cancelImport').addEventListener('click', () => {
    document.getElementById('importModal').classList.remove('active');
  });

  document.getElementById('importModal').querySelector('.modal__backdrop').addEventListener('click', () => {
    document.getElementById('importModal').classList.remove('active');
  });

  document.getElementById('confirmImport').addEventListener('click', () => {
    const data = document.getElementById('importData').value.trim();
    try {
      const parsed = JSON.parse(data);
      config = parsed;
      saveConfig();
      populateForms();
      document.getElementById('importModal').classList.remove('active');
      showToast('📥', 'Đã nhập cấu hình thành công!');
    } catch (e) {
      alert('JSON không hợp lệ. Vui lòng kiểm tra lại.');
    }
  });

  // ========== TOAST ==========
  function showToast(icon, text) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-icon').textContent = icon;
    toast.querySelector('.toast-text').textContent = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // ========== UTILS ==========
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return String(str || '').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ========== INIT ==========
  populateForms();

});
