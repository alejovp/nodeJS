var fs = require('fs')
var path = require('path')
var url = process.argv[2]
var ext = process.argv[3]

fs.readdir(url, function (err, list) {
  if (err) throw err
  list.forEach(function (element) {
    if (path.extname(element).slice(1) === ext) {
      console.log(element)
    }
  })
})
