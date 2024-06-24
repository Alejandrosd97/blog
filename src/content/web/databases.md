---
title: 'Bases de datos'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



##### INDEXING

Un índice asigna claves de búsqueda a los datos correspondientes en el disco mediante el uso de diferentes estructuras de datos en memoria y en disco. El índice se utiliza para acelerar la búsqueda reduciendo el número de registros a buscar.

Principalmente, se crea un índice en las columnas especificadas en la cláusula WHERE de una consulta, ya que la base de datos recupera y filtra datos de las tablas en función de esas columnas. Si no se crea un índice, la base de datos escanea todas las filas, filtra las filas coincidentes y devuelve el resultado. Con millones de registros, esta operación de escaneo puede tardar muchos segundos y este alto tiempo de respuesta hace que las API y las aplicaciones sean más lentas e inutilizables.

Aunque los términos key e índice se usan indistintamente, clave significa una restricción impuesta al comportamiento de la columna. La primary key es un campo que no admite valores NULL y que identifica de forma única cada fila. Por otro lado, el índice es una estructura de datos especial que facilita la búsqueda de datos en la tabla.