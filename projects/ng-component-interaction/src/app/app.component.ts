import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroParentComponent } from './hero-parent.component';
import { NameParentComponent } from './name-parent.component';
import { VersionParentComponent } from './version-parent.component';
import { VoteTakerComponent } from './vote-taker.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './countdown-parent.component';
import { MissioncontrolComponent } from './missioncontrol.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroParentComponent,
    NameParentComponent,
    VersionParentComponent,
    VoteTakerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    MissioncontrolComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-component-interaction';
}
