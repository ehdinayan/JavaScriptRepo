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

## LS FILTRADO (Ejercicio 5 de 13)

*Crea un programa que dado un directorio imprima una lista de archivos filtrados por la extensión. El primer argumento será la ruta al directorio (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.*  

*La lista de archivos a imprimir en consola debe hacerse un archivo por línea y debes utilizar Async I/O.*

## PISTAS  

*La función `fs.readdir()` recibe como parámetros: una ruta(path) y un callback. La firma del callback es:*

`function callback (error, lista) { /* ... */ }`

*La lista es un arreglo de nombres de archivos de tipo String.*

Proceso para la resolución del problema:

1- Importar módulos necesarios ('fs' y 'path')

2- Definir variables globales, ej: `const ext = '.' + process.argv[3]` para la extensión

3- Uso del método `fs.readdir()`, recibe un directorio y un callback como parámetros

4- Tratamiento de errores (1er parámetro callback)

5- Identificar las extensiones

6- El módulo 'Path' incluye métodos de filtrado de archivos. Identificar las extensiones de ficheros en el directorio que coinciden con las pasadas como argumento.

7- Sacar el resultado por consola

El ejercicio está comentado e el archivo del programa también. Incluye una versión implementada por Chat gpt 4.0, más exhaustiva pero algo engorrosa y la versión oficial de NodeSchool, que es la que he comentado y es mucho más directa.

**documentación módulo path:** file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/path.html

*Archivo:* filter-files.js


## HAZLO MODULAR (Ejercicio 6 de 13)

*Este problema es similar al anterior e introduce la idea de módulos. Deberás crear dos archivos para resolver el ejercicio.*  

*El programa debe imprimir el listado de archivos de un directorio filtrando por extensión. Nuevamente el primer argumento será la ruta al  
directorio (ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si recibes 'txt' deberás filtrar todos los archivos que terminen  
en .txt. Debes usar Async I/O.*

*Deberás escribir un archivo modular para hacer la tarea. Dicho módulo debe exportar una función que reciba tres parámetros en orden: la ruta del
directorio, la extensión para filtrar y una función de callback. La idea es encapsular toda la lógica dentro del módulo.*

*En Node, los callbacks suelen tener una firma convencional de tener (error, data). Esto implica que si hay un error el primer parámetro  
devuelve el error si no viene null y el segundo parámetro son los datos. Para este ejercicio los datos a devolver es la lista de archivos en forma de Array. Si ocurre un error, por ejemplo en la llamada a fs.readdir(), el callback debe llamarse con dicho error.*

*Para completar el ejercicio no debes imprimir desde el módulo, sólo desde el programa principal. En caso de que el módulo devuelva un error a tu programa principal, simplemente compruébalo y escribe un mensaje informativo en consola.*

*El módulo debe cumplir el siguiente contrato:*  

   *1. Exportar una función que reciba los parámetros mencionados.*  
   *2. Llamar al callback una única vez cuando ocurre un error o con la lista correspondiente.*  
   *3. No debe modificar variables globales o stdout.*  
   *4. Capturar los posibles errores y devolverlos en el callback.*

*La ventaja de usar contratos es que el módulo puede ser usado por  
cualquiera que asuma este contrato.*

## PISTAS

*Para crear un módulo basta con crear un nuevo archivo en el directorio de trabajo. Para definir una función de export, debes asignar la función al objeto global module.exports, por ejemplo:*

`module.exports = function (args) { /* ... */ }`

También puedes usar una función con nombre y asignar el nombre a exports.  

*Para llamar a esta función desde el programa debes usar require de la misma forma que para cargar el módulo de fs salvo que debes agregar el prefijo './' para indicar que es un archivo del directorio actual. Por ejemplo si tu módulo se llama 'mymodule.js' deberás usar:*

`const mymodule = require('./mymodule.js')`

*El '.js' es opcional y en la mayoría de los casos se omite.*

*Ahora ya tienes cargada la función del módulo en la variable mymodule y la puedes invocar. Ten en cuenta que es buena práctica en Node controlar errores y devolverlos bien al principio del código:*

```
function bar (callback) {  
       foo(function (err, data) {  
         if (err) { return callback(err) } // devolver el error  

         // ... no hay error, continuar con los cálculos.  

         // si todo termina bien, llamar el callback con `null` como parámetro de error  

         callback(null, data)  
       })  
     }
```

Para la solución del ejercicio hay que dividir el ejercicio anterior en dos archivos, básicamente.

Uno será el ejecutable que podrá invocar la función del módulo externo, tal y como veníamos haciendo para realizar los ejercicios anteriores, sólo que en esta ocasión el módulo importado será un archivo que definimos nosotros y que contendrá el algoritmo necesario para realizar la función requerida.

El archivo modular podría llamarse por ejemplo `mymodule.js`

En él se importa el módulo fs para trabajar con ficheros y directorios de manera que podamos implementar la función de filtrado.

Para hacer la función ejecutable desde un fichero externo la definiremos como `module.exports`

El archivo ejecutable que se llama pasando los parámetros podrá ser `main.js`. Importará el fichero con la función a utilizar usando `require ('mymodule.js')`

Como anteriormente, he incluido las versiones GPT y oficial. La diferencia en el ejecutable está en la forma de filtrar los ficheros por extensión. GPT usa `files.filter` y `file.endsWith('.${extension}')` , mientras que en la versión oficial se usa el método `path.extname`

En el fichero ejecutable, por ambas partes se importa el fichero externo, se definen las variables para tomar los argumentos y se llama a la función con ellos. Sólo difieren los nombres para el fichero externo, la función y las variables.

Por último, se imprime el resultado por consola.



*Archivos:* Contenidos en el directorio **moduling**
