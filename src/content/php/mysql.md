---
title: 'MySQL'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


Para conectarse a la base de datos se ejecuta la función mysqli_connect(host, usuario, contraseña, base de datos) y se guarda en una variable, para tener acceso a la conexión. La función mysqli_connection_errno() devuelve el error en caso de que se haya producido uno.

Las querys a la base de datos se llevan a cabo con la función mysqli_query(), siendo el primer argumento la conexión previamente creada y el segundo la query de SQL.

