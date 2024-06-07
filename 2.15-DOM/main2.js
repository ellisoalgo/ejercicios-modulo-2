"use strict";

const ul = document.querySelector(".js-list");

const data = [
    {
      id: '123x',
      title: 'Titulo 1',
      desc: 'cariñoso',
      img: 'https://placedog.net/200x300',
      autor: 'Nuria',
    },
    {
      id: '2567y',
      title: 'Titulo 2',
      desc: 'elegante',
      img: 'https://placedog.net/200x200',
      autor: 'Nayra',
    },
    {
      id: '378o',
      title: 'Titulo 3',
      desc: 'arisco',
      img: 'https://placedog.net/300x200',
      autor: 'Almudena',
    },
];

const handleClick = (event)=>{
    const liClicked = event.currentTarget.id;
    
    console.log(event.currentTarget.dataset.autor);

    //buscar en el array por el id clickado
    const findDog = data.find((item)=>item.id === liClicked);
    console.log(findDog.desc);
};

const listener = () =>{
    const allLi = document.querySelectorAll('li');
    for (const li of allLi){
        li.addEventListener('click', handleClick);
    };
};
//hay que crear la función de eventlistener primero, porque si lo ponemos al final, no funcionara. Se tiene que definir antes de llamarla

function render(){
    for(const eachData of data){
        const li = document.createElement('li');
        // asignar id
        // interesa darle SIEMPRE a cada li o cada objeto en un array una ID, un valor unico para identificarlo
        li.setAttribute('id', eachData.id);
        //guarda info meta
        li.dataset.autor = eachData.autor;
        ul.appendChild(li);
        
        const article = document.createElement('article');
        article.setAttribute('class', 'card');
        li.appendChild(article);
        
        const image = document.createElement('img');
        image.src = eachData.img;
        image.setAttribute('alt', eachData.desc);
        article.appendChild(image);

        const title = document.createElement('h3');
        const textTitle = document.createTextNode(eachData.title);
        title.appendChild(textTitle);
        article.appendChild(title);

        const desc = document.createElement('p');
        const textDesc = document.createTextNode(eachData.desc);
        desc.appendChild(textDesc);
        article.appendChild(desc);

    };

    listener(); //ejecutar función eventlistener despues de crear los li
};



//cuando cargue la página se ejecuta
render();

