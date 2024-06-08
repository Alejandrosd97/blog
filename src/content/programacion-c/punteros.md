---
title: 'Punteros en C'
id: 3
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jul 08 2022'
heroImage: '/binary.svg'
---

En los lenguajes de programación se define como dirección indirecta (indirection en inglés) a la posibilidad de referenciar algo usando un nombre, referencia o contenedor en lugar del valor en sí mismo. El uso de variables para almacenar valores es una forma de dirección indirecta. La forma más común es la manipulación de un valor mediante su dirección en memoria. Los punteros ofrecen una forma indirecta de acceder al valor de un data item en particular, o lo que es lo mismo, son variables cuyo valor es una dirección de memoria de otra localización representada en formato hexadecimal que contiene un valor. Cada puntero se asocia con un tipo de variable y solo puede ser usado para apuntar a variables de ese tipo, por ejemplo int o float. La razón para usar punteros es que acceder a la información solo por medio de las variables es muy limitante, mientras que con punteros es posible acceder a cualquier dirección de la memoria y realizar operaciones aritméticas con ellos. Otra ventaja de los punteros es que permiten referir al mismo espacio de memoria desde múltiples localizaciones, es decir, se pueden hacer cambios en la memoria en un lugar y el cambio se puede ver desde otros lugares, usando información global pero encapsulándola dentro de funciones. También hace posible ahorrar espacio de memoria al poder compartir componentes en diferentes estructuras de datos.

Los punteros se definen añadiendo el operador * después del tipo de variable seguido por nombre, por ejemplo int * numero. A la hora de definir un puntero no es necesario un espacio entre el asterisco y el nombre del puntero, pero por convención, se usa el espacio en la declaración y no se usa a la hora de dereferenciar una variable, que significa acceder a su valor. A pesar de que se representa de manera interna como un íntegro sin signo, no se debería considerar como tal, debido a que hay operaciones que se pueden llevar a cabo con íntegros pero no con punteros, como la multiplicación. Los punteros siempre se deben inicializar cuando se declaran, aunque su valor sea NULL, ya que no hacerlo puede ser peligroso. Para asignarle la dirección de un valor definido en una variable se utiliza el símbolo &, por ejemplo: int * p1 = &variable. Para que esto funcione, la declaración de la variable debe preceder a la del puntero. También por convención, los nombres de los punteros empiezan por p, para que sean más fáciles de reconocer.

Para acceder al valor gusrdado en la dirección almacenada en el puntero se utiliza el operador *, también conocido en este caso como operador desreferenciador, ya que en caso de no usarlo, simplemente devolverá la dirección almacenada en formato hexadecimal, pero no el valor en sí. El operador * solo se usa al declarar el puntero, para inicializarlo después no es necesario. Un puntero tiene tres piezas de información importantes, su valor, que es la dirección a la que apunta, su propia dirección, que es donde se encuentra guardado en la memoria, y por último, el valor almacenado en la dirección a la que apunta. Si el tipo que devuelve la función, es diferente al especificado en el encabezado de la función, por ejemplo int y float, el compilador insertará una conversión de un tipo al otro de manera automática. 

##### OPERACIONES CON PUNTEROS
El segundo parámetro que recibe la función scanf() es un puntero, por lo que se le debe indicar una dirección (usando &). Una cosa muy a tener en cuanta es no dereferenciar un puntero que no ha sido inicalizado. Debido a que la dirección de un puntero sin inicializar es NULL, si se pide guardar un valor en la dirección a la que apunta el puntero, debido a que ésta es NULL, el valor se guardará en cualquier sitio al azar. Esto puede no causar ningún problema pero podría sobreescribir información importante y hacer fallar el programa. Al definir el puntero sin inicializarlo, se crea la dirección en memoria para el puntero, pero esta dirección no apunta a ningún sitio, por tanto no se puede deferenciar.

Se puede usar la palabra clave const para indicar que el valor al cual apunta el puntero no se pueda cambiar. El valor en sí se puede cambiar, ya que no es una constante, simplemente no se podrá usar el operador * para cambiar el valor al que apunta el puntero. Además, el puntero tampoco es una constante, por lo que también es posible cambiar la dirección que contiene. Para asegurar que la dirección almacenada en el puntero es constante, se intercambian las palabras clave, primero se coloca el tipo de dato y luego *const seguido del nombre. Por ejemplo int *const pnumero = &numero. En este caso si se podrá deferenciar el valor contenido en la dirección y cambiarlo. 
Los puntero con el tipo void pueden contener direccioens con cualquier tipo de dato, para ofrecer mayor flexibilidad. No obstante se deber hacer cast a algún tipo cuando se dereferencia.

Una práctica común es almacenar el primer elemento de una array en un puntero, para ello se asigna  el valor del puntero al nombre del array. No es necesario usar el operador & porque el array en sí ya es un puntero.

Int numeros [20]
int *pvalores 
pvalores = numeros // pvalores = &numeros[0] las dos valdrían

 A partir de aquí se puede acceder a los siguientes elementos del array incrementando el puntero. Por ejemplo *(numeros + 1 ) podría servir para acceder al segundo elemento del array numeros. Debido a que es un puntero es necesario usar el operador * para obtener el valor referenciado. También se puede increntar o decrementar usando ++ o --.


##### VALOR VS REFERENCIA
Cuando se pasa información por valor a una función, se crea una copia de la varible que actúa como una variable local dentro de la función y los cambios sobre estos parámetros no se aplican sobre las variables que se pasan como argumentos. Las funciones también pueden recibir punteros como parámetro y devolver punteros. En este caso se pasan los argumentos por referencia y no por valor. Así, los cambios hechos sobre el puntero del parámetro si tendrán efecto sobre el puntero pasado como argumento. Si una función requiere un puntero como parámetro no es necesario definir un puntero, se puede pasar directamente la dirección de una variable usando el operador &.


