use std::env;

// 获取应用安装位置
#[tauri::command]
pub fn get_installation_path() -> String {
    env::current_exe()
        .map(|path| path.to_string_lossy().to_string())
        .unwrap_or_else(|_| "无法获取路径".to_string())
}