// Accede a los argumentos de la línea de comandos
//const args = process.argv;

// Inicializa la variable para almacenar la suma
let sum = 0;

// Itera sobre los argumentos, comenzando desde el índice 2
for (let i = 2; i < process.argv.length; i++) {
  // Convierte cada argumento a número y añade a la suma
  sum += Number(process.argv[i]);
}

// Imprime la suma a la consola
console.log(sum);


