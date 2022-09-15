import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
      this.items.push(product);
      console.log('this.items', this.items);
  }

  getItems() {
    return this.items;
  }

  remove(product: Product) {
    this.items = this.items.filter(p => p.id != product.id);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
