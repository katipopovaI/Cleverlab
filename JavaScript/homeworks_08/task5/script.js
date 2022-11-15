"use strict";

function rounding() {
  return alert(
    `округление до целых=${mathRound()}; округление до десятых=${roundingTenths()}; округление до сотых=${roundingHundredths()} `
  );
}

let squareТumber = () => {
  let numeric = 379;
  return Math.sqrt(numeric);
};

let mathRound = () => {
  return Math.round(squareТumber());
};

let roundingTenths = () => {
  return squareТumber().toFixed(1);
};
let roundingHundredths = () => {
  return squareТumber().toFixed(2);
};

rounding();
