---
title: 'Redes y correo'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

##### PROTOCOLO TCP/IP
Su principal función es transmitir datos desde un origen a un destino, que tendrá una dirección IP asignada. Es un protoocolo no orientado a la conexión, esto significa que no establece una conexión como primer paso y luego empieza a mandar información, garantizar que conexión funcione correctamente se realiza mediante el protocolo TCP. TCP garantiza que los paquetes llegan en orden y sin errores.

##### UDP Y ICMP
UDP permite mandar paquetes sin establecer antes una conexión, ofrece menos garantías pero es más rápido al ser más ligero.

ICMP por su pairte, se utiliza para transmitir mensajes de estado y de mensajes de error. Se usa principalmente en dispositivos de infraestructura de red

##### DIRECCIONES IP
Las direcciones IP se dividen en clases:
- Clase A: Sus tres primero bits son 000. Van desde 0.0.0.0 hasta 127.255.255.255
- Clase B: Sus tres primero bits son 100. Van desde 128.0.0.0 hasta 191.255.255.255
- Clase C: Sus tres primero bits son 110. Van desde 192.0.0.0 hasta 223.255.255.255

###### NOTACIÓN CIDR
Significa Classles Inter-Domain Routing. Una máscara de red actúa como una especie de filtro de bits que indica mediante un 1 que parte de la IP pertenece a la red y cual al host. La notación CIDR especifica la máscara de red al final de la dirección IP, por ejemplo, en la IP 192.168.1.133/24, la máscara de red corresponde a los primeros 24 bits. Las máscaras de red sirven para hacer subredes. El proceso de subnetting consiste en separar una red en varias subredes mediante el usa de una máscara de red.

Las direcciones IPv6 utilizan 128 bits agrupados en 8 grupos de 4 números en formato hexadecimal. Los grupos se separan usando dos puntos y los grupos de ceros se pueden omitir, pero esta omisión solo se puede hacer una vez. Los ceros a la izquierda también se pueden omitir. No existe máscara de red en este tipo de direcciones, la parte de red siempre corresponde a los 4 primeros grupos y las direcciones al resto.

Los puertos se pueden ver en el archivo /etc/services

##### CONFIGURACIÓN DE REDES
El archivo /etc/hostname es donde se puede encontrar el nombre del host, que es lo que aparece a la derecha de @ en la terminal. Se puede modificar desde este archivo mediante el comando hostname [nuevo_nombre] y se puede consultar el nombre mediante hostname -s sin necesidad de abrir el archivo. El archivo /etc/hosts permite asociar hosts con nombres que sean más fáciles de recordar, parecido a lo que se hace con los contactos para los números de teléfono. Cada línea contiene una IP con el nombre o nombres asociados. Es muy importante a la hora de usar internet configurar el archivo de resolución de nombres, que se encuentra en /etc/resolv.conf. En el archivo /etc/nsswitch.conf se puede especificar el orden en el que se buscará ()()()()

Hostname cambia el nombre del host pero solo de manera temporal, hasta el siguiente reinicio, ya que no modifica el archivo /etc/hostname. Para cambiarlo de manera permanente se usa el comando hostnamectl set-hostname [nuevo_nombre].

##### CORREO
Los servidores MTA (Mail Transfer Agent) utilizan el protocolo SMTP. El usuario emisor envía el correo al servidor mediante un MUA (Mail User Agent). La función del MTA es transferir el correo mediante el protocolo SMTP a otro servidor MTA. Durante el proceso puede ir pasando por varios MTA hasta llegar servidor de destino, en cuyo caso, se transmite al MDA (Mail Delivery Agent). El MDA se encarga de almacenar el correo en el buzón. En este momente el usuario receptor debe usar otro MUA, para conectarse al buzón. En este caso, para acceder a los correos del buzón del servidor el MUA utiliza el protocolo IMAP/POP3. Hoy en día el más usado es IMAP.

Los principales MTA son:
- Sendmail: Actualmente en desuso debido a fallos de seguridad.
- Exim: Desarrollado para sistemas Unix. Tiene bastante flexibilidad y abarca todas las funcionalidades básicas. Es el MTA por defecto en las distribuciones basadas en Debian.
- Postfix: Pensado en la seguridad con el objetivo de mejorar a Sendmail.

Para enviar un mensaje se usa el comando mail [destinatario], lo que muestra un cursor para escribir el mensaje. Para escribir el asunto se usa la flag -s. Con la flag -c se especifica a qué usuarios se envía una copia, y con -b se copia el mensaje de manera oculta, para no tener que compartir direcciones de correo privadas. Una vez escrito el mensaje se sale con control + D. Para automatizar el proceso de envío con scripts, se puede usar un archivo como cuerpo del mensaje con el operador < (mail < ruta-archivo direccion de correo). Para leer un correo se usa el comando mail sin parámetros.

p, print, r read, h volver a la lista de correos, la d para borrar. Antes de salir hay que guardar los cambios para que se apliquen, esto se hace con la tecla q antes del comando exit. 

Una vez leídos, los correos se archivan en /home/[usuario]/mbox. Para poder leerlo se ejecuta el comando mail -f /home/[usuario]/mbox. Con el comando mailq se pueden ver los mensajes en la cola, esto es, los que están pendientes de enviar.

Para establecer alias de correo se utiliza el archivo aliases localizado dentro de /etc/ o /etc/mail/. Esto sirve para redirigir correos a otros usuarios o programas. Cada usuario ocupa una línea dentro del archivo. Los usuarios pueden editar el archivo /home /usuario/.forward para reenviar los correos dirigidos a él.