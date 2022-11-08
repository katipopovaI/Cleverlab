"use strict";

let Data = new Date();
let hour = Data.getHours();
let minute = Data.getMinutes();
let sec = Data.getSeconds();
let year = Data.getFullYear();
let month = Data.getMonth();
let date = Data.getDate();

hour = hour < 10 ? "0" + hour : hour;
minute = minute < 10 ? "0" + minute : minute;
sec = sec < 10 ? "0" + sec : sec;
month = month < 10 ? "0" + month : month;
date = date < 10 ? "0" + date : date;
alert(`Сейчас:${hour}:${minute}:${sec} и дата: ${date}.${month}.${year}`);
