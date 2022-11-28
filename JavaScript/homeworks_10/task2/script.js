"use strict";

let arr = [2, -15, 12, 83, -29, 111, -6, 22];
let cloneArr = arr.slice(0);
let threeDigit = () => {
  for (let i = 0; i < cloneArr.length; i++) {
    cloneArr[i] = String(cloneArr[i]);
    if (cloneArr[i] >= 0 && cloneArr[i].length == 3) {
      alert(`индекс трехзначного элемента ${cloneArr[i]} = ${i}`);
    } else if (cloneArr[i] < 0 && cloneArr[i].length == 4) {
      alert(`индекс трехзначного элемента ${cloneArr[i]} = ${i}`);
    }
  }
};
threeDigit(cloneArr);

let multiplicityFive = () => {
  let result;
  for (let j = 0; j <= arr.length; j++) {
    if (Math.trunc(arr[j] % 5) == 0) {
      result = arr[j];
    }
  }
  return alert(`элемент кратный 5 = ${result}`);
};
multiplicityFive(arr);

let positiveArr = arr.filter(function (number) {
  return number > 0;
});
alert(`массив, содержащий все положительные элементы  из массива arr=${positiveArr} 
    `);

let sortAscending = arr.sort(function (a, b) {
  return a - b;
});
alert(`массив arr отсортированный по возрастанию: ${sortAscending}`);

let descendingSort = arr.sort(function (a, b) {
  return b - a;
});
alert(`массив arr отсортированный по убыванию: ${descendingSort}`);

let changingOrder = arr.reverse();
alert(`Изменение порядка элементов в arr на обратный: ${changingOrder}`);

let productElements = () => {
  let product = 1;
  for (let j = 0; j < arr.length; j++) {
    product *= arr[j];
  }
  return product;
};
alert(`произведение элементов массива: ${productElements(arr)}`);

// Альтернативный подсчет произведения
// let productElement = arr.reduce((total, amount) => total * amount);
// alert(`произведение элементов массива: ${productElement}`);

let averages = arr.reduce((total, amount) => total + amount) / arr.length;

alert(`среднее арифметическое элементов массива arr: ${averages}`);
