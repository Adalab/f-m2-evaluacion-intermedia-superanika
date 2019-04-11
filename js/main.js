'use strict';

const counter = document.querySelector('.counter');
const input = document.querySelector('#guess');
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
const randomNumber = getRandomNumber(100);

let i = 0;
counter.innerHTML = i;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  console.log('> '+ randomNumber);
  
function hint(clue) {
    message.innerHTML = clue;
}

function adivina () {

    const inputNumber = parseInt(input.value);
    
    if (inputNumber < randomNumber) {
        hint('Demasiado bajo');
        i = i + 1;
        counter.innerHTML = i;

    }
    else if (inputNumber > randomNumber) {
        hint('Demasiado alto');
        i = i + 1;
        counter.innerHTML = i;

    }
    else  {
        hint('¡has ganado campeona!');
    }



}

button.addEventListener('click', adivina);