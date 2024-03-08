/// For now I'm checking if the files exists when beginning the program (creating them if necessary).
/// The rest of the functions assume the files exist and will panic otherwise

use std::fs;
use std::io::ErrorKind;
use std::path::Path;

/** Checks if temporary files exist. If not it creates them */
pub fn check_temp_files(path: &str) {
    let temp_path = Path::new(path);
    try_create_dir(&temp_path);
    try_create_file(&temp_path.join("components_data.json"));
    try_create_file(&temp_path.join("timer_hist.csv"));

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


