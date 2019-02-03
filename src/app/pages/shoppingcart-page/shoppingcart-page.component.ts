import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../shared/services/cart.service';
import {CartItem} from '../../shared/models/cart.item';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-shoppingcart-page',
  templateUrl: './shoppingcart-page.component.html',
  styleUrls: ['./shoppingcart-page.component.scss']
})
export class ShoppingcartPageComponent implements OnInit, OnDestroy {

  api = environment.api;

  // Boolean to check if the menu is open or not
  active = false;

  // Current items in the cart
  items: Array<CartItem>;

  // Amount of items in the cart
  amount: number;

  price: number;

  // CartService subscription
  subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.items.subscribe((data) => {

      this.items = Array.from(data.values());

      let amount = 0;
      let price = 0;

      this.items.map(item => {
        amount += item.amount;
        price += item.item.price * item.amount;
      });

      this.amount = amount;
      this.price = price;
    });
  }

  public increment(cartItem: CartItem) {
    this.cartService.incrementAmount(cartItem.item, 1);
  }

  public decrement(cartItem: CartItem) {
    this.cartService.decrementAmount(cartItem.item, 1);
  }

  public onChange(evt, cartItem: CartItem) {
    this.cartService.updateProduct(cartItem.item, evt.target.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public canOrder(): boolean {
    return this.items.length > 0;
  }

}
