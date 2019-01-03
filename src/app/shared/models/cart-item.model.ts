import { ProductModel } from './product.model';

export class CartItemModel {

    public item: ProductModel;
    public amount: number;

    constructor(item: ProductModel, amount?: number) {
        this.item = item;
        this.amount = amount || 1;
    }

}
