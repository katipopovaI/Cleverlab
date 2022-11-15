"use strict";
function hello() {
  let yourName = prompt("Как вас зовут?", "");
  if (yourName) {
    return alert(`Привет, ${yourName}`);
  } else {
    return alert("Привет,гость");
  }
}

hello();
