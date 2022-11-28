"use strict";

let arr = [2, -15, 12, 83, -29, 111, -6, 22];

let c = arr.findIndex((item) => item >= 99);
console.log(c);
let summ = arr.reduce((a, v) => (v < 0 ? a + v : a), 0);
console.log(summ);
let k = arr.find((item) => item % 5 == 0);
console.log(k);

let value = 0;
arr.forEach((element) => (value += element > 0 ? element : 0));
console.log(value);

let str = "D,L,M";
let arr2 = str.split(",");
console.log(arr2);

const num = [1, 3, 5, 7];
// /const newNum = num; //ссылка
const newNum = [...num];
newNum[0] = 15;
console.log(num);
console.log(newNum);

console.log(num === newNum);
const obj = {
  name: "test",
  color: "red",
};

const newObj = { ...obj };
newObj.color = "white";

console.log(obj);
console.log(newObj);
console.log(newObj === obj);

let strw = "some";
let strObj = new String(strw);

console.log(typeof strw);
console.log(typeof strObj);
