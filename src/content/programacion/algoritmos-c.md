---
title: 'Algoritmos en C'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---


##### STACK
Es un tipo de estructura de datos lineal en la cual los elementos solo pueden ser añadidos o eliminados en la parte superior, es decir sigue un orden LIFO, Last In First Out. Esto significa que los elementos se eliminan en orden inverso al orden en el que se añaden, los últimos se eliminan los primeros. El proceso de inserción se conoce como push y la eliminación como pop. Se dice que el stack se encuentra en estado de overflow cuando está lleno, por lo no admite push de más elementos, y underflow cunado el stack está vacío, por lo que es la operación pop la que no está permitida. Un ejemplo de stack sería la operación deshacer de los editores de texto, que eliminan del stack los últimos cambios aplicados al texto, o el botón de atrás del navrgador.

Se puede crear un stack mediante el uso de un array unidomensional. Para ello se crea una variable llamada top, la cual guarda el índice del último elemento del array, para poder hacer operaciones push y pop sobre el array. Al crear el array se suele inicializar la variable con el valor -1, ya que no hay ningún elemento en el array y se va incrementando de uno en uno conforme se va haciendo push de elementos. Para que no ocurra un error de stack overflow, antes de realizar el push de un elemento, se debe comprobar que el valor de top es menor que el tamaño del array – 1. Es decir que si el array tiene capacidad para 10 elementos, el valor de top debe ser menor a 9. Para hacer pop, los pasos siguen el orden inverso, primero se comprueba que el valor de top sea igual o mayor que 0, es decir que el stakc no se encuentra en estado de underflow. En caso afirmativo, se elimina el elemento en el índice correspondiente al valor de top del stack y se decrementa en 1 el valor de top 

##### COLA
Una cola es una estructura de datoslineal que sigue el orden FIFO (First In First Out). El elemento añadido primero es elminado primero. Al contrario que el stack, la cola tiene dos terminaciones, la delantera, de donde se eliminan los elementos y la trasera, que es donde los elementos se insertan. No obstante, existen otros tipos de cola como la cola con prioridad. Este tipo de cola sería mejor implemntada una estructura de datos heap.

Para implementar una cola usando un array unidimensional, se declaran dos variables, una para el front, correspondiente a la terminación delantes y que indica el el índice del siguiente elemento que debe ser eliminado, y otra para el rear, la cual indicará en que índice se añade el nuevo elemento. Tanto front como rear se inicializan como 0, lo cual indica que la cola está vacía, lo que al igual que en el stack se conoce como underflow. Por el contrario, overflow ocurrirá cuando el valor de rear sea igual al tamaño del array, es decir, supere el último índice. La adición de un elemento se conoce como enqueue y la eliminación como dequeue. Según se van eliminado elemntos de la cola, va quedando espacio libre al usar al inicio, para mientra que el espacio al final se va anotando. Debido a esto puede ocurrir un error de overflow habiendo mucho espacio vacío en la cola o incluso un error de underflow si las dos variables front y rear se encuentran en el último índice de la cola, a pesar de estar completamente vacía. Para que esto no ocurra la implementación de la cola debe ser circular.

En la cola circular las variables front y rear se inicializan con el valor -1, es decir, el último elemento del array. Para la operación equeue se suma uno al valor de rear y se divide entre la longitud del array. El resto será el índice en el que se insertará el elemento. Por ejemplo, en un array de 10 elementos, el primero será:  ( 9+1) % 10, en este caso el resto es 0 y el elemento se añade en el índice 0, el segundo (0 + 1) % 10 y se insertará en el valor del módulo, que es 1. En este caso, la condición para que se de overflow es que el índice del rear + 1  sea igual al del front, es decir, que el siguiente elemento esté en el índice del front.

Para números positivos, siempre que el divisor es mayor que el dividendo, el resto es igual al dividendo.

Una cola de dOble terminación es aquella que permite inserción y eliminación en sus dos extremos. No se puede insertar elementos en el front si éste se encuentra en índice 0