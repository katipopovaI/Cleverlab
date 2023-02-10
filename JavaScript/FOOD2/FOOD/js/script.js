import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = this.setTimeout(
    () => openModal(".modal", modalTimerId),
    3000
  );
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2023-02-01");
  cards();
  calc();
  forms("form", modalTimerId);
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});

//const slides = document.querySelectorAll(".offer__slide"),
//   prev = document.querySelector(".offer__slider-prev"),
//   next = document.querySelector(".offer__slider-next"),
//   total = document.querySelector("#total"),
//   current = document.querySelector("#current"),
//   slidesWrapper = document.querySelector(".offer__slider-wrapper"),
//   slidesField = document.querySelector(".offer__slider-inner"),
//   width = window.getComputedStyle(slidesWrapper).width,
//   slider = document.querySelector(".offer__slider"); // точки

///!!!!!!Через require!!!!!!!
// //отображение что загрузилось то и отображается
// window.addEventListener("DOMContentLoaded", function () {
//   //////////////
//   const tabs = require("./modules/tabs"),
//     modal = require("./modules/modal"),
//     timer = require("./modules/timer"),
//     cards = require("./modules/cards"),
//     calc = require("./modules/calc"),
//     forms = require("./modules/forms"),
//     slider = require("./modules/slider");

//   tabs();
//   modal();
//   timer();
//   cards();
//   calc();
//   forms();
//   slider();
// });
///!!!!!!Через require!!!!!!!

/////Обычный jsScript
// // Tabs

// let tabs = document.querySelectorAll(".tabheader__item"),
//   tabsContent = document.querySelectorAll(".tabcontent"),
//   tabsParent = document.querySelector(".tabheader__items");

// function hideTabContent() {
//   tabsContent.forEach((item) => {
//     item.classList.add("hide");
//     item.classList.remove("show", "fade");
//   });

//   tabs.forEach((item) => {
//     item.classList.remove("tabheader__item_active");
//   });
// }

// function showTabContent(i = 0) {
//   tabsContent[i].classList.add("show", "fade");
//   tabsContent[i].classList.remove("hide");
//   tabs[i].classList.add("tabheader__item_active");
// }

// hideTabContent();
// showTabContent();

// tabsParent.addEventListener("click", function (event) {
//   const target = event.target;
//   if (target && target.classList.contains("tabheader__item")) {
//     tabs.forEach((item, i) => {
//       if (target == item) {
//         hideTabContent();
//         showTabContent(i);
//       }
//     });
//   }
// });

// // Timer

// const deadline = "2023-02-01";

// function getTimeRemaining(endtime) {
//   const t = Date.parse(endtime) - Date.parse(new Date()),
//     days = Math.floor(t / (1000 * 60 * 60 * 24)),
//     seconds = Math.floor((t / 1000) % 60),
//     minutes = Math.floor((t / 1000 / 60) % 60),
//     hours = Math.floor((t / (1000 * 60 * 60)) % 24);

//   return {
//     total: t,
//     days: days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// function getZero(num) {
//   if (num >= 0 && num < 10) {
//     return "0" + num;
//   } else {
//     return num;
//   }
// }

// function setClock(selector, endtime) {
//   const timer = document.querySelector(selector),
//     days = timer.querySelector("#days"),
//     hours = timer.querySelector("#hours"),
//     minutes = timer.querySelector("#minutes"),
//     seconds = timer.querySelector("#seconds"),
//     timeInterval = setInterval(updateClock, 1000);

//   updateClock();

//   function updateClock() {
//     const t = getTimeRemaining(endtime);

//     if (t.total <= 0) {
//       clearInterval(timeInterval);
//       days.innerHTML = getZero(00);
//       hours.innerHTML = getZero(00);
//       minutes.innerHTML = getZero(00);
//       seconds.innerHTML = getZero(00);
//     } else {
//       days.innerHTML = getZero(t.days);
//       hours.innerHTML = getZero(t.hours);
//       minutes.innerHTML = getZero(t.minutes);
//       seconds.innerHTML = getZero(t.seconds);
//     }
//   }
// }

// setClock(".timer", deadline);

// Modal

// const modalTrigger = document.querySelectorAll("[data-modal]"),
//   modal = document.querySelector(".modal");

// modalTrigger.forEach((btn) => {
//   btn.addEventListener("click", openModal);
// });

// function closeModal() {
//   modal.classList.add("hide");
//   modal.classList.remove("show");
//   document.body.style.overflow = "";
// }

// function openModal() {
//   modal.classList.add("show");
//   modal.classList.remove("hide");
//   document.body.style.overflow = "hidden";
//   clearInterval(modalTimerId);
// }

// modal.addEventListener("click", (e) => {
//   if (e.target === modal || e.target.getAttribute("data-close") == "") {
//     closeModal();
//   }
// });

