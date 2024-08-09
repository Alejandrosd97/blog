---
title: 'Errores'
id : 1
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### DESTROY IS NOT A FUNCTION

Una característica de useEffect es una función de limpieza. Si se devuelve algo de la función de useEffect, debe ser una función de limpieza. Esta función se ejecutará cuando el componente se desmonte. Esto puede considerarse aproximadamente equivalente al método de ciclo de vida componenteWillUnmount en los componentes de clase.

En JavaScript, las funciones marcadas con la palabra clave "async" habilitan el uso de la función "await", lo que pausa la ejecución de una función mientras esperan que finalice una tarea asíncrona. Las funciones asíncronas también devuelven siempre una promesa. 

Finalmente, la sintaxis abreviada de la función de flecha permite a los desarrolladores omitir las llaves alrededor del cuerpo de la función, lo cual es útil para frases simples. El valor del cuerpo de la función se convierte automáticamente en el valor de retorno de la función de flecha, eliminando la necesidad de la palabra clave "return". Esto se llama devolución implícita.

```
const fn = async () => {
    // run asynchronous tasks here
};

useEffect(() => fn());
```

El valor de fn, que es una promesa, se convierte en el valor de retorno de la función de flecha en el hook useEffect. Debido a que una promesa no es una función React produce el error poruur espera un que se retorne una función de limpieza.

