---
title: 'APIS'
id: 2
description: ''
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

Permite interacciones entre sistemas siguiendo un conjunto de estándares y protocolos para compartir características, información y datos. Se puede considerar a las APIs como mecanismos que permiten a una aplicación o servicio acceder a un recurso dentro de otra aplicación o servicio. Existen varios tipos de APIs:

##### REST
Las API REST se comunican a través de solicitudes HTTP para realizar funciones de base de datos estándar como crear, leer, actualizar y eliminar registros (CRUD) dentro de un recurso. Por ejemplo, se usaría una solicitud GET para recuperar un registro, una solicitud POST para crear un nuevo registro, una solicitud PUT para actualizar un registro y una solicitud DELETE eliminarlo. La arquitectura REST tiene seis restricciones y para que una API pueda llamarse RESTful debe cumplir con ellas.

###### CLIENTE-SERVIDOR
Este principio consiste en la separación de preocupaciones, esto significa que el cliente que envía la solicitud es completamente independiente del servidor que devuelve la respuesta.

###### SIN ESTADO
Toda la información (estado) que se requiere en una solicitud debe ser enviada por el cliente. Por lo tanto, el servidor no debe almacenar ningún dato durante una comunicación Cliente-Servidor, lo que significa que cada solicitud es una solicitud independiente.


###### CACHÉ
La caché mantiene almacenados a los que se accede con frecuencia, mejorando el rendimiento y la eficiencia de la red. Por lo tanto, a través del almacenamiento en caché, es posible reducir o incluso eliminar la necesidad de que el cliente envíe solicitudes al servidor.

###### INTERFAZ
Significa cómo el cliente y el servidor compartirán información definiendo una interfaz que se debe seguir en cada solicitud. Dicho de otra manera, es un contrato entre el cliente y el servidor que determina los estándares para su comunicación.

###### SISTEMA DE CAPAS
El sistema en capas se relaciona con el hecho de que puede haber más componentes y subsistemas entre un cliente y un servidor. El cliente no puede asumir que se está comunicando directamente con el servidor y no conoce la complejidad de procesar la solicitud y devolver la respuesta. Por ejemplo, puede ocurrir que cuando un cliente envía una solicitud a un servidor, ésta pase primero por una capa de proxy para realizar una verificación de seguridad.

###### CÓDIGO BAJO DEMANDA
Esta es la única restricción opcional y significa que un servidor puede enviar un código ejecutable como respuesta al cliente. Es lo que sucede cuando un navegador, por ejemplo, recibe una respuesta del Servidor con una etiqueta HTML <script> para que, cuando se cargue el documento HTML, se pueda ejecutar el script.

