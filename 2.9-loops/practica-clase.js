// for --> clasico
// for-of --> no tengo acceso a la posición
// while

const ages = [25, 35, 54, 82, 66, 10, 30];

console.log(ages[0]); //sin bucles, repetir esto tantas veces como elementos que hay en el array


 //la variable i solo existe dentro del for
 //i++ = i +1
for(let i = 0; i < ages.length; i++){
    console.log(ages[i]); 
    //entre corchetes la i porque lleva la cuenta de la posición
};

for(const item of ages){
    console.log(item);
} 