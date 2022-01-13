const http = require ('http')
const {readFileSync, read} = require ('fs')

//its ok to use blocking code bcause its loaded just once
const homePage = readFileSync('./home-page/index.html')
const homeStyle = readFileSync('./home-page/styles.css')
const homeJs = readFileSync('./home-page/app.js')

const server = http.createServer((req, res) => {
    const url = req.url
   
    //html
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        console.log('user')
        res.end()
    }
    //css
    else if (url === '/styles.css'){
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
        res.end()
    }
    //javascript
    else if (url === '/app.js'){
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(homeJs)
        res.end()
    } else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }

}).listen(4000)