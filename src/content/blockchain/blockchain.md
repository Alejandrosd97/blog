---
title: 'blockchain'
id : 2
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### PROTOCOLOS DE CONSENSO
Un factor diferencial entre las distintas blockchains es el tipo de mecanismo de consenso que utiliza cada una. Un mecanismo de consenso es el proceso mediante el cual una red llega a un acuerdo sobre la información de la red, por ejemplo, si las transacciones son válidas y en qué orden ocurren. También desempeña un papel clave a la hora de proteger la red blockchain de ataques.

Debido a que la propagación a travśe de la red tarda un timpo en producirse, es posible que dos nodos hayan minado un bloque a la cadena de bloques. En este caso se acepta como bloque a añadir  aquel que se haya difundido a más nodos ya que es esta cadena que tiene más potencia de cálculo. El otro bloque, que se había minado de manera correcta se convierte en un bloque huérfano. Los mineros no reciben recompensa por los bloques huérfanos. Estos bloques, a pesar de ser considerados como válidos, no se añaden a la blockchain principal sino que se almacenan en un sitio llamado pool de bloques huérfanos.

Existen dos tipos principales de protocolos de consenso, Proof of work y Proof of stake.

##### PROOF OF WORK
Es uno de los más utilizados en blockchain y fue popularizado por primera vez por Bitcoin. La prueba de trabajo es una forma de prueba criptográfica en la que una parte llamada probador demuestra a otras llamadas verificadores que se ha invertido una cierta cantidad de un esfuerzo computacional específico.

El minero que resuelve este rompecabezas criptográfico primero confirma el bloque de transacciones más reciente en la cadena de bloques. Luego, el minero exitoso transmite el nuevo bloque a todos los demás nodos, quienes a su vez confirman su precisión y agregan ese bloque a su copia de la cadena de bloques, creando un registro verificable de datos para toda la red. Este proceso de verificación representa consenso. Sólo una vez confirmados estos datos se podrá añadir un nuevo bloque a la red. Los mineros reciben la criptomoneda propia de la blockchain recién acuñada como recompensa por ser los primeros en validar un nuevo bloque de datos y agregarlo a la cadena de bloques PoW.

El propósito de los algoritmos de prueba de trabajo no es probar que se llevó a cabo cierto trabajo o que se resolvió un rompecabezas computacional, sino disuadir la manipulación de datos estableciendo grandes requisitos de control de hardware y energía para poder hacerlo. 

Las cadenas de bloques de prueba de trabajo tienen como objetivo producir bloques a intervalos constantes. Las redes PoW están limitadas en términos de velocidad y escala porque el proceso para demostrar el trabajo consume mucha energía. Pero a pesar de sus limitaciones de velocidad y escalabilidad, las cadenas de bloques PoW históricamente han proporcionado una mejor seguridad, al tiempo que mantienen una descentralización significativa. Debido a que los sistemas PoW están distribuidos, resulta extremadamente costoso para un actor malicioso apoderarse de la cadena de bloques controlando la mayor parte de la potencia informática de la red. Los costos de hardware, electricidad y computación suelen ser demasiado altos para superarlos.


Además, las redes PoW están codificadas para que sean más o menos difíciles en relación con la cantidad de potencia computacional de la red. Se puede pensar que el poder computacional es simplemente competencia: más poder computacional equivale a más competencia, lo que equivale a pruebas de trabajo más duras.La difucultad se aumenta o disminuye según sea necesario para llevar el tiempo medio en el que los bloques son añadidos a la cadena al tiempo de minado establecido. Esto permite que la adición de bloques se lleve a cabo de manera periódica y controlada

El hash de un bloque depende del número de bloque, nonce, datos y hash previo.

Debido a que los bloques se añaden a un ritmo más lento (10 minutos en el caso de bitcoin), las transacciones que se efectuan mientras tanto se almacenan en un lugar llamado mempool. Puede darse que un nodo utilice todos los nonce disponibles antes de que pase un segundo y cambie el timestamp y no haya dado con un hash válido. En este caso lo que se hace es cambiar las transacciones introducidas en el bloque. Debido a que no todas las transacciones presentes en el mempool caben en el siguiente bloque, son los mineros los que eligen cúales introducir. En el caso de Bitcoin, el tamaño de los bloques son 2MB y no es necesario que estén llenos para minarlos.

La principal desventaja de PoW es que operar una plataforma minera y pagar los costes asociados de hardware y electricidad es demasiado costoso para el usuario promedio, y la minería en muchas redes importantes ha sido monopolizada por operadores mineros a gran escala que han acumulado influencia en la gobernanza de la red.

###### ATAQUE DEL 51%
Debido a que los consensos en blockchain funcionan según la mayoría, puede darse el caso de que si alguien controla más de la mitad de la potencia de cálculo de una red, pueda modificar la cadena a su antojo. Por ejemplo, podría desconectar sus nodos de la red, minar bloques de manera offline y luego volver a conectarse a la red. Cuando se vuelve a conectar, habrá dos cadenas de bloques diferentes y blockchain siempre favorece a la más larga. Como el atacante cuenta con más de la mitad de la potencia de cálculo, podrá haber añadido más bloques en el mismo periodo de tiempo, siendo su cadena la más larga y prevaleciendo sobre la verdadera.

