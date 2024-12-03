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

## CLIENTE HTTP (Ejercicio 7 de 13)

*Escribe un programa que reciba como argumento una URL y realice una petición HTTP GET a la misma. Luego, deberá imprimir por consola el  
contenido de cada evento "data" de la petición, uno por línea.*

## PISTAS

*Para este ejercicio necesitas el módulo http incluido en Node. La documentación del módulo http puede verse en:*  

file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/http.html

*El método http.get() es versión simplificada para peticiones GET y conviene que la uses para la solución. El primer parámetro de http.get() es la URL y el segundo es un callback. A diferencia de otros callbacks la firma es:*

` function callback (response) { /* ... */ } `

*Siendo response un objeto Stream de Node. En Node los Streams emiten eventos, a los cuales puedes suscribir callbacks. Para este ejercicio sólo nos interesan los eventos: "data", "error" y "end". Para escuchar un evento debes hacer:*

`response.on('data', function (data) { /* ... */ })`

*El evento "data" se dispara cuando un chunk, conjunto de datos, está disponible para procesarse. El tamaño del chunk depende de la  
implementación.*

*Nota: Por omisión, los objetos 'data' recibidos son Buffers de Node que deben ser convertidos a Strings para luego ser escritos en consola. Sin embargo, el objeto response que obtienes de http.get() tiene un método setEncoding() que permite definir cómo se leen los bytes obtenidos. Si lo llamas con parámetro "utf8" recibirás Strings en los eventos emitidos.*

Bueno como siempre, la primera parte consiste en implementar el módulo necesario, en este caso será http:

`const http = require ('http')`

Para tomar la url como argumento de la línea de comandos, volvemos a usar process.argv[2]

`http.get(process.argv[2], function (response) {`

Lo siguiente será establecer la codificación de los datos recibidos, ir escribiéndolos en consola conforme se reciben, así como mostrar un mensaje de error en caso que se produzca alguno en la transmisión. Esto lo hacemos con:

`response.setEncoding('utf8')`, `response.on('data', console.log)` y `response.on('error', console.error)`

Luego, en la versión que realicé con ayuda del chat GPT, incluímos un controlador para notar el final de la operación, aunque da error al corregirlo ya que aparece una línea que no está en el resultado de la solución oficial
```
response.on('end', () => {
  console.log('No more data in response')
  })`
```
Finalmente la gestión de errores de solicitud, ya fuera del ámbito del callback:

`}).on('error', console.error)`

En el archivo como siempre se incluyen las dos versiones, pero la única diferencia entre ambas es la que acabo de mencionar.

*Archivo:* http-request.js

## COLECCIÓN HTTP (Ejercicio 8 de 13)

*Escribe un programa que realice una petición HTTP GET a una URL provista como primer argumento del programa. Almacena todos los datos recibidos del servidor, es decir no sólo el primer evento "data", y luego escribe a consola dos líneas:*  

   *» En la primera escribe la cantidad de caracteres recibidos.*                  
   *» En la segunda escribe la totalidad de caracteres*
    *recibidos.(todo el string).*

## PISTAS

*Hay por lo menos dos formas de resolver este problema:*  

  *1) Almacenar los datos de todos los eventos "data" para luego agregarlos los resultados antes de imprimirlos por consola. Puedes usar el evento "end" para saber cuando terminas de recibir datos.*

  *2) Usa un paquete de terceros para evitar los problemas de almacenar el stream completo de datos. Por ejemplo, tienes a disposición: bl (Buffer List) o concat-stream.*

  *Para instalar alguno de estos paquetes usa Node Package Manager npm de la siguiente forma:* `$ npm install bl`

  *Npm descargará el paquete e instalará la última versión disponible en la carpeta node_modules. Todos los paquetes instalados ahí pueden cargarse desde tu programa usando require sin prefijo:* `const bl = require('bl')`

  *Node busca primero en su núcleo de módulos y si no lo encuentra busca en node_modules.*

  *Ambos paquetes pueden usar un stream piped para capturar los datos. Una vez que se acaba el stream se dispara un callback con todos los datos:*

  *Ej:* `response.pipe(bl(function (err, data) { /* ... */ }))`

  *Puedes leer la documentación de ambos módulos en la carpeta de instalación de learnyounode en:*  

  file:///usr/local/lib/node_modules/learnyounode/docs/bl.html  
  file:///usr/local/lib/node_modules/learnyounode/docs/concat-stream.html


-------------------------------------------------------------------


  Yo he hecho este ejercicio instalando el módulo bl y usando la función que recomienda el enunciado, lo que pasa es que mi línea para para pasar el buffer de datos completo a string no funcionaba y daba error:

  `console.log(bl.slice(0,bl.lenght).toString('data')`

  Se ve algo complicada ¿verdad?. Siempre la forma más simple de hacer las cosas suele ser la más apropiada.
  Chat GPT me lo corrigió de esta forma:

  ```
  console.log(data.length)  // Imprime el número de caracteres recibidos
  console.log(data.toString())  // Imprime todo el string recibido
  ```

  La única diferencia con la versión oficial es que en ese caso lo primero que se hace antes de sacar nada por consola es pasar todo el buffer a string, asi:

  ```
  http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString() //Este paso se hace antes de los otros dos
        console.log(data.length)
        console.log(data)
      }))
    })
  ```

En esta ocasión el archivo incluye las tres versiones: la que probé por mi cuenta, la del chat GPT y la versión oficial.

*Archivo:* http-collection.js

## MALABARES CON ASINCRONISMO (Ejercicio 9 de 13)

*Este ejercicio es similar al anterior puesto que debes usar http.get(). Sin embargo, esta vez tu programa recibirá tres URLs como argumentos. Tu programa deberá imprimir el contenido de cada una de las URLs en consola en el mismo orden que fueron recibidos los argumentos. No deberás imprimir el largo, solo el contenido como String, pero debes respetar el orden de llegada de los argumentos.*

## PISTAS

*Como las llamadas a las URL son asíncronas, es probable que no recibas las respuestas en orden, por lo que no se deben imprimir las respuestas a medida que llegan.*

*Habrá que encolar los resultados y mantener un contador de cuantas peticiones han sido recibidas de modo que al llegar al final puedas imprimir los resultados*

*Se debe realizar el ejercicio sin usar `async` https://www.npmjs.com/package/async ni tampoco `run-parallel` https://www.npmjs.com/package/run-parallel*

Como siempre, es recomendable desmenuzar un programa en tareas más pequeñas para obtener el resultado completo. En este caso, un análisis de lo que necesitamos podría ser:

- Parsear argumentos de la línea de comandos

- Inicializar una estructura de datos para almacenar el contenido de las respuestas y el orden de llegada

- Inicializar un contador para contabilizar el núm de respuestas recibidas

- Realizar la solicitud y gestionar posibles errores en las respuestas   

- Acumular respuestas para recibirlas en el orden establecido.

Antes del primer paso, importar como siempre los módulos necesarios y definir variables:

```
'use strict';
const http = require('http');
const bl = require('bl');
const results = [] //Almacenar respuestas
let count = 0; // Inicializar contador de respuestas recibidas
```
Una de las cosas que me confunde al programar es que a menudo las cosas se escriben en el orden contrario al que se ejecutan. Yo prefiero tener las estructuras y funciones definidas abajo y ejecutar la llamada arriba, porque me hace mucho más sencillo comprender todo el flujo de ejecuciones que se llevan a cabo simplemente leyendo de arriba a bajo, como me resulta natural. Así que aunque la versión oficial lo hace al revés, yo aquí voy a dar esta explicación:

```
for (let i = 0; i < 3; i++) {
      httpGet(i)
    }