// document.addEventListener("keydown", (e) => {
//   if (e.code === "Escape" && modal.classList.contains("show")) {
//     closeModal();
//   }
// });

// const modalTimerId = setTimeout(openModal, 3000);

// function showModalByScroll() {
//   if (
//     window.pageYOffset + document.documentElement.clientHeight >=
//     document.documentElement.scrollHeight
//   ) {
//     openModal();
//     window.removeEventListener("scroll", showModalByScroll);
//   }
// }
// window.addEventListener("scroll", showModalByScroll);

// CARDS
// Используем классы для создание карточек меню

// class MenuCard {
//   constructor(src, alt, title, descr, price, parentSelector, ...classes) {
//     this.src = src;
//     this.alt = alt;
//     this.title = title;
//     this.descr = descr;
//     this.price = price;
//     this.classes = classes;
//     this.parent = document.querySelector(parentSelector);
//     this.transfer = 27;
//     this.changeToUAH();
//   }

//   changeToUAH() {
//     this.price = this.price * this.transfer;
//   }

//   render() {
//     const element = document.createElement("div");

//     if (this.classes.length === 0) {
//       this.classes = "menu__item";
//       element.classList.add(this.classes);
//     } else {
//       this.classes.forEach((className) => element.classList.add(className));
//     }

//     element.innerHTML = `
//               <img src=${this.src} alt=${this.alt}>
//               <h3 class="menu__item-subtitle">${this.title}</h3>
//               <div class="menu__item-descr">${this.descr}</div>
//               <div class="menu__item-divider"></div>
//               <div class="menu__item-price">
//                   <div class="menu__item-cost">Цена:</div>
//                   <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
//               </div>
//           `;
//     this.parent.append(element);
//   }
// }

// //TODO: axios
// // axios
// //   .get('http://localhost:3000/menu')
// //   .then((data) => {
// //     data.data.forEach(({ img, altimg, title, descr, price }) => {
// //       new MenuCard(
// //         img,
// //         altimg,
// //         title,
// //         descr,
// //         price,
// //         '.menu .container'
// //       ).render();
// //     });
// //   })
// //   .catch(() => {
// //     showThanksModal(message.failure);
// //   });
// // await ждет синхронно выполнения и присваивания-для избежания ошибок
// const getResource = async (url) => {
//   let resolve = await fetch(url);
//   //проверка если не ок то ошибка
//   if (!resolve.ok) {
//     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//   }

//   return await resolve.json();
// };

// getResource("http://localhost:3000/menu").then((data) => {
//   data.forEach(({ img, altimg, title, descr, price }) => {
//     new MenuCard(
//       img,
//       altimg,
//       title,
//       descr,
//       price,
//       ".menu .container"
//     ).render();
//   });
// });

// // Forms

// const forms = document.querySelectorAll("form");
// const message = {
//   loading: "img/form/spinner.svg",
//   success: "Спасибо! Скоро мы с вами свяжемся",
//   failure: "Что-то пошло не так...",
// };

// forms.forEach((item) => {
//   bindPostData(item);
// });

// //TODO: async/await
// const postData = async (url, data) => {
//   let resolve = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: data,
//   });

//   if (!resolve.ok) {
//     throw new Error();
//   }

//   return await resolve.json(); //возвращаем промис
// };

// function bindPostData(form) {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let statusMessage = document.createElement("img");
//     statusMessage.src = message.loading;
//     statusMessage.style.cssText = `
//               display: block;
//               margin: 0 auto;
//           `;
//     form.insertAdjacentElement("afterend", statusMessage);

//     const formData = new FormData(form);

//     // const object = {};
//     // formData.forEach((value, key) => {
//     //   object[key] = value;
//     // });
//     //масивы->обьект->Json
//     const json = JSON.stringify(Object.fromEntries(formData.entries()));

//     postData("http://localhost:3000/requests", json)
//       .then((data) => {
//         console.log(data);
//         showThanksModal(message.success);
//         statusMessage.remove();
//       })
//       .catch(() => {
//         showThanksModal(message.failure);
//       })
//       .finally(() => {
//         form.reset();
//       });
//   });
// }

// function showThanksModal(message) {
//   const prevModalDialog = document.querySelector(".modal__dialog");

//   prevModalDialog.classList.add("hide");
//   openModal();

//   const thanksModal = document.createElement("div");
//   thanksModal.classList.add("modal__dialog");
//   thanksModal.innerHTML = `
//           <div class="modal__content">
//               <div class="modal__close" data-close>×</div>
//               <div class="modal__title">${message}</div>
//           </div>
//       `;
//   document.querySelector(".modal").append(thanksModal);
//   setTimeout(() => {
//     thanksModal.remove();
//     prevModalDialog.classList.add("show");
//     prevModalDialog.classList.remove("hide");
//     closeModal();
//   }, 4000);
// }

