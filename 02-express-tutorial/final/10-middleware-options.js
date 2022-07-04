const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')     //imported from logger.js
const authorize = require('./authorize')

// req => middleware => res
// app.use(logger)
// app.use(express.static('./public'))  // just like authorize or logger, static is a built in middleware
// app.use([logger,authorize]) //we can add path to app.use . So, here /api is path, so it works for both api/products and api/items, but not for / and /about
// app.use('./api', [logger,authorize])
app.use(morgan('tiny')) // morgan('tiny') format is basically prebuilt logger middleware
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
// app.get('/api/items',[logger,authorize],(req,res)=>{    //if we want to use for only this route, then put [logger,authorize] directly 
//     console.log(req.user)   
//     res.send('items')
// })
app.get('/api/items',(req,res)=>{    //if we want to use for only this route, then put [logger,authorize] directly 
    console.log(req.user)   
    res.send('items')
})

app.listen(5000, ()=>{
    console.log('server is listening')
})