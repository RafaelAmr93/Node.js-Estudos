//os -> operating system

const os = require('os')

//user info
const user = os.userInfo()
console.log(user)

//system uptime on seconds
console.log(os.uptime())

const myOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    something: os.platform()
}

console.log(myOS)