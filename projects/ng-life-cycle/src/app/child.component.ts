import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'child',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  template: `
    <label for="hero-name">Hero name: </label>
  <input type="text" id="hero-name" [(ngModel)]="hero">
  `,
  styles: [
  ]
})
export class ChildComponent {
  hero = 'Magneta';
}
