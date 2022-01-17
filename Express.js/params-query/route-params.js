const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
res.send('<h1>Hello!</h1><a href="./json-select">Here</a>')
})

//response with just id name and image
app.get('/json-select', (req, res) =>{
    const selectedProducts = products.map((product) => {
        const { id, name, image} = product
        return { id, name, image}
    })

    res.json(selectedProducts)
})

//after : the placeholder productID will capture anything
app.get('/json-select/:productID', (req, res) => {
    //the params is equal to productID above and we store it on a variable
    const{productID} = req.params

    //find will search the imported object 'products' for the maching param (id in this case)
    //casting is necessary as productID is a string
    const selectedProduct = products.find((product) => product.id === Number(productID))

    if(!selectedProduct) res.status(404).send('Product not found')

    res.json(selectedProduct)
})

//nested params (?)
app.get('/json-select/:productID/reviews/:reviewID', (req, res) =>{ 
    //console shows the productID and reviewID
    console.log(req.params)
    res.send("Review not found")
})

app.listen(5000, () => {
    console.log('hit')
})