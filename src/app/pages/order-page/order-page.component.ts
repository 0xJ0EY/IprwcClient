import {Component, OnDestroy, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {CartItem} from '../../shared/models/cart.item';
import {Subscription} from 'rxjs';
import {CartService} from '../../shared/services/cart.service';
import Order from '../../shared/models/order.model';
import {OrderService} from '../../shared/services/order.service';
import OrderItem from '../../shared/models/order-item.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit, OnDestroy {

  api = environment.api;

  // Boolean to check if the menu is open or not
  loading = true;

  // Current items in the cart
  items: Array<CartItem>;

  // Amount of items in the cart
  amount: number;

  price: number;

  order: Order = new Order();

  // CartService subscription
  subscription: Subscription;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

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

      // No items, navigate to home page
      if (this.amount === 0) {
        this.router.navigate(['/']);
      }

      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit() {
    this.loading = true;

    const items: OrderItem[] = this.items.map((value: CartItem) => {
      const item: OrderItem = new OrderItem();

      item.product = { 'id': value.item.id};
      item.amount = value.amount;

      return item;
    });

    this.order.items = items;

    this.orderService.create(this.order).subscribe((resp) => {
      const price = JSON.parse(JSON.stringify(this.price));
      this.cartService.clearCart();
      window.location.href = 'https://www.paypal.me/joeyissupercool/' + price;
    });

  }

}
