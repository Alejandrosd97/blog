---
title: 'Eventos'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
id : 8
---

En el backend, Node ofrece la posibilidad de crear un sistema similar al de los eventos en el navegador. Los emisores de eventos son objetos en Node que activan un evento enviando un mensaje para indicar que se completó una acción. En este contexto, los eventos se componen de un string de identificación y cualquier información que deba pasarse a los oyentes.

Para ello se utiliza el módulo events. El objeto que se usa para manejar los eventos es una instancia de la clase EventEmitter y sus métodos mas importantes son emit(), para emitir un evento y on() para ejecutar un callback cuando un evento determinado ha ocurrido. Se le pueden pasar argumentos a la función emit(), que luego se recogerán como argumentos en el callback y podrán ser usados en su interior, incluso si este no tiene parámetros. La función emit() por defecto devuelve true si hay suscriptores al evento y false si no los hay.

Existe un objeto maestro en el cual se añaden las funciones asociadas a un evento. Cada vez que se usa el método on(), se añade una nueva función a ese objeto, asociada a ese evento. Cuando se ejecuta el método emit(), se itera sobre las funciones que contiene ese objeto maestro y se ejecutan aquellas funciones que se encuentran asociadas a ese evento. Las funciones correspondientes al mismo evento se almacenan en un array. El método emit admite un segundo parámetro, que se pasará como argumento al callback.

El patrón emisor-suscriptor supone una alterantiva a la programación asíncrona, siendo una opción mas desacoplada en la que los emisores de eventos no saben nada de los suscriptores y no deben preocuparse por ellos y en caso de necesitar cambios simplemente se debe ajustar como los suscriptores manejan el evento, pero no el evento en sí. Para que un evento se escuche solo la primera vez que se emite se usa once() en vez de on(). Funciona igual con la diferencia de que el oyente se elimina una vez el evento ha sido manejado.