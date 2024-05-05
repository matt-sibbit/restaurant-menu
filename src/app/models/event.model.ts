export interface Event {
    _id?: string;
    name: string;
    description: string;
    date: Date;
    time: string;
    location: string;
    price: number;
    imageUrl?: string;
}