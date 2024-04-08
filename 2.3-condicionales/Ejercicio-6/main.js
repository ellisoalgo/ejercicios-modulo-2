"use strict";

window.addEventListener('scroll', ()=>{
    if (window.scrollY < 100){
        document.body.style.backgroundColor = '#FA1CD3';
    } else if (window.scrollY > 100 && window.scrollY < 199 ) {
        document.body.style.backgroundColor = '#C499FA';
    } else if (window.scrollY > 199 && window.scrollY < 300 ){
        document.body.style.backgroundColor = '#6970F5';
    }
});