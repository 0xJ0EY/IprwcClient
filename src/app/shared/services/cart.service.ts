import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items: BehaviorSubject<Map<string, CartItemModel>> = new BehaviorSubject(new Map<string, CartItemModel>());

  constructor() {
    this.loadFromDisk();
  }

  get items(): Subject<Map<string, CartItemModel>> {
    return this._items;
  }

  public addItem(product: Product, amount: number): void {
    if (amount < 1) {
       return;
    }
    const items = this._items.getValue();

    if (items.has(product.title)) {
      return this.incrementAmount(product, amount);
    }

    const item = new CartItemModel(product, amount);
    items.set(product.title, item);

    this._items.next(items);
    this.saveToDisk();
  }

  public incrementAmount(product: Product, amount: number): void {
    // Return if the amount is lower then 1
    if (amount < 1) {
      return;
    }
    const items = this._items.getValue();

    // Add the item the product cannot be found
    if (!items.has(product.title)) {
      return this.addItem(product, amount);
    }

    const value = items.get(product.title);
    value.amount += amount;

    items.set(product.title, value);

    this._items.next(items);
    this.saveToDisk();
  }

  public decrementAmount(product: Product, amount: number): void {
    // Return if the amount is lower then 1
    if (amount < 1) {
      return;
    }
    const items = this._items.getValue();

    // Return if the product cannot be found
    if (!items.has(product.title)) {
      return;
    }

    const value = items.get(product.title);

    // Delete the item if it has less then 1 instance in the cart
    if (value.amount - amount < 1) {
      return this.deleteItem(product);
    }

    value.amount -= amount;

    items.set(product.title, value);

    this._items.next(items);
    this.saveToDisk();
  }

  public deleteItem(product: Product): void {
    const items = this._items.getValue();

    if (items.has(product.title)) {
      items.delete(product.title);
    }

    this._items.next(items);
    this.saveToDisk();
  }

  public clearCart(): void {
    this._items.next(new Map<string, CartItemModel>());
    this.saveToDisk();
  }

  private async saveToDisk() {
    const data = JSON.stringify(Array.from(this._items.getValue()));
    localStorage.setItem('cart', data);
  }

  private loadFromDisk(): void {
    let items = <Map<string, CartItemModel>> new Map(JSON.parse(localStorage.getItem('cart')));

    if (items == null) {
      items = new Map<string, CartItemModel>();
    }

    this.items.next(items);
  }

  /**
   * Update the products in the list
   * TODO: Create this
   */
  private async updateProducts() {

  }

}
