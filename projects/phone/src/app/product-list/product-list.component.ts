import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../PRODUCTS.mock';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ProductAlertsComponent,
    MatButtonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  readonly PRODUCTS = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product is on sale!');
  }
}
