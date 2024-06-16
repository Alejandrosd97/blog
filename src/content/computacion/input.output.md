---
title: 'Input output'
id: 1
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---


Se considera transferencia de entrada cuando el periférico es el transmisor de la información y tiene como receptor a la computadora (procesador o memoria) y transferencia de salida cuando la computadora es el transmisor y tiene como receptor al periférico.

Para realizar la operación de E/S se debe conectar el periférico al ordenador. Para ello es necesario que el ordenador disponga de dispositivos intermedios por los que debe pasar toda la información que el ordenador intercambia con el dispositivo periférico y que permitan tener una correcta gestión y control de la transferencia. En términos generales, a estos dispositivos se llaman módulos de E/S. El motivo de usar módulos recae en la necesidad de gestionar una amplia variedad de dispositivos periféricos con características muy específicas y diferenciadas. Esto hace que sea muy complejo agregar la lógica necesaria dentro del procesador para gestionar esta gran diversidad de dispositivos.
Los principales elementos que componen el sistema de E/S son los dispositivos periféricos, los módulos de E/S, los sistemas de interconexión externos y el mapa de memoria y las instrucciones de E/S.

##### DISPOSITIVOS PERIFÉRICOS
Son dispositivos que están conectados al ordenador a través de los módulos de E/S y que se utilizan para almacenar información o para llevar a cabo comunicación con humanos, máquinas u otras computadoras.

La conexión física entre un dispositivo periférico y la computadora se realiza a través de lo que se llama sistema de interconexión E/S. Este sistema permite gestionar las señales de control, estado y datos necesarios para realizar una transferencia de información. La cantidad de información que el dispositivo periférico puede enviar o recibir por unidad de tiempo se denomina tasa de transferencia y suele expresarse en bits o bytes por segundo.

##### MÓDULOS I/O
Un módulo de E/S es un controlador de uno o varios dispositivos periféricos que
establece una interfaz entre el dispositivo periférico y el ordenador para facilitar la comunicación entre uno y otro de forma que buena parte de los detalles técnicos del dispositivo periférico quedan ocultos al resto del ordenador. Del módulo de E/S se distinguen tres partes básicas:
1) Una interfaz interna estandarizada con el resto del ordenador mediante el bus del sistema que da acceso al banco de registros del módulo de E/S.
2) Una interfaz externa específica para el dispositivo periférico que controla. Normalmente la conexión al dispositivo periférico se realiza a través de un sistema de interconexión de E/S estandarizado.
3) La lógica requerida para gestionar el módulo de E/S. Es responsable de la transferencia de información entre la interfaz interna y externa.

La comunicación entre los módulos de E/S y el ordenador es siempre la misma para todos los módulos. Esta comunicación la establece el bus del sistema, de manera que el procesador ve el módulo de E/S como un espacio de memoria, pero estas direcciones, físicamente, corresponden (están mapeadas) a cada uno de los registros que el módulo de E/S de la computadora tiene y generalmente se denominan puertos de E/S. De esta forma se consigue que la comunicación entre el ordenador y el módulo de E/S se realice transfiriendo instrucciones de lectura y escritura en sus registros, de forma muy similar a cómo se accede a la memoria. Estos registros se pueden agrupar según el tipo de señales o el tipo de información que se necesita para gestionar correctamente el dispositivo periférico en tres tipos, registros de control, registros de estado y registros de datos.

Las señales de control se usan comúnmente para dar comandos al módulo de E/S, como por ejemplo cómo iniciar o detener una transferencia o indicar acciones específicas que el dispositivo periférico debe realizar, como comprobar si está disponible. Estas señales se pueden recibir directamente desde las líneas de control del bus del sistema o desde las líneas de datos del bus del sistema y se almacenan en el registro de control.

Las señales de estado aportan información sobre el estado del módulo de E/S, como por ejemplo como saber si el módulo está disponible u ocupado, si hay algún dato listo, si se ha completado una operación o si ha habido algún error y de qué tipo. Estas señales generalmente son actualizadas por la lógica del módulo de E/S y almacenadas en el registro de estado.

###### SISTEMAS DE INTERCONEXIÓN EXTERNA
En un ordenador se distingue entre dos tipos básicos de sistemas de interconexión: los internos del ordenador, que permiten conectar el procesador, la memoria y el sistema de E/S y que recibe el nombre de bus del sistema, y ​​los externos al ordenador, que permiten conectar el sistema de E/S con los diferentes dispositivos periféricos y que se llaman sistemas de interconexión de E/S o buses de E/S.

Físicamente, un sistema de interconexión consta de un conjunto de cables o líneas que interconectan diferentes dispositivos. Por estas líneas circulan señales eléctricas que los dispositivos conectados pueden interpretar como señales binarias. Hay tres tipos de señales básicas: señales de datos, de dirección y de control. Las principales características de los sistemas de interconexión externos son las siguientes:

- Ancho de banda: La cantidad máxima de información que se puede transmitir por unidad de tiempo. Se expresa en bits o bytes por segundo.

- En serie/paralelo: En una interconexión en paralelo existen varias líneas que conectan el módulo de E/S y el dispositivo periférico y se pueden transmitir varios bits simultáneamente a través de las líneas de datos. En una interconexión en serie sólo hay una línea para transmitir los datos y los bits tienen que ser transmitidos uno por uno. Tradicionalmente, las interconexiones de tipo serie eran para dispositivos lentos y las interconexiones de tipo paralelo para dispositivos más rápidos.

- Punto a punto/multipunto: Una interconexión punto a punto tiene un enlace dedicado entre el módulo de E/S y el dispositivo periférico. En una interconexión multipunto, que suele denominarse bus de E/S y que tiene un enlace compartido entre diferentes dispositivos periféricos y el módulo de E/S, el hecho de tener múltiples dispositivos conectados a un mismo conjunto de líneas hace necesario establecer mecanismos para controlar el acceso.

