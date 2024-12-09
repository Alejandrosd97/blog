---
title: 'Ataques'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

##### DDOS
Para evitar los ataques DDoS se suele utilizar un middleware que limite la cantidad de peticiones que se pueden hacer en un tiempo determinado, para evitar el colapso del servidor. La opción mas popular es express-rate-limit, pero puede quedarse un poco corto en algunos casos, siendo otro paquete mas completo es rate-limiter-flexible. El primero solo se basa en la dirección IP al limitar el número de peticiones mientras que el segundo también permite limitar las peticiones por usuario o email. Esto es útil para evitar ataques de fuerza bruta sobre un usuario probando una y otra vez combinaciones diferentes de contraseñas.

Para conseguir la IP del cliente, request.ip intentará resolver la dirección IP real del cliente teniendo también en cuenta los headers establecidos por los servidores proxy que indican el origen (cliente) de la solicitud, aunque esto solo se hará si la configuración de trust proxy está habilitada explícitamente.

Request.connection.remoteAddress contendrá la dirección IP del cliente que realiza la solicitud, que en el caso de un servidor proxy será la dirección IP del proxy y no la del cliente en cuyo nombre el proxy reenvía la solicitud. Si se utiliza un proxy inverso que reenvía solicitudes a un servidor de Express, request.ip y habilitar el trust proxy es la mejor solución. De lo contrario, simplemente request.ip seguirá siendo suficiente.

##### CROSS SITE SCRIPTING
Los ataques XSS suelen ocurrir en aplicaciones web que toman la información del usuario y la incorporan a sus páginas web sin una validación o desinfección adecuada. Esto puede suceder a través de varios puntos de entrada, como secciones de comentarios, campos de búsqueda o incluso la barra de URL. Por ejemplo, el caso de un blog con una sección de comentarios. Los usuarios pueden escribir y leer comentarios, y estos comentarios se almacenan en una base de datos. Un atacante puede aprovechar esto ingresando un script malicioso en la caja de comentarios. Cuando otros usuarios ven los comentarios, la aplicación busca y ejecuta el script malicioso. El script puede, por ejemplo, redirigir a los usuarios a sitios web maliciosos o robar información confidencial. 

Para evitar estos ataques se puede usar un paquete llamado express-xss-sanitizer. En el caso de express, para que el middleware de XSS funcione, debe ejecutarse después del middleware express.json(). 

La Política de seguridad de contenido (CSP) es otro mecanismo de defensa sólido contra ataques XSS. CSP define qué fuentes de contenido (como scripts, hojas de estilo o imágenes) pueden cargarse y ejecutarse en un sitio web, evitando así la ejecución de scripts maliciosos inyectados. Al especificar fuentes confiables, CSP puede bloquear la ejecución de scripts maliciosos, incluso si se inyectan en la aplicación.

CSP se implementa como un header HTTP que especifica una política que debe aplicar el navegador. Esta política enumera las fuentes confiables para diferentes tipos de contenido. Cuando un navegador carga una página web, cumple con esta política, ejecuta solo el contenido de fuentes confiables y bloquea cualquier otra fuente externa. Default-src 'self' permite que todo el contenido se cargue desde el mismo origen. Lo mismo con font-src, style-src y script-src. Helmet es un middleware para aplicaciones de Node que establece varios headers HTTP para ayudar a proteger la aplicación.

##### CLICKJACKING
Se trata de un ataque en el que un sitio malicioso inserta la página web en un iframe, engañando a los usuarios para que hagan clic en elementos ocultos que realizan acciones no deseadas. Como protección frente a esto se utiliza el header X-Frame-Options.

El iframe en un sitio web se refiere al uso de un elemento HTML <iframe>, que permite que una página web incruste otro documento HTML  dentro de sí misma. Este documento incrustado puede ser del mismo dominio o de otro diferente. El <iframe> actúa como una ventana dentro de la página actual, mostrando el contenido de la URL de origen especificada en su atributo src. Entonces, un atacante puede aprovechar esto, por ejemplo, en un escenario en el que un usuario se encuentra en un sitio web que parece ofrecer una descarga gratuita. El botón de descarga está visible y listo para hacer clic. Sin embargo, el atacante puede haber colocado un iframe invisible sobre el botón, apuntando a un sitio web completamente diferente. El iframe puede contener un botón como "Transferir fondos" en un sitio bancario o "Me gusta" en una plataforma de redes sociales.

Para protegerse contra el clickjacking, puede configurar el encabezado HTTP X-Frame-Options Header en DENY o SAMEORIGIN, evitando que la página se enmarque o solo permitiendo que se enmarque con páginas del mismo origen.

