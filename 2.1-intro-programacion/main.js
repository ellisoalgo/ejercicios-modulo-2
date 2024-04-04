// //Aquñi va el código JavaScript
'use strict';

// document.querySelector('h1').innerHTML = 'Hi';

// //Ejercicio constantes
// /*let myAddress = "Barcelona 08860";
// myAddress = "Madrid, 28009";*/

// //Ejercicio innerHTML
// const titleElement = document.querySelector(".paragraph");
// titleElement.innerHTML = titleElement.innerHTML + " mundo!";

// //Ejercio seleccionar
// const listElement = document.querySelector(".list");
// const content = '<li>Ellis</li><li>Paula</li>';
// listElement.innerHTML = content;

// const listTitle = document.querySelector(".listTitle");
// listTitle.innerHTML = listTitle.innerHTML + "Paula";


// //Ejercicio contenido
//const titlePage = document.querySelector(".div");
//const content = '<h2>Lorem ipsum</h2> <img src="http://via.placeholder.com/350x150" alt="boceto de imagen"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';
//titlePage.innerHTML = content;

// //Ejercicio classList
// const buttonOne = document.querySelector(".buttonOne");
// buttonOne.classList.add("off");

//Clase:
console.log("holis")

let pet = "carmiña";
let age = 30;
let price = 25.90;

// seleccionar elementos de mi documento HTML
const paragraph = document.querySelector("p");
console.log(paragraph);

const paragraphSecond = document.querySelector(".second")
console.log(paragraphSecond);

const pets = document.querySelector(".listName");
pets.innerHTML = "<li>carmiña</li>";

const namePet = "fifi";
pets.innerHTML += "<li>" + namePet + "</li>";
//+= es un acumulador: lo que ya tienes, añádele esto nuevo. Con solo = lo sustituye.