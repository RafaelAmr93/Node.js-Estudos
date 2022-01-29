const express = require('express')
const app = express()
const {people} = require('./data')

app.put('/api/people:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((num) => person.id === Number(id))


    console.log(person)
})