/*
PROMISES -> vieram para substituir os callbacks 
A tradução é promessa, caso algo ocorra, resolve, caso não, reject
Ela é diferente do callback tradicional por executar o código de forma assíncrona
*/

let p = new Promise((resolve, reject) =>{
    let n = 1 + 2
    if (n % 2 == 0) resolve('PAR!')
    if (!n % 2 == 0) reject ('Não é par!')
})

//o que vier depois do then é sucesso, o catch é o erro
p.then((message) =>{
    console.log('Esse número é: ' + message)
}).catch((message) => {
    console.log('Esse número é: ' + message)
})

//https://www.youtube.com/watch?v=DHvZLI7Db8E