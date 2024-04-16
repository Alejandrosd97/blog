---
title: 'Seguridad en AWS'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### SECURITY FLOW
En el flujo de seguridad típico, el usuario o instancia llega al proveedor de identidad, que contiene un identity broker, éste se pone en contacto con un identity store que autentica esta identidad. En ocasiones hay un paso adicional mediante Identity Federation. Lo que hace, es llegar a un third party identity provider como Google o Cognito que valida la identidad del usuario. Una vez el usuario está autenticado, el identity store proporciona un token o key que servirá como autenticación para acceder a los recursos de AWS.



##### DDOS
Un ataque de DDoS de capa 4 ocurre en la capa de transporte y es referido comunmente como SYN flood, al ser la capa donde se tiene lugar el three-way-handshake. El ataque consiste en enviar un montón de paquetes SYN y luego ignorar la respuesta SYN-ACK del servidor. Esto hace que el servidor malgaste muchos recursos esperando la respuesta ACK del cliente y no pueda responder a los clientes legítimos. Un ataque de capa 7 es similar y se produce cuando el servidor recibe peticiones GET y POST de manera masiva, generalmente proveniente de una red de bots, de manera que el servidor no es capaz de manejar el tráfico entrante.

##### SHIELD
Es proteccion DDoS que AWS provee de manera gratuita para todas las intancias de Load Balancers, Route53 y Cloudfront. Shield advanced ofrece protección contra ataques mas sofisticados además de  notificaciones casi en tiempo real de los ataques. También da acceso al DDoS Response Team para obtener ayuda para mitigar los ataques de capa 7 y protege la factura frente a los mayores costes asociados al mayor tráfico a los servicios mencionados previamente. Shield advanced cuesta 3000$ al mes.

##### CLOUDTRAIL
Permite identificar qué usuarios y cuentas han hecho peticiones a AWS, las IP desde las cuales las peticiones fueron hechas y el momento. Registra todas las llamadas a la API a través del SDK, CLI o la consola de AWS. Además de lo anterior, los logs de Cloudtrail incluyen metadata sobre las llamadas a la API, los parámetros de la petición así como los elementos retornados por el servicio. El registro se puede guardar en S3 o Cloudwatch, ya que Cloudtrail solo guarda los registros durante 90 días. Cloudwatch puede ser configurado para analizar los logs de Cloudtrail y enviar un aviso en determinadas circunstancias, como una potencial brecha de seguridad, incluso integrar con funciones lambda para detectar intrusos casi en tiempo real. También es útil para cumplir con requisitos legales.

##### IAM E IDENTITY CENTER
Identity Access manager es el servicio responsable de la autenticación y autorización en AWS. Permite operar con el principio de mínimo privilegio. Se pueden crear políticas para los usuarios y grupos, que definen a que recursos pueden acceder y que operaciones pueden realizar solbre ellos.

En una organización con múltiples cuentas de AWS no se manejan los usuarios a nivel de cuenta sino en una localización central. Para esta tarea, AWS cuenta con IAM Identity center (SSO). Se conoce como Permission sets a la colecciones de una o varias políticas IAM asociadas a un usuario. Cuando creamos un usuario se envía un email para que éste elija su contraseña y acceda a la cuenta.

##### COGNITO
Cognito es un servicio de autenticación para webs y aplicaciones. Almacena contraseñas de manera segura y permite autenticación con con distintos proveedores como Google o Facebook.La autenticación se basa en tokens y se paga por lo que se usa. Para dar a un usuario acceso temporal a recursos de AWS se usan los identity pools y para autenticación básica los user pools.

##### CONFIG
Realiza un seguimiento de las configuraciones de un recurso guardando los estados de configuración anteriores de manera que es podible analizar como éstos han cambiado con el tiempo. Bueno para auditorías y cumplimineto de la legalidad. Además puede usarse para avisar cuando hay un cambio en alguna configuración.

##### GUARD DUTY
Utiliza inteligencia artificial para analizar los patrones de la cuenta con el fin de detectar acciones inusuales. Analiza los logs de Cloudtrial para detectar actividad sospechosa y elaborar un informe. Se puede asociar con una función lambda que se ejecute cuando encuentre actividad extraña. Si encuentra una vulnerabilidad le da una puntuación dependiendo de la gravedad, siendo mas alta cuanto mas grande la vulnerabilidad. Permite añadir listas blancas y negras de direcciones IP.

##### INSPECTOR
Ayuda a identificar vulnerabilidades de seguridad y desviaciones de las mejores prácticas de seguridad en las instancias EC2 y aplicaciones de AWS. Proporciona una evaluación de seguridad completa de sus recursos mediante el análisis de las configuraciones, tráfico de red y comportamiento de las aplicaciones. Es necesario especificar que recursos deben ser escaneados, por ejemplo, solo en el entorno de producción pero no en desarrollo. Hay tres tipos de hallazgos:
- Vulnerabilidades de paquetes
- Vulnerabilidades de cdigo
- Accesibilidad de la red

