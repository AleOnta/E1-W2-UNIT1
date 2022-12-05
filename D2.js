/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

 I datatypes in JS sono:
 - number = si tratta di numeri, i numeri possono essere di tipo interi (semplici numeri come 1, 2, 3) oppure decimali (numeri con la virgola) anche detti float;
 - string = anche dette stringhe, rappresentano una parola o un insieme di parole (frase) e quindi sono composte da lettere;
 - bool = ovvero i valori booleani, che si basano su una doppia condizione - vero (true) o falso (false);
 - null = si tratta di una keyword atta ad indicare un'assenza di valore di tipo 'intenzionale';
 - undefined = si tratta invece di un valore non ancora specificato e che sarà assegnato successivamente.
 Esempi qui di seguito
*/

let numero = 10;
let stringa = "parola";
let condizione = true;

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Alessandro";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number_1 = 12;
let number_2 = 20;

console.log(number_1 + number_2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = "Ontani";
console.log(name);

/* la Costante 'name' essendo stata definita tramite il costrutto 'const' rappresenta un tipo di valore che non può cambiare nel tempo,
  a differenza di una generica variabile definita attraverso il costrutto 'let'. 
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name_1 = "john";
let name_2 = "John";

console.log(name_1 === name_2); // oppure console.log(name_1 !== name_2)
console.log(name_1.toLowerCase() === name_2.toLowerCase());
