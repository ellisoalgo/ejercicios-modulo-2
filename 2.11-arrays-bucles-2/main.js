"use strict";

function get100Numbers(){
    const arr = [];
    for (let i = 1; i < 101; i++){
        arr.push(i);
    }
    console.log(arr);
};

get100Numbers();

//

const lostNumbers = [4, 8, 15, 16, 23, 42];

//nuevo array solo con numeros pares - funcion que recorre lostNumbers y mira cuales son pares
const lostPairs = []

function findPairs(){
    for (let i = 0; i < lostNumbers.length; i++){
        if (lostNumbers[i] % 2 === 0){
            lostPairs.push(lostNumbers[i]);
        };
    };
    console.log(lostPairs);
};

findPairs();

//solo nums divisibles por 3

const lostThirds = [];

function findThirds(){
    for (let i = 0; i < lostNumbers.length; i++){
        if (lostNumbers[i] % 3 === 0){
            lostThirds.push(lostNumbers[i]);
        };
    };
    console.log(lostThirds);
};

findThirds();

//

const result = lostPairs.concat(lostThirds);
console.log(result);

// bonus: christmas tree ▲

const star = ['*'];
console.log(star);

const tree = ['▲'];
console.log(tree);

function makeTree(){
    for (let i = 0; i < 4; i++){
        tree.push('▲');
        console.log(tree);
    };
};

makeTree();

const trunk = ['|'];
console.log(trunk);

//probably not the way to do it, but whatever

const schedule = [
    ["Kahoot", "Pair programming"],
    ["Kahoot", "Project"],
    ["Pair programming", "Kahoot"],
    ["Agile", "Interviews"],
    ["Project", "Beers"],
  ];
  
  for (let day = 0; day < schedule.length; day += 1) {
    for (let hour = 0; hour < schedule[day].length; hour += 1) {
      console.log(`On day ${day} at hour ${hour} we have ${schedule[day][hour]}`);
    }
  }