##### PROOF OF STAKE
En lugar de que los mineros validen las transacciones, las cadenas de bloques PoS simplemente tienen validadores. La diferencia con PoW es que no existe un proceso computacional que consuma mucha energía para ganarse el derecho a validar. En lugar de trabajar para resolver pruebas de trabajo, los validadores "apuestan" algunos de los tokens nativos de la cadena de bloques para que sean elegibles para su selección como nodo validador. El posible validador esencialmente apostará tokens criptográficos nativos de la cadena de bloques para que sirvan como garantía. Cuando llega el momento de validar los datos contenidos en un bloque de transacciones en una cadena de bloques PoS, el sistema selecciona aleatoriamente un validador para confirmar los datos. Si bien son aleatorias hasta cierto punto, ciertas variables pueden hacer que sea más probable que se elija un validador, incluida la cantidad de tokens que un validador ha apostado. 

A los nodos que trabajan en PoS se les llama validadores. La decisión sobre qué nodo ha de validar un bloque se hace de forma aleatoria, pero dando mayor probabilidad a quienes cumplan una serie de criterios. Entre estos criterios podemos mencionar la cantidad de moneda reservada y el tiempo de participación en la red, pero pueden definirse otros. Además de un menor consume energético, tiene otras ventajas como dmocratización de la minería ya que con proof of work el minado se centraliza en unos pocos mineros que son los más potentes, también resta importancia al ataque del 51%.

##### CRYPTOWALLETS
A diferencia de una billetera normal, las billeteras de criptomonedas técnicamente no almacenan el dinero. Las posesiones se encuentran en la cadena de bloques, pero solo se puede acceder a ellas mediante una clave privada. Las claves demuestran la propiedad del dinero digital y permiten realizar transacciones. Si se pierden las claves privadas, se pierde el acceso al dinero. Por eso es importante mantener la seguridad de la billetera.

Las billeteras online ofrecidas por un exchange importante son la forma más sencilla de empezar a usar criptomonedas y ofrecen un equilibrio entre seguridad y facilidad de acceso. Sin embargo, dado que la información privada se almacena online, la protección contra los hackers es tan sólida como lo sean las medidas de seguridad del proveedor, además de ser más susceptibles a los ataques de phishing y otras formas de ciberdelincuencia

##### LIBRO MAYOR INMUTABLE
El ledger o libro mayor, es el registro de todas y cada una de las operaciones y transacciones que se realizan dentro de una blockchain. Sirve para garantizar la transparencia, seguridad y privacidad de la tecnología blockchain y las criptomonedas.
Pues bien, en el mundo de las criptomonedas un ledger permite hacer exactamente lo mismo. Gracias a este registro, cada transacción u operación de la criptomoneda queda grabada. Esto permite que cada una de estas operaciones pueda ser revisada o auditada de forma pública. El ledger es el resultado de reunir y organizar la información de cada bloque que forma parte de la blockchain de dicha criptomoneda.

##### ÁRBOL DE MERKLE

CLAVE DE CURVA ELÍPTICA
y² = x³ + ax + b


##### TRANSACCIONES Y UTXO
Las UTXOs se crean durante las transacciones y sirven como un medio para rastrear la propiedad y prevenir el doble gasto, desempeñando un papel crucial en el funcionamiento, la seguridad y la transparencia de la red Bitcoin.
Una UTXO es una unidad de moneda de bitcoin que no se ha gastado en una transacción anterior. Son el modelo de contabilidad subyacente de Bitcoin y se utilizan para rastrear la propiedad de los bitcoins.
Cada transacción de Bitcoin tiene dos partes: input y output. El input es una o más UTXO que se están gastando (dinero que está en tu monedero y que estás enviando a otra dirección o monedero). El output es una o más nuevas UTXOs que se están creando (dinero que está llegando a una nueva dirección o monedero).

En bitcoin, las transacción viven incluso después de ser realizadas. A la hora de realizar un pago, no se sustrae la cantidad de un monto que un usuario tiene en su cuenta como en un banco tradicional. Cuando un usuario recibe pagos de otros usuarios, estos no se acumulan en una sola cifra que refleja la cantidad total de bitcoin que posee. Estas transacciones a su favor se conocen como UTXO. Si este usuario quiere hacer una compra de por ejemplo 0,5Bitcoin, podrá usar una más de estos UTXO para pagar ese precio. Luego esas UTXO usadas en el pago no podrásn reutilizarse para más pagos. Si la UTXO usada para el pago de 0.5 Bitcoin fuera de 0,8Bitcoin, se realizarían dos pagos con esa UTXO, uno de 0,5Bitcoin para la compra y otro de 0,3Bitcoin a sí mismo, resultando en otro UTXO de 0,3Bitcoin que podrá ser usado para futuros pagos. Esto se hace asi, de manera que no existe un monto total centralizado sino cantidades descentralizadas.

