(function () {
  const initializeGifLoop = (logo) => {
    const gifSrc = logo.dataset.gifSrc || logo.src;
    const playDuration = parseInt(logo.dataset.gifDuration, 10) || 3000;
    const pauseDuration = parseInt(logo.dataset.gifPause, 10) || 5000;

    // Crear un canvas para mostrar el primer frame como imagen estática
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Crear una imagen temporal para obtener el primer frame
    const tempImg = new Image();
    tempImg.onload = function() {
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      ctx.drawImage(this, 0, 0);
      
      const staticFrame = canvas.toDataURL();
      
      const playOnce = () => {
        // Reproducir el GIF
        logo.src = `${gifSrc}?cb=${Date.now()}`;
        clearTimeout(logo._pauseTimeout);
        
        // Después de la duración de reproducción, mostrar el frame estático
        logo._pauseTimeout = setTimeout(() => {
          logo.src = staticFrame;
          // Esperar el tiempo de pausa antes de reproducir nuevamente
          logo._resumeTimeout = setTimeout(playOnce, pauseDuration);
        }, playDuration);
      };

      playOnce();
    };
    
    tempImg.src = gifSrc;
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-gif-loop]').forEach(initializeGifLoop);
  });
})();
