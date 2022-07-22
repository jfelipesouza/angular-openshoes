import { Component, OnInit } from '@angular/core';
import { INavbarButton } from 'src/app/@types/header';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.css'],
})
export class SearchScreenComponent implements OnInit {
  navButtons: INavbarButton[] = [
    { name: 'SingIn', link: '/singIn', normal: false },
  ];
  constructor() {}

  ngOnInit(): void {
    let y = window.scrollY;
    if (y != 0) {
      window.scroll(0, 0);
    }
  }
}
