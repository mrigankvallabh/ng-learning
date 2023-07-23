import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AfterContentParentComponent } from './after-content-parent.component';
import { AfterViewParentComponent } from './after-view-parent.component';
import { CounterParentComponent } from './counter-parent.component';
import { DoCheckParentComponent } from './do-check-parent.component';
import { OnChangesParentComponent } from './on-changes-parent.component';
import { PeekABooParentComponent } from './peek-a-boo-parent.component';
import { SpyComponent } from './spy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PeekABooParentComponent,
    SpyComponent,
    OnChangesParentComponent,
    DoCheckParentComponent,
    AfterViewParentComponent,
    AfterContentParentComponent,
    CounterParentComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent { }
