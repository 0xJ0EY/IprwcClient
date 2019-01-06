import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {SubcategoryService} from '../../shared/services/subcategory.service';
import Subcategory from '../../shared/models/subcategory.model';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  private loading = false;
  public subcategory: Subcategory;

  constructor(private route: ActivatedRoute, private subcategoryService: SubcategoryService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.loading = true;
      this.fetchData(params['subcategory']);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchData(subcategory: string): void {
    this.subcategoryService.fetchSubcategory(subcategory)
      .subscribe(data => {
        this.subcategory = data;
        this.loading = false;
      });
  }

  public isLoaded() {
    return !this.loading && this.subcategory !== null;
  }

}
