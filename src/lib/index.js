// place files you want to import through the `$lib` alias in this folder.
import '../lib/jsdoc';

// TODO: agregar pantalla de carga.
import { invoke } from '@tauri-apps/api/tauri';

/** @returns {ComponentsData} */
export function get_component_data() {
  return invoke("get_component_data");
}