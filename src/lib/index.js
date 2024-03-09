// place files you want to import through the `$lib` alias in this folder.
import '../lib/jsdoc';

// TODO: agregar pantalla de carga.
import { invoke } from '@tauri-apps/api/tauri';
import { appWindow } from '@tauri-apps/api/window';

appWindow.onCloseRequested(async (event) => {
  event.preventDefault();

  let timerData = {
    title: 'Mi Temporizador',
    starting_time: 3600,
    remaining_time: 1800,
    paused: false,
    left_offset: 0,
    top_offset: 0
  };

  let componentData = {
    timer_data: [timerData],
    last_reset: '2024-03-08T17:16:10Z'
  };
  
  await invoke('store_data', {data: componentData});
  appWindow.close();
});

/** @returns {ComponentsData} */
export function get_component_data() {
  return invoke('get_component_data');
}