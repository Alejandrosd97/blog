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

