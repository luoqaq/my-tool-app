import { invoke } from '@tauri-apps/api';


/**
 * 复制到粘贴板
 * @param text 内容
 */
export async function copyToClipboard(text: string) {
  await invoke('set_clipboard_content', { content: text});

}

/**
 * 获取粘贴板内容
 * @returns 文本内容
 */
export async function getClipboardContent(): Promise<string> {
  return await invoke('get_clipboard_content');
}