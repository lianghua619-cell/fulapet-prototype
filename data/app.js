// ========================================
// 小程序数据层 — 3 页结构
// ========================================

// ---- 公司介绍页 ----
const companyData = {
  hero: {
    image: 'assets/images/brand/team-1.jpg',
    imageAlt: '福拉呼啦服务团队合影',
    badge: 'FulaFla Pets',
    title: '对生命的温柔守护',
    description: '您托付的不只是宠物，更是家人与心底的牵挂。福拉呼啦希望用稳定、清晰、可反馈的服务流程，守护每一个生命。'
  },
  intro: {
    title: '关于福拉呼啦',
    paragraphs: [
      '福拉呼啦从公益救助经验出发，把毛孩子安排妥当。',
      '用标准化服务承接日常照护，也让以商养善持续发生。'
    ]
  },
  stats: [
    { value: '500+', label: '救助与领养' },
    { value: '8年', label: '公益救助背景' },
    { value: '3类', label: '核心照护服务' },
    { value: 'SOP', label: '标准化流程' }
  ],
  team: {
    image: 'assets/images/brand/team-2.jpg',
    imageAlt: '福拉呼啦团队现场记录',
    roles: [
      { title: '服务沟通', description: '确认需求、服务范围与照护建议。' },
      { title: '照护执行', description: '按约定流程进行陪护、上门或寄养照护。' },
      { title: '过程反馈', description: '同步关键节点，异常情况及时沟通。' },
      { title: '公益协作', description: '持续参与救助与正确养宠传播。' }
    ]
  },
  servicesPreview: [
    { icon: '医', title: '宠物医疗陪护', description: '协助就医、流程沟通、诊后反馈' },
    { icon: '家', title: '宠物上门服务', description: '喂食换水、清洁陪伴、状态反馈' },
    { icon: '寄', title: '宠物寄养服务', description: '日常喂养、健康观察、照片反馈' }
  ]
};

// ---- 服务内容页 ----
const servicePageData = {
  values: [
    { icon: '沟', title: '服务前沟通', description: '确认宠物情况、服务时间、地点与特殊需求。' },
    { icon: '护', title: '服务中反馈', description: '关键节点同步照片、视频或文字反馈。' },
    { icon: '准', title: '标准化流程', description: '按 SOP 执行，确保服务质量和可追溯性。' },
    { icon: '善', title: '公益背景', description: '8 年公益救助经验，用专业守护每一个生命。' }
  ],
  scenarios: [
    '工作日带宠就医，主人无法请假',
    '出差/旅行期间，宠物需要上门照护',
    '节假日寄养，需要安心可靠的场地',
    '术后恢复期，需要专业陪护观察',
    '多宠家庭，需要分时段照护',
    '临时突发情况，需要快速响应'
  ],
  services: [
    {
      id: 'escort',
      label: '流程陪护',
      title: '宠物医疗陪护',
      description: '协助就医全流程，从挂号到诊后反馈，让您不在现场也安心。',
      photos: [
        'assets/images/service-medical/escort-1.jpg',
        'assets/images/service-medical/escort-2.jpg',
        'assets/images/service-medical/escort-3.jpg'
      ],
      content: ['协助挂号与候诊', '陪同就诊与沟通', '记录医嘱与用药', '诊后反馈与跟进'],
      note: '请提前确认宠物健康状态，特殊病史请提前告知。'
    },
    {
      id: 'home',
      label: '到家照护',
      title: '宠物上门服务',
      description: '上门喂食、换水、清洁、陪伴，让毛孩子在家也舒适。',
      photos: [
        'assets/images/service-home/home-1.jpg',
        'assets/images/service-home/home-2.jpg',
        'assets/images/service-home/home-3.jpg'
      ],
      content: ['上门喂食与换水', '清理猫砂/便盆', '开窗通风与陪伴', '状态照片反馈'],
      note: '请确保家中有监控或可远程查看，钥匙/门锁请提前沟通。'
    },
    {
      id: 'boarding',
      label: '安心寄养',
      title: '宠物寄养服务',
      description: '提供安全、舒适的寄养环境，日常喂养与健康观察。',
      photos: [
        'assets/images/service-boarding/boarding-1.jpg',
        'assets/images/service-boarding/boarding-2.jpg',
        'assets/images/service-boarding/boarding-3.jpg'
      ],
      content: ['独立空间与日常喂养', '健康状态观察', '每日照片/视频反馈', '异常情况及时沟通'],
      note: '请提供宠物日常饮食习惯与健康状况，疫苗证明请提前备好。'
    }
  ],
  process: [
    { step: 1, title: '添加客服微信', description: '通过微信说明宠物情况与服务需求。' },
    { step: 2, title: '说明宠物情况', description: '提供服务时间、地点、宠物性格与健康状态。' },
    { step: 3, title: '沟通服务方案', description: '客服根据宠物情况、服务时间与所在区域协助判断。' },
    { step: 4, title: '确认服务安排', description: '服务前建立沟通群，同步注意事项与准备内容。' },
    { step: 5, title: '服务开始并反馈', description: '服务中与服务后同步照片、视频或文字反馈。' }
  ],
  partners: {
    title: '机构合作',
    description: '面向宠物医院、宠物门店、宠物咖啡、救助组织与社区合作伙伴。',
    chips: ['宠物医院', '宠物门店', '宠物咖啡', '救助组织', '社区服务']
  },
  feedback: [
    { image: 'assets/images/reviews/survey-1.jpg', description: '满意度调查与服务反馈记录' },
    { image: 'assets/images/reviews/survey-2.jpg', description: '用于展示服务过程的真实反馈' }
  ]
};

