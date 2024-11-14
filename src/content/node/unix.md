---
title: 'Unix'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


##### EXEC VS SPAWN
Para ejecutar comandos con node se pueden usar las funciones exec y spawn. Con spawn solo se puede ejecutar un comando, que será el primer argumento, y en caso de querer usar flags, éstas irán en un array que será el segundo. Exec si permite ejecutar el comando con las flags. Exec tiene un callback con los argumentos error, stdout y stderr. Esta diferencia se debe a que exec simplemente ejecuta el comando tal cual en una shell, mientras que spawn lo que hace es crear un nuevo proceso, no tiene nada que ver con la terminal.

Otra diferencia es que spawn devuelve el output en forma de string, y se puede manejar como tal,  subprocess.stdout.on(‘data’, ()=>{}). Exec, por su parte, devuelve todo en un solo objeto, pudiendo ocasionar problemas de memoria. Exec está construido encima de spawn, primero lanza una console y luego ejecuta en ella los comandos pasados como argumento.

Shell ejecuta los comandos interactuando con el sistema operativo usando llamadas al sistema, esto es debido a que shell es una aplicación escrita en C. La shell por defecto en la mayoria de distribuciones de Linux es shell. Zsh es un poco mas avanzada que bash, pero es compatible con ella, es decir, puede ejecutar scripts de bash. Zsh es la shell por defecto de mac. Se puede ver las shells disponibles en el sistema en el archivo /etc /shells. Para cambiar la shell por defecto se ejecuta el comando chsh -s  /bin/ bash. Las shells se abren a través de la terminal, no es posible hacerlo de otra manera.

Los alias consisten en darle un nombre a un comando y usar ese alias para ejecutarlo, por ejemplo alias runindex=”node index.js”, esto hace posible ejecutar simplemente runindex. Para borrar un alias se usa el comando unalias. Los alias tienen la máxima prioridad, por lo que si crea un alias con un nombre igual al de un comando, por ejemplo ls, el alias trndrá prioridad. Para poder ejecutar el comando desde cualquier directorio del sistema se le debe escribir la ruta completa.

En términos de prioridad, después de los aliases se encuentran las funciones creadas por el programador y luego, en caso de coincidir ninguna función, las funciones built-in, un ejemplo de estas funciones sería echo.

Para no tener que escribir toda la ruta completa cada vez que se necesita ejecutar un comando (que al final no son mas que archivos de scripts), se añade la ruta al path, de manera que al ejecutar un comando la shell buscará en las rutas que se encuentran en la variable $PATH. Así, en vez de tener que escribir / bin/bash se puede acortar a simplemente ls, ya que la ruta /bin se encuentra en el path y la shell buscará ahñi el archivo ls. Cuando se cambia la versión de node mediante nvm, se actualiza el path para que ahora apunte a la nueva versión. Para modificar manualmente el path, ser hace reasignando la variable de la siguiente manera PATH=’$PATH:nueva-ruta’.

La variable PATH también está disponible en node, se accede a ella mediante process.env.PATH. Lo que ocurre es que cuando unix va a ejecutar node, le pasa la varible PATH al proceso de node. Hay que recordar que el objeto process hace referencia al propio proceso que se crea con node al ejecutar un archivo de js y env hace referencia a las variables de entorno.

Para crear una nueva variable de entorno se define una variable en la terminal. Por defecto esta variable es local a esa terminal y desaparece una vez que el proceso termina, para convertirla en una variable de entorno se debe exportar mediante export [variable]. Entre el nombre de la variable, el signo igual y el valor no debe haber espacios. Se pueden ver todas las variables de entorno en la terminal con el comando env. El hecho de exportar la variable hace que esté disponible para sus procesos hijos, pero hay que tener en cuenta que si se abre una nueva terminal, ésta no tendrá acceso a la variable aunque se haya exportado en la otra consola. Las variables de entorno de eliminan usando unset [variable]. 

Cuando se usa spawn, node busca en la variable PATH el archivo ejecutable correspondiente, por ello solo se puede usar con nombres de ejecutables pero no con alias o funciones. El único propósito de spawn es ejecutar archivos, y con ello crear nuevos procesos. Spawn puede ejecutar archivos que no se encuentren en el path, pero se debe indicarle la ruta absoluta en el primer argumento. Spawn acepta un objeto como tercer parámetro, que permite definir las variables de entorno que se le pasan al proceso que se inicia, se puede omitir, ya que por defecto serán process.env.

El comando source ejecuta un archivo de bash y además, hace accesibles todas sus funciones, aliases y variables desde la terminal, de manera que se pueden llamar directamente desde ella. Se puede abreviar con ../script.sh, debido a que el sourcing es muy común.


##### STANDARD INPUT, OUTPUT Y ERROR
Existen dos directorios bin, uno en el directorio raíz y otro en los directorio usr, en el primero se guardan los ejecutables del sistema operativo, por ejemplo cat o ls y no se deben mezclar con los scripts que cree el usuario, que irán en el otro directorio.

Pr defecto, al iniciar un proceso en la consola, el stdin por defecto es la terminal, que a su vez está conectada al teclado. El stdout y stderr por defecto también son la terminal, que está conectada con el monitor. Estos streams están disponibles, una vez más en el objeto process. Al ser streams, se puede capturar el evento ‘data’. El objeto console, por defecto escribe en el stdout, es lo mismo que stdout.write()

Se puede importar argv de node:process que da acceso a los argumentos del comando introducido, por ejemplo, en el comando node . ‘filepath’, se puede acceder a los tre elementos del comando como elementos de un array, por ejemplo argv[2] sería filepath. Para terminar la ejecución se usa la función exit, también importada de process, que siempre debe recibir un código, 0 en el caso de que toda salga bien