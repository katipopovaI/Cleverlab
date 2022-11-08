"use strict";

/*let date = new Date();
let now = new Date(
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  23,
  59,
  59
);
let result = Math.floor((now.getTime() - date.getTime()) / 1000);
alert(result);*/

function counter() {
  let nowDate = new Date();
  let nowHour = nowDate.getHours();
  let nowMinut = nowDate.getMinutes();
  let nowSec = nowDate.getSeconds();
  let newHour = 23 - nowHour;
  let newMinut = 60 - nowMinut;
  let newSec = 60 - nowSec;
  newHour = newHour < 10 ? "0" + newHour : newHour;
  newMinut = newMinut < 10 ? "0" + newMinut : newMinut;
  newSec = newSec < 10 ? "0" + newSec : newSec;
  let str = alert(`До конца дня осталось:${newHour}:${newMinut}:${newSec}`);
  return str;
}
setInterval(counter, 1000);
