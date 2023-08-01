/*
El algoritmo de búsqueda lineal es un enfoque simple y directo para encontrar un 
elemento específico en una lista (como un arreglo). Comienza desde el principio de 
la lista y recorre cada elemento uno por uno, comparándolo con el valor objetivo 
hasta que lo encuentra o llega al final de la lista.
*/

function busquedaLineal(arr, objetivo) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === objetivo) {
        return i; // Se encontró el elemento, devuelve su posición
      }
    }
    return -1; // No se encontró el elemento en la lista, devuelve -1
  }
  
  // Ejemplo de uso:
  const lista = [5, 10, 15, 20, 25];
  const objetivo = 15;
  const posicion = busquedaLineal(lista, objetivo);
  
  if (posicion !== -1) {
    console.log(`El elemento ${objetivo} se encuentra en la posición ${posicion}.`);
  } else {
    console.log(`El elemento ${objetivo} no se encontró en la lista.`);
  }