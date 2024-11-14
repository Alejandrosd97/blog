---
title: 'Compresión'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

Se utiliza el módulo zlib, que cuenta con la función createGzip(), se trata de un stream de transformación. Para descomprimir el archivo comprimido previamente se usa la función createGunzip()

##### ALGORITMOS LOSSLESS y LOSSY
El primer algoritmo lossless es la familia de algoritmos lz. Cuando hay una expresión que se repite varias veces en un texto, se guarda la primera y las siguientes simplemente se referencia a esa primera. Se indica cuantos bytes se debe retroceder para llegar al inicio de la expresión y desde ahñi cuantos bytes hacia delante para llegar al final de esa expresión, por ejemplo [746, 8]. Esta referencia tiene una cantidad de bytes que debe ser definida, y dependiendo de su tamaño, la cantidad de bytes que se pueden retroceder es el número máximo que se pueda expresar con esa cantidad de bytes. Si se dedican 4 bits???????? a este propósito, solo se podrá retroceder 15 bytes. El primer item es lo que se conoce com window size y se puede modificar con node.

Respecto al algoritmo de Hoffman, este se basa en la capacidad de predicción de las probabilidades de aparición de cada carácter, asignándole una cantidad de bits en función de dicha probabilidad. Los caracteres mas repetidos son asignados menos bits que los mas infrecuentes. Cuanto más acertada sea la predicción, mas espacio se podrá ahorrar. No obstante, si se calcula mal, el resultado final podría ocupar incluso mas espacio. El algoritmo utiliza un heap por detrás. Un ejemplo de compresión lossless es PNG o FLAC, para audio. Zip es similar a gzip, y está basado en deflate.

Alguno de los métodos de compresión lossy son JPEG, MP3, AAC H.264. En este caso, una vez que se realiza la compresión, no hay manera de volver al original. 

El módulo zlib es a su vez dependiente de dos módulos. Zlib y brotli. Zlib da soporte a gzip y deflate y brotli a brotli.

##### HEADER ACCEPT-ENCODING
Al hacer un petición el header accept-encoding dice que tipo de codificación es aceptada y en la respuesta, el header content-encoding indica que método de codificación de los especificados en la petición se ha usado, por ejemplo gzip. Al enviar data comprimida en una petición html, el header content-length debe especificar la longitud de la información comprimida, no el tamaño original. Esto se hace para que el cliente (o el servidor) no se quede esperando el resto de bytes, que no van a llegar. La compresión de la información de la respuesta se suele realizar en mediante un proxy, normalmente nginx, que está instalado en el mismo servidor y comprime la información antes de enviarla al cliente. Es más fácil hacerlo así que tener que configurar la compresión en el servidor de node.