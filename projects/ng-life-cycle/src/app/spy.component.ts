import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from './logger.service';
import { SpyDirective } from './spy.directive';

@Component({
  selector: 'spy-parent',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SpyDirective,
  ],
  providers: [LoggerService],
  template: `
    <div class="parent">
    <h2>Spy Directive</h2>

    <label for="hero-name">Hero name: </label>
    <input type="text" id="hero-name" [(ngModel)]="newName" (keyup.enter)="addHero()">
    <button type="button" (click)="addHero()">Add Hero</button>
    <button type="button" (click)="reset()">Reset Heroes</button>

    <div class="info">
      <p *ngFor="let hero of heroes" appSpy>
        {{hero}}
      </p>

      <h3>Spy Lifecycle Hook Log</h3>
      <div *ngFor="let msg of logger.logs" class="log">{{msg}}</div>
    </div>
  </div>

  `,
  styles: []
})
export class SpyComponent {
  newName = 'Herbie';
  heroes: string[] = ['Windstorm', 'Magneta'];

  constructor(public logger: LoggerService) { }

  addHero() {
    if (this.newName.trim()) {
      this.heroes.push(this.newName.trim());
      this.newName = '';
      this.logger.tick();
    }
  }

  removeHero(hero: string) {
    this.heroes.splice(this.heroes.indexOf(hero), 1);
    this.logger.tick();
  }

  reset() {
    this.logger.log('reset');
    this.heroes = [];
    this.logger.tick();
  }

}
