import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoCardComponent } from './info-card/info-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Productos Estrella';
}
