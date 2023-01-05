"use strict";

//4) ручная привязка this: call, apply, bind

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  detail(city, age) {
    return `${
      this.firstName + " " + this.lastName
    } вам ${age}лет и вы из города ${city}`;
  },
};

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
};

let fullName1 = person.fullName.bind(member);
let nextName = person.detail.call(person, "NewYork", 25);
let newName = person.detail.apply(member, ["Minsk", 27]);

console.log(fullName1());
console.log(nextName);
console.log(newName);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
//   }

//   const user = {
//     name: "Alex",
//   };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// // //bind
// function count(num) {
//   return this * num;
// }

// const double = count.bind(2); //2 передается в this
// console.log(double(3));
// console.log(double(4));

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// const john = new User("John", 25);
// const alex = new User("Alex", 20);

// console.log(john);
// console.log(alex);

// //TODO: 2.1

// john.hello();
// alex.hello();

// User.prototype.exit = function () {
//   console.log(`Пользователь ${this.name} вышел`);
// };

// john.exit();
// alex.exit();

//TODO: 3.1

//1)FIXME: Обычная функция: this = window, но если use strict, то undefined
// function showThis() {
//   console.log(this);
// }
// showThis();

// function showThis(a, b) {
//   function sum() {
//     console.log(this);
//     // return this.a + this.b;
//     return a + b; //замыкание
//   }

//   console.log(sum());
// }

// showThis(1, 2);

//2)FIXME: Контекст у методов объекта - сам объект

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   },
// };
// obj.sum();

//3)FIXME: this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }
// const john = new User("John", 25);
// console.log("john :", john);
// john.hello();

//TODO: 4.1

//TODO: Практика

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   console.log(this); //сам элемент, на котором произошло событие, как event.target
//   this.style.backgroundColor = 'red';
// });
