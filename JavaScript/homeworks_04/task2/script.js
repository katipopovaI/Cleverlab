"use strict";

let numeric = prompt("Введите число", "");
if (numeric < 0) {
  alert("Число отрицательное");
} else {
  if (numeric == 0) {
    alert("Число равно 0");
  } else if (numeric > 0) {
    alert("Число положительное");
  } else {
    alert("Это не число");
  }
}
