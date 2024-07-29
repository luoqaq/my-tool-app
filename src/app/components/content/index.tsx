'use client'

import React, { useEffect, useMemo } from'react';

import { ModuleMap, useModuleManageStore } from '@/stores/moduleManageStore';
import ModuleBox from './moduleBox';

export default function Content() {
    const {selectedModule} = useModuleManageStore(state => state);

    const firtModule = useMemo(() => ModuleMap[selectedModule], [selectedModule]);

    useEffect(() => {
        console.log('Content Render');
    }, []);

    return (
        <article className='w-full p-4 pt-0' style={{height: 'calc(100vh - 60px)'}}>
            <ModuleBox module={firtModule} className='w-full h-full' />
        </article>
    )

}