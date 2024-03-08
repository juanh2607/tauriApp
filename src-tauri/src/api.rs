/// File that contains the API that the front will access to request data

use crate::file_ops;
use crate::file_ops::ComponentData;

#[tauri::command]
pub fn get_component_data() -> ComponentData {
  file_ops::check_temp_files("../temp");

  file_ops::get_component_data()
}