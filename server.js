//Express Boilerplate:
const express = require('express')
const app = express()
const PORT = 3070

//simulated database currently found in models --> product_model.js
const products = require('./models/product_model.js')

//tells application to look into the views folder to find the template to render
app.set('view engine', 'ejs')

//ROUTES
//Route order - more specific to less. This is read from top to bottom and uses whatever route it fits into first.
//RESTFUL ROUTES: 

//SHOW - catches GET request and returns a single product
app.get('/products/:productIndex', (req, res) =>{

})

//INDEX


//NEW

//CREATE

//EDIT

//UPDATE

//listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`))