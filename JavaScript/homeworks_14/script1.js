"use strict";

const counterButton = document.querySelector(".startCounter");
const enumerator = document.querySelector(".enumerator");
const firstNumber = document.querySelector(".first");
const secondNumber = document.querySelector(".second");
const startButton = document.querySelector(".start_button");
let a;
let b;
let max;
let min;
firstNumber.addEventListener("blur", takeNumber);
secondNumber.addEventListener("blur", takeNumber);
function takeNumber() {
  a = +firstNumber.value;
  b = +secondNumber.value;
  max = Math.max(a, b);
  min = Math.min(a, b);
  console.log(a, b);
}

startButton.addEventListener("click", onClick);
function onClick() {
  let timer;
  timer = clearInterval(timer);
  if (enumerator.textContent != max) {
    timer = setInterval(() => {
      if (max == min) {
        timer = clearInterval(timer);
        startButton.textContent = "Счетчик отработал";
      }
      enumerator.textContent = parseInt(min++);
    }, 1000);
    startButton.textContent = "Пауза";
  } else {
    startButton.textContent = "Пуск";
    timer = clearInterval(timer);
  }
}
