/*
El algoritmo Insertion Sort (Ordenamiento por Inserción) es un algoritmo simple de ordenación 
que funciona recorriendo un arreglo de elementos y "insertando" cada elemento en la posición 
correcta dentro de una sublista ordenada. En cada paso, se toma un elemento no ordenado y 
se lo compara con los elementos en la sublista ordenada, moviéndolos a la derecha hasta 
encontrar su posición correcta.

El proceso se repite hasta que todos los elementos han sido insertados en la sublista ordenada, 
lo que garantiza que todo el arreglo estará ordenado al final.
*/

function insertionSort(arr) {
    const n = arr.length;
  
    for (let i = 1; i < n; i++) {
      // Tomamos el elemento actual que queremos insertar en la sublista ordenada
      const currentElement = arr[i];
      let j = i - 1;
  
      // Movemos los elementos mayores que el elemento actual a la derecha
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insertamos el elemento actual en su posición correcta en la sublista ordenada
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Ejemplo de uso:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = insertionSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  