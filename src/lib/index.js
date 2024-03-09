// place files you want to import through the `$lib` alias in this folder.
import '../lib/jsdoc';

// TODO: agregar pantalla de carga.
import { invoke } from '@tauri-apps/api/tauri';
import { appWindow } from '@tauri-apps/api/window';
import { appIsClosing, finishedCheckout } from './appGlobalState.js';

appWindow.onCloseRequested(async (event) => {
  event.preventDefault();

  // TODO: si no hay ningún componente creado tenés que cerrar de una
  appIsClosing.set(true); // Sends signal to suscribed components
});

finishedCheckout.subscribe((value) => {
  if (value === true) {
    console.log("Todos los componentes hicieron checkout! Cerrando...")
    //await invoke('store_data', { data });
    appWindow.close();
  }
});

/** @returns {ComponentsData} */
export function get_component_data() {
  return invoke('get_component_data');
}