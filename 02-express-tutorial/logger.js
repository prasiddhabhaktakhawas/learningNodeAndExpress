const logger = (req,res,next)=>{    //express supplies req, res and next
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    // res.send('testing')  //middle ware should always point to next or should just end get request there by sending res.send
    next()  // simply next() passes it on the method that triggered it, here: app.get()
}

module.exports = logger