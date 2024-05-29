---
title: 'Memoria'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

##### PROCESADOR
Todos los registros son de 32 bits, numerados desde el 0, que es el bit menos significante hasta el 32, que es el más significante. Exsiten cuatro tipos de registros, de los cuales solo los de propósito general son visibles para el programador:

###### REGISTROS DE PROPÓSITO GENERAL
Hay un total de 16 desde R0 hasta R15. Éste último es especial ya que es usado de manera implícita en las instrucciones POP, CALL, RET y PUSH

###### REGISTROS DE INSTRUCCIONES
Los dos registros principales relacionados con el acceso a las instrucciones son el contador de programa (PC) y el registro de instrucciones (IR). El registro del PC tiene un circuito de autoincremento. En el ciclo de ejecución de la instrucción, en el paso de lectura de la instrucción, el PC se incrementará en tantos
bytes como la instrucción. El valor del PC a partir de este momento, y durante el resto de los pasos de la ejecución de la instrucción, se denota como PCup (PC actualizado) y apunta a la dirección de la siguiente instrucción en la secuencia.

###### REGISTROS DE ACCESO A LA MEMORIA
Se necesitan dos registros para cualquier operación de lectura o escritura en la memoria: el del búfer de memoria (MBR) y el de dirección de memoria (MAR).

###### Registros de estado y control
Los bits del registro de estado (flags) son modificados por el procesador como resultado de la ejecución de instrucciones aritméticas o lógicas. Estos bits son parcialmente visibles para el programador a través de las instrucciones de salto condicional. Los registros de estados incluyen las flags zero, transport, overflow y sign

###### ALU
La Unidad Aritmética Lógica es la encargada de realizar las operaciones aritméticas y
operaciones lógicas, considerando números de 32 bits en complemento a dos.  Para hacer una operación tomará los operandos fuente del bus interno A y B y dejará el resultado en el bus interno C.

Al ejecutar una instrucción que realiza una operación aritmética o lógica, la unidad de control debe determinar qué operación realiza la ALU, pero también qué registro coloca los datos en el bus A, qué registro en el bus B y en qué registro el resultado generado en el bus C será almacenado.

###### UNIDAD DE CONTROL
La unidad de control es la unidad encargada de coordinar el resto de los componentes de la computadora a través de señales de control.

Esta arquitectura cuenta con una unidad de control microprogramada donde la función básica es coordinar la ejecución de las instrucciones, determinando qué operaciones (llamadas microoperaciones) se realizan y cuándo se realizan, activando las señales de control necesarias en cada momento.

##### RAM
Hay 2³² ubicaciones de memoria de un byte cada una (4 GBytes de memoria). Siempre se accede a los datos en palabras de 32 bits. El orden de los bytes en datos de 4 bytes está en formato little-endian, es decir, el byte menos significativo se almacena en la dirección de memoria más baja de las 4.

###### MEMORIA STACK 
Parte de la memoria principal está reservada para EL stack, desde la dirección FFFF0000h hasta la dirección FFFFFFFFh, con un stack de 64 Kbytes. El tamaño de cada dato almacenado en el stack es de 32 bits (4 bytes).

El registro SP (R15) siempre apunta a la parte superior del stack. El stack crece hacia  direcciones pequeñas. Para poner un elemento en el stack primero se disminuye el registro SP y luego se guardan la información en la dirección de memoria indicada por el registro SP; y si se desea sacar un elemento del stack, primero se leen los datos de la dirección de memoria indicada por el registro SP y luego se aumenta el registro SP.

###### MEMORIA PARA LA TABLA DE VECTORES DE INTERRUPCIÓN
Parte de la memoria está reservada para la tabla vectorial, desde la dirección 00000000h a la dirección 000000FFh, por lo que hay 256 bytes disponibles. En cada ubicación de la tabla se almacena una dirección de memoria de 32 bits, la dirección inicial de cada RSI, y puede almacenar hasta 64 direcciones diferentes.