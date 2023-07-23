import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoCheckComponent } from './do-check.component';
import { Hero } from './hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'do-check-parent',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DoCheckComponent,
  ],
  template: `
    <h2>{{title}}</h2>
    <label for="power-input">Power: </label>
    <input type="text" id="power-input" [(ngModel)]="power">
    <label for="hero-name">Hero.name: </label>
    <input type="text" id="hero-name" [(ngModel)]="hero.name">
    <button type="button" (click)="reset()">Reset Log</button>

    <do-check [hero]="hero" [power]="power"></do-check>
  `,
  styles: [
  ]
})
export class DoCheckParentComponent {
  hero!: Hero;
  power = '';
  title = 'DoCheck';
  @ViewChild(DoCheckComponent) childView!: DoCheckComponent;

  constructor() { this.reset(); }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
