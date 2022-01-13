const {writeFileSync} = require ('fs')

for (let i =0; i < 10000; i++){
    writeFileSync('./big-text.txt', `Line number ${i}\n`, {flag:'a'})
}
