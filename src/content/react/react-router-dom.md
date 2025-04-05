---
title: 'React Router Dom'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/algoritmo.svg'
---

Dentro de React Router las URL y la ruta no son sinónimos aunque a veces se usen indistintamente. Los que se ve en la barra de búsqueda es la URL pero no la ruta. React router ofrece el objeto Location, que está contruido sobre el objeto window.location del navegador. Se puede ver como una representación de la URL con alguna información adicional.

Lo primero que hace React Router es suscribirse a los cambios en el stack del historial del navegador. Los navegadores mantienen su propia pila de historial a medida que el usuario navega por ellos.. En un sitio web tradicional compuesto por archivos HTML, el navegador realizará solicitudes al servidor cada vez que el usuario haga clic en un enlace, envíe un formulario o haga clic en los botones de retroceso y avance.
Con el enrutamiento del lado del cliente, es posible manipular el stack del historial del navegador de forma programática. Al pulsar un enlace se puede usar event.preventDefaul() y manejar el evento de manera personalizada. Po ejemplo se podría añadir una entrada al stack del navegador y cambiar la URL, sin que eso implique una nueva petición al servidor.
 window.history.pushState({}, undefined, "/contact");

Los usuarios llegan a una URL por tres acciones posibles, pop, push o replace. Un push se produce cuando se añade una nueva entrada al stack del historial. Un replace es similar, excepto que reemplaza la entrada actual en el stack en lugar de insertar una nueva. Por último, un pop se produce cuando el usuario hace clic en los botones de atrás o adelante en el navegador. Salvo por la acción pop, el navegador no proporciona una manera de "escuchar la URL" y suscribirse a cambios como este. Para solventar este problema, el objeto history sí ofrece una forma de "escuchar cambios de URL" independientemente de si la acción del historial es push, pop o replace. Esto es necesario para poder realizar los cambios correspondientes según la URL

El objeto se crea mediante el contructor createBrowserHistory y tiene un método listen, el cual recibe un callback con los argumentos location y action. No obstante, no es necesario crear este objeto de manera manual, es un proceso automático. El componente <Router> configura uno de estos objetos, se suscribe a los cambios en el stack de historial y, finalmente, actualiza el estado cuando cambia la URL. Esto hace que la aplicación se vuelva a renderizar y se muestre la interfaz de usuario correcta. El único estado que necesita poner es una localización. En lugar de la localización del objeto window,  React Router Dom utiliza su propio objeto location simplificado, construido sobre window.location.

La propiedad location.state es parecida a location.search excepto que en lugar de poner los valores en la URL, están ocultos, y solo el programador programador puede acceder. Su principal utilidad es indicar a la página siguiente de dónde proviene el usuario y ramificar la interfaz de usuario, por ejemplo mostrando un registro en un modal si el usuario hizo clic en un elemento en una vista de cuadrícula, o enviar información de una lista a la siguiente pantalla para que pueda representar los datos parciales inmediatamente y luego hacer fetch d el resto de los datos posteriormente. Se puede hacer mediante el componente Link o el hook useNavigate

```
<Link to="/pins/123" state={{ fromDashboard: true }} />;
```
```
let navigate = useNavigate();
navigate("/users/123", { state: partialUser });
```

Luego en la siguiente página se puede acceder con el hook useLocation.

La cofiguración de rutas es un árbol de objetos de rutas que se clasificarán y coincidirán con la ubicación actual para crear una rama de coincidencias de rutas. En el renderizado inicial, y cuando el stack de historial cambia, React Router hará coincidir la localización con la configuración de su ruta para generar un conjunto de matches para renderizar.
El componente Routes recibe como hijos tantos componentes <Route> como sean necesarios, pudiendose anidar unos dentro de otros para crear rutas anidadas. Estos componentes Route, reciben las props path y element. El componente Routes accede a las rutas a través de la prop children, toma sus props y genera un objeto llamado routes que contiene toda la información.

Otra opción consiste en crear manualmente el objeto routes y pasarlo como argumento al hook useRoutes. 

Hasta la versión 6, la comprobación de las rutas para comprobar cuál se correspondía con la URL se hacía por orden, de manera que se tomaba aquella que hacía match primero. Ahora ya no se hace así sino que se prioriza aquella que hace un match perfecto antes que aquellas que tienen segmentos dinámicos.

Cuando una ruta coincide con la URL, se crea un objeto llamado match, que contiene propiedades como pathname, o params, que se corresponde con el segmento dinámico.

Debido a que las rutas tienen estructura de árbol, una única URL puede coincidir con una rama completa del árbol. En el caso de las rutas anidadas, cuando se hace match, se hace de toda la rama, por lo que en vez de un objeto para ese match se crea un array con información de cada ruta hasta llegar al final. En el momento de renderizar una ruta anidada, se renderiza el componente de la ruta padre, que suele ser App. Para poder renderizar el siguiente elemento (el de la siguiente ruta), el componente padre debe renderizar un outlet. Este outlet ocupa el espacio donde se va a renderizar el siguiente elemento y en caso de que haya más rutas anidadas, éste componente hijo del primero también deberá renderizar un outlet.

Las rutas índice son aquellas que se renderizan en el outlet del padre cuando en la ruta del padre. Es po ello que no llevan un path asociado. Es decir, que si se llega a una ruta hija, el outlet renderiza el elemento de la siguiente ruta anidada, pero si se está en la ruta del padre, el outlet renderizará la ruta índice. Esto sirve para que no se quede un espacio vacío en caso de no estar en una de la rutas hijas. También se puede ver como la UI por defecto cuando se hace match con una ruta pero no con alguna de sus hijas. 

Cuando se utiliza el componente Link, el objeto history creará una nueva entrada en stack del historial. Esto hace que la localización cambie y por lo tanto se renderizará aquella ruta que corresponda. 