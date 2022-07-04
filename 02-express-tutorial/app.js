const express = require('express')
const app = express()
const logger = require('./logger')     //imported from logger.js

// req => middleware => res


app.get('/',logger,(req,res)=>{ //immediately goes to logger funtion without printing start and end console logs
    console.log('start')
    res.send('home')
    console.log('end')
})
app.get('/about', logger, (req,res)=>{
    res.send('about')
})
app.get('/api/products', logger, (req,res)=>{
    res.send('products')
})

app.listen(5000, ()=>{
    console.log('server is listening')
})