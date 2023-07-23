import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Route, provideRouter } from '@angular/router';
export const routes: Route[] = [
  {
    path: '', loadComponent: () => import('./product-list/product-list.component').then(c => c.ProductListComponent)
  },
  {
    path: 'products/:productId',
    loadComponent: () => import('./product-details/product-details.component').then(c => c.ProductDetailsComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then(c => c.CartComponent)
  },
  {
    path: 'shipping',
    loadComponent: () => import('./shipping/shipping.component').then(c => c.ShippingComponent)
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
  ]
};
