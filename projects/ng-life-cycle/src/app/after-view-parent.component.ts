import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { AfterViewComponent } from './after-view.component';

@Component({
  selector: 'after-view-parent',
  standalone: true,
  imports: [
    CommonModule,
    AfterViewComponent,
  ],
  providers: [LoggerService],
  template: `
    <h2>AfterView</h2>

    <after-view  *ngIf="show"></after-view>

    <div class="info">
      <h3>AfterView Logs</h3>
      <button type="button" (click)="reset()">Reset</button>
      <div *ngFor="let msg of logger.logs" class="log">{{msg}}</div>
    </div>

  `,
  styles: []
})
export class AfterViewParentComponent {
  show = true;

  constructor(public logger: LoggerService) { }

  reset() {
    this.logger.clear();
    // quickly remove and reload AfterViewComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }
}
