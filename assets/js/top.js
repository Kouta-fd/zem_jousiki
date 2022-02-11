//最初のメッセージ画面
const view = document.getElementById("top");

window.onload = function () {
  view.classList.add("view");
};
window.setTimeout(function() {
  console.log('時差');
  view.classList.add('fadeout');

},8000);

//メッセージを一文字ずつ表示
const message = document.getElementById("message");
const arraytext = message.innerHTML.split("");
message.textContent = "";
setTimeout(() => {
  for (let i = 0; i < arraytext.length; i++) {
    setTimeout(() => {
      message.textContent += arraytext[i];
    }, 250 * i);
  }
},2000);
