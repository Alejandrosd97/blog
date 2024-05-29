---
title: 'Otros servicios'
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### SIMPLE QUEUE SERVICE

Sirve para almacenar los mensajes que un componente de la aplicación genera hasta que la siguiente esté lista para procesarl0s. Una cola (queue) es un repositorio temporal de mensajes esperando a ser procesados. Se puede configurar autoscaling de EC2 en base al numero de mensajes en la cola de SQS para que aumente las instancias cuando sea necesario. En el examen a veces se menciona a SQS como "pull based service", esto significa que la instancia que consume los mensajes de la cola necesita hacer "pull" de los mensajes. Cuando un mensaje es tomado por un ec2 para ser procesado, se marca como invisible durante un tiempo (30s por defecto), para que otras instancias no puedan procesarlo. Este tiempo se conoce como "visibility timeout" y es el tiempo que el servidor de la aplicación tiene para procesar completamente el mensaje y marcarlo como completo. Si no se completa el procesamiento, volverá a aparecer el mensaje en la cola para ser procesado por otras instancias. SQS sirve para eliminar las dependecias entre los componentes de la aplicación. Esto se conoce como "decoupling". Los mensajes pueden contener hasta 256Kb de texto en cualquier formato. SQS garantiza que los mensajes se procesan al menos una vez, y estos se pueden mantener en la cola entre un minuto y 14 dias, aunque por defecto son 4 dias,

Tipos de colas en SQS:
- Standard queues: Por defecto. Generalmente los mensajes se procesan por orden pero en algunos casos no es así. Los mensajes se envian mínimo una vez pero en ocasiones hay duplicados.
- FIFO (first-in first-out): Los mensajes se procesan por orden de manera estricta y no existen los duplicados. Tiene una limitación de 300 transacciones por segundo. Útil por ejemplo para transacciones bancarias. faltan los esquemas

Puede ser que el procesamiento del mensaje suponga un trabajo de computación muy internso por parte del servidor y que el tiempo media de procesamiento sea superior al tiempo de invisibilidad. En este caso se debe configurar el visibility timeout, que puede ser aumentado hasta un máximo de 12 horas.

- Short polling: Devuelve una respuesta inmediata incluso si la cola está vacía, lo cual puede resultar en muchas respuestas vacías si la cola no tiene mensajes en ese momento. AWS cobra por estas respuestas aunque no aporten nada.
- Long polling: Sondea periódicamente la cola y no devuelve ninguna respuesta hasta que llega un mensaje o se termina el tiempo establecido para ello. Ahorra dinero, por lo que generalmente es preferible,

Las SQS delay queues posponen el envío de mensajes nuevos a una cola durante un numero determinado de segundos que por defecto es 0, con un máximo 900. Durante este tiempo los mensajes son invisibles para los consumidores. Para las colas estándar solo afecta los mensajes nuevos, no a los que ya estan en la cola, mientras que para las FIFO si afecta a los mensajes ya presentes en la cola. Útil por ejemplo para darle tiempo a la base de datos de escribir el registro antes de que se envíe una notificación al usuario de que la transacción se ha completado.

Para mensajes mas con un tamaño superior a 256Kb (hasta 2gb), se debe usar un bucket su almacenamiento, en la cola simplemente se usará la referencia al objeto dentro del bucket. Para ello es necesario instalar dos librerías: SQS extended libary for java y aws SDK for java.

La API DeleteQueue elimina la cola especificada por QueueUrl, independientemente del contenido de la cola. Cuando se elimina una cola, todos los mensajes de la cola dejan de estar disponibles.
Este proceso de eliminación puede tardar hasta segundos. No ibstante, las solicitudes enviadas relacionadas con esa cola durante los 60 segundos podrían tener éxito. AL eliminar una cola, hay que esperar al menos 60 segundos antes de crear una cola con el mismo nombre.

La API PurgeQueue elimina los mensajes en una cola especificada por el parámetro QueueURL. No se puede recuperar ningún mensaje eliminado de una cola, sin embargo, la cola continúa activa RemovePermission revoca cualquier permiso en la política de cola que coincida con el parámetro de etiqueta especificado.

##### SNS
Simple Notification Service sirve para enviar mensajes, que pueden ser de múltiples tipos, incluyendo sms, o incluso para desencadenar una función lambda. Utiliza un modelo de publicador-suscriptor. Los publicadores publican mensajes a un "topic" y otros servicios se suscriben a ese topic para recibir las notificaciones. Los topics formatean el mensaje para que sea compatible con el receptor, ya sea sms, email o HTTP. A diferencia de SQS, SNS es "push based". SNS solo puede publicar mensajes pero no recibirlos, y esa es su principal diferencia con SES.

