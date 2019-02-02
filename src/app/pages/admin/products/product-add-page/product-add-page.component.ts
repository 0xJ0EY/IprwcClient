import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubcategoryService} from '../../../../shared/services/subcategory.service';
import Subcategory from '../../../../shared/models/subcategory.model';
import {BrandService} from '../../../../shared/services/brand.service';
import Brand from '../../../../shared/models/brand.model';
import {Product} from '../../../../shared/models/product.model';
import {ProductService} from '../../../../shared/services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add-page',
  templateUrl: './product-add-page.component.html',
  styleUrls: ['./product-add-page.component.scss']
})
export class ProductAddPageComponent implements OnInit {

  public product: Product;
  public brands: Brand[] = [];
  public subcategories: Subcategory[] = [];

  private loading = true;

  constructor(
    private subcategoryService: SubcategoryService,
    private brandService: BrandService,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.product = new Product();
    this.product.subcategory = new Subcategory();
    this.product.brand = new Brand();

    this.load();
  }

  private load() {
    const promises = [];

    // Load subcategories
    promises.push(this.subcategoryService.fetchAll().toPromise().then((resp) => {
      this.subcategories = resp;
      this.product.subcategory = resp.length > 0 ? resp[0] : this.product.subcategory;
    }));

    promises.push(this.brandService.fetchAll().toPromise().then((resp) => {
      this.brands = resp;
      this.product.brand = resp.length > 0 ? resp[0] : this.product.brand;
    }));

    Promise.all(promises).then(() => this.loading = false);
  }

  public onSubmit() {
    this.loading = true;

    this.productService.create(this.product).subscribe((resp) => {
      this.router.navigate(['/admin/producten']);
    });
  }

  public compareSubcategories(s1: Subcategory, s2: Subcategory) {
    return s1 && s2 && s1.id === s2.id;
  }

  public compareBrands(b1: Brand, b2: Brand) {
    return b1 && b2 && b1.id === b2.id;
  }

}
