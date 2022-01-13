const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./first.txt', 'utf8')
const second = readFileSync('./second.txt', 'utf8')

console.log(first, second);

//by default node overwrite, use flag: 'a' to append
writeFileSync('./third.txt',
    `This is the third file made with fs module.
    \nAlso those are the previous files: ${first}, ${second}`)