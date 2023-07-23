import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { SpyComponent } from './spy.component';
import { OnChangesParentComponent } from './on-changes-parent.component';
import { DoCheckParentComponent } from './do-check-parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PeekABooParentComponent,
    SpyComponent,
    OnChangesParentComponent,
    DoCheckParentComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent { }
