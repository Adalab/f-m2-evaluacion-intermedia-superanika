'use strict';

const counter = document.querySelector('.counter');
const input = document.querySelector('#guess');
const button = document.querySelector('.btn');
const message = document.querySelector('.message');
const resetBtn = document.querySelector('.reset');
let randomNumber = getRandomNumber(100);


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
function reset() {
    i = 0;
    write(counter, i);
    addClass(resetBtn, 'hide');
    rmvClass(button, 'hide');
    rmvClass(message, 'win');
    input.value = "";
    hint(`Escribe un numero y dale a <span class="prueba">Prueba</span>`);
    randomNumber = getRandomNumber(100);
    console.log('> '+ randomNumber);
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



button.addEventListener('click', adivina);
resetBtn.addEventListener('click', reset);