---
title: 'Monitorización'
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### CLOUDWATCH

Por defecto, todas las instancias EC2 envían información a Cloudwatch, ésta se almacena indefinidamente y puede ser consultada incluso después de eliminar la instancia. Por defecto, EC2 no envía métricas del sistema operativo, para ello es necesario instalar Cloudwatch agent. Las métricas se envían cada 5 minutos, aunque se pueden configurar alarmas para monitorear cualquier metrica en una cuenta de AWS, de manera que se active cuando alguna métrica supere un umbral determinado. Se puede consultar la actividad de los últimos 90 dias.

Dentro de Cloudwatch, se conoce como namespace a un contenedor de métricas. Las métricas de diferentes namespaces son independientes, de manera que no son agregadas en las mismas estadísticas. Se pueden crear namespaces personalizados, con las métricas que se desee. Esto se hace para que cada aplicación tenga su propio namespace y poder observar sus métricas por separado, de manera que las metricas de EC2 de una app no se mezclen con las de los servidores de otra.

Cloudwatch Dimensions son parejas de clave-valor que se pueden usar para filtrar la información, por ejemplo el id de una instancia, o todos los EC2 que compartan una misma imagen.

##### EVENT BRIDGE
Se utiliza en event-driven apps. Un evento se puede difinir como un cambio de estado
También se puede usar para programar eventos. Eventbridge es la forma recomendada para manejar los eventos, por delante de Cloudwatch Logs. Debido a que ambas utilizan el mismo servicio y API, todos los cambios que se hagan en uno apareceran en la consola del otro. la diferencia radica en que Eventbridge tiene mas funcionalidades. Cuando un evento ocurre, se envía a Eventbridge, que desencadena una regla y la acción consiguiente, por ejemplo, si se crea un EC2 que no cumple con los requerimientos legales, Config lo detecta y genera un evento. En es caso, una posible respuesta de Eventbridge sería enviar un mensaje via SNS. Cloudwarch, Eventbridge y SNS están muy bien integrados.


