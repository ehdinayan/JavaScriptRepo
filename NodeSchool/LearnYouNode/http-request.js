//Version GPT

'use strict'
const http = require('http')

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')

  response.on('data', console.log)      // Maneja los fragmentos de datos recibidos
  response.on('error', console.error)   // Maneja errores durante la recepción de datos

  // Maneja el final de la recepción de datos
  response.on('end', () => {
    console.log('No more data in response.')
  })
}).on('error', console.error)            // Maneja errores durante la solicitud


/*Version oficial

'use strict'
    const http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)


*/
