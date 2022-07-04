const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user === 'john'){
        req.user = {name: 'john', id:3} //now user is attached to request and can be accessed all over the route
        next()
    }else{
        res.status(401).send('unauthorized')
    }
    next()
}
module.exports = authorize