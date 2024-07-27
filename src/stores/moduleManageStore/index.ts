import { ModuleType } from '@/typesAndStatics/moduleManage';
import { create } from 'zustand';


interface ModuleManageStore {
    sortedModules: ModuleType[];
    // 将传入的modules 置顶
    topToModules: (modules: ModuleType[]) => void;
}

export const useModuleManageStore = create<ModuleManageStore>(set => ({
    sortedModules: [ModuleType.Copy, ModuleType.Todo],
    topToModules: (modules: ModuleType[]) => {
        set({ sortedModules: modules });
    },
}))