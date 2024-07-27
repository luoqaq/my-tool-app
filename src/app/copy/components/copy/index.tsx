'use client'

import { useCopyStore } from '@/stores/copyStore';
import { useSettingStore } from '@/stores/settingStore';
import React, { useEffect } from'react';

const Copy = () => {
    const copyConfig = useSettingStore(state => state.copyConfig);
    const setCopyConfig = useSettingStore(state => state.changeCopyConfig);

    const {
        copyCatchList,
        setCopyCatch,
        clearCopyCatch
    } = useCopyStore(state => state);

    useEffect(() => {
        setTimeout(() => {
            setCopyConfig({...copyConfig, catchPath: '/catch'})

        }, 2000)
    })

    return <div>
        <h1>Copy</h1>
        <div>
            <div>CopyConfig: {JSON.stringify(copyConfig)}</div>
        </div>
    </div>

}

export default Copy;