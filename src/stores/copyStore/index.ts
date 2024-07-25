import { CopyCatchItem, CopyCatchType } from "@/types/copy";
import { create } from "zustand";

interface CopyStore {
    copyCatchList: CopyCatchItem[];
    copyCatch: (data: CopyCatchItem) => void;
    clearCopyCatch: (data?: {type?: CopyCatchType | 'all', beforeTime?: number}) => void;
}

/**
 * 复制粘贴管理器Store
 */
export const useCopyStore = create<CopyStore>((set) => ({
    // 复制缓存列表
    copyCatchList: [],
    // 增加复制缓存
    copyCatch: (data) => set((state) => ({ copyCatchList: [...state.copyCatchList, data] })),
    // 清除复制缓存
    clearCopyCatch: (data) => set(state => {
        const { type = 'all', beforeTime = 0 } = data || {};
        let newList = state.copyCatchList;
        newList = newList.filter(item => {
            const needDeleteByType = type === 'all' || type === item.type;
            const needDeleteByTime = beforeTime === 0 || item.crateTime < beforeTime;
            // 多条件 与 才能删除
            return !(needDeleteByType && needDeleteByTime);
        })
        return {
            copyCatchList: newList
        }
    }),
}))
