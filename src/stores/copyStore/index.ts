import { CopyCatchItem, CopyCatchType } from "@/typesAndStatics/copy";
import { create } from "zustand";

interface CopyStore {
    copyCatchList: CopyCatchItem[];
    setCopyCatch: (data: CopyCatchItem) => void;
    clearCopyCatch: (data?: {type?: CopyCatchType | 'all', beforeTime?: number}) => void;
    deleteCopyCatch: (ids: string[]) => void;
    topCopyCatch: (id: string) => void;
}

/**
 * 复制粘贴管理器Store
 */
export const useCopyStore = create<CopyStore>((set) => ({
    // 复制缓存列表
    copyCatchList: [
        {
            id: '1',
            type: CopyCatchType.text,
            content: '123456',
            crateTime: Date.now()
        },
        {
            id: '2',
            type: CopyCatchType.text,
            content: '123456fdsalfaslkdjflkjasdlkfjlaksdjflkjasdlkfjalksdjflkajsdlkfjasdlkjfkl;asdjflkjasdlkfjlaksdjdfdlkajsdlkfjklasdjflkasjdlkfjsakldjfkl',
            crateTime: Date.now() + 1
        },
        {
            id: '3',
            type: CopyCatchType.text,
            content: '123456fdsalfaslkdjflkjasdlkfjlaksdjflkjasdlkfjalksdjflkajsdlkfjasdlkjfkl;asdjflkjasdlkfjlaksdjdfdlkajsdlkfjklasdjflkasjdlkfjsakldjfkl',
            crateTime: Date.now() + 1
        },
        {
            id: '4',
            type: CopyCatchType.text,
            content: '123456fdsalfaslkdjflkjasdlkfjlaksdjflkjasdlkfjalksdjflkajsdlkfjasdlkjfkl;asdjflkjasdlkfjlaksdjdfdlkajsdlkfjklasdjflkasjdlkfjsakldjfkl',
            crateTime: Date.now() + 1
        },
        {
            id: '5',
            type: CopyCatchType.text,
            content: '123456fdsalfaslkdjflkjasdlkfjlaksdjflkjasdlkfjalksdjflkajsdlkfjasdlkjfkl;asdjflkjasdlkfjlaksdjdfdlkajsdlkfjklasdjflkasjdlkfjsakldjfkl',
            crateTime: Date.now() + 1
        },
        {
            id: '6',
            type: CopyCatchType.text,
            content: '123456fdsalfaslkdjflkjasdlkfjlaksdjflkjasdlkfjalksdjflkajsdlkfjasdlkjfkl;asdjflkjasdlkfjlaksdjdfdlkajsdlkfjklasdjflkasjdlkfjsakldjfkl',
            crateTime: Date.now() + 1
        },
        {
            id: '78',
            type: CopyCatchType.text,
            content: '123456fdsalfaslkdjflkjasdlkfjlaksdjflkjasdlkfjalksdjflkajsdlkfjasdlkjfkl;asdjflkjasdlkfjlaksdjdfdlkajsdlkfjklasdjflkasjdlkfjsakldjfkl',
            crateTime: Date.now() + 1
        },

    ],
    // 增加复制缓存
    setCopyCatch: (data) => set((state) => ({ copyCatchList: [...state.copyCatchList, data] })),
    // 清除复制缓存
    clearCopyCatch: (data) => set(state => {
        const { type = CopyCatchType.all, beforeTime = 0 } = data || {};
        let newList = state.copyCatchList;
        newList = newList.filter(item => {
            const needDeleteByType = type === CopyCatchType.all || type === item.type;
            const needDeleteByTime = beforeTime === 0 || item.crateTime < beforeTime;
            // 多条件 与 才能删除
            return !(needDeleteByType && needDeleteByTime);
        })
        return {
            copyCatchList: newList
        }
    }),
    // 删除若干
    deleteCopyCatch(ids) {
        set(state => {
            const newList = state.copyCatchList.filter(item => ids.indexOf(item.id) === -1);
            return {
                copyCatchList: newList
            }
        })
    },
    // 置顶指定的缓存记录
    topCopyCatch(id: string) {
        set(state => {
            const newList = state.copyCatchList.filter(item => item.id!== id);
            const target = state.copyCatchList.find(item => item.id === id);
            if (target) {
                newList.unshift(target);
            }
            return {
                copyCatchList: newList
            }
        })
    }
}))
