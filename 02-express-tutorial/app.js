const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false}))   //built in method of express.It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.json()) //this is used for javascript form, straight up http . axios has been used

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req, res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).send({success:true, person:name})
})

app.post('/api/postman/people', (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).send({sucess:true, data: [...people,name]})
})

app.post('/login',(req,res)=>{  // when form is sumbitted, it is posted, and req has info about what is send, but its encoded. express built in middleware resolves that info and attaches with the request. then we can clearly use req.body
    const {name} = req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide credentials')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})