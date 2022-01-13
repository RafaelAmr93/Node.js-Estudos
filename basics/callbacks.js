/*
CALLBACKS -> são funções que possuem uma ou mais funções como parâmetro

Abaixo, a função readFile preicsa de dois parâmetros: um arquivo e uma função
Essa função que a readFile precisa, é uma função callback
A função principal readFile só termina depois que a função callback termina.
*/

//criação da variável que chama pelo file system do node
var fs = require("fs");

//CALLBACK não precisa de () ao ser passado como parametro
fs.readFile("arquivo.txt", callback);

//o err é um tratamento de erro e uma boa prática, o conteudo é o arquivo em si
function callback(err, conteudo) {
  if (err) console.error(err);
  setTimeout(() => {
    console.log(String(conteudo));
  }, 5000);
}

//setTimeout executa um bloco de código, nesse um arrow function, após um intervalo em milissegundos
