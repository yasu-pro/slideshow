"use strict";

const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const btnNext = document.getElementById("next");
const btnBack = document.getElementById("back");

//画像の配置設定
pic1.style.left = "-10%";
pic1.style.transform = "translate(10%)";
let cilentRect = pic1.getBoundingClientRect();

// let x = cilentRect.left;
// let gx = window.pageXOffset + x;

// console.log(gx);

pic2.style.left = "50%";
pic2.style.transform = "translate(-50%)";
pic3.style.left = "110%";
pic3.style.transform = "translate(-110%)";
pic4.style.left = "170%";
pic4.style.transform = "translate(-170%)";

//写真の大きさ分の移動
const afterSlide = 640;
//写真のスライドするスピード
const countTime = 1000 / 120; //1秒で50フレーム

//setInterval
const set = "";
function setTimer() {
  set = setInterval(() => {
    decrement();
    //*1.1の意味は、pic1を11行目で”ー10％しているため
  }, countTime);
}

//-------写真1枚目処理----------------------------------------------------
function slideScreen(b) {
  pic1.style.left = b + "px";
  console.log(b, pic1.style.left);
}

let result = "";
let i = 0;
function decrement() {
  result = px - i;

  slideScreen(result);
  i++;
}

let px = "";
btnNext.addEventListener("click", () => {
  //要素の位置座標を取得
  let cilentRect = pic1.getBoundingClientRect();
  let x = cilentRect.left;
  //trancelateで画像の配置基準が中央だったのを画像の左端に持ってきた。それが変数px
  px = window.pageXOffset + x - afterSlide * 0.1;
  console.log(px);
  setTimer();
});

//setIntervalのキャンセル処理
if (result < px - afterSlide + afterSlide - afterSlide * (1 - 0.1)) {
  //0 - afterSlide * 1.1
  clearInterval(set);
}

//-------写真2枚目処理----------------------------------------------------

function slideScreen(b) {
  pic2.style.left = b + "px";
  console.log(b, pic2.style.left);
}

let result2 = "";
let j = 0;
function decrement() {
  result2 = px2 - j;

  slideScreen(result2);
  j++;
}

let px2 = "";
btnNext.addEventListener("click", () => {
  //要素の位置座標を取得
  let cilentRect = pic2.getBoundingClientRect();
  let x = cilentRect.left;
  //- afterSlide * 0.5を入れている理由は、left50%からtranslateで画像の中央を基準にしているため。
  px2 = window.pageXOffset + x + afterSlide * 0.5;
  console.log(px2);
  setTimer();
});

//せtIntervalのキャンセル処理
if (result2 < px2 - afterSlide) {
  clearInterval(set);
}
