import { Directive, OnDestroy, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;

@Directive({
  selector: '[appSpy]',
  standalone: true
})
export class SpyDirective implements OnInit, OnDestroy {
  private id = nextId++;

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logger.log(`Spy #${this.id} onInit`);
  }

  ngOnDestroy(): void {
    this.logger.log(`Spy #${this.id} onDestroy`);
  }
}
