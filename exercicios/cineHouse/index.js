const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

let conteudo = fs.readFileSync(caminho, 'utf-8');
//_dirname -> carrregar automaticamente o caminho para o arquivo atual.

console.log(caminho);
console.log(conteudo);