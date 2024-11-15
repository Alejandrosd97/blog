---
title: 'CLI'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

Para trabajar con la terminal Node ofrece el módulo readline soporta promesas callbacks. Se crea un objeto con el método rl.createInterface() especificando el input y output. Luego se puede pedir input en la consola usando el método question(). El objeto stdout permite manejar el output de la consola, por ejemplo borrar una línea o mover el cursor. La función clearLin() recibe un  número como argumento, 0 para borrar la línea entera, -1, para borrar a la izquierda del cursor y 1 para borrar a la derecha del cursor. Como segundo parámetro recibe un callback. Para mover el cursor se usa la función moveCursor(), acepta dos argumentos, uno para mover el cursor en el eje x y otro en el eje y, además de un callback. Estas dos funciones se encuentran en el módulo tty de node.