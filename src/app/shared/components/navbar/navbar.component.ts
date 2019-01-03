import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import Category from '../../models/category.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public categories: Array<Category>;

  constructor(private category: CategoryService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  private async fetchCategories() {
    this.category.fetchCategories().subscribe(data => this.categories = data);
  }

}
