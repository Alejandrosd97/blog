---
title: 'El procesador'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

La función principal de un procesador es ejecutar instrucciones, y su organización está condicionada por las tareas que debe realizar y cómo deben ser realizadas. Los procesadores están diseñados y funcionan según una señal de sincronización. Esta señal, conocida como señal de reloj, es una señal en forma de onda periódica cuadrada con cierta frecuencia. Todas las operaciones realizadas por el procesador son gobernadas por esta señal, un ciclo de reloj determina la unidad básica de tiempo, es decir, la duración mínima de una operación de un procesador. La cantidad de ciclos de reloj necesarios para llevar a cabo una operación depende de la instrucción y sus operandos.

Para ejecutar las instrucciones, cada procesador tiene tres componentes principales:
- Un conjunto de registros: Espacio de almacenamiento temporal para datos e instrucciones en el interior del procesador.
- Unidad lógica aritmética (ALU): Circuito que realiza un conjunto de operaciones aritméticas y lógicas con los datos almacenados dentro del procesador.
- Unidad de control: Circuito que controla el funcionamiento de todos los componentes del procesador. Controla el movimiento de datos e información dentro y fuera del procesador y también las operaciones realizadas por la ALU.


Es necesario disponer de un sistema que permita interconectar estos componentes, que es específico de cada procesador. Podemos tener dos tipos de líneas de interconexión: líneas de control, que se utilizan para controlar y dirigir el procesador, y líneas de datos, que permiten la transferencia de datos e instrucciones entrelos diferentes componentes del procesador. Este sistema de interconexión debe tener una interfaz con el bus del sistema.

El ciclo de ejecución es la secuencia de operaciones que se realizan para ejecutar cada una de las instrucciones. Se divide en cuatro pasos principales:
1) Leer las instrucciones: Primero se buscan las instrucciones. Al leer la instrucción, el registro de contador del programa almacena la dirección de memoria donde se debe leer la instrucción. Si el tamaño de la instrucción es mayor que la palabra de memoria, se requerirán accesos memoria múltiple para leer las instrucciones completamente y cargar esta información en el registro de instrucciones (IR). Luego se decodifica la instrucción. Las diferentes partes de la instrucción deben ser
identificadas para determinar qué operaciones deben realizarse en cada paso del ciclo de ejecución. Esta tarea la realiza la unidad de control del procesador leyendo la información cargada en el registro de instrucciones. Por último,se actualiza el contador del programa, es necesario actualizar el contador del programa según el tamaño de la instrucción, es decir, contabilizando el número total
de accesos a memoria realizados para leer la instrucción.

2) Leer los operandos fuente: Este paso debe ser ejecutado por cada operando necesario
3) Ejecutar la instrucción y escribir el operando de destino: Recopila el resultado obtenido durante la ejecución y escribirlo en el lugar indicado por el operando, a menos que el operando esté implícito, en cuyo caso se escribe en el lugar predeterminado por la instrucción.
4) Verificar si hay interrupciones: Las interrupciones son el mecanismo por el cual un dispositivo externo al procesador puede interrumpir el programa que se está ejecutando en el procesador para ejecutar otro programa. si no hay, la ejecución de la instrucción finaliza y la ejecución de la siguiente instrucción comienza. De lo contrario, el control del procesador se transfiere a la rutina de servicio de interrupción.

