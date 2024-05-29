---
title: 'Administración de usuarios'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---



En el archivo /etc/passwd es donde se guarda la información de los usuarios. Es un archivo muy sencillo y solo ocupa una linea por cada uno de los usuarios, ésta tiene varios campos delimitados por dos puntos. La X en el segundo campo hace referencia a la contraseña, que ya no se encuentra en este archivo sino en /etc/shadow. Esto es debido a que el archivo psswd tiene permisos de lectura para cualquier usuario. Un ejemplo de la información de un usuario sería:

usuario:×:UID:GID:datos_personales:directorio_home:shell

Para crear un usuario con las opciones por defecto se usa el comando useradd [nombre_de_usuario], aunque con determinadas flags se pueden establecer valores personalizados, por ejemplo -g para el grupo principal, -G para los grupos secundarios, separados por comas, o -s para el intérprete de comandos.

Para cambiar de usuario se usa el comando su [nombre_de_usuario]. Si no se especifica un usario el usario al que se cambia es root.

En el archivo /etc/shadow, las contraseñas se encuentran cifradas para mayor seguridad. El primer campo separado po $ simboliza el algoritmo de cifrado usado. El segundo campo, separado de la contraseña por dos puntos, hace referencia a la última vez que se cambió la contraseña expresado en dias desde el 1 de junio de 1970. Los dos siguientes campos son el mínimo de días hasta que se pueda cambiar la contraseña y el máximo de días de validez de la contraseña antes de que sea necsario cambiarla. El siguiente expresa los días de aviso antes de que la contraseña caduque, por ejemplo, si son 7, el usuario recibirá avisos durante la última semana de vigencia de la contraseña para que la cambie antes de que sea inválida. El siguiente número significa los días que transcurren desde que la contraseña caduca hasta que se deshabilita la cuenta. Al crear un usuario, aunque en el archivo /etc/psswd se especifique el directorio home del usuario, éste no se crea de manera automática. Para ello, es importante añadir la flag -m. Cuando se crea un usuario, por defecto no tiene contraseña, se debe crear mediante el comando psswd [nombre_usuario]. Si el campo de la contraseña empieza por una exclamación, el usuario no podrá acceder a su cuenta aunque teclee la contraseña correcta. Para ello el administrador debe ejecutar el comando psswd [nombre_usuario] -l (lock). Para desbloquear al usuario se ejecuta el mismo comando pero esta vez con la flag -u (unlock)en vez de -l. 

El comando chage -l [usuario] permite ver de manera más amigable todas las fechas relevantes respecto de la contraseña como la caducidad o la última modificación. El comando chage permite cambiar los distintos parámetros según la flag indicada, por ejemplo -m para el mínimo de días antes de cambiar la contraseña o -M para el máximo.

La información sobre los grupos se puede encontrar en el archivo /etc/group. Los campos se marcan mdiante dos puntos, y tienen el mismo significado que en el archivo /etc/psswd, con la excepción de que el último campo hace referencia a los usuarios que son miembros de ese grupo. Los grupos se crean con el comando groupadd [nombre_del_grupo]. Para eliminar grupos y usuarios se usan los comandos groupdel [nombre_grupo], y userdel -r [nombre_usuario]. La flag -r sirve para eliminar físicamente también su directorio home y su correo. A la hora de modificar un usuario mediante el comando usermod, si se cambia un grupo secundario usando la flag -G, se sustituyen los grupos anteriores por el nuevo, si se desea añadir un grupo más sin perder los anteriores se debe usar la flag -aG.

El directorio /etc/skel es el directorio por defecto cuyo contenido se copia a los directorios personales de los usuarios creados. Contiene los scripts .profile, .bashrc, y .bash_logout. Se puede crear otro directorio que haga la función y usarlo al crear un usuario mediante la flag -k.
