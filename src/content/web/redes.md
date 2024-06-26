---
title: 'Redes'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

Las direcciones IP constan de dos partes: la dirección de red y la dirección de host. La dirección de red indica la red a la que pertenece un dispositivo, mientras que la dirección de host identifica el dispositivo específico dentro de esa red.

Las máscaras de subred se utilizan para definir qué parte de una dirección IP es la dirección de red y cuál es la dirección del host. Por ejemplo, en la dirección IP 192.168.1.45 y la máscara de subred 255.255.255.0, la dirección de red es 192.168.1.0 y la dirección de host es 45.

Los motivos de crear subredes son varios, entre ellos, mejorar la seguridad aislando las diferentes subredes impidiendo que se extiendan las amenazas, mayor facilidad de administración, al ser las subredes más pequeñas. Además, dividir la red en redes más pequeñas mejora el rendimiento de la red reduciendo la congestión del tráfico.

##### DIRECCIONES IP PÚBLICAS
Son direcciones IP globalmente únicas que se asignan a un dispositivo o una red. Se puede acceder a ellas a través de Internet y permite que los dispositivos se comuniquen con otros dispositivos, servidores y redes ubicados en cualquier parte del mundo. Son  enrutables a través de Internet y son asignadas por la Autoridad de Números Asignados de Internet (IANA). Pueden ser estáticas (permanente) o dinámico (cambia periódicamente).

##### DIRECCIONES IP PRIVADAS
Las direcciones IP privadas, por otro lado, se utilizan dentro de las redes de área local (LAN) y no son visibles en Internet. Están reservadas para uso interno dentro de una organización o red local. A menudo las asigna un enrutador o un administrador de red para dispositivos dentro de la misma red. No son enrutable a través de Internet, y requieren de un Network Address Translator para comunicarse con IP públicas. Debido a que no son únicas globalmente son reutilizables en diferenctes redes privadas


##### NAT
Significa Network Address Translation y se creó para paliar la escasez de direcciones IPv4. Debido a esta escasez de direcciones, las redes de ordenadores utilizan un rango de direcciones especiales (IPs privadas) y se conecten a Internet usando una única dirección IP (IP pública). Un ejemplo sería como se conectan las redes domésticas a internet.

Cuando se envía un paquete desde un dispositivo de una red privada hacia internet, se utiliza un purto aleatorio, Este puerto es manipulado por el NAT de manera que cuando se envía a internet el puerto de origen es diferente al original. NAT mantiene una tabla de equivalencias en la que cada puerto equivale a una dirección Ip privada, las cuales suelen empzar por 192.168 o 10, aunque en algunos casos también por 172. Esto se hace para recordar qué dirección y puerto le corresponde a cada dispositivo cliente y así saber donde deben regresar los paquetes de respuesta.

##### CIDR
CIDR, o enrutamiento entre dominios sin clase, es un método para asignar direcciones IP y enrutar paquetes de protocolo de Internet de una manera más flexible y eficiente. Ayuda a frenar el agotamiento de las direcciones IPv4 y reducir el tamaño de las tablas de enrutamiento, resultando en un mejor rendimiento y escalabilidad de Internet.

En CIDR, una dirección IP y su máscara de subred se escriben juntas como una sola entidad, lo que se conoce como notación CIDR. Un ejemplo de notación CIDR sería 192.168.1.0/24. Aquí, 192.168.1.0 es la dirección IP y /24 representa la máscara de subred. El número después de la barra se denomina longitud del prefijo, que indica cuántos bits de la máscara de subred deben establecerse en 1 (máscara de bits). Los bits restantes de la máscara de subred se establecen en 0. La longitud de prefijo /24 corresponde a una máscara de subred de 255.255.255.0, porque los primeros 24 bits están configurados en 1. Esto permite un total de 256 direcciones IP en la subred, con 254 de estas IP disponibles para dispositivos. ya que la primera y la última IP están reservadas para la dirección de red y la dirección de transmisión, respectivamente.

##### DEFAULT GATEWAY
La puerta de enlace predeterminada es un dispositivo, normalmente un router, que sirve como punto de acceso para que el tráfico de datos viaje desde la red local a otras redes, como Internet. Este dispositivo actúa como un intermediario entre la red local y las redes externas. Dirige los paquetes de red desde un dispositivo local a su destino final. Cuando un paquete con una dirección IP de destino no está en la misma red que el dispositivo de origen, el default gateway enruta el paquete a la red externa adecuada. Además, suele servir como capa de protección de red regulando el tráfico

