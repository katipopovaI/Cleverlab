"use strict";

const firstlist = document.querySelectorAll("ul > li:first-child");
const lastlist = document.querySelectorAll("ul > li:last-child");
const threeList = document.querySelectorAll("ul > li:nth-child(2)");
const fourList = document.querySelectorAll("ul > li:nth-last-child(2)");

firstlist.forEach((element) => {
  element.style.backgroundColor = "	deepskyblue";
});
threeList.forEach((element) => {
  element.style.backgroundColor = "green";
});
fourList.forEach((element) => {
  element.style.backgroundColor = "yellow";
});

lastlist.forEach((element) => {
  element.style.backgroundColor = "orange";
});
