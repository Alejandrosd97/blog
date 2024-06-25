---
title: 'Hashing'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### SALTING
En criptografía, salting se refiere a agregar datos aleatorios al input de una función hash para garantizar un output único, el hash, incluso cuando los inputs sean los mismos. En consecuencia, el hash único producido al agregar el salt hace de protección adicional contra diferentes vectores de ataque, como ataques de tabla hash, al tiempo que ralentiza los ataques de diccionario y de fuerza bruta.

Las contraseñas hash no son exclusivas debido a la naturaleza determinista de la función hash, es decir, cuando se les da el mismo input, siempre se produce el mismo output. Si dos personas usan la misma contraseña, el hash será el mismo. El atacante puede predecir mejor la contraseña que se asigna  a ese hash. Una vez conocida la contraseña, se puede utilizar la misma contraseña para acceder a todas las cuentas que utilicen ese hash.

si un atacante entra en la base de datos y ve dos hashes iguales, puede llegar a la conclusión de que no hay salts o que se está utilizando un algoritmo débil para codificar las contraseñas. Si encuentran muchos hashes iguales, esto es señal de que el servidor tiene una contraseña predeterminada y que cada cuenta nueva tiene una contraseña predeterminada.

Una tabla hash puede facilitar la explotación de contraseñas sin salt. Una tabla hash es esencialmente una base de datos de hashes precalculada. Los diccionarios y los strings aleatorios se ejecutan a través de una función hash seleccionada y la asignación de entrada/hash se almacena en una tabla. Luego, el atacante puede simplemente realizar una búsqueda inversa de contraseñas utilizando los hashes de una base de datos de contraseñas robadas.

La diferencia con un ataque de diccionario y de fuerza bruta es el cálculo previo. Los ataques a tablas hash son rápidos porque no es necesario dedicar tiempo a calcular ningún hash. La desventaja es la inmensa cantidad de espacio necesario para albergar una tabla hash. Podría decirse que un ataque de tabla hash es un diccionario precalculado y/o un ataque de fuerza bruta.

El salting hace que una función hash parezca no determinista, lo cual impide revelar contraseñas duplicadas. Se puede 'saltear' una contraseña agregándole o anteponiendo el salt, luego se hace el hash del resultado. Cada salt única amplía la contraseña introducida y la transforma en una contraseña única. Además, cuando un usuario cambia su contraseña, el servicio también debería generar un nuevo salt. Es importante que cada contraseña utilice un salt diferente para que contraseñas que son iguales generen un hash diferente.

Para crear datos aleatorios criptográficamente sólidos que puedan servir de salt, podemos utilizar un generador de números pseudoaleatorios criptográficamente seguro para recopilar entradas impredecibles de fuentes que no se pueden observar, como la API del generador aleatorio del sistema operativo.

No es necesario cifrar el salt, ya que su función es evitar que alguien descifre contraseñasy pueden almacenarse en texto sin cifrar en la base de datos. Sin embargo, los salts no deben ser accesibles al público.

##### BCRYPT
la seguridad de la contraseña depende de la rapidez con la que la función de hash criptográfico seleccionada pueda calcular el hash de la contraseña. Una función rápida se ejecutaría más rápido cuando se ejecutara en un hardware mucho más potente.

Cálculos más rápidos significan ataques de fuerza bruta más rápidos. El hardware moderno podría calcular millones de hashes SHA-256 por segundo contra una base de datos robada. En lugar de una función rápida, es necesario una función que sea lenta en el procesamiento de contraseñas para detener casi por completo a los atacantes.

El mayor beneficio de bcrypt es que, con el tiempo, la cantidad de iteraciones se puede aumentar para hacerlo más lento, lo que permite que bcrypt escale con la potencia informática. Esto disminuye cualquier beneficio que los atacantes puedan obtener de un hardware más rápido aumentando el número de iteraciones para hacer que bcrypt sea más lento. Otra ventaja de bcrypt es que requiere de un salt por defecto.

El desafío de los ingenieros de seguridad es decidir qué costo establecer para la función. Este costo también se conoce como factor de trabajo. Lo recomiendado es que la función se ejecute lo más lento posible sin afectar a la experiencia de los usuarios y sin aumentar la necesidad de usar hardware adicional. Por ejemplo,un tiempo de 1 segundo de espera mientras se ejecuta la función puede ser aceptable para los usuarios que introducen las credenciales para registrarse, en ese caso se ajusta el factor de trabajo para este tiempo, de manera que para los usuarios no supone un perjuicio grande, pero sí para los atacantes que intenten un ataque de fuerza bruta.


```
    const bcrypt = require("bcrypt");
    const saltRounds = 10;
    const plainTextPassword1 = "DFGh5546*%^__90";
```

La constante saltRounds hace referencia al factor de trabajo

```
const bcrypt = require("bcrypt");
const saltRounds = 10;
const plainTextPassword1 = "DFGh5546*%^__90";

bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    console.log(`Salt: ${salt}`);
    return bcrypt.hash(plainTextPassword1, salt);
  })
  .then(hash => {
    console.log(`Hash: ${hash}`);
    // Store hash in your password DB.
  })
  .catch(err => console.error(err.message));
```

Primero se crea un salt a través de la función bcrypt.genSalt() que recibe el coste, saltRounds. Si tiene éxito, devuelve un valor salt que luego se pasa a bcrypt.hash() junto con la contraseña, PlainTextPassword1, para convertirla en hash. El éxito de bcrypt.hash() retorna el hash necesario para almacenarlo base de datos.

También se puede crear el salt y el hash en la misma función.

```
bcrypt
  .hash(plainTextPassword1, saltRounds)
  .then(hash => {
    console.log(`Hash: ${hash}`);
    // Store hash in your password DB.
  })
  .catch(err => console.error(err.message));
```