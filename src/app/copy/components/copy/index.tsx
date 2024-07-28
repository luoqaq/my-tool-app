'use client'

import { Input } from '@/components/ui/input';
import { useCopyStore } from '@/stores/copyStore';
import { CopyCatchType, CopyCatchTypes } from '@/typesAndStatics/copy';
import React, { memo, useEffect, useMemo, useState } from'react';
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area';
import { Clipboard, X } from 'lucide-react';
import { copyToClipboard, useListenClipboardChange } from '@/utils/copy';
import { useToast } from '@/components/ui/use-toast';


const Copy = () => {
    const {
        copyCatchList,
        deleteCopyCatch,
        topCopyCatch,
        setCopyCatch,
    } = useCopyStore(state => state);

    const { toast } = useToast();

    // 当前选中的标签类型
    const [currentType, setCurrentType] = useState<CopyCatchType>(CopyCatchType.all)
    // 搜索的内容
    const [inputValue, setInputValue] = useState('')

    // 类型过滤后的列表
    const filteredList = useMemo(() => {
        switch (currentType) {
            case CopyCatchType.all:
                return copyCatchList
            case CopyCatchType.image:
                return copyCatchList.filter(item => item.type === CopyCatchType.image)
            case CopyCatchType.text:
                return copyCatchList.filter(item => item.type === CopyCatchType.text)
            default:
                return []
        }
    }, [currentType, copyCatchList]);
    // 展示的列表
    const showedList = useMemo(() => {
        if (inputValue === '') {
            return filteredList
        }
        return filteredList.filter(item => item.content.includes(inputValue))
    }, [inputValue, filteredList]);

    const onInputSearch = (e: any) => {
        setInputValue(e.target.value);
    }

    return <div className='h-full'>
        <header className='flex items-center justify-between'>
            <div className='flex'>
                {
                    CopyCatchTypes.map(item => (
                        <div key={item.label} className={`text-white font-semibold mr-3 cursor-pointer whitespace-nowrap hover:!${item.activeBg} ${currentType === item.value ? `${item.activeBg}` : `${item.bg}`} inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors`} onClick={() => setCurrentType(item.value)}>{item.label}</div>
                    ))
                }
            </div>
            <div>
                <Input placeholder='搜索' onInput={onInputSearch} />
            </div>
        </header>
        <ScrollArea className='mt-4' style={{height: 'calc(100% - 40px)'}}>
            <div>
                {
                    showedList.map((item, index) => (
                        <div key={item.id} className='flex justify-between py-2 border-t border-slate-200'>
                            <div className='flex items-center mr-8'>
                                {item.type === CopyCatchType.image ? (
                                    <Image src={`data:image/jpeg;base64,${item.content}`} width={100} height={100} alt='图片' />
                                ) : (
                                    <p className='text-sm break-all'>{item.content}</p>
                                )}
                            </div>
                            <div className='whitespace-nowrap'>
                                <button onClick={() => {
                                    // 复制到剪切板
                                    copyToClipboard(item.content, item.type).then(() => {
                                        toast({
                                            title: '复制成功',
                                        })
                                    }).catch(() => {
                                        toast({
                                            title: '复制失败',
                                            variant: 'destructive',
                                        })
                                    });

                                }} className='mr-2 opacity-60'><Clipboard size={16}/></button>
                                <button onClick={() => {deleteCopyCatch([item.id])}} className='mr-2 opacity-60'><X size={16}/></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </ScrollArea>
    </div>

};

export default Copy;