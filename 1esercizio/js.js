// /***
//  * Completare il codice JavaScript successivo in modo che la variabile "x" finisca
//  * per contenere la stringa "Geronimooo!" (con 3 o)
// */

// let x = 'Geronimo';
// for (let i = 0; i < x; i++) {
//     x += 'Geronimoooo';
// }
// console.log(x); // deve stampare la stringa "Geronimooo!"


// /**
//  * Completare il codice JavaScript successivo in modo
//  * che la funzione "sum" restituisca la somma dei suoi due argomenti
// */

// function sum(a,b) {
//     return a + b;
// }


// console.log(sum(4,4)); // deve stampare il numero 8


// /**
//  * Completare il codice JavaScript successivo in modo
//  * che la funzione "extractSecond" restituisca il secondo
//  * elemento dell'array che viene passato come argomento
// */

// function extractSecond(array) {
//     return array[1];
// }

// const s = extractSecond(['cat', 'dog', "bird"]);
// console.log(s); // deve stampare "dog"


// /**
//  * Completare il codice JavaScript successivo in modo
//  * che la riga 8 venga eseguita e la riga 11 no.
// */

// const m = 10 % 3;
// const p = 8;
// if (p === 8) {
//     console.log("Ramo 1 eseguito"); // Questa istruzione deve essere eseguita
// }
// else {
//     console.log("Ramo 2 eseguito"); // Questa no
// }



/***
 * Completare il codice JavaScript successivo in modo
 * che la riga 13 venga eseguita e la riga 16 no.
*/

// let x = 0;
// for (let i = 0; i < 2; i++) {
//     x += i;
//     x = x + i;
// }
// if (x === 2) {
//     console.log("Ramo 1 eseguito"); // Questa istruzione deve essere eseguita
// }
// else {
//     console.log("Ramo 2 eseguito"); // Questa no
// }


/***
 * Completare il corpo della funzione "even" in modo che il valore
 * da essa restituito sia true se l'unico numero passato come argomento è pari,
 * e false altrimenti
*/

// function even(number) {
//     if(number % 2 == 0){
//          return true;
//     } else {
//         return false;
//     }
// }

// const x = even(3);
// console.log(x); // deve stampare false
// const y = even(10);
// console.log(y); // deve stampare true



/***
 * Completare il corpo della funzione "split" in modo che il valore
 * da essa restituito sia un array contenente i caratteri della stringa
 * passata come unico argomento alla funzione
*/

// function split(word) {
//     return word.split("");
// }

// const x = split("Ciao");
// console.log(x); // deve stampare l'array ["C", "i", "a", "o"]


/***
 * Completare il codice seguente in modo che la variabile "truth" finisca per
 * contenere il numero 2
*/

// const object = {
//     first: 0,
//     second: 1,
//     third: 2,
// };

// const two = object["third"];
// console.log(two)// deve stampare numero 2


/***
 * Completare il codice JavaScript successivo in modo
 * che la riga 11 venga eseguita.
*/

// const y = 0;
// const x = (y + 2) * 3;
// const k = x % 4;
// const j = k / 2;
// if (j !== 2) {
//     console.log("Esercizio 9: ramo 1 eseguito");
// }


/***
 * Completare il corpo della funzione accumulate in modo che il valore
 * da essa restituito sia la somma di tutti i numeri contenuti
 * nell'array passato come parametro
*/

// function accumulate(numbersArray) {
    
//     const sum = numbersArray.reduce((acc,total) => {
//         return acc + total;
//     });

//     return sum;

// }

// const x = accumulate([2, 5, 7]);
// console.log(x); // deve stampare il numero 14


/***
 * Completare il corpo della funzione acc in modo che il valore
 * da essa restituito sia la media dei numeri contenuti nell'array
*/

// function average(numbersArray) {
    
//     const sum = numbersArray.reduce((acc,total) => {
//         return acc + total;
//     })

//     return sum / numbersArray.length;

// }

// const x = average([3, 5, 10]);
// console.log(x); // deve stampare il numero 6



/***
 * Completare il corpo della funzione shallowCopy in modo che il valore
 * da essa restituito sia un array contenente i valori dell'array arr
*/

// function shallowCopy(arr) {
    
//     let newArray = arr.slice();

//     return newArray;
// }

// const numbers = [3, 5, 10];
// const x = shallowCopy(numbers);
// console.log(x); // deve stampare l'array [3, 5, 10]



/***
 * Completare il corpo della funzione toString in modo che il valore
 * da essa restituito sia una stringa che rappresenta il valore numerico
 * passato come argomento
*/

