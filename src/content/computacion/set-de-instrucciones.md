---
title: 'Set de instrucciones'
id: 5
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/instructions.svg'
---


La mayoría de los programas están escritos en lenguajes de alto nivel, como C++ o Python.
Para poder ejecutar un programa escrito en un lenguaje de alto nivel, este programa tiene
traducirse a un idioma que el procesador pueda comprender, que es diferente para cada familia de procesadores. El grupo de instrucciones que constituyen este lenguaje se llama set de instrucciones.

Las instrucciones de una arquitectura son autónomas, es decir, incluyen toda la información necesaria para su ejecución. Uno de los componentes necesarios en cualquier instrucción es el grupo de
operandos. Los operandos necesarios para ejecutar una instrucción se pueden definir explícitamente en la instrucción o pueden estar implícitos. La ubicación dentro del procesador de los operandos necesarios para ejecutar un instrucción y la forma en que se especifican conducen a instrucciones diferentes arquitecturas de sets de instrucciones.

Según la localización y la especificación de los operandos, se encuantran las siguientes arquitecturas de set de instrucciones:
- Arquitectura de stack: Los operandos están implícitos en el stack.
- Arquitectura de acumulador: Uno de los operandos está implícito en un registro llamado acumulador.
- Arquitecturas de registros de propósito general: Los dos operandos son explícitos, ya sea en registros o en memoria. 

Independientemente del tipo de arquitedtura, todas las instruccioens están compuestas por varios componentes. EN primer lugar, el código de la operación, que especifica la operación a realizar; en segundo lugar, el operando fuente, uno o más operandos que pueden ser necsarios para la operación, pueden ser implícitos; en tercer lugar, el operando de destinación, que puede ser implícito o explícito e indica el lugar donde se almacena el resultado. Se puede usar uno de los operandos fuente como desrinación. Por último, la dirección de la siguiente instrucción, normalmentente es implícito ya que el procesador de manera automática va a buscar la siguiente. Solo las instrucciones de control de flujo especifican instrucciones alternativas.

No obstante, la longitud de las instrucciones si puede ser fija o variable. Las instrucciones de duración variable ocupan el mismo número de bits, lo cual simplifica el diseño del procesador y la ejecución es más rápida. Por otro lado, en las instrucciones de longitud variable, la cantidad de bits necesarios para cada una es diferente. Permite diseñar un rango más amplio de códigos de operaciones, pero complica el diseño del procesador.
Es deseable que la longitud de las instrucciones sea un múltiplo de la lingitud de la palabra de memoria.


A la hora de determinar lalongitud de la instrucción, lo más común es asignar un número fijo de bits para el código de la operación y el resto para los operandos y modos de direccionamiento.

La información contenida en los operandos se puede encontrar en diferentes lugares dentro de la computadora.  En el caso del acceso inmediato, a data está codificada en la misma instrucción. Se puede considerar como un registro, el registro IR (Instruction Register), y está directamente disponible para el procesador. Otra posible ubicación es que la inforamaciñon esté directamente disponible en un registro del procesador. La última localización posible es la memoria, para lo cual, el procesador tendrá que iniciar un ciclo de lectura/escritura.
En el caso de operaciones de I/O, es necesario solicitar los datos al módulo de I/O correspondiente y acceder a los registros del módulo de E/S según el mapa de I/O que hayamos definido. Dependiendo de la ubicación de los datos, el procesador tendrá que hacer diferentes tareas para obtenerlo: puede ser necesario realizar cálculos y accesos a memoria indicados por el modo de direccionamiento que utiliza cada operando.

Los datos se almacenan como una secuencia de bits y, según la interpretación de los valores almacenados, se pueden tener diferentes tipos de datos. Hay que recordar que un mismo dato puede ser tratado como un valor lógico, un valor numérico o un carácter, dependiendo de la operación para la que se utilice, cosa que no ocurre con los lenguajes de alto nivel.Los tipos de data más comunes son direcciones de memoria; números, que pueden ser íntegros números de punto fijo y números de punto flotante; caracteres, que pueden formar una cadena para representar un texto. Aunque el programador representa los caracteres mediante las letras del alfabeto, para poder representarlos en un ordenador que utiliza datos binarios es necesario que estén codificados. La codificación más típica es ASCII, que representa cada carácter con un código de 7 bits, lo que permite tener 128 caracteres diferentes. Los códigos ASCII se almacenan y transmiten utilizando 8 bits por carácter y el octavo bit sirve para la paridad o control de errores. El último tipo es el lógico, que expresa valores booleanos (verdadero o falso).

###### BITS DE RESULTADO
Los bits de resultado nos dan información sobre el resultado obtenido en una operación realizado en la ALU del procesador. Al ejecutar una instrucción aritmética o lógica, la ALU realiza la operación
y obtiene un resultado. Según el resultado, activa los bits de resultado correspondientes y los almacena en el registro de estado para ser utilizados por otras instrucciones. Los bits de resultado más comunes son los siguientes:

