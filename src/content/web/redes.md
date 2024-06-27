---
title: 'Redes'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### NAT
Significa Network Address Translation y se creó para paliar la escasez de direcciones Ipv4. Debido a sta escasez de direcciones, las redes de ordenadores utilizan un rango de direcciones especiales (IPs privadas) y se conecten a Internet usando una única dirección IP (IP pública). Un ejemplo sería como se conectan las redes domésticas a internet.

Cuando se envía un paquete desde un dispositivo de una red privada hacia internet, se utiliza un purto aleatorio, Este puerto es manipulado por el NAT de manera que cuando se envía a internet el puerto de origen es diferente al original. NAT mantiene una tabla de equivalencias en la que cada puerto equivale a una dirección Ip privada, las cuales suelen empzar por 192.168 o 10, aunque en algunos casos también por 172. Esto se hace para recordar qué dirección y puerto le corresponde a cada dispositivo cliente y así saber donde deben regresar los paquetes de respuesta.