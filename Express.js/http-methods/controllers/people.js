const {people} = require('../data')

const getPerson =  (req, res) => {
    res.status(200).send(people)
}

const createPerson = (req, res) => {

    const {name} = req.body
    
    if (name){
       return res.status(200).send(`<h1>Olá ${name}</h1>`)
    }
    res.status(401).send('Por favor, insira um nome')
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
    const { id } = req.params
    
    const person = people.find((person) => person.id === Number(id))

    if (!person){
        return res.status(404).json({ sucess: false, msg: `id ${id} not found`})
    }

    const newPeople = people.filter((person) => (person.id !== Number(id)))

    res.status(200).json({ sucess: true, msg: newPeople})    
}

module.exports = {
    getPerson,
    createPerson,
    updatePerson,
    deletePerson,
}
