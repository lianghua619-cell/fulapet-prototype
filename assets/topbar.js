// 顶部栏生成器 - 所有页面共用
(function() {
  var base = window.location.pathname.indexOf('/detail') > -1 ? '../' : '';
  var html = '<header class="topbar">' +
    '<a class="brand-lockup" href="' + base + 'index.html" aria-label="福拉呼啦 FulaFla Pets">' +
    '<img class="top-logo" src="' + base + 'assets/logo-white-processed.png" alt="福拉呼啦 FulaFla Pets">' +
    '</a>' +
    '<img class="top-slogan" src="' + base + 'assets/logo-text-white.png" alt="有爱有陪伴更安心">' +
    '</header>';
  document.write(html);
})();
