---
title: 'Código binario'
id: 1
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---

##### NOTACIÓN DECIMAL

Para entender cómo funciona el codigo binario primero se debe entender como funcionan el sistema de numeración decimal. Normalmente escribimos números usando algo llamado notación de valor posicional decimal. Notación de valor posicional significa que cada posición en un número escrito representa un orden de magnitud diferente; decimal, o base 10, significa que los órdenes de magnitud son factores
de 10, y cada lugar puede tener uno de diez símbolos diferentes, del 0 al 9.

El número trescientos cincuenta y uno se escribe en notación decimal como 351. El 3 está en el lugar de las unidades, lo que significa que su valor es 1 × 1 = 1.
El 5 está en el lugar de las decenas, lo que significa que su valor es 5 × 10 = 50. El 3 ocupa el lugar de las centenas, lo que significa que su valor es 3 × 100 = 300. El valor total es el
suma de todos los lugares: 1 + 50 + 300 = 351.

Dado que estamos trabajando en base 10, cada cifra es un potencia de 10, las unidades corresponden a 10^0, que equivale a 1, las decenas a 10^1, que equivale a 10, centenas a 10^2, que equivale a 100, y así sucesivamente con los millares, decenas de millar, etc. Cuando se trabaja en notación decimal, sólo podemos tener diez símbolos, porque por definición cada lugar sólo puede representar diez valores diferentes. Del 0 al 9 son los símbolos que se utilizan actualmente, pero en realidad cualquier conjunto de diez símbolos únicos podría ser utilizado, con cada símbolo correspondiente a un determinado valor numérico.

##### NÚMEROS BINARIOS
El sistema numérico binario  consta de sólo dos símbolos. El binario sigue siendo un sistema de valor posicional, por lo que la mecánica fundamental es la misma que la del sistema decimal, pero hay algunas diferencias. Primero, cada lugar representa una potencia de 2, en lugar de una potencia de 10,y cada lugar sólo puede tener uno de dos símbolos, en lugar de diez. Esos dos símbolos son 0 y 1. 

Tomemos por ejemplo el número 1101, podría parecer que se trata del número mil ciento uno, pero en realidad se trata del numero 13, traducido a notación decimal. Cada cifra empezando por la derecha es una potencia de base 2. Por tanto 1 x 2⁰ = 1; 0 x 2¹ = 0; 1 x 2² = 4 y 1 x 10³ = 8, lo que en total suma 13.

Cada plaza en un número binario se conoce com bit (digital bit). Cada bit puede tener un valor de 1 o 0. Para que estas secuencias de bits sean más fáciles de gestionar, los ordenadores agrupan bits
juntos en conjuntos de ocho, llamados bytes. Teniendo en cuenta todo lo anterior, se puede calcular que un bit puede expresar 2⁸ valores diferentes, lo que hace un total de 256,  o lo que es lo mismo, de 0 a 255.



##### NOTACIÓN HEXADECIMAL
Además del decimal y el binario, existe otro sistema de notación importante de conocer en computación, se trata del hexadecimal. Éste es de base 16 y utiliza 16 símbolos. Además de los números del 0 al 9, utiliza las letras a, b, c, d, e y f para los 6 símbolos restantes, por lo que el número d equivaldría al 14 en decimal. Teniendo en cuenta que el sistema hexadecimal puede expresar 16 valores en un solo dígito es fácil hacer conversiones a binario puesto que cada dígito en hex equivale a 4 bits de información en binario. Por ejemplo el número 2f se traduciría como 0010 1111

##### NOTACIÓN SEXGESIMAL
En lugar de inventar un alfabeto de 60 símbolos distintos, los sumerios utilizaron una notación híbrida. Escribieron los números del 0 al 59 en la base 10 existente, pero trataron estos símbolos compuestos como números individuales en un sistema de base 60. Por ejemplo, los símbolos 11:23:13 representarían el siguiente número:  11 × 602 + 23 × 601 + 13 × 100 = 39,889 en base 10. Un ejemplo 
de uso de este sistema es la representación horaria.

##### CONVERSIÓN ENTRE NOTACIONES 
Para convertir un número decimal en binario, se divide entre dos, si el resto es 0, entonces se anota un 0 y si no lo es se nota un 1. el resultado se divide entre 2 otra vez y se anota otro 0 o 1 dependiendo del resto de la división, y así sucesivamente hasta que el resultado sea 1. El número binario equivalente será el conjunto de todos los números anotados durante el proceso en un orden tal que el último número es el bit más significante.

Para convertir un número de otro sistema numérico a decimal, se multiplica el valor de cada índice por un potencia de la misma base que la del sistema y un exponente equivalente al ínidce , empezando por la izquierda

