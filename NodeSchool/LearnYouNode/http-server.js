/*Version oficial

'use strict'
    const http = require('http')
    const fs = require('fs')

    const server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })

      fs.createReadStream(process.argv[3]).pipe(res)
    })

    server.listen(Number(process.argv[2]))
*/

//Versión mejorada con chat GPT

'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  const filePath = process.argv[3]

  // Intenta leer el archivo
  fs.stat(filePath, (err) => {
    if (err) {
      // Si ocurre un error, responde con un código 404
      res.writeHead(404, { 'content-type': 'text/plain' })
      res.end('File not found')
    } else {
      // Si todo está bien, responde con un código 200 y el archivo
      res.writeHead(200, { 'content-type': 'text/plain' })
      fs.createReadStream(filePath).pipe(res)
    }
  })
})

server.listen(Number(process.argv[2]))
