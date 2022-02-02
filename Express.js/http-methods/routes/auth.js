const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {

    const {name} = req.body
    
    if (name){
       return res.status(200).send(`<h1>Olá ${name}</h1>`)
    }
    res.status(401).send('Por favor, insira um nome')
})

module.exports = router