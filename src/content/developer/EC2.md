---
title: 'EC2'
description: 'Elastic container service'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



### ELASTIC COMPUTING CLOUD


Cloudwatch recoge data en intervalos de 5 minutos, esto es gratis, podemos activar detailed Cloudwatch monitoring para que recoja data cada minuto pero es de pago

- Accelerated computing: buenos para servidores que manejan grandes cargas de graficos o machine learning 
- Compute optimized 
- General purpose 
- Memory optimized: para cuando necesitamos manejar datasets muy grandes en memoria
-Storage optimized: cuando necesitamos instancias con un mucho espacio ya attached, por ejemplo big data o analitics.

Las instancias de rendimiento ampliable, que son instancias T3, T3a y T2, están diseñadas para proporcionar un nivel básico de rendimiento de CPU con la capacidad de aumentar a un nivel superior cuando lo requiera su carga de trabajo. Las instancias de rendimiento ampliables son los únicos tipos de instancias que utilizan créditos para el uso de CPU. AWS afirma que, una cuenta AWS tiene menos de 12 meses, se puede utilizar una instancia t2.micro de forma gratuita dentro de ciertos límites de uso.

La forma más común de conectarse a una instancia es mediante SSH. Lo primero es cambiar los permisos de la clave privada a 400 (solo lectura para el usuario y acceso denegado para los demás usuarios) y luego ejecutar el siguiente comando.

```
ssh -i /path/key-pair-name.pem instance-user-name@instance-public-dns-name
```

Otra forma de conectarse a la instancia es mediante EC2 Instance Connect desde el dashboard de AWS. Se hace entrando a la vista de detalle de la instancia en en el boton connect. NDe esta manera no necesitamos configurar nada en nuestro ordenador local.

Al crear una instancia de EC2, en el apartado opciones avanzadas, en el apartado user data, podemos especificar los scripts que queremos ejecutar cuando el sistema arranca, por ejemplo instalar apache y crear un documento HTML que para que lo sirva. Por defect, los scripts se ejecutan con privilegios de usuario root, por lo tanto, no necesitan el comando sudo. Cualquier archivo creado será propiedad de root. Si se necesita que usuarios que no son root tengan acceso a los archivos, se deben modificar los permisos en consecuencia en el script. De forma predeterminada, el user data se ejecuta solo durante el ciclo de inicio cuando se inicia una instancia por primera vez, para que ejecute cada vez que se reinicie la instancia, se debe actualizar la configuración.

En la pagina de EC2, desde actions y security podemos cambiar el rol de la instancia. Las credenciales que nos provee el rol son siempre temporales, por lo que seran diferentes cada vez que nos conectemos a la instancia. Los roles son preferibles en terminos de seguridad ya que no hay que escribir las credenciales de manera "hard coded". Los roles son definidos por las politicas.

##### ELASTIC LOAD BALANCER

Los targets de un load balancer pueden ser muy diversos, desde instancias ec2, funciones lambda, ips o incluso otros load balancers.

Además del [Application Load Balancer y el Network Load Balancer](/blog), existe un tercer tipo, el Classic Load Balancer, que aunque maneja peticiones HTTP/HTTPS y TCP, es la opcion legacy y solo existe para aplicaciones antiguas que lo usan.
Tambien existe el Gateway Load Balancer

Existe un header llamado X-Forwarded-For, el cual nos indica de donde proviene originalmente la peticion, ya que el servidor recibe la peticion desde la ip del load balancer, no deles to se produce cuando el load balancer no ha sido capaz de comunicarse con el servidor.

ELB Access Logs proporciona registros de acceso que guardan información detallada sobre las solicitudes enviadas al load balancer. Cada registro contiene información como la hora de la solicitud, la dirección IP del cliente, latencias, rutas y respuestas del servidor. Estos registros se usan para analizar patrones de tráfico y solucionar problemas. Es opcional y está deshabilitado de manera predeterminada.

ALB Request Tracker realiza un seguimiento de las solicitudes HTTP. El load balancer agrega un encabezado con un identificador de seguimiento a cada solicitud que recibe. No sirve para analizar datos específicos de latencia.

##### ELASTIC FILESYSTEM
Los volúmenes EFS proporcionan un almacenamiento de archivos simple, escalable y persistente para usar con las tareas de Amazon ECS. Con EFS, la capacidad de almacenamiento es elástica y aumenta y disminuye automáticamente a medida que se agrega y eliminan archivos. Las aplicaciones pueden tener el almacenamiento que necesitan y cuando lo necesitan. Los volúmenes de EFS son compatibles con tareas alojadas en Fargate o EC2.

Se pueden utilizar los sistemas de archivos de EFS con ECS para exportar datos del sistema de archivos en la flota de instancias de contenedores. De esa manera, las tareas tienen acceso al mismo almacenamiento persistente, sin importar la instancia a la que lleguen. Sin embargo, se debe configurar la AMI de la instancia de contenedor para montar el EFS antes de que se inicie el demonio Docker.

##### AWS CLI
Si usamos amazon linux como sistema operativo en una instancia, ésta viene con el aws cli preinstalado. Para ejecutar comandos de AWS CLI tenemos que introducir nuestras credenciales (access key ID y secret access key) mediante el comando aws configure, que nos son dadas al crear un usuario en IAM. Para ver nuestras credenciales una vez introducidas, ejecutamos aws configure list. La Secret Access Key solo es visible cuando se crea el usuario, si se pierde se debe crear otra nueva.

AWS CLI nos permite interactuar con los recursos de AWS desde la terminal, por ejemplo podemos interacturas con S3 con los siguientes comandos:

Para crear un bucket:

```
aws mb 3://nombre_del_bucket
```

Para listar todos los buckets:

```
aws s3 ls
```

Para subir un archivo a un bucket:
```
aws s3 cp nombre_archivo nombre_s3
```

##### CLI PAGINATION

Por defecto el output cuando se ejecuta el comando ls devuelve 1000 objetos, si se hace una petición cuyo output consta de 2500 objetos, hará tres llamadas a la API pero mostrará el resultado como un único resultado de 2500. Si la petición devuelve demasiados objetos en una sola llamada puede dar un erro de timeout. Para ello se usa la opción --page-size, de esta manera se devuelve el mismo resultado pero para ello se realizan mas llamadas pero mas pequeñas cada una. Para limitar el máximo de objetos que se muestran en el output se usa la opción --max-items


##### EC2 IMAGE BUILDER

Sirve para crear AMIs (Amazon Machine Image). Primero se elige un sistema operativo, luego el software a instalar (por ejemplo Nodejs), luego se ejecutan los tests lanzando una instancia de EC2 y comprobando que todo funciona bien. Por último se distribuye la imagen por las regiones deseadas para que esté disponible en las instancias desplegadas en dichas regiones.
- Image pipeline: define la configuracion y el preceso de construir la imagen, incluyendo la image recipe y los tests
- Image recipe: receta para cada imagen, incluye la imagen fuente y el software que se debe instalar (build components)