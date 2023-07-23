import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'child-view',
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
export class ChildViewComponent {
  hero = 'Magneta';
}
