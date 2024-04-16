---
title: 'EC2'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



##### COMPUTE OPTIMIZER
Es una herramienta de Machine Learning que ayuda a optimizar los recursos de computación. Analiza los recursos y ofrece recomendaciones al respecto. Incrementa el coste-beneficio al reconfigurar recursos demasiado potentes para el uso dado y mejora el rendimiento al ajustar el tamaño de los recursos demasiado poco potentes. Se puede activar en una sola cuenta o en una organización entera. Compute Optimizer necesita acceso a las instancias de computación así como a los logs de Cloudwatch que éstas producen, y mediante su análisis durante un tiempo produce un set de ajustes recomendados para que el usuario pueda actuar en consecuencia. A pesar de que EC2 es el recurso más común sobre el que se usa Compute Optimizer, también se puede utilizar con Lambda, EBS y Fargate.


##### ELASTIC NETWORK INTERFACE (ENI)
Es un servicio que virtualiza y extrae todo lo que tiene que ver con el networking de una instancia EC2. Es muy flexible, puesto que es posible asociarla a una instancia o incluso moverla a otra. Puede tener IP pública, o incluso elastic IP. Cuando un EC2 es desplegado, viene por defecto con un ENI asociado (primario) con un "network interface name" de eth0. El ENI primario no se puede desasociar de la instancia ni siquiera cuando ésta está detenida, solo cuando se termina. Si se crean mas se pueden asociar con una instancia. En este caso serían ENI secundarias, y sí se pueden desasociar de una instancia y asociar con otra llibremente. También se le pueden asociar Security Groups. En caso de tener un servidor en mantenimiento sería una buena opción mover el ENI a otra instancia-

##### ELASTIC BEANSTALK Y LIGHTSAIL
Diseñado para proveer de todos los recursos necesarios para llevar una aplicación a produccion si no se conoce en profundidad AWS. Permite subir el código y se ocupa de manejar recursos en representación del usuario. Cada colección de recursos necesarios para que la aplicación funcione se conoce como entorno. Pueden coexisitir varios entornos, para desarrollo, producción, etc. Soporta la mayoría de entornos de ejecución, como por ejemplo nodejs  o python. Proporciona un Load Balancer y Autoscaling.

Lightsail, también facilita el uso de AWS si el usuario no es muy entendido en la materia ,proporcionando lo básico para desplegar una app. Soporta el despliegue de contenedores a partir de una imagen creada previamente. Por último facilita una transición sencilla hacia EC2 si es necesario posteriormente.

##### BATCH
Sirve para ejecutar trabajos que no requieren de ninguna intervernción humana (batch jobs). Batch crea las instancias mas adecuadas para realizar el batch job, de manera que no se pierde tiempo investigando cual es la mejor instancia para cada uno. Permite hacer colas de ttrabajos para ejecutar los trabajos según prioridad. El lifecycle de los trabajos es el siguiente: primero submitted, luego pending, runnable, starting, running, y por último failed/succeded. Para enviar un job a batch primero se crea un archivo de definición, cada trabajo es una instancia del archivo de definición de dicho trabajo. Los trabajos se envían a la cola, donde un comonente llamado "scheduler" se encarga de determinar cuando y donde ejecutar los trabajos. Los trabajos se ejecutan en un pool de instancias llamado compute environment.


##### AMPLIFY Y APP RUNNER
Es una solución completa para construir aplicaciones web y móvil. Ofrece autenticación, APIs, almacenamiento, hosting y alálisis de métricas. Abstrae todo el trabajo, pero en realidad utiliza otros servicios de AWS de manera automática, por ejemplo, para la autenticación estará usando Congito, de manera el desarrollador solo tiene que preocuparse de escribir el código. Es un servicio full stack. Amplify studio es una interfaz gráfica para construir las apps, incluso ofrece componentes ya creados.

App runner está diseñado para desplegar apps de manera sencilla. Simplemente con hacer push a github/codecommit, app runner se encarga de todo y además dispone de servicio de CI/CD. Cuando se realiza un commit y push, se inicia el pipeline. Codecommit activa AWS CodeBuild, que hace la compilación, crea una imagen y hace push a ECR, que es la que usa App runner para ejecutar la aplicación.

##### VMWARE EN AWS
Vmware se usa como herramienta para crear máquinas virtuales en los datacenters. Esto posibilita trabajar en un entorno híbrido de manera homogénea, ya que en vez de trabajar directamente con EC2 se hace con Vmware en AWS. Si se emplea Vmware on premise se puede migrar a la web de manera muy sencilla sin tener que cambiar de tecnología. También se pueden añadir mas instancias a un cluster si se necesitan mas servidores de los que existen fisicamente en el datacenter privado.

##### OUTPOSTS
Sirve para ejecutar servicios de AWS en un datacenter privado fuera de AWS. Amazon envía la infraestructura al data center, la cual se conecta con AWS mediante AWS Direct Connect o VPN.