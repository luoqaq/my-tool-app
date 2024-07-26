'use client'

import { useCopyStore } from '@/stores/copyStore';
import { useSettingStore } from '@/stores/settingStore';
import React from'react';

const Copy = () => {
    const copyConfig = useSettingStore(state => state.copyConfig);
    const setCopyConfig = useSettingStore(state => state.changeCopyConfig);

    const {
        copyCatchList,
        setCopyCatch,
        clearCopyCatch
    } = useCopyStore(state => state);

    console.log('copyConfig', copyConfig)

    setTimeout(() => {
        setCopyConfig({
            ...copyConfig,
            catchPath: '/copy'
        })
    }, 2000)

    setTimeout(() => {
        console.log('首页 10s后 copyConfig', copyConfig)
      }, 10000);

    return <div>
        <h1>Copy</h1>
        <div>
            <div>CopyConfig: {JSON.stringify(copyConfig)}</div>
        </div>
    </div>

}

export default Copy;