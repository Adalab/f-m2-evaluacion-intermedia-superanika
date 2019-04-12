'use strict';

const counter = document.querySelector('.counter');
const input = document.querySelector('#guess');
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
const randomNumber = getRandomNumber(100);
const resetBtn = document.querySelector('.reset');

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
function addClass(selector, className) {
    selector.classList.add(className);
}

function rmvClass(selector, className) {
    selector.classList.remove(className);
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
        addClass(message, 'win');
        rmvClass(resetBtn, 'hide');
        addClass(button, 'hide');
    }
    else  {
        hint('¡Debes introducir un número primero!');
        acc();
    }
}

function reset() {
    i = 0;
    addClass(resetBtn, 'hide');
    rmvClass(button, 'hide');
    rmvClass(message, 'win');
    input.value = "";
    hint(`Escribe un numero y dale a <span class="prueba">Prueba</span>`);
}

button.addEventListener('click', adivina);
resetBtn.addEventListener('click', reset);