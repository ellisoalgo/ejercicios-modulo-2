"use strict";

const ul = document.querySelector(".js-list");

let listFilms = [];

function renderFilms() {
    for(const eachFilm of listFilms){
        ul.innerHTML += `<li>
        <img src="${eachFilm.image}" alt="">
        <h4> ${eachFilm.title} </h4>
        </li>`;
    }
};

function getDataAPI() {
    fetch ('https://ghibliapi.vercel.app/films')
    .then((response)=> response.json())
    .then((info) =>{
        listFilms = info;
        renderFilms();
    })
};

getDataAPI();

//pedir datos a la API del personajes que ha buscado la usuaria en la ruta https://swapi.py4e.com/api/people/?search=r2

const input = document.querySelector(".js-filter");
const btn = document.querySelector(".js-btn");
const div = document.querySelector(".js-div");

function handleClick(event){
    const search = input.value;
    fetch (`https://swapi.py4e.com/api/people/?search=${search}`)
    .then(response => response.json())
    .then((data) =>{
        console.log(data.results)
        for (const character of data.results){
            div.innerHTML += `<p>${character.name}</p>`
        };
        //punto y coma SOLO en el último then, para marcar el final de la petición y todo eso
    });
};

btn.addEventListener('click', handleClick);