import OrderItem from './order-item.model';

export default class Order {
  id: number;
  firstname: string;
  lastname: string;

  street: string;
  houseNumber: string;
  postalCode: string;

  items: OrderItem[];

}
