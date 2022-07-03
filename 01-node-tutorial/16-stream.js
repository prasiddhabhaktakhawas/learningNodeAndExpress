// const {writeFileSync} = require('fs')
// for (let i = 0; i< 10000; i++){
//     writeFileSync('./content/big.txt',`hello world ${i}\n`, {flag: 'a'})
// }

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark: 90000, encoding: 'utf8'}) // highwatermark sets the size of buffer, so one of the many small chunk can have given size and remaining will be next buffer

stream.on('data',(result)=>{    //eventemitter class, on
    console.log(result)
})
stream.on('error', (err)=> console.log(err))