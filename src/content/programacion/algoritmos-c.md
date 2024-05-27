---
title: 'Algoritmos en C'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---


##### STACK
Es un tipo de estructura de datos lineal en la cual los elementos solo pueden ser añadidos o eliminados en la parte superior, es decir sigue un orden LIFO, Last In First Out. Esto significa que los elementos se eliminan en orden inverso al orden en el que se añaden, los últimos se eliminan los primeros. El proceso de inserción se conoce como push y la eliminación como pop. Se dice que el stack se encuentra en estado de overflow cuando está lleno, por lo no admite push de más elementos, y underflow cunado el stack está vacío, por lo que es la operación pop la que no está permitida. Un ejemplo de stack sería la operación deshacer de los editores de texto, que eliminan del stack los últimos cambios aplicados al texto, o el botón de atrás del navrgador.

Se puede crear un stack mediante el uso de un array unidomensional. Para ello se crea una variable llamada top, la cual guarda el índice del último elemento del array, para poder hacer operaciones push y pop sobre el array. Al crear el array se suele inicializar la variable con el valor -1, ya que no hay ningún elemento en el array y se va incrementando de uno en uno conforme se va haciendo push de elementos. Para que no ocurra un error de stack overflow, antes de realizar el push de un elemento, se debe comprobar que el valor de top es menor que el tamaño del array – 1. Es decir que si el array tiene capacidad para 10 elementos, el valor de top debe ser menor a 9. Para hacer pop, los pasos siguen el orden inverso, primero se comprueba que el valor de top sea igual o mayor que 0, es decir que el stakc no se encuentra en estado de underflow. En caso afirmativo, se elimina el elemento en el índice correspondiente al valor de top del stack y se decrementa en 1 el valor de top 