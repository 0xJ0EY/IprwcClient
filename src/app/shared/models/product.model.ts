import Brand from './brand.model';
import Subcategory from './subcategory.model';

export class Product {
  id: number;
  name: string;
  title: string;

  brand: Brand = new Brand();

  subcategory: Subcategory = new Subcategory();
  description: string;

  price: number;
  vat: number;
  priceWithoutVat: number;
}
