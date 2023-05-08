// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoice = prompt ("Scegli pari o dispari");
console.log(userChoice);

while (userChoice !== "pari" && userChoice !== "dispari") {
    userChoice = prompt("Scegli pari o dispari");
  }

if (userChoice === "pari") {
  console.log("hai scelto pari");
} else if (userChoice === "dispari") {
console.log("hai scelto dispari");
} else {
  
}

// L'utente inserisce un numero da 1 a 5
const userNumber =parseInt(prompt ("Scegli un numero da 1 a 5"));
console.log(userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const computerChoice = Math.floor(Math.random() * 5) + 1;
console.log(computerChoice);


// Sommiamo i due numeri 
let sum = userNumber + computerChoice;
console.log(sum);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
if (sum % 2 === 0) {
    console.log("Il numero è pari, quindi")
} else {
    console.log("Il numero è dispari, quindi");
}
// Dichiariamo chi ha vinto.

if (userChoice) {
console.log("Complimenti Hai vinto");
} else {
    console.log("Oh no hai perso!");
}