// function toString(number) {
//     return number.toString();
// }

// let x = toString(39);
// console.log(x); // deve stampare la stringa "39"



/***
 * Completare il codice JavaScript successivo in modo che la variabile "picked" finisca
 * per contenere tutti i numeri in corrispondenza della chiave "value" nell'array "objects".
*/

// const objects = [
//     {
//         value: 0,
//     },
//     {
//         value: 5,
//     },
//     {
//         value: 10,
//     }
// ];
// let picked = [];
// for (let i = 0; i < Object.keys(objects).length; i++) {
    
//     picked.push(objects[i].value)

// }
// console.log(picked); // deve stampare l'array [0, 5, 10]



/***
 * Completare il corpo della funzione "exchange" in modo che restituisca
 * lo stesso array passato come argomento, ma con gli elementi alla posizione
 * 0 e 1 scambiati di posto
*/

// function exchange(array) {
    
//     let result = [];

//     for(let i = array.length - 1; i >= 0; i --){


//         result.push(array[i]);


//     }

//     return result;

// }
// const array = [101, 102];
// const exchanged = exchange(array);
// console.log(exchanged); // deve stampare l'array [102, 101];



/***
 * Completare il corpo della funzione "exchange" in modo che restituisca
 * lo stesso array passato come argomento, ma con gli elementi alla posizione
 * 0 e 1 scambiati di posto
*/

// function exchange(array) {
    
//   [array[0], array[1]] = [array[1], array[0]];

//   return array;

// }
// const array = [101, 102];
// const exchanged = exchange(array);
// console.log(exchanged); // deve stampare l'array [102, 101];


/***
 * Completare il codice JavaScript successivo in modo
 * che la variabile "greeting" finisca per contenere la stringa
 * "Hello, Juliet!"
*/

// const name = 'Juliet';
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // deve stampare la stringa "Hello, Juliet!";





/***
 * Completare il codice seguente in modo
 * che la variabile "initials" finisca per contenere
 * le lettere iniziali dei nomi nell'array "names"
 * 
 * BONUS: usare un ciclo for per risolvere l'esercizio
*/

// const names = [
//     "Barbara",
//     "Franco",
//     "Elena",
//     "Rodolfo",
//     "Ariel",
//     "Andrea",
// ];
// const initials = [];

// function firstLetter(letters){

//     for(let i = 0; i < names.length; i++){

//         let name = names[i];

//         for(let i = 0; i < name.length; i++){

//             let firstLetter = name[0];

//             initials.push(firstLetter);

//             break;

//         }

//     }

//     return initials;

// }


// firstLetter(initials);

// console.log(initials); // deve stampare l'array ["B", "F", "E", "R", "A", "A"]



/***
 * Completare il codice seguente in modo
 * che tutte le parole conute nell'oggetto "object" alle varie chiavi
 * vengano sostituite con la loro rispettiva traduzione
 * 
*/

// const object = {
//     a: "Hello",
//     b: "World",
//     c: "!",
// };


// function traduzione(translate){

//     const translations = {
//         "Hello": "Ciao",
//         "World": "Mondo",
//         "!": "!"
//     };

//     for(let i = 0; i < Object.keys(translate).length; i++){

//         let key = Object.keys(translate)[i];

//         translate[key] = translations[translate[key]];

//     }
// }


// traduzione(object);


// console.log(object);
/* deve stampare l'oggetto: {
    a: "Ciao",
    b: "Mondo",
    c: "!",
}
*/



/***
 * Completare il codice JavaScript successivo in modo
 * che la riga 17 venga eseguita.
*/

// const oggettone = {
//     lista: [
//         {
//             valore: "CHIAVE_SEGRETA",
//         }
//     ]
// };
// const lista = oggettone.lista;
// const primo = lista[0];
// const valore = primo.valore;
// if (valore === "CHIAVE_SEGRETA") {
//     console.log("Esercizio 19: ramo 1 eseguito");
// }


/***
 * Completare il codice JavaScript successivo in modo
 * che la riga 19 venga eseguita.
*/

// function secret(firstArg, secondArg, thirdArg) {
//     if (firstArg > 0) {
//         if (secondArg % 2 !== 0) {
//             return thirdArg.length;
//         } else {
//             return thirdArg.length * thirdArg.length;
//         }
//     }
//     return -1;
// }

// const x = secret(1, 10, "kkk");
// if (x === 9) {
//     console.log("Esercizio 20: ramo 1 eseguito");
// }



