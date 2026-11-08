(() => {
    const initialize = () => {
      const shell = document.querySelector('.archive-nav-shell');
      if (shell) shell.open = window.matchMedia('(min-width: 801px)').matches;
    };
    initialize(); document.addEventListener('nav', initialize);
  })();