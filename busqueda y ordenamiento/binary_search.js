/*
La búsqueda binaria es un algoritmo de búsqueda eficiente utilizado para encontrar 
un elemento específico en una lista ordenada. La idea central es dividir repetidamente 
la lista por la mitad y comparar el elemento buscado con el elemento central de la lista. 
Si el elemento buscado es igual al elemento central, se devuelve su índice. Si el elemento 
buscado es menor que el elemento central, se busca en la mitad izquierda de la lista; 
de lo contrario, se busca en la mitad derecha. Este proceso continúa hasta encontrar el 
elemento deseado o hasta que la lista se reduzca a un solo elemento.
*/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = arr[mid];
  
      if (midValue === target) {
        return mid; // Elemento encontrado, devolver su índice
      } else if (midValue < target) {
        left = mid + 1; // Buscar en la mitad derecha de la lista
      } else {
        right = mid - 1; // Buscar en la mitad izquierda de la lista
      }
    }
  
    return -1; // El elemento no fue encontrado en la lista
  }
  
  // Ejemplo de uso:
  const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18];
  const targetElement = 12;
  const result = binarySearch(sortedArray, targetElement);
  console.log(result); // Salida: 5 (índice del elemento 12 en la lista)
  