// when about page is loaded, it takes a long time to load, but it also affects homepage loading, because of blocking code which is synchronous
const http = require('http')

const server =  http.createServer((req,res)=> {
if(req.url === '/')
{
    res.end('homepage')
}
if(req.url === '/about'){
    //blocking code !!!
    for(let i = 0 ; i<200;i++){
        for(let j=0; j<200;j++){
            console.log(`${i}${j}`)
        }
    }
    res.end('about page')
}
})

server.listen(5000,()=>{
    console.log('server is listening on port 5000')
})