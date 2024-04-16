---
title: 'Big Data'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### KINESIS
Se puede considerar como una autopista conectada a una cuenta de AWS por la que se transmiten los datos. Existen dos opciones, Data streams, que maneja los datos en tiempo real, y Firehose, que si bien, tiene una latencia muy baja, no es en tiempo real. Kinesis por defecto, no procesa la información, pero si es posible usando Kinesis Data Analytics.

Aunque los dos son brokers de mensajería, es preferible priorizar Kinesis sobre SQS si se necesita comunicación inmediata. Esto se debe a que SQS no envía data en tiempo real. Kinesis tiene la contrapartida de que es mas complicado de configurar y se usa en aplicaciones de big data, pero permite comunicación instantanea. Firehose escala automaticamente, mientras que con Streams es necesario determinar el numero de shards, por lo que no escala tan bien.


##### ATHENA Y GLUE
Athena es una servicio de querys interactivo que facilita el anÁlisis de información dentro de S3.Permite analizar la data dentro de un bucket sin necesidad de cargar los datos a una base de datos 

Glue, por su parte, es un servicio serverless de integración de data que hace mas sencillo preparar, descubrir, y combinar data. Se usa para procesos de ETL sin tener que preocuparnos de manejar los servidores

Se prepara la data con Glue, se guarda en S3, se realizan las querys con Athena y se visualiza con Quicksight. Podría considerarse a Athena como serverless SQL y glue como serverless ETL. Athena no permite hacer querys en RDS, solo en S3.

##### QUICKSIGHT
Es una herramienta de visualización de datos para Business Intelligence. Permite crear dashboards y compartirlos con usuarios y grupos. Ofrece muchas posibilidades de integración, por ejemplo con Athena. Utiliza el motor Spice (Super Fast In Memory Calculation Engine). Existe la posibilidad de implementar seguridad a nivel de columna (CLS), pero es de pago. Los usuarios y grupos de Quicksight solo existen aquí, no se deben confundir con los usuarios y grupos de IAM. Se paga por sesión y por usuario.

##### AWS DATA PIPELINE
Es un servicio de ETL para automatizar el movimiento y transformación de la data. Sirve para definir workflows, en los que cada paso es dependiente del resultado del paso anterior. Es completamente administrado por AWS, y realiza reintentos en caso de procesos fallidos e incluso se puede configurar para enviar notificaciones via SNS en caso de determinados eventos como tareas exitosas o fallidas. También se integra con un montón de servicios de AWS como Redshift, S3 o RDS. Se conoce como actividades a los componenetes del pipeline que definen el trabajo a realizar. Casos de uso típicos serían copiar archivos CSV entre buckets o exportar data de RDS a S3 o Redshift.

##### OPENSEARCH
Es el sucesor de Amazon Elasticsearch Service, y a veces se utilizan de manera intercambiable. Es un servicio administrado que permite ejecutar motores de busqueda y analisis para multitud de casos. Ingesta,busca y analiza data dentro de los clusters, generalmente como parte de un proceso de ETL. Escala de manera sencilla y se integra con IAM para manejar el control de acceso. Es posible un despliegue multi-az y se puede ejecutar sql querys