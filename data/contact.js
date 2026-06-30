// 咨询页数据 — 数据驱动表单渲染
const contactData = {
  // 页面头部
  header: {
    title: '咨询服务',
    description: '告诉我们宠物类型、服务时间、所在区域和具体需求，客服会协助判断合适的照护方式。'
  },

  // Hero 区
  hero: {
    badge: '微信咨询',
    title: '把宠物情况说清楚，服务安排更准确',
    description: '适合咨询宠物医疗陪护、上门服务、寄养、机构合作等需求。'
  },

  // 智能表格 webhook
  webhook: 'https://qyapi.weixin.qq.com/cgi-bin/wedoc/smartsheet/webhook?key=3qieeJIZqrrKaJ24oixJfGvV6M2sKMjoBAUj3EsHctoh9peTf9pvJy32iVe6L1fdLzQOMLPMRoLqYnxG9Pxtt70AW1rghDfyq18Y2w5pEB9v',

  // 订单状态
  orderStatus: '咨询中',

  // 需求类型配置
  demandTypes: [
    {
      key: 'door',
      label: '宠物上门服务',
      code: 'SM',
      serviceOptions: ['上门喂猫', '上门喂狗', '上门逗狗'],
      typeSection: '宠物上门服务信息',
      fields: [
        { name: '上门地址', type: 'text', placeholder: '请输入上门地址', required: true },
        { name: '具体单元门号', type: 'text', placeholder: '如：3栋2单元1801', required: true, sheetId: 'f3YTGu' },
        { name: '电梯还是楼梯', type: 'radio', options: ['电梯', '楼梯'], required: true, sheetId: 'fmK0Nj' },
        { name: '是否有实时监控', type: 'radio', options: ['是', '否'], required: true, sheetId: 'fz7elL' }
      ]
    },
    {
      key: 'care',
      label: '陪护需求',
      code: 'PH',
      serviceOptions: ['陪护'],
      typeSection: '陪护信息',
      fields: [
        { name: '预约就诊内容', type: 'checkbox', options: ['初次就诊', '针灸', '输液', '激光', '其他'], required: false, sheetId: 'fGnrtq' },
        { name: '预约预留电话', type: 'tel', placeholder: '请输入预约电话', required: true, sheetId: 'fM5S4w' },
        { name: '预约就诊医生', type: 'text', placeholder: '请输入医生姓名', required: false, sheetId: 'fthG70' }
      ]
    },
    {
      key: 'boarding',
      label: '寄养需求',
      code: 'JY',
      serviceOptions: ['寄养'],
      typeSection: '寄养信息',
      fields: [
        { name: '出发接宠电话', type: 'tel', placeholder: '请输入电话号码', required: true, sheetId: 'fCQiDW' },
        { name: '到达接宠电话', type: 'tel', placeholder: '请输入电话号码', required: true, sheetId: 'fFtyGc' }
      ]
    }
  ],

  // 通用字段 — 客户信息
  customerFields: [
    { name: '客户姓名', type: 'text', placeholder: '请输入您的姓名', required: false, sheetId: 'f0c3AD' },
    { name: '联系电话', type: 'tel', placeholder: '请输入电话号码', required: true, sheetId: 'fB6MuT' }
  ],

  // 通用字段 — 宠物信息
  petFields: [
    { name: '宠物姓名', type: 'text', placeholder: '请输入宠物名字', required: true, sheetId: 'fHkZyU' },
    { name: '种类', type: 'radio', options: ['狗狗', '猫猫', '其他'], required: true, sheetId: 'fTSWOK' },
    { name: '品种', type: 'text', placeholder: '如：布偶、柯基、金毛等', required: true, sheetId: 'fKQio3' },
    { name: '宠物年龄', type: 'number', placeholder: '如：2', required: false, sheetId: 'fSRuci' },
    { name: '性别', type: 'radio', options: ['弟弟', '妹妹'], required: false, sheetId: 'fTdpzb' },
    { name: '宠物体重', type: 'number', placeholder: '请输入体重(kg)', required: false, sheetId: 'fUTk2d' },
    { name: '是否绝育', type: 'radio', options: ['是', '否'], required: false, sheetId: 'fWxzQt' },
    { name: '是否打疫苗', type: 'radio', options: ['是', '否'], required: true, sheetId: 'fZQCtW' },
    { name: '是否怀孕', type: 'radio', options: ['是', '否'], required: true, sheetId: 'fcm97v' },
    { name: '性格特点', type: 'checkbox', options: ['E，外向', 'I,内向', '爱社交', '不爱社交', '有攻击性，要注意', '无攻击性'], required: true, sheetId: 'fboYCn' }
  ],

  // 通用字段 — 服务信息
  serviceFields: [
    { name: '服务时间开始', type: 'datetime', required: true, sheetId: 'fiTHZL' },
    { name: '服务时间结束', type: 'datetime', required: true, sheetId: 'fihycQ' },
    { name: '其他备注', type: 'textarea', placeholder: '注意事项等，如有多只请备注，性格特别请注明', required: false, sheetId: 'fz1CpN' }
  ],

  // 客户反馈
  feedback: [
    { image: 'assets/images/reviews/survey-1.jpg', imageAlt: '客户满意度调查反馈', description: '满意度调查与服务反馈记录' },
    { image: 'assets/images/reviews/survey-2.jpg', imageAlt: '客户服务满意度反馈', description: '用于展示服务过程的真实反馈' }
  ],

  // 机构合作
  partners: {
    title: '机构合作',
    description: '面向宠物医院、宠物门店、宠物咖啡、救助组织与社区合作伙伴，提供陪护、上门服务、寄养等合作沟通。',
    chips: ['宠物医院', '宠物门店', '宠物咖啡', '救助组织', '社区服务']
  }
};
