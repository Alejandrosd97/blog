---
title: 'Identity and Access Manager'
description: 'Explicación de Relational Database'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---







Los roles no solo pueden ser ocupados por personas, también por servicios o recursos, por ejemplo un EC2 que necesita hacer una query a una dase de datos puede obtener los permisos correspondientes via rol. Con IAM podemos usar una app como google authenticator para establecer autenticación multifactor. Tambien podemos crear políticas para las contraseñas como la longitud o requerir números o mayúsculas, así como el tiempo de expiración. Existe el IAM policy simulator, para comprobar que las polítias de IAM funcionan como deberían antes de llevarlas a producción. También se usa para "troubleshooting".

IAM es universal, no diferencia entre regiones, Root account es el usuario con el que se crea la cuenta. Los usuarios no tienen permisos por defecto, deben ser añadidos, lo que si se crea son las Access Key ID y Secret Access Key. Estas no son usuario y contraseña, y por lo tanto no sirven para hacer login pero sí para acceder via APis o linea de comandos.

En lugar de crear políticas individuales para cada usuario, una buena opción es utilizar variables de política y crear una política de grupo que se aplique a varios usuarios. Las variables de política actúan como placeholders. Cuando realiza una solicitud a AWS, el placeholder se reemplaza por un valor de la solicitud cuando se evalúa la política.

IAM Access Analyzer ayuda a identificar los recursos se una organización y sus cuentas, como los buckets de S3 o los roles de IAM, que se comparten con una entidad externa. Esto permite identificar el acceso no deseado a los recursos y datos, lo que supone un riesgo para la seguridad.

Se puede establecer el alcance del analizador en una organización o una cuenta de AWS. Esta seria una zona de confianza. El analizador escanea todos los recursos admitidos dentro de la zona. Cuando Access Analyzer encuentra una política que permite el acceso a un recurso desde fuera de la zona de confianza, genera un hallazgo activo.

##### WEB IDENTITY FEDERATION

Simplifica la autenticación y autorización para aplicaciones web

##### WEB IDENTITY FEDERATION CON COGNITO

Cognito actúa como un broker entre la aplicación y los proveedores de autenticación como Amazon, Google o Facebook, aportando funcionalidad sign up y sign in para las aplicaciones web y usuarios invitados, de manera que no es necesario escribir código adicional para estas funciones. Soporta múltiples dispositivos y sincronización entre ellos. Es muy recomendado para apps móviles que usan recursos de AWS. El usuario se autentica con alguno de los proveedores disponibles y congnito genera credenciales temporales para ese usuario que se corresponden con un rol que permite el acceso. La app no necesita guardar las credenciales de los usuarios en ningun lugar. Terminología de cognito:
- User pool: Es el intermediario cuando el usuario se hace login en facebook, el cual devolverá un Jason Web Token. 
- identity pool: Intercambia el token generado en el paso anterior por credenciales, estas credenciales se correspoden a un rol que permite el acceso a los recursos.
- Sign in

Otra utilidad es la sincronizacion. Si un usuario hace un cambio en sus datos personales de la cuenta desde un dispositivo, SNS envia notificaciones push silenciosas a los demás dispositivos asociados con la cuenta.
