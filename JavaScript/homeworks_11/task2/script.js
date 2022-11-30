"use strict";

let now = new Date();
let now1 = Date.parse(now);
let minutes = Math.trunc(now1 / 60000);
alert(
  `количество минут с 1-го января 1970 года до настоящего момента времени:${minutes}`
);
