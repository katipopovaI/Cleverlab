"use strict";

let person = {
  surname: "Ivanov",
  name: "Piter",
  "middle name": "Sergeevich",
};
let obj = {};
for (let key in person) {
  obj[key] = person[key];
}

person.yearBirth = 1991;
person.profession = "developer";
person.position = "Frontend Developer";
person.experience = 5;
delete person["middle name"];

if (person["middle name"]) {
  alert(`Свойство "middle name" имеет значение ${person["middle name"]}`);
} else {
  alert("такого свойства нет");
}

alert(
  `оставшееся количество свойств у объекта person:  ${Object.values(person)}`
);

let sumNumeric = () => {
  let sum = 0;
  for (let j in person) {
    if (typeof person[j] === "number") {
      sum++;
    }
  }
  return sum;
};

alert(
  `количество свойств у объекта person, значениями которых являются числа: ${sumNumeric()}`
);
