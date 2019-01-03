import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import Category from '../../models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private categories: Array<Category>;

  constructor(private category: CategoryService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  private async fetchCategories() {
    this.category.fetchCategories().subscribe(data => this.categories = data);
  }

}
