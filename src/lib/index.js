// place files you want to import through the `$lib` alias in this folder.
import { appWindow } from '@tauri-apps/api/window';

if (document.readyState === 'complete') {
  appWindow.show();
} else { // Document still loading
  document.addEventListener('DOMContentLoaded', () => {
    appWindow.show();
  });
}

// TODO: eliminar esto
const testData = {};

// TODO: acá es donde vas a cargar todos los datos que te lleguen del back y vas
// a crear los componentes (ver como funciona eso con svelte)
// TODO: crear un timerComponent.svelte