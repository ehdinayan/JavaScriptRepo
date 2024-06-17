//Versión oficial comentada:


'use strict' // Habilita el modo estricto de JavaScript para una mejor calidad del código
const fs = require('fs') // Importa el módulo del sistema de archivos

const contents = fs.readFileSync(process.argv[2]) // Lee el archivo de manera síncrona usando el argumento de la línea de comandos
const lines = contents.toString().split('\n').length - 1 // Convierte el contenido a cadena, divide por saltos de línea y cuenta los elementos menos uno

console.log(lines) // Imprime el número de líneas

//Versión  ChatGPT con manejo de errores:

/*
'use strict'
const fs = require('fs')

const filePath = process.argv[2]

if (!filePath) {
    console.error('Por favor, proporciona la ruta del archivo como argumento.')
    process.exit(1)
}

try {
    const contents = fs.readFileSync(filePath)
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
} catch (err) {
    console.error('Error al leer el archivo:', err.message)
    process.exit(1)
}
*/
