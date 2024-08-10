---
title: 'Redux'
id : 1
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### ESTADO
El estado hace referencia al proceso de manejar y controlar la información que cambia en una aplicación web mientras los usuarios interactúan con ella. Suele incluir datos como información del usuario, preferencias, autenticación y carritos de la compra.

Redux sigue el principio de Single Source of Truth, lo cual significa que todo el estado de la aplicación se almacena en objeto llamado store. Además, el estado es inmutable y no se puede modificar directamente, sino que se crea una nueva versión actualizada del estado previo. La razón de esto es facilitar el seguimiento de los cambios. Los cambios se llevan a cabo mediante acciones. Las acciones son objetos simples que describen qué tipo de cambio debe realizarse en el estado. Estas acciones son manejadas por reducers, que son funciones puras que toman el estado actual y una acción, y devuelven un nuevo estado. Las acciones pueden llevar datos adicionales (como información sobre el cambio) en su propiedad payload.


##### REDUCERS
Un reducer de Redux es una función que determina cómo cambia el estado de una aplicación en respuesta a una acción enviada al store. Es una forma de automatizar los cambios de estado, y deben ser inmutables y no tener efectos secundarios.

Los reducers son la ñunica forma de puede cambiar el estado en una aplicación Redux, donde el estado es de solo lectura y las actualizaciones se hacen inmutables. Esto significa que los reducers siempre deben crear un nuevo objeto en lugar de modificar el estado existente directamente.

El valor de retorno de la función reducer se convierte en el nuevo valor de estado, que luego la store Redux utiliza para actualizar la aplicación. En Redux, el estado es un objeto JavaScript simple y el reducer es una función pura que recibe el estado anterior y una acción y devuelve el nuevo estado. En caso de recibir un estado indefinido, debe devolver el estado inicial de la aplicación.

Para que el manejo del estado sea predecible y fiable los reducers deben ser funciones puras, esto significa que para el mismo input siempre devuelven el mismo output sin causar ningún efecto secundario. Los reducers rebicen dos parámetros, el estado actual y una acción.

Los reducers suelen utilizar una estructura switch para manejar es estado según cual sea la acción recibida.

```
const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
```

##### ACCIONES
Una acción debe tener una propiedad de "tipo" que describa la acción que se está realizando. La propiedad "payload" representa los datos que proporcionan información adicional sobre la acción que se está realizando. Por ejemplo, si un tipo de acción es ADD_ITEM, la carga útil podría ser un objeto que contenga el "id", el "texto" y el "status" de un nuevo item.

Para crear acciones, se utilizan creadores de acciones, funciones que crean y devuelven objetos de acción.

```
function addItem(itemText) {
  return {
    type: 'ADD_ITEM',
    payload: {
      id: 1,
      text: itemText,
      completed: false
    }
  }
}
```

##### DISPATCH
El objeto store proporciona una función llamada dispatch que permite enviar una acción para actualizar el estado de la aplicación. Cuando se llama a sispatch(), el store ejecuta una acción a través de todos los reducers disponibles, que a su vez actualizan el estado en consecuencia.

Dispatch entrega acciones a varios reducers en el store. Cada reducer es como una sección diferente  que procesa la acciñón y actualiza su propia parte del estado.

##### REDUX TOOLKIT
Primero se debe envolver el componente App en con el componente <Provider>, que se importa desde react-redux. Este provider recibe una prop llamada store, cuyo valor es el objeto que contiene el estado que se desea manejar, de manera que estará disponible en todos los componentes hijos. 

En otro archivo store.js se crea el estado inicial. La función createSlice es una función proporcionada por Redux Toolkit que permite definir un slice de estado de Redux en un solo lugar. Un slice es una porción específica del estado de la aplicación que incluye su propio reducer y las acciones asociadas. La función createSlice se utiliza para generar automáticamente un reducer y las acciones relacionadas. Redux Toolkit crea automáticamente los action creators basados en los reducers definidos en createSlice. Los action types son manejados de manera transparente por Redux Toolkit. Esto evita errores tipográficos y garantiza una coherencia constante.

Paara cambiar el estado desde un componente se usa el hook useDispatch. La funci´on dispatch recibe como argumento la acción que se debe llevar a cabo.

###### SLICES 
Un slice en Redux Toolkit es una combinación de un reducer y acciones relacionadas en una entidad única. Cada slice representa una porción específica del estado global de la aplicación. Los slices se crean utilizando la función createSlice, que maneja la definición de acciones y el reductor correspondiente de manera más concisa.
