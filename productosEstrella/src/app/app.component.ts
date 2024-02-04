import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoCardComponent } from './info-card/info-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FiltrosComponent } from './filtros/filtros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InfoCardComponent, NavBarComponent, FiltrosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Productos Estrella';
  array = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
  
  onClick() {}
}
