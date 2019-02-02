import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import ProductImage from '../../../../shared/models/product-image.model';
import {preprocessDirectives} from 'tslint/lib/verify/parse';

@Component({
  selector: 'app-product-images-upload',
  templateUrl: './product-images-upload.component.html',
  styleUrls: ['./product-images-upload.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: ProductImagesUploadComponent, multi: true}
  ],
})
export class ProductImagesUploadComponent implements ControlValueAccessor {

  private file: File = null;

  private innerValue: any;

  private changes = new Array<(value: any) => void>();
  private touched = new Array<() => void>();

  public onClickAdd() {

    const reader = new FileReader();

    reader.onload = (file: any) => {
      console.log(this.file.type);
      // console.log(file.target.result);

      const productImage = new ProductImage();
      productImage.mediaType = this.file.type;
      productImage.content = file.target.result;

      this.value.push(productImage);

      this.file = null;
    };

    reader.readAsDataURL(this.file);
  }

  public onClickDelete(img) {

    for (let i = 0; i < this.value.length; i++) {
      if (img === this.value[i]) {
        this.value.splice(i, 1);
      }
    }

  }

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.changes.forEach(f => f(value));
    }
  }

  private changeFile(evt) {
    this.file = evt.target.files[0];
  }

  touch() {
    this.touched.forEach(f => f());
  }

  registerOnChange(fn: any): void {
    this.changes.push(fn);
  }

  registerOnTouched(fn: any): void {
    this.touched.push(fn);
  }

  setDisabledState(isDisabled: boolean): void {
    // TODO
  }

  writeValue(obj: any): void {
    this.innerValue = obj;
  }



}
