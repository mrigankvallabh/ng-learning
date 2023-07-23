import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';
import { OnChangesComponent } from './on-changes.component';

@Component({
  selector: 'on-changes-parent',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OnChangesComponent,
  ],
  template: `
    <h2>{{title}}</h2>
    <label for="power-input">Power: </label>
    <input type="text" id="power-input" [(ngModel)]="power">
    <label for="hero-name"> Hero.name: </label>
    <input type="text" id="hero-name" [(ngModel)]="hero.name">

    <button type="button" (click)="reset()">Reset Log</button>

    <on-changes [hero]="hero" [power]="power"></on-changes>
  `,
  styles: [
  ]
})
export class OnChangesParentComponent {
  hero!: Hero;
  power = '';
  title = 'OnChanges';
  @ViewChild(OnChangesComponent) childView!: OnChangesComponent;

  constructor() { this.reset(); }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
