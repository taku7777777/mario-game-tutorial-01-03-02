// canvas要素の取得
const canvas = document.getElementById("maincanvas");
const ctx = canvas.getContext("2d");

// ロード時に画面描画の処理が実行されるようにする
window.addEventListener("load", update);

// 主人公の初期座標を定義
var x = 0;

// 画面を更新する関数を定義 (繰り返しここの処理が実行される)
function update() {
  // 画面全体をクリア
  ctx.clearRect(0, 0, 640, 480);

  // 座標を更新する
  x = x + 1;

  // 主人公の画像を表示
  var image = new Image();
  image.src = "../images/character-01/base.png";
  ctx.drawImage(image, x, 0, 32, 32);

  // 再描画
  window.requestAnimationFrame(update);
}
