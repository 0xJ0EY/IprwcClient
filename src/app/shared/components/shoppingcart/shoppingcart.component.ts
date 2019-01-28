import { Component, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { CartItem } from '../../models/cart.item';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '250px',
        width: '350px'
      })),
      state('closed', style({
        height: 0,
        width: 0
      })),
      transition('closed => open', [
        animate('.25s cubic-bezier(.1,1.45,.35,1)')
      ]),
      transition('closed => open', [
        animate('0s')
      ])
    ])
  ]
})
export class ShoppingcartComponent implements OnInit, OnDestroy {

  // Boolean to check if the menu is open or not
  active = false;

  // Current items in the cart
  items: Array<CartItem>;

  // Amount of items in the cart
  amount: number;

  // CartService subscription
  subscription: Subscription;

  constructor(
    private cart: CartService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    // Cast it to an array, so the template engine can iterate over it
    // this.subscription = this.cart.items.subscribe(data => this.items = Array.from(data.values()));
    this.subscription = this.cart.items.subscribe(data => this.processServiceData(data));
  }

  private processServiceData(data: any): void {
    this.items = Array.from(data.values());

    let amount = 0;
    this.items.map(item => amount += item.amount);
    this.amount = amount;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  public onClickOutsideComponent(evt) {
    this.active = this.elementRef.nativeElement.contains(evt.target);
  }

  public onClickIncrement(product: CartItem) {
    this.cart.incrementAmount(product.item, 1);
  }

  public onClickDecrement(product: CartItem) {
    this.cart.decrementAmount(product.item, 1);
  }

  public onClickDelete(product: CartItem) {
    this.cart.deleteItem(product.item);
  }

  public onClickClear() {
    this.cart.clearCart();
  }

}
