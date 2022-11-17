"use strict";

let str = prompt("Введите длинный текст", "");
let characters = str.length;
let n = +prompt("Введите необходимое количество символов", "1");
let result;
characters > n ? (result = str.slice(0, n) + "...") : (result = str);
alert(result);