// Slider
//TODO: Простой вариант

// const slides = document.querySelectorAll('.offer__slide'),
//   prev = document.querySelector('.offer__slider-prev'),
//   next = document.querySelector('.offer__slider-next'),
//   total = document.querySelector('#total'),
//   current = document.querySelector('#current');

// let slideIndex = 1;

// showSlides(slideIndex);

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
// } else {
//   total.textContent = slides.length;
// }

// function showSlides(n) {
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   slides.forEach((item) => (item.style.display = 'none'));

//   slides[slideIndex - 1].style.display = 'block';

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }
// }

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// prev.addEventListener('click', function () {
//   plusSlides(-1);
// });

// next.addEventListener('click', function () {
//   plusSlides(1);
// });

// //TODO: Вариант карусели

// const slides = document.querySelectorAll(".offer__slide"),
//   prev = document.querySelector(".offer__slider-prev"),
//   next = document.querySelector(".offer__slider-next"),
//   total = document.querySelector("#total"),
//   current = document.querySelector("#current"),
//   slidesWrapper = document.querySelector(".offer__slider-wrapper"),
//   slidesField = document.querySelector(".offer__slider-inner"),
//   width = window.getComputedStyle(slidesWrapper).width,
//   slider = document.querySelector(".offer__slider"); // точки

// let slideIndex = 1;
// let offset = 0;

// if (slides.length < 10) {
//   total.textContent = `0${slides.length}`;
//   current.textContent = `0${slideIndex}`;
// } else {
//   total.textContent = slides.length;
//   current.textContent = slideIndex;
// }

// slidesField.style.width = 100 * slides.length + "%";
// slidesField.style.display = "flex";
// slidesField.style.transition = "0.5s all";

// slidesWrapper.style.overflow = "hidden";

// slides.forEach((slide) => {
//   slide.style.width = width;
// });

// slider.style.position = "relative"; // точки

// const indicators = document.createElement("ol"), // точки
//   dots = [];

// indicators.classList.add("carousel-indicators");
// indicators.style.cssText = `
//       position: absolute;
//       right: 0;
//       bottom: 0;
//       left: 0;
//       z-index: 15;
//       display: flex;
//       justify-content: center;
//       margin-right: 15%;
//       margin-left: 15%;
//       list-style: none;
//   `; // Если хотите - добавьте в стили, но иногда у нас нет доступа к стилям
// slider.append(indicators);

// for (let i = 0; i < slides.length; i++) {
//   const dot = document.createElement("li");
//   dot.setAttribute("data-slide-to", i + 1);
//   dot.style.cssText = `
//       box-sizing: content-box;
//       flex: 0 1 auto;
//       width: 30px;
//       height: 6px;
//       margin-right: 3px;
//       margin-left: 3px;
//       cursor: pointer;
//       background-color: #fff;
//       background-clip: padding-box;
//       border-top: 10px solid transparent;
//       border-bottom: 10px solid transparent;
//       opacity: 0.5;
//       transition: opacity .6s ease;
//   `;
//   if (i == 0) {
//     dot.style.opacity = 1;
//   }
//   indicators.append(dot);
//   dots.push(dot);
// }

// // регулярное выражение, чтобы 650px, стали 650
// function deleteNotDigits(str) {
//   return +str.replace(/\D/g, "");
// }

// next.addEventListener("click", () => {
//   // if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
//   if (offset == deleteNotDigits(width) * (slides.length - 1)) {
//     offset = 0;
//   } else {
//     // offset += +width.slice(0, width.length - 2);
//     offset += deleteNotDigits(width);
//   }

//   slidesField.style.transform = `translateX(-${offset}px)`;

//   if (slideIndex == slides.length) {
//     slideIndex = 1;
//   } else {
//     slideIndex++;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }

//   dots.forEach((dot) => (dot.style.opacity = "0.5"));
//   dots[slideIndex - 1].style.opacity = 1;
// });

// prev.addEventListener("click", () => {
//   if (offset == 0) {
//     // offset = +width.slice(0, width.length - 2) * (slides.length - 1);
//     offset = deleteNotDigits(width) * (slides.length - 1);
//   } else {
//     // offset -= +width.slice(0, width.length - 2);
//     offset -= deleteNotDigits(width);
//   }

//   slidesField.style.transform = `translateX(-${offset}px)`;

//   if (slideIndex == 1) {
//     slideIndex = slides.length;
//   } else {
//     slideIndex--;
//   }

//   if (slides.length < 10) {
//     current.textContent = `0${slideIndex}`;
//   } else {
//     current.textContent = slideIndex;
//   }

//   dots.forEach((dot) => (dot.style.opacity = "0.5"));
//   dots[slideIndex - 1].style.opacity = 1;
// });

// dots.forEach((dot) => {
//   dot.addEventListener("click", (e) => {
//     const slideTo = e.target.getAttribute("data-slide-to");

