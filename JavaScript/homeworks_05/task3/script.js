"use strict";
let sum = 0;
let num;
do {
  num = prompt("Введите числа для вычисления суммы", "");
  num = Number(num);
  console.log(num);
  sum += num;
  console.log(sum);
} while (num != 0);
alert(`Сумма чисел:${sum}`);
