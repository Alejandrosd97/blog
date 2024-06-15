---
title: 'Lenguaje ensamblador'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


##### X86-64
x86-64 es una extensión de la arquitectura x86. La arquitectura x86 fue lanzada por
Intel con el procesador Intel 8086 en 1978 como arquitectura de 16 bits.

##### OPERATION MODES
Los procesadores con arquitectura x86-64 mantienen la compatibilidad con los procesadores con arquitectura IA-32 (x86-32). Por este motivo, tienen los mismos modos de funcionamiento que la arquitectura IA-32, lo que les permite mantener la compatibilidad y ejecutar aplicaciones de 16 y 32 bits, pero también añaden un nuevo modo llamado modo extendido, dentro del cual es posible para trabajar en modo real de 64 bits.

Los procesadores actuales admiten diferentes modos de funcionamiento, pero están disponibles al menos un modo protegido y un modo supervisor. El kernel del sistema utiliza el modo supervisor para tareas de bajo nivel que requieren acceso sin restricciones al hardware, como el control de la memoria o la comunicación con otros dispositivos. El modo protegido, por el contrario, se utiliza para casi todas las demás tareas. Cuando se ejecutan programas en modo protegido, sólo se puede acceder al hardware realizando llamadas al sistema operativo, que es el que puede controlarlo en
modo supervisor.

Cuando un ordenador se inicia por primera vez, se ejecutan el BIOS, el cargador de arranque y los programas del sistema operativo que tienen acceso ilimitado al hardware. Luego, el sistema operativo puede transferir el control a otro programa y poner el procesador en modo protegido. En modo protegido, los programas tienen acceso a un conjunto más limitado de instruccione y solo se puede salir del modo protegido realizando una solicitud de interrupción que devuelva el control al sistema operativo. Esto garantiza el control sobre el acceso al hardware.


##### 64-BIT LONG MODE
El modo largo de 64 bits lo utilizan los sistemas operativos de 64 bits. dentro de este general. En este modo, existe un modo de funcionamiento de 64 bits y un modo de compatibilidad con el modo de funcionamiento de las arquitecturas de 16 y 32 bits. En un sistema operativo de 64 bits, los programas de 64 bits se ejecutan en modo de 64 bits y los de 16 y 32 bits se ejecutan en modo de compatibilidad. 

###### MODO 64 BITS
El modo de 64 bits proporciona acceso a 16 registros de uso general de 64 bits. Este modo
utiliza direcciones virtuales que son de 64 bits de forma predeterminada y se puede acceder a un espacio de memoria virtual de 2^64 bytes.

Para la mayoría de las instrucciones, el tamaño de operando predeterminado se mantiene en 32 bits. Este tamaño se puede cambiar individualmente en cada instrucción usando modificadores. También admite direccionamiento relativo de PC para acceder a datos en cualquier instrucción.

###### MODO DE COMPATIBILIDAD
El modo de compatibilidad permite que un sistema operativo de 64 bits ejecute 16 y 32 bits
aplicaciones directamente sin tener que volver a compilarlas.
En este modo, las aplicaciones pueden usar direcciones de 16 y 32 bits y pueden acceder
4 GB de espacio de memoria. El tamaño de los operandos puede ser de 16 y 32 bits.

##### 16- and 32-bit legal mode
Los sistemas operativos de 16 y 32 bits utilizan el modo legal de 16 y 32 bits. Cuando el sistema operativo utiliza modos de 16 o 32 bits, el procesador actúa como un procesador x86 y solo se puede ejecutar código de 16 o 32 bits. En este modo sólo se pueden utilizar direcciones de 32 bits, por lo que el espacio de direcciones virtuales está limitado a 4 GB. Dentro de este modo general existen tres modos:

- Modo real: Implementa el modo de programación Intel 8086 con algunas extensiones, como la capacidad de cambiar al modo protegido o al modo de administración del sistema. El procesador se coloca en modo real cuando se inicia el sistema y cuando se reinicia. Es el único modo de funcionamiento que permite utilizar un sistema operativo de 16 bits y se caracteriza por un espacio de memoria segmentado de 1 MB con direcciones de memoria de 20 bits y acceso a direcciones de hardware. No brinda soporte para la protección de la memoria en sistemas multitarea o código con diferentes niveles de privilegios.

- Modo protegido: Este es el modo predeterminado del procesador. Permite el uso de funciones como memoria virtual, paginación de memoria y computación multitarea. Entre las capacidades de este modo está la capacidad de ejecutar código en modo real, modo virtual 8086, en cualquier tarea en ejecución.

- Modo virtual 8086: En este modo, los programas de 16 bits se pueden ejecutar como tareas dentro del modo protegido.


##### SYSTEM MANAGEMENT MODE
El modo de gestión del sistema es un modo transparente de funcionamiento del software convencional (sistema operativo y aplicaciones). Este modo suspende la ejecución normal (incluido el sistema operativo) y ejecuta un software especial con altos privilegios diseñado para controlar el sistema. Las tareas típicas que se realizan en este modo son la gestión de energía, tareas de depuración asistida por hardware, ejecución de microhardware o software asistido por hardware. Este modo lo utilizan básicamente BIOS y controladores de dispositivos de bajo nivel. Se accede a este modo mediante una interrupción de gestión del sistema (SMI). Un SMI puede ser generado por un evento independiente o activado por el software del sistema para acceder a una dirección de E/S considerada especial por la lógica de control del sistema.

##### MODO 64 BITS
Los elementos que son visibles en este modo de funcionamiento desde el punto de vista del programador son los siguientes:

- Espacio de memoria: un programa que se ejecuta en este modo puede acceder a un espacio de direcciones virtuales de 264 bytes. El espacio físico que realmente puede ocupar el procesador es menor y depende de la implementación específica de la arquitectura.

