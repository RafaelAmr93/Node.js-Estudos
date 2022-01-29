const http = require ('http')

//this if sequence is cleaner than using nested callbacks as showed on the fs-callback code

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end('Home Page')
        console.log('home page')
    } else if (req.url === '/about'){

        //This nested for loop will block the server bcause its sync
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
        console.log('about page')
    } else 
    (res.end('Error Page'))
})

server.listen(5000,() =>{
    console.log('Server listening on port 5000...')
})