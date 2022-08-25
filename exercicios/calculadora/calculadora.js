const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

const respSoma = somar(2,8);
const respSub = subtrair(7,4);
const respMult = multiplicar(9,5);
const respDiv = dividir(10,2);

console.log(respSoma);
console.log(respSub);
console.log(respMult);
console.log(respDiv);