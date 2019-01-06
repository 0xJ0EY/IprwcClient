import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  @Input() public product: Product;
  @Input() public rotationMultiplier = 5.5;
  @ViewChild('productCard') public productCard: ElementRef;

  private rotateX = 0;
  private rotateY = 0;

  constructor(
    private sanitizer: DomSanitizer,
    private cart: CartService
  ) { }

  @HostBinding('style')
  get updateStyle() {
    return this.sanitizer.bypassSecurityTrustStyle(`
      --mouse-x: ${this.rotateX}deg;
      --mouse-y: ${this.rotateY}deg;
    `);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const rect = this.productCard.nativeElement.getBoundingClientRect();

    const centerX = rect.x + (rect.width / 2);
    const centerY = rect.y + (rect.height / 2);

    const offsetX = centerX - event.clientX;
    const offsetY = centerY - event.clientY;

    const maxX = rect.width / 2;
    const maxY = rect.height / 2;

    this.rotateY = -(offsetX / maxX) * this.rotationMultiplier;
    this.rotateX = (offsetY / maxY) * this.rotationMultiplier;
  }

  public onClickAddToCart(): void {
    this.cart.addItem(this.product, 1);
  }

}
