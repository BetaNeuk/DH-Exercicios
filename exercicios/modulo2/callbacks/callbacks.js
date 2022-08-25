const somar = (nA, nB) => nA + nB;
const subt = (nA, nB) => nA - nB;
const calculadora = (nA, nB, operacao) => operacao(nA, nB);

console.log(calculadora(10,20, (nA, nB) => nA-nB));
