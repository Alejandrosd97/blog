---
title: 'Programación asíncrona'
id : 4

description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### CALLBACKS
En la programación síncrona, el programa solo puede realizar una tarea a la vez y no es posible iniciar otra tarea hasta que se complete la primera, es decir, el código se ejecuta de manera secuencial. Este paradigma de programación también se denomina código de bloqueo, ya que un proceso debe esperar a que finalice otro para ejecutarse.  

Un callback es una función que se pasa como argumento a otra función que luego será llamada dentro de ella. Son muy usados en la programación orientada a eventos, donde se registra una función que será llamada cuando un determinado evento ocurra, un ejemplo serían los event listeners o setTimeOut(), que ejecuta el callback cuando el tiempo establecido se agota. 

Antes de las promesas los callbacks eran la única forma de trabajar de manera asíncrona, pero esta manera de escribir código en ocasiones puede dar lugar a lo que se conoce como callback hell. El callback hell ocurre cuando se anidan varios callbacks unos dentro de otros, lo que conduce a un código complejo y difícil de administrar, dificultando el seguimiento el flujo del programa y el manejo de los errores.


##### PROMESAS
Las promesas ofrecen una forma mucho más manejable y estructurada de manejar el código asíncrono que los callbacks. Una promesa ppodría definirse como la garantía de la devolución de un valor en el futuro. Las promesas también son objetos y pueden tener tres estados, pendiente (no tiene aún un valor), resuelta (ya ha obtenido un valor) o rechazada (ha habido algún error a la hora de obtener un valor). Para obtener el valor que ha devuelto la promesa se encadena el método then(), que recibe un callback que será ejecutado cuando la promesa se resuelva. Para manejar el error generado en una promesa rechazada se usa el método catch(), que recibe callback como argumento. Dicho callback recibe el error como argumento para poder acceder a él en el cuerpo de la función. Las promesas se pueden encadenar, de manera que una promesa retorna otra promesa. En este caso solo en necesario usar catch() al final para manejar un error que ocurra en cualquiera de las promesas encadenadas. 

Las funciones que utilizan la palabra clave async siempre retornan promesas, y permiten escribir código que tiene la apariencia de ser síncrono pero es no bloqueante. Dentro de una función asíncrona se puede usar la palabra await, lo que esto hace es parar la ejecución y esperar a que una promesa sea resuelta para seguir con la ejecución del código de manera descendente. Al trabajar con async await, el manejo de errores se hace intrduciendo el código asíncrono dentro de un bloque try catch. 

Las promesas también pueden ser creadas de manera manual con la palabra clave new Promise, la promesa acepta como único argumento una única función que a su vez acepta dos valores como argumentos, resolve y reject. Estos argumentos son funciones que definen los valores que se van a retornar en caso de que la promesa sea resuelta o rechazada.

###### MÉTODOS CON PROMESAS
Exite un método llamado Promise.all() que recibe un array de promesas y devuelve otra promesa que será resuelta una vez que todas las promesas del array se resuelvan y será rechazada si cualquiera de las promesas del array es rechazada. Otro método interesante es Promise.allSettled(). Funciona de manera parecida a Promise.all() con la diferencia que la promesa que devuelve se resuelve una vez que todas las promesas del array se hayan comPletado o hayan sido rechazadas, devOlviendo un array de objetos donde cada uno de estos objetos describe el resultado de cada promesa. EL método Promise.race() recibe también un array de promesas y devuelve una promesa. Esta promesa se resuelve tan pronto cuando una de las promesas del array es resuelta o rechazada, sin esperar a las demás. 
