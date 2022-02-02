const express = require('express')
const app = express()
const people = require('./routes/people')
const auth = require('./routes/auth')


// routes
app.use('/api', people)
app.use('/login', auth)

app.listen(5000, () => {
    console.log('hit')
})
