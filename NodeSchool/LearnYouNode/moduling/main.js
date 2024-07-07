//Versión GPT

//Importación del modulo creado
const mymodule = require('./mymodule.js');
//Acceso al directorio y extensión desde la líea de comandos:
const dir = process.argv[2];
const ext = process.argv[3];

//Llamada a la función exportada del módulo

mymodule(dir, ext, function(error, files){
	//tratamiento de error
	if(error){
		return console.error('Error: ', error);
	}
	//iteración por la lista de ficheros filtrados por la función
	//y escritura en consola:
	files.forEach(file => console.log(file));
});

/*Versión oficial:


'use strict'
    const filterFn = require('./solution_filter.js')
    const dir = process.argv[2]
    const filterStr = process.argv[3]

    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }

      list.forEach(function (file) {
        console.log(file)
      })
    })
*/

