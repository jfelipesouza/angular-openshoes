import { Component, OnInit } from '@angular/core';
import { ProductFocusService } from './product-focus.service'

@Component({
  selector: 'app-product-focus',
  templateUrl: './product-focus.component.html',
  styleUrls: ['./product-focus.component.css']
})
export class ProductFocusComponent implements OnInit {
  showMobileMenu: boolean = true;
  navPosition: string = 'fixed';
  navButtons: { name: string; link: string; normal: boolean }[] = [
    { name: 'Home', link: '#hero', normal: true },
    { name: 'Sobre', link: '#about', normal: true },
    { name: 'Imperdíveis', link: '#hot', normal: true },
    { name: 'Contato', link: '#contact', normal: true },
    { name: 'SingIn', link: 'singIn', normal: false },
  ];

  size: string[] = [];
  modelos: string [] = [];
  productsFocusService: ProductFocusService;

  constructor() { 
    this.productsFocusService = new ProductFocusService();
   }

  ngOnInit(): void {
    this.size = this.productsFocusService.getSize();
    this.modelos = this.productsFocusService.getModelos();
  }

}
