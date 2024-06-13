---
title: 'Server actions'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


Debido a que cada método de renderizado (CSR, SSR y SSG) tiene sus pros y sus contras, surgieron los componentes de servidor de  React (RSC). Esto abre la puerta a poder elegir que componentes se renderizan en el servidor y cuales en el cliente. Es sobre este concepto sobre el que se basan las acciones del servidor Next.js.

Las acciones del servidor Next.js son funciones que se ejecutan en el lado del servidor. Tener estas funciones especiales que solo se ejecutan en el servidor significa que se puede descargar en ellas responsabilidades como la recuperación de datos y las mutaciones, evitando las vulnerabilidades y problemas de seguridad de recuperar y mutar datos en el cliente. Se utilizan con frecuencia para la recuperación y actualización de datos, sin tener que crear un endpoint de una API. Realizar mutaciones de datos en el servidor ayuda a garantizar que las operaciones se realicen de forma segura, evitando el acceso no autorizado o la manipulación de los datos.

Los componentes del servidor se renderizan en el servidor antes de enviarse al cliente. Esto puede generar cargas de página iniciales más rápidas y un mejor rendimiento del tiempo de interacción, ya que el cliente recibe contenido pre-renderizado sin la necesidad de renderizarlo en el lado del cliente. La principal ventaja de las acciones y los componentes del servidor es que los servidores suelen tener más recursos de computación (como potencia de procesamiento, memoria y almacenamiento) en comparación con los navegadores. Esto permite a los servidores manejar cálculos complejos y manipulaciones de datos de manera más eficiente y rápida.

Los componentes del cliente se utilizan cuando se necesita interactividad del usuario. Si se usan hooks en cualquier componente, este componente debe ser un componente del cliente porque técnicamente los hooks le indican al navegador cuándo volver a renderizar el componente.

Al crear una aplicación de React con componentes de servidor, el árbol de componentes comienza de forma predeterminada con componentes de servidor. Este es el lugar donde se obtienen todos los datos necesarios para obtener un renderizado inicial. Una vez que se necesite JavaScript del lado del cliente, controladores de eventos o enlaces, se convierte en un componente de cliente con la directiva 'use client'. Naturalmente, el árbol de componentes se convierte en algo así como componentes del servidor en la parte superior y componentes del cliente en la parte inferior.

Tanto los componentes del servidor como los del cliente se representan en el servidor. Sin embargo, los componentes del servidor también le permiten recuperar datos iniciales en el servidor, pero luego no permiten interacciones impulsadas por JS.

Si en un momento determinado se necesita llamar a funciones en un Componente del Cliente que invocan código del lado del servidor, por ejemplo modificar información en una base de datos, se le puede dar al Componente Cliente una función que esté anotada con una directiva 'use server'. Esta función sólo se ejecuta en el servidor y por tanto tiene acceso a la base de datos.

Entonces, la forma natural es Componente del servidor -> Componente del cliente ('use client') -> Acción del servidor ('use server'). Vale la pena mencionar que las acciones del servidor obviamente también se pueden usar en los componentes del servidor.

Cuando se modifican los datos, por ejemplo añadiendo un nuevo elemento a la base de datos usando server actions, la interfaz de usuario no se actualizará para mostrar el nuevo elemento, incluso si se recarga la página. Esto se debe a la forma en la Nextjs cachea las peticiones. De forma predeterminada, Next.js almacena en caché automáticamente los valores devueltos de fetch en la caché de datos del servidor. Esto significa que los datos se pueden recuperar en el momento de la compilación o de la solicitud, almacenarse en caché y reutilizarse en cada petición. La revalidación de la data puede producirse de dos maneras: de manera automática al transcurrir un determinado lapso de tiempo, o de manera manual cuando ocuure un determinado evento. La primera es útil cuando la información cambia de manera infrecuente y que la información esté actualizada no es un aspecto crítico. La segunda es preferible cuando se necesite mostrar la información siempre actualizada.

Por tanto, para que se muestre la información actualizada se debe revalidar la ruta actual cuando se envia el formulario para purgar el caché y recuperar la información más recientes después de modifcarla.