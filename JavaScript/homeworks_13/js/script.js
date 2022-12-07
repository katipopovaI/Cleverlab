/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const promoBlock = document.querySelectorAll(".promo__adv>img");
const genre = document.querySelector(".promo__genre");
const fond = document.querySelector(".promo__bg");
const list = document.querySelectorAll(".promo__interactive-item");

const newListO = [];
const newList = [...list];
for (let i = 0; i < 5; i++) {
  console.log(newList[i].textContent);
  newListO[i] = newList[i].textContent;
}
newListO.sort();
list.forEach((item, index) => {
  let i = index + 1;
  item.textContent = `${i}.${newListO[index]}`;
});

fond.style.backgroundImage = "url(img/bg.jpg)";
genre.textContent = "драма";
promoBlock.forEach((element) => {
  element.remove();
});

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};
