import { Injectable } from '@angular/core';
import { CartItem } from './cart-item';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items: BehaviorSubject<Map<number, CartItem>> = new BehaviorSubject<Map<number, CartItem>>(new Map<number, CartItem>());

  constructor() {
    this.loadFromDisk();
  }

  get items(): Subject<Map<number, CartItem>> {
    return this._items
  }

  public addItem(product: Product, amount: number): void {
    if (amount < 1) return;
    const items = this._items.getValue();

    if (items.has(product.id))
      return this.incrementAmount(product, amount);

    const item = new CartItem(product, amount);
    items.set(product.id, item);

    this._items.next(items);
    this.saveToDisk();
  }

  public incrementAmount(product: Product, amount: number): void {
    // Return if the amount is lower then 1
    if (amount < 1) return;
    const items = this._items.getValue();

    // Add the item the product cannot be found
    if (!items.has(product.id))
      return this.addItem(product, amount);

    const value = items.get(product.id);
    value.amount += amount;

    items.set(product.id, value);

    this._items.next(items);
    this.saveToDisk();
  }

  public decrementAmount(product: Product, amount: number): void {
    // Return if the amount is lower then 1
    if (amount < 1) return;
    const items = this._items.getValue();

    // Return if the product cannot be found
    if (!items.has(product.id)) return;

    const value = items.get(product.id);

    // Delete the item if it has less then 1 instance in the cart
    if (value.amount - amount < 1)
      return this.deleteItem(product);

    value.amount -= amount;

    items.set(product.id, value);

    this._items.next(items);
    this.saveToDisk();
  }

  public deleteItem(product: Product): void {
    const items = this._items.getValue();

    if (items.has(product.id)) {
      items.delete(product.id);
    }

    this._items.next(items);
    this.saveToDisk();
  }

  public clearCart(): void {
    this._items.next(new Map<number, CartItem>());
    this.saveToDisk();
  }

  private async saveToDisk() {
    const data = JSON.stringify(Array.from(this._items.getValue()));
    localStorage.setItem("cart", data);
  }

  private loadFromDisk(): void {
    let items = <Map<number, CartItem>> new Map(JSON.parse(localStorage.getItem("cart")));

    if (items == null) {
      items = new Map<number, CartItem>();
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
