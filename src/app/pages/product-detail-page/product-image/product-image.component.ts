import {Component, ElementRef, HostBinding, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import ProductImage from '../../../shared/models/product-image.model';
import {environment} from '../../../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent {

  api = environment.api;

  @Input() image: ProductImage;

  @Input() public rotationMultiplier = 8;
  @ViewChild('card') public productCard: ElementRef;

  private rotateX = 0;
  private rotateY = 0;

  constructor(private sanitizer: DomSanitizer) { }

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

}
