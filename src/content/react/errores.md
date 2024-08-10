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


##### INVALID HOOK CALL
Generalmente ocurre cuando se llama por error a un hook fuera del alcance de un componente funcional. Los hooks, como useState o useEffect, están diseñados para usarse dentro de componentes funcionales para gestionar el estado y los efectos secundarios, respectivamente. Los hooks dependen del orden de llamada del componente para mantener su estado interno y garantizar una ejecución adecuada.

- Colocación incorrecta: Los ganchos deben llamarse directamente dentro del cuerpo de un componente de función, no dentro de funciones anidadas, controladores de eventos o bucles. Si se llama a un hook en un lugar incorrecto, React generará este error.
    
- Hooks condicionales: Los hooks deben llamarse incondicionalmente en cada renderizado. La representación condicional de hooks puede provocar un comportamiento impredecible y provocar el error. Para mantener un estado consistente se los hooks deben ser llamados en el mismo orden en cada rendrizado.
