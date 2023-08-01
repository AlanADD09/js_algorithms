/*
El algoritmo Quick Sort es un algoritmo de ordenación eficiente que sigue el 
enfoque "divide y vencerás". Fue desarrollado por Tony Hoare en 1960. El algoritmo toma un 
enfoque recursivo para dividir la lista no ordenada en subconjuntos más pequeños, y luego 
los ordena para obtener la lista completa ordenada.

1- Selecciona un elemento de la lista original como "pivote".
2- Reorganiza la lista de manera que todos los elementos menores que el pivote estén a su 
izquierda y todos los elementos mayores estén a su derecha.
3- Repite el proceso para las sublistas generadas (izquierda y derecha del pivote) hasta 
que todas las sublistas tengan un solo elemento.
4- Concatena las sublistas ordenadas para obtener la lista completa ordenada.
El pivote puede seleccionarse de diversas maneras, y la elección afecta el rendimiento del algoritmo en ciertos casos. En el ejemplo de código que sigue, se elegirá el último elemento como pivote.
*/

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Ejemplo de uso:
  const unsortedArray = [10, 5, 2, 7, 3, 9, 6, 1, 8, 4];
  const sortedArray = quickSort(unsortedArray);
  console.log(sortedArray);
  