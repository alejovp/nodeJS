var args = process.argv

function sum (params) {
  var result = 0
  for (var i = 2; i < args.length; i++) {
    result += Number(params[i])
  }
  return result
}

console.log(sum(args))
