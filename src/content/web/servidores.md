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