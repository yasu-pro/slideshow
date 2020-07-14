"use strict";

const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const btnNext = document.getElementById("next");
const btnBack = document.getElementById("back");

//1枚目の配置
const afterSlidePx = -640;

const countTime = 1000 / 120; //1秒で50フレーム

function slideScreen(b) {
  pic1.style.left = b + "px";
  console.log(b, pic1.style.left);
}

function setTimer() {
  const set = setInterval(() => {
    decrement();

    if (result < afterSlidePx) {
      clearInterval(set);
    }
  }, countTime);
}

let result = "";

let i = 1;
function decrement() {
  result = px - i;

  slideScreen(result);
  i++;
}

let px = "";
btnNext.addEventListener("click", () => {
  let style = window.getComputedStyle(pic1);
  px = style.left;
  console.log(px);
  setTimer();
});

//2枚目の配置
