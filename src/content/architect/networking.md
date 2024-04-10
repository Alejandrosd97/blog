---
title: 'AWS Networking'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



##### VPC

Una VPC (Virtual Private Server) es una parte de la nube de AWS donde los usuarios pueden definir su propia network lógica, con control total sobre ella, pudiendo manejar el rango de IPs, las subnets, tablas de rutas e intenet gateways. Un ejemplo de arquitectura típica suele constar de tres capas:
- Web: Localizada en una subnet pública que puede ser accedida por los usuarios
- Application: En una subnet privada, que solo puede contactar con la capa web y la base de datos
- Database: En una subnet privada, solo puede ser accedida por la capa application

Con cada cuenta nueva de AWS se crea una VPC (Virtual Private Cluoud) por defecto, en cada Availability Zone de la región seleccionada se crea una subnet de tipo /20. Con la VPC por defecto creada por AWS al crear la cuenta, todas las subnets tienen por defecto una ruta para acceder a internet y todas las instancias EC2 tienen una IP pública y privada. Cada subnet abarca una sola AZ, no se puede tener una subnet que abarque dos AZ. Cuando se crean los bloques CIDR, el tamaño del bloque debe estar entre /16 y /28. Este número hace referencia a los bits que pertenecen a la máscara de red. /24, por ejemplo, solo permite 251 IPs, ya que AWS se reserva las tres primeras y la íltima. Las subnets creadas manualmente por defecto no tienen IPs públicas, para que las tengan se debe crear un internet gateway y asociarlo con la VPC creada. No se puede asociar con la VPC por defecto porque ya tiene uno y no se puede tener mas. Dentro de subnet associations tenemos dos apartados, explicit subnet association y subnets without explicit association associations. Cada vez que se crea una subnet se une la segunda. No se debe crear una ruta a hacia internet en esta tabla porque entonces todas las subnets pasarÍan a ser públicas por defecto. Cada subnet debe estar asociada a un NACL, si no se asocia de manera explicita, entonces se asocia al nacl por defecto.


Cada red trae por defecto un Security Group y un Network Accces Control List (NACL). Security group permite outbound y NACL los dos. Las direcciones IP disponibles están definidas en un CIDR block. Las IPs dentro de la VPC por defecto están dentro del dominio de 172.0.0.0.

Las subnets pueden ser privadas o públicas, todas las subnets deben estar dentro del CIDR block de la VPC. Las tres primeras IPs estan reservadas para AWS (.1 ,2 y .3). La primera (.0) es la network address y la ultima (.255) esla broadcast address. No es necesario que cada subnet tenga su propia tabla de rutas, puede ser la misma para todas. Las subnets, por defecto son privadas. Para hacerlas publicas a internet se necesita un gateway, para ello, se crea un gateway y una nueva tabla de rutas, se le añade una ruta nueva (0.0.0.0) y se la asocia al gateway creado.

##### NAT GATEWAY
Una NAT gateway es una colección de EC2 que AWS maneja de manera que no es neceasrio configurar nada. Se usa para que una subnet privada se comunique con internet. La NAT se debe poner en la subnet pública hermana de aquella que se quiere conectar a internet. Las NAT reciben una dirección IP pública de manera automática al crearse. Permite a una subnet conectarse a internet siempre y cuando sea ella quien inicie la conexión. Útil por ejemplo para servidores internos que no deben ser accedidos por tráfico externo pero que necesitan instalar paquetes y parches de internet. Para usar un NAT primero se debe usar un gateway normal. El NAT se crea dentro de una subnet pública hermana de la privada. Esta subnet es pública por lo que el NAT gateway tiene acceso a internet a través del gateway del VPC. Se podría considerar el NAT como un servidor en la subnet pública. En la red privada se debe crear una ruta default (0.0.0.0) que apunte hacia el NAT. Se cobra por horas y Gb prcesados. Si la Availability Zone donde está la NAT gateway se cae, la subnet pivada perderá el acceso a internet. Por este motivo, normalmente se crean mas de una en diferentes AZ. Empieza con un ancho de banda de 5Mbps y puede escalar hasta 45Gbps.

