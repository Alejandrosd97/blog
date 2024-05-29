---
title: 'Bases de datos'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


faltan cosas

##### AURORA
Tiene compatibilidad con Postgres y Mysql. Normalmente, una base de datos es una combinacion de una instancia de computacion y una de almacenamiento, pero en aurora esas dos instancias estan despegadas, lo cual mejora la escalabilidad, la disponibilidad y la durabilidad. Aurora guarda los datos en varias AZ. Usa “gossip protocol”, que sirve para descubrir discrepancias y arreglarlas de manera rápida. Existen varios tipos:
- Preconfigurada: Tiene una capacidad fija, se puede escalar pero se debe hacer de manera manual.
- Serverless: Autoescalable. Existe v1 y v2, que es la que se utiliza hoy en día. Mucho mas potente que Postgres y Mysql. Permite crear hasta 16 copias distribuidas en tres AZ.

El servicio Aurora Global Database actúa como un contenedor para varios clusters repartidos por todo el mundo que actuan como una base de datos cohesionada. Hay un cluster principal y otros que son read only en otras regiones. La unidad de medida de Aurora serveless es ACU (Aurora Cluster Unit), que equivale a 2Gb de memoria, siendo el mínimo 0,5Gb y el máximo 128Gb.

##### RDS PROXY
Ofrece un pool de conexiones a RDS limitadas y las reutiliza cada vez que la app realiza una query de SQL. Esto se hace para no tener que estar abriendo y cerrando conexiones cada vez, lo que utiliza menos recursos del servidor.

##### REDSHIFT

Se trata de un data warehouse que se utiliza para consolidar data de varias fuentes, una fuente única para todos los datos. Se considera una base de datos relacional y se basa en el motor de Postgres, por lo que se puede usar SQL para ejecutar querys. Está optimizado para operaciones analíticas, por lo que no está pensada para OLTP. Redshift es un data warehouse completamente administrado por AWS. Emplea técnicas de compresión de datos para reducir los requisitos de almacenamiento. Utiliza procesamiento paralelo masivo.Tiene dos nodos:
- Leader node: Se ocupa de la coordinación y optimización de querys.
- Compute nodes: Ejecutan querys y computaciones.

La diferencia entre Redshift y otras bases de datos radica en que su arquitectura está basada en columnas, no en filas. Esto permite querys paralelas eficientes. Soporta despliegue multi-AZ, pero de momento solo en 2 AZ. Las snapshots son incrementales y pueden ser automatizadas o manuales pero siempre se almacenan en S3 y no se puede administrar dicho bucket. No se puede pasar de multi-AZ a single-AZ ni viceversa. Para optimizar el rendimiento de Redshift, lo recomendado es insertar los datos en grandes cantidad cada vez (batches). Redshift serverless permite escalar muy fácilmente, cosa que Redshift on-premise no permite, ya que se debe pagar por los recursos aunque no estén en uso. Serverless mide la capacidad del warehouse según una unidad llamada RPU. 1RPU equivale a 16Gb de RAM.

##### DYNAMODB Y DYNAMODB ACCELERATOR (DAX)
Compuesta por tablas, ítems y atributos. Cada tabla debe tener una primary key, pudiendo ser ésta un único atributo (single atribute) o una combinación (composite) de dos atributos (partition key y sort key). DynamoDb stream es una secuencia de eventos ordenada en el tiempo que registra todas las modificaciones de las tablas de DynamoDB casi en tiempo real. Cada vez que se añade, edita o se borra un ítem de la tabla, se genera un stream, que puede ser usado como evento para desencadenar una funcion lambda. DynamoDB distribuye la data en particiones, que están replicadas en tres AZ. Además permite tablas globales para disponibilidad multi-región. 

Hay dos tipos de base de datos, standard access table class e infrequent access table class. DynamoDB es serverless, por lo que no hay que preocuparse de crear instancias. Se puede exportar la data por ejemplo a S3, Cloudtrail o Cloudwatch.

Amazon DynamoDB Global Tables proporciona una solución de base de datos multiactiva, multirregional y totalmente administrada. Replica automáticamente datos en múltiples regiones de AWS, brindando acceso de baja latencia a los datos a nivel global y garantizando una alta disponibilidad.

DAX es un cache en memoria para DynamoDb. Si se hace una petición, ésta pasa primero por DAX y si no lo encuentra la información deseada pasa entonces a DynamoDb. Al devolver la información DAX la almacena en cache para futuras querys.

##### ELASTICACHE
Soporta Redis y Memcached. Un clúster es un grupo de varios cache nodes. Los node types determinan la CPU y la memoria de los nodos. Cluster parameter group es la configuración del motor del cluster. Cluster security group define la conectividad a la red. Elasticache con Redis ofrece cifrado en reposo y read replicas. Si el nodo principal se cae se puede usar uno de los secundarios como primario. En Redis, los nodos se agrupan en shards que forman los clúster. Cada shard tiene un nodo principal y hasta 5 réplicas. El cache se almacena en RAM, y por lo tanto, es mucho mas rapido que las bases de datos que se almacenan en disco.

##### DOCUMENTDB Y KEYSPACES
DocumentDb es una base de datos totalmente administrada compatible con MongoDb. Puede tener hasta 16 instancias, una primaria y las demas solo de lectura. Global cluster permite replicar clústers en difrerentes regiones. Mantiene múltiples copias de la información en 3 AZ. Las preferencias de lectura ofrecen mucha flexibilidad al poder dirigir las querys al nodo principal o a una réplica (por ejemplo a la mas cercana).

Keyspaces por su parte, es la solución deAWS para la base de datos de Apache Cassandra. Es serverless, de modo que solo se paga por lo que se usa. Cassandra no es SQL, pero utiliza Cassandra Query Language (CQL), que es muy similar.

##### NEPTUNE
Una base de datos de gráficos almacena nodos y relaciones en lugar de tablas o documentos. Los datos se almacenan del mismo modo que se podrían dibujar ideas en una pizarra. Sus datos se almacenan sin restringirlos a un modelo predefinido, lo que permite una forma muy flexible de pensar y utilizarlos. Neptune es la base de datos de gráficos totalmente administrada de AWS. Está diseñada para aplicaciones distribuidas globalmente. Una sola base de datos puede abarcar varias regiones, hay un nodo principal en una region y otro nodos solo de lectura en las demás. Existe la opción de que sea serverless, por lo que es fácil de escalar, y soporta open source graph APIs. Muy útil para detectar patrones de fraude, predicciones de ML o mejorar la seguridad. Existe una integración con ML llamada Neptune ML.

##### QUANTUM LEDGER DATABASE Y TIMESTREAM
Es una Ledger Database completamente administrada. Tiene un historial que guarda todos los cambios, y una tabla que muestra el estado actual de un registro (el mas reciente). Funciona con bloques cifrados usando SHA 256 que se van añadiendo y que representan los cambios de una manera similar a blockchain. Utiliza un lenguaje parecido a SQL. Muy uútil para finanzas o cadenas de suministro.

Una base de datos de series cronológicas (TSDB) es una base de datos optimizada para datos de series temporales. Una base de datos de series cronológicas se construye específicamente para manejar métricas y eventos o mediciones que están estampadas en el tiempo. Un TSDB está optimizado para medir el cambio con el tiempo. Usado para IoT. 