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