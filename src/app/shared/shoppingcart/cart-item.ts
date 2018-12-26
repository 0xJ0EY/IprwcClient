import { Product } from '../product';

export class CartItem {

    public item: Product;
    public amount: number;

    constructor(item: Product, amount?: number) {
        this.item = item;
        this.amount = amount || 1;
    }

}
