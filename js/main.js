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

/*
const myBtnPali = document.getElementById('palindromo');
const myBtnPariDispari = document.getElementById('pari_dispari');
const boxPali = document.getElementById('container_pali');
let convalida = false;

myBtnPali.addEventListener('click', function(){
let parola = prompt('Inserisci una parola per capire se è palindroma');
let lettereDellaParola = parola.split('');
let lettereAlContrario = lettereDellaParola.reverse();
let parolaAlContrario = lettereAlContrario.join(''); 
if (parola == parolaAlContrario) {
    boxPali.innerHTML = 'la parola '+ parola + ' è palindroma.'
} else {
    boxPali.innerHTML = 'la parola '+ parola + ' non è palindroma.'
}
}) 
*/  






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

let sceltaPariDispariUser = prompt('scegli pari o dispari');
let sceltaNumeroUser = parseInt(prompt('Scegli un numero da 1 a 5'));
let sceltaUser = ['']
let sceltaPC = ['']
let somma = 0;

for (let user = 0; user < sceltaUser.length; index++) {
    if (sceltaNumeroUser > 5) {
        sceltaNumeroUser = parseInt(prompt('Scegli un numero da 1 a 5'));
    } else if (sceltaNumeroUser == 0) {
        alert('Non puoi scegliere ZERO');
        sceltaNumeroUser = parseInt(prompt('Scegli un numero da 1 a 5'));
    } else {
        sceltaUser.push(sceltaNumeroUser(user) + sceltaPariDispariUser(user));
    }    
}

for (let pc = 0; pc < sceltaPC.length; pc++) {
    sceltaPC = Math.floor(Math.random() * (5 - 1) + 1);
    sceltaPC.push(pc)  
}