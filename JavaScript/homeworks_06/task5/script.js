"use strict";
let n = +prompt("Введите первое число", "");
let m = +prompt("Введите второе число", "");
function multiply(n, m) {
  let result = n * m;
  return alert(`Произведение чисел=${result}`);
}
multiply(n, m);
