var http = require('http')
var url = process.argv[2]

http.get(url, function (response) {
  var text = ''
  response.setEncoding('utf-8')
  response.on('data', function (data) {
    text += data
  })
  response.on('end', function () {
    console.log(text.length)
    console.log(text)
  })
})

