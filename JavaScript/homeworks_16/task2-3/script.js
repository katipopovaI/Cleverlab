"use strict";

const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const elem = document.querySelector("#elem");
let arr = [1, 2, 3, 4, 5, 6, 7];
let i = 0;
let result;
btn.addEventListener("click", addNull);
function addNull() {
  console.log(this);
  ++i;
  this.innerHTML += i;
}
addNull.call(btn);

btn2.addEventListener("click", addNum);
function addNum() {
  console.log(this);
  result = Math.round(Math.random() * 10);
  this.innerHTML += result;
}
addNum.apply(btn2, arr);

function inputText(a) {
  this.value += "," + a;
}
const newinputText = inputText.bind(elem);
newinputText("мой друг");
