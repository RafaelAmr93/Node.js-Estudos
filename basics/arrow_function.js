/*
ARROW FUNCTIONS -> funções mais curtas que as tradicionais, são úteis em funções anonimas
*/

//função comum
function sum(a, b) {
  return a + b
}

//arrow function, quando há apenas uma linha de retorno, pode-se ignorar os {} e a palavra return
let sum2 = (a, b) => a + b

//se há apenas um parâmetro, dispensa-se os ()
let print = x => x

//se não há parametros, precisa do () vazio
let randomNum = () => Math.random;

//arrow functions como funções anonimas
// document.addEventListener("click", () => console.log("Test"))