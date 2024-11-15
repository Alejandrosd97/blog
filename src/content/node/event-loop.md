---
title: 'Event loop'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---







##### ¿ES NODE SINGLE-THREADED?
Node ejecuta el event loop principal en un solo hilo. Sin embargo, eso no significa que todo su procesamiento se realice en ese único hilo. Las tareas asíncronas en Node se ejecutan en otros subprocesos internos. Cuando se completan, el código del callback, o del error, se devuelve al hilo único principal. Sin embargo, a veces es deseable crear otro proceso para ejecutar código. El módulo child_process crea nuevos procesos secundarios del proceso principal de Node y es posible ejecutar comandos de shell con estos procesos secundarios.

##### MOTOR V8
Node está escrito en C++ porque utiliza el motor v8 de Google que también utiliza C++. El motor puede ser incorporado en cualquier aplicación que esté escrita en C++, en este caso Node. Otro componente importante de Node es libuv, también escrito en C++ y que le da a Node acceso a utilidades del sistema operativo como el sistema de archivos.

En el código fuente de Node, la carpeta lib contiene todas las definiciones de funciones y módulos que se pueden requerir en un proyecto. La carpeta src, por su parte continene la implementación en C++. Node toma los argumentos de una función y los pasa a la versión de C++ de esa función. Esto se hace mediante process.binding(), que es lo que conecta javascript con C++. Luego el motor v8 convierte los valores de javascript a C++, por ejemplo, enteros, booleanos o strings.


##### EVENT LOOP
El event loop es el núcleo de un programa de Node, y cada programa tiene un solo event loop. Cada vez que se ejecuta el event loop se conoce como un tick. Se puede ver el event loop de manera parecida a un bucle while, que se ejecuta cuando se cumple una determinada condición, cuando ésta no se cumple, se termina el programa y se vuelve a la terminal.

La primera condición que se comprueba es si aún queda por ejecutar alguna función de setInterval(), setTimeout() o setInmediate(), la segunda es si queda pendiente alguna tarea de sistema operativo, por ejemplo un servidor HTTP escuchando en algún puerto. La tercera es si hay alguna operación de larga duración que todavía se está ejecutando, por ejemplo una llamada a una función dentro del módulo fs para leer un archivo del disco duro. Dentro del bucle, lo primero que se ejecuta son los callback de los timers (solo setTimeout() y setInterval()). Luego se ejecutan el resto de operaciones pendientes y los callbacks. Una vez hecho esto, se pausa la ejecución hasta que una tarea pendiente se completa o se cumple el tiempo de un timer. Luego se ejecutan los setInmediate() pendientes. El quinto y último paso es manejar los eventos ‘close’, por ejemplo en un stream, para ejecutar funciones de limpieza. Todo esto ocurre en cada tick.


##### THREADPOOL
Cuando se inicia un programa con Node, se crea una única instancia del event loop y un solo hilo. Esto hace que Node solo se pueda ejecutar en un único núcleo de CPU, por lo que no aprovecha un procesador con varios núcleos. Sin embargo, algunas de las funciones incluidas en las librerías estándar de Node no son single-threaded, ya que se ejecutan fuera del event loop.

Del lado de C++, algunas operaciones costosas computacionalmente se realizan fuera del event loop. En su lugar, hacen uso de algo llamado thread pool, que consiste en cuatro hilos disponilbes para ejecutar dichas operaciones. La cantidad de hilos se puede ajustar modificando la variable de entorno process.env.UV_THREADPOOL_SIZE. Las operaciones llevándose a cabo en el threadpool son las anteriormente definidas como operaciones pendientes.

Además del threadpool, libuv también ofrece acceso a funciones que hacen uso de código del sistema operativo subyacente. Esto es necesario para algunas operaciones de bajo nivel como por ejemplo hacer peticiones HTTP, ya que Node no tiene la capacidad de hacer eso. Lo que está ocurriendo es que la petición de red la está llevando a cabo el sistema operativo. Por tanto, es el sistema operativo quién decide como gestionar los hilos y no se bloquea la ejecución del código de javascript. Esto no tiene nada que ver con los hilos del threadpool.