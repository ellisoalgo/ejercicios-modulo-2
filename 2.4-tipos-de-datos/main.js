const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const firstName = document.querySelector('.first_name');
const firstImg = document.querySelector('.first_img');
const secondName = document.querySelector('.second_name');
const secondImg = document.querySelector('.second_img');
const thirdName = document.querySelector('.third_name');
const thirdImg = document.querySelector('.third_img');

firstName.innerHTML = `${firstDogName}`;
firstImg.src = `${firstDogImage}`;
secondName.innerHTML = `${secondDogName}`;
secondImg.src = `${secondDogImage}`;
thirdName.innerHTML = `${thirdDogName}`;
thirdImg.src = `${thirdDogImage}`;

const name = 'Ellis Jane Whitney';
const result = document.querySelector('.result');

result.innerHTML = `My name is ${name} and it is made up of ` + name.length + ` characters.`;