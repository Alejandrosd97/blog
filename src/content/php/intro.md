---
title: 'Administración'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


El código php no se puede ver desde el navegador ya que se ejecuta del lado del servidor. La petición llega al servidor, el código de php procesa la petición y envía la respuesta.

El código php se debe escribir dentro de la etiqueta <?php ?>, por ejemplo:

```
<?php
    echo '<h1>Hola mundo</h1>'
 ?>
```

A diferencia de otros lenguajes de programación, el símbolo . se usa para concatenar no para ejecutar métodos de objetos. Existe un atajo para imprimir un texto por pantalla sin necesidad de usar el comando echo y es mediante la etiqueta <?= 'Hola mundo' ?>

##### VARIABLES
Php es un lenguaje débilmente tipado por lo que no es necesario especificar el tipo de variable durante su declaración. Las variables llevan el signo $ delante del nombre tanto en la declaración como durante su uso. Las variables no pueden empezar con un número ni poner guiones. Se puede conocer el tipo de una variable mediante la función gettype(). Para imprimir el valor de una variable basta con usar comillas dobles y escribir el nombre de las variable, sin necesidad de template strings como es el caso de javascript. Com comillas simples esto no ocurre y es necesario usar la concatenación con el operador .

##### VARIABLES DEL SERVIDOR 
También llamadas variables superglobales