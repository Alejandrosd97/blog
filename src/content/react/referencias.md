---
title: 'Referencias'
id : 1
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### USEREF
El hook useRef funciona de manera similar al estado, y puede apuntar a todo tipo de valores, pero con algunas diferenecias. En primer lugar, se trata de un objeto corriente de javascript, cuya única propiedad, current, puede ser modificada. Al igual que el estado, su valor también perdura a través de nuevas renderizaciones, no obstante, su modificación no desencadena una nueva renderización.

Las referencias son útiles cuando trabaja con sistemas externos o API del navegador. React no sabe cuándo cambia ref.current, incluso leerlo mientras se renderiza hace que el comportamiento de un componente sea difícil de predecir. Por ello, si se necesita leer información durante el renderizado es mejor usar el estado.

El caso de uso más común de una referencia es acceder a un elemento del DOM, cosa que no se puede hacer usando document.getElementById() o métodos similares. Al pasar una referencia a un atributo de referencia en JSX, como <div ref={myRef}>, React colocará el elemento DOM correspondiente en myRef.current de manera que podrá ser accedido. Otro uso común es guardar los identificadores de temporizadores como setInterval, para poder manejarlos en el futuro, ya que las referencias perduran a través de los renderizados.

De forma predeterminada, React no permite que un componente acceda a los nodos DOM de otros componentes, ni siquiera aunque sean sus propios hijos. Es decir, solo se pueden referenciar elementos de html pero no componentes funcionales creados por el programador. No obstante existe una manera de sortear este comportamiento, declarando la función del componente hijo con forwardRef. Esto hace que el componente pueda recibir una referencia que ha sido declarada en el componente padre como segundo argumento, despuñes de las props.

```
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```

React establece ref.current durante el commit. Antes de actualizar el DOM, React establece los valores ref.current afectados en nulos. Después de actualizar el DOM, React los configura inmediatamente en los nodos del DOM correspondientes.

Se debe evitar cambiar los nodos del DOM administrados por React. Modificar, agregar o eliminar hijos de elementos administrados por React puede generar resultados visuales inconsistentes o errores que rompan la aplicación. Esto se debe a que se están haciendo cambios en el DOM de los que React no es conocedor, y por tanto, no sabe como manejar. Por tanto useRef se debería usar solo para acciones no destructivas tales como hacer eventos de scroll o enfocar un input.