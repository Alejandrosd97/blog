---
title: 'Docker'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---






Una transacción es una colección de querys de sql que actúan como una única unidad de trabajo. Las transcciones empiezan con la palabra BEGIN, a partir de ahí, se van ejecutando las querys que componen la transacción, pero los cambios generados no son duraderos. Para que lo sean se debe hacer COMMIT. Para deshacer los cambios se hace ROLLBACK. Que se produzcan crashes durante el commit es muy peligroso, por eso, algunos administradores de bases de datos están diseñados para optimizar la velocidad de los commit, como es el caso de Postgres


##### PRINCIPIOS ACID
###### Atomicity
Este principio define que todas las querys de una transacción se deben completar exitosamente. Si una query falla, por ejemplo, por un error de sintaxis de SQL, todas las querys anteriores de esa transacción deben hacer rollback. Si la base de datos se cae antes de hacer commit, también se debe hacer rollback de todas las transacciones. La falta de atomicidad lleva a inconsistencias, por ejemplo para llevar a cabo una transacción económica primero se actualiza un cuenta decrementando una cantidad y luego se incrementa la cantidad en la cuenta de destino. Si no se sigue este principio y hay algún problema en el proceso puede ocurrir que el dinero se descuente en una cuenta pero no se incremente en la otra, esto es una inconsistencia. Un transacción atomica es aquella que hace rollback si alguna query falla

###### Isolation
El principio de aislamiento dice que múltiples transacciones simultáneas no deberían afectarse entre sí. Hay varias formas en las que las transacciones simultáneas pueden interferir entre sí: Las transacciones en curso ven los cambios realizados por otras transacciones y una transacción confirmada que se ejecutó en paralelo con una transacción en curso. Como consecuencia, obtienen vistas de lectura llamadas fenómenos de lectura. Existen varios

Dirty read: Una transacción en curso lee algo que otra transacción ha escrito pero que todavía no ha hecho commit, dando la posibilidad de que ese cambio haga rollback.

Lecturas no repetibles: puede ocurrir que en una transacción se lea varias veces un mismo valor, no se trata de ejecutar la misma query, sino que pueden haber varias querys que accedan al mismo valor, por ejemplo para hacer algún cálculo matemático. La lectura no repetible se da cuando la base de datos vuelve a leer un valor que ya ha leído previamente y éste cambia

Lecturas fantasma: Similar a las lecturas no repetibles, se aplica en querys de rango o consultas que involucran varias filas, donde se obtienen diferentes conjuntos de datos debido a la inserción/eliminación de ciertas filas  FALTAAAAA

###### Consistencia 
La consistencia se puede definir como la propiedad de obtener resultados esperados al trabajar en una base de datos. Existen dos tipos de consistencia, la primer es la consistencia de datos. Significa coherencia en los datos, esto hace referencia a la integridad referencial. La integridad referencial es un método para garantizar que las relaciones entre tablas sigan siendo consistentes y está definida por el administrador de la base de datos. Generalmente se aplica mediante el uso de claves externas. La falta de atomicidad y aislamiento pueden resultar en inconsistencia de datos.

Otro tipo es la inconsistencia de lectura, puede darse cuando los cambios confirmados no son visibles de manera inmediata para otras transacciones. En ocasiones, para mejorar el rendimiento de las bases de datos se crean varias instancias de la misma base de datos, una de ellas se encarga de las operaciones de escritura y las demás son réplicas solo de lectura. En este caso puede tardar un tiempo desde que se confirma una operación de escritura hasta que el cambio se propaga a las réplicas de lectura, de manera que las transacciones no están obteniendo el valor actualizado.

###### Durabilidad
La durabilidad es una garantía de que los cambios realizados por una transacción confirmada persisten en el tiempo. Todas las transacciones confirmadas se deben guardar en un almacenamiento duradero y no volátil, es decir, en disco. Esto garantiza que cualquier transacción confirmada esté protegida incluso si la base de datos falla, o se produce un fallo eléctrico. Cuando se hace una operación que requiere escritura en el disco los sistemas operativos suslen guardar la información en el caché para realizar múltiples operaciones de escritura en una sola vez y no tener que hacerlas una por una, lo cual afecta al rendimiento. Para la base de datos los cambios han sido confirmados y guardados pero si hay un crash del sistema operativo o un apagón, en realidad los cambios no se han llevado a cao de manera persistente. Para evitar esto existe el comando fsync, que fuerza al sistema operativo a escribir en el disco de manera inmediata, aunque disminuye la velocidad de la escritura y los commits.