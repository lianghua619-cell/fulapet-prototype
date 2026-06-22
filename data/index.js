// 首页数据
const indexData = {
  // 品牌信息
  brand: {
    name: '福拉呼啦',
    nameEn: 'FulaFla Pets',
    slogan: '对生命的温柔守护',
    description: '从公益救助经验出发，把毛孩子安排妥当。'
  },

  // 服务列表
  services: [
    {
      id: 'escort',
      icon: '医',
      iconColor: 'blue',
      title: '宠物医疗陪护',
      description: '协助就医、流程沟通、诊后反馈',
      tag: '流程陪护',
      link: 'service.html#escort'
    },
    {
      id: 'home',
      icon: '家',
      iconColor: 'green',
      title: '宠物上门服务',
      description: '喂食换水、清洁陪伴、状态反馈',
      tag: '到家照护',
      link: 'service.html#home'
    },
    {
      id: 'boarding',
      icon: '寄',
      iconColor: 'blue',
      title: '宠物寄养服务',
      description: '日常喂养、健康观察、照片反馈',
      tag: '安心寄养',
      link: 'service.html#boarding'
    }
  ],

  // 品牌数据
  stats: [
    { value: '500+', label: '救助与领养' },
    { value: '8年', label: '公益救助' },
    { value: '3类', label: '核心服务' },
    { value: 'SOP', label: '服务流程' }
  ],

  // 品牌故事
  story: {
    title: '因为懂得，所以守护',
    description: '用标准化服务承接日常照护，也让以商养善持续发生。',
    image: 'assets/images/welfare/team-welfare-1.jpg',
    link: 'brand.html'
  },

  // 服务剪影
  gallery: [
    {
      image: 'assets/images/welfare/rescue-1.jpg',
      title: '救助与领养回访',
      link: 'activity.html'
    },
    {
      image: 'assets/images/service-medical/escort-1.jpg',
      title: '陪护与上门记录',
      link: 'activity.html'
    },
    {
      image: 'assets/images/service-boarding/boarding-1.jpg',
      title: '场地与日常照护',
      link: 'activity.html'
    }
  ]
};
