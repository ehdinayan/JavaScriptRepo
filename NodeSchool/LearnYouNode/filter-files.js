//versión GPT 4.0

const fs = require('fs');
const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, function callback(error, files) {
    if (error) {
        console.error('Error al leer el directorio:', error.message);
        return;
    }

    const filteredFiles = files.filter(file => file.endsWith(`.${ext}`));
    filteredFiles.forEach(file => console.log(file));
});

/*Versión oficial:

'use strict'
    const fs = require('fs')
    const path = require('path')

    const folder = process.argv[2]
    const ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)

      //comparar extension de los ficheros en el directorio
      //con los recibidos como argumento:

      files.forEach(function (file) {

        //metodo del modulo Path que toma en consideración
        //como extensión lo contenido a partir del primer punto en el nombre
        //del archivo:

        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/

