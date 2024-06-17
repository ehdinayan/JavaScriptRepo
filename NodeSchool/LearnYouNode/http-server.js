'use strict'

const fs = require('fs');
const http = require('http');
const port = process.argv[2];
const path = process.argv[3];

const server = http.createServer(function callback(request, response){
	//crear stream de lectura para el archivo
	const readStream = fs.createReadStream(path);
	//manejo de errores
	readStream.on('error', (err) => {
		response.statusCode = 500;
		response.end('Error reading file: ${err.message}');
	});
	//configurar la cabecera de la respuesta
	response.writeHead(200, {'Content-Type': 'text/plain'});
	//pasar el stream de lectura al stream de respuesta
	readStream.pipe(response);
});

//Hacer que el servidor escuche en el puerto especificado
server.listen(port, () => {
console.log('Server listening on port : ${port}');
});

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
