const express = require('express')
const app = express()

// req => middleware => res

const logger = (req,res,next)=>{    //express supplies req, res and next
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    // res.send('testing')  //middle ware should always point to next or should just end get request there by sending res.send
    next()  // simply next() passes it on the method that triggered it, here: app.get()
}

app.get('/',logger,(req,res)=>{ //immediately goes to logger funtion without printing start and end console logs
    console.log('start')
    res.send('home')
    console.log('end')
})
app.get('/about', logger, (req,res)=>{
    res.send('about')
})

app.listen(5000, ()=>{
    console.log('server is listening')
})