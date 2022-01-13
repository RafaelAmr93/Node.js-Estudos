const http = require ('http')
const fs = require ('fs')


const server = http.createServer( (req, res) => {
/* this way we send the whole file to the browser
    const text = fs.readFileSync('./big-text.txt', 'utf8')
    res.end(text)*/

    const fileStream = fs.createReadStream('./big-text.txt', 'utf8')

    fileStream.on('open', () => fileStream.pipe(res))

    fileStream.on('error', (err) => res.end(err))
})
.listen(5000)