//     slideIndex = slideTo;
//     // offset = +width.slice(0, width.length - 2) * (slideTo - 1);
//     offset = deleteNotDigits(width) * (slideTo - 1);

//     slidesField.style.transform = `translateX(-${offset}px)`;

//     if (slides.length < 10) {
//       current.textContent = `0${slideIndex}`;
//     } else {
//       current.textContent = slideIndex;
//     }

//     dots.forEach((dot) => (dot.style.opacity = "0.5"));
//     dots[slideIndex - 1].style.opacity = 1;
//   });
// });

// // Calculator

// const result = document.querySelector(".calculating__result span"); //результат калькулятора

// let sex, height, weight, age, radio;

// //использование данных в localStorage
// if (localStorage.getItem("sex")) {
//   sex = localStorage.getItem("sex");
// } else {
//   sex = "female"; //значение по умолчанию
//   localStorage.setItem("sex", "female");
// }

// if (localStorage.getItem("radio")) {
//   radio = localStorage.getItem("radio");
// } else {
//   radio = 1.375; //значение по умолчанию
//   localStorage.setItem("radio", 1.375);
// }

// //для отображения при перезагрузке
// function initLocalSetting(selector, activeClass) {
//   const elements = document.querySelectorAll(selector);

//   elements.forEach((elem) => {
//     elem.classList.remove(activeClass); //убираем класс активности
//     if (elem.getAttribute("id") === localStorage.getItem("sex")) {
//       elem.classList.add(activeClass); //добавляем класс активности
//     }
//     if (elem.getAttribute("data-radio") === localStorage.getItem("radio")) {
//       elem.classList.add(activeClass); //добавляем класс активности
//     }
//   });
// }

// initLocalSetting("#gender div", "calculating__choose-item_active");
// initLocalSetting(
//   ".calculating__choose_big div",
//   "calculating__choose-item_active"
// );

// //для результата
// function calcTotal() {
//   if (!sex || !height || !weight || !age || !radio) {
//     result.textContent = "_____";
//     return;
//   }
//   if (sex === "female") {
//     //для женщины
//     //округляем до ближайшего целого
//     result.textContent = Math.round(
//       (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * radio
//     );
//   } else {
//     //для мужчин
//     //округляем до ближайшего целого
//     result.textContent = Math.round(
//       (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * radio
//     );
//   }
// }

// calcTotal();
// //для кнопок с полом и активностью
// function getStaticInformation(parentSelector, activeClass) {
//   const elements = document.querySelectorAll(`${parentSelector} div`); //внутри родителя получаем все div
//   console.log(elements);
//   //на каждый элемент навешиваем обработчик событий
//   elements.forEach((elem) => {
//     elem.addEventListener("click", (e) => {
//       //на родительский элемент навешиваем обработчик событий (баг)
//       //document.querySelector(parentSelector).addEventListener('click,(e)=>{})

//       if (e.target.getAttribute("data-ratio")) {
//         radio = +e.target.getAttribute("data-ratio"); // активность по data-атрибуту

//         //сохраняет в localStorage data-атрибут
//         localStorage.setItem("radio", +e.target.getAttribute("data-ratio"));
//       } else {
//         sex = e.target.getAttribute("id");
//         //пол
//         //сохраняет в localStorage пол
//         localStorage.setItem("sex", e.target.getAttribute("id"));
//       }

//       elements.forEach((elem) => {
//         elem.classList.remove(activeClass); //убираем класс активности
//       });

//       e.target.classList.add(activeClass); //добавляем класс активности нужному div

//       calcTotal(); //вызываем каждый раз, когда происходит изменение в div
//     });
//   });
// }

// getStaticInformation("#gender", "calculating__choose-item_active"); //для выбора пола

// //для выбора активности
// getStaticInformation(
//   ".calculating__choose_big",
//   "calculating__choose-item_active"
// );

// //для input
// function getDynamicInformation(selector) {
//   const input = document.querySelector(selector);

//   input.addEventListener("input", () => {
//     const input = document.querySelector(selector);

//     input.addEventListener("input", () => {
//       //проверка input на числа
//       if (input.value.match(/\D/g)) {
//         input.style.border = "2px solid red";
//       } else {
//         input.style.border = "none";
//       }

//       switch (
//         input.getAttribute("id") //поиск input по id
//       ) {
//         case "height":
//           height = +input.value;
//           break;
//         case "weight":
//           weight = +input.value;
//           break;
//         case "age":
//           age = +input.value;
//           break;
//       }
//       calcTotal(); //вызываем каждый раз когда происходит изменение в input
//     });
//   });
// }
// //вызов функции с тремя разными селекторами
// getDynamicInformation("#height");
// getDynamicInformation("#weight");
// getDynamicInformation("#age");
//});
