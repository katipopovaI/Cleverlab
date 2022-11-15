"use strict";

function degreeNumeric() {
  let numeric = +prompt("Введите число", "1");
  let degree = +prompt("Задайте необходимую степень числа", "2");
  let result = Number;
  result = numeric;
  let i;
  if (degree != 0) {
    for (i = 0; i < degree - 1; i++) {
      result = result * numeric;
      console.log(result);
    }
  } else {
    result = 1;
  }
  return alert(`Число ${numeric} в степени ${degree}= ${result}`);
}

degreeNumeric();
