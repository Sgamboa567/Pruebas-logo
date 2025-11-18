(function () {
  const initializeGifLoop = (logo) => {
    const gifSrc = logo.dataset.gifSrc || logo.src;
    const placeholderSrc = logo.dataset.gifStill;
    const playDuration = parseInt(logo.dataset.gifDuration, 10) || 3000;
    const pauseDuration = parseInt(logo.dataset.gifPause, 10) || 5000;

    const showPlaceholder = () => {
      if (placeholderSrc) {
        logo.src = placeholderSrc;
        logo.style.visibility = '';
      } else {
        logo.removeAttribute('src');
        logo.style.visibility = 'hidden';
      }
    };

    const playOnce = () => {
      logo.style.visibility = '';
      logo.src = `${gifSrc}?cb=${Date.now()}`;
      clearTimeout(logo._pauseTimeout);
      logo._pauseTimeout = setTimeout(() => {
        showPlaceholder();
        logo._resumeTimeout = setTimeout(playOnce, pauseDuration);
      }, playDuration);
    };

    playOnce();
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-gif-loop]').forEach(initializeGifLoop);
  });
})();
