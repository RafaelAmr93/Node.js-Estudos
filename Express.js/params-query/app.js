const express = require('express')
const app = express()
const products = require('./data')

//everything after the ? isnt the url and you can capture it for what the user is searching
app.get('/api/v1/query', (req, res) => {
    console.log(req.params)
    res.send('<h1>Hello</h1>')
})


app.listen(5000, () => {
    console.log('hit')
})