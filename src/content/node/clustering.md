---
title: 'Clustering'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


La agrupación en clústeres permite crear múltiples procesos de trabajo para manejar las solicitudes entrantes, lo que resulta en un mejor rendimiento y una mejor utilización de los recursos del sistema.

La agrupación en clústeres implica la creación de múltiples procesos de trabajo que comparten la carga de trabajo entrante. Cada proceso se ejecuta en su propio event loop, utilizando los núcleos de CPU disponibles. El proceso principal gestiona los procesos de trabajo, distribuye las solicitudes entrantes y maneja las errores del proceso.

El uso de clusters permite el procesamiento paralelo de solicitudes en varios núcleos del CPU, lo que mejora el rendimiento y la capacidad de respuesta de la aplicación. Permite una mejor utilización de los recursos disponibles del sistema, especialmente en máquinas con múltiples núcleos de CPU. Además, mejora la escalabilidad al manejar solicitudes simultáneas en paralelo. A medida que aumenta la carga de trabajo, se pueden crear dinámicamente procesos de trabajo adicionales para distribuir la carga de manera efectiva. Por último, si un proceso de trabajo falla o deja de responder, el proceso principal puede detectar el fallo y reiniciar el proceso de trabajo automáticamente. Esta tolerancia a fallos garantiza que la aplicación permanezca disponible incluso en presencia de fallos en el proceso.


Generalmente, cuando llega una petición, esta entra se ejecuta en un único hilo, con un solo event loop. Esto puede ser un problema si la aplicación lleva a cabo trabajos que requieren de mucha computación, lastrando al servidor a la hora de manejar nuevas peticiones. Si el trabajo que realiza no se pasa al eventpool o al sistema operativo, entonces se bloquean las peticiones hasta que se termine el trabajo. Para evitar esto se usa el clustering. El cluster manager no ejecuta ningún código por sí mismo, su trabajo es monitorear el estado de las instancias de la aplicación y crear más en caso necesario, reiniciarlas, enviarles información, etc. La primera instancia de Node que se crea se convierte automáticamente en el cluster manager y se encarga de manejar los nodos workers.

Existe el módulo cluster que viene incluido en Node. Éste tiene un método llamado fork(), que al ser ejecutado vuelve a ejecutar el archivo index.js, creando una segunda instancia del programa, pero con una diferencia. Al requerir el módulo cluster, este cuenta con una propiedad llamada isMaster, con el valor de true si esa instancia es el cluster manager. Cada nodo hijo tiene solo un hilo y tiene su threadpool independiente.

Al usar clustering, el objeto cluster puede escuchar el evento 'cluster', que se activa cada vez que uno de los hijos se elimine. El callback recibe como argumentos el worker, el código y la señal. Un buen uso para este evento es hacer fork de nuevo para reiniciar el nodo caído.

El módulo cluster permite que haya varias aplicaciones escuchando en el mismo puerto, cosa que en condiciones normales no se podría hacer. Lo que ocurre es que este módulo toma el puerto y lo utiliza para sí mismo, de manera que todas las peticiones van al proceso principal, que luego enviará las peticiones a las demás instancias y las coordina. Se puede enviar información desde el proceso padre a las instancias usando el método worker.send(), y viceversa usando process.send(), luego en los procesos hijos o padre escuchar el evento message. En el proceso principal, process.send() no tendrá ningún efecto al no tener un proceso padre. Fork() solo se utiliza para crear nuevos procesos en aplicaciones de Node, y además crea una via de comunicación entre ellos. Los eventos escuchados por cluster, pueden ser disparados por cualquiera de los hijos, por ejemplo 'listening' se dispara cuando alguno de los hijos empieza a escuchar (en caso de ser un servidor). Se disparará una vez por cada instancia.

##### PM2
Se ejecuta con el comando pm2 start index.js -i 0. La flag -i sirve para especificar el número de instancias, en caso de 0, se crearán la misma cantidad de instancias que núcleos lógicos tenga el sistema. Con el comando pm2 monit, se puede ver un dashboard con métricas de los distintos procesos. Pm2 es muy útil en proucción ya que, si alguna de las instancias falla, pm2 la reiniciará automáticamente. Para borrar las instancias creadas, pm² delete [nombre]