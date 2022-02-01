const express = require('express')
const app = express()
//need to export as an object and import as an object
const {people} = require('./data')

//json middleware to parsed json object
app.use(express.json())

//console.log(people)

app.put('/api/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body

    //person passa a ser um objeto do array de objetos people
    //a depender da id vinda de params
    const person = people.find((person) => person.id === Number(id))
    console.log(person)

    //se o id não existir
    if (!person){
        return res.status(404).json({ sucess: false, msg: `id ${id} not found`})
    }

    //newPeople é a versão modificada de people com um objeto modificado
    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })

    //console.log(newPeople)

    res.status(200).json({ sucess: true, msg: newPeople})

    //res.send(console.log(id, name))
})

app.listen(5000, (req, res) => {
    console.log('hit...')
})