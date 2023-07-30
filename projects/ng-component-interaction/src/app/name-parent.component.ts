import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameChileComponent } from './name-child.component';

@Component({
  selector: 'app-name-parent',
  standalone: true,
  imports: [
    CommonModule,
    NameChileComponent,
  ],
  template: `
    <h2>Master controls {{names.length}} names</h2>

    <app-name-child *ngFor="let name of names" [name]="name"></app-name-child>
  `,
  styles: [
  ]
})
export class NameParentComponent {
  names = ['Dr. IQ', '   ', '  Bombasto  '];
}