##### DIRECCIONES BITCOIN
Las direcciones de Bitcoin de generan aplicando el algoritmo de hashing SHA-256 a la clave pública de un usuario. Esto aporta una capa extra de seguridad. No obstante, la privacidad es muy baja, puesto que aunque no se sepa la identidad de la persona, su dirección es pública y sus movimientos son fácilmente rastreables. Para mejorar esto una organización puede tener múltiples departamentos que usen claves privadas diferentes de manera que cada uno de ellos solo tenga acceso a su propia clave privada pero no a las demás. Luego se crea una clave privada maestra que dará acceso a todas las claves privadas de la organización. Esta clave maestra se debe guardar de manera muy segura

##### ETHEREUM
Ethereum utiliza solisity mientras que Bitcoin emplea Bitcoin script. La dferencia entre los dos es que solidity es turing completo mientras que Bitcoin script no lo es debido a que carece bucles.

Debido a que los smart contracts se guardan en los bloques, por lo que una vez desplegados no se pueden modificar.

ETHEREUM VIRTUAL MACHINE


##### BLOCKCHAIN ORACLES
Los oráculos de blockchain son entidades que conectan blockchains con sistemas externos, permitiendo así la ejecución de contratos inteligentes basados ​​en inputs y outputs del mundo real. Cnectan cadenas de bloques que de otro modo estarían aisladas de datos y computación fuera de la cadena, y permiten la interoperabilidad entre cadenas de bloques.

Los smart contracts no pueden interactuar inherentemente con datos y sistemas existentes fuera de su entorno blockchain nativo. Los recursos externos a la cadena de bloques se consideran "offchain", mientras que los datos ya almacenados en la cadena de bloques se consideran "onchain". Al estar deliberadamente aisladas de los sistemas externos, las cadenas de bloques obtienen sus propiedades más valiosas, como un fuerte consenso sobre la validez de las transacciones de los usuarios, la prevención de ataques de doble gasto y la mitigación del tiempo de inactividad de la red. Interoperar de forma segura con sistemas fuera de la cadena de bloques desde una cadena de bloques requiere una pieza adicional de infraestructura conocida como "oráculo" para unir los dos entornos.

Los oráculos criptográficos amplían los tipos de acuerdos digitales que las cadenas de bloques pueden admitir al ofrecer una puerta de entrada universal a los recursos fuera de la cadena y al mismo tiempo mantener las ventajas de seguridad de las cadenas de bloques.

Si los mecanismos de Oracle de blockchain utilizaran una entidad centralizada para entregar datos a un contrato inteligente introducirian un único punto de fallo, frustrando todo el propósito de una aplicación de blockchain descentralizada. Además, debido a que las transacciones de blockchain son automatizadas e inmutables, el resultado de un contrato inteligente basado en datos defectuosos no se puede revertir, lo que significa que los fondos de los usuarios pueden perderse permanentemente. Por lo tanto, los oráculos centralizados no son una buena solución para las aplicaciones de contratos inteligentes.

Las redes de Oracle descentralizadas (DON) permiten la creación de contratos inteligentes híbridos, donde el código dentro de la cadena y la infraestructura fuera de la cadena se combinan para respaldar aplicaciones descentralizadas (dApps) que reaccionan a eventos del mundo real e interoperan con sistemas tradicionales.

Una red Oracle descentralizada, o DON para abreviar, combina múltiples operadores de nodos Oracle independientes y múltiples fuentes de datos fiables para establecer una descentralización de un extremo a otro. Los DON permiten la creación de contratos inteligentes híbridos, donde el código onchain y la infraestructura fuera de la cadena se combinan para respaldar aplicaciones descentralizadas avanzadas (dApps) que reaccionan a eventos del mundo real e interoperan con sistemas tradicionales.

Los oráculos de cadenas cruzadas pueden leer y escribir información entre diferentes cadenas de bloques. Los oráculos entre cadenas permiten la interoperabilidad para mover datos y activos entre cadenas de bloques, como usar datos en una cadena de bloques para desencadenar una acción en otra o unir activos entre cadenas para que puedan usarse fuera de la cadena de bloques nativa en la que fueron emitidos.

Los contratos inteligentes híbridos se diferencian de los contratos inteligentes tradicionales en que funcionan con dos redes descentralizadas: una es Blockchain y la otra es Decentralized Oracle Network (DON).

###### PROTOCOLO CHAINLINK
El protocolo Chainlink CCIP es una capa de abstracción que facilita la interoperabilidad entre diferentes cadenas de bloques. Esto permite a los desarrolladores crear aplicaciones que pueden acceder a datos y activos de diferentes cadenas de bloques. 

Establece estándares comunes para el intercambio de información entre cadenas de bloqueS que garantizan que las cadenas puedan comunicarse de manera efectiva y comprender los datos compartidos, facilitando la integración y colaboración. Además, permite la transferencia de datos en tiempo real entre diferentes cadenas de bloques. Esto es especialmente importante en aplicaciones que requieren información actualizada y precisa. Garantiza que los datos utilizados en el contrato sean siempre los más actualizados. CCIP permite la ejecución de contratos inteligentes en múltiples cadenas de bloques ampliando las posibilidades de los contratos.