##### MIMETYPE
MIME por sí solo no es un ataque, significa Extensiones de correo de Internet multipropósito y el rastreo de MIME es una función del navegador que adivina el tipo MIME de un recurso en función de su contenido, como HTML, JavaScript o una imagen. Intenta adivinar cuando el servidor no proporciona un tipo MIME claro o correcto en el header Content-Type. Si bien es útil en algunos casos, puede generar vulnerabilidades como ataques XSS. Para evitar esto, se utiliza el encabezado X-Content-Type-Options configurado con el valor 'nosniff'.

Suponiendo una aplicación web que permita a los usuarios cargar archivos, que no valida correctamente los tipos de archivos y no establece los tipos MIME correctos cuando entrega estos archivos a los usuarios, un atacante podría cargar un archivo llamado evil.html que contiene JavaScript malicioso:
```
<script>alert('XSS');</script>
```
La aplicación sirve por error este archivo con el tipo MIME text/plain. Sin embargo, si el navegador decide rastrear el archivo y determina que en realidad es HTML, puede ejecutar JavaScript, lo que resultará en un ataque XSS.

##### CROSS ORIGIN RESOURCE SHARING
El método HTTP options solicita opciones de comunicación permitidas para una URL o servidor determinado. Esto se puede utilizar para probar los métodos HTTP permitidos para una solicitud o para determinar si una solicitud tendría éxito al realizar una solicitud de verificación previa de CORS. Un cliente puede especificar una URL con este método, o un asterisco (*) para hacer referencia a todo el servidor.

En express para manejar CORS se deben hacer dos cosas. Una es agregar el middleware CORS y la otra crear una ruta app.options(‘*’, cors()), para que se ejecute cada vez que se reciba una petición con el método options. En desarrollo se puede permitir el acceso a todos los dominios por motivos de comodidad, pero en producción, es una buena práctica que la API solo pueda ser accedida por el mismo dominio.

De forma predeterminada, los navegadores web aplican una política del mismo origen, lo que significa que el código JavaScript que se ejecuta en una página web solo puede realizar solicitudes al mismo origen que la propia página. El intercambio de recursos entre orígenes (CORS) permite el acceso controlado a recursos de diferentes orígenes, lo que permite a los sitios web compartir recursos entre diferentes dominios sin dejar de mantener la seguridad.

Cuando una página web realiza una solicitud de origen cruzado, el servidor debe incluir encabezados CORS específicos para indicar qué orígenes tienen permiso para acceder a sus recursos. Luego, el navegador verifica estos encabezados y permite o bloquea la solicitud según la política CORS configurada. Este mecanismo ayuda a evitar que solicitudes de origen cruzado no autorizadas accedan a datos confidenciales almacenados en un servidor. CORS es esencial para permitir solicitudes seguras de orígenes cruzados. Al especificar los orígenes permitidos, solo se accederá a las API desde el propio dominio, lo que reduce el riesgo de fuga de datos o acceso no autorizado.

##### REGEX DENIAL OF SERVICE
La denegación de servicio de expresión regular puede ocurrir existe una expresión regular vulnerable en la que el motor de expresión regular puede tardar un tiempo exponencial en ejecutarse.

Cuando hace coincidir una cadena con una expresión regular vulnerable, el event loop estará ocupado haciendo coincidir la cadena dada y el servidor negará el servicio a las solicitudes.
Por ejemplo, esta expresión regular encuentra una coincidencia que comienza con (una o más letras minúsculas y cualquier carácter)+ termina con uno o más alfabetos. ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
´´´
const expresión regular = /^([a-z]+.)+[A-Za-z]+$/;   
const found = str.match(regEx);console.log(regEx);
´´´
Ahora, suponiendo que tiene una expresión regular que valida si la entrada de un usuario coincide con la expresión regular anterior. Si un usuario pasa algo como “a7a7Hcc” no habrá problema, simplemente funciona bien. El problema comienza cuando un atacante explota una combinación de entradas que pueden impedir que el servidor funcione.

La denegación de servicio de expresiones regulares se activa cuando hay una discrepancia, pero Node.js no puede estar seguro hasta que prueba muchas rutas a través de la cadena de entrada.

Un motor Regex tiene una función llamada retroceso. Simplemente, si la entrada (token) no coincide, el motor vuelve a posiciones anteriores donde podría tomar un camino diferente. El motor intenta esto muchas veces hasta que explora todos los caminos posibles.

Muchas personas tienen una comprensión equivocada cuando se trata de que node js funcione sin bloqueo, ya que las coincidencias de expresiones regulares ocurren en el bucle de eventos, incluso su característica asincrónica favorita del nodo js no lo salvará.

La solución puede ser escribir una expresión regular segura que no tenga una expresión regular malvada como la siguiente con anidado (+,*,|). Existen algunas herramientas para verificar la seguridad de las expresiones regulares, como el paquete safe-regex.