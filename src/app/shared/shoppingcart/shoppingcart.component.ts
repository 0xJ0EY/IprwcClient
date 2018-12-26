import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../product';
import { CartService } from './cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit, OnDestroy {

  items: Array<CartItem>;
  subscription: Subscription;

  constructor(public cart: CartService) {}

  ngOnInit() {
    // Cast it to an array, so the template engine can iterate over it
    this.subscription = this.cart.items.subscribe(data => this.items = Array.from(data.values()));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // TODO: Delegate this to the product
  public onClick(evt) {
    const product = new Product();

    product.id = 1;
    product.name = "Kiwis";

    this.cart.addItem(product, 1);
  }

  public onClickDelete(product: CartItem) {
    this.cart.deleteItem(product.item);
  }

  public onClickClear() {
    this.cart.clearCart();
  }

}
