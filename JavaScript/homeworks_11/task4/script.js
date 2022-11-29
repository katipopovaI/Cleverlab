"use strict";

let start = Date.now();
let sum = 0;
for (let i = 1; i <= 1000000; i++) {
  sum += i;
}
alert(`Цикл отработал за ${Date.now() - start} миллисекунды`);
