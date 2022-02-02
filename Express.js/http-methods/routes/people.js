const express = require('express')
const {people} = require('../data')
const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
    res.status(200).send(people)
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))
    console.log(person)

    if (!person){
        return res.status(404).json({ sucess: false, msg: `id ${id} not found`})
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)){
            person.name = name
        }
        return person
    })

    res.status(200).json({ sucess: true, msg: newPeople})
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    
    const person = people.find((person) => person.id === Number(id))

    if (!person){
        return res.status(404).json({ sucess: false, msg: `id ${id} not found`})
    }

    const newPeople = people.filter((person) => (person.id !== Number(id)))

    res.status(200).json({ sucess: true, msg: newPeople})    
})

module.exports = router