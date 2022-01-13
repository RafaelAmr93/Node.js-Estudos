const express = require('express')
const app = express()
const path = require('path')
const port = 5000

//setup static and middleware (?)
app.use(express.static('./public'))

//what user gets
app.get('/', (req, res) => {
    console.log('user hit home page')

    //path.join or path.resolve is to give the sendFile the absolute path and avoid mistakes
    res.status(200).sendFile(path.join(__dirname, './index.html'))
})

//if the user do not hit a page, the default will be all '*'
app.all('*', (req, res) => { 
    res.status(404).send('<h1>Not Found</h1>')
})

app.listen(port, () =>{
    console.log(`server is listening on port ${port}...`)
})