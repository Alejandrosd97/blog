---
title: 'Almacenamiento AWS'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



##### ELASTIC BLOCK STORAGE
Los datos se almacenan en bloques que son repartidos en diferentes dispositivos físicos. Un conjunto de bloques se puede presentar a un ordenador como un volumen. Puede tener la forma de un filesystem o de un disco duro por lo que es "bootable", es decir, se puede usar para arrancar un sistema operativo. Puede ser asociado a una instancia de EC2 y luego moverlo a otra sin que se pierdan los datos. Para conectarlos tienen que estar en la misma availability zone. Si se necesita conectarlo con un EC2 en otra AZ se hace una snapshot, lo cual crea una imagen que puede ser utilizada para desplegar otro EBS en otra AZ. Las snapshots se guardan en un bucket de S3. Se paga por Gb de almacenamiento por mes, incluido las snapshots. Existen varios tipos de EBS:
- gp2 y gp3: SOn Solid State Drives, son de propósito general, gp3 son los mas modernos.
- Provisioned IOPS SSD: son los mejores en cuanto a rendimiento, hay tres tipos io1, io2 y io2 block express. La diferencia entre io1 y io2 es que io2 tiene mas durabilidad. Block express tiene mucha mas capacidad que io2 y menor latencia.
- Throughput-optimizd hard drive: Mas barato que SSD.
- Cold hdd volume: es el mas barato de todos.
- Magnetic volumes: Son los mas antiguos.


##### INSTANCE STORE
Almacenamiento en bloque en un disco duro conectado de manera física al host donde se encuentra la instancia. Sirve para almacenar información temporal ya que si se reinicia la instancia puede ser que se haya creado en otro host del mismo datacenter, con otro bloque asignado por lo que la info se habrá perdido. Si la EC2, desaparece la información guardada se pierde para siempre.

##### ELASTIC FILESYSTEM 
Soporta el NFSv4 (Network Filesystem v4). Crea un FS y las instancias pueden montarlo de manera remota, simpre y cuando usen linux como sistema operativo. Se puede montar en varias instancias simultaneamente. Si se elige la opcion infrequently accessed (IA) resulta mas barato. Los EFS pueden abarcar varias AZ mientras que EBS solo una, a no ser que se haga una copia a otra AZ. Se debe instalar amazon-efs-utils en la instancia EC2 que va a montar el filesystem. Los EFS se hacen disponibles dentro de VCPs mediante Mount Targets, las cuales reciben una IP de la subnet en la cual se encuentran desplegadas. EFS, al igual que EBS, no encripta la data por defecto, se debe activar de manera manual durante su creación.

##### S3
No tiene limite de capacidad pero el tamaño máximo de un archivo es de 5Tb. Los nombres de los buckets deben ser unicos globalmente. Existen varias clases:
- Standard:  Los objetos son replicados en al menos 3 AZ, la latencia es baja.
- Standard IA (infrequent accesss): Igual que standard. Se cobra por Gb almacenados y es mas barato, pero se cobra por servir los archivos. Ademas el tiempo minimo de pago son 30 dias.
- S3 IA-one-zone: Solo existe en una AZ y es mas barato, pero tiene mas riesgo de pérdida de datos al no existir deplicación a otras AZ.
-S3 Glacier-instant: Se sirven los archivos de manera inmediata pero es para archivos que casi nunca se piden. Se replica en 3 AZ. Duración mínima de 90 dias.
- Glaciar-flexible: La latencia es mas alta y hay que esperar para recuperar el archivo una vez que se pierde, pero es mas barato. Duración mínima de 90 dias.
- Glacier-deep-archive: Aín mas barato, pero la latencia es mas alta y el tiempo minimo son 180 días

##### VERSIONADO DE ARCHIVOS
Se aplica de manera global a todos los objetos del bucket, no a los objetos en particular. Hay tres estados, unversioned, versioning enabled y versioning suspended. Una vez que se activa no se puede desactivar, solo suspender. Los archivos tienen un version-id, ypor defecto se mostrará la última versión. Si las versiones estan desactivadas el version-id es null. Cuando se borra un objeto, en realidad no se borra, se le añade un marcador de borrado que es también un objeto. Simplemente, no aparecerá visible, pero si borramos el marcador el archivo reaparecerá. No obstante, si especificamse especificaos la versión a borrar entonces si se borrará de manera permanente. Se cobra por el espacio que ocupan todas las versiones. Si se suspende, las versiones existentes se quedan, pero no se crearán versiones para los archivos nuevos.

##### ACL Y POLÍTICAS DE RECURSOS
Por defecto, solo el creador del bucket y el usuario Root tienen acceso a los archivos. Las políticas se escriben en formato json. El apartado principal define a quién se aplica la política.
- IAM policy: Es una política para un usuario y define lo que ese usuario puede hacer.
- Resource policy: Se aplica a un recurso y describe quien puede hacer que con él, además se pueden aplicar a gente que no son usuarios de AWS.

Para que un usuario pueda acceder a un bucket una política no puede negar a la otra, tienen que coincidir las dos.

##### S3 STATIC WEB HOSTING
Se cobra por Gb de archivos guardados y por número de peticiones. Si se quiere usar un dominio personalizado se debe usar Route53, además, el bucket se debe llamar exactamente igual que el dominio. Dentro del apartado properties hay que activar la opción static web hosting y especificar el punto de entrada (index.html) y la página de error (404.html). Adicionalmente hay que estabelcer una política en el bucket que permita a los usuarios no autorizados acceder.

##### PRESIGNED-URLS
Es posible que que un usuario concreto pero pueda tener acceso a bucket sea privado mediante una pre-signed url, que contiene la autenticación ya del usuario con acceso, de manera que AWS interpreta que el usuario anónimo es el usuario que sí tiene acceso y que ha creado la url.

##### ACCESS POINTS
Cada grupo de usuarios tiene su propio access point a un bucket, que actúa como su propia visión o  túnel hacia el bucket. Cada uno tiene su propio ARN (Amazon Resource Name) y acceden a la url del access point, no del bucket en sí. También permite mover las políticas a los access points en vez de tenerlas todas en el bucket.