##### SES
Simple Email Service nos permite enviar y recibir emails. Los emails recibidos se almacenan en un bucket de S3, además podemos conectar la recepción de un email a la ejecución de una función lambda o un mensaje de SNS. Srive para enviar emails automatizados, por ejemplo para marketing o para confirmaciones de compra. Solo se necesita una direccion de email.

##### KINESIS
Copila y analiza streaming data, que es información generada de manera continua por miles de fuentes que envían registros de manera simultanea y en tamaños pequeños (Kb), por ejemplo datos sobre operaciones financieras, sensores IoT o videojuegos. Tiene cuatro servicios principales:

- Kinesis streams: streaming de datos y video para construir apps que procesan la información en tiempo real. Se divide en dos servicios, data streams y video streams, éste último optimizado para video. Los productores envia la datinformación a Kinesis, que la procesa para enviarla a los consumidores. Los streams de Kinesis se componen de shards, cada shard es una secuencia de uno o mas data records. Cada shard provee de una unidad fija de capacidad, por ejemplo 5 lecturas por 	segundo. La capacidad del stream es determinada por el número de shards.

- Kinesis data firehose: Captura, transforma y carga los data streams en almacenamiento de AWS para permitir analíticas  de Business Intelligence casi en tiempo real. En Firehose no hay shards, Kinesis no retiene la información, la pasa a lambda o a S3 directamente y de ahí una posible destinación sería redshift.

- Kinesis data analytics: Sirve para analizar y ejecutar querys en tiempo real mediante standard SQL y almacenar los resultados en AWS. Recibe información que previamente ha pasado por Firehose o Streams.

##### ELASTIC BEANSTALK
Se sube el código  de la aplicación y Beanstalk se encarga de proveer toda la infraestructura necesaria incluyendo EC2 (incluyendo la instalación del servidor en la instancia), load balancers, autoescaling groups y base de datos. Además, se integra con Cloudtrail y Cloudwatch. No hay un coste adicional por usar Beanstalk, solo se paga por los recursos creados. Es la forma mas rápida y sencilla de desplegar una aplicación en AWS. Ofrece varias posibilidades de despliegue de actualizaciones:

- All at once: Durante un tiempo la app no estará disponible, y si luego no funciona bien será un problema muy grande. Solo recomendable en desarrollo ya que es muy rápido.
- Rolling deployment: Con esta estrategia, la app sigue disponible pero la capacidad disminuye temporalmente.
- Inmutable: Despliega la nueva versión a otro grupo de instancias y luego elimina las anteriores.
- Rolling with additional batch: Crea un grupo de instancias (batch) adicionales con la app antigua mientras que hace el rolling deployment en las demás de manera que se puede mantener la capacidad de la app.
      
Hay uno nuevo llamado modo de despliegue llamado traffic splitting, hace lo mismo que inmutable pero envía primero un pequeño porcentaje de tráfico a las nuevas instancias para evaluar el funcionamiento. Se podría considerar una modificación del inmutable.

Se pueden agregar archivos de configuración de Elastic Beanstalk (.ebextensions) al código fuente el entorno y personalizar los recursos que contiene. Los archivos de configuración son documentos con formato YAML o JSON con una extensión de archivo .config que se colocan en una carpeta llamada .ebextensions y se implementan en el paquete fuente de su aplicación.

##### CDK
Es un framework de desarrollo de software de código abierto que permite construir aplicaciones usando recursos de AWS. Terminologia:
- App: Contenedor para uno o mas stacks
- Stack: Es cada unidad de despliegue con todo lo necesario para ejecutar una aplicación
- Construct: Define los recursos de AWS

El flujo de trabajo habitual en AWS CDK es similar al habitual con algunos pasos adicionales: Primero se creea la aplicación a partir de una plantilla de CDK: cada aplicación de AWS CDK debe estar en su propio directorio, con sus propias dependencias de módulos locales. Cree un nuevo directorio para su aplicación. Se inicialice la aplicación usando el comando cdk init. En segundo lugar se añade el código a la aplicación para crear recursos dentro de los stacks. Después, se compila la aplicación, aunque no es obligatorio, ya que lo hace CDK por el usuario. Se crean los stacks en la aplicación para crear una plantilla de CloudFormation.

##### SERVERLESS APPLICATION MODEL
Es una extensión de Cloudformation que permite definir aplicaciones serverless. Utiliza sintaxis simplificada para definir recursos serverless como funciones lambda o APIs. Tiene su propia CLI con sus propios comandos, como sam package que sirve para empaquetar la app y subirla a un s3 o sam deploy, que despliega la aplicación usando Cloudformation