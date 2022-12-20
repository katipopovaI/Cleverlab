"use strict";

const counterButton = document.querySelector(".startCounter");
const enumerator = document.querySelector(".enumerator");
const firstNumber = document.querySelector(".first");
const secondNumber = document.querySelector(".second");
const startButton = document.querySelector(".start_button");
const errorC = document.querySelector(".errorC");
const errorF = document.querySelector(".errorF");
const errorS = document.querySelector(".errorS");
let a;
let b;
let max;
let min;
firstNumber.addEventListener(
  "blur",
  function () {
    if (firstNumber.value === "") {
      errorF.innerHTML = "Заполните пустое поле";
    } else {
      errorF.innerHTML = "Все ок!";
    }
  },
  false
);
secondNumber.addEventListener(
  "blur",
  function () {
    if (secondNumber.value === "") {
      errorS.innerHTML = "Заполните пустое поле";
    } else {
      errorS.innerHTML = "Все ок!";
    }
  },
  false
);
firstNumber.addEventListener("blur", takeNumber);
secondNumber.addEventListener("blur", takeNumber);
function takeNumber() {
  a = +firstNumber.value;
  b = +secondNumber.value;
  max = Math.max(a, b);
  min = Math.min(a, b);
  console.log(a, b);
  if (a == b) {
    errorC.textContent = "Введите разные числа";
  }
}

let timer;
startButton.addEventListener("click", onClick);
function onClick() {
  timer = clearInterval(timer);
  if (a == b) {
    errorC.textContent = "Введите разные числа";
  }
  if (startButton.value == "Стоп" && a != b) {
    startButton.textContent = "Пауза";
    timer = setInterval(() => {
      if (max === min) {
        timer = clearInterval(timer);
        startButton.textContent = "Счетчик отработал";
      }
      enumerator.textContent = parseInt(min++);
      console.log(startButton.value);
    }, 1000);
    startButton.value = "Работа";
  } else {
    if (startButton.value == "Работа") {
      timer = clearInterval(timer);
      startButton.textContent = "Пуск";
      startButton.value = "Стоп";
    }
  }
}
