//canvas要素のid取得
const canvas = document.getElementById("js-canvas-test");

//canvas要素の幅を取得
const canvasWidth = canvas.clientWidth;

//canvas要素の高さを取得
const canvasHeight = canvas.clientHeight;

//コンテキストの取得
const context = canvas.getContext("2d");

//色の定義
context.fillStyle = '#27ae60';

//四角の大きさ
const rectSize = 50;

//アニメーションの実行回数のカウント用変数
let count = 0;

//アニメーション
const animation = () => {

  //現在の描画を消去
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  //パスのリセット
  context.beginPath();

  //x軸方向に1ピクセル移動
  context.translate(1, 0);

  //描画
  context.fillRect(0, 0, rectSize, rectSize);

  //canvasの端まで到達するまでanimationを繰り返す
  if (count <= canvasWidth - rectSize) {
    count += 1;
    requestAnimationFrame(animation);
  }

}

requestAnimationFrame(animation);

for (i=0; i<10; i++) document.write(i);

function a()
{
  alert("Great!");
}

function proc()
{
  alert("Oh!");
}
