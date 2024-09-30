---
title: 'Asignación de la memoria'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/algoritmo.svg'
---

##### MEMORY ALLOCATION
El tamaño de word depende de la implementación. Cada palabra dentro de la memoria se corresponde con una dirección empezando por cero. La CPU y la RAM se comunican mediante un bus, que no es más una serie de cables usados para conectar los diferentes componentes del ordenador. El bus que comunica los registros y la RAM se compone de tres cables, uno para enviar la dirección, conocido como address bus

Sec conoce como address space a una colección de direcciones. El conjunto de direcciones de la RAM se conoce como physical address space. Dentro de la RAM se encuentran los procesos derivados de los programas que están en ejecución, y estos procesos también tienen direcciones, en este caso conocidas como direcciones lógicas. La colección de estas direcciones lógicas se conoce como logical address space. El termino allocation hace referencia al proceso de colocar los procesos dentro de la memoria. Existen dos tipos de allocation. 

El primer tipo es contiguous allocation, en este tipo, todas las direcciones lógicas de un proceso se corresponden con direcciones físicas contiguas en la memoria. El otro tipo es non-contiguous allocation, es este caso las direcciones lógias del proceso no se colocan en direcciones físicas contiguas dentro de la memoria. El tipo contiguo tiene a su vez dos subtipos. La RAM se divide en particiones dentro de cada cuál se colocará un proceso. En el primer tipo, que se llama de partición fija, estas particiones están establecidas de manera fija con un tamaño determinado y solo pueden contener un proceso. Este tipo se usaba antiguamente pero se encuentra en desuso en la actualidad debido a sus desventajas. La primera de ellas, es que presenta un problema de fragmentación interna, este problema ocurre cuando el proceso que se coloca dentro de la partición ocupa menos espacio del disponible dentro de la partición. El espacio restante no puede ser ocupado por otro proceso por lo que se desperdicia mucho espacio. El nivel de multiprogramming es igual al número de particiones. Un proceso no puede abarcar más de una partición, por lo que es tamaño máximo de un proceso está limitado por el tamaño de la partición más grande. Las particiones pueden ser del mismo tamaño o de tamaño variable, pero siempre fijas

En el tipo de partición variable, no se lleva a cabo ninguna prtición anter de colocar ningún proceso. Según se van colocando los procesos en la RAM se van creando las particiones con tamaño equivalente al del proceso. Debido a esto, evita los problemas presentes en el particionado fijo. No obstante sí tiene una desventaja, llamada fragmentación externa. Suponiendo que dos procesos en localizaciones no contiguas terminen y dejen su espacio libre, debido a que se está usando contiguous alocation, un proceso que ocupa un espacio equivalente a la suma del espacio dejado por los dos procesos que acaban de terminar no podrá ser alojado en ese espacio, es decir, no se puede partir el proceso y alojar cada parte en una de las dos particiones que han quedado libres. Este espacio quedará desperdiciado.


##### ALGORITMOS DE ASIGNACIÓN DE MEMORIA
A la hora de introducir un proceso en la RAM, lo primero es buscar un hueco en el quepueda caber un proceso. En caso de existir dicho hueco existen varias posibilidades para decidir en que lugar de la memoria alojar el proceso. En caso de usar el algoritmo first-fit, se aloja el proceso en el primer hueco disponible recorriendo la memoria desde el principio hasta el final. En el caso de best-fit, es necesario atravesar el address space entero de manera que el proceso es alojado en el hueco más pequeño capaz de acomodar el proceso. Best-fit optimiza la asignación del espacio, pero como contrapartida hace más lenta la asignación de memoria al necesitar recorrer toda la memoria, en comparación con first-fit y next-fit, donde existe la posibilidad de encontrar un hueco al inicio. El último algoritmo es worst-fit y funciona al revés que best-fit, es decir, recorre toda la memoria y elige el hueco más grande. El propósito de esto radica en que si un hueco ya de por sí es pequeño, al colocar el proceso en él, es espacio restante será aún más pequeño, por lo que es muy poco probable que ningún proceso futuro quepa ahí y quede sin usar. Con worst-fit, esto no ocurre. Los algoritmos se consideran como mejores o peores dependiendo de la cantidad de procesos que son capaces de son capaces de alojar en la memoria

