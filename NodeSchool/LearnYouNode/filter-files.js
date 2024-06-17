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
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/


