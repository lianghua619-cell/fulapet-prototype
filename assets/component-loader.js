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
        <a href="brand.html"><span class="tab-icon">品</span><span>品牌</span></a>
        <a href="service.html"><span class="tab-icon">服</span><span>服务</span></a>
        <a href="activity.html"><span class="tab-icon">动</span><span>动态</span></a>
        <a href="contact.html"><span class="tab-icon">联</span><span>咨询</span></a>
      </nav>
    `,
    'float-contact': `
      <a class="float-contact" href="contact.html">咨询</a>
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
    // 加载topbar
    this.load('topbar', 'topbar-container');

    // 加载tabbar
    this.load('tabbar', 'tabbar-container');

    // 加载float-contact（非咨询页）
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
});
