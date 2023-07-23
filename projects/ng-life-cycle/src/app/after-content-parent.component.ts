import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { AfterContentComponent } from './after-content.component';
import { ChildComponent } from './child.component';

@Component({
  selector: 'after-content-parent',
  standalone: true,
  imports: [
    CommonModule,
    AfterContentComponent,
    ChildComponent,
  ],
  providers: [LoggerService],
  template: `
    <div class="parent">
    <h2>AfterContent</h2>

    <div *ngIf="show">
      <after-content>
        <child></child>
      </after-content>
      </div>

    <div class="info">
      <h3>AfterContent Logs</h3>
      <button type="button" (click)="reset()">Reset</button>
      <div *ngFor="let msg of logger.logs" class="log">{{msg}}</div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class AfterContentParentComponent {
  show = true;

  constructor(public logger: LoggerService) { }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterContentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
