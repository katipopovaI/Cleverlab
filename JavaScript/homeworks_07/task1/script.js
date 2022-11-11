"use strict";

function conversionRadians() {
  let corner = +prompt("значение угла в градусах", "");
  let radians = Number;
  radians = (corner * 3.14) / 180;
  console.log(radians);
  console.log(corner);
  return alert(` значение этого же угла в радианах=${radians}`);
}
conversionRadians();
