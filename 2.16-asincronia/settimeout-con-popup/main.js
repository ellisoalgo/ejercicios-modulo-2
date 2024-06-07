"use strict";

const modalWindow = document.querySelector(".js_newsletter");
const btnClose = document.querySelector(".js_close-btn");
const emailInput = document.querySelector(".js_email");
const p = document.querySelector(".js_paragraph");

function showModal(){
    console.log("ha pasado dos segundos");
    modalWindow.classList.remove('hidden');  
};

setTimeout(showModal, 2000);

function handleClose(){

    if(emailInput.value !== ''){
        modalWindow.classList.add('hidden');
        p.innerHTML = emailInput.value;
    };
};

btnClose.addEventListener('click', handleClose);