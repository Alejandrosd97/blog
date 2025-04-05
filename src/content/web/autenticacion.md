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
JSON Web Token, es un estándar que se utiliza para compartir información de forma segura entre un cliente y un servidor. Un JWT es una cadena formada por tres partes, separadas por puntos y serializadas mediante base64. 

El algoritmo de codificación de base64 recibe como input una secuencia binaria y genera otra secuencia binaria. Simplemente revisa el material binario original, lo divide en fragmentos de 6 bits y convierte cada fragmento en un carácter de texto seguro. Un carácter "seguro" se refiere a uno de un conjunto muy limitado. La decodificación realiza operaciones binarias similares pero a la inversa. Se utiliza base64 para almacenar o transferir datos en entornos que están restringidos a datos ASCII.

En este caso al enviar las credendiales de autenticación al servidor, si éstas son correctas, el servidor genera un token que se devuelve en la respuesta y se almacena en una cookie o en el almacenamiento local del navgador. en cada nueva petición se envía el token, normalmente en un header de la petición, y el servidor comprueba si es válido. Los tokens tienen la apariencia de una cadena de caracteres y caducan después de un determinado tiempo, a partir del cual dejarán de ser válidos. Los tokens pueden ser opacos y autónomos. Los opacos no contienen ninguna información, son simplemente cadenas de caracteres y solo pueden ser verificados por el servidor, como los ID de las sesiones. En el caso de los atónomos, si contienen información que puede ser vista por los clientes, como por ejemplo los Jason Web tokens. Normalmente los tokens son firmados con algún secreto que solo conoce el servidor.

Los JWT están basados en el Open Standard (RFC 7519) y no solo se usan para autenticación sino también para intercambio de cualquier tipo de información de manera segura. Este tipo de token consta de tres partes separadas por un punto, header, payload y firma. El header contiene metadatos sobre el tipo de token y los algoritmos criptográficos utilizados para proteger su contenido, el payload contiene la información, como la identidad del usuario y los permisos que tiene y la firma se utiliza para validar que el token es confiable y no ha sido manipulado. Cuando se usa un JWT, se debe verificar su firma antes de almacenarlo y usarlo. Para crear la firma, se toman el encabezado y la carga útil codificados en Base64, junto con un secreto, y se firman con el algoritmo especificado en el encabezado.

##### SINGLE SIGN-ON
Esta estrategia permite a los usuarios hacer login con un solo usuario y contraseña a múltiples servicos relacionados pero independientes los unos de los otros, por ejemplo los servicios de google, como Gmail o Youtube. De esta manera no es necesario introducir las credenciales para cada servicio.

La implementación suele consistir en la definición de un servicio central en el que se basan las aplicaciones cuando un usuario se conecta. En este enfoque, si un usuario no autenticado solicita una aplicación que requiere información de identidad, la aplicación en cuestión redirige al usuario al servicio central. En este servidor, el usuario se autentica y es redirigido a la aplicación original con la información de identidad. 

Si ese mismo usuario pasa a otra aplicación que también requiere información de identidad y que depende del mismo servicio central para realizar la autenticación del usuario, la segunda aplicación puede aprovechar la sesión creada al iniciar la sesión en la primera aplicación.

##### OAUTH
OAuth significa Autorización Abierta y funciona para autorizar dispositivos, API, servidores y aplicaciones utilizando tokens de acceso en lugar de credenciales de usuario, lo que se conoce como acceso delegado seguro.

OAuth delega la autenticación a servicios como Facebook, Amazon, Twitter y autoriza a aplicaciones de terceros a acceder a la cuenta del usuario sin tener que ingresar su nombre de usuario y contraseña.

Se utiliza principalmente para REST/API y solo proporciona un alcance limitado de los datos de un usuario.

