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

 
