const http = require ('http')

//the http class extends the EventEmitter!

const server = http.createServer()

server.on('request', (req, res) =>{
    if (req.url === '/') res.end('Home Page')
})

server.listen(5000)