##### PROTOCOLO FTP
FTP es un protocolo que se utiliza para la transferencia de archivos de un host a otro a través de una red basada en TCP, como Internet.

Funciona abriendo dos conexiones que vinculan los hosts que intentan comunicarse entre sí. La conexión de control es siempre la primera conexión que se establece con un servidor FTP. Está designada para los comandos y respuestas que se envían entre los dos clientes. El segundo tipo de conexión se denomina conexión de datos y maneja la transferencia de datos. Durante una transmisión FTP, hay cuatro comandos utilizados por las computadoras que se están comunicando. Estos son "enviar", "obtener", "cambiar directorio" y "transferir".

Al transferir archivos, FTP utiliza tres modos diferentes: block, stream y comprimido. El modo de stream permite que FTP administre información en una cadena de datos sin límites entre ellos. El modo de bloque separa los datos en bloques y, en el modo de compresión, FTP utiliza un algoritmo llamado Lempel-Ziv para comprimir los datos.

Una de las principales ventajas es su capacidad para realizar transferencias de archivos de gran tamaño. Con FTP, es posible enviar cientos de gigabytes a la vez y aun así obtener una transmisión fluida. Además, FTP permite enviar varios archivos a la vez, cosa que no ocurre con todos los protocolos

FTPS se refiere a FTP Secure porque utiliza cifrado SSL, que es ligeramente diferente al FTP tradicional.

###### FTP vs HTTP
HTTP puede admitir varias sesiones al mismo tiempo porque es un protocolo sin estado. Esto significa que no guarda los datos utilizados en una sesión para emplearlos en la siguiente. 

FTP, por otro lado, es stateful, lo que significa que recopila datos sobre el cliente y los utiliza en la siguiente solicitud que realiza. Esto limita la cantidad de sesiones que puede admitir simultáneamente. Independientemente del ancho de banda de una red, HTTP tiene el potencial de ser un método de transmisión de datos mucho más eficiente.

FTP utiliza conexiones separadas para el control y la transferencia de datos entre el cliente y el servidor, mientras que HTTP utiliza una conexión única para ambos propósitos.

Otra diferencia es que con FTP, es necesario que haya autenticación del cliente antes de transferir la información, cosa que con HTTP no es necesaria. HTTP utiliza un puerto común y conocido, lo que facilita el trabajo de los cortafuegos. En algunos casos, FTP puede resultar más difícil de gestionar para un firewall.

##### SSH
Secure Shell es un protocolo de red que se encuentra en el séptimo lugar del modelo de red OSI. También se refiere al conjunto de utilidades que implementa el protocolo SSH. por lo que admite autenticación basada en contraseña y clave. Admite autenticación basada en contraseña y claves.

El protocolo funciona en el modelo cliente-servidor, lo que significa que la conexión la establece el cliente SSH que se conecta al servidor SSH. El cliente controla el proceso de configuración de la conexión y utiliza criptografía de clave pública para verificar la identidad del servidor SSH. Después de la fase de configuración, el protocolo SSH utiliza un cifrado simétrico sólido para garantizar la privacidad y la integridad de los datos que se intercambian entre el cliente y el servidor.

El método de autenticación de clave pública se utiliza principalmente para la automatización y, a veces, por los administradores del sistema para el inicio de sesión único. Consiste en tener un par de claves criptográficas (clave pública y clave privada) y configurar la clave pública en un servidor para autorizar el acceso y otorgar acceso al servidor a cualquiera que tenga una copia de la clave privada. Las claves utilizadas para la autenticación se denominan claves SSH. El uso principal de la autenticación basada en claves es permitir una automatización segura. Las transferencias automatizadas de archivos shell seguros se utilizan para integrar aplicaciones sin problemas y también para sistemas automatizados y gestión de configuración.

Además, la autenticación basada en claves proporciona un cómodo acceso de [inicio de sesión único](/blog/web/autenticacion) (Single sign-on) en los hosts remotos. Esto permite a los usuarios moverse entre sus cuentas sin necesidad de una contraseña.

Se puede combinar con el protocolo FTP para poder enviar y recivir archivos de manera segura a través de internet. En este caso el protocolo recibe el nombre de SFTP.