---
title: 'Generalidades'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
id: 1
---

##### NODEJS
Node es un entorno de ejecución construido sobre el motor V8 de google Chrome que permite ejecutar javascript fuera del navegador. Una vez instalado Node, se puede entrar en la consola de Node ejecutando el comando node en el terminal. Para ejecutar archivos de javascript, se ejecuta el comando node [nombre_del_archivo]

##### COMMONJS VS ECM MODULES
En el inicio de javascript, todo era global por defecto. En NodeJS, cada archivo .js se maneja como un módulo CommonJS separado. Esto significa que otros archivos no pueden acceder a variables, funciones, clases, etc de forma predeterminada, sino que se debe indicar explícitamente al sistema de módulos qué partes del código deben exportarse.

Por defecto, NodeJS trata el código de JavaScript como módulos CommonJS. Debido a esto, los módulos CommonJS se caracterizan por la declaración require para las importaciones de módulos y module.exports para las exportaciones de módulos. Aunque lo normal es que module.exports sea un objeto, puede ser una variable o una función.

Para generar módulos ES en un paquete NodeJS se cambian las extensiones de archivo de .js a .mjs. Y luego se importan usando import. Otra opción es añadir "type : module" al archivo package.json, lo cual hace innecesario el uso de la extensión .mjs. Alternativamente, se puede instalar y configurar un transpilador como Babel para compilar la sintaxis de un módulo ES hasta la sintaxis CommonJS. Es por eso que React permite usar módulos ES sin necesidad de configurar nada.

El sistema de módulos CommonJS está integrado en NodeJS y era el estándar para sus módulos. Como resultado, existen muchas bibliotecas y módulos de Node.js escritos con CommonJS. En el lado del cliente, la mayoría de navegadores soportan los módulos ES, por lo que se pueden usar sin problemas.

Es necesario añadir la extensión de archivo a todas las importaciones de archivos cuando se trabaja con módulos ES, a diferencia de CommonJS. Esto se debe a que NodeJS distingue entre unos módulos y otros según la extensión. De forma predeterminada, los archivos con la extensión .js se tratarán como módulos CommonJS, mientras que los archivos con la extensión .mjs se tratarán como módulos ES. Los módulos ES pueden importar módulos CommonJS, pero no al revés. Los módulos CommonJS no pueden importar módulos ES. No se puede importar archivos .mjs desde archivos .js.

Otra diferencia es que las importaciones de CommonJS se resuelven dinámicamente en tiempo de ejecución. La función require() simplemente se ejecuta en el momento en que se ejecuta el código y puede ser llamada en cualquier lugar de él. Con los módulos ES, las importaciones son estáticas, lo que significa que se ejecutan en el momento del ‘parse’. Por eso se hace hoisting de las importaciones. Se mueven implícitamente al principio del archivo. Por lo tanto, no se puede importar justo en el medio del código, como si se podría en CommonJs. En caso de necesitar importar módulos en tiempo de ejecución, se debería usar un import dinaḿico.

Es una buena práctica guardar el valor devuelto por la función require en una constante para que no pueda ser modificado accidentalmente.

##### IMPORTACIONES
El principio de responsabilidad única indica que cada archivo debe hacer solo una cosa y debe hacerla bien. Cuando se usa la función require para importar un archivo de javascript no es necesario incluir la extensión .js. Al importar el archivo, si éste contiene código, éste se va a ejecutar de manera automática. Si en el archivo importado hay definidas variables o funciones, no se van a poder ejecutar en el archivo que lo importa. Esto es debido a que cada archivo es un módulo encapsulado, por lo que para acceder a su contenido es necesario exportarlo. La forma tradicional de exportar es “module.exports = {}”, dentro del objeto se indica todo lo que se desea exportar. Todo aquello que contenga un archivo que no sea exportado es privado de ese archivo.

Un aspecto importante a destacar es que, al usar typescript, se utiliza import en lugar de require porque no se está utilizando Node en su forma original, sino que se usa Node con TypeScript. TypeScript permite utilizar las características más recientes de ECMAScript, incluyendo la sintaxis import. De esta manera, aunque require es la forma tradicional de importar módulos en Node, al inicializar TypeScript, es posible usar import para una sintaxis más moderna.

