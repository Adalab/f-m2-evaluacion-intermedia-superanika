'use strict';

const counter = document.querySelector('.counter').innerHTML;
const input = document.querySelector('#guess');
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
const randomNumber = getRandomNumber(100);


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  console.log('> '+ randomNumber);
  

function adivina () {

    const inputNumber = parseInt(input.value);

    
    if (inputNumber < randomNumber) {
        message.innerHTML = 'Demasiado bajo';
    }
    else if (inputNumber > randomNumber) {
        message.innerHTML = 'Demasiado alto';
    }
    else  {
        message.innerHTML = '¡has ganado campeona!';
    }

}

button.addEventListener('click', adivina);