"use strict";

const adalabers = [
    {
      name: 'Aida Narros Fernández',
      teacher: 'Dayana',
      city: 'madrid',
    },
    {
      name: 'Aroa Pavón García',
      teacher: 'Dayana',
      city: 'valencia',
    },
    {
      name: 'Delia García Burgos',
      teacher: 'Dayana',
      city: 'madrid',
    },
    {
      name: 'Diana Bernardos Moraleda',
      teacher: 'Dayana',
      city: 'valencia',
    },
    {
      name: 'Diana Guillot Amado',
      teacher: 'Dayana',
      city: 'sevilla',
    },
    {
      name: 'Elena Alcaraz Martín',
      teacher: 'Dayana',
      city: 'cadiz',
    },
    {
      name: 'Ellis Whitney',
      teacher: 'Dayana',
      city: 'vigo',
    },
    {
      name: 'Fátima Duret Gutiérrez',
      teacher: 'Dayana',
      city: 'vigo',
    },
    {
      name: 'Lucía de la Fuente Mora',
      teacher: 'Dayana',
      city: 'barcelona',
    },
    {
      name: 'Lucía Lacort Lozano',
      teacher: 'Dayana',
      city: 'barcelona',
    },
    {
      name: 'Maria Francisca Espinoza Sepulveda',
      teacher: 'Dayana',
      city: 'valencia',
    },
    {
      name: 'Marina Fernández Cáceres',
      teacher: 'Dayana',
      city: 'valencia',
    },
    {
      name: 'Otilia Nicola Ilie',
      teacher: 'Dayana',
      city: 'valencia',
    },
    {
      name: 'Pilar Rey Rodríguez',
      teacher: 'Dayana',
  
      city: 'bilbao',
    },
    {
      name: 'Rafaela Pessoa de Souza',
      teacher: 'Dayana',
  
      city: 'granada',
    },
    {
      name: 'Raquel Castro Bermudo',
      teacher: 'Dayana',
      city: 'granada',
    },
    {
      name: 'Valentina Ovalles Rodriguez',
      teacher: 'Dayana',
      city: 'granada',
    },
];

const ul = document.querySelector(".ulList");

//recorrer el array y pintar en la ul el nombre y la ciudad
for (let i=0; i < adalabers.length; i++){
    //ul.innerHTML += `<li> ${adalabers[i].name} | ${adalabers[i].city}</li>`

    ul.innerHTML += renderAdalaber(adalabers[i]);
};

const inputFilter = document.querySelector(".js_filter");
const btn = document.querySelector(".btn");
const result = document.querySelector(".js-result");

function renderAdalaber(adalaber){ //necesita un parámetro porque vamos a estar usando un objeto
    /*
    adalaber ={
    name: 'Aida Narros Fernández',
    teacher: 'Dayana',
    city: 'madrid',
    }
    */
   return `<li>${adalaber.name} | ${adalaber.city}</li>`;
};

function renderByCity(count, city){
    result.innerHTML = `En la ciudad ${city} hay ${count} Adabalers`;
}

function handleClick (event){
    event.preventDefault();
    const valueInput = inputFilter.value;
    ul.innerHTML = '';
    let acc = 0;
    for (const girls of adalabers){
        if(girls.city === valueInput){
            // ul.innerHTML += `<li>${girls.name} | ${girls.city} </li>`;
            ul.innerHTML += renderAdalaber(girls);
            acc++;
        };
    };
    renderByCity (acc, valueInput);
};

btn.addEventListener('click', handleClick);

