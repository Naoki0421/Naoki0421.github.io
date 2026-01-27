// タップで画像を切り替える機能
const imgHovers = document.querySelectorAll('.img-hover');

imgHovers.forEach(imgHover => {
  // タップ（クリック）イベント
  imgHover.addEventListener('click', () => {
    imgHover.classList.toggle('active');
  });

  // タッチデバイス用の最適化
  imgHover.addEventListener('touchstart', (e) => {
    // デフォルトの動作を防止して、スムーズなタップを実現
    e.preventDefault();
    imgHover.classList.toggle('active');
  }, { passive: false });
});