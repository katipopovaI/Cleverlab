"use strict";

let numericFirst = prompt("Введите первое число:", "");
let numericSecond = prompt("Введите второе число:", "");

if (+numericFirst && +numericSecond != false) {
  if (+numericFirst > +numericSecond) {
    alert("1");
  } else {
    if (+numericSecond > +numericFirst) {
      alert("1");
    }
    if (+numericFirst == +numericSecond) {
      alert("0");
    }
  }
} else {
  alert("Вы не ввели числа");
}
