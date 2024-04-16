"use strict";


const form = document.querySelector('.js_form');
const inputName = document.querySelector('.js_name');
const inputAge = document.querySelector('.js_age');
const inputVaccine = document.querySelector('.js_vacc');
const ul = document.querySelector('.js_ul');

const dog = {
    name: '',
    age: '',
    vaccine: '',
};
const handleForm = (event)=>{

    const valueInput = event.target.value;
    const idInput = event.target.id;

    console.log(valueInput, idInput);

    dog(idInput) = valueInput;

/*    if(idInput === 'name'){
        dog.name = valueInput;
    }else if (idInput === 'age'){
        dog.age = valueInput;
    } else{
        dog.vaccine = valueInput;
    }*/
    console.log(dog);
};

form.addEventListener('input',handleForm);