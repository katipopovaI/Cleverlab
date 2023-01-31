"use strict";

//TODO: 1.1

// const person = {
//   name: 'Alex',
//   age: 25,

//   get userAge() {
//     return this.age;
//   },

//   set userAge(num) {
//     this.age = num;
//   },
// };

// console.log(person.userAge);

// const newAge = (person.userAge = 30);

// console.log(newAge);

//TODO: 2.1

// FIXME: функция-конструктор

//TODO: 1

// function User(name, age) {
//   this.name = name;
//   this.age = age;

//   this.say = function () {
//     console.log(`Имя пользователя: ${this.name}, возраст: ${this.age}`);
//   };
// }

// const alex = new User('Alex', 25);
// console.log(alex.name);
// console.log(alex.age);

// alex.name = 'John';
// alex.age = 30;
// alex.say();

//TODO: 2

// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log('Недопустимое значение');
//     }
//   };
// }

// const alex = new User('Alex', 25);
// console.log(alex.name);
// // console.log(alex.userAge); //undefined
// console.log(alex.getAge());

// alex.name = 'John';
// // alex.userAge = 30; //не применится
// alex.setAge(30);
// alex.setAge(200); //Недопустимое значение
// alex.say();

// FIXME: классы

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this._age = age; //нижнее подчеркивание - договоренность о неизменяемости
//   }

//   #surname = 'Adams';

//   say() {
//     console.log(
//       `Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`
//     );
//   }

//   get age() {
//     return this._age;
//   }

//   set age(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       this._age = age;
//     } else {
//       console.log('Недопустимое значение');
//     }
//   }

//   get surname() {
//     return this.#surname;
//   }

//   set surname(surname) {
//     this.#surname = surname;
//   }
// }

// const alex = new User('Alex', 25);
// // console.log((alex._age = 40));
// console.log(alex.age); //геттер
// alex.age = 55; //сеттер
// console.log(alex.age);
// // console.log(alex.#surname); //ошибка
// console.log(alex.surname);
// alex.surname = 'Smit';
// alex.say();

//TODO: 3.1

// const app = '123'; //ошибка в браузере

// const number = 1;

//FIXME: анонимная самовызывающаяся функция (Function Expression)
// (function () {
//   let number = 2;
//   console.log(number);
//   console.log(number + 3);
// })();

// console.log(number); //глобальная переменная

//FIXME: объектный интерфейс

// const user = (function () {
//   const privat = function () {
//     console.log('I am privat!');
//   };

//   return {
//     say: privat,
//   };
// })();

// user.say();
