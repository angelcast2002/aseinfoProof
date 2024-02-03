import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [],
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {
  selectedFilter: string = '';

  selectFilter(event: any) {
    const checkboxes = document.querySelectorAll('input[name="filter"]');
    checkboxes.forEach((checkbox: any) => {
      if (checkbox !== event.target) {
        checkbox.checked = false;
      }
    });
    this.selectedFilter = event.target.value;
  }
}
