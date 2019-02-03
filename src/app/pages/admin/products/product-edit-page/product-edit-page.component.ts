import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../shared/models/product.model';
import Brand from '../../../../shared/models/brand.model';
import Subcategory from '../../../../shared/models/subcategory.model';
import {SubcategoryService} from '../../../../shared/services/subcategory.service';
import {BrandService} from '../../../../shared/services/brand.service';
import {ProductService} from '../../../../shared/services/product.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.scss']
})
export class ProductEditPageComponent implements OnInit {

  public product: Product;
  public brands: Brand[] = [];
  public subcategories: Subcategory[] = [];

  private loading = true;

  constructor(
    private subcategoryService: SubcategoryService,
    private brandService: BrandService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
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

    // Load brands
    promises.push(this.brandService.fetchAll().toPromise().then((resp) => {
      this.brands = resp;
      this.product.brand = resp.length > 0 ? resp[0] : this.product.brand;
    }));

    // Load product
    const id: number = this.route.snapshot.params.id;

    promises.push(this.productService.fetchEdit(id).toPromise().then((resp) => {
      this.product = resp;
    }));

    Promise.all(promises).then(() => this.loading = false);
  }

  public onSubmit() {
    this.loading = true;

    this.productService.update(this.product).subscribe((resp) => {
      this.router.navigate(['/admin/producten']);
    }, () => { this.loading = false ; });
  }

  public compareSubcategories(s1: Subcategory, s2: Subcategory) {
    return s1 && s2 && s1.id === s2.id;
  }

  public compareBrands(b1: Brand, b2: Brand) {
    return b1 && b2 && b1.id === b2.id;
  }


}
