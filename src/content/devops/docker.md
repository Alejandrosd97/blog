---
title: 'Docker'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

El archivo de docker para crear la imagen se llama Dockerfile, es importante que no lleve mayúscula y no lleve extensión. Para no incluir la carpeta node_modules de la máquina local en la imagen se crea un archivo dockerignore. Para crear la imagen se usa el comando docker build [directorio]. Para detener un contenedor se usa el comando docker stop [nombre_contenedor]


En el Dockerfile el comando run se ejecuta al constuir la imagen mientras que CMD se ejecuta dentro de la consola del contenedor una vez inicializado. Las dependencias se deben instalar al construir la imagen para no tener que instalarlas al iniciar cada contenedor


##### REDES
Cuando se usa nginx con Docker para hacer load balancing, es una mala práctica exponer los puertos de las instancias de la aplicación, simplemente Nginx puede comunicarse con ellas mediante el hostname. Es posible que para ello se deba crear una red específica que conecte los contenedores. La red se crea con el comando docker network create [nombre], luego se añaden los contenedores con el comando docker network connect [nombre_red] [nombre_contenedor]. Se puede indicar una subred de manera manual con la flag –subnet [subred], por ejemplo 10.0.0.0/24. Se pueden ver todas las redes con el comando docker network ls y se pueden eliminar con docker network rm [red]. Por defecto, cunado se crean los contenedores, estos se encuentran dentro de la red bridge. La red bridge actúa como puente con la red exterior, por lo que si un contenedor se deconecta de esta red pierde el acceso a comunicarse con el exterior, tanto para enviar información como para recibirla. Suponiendo una aplicación con varias capas, por ejemplo una capa de entrada con Nginx, una capa de backend y una capa de base de datos, es un buena práctica colocar los diferentes contenedores de cada una de ellas en su propia subred, en vez de todos en la misma, de esta manera, si un atacante lograra acceder a Ngix, no tendría acceso a toda la red.

Para establecer comunicación entre contenedores en dos subredes diferentes en docker es necesario establecer un router. Se crea un contenedor que pertenece a ambas redes y en los contenedores de cada red se añade una entrada en la tabla de rutas con el comando ip route add [NETWORK] via [GATEWAYIP]. Al estar dentro de ambas redes este contenedor actúa como router y los contenedores para comunicarse entre sí lo pueden hacer a través del router.


##### MANEJO DE CONTENEDORES
Una diferencia importante en Docker es hostname y name. el primero sirve para dirigirse a la aplicación, funciona como una IP, mientras que el segundo hace referencia al contenedor, por lo que para detenerlo o eliminarlo hay que hacer referencia a name. Para poder servir contenido en el servidor alojado en un contenedor se puede crear un volumen mediante la flag -v. de esta manera el contenedor tiene acceso al contenido de la ruta indicada en el volumen. En la imagen de Nginx, la carpeta donde reside el html es /usr/share/nginx/html, por lo que simplemente se mapean las dos rutas.

Al ejecutar docker inspect, se muestra la IP del contenedor dentro de la red local, que puede ser accedida. Docker crea una red virtual que permite que los contenedores se comuniquen entre sí y con el mundo exterior. Docker proporciona una función de red que permite conectar contenedores a una o más redes, cada una con su propia dirección IP única. Al crear una red Docker, se crea una red bridge de forma predeterminada. 

Se pueden acceder a la terminal del sistema operativo del contenedor con el comando docker exec -it [contenedor] bash. La flag -i significa interactive terminal.

Se pueden ver los logs de una aplicación con el comando docker logs [nombre]. 


