import { create } from 'zustand';

interface SettingStore {

}

/**
 * 系统设置Store
 */
export const useSettingStore = create<SettingStore>((set) => ({
    

    init: () => {
        set({});
    },
}));