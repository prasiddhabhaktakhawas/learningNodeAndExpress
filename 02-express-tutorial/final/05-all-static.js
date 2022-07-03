const express = require('express')
const path = require('path')
const app = express()

//setup static and middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })
// adding html file to static assets
// ssr
// index.html is normally the homepage, so express when receives '/' req, it sends index.html, i guess

app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000,()=>{
    console.log('server is listening')
})