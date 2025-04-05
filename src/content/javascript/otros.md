---
title: 'Otros'
id : 2

description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### DEBOUNCE AND THROTTLING
Debounce and throttling son técnicas que se utilizan para controlar la frecuencia con la que se invoca una función, particularmente en escenarios donde eventos frecuentes (como interacciones del usuario) pueden generar llamadas excesivas y potencialmente afectar el rendimiento.

Thottling limita la cantidad de veces que se ejecuta una función durante un período de tiempo determinado. Garantiza que la función se llame a un ritmo controlado y constante, independientemente de la frecuencia con la que se produzca el evento que activa la función. Se suele usar en eventos de scroll o redimensionado. Se suele implementar mediante una variable de valor booleano, la función contiene un bloque if que comprueba si el valor es true, y solo en en ese caso se ejecuta el código, cambiando valor de la variable a false para que el código no se ejecute más veces independientemente de que la función su vuelva a llamar. Dentro de la función se coloca un setTimeOut, que restablece el valor a true después de un tiempo, permitiendo ahora sí que la función se oueda volver a ejecutar.

Debouncing es una técnica que retrasa la ejecución de una función hasta que haya pasado un cierto tiempo desde que ocurrió el último evento. Retrasa la ejecución de una función hasta que el usuario deja de realizar una determinada acción durante un período de tiempo específico. Es útil cuando se desea que se llame a la función después de un período de inactividad y evitar llamadas consecutivas rápidas. Un caso de uso sería desplegar sugerencias de búsqueda basadas en los resultados que devuelve una API, de manera que la función tarde un poco para que al usuario le de tiempo de terminar de escribir y no se realice una nueva petición a la API cada vez que se pulsa una tecla. La implementación es parecida, cada vez que se ejecuta la función se inicia un timer, pero antes de ello se elimina el timer anterior, de manera que si la función se ejecuta de nuevo antes de que transcurra el tiempo del timer, este se resetea y el código nunca llega a ejectarse a no ser que se le de tiempo al tiemer de consumir el tiempo.

##### DATE & TIME
Existen varias maneras de crear un objeto que represente el tiempo. El primero es crear un objeto de la clase Date(), este objeto devuelve la fecha y hora actuales junto con la zona horaria. La segunda forma es crear una fecha también con Date(), pero pasándole como argumentos el año, mes, día y hora. No es necesario pasarlos todos, pero si solo se pasa uno, javascript lo toma como milisegundos y retornará la fecha de 1 de junio de 1970 más los milisegundos indicados. Existen algunos métodos que pueden ser aplicados al objeto Date(), los más importantes son getFullYear(), getMonth(), que devuelve un número entre 0 y 11 simbolizando los meses, getDate(), que devuelve el día del mes, getDay(), que devuelve el día de la semana. Para establecer fechas están los métodos setFullYear(), setMonth(), setDate(). El método parse() toma una fecha en formato string y devuelve milisegundos.


##### MAP 
Las estructuras de datos Map() son similares a los objetos con la diferencia de que las claves pueden tener otros tipos de datos como números o booleanos. El objeto Map contiene pares clave-valor y recuerda el orden de inserción original de las claves. Para añadir información a un map, se usa el método set(clave, valor), que devuelve el map en sí, por lo que se puede encadenar. Una ventaja de esta estructura respecto a los objetos literales es que es iterable. Para iterar sobre el map existen tres métodos, keys(), que itera sobre las claves, values(), que itera sobre los valores y entries(), que itera sobre ambos.

Cuando se aplica el método entries() sobre un objeto literal devuelve una array con subarrays con dos elementos cada uno, la clave y el valor que puede ser pasado al constructor Map() para convertirlo en un map.

Para el proceso inverso se utiliza el método fromEntries(), que recibe el map como argumento. Al ser iterable, también está disponible el método forEach(). Los elementos se eliminan del map con el método delete(clave) y clear(), que borra el map entero.

Una ventaja importante de los maps es que las claves están ordenadas, cosa que no pasa con los obbjetos. Además permite saber el número de propiedades existentes en su interior, cosa que los objetos tampoco permiten.

