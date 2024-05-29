---
title: 'CI/CD'
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### CODEDEPLOY

Existen dos formas de hacer el despliegue a producción de nuevas versiones de una app:
- In-place: La app se detiene en todas las instancias y se instala la nueva versión. También se conoce como rolling-update. Se va haciendo una por una, se detiene una instancia, se instala la nueva version en ella pero las demas siguen funcionando con la versión anterior, cuando ya esta instalada la nueva versión (en Codedeploy se llama revision), la instancia vuelve funcionar y pasa a la siguiente. En este caso hay una reducción temporal de la capacidad debido a que hay una instancia inactiva cada vez. Hacer un rollback si algo no funciona no es fácil con este tipo de despliegue. Normalmente esta estrategia solo se emplea en el despliegue inicial.
- Blue / Green: Se proveen nuevas instancias donde la nueva versión es instalada. Blue representa el despliegue activo y green la nueva versión. Se despliegan las instancias en el entorno verde y se configura el load balancer para que apunte a ellas, de manera que éste deja de enviar trafico a los servidores del entorno azul. Si todo funciona correctamente con la nueva versión se pueden eliminar los servidores del entorno azul. Si se necesita hacer rollback porque hay algún bug, simplemente se redirige el trafico al entorno azul de nuevo, (siempre y cuando siga existiendo). Tiene como punto negativo ser mas caro ya que se existen el doble de servidores, pero a cambio es mas seguro.

##### APP SPEC FILE

Archivo que define los parametros usados por Codedeploy para el despliegue.  Tiene varios apartados, si se despliega en EC2 tiene que ser formato yaml, pero las funciones lambda aceptan json también. Normalmente se crea una carpeta conteniendo todo lo necesario para el despliegue, y el appspec.yaml se situa en la raíz del directorio. todo lo demas se organiza en carpetas. El archivo consta de:
- Version: por defecto es 0.0
- Sistema operativo
- Files: Archivos que a copiar durante el despliegue, se debe especificar la fuente y el destino.
- Lifecycle hooks: Scripts que se ejcutan durante el despliegue

##### LIFECYCLE HOOKS

Fase 1:
- BeforeBlockTraffic: Tareas que se ejecutan antes de que la instancia sea desregistrada del load balancer.
- BlockTraffic: Se deregistra la instancia del load balancer.
- AfterBlockTraffic: Tareas a ejecutar después de que la instancia se ha deregistrado del load balancer.

Fase 2: 
- ApplicationStop: Se para la aplicación.
- DownloadBundle: Codedeploy agent copia los archivos de la revisión a una localización temporal.
- BeforeInstall: Preinstalatción de scripts.
- Install: Se copian los archivos de la revisión a la destinación final.
- AfterInstall: Post instalación de los scripts, por ejemplo permisos de archivos.
- ApplicationStart: Se reanudan los servicios detenidos durante ApplicationStop.
- ValidateService: Tests para comprobar que todo funciona bien.

Fase 3:
- BeforeAllowTraffic: T.areas antes de registrar las instancias en el load balancer
- AllowTraffic: Se registran las instancias.
- AfterAllowTraffic

##### CODEPIPELINE

Servicio para CI/CD que orquesta la build, test y despliegue. Es desencadenado cada vez que se produce una cambio en el código fuente. Se integra con muchos otros servicios como Codecommit, Codebuild o Codedeploy, EC2, Lambda o Github //volver a ver demo

##### CODEARTIFACT

Un repositorio de artefactos hace mas sencillo para los desarrolldores encontrar los paquetes que necesitan. Sirve para que todos los desarrolladores consigan las versiones correctas de los paquetes de software necesarios para sus proyectos. Se integra con repositorios públicos como Npm registry o python package index. También se integra con el CI/CD de AWS, por ejemplo, Codebuild puede tomar los paquetes necesarios de Codeartifact. Los artefactos son mas que software, incluyen documentación, paquetes desplegables, aplicaciones compiladas y librerías.

Para usar paquetes externos, como por ejemplo los de npm, se debe crear un "upstream repository" con una conexión externa para traer los paquetes de un repositorio público externo. Luego se debe conectar ese upstream repo a nuestro repositorio. Los dos repositorios deben estar dentro del mismo dominio  //ver demo y hacer el esquema de la imagen

##### CLOUDFORMATION
Es la herramienta de Infrastructure as Code dentro de AWS. Permite definir los recursos mediante un archivo de configuración, que es interpretado por Cloudformation para hacer las llamadas a la API y crear los recursos especificados en el template, que puede ser yaml o json. Es mas rapido y eficiente de lo que sería configurarlo todo a mano y es mas consistente ya que la infraestructura es fácilmente replicable. Cloudformacion es gratis, solo se paga por los recursos creados. Cada grupo de recursos creados se conoce com stack. AWS ofrece una gran variedad de snippets de codigo que podemos usar para definir nModelo de aplicación sin servidor (SAM)uestro archivo de configuracion.

La presencia de la sección 'Transform' en el template indica que es una plantilla del Serverless Application Model.

##### ELASTIC CONTAINER SERVICE
Un contenedor es una unidad con todo los necesario para que la aplicación funcione. En una arquitectua de microservicios es habitual que los componentes se desplieguen dentro de contenedores. Para crear contenedores en Linux se usa docker y para Windows, Windows Containers, ECS los soporta a los dos. Son fácilmente escalables y mas sencillos de mantener.

Ecs es un servicio de orquestación de contenedores dentro de AWS, que permite desplegar y manejar aplicaciones containerizadas sin la preocupación de instalar y configurar una herramienta de orquestación. Es similar a Kubernetes pero con una mayor integración con otros servicios de AWS como IAM o Route53. Existen dos opciones con ECS:
- Cluster de máquinas virtuales: Los contenedores corren en instancias EC2. Aporta mucho mas control que Fargate.
- Fargate: Es la version serverless, por lo que no necesario preocuparse de las instancias.
Lo primero es crear un Elastic Container Registry para que ECS se conecte y descargue la imagen. Integraciones habituales serían, por ejemplo, con Sagemaker, que sirve para desplegar y escalar mdelos de machine learning para trabajos de inferencia o Amazon Lex, que se usa para construir interfaces conversacionales.

Se puede usar elastic beanstalk para desplegar contenedores de Docker.

##### AMPLIFY
Sirve para construir un backend para las aplicaciones, ya sean móviles o web, de manera que los desarrolladores solo deben preocuparse del frontend. Uno de los servicios mas populares es Amplify Hosting, que sirve para alojar páginas web con servicio de CI/CD integrado. Amplify Studio, por otra parte, es una interfaz visual simple para crear la UI y manejar el backend, pudiendo añadir features como funciones serveless o auenticación. Amplify incluye librerías para integrarse con Cognito, S3, Lambda o API Gateway.


