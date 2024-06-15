---
title: 'Introducción'
id: 1
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---



Un programa es un conjunto de instrucciones que siguen reglas sintácticas estrictas especificadas por un lenguaje de programación particular y diseñadas de tal manera que, cuando se ejecutan en una máquina particular, realizan una tarea particular sobre un conjunto de datos. Los programas, por tanto, constan de código (instrucciones) y datos. Genéricamente, el archivo que contiene el conjunto de instrucciones y la definición de los datos se llama código fuente.

Para ejecutar un programa, tense debe trraducir a un lenguaje que el procesador pueda entender, proceso conocido como compilación, que da lugar a un código ejecutable. El código normalmente se divide en dos fases: en la primera, el código fuente traduce en un código objeto, y en la segunda fase este código objeto y otros códigos objeto del mismo tipo que ya hemos generado, si es necesario, para generar el código ejecutable final.

El código objeto es un código de bajo nivel compuesto por una colección organizada de secuencias de código siguiendo un formato estándar. Cada secuencia, en general, contiene instrucciones para que la máquina en la que se debe ejecutar el código realice una tarea particular. También puede contener otra información asociada. Para iniciar la ejecución, tanto el código como los datos (al menos parte de ellos) deben cargarse en la memoria del ordenador. Dependiendo del nivel de absatración, es decir, el nivel de proximidad a la máquina, los lenguajes se pueden clasificar en:

###### LENGUAJES DE BAJO NIVEL
Estos lenguajes se llaman lenguajes de bajo nivel porque dependen de la arquitectura del procesador en el que queremos ejecutar el programa y porque no tienen sentencias con una estructura lógica que facilite la programación y la comprensión del código al programador, pero se componen de una lista de instrucciones específicas de una arquitectura. Existen dos: 

- Lenguaje máquina: Un lenguaje que puede ser interpretado y ejecutado por un
procesador específico. Este lenguaje consta de instrucciones codificadas en binario. Es generado por un compilador a partir de las especificaciones de otro lenguaje de alto nivel. Es muy difícil de entender para el programador y sería muy fácil cometer errores si hubiera que codificarlo.

- Lenguaje ensamblador: Lenguaje simbólico que ha sido definido para que los programas puedan escribirse con una sintaxis cercana al lenguaje de máquina, sin tener que escribir el código en binario sino usar una serie de mnemónicos que sean más fáciles de entender para el programador. Para ejecutar estos programas también se requiere un proceso de traducción, generalmente llamado ensamblación, pero es más fácil que en lenguajes de alto nivel.

###### LENGUAJES DE ALTO NIVEL
Lenguajes de alto nivel: Los lenguajes de alto nivel no están directamente relacionados con un lenguaje de máquina específico, no dependen de la arquitectura del procesador en el que serán ejecutados y tienen sentencias con una estructura lógica que facilitan la programación y la comprensión del código para el
programador; Las instrucciones suelen ser palabras extraídas de un lenguaje natural.
(generalmente inglés) para que el programador pueda entenderlos mejor. Para poder ejecutar programas escritos en estos lenguajes es necesario un proceso de compilación previo para pasar del lenguaje de alto nivel al lenguaje de máquina. El código
generado en este proceso dependerá de la arquitectura del procesador en
el cual será ejecutado.