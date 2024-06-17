//Version GPT
'use strict'
    const http = require('http');
    const bl = require('bl');
    /// Obtener todas las URLs pasadas como argumentos
    const urls = process.argv.slice(2);
    //Contador para llamadas atendidas
    let count = 0;
    //Objeto para almacenar el contenido de las respuestas 
    //y su orden de llegada
    const responses = {};

	//Para cada url en la lista de urls
	urls.forEach(function(url, index){
		//realizar una solicitud asíncrona  a la url
		http.get(url, function (response) {
		//Al recibir la respuesta, almacenar el contenido 
		//en el objeto de respuestas
      		response.pipe(bl(function(err, data) {
   	        if (err) {
        	        return console.error(err);
            	}
            	// Almacenar el contenido y su orden de llegada
            	responses[index] = data.toString();
            	count++; // Incrementar el contador de respuestas recibidas

            	//Si todas las respuestas han sido recibidas, imprimir el contenido en el orden correcto
            	if (count === urls.length) {
                // Imprimir el contenido de cada URL en el orden correcto
                urls.forEach(function(url, index) {
                    console.log(responses[index]);
                });
            }
        }));
    });
});

/*
Version oficial:

'use strict'
    const http = require('http')
    const bl = require('bl')
    const results = []
    let count = 0

    function printResults () {
      for (let i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }

          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
*/


