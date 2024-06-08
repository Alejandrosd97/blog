---
title: 'Algoritmos javascript'
id: 2
description: 'Explicación Serverless computing'
pubDate: 'Jul 01 2023'
heroImage: '/blog-placeholder-1.jpg'
---


##### BIG O NOTATION
Se utiliza para describir el rendimiento complejidad de un algoritmo. Permite describir como el tiempo de ejecución de un algoritmo crece a medida que el tamaño de los inputs crecen. Generalmente describe el peor escenario, es decir, el máximo tiempo en la mayor cantidad de repeticiones que el algoritmo tiene que ejecutar.

##### OBJETOS Y ARRAYS
Los objetos funcionan muy bien cuando no se necesita orden y cuando se necesita acceso rápido a los datos, ya sea para leerlos, insertarlos o eliminarlos. Search hace referencia a si una determinada información está dentro del objeto, no hay manera de hacerlo rápido, se deben comprobar cada propiedad.

En el caso de los arrays, insertar y eliminar depende de si se hace al principio o al final. Si se hace al principio, se debe reajustar los índices de todos los elementos posteriores, y el tiempo necesario es proporcional a la cantidad de ítems en el array. El Big O notation es O(n) en este caso.

##### RECURSIÓN
Algunos ejemplos de funciones que usan recursión son json.parse() y json.stringify(). Cuando se necesita una variable que persista entre llamadas a la función recursiva, la solción pasa por encerrar la función recursiva dentro de otra función llamada helper, que contendrá la variable dentro de su scope y dentro de esa función helper es donde se ejecuta la función recursiva.

##### ALGORITMOS DE BÚSQUEDA
###### BÚSQUEDA LINEAL
En un array, la forma más rápida de buscar un valor, es recorrer todos los elementos del array hasta encontrarlo. Tiene un Big O(n). Javascript ya trae funcionalidad incorporada para ello, por ejemplo el método indexOf(), que devuelve la posición de un elemento en un array o -1 si no se encuentra presente. El método include() determina si un array incluye un determinado valor entre sus entradas, devolviendo verdadero o falso según corresponda. El método find() devuelve el primer elemento de un array que satisface la función de prueba proporcionada. Si ningún valor satisface la función de prueba, se devuelve undefined.

```
const a1 = [10, 15, 20, 25, 30]
const a2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
const a3 = [1,2,3,4,5]


function linearSearch(arr, val){
    let index = -1
    for ( const [i, v] of arr.entries()){
        if (val === v){
            index = i 
        }
    }
    return index
}

console.log(linearSearch(a1, 15))
```

<!-- ![código de busqueda lineal](/../imgs/linear-search.png) -->

###### BÚSQUEDA BINARIA
En vez de eliminar un posible valor en cada paso, se eliminan la mitad, pero con una condición necesaria, y esa es que los elementos deben estar en orden, ya sea alfabético, numérico, etc. Se empieza la búsqueda por el elemento situado en la mitad, y se compara con el valor de búsqueda. Si el elemento de búsqueda es mayor (suponiendo que el orden es ascendente), se pueden eliminar de la búsqueda todos los valores inferiores, de manera que solo quedan la mitad de los valores por buscar. En esos valores restantes se repite la misma operación y se elimina la mitad, por lo que quedará un cuarto de los valores que había al inicio. Este proceso se repite hasta dar con el elemento deseado. En es te caso la notación Big O es O(log n).

##### ALGORITMOS DE CLASIFICACIÓN
La clasificación o sorting es el proceso de reordenar los elementos de una colección siguiendo un cierto orden, por ejemplo de mayor a menor. Existen numerosos algoritmos para llevar a cabo esta tarea.

###### BUBBLE SORT
Es el algoritmo de clasificación más simple. Funciona intercambiando repetidamente los elementos adyacentes si están en el orden incorrecto. Recorre la colección de izquierda a derecha y compara los elementos adyacentes colocando el superior en el lado derecho. De esta manera, el elemento más grande se mueve primero hacia el la parte más a la derecha. Luego se continúa con este proceso para encontrar el segundo más grande y colocarlo en el segundo lugar más a la derecha, y así sucesivamente hasta que se ordenen los datos. Es necesario recorrer varias veces toda la colección hasta que no se necesiten más intercambios, lo cual significa que la lista está ordenada. Este algoritmo no es adecuado para grandes conjuntos de datos.

