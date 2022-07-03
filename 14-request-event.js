const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })
    
// Using Event Emitter API
const server = http.createServer()
// behind the scenes, server is emitting request event as server extends EventListener
server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(5000)