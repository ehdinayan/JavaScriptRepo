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
