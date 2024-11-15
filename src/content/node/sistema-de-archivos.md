---
title: 'Sistema de archivos'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---

Cuando se utiliza el método fs.readFile(), lo que se recibe es un buffer, que habrá que codificar usando utf8. Todo en el disco duro es un archivo y por lo tanto no se puede guardar nada que no sea un archivo. Se puede ver donde se localiza el archivo de los comandos de la consola usando el comando which [comando], por ejemplo which mkdir. El sistema operativo como tal solo es capaz de abrir y leer archivos de ejecutables, para otros archivos como textos o imágenes se necesitan aplicaciones específicas.

Para interactuar con los archivos, node utiliza llamadas del sistema. Al tratar con archivos, es preferible trabajar con promesas que con callbacks, aunque la documentación de Node dice que los callbacks son más rápidos y son preferibles en casos donde el rendimiento es clave,  esto solo es en casos muy específicos.

Para trabajar con los archivos, Node hace uso de libuv para llevar a cabo las llamadas al sistema. Node ofrece tres maneras de trabajar con archivos, mediante promesas, en cuyo caso hay que importar el módulo ‘fs/promises’, asíncrono, es decir con callbacks y síncrona. En caso de usar las promesas, se crea una función asíncrona autoinvocada.

Para crear el archivo, escribir en un archivo o leer un archivo, se utiliza el método fs.open(), asociándolo a una variable, que actúa como manejador de archivo. Sobre ese manejador de archivo se pueden usar los mñetodos read() o write(), para escribir o leer el archivo. Fs.readFile() es solo para leer el archivo y, de manera similar, fs.writeFile() es solo para escribir en un archivo, mientras que el método fs.open() realiza varias operaciones en un archivo. La sintaxis es fs.open(nombre de archivo, indicadores, modo, callback). Por ejemplo:
```
fs.open('demo.txt', 'r', function (err, f) {console.log('Saved!')}); 
```
