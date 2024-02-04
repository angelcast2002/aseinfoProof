import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  clicked: boolean = false;
  image: string = "../../assets/asusg14.png";

  @HostListener('click') onClick() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }

}