##### VPC ENDPOINT
Permite el tráfico entre una VPC y los recursos de aws sin pasar por internet. La comunicación se realiza por la red propia de Amazon, por lo que las instancias no necesitan IPs publicas, ni internet gateways ni NATs. Por ejemplo, se podría usar para que una instancia en una subnet privada acceda a un bucket de S3 de manera directa sin tener que pasar por el NAT gateway y luego por internet. Es mejor asÍ porque las NAT gateway tienen un límite de ancho de banda y de esta manera no se satura tanto. Existen dos tipos de VPC endpoints:
- Interface endpoint: Es una Elastic Network Interface con una dirección IP privada que sirve como punto de entrada a tráfico dirigido a algún servicio de AWS.
- Gateway endpoint: Parecido a una NAT gateway, es un endpoint que el usuario provee. Spoporta integración con S3 y DynamoDB.


##### DNS Y ELASTIC IP
En la segunda IP del bloque CIDR podemos llegar al DNS , por ejemplo, 10.0.0.2

Por defecto, solo las subnets privadas tienen DNS, si lo desea en una pública es necesario determinarlo en el apartado enable DNS resolution. Para crear un dominio, se debe configurar también en el mismo sitio, si no, solo tendrá un dominio interno

Cuando un dispositivo, por ejemplo un EC2 se une a la red, se le asigna una dirección IP, pero si se reinicia el sistema, al desconectarse y conectarse otra vez a la red la IP cambia. Una Elastic  IP es una forma de reservar una IP asociada a la cuenta para que esto no pase y no tener que configurar las conexiones cada vez. Se puede incluso mover la IP a otro servidor mientras que el primero está en manetimiento. AWS proporciona una Elastic IP por instancia EC2 de manera gratuita.

##### ELASTIC NETWORK ADAPTER Y ELASTIC FABRIC ADAPTER

El Elastic Network Adapter (ENA) está diseñado para proporcionar redes mejoradas a las instancias EC2. ENA ofrece un alto rendimiento y rendimiento de paquetes por segundo (PPS), así como latencias consistentemente bajas en EC2. Con ENA, se pueden utilizar hasta 20 Gbps de ancho de banda de red en ciertos tipos de instancias EC2, lo que mejora enormemente el rendimiento de su red en comparación con otras instancias EC2 o máquinas locales. Mas recomendable en casos donde se priorice el ancho de banda.

Los Elastic Fabric Adapters (EFA) son dispositivos de red que aceleran la computación de alto rendimiento (HPC) y el aprendizaje automático. Los EFA son adaptadores de red elásticos (ENA) con capacidades adicionales de omisión del sistema operativo.
EFA es una interfaz de red especializada para instancias EC2 que permite ejecutar altos niveles de comunicación entre instancias, como aplicaciones HPC a escala.
Algunos casos de uso de EFA se encuentran en la modelización meteorológica, el diseño de semiconductores, finanzas e ingeniería. Mas recomendable si lo que se busca es una latencia muy baja.

##### SECURITY GROUPS Y NACLS

NACLs filtran el tráfico entrante y saliente de una subnet, pero no filtra el tráfico dentro de la propia subnet, por lo que dos servidores en la misma subnet podran comunicarse sin restricciones. NACLs son stateless firewalls. Security groups son firewalls para recursos individuales, pero éstos son stateful. Security groups sin reglas definidas bloquean todo el tráfico. Las reglas NACL pueden ser allow o deny, las de security group solo allow, si no, el deny es implícito. SG por defecto permiten todo el trafico outbound. Se puede tener mas de un SG, lo que pasa es que las reglas se suman en una sola tabla, de esta manera los SC son mas fácilmente reutilizables.

##### LOAD BALANCERS

Las peticiones se realizan a la IP del load balancer y éste las distribuye hacia los servidores. Hay tres tipos:
- Classic Load Balancer (CLB): Es el mas antiguo, no recomendado.
- Application Load Balancer (ALB): Específico para aplicaciones web, solo funciona con mediante protocolo HTTP/HTTPS. Funciona en la capa de aplicación. Los certificados SSL residen en el ALB por lo que la encriptación termina ahi, del ALB hasta el servidor la comunicación esta desencriptada (HTTP) aunque se puede cambiar a HTTPS si hay un certificado en el servidor.
- Network Load Balancer: Funciona en la capa 4 TPC por lo que no soporta HTTP/HTTPS. Es mucho mas rapido que ALP.

##### VPN Y DIRECT CONNECT

una VPN (Virtual Private Network) sirve para conectar una VPC de AWS con un servidor on-premise. La VPC tiene un VPN gateway con una IP pública mientras que el otro data center tiene una customer gateway tambien con una IP publica. De esta manera, se pueden comunicar para transmitir información de manera encriptada. El ancho de banda maximo es de 1.25Gbps y la cantidad máxima de paquetes por segundo de 140000.

En vez de tener solo una VPN, aporta una conexión dedicada entre onpremise datacenter y AWS. Con VPN las comunicaciones atraviesan internet, y aunque sea opción segura, es un proceso mucho mas lento, direct connect se usa para cargas de trabajo con gran necesidad de procesamiento. Es parecido a una VPN pero con una conexión física directa. El data center se conecta a un router de AWS, que a su vez se conecta con la nube para permitir una conexión mas rápida y mas fiable. Es un pipe dedicado sin conexión a internet.

##### VPC PEERING Y TRANSIT GATEWAY

Por defecto, los recursos de una VPC no pueden comunicarse con los de otra VPC. VPC peering sirve como conexión entre ambas y routea el tráfico, incluso si éstas estan diferentes regiones o incluso diferentes cuentas de AWS. Solo se paga cuando las VPCs están en diferentes availability zones. Las instancias de dos VPCs peering actúan como si estuvieran en la misma subnet privada. Una VPC envia una petición y la otra la acepta. No se puede hacer transitive peering, esto significa que, si dos VPCs (llamadas por ejemplo A y C) que no están conectadas entre sí pero están conectadas a una tercera (B), no pueden conectarse a través de ésta última, es decir B no podría hacer de puente entre A y C. Tienen que tener su propio peering. Útil si se tienen VPC en diferentes regiones, asi no es necesario usar internet para que se comuniquen entre ellas. También se podría hacer mediante internet encriptando la información, pero hacer peering es mas recomendable. Los rangos de IPs del bloque CIDR de las dos VPC no se pueden solapar a la hora de hacer peering.

Transit gateway, por su parte, actúa como un router para que todas las VPC puedan comunicarse entre ellas sin tener que configurar VPC peereing para cada conexión. Esto evita tener que establecer relaciones de peering complejas. También se puede conectar a una VPN (Direct Connect). Dos ransit gateways se pueden conectar entre sí, por lo que se es posible hacer peering entre dos VPC en diferentes regiones. Se debe crear una subnet por cada availability zone para desplegar el transit gateway. La conectividad entre las VPC conectadas entre sí a través del transit gateway depende de las tablas de rutas dentro de la transit gateway. Se podría conectar varias VPCs con un centro on-premise conectando la VPN a un transit gateway que conecta todas las VCP. falta un esquema

##### PRIVATE LINK
No requiere peering, NATs ni tablas de rutas, pero sÍ requiere un Network Load Balancer en el VPC del servicio y una Elastic Network Interface en el VPC cliente. Se usa para conectar una VPC a muchas VPCs clientes.  falta esquema


##### CLOUDFRONT
Funciona como un CDN, cachea archivos en edge locations para que el tiempo de respuesta sea menor. Cloudfront cachea los archivos del origen y los envía diferentes edge locations repartidas por todo el mundo, para ello se debe crear una distribución, que es una configuración donde se especifica el origen. Si el archivo se encuentra en la edge location se lo devuelve y si no, se envia desde el servidor principal, pero se crea una copia en cache en el edge location de manera que la siguiente vez si lo devuelve. El contenido en cache se queda disponible durante un tiempo (time to live), este tiempo marca la validez del archivo antes de que la edge location vuelva a requerir el archivo al servidor principal, normalmente es de 24h. Si hacemos un cambio en el archivo podemos hacer un cache invalidation, se borra el cache y cuando un usuario hace una peticion, como el edge location no tiene el archivo, lo pide al servidor principal y lo vuelve a cachear. Se pueden invalidar objetos especificos o todos los objetos de una distribucion. El cloudfront nos da un dominio para que podamos acceder a los archivos. S3 Transfer Acceleration mejora la velocidad de carga a un bucket S3 para usuarios globales mediante Cloudfront.

##### LAMBDA@EDGE y CLOUDFUNCTIONS
Ambas son funciones lambda que corren en el edge location, lo cual permite ejecutar lógica de backend en las edge locations. Cloudfunctions se utilizan para ejecutar funciones ligeras y cortas, como por ejemplo manipular el header de una petición o redirecciones de url. Lambda@edge, por su parte, son apropiadas para funciones largas o que dependan de librerias de terceros, funciones que requieran de acceso a internet, o que requieran acceso al body de la petición.

##### GLOBAL ACCELERATORS
La petición se envia al global edge location mas cercano, y a partir de ahí viaja por la red propia de amazon de manera mas rápida y segura de lo que lo haría por la red convencional. Se trata de una red dedicada propiedad de amazon.




