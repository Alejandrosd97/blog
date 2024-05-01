---
title: 'El procesador'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/cpu.jpeg'
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


##### CANALIZACIÓN DE INSTRUCCIONES
Consiste en dividir el ciclo de ejecución de una instrucción en un conjunto de etapas. Estas etapas pueden coincidir o no con los pasos del ciclo de ejecución de instrucciones. El objetivo es ejecutar de manera simultánea diferentes etapas de diferentes instrucciones, lo que incrementa el rendimiento del procesador. El tiempo para llevar a cabo una instrucción no se reduce pero sí aumenta la cantidad de instrucciones llevadas a cabo en ese tiempo. Para llevar esto a cabo es necesario que cada etapa de todas las instrucciones tenga la misma duración, normalmente un ciclo de reloj. La información generada en cada paso se almacena en los registros de manera que esté disponible para el siguiente paso

##### REGISTROS
Los regsitros son elementos de memoria de acceso rápidos localizados dentro del procesador, que éste utiliza como espacio de almacenamiento temporal. 
Son esenciales para el funcionamiento del procesador ya que la ALU solo trabaja con la memoria interna del procesador. La cantidad y rganización de los registros cambia de un procesador a otro. Se pueden clasificar de la siguiente manera:

- Propósito general: Se suelen utilizar como operandos en las instrucciones de montaje (assembly). A estos registros se les pueden asignar funciones específicas: datos o dirección. Se pueden diferenciar por el formato y tamaño de los datos que contienen,por ejemplo, puede haber registros para números enteros y registros para números decimales.
Los registros de direcciones se utilizan para acceder a la memoria y pueden almacenar direcciones o índices.

- Registros de instrucción: Hay dos principales involucrados en el acceso a las instrucciones: el contador del programa (PC), que contiene la dirección de la siguiente instrucción que debe ser leída de la memoria y el registro de instrucción (IR), que contiene la instrucción a ser leída.

- Registros de acceso a la memoria: Hay dos registros necesarios para las operaciones de lectura y escritura: Registro de la dirección de memoria (MAR), donde se coloca la dirección de memoria que aAlgunos de estos registros se utilizan implícitamente para diferentes funciones, como acceder a la pila, dirigir segmentos de memoria o Algunos de estos registros se utilizan implícitamente para diferentes funciones, como acceder a la pila, dirigir segmentos de memoria o soportar memoria virtual.soportar memoria virtual. la que se desea acceder y el registro de búfer de memoria (MBR), que es donde la memoria coloca la información leída la que se quiere escribir. FALTA

- Registros de control y status: Almacenan información sobre el estado del procesador.
Los bits del registro de estado son modificados por el procesador como resultado de la ejecución de algunos tipos de instrucciones y como consecuencia de algún evento, como por ejemplo solicitudes de interrupción. Estos bits son parcialmente visibles para el programador, en algunos casos al ejecutar instrucciones específicas.

##### ALU
Es un circuito combinacional capaz de realizar operaciones aritméticas y lógicas con números enteros y reales. Las operaciones que se pueden realizar están definidas por el set de instrucciones.
Los números íntegros se pueden representar usando diferentes magnitudes, siendo la común hoy en día el complemento a dos. El número de bits más común es 32 o 64. Los números reales, por su parte se pueden representar de dos maneras diferentes, punto fijo y punto flotante. En la notación de punto fijo, la posición de la coma está fijada y una cantidad específica de bits se usa para la parte entera y otro para la decimal. En la notación de punto flotante, se usan tres campos, uno para el signo, una para el significando y otra para el exponente.

Las operaciones aritméticas habituales que puede realizar una ALU incluyen suma,
resta, multiplicación y división. Además, se pueden incluir operaciones específicas de incrementos positivos (+1) o negativos (-1).
Las operaciones lógicas incluyen operaciones AND, OR, NOT, XOR, operaciones de desplazamiento de bits y operaciones de desplazamiento circular.

##### UNIDAD DE CONTROL
Puede considerarse como el cerebro del ordenador, ya que está conectado al resto de componentes mediante señales de control. Al implementar una unidad de control, queda claro que las unidades del ordenador deben diseñadas, no para mejorar el funcionamiento específico de cada unidad, sino para mejorar el funcionamiento general del ordenador. La función básica de la unidad de control es la ejecución de las instrucciones, pero su complejidad de diseño no se debe a la complejidad de estas tareas, sino a su sincronización.

###### MICROOPERACIONES
Cada una de las operaciones realizadas durante la ejecución de una instrucción se llama microoperación, y son la base para diseñar la unidad de control. El propósito básico de las microoperaciones es transferir información de una ubicación del ordenador a otra, generalmente de un registro a otro, ya sean internos o externos al procesador. Este proceso de transferencia puede implicar no solo mover la información sino también transformarla. Se identifican tres tipos básicos de microoperaciones: 
- Transferencia interna: Operaciones de transferencia entre registros internos. Un ejemplo sería cargar el contenido del registro PC en el registro MAR para obtener la siguiente instruccióna a ejecutar.
- Transferencia interna con transformación: Realiza operaciones lógicas o aritméticas usando los registros internos. 
-Transferencia externa: Operaciones de transferencia entre registros internos y externos del procesador, o entre registros internos y módulos externos del procesador, como el bus o la RAM. Un ejemplo sería cargar el contenido de registro de status de un dispositivo de I/O a un registro del procesador.



