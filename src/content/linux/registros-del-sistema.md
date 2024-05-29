---
title: 'Registros del sistema'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/blog-placeholder-3.jpg'
---


Existen dos maneras de gestionar los registros. La primera es rsyslog, que es una mejora del sístema syslog típico de Linux y gestiona diversos archivos de texto plano. La segunda, systemd-journald, se encuentra en sistemas que usan systemd y mantiene un registro más moderno y con más funcionalidades, pero menos abierto a otros programas. Además, es más seguro al no guardar los registros en texto plano sino en archivos binarios que deben ser leídos usando este programa. Los archivos de registro se guardan en /var/log.

Rsyslog tiene su archivo de configuración en /etc/rsyslog.conf. Las líneas dentro de este archivo indican el tipo de mensaje y donde debe ser guradado. El selector de mensajes consta de dos partes separadas por un punto [facility].[priority]. Facility hace referencia al origen del registro, por ejemplo daemon, cron, auth o security. La prioridad engloba valores como info, warning, error, crit o panic. Tambiñen se incluyen los archivos dentro del directorio /etc/rsyslog.d/, por si algún programa guarda sus logs en un archivo aparte. 

Para enviar registros de manera manual se utiliza el comando logger. Por defecto la facilidad.prioridad será user.notice, a no ser que se cambie mediante la flag -p. Con la flag -t se puede añadir una etiqueta, útil para poder filtrar los mensajes de manera más sencilla. Debido a la gran cantidad de registros que se van acumulando en un servidor en producción que funciona de manera ininterrumpida, se usa el comando logrotate para administrar los archivos de manera automática cuando pase un plazo de tiempo determinado. Permite borrar los archivos, comprimirlos, etc. Logrotate trae el archivo de configuración /etc/logrotate.conf y los archivos que se creen dentro de /etc/logrotate.d/.