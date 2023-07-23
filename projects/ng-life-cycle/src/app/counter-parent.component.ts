import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'counter-parent',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
  ],
  providers: [LoggerService],
  template: `
    <h2>Counter Spy</h2>

    <button type="button" (click)="updateCounter()">Update counter</button>
    <button type="button" (click)="reset()">Reset Counter</button>

    <counter [counter]="value"></counter>

    <div class="info">
      <h3>Spy Lifecycle Hook Log</h3>
      <div *ngFor="let msg of spyLog" class="log">{{msg}}</div>
    </div>
  `,
  styles: [
  ]
})
export class CounterParentComponent {
  value = 0;
  spyLog: string[] = [];

  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset();
  }

  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }

  reset() {
    this.logger.log('reset');
    this.value = 0;
    this.logger.tick();
  }
}