- Zero bit (Z): Se activa si el resultado obtenido es 0. Se consider que los resultados son activos cuando tienen un resultado de 1 e inactivos cuando tienen un resultado de 0

- Carry bit (C): conocido como carry en suma y préstamo en resta. Se activa si el carry ocurre en el último bit utilizado en una operación aritmética. También puede deberse a una operación de desplazamiento. Se activa si se lleva uno al final de la operación, según el tradicional algoritmo de suma y resta que opera en binario, o si el último bit que es desplazado se copia al bit de carry y se pone a 1. Cuando se opera con enteros sin signo, el bit de carry es equivalente al bit de desbordamiento. No obstante, con un número con signo,
el bit de acarreo y el bit de desbordamiento no son equivalentes y la información que contiene el bit de carry no es relevante.

- Bit de desbordamiento (V): Se activa si la última operación ha producido desbordamiento según el rango de representación utilizado. Esto significa que ara representar el resultado obtenido, en el formato utilizado, son necsario más bits que los disponibles.

- Sign bit (S): Se activa si el resultado obtenido es negativo, el bit más significativo del resultado se pone a 1.

###### INTRUCCIONES DE TRANSFERENCIA DE DATA
Las instrucciones de transferencia de datos transfieren datos de una ubicación a otra dentro
el ordenador. El tipo y el tamaño de los datos se pueden especificar implícitamente en el código de operación. Esto significa que existen diferentes códigos de operación según el tipo y el tamaño de los datos a transferir y para indicar implícitamente la ubicación del operando de origen o de destino. En las arquitecturas registro-registro las instrucciones LOAD y STORE se utilizan cuando es necesario realizar transferencias de datos con memoria. Generalmente, cada dirección de memoria
corresponde a una posición de memoria de 1 byte. Si hacemos se mueve las data de un registro 16 bits, en realidad se están usando dos direcciones de memoria, ya que los datos ocupan 2 bytes en el registro.

###### COMPARACIÓN Y NEGACIÓN
Esta operación realiza la comparación entre dos operandos restando el segundo del primero y actualizando los bits de resultado. Es un caso especial de resta donde el valor de los operandos no se modifica porque no se guarda el resultado.

En cuanto a la negación, sta operación cambia el signo del operando. Si los datos están en complemento a dos, esto equivale a una de estas operaciones: 0 – operando, NOT(operando) + 1, operando * (–1)

###### INSTRUCCIONES DE CONTROL DE FLUJO
Las instrucciones de flujo de control permiten cambiar la secuencia de ejecución de un programa. En el ciclo de ejecución de las instrucciones, el PC se actualiza automáticamente apuntando a la instrucción almacenada al lado de la que se está ejecutando actualmente. Para se necesita saber cuál es la siguiente instrucción a ejecutar para cargar la dirección en el PC. Existen varios tipos de instrucciones de control de flujo

###### INSTRUCCIONES DE SALTO INCONDICIONAL
Las instrucciones de salto incondicionales cargan la dirección especificada por el operando en
el registro del PC, se expresa como una etiqueta que representa la dirección de la instrucción que debe ejecutarse a continuación. Si el operando está codificado como una dirección, se actualiza el registro del PC con esta dirección. Si el operando está codificado como un offset, habrá que agregar este offset al PC. Esta forma de obtener la dirección de salto se denomina direccionamiento relativo al PC.

###### INSTRUCCIONES DE SALTO CONDICIONAL
Las instrucciones de salto condicional cargan la dirección especificada por el operando en
el registro del PC si satisface una determinada condición. De lo contrario, el proceso continúa ejecutando la siguiente instrucción en la secuencia. 
Las condiciones se evalúan comprobando el valor actual de los bits de resultado; los más comunes son cero, signo, carry y overflow. Una condición puede evaluar un bit de resultado o varios. Las instrucciones de salto condicional deben usarse inmediatamente después de una instrucción que modifica los bits de resultado, como las aritméticas o las lógicas; de lo contrario, los bits de resultado pueden ser modificados por otra instrucción, situación que debe evitarse.

Existe un tipo de instrucción de salto llamada skip o salto implícito que, según una condición, puede saltar una instrucción. Si no se cumple la condición, ejecuta la siguiente instrucción y, si se cumple, ésta no se ejecuta, se omite y ejecuta la siguiente instrucción. Estas instrucciones generalmente se encuentran en ordenadores muy simples o microcontroladores con un set de instrucciones limitado y con instrucciones de longitud fija.

###### INSTRUCCIONES CALL AND SUBRUTINE
Una subrutina es un grupo de instrucciones que realiza un trabajo específico y que generalmente es
llamado varias veces dentro del programa principal.
Tanto las instrucciones de salto, llamada y retorno de subrutina permiten controlar la secuencia de ejecución del programa, pero este último garantiza el retorno al punto donde se interrumpió la ejecución secuencial una vez finalizada la ejecución de la subrutina. FALTA ESQUEMA

