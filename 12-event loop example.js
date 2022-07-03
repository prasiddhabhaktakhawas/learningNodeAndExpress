const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('HomePage')
    }
    if(req.url === '/about'){
        res.end('About Page')
    }

})

server.listen(5000, ()=>{       //listen is asynchornous
    console.log('Server Listening on port 5000...')
})