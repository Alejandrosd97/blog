---
title: 'Servidores'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

Un servidor web almacena los archivos ue componen un sitio web, es decir, todos los documentos HTML y sus activos relacionados, incluidas imágenes, hojas de estilo CSS, archivos JavaScript, fuentes y vídeos.

Técnicamente, todos esos archivos pueden ser almacenados y servidos desde cualquier ordenador, pero es mucho más conveniente hacerlo en un servidor web dedicado porque un servidor dedicado suele estar más disponible. Además, un servidor dedicado puede tener la misma dirección IP todo el tiempo. lo cual se conoce como dirección IP dedicada. 

Un servidor web proporciona soporte para HTTP
Los protocolos son una serie de reglas para la comunicación entre dos dispositivos. HTTP es un protocolo textual sin estado. Textual odos los comandos son texto sin formato y legibles por humanos.
Y sin estado porque ni el servidor ni el cliente recuerdan comunicaciones anteriores. Por ejemplo, al depender únicamente de HTTP, un servidor no puede recordar una contraseña enviada en una petición anterior. 

Cuando un cliente hace una petición de un archivo mediante el protocolo HTTP, debe proveer la url del recurso. Un servidor puede servir contenido estático o dinámico. El término dinámico significa que el servidor procesa el contenido o incluso lo genera sobre la marcha a partir de una base de datos. Este enfoque proporciona más flexibilidad.

##### NGINX Y APACHE
Debido a la gran cantidad de usuarios que tiene internet hoy en día, servidores web como Nginx o Apache son usados como lad balancers que operan en la capa 7. Lo que ocurre es que la petición llega al servidor proxy y este redistribuye las peticiones de manera equitativa a diferentes servidores dentro de una red privada. Ademñas de mejorar el rendimiento, también supone una mejora en la seguridad, ya que los servidores no están en contacto directo con internet. Tanto Apache como Nginx sirven para este propósito, de hecho uno puede servir de servidor proxy y el otro como servidor en las instancias que forman la red privada que recibe las peticiones.

##### PROXY Y REVERSE PROXY
Un proxy es un agente o sustituto autorizado para actuar en nombre de otra persona. Cuando se habla de un servidor proxy es un servidor , que hace de intermediario en las peticiones de recursos que realiza un cliente (A) a otro servidor (C). Por ejemplo, si una hipotética máquina A solicita un recurso a C, lo hará mediante una petición a B, que a su vez trasladará la petición a C; de esta forma C no sabrá que la petición procedió originalmente de A. Esta situación de punto intermedio le permite ofrecer diversas funcionalidades como control de acceso, registro del tráfico, restricción a determinados tipos de tráfico, mejora de rendimiento, anonimato de la comunicación o caché web.

Un proxy se situa como middleman entre una red privada e internet. Un forward proxy es aquel que regula el trafico que sale de la red privada, además de bloquear el tráfico malicioso hacia la red privada, también enmascara las direcciones ip cuando se hacen peticiones a internet, de manera que solo la ip del proxy es visible. Otra ventaja es que mejora el rendimiento, ya que crea copias de los archivos y páginas más accedidos en caché. Un reverse proxy funciona de la manera inversa, es decir, regula el tráfico entrante a la red privada creando un único punto de entrada. Sirve como protección para ataques DDoS y para repartir el tráfico entre los servidores.

##### FIREWALL
Un cortafuegos es un dispositivo de seguridad de red que monitorea y filtra el tráfico de red entrante y saliente en función de las políticas de seguridad previamente establecidas. En términos simples, un firewall es esencialmente la barrera que se encuentra entre una red interna privada e internet. El objetivo principal de un firewall es permitir la entrada de tráfico no amenazante y mantener alejado el tráfico peligroso. Los firewalls crean “cuellos de botella” para canalizar el tráfico web. En esos puntos, se realiza una revisión según un conjunto de parámetros programados y se actúa en consecuencia. Algunos firewalls también realizan un seguimiento del tráfico y las conexiones en los registros de auditoría para consultar lo que se ha permitido o bloqueado. Normalmente, los firewalls se utilizan para delimitar las fronteras de una red privada o sus dispositivos host

Los filtros de capa de red inspeccionan los paquetes en un nivel bajo de la pila de protocolos TCP/IP, no permitiendo que los paquetes pasen a través del firewall a menos que coincidan con el conjunto de reglas establecido donde el origen y el destino del conjunto de reglas se basan en el Protocolo de direccioens IP y puertos. Estos firewalls funcionan mejor que los que realizan inspección de la capa de aplicación. La desventaja es que las aplicaciones no deseadas o el malware pueden pasar por los puertos permitidos.

- Los firewalls de red implican el uso de uno o más firewalls entre las redes externas y las redes internas privadas. Estos regulan el tráfico de red entrante y saliente, y separan las redes públicas externas de las redes internas. Existen tres formatos: hardware dedicado, software y virtual.

- Los firewalls de host o “firewalls de software” requieren el uso de firewalls en dispositivos individuales y otros puntos de conexión de red privados como barreras entre los dispositivos dentro de la red. Estos dispositivos, reciben una regulación adaptada del tráfico desde y hacia aplicaciones del ordenador específicas. Los firewalls de host pueden acceder de manera más profunda al tráfico web, el filtrado basado en HTTP y otros protocolos de red, lo que permite administrar el contenido que recibe el equipo, en lugar de solo saber de dónde viene.

Los firewalls también realizan funciones básicas a nivel de red, como traducción de direcciones de red (NAT) y red privada virtual (VPN). La traducción de direcciones de red oculta o traduce direcciones IP internas de clientes o servidores que pueden estar en un "rango de direcciones privadas" a una dirección IP pública. Ocultar las direcciones de los dispositivos protegidos preserva la cantidad limitada de direcciones IPv4 y es una defensa contra el reconocimiento de la red, ya que la dirección IP está oculta en Internet.

De manera similar, una red privada virtual (VPN) extiende una red privada a través de una red pública dentro de un túnel que a menudo está cifrado donde el contenido de los paquetes está protegido mientras atraviesa Internet. Esto permite a los usuarios enviar y recibir datos de forma segura a través de redes públicas o compartidas.

##### LOAD BALANCING
Un load balancer es una solución que actúa como proxy de tráfico y distribuye el tráfico de red o de aplicaciones entre varios servidores. Los balanceadores de carga se utilizan para distribuir la capacidad durante las horas pico de tráfico y para aumentar la confiabilidad de las aplicaciones. 

Un equilibrador de carga es el dispositivo o servicio que se ubica entre el usuario y el grupo de servidores y actúa como un facilitador invisible, asegurando que todos los servidores se utilicen por igual. En algunos casos, no obstante, es esencial que todas las solicitudes de un cliente se envíen al mismo servidor durante la duración de una sesión, por ejemplo en un carrito de la compra. Estos se conoce como persistencia de sesión. Sin persistencia de la sesión, la información debe sincronizarse entre servidores, generando ineficiencias en el rendimiento.

Además contribuye a la mejora de la seguridad previniendo ataques como DDoS, ya que distribuir el tráfico entre múltiples backend, ayuda a minimizar la superficie de ataque y hace que sea más difícil agotar los recursos y saturar los enlaces. Los balanceadores de carga también pueden redirigir el tráfico a otros sistemas si un sistema es vulnerable o está comprometido.