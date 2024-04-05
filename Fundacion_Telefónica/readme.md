# Fundación Telefónica. Programación en JavaScript

## Módulo I. Páginas dinámicas

Aquí voy a desarrollar los contenidos de un pequeño curso JavaScript para seguir aprendiendo y practicando un poco con Atom editor, Markdown y GitHub.

Ayer ya realicé el primer módulo, consistente básicamente en las tres diferentes formas de incluir contenido JavaScript en un documento html:

La primera escribiendo el código entre las etiquetas `<script>` en la cabecera del documento:

```
<script type= "text/javascript">
  Alert("Un mensaje de prueba");
</script>
```
Otra, la más común, consiste en indexar los documentos que contienen JavaScript a través del atributo src:


```
<script type="text/javascript" src="/js/codigo.js"></script>
```

También hay la posibilidad de incluir JavaScript dentro de las propias etiquetas html, lo que no resulta muy práctico y hace que el documento html sea más complicado de leer:

```
<p onclick="alert('mensaje de prueba')">Párrafo en el texto.</p>
```

## Módulo II. Sintaxis del lenguaje JavaScript

Algunas de las características sintácticas de este lenguaje son las siguientes:

- No importan las nuevas líneas ni los espacios en blanco ya que al igual que ocurre con HTML, el propio intérprete del lenguaje las ignora

- Es case sensitive

- A diferencia de la mayoría de lenguajes de programación, no hay que definir el tipo de variable (var). Una misma variable puede contener diferentes tipos de datos.

- Cada sentencia acaba con el carácter punto y coma (;)

- Se puede incluir comentarios en el código para añadir información sobre lo que el script está haciendo:

`ejemplo de comentario de una línea:`

```
//aquí se muestra un mensaje
alert("mensaje de prueba");
```
`ahora vemos un ejemplo de comentario de varias líneas:`

```
/*Los comentarios de varias líneas
son muy útiles cuando hay que incluir una cantidad
de contenido considerable en el mensaje*/
```

## *Variables*

Sin las variables sería imposible escribir y crear "códigos genéricos", es decir, que funcionen de la misma manera independientente de los valores concretos usados. En JavaScript, se usan mediante la palabra reservada `var`

```
var num_1= 4;
var num_2= 6;
var res = num_1 + num_2;
```
Al nombre de la variable también se le conoce como identificador y debe cumplir la siguiente normativa:

- Sólo puede estar formado por números, letras o como mucho los valores `$` ó `_`

- El primer carácter no debe ser un número

## *Tipos de datos*

Ya sabemos que las variables en JavaScript se crean a partir de la palabra reservada `var`, pero dependiendo de la información que contenga será de un tipo u otro.

```
var entero = 99; // variable tipo entero
var sms = "Hola tronco!" // Variable tipo cadena de texto o string

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"] // Variable tipo array

//Bucle para recorrer el array

for (var i = 0; i<dias.lenght;i++){
  alert(dias[i]);
}

var register = true;
var register = false; // Variables de tipo lógico o booleanos
```

## *Operadores*

Los operadores manipulan, realizan cálculos matemáticos o comparan  valores de diferentes variables. Estos son los diferentes tipos:

```
var num_1 = 3; //asignación

var num = 5;
++num;
alert(num); //num = 6. Aumentar o decrementar

// Operadores lógicos serán los adecuados para realizar condiciones y lógica matemática

Negación:
var vis = true;
alert(!vis); // a causa de la negación ! mostrará false en vez de true

Matemáticos:
/ = división
+ = sumar
- = restar
* = multiplicar

Relacionales:
>, <, // mayor que, menor que
>=, <= // mayor o igual que, menor o igual que
==, != // igual que, distinto de

Combinación:
and /*este operador combina diferentes variables dando true si la condición para ambos valores se cumple*/

or /*este operador combina diferentes variables dando true si la condición para alguno de los valores se cumple, de otro modo dará false*/
```
## *Document Object Mode (DOM)*

Cuando se carga una página en un navegador se crean un número de objetos característicos del navegador según el contenido de la página, con la siguiente jerarquía de clases:

**Estructuras**

**1 WINDOW OBJECT**
Contiene las propiedades básicas de la ventana y sus componentes:
- *Default status* contiene el mensaje que aparece en la barra de estado
- *Frames* es una matriz que representa todos los frames de la ventana
- *Lenght* nos indica el núm de frames de la ventana
- *Name* contiene el nombre de la ventana
- *Self* podríamos decir que también hace referencia a la propia ventana

