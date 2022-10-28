"use strict";

let Data = new Date();
let hour = Data.getHours();
let minute = Data.getMinutes();
let sec = Data.getSeconds();
if (hour < 10) {
  hour = "0" + hour;
}
if (minute < 10) {
  minute = "0" + minute;
}
if (sec < 10) {
  sec = "0" + sec;
}
alert(`${hour}:${minute}:${sec}`);