A la hora de sumar dos números de base no decimal, si el número es mayor que la base, se divide entre ésta de manera que el resto es el número que se escribe y el cociente se lleva de carry para el siguiente índice

##### NÚMEROS CON SIGNO
Existen tres maneras de representar números con signo. La primera de ellas es la representación de la magnitud del signo. Es la forma más sencilla, utiliza el bit más relevante para especificar el signo y el resto para indicar la magnitud. Si el bit más significante es 1, el signo es negativo y si es 0 positivo. Esto cambia el rango de números que se pueden representar con una cantidad determinada de bits, por ejemplo con 4 bits se puede representar desde 7 hasta -7, mientras que sin signo el rango de números posible sería de 0 a 16. Una de las mayores desventajas de este sistema es que usa dos combinaciones para representar el número 0, por lo que solo se pueden representar 15 números y se deben llevar a cabo dos operaciones de comparación para determinar si el número almacenado. Además, las operaciones de suma son muy complicadas

##### COMPLEMENTO A 1
En este caso, el bit más significativo también se usa para representar el signo y el resto la magnitud. La diferencia es que la magnitud se representa en complemento de 1s. El complemento de 1s de un número se calcula colocando un 0 donde había un 1 y viceversa. Por ejemplo, el número 5 se representaría como 0101, mientras que el número -5 como 1010. el primer 1 representa el signo negativo mientras que 010 es el complemento de 1s de 101 (5). La cantidad de números que pueden ser representados de esta manera abarca desde -  (2^n- 1  - 1) hasta  + (2^n- 1  - 1). La desventaja que presenta es que existen dos combinaciones posibles para el 0, 0000 y 1000 (que sería -0). Esto, además de perder una combinación que podría ser usada para representar otro valor añade una mayor dificultad a la hora de hacer comparaciones. A la hora se sumar un número positivo y otro negativo, en caso de que los bits más signiticativos resulten en un carry para el siguiente bit, el resultado será erróneo. Lo que se hace en estos casos es sumarle el carry al resultado en lugar de cargarlo en el siguiente bit de la izquierda. La facilidad de hacer sumas y restas con números binarios es la principal ventaja del complemento de 1s respecto de la magnitud de signo. Se espera que el resultado se de en la misma cantidad de bits de los operandos, por tanto, suponiendo que los números de 32 bits, (1 bit para el signo y el resto para la magnitud) si el bit número 30 produce un carry, este no se debe pasar al último bit, ya que este es el bit del signo. Esto es lo que se conoce como overflow o desbordameinto. Podría darse el caso de que dos número positivos dieran como resultado un número negativo por esta razón. Si ocurre un carry en la suma de los bits más significativos, se añade el carry al resultaod final

La diferencia entre carry y overflow, es que el carry se da cuando los bits más significativos generan un carry para el siguiente bit y overflow se da cuando la cantidad de bits no son suficientes para expresar el resultado. El carry no produce overflow ya que no se almacena junto con el resultado sino en un registro especial llamado flag register o process store register, por lo que el resultado si cabe en el registro correspondiente. 

##### COMPLEMENTO A 2
Esta es la representación que se utiliza hoy en día en los ordenadores. El bit más significativo representa el signo y el resto la magnitud. Para obtener el complemento de 2s, primero se calcula el complemento de 1s de un número y se le suma 1. Poe ejemplo, el complemento a 1 de 5 (101) sería 010, lo que al sumarle 1 quedaría en 011


##### EXTENSIÓN DE LOS BITS DE SIGNO
La extensión de signo es la operación de aumentar el número de bits de un número binario conservando el signo y el valor del número. Esto se hace agregando dígitos al lado más significativo del número, siguiendo un procedimiento que depende de la representación del número con signo  utilizada.

Por ejemplo, si se utilizan seis bits para representar el número 00 1010 (10) y la operación de extensión de signo aumenta la longitud de la palabra a 16 bits, entonces la nueva representación es simplemente "0000 0000 0000 1010". Así, se mantienen tanto el valor como el hecho de que el valor fuera positivo.

Si se utilizan diez bits para representar el valor "11 1111 0001" (-15) utilizando el complemento a dos, y este signo se extiende a 16 bits, la nueva representación es "1111 1111 1111 0001". Así, al rellenar el lado izquierdo con unos, se mantienen el signo negativo y el valor del número original.

El complemento a 2 tiene la ventaja de que solo utiliza una combinación para el 0, por lo que puede representar un valor más con el mismo número de bits, de – (2^n – 1) a (2^n-1 -1). En el caso del carry final, al sumar números representados mediante complemento a 2, simplemente se desecha, no se añade al resultado final como en el caso del complemento a 1. Esto se cumple siempre y cuando no ocurra desbordamiento. Otra ventaja es que las operaciones de adcición son más sencillas

