//canvas要素のid取得
const canvas = document.getElementById("js-canvas-test");

//コンテキストの取得
const context = canvas.getContext("2d");

//塗りの色
context.fillStyle = "#2980b9";

//線の幅
context.lineWidth = 4;

//線の色
context.strokeStyle = "#34495e";

//塗りの描画
context.fillRect(10, 10, 100, 100);

//線の描画
context.strokeRect(8, 8, 102, 102)
