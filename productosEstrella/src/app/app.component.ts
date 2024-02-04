import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoCardComponent } from './info-card/info-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from './models/product.model';
import { ApiService } from './services/api.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InfoCardComponent,
    NavBarComponent,
    FiltrosComponent,
    HttpClientModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  title = 'Productos Estrella';
  productList: IProduct[] = [];
  preData: IProduct[] = [];
  isLoading: boolean = true;
  filter: string = '';
  order: string = '';
  number: number = 0;
  constructor(private _apiService: ApiService) {}

  getFilter(filter: string) {
    this.filter = filter;
    console.log(this.filter);
  }

  getOrder(order: string) {
    this.order = order;
    console.log(this.order);
  }

  getNumber(number: number) {
    this.number = number;
    console.log(this.number);
  }

  getSearch() {
    this.isLoading = true;
    if (this.number > 0) {
      this._apiService.getProductByLimit(this.number).subscribe((data: IProduct[]) => {
        this.preData = data;
        this.sortProducts();
        this.isLoading = false;
      });
    } else {
      this._apiService.getProducts().subscribe((data: IProduct[]) => {
        this.preData = data;
        this.sortProducts();
        this.isLoading = false;
      });
    }
    
  }

  sortProducts() {
    if (this.filter === '' && this.order === '') {
      this.productList = this.preData;
    } else if (this.order === '' && this.filter === "price") {
      this.productList = this.preData.sort((a, b) => a.price - b.price);
    } else if (this.order === '' && this.filter === "category") {
      this.productList = this.preData.sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.order === '' && this.filter === "name") {
      this.productList = this.preData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.filter === '' && this.order === "lth") {
      this.productList = this.preData.sort((a, b) => a.price - b.price);
    } else if (this.filter === '' && this.order === "htl") {
      this.productList = this.preData.sort((a, b) => b.price - a.price);
    } else {
      if (this.order === 'lth' && this.filter === "price") {
        this.productList = this.preData.sort((a, b) => a.price - b.price);
      } else if (this.order === 'htl' && this.filter === "price") {
        this.productList = this.preData.sort((a, b) => b.price - a.price);
      } else if (this.order === 'lth' && this.filter === "category") {
        this.productList = this.preData.sort((a, b) => a.category.localeCompare(b.category));
      } else if (this.order === 'htl' && this.filter === "category") {
        this.productList = this.preData.sort((a, b) => b.category.localeCompare(a.category));
      } else if (this.order === 'lth' && this.filter === "name") {
        this.productList = this.preData.sort((a, b) => a.title.localeCompare(b.title));
      } else if (this.order === 'htl' && this.filter === "name") {
        this.productList = this.preData.sort((a, b) => b.title.localeCompare(a.title));
      }
    }
  }

  onClick() {}

  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: IProduct[]) => {
      this.isLoading = true;
      console.log(data);
      this.productList = data;
      this.isLoading = false;
    });
  }
}
