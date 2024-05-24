---
title: 'Testing'
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



Las pruebas unitarias consisten en hacer tests de componentes concretos de la aplicación. Las pruebas de integración comprueba el funcionamiento de varios elementos en conjunto. Las pruebas deben ser fáciles de leer y escribir, confiables ,rápidas y principalmente unitarias. Las pruebas no hacen que la aplicación no tenga errores, las pruebas también pueden contener errores o estar mal planteadas. La pruebas no hacen la aplicación mas lenta o más pesada ya que nunca llegan a producción

Test driven development es una práctica de programación que consiste en escribir primero las pruebas (generalmente unitarias), después escribir el código fuente que pase la prueba satisfactoriamente y, por último, refactorizar el código escrito.

Una de las librerías más comunes para hacer testing es Jest. Una vez instalado el paquete se crea el archivo de configuración jest.config.js con el comando npx jest –init. Si se usa typescript se debe instalar también el paquete @types/jest y ts-jest. La función describe sirve para crear un testsuite, su primer argumento es el nombre del testsuite y la segunda una función en cuyo interior de definen los tests que se desee ejecutar mediante la función test(). No es necesario importar ninguna de estas funciones ya que están disponibles de manera global gracias al archivo de configuración.