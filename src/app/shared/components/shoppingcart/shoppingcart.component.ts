import { Component, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { CartItemModel } from '../../models/cart-item.model';
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
  items: Array<CartItemModel>;

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

  // TODO: Delegate this to the product
  public onClick(evt) {
    const product = new Product();

    const products = ['AMD Threadripper', 'VEGA 64', 'Nvidia 2080 ti'];

    product.id = this.items.length;
    product.name = products[product.id % products.length];

    this.cart.addItem(product, 1);
  }

  @HostListener('document:click', ['$event'])
  public onClickOutsideComponent(evt) {
    this.active = this.elementRef.nativeElement.contains(evt.target);
  }

  public onClickIncrement(product: CartItemModel) {
    this.cart.incrementAmount(product.item, 1);
  }

  public onClickDecrement(product: CartItemModel) {
    this.cart.decrementAmount(product.item, 1);
  }

  public onClickDelete(product: CartItemModel) {
    this.cart.deleteItem(product.item);
  }

  public onClickClear() {
    this.cart.clearCart();
  }

}
