"use strict";

function changeCalculation() {
  let s = 0;
  let a = purchaseAmount();
  let b = amountContributed();
  if (b > a) {
    s = b - a;
    return alert(`Ваша сдача с покупки ${s}`);
  } else {
    if (a == b) {
      return alert("Спасибо,что без сдачи");
    }
    return alert("Недостаточно средств для оплаты покупки");
  }
}

let purchaseAmount = () => {
  return +prompt("Введите сумму покупки", "");
};

let amountContributed = () => {
  return +prompt("Введите внесенную вами сумму", "");
};
changeCalculation();
