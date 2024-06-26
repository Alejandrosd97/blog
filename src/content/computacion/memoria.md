---
title: 'Memoria'
id: 4
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

El código de cada programa está organizado en subrutinas, tiene estructuras iterativas y trabaja con conjuntos de datos agrupados. Esto, unido al hecho de que la ejecución del código es secuencial, hace que durante un intervalo de tiempo determinado sólo se utilice una pequeña parte de toda la información almacenada. Este fenómeno se denomina proximidad referencial. Esisten dos tipos de proximidad referencial:

- Proximidad temporal: Es cuando, en un intervalo de tiempo dado, la probabilidad de que un programa acceda repetidamente a las mismas posiciones de memoria es muy alta. La proximidad temporal se debe principalmente a las estructuras iterativas; un bucle ejecuta repetidamente las mismas instrucciones, al igual que las llamadas repetitivas a subrutinas.

- Proximidad espacial: Se da cuando, en un intervalo de tiempo determinado, la probabilidad de que un programa acceda a posiciones de memoria cercanas es muy alta. La proximidad espacial se debe principalmente a que la ejecución de los programas es secuencial, salvo excepciones se ejecutan las instrucciones una tras otra en orden y también al uso de estructuras de datos que se almacenan en direcciones de memoria contiguas.


##### CACHÉ

Se sitúa entre la memoria principal y el procesador y puede constar de uno o varios niveles, aunque el funcionamiento es el mismo en ambos casos.
La caché tiene un tiempo de acceso más corto que la memoria principal para reducir el tiempo medio de acceso a los datos, pero también tiene un tamaño mucho menor. Si los datos están en la caché, es posible que el procesador acceda a ellos sin acceder a la memoria principal. En caso contrario, los datos se llevan primero de la memoria principal a la caché, y luego el procesador accede a ellos.
Si, en la mayoría de los accesos a la memoria, los datos están en la memoria caché, el tiempo medio de acceso será similar al tiempo de acceso a la caché. Esto es posible gracias a que los programas utilizan la proximidad referencial.

Para trabajar con la caché, la memoria principal se organiza en bloques de palabras, de forma que cuando hay que transferir datos de la memoria principal a la caché, se toma de la memoria un bloque entero de palabras, no palabras sueltas. La memoria caché también está organizada en bloques llamados líneas. Cada línea consta de un conjunto de palabras (el mismo número de palabras que un bloque de memoria principal), más una etiqueta compuesta por unos pocos bits. El contenido de la etiqueta indica qué bloque de la memoria principal se encuentra en cada línea de la caché en un momento dado

CCuando el procesador busca un dato i la palabra de memoria está almacenada en la memoria caché, se proporciona al procesador, y se dice que se ha producido un acierto. En caso contrario, el bloque de datos de la memoria principal que contiene la palabra de memoria se lleva a la memoria caché y, cuando la palabra ya está en la memoria caché, se proporciona al procesador. En este caso se dice que se ha producido un fallo.

Cuando se produce un fallo, el hardware de la caché solicita a la memoria principal el bloque en el que se encuentran los datos que produjeron el fallo. Luego, lleva el bloque de datos solicitado a la memoria caché y el procesador los obtiene de allí como si se hubiera producido un hit. Debido a la menor velocidad de acceso a la RAM, es importante minimizar fallos de caché para que el redndimiento no se vea afectado. Por norma general, la tasa de fallos esperada es de menos del 10%.

###### CACHÉ LINE
La memoria caché está organizada en líneas. Una línea está formada por un conjunto de palabras más una etiqueta que identifica qué bloque de la memoria principal ocupa esa línea de la memoria caché.

El tamaño de la línea suele tener una tamaño de entre 32 y 128 bytes. Aumentar el tamaño de la línea permite aprovechar la localidad espacial, pero hasta cierto punto. Cuando se produce un fallo, el tiempo necesario para mover una línea más grande aumenta. Además, el número de líneas disponibles en la memoria caché disminuye, ya qu su tamaño es fijo. Como consecuencia hay más competencia para conseguir un bloque de espacio, lo que eliminará de la caché líneas que aún no se han utilizado completamente y reducirá el efecto de la localidad espacial, con el riesgo del aumento de la tasa de fallos.

###### ASIGNACIÓN
El número de líneas disponibles en la caché es siempre mucho menor que el número de bloques de memoria principal. En consecuencia, la caché, además de la información almacenada, debe mantener cierta información que relacione cada posición de la caché con su dirección en la memoria principal.
Para acceder a los datos, hay que especificar la dirección en la memoria principal. A partir de esta dirección es necesario verificar si los datos se encuentran en la caché. Esta verificación se hará a partir del campo de etiqueta que indica qué bloque de memoria principal se encuentra en cada una de las líneas de caché.

###### MAPEO DIRECTO
un bloque de la memoria principal sólo puede estar en una única línea
de la memoria caché. La caché de asignación directa tiene la tasa de fallos más alta, pero se utiliza con frecuencia porque es la más barata y fácil de gestionar.

Para utilizar este tipo de caché, cada bloque de la memoria principal se asigna a una única línea de caché. Para relacionar una línea de caché con un bloque de memoria principal a partir de la dirección especificada para acceder a una palabra de la memoria principal, es necsario determinar a qué bloque pertenece la dirección. La dirección se divide en dos partes: el número de bloque, que corresponde a la parte más significativa de la dirección, y el número de palabra, que corresponde a la parte menos significativa.

Para determinar a qué línea de caché se puede asignar cada bloque, se debe dividir el número de bloque en dos partes: una etiqueta, que corresponde a la parte más significativa del número de bloque, y un número de línea, que corresponde a la parte menos significativa.

Cuando un bloque se lleva de la memoria principal a la línea correspondiente de la memoria caché, el número de la etiqueta del bloque se almacena en el campo etiqueta de la línea, de forma que se puede saber cuál de los bloques está almacenado en esta línea de la caché. El campo tag es el que permite identificar de forma única cada uno de los bloques que se puede asignar a una misma línea de la memoria caché.

Si la etiqueta de dirección y la etiqueta de línea no coinciden, se prduce un fallo y será necesario mover todo el bloque de memoria principal a la caché, sustituyendo el bloque almacenado actualmente.

###### MAPEO ASOCIATIVO
A diferencia de la caché directa, un bloque de memoria principal puede encontrarse en cualquier línea de caché. Para relacionar una línea de caché con un bloque de memoria principal a partir de la dirección especificada para acceder a una palabra de la memoria principal, es necesario determinar a qué bloque pertenece la dirección. La dirección se divide en dos partes. El número de bloque corresponde a la parte más significativa de la dirección y el número de palabra
que corresponde a la parte menos significativa.
