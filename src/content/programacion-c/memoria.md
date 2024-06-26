---
title: 'Funciones en C'
id: 4
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---

En el momento en que se define una variable, el compilador automáticamente aloja la cantidad necesaria de espacio en la memoria según el tipo de dato, por ejemplo 4 bytes para los íntegros (a veces dos dependiendo del sistema) o 1 byte para los caracteres. No obstante, en ocasiones es conveniente poder alojar la memoria de manera dinámica cuando el programa está en ejecución. Un buen ejemplo sería establecer la longitud de un array de manera dinámica. El alojamiento dinámico de memoria solo es posible gracias a la existencia de los punteros, que pueden ser creados en tiempo de ejecución con el tamaño adecuado para evitar desperdiciar espacio de memoria. La información se guarda en el heap. 


###### MALLOC
Es la forma más sencilla y rápida de asignar memoria de manera dinámica. Recibe como argumento el tamaño del espacio de memoria que se desea asignar en bytes y devuelve la dirección del primer byte de la memoria asignada. Debido a que devuleve una dirección, al guardarla en una variable, ésta solo podrá ser de tipo puntero. Si el argumento del espacio se da en int, puede no funcionar en todos los sistemas, puesto que asume el espacio que ocupa un íntegro son 4 bytes y esto no siempre es así. Lo que se hace es usar el operador sizeof de la siguiente manera suponiendo que se dessen asignar 100 bytes: malloc(25 * sizeof(int)). Si no se puede asignar la memoria por el motivo que sea, la función malloc() devuelve null. Debido a esto es recomendable comprobar inmediatamente si la memoria se ha asignado o no mediante una sentencia if. En caso de que no haya funcionado, la mejor opción es simplemente terminar el programa.

###### FREE
Al ser el programador el que asigna la memoria de manera manual, también le corresponde a él liberar el espacio de la memoria. Cuando se asigna un espacio de memoria de manera dinámica y no es posible liberarla porque no se retiene la referencia ocurre lo que se conoce como "memory leak". Suele ocurrir cuando se asigna memoria dentro de un bucle y el bucle termina sin liberar la memoria. La liberación de la memoria se lleva a cabo usando la función free(), que recibe como parámetro el puntero con la dirección correspondiente.

###### CALLOC
La función calloc() realiza se comporta de manera similar a malloc() pero con la ventaja de inicializar la memoria asignada de manera que todos los bytes son cero. Está declarada en el header <stdlib.h> y requiere dos argumentos, el número de items para los cuales el espacio es requerido y el tamaño de cada ítem. Al igual que malloc(), devuelve NULL si no fue posible asignar la memoria.

###### REALLOC
Sirve para reutilizar o extender memoria previamente asignada usando malloc() o calloc(). Requiere dos argumentos, primero el puntero con la dirección y luego el tamaño en bytes de la memoria que se desea asignar. Devuelve un puntero void, o NULL si no se ha completado el proceso correctamente. Lo más importante es que preserva los contenidos guardados previamente en la memoria.

##### HEAP VS STACK
Existen tres tipos de memoria que se pueden usar en el programa, que definen como y donde se guarda la información. El stack es una zona especial de la memoria que almacena variables temporales. Se usa para guardar variables creadas dentro de funciones y es una estructura de datos LIFO, “Last In First Out” manejada por el CPU. No es necesario administrarlo manualmente ya que la memoria es asignada y liberada de manera automática. Cada vez que una variable se crea dentro de una función, esta se empuja a la parte superior stack, y cada vez que una función termina, las variables se eliminan quedando libre el espacio. Hay un límite para el tamaño de las variables que pueden ser guardadas en el stack, si un programa intenta colocar demasiada información en el stack ocurrirá lo que se conoce como “stack overflow”. Esto ocurre cuando toda la memoria del stack ha sido asignada y las direcciones de memoria empiezan a desbordar hacia otras regiones de la memoria. La causa más común de desbordamiento del stack es la recursión. El stack se divide en frames,y cada vez que una función es invocada, ésta se aloja en un frame libre del stack. Las variables dentro del stack solo existen mientras que la función que las ha creado se está ejecutando y tienen un alcance local.

Heap es lo opuesto al stack. Es una estructura de datos jerárquica. Es un espacio de memoria que puede ser asignada dinámicamente, es decir, es administrada por el programador. Se accede mediante punteros y se maneja con las funciones malloc() y free(). Si no se libera correctamente se pueden producir memory leaks, es decir, memoria que no puede ser accedida por otros procesos porque se considera en uso, aunque en realidad ya no lo está. El heap se utiliza para alojar estructuras de datos grandes, como arrays o structs grande, también para variables globales. El stack es más sencillo y rápido de usar, y se emplea princpialmente para varables locales dentro de funciones.