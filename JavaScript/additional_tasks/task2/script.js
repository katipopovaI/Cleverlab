"use strict";

let date = new Date();
let result = date.getDay();

switch (result) {
  case 1:
    alert("Сегодня-Понедельник");
    break;
  case 2:
    alert("Сегодня-Вторник");
    break;
  case 3:
    alert("Сегодня-Среда");
    break;
  case 4:
    alert("Сегодня-Четверг");
    break;
  case 5:
    alert("Сегодня-Пятница");
    break;
  case 6:
    alert("Сегодня-Суббота");
    break;
  case 0:
    alert("Сегодня-Воскресение");
    break;
}
