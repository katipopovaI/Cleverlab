"use strict";

let fruits = ["Яблоко", "Апельсин", "Слива"];
fruits.push("Абрикос");
fruits.unshift("Нектарин", "Персик");
fruits.splice(2, 2);
let favoriteFruits = fruits.slice(0, 3);
let berries = ["Барбарис", "Виноград", "Годжи"];
fruits = fruits.concat(berries);
alert(`длинна массива  fruits:${fruits.length}`);

favoriteFruits.forEach((item, index, array) => {
  return alert(`${item} имеет индекс ${index} в ${array}`);
});

fruits.forEach((item, index, array) => {
  if (item == "Слива")
    return alert(`"Слива" имеет индекс: ${index} в массиве ${array}`);
});

let elementSearch = (key) => {
  if (key == true) {
    return alert(`В массиве есть элемент "Яблоко"`);
  } else {
    return alert(`В массиве нет элемента "Яблоко"`);
  }
};

let key = fruits.forEach((item, index, array) => {
  if (item == "Яблоко") {
    return true;
  } else return false;
});

elementSearch();
