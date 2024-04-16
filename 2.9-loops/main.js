"use strict";

//2.9 ex 1
for (let i = 1; i < 11; i++){
    console.log("Voy por la vuelta " + i);
}


// for (let acc = 0; acc < 10; acc++){
//     const answer = acc + 2;
//     console.log(`El resultado es: ` + answer);
// }

//2.9 ex2
const numbers = [14, 5, 3, 7, 6, 10];
let acc = 0;
let result = 0;
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
    acc += numbers[i];
    result = acc/numbers.length;
};

console.log(`Total igual a: ` + result);

//2.9 ex3

const book1 = document.querySelector(".book_input1");
const book2 = document.querySelector(".book_input2");
const btn = document.querySelector(".button");
const reply = document.querySelector(".reply");

let books = [];

function clearInputs() {
    // Clear input values
    book1.value = "";
    book2.value = "";
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    const bookValue1 = book1.value;
    const bookValue2 = book2.value;

    books.push(bookValue1, bookValue2);

    clearInputs();
    
    reply.innerHTML = "";
    for (const answerBack of books) {
        reply.innerHTML += `¡A mí también me encantó ${answerBack}! ¡Cuántas cosas tenemos en común, humana!<br>`;
    }
});
