---
title: 'State & props'
id : 1
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### ESTADO
El estado es como la memoria de un componente, le permite a realizar un seguimiento de alguna información y cambiarla en respuesta a interacciones. A veces es necesario que los componentes compartan datos y se actualicen siempre en conjunto. Para ello se mueve el estado de los componentes individuales «hacia arriba» al componente más cercano que los contiene a todos. Luego, se pasan el estado y la función para cambiarlo hacia los componentes hijos en las props. El estado debe ser el conjunto mínimo de datos cambiantes que la aplicación necesita recordar. El principio más importante para estructurar datos es mantenerlos DR (Don’t Repeat Yourself) Se debe encontrar la representación absolutamente mínima del estado que la aplicación necesita y lo demás se calcula bajo demanda. Si se mantiene sin cambios, se puede calcular en base a un estado existente o pasa de un padre a hijo, entonces no debe ser considerado como estado.

Para saber que componente debe albergar el estado, lo mas conveniente es pensar que componentes de la jerarquía necesitan la información y manejar el estado en el componente padre más cercano a ellos. Si no hay ningún componente en la escala ascendente que sea una buena opción para albergar el estado se puede crear un componente cuya función sea albergar el estado y colocarlo por encima en la jerarquía.

##### PROPS
Las props son un objeto que se pasa como argumento de un componente padre a un componente hijo. Son inmutables y no se pueden modificar desde el componente hijo. Es posible inicializar el estado con el valor de una prop. Pero hay que tener en cuenta que, si la prop cambia, el estado no se actualizará automáticamente. Esto es porque el estado se inicializa una vez, cuando el componente se monta por primera vez. Es una buena práctica evitar al máximo los estados de nuestros componentes y, siempre que se pueda, simplemente calcular el valor a mostrar a partir de las props. En el caso de necesitar inicializar un estado con una prop, es una buena práctica es añadir el prefijo de initial a la prop para indicar que es el valor inicial del estado y que luego no se usará mas. Un componente padre a menudo mantendrá alguna información en el estado (para poder cambiarla), y pasarla a componentes hijos como props. 

Una buena práctica es tener en cuenta el principio de responsabilidad única, es decir, lo ideal es que un componente sólo haga una cosa. Si termina creciendo, debería descomponerse en subcomponentes más pequeños. La interfaz de usuario y los modelos de datos a menudo tienen la misma forma. La IU se separa en componentes, de manera que cada componente se corresponda con una pieza del modelo de datos.

Se puede asignar a una prop un valor predeterminado al que recurrir cuando no se especifica ningún valor con la desestructuración poniendo = y el valor predeterminado justo después del parámetro.
