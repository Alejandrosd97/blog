---
title: 'Linux'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

##### MÓDULOS
Normalmente los sistemas operativos tienen estructura modular. Los módulos son partes del kernel que pueden ser activadas o desactivadas para añadir o quitar una funcionalidad determinada. Son archivos ubicados en el directorio /lib/modules/[version-del-kernel] y cuya extension es .ko. 

- lsmod: Lista los modulos cargados en memoria actualmente y aporta información sobre quién lo está utilizando.
- modinfo: Proporciona informacion mas detallada de un modulo.
- insmod: Carga un fichero .ko en la memoria, hay que indicarle la ruta del archivo .ko
- rmmod: Elimina un modulo, no es necesario escribir la ruta al archivo, al estar cargado lo puede reconocer por el nombre. Si se eliminia y el sistema lo está utilizando puede ser problemático, es recomendable usar la opcion -w, para que espere a que se deje de utilizar, aunque tambien es posible forzarlo con -f

##### BIOS
Significa Basic Input Output System y se trata de un firmware que se encuntra en ROM (Read Only Memory). Tiene dos partes fundamentales. En primer lugar, el setup, que es el menú desde el que se configuran diferentes opciones, como el orden de arranque. Se entra pulsando una tecla como f11, aunque puede variar. En segundo luagr, el proceso POST (Power-On Self-Test). Se encarga de que todos los componentes del ordenador funcionen correctamente antes de arrancar el sistema. Este es el primer proceso que se realiza en cualquier equipo informático tras pulsar el botón de encendido. Siempre se realiza antes de cargar el sistema operativo o cualquier otro software. De hecho, no es necesario que exista ningún sistema operativo instalado ya que POST está almacenado en la BIOS y está configurado para que sea el primer proceso que se lleva a cabo. En caso de detectarse un fallo en el proceso POST, el proceso de encendido se detiene y el sistema emite una serie de pitidos que identifican el defecto (podría ser la grafica lo que esta fallando) o, en placas base más modernas, aparece un código de error en un display situado en la propia placa base.

##### EFI/UEFI
La Unified Extensible Firmware Interface es una especificación que define una interfaz entre el sistema operativo y el firmware y que reemplaza a la antigua BIOS. Tiene mas funcionalidades que BIOS pero es retrocompatible con ésta. Presenta numeroas ventajas respecto de BIOS, entre ellas destacan su compatibilidad con particiones GTP, una interfaz gráfica mas amigable, la opción de arranque seguro y capacidad de arranque desde unidades más grandes, al no sufrir las limitaciones de MBR.

UEFI almacena toda la información sobre el inicio en un archivo .efi. Este archivo se almacena en una partición especial llamada partición del sistema EFI en el hardware. Dentro de esta partición contendrá el gestor de arranque.

##### SECUENCIA DE ARRANQUE
Cuando llega la corriente a la placa lo primero que se ejecuta es el firmware presente en la BIOS/UEFI. POST comprueba que todos los componentes funcionan bien. Se busca un cargador de arranque (bootloader) buscando en las diferentes unidades de almacenamiento existentes según el orden especificado en la BIOS/UEFI, puede ser desde el disco duro, usb o incluso a través de la red.

En el caso de que se use BIOS, se lee el primer sector de la unidad (MBR), que además donde se encuentra el codigo para buscar el gestor de arranque, que es quie sabe como hacer funcionar el sistema operativo
Si se emplea UEFI, al ser mas moderno, se ejecuta el gestor de arranque que se encuentra en una partición especial (ESP). Esta partición contiene los archivos necesarios para que el sistema UEFI arranque. Si la opcion de arranque seguro se encuentra activada, los sistemas operativos deben estar firmados digitalmente. Esto se hace para garantizar que un dispositivo arranca solo con el software de confianza para el fabricante de equipo original y no se ejecute ningún software que pueda contener malware. El gestor de arranque mas común es GRUB o su versión más moderna GRUB2.

##### PARTICIONES MBR Y GPT
La tabla de particiones Master Boot Record está asociada a BIOS. Se encuentra en el primer sector del disco y contiene una tabla con cuarto particiones, esto es poco, sobretodo en linux, donde se suelen utilizar más particiones que en windows. Cada una de las cuatro particiones disponibles se llama primaria y se puede usar una de ellas para crear mas particiones dentro en su interior, conocidas como extendidas o lógicas. La parte negativa es que no se podría ubicar el sistema operativo en una particion logica, y siempre debe estar en una primaria. Otro punto negativo de MBR es que no puede manejar particiones con un tamaño superior a 2Tb.

GPT (GUID Partition Table), por su parte, no funciona con BIOS, solo con UEFI, aunque sí es compatible con MBR. Soporta discos de hasta 9,4Zb y puede gestionar todas las particiones que soporte el sistema operativo hasta un máximo de 128.

