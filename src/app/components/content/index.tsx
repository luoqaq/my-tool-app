'use client'

import React, { useEffect, useMemo } from'react';

import { useModuleManageStore } from '@/stores/moduleManageStore';
import ModuleBox from './moduleBox';
import Todo from '@/app/todo/components/todo';
import { ModuleType, ModuleItem } from '@/typesAndStatics/moduleManage';
import { useCopyStore } from '@/stores/copyStore';
import Copy from '@/app/copy/components/copy';

export default function Content() {

    const {selectedModule} = useModuleManageStore(state => state);
    const { clearCopyCatch } = useCopyStore(state => state);

    const ModuleMap: Record<ModuleType, ModuleItem> = {
        [ModuleType.Copy]: {
            icon: '',
            name: '剪切板',
            component: <Copy/>,
            operates: [
                {
                    name: '清空剪切板',
                    onClick: () => {
                        clearCopyCatch();
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

    const currentModule = useMemo(() => ModuleMap[selectedModule], [selectedModule]);
    

    useEffect(() => {
        console.log('Content Render');
    }, []);

    return (
        <article className='w-full p-4 pt-0' style={{height: 'calc(100vh - 60px)'}}>
            <ModuleBox module={currentModule} className='w-full h-full' />
        </article>
    )

}