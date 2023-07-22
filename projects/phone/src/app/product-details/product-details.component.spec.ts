import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { routes } from '../app.config';
import { ProductDetailsComponent } from './product-details.component';
import { provideHttpClient } from '@angular/common/http';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductDetailsComponent,
      ],
      providers: [
        provideRouter(routes),
        provideHttpClient(),
      ]
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
