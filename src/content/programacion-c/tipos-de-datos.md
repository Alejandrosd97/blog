---
title: 'Tipos de datos'
id: 1
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---

##### TIPOS DE DATOS SIMPLES

###### INT
Sirve para almacenar números enteros. Es un número con signo, es decir, acepta valores positivos, negativos y cero. Es posible almacenar números en formato hexadecimal escibiendo 0x justo delante del valor y el compilador los tomará como hexadecimales. Para que una variable no admita números negativos se añade la palabara clave unsigned, por ejemplo unsigned int num= 3.

###### FLOAT
Sirve para almacenar números de punto flotante, es decir, decimales. Los números flotantes se pueden expresar mediante notación científica, por ejemplo float numero = 2.5e8.

###### DOUBLE
Funciona igual que float con la direferencia de que admite el doble de dígitos significativos y por lo tanto, es mucho más preciso. Normalmente se almacena usando 64 bits.

###### _BOOL
Almacena valores booleanos, 0 para falso y 1 para verdadero. Usando el estándar C99, no es necesario usar _Bool, sino que se puede importar el módulo <stdbool.h> y usar el tipo bool. Además, en este caso admite las palabras clave true y false en vez de tener que usar 1 y 0.

###### ENUM
Es un tipo de dato que permite al programador crear una variable y establecer los valores que la variable puede aceptar. Lo primero es definir un tipo enum con los valores que admite entre corchetes. Para usar el enum, se crea una variable de tipo enum y se especifica el nombre del enum creado anteriormente, de manera que esta variable solo admitirá valores que se encuentren dentro los predefinidos en el enum. La palabra enum se usa en ambos casos. El compilador interpreta los identificadores del enum como íntegros, empezando por el 0. Se pueden especificar valores diferentes a los que recibirían según su posición en la enumeración, por ejemplo se podría asociar el primer valor con 10,y  los que van detrás se irían incrementando de manera que el segundo no se correspondería con el 1 sino con el 11.

###### CHAR
Es un solo carácter que se escribe entre comillas simples, pero no entre comillas dobles, que en C se usan para las cadenas o strings. No se debe confundir con cadenas de caracteres. Se pueden usar números que representan los símbolos en tabla ASCII, por ejemplo el número 11 representa el carácter B.

##### ARRAYS
SirveN para almacenar un número fijo de elementos de un tipo de dato, de manera que se pueden almacenar varios valores bajo una maisma variable. El tamaño es fijo y no se puede modificar una vez creado. Los valores guardados en un array reciben el nombre de elementos y deben compartir el mismo tipo de dato. Su declaración es parecida a otras variables y se hace como en el siguiente ejemplo: int numeros[20]. El número dentro de [] define el número de elementos, que no puede ser superado. Debido a que todos los elementos del array se almacenan bajo el mismo nombre, para acceder a cada uno de ellos se necesita un índice. Se expresa entre [] y empieza por 0 para el primer elemento incrementándose de uno en uno para cada elemento posterior. Es muy común usar bucles para acceder a los elementos de un array. Cuando se intenta acceder a un índice que no existe, ya sea porque es un número negativo o o bien porque es mayor que la longitud del array menos 1, producirá un error conocido como “out of bounds”. Hay que tener en cuenta que este error no es comprobado por el compilador por lo que la compilación se realizará correctamente. Se puede asignar un valor a un elemento concreto usando el operador de asignación =, por ejemplo en un array de íntegros que almacena precios, precios[4] = 180. 

Para inicializar un array se escriben los valores a introducir entre {} separados por comas. No es necesario inicializar todos los elementos del array, se pueden inicializar solo los primeros. C11 añadió una característica llamada inicializadores designados, que permite determinar que índices del array se desea inicializar.

Los arrays explicados anteriormente son unidimensionales, pero pueden tener más dimensiones, es decir, columnas y filas, como una matriz. Los arrays multidimensionales se declaran de la misma manera que los unidimensionales con la diferencia de que se deben especificar el número de filas y columnas. Por ejemplo int matriz [5][8], (5 filas y 8 columas). Al listar los elementso se encuadran los elementos de cada fila entre corchetes separados por comas y luego todas las filas también entre corchetes. Los corchetes internos no son necesarios, pero por convención se colocan para mejorar la legibilidad. Al igual que los otros arrays, no es necesario inicializar todos los elementos, pero es este caso, sí son necesarios los corchetes internos para que el compilador no interprete los valores como consecutivos. Todo lo anterior también es aplicable para arrays de tres dimensiones o más. Para procesar los elementos de arrays con varias dimensiones serán necesarios varios bucles for anidados.

##### STRINGS
Muchos lenguajes de programación, como Javascript, tienen tipos de datos específicos para las cadenas de caracteres. No es ese el caso de C, donde son arrays cuyo tipo de dato son caracteres. A diferencia de los caracteres, las cadenas de texto se escriben entre comillas dobles. Existe un carácter especial llamado carácter null cuyo valor es 0 y se añade al final de la cadena para marcar su final. Si se escribe el carácter null en medio de una cadena, todos los caracteres posteriores no serán tenidos en cuenta ya que la cadena termina ahí. Por tanto, para conocer la longitud de la cadena se le debe sumar un carácter más. Se expresa \0 y no se debe confundir con la palabra clave NULL.

