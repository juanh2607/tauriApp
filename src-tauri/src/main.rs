// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// TODO: ver como "esconder" los imports en main
mod api;
mod file_ops;

fn main() {
  // TODO: ver como habilitar un autolaunch

  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      api::get_component_data
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
