/* ===============================================
   宮城県工業高等学校 陸上競技部 共通スクリプト

   全ページがこのファイル1枚を読み込んでいる。
   以前は同じ処理が5ページにコピーされていたので、
   ここにまとめて1か所で直せるようにした。
   =============================================== */

(function () {
  'use strict';

  /* ===============================================
     1. ハンバーガーメニューの開閉
     =============================================== */
  (function setupNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('globalNav');
    var overlay = document.getElementById('navOverlay');

    // ヘッダーが無いページでは何もしない
    if (!toggle || !nav || !overlay) {
      return;
    }

    // メニューを開く／閉じる
    function setMenu(open) {
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
      overlay.hidden = !open;
    }

    toggle.addEventListener('click', function () {
      setMenu(!document.body.classList.contains('nav-open'));
    });

    // 黒幕をタップしたら閉じる
    overlay.addEventListener('click', function () {
      setMenu(false);
    });

    // メニュー内のリンクを押したら、移動と同時に閉じる
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        setMenu(false);
      }
    });

    // Escキーでも閉じる（PC向け）
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setMenu(false);
      }
    });

    // PC幅に広がったら、開いたままの状態を解除する
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        setMenu(false);
      }
    });
  })();

  /* ===============================================
     2. スクロール位置に応じたヘッダーの装飾

     トップページは背面が写真なので、少しスクロールしたら
     白い背景を付けて文字を読みやすくする。
     サブページは最初から白背景（is-solid）なので対象外。
     =============================================== */
  (function setupHeaderScroll() {
    var header = document.getElementById('siteHeader');

    if (!header || header.classList.contains('is-solid')) {
      return;
    }

    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();

  /* ===============================================
     3. 動画の最初のフレームをサムネイルとして表示

     iOS・Android・PCとも、0.1秒地点へシークさせると
     再生前でも1コマ目が見える。真っ黒な四角を並べない
     ための処理。
     =============================================== */
  (function setupVideoPoster() {
    var videos = document.querySelectorAll('video');

    if (videos.length === 0) {
      return;
    }

    videos.forEach(function (video) {
      function seekToStart() {
        try {
          video.currentTime = 0.1;
        } catch (e) {
          // シークできない状態なら何もしない
        }
      }

      video.addEventListener('loadedmetadata', seekToStart);
      video.addEventListener('loadeddata', seekToStart);

      // 再生可能になった時点で、まだ先頭のままなら一度だけシークする
      video.addEventListener('canplay', function () {
        if (video.currentTime === 0) {
          seekToStart();
        }
      }, { once: true });
    });
  })();

  /* ===============================================
     4. 写真・動画の保護

     長押しによる保存メニューは、CSSの -webkit-touch-callout
     と user-select で止めている（stylesheet.css の img 参照）。
     以前はここで touchstart を preventDefault していたが、
     写真の上に指を置くとページがスクロールできなくなるため、
     CSS側に任せる形へ変えた。
     =============================================== */
  (function setupMediaProtection() {
    // 右クリックのメニューを出さない
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      return false;
    });

    // ドラッグしてデスクトップへ持ち出せないようにする
    document.addEventListener('dragstart', function (e) {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
      }
    });

    // 写真・動画そのものを選択できないようにする
    document.addEventListener('selectstart', function (e) {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
      }
    });

    // キーボードショートカットによる保存を止める
    document.addEventListener('keydown', function (e) {
      var isSave = (e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S');

      if (isSave) {
        e.preventDefault();
        return false;
      }
    });
  })();
})();
