import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterComponent } from './voter.component';

@Component({
  selector: 'app-vote-taker',
  standalone: true,
  imports: [
    CommonModule,
    VoterComponent,
  ],
  template: `
    <h2>Should mankind colonize the Universe?</h2>
    <h3>Agree: {{agreed}}, Disagree: {{disagreed}}</h3>

    <app-voter
      *ngFor="let voter of voters"
      [name]="voter"
      (voted)="onVoted($event)">
    </app-voter> 
  `,
  styles: [
  ]
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Dr. IQ', 'Celeritas', 'Bombasto'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
