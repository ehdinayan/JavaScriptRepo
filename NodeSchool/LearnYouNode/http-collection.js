/* Mi version
    'use strict'
    const http = require('http')
    const bl = require('bl')

    http.get(process.argv[2], function (response) {
      response.pipe(bl(function(err, data) {
	      response.on('error', console.error)
	      console.log(bl.slice(0,bl.lenght).toString('data')
	      console.log(bl.lenght)
	      console.log('data')
      })).on('error', console.error)
    });


Version corregida Chat GPT

'use strict'
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    console.log(data.length)  // Imprime el número de caracteres recibidos
    console.log(data.toString())  // Imprime todo el string recibido
  })).on('error', console.error)
});
*/

//Version oficial

'use strict'
    const http = require('http')
    const bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString() //Este paso se hace antes de los otros dos
        console.log(data.length)
        console.log(data)
      }))
    })
