// This file works with the Svelte store.
import './jsdoc.js';
import { writable } from 'svelte/store';

let componentCount = 0;
/** @type {ComponentsData} */
const componentsData = {
  timer_data: [],
  last_reset: ''
};

// TODO: por ahí es mejor llamar a esto globalAppState o algo así

// TODO: ver si podés separar la lógica del subscribe y el set para solo importar
// lo que tengas que usar (y prevenir errores)
export const appIsClosing = writable(false);

export const finishedCheckout = writable(false);

// OBS: js es de hilo único por lo que pareciera no haber necesidad de hacer atómicas las operaciones.

export function checkInComponent() {
  componentCount++;
  console.log("Sume uno:" + componentCount);
}

// TODO: hay que checkear el tipo de data que llega para insertarlo correctamente en componentsData
export function checkOutComponent(data) {
  // componentData.push(data);
  componentCount--;
  console.log("Sume uno:" + componentCount);
  if (componentCount === 0) {
    finishedCheckout.set(true);
  }
}

// TODO: necesito un contador de componentes (guarda con la concurrencia) para saber cuantos componentes hay.
// Cuando llega a 0 es porque los componentes ya hicieron el check out (guardaron su estado en el array de estados).