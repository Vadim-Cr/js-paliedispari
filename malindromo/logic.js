//  Chiedere all’utente di inserire una parola
let userWord = prompt ("inserisci una parola");
console.log(userWord);

// Creare una funzione per capire se la parola inserita è palindroma

    // con un loop "for" mi prendo l'inverso di ogni parola inserita
    let str = userWord;
function isPalindromo () {
    let reversedStr = "";
    
    for (let i = str.length - 1; i >=0 ; i--) {
        reversedStr += str[i];
        // console.log(str[i]);
    }

    if (userWord === reversedStr) {
        return true;
    } else {
        return false;
    }
};

if (isPalindromo ()) {
    console.log("è");
} else {
    console.log("non è");
};
