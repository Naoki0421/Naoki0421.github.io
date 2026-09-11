# Naoki0421.github.io

宮城県工業高等学校 陸上競技部の公式Webサイトです。
GitHub Pages で静的サイトとして公開しています。

## サイト構成

| パス | 内容 |
| --- | --- |
| `index.html` | トップページ。部の概要、近年の成績、各ページへの入口 |
| `rikubusyoukai/` | 陸上競技部紹介。練習環境と大会成績 |
| `photogallery/` | ギャラリー。活動の写真と動画 |
| `schedule/` | 年間スケジュールと練習予定表（PDF） |
| `komonntobuinnyori/` | 顧問・部長・副部長・マネージャーからのメッセージ |

## デザインと動きの置き場所

見た目と動きは、全ページで次の2ファイルを共有しています。
ページごとのCSSはありません。ここを直せば全ページに反映されます。

- `stylesheet.css` … 配色、レイアウト、レスポンシブ設定
- `script.js` … ハンバーガーメニュー、ヘッダーの装飾、動画のサムネイル表示、写真の保護

### 配色を変える

`stylesheet.css` の先頭にある `:root` の変数を書き換えます。

| 変数 | 用途 |
| --- | --- |
| `--navy` | 見出しやヘッダーの濃紺 |
| `--accent` | 見出しの下線、ボタン、順位などの朱色 |
| `--hero-image` | トップページのファーストビューの写真 |

### 反映されないとき

各ページの読み込み部分に `?v=1` が付いています。
この数字を1つ増やすと、ブラウザが必ず新しいファイルを読み直します。

```html
<link rel="stylesheet" href="./stylesheet.css?v=2" />
<script src="./script.js?v=2"></script>
```

## 写真・動画を追加するとき

`img` と `video` には必ず実寸（ピクセル）を `width` / `height` で書いてください。
書かないと読み込むまで高さが 0 として扱われ、スクロール位置がずれます。

```html
<figure class="photo-item">
  <img src="./photo/example.jpg" width="1477" height="1108" alt="説明" loading="lazy" draggable="false" />
  <figcaption>キャプション</figcaption>
</figure>
```

`figure` ごと増やすだけで、枚数に応じて自動で段組みされます。

## 手元で確認する

リポジトリのルートで次を実行し、`http://localhost:4173` を開きます。

```bash
python -m http.server 4173
```

## 技術構成

- HTML5
- CSS3（モバイルファースト、ブレークポイントは 601px と 901px）
- JavaScript（ライブラリなし）

## 作成者

安倍直希 / 宮城県工業高等学校 情報技術科
