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
const myBtnPali = document.querySelector('palindromo');
const myBtnPariDispari = document.querySelector('.pari_dispari');
const boxPali = document.querySelector('.container_pali');
let convalida = false;


let parola = prompt('Inserisci una parola per capire se è palindroma');
let lettereDellaParola = parola.split('');
let lettereAlContrario = lettereDellaParola.reverse();
let parolaAlContrario = lettereAlContrario.join(''); 
    

if (parola == parolaAlContrario) {
    boxPali.innerHTML = 'la parola '+ parola + ' è palindroma.'
} else {
    boxPali.innerHTML = 'la parola '+ parola + ' non è palindroma.'
}
     




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