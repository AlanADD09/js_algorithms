/*
Heap Sort es un algoritmo de ordenamiento eficiente que se basa en la estructura de datos 
llamada "heap" (montículo). Es un algoritmo de ordenamiento in-place, lo que significa 
que no requiere memoria adicional para realizar la ordenación. La idea principal detrás 
de Heap Sort es convertir el conjunto de elementos en un árbol binario completo (heap), 
donde el elemento en la raíz siempre será el máximo (en el caso de un heap max) o el 
mínimo (en el caso de un heap min). Luego, se intercambian el primer y el último elemento, 
se reducen el tamaño del heap y se restaura la propiedad de heap. 
Este proceso se repite hasta que el heap esté completamente ordenado.
*/

// Función para realizar el Heap Sort
function heapSort(arr) {
    const n = arr.length;
  
    // Construir un heap (max heap) a partir del arreglo dado
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extraer elementos uno por uno del heap
    for (let i = n - 1; i > 0; i--) {
      // Mover el elemento actual (raíz) al final del arreglo
      swap(arr, 0, i);
  
      // Llamar a heapify en el heap reducido
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  // Función para convertir un subárbol en un heap (heapify)
  function heapify(arr, n, i) {
    let largest = i; // Inicializar el nodo más grande como la raíz
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    // Si el hijo izquierdo es más grande que la raíz
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    // Si el hijo derecho es más grande que la raíz
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    // Si el nodo más grande no es la raíz
    if (largest !== i) {
      // Intercambiar el nodo más grande con la raíz
      swap(arr, i, largest);
  
      // Llamar recursivamente a heapify en el subárbol afectado
      heapify(arr, n, largest);
    }
  }
  
  // Función para intercambiar dos elementos en un arreglo
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Ejemplo de uso
  const array = [12, 11, 13, 5, 6, 7];
  const sortedArray = heapSort(array);
  console.log(sortedArray); // Salida: [5, 6, 7, 11, 12, 13]
  