##### PROCESOS DE INICIO
El proceso init es el primero que se ejecuta y suele tener el numero de proceso 1. Se pueden encontraar tres tipos de procesos encargados de iniciar y gestionar los procesos de linux:

###### SYSVINIT
Utiliza Script y niveles de ejecución para controlar el inicio, apagado y gestión de los procesos del sistema. Este es el sistema de inicio tradicional. Inicia y detiene procesos secuencialmente, según los scripts de inicio. El estado de la máquina se indica mediante niveles de ejecución, de manera que cada nivel de ejecución inicia o detiene una máquina de una manera diferente. En el archivo /etc/inittab se puede ver la configuración básica de este proceso, y muestra cosas como el nivel de ejecución por defecto o las acciones a tomar en sitauciones determinadas. Se definen los niveles de ejecución y que ocurrirá en cada uno de ellos. Se invoca al script rc pasándole el nivel de ejecución como un parámetro. Este script está presente en /etc/rc.d o /etc/init.d dependiendo de la distribución. El script ejecuta los archivos que hay en el directorio /etc/rc[número], el número corresponde al nivel de ejecución, ya que hay distintos para laos distintos niveles de ejecución. Estos archivos son enlaces que empiezan por S o K y que apuntan a scripts que están en /etc/init.d

| Nivel 0  |   Se apaga el sistema        |
| Nivel 1  |   Monousuario, solo para root, para hacer pruebas o solucionar problemas        |
| Nivel 2  |   Multiusuario, pero sin soporte de red |
| Nivel 3  |   Multiusuario con soporte de red |
| Nivel 4  |   Funciona igual que el 3 |
| Nivel 5  |   Multiusuario con interfaz gráfica |  
| Nivel 6  |   Reinicia el sistema |

- runlevel: muestra en console el nivel de ejecución actual
- init [número] / teilinit [número]: cambia el nivel de ejecución al númera especificado en el comando


###### SYSTEMD
Adoptado en los últimos años por la mayoría de destribuciones de linux como sistema de inicio. No utiliza niveles de ejecución y en su lugar agrupa los servicios en "targets", estableciendo en ellos dependencias y el orden de ejecución de los procesos. Systemd es extremadamente flexible y robusto, y no sigue una secuencia estricta para iniciar procesos. Al contrario que SysVinit, que se compone por varios scripts que se van llamando unos a otros y que en algunos casos depnden los unos de los otros, en Systemd hay un único programa que gestiona todo lo que ocurre con el sistema. Los target en Systemd tienen una función similar a los niveles de ejecución de Sysvinit, ya que sirven para agrupar los servicios que van a arrancar en una configuración determinada del sistema. Systemd utiliza unidades, éstas pueden ser de tipo automount, device, mount, path, service, snapshot, socket y target. Los servicios se agrupan en targets y son los equivalentes a los noveles de ejecución de SysVinit, de hecho hay targets compatibles con éstos. Cada unidad se define en un archivo con el nombre de dicha unidad, con una extensión que indica el tipo de unidad, por ejemplo ssh.service o poweroff.target. Dependiendo de la distribución, estos archivos se pueden encontrar en diferentes localizaciones como /usr/lib/systemd/system, /lib/systemd/system, o /etc/systemd/system.

En el caso de los sistemas que usan Systemd, los archivos target de los niveles de ejecución son un enlace a los equivalentes de Systemd, por ejemplo el runlevel5.target es un enlace a graphical.target. En el caso del comando systemctl sin parámetros, muestra las unidades que están activas en este preciso momento. Para mostrarlas estén activas o no y poder ver su estado se añade list-unit-files al comando.

se puede especificar una unidad en el comando systemctl list-dependencies (timers.target)

Para cambiar de target, por ejemplo de graphical a rescue (solo consola) o viceversa, se usa el comando systemctl isolate rescue/graphical. Para volver a la normalidad también valdría el reboot/default

##### PARTICIONES
Una partición es una división del espacio disponible en el disco, creando esencialmente múltiples dispositivos de bloque. Por ejemplo /dev/sda1 y /dev/sda2, son particiones de /dev/sda, que es el disco completo. Las particiones son extremadamente útiles para separar datos y, si se necesita un determinado sistema de archivos, es muy sencillo crear una partición en lugar de convertir todo el disco en un solo tipo de sistema de archivos. Al instalar un sistema Linux, se debe elegir en que parte del disco se va a instalar. En el caso de Linux, se necesitan al menos dos particiones, una para el sistema operativo y otra para el swap

