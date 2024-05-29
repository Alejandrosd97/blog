---
title: 'Programación de tareas'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---






El programa Cron permite programar tareas para que se ejecuten en un momento determinado o de manera periódica. Consta de crond, que es el daemon que encargado de ejecutar las tareas, el archivo /etc/crontab, que almacena las tareas programadas en el sistema y el comando crontab. Las tareas del sistema son administradas por root, que es quien tiene el acceso al archivo crontab, aunque los usuarios también pueden programar sus propias tareas. Cada línea en el archivo corresponde a una tarea y tiene el siguiente formato: minutos, hora, día del mes, mes, día de la semana, usuario, comando. Para es día de la semana se usan números del 0 al 7, pudiendo ser el domingo el 0 o el 7. Para que se ejecute todos los días o todas las horas, se usa el símbolo * en el apartado correspondiente. Para establecer rangos, por ejemplo del día 20 a 25, se usa un guión (20-25). Para que se repita de manera periódica se especifica el inicio y acto seguido el periodo de tiempo separado por /, por ejemplo 5/10 para que se inicie en el minuto 5 y se repita cada 10 minutos. La columna de usuario especifica en nombre de qué usuario se ejecutará el script y la de comando, el comando a ejecutar. Si se quiere ejecutar un script se debe escribir la ruta absoluta. Para ver el archivo crontab se usa el comando crontab -l y para editarlo crontab -e.

Debido a la gran cantidad de tareas a ejecutar y la asiduidad de las mismas, existen directorios que ejecutarán todos los scripts que contengan en un momento determinado. Así, el directorio etc/cron.hourly ejecutará los scripts de su interior cada hora, /etc/cron.daily cada día y así sucesivamente, de manera que no es necesario programar la tarea en el archivo crontab. Para controlar quien puede utilizar Cron, existen los archivos /etc/cron.allow que especifica qué usuarios tienen permitido usar Cron y /etc/cron.deny que especifica cuáles no pueden. Si no existiera ninguno de los dos, estaría permitido de manera implícita para todos los usuarios.

Para programar tareas puntuales se puede utilizar el comando at [hora]. Esto abre una subshell para especificar los comandos a ejecutar y se pulsa control + D. Se puede indicar la hora de la manera HH:MM o también como un diferencial de tiempo con now + tiempo. El comando atq muestra las tareas, at -c [número_de_tarea] muestra el contenido de la tarea especificada mediante el número y atrm borra una tarea. Para controlar quién puede usar at se usan los archivos /etc/at.allow y /etc/at.deny de manera similar a Cron, con la diferencia de que si no existe niguno de los dos solo root podrá usar at.

En Systemd existen unas unidades llamadas timers que permiten programar tareas que se repitan de manera periódica o se ejecuten de manera puntual. Esxiten dos tipos, en primer lugar, los timers monolíticos sirven para ejecutar comandos justo después de arrancar el sistema, y en segundo lugar los timers en tiempo real, que sirven para ejecutar tareas de manera periódica y tienen un funcionamiento parecido a las tareas de cron. Se necesita crear dos ficheros, uno con la extensión .timer y otro con el mismo nombre pero con la extensión .service, que es donde se especifican los comandos a ejecutar.