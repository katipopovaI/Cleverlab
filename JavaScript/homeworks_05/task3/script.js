"use strict";
let sum = 0;
let num;
do {
  num = prompt("Введите числа для вычисления суммы", "");
  num = Number(num);
  sum += num;
} while (num != 0);
alert(`Сумма чисел:${sum}`);
