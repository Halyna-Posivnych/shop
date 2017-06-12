import { SweetsCategory } from './sweetsCategory';

export class Product {
  name: string;
  description: string;
  price: number;
  category: SweetsCategory;
  isAvailable: boolean;
  equivalents: string[];
  imgUrlPath: string;
}