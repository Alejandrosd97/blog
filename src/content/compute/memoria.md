---
title: 'Memoria'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/ram.svg'
---

Se puede clasificar la memoria según varias características. La primera es la localización de la memoria, dentro del chip del procesador suele haber registros y uno o varios niveles de memoria caché. La memoria interna corresponde a la memoria RAM y adicionalmente uno o varios niveles de memoria caché. La memoria externa corresponde a dispositivos de almacenamiento secundarios como discos duros,
unidades ópticas como el CD-ROM, etc.

Otra forma de clasificar la memoria es el método para acceder a sus ubicaciones. Existen diferentes métodos de acceso propios de cada tipo de memoria:

- Secuencial: Se accede a la información desde la última ubicación accedida, leyendo todas las direcciones de memoria en orden hasta alcanzar la deseada. El tiempo de acceso depende de la dirección a la que se desea acceder y de la ubicación a la que se haya accedido por última vez.

- Directo: La memoria está organizada en bloques y cada bloque de memoria tiene una dirección única. Se accede directamente al comienzo de un bloque, y dentro del bloque se realiza un acceso secuencial para llegar a la memoria deseada. El tiempo de acceso depende de la ubicación a la que se desea acceder y de la última ubicación accedida. Es el método usado en utilizado en discos magnéticos.

- Aleatorio: La memoria está organizada como un vector, en el que cada elemento individual
tiene una dirección única. Se accede a una determinada ubicación proporcionando la dirección. El tiempo de acceso es independiente de la ubicación a la que se accede y es independiente de la última ubicación accedida. El mayor ejemplo de este tipo de acceso es la memoria RAM. Existe un subtipo llamado de acceso asociativo, cuyo acceso se basa en el contenido en vez de la dirección. Es muy común en memoria caché.


Cuando se trabaja con la memoria, exiten dos operaciones. La primera es la lectura, para ello se debe indicar a la memoria la dirección donde se encuentra la información que se desea leer. La otra es la escritura, en esta operación, se debe proveer la información a almacenar y la dirección de memoria donde se va a almacenar. La acción consiste en registrar la información en la dirección especificada. 

Una palabra de memoria es la unidad organizativa de la memoria desde el punto de vista del procesador y es especificado en bytes o bits. Este es el número máximo de bytes que se pueden leer o escribir en un ciclo único de acceso a memoria. El tamaño de una palabra se refleja en muchos aspectos de la estructura y el funcionamiento, por ejemplo, la mayoría de los registros de un procesador suelen tener el tamaño de una palabra.

La memoria interna puede entenderse como un vector de elementos, una colección de datos contiguos, en la que cada dato es accesible indicando su posición dentro del vector.
La unidad de direccionamiento (access unit) especifica el tamaño de cada elemento de este vector; la memoria suele accederse a la memoria como un vector de bytes, es decir, cada byte tendrá su propia dirección, aunque puede haber sistemas que accedan a la memoria como un vector de palabras, en el que cada dirección corresponde a una palabra. El número de bits utilizados para especificar una dirección de memoria establece el límite máximo de elementos direccionables, el tamaño del mapa de memoria; si tenemos n bits para n direcciones de memoria, el número máximo de elementos direccionables será 2^n. Por ejemplo, si se utilizan 4 bits para las direcciones, la cantidad de direcciones que se pueden expresar son 2⁴ = 16 direcciones, desde 0000, hasta 1111.

En el acceso a memoria, se puede acceder a un byte o a varios bytes con un máximo determinado por el número de bytes de una palabra, es decir, en un mismo acceso se leen o escriben uno o varios bytes. Cuando se especifica la dirección de memoria a la que se va a acceder, desde esta dirección se accede a tantos bytes como indique la operación de lectura o escritura.
En la memoria externa se suele acceder a un bloque de datos mucho mayor que una palabra.
En los discos duros es habitual transferir bloques de Kbytes de tamaño.

En los procesadores x86 de 32 y 64 bits, la unidad de direccionamiento es un byte, pero el tamaño de palabra de memoria corresponde 4 bytes (32 bits).

