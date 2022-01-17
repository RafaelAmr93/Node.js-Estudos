//map, lê o array e retorna passando por uma função

const arr = [5, 10, 15, 20, 25];

const arrWords = ["Teste", "Azul", "Caligrafia"];

const double = arr.map((num) => num * 2);

const upper = arrWords.map((letters) => letters.toUpperCase());

console.log(double);

console.log(upper);

//reduce, soma todos os valores do array

const sum = arr.reduce((total, num) => num + total);

console.log(sum);

//filter, percorre o array e devolve o que passa pelo filtro

const filter = arr.filter((num) => num > 10);

console.log(filter);

//find, retorna o primeiro valor que corresponde a busca

const find = arr.find((num) => num > 10);

console.log(find);
