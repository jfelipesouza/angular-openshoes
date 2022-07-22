import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() src!: string;
  @Input() productName!: string;
  @Input() productPrice!: string;
  @Input() productId!: string;

  productRouter: string = '';

  constructor() {}

  ngOnInit(): void {
    this.productRouter = `/product:${this.productId}`;
  }
}
