# Node Schools

## JavaScripting

Hola! éste es el *Workshopper* esencial de **JavaScript** de la estupenda web Node Shools, donde a través de la administración de paquetes de Node se accede a workshops autoguiados para aprender muchas cosas a tu ritmo y con soluciones si nos quedamos atascados por cualquier motivo.

Una [web](https://nodeschool.io/) genial para aprender y mantenerse al día de competencias en el sector digital, o simplemente practicar

## Lista de Lecciones

## **1 Introducción**

fichero *introduction.js*

## **2 Variables**

fichero *variables.js*

## **3 Strings**

fichero *strings.js*

## **4 Longitud de strings**

fichero *string-length.js.*  Uso de la propiedad *.lenght*

## **5 Modificando Strings**

fichero *modifing-strings.js*  Uso del método *.replace()*

## **6 Números**

fichero *numbers.js*

## **7 Redondeando números**

fichero *rounding-numbers.js*  Uso del método *.Math.round()*

## **8 Número a string**

fichero *number-to-string.js*  Uso del método *.toString()*

## **9 Bloque condicional**

fichero *if-statement.js*  Uso de if - else:

```
if (n > 1) {  
       console.log('la variable n es mayor a 1.')  
} else {  
       console.log('la variable n es menor o igual a 1.')  
}
```

## **10 Iterando con for**

fichero *for-loop.js*  Uso de bucle for:

```
for (let i = 0; i < 10; i++) {  
   // imprime los números del 0 al 9  
   console.log(i)  
}
```
11 **Arrays**

fichero *arrays.js*

## **12 Filtrado de arrays**

Los arrays poseen métodos predefinidos que nos permiten manipularlos.  

Por ejemplo, los métodos **forEach**, **map**, **some** y **filter** son bastante  
utilizados.  

Algo muy común es filtrar arrays para que contengan sólo ciertos valores.  

Para esto podemos utilizar el método **.filter()**.  

Por ejemplo:  

```
const pets = ['cat', 'dog', 'elephant']  

const filtered = pets.filter(function (pet) {  
    return (pet !== 'elephant')  
    })
```

La variable filtered será igual a un array que contiene solo cat y dog.

**Ejercicio**

Crea un archivo llamado filtrado-de-arrays.js.  

En ese archivo, define una variable llamada numbers que referencie al
siguiente array: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Luego, define una variable llamada filtered que referencie el resultado de numbers.filter().  

La función que recibe .filter() será algo cómo lo siguiente:

```
function evenNumbers (number) {  
   return number % 2 === 0  
}
```

Utiliza console.log() para imprimir el array filtrado a la terminal.

**Nota** lo que estamos haciendo aquí es filtrar los números cuyo resto al ser divididos por 2 es 0, es decir, los que son pares.

fichero *array-filtering.js

## **13 Accediendo a arrays**

Se puede tener acceso a los elementos de un Array a través del número de índice.  

El número de índice comienza en cero y finaliza en el valor de la  
propiedad longitud (length) del array, restándole uno.  

A continuación, un ejemplo:

```
const pets = ['cat', 'dog', 'rat']  

console.log(pets[0])
```
**Ejercicio**

Crea un archivo llamado accediendo-valores-array.js  

En ese archivo, define un array llamado food :`const food = ['apple', 'pizza', 'pear']`

Usa console.log() para imprimir el segundo valor del array en la terminal.

fichero *accessing-array-values.js*

## **14 Recorriendo arrays**

Para este ejercicio usaremos un bucle for para acceder y manipular una lista de valores en un array.  

Se puede acceder a los valores de un array utilizando un contador.  

Cada ítem en el array es identificado por un número, su índice.  

Los índices comienzan desde el cero.  

Entonces en este array, el elemento hi es identificado por el número 1: `const greetings = ['hello', 'hi', 'good morning']`

Puede ser accedido de la siguiente forma: `greetings[1]`

Entonces dentro de un bucle for utilizaremos la variable ì dentro de los corchetes.

**Ejercicio**

Crea un bucle for que cambie cada string en un array para que sean  
plurales.

fichero *looping through arrays.js*

## **15 Objetos**

En JavaScript, un objeto es lo que se conoce como JavaScript Object Notation, **JSON**

Los objetos son en cierta forma contenedores y se los puede pensar cómo diccionarios.  

Tendrá ciertas llaves y cada una se verá referenciada a un valor.  

Por ejemplo:

```
const foodPreferences = {  
       pizza: 'yum',  
       salad: 'gross'  
     }
```
En el ejemplo anterior podemos ver que las llaves (keys) del objeto  foodPreferences son pizza y salad. Sus valores son yum y gross  respectivamente.

**Ejercicio**

Definir un objeto JSON e imprimirlo en la terminal a través de console.log()

fichero *objects.js*

## **16 Propiedades de objetos**

Puedes acceder y manipular propiedades de objetos –– las llaves y valores que un objeto contiene –– utilizando una forma muy similar que con arrays:

```
const example = {  
   pizza: 'yummy'  
}  

console.log(example['pizza'])
```
Eso imprimirá el string 'yumy' en el terminal. También puedes usar la notación de punto para obtener resultados idénticos: `example.pizza` ó `example['pizza']`

**Ejercicio**

Definir un objeto JSON y usar console.log para imprimir una propiedad concreta del mismo por el terminal.

fichero *object-properties.js*

## **17 Keys de objetos**

JavaScript nos da una manera nativa de listar todas las llaves (keys) de un objeto. Esto puede ser muy útil para iterar sobre las propiedades de un objeto y manipular sus valores.  

Veámos un ejemplo de cómo podríamos listar todas las propiedades de un objeto usando el método **Object.keys()**:

```
const car = {  
       make: 'Toyota',  
       model: 'Camry',  
       year: 2020  
     }  
const keys = Object.keys(car)  

console.log(keys)
```
El código de arriba imprime un arreglo de strings, donde cada string es una llave (key) en el objeto **car** `(['make', 'model', 'year'])`.

**Ejercicio**

Crea un objeto JSON y usa el método Object.keys() para definir una variable con sus claves. Luego, usa console.log() para imprimirlas por consola.

fichero *object-keys.js*

## **18 Funciones**

Una función es un bloque de código que puede recibir un input y devolver un output.  

Vamos a utilizar la palabra reservada return para especificar lo que devuelve una función.  

Por ejemplo:

```
function example (x) {  
       return x * 2  
}
```

Podemos llamar a la función de esta forma para obtener el número 10:
`console.log(example(5))`

**Ejercicio**

Define una función que reciba una string como parámetro y devuelva la misma string con otra string añadida.

fichero *functions.js*

## **19 Argumentos de funciones**

Una función puede ser declarada para recibir cualquier número de  
argumentos. Los argumentos pueden ser de cualquier tipo. Por ejemplo, un argumento a una función podría ser una string, un número, un array, un objeto e incluso otra función.  

Un ejemplo:

```
function example (firstArg, secondArg) {  
       console.log(firstArg, secondArg)  
}
```

**Ejercicio**

define una función llamada math que recibe trés argumentos. Es importante que entiendas que los nombres de los argumentos son únicamente utilizados para referenciarlos.  

Nombra cada parámetro cómo quieras.  

La función math deberá multiplicar el segundo y tercer argumento, y luego sumar el resultado con el primer argumento para luego retornar el valor obtenido.

Luego de eso, llama la función `math()`con el número 53 cómo primer argumento, el número 61 cómo segundo argumento y el número 67 cómo tercero.

fichero *function-arguments.js*

## **20 Ámbito o Scope**

El scope o ámbito es el conjunto de variables, objetos y funciones a las que tienes acceso.  

JavaScript tiene dos ámbitos: global y local. Una variable que es  
declarada fuera de la definición de una función es una variable global, y su valor es accesible y modificable a través de tu programa. Una variable que es declarada dentro de la definición de una función es una variable local. Se crea y se destruye cada vez que se ejecuta la función, y no se puede acceder a su valor ni modificarlo por ningún código fuera de la misma.

Las funciones definidas dentro de otras funciones, conocidas como  
funciones anidadas, tienen acceso al ámbito de su función padre:

```
const a = 4 // es una variable global, puede ser accedida por las siguientes funciones  

     function foo () {  
       const b = a * 3 // b no puede ser accedida por fuera de la
       //función foo, pero puede ser accedida por las funciones definidas dentro de foo  
       function bar (c) {  
         const b = 2 // otra variable `b` es creada dentro del ámbito de la función bar  
         // los cambios a esta nueva `b` no afectan a la vieja variable `b`  
         console.log(a, b, c)  
       }  

       bar(b * 4)  
     }  

     foo() // 4, 2, 48
```
Existe también Immediately Invoked Function Expression **IIFE**, un patrón común para crear ámbitos locales.  

Por ejemplo:

```
(function () { // La expresión de la función está entre paréntesis  
       // las variables definidas aquí  
       // no pueden ser accedidas por fuera  
     })() // la función es inmediatamente invocada
```

**Ejercicio**

En el siguiente código:

```
const a = 1; const b = 2; const c = 3;  

     (function firstFunction () {  
       const b = 5; const c = 6;  

       (function secondFunction () {  
         const b = 8;  

         (function thirdFunction () {  
           const a = 7; const c = 9;  

           (function fourthFunction () {  
             const a = 1; const c = 8  
           })()  
         })()  
       })()  
     })()
```

Usa tu conocimiento sobre el ámbito de las variables y ubica el siguiente código dentro de alguna de las funciones para que la salida sea a: 1, b: 8, c: 6

`console.log(`a: ${a}, b: ${b}, c: ${c}`);`

ficgero *scope.js*
