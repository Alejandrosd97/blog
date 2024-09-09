---
title: 'Process'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


##### PROCESS
Las variables de entorno permiten gestionar la configuración de las aplicaciones por separado del código base. La separación de configuraciones facilita la implementación en diferentes entornos. Debido a que el desarrollo se realiza principalmente en máquinas locales, las variables de entorno se colocan en variables de entorno locales o en el archivo .env local.

Cuando se inicia el proceso de Node, automáticamente se proporciona acceso a todas las variables de entorno existentes al construir el objeto env como una propiedad del objeto global llamado process.  Estas variables son externas a la aplicación y residen en el sistema operativo o el contenedor de la aplicación en ejecución. Una variable de entorno es simplemente un nombre asignado a un valor.

Process.env es una variable global inyectada en tiempo de ejecución por la aplicación Node.js para representar el estado del entorno en el que se encuentra la aplicación en el momento del inicio y utilizarlo en tiempo de ejecución. Por lo tanto, su uso básico es representar el estado del entorno del sistema de nuestra aplicación en la inicialización.

Node de forma nativa no carga archivos .env, por lo que es necesario utilizar el paquete dotenv para cargar el archivo y exponer los valores a través de Process.env. Se crea el archivo dotenv en el directorio raíz del proyecto y se en el archivo index.js se importa dotenv y se ejecuta el método config()