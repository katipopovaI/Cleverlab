"use strict";

let maxWhite = 984 / 4;
alert(`Максимальная ширина фото, для 4 фото в ряду:${maxWhite}`);
let amountPhoto = prompt("Сколько изображений у вас в галерее?", 4);
amountPhoto = Number(amountPhoto);
let whitePhoto = prompt("Какая ширина 1 изображения?", 246);
whitePhoto = Number(whitePhoto);
let indentWhitePhoto = 10 + whitePhoto;
let photoRow = Math.floor(1024 / indentWhitePhoto);
let row = Math.floor(amountPhoto / photoRow);
let imgLastRow = amountPhoto - photoRow * row || photoRow;
alert(`Количество изображений в каждом ряду:${photoRow}`);
alert(`Количество полных рядов:${row}`);
alert(`Количество изображений в последнем ряду:${imgLastRow}`);
