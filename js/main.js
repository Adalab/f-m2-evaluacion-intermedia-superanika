'use strict';

const counter = document.querySelector('.counter');
const input = document.querySelector('#guess');
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
const randomNumber = getRandomNumber(100);

let i = 0;
write(counter, i);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

  console.log('> '+ randomNumber);

  function write(selector, text) {
      selector.innerHTML = text;
  }

  
function hint(clue) {
    write(message, clue);
}
function acc() {
    i = i + 1;
    write(counter, i);
}

function adivina () {

    const inputNumber = input.value;
    
    if (inputNumber < randomNumber) {
        hint('Demasiado bajo');
        acc()

    }
    else if (inputNumber > randomNumber) {
        hint('Demasiado alto');
        acc()
    }
    else  {
        hint('¡has ganado campeona!');
    }



}

button.addEventListener('click', adivina);