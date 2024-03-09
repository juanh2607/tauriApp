// place files you want to import through the `$lib` alias in this folder.
import '../lib/jsdoc';

// TODO: agregar pantalla de carga.
import { invoke } from '@tauri-apps/api/tauri';
import { appWindow } from '@tauri-apps/api/window';
import { 
  appIsClosing, finishedCheckout, // Events
  getComponentCount, getComponentData // Data
} from './appGlobalState.js';

appWindow.onCloseRequested(async (event) => {
  event.preventDefault();

  if (getComponentCount() === 0) { // No component was created or still exists
    appWindow.close();
  }
  appIsClosing.set(true); // Sends signal to suscribed components so that they checkout
});

finishedCheckout.subscribe(async (value) => {
  if (value === true) {
    const data = getComponentData(); 
    
    await invoke('store_data', { data });
    appWindow.close();
  }
});

/** @returns {ComponentsData} */
export function get_component_data() {
  return invoke('get_component_data');
}