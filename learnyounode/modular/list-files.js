var fs = require('fs')
var path = require('path')

module.exports = function (url, ext, callback) {
  var arrayFiles = []
  fs.readdir(url, function (err, list) {
    if (err) return callback(err, null)
    list.forEach(function (element) {
      if (path.extname(element).slice(1) === ext) {
        arrayFiles.push(element)
      }
    })

    callback(null, arrayFiles)
  })
}
