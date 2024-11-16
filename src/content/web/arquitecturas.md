---
title: 'Arquitecturas'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### ARQUITECTURA MONOLÍTICA
La arquitectura monolítica es un patrón en el que una aplicación maneja solicitudes, ejecuta la lógica, interactúa con la base de datos y crea el HTML para el frontend. Una aplicación monolítica es aquella qué está diseñada sin modularidad. Una aplicación monolítica es autónoma, e independiente de otras aplicaciones. La filosofía de diseño es que la aplicación es responsable no sólo de una única tarea, sino que es capaz de realizar todos los pasos o tareas necesarias para completar una determinada función. Sus componentes internos están altamente acoplados y desplegados como una sola unidad.

Las principales ventajas de esta arquitectura están relacionadas con la simplicidad, las aplicaciones son sencillas de desarrollar y depurar debido a que todo el código fuente está en un mismo lugar, son sencillas de testear y de desplagar ya que solo existe una unidad de despliegue. Debido a estas ventajas, este tipo de arquitectura se suele usar en las primeras etapas del desarrollo, ya que en este momento se da más importancia a sacar la aplicación a producción y empeza a atraer usuarios.

No obstante, cuando la aplicación empieza a crecer este arquitectura empieza a dar problemas. Debido al alto acoplamiento, no es posible separar responsabilidades entre diferentes equipos sin que se afecten entre ellos. Además se puede generar código spaghetti en muchos lugares de la aplicación. Otro problema es la incapacidad de escalar solo aquellas partes de la aplicación que lo necesiten sino que se debe esalar toda la aplicación a la vez, con el sobrecoste en infraestructura que esto genera. Al utilizar Monolithic Architecture, los desarrolladores  están atados a las tecnologías que se utilizan dentro del monolito. No se pueden utilizar otras herramientas incluso si son mejores para el problema en cuestión. Además, cualquier cambio, por pequeño que sea, hace que la aplicación entera tenga que ser desplegada de nuevo.

La arquitectura monolítica es óptima para aplicaciones pequeñas debido a su rápido desarrollo, la simplicidad de las pruebas y depuración y el coste. Sin embargo, cuando el sistema crece puede convertirse en un obstáculo para los negocios y debería evolucionar hacia otra forma.

##### MODELO MVC
El modelo representa el manejo de datos de la aplicación. Maneja la manipulación, recuperación y almacenamiento de datos. Por ejemplo, en una aplicación de administrador de tareas, el modelo definiría la estructura de una tarea y manejaría la lógica para almacenar y recuperar tareas de la base de datos. El modelo incluiría la estructura de datos de una tarea, como el nombre de la tarea, las fechas de inicio y finalización y el estado.

La vista es la interfaz de usuario de la aplicación. Muestra los datos proporcionados por el modelo en un formato fácil de usar. Por ejemplo, en la aplicación del administrador de tareas, la vista mostraría una lista de tareas y proporcionaría formularios para agregar o actualizar tareas.

El controlador actúa como intermediario entre el modelo y la vista. Procesa las solicitudes entrantes, invoca el modelo para realizar las operaciones necesarias y luego determina la vista adecuada para representar. Por ejemplo, cuando un usuario solicita ver las tareas completadas, el controlador se comunicará con el modelo para recuperar las tareas completadas y luego pasará estos datos a la vista para su visualización.


##### MICROSERVICIOS
Los microservicios son un enfoque arquitectónico para el desarrollo de software basado en la creación de una aplicación como una colección de pequeños servicios. Cada servicio tiene su propia función única y bien definida, se ejecuta en su propio proceso y se comunica a través de APIs HTTP o mensajería. Cada microservicio se puede implementar, actualizar, escalar y reiniciar independientemente de todos los demás. Por lo general, están orquestadas por un sistema automatizado, lo que permite tener actualizaciones frecuentes de aplicaciones sin afectar a los usuarios finales. Esta arquitectura ha ganado mucha popularidad últimamente, ya que se trata de la tecnología perfecta para aprovechar el modelo computación en la nube.

Al permitir que pequeños equipos autónomos desarrollen, implementen y escalen sus respectivos servicios de forma independiente, los microservicios permite en desarrollo en paralelo, acelerando así exponencialmente el ciclo de producción. Los servicios pueden estar escritos en diferentes lenguajes de programación e incluso pueden utilizar diferentes técnicas de almacenamiento de datos. Esto hace que las aplicaciones sean más escalables y flexibles, ya que los diferentes servicios puedan escalar de manera independiente. Además el código es más reutilizable ya que servicios genéricos como login o pagos pueden ser compartidos. Los despliegues también son más sencillos puesto que no se debe volver a desplegar toda la app cada vez que hay algún pequeño cambio en alguno de los servicios. Algunas desventajas son la necesidad de implementar un sistema de comunicación entre los servicios o la mayor complejidad en la integración y la gestión de productos completos cuando aumenta el número de servicios.

