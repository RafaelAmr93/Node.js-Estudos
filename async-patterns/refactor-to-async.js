//o .promises faz com que as funções de fs retornem promises ao invés de callbacks
const {readFile, writeFile} = require('fs').promises

//uma arrow function async
const start = async () =>{
    try{
        const first = await readFile('./first.txt')
        const second = await readFile('./second.txt')
        await writeFile(
            './async-refactor.txt', `This is the new file refactored to await-async pattern:\n${first}\n${second}`)
    } catch (err){
        console.log(err)
    }
}

start()




/* nesse caso, a leitura e escrita de arquivos é síncrona e possui callbacks, os códigos
são executados em blocos e o readFile só termina após o writeFile temrinar
Na opção acima, há o método assíncrono

readFile('./third.txt', 'utf8', (err, result) =>{
     if (err) console.log(err)
     const file = result
     writeFile('./new-file-assync.txt', `New file:\n${file}`, (err, result) =>{
         if (err) console.log(err)
         console.log("Write file task done")
     })
 })*/