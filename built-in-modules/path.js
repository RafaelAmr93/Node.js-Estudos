const path = require('path')

//show the system file separator
console.log(path.sep)

const text = __dirname
console.log(text)

const filePath = path.join(text, 'this','is', 'a', 'text')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve

