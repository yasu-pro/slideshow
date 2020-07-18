"use strict";

const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const pic4 = document.getElementById("pic4");
const btnNext = document.getElementById("next");
const btnBack = document.getElementById("back");
const circle = document.getElementById("circle");

let picArray = [pic1, pic2, pic3, pic4];

//画像の配置設定
picArray[0].style.left = "-10%";
picArray[0].style.transform = "translate(10%)";
picArray[1].style.left = "50%";
picArray[1].style.transform = "translate(-50%)";
picArray[2].style.left = "110%";
picArray[2].style.transform = "translate(-110%)";
picArray[3].style.left = "170%";
picArray[3].style.transform = "translate(-170%)";

//写真の大きさ分の移動
const afterSlide = 640;
//写真のスライドするスピード
const countTime = 1000 / 120; //1秒で50フレーム

//-------減産処理----------------------------------------------------
let result = "";
let i = 0;
let result2 = "";
let j = 0;
let result3 = "";
let k = 0;
let result4 = "";
let l = 0;

function decrement() {
  result = px - i;
  slideScreen(result);
  i++;
}

function decrement2() {
  result2 = px2 - j;
  slideScreen2(result2);
  j++;
}

function decrement3() {
  result3 = px3 - k;
  slideScreen3(result3);
  k++;
}

function decrement4() {
  result4 = px4 - l;
  slideScreen4(result4);
  l++;
}

//-------増産処理----------------------------------------------------
function increment() {
  result = px + i;
  slideScreen(result);
  i++;
}

function increment2() {
  result2 = px2 + j;
  slideScreen2(result2);
  j++;
}

function increment3() {
  result3 = px3 + k;
  slideScreen3(result3);
  console.log(result3);
  console.log(x3 + afterSlide + (x3 + afterSlide - (x2 + afterSlide)));

  k++;
}

function increment4() {
  result4 = px4 + l;
  slideScreen4(result4);
  l++;
}

//-------写真1枚目処理----------------------------------------------------
function slideScreen(a) {
  picArray[0].style.left = a + "px";
}

//-------写真2枚目処理----------------------------------------------------
function slideScreen2(b) {
  picArray[1].style.left = b + "px";
}

// -------写真3枚目処理----------------------------------------------------;
function slideScreen3(c) {
  picArray[2].style.left = c + "px";
}

// -------写真4枚目処理----------------------------------------------------;
function slideScreen4(d) {
  picArray[3].style.left = d + "px";

  if (result < x - (x2 - px)) {
    let spliceArray = picArray.splice(0, 1);
    picArray.push(spliceArray[0]);
    //再び画像の配置設定
    picArray[0].style.left = "-10%";
    picArray[0].style.transform = "translate(10%)";
    picArray[1].style.left = "50%";
    picArray[1].style.transform = "translate(-50%)";
    picArray[2].style.left = "110%";
    picArray[2].style.transform = "translate(-110%)";
    picArray[3].style.left = "170%";
    picArray[3].style.transform = "translate(-170%)";

    if (result < x + (x2 - px)) {
      clearInterval(set);
      btnNext.disabled = false;
    }
    i = 0;
    j = 0;
    k = 0;
    l = 0;
  }
  if (
    result3 >
    x3 + afterSlide + (x3 + afterSlide - (x2 + afterSlide) + afterSlide * 0.1)
  ) {
    let spliceArray = picArray.splice(3, 1);
    picArray.splice(0, 0, spliceArray[0]);
    console.log(spliceArray, picArray);
    //再び画像の配置設定
    picArray[0].style.left = "-10%";
    picArray[0].style.transform = "translate(10%)";
    picArray[1].style.left = "50%";
    picArray[1].style.transform = "translate(-50%)";
    picArray[2].style.left = "110%";
    picArray[2].style.transform = "translate(-110%)";
    picArray[3].style.left = "-70%";
    picArray[3].style.transform = "translate(70%)";

    if (
      result3 >
      x3 + afterSlide + (x3 + afterSlide - (x2 + afterSlide)) + afterSlide * 0.1
    ) {
      clearInterval(set2);
      btnBack.disabled = false;
    }
    i = 0;
    j = 0;
    k = 0;
    l = 0;
  }
}

//-------イベント処理----------------------------------------------------

let px = "";
let x = "";
let px2 = "";
let x2 = "";
let px3 = "";
let x3 = "";
let px4 = "";
let x4 = "";

let count = 2;

//-------btnNextイベント処理----------------------------------------------------