##### SET
Los objetos Set() son colecciones de valores únicos, es decir, no puede haber valores duplicados. Si se intenta añadir un valor duplicado, simplemente se ignora y no se inserta. También es posible iterar a través de los elementos de un set en orden de inserción con el métodp forEach() o un bucle for. El orden de inserción corresponde al orden en el que cada elemento fue insertado  en el conjunto mediante el método add(), es decir, no había ningún elemento idéntico en el conjunto cuando se llamó a add(). Otra forma de insertar valores es pasarle una array al constructor Set([]), si algún elemento del array está duplicado, solo se añadirá una vez. Al igual que Map tiene los métodos delete() y clear(), con el mismo funcionamiento.


##### ADMINISTRACIÓN DE MEMORIA Y GARBAGE COLLECTION
Algunos lenguajes liberan la memoria una vez que ya no se necesita de manera automática mientras que otros requieren que se haga de manera manual. Este proceso de liberación de memoria se llama garbage collection. En javascript, como en la mayoría de lenguajes de alto nivel, se hace de manera automática mediante un garbage collector. La memoria se libera cuando una variable o un objeto no es referenciado en ninguna parte del programa, por lo que se interpreta que ya no es necesario. El algoritmo mark-and-sweep busca las referencias a los elementos y marca aquellos que son alcanzables, luego elimina aquellos que no están marcados.

##### DOM
El modelo de objeto de documento es una interfaz de programación para los documentos HTML y XML. El DOM da una representación del documento como un grupo de nodos y objetos estructurados que tienen propiedades y métodos. Esencialmente, conecta las páginas web a scripts. Una página web es un documento que puede mostrarse en la ventana de un navegador o también como código fuente HTML. Pero, en los dos casos, es el mismo documento. El modelo de objeto de documento (DOM) proporciona otras formas de presentar, guardar y manipular este mismo documento.

El nodo más alto es el objeto global window, pero el DOM no comienza ahí, sino en en el Documento, que está por debajo. El objeto window da acceso a propiedades fuera del DOM como la pestañas o la barra de búsqueda. Al ser un objeto global, no es necesario escribir Window.metodo(), se puede acceder a sus propiedades directamente, como por ejemplo setInterval(), que en realidad sería Window.setInterval(). Algunas propiedades del objeto window son innerHeight, innerWidth, location. Además del DOM, window contiene el BOM (Browser Object Model), que ofrece varios objetos relacionados con la ventana y que pueden ser usados para acceder a la localización, historial, pantalla, etc.


##### EVENTOS
Cuando se produce un evento, este se propaga desde el emisor (event.target) por todo el DOM de manera ascendente. Esto se conoce como event bubbling. Esta propagación ascendente se puede detener mediante el método event.stopPropagation(). El proceso contrario, es decir, propagar un evento de manera descendente se llama capturing, y se lleva a cabo mediante event listeners. En el método addEventListener(), además del tipo de evento y el callback, se puede pasar un tercer parámetro booleano para indicar que se ejecute de manera descendente en caso de ser true. Por defecto es false. Por eso cuando un elemento padre y un elemento hijo disparan ambos un evento, se ejecuta primero el del hijo y luego el del padre, por el efecto bubbling. El bubbling es muy útil cuando existe un gran número de elementos hijos, ya que en vez de tener que manejar el evento para cada uno de ellos, se hace en el elemento padre, que accede a él mediante event.target, al ser propagado de manera ascendente.

##### MÓDULOS

Para convertir un objeto en formato json string se utiliza el método JSON.stringify(). Para llevar a cabo el proceso contrario se usa el método JSON.parse()

Un problema de dependencia circular se da cuando dos módulos se importan el uno al otro


##### VALOR vs RFERENCIA
Para comparar si dos objetos diferentes tienen las mismas propiedades se puede usar la función JSON.stringify() sobre los objetos y comparar los strings.


##### Element.getBoundingClientRect()
Devuelve un objeto DOMRect que proporciona información sobre el tamaño de un elemento y su posición relativa a la ventana gráfica. El valor devuelto es un objeto DOMRect que es el rectángulo más pequeño que contiene el elemento completo, incluido su padding y ancho de borde. Las propiedades izquierda, superior, derecha, inferior, x, y, ancho y alto describen la posición y el tamaño del rectángulo general en píxeles. Las propiedades distintas del ancho y el alto son relativas a la parte superior izquierda de la ventana gráfica.
