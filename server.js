const http = require('http')

let requestsCounter = 0
const server = http.createServer((req, res) => {

  switch (req.url) {
    case '/students':
      requestsCounter++
      res.write('STUDENTS')
      break;
    case '/':
    case '/courses':
      requestsCounter++
      res.write('Front + Back')
      break;
    case '/counter':
      requestsCounter++
      res.write(" all requests counter = " + requestsCounter)
      break;
    default:
      requestsCounter++
      res.write('404 not found')
  }

  res.end()
})

server.listen(3003)