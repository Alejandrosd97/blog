---
title: 'RDS'
description: 'Explicación de Relational Database'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



Amazon RDS es la base de datos relacional propia de amazon, es compatible con Postgres y Mysql pero con un rendimiento mejorado. Existen dos sistemas de procesamiento de datos:

- OLTP: Online Transaction Processing, procesa datos de transacciones en tiempo real. Se trata de procesar grandes cantidades de datos pequeños en tiempo real.

- OLAP: Online Analytics Processing, procesa querys complejas para analizar datos históricos, análisis usando grandes cantidades de datos y querys complejas que tardan mucho tiempo en ejecutarse.

RDS es buena para OLTP, para OLAP seria conveniente usar Redshift. Existe la opción de activar enhanced monitoring para enviar data a Cloudwatch en intervalos de tiempo menores al de por defecto, pero ello ocasiona un gasto extra.

Se crea la instancia de RDS version Mysql/Postgres desde la consola de AWS y luego nos conectamos desde una instancia EC2. Se usa el user data de la instancia EC2 para instalar el cliente de Mysql y conectarla a la base de datos a través del endpoint. También dese debe añadir una regla inbound al Security Group de la base de datos para que acepte peticiones en el puerto 3306, que es el que utiliza Mysql por defecto.

En el caso de un despliegue multi-AZ, no es necesario configurar nada, ya lo hace AWS de manera automática y ademaá se encarga de la copia datos de la base primaria a la base de datos en stand-by. Todos los servidores de base de datos que hay disponibles en AWS soportan despliegue multi-AZ. El failover a la db stand-by se hace de manera instantanea sin necesidad de hacerlo manulamente. Esto solo se hace para seguridad, es decir, no se puede usar las dos db al mismo tiempo para mejorar el rendimiento. Para mejorar el rendimiento necesitamos usar read replicas. Una read replica puede estar en la misma AZ, diferente o incluso en otra region. Las replicas pueden pasar a ser db primarias, aunque eso romperia la duplicación y pasarían a ser bases de datos independientes. Para poder hacer una read replica, la opción automatic backup debe estar activada. Se pueden hacer hasta 5 read replicas y se usan solo para rendimiento pero no para disaster recovery.


##### COPIAS DE SEGURIDAD

Existen dos tipos de copias de seguridad:

- Automated backups: Se crea una snapshot a la hora que definimos y un archivo con los logs de las transaciones que van ocurriendo. En caso de necesitar recuperar los datos se copia la snapshot y se aplican los cambios registrados en los transaction logs. Se almacenan en S3 y ofrece la misma capacidad en s3 que en la base de datos, por ejemplo si tenemos 200Gb en RDS tenemos 200Gb en S3. Hay un periodo de retención que se puede configurar entre 1 y 35 dias.

- Snapshots: Son manuales e iniciadas por el usuario. Útil cuando se planea hacer un cambio importante en los datos. No es posible encriptar los datos en una base de datos no encriptada, pero si se puede hacer una snapshot y de ahí crear una base de datos encriptada con los datos de la snapshot. La encriptación de la db se debe activar cuando se crea la db, pero no cuando la db ya ha sido creada.

##### RDS PROXY

Se situa entre la base de datos y la app que hace las querys. Mantiene un pool de conexiones abiertas de manera que la app no tiene que abrir y cerrar la conexión cada vez que hace una query. Mejora la escalabilidad y la eficiencia ya que es serverless y escala automaticamente dependiendo de la carga de trabajo. Esto es muy útil sobretodo para serverless apps. Las conexiones se mantienen activas incluso en durante e proceso de failover a la db de standby redireccionando automaticamente las peticiones a la base de datos en standby.


##### ELASTICACHE

Key value data store. Útil cuando la app realiza muchas lecturas a la base de datos y los datos no suelen cambiar de manera frecuente, si la data cambia constantemente y la necesitamos lo mas actualizada posible no es una buena opción. Existen dos tipos de Elasticache:
- Memcached: bueno para cache básico de objetos, escala horizontalmente pero no hay despliegue multi-AZ ni failover. Es mas simple.
- Redis: Dispone de despliegue multi-AZ y failover, es mas sofisticado.

##### MEMORYDB FOR REDIS

Es una base de datos en memoria que puede escalar masivamente (hasta mas de 100tb). Permite despliegue multi-AZ. Es tan escalable que incluso se podría usar como base de datos principal de la app. Además, es extremadamente rápida. Útil en arquitecturas de microservicios altamente escalables, por ejemplo servidores de videojuegos.


##### PARAMETER STORE

Se encuentra del apartado Systems Manager. Sirve para guardar información confidencial como contraseñas, connection strings de bases de datos, etc... de manera que puedan ser usadas en otros servicios de manera segura, por ejemplo como comandos al arrancar una instancia



##### SECRETS MANAGER

Tiene algunas similitudes con Parameter Store. La encriptacion se realiza mediante una Customer Master Key (CMK), que es una representacion lógica de una master key, la cual contiene el material de la clave para encriptar los datos. Secret rotation es hecho por lambda. Se puede guardar un secreto, como credenciales de una RDS, y asociarlo con ella. La rotación se puede activar según los dias que qse desee y AWS lo hará de manera automática. La diferencia con Parameter Store es que Secrets Manager es mas específico, por ejemplo, se usa para guardar de manera segura credenciales de db y API keys además de rotación de contraseñas, mientras que Paramter Store se usa para variables de configuración.