La librería estándar de C provee de numerosas funciones para manejar los strings, pero no se pueden usar operadores sobre las cadenas. A la hora de definir la longitud del array hay que considerar el carácter null, que ocupará un espacio al ser añadido de manera automática por el compilador, por lo que si define un array de 20 elementos, en realidad solo se podrán asignar 19. Una vez que un string ha sido declarado o inicializado, no se puede simplemente asignarle un valor con el operador de asignación =, se debe usar la función strncpy(). En términos generales, la forma más recomendable de inicializar un string es hacerlo sin especificar el tamaño entre [] y usando comillas dobles. Para mostrar un string por consola mediante la función printf() y para recoger el ínput con la función scanf(), se usa %s.

La forma tradicional de definir constantes en C es usar la directiva de preprocesador #define. Debido a que se ejecuta antes del compilador, estas sentencias se pueden colocar en cualquier lugar, aunque la convención es hacerlo al inicio, por cuestiones de legibilidad. C90 añadió una segunda manera de definir constantes con la palabra clave const. Const es más flexible pues permite definir un tipo y decidir el alcance de la constante. Los enums se podrían considerar una manera de crear constantes lógicas.

###### FUNCIONES CON STRINGS

###### STRLENGTH()
Para usar las funciones predefinidas en C se debe incluir el módulo <string.h>. La función strlength() devuelve la longitud del string. 

###### STRCPY()
Dado que no se puede asignar arrays con =, para asignar un valor a un string después de la declaración o modificar su valor existente, se debe usar strcpy(). Recibe tres parámetros, el primero indica donde se va a copiar; el segundo, el valor que va a recibir y el tercero, la cantidad de bytes que se desea copiar (para que no sea superior al tamaño del array). 

###### STRCAT()
La función strcat() recibe como parámetro dos strings y concatena el segundo detrás del primero. El segundo string no se altera pero el resultado de la concatenación se guarda en el primero. Al igual que strcpy(), puede darse un problema de buffer overflow si el resultado es mayor que el tamaño del array, por lo que puede recibir un tercer argumento indicando la cantidad de bytes que se van a concatenar. Si se comparan dos strings mediante el operador ==, no se compara el contenido del string, sino las direcciones en memoria, por lo que dos strings con el mismo contenido no serán considerados como iguales al estar almacenados en direcciones diferentes. 

###### STRCMP()
Para determinar si dos strings son iguales, no se puede usar el operador de comparación ==, esto solo sirve para los tipos de datos simples. En este caso habría que comparar carácter por carácter, C trae consigo la función strcmp() para tal propósito.

###### SCANF()
La función scanf() recibe un puntero como segundo argumento por lo que, en este caso no es necesario usar &. Esta función solo lee hasta el primer espacio, de ahí que si se introduce una frase entera solo recogerá la primera palabra. 

##### ESTRUCTURAS
Las estructuras son una forma de agrupar información. Son parecidas a los objetos de los lenguajes orientados a objetos, pero más sencillas, ya que no contienen métodos, solo información. Primero se declara una estructura con la palabra clave struct, el nombre y entre corchetes las diferentes variables que lo conforman, llamadas compos. Para inicializar alguna de las variables que forman los campos de la estructura se usa la notación del punto. Si solo se va a usar la estructura una vez no es necesario darle un nombre, simplemente se coloca el nombre de la variable que va a hacer uso de la estructura después de los corchetes.

##### TIPOS DE DATOS AVANZADOS
La directivas de preprocesador son código que se ejcuta antes que el compilador. La directiva #define sirve para definir constantes, es decir valores que no cambian. Aunque se pueden definir las constantes en cualquier parte del programa, la convención es hacerlo en la parte superior, además se suelen escribir en mayúsculas y usando barras bajas, para diferenciarse de las variables. Otra diferencia con las variables es que no usan el operador de asignación =, simplemente se escribe el nombre y el valor con un espacio en el medio. Los valores también pueden ser expresiones (por ejemplo 2 + 2). Existen algunas constantes predefinidas, por ejemplo NULL, que viene definida en el módulo <stddef.h>.

La diferencia entre la directiva #define y const radica en que al declarar una constante, empleando const, ésta tiene un tipo definido, mientras que  con #define simplemente es una serie de caracteres que el programa coloca en aquellos lugares donde se haya referenciado. Las directivas no pasan por el control de tipo de datos del compilador por lo que hay que tener cuidado con esto.

La palabra clave typedef sirve para crear un nombre propio para un tipo de dato existente. Por ejemplo typedef int Numero. Ahora se puede usar numero como tipo de variable, por ejemplo, Numero n1 = 5. Sirve para hacer el código más fácilmente legible dándole nombres personalizables a tipos de datos existentes, además, en caso de necesitar cambiar el tipo, solo se necesita cambiar en un solo sitio y el cambio se aplicará a todas las variables de dicho tipo. También mejora la portabilidad, ya que los tipos pueden cambiar según el caso, por ejemplo un int corresponde a 4 bytes en algunas arquitecturas pero solo a 2 en otras. Al cambiar de plataforma solo se cambiaría el tipo en el typedef y todas las variables que usen ese tipo pasarían de 4 bytes a 2 o viceversa. No es una buena práctica usar typedef para los structs.



