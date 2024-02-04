import { Component, EventEmitter, Output } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [MatCheckboxModule, MatDividerModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css',
})
export class FiltrosComponent {
  selectedFilter: string = '';
  numeroDeProductos: number = 0;
  @Output() addFilterEvent = new EventEmitter<string>();
  @Output() addOrderEvent = new EventEmitter<string>();
  @Output() addNumberEvent = new EventEmitter<number>();
  @Output() addSearchEvent = new EventEmitter();

  handleNumero(number: number) {
    this.addNumberEvent.emit(number);
    this.numeroDeProductos = number;
  }

  selectFilter(value: string) {
    this.addFilterEvent.emit(value);
    this.selectedFilter = value;
  }

  orderFilter: string = '';

  orderProducts(value: string) {
    this.addOrderEvent.emit(value);
    this.orderFilter = value;
  }

  handleClick() {
    this.addSearchEvent.emit();
  }

}
