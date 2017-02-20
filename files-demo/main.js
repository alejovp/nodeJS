var fs = require('fs')

var contentFile = fs.readFile('test.txt', 'utf-8', function (error, data) {
  console.log(data)
})
console.log('Next line after reading file...')
