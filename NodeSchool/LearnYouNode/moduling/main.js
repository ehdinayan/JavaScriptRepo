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
    const fs = require('fs')
    const path = require('path')

    module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }

        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })

        callback(null, list)
      })
    }
*/

