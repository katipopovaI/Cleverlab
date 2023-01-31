"use strict";

// FIXME: task1=классы

class Person {
  constructor(first, last, id) {
    this.first = first;
    this.last = last;
    this._id = id;
  }
  #test = "url1";

  get test() {
    return this.#test;
  }

  set test(test) {
    this.#test = test;
  }

  get id() {
    return this._id;
  }
  set id(id) {
    if (typeof id === "number" && id > 0 && id < 110) {
      this._id = id;
    } else {
      console.log("Недопустимое значение");
    }
  }

  get fullName() {
    return `Имя пользователя: ${this.first} ${this.last} id=${
      this._id
    } test url=${this.#test}`;
  }

  set fullName(newName) {
    if (!newName) {
      return `Введите имя`;
    }
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
}
const actor = new Person("Ivan", "Petrov");
actor.id = 1;
actor.test = "url2";
console.log(actor.fullName);
const singer = new Person("Petr", "Ivanow");
singer.id = 2;
console.log(singer.fullName);

//FIXME:task2=анонимная самовызывающаяся функция (Function Expression)

(function () {
  let sum = 0;
  console.log(sum);
  for (let i = 0; i <= 10; i++) {
    sum += i;
  }
  console.log(sum);
})();

//FIXME:task3=объектный интерфейс

const result = (function () {
  const privat = function () {
    console.log("Hello");
  };
  const privat2 = function () {
    console.log("my Friends");
  };
  return {
    say: privat,
    say2: privat2,
    id: 1,
  };
})();
//console.log(result);
result.say();
result.say2();
console.log(result.id);

// const player = {
//   name: "Walffles",
//   totalLives: 5,
//   totalDeaths: 0,
//   get lives() {
//     return this.totalLives - this.totalDeaths;
//   },
//   set lives(newLives) {
//     this.totalDeaths = this.totalLives - newLives;
//   },
//   die() {
//     this.totalDeaths++;
//   },
// };

// console.log(player.lives);
// player.die();
// console.log(player.lives);

// player.lives = 2;
// console.log(player.lives);
