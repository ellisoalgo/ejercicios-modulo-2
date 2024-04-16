const productsList = [
  {
    name: 'Pan',
    stock: 5,
    price: 2,
    origin: {
      city: 'madrid',
      country: 'españa',
    },
  },
  {
    name: 'queso',
    stock: 20,
    price: 5,
    origin: {
      city: 'roma',
      country: 'italia',
    },
  },
  {
    name: 'cafe',
    stock: 10,
    price: 5,
    origin: {
      city: 'bogota',
      country: 'colombia',
    },
  },
];

const ulList = document.querySelector('.js_list');

function renderProduct(product) {
  /*  es como si hiciese esto: 
    product= {
    name: 'Pan',
    stock: 5,
    price: 2,
    origin: {
      city: 'madrid',
      country: 'españa',
    },
  },
    */
  ulList.innerHTML += `
    <li class="card">
        <h3> ${product.name} </h3>
        <h4> ${product.price}</h4>
        <h5> ${product.origin.country} </h5>
    </li>
`;
}

for(let i= 0; i < productsList.length; i++){
  renderProduct(productsList[i]);
};



function handleClick(ev) {
  console.log(ev.currentTarget);
  console.log(ev.target);
  console.log(ev.target.parentNode);
  const liElement = ev.target.parentNode;
  liElement.classList.toggle('red');
}

ulList.addEventListener('click', handleClick);

const arrayLi = document.querySelectorAll('.card');
console.log(arrayLi);

/*
arrayLi[0].addEventListener()
arrayLi[1].addEventListener();
arrayLi[2].addEventListener();
*/