```

Aquí definimos un bucle que lo que hace es ejecutar la función hhtpGet() pasándole como argumento un índice que va de 0 a 2

¿Como es la función httpGet()?

```
function httpGet (index) {
      // Se ejecutará primero con el argumento de 0 y por último con el de 2

      http.get(process.argv[2 + index], function (response) {
        //process.argv[2+index] será process.argv[2] en la 1º pasada
        //o sea, la 1º url. Luego vendrá la 2º y por último la 3º

        response.pipe(bl(function (err, data) {
          //El callback de httpGet almacena el contenido recibido gracias al módulo bl

          if (err) {
            //El callback de bl es ejecutado y se gestionan errores
            return console.error(err)
          }

          results[index] = data.toString()
          count++
          /*Parte muy importante porque consigue gran parte de lo
           que pide el ejercicio :
           Convierte los datos recibidos en una cadena de texto y los almacena en el arreglo results en la posición
           correspondiente al índice. Luego aumenta el contador para saber que la siguiente respuesta corresponderá
           al siguiente indice*/

          if (count === 3) {
            printResults()
            //Cuando el contador es igual a 3 (3 urls), se imprimen
            //los resultados en el orden en que se recibieron
          }
        }))
      })
    }
```

En esta ocasión el código del chat GPT resulta un poco más confuso que la solución oficial para mi, igualmente están las dos en el archivo como de costumbre.

*Archivo:* http-async.js

## SERVIDOR DE TIEMPO (Ejercicio 10 de 13)

El servidor debe escuchar conexiones TCP en el puerto indicado por el  
primer argumento del programa. Para cada conexión debes escribir la fecha  
actual y la hora en formato 24hs del siguiente modo:

"AAAA-MM-DD hh:mm"

seguido por un carácter newline('\n'). Tanto el mes, el día como la hora y minuto deben tener un 0 para ocupar 2 espacios, por ejemplo:

"2013-07-06 17:42"

## PISTAS  

Para este ejercicio crearemos un servidor TCP en lugar de usar el módulo HTTP usaremos el módulo net del núcleo de Node que tiene funcionalidades de red.

El módulo net tiene un método net.createServer() que recibe un callback. A diferencia de otros callbacks en Node, el callback createServer() se llama una vez por cada conexión entrante. La firma es la siguiente:

`function callback (socket) { /* ... */ }`

net.createServer() devuelve una variable instancia de server. Para iniciar la escucha del servicio hay que llamar a server.listen(portNumber).

Un ejemplo de un servidor Node típico es como sigue:

```
const net = require('net')  
     const server = net.createServer(function (socket) {  
       // manejo del socket  
     })  
     server.listen(8000)
```
Recuerda usar el puerto recibido por argumento.  

El objeto socket contiene información sobre la conexión y es un Stream duplex, es decir que se puede escribir y leer a la vez.

Puedes usar socket.write(data) para escribir en el socket y luego  
socket.end() para cerrar el socket. Alternativamente, el método end() puede recibir un objeto de datos socket.end(data).

La documentación del módulo net puede verse en:

file:///usr/local/lib/node_modules/learnyounode/docs-nodejs/net.html

Para calcular la fecha puedes usar new Date() y luego llamar a algunos métodos específicos:

```
date.getFullYear()  
     date.getMonth() // empieza en 0  
     date.getDate() // devuelve día del mes, empieza en 1  
     date.getHours()  
     date.getMinutes()
```
Otra opción más intrépida es usar el paquete strftime disponible en npm. La función strftime(formato, fecha) recibe un formato de fecha similar al date de UNIX. Más información de strftime [aqui](https://github.com/samsonjs/strftime)

 
