import Subcategory from './subcategory.model';

export default class Category {
  id: number;
  name: string;
  title: string;
  subcategories: Subcategory[];
}
