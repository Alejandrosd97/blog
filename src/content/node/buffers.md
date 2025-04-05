---
title: 'Buffers'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/algoritmo.svg'
id : 5
---


##### STREAMS Y BUFFERS
Los buffers son un espacio de almacenamiento temporal para un pedazo de información que se transfiere de un lugar a otro. Se llena el buffer con una parte de la información y se transfiere. En vez de esperar a que toda la información se copie en memoria, se va pasando al buffer hasta que éste está lleno, momento en que se transifere su contenido y empieza a llenarse de nuevo con mas bytes de información.

Son una especie de contenedor en memoria. Son similares a los arrays en la manera en que también tienen elementos, empezando por el índice 0. Son subclases de la clase Uint8Array, introducidos en ES6. En el momento en que se crea el buffer, todos los bits tendrán el valor de 0. Cada elemento de un buffer ocupa exactamente 1 byte, y no se puede cambiar en Node. Además, el tamaño total del buffer no se puede modificar una vez asignado. Si, por ejemplo, un buffer consta de 32 bits y se intenta escribir 36, Node automáticamente descartará los cuatro últimos. Son muy útiles para mover información de manera rápida.

Para escribir números como negativos o decimales, el objeto buffer ofrece métodos que empiezan por write, como writeInt(-56, 2). EL primer argumento es el valor a introducir y el segundo la posición dentro del buffer. Se puede convertir el valor del buffer a un string con el método toString() para poder leerlo más fácilmente.

Otra forma de crear el buffer es con el método Buffer.from([]), el array contiene la información a incluir en el buffer. No es necesario especificar el tamaño, ya que se asigna automáticamente. En vez de un array se puede pasar un string e indicar como segundo parámetro el tipo de codificacion, por ejemplo utf8 o hex. La codificación por defecto es utf8, por lo que en este caso puede ser omitido.

La manera más rápida de asignar un valor al buffer es el método allocUnsafe(), se diferencia con los métodos anteriores en que no se preocupa de llenar el espacio con ceros. Si ya había algo escrito, pues esa información se queda tal cual, cosa que podría ser problemática si un hacker pudiera acceder al buffer. La otra manera es el segundo parámetro de la función alloc(), que por defecto es 0. Se puede acceder a la propiedad length del buffer, que devuelve la cantidad de bytes que ocupa.

Los metodos concat() y from() utilizan allocUnsafe() por detrás, pero rellenan el espacio lo antes posible con la información deseada, por lo que sí son seguros a pesar de usar allocUnsafe().

Cuando se inicia Node, se asigna una espacio de de 8kib manera automática, para que esté listo para usar si se necesita, de manera que el proceso es más rápido. Pero este espacio solo se puede usar mediante allocUnsafe(), no con alloc().

La función fs.readFile() abre el archivo y devuelve un buffer con su contenido. 




