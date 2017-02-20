var http = require('http')
var urls = process.argv.slice(2)

var textUrlPrinter = (aUrl) => {
  var url = aUrl.shift()
  http.get(url, (response) => {
    var text = ''
    response.on('data', (data) => {
      text += data
    })
    response.on('end', () => {
      console.log(text)
      if (aUrl !== 0) textUrlPrinter(aUrl)
    })
    response.on('error', (error) => {
      throw error
    })
  })
}

textUrlPrinter(urls)
