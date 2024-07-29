'use client'

import Copy from '@/app/copy/components/copy';
import Todo from '@/app/todo/components/todo';
import { ModuleItem, ModuleType } from '@/typesAndStatics/moduleManage';
import { create } from 'zustand';


interface ModuleManageStore {
    // 当前选中的模块
    selectedModule: ModuleType;
    // 模块列表
    sortedModules: ModuleType[];
    // 将传入的modules 置顶
    topToModules: (modules: ModuleType[]) => void;
    // change选中的模块
    changeSelectedModule: (module: ModuleType) => void;
}

export const ModuleMap: Record<ModuleType, ModuleItem> = {
    [ModuleType.Copy]: {
        icon: '',
        name: '剪切板',
        component: <Copy/>,
        operates: [
            {
                name: '复制',
                onClick: () => {
                }
            }
        ]
    },
    [ModuleType.Todo]: {
        icon: '',
        name: 'Todo',
        component: <Todo/>
    },
}


export const useModuleManageStore = create<ModuleManageStore>(set => ({
    selectedModule: ModuleType.Copy,
    sortedModules: [ModuleType.Copy, ModuleType.Todo],
    topToModules: (modules: ModuleType[]) => {
        set({ sortedModules: modules });
    },
    changeSelectedModule: (module: ModuleType) => {
        set({ selectedModule: module });
    },
}))