const express = require('express')
const app = express()
const logger = require('./logger')     //imported from logger.js

// req => middleware => res
// app.use(logger)
app.use('/api',logger) //we can add path to app.use . So, here /api is path, so it works for both api/products and api/items, but not for / and /about

app.get('/',(req,res)=>{ //immediately goes to logger funtion without printing start and end console logs
    console.log('start')
    res.send('home')
    console.log('end')
})
// app.use(logger)  // in express everything goes in order, since app.get('/') is above app.use, in this case, logger middleware won't work on homepage
app.get('/about',(req,res)=>{  // one of the way to do it is //app.get('/about',logger,(req,res)=>{   
    res.send('about')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/items',(req,res)=>{
    res.send('items')
})

app.listen(5000, ()=>{
    console.log('server is listening')
})