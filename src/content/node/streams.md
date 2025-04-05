---
title: 'Streams'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
id : 6
---

##### STREAMS
Los streams se utilizan principalmente para enviar datos desde una fuente a una ubicación en un orden particular. Son una forma eficaz de manejar el intercambio de información entre aplicaciones, introducida en Unix, para pasar datos a una aplicación en una secuencia sin tener que esperar por el contenido completo, lo que puede llevar mucho tiempo.

Se puede crear un stream de lectura usando el módulo fs. Los streams tienen la capacidad de escuchar el evento ‘data’, que se dispara cada vez que el stream recibe un pedazo de información, llamado 'chunk'. En Node, los chunks tienen un tamaño de 16kb por defecto. Para poder leer el texto como tal, se debe especificar el tipo de codificación, en este caso utf8. La diferencia entre usar streams o usar fs.readFile() y fs.writeFile(), es que con los streams no es necesario esperar a que toda la información se cargue en la memoria.

Leer un stream y luego transmitirlo es bastante común, por eso Node trae incorporado la función pipe(), que cumple ese propósito. No es necesario escuchar el evento 'data' ni escribir en el stream de manera manual. El método pipe() solo se puede usar en streams de lectura, y recibe como argumento el stream de escritura al cual se transmite la informaciñon().

Es común usar pipe() en un servidor para enviar la información como un stream, pero en este caso se le pasa la información al objeto response. Para enviar texto plano se debe especificar en los headers como ‘Content-Type’ : ‘text/plain’ y  para enviar html, como ‘text/html'. Para enviar un objeto como json el tipo es ‘application/json’. Por ejemplo:

´´´
res.writeHead(200, {'Content-Type' : 'text/html'})
´´´

El método reponse.end() espera como argumento un string o un buffer, por lo que para enviar un json como respuesta es necesario serializarlo con el método JSON.stringify().

En el ejemplo siguiente, el cuerpo de la respuesta es un stream de lectura, por lo que es necesario capturar el evento ‘data’, para ver lo que se va transmitiendo y el evento ‘end’ , que se ejecuta cuando la respuesta termine. Además, también es necesario encadenar el método end() a http.request(), para que no de el error ‘socket hang up’. Por norma general, al usar el módulo http, la respuesta es un stream de escritura, sobre el cual se puede usar el método write(). Por ello es mecesario llamar al método end(), que dará por finalizada la respuesta para no seguir esperando chuns de información que no van a llegar

```
const http = require('http')
const https = require('https')

http.createServer((req, res)=>{
https.request('https://www.google.com', (res)=>{
res.on('data', (chunk) => {console.log(chunk)})
res.on('end', ()=> console.log('Respuesta terminada'))
}).end()

res.end('respuesta enviada al cliente')

}).listen(3000, ()=>console.log('Funcionando en puerto 3000'))
```

Los streams se pueden crear sobre archivos abiertos con open(). Y luego usar stream.write() para escribir en el stream. Ademas de escritura y lectura, hay otros dos tipos mas de stream, duplex, que puede leer y escribir, y transform. Este ultimo transforma la informacion a medida que pasa por el stream. Es usado, por ejemplo, para comprimir la información, buscando patrones y sustituyéndolos por otros mas cortos. El proceso de vaciar un buffer para poder serguir llenándolo con la siguiente información de conoce como 'draining'. Para enviar información al buffer del stream se usa el método stream.push() y cuando éste se llena ocurre el evento ‘data’. Los streams duplex tienen dos buffers en su interior, uno para la lectura y otro para la escritura.

Para saber como de lleno está el buffer de un stream de escritura los streams tienen la propiedad writableHighWaterMark, que indica el tamaño del buffer y writableLength, que indica la cantidad de bytes escritos, de manera que el segundo no debe ser nunca superior al primero. Cuando el stream no está lleno, y por lo tanto es posible seguir escribiendo, la función stream.write() devuelve true. Lo que se suele hace es crear un buffer con el mismo tamaño del buffer del stream y pasárselo como argumento. Cuando el buffer se llena, hay que dejar un tiempo para que el espacio se libere y seguir llenando el buffer con mas data. Para ello se escucha al evento ‘drain’. Este evento recibe un callback, en el cual no se puede volver a llenar el buffer porque se volvería a emitir el evento drain, generando un bucle infinito. Para terminar un stream de escritura se usa el método stream.end(), que puede recibir como argumento el último chunk a transmitir, aunque no es necesario. Esto emite un evento ‘finish’. En cuanto a los streams de lectura no es necesario emitir el evento de manera manual puesto que se hace de manera automática.

En los streams de lectura, los chunks recibidos no son de 16kb, como los buffers de los streams de escritura sino de 64kb, no obstante, el método createReadebleStream puede recibir un objeto con la propiedad highWaterMark para cambiar el tamaño por defecto de los chunks. Cuando se crea el stream solo se empieza a leer sin se escucha el evento data, si no su estado es en pausa.

Al igual que la función write() permite escribir un buffer, la función read() permite leer un chunk. Este chunk que se devuelve tiene la propiedad byteRead, que se puede usar como condición de un bucle while para calcular cuando se llega al final del archivo, en cuyo caso serán 0.

Agunas funciones del módulo fs utilizan streams, por ejemplo, fs.copy() copia el archivo usando streams. 

##### STREAMS PERSONALIZADOS
Se puede crear un stream personalizado empleando una clase que herede de la clase Writable. En el caso de un stream de escritura se debe implmentar un método _write, que es lo que se va a ejecutar cuando se llame a stream.write(). Este método consta de tres parámetros, chunk, encoding y un callback, que se llamará al final de la función. Este callback recibe un solo parámetro que es el error, y se puede omitir. Es importante, que de ninguna manera se emitan eventos desde esta clase hija puesto que podría originar problemas. Tampoco se debe sobreescribir el método write(), sino que se debe llamar _write(), ni intentar llamar al método _write() directamente desde la instancia.

Otro método que se puede implementar es _construct(), que se ejecutará justo después del método construct() y recibe un callback como argumento. Un buen uso para esta función es abrir el archivo con el que se va a trabajar. En caso de haber un error se ejecuta el callback pasándole el error como argumento y en caso de que el código se ejecute correctamente no se le pasa. Los demás métodos no se pueden ejecutar hasta que construct no haya terminado.