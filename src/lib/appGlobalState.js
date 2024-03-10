// This file works with Svelte store to manage signals when closing

import './jsdoc.js';
import { writable } from 'svelte/store';

// TODO: contador global para usar de id. Solo se puede sumar. Que lo retorne el checkIn

let idCounter = -1; // Used to generate the id for the components
let componentCount = 0;

/** @type {ComponentsData} */
const componentsData = {
  timer_data: [],
  last_reset: ''
};

/** @returns {number} copy of componentCount */
export function getComponentCount() {
  return componentCount;
}

/** @returns {ComponentsData} - A copy of componentsData */
export function getComponentData() {
  // "Hack" to return a deep copy
  return JSON.parse(JSON.stringify(componentsData));
}


// TODO: ver si podés separar la lógica del subscribe y el set para solo importar
// lo que tengas que usar (y prevenir errores)
export const appIsClosing = writable(false);

export const finishedCheckout = writable(false);

/** Increase the global component counter. Needed for a correct closing of the app */
export function checkInComponent() {
  // OBS: js es de hilo único por lo que pareciera no haber necesidad de hacer atómicas las operaciones.
  componentCount++;
}

/**
 * @typedef {Object} SingleComponentData - Object that stores the data of a specific component
 * @property {string} type - The name of the component
 * @property {Object} value - The actual content of the component 
 */

/** 
 * Call when app is closing or when destroying a component. 
 * OBS: if the component is being destroyed, don't pass any data.
 * @param {SingleComponentData} data 
 */
export function checkOutComponent(data = null) {
  if (data) {
    if (data.type === 'timer') {
      componentsData.timer_data.push(data.value);
    } else {
      throw new Error('Unkown type at checkOutComponent. Received: ' + data.type);
    }
  }

  componentCount--;
  
  if (componentCount === 0) {
    finishedCheckout.set(true);
  }
}

/** @returns {number} */
export function getComponentId() {
  return ++idCounter;
}
