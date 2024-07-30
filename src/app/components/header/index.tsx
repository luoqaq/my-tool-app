'use client'
import React from'react';
import { ModeToggle } from './theme';
import { ModuleMap, useModuleManageStore } from '@/stores/moduleManageStore';

export default function Headr() {
    const { selectedModule, changeSelectedModule, sortedModules } = useModuleManageStore(state => state);

    return (
        <header className='flex justify-between items-center h-12 px-4'>
            <div>
                {sortedModules.map((moduleType, index) => (
                    <button key={index} onClick={() => changeSelectedModule(moduleType)} className={`${selectedModule === moduleType? 'text-foreground font-bold' : 'text-foreground opacity-70'} mr-2`}>{ModuleMap[moduleType].name || ''}</button>
                ))}
            </div>
            <ModeToggle></ModeToggle>
        </header>
    )
}