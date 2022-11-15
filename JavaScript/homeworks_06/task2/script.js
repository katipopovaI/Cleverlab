"use strict";

function checkNum(num) {
  if (num > 10) {
    let result;
    result = num * num;
    return alert(`${result}`);
  } else if (num <= 7) {
    return alert("число меньше 7");
  } else if (num == 8) {
    return alert("8");
  } else if (num == 9) {
    return alert("9");
  }
}
let num = +prompt("Введите число", 1);
checkNum(num);
