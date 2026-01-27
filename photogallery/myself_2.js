// すべての画像要素を取得
const images = document.querySelectorAll('.marquee-inner-stop img');
const marqueeInners = document.querySelectorAll('.marquee-inner-stop');

// 各画像にホバーイベントを追加
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    // すべての .marquee-inner-stop のアニメーションを停止
    marqueeInners.forEach(marqueeInner => {
      marqueeInner.classList.add('marquee-paused');
    });
  });

  img.addEventListener('mouseleave', () => {
    // すべての .marquee-inner-stop のアニメーションを再開
    marqueeInners.forEach(marqueeInner => {
      marqueeInner.classList.remove('marquee-paused');
    });
  });
});