"use strict";

// Ejercicio 1
const numbers = [1, 2, 3];
const list = document.querySelector(".js-list");

const number1 = document.createElement('li');
const number2 = document.createElement('li');
const number3 = document.createElement('li');

const insertNumber1 = document.createTextNode(numbers[0]);
const insertNumber2 = document.createTextNode(numbers[1]);
const insertNumber3 = document.createTextNode(numbers[2]);

number1.appendChild(insertNumber1);
number2.appendChild(insertNumber2);
number3.appendChild(insertNumber3);

list.appendChild(number1);
list.appendChild(number2);
list.appendChild(number3);

console.log(list);

// Ejercicio 2

const btn = document.querySelector(".submit");
const city = document.querySelector(".city");
const cityOutput = document.querySelector(".city-result");

btn.addEventListener('click', (event) =>{
    event.preventDefault();
    const cityChoice = city.value;
    console.log(cityChoice);
    const img = document.createElement('img');
    cityOutput.appendChild(img);

    if (cityChoice === "madrid"){
        img.src = 'https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg?impolicy=fcrop&w=800&h=533&q=medium';
    } else if (cityChoice === "paris"){
        img.src = 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg';
    } else if (cityChoice === "newyork"){
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg";
    };
});

// Ejercicio 3

const data = [
    {
        name: "Ellis",
        surname: "Whitney",
        phone: "672779097",
    },
    {
        name: "Paula",
        surname: "Arévalo",
        phone: "672456902",
    },
    {
        name: "Elena",
        surname: "Gallego",
        phone: "678930321",
    },
];

const btnChoose = document.querySelector(".js-choose-name");
const chooseInput = document.querySelector(".js-choose-data");
const inputName = document.querySelector(".js-name");
const inputSurname = document.querySelector(".js-surname");
const inputPhone = document.querySelector(".js-phone");

btnChoose.addEventListener('click', (event) => {
    event.preventDefault();
    const dataChoice = chooseInput.value;
    if(dataChoice === "ellis"){
        inputName.value = data[0].name;
        inputSurname.value = data[0].surname;
        inputPhone.value = data[0].phone;
    } else if (dataChoice === "paula"){
        inputName.value = data[1].name;
        inputSurname.value = data[1].surname;
        inputPhone.value = data[1].phone;
    } else if (dataChoice === "elena"){
        inputName.value = data[2].name;
        inputSurname.value = data[2].surname;
        inputPhone.value = data[2].phone;
    };
});

