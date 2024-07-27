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

// 复制内容缓存时效
export enum CopyCatchTimeType {
    day = "day",
    week = "week",
    month = "month",
    year = "year",
    // 永久有效
    no = "no"
}

export interface SettingCopyConfig {
    // 复制唤起快捷键
    hotKey: string;
    // 粘贴板存储周期 天、周、月
    catchTimeType: CopyCatchTimeType;
    // copy相关默认为应用存放位置下的 copyCatch/ 目录，
    catchPath: string;
}