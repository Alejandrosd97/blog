---
title: 'Programación funcional'
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


La programación imperativa consiste en describir como funciona un programa usando sentencias y código para manipular el estado. Un dicho muy popular es que en javascript las funciones son ciudadanos de primera clase, esto se debe a que pueden ser tratadas como cualquier otro valor, por ejemplo se pueden guardar en variables, ser pasadas a otras funciones como argumentos, guardarse en un array o ser devueltas por otras funciones.

Las funciones puras son aquellas que tienen un comportamiento determinístico, lo que significa que  con el mismo input siempre generan el mismo resultado, además las funciones puras no dependen de ningún estado mutable. Dependen solo de sus argumentos y no causan ningún efecto secundario. Una función que actúa modificando el valor de una variable externa no es pura. La primera función de la imagen no sería pura pero la segunda sí. Una función de orden superior es una función que recibe una función como argumento, retorna una función, o bien ambas.

El principio de inmutabilidad dicta que cunado una estructura de datos es creada, no debería ser modificada. Un objeto definido con const no se puede reasingar a otro valor pero el valor de sus propiedades sí. Esto se relaciona con la programación funcional debido a que muchos de los métodos que vienen con javascript implican crear una copia de los datos y aplicar la lógica sobre esa copia en vez de modificar la fuente original. Por ejemplo el método array.filter() devuleve otro array con los elementos que pasan el filtro establecido en el callback pero no modifica el array original, de esta manera se evita generar efectos no deseados al no modificar los daros originales.

Cuando se guarda un método en una variable se puede usar el método call() para inidicar sobre que objeto se debe llamar la función. Esto sirve para reutilizar métodos y poder reutilizarlos con más objetos. Otra forma de manipular el valor de this es la función apply(). Funciona de manera muy similar a call() con la diferencia de que espera los argumentos en array, que serán pasados al método como argumentos individuales. El método bind() crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado.

Dentro de las funciones que actúan como timers, como setInterval() o setTimeout(), el objeto sobre el que son invocadas es window, por lo que, aunque se utilicen dentro de una clase, el valor de this será siempre window y no la instancia. Para asegurarse de que el valor de this corresponde a la instancia y no a window, se debe ligar el valor de this mediante la función bind(). Otro enfoque sería usar funciones flecha, ya que estas funciones no reciben un valor nuevo para la palabra this, por lo que pueden ser usadas en los casos anteriores sin necesidad de hacer binding
