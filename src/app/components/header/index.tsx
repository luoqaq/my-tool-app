'use client'
import React from'react';
import { ModeToggle } from './theme';

export default function Headr() {

    return (
        <header className='flex justify-between items-center h-12 px-4'>
            <div></div>
            <ModeToggle></ModeToggle>
        </header>
    )
}