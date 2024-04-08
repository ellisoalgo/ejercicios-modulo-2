"use strict";

const colorBox = document.querySelector('.box');
const defaultMsg = document.querySelector('.text');
const title = document.querySelector('.title');

if (colorBox.classList.contains('success')){
    title.innerHTML = `CORRECT`;
    defaultMsg.innerHTML = `The details are correct`;
} else if (colorBox.classList.contains('warning')){
    title.innerHTML = `WARNING`;
    defaultMsg.innerHTML = `Be careful`;
} else if (colorBox.classList.contains('error')){
    title.innerHTML = `ERROR`;
    defaultMsg.innerHTML = `There has been an error`;
};