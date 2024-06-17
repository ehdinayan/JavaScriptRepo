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
