---
title: 'blockchain'
id : 2
description: 'Explicación de AWS Command Line Interface'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---

##### PROTOCOLOS DE CONSENSO
Debido a que la propagación a travśe de la red tarda un timpo en producirse, es posible que dos nodos hayan minado un bloque a la cadena de bloques. En este caso se acepta como bloque a añadir  aquel que se haya difundido a más nodos ya que es esta cadena que tiene más potencia de cálculo. El otro bloque, que se había minado de manera correcta se convierte en un bloque huérfano. Los mineros no reciben recompensa por los bloques huérfanos. Estos bloques, a pesar de ser considerados como válidos, no se añaden a la blockchain principal sino que se almacenan en un sitio llamado pool de bloques huérfanos

###### PROOF OF WORK
La prueba de trabajo es una forma de prueba criptográfica en la que una parte llamada probador demuestra a otras llamadas verificadores que se ha invertido una cierta cantidad de un esfuerzo computacional específico.

El propósito de los algoritmos de prueba de trabajo no es probar que se llevó a cabo cierto trabajo o que se resolvió un rompecabezas computacional, sino disuadir la manipulación de datos estableciendo grandes requisitos de control de hardware y energía para poder hacerlo. 

La difucultad se aumenta o disminuye según sea necesario para llevar el tiempo medio en el que los bloques son añadidos a la cadena al tiempo de minado establecido. Esto permite que la adición de bloques se lleve a cabo de manera periódica y controlada

El hash de un bloque depende del número de bloque, nonce, datos y hash previo

Debido a que los bloques se añaden a un ritmo más lento (10 minutos en el caso de bitcoin), las transacciones que se efectuan mientras tanto se almacenan en un lugar llamado mempool. Puede darse que un nodo utilice todos los nonce disponibles antes de que pase un segundo y cambie el timestamp y no haya dado con un hash válido. En este caso lo que se hace es cambiar las transacciones introducidas en el bloque. Debido a que no todas las transacciones presentes en el mempool caben en el siguiente bloque, son los mineros los que eligen cúales introducir. En el caso de Bitcoin, el tamaño de los bloques son 2MB y no es necesario que estén llenos para minarlos.

ATAQUE DEL 51%
Debido a que los consensos en blockchain funcionan según la mayoría, puede darse el caso de que si alguien controla más de la mitad de la potencia de cálculo de una red, pueda modificar la cadena a su antojo. Por ejemplo, podría desconectar sus nodos de la red, minar bloques de manera offline y luego volver a conectarse a la red. Cuando se vuelve a conectar, habrá dos cadenas de bloques diferentes y blockchain siempre favorece a la más larga. Como el atacante cuenta con más de la mitad de la potencia de cálculo, podrá haber añadido más bloques en el mismo periodo de tiempo, siendo su cadena la más larga y prevaleciendo sobre la verdadera.

PROOF OF STAKE
A los nodos que trabajan en PoS se les llama validadores. La decisión sobre qué nodo ha de validar un bloque se hace de forma aleatoria, pero dando mayor probabilidad a quienes cumplan una serie de criterios. Entre estos criterios podemos mencionar la cantidad de moneda reservada y el tiempo de participación en la red, pero pueden definirse otros. Además de un menor consume energético,  tiene otras ventajas como dmocratización de la minería ya que con proof of work el minado se centraliza en unos pocos mineros que son los más potentes, también resta importancia al ataque del 51%.

LIBRO MAYOR INMUTABLE
El ledger o libro mayor, es el registro de todas y cada una de las operaciones y transacciones que se realizan dentro de una blockchain. Sirve para garantizar la transparencia, seguridad y privacidad de la tecnología blockchain y las criptomonedas.
Pues bien, en el mundo de las criptomonedas un ledger permite hacer exactamente lo mismo. Gracias a este registro, cada transacción u operación de la criptomoneda queda grabada. Esto permite que cada una de estas operaciones pueda ser revisada o auditada de forma pública. El ledger es el resultado de reunir y organizar la información de cada bloque que forma parte de la blockchain de dicha criptomoneda.

ÁRBOL DE MERKLE

CLAVE DE CURVA ELÍPTICA
y² = x³ + ax + b


TRANSACCIONES Y UTXO
Las UTXOs se crean durante las transacciones y sirven como un medio para rastrear la propiedad y prevenir el doble gasto, desempeñando un papel crucial en el funcionamiento, la seguridad y la transparencia de la red Bitcoin.
Una UTXO es una unidad de moneda de bitcoin que no se ha gastado en una transacción anterior. Son el modelo de contabilidad subyacente de Bitcoin y se utilizan para rastrear la propiedad de los bitcoins.
Cada transacción de Bitcoin tiene dos partes: input y output. El input es una o más UTXO que se están gastando (dinero que está en tu monedero y que estás enviando a otra dirección o monedero). El output es una o más nuevas UTXOs que se están creando (dinero que está llegando a una nueva dirección o monedero).

En bitcoin, las transacción viven incluso después de ser realizadas. A la hora de realizar un pago, no se sustrae la cantidad de un monto que un usuario tiene en su cuenta como en un banco tradicional. Cuando un usuario recibe pagos de otros usuarios, estos no se acumulan en una sola cifra que refleja la cantidad total de bitcoin que posee. Estas transacciones a su favor se conocen como UTXO. Si este usuario quiere hacer una compra de por ejemplo 0,5Bitcoin, podrá usar una más de estos UTXO para pagar ese precio. Luego esas UTXO usadas en el pago no podrásn reutilizarse para más pagos. Si la UTXO usada para el pago de 0.5 Bitcoin fuera de 0,8Bitcoin, se realizarían dos pagos con esa UTXO, uno de 0,5Bitcoin para la compra y otro de 0,3Bitcoin a sí mismo, resultando en otro UTXO de 0,3Bitcoin que podrá ser usado para futuros pagos. Esto se hace asi, de manera que no existe un monto total centralizado sino cantidades descentralizadas.

DIRECCIONES BITCOIN
Las direcciones de Bitcoin de generan aplicando el algoritmo de hashing SHA-256 a la clave pública de un usuario. Esto aporta una capa extra de seguridad. No obstante, la privacidad es muy baja, puesto que aunque no se sepa la identidad de la persona, su dirección es pública y sus movimientos son fácilmente rastreables. Para mejorar esto una organización puede tener múltiples departamentos que usen claves privadas diferentes de manera que cada uno de ellos solo tenga acceso a su propia clave privada pero no a las demás. Luego se crea una clave privada maestra que dará acceso a todas las claves privadas de la organización. Esta clave maestra se debe guardar de manera muy segura

ETHEREUM
Ethereum utiliza solisity mientras que Bitcoin emplea Bitcoin script. La dferencia entre los dos es que solidity es turing completo mientras que Bitcoin script no lo es debido a que carece bucles.

Debido a que los smart contracts se guardan en los bloques, por lo que una vez desplegados no se pueden modificar.

ETHEREUM VIRTUAL MACHINE


