import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>"{{name}}"</h3>
  `,
  styles: [
  ]
})
export class NameChileComponent {
  private _name: string = '';

  @Input()
  get name() { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '<UnKnown>'
  }
}
