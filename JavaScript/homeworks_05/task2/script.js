"use strict";
let n = prompt("Введите целое число", "");
for (let i = 0; i < n; i++) {
  if (i % 5 == 0) continue;
  if (i % 2 == 0) {
    console.log(i);
  }
}
