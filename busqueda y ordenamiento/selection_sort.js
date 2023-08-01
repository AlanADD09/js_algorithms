/*
El algoritmo de selección (Selection Sort en inglés) es un algoritmo de ordenamiento simple y básico.
Funciona seleccionando repetidamente el elemento más pequeño (o más grande, dependiendo del orden 
    deseado) de la lista no ordenada y moviéndolo al principio de la lista ordenada. De esta manera, 
    el algoritmo construye gradualmente la lista ordenada al seleccionar los elementos uno por uno.
*/

function selectionSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      // Encontrar el índice del elemento más pequeño en la lista no ordenada
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Intercambiar el elemento más pequeño con el primer elemento de la lista no ordenada
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    return arr;
  }
  
  // Ejemplo de uso:
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = selectionSort(unsortedArray);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
  