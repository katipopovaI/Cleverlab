"use strict";

let salary = {
  Ivanov: 1000,
  Petrov: 1500,
  Sidorov: 1200,
  Korolev: 1600,
  Kovalenko: 1700,
  Sedorenko: 1050,
  Semashko: 1300,
  Terenko: 1350,
  Kavalchuk: 1470,
  Rezko: 1800,
};

let obj = {};
for (let key in salary) {
  obj[key] = salary[key];
}

let averageSalary = () => {
  let sum = 0;
  let srsum = 0;
  let amount = 0;
  for (let i in salary) {
    sum += salary[i];
    amount++;
  }
  srsum = Math.round(sum / amount);
  return srsum;
};

salary["average Salary"] = averageSalary();

let numberPeople = () => {
  let numeric = 0;
  for (let j in salary) {
    if (salary[j] >= salary["average Salary"] && j != "average Salary") {
      numeric += 1;
    }
  }
  return numeric;
};

salary["People with average salary"] = numberPeople();

alert(`Ссвойства у объекта salary:  ${Object.values(salary)}`);
