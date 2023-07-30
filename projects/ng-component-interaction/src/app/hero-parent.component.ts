import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HEROES } from './hero';
import { HeroChildComponent } from './hero-child.component';

@Component({
  selector: 'app-hero-parent',
  standalone: true,
  imports: [
    CommonModule,
    HeroChildComponent,
  ],
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>

    <app-hero-child
      *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  `,
  styles: [
  ]
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
