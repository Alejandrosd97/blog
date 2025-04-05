---
title: 'Protocolo IP'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


Se trata de un protocolo stateless. Las direcciones IP son una propiedad de la capa 3 y pueden ser establecidas de manera estática o automática. La mayoraí de las redes se componen de múltiples hosts y una sola default gateway. Si los hosts están en la misma subred, se pueden comunicar directamente, si no, se envía el mensaje al gateway. Dentro de una misma red, no se necesitan direcciones IP, la comunicación se produce mediante direcciones MAC.

Los paquetes IP tienen las secciones headers y data. El header tiene un tamaño de 20 bytes pero puede incrementarse hasta 60 bytes si las opciones están activadas. La sección data puede ir hasta 65536 bytes, aunque no se suele llegar a tanto.




##### DEFAULT GATEWAY
La mayorñia de las redes se componen de varios hosts y una puerta de entrada por defecto, que es el router y también puede ser considerado como un host más. En caso de que el destinatario de un paquete no se encuentre en la red, se envía al gateway 