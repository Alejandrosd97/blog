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



El estado no es como una variable normal que desaparece después de que regresa la función. El estado en realidad “vive” en React mismo, fuera de su función. Cuando React llama a un componente, genera una instantánea del estado de ese renderizado en particular. El componente devuelve una instantánea de la interfaz de usuario con un nuevo conjunto de props y controladores de eventos en el JSX, calculados utilizando los valores de estado de ese renderizado. Si por ejemplo se crea un componente con un estado que almacena el valor de un contador con valor inicial de 0 y un controlador de eventos que ejecuta setContador(contador + 1) tres veces seguidas, en el siguiente  renderizado el valor del contador será 1, es decir no se habrá incrementado tres veces. Esto ocurre porque el manejador de evento se ejecuta sobre la instantánea sobre la cual se ha renderizado el componente, y en esta el valor de contador es 0, aunque ya se haya ejecutado setContador(contador + 1) una vez. No es hasta que se termina la ejecución del manejaro de eventos que se vuelve a renderizar el componente y en este caso se hace en base a la instantánea del estado, cuyo valor para contador es 1. Lo que ha hecho la primera ejecución de setContador no es cambiar el estado sino prepararse para cambiar el estado en el siguiente renderizado. Da igual cuantas veces se ejecute setContador, en este renderizado es valor del estado para contador es 0 por lo que el valor de contador en el siguiente renderizado será de 1. 

React espera hasta que se haya ejecutado todo el código de los controladores de eventos antes de procesar las actualizaciones de estado. Esto permite actualizar múltiples variables de estado, incluso desde múltiples componentes, sin activar demasiadas renderizaciones. Pero esto también significa que la interfaz de usuario no se actualizará hasta que se complete el controlador de eventos y cualquier código que contenga. Este comportamiento, también conocido como procesamiento por lotes mejora el rendimiento. En caso de actualizar la misma variable de estado varias veces antes del siguiente renderizado, en lugar de pasar el siguiente valor de estado, es posible pasar una función que calcule el siguiente estado basándose en el anterior en la cola , como setContador(previousContador  => previousContador + 1). Es una forma de decirle a React que haga algo con el valor del estado en lugar de simplemente reemplazarlo. Cuando se utiliza una función como parámetro de la función setter del estado, ésta recibe el estado previo como parámetro, de manera que setContador(3) es lo mismo que setContador(previousContador => 3), simplemente en el segundo caso el argumento no se usa y simplemente se devuleve el nuevo valor que será el que actñua como argumento de la función setter.

Aunque los objetos en estado son técnicamente mutables, deben ser tratados como si fueran inmutables, como números, valores booleanos y cadenas. En lugar de mutarlos, hay que reemplazarlos. Si se intentan cambiar las propiedades de un objeto almacenado como estado usando el operador . en vez de la función setter React no tiene idea de que el objeto ha cambiado y no hace nada en respuesta.

En caso de querer incluir datos existentes como parte del nuevo objeto que se va a pasar como nuevo estado, se suele usar el operador spread. Por ejemplo, para actualizar solo un campo en un formulario, pero conservar los valores anteriores para todos los demás campos. Esta sintaxis solo copia cosas en un nivel de profundidad. Esto lo hace rápido, pero también significa que para actualizar una propiedad anidada, hay que usarla más de una vez.