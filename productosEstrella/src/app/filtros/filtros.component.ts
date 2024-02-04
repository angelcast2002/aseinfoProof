import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [MatCheckboxModule, MatDividerModule, MatInputModule, MatButtonModule],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css',
})
export class FiltrosComponent {
  selectedFilter: string = '';

  selectFilter(value: string) {
    this.selectedFilter = value;
  }

  orderFilter: string = '';

  orderProducts(value: string) {
    this.orderFilter = value;
  }

}
