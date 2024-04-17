"use strict";

const select = document.querySelector(".js_face_select");
const btn = document.querySelector(".js_btn");
const h1 = document.querySelector(".js_face");
const main = document.querySelector(".main");

select.value;

const updateFace = () =>{
    const valueSelect = select.value;
    console.log(valueSelect);
    if(valueSelect === "happy"){
        h1.innerHTML = ":)";
    } else if (valueSelect === "sad"){
        h1.innerHTML = ":(";
    }
};

const getRandomNumber = ()=>{
    return Math.round(Math.random() * 100);  //dame un numero redondeado (entero) random entre el 0 y el 100
};

//cambiar el color de fondo basado en el numero random generado
const changeBackground = ()=>{
    const number = getRandomNumber();
    console.log(number);

    if (number % 2 === 0){
        main.classList.add("yellow");
        main.classList.remove("orange");
    } else {
        main.classList.add("orange");
        main.classList.remove("yellow");
    };
};

const handleClick = (event) =>{
    event.preventDefault();
    //modifica la cara
    updateFace();
    //cambiar color de fondo
    changeBackground();
};

btn.addEventListener('click', handleClick);