/// For now I'm checking if the files exists when beginning the program (creating them if necessary).
/// The rest of the functions assume the files exist and will panic otherwise

use std::{fs, io::Read};
use std::io::ErrorKind;
use std::path::Path;

use serde::{Deserialize, Serialize};
use serde_json;

#[derive(Serialize, Deserialize, Debug)]
pub struct ComponentData {
    timer_data: Vec<TimerData>,
    last_reset: String
}

#[derive(Serialize, Deserialize, Debug)]
struct TimerData {
    title: String,
    starting_time: u32,
    remaining_time: u32,
    paused: bool,
    left_offset: i32,
    top_offset: i32
}

const COMPONENT_DATA_PATH: &str = "../temp/components_data.json"; 

/** Checks if temporary files exist. If not it creates them */
pub fn check_temp_files(path: &str) {
    let temp_path = Path::new(path);
    try_create_dir(&temp_path);
    try_create_file(&temp_path.join("components_data.json"));
    try_create_file(&temp_path.join("timer_hist.csv"));

}

// TODO: ver de usar BSON en lugar de JSON
pub fn get_component_data() -> ComponentData {
    let mut f = fs::File::open(COMPONENT_DATA_PATH)
        .expect("Could not open components_data.json");

    let mut buffer = String::new();
    f.read_to_string(& mut buffer).unwrap();

    let data: ComponentData = serde_json::from_str(&buffer[..]).unwrap();

    data
}

/** Panics if it can't create the directory */
fn try_create_dir(path: &Path) {
    match fs::create_dir(path) {
        Err(ref e) if e.kind() != ErrorKind::AlreadyExists => {
            panic!("Couldn't create directory {}: {}", path.display(), e)
        },
        _ => () // Created succesfully or already existed
    }
}

/** Panics if it can't create the file */
fn try_create_file(path: &Path) {
    if !path.exists() {
        fs::File::create(path).expect(
            &format!("Couldn't create file {}", path.display())
        );
    }
}


