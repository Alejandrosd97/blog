---
title: 'Bases de datos'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



##### INDEXING

Los sistemas de gestión de bases de datos relacionales (RDBMS) utilizan varias estructuras de tablas subyacentes para organizar los datos de una manera que permita el almacenamiento y la recuperación eficiente de la información. Dos estructuras de tablas comúnmente utilizadas son las tablas organizadas por heap y las tablas organizadas por índice.

###### TABLA ORGANIZADA POR HEAP
Las tablas organizadas por heap, también conocidas como tablas desordenadas, almacenan datos en un formato no estructurado, sin ningún orden físico ni indexación en particular. Los datos se insertan en la tabla en el orden en que se reciben y se asignan a la siguiente página de datos disponible.

###### TABLA ORGANIZADA POR ÍNDICE
Las tablas organizadas por índice almacenan datos en un orden físico basado en alguna clave única. La mayoría de los sistemas RDBMS utilizan un btree para almacenar los datos donde cada bloque de hojas en la estructura del índice almacena tanto las columnas clave como las que no son clave.

Principalmente, se crea un índice en las columnas especificadas en la cláusula WHERE de una consulta, ya que la base de datos recupera y filtra datos de las tablas en función de esas columnas. Si no se crea un índice, la base de datos escanea todas las filas, filtra las filas coincidentes y devuelve el resultado. Con millones de registros, esta operación de escaneo puede tardar muchos segundos y este alto tiempo de respuesta hace que las API y las aplicaciones sean más lentas e inutilizables. En caso de filtrar usando WHERE sobre una columna que no está indexada resultará en un tiempo de respuesta mucho mayor, ya que se deben recorrer todos los registros uno por uno hasta encontrar el correcto. Este proceso se conoce como scan. Si encima se utiliza LIKE, el rendimiento es aún peor.

Aunque los términos key e índice se usan indistintamente, clave significa una restricción impuesta al comportamiento de la columna. La primary key es un campo que no admite valores NULL y que identifica de forma única cada fila. Por otro lado, el índice es una estructura de datos especial que facilita la búsqueda de datos en la tabla.

La mayoría de los sistemas RDBMS permiten crear una tabla organizada por índices creando un índice agrupado en la tabla. Dado que un índice agrupado es el índice en el que está organizada la tabla real, solo puede tener uno de ellos, 

En ciertos sistemas RDBMS, como MySQL, tener un índice agrupado es obligatorio y, si no se define uno explícitamente durante la creación de la tabla, se creará automáticamente. Las tablas organizadas por índice suelen ocupar más espacio que las tablas organizadas en heap, ya que deben mantener la estructura de datos subyacente para el índice.

En cuanto a la inserción de datos, este proceso es más rápido en tabals que usan heap. Esto se debe a que al agregar una nueva fila a una tabla organizada por índice, primero se debe realizar una búsqueda para encontrar la ubicación correcta para mantener el orden de la tabla. Por el contrario, con las tablas organizadas por heap, se pueden insertar nuevas filas directamente en la siguiente página de datos disponible sin necesidad de realizar una búsqueda. No obstante, ls recuperación de datos es mucho mñas rápida en las tablas que usan índices.

##### ORM
Un ORM es una biblioteca que encapsula el código necesario para manipular los datos, por lo que ya no es necesario usar SQL, sino que se interactúa directamente con un objeto en el mismo lenguaje de programación. En el caso de javascript, uno de los ORM más populares es [Prisma](/blog/javascript/nodejs)

##### PROBLEMA N + 1
Normalmente, esto sucede cuando el código se esctructura de modo que primero se realiza una consulta para obtener una lista de registros y luego se realiza otra consulta para cada uno de esos registros.

Es de esperar que muchas consultas pequeñas sean rápidas y una consulta grande y compleja sea lenta, pero en realidad, ocurre todo lo contrario. Cada consulta debe enviarse a la base de datos, la base de datos debe realizar la consulta y luego envía los resultados a la aplicación. Cuantas más consultas se realicen, más tiempo llevará obtener los resultados, y cada viaje al servidor de la base de datos requiere tiempo y recursos. Por el contrario, una única consulta, incluso si es compleja, puede ser optimizada por el servidor de la base de datos y solo requiere un viaje a la base de datos, lo que normalmente será mucho más rápido que muchas consultas pequeñas.




