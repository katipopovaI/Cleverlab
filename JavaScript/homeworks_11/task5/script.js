"use strict";
let nowDate = new Date();
let nowMonth = nowDate.getMonth();
let nowDay = nowDate.getDay();
let newDate = nowDate.getDate();

let arrMonth = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
let wordMonth = arrMonth.find(function (item, index, arrMonth) {
  return index === nowMonth;
});

wordMonth = String(wordMonth);
let b = wordMonth.length;
let wordnewMonth = wordMonth.slice(0, b - 1);

let arrDay = [
  "воскресение",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];
let wordDay = arrDay.find(function (item, index, arrDay) {
  return index === nowDay;
});
alert(`Сейчас: ${newDate} ${wordnewMonth + "я"}-${wordDay}`);
