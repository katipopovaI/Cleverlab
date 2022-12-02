"use strict";

const Firstlist = document.querySelectorAll("ul > li:first-child");
const Lastlist = document.querySelectorAll("ul > li:last-child");
const ThreeList = document.querySelectorAll("ul > li:nth-child(2)");
const FourList = document.querySelectorAll("ul > li:nth-last-child(2)");

Firstlist.forEach((element) => {
  element.style.backgroundColor = "	deepskyblue";
});
ThreeList.forEach((element) => {
  element.style.backgroundColor = "green";
});
FourList.forEach((element) => {
  element.style.backgroundColor = "yellow";
});

Lastlist.forEach((element) => {
  element.style.backgroundColor = "orange";
});
