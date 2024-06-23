---
title: 'Bundlers'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


Un Bundler es una herramienta que proporciona un método para organizar y fusionar múltiples archivos JavaScript en un único archivo unificado. El bundler analiza toda la aplicación y agrupa todo el código en un conjunto mínimo de archivos que se pueden implementar en producción, a menudo un único archivo .js, para optimizar el rendimiento para el cliente. Esto incluye subproyectos en los que se divide la aplicación y dependencias de terceros. El uso de bundlers se vuelve necesario cuando un proyecto consta de más de un archivo o cuando se usan bibliotecas con numerosas dependencias. Como resultado, el  rendimiento del lado del navegador mejora al no tener que buscar numerosos archivos individualmente.

Otro ejemplo es que podría tener una arquitectura sin servidor con múltiples servicios en un único repositorio. Un paquete le permitiría agrupar cada servicio por sí solo e implementarlos individualmente.

La operación de un bundler se puede dividir en dos etapas principales: generar un gráfico de dependencias y posteriormente agrupar los elementos necesarios.

###### GRÁFICO DE DEPENDENCIAS
El paso inicial en proceso implica la creación de un mapa que describa las relaciones entre todos los archivos servidos, lo que se conoce como resolución de dependencia. Para hacer esto, se requiere un archivo de entrada que suele ser el archivo principal. Este archivo es analizado para determinar las dependencias.

a partir de aquí, el bundler recorre las dependencias, rastrea más dependencias en caso de haberlas, y asigna ID distintos a cada archivo encontrado. Finalmente, extrae todas las dependencias y genera un gráfico de dependencia que representa la relación entre todos los archivos.

###### BUNDLING
Una vez que el bundler obtiene todas las entradas necesarias y clasifica sus dependencias anterior, comienza la etapa de packing. Esta etapa consiste en preparar los activos que el navegador puede manejar sin problemas. En este paso, el bundler utiliza el gráfico de dependencia para combinar todos los archivos de código, conectar las funciones necesarias y el objeto module.exports, y crear un paquete limpio y ordenado que el navegador cargará fácilmente.

##### VITE
Vite es una herramienta de compilación que sirve para proporcionar una experiencia de desarrollo más rápida y sencilla. Consta de dos partes principales. En primer lugar, un servidor de desarrollo que proporciona numerosas mejoras de funciones con respecto a los módulos ES nativos, por ejemplo, reemplazo de módulo en caliente (HMR) muy rápido rápido. en segundo lugar, un comando build que agrupa el código con Rollup, preconfigurado para generar activos estáticos altamente optimizados para producción. Rollup, a su vez, es un bundler para JavaScript que compila pequeños fragmentos de código en algo más grande y complejo, como una biblioteca o una aplicación. Utiliza el nuevo formato estandarizado para módulos de código incluido en la revisión ES6 de JavaScript, en lugar de soluciones  anteriores como CommonJS y AMD.

