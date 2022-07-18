import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
