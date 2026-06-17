(() => {
  const isPreviewableSrc = src => !!src && src.includes('assets/images/');
  const normalize = src => new URL(src, location.href).pathname.split('/').pop();
  const parseItems = raw => (raw || '')
    .split('|')
    .map(src => src.trim())
    .filter(Boolean)
    .map(src => ({ src }));

  let overlay;
  let previewImage;
  let titleEl;
  let counterEl;
  let prevBtn;
  let nextBtn;
  let closeBtn;
  let currentItems = [];
  let currentIndex = 0;
  let touchStartX = 0;
  let touchStartY = 0;

  function ensureOverlay() {
    if (overlay) return;
    overlay = document.createElement('div');
    overlay.className = 'fp-preview';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
      <div class="fp-preview__panel" role="dialog" aria-modal="true" aria-label="图片预览">
        <div class="fp-preview__top">
          <div class="fp-preview__title"></div>
          <button class="fp-preview__close" type="button" aria-label="关闭图片预览">×</button>
        </div>
        <div class="fp-preview__stage">
          <button class="fp-preview__nav fp-preview__prev" type="button" aria-label="上一张">‹</button>
          <img class="fp-preview__image" alt="">
          <button class="fp-preview__nav fp-preview__next" type="button" aria-label="下一张">›</button>
        </div>
        <div class="fp-preview__bottom"></div>
      </div>`;
    document.body.appendChild(overlay);
    previewImage = overlay.querySelector('.fp-preview__image');
    titleEl = overlay.querySelector('.fp-preview__title');
    counterEl = overlay.querySelector('.fp-preview__bottom');
    prevBtn = overlay.querySelector('.fp-preview__prev');
    nextBtn = overlay.querySelector('.fp-preview__next');
    closeBtn = overlay.querySelector('.fp-preview__close');

    closeBtn.addEventListener('click', closePreview);
    prevBtn.addEventListener('click', event => { event.stopPropagation(); showAt(currentIndex - 1); });
    nextBtn.addEventListener('click', event => { event.stopPropagation(); showAt(currentIndex + 1); });
    overlay.addEventListener('click', event => { if (event.target === overlay) closePreview(); });
    overlay.addEventListener('touchstart', event => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }, { passive: true });
    overlay.addEventListener('touchend', event => {
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) {
        showAt(dx < 0 ? currentIndex + 1 : currentIndex - 1);
      }
    }, { passive: true });
  }

  function decorateImages() {
    document.querySelectorAll('img').forEach(img => {
      if (isPreviewableSrc(img.getAttribute('src'))) img.classList.add('image-preview-trigger');
    });
  }

  function getItemsFromContainer(container) {
    const items = parseItems(container.getAttribute('data-preview-items'));
    const title = container.getAttribute('data-preview-title') || container.getAttribute('data-title') || '图片预览';
    return items.map(item => ({ ...item, title }));
  }

  function getItemsFromContext(img) {
    const context = img.closest('.photo-row, .proof-grid, .case-row, .activity-grid');
    const images = context ? [...context.querySelectorAll('img')] : [img];
    return images
      .filter(item => isPreviewableSrc(item.getAttribute('src')))
      .map(item => ({ src: item.getAttribute('src'), title: item.getAttribute('alt') || '图片预览' }));
  }

  function openPreview(items, startIndex = 0, title = '') {
    ensureOverlay();
    currentItems = items.filter(item => item && item.src);
    if (!currentItems.length) return;
    currentIndex = Math.max(0, Math.min(startIndex, currentItems.length - 1));
    overlay.dataset.single = currentItems.length <= 1 ? 'true' : 'false';
    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    showAt(currentIndex, title);
  }

  function showAt(index, fallbackTitle = '') {
    if (!currentItems.length) return;
    currentIndex = (index + currentItems.length) % currentItems.length;
    const item = currentItems[currentIndex];
    previewImage.src = item.src;
    previewImage.alt = item.title || fallbackTitle || '图片预览';
    titleEl.textContent = item.title || fallbackTitle || '图片预览';
    counterEl.textContent = `${currentIndex + 1} / ${currentItems.length}`;
  }

  function closePreview() {
    if (!overlay) return;
    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    previewImage.removeAttribute('src');
  }

  function findStartIndex(items, image) {
    if (!image) return 0;
    const imageKey = normalize(image.getAttribute('src'));
    const index = items.findIndex(item => normalize(item.src) === imageKey);
    return index >= 0 ? index : 0;
  }

  function bindEvents() {
    document.addEventListener('click', event => {
      const albumCard = event.target.closest('.activity-card[data-preview-items]');
      if (albumCard) {
        event.preventDefault();
        const image = event.target.closest('img');
        const items = getItemsFromContainer(albumCard);
        openPreview(items, findStartIndex(items, image), albumCard.getAttribute('data-preview-title') || albumCard.dataset.title || '相册预览');
        return;
      }

      const img = event.target.closest('img');
      if (!img || !isPreviewableSrc(img.getAttribute('src'))) return;
      const container = img.closest('[data-preview-items]');
      if (container) {
        event.preventDefault();
        const items = getItemsFromContainer(container);
        openPreview(items, findStartIndex(items, img), container.getAttribute('data-preview-title') || img.getAttribute('alt') || '图片预览');
        return;
      }
      event.preventDefault();
      const items = getItemsFromContext(img);
      openPreview(items, findStartIndex(items, img), img.getAttribute('alt') || '图片预览');
    });

    document.addEventListener('keydown', event => {
      if (!overlay || !overlay.classList.contains('show')) return;
      if (event.key === 'Escape') closePreview();
      if (event.key === 'ArrowLeft') showAt(currentIndex - 1);
      if (event.key === 'ArrowRight') showAt(currentIndex + 1);
    });
  }

  function init() {
    decorateImages();
    bindEvents();
  }

  window.FulaPreview = { open: openPreview, close: closePreview };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
