let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

//Map:
let listaNumeroDobro = listaNumeros.map(function(valor, index){
  return valor * 2;
});
console.log(listaNumeroDobro);

//Filter:
let listaNumeroFiltrado = listaNumeros.filter(function(valor, index){
  return valor < 6;
});
console.log(listaNumeroFiltrado);

//Reduce:
let listaNumeroSomado = listaNumeros.reduce(function(resultado, valor){
  return resultado + valor;
});
console.log(listaNumeroSomado);

//forEach:
listaNumeros.forEach(function(valor, index){
  return "O valor é: " + valor + " e a sua posição é: " + index;
});

//Find:
let listaDois = listaNumeros.find(function(valor, index){
  return valor == 2
});
console.log(listaDois);