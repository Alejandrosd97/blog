---
title: 'Process'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


##### PROCESS
Las variables de entorno permiten gestionar la configuración de las aplicaciones por separado del código base. La separación de configuraciones facilita la implementación en diferentes entornos. Debido a que el desarrollo se realiza principalmente en máquinas locales, las variables de entorno se colocan en variables de entorno locales o en el archivo .env local.

Cuando se inicia el proceso de Node, automáticamente se proporciona acceso a todas las variables de entorno existentes al construir el objeto env como una propiedad del objeto global llamado process. Estas variables son externas a la aplicación y residen en el sistema operativo o el contenedor de la aplicación en ejecución. Una variable de entorno es simplemente un nombre asignado a un valor.

Process.env es una variable global inyectada en tiempo de ejecución por la aplicación de Node.js para representar el estado del entorno en el que se encuentra la aplicación en el momento del inicio y utilizarlo en tiempo de ejecución. Por lo tanto, su uso básico es representar el estado del entorno del sistema de nuestra aplicación en la inicialización.

Node de forma nativa no carga archivos .env, por lo que es necesario utilizar el paquete dotenv para cargar el archivo y exponer los valores a través de process.env. Se crea el archivo dotenv en el directorio raíz del proyecto y se en el archivo index.js se importa dotenv y se ejecuta el método config()

El objeto process permite acceder a los argumentos y flags que se pasan a la apliación que unicia el proceso. Se hace mediante process.argv. 

Además de todo lo anterior, los procesos también le pasan el current working directory a los procesos hijos. Es algo importante a tener en cuenta ya que al usar rutas relativas, son relativas al cwd que se le ha pasado. En node se puede acceder al cwd con la función process.cwd(). También se puede modificar con process.chdir(‘/’), chdir acepta como argumento una ruta que puede ser relativa del cwd actual o una ruta absoluta. Esto puede dar problemas por ejemplo al leer un archivo usando el módulo fs, ya que si el archivo no se encuentra en el directorio raíz del proyecto, aunque el archivo a leer se encuentre en el mismo directorio, no se encontrará el archivo. Solo funcionará si se ejecuta el archivo (y por tanto se incia el proceso) desde el directorio donde se encuentra el archivo que usa el módulo fs, ya que de esta manera éste será el cwd y al usar fs.readFilesync(‘./test.txt’), la ruta al archivo si será correcta. Para solventar este problema se puede usar la función path.join() o path.resolve() junto con la variable global __dirname. La diferencia entre ambas funciones es que path.join() simplemente concatena segmentos y su retorno puede o no resultar en una ruta absoluta, mientras que path.resolve() siempre devuelve una ruta absoluta, utilizando la raíz del sistema operativo de destino como raíz o primer argumento con un / inicial como nueva raíz. La variable __dirname solo está disponible al usar commonJs, no cuando se utiliza los módulos ES y la sintaxis import.