"use strict";

//localStorage

const input = document.querySelector(".js-filter");
const btn = document.querySelector(".js-btn");
const ul = document.querySelector(".js-list");

const handleForm = (event)=> {
    const valueInput = input.value;
    console.log(valueInput);
    localStorage.setItem('filterKitten', valueInput);

    //get --> obtener info
    //set --> enviar info

};

btn.addEventListener('click', handleForm);

/*
    1.- obtener datos de localStorage
    2.- modificar el atributo value del input
 */

//cuando carga pagina, sacar datos de localStorage con get
const localInput = localStorage.getItem('filterKitten');
//localInput === null
if(localInput){
    //valores que JS interpreta como verdaderos son los diferentes de null, undefined, "", 0
    input.value = localInput;
};

console.log(localInput);

let listKitten = [];

const fetchDataApi = ()=> {
    fetch ('https://dev.adalab.es/api/kittens')
    .then(response => response.json())
    .then ((info)=> {
        console.log(info);
        listKitten = info.results;
        localStorage.setItem('gatitos', JSON.stringify (listKitten)); //convertir array en string, solo pueden ir strings en localStorage
    });
};
//fetchDataApi();

const renderKittens = (listado)=>{
    for(const cat of listado){
        ul.innerHTML += `<li>${cat.name}</li>`
    }
};

const localKittens = localStorage.getItem('gatitos'); //si no hay datos en local = null

if(localKittens !== null){
    const localKittensArray = JSON.parse(localKittens); //convertir string en array
    listKitten = localKittensArray;
} else{
    fetchDataApi();
};

