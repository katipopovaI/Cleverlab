"use strict";

let answerQuestion = prompt("Каково «официальное» название JavaScript?", "");
if (answerQuestion == "ECMAScript" || answerQuestion == "ecmascript") {
  alert("Верно!");
} else {
  alert("Не знаете? «ECMAScript»!");
}
