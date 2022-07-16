import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  navPosition: string = 'fixed';
  showMobileMenu: boolean = true;
  navButtons: { name: string; link: string; normal: boolean }[] = [
    { name: 'Home', link: '#hero', normal: true },
    { name: 'Sobre', link: '#about', normal: true },
    { name: 'Imperdíveis', link: '#hot', normal: true },
    { name: 'Contato', link: '#contact', normal: true },
    { name: 'SingIn', link: 'singIn', normal: false },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log('');
  }
}
