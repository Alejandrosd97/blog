---
title: 'Modelo OSI'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



##### CAPA 6: PRESENTACIÓN
Es responsable de la entrega y el formato de la información a la capa de aplicación para su posterior procesamiento o visualización. Alivia la preocupación de la capa de aplicación con respecto a las diferencias sintácticas en la representación de datos dentro de los sistemas del usuario final. Un ejemplo sería la conversión de un archivo informático de texto codificado EBCDIC en un archivo codificado ASCII. Se trata de la capa más baja en la que los programadores de aplicaciones consideran la estructura y presentación de los datos, en lugar de simplemente enviar datos en forma de datagramas o paquetes entre hosts.

En muchas aplicaciones y protocolos, no se hace distinción entre las capas de presentación y aplicación. Por ejemplo, HTTP, generalmente considerado como un protocolo de capa 7, tiene aspectos de capa 6, como la capacidad de identificar la codificación de caracteres para una conversión adecuada, que luego se realiza en la capa de aplicación.

La encriptación también suele realizarse en este nivel, aunque también se puede realizar en las capas de aplicación, sesión, transporte o red. La desencriptación también se gestiona en la capa de presentación. Por ejemplo, al iniciar sesión en sitios de cuentas bancarias, la capa de presentación descifrará los datos a medida que se reciban.

Aquí ocurre la codificación y serialización de la información. La serialización es el proceso de traducir estructuras de datos o estados de objetos a un formato que pueda almacenarse (por ejemplo, en un archivo o buffer) o transmitirse (por ejemplo, a través de internet) y reconstruido más tarde. Después de transmitir las cadenas de bytes, el receptor tendrá que recuperar el objeto original de la cadena de bytes. La operación opuesta, extraer una estructura de datos a partir de una serie de bytes, es la deserialización.

##### CAPA 5: SESIÓN
Proporciona el mecanismo para abrir, cerrar y gestionar una sesión entre procesos de aplicación del usuario final, es decir, un diálogo semipermanente. Las sesiones de comunicación consisten en solicitudes y respuestas que ocurren entre aplicaciones. Es donde se encuentra el estado, en aquellos protolos stateful. HTTP, al ser un protocolo stateless, no cuenta con una capa 5. TLS se encuentra en esta capa. Cuando se establece la conexión, la petición solo llega hasta la capa 5, una vez que el handshake se ha producido existosamente ya se llega a las capas superiores.

##### Capa 4: Transporte
Los switch saben a donde enviar la información basándose en la dirección MAC de destino. Los routers pueden comportarse como un switch en caso de comunicarse entre la misma subred, pero normalmente necesitan llegar a la capa 3 para conectar diferentes redes, mientras que el switch es un dispositivo de capa 2. los firewalls son dispositivos de capa 4.

Debido a la conplejidad del sistema, a veces se simplifica considerando las capas 5, 6 y 7 como una sola capa, la capa de aplicación.