// ---- 近期活动页 ----
const activityPageData = {
  filters: ['全部', '公益救助', '服务现场', '合作交流'],
  preview: {
    title: '活动预告',
    note: '更多精彩活动即将上线，敬请期待',
    coming: true
  },
  featured: {
    image: 'assets/images/welfare/team-welfare-2.jpg',
    tag: '8年公益救助背景',
    title: '救助，从来不是口号',
    description: '从第一只被救助的流浪猫开始，福拉呼啦始终相信：每一次行动，都在让世界温柔一点。'
  },
  activities: [
    {
      id: 1,
      kind: '公益救助',
      image: 'assets/images/welfare/rescue-1.jpg',
      title: '流浪猫救助行动',
      description: '联合社区开展流浪猫救助，提供绝育与领养服务。',
      previewItems: [
        { src: 'assets/images/welfare/rescue-1.jpg', alt: '救助现场' },
        { src: 'assets/images/welfare/rescue-2.jpg', alt: '猫咪检查' }
      ]
    },
    {
      id: 2,
      kind: '服务现场',
      image: 'assets/images/service-medical/escort-1.jpg',
      title: '宠物医疗陪护记录',
      description: '全程陪同宠物就医，记录就诊过程与医嘱。',
      previewItems: [
        { src: 'assets/images/service-medical/escort-1.jpg', alt: '陪护现场' },
        { src: 'assets/images/service-medical/escort-2.jpg', alt: '诊后反馈' }
      ]
    },
    {
      id: 3,
      kind: '合作交流',
      image: 'assets/images/brand/team-1.jpg',
      title: '宠物医院合作交流',
      description: '与本地宠物医院建立合作，优化陪护服务流程。',
      previewItems: [
        { src: 'assets/images/brand/team-1.jpg', alt: '合作交流' }
      ]
    },
    {
      id: 4,
      kind: '公益救助',
      image: 'assets/images/welfare/rescue-2.jpg',
      title: '领养回访记录',
      description: '定期回访已领养宠物，确保它们在新家过得好。',
      previewItems: [
        { src: 'assets/images/welfare/rescue-2.jpg', alt: '领养回访' }
      ]
    },
    {
      id: 5,
      kind: '服务现场',
      image: 'assets/images/service-boarding/boarding-1.jpg',
      title: '寄养日常记录',
      description: '展示寄养环境与日常照护流程，让主人安心。',
      previewItems: [
        { src: 'assets/images/service-boarding/boarding-1.jpg', alt: '寄养环境' },
        { src: 'assets/images/service-boarding/boarding-2.jpg', alt: '日常照护' }
      ]
    },
    {
      id: 6,
      kind: '合作交流',
      image: 'assets/images/brand/team-2.jpg',
      title: '社区公益讲座',
      description: '走进社区开展正确养宠知识讲座，传播科学养宠理念。',
      previewItems: [
        { src: 'assets/images/brand/team-2.jpg', alt: '公益讲座' }
      ]
    }
  ]
};
