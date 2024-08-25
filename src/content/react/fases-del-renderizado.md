---
title: 'Fases del renderizado'
id : 1
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---



La actualización de lo que se muestra en pantalla tiene tres fases, trigger, renderizado y commit.

##### TRIGGER
Cuando se inicia la aplicación, se debe activar el renderizado inicial. Los frameworks a veces ocultan este código, pero se hace llamando a createRoot() con el nodo del DOM de destino y luego llamando a su método de renderizado con su componente.

```
const root = createRoot(document.getElementById('root'))
root.render(<Image />);
```

##### RENDERIZADO
Renderizar es el acto de React llamando a las funciones que forman los componentes, los cuales devuelven el JSX cuando la función se ejecuta. Cuando se modifica el estado, se vuelve a renderizar el componente. Este proceso es recursivo: si el componente actualizado devuelve algún otro componente, React renderizará ese componente a continuación, y si ese componente también devuelve algo, renderizará ese componente a continuación, y así sucesivamente.

El código del renderizado vive en el nivel superior del componente. React toma las props y el estado, se transforman y se devuelve el JSX que se verá en la pantalla. El código de renderizado debe ser puro, sólo debe calcular el resultado, pero no hacer nada más. No debe contener efectos secundarios como modificar el DOM, eso se debe hacer mediante un efecto.

##### COMMIT
El siguiente paso es el commit. Después de que React haya ejecutado las funciones que devuelven los elementos del componente, se modifica el DOM real. En el caso del renderizado inicial, React usa la función appendChild(). Para renderizados futuros React aplicará las operaciones mínimas necesarias para que el DOM coincida con el último output de renderizado. React solo cambia los nodos del DOM si hay una diferencia entre los renderizados. Por ejemplo si un componente con un input muestra un texto en pantalla según una prop, el input no se renderizará de nuevo cada vez que esa prop cambie y el texto que hay escrito en él no se borrará

