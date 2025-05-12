//script.js
const products = {
    "001": {
      id: "001",
      name: "水PTC电热管",
      image: "images/3-5呼吸机电热管（小）.jpg",
      summary: "水PTC电热管具有温度精度高、发热速度快等特点，适用于呼吸机等设备。",
      description: "水PTC电热管是一种利用PTC发热元件进行加热的设备，具备自控温、加热效率高、耐用性强的优点。适用于各种需要水加热的小型医疗或工业设备。",
      application: "主要应用于呼吸机等医疗设备，为其提供稳定而安全的加热解决方案。",
      features: [
        "温度精度高",
        "发热速度快",
        "耐压可靠性好",
        "规格齐全，可按需设计",
        "安装使用方便",
        "通过CQC认证"
      ],
      specs: {
        "直径": "5 - 25mm",
        "材质": "不锈钢，铝，钛合金",
        "适用设备": "呼吸机",
        "功率范围": "100W - 1000W",
        "工作电压": "110V/220V",
        "温控范围": "20 - 100°C"
      },
      category: "water"
    },
    "002": {
      id: "002",
      name: "SPA泳池PTC电热管",
      image: "https://picsum.photos/800/600?random=2",
      summary: "专为SPA泳池设计的PTC电热管，安全高效，节能环保。",
      description: "SPA泳池PTC电热管采用特殊材质和结构设计，具有良好的耐腐蚀性和热效率，能够快速加热水体并保持恒温。",
      application: "适用于家庭SPA泳池、小型游泳池、水疗设备等。",
      features: [
        "耐腐蚀设计",
        "节能高效",
        "智能温控",
        "安全可靠",
        "寿命长"
      ],
      specs: {
        "直径": "12 - 32mm",
        "材质": "316L不锈钢",
        "适用设备": "SPA泳池、小型游泳池",
        "功率范围": "1500W - 5000W",
        "工作电压": "220V/380V",
        "温控范围": "25 - 45°C"
      },
      category: "pool"
    },
    "003": {
      id: "003",
      name: "毛巾架PTC电热管",
      image: "images/1-2(白接线)毛巾架电热管.jpg",
      summary: "用于毛巾架的PTC加热元件，快速烘干，防霉抗菌。",
      description: "毛巾架PTC电热管采用低功率设计，安全节能，能够有效烘干毛巾并抑制细菌滋生，保持毛巾干爽清新。",
      application: "适用于家庭、酒店、浴室等场所的毛巾架。",
      features: [
        "低温烘干",
        "防霉抗菌",
        "安全节能",
        "静音运行",
        "安装简便"
      ],
      specs: {
        "尺寸": "可定制",
        "材质": "铝合金",
        "适用设备": "毛巾架",
        "功率": "100W - 300W",
        "工作电压": "220V",
        "温控范围": "40 - 60°C"
      },
      category: "towel"
    },
    "004": {
      id: "004",
      name: "扫地机PTC加热器",
      image: "https://picsum.photos/800/600?random=4",
      summary: "为扫地机器人设计的PTC加热器，快速干燥拖布，防止异味。",
      description: "扫地机PTC加热器体积小巧，加热效率高，能够在扫地机器人工作过程中快速干燥拖布，避免拖布滋生细菌产生异味。",
      application: "适用于各类智能扫地机器人。",
      features: [
        "体积小巧",
        "高效加热",
        "智能控温",
        "低功耗",
        "长寿命"
      ],
      specs: {
        "尺寸": "定制化设计",
        "材质": "工程塑料",
        "适用设备": "扫地机器人",
        "功率": "50W - 150W",
        "工作电压": "12V/24V",
        "温控范围": "45 - 75°C"
      },
      category: "cleaner"
    },
    "005": {
      id: "005",
      name: "洗地机PTC加热器",
      image: "https://picsum.photos/800/600?random=5",
      summary: "洗地机专用PTC加热器，提升清洁效果，加速地面干燥。",
      description: "洗地机PTC加热器能够在洗地过程中提供热风，加速地面水分蒸发，使清洁后的地面快速干燥，减少滑倒风险。",
      application: "适用于商用和家用洗地机。",
      features: [
        "快速干燥",
        "高效节能",
        "安全可靠",
        "耐高温",
        "耐腐蚀"
      ],
      specs: {
        "尺寸": "定制化设计",
        "材质": "不锈钢",
        "适用设备": "洗地机",
        "功率": "300W - 1000W",
        "工作电压": "220V",
        "温控范围": "40 - 80°C"
      },
      category: "cleaner"
    },
    "006": {
      id: "006",
      name: "空气PTC加热器",
      image: "https://picsum.photos/800/600?random=6",
      summary: "适用于空气加热设备，安全可靠，耐高温。",
      description: "空气加热PTC元件广泛应用于空气净化器、暖风机等设备，具有自控温特性，安全性高，且无需额外温控装置。",
      application: "应用于空气加热场景，例如净化器、取暖设备等。",
      features: [
        "自限温保护",
        "无明火安全",
        "寿命长",
        "加热均匀",
        "快速升温"
      ],
      specs: {
        "加热功率": "500W - 2000W",
        "电压": "220V",
        "适用设备": "空气净化器、取暖器",
        "风速": "1 - 5m/s",
        "温控范围": "30 - 80°C"
      },
      category: "air"
    },
    "007": {
      id: "007",
      name: "绝缘纸PTC加热器",
      image: "https://picsum.photos/800/600?random=7",
      summary: "超薄绝缘纸PTC加热器，适用于空间有限的加热场景。",
      description: "绝缘纸PTC加热器采用超薄设计，热传导效率高，适用于对空间要求较高的加热设备。",
      application: "应用于打印机、复印机、医疗设备等需要快速加热的场景。",
      features: [
        "超薄设计",
        "快速升温",
        "高效节能",
        "绝缘性好",
        "安全可靠"
      ],
      specs: {
        "厚度": "0.5 - 2mm",
        "功率密度": "10 - 30W/cm²",
        "电压": "12V/24V/220V",
        "工作温度": "50 - 200°C",
        "尺寸": "可定制"
      },
      category: "special"
    },
    "008": {
      id: "008",
      name: "空铝管PTC加热器",
      image: "https://picsum.photos/800/600?random=8",
      summary: "空铝管封装的PTC加热器，散热性能好，寿命长。",
      description: "空铝管PTC加热器采用优质铝合金外壳，散热性能优异，能够有效提高加热效率并延长使用寿命。",
      application: "适用于工业设备、烘干箱、空调辅助加热等。",
      features: [
        "散热性好",
        "寿命长",
        "耐高温",
        "耐腐蚀",
        "安装方便"
      ],
      specs: {
        "管径": "8 - 25mm",
        "材质": "铝合金",
        "功率": "200W - 3000W",
        "电压": "110V/220V/380V",
        "温控范围": "50 - 250°C"
      },
      category: "industrial"
    },
    "009": {
      id: "009",
      name: "暖风机PTC加热器",
      image: "https://picsum.photos/800/600?random=9",
      summary: "暖风机专用PTC加热器，快速取暖，安全节能。",
      description: "暖风机PTC加热器采用先进的PTC材料，具有升温快、恒温性能好、安全无明火等特点，是理想的取暖设备核心部件。",
      application: "适用于家用、商用暖风机。",
      features: [
        "快速升温",
        "恒温控制",
        "安全无明火",
        "节能省电",
        "低噪音"
      ],
      specs: {
        "功率": "800W - 2500W",
        "电压": "220V",
        "出风口温度": "40 - 80°C",
        "温控精度": "±2°C",
        "尺寸": "可定制"
      },
      category: "heater"
    },
    "010": {
      id: "010",
      name: "风幕机PTC加热器",
      image: "https://picsum.photos/800/600?random=10",
      summary: "风幕机专用PTC加热器，节能高效，稳定可靠。",
      description: "风幕机PTC加热器专为风幕机设计，能够提供强劲热风，有效阻挡室外冷空气进入，节约能源。",
      application: "适用于商场、超市、酒店等场所的风幕机。",
      features: [
        "高效节能",
        "稳定可靠",
        "快速加热",
        "低维护",
        "长寿命"
      ],
      specs: {
        "功率": "1500W - 6000W",
        "电压": "220V/380V",
        "出风口温度": "40 - 70°C",
        "风速": "8 - 12m/s",
        "尺寸": "可定制"
      },
      category: "industrial"
    }
  };

  // 获取URL中的产品ID
  function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || '001';
  }

  // 加载产品详情
  function loadProductDetails() {
    const id = getProductIdFromUrl();
    const product = products[id];

    if (!product) {
      document.querySelector('main').innerHTML = '<div class="text-center py-16"><h2 class="text-2xl font-bold text-neutral-800 mb-4">未找到该产品信息</h2><p class="text-neutral-600">请检查产品ID是否正确</p></div>';
      return;
    }

    // 更新页面标题
    document.title = `产品详情 - ${product.name} - 宜兴易纳唯新电子有限公司`;
    
    // 更新面包屑导航
    document.getElementById('breadcrumbProductName').textContent = product.name;
    
    // 更新产品图片和信息
    document.getElementById('productId').textContent = product.id;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.name;
    document.getElementById('productSummary').textContent = product.summary;
    document.getElementById('formProductId').value = product.id;
    document.getElementById('formProductName').value = product.name;
    
    // 更新产品描述
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productApplication').textContent = product.application;
    
    // 更新产品特点
    const featuresContainer = document.getElementById('productFeatures');
    featuresContainer.innerHTML = '';
    product.features.forEach(feature => {
      const li = document.createElement('li');
      li.className = 'flex items-start';
      li.innerHTML = `<i class="fas fa-check-circle text-primary mt-1 mr-2"></i>${feature}`;
      featuresContainer.appendChild(li);
    });
    
    // 更新技术参数
    const specsContainer = document.getElementById('productSpecs');
    specsContainer.innerHTML = '';
    Object.entries(product.specs).forEach(([key, value]) => {
      const tr = document.createElement('tr');
      tr.className = 'border-b border-neutral-200 hover:bg-neutral-50 transition-all-300';
      tr.innerHTML = `
        <td class="py-3 px-4 text-neutral-700 font-medium">${key}</td>
        <td class="py-3 px-4 text-neutral-600">${value}</td>
      `;
      specsContainer.appendChild(tr);
    });
    
    // 加载相关产品
    loadRelatedProducts(product.category, product.id);
  }

  // 加载相关产品