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

Para comprobar si una variable está definida y no es null se usa la función isset(), con el conmbre de la variable como argumento.

##### CONSTANTES
Las constantes en php se definen usando la función define(), que recibe como primer argumento el nombre de la constante y como segundo su valor. Para referirse a ellas no se usa el símbolo $, simplemente el nombre. Existen numerosas constantes predefinidas como PHP_VERSION, PHP_EXTENSION_DIR, __FILE__, etc...

##### VARIABLES DEL SERVIDOR 
También llamadas variables superglobales. La variable $_SERVER es un array con múltiples variables que ofrecen información del servidor, por ejemplo SERVER_ADDR, SERVER_SOFTWARE o inforamación sobre el cliente, como HTTP_USER_CLIENT o REMOTE_ADDR.

Otra variable importante es $_GET, que recibe la información intriducida en un formulario cuando se usa el método GET. Existe también la variable $_POST, para cuando se use este método.

##### SESIONES
Las sesiones almacenan y persisten datos del usuario mientras que navega por un sitio web hasta que la sesión sea finalizada o el usuario abandone el sitio. Las sesiones son muy seguras al almacenarse en el servidor y ser invisibles para el cliente. 

Las sesiones se inician con la función session_start(). Se crea una variable superglobal llamada $_SESSION, que al ser un array, se le puede añadir información. Esta variable está disponible desde cualquier página dentro del dominio. Se debe usar start_session() en cada página que necesite acceder a la sesión

```
session_start()

$_SESSION['variable_de_sesion'] = "valor_de_la_variable"
```

##### COOKIES
Las cookies se crean con la función setcookie(). El primer parámetro es el nombre, el segundo es el valor, que solo puede ser una cadena de texto y el corresponde al tiempo de expitación de la cookie.

Para borrar una cookie se usa la función unset(cookie), pero no es suficiente con ello, además se debe establecer una fecha pasada con la función setcookie para que se considere caducada y se elimine

La función header() permite cambiar las cabeceras, muy útil para hacer redirecciones, por ejemplo header('Location:otra_pagina.php')