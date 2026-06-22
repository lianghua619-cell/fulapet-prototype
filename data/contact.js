// 咨询页数据
const contactData = {
  // 页面标题
  header: {
    title: '咨询服务',
    description: '告诉我们宠物类型、服务时间、所在区域和具体需求，客服会协助判断合适的照护方式。'
  },

  // Hero区
  hero: {
    badge: '微信咨询',
    title: '把宠物情况说清楚，服务安排更准确',
    description: '适合咨询宠物医疗陪护、上门服务、寄养、机构合作等需求。'
  },

  // 咨询时请提供
  checklist: [
    { label: '宠物类型', value: '猫 / 狗 / 其他' },
    { label: '服务类型', value: '医疗陪护 / 上门 / 寄养' },
    { label: '服务时间', value: '日期、时段、预计时长' },
    { label: '所在区域', value: '成都具体地址或片区' },
    { label: '宠物情况', value: '年龄、体重、性格、健康状态' },
    { label: '特殊需求', value: '喂药、接送、多宠、护理等' }
  ],

  // 客户反馈
  feedback: [
    {
      image: 'assets/images/reviews/survey-1.jpg',
      imageAlt: '客户满意度调查反馈',
      description: '满意度调查与服务反馈记录'
    },
    {
      image: 'assets/images/reviews/survey-2.jpg',
      imageAlt: '客户服务满意度反馈',
      description: '用于展示服务过程的真实反馈'
    }
  ],

  // 机构合作
  partners: {
    title: '机构合作',
    description: '面向宠物医院、宠物门店、宠物咖啡、救助组织与社区合作伙伴，提供陪护、上门服务、寄养等合作沟通。',
    chips: ['宠物医院', '宠物门店', '宠物咖啡', '救助组织', '社区服务']
  },

  // 服务流程
  process: [
    { step: 1, title: '添加客服微信', description: '通过微信说明宠物情况与服务需求。' },
    { step: 2, title: '说明宠物情况', description: '提供服务时间、地点、宠物性格与健康状态。' },
    { step: 3, title: '沟通服务方案', description: '客服根据宠物情况、服务时间与所在区域协助判断。' },
    { step: 4, title: '确认服务安排', description: '服务前建立沟通群，同步注意事项与准备内容。' },
    { step: 5, title: '服务开始并反馈', description: '服务中与服务后同步照片、视频或文字反馈。' }
  ]
};
