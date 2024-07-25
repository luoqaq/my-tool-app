// 复制内容的类型
export enum CopyCatchType {
    text = "text",
    image = "image",
}

// 复制内容
export interface CopyCatchItem {
    content: string;
    type: CopyCatchType;
    crateTime: number;
}