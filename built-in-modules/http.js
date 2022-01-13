const http = require('http')

const server = http.createServer((req, res) =>{
    res.write("My homepage")
    res.end()
})

server.listen(5000)

// setInterval(() =>{
//     console.log(server.listenerCount())
//     }, 5000)
