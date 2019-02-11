export interface Content {
    readonly contentId: number;
    author: string;
    imgUrl?: string;
    type?: string;
    body: string;
    tags?: string[];
    title: string;
}
