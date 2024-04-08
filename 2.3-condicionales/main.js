"use strict";

/*
Ejercicio 2.3.3. - 1
1. Variables: input, submit
2. Event: click on submit, appear message
3. Conditional: if input = María or Luísa -> Bienvenida, + name
4. Conditional: if input !== María or Luisa -> "Lo siento pero el usuario que has introducido no está registrado"
*/

const nameInput = document.querySelector('.input');
const sumbit = document.querySelector('.submit');
const welcomeMessage = document.querySelector('.js_div');

sumbit.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const nameValue = nameInput.value;
    if (nameValue === 'María'){
        welcomeMessage.innerHTML = '<span>Bienvenida María</span>';
    } else if (nameValue === 'Luísa'){
        welcomeMessage.innerHTML = '<span>Bienvenida Luísa</span>';
    } else {
        welcomeMessage.innerHTML ='<span>Lo siento pero el usuario que has introducido no está registrado</span>';
    }
});

//Ejercicio 2.3.3. - 2
const answer = document.querySelector('.js_number');

answer.addEventListener('change', ()=>{
    const answerInput = parseFloat(answer.value);
    if (answerInput === 0) {
        console.log('El número es 0');
      } else if (answerInput % 2 !== 0) {
        console.log('El número es negativo');
      } else if (answerInput + 2 >13 && answerInput <=20) {
        console.log('El número más 2 es mayor que 13 pero menor o igual que 20');
      } else if (answerInput >20 && answerInput <50) {
        console.log('El número es mayor que 20 pero menor que 50');
      } else {
        console.log('el número no es 123123125');
      }
});


