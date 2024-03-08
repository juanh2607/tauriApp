/// File that contains the API that the front will access to request data

use crate::file_ops;

#[tauri::command]
pub fn get_component_data() -> String {
  file_ops::check_temp_files("../temp");
  println!("Front connected!");
  // file_ops::get_component_data();
  String::from("El back responde al front con este mensaje")
}