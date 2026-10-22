// ボタンとメッセージの要素を取得
const button = document.getElementById("myButton");
const message = document.getElementById("message");

// ボタンがクリックされたときの処理
button.addEventListener("click", function() {
    message.textContent = "ボタンがクリックされました！";
});
