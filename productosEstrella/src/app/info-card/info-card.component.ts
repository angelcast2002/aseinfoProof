import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent implements OnInit {
  clicked: boolean = false;
  @Input() product?: IProduct;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  rating?: number;
  image?: string;

  ngOnInit(): void {
    this.title = this.product?.title;
    this.price = this.product?.price;
    this.description = this.product?.description;
    this.category = this.product?.category;
    this.rating = this.product?.rating.rate;
    this.image = this.product?.image;
  }

  @HostListener('click') onClick() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
}
