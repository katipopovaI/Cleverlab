("use strict");

//TODO: 1.1

// const persone = {
//   name: "Alex",
//   tel: "5555555",
//   car: {
//     model: "BMW",
//     color: "black",
//   },
// };

// // console.log(JSON.stringify(persone));
// // console.log(JSON.parse(JSON.stringify(persone)));

// const clone = JSON.parse(JSON.stringify(persone));
// clone.car.color = "grey";

// console.log(persone);
// console.log(clone);

//TODO: 2.1

// const inputByn = document.querySelector('#byn'),
//   inputUsd = document.querySelector('#usd');

// inputByn.addEventListener('input', () => {
//   const request = new XMLHttpRequest();

//   //   request.open(method, URL, [async, user, password])

//   request.open('GET', 'js/current.json');
//   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//   request.send();
//   //   request.send(body); // в POST запросе

//   // status
//   // statusText
//   // response

//   request.addEventListener('load', () => {
//     if (request.status === 200) {
//       const data = JSON.parse(request.response);
//       inputUsd.value = (+inputByn.value / data.current.usd).toFixed(2);
//     } else {
//       inputUsd.value = 'Что-то пошло не так';
//     }
//   });
// });

//TODO: 3.1

// FIXME: Callback Hell

// console.log('Запрос данных...');

// //вместо setTimeout используются запросы
// setTimeout(() => {
//   console.log('Подготовка данных...');

//   const product = {
//     name: 'TV',
//     price: 2000,
//   };

//   setTimeout(() => {
//     product.status = 'order';
//     console.log(product);
//   }, 2000);
// }, 2000);

// FIXME: Promise

//

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = 'order';
//         reject(); //проверить catch
//         resolve(product);
//       }, 2000);
//     })
//       .then((data) => {
//         data.modify = true;
//         return data;
//       })
//       .then((data2) => {
//         console.log(data2);
//       });
//   })
//   .catch(() => {
//     console.error('Произошла ошибка');
//   })
//   //например очистка формы
//   .finally(() => {
//     console.log('Finally');
//   });

// const test = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), time);
//   });
// };

// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));

// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log("All");
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log("Race");
// });

//TODO: 4.1

//GET
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//POST
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({ name: "Alex" }), //либо строку, либо объект
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
