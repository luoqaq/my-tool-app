// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod utils;

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![
      utils::copy::get_clipboard_content,
      utils::copy::set_clipboard_content,
      utils::setting::get_installation_path
    ])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
