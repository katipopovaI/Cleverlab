"use strict";

/*/function declaration/;

function sumNumber() {
  let a = +prompt("Введите первое натуральное число", "");
  let b = +prompt("введите второе натуральное число", "");
  let sum = 0;
  let c = a;
  for (a; a <= b; a++) {
    sum += a;
  }
  return alert(`Сумма чисел от ${c} до ${b} равна ${sum} `);
}

sumNumber();*/

/*/function expression/;


let sumNumber = function () {
  let a = +prompt("Введите первое натуральное число", "");
  let b = +prompt("введите второе натуральное число", "");
  let sum = 0;
  let c = a;
  for (a; a <= b; a++) {
    sum += a;
  }
  return alert(`Сумма чисел от ${c} до ${b} равна ${sum} `);
};
sumNumber();*/

/arrow function/;
let a = +prompt("Введите первое натуральное число", "");
let b = +prompt("введите второе натуральное число", "");
let sum = 0;
let c = a;

let sumNumber = () => {
  for (a; a <= b; a++) {
    sum += a;
  }
  return alert(`Сумма чисел от ${c} до ${b} равна ${sum} `);
};
sumNumber(a, b);
