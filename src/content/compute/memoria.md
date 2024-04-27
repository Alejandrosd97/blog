---
title: 'Memoria'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/ram.svg'
---

Se puede clasificar la memoria según varias características. La primera es la localización de la memoria, dentro del chip del procesador suele haber registros y uno o varios niveles de memoria caché.
La memoria interna corresponde a la memoria RAM y adicionalmente uno o varios niveles de memoria caché. La memoria externa corresponde a dispositivos de almacenamiento secundarios como discos duros,
unidades ópticas como el CD-ROM, etc.

Otra forma de clasificar la memoria es el método para acceder a las ubicaciones de ella. Existen diferentes métodos de acceso propios de cada tipo de memoria:

- Secuencial: Se accede a la información desde la última ubicación accedida, leyendo todas las ubicaciones de memoria en orden hasta alcanzar la ubicación deseada. El tiempo de acceso depende de la ubicación a la que desea acceder y de la ubicación a la que haya accedido anteriormente.

- Directo: La memoria está organizada en bloques y cada bloque de memoria tiene una, dirección única, se accede directamente al comienzo de un bloque, y dentro del bloque se realiza un acceso secuencial para llegar a la memoria deseada. El tiempo de acceso depende de la ubicación a la que se desea acceder y de la última ubicación accedida. Es el método usado en utilizado en discos magnéticos.

- Aleatorio: La memoria está organizada como un vector, en el que cada elemento individual
tiene una dirección única. Se accede a una determinada ubicación proporcionando la dirección. El tiempo de acceso es independiente de la ubicación a la que se accede y es independiente de la última ubicación accedida. El mayor ejemplo de este tipo de acceso es la memoria RAM. Existe un subtipo llamado de acceso asociativo, cuyo acceso se basa en el contenido en vez de la dirección. Es muy común en memoria caché.


Cuando se trabaja con la memoria, exiten dos operaciones. La primera es la lectura, para ello se debe indicar a la memoria la dirección donde se encuentra la información que se desea leer. La otra es la escritura, en esta operación, se debe proveer la información a almacenar y la dirección de memoria donde se va a almacenar. La acción consiste en registrar la información en la dirección especificada. 



Una palabra de memoria es la unidad organizativa de la memoria desde el punto de vista del procesador y es especificado en bytes obits. Este es el número máximo de bytes que se pueden leer o escribir en un ciclo único de acceso a memoria