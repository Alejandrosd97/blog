---
title: 'Funciones en C'
id: 1
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---



Las funciones son unidades de programas que pueden ser invocadas para llevar a cabo una tarea determinada. Escribir un programa entero solo usando la función main() puede ser muy complejo, y el uso de funciones hace el código más fácil de depurar y mantener. Se dividen las tareas principales en subtareas más pequeñas llevadas a cabo mediante diferentes funciones. Además reducen la duplicación de código debido a la posibilidad de invocarlas tantas veces como sea necesario.

La primera línea de la función se conoce como encabezado y contiene el tipo de dato que devuelve, el nombre de la función, así como los parámetros que recibe entre paréntesis. Para indicar que la función no recibe ningún parámetro se usa la palabra clave void y para indicar que no devuelve nada también. Un prototipo de función define una función de manera que el compilador conoce todos los detalles, el nombre, el tipo de parámetros y el tipo de dato que devuelve. Un prototipo se define igual pero sin los corchetes y con punto y coma al final. Permite invocar una función antes de ser declarada, de manera que puede ser llamada por la función main() a pesar de que la función se encuentra en otra parte del código.

Las funciones se invocan escribiendo el nombre de la función seguido de paréntesis con los argumentos necesarios. Cuando la función es invocada, los argumentos son la información que se envía a los parámetros de la función, de manera que el valor de la variable se pasa a la función. La diferencia entre parámetros y argumentos, es que los primeros se utilizan en la declaración y definición de la función y los segundos se usan solo durante la invocación. Se debe especificar el tipo de data para cada parámetro. En caso de no tener parámetros es recomendable escribir la palabra void entre parámetros. Los parámetros actúan como variables locales dentro de la función que asumen los valores recibidos mediante los argumentos. Es una buena idea incluir comentarios explicativos sobre cada función y los argumentos que acepta. 

Si el tipo que devuelve la función es diferente al especificado en el encabezado, por ejemplo int y float, el compilador insertará una conversión de un tipo al otro de manera automática. Si esta conversión no es posible, entonces se producirá un error. Se puede asignar el resultado a una variable colocándo la invocación a la derecha del operador de asignación =.

Las variables locales son aquellas definidas dentro del cuerpo de la función y solo pueden ser accedidas allí. Las variables solo son accesibles desde el bloque donde son definidas, sea una función, un bucle o una sentencia if. Las variables globales, por contra, pueden ser accedidas desde cualquier parte del código. Por norma general, se debe evitar el uso de variables globales, ya que éstas complican la depuración de código y la corrección de errores, además existe la posibilidad de crear dependencias entre funciones que usen la misma variable.