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


  ## Módulo IV. Eventos y objetos

  ## *Eventos*


  Hasta el momento, todos los códigos que hemos visto siguen ejecutándose sentencia a sentencia, sin interactuar con el usuario.

  Estos códigos son poco útiles en programas de JavaScript normales ya que se espera y desea una interacción con los clientes que estén usando esa página web. Así, clickar con el botón del ratón en ciertos apartados, mover el mismo ratón, o teclear pueden ser eventos que se produzcan dentro de nuestra aplicación y se traduzcan en funciones que se tienen que ejecutar en ciertos momentos en JavaScript.

  El propio lenguaje nos aporta una serie de eventos para medir la interacción del usuario con nuestra aplicación. Estas funciones creadas en JavaScript son denominadas “manejadores de eventos” o “event handlers”.

  Hay tres tipos de manejadores de eventos:

  - Como atributos de las etiquetas HTML
  - Como funciones en código JavaScript externo
  - Semánticos

  ![eventos](Media/Eventos.png)

  ## *Objetos*

  Para trabajar objetos en programación vamos a utilizar JSON (JavaScript Object Notation) es un formato para el intercambio de datos por la red, donde usualmente se utilizaba XML.

  Es un conjunto de datos, comprendidos entre los que puede medir JavaScript que son objetos, Arrays, cadenas, booleanos y números en Javascript.

  Llegó sobre 2001 gracias al apoyo incondicional de Douglas Crockford. Yahoo! ayudó a su difusión gracias a la adición de este formato en algunos de sus servicios web más innovadores. Google comienza a realizar sus feeds en JSON para su protocolo web GData a finales del 2006.

  Es considerado como un lenguaje independiente de formato de los datos cuya especificación es descrita en RFC4627.

  ## Manejadores de eventos

  ## *Atributos HTML*

  Queda incluido en el mismo atributo:

  `<input type="button" value="pinchame" onclick="alert=('Gracias');"/>`

  Este método es poco práctico ya que dificulta la reutilización del código más allá del atributo en cuestión. Por cierto, lo que está haciendo el código de arriba es hacer que aparezca el mensaje Gracias cuando se clica en el botón pinchame.

  ## *Variable "this"*

  Esta variable es especial en JavaScript. Se usa para que tome como  valor el invocador del elemento dentro del manejador. Es decir, qué componente nos ha invocado la función:

  ```
  <div id="contenido" style="width:180px; height:80px; border: thin
   solid silver" onmouseover="this.style.borderColor='red';">
  Sección de contenidos...</div>
  ```
  En el caso anterior, el componente CSS style es tomado por la función onmouseover para cambiar el color del borde del elemento html `<div>`. Al pasar el ratón por encima de este elemento, el color del borde cambia de color gris a rojo.

  ## *Funciones externas*

  Es mucho mejor para nuestro código y para la reutilización de nuestras funciones tenerlas en sentencias externalizadas. Así podemos llamar a cualquier función desde cualquier manejador de eventos en cualquier momento.

  Por ejemplo, tenemos externalizada la función muestra, que básicamente muestra un mensaje de agradecimiento:

   `funcion(muestra){ alert('Gracias')}`

  Ahora la llamaremos desde el manejador de eventos `onclic` (al hacer click) desde el documento html al estar definiendo un botón:

  ```
  <input type="button" value="Pinchame" onclick="muestra()"/>
  ```
  ## *Eventos semánticos*

  Esta implementación del manejador se basa en la externalización del código JavaScript, seleccionando el componente al que queremos agregar un manejador de evento y desvinculando completamente nuestro código HTML del código JavaScript.

  ## Particularidades de JSON sobre JavaScript

  Algunas de las particularidades o reglas del formato JSON a tener en cuenta son:

  - Son duplas nombre-valor y los nombres van delimitados por comillas, tanto simples como dobles, aunque pueden aparecer sin ellas.
  - JSON puede representar los seis tipos de valores de JavaScript: objetos, Arrays, números, cadenas, booleanos y null.
  - Las fechas no son un tipo de objeto propio.
  - Los números no pueden ir precedidos de ceros a no ser en el caso de notación decimal (Ejemplo: 0.001).
  - JSON es considerado un lenguaje independiente
  - Sus objetos deben ser considerados como cadenas Javascript, no como objetos nativos.

  ## El estandar DOM

  DOM (Document Object Model) es un agregado de utilidades diseñadas para la manipulación de XML. Además, DOM también se usa para manipulación de documentos XHTML y HTML.

  DOM es una API de funciones que se pueden usar para la manipulación de las páginas XHTML de forma eficiente y rápida.

  Antes de usar las funciones, DOM convierte internamente el XML original en una estructura fácilmente manejable formada por una jerarquía de nodos. De esta manera, DOM transforma el XML en una serie de nodos interconectados en árbol.

  Ejemplo:

  ```
  !DOCTYPE html>
<html lang="es">
<head>
  <title>Página sencilla</title>
</head>
<body>
  <p> Esta página es <strong>muy sencilla</strong></p>
</body>
</html>
```

  El árbol que se genera no representa únicamente los contenidos del fichero origen (mediante los nodos del árbol) sino que representa sus relaciones (mediante las ramas del árbol que conectan los nodos).   

  ![imagen](Media/ArbolDom.png)

  ## Manipulación de un HTML con DOM JavaScript

  Una de las principales ventajas del uso del DOM es que permite a los desarrolladores web disponer de un control preciso sobre la estructura o forma del documento HTML o XML que están controlando. Las funciones que usa DOM permiten añadir, eliminar, modificar y reemplazar cualquier nodo de cualquier documento sencillamente.

  Los documentos XML y HTML son convertidos por DOM en una jerarquía de nodos. Los nodos pueden ser de diferentes tipos:
  - **Document** Es el nodo raíz de cualquier documento HTML y XML. Todos los demás salen de el.

  - **DocumentType** Nodo que contiene la representación del DTD empleado en la página (indicado mediante el DOCTYPE)

  - **Element** contenido definido por un par de etiquetas (o tags) de apertura y cierre `<etiqueta>...</etiqueta>` o de una etiqueta abreviada que se autocierra `<etiqueta/>`. Es el único nodo que puede tener tanto nodos hijos como atributos.

  - **Attr** Representa el par nombre de atributo - valor

  - **Text** Es el contenido del texto que se halla entre una etiqueta de apertura y una de cierre. También guarda el contenido de una sección de tipo CDATA.

  - **CDataSection** Nodo que muestra una sección tipo `<![CDATA[]]>`

  - **Comment** Un comentario de XML

  - **Otros menos usuales como** DocumentFragment, Entity, EntityReference, ProcessingInstruction y Notation.

  ## Selectores y DOM

  Una vez DOM ha formado automáticamente el árbol completo de nodos de la página, ya es posible usar sus funciones para obtener la información sobre los nodos o controlar su contenido:

  ![imagen](Media/NumeracionNodos.png)

  Y ahora ya podemos usar cualquier función o propiedad de DOM con nuestro JavaScript:

  ![](Media/ManipulacionDom.png)

  ## Manejo del DOM ejercicios

  - Obtener la lista de elementos de etiqueta `<p>` y mostrarlos en  un alert de JavaScript.
  - Añadir un nuevo elemento `<p>` con el texto “Texto del nuevo párrafo” y que sea hijo del body




  Lo que hay que hacer es crear botones y aplicarles funciones para hacer que a través de código JavaScript se puedan manipular los elementos del DOM.

  En el documento HTML crearemos el botón y le asociaremos una función al evento "onclick":

  `<button onclick="miFuncion1()">Recopilar</button>`

  vamos a ver como sería esa función JavaScript.

  Creamos la variable párrafos con:
  ```
  var parrafos = document.getElementByTagName("p")
  ```
  para definir esta variable ya estamos usando dos elementos del DOM: **document**, que es el nodo raíz de cualquier documento HTML, y **element**, que hace referencia al contenido definido por un par de etiquetas (tags) de apertura y cierre.

  Lo siguiente será definir un bucle en el que un contenedor (i), haga una iteración por los diferentes párrafos y el contenido de cada posición sea mostrado a través de la variable **texto**, que será un string vacío. entonces tendríamos lo siguiente:

  ```
  function recopilar(){   
  var texto="";   
  var parrafos = document.getElementsByTagName("p");   
  for(var i=0;i<parrafos.length;i++){   
  texto+=parrafos.item(i).innerText+", ";   
  };   
  ```
  Así hacemos que la variable **texto** sea igual al texto contenido entre las etiquetas `<p>`(innerText, otro elemento del DOM), que a su vez es contenido en la variable parrafos a través del iterador (i). Ahora hay que sacarlo por la pantalla:

  ```
  function recopilar(){
    var texto="";
    var parrafos = document.getElementsByTagName("p");
    console.log(parrafos);
    for(var i=0;i<parrafos.length;i++){
      texto+=parrafos.item(i).innerText+", ";
    };
    texto=texto.slice(0, -2)+".";//cambia la última coma por punto
    alert(texto);
  }
  ```
  Con el método slice el resultado queda ya bien presentado.

  Para el segundo caso lo que haremos será la siguiente función:

  ```
  function nuevoParrafo(){
		var nuevotexto = document.createElement("p");
		nuevotexto.innerHTML = "Texto del nuevo párrafo";
		document.body.appendChild(nuevotexto);
	}
  ```
  Al estar añadiendo nuevos elementos HTML al documento usaremos innerHTML en vez de innerText.

  Con `document.body.appendChild` añadimos un nuevo nodo a la sección body

  Aquí dejo el [enlace](https://altocodigo.blogspot.com/2019/07/manejar-el-dom-en-javascript.html) que me ha ayudado a desarrollar y comprender el ejercicio
