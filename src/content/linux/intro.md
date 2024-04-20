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
- SysVinit: Utiliza Script y niveles de ejecución para controlar el inicio, apagado y gestión de los procesos del sistema. Este es el sistema de inicio tradicional. Inicia y detiene procesos secuencialmente, según los scripts de inicio. El estado de la máquina se indica mediante niveles de ejecución, de manera que cada nivel de ejecución inicia o detiene una máquina de una manera diferente.