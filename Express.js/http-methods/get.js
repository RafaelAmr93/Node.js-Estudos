const express = require('express')
const app = express()
const people = require('./data')

app.get('/', (req, res) => {
    res.status(200).send(people)
})

app.listen(5000, () => {
    console.log('hit on port 5000...')
})