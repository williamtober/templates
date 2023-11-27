export interface SubItem {
    [key: string]: string; // this is to allow indexing by any string
    _id: string;
    name: string;
    description: string;
}

export interface Item {
    [key: string]: string | SubItem[]; // this is to allow indexing by any string
    _id: string;
    name: string;
    description: string;
    subItems: SubItem[];
}

export interface ItemState {
    loading: boolean;
    error: string | null;
    items: Item[];
}