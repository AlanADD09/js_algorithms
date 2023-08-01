/*
El algoritmo Bubble Sort (Ordenamiento de Burbuja) es un algoritmo de clasificación 
sencillo que funciona comparando pares de elementos adyacentes y realizando intercambios 
si están en el orden incorrecto. El proceso se repite hasta que la lista esté 
completamente ordenada. El nombre "bubble" (burbuja) proviene de la forma en 
que los elementos más grandes "burbujean" hacia el final de la lista en cada iteración.
*/

function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
  
      // Realizar el recorrido para comparar y hacer intercambios
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Intercambiar los elementos si están en el orden incorrecto
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          swapped = true;
        }
      }
  
      // Si no se realizó ningún intercambio en esta pasada, el arreglo ya está ordenado, y podemos salir del bucle
      if (!swapped) break;
    }
  
    return arr;
  }
  
  // Ejemplo de uso:
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Arreglo original: " + array);
  console.log("Arreglo ordenado: " + bubbleSort(array));
  