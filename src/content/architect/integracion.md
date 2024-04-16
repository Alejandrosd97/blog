---
title: 'Integración de aplicaciones'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### ESCALABILIDAD
Se conoce como arquitectura débilmente acoplada a aquella en la que sus componentes pueden trabajar de manera indeepndiente y tienen o poco o ningún conocimiento del funcionamiento interno del resto de componentes. Esto ofrece numerosas ventajas: permite que los componentes puedan escalar de manera independiente según sus necesidades, más capas de abstracción, más flexibilidad y la posibilidad de componentes intercambiables. Existen dos estrategias de escalado:
- Scaling up: Consiste en añadir mas CPU o RAM a una instancia existente a medida que la demanda aumenta, lo cual está limitado al tamaño de las instancias. Requiere de reiniciar las instancias cada vez que se escala o se desecala y sería necesario crear un script para automatizar el proceso.
- Scaling out: Consiste en aumentar el número de instancias a mediada que aumenta la demanda, por lo que no hay tiempo fuera de servicio. En principio la capacidad de escalado es ilimitada y está automatizada para los servicios de computación de AWS.

##### AUTOSCALING
EC2 proporciona escalado horizontal (scale-out). Se activa al llegar a un determinado umbral, lo que hace lanzar o terminar una cantidad de instancias según las necesidades. Existen cuatro opciones de escalado:
- Maintain: Mantiene una determinada cantidad de instancias en funcionamiento.
- Manual: Usa un número máximo, mínimo o específico de instancias.
- Scheduled: Incrementa o decrementa las instancias en determinados momentos previamente especificados.
- Dinámico: Basado en métricas en tiempo real, la más típica es el uso de CPU.

##### ELASTIC LOAD BALANCER
Es un servicio que sirve para distribuir el tráfico entre un grupo de instancias, conocidas como target group. los target groups pueden estar compuestos de EC2, direcciones IP, funciones lambda o incluso otros Load Balancers. Los load balancers pueden ser publicos y privados.
Podemos configurar listeners, dependiendo de diferentes parametros como la url podemos enviar las peticiones a determinadas instancias dentro del target group. Se realizan checks de salud de los nodos que forman los target groups contantemente, de manera que si un nodo no funciona, el Load Balancer lo tendrá en cuenta y no le enviará mas peticiones. Por defecto, todas las peticiones se envía a instancias en la misma AZ, pero si se habilita la opción cross balancing se pueden redistribuir las peticiones a otras AZ.
Existen varios tipos:
- Classic Load Balancer: Es la opción legacy, actualmente en desuso.
- Application load balancer (ALB): Opera en la capa 7, permite HTTP/S y un enrutado mas avanzado, ya que puede dirigir el tráfico según los header, método HTTP, query string y otros paramétros. Esto se hace mediante un listener.
- Network Load Balancer (NLB): Opera en la capa 4, de manera que es mucho más rápido, llegando a millones de peticiones por segundo. Permite TCP, TSL y UDP. Como opera en la capa 4, se basa en los puertos para decidir a donde manda el tráfico.

##### AMAZON MQ
Un bróker de mensajería es una entidad o software que actúa como intermediario entre diferentes aplicaciones o sistemas de software para facilitar la comunicación y el intercambio de mensajes entre ellos. Amazon MQ permite desacoplamiento de colas de mensajes, y se asegura de que los mensajes son transimitidos aunque los receptores estén temporalmente caídos. Es muy parecido a SQS, si se empieza un proyecto desde cero, es mejor usar SQS, pero si el proyecto ya existe y está en uso otro bróker como Apache ActiveMQ, ésta sería la opción más adecuada al no necesitar cambiar todo el código. Los mensajes estan encriptados en reposo y durante la transmisión.

##### EVENT DRIVEN ARCHITECTURE
Es un tipo de arquitectura que busca integrar sevicios serverless que se comunican netre sí al desencadenar determinados eventos asíncronos en el entorno de AWS. Un evento es cualquier cambio de estado o actualización señalizada por un prodcutor de eventos, luego el evento es ruteado, y dirigido a un consumidor de eventos. Estos consumidores utilizan el payload del evento para actualizar el estado y realizar cambios en el back-end. Se utiliza Event Bridge como hub central para los eventos y así poder conectar todos los componentes de la aplicación. Se considera a un servicio como serverless cuando no es necesario administrar servidores, permite un escalado sencillo y automático, así como alta disponibilidad y tolerancia a fallos. Por último, es capaz de desescalar hasta cero, esto significa que no hay capacidad sin usar cuando los servicios no están en uso. Hay algunos servicios que AWS considera como serverless a pesar de no escalar hasta cero, como Aurora serverless. Aunque según la definición anterior no son estrictamente serverless, son la opción que más se asemeja para poder ser usada en una arquitectura serverless.

Coreografía hace referencia la coordinación asíncrona de múltiples productores y consumidores de eventos. Orquestación, por su parte implica coordinar un flujo de trabajo, que puede tener diferentes pasos o incluso árboles de decisión. Los flujos de trabajo están más acoplados y normalmente hacen uso de Step Functions para su orquestación.

##### EVENTBRIDGE
Para realizar un cambio en una applicación íntimamente acoplada se necesita mucha coordinación entre los diferentes equipos, esto se debe a que cada parte necesita saber como operan las otras para poder comunicarse con ellas. En un sistema distribuido, cada parte es distinta y puede escalar independientemente, de manera que cada equipo solo tiene que preocuparse de operar su parte o servicio. Este tipo de arquitecturas funcionan mediante eventos, que es donde reside la complicación para este tipo de arquitectura. Eventbridge se encarga de manejar los eventos y se puede integrar con APIs para enviar eventos a enpoints que pueden estar fuera de AWS. Tiene tres componentes:
- Event Bus: Es un bus de eventos serverless que permite construir aplicaciones basadas en eventos que escalan de manera rápida y sencilla. Es la localización donde se envían los eventos y éste los transmite a su destinación. Cada cuenta proporciona uno por defecto aunque se pueden configurar más.
- Amazon Eventbridge Pipes: Sirve para transmitir eventos de una sola fuente a un solo destinatario.
- Amazon eventbridge scheduler

##### STEP FUNCTIONS
Se asegura de que las tareas se completan en el orden correcto. Premite definir y orquestar workflows, lo que permite coordinar las tareas en un determinado orden. Tambien es posible que varias tareas se ejecuten de manera paralela, además facilita el manejo de errores y visualizar el flujo de trabajo en una interfaz gráfica.

##### CLOUDFORMATION
Además de stacks y templates, otro concepto importante dentro de Cloudformation son los change sets, es un resumen de cambios propuestos para un stack que permite ver como esos cambios afectarán a los recursos existentes antes de implementarlos. Las políticas de stack protegen determinados recursos de ser eliminados o modificados. Un buen ejemplo de uso sería una base de datos en producción que no debe ser eliminada. Las políticas de stack se pueden crear desde el CLI o desde la consola de AWS cunado se crea el stack, pero una vez creado, solo se pueden añadir vía CLI. Una vez aplicada, la política no puede ser eliminada, aunque se puede modificar a través del CLI. 

Una buena práctica es realizar los cambios a través de Cloudformation en vez de directamente sobre las instancias, puesto que la ventaja de usar Cloudformation radica en la fácil replicación de los despliegues.