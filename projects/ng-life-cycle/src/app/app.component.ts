import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PeekABooParentComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent { }
