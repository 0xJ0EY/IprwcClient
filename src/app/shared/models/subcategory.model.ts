import { Product } from './product.model';

export default class Subcategory {
  id: number;
  name: string;
  title: string;

  products?: Product[];
}
