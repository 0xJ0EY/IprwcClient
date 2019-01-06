import Brand from './brand.model';

export class Product {
  id: number;
  name: string;
  title: string;

  brand: Brand;

  description: string;

  price: number;
  vat: number;
  priceWithoutVat: number;
}
