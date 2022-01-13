const {readFile, writeFile} = require('fs')

//the assync takes a path to file, utf8 required!, and a callback function
readFile('./third.txt', 'utf8', (err, result) =>{
    if (err) console.log(err)
    const file = result

    //this also takes the readed file and create a new one
    writeFile('./new-file-assync.txt', `New file:\n${file}`, (err, result) =>{
        if (err) console.log(err)
        console.log("Write file task done")
    })
    
})