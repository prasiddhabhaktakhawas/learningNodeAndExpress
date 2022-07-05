const express = require('express')
const app = express()

const peopleRouter = require('./routes/people')
const loginRouter = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false}))   //built in method of express.It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.json()) //this is used for javascript form, straight up http . axios has been used

app.use('/api/people', peopleRouter)
app.use('/login', loginRouter)

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})