La llamada a subrutina es una instrucción que transfiere el control a la subrutina para que pueda garantizar el regreso al punto donde estaba la secuencia de ejecución. La instrucción solo tiene un operando que especifica la dirección inicial de la
subrutina. Este operando se expresa como una etiqueta que representa la dirección de
la primera instrucción de la subrutina a ejecutar.

Lo primero que se hace es guardar el valor de la PC en una ubicación conocida para que cuando finalice la ejecución de la subrutina se pueda regresar al punto de ejecución donde
fue encontrado y continuar la secuencia de ejecución. Las ubicaciones donde se puede almacenar la PC (es decir, la dirección de retorno de la subrutina) son un registro, al comienzo de la subrutina o en el stack, sinedo éste último el más habitual. Luego, se carga la dirección expresada por el operando de instrucción en el PC para transferir el control a la subrutina.

La instrucción return de la subrutina se utiliza para devolver el control al punto de ejecución desde donde se realizó la llamada. Para ello recupera el valor del PC del lugar donde se almacena la instrucción de llamada a la subrutina. Tiene que ser la última instrucción de una subrutina y no tiene ningún operando explícito.


##### ADDRESSING MODES
Son las diferentes formas de expresar un operando en una instrucción y el procedimiento asociado que permite obtener la dirección donde se almacenan los datos y, como consecuencia, los datos

###### INMEDIATE ADDRESSING MODE
Usando el modo de direccionamiento inmediato, el operando expresa el valor
de los datos que quiere utilizar; es decir, los datos están dentro de la instrucción y tiene un valor fijo.

Se suele utilizar en operaciones aritméticas o lógicas, transferencias para inicializar un registro y, en general, para definir y utilizar constantes.
El valor del dato suele representarse en complemento a dos y cuando se transfiere a un registro o a una posición de memoria hace la extensión de signo replicando el bit de signo hacia la izquierda, llenando el operando de dirección.

No se requiere acceso a memoria adicional para obtener los datos, y esto acelera la ejecución de la instrucción. Las principales desventajas son que el valor de los datos es constante y que el rango de valores que se pueden representar está limitado por el tamaño de este operando, que no suele ser muy grande.

En instrucciones de salto incondicionales, el operando puede expresar la dirección a la que quiere saltar; en este caso, esta dirección es el dato, ya que la función de
esta instrucción es para cargar este valor en el PC y no necesariamente para acceder a la memoria para obtenerlo. Por eso se considera un modo de direccionamiento inmediato, aunque el operando exprese una dirección, como en el modo de direccionamiento directo de memoria.

###### MODO DE DIRECCIONAMIENTO DIRECTO
Usando el modo de direccionamiento directo, el operando indica dónde se pueden encontrar los datos. Si se refiere a un registro, los datos se almacenarán en este registro y se denomina modo de direccionamiento directo de registro. Si se refiere a una posición de memoria, los datos se almacenarán en esta dirección de memoria (es decir, dirección efectiva) y se denomina modo de direccionamiento directo de memoria.

El tamaño del operando, en el caso del direccionamiento directo de registros, dependerá del número de registros que tenga la máquina, que suele ser relativamente reducido y, por tanto, necesita apenas unos pocos bits. En el caso del direccionamiento directo a memoria,
Dependerá del tamaño de la memoria. En las máquinas modernas, el operando tiene que ser muy grande para poder direccionar toda la memoria, y este es uno de los principales problemas de este modo de direccionamiento.

###### MODO DE DIRECCIONAMIENTO INDIRECTO
Usando el modo de direccionamiento indirecto, el operando indica dónde Se almacena la dirección de memoria (es decir, la dirección efectiva) que contiene los datos que se necesitan. Si se refiere a un registro, la dirección de memoria (dirección efectiva) que contiene los datos estará en este registro y se conoce como modo de direccionamiento indirecto de registro. Si se refiere a una dirección de memoria, la dirección de memoria (es decir, dirección efectiva) donde se encuentran los datos se almacenará en esta posición de memoria y lo llamamos modo de direccionamiento de memoria indirecto.

Uno de los problemas del modo de direccionamiento de memoria directo es que se requieren direcciones muy grandes para poder acceder a toda la memoria. Este no es el caso con el modo de direccionamiento indirecto. La dirección entera se puede guardar en un registro o en la memoria utilizando las posiciones necesarias. 

Respecto al modo de direccionamiento iniderecto de memoria, una de sus principales desventajas es que necesita un acceso a memoria adicional en comparación con el modo directo. Es decir, un acceso a la memoria para el modo de direccionamiento de registro indirecto y dos accesos a la memoria para el modo de direccionamiento de memoria indirecto; por esta razón, este segundo modo de direccionamiento no está implementado en la mayoría de las máquinas.