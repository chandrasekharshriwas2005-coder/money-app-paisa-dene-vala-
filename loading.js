// 10 seconds loading progress with animation and redirect
document.addEventListener('DOMContentLoaded', () => {
  const totalMB = 2.72;
  const startMB = 0.00;
  const endMB = 2.15;
  const duration = 10 * 1000; // 10 seconds
  const progressBar = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');

  const start = Date.now();
  function update() {
    const elapsed = Date.now() - start;
    let percent = Math.min((elapsed / duration), 1);
    let currentMB = startMB + percent * (endMB - startMB);
    let progressVal = Math.floor(percent * 100);
    if (percent < 1) {
      progressBar.style.width = `${progressVal}%`;
      progressText.textContent = `${progressVal}% (${currentMB.toFixed(2)}MB/${totalMB}MB)`;
      requestAnimationFrame(update);
    } else {
      progressBar.style.width = `100%`;
      progressText.textContent = `100% (${endMB.toFixed(2)}MB/${totalMB}MB)`;
      setTimeout(() => {
        // Forcefully redirect - multiple methods
        window.location.replace('dashboard.html');
        window.location.href = 'dashboard.html';
        setTimeout(function() {
          window.location.href = 'dashboard.html';
        }, 100);
      }, 800); // Small delay to let progress bar fill
    }
  }
  update();
});