###### SWAP
El área de intercambio o swap es el espacio que el sistema operativo usará como complemento a la memoria RAM. Se usa para asignar memoria virtual al sistema. Si el sistema tiene poca memoria, se utiliza esta partición para "intercambiar" piezas de memoria de procesos inactivos en el disco, de modo que no se quede atascado por la memoria.

##### SISTEMA DE ARCHIVOS
El sistema de archivos FAT (File Allocation Table) utiliza junto a la tabla de entrada de ficheros una tabla, llamada tabla de asignación de ficheros (o tabla FAT). FAT es un sistema de archivos sencillo, lo que lo le ha hecho ganar mucha popularidad en la gestión de discos y otras memorias secundarias externas y que sea aceptado por todos los sistemas operativos existentes. Por este motivo, también es utilizado como mecanismo de intercambio de ficheros entre sistemas operativos distintos y coexistentes en el mismo equipo. Sin embargo FAT tiene bastantes desventajas: Tiende a dejar fragmentos de los ficheros tras borrarlos, lo que con el tiempo ralentiza las operaciones de lectura y escritura; no es redundante a fallos, esto significa que ante fallos, como fallos eléctricos, puede dejar el sistema en un estado incongruente; fue diseñado para ficheros de tamaño reducido y no soporta permisos de seguridad.

##### CREACIÓN DE SISTEMAS DE ARCHIVOS
###### FAT32 - VFAT
Es el que ofrece la mayor compatibilidad con cualquier hardware o sistema operativo debido a su sencillez y antigüedad. Tiene como desventaja principal la incompatibilidad con particiones mayores a 2TB y la imposibilidad de crear archivos mayores a 4GB

###### NTFS
Desarrollado por Microsoft como sucesor de FAT32, elimina el máximo de 4GB para los archivos y de 2TB para las particiones, además de incluir más funcionalidades como permisos, cifrado o copias de seguridad. Su inconveniente es ser menos compatible que FAT32.

###### EXT4
Se trata de la última versión del sistema ext usado en Linux. Soporta archivos de hasta 16TB y particiones de hasta 1024PB.

###### XFS
Soporta todas las funcionalidades de un sistema de archivos moderno y permite particiones de hasta 16EB y archivos de 8EB.

###### BTRSF
Es más reciente y su uso está experimentando un crecimiento debido a sus funcionalidades como la posibilidad de crear un único sistema de archivos en varias particiones, la posibilidad de guradar los datos comprimidos de manera transparente al usuario y la creación de subvolúmenes y snapshots.

###### SWAP
Es el sistema de archivos para la partición de instercambio de Linux. Es invisible para el usuario y se emplea como memoria alternativa a la RAM.

##### GESTORES DE ARRANQUE
El más usado en la actualidad es GRUB2. Suele ofrecer una opciÓn llamada recovery mode, para recurrir a ella en caso de que haya algún problema en el aranque del sistema operativo. Esta versión carga solo los módulos estrictamente necesarios para poder cambiar configuraciones, por si hubiera algún error que está impidiendo el arranque correcto.

En un sistema instalado, GRUB carga el archivo de configuración /boot/grub/grub.cfg en cada arranque. El archivo grub.cfg no se debe editar manualmente. Para editar aquello que sí esta permitido se debe hacer mediante el archivo /etc/default/grub. Después de editar el archivo default se debe ejecutar el comando update-grub para que se apliquen los cambios. Desde el menú de GRUB2, en edit, también se pueden cambiar parámetros como init o quiet, pero solo tendrán efecto es ese arranque, no se guardan. Para que sea durardero, se debe editar el archivo default.

##### LIBRERÍAS COMPARTIDAS
Una librería es un archivo que contiene un conjunto de funciones, escritas en un lenguaje de programación, para ser utilizadas por programas, de forma que se no es necesario reescribir el código. Casi todo el software comparte funcionalidad, por ejemplo, acceder al disco, formularios, botones, por lo que estas librerías son de gran ayuda para simplificar la creación de prgramas. Estas librerías se encuentran en /lib o /usr/lib y aquellos directorios que se indiquen en el archivo etc/ld.so.conf. También se pueden especificar más lugares donde el sistema buscará estas librerías mediante la variable de entorno LD_LIBRARY_PATH, siendo esta localización la primera en cuanto a preferencia a la hora de buscar. Las librerías compartidas se vinculan a un programa en tiempo de ejecución, permitiendo que el código de la librería se cargue en memoria una única vez y pueda ser usado por varios programas, de esta forma se consigue que el tamaño del código sea menor con su correspondiente ahorro de espacio en memoria.

El archivo ld.so.conf importa mediante include todos los archivos que se encuantran dentro del directorio /etc/ld.so.conf.d. En caso de modificar alguno de estos archivos se debe ejecutar el comando ldconfig para que los cambios sean aplicados, ya que se crea un cache de archivos y directorios compartidos. El comando ldd [ruta_del_archivo] (list dynamic dependencies) indica las dependencias que tiene una librería. La extension .so significa shared object.

