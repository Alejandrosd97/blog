---
title: 'Efectos'
id : 1
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

Los efectos permiten especificar efectos secundarios causados por la renderización  misma, en lugar de por un evento en particular. Por ejemplo, configurar una conexión al servidor es un efecto porque debería ocurrir sin importar qué interacción provocó la aparición del componente. Los efectos se ejecutan al final de la fase de commit después de que se actualice la pantalla. Este es un buen momento para sincronizar los componentes de React con algún sistema externo, por ejemplo realizar fetching de datos o utilizar funcionalidades de la API del navegador.

Cada vez que un componente se renderiza, React actualizará la pantalla y luego ejecutará el código dentro de useEffect, es decir, useEffect retrasa la ejecución de un fragmento de código hasta que la representación se refleja en la pantalla.

Es necesario especificar una dependencia que determine en qué casos se debe ejecutar useEffect, ya que por defecto se ejecuta después de cada renderizado. Esto significa que si dentro de useEffect se modifica el estado se generará un bucle infinito. Al indicar una dependencia, el código de useEffect solo se ejecutará cuando esa dependencia sea modificada. Si el array de dependencias contiene varios valores, se ejecutará el código solo con que se modifique uno de ellos, no es necesario que sean todos.

En algunas ocasiones, como por ejemplo en el caso de iniciar una conexión a un servicio externo, si el usuario navega por la página montando y desmontando el componente que inicia la conexión, se irán abriendo nuevas conexiones cada vez que se monte el componente porque el useEffect se ejecutará de nuevo. Para que cosas como estas no ocurran, el useEffect debe devolver una función, la cual será ejecutada cuando el componente se desmonte. En este caso la función serviría para que la conexión iniciada se cierre y no se generen dos conexiones si el componente se vuelve a montar.
 
En desarrollo, React monta cada componente dos veces seguidas para que estos fenómenos sean visibles al programador y sean más fáciles de corregir. React llamará a la función de limpieza cada vez antes de que el efecto se ejecute nuevamente, y una última vez cuando el componente se desmonte. Al volver a montar el componente, React verifica que navegar de ida y vuelta no romperá el código. Si dentro de useEffect se crea algún event listener, se debe eliminar en la función de limpieza. En el caso de usar el efecto para hacer fetching, la función de limpieza debería o bien abortar la petición o ingnorar su resultado.