- Registros: Hay 16 registros de propósito general de 64 bits, que admiten operaciones de bytes, palabras (16 bits), palabras dobles (32 bits) y palabras cuádruples (64 bits)

- El registro de puntero de instrucción (RIP) es de 64 bits.
- El registro de status también es de 64 bits (RFLAGS). Los 32 bits de la parte superior están reservados; los 32 bits de la parte inferior son accesibles y corresponden a los mismos bits de la arquitectura IA-32 (registro EFLAGS).

- Los registros de segmento generalmente no se utilizan en modo de 64 bits.

##### ORDEN DE LOS BYTES
Los procesadores x86-64 utilizan un sistema de clasificación de bytes al acceder a los datos almacenados en la memoria. En particular, se utiliza el formato little-endian, en el que el byte menos significativo de un dato ocupa la dirección de memoria más baja.
El orden little-endian también se utiliza en los registros. Por este motivo, el byte menos significativo de un registro se denomina byte 0.

##### TAMAÑO DE LAS DIRECCIONES
Los programas que se ejecutan en modo de 64 bits generan directamente direcciones de 64 bits. Los programas que se ejecutan en modo de compatibilidad generan direcciones de 32 bits. Estas direcciones se amplían añadiendo ceros a los 32 bits más significativos de la dirección. Este proceso es
gestionado por el hardware del procesador y es transparente para el programador.

##### TAMAÑO DE LOS DESPLAZAMIENTOS Y LOS VALROES INMEDIATOS 
En el modo de 64 bits, los desplazamientos utilizados en el modo de direccionamiento relativo y los valores inmediatos son siempre de 32 bits, pero se extienden a 64 bits, manteniendo el mismo signo.
Hay una excepción a este comportamiento: en la instrucción MOV se puede especificar un valor inmediato de 64 bits.

##### REGISTROS
Los procesadores de arquitectura x86-64 tienen un banco de registros que consta de registros de propósito general y de propósito específico.

Hay 16 registros de propósito general de 64 bits y 6 registros específicos de 16 bits. También hay un registro de estado de 64 bits (RFLAGS) y un registro de contador de programa (RIP) de 64 bits.

###### REGISTROS DE PROPÓSITO GENERAL
Hay 16 registros de datos de 64 bits (8 bytes): RAX, RBX, RCX, RDX, RSI, RDI, RBP, RSP y R8-R15.
Los primeros 8 registros tienen nombres similares a los 8 registros de uso general de 32 bits disponibles en la arquitectura IA-32 (EAX, EBX, ECX, EDX, ESI, EDI, EBP y ESP).

Se puede acceder a los registros de cuatro formas diferentes:
1) Como registros completos de 64 bits (palabra cuádruple).
2) Como registros de 32 bits (doble palabra), accediendo al menos a 32 bits.
3) Como registros de 16 bits (palabra), accediendo al menos a 16 bits.
4) Como registros de 8 bits (byte), permitiendo el acceso individual a uno o dos de los bytes de menor peso según el registro.

Los registros de uso general se dividen en partes (se le da un nombre a cada parte),
facilitando el trabajo con diferentes tipos de datos.

Existen algunas limitaciones al utilizar registros de propósito general:

- Un registro del conjunto AH, BH, CH, DH no se puede utilizar junto con uno de
el conjunto SIL, DIL, BPL, SPL, R8B - R15B en la misma instrucción.

- Registro RSP: este registro tiene una función especial,funciona como puntero del stack, siempre contiene la dirección del primer elemento de la pila. Si se utiliza para otros fines, se pierde el acceso al stack.

- Cuando se utiliza un registro de 32 bits como operando de destino de una instrucción,
el más significativo del registro se establece en 0.

###### REGISTROS DE PROPÓSITO ESPECÍFICO
Se puede distinguir entre varios registros de finalidad específica:

1) Registros de segmentos: Hay 6 registros de segmentos de 16 bits.
•CS: segmento de código
•DS: segmento de datos
•SS: segmento de stack
•ES: segmento extra
•FS: segmento adicional
•GS: segmento adicional

Estos registros se utilizan básicamente en modelos de memoria segmentada (heredada de la arquitectura IA-32). En estos modelos la memoria se divide en segmentos de modo que en un momento dado el procesador sólo puede acceder a seis segmentos de memoria utilizando cada uno de los seis registros de segmento. En modo de 64 bits estos registros apenas se utilizan, ya que se utiliza el modelo de memoria lineal y el valor de estos registros se establece en 0 (excepto en los registros FS y GS,
que se pueden utilizar como registros base en el cálculo de direcciones).

2) Registro de puntero de instrucción (RIP): El RIP es un registro de 64 bits que actúa como
un registro del contador de programa (PC) y contiene la dirección efectiva de la siguiente instrucción a ejecutar. Cada vez que se lee una nueva instrucción de la memoria, se actualiza con el
dirección de la siguiente instrucción a ejecutar. El contenido del registro también se puede modificar durante la ejecución de una instrucción de interrupción de secuencia.

3) Registro de banderas (RFLAGS): RFLAGS es un registro de 64 bits que contiene información sobre el estado del procesador e información sobre el resultado de la ejecución de instrucciones.
Sólo se utiliza la parte inferior del registro (bits 31 a 0), que corresponde al registro EFLAGS de arquitectura IA-32. La parte superior del registro es reservado y no utilizado. El registro de banderas se utiliza normalmente para consultar el valor individual de sus bits. Esto se puede lograr con instrucciones específicas, como instrucciones de salto condicional que consultan uno o más bits para determinar si saltan o no de acuerdo con cómo quedaron estos bits en la última instrucción que los modificó.
