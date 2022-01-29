const express = require('express')
const app = express()
const people = require('./data')

app.use(express.static('./public'))

//expressjs.com/pt-br/api.html#express.urlencoded
app.use(express.urlencoded({ extended: false }))

//parse form data
app.post('/login', (req, res) => {

    const {name} = req.body
    
    if (name){
       return res.status(200).send(`<h1>Olá ${name}</h1>`)
    }
    res.status(401).send('Por favor, insira um nome')
})


app.listen(5000, () => {
    console.log('Ouvindo na porta 5000...')
})