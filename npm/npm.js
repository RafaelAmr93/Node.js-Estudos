const _ = require('lodash')

const item = [1,[2,[3,[4]]]]

const newItem = _.flattenDeep(item)

console.log(newItem)


//nodemon runs the file everytime it is saved
let a = 1+2

console.log(a)