Los procesadores x86-64 son procesadores con registros de 64 bits, pero el tamaño de la palabra de memoria sigue siendo de 32 bits para mantener la compatibilidad con los procesadores anteriores. Esto se debe a que la arquitectura x86-64 es una extensión de la arquitectura x86-32 de 32 bits.
El tamaño de la palabra de memoria de los procesadores x86 de 32 y 64 bits es de 32 bits (4 bytes) y se puede acceder a 1, 2 o 4 bytes en un ciclo de memoria.

Aunque la unidad de direccionamiento de memoria suele ser el byte, es habitual que
los accesos a memoria se realicen en múltiplos de byte, hasta el tamaño de la palabra. En este caso, sólo se indica la dirección del primer byte de la
y se utilizan dos métodos para acceder a la palabra:

Big-endian : la dirección indicada corresponde al byte más significativo de la palabra.

Little-endian : la dirección especificada corresponde al byte menos significativo
de la palabra.

El término inglés endianness designa el formato en el que se almacenan los datos de más de un byte en un ordenador. El sistema big endian, consiste en representar los bytes en el orden natural, en el que el byte más significativo de un valor de datos multibyte se almacena en la dirección de memoria más baja. Little-endian se define como un orden de bytes en el que el byte menos significativo de un valor de datos multibyte se almacena en la dirección de memoria más baja. El orden de los bits no fluctúa dentro de un byte permanece constante independientemente de la endianess. Lo que cambia es el orden de los bytes. Esto también significa que si sólo se transmite un bit, la endianess es irrelevante, ya que sólo existe una forma de ordenar un bit específico.

En la memoria RAM, el tiempo de acceso o latencia es el tiempo que transcurre desde que una dirección es visible para los circuitos de memoria hasta que se leen o escriben los datos.
En las memorias de acceso aleatorio, el tiempo de un un ciclo de memoria es el tiempo de acceso
más el tiempo necesario antes de poder comenzar un segundo acceso a la memoria.
Por último, la tasa de transferencia es la velocidad a la que se puede leer o
escribir y se mide en bytes por segundo.




El objetivo en el diseño del sistema de memoria de un ordenador es tener una gran capacidad y un tiempo de acceso reducido al menor precio posible. La memoria se estructura en varios niveles con el objetivo de conseguir un mejor rendimiento, y forma lo que se conoce como jerarquía de memorias. Esto se hace para poder lograr un balance entre rendimiento y coste. En una jerarquía de memorias se utilizan varios tipos de memoria con diferentes tipos de capacidad, velocidad y coste, que se dividen en memoria del procesador, memoria interna y memoria externa. Cada nivel de la jerarquía se caracteriza también por su distancia al procesador. Los niveles más cercanos al procesador son los primeros que se utilizan, al ser los niveles con mayor velocidad de acceso.


registros -> cache -> memoria principal (RAM) -> memoria secundaria (disco duro)

Generalmente, cada nivel de la jerarquía se relaciona únicamente con los niveles superior e inferior. El procesador sólo tiene acceso a los registros y obtiene los datos de memoria a través de la memoria caché.
Por lo tanto, cuando el procesador necesite datos y no estén disponibles en el caché, tendrá que llevarlos a la caché desde el nivel en el que estén disponibles.
Además, en caso de que los datsos sean modificados por el procesador en un nivel de la jerarquía, la modificación debe ser replicada en el resto de niveles en los que se almacenan esos datos, ya que de no hacerlo, puede haber problemas de incoherencia entre los datos en futuras lecturas. Como los niveles de memoria más cercanos al procesador son pequeños, se podría pensar que se pierde mucho tiempo moviendo datos de un nivel a otro, ya que este movimiento tiene que ser constante. En realidad, eso no es cierto: los datos se reutilizan muy a menudo, por lo que es útil que estén en el nivel más cercano al procesador. CAMBIAR PALABRAS PAR QUE SEA DIFERENTE


