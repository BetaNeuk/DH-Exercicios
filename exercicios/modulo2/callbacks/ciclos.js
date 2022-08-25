// for in 
// propriedades enumeráveis
// percorre propriedades de um OBJETO

let carro = {
  nome: "Fox",
  ano: "2011"
}

function propriedade(){
  for(let prop in carro){
    return (carro[prop]);
  }
}

// for of 
// elementos iteráveis 
// percorre ARRAY/ STRING

let series = ["friends", "how i met your mother", "wandavision"];

for(let valor of series){
  console.log(valor);
}