##### GESTORES DE PAQUETES
Los archivos .deb y .rpm son un único archivo ejecutable, al igual que los archivos .exe. En caso de usar repositorios de paquetes no se verán estos archivos, pero si se descargan los paquetes directamente, lo más probable es que vengan en estos formatos. Son exclusivos de sus distribuciones, .deb para las basadas en Debian y .rpm para las basadas en Red Hat.

Para instalar estos paquetes directos, puede utilizar los comandos de administración de paquetes: rpm y dpkg. Para usar dpkg para instalar un paquete es necesario estar ya en posesion del paquete con la extension .deb. Para instalar un paquete se debe usar ruta al archivo .deb pero para desinstalarlo se puede escribir el nombre del paquete, no del fichero de instalación. La opcion -I al ejecutar el comando dpkg sirve para obtener información de un paquete que no está instalado sin instalarlo.

Tanto dpkg como rpm se utilizan para instalar archivos de paquetes, sin embargo, no instalarán las dependencias del paquete, por lo que las los paquetes de las dependencias deberían ser instalados manualmente, los cuales a su vez, también pueden tener dependencias, y así sucesivamente. 

Cuando se instala un sistema operativo mediante un usb, si la imagen usada tiene un tiempo es posible que el software esté un poco desfasado por lo que será remoendable actualizar a las últimas versiones disponibles. Lo primero que se debe hacer es configurar las direcciones de los servidores donde están los repositorios. Las fuentes de los repositorios se encuentran en /etc/apt/sources.list. Después de añadir las fuentes de los repositorios se ejecuta el comando apt update. Tanto para configurar el archivo sources.list como para descargar software es necesario iniciar sesión como root (o utilizar el comando sudo).

Con el comando aptitude search [nombre del paquete] se puede ver el estado del paquete, por ejemplo si sale una i significa que el paquete está instalado o una c significa que el paquete ya no esta instalado pero quedan los archivos de configuración. Una p significa que está disponible para su instalación. Si se usa aptitude sin parametros aparece una interfaz visual para instalar paquetes. Otra opción para administrar los paquetes en un entorno gráfico seria Synaptic.

##### PROCESOS
Un proceso en Linux es una serie de instrucciones que vienen de un programa que esta en ejecución, generalmente un  programa da lugar a un proceso, por lo que son términos que tienden a confundirse, pero no son lo mismo. Si un proceso se detiene, el programa se pausa, es decir, no se sigue ejecutando código pero el programa sigue en memoria. Para finalizar el proceso y sacarlo de memoria se debe terminar el proceso. En caso de que no responda o que esté en un bucle infinito, para forzar a que se termine se debe matar el proceso.

Para ver los prcesos desde el terminal se usa el comando ps, pero sin parametros solo muestra los procesos para ese usuario y terminal. Para ver todos los procesos del sistema se debe añadir la flag -e. Si además se añade -f ofrece información adicional, el proceso padre y el CPU utilizado por el porceso. En la columna stat se puede comporbar el estado del proceso, S significa sleeping, R running y T stopped.

Para ver de manera interactiva información sobre los procesos y la carga de trabajo sobre la CPU se puede usar top, o htop para una interfaz más moderna. El apartado load average aporta información sobre el uso medio de CPU en los últimos 5/10/15 minuto. Se podría considerar que el procesador se está sobrecargando cuando el valor es superior a uno.

El comando 'kill' se utiliza para enviar una señal a un proceso, normalmente para finalizarlo. Se usa especificando el ID (PID) del proceso que se desea finalizar. Se usa un código numérico para especificar que se debe hacer con el proceso. El -9, sirve para matar el proceso, por ejemplo kill -9 [nombre_del_proceso], el -15 hace que el proceso termine de manera controlada, el -18 reanuda un proceso que se encuentra detenido, 18 y 19 pausan el proceso sin terminarlo.

En caso de que una tarea sea muy larga de ejecutar, para poder usar el terminal mientras tanto, es recomendable ejecutar los procesos en segundo plano. Para ello, se escribe el carácter & a final del comando. Para ver los procesos en ejecución en segundo plano se usa el comando jobs. Imprime un listado de números asociados a los procesos en segundo plano que pueden usarse para ejecutar comando sobre ellos usando el carácter %, por ejemplo, se puede matar un proceso en segundo plano sin necesidad de usar el PID, simplemente con el comando kill -9 % [numero de job]. Es muy común cuando se ejecuta un proceso en segundo plano redirigir los outputs a un archivo para que no vaya mostrando mensajes por consola mientras tanto.