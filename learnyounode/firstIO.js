var fs = require('fs')
var file = process.argv[2]

var aText = fs.readFileSync(file, 'utf-8').split('\n')
var newLines = aText.length - 1
console.log(newLines)

