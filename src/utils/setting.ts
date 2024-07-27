import { invoke } from '@tauri-apps/api';


/**
 * 获取应用安装位置
 */
export async function getAppInstallPath(): Promise<string> {
  return await invoke('get_installation_path');
}