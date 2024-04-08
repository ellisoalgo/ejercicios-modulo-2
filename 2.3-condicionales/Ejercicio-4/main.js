"use strict;"

const input = document.querySelector('.input_age');
const btn = document.querySelector('.js_btn');

btn.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const result = document.querySelector('.answer'); 
    const dogAge = parseInt(input.value);

    if (dogAge === 1){
        let humanAge = 15;
        result.innerHTML = `<p>Your dog is ${humanAge} years old!</p>`;
    } else if (dogAge === 2){
        let humanAge = 24;
        result.innerHTML = `<p>Your dog is ${humanAge} years old!</p>`;
    } else if (dogAge > 2){
        let humanAge = 24 + 5 * (dogAge - 2);
        result.innerHTML = `<p>Your dog is ${humanAge} years old!</p>`;
    }
});