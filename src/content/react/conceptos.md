---
title: 'Conceptos React'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
id : 1
heroImage: '/algoritmo.svg'
---


##### CHILDREN PROP
La prop children permite pasar a un componente otros componentes como props. Es un objeto que contiene los elementos que envuelve un componente. Para ello se escriben dos etiquetas para el componente padre, una de apertura y otra de cierre y entre las dos, se colocan los elementos que se pasan como children. Luego en el compoenente se puede acceder a estos componentes mediante props.children. Esto es muy útil para composición

##### KEY PROP
Es una prop que React utiliza para diferenciar un componente de otro. Generalmente se usa cuando se crean múltiples componentes para un conjuntos de elementos usando el métodp map sobre un array que contiene la lista de elementos. Una práctica muy común es usar el índice del array de cada elemento como clave única

##### RENDERING
Cuando se produce algún cambio en el estado de la aplicación React  actualiza el DOM virtual, luego se lleva a cabo un proceso llamado diffing, que compara el Dom virtual con una versión anterior para ver que ha cambiado. Por último tiene lugar un proceso llamado reconciliación, que actualiza el DOM real con los cambios

##### ESTADO
El estado se puede ver como una snapshot de la aplicación en un momento determinado que permite  manejar la información. Para ello no se pueden usar variables normales de javascript, qye que éstas no hacen que el contenido se renderice de nuevo. Para ello se usa la función useState, esta función recibe como argumento el valor inicial del estado y devuelve un array que contiene como primer elemento la variable que contiene el estado y como segundo elemento una función para modificar el estado

##### COMPONENTES CONTROLADOS
Los componentes controlados usan el estado para tener un comportamiento más predecible. Un ejemplo de esto serían los inputs de los formularios, que recogen el valor de los que escribe el usuario en una variable que se actualiza cada vez que escribe o elimina caracteres

##### HOOKS
Existen varios tipos de hooks según su función, hooks de estado como useState() o useReducer(), hooks de contexto como useContext(), hooks de referencia como useRef(), hooks de efecto para conectar con sistemas externos como APIs, como useEffect() y por último hooks de rendimiento como useMemo() o useCallback()

##### COMPONENTES PUROS
La pureza de una función, o de un componente en este caso significa que la función simpre devuelve el mismo resultado al recibir el mismo input. Para que un componente sea puro debe devolver solo JSX y no alterar ningún objeto o variable que ya existiera antes del renderizado