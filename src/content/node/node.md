---
title: 'Administración'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

##### COMMONJS VS ECM MODULES
En el inicio de javascript, todo era global por defecto. En NodeJS, cada archivo .js se maneja como un módulo CommonJS separado. Esto significa que otros archivos no pueden acceder a variables, funciones, clases, etc. de forma predeterminada. Se debe indicar explícitamente al sistema de módulos qué partes del código deben exportarse

De forma predeterminada, Node.js trata el código JavaScript como módulos CommonJS. Debido a esto, los módulos CommonJS se caracterizan por la declaración require para las importaciones de módulos y module.exports para las exportaciones de módulos. Aunque lo normal es que module.exports sea un objeto, puede ser una variable o una función.

Para generar módulos ES en un paquete Node.js se cambian las extensiones de archivo de .js a .mjs. Y luego se importan usando import 

export function suma(a, b) {
        return a + b;
}
Otra opción es añadir type : module al archivo package.json, lo cual hace innecesario el uso de la extensión .mjs. Alternativamente, se puede instalar y configurar un transpilador como Babel para compilar la sintaxis de un módulo ES hasta la sintaxis CommonJS. Es por eso que React permite usar módulos ES sin necesidad de configurar nada.

El sistema de módulos CommonJS está integrado en Node.js y era el estándar para los módulos de Node.js. Como resultado, existen muchas bibliotecas y módulos de Node.js escritos con CommonJS. En el lado del cliente, la mayoría de navegadores soportan los módulos ES, por lo que se pueden usar sin problemas

Es necesario añadir la extensión de archivo a todas las importaciones de archivos cuando se trabaja con módulos ES, a diferencia de CommonJS. Esto se debe a que Node distingue entre unos módulos y otros según la extensión. De forma predeterminada, los archivos con la extensión .js se tratarán como módulos CommonJS, mientras que los archivos con la extensión .mjs se tratarán como módulos ES. Los módulos ES pueden importar módulos CommonJS, pero no al revés. Los módulos CommonJS no pueden importar módulos ES. No se puede importar archivos .mjs desde archivos .js.

Otra diferencia es que las importaciones de CommonJS se resuelven dinámicamente en tiempo de ejecución. La función require() simplemente se ejecuta en el momento en que se ejecuta el código y puede ser llamada en cualquier lugar de él. Con los módulos ES, las importaciones son estáticas, lo que significa que se ejecutan en el momento del ‘parse’. Por eso se hace hoisting de las importaciones. Se mueven implícitamente al principio del archivo. Por lo tanto, no se puede importar justo en el medio del código, como si se podría en CommonJs. En caso de necesitar importar módulos en tiempo de ejecución, se debería usar un import dinaḿico.

Es una buena práctica guardar lo que devuelve la función require en una constante para que no pueda ser modificado accidentalmente.