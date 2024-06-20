# Aprendiendo Node.JS!

Esta carpeta contiene algunos ejercicios contenidos en los workshoppers esenciales de la web [NodeSchool](https://nodeschool.io/), que se enfocan en habilidades esenciales para poder trabajar con Node.js.

No he podido completarlos por mi mismo cuando han empezado a complicarse un poco, así que incluyo en los ficheros la versión GPT junto con la solución oficial, para que se puedan comparar. Espero con este repaso afianzar los conocimientos necesarios para desarrollar estos contenidos. Sin más, empecemos!

## Ejercicio 1 de 13 - HOLA MUNDO

*Escribe un programa que imprima el texto "HELLO WORLD" en consola  
(stdout).*  



 ## PISTAS  

  *Para escribir un programa en Node.js, crea un archivo con extensión .js y dentro escribe JavaScript! Para ejecutarlo usa el comando 'node', por ejemplo:*  

     $ node program.js  

  *Puedes escribir a consola de la misma forma que en el navegador(browser):*  

     console.log('texto')


Este ejercicio era muy fácil, asi que no hay nada que añadir.

**Archivo:** program.js

## PASOS DE BEBE (Ejercicio 2 de 13)  

  *Escribe un programa que reciba uno o más números como argumentos de la consola e imprima la suma de dichos números a consola(stdout).*

  ## PISTAS  

  *Puedes acceder a los argumentos de la línea de comandos usando el objeto global process, el cual tiene una propiedad argv que es un array con toda la información del comando. Ej: process.argv.*  

  *Para comenzar puedes escribir un programa que contenga:*  

     console.log(process.argv)  

  *Luego, para ejecutarlo desde la consola usa node program.js y algunos números como argumentos.*

  *Para resolver este ejercicio debes iterar en la lista de argumentos de modo que sólo escribas la suma. El primer elemento de la lista siempre es 'node', el segundo es la ruta al program.js; por ende, debes comenzar a iterar en el tercer elemento (índice 2 de la lista) sumando cada elemento sucesivo hasta el final.*

  *Ten en cuenta que todos los elementos de process.argv son cadenas de caracteres ('strings') por lo que debes convertirlas a números, por ejemplo: agregando el prefijo + o llamando a Number().*

  Como el ejercicio pide que se imprima la suma de todos los números que se pasen como argumentos, no podemos librarnos de una variable que acumule el valor de la suma y un bucle que haga una iteración por los mismos. Hay un salto de dificultad bastante importante ya desde el primer ejercicio al segundo como se puede ver.

  **Archivo:** global-process.js

  ## ¡MI PRIMER I/O! (Ejercicio 3 de 13)  

  *Escribe un programa que, usando una llamada síncrona al sistema de
  archivos, lea un archivo recibido por argumento e imprima a consola la cantidad de saltos de línea ('\n') que contiene. Similar a ejecutar cat file | wc -l.*  

  *El programa recibirá la ruta al archivo como único argumento.*

  Para este ejercicio necesitaremos incorporar el módulo fs de Node (file system) y usar el método fs.readFileSync().

  Este método devuelve un buffer de memoria por defecto.

  El archivo **i-o.js** contiene dos versiones: La solución oficial comentada y la solución con ayuda de Chat GPT, que ha añadido el tratamiento de errores tanto en la secuencia inicial del paso de argumentos como en la final de realizar las adaptaciones necesarias para detectar el número de saltos de línea.

  **documentación módulo fs:** file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/fs.html#fs_fs_readfilesync_path_options

  *Archivo:* i-o.js

  ## ¡MI PRIMER I/O ASINCRÓNICO! (Ejercicio 4 de 13)  

  *Escribe un programa que use operación de sistema de archivos asíncrona para leer un archivo e imprimir en consola el número de saltos de línea ('\n') que contiene. Similar a  ejecutar* `cat file | wc -l.`  

  *El programa recibirá la ruta al archivo como único argumento*

  *La resolución es similar al problema anterior pero esta vez usaremos the Node.js way: asíncronicamente (async).*  

  *Vamos a sustituir fs.readFileSync() por fs.readFile() y en lugar de esperar que retorne un valor, vamos a tener que procesar el resultado con una función de callback que se invoca al terminar la lectura del archivo.*  

  *La forma habitual de usar callbacks en Node.js es con la siguiente firma:*

  ```
  function callback (error, data) { /* ... */ }
  ```

  *Puedes validar si ocurrió un error controlando si el primer parámetro es nulo. Si no hay errores, 'data' será un objeto Buffer de Node.js. Al igual que pasa con readFileSync(), puedes pasar 'utf8' como segundo parámetro y luego el callback como tercero de modo de que data sea un String y no un Buffer.*

  Vamos a volver a usar el módulo ('fs') y a usar una función como argumento para el método fs.readFile(). También usaremos el array de Node.JS para obtener entradas de la línea de comandos `process.argv[2]`

  El procedimiento para crear este programa sería

  1 - Importar módulos necesarios

  2 - Definir variables globales

  3 - Usar método fs.readFile()

  4 - Pasar argumentos correctamente

  5 - Tratamiento de errores (1er parámetro callback)

  6 - Definición y uso de variables locales que nos permitan realizar la tarea requerida

  7 - Mostrar el resultado

  El archivo tiene unas líneas comentadas de solución alternativa, he estado probando las dos. Me gusta más pasar los 3 parámetros al método fs.readFile() y ahorrarme el toString() al final.

  *Archivo:* callback.js 
