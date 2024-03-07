const nome = prompt("Come ti chiami?"); //string

const cognome = prompt("Qual'è il tuo cognome?"); //string

const colorePreferito = prompt("Qual'è il tuo colore preferito?"); //string

const randomN = Math.floor(Math.random() * 100) + 1; //int

const password = nome+cognome+colorePreferito+randomN;

console.log(password);