**2 LOCATION OBJECT** Contiene toda la información sobre la url que se está visualizando y los detalles de esa dirección como puerto, protocolo, etc.

**3 SCREEN OBJECT** Permite obtener información sobre la resolución de la pantalla

**4 DOCUMENT OBJECT** Hace referencia a determinadas carácterísticas de la página (bg color, link color, etc)

**Navegación**

**1 HISTORY OBJECT** Se utiliza principalmente para generar botones de avance y retroceso

**2 NAVIGATOR OBJECT** Permite obtener información sobre el navegador con el que se está visualizando el documento.

## Módulo III. Control de flujo


Los códigos que se pueden escribir usando solo variables y operadores, son una sucesión de instrucciones básicas.

Hay programas complejos como recorrer un array o establecer una condición que no pueden ser realizadas simplemente con una sucesión de instrucciones básicas, es por ello que necesitamos instrucciones de control de flujo que nos permite elegir líneas para ejecutar dentro de nuestro código o repetir una serie de líneas un número de veces según una condición.

Son instrucciones del tipo:

"si se cumple esta condición, hazlo; si no se cumple, haz esto otro"

"repite esto mientras se cumpla esta condición".

Utilizar este tipo de estructuras de control de flujo, convierte a los programas en “inteligentes” permitiendo tomar decisiones en función del valor de las variables utilizadas.

## *Estructuras*

**Estructura if:**

`if(condición) {algoritmo}`

Cuando se comprueba el cumplimiento de la condición, el programa accede al algoritmo entre llaves para llevar a cabo la acción indicada. Si la condición no se cumple no se entrará en las llaves y el programa simplemente pasa a la siguiente instrucción.

**Estructura if else:**

```
if(condición) {algoritmo}
  else {algoritmo secundario}
```
A veces necesitamos que cuando se cumple una condición se ejecute un código, y si no se cumple se lleve a cabo otra acción. Para eso sirve el condicional adicional `else {}`. Se pueden añadir tantas condiciones como sea necesario añadiendo `else if {}` antes del último condicionante, que será simplemente `else {}`

  **Estructura for:**

  ```
  for (condición, instrucción, actualización)
    {algoritmo}
  ```

  Los bucles for permiten reiterar líneas de código mientras se satisfaga una condición.

  **Estructura for...in:**

  `for (indice in array){algoritmo}`

  Esta variante del bucle for nos permite usar un índice que recorra un array para realizar operaciones con cada uno de sus valores.
  También sirve para objetos dentro del lenguaje JavaScript.

  ## *Funciones*

  Para manejar nuestras diferentes variables JavaScript hace uso de funciones y propiedades, que ya se encuentran en el propio lenguaje. A continuación, veremos las funciones según su utilidad.


  **Funciones para cadenas de texto**


  - **Lenght** halla la longitud de una cadena de texto.
  - **+** se emplea para concatenar varias cadenas de texto.
  - **toUpperrCase()** convierte los caracteres a mayúsculas.
  - **toLowerCase()** convierte los caracteres a minúsculas.
  - **charAt(posición)** halla el carácter en una posición concreta de un array por ekemplo.
  - **indexOf(caracter)** halla la posición donde se encuentra un caracter indicado. Si no está devuelve `-1`, y si está más de una vez devolverá la primera posición en que lo encontró.
  - **lastIndexOf(caracter)** halla la última posición en la que se encuentra un carácter. Si no está devuelve `-1`
  - **substring(inoicio, final)** saca un trozo de una cadena de texto. El parámetro final no es obligatorio. Si no se indica, de forma automática recogerá hasta el final del string


  **Funciones útiles para arrays**

  - **Lenght** halla el núm de elementos de un array.
  - **concat()** concatena los elementos de varios arrays.
  - **join(separador)** une los elementos de un array para formar una cadena de texto.
  - **pop()** suprime el último elemento de un array y lo mete en la variable seleccionada.
  - **push()** agrega un elemento o varios a nuestro array.
  - **shift()** suprime el primer elemento de nuestro array y lo mete en la variable seleccionada.
  - **unshift()** agrega un elemento o varios al principio de nuestro array.
  - **reverse()** invierte el orden de los elementos de un array.


  **Funciones útiles para los números**

  - **Infinity** es el valor de infinito cuando las operaciones dan dicho resultado.
  - **toFixed(digitos)** define el número de decimales a mostrar en una operación y redondea si es necesario.    
