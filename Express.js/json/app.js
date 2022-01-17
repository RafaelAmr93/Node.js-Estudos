const express = require('express')
const app = express()
const {products} = require('./data')


app.get('/', (req, res) => {
    console.log('hit')

    //sending a json
    res.status(200).json(products)

})

app.listen(5000, () =>{
    console.log("server is listening on port 5000...")
})