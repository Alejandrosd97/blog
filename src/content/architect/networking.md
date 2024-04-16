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

##### ROUTING
Cada VPC tiene una tabla de rutas principal y un router implícito. Una lista de prefijos es un mapeo predefinido de todas las ips para los endopoints que apuntan a un determinado servicio.

Uno de los protocolos de internet mas populares es BGP, Border Gateway Protocol. Permite routing dinámico, esto es, un conjunto de reglas que determinan las mejores rutas de red para la transmisión de datos en Internet. Al navegar por Internet, los datos viajan a través de varias redes antes de llegar a su destino. La responsabilidad del BGP es analizar todas las rutas disponibles por las que podrían viajar los datos y seleccionar la mejor ruta. A medida que los datos viajan por Internet desde el origen hasta el destino, cada sistema autónomo intermedio tiene que decidir a dónde debe ir el paquete de datos a continuación. La decisión se basa en varios factores, como la ubicación geográfica, la congestión de la red y el coste de la transferencia de datos. El enrutamiento de BGP tiene en cuenta estos factores y ayuda a determinar cuál es el mejor sistema autónomo para que los datos viajen por la ruta más corta desde el origen hasta el destino. A diferencia de otros protocolos, BGP corre por el puerto 179 con el ptrotocolo TCP, además de varios puertos efímeros. Se pueden asignar diferentes "weights" a las diferentes rutas dentro de la red, y la ruta mas pesada es la elegida para el tráfico outbound. Para acortar el camino usando Direct Connect, simplemente se le asigna un weight mayor que el de VPN, de manera que en condiciones normales todo el tráfico se enviará a través de Direct Connect pero con la seguridad de contar con VPN como backup. BGP es requerido con Direct Connect pero opcional con VPN

##### NAT GATEWAY
Una NAT gateway es una colección de EC2 que AWS maneja de manera que no es neceasrio configurar nada. Se usa para que una subnet privada se comunique con internet. La NAT se debe poner en la subnet pública hermana de aquella que se quiere conectar a internet. Las NAT reciben una dirección IP pública de manera automática al crearse. Permite a una subnet conectarse a internet siempre y cuando sea ella quien inicie la conexión. Útil por ejemplo para servidores internos que no deben ser accedidos por tráfico externo pero que necesitan instalar paquetes y parches de internet. Para usar un NAT primero se debe usar un gateway normal. El NAT se crea dentro de una subnet pública hermana de la privada. Esta subnet es pública por lo que el NAT gateway tiene acceso a internet a través del gateway del VPC. Se podría considerar el NAT como un servidor en la subnet pública. En la red privada se debe crear una ruta default (0.0.0.0) que apunte hacia el NAT. Se cobra por horas y Gb prcesados. Si la Availability Zone donde está la NAT gateway se cae, la subnet pivada perderá el acceso a internet. Por este motivo, normalmente se crean mas de una en diferentes AZ. Empieza con un ancho de banda de 5Mbps y puede escalar hasta 45Gbps.

###### PLACEMENT GROUPS
La idea detrás de este concepto es el poder tener cierto control sobre como se distribuyen las instancias en el hardware físico. Existen tres placemente groups dentro de AWS:
- Clustered: Las instancias están juntas, generalmente en el mismo rack, de manera que tengan la mínima latencia a la hora de comunicarse. Sirve para sacarle el máximo partido a las Enhanced Networking Instances. El punto negativo es que tiene una capacidad finita, por lo que se recomienda lanzar todas las instancias necesarias en el primer despliegue.
-Spread: Las instancias están separadas en diferente hardware, de manera que si un rack falla, no se cae todo el sistema. Puede abarcar varias AZ. La contrapartida es que solo permite 7 instancias por grupo y por AZ.
-Partition: Está pensado para arquitecturas multi-instancias muy grandes. No soporta hosts dedicados.

##### HYBRID AND CROSS-ACCOUNT NETWORKING
La forma mas rápida de conectar un datacenter on-premise a la nube de AWS es usar una VPN site-to-site. Si no se quiere usar VPN como backup por si Direct Connect no funciona porque no se quiere atravesár internet, la solución es establecer una segunda comunicación vía Direct Connect con otro proveedor (ISP). Si hay dos datacenters on-premise conectados entre si via internet, y los dos están conectados a una VPC mediante Direct Connect, éste ofrece una prestación llamada Sitelink que permite que los dos datacenters se comuniquen entre sí vía Direct Connect en caso de que haya algún problema con internet.

##### VPC ENDPOINT
Permite el tráfico entre una VPC y los recursos de aws sin pasar por internet. La comunicación se realiza por la red propia de Amazon, por lo que las instancias no necesitan IPs publicas, ni internet gateways ni NATs. Por ejemplo, se podría usar para que una instancia en una subnet privada acceda a un bucket de S3 de manera directa sin tener que pasar por el NAT gateway y luego por internet. Es mejor asÍ porque las NAT gateway tienen un límite de ancho de banda y de esta manera no se satura tanto. Existen dos tipos de VPC endpoints:
- Interface endpoint: Es una Elastic Network Interface con una dirección IP privada que sirve como punto de entrada a tráfico dirigido a algún servicio de AWS.
- Gateway endpoint: Parecido a una NAT gateway, es un endpoint que el usuario provee. Spoporta integración con S3 y DynamoDB.


##### DNS Y ELASTIC IP
En la segunda IP del bloque CIDR podemos llegar al DNS , por ejemplo, 10.0.0.2

Por defecto, solo las subnets privadas tienen DNS, si lo desea en una pública es necesario determinarlo en el apartado enable DNS resolution. Para crear un dominio, se debe configurar también en el mismo sitio, si no, solo tendrá un dominio interno

Cuando un dispositivo, por ejemplo un EC2 se une a la red, se le asigna una dirección IP, pero si se reinicia el sistema, al desconectarse y conectarse otra vez a la red la IP cambia. Una Elastic  IP es una forma de reservar una IP asociada a la cuenta para que esto no pase y no tener que configurar las conexiones cada vez. Se puede incluso mover la IP a otro servidor mientras que el primero está en manetimiento. AWS proporciona una Elastic IP por instancia EC2 de manera gratuita.

##### DNS
Tipos de registros DNS:
-A: Es el más básico y el mas común. Se usa para traducir nombres de dominio fácilmente legibles para el ser humano (www.ejemplo.com) en direcciones IP, como por ejemplo 23.211.43.53. los registros A no son necesarios en todos los ordenadores, solo para aquellos que comparten recursos a través de la red.
- AAAA: Es el equivalente del registro A para direcciones IPv6. Las IPv4 tienen un número de direcciones que ya está agotado por lo que la red está migrando hacia las IPv6. Estas direcciones se componen de 128 bits y se escriben en formato hexadecimal. Cada 4 dígitos forman un segmento y son separados por dos puntos.
-CNAME: Los registros CNAME son alias de nombres de dominio. Los servidores en Internet a menudo desempeñan múltiples funciones, como servidor web, servidor ftp, servidor de chat, etc. Para enmascarar esto, se pueden usar registros CNAME para darle a un solo ordenador múltiples nombres (alias). Por ejemplo, la máquina "computer1.xyz.com" puede ser tanto un servidor web como un servidor ftp, por lo que se definen dos registros CNAME:

"www.xyz.com" = "computadora1.xyz.com" y "ftp.xyz.com" = "computadora1.xyz.com".

El uso más común del tipo de registro CNAME es proporcionar acceso a un servidor web utilizando tanto el estándar "www.domain.com" como "domain.com" (con y sin el prefijo www). Esto generalmente se hace creando un registro A para el nombre corto (sin www) y un registro CNAME para el nombre www que apunta al nombre corto. Los registros CNAME también se pueden utilizar cuando es necesario cambiar el nombre de un host o servicio, para permitir temporalmente el acceso tanto a través del nombre antiguo como del nuevo. Un registro CNAME siempre debe apuntar a un registro A y nunca a sí mismo ni a otro registro CNAME para evitar referencias circulares.
- NS: Significa servidor de nombres. El registro del servidor de nombres indica qué servidor DNS es autoritativo para un dominio (qué servidor contiene los registros DNS en sí). Básicamente, los registros NS indican a Internet a dónde ir para buscar la dirección IP de un dominio. A menudo, el dominio tendrá múltiples registros de NS que pueden indicar servidores de nombres primarios y auxiliares de ese dominio. Sin registros NS debidamente configurados, los usuarios no podrán cargar un sitio web o una aplicación. Un servidor de nombres es un tipo de servidor DNS. Es el servidor que almacena todos los registros DNS de un dominio, incluidos los registros A, MX o CNAME. Casi todos los dominios se apoyan en múltiples servidores de nombres para aumentar su fiabilidad: si un servidor de nombres se cae o no está disponible, las consultas de DNS pueden ir a otro


