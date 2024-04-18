---
title: 'Hardware'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

Se puede definir un ordenador como un dispositivo electrónico capaz de aceptar información, almacenarla, procesarla según a una serie de instrucciones y devolver un resultado acorde a las operaciones realizadas. Para estar tareas un ordenador se compone de tres partes:
- Un sistema de input/output capaz de aceptar información y comunicar los resultados. Transfiere datos entre el ordenador y dispositivos externos. Permite la comunicación con el usuario del ordenador y también permite la comunicación con otros ordenadores.
- Un procesador que procese dicha infomación.
- Una memoria donde almacenar la información y las intrucciones.
- Sistema de interconexión entre los componentes anteriores.

Se conoce como arquitectura de computadores como el conjunto de elementos informáticos que son visibles desde el punto de vista del programador de lenguaje ensamblador. Esto incluye el set de instrucciones, los tipos y formatos de operandos o los modos de ejecución. No se debe confundir con estructura de computadores. Ésta hace referencia a las unidades funcionales del ordenador y cómo están interconectadas. Describen conjunto de elementos que son transparentes para el programador, por ejemplo la interfaz entre el ordenador y los periféricos o los sistema de control e interconexión. Teniendo en cuenta esta diferencia, es posible tener dos ordenadores con la misma arquitectura (por ejemplo x86-64) pero diferente estuctura.

Existen dos tipos principlaes de arquitectura, la de Harvard y la de Von Neumann, siendo la de Von Neuman o modificaciones de ésta las más presentes en los ordenadores actuales. La principal diferencia entre las dos arquitecturas radica en el mapa de memoria: mientras que en la arquitectura de Von Neumann hay una solo espacio de memoria tanto para datos como para instrucciones, en la arquitectura de Harvard hay dos espacios de memoria separados: uno para los datos y otro para las instrucciones.

##### VON NEUMANN
En una máquina de Von Neumann se especifica la forma de procesar la información por un programa y un conjunto de datos almacenados en la memoria principal. Los programas se componen de instrucciones simples, llamadas instrucciones de máquina, que son básicamente de los siguientes tipos: transferencia de datos (por ejemplo, mover datos de una ubicación a otra),aritmética (por ejemplo, suma, resta, multiplicación, división), lógica (por ejemplo, AND, OR, XOR, NOT), control de flujo (por ejemplo, salto incondicional, salto condicional, etc.).

La arquitectura Von Neumann se basa en tres propiedades. En primer lugar, xiste un único espacio de memoria para lectura y escritura, que contiene todas las instrucciones y datos necesarios. Segundo, el contenido de la memoria es accesible por posición, independientemente de si se accede a datos o instrucciones. Por último, las instrucciones se ejecutan secuencialmente: después de ejecutar una instrucción, la siguiente instrucción se ejecuta en la memoria principal, pero la secuencia de ejecución se puede modificar mediante instrucciones de flujo de control.

El objetivo de la arquitectura Von Neumann is construir sistemas flexibles que permitan resolver diferentes tipos de problemas. Por tanto, debe ser capaz de realizar operaciones aritméticas y lógicas básicas a partir de las cuales se pueden resolver problemas más complejos. Para lograr esto, el procesador debe tener una unidad aritmética y lógica (ALU). Cada operación se lleva a cabo en un conjunto de datos y produce resultados. Por tanto, los resultados se generan según las señales de control y datos.

![foto](/../alu.png)

Dentro del procesador, la unidad de control se encarga de interpretar las instrucciones y generar el conjunto de señales de control necesarias para controlar la ejecución de las instrucciones. También es necesario que el procesador tenga un conjunto de registros (almacenamiento rápido de baja capacidad) con los que puede trabajar la ALU, desde donde se leen los datos necesarios para ejecutar las operaciones y donde almacenará los resultados de las operaciones.

Comúnmente, la interconexión de sistemas dentro de una arquitectura Von Neumann es lograda a través de un bus, un sistema de comunicación compartido que interconecta todos los componentes. Como se puede compartir entre muchos componentes, es imprescindible un mecanismo de control y acceso al bus.
El sistema de interconexión es esencial, pero generalmente no se considera una unidad funcional del
computadora.

##### HARVARD

La arquitectura de Harvard difiere básicamente de Von Neumann en el hecho de que la memoria de los datos y la de instrucciones están separadas, por tanto el procesador es capaz de acceder a ambas memorias de forma independiente, y por tanto, por separado y simultáneamente. Ambas memorias pueden tener característias diferentes, por ejemplo el tamaño de memoria de las palabras. Este tipo de arquitectura no se suele implementar en ordenadores de propósito general, pero sí para ordenadores de uso muy específico.

###### MICROCONTROLADORES

Un controlador o microcontrolador es un sistema encargado de controlar las operaciones de un dispositivo, por ejemplo, controlar que el nivel de un tanque de agua sea siempre entre un nivel mínimo y un máximo o, controlando el funcionamiento de un electrodoméstico.
Un microcontrolador se considera una computadora dedicada, ya que su memoria almacena un
único programa que controla el dispositivo. Un microcontrolador suele ser un circuito integrado de pequeñas dimensiones que puede estar incorporado en el mismo dispositivo que controla. Incorpora un único circuito integrado con todas las unidades necesarias para funcionar, es un ordenador completo pero más limitado.

###### DIGITAL SIGNAL PROCESOR
Un procesador de señal digital (DSP) es un dispositivo capaz de procesar señales de
diferentes fuentes en tiempo real. Un DSP tiene características tanto de microcontroladores como de microprocesadores. Por eso muchas veces resulta difícil distinguir entre estos tres conceptos.
Dispone de un procesador con gran potencia de cálculo que maneja las señales en tiempo real y puede realizar operaciones aritméticas a alta velocidad.

Una de las principales características de los DSP es que implementan muchas operaciones en hardware mientras que otros procesadores las implementan en software, y suelen incorporar unidades específicas para realizar sumas y obtener productos. Por esta razón, el hardware del procesador puede ser más complejo que algunos microcontroladores o microprocesadores. Otra diferencia importante entre los DSP y otros procesadores es que están diseñados para ser escalables y funcionar en paralelo con otros DSP. Esto hace necesario disponer de elementos para sincronizar entre diferentes DSP.
