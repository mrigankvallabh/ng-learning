import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingComponent } from './shipping.component';
import { provideHttpClient } from '@angular/common/http';

describe('ShippingComponent', () => {
  let component: ShippingComponent;
  let fixture: ComponentFixture<ShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShippingComponent],
      providers: [
        provideHttpClient(),
      ]
    });
    fixture = TestBed.createComponent(ShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
