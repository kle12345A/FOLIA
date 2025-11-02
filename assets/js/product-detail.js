// Simple product registry. Keys are product codes used in Sanpham.html
(function() {
  'use strict';

  const products = {
    'FL-01': {
      name: 'Túi Cỏ Mây',
      price: '599,000₫',
      img: 'assets/img/pagesanpham/sphamsoichuoi/sp1.png',
      desc: 'Túi Cỏ Mây mang vẻ đẹp mộc mạc và thanh lịch, được đan hoàn toàn thủ công từ sợi chuối tự nhiên đã qua xử lý để giữ màu và độ bền. Form túi nhỏ gọn, tròn với tông màu be tự nhiên. Có quai đeo dài, mỏng tiện lợi. Form túi gọn gàng nhưng có sức chứa tốt cho các vật dụng hằng ngày như ví, điện thoại, son, sổ tay. Dòng túi này phù hợp cho những buổi dạo phố nhẹ nhàng, đi biển hoặc những ngày cuối tuần, đồng thời dễ phối với trang phục linen/cotton theo phong cách xanh.',
      size: '25cm (Rộng) × 13cm (Cao) × 12cm (Sâu)',
      material: 'Sợi chuối đan thủ công',
      category: 'tui'
    },
    'FL-02': {
      name: 'Túi Trăng Rằm',
      price: '699,000₫',
      img: 'assets/img/pagesanpham/sphamsoichuoi/sp2.png',
      desc: 'Lấy cảm hứng từ ánh trăng đêm rằm, Túi Trăng Rằm có dáng bo tròn mềm mại với hoa văn đan vòng tròn đồng tâm, bề mặt đan khít, tôn chất liệu tự nhiên. Có quai cầm và dây đeo màu nâu giống da. Kích thước vừa đủ, trọng lượng nhẹ, đi kèm ngăn chính rộng rãi và miệng túi dễ đóng mở. Chiếc túi có phong cách hiện đại pha chút hoang dã, bền và phong cách, hoàn hảo cho phong cách thời trang giản dị hoặc những người yêu thích thời trang thân thiện với môi trường.',
      size: 'Đường kính 23cm',
      material: 'Sợi chuối đan thủ công',
      category: 'tui'
    },
    'FL-04': {
      name: 'Túi Hoa Xòe',
      price: '699,000₫',
      img: 'assets/img/sanpham/sp3.png',
      desc: 'Thiết kế xòe dịu dàng như cánh hoa với phần miệng túi mở rộng – thu hẹp linh hoạt, giữ form tốt khi mang theo nhiều đồ. Toàn bộ thân túi được dệt thủ công bởi các nghệ nhân làng nghề, mỗi đường đan đều đặn giúp túi chắc chắn và bền bỉ theo thời gian. Lý tưởng cho những buổi dạo phố, picnic hay đi biển.',
      size: '30cm (Rộng) × 25cm (Cao) × 14cm (Sâu)',
      material: 'Sợi chuối đan thủ công',
      category: 'tui'
    },
    'FL-05': {
      name: 'Lót Mộc',
      price: '60,000₫',
      img: 'assets/img/pagesanpham/sphamsoichuoi/sp5.png',
      desc: 'Bộ lót mộc từ sợi chuối tự nhiên đan thủ công, thấm hút tốt, bảo vệ bề mặt bàn và tạo điểm nhấn mộc mạc cho không gian bếp/ban công. Lót mộc thân thiện với môi trường, mềm mại nhưng có khả năng thấm hút, rất tốt để bảo vệ bề mặt đồng thời thêm nét tự nhiên cho trang trí nhà cửa.',
      size: 'Đường kính 11cm',
      material: 'Sợi chuối đan thủ công',
      category: 'phu_kien'
    },

    // Lục bình section
    'FL-10': {
      name: 'Túi Nan Xòe',
      price: '360,000₫',
      img: 'assets/img/pagesanpham/spsoilucbinh/sp1.jpg',
      desc: 'Túi Nan Xòe làm từ sợi lục bình phơi nắng nhiều ngày để đạt độ dẻo và bền. Dáng xòe mềm tự nhiên với thiết kế đơn giản, tay cầm gỗ tự nhiên, không có lớp lót bên trong. Thoáng nhẹ, cầm tay hoặc đeo vai đều đẹp. Bên trong có không gian rộng rãi cho khăn choàng, kính mát, kem chống nắng – lựa chọn lý tưởng cho dạo biển, picnic hoặc những ngày nắng đẹp.',
      size: '27cm (Rộng) × 24cm (Cao) × 7cm (Sâu)',
      material: 'Sợi lục bình đan thủ công',
      category: 'tui'
    },
    'FL-11': {
      name: 'Túi Mộc Nhiên',
      price: '429,000₫',
      img: 'assets/img/pagesanpham/spsoilucbinh/sp2.jpg',
      desc: 'Phong cách tối giản mộc mạc, tôn vinh chất liệu tự nhiên. Kết cấu đan đều tay, lớp bề mặt mịn, dễ vệ sinh. Túi Mộc Nhiên với hai quai cầm chắc chắn, nhẹ và bền, phù hợp sử dụng hàng ngày. Hợp với phong cách eco–chic, phối đẹp cùng trang phục sáng màu, mang lại tổng thể hài hòa và hiện đại.',
      size: '45cm (Rộng) × 30cm (Cao) × 10cm (Sâu)',
      material: 'Sợi lục bình với quai cầm chắc chắn',
      category: 'tui'
    },
    'FL-12': {
      name: 'Túi Vành Trăng',
      price: '399,000₫',
      img: 'assets/img/pagesanpham/spsoilucbinh/sp3.jpg',
      desc: 'Form bán nguyệt gợi nhớ vành trăng, nhỏ gọn nhưng tiện dụng với hai quai cầm gỗ tròn. Thiết kế ôm sát cơ thể giúp di chuyển linh hoạt. Túi có lớp lót vải và khóa kéo tiện lợi. Thiết kế tròn thanh lịch, hoàn hảo cho những buổi dạo phố cuối tuần hoặc picnic.',
      size: '30cm (Rộng) × 17cm (Cao) × 9cm (Sâu)',
      material: 'Sợi lục bình, có lớp lót vải và khóa kéo',
      category: 'tui'
    },
    'FL-13': {
      name: 'Túi Nắng Hạ',
      price: '429,000₫',
      img: 'assets/img/pagesanpham/spsoilucbinh/sp4.jpg',
      desc: 'Gam màu ấm gợi nắng hè kết hợp đường đan nổi tạo chiều sâu thị giác. Túi có hai quai cầm gỗ tròn lớn với họa tiết vòng tròn đồng tâm trang trí. Vật liệu tự nhiên thân thiện với môi trường, ít bám bẩn. Có lớp lót vải và khóa kéo. Đây là chiếc túi rộng rãi lý tưởng cho những chuyến đi ngắn ngày, đi mua sắm hoặc hoạt động ngoài trời.',
      size: '28cm (Rộng) × 26cm (Cao) × 12cm (Sâu)',
      material: 'Sợi lục bình, có lớp lót vải và khóa kéo',
      category: 'tui'
    },
    'FL-14': {
      name: 'Giỏ Nắng Mai',
      price: '420,000₫',
      img: 'assets/img/pagesanpham/spsoilucbinh/sp5.jpg',
      desc: 'Dáng giỏ vững chắc với đáy phẳng, đứng form tốt và sức chứa ấn tượng. Được làm thủ công, có lớp lót vải và khóa kéo tiện lợi. Mang theo đi chợ phiên, cắm trại hay dùng hằng ngày đều tiện. Những chi tiết đan tay tạo nên vẻ gần gũi và ấm áp cho tổng thể. Phù hợp làm giỏ trang trí trong nhà hoặc mang theo các vật dụng nhỏ.',
      size: '27cm (Rộng) × 25cm (Cao) × 12cm (Sâu)',
      material: 'Sợi lục bình đan thủ công, có lớp lót vải và khóa kéo',
      category: 'tui'
    },
    'FL-15': {
      name: 'Lót ly Các Loại',
      price: '65.000đ',
      img: 'assets/img/pagesanpham/spsoilucbinh/sp6.png',
      desc: 'Bộ lót ly hình bông hoa đan từ sợi lục bình tự nhiên bền chắc, thấm hút tốt và dễ vệ sinh. Họa tiết đan tinh tế với viền trang trí hình cánh hoa và hoa văn tròn ở giữa. Màu tự nhiên, phù hợp để làm lót ly, lót chậu hoa, trang trí tường hoặc bày trí bàn ăn. Sản phẩm phù hợp làm quà tặng nhỏ xinh cho bạn bè.',
      size: 'Đường kính 11cm',
      material: 'Sợi lục bình đan thủ công',
      category: 'phu_kien'
    },

    // Chuối section
    'FL-03': {
      name: 'Túi Xơ Mộc',
      price: '799,000₫',
      img: 'assets/img/pagesanpham/sphamsoichuoi/sp3.png',
      desc: 'Sử dụng xơ chuối tự nhiên đã được xử lý kỹ lưỡng để đảm bảo độ bền. Form túi chắc chắn có cấu trúc, đường đan đều và mịn tay. Có hai quai cầm màu nâu giống da và một miếng trang trí vuông nhỏ ở mặt trước với tua rua đỏ nhỏ xinh. Kết hợp sợi chuối với lớp lót cotton. Mang tinh thần mộc mạc nhưng tinh tế, thanh lịch và chắc chắn, phù hợp cho cả sử dụng hàng ngày và làm quà tặng.',
      size: '34cm (Rộng) × 24cm (Cao) × 16cm (Sâu)',
      material: 'Sợi chuối đan thủ công, kết hợp với lớp lót cotton',
      category: 'tui'
    },
    'FL-08': {
      name: 'Bán Nguyệt',
      price: '699,000₫',
      img: 'assets/img/pagesanpham/sphamsoichuoi/sp7.png',
      desc: 'Thiết kế bán nguyệt đặc trưng, đeo chéo hay cầm tay đều hợp. Điểm nhấn thủ công tạo nét riêng khó trộn lẫn.',
      size: '32cm (Rộng) × 20cm (Cao) × 10cm (Sâu)',
      material: 'Sợi chuối đan thủ công',
      category: 'tui'
    },
    'FL-06': {
      name: 'Dép Chuối',
      price: '220,000₫',
      img: 'assets/img/pagesanpham/sphamsoichuoi/sp6.png',
      desc: 'Đôi dép đan từ sợi chuối tự nhiên với đế dép được đan chắc chắn và dây đeo rộng màu kem có kết cấu như đan hoặc móc. Có lớp lót quế bên trong. Thoáng nhẹ, êm chân và hạn chế bí bách khi di chuyển lâu. Đế dép được gia cố chắc chắn. Dép thủ công với đặc tính thoải mái, thoáng khí và khử mùi tự nhiên, lý tưởng để sử dụng trong nhà theo phong cách sống xanh.',
      size: 'Size 35-39 (nữ)',
      material: 'Sợi chuối, có lớp lót quế và dây đeo',
      category: 'dep'
    },
    'FL-09': {
      name: 'Dép Biển Cát',
      price: '175,000₫',
      img: 'assets/img/pagesanpham/sphamsoichuoi/sp8.png',
      desc: 'Lấy cảm hứng từ bờ cát vàng, dép đan thủ công tạo cảm giác thoải mái, êm ái khi mang. Tông màu trung tính dễ phối đồ cho những ngày hè năng động hoặc những chuyến đi biển.',
      size: 'Size 35-39 (nữ)',
      material: 'Sợi chuối đan thủ công',
      category: 'dep'
    }
  };

  function getParam(name) {
    try {
      const url = new URL(window.location.href);
      const v = url.searchParams.get(name);
      if (v) return v;
    } catch (e) { /* ignore */ }
    // Fallback for older environments or file:// URLs
    const query = window.location.search || '';
    const params = {};
    query.replace(/^[?#]/, '').split('&').forEach(kv => {
      const [k, v] = kv.split('=');
      if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return params[name] || null;
  }

  function populate() {
    const code = getParam('id');
    if (!code || !products[code]) {
      // fallback: go back to listing
      // If we cannot determine product, stay but avoid blank state
      // and show a gentle fallback instead of a broken layout.
      try { window.location.replace('Sanpham.html'); } catch(e) {}
      return;
    }
    const p = products[code];
    document.getElementById('pd-name').textContent = p.name;
    document.getElementById('pd-code').textContent = `Mã sản phẩm: ${code}`;
    document.getElementById('pd-price').textContent = p.price;
    document.getElementById('pd-image').src = p.img;
    document.getElementById('pd-image').alt = p.name;
    document.getElementById('pd-desc').textContent = p.desc;
    document.getElementById('breadcrumb-name').textContent = p.name;

    // Kích thước và chất liệu
    const sizeEl = document.getElementById('pd-size');
    const materialEl = document.getElementById('pd-material');
    if (sizeEl && p.size) sizeEl.textContent = p.size;
    if (materialEl && p.material) materialEl.textContent = p.material;

    // specs section
    // specs mapping theo template mới
    const brandEl = document.getElementById('pd-brand');
    const structureEl = document.getElementById('pd-structure');
    const originEl = document.getElementById('pd-origin');
    if (brandEl) brandEl.textContent = 'FOLIA';
    if (structureEl) structureEl.textContent = 'Dạng túi thủ công';
    if (originEl) originEl.textContent = 'Việt Nam';

    // rating (default 4.8)
    const ratingValue = (Math.random() * 0.5 + 4.5).toFixed(1); // 4.5 - 5.0
    const ratingEl = document.getElementById('pd-rating');
    if (ratingEl) ratingEl.textContent = `${ratingValue}/5`;
    const starsEl = document.getElementById('pd-stars');
    if (starsEl) {
      const full = Math.floor(ratingValue);
      const half = ratingValue - full >= 0.5 ? 1 : 0;
      starsEl.innerHTML = '';
      for (let i = 0; i < full; i++) starsEl.innerHTML += '<span class="star full">★</span>';
      if (half) starsEl.innerHTML += '<span class="star half">★</span>';
      for (let i = full + half; i < 5; i++) starsEl.innerHTML += '<span class="star">☆</span>';
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populate);
  } else {
    populate();
  }
  // Related section rendering & auto slide
  function renderRelated(currentCode){ /* deprecated: no-op for slide version */ }

  // Similar products (same material group: sợi chuối / lục bình), pick 4 random, grid layout
  function renderSimilar(currentCode){
    const current = products[currentCode];
    if (!current) return;
    
    function getMaterialGroup(code, p){
      try {
        const img = (p.img || '').toLowerCase();
        if (img.includes('spsoilucbinh')) return 'luc_binh';
        if (img.includes('sphamsoichuoi')) return 'soi_chuoi';
      } catch(e) {}
      // manual mapping for items outside specific folders
      const assumedSoiChuoi = new Set(['FL-01','FL-02','FL-04']);
      if (assumedSoiChuoi.has(code)) return 'soi_chuoi';
      return 'khac';
    }
    
    const allEntries = Object.entries(products);
    const currentGroup = getMaterialGroup(currentCode, current);
    
    // Lọc sản phẩm cùng loại (sợi chuối hoặc lục bình), loại trừ sản phẩm hiện tại
    let candidates = allEntries.filter(([code, p]) => {
      return code !== currentCode && getMaterialGroup(code, p) === currentGroup;
    });
    
    // Fallback 1: nếu không đủ 4, lấy thêm sản phẩm cùng category
    if (candidates.length < 4 && current.category) {
      const usedCodes = new Set(candidates.map(([c]) => c));
      const sameCat = allEntries.filter(([code, p]) => {
        return code !== currentCode && 
               p.category === current.category && 
               !usedCodes.has(code);
      });
      candidates = candidates.concat(sameCat);
    }
    
    // Fallback 2: nếu vẫn không đủ 4, lấy bất kỳ sản phẩm nào (trừ sản phẩm hiện tại)
    if (candidates.length < 4) {
      const usedCodes = new Set(candidates.map(([c]) => c));
      const others = allEntries.filter(([code]) => {
        return code !== currentCode && !usedCodes.has(code);
      });
      candidates = candidates.concat(others);
    }
    
    // Shuffle và lấy đúng 4 sản phẩm (không lặp)
    for (let i = candidates.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = candidates[i];
      candidates[i] = candidates[j];
      candidates[j] = t;
    }
    
    // Lấy tối đa 4 sản phẩm, đảm bảo không trùng
    const seen = new Set();
    const list = [];
    for (const [code, p] of candidates) {
      if (list.length >= 4) break;
      if (!seen.has(code)) {
        seen.add(code);
        list.push([code, p]);
      }
    }
    
    // Nếu vẫn chưa đủ 4, lặp lại từ đầu danh sách (chỉ khi danh sách rất ngắn)
    while (list.length < 4 && candidates.length > 0) {
      const [code, p] = candidates[list.length % candidates.length];
      if (!seen.has(code)) {
        seen.add(code);
        list.push([code, p]);
      } else if (list.length > 0) {
        // Chỉ lặp lại khi thực sự không có đủ sản phẩm duy nhất
        break;
      }
    }
    
    const grid = document.getElementById('similar-list');
    if (!grid) return;
    
    grid.innerHTML = list.map(([code, p]) => `
      <div class="related-card">
        <img class="related-card__img" src="${p.img}" alt="${p.name}">
        <div class="related-card__body">
          <div class="related-card__name">${p.name}</div>
          <div class="related-card__price">${p.price}</div>
          <a class="related-card__link" href="ProductDetail.html?id=${code}">Xem chi tiết</a>
        </div>
      </div>
    `).join('');
  }

  // init related and review stars
  function initAfter(){
    const code = getParam('id');
    if (code && products[code]) {
      renderSimilar(code);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAfter); else initAfter();
})();


