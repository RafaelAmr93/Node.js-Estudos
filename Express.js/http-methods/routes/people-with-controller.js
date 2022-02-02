const express = require('express')
const router = express.Router()
const {
    getPerson,
    createPerson,
    updatePerson,
    deletePerson,} = require('../controllers/people')

router.get('/', getPerson)
router.post('/', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

module.exports = router

/* alt
router.route('/').get(getPerson).post(createPerson)
router.route('/:id').put(updatePerson).delete(deletePerson)
*/