"use strict";

/*function sum(a, b){
    return a * b;
}

const result = sum(3, 7);
console.log('result', result);*/

/*function sum(a, b, c, d){
    return (a + b + c + d)/4; 
}

const media = sum(3, 3, 6, 1);
console.log(media);*/

/*
//Didnt work, don't know why
function sum(a){
    if (sum % 2 == 0){
        return true;
    } else {
        return false;
    }
}

const answer = sum(4);
console.log('answer is ' + answer);*/


/*function price(a) {
    const sinIVA = a;
    const IVA = a * 0.21;
    const total = sinIVA + IVA;
    return { sinIVA, IVA, total };
}

const { sinIVA, IVA, total } = price(10);
console.log('El precio sin IVA es ' + sinIVA + ', el IVA es ' + IVA + ', el total es ' + total);*/

function handleClick() {
    console.log('click!');
}

const myBtn = document.querySelector('.button');
myBtn.addEventListener('click', handleClick);