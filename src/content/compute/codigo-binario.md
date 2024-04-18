---
title: 'Código binario'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
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
Además del decimal y el binario, existe otro sistema de notación importante de conocer en computación, se trata del hexadecimal. Éste es de base 16 y utiliza 16 símbolos. Además de los números del 0 al 9, utiliza las letras a, b, c, d, e y f para los 6 símbolos restantes, por lo el número d equivaldría al 14 en decimal. Teniendo en cuenta que el sistema hexadecimal puede expresar 16 valores en un solo dígito es fácil hacer conversiones a binario puesto que cada dígito en hex equivale a 4 bits de información en binario. Por ejemplo el número 2f se traduciria como 0010 1111