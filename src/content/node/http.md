---
title: 'HTTP'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
id : 4
---

##### MÓDULO HTTP
Node.js tiene un módulo incorporado llamado HTTP, que permite a Node transferir datos a través del protocolo HTTP, es decir ofrece la funcionalidad de un servidor HTTP. Para crear un servidor se usa la función createServer(), y se le pasa un callback que será el código a ejecutar cuando alguien realice una petición. El método write() constituye el cuerpo de la respuesta

```
import {createServer} from "node:http";

//create a server
createServer(function (req, res) {
  res.write('¡Hola mundo!') //Escribe una respuesta al cliente
  res.end() //Finalia la respuesta
}).listen(5000) //El servidor escucha en el puerto 5000 

```

Se pueden añadir headers a la respuesta mediante el método writeHead(), por ejemplo para servir archivos HTML:

```
import {createServer} from "node:http";

//create a server
createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('¡Hola mundo!')
    res.end()
}).listen(5000)

```

Cuando se crea el servidor se pueden manejar las peticiones y respuestas en el callback de la función createServer() o se puede manejar escuchando el evento ‘request’. En este primer caso, el callback recibe también los objetos request y response. El cuerpo de la petición es un stream, por tanto, no se accede mediante request.body (como se haría en el framework express) sino capturando el evento ‘data’ y manejandolo en el callback.

Cuando se establece una conexión HTTP a un servidor, primero se envían los headers y el método en un primer segmento y luego, en caso de haberlo, se van enviando los chunks del body. Existe un header llamado 'Connection', que acepta dos valores, 'keep-connection' y 'close'. En caso de keep-alive, la conexión TCP que se genera en la petición se mantiene activa de manera que no es necesario establecer una nueva conexión para futuras peticiones. Este header solo existe en la versión 1 de HTTP, en la 2 y 3, la conexión es persistente por defecto. Existe otro header llamado ‘Transfer-encoding’ cuyo valor es chunked cuando se pasa la data mediante un stream, pero cuando se pasa todo al mismo tiempo, el header es ‘Content-Length’ y expresa los bytes que ocupa el body. En este segundo caso, el tamaño debe ser exacto ya que si el body ocupa más, los bytes restantes no se transmitirań. Una forma de saberlo con exactitud es usar el método estático byteLength() de la clase Buffer y pasarle como argumento el JSON.stringify() de la información a enviar, esto devolverá la cantidad de bytes exacta que ocupa. Las peticiones y respuestas normalmente se envían comprimidas para que ocupen menos, esto se indica en el header 'Accept-encoding'.


##### PETICIONES HTTP
Para enviar una petición HTTP desde Node se debe crear una instancia de la clase Agent, que luego se pasará como propiedad en el objeto de configuración del método http.request(). No es necesario definirlo, ya que en caso de no hacerlo se crea por defecto, pero crearlo manualmente permite personalizarlo. Además del agente, ese objeto recibe el host, el puerto, el método, la ruta y los headers. Un Agente es responsable de gestionar la persistencia y reutilización de la conexión para los clientes HTTP. Mantiene una cola de solicitudes pendientes para un host y puerto determinados, reutilizando una única conexión de socket para cada uno hasta que la cola está vacía, momento en el cual el socket se destruye o se coloca en un grupo donde se guarda para usarlo nuevamente para solicitudes al mismo host y puerto. Si se destruye o no depende de la opción keep-alive.

El objeto request es un stream duplex, sirve para enviar información al servidor, pero al leerlo desde el cliente se puede acceder a la información enviada como respuesta. Esto se hace manejando el evento ‘response’. Este evento solo se emite una vez, por lo que toda la información se devuelve en una sola vez. Esta información se puede tratar como un stream. Se debe usar el método request.end() para indicar que ahí termina el stream de datos para que la otra parte no siga esperando a que lleguen mas bytes.

Cuando en el servidor se lee la información del cuerpo de la petición (que es un stream), hay que esperar a que acabe de leerse completamente antes de seguir con la ejecución. Para ello existe el evento ‘end’ del objeto request.

Aunque http está construido sobre TCP, si se envía un buffer con información al servidor, este devolverá un error 400 bad request, ya que no es una petición HTTP válida. Para que lo sea, se debería enviar la información correspondiente en el formato correspondiente para que cumpla con el protocolo HTTP, es decir, el método, la versión de HTTP, la ruta, en otra línea los headers y luego en la siguiente linea el body. HTTP no es mas que una petición TCP pero enviando la información en un formato específico. 

##### MYMETYPES
Se especifica primero el tipo y luego el subtipo separado por /, por ejemplo 'text/css' o 'text/plain'. Dependiendo del tipo de archivo, el navegador lo tratará de manera diferente, por ejemplo, en caso de css, intentará estilar la página con él y si es javascript intentará ejecutar el archivo. Otros tipos serían 'application', por ejemplo 'application/zip'. Cuando se quiere pasar información de varios tipos en la petición, el tipo debe ser 'multipart/form-data'. El tipo puede llevar también un parámtero, por ejemplo un código que actúe como separador entre los archivos. Una manera de saber de qué tipo es un archivo son los números mágicos también llamados bytes mágicos, que son una secuencia de bytes al inicio del archivo que se corresponden con un tipo en concreto.

##### COOKIES
Para enviar cookies desde el servidor, se utiliza el header 'Set-Cookie', y se debe colocar un header por cada cookie que se envía. Cuando el navegador envía una solicitud al servidor automáticamente envía las cookies en un header llamado 'Cookie'. En este caso, todas las cookies se envían juntas, separadas entre sí por punto y coma. Set-Cookie es para las respuestas y Cookie para las solicitudes. El parámetro path hace referencia a que solo las peticiones dirigidas a determinadas URLS enviarán la cookie al servidor.