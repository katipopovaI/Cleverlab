"use strict";

let table = document.querySelector("#table");
let rows = table.rows;
let lengthTable = rows.length - 1;

for (let i = 0; i < rows.length; i++) {
  rows[i].cells[i].style.background = "red";
  rows[i].cells[lengthTable - i].style.background = "red";
}
