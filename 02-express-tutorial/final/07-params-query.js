const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href ="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
    console.log(newProducts)
})

app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find((product)=>product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct)
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if(search){ // http://localhost:5000/api/v1/query?search=a
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }               // http://localhost:5000/api/v1/query?limit=1
    if(limit){  // http://localhost:5000/api/v1/query?search=a&limit=3
        sortedProducts = sortedProducts.slice(0, Number(limit)) 
    }   
    if(sortedProducts.length<1){ // http://localhost:5000/api/v1/query?search=f&limit=1
        return res.status(200).send('no products matched') // in case of if statements, we must use return, otherwise, two res.send occurs which yields error. return just closes the function, which is meant to be done after an error
    }
    res.status(200).json(sortedProducts)
    res.send('hello world')
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
})
app.listen(5000, ()=>{
    console.log('Server is listening on port 5000....')
})