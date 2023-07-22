import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarComponent } from './top-bar.component';
import { RouterLink, provideRouter } from '@angular/router';
import { routes } from '../app.config';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TopBarComponent,
        RouterLink,
      ],
      providers: [
        provideRouter(routes)
      ]
    });
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a h1')?.textContent).toContain('My Store');
  });
});
