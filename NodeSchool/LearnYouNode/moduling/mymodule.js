//Version GPT

const fs = require('fs');

module.exports = function (dir, ext, callback) {
    // Leer el contenido del directorio de manera asíncrona
    fs.readdir(dir, function (error, files) {
        // Manejar errores
        if (error) return callback(error);

        // Filtrar los archivos por extensión
        const filteredFiles = files.filter(file => file.endsWith(`.${ext}`));
        // Llamar al callback con los datos
        callback(null, filteredFiles);
    });
};

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

