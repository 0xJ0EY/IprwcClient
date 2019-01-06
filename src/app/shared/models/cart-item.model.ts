import { Product } from './product.model';

export class CartItemModel {

    public item: Product;
    public amount: number;

    constructor(item: Product, amount?: number) {
        this.item = item;
        this.amount = amount || 1;
    }

}
