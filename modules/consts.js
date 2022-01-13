//CommonJS, every file is a module by default
//Modules encapsulated code (only share minimum)

//remains local to the file
const secret = 'My secret!'

//shared
const rafa = 'Rafael'
const mila = 'Camila'

/*
every file is a module, a module is an object
the exports key holds everything that can be exported
*/

//quando exportei o modulo e importe, o console.log foi junto!
//console.log(module)

//to export something, just add it to the exports {}

module.exports = {rafa, mila}

//in this case, the variables rafa and mila are being exported as an object