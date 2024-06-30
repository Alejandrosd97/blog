---
title: 'Hashing'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### HASHING VS ENCRYPTION
El cifrado es la práctica de codificar información de manera que sólo alguien con la clave correspondiente pueda descifrarla y leerla. El cifrado es una función bidireccional, de manera que cuando se cifra algo, se hace con la intención de descifrarlo más tarde.

Para cifrar datos se utiliza algo llamado cifrado, que es un algoritmo para cifrar y descifrar información. El algoritmo también puede denominarse clave de cifrado. 

Con la criptografía de clave pública, se utiliza una clave pública para cifrar y la otra clave privada para descifrar. Esto se ve durante el protocolo de enlace SSL, donde se utiliza la clave disponible públicamente para cifrar una clave de sesión simétrica y enviarla de regreso al servidor para descifrarla mediante su clave privada.

- Cifrado asimétrico: Una clave cifra, la otra clave descifra. El cifrado sólo va en una dirección. Este es el concepto que forma la base de PKI (infraestructura de clave pública), que es el modelo que sustenta SSL/TLS.

- Cifrado simétrico: Se acerca más a una forma de cifrado de clave privada. Cada parte tiene su propia clave que puede cifrar y descifrar. Después del cifrado asimétrico que se produce en el protocolo de enlace SSL, el navegador y el servidor se comunican utilizando la clave de sesión simétrica que se pasa entre ellos.

Cuando está comprando un certificado SSL y ve "2048 bits", eso se refiere a la longitud de la clave privada, específicamente una clave privada RSA. Cuando se mencionan "256 bits", generalmente se refiere al tamaño de las claves de sesión simétricas que se utilizan durante la comunicación real. Eso no significa que el cifrado simétrico sea menos seguro. Una supercomputadora todavía necesitaría miles de años para descifrar el cifrado de 256 bits.

La razón por la que se utiliza el cifrado simétrico de 256 bits para la comunicación es su mayor rapidez, lo cual repercute en un mejor rendimiento y menos gasto de computación para los servidores.


Hashing, por otro lado, es la práctica de utilizar un algoritmo para asignar datos de cualquier tamaño a una longitud fija. Esto se llama valor hash. Mientras que el cifrado es una función bidireccional, el hash es una función unidireccional. Aunque es técnicamente posible aplicar hash inverso a algo, la potencia informática necesaria lo hace inviable. El hash es unidireccional y tiene como objetivo verificar que un archivo o dato no ha sido alterado, es decir, que es auténtico. 

Cada algoritmo genera un hash con una longitud fija. Por ejemplo, el algoritmo SHA-256, genera un valor hash de 256 bits, generalmente representado por una cadena hexadecimal de 64 caracteres. Cada valor hash es único. Si dos archivos diferentes producen el mismo valor hash único, esto se denomina colisión y hace que el algoritmo sea inútil. 

Un ejemplo de hash sería firmar digitalmente un software y ponerlo a disposición para ser descargado en una página web. Para esto, se crea un hash del ejecutable y luego, después de agregar su firma digital, también se hace hash. Después de esto, todo se cifra para que se pueda descargar.

Cuando un cliente descarga el software, el navegador descifrará el archivo y luego inspeccionará los dos valores hash únicos. Luego, el navegador ejecutará la misma función hash, utilizando el mismo algoritmo, y volverá a aplicar hash tanto al archivo como a la firma. Si el navegador produce el mismo valor hash, entonces sabrá que tanto la firma como el archivo son auténticos y no han sido alterados.

##### SSL/TLS
###### TLS HANDSHAKE
Los certificados SSL/TLS son necesarios para servir un sitio web a través de HTTPS. El handshake (o apretón de manos) es donde comienza cada conexión y donde se establecen los fundamentos técnicos de SSL/TLS y se lleva a cabo entre cliente y servidor.

El propósito del handshake es realizar todo el trabajo criptográfico necesario para tener una conexión segura. Esto incluye autenticar el certificado SSL que se utiliza y generar una clave de cifrado.

Los primeros pasos del handshake requieren que el cliente y el servidor compartan sus capacidades para que puedan encontrar las funciones criptográficas que admiten mutuamente (client hello y server hello). Cuando el cliente y el servidor ya han acordado los métodos de cifrado exactos que utilizarán, el servidor envía al cliente su certificado SSL. Una vez recibido, el cliente verifica que el certificado sea auténtico, ya que para tener una conexión verdaderamente segura, además de cifrar la información, también hay que asegurarse de que se envía al sitio web correcto. Los certificados SSL/TLS proporcionan esa autenticación. 

Todos los certificados SSL confiables son emitidos por una Autoridad de Certificación (CA), que es una empresa aprobada para emitir certificados digitales. Estas organizaciones deben seguir pautas estrictas de emisión y validación para que los certificados que emiten sigan siendo fiables. Se puede ver como un notario, cuya firma significa que la entidad en el certificado es quien dice ser.

El cliente verifica la firma digital y se asegura de que el certificado proviene de una CA confiable. Los certificados SSL contienen un par de claves que constan de una clave pública y una privada. El cifrado es efectivamente unidireccional. El cliente cifrará datos aleatorios con la clave pública del certificado que debe usarse para generar la clave de sesión. El servidor sólo podrá descifrar y utilizar esos datos si tiene la clave privada, comprobando así que está en posesión de esta y demostrando su identidad. En este momento el servidor envía un mnsaje server hello done para indicar que ya ha terminado de enviar todos los mensajes que tenía que enviar.

La última parte del handshake TLS implica la creación de la clave de sesión, que es la clave que realmente se utilizará para una comunicación segura.

Las claves de sesión son simétricas, lo que significa que se utiliza la misma clave para cifrar y descifrar. Estas claves pueden lograr un cifrado sólido de manera mucho más eficiente que las claves asimétricas, lo que las hace apropiadas para enviar datos en una conexión HTTPS. El método exacto para generar la clave puede variar, los dos esquemas más comunes son RSA y Diffie-Hellman.

El handshake SSL es lo primero que debe suceder en una conexión HTTPS, incluso antes de que se cargue la página web. Una vez que completado el handshake, comienza la conexión HTTPS cifrada y autenticada y todos los datos que se envían y reciben entre cliente y servidor están protegidos.

En versiones anteriores era necesario hacer dos viajes de ida y vuelta al servidor, pero con TLS 1.3 solo es necesario un viaje, haciendo que el proceso sea más rápido.

BUSCAR CIPHER SUITES

##### SHA
La segunda versión de SHA, SHA-2, tiene muchas variantes, siendo la más común SHA-256. El algoritmo SHA-256 regresa un valor de hash de 256-bits, o 64 dígitos hexadecimales. aunque no es perfecto, es considerablemente más seguro que MD5 o SHA-1.  

En cuanto al rendimiento, un hash SHA-256 es un 20-30% más lento de calcular que los hashes MD5 o SHA-1.
Dado un archivo y su valor de hash esperado (comúnmente referido como una suma de control), se ùede hacer un cálculo de hash para validar que el archivo recibido está completo y no corrupto.


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





