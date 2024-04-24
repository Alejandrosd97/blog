---
title: 'Administración'
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### CLOUDFORMATION Y CDK (CLOUD DEVELOPMENT KIT)
Es el servicio de AWS para IaS (Infrastructure as Code). Los stacks son unidades individuales dentro de Cloudformation que contienen los recursos necesarios para la aplicación. Un ejemplo claro sería tener un stack para desarrollo y otro para producción. Para actualizar un stack, se cambia el archivo yaml (o json) y se le pasa a Cloudformation, que crea un update change set. Ésto, nos explica como van a afectar los cambios, es como una previsualización del resultado final. Se puede integrar con AWS CodeCommit para hacer versiones del código.

CDK es parecido a Cloudformation pero en vez de yaml o yaml se utilizan lenguajes de programación, lo que permite crear scripts más complicados. 

##### CLOUDWATCH
Monitorea los recursos y las aplicaciones ejecutándose en ellos y proporciona métricas en tiempo real. Recibe los logs y de ahí extrae la información. Se pueden configurar alarmas que se activan ante determinados eventos (como cambios de estado) o umbrales y que así enviar notificaciones mediante SNS. Es útil para integrarlo con otros servicios como Autoescaling, para que escale cuando determinadas métricas como el uso de la CPU superen el umbral marcado. Ofrece un dashboard para visualozar los datos de manera más gráfica.

CloudWatch Events ofrece un flujo casi en tiempo real de eventos del sistema que describen cambios en los recursos. Estos eventos ayudan a activar notificaciones basadas en cambios que ocurren en los servicios de AWS. Sin embargo no se puede utilizar CloudWatch Events para depurar y rastrear datos entre cuentas.


##### X-RAY
Recibe trazas de las applicaciones y los servicios de AWS que están integradas con ellas de manera nativa. Es útil para depurar y analizar y depurar aplicaciones distribuidas en producción, por ejemplo, se puede ver si hay algún problema de rendimiento, como cuello de botella en algún punto, ya que aporta información relevante como el tiempo de procesamiento de la petición en cada parte de la app. Cada cada petición individual al servidor es una traza, con todas las fases por las que atraviesa a medida que viaja de un extremo al otro de la aplicación. Una traza es una colección de segmentos, que representan una unidad de data en X-Ray.

Puede utilizar X-Ray para recopilar datos en cuentas de AWS. El agente de X-Ray puede asumir una función para publicar datos en una cuenta diferente de aquella en la que se ejecuta. Esto le permite publicar datos de varios componentes de su aplicación en una cuenta central.

Si se personalizan las reglas de muestreo, puede controlar la cantidad de datos que registra y modificar el comportamiento de muestreo sobre la marcha sin modificar ni volver a implementar el código. Las reglas de muestreo le indican al SDK de X-Ray cuántas solicitudes debe registrar para un conjunto de criterios.

##### AWS HEALTH DASHBOARD
Proporciona avisos y alertas que podrían afectar a los recursos de la cuenta, por ejemplo cambios que AWS está llevando a cabo que podrían afectar a algunos servicios en uso o mantenimiento en alguna región. Existen dos tipos de eventos:
- Eventos públicos: No son específicos de ninguna cuenta, afectan a todos los clientes.
- Eventos privados: Problemas con algún recurso o servicio que se está usando.

##### PROMETHEUS
Prometheus coleciona métricas e información y la almacena en una base de datos de series de tiempo. Ademas podemos consultar la información mediante lenguaje Promql. Los recursos de los cuales se busca coleccionar data se llaman targets. El coste del servicio viene asociado por la cantidad de uso. El servidor de Prometheus consta de:
- Retriever
- Base de datos de series de tiempo
- Servidor HTTP: Para poder hacer peticiones y consultas

##### LAUNCH WIZZARD Y COMPUTE OPTIMIZER
Ofrece un catálogo de aplicaciones que pueden ser desplegadas dentro de AWS, se introducen las especificaciones y se recibe una estimación de costes,una recomendación de recursos y templates de código. Una vez aprobada la recomendación de recursos Launch Wizzard los creará en nuestro del usuario y unos templates de codigo. Finalmente despliega la app.

Compute Optimizer analiza servicios como lambda, EBS o EC2 y utiliza inteligencia artificial para dar recomendaciones sobre recursos que están siendo infrautilizados para optimizar el gasto

##### AWS ORGANIZATIONS
Sirve para manejar todas las cuentas AWS de una misma empresa de manera centralizada. Una práctica común consiste en colocar todas las cuentas de un mismo tipo, por ejemplo desarrolladores, en una misma unidad organizacinal (OU en inglés) y aplicarle una política a todas juntas. Hay una cuenta llamada management account, que es la que administra todas las demás. Las limitaciones sobre qué pueden hacer determinadas OU vienen determinadas por las políticas de control de servicios. Un ejemplo de estas políticas sería impedir a cuentas dentro del OU de desarrollo usar instancias EC2 grandes, ya que estas solo deben usarse en producción debido a su alto coste.

El motivo principal de usar míltiples cuentas es aplicar el principio de mínimo privilegio para cada entorno, restringir el acceso a información sensible (agrupar la información sensible en una cuenta separada sin acceso humano a ella), agrupar la carga de trabajo en base a los propósitos del negocio y limitar el alcance de brechas de seguridad que tengan que ver con acceso no autorizado.




##### CONTROL TOWER
Se podría vera Control Tower como un orquestador de cuentas. En caso de tener un nuevo miembro en el equipo, se le podría crear una cuenta ya preconfigurada con todos los permisos solo con un click. Esta construido sobre la base de Organizations. Cuando se crea una cuenta los "guardrails" se crean y configuran de manera automatica:
- Preventive guardrails: Medidas proactivas para prevenir problemas, generalmente implementados mediante políticas IAM y y políticas de control de servicios.
- Detective: Medidas reactivas, respuestas a incidentes. No impide hacer cosas, pero avisa si hay fallos de cumplimiento.