'use client'

import React, { useEffect, useMemo } from'react';
import Copy from '@/app/copy/components/copy';
import Todo from '@/app/todo/components/todo';

import { ModuleItem, ModuleType } from '@/typesAndStatics/moduleManage';
import { useModuleManageStore } from '@/stores/moduleManageStore';
import ModuleBox from './moduleBox';

const ModuleMap: Record<ModuleType, ModuleItem> = {
    [ModuleType.Copy]: {
        icon: '',
        name: '复制',
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

export default function Content() {
    const sortedModules = useModuleManageStore(state => state.sortedModules);

    const firtModule = useMemo(() => ModuleMap[sortedModules[0]], [sortedModules]);

    useEffect(() => {
        console.log('Content Render');
    }, []);

    return (
        <article className='w-full p-4 pt-0' style={{height: 'calc(100vh - 60px)'}}>
            <ModuleBox module={firtModule} className='w-1/2 h-full' />
        </article>
    )

}