export interface Promotion {
    _id?: string;
    title: string;
    description: string;
    start: Date;
    end: Date;
    price: number;
    imageUrl?: string;
}