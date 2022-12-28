"use strict";

function Car(model, bodyType) {
  this.model = model;
  this.bodyType = bodyType;
}
const ford = new Car("Ford", "sedan");
const hyundai = new Car("Hyundai", "station wagon");
const audi = new Car("Audi", "hatchback");
const citroen = new Car("Citroen", "minivan");
const nissan = new Car("Nissan", "crossover");

Car.prototype.output = function () {
  console.log(`Марка машины- ${this.model} тип кузова-${this.bodyType}`);
};

ford.output();
hyundai.output();
audi.output();
citroen.output();
nissan.output();

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
// const john = new User('John', 25);
// console.log('john :', john);
// john.hello();

//TODO: 4.1

//4)FIXME: ручная привязка this: call, apply, bind

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + " " + surname);
// }

// const user = {
//   name: "Alex",
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// // //bind
// function count(num) {
//   return this * num;
// }

// const double = count.bind(2); //2 передается в this
// console.log(double(3));
// console.log(double(4));

//TODO: Практика

// const btn = document.querySelector('button');

// btn.addEventListener('click', function () {
//   console.log(this); //сам элемент, на котором произошло событие, как event.target
//   this.style.backgroundColor = 'red';
// });

//стрелочная функция не имеет контекста вызова

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this); //получим obj
//       // console.log(this.num);
//     };
//     say();
//   },
// };
// obj.sayNumber();

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   this.style.backgroundColor = 'red'; // в консоле error
// });

// btn.addEventListener('click', (e) => {
//   e.target.style.backgroundColor = 'red';
// });
