use clipboard::{ClipboardContext, ClipboardProvider};

#[tauri::command]
pub fn get_clipboard_content() -> String {
    let mut ctx: ClipboardContext = ClipboardProvider::new().unwrap();
    ctx.get_contents().unwrap_or_else(|_| "无法获取剪切板内容".to_string())
}

#[tauri::command]
pub fn set_clipboard_content(content: String) {
    let mut ctx: ClipboardContext = ClipboardProvider::new().unwrap();
    ctx.set_contents(content).unwrap();
}