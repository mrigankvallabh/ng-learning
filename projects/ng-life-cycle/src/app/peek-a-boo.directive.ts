import { Directive, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;

@Directive({
  selector: '[appPeekABoo]',
  standalone: true
})
export class PeekABooDirective implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
