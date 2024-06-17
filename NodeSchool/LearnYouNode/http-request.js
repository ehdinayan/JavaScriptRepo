//Version GPT

const http = require('http'); // Importar el módulo http

// Leer la URL desde los argumentos de la línea de comandos
const url = process.argv[2];

// Verificar que se haya proporcionado una URL
if (!url) {
  console.error('Por favor, proporciona una URL como argumento.');
  process.exit(1); // Terminar el programa con error
}

// Realizar la solicitud HTTP GET
http.get(url, (response) => {
  // Configurar la codificación para que los datos sean strings
  response.setEncoding('utf8');

  // Manejar cada evento "data"
  response.on('data', (chunk) => {
    console.log(chunk); // Imprimir el chunk de datos
  });

  /* Manejar el evento "end" cuando se completa la respuesta
  response.on('end', () => {
    console.log('Respuesta completada.'); Esta frase final da error al 
    compararlo con la respuesta oficial
  });*/

  response.on('end', () => {
   return;
  });

  // Manejar los errores
  response.on('error', (error) => {
    console.error(`Error en la respuesta: ${error.message}`);
  });

}).on('error', (error) => {
  // Manejar errores en la solicitud
  console.error(`Error en la solicitud: ${error.message}`);
});

/*Version oficial

'use strict'
    const http = require('http')

    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)

No parece que use el evento 'end' en ningún momento
*/
