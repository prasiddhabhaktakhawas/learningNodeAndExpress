const http = require('http')

const server = http.createServer((req, res)=>{  //request and response
    console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our Homepage')
    }
    if(req.url ==='/about'){
        res.end('Here is our short history')
    }
    // res.end(`
    //     <h1>Oops!</h1>
    //     <p>We can't seem to find the page you are looking for</p>
    //     <a href="/">back home</a>
    // `)
    
    // res.write('Welcome to our Homepage')
    // res.end()
})

server.listen(5000)