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
