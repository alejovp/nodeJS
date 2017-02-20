
var url = process.argv[2]
var ext = process.argv[3]
var listFiles = require('./list-files.js')

listFiles(url, ext, function (err, data) {
  if (err) throw error
  console.log(data.join('\n'))
})

