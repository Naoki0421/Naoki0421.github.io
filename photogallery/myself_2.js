// タップで画像を切り替える機能
const imgHovers = document.querySelectorAll('.img-hover');

imgHovers.forEach(imgHover => {
  // クリック/タップイベント（両方のデバイスに対応）
  imgHover.addEventListener('click', () => {
    imgHover.classList.toggle('active');
  });
});