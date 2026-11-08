import { QuartzComponentConstructor } from "./types"

export default (() => {
  function ArchiveMedia() {
    return <dialog class="archive-lightbox" aria-label="查看原始图片">
      <button type="button" class="lightbox-close" aria-label="关闭大图">关闭 ×</button>
      <img alt="" /><p class="lightbox-caption" />
    </dialog>
  }
  ArchiveMedia.afterDOMLoaded = `(() => {
    const setup = () => {
      const dialog = document.querySelector('.archive-lightbox');
      if (!dialog || dialog.dataset.ready) return;
      dialog.dataset.ready = 'true';
      let trigger;
      document.addEventListener('click', (event) => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        const target = event.target.closest('a.case-image-link');
        if (!target || !dialog.showModal) return;
        const image = target.querySelector('img');
        if (!image) return;
        event.preventDefault(); trigger = target;
        dialog.querySelector('img').src = image.currentSrc || target.href;
        dialog.querySelector('img').alt = image.alt;
        dialog.querySelector('.lightbox-caption').textContent = target.closest('figure')?.querySelector('figcaption')?.textContent || image.alt;
        dialog.showModal();
      });
      dialog.querySelector('button').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener('close', () => { trigger?.focus(); });
    };
    setup(); document.addEventListener('nav', setup);
  })();`
  return ArchiveMedia
}) satisfies QuartzComponentConstructor
