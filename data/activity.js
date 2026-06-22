// 动态页数据
const activityData = {
  // 页面标题
  header: {
    title: '公益与服务记录',
    description: '记录救助回访、服务现场、寄养环境与合作交流，让善意和专业被看见。'
  },

  // 筛选标签
  filters: [
    { id: 'all', label: '全部', active: true },
    { id: 'welfare', label: '公益救助', active: false },
    { id: 'service', label: '服务现场', active: false },
    { id: 'cooperation', label: '合作交流', active: false }
  ],

  // 精选卡片
  featured: {
    image: 'assets/images/welfare/team-welfare-2.jpg',
    imageAlt: '福拉呼啦公益行动记录',
    tag: '8年公益救助背景',
    title: '救助，从来不是口号',
    description: '坚持救助与领养回访 500+ 毛孩子，把对生命的爱护延伸到日常照护服务中。'
  },

  // 动态相册
  activities: [
    {
      id: 'rescue',
      kind: 'welfare',
      image: 'assets/images/welfare/rescue-1.jpg',
      imageAlt: '公益救助记录',
      tag: '公益救助',
      title: '公益救助记录',
      description: '记录救助、安置与回访过程。',
      previewItems: [
        'assets/images/welfare/rescue-1.jpg',
        'assets/images/welfare/rescue-2.jpg',
        'assets/images/welfare/volunteer-1.jpg',
        'assets/images/welfare/volunteer-2.jpg',
        'assets/images/welfare/team-welfare-1.jpg',
        'assets/images/welfare/team-welfare-2.jpg',
        'assets/images/welfare/event-1.jpg',
        'assets/images/welfare/event-2.jpg'
      ]
    },
    {
      id: 'medical',
      kind: 'service',
      image: 'assets/images/service-medical/escort-3.jpg',
      imageAlt: '医疗陪护现场',
      tag: '服务现场',
      title: '医疗陪护现场',
      description: '陪同就医与诊后反馈记录。',
      previewItems: [
        'assets/images/service-medical/escort-1.jpg',
        'assets/images/service-medical/escort-2.jpg',
        'assets/images/service-medical/escort-3.jpg',
        'assets/images/service-medical/car-1.jpg',
        'assets/images/service-medical/car-2.jpg'
      ]
    },
    {
      id: 'home-visit',
      kind: 'service',
      image: 'assets/images/service-home/cat-visit-3.jpg',
      imageAlt: '上门照护反馈',
      tag: '服务现场',
      title: '上门照护反馈',
      description: '喂食、清洁、陪伴与状态观察。',
      previewItems: [
        'assets/images/service-home/cat-visit-1.jpg',
        'assets/images/service-home/cat-visit-2.jpg',
        'assets/images/service-home/cat-visit-3.jpg',
        'assets/images/service-home/dog-walk-1.jpg',
        'assets/images/service-home/dog-walk-2.jpg'
      ]
    },
    {
      id: 'boarding',
      kind: 'service',
      image: 'assets/images/service-boarding/boarding-2.jpg',
      imageAlt: '寄养环境展示',
      tag: '服务现场',
      title: '寄养环境展示',
      description: '寄养场地与日常照护展示。',
      previewItems: [
        'assets/images/service-boarding/boarding-1.jpg',
        'assets/images/service-boarding/boarding-2.jpg',
        'assets/images/service-boarding/boarding-3.jpg'
      ]
    },
    {
      id: 'partner',
      kind: 'cooperation',
      image: 'assets/images/brand/team-partner.jpg',
      imageAlt: '合作交流记录',
      tag: '合作交流',
      title: '合作交流记录',
      description: '宠物医院、门店与组织合作。',
      previewItems: [
        'assets/images/brand/team-partner.jpg',
        'assets/images/brand/team-1.jpg',
        'assets/images/brand/team-2.jpg'
      ]
    },
    {
      id: 'adoption',
      kind: 'welfare',
      image: 'assets/images/welfare/event-1.jpg',
      imageAlt: '领养回访记录',
      tag: '公益救助',
      title: '领养回访记录',
      description: '关注领养后的生活状态。',
      previewItems: [
        'assets/images/welfare/event-1.jpg',
        'assets/images/welfare/event-2.jpg',
        'assets/images/welfare/rescue-1.jpg',
        'assets/images/welfare/rescue-2.jpg'
      ]
    }
  ]
};
