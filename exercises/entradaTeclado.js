/* instalamos el modulo
npm install prompt-sync
*/

const prompt = require('prompt-sync')();
let nombre = prompt("Digite su nombre: ");
console.log("Su nombre es: " + nombre);
let num1=Number(prompt("digite num1: "));
let num2=Number(prompt("digite num2: "));
let total=num1+num2;
console.log(` el total sumado es ${total} resultado`);

/*

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite su nombre: ', (nombre) => {
  console.log('Su nombre es: ' + nombre);
  rl.close();
});

*/
