import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from "./top-bar/top-bar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    TopBarComponent
  ]
})
export class AppComponent {
  title = 'phone';
}
