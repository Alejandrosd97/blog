---
title: 'Patrones de diseño'
id : 3

description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### MÓDULOS
Consiste en la creación de código encapsulado a través del uso de funciones autoinvocadas de manera inmediata, protegiendo el namespace global y previniendo conflictos de nombre. Muy usado en código antiguo, cuando aún se usaba var y no existían las clases. Lo que se hacía era encapsular el código mediante funciones autoinvocadas y closures. Esa función retorna una interfaz con la funcionalidad para acceder a las variables y métodos creados dentro del closure, que no pueden ser accedidos de manera directa. Un ejemplo de este patrón se puede encontrar en jquery, que usa los módulos para encapsular su código y que su funcionalidad sea solo accesible a través de su API pública.

##### PATRÓN SINGLETON
Este patrón se asegura de que solo existe una instancia de una clase. Funciona de manera similar al patrón de módulos con la diferencia de que solo permite crear una instancia. Expone la función para crear la instancia y cuando se llama, si ésta ya existe, devuelve la que ya existe en vez de crear una nueva. Un caso de uso muy claro de este patrón son las conexiones de base de datos, se crea una y se usa siempre la misma. El sistema de módulos de Nodejs, funciona de manera parecida, de manera que diferentes importaciones de un mismo módulo no recrean el módulo sino que devuelven una versión en caché.

##### PATRÓN OBSERVADOR
Consiste en un modelo de suscripción donde los objetos observadores escuchan eventos y son notificados cuando el evento ocurre. El ejemplo más claro son los event listeners del DOM. El objeto al que se suscriben los observadores se llama sujeto y cualquier cambio en su estado envía una notificación a los observadores.

##### PATRÓN REGISTRO
Es un patrón consistente guardar e importar instancias de objetos. Existe una localización central para manejar los objetos y es especialmente útil para acceder a las instancias de diferentes partes de la aplicación sin necesidad de pasarlos como parámetros. La desventaja de este patrón es que al ser una estructura centralizada puede hacer de cuello de botella en la aplicación.

##### PATRÓN MIXIN
Es un patrón basado en la mezcla de un objeto con otros objetos para agregar las propiedades que necesita. Es como tener un objeto base al que se le pueden añadir complementos que pueden darle propiedades adicionales, pero estas propiedades individuales no son realmente subclases en sí mismas. Los mixins se comportan como capas de mezcla de objetos, donde se pasa el objetivo (el mixin) y la fuente. El destino se agrega al origen y se devuelve un nuevo objeto. Una descripción más precisa es que un mixin funciona como una fábrica donde se devuelve un nuevo objeto de subclase. A lo largo de todo este proceso no existe ninguna definición de la subclase en ninguna parte. El método estático Object.assign() copia todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino. Devuelve el objeto de destino modificado. Las propiedades del objeto de destino se sobrescriben con las propiedades de las fuentes si tienen la misma clave.

La ventaja de este patrón es la flexibilidad. El mixin es una función muy primitiva, ya que hace exactamente una cosa, y permite usar estas estructuras repetidamente y en una variedad de escenarios. Además, tiende a mantener la jerarquía de clases horizontal, al permitir que las superclases usen los mixins para crear nuevos objetos con las propiedades de subclase deseadas en lugar de alargar la cadena de herencia para crear nuevas subclases para estos casos.

La desventaja es que puede resultar bastante difícil determinar de qué mixin proviene la propiedad, ya que las propiedades se copian en el objeto fuente y en este caso no es posible determinarlo con el operador typeof.

##### PATRÓN PROXY
Consiste en la creación de objetos Proxy, que actúan como intermediarios a la hora de actuar con otros objetos. Con un objeto Proxy, se tuene más control sobre las interacciones con ciertos objetos. Un objeto proxy puede determinar el comportamiento al interactuar con el objeto, por ejemplo cuando obteniendo o estableciendo un valor.

El primer argumento es el objeto al que se accede mediante el Proxy y el segundo es un objeto que representa al controlador. En controlador, se define un comportamiento específico según el tipo de interacción, siendo los más comunes get y set. Un posible uso de los proxies es agregar validación. Un usuario no debería poder cambiar un valor numérico  por un string ni darle un valor vacío. O si el usuario está intentando acceder a una propiedad del objeto que no existe, informar de que la propiedad no existe.