##### ROUTE53
La principal razón para usar Route53 a través de múltiples cuentas es tener un dominio padre en Route53 en una cuenta padre y luego tener subdominios dentro de Route53 en las cuentas hijas, cada una de ellas con un propósito diferente, manteniendo así una mayor seguridad y delegando el control a los equipos pertinentes. Una hosted zone es una colección de registros, se puede crear una para cada subdominio siempre y cuando se especifiquen los registros NS a la hosted zone padre.

Una hosted zone es un contenedor de registros y los registros contienen información sobre cómo se desea direccionar el tráfico hacia un dominio específico (como example.com) y sus subdominios (como acme.example.com). Una hosted zone y el dominio correspondiente tienen el mismo nombre. Existen dos tipos de hosted zones, púbilcas y privadas. Las hosted zone públicas contienen registros que especifican cómo desea direccionar el tráfico en Internet.

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
Sirve para establecer conexiones seguras a VPC endpoints. Establece conexiones a recursos concretos fuera de la VPC sin necesidad de establecer relaciones de peering entre las dos VPC. El tráfico viaja por la red de amazon y no cruza internet, y solo permite la conxión a recursos dentro de la misma región. No requiere peering, NATs ni tablas de rutas, pero sí requiere un Network Load Balancer en el VPC del servicio y una Elastic Network Interface en el VPC cliente. Se usa para conectar una VPC a muchas VPCs clientes.  falta esquema


##### CLOUDFRONT
Funciona como un CDN, cachea archivos en edge locations para que el tiempo de respuesta sea menor. Cloudfront cachea los archivos del origen y los envía diferentes edge locations repartidas por todo el mundo, para ello se debe crear una distribución, que es una configuración donde se especifica el origen. Si el archivo se encuentra en la edge location se lo devuelve y si no, se envia desde el servidor principal, pero se crea una copia en cache en el edge location de manera que la siguiente vez si lo devuelve. El contenido en cache se queda disponible durante un tiempo (time to live), este tiempo marca la validez del archivo antes de que la edge location vuelva a requerir el archivo al servidor principal, normalmente es de 24h. Si hacemos un cambio en el archivo podemos hacer un cache invalidation, se borra el cache y cuando un usuario hace una peticion, como el edge location no tiene el archivo, lo pide al servidor principal y lo vuelve a cachear. Se pueden invalidar objetos especificos o todos los objetos de una distribucion. El cloudfront nos da un dominio para que podamos acceder a los archivos. S3 Transfer Acceleration mejora la velocidad de carga a un bucket S3 para usuarios globales mediante Cloudfront.

##### LAMBDA@EDGE y CLOUDFUNCTIONS
Ambas son funciones lambda que corren en el edge location, lo cual permite ejecutar lógica de backend en las edge locations. Cloudfunctions se utilizan para ejecutar funciones ligeras y cortas, como por ejemplo manipular el header de una petición o redirecciones de url. Lambda@edge, por su parte, son apropiadas para funciones largas o que dependan de librerias de terceros, funciones que requieran de acceso a internet, o que requieran acceso al body de la petición.

##### GLOBAL ACCELERATORS
El propósito de Global Accelerator es establecer endpoints de AWS para acercar la aplicación a los usuarios, ya sean internos o externos. El tráfico llega a la Edge Location más cercana y de ahí viaja por la red propia de Amazon. Provee IPs públicas globales estáticas que dirigen el tráfico al Edge Location mas cercano al usuario. Otro uso es acelerar la comunicación mediante VPN cunado Direct Connect es demasiado costoso. También sirve como protección adicional frente a ataques DDoS, ya que los puntos de entrada  estáticos están protegidos por Shield por defecto. Se trata de una red dedicada propiedad de amazon.




