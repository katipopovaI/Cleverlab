"use strict";

let amountPhoto = prompt("Сколько изображений у вас в галерее?");
amountPhoto = Number(amountPhoto);
let whitePhoto = prompt("Какая ширина 1 изображения?");
whitePhoto = Number(whitePhoto);
let indentWhitePhoto = 10 + whitePhoto;
let maxWhite = 984 / 4;
let photoRow = Math.floor(1024 / indentWhitePhoto);
let Row = Math.floor(amountPhoto / photoRow);
let remainderPhoto = amountPhoto % photoRow;
alert(`Максимальная ширина фото, для 4 фото в ряду:${maxWhite}`);
alert(`Количество изображений в каждом ряду:${photoRow}`);
alert(`Количество полных рядов:${Row}`);
alert(`Количество изображений в последнем ряду:${remainderPhoto}`);
