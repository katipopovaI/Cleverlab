"use strict";

let userName = prompt("Как вас зовут?", "");
let date = new Date();
let hour = date.getHours();
if (+userName == true) {
  switch (+hour) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      alert(`Доброе утро,${userName}`);
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      alert(`Добрый день,${userName}`);
      break;
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      alert(`Добрый вечер,${userName}`);
      break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      alert(`Доброй ночи,${userName}`);
      break;
  }
} else {
  alert("Вы не представились");
}
