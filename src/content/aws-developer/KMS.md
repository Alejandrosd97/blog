---
title: 'Key Management System'
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

Existen dos tipos de encriptación, simétrica y asimétrica. En la simétrica se usa la misma clave para encriptar y desencriptar la información, mientra que en la asimétrica se genera un par de claves, una pública que se usa para encriptar y una privada que se usa para desencriptar.

Una Customer Master Key (CMK) es una representación lógica de una clave maestra. La CMK incluye metadatos, como el ID de la clave, la fecha de creación, la descripción y el estado de la clave. La CMK también contiene el material de claves utilizado para cifrar y descifrar datos. 

AWS KMS admite CMK simétricas y asimétricas. Una CMK simétrica representa una clave de 256 bits que se utiliza para cifrar y descifrar. Una CMK asimétrica representa un par de claves RSA que se utiliza para cifrado y descifrado o firma y verificación (pero no ambas), o un par de claves de curva elíptica (ECC) que se utiliza para firma y verificación.

En el caso de la encriptación simétrica, AWS emplea Customer Master Keys (CMK). Esta clave puede encriptar archivos de hasa 4Kb, y es generada para encriptar y desencriptar la data key. Esta data key es la que se utiliza para encriptar y desencriptar la información. Esto se conoce como "envelope encryption".

Si se quiere usar una clave simétrica, el usuario que lo haga deberá disponer de los permisos correspondientes. Para encriptar información fuera de KMS se necesita usar claves asimétricas. Se conoce como Key material a los secretos criptográficos que conforman la clave, pueden proveídos por el usuario o dejárselo a KMS. Si se activa la opción multi-región key plos archivos puden ser encriptados en una región y desencriptados en otra. La clave tiene una política asociada sobre quién puede administrarla y quién puede usarla para encriptar y desencriptar.

En caso de que se seleccione la opción de encriptar la información en algún servicio como S3 o RDS, AWS Managed Key es la clave que AWS utiliza para dicha encriptación, mientras que Customer Managed (CKM) son las que se crean manualmente por los usuarios.

KMS permite activar la rotación de claves, de manera que rotará las claves cada año, pero conservará las versiones previas para poder desencriptar los archivos encriptados con las claves anteriores.

##### ENVELOPE ENCRYPTION

Es una forma de encriptaciÓn para encriptar archivos mayores a 4Kb. Se usa la data key (también llamada envelope key) para encriptar el archivo y luego se usa la CMK para encriptar la data key. El archivo encriptado se guarda junto con la data key encriptada de manera qu pueda ser usada luego para desencriptar el archivo. Para desencriptar el archivo, primero la CMK desencripta la data key para que ésta pueda ser usada para desencriptar el archivo. Se usa para mejorar el rendimiento en la red, ya que cuando se encripta información con KMS directamente, debe ser transmitida a traves de la red. Con envelope encryption, solo la data key viaja por la red pero no la data encriptada, luego la data key es almacenada en el servicio correspondiente de manera que no es necesario transferir toda la data a KMS.

