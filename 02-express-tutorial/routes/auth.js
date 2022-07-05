const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{  // when form is sumbitted, it is posted, and req has info about what is send, but its encoded. express built in middleware resolves that info and attaches with the request. then we can clearly use req.body
    const {name} = req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide credentials')
})

module.exports = router