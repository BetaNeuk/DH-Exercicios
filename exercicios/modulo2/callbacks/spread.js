//Spread operator em array

let frutas = ["maçã", "bergamota", "uva"];

let frutasDois = ["laranja", "tomate", "limão"];

let listaCompleta = [...frutas, ...frutasDois];
console.log(listaCompleta);

//Spread operator em objeto
let pessoa = {
  nome:"Roberta",
  idade:"25"
};

let infoPessoal = {
  numero: 11994724069,
  rg: 1087030787,
  ...pessoa
}
console.log(infoPessoal);

//Rest parameter em função
function letras(...paramns){
  console.log(paramns[1]);
}

letras("a", "b");