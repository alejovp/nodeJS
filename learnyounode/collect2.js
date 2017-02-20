// concat-stream version of the HTTP Collect exercise
var http = require('http')
var url = process.argv[2]
var concatStream = require('concat-stream')

http.get(url, (response) => {
  response.pipe(concatStream((data) => {
    var text = data.toString()
    console.log(text.length)
    console.log(text)
  }))
})
