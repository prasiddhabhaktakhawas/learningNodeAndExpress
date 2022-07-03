//modules means dividing app into smaller modules and it involves exporting and require functionality
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
console.log(names)
console.log(data)

sayHi('prasiddha')
sayHi(names.john)
sayHi(names.peter)