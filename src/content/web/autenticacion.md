---
title: 'Autenticación'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### AUTENTICACIÓN BÁSICA
Es un método para que un cliente HTTP proporcione un nombre de usuario y una contraseña al realizar una solicitud. En la autenticación HTTP básica, una solicitud contiene un campo de header con el formato Autorización: Basic <credenciales>, donde <credenciales> es la codificación Base64 de ID y contraseña unidas por dos puntos.

Cuando el cliente intenta acceder a una ruta protegida, el servidor comprueba los headers de la petición HTTP en busca de unas credenciales válidas. Si las credenciales son válidas devuelve un código de status 200 y permite el acceso, en caso contrario devuelve un código 401 y deniega el acceso. Si las credenciales no existen el navegador web detecta el header www-authenticate en la respuesta y genera una alerta para que el usuario intruduzca las credenciales, que son codificadas a Base64 y enviadas en la siguiente petición para que el servidor las vuelva a comprobar. Este método de autenticación solo es seguro si se usa el protocolo HTTPS

##### AUTENTICACIÓN BASADA EN SESIONES
La autenticación basada en sesiones es un método de autenticación con estado en la que se emplean sesiones para realizar un seguimiento del usuario autenticado. Se asigna al usuario un ID único que es almacenado en la memoria del servidor. Este ID es enviado por el cliente en cada petición para que el servidor lo pueda identificar.

Cuando el cliente envía la petición con las credenciales al servidor, si estas son correctas, el servidor crea una sesión asociada a ese usuario y en la respuesta, se envía el ID generado se envía al cliente, que lo guarda en una cookie. A partir de aquí, el cliente envía el ID al servidor con cada petición. Cuando el usuario hace logout, la sesión se destruye en el servidor y la cookie se elimina del navegador.

HTTP es un protocolo sin estado, lo que significa que cada solicitud realizada desde el cliente al servidor se trata como una solicitud independiente; ni el cliente ni el servidor realizan un seguimiento de las siguientes solicitudes. Al implementar sesiones, el servidor tiene una manera de asociar cierta información con el cliente para que cuando el mismo cliente haga una petición al servidor, pueda recuperar esa información.

##### AUTENTICACIÓN MEDIANTE TOKENS Y JWT
En este caso al enviar las credendiales al servidor, si éstas son correctas, el servidor genera un token que se devuelve en la respuesta y se almacena en una cookie o en local storage. en cada nueva petición se envía el token, normalmente en un header de la petición, y el servidor comprueba si es válido. Los tokens tienen la apariencia de una cadena de caracteres y caducan después de un determinado tiempo, a partir del cual dejarán de ser válidos. Los tokens pueden ser opacos y autónomos. Los opacos no contienen ninguna información, son simplemente cadenas de caracteres y solo pueden ser verificados por el servidor, como los ID de las sesiones. En el caso de los atónomos, si contienen información que puede ser vista por los clientes, como por ejemplo los Jason Web tokens. Normalmente los tokens son firmados con algún secreto que solo conoce el servidor.

Los JWT están basados en el Open Standard (RFC 7519) y no solo se usan para autenticación sino también para intercambio de cualquier tipo de información de manera segura. Este tipo de token consta de tres partes separadas por un punto, header, payload y firma. El header contiene metadatos sobre el tipo de token y los algoritmos criptográficos utilizados para proteger su contenido, el payload contiene la información, como la identidad del usuario y los permisos que tiene y la firma se utiliza para validar que el token es confiable y no ha sido manipulado. Cuando se usa un JWT, se debe verificar su firma antes de almacenarlo y usarlo. Para crear la firma, se toman el encabezado y la carga útil codificados en Base64, junto con un secreto, y se firman con el algoritmo especificado en el encabezado.


faltaaaaaaaaaaaaaaaaa