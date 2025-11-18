(function () {
  const initializeGifLoop = (logo) => {
    const gifSrc = logo.dataset.gifSrc || logo.src;
    const stillSrc = logo.dataset.gifStill || gifSrc;
    const playDuration = parseInt(logo.dataset.gifDuration, 10) || 3000;
    const pauseDuration = parseInt(logo.dataset.gifPause, 10) || 5000;

    const playOnce = () => {
      logo.src = `${gifSrc}?cb=${Date.now()}`;
      clearTimeout(logo._pauseTimeout);
      logo._pauseTimeout = setTimeout(() => {
        logo.src = stillSrc;
        logo._resumeTimeout = setTimeout(playOnce, pauseDuration);
      }, playDuration);
    };

    playOnce();
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-gif-loop]').forEach(initializeGifLoop);
  });
})();