###### INSERTION SORT
Funciona insertando de forma iterativa cada elemento de una lista sin ordenar en su posición correcta en una parte ordenada de la lista. Es un algoritmo de clasificación estable, lo que significa que los elementos con valores iguales mantienen su orden relativo en la salida ordenada. Se divide la colección en dos grupos: los elementos ordenados y los que están sin clasificar. Luego, se toma el primer elemento del grupo sin clasificar y la se coloca en el lugar correcto del grupo ordenado. Se empieza por el segundo elemento, se compara con el primero y si es menor (suponiendo que el orden de clasificación sea ascendente), se intercambian, luego se pasa al tercer elemento, se compara con los dos anteriores y se coloca en la posicón adecuada, luego se pasa al cuarto, que se compara con los tres primeros y así sucesivamente hasta el final.


##### ÁRBOLES
Son estructuras de datos en las que los nodos establecen relaciones de padres a hijos. En los árboles las relaciones se dan de manera descendente de manera que cada nodo solo puede apuntar a sus hijos pero no a sus padres o hermanos. Además, para que una estructura sea consideradad como un árbol, solo puede tener un punto de entrada, llamado raíz. Los nodos sin hijos se conocen como hojas. El ejemplo más claro de esta estructura es el DOM del navegador.

###### ÁRBOL BINARIO
Es un tipo especial de árbol caracterizado poque cada nodo solo puede tener hasta dos nodos hijos. Se estructura de manera que cada nodo hijo con un valor menor al padre se situa a su izquierda, mientras que los nodos con valores superiores al del nodo padre se sitúan a la derecha


##### HEAP
El heap es muy similar al binary search tree con algunas consideraciones adicionales. En un MaxBinaryHeap los nodos padres son siempre mayores que los nodos hijos, es decir, root ostenta el mayor valor de todo el árbol. En un MinBinaryHeap, los nodos padres son siempre más pequeños que los hijos por lo que el valor de root es el menor de todos los nodos. A diferencia de un árbol binario normal, que podía crecer de manera desigual dependiendo de los valores de los nodos, los heaps son lo más compactos posible. Todos los hijos de todos los nodos están tan llenos como sea posible y se llenan empezando por la izquierda. Los binary heaps son usados para implantar colas de prioridad, muy usadas dentro de las estructuras de datos. Se pueden representar usando un array. Para calcular el nodo padre de otro nodo cuando un heap se representa mediante un array se usa la formula: (n -1) / 2, redondeando hacia abajo si el resultado no es entero.

A la hora de insertar un nuevo valor en el heap, se coloca en el siguiente espacio diponible, empezando por la izquierda. Suponiendo que sea un MaxBinaryHeap, los nodos hijos deben tener un valor menor al del nodo padre, por lo que se comparan ambos para ver si esta condición se cumple. En caso negativo, se intercambian los lugares, de forma que el nodo nuevo ocupa el lugar del padre y el padre se coloca en la posición del hijo. Puede ser que el nuevo nodo no solo sea mayor que el nodo padre sino que también sea mayor que el nodo abuelo, por lo que se compara también con éste, intercambiando su posición si la condición no se cumple. Se va comparando con el nodo padre de manera ascendente hasta que se cumpla la condición base del heap binário máximo, pudiendo llegar a convertirse el nuevo nodo en root si su valor es el mayor de todo el heap.

A la hora de eliminar un nodo se lleva cabo el proceso contrario. Cuando se elimina el root lo que se hace es sustituirlo por el último elemento de todo el heap, luego se compara este nuevo root con los dos hijos y root se intercambia con el mayor de los dos. El nuevo elemento, que ahora ocupa el lugar de uno de los hijos de root, se compara con sus dos nuevos hijos y se intercambia por el mayor de ellos. Es proceso continúa hasta que este elemento ocupe un lugar en el que sea mayor de sus hijos, el cual será su lugar correcto dentro del heap.