###### REGISTROS
Es el espacio de memoria que se encuentra dentro del procesador, integrado dentro del mismo chip. Se utilizan celdas de memoria de tipo estático, SRAM, para implementarlo.
Es el espacio de memoria al que el procesador puede acceder más rápidamente. Los registros
son se pueden acceder mediante el lenguaje ensamblador para tratar de minimizar el número de accesos a la memoria interna, mejorando así el rendimiento.

##### MEMORIA INTERNA
Se compone de dos nivles, la memoria caché y la RAM


###### CACHE
Las cachés son memorias de pequeña capacidad, pero más rápidas que la memoria principal, que
utilizan un método de acceso asociativo. Se encuentran dentro o cerca del procesador y están diseñadas para reducir el tiempo de acceso a la memoria. Los datos almacenados en
la memoria caché se utilizan con más frecuencia, por lo que es posible
reducir el número de accesos que el procesador debe realizar a la memoria

No es accesible por el programador, está gestionada por el hardware y el
sistema operativo y se implementa utilizando tecnología SRAM.
Los procesadores modernos utilizan distintos niveles de memoria caché. En la actualidad es habitual disponer de hasta tres niveles de caché, denominados L1, L2 y L3. Cada vez es más frecuente
que algunos de estos niveles se implementen dentro del chip del procesador y que
nivel más cercano al procesador esté dividido en dos partes: una dedicada a las
instrucciones y la otra dedicada a los datos. Los procesadores actuales tienen un diseño multinúcleo. Cada procesador integra en un solo chip varios núcleos plenamente funcionales. Cada núcleo tiene una caché de primer nivel (L1) y una de segundo nivel (L2), y la caché de tercer nivel (L3) es compartida por todos los núcleos del procesador. En estos procesadores toda la memoria caché está integrada en el chip del microprocesador.

##### MEMORIA PRINCIPAL
Los programas y sus datos se almacenan en la memoria principal, que es la memoria
visible para el programador a través de su espacio de direcciones.
La memoria principal se implementa utilizando diferentes chips conectados a la
placa base del ordenador y tiene una capacidad mucho mayor que la memoria caché
Utiliza la tecnología DRAM, que es más lenta que la SRAM, pero
con una capacidad de integración mucho mayor, lo que permite más capacidad en menos espacio.

##### MEMORIA EXTERNA 
corresponde a los dispositivos de almacenamiento secundario como discos magnéticos
discos magnéticos, cintas magnéticas, discos ópticos, dispositivos de memoria flash, etc
Estos dispositivos son gestionados por el sistema de archivos del sistema operativo a través del
sistema de entrada/salida.
Los dispositivos que componen la memoria externa se conectan al ordenador
con algún tipo de bus (serie o paralelo). Estos dispositivos pueden estar físicamente dentro
el ordenador conectados por buses internos del ordenador (IDE, SATA, SCSI, etc.) o
pueden estar fuera del ordenador conectados por buses externos (USB, Firewire,
eSATA, Infiniband, etc.)

##### MEMORIA VIRTUAL
Decimos que un ordenador utiliza memoria virtual cuando las direcciones de memoria de los programas hacen referencia a un espacio de memoria mayor que el espacio de memoria física, el espacio de memoria principal.
La memoria virtual libera al programador de las restricciones de la memoria principal. En estos ordenadores se diferencia entre el mapa de direcciones lógicas o virtuales (las direcciones utilizadas por los programas) y el mapa de direcciones físicas o reales (las direcciones de la memoria principal).

(las direcciones de la memoria principal). El espacio de memoria virtual utiliza como soporte un dispositivo de almacenamiento externo (normalmente un disco magnético), mientras que el espacio de memoria física corresponde a la memoria principal del ordenador.
Hoy en día, prácticamente todos los ordenadores utilizan memoria virtual. No obstante el uso de la memoria virtual tiene sus desventajas. La traducción de las direcciones lógicas en direcciones físicas y la asignación del espacio de memoria física a los programas que se van a ejecutar. La memoria virtual es gestionada por el sistema operativo