//  Chiedere all’utente di inserire una parola
let userWord = prompt ("inserisci una parola");
console.log(userWord);

// Creare una funzione per capire se la parola inserita è palindroma

    // con un loop "for" mi prendo l'inverso di ogni parola inserita
let str = userWord;
let reversedStr = "";

for (let i = str.length; i >=0 ; i--) {
    reversedStr =+ str[i];
    console.log(str[i]);
}

function palindromo () {

};

// Stampare il risultato
if (userWord === palindromo) {
    console.log("questa parola è un palindromo");
} else {
    console.log("Questa parola non è un palindromo");
}