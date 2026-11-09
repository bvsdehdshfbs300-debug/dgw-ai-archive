(() => {
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
        const fullImage = target.classList.contains('gallery-full') ? target.href : (image.currentSrc || target.href);
        dialog.querySelector('img').src = fullImage;
        dialog.querySelector('.lightbox-original').href = fullImage;
        dialog.querySelector('img').alt = image.alt;
        dialog.querySelector('.lightbox-caption').textContent = target.closest('figure')?.querySelector('figcaption')?.textContent || image.alt;
        dialog.showModal();
      });
      dialog.querySelector('button').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener('close', () => { trigger?.focus(); });
    };
    setup(); document.addEventListener('nav', setup);
  })();