const EventEmitter = require('events')

//must implement from the class
const myEmitter = new EventEmitter()

//on and emit strings must match
myEmitter.on('response', (name, id) =>{
    console.log(`data received from ${name} id ${id}`)
})

myEmitter.emit('response', 'rafael', 187)