import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionChildComponent } from './version-child.component';

@Component({
  selector: 'app-version-parent',
  standalone: true,
  imports: [
    CommonModule,
    VersionChildComponent
  ],
  template: `
    <h2>Source code version</h2>
    <button type="button" (click)="newMinor()">New minor version</button>
    <button type="button" (click)="newMajor()">New major version</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `,
  styles: [
  ]
})
export class VersionParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
