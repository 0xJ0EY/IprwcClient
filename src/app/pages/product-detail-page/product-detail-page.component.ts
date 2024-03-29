import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product.model';
import {CartService} from '../../shared/services/cart.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const title = this.route.snapshot.params.product;

    this.productService.fetch(title).subscribe((data: Product) => {

      this.product = data;

    });

  }

  onClickAddToCart() {
    this.cartService.addItem(this.product, 1);
  }

}
