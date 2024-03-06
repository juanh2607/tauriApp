// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod file_ops;

fn main() {
  file_ops::check_temp_files("../temp");

  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

}
