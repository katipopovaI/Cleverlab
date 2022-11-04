"use strict";
let sum = 0;
let n = +prompt("Введите натуральное число", "");
for (let i = 0; i < n; ) {
  i++;
  sum += i;
  console.log(i);
  console.log(sum);
}
alert(`Сумма чисел=${sum}`);