##### MACIE Y SECURITY HUB
Personally Identifiable Information (PII)
Escanea en S3 en busca de informacion sensible como por ejemplo tarjetas de crédito o DNIs. Es posible integrarlo con otros servicios como lambda para que una determinada acción se ejecute cuando encuentre información confidencial.

Security Hub integra servicios de seguridad como Guard Duty o Macie. Estos servicios envían los hallazgos a Security Hub, que hace la función dashboard donde ver toda la información en un solo lugar.

##### KEY MANAGEMENT SERVICE (KMS)
Key Management service sirve para administrar claves privadas en una cuenta de AWS. También puede hacer operaciones criptograficas. Cada clave lleva aparejadas politicas sobre quién puede usarlas y para qué. Cuando se crea un bucket de S3, éste es automáticamente encriptado con una clave de KMS,y lo mismo ocurre con EBS o RDS. KMS see integra con Cloudtrail y Cloudwatch de manera que los cambios se quedan guardados. Se crean de manera automatica cuando se inicia un servicio como S3. En el caso de las Custom Managed Keys, todo el control recae sobre el usuario, este puede crearlas o borrarlas según desse. Se crean dos versiones de la clave privada, una en texto plano y otra encriptada con una clave de AWS. La clave encriptada se guarda en el S3 y se usa para desencriptar los archivos una vez se ha desencriptado la clave usando la otra clave, proceso conocido como [envelope encription]()

##### CLOUDHSM (HARDWARE SUCURITY MODE)
Es un servidor usado únicamente para almacenar todas las claves y realizar las operaciones criptográficas necesarias enviando una petición al servidor. Las claves nunca abandonan el servidor, en los EC2 se puede instalar un cliente de HSM para hacer las peticiones. La diferencia con KMS es que en este caso AWS no tiene acceso a las claves, solo el ususario.

##### CERTIFICATE MANAGER
La entidad que se encarga de crear los certificados es AWS Private Certificate Authority. A su vez,
AWS Certificae Manager se encarga de pasar los certificados a determinados servicios, por ejemplo a un Elastic Load Balancer. No es posible asociar los certificados con los EC2 directamente, tampoco con los S3 (sí lo es con Cloudfront, usado para distribuir las webs estáticas), ni con lambda. Los certificados son regionales y solo se pueden usar en servicios de la misma región.

##### PRIVATE CERTIFICATE AUTHORITY
Es a los certificados lo que un banco central a los billetes, se puede saber que son reales porque son expedidos allí. Los certificados solo sirven de manera interna, para que usuarios internos interactúen con servicios internos. La diferencia con certificate manager es que los certificados de Certificate Manager estan pensados para servicios que están en internet de manera que la gente pueda acceder a los servicios de manera segura. Se puede hacer seguimiento mediante Cloudtrail.

##### WEB APPLICATION FIREWALL
Es un firewall para aplicaciónes web que protege frente a ataques como inyección de SQL y Cross Site Scripting. Opera en la capa 7 y entiende HTTP/S, por lo que su funcionamiento va mucho más alláa que simplemente permitir o denegar el acceso. Se pueden establecer tablas con reglas llamadas WebACL, además de establecer filtros en base a multitud de parámetros com localizacion de la descripción, los headers, direcciones IP, etc.

##### BUSINESS CONTINUITY
El término Business Continuity hace referencia a la búsqueda de minimización de la disrupción de la actividad del negocio cuando algo inesperado ocurre. Disaster Recovery, por su parte se define como la respuesta a un evento que amenaza la continuidad del negocio. Fault tolerance consiste en el diseñode una arquitectura con la capacidad de absorber los problemas sin impactar a los niveles de servicio. Por High availability se entiende la implementación de redundancias para minimizar la posibilidad de afectación de los niveles de servicio. Los contratos de niveles de servicio constituyen un objetivo acordado de rendimiento o disponibilidad de un determinado servicio.

Dentro de AWS existen cuatro estrategias de recuperación:
- Basic backup and restore: Es muy fácil de configurar y suele ser el punto de entrada dentro de AWS. Por contra tiene que no ofrece muchas opciones de configuración. Un ejemplo sería usar Snowball para copiar la data a AWS.
- Pilot Light: Es una manera efectiva de mantener un hot site (una copia del entorno de producción en una infraestructura diferente y que funciona de forma simultánea), se adapta a gran variedad de aplicaciones. La parte negativa es que requiere de intervención manual y establecer entronos en la nube puede tardar entre minutos y horas. Además hay que mantener las AMI de AWS actualizadas a la misma versión que las de on-premise. REVISAR
- Warm stand-by: Todos los servicios están en funcionamiento de manera que si es necesario hacer failover apenás tardará unos minutos. Puede incluso ser usado como entorno de prueba. Las desventajas son que necesita algunos ajustes (si bien estos se pueden llevar a cabo mediante scripts) y quizá durante el failover es necesario escalar algunos recursos.
- Multi-site: está preparado para recibir toda la carga de trabajo, es como una duplicación del datacenter. Apenas necesita intervención durante el proceso de failover. Es la opción ma cara de todas