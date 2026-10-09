//Modules
//CommonJS, everyfile is modeul(default)
const names = require('./2-name')
const sayHi = require('./3-utils')
// console.log(names)
sayHi('sandesh')
sayHi(names.john)
sayHi(names.peter)

const data=require('./6_alternative.js')
console.log(data)
