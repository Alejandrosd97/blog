---
title: 'Input/Output de disco duro'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/algoritmo.svg'
---

##### ASIGNACIÓN CONTIGUA
Entre sus ventajas se encuentran su facilidad de implementación, el poco tiempo necesario para leer un archivo, y su facilidad de acceso. 

Un cabezal de lectura y escritura de disco es la pequeña parte de una unidad de disco que se desplaza por encima del plato del disco y transforma el campo magnético del plato en corriente eléctrica (lee el disco) o, viceversa, transforma la corriente eléctrica en campo magnético (escribe el disco). El cabezal se va desplazando desde el inicio del bloque hasta el final y una vez llegado al final de un bloque empieza a leer el siguiente de manera automática, por eso la lectura es tan rápida y sencilla mediante esta implementación. Permite acceder de manera aleatoria, esto significa que si se necesita solo un bloque, por ejemplo el sexto, se puede acceder a él sin tener que pasar por los cinco promeros, cosa que sí es necesario en la asignación no contigua.

La principal desventaja de este sistema de asignación del espacio es que puede presentar problemas a la hora de expandir el tamaño de los archivos. Por ejemplo, si un archivo F1 ocupa dos bloques y en el bloque siguiente empieza el archivo f2, F1 no podrá ocupar un tercer bloque ya que dicho bloque debería ser contiguo al anterior y este espacio ya está ocupado por F2. Otra desventaja es que sufre de fragmentación externa, además de fragmentación interna en el último bloque, aunque esta última también ocurre en la asignación de memoria no contigua 


##### ASIGNACIÓN NO CONTIGUA0
###### LINKED LIST
Este implementación se lleva a cabo usando el algoritmo de lista enlazada. Cada bloque contiene un puntero que indica la dirección del bloque siguiente, que puede ocupar cualquier espacio del disco. El puntero puede encontrarse al principio o al final del bloque. En caso del último bloque, su puntero contiene el valor NULL, para indicar que es el final. Sus ventajas son la ausencia de fragmentación externa y la posibilidad de los archivos de crecer y ocupar más bloques si lo necesitan, ya que su expansión puede darse en cualquier bloque que se encuantre libre y no solo en el siguiente. Las desventajas son la gran cantidad de tiempo que tarda en leer y escribir un archivo debido a tener que buscar la dirección de cada bloque. Además no se puede acceder a un bloque específico de manera directa (aleatoria), ya que no se conoce su ubicación, solo la del primer bloque y a partir de ahí ir siguiendo las direcciones indicadas en los punteros hasta llegar al bloque deseado. Además, se desperdicia algo de espacio al tener que guardar un puntero en cada bloque 

##### ASIGNACIÓN FAT (FILE ALLOCATION TABLE)
En este caso se prescinde de los punteros y se mantiene una tabla una RAM llamada tabla llamada FAT. Debido a que la RAM es volátil, esta tabla también se mantiene en el disco duro. Esta tabla contiene un registro por cada bloque, y en él se almacena la dirección que se almacenaría en el puntero en caso de utilizar una lista enlazada. En caso de ser el último bloque del archivo, el registro de la tabla FAT contendrá el valor NULL. FAT fue creado para poder llevar a cabo lecturas de bloques de manera aleatoria de manera más veloz que usando listas enlazadas. Cuando se desea acceder a un bloque concreto de un archivo se va pasando de una entrada del primer bloque a la dirección de la siguiente hasta saber en que dirección se encuantra el bloque deseado. El aumento de la velocidad en el proceso se debe a que la tabla FAT se encuentra en la RAM, cuyo acceso es más rápido. En vez de acceder a todos los bloques, se leen las direcciones de las entradas de la tabla presente en la RAM y solo se accede al disco duro para leer el bloque que se ha pedido.

La asignación contigua y no contigua no pueden coexistir en el mismo disco duro, se emplea un método o el otro pero no los dos.


##### ASIGNACIÓN INDEXADA
En este caso, en vez de mantener una tabla para todos los bloques, se mantiene una tabla para cada archivo donde cada entrada de la tabla se corresponde con un bloque por orden, empezando por el primero. Por cada archivo se crea un index block (también llamado index node o Inode en Linux). En este caso, en la entrada del directorio correspondiente a cada archivo ya no se guarda la dirección del primer bloque sino que ahora se guarda la dirección del index block. La tabla FAT se debe mantener siempre dentro de la RAM, independientemente de cuantos archivos estén siendo accedidos por procesos, en el caso de la asignación indexada, solo se mantienen en la RAM aquellos index blocks de los archivos en uso, el resto se mantienen solo en el disco duro, ahorrando así mucho espacio de memoria. En caso de que el tamaño de la tabla de índices sea menor el index block, habrá fragmentación interna, en caso de que la tabla sea más grande, se continuará en un segundo bloque colocando al final del primero un puntero hacia el segundo, como en las listas enlazadas. Otra opción es el indexado multinivel, que funciona de manera similar a la paginación multinivel. Cuando se agota el espacio de un index block simplemente se sigue con la tabla de índices en otro bloque, usando tantos bloques como sea necesario. Se crea un index block adicional, que contiene en sus entradas las direcciones de los index blocks correspondientes, es decir es un índice de índices, que es el que será indicado en el directorio para acceder al archivo.

Los dos sistemas anteriores pueden combinarse en un esquema híbrido, constituido por un supernodo cuyas entradas pueden apuntar a bloques de información (punteros directos), o a index blocks (punteros indirectos). Estos index blocks a su vez, pueden apuntar a bloques de información o también a otros index blocks, en este caso los punteros serían indirectos y los punteros del supernodo dobles punteros indirectos.

##### ALGORITMOS DE ASIGNACIÓN

FCFS: First Come First Serve. Aquelo porceso que pida I/O primero será el que acceda primero al disco duro, es decir el disco duro atienede las peticiones en orden de llegada. Tiene la ventaja de no sufrir de starvation

SSTF: Shortest Seek time First: asigna prioridada a los procesos según la cantidad de movimientos del brazo de lectura desde la posición inicial sin importat la posición. Tiene la ventaja de ser más rápido que FCFS pero la desventaja de starvation.

SCAN: Funciona como un ascensor, primero se desplaza en una dirección satisfaciendo todas las peticiones y luego hacia lo otra dirección atendiendo las peticiones restantes. Se desplaza hasta el final de cada dirección, es decir, llega hasta el primer y último cilindri del disco aunque no haya ninguna petición de ningún bloque en ellos. La desventaja es que otorga prioridad a los cilindros accedidos recientemente mientras que aumenta la espera de los cilindros mas lejanos a los accedidos recientemente

C-SCAN: Circular SCAN. Solo atiende las peticiones hechas en una dirección, cuando llega a la última, vuelve al otro extremo sin atender peticiones en el camino y vuelve a desplazarse hacia el final, esta vez si atendiendo todas las peticiones.  Es más lento que SCAN ya que realiza un mayor número de desplazamientos, pero tiene la ventaja de un tiempo de espera uniforme entre todas las peticiones.

LOOK: Funciona igual que SCAN con la diferencia de que no se desplaza hasta el primer y último cilindro, solo hasta el último cilindro donde se encuentra un bloque que ha sido demandado

C-LOOK: Es una combinación entre C-SCAN y LOOK, es decir, el desplazamiento se lleva a cabo igual que en el algoritmo C-SCAN pero sin llegar al extremo, solo hasta el sector donde se encuentra el bloque de la última petición