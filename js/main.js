// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::ESERZICIO PALINDROMO::::::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.Chiedere

/*
PSEUDOCODIFICA:
chiedo la parola al cliente
divido la parola in lettere
inverto il senso delle lettere nello stesso ordine
confonto se:
parola dritta == a parola inversa: è palindroma
parola dritta != a parola inversa: non è palindroma
*/


const myBtnPali = document.getElementById('palindromo');
const myBtnPariDispari = document.getElementById('pari_dispari');
const boxPali = document.getElementById('container_text1');
let convalida = false;

// myBtnPali.addEventListener('click', function(){
// let parola = prompt('Inserisci una parola per capire se è palindroma');
// let lettereDellaParola = parola.split('');
// let lettereAlContrario = lettereDellaParola.reverse();
// let parolaAlContrario = lettereAlContrario.join(''); 
// if (parola == parolaAlContrario) {
//     boxPali.innerHTML = 'la parola '+ parola + ' è palindroma.'
// } else {
//     boxPali.innerHTML = 'la parola '+ parola + ' non è palindroma.'
// }

// myBtnPali.innerHTML = 'Riprova';

// }) 

// ::::::::::::::::::metodo while:::::::::::::::::::::::::::

myBtnPali.addEventListener('click', function(){
let parolaUser = prompt('Scegli la tua parola');
let carattere;
let parolaInversa = '';

let i = parolaUser.length - 1;
while (i >= 0) {
  carattere = parolaUser[i];
  parolaInversa += carattere;
  i--;
}

if(parolaUser == parolaInversa){
    boxPali.innerHTML = 'la parola '+ parolaUser + ' è palindroma.'
  } else {
    boxPali.innerHTML = 'la parola '+ parolaUser + ' non è palindroma.'
  }

  myBtnPali.innerHTML = 'Riprova';

}) 



// function invertiParola(str){
//   let parolaInversa = '';

//   let i = str.length - 1;

//   while (i >= 0) {
//     parolaInversa += str[i];
//     i--;
//   }

//   return parolaInversa;
// }

// function invertiParola(str) {
//     if (str !== "")
//       return invertiParola(str.substr(1)) + str.charAt(0);
//    else
//      return "";
//   }
  
//   console.log(invertiParola("coding"));
  


// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ::::::::::::::::::::::::ESERZICIO PARI E DISPARI::::::::::::::::::::::
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/*
PSEUDOCODIFICA:
utente sceglie pari o dispari
utente inserisce numero da 1 a 5
il pc genera un numero casuale da 1 a 5
sommiamo il numero utente e numero pc
se ha vinto utente 'utente ha vinto'
se ha vinto pc 'pc ha vinto'
*/

const boxPariDispari = document.getElementById('container_text');

myBtnPariDispari.addEventListener('click', function () {
    
    let sceltaPariDispariUser = prompt('scegli pari o dispari');
    let sceltaNumeroUser = parseInt(prompt('Scegli un numero da 1 a 5'));
    let sceltaPC = randomPc(1, 5);
    let somma = sceltaNumeroUser + sceltaPC;
    
    
    function randomPc(min , max) {
        return Math.floor(Math.random() * (max - min++) + min); 
    }
    
    if (pariODispari(somma) == sceltaPariDispariUser) {
        boxPariDispari.innerHTML = 'Hai vinto!! la tua scelta era: ' + sceltaPariDispariUser + '. Il pc ha pescato: ' + sceltaPC + ', e la somma è ' + somma;
    } else {
        boxPariDispari.innerHTML = 'Il Pc ha vinto! la tua scelta era: ' + sceltaPariDispariUser + '. Il pc ha pescato: ' + sceltaPC + ', e la somma è ' + somma;
    }

    function pariODispari(risultato) {
        if (risultato%2 == 0) {
            return 'pari';        
        } else {
            return 'dispari';
        }
    }

    myBtnPariDispari.innerHTML = 'Riprova';
})





