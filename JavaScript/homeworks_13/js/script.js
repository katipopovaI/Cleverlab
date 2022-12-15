"use strict";

//const promoBlock = document.querySelectorAll(".promo__adv>img");

//const fond = document.querySelector(".promo__bg");
//const list = document.querySelectorAll(".promo__interactive-item");

// const len = list.length;
// const newListO = [];
// const newList = [...list];
// for (let i = 0; i < len; i++) {
//   console.log(newList[i].textContent);
//   newListO[i] = newList[i].textContent;
// }
// newListO.sort();
// list.forEach((item, index) => {
//   let i = index + 1;
//   item.textContent = `${i}.${newListO[index]}`;
// });
// console.log(newListO);

// fond.style.backgroundImage = "url(img/bg.jpg)";
// genre.textContent = "драма";
// promoBlock.forEach((element) => {
//   element.remove();
// });
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };
  const poster = document.querySelector(".promo_bg");
  const adv = document.querySelectorAll(".promo_adv>img");
  const movieList = document.querySelector(".promo_interactive-list");
  const addForm = document.querySelector("form.add");
  const addInput = addForm.querySelector(".adding_input");
  const checkbox = addForm.querySelector('[type="checkbox"]');
  const genre = document.querySelector(".promo__genre");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault(); //Чтобы не перезагружалась страница

    let newFilm = addInput.value;
    const favorite = checkbox.ariaChecked; //true||false при нажатии на checkbox

    if (newFilm) {
      //проверка на пустой input
      if (newFilm.length > 15) {
        newFilm = `${newFilm.substring(0, 16)}...`; //обрезка названия
      }
    }
    if (favorite) {
      console.log("Добавили любимый фильм");
    }

    movieDB.movies.push(newFilm);
    sortArr(movieDB.movies);

    createMovieList(movieDB.movies, movieList);
    event.target.reset(); //Очистка формы
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "драма";
    poster.style.backgroundImage = `url("img/bg.jpg")`;
  };
  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films); //Для работы сортировки после удаления фильма

    films.forEach((film, i) => {
      parent.innerHTML += `
    <li class="promo_interactive-item">${i + 1}${film}
    <div class="delete"></div>
    </li>
    `;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent); //вызов функции самой себя(рекурсия)
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});
