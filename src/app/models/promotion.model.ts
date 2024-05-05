export interface Promotion {
  _id?: string;
  name: string;
  description: string;
  start: Date;
  end: Date;
  price: number;
  imageUrl?: string;
}
