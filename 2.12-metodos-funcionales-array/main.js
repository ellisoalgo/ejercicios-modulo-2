"use strict";

const girls = [
    { name: 'Ana', score: 10 },
    { name: 'Antia', score: 10 },
    { name: 'Belén', score: 10 },
    { name: 'Bessy', score: 10 },
    { name: 'Elena', score: 10 },
    { name: 'Esther', score: 15 },
    { name: 'Indra', score: 10 },
    { name: 'Izabela', score: 15 },
    { name: 'Lara', score: 10 },
    { name: 'Lau', score: 10 },
    { name: 'Maialen', score: 10 },
    { name: 'Maria', score: 10 },
    { name: 'Marta A.', score: 10 },
    { name: 'Marta B.', score: 17 },
    { name: 'Reyes', score: 10 },
    { name: 'Sara G.', score: 10 },
    { name: 'Sara S.', score: 16 },
    { name: 'Virginia', score: 10 },
  ];


// let indice = '';
// for (let i = 0; i < girls.length; i++) {
//     if(girls[i] === "Elena"){
//         indice = i;
//         break;
//     }
// };
// console.log(indice);

const position = girls.findIndex((item) => item.name === "Elena");
console.log(position);

const findGirl = girls.find((item)=> item.score > 15);
const filterGirl = girls.filter((item)=> item.score > 15);
console.log(findGirl);
console.log(filterGirl);

const findName = 'ma';
const  maGirl = girls.filter(
    (item)=> 
        item.name.toLowerCase().includes(findName.toLowerCase())
        &&
        item.score > 15
    );
console.log(maGirl);

//map - añadir un nuevo dato a cada item
const girlsComplete = girls.map((item)=> {
    const newItem = {name: item.name, score: item.score, matricula: item.score *5}
    return newItem
});
console.log(girlsComplete);

//Ejercicio 1 - map

const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((grade) =>grade+1);
console.log(inflatedMarks);

//Ejercicio 2 - map

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const greetings = names.map((name) => 'Bienvenida ' + name);
console.log(greetings);

//Ejercicio 3 - map

const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
];

const greeting = users.map(user => {
    if (user.isPremium) {
        return `Bienvenida ${user.name}. Gracias por confiar en nosotras.`;
    } else {
        return `Bienvenida ${user.name}.`;
    }
});

greetings.forEach(greeting => console.log(greeting));