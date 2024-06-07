'use strict';

const hourBox = document.querySelector(".js_hours");
const minuteBox = document.querySelector(".js_minutes");
const secondBox = document.querySelector(".js_seconds");
const btnStop = document.querySelector(".js_stop_button");
const btnStart = document.querySelector(".js_start_button");

//Para coger la hora actual
const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
console.log(hours, minutes, seconds);

const render = ()=>{
    hourBox.innerHTML = hours <10 ? `0${hours}` : hours;
    minuteBox.innerHTML = minutes <10 ? `0${minutes}` : minutes;
    secondBox.innerHTML = seconds <10 ? `0${seconds}` : seconds;
};

function updateTime(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    };
    if (minutes === 60){
        minutes = 0;
        hours++;
    };
    if (hours > 23){
        hours = 0;
    };
    render();
};

render();
//ejecutar updateTime cada segundo
let idInterval = setInterval(updateTime, 1000);

const handleStop =()=>{
    clearInterval(idInterval);
    btnStart.classList.remove('hidden');
};
btnStop.addEventListener('click', handleStop);

const handleStart =()=>{
    btnStart.classList.add('hidden');
    idInterval = setInterval(updateTime, 1000);
};
btnStart.addEventListener('click', handleStart);