Muchas aplicaciones comienzan basándose en una arquitectura monolítica, pero a medida que surgen requisitos imprevistos, pueden renovarse lentamente a microservicios que interactúan sobre una arquitectura monolítica más antigua a través de una API.

##### SERVERLESS
La arquitectura sin servidor es un modelo de desarrollo y ejecución de aplicaciones que permite crear y ejecutar código de aplicaciones sin aprovisionar ni administrar servidores o infraestructura de backend. Sin servidor no significa que no existan servidores, significa que estos son administrados por un proveedor de [servicios en la nube](/blog/aws-developer/serverless-computing). Serverless describe la experiencia del desarrollador con esos servidores: son invisibles para el desarrollador, quien no los ve, no los administra ni interactúa con ellos de ninguna manera.

Todo lo que necesitan hacer los desarrolladores es escribir el código de su aplicación e implementarlo en contenedores administrados por un proveedor de servicios en la nube. El proveedor se encarga del resto: aprovisionar la infraestructura de la nube necesaria para ejecutar el código y escalar la infraestructura hacia arriba y hacia abajo según sea necesario, y también es responsable de toda la gestión y el mantenimiento rutinarios de la infraestructura, como las actualizaciones y parches del sistema operativo o la gestión de la seguridad.

Además, los desarrolladores nunca pagan por la capacidad inactiva de los servidores. El proveedor de la nube acelera y aprovisiona los recursos necesarios según demanda cuando se ejecuta el código y los reduce nuevamente cuando se detiene la ejecución. La facturación comienza cuando comienza la ejecución y finaliza cuando se detiene. Normalmente, el precio se basa en el tiempo de ejecución y los recursos necesarios.

##### SERVICE MESH
Sirve para paliar las desventajas que presenta la arquitectura de microservicios. Por ejemplo, los distintos servicios se conectan entre sí mediante direcciones ip, pero estas se asignan cada vez que una máquina se conecta a una red por lo que si un servicio se cae, o si el servidor se reinicia, esta puede cambiar. Una solución para evitar este problema sería establecer un registro de servicios, donde se registra cada servidor cuando se inicia. Otros servicios podrán acceder a él buscando su ip en el registro de servicios. No obstante, este método también genera un problema, y es que ahora la aplicación tiene un single failure point, ya que si este regsitro de servidores no está operativo, la aplicación no puede funcionar.

El Service Mesh, es una práctica de arquitectura para administrar y visualizar conjuntos de múltiples microservicios basados en contenedores. Un service mesh puede ser considerado como una infraestructura de software dedicada a manejar la comunicación entre microservicios. Proporciona y permite aplicaciones basadas en contenedores y microservicios, los cuales se integran directamente desde el interior del clúster.

Con un patrón sidecar, se crea un pequeño contenedor especial que se ejecuta al lado de cada microservicio. El contenedor sidecar funciona como proxy, e implementa las funcionalidades comunes como proxy, autenticación, monitoreo, etc, dejando los microservicios libres para enfocarse en su funcionalidad específica. Un controlador central (control plane) organiza las conexiones, y dirige el flujo de tráfico entre los proxies y el plano de control, recolectando las métricas de rendimiento.

###### PLANO DE DATOS
El plano de datos en una malla de servicios se refiere al proxy-sidecar que se implanta junto con cada instancia de servicio, para que este pueda comunicarse con los demás servicios del sistema.

El proxy-sidecar es el plano de datos como tal, siendo responsable de traducir, reenviar y observar condicionalmente cada paquete de red que fluye hacia y desde una instancia de servicio. Esto además del enrutamiento, seguridad, descubrimiento de servicios, observabilidad y balanceo de carga.

###### PLANO DE CONTROL
El plano de control proporciona la configuración global de las funcionalidades ejecutadas por todos los planos de datos existentes en el Service Mesh, convirtiendo a esta red de planos de datos en un sistema distribuido.

Se encarga de gestionar y monitorizar todas las instancias de los proxy-sidecar, sirviendo para implementar políticas de control, recolección de métricas, monitorización, etc.