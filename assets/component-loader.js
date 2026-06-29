// 组件加载器
// 用于动态加载HTML组件（不依赖服务器）

const ComponentLoader = {
  // 组件HTML定义
  components: {
    topbar: `
      <header class="topbar">
        <a class="brand-lockup" href="index.html" aria-label="福拉呼啦 FulaFla Pets">
          <img class="top-logo" src="assets/logo-white.svg" alt="福拉呼啦 FulaFla Pets">
        </a>
      </header>
    `,
    tabbar: `
      <nav class="tabbar">
        <a href="index.html"><span class="tab-icon">首</span><span>首页</span></a>
        <a href="company.html"><span class="tab-icon">公</span><span>公司介绍</span></a>
        <a href="activity.html"><span class="tab-icon">动</span><span>近期活动</span></a>
      </nav>
    `,
    'float-contact': `
      <a class="float-contact" href="javascript:void(0)" id="float-wechat-btn">咨询</a>
      <div class="wechat-modal-mask" id="wechat-modal-mask" style="display:none;position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.5);justify-content:center;align-items:center;">
        <div style="background:#fff;border-radius:16px;padding:20px;text-align:center;max-width:300px;position:relative;">
          <button onclick="document.getElementById('wechat-modal-mask').style.display='none'" style="position:absolute;top:8px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#999;">&times;</button>
          <img src="assets/weixin.jpg" alt="企业微信二维码" style="width:200px;border-radius:12px;">
          <p style="margin-top:10px;font-size:12px;color:#666;">长按识别二维码添加客服</p>
        </div>
      </div>
    `
  },

  // 加载组件
  load(componentName, targetId) {
    const html = this.components[componentName];
    if (!html) {
      console.error(`Component ${componentName} not found`);
      return false;
    }
    const target = document.getElementById(targetId);
    if (target) {
      target.innerHTML = html;
      return true;
    }
    return false;
  },

  // 加载所有公共组件
  loadCommonComponents() {
    this.load('topbar', 'topbar-container');
    this.load('tabbar', 'tabbar-container');
    const floatContactContainer = document.getElementById('float-contact-container');
    if (floatContactContainer) {
      this.load('float-contact', 'float-contact-container');
    }
  },

  // 设置当前页面active状态
  setActiveTab(pageName) {
    const tabs = document.querySelectorAll('.tabbar a');
    tabs.forEach(tab => {
      const href = tab.getAttribute('href');
      if (href && href.includes(pageName)) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
};

// 页面加载完成后自动加载组件
document.addEventListener('DOMContentLoaded', () => {
  ComponentLoader.loadCommonComponents();
  const floatBtn = document.getElementById('float-wechat-btn');
  const floatModal = document.getElementById('wechat-modal-mask');
  if (floatBtn && floatModal) {
    floatBtn.addEventListener('click', () => { floatModal.style.display = 'flex'; });
  }
});
