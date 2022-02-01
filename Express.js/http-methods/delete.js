const express = require('express')
const app = express()
const {people} = require('./data')

app.use(express.json())

app.delete('/api/:id', (req, res) => {
    const { id } = req.params
    
    const person = people.find((person) => person.id === Number(id))

    if (!person){
        return res.status(404).json({ sucess: false, msg: `id ${id} not found`})
    }

    const newPeople = people.filter((person) => (person.id !== Number(id)))

    res.status(200).json({ sucess: true, msg: newPeople})    
})

app.listen(5000, () => {
    console.log('hit...')
})