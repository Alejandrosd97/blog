---
title: 'Migración y transferencia a AWS'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



##### MIGRATION HUB, APPLICATION DISCOVERY SERVICE y APPLICATION MIGRATION SERVICE
Sirve para saber los requerimientos que se van a necesitar en AWS. Hace un seguimiento de métricas como el uso de CPU, de memoria, de la red, etc. Es como hacer un inventario de la infrestructura del data center on premise para saber que se debe proveer en AWS para cumplir los mismos propósitos. Además, aconseja sobre que tipos de instancias es recomndable usar, así como su coste. Provee una visión centralizada de todo el proceso de migración y un seguimiento de los diferentes pasos.

Application Discovery Service recoge información sobre la aplicación para determinar las relaciones entre las aplicaciones y las dependencias. Esta integrada en Migration Hub. Una vez que se ha ejecutado Discovery Service, Migration Service realiza la migración de manera automatizada.

##### DATABASE MIGRATION SERVICE
Es la version de APS para bases de datos, soporta la mayoría de motores de bases de datos. Un EC2 llamado instancia de replicación es el encargado de coger toda la data de la base de datos on premise y copiarla a la nube. Para llevar a cabo la migración, se determina el endpoint fuente y endpoint de destino, asi como la instancia de replicación. Con esto se crea un task. Tipos de replicacion:
- Full load: Coge toda la data y la copia en la base de datos de destino.
- Full load and CDC: Hace lo mismo pero además captura los cambios que se van produciendo en el origen, de manera que cuando el full load se ha completado los cambios en el origen también se aplican. Así, cuando el proceso finaliza podmos cerrar la base de datos del origen y dirigir la aplicación haciael target
- DCD only: Se usa otra herramienta para la copia de datos pero s aplicar los cambios que se produzcan durante dicho proceso COMPLETARRRRRRRRRRRRRRRRRRR

##### ELASTIC DISASTER RECOVERY
Disaster recovery site es una infraestructura paralela que se tiene disponible para que, si la principal falla, dirigir a los usuarios hacia ella. Tiene la desventaja de ser muy cara y complicada de mantener. Se instala el agente replication y se determina qué discos se quieren replicar. Se crea la area de staging, que contiene el servidor de replicación y los bloques EBS que contienen la data copiada de los otros discos. El servidor de replicacióon se encarga de manejar el proceso de replicación, copia los datos de un disco al otro y se encarga de que éstos esten al día. Si hay algún problema, el sistema activa las subnets de recuperación y crea las instancias necesarias que sustituyen a las otras. Si el problema se resulve se puede actualizar la data en el sistema original y volver a él. Se puede hacer de on-premise a AWS, de otra cloud a AWS o de una región de AWS a otra.