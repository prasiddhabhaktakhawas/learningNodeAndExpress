//built in module
//os module is built in
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs)