---
title: 'Blockchain'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


Blockchain es un tipo de base de datos compartida que se diferencia de una base de datos típica en la forma en que almacena información. Las cadenas de bloques almacenan datos en bloques unidos mediante criptografía.

Una cadena de bloques consta de programas llamados scripts que realizan las tareas que normalmente realizaría en una base de datos: ingresar y acceder a información y guardarla y almacenarla en algún lugar. Una cadena de bloques se distribuye, lo que significa que se guardan varias copias en muchas máquinas y todas deben coincidir para que sea válida.

Las transacciones se almacenanen bloques de diferentes tamaños segñun el tipo de tecnología. Una vez que está lleno, cierta información se ejecuta a través de un algoritmo de cifrado, que crea un número hexadecimal llamado hash del header del bloque.

Luego, el hash se ingresa en el siguiente header del bloque y se cifra con el resto de la información en el header de ese bloque, creando una cadena de bloques.

Los nuevos bloques siempre se almacenan de forma lineal y cronológica. Es decir, siempre se agregan al final de la cadena de bloques. Una vez que se ha añadido un bloque al final de la cadena, los bloques anteriores no se pueden cambiar.

Esto se debe a que un cambio en cualquier dato cambia el hash del bloque en el que se encontraba. Como cada bloque contiene el hash del bloque anterior, un cambio en uno cambiaría los siguientes bloques. La red generalmente rechazaría un bloque alterado porque los hashes no coincidirían.