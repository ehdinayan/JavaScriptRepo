/*
const http = require('http');
const map = require('through2-map');

// Obtén el puerto desde los argumentos de la línea de comandos
const port = process.argv[2];

const server = http.createServer((request, response) => {
  // Verifica que la solicitud sea del tipo POST
  if (request.method !== 'POST') {
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    return response.end('Only POST requests are allowed');
  }

  // Usa through2-map para convertir los datos del cuerpo de la solicitud a mayúsculas
  request.pipe(map(chunk => {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});

// Haz que el servidor escuche en el puerto especificado
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

*/

Versión oficial

'use strict'
    const http = require('http')
    const map = require('through2-map')

    const server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }

      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })

    server.listen(Number(process.argv[2]))
