import { Injectable } from '@angular/core';
import { Product } from './PRODUCTS.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly items: Product[] = [];
  constructor(private http: HttpClient) { }

  addToCart(product: Product) { this.items.push(product); }

  getItems() { return this.items; }

  clearCart() { this.items.length = 0; return this.items; }

  getShippingPrices() {
    return this.http
      .get<{ type: string; price: number }[]>('/assets/shipping.json');
  }
}
