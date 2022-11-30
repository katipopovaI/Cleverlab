"use strict";

let now = new Date();
let dueDate = new Date(2022, 9, 27);
let now1 = Date.parse(now);
let dueDate1 = Date.parse(dueDate);
let differenceHours = Math.trunc((now1 - dueDate1) / 3600000);
alert(
  `количество часов, прошедшее между 27 октября 2022 года и текущим моментом: ${differenceHours}`
);
