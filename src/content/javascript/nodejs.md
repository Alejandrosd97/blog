---
title: 'NodeJs'
id : 1
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### NODEJS
Node es un entorno de ejecución construido sobre el motor V8 de google Chrome que permite ejecutar javascript fuera del navegador. Una vez instalado Node, se puede entrar en la consola de Node ejecutando el comando node en el terminal. Para ejecutar archivos de javascript, se ejecuta el comando node [nombre_del_archivo]

Javascript es single-threaded y su mayor parte es bloqueante, es decir, hasta que no se termina la ejecución de una sentencia del código no pasa a la siguiente, de manera que si la primera no se resuelve, como podría ser un bucle while infinito, las instrucciones posteriores no se ejecutarán nunca

Cuando se ejecuta un archivo de javascript, se crea una función global que se envía al stack, las funciones presentes en el código del archivo se van enviando al stack en orden descendente, una vez  complatada la función, se elimina del stack y se coloca en el stack la siguiente, se ejecuta ahora esta  y así sucesivamente hasta que se ejecuta todo el código, momento en el que se elimina la función global del stack. Cuando se utiliza un callback, para evitar bloquear la ejecución del programa durante el tiempo que toma la función, la función de callback se pasa a una librería llamada libuv, de manera que para el stack la función que llama a ese callback se considera como ejecutada, se elimina del stack y pasa a la siguiente, mientras que libuv se encarga de ejecutar la función de callback, devlviéndola al call stack una vez completada. Libuv trabaja mediante el algoritmo FIFO entre las tareas que ya estén completadas

##### EVENT LOOP
El bucle de eventos permite a Node realizar operaciones de E/S sin bloqueo a pesar de que JavaScript tiene un solo thread. Se realiza asignando operaciones al sistema operativo siempre que sea posible. Se trata de un bucle infinito que espera tareas, las ejecuta y luego duerme hasta que recibe más tareas. Ejecuta tareas de la cola de eventos solo cuando stack de llamadas está vacío, es decir, no hay ninguna tarea en curso. ermite utilizar callbacks y promesas. El bucle de eventos ejecuta las tareas comenzando primero por la más antigua.

Cuando se inicia Node.js, inicializa el bucle de eventos, procesa el script de entrada proporcionado que puede realizar llamadas API asíncronas, programa temporizadores y luego comienza a procesar el bucle de eventos. 

Cuando se completa una tarea asíncrona en libuv, el eventi loop espera a que el call stack esté vacío para pasar el callback al callstack. El flujo de ejecución normal no se detiene para ejecutar una función de callback. Los callbacks de setTimeOut y setInterval tienen prioridad auqneu tampoco interrumpen el flujo de ejecución normal.

##### INICIO
Para iniciar un proyecto con node se ejecuta el comando npm init dentro de la carpeta de destino. Esto crea el archivo package.json presente en todos los paquetes de node y que muestra información sobre dicho paquete. Un apartado muy importante del archivo package.json es el de scripts que permite establecer comandos que van permitir ejecutar diferentes acciones. Por ejemplo, se puede crear un script llamado start, que ejecuta el comando “node src/app.js”, app.js sería en este caso el archivo de entrada, y ahora se puede ejecutar con el comando npm run start o en el caso de start, al ser un script especial, solo npm start.

Para no tener que ejecutar npm start cada vez que se haga algún cambio, se puede usar nodemon, que recarga la aplicación cada vez que detecta un cambio. Nodemon se debe instalar como una dependencia de desarrollo con la flag -D, pues no está hecho para ser usado en producción. Normalmente todos los proyectos traen un script start para iniciar el proyecto en producción, un script dev para desarrollo, un script test y un script build.

A la hora de diseñar la organización de las carpetas y archivos de la aplicación, una buena prácica consiste en crear una carpeta llamada src en el mismo nivel que el package.json.

Si hay advertencias en los archivos de configuración se puede entrar en command palette y ejecutar reload window. A veces es necesario para que se apliquen los cambios en los archivos de configuraciones.

