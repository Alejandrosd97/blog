---
title: 'Monitorización'
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### CLOUDWATCH

Por defecto, todas las instancias EC2 envían información a Cloudwatch, ésta se almacena indefinidamente y puede ser consultada incluso después de eliminar la instancia. Por defecto, EC2 no envía métricas del sistema operativo, para ello es necesario instalar Cloudwatch agent. Las métricas se envían cada 5 minutos, aunque se pueden configurar alarmas para monitorear cualquier metrica en una cuenta de AWS, de manera que se active cuando alguna métrica supere un umbral determinado.

