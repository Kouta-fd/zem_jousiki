//最初のメッセージ画面
const view = document.getElementById("top");

window.onload = function () {
  view.classList.add("view");
  for(let i = 0; i<items.length; i++) {
    let addField = document.createElement('div');
    let parent = document.getElementById('fuwafuwa-wrap');
    parent.appendChild(addField);
    addField.setAttributeNS(null,'id',`${items[i].id}`);
    addField.setAttributeNS(null,'class',"fuwafuwa item");
    addField.style.left = items[i].x;
    addField.style.top = items[i].y;
    let addFieldChild = document.createElement('a');
    addField.appendChild(addFieldChild);
    addFieldChild.textContent = items[i].title;
    addFieldChild.setAttributeNS(null,'href',`${items[i].path}`);
    if(items[i].move==0) {
      addField.style.animationName = "fuwafuwa1";
    } else if (items[i].move==1) {
      addField.style.animationName = "fuwafuwa2";
    } else if (items[i].move == 2) {
      addField.style.animationName = "fuwafuwa3";
    }
  }
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

//各分野の動き設定
let items = [
  {
    id:0,
    x: 10+'%',
    y: 10+'%',
    move: 0,
    title: "環境",
    path: "#"
  },
  {
    id:1,
    x: 30+'%',
    y: 30+'%',
    move: 1,
    title: "IT",
    path: "#"
  },
  {
    id:2,
    x: 85+'%',
    y: 40+'%',
    move: 2,
    title: "教育",
    path: "#"
  },
  {
    id:2,
    x: 50+'%',
    y: 70+'%',
    move: 0,
    title: "技術",
    path: "#"
  }
]
