import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import Category from '../../models/category.model';
import {Subscription} from 'rxjs';
import Subcategory from '../../models/subcategory.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private active = false;
  private selected: Category = null;

  public categories: Array<Category>;

  private subscription: Subscription;

  constructor(private category: CategoryService) { }

  // Subscribe to get the latest data
  ngOnInit() {
    this.subscription = this.category.categories.subscribe(data => {
      this.categories = data;
    });
  }

  // Unsubscribe, so memory leaks wont happen
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private categoryToAlphaMap(category: Category): Map<String, Subcategory[]> {
    const map: Map<String, Subcategory[]> = new Map();

    // Fill the map will all the letters from the alphabet
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode(97 + i);
      map.set(char, []);
    }

    // Add the values
    for (const subcategory of category.subcategories) {
      let char = subcategory.title[0].toLowerCase();

      if (char.toLowerCase().charCodeAt(0) === (char.toUpperCase().charCodeAt(0) - 65)) {
        char = '#';
      }

      const data = map.get(char);

      data.push(subcategory);
      map.set(char, data);
    }

    return map;
  }

  public onMouseEnter(): void {
    this.active = true;
  }

  public onMouseLeave(): void {
    this.active = false;
    this.selected = null;
  }

  public hoverCategory(category: Category): void {
    this.selected = category;
  }

  public isActive(): boolean {
    return this.active && this.selected !== null;
  }

  public isSelected(category: Category): boolean {
    if (this.selected === null) { return false; }
    return category.title === this.selected.title;
  }

  public activeSubcategories(): Map<String, Subcategory[]> {
    return this.categoryToAlphaMap(this.selected);
  }

}
