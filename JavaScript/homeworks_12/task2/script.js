"use strict";

const first = document.getElementById("first");
const second = document.getElementById("second");
const yellow = document.getElementsByClassName(" yellow");
const divs = document.getElementsByTagName("div");
first.style.backgroundColor = "red";
second.style.backgroundColor = "blue";
yellow[0].style.backgroundColor = "yellow";
yellow[yellow.length - 1].style.backgroundColor = "yellow";
divs[3].style.backgroundColor = "green";
