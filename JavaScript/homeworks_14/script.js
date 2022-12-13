"use strict";

const counterButton = document.querySelector(".startCounter");
const errorF = document.querySelector(".errorF");
const errorS = document.querySelector(".errorS");
const errorC = document.querySelector(".errorC");
const firstNumber = document.querySelector(".first");
const secondNumber = document.querySelector(".second");
const startButton = document.querySelector(".start_button");
const comparisonButton = document.querySelector(".comparisonButton");

//let a = firstNumber.addEventListener("blur", takeNumberFirst);
//function takeNumberFirst() {
// return firstNumber.value;
//}

//let b = secondNumber.addEventListener("blur", takeNumberSecond);
//function takeNumberSecond() {
// console.log(secondNumber.value);
// return secondNumber.value;
//}

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
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector(".start_button");
  const enumerator = document.querySelector(".enumerator");
  let timer;
  function onClick() {
    console.log(startButton.textContent);
    timer = clearInterval(timer);
    let a = +firstNumber.value;
    let b = +secondNumber.value;
    let max;
    let min;
    if (a > b) {
      max = a;
      min = b;
    } else {
      if (a < b) {
        max = b;
        min = a;
      } else {
        if (a === b) {
          errorC.textContent = "Введите разные числа";
        }
      }
    }
    startButton.value = "Запуск";
    //if (startButton.value === "Запуск" && a != b) {
    console.log(startButton.value);

    timer = setInterval(() => {
      if (startButton.value === "Запуск") {
        startButton.textContent = "Пауза";
        enumerator.textContent = parseInt(min++);
        if (min > max) {
          timer = clearInterval(timer);
          startButton.textContent = "Счетчик отработал";
        }
      } else {
        console.log(startButton.value);
        startButton.value = "Запуск";
        startButton.textContent = "Старт";
        timer = clearInterval(timer);
      }
      //startButton.value = "Пауза";
    }, 1000);
    //startButton.value = "Пауза";

    console.log(startButton.value);
  }

  startButton.addEventListener("click", onClick);
});
