// place files you want to import through the `$lib` alias in this folder.

// TODO: acá es donde vas a cargar todos los datos que te lleguen del back y vas
// a crear los componentes (ver como funciona eso con svelte)
// TODO: agregar pantalla de carga.
import { invoke } from "@tauri-apps/api/tauri";

const result = await invoke("get_component_data");
console.log(result);