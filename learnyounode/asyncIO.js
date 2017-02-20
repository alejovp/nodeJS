var fs = require('fs')
var file = process.argv[2]

function getNewLinesNumber (err, content) {
  if (err) throw err
  var newLines = content.split('\n').length - 1
  console.log(newLines)
}

fs.readFile(file, 'utf-8', getNewLinesNumber)
