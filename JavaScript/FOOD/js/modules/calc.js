function calc() {
  // Calculator

  const result = document.querySelector(".calculating__result span"); //результат калькулятора

  let sex, height, weight, age, radio;

  //использование данных в localStorage
  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "female"; //значение по умолчанию
    localStorage.setItem("sex", "female");
  }

  if (localStorage.getItem("radio")) {
    radio = localStorage.getItem("radio");
  } else {
    radio = 1.375; //значение по умолчанию
    localStorage.setItem("radio", 1.375);
  }

  //для отображения при перезагрузке
  function initLocalSetting(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.classList.remove(activeClass); //убираем класс активности
      if (elem.getAttribute("id") === localStorage.getItem("sex")) {
        elem.classList.add(activeClass); //добавляем класс активности
      }
      if (elem.getAttribute("data-radio") === localStorage.getItem("radio")) {
        elem.classList.add(activeClass); //добавляем класс активности
      }
    });
  }

  initLocalSetting("#gender div", "calculating__choose-item_active");
  initLocalSetting(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  //для результата
  function calcTotal() {
    if (!sex || !height || !weight || !age || !radio) {
      result.textContent = "_____";
      return;
    }
    if (sex === "female") {
      //для женщины
      //округляем до ближайшего целого
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * radio
      );
    } else {
      //для мужчин
      //округляем до ближайшего целого
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * radio
      );
    }
  }

  calcTotal();
  //для кнопок с полом и активностью
  function getStaticInformation(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`); //внутри родителя получаем все div
    console.log(elements);
    //на каждый элемент навешиваем обработчик событий
    elements.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        //на родительский элемент навешиваем обработчик событий (баг)
        //document.querySelector(parentSelector).addEventListener('click,(e)=>{})

        if (e.target.getAttribute("data-ratio")) {
          radio = +e.target.getAttribute("data-ratio"); // активность по data-атрибуту

          //сохраняет в localStorage data-атрибут
          localStorage.setItem("radio", +e.target.getAttribute("data-ratio"));
        } else {
          sex = e.target.getAttribute("id");
          //пол
          //сохраняет в localStorage пол
          localStorage.setItem("sex", e.target.getAttribute("id"));
        }

        elements.forEach((elem) => {
          elem.classList.remove(activeClass); //убираем класс активности
        });

        e.target.classList.add(activeClass); //добавляем класс активности нужному div

        calcTotal(); //вызываем каждый раз, когда происходит изменение в div
      });
    });
  }

  getStaticInformation("#gender", "calculating__choose-item_active"); //для выбора пола

  //для выбора активности
  getStaticInformation(
    ".calculating__choose_big",
    "calculating__choose-item_active"
  );

  //для input
  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", () => {
      const input = document.querySelector(selector);

      input.addEventListener("input", () => {
        //проверка input на числа
        if (input.value.match(/\D/g)) {
          input.style.border = "2px solid red";
        } else {
          input.style.border = "none";
        }

        switch (
          input.getAttribute("id") //поиск input по id
        ) {
          case "height":
            height = +input.value;
            break;
          case "weight":
            weight = +input.value;
            break;
          case "age":
            age = +input.value;
            break;
        }
        calcTotal(); //вызываем каждый раз когда происходит изменение в input
      });
    });
  }
  //вызов функции с тремя разными селекторами
  getDynamicInformation("#height");
  getDynamicInformation("#weight");
  getDynamicInformation("#age");
}

//module.exports = calc;
export default calc;
