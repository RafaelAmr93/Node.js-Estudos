const names = require('./consts')
const sayHi = require('./functions')
const altSyntax = require('./alt-syntax')
require('./mind-grenade')

sayHi(names.mila)

sayHi(altSyntax.names.name)

console.log(altSyntax.names)

