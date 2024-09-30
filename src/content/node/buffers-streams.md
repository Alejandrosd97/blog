---
title: 'Buffers y streams'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/algoritmo.svg'
---


##### STREAMS Y BUFFERS
Los buffers son un espacio de almacenamiento temporal para un pedazo de información que se transfiere de un lugar a otro. Se llena el buffer con una parte de la información y se transfiere. En vez de esperar a que toda la información se copie en memoria, se va pasando al buffer hasta que éste está lleno, momento en que se transifere su contenido y empieza a llenarse de nuevo con mas data

Los streams se utilizan principalmente para enviar datos desde una fuente a una ubicación en un orden particular. Son una forma de manejar el intercambio de información entre aplicaciones, introducida en el sistema operativo Unix, que ha resultado útil para pasar datos a una aplicación en una secuencia sin tener que esperar por el contenido completo, lo que puede llevar mucho tiempo.

Se crea un Stream de lectura usando el módulo fs. Los streams tienen escuchar el evento ‘data’, que se dispara cada vez que el stream recibe un pedazo de información, llamado chunk. en node, los chunks tienen un tamaño de 64kb por defecto. Para poder leer el texto como tal se debe especificar el tipo de codificación, en este caso utf8. La diferencia entre usar streams o usar fs.readFile y fs.writeFile, es que con los streams no es necesario esperar a que toda la información se cargue en la memoria.

Leer un stream y luego transmitirlo es bastante común, por eso Node trae incorporado la función pipe, que cumple ese propósito. No es necesario escuchar eventos data no escribir en el stream de manera manual. El método pipe() solo se puede usar en streams de lectura.

Se puede usar pipe en un servidor para enviar la información como un stream usando pipe, pero en este caso se le pasa la información al objeto res. Para enviar texto plano se debe especificar en los headers como ‘Content-Type’ : ‘text/plain’ y  para enviar html, como ‘text/html. Para enviar un objeto como json el tipo es ‘application/json’.

´´´
res.writeHead(200, {'Content-Type' : 'text/html'})
´´´

El método res.end() espera como argumento un string o un buffer, por lo que para enviar un json como respuesta es necesario serializarlo con el método JSON.stringify().

Al usar el módulo http para hacer una petición, el cuerpo de la respuesta es un stream de lectura, por lo que es necesario capturar el evento ‘data’, para ver lo que se va transmitiendo y el evento ‘end’ , que se ejecuta cuando la respuesta termine. Además también es necesario encadenar el método end() a http.request(), para que no de el error ‘socket hang up’

```

const http = require('http')
const https = require('https')

http.createServer((req, res)=>{
https.request('https://www.google.com', (res)=>{
res.on('data', (chunk) => {console.log(chunk)})
res.on('end', ()=> console.log('res terminada'))
}).end()

res.end('respuesta enviada al cliente')

}).listen(3000, ()=>console.log('funcionando en puerto 3000'))

```
