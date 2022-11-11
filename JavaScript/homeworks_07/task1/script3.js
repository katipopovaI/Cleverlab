"use strict";
let corner = +prompt("значение угла в градусах", "");
let radians = Number;

let conversionRadians = () => {
  radians = (corner * 3.14) / 180;
  console.log(corner);
  return alert(` значение этого же угла в радианах=${radians}`);
};
conversionRadians(corner, radians);
