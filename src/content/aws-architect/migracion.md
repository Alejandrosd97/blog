---
title: 'Migración y transferencia a AWS'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


La arquitectura híbrida combina recursos on-premise y recursos en la nube. Es muy común como primer paso en un proceso de migración a la nube. Idealmente, las integraciones están débilmente acopladas, es decir, pueden existir sin un conocimiento exhaustivo del funcionamiento de la otra parte


##### MIGRATION HUB, APPLICATION DISCOVERY SERVICE y APPLICATION MIGRATION SERVICE
Sirve para saber los requerimientos que se van a necesitar en AWS. Hace un seguimiento de métricas como el uso de CPU, de memoria, de la red, etc. Es como hacer un inventario de la infrestructura del data center on premise para saber que se debe proveer en AWS para cumplir los mismos propósitos. Además, aconseja sobre que tipos de instancias es recomndable usar, así como su coste. Provee una visión centralizada de todo el proceso de migración y un seguimiento de los diferentes pasos.

Application Discovery Service recoge información sobre la aplicación para determinar las relaciones entre las aplicaciones y las dependencias. Está integrada en Migration Hub. Una vez que se ha ejecutado Discovery Service, Migration Service realiza la migración de manera automatizada. Para usar Aplication Discovery Service se debe instalar Aplication Discovery Agent en los servidores del datacenter on-premise mientras éstos están en producción. Luego envía la información de manera encriptada al ADS dashboard dentro de Migration Hub donde se crea un mapa visual que ayuda a entender que servicios están implicados en la aplicación. Dependiendo de esto, se considerará la estrategia de migración mas apropiada.

Application Migration Service (MGN) sirve para migrar servidores Linux y Windows a la nube. Aunque normalmente se migra de on-premise a AWS, la migración también puede provenir de otro proveedor de la nube o incluso de otra cuenta de AWS. Permite crear un entorno de prueba usando instancias muy pequeñas y una vez que se ha comprobado que todo funciona bien pasar a instancias grandes con un tiempo de interrupción mínimo. MGN es de uso gratuito, solo se paga por los servicios provisionados. Se instala MGN agent en los servidores on premise y se inicia una conexión con AWS mediante VPN o Direct Connect. MGN agent copia el blcok storage de los servidores on premise al entorno de prueba.

No obstante, mover las cargas de trabajo a la nube no siempre es la mejor opción para los clientes, a veces es preferible traer funcionalidades de la nube al datacenter. Una opción es usar EKS Anywhere o ECS Anywhere. También se puede usar Outposts, esto es la adquisición de servidores físicos o racks a AWS que vienen preconfigurados ya con servicios de AWS, por ejemplo RDS.

Si lo que se busca es la rapidez, la mejor estrategia de migración es "lift and shift" usando Migration Hub. Cuando la latencia es lo más importante, o se quiere evitar que la información abandone el datacenter, entonces la estrategia recomendada sería implementar los servicios de AWS on-premise.

##### DATABASE MIGRATION SERVICE
Es la version de APS para bases de datos, soporta la mayoría de motores de bases de datos. Un EC2 llamado instancia de replicación es el encargado de coger toda la data de la base de datos on premise y copiarla a la nube. Para llevar a cabo la migración, se determina el endpoint fuente y endpoint de destino, asi como la instancia de replicación. Con esto se crea un task. Tipos de replicacion:
- Full load: Coge toda la data y la copia en la base de datos de destino.
- Full load and CDC: Hace lo mismo pero además captura los cambios que se van produciendo en el origen, de manera que cuando el full load se ha completado los cambios en el origen también se aplican. Así, cuando el proceso finaliza podmos cerrar la base de datos del origen y dirigir la aplicación haciael target
- DCD only: Se usa otra herramienta para la copia de datos pero s aplicar los cambios que se produzcan durante dicho proceso COMPLETARRRRRRRRRRRRRRRRRRR

##### ELASTIC DISASTER RECOVERY
Disaster recovery site es una infraestructura paralela que se tiene disponible para que, si la principal falla, dirigir a los usuarios hacia ella. Tiene la desventaja de ser muy cara y complicada de mantener. Se instala el agente replication y se determina qué discos se quieren replicar. Se crea la area de staging, que contiene el servidor de replicación y los bloques EBS que contienen la data copiada de los otros discos. El servidor de replicacióon se encarga de manejar el proceso de replicación, copia los datos de un disco al otro y se encarga de que éstos esten al día. Si hay algún problema, el sistema activa las subnets de recuperación y crea las instancias necesarias que sustituyen a las otras. Si el problema se resulve se puede actualizar la data en el sistema original y volver a él. Se puede hacer de on-premise a AWS, de otra cloud a AWS o de una región de AWS a otra.

##### DATASYNC
Es la forma mas moderna de automatizar la migración de filesystems o almacenamiento de objetos a AWS. Es compatible con SMB, HDFS y NFS

##### SNOWFAMILY
Es una evolución  de los procesos import/export de AWS. Sirve para mover cantidades masivas de información a AWS y de AWS a otro lugar. Utiliza encriptación en reposo y durante la transferencia. Amazon envía el dispositivo al cliente, que carga la data en él y lo devuelve a AWS. Esisten varios servicios:
- AWS Import/Export: Se envía un disco duro a AWS, el personal se AWS se encarga de copiar la información en S3.
- AWS Snowball: NAS robusto en una caja que es enviado por AWS. Se pueden copiar hasta 80Tb y luego se reenvía a AWS, donde es copiado a S3.
- AWS Snowball Edge: Es igual que Snowball pero con capacidad de computación mediante Lambda y clustering
- AWS Snowmobile: Literalmente un contenedor con capacidad de hasya 100Pb y un camión que lo transporta

