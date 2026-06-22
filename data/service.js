// 服务页数据
const serviceData = {
  // 页面标题
  header: {
    title: '服务介绍',
    description: '从公益救助经验出发，先了解宠物情况，再沟通合适的照护安排。'
  },

  // 快速导航标签
  tabs: [
    { id: 'value', label: '服务价值', active: true },
    { id: 'scenarios', label: '适用场景', active: false },
    { id: 'services', label: '主营业务', active: false },
    { id: 'process', label: '服务流程', active: false }
  ],

  // 服务价值
  values: [
    {
      icon: '沟',
      iconColor: 'blue',
      title: '服务前充分沟通',
      description: '先了解宠物性格、健康状态、服务时间与所在区域。'
    },
    {
      icon: '护',
      iconColor: 'green',
      title: '照护过程有反馈',
      description: '通过照片、视频或文字同步关键节点，让主人更安心。'
    },
    {
      icon: '准',
      iconColor: 'blue',
      title: '标准流程执行',
      description: '围绕陪护、上门、寄养等场景建立清晰服务流程。'
    },
    {
      icon: '善',
      iconColor: 'green',
      title: '公益救助背景',
      description: '长期接触不同性格宠物，更理解照护中的细节。'
    }
  ],

  // 适用场景
  scenarios: [
    '工作日无法陪同宠物就医',
    '出差旅行期间需要上门照护',
    '节假日或短期外出需要寄养',
    '多宠家庭需要临时支持',
    '主人异地，需要过程反馈',
    '宠物性格特殊，需要提前沟通'
  ],

  // 主营业务
  services: [
    {
      id: 'escort',
      label: '宠物医疗陪护',
      title: '医疗陪护与就诊协助',
      description: '主人不方便到院时，协助完成就医陪护、流程沟通和诊后反馈。',
      tag: '流程陪护',
      photos: [
        { src: 'assets/images/service-medical/escort-1.jpg', alt: '宠物医疗陪护现场' },
        { src: 'assets/images/service-medical/car-1.jpg', alt: '宠物专车接送' },
        { src: 'assets/images/service-medical/escort-2.jpg', alt: '陪护过程反馈记录' }
      ],
      content: [
        '协助挂号、排队、问诊沟通与理疗陪伴',
        '记录检查项目、医嘱和用药注意事项',
        '服务过程通过照片、文字或视频反馈',
        '可沟通宠物专车接送需求'
      ],
      note: '医疗诊断与治疗方案由医院医生提供，重大治疗决策需主人或授权人确认。急诊、夜间或特殊护理建议先联系客服说明情况。'
    },
    {
      id: 'home',
      label: '宠物上门服务',
      title: '上门照护与状态反馈',
      description: '短期外出、出差或加班期间，上门完成基础照护与状态反馈。',
      tag: '到家照护',
      photos: [
        { src: 'assets/images/service-home/cat-visit-1.jpg', alt: '上门喂食换水' },
        { src: 'assets/images/service-home/cat-visit-2.jpg', alt: '上门清洁整理' },
        { src: 'assets/images/service-home/dog-walk-1.jpg', alt: '上门遛狗互动' }
      ],
      content: [
        '喂食换水，清洗餐盆与水碗',
        '清理猫砂或基础环境整理，根据需求开窗通风',
        '简单陪伴互动，观察精神与食欲',
        '照片、视频或文字反馈服务情况'
      ],
      note: '钥匙、门禁与入户方式需提前确认。喂药、护理、多宠或异宠家庭建议提前说明，便于判断服务安排。'
    },
    {
      id: 'boarding',
      label: '宠物寄养服务',
      title: '寄养照护与每日反馈',
      description: '假期、短期外出或过渡照护时，为宠物提供日常喂养与状态反馈。',
      tag: '安心寄养',
      photos: [
        { src: 'assets/images/service-boarding/boarding-1.jpg', alt: '寄养环境展示' },
        { src: 'assets/images/service-boarding/boarding-2.jpg', alt: '寄养日常喂养' },
        { src: 'assets/images/service-boarding/boarding-3.jpg', alt: '寄养户外活动' }
      ],
      content: [
        '每日喂养、清洁消毒与状态观察',
        '记录精神状态、食欲、排便排尿情况',
        '照片或视频反馈，便于主人了解状态',
        '可沟通门到门接送和营养餐需求'
      ],
      note: '寄养前需了解疫苗、健康状态与性格情况。攻击性、传染病或特殊护理需求需提前评估。'
    }
  ],

  // 服务流程
  process: [
    { step: 1, title: '添加客服微信', description: '通过微信说明宠物情况与服务需求。' },
    { step: 2, title: '说明宠物情况', description: '提供服务时间、地点、宠物性格与健康状态。' },
    { step: 3, title: '沟通服务方案', description: '客服根据宠物情况、服务时间与所在区域协助判断。' },
    { step: 4, title: '确认服务安排', description: '服务前建立沟通群，同步注意事项与准备内容。' },
    { step: 5, title: '服务开始并反馈', description: '服务中与服务后同步照片、视频或文字反馈。' }
  ]
};
