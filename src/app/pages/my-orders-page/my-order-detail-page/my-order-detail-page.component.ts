import { Component, OnInit } from '@angular/core';
import Order from '../../../shared/models/order.model';
import {OrderService} from '../../../shared/services/order.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-order-detail-page',
  templateUrl: './my-order-detail-page.component.html',
  styleUrls: ['./my-order-detail-page.component.scss']
})
export class MyOrderDetailPageComponent implements OnInit {

  public amount = 0;
  public total = 0;
  public order: Order = new Order();

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Load orders
    const id: number = this.route.snapshot.params.id;

    this.orderService.fetch(id).subscribe(data => {

      this.order = data;
      this.amount = 0;
      this.total = 0;

      this.order.items.map((value) => {
        this.amount += value.amount;
        this.total += value.product.price * value.amount;
      });
    });
  }

}
