"use strict";

let now = new Date();
let nowDay = now.getDay();
let nowMonth = now.getMonth();
let nowYear = now.getFullYear();
alert(
  `текущие день, месяц и год в формате 'год-месяц-день': ${nowYear}-${nowMonth}-${nowDay}`
);