btnNext.addEventListener("click", (e) => {
  count += 1;
  if (count === 1) {
    circle.textContent = "●○○○";
  } else if (count === 2) {
    circle.textContent = "○●○○";
  } else if (count === 3) {
    circle.textContent = "○○●○";
  } else if (count === 4) {
    circle.textContent = "○○○●";
  } else if (count === 0) {
    count = 4;
    circle.textContent = "○○○●";
  } else if (count === 5) {
    count = 1;
    circle.textContent = "●○○○";
  }

  picArray[0].style.left = "-10%";
  picArray[0].style.transform = "translate(10%)";
  picArray[1].style.left = "50%";
  picArray[1].style.transform = "translate(-50%)";
  picArray[2].style.left = "110%";
  picArray[2].style.transform = "translate(-110%)";
  picArray[3].style.left = "170%";
  picArray[3].style.transform = "translate(-170%)";

  btnNext.disabled = true;
  e.preventDefault();
  //要素の位置座標を取得
  let cilentRect = picArray[0].getBoundingClientRect();
  x = window.pageXOffset + cilentRect.left;
  //keft-10%で画像の位置をー10％している。”window.pageXOffset + x”のみの場合基準は0（left:0px）からになるので、切れている分の長さをを引く（- afterSlide * 0.1）と実際にある画像（切れている分の）の位置が出る。
  px = x - afterSlide * 0.1;

  //要素の位置座標を取得
  let cilentRect2 = picArray[1].getBoundingClientRect();
  x2 = window.pageXOffset + cilentRect2.left;
  //- afterSlide * 0.5を入れている理由は、left50%からtranslateで画像の中央を基準にしているため。
  px2 = x2 + afterSlide * 0.5;

  //要素の位置座標を取得
  let cilentRect3 = picArray[2].getBoundingClientRect();
  x3 = window.pageXOffset + cilentRect3.left;
  //- afterSlide * 1.1を入れている理由は、left50%からtranslateで画像の中央を基準にしているため。
  px3 = x3 + afterSlide * 1.1;

  //要素の位置座標を取得
  let cilentRect4 = picArray[3].getBoundingClientRect();
  x4 = window.pageXOffset + cilentRect4.left;
  //- afterSlide * 1.7を入れている理由は、left50%からtranslateで画像の中央を基準にしているため。
  px4 = x4 + afterSlide * 1.7;

  setTimer();
});

//-------btnBackイベント処理----------------------------------------------------

btnBack.addEventListener("click", (e) => {
  count -= 1;

  if (count === 1) {
    circle.textContent = "●○○○";
  } else if (count === 2) {
    circle.textContent = "○●○○";
  } else if (count === 3) {
    circle.textContent = "○○●○";
  } else if (count === 4) {
    circle.textContent = "○○○●";
  } else if (count === 0) {
    count = 4;
    circle.textContent = "○○○●";
  } else if (count === 5) {
    count = 1;
    circle.textContent = "●○○○";
  }

  picArray[0].style.left = "-10%";
  picArray[0].style.transform = "translate(10%)";
  picArray[1].style.left = "50%";
  picArray[1].style.transform = "translate(-50%)";
  picArray[2].style.left = "110%";
  picArray[2].style.transform = "translate(-110%)";
  picArray[3].style.left = "-70%";
  picArray[3].style.transform = "translate(70%)";

  btnBack.disabled = true;
  e.preventDefault();

  //要素の位置座標を取得
  let cilentRect = picArray[0].getBoundingClientRect();
  x = window.pageXOffset + cilentRect.left;
  px = x - afterSlide * 0.1;

  let cilentRect2 = picArray[1].getBoundingClientRect();
  x2 = window.pageXOffset + cilentRect2.left;
  px2 = x2 + afterSlide * 0.5;

  let cilentRect3 = picArray[2].getBoundingClientRect();
  x3 = window.pageXOffset + cilentRect3.left;
  px3 = x3 + afterSlide * 1.1;

  let cilentRect4 = picArray[3].getBoundingClientRect();
  x4 = window.pageXOffset + cilentRect4.left;
  //- afterSlide * 0.7を入れている理由は、left-70%からtranslateで画像の中央を基準にしているため。
  px4 = x4 - afterSlide * 0.7;

  setTimer2();
});

//-------setInterval処理----------------------------------------------------
let set;
function setTimer() {
  set = setInterval(() => {
    decrement();
    decrement2();
    decrement3();
    decrement4();
  }, countTime);
}

let set2;
function setTimer2() {
  set2 = setInterval(() => {
    increment();
    increment2();
    increment3();
    increment4();
  }, countTime);
}
