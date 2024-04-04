"use strict";

/*
//Ejercicio 2.2.2 - 1:
// elemento de HTML
const name = document.querySelector(".name");
let textAfter = document.querySelector(".textAfter");
const button = document.querySelector(".submit");

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
button.addEventListener("click", () => {
  textAfter.innerHTML = 'Hi ' + name.value + '!'; //código a ejecutarse
});

//Ejercicio 2.2.2 - 2
const button2 = document.querySelector(".button2");

button2.addEventListener("click", () => {
  button2.classList.toggle("buttonClick");
});
*/

/*//Ejercicio 2.2.2 - 3
const paragraph = document.querySelector(".lorem");

paragraph.addEventListener("click", () => {
  paragraph.innerHTML += `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptatem, eos sapiente ipsum reprehenderit, tempore id quos odit culpa sequi, aliquam magnam natus praesentium adipisci temporibus ea? Quae, possimus error?`;

});
*/

//Ejercicio 2.2.3 - 1
const textInput = document.querySelector('.text');
const textOutput = document.querySelector('.output');

textInput.addEventListener('input', () => {
  const inputValue = event.currentTarget.value;
  textOutput.textContent = inputValue;
})