'use strict';

const title = document.querySelector(`.title`);

const adalaber1 = {}
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.job = 'periodista';
adalaber1.speak = (phrase) => `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`;

console.log(adalaber1.speak());
title.innerHTML += adalaber1.speak();


const adalaber2 = {}
adalaber2.name = 'Rocío';
adalaber2.age = 32;
adalaber2.job = 'una perra';
adalaber2.speak = (phrase) => `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;

title.innerHTML += adalaber2.speak();