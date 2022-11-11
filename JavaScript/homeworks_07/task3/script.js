"use strict";

/*/function declaration/;
function factorialNumber() {
  let numeric = +prompt("Введите натуральное число", "");
  let factorial = 1;
  let c = numeric;
  for (numeric; numeric != 0; numeric--) {
    factorial *= numeric;
  }

  return alert(`Факториал числа ${c} равен ${factorial}`);
}
factorialNumber();*/

/*/function expression/;

let factorialNumber = function () {
  let numeric = +prompt("Введите натуральное число", "");
  let factorial = 1;
  let c = numeric;
  for (numeric; numeric != 0; numeric--) {
    factorial *= numeric;
  }

  return alert(`Факториал числа ${c} равен ${factorial}`);
};
factorialNumber();*/

/arrow function/;
let numeric = +prompt("Введите натуральное число", "");
let factorial = 1;
let c = numeric;
let factorialNumber = () => {
  for (numeric; numeric != 0; numeric--) {
    factorial *= numeric;
  }
  return alert(`Факториал числа ${c} равен ${factorial}`);
};
factorialNumber(numeric, factorial);
