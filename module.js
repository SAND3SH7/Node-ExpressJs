//Modules
//CommonJS, everyfile is modeul(default)
const names = require('./2-name.js')
const sayHi = require('./3-utils.js')
// console.log(names)
sayHi('sandesh')
sayHi(names.john)
sayHi(names.peter)

const data=require('./6_alternative.js')
console.log(data)



//OS module
const os=require('os')
// info about current user
const user=os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()}seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
}
console.log(currentOS)


const path = require('path')

console.log(path.sep)

const filePath = path.join('./content', 'subfolder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute)