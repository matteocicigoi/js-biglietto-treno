'use strict';

//prompt km da percorrere (km) e età (eta)
const km = parseInt(prompt('Inserisci i km da percorrere'));
const eta = parseInt(prompt('Inserisci l\'età'));

//prezzo
let prezzo = km * 0.21;

//sconto
if(eta < 18){
    prezzo *= 0.8;
}else if(eta > 65){
    prezzo *= 0.6;
}

//arrotonda a due cifre decimali
console.log('Prezzo: ', prezzo.toFixed(2) + '€');