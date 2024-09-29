---
title: 'Algoritmos'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/algoritmo.svg'
---

Un scheduler es un programa que forma parte del sistema operativo que contiene el código que determina que proceso debe ejecutar el CPU en caso de que existan varios en ese momento necesitan acceso al procesador

Cada proceso tiene una serie de atributos propios. El primero es el ID. El segundo es el program counte (PC). Todos los procesos se ejecutarán, el scheduler simplemente decide el orden. El contador del programa es un registro donde se almacena la siguiente instrucción de un proceso que debe ser ejecutada. Sirve para recordar la instrucción por la que el proceso debe ser retomado en caso de que la ejecución del proceso se interrumpa debido a la aparición de otro proceso con mayor prioridad que necesite acceso inmediato al procesador. Una vez que este nuevo proceso termina, se retoma el proceso anterior desde el punto indicado en el programa del contador. Los registros de propósito general mantienen los valores previos a la interrupción para que sigan disponibles en el momento de la reanudación del programa interrumpido. Además del estado del proceso, otros atributos propios de los procesos son la lista de archivos abiertos y la lista de dispositivos abiertos. Atributo proteccion?????

###### ALGORITMOS DE SCHEDULING
La suma del bloque de control del proceso y los atributos forma el contexto del proceso.
Hay tres tipos de scheduler, el mencionado en la sección anterior es un Short time scheduler. El long time scheduler decide que programas, de los que se encuentran en new state en el disco duro son movidos a la RAM, ya que ésta tiene una capacidad limitada. Si no queda espacio libre en la RAM y uno de los procesos en new state tiene una prioridad mayor que los que ya están en la RAM, será movido a la RAM para que se ejecute primero y otro proceso con menor prioridad será movido al disco duro. Qué proceso es movido fuera de la RAM al área de swapp del disco duro para dejar espacio al proceso con mayor prioridad es decidiso por el medium term scheduler. Este proceso también se conoce como swapping. El más importante de los tres es el short time y a veces es referido como shceduler en general.

##### TIEMPOS DE LOS PROCESOS
El punto en el tiempo en el que el proceso es movido del disco duro a la RAM se conoce como arrival time. El tiempo que transcurre mientras un proceso no se está ejecutando en el CPU ni llevando a cabo operaciones de I/O se llama waiting time. El tiempo de completado es el momento en el que el proceso termina y es eliminado de la RAM. El tiempo de turn-around se calcula mediante la diferencia entre el tiempo de llegada y el tiempo de completado, es el tiempo que pasa un proceso dentro de la RAM. Este tiempo incluye el tiempo de espera del proceso en caso de interrupción por mayor prioridad de otro proceso. Tiempo de I/O es el tiempo empleado en una operación de I/O.

##### SCHEDULING ALGORITHMS
Existen dos tipos de algoritmos, preemptive algorithms y non-preemptive algorithms. En el caso de los non-preemptive, cuando un proceso inicia su ejecución en el CPU, ésta no se interrumpe aunque llegue a la RAM otro porceso con mayor prioridad. Cuando el proceso termina se comprueba cuál de los procesos restantes tiene mayor prioridad para ejecutarlo. Los algoritmos solo se aplican a los procesos que se encuentran en ready state, por mucha prioridad que que tenga un proceso, si se encuentra en I/O, estará bloqueado y no será tenido en cuenta por el algoritmo (por eso el estado I/O también recibe el nombre de block state)



###### ALGORITMO SJF (SHORTEST JOB FIRST)
Es un algoritmo non-preemptive que otorga preferencia a los procesos según su tiempo de ejecución. Es un algoritmo basado en la prioridad. Utiliza el tiempo de ejecución como parámetro para establecer la prioridad de los procesos

###### ALGORITMO SRTF (SHORTEST REMAINIG TIME FIRST)
Es la versión preemptive de SJF. Interrumpe la ejecución de un proceso cuando llega otro proceso con un tiempo de ejecución menor al tiempo de ejecución restante del proceso que se está ejecutando actualmente. Por ejemplo, suponiendo que el proceso en CPU tiene un tiempo de ejecución de 8ns. Transcurridos 2ns entra en la RAM otro proceso cuyo tiempo de ejecución es de 3ns. El shceduler interrumpirá la ejecución del primer proceso para ejcutar el segundo ya que su tiempo de ejecución (3ns) es menor que el tiempo de ejecución restante del primer proceso (6ns). En caso de que dos procesos tengan el mismo tiempo de ejecución, se ejecutará primero el que tenga un menor tiempo de llegada. Una vez que todos los procesos han llegado a la RAM y se encuentran en ready state, el algoritmo SRTF se comporta como SFJ

Throughput es la cantidad de procesos ejecutados por unidad de tiempo

###### FIRST COME FIRST SERVED (FCFS)
Es un algoritmo non-preemptive emdiante el cual el proceso con el menor tiempo de llegada es el que se ejecuta primero. En realidad no se está asignando ninguna prioridad a los procesos, simplemente se ejecutan por orden de llegada, por lo que se considera un algoritmo sin prioridad

###### TIEMPO DE RESPUESTA
Existe un tiempo de respuesta para cada proceso. Se define como el tiempo de espera hasta que llega al CPU por primera vez. Debido a que en los algoritmos non-preemptive no se interrumpen los procesos una vez han iniciado su ejecución en el procesador, el tiempo de resupuesta es el mismo que el tiempo de espera.

##### COMPARACIÓN DE LOS ALGORITMOS ANTERIORES

Starvation: Se considera que un algoritmo sufre de problema de starvation cuando existe la posibilidad de que un proceso e nready state se quede en tiempo de espera de manera indefinida. Espera indefinida significa que el la ocurrencia del evento se va posponiendo para momentos posteriores. El evento ocurrirá en algún momento futuro pero no existe un límite de tiempo para que eso ocurra, el tiempo de espera puede crecer de manera indefinida. Cualquier algoritmo basado en la prioridad es susceptible de un problema de starvation, ya que constantemente se crean procesos nuevos y es posible que estos nuevos procesos tengan mayor prioridad que uno existente en la RAM, por ejemplo en el algoritmo SJF, simpre pueden aparecer procesos cuyo tiempo de ejecución sea menor y, por tanto, tengan prioridad. El algoritmo SRTF también sufre del problema de starvation, no así el algoritmo FCFS, ya que no establece prioridad sino que se basa en el tiempo de llegada, de manera que es posible determinar en qué momento exacto se va a ejecutar el proceso.

- Convoy effect: Se produce convoy effect cunado existe un proceso con un tiempo de ejecución muy corto esperando a que termine la ejecución de otro proceso con un tiempo de ejecución muy largo. Un algoritmo con efecto convoy puede ocasionar un mayo tiempo de espera y tiempo de turn-around comparado con otros algiritmos sin este defecto. FCFS puede sufrir efecto convoy y, debido a ser non-preemptive SJF, también. SRTF por sus parte no sufre este problema.

SJF y SRTF tienen mejor rendimiento en términos de throughput que FCFS, el problema es que en la práctica son muy difíciles de implementar, debido a que dependen del tiempo de ejecución de los procesos. La dificultad radica en la difucltad para predecir con exactitud el tiempo de ejecución, ya que esto depende de múltiples factores como el ordenador


##### MAS ALGORITMOS DE CPU
##### LONGEST JOB FIRST SCHEDULING
Es un algoritmo no-preemptive que otorga prioridad al proceso con el tiempo de ejecución más largo, por lo que su funcionamiento es el opuesto a SJF. Tiene varias desventajas como son starvation, efecto convoy, bajo throughput y mucha dificultad para ser implementado

##### LONGEST REMAINING TIME FIRST
Es un algoritmo preemptive en el cual se otroga prioridad al proceso con el tiempo de ejecución restante más alto en ready state. Presenta los mismos problemas que LJF.

##### ROUND ROBIN SCHEDULING ALGORITHM
Se define como time-quantum al tiempo máximo que un proceso puede ejecutarse haste ser preempted. Round robin se podría considerar como la unión del algoritmo FCFS y el time-quantum. Utiliza una estructura de datos de cola, en la cual los nuevos procesos que se van añadiendo se sitúan al final de la cola. La eliminación, por el contrario, solo ocurre en la parte delantera de la cola. Se empieza ejecutando el proceso con el menor tiempo de llegada y se ejecuta durante el tiempo definido en el quentum time. Mientras tanto, nuevos procesos van llegando a la RAM y se colocan en la cola según su tiempo de llegada, Si pasado este tiempo no se ha completado en ejecución, se coloca al final de la cola y se ejecuta el siguiente en la cola. Si transcurrido el tiempo máximo, no se ha completado, se moverá a la final de la cola y se comenzará a ejecutar el siguiente proceso de la colo, y así sucesivamente. Cuanto mayor es el quantum time, mayor es el tiempo de respuesta, pero menor la cantidad de cambios de los procesos en ejecución, porque da la oportunidad de que procesos más grandes puedan ser ejecutados sin exceder el tiempo límite.

Las ventajas del algoritmo Round robin son que no padece de starvation ni de efecto convoy y su tiempo de respuesta es corto, además es más sencillo de implementar en la práctica. Como limitación tiene el throughput, que pese a ser bueno espeor que SJF y SRTF