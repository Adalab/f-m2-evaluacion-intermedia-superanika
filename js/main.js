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

    const inputNumber = parseInt(input.value);
    
    if (inputNumber < randomNumber) {
        if (inputNumber < 0) {
            hint('Debes introducir un número mayor que 0');
        } else {
            hint('No llegaste');
        };
        acc();

    }
    else if (inputNumber > randomNumber) {
        if (inputNumber > 100) {
            hint('Debes introducir un número menor que 100');
        }else {
            hint('Te has pasado');
        }
        acc();
    }
    else if (inputNumber === randomNumber){
        hint('¡has ganado campeona!');
    }
    else  {
        hint('¡Debes introducir un número primero!');
        acc();
    }
}

button.addEventListener('click', adivina);