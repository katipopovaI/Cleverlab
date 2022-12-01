"use strict";

let remainderTime = () => {
  let nowDate = new Date();
  let nowDay = nowDate.getDate();
  let newDate = new Date(
    nowDate.getFullYear(),
    nowDate.getMonth(),
    nowDate.getDate() + 1
  );
  let result = newDate.getTime() - nowDate.getTime();
  return result;
};
//setInterval(remainderTime, 1000);

let remainderHours = () => {
  let resultH = Math.floor((remainderTime() / (1000 * 60 * 60)) % 24);
  resultH = resultH < 10 ? "0" + resultH : resultH;
  return resultH;
};

let remainderMinutes = () => {
  let resultM = Math.floor((remainderTime() / (1000 * 60)) % 60);
  resultM = resultM < 10 ? "0" + resultM : resultM;
  return resultM;
};
let remainderSec = () => {
  let resultS = Math.floor((remainderTime() / 1000) % 60);
  resultS = resultS < 10 ? "0" + resultS : resultS;
  console.log(resultS);
  return resultS;
};
function showMessage() {
  return console.log(
    `До конца дня осталось:${remainderHours()}часов:${remainderMinutes()}минуты:${remainderSec()}секунды`
  );
}

showMessage();
setInterval(showMessage, 1000, remainderTime);
