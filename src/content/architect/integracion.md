---
title: 'Integración de aplicaciones'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### ELASTIC LOAD BALANCER
Es un servicio que sirve para distribuir el tráfico entre un grupo de instancias, conocidas como target group. los target groups pueden estar compuestos de EC2, direcciones IP, funciones lambda o incluso otros Load Balancers. Los load balancers pueden ser publicos y privados.
Podemos configurar listeners, dependiendo de diferentes parametros como la url podemos enviar las peticiones a determinadas instancias dentro del target group. Se realizan checks de salud de los nodos que forman los target groups contantemente, de manera que si un nodo no funciona, el Load Balancer lo tendrá en cuenta y no le enviará mas peticiones. Por defecto, todas las peticiones se envía a instancias en la misma AZ, pero si se habilita la opción cross balancing se pueden redistribuir las peticiones a otras AZ.
Existen varios tipos:
- Classic Load Balancer: Es la opción legacy, actualmente en desuso.
- Application load balancer (ALB): Opera en la capa 7, permite HTTP/S y un enrutado mas avanzado, ya que puede dirigir el tráfico según los header, método HTTP, query string y otros paramétros. Esto se hace mediante un listener.
- Network Load Balancer (NLB): Opera en la capa 4, de manera que es mucho más rápido, llegando a millones de peticiones por segundo. Permite TCP, TSL y UDP. Como opera en la capa 4, se basa en los puertos para decidir a donde manda el tráfico.

##### AMAZON MQ
Un bróker de mensajería es una entidad o software que actúa como intermediario entre diferentes aplicaciones o sistemas de software para facilitar la comunicación y el intercambio de mensajes entre ellos. Amazon MQ permite desacoplamiento de colas de mensajes, y se asegura de que los mensajes son transimitidos aunque los receptores estén temporalmente caídos. Es muy parecido a SQS, si se empieza un proyecto desde cero, es mejor usar SQS, pero si el proyecto ya existe y está en uso otro bróker como Apache ActiveMQ, ésta sería la opción más adecuada al no necesitar cambiar todo el código. Los mensajes estan encriptados en reposo y durante la transmisión.

##### EVENTBRIDGE
Para realizar un cambio en una applicación íntimamente acoplada se necesita mucha coordinación entre los diferentes equipos, esto se debe a que cada parte necesita saber como operan las otras para poder comunicarse con ellas. En un sistema distribuido, cada parte es distinta y puede escalar independientemente, de manera que cada equipo solo tiene que preocuparse de operar su parte o servicio. Este tipo de arquitecturas funcionan mediante eventos, que es donde reside la complicación para este tipo de arquitectura. Eventbridge se encarga de manejar los eventos y se puede integrar con APIs para enviar eventos a enpoints que pueden estar fuera de AWS. Tiene tres componentes:
- Event Bus: Es un bus de eventos serverless que permite construir aplicaciones basadas en eventos que escalan de manera rápida y sencilla. Es la localización donde se envían los eventos y éste los transmite a su destinación. Cada cuenta proporciona uno por defecto aunque se pueden configurar más.
- Amazon Eventbridge Pipes: Sirve para transmitir eventos de una sola fuente a un solo destinatario.
- Amazon eventbridge scheduler

##### STEP FUNCTIONS
Se asegura de que las tareas se completan en el orden correcto. Premite definir y orquestar workflows, lo que permite coordinar las tareas en un determinado orden. Tambien es posible que varias tareas se ejecuten de manera paralela, además facilita el manejo de errores y visualizar el flujo de trabajo en una interfaz gráfica.

