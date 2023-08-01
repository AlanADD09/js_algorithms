/*
El algoritmo Merge Sort es un algoritmo de ordenación eficiente basado en el 
enfoque "divide y conquistar". Divide la lista no ordenada en sublistas más pequeñas, 
las ordena de manera recursiva y luego combina las sublistas ordenadas para obtener 
una lista ordenada completa.

El algoritmo Merge Sort sigue estos pasos:

1- Dividir: Divide la lista no ordenada en dos sublistas de aproximadamente igual tamaño.
2- Conquistar: Ordena cada sublista recursivamente aplicando Merge Sort.
3- Combinar: Combina las sublistas ordenadas para formar una lista ordenada completa.
El proceso de combinación (merge) es la parte clave del algoritmo, donde se toman dos sublistas ordenadas y se mezclan en una lista ordenada.
*/

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // La lista ya está ordenada si tiene 0 o 1 elemento
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Agregar los elementos restantes de ambas sublistas
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Ejemplo de uso:
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(unsortedArray);
  console.log(sortedArray); // Salida: [3, 9, 10, 27, 38, 43, 82]