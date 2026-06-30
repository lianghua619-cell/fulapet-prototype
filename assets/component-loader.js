// 组件加载器
const ComponentLoader = {
  getBasePath() {
    const href = window.location.href;
    if (href.includes('/detail') || href.includes('\\detail')) {
      return '../';
    }
    return '';
  },

  load(componentName, targetId) {
    const base = this.getBasePath();
    const html = this.components[componentName](base);
    if (!html) return false;
    const target = document.getElementById(targetId);
    if (target) {
      target.innerHTML = html;
      return true;
    }
    return false;
  },

  components: {
    topbar: (base) => `
      <header class="topbar">
        <a class="brand-lockup" href="${base}index.html" aria-label="福拉呼啦 FulaFla Pets">
          <img class="top-logo" src="${base}assets/logo-white-processed.png" alt="福拉呼啦 FulaFla Pets">
        </a>
        <img class="top-slogan" src="${base}assets/logo-text-white.png" alt="有爱有陪伴更安心">
      </header>
    `,
    tabbar: (base) => `
      <nav class="tabbar">
        <a href="${base}index.html"><span class="tab-icon">首</span><span>首页</span></a>
        <a href="${base}company.html"><span class="tab-icon">公</span><span>公司介绍</span></a>
        <a href="${base}activity.html"><span class="tab-icon">动</span><span>近期活动</span></a>
      </nav>
    `,
    'float-contact': (base) => `
      <a class="float-contact" href="javascript:void(0)" id="float-wechat-btn">咨询</a>
      <div class="wechat-modal-mask" id="wechat-modal-mask" style="display:none;position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.5);justify-content:center;align-items:center;">
        <div style="background:#fff;border-radius:16px;padding:20px;text-align:center;max-width:300px;position:relative;">
          <button onclick="document.getElementById('wechat-modal-mask').style.display='none'" style="position:absolute;top:8px;right:12px;border:none;background:none;font-size:20px;cursor:pointer;color:#999;">&times;</button>
          <img src="${base}assets/weixin.jpg" alt="企业微信二维码" style="width:200px;border-radius:12px;">
          <p style="margin-top:10px;font-size:12px;color:#666;">长按识别二维码添加客服</p>
        </div>
      </div>
    `
  },

  loadCommonComponents() {
    this.load('tabbar', 'tabbar-container');
    const floatContactContainer = document.getElementById('float-contact-container');
    if (floatContactContainer) {
      this.load('float-contact', 'float-contact-container');
    }
  },

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

// 立即执行，不依赖DOMContentLoaded
ComponentLoader.loadCommonComponents();
const floatBtn = document.getElementById('float-wechat-btn');
const floatModal = document.getElementById('wechat-modal-mask');
if (floatBtn && floatModal) {
  floatBtn.addEventListener('click', () => { floatModal.style.display = 'flex'; });
}
