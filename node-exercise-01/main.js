var sum = require('./operations/sum.js')
var multi = require('./operations/multiplication.js')

var emoji = require('node-emoji').emoji

console.log(emoji.tada + ' ' + '5 + 8 = ' + sum(5, 8))
console.log(emoji.tada + ' ' + '5 * 8 = ' + multi(5, 8))