##### ARCHIVOS
Para trabajar con archivos, node proporciona el paquete fs. Contiene algunos métodos como mkdir() para crear directorios, readFile() para leer archivos o writeFile() para leerlos

##### IMPORTACIONES
El principio de responsabilidad única indica que cada archivo debe hacer solo una cosa y debe hacerla bien. Cuando se usa la función require para importar un archivo de javascript no es necesario incluir la extensión .js. Al importar el archivo, si éste contiene código se va a ejecutar. Si en el archivo importado hay definidas variables o funciones, no se van a poder ejecutar en el archivo que lo importa. Esto es debido a que cada archivo es un módulo encapsulado, por lo que para acceder a su contenido es necesario exportarlo. La forma tradicional de exportar es “module.exports = {}”, dentro del objeto se indica todo lo que se desea exportar. Todo aquello que contenga un archivo que no sea exportado es privado de ese archivo.

Un aspecto importante a destacar es que, al usar typescript  se utiliza import en lugar de require porque no se está utilizando Node en su forma original, sino que se usa Node con TypeScript. TypeScript permite utilizar las características más recientes de ECMAScript, incluyendo la sintaxis import. De esta manera, aunque require es la forma tradicional de importar módulos en Node, al inicializar TypeScript, es posible usar import para una sintaxis más moderna.

##### MÓDULO HTTP
Node.js tiene un módulo incorporado llamado HTTP, que permite a Node.js transferir datos a través del Protocolo de transferencia de hipertexto (HTTP), es decir ofrece la funcionalidad de un servidor HTTP. Para crear un servidor se usa la función createServer(), y se le pasa un callback que será el código a ejecutar cuando alguien realice una petición. El método write() constituye el cuerpo de la respuesta

```
import {createServer} from "node:http";

//create a server
createServer(function (req, res) {
  res.write('¡Hola mundo!'); //write a response to the client
  res.end(); //end the response
}).listen(5000); //the server object listens on port 8080 

```

Se pueden añadir headers a la respuesta mediante el método writeHead(), por ejemplo para servir archivos HTML:

```
import {createServer} from "node:http";

//create a server
createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('¡Hola mundo!'); //write a response to the client
    res.end(); //end the response
}).listen(5000); //the server object listens on port 8080 

```


##### NPM
Es el gestor de paquetes de javascript y viene por defecto cuando se instala Node. Cada aplicación tiene un archivo package.json. Este archivo se crea con el comando npm init y contiene toda la información relevante sobre la aplicación, por ejemplo las librerías que necesita la app para funcionar y sus versiones o los scripts de NPM. El motivo de listar las dependencias radica en que la carpeta node_modules no se añade a los repositorios de git, por lo que al clonar el código es necesario installar todas las dependencias de nuevo. Antes de npm versión 5.0.0, cuando se instalaba un paquete con npm install [paquete] era importante añadir la flag --save para que se añadiera al apartado dependencies del archivo package.json, pero en versiones modernas no es necesario. Una opción interesante es la opción --save-dev para paquetes necesarios en desarrollo pero en producción, por ejemplo nodemon. Para instalar solo las dependencias de producción pero no las de desarrollo se usa la flag --production en el comando npm install. Si no se indica lo contrario, npm instala la última versión disponible del paquete, pero se puede instalar una versión en concreto colocando una arroba entre el nombre del paquete y la versión, por ejemplo npm install lodash@4.17.3. Las versiones tienen tres numeros. El de más a la derecha es la versión de parche, que arregla pequeños bugs, el del medio es el numero de versión menor, significa nuevas funcionalidades añadidas pero que no rompen las aplicaciones que usan el paquete. El número de la izquierda es el número de versión mayor e implica cambios importantes que sí rompen la aplicación. En el archivo package.json, el símbolo ^ indica que al instalar el módulo, se instale la última versión menor, pero manteniendo la versión mayor. El símbolo ~ indica sirve para mantener al versión menor e instalar solo la última versión de parche.


##### WEB SOCKETS