##### PAGINACIÓN
Para solventar el problema de la fragmentación externa existen dos opciones. La primera es la compactación, que mueve la data de manera que desaparezcan los huecos en medio de las particiones ocupadas por procesos. Esto elimina por completo el problema de la fragmentación externa pero tiene su propia desventaja. Mover la información significa copiarla y pegarla en otra localización. Esto se realiza mediante código que debe ejecutar el procesador, de manera que en lugar de ejecutar el código de los procesos existentes en la RAM el CPU está ejecutando otro código para ir eliminando los huecos que se van ocasionando.

Para poder eliminar la fragmentación externa completamente sin la desventaja de la compactación se usa la paginación

A pesar de la desventaja de la fragmentación externa, el alojamiento contiguo tiene una ventaja importante.

Dentro del procesador existe un registro llamado base register, cuya función es almacenar la dirección base del proceso que quiere ejecutar, que es la dirección física donde empieza el proceso. El CPU siempre genera direcciones lógicas, independientemente de que dirección lógica sea la dirección base, para la primera instrucción del proceso el procesador generará la dirección 0, la cual se suma a la dirección base y será esta la que se buscará en la RAM. Suponiendo que la dirección base sea 50, se sumará la dirección lógica, 0 y se buscará la dirección 50 + 0 (50) en la RAM. Para la siguiente instrucción se genera la dirección lógica 1 y se suma a la base, por lo que sebuscará la dirección 51 en la RAM, y así sucesivamente. La razón por la que el CPU solo puede generar direcciones lógicas de debe a que no sabe dónde está cargado el proceso en la RAM. Por ello, todas las direcciones base de los procesos son almacenadas en una parte especial de la RAM, de manera que el procesador busca la dirección base del proceso a ejecutar y lo carga en el base register. Esta parte especial de la RAM está localizada en una parte fija de la memoria, para que el procesador sepa donde encontrarla. Esto es posible siempre que se use el alojamiento contiguo, ya que el procesador va incrementando las direcciones de uno en uno. Esta es la principal desventaja del alojamiento no contiguo, que el procesador no puede ejecutar procesos mediante adición simple. Es aquí donde entra en juego la paginación

La RAM se divide en bloques iguales llamados frames, y los procesos en bloques iguales llamados páginas, que siempre van a tener un tamaño igual al de los frames. Las páginas se alojan en diferentes frames de manera no contigua. Cada proceso tiene una tabla llamada tabla de páginas, donde cada fila indica en qué frame se encuentra presente cada página. Todo lo que se almacene en la RAM se divide en páginas, incluso la propia tabla, que también está almacenada en la memoria. Las tablas de páginas están almacenadas en una localización fija para que el CPU pueda encontrarlas

Se considera a un sistema como byte adressable system cuando cada dirección es asignada una dirección

Debido a que el tamaño del proceso debe ser un múltiplo del tamaño del frame, es posible tener fragmentación interna en la última página, por ejemplo si el tamaño de los frames son 4 bytes y el  del proceso son 15 bytes, se necesitan cuatro páginas, quedando la última con un byte libre. También es posible que se de fragmentación interna en el frame donde se guarde la página correspondiente a la tabla de páginas, si ésta no es muy extensa. Existe un registro llamado registro base de la dirección de la tabla que almacena la dirección base de la tabla de páginas para el proceso que se va a ejecutar.

Las direcciones lógicas generadas por el CPU se pueden dividir en dos partes, la primera hace referencia al número de página, mientras que el segundo al número de byte dentro de la página, conocido como offset de la página