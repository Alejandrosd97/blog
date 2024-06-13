---
title: 'CSR vs SSG vs SSR'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### CLIENT SIDE RENDERING
En el renderizado del lado del cliente (CSR), el servidor solo procesa el contenedor HTML básico de una página. La lógica, la obtención de datos, las plantillas y el enrutamiento necesarios para mostrar el contenido en la página se manejan mediante el código JavaScript que se ejecuta en el navegador/cliente. El CSR se hizo popular como método para crear aplicaciones de una sola página, difuminando la diferencia entre sitios web y aplicaciones instaladas.

En el caso de React, el HTML consta de una sola etiqueta raíz \<div>. La visualización de contenido y su modificación se manejan completamente en JavaScript. El renderizado se realiza en el navegador, por lo que no hay una petición al servidor y una respuesta cuando el contenido de la página debe cambiar, por ejemplo para mostrar datos cambiantes provenientes de una API. 

No obstante, esto puede tener un impacto negativo en el rendimiento, ya que, a medida que la complejidad de la página aumenta o se sirven archivos pesados como imágenes, el código de javascript necesario para mostrar toda esa información también se vuelve más complejo generando bundles muy pesados que resultan en un peor rendimiento de la página y un mayor tiempo de carga inicial. 

Con React, toda la aplicación web se carga en la primera solicitud al servidor de manera que la mayor parte de la lógica de la aplicación se ejecuta en el cliente. Para interactuar con el servidor para hacer consultas a la base de datos o modificar información se deben realizar llamadas a una API. A medida que el usuario interactúa con los componentes de la página no se genera ninguna nueva solicitud al servidor para representar las páginas. 

La principal ventaja del Client Side Rendering es que permite tener una aplicación de una sola página que admite la navegación sin necesidad de actualizar la página y brinda una excelente experiencia de usuario. Como los datos procesados para cambiar la vista son limitados, el enrutamiento entre páginas generalmente es más rápido, lo que hace que la aplicación CSR parezca más responsive. CSR también permite a los desarrolladores lograr una separación clara entre el código del cliente y del servidor.

La renderización en el lado del cliente también presenta inconvenientes. La primera es el SEO, los rastreadores pueden comprender JavaScript, pero existen limitaciones. El problema reside en que las cargas útiles grandes y una cascada de solicitudes de red pueden provocar que el contenido significativo no se represente lo suficientemente rápido como para que sea indexado por los rastreadores. 

A pesar de que el tiempo de respuesta durante las interacciones es menor ya que no hay un viaje de ida y vuelta al servidor, el navegador debe esperar a que JavaScript se cargue primero y comience a procesarse. Dependiendo de la capacidad de procesamiento del cliente, esto puede generar una primera carga muy lenta.

En este caso, el fetching de datos suele estar basado en eventos, como la carga de una página o clics en un botón mediante llamadas API. Dependiendo del tamaño de los datos, esto podría aumentar el tiempo de carga/interacción de la aplicación.

Para intentar paliar los problemas de rendimiento que esto acarrea, se suele usar el lazy loading. Consiste en cargar determinado recursos que no son esenciales para el correcto funcionamiento de la página y cargarlos solo cuando sea necesario. De esta manera se reduce el tamaño de los archivos de la primera carga, mejorando el tiempo de carga inicial. Un ejemplo de uso muy común es la carga de imágenes. Otra opción es dividir los bundles, acción soportada por Webpack, para que puedan ser cargados dinámicamente en tiempo ejecución.

##### STATIC SITE GENERATION
La generación de sitios estáticos es el proceso de convertir páginas en archivos estáticos y entregarlas a los usuarios en lugar de hacerlo por solicitud, especialmente cuando la información es estática o no cambia con frecuencia. 

Si una página utiliza generación estática, el HTML de la página se genera en tiempo de compilación, es decir, cuando se ejecuta el comando build. Este HTML se reutilizará en cada solicitud y puede ser almacenado en caché mediante una CDN.

Se recomienda utilizar la generación estática siempre que sea posible porque la página puede crearse una vez y ser entregada por CDN, lo que la hace mucho más rápida que tener un servidor que muestre la página en cada solicitud.

Por otro lado, la generación estática no es una buena idea si no se puede renderizar previamente una página antes de la solicitud del cliente, por ejemplo en el casod e páginas que muestran datos que varían frecuentemente y el contenido de la página cambia con cada solicitud. En casos como este, existen dos opciones . La primera es combinar SSR con CSRm de forma que se omite la renderización previa de algunas partes de una página y luego se complean con JavaScript del lado del cliente. La otra opción es usar Server Side Rendering, esto será más lento porque un CDN no puede almacenar en caché la página, pero la página renderizada previamente siempre estará actualizada. 

##### SERVER SIDE RENDERING
Consiste en llevar a cabo tareas como la obtención de datos, mutaciones y tareas que requieren un uso intensivo de la CPU en el servidor, de modo que el navegador solo recibe una página renderizada liviana para mostrar a los usuarios

Sin embargo, esto significaba que para cada navegación de un usuario, era necsario realizar ese viaje de ida y vuelta nuevamente: enviar una solicitud al servidor, generar esa página y devolverla al cliente. Esto genera una peor experiencia de usuarioya que, cada vez, el usuario tenía que esperar a que se completara el proceso antes de poder ver e interactuar con la página de nuevo.

Ingrese a la próxima ola de innovación: la representación del lado del cliente (CSR). En lugar de enviar una nueva solicitud al servidor cada vez que ocurre una navegación del usuario, ¿qué pasaría si hiciéramos que el cliente manejara esa navegación?

Eso significaría que la primera vez que el servidor responda, enviará el código de representación al cliente. Esto permite al cliente manejar la representación de la página mientras el usuario navega por el sitio: