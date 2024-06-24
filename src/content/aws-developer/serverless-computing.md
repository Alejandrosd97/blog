---
title: 'Serverless Computing'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


Puede suponer una ventaja competitiva ya que no es necesario administrar servidores. Son apps que utilizan una arquitectura llamada Event driven, y solo se paga cuando el código es ejecutado. Escalan muy bien y suelen ser mas favorables en términos de coste beneficio. Permiten a los desarrolladore enfocarse en el código al no tener que preocuparse de la infraestructura.

##### FUNCIONES LAMBDA

Se puede tener varias versiones de una misma función lambda y asignarle alias diferentes para referirnos a ellas, cada vez que se despliega código a lambda esta versión se convierte en $LATEST, que es la que se ejecuta de manera predeterminada. "Weighted alias" significa que se puede enviar un porcentaje del trafico a un alias y el resto a otro alias. Si la aplicación usa un alias en vez de $LATEST no ejecutará el código de la función nueva sino la del alias asignado.

Se conoce como concurrent executions al máximo de funciones que pueden ser ejecutadas de manera concurrente en una misma cuenta en una misma region (1000), contando con diferentes funciones. Si se supera este número devolvera un status code 429 "TooManyRequestsException". Es posible configurar concurrencia reservada para asegurar que siempre hay una cantidad de funciones disponibles para una función que sea crítica

Es posible que lambda acceda a recursos que estan dentro de una VPC privada, entonces lambda creará Elastic Network Interfaces usando IPs de la subnet seleccionada. Para ello se deben añadir los permisos correspondientes al rol de ejecución de lambda (VPCAccessExecutionRole). También hay que indicarle un Security Group para que éste permita el acceso de lambda al recurso.

Las funciones lambda son stateless, es decir, no se puede almacenar ninguna información en la función. En el entorno de ejecución de lambda existe un directorio /tmp que almacena alguna información y actúa como cache por si la función se invoca varias veces, son 512Mb con opción de ampliarlo hasta 10gb. Si se necesita algún paquete para que la función lambda se pueda ejecutar, se  sube el archivo con la función y los paquetes en un archivo zip, pero esto solo es recomendable para dependencias pequeñas. Lo mejor es usar layers, se añaden bibliotecas como layers que pueden ser usadas por mas funciones. Si se usa s3 como método de almacenamiento no se puede actualizar un objeto, se debe subir de nuevo y crear una nueva versión de él. Si se desea modificarlo dinámicamente hay que usar EFS.

Generalmente, para llamar a una función lambda se emplea API Gateway, pero también se puede configurar una url para poder acceder a la función desde el navegador usando HTTP. A diferencia de las funciones sincronas, que devuelven un código si la función resulta en algun error, las funciones asíncronas no devuelven ninguna información sobre si la funcion se ha ejecutado correctamente. Por defecto, si la función da error, se reejecutará después de un minuto y si vuelve a fallar una tercera vez, después de dos minutos.

Otra opción es configurar dead-letter-queues, que guardan ejecuciones fallidas para procesarlas posteriormente. Se puede usar SQS para mantener los eventos fallidos hasta que sean recogidos o SNS para enviar notificaciones a múltiples destinaciones. Lambda destinations sirve para enviar regitros de invocación de una función a otro servicio, dependiendo de si la ejecución ha sido exitosa o no, se envía a un sitio u otro.

Lambda asigna potencia de CPU en proporción a la cantidad de memoria configurada. La memoria es la cantidad de memoria disponible para la función en tiempo de ejecución. Se puede aumentar o disminuir la memoria y la potencia de la CPU asignada a la función usando la configuración de memoria.


##### LAMBDA DEPLOYMENT PACKAGE

Si creamos la funcion en la consola de AWS, el archivo zip se crea solo de manera automatica. Si creamos el código fuera y lo queremos subir tenemos que hacer un zip que no puede pesar mas de 50Mb,en caso de pesar mas, debemos subirlo a un bucket en la misma región. Las layers son archivos zip referenciados por la funcion lambda.

##### API GATEWAY

Servicio pensado para publicar y manejar APIs en AWS. Soporta RESTful APIs y Websockets APIs. API gateway es serverless y se integra con Cloudwatch. Se deben conceder a las funciones lambda los permisos necesarios para que acceda a los recursos necesarios mediante un rol, ya que con los permisos por defecto, solo envia logs a Cloudwatch.

Algunas estrategias para optimizar una API y mejorar la capacidad de respuesta son el almacenamiento en caché de respuestas y la compresión de carga útil. El almacenamiento en caché de API es útil para almacenar en caché las respuestas de un endpoint. Con el caché, se puede reducir la cantidad de llamadas realizadas al endpoint y también mejorar la latencia de las solicitudes a la API.

Un autorizador Lambda (Lambda Authorizer) de API Gateway es una función Lambda proporcionada para controlar el acceso a una API. Utiliza estrategias de autenticación de tokens de portador, como OAuth o SAML. Antes de crearlo, primero se debe crear la función AWS Lambda que implementa la lógica para autorizar y, si es necesario, autenticar a la persona que hace la llamada a la API.


##### STEP FUNCTIONS

Proporciona una interfaz visual en la que poder construir una app serverless en la que el output de una lambda es el input de la siguiente. Step functions, además, hace logs del estado de cada paso del proceso. Cada paso del workflow se conoce como "task". Los workflows también pueden ser paralelos si hay pasos que se ejecutan de manera simultánea y luego convergen o branching workflow si hay bifurcaciones en base a resultados de los pasos anteriores. Las step functions se definen usando el Amazon States Language.

Tipos de workflows:
- Standard: At-most-once-model, significa que cada paso solo se ejecuta una vez a menos que lo especifiquemos explícitamente. El historial de ejecución está disponible durante 90 días despues de su ejecución. Útil para acciones no-idempotentes y worklows de larga duración (hasta un año)
- Express: At-least-once, se ejecuta por lo menos una vez aunque pueden ser mas. Útil para acciones idempotentes, por ejemplo leer de una db. Puede ser síncrono o asíncrono. Útil para workflows cortos.

Una petición es no-idempotente si siempre causa un cambio de estado, por ejemplo, enviar el mismo email muchas veces cambia el estado del mailbox. Idempotente es cuando otra petición exactamente igual no genera efectos adversos. 

##### LAMBDA DEPLOYMENT PACKAGE Y API GATEWAY MOCK ENDPOINT
Si la función lambda se crea en la consola de AWS el archivo comprimido Zip que contiene el código  se crea solo de manera automática. Si se crea el código en un editor externo, para ser subido a AWS se debe comprimir manualmente en un Zip que no puede pesar mas de 50mb. En caso de ser más pesado, se sube a S3 en la misma región. Las capas son archivos Zip referenciados por la función lambda, TERMINAR

Podmos importar apis externas importando el description file

API Gateway Point simula las respuestas que devolvería la API sin necesidad de desplegar un backend real, lo cual es muy útil para hacer tests de los frontends.

##### X-RAY
Sirve para depurar aplicaciones distribuidas. Proporciona una interfaz visual que muestra los pasos que sigue la petición y colecciona información como latencia, códigos de status y errores. Esto se llama service map. Se necesita instalar el X-ray SDK en la instancia EC2 de manera que envíe trazas a X-ray.