##### GLOBAL KEYWORD
Los objetos globales de javascript, como por ejemplo console, o las funciones como setTimeout() son propiedades del objeto global de navegador window. Al ejecutar console.log(), en realidad lo que se ejecuta es window.console.log(). En NodeJS, el objeto window no existe, por lo que estas propiedades se encuantran en el objeto global.

This, en el alcance global de Node es el objeto module.exports actual, no el objeto global. Esto es diferente de un navegador donde el alcance de global es el objeto de ventana global. Es decir, teniendo en cuenta que cada archivo js es un módulo en sí mismo, this hace referencia a aquello que se coloque como valor de module.exports. Si el módulo no exporta nada, el valor de this en ese caso será undefined.

##### MANEJO DE ERRORES
Existen dos tipos de errores, operativos y de programación. Los errores operativos representan problemas de tiempo de ejecución y se esperan en el tiempo de ejecución de Node. Deben tratarse de manera adecuada, pero no significa que la aplicación en sí tenga errores. Un ejemplo sería error al conectarse a un servidor o que éste devuelva un status 500. Los errores de programación es lo que se conoce como bugs.

El objeto de error es un objeto integrado en el tiempo de ejecución de Node. Brinda un conjunto de información sobre un error cuando ocurre. Tiene una propiedad error.stack que ofrece un seguimiento del stack que muestra de dónde vino el error. También enumera todas las funciones que se llamaron antes de que ocurriera el error. Es muy útil para depurar ya que también imprime el mensaje de error.

##### INICIO
Para iniciar un proyecto con Node, se ejecuta el comando 'npm init' dentro de la carpeta de destino. Esto crea el archivo package.json presente en todos los paquetes de Node y que muestra información sobre dicho paquete. Un apartado muy importante del archivo package.json es el de scripts, ya que permite establecer comandos para ejecutar diferentes acciones. Por ejemplo, se puede crear un script llamado start, que ejecuta el comando “node src/app.js”, app.js sería en este caso el archivo de entrada, y ahora se puede ejecutar con el comando 'npm run start' o en el caso de start, al ser un script especial, solo 'npm start'.

Para no tener que ejecutar npm start cada vez que se haga algún cambio, se puede usar el paquete nodemon, que recarga la aplicación cada vez que detecta un cambio. Nodemon se debe instalar como una dependencia de desarrollo con la flag -D, pues no está hecho para ser usado en producción. Normalmente todos los proyectos traen un script start para iniciar el proyecto en producción, un script dev para desarrollo, un script test y un script build.

A la hora de diseñar la organización de las carpetas y archivos de la aplicación, una buena prácica consiste en crear una carpeta llamada src en el mismo nivel que el package.json.

##### DIRNAME VS PROCESS.CWD()
En Node, tanto process.cwd() como la variable __dirname se utilizan para obtener las rutas de directorio, pero tienen propósitos diferentes. La diferencia clave es que process.cwd() devuelve el directorio de trabajo actual desde el que se inició el proceso de Node, mientras que __dirname devuelve el nombre del directorio del módulo actual (el archivo en el que se ejecuta el código). Esto significa que process.cwd() puede cambiar según dónde se ejecute el proceso, mientras que __dirname es constante y apunta a la ubicación del archivo de script. Process.cwd() proporciona el directorio donde se ejecutó el comando de Node, independientemente de dónde se encuentre el script. El objeto process tiene un método llamado chdir(), usado para cambiar el directorio de trabajo.

__dirname es una variable incorporada en Node que proporciona la ruta absoluta del directorio que contiene el archivo de javascript actual (el archivo en el que se utiliza __dirname). A diferencia de process.cwd(), que depende de dónde se inicia el proceso, __dirname siempre apunta al directorio del archivo de script. 

El módulo de Node Path sirve para trabajar con rutas. Un método interesante es path.parse(__dirname) que devuelve información sobre los distintos componentes de la ruta por separado, haciendo que trabajar con ellas sea mas fácil que con el string completo. Otro método interesante es path.join(), que sirve para crear rutas a partir